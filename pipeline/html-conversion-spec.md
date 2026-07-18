# HTML Conversion Spec — Psych101 Textbook

> Use this document to convert a completed markdown chapter draft into the site's HTML format. Every chapter must match this spec exactly so that CSS, navigation, and pedagogy patterns are consistent across all 13 chapters (Personality was dissolved into Ch11 Social Psychology per the Session 60 decision — there is no standalone Ch14).
>
> **Read this file in full before touching any chapter HTML.** The sidebar template alone will break the whole page if mis-copied.

---

## 0. Prerequisites

Before converting, confirm:
- The markdown draft is content-complete and has been reviewed by Jon.
- The chapter's figure files (if any) already exist in `docs/images/chNN/`.
- Any interactive demo embed URLs have been confirmed (do not insert placeholder iframes).
- You know the chapter number, title, and APA pillar group from `docs/index.html`.

**Always check `docs/index.html` for the authoritative chapter order, number, filename, and pillar group** — do not derive these from the CSV.

Output file location: `docs/chapters/NN-slug.html`  
(e.g., `docs/chapters/07-learning.html`)

---

## 1. Page Scaffold

Every chapter HTML file has this outer structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chapter N: [Full Title] — General Psychology</title>
  <link rel="stylesheet" href="../css/style.css" />
</head>
<body>
<div class="layout">

  <!-- Sidebar -->
  [SIDEBAR BLOCK — see §2]

  <!-- Main content -->
  <main class="main">
    [CHAPTER CONTENT — see §3–§12]
  </main>

</div>
<script src="../js/nav.js"></script>
</body>
</html>
```

---

## 2. Sidebar (Fixed — Copy Exactly, Change Only `class="active"`)

The sidebar is **identical across all chapters**. The only change per chapter is adding `class="active"` to the link for the current chapter.

> **This block must always be re-verified against `docs/index.html` before use** — it is a snapshot as of Session 79 (2026-07-09) and chapter numbering has changed twice already (Session 61 renumbering; Session 60 Personality dissolution). `docs/index.html` is the single source of truth; this file is a convenience copy that can drift.

```html
  <aside class="sidebar">
    <div class="book-title">General Psychology</div>
    <nav>
      <ul>
        <li><a href="../index.html">Table of Contents</a></li>

        <li class="pillar">Foundations</li>
        <li><a href="01-history-approaches.html">1 — History &amp; Approaches</a></li>
        <li><a href="02-research-methods.html">2 — Research Methods &amp; Statistics</a></li>

        <li class="pillar">Biological</li>
        <li><a href="03-neuroscience.html">3 — Neuroscience &amp; Biological Bases</a></li>
        <li><a href="04-sensation-perception.html">4 — Sensation &amp; Perception</a></li>
        <li><a href="05-consciousness.html">5 — Consciousness</a></li>
        <li class="pillar-note">6 — Sleep <span class="toc-pending">(coming soon)</span></li>

        <li class="pillar">Cognitive</li>
        <li><a href="07-learning.html">7 — Learning</a></li>
        <li><a href="08-memory.html">8 — Memory</a></li>
        <li><a href="09-thinking-language-intelligence.html">9 — Thinking, Language &amp; Intelligence</a></li>

        <li class="pillar">Developmental</li>
        <li><a href="10-lifespan-development.html">10 — Lifespan Development</a></li>

        <li class="pillar">Social &amp; Personality</li>
        <li><a href="11-social-psychology.html">11 — Social Psychology</a></li>

        <li class="pillar">Mental &amp; Physical Health</li>
        <li><a href="12-emotion-stress-coping.html">12 — Emotion, Stress &amp; Coping</a></li>
        <li><a href="13-disorders-therapy.html">13 — Psychological Disorders &amp; Therapy</a></li>
      </ul>
    </nav>
  </aside>
