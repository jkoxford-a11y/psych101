# SVG Visual Audit Report

Created: 2026-07-07

Scope: all `.svg` files under `docs/images/`.

Method:
- Enumerated 49 SVG files under `docs/images/`.
- Rendered each SVG to a 1600×900 PNG preview using `sharp` with a light background.
- Visually inspected the rendered PNG previews, not only SVG XML.
- Checked against `docs/images/psych101_figure_style_guide.md`, especially readability, sparse labels, 16:9 suitability, clean arrows, no embedded figure numbers, no clutter, and one hard idea per figure.
- Temporary previews were written outside the repo at `%TEMP%/psych101_svg_audit_previews_sharp/`.

## Problems Found

### `docs/images/ch02/fig2-5-evidence-ladder.svg`
- Render status: rendered
- Severity: BLOCKER
- Issue summary: This is an editable scaffold, not a finished figure. The canvas is almost blank except for an embedded figure number/title and the note "Editable SVG scaffold; use the PNG for the polished raster version."
- Recommended fix: Replace with a finished SVG or remove/retire the scaffold from use. Do not embed the figure number.
- Fix type: Requires instructor/design judgment if the evidence-ladder concept is still wanted; mechanical if replacing from an existing polished source.

### `docs/images/ch02/fig2-5-sampling-vs-assignment.svg`
- Render status: rendered
- Severity: FIX SOON
- Issue summary: Dark background with low-contrast dark heading; embedded figure number; dense bottom explanatory text. The visual is usable but conflicts with the light, sparse project style.
- Recommended fix: Redraw on a white/light background, remove embedded figure number, increase contrast, and move the long bottom explanation into the caption.
- Fix type: Mechanical redraw from existing content.

### `docs/images/ch02/fig2-6-random-sampling-vs-assignment.svg`
- Render status: rendered
- Severity: BLOCKER
- Issue summary: Editable scaffold only; mostly blank with embedded figure number/title and scaffold note.
- Recommended fix: Replace with a complete SVG or retire. Remove embedded figure number.
- Fix type: Requires instructor/design judgment only if deciding between this and the already polished sampling/assignment alternatives.

### `docs/images/ch02/fig2-7-operational-definition-reliability-validity.svg`
- Render status: rendered
- Severity: BLOCKER
- Issue summary: Editable scaffold only; mostly blank with embedded figure number/title and scaffold note.
- Recommended fix: Replace with a complete SVG or retire. Remove embedded figure number.
- Fix type: Requires instructor/design judgment if this concept still needs a standalone visual.

### `docs/images/ch02/fig2-8-type-i-type-ii-error-matrix-ai.svg`
- Render status: rendered
- Severity: BLOCKER
- Issue summary: Editable scaffold only; mostly blank with embedded figure number/title and scaffold note.
- Recommended fix: Replace with a complete SVG or retire. Remove embedded figure number.
- Fix type: Requires instructor/design judgment if this concept still needs a standalone visual.

### `docs/images/ch02/fig_reliability_validity_dartboard.svg`
- Render status: rendered
- Severity: FIX SOON
- Issue summary: Portrait-ish aspect ratio inside a 16:9 preview, embedded figure-number text, and some scatter points appear near or beyond the panel edges. It also uses a different older style than current project figures.
- Recommended fix: Redraw as a 16:9 four-panel dartboard figure with no embedded figure number, consistent margins, and point clouds contained within targets.
- Fix type: Mechanical.

### `docs/images/ch03/fig_stress_response_fast_slow.svg`
- Render status: rendered
- Severity: FIX SOON
- Issue summary: Embedded figure number, old monochrome/monospaced style, excessive top whitespace, and a long key-idea sentence inside the figure. Labels are readable but not visually aligned with current style.
- Recommended fix: Remove embedded figure number, convert to the current light-card style, tighten layout, and move the key idea to the caption.
- Fix type: Mechanical redraw from current content.

### `docs/images/ch03/3 images not used/fig_action_potential_threshold.svg`
- Render status: rendered
- Severity: FIX SOON
- Issue summary: Embedded figure number, old monospaced labels, dense annotation, and a long bottom key-idea sentence inside the figure. The science is legible, but the figure is not sparse.
- Recommended fix: Remove embedded figure number, simplify labels to threshold/spike/refractory period, enlarge labels, and move nuance to caption.
- Fix type: Mechanical.

### `docs/images/ch03/3 images not used/fig_brain_imaging_tradeoffs.svg`
- Render status: rendered
- Severity: FIX SOON
- Issue summary: Embedded figure number and table-heavy layout with many small cells. It violates the "figure should not contain paragraphs" standard and may be better as a table than a figure.
- Recommended fix: Either keep as a markdown table or redesign as a simpler comparison with only the core tradeoff axes.
- Fix type: Requires instructor/design judgment.

