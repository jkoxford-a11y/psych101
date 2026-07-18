# Repository-Wide Learning Lab State-Restoration Audit

**Date:** 2026-07-18

**Scope:** All 20 standalone stateful Learning Labs under `docs/labs/`
**Status:** Automated source, functional, restoration, completion, restart, keyboard-activation, computed-visibility, and responsive checks pass; deployed human spot checks remain

## Outcome

The audit inventoried 20 stateful standalone labs. Sixteen had a saved-state or restart-access defect before this repair: their only restart control was inside the completion-only transfer panel. Three of those sixteen (Signal Detection, Weber's Law, and Context and Ambiguous Perception) also froze restored prediction radios without visibly re-checking the saved value. Five (Classical Conditioning, Interactive Imagery, Levels of Processing, Self-Reference Effect, and Fluid Intelligence Rule Finding) cleared state but did not return focus to the prediction phase after restart.

The four newer labs in Chapters 10–13 already exposed reset before completion and restored their committed values coherently. They were normalized to the same conditional interface but were not counted as defective.

The adopted interface preserves prediction commitment. A committed prediction remains selected and frozen within the run. Once meaningful progress exists, one secondary **Start over** control appears beside the prediction phase. On a genuine restoration, the page states, “Resumed progress from this browser-tab session.” Starting over invokes each lab's existing lab-specific reset routine, clears the storage key and transient UI, returns focus to prediction, and hides itself again.

## Complete inventory

| Lab HTML | JavaScript | Storage key | Prediction/commit | Pre-repair visible restored value | Pre-repair coherent phase | Pre-repair restart before completion | Pre-repair restart clearing | Post-repair |
|---|---|---|---|---|---|---|---|---|
| `docs/labs/ch02/correlation-causation.html` | `docs/js/labs-correlation-causation.js` | `psych101-lab-ch02-correlation-causation-v3` | Yes | Pass | Pass | **Fail: completion only** | Pass | Pass |
| `docs/labs/ch03/action-potential-threshold.html` | `docs/js/labs-action-potential-threshold.js` | `psych101-lab-ch03-action-potential-threshold` | Yes | Pass | Pass | **Fail: completion only** | Pass | Pass |
| `docs/labs/ch03/chemical-imbalance-claim-check.html` | `docs/js/labs-chemical-imbalance-claim-check.js` | `psych101-lab-ch03-chemical-imbalance-claim-check` | Yes | Pass | Pass | **Fail: completion only** | Pass | Pass |
| `docs/labs/ch03/dopamine-prediction-error.html` | `docs/js/labs-dopamine-prediction-error.js` | `psych101-lab-ch03-dopamine-prediction-error` | Yes | Pass | Pass | **Fail: completion only** | Pass | Pass |
| `docs/labs/ch04/blind-spot-filling-in.html` | `docs/labs/ch04/blind-spot-filling-in.js` | `psych101-ch04-blind-spot` | Yes | Pass after `b05c75a` | Pass | **Fail: completion only** | Pass | Pass |
| `docs/labs/ch04/context-and-ambiguous-perception.html` | `docs/labs/ch04/context-and-ambiguous-perception.js` | `psych101-ch04-context` | Yes | **Fail: radio not checked** | Pass | **Fail: completion only** | Pass | Pass |
| `docs/labs/ch04/signal-detection.html` | `docs/labs/ch04/signal-detection.js` | `psych101-ch04-signal-detection` | Yes | **Fail: radio not checked** | Pass; active stimulus resets safely | **Fail: completion only** | Pass | Pass |
| `docs/labs/ch04/webers-law.html` | `docs/labs/ch04/webers-law.js` | `psych101-ch04-webers-law` | Yes, two groups | **Fail: radios not checked** | Pass | **Fail: completion only** | Pass | Pass |
| `docs/labs/ch05/consciousness-evidence-claim-check.html` | `docs/js/labs-consciousness-evidence-claim-check.js` | `psych101-lab-ch05-consciousness-evidence-claim-check-v1` | Yes | Pass | Pass | **Fail: completion only** | Pass | Pass |
| `docs/labs/ch06/process-s-process-c.html` | `docs/js/labs-process-s-process-c.js` | `psych101-lab-ch06-process-s-process-c-v1` | Yes | Pass | Pass | **Fail: completion only** | Pass | Pass |
| `docs/labs/ch06/sleep-state-detective.html` | `docs/js/labs-sleep-state-detective.js` | `psych101-lab-ch06-sleep-state-detective-v1` | Yes | Pass | Pass | **Fail: completion only** | Pass | Pass |
| `docs/labs/ch07/classical-conditioning.html` | `docs/js/labs-classical-conditioning.js` | `psych101-lab-ch07-classical-conditioning-v2` | Yes, two text fields | Pass | Pass | **Fail: completion only** | **Focus defect** | Pass |
| `docs/labs/ch08/interactive-imagery.html` | `docs/js/labs-interactive-imagery.js` | `psych101-lab-ch08-interactive-imagery-v1` | Yes | Pass | Pass | **Fail: completion only** | **Focus defect** | Pass |
| `docs/labs/ch08/levels-of-processing.html` | `docs/js/labs-levels-of-processing.js` | `psych101-lab-ch08-levels-of-processing-v1` | Yes | Pass | Pass | **Fail: completion only** | **Focus defect** | Pass |
| `docs/labs/ch08/self-reference-effect.html` | `docs/js/labs-self-reference-effect.js` | `psych101-lab-ch08-self-reference-effect-v1` | Yes | Pass | Pass | **Fail: completion only** | **Focus defect** | Pass |
| `docs/labs/ch09/fluid-intelligence-rule-finding.html` | `docs/js/labs-fluid-intelligence-rule-finding.js` | `psych101-lab-ch09-fluid-intelligence-rule-finding` | Yes, two text fields | Pass | Pass | **Fail: completion only** | **Focus defect** | Pass |
| `docs/labs/ch10/zpd-fading-support.html` | `docs/js/labs-zpd-fading-support.js` | `psych101_ch10_zpd_fading_support_v1` | Yes | Pass | Pass | Pass | Pass | Pass; normalized |
| `docs/labs/ch11/change-the-situation.html` | `docs/js/labs-change-the-situation.js` | `psych101_ch11_change_situation_v1` | Yes | Pass | Pass | Pass | Pass | Pass; normalized |
| `docs/labs/ch12/coping-fit.html` | `docs/js/labs-coping-fit.js` | `psych101-ch12-coping-fit-v1` | Yes | Pass | Pass | Pass | Pass | Pass; normalized |
| `docs/labs/ch13/diagnosis-under-uncertainty.html` | `docs/js/labs-diagnosis-under-uncertainty.js` | `psych101-ch13-diagnosis-uncertainty-v1` | Yes | Pass | Pass | Pass | Pass | Pass; normalized |

Static Chapter 4 demonstration pages (`sensation-perception-demos.html` and `heider-simmel/`) do not save Learning Lab progress and showed no directly related defect, so they were not modified.

## Defects and repairs

1. **Restart inaccessible in 16 unfinished sessions.** Added `docs/js/lab-session-controls.js`, declared each lab's existing storage key on its `<body>`, and moved the single existing restart/reset button beside the prediction phase at runtime. It is hidden on a fresh run and visible after commitment or restoration; no duplicate restart button remains in the transfer panel.
2. **Restoration was not communicated.** The shared controller announces restoration once during initialization only when the lab-specific storage key survived validation. Ordinary renders and fresh runs do not show the message.
3. **Three restored Chapter 4 predictions were visually blank.** Their renderers now set `checked` from the state object before disabling the radio controls. Blind-Spot's earlier `b05c75a` repair remains intact.
4. **Five restart paths stranded focus.** Their lab-specific restart routines now focus the first prediction control after rendering the fresh phase.
5. **Author CSS could override hidden state.** `docs/css/labs.css` now gives lab-wide `[hidden]` a computed `display: none !important`. The narrower `.stimulus-mask[hidden]` Signal Detection repair remains in `docs/labs/ch04/ch04-labs.css` and was not removed.

## Files changed

- All 20 stateful lab HTML files: storage-key declaration and shared session-control script include.
- Shared implementation: `docs/js/lab-session-controls.js`, `docs/css/labs.css`.
- Visible-value repairs: the three Chapter 4 scripts for Signal Detection, Weber's Law, and Context and Ambiguous Perception.
- Focus repairs: `docs/js/labs-classical-conditioning.js`, `docs/js/labs-interactive-imagery.js`, `docs/js/labs-levels-of-processing.js`, `docs/js/labs-self-reference-effect.js`, and `docs/js/labs-fluid-intelligence-rule-finding.js`.
- Regression and documentation: `pipeline/learning_lab_state_regression.cjs`, this audit, `docs/labs/lab-design-spec.md`, `GPT_project_log.md`, `HANDOFF.md`, and the narrowed lab item in `PROJECT_BACKLOG.md`.

No chapter source, generated chapter HTML, figure, image metadata, Chapter 7 figure work, Chapter 6 figure candidate, or unrelated navigation code changed.

## Automated validation matrix

`pipeline/learning_lab_state_regression.cjs` serves the repository files over a temporary loopback origin and runs installed Chrome. Every lab passed the following at 1440 × 900, 390 × 844, and 844 × 390:

- fresh load and missing-prediction validation;
- prediction commitment, visible value, frozen controls, and reachable single start-over action;
- immediate reload with one resumed-session announcement and coherent active phase;
- one middle-phase action followed by reload, safe restored controls, and nondecreasing event history;
- computed `display: none`, zero layout boxes, and hit-test exclusion for every `[hidden]` element;
- keyboard Enter activation of start-over, removed storage key, cleared/enabled prediction state, expected focus movement, and fresh reload;
- no page-level horizontal overflow or console/page errors.

At desktop, every lab also completed through its real UI. Completed results/transfer/summary state then reloaded without duplicated event-log or summary content, and mouse-activated start-over again returned a fresh reload-safe state. The script also asserts all 20 storage keys are unique.

The dedicated `pipeline/ch04_signal_detection_mask_regression.cjs` separately runs all 24 Signal Detection trials at all three viewports. It checks computed mask display, noise-field and target hit testing, present/absent target behavior, mask restoration after every response, and both completed 12-trial conditions.

Static validation covers JavaScript syntax for every changed script, HTML ID uniqueness, `aria-labelledby` target resolution, storage-key declaration/source alignment and uniqueness, mojibake separator checks, repository linting, and `git diff --check`.

## Known limitations and deployed human checks

The automated suite uses a local origin in installed Chrome. An in-app-browser spot check independently exercised fresh commitment, reload restoration, the resumed message, visible selected radio, active phase, start-over, computed visibility, and focus on Signal Detection. The in-app controller could not reliably synthesize native Enter activation; installed Chrome did, but a final deployed human keyboard pass remains appropriate.

After deployment, Jon should:

1. hard-refresh one older lab that formerly hid restart (Dopamine Prediction Error) and one newer lab (Diagnosis Under Uncertainty); commit, reload in the same tab, confirm the visible saved prediction, one resumed-session message, correct phase, and one visible **Start over** button;
2. activate **Start over** with keyboard Enter or Space, confirm focus returns to prediction, then reload and confirm the discarded run does not return;
3. use Tab and Shift+Tab through the relocated control at desktop, portrait-mobile, and landscape-mobile widths and confirm visible focus and no obscured control;
4. complete and reload one lab using real deployed-origin `sessionStorage`, then start over from the completed state and confirm no duplicated log, summary, or transfer content;
5. retest deployed Signal Detection: the white mask/button cover the field before each trial, **Show next trial** exposes the dark noise field, present trials show the faint target while absent trials do not, either answer restores the mask, and both 12-trial conditions complete;
6. confirm the sidebar, Learning Labs index, and chapter-lab return links still navigate correctly.

Do not close the deployed human-check item solely from this local audit.
