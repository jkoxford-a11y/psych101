# Visuals Inventory — Psych101 Textbook

*Last reconciled: 2026-07-09 — Final selected Ch10 figure set wired into `source/chapters/ch10-lifespan-development.md` and regenerated into live HTML; Ch10 inventory updated with skipped candidates. Treat the chapter-specific README/metadata files as authoritative for captions, alt text, licensing, and attribution when they exist.*

Status key: ✅ wired/use now · 🧩 built/audited but not wired · ⚠️ exists but needs review/decision · 🔲 still needed/not built · ❌ broken reference/file missing

**Current locked chapter order:** 1 History & Approaches · 2 Research Methods & Statistics · 3 Neuroscience & Biological Bases · 4 Sensation & Perception · 5 Consciousness · 6 Sleep · 7 Learning · 8 Memory · 9 Thinking, Language & Intelligence · 10 Lifespan Development · 11 Social Psychology (Personality glossed within) · 12 Emotion, Stress & Coping · 13 Psychological Disorders & Therapy.

---

## Prologue

Markdown draft complete (v0.2). Awaiting Jon's line-by-line review. HTML conversion prompt written for Codex.

| # | Description | Status | Filename / note |
|---|-------------|--------|-----------------|
| P.1 | Ebbinghaus forgetting curve (spaced review with review-reset intervals) | ✅ | `prologue/fig_forgetting_curve_ebbinghaus.png` — Jon/GPT original |
| P.2 | Kruger & Dunning (1999) Study 2 — actual bar data by quartile, not the popular "Mount Stupid" curve | ✅ | `prologue/fig_dunning_kruger_actual_data.svg/.png` |
| P.3 | "Exposure Is Not Learning" decision tree | ✅ | `prologue/learning_exposure_retrieval_decision_tree.svg/.png` |
| P.4 | "AI Can Replace Retrieval or Support It" two-column diagram | ✅ | `prologue/ai_replacement_vs_scaffolding.svg/.png` |
| P.5 | Human-AI Cognitive Alignment — grounding/context diagram | ⚠️ | GPT version exists but has rendering artifacts (strikethrough text, stray nodes). Rebuild from scratch before use. Intended for Section 8 / AI unit. |

---

## Chapter 1 — History & Approaches

**Complete as of Session 91.** All previously open items resolved: Section 3 title kept as-is ("Seven Lenses, No Single Truth"); Fig 1.1 attribution documented (AI-generated via ChatGPT, directed/curated by Jon) and placement kept at Section 1 (considered anchoring to Section 3 instead, decided against for now — see README note); Fig 1.2 (Maslow) cut entirely due to weak sourcing, image moved to `ch01/_archive/`; portrait strip confirmed fine as-is, no changes. Review questions trimmed from 13 to 11 (cut Q2/Watson-manifesto as a duplicate of the dog/treat behaviorism question, and Q12/replication-crisis as the item least anchored to a stated Learning Objective), renumbered sequentially in both source and HTML. Linter passes clean (0 hard failures) on the rebuilt HTML.

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| 1.1 | One behavior, many psychological questions (phone/notification) | ✅ | `ch01/fig_1_1_scope_map.png` |
| 1.2 | Maslow hierarchy — REMOVED Session 91 (weak sourcing) | archived | `ch01/_archive/fig_1_2_maslow_hierarchy.png` |
| 1.3 | Skinner / Chomsky / LLM language diagram | ✅ | `ch01/fig_1_3_language_explanations.png` |
| — | Portraits: Wundt, James, Watson, Freud, Skinner | ✅ | `ch01/portrait_*.jpg` |

---

## Chapter 2 — Research Methods & Statistics

Jon is generating his own images. Hold HTML conversion until the final image set and numbering are resolved.

