# Chapter 2 Pre-Review Audit — Research Methods and Statistics

**Audit date:** 2026-07-15  
**Status:** **Implemented and validated** in canonical revision commit `947a05d6bf0aec079e04d906d9e201143cb8acd2`. No further Chapter 2 editorial action is required; optional unused-image cleanup remains in `PROJECT_BACKLOG.md`.  
**Audit framework:** `pipeline/audits/chapter-pre-review-audit-prompt-v3.md`

## Repository authority and current state

- **Canonical prose source:** `source/chapters/ch02-research-methods.md`
- **Generated output:** `docs/chapters/02-research-methods.html`
- **Chapter figure manifest:** `docs/images/ch02/README_captions_alt_text_attribution.md`
- **Learning Lab:** `docs/labs/ch02/correlation-causation.html`
- **Lab script:** `docs/js/labs-correlation-causation.js`
- The source and regenerated HTML are aligned, and all nine figures were reconciled during the canonical revision.
- The Research Cycle uses the current descriptive HTML anchor.
- The resolved placebo citation repair and public-sharing status are reconciled in the figure manifest.
- No earlier `ch02-pre-review-audit.md` was present on `main`; this file restored the missing durable audit record and now records implementation status.

## Core argument

Psychological conclusions are only as strong as the match among the question, operational definition, measurement, design, analysis, and replication. Different methods answer different questions, and causal, descriptive, and correlational claims must not be treated as interchangeable. The chapter’s Observe → Define → Relate → Test → Estimate → Replicate → Revise cycle gives these ideas a coherent explanatory structure rather than presenting research methods as a catalog.

## Two-week memory test

Students should retain these usable ideas:

1. Different methods answer different questions.
2. Correlation identifies association, not the causal explanation.
3. Constructs must be operationalized, and observed scores require both consistency and evidence supporting their intended interpretation.
4. Random sampling and random assignment solve different problems.
5. Randomization supports causal inference but does not repair every possible design failure.
6. A p-value is not the probability that a hypothesis is true and does not indicate practical importance.
7. Effect size and uncertainty matter in addition to statistical significance.
8. Scientific confidence grows through replication and converging evidence, not one impressive study.

## Must-preserve ledger

| Asset | Instructional role | What must survive |
|---|---|---|
| Childhood books misconception opener | Narrative hook and worked causal-inference example | Preserve the nuanced refusal of both the causal headline and the easy debunking. |
| Research cycle | Organizing model | Preserve the cycle rather than returning to an evidence ladder or method hierarchy. |
| Animal behavioral ecology fieldwork opening | Narrative hook and authorial identity | Preserve the direct first-person bridge and the value of observing without manipulating. |
| Method-comparison table | Retrieval and comparison | Preserve the compact comparison, but recalibrate the causation column. |
| Shoe size, reading, and age | Mnemonic illustration | Preserve as the chapter’s clean third-variable example. |
| Hot-sauce paradigm | Worked example | Preserve its use across operationalization, IV/DV, random assignment, reliability, and validity. |
| Placebo response versus placebo effect | Evidence and misconception correction | Preserve the four-condition comparison and the objective-versus-subjective distinction. |
| Clever Hans | Narrative hook and cross-chapter bridge | Preserve “confirmation bias with hooves.” |
| P-value misconception figure | Misconception correction | Preserve. |
| Effect-size and confidence-interval figure | Mechanism/estimation comparison | Preserve magnitude-versus-uncertainty logic. |
| Correlation classifier lab | Classification and calibration practice | Preserve prediction-before-reveal, immediate feedback, and transfer; revise the mutually exclusive flaw taxonomy. |
| Connections table | Cross-chapter retrieval | Preserve and update only where revised claims require it. |

## Root cause 1 — Causal inference is framed too exclusively

### Current problem

The chapter repeatedly says that only experiments can establish causation. That is a useful introductory rule for distinguishing simple correlation from randomized experimentation, but it becomes too absolute. The chapter’s own Figure 2.1 already refers to “experiments and other causal designs,” creating internal inconsistency.

### Revision requirement

