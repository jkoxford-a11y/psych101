#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(process.argv[2] || process.cwd());

const pages = [
  ["Prologue", "source/chapters/prologue-how-to-study.md", "docs/chapters/prologue.html"],
  ["1", "source/chapters/ch01-history-approaches.md", "docs/chapters/01-history-approaches.html"],
  ["2", "source/chapters/ch02-research-methods.md", "docs/chapters/02-research-methods.html"],
  ["3", "source/chapters/ch03-neuroscience-biological-bases.md", "docs/chapters/03-neuroscience.html"],
  ["4", "source/chapters/ch04-sensation-perception.md", "docs/chapters/04-sensation-perception.html"],
  ["5", "source/chapters/ch05-consciousness.md", "docs/chapters/05-consciousness.html"],
  ["6", "source/chapters/ch06-sleep.md", "docs/chapters/06-sleep.html"],
  ["7", "source/chapters/ch07-learning.md", "docs/chapters/07-learning.html"],
  ["8", "source/chapters/ch08-memory.md", "docs/chapters/08-memory.html"],
  ["9", "source/chapters/09-thinking-language-intelligence.md", "docs/chapters/09-thinking-language-intelligence.html"],
  ["10", "source/chapters/ch10-lifespan-development.md", "docs/chapters/10-lifespan-development.html"],
  ["11", "source/chapters/ch11-social-psychology.md", "docs/chapters/11-social-psychology.html"],
  ["12", "source/chapters/ch12-emotion-stress-coping.md", "docs/chapters/12-emotion-stress-coping.html"],
  ["13", "source/chapters/ch13-psychological-disorders-therapy.md", "docs/chapters/13-disorders-therapy.html"],
];

const instructionalVerbs = new Set([
  "analyze", "apply", "assess", "classify", "compare", "contrast", "define", "describe",
  "diagram", "differentiate", "distinguish", "evaluate", "explain", "identify", "illustrate",
  "interpret", "list", "name", "predict", "recognize", "relate", "separate", "summarize",
  "trace", "use", "examine", "map", "construct", "calculate", "demonstrate", "discuss",
  "generate", "select", "sequence",
]);

function read(rel) { return fs.readFileSync(path.join(ROOT, rel), "utf8"); }
function stripTags(s) {
  return s.replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"').replace(/\s+/g, " ").trim();
}
function attr(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, "i"));
  return match ? match[2] : "";
}
function section(markdown, headingPattern) {
  const match = markdown.match(new RegExp(`^##\\s+(?:${headingPattern})\\s*$([\\s\\S]*?)(?=^##\\s|(?![\\s\\S]))`, "m"));
  return match ? match[1] : "";
}
function markdownPlain(s) {
  return s.replace(/<!--.*?-->/g, "").replace(/\*\*|__|\*|_/g, "").replace(/<[^>]+>/g, " ")
    .replace(/\[[^\]]+\]\([^\)]+\)/g, (m) => m.replace(/\]\(.*/, "").slice(1)).replace(/\s+/g, " ").trim();
}
function objectivesFor(markdown) {
  const body = section(markdown, "Learning Objectives");
  const items = [];
  for (const line of body.split(/\r?\n/)) {
    const match = line.match(/^\s*(\d+)\.\s+(.+?)\s*$/);
    if (!match) continue;
    const raw = match[2];
    const plain = markdownPlain(raw);
    const tokens = plain.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g) || [];
    const verbIndex = tokens.findIndex((token) => instructionalVerbs.has(token.toLowerCase()));
    const verb = verbIndex >= 0 ? tokens[verbIndex] : "";
    const verbPattern = verb ? new RegExp(`\\*\\*${verb.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}\\*\\*`, "i") : null;
    const actionVerbs = tokens.filter((token) => instructionalVerbs.has(token.toLowerCase()));
    items.push({
      number: Number(match[1]), raw, plain,
      openingWords: tokens.slice(0, Math.min(6, tokens.length)).join(" "),
      instructionalVerb: verb,
      verbPosition: verbIndex + 1,
      beginsWithMeasurableVerb: verbIndex === 0,
      firstVerbBold: Boolean(verbPattern && verbPattern.test(raw)),
      openingVerbBold: Boolean(verb && new RegExp(`^\\*\\*${verb}\\*\\*`, "i").test(raw)),
      actionVerbCount: actionVerbs.length,
      possibleOverload: actionVerbs.length >= 4,
    });
  }
  return items;
}

