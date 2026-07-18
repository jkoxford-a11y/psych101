# Psych101 — Current Handoff

**Last updated:** 2026-07-18 (repository-wide Learning Lab restoration audit automated checks pass; deployed human spot checks remain)
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, `pipeline/audits/learning-lab-state-restoration-audit.md` for the current lab audit, and `pipeline/audits/ch07-image-work-pause-2026-07-17.md` for the paused Chapter 7 image lane.

## Current state

### Repository-wide Learning Labs

All 20 stateful standalone labs have completed the automated state-restoration and restart-access audit. Sixteen previously exposed restart only inside a completion-only panel; three Chapter 4 labs restored frozen radio controls without visibly selecting the saved value; five labs cleared restart state without returning focus to prediction.

The repaired system preserves within-run prediction commitment and provides one conditional **Start over** action beside prediction after meaningful progress. Restored sessions announce once that browser-tab progress was resumed. Start over clears the lab-specific storage key and transient UI, returns focus to prediction, and remains discarded after reload. Lab-wide computed `[hidden]` behavior is now protected, and the narrower Signal Detection mask rule remains intact.

`pipeline/learning_lab_state_regression.cjs` passes all 20 labs at 1440 × 900, 390 × 844, and 844 × 390 for fresh state, validation, commitment, visible/frozen saved values, immediate and middle-phase reload, coherent active phase, resumed message, keyboard restart, storage removal, focus, fresh reload, computed visibility/hit testing, overflow, and console behavior. Every lab also completes through its real UI at desktop and passes completed-state reload/no-duplication/restart checks. The durable evidence and exact human checks are in `pipeline/audits/learning-lab-state-restoration-audit.md`.

Deployment remains the only closure step: Jon must spot-check real deployed-origin sessionStorage and keyboard operation, navigation, and the Signal Detection mask/target sequence. Do not mark the deployed human item complete from local automation alone.

### Completed chapter lanes

Chapters 1–3 and 9–13 have completed their canonical revision/validation cycles. Chapter 8's wired Levels of Processing and Interactive Imagery labs remain approved; Self-Reference Effect remains index-only. Do not reopen these lanes absent a specific defect or Jon's editorial request. The two Chapter 3 labs now pass the repository-wide automated state audit, but their requested deployed human end-to-end spot check remains useful.

### Chapter 4

Signal Detection, Weber's Law, Blind-Spot Filling-In, and Context and Ambiguous Perception pass automated functional, responsive, state, and restart tests. Signal Detection's computed mask and hit-testing regression again covers all 24 trials at all three viewports. Chapter 4 remains open only for deployed human verification and the separate size–weight illusion build-or-remove decision.

### Paused image lanes

Chapter 7 prose and Classical Conditioning work are complete, but full HTML regeneration remains deferred until its figure set is approved. Figure 7.7 remains unresolved because the current candidate overlaps. Resume only from direct SVG/PNG inspection if Jon explicitly reopens the lane. Chapter 6 flagged figure candidates remain queued while the project stays in a non-image lane.

## Immediate next actions

1. Deploy this commit and perform the six exact human checks in `pipeline/audits/learning-lab-state-restoration-audit.md`, including the Signal Detection mask/target sequence.
2. Record the deployed keyboard, real-sessionStorage, completed-restart, and navigation results; then close the overlapping Chapter 4 audit item if all pass.
3. Keep Chapter 7 and Chapter 6 image work paused unless Jon explicitly changes lanes.
4. Do not reopen completed chapter/editorial work without a concrete regression or request.

## Important files

- Repository-wide lab audit: `pipeline/audits/learning-lab-state-restoration-audit.md`
- Reusable state regression: `pipeline/learning_lab_state_regression.cjs`
- Shared lab behavior: `docs/js/lab-session-controls.js`, `docs/css/labs.css`, `docs/labs/lab-design-spec.md`
- Signal Detection regression: `pipeline/ch04_signal_detection_mask_regression.cjs`, `pipeline/audits/ch04-lab-validation.md`
- Durable deferred work: `PROJECT_BACKLOG.md`
- Paused Chapter 7 lane: `pipeline/audits/ch07-image-work-pause-2026-07-17.md`
