# Interactive Components Spec
## Psych101 Textbook — Reuse Guide for Chapter Authors

This document covers the two interactive patterns that should appear in every chapter HTML file, plus notes on the prologue-only components. Read alongside `chapter-spec.md` and `html-conversion-spec.md`.

---

## What carries forward to every chapter

### 1. Hybrid retrieval prompts

**What they do:** Replace static Stop & Retrieve callouts with a two-stage pattern — write before revealing, rate confidence, reveal model answer, self-score against criteria, receive a calibration feedback line.

**When to use:** Every Stop & Retrieve callout in a chapter. Do not use for Think About It prompts or Do Not Confuse panels — those stay static.

**Files needed:**
- `docs/css/prologue-interactive.css` — already exists; link it in every chapter HTML
- One chapter-specific JS file: `docs/js/chNN-interactive.js` (copy the retrieval prompt machinery from `prologue-interactive.js` and add chapter-specific prompt data)

**HTML — two attributes on the callout div:**
```html
<div class="callout callout--stop-retrieve"
     data-interactive="retrieve"
     data-prompt-id="s1-attention">
  <div class="callout-title">Stop and Retrieve</div>
  <p>Your prompt text here.</p>
</div>
```

The `data-prompt-id` value must match a key in the chapter JS `PROMPTS` object (see below). The original `<div class="callout-title">` and `<p>` content is replaced by JS at runtime but remains readable if JS fails.

**JS — one entry per prompt in the PROMPTS object:**
```js
var PROMPTS = {
  's1-attention': {
    question: 'Before moving on — what is the difference between selective attention and working memory?',
    modelAnswer: 'Full model answer here...',
    criteria: [
      'Criterion one.',
      'Criterion two.',
      'Criterion three.',
      'Criterion four.'
    ]
  }
  // additional prompts...
};
```

**Writing good criteria:** Aim for 4 criteria per prompt. Each criterion should be a discrete, independently checkable claim — not a paraphrase of the whole answer. Students should be able to check 2/4 and know exactly what they missed. Avoid criteria that are true of almost any reasonable answer.

**Writing good model answers:** Two to four sentences. Cite the relevant finding or author if the prompt asks about research. Match the voice of the chapter — do not write a textbook definition, write what you would say in lecture.

**Calibration feedback:** The feedback logic is built into the JS and does not need per-chapter customization. It produces four response types based on confidence/accuracy combinations. The feedback always names the phenomenon (calibration gap) and points to the relevant chapter section.

---

### 2. Stepwise MCQs

**What they do:** Present a scenario, delay answer options by 5 seconds (with a visible countdown) to push initial retrieval, then give explanatory feedback after selection.

**When to use:** Sparingly — one or two per chapter, placed only where the chapter teaches a categorical distinction that students routinely conflate. Do not use for open-ended understanding questions; use retrieval prompts for those.

**Good candidates per chapter:**
- Ch. 6 Learning: positive reinforcement vs. negative reinforcement vs. punishment
- Ch. 7 Memory: encoding vs. storage vs. retrieval failure
- Ch. 8 Thinking: System 1 vs. System 2 processing
- Ch. 9 Lifespan: assimilation vs. accommodation
- Ch. 10 Social: conformity vs. obedience vs. compliance
- Ch. 13 Disorders: diagnosis vs. etiology vs. prognosis

**HTML — a callout div with the mcq data attribute:**
```html
<div class="callout callout--stop-retrieve"
     data-interactive="mcq"
     data-prompt-id="mcq-reinforcement-types">
  <div class="callout-title">Check your understanding</div>
</div>
```

The inner content is replaced entirely by JS. The fallback (no JS) is just the callout title — place a static version of the question in the surrounding prose so the distinction is taught even without the interactive layer.

**JS — one entry per MCQ in the MCQS object:**
```js
var MCQS = {
  'mcq-reinforcement-types': {
    scenario: 'A student gets a bad grade and stops playing video games to study more. What process best explains the change in study behavior?',
    cue: 'Try to identify the correct concept before the options appear.',
    options: [
      {
        label: 'Positive reinforcement — study behavior increased because something rewarding was added',
        correct: false,
        feedback: 'Not quite. Positive reinforcement adds something desirable to increase a behavior. Here, something was removed (video games), not added.'
      },
      {
        label: 'Negative reinforcement — study behavior increased because something aversive was removed',
        correct: false,
        feedback: 'Close, but the aversive thing (bad grades, anxiety) was not removed by studying — the student removed video games preemptively. Negative reinforcement requires the behavior itself to remove the aversive stimulus.'
      },
      {
        label: 'Punishment — the bad grade decreased a behavior (video games), indirectly increasing studying',
        correct: true,
        feedback: 'Correct. The bad grade punished the prior study pattern, which decreased one behavior (gaming) and created space for another. This is punishment followed by a voluntary behavior change — not reinforcement of studying itself.'
      }
    ]
  }
};
```

