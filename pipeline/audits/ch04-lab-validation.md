# Chapter 4 Learning Lab Validation

**Date:** 2026-07-17; updated 2026-07-18
**Scope:** Functional browser validation and narrow defect repair for the four existing standalone Chapter 4 labs  
**Repository state tested:** `main` after repairs through commit `9972246`, plus the 2026-07-18 Signal Detection mask repair described below

## Status

**The automated functional and responsive validation is complete, including a targeted Signal Detection mask regression check. Chapter 4 remains open pending Jon's retest of the repaired deployed Signal Detection page and completion of the remaining deployed-page checks.**

Signal Detection, Weber’s Law, Blind-Spot Filling-In, and Context-and-Ambiguous-Perception passed the exercised prediction gates, phase transitions, response validation, feedback, event/result recording, focus movement, save/restore logic, restart behavior, privacy/accessibility wording, and page-level responsive-layout checks at:

- 1440 × 900
- 390 × 844
- 844 × 390

No chapter prose, generated chapter HTML, figures, shared CSS, shared navigation JavaScript, or lab wiring changed.

## Browser-test method and limitation

The current repository HTML, lab-specific JavaScript, and relevant CSS were exercised in Chromium 144 using a source-accurate browser harness. The container’s managed Chromium policy blocks both `file:` and loopback/local web origins. The pages therefore had to be injected into a persistent Chromium document rather than loaded from the deployed GitHub Pages origin.

Because opaque injected documents cannot access native `sessionStorage`, the harness supplied an API-compatible in-memory `sessionStorage` object and then replaced the full document to exercise serialization, restoration, completion reload, and reset behavior. This verifies the application’s save/restore contract but does not replace one final deployed-origin spot check in Jon’s browser.

Programmatic focus movement and native control semantics were verified. A human Tab/Shift+Tab and Enter/Space pass remains required before the accessibility item is fully closed.

The initial automated Signal Detection run verified the mask's `hidden` DOM property and the enabled/disabled response controls, but it did not inspect the mask's computed `display` value or hit-test the stimulus layers. A deployed-page human check on 2026-07-18 therefore found a real false negative: after “Show next trial,” the mask retained computed `display: grid` and continued covering the noise field even though JavaScript had set `hidden = true`.

The added regression check, `pipeline/ch04_signal_detection_mask_regression.cjs`, loads the actual lab and styles in installed Chrome and verifies computed visibility and exposure through hit-testing at 1440 × 900, 390 × 844, and 844 × 390. It checks the mask before a trial, the exposed noise field after “Show next trial,” present-versus-absent target rendering, mask restoration after every response, and completion of both 12-trial conditions. The check failed on the unfixed CSS with computed mask display `grid`, then passed at all three sizes after the repair.

## Test matrix

| Lab | Functional completion | Save/restore | Reset | Focus/error handling | Responsive overflow | Status |
|---|---|---|---|---|---|---|
| Signal Detection | 24 trials across both criterion conditions; outcome counts, event log, computed mask visibility, and stimulus exposure verified | Completed state restored; active trial cleared safely | Prediction, storage, feedback, textareas, and statuses reset | Prediction, explanation, and transfer gates verified | None at all three sizes | Pass after repair; deployed retest pending |
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

### 5. Signal Detection — hidden mask still rendered over active trials

The deployed-page human check found that “Show next trial” enabled the response buttons but left the white mask and its button visible over the dark noise field. JavaScript correctly set `stimulus-mask.hidden = true`; however, `.stimulus-mask { display: grid; }` overrode the browser's user-agent `[hidden] { display: none; }` rule.

Repair:

- add the narrowly scoped `.stimulus-mask[hidden] { display: none !important; }` rule;
- add a browser regression check based on computed display and hit-testing rather than DOM state alone;
- preserve all trial logic, target frequency, target strength, and lab prose.

## Pedagogical and accessibility review

- Signal Detection correctly distinguishes criterion shifts from sensitivity changes and warns that the activity is not a calibrated sensory test.
- Weber’s Law uses line length rather than pretending that screen graphics reproduce lifted-weight psychophysics. It distinguishes absolute change from proportional change and explicitly separates absolute threshold, difference threshold, and Weber’s Law.
- Blind-Spot Filling-In states that the optic disc supplies no receptor signal and that filling-in is a plausible contextual continuation, not recovery of ground truth.
- Context and Ambiguous Perception uses physically identical central glyphs and explicitly limits the inference: context biases ambiguous input; it does not make any stimulus look like anything.
- The two inherently visual demonstrations disclose that no nonvisual activity reproduces the same personal sensory experience while preserving conceptual access through instructions and explanatory text.
- All four labs state that responses remain in session-only browser storage and are not transmitted.

## Remaining closure step

After the repair is deployed, Jon must first retest Signal Detection and confirm that:

1. the white mask and “Show next trial” button are visible before each trial;
2. selecting “Show next trial” removes both from view and exposes the dark noise field;
3. some trials visibly contain the faint circular target and some do not;
4. either response restores the white mask for the next trial;
5. both 12-trial conditions can still be completed.

Then complete any remaining deployed-page closure checks:

1. use Tab and Shift+Tab through every interactive control;
2. activate radios, sliders, and buttons with native keyboard controls;
3. confirm visible focus is never lost after phase transitions;
4. complete, reload, and restart one lab with real browser `sessionStorage`;
5. verify the sidebar and “Back to Chapter 4 labs” navigation paths.

The size–weight illusion placeholder remains a separate build-or-remove decision and was not part of this validation scope.