```

**To mark the current chapter active**, add `class="active"` to its `<a>` tag only. Example for Chapter 7:

```html
<li><a href="07-learning.html" class="active">7 — Learning</a></li>
```

Note: Chapter 6 (Sleep) has no HTML built yet, so it stays an unlinked `pillar-note` placeholder — do not link it until `docs/chapters/06-sleep.html` actually exists (avoids publishing a 404). Personality has no standalone chapter number; its content lives inside Chapter 11 Social Psychology.

---

## 3. Chapter Header

Immediately inside `<main class="main">`, before any content:

```html
<p class="chapter-meta">Chapter N · PillarName</p>
<h1>Full Chapter Title</h1>
<hr class="chapter-divider" />
```

**Pillar names** (from `docs/index.html` — re-verify before use, same caveat as §2):
- Chapters 1–2: `Foundations`
- Chapters 3–5: `Biological` (Ch6 Sleep also belongs here once built)
- Chapters 7–9: `Cognitive`
- Chapter 10: `Developmental`
- Chapter 11: `Social &amp; Personality`
- Chapters 12–13: `Mental &amp; Physical Health`

---

## 4. Callout Boxes — Complete Reference

All callouts share the base class `callout` plus one variant class. **Do not invent new variant class names.** The full list:

| Markdown element | HTML class | Left border / bg color |
|---|---|---|
| Misconception Opener | `callout callout--misconception` | amber / warm white |
| Learning Objectives | `callout callout--objectives` | blue (accent) |
| Stop and Retrieve | `callout callout--stop-retrieve` | green |
| Think About It | `callout callout--think-about-it` | purple |
| AI Connection | `callout callout--ai-connection` | cyan |
| Classic Study Walkthrough | `callout callout--classic-study` | red |
| Do Not Confuse | `callout callout--do-not-confuse` | pink |

### Generic callout pattern

```html
<div class="callout callout--[variant]">
  <div class="callout-title">Label Text</div>
  <p>Content paragraph.</p>
</div>
```

### Misconception Opener (always first, always has id)

```html
<div class="callout callout--misconception" id="misconception-opener">
  <div class="callout-title">Common Belief</div>
  <p><em>"The misconception statement."</em></p>
  <p>Paragraph explaining why the misconception is tempting.</p>
  <p>Paragraph replacing it with the scientific account.</p>
</div>
```

### Learning Objectives

```html
<div class="callout callout--objectives">
  <div class="callout-title">By the end of this chapter, you should be able to:</div>
  <ol>
    <li>Objective one.</li>
    <li>Objective two.</li>
  </ol>
</div>
```

### Stop and Retrieve

```html
<div class="callout callout--stop-retrieve">
  <div class="callout-title">Stop and Retrieve</div>
  <p>Before reading on — [retrieval prompt].</p>
</div>
```

### Think About It

```html
<div class="callout callout--think-about-it">
  <div class="callout-title">Think About It</div>
  <p>[Self-referential prompt using "you".]</p>
</div>
```

### AI Connection

```html
<div class="callout callout--ai-connection">
  <div class="callout-title">AI Connection</div>
  <p>[Paragraph 1: the parallel.]</p>
  <p>[Paragraph 2: the simplification.]</p>
  <p>[Paragraph 3: what the breakdown tells us.]</p>
</div>
```

Figures may appear inside the AI Connection callout (same `<figure class="chapter-figure">` pattern — see §6).

### Classic Study Walkthrough

```html
<div class="callout callout--classic-study">
  <div class="callout-title">Classic Study: [Author(s) + Year]</div>
  <p><strong>Question:</strong> ...</p>
  <p><strong>Method:</strong> ...</p>
  <p><strong>Key finding:</strong> ...</p>
  <p><strong>Why it matters:</strong> ...</p>
  <p><strong>Replication note:</strong> ...</p>
</div>
```

The exact sub-headings may vary by chapter; bold labels are the pattern.

### Do Not Confuse

```html
<div class="callout callout--do-not-confuse">
  <div class="callout-title">Do Not Confuse: Term A vs. Term B</div>
  <p>[Prose distinguishing the two concepts.]</p>
  <p><strong>Diagnostic question:</strong> [Question that forces discrimination.]</p>
