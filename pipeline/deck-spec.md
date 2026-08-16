# Lecture Deck Generation Spec

> Governs how Psych101 textbook chapters become lecture decks.
> Author: Jon Oxford, Ph.D. | Adopted 2026-08-16 | Version 1.0
> **Status: ACTIVE PROJECT STANDARD.**
>
> This version reconciles the 2026-07-29 prototype rules with the mature 4:3 decks developed through Chapters 2–10. It replaces the earlier proposal status and resolves the major grammar/workflow questions exposed by those builds.

---

## 0. Scope and authority

A lecture deck is a **teaching artifact derived from a chapter**. It is not a chapter summary, a reading substitute, or a second place where textbook content decisions are made.

Use this order of authority:

1. `AGENTS.md` — repository rules and scope discipline.
2. `HANDOFF.md` — current state and immediate next actions.
3. `source/chapters/chNN-*.md` — authoritative chapter content.
4. `pipeline/voice-brief.md` — authorial voice and recurring cases.
5. `pipeline/evidence-commitments.md` — load-bearing evidence boundaries.
6. **This file** — lecture-deck pedagogy, slide grammar, visual standard, and QA.
7. `pipeline/activity-library.md` — reusable activity patterns.
8. `pipeline/slides/chNN.md` — chapter-specific teaching decisions that must survive rebuilds.
9. `slides/chNN/assets/manifest.md` — slide-only visual provenance.
10. Generated `.pptx` — disposable output.

Where the deck and chapter disagree about psychology, **the chapter wins**. Where they disagree about what belongs on screen, **the deck spec wins**.

The legacy automatic paragraph-to-slide generator (`pipeline/build_chapter_deck.py` plus the original seed-override format in `pipeline/slides/README.md`) is implementation history, not the pedagogical standard. It may be reused only if it produces the explicit teaching moves described here. Raw chapter paragraphs are never a sufficient slide plan.

---

## 1. Governing principle: build teaching moves, not chapter summaries

The relevant unit is a **teaching move**.

Before making a slide, ask:

> **What should happen in the room that reading the chapter alone does not accomplish as well?**

Strong reasons for a slide include:

- students must commit before the answer appears;
- two ideas are easy to confuse and need a visible contrast;
- a mechanism becomes clearer as a sequence or system;
- a case makes an abstract idea usable;
- evidence needs to be weighed rather than merely named;
- a misconception needs to be activated and repaired;
- students need retrieval, classification, explanation, or transfer;
- the chapter argument needs to be reassembled after detail.

Weak reasons include:

- “this paragraph is important”;
- “the textbook has a heading here”;
- “we have not put this term on a slide yet”;
- “the deck seems short.”

**Do not ask, “What material belongs on slides?” Ask, “What sequence of cognitive moves will cause students to understand the chapter?”**

A short deck can be correct. A long deck can be correct. Slide count is a consequence of the teaching problem, not a target.

---

## 2. What students should retain

Every deck begins by identifying the chapter’s **governing argument** and the 3–5 questions students should still be able to answer two weeks later.

The roadmap is not a projection of the formal Learning Objectives. Compress objectives into student-facing questions.

Examples from the mature decks:

- Chapter 8: How does a memory get built? What gets stored? Why do we forget? Why does remembering change?
- Chapter 9: How do concepts preserve structure? When do shortcuts become bias? How does language make meaning public? What does an intelligence score summarize and discard?
- Chapter 10: How do we study change? How do biology and experience build each other? How do minds develop with other people? What reorganizes after childhood?

A roadmap normally appears whole and lasts about 20–30 seconds. Section dividers reactivate the relevant question when it becomes live.

---

## 3. Visual standard

### 3.1 Format

- PowerPoint **4:3**.
- Slide size **10 × 7.5 inches**.
- White or near-white canvas.
- Designed first for classroom projection, not laptop reading.

### 3.2 Visual direction

**Museum catalogue meets modern science classroom.**

