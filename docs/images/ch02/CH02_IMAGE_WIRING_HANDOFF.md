# Chapter 2 Image Wiring Handoff

**Date:** 2026-07-10; completed and reconciled 2026-07-15
**Repository:** `jkoxford-a11y/psych101`  
**Scope:** Finish Chapter 2 image cleanup, metadata reconciliation, source wiring, generated-HTML synchronization, and validation. Do not redesign approved figures or broadly rewrite chapter prose.

**Completion status:** This handoff is complete. The 2026-07-15 canonical revision rechecked the nine-figure sequence, repaired Figure 2.2's embedded measurement wording, replaced the stale numbered sampling/assignment PNG in chapter use with `fig2-5-random-sampling-vs-assignment.svg`, removed the resolved placebo sharing blocker, regenerated the HTML, and completed desktop/mobile visual review. Current metadata lives in `README_captions_alt_text_attribution.md` and `source/visuals-inventory.md`; the instructions below are retained as the historical execution record.

## Read first

1. `AGENTS.md`
2. `pipeline/voice-brief.md`
3. `docs/images/psych101_figure_style_guide.md`
4. `pipeline/html-conversion-spec.md`
5. `source/chapters/ch02-research-methods.md`
6. `docs/chapters/02-research-methods.html`
7. `docs/images/ch02/README_captions_alt_text_attribution.md`
8. `source/visuals-inventory.md`

## Authority and edit boundaries

- `source/chapters/ch02-research-methods.md` is the authoritative chapter source.
- `docs/chapters/02-research-methods.html` is generated output. Regenerate it with the checked-in workflow if available. Patch it directly only if no usable generator exists, and keep it synchronized with the source.
- The approved caption and alt-text language is in `docs/images/ch02/README_captions_alt_text_attribution.md`.
- Do not change figure concepts, regenerate images, or reopen completed design decisions unless browser review exposes a real defect.
- Do not edit unrelated chapters or image folders.
- Do not embed figure numbers inside image files.

## Current approved/replacement assets

All listed PNGs are now present in `docs/images/ch02/`.

### 1. Research-process cycle

- Asset: `docs/images/ch02/ch02_research_process_cycle.png`
- Placement: Near the start of the chapter under **A Map Before the Details: The Research Cycle**.
- Purpose: Replace the ladder framing visually with the iterative cycle Observe → Define → Relate → Test → Estimate → Replicate → Revise.
- Display: `chapter-figure wide expandable`.
- Metadata: Main Chapter 2 manifest.

### 2. Reliability and validity

- Asset: `docs/images/ch02/ch02_reliability_validity_accuracy_precision.png`
- Replace: `fig_reliability_validity_dartboard.svg` and any older reliability/validity image reference.
- Placement: Immediately after reliability and validity are introduced.
- Display: `chapter-figure wide expandable`.
- Metadata: Main Chapter 2 manifest.

### 3. Correlation direction and strength

- Asset: `docs/images/ch02/ch02_correlation_direction_strength.png`
- Replace: `fig_correlation_scatter.png`.
- Placement: Immediately after the paragraph introducing Pearson's correlation coefficient.
- Display: `chapter-figure wide expandable`.
- Metadata: Now merged into the main Chapter 2 manifest.
- Cleanup: Remove the redundant standalone metadata file `docs/images/ch02/ch02_correlation_direction_strength.md` after confirming the merged manifest entry is complete.

### 4. Third-variable problem

- Current asset: `docs/images/ch02/40af6fe3-f8d2-4d0a-a7f5-17022b340904-_edit.png`
- This is the user-selected replacement for the previous third-variable figure.
- Rename to: `docs/images/ch02/ch02_third_variable_age_shoe_size_reading.png`
- Replace: the existing `fig_third_variable_problem.png`/`.svg` reference used in Chapter 2.
- Placement: In the **Do Not Confuse: Correlation vs. Causation** section after the shoe-size/reading example.
- Inspect the PNG before writing metadata. The intended conceptual structure is Age influencing both Shoe Size and Reading Ability; the association between shoe size and reading ability does not establish a direct causal link.
- Add a complete entry to the main Chapter 2 manifest: caption, alt text, creation method, attribution, public-sharing status, caveats, final filename, and superseded asset.
- Keep the figure concept-first and do not add explanatory prose merely to compensate for the image.

Suggested caption, revise only to match the actual visual:

> **A third variable can create a misleading association.** Older children tend to have both larger feet and stronger reading skills, so shoe size and reading ability are correlated. Age explains why they change together; larger feet do not cause better reading.

Suggested alt text, revise to match the actual visual:

> Diagram showing Age as a third variable with arrows pointing to both Shoe Size and Reading Ability. A separate association between shoe size and reading ability is marked as noncausal or questionable, illustrating that both measured variables change with age rather than one directly causing the other.

Accuracy caveats:

- The example demonstrates a plausible third-variable explanation; observational data alone cannot prove that age is the only relevant cause.
- Correlation does not identify direction of causation.
- A third variable may explain all, part, or none of an observed association.

