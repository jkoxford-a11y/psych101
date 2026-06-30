# TEMP — Chapter 4 Image Revision Tracker

Purpose: temporary working list for revising Chapter 4 visuals against the current Psych 101 figure style guide. Delete or fold into the permanent image manifest once the Ch4 image pass is complete.

Primary references:
- `docs/images/psych101_figure_style_guide.md`
- `source/chapters/ch04-sensation-perception.md`
- `docs/chapters/04-sensation-perception.html`
- `source/visuals-inventory.md`

Style constraints to enforce:
- Concept-first figures, not decoration.
- One hard idea per figure.
- Clean white/light background; 16:9-friendly where possible.
- Few large labels; no paragraph text inside figures.
- No visible figure numbers embedded in image files.
- Prefer descriptive filenames: `ch04_short_concept_slug.png`.
- Record caption, alt text, source/creation method, license, attribution, public-sharing status, and accuracy-review status.

---

## Working decision log

- 2026-06-30: Generated draft `ch04_perception_prediction_loop_v2.png`. Keep as candidate chapter-anchor figure; needs final review for text density and conceptual clarity.
- 2026-06-30: Generated draft `ch04_same_pixels_illumination_assumptions_v1.png`. Keep as candidate replacement for duck/rabbit ambiguity example; needs final review.
- 2026-06-30: Generated draft `ch04_color_vision_two_stage_model_v1.png`. Keep as candidate color-vision figure; needs scientific/label review.
- 2026-06-30: Generated Gestalt drafts did not land well enough to keep. Time decision: use a free/open image for Gestalt principles as a temporary placeholder, document license/attribution carefully, and revisit with a custom figure later.

---

## Priority decisions

| Priority | Asset / concept | Current status | Decision | Target filename | Notes |
|---:|---|---|---|---|---|
| 1 | Perception as prediction loop | Draft generated | Candidate replacement | `ch04_perception_prediction_loop_v2.png` | Should become the chapter's conceptual anchor: sensory input constrains top-down prediction; prediction error updates the model. Review whether text is still too dense. |
| 2 | Dress-style same pixels / different illumination assumptions | Draft generated | Candidate new figure | `ch04_same_pixels_illumination_assumptions_v1.png` | Original simplified dress-style logic without using viral dress photo. Review for accuracy and readability. |
| 3 | Trichromatic + opponent-process color vision | Draft generated | Candidate new figure | `ch04_color_vision_two_stage_model_v1.png` | Two-stage model: cone combinations → opponent channels. Review for color-science wording and label accuracy. |
| 4 | Gestalt principles panel | Generated drafts unsatisfactory | Use free/open placeholder now; custom replacement later | TBD | Use OpenStax/Wikimedia-style open material only if license is confirmed and attribution is recorded. Continuity/good continuation should show intersecting/overlapping paths perceived as continuous, not simply smooth vs. jagged lines. |
| 5 | Signal detection / criterion and sensitivity | Current 2×2 matrix plus possible external psychometric image | Rebuild or simplify later | `ch04_signal_detection_criterion_sensitivity.png` | Avoid duplicating the table. Prefer a figure showing criterion shift vs sensitivity. Remove external Webvision image if replaced. |
| 6 | Retina rods/cones/fovea/blind spot | Polished draft currently used | Accuracy review, likely keep | `ch04_retina_rods_cones_fovea_blindspot.png` | Check anatomy, label density, blind spot/fovea accuracy, and visual consistency. |
| 7 | Cochlea / place vs frequency pitch coding | Polished draft currently used | Accuracy review, likely keep | `ch04_cochlea_place_frequency_pitch_coding.png` | Check base/apex orientation, high/low frequency placement, and frequency-theory wording. |
| 8 | Gate control pain modulation | Polished draft currently used | Accuracy review, likely keep or simplify | `ch04_gate_control_pain_modulation.png` | Must not imply the spinal “gate” is a literal anatomical structure. Keep visual metaphor clear. |
| 9 | Depth cues | Discussed in prose/table | Deprioritize | `ch04_depth_cues_binocular_monocular.png` | Optional slide asset; textbook table may be enough. |
| 10 | Binding problem bridge | Not yet in chapter | Optional | `ch04_binding_problem_unified_percept.png` | Useful only if chapter ending is revised to bridge into Ch5 attention/consciousness. |
| 11 | Perceptual disorders sidebar | Not yet in chapter | Prefer table, not figure | n/a | Visual agnosia, prosopagnosia, Charles Bonnet syndrome probably work better as compact sidebar/table. |

---

## Existing images to audit