**Writing good MCQ feedback:** Every option needs feedback that explains the mechanism, not just "correct" or "wrong." Wrong-answer feedback should name what the student was probably thinking and explain the precise distinction. Correct-answer feedback should reinforce the mechanism, not just confirm the choice.

**Scenario writing:** Keep scenarios concrete and novel — do not reuse examples from the chapter prose, because recognition of a familiar example is not the same as applying the concept. One sentence is usually enough.

---

## Chapter JS file structure

Copy this shell for each new chapter. Replace `chNN` with the chapter number and add prompt/MCQ data.

```js
/**
 * chNN-interactive.js
 * Interactive components for Chapter N — [Title]
 * 
 * Retrieval prompts: [list prompt IDs]
 * MCQs: [list MCQ IDs]
 */

(function () {
  'use strict';

  /* ── Retrieval prompt data ───────────────────────────────────────────────── */

  var PROMPTS = {
    // Add entries here — see interactive-components-spec.md
  };

  /* ── MCQ data ────────────────────────────────────────────────────────────── */

  var MCQS = {
    // Add entries here — see interactive-components-spec.md
  };

  /* ── Engine (copy from prologue-interactive.js, sections marked ENGINE) ─── */
  // Copy everything from prologue-interactive.js EXCEPT:
  //   - STORAGE_KEY (change to 'psych101_chNN_v1')
  //   - initScheduler() — prologue-only, omit
  //   - initPromptBuilder() — prologue-only, omit
  //   - The dashboard heading text (update chapter reference)
  // Keep:
  //   - storageAvailable(), loadData(), saveAttempt(), clearAllData()
  //   - getCalibrationFeedback()
  //   - buildRetrievalHTML(), wireRetrieval(), initRetrievalPrompts()
  //   - updateDashboard()
  //   - buildMCQHTML(), wireMCQEvents(), initMCQs()
  //   - init() — call initRetrievalPrompts(), initMCQs(), updateDashboard()

}());
```

**Storage key:** Use `'psych101_chNN_v1'` so each chapter's calibration data is isolated. Students who read Chapter 6 get a Chapter 6 dashboard; it does not bleed into Chapter 7.

---

## Chapter HTML additions

In the `<head>`:
```html
<link rel="stylesheet" href="../css/prologue-interactive.css" />
```

Before `</body>`:
```html
<script src="../js/chNN-interactive.js"></script>
```

Note the `../` prefix — chapter HTML files live in `docs/chapters/`, one level below `docs/css/` and `docs/js/`.

Add the calibration dashboard before the Review Questions section:
```html
<div id="calibration-dashboard">
  <h2 id="calibration-heading">Your calibration pattern</h2>
  <div id="calibration-dashboard-content">
    <p class="dashboard-empty">Complete the Stop &amp; Retrieve prompts above to see your calibration pattern here.</p>
  </div>
</div>
```

---

## Prologue-only components (do not replicate in content chapters)

| Component | Why prologue-only |
|---|---|
| Spaced retrieval scheduler | Teaches spacing as a concept; becomes redundant once students have internalized it |
| AI prompt builder | Teaches prompt construction as a skill; reference it in later chapters rather than rebuilding it |
| Calibration dashboard | Does appear in every chapter — but the cross-chapter aggregate view is a future build, not yet implemented |

For content chapters, the AI prompt builder can be referenced with a one-line callout pointing back to the prologue:
```html
<div class="callout callout--ai-connection">
  <div class="callout-title">AI connection</div>
  <p>The AI prompt patterns from the Prologue apply directly here.
  Pattern A (quiz me one question at a time) works especially well for
  [chapter-specific concept].</p>
</div>
```

---

## Accessibility checklist for each chapter

- [ ] Every `data-interactive="retrieve"` div has a meaningful `<p>` question inside it (fallback for no-JS)
- [ ] Every MCQ div has a `<div class="callout-title">Check your understanding</div>` (fallback label)
- [ ] `aria-live="polite"` is present on feedback elements (included in the engine — do not remove)
- [ ] Confidence radio buttons use `<fieldset>` and `<legend>` (included in the engine)
- [ ] No color-only feedback — correct/incorrect MCQ options also have class names in addition to color (included in the engine)
- [ ] Calibration dashboard has a clear-data button (included in the engine)

---

## Decisions still open

- **Cross-chapter calibration view:** A future build could aggregate data from all chapter storage keys into a single dashboard on the TOC page. Not yet designed — log ideas when they arise during chapter conversion.
- **LMS compatibility:** localStorage clears unpredictably in some Canvas configurations. The dashboard copy already says data is session-scoped. If students report lost data, the fallback is to note this in the syllabus rather than engineering around Canvas's cache behavior.
- **Retrieval prompt count per chapter:** Aim for one per major section — typically 4–6 per chapter. Do not add prompts beyond the existing Stop & Retrieve markers in the markdown; do not remove existing markers to reduce the count.
