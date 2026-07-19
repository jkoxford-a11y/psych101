const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require('playwright');

const repoRoot = path.resolve(__dirname, '..');
const auditMode = process.argv.includes('--audit');
const pageFilter = (process.argv.find(value => value.startsWith('--page=')) || '').slice('--page='.length);
const viewportFilter = (process.argv.find(value => value.startsWith('--viewport=')) || '').slice('--viewport='.length);
const chaptersDir = path.join(repoRoot, 'docs', 'chapters');
const chapterPages = fs.readdirSync(chaptersDir)
  .filter(name => name.endsWith('.html'))
  .filter(name => !pageFilter || name === pageFilter)
  .sort();

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'laptop', width: 1280, height: 800 },
  { name: 'compact-desktop', width: 1024, height: 768 },
  { name: 'portrait-phone', width: 390, height: 844, mobile: true },
  { name: 'landscape-phone', width: 844, height: 390, mobile: true },
].filter(viewport => !viewportFilter || viewport.name === viewportFilter);

assert.ok(chapterPages.length, `No chapter page matched --page=${pageFilter}`);
assert.ok(viewports.length, `No viewport matched --viewport=${viewportFilter}`);

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webm': 'video/webm',
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

function staticPageState(pageName) {
  const html = fs.readFileSync(path.join(chaptersDir, pageName), 'utf8');
  const expandable = (html.match(/<figure\b[^>]*class="[^"]*\bexpandable\b[^"]*"/g) || []).length;
  const wide = (html.match(/<figure\b[^>]*class="[^"]*\bwide\b[^"]*"/g) || []).length;
  const noExpand = (html.match(/<figure\b[^>]*class="[^"]*\bno-expand\b[^"]*"/g) || []).length;
  const toggles = (html.match(/class="[^"]*\bfigure-expand-toggle\b[^"]*"/g) || []).length;
  const scripts = (html.match(/<script\s+src="\.\.\/js\/figure-expand\.js"/g) || []).length;
  const figuresNeedingScript = expandable + wide - noExpand;

  if (!auditMode) {
    assert.equal(
      scripts,
      figuresNeedingScript > 0 ? 1 : 0,
      `${pageName}: shared expansion script count`,
    );
    assert.equal(toggles, expandable, `${pageName}: every static expandable figure has exactly one toggle`);
    assert.equal(html.includes(' ? '), false, `${pageName}: no bad separator mojibake`);
  }
  return { expandable, wide, noExpand, toggles, scripts };
}

async function auditPage(browser, baseUrl, pageName, viewport) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
  const page = await context.newPage();
  try {
    await page.goto(`${baseUrl}/docs/chapters/${pageName}`, { waitUntil: 'load' });
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'load' });
    const count = await page.locator('.chapter-figure').count();
    const figures = [];
    for (let index = 0; index < count; index += 1) {
      const figure = page.locator('.chapter-figure').nth(index);
      const before = await figure.evaluate(element => {
        const image = element.querySelector('img');
        const toggle = element.querySelector('.figure-expand-toggle');
        const box = image.getBoundingClientRect();
        return {
          className: element.className,
          height: Math.round(box.height),
          natural: `${image.naturalWidth}x${image.naturalHeight}`,
          src: (image.getAttribute('src') || '').split('/').pop(),
          toggle: Boolean(toggle),
          width: Math.round(box.width),
        };
      });
      let expandedWidth = null;
      if (before.toggle) {
        await figure.locator('.figure-expand-toggle').click();
        await page.waitForTimeout(300);
        expandedWidth = await figure.locator('img').evaluate(image => Math.round(image.getBoundingClientRect().width));
        await figure.locator('.figure-expand-toggle').click();
      }
      figures.push({ ...before, expandedWidth });
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    console.log(`AUDIT ${viewport.name} ${pageName} overflow=${overflow} ${JSON.stringify(figures)}`);
  } finally {
    await context.close();
  }
}

