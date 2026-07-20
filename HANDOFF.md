# Psych101 — Current Handoff

**Last updated:** 2026-07-20 (book-wide objective formatting and subsection navigation standardized; prior deployed human checks remain)
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, `pipeline/audits/learning-lab-state-restoration-audit.md` for the repository-wide lab audit, `pipeline/audits/ch04-signal-detection-timed-flash-2026-07-18.md` for the current Signal Detection revision, and `pipeline/audits/ch07-image-work-pause-2026-07-17.md` for the paused Chapter 7 image lane.

## Current state

### Book-wide objective formatting and section navigation

All 92 canonical and rendered Learning Objectives across the Prologue and Chapters 1–13 now bold only the opening instructional verb, with wording otherwise unchanged. Numbered sections now omit navigation boxes for zero or one genuine subsection and show exactly one complete box for two or more. The four former one-link boxes are gone; useful boxes are present in Chapter 4 Section 4, Chapter 5 Sections 1–2, and Chapter 6 Section 2.

`pipeline/bookwide_textbook_qc_audit.cjs` enforces the objective counts, navigation cardinality and targets, link resolution, and unique IDs. Static/invariant checks passed, figure markup remained byte-identical, and Jon confirmed all 14 pages at 1440×900 and 390×844 with no overflow, missing images, broken layouts, console errors, or figure changes. Chapter 7 received only its approved narrow objective-markup repair; its full-regeneration pause remains in force.

### Repository-wide figure expansion

The Prologue and Chapters 1–13 were audited. There are 80 explicit expandable figures, two low-resolution Chapter 3 figures marked `.no-expand`, and no active `.wide` figures. Chapters 1, 4, and 8 gained missing figure-expansion script wiring.

Expanded width is capped at 1100px and accounts for the open sidebar and safe gutters; captions remain capped at 716px. `pipeline/figure_expansion_regression.cjs` passes all 14 pages at 1440×900, 1280×800, 1024×768, 390×844, and 844×390. A deployed human spot check remains for one desktop figure with the sidebar open and for phone portrait and landscape.

### Repository-wide Learning Labs

All 20 stateful standalone labs completed the automated state-restoration and restart-access audit. The repaired system preserves within-run prediction commitment, provides one conditional **Start over** action beside prediction after meaningful progress, restores visible saved values, announces genuine restoration once, clears only the lab-specific storage key, and returns focus to prediction.

After integration with the Signal Detection and figure-expansion work, `pipeline/learning_lab_state_regression.cjs` passes all 20 labs at 1440 × 900, 390 × 844, and 844 × 390 for fresh state, commitment, restoration, restart, storage removal, focus, computed visibility, overflow, completion, and no-duplication behavior.

Deployment still requires human spot checks of real-origin sessionStorage, keyboard operation, completed-state restart, and navigation.

### Chapter 4 — Signal Detection

The old outlined target remained visible until response and was pedagogically too obvious. Jon approved a replacement after reviewing isolated mockups: 450 ms fixation, 100 ms exposure, 10% peak contrast, Gaussian sigma 20, generated grayscale noise, and automatic remasking before response.

The lab now uses one canvas rather than a static CSS noise layer plus separate circular target. Responses remain disabled during fixation and exposure. The mask returns before responses enable, and tab loss cancels the unfinished trial without recording it. Trial balance, criterion conditions, outcome logic, event log, session state, explanation, and transfer remain unchanged.

Static checks and JavaScript syntax pass. `pipeline/ch04_signal_detection_mask_regression.cjs` also passes its timed-flash, generated-canvas, response-lockout, automatic-remasking, exact-calibration, balanced-trial, and three-standard-viewport checks after integration.

Weber's Law, Blind-Spot Filling-In, and Context and Ambiguous Perception retain their prior automated pass status. The size–weight illusion placeholder remains a separate build-or-remove decision.

### Completed chapter lanes

Chapters 1–3 and 9–13 have completed their canonical revision/validation cycles. Chapter 8's wired Levels of Processing and Interactive Imagery labs remain approved; Self-Reference Effect remains index-only. Do not reopen these lanes absent a specific defect or Jon's editorial request.

### Paused image lanes

Chapter 7 prose and Classical Conditioning work are complete, but full HTML regeneration remains deferred until its figure set is approved. Figure 7.7 remains unresolved because the current candidate overlaps. Resume only from direct SVG/PNG inspection if Jon explicitly reopens the lane. Chapter 6 flagged figure candidates remain queued while the project stays in a non-image lane.

## Immediate next actions

1. Deploy and spot-check figure expansion: one desktop figure with the sidebar open, plus phone portrait and landscape.
2. Deploy and visually test the approved Signal Detection calibration—a brief uncertain target, automatic remask before response, and both 12-trial conditions complete—and finish the deployed Learning Lab keyboard, real-sessionStorage, completed-restart, and navigation spot checks. Local automation does not close these checks; do not close either lane until all required human verification passes.
3. Keep the Chapter 6 and Chapter 7 image lanes paused unless Jon explicitly changes lanes.

## Important files

- Book-wide QC audit and regression: `pipeline/audits/bookwide-textbook-qc-2026-07-19.md`, `pipeline/bookwide_textbook_qc_audit.cjs`
- Timed-flash audit: `pipeline/audits/ch04-signal-detection-timed-flash-2026-07-18.md`
- Signal Detection implementation: `docs/labs/ch04/signal-detection.html`, `docs/labs/ch04/signal-detection.js`, `docs/labs/ch04/ch04-labs.css`
- Signal Detection regression: `pipeline/ch04_signal_detection_mask_regression.cjs`
- Repository-wide lab audit/regression: `pipeline/audits/learning-lab-state-restoration-audit.md`, `pipeline/learning_lab_state_regression.cjs`
- Shared lab behavior: `docs/js/lab-session-controls.js`, `docs/css/labs.css`, `docs/labs/lab-design-spec.md`
- Durable deferred work: `PROJECT_BACKLOG.md`
- Paused Chapter 7 lane: `pipeline/audits/ch07-image-work-pause-2026-07-17.md`