| # | Description | Status | Filename / note |
|---|-------------|--------|-----------------|
| 2.1 | Correlation scatter (direction/strength) | ✅ | `ch02/fig2-1-correlation.png/.svg` |
| 2.2 | Third-variable problem diagram | ✅ | `ch02/fig2-2-third-variable.png/.svg` |
| 2.3 | Experiment flowchart (IV/DV/control) | ✅ | `ch02/fig2-3-experiment-flowchart.png/.svg` |
| 2.4 | Central limit theorem | ✅ | `ch02/fig2-4-clt.png/.svg` |
| 2.5 | Evidence ladder (Describe→Relate→Test→Estimate→Replicate) | ✅ | `ch02/fig2-5-evidence-ladder.png/.svg` |
| 2.6 | Random sampling vs. random assignment | ✅ | `ch02/fig2-6-random-sampling-vs-assignment.png/.svg` |
| 2.7 | Operational definition / reliability / validity | ✅ | `ch02/fig2-7-operational-definition-reliability-validity.png/.svg` |
| 2.8 | Type I / Type II error matrix with AI analogy | ✅ | `ch02/fig2-8-type-i-type-ii-error-matrix-ai.png/.svg` |
| 2.x | Double-blind placebo-controlled study flowchart | ✅ | `ch02/fig2-double-blind-placebo.png` |
| — | Jon's own images | ⚠️ | On hold — choose final set before HTML conversion. |
| — | Duplicate/numbering cleanup | ⚠️ | Old `fig2-5-sampling-vs-assignment` and `fig2-6-reliability-validity` files are earlier drafts. Decide which set to use and clean references. |

---

## Chapter 3 — Neuroscience & Biological Bases

All 9 listed figures exist. Awaiting Jon's line-by-line review before HTML conversion.

| # | Description | Status | Filename / note |
|---|-------------|--------|-----------------|
| 3.1 | Neuron anatomy / signal direction | ✅ | `ch03/fig3_1_neuron_anatomy_signal_direction.png/.svg` |
| 3.2 | Action potential / threshold graph | ✅ | `ch03/fig3_2_action_potential_threshold.png/.svg` |
| 3.3 | Misconception card: stimulus strength vs. firing rate | ⚠️ | `ch03/fig3_3_misconception_action_potential_lecture.jpg` — from lecture slides; needs Jon originality sign-off. |
| 3.4 | Neurotransmitter vs. hormone (synapse vs. bloodstream) | ✅ | `ch03/fig3_4_neurotransmitter_vs_hormone.png/.svg` |
| 3.5 | Agonist/antagonist diagram | ⚠️ | `ch03/fig3_5_agonist_antagonist_lecture.jpg` — from lecture slides; needs Jon originality sign-off. |
| 3.6 | Fast (SAM) / slow (HPA) stress response pathways | ✅ | `ch03/fig3_6_stress_response_fast_slow.png/.svg` |
| 3.7 | ANS balance (sympathetic vs. parasympathetic) | ⚠️ | `ch03/fig3_7_ans_balance_lecture.jpg` — from lecture slides; needs Jon originality sign-off. |
| 3.8 | Brain imaging tradeoffs (fMRI/EEG/PET spatial-temporal grid) | ✅ | `ch03/fig3_8_brain_imaging_tradeoffs.png/.svg` |
| 3.9 | Split-brain logic diagram | ✅ | `ch03/fig3_9_split_brain_logic.png/.svg` |

**Open items for Jon:** confirm the three lecture-deck-sourced figures (3.3, 3.5, 3.7) are original or rebuild equivalents as clean originals. Reconcile any v0.7 renumbering notes against `ch03-neuroscience-biological-bases.md` before HTML sync.

---

## Chapter 4 — Sensation & Perception

Use `docs/images/ch04/README_captions_alt_text_attribution.md` as the authoritative Ch4 image manifest. The older claim that a trichromatic/opponent-process figure is still needed is stale: `ch04_color_vision_two_stage_model_v1.png` is already in use.

