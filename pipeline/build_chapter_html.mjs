import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { marked } = require("marked");

const chapters = {
  "3": {
  source: "source/chapters/ch03-neuroscience-biological-bases.md",
  output: "docs/chapters/03-neuroscience.html",
  title: "Neuroscience & Biological Bases of Behavior",
  pillar: "Biological",
},
  "2": {
    source: "source/chapters/ch02-research-methods.md",
    output: "docs/chapters/02-research-methods.html",
    title: "Research Methods & Statistics",
    pillar: "Foundations",
  },
  "9": {
    source: "source/chapters/09-thinking-language-intelligence.md",
    output: "docs/chapters/09-thinking-language-intelligence.html",
    title: "Thinking, Language & Intelligence",
    pillar: "Cognitive",
  },
  "10": {
    source: "source/chapters/ch10-lifespan-development.md",
    output: "docs/chapters/10-lifespan-development.html",
    title: "Lifespan Development",
    pillar: "Developmental",
  },
  "11": {
    source: "source/chapters/ch11-social-psychology.md",
    output: "docs/chapters/11-social-psychology.html",
    title: "Social Psychology",
    pillar: "Social & Personality",
  },
  "12": {
    source: "source/chapters/ch12-emotion-stress-coping.md",
    output: "docs/chapters/12-emotion-stress-coping.html",
    title: "Emotion, Stress & Coping",
    pillar: "Mental & Physical Health",
  },
};

const selected = process.argv.slice(2);
const numbers = selected.length ? selected : Object.keys(chapters);

