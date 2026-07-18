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

const labs = [
  ['docs/labs/ch02/correlation-causation.html', 'psych101-lab-ch02-correlation-causation-v3'],
  ['docs/labs/ch03/action-potential-threshold.html', 'psych101-lab-ch03-action-potential-threshold'],
  ['docs/labs/ch03/chemical-imbalance-claim-check.html', 'psych101-lab-ch03-chemical-imbalance-claim-check'],
  ['docs/labs/ch03/dopamine-prediction-error.html', 'psych101-lab-ch03-dopamine-prediction-error'],
  ['docs/labs/ch04/blind-spot-filling-in.html', 'psych101-ch04-blind-spot'],
  ['docs/labs/ch04/context-and-ambiguous-perception.html', 'psych101-ch04-context'],
  ['docs/labs/ch04/signal-detection.html', 'psych101-ch04-signal-detection'],
  ['docs/labs/ch04/webers-law.html', 'psych101-ch04-webers-law'],
  ['docs/labs/ch05/consciousness-evidence-claim-check.html', 'psych101-lab-ch05-consciousness-evidence-claim-check-v1'],
  ['docs/labs/ch06/process-s-process-c.html', 'psych101-lab-ch06-process-s-process-c-v1'],
  ['docs/labs/ch06/sleep-state-detective.html', 'psych101-lab-ch06-sleep-state-detective-v1'],
  ['docs/labs/ch07/classical-conditioning.html', 'psych101-lab-ch07-classical-conditioning-v2'],
  ['docs/labs/ch08/interactive-imagery.html', 'psych101-lab-ch08-interactive-imagery-v1'],
  ['docs/labs/ch08/levels-of-processing.html', 'psych101-lab-ch08-levels-of-processing-v1'],
  ['docs/labs/ch08/self-reference-effect.html', 'psych101-lab-ch08-self-reference-effect-v1'],
  ['docs/labs/ch09/fluid-intelligence-rule-finding.html', 'psych101-lab-ch09-fluid-intelligence-rule-finding'],
  ['docs/labs/ch10/zpd-fading-support.html', 'psych101_ch10_zpd_fading_support_v1'],
  ['docs/labs/ch11/change-the-situation.html', 'psych101_ch11_change_situation_v1'],
  ['docs/labs/ch12/coping-fit.html', 'psych101-ch12-coping-fit-v1'],
  ['docs/labs/ch13/diagnosis-under-uncertainty.html', 'psych101-ch13-diagnosis-uncertainty-v1'],
].map(([pagePath, storageKey]) => ({ pagePath, storageKey }))
  .filter(lab => !process.env.LAB_FILTER || lab.pagePath.includes(process.env.LAB_FILTER));

const richResponse = 'The identical context and top-down and bottom-up evidence show threshold, action potential, firing rate, cue, expectation, prediction error, surrounding information, plausible continuation, difference threshold, proportion, criterion, hits, false alarms, zone of proximal development, scaffolding, assisted performance, independent transfer, unanimity, authority relationship, proximity, diffusion of responsibility, situational constraint, support, mechanism, evidence, and uncertainty in this explanation.';

function createServer() {
  return http.createServer((request, response) => {
    const requestPath = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
    if (requestPath === '/favicon.ico') return response.writeHead(204).end();
    const filePath = path.resolve(repoRoot, `.${requestPath}`);
    if (filePath !== repoRoot && !filePath.startsWith(`${repoRoot}${path.sep}`)) return response.writeHead(403).end('Forbidden');
    fs.readFile(filePath, (error, data) => {
      if (error) return response.writeHead(error.code === 'ENOENT' ? 404 : 500).end(error.message);
      const types = { '.css': 'text/css; charset=utf-8', '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml' };
      response.writeHead(200, { 'Content-Type': types[path.extname(filePath)] || 'application/octet-stream' });
      response.end(data);
    });
  });
}

function chromeExecutable() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    chromium.executablePath(),
  ].filter(Boolean);
  const executable = candidates.find(candidate => fs.existsSync(candidate));
  assert.ok(executable, 'Chrome or Chromium executable not found; set CHROME_PATH.');
  return executable;
}