### `docs/images/ch03/3 images not used/fig_neuron_anatomy.svg`
- Render status: rendered
- Severity: FIX SOON
- Issue summary: Embedded figure number, old monochrome style, and several very small labels (for example repeated node labels). Dense enough that it would be weak for slide/textbook use.
- Recommended fix: Redraw with fewer labels, larger text, and no embedded figure number.
- Fix type: Mechanical.

### `docs/images/ch03/3 images not used/fig_neurotransmitter_vs_hormone.svg`
- Render status: rendered
- Severity: FIX SOON
- Issue summary: Embedded figure number, older monochrome style, small labels, and too much explanatory text inside boxes.
- Recommended fix: Redraw as a clean two-panel comparison using current style; keep only short route/timescale labels and move detail to caption.
- Fix type: Mechanical.

### `docs/images/ch03/3 images not used/fig_split_brain_logic.svg`
- Render status: rendered
- Severity: FIX SOON
- Issue summary: Embedded figure number and dense labels/callouts. The core logic is useful, but the bottom explanatory box is too wordy for the figure itself.
- Recommended fix: Remove embedded number, simplify to input → hemisphere → response logic, and move caveat text to caption.
- Fix type: Mechanical.

### `docs/images/ch03/3 images not used/neuron_synapse_signal_transfer.svg`
- Render status: rendered
- Severity: ACCEPTABLE
- Issue summary: Overall polished, but the magnified synapse inset has many small labels and edges toward label crowding.
- Recommended fix: If used in a chapter, simplify the inset labels or rely on caption/alt text for the smaller parts.
- Fix type: Mechanical.

### `docs/images/ch04/fig_sensation_perception_pipeline.svg`
- Render status: rendered
- Severity: ACCEPTABLE
- Issue summary: Native aspect ratio is very wide and short, so the 16:9 preview has large vertical margins. Labels remain readable, but it is less 16:9-friendly than current figures.
- Recommended fix: If revising, expand to a true 16:9 canvas with the same pipeline centered vertically and perhaps a little more explanatory spacing.
- Fix type: Mechanical.

### `docs/images/ch04/fig_webers_law_jnd_proportion.svg`
- Render status: rendered
- Severity: ACCEPTABLE
- Issue summary: Readable, but denser than ideal: legend, multiple arrows, formula strip, and several data labels compete for attention.
- Recommended fix: Optional simplification: keep one representative JND annotation and move formula detail to caption.
- Fix type: Requires instructor/design judgment about desired math detail.

### `docs/images/ch04/unused/fig_cochlea_pitch_theory.svg`
- Render status: rendered
- Severity: FIX SOON
- Issue summary: Embedded figure number, very dense labels, explanatory paragraph box, crowded frequency labels, and a bottom apex label close to the canvas edge. It tries to teach place theory and frequency theory at once.
- Recommended fix: Split into two simpler figures or redraw with much less text; remove embedded figure number.
- Fix type: Requires instructor/design judgment because it may violate "one hard idea per figure."

### `docs/images/ch04/unused/fig_gate_control_pain.svg`
- Render status: rendered
- Severity: FIX SOON
- Issue summary: Embedded figure number, multiple long explanatory labels, dense footer text, and heavy arrow traffic through the central gate. Usable as a lecture diagram, but too text-heavy for the style guide.
- Recommended fix: Remove embedded number, reduce labels to stimulus/touch/gate/brain/descending modulation, and move examples/caveats to caption.
- Fix type: Mechanical.

### `docs/images/ch04/unused/fig_gestalt_principles.svg`
- Render status: rendered
- Severity: FIX SOON
- Issue summary: Embedded figure number and five mini-figures with small labels. It is crowded and table-like, though conceptually coherent.
- Recommended fix: Use the cleaner current Gestalt figure if available, or split into fewer principles per figure.
- Fix type: Requires instructor/design judgment.

### `docs/images/ch04/unused/fig_retina_rods_cones.svg`
- Render status: rendered
- Severity: FIX SOON
- Issue summary: Embedded figure number; crowded left eye diagram; orange fovea label overlaps the eye and competes with the chart. The right chart is readable but visually busy.
- Recommended fix: Remove embedded number, simplify eye-side labels, move fovea/blind-spot details into cleaner callouts, and increase spacing between eye and chart.
- Fix type: Mechanical.

### `docs/images/ch04/unused/fig_signal_detection_matrix.svg`
- Render status: rendered
- Severity: FIX SOON
- Issue summary: Matrix is readable but dense, with small explanatory examples in every cell. It is closer to a table than a figure and may be hard at slide size.
- Recommended fix: Enlarge the four outcome labels and move examples to caption or surrounding text.
- Fix type: Mechanical.