</div>
```

---

## 5. Section Headings and IDs

Use `<h2>` for all major sections. Add an `id` attribute as a lowercase, hyphenated slug of the heading text. The spec prescribes four headings that must appear in every chapter (Where This Fits, Learning Objectives, Chapter Summary, Connections, Review Questions, Key Terms, Further Reading, References) plus 3–5 numbered content sections.

```html
<h2 id="where-this-fits">Where This Fits</h2>
<h2 id="learning-objectives">Learning Objectives</h2>
<h2 id="section-1-slug-of-title">Section 1: Title</h2>
<h2 id="chapter-summary">Chapter Summary</h2>
<h2 id="connections">Connections</h2>
<h2 id="review-questions">Review Questions</h2>
<h2 id="key-terms">Key Terms</h2>
<h2 id="further-reading">Further Reading</h2>
<h2 id="references">References</h2>
```

### 5a. Subsection headings (`<h3>`) — standard practice, not rare

Each numbered content section (Section 1, Section 2, ...) should be broken into 2–4 `<h3>` subsections, each covering one topic-sized chunk a reader can hold in working memory at once. This is not optional polish — see the Rationale note below. Titles must be descriptive of the actual content ("Acquisition, extinction, and spontaneous recovery"), never generic ("Part 2" or "Subsection A").

Give every `<h3>` a lowercase, hyphenated `id` slug, same convention as `<h2>`. Immediately after the `<h2>` that opens a numbered section, add an `.in-section-nav` block linking to that section's own `<h3>` ids only — **not** a chapter-wide table of contents, and **not** labeled "On this page" (these chapters are single continuous scrolling documents, not paginated; "In this section" is the accurate label).

```html
<h2 id="section-1-classical-conditioning-learning-what-predicts-what">Section 1: Classical Conditioning — Learning What Predicts What</h2>

<div class="in-section-nav">
  <strong>In this section:</strong>
  <a href="#the-basic-association">The basic association</a><span class="sep">·</span>
  <a href="#how-conditioning-changes">How conditioning changes</a><span class="sep">·</span>
  <a href="#where-learning-spreads">Where learning spreads</a>
</div>

<h3 id="the-basic-association">The basic association</h3>
<p>...</p>

<h3 id="how-conditioning-changes">How conditioning changes</h3>
<p>...</p>
```

`h3` already renders with a left accent rule (`border-left: 3px solid var(--color-accent)`, no background tint) in `docs/css/style.css` — this is deliberate: it keeps section structure visually distinct from the tinted `.callout` boxes, which use a colored left border *plus* background. Do not add a background tint to `h3`; that would blur the two back together.

**Do not** add drop caps, numbered circle badges, or a repeated eyebrow label (e.g. "VISUAL MODEL") above figures. These are decorative-only and the seductive-details-effect literature shows unearned decoration measurably hurts retention (see Rationale). Key terms stay plain `<strong>` per §7 — no colored "chip" styling, no underline. Underline reads as a broken link on the web, and highlighting/pre-marking text for a reader is a low-utility technique on its own (Dunlosky et al., 2013) — bolding here is doing skim/wayfinding work, not a memory intervention, and shouldn't be styled as if it were more than that.

**Rationale (Session 2026-07-14):** this pattern is grounded in Mayer's segmenting principle (chunked, learner-paced content outperforms continuous presentation, d≈0.98) and signaling/cueing principle (descriptive headings that expose structure improve learning, d≈0.52), working-memory chunk limits (~4 items, Cowan 2001) against stacking multiple term definitions in one paragraph, and the seductive-details-effect meta-analyses against decoration that doesn't carry structural signal. The existing Stop and Retrieve callouts remain the single strongest pedagogical device in this spec (testing effect / retrieval practice, one of only two techniques Dunlosky et al. rated high-utility) — don't let header/structure polish crowd out adding more of those.

**Retrofit status:** the `h3` CSS change applies automatically to all already-built chapters (several already use `<h3>`, just without the accent rule). The `.in-section-nav` block and any new subsection chunking do **not** retrofit automatically — they require editing each chapter's markup, which is deferred (Jon's call, not yet scheduled).

---

## 6. Where This Fits

```html
<h2 id="where-this-fits">Where This Fits</h2>
<p class="where-this-fits">[~100-word paragraph in instructor voice.]</p>
```

---

## 7. Body Prose

- All body prose uses plain `<p>` tags — no bullets inside sections.
- First use of each key term: `<strong>term</strong>` (bold in body), not a separate span.
- Inline cross-chapter cues in parentheses: just prose, no special tag.
- `&amp;` for `&` throughout, `&mdash;` or `—` for em dash (UTF-8 direct is fine).

### 7a. Logic Emphasis and Paragraph Fidelity

Preserve source `<mark class="logic-emphasis">...</mark>` as the same semantic HTML. Use it only for the smallest phrase carrying an important logical distinction; it is not a substitute for bold key terms and must not mark whole paragraphs, full bullets, or decorative highlights. Underlining remains reserved for links. Presentation-layer subsection headings and `.in-section-nav` blocks may expose structure, but they must not split or rewrite an approved source paragraph.

---

## 8. Tables

Plain HTML table, no CSS class needed (global `table` styles apply):

```html
<table>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
```

---

## 9. Figures

Single figure (numbered, with caption):

```html
<figure class="chapter-figure">
  <img src="../images/chNN/fig-slug.png"
       alt="[Descriptive alt text — at least one sentence describing what the figure shows.]" />
  <figcaption><strong>Figure N.N.</strong> Caption text. Source attribution if applicable.</figcaption>