async function fillVisibleControls(page, selector) {
  await page.locator(selector).evaluateAll((controls, response) => {
    const visible = element => {
      const style = getComputedStyle(element);
      return style.display !== 'none' && style.visibility !== 'hidden' && element.getClientRects().length > 0 && !element.disabled;
    };
    const chosenRadioNames = new Set();
    controls.forEach(control => {
      if (!visible(control)) return;
      if (control.type === 'radio') {
        if (chosenRadioNames.has(control.name)) return;
        control.checked = true;
        chosenRadioNames.add(control.name);
      } else if (control.type === 'checkbox') {
        control.checked = true;
      } else if (control.tagName === 'SELECT') {
        const option = Array.from(control.options).find(item => item.value && !item.disabled);
        if (option) control.value = option.value;
      } else if (control.type === 'number') {
        const min = Number(control.min);
        control.value = Number.isFinite(min) ? String(Math.max(min, 50)) : '50';
      } else if (control.type === 'range') {
        control.value = control.value || control.min || '1';
      } else if (control.tagName === 'TEXTAREA' || control.type === 'text') {
        control.value = response;
      }
      control.dispatchEvent(new Event('input', { bubbles: true }));
      control.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }, richResponse);
}

async function predictionSnapshot(page) {
  return page.locator('.lab-prediction-controls').evaluate(panel => Array.from(panel.querySelectorAll('input, textarea, select')).map(control => ({
    id: control.id,
    name: control.name,
    type: control.type,
    value: control.value,
    checked: Boolean(control.checked),
    disabled: Boolean(control.disabled),
  })));
}

async function assertHiddenPanels(page, label) {
  const failures = await page.locator('[hidden]').evaluateAll(elements => elements.map(element => {
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    const center = rect.width && rect.height ? document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2) : null;
    return style.display === 'none' && rect.width === 0 && rect.height === 0 && center !== element ? '' : `${element.id || element.tagName}: display=${style.display}, size=${rect.width}x${rect.height}`;
  }).filter(Boolean));
  assert.deepEqual(failures, [], `${label}: hidden elements must be absent from computed layout and hit testing`);
}

async function commitFreshPrediction(page, lab, label) {
  const commit = page.locator('#commit-prediction, #commit-predictions');
  assert.equal(await commit.count(), 1, `${label}: one commit control`);
  assert.equal(await page.locator('#lab-session-controls').count(), 1, `${label}: one shared session control`);
  assert.equal(await page.locator('#lab-session-controls').isVisible(), false, `${label}: fresh start-over hidden`);
  assert.equal(await page.locator('#session-resume-status').textContent(), '', `${label}: fresh load has no resumed message`);

  await commit.click();
  const predictionStatus = await page.locator('#prediction-status').count() ? page.locator('#prediction-status') : page.locator('#progress-status');
  const missingStatus = await predictionStatus.textContent();
  assert.ok(missingStatus.trim(), `${label}: missing prediction must be explained`);
  assert.equal(await page.evaluate(key => sessionStorage.getItem(key), lab.storageKey), null, `${label}: invalid commit must not save progress`);

  await fillVisibleControls(page, '.lab-prediction-controls input, .lab-prediction-controls textarea, .lab-prediction-controls select');
  await commit.click();
  assert.equal(await commit.isDisabled(), true, `${label}: committed button disabled`);
  assert.equal(await page.locator('#lab-session-controls').isVisible(), true, `${label}: start-over reachable after commit`);
  assert.ok(await page.evaluate(key => sessionStorage.getItem(key), lab.storageKey), `${label}: committed state saved`);
  const snapshot = await predictionSnapshot(page);
  const meaningful = snapshot.filter(control => control.type !== 'hidden');
  assert.ok(meaningful.some(control => control.checked || control.value), `${label}: committed value visibly retained`);
  assert.ok(meaningful.every(control => control.disabled), `${label}: committed prediction controls frozen`);
  await assertHiddenPanels(page, label);
  return snapshot;
}

async function assertRestored(page, beforeReload, label) {
  await page.reload({ waitUntil: 'load' });
  assert.equal((await page.locator('#session-resume-status').textContent()).trim(), 'Resumed progress from this browser-tab session.', `${label}: restored session announced`);
  assert.equal(await page.locator('#lab-session-controls').isVisible(), true, `${label}: restored start-over visible`);
  const afterReload = await predictionSnapshot(page);
  assert.deepEqual(afterReload, beforeReload, `${label}: committed prediction visibly restored and frozen`);
  const activePanels = await page.locator('main section[id]:not(.lab-prediction-panel)').evaluateAll(sections => sections.filter(section => getComputedStyle(section).display !== 'none' && section.getClientRects().length).map(section => section.id));
  assert.ok(activePanels.length, `${label}: restored active phase visible`);
  await assertHiddenPanels(page, label);
}

async function advanceOneMiddleAction(page, label) {
  await fillVisibleControls(page, 'main section:not(.lab-prediction-panel) input, main section:not(.lab-prediction-panel) textarea, main section:not(.lab-prediction-panel) select');
  const candidates = page.locator('main section:not(.lab-prediction-panel) button.lab-btn:visible:not(#restart-lab):not(#reset-lab):not(#save-transfer)');
  const count = await candidates.count();
  for (let index = 0; index < count; index += 1) {
    const button = candidates.nth(index);
    if (await button.isEnabled()) {
      await button.click();
      await page.waitForTimeout(40);
      return;
    }
  }
  throw new Error(`${label}: no usable middle-phase action found after commitment`);
}

async function restartAndVerify(page, lab, label, keyboard) {
  const restart = page.locator('#restart-lab, #reset-lab');
  assert.equal(await restart.count(), 1, `${label}: exactly one start-over control`);
  if (keyboard) {
    await restart.focus();
    await page.keyboard.press('Enter');
  } else {
    await restart.click();
  }
  assert.equal(await page.evaluate(key => sessionStorage.getItem(key), lab.storageKey), null, `${label}: restart removes storage key`);
  assert.equal(await page.locator('#lab-session-controls').isVisible(), false, `${label}: start-over hides after restart`);
  const commit = page.locator('#commit-prediction, #commit-predictions');
  assert.equal(await commit.isEnabled(), true, `${label}: commit re-enabled after restart`);
  const resetPrediction = await predictionSnapshot(page);
  assert.ok(resetPrediction.filter(control => control.type !== 'hidden').every(control => !control.disabled && (control.type === 'radio' || control.type === 'checkbox' ? !control.checked : !control.value)), `${label}: prediction controls cleared and enabled`);
  const focusId = await page.evaluate(() => document.activeElement && document.activeElement.id);
  const focusInPrediction = await page.evaluate(() => document.querySelector('.lab-prediction-panel').contains(document.activeElement));
  assert.ok(focusId === 'prediction-heading' || resetPrediction.some(control => control.id === focusId) || focusInPrediction, `${label}: restart focus returns to prediction`);
  await page.reload({ waitUntil: 'load' });
  assert.equal(await page.locator('#session-resume-status').textContent(), '', `${label}: discarded run stays discarded after reload`);
  assert.equal(await commit.isEnabled(), true, `${label}: fresh state remains usable after reload`);
}

async function driveToCompletion(page, label) {
  for (let step = 0; step < 320; step += 1) {
    const transfer = page.locator('#transfer-panel');
    const finishLab = page.locator('#finish-lab');
    if (await finishLab.count() === 1 && await page.locator('#summary-panel').isVisible()) return;
    if (await transfer.isVisible()) {
      await fillVisibleControls(page, '#transfer-panel input, #transfer-panel textarea, #transfer-panel select');
      const saveTransfer = page.locator('#save-transfer, #submit-transfer');
      if (await saveTransfer.count() === 1 && await saveTransfer.isEnabled()) await saveTransfer.click();
      if (await finishLab.count() === 0) return;
    }

    await fillVisibleControls(page, 'main input, main textarea, main select');
    const candidates = page.locator('main button.lab-btn:visible:not(#restart-lab):not(#reset-lab):not(#save-transfer):not(#mirror-board)');
    const count = await candidates.count();
    if (process.env.DEBUG_LAB_STATE) {
      const ids = await candidates.evaluateAll(buttons => buttons.filter(button => !button.disabled).map(button => button.id));
      const panels = await page.locator('main section[id]:visible').evaluateAll(sections => sections.map(section => section.id));
      console.log(`DEBUG ${label} step ${step}: buttons=${ids.join(',')} panels=${panels.join(',')}`);
    }
    let clicked = false;
    for (let index = count - 1; index >= 0; index -= 1) {
      const button = candidates.nth(index);
      if (await button.isEnabled()) {
        await button.click();
        clicked = true;
        break;
      }
    }
    assert.ok(clicked, `${label}: completion driver found no enabled action at step ${step}`);
    await page.waitForTimeout(page.url().includes('/ch08/') ? 330 : 30);
  }
  throw new Error(`${label}: completion driver exceeded its step limit`);
}

async function completionSummaryText(page) {
  return page.evaluate(() => {
    const summary = document.querySelector('#completion-summary, #summary-score, #transfer-summary, #summary-prediction');
    return summary ? summary.textContent.trim() : '';
  });
}

async function testLab(browser, baseUrl, lab, viewport) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
  const page = await context.newPage();
  const errors = [];
  page.on('console', message => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
  page.on('pageerror', error => errors.push(`page: ${error.message}`));
  const label = `${viewport.name} ${lab.pagePath}`;

  try {
    await page.goto(`${baseUrl}/${lab.pagePath}`, { waitUntil: 'load' });
    await page.evaluate(() => sessionStorage.clear());
    await page.reload({ waitUntil: 'load' });
    assert.equal(await page.locator('body').getAttribute('data-lab-storage-key'), lab.storageKey, `${label}: declared storage key`);

    const committedSnapshot = await commitFreshPrediction(page, lab, label);
    await assertRestored(page, committedSnapshot, label);
    const logCountBeforeMiddle = await page.locator('.event-log li, #event-log li, #event-list li').count();
    await advanceOneMiddleAction(page, label);
    await page.reload({ waitUntil: 'load' });
    assert.equal((await page.locator('#session-resume-status').textContent()).trim(), 'Resumed progress from this browser-tab session.', `${label}: middle-phase reload announced`);
    const logCountAfterMiddleReload = await page.locator('.event-log li, #event-log li, #event-list li').count();
    assert.ok(logCountAfterMiddleReload >= logCountBeforeMiddle, `${label}: middle reload did not lose prior events`);
    await assertHiddenPanels(page, label);
    await restartAndVerify(page, lab, `${label} unfinished`, true);

    if (viewport.name === 'desktop') {
      await commitFreshPrediction(page, lab, `${label} completion`);
      await driveToCompletion(page, `${label} completion`);
      const completedPanelVisible = await page.locator('#transfer-panel').isVisible() || (await page.locator('#summary-panel').count() === 1 && await page.locator('#summary-panel').isVisible());
      assert.equal(completedPanelVisible, true, `${label}: completed panel visible`);
      const summaryBeforeReload = await completionSummaryText(page);
      assert.ok(summaryBeforeReload, `${label}: completed summary populated`);
      const completedLogCount = await page.locator('.event-log li, #event-log li, #event-list li').count();
      await page.reload({ waitUntil: 'load' });
      const restoredCompletedPanel = await page.locator('#transfer-panel').isVisible() || (await page.locator('#summary-panel').count() === 1 && await page.locator('#summary-panel').isVisible());
      assert.equal(restoredCompletedPanel, true, `${label}: completed state restored`);
      assert.equal(await completionSummaryText(page), summaryBeforeReload, `${label}: completion summary restored without duplication`);
      assert.equal(await page.locator('.event-log li, #event-log li, #event-list li').count(), completedLogCount, `${label}: completed reload does not duplicate events`);
      assert.equal((await page.locator('#session-resume-status').textContent()).trim(), 'Resumed progress from this browser-tab session.', `${label}: completed reload announced`);
      await restartAndVerify(page, lab, `${label} completed`, false);
    }

    const pageWidth = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
    assert.ok(pageWidth.scroll <= pageWidth.client + 1, `${label}: no page-level horizontal overflow`);
    assert.deepEqual(errors, [], `${label}: no console/page errors`);
    console.log(`PASS ${label}`);
  } finally {
    await context.close();
  }
}

(async () => {
  assert.equal(new Set(labs.map(lab => lab.storageKey)).size, labs.length, 'Storage keys must be unique.');
  const server = createServer();
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ executablePath: chromeExecutable(), headless: true });

  try {
    for (const viewport of viewports) {
      for (const lab of labs) await testLab(browser, baseUrl, lab, viewport);
    }
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