### `docs/images/ch05/fig_scn_light_to_melatonin_bioinfographic.svg`
- Render status: rendered
- Severity: FIX SOON
- Issue summary: Several labels overlap or are partially obscured around the brain/retinohypothalamic tract area; arrow/pathway elements crowd the pineal/melatonin region. The numbered explanatory list adds substantial text inside the image.
- Recommended fix: Reposition the retina/RHT/SCN labels, simplify the pathway arrows, reduce or move the numbered list to caption, and create more space around the melatonin/pineal callout.
- Fix type: Mechanical, with minor instructor review for biological pathway accuracy.

### `docs/images/ch08/ch08_reconstructive_memory_process.svg`
- Render status: rendered
- Severity: ACCEPTABLE
- Issue summary: The rightmost "Reconstructed Memory" panel is close to the canvas edge and the title nearly touches the panel boundary. It remains readable and no clipping was visible.
- Recommended fix: Optional: reduce the right panel title font slightly or shift the final panel left.
- Fix type: Mechanical.

### `docs/images/ch10/ch10_piaget_stages_sequence_with_caveat.svg`
- Render status: rendered
- Severity: BLOCKER
- Issue summary: Visible text overflow in the lower "Modern update" card: the final phrase runs into/under the decorative dots and squiggle at the lower right. Several stage cards are also text-heavy and arrowheads cut close to card text.
- Recommended fix: Remove the decorative dots/squiggle or move them away from text; wrap the modern-update sentence onto shorter lines; reduce stage-card wording; ensure arrows do not overlap card content.
- Fix type: Mechanical for overflow; instructor/design judgment if simplifying stage-card wording.

## Final Priority List

### 1. Files to fix immediately

- `docs/images/ch02/fig2-5-evidence-ladder.svg`
- `docs/images/ch02/fig2-6-random-sampling-vs-assignment.svg`
- `docs/images/ch02/fig2-7-operational-definition-reliability-validity.svg`
- `docs/images/ch02/fig2-8-type-i-type-ii-error-matrix-ai.svg`
- `docs/images/ch10/ch10_piaget_stages_sequence_with_caveat.svg`

### 2. Files to fix later

- `docs/images/ch02/fig2-5-sampling-vs-assignment.svg`
- `docs/images/ch02/fig_reliability_validity_dartboard.svg`
- `docs/images/ch03/fig_stress_response_fast_slow.svg`
- `docs/images/ch03/3 images not used/fig_action_potential_threshold.svg`
- `docs/images/ch03/3 images not used/fig_brain_imaging_tradeoffs.svg`
- `docs/images/ch03/3 images not used/fig_neuron_anatomy.svg`
- `docs/images/ch03/3 images not used/fig_neurotransmitter_vs_hormone.svg`
- `docs/images/ch03/3 images not used/fig_split_brain_logic.svg`
- `docs/images/ch04/unused/fig_cochlea_pitch_theory.svg`
- `docs/images/ch04/unused/fig_gate_control_pain.svg`
- `docs/images/ch04/unused/fig_gestalt_principles.svg`
- `docs/images/ch04/unused/fig_retina_rods_cones.svg`
- `docs/images/ch04/unused/fig_signal_detection_matrix.svg`
- `docs/images/ch05/fig_scn_light_to_melatonin_bioinfographic.svg`

### 3. Files that render acceptably

- `docs/images/ch02/fig2-5-random-sampling-vs-assignment.svg`
- `docs/images/ch02/fig2-6-reliability-validity-targets.svg`
- `docs/images/ch02/fig_central_limit_theorem.svg`
- `docs/images/ch02/fig_correlation_scatter.svg`
- `docs/images/ch02/fig_experiment_flowchart.svg`
- `docs/images/ch02/fig_p_value_misconceptions.svg`
- `docs/images/ch02/fig_third_variable_problem.svg`
- `docs/images/ch03/3 images not used/fig3_3_action_potential_firing_rate.svg`
- `docs/images/ch03/3 images not used/neuron_synapse_signal_transfer.svg`
- `docs/images/ch04/ch04_good_continuation_wm_redrawing.svg`
- `docs/images/ch04/ch04_weber_law_minimal_v2.svg`
- `docs/images/ch04/fig_gestalt_principles_original.svg`
- `docs/images/ch04/fig_sensation_perception_pipeline.svg`
- `docs/images/ch04/fig_webers_law_jnd_proportion.svg`
- `docs/images/ch08/ch08_atkinson_shiffrin_three_box_model.svg`
- `docs/images/ch08/ch08_baddeley_working_memory_model.svg`
- `docs/images/ch08/ch08_levels_of_processing_shallow_to_deep.svg`
- `docs/images/ch08/ch08_memory_taxonomy_tree.svg`
- `docs/images/ch08/ch08_reconstructive_memory_process.svg`
- `docs/images/ch08/ch08_serial_position_curve.svg`
- `docs/images/ch09/fig_bias_question_substitution.svg`
- `docs/images/ch09/fig_iq_bell_curve.svg`
- `docs/images/ch09/fig_linda_conjunction_fallacy.svg`
- `docs/images/ch09/fig_wason_task_answer.svg`
- `docs/images/ch09/fig_wason_task_prompt.svg`
- `docs/images/ch11/fig_person_situation_grid.svg`
- `docs/images/ch11/fig_trait_signal_aggregation.svg`
- `docs/images/prologue/ai_replacement_vs_scaffolding.svg`
- `docs/images/prologue/fig_dunning_kruger_actual_data.svg`
- `docs/images/prologue/learning_exposure_retrieval_decision_tree.svg`

