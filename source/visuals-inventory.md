# Visuals Inventory — Psych101 Textbook
*Last updated: 2026-07-06 (Session 74) — Ch7 fully reconciled and wired (see below). Full-disk figure audit this session also found substantial new built-but-unplaced image sets in `docs/images/ch06/` (6 images), `docs/images/ch09/` (6 images, on top of the 5 already logged), `docs/images/ch11/` (7 images, Social-section content — Milgram, Asch, dissonance, stereotype triangle, person×situation), and `docs/images/ch12/` (5 images, including near-exact matches for the circumplex, GAS, and body-budget figures already in this file's Ch12 table). Only Ch7 was wired this session per Jon's priority call; the Ch6/Ch9/Ch11/Ch12 entries below are NOT yet updated to reflect those new files — treat those four chapters' tables as stale until a dedicated pass reconciles them, same caution this file has needed before.*
*Previously updated: 2026-07-03 (Session 62) — reconciled to the locked 13-chapter map (HANDOFF Session 60–61). Previously stale: this file still had the pre-split, pre-renumbering structure (old Ch5 "States of Consciousness" containing sleep figures, old Ch6 "Learning") and was missed by the Session 61 renumbering sweep, which only covered `source/chapters/*.md` and `docs/index.html`. Caught by a GPT session flagging the mismatch.*

Status key: ✅ File exists in `docs/images/` | ⚠️ Exists but needs review/decision | 🔲 Still needed

**Current locked chapter order:** 1 History & Approaches · 2 Research Methods & Statistics · 3 Neuroscience & Biological Bases · 4 Sensation & Perception · 5 Consciousness · 6 Sleep · 7 Learning · 8 Memory · 9 Thinking, Language & Intelligence · 10 Lifespan Development · 11 Social Psychology (Personality glossed within) · 12 Emotion, Stress & Coping · 13 Psychological Disorders & Therapy.

---

## Prologue
Markdown draft complete (v0.2). Awaiting Jon's line-by-line review. HTML conversion prompt written for Codex.

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| P.1 | Ebbinghaus forgetting curve (spaced review with review-reset intervals) | ✅ | `prologue/fig_forgetting_curve_ebbinghaus.png` — Jon/GPT original |
| P.2 | Kruger & Dunning (1999) Study 2 — actual bar data by quartile (not "Mount Stupid" curve) | ✅ | `prologue/fig_dunning_kruger_actual_data.svg/.png` — programmatic figure built from Study 2 logical reasoning data |
| P.3 | "Exposure Is Not Learning" decision tree | ✅ | `prologue/learning_exposure_retrieval_decision_tree.svg/.png` — Jon/GPT original |
| P.4 | "AI Can Replace Retrieval or Support It" two-column diagram | ✅ | `prologue/ai_replacement_vs_scaffolding.svg/.png` — Jon/GPT original |
| P.5 | Human-AI Cognitive Alignment — grounding/context diagram | ⚠️ | GPT version exists but has rendering artifacts (strikethrough text, stray nodes). Needs rebuild or GPT retry before use. Intended for Section 8 (AI unit). |

---

## Chapter 1 — History & Approaches
All figures complete. HTML is live.

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| 1.1 | Psychology scope map | ✅ | `ch01/fig_1_1_scope_map.png` |
| 1.2 | Maslow hierarchy | ✅ | `ch01/fig_1_2_maslow_hierarchy.png` |
| 1.3 | Skinner / Chomsky / LLM language diagram | ✅ | `ch01/fig_1_3_language_explanations.png` |
| — | Portraits: Wundt, James, Watson, Freud, Skinner | ✅ | `ch01/portrait_*.jpg` |

---

## Chapter 2 — Research Methods & Statistics
Jon is generating his own images — hold HTML conversion until resolved.

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| 2.1 | Correlation scatter (direction/strength) | ✅ | `ch02/fig2-1-correlation.png/.svg` |
| 2.2 | Third-variable problem diagram | ✅ | `ch02/fig2-2-third-variable.png/.svg` |
| 2.3 | Experiment flowchart (IV/DV/control) | ✅ | `ch02/fig2-3-experiment-flowchart.png/.svg` |
| 2.4 | Central limit theorem | ✅ | `ch02/fig2-4-clt.png/.svg` |
| 2.5 | Evidence ladder (Describe→Relate→Test→Estimate→Replicate) | ✅ | `ch02/fig2-5-evidence-ladder.png/.svg` |
| 2.6 | Random sampling vs. random assignment | ✅ | `ch02/fig2-6-random-sampling-vs-assignment.png/.svg` |
| 2.7 | Operational definition / reliability / validity | ✅ | `ch02/fig2-7-operational-definition-reliability-validity.png/.svg` |
| 2.8 | Type I / Type II error matrix with AI analogy | ✅ | `ch02/fig2-8-type-i-type-ii-error-matrix-ai.png/.svg` |
| 2.x | Double-blind placebo-controlled study flowchart | ✅ | `ch02/fig2-double-blind-placebo.png` |
| — | Jon's own images | ⚠️ | **On hold** — Jon is generating; do not convert Ch2 to HTML until resolved |
| ⚠️ | Numbering note | — | Old files `fig2-5-sampling-vs-assignment` and `fig2-6-reliability-validity` still in folder — these were earlier drafts. When converting to HTML, decide which set to use and clean up duplicates. |

---

## Chapter 3 — Neuroscience & Biological Bases
All 9 figures exist. Awaiting Jon's line-by-line review before HTML conversion.

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| 3.1 | Neuron anatomy / signal direction | ✅ | `ch03/fig3_1_neuron_anatomy_signal_direction.png/.svg` |
| 3.2 | Action potential / threshold graph | ✅ | `ch03/fig3_2_action_potential_threshold.png/.svg` |
| 3.3 | Misconception card: stimulus strength vs. firing rate | ✅ | `ch03/fig3_3_misconception_action_potential_lecture.jpg` (from lecture slides — confirm provenance with Jon) |
| 3.4 | Neurotransmitter vs. hormone (synapse vs. bloodstream) | ✅ | `ch03/fig3_4_neurotransmitter_vs_hormone.png/.svg` |
| 3.5 | Agonist/antagonist diagram | ✅ | `ch03/fig3_5_agonist_antagonist_lecture.jpg` (from lecture slides — confirm provenance) |
| 3.6 | Fast (SAM) / slow (HPA) stress response pathways | ✅ | `ch03/fig3_6_stress_response_fast_slow.png/.svg` |
| 3.7 | ANS balance (sympathetic vs. parasympathetic) | ✅ | `ch03/fig3_7_ans_balance_lecture.jpg` (from lecture slides — confirm provenance) |
| 3.8 | Brain imaging tradeoffs (fMRI/EEG/PET spatial-temporal grid) | ✅ | `ch03/fig3_8_brain_imaging_tradeoffs.png/.svg` |
| 3.9 | Split-brain logic diagram | ✅ | `ch03/fig3_9_split_brain_logic.png/.svg` |

**Open items for Jon:** Confirm the three lecture-deck-sourced figures (3.3, 3.5, 3.7) are original — Session 8 audit cleared them but Jon hasn't formally signed off. Body word count ~5,800 (over target).

Note: v0.7 (Session 51) renumbered two figures not yet reflected above — ANS push-pull 3.9→3.8, brain lobes 3.10→3.9, and added a cephalization/action-selection opener diagram (proposed, not yet built). Reconcile against `ch03-neuroscience-biological-bases.md`'s actual figure references before Ch3 HTML sync.

---

## Chapter 4 — Sensation & Perception
6 SVG/PNG figures exist; 3 richer infographic versions added as alternates. Editorial pass complete (Session 54) with additional figures wired since this inventory's figures were last confirmed — reconcile against `04-sensation-perception.html` (9 numbered figures, 4.1–4.9) before treating this list as current.

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| 4.1 | Sensation/perception pipeline (stimulus → transduction → brain → perception) | ✅ | `ch04/fig4_1_sensation_perception_pipeline.png/.svg` |
| 4.2 | Signal detection matrix (hit/miss/FA/CR) | ✅ | `ch04/fig4_2_signal_detection_matrix.png/.svg` |
| 4.3 | Retina: rods/cones/fovea/blind spot | ✅ | `ch04/fig4_3_retina_rods_cones_fovea_blindspot.png/.svg` |
| 4.3b | Retina infographic (richer, "The Retina Is Not a Camera Sensor") | ✅ | `ch04/fig4_3_retina_infographic.png` — in use per Session 41 decision (richer infographic over SVG) |
| 4.4 | Gestalt principles panel (figure-ground, proximity, similarity, closure) | ✅ | Replaced with 5-panel OpenStax composite (Session 41): `ch04/fig_gestalt_principles_openstax.png` |
| 4.5 | Cochlea / place theory vs. frequency theory | ✅ | `ch04/fig4_5_cochlea_place_frequency_theory.png/.svg` |
| 4.5b | Cochlea/pitch infographic (richer, "Pitch Is Coded in Two Ways") | ✅ | `ch04/fig4_5_cochlea_infographic.png` — in use per Session 41 decision |
| 4.6 | Gate control theory of pain | ✅ | `ch04/fig4_6_gate_control_pain.png/.svg` — unchanged, still the best option per Session 41 |
| 4.x | Weber's Law inline figure | ✅ | `ch04/ch04_webers_law_weights.png` — Jon's GPT infographic, swapped in Session 56 |
| 🔲 | Depth cues illustration (monocular vs. binocular) | 🔲 | Not yet made — chapter discusses linear perspective, relative size, binocular disparity |
| 🔲 | Trichromatic + opponent-process color vision diagram | 🔲 | Two-stage model: 3 cones → opponent ganglion channels |

---

## Chapter 5 — Consciousness
**Split from the old combined "Ch5 — States of Consciousness" in Session 59** — this entry now covers only consciousness-proper content (blindsight, attention/salience, prediction error, drugs-as-evidence). Sleep content moved to the new Chapter 6 below. **All 8 figures now wired (Session 63)** — placements below reviewed against the actual chapter prose (not just guessed from filenames) before embedding; still awaiting Jon's confirmation during his line-by-line review.

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| 5.1 | Blindsight hallway illustration — misconception opener | ✅ | `ch05/blind_sight.png` — wired Session 63 |
| 5.2 | Sea squirt / bilaterian life cycle illustration — Section 1 opener | ✅ | `ch05/sea_squirt_life.png` — wired Session 63 |
| 5.3 | Attention/salience filter illustration — Section 2, Do Not Confuse box | ✅ | `ch05/Attention_filter.png` — wired Session 63 |
| 5.4 | Predictive model 5-step cycle — Section 2, Prediction Error Loop | ✅ | `ch05/the_prediction_model.png` — wired Session 63 |
| 5.5 | Charles Bonnet syndrome illustration — Section 2, Controlled Hallucination | ✅ | `ch05/charles_bonnet.png` — wired Session 63 |
| 5.6 | Neuromodulatory systems — Section 3 opener (GABA, DA+NE, 5-HT2A, Endocannabinoid, Opioid, broadcast vs. local) | ✅ | `ch05/fig_neuromodulatory_systems_section3.png` — wired Session 62; renumbered 5.1→5.6 Session 63 now that earlier-appearing figures are wired |
| 5.7 | Dopamine "better/worse than expected" illustration — Section 3, dopamine/stimulants | ✅ | `ch05/Dopamine_1.png` — wired Session 63 |
| 5.8 | Classic Schultz et al. cue-conditioning reward-prediction-error paradigm — Section 3, immediately after Fig 5.7 | ✅ | `ch05/dopamine_error.png` — wired Session 63 |
| ✅ | Cleanup note — RESOLVED (Session 74) | done | The orphaned two-process-model and hypnogram copies were deleted by Jon (Session 66); the last two orphans, `fig_scn_pathway.png/.svg`, were deleted this session using `allow_cowork_file_delete` — the "OneDrive permission restriction" every session since Session 32 had treated as a hard block turned out to just be Cowork's standard delete-permission gate, unblockable with that tool. `ch05/` is now clean of Ch6-only figures. |

**Open items for Jon:** Confirm placement of the seven unplaced images above (deferred to next session per Jon's request — after this inventory fix). Chapter awaiting full line-by-line review; all 11 [VOICE] tags filled as of Session 62.

---

## Chapter 6 — Sleep
**All 5 figures now wired (Session 75, 2026-07-07).** A batch of 6 GPT-generated UUID-named images plus a `hypnogram.mp4` had been sitting in `docs/images/ch06/` since Session 74's full-disk audit, alongside the chapter's own `ch06_figure_specs.md` planning file (created Session 63) — checked that spec first, then viewed all 6 images directly against both the spec and the actual chapter prose before placing anything. 5 of the 6 images matched planned figures closely; the 6th (`4a0790d5...`) was a duplicate/alternate draft of the opening-anchor concept and was not used (denser per-panel text than the project's figure-style guardrails call for). Two of the three previously-active figures (SCN pathway, hypnogram) are now superseded by richer versions with the same core content; the two-process model, retired from the chapter text since Session 58, is back — rebuilt as the practical lever diagram the spec's own decision note asked for, rather than a generic textbook curve.

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| 6.1 | Opening-anchor infographic: sleep as active maintenance across 5 jobs (timing, architecture, cleaning, consolidation, regulation) | ✅ wired | `ch06/fig_sleep_active_maintenance_system.png` |
| 6.2 | SCN circadian pathway, richer version (light → retina → SCN → melatonin/cortisol/temperature/sleep-wake outputs) | ✅ wired | `ch06/fig_scn_circadian_clock_entrainment.png` — **supersedes** `fig_scn_pathway.png/.svg` (now orphaned) |
| 6.3 | Two-process model as a lever diagram (Process C + Process S curves, keyed to the 5 interventions in the existing table) | ✅ wired | `ch06/fig_process_s_process_c_levers.png` — reinstates the concept retired since Session 58; **supersedes** `fig_two_process_sleep_model.png/.svg` (now orphaned) |
| 6.4 | Sleep architecture hypnogram, richer version (5 ~90-min cycles + dominant maintenance function per part of night) | ✅ wired | `ch06/fig_sleep_architecture_cycles.png` — **supersedes** `fig_sleep_hypnogram.png/.svg` (now orphaned) |
| 6.5 | Glymphatic clearance mechanism (CSF inflow → interstitial exchange → waste outflow, awake vs. deep sleep) | ✅ wired | `ch06/fig_glymphatic_clearance_deep_sleep.png` |
| 6.6 | Drug tolerance/withdrawal mechanism | 🔲 not built | Reconsider fit — Ch6 v0.2 moved most drug content to Ch5; confirm this still belongs here before building |
| 6.7 | Dream theories comparison diagram | 🔲 not built | On hold |

**Orphaned files awaiting deletion:** `fig_scn_pathway.png/.svg`, `fig_sleep_hypnogram.png/.svg`, `fig_two_process_sleep_model.png/.svg` (all superseded, confirmed unreferenced), the 5 UUID-named source files for the images above, and the unused duplicate opening-anchor draft (`4a0790d5-c1b7-4044-96fc-eda99e837559.png`) — see HANDOFF for deletion status.

**Not wired, open decision for Jon:** `hypnogram.mp4` — a video asset in the same folder. Markdown chapters have no established video-embed convention, and content chapters are meant to link out to labs rather than carry embedded media, so this wasn't forced into either format; flagged rather than guessed at.

**Open items for Jon:** Confirm the `psych101_awesome-sauce` "sleep" demo is fair to reuse or prologue-exclusive. Chapter awaiting Jon's line-by-line review. Decide fit/placement of `hypnogram.mp4`.

---

## Chapter 7 — Learning
*(was "Chapter 6" in the old numbering)* **All 9 figures now wired (Session 74).** Found built-but-unplaced in `docs/images/ch07/` as GPT-generated UUID-named files; copied to descriptor filenames per the project naming convention and embedded into `ch07-learning.md` in reading order. The 9 UUID-named originals were successfully deleted the same session via `allow_cowork_file_delete` (the long-assumed "can't delete from this OneDrive mount" restriction turned out to be Cowork's standard delete-permission gate, not a hard block — see HANDOFF Session 74).

| # | Description | Status | Notes |
|---|-------------|--------|-------|
| 7.1 | Classical conditioning diagram (before/during/after conditioning, UCS/UCR/CS/CR) | ✅ wired | `ch07/fig_classical_conditioning_ucs_cs.png` |
| 7.2 | "Extinction Is Not Erasure" — spine-flavored version: original CS→US association intact underneath new inhibitory learning, spontaneous recovery/renewal shown as the old layer resurfacing under stress/context change | ✅ wired | `ch07/fig_extinction_not_erasure.png` — this is the Session 65 spine work order §E.1 figure, built essentially exactly as specified |
| 7.3 | Operant conditioning 2×2 (positive/negative × reinforcement/punishment) | ✅ wired | `ch07/fig_operant_conditioning_2x2.png` |
| 7.4 | Reinforcement schedules comparison (FR/VR/FI/VI cumulative response curves) | ✅ wired | `ch07/fig_reinforcement_schedules.png` |
| 7.5 | Garcia & Koelling crossed associations (taste↔illness fast, audiovisual↔shock fast, diagonals weak) | ✅ wired | `ch07/fig_garcia_koelling_preparedness.png` — note: the image's own on-image text cites "Garcia (1972)" separately from Koelling; chapter body/References correctly use Garcia & Koelling (1966) throughout, mismatch is only inside the image asset |
| 7.6 | Bobo doll / observational learning setup | ✅ wired | `ch07/fig_bobo_doll_observational_learning.png` |
| 7.7 | Tolman's cognitive map / cross-maze latent-learning demonstration | ✅ wired | `ch07/fig_tolman_cognitive_map.png` — not in this inventory's prior list; a bonus match found during Session 74's folder inventory |
| 7.8 | Dopamine uncertainty curve (Fiorillo/Schultz framing — response scales with reward probability, peaks at 50%) | ✅ wired | `ch07/fig_dopamine_uncertainty_curve.png` — flagged: the image's own on-image caption ("Dopamine causes focus and attention") oversimplifies past this chapter's anticipation/motivation framing; the curve itself is accurate and citable, chapter caption does not repeat the on-image line |
| 7.9 | Dopamine reward-prediction-error paradigm (Schultz classic cue-conditioning teaching-signal figure) | ✅ wired | `ch07/fig_dopamine_prediction_error_schultz.png` — placed immediately after 7.8, same two-dopamine-images-one-paragraph precedent as Ch5 |
| — | Learning's place in the master loop (highlight "prediction error → updating or defense") | 🔲 | Still not built — Session 65 spine work order §E.4 idea; check for a book-wide master-loop graphic before building a one-off |

---

## Chapter 8 — Memory
*(was "Chapter 7" in the old numbering)* No figures yet. `docs/images/ch08/` does not exist.

| # | Description | Status | Notes |
|---|-------------|--------|-------|
| 8.1 | Three-box / Atkinson-Shiffrin model (sensory → STM → LTM with encoding/retrieval arrows) | 🔲 | Core |
| 8.2 | Baddeley's working memory model (phonological loop, visuospatial sketchpad, episodic buffer, central executive) | 🔲 | Core |
| 8.3 | Levels of processing (shallow → phonemic → semantic depth ladder) | 🔲 | Core |
| 8.4 | Serial position effect curve (primacy + recency humps) | 🔲 | Core — simple line graph |
| 8.5 | Explicit vs. implicit memory taxonomy tree | 🔲 | Core — episodic/semantic/procedural/priming branches |
| 8.6 | Misinformation effect / reconstructive memory diagram | 🔲 | Optional but useful |

---

## Chapter 9 — Thinking, Language & Intelligence
**All 10 wirable figures now wired (Session 75, 2026-07-07).** A batch of 6 new GPT-generated images had joined the 5 already-built-but-unwired figures logged since Session 68, for 11 total, all zero wired — confirmed via grep before this session and again after. Viewed every image directly against the chapter's actual prose before placing anything; renumbered to match reading order through the chapter (Sections 1, 2, then 4), which does not match the old inventory numbering below — treat this table as authoritative going forward.

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| 9.1 | Hierarchical category structure (superordinate → basic → subordinate, illustrated with birds) | ✅ wired | `ch09/fig_hierarchical_category_structure.png` — caption flags that the image uses a birds example, not the chapter's own dog example |
| 9.2 | Prototype compression (episodic dog encounters → shared features → prototype → new-case recognition) | ✅ wired | `ch09/fig_prototype_compression_dogs.png` |
| 9.3 | Luchins' water-jar mental-set demo | ✅ wired | `ch09/fig_luchins_water_jar_mental_set.png` |
| 9.4 | Duncker's candle problem (functional fixedness) | ✅ wired | `ch09/fig_functional_fixedness_candle_problem.png` |
| 9.5 | System 1 vs. System 2 dual-process diagram | ✅ wired | `ch09/fig_system1_system2_dual_process.png` — fills the previously-optional slot this table used to list at 9.6 |
| 9.6 | Conjunction fallacy / nested sets (bank tellers ⊃ feminist bank tellers) | ✅ wired | `ch09/fig_linda_conjunction_fallacy.png` |
| 9.7 | Wason selection task (prompt) | ✅ wired | `ch09/fig_wason_task_prompt.png` |
| 9.8 | Wason selection task (answer) | ✅ wired | `ch09/fig_wason_task_answer.png` |
| 9.9 | Biases as question substitution table (unifies availability/representativeness/confirmation/framing/anchoring) | ✅ wired | `ch09/fig_bias_question_substitution.png` — placed as a Section 2-closing synthesis figure, not tied to any single bias |
| 9.10 | IQ standardization curve (mean=100, SD=15) | ✅ wired | `ch09/fig_iq_bell_curve.png` |
| 9.11 | Generic "Start → Input Data → Process → Decision? → Output Result" flowchart | 🔲 held, open decision | Reviewed and judged too generic/decorative to teach anything chapter-specific (no algorithm/heuristic contrast). Asked Jon directly; his call was to hold rather than use or discard — revisit in a future session. UUID file `0bb01f45-5416-457b-b62e-f91860aad01b-1.png`, not yet renamed. |
| — | Language acquisition timeline (babbling → words → two-word → grammar) | 🔲 not built | Optional — supports nativist vs. behaviorist section |
| — | Multiple intelligences vs. g-factor comparison | 🔲 not built | Optional — Gardner/Spearman contrast |
| 9.9 | Huth et al. (2016) semantic-map illustration (meaning distributed across cortex, not filed in word-boxes) | 🔲 | Optional — idea logged Session 68 during the Section 1 "concept as location" trim; no figure exists, don't reference one until built |

**Resolved (Session 68):** the image folder was actually still named `docs/images/ch08/` on disk (not `ch09/` as this inventory previously claimed) — renamed to `ch09/` this session, and it worked (unlike past delete attempts on this OneDrive mount). The filenames themselves were never prefixed with `ch08_` — that detail in the prior version of this note was inaccurate; corrected above to the real filenames. **Still open:** actually embedding figures 9.1–9.5 into the chapter markdown, which has never happened at any prior version.

---

## Chapter 10 — Lifespan Development
*(was "Chapter 9" in the old numbering)* No figures yet.

| # | Description | Status | Notes |
|---|-------------|--------|-------|
| 10.1 | Piaget's four stages (age ranges, key achievement, sample task) | 🔲 | Core — chapter covers all four |
| 10.2 | Attachment styles (Ainsworth: secure / insecure-avoidant / insecure-anxious / disorganized) | 🔲 | Core |
| 10.3 | Vygotsky ZPD diagram (actual development / ZPD / beyond current reach, with scaffolding arrow) | 🔲 | Core |
| 10.4 | Lifespan developmental arc or Erikson psychosocial stages (abbreviated — chapter trimmed Erikson significantly) | 🔲 | Optional — chapter deprioritized Erikson; may not need full figure |
| 10.5 | Brain maturation / prefrontal cortex development through adolescence | 🔲 | Optional — dual-systems model (Casey et al.) |

---

## Chapter 11 — Social Psychology (Personality merged in as Section 5, Session 71/72)
*(was "Chapter 10" in the old numbering; the old standalone "Chapter 11 — Personality" holding-pen file, `ch11b-personality.md`, is now merged into this chapter as Section 5 — see `ch11-social-psychology.md`)* **5 new figures wired for Sections 1–4 (Session 75, 2026-07-07)** — these were not the specific topics this table had previously planned for 11.1–11.5 (see superseded list below); a Session 74 audit found 6 GPT-generated images already sitting in `docs/images/ch11/`, unplanned and unwired, and this session placed the 5 usable ones directly rather than waiting for the originally-planned topics to be built. **Also discovered this session: 11.6 and 11.7, previously listed here as "✅ built and wired," are not — both files are missing from disk entirely** (repo-wide search confirmed), despite HANDOFF's Session 23/28 log describing them as built. This table's own prior "✅ built and wired" status for both was wrong. Flagged in the chapter file itself with inline HTML comments; not fixed, per Jon's explicit call this session.

| # | Description | Status | Notes |
|---|-------------|--------|-------|
| 11.1 | Festinger & Carlsmith (1959) $1/$20 dissonance study | ✅ wired | `ch11/fig_festinger_carlsmith_dissonance.png` — Section 1 |
| 11.2 | Asch line-judgment conformity study | ✅ wired | `ch11/fig_asch_line_judgment_study.png` — Section 2 |
| 11.3 | Milgram obedience physical setup (teacher/learner/experimenter rooms) | ✅ wired | `ch11/fig_milgram_obedience_setup.png` — Section 2, inside the Classic Study Walkthrough box. A second version with a baked-in title typo ("Studes") existed; Jon confirmed the clean version, typo version deleted. |
| 11.4 | Stereotype / prejudice / discrimination triangle | ✅ wired | `ch11/fig_prejudice_stereotype_discrimination_triangle.png` — Section 3 |
| 11.5 | Person and situation influence diagram (traits/goals/past learning vs. norms/authority/group pressure/stakes → behavior) | ✅ wired | `ch11/fig_person_situation_influence_diagram.png` — Section 5, ahead of the broken 11.6/11.7 pair below |
| 11.6 | Trait signal aggregation (single act r≈.29 vs. aggregated r≈.72 scatter plots) | ❌ **broken — file missing** | Referenced in `ch11-social-psychology.md` as `../images/ch11/fig_trait_signal_aggregation.png`; file does not exist anywhere in the repo. HANDOFF Sessions 23/28 describe this as built for the old standalone Personality chapter — lost at some point, not this session. Flagged inline in the chapter; Jon's call is to leave flagged, not rebuild or remove yet. |
| 11.7 | Person × situation interaction (helping behavior across weak/strong situations) | ❌ **broken — file missing** | Same issue as 11.6 — `fig_person_situation_grid.png` does not exist anywhere in the repo. Flagged inline in the chapter. |
| — | Attribution theory (dispositional vs. situational × self vs. other) | 🔲 not built | Superseded planning idea, still open if wanted |
| — | ELM dual-route diagram (central vs. peripheral route to persuasion) | 🔲 not built | Superseded planning idea, still open if wanted |
| — | Bystander effect: five-step decision model | 🔲 not built | Superseded planning idea, still open if wanted |
| — | Social identity theory (in-group favoritism / out-group derogation) | 🔲 not built | Superseded planning idea, still open if wanted |
| — | Big Five trait dimensions visual | 🔲 not built | Optional — chapter uses a table; figure would supplement |

**Numbering note:** 11.1–11.5 now match the chapter's actual reading order (Sections 1, 2, 2, 3, 5) — this replaces the old planned topic list above, which was never built. 11.6/11.7 keep their existing numbers (Personality is Section 5, after the four Social sections) but are broken, not built — see above.

---

## Chapter 12 — Emotion, Stress & Coping
**4 of 5 audited images wired (Session 75, 2026-07-07).** A Session 74 audit found 5 GPT-generated images sitting in `docs/images/ch12/`, unplanned relative to the topic list below but strong individual matches once viewed against the actual chapter prose.

| # | Description | Status | Notes |
|---|-------------|--------|-------|
| 12.1 | Body-budget deposits/withdrawals diagram | ✅ wired | `ch12/fig_body_budget_deposits_withdrawals.png` — Section 1 |
| 12.2 | Russell's (1980) circumplex of affect (valence × arousal 2D plane with emotion labels) | ✅ wired | `ch12/fig_core_affect_circumplex.png` — Section 1 |
| 12.3 | Cognitive light cone / HPA-axis pathway (simulated vs. physical threats → same cortisol cascade) | ✅ wired | `ch12/fig_cognitive_light_cone_hpa_axis.png` — Section 3, new content added at the Session 72 spine-alignment pass, previously unillustrated |
| 12.4 | GAS three stages (alarm / resistance / exhaustion) with functional-capacity-over-time curve | ✅ wired | `ch12/fig_general_adaptation_syndrome.png` — Section 3 |
| — | Emotion theories comparison (James-Lange / Cannon-Bard / Schachter-Singer / Constructed) | 🔲 not built | Optional — already a table in text; figure would reinforce |
| — | Coping strategy matrix (problem-focused vs. emotion-focused × high vs. low controllability) | 🔲 not built | Optional — text has a matching table |

**Sent elsewhere, not wired here:** a 5th image in the same batch ("Adaptive response → Model persists → Cost accumulates," tagline "Therapy: update, regulate, relearn") reads as Ch13's own spine framing, not this chapter's content. Jon's call: send it to Ch13 rather than force it in or leave it stranded. Copied to `docs/images/ch13/fig_adaptive_response_model_persists_cost_accumulates.png` — see Ch13 entry below.

---

## Chapter 13 — Psychological Disorders & Therapy
1 figure exists and is wired. **Two unwired images newly logged this session (2026-07-07), neither investigated in depth — flagging only, this session's task was Ch12:**
- `df03186c-1d07-4330-9b6c-c707f471829d-_edit.png` — sitting in `docs/images/ch12/` [sic, actually `docs/images/ch13/`] since before this session; no prior HANDOFF entry mentions it, so it wasn't caught by the Session 74 audit (which covered Ch6/7/9/11/12 but apparently not Ch13). Content not reviewed.
- `fig_adaptive_response_model_persists_cost_accumulates.png` — sent here from Ch12 this session (see above). Depicts a three-panel "Adaptive response → Model persists → Cost accumulates" arc with a "Therapy: update, regulate, relearn" tagline — a strong visual match for Ch13's own spine question ("when does a protective model become costly?"), not reviewed against the chapter's actual prose or placed anywhere yet.

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| 13.1 | Anxiety maintenance cycle (trigger → anxiety rises → avoidance → relief → loop, with ERP break) | ✅ wired | `ch13/fig_anxiety_maintenance_cycle.png` — filename corrected here; this table previously listed it as `fig13_1_anxiety_maintenance_cycle.png`, which does not match the actual file on disk |
| 13.2 | Diathesis-stress model (vulnerability × stressor interaction) | 🔲 not built | Core |
| 13.3 | Biopsychosocial model triangle (biological / psychological / social contributors) | 🔲 not built | Core — chapter opens with this |
| 13.4 | 3D criteria diagram (Distress / Dysfunction / Deviance) | 🔲 not built | Core — chapter's diagnostic framework |
| 13.5 | Treatment comparison (disorder category × evidence-based therapy type) | 🔲 not built | Optional — Dodo Bird Verdict discussion |
| — | Adaptive-response-becomes-costly arc (see above) | 🔲 not placed | New this session — strong candidate for the "protective model becomes costly" spine framing; not yet matched to a specific paragraph |
| — | Unidentified image (`df03186c...`) | 🔲 not reviewed | New discovery this session — content unknown, not yet viewed |

---

## Summary: What Still Needs to Be Made

### Highest priority (no figures at all yet):
- **Ch8 (Memory):** 5–6 figures — Atkinson-Shiffrin, Baddeley, levels-of-processing, serial position, memory taxonomy
- **Ch10 (Lifespan):** 3–4 figures — Piaget stages, Ainsworth attachment, Vygotsky ZPD
- **Ch11 (Social Psych):** 4–5 figures — Milgram setup, attribution model, ELM, bystander steps
- **Ch12 (Emotion/Stress):** 4 figures — circumplex, GAS, body-budget, coping matrix

### Partially done — a few more needed:
- **Ch5 (Consciousness):** Fig 5.1 done; 7 built-but-unplaced images awaiting section assignment (see Ch5 table above)
- **Ch6 (Sleep):** all 5 core figures wired (Session 75) — only the two low/medium-priority optional figures remain unbuilt: dream theories comparison (6.7, on hold) and tolerance/withdrawal (6.6, reconsider fit post-split)
- **Ch9 (Thinking, Language & Intelligence):** all 10 wirable figures done (Session 75); only two low-priority optional figures remain unbuilt (language acquisition timeline, multiple-intelligences-vs-g comparison) plus one held generic flowchart (9.11, Jon's call pending)
- **Ch13 (Disorders):** Diathesis-stress (13.2), biopsychosocial (13.3), 3D criteria (13.4)

### Decisions needed from Jon:
- Ch2: Which figure set to use (old vs. new numbering)? What are his own images?
- Ch3: Confirm the three lecture-deck-sourced figures (3.3, 3.5, 3.7) are original
- Ch4: Reconcile this inventory against the actual HTML (9 figures, 4.1–4.9) — this list is behind
- Ch5: Confirm placement of the 7 unplaced images (next session)
- Ch9: folder rename resolved (Session 68); still need a decision on whether/where to embed the 5 existing figures in the chapter markdown
- Prologue: Dunning-Kruger — redraw from actual data, or add caveat, or drop?