| # | Description | Status | Filename / note |
|---|-------------|--------|-----------------|
| 4.1 | Sensation/perception pipeline with top-down feedback | ✅ | `ch04/fig_sensation_perception_pipeline.png/.svg` |
| 4.2 | Signal detection matrix | ✅ | `ch04/fig_signal_detection_matrix.png/.svg` |
| inline | Psychometric function / absolute threshold | ⚠️ | `ch04/fig_psychometric_function_webvision.jpg` — CC BY-NC 4.0; confirm non-commercial use assumptions before public release. |
| 4.3 | Retina rods/cones/fovea/blind spot infographic | ✅ | `ch04/fig_retina_rods_cones_fovea_blindspot.png` |
| 4.4 | Two-stage color vision: trichromatic cones + opponent-process channels | ✅ | `ch04/ch04_color_vision_two_stage_model_v1.png` |
| 4.5 | Perception prediction loop | ✅ | `ch04/ch04_perception_prediction_loop.png` |
| 4.6 | Same pixels / illumination assumptions | ✅ | `ch04/ch04_same_pixels_illumination_assumptions_v1.png` |
| 4.7 | Original Gestalt principles panel | ✅ | `ch04/fig_gestalt_principles_original.png/.svg` — replaces OpenStax composite. |
| inline | Good continuation W/M redrawing | ✅ | `ch04/ch04_good_continuation_wm_redrawing.png/.svg` |
| 4.8 | Müller-Lyer illusion | ✅ | `ch04/ch04_muller-lyer.jpeg` — CC BY 4.0 source tracked in Ch4 README. |
| 4.9 | Cochlea / place theory vs. frequency theory | ✅ | `ch04/fig_cochlea_place_frequency_pitch.png` |
| 4.10 | Gate control theory of pain | ✅ | `ch04/fig_gate_control_pain.png` |
| — | Depth cues illustration (monocular vs. binocular) | 🔲 | Still possible if the live chapter needs it; not currently confirmed as a blocker. |

**Open Ch4 tasks:** browser-check the live rendered page for image loading, mobile width, caption length, and readability; decide later whether Fig 4.1 should remain as the simple pipeline or be replaced by a less linear diagram; keep license flags visible for Webvision; retire/fold `CH04_IMAGE_REVISION_TRACKER_TEMP.md` after final Ch4 review.

---

## Chapter 5 — Consciousness

All 8 figures are wired in `ch05-consciousness.md` per the current chapter header and table. The previous summary claim that only Fig 5.1 was done and seven images were unplaced was stale/contradictory. Remaining work is Jon's line-by-line confirmation of placements/captions, not a known placement backlog.

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| 5.1 | Blindsight hallway illustration — misconception opener | ✅ | `ch05/blind_sight.png` |
| 5.2 | Sea squirt / bilaterian life cycle illustration | ✅ | `ch05/sea_squirt_life.png` |
| 5.3 | Attention/salience filter illustration | ✅ | `ch05/Attention_filter.png` |
| 5.4 | Predictive model 5-step cycle | ✅ | `ch05/the_prediction_model.png` |
| 5.5 | Charles Bonnet syndrome illustration | ✅ | `ch05/charles_bonnet.png` |
| 5.6 | Neuromodulatory systems overview | ✅ | `ch05/fig_neuromodulatory_systems_section3.png` |
| 5.7 | Dopamine better/worse-than-expected illustration | ✅ | `ch05/Dopamine_1.png` |
| 5.8 | Schultz-style cue-conditioning reward-prediction-error paradigm | ✅ | `ch05/dopamine_error.png` |

**Open item:** confirm all 8 placements/captions during Jon's line-by-line review. If extra UUID/unreferenced files are later found in `docs/images/ch05/`, classify them as candidates/orphans, not as an automatic "seven-image placement" backlog.

---

## Chapter 6 — Sleep

All 5 core figures are wired. Optional figures remain unbuilt/on hold.

| # | Description | Status | Filename / note |
|---|-------------|--------|-----------------|
| 6.1 | Sleep as active maintenance system | ✅ | `ch06/fig_sleep_active_maintenance_system.png` |
| 6.2 | SCN circadian pathway | ✅ | `ch06/fig_scn_circadian_clock_entrainment.png` — supersedes old SCN pathway files. |
| 6.3 | Two-process model as practical lever diagram | ✅ | `ch06/fig_process_s_process_c_levers.png` |
| 6.4 | Sleep architecture hypnogram | ✅ | `ch06/fig_sleep_architecture_cycles.png` |
| 6.5 | Glymphatic clearance mechanism | ✅ | `ch06/fig_glymphatic_clearance_deep_sleep.png` |
| 6.6 | Drug tolerance/withdrawal mechanism | 🔲 | Reconsider fit; most drug content moved to Ch5. |
| 6.7 | Dream theories comparison diagram | 🔲 | On hold. |
| — | `hypnogram.mp4` | ⚠️ | Not wired. Decide whether videos belong in markdown chapters or lab pages. |

---

## Chapter 7 — Learning

All 9 figures are wired.