function reviewQuestions(markdown) {
  const body = section(markdown, "Review Questions|Stop and Retrieve");
  const starts = [];
  const re = /^\s*(?:\*\*(\d+)\.\*\*|(\d+)\.)\s+(.+)$/gm;
  let m;
  while ((m = re.exec(body))) starts.push({ index: m.index, number: Number(m[1] || m[2]), stem: m[3] });
  return starts.map((q, i) => {
    const block = body.slice(q.index, i + 1 < starts.length ? starts[i + 1].index : body.length);
    const options = [];
    for (const om of block.matchAll(/^\s*([a-d])[\)\.]\s+(.+?)\s*$/gmi)) options.push({ letter: om[1].toLowerCase(), text: om[2] });
    let answer = "";
    const answerMatch = block.match(/(?:Answer\s*:\s*|<strong>\s*)([a-d])\s*\.(?:\s*<\/strong>)?/i);
    if (answerMatch) answer = answerMatch[1].toLowerCase();
    const positionRefs = [...new Set([...block.matchAll(/(?:Why\s+)?\(([a-d])\)|why\s+([a-d])\s+is\s+tempting/gi)]
      .map((x) => (x[1] || x[2]).toLowerCase()))];
    return { number: q.number, stem: markdownPlain(q.stem), optionCount: options.length, options, answer,
      multipleChoice: options.length >= 2, positionCoupledRationaleLetters: positionRefs };
  });
}

function answerSummary(questions) {
  const mc = questions.filter((q) => q.multipleChoice);
  const letters = mc.map((q) => q.answer || "?");
  const counts = Object.fromEntries("abcd".split("").map((letter) => [letter, letters.filter((x) => x === letter).length]));
  let longest = { letter: "", length: 0, questions: [] };
  for (let i = 0; i < letters.length;) {
    let j = i + 1;
    while (j < letters.length && letters[j] === letters[i]) j++;
    if (letters[i] !== "?" && j - i > longest.length) longest = { letter: letters[i], length: j - i, questions: mc.slice(i, j).map((q) => q.number) };
    i = j;
  }
  const concentrations = "abcd".split("").map((letter) => ({ letter, questions: mc.filter((q) => q.answer === letter).map((q) => q.number) }))
    .filter((x) => mc.length && x.questions.length / mc.length > 0.45);
  return {
    total: mc.length, counts,
    percentages: Object.fromEntries("abcd".split("").map((letter) => [letter, mc.length ? +(100 * counts[letter] / mc.length).toFixed(1) : 0])),
    longestRun: longest,
    unused: mc.length ? "abcd".split("").filter((letter) => counts[letter] === 0) : [],
    concentrations,
    unanswered: mc.filter((q) => !q.answer).map((q) => q.number),
    positionCoupledRationales: mc.filter((q) => q.positionCoupledRationaleLetters.length).map((q) => ({ question: q.number, letters: q.positionCoupledRationaleLetters })),
  };
}

