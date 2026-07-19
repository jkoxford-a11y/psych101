# Work Order — Chapter 2 Canonical Revision

Revise and finalize **Chapter 2: Research Methods and Statistics** in the canonical `psych101` repository.

This is an implementation pass, not a fresh audit and not a generic rewrite. The editorial decisions are settled in:

- `pipeline/audits/ch02-pre-review-audit.md`

## Start-of-task read order

Read before editing:

1. `AGENTS.md`
2. `HANDOFF.md`
3. `pipeline/audits/ch02-pre-review-audit.md`
4. `pipeline/voice-brief.md`
5. `pipeline/chapter-spec.md`
6. `pipeline/html-conversion-spec.md`
7. `docs/images/psych101_figure_style_guide.md`
8. `docs/labs/lab-design-spec.md`
9. `docs/images/ch02/README_captions_alt_text_attribution.md`
10. `docs/images/ch02/CH02_IMAGE_WIRING_HANDOFF.md`
11. `source/visuals-inventory.md`
12. `source/concept_lineage_revised.csv`
13. `pipeline/claude-work-environment.md` if operating in Claude Work/Cowork

Then inspect the actual source, generated output, figure files, lab, script, and relevant Chapter 2 history in `GPT_project_log.md`.

## Source authority

- **Canonical prose source:** `source/chapters/ch02-research-methods.md`
- **Generated output:** `docs/chapters/02-research-methods.html`
- **Learning Lab:** `docs/labs/ch02/correlation-causation.html`
- **Lab script:** `docs/js/labs-correlation-causation.js`

Edit the canonical source directly. **Do not create a `-2` chapter, comparison draft, parallel replacement, or new canonical filename.** Git history provides the backup.

## Required implementation

Implement every approved revision in `pipeline/audits/ch02-pre-review-audit.md`, with particular attention to the following.

### 1. Calibrate causal inference without weakening the main teaching rule

Preserve the direct rule that a simple correlation cannot establish causation. Replace the repeated absolute claim that only experiments can ever establish causation with a calibrated formulation:

- randomized experiments provide psychology’s clearest ordinary basis for causal inference because researchers manipulate the suspected cause and assign conditions by chance;
- other causal designs can sometimes support causal conclusions, but require additional design features and assumptions.

Keep this proportionate. Do not add a graduate-methods survey of quasi-experimental estimators.

Reconcile all relevant surfaces:

- Research Cycle paragraph;
- methods comparison table;
- experiment section;
- figure captions if needed;
- summary;
- glossary;
- review questions and rationales.

### 2. Recalibrate random sampling, random assignment, internal validity, and external validity

Preserve the distinction students must remember:

- random sampling concerns who enters the study;
- random assignment concerns how enrolled participants enter conditions.

Revise absolute mappings:

- random sampling supports population representativeness and one component of generalizability, not all external validity;
- random assignment balances characteristics in expectation and makes systematic preexisting differences unlikely, not impossible;
- replace “rules out” language with calibrated language;
- retain the point that attrition, contamination, poor measurement, and other design failures can still damage inference.

Inspect Figure 2.5. Retain it unless embedded wording itself contradicts the revised chapter; repair minimally if necessary.

### 3. Modernize reliability and validity framing

Revise the prose and all aligned surfaces so that:

- reliability concerns consistency or precision of observed scores under specified conditions;
- validity concerns whether evidence and theory support the intended interpretation and use of scores;
- inadequate reliability limits strong validity claims;
- the target analogy remains a useful first approximation but does not define psychometric validity;
- the third target condition is not casually labeled “valid but unreliable”; describe observations centered correctly on average but too inconsistent for dependable individual interpretation;
- the hot-sauce discussion does not assume simple test–retest stability is automatically the appropriate reliability criterion for a reactive behavioral task.

Inspect Figure 2.2’s actual embedded labels. Revise the figure only if its visual text contradicts the corrected prose and caption.

### 4. Refactor the Correlation vs. Causation Classifier

Preserve:

