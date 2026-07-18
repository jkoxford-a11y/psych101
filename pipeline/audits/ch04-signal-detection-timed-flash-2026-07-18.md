# Chapter 4 Signal Detection Timed-Flash Revision

**Date:** 2026-07-18  
**Branch:** `agent/signal-detection-timed-flash`  
**Status:** Implementation and static validation complete; the updated Playwright regression and deployed human visual check remain to be run before closure.

## Reason for revision

The repaired production lab correctly uncovered the visual field, but the target remained visible until the student responded. That allowed deliberate visual search and made target-present trials obvious. The activity is intended to teach decisions under uncertain sensory evidence, so the stimulus must disappear before the response is made.

A sequence of isolated browser mockups was reviewed by Jon. The approved calibration is:

- 450 ms fixation interval;
- 100 ms stimulus exposure;
- 10% peak luminance contrast;
- Gaussian target with sigma 20 on a 760 × 404 generated-noise canvas;
- six target-present and six target-absent trials in each condition;
- no student-facing practice mode;
- automatic remasking before response controls become available.

## Implementation

- Replaced the old static CSS noise layer and separately outlined circular target with one generated grayscale canvas.
- Embedded the target as a Gaussian luminance increment inside a newly generated noise frame rather than rendering a separate target object.
- Added explicit fixation, exposure, response, and idle phases.
- Kept both response buttons disabled during fixation and exposure; they become available only after the mask returns.
- Added tab-visibility cancellation so an interrupted trial is discarded without recording a response.
- Preserved the two criterion conditions, balanced trial blocks, outcome classification, event log, session-only state, explanation, transfer, and restart behavior.
- Added student-facing wording that the field flashes for 100 ms and a caveat that browser timing and monitor properties prevent psychophysical calibration.

## Regression revision

`pipeline/ch04_signal_detection_mask_regression.cjs` now checks at desktop, portrait-mobile, and landscape-mobile sizes that:

- the approved 450 ms / 100 ms / 10% / sigma-20 parameters are present;
- the old `.noise-field` and `#signal-target` elements are absent;
- the generated canvas contains luminance variation;
- the mask remains visible during fixation;
- responses remain disabled during fixation and exposure;
- the canvas is exposed only during the brief flash;
- the mask returns automatically before responses enable;
- all 24 trials complete with 12 signal-present and 12 signal-absent trials total;
- both criterion conditions and the event log remain intact.

## Validation completed here

- `node --check docs/labs/ch04/signal-detection.js`
- `node --check pipeline/ch04_signal_detection_mask_regression.cjs`
- unique HTML IDs;
- exact approved data attributes;
- no old outlined-target or static-noise elements/selectors;
- required canvas, mask-message, and timing markup;
- no trailing-whitespace defects in the changed HTML, JavaScript, or CSS.

The current ChatGPT execution environment does not contain the repository's Playwright dependency, and its managed Chromium could not complete a local-origin interaction run. Do not record the browser regression as passed from static validation alone.

## Remaining checks

1. Run `node pipeline/ch04_signal_detection_mask_regression.cjs` in the canonical repository environment.
2. Run the repository-wide Learning Lab state regression to confirm the shared Start over/restoration work remains intact.
3. After deployment, visually confirm that the approved target is uncertain but detectable, the flash disappears before response, and both conditions complete.
4. Complete the remaining deployed keyboard, real-sessionStorage, and navigation spot checks already recorded in the broader Learning Lab audits.
