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

async function maskState(page) {
  return page.locator('#stimulus-stage').evaluate(stage => {
    const mask = stage.querySelector('#stimulus-mask');
    const noise = stage.querySelector('.noise-field');
    const target = stage.querySelector('#signal-target');
    const stageBox = stage.getBoundingClientRect();
    const targetBox = target.getBoundingClientRect();
    const noisePointX = Math.min(stageBox.right - 4, Math.max(stageBox.left + 4, 4));
    const noisePointY = Math.min(stageBox.bottom - 4, Math.max(stageBox.top + 4, 4));
    const stageTopElement = document.elementFromPoint(noisePointX, noisePointY);
    const targetTopElement = targetBox.width && targetBox.height
      ? document.elementFromPoint(targetBox.left + targetBox.width / 2, targetBox.top + targetBox.height / 2)
      : null;

    return {
      maskDisplay: getComputedStyle(mask).display,
      maskHidden: mask.hidden,
      noiseDisplay: getComputedStyle(noise).display,
      noiseExposed: stageTopElement === noise,
      targetDisplay: getComputedStyle(target).display,
      targetHidden: target.hidden,
      targetExposed: targetTopElement === target,
    };
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

    await page.locator('input[name="prediction"][value="liberal"]').check();
    await page.locator('#commit-prediction').click();

    const initial = await maskState(page);
    assert.notEqual(initial.maskDisplay, 'none', `${viewport.name}: mask must be visible before a trial`);
    assert.equal(initial.maskHidden, false, `${viewport.name}: mask must not be hidden before a trial`);
    assert.equal(initial.noiseExposed, false, `${viewport.name}: mask must cover the noise field before a trial`);

    let presentTrials = 0;
    let absentTrials = 0;
    for (let trial = 1; trial <= 24; trial += 1) {
      await page.locator('#show-trial').click();
      if (await page.locator('#signal-target').evaluate(target => !target.hidden)) {
        await page.locator('#signal-target').scrollIntoViewIfNeeded();
      }
      const exposed = await maskState(page);
      assert.equal(exposed.maskHidden, true, `${viewport.name} trial ${trial}: mask DOM state must be hidden`);
      assert.equal(exposed.maskDisplay, 'none', `${viewport.name} trial ${trial}: mask computed display must be none`);
      assert.notEqual(exposed.noiseDisplay, 'none', `${viewport.name} trial ${trial}: noise field must render`);
      assert.equal(exposed.noiseExposed, true, `${viewport.name} trial ${trial}: noise field must be exposed`);

      const signalPresent = !exposed.targetHidden;
      if (signalPresent) {
        presentTrials += 1;
        assert.notEqual(exposed.targetDisplay, 'none', `${viewport.name} trial ${trial}: present target must render`);
        assert.equal(exposed.targetExposed, true, `${viewport.name} trial ${trial}: present target must be exposed`);
        await page.locator('#answer-present').click();
      } else {
        absentTrials += 1;
        assert.equal(exposed.targetDisplay, 'none', `${viewport.name} trial ${trial}: absent target must not render`);
        assert.equal(exposed.targetExposed, false, `${viewport.name} trial ${trial}: absent target must not be exposed`);
        await page.locator('#answer-absent').click();
      }

      const covered = await maskState(page);
      assert.notEqual(covered.maskDisplay, 'none', `${viewport.name} trial ${trial}: mask must return after the response`);
      assert.equal(covered.maskHidden, false, `${viewport.name} trial ${trial}: returned mask must not be hidden`);
      assert.equal(covered.noiseExposed, false, `${viewport.name} trial ${trial}: returned mask must cover the noise field`);
    }

    assert.equal(presentTrials, 12, `${viewport.name}: both conditions must include 12 signal-present trials total`);
    assert.equal(absentTrials, 12, `${viewport.name}: both conditions must include 12 signal-absent trials total`);
    assert.equal(await page.locator('#event-log li').count(), 24, `${viewport.name}: event log must contain all 24 trials`);
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