- prediction before evidence is revealed;
- commitment before feedback;
- fictional headlines;
- immediate explanatory feedback;
- final transfer task;
- privacy-preserving local storage;
- semantic accessibility.

Replace the mutually exclusive “strongest classification” radio system with separate judgments:

1. Does the study design support the stated causal claim?
2. Could reverse causation remain plausible?
3. Could a third variable remain plausible?
4. What design change or additional evidence would strengthen the inference?

Implementation constraints:

- use accessible independent controls for directionality and third-variable judgments;
- update item data so cases can correctly have neither, either, or both concerns;
- revise feedback, scoring, summary display, and transfer logic;
- do not grade students against an artificial single “best” flaw;
- version the `sessionStorage` key or migrate/reset prior state safely;
- maintain keyboard accessibility, visible focus, logical focus movement, and live-region behavior;
- verify refresh persistence, restart, completion, and mobile layout;
- keep all processing local and collect no identifying data.

### 5. Rebalance the statistics section around estimation

Preserve the p-value misconception figure and the effect-size/confidence-interval figure.

Add one compact table at Psych 101 depth comparing:

- center;
- variability;
- effect magnitude;
- uncertainty.

The table should explain what each quantity tells students and one common mistake. Do not turn this into a formula catalog.

If statistical power remains, define it once in direct student-facing language.

Compress Type I and Type II errors into a short `Do Not Confuse` box or sidebar. Retain the AI comparison only as an explicitly limited analogy if it remains useful after compression. Remove the AI Type I/II review question and replace it with a stronger transfer item about evaluating design, measurement, effect magnitude, or uncertainty.

### 6. Narrow placebo wording

Preserve the Wechsler asthma comparison and placebo-response/placebo-effect distinction.

Revise so that:

- participants **reported improvement** in placebo conditions while objective airway function did not improve;
- placebo effects are effects attributable to treatment context or ritual relative to an appropriate comparison;
- expectation, learning, conditioning, and reporting processes may contribute;
- subjective outcomes are not dismissed as unreal simply because the objective physiological measure did not change.

Align prose, figure caption if needed, summary, glossary, and review material.

### 7. Correct and extend ethics proportionately

Correct the Tuskegee sentence. Do not imply meaningful informed consent existed but merely failed “on paper.” Accurately describe deception, withholding of information and treatment, injustice, and absence of meaningful informed consent at the level needed for this chapter.

Add a compact animal-research ethics paragraph or sidebar that fits the author’s animal behavioral ecology framing. Cover:

- independent oversight;
- replacement, reduction, and refinement;
- why ethical constraint is part of research design rather than an afterthought.

Verify current U.S. oversight language and citations against authoritative sources. Do not turn the chapter into a regulatory manual.

## Must preserve

The following are binding assets, not optional suggestions:

- childhood-books opener;
- Research Cycle;
- animal behavioral ecology fieldwork opening;
- compact methods table;
- shoe-size/reading/age example;
- hot-sauce worked example;
- placebo response versus placebo effect;
- Clever Hans and “confirmation bias with hooves”;
- p-value misconceptions figure;
- effect-size/confidence-interval figure;
- lab’s prediction-before-reveal structure;
- connections table;
- instructor-authored rhythm and direct student address.

Do not replace vivid passages with generic publisher prose. When narrowing an overclaim, preserve or replace its teaching function.

## Figures and metadata

Preserve the current nine-figure sequence unless embedded wording requires repair.

Reconcile:

- source Markdown;
- generated HTML;
- `docs/images/ch02/README_captions_alt_text_attribution.md`;
- `docs/images/ch02/CH02_IMAGE_WIRING_HANDOFF.md`;
- `source/visuals-inventory.md`;
- actual Chapter 2 assets.

Specific cleanup:

- change the stale Research Cycle HTML anchor `evidence-ladder` to a current descriptive ID; preserve compatibility only if navigation depends on the old anchor;
- remove the stale placebo public-sharing blocker after confirming the repaired asset;
- complete browser/mobile checks for figures still marked pending;
- do not embed figure numbers in image files.