- dark charcoal text;
- restrained teal structural accent;
- one warm accent when emphasis is useful;
- large editorial typography;
- strong negative space;
- flat, clean geometry;
- explanatory figures rather than decorative imagery;
- minimal shadows, gradients, borders, and ornamental cards;
- humor comes from the teaching, not from decorative graphics.

### 3.3 Typography and density

Default ranges:

- primary title / claim: **40–48 pt**;
- ordinary instructional text: **30–34 pt**;
- short labels: **24–28 pt**;
- source/footer: **14–16 pt**.

Never shrink text to rescue an overloaded slide. Instead:

1. remove material that belongs in notes;
2. split the cognitive move;
3. simplify the visual;
4. move detail to backup.

Projected paragraphs are a defect. A good slide usually contains a claim, a structure, and enough words to make the structure interpretable.

### 3.4 Layout discipline

- One hard idea or task per slide.
- Titles carry the claim whenever possible.
- Use parallel alignment for comparisons.
- Use left-to-right flow for mechanisms and processes.
- Use central-node or network layouts for systems.
- Use asymmetry when it clarifies hierarchy; do not fill empty space merely because it exists.
- Repeated slide-type labels and the footer should occupy stable positions across the deck.
- Do not use tiny completed tables. If a table matters, simplify it or reveal its rows/columns in teachable chunks.

---

## 4. Mature slide grammar

The uppercase label is the student-facing **pedagogical role**, not merely a visual layout name. Use the smallest vocabulary that accurately describes the teaching move.

### 4.1 Orientation

**TITLE** — establishes the chapter argument, not just the chapter name.

**MISCONCEPTION OPENER** — states the attractive wrong belief before correction.

**ROADMAP** — 3–5 student-facing questions organizing the lecture.

**SECTION DIVIDER** — resets attention and reactivates the next governing question.

### 4.2 Explanation

**CORE CLAIM** — one proposition worth remembering.

**CORE TOOL** — a reusable diagnostic or conceptual framework students should apply later.

**DISTINCTION** — separates two related concepts whose boundary matters.

**COMPARISON** — parallel comparison across two or more alternatives.

**DO NOT CONFUSE** — misconception prevention; use when a familiar but wrong equivalence is likely.

**MECHANISM** — explains why or how an outcome occurs.

**PROCESS** — visible sequence over time or stages.

**SYSTEM MAP** — interacting contributors, pathways, or constraints; avoids false single-cause stories.

**WORKED EXAMPLE** — concrete case → reasoning → conclusion.

**APPLICATION** — uses a chapter principle to make a practical decision or solve a new case.

### 4.3 Evidence

**CLASSIC EVIDENCE** — a study or procedure whose design itself teaches the concept.

**EVIDENCE** — data or result needed to support the current claim.

**EVIDENCE BOUNDARY** — separates the robust conclusion from the tempting overreach. Use sparingly; it is a teaching slide only when the boundary itself is cognitively important.

**METHODS** — makes an inferential design problem visible (e.g., cross-sectional vs. longitudinal; correlation vs. causation).

### 4.4 Student thinking

**PREDICTION** — students commit before the answer or result.

**ACTIVITY** — students produce an answer, classification, explanation, sketch, vote, comparison, or decision.

**RETRIEVAL** — students reconstruct prior material without simply rereading it.

A rhetorical question on a content slide is **not** an activity. Activity status requires an actual student action and a debrief.

### 4.5 Integration and close

**SYNTHESIS** — reassembles several mechanisms/distinctions into the chapter argument.

**CLOSE** or **RETRIEVAL CLOSE** — students answer the opener or governing question in their own words, often with the two-sentence pattern: concede why the misconception is attractive, then explain why it fails.

**REFERENCE** — instructor-facing backup such as natural stopping points; normally hidden from the student route.

Do not invent a new slide type because a one-off layout looks different. New labels require a recurring pedagogical job.

---

## 5. Choosing the slide type: decision rules