async function imageAndMediaState(page) {
  return page.evaluate(() => ({
    images: [...document.querySelectorAll('.chapter-figure img')].map(image => ({
      alt: image.getAttribute('alt'),
      complete: image.complete,
      naturalWidth: image.naturalWidth,
      src: image.getAttribute('src'),
    })),
    portraits: [...document.querySelectorAll('.portrait-strip')].map(strip => ({
      className: strip.className,
      toggles: strip.querySelectorAll('.figure-expand-toggle').length,
    })),
    videos: [...document.querySelectorAll('video, .chapter-video')].map(video => ({
      className: video.className,
      toggles: video.querySelectorAll ? video.querySelectorAll('.figure-expand-toggle').length : 0,
    })),
    noExpand: [...document.querySelectorAll('.chapter-figure.no-expand')].map(figure => ({
      expanded: figure.classList.contains('is-expanded'),
      toggles: figure.querySelectorAll('.figure-expand-toggle').length,
    })),
  }));
}

async function figureState(figure) {
  return figure.evaluate(element => {
    const image = element.querySelector('img');
    const toggle = element.querySelector('.figure-expand-toggle');
    const caption = element.querySelector('figcaption');
    const sidebar = document.querySelector('.sidebar');
    const imageBox = image.getBoundingClientRect();
    const figureBox = element.getBoundingClientRect();
    const captionBox = caption ? caption.getBoundingClientRect() : null;
    const sidebarBox = sidebar ? sidebar.getBoundingClientRect() : null;
    const parentStyle = getComputedStyle(element.parentElement);
    const parentBox = element.parentElement.getBoundingClientRect();
    return {
      ariaExpanded: toggle && toggle.getAttribute('aria-expanded'),
      ariaLabel: toggle && toggle.getAttribute('aria-label'),
      captionWidth: captionBox ? captionBox.width : null,
      cursor: getComputedStyle(image).cursor,
      figureWidth: figureBox.width,
      imageLeft: imageBox.left,
      imageRight: imageBox.right,
      imageWidth: imageBox.width,
      hrefMatchesSrc: toggle && toggle.tagName === 'A' ? toggle.href === image.currentSrc : false,
      naturalHeight: image.naturalHeight,
      naturalWidth: image.naturalWidth,
      pageClientWidth: document.documentElement.clientWidth,
      pageScrollWidth: document.documentElement.scrollWidth,
      parentContentWidth: parentBox.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight),
      sidebarRight: sidebarBox && sidebarBox.width > 1 ? sidebarBox.right : 0,
      tagName: toggle && toggle.tagName,
      tabIndex: toggle && toggle.tabIndex,
      toggleCount: element.querySelectorAll('.figure-expand-toggle').length,
    };
  });
}

function assertInsideUsableViewport(state, label) {
  assert.ok(state.imageLeft >= state.sidebarRight - 1, `${label}: image does not overlap the open sidebar`);
  assert.ok(state.imageLeft >= -1, `${label}: image left edge stays in the viewport`);
  assert.ok(state.imageRight <= state.pageClientWidth + 1, `${label}: image right edge stays in the viewport`);
  assert.ok(state.pageScrollWidth <= state.pageClientWidth + 1, `${label}: no page-level horizontal overflow`);
}