## References

Verify all new or materially revised claims and citation metadata using primary or authoritative sources. Prioritize:

- causal inference beyond simple bivariate correlation;
- modern validity/reliability standards;
- placebo response/effect distinctions;
- U.S. human-subject and animal-research oversight;
- current Noba metadata.

Never invent bibliographic details. Narrow weak claims instead of citation-shopping to preserve them. Keep References separate from Further Reading.

## Generated HTML

After source and lab revisions are complete, regenerate:

- `docs/chapters/02-research-methods.html`

Use the canonical source and `pipeline/html-conversion-spec.md`. Do not treat the old HTML as prose authority and do not perform an isolated manual patch when regeneration is available.

Validate actual content, not merely tag presence.

## Editable scope

Primary editable files:

- `source/chapters/ch02-research-methods.md`
- `docs/labs/ch02/correlation-causation.html`
- `docs/js/labs-correlation-causation.js`
- `docs/chapters/02-research-methods.html` through regeneration
- `docs/images/ch02/README_captions_alt_text_attribution.md`
- `docs/images/ch02/CH02_IMAGE_WIRING_HANDOFF.md` if its status is stale
- `source/visuals-inventory.md`
- affected Chapter 2 image assets only if embedded wording requires correction
- `GPT_project_log.md`
- `HANDOFF.md`
- `PROJECT_BACKLOG.md` only for genuinely deferred issues

Do not edit other chapters, shared CSS, shared JavaScript, navigation, site-wide templates, or unrelated project-state entries unless a Chapter 2 validation failure demonstrates a narrowly necessary shared fix. Report such a need before making a broad change.

## Validation gates

Run and report all of the following:

### Prose and alignment

- no remaining absolute claim that only randomized experiments can ever support causation;
- no claim that random assignment guarantees perfectly equivalent groups;
- no claim that random sampling alone creates external validity;
- reliability and validity aligned across objectives, prose, figures, summary, glossary, and questions;
- placebo language aligned across all surfaces;
- Type I/II material proportionate and no longer over-assessed;
- replacement review question is diagnostic and unambiguous;
- chapter retains a visible central argument and remains within an appropriate introductory load.

### Lab

- observational items may correctly contain directionality, third-variable concerns, or both;
- randomized items are scored correctly;
- no stale single-category classification remains in UI, script, feedback, or summary;
- new storage schema does not collide with old saved state;
- commit/reveal/check/next/summary/restart flows work;
- keyboard and focus behavior work;
- no identifying data or network transmission;
- desktop and narrow-mobile layouts remain usable.

### HTML and figures

- source/HTML parity;
- all nine figure paths resolve;
- non-empty alt text;
- no leading-dash alt artifacts;
- no bad `?` separator mojibake;
- current Research Cycle anchor;
- captions, attribution, public-sharing status, and manifest agree;
- Further Reading remains separated from References;
- review answers remain hidden in the expected `<details>/<summary>` structure;
- sidebar, navigation, callouts, and expandable-figure behavior remain intact.

### Diff quality

- inspect the diff for CRLF/LF churn;
- no broad formatting-only rewrite;
- no silent removal of distinctive examples;
- no unrequested edits outside scope.

## Project-state updates

After successful validation:

1. Append a concise dated entry to `GPT_project_log.md` containing scope, files changed, key decisions, validation, and remaining issues.
2. Update `HANDOFF.md` with Chapter 2’s completed/current status and next concrete action without displacing the active Chapters 9–13 work.
3. Add only unresolved durable issues to `PROJECT_BACKLOG.md`; do not duplicate completed details there.

## Completion report

Return:

1. files changed;
2. substantive decisions implemented;
3. figures retained or revised and why;
4. lab behavior changes;
5. references verified or added;
6. validation performed and results;
7. unresolved issues or explicit statement that none remain;
8. commit SHA if committed.

Do not include private chain-of-thought.