function slugify(value) {
  const plain = value
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, " and ")
    .replace(/&#39;|&rsquo;|’/g, "")
    .replace(/&[^;]+;/g, " ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  if (plain === "connections-table") return "connections";
  return plain;
}

function renderDetails(raw) {
  const match = raw.match(/<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/i);
  if (!match) return raw;
  const summary = marked.parseInline(match[1].trim());
  const answer = marked.parse(match[2].trim());
  return `<details>\n<summary>${summary}</summary>\n<div class="answer">${answer}</div>\n</details>`;
}

function preprocess(markdown) {
  let text = markdown.replace(/^# .+\r?\n/, "");
  // Author-only notes and multiline work comments must never reach student HTML.
  text = text.replace(/<!--[\s\S]*?-->/g, "");
  text = text.replace(
    /^\s*>\s*(?:Canonical revised source\.|Drafting history (?:and|&) provenance:)[^\n]*(?:\r?\n|$)\s*(?:---\s*(?:\r?\n|$))?/,
    "",
  );
  text = text.replace(/^## Stop and Retrieve$/m, "## Review Questions");

  text = text.replace(
    /(## Key Terms\s*\n)([\s\S]*?)(?=\n---\s*\n|\n## )/,
    (_all, heading, body) => {
      const entries = [];
      for (const line of body.split(/\r?\n/)) {
        const match = line.match(/^\s*(?:-\s*)?\*\*(.+?)\*\*\s+—\s+(.+)\s*$/);
        if (match) entries.push(`<dt>${marked.parseInline(match[1])}</dt>\n<dd>${marked.parseInline(match[2])}</dd>`);
      }
      return `${heading}\n<dl class="key-terms">\n${entries.join("\n")}\n</dl>\n`;
    },
  );

  text = text.replace(
    /(## Review Questions\s*\n)([\s\S]*?)(?=\n## )/,
    (_all, heading, body) => {
      const questions = [];
      const pattern = /(?:^|\n)\s*(?:\*\*(\d+)\.\*\*|(\d+)\.)\s+([^\n]+)\s*\n\s*(<details>[\s\S]*?<\/details>)/g;
      let match;
      while ((match = pattern.exec(body))) {
        const number = match[1] || match[2];
        questions.push(`<div class="review-q">\n<p><strong>${number}.</strong> ${marked.parseInline(match[3].trim())}</p>\n${renderDetails(match[4])}\n</div>`);
      }

      if (!questions.length) {
        for (const block of body.split(/\n---\s*\n/)) {
          const question = block.match(/^\s*\*\*(\d+)\.\*\*\s+([^\n]+)/);
          const answer = block.match(/^\*Answer:\s*([\s\S]*?)\*\s*$/m);
          if (!question || !answer) continue;
          const options = [...block.matchAll(/^[a-d]\)\s+(.+)$/gm)];
          if (!options.length) continue;
          const optionHtml = options.map((option) => `<li>${marked.parseInline(option[1].trim())}</li>`).join("\n");
          questions.push(`<div class="review-q">\n<p><strong>${question[1]}.</strong> ${marked.parseInline(question[2].trim())}</p>\n<ol class="options" type="a">\n${optionHtml}\n</ol>\n<details>\n<summary>Show answer &amp; rationale</summary>\n<div class="answer"><p><strong>Answer:</strong> ${marked.parseInline(answer[1].trim())}</p></div>\n</details>\n</div>`);
        }
      }
      return `${heading}\n${questions.join("\n")}\n`;
    },
  );

  text = text.replace(
    /(## Further Reading\s*\n)([\s\S]*?)(?=\n---\s*\n\s*## References)/,
    (_all, heading, body) => {
      const blocks = body.trim().split(/\n\s*\n(?=(?:-\s*)?\*\*)/);
      const items = blocks.map((block) => {
        const normalized = block.trim().replace(/^-\s*/, "");
        return `<div class="fr-item">\n${marked.parse(normalized)}</div>`;
      });
      return `${heading}\n<div class="further-reading">\n${items.join("\n")}\n</div>\n`;
    },
  );

  return text;
}

function addHeadingIds(html) {
  return html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_all, level, label) => {
    return `<h${level} id="${slugify(label)}">${label}</h${level}>`;
  });
}

function cleanFigureAlt(value) {
  return value.replace(/^Figure \d+\.\d+\s*[—-]\s*/, "").trim();
}

const noExpandFigureFiles = new Set([
  "fig3_1_neuron_anatomy_pressbooks.jpeg",
  "fig3_2_action_potential_pressbooks.jpeg",
]);

function renderFigure(normalized, cleanAlt, caption) {
  const cap = caption.replace(/^(Figure \d+\.\d+)\.\s*/, "<strong>$1.</strong> ");
  if (noExpandFigureFiles.has(path.basename(normalized))) {
    return `<figure class="chapter-figure no-expand"><img src="${normalized}" alt="${cleanAlt}" /><figcaption>${cap}</figcaption></figure>`;
  }
  return `<figure class="chapter-figure expandable"><a class="figure-expand-toggle" href="${normalized}" aria-label="Expand figure" aria-expanded="false"><img src="${normalized}" alt="${cleanAlt}" /></a><figcaption>${cap}</figcaption></figure>`;
}

function convertFigures(html) {
  html = html.replace(
    /<p><img src="([^"]+)" alt="([^"]*)"\s*><\/p>\s*<p><em>(Figure [\s\S]*?)<\/em><\/p>/g,
    (_all, src, alt, caption) => {
      const normalized = src
        .replace(/^\.\.\/\.\.\/docs\/images\//, "../images/")
        .replace(/^\.\.\/images\//, "../images/")
        .replace(/^\.\.\/\.\.\/images\//, "../images/");
      const cleanAlt = cleanFigureAlt(alt);
      return renderFigure(normalized, cleanAlt, caption);
    },
  );
  return html.replace(
    /<p><img src="([^"]+)" alt="([^"]*)"\s*>\s*<em>(Figure [\s\S]*?)<\/em><\/p>/g,
    (_all, src, alt, caption) => {
      const normalized = src
        .replace(/^\.\.\/\.\.\/docs\/images\//, "../images/")
        .replace(/^\.\.\/images\//, "../images/")
        .replace(/^\.\.\/\.\.\/images\//, "../images/");
      const cleanAlt = cleanFigureAlt(alt);
      return renderFigure(normalized, cleanAlt, caption);
    },
  );
}

function convertVideoBlocks(html) {
  return html.replace(
    /(<video[\s\S]*?<\/video>)\s*\*Video (\d+\.\d+)\. ([\s\S]*?)\*(?=\s*<)/g,
    (_all, video, number, caption) => {
      return `<figure class="chapter-video">\n${video}\n<figcaption><strong>Video ${number}.</strong> ${caption.trim()}</figcaption>\n</figure>`;
    },
  );
}

function convertCallouts(html) {
  const classes = [
    ["A note on a popular myth", "misconception"],
    ["Stop and Retrieve", "stop-retrieve"],
    ["Stop and Predict", "stop-retrieve"],
    ["Think About It", "think-about-it"],
    ["Do Not Confuse", "do-not-confuse"],
    ["AI Connection", "ai-connection"],
    ["Classic Study", "classic-study"],
    ["Classic Study Walkthrough", "classic-study"],
    ["Worked Example", "think-about-it"],
  ];
  html = html.replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, (_all, inner) => {
    const plain = inner.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const found = classes.find(([label]) => plain.startsWith(label));
    if (!found) return `<blockquote>${inner}</blockquote>`;
    const [prefix, variant] = found;
    const first = inner.match(/<p><strong>([^<]+)<\/strong>\s*([\s\S]*?)<\/p>/);
    if (!first) return `<div class="callout callout--${variant}">${inner}</div>`;
    const label = first[1].replace(/:$/, "");
    const rest = first[2].trim();
    const replacement = `<div class="callout-title">${label}</div>${rest ? `<p>${rest}</p>` : ""}`;
    return `<div class="callout callout--${variant}">${inner.replace(first[0], replacement)}</div>`;
  });
  return html.replace(
    /<p><strong>(Stop and Retrieve|Stop and Predict|Think About It):<\/strong>\s*([\s\S]*?)<\/p>/g,
    (_all, label, content) => {
      const variant = label === "Think About It" ? "think-about-it" : "stop-retrieve";
      return `<div class="callout callout--${variant}"><div class="callout-title">${label}</div><p>${content}</p></div>`;
    },
  );
}

function convertStructuredCallouts(html) {
  const wrap = (variant, title, body) => {
    return `<div class="callout callout--${variant}" id="${slugify(title)}"><div class="callout-title">${title}</div>${body.trim()}</div>`;
  };

  html = html.replace(
    /<h4>(Do Not Confuse: Neurotransmitter vs\. Hormone)<\/h4>([\s\S]*?)(?=<figure class="chapter-figure expandable">)/,
    (_all, title, body) => wrap("do-not-confuse", title, body),
  );
  html = html.replace(
    /<h4>(Do Not Confuse: Chemical Influence vs\. Chemical Cause)<\/h4>([\s\S]*?)(?=<blockquote>)/,
    (_all, title, body) => wrap("do-not-confuse", title, body),
  );
  html = html.replace(
    /<h4>(Do Not Confuse: Hemispheric Specialization[\s\S]*?Personality[^<]*?)<\/h4>([\s\S]*?)(?=<p>Calling the amygdala)/,
    (_all, title, body) => wrap("do-not-confuse", title, body),
  );
  html = html.replace(
    /<h4>(Classic Study:[\s\S]*?)<\/h4>([\s\S]*?)(?=<h4>|<div class="callout callout--stop-retrieve">|<div class="callout callout--do-not-confuse">|<h[23]|$)/g,
    (_all, title, body) => wrap("classic-study", title, body),
  );
  html = html.replace(
    '<div class="callout callout--misconception">',
    '<div class="callout callout--misconception" id="misconception-opener">',
  );
  return html;
}

function wrapSpecialSections(html) {
  html = html.replace(
    /<h2 id="misconception-opener[^\"]*">[\s\S]*?<\/h2>([\s\S]*?)(?=<h2 )/,
    (_all, content) => `<div class="callout callout--misconception" id="misconception-opener"><div class="callout-title">Common Belief</div>${content}</div>`,
  );
  html = html.replace(
    /(<h2 id="learning-objectives">Learning Objectives<\/h2>)([\s\S]*?)(?=<h2 )/,
    (_all, heading, content) => {
    const cleaned = content.replace(/^\s*<p>By the end of this chapter, you should be able to:<\/p>\s*/, "");
    return `${heading}<div class="callout callout--objectives"><div class="callout-title">By the end of this chapter, you should be able to:</div>${cleaned}</div>`;
  },
  );
  html = html.replace(
    /(<h2 id="where-this-fits">Where This Fits<\/h2>)\s*<p>/,
    '$1\n<p class="where-this-fits">',
  );
  return html;
}

function addSectionNav(html) {
  return html.replace(/(<h2 id="(section-[^"]+)">[\s\S]*?<\/h2>)([\s\S]*?)(?=<h2 |$)/g, (_all, heading, _id, section) => {
    const links = [];
    for (const match of section.matchAll(/<h3 id="([^"]+)">([\s\S]*?)<\/h3>/g)) {
      links.push(`<a href="#${match[1]}">${match[2]}</a>`);
    }
    if (links.length < 2) return `${heading}${section}`;
    return `${heading}<div class="in-section-nav"><strong>In this section:</strong> ${links.join('<span class="sep">·</span> ')}</div>${section}`;
  });
}

function wrapEndingSections(html) {
  html = html.replace(/(<h2 id="further-reading">Further Reading<\/h2>)\s*<ul>([\s\S]*?)<\/ul>/, (_all, heading, list) => {
    const items = [...list.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((match) => `<div class="fr-item"><p>${match[1]}</p></div>`);
    return `${heading}<div class="further-reading">${items.join("\n")}</div>`;
  });
  html = html.replace(/(<h2 id="references">References<\/h2>)([\s\S]*)$/, (_all, heading, rest) => {
    return `${heading}<p style="font-size: 0.9rem; color: var(--color-muted); font-style: italic; margin-bottom: 1.25rem;">Full citations for factual claims made in this chapter. Further Reading above is curated separately for student exploration.</p><div class="references">${rest}</div>`;
  });
  return html;
}

function build(number) {
  const config = chapters[number];
  if (!config) throw new Error(`Unknown chapter: ${number}`);
  let markdown = fs.readFileSync(config.source, "utf8");
  markdown = preprocess(markdown);
  let body = marked.parse(markdown, { gfm: true });
  body = body.replace(/<hr>\s*/g, "");
  body = body.replace(/\.\.\/\.\.\/docs\/labs\//g, "../labs/");
  body = addHeadingIds(body);
  body = convertFigures(body);
  body = convertVideoBlocks(body);
  body = convertCallouts(body);
  body = convertStructuredCallouts(body);
  body = wrapSpecialSections(body);
  body = addSectionNav(body);
  body = wrapEndingSections(body);

  const titleEscaped = config.title.replace(/&/g, "&amp;");
  const pillarEscaped = config.pillar.replace(/&/g, "&amp;");
  const activeId = number.padStart(2, "0");
  const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chapter ${number}: ${titleEscaped} — General Psychology</title>
  <link rel="stylesheet" href="../css/style.css" />
</head>
<body>
<div class="layout">
  <aside class="sidebar" id="app-sidebar"></aside>
  <script src="../js/sidebar.js" data-dir="chapters" data-active="${activeId}" data-top="toc-only"></script>
  <main class="main">
    <p class="chapter-meta">Chapter ${number} · ${pillarEscaped}</p>
    <h1>${titleEscaped}</h1>
    <hr class="chapter-divider" />
${body.trim()}
  </main>
</div>
<script src="../js/figure-expand.js"></script>
<script src="../js/nav.js"></script>
</body>
</html>
`;
  fs.writeFileSync(config.output, page, "utf8");
  console.log(`Built ${config.output} from ${config.source}`);
}

for (const number of numbers) build(number);