- State the best-supported introductory rule first: a simple correlation cannot establish causation, while randomized experiments provide psychology’s clearest ordinary basis for causal inference.
- Add one proportionate boundary: natural experiments, quasi-experiments, longitudinal designs with strong assumptions, and other causal-inference methods can sometimes support causal conclusions without random assignment.
- Do not turn this into a graduate methods detour.
- Reconcile the Research Cycle paragraph, methods table, experiment section, chapter summary, glossary, and review questions.

## Root cause 2 — Sampling, assignment, and validity are treated as one-to-one mappings

### Current problem

The chapter correctly distinguishes random sampling from random assignment, but sometimes implies that random sampling creates external validity and random assignment guarantees internal validity or “rules out” preexisting differences.

### Revision requirement

- Define random sampling as supporting population representativeness and one important component of generalizability.
- State that external validity also depends on settings, measures, treatments, attrition, and whether the relevant process travels across contexts.
- State that random assignment balances participant characteristics **in expectation** and makes systematic preexisting group differences unlikely; it does not guarantee perfectly equivalent realized groups.
- Replace absolute “rules out” language with calibrated causal-inference language.
- Preserve the sampling-versus-assignment distinction and Figure 2.5 unless its embedded labels require a minimal repair.

## Root cause 3 — Reliability and validity need modern measurement framing

### Current problem

The prose risks teaching validity as literal accuracy and reliability and validity as independent boxes a measure can straightforwardly pass or fail. The target analogy is useful, but it must not become the definition.

### Revision requirement

- Define reliability as consistency or precision of observed scores under specified conditions.
- Define validity as the extent to which evidence and theory support a proposed interpretation and use of scores.
- State clearly that inadequate reliability constrains strong validity claims.
- Do not label the third target panel simply “valid but unreliable.” Describe it as centered correctly on average but too inconsistent for dependable individual interpretation.
- In the hot-sauce example, avoid implying that simple test–retest stability is automatically the correct reliability criterion for a reactive behavioral task.
- Inspect Figure 2.2’s embedded labels; revise the image only if the visual itself contradicts the corrected prose and caption.

## Root cause 4 — The Learning Lab forces nonexclusive causal flaws into exclusive categories

### Current problem

The Correlation vs. Causation Classifier asks students to choose one “strongest” category among correlation, directionality, third variable, or both. Several cases could reasonably involve both reverse causation and one or more third variables, so the answer structure can reward guessing the keyed flaw rather than reasoning about causal alternatives.

### Revision requirement

Preserve the current prediction-before-reveal sequence, but revise the evidence classification into separate judgments:

1. Does this design support the stated causal claim?
2. Could reverse causation remain plausible?
3. Could a third variable remain plausible?
4. What design change or additional evidence would strengthen the inference?

Implementation requirements:

- Replace the mutually exclusive radio taxonomy with accessible independent controls.
- Update item data, feedback, scoring, summary, and transfer logic.
- Accept that some observational cases legitimately have both directionality and third-variable concerns.
- Preserve local-only/privacy behavior and semantic accessibility.
- Version or replace the `sessionStorage` key so stale saved state from the prior data structure cannot break the revised lab.
- Test keyboard use, focus movement, refresh persistence, restart, completion, and narrow-screen behavior.

## Root cause 5 — The statistics sequence emphasizes error labels more than estimation

### Current problem

The chapter names descriptive statistics briefly, moves quickly into p-values and Type I/II errors, and then gives the Type I/II analogy assessment weight. Mean, variability, effect magnitude, and uncertainty do not receive an equally coherent scaffold.

### Revision requirement

- Preserve the p-value misconception figure and the effect-size/confidence-interval figure.
- Add a compact comparison table covering center, variability, effect magnitude, and uncertainty; keep it at Psych 101 depth.
- Define statistical power once if the term remains.
- Compress Type I and Type II errors into a short Do Not Confuse box or sidebar.
- Retain the AI comparison only as an explicitly limited calibration analogy if it still earns its place.
- Remove the AI Type I/II review question and replace it with a stronger transfer question about evaluating design, measurement, magnitude, or uncertainty.

## Root cause 6 — Placebo claims need narrower wording

### Current problem

The placebo section’s design logic is excellent, but the glossary reduces the placebo effect to expectation, and the prose says patients experienced “real relief” where the study directly measured reported improvement.