| # | Description | Status | Filename / note |
|---|-------------|--------|-----------------|
| 7.1 | Classical conditioning diagram | ✅ | `ch07/fig_classical_conditioning_ucs_cs.png` |
| 7.2 | Extinction is not erasure | ✅ | `ch07/fig_extinction_not_erasure.png` |
| 7.3 | Operant conditioning 2×2 | ✅ | `ch07/fig_operant_conditioning_2x2.png` |
| 7.4 | Reinforcement schedules comparison | ✅ | `ch07/fig_reinforcement_schedules.png` |
| 7.5 | Garcia & Koelling preparedness | ✅ | `ch07/fig_garcia_koelling_preparedness.png` — on-image Garcia date/citation wording is imperfect; chapter references are correct. |
| 7.6 | Bobo doll / observational learning setup | ✅ | `ch07/fig_bobo_doll_observational_learning.png` |
| 7.7 | Tolman's cognitive map / cross-maze latent-learning demo | ✅ | `ch07/fig_tolman_cognitive_map.png` |
| 7.8 | Dopamine uncertainty curve | ✅ | `ch07/fig_dopamine_uncertainty_curve.png` — on-image tagline oversimplifies; chapter caption handles nuance. |
| 7.9 | Dopamine reward-prediction-error paradigm | ✅ | `ch07/fig_dopamine_prediction_error_schultz.png` |
| — | Learning's place in the master loop | 🔲 | Do not build a one-off until a book-wide master-loop asset convention is decided. |

---

## Chapter 8 — Memory

All six completed SVGs wired into `ch08-memory.md` in Session 78.

| # | Description | Status | Filename / note |
|---|-------------|--------|-----------------|
| 8.1 | Atkinson-Shiffrin three-box model | ✅ wired | `ch08_atkinson_shiffrin_three_box_model.svg` — wired into Section 1. |
| 8.2 | Baddeley's working memory model | ✅ wired | `ch08_baddeley_working_memory_model.svg` — wired into Section 1; no episodic buffer, matching chapter text. |
| 8.3 | Levels of processing | ✅ wired | `ch08_levels_of_processing_shallow_to_deep.svg` — wired into Section 1; two-level gradient, not three-tier taxonomy. |
| 8.4 | Explicit vs. implicit memory taxonomy tree | ✅ wired | `ch08_memory_taxonomy_tree.svg` — wired before the memory systems table. |
| 8.5 | Serial position curve | ✅ wired | `ch08_serial_position_curve.svg` — wired into Section 3. |
| 8.6 | Reconstructive memory process | ✅ wired | `ch08_reconstructive_memory_process.svg` — wired into Section 4. |

**Next action:** Ch8 complete; see Current completion plan for remaining work.

---

## Chapter 9 — Thinking, Language & Intelligence

All 10 wirable figures are wired. Only optional/held items remain.

| # | Description | Status | Filename / note |
|---|-------------|--------|-----------------|
| 9.1 | Hierarchical category structure | ✅ | `ch09/fig_hierarchical_category_structure.png` |
| 9.2 | Prototype compression | ✅ | `ch09/fig_prototype_compression_dogs.png` |
| 9.3 | Luchins water-jar mental-set demo | ✅ | `ch09/fig_luchins_water_jar_mental_set.png` |
| 9.4 | Duncker candle problem | ✅ | `ch09/fig_functional_fixedness_candle_problem.png` |
| 9.5 | System 1 vs. System 2 dual-process diagram | ✅ | `ch09/fig_system1_system2_dual_process.png` |
| 9.6 | Linda conjunction fallacy / nested sets | ✅ | `ch09/fig_linda_conjunction_fallacy.png` |
| 9.7 | Wason selection task prompt | ✅ | `ch09/fig_wason_task_prompt.png` |
| 9.8 | Wason selection task answer | ✅ | `ch09/fig_wason_task_answer.png` |
| 9.9 | Biases as question substitution | ✅ | `ch09/fig_bias_question_substitution.png` |
| 9.10 | IQ standardization curve | ✅ | `ch09/fig_iq_bell_curve.png` |
| 9.11 | Generic start/process/decision/output flowchart | ⚠️ | Held; judged too generic/decorative. UUID file `0bb01f45-5416-457b-b62e-f91860aad01b-1.png`, not renamed. |
| — | Language acquisition timeline | 🔲 | Optional. |
| — | Multiple intelligences vs. g-factor comparison | 🔲 | Optional. |
| — | Huth et al. semantic-map illustration | 🔲 | Optional; no figure exists. |

---