</figure>
```

Figure inside a callout box: same markup, nested directly inside the `<div class="callout ...">`. Add `style="margin-top:1.25rem;"` to the figure tag when it follows a paragraph inside a callout (see Ch1 AI Connection for example).

Portrait strip (Ch1-specific, not needed for other chapters):

```html
<div class="portrait-strip" aria-label="[Description]">
  <figure>
    <img src="../images/ch01/portrait_name.jpg" alt="[Alt text]" />
    <figcaption>Name<br/><em>years</em></figcaption>
  </figure>
</div>
```

**If a chapter's figures are not yet finalized**, leave an HTML comment placeholder — do not insert broken `<img>` tags:

```html
<!-- FIGURE PLACEHOLDER: Figure N.N — [description of what figure will show] — file not yet available -->
```

**Expandable figures:** reusable click-to-expand behavior uses the shared `.expandable` CSS and `docs/js/figure-expand.js`. It is opt-in per chapter — add the `expandable`/`figure-expand-toggle` classes to a figure's markup *and* include `<script src="../js/figure-expand.js"></script>` before `</body>` in that chapter's HTML. Both pieces are required; a chapter with the classes but no script include will appear to expand but never collapse (confirmed failure mode — see Ch2, Session 92 in `GPT_project_log.md`).

---

## 10. Interactive Demo Embeds

Only embed a demo if a confirmed URL exists. Use this wrapper:

```html
<!-- DEMO: [demo name] -->
<div class="callout callout--stop-retrieve">
  <div class="callout-title">Before You Try This</div>
  <p>[Prediction prompt.]</p>
</div>
<iframe src="[CONFIRMED URL]"
        width="100%" height="500"
        style="border:1px solid var(--color-border); border-radius:6px; margin:1.5rem 0;"
        title="[Demo name — accessible label]"
        loading="lazy">
</iframe>
<div class="callout callout--stop-retrieve">
  <div class="callout-title">After You Try This</div>
  <p>[Explanation and retrieval prompt.]</p>
</div>
```

**If no confirmed URL exists**, leave a comment — do not insert a broken or placeholder iframe:

```html
<!-- DEMO PLACEHOLDER: [demo name] — embed URL not yet confirmed -->
```

---

## 11. Connections Table

```html
<h2 id="connections">Connections</h2>

<table>
  <thead>
    <tr>
      <th>Concept from this chapter</th>
      <th>Reappears in</th>
      <th>Why it matters there</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#section-id-anchor">Concept name</a></td>
      <td>Ch. N — Chapter Title</td>
      <td>One sentence.</td>
    </tr>
  </tbody>
</table>
```

The `href` in the concept link should point to the `id` of the section where the concept appears in this chapter (e.g., `#section-2-classical-conditioning`).

---

## 12. Review Questions

Each question uses this pattern:

```html
<div class="review-q">
  <p><strong>N.</strong> Question text?</p>
  <ol class="options" type="a">
    <li>Option a</li>
    <li>Option b</li>
    <li>Option c</li>
    <li>Option d</li>
  </ol>
  <details>
    <summary>Show answer &amp; rationale</summary>
    <div class="answer">
      <p><strong>Answer: b.</strong> Why [correct answer] is right, and why the most tempting wrong answer is wrong.</p>
    </div>
  </details>
</div>
```

Note: `type="a"` on the `<ol>` renders letters (a, b, c, d). Do not use a different list type.

---

## 13. Key Terms Glossary

