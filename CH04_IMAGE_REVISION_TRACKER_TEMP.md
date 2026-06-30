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

## Priority decisions

| Priority | Asset / concept | Current status | Decision | Target filename | Notes |
|---:|---|---|---|---|---|
| 1 | Perception as active inference / prediction loop | Existing pipeline is too linear | Replace | `ch04_perception_active_inference_loop.png` | Should become the chapter's conceptual anchor: sensory input constrains top-down prediction; prediction error updates the model. |
| 2 | Dress-style same pixels / different illumination assumptions | Missing | Create original | `ch04_same_pixels_different_illumination_assumptions.png` | Do not use viral dress photo unless license is clean. Use original central color patches with two inferred lighting contexts. |
| 3 | Trichromatic + opponent-process color vision | Missing | Create original | `ch04_color_vision_trichromatic_opponent_process.png` | Two-stage model: cone combinations → opponent channels. Should support afterimage explanation. |
| 4 | Gestalt principles panel | Current OpenStax image in chapter | Replace with original | `ch04_gestalt_grouping_principles_original.png` | Figure-ground, proximity, similarity, closure, good continuation. Minimal labels. |
| 5 | Signal detection / criterion and sensitivity | Current 2×2 matrix plus Webvision psychometric image | Rebuild or simplify | `ch04_signal_detection_criterion_sensitivity.png` | Avoid duplicating the table. Prefer a figure showing criterion shift vs sensitivity. Remove external Webvision image if replaced. |
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
| `../images/ch04/fig_sensation_perception_pipeline.png` | Sensation → perception pipeline | Replace | Rebuild as active-inference/prediction-loop figure. |
| `../images/ch04/fig_signal_detection_matrix.png` | SDT 2×2 matrix | Maybe replace | If retained, avoid duplicating the markdown table. Better: criterion/sensitivity visual. |
| `../images/ch04/fig_psychometric_function_webvision.jpg` | Psychometric function | Remove if original SDT figure is built | External CC BY-NC 4.0 source; stylistically inconsistent. |
| `../images/ch04/fig_retina_infographic.png` | Retina anatomy and rods/cones | Likely keep | Needs accuracy and style review; then rename descriptively if desired. |
| `../images/ch04/fig_gestalt_principles_openstax.png` | Gestalt examples | Replace | External OpenStax asset; make original version. |
| `../images/ch04/fig_cochlea_infographic.png` | Cochlea and pitch coding | Likely keep | Needs accuracy and label-density review; then rename descriptively if desired. |
| `../images/ch04/fig_gate_control_infographic.png` | Gate control theory | Likely keep/simplify | Ensure metaphorical gate; avoid over-literal anatomy. |

---

## Caption / alt-text draft queue

Use this section as figures are generated or approved.

### `ch04_perception_active_inference_loop.png`
- Caption: TBD
- Alt text: TBD
- Attribution: Original figure generated for Oxford Psychology 101 with ChatGPT image generation, 2026. No external copyrighted image assets intentionally used. Safe for public sharing pending final accuracy review.
- Status: Needed

### `ch04_same_pixels_different_illumination_assumptions.png`
- Caption: TBD
- Alt text: TBD
- Attribution: Original figure generated for Oxford Psychology 101 with ChatGPT image generation, 2026. No external copyrighted image assets intentionally used. Safe for public sharing pending final accuracy review.
- Status: Needed

### `ch04_color_vision_trichromatic_opponent_process.png`
- Caption: TBD
- Alt text: TBD
- Attribution: Original figure generated for Oxford Psychology 101 with ChatGPT image generation, 2026. No external copyrighted image assets intentionally used. Safe for public sharing pending final accuracy review.
- Status: Needed

### `ch04_gestalt_grouping_principles_original.png`
- Caption: TBD
- Alt text: TBD
- Attribution: Original figure generated for Oxford Psychology 101 with ChatGPT image generation, 2026. No external copyrighted image assets intentionally used. Safe for public sharing pending final accuracy review.
- Status: Needed

### `ch04_signal_detection_criterion_sensitivity.png`
- Caption: TBD
- Alt text: TBD
- Attribution: Original figure generated for Oxford Psychology 101 with ChatGPT image generation, 2026. No external copyrighted image assets intentionally used. Safe for public sharing pending final accuracy review.
- Status: Needed

---

## Open questions

1. Should the current polished retina/cochlea/gate-control PNGs become final textbook figures after accuracy review, or should they be regenerated in the newer Ch3-style semi-realistic format?
2. Should figure filenames be renamed now to descriptive `ch04_...` slugs, or wait until the chapter text is revised?
3. Should the permanent Ch4 manifest live at `docs/images/ch04/README_captions_alt_text_attribution.md`, matching the intended workflow from the polished-image handoff?
4. Should the Webvision and OpenStax assets remain in the repo as candidates/reference after replacement, or be removed once original versions exist?