## Chapter 10 — Lifespan Development

Final selected set wired into `source/chapters/ch10-lifespan-development.md` on 2026-07-09 and regenerated into `docs/chapters/10-lifespan-development.html`. Do not add further Ch10 figures unless Jon reopens the selection.

| # | Description | Method | Status | Filename / note |
|---|-------------|--------|--------|-----------------|
| 10.1 | Human extended development / life-history construction | GPT PNG | ? wired | `ch10_human_extended_development_life_history.png` — secondary altriciality + cooperative breeding as the mechanism behind long, plastic, expensive childhood. |
| 10.2 | Cross-sectional vs. longitudinal designs | GPT PNG | ? wired | `ch10_cross_sectional_vs_longitudinal.png` — two-panel schematic + cohort/attrition confounds. |
| 10.3 | Synaptic pruning / developmental tuning | GPT PNG | ? wired | `ch10_synaptic_pruning_developmental_tuning.png` — simpler overbuild/stabilize/prune figure selected over regional curve detail. |
| 10.4 | Piaget's four stages | GPT PNG | ? wired | `ch10_piaget_stages_sequence_with_caveat.png` — includes caveat that stages are a useful map, not a rigid calendar. |
| 10.5 | Vygotsky ZPD / scaffolding | GPT PNG | ? wired | `ch10_vygotsky_zpd_scaffolding.png` — good candidate for future AI-after-effort lab connection. |
| 10.6 | Attachment styles — reunion behavior | GPT PNG | ? wired | `ch10_attachment_styles_reunion_behavior.png` — corrected ambivalent range; no clinical-support footnote. |
| 10.7 | Adolescent dual systems crossover | SVG | ? wired | `ch10_adolescent_dual_systems_crossover.svg` — reward/novelty activation precedes fully mature prefrontal control. |
| 10.8 | Fluid vs. crystallized intelligence across adulthood | SVG | ? wired | `ch10_fluid_crystallized_adulthood.svg` — adult cognitive aging as tradeoff, not simple decline. |
| — | Fast—slow life-history continuum | GPT PNG | held/skipped | `ch10_fast_slow_life_history_continuum.png` — redundant with the human extended-development figure. |
| — | Synaptogenesis + pruning regional curves | SVG | held/skipped | `ch10_synaptogenesis_pruning_regional.svg` — too detailed relative to the simpler pruning/tuning figure. |
| — | Orchid/dandelion differential susceptibility | PNG | held/skipped | `ch10_orchid_dandelion_susceptibility.png` — prose currently sufficient; optional future rebuild only. |
| — | Secondary altriciality brain-completeness comparison | — | held/skipped | Redundant if the human extended-development figure covers the mechanism. |
| — | Full Erikson lifespan arc | — | held/skipped | Skip because the chapter treats Erikson cautiously and should not over-visualize the full stage theory. |

**Next action:** browser-check Ch10 rendered page for image loading, caption width, mobile scaling, and on-image text readability. No additional Ch10 figures are approved for wiring in the current final set.

---

## Chapter 11 — Social Psychology (Personality merged in as Section 5)

Seven figures are wired for Sections 1–5. Figures 11.6 and 11.7 were rebuilt as original programmatic figures in Session 78 to repair the missing files flagged in Session 75.

| # | Description | Status | Notes |
|---|-------------|--------|-------|
| 11.1 | Festinger & Carlsmith (1959) $1/$20 dissonance study | ✅ | `ch11/fig_festinger_carlsmith_dissonance.png` |
| 11.2 | Asch line-judgment conformity study | ✅ | `ch11/fig_asch_line_judgment_study.png` |
| 11.3 | Milgram obedience physical setup | ✅ | `ch11/fig_milgram_obedience_setup.png` |
| 11.4 | Stereotype / prejudice / discrimination triangle | ✅ | `ch11/fig_prejudice_stereotype_discrimination_triangle.png` |
| 11.5 | Person and situation influence diagram | ✅ | `ch11/fig_person_situation_influence_diagram.png` |
| 11.6 | Trait signal aggregation | ✅ wired | `ch11/fig_trait_signal_aggregation.png` plus editable SVG source — rebuilt from existing spec/alt text; single act r≈.29 vs. aggregated r≈.72 scatter plots. |
| 11.7 | Person × situation interaction | ✅ wired | `ch11/fig_person_situation_grid.png` plus editable SVG source — rebuilt from existing spec/alt text; weak-situation spread ≈4.7 points vs. strong-situation compression ≈0.8 points. |
| — | Attribution theory | 🔲 | Optional/superseded planning idea. |
| — | ELM dual-route diagram | 🔲 | Optional/superseded planning idea. |
| — | Bystander effect five-step model | 🔲 | Optional/superseded planning idea. |
| — | Social identity theory | 🔲 | Optional/superseded planning idea. |
| — | Big Five trait dimensions visual | 🔲 | Optional; chapter already uses a table. |