For each candidate piece of chapter content, ask in order:

1. **Is this part of the governing argument?**
   - yes → `CORE CLAIM`, `CORE TOOL`, or `SYNTHESIS`.
2. **Must students discriminate concepts?**
   - yes → `DISTINCTION`, `COMPARISON`, or `DO NOT CONFUSE`.
3. **Is causal or temporal structure the point?**
   - yes → `MECHANISM`, `PROCESS`, or `SYSTEM MAP`.
4. **Does understanding depend on the evidence pattern or design?**
   - yes → `CLASSIC EVIDENCE`, `EVIDENCE`, `EVIDENCE BOUNDARY`, or `METHODS`.
5. **Would a concrete case make the abstraction usable?**
   - yes → `WORKED EXAMPLE` or `APPLICATION`.
6. **Should students commit, retrieve, classify, explain, or transfer?**
   - yes → `PREDICTION`, `ACTIVITY`, or `RETRIEVAL`.
7. **Is the material useful aloud but not visually?**
   - put it in speaker notes.
8. **Does it merely repeat the reading without improving the room?**
   - omit it.

Do not preserve textbook order mechanically. Preserve the chapter’s **argumentative dependencies**.

---

## 6. Slide status and lecture routes

Every slide carries exactly one status:

- **core** — required for the governing argument;
- **optional** — useful extension that can disappear without breaking continuity;
- **backup** — anticipated question, deeper evidence, alternate example, or instructor planning material.

`activity` is a **slide type**, not a status.

The core route must stand alone as a coherent lecture. Optional and backup material must not be prerequisites for later core slides.

Do not build an overstuffed deck and expect the instructor to improvise cuts while teaching.

---

## 7. Activities

Use `pipeline/activity-library.md` as the pattern library. Select from the material outward; do not start with a quota.

An activity earns its place when it adds cognitive work that prose cannot:

- prediction;
- classification;
- comparison;
- retrieval;
- mechanism construction;
- evidence evaluation;
- explanation revision;
- transfer to a new case.

Every activity slide or activity embedded in notes must specify:

1. **what students physically do**;
2. **what they produce**;
3. **how long it takes** when timing matters;
4. **the debrief**;
5. **the likely failure mode or tempting wrong answer** when one exists;
6. **what the activity can and cannot establish** when evidential overreach is possible.

Prediction tasks require a real commitment before reveal. When hindsight is part of the lesson, the prediction should be written or otherwise recordable.

Do not duplicate an existing Learning Lab with a weaker slide activity. If the lab performs the cognitive work better, use the lab.

---

## 8. Speaker notes: required schema

Every student-facing slide must contain structured notes in this exact order:

- **Intent:** why this slide exists.
- **Instructor move:** what to explain, ask, demonstrate, or emphasize.
- **Activity procedure:** exact steps, or `None`.
- **Reveal intention:** what appears first, later, or remains static.
- **Evidence boundary:** the accuracy constraint that matters here, or `None needed`.
- **Source anchor:** chapter section, figure, study, or cross-chapter connection.
- **Transition:** why the next slide follows.
- **Optional elaboration:** story, joke, local example, or tangent; usually `None`.
- **Status:** `core`, `optional`, or `backup`.
- **Intentionally omitted:** material deliberately kept off-screen.

The notes must allow the author months later—or another competent instructor—to reconstruct the intended teaching move.

### 8.1 What belongs in notes rather than on screen

- full textbook explanation;
- caveats needed for scientific accuracy but not for visual instruction;
- citations that do not need to be visible to students;
- historical detail;
- instructor examples and stories;
- alternate explanations students may raise;
- what to listen for in student answers;
- the exact reveal/debrief sequence.

Notes are not a dumping ground for content omitted accidentally. `Intentionally omitted` forces the distinction.

---

## 9. Evidence discipline

Slides inherit the chapter’s evidence commitments. Do not sharpen, soften, or modernize a consequential claim without checking `pipeline/evidence-commitments.md` and the chapter’s own sources.