function idsIn(html) {
  const counts = {};
  for (const m of html.matchAll(/\bid\s*=\s*(["'])(.*?)\1/gi)) counts[m[2]] = (counts[m[2]] || 0) + 1;
  return counts;
}
function navigationFor(html) {
  const headings = [...html.matchAll(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi)];
  const ids = idsIn(html);
  const rows = [];
  for (let i = 0; i < headings.length; i++) {
    const label = stripTags(headings[i][2]);
    if (!/^Section\s+\d+\b/i.test(label)) continue;
    const segment = html.slice(headings[i].index + headings[i][0].length, i + 1 < headings.length ? headings[i + 1].index : html.length);
    const subheads = [...segment.matchAll(/<h3\b([^>]*)>([\s\S]*?)<\/h3>/gi)].map((m) => ({ id: attr(m[0], "id"), label: stripTags(m[2]) }));
    const nav = segment.match(/<div\b[^>]*class\s*=\s*(["'])[^"']*\bin-section-nav\b[^"']*\1[^>]*>([\s\S]*?)<\/div>/i);
    const links = nav ? [...nav[2].matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].map((m) => ({ href: attr(m[0], "href"), label: stripTags(m[2]) })) : [];
    const checks = links.map((link) => ({ ...link, targetCount: link.href.startsWith("#") ? (ids[decodeURIComponent(link.href.slice(1))] || 0) : null }));
    const wordCount = (stripTags(segment).match(/\b[\w’'-]+\b/g) || []).length;
    rows.push({ heading: label, id: attr(headings[i][0], "id"), wordCount, subsectionCount: subheads.length, subsections: subheads,
      navPresent: Boolean(nav), linkCount: links.length, links: checks,
      classification: !subheads.length ? (nav ? "awkward" : "absent") : subheads.length === 1 ? (nav ? "redundant" : "absent") : (links.length === subheads.length ? "useful" : "awkward") });
  }
  const allInternalLinks = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].map((m) => ({ href: attr(m[0], "href"), label: stripTags(m[2]) }))
    .filter((link) => link.href.startsWith("#")).map((link) => ({ ...link, targetCount: ids[decodeURIComponent(link.href.slice(1))] || 0 }));
  return { sections: rows, duplicateIds: Object.entries(ids).filter(([, count]) => count > 1).map(([id, count]) => ({ id, count })),
    allInternalLinks, brokenInternalLinks: allInternalLinks.filter((link) => link.targetCount !== 1),
    badLinks: rows.flatMap((row) => row.links.filter((link) => link.targetCount !== 1).map((link) => ({ section: row.heading, ...link }))) };
}

function resolveAsset(htmlRel, url) {
  if (!url || /^(?:https?:|data:|#)/i.test(url)) return null;
  const clean = decodeURIComponent(url.split(/[?#]/)[0]);
  return path.normalize(path.join(ROOT, path.dirname(htmlRel), clean));
}
function pngDimensions(buffer) {
  if (buffer.length >= 24 && buffer.toString("hex", 0, 8) === "89504e470d0a1a0a") return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  return null;
}
function jpegDimensions(buffer) {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) return null;
  let i = 2;
  while (i + 9 < buffer.length) {
    if (buffer[i] !== 0xff) { i++; continue; }
    const marker = buffer[i + 1];
    if ([0xc0,0xc1,0xc2,0xc3,0xc5,0xc6,0xc7,0xc9,0xca,0xcb,0xcd,0xce,0xcf].includes(marker))
      return { height: buffer.readUInt16BE(i + 5), width: buffer.readUInt16BE(i + 7) };
    if (marker === 0xd9 || marker === 0xda) break;
    i += 2 + buffer.readUInt16BE(i + 2);
  }
  return null;
}
function numeric(value) { const m = String(value || "").match(/-?\d+(?:\.\d+)?/); return m ? Number(m[0]) : null; }
function svgAudit(file) {
  const xml = fs.readFileSync(file, "utf8");
  const root = xml.match(/<svg\b[^>]*>/i)?.[0] || "";
  const vb = attr(root, "viewBox").split(/[ ,]+/).map(Number);
  const viewBox = vb.length === 4 && vb.every(Number.isFinite) ? { x: vb[0], y: vb[1], width: vb[2], height: vb[3] } : null;
  const texts = [...xml.matchAll(/<text\b([^>]*)>([\s\S]*?)<\/text>/gi)].map((m) => {
    const tag = m[0].slice(0, m[0].indexOf(">") + 1); return { x: numeric(attr(tag, "x")), y: numeric(attr(tag, "y")),
      fontSize: numeric(attr(tag, "font-size")) || numeric((attr(tag, "style").match(/font-size\s*:\s*([^;]+)/i) || [])[1]) || 16,
      text: stripTags(m[2]) };
  });
  const outside = viewBox ? texts.filter((t) => t.x !== null && t.y !== null && (t.x < viewBox.x || t.x > viewBox.x + viewBox.width || t.y < viewBox.y || t.y > viewBox.y + viewBox.height)) : [];
  const embeddedNumbers = texts.filter((t) => /\b(?:Figure|Fig\.)\s*\d+(?:\.\d+)?\b/i.test(t.text));
  const rects = [...xml.matchAll(/<rect\b[^>]*>/gi)].map((m) => ({ x: numeric(attr(m[0], "x")) || 0, y: numeric(attr(m[0], "y")) || 0,
    width: numeric(attr(m[0], "width")), height: numeric(attr(m[0], "height")) })).filter((r) => r.width && r.height);
  const overflowCandidates = [];
  for (const t of texts) {
    if (t.x === null || t.y === null || !t.text) continue;
    const containing = rects.filter((r) => t.x >= r.x && t.x <= r.x + r.width && t.y >= r.y && t.y <= r.y + r.height)
      .sort((a, b) => a.width * a.height - b.width * b.height)[0];
    if (!containing) continue;
    const estimatedWidth = t.text.length * t.fontSize * 0.53;
    if (estimatedWidth > containing.width * 1.05) overflowCandidates.push({ text: t.text, x: t.x, y: t.y, fontSize: t.fontSize, estimatedWidth: +estimatedWidth.toFixed(1), rect: containing });
  }
  return { viewBox, textCount: texts.length, outsideViewBox: outside, embeddedFigureNumbers: embeddedNumbers, estimatedTextOverflowCandidates: overflowCandidates };
}
function dimensions(file) {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".svg") {
    const xml = fs.readFileSync(file, "utf8"); const root = xml.match(/<svg\b[^>]*>/i)?.[0] || "";
    const vb = attr(root, "viewBox").split(/[ ,]+/).map(Number);
    return { width: numeric(attr(root, "width")) || (vb.length === 4 ? vb[2] : null), height: numeric(attr(root, "height")) || (vb.length === 4 ? vb[3] : null), vector: true };
  }
  const buffer = fs.readFileSync(file); return pngDimensions(buffer) || jpegDimensions(buffer) || { width: null, height: null };
}
function figuresFor(htmlRel, html, chapterLabel) {
  const figures = [];
  for (const match of html.matchAll(/<figure\b([^>]*)>([\s\S]*?)<\/figure>/gi)) {
    const open = match[0].slice(0, match[0].indexOf(">") + 1); const body = match[2];
    const image = body.match(/<img\b[^>]*>/i)?.[0] || ""; if (!image) continue;
    const src = attr(image, "src"), alt = attr(image, "alt"), file = resolveAsset(htmlRel, src);
    const captionHtml = body.match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/i)?.[1] || "";
    const caption = stripTags(captionHtml); const number = caption.match(/\bFigure\s+([A-Za-z0-9]+\.[0-9]+)\b/i)?.[1] || "";
    const className = attr(open, "class"); const anchor = body.match(/<a\b[^>]*class\s*=\s*(["'])[^"']*\bfigure-expand-toggle\b[^"']*\1[^>]*>/i)?.[0] || "";
    const href = attr(anchor, "href"), hrefFile = resolveAsset(htmlRel, href); const exists = Boolean(file && fs.existsSync(file));
    const dim = exists ? dimensions(file) : null;
    figures.push({ src, relativeFile: file ? path.relative(ROOT, file).replace(/\\/g, "/") : null, exists, alt,
      emptyAlt: !alt.trim(), leadingDashAlt: /^\s*[—–-]/.test(alt), caption, number, className,
      expandable: /\bexpandable\b/.test(className), noExpand: /\bno-expand\b/.test(className), hasToggle: Boolean(anchor), href,
      validFallback: !/\bexpandable\b/.test(className) || Boolean(hrefFile && file && path.normalize(hrefFile) === path.normalize(file) && fs.existsSync(hrefFile)),
      misleadingNoExpandControl: /\bno-expand\b/.test(className) && Boolean(anchor), dimensions: dim,
      smallRasterCandidate: Boolean(dim && !dim.vector && ((dim.width || 0) < 800 || (dim.height || 0) < 400)),
      knownNonBookPath: /(?:_archive|not used|candidate|holding)/i.test(src) || /[0-9a-f]{8}-[0-9a-f-]{27,}/i.test(path.basename(src)),
    });
  }
  const numbered = figures.filter((f) => f.number);
  const counts = {}; for (const f of numbered) counts[f.number] = (counts[f.number] || 0) + 1;
  const captionMismatches = numbered.filter((f) => chapterLabel !== "Prologue" && !f.number.startsWith(`${chapterLabel}.`)).map((f) => ({ src: f.src, number: f.number }));
  const filenameNumberCandidates = numbered.filter((f) => {
    const m = path.basename(f.src).match(/fig[_-]?(\d+)[_-](\d+)/i); return m && `${m[1]}.${m[2]}` !== f.number;
  }).map((f) => ({ src: f.src, captionNumber: f.number }));
  return { figures, duplicateNumbers: Object.entries(counts).filter(([, count]) => count > 1).map(([number, count]) => ({ number, count })), captionMismatches, filenameNumberCandidates };
}

const report = { generatedAt: new Date().toISOString(), root: ROOT, pages: [], activeSvgAudits: {} };
const activeSvgs = new Set();
for (const [label, sourceRel, htmlRel] of pages) {
  const markdown = read(sourceRel), html = read(htmlRel); const questions = reviewQuestions(markdown);
  const figures = figuresFor(htmlRel, html, label);
  for (const f of figures.figures) if (f.exists && path.extname(f.relativeFile).toLowerCase() === ".svg") activeSvgs.add(f.relativeFile);
  report.pages.push({ label, sourceRel, htmlRel, objectives: objectivesFor(markdown), questions,
    answerSummary: label === "Prologue" ? null : answerSummary(questions), navigation: navigationFor(html), figures });
}
for (const rel of [...activeSvgs].sort()) report.activeSvgAudits[rel] = svgAudit(path.join(ROOT, rel));
report.counts = {
  pages: report.pages.length,
  chapters: report.pages.length - 1,
  multipleChoiceQuestions: report.pages.reduce((n, p) => n + (p.answerSummary?.total || 0), 0),
  objectives: report.pages.reduce((n, p) => n + p.objectives.length, 0),
  sections: report.pages.reduce((n, p) => n + p.navigation.sections.length, 0),
  sectionLinks: report.pages.reduce((n, p) => n + p.navigation.sections.reduce((m, s) => m + s.linkCount, 0), 0),
  figures: report.pages.reduce((n, p) => n + p.figures.figures.length, 0),
  numberedFigures: report.pages.reduce((n, p) => n + p.figures.figures.filter((f) => f.number).length, 0),
  activeSvgs: activeSvgs.size,
};

process.stdout.write(JSON.stringify(report, null, 2) + "\n");