### Revision requirement

- Say that participants **reported improvement** while objective airway function did not improve under placebo conditions.
- Define placebo effects as effects attributable to the treatment context or ritual relative to an appropriate control; expectation, learning, conditioning, and reporting processes may contribute.
- Preserve the distinction between placebo response and placebo effect.
- Do not imply that subjective outcomes are unreal merely because the objective physiological measure did not change.

## Root cause 7 — Ethics requires one historical correction and one compact extension

### Current problem

The Tuskegee sentence implies that informed consent existed “on paper” but failed. The case more directly involved deception, withholding information and treatment, injustice, and absence of meaningful informed consent. The chapter also omits animal-research oversight despite opening with animal behavioral ecology.

### Revision requirement

- Correct the Tuskegee framing without expanding the historical section unnecessarily.
- Add a compact animal-research ethics sidebar or paragraph covering independent oversight and the replacement–reduction–refinement logic.
- Use current authoritative sources for U.S. human- and animal-research oversight and verify all citation metadata before finalizing.
- Do not turn the section into a regulatory manual.

## Figures and metadata

- Preserve the current nine-figure sequence unless a figure’s embedded wording conflicts with the revised conceptual claims.
- Reconcile the source, generated HTML, chapter figure manifest, and `source/visuals-inventory.md`.
- Change the Research Cycle HTML anchor from the stale `evidence-ladder` ID to a descriptive current ID, preserving any needed compatibility link only if site navigation depends on it.
- Remove the stale placebo public-sharing blocker in the chapter figure manifest after confirming the corrected asset is present.
- Complete browser/mobile-width review for figures still marked pending.

## References and verification

Verify current claims and bibliographic details against primary or authoritative sources. Priority checks:

- causal inference beyond simple correlation and randomized experiments;
- modern validity and reliability standards;
- placebo response versus placebo effect;
- U.S. human-subject and animal-research oversight;
- any current Noba module metadata.

Do not add citations merely to preserve an overextended claim. Narrow the claim first.

## Action routing

### Source prose

Edit `source/chapters/ch02-research-methods.md` directly. Do not create a `-2` comparison draft.

### Learning Lab

Edit:

- `docs/labs/ch02/correlation-causation.html`
- `docs/js/labs-correlation-causation.js`

### Figures and metadata

Inspect and update only as needed:

- `docs/images/ch02/README_captions_alt_text_attribution.md`
- `docs/images/ch02/CH02_IMAGE_WIRING_HANDOFF.md`
- `source/visuals-inventory.md`
- affected Chapter 2 image assets only when embedded wording requires repair

### Generated output

Regenerate `docs/chapters/02-research-methods.html` from the canonical source according to `pipeline/html-conversion-spec.md`. Do not treat the old generated page as the prose authority.

### Project state

After successful completion and validation:

- append a concise dated entry to `GPT_project_log.md`;
- update `HANDOFF.md` only to reflect current Chapter 2 status and the next concrete action, without displacing unrelated active work;
- record any unresolved figure or browser issue in `PROJECT_BACKLOG.md` rather than duplicating it across state files.

## Validation gates

Before declaring Chapter 2 complete:

- source and HTML content parity;
- no stale “only experiments can establish causation” absolutism;
- no “random assignment rules out all differences” language;
- reliability/validity definitions aligned across prose, figure caption, summary, glossary, and review questions;
- revised lab handles cases with both directionality and third-variable concerns;
- lab state, scoring, feedback, restart, focus, privacy, and mobile behavior tested;
- all nine figure paths resolve;
- non-empty alt text with no leading-dash artifacts;
- captions and public-sharing status reconciled;
- Research Cycle anchor is current;
- p-value, effect-size, confidence-interval, placebo, and ethics claims remain calibrated;
- key terms populated;
- references and Further Reading remain separate;
- no bad `?` separator mojibake;
- no broad line-ending-only rewrite.

## Editorial decision

Revise rather than rebuild. The chapter already has its argument, voice, vivid examples, figures, and central lab. The revision must correct conceptual overreach and assessment alignment without genericizing the prose or expanding the chapter into an advanced methods course.