# Psych101 — Current Handoff

**Last updated:** 2026-07-17 (Chapter 1 canonical revision complete; Chapter 8 lab validation is the next non-image action)
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `pipeline/audits/ch07-image-work-pause-2026-07-17.md` for the Chapter 7 stopping point.

## Current state

### Chapter 1 — History and Approaches

The canonical audit/revision cycle is complete. Canonical revision commit `86e807e` revised `source/chapters/ch01-history-approaches.md` first and then rebuilt `docs/chapters/01-history-approaches.html`; the implementation record is in `pipeline/audits/ch01-pre-review-audit.md`.

The chapter now presents historical schools as overlapping arguments; distinguishes Wundt from Titchener and Watson from Skinner; calibrates therapeutic-alliance, depression, evolutionary, gene–environment, and biopsychosocial claims; includes transfer-oriented assessment; and has synchronized source/HTML structure. Visible figures are sequentially numbered 1.1 and 1.2. All active images were inspected, and the Chapter 1 manifest now has complete provenance, license, modification, attribution, sharing-status, and caveat fields. The repository linter, 175 targeted structural/content checks, `git diff --check`, and desktop/portrait/landscape browser checks passed. Do not reopen Chapter 1 absent a concrete defect or Jon's specific editorial request.

### Chapter 2 — Research Methods and Statistics

Chapter 2 completed its canonical audit/revision cycle and post-revision verification. The durable audit is `pipeline/audits/ch02-pre-review-audit.md`; source, generated HTML, figure manifest, and lab are aligned. Do not reopen settled decisions absent a specific defect.

### Chapter 3 — Neuroscience and Biological Bases of Behavior

Chapter 3 is complete and validated. The durable record is `pipeline/audits/ch03-post-revision-validation.md`. The saltatory-conduction video is responsive at desktop, portrait-mobile, and landscape-mobile widths.

### Chapters 9–13

Canonical revision work is complete. Do not reopen these chapters unless Jon identifies a specific editorial, figure, lab, or rendered-page issue.

### Chapter 7 — Learning

The prose architecture and Classical Conditioning Lab revisions are complete. The authoritative source remains `source/chapters/ch07-learning.md`; the current HTML is a mixed interim artifact, and full regeneration remains deferred until the nine-figure set is approved.

Production/candidate decisions remain: retain production 7.1 and 7.3; later promote approved candidates 7.2 and 7.9; provisionally retain approved 7.4 and 7.5; 7.6 and 7.8 are promoted. Figure 7.7 remains unresolved. Its schematic route was selected in principle, but the current candidate has overlapping elements and is not approved. Resume only from direct SVG/PNG inspection. Do not promote candidates, regenerate the full chapter, or finish the metadata batch until 7.7 is resolved. See the durable pause audit for exact state.

### Chapter 8 — Memory labs

The levels-of-processing and interactive-imagery labs are wired in source and generated HTML. The self-reference lab remains index-only. End-to-end browser validation is still undocumented: complete both wired labs and verify reload/state behavior, reset, keyboard/focus behavior, logs/results, privacy wording, return navigation, and desktop/portrait-mobile/landscape-mobile rendering.

### Chapter 6 — Flagged figure candidates

The candidate-only work order at `pipeline/work-orders/ch06-flagged-figure-candidates.md` remains queued. Leave it untouched while the project stays in a non-image lane.

## Immediate next actions

1. Complete live end-to-end browser validation of the two wired Chapter 8 labs and record any concrete defects.
2. Keep Chapter 7 image work paused until Jon explicitly reopens it; if reopened, resume with Figure 7.7 direct inspection and overlap repair.
3. Leave Chapter 6 candidate-only image work queued while the project is deliberately avoiding a new image lane.
4. Do not reopen completed Chapters 1–3 or 9–13 without a specific regression or editorial request.

## Important files

- Chapter 1 record: `pipeline/audits/ch01-pre-review-audit.md`, `pipeline/work-orders/ch01-canonical-revision.md`
- Next non-image lane: Chapter 8 source/HTML and `docs/labs/ch08/`
- Paused Chapter 7 lane: `pipeline/audits/ch07-image-work-pause-2026-07-17.md`, `source/chapters/ch07-learning.md`, `docs/chapters/07-learning.html`, `docs/images/ch07/`
- Shared state: `AGENTS.md`, `GPT_project_log.md`, `PROJECT_BACKLOG.md`, `source/visuals-inventory.md`