### 9.1 Confidence before qualification

The slide should usually state the strongest supported teaching claim directly. Put a limitation on screen only when the limitation is itself part of the concept students must learn.

Examples:

- `Sensitive periods are windows, not cliffs` earns a visible boundary because the misconception is the lesson.
- routine sample limitations normally belong in notes.

### 9.2 Separate evidence sources

When two numbers or claims come from two different sources, keep them separate. Do not collapse predictions and observed results into one citation.

### 9.3 Classic studies

Use classic studies for what they genuinely demonstrate. If a study is historically useful but evidentially compromised, teach the durable inference and record the limitation in notes unless the methodological problem is itself the lesson.

---

## 10. Figures and visuals

Figures must earn projection space.

Use a textbook figure when:

- its instructional job matches the slide;
- labels remain legible from the back of the room;
- the complete figure does not introduce irrelevant complexity.

Build a **slide-native visual** when:

- the book figure is too dense;
- the lecture needs only one part of it;
- the concept is better represented as a simple process, comparison, timeline, or system map;
- the projection version needs larger labels or a different aspect ratio.

Do not distort the textbook figure merely to make it fit. Redraw the teaching structure instead.

The figure philosophy in `docs/images/psych101_figure_style_guide.md` still governs: explanatory mechanism, comparison, system relationship, or misconception repair over decoration.

### 10.1 Provenance

- book figures: `docs/images/chNN/` plus existing metadata;
- slide-only assets: `slides/chNN/assets/`;
- slide-only provenance: `slides/chNN/assets/manifest.md`.

Generated or redrawn visuals need provenance just as textbook visuals do.

---

## 11. Animation-ready construction

Native animation generation is not required. Construct the deck so manual PowerPoint reveals are easy.

### Sequential text

Use separate paragraphs inside a text placeholder so the instructor can apply `Appear → By Paragraph`.

### Independent visual reveals

Keep reveal units as separate objects/groups. When the implementation permits naming, use:

- `REVEAL_01`
- `REVEAL_02`
- `REVEAL_03`
- `CONCLUSION`

Do not group reveal objects with static titles or structure.

### Complex sequences

Prefer duplicate-slide builds to fragile animation when the diagram changes substantially.

Speaker notes must always record the intended reveal order.

---

## 12. Natural stopping points

Decks must support different meeting lengths without “Day 1 / Day 2” hard-coding.

A natural stopping point is a conceptual boundary where:

- the argument so far is complete enough to stand;
- the next slide opens a new question or mechanism;
- students can retrieve what they just learned.

Section boundaries are the default candidates, but not every textbook section is equally sized. Large sections may contain an internal stopping point after a completed mechanism/evidence arc.

An instructor-facing `REFERENCE` slide may list the best stopping points at the end of the deck. It is `backup`, not part of the student lecture route.

Time estimates are diagnostic metadata, not slide-count mandates.

---

## 13. Standard deck arc

Not every chapter needs every move, but mature decks usually follow this logic:

1. **TITLE** — chapter argument.
2. **PREDICTION** or **MISCONCEPTION OPENER** when the opener supports commitment.
3. **CORE CLAIM / CORE TOOL** — initial repair.
4. **ROADMAP** — 3–5 lecture questions.
5. **SECTION DIVIDER**.
6. Explanation sequence using claims, contrasts, mechanisms, evidence, cases, and activities as earned.
7. Retrieval or a natural stop when the conceptual arc closes.
8. Repeat for later sections.
9. **SYNTHESIS** — reconstruct the governing argument.
10. **CLOSE / RETRIEVAL CLOSE** — answer the opening claim or transfer the central tool.
11. Optional **REFERENCE** slide for instructor planning.

The order is argumentative, not ceremonial. A chapter may open directly with a prediction before the roadmap when that preserves surprise.

---

## 14. Material normally kept off-screen

Do not automatically reproduce:

- complete Learning Objective wording;
- every historical date;
- biographies;
- complete definitions when a concrete case teaches the concept better;
- full reference lists;
- full glossary;
- review-question banks;
- every retrieval box;
- every figure;
- every qualification;
- the full Connections table;
- all chapter prose;
- AI modules merely because AI appears elsewhere in the course.

The default is **less text, more structure**.

---

## 15. AI content

Psychology remains primary. An AI example or module belongs only when it clarifies the psychological idea or serves an explicitly approved AI-literacy objective.

Do not insert an AI activity mechanically into every chapter.

When an AI activity is used:

- students should normally attempt the psychological task before consulting AI;
- the AI output becomes an object for comparison, critique, or calibration;
- the notes must identify the psychological learning objective and the AI-literacy objective separately.

---

## 16. Codex / agent workflow for a new chapter

This is the workflow an agent should follow without relying on conversational memory.

### Step 1 — Load authority

Read:

1. `AGENTS.md`;
2. `HANDOFF.md`;
3. the authoritative chapter Markdown;
4. `pipeline/voice-brief.md`;
5. relevant rows in `pipeline/evidence-commitments.md`;
6. this file;
7. `pipeline/activity-library.md`;
8. the prior chapter deck seed/plan if continuity is relevant.

Do **not** treat `pipeline/slides/README.md`'s legacy paragraph-to-slide behavior as the design target.

### Step 2 — Diagnose before authoring

Write a chapter deck blueprint containing:

- governing argument;
- 3–5 roadmap questions;
- core claims;
- high-value distinctions;
- mechanisms/processes;
- evidence cases;
- activities/predictions;
- figures or slide-native visuals;
- intentional omissions;
- natural stopping points;
- likely evidence boundaries.

The blueprint is a teaching sequence, not an outline of every heading.

### Step 3 — Build slide records

For every slide define:

- slide type;
- claim/title;
- visible content structure;
- status;
- speaker notes using §8;
- visual/reveal plan;
- source anchor;
- intentional omissions.

### Step 4 — Generate PowerPoint

Use the approved 4:3 design system. Reuse established layouts and geometry. Do not invent a new visual theme per chapter.

If the rendering implementation lacks a true `.potx` master, reproduce the established 4:3 white design programmatically and keep layout constants centralized. The absence of a template is not permission to change the look.

### Step 5 — Render and inspect

Render every slide. Inspect the **actual images**, not merely the PPTX object tree.

Check:

- title wrapping;
- body overflow;
- font size;
- spacing and alignment;
- object collisions;
- visual hierarchy;
- figure readability;
- repeated label/footer placement;
- excessive density;
- awkward empty space;
- broken arrows/lines;
- whether a slide that technically fits still reads from a lecture hall.

Repair the deck and rerender until the full set is clean.

### Step 6 — Content QA

Verify:

- the core route forms a coherent argument;
- roadmap questions are answered;
- every activity has a real student action and debrief;
- evidence boundaries match the chapter;
- no chapter claim was silently strengthened or weakened;
- recurring cases and cross-chapter links are accurate;
- no review-question bank or glossary was dumped into the lecture deck.

### Step 7 — Persist decisions

Record durable chapter-specific teaching decisions in `pipeline/slides/chNN.md` or the current canonical chapter deck source. Do not rely on manual edits to a generated PPTX.

For major completed deck work, update `GPT_project_log.md` and `HANDOFF.md` according to repository rules.

---

## 17. Reference implementation: Chapters 8–10

The mature Chapter 8–10 4:3 decks are the reference behavior for this specification. The canonical external visual reference is currently:

`ch10_lifespan_development_4x3_draft.pptx`

Because generated PPTX binaries are intentionally not committed, the following patterns define what Codex must reproduce.

### 17.1 Chapter 10 — prediction → repair

**PREDICTION**

> Which statement best captures development?
> “Children are mostly incomplete adults.”
> Commit first. Then explain your reason to a neighbor.