**Next action:** verify Ch5 only during line review; Ch11's broken-reference repair is complete.

---

## Chapter 12 — Emotion, Stress & Coping

Four core images are wired. Optional table-like figures remain unbuilt.

| # | Description | Status | Notes |
|---|-------------|--------|-------|
| 12.1 | Body-budget deposits/withdrawals diagram | ✅ | `ch12/fig_body_budget_deposits_withdrawals.png` |
| 12.2 | Russell core-affect circumplex | ✅ | `ch12/fig_core_affect_circumplex.png` |
| 12.3 | Cognitive light cone / HPA-axis pathway | ✅ | `ch12/fig_cognitive_light_cone_hpa_axis.png` |
| 12.4 | GAS three stages with functional-capacity curve | ✅ | `ch12/fig_general_adaptation_syndrome.png` |
| — | Emotion theories comparison | 🔲 | Optional; already a table in text. |
| — | Coping strategy matrix | 🔲 | Optional; text has a matching table. |

---

## Chapter 13 — Psychological Disorders & Therapy

All 9 current figures are wired. Only the biopsychosocial triangle remains unbuilt.

| # | Description | Status | Filename / note |
|---|-------------|--------|-----------------|
| 13.1 | Adaptive-response-becomes-costly arc | ✅ | `ch13/fig_adaptive_response_model_persists_cost_accumulates.png` |
| 13.2 | 3D criteria Venn diagram | ✅ | `ch13/fig_diagnostic_criteria_3d_model.png` |
| 13.3 | Diagnosis is not a cause flowchart | ✅ | `ch13/fig_diagnosis_is_not_a_cause_flowchart.png` |
| 13.4 | Diathesis-stress threshold model | ✅ | `ch13/fig_diathesis_stress_threshold_model.png` |
| 13.5 | Anxiety maintenance cycle | ✅ | `ch13/fig_anxiety_maintenance_cycle.png` |
| 13.6 | Depression maintenance loop | ✅ | `ch13/fig_depression_maintenance_loop.png` |
| 13.7 | Schizophrenia positive vs. negative symptoms | ✅ | `ch13/fig_schizophrenia_positive_negative_symptoms.png` |
| 13.8 | Therapy mechanisms map | ✅ | `ch13/fig_therapy_mechanisms_map.png` |
| 13.9 | AI vs. licensed therapist comparison | ✅ | `ch13/fig_ai_vs_therapist_comparison.png` |
| — | Biopsychosocial model triangle | 🔲 | No candidate image found; build only if it adds more than prose/table. |

---

## Current completion plan

### Tier 1 — cheap execution / no fresh design debate
1. **Verify Ch5 only during line review**; current evidence says all 8 figures are already wired, not unplaced.
2. **Browser-check Ch10** now that the final eight-figure set is wired: image loading, caption width, mobile scaling, on-image text readability.

### Tier 2 — main remaining new-build work
1. **Rebuild Prologue P.5** Human-AI alignment diagram if it remains artifacted.
2. **Ch10 figure selection is closed for this pass**; do not wire additional Ch10 images unless Jon explicitly reopens the set.

### Tier 3 — chapter-specific decisions
- Ch2: choose final image set and clean duplicate numbering before HTML conversion.
- Ch3: obtain originality sign-off for three lecture-slide-derived figures or rebuild them.
- Ch4: browser-check live rendering, confirm Webvision non-commercial license fit, and decide whether a depth-cues figure is still needed.
- Ch6/7/9/12/13: optional figures only; do not block core completion.

### Tier 4 — release-readiness audit
Run a whole-book check for broken image links, missing captions/alt text, missing attribution/license/public-sharing status, noncommercial/share-alike assets, stale UUID files, unreferenced image files, and any artwork with embedded figure numbers.
