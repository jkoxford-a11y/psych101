# Psych101 — Current Handoff

**Last updated:** 2026-07-21
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, `pipeline/audits/ch05-line-edit-html-deferral-2026-07-21.md` for the active Chapter 5 sequence, `pipeline/audits/learning-lab-state-restoration-audit.md` for the repository-wide lab audit, `pipeline/audits/ch04-signal-detection-timed-flash-2026-07-18.md` for the Signal Detection revision, and `pipeline/audits/ch07-image-work-pause-2026-07-17.md` for the paused Chapter 7 image lane.

## Current state

### Chapter 5 — active line-edit lane

The authoritative source is `source/chapters/ch05-consciousness.md`. A consciousness-only Word line-edit packet has been structurally prepared using paragraph splitting and limited list conversion without intentionally changing the chapter's argument. Jon is completing the instructor line edit before any source reconciliation or HTML work.

Substantive judgments about the sea-squirt material, attention/clinical material, and comparison-drug table remain reserved for the instructor's line edit. Do not preempt those decisions with structural deletion, relocation, or compression.

`docs/chapters/05-consciousness.html` is obsolete: it is an older combined Consciousness + Sleep chapter containing circadian rhythms, sleep architecture, dreaming, sleep disorders, and sleep-deprivation material. `docs/chapters/06-sleep.html` already contains the separate current Sleep chapter. The Chapter 5 HTML must not be used as an editorial source or manually patched. After the line edit is reconciled into Markdown, add Chapter 5 to the shared builder, regenerate the page from source, and validate that the duplicated sleep material is gone.

### Chapter 4 — authoritative source and HTML complete

The approved line-edit reconciliation is complete in `source/chapters/ch04-sensation-perception.md`, with `pipeline/audits/ch04_line_edit_reconciliation_revision_spec_2026-07-20_v2.md` as the durable specification.

`docs/chapters/04-sensation-perception.html` was regenerated from the reconciled source in commit `6d0baf39f4f66240be47528cfe0006b1aa678707` (`Regenerate Chapter 4 HTML`). The same commit added guarded Chapter 4 options to `pipeline/build_chapter_html.mjs`. No Chapter 6 or line-edit-packet files were included. The Chapter 4 editorial lane is closed.

### Chapter 4 — Signal Detection

The approved lab uses 450 ms fixation, 100 ms exposure, 10% peak contrast, Gaussian sigma 20, generated grayscale noise, and automatic remasking before response. Responses remain disabled during fixation and exposure, and tab loss cancels an unfinished trial without recording it.

Static checks, JavaScript syntax, and `pipeline/ch04_signal_detection_mask_regression.cjs` pass. Weber's Law, Blind-Spot Filling-In, and Context and Ambiguous Perception retain their prior automated pass status. The size–weight illusion placeholder remains a separate build-or-remove decision.

### Repository-wide figure expansion

The Prologue and Chapters 1–13 were audited. There are 80 explicit expandable figures, two low-resolution Chapter 3 figures marked `.no-expand`, and no active `.wide` figures. Expanded width is capped at 1100px and accounts for the open sidebar and safe gutters; captions remain capped at 716px.

`pipeline/figure_expansion_regression.cjs` passes all 14 pages at 1440×900, 1280×800, 1024×768, 390×844, and 844×390. A deployed human spot check remains for one desktop figure with the sidebar open and for phone portrait and landscape.

### Repository-wide Learning Labs

All 20 stateful standalone labs completed the automated state-restoration and restart-access audit. `pipeline/learning_lab_state_regression.cjs` passes all 20 labs at 1440 × 900, 390 × 844, and 844 × 390 for fresh state, commitment, restoration, restart, storage removal, focus, computed visibility, overflow, completion, and no-duplication behavior.

Deployment still requires human spot checks of real-origin `sessionStorage`, keyboard operation, completed-state restart, and navigation.

### Completed chapter lanes

Chapters 1–4 and 9–13 have completed their canonical revision/validation cycles. Chapter 8's wired Levels of Processing and Interactive Imagery labs remain approved; Self-Reference Effect remains index-only. Do not reopen completed lanes absent a specific defect or Jon's editorial request.

### Paused image lanes

Chapter 7 prose and Classical Conditioning work are complete, but full HTML regeneration remains deferred until its figure set is approved. Figure 7.7 remains unresolved because the current candidate overlaps. Resume only from direct SVG/PNG inspection if Jon explicitly reopens the lane. Chapter 6 flagged figure candidates remain queued while the project stays in a non-image lane.

### Working-tree caution

At the July 21 session close, unrelated local changes existed in several `line-edit-packets/` files and `source/chapters/ch06-sleep.md`. Do not use `git add .`, `git restore .`, or broad cleanup commands. Stage only exact authorized paths.

## Immediate next actions

1. Jon completes the Chapter 5 Word line edit.
2. Reconcile the approved Word edits into `source/chapters/ch05-consciousness.md`, preserving the instructor's tracked decisions and validating the full chapter/back matter.
3. Add a narrowly scoped Chapter 5 configuration to `pipeline/build_chapter_html.mjs`, regenerate `docs/chapters/05-consciousness.html`, and validate source/HTML parity, chapter structure, figures, links, callouts, review/details markup, encoding, and responsive rendering. Confirm that no duplicated sleep material remains.
4. Complete the remaining deployed figure-expansion, Signal Detection, and Learning Lab human spot checks when returning to release validation.
5. Keep the Chapter 6 and Chapter 7 image lanes paused unless Jon explicitly changes lanes.

## Important files

- Chapter 5 authoritative source: `source/chapters/ch05-consciousness.md`
- Chapter 5 workflow record: `pipeline/audits/ch05-line-edit-html-deferral-2026-07-21.md`
- Obsolete generated page awaiting post-line-edit replacement: `docs/chapters/05-consciousness.html`
- Current separate Sleep page: `docs/chapters/06-sleep.html`
- Chapter 4 reconciled source/specification: `source/chapters/ch04-sensation-perception.md`, `pipeline/audits/ch04_line_edit_reconciliation_revision_spec_2026-07-20_v2.md`
- Shared builder: `pipeline/build_chapter_html.mjs`
- Timed-flash audit/regression: `pipeline/audits/ch04-signal-detection-timed-flash-2026-07-18.md`, `pipeline/ch04_signal_detection_mask_regression.cjs`
- Repository-wide lab audit/regression: `pipeline/audits/learning-lab-state-restoration-audit.md`, `pipeline/learning_lab_state_regression.cjs`
- Durable deferred work: `PROJECT_BACKLOG.md`
- Paused Chapter 7 lane: `pipeline/audits/ch07-image-work-pause-2026-07-17.md`
