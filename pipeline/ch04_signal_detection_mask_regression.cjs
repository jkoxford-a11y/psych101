const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require('playwright');

const repoRoot = path.resolve(__dirname, '..');
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'portrait-mobile', width: 390, height: 844 },
  { name: 'landscape-mobile', width: 844, height: 390 },
];

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
};

function createServer() {
  return http.createServer((request, response) => {
    const requestPath = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
    if (requestPath === '/favicon.ico') {
      response.writeHead(204).end();
      return;
    }
    const filePath = path.resolve(repoRoot, `.${requestPath}`);
    if (filePath !== repoRoot && !filePath.startsWith(`${repoRoot}${path.sep}`)) {
      response.writeHead(403).end('Forbidden');
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.writeHead(error.code === 'ENOENT' ? 404 : 500).end(error.message);
        return;
      }
      response.writeHead(200, { 'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream' });
      response.end(data);
    });
  });
}

function chromeExecutable() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    chromium.executablePath(),
  ].filter(Boolean);
  const executable = candidates.find(candidate => fs.existsSync(candidate));
  assert.ok(executable, 'Chrome or Chromium executable not found; set CHROME_PATH.');
  return executable;
}

async function stageState(page) {
  return page.locator('#stimulus-stage').evaluate(stage => {
    const mask = stage.querySelector('#stimulus-mask');
    const canvas = stage.querySelector('#signal-canvas');
    const showButton = stage.querySelector('#show-trial');
    const presentButton = document.querySelector('#answer-present');
    const absentButton = document.querySelector('#answer-absent');
    const stageBox = stage.getBoundingClientRect();
    const sampleX = stageBox.left + stageBox.width / 2;
    const sampleY = stageBox.top + stageBox.height / 2;
    const topElement = document.elementFromPoint(sampleX, sampleY);

    return {
      maskDisplay: getComputedStyle(mask).display,
      maskHidden: mask.hidden,
      canvasDisplay: getComputedStyle(canvas).display,
      canvasExposed: topElement === canvas,
      showHidden: showButton.hidden,
      showDisabled: showButton.disabled,
      presentDisabled: presentButton.disabled,
      absentDisabled: absentButton.disabled,
      maskMessage: stage.querySelector('#stimulus-mask-message').textContent.trim(),
    };
  });
}

async function installCycleObserver(page) {
  await page.evaluate(() => {
    const mask = document.querySelector('#stimulus-mask');
    const canvas = document.querySelector('#signal-canvas');
    const presentButton = document.querySelector('#answer-present');
    const absentButton = document.querySelector('#answer-absent');
    const exposureMs = Number(document.querySelector('#stimulus-stage').dataset.exposureMs);

    window.__signalDetectionCycle = new Promise((resolve, reject) => {
      let exposedAt = null;
      let exposureState = null;
      const timeout = window.setTimeout(() => {
        observer.disconnect();
        reject(new Error('Timed out waiting for automatic stimulus remasking.'));
      }, 2500);

      const observer = new MutationObserver(() => {
        if (mask.hidden && exposedAt === null) {
          exposedAt = performance.now();
          const box = canvas.getBoundingClientRect();
          const topElement = document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2);
          const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
          let minimum = 255;
          let maximum = 0;
          for (let index = 0; index < pixels.length; index += 1600) {
            minimum = Math.min(minimum, pixels[index]);
            maximum = Math.max(maximum, pixels[index]);
          }
          exposureState = {
            canvasExposed: topElement === canvas,
            pixelRange: maximum - minimum,
            presentDisabled: presentButton.disabled,
            absentDisabled: absentButton.disabled,
          };
          return;
        }

        if (!mask.hidden && exposedAt !== null && !presentButton.disabled && !absentButton.disabled) {
          window.clearTimeout(timeout);
          observer.disconnect();
          resolve({
            nominalExposureMs: exposureMs,
            measuredExposureMs: performance.now() - exposedAt,
            exposureState,
          });
        }
      });

      observer.observe(mask, { attributes: true, attributeFilter: ['hidden'] });
    });
  });
}

async function runViewport(browser, baseUrl, viewport) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
  const page = await context.newPage();
  const errors = [];
  page.on('console', message => {
    if (message.type() === 'error') errors.push(`console: ${message.text()}`);
  });
  page.on('pageerror', error => errors.push(`page: ${error.message}`));

  try {
    await page.goto(`${baseUrl}/docs/labs/ch04/signal-detection.html`, { waitUntil: 'load' });
    await page.evaluate(() => sessionStorage.clear());
    await page.reload({ waitUntil: 'load' });

    const stageSettings = await page.locator('#stimulus-stage').evaluate(stage => ({ ...stage.dataset }));
    assert.equal(stageSettings.fixationMs, '450', `${viewport.name}: fixation must remain 450 ms`);
    assert.equal(stageSettings.exposureMs, '100', `${viewport.name}: approved exposure must be 100 ms`);
    assert.equal(stageSettings.targetContrast, '0.10', `${viewport.name}: approved target contrast must be 10%`);
    assert.equal(stageSettings.targetSigma, '20', `${viewport.name}: approved target sigma must be 20`);
    assert.equal(stageSettings.noiseSd, '25', `${viewport.name}: noise standard deviation must be 25`);
    assert.equal(await page.locator('#signal-target').count(), 0, `${viewport.name}: no outlined target element may remain`);
    assert.equal(await page.locator('.noise-field').count(), 0, `${viewport.name}: the stimulus must use a generated canvas, not the old static noise layer`);
    assert.equal(await page.locator('#signal-canvas').count(), 1, `${viewport.name}: one stimulus canvas must exist`);

    await page.locator('input[name="prediction"][value="liberal"]').check();
    await page.locator('#commit-prediction').click();

    const initial = await stageState(page);
    assert.notEqual(initial.maskDisplay, 'none', `${viewport.name}: mask must be visible before a trial`);
    assert.equal(initial.maskHidden, false, `${viewport.name}: mask must not be hidden before a trial`);
    assert.equal(initial.canvasExposed, false, `${viewport.name}: mask must cover the canvas before a trial`);
    assert.equal(initial.presentDisabled, true, `${viewport.name}: present response must be disabled before a trial`);
    assert.equal(initial.absentDisabled, true, `${viewport.name}: absent response must be disabled before a trial`);

    for (let trial = 1; trial <= 24; trial += 1) {
      await installCycleObserver(page);
      await page.locator('#show-trial').click();

      const fixation = await stageState(page);
      assert.equal(fixation.maskHidden, false, `${viewport.name} trial ${trial}: mask must remain visible during fixation`);
      assert.notEqual(fixation.maskDisplay, 'none', `${viewport.name} trial ${trial}: fixation mask must render`);
      assert.equal(fixation.maskMessage, '+', `${viewport.name} trial ${trial}: fixation marker must replace the start button`);
      assert.equal(fixation.showHidden, true, `${viewport.name} trial ${trial}: Show next trial must hide during fixation`);
      assert.equal(fixation.presentDisabled, true, `${viewport.name} trial ${trial}: present response must stay disabled during fixation`);
      assert.equal(fixation.absentDisabled, true, `${viewport.name} trial ${trial}: absent response must stay disabled during fixation`);

      const cycle = await page.evaluate(() => window.__signalDetectionCycle);
      assert.equal(cycle.nominalExposureMs, 100, `${viewport.name} trial ${trial}: cycle must use the approved 100-ms exposure`);
      assert.ok(cycle.measuredExposureMs >= 70, `${viewport.name} trial ${trial}: measured exposure ${cycle.measuredExposureMs} ms ended too early`);
      assert.ok(cycle.measuredExposureMs <= 400, `${viewport.name} trial ${trial}: measured exposure ${cycle.measuredExposureMs} ms was not brief`);
      assert.equal(cycle.exposureState.canvasExposed, true, `${viewport.name} trial ${trial}: generated canvas must be exposed during the flash`);
      assert.ok(cycle.exposureState.pixelRange >= 20, `${viewport.name} trial ${trial}: generated visual noise must contain luminance variation`);
      assert.equal(cycle.exposureState.presentDisabled, true, `${viewport.name} trial ${trial}: present response must be disabled during exposure`);
      assert.equal(cycle.exposureState.absentDisabled, true, `${viewport.name} trial ${trial}: absent response must be disabled during exposure`);

      const remasked = await stageState(page);
      assert.equal(remasked.maskHidden, false, `${viewport.name} trial ${trial}: mask must return automatically before response`);
      assert.notEqual(remasked.maskDisplay, 'none', `${viewport.name} trial ${trial}: returned mask must render`);
      assert.equal(remasked.canvasExposed, false, `${viewport.name} trial ${trial}: returned mask must cover the generated canvas`);
      assert.equal(remasked.maskMessage, 'Respond below.', `${viewport.name} trial ${trial}: response prompt must appear after the flash`);
      assert.equal(remasked.presentDisabled, false, `${viewport.name} trial ${trial}: present response must enable only after remasking`);
      assert.equal(remasked.absentDisabled, false, `${viewport.name} trial ${trial}: absent response must enable only after remasking`);

      await page.locator('#answer-present').click();
      const covered = await stageState(page);
      assert.equal(covered.maskHidden, false, `${viewport.name} trial ${trial}: mask must remain after the response`);
      assert.equal(covered.canvasExposed, false, `${viewport.name} trial ${trial}: canvas must remain covered after the response`);
    }

    assert.equal(await page.locator('#event-log li').count(), 24, `${viewport.name}: event log must contain all 24 trials`);
    assert.equal(await page.locator('#event-log li').filter({ hasText: 'signal present' }).count(), 12, `${viewport.name}: both conditions must include 12 signal-present trials total`);
    assert.equal(await page.locator('#event-log li').filter({ hasText: 'signal absent' }).count(), 12, `${viewport.name}: both conditions must include 12 signal-absent trials total`);
    assert.equal(await page.locator('#event-log li').filter({ hasText: 'Neutral condition' }).count(), 12, `${viewport.name}: neutral condition must complete 12 trials`);
    assert.equal(await page.locator('#event-log li').filter({ hasText: 'Miss-costly condition' }).count(), 12, `${viewport.name}: miss-costly condition must complete 12 trials`);
    assert.equal(await page.locator('#trial-progress').textContent(), '12 of 12 trials', `${viewport.name}: second condition must finish at 12 of 12`);
    assert.equal(errors.length, 0, `${viewport.name}: browser errors: ${errors.join('; ')}`);

    console.log(`PASS ${viewport.name} (${viewport.width}x${viewport.height})`);
  } finally {
    await context.close();
  }
}

(async () => {
  const server = createServer();
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;
  const browser = await chromium.launch({ executablePath: chromeExecutable(), headless: true });

  try {
    for (const viewport of viewports) await runViewport(browser, baseUrl, viewport);
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