```html
<h2 id="key-terms">Key Terms</h2>

<dl class="key-terms">
  <dt>Term</dt>
  <dd>One-sentence definition.</dd>

  <dt>Term</dt>
  <dd>One-sentence definition.</dd>
</dl>
```

Terms are in alphabetical order. No `<p>` tags inside `<dd>` unless the definition is multi-sentence.

---

## 14. Further Reading

```html
<h2 id="further-reading">Further Reading</h2>

<div class="further-reading">
  <div class="fr-item">
    <p class="fr-title">Source title — Author(s)</p>
    <p class="fr-url"><a href="https://...">https://...</a></p>
    <p>One or two sentence annotation.</p>
  </div>

  <div class="fr-item">
    <p class="fr-title">Citation for a book or article (no URL)</p>
    <p><em>Journal Name, Vol</em>(Issue), pages.</p>
    <p>Annotation.</p>
  </div>
</div>
```

---

## 15. References

```html
<h2 id="references">References</h2>
<p style="font-size: 0.9rem; color: var(--color-muted); font-style: italic; margin-bottom: 1.25rem;">Full citations for factual claims made in this chapter, for instructors or students who want to verify or go deeper. Distinct from Further Reading above, which is curated for student exploration rather than completeness.</p>

<div class="references">
  <p>Author, A. A. (Year). Title of work. <em>Journal Name, Vol</em>(Issue), pages.</p>
  <p>Author, B. B. (Year). <em>Title of Book</em>. Publisher.</p>
  <p class="verify-note">Note on verification: [any flags about citations that need a closer check before publication.]</p>
</div>
```

References are alphabetical by first author's last name. The hanging-indent is handled by CSS (`padding-left: 1.5rem; text-indent: -1.5rem`), so no manual indentation is needed in the HTML.

---

## 16. Common Errors to Avoid

| Error | Correct form |
|---|---|
| `&` in text or attributes | `&amp;` |
| `callout--think` | `callout--think-about-it` |
| `callout--stop` | `callout--stop-retrieve` |
| `callout--donotconfuse` | `callout--do-not-confuse` |
| `callout--classic` | `callout--classic-study` |
| `callout--ai` | `callout--ai-connection` |
| Missing `id="misconception-opener"` on the opener div | Always add this id |
| Omitting `type="a"` on review question option lists | Always include |
| Forgetting `<script src="../js/nav.js"></script>` before `</body>` | Always include |
| Guessing a figure filename or demo URL | Leave a comment placeholder instead |
| Sidebar not copied exactly | Copy §2 verbatim; only add `class="active"` |
| Labeling the subsection nav "On this page" | Use "In this section" — chapters are single scrolling documents, not paginated (see §5a) |
| `.in-section-nav` listing the whole chapter's headings | Scope it to the current `<h2>` section's own `<h3>` ids only |
| Adding a background tint, drop cap, numbered badge, or repeated eyebrow label to `<h3>` or figures | Don't — decorative-only elements measurably hurt retention (see §5a Rationale); `<h3>` uses the accent left-rule only, no background |

---

## 17. Validation Checklist

Before saving the final HTML file, confirm:

- [ ] `<title>` says `Chapter N: [Title] — General Psychology`
- [ ] Sidebar is verbatim with correct `class="active"` on this chapter's link only
- [ ] `chapter-meta` text reads `Chapter N · PillarName`
- [ ] Misconception Opener has `id="misconception-opener"`
- [ ] All callout variant class names match the table in §4 exactly
- [ ] All `<h2>` elements have `id` attributes
- [ ] Each numbered content section has 2–4 descriptively-titled `<h3>` subsections with `id` attributes, and an `.in-section-nav` block (labeled "In this section," scoped to that section only) immediately after the `<h2>`
- [ ] All review questions use `<ol class="options" type="a">` and `<details>/<summary>`
- [ ] Key terms use `<dl class="key-terms">`, not a bullet list
- [ ] No broken `<img>` tags — placeholder comments instead
- [ ] No placeholder `<iframe>` tags — placeholder comments instead
- [ ] `&amp;` used for all `&` characters
- [ ] `<script src="../js/nav.js"></script>` present before `</body>`
- [ ] File saved to `docs/chapters/NN-slug.html` matching the name in `docs/index.html`
