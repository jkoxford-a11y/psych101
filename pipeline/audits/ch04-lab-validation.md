# Chapter 4 Learning Lab Validation

**Date:** 2026-07-17  
**Scope:** Functional browser validation and narrow defect repair for the four existing standalone Chapter 4 labs  
**Repository state tested:** `main` after repairs through commit `9972246`

## Status

**Automated functional and responsive validation is complete. Human keyboard-only testing on the deployed pages remains pending.**

Signal Detection, Weber’s Law, Blind-Spot Filling-In, and Context-and-Ambiguous-Perception passed the exercised prediction gates, phase transitions, response validation, feedback, event/result recording, focus movement, save/restore logic, restart behavior, privacy/accessibility wording, and page-level responsive-layout checks at:

- 1440 × 900
- 390 × 844
- 844 × 390

No chapter prose, generated chapter HTML, figures, shared CSS, shared navigation JavaScript, or lab wiring changed.

## Browser-test method and limitation

The current repository HTML, lab-specific JavaScript, and relevant CSS were exercised in Chromium 144 using a source-accurate browser harness. The container’s managed Chromium policy blocks both `file:` and loopback/local web origins. The pages therefore had to be injected into a persistent Chromium document rather than loaded from the deployed GitHub Pages origin.

Because opaque injected documents cannot access native `sessionStorage`, the harness supplied an API-compatible in-memory `sessionStorage` object and then replaced the full document to exercise serialization, restoration, completion reload, and reset behavior. This verifies the application’s save/restore contract but does not replace one final deployed-origin spot check in Jon’s browser.

Programmatic focus movement and native control semantics were verified. A human Tab/Shift+Tab and Enter/Space pass remains required before the accessibility item is fully closed.

## Test matrix

| Lab | Functional completion | Save/restore | Reset | Focus/error handling | Responsive overflow | Status |
|---|---|---|---|---|---|---|
| Signal Detection | 24 trials across both criterion conditions; outcome counts and event log verified | Completed state restored; active trial cleared safely | Prediction, storage, feedback, textareas, and statuses reset | Prediction, explanation, and transfer gates verified | None at all three sizes | Pass after repair |
| Weber’s Law | Four line comparisons; absolute and proportional values recorded | Predictions, completed state, and transfer restored | Form, storage, textareas, and statuses reset | Both prediction groups, explanation, and transfer gates verified | None; 216-pixel line remained inside comparison card | Pass after repair |
| Blind-Spot Filling-In | Target, mirrored-eye, pattern observation, explanation, and transfer phases verified | State serialization exercised | Mirror, form, statuses, and textareas reset | Prediction, observation, explanation, and transfer gates verified | None; boards remained inside viewport | Pass after repair |
| Context and Ambiguous Perception | Letter and number contexts, identical glyph reveal, explanation, and transfer verified | Two answers and completed responses serialized | Form, textareas, and statuses reset | Prediction, interpretation, explanation, and transfer gates verified | None; comparison cards stacked correctly in portrait | Pass after repair |

## Defects found and repaired

### 1. Signal Detection — stale explanation and restart state

A failed empty explanation remained visible after a valid explanation was saved. Restart also retained old trial feedback, textareas, completion text, and status messages in hidden controls.

Repair:

- add a success status after a valid explanation;
- clear trial feedback, signal visibility, textareas, status messages, concept text, and completion summary on restart.

Implementation commit: `b3bd50e`

### 2. Weber’s Law — missing-prediction error and stale state

When the first prediction group was answered but the second was blank, the focus expression attempted to call `.focus()` on `null`. The visible error message appeared, but JavaScript threw instead of moving focus to the unanswered group. Explanation errors also remained after success, and restart retained transient response content.

Repair:

- explicitly focus the first unanswered radio group;
- add an explanation-saved status;
- clear trial feedback, textareas, statuses, and completion text on restart.

Implementation commit: `fcae14d`

### 3. Blind-Spot Filling-In — double mirroring and stale state

The mirrored-eye layout reversed the target coordinate and then flipped the board with `scaleX(-1)`. Those two operations partially canceled each other. At the default slider position, the standard fixation-to-target separation was approximately +50% of board width, while the mirrored separation was only about −26% instead of the required −50%.

Repair:

- keep the slider coordinate unchanged and mirror only the board;
- update target and pattern-board `aria-label` text for left-eye versus right-eye orientation;
- update the mirror button label to describe the available action;
- clear observation/explanation errors after success;
- clear mirror-dependent and transient state on restart.

Retesting produced equal and opposite fixation-to-target distances at all three viewport sizes.

Implementation commit: `b828153`

### 4. Context and Ambiguous Perception — stale explanation and restart state

A failed explanation remained visible after a valid explanation, and restart retained prior completion/status text and textarea values in hidden controls.

Repair:

- add an explanation-saved status;
- clear trial, explanation, and transfer statuses, textareas, and completion text on restart.

Implementation commit: `9972246`

## Pedagogical and accessibility review

- Signal Detection correctly distinguishes criterion shifts from sensitivity changes and warns that the activity is not a calibrated sensory test.
- Weber’s Law uses line length rather than pretending that screen graphics reproduce lifted-weight psychophysics. It distinguishes absolute change from proportional change and explicitly separates absolute threshold, difference threshold, and Weber’s Law.
- Blind-Spot Filling-In states that the optic disc supplies no receptor signal and that filling-in is a plausible contextual continuation, not recovery of ground truth.
- Context and Ambiguous Perception uses physically identical central glyphs and explicitly limits the inference: context biases ambiguous input; it does not make any stimulus look like anything.
- The two inherently visual demonstrations disclose that no nonvisual activity reproduces the same personal sensory experience while preserving conceptual access through instructions and explanatory text.
- All four labs state that responses remain in session-only browser storage and are not transmitted.

## Remaining closure step

On the deployed pages, complete one human keyboard-only pass through each lab:

1. use Tab and Shift+Tab through every interactive control;
2. activate radios, sliders, and buttons with native keyboard controls;
3. confirm visible focus is never lost after phase transitions;
4. complete, reload, and restart one lab with real browser `sessionStorage`;
5. verify the sidebar and “Back to Chapter 4 labs” navigation paths.

The size–weight illusion placeholder remains a separate build-or-remove decision and was not part of this validation scope.