| Current path/reference | Current use | Keep / replace / remove | Action notes |
|---|---|---|---|
| `../images/ch04/fig_sensation_perception_pipeline.png` or `fig4_1_sensation_perception_pipeline.png` | Sensation → perception pipeline | Replace | Replace with `ch04_perception_prediction_loop_v2.png` if approved. |
| `../images/ch04/fig_signal_detection_matrix.png` or `fig4_2_signal_detection_matrix.png` | SDT 2×2 matrix | Maybe replace | If retained, avoid duplicating the markdown table. Better: criterion/sensitivity visual later. |
| `../images/ch04/fig_psychometric_function_webvision.jpg` | Psychometric function | Remove if original SDT figure is built | External CC BY-NC 4.0 source; stylistically inconsistent. |
| `../images/ch04/fig_retina_infographic.png` or `fig4_3_retina_rods_cones_fovea_blindspot.png` | Retina anatomy and rods/cones | Likely keep | Needs accuracy and style review; then rename descriptively if desired. |
| `../images/ch04/fig_gestalt_principles_openstax.png` or `fig4_4_gestalt_principles_panel.png` | Gestalt examples | Keep open/free placeholder for now | Generated replacements did not land. Use a confirmed open/free asset temporarily; record license and attribution. Future custom rebuild should prioritize good continuation accuracy. |
| `../images/ch04/fig_cochlea_infographic.png` or `fig4_5_cochlea_place_frequency_theory.png` | Cochlea and pitch coding | Likely keep | Needs accuracy and label-density review; then rename descriptively if desired. |
| `../images/ch04/fig_gate_control_infographic.png` or `fig4_6_gate_control_pain.png` | Gate control theory | Likely keep/simplify | Ensure metaphorical gate; avoid over-literal anatomy. |

---

## Caption / alt-text draft queue

Use this section as figures are generated or approved.

### `ch04_perception_prediction_loop_v2.png`
- Caption: Perception is not a one-way recording of the world. The brain uses partial sensory evidence to update predictions about what is probably out there; mismatch between expectation and input helps revise the model.
- Alt text: Diagram showing perception as a loop. The world provides partial sensory evidence, the brain compares incoming evidence with predictions, prediction error updates the model, and the resulting percept guides action, which creates new sensory input.
- Attribution: Original figure generated for Oxford Psychology 101 with ChatGPT image generation, 2026. No external copyrighted image assets intentionally used. Safe for public sharing pending final accuracy review.
- Status: Draft generated; candidate replacement for current Figure 4.1.

### `ch04_same_pixels_illumination_assumptions_v1.png`
- Caption: The same sensory evidence can produce different percepts when the brain makes different assumptions about illumination. Color perception is constrained by input, but it is also an inference about the lighting conditions that produced that input.
- Alt text: Three-panel diagram showing the same central fabric-like color sample interpreted under two different lighting assumptions. One side assumes blue shadow and produces a lighter, warmer percept; the other assumes warm light and produces a darker, cooler percept.
- Attribution: Original figure generated for Oxford Psychology 101 with ChatGPT image generation, 2026. No external copyrighted image assets intentionally used. Safe for public sharing pending final accuracy review.
- Status: Draft generated; candidate new figure for Section 3.

### `ch04_color_vision_two_stage_model_v1.png`
- Caption: Trichromatic theory and opponent-process theory describe different stages of color vision. Cone photoreceptors first respond to different wavelength ranges; later opponent channels compare signals in red-green, blue-yellow, and light-dark pairs.
- Alt text: Two-panel diagram of color vision. The first panel shows three cone photoreceptor types responding to incoming light. The second panel shows opponent channels comparing red with green, yellow with blue, and light with dark to create color experience.
- Attribution: Original figure generated for Oxford Psychology 101 with ChatGPT image generation, 2026. No external copyrighted image assets intentionally used. Safe for public sharing pending final accuracy review.
- Status: Draft generated; candidate new figure for color-vision section.

### Gestalt principles placeholder
- Caption: TBD based on selected open/free source.
- Alt text: TBD based on selected open/free source.
- Attribution: TBD. Must include source, creator if available, title, license, and changes made.
- Status: Use confirmed open/free placeholder now; custom original later.

### `ch04_signal_detection_criterion_sensitivity.png`
- Caption: TBD
- Alt text: TBD
- Attribution: Original figure generated for Oxford Psychology 101 with ChatGPT image generation, 2026. No external copyrighted image assets intentionally used. Safe for public sharing pending final accuracy review.
- Status: Needed later; not urgent.

---

## Open questions

1. Should the current polished retina/cochlea/gate-control PNGs become final textbook figures after accuracy review, or should they be regenerated in the newer Ch3-style semi-realistic format?
2. Should figure filenames be renamed now to descriptive `ch04_...` slugs, or wait until the chapter text is revised?
3. Should the permanent Ch4 manifest live at `docs/images/ch04/README_captions_alt_text_attribution.md`, matching the intended workflow from the polished-image handoff?
4. Should the Webvision and OpenStax assets remain in the repo as candidates/reference after replacement, or be removed once original versions exist?
5. Which exact open/free Gestalt placeholder should be used temporarily? Preferred sources: OpenStax or Wikimedia Commons, with license verified on the asset page before final use.
