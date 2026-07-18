# Psych101 — Current Handoff

**Last updated:** 2026-07-18 (Signal Detection timed-flash revision implemented; browser regression and deployed human checks remain)
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, `pipeline/audits/learning-lab-state-restoration-audit.md` for the repository-wide lab audit, `pipeline/audits/ch04-signal-detection-timed-flash-2026-07-18.md` for the current Signal Detection revision, and `pipeline/audits/ch07-image-work-pause-2026-07-17.md` for the paused Chapter 7 image lane.

## Current state

### Repository-wide Learning Labs

All 20 stateful standalone labs completed the automated state-restoration and restart-access audit. The repaired system preserves within-run prediction commitment, provides one conditional **Start over** action beside prediction after meaningful progress, restores visible saved values, announces genuine restoration once, clears only the lab-specific storage key, and returns focus to prediction.

`pipeline/learning_lab_state_regression.cjs` previously passed all 20 labs at 1440 × 900, 390 × 844, and 844 × 390 for fresh state, commitment, restoration, restart, storage removal, focus, computed visibility, overflow, completion, and no-duplication behavior. The Signal Detection revision changes only that lab's stimulus presentation, but the repository-wide regression should be rerun before closure.

Deployment still requires human spot checks of real-origin sessionStorage, keyboard operation, completed-state restart, and navigation.

### Chapter 4 — Signal Detection

The old outlined target remained visible until response and was pedagogically too obvious. Jon approved a replacement after reviewing isolated mockups: 450 ms fixation, 100 ms exposure, 10% peak contrast, Gaussian sigma 20, generated grayscale noise, and automatic remasking before response.

The lab now uses one canvas rather than a static CSS noise layer plus separate circular target. Responses remain disabled during fixation and exposure. The mask returns before responses enable, and tab loss cancels the unfinished trial without recording it. Trial balance, criterion conditions, outcome logic, event log, session state, explanation, and transfer remain unchanged.

Static checks and JavaScript syntax pass. `pipeline/ch04_signal_detection_mask_regression.cjs` was rewritten to test the timed flash, generated canvas, response lockout, automatic remasking, exact calibration, balanced trials, and all three standard viewport sizes. That Playwright regression has not yet been executed in the current ChatGPT environment and must not be marked passed from static inspection alone.

Weber's Law, Blind-Spot Filling-In, and Context and Ambiguous Perception retain their prior automated pass status. The size–weight illusion placeholder remains a separate build-or-remove decision.

### Completed chapter lanes

Chapters 1–3 and 9–13 have completed their canonical revision/validation cycles. Chapter 8's wired Levels of Processing and Interactive Imagery labs remain approved; Self-Reference Effect remains index-only. Do not reopen these lanes absent a specific defect or Jon's editorial request.

### Paused image lanes

Chapter 7 prose and Classical Conditioning work are complete, but full HTML regeneration remains deferred until its figure set is approved. Figure 7.7 remains unresolved because the current candidate overlaps. Resume only from direct SVG/PNG inspection if Jon explicitly reopens the lane. Chapter 6 flagged figure candidates remain queued while the project stays in a non-image lane.

## Immediate next actions

1. Run `node pipeline/ch04_signal_detection_mask_regression.cjs` in the canonical repository and repair any failure before deployment.
2. Rerun `pipeline/learning_lab_state_regression.cjs` to confirm the shared restoration/restart system still passes.
3. Deploy and visually test the approved Signal Detection calibration: brief uncertain target, automatic remask before response, and both 12-trial conditions complete.
4. Finish the deployed keyboard, real-sessionStorage, completed-restart, and navigation spot checks; then close the overlapping Chapter 4 and repository-wide lab audit items if all pass.
5. Keep Chapter 7 and Chapter 6 image work paused unless Jon explicitly changes lanes.

## Important files

- Timed-flash audit: `pipeline/audits/ch04-signal-detection-timed-flash-2026-07-18.md`
- Signal Detection implementation: `docs/labs/ch04/signal-detection.html`, `docs/labs/ch04/signal-detection.js`, `docs/labs/ch04/ch04-labs.css`
- Signal Detection regression: `pipeline/ch04_signal_detection_mask_regression.cjs`
- Repository-wide lab audit/regression: `pipeline/audits/learning-lab-state-restoration-audit.md`, `pipeline/learning_lab_state_regression.cjs`
- Shared lab behavior: `docs/js/lab-session-controls.js`, `docs/css/labs.css`, `docs/labs/lab-design-spec.md`
- Durable deferred work: `PROJECT_BACKLOG.md`
- Paused Chapter 7 lane: `pipeline/audits/ch07-image-work-pause-2026-07-17.md`
