# Chapter 8 Learning Lab Integration

**Status:** ready for execution  
**Date:** 2026-07-17  
**Repository:** `jkoxford-a11y/psych101`

## Objective

Integrate two already-built Chapter 8 Learning Labs into the authoritative chapter at their strongest conceptual locations without expanding the chapter's conceptual load. Preserve all existing prose, figures, references, review questions, and callouts.

Approved chapter links:

1. `docs/labs/ch08/levels-of-processing.html` — primary Section 1 lab.
2. `docs/labs/ch08/interactive-imagery.html` — secondary applied elaboration lab.

Do **not** wire `docs/labs/ch08/self-reference-effect.html` into the chapter. It remains available through the Learning Labs index as optional enrichment because it introduces self-schema beyond the chapter's current core architecture.

## Read before editing

- `AGENTS.md`
- `HANDOFF.md`
- `pipeline/voice-brief.md`
- `pipeline/html-conversion-spec.md`
- `pipeline/audits/ch08-pre-review-audit.md`
- `source/chapters/ch08-memory.md`
- `docs/chapters/08-memory.html`
- `docs/labs/ch08/levels-of-processing.html`
- `docs/js/labs-levels-of-processing.js`
- `docs/labs/ch08/interactive-imagery.html`
- `docs/js/labs-interactive-imagery.js`
- `docs/labs/ch08/self-reference-effect.html`

## Editable scope

- `source/chapters/ch08-memory.md`
- `docs/chapters/08-memory.html`
- `pipeline/build_chapter_html.mjs` only if Chapter 8 can be added and regenerated without changing unrelated chapter output
- `pipeline/audits/ch08-lab-integration-validation.md` (new)
- `PROJECT_BACKLOG.md` only after successful browser validation, to remove the completed Chapter 8 lab-validation/wiring item
- `GPT_project_log.md` only after the complete integration and validation pass

Do not edit Chapter 7 files, Chapter 8 lab HTML/JavaScript, figures, image metadata, shared CSS, shared JavaScript, `HANDOFF.md`, or any other chapter.

## Source insertions

### 1. Levels of Processing lab

In `source/chapters/ch08-memory.md`, place the following paragraph immediately after the Think About It prompt that follows Figure 8.3 and before the paragraph beginning `Two more encoding and retrieval strategies round out this section`:

```markdown
**Try it yourself:** In [What Makes a Word Stick?](../../docs/labs/ch08/levels-of-processing.html), commit to a prediction, make appearance-, sound-, and meaning-based judgments, and compare later recognition. Treat your individual score as a demonstration to interpret, not as a diagnostic test or a controlled experiment on you.
```

Rationale: this is the chapter's primary practice asset for levels of processing. It changes the encoding operation, requires prediction before evidence, reports false alarms, and explicitly qualifies individual results.

### 2. Interactive Imagery lab

Place the following paragraph immediately after the paragraph explaining the spacing effect and testing effect and before the Section 2 divider:

```markdown
**Try it yourself:** [Can You Make Two Words Stick Together?](../../docs/labs/ch08/interactive-imagery.html) compares your usual strategy with an ordinary interaction and then a bizarre interaction. Use it to test whether relational binding gives one word a route back to its partner—and whether added weirdness helps, adds nothing, or distorts the relationship you need to remember.
```

Rationale: this is a secondary applied elaboration activity. Its fixed progression teaches relational binding and distinctiveness while explicitly rejecting a causal interpretation of one student's three scores.

## Generated HTML synchronization

The student-facing links must appear at the corresponding locations in `docs/chapters/08-memory.html` with paths:

- `../labs/ch08/levels-of-processing.html`
- `../labs/ch08/interactive-imagery.html`

First inspect `pipeline/build_chapter_html.mjs` and current repository history.

- If a checked-in generator already owns Chapter 8, regenerate from source.
- If Chapter 8 is not currently generator-owned, do not casually add it to the shared converter unless a dry run proves idempotence and preserves all Chapter 8 structures.
- If no safe checked-in generator owns Chapter 8, perform a narrow HTML synchronization limited to the two link paragraphs. This is permitted by `AGENTS.md` when no checked-in generator exists for the target output.

Do not rewrite surrounding prose or reconstruct the whole page manually.

## Static validation

Confirm:

- both source links resolve to existing lab files;
- both generated HTML links use the correct `../labs/ch08/` paths;
- the self-reference lab is not linked from source or Chapter 8 HTML;
- each approved link appears exactly once in source and once in HTML;
- Figure 8.3, its caption, and its following Think About It prompt are unchanged;
- the spacing/testing paragraph is unchanged;
- all six figure paths and nonempty alt texts remain intact;
- all internal anchors resolve;
- all 12 review questions retain their answer disclosures;
- Key Terms remain populated;
- Further Reading items remain separated from References;
- no replacement character or bad ` ? ` mojibake appears;
- `pipeline/lint_chapters.py docs/chapters/08-memory.html` passes.

## Browser validation

Exercise the public-path page and both approved labs at:

- 1440 × 900;
- 390 × 844;
- 844 × 390.

For the chapter page, confirm:

- both links are visible at the intended conceptual locations;
- both links return HTTP 200;
- no page-level horizontal overflow;
- existing figures, sidebar state, review disclosures, and expandable behavior remain functional.

For each lab, complete a fresh-session path and verify:

- prediction commitment cannot be bypassed;
- required responses gate progression;
- completion reaches explanation and transfer;
- mid-session refresh restores the correct phase and state;
- reset clears only that lab's session key;
- focus moves to the new phase heading;
- labels, live regions, and controls remain usable by keyboard;
- no console errors or non-file network requests;
- no page-level overflow at all three viewports.

Do not aggregate student responses or describe either activity as a valid experiment on the student.

## Completion record

Create `pipeline/audits/ch08-lab-integration-validation.md` recording:

- exact files changed;
- the two placement decisions;
- why self-reference remains index-only;
- generator versus narrow-HTML-repair method;
- static and browser checks performed;
- any unresolved limitation.

Only after all checks pass:

- remove the completed Chapter 8 lab item from `PROJECT_BACKLOG.md`;
- append a concise dated entry to `GPT_project_log.md`.

Do not alter `HANDOFF.md` while the Chapter 7 Work task is active.