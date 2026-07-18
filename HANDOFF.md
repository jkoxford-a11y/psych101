# Psych101 — Current Handoff

**Last updated:** 2026-07-18 (Signal Detection mask repair validated locally; deployed retest remains)
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `pipeline/audits/ch07-image-work-pause-2026-07-17.md` for the Chapter 7 stopping point.

## Current state

### Chapter 1 — History and Approaches

The canonical audit/revision cycle is complete. Canonical revision commit `86e807e` revised `source/chapters/ch01-history-approaches.md` first and then rebuilt `docs/chapters/01-history-approaches.html`; the implementation record is in `pipeline/audits/ch01-pre-review-audit.md`.

The chapter now presents historical schools as overlapping arguments; distinguishes Wundt from Titchener and Watson from Skinner; calibrates therapeutic-alliance, depression, evolutionary, gene–environment, and biopsychosocial claims; includes transfer-oriented assessment; and has synchronized source/HTML structure. Visible figures are sequentially numbered 1.1 and 1.2. All active images were inspected, and the Chapter 1 manifest now has complete provenance, license, modification, attribution, sharing-status, and caveat fields. The repository linter, 175 targeted structural/content checks, `git diff --check`, and desktop/portrait/landscape browser checks passed. Do not reopen Chapter 1 absent a concrete defect or Jon's specific editorial request.

### Chapter 2 — Research Methods and Statistics

Chapter 2 completed its canonical audit/revision cycle and post-revision verification. The durable audit is `pipeline/audits/ch02-pre-review-audit.md`; source, generated HTML, figure manifest, and lab are aligned. Do not reopen settled decisions absent a specific defect.

### Chapter 3 — Neuroscience and Biological Bases of Behavior

Chapter 3 is complete and validated. The durable record is `pipeline/audits/ch03-post-revision-validation.md`. The saltatory-conduction video is responsive at desktop, portrait-mobile, and landscape-mobile widths. Two standalone Chapter 3 labs still require live end-to-end browser validation.

### Chapters 9–13

Canonical revision work is complete. Do not reopen these chapters unless Jon identifies a specific editorial, figure, lab, or rendered-page issue.

### Chapter 7 — Learning

The prose architecture and Classical Conditioning Lab revisions are complete. The authoritative source remains `source/chapters/ch07-learning.md`; the current HTML is a mixed interim artifact, and full regeneration remains deferred until the nine-figure set is approved.

Production/candidate decisions remain: retain production 7.1 and 7.3; later promote approved candidates 7.2 and 7.9; provisionally retain approved 7.4 and 7.5; 7.6 and 7.8 are promoted. Figure 7.7 remains unresolved. Its schematic route was selected in principle, but the current candidate has overlapping elements and is not approved. Resume only from direct SVG/PNG inspection. Do not promote candidates, regenerate the full chapter, or finish the metadata batch until 7.7 is resolved. See the durable pause audit for exact state.

### Chapter 8 — Memory labs

Chapter 8 lab validation is complete. Levels of Processing and Interactive Imagery remain wired in both the authoritative source and generated HTML. Work repaired rapid double-submission in both labs and one malformed Interactive Imagery score sentence in commit `95588eb`.

Functional completion, reload/state restoration, reset, feedback, focus transitions, navigation paths, event logs/results, privacy wording, console behavior, and responsive layouts passed at 1440 × 900, 390 × 844, and 844 × 390. Jon completed the remaining human keyboard-only pass, including Tab/Shift+Tab navigation and Enter/Space activation, and reported that both labs worked correctly. The durable validation record is `pipeline/audits/ch08-lab-validation.md`.

Self-Reference Effect remains index-only. Its design is sound, but it introduces self-schema without filling a current Chapter 8 instructional gap; do not wire it into the chapter absent a new editorial decision.

### Chapter 6 — Flagged figure candidates

The candidate-only work order at `pipeline/work-orders/ch06-flagged-figure-candidates.md` remains queued. Leave it untouched while the project stays in a non-image lane.

### Chapter 4 — Learning Labs

Automated functional and responsive validation is complete for Signal Detection, Weber’s Law, Blind-Spot Filling-In, and Context-and-Ambiguous-Perception. All four passed the exercised completion, validation, feedback, focus, save/restore, reset, privacy/accessibility, and overflow checks at 1440 × 900, 390 × 844, and 844 × 390.

The validation found and repaired stale status/reset state in all four labs, a null-focus error when Weber’s Law lacked its second prediction, and double-mirrored target geometry in the Blind-Spot lab. A deployed human check then found that Signal Detection's white stimulus mask remained rendered over active trials because `.stimulus-mask { display: grid; }` overrode the element's `hidden` state. The narrow CSS repair now has a computed-style and hit-testing regression check that passes all 24 trials at all three viewport sizes. The durable record is `pipeline/audits/ch04-lab-validation.md`.

Chapter 4 is not closed. After deployment, Jon must retest that “Show next trial” removes the white mask and exposes the dark noise field/faint target as appropriate, either response restores the mask, and both 12-trial conditions complete. Any unfinished keyboard-only, real-sessionStorage, and navigation checks also remain. The size–weight illusion placeholder remains a separate build-or-remove decision.

## Immediate next actions

1. Deploy and retest the repaired Signal Detection mask behavior, then finish any remaining Chapter 4 keyboard, real-sessionStorage, and navigation checks before marking `pipeline/audits/ch04-lab-validation.md` complete.
2. After Chapter 4 closes, live-test the two standalone Chapter 3 labs at desktop, portrait-mobile, and landscape-mobile widths.
3. Keep Chapter 7 image work paused until Jon explicitly reopens it; if reopened, resume with Figure 7.7 direct inspection and overlap repair.
4. Leave Chapter 6 candidate-only image work queued while the project is deliberately avoiding a new image lane.
5. Do not reopen completed Chapters 1–2, Chapter 8, or Chapters 9–13 without a specific regression or editorial request.

## Important files

- Chapter 4 validation: `pipeline/audits/ch04-lab-validation.md`, `docs/labs/ch04/`, `docs/labs/ch04/index.html`, `docs/labs/index.html`
- Chapter 8 validation: `pipeline/audits/ch08-lab-validation.md`, `docs/labs/ch08/`, `docs/js/labs-levels-of-processing.js`, `docs/js/labs-interactive-imagery.js`
- Next non-image lane after Chapter 4 closure: Chapter 3 lab HTML/JavaScript and `PROJECT_BACKLOG.md`
- Paused Chapter 7 lane: `pipeline/audits/ch07-image-work-pause-2026-07-17.md`, `source/chapters/ch07-learning.md`, `docs/chapters/07-learning.html`, `docs/images/ch07/`
- Shared state: `AGENTS.md`, `GPT_project_log.md`, `PROJECT_BACKLOG.md`, `source/visuals-inventory.md`