async function testFigure(figure, pageName, viewport, index, poorCandidates) {
  const label = `${viewport.name} ${pageName} figure ${index + 1}`;
  await figure.scrollIntoViewIfNeeded();
  const toggle = figure.locator('.figure-expand-toggle');
  const before = await figureState(figure);

  assert.equal(before.toggleCount, 1, `${label}: exactly one toggle`);
  assert.equal(before.tagName, 'A', `${label}: image link preserves the no-JavaScript fallback`);
  assert.equal(before.hrefMatchesSrc, true, `${label}: fallback link targets the displayed image`);
  assert.ok(before.tabIndex >= 0, `${label}: toggle is keyboard focusable`);
  assert.equal(before.ariaExpanded, 'false', `${label}: initially collapsed`);
  assert.equal(before.ariaLabel, 'Expand figure', `${label}: initial accessible label`);
  assert.equal(before.cursor, 'zoom-in', `${label}: collapsed zoom cursor`);
  assertInsideUsableViewport(before, `${label} collapsed`);

  if (index % 2 === 0) {
    await toggle.focus();
    await toggle.press('Enter');
  } else {
    await toggle.click();
  }
  const expanded = await figureState(figure);
  assert.equal(expanded.ariaExpanded, 'true', `${label}: expands on activation`);
  assert.equal(expanded.ariaLabel, 'Collapse figure', `${label}: expanded accessible label`);
  assert.equal(expanded.cursor, 'zoom-out', `${label}: expanded zoom cursor`);
  assertInsideUsableViewport(expanded, `${label} expanded`);
  if (expanded.captionWidth !== null) {
    assert.ok(expanded.captionWidth <= 720, `${label}: caption remains at readable prose width`);
    if (expanded.imageWidth > 840) {
      assert.ok(expanded.captionWidth <= expanded.imageWidth - 100, `${label}: caption stays narrower than a wide image`);
    }
  }

  if (viewport.name === 'desktop' || viewport.name === 'laptop') {
    const materiallyLarger = expanded.imageWidth >= before.imageWidth * 1.2 - 1
      || expanded.imageWidth >= before.imageWidth + 119;
    const intrinsicPermits = before.naturalWidth >= before.imageWidth * 1.2 - 1
      || before.naturalWidth >= before.imageWidth + 119;
    if (intrinsicPermits) {
      assert.ok(materiallyLarger, `${label}: expansion is materially visible when intrinsic width permits it`);
    } else if (!materiallyLarger) {
      poorCandidates.add(`${pageName} figure ${index + 1} (${before.naturalWidth}x${before.naturalHeight})`);
    }
  }

  if (viewport.mobile) {
    assert.ok(
      expanded.figureWidth >= expanded.parentContentWidth - 5,
      `${label}: expanded figure uses full safe parent width (${expanded.figureWidth}px vs ${expanded.parentContentWidth}px)`,
    );
    assert.ok(
      expanded.imageWidth >= before.imageWidth * 1.15 - 1 || expanded.imageWidth >= before.imageWidth + 39,
      `${label}: mobile expansion remains visibly meaningful`,
    );
  }

  if (index % 2 === 0) {
    await toggle.press('Enter');
  } else {
    await toggle.click();
  }
  const after = await figureState(figure);
  assert.equal(after.ariaExpanded, 'false', `${label}: second activation collapses`);
  assert.equal(after.ariaLabel, 'Expand figure', `${label}: collapsed label restored`);
  assert.ok(Math.abs(after.imageWidth - before.imageWidth) <= 1, `${label}: original image width restored`);
  assert.ok(Math.abs(after.figureWidth - before.figureWidth) <= 1, `${label}: original figure width restored`);
}

async function testPage(browser, baseUrl, pageName, viewport, poorCandidates) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    hasTouch: Boolean(viewport.mobile),
    isMobile: Boolean(viewport.mobile),
  });
  const page = await context.newPage();
  const errors = [];
  const failedResources = [];
  page.on('console', message => {
    if (message.type() === 'error') errors.push(`console: ${message.text()}`);
  });
  page.on('pageerror', error => errors.push(`page: ${error.message}`));
  page.on('response', response => {
    if (response.status() >= 400) failedResources.push(`${response.status()} ${response.url()}`);
  });

  try {
    await page.goto(`${baseUrl}/docs/chapters/${pageName}`, { waitUntil: 'load' });
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'load' });
    await page.waitForTimeout(50);

    const mediaBefore = await imageAndMediaState(page);
    for (const image of mediaBefore.images) {
      assert.ok(image.alt && image.alt.trim(), `${viewport.name} ${pageName}: non-empty alt for ${image.src}`);
      assert.ok(image.complete && image.naturalWidth > 0, `${viewport.name} ${pageName}: image loads ${image.src}`);
    }
    for (const portrait of mediaBefore.portraits) {
      assert.equal(portrait.toggles, 0, `${viewport.name} ${pageName}: portrait strips are not expandable`);
      assert.equal(/\bexpandable\b/.test(portrait.className), false, `${viewport.name} ${pageName}: portrait strip class unchanged`);
    }
    for (const video of mediaBefore.videos) {
      assert.equal(video.toggles, 0, `${viewport.name} ${pageName}: video media are not expandable`);
      assert.equal(/\bexpandable\b/.test(video.className), false, `${viewport.name} ${pageName}: video class unchanged`);
    }
    for (const noExpand of mediaBefore.noExpand) {
      assert.equal(noExpand.toggles, 0, `${viewport.name} ${pageName}: no-expand figure has no toggle`);
      assert.equal(noExpand.expanded, false, `${viewport.name} ${pageName}: no-expand figure stays unexpanded`);
    }

    const runtimeWiring = await page.evaluate(() => ({
      needsScript: Boolean(document.querySelector('.chapter-figure.expandable, .chapter-figure.wide')),
      scriptCount: document.querySelectorAll('script[src$="/js/figure-expand.js"]').length,
    }));
    assert.equal(
      runtimeWiring.scriptCount,
      runtimeWiring.needsScript ? 1 : 0,
      `${viewport.name} ${pageName}: runtime shared script count`,
    );

    const pageWidth = await page.evaluate(() => ({
      client: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    assert.ok(pageWidth.scroll <= pageWidth.client + 1, `${viewport.name} ${pageName}: no initial horizontal overflow`);

    const figures = page.locator('.chapter-figure.expandable:not(.no-expand)');
    const count = await figures.count();
    for (let index = 0; index < count; index += 1) {
      await testFigure(figures.nth(index), pageName, viewport, index, poorCandidates);
    }

    const mediaAfter = await imageAndMediaState(page);
    assert.deepEqual(mediaAfter.portraits, mediaBefore.portraits, `${viewport.name} ${pageName}: portrait strips remain unaffected`);
    assert.deepEqual(mediaAfter.videos, mediaBefore.videos, `${viewport.name} ${pageName}: videos remain unaffected`);
    assert.deepEqual(mediaAfter.noExpand, mediaBefore.noExpand, `${viewport.name} ${pageName}: no-expand figures remain unaffected`);
    assert.equal(failedResources.length, 0, `${viewport.name} ${pageName}: broken resources: ${failedResources.join('; ')}`);
    assert.equal(errors.length, 0, `${viewport.name} ${pageName}: browser errors: ${errors.join('; ')}`);
    return count;
  } finally {
    await context.close();
  }
}

(async () => {
  const staticStates = new Map(chapterPages.map(pageName => [pageName, staticPageState(pageName)]));
  if (auditMode) {
    for (const [pageName, state] of staticStates) console.log(`STATIC ${pageName} ${JSON.stringify(state)}`);
  }
  const server = createServer();
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;
  const browser = await chromium.launch({ executablePath: chromeExecutable(), headless: true });
  const poorCandidates = new Set();

  try {
    if (auditMode) {
      for (const viewport of viewports.slice(0, 2)) {
        for (const pageName of chapterPages) await auditPage(browser, baseUrl, pageName, viewport);
      }
      return;
    }
    for (const viewport of viewports) {
      let figureCount = 0;
      for (const pageName of chapterPages) {
        figureCount += await testPage(browser, baseUrl, pageName, viewport, poorCandidates);
      }
      console.log(`PASS ${viewport.name} (${viewport.width}x${viewport.height}): ${chapterPages.length} pages, ${figureCount} expandable figures`);
    }
    const staticSummary = [...staticStates.values()].reduce((total, state) => total + state.expandable + state.wide, 0);
    console.log(`PASS static wiring: ${chapterPages.length} pages, ${staticSummary} expandable or legacy-wide declarations`);
    if (poorCandidates.size) {
      console.log(`INFO poor expansion candidates: ${[...poorCandidates].join('; ')}`);
    } else {
      console.log('INFO poor expansion candidates: none');
    }
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
