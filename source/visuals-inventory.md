# Visuals Inventory — Psych101 Textbook
*Last updated: 2026-07-03 (Session 62) — reconciled to the locked 13-chapter map (HANDOFF Session 60–61). Previously stale: this file still had the pre-split, pre-renumbering structure (old Ch5 "States of Consciousness" containing sleep figures, old Ch6 "Learning") and was missed by the Session 61 renumbering sweep, which only covered `source/chapters/*.md` and `docs/index.html`. Caught by a GPT session flagging the mismatch.*

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
| ⚠️ | Cleanup note | pending manual deletion | `ch05/` folder still contains orphaned copies of the two-process model, hypnogram, and SCN pathway figures (now Ch6's) — same files exist correctly in `ch06/`; confirmed unused by any ch05 reference (grep-verified Session 63). Bash could not delete them (OneDrive permission restriction, same issue as Session 32) — Jon needs to delete `fig_scn_pathway.png/.svg`, `fig_sleep_hypnogram.png/.svg`, and `fig_two_process_sleep_model.png/.svg` from `docs/images/ch05/` manually in File Explorer. |

**Open items for Jon:** Confirm placement of the seven unplaced images above (deferred to next session per Jon's request — after this inventory fix). Chapter awaiting full line-by-line review; all 11 [VOICE] tags filled as of Session 62.

---

## Chapter 6 — Sleep
**New chapter, split from old combined Ch5 in Session 59.** Two figures already existed from the pre-split chapter and correctly now live here; SCN pathway also complete.

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| 6.1 | Two-process sleep model (Process C circadian + Process S pressure) | ✅ | `ch06/fig_two_process_sleep_model.svg/.png` |
| 6.2 | Sleep hypnogram (Wake/REM/N1/N2/N3 across 8 hrs) | ✅ | `ch06/fig_sleep_hypnogram.svg/.png` |
| 6.3 | SCN circadian pathway (light → retina → SCN → pineal → melatonin) | ✅ | `ch06/fig_scn_pathway.svg/.png` |
| 6.4 | Drug tolerance/withdrawal mechanism | 🔲 | Reconsider fit — Ch6 v0.2 moved most drug content to Ch5; confirm this still belongs here before building |
| 6.5 | Dream theories comparison diagram | 🔲 | On hold |

**Open items for Jon:** Confirm the `psych101_awesome-sauce` "sleep" demo is fair to reuse or prologue-exclusive. Chapter awaiting Jon's line-by-line review.

---

## Chapter 7 — Learning
*(was "Chapter 6" in the old numbering)* No figures yet. `docs/images/ch07/` does not exist.

| # | Description | Status | Notes |
|---|-------------|--------|-------|
| 7.1 | Classical conditioning diagram (UCS/UCR → CS/CR acquisition, extinction, recovery) — spine-flavored version: original CS→US association intact *underneath* a new inhibitory layer, with spontaneous recovery/renewal shown as the old layer resurfacing under stress/context change ("extinction is not erasure") | 🔲 | Core — needed. Framing per Session 65 spine work order §E.1 |
| 7.2 | Operant conditioning 2×2 (positive/negative × reinforcement/punishment) | 🔲 | Core — needed; this trips up most students. Same grid the "Reinforcement vs. Punishment Classifier" demo (`docs/teaching/demo-ideas.md`) uses |
| 7.3 | Reinforcement schedules comparison (FR/VR/FI/VI cumulative response curves) | 🔲 | Core — the classic staircase curves |
| 7.4 | Dopamine prediction error / uncertainty diagram (Sapolsky/Schultz/Fiorillo framing) — three-panel: response to unexpected reward → shift to predictive cue → dip on omission | 🔲 | Important — this chapter "delivers in full" the dopamine mechanism Ch5 previews. Pairs with "Prediction Error / Dopamine Animator" demo |
| 7.5 | Bobo doll / observational learning setup | 🔲 | Optional — original illustration needed (can't use photo) |
| 7.6 | Learning's place in the master loop (highlight the "prediction error → updating or defense" arc) | 🔲 | New (Session 65 spine work order §E.4) — reuses the book's master-loop motif for cross-chapter consistency; check whether a book-wide master-loop graphic already exists before building a one-off |
| 7.7 | Garcia & Koelling crossed associations (taste↔illness fast, audiovisual↔shock fast, diagonals weak) | 🔲 | New (Session 65 spine work order §E.5) |

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
5 figures exist. 2–3 more would help. **None are currently wired into `ch09-thinking-language-intelligence.md`** — confirmed via grep (Session 68): the chapter markdown has zero image/figure references anywhere. These are built assets sitting unused, not a numbering problem.

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| 9.1 | Biases as question substitution table | ✅ built, not wired | `ch09/fig_bias_question_substitution.png/.svg` |
| 9.2 | IQ standardization curve (mean=100, SD=15) | ✅ built, not wired | `ch09/fig_iq_bell_curve.png/.svg` |
| 9.3 | Linda conjunction fallacy / nested sets | ✅ built, not wired | `ch09/fig_linda_conjunction_fallacy.png/.svg` |
| 9.4 | Wason selection task (prompt) | ✅ built, not wired | `ch09/fig_wason_task_prompt.png/.svg` |
| 9.5 | Wason selection task (answer) | ✅ built, not wired | `ch09/fig_wason_task_answer.png/.svg` |
| 9.6 | System 1 vs. System 2 (dual-process) diagram | 🔲 | Optional — chapter discusses extensively but no figure yet; Ch5's amygdala/extinction section (Session 62) now also references this concept — cross-check |
| 9.7 | Language acquisition timeline (babbling → words → two-word → grammar) | 🔲 | Optional — supports nativist vs. behaviorist section |
| 9.8 | Multiple intelligences vs. g-factor comparison | 🔲 | Optional — Gardner/Spearman contrast |
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

## Chapter 11 — Social Psychology (Personality glossed within)
*(was "Chapter 10" in the old numbering; the old standalone "Chapter 11 — Personality" is dissolved into this chapter, not a separate chapter — see note below)* No figures yet for the Social content.

| # | Description | Status | Notes |
|---|-------------|--------|-------|
| 11.1 | Attribution theory (dispositional vs. situational × self vs. other) | 🔲 | Core — FAE section |
| 11.2 | Milgram obedience setup (learner/teacher/experimenter room diagram) | 🔲 | Core — Classic Study Walkthrough |
| 11.3 | ELM dual-route diagram (central vs. peripheral route to persuasion) | 🔲 | Core |
| 11.4 | Bystander effect: five-step decision model | 🔲 | Core — Darley & Latané model |
| 11.5 | Social identity theory (in-group favoritism / out-group derogation) | 🔲 | Optional |

**Personality figures (from the old standalone chapter, status unresolved):** `ch11-personality.md` is currently a holding-pen file (`ch11b-personality.md`) — content not yet merged into this chapter. Its two existing figures are built and may or may not survive the merge:

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| — | Trait signal aggregation (single act r≈.29 vs. aggregated r≈.72 scatter plots) | ✅ built, fate pending merge | `ch11/fig11-1-trait-signal-aggregation.png` |
| — | Person × situation interaction (helping behavior across weak/strong situations) | ✅ built, fate pending merge | `ch11/fig11-2-person-situation-grid.png` |
| — | Big Five trait dimensions visual | 🔲 | Optional — chapter uses a table; figure would supplement |

---

## Chapter 12 — Emotion, Stress & Coping
No figures yet. Number unchanged from old numbering (this chapter's position was already correct).

| # | Description | Status | Notes |
|---|-------------|--------|-------|
| 12.1 | Russell's circumplex of affect (valence × arousal 2D plane with emotion labels) | 🔲 | Core — Barrett's constructionist framework depends on this |
| 12.2 | Emotion theories comparison (James-Lange / Cannon-Bard / Schachter-Singer / Constructed) | 🔲 | Optional — already a table in text; figure would reinforce |
| 12.3 | GAS three stages (alarm / resistance / exhaustion) with cortisol/immune function curves | 🔲 | Core |
| 12.4 | Body-budget / allostatic load diagram (deposits vs. withdrawals metaphor) | 🔲 | Core — central to Chapter 12's framing |
| 12.5 | Coping strategy matrix (problem-focused vs. emotion-focused × high vs. low controllability) | 🔲 | Optional — text has a matching table |

---

## Chapter 13 — Psychological Disorders & Therapy
1 figure exists. 3–4 more needed. Number unchanged from old numbering (this chapter's position was already correct).

| # | Description | Status | Filename |
|---|-------------|--------|----------|
| 13.1 | Anxiety maintenance cycle (trigger → anxiety rises → avoidance → relief → loop, with ERP break) | ✅ | `ch13/fig13_1_anxiety_maintenance_cycle.png` |
| 13.2 | Diathesis-stress model (vulnerability × stressor interaction) | 🔲 | Core |
| 13.3 | Biopsychosocial model triangle (biological / psychological / social contributors) | 🔲 | Core — chapter opens with this |
| 13.4 | 3D criteria diagram (Distress / Dysfunction / Deviance) | 🔲 | Core — chapter's diagnostic framework |
| 13.5 | Treatment comparison (disorder category × evidence-based therapy type) | 🔲 | Optional — Dodo Bird Verdict discussion |

---

## Summary: What Still Needs to Be Made

### Highest priority (no figures at all yet):
- **Ch7 (Learning):** 4–5 figures — conditioning diagrams, reinforcement schedules, dopamine PE/uncertainty
- **Ch8 (Memory):** 5–6 figures — Atkinson-Shiffrin, Baddeley, levels-of-processing, serial position, memory taxonomy
- **Ch10 (Lifespan):** 3–4 figures — Piaget stages, Ainsworth attachment, Vygotsky ZPD
- **Ch11 (Social Psych):** 4–5 figures — Milgram setup, attribution model, ELM, bystander steps
- **Ch12 (Emotion/Stress):** 4 figures — circumplex, GAS, body-budget, coping matrix

### Partially done — a few more needed:
- **Ch5 (Consciousness):** Fig 5.1 done; 7 built-but-unplaced images awaiting section assignment (see Ch5 table above)
- **Ch6 (Sleep):** dream theories comparison (6.5); reconsider whether tolerance/withdrawal (6.4) still fits post-split
- **Ch9 (Thinking, Language & Intelligence):** System 1/2 diagram (9.6) is optional but useful, and now has a direct tie-in to Ch5's amygdala/extinction material
- **Ch13 (Disorders):** Diathesis-stress (13.2), biopsychosocial (13.3), 3D criteria (13.4)

### Decisions needed from Jon:
- Ch2: Which figure set to use (old vs. new numbering)? What are his own images?
- Ch3: Confirm the three lecture-deck-sourced figures (3.3, 3.5, 3.7) are original
- Ch4: Reconcile this inventory against the actual HTML (9 figures, 4.1–4.9) — this list is behind
- Ch5: Confirm placement of the 7 unplaced images (next session)
- Ch9: folder rename resolved (Session 68); still need a decision on whether/where to embed the 5 existing figures in the chapter markdown
- Ch11: Resolve the Personality-merge question — which figures (if any) survive into the Social chapter?
- Prologue: Dunning-Kruger — redraw from actual data, or add caveat, or drop?