The following **CORE CLAIM** uses conservation to show *why* the tempting answer fails. The prediction is not decorative interaction; it creates a commitment that the next slide can repair.

### 17.2 Chapter 10 — mechanism instead of term list

**MECHANISM**

> Humans follow a slow, expensive strategy.
> An organism cannot spend the same calorie twice.

The slide makes life-history tradeoffs visible as a continuum and leaves paleoanthropological nuance in notes.

### 17.3 Chapter 10 — methods as inference

**COMPARISON**

> Two designs ask different change questions.
> Age difference is not automatically aging.

Cross-sectional and longitudinal designs appear with their signature inferential weaknesses, followed by the diagnostic question: are we comparing ages, cohorts, or within-person change?

### 17.4 Chapter 8 — a reusable core tool

**CORE TOOL**

> Memory has three places to fail.
> “I forgot” is not a diagnosis.

Encoding, storage, and retrieval become a diagnostic framework rather than three definitions.

### 17.5 Chapter 9 — activity with a failure mode

**PREDICTION**

> More English words beginning with K, or with K as the third letter?

Students commit and state the basis of judgment before availability is named. The debrief separates ease of retrieval from actual frequency.

### 17.6 Mature note style

A strong note block looks like this:

```text
Intent: Teach teratogens as conditional developmental risks rather than a memorized list.
Instructor move: Keep the logic on-screen: timing, dose/pattern, and organism/context.
Activity procedure: None.
Reveal intention: Levers left to right; alcohol boundary last.
Evidence boundary: Use the chapter’s public-health wording: no amount and no stage of prenatal alcohol exposure has been shown safe.
Source anchor: Section 1, Before birth: timing and dose.
Transition: Prenatal construction leads into the postnatal build-and-carve process.
Optional elaboration: None.
Status: core
Intentionally omitted: Detailed list of infections, medications, and physical agents.
```

Codex should match this level of specificity, not merely attach generic presenter notes.

---

## 18. Validation checklist

Before a deck is considered finished:

- [ ] Governing argument is identifiable in one sentence.
- [ ] Roadmap has 3–5 student-facing questions, not copied objectives.
- [ ] Every core slide advances the argument or makes students do useful cognitive work.
- [ ] Slide titles state claims or tasks rather than generic topics.
- [ ] One hard idea/task per slide.
- [ ] All student-facing text is projection-readable; no rescue-by-shrinking.
- [ ] Every slide uses the structured notes schema in §8.
- [ ] Every activity includes a real student action and debrief.
- [ ] Core/optional/backup status is explicit.
- [ ] Evidence boundaries agree with chapter source and evidence commitments.
- [ ] Figures are projection-readable and instructionally necessary.
- [ ] Slide-only visuals have provenance.
- [ ] Reveal intentions are constructible in PowerPoint.
- [ ] Natural stopping points are identified.
- [ ] Synthesis reconstructs the chapter rather than listing terms.
- [ ] Close requires retrieval, explanation, or transfer.
- [ ] Full deck has been rendered and visually inspected slide by slide.
- [ ] No overlaps, clipped text, broken lines, or unreadably dense slides remain.
- [ ] Generated PPTX is treated as output; durable decisions live in text source/spec files.

---

## 19. Remaining implementation work

The pedagogy and slide grammar are now settled enough to automate Chapters 11–13. Remaining implementation work should not reopen those decisions:

1. build or designate a real reusable `.potx` / `.pptx` master if desired;
2. centralize the established 4:3 geometry in the generator;
3. make the generator consume an explicit authored deck model rather than chapter paragraphs;
4. add PowerPoint-edit ingest only after slide identities are stable;
5. consider a reveal.js renderer later as a renderer concern, not a reason to change slide grammar.

The next useful test of this standard is **Chapter 11 Social Psychology generated by Codex**, followed by rendered visual and pedagogical review against Chapters 8–10.