Note: "Render acceptably" here means no visible layout defect in the rendered preview. It does not mean the figure is necessarily wired, pedagogically necessary, legally cleared, or preferred over an existing PNG.

## Embedded Figure Number Cleanup

Changed files:

- `docs/images/ch02/fig2-5-evidence-ladder.svg` - removed visible `Fig 2.5` prefix from the title.
- `docs/images/ch02/fig2-5-sampling-vs-assignment.svg` - removed visible `Figure 2.5` prefix from the title.
- `docs/images/ch02/fig2-6-random-sampling-vs-assignment.svg` - removed visible `Fig 2.6` prefix from the title.
- `docs/images/ch02/fig2-7-operational-definition-reliability-validity.svg` - removed visible `Fig 2.7` prefix from the title.
- `docs/images/ch02/fig2-8-type-i-type-ii-error-matrix-ai.svg` - removed visible `Fig 2.8` prefix from the title.
- `docs/images/ch02/fig_reliability_validity_dartboard.svg` - removed visible `Figure 2.6` prefix from the converted-glyph title group and preserved the clean title text.
- `docs/images/ch03/fig_stress_response_fast_slow.svg` - removed visible `Fig. 3.4` prefix from the title.
- `docs/images/ch03/3 images not used/fig_action_potential_threshold.svg` - removed visible `Fig. 3.2` prefix from the title.
- `docs/images/ch03/3 images not used/fig_brain_imaging_tradeoffs.svg` - removed visible `Fig. 3.5` prefix from the title.
- `docs/images/ch03/3 images not used/fig_neuron_anatomy.svg` - removed visible `Fig. 3.1` prefix from the title.
- `docs/images/ch03/3 images not used/fig_neurotransmitter_vs_hormone.svg` - removed visible `Fig. 3.3` prefix from the title.
- `docs/images/ch03/3 images not used/fig_split_brain_logic.svg` - removed visible `Fig. 3.6` prefix from the title.
- `docs/images/ch04/unused/fig_cochlea_pitch_theory.svg` - removed visible `Figure 4.5` prefix from the converted-glyph title group and preserved the clean title text.
- `docs/images/ch04/unused/fig_gate_control_pain.svg` - removed visible `Figure 4.6` prefix from the converted-glyph title group and preserved the clean title text.
- `docs/images/ch04/unused/fig_gestalt_principles.svg` - removed visible `Figure 4.4` prefix from the converted-glyph title group and preserved the clean title text.
- `docs/images/ch04/unused/fig_retina_rods_cones.svg` - removed visible `Figure 4.3` prefix from the converted-glyph title group and preserved the clean title text.

Verification:

- Re-ran a repo-wide SVG grep for `Fig`, `Fig.`, and `Figure` followed by numeric figure labels; no embedded figure-number text remains under `docs/images/`.
- Rendered all changed SVGs to 1600 x 900 PNG previews and inspected a contact sheet. No new text shift, clipping, or overlap was observed from the cleanup.

Files still needing design judgment:

- No remaining figure-number cleanup items need design judgment.
- The broader layout/design issues listed above remain unchanged, especially the scaffold-only Chapter 2 figures and dense/converted-glyph unused Chapter 4 figures.

## Summary Counts

- SVGs audited: 49
- Render failures: 0
- BLOCKER files: 5
- FIX SOON files: 14
- ACCEPTABLE/minor-issue files: 30

Top 5 files needing attention:

1. `docs/images/ch10/ch10_piaget_stages_sequence_with_caveat.svg` — visible text overflow in the lower card.
2. `docs/images/ch02/fig2-5-evidence-ladder.svg` — scaffold-only, not a finished figure.
3. `docs/images/ch02/fig2-6-random-sampling-vs-assignment.svg` — scaffold-only, not a finished figure.
4. `docs/images/ch02/fig2-7-operational-definition-reliability-validity.svg` — scaffold-only, not a finished figure.
5. `docs/images/ch02/fig2-8-type-i-type-ii-error-matrix-ai.svg` — scaffold-only, not a finished figure.