### 5. Placebo response versus placebo effect

- Asset: `docs/images/ch02/ch02_placebo_response_vs_effect_asthma.png`
- Placement: After the new prose describing Wechsler et al. (2011).
- Display: `chapter-figure wide expandable`.
- **Resolved 2026-07-10:** The PNG originally contained an incorrect embedded author list in the bottom source line. The line was replaced with:

  `Source: Wechsler et al. (2011), doi:10.1056/NEJMoa1103319`

- The repair changed only the bottom source line while preserving all other pixels and chart values. The canonical revision rechecked the repaired asset and removed the stale public-sharing blocker from the manifest.
- Verified teaching values:
  - Objective FEV1 improvement: approximately 20% for albuterol and approximately 7% for placebo inhaler, sham acupuncture, and no intervention.
  - Subjective improvement: approximately 50%, 45%, 46%, and 21%, respectively.

### 6. Effect size and confidence intervals

- Asset: `docs/images/ch02/ch02_effect_size_confidence_intervals_magnitude_uncertainty.png`
- Placement: Immediately after effect size and confidence intervals are introduced.
- Display: `chapter-figure wide expandable`.
- Metadata: Main Chapter 2 manifest.
- Supersedes: `ch02_effect_size_confidence_intervals_magnitude_precision.png`.

## Existing figures to retain unless live review shows a defect

- Experiment/hot-sauce flow figure.
- Newer random-sampling-versus-random-assignment figure currently used by the live HTML.
- Existing p-value misconception figure, provided its labels remain readable and accurate.

Do not add a Central Limit Theorem figure to the main chapter. Existing CLT assets have already been moved to `_archive` and belong in an optional deep dive or lab, not the core visual sequence.

## Source and HTML wiring tasks

1. Update image paths in `source/chapters/ch02-research-methods.md`.
2. Insert the research-cycle figure at the research-cycle overview.
3. Replace the old reliability/validity figure.
4. Replace the old correlation scatterplot.
5. Rename and replace the third-variable figure.
6. Insert the placebo figure only after its embedded citation is corrected.
7. Insert the effect-size/confidence-interval figure.
8. Use captions and alt text from the main manifest, adjusting only when the actual image requires a factual correction.
9. Renumber all Chapter 2 figures in order of appearance. Do not place numbers inside PNGs.
10. Regenerate or synchronize `docs/chapters/02-research-methods.html`.
11. Preserve review questions, `<details>` answer structures, callouts, navigation, sidebar state, references, and Further Reading separation.

## Display guidance

Use `chapter-figure wide expandable` for:

- Research cycle
- Reliability/validity
- Correlation direction/strength
- Placebo objective/subjective comparison
- Effect size/confidence intervals

The third-variable figure may use ordinary `chapter-figure` if its labels are easily readable at text-column width; otherwise use `wide expandable`.

Expansion is not a substitute for legible default rendering. Check that text is readable before expansion on a normal laptop viewport.

## Manifest and inventory cleanup

1. Update `docs/images/ch02/README_captions_alt_text_attribution.md`:
   - Add the renamed third-variable replacement.
   - Change placebo status after the citation repair.
   - Confirm every wired figure has final filename, caption, alt text, attribution, public-sharing status, caveats, and superseded asset where applicable.
2. Delete the now-redundant standalone `docs/images/ch02/ch02_correlation_direction_strength.md` after confirming its entry is fully merged.
3. Update `source/visuals-inventory.md` to reflect final Chapter 2 filenames and wiring status.
4. Archive superseded assets rather than deleting them unless repo instructions specify deletion:
   - `fig_correlation_scatter.png`
   - old reliability/validity assets
   - old third-variable assets
   - dense first-pass effect-size image if it is present
5. Do not archive figures still referenced elsewhere without first searching the repo.

## Required validation

Search source and generated HTML for stale references and confirm none remain:

- `fig_correlation_scatter`
- `fig_reliability_validity_dartboard`
- `fig_third_variable_problem`
- `ch02_effect_size_confidence_intervals_magnitude_precision`
- the UUID filename after rename

Validate both Markdown and HTML:

- All image paths resolve.
- Every image has non-empty, accurate alt text.
- No leading-dash alt-text artifacts.
- No `?` mojibake or broken Unicode symbols.
- Captions match the actual image.
- Figure numbering is sequential.
- `wide expandable` figures open correctly.
- Images fit desktop and mobile widths without horizontal scrolling.
- Review/details structures, callouts, references, Further Reading, navigation, and sidebar state remain intact.
- The placebo figure contains the corrected source line before it is marked use now.
- The third-variable PNG has a descriptive filename rather than the UUID filename.

## Deliverable and logging

Commit the Chapter 2 image integration as a focused change. Append a concise entry to `GPT_project_log.md` containing:

- Date
- Scope
- Files changed
- Figures replaced/added
- Placebo citation repair method
- Validation performed
- Any remaining issues

Do not include private chain-of-thought. Report the final commit SHA and any unresolved blocker.
