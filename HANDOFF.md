# Psych101 Textbook — Handoff Document

> **How to use this file:** The Status and Next Up sections are overwritten each session. The Session Log at the bottom is append-only — newest entry at the top.

---

## Current Status

**Phase:** Chapter 1 (History & Approaches) live, fully reviewed. Chapter 2 (Research Methods & Statistics) at v0.3, HTML on hold pending Jon’s images. Chapters 3–13 are markdown-complete (various versions), all awaiting Jon’s line-by-line review. **All 13 chapters now have at least a v0.1 markdown draft. Prologue HTML (`docs/chapters/prologue.html`) now has interactive components wired in (Session 38).**

**Image organization complete (Session 32):** All viable images from the "Potential Images for Chapters Holding Space" folder have been moved to their chapter `docs/images/` folders. Full visuals inventory saved at `source/visuals-inventory.md`.

**Naming convention (Session 32):** All image files now use descriptor-only names — no sequential numbers — so chapters can be reshuffled without renaming files. Pattern: `fig_<descriptor>.png` (e.g., `fig_retina_rods_cones.png`). All chapter markdown references updated to match. Ch01 left as-is (live HTML). Old numbered files could not be deleted from bash (OneDrive permission restriction) — orphaned files remain in folders but are not referenced by any markdown; Jon can delete them manually or ignore them.

**Ch04 figure decisions (Session 32):** For figs 4.3 (retina) and 4.5 (cochlea), the programmatic SVG/PNG versions are primary in the chapter — they show actual data (receptor density curves; tonotopic map). For fig 4.6 (gate control), switched to the infographic version — it shows the three gate states (open/partially closed/closed) more clearly. Infographic versions of 4.3 and 4.5 remain in the folder as `fig_retina_infographic.png` and `fig_cochlea_infographic.png` for slide use.

**Dunning-Kruger (Session 32):** Built an accurate figure from Kruger & Dunning (1999) Study 1 actual data — bar chart showing perceived vs. actual performance by quartile, not the popular spike-at-zero curve. Saved as `docs/images/prologue/fig_dunning_kruger_actual_data.svg/.png`.

**Book restructure (Session 31):** Chapters 12 and 13 merged into a single chapter — Ch. 12 "Emotion, Stress & Coping" — using Barrett’s constructionist/allostatic framework as the spine. The former Ch. 12 (Motivation & Emotion, `ch12-motivation-emotion.md`) and Ch. 13 (Stress & Health, `ch13-stress-health.md`) are superseded; both files remain on disk but are no longer part of the book. What was Ch. 14 (Psychological Disorders & Therapy) is now Ch. 13. Book is now **13 chapters**. `docs/index.html` updated to reflect the new TOC.

**What's ready:**
- `source/concept_lineage_revised.csv` — 181 concepts across all APA chapters, with textbook-era lineage, origin flags, and `wording_change_driver` column. Note: the chapter's concept prefix is `BIO-*` (not `NEU-*` as previously referred to informally) — 19 concepts total, IDs BIO-001 through BIO-019.
- `source/voice_profile_merged.csv` — 129 voice entries: 35 from Gen Psych (across 18 iterations), 94 from specialist courses (Neuroscience, S&P, Cognitive, Lifespan, Disorders)
- `docs/` — GitHub Pages scaffold with sidebar nav, CSS, and TOC stub; site is live and enabled (confirmed via Actions: `pages-build-deployment` workflow runs green on `main`). `docs/index.html` already contains the authoritative, complete 13-chapter TOC and order (updated Session 31) — **check this file first** before making any chapter-numbering decision; do not re-derive order from `concept_lineage_revised.csv` categories alone (see Lessons below).
- `pipeline/chapter-spec.md` — full chapter-writing pipeline spec v3.0 (menu model, demo integration, voice rules, copyright handling, AI integration framework §12). Note: its §12 AI-touchpoint table uses an older, now-superseded chapter numbering (e.g., labels Ch.2 as "Biological Bases" and Ch.10/11 as "Research Methods") — read it for the *content* of each touchpoint, not the chapter numbers, and cross-check against `docs/index.html`'s real numbering.
- `source/chapters/ch01-history-approaches.md` and `docs/chapters/01-history-approaches.html` — Chapter 1 complete, reviewed line-by-line by Jon twice now (initial review in Session 3, a second detailed editorial pass in Session 14), pushed live, both files kept in sync. Session 14 added a Humanistic psychology row to the history table, a Section 3 perspectives table, a new Review Question 13, and Milgram (1963) as the Misconception Opener's anchor citation — see Session Log for the full list.
- `source/chapters/ch02-research-methods.md` — Chapter 2 now at v0.3 (~4,140 body words, inside the 3,500–5,000 target). All 13 RM-* concepts from `concept_lineage_revised.csv` covered. RM-012 (volunteer/sampling bias) sourced from Noba (Chance & Rossman; Mehl) per the `needs-verification` copyright rule, not course materials — now also paired with Rosenthal & Rosnow (1975), a real classic citation, since Noba alone was judged too thin to carry the claim's weight on its own. 5 sections now (was 4) — split the old combined "experimental method" section into Section 3 (Experiments and Causal Claims) and Section 4 (Bias Controls and Research Ethics) to reduce cognitive load, per feedback evaluated and agreed with. Added: an evidence-ladder "Common student mistake" column, a depression-questionnaire reliability/validity example, a p-value "Common Misreadings" box, an ethics-safeguards table, and a softened/cited childhood-books example (Sikora, Evans, & Kelley, 2019, replacing an overstated causal dismissal). Still contains one open placeholder: the Section 5 data-interpretation demo references the existing "solid-carnival" repo but needs Jon to supply the actual embed URL.
- `docs/images/ch02/` — now 6 figures (was 4). Added `fig2-5-sampling-vs-assignment` (population→sample→experimental/control flowchart contrasting what random sampling vs. random assignment each support) and `fig2-6-reliability-validity` (2×2 dartboard/target diagram — the classic reliable/valid quadrant illustration, built with real scattered data, not just illustrative dots). Original four (`fig2-1` through `fig2-4`) unchanged. Same build approach as before: matplotlib for data-driven figures, hand-coded SVG + cairosvg for diagrams, `docs/css/style.css` palette, `.svg` + ~2,400px `.png` for both web and slide use.
- `source/chapters/ch03-neuroscience-biological-bases.md` — Chapter 3 at **v0.3** (Session 37 revision). Reviewed by Jon; structural revision applied. All 19 BIO-* concepts covered. No Noba/APA IPI substitution required (all `instructor-original`/`canonical-common-knowledge`). **Key v0.3 changes:** agonist/antagonist section removed; neurotransmitter section restructured around excitation/inhibition principle + neuromodulation concept, with dopamine as the single worked example (Schultz 1998 prediction-error framing; ADHD medication connection added); serotonin/GABA/oxytocin catalog removed; brain imaging reduced to fMRI only (interpretive lesson: activation blobs show relative blood flow differences, not causation); "Brain Regions Are Specialized, but Behavior Is Networked" paragraph added before Gage section; Harlow (1868) added to References for personality-change account (distinct from Harlow 1848 acute case); Hart (1988) and Insel & Young (2001) removed from References; AI Connection compressed; figures renumbered in captions only (3.6→3.5, 3.7→3.6, 3.9→3.7; filenames unchanged). Two open demo placeholders remain: action-potential simulator and dopamine/neurotransmitter mixing board (oxytocin/vasopressin demo placeholder removed with that section). **HTML converted**: `docs/chapters/03-neuroscience.html` created this session.
- `docs/images/ch03/` — 9 figures (3.1–3.9, sequential in reading order) plus a `README_captions_alt_text_attribution.md` with captions/alt text/attribution for all nine. Six (3.1, 3.2, 3.4, 3.6, 3.8, 3.9) are original diagrams Jon built with ChatGPT specifically for this chapter — clean, accurate, and captioned almost exactly to match the chapter's own framing (e.g., the split-brain figure's caption independently echoes the Do Not Confuse panel's wording). Three (3.3, 3.5, 3.7) are rendered directly from slides in Jon's "6 Chapter 2 Biology.pptx" lecture deck — confirmed his own original infographics (distinct dark-card design language, no Worth/Myers credit line), not publisher material. See Session 8 log entry for the full image-provenance audit of that pptx (68 slides reviewed; roughly a third carried explicit "Myers/DeWall, Psychology, 13e, © 2021 Worth Publishers" credits and were excluded, a few more were excluded for matching that same publisher illustration style without a visible credit, and a few YouTube-screenshot and named-stock-photo slides were excluded as third-party content unrelated to the textbook-publisher copyright rule but still not Jon's own).
- `source/chapters/ch04-sensation-perception.md` — Chapter 4, now at **v0.3** (Session 11: 6 figures added, Other Senses sidebar added). Previously: new this session (v0.1), content-complete; then v0.2 revised from external GPT review; not yet reviewed by Jon. All 15 SP-* concepts covered (verified by direct text search, not just by eye). Copyright handling was materially different from Ch1–3: most SP-* concepts are flagged `book-adoption` (SP-004 and SP-014 additionally `needs-verification`), so most of the chapter was drafted from two Noba Project modules — "Sensation and Perception" (Privitera) and "Vision" (Buetti & Lleras) — fetched and read in full this session, not pulled from memory or secondhand summaries. Four concepts (SP-007 Gestalt principles, SP-012 place vs. frequency theory of pitch, SP-013 gate control theory of pain, SP-015 perceptual constancy) have no dedicated Noba or APA IPI module to borrow from; for these, drafted original prose grounded in verified primary literature (Wertheimer 1912; Melzack & Wall 1965; von Békésy 1960) instead, and flagged this explicitly in the chapter's own header note as a deviation from the stated copyright-handling process — the safeguard against copying Wade/King/Myers wording is intact either way, since none of this prose originates from course materials. Architecture: 4 sections — psychophysics foundations (thresholds, Weber's Law, signal detection theory, sensory adaptation, with a Do Not Confuse panel on sensation vs. perception), vision (retina/rods/cones, depth cues, trichromatic/opponent-process color theory, with a Hubel & Wiesel classic-study walkthrough on feature detectors), perceptual organization (top-down vs. bottom-up processing, Gestalt principles, perceptual constancy, with a full AI Connection extending the Tesla Vision signature analogy to CNNs and predictive coding), and hearing/body senses (cochlea, place vs. frequency theory with a Do Not Confuse panel, gate control theory of pain). Misconception Opener is "your eyes work like a camera." Body word count came in at ~4,600 words — the first chapter in this project to land inside the 3,500–5,000 target on the first draft rather than over or under it. Voice profile coverage was rich for this chapter (20 S&P-course-tagged entries, including 23 Tesla-analogy hits) — used the Tesla Vision framing as the chapter's central recurring analogy, plus the ambiguous-figure ("duck/rabbit") demonstration and the lens-accommodation hands-on exercise from the voice profile's mnemonic entry. Did not build a section on selective attention/dichotic listening despite 17 voice-profile hits on that demo, because attention is not a tracked SP-* concept in the extraction — added a one-sentence forward-pointer to Chapter 5 instead rather than forcing in untracked content (see Decisions below). Three open demo placeholders need live embed URLs or builds from Jon: a signal detection theory simulator (does not exist yet — priority #3 on the demo-gap list), the "motionperception" repo's Heider & Simmons demo, and the "takingaction" repo's size-weight illusion. No figures yet — open question for Jon, same status as Ch1 and Ch3. Not yet converted to HTML.
- `source/chapters/ch05-states-of-consciousness.md` — Chapter 5 at v0.2 (Sessions 11 + 17), not yet reviewed by Jon. Now 13 CON-* concepts: the original 12 plus CON-013 (Selective attention / inattentional blindness), added at Jon's explicit direction in Session 17 to resolve the Ch4→Ch5 attention promise — a 310-word bridge inserted in Section 1 using inattentional blindness (Simons & Chabris, 1999) as the primary example. Session 17 also applied six precision corrections: (A) parasomnias — NREM arousal parasomnias vs. REM sleep behavior disorder now distinguished; (B) H.M. — corrected to "medial temporal lobe structures including hippocampal region," not hippocampus-only; (C) cannabis — separated from classical hallucinogens into its own paragraph (CB1 vs. 5-HT2A distinction made explicit); (D) opioids — overdose mechanism clarified as brainstem respiratory depression, not GABA, with polydrug-combination risk added; (E) dopamine — "anticipation signal" replaced with reward prediction error framing, Schultz, Dayan, & Montague (1997) replaces Sapolsky n.d. throughout; (F) hidden observer — Hilgard's interpretation now framed as interpretation rather than settled fact. Process C/S practical-intervention paragraph also added: caffeine targets Process S (adenosine), light therapy/melatonin targets Process C — "different tool for different process" framing. Body word count ~4,820 (verified). Two optional additions still flagged for Jon's call: Charles Bonnet syndrome mention in the dreaming section, and meditation paragraph alongside hypnosis — neither is a tracked CON-* concept. No figures yet — priority order now set (5.1 two-process model, 5.2 hypnogram, 5.3 SCN pathway, 5.4 tolerance/withdrawal; 5.5 drug mechanisms and 5.6 dream theories on hold). No demo in inventory covers circadian rhythms, drugs, or hypnosis directly; `psych101_awesome-sauce` "sleep" demo still needs Jon's confirmation for reuse. Not yet converted to HTML.

- `source/chapters/ch06-learning.md` — Chapter 6 draft, new this session (v0.1), content-complete, not yet reviewed by Jon. All 17 LRN-* concepts covered (verified by grep against `concept_lineage_revised.csv`). 15 of 17 are `instructor-original`/`canonical-common-knowledge` with driver `instructor-revision` or `n/a` and were drafted directly from course materials and verified primary literature. The other two needed different handling: LRN-011 (Shaping) is flagged `book-adoption`, and LRN-016 (Dopamine/Sapolsky framing) is flagged `needs-verification`. Fetched and read Noba's only relevant module, Mark E. Bouton's "Conditioning and Learning," in full — it covers classical/operant/observational learning thoroughly but never actually uses the term "shaping," so there was no Noba passage to borrow for LRN-011 specifically. Followed the established Ch4/Ch9 precedent (draft original prose from verified primary literature when no Noba/APA IPI module exists for a flagged concept, flag the deviation explicitly) for both: LRN-011 is drafted from Skinner's own 1951 *Scientific American* piece that introduced the term, and LRN-016 continues Ch5's already-established pattern of drafting directly from Sapolsky's own public lecture rather than course-slide wording. **Found and corrected a citation error carried from Chapter 5:** Ch5 cited Sapolsky's dopamine lecture as given "at Stanford University" — verified this session that it is actually the Pritzker Lecture, delivered at the California Academy of Sciences on February 15, 2011 (Sapolsky is a Stanford professor, but this specific lecture was not delivered there). Ch6 uses the corrected venue; flagged in Ch6's header for Jon to decide whether to fix Ch5's existing citation to match. Every other citation (Pavlov 1927, Watson & Rayner 1920, Thorndike 1911, Garcia & Koelling 1966, Bandura/Ross/Ross 1961 and 1963, Tolman & Honzik 1930, di Pellegrino et al. 1992, Rizzolatti & Craighero 2004, Deci 1971) was independently verified via web search before inclusion and cross-checked programmatically against the References list in both directions — all 13 in-text citations matched exactly, no orphans either direction. Architecture: 4 sections — classical conditioning (with a Little Albert classic-study walkthrough and a Do Not Confuse panel on classical vs. operant conditioning), operant conditioning (with a Do Not Confuse panel on negative reinforcement vs. punishment, reinforcement schedules, and shaping), biological constraints and learning beyond conditioning (Garcia & Koelling taste aversion, a Bandura Bobo doll classic-study walkthrough, Tolman's latent learning, and mirror neurons), and dopamine/reward/motivation (Sapolsky's anticipation-not-pleasure framing, intrinsic vs. extrinsic motivation, Deci's overjustification finding, and a full AI Connection on RLHF as operant conditioning). The AI Connection is the most developed in the book so far, per `pipeline/chapter-spec.md` §12's explicit call that Ch6 is "the chapter where the deepest parallels live" — covers shaping, stimulus generalization/discrimination, and classical-conditioning-as-token-association, with the breakdown point grounded specifically in this chapter's own dopamine/anticipation content (RLHF adjusts weights through optimization math; nothing in the system is a motivated, anticipating organism). On mirror neurons (LRN-015), made a deliberate choice to flag the popularized "broken mirror neuron theory of autism" as not well supported by current evidence, and to distinguish the strong monkey single-neuron evidence from the weaker, more indirect human fMRI evidence — consistent with Jon's standing instruction to never overstate confidence. Voice profile coverage was the richest of any chapter so far (Garcia taste aversion 28 hits, Tolman's maze 27 hits, Bandura/Bobo doll 17 hits, Little Albert 18 hits, Sapolsky/dopamine 15 hits, intrinsic motivation framing 25 hits) — all used directly; held off on the SRT/Germany personal-anecdote entry (only 2 hits) as not anchoring any tracked concept. Body word count came in at ~5,340 — over the 3,500–5,000 target, flagged rather than cut (same precedent as Ch3), given this chapter covers more concepts (17) than any prior chapter and was built to spec as the book's deepest AI integration point. No figures yet — same open question as every chapter so far. This chapter is the #1 priority for a new demo build per `pipeline/chapter-spec.md` §5 (a conditioning simulator) — no such demo exists yet, so no embed placeholder was included; flagged as a gap rather than placeholding for a nonexistent demo. Not yet converted to HTML.

- `source/chapters/ch07-memory.md` — Chapter 7 draft at v0.2 (Session 16 structural revision), not yet reviewed by Jon. All 27 MEM-* concepts covered. 25 instructor-original; MEM-019 and MEM-020 sourced from two Noba modules (Laney & Loftus; McDermott & Roediger). Body word count ~5,440 — over target, flagged not cut. No figures. Not yet converted to HTML. Full architecture, citations, and open items documented in Session 16 log entry.

- `source/chapters/ch11-personality.md` — Chapter 11 now at **v0.2** (Sessions 23 + 28), content-complete with 5 sections and 2 figures, not yet reviewed by Jon. All 7 PER-* concepts covered. v0.2 changes from v0.1: 5-section structure (person-situation and assessment split into separate sections); chapter map table; Big Five converted to full table; traits-vs-types Do Not Confuse added; HEXACO sentence added; Mischel r=.30 reframed using both Funder & Ozer 1983 and 2019; Rogers therapy evidence narrowed to Farber et al. (2018) positive-regard meta-analysis (g=.28) and Elliott et al. (2018) empathy meta-analysis (r=.28); Freud citations fixed (1923 for structural model, 1933/1964 for "seething cauldron" quote); Electra complex attribution corrected (Jung coined it; Freud preferred Oedipus complex for both sexes); recovered-memory caveat added; Rogers worked example (student with conditions of worth) added; AI Connection citation fixed — Rao et al. (2023) replaced by Jiang et al. (2024) PersonaLLM with caveat that this is assigned not spontaneous personality; Rorschach section balanced with Mihura et al. (2013); MMPI claim narrowed; 4 Do Not Confuse panels; 5 Stop & Retrieve prompts; personality assessment table; class-attendance aggregation example; 24 references (all verified). Body word count ~3,750 — inside the 3,500–5,000 target. **2 figures built** (`docs/images/ch11/`): fig11-1-trait-signal-aggregation (scatter plot showing r≈.29 for single act vs. r≈.72 aggregated) and fig11-2-person-situation-grid (helping behavior across trait levels × weak/strong situation). Not yet converted to HTML.

- `source/chapters/ch10-social-psychology.md` — Chapter 10 draft (v0.3), content-complete, Noba-verified, Jon's review pass applied, not yet converted to HTML. All 12 SOC-* concepts covered (verified programmatically). 9 concepts are `instructor-original`/`canonical-common-knowledge`; 3 flagged `book-adoption` (SOC-008 Group polarization/groupthink, SOC-010 Bystander effect, SOC-011 Altruism) — sourced from and verified against PDF copies of Forsyth's "The Psychology of Groups" and Poepsel & Schroeder's "Helping and Prosocial Behavior" Noba modules (reviewed 2026-06-23). 23 citations (added Poepsel & Schroeder), all verified; programmatic cross-check confirmed all in-text citations match References entries. Body word count ~4,701 — inside the 3,500–5,000 target. Architecture: 4 sections — (1) Social cognition (FAE with Ross, Greene, & House 1977 quizmaster study; self-serving bias; cognitive dissonance with Festinger & Carlsmith 1959 $1/$20 study; ELM); (2) Social influence (Asch 1955 conformity; Classic Study Walkthrough for Milgram 1963/1974; Do Not Confuse: conformity vs. obedience; Stanford Prison Experiment with Le Texier 2019 critique — presented as flawed illustration, not clean evidence; social facilitation/loafing with Zajonc 1965 and Latané et al. 1979); (3) Groups and intergroup relations (group polarization Moscovici & Zavalloni 1969; groupthink Janis 1982 2nd ed. with actual Forsyth definition quote, Bay of Pigs/Challenger; prejudice/stereotypes/discrimination; social identity theory Tajfel & Turner 1979; stereotype threat cross-reference to Ch8; contact hypothesis Allport 1954); (4) Prosocial and antisocial behavior (bystander effect Darley & Latané 1968 with five-step model plus cost-benefit analysis as third mechanism per Noba; Kitty Genovese framing noted as inaccurately reported; altruism with kin selection Hamilton 1964, reciprocal altruism Trivers 1971, Batson 2011 empathy-altruism model; aggression with Dollard et al. 1939/Berkowitz 1989 frustration-aggression, Bandura cross-reference to Ch6, deindividuation). Full AI Connection per spec §12: FAE→anthropomorphism; conformity→AI as confident consensus-of-one; ELM peripheral route→fluency-based credulity; bystander effect→diffusion of AI responsibility; social desirability bias→sycophancy; ToM as the precise breakdown point for all five mechanisms. Triplett (1898) cited with Stroebe (2012) re-analysis caveat. No demo placeholder — no existing demo in the inventory covers social psychology topics; flagged as a gap. Not yet converted to HTML.

- `source/chapters/ch08-thinking-language-intelligence.md` — Chapter 8 draft, new this session (v0.1), content-complete, not yet reviewed by Jon. All 15 TLI-* concepts covered (verified programmatically by topic keyword). 13 of 15 are `instructor-original`/`canonical-common-knowledge`; two flagged `book-adoption` — TLI-004 (Representativeness heuristic) drafted from Bazerman (2026) Noba module "Judgment and Decision Making," and TLI-012 (Gardner's multiple intelligences) drafted from Biswas-Diener (2026) Noba module "Intelligence" — both fetched and read in full before drafting, not secondhand. No concepts had a Noba-coverage gap this chapter (both flagged concepts had adequate module coverage, unlike Ch4/Ch6 where some `book-adoption` concepts had no matching Noba module). All 26 citations independently verified via web search before inclusion; programmatic cross-check confirmed all in-text citation keys match References entries in both directions, no orphans. Architecture: 4 sections — (1) Concepts, categories, and problem solving (prototypes, exemplars, hierarchical categories, algorithms vs. heuristics, working-forward/backward/means-ends analysis, mental set with Luchins 1942, functional fixedness with Duncker 1945's candle problem, insight and Jung-Beeman et al. 2004 neural correlates); (2) Heuristics, biases, and the two-system view (System 1/2 framework with a full Do Not Confuse panel, availability heuristic, representativeness heuristic with the Linda problem as a full Classic Study Walkthrough, confirmation bias with Wason 1968 selection task, framing effect, anchoring); (3) Language (phoneme→morpheme→syntax→semantics→pragmatics, nativist vs. behaviorist acquisition debate with Chomsky 1965 LAD/universal grammar and Saffran et al. 1996 statistical learning, linguistic relativity weak vs. strong with Whorf 1956 and a Do Not Confuse panel on relativity vs. determinism); (4) Intelligence (Spearman 1904 *g* and the positive manifold, fluid vs. crystallized with Horn & Cattell 1966, Gardner 1985 multiple intelligences with a caveated discussion of empirical limitations, Sternberg 1985 triarchic theory with analytic/creative/practical, IQ standardization and the bell curve, reliability/validity building on Ch2, Flynn Effect 1987, and group differences with stereotype threat Spencer et al. 1999 and note on environmental factors). Full AI Connection (the chapter's primary AI touchpoint per spec §12 Ch7/8, three-part structure): (a) System 1 fluency heuristic — polished AI output deactivates System 2 metacognitive checking because fluency signals accuracy (Reber & Schwarz 1999); (b) availability heuristic applied to AI use — past experience of AI being right overcounts reliability on topics where AI is actually unreliable; (c) schemas → template-driven AI output — model output is high-fidelity pattern completion, not reasoning, similar to schema-driven human memory reconstruction; breakdown point: human schemas are revised through embodied corrective feedback, model weights don't self-correct through reasoning mid-conversation. Misconception Opener: "We trust our own thinking — we assume we notice what matters and weigh information accurately." Includes a *k*-word prediction task that students complete before Section 2 and return to after reading the availability heuristic section. Body word count ~4,981 — inside the 3,500–5,000 target (only the second chapter after Ch4 to land inside range on a first draft). No figures yet. No demo placeholder (no existing demo covers heuristics or language acquisition; flagged as a gap, not placeholded). Not yet converted to HTML.

**Current 13-chapter order (updated Session 31 — `docs/index.html` is authoritative):**
1 History & Approaches · 2 Research Methods & Statistics · 3 Neuroscience & Biological Bases · 4 Sensation & Perception · 5 States of Consciousness · 6 Learning · 7 Memory · 8 Thinking, Language & Intelligence · 9 Lifespan Development · 10 Social Psychology · 11 Personality · 12 Emotion, Stress & Coping · 13 Psychological Disorders & Therapy.

**What's not started:**
- Ch2–Ch13 → HTML conversion (all markdown-complete, awaiting Jon's review first; Ch2 HTML on hold pending Jon's images)
- Prologue HTML conversion (awaiting Jon's review of v0.1 draft)

**Ch01 figures — now complete.** `docs/images/ch01/` created with 8 files: 5 portraits (Wundt, James, Watson, Freud, Skinner — Wikimedia Commons public domain), Fig 1.1 scope map (Jon's original), Fig 1.2 Maslow hierarchy (Wikimedia Commons), Fig 1.3 Skinner/Chomsky/LLM diagram (Jon + ChatGPT original). HTML wired: portrait strip at Section 2 opener, three numbered `.chapter-figure` blocks. CSS added to style.css (`.chapter-figure`, `.portrait-strip`). Attribution README at `docs/images/ch01/README_captions_alt_text_attribution.md`. Turing and Chomsky portraits skipped — represented in Fig 1.3. "Don't use these" folder contents excluded per folder label.

**Open item:** Jon hit a 404 on the live Chapter 1 page right after publishing (prior session). Diagnosed as GitHub Pages build/CDN propagation lag. Likely resolved on its own — if still 404ing, check the Actions tab for an actual failed (red) run rather than assuming lag again.

**On hold, do not start without Jon's go-ahead:** Ch2 → HTML conversion. Jon is generating his own images for Ch2 right now (separate from the four already built in `docs/images/ch02/` — unclear yet whether his are replacements, additions, or for a different purpose like slides specifically). Don't convert Ch2 to HTML or touch `docs/images/ch02/` until Jon says what he's made and how it should fit in.

---

## Next Up

1. **Create figures for chapters with none yet (Chs 6, 7, 9, 10, 12 are the biggest gaps).** See `source/visuals-inventory.md` for the full per-chapter breakdown. Priority figures: Ch6 (classical conditioning diagram, operant 2×2, reinforcement schedules, dopamine prediction error); Ch7 (Atkinson-Shiffrin 3-box, Baddeley working memory, levels-of-processing, serial position curve, explicit/implicit taxonomy); Ch9 (Piaget stages, Ainsworth attachment styles, Vygotsky ZPD); Ch10 (Milgram setup, attribution model, ELM dual-route, bystander 5-step); Ch12 (Russell's circumplex, GAS 3 stages, body-budget diagram). Ch5 also still needs SCN pathway (5.3) and tolerance/withdrawal (5.4).

2. **Decisions needed from Jon before HTML conversion:**
   - Ch2: What are Jon's own images, and which existing `docs/images/ch02/` figures do they replace or supplement?
   - Ch3: Confirm figures 3.3, 3.5, 3.7 (lecture-deck slides) are original. Accept or trim ~5,800 word count?
   - Ch4: Use infographic versions (richer) or SVG programmatic versions for figs 4.3/4.5/4.6, or both?
   - Prologue DK figure: Replace Dunning-Kruger with a redrawn version from actual data, add a caveat caption, or drop it?

3. **Jon's line-by-line review of Chapters 3–13** — all markdown-complete and unreviewed. Same review pattern as Ch1/Ch2. Open items per chapter documented in previous HANDOFF entries.

4. **Old "Next Up" items 3–10 from prior sessions** (HTML conversion, Ch2 hold, prologue, demo builds) still apply — see Session 31 HANDOFF entry for the full prioritized list.

1. **All 13 chapters (plus Prologue) now have at least a v0.1 draft. The immediate priority is Jon's line-by-line review of Chapters 3–7** — five chapters are markdown-complete and unreviewed. Open items for Ch3 specifically: (a) body word count runs ~5,800, well over target — trim or accept? (b) confirm the 3 lecture-deck-sourced figures (3.3, 3.5, 3.7) and keep the agonist/antagonist paragraph or cut it; (c) supply live embed URLs for the three flagged demo placeholders (action-potential simulator, neurotransmitter mixing board, oxytocin/vasopressin demo); (d) decide whether to do a similar image-provenance pass on other lecture decks before drafting future chapters. Open items for Ch4 specifically: (a) confirm the copyright-handling deviation for the four concepts with no Noba/APA IPI module to draw on (Gestalt, place/frequency theory, gate control theory, perceptual constancy) — original prose was used instead, flagged inline in the chapter header; (b) decide on figures; (c) supply or build the three flagged demo placeholders (SDT simulator — doesn't exist yet, Heider & Simmons, size-weight illusion). Open items for Ch5 specifically: (a) decide whether to keep the two optional additions (Charles Bonnet syndrome mention, meditation paragraph) — neither is a tracked CON-* concept; (b) confirm whether the `psych101_awesome-sauce` "sleep" demo can be reused/cross-linked in Ch5 or stays Prologue-exclusive; (c) decide on figures — priority order now set (5.1 two-process model first, 5.2 hypnogram second; 5.5 and 5.6 on hold). Open items for Ch6 specifically: (a) body word count runs ~5,340, over target — trim or accept, same flag-don't-cut precedent as Ch3; (b) **decide whether to correct Chapter 5's Sapolsky citation** — Ch5 says the lecture was at "Stanford University" but it is the Pritzker Lecture at the California Academy of Sciences (Feb 15, 2011); Ch6 already uses the corrected venue; (c) confirm the copyright-handling deviation for LRN-011 (Shaping) and LRN-016 (Sapolsky) — no Noba module covers "shaping" by name, so original prose from Skinner's own 1951 source was used instead, flagged inline; (d) decide on figures; (e) the conditioning simulator is still the #1 priority demo-build per spec §5. Open items for Ch7 specifically: (a) body word count runs ~5,440, over target — same flag-don't-cut precedent; (b) decide on figures; (c) supply a live embed URL for the `psych101_awesome-sauce` encoding/retrieval/spacing demos; (d) confirm the Clive Wearing contrast-case framing.
2. **Get Jon's line-by-line review of Chapters 8–13** — five chapters are now markdown-complete and unreviewed; this is the immediate next step before any of them goes further, independent of how far chapter drafting continues. Open items for Ch3 specifically: (a) body word count runs ~5,800, well over target — trim or accept? (b) confirm the 3 lecture-deck-sourced figures (3.3, 3.5, 3.7) and keep the agonist/antagonist paragraph or cut it; (c) supply live embed URLs for the three flagged demo placeholders (action-potential simulator, neurotransmitter mixing board, oxytocin/vasopressin demo); (d) decide whether to do a similar image-provenance pass on other lecture decks before drafting future chapters. Open items for Ch4 specifically: (a) confirm the copyright-handling deviation for the four concepts with no Noba/APA IPI module to draw on (Gestalt, place/frequency theory, gate control theory, perceptual constancy) — original prose was used instead, flagged inline in the chapter header; (b) decide on figures; (c) supply or build the three flagged demo placeholders (SDT simulator — doesn't exist yet, Heider & Simmons, size-weight illusion). Open items for Ch5 specifically: (a) decide whether to keep the two optional additions (Charles Bonnet syndrome mention, meditation paragraph) — neither is a tracked CON-* concept; (b) confirm whether the `psych101_awesome-sauce` "sleep" demo can be reused/cross-linked in Ch5 or stays Prologue-exclusive; (c) decide on figures — priority order now set (5.1 two-process model first, 5.2 hypnogram second; 5.5 and 5.6 on hold). Note: attention gap resolved (CON-013 added to CSV, bridge in Section 1). Note: Sapolsky n.d. citation resolved (replaced by Schultz, Dayan, & Montague 1997 throughout Ch5). Open items for Ch6 specifically: (a) body word count runs ~5,340, over target — trim or accept, same flag-don't-cut precedent as Ch3; (b) **decide whether to correct Chapter 5's Sapolsky citation** — Ch5 says the dopamine lecture was given "at Stanford University," but Session 12 verified it was actually the Pritzker Lecture at the California Academy of Sciences (Feb 15, 2011); Ch6 already uses the corrected venue; (c) confirm the copyright-handling deviation for LRN-011 (Shaping) and LRN-016 (Dopamine/Sapolsky) — no Noba module covers "shaping" by name, so original prose grounded in Skinner's own 1951 primary source was used instead, flagged inline; (d) decide on figures, same open question as every prior chapter; (e) the conditioning simulator is still the #1 priority demo-build per spec §5 and no embed placeholder exists in the chapter yet since the demo doesn't exist. Open items for Ch7 specifically: (a) body word count runs ~5,440, over target — same flag-don't-cut precedent; (b) decide on figures; (c) supply a live embed URL for the `psych101_awesome-sauce` encoding/retrieval/spacing demos, or confirm none is needed since Sperling's demo and digit span are written as narrated self-administerable exercises instead; (d) confirm the Clive Wearing contrast-case framing reads the way Jon intends, since it's the first time this book has paired a classic case study with a second, deliberately-contrasting case rather than treating one case as definitive.
3. **Once Ch3–7 are approved:** convert to HTML in `docs/chapters/03-neuroscience.html` through `docs/chapters/07-memory.html` (filenames already match `docs/index.html`'s links), reusing Ch1's CSS classes and the `<details>/<summary>` review-question pattern.
4. **When Jon says Ch2's images are ready:** convert Ch2 to HTML, using the same template/CSS classes established for Ch1 (`.callout--*` variants, table styles, `<details>` review-question pattern) plus new `<figure>`/`<img>` markup (no CSS for this yet — add a `.chapter-figure` style to `style.css` during conversion). Get the solid-carnival demo embed URL from Jon at the same time — still an open placeholder in the Ch2 markdown.
5. **Decide on a per-chapter figure budget going forward** — Ch2 set a pattern (3–5 original diagrams per chapter, SVG+PNG, sized for slide reuse); Ch1, Ch3, Ch4, Ch5, Ch6, and Ch7 all currently have none (Ch3 is pending Jon's figure decisions, the rest haven't been raised yet) — worth deciding with Jon whether every chapter gets original figures or only ones with strong visual/data content.
6. **Write prologue** — adapt from psych101_awesome-sauce content; add Human-AI Cognitive Alignment unit per spec §12.
7. **Priority demos to build:** conditioning simulator (needed for Ch6), signal detection theory demo (needed for Ch4), correlation/causation simulator, forgetting/retrieval simulator (needed for Ch7 — spacing/testing-effect content would benefit from one too).
8. **Chapter activities — log ideas now, build later (final book pass):** As each chapter is drafted or revised, log activity ideas in `docs/teaching/activity-ideas.md` (created Session 22) — the structured backlog for activities, demos, assignments, and chatbot-prompt exercises. Do NOT build each one immediately. After all 13 chapters are drafted, do a dedicated final pass to create activities for all chapters. Format template: `docs/assignments/ch08-ai-bias-activity.html`. Chatbot-prompt activities are particularly well-suited to chapters where metacognitive transfer is a chapter goal (heuristics, memory errors, social influence). Activity ideas logged so far: Ch8 — AI bias audit (Built), K-Word Availability Demo (Draftable), Linda Problem Nested-Set Mini-Exercise (Draftable), Wason Selection Task Rule-Testing Demo (Draftable). Chs 3–7, 9–13 — TBD during drafting pass.
10. **Chapter interactive demos — log ideas now, build later:** At the end of each drafting session (before writing this HANDOFF entry), brainstorm interactive demo ideas that arose from the chapter content. Log them in the session entry below AND in `project_chapter_demos.md` in memory. Do NOT build during the drafting sprint. After all 13 chapters are drafted (and after the activities pass), do a dedicated demo-building pass. **Distinction:** demos are standalone interactive widgets (simulators, visualizations, manipulable sliders) that illustrate a phenomenon — the student observes/manipulates. Activities are guided exercises where the student applies chapter vocabulary. **End-of-session order:** (a) brainstorm activity ideas → log in item 9; (b) brainstorm demo ideas → log here; (c) write HANDOFF entry. Demo ideas logged so far: Ch3 — SDT slider (d-prime vs. β), visual illusions, Gestalt grouping. Ch5 — Rescorla-Wagner/prediction-error simulator. Ch3 specifically is the highest-priority chapter for demos (phenomena that are hard to describe but easy to show). Chs 1–2, 4, 6–13 — TBD during drafting pass.
10. **Ch1 images still blocked on Jon.** He uploaded "Images with links.docx" — a curated list of 6 historical-figure portraits (Wundt, James, Watson, Skinner, Freud, Turing) from Wikimedia Commons with licensing notes, each mapped to a specific spot in Ch1. The sandbox cannot reach wikimedia.org domains (confirmed: both curl and the web-fetch tool fail/return empty) — Jon needs to download the actual image files himself before any of this can move forward. No `docs/images/ch01/` folder exists yet.

---

## Lessons from Chapter 1 and 2 (apply going forward)

- **Always check `docs/index.html` first for chapter order/numbering** before deriving it from `concept_lineage_revised.csv` or asking Jon. Early sessions burned several rounds deducing a plausible order from the CSV alone when `docs/index.html` already had the real authoritative order on file. *[Historical context, pre-Session-31: the book had 14 chapters at the time this lesson was written; Stress & Health was a separate Ch14 not represented in the CSV. Session 31 merged Chs 12+13 and renumbered Ch14→Ch13, giving the current 13-chapter structure.]*
- Jon prefers tables over long prose for sequential/comparative content (e.g., historical schools) — ask before writing multi-paragraph treatments of "school A, then school B, then school C" content; a table with Question/Contribution/Limitation columns is usually better and tighter.
- Jon's academic identity is animal behavioral ecology / evolutionary biology, NOT "evolutionary psychology" — never use that field-label for his own framing or voice. Use "evolutionary perspective" or "behavioral-ecology framing" instead.
- Evolutionary/comparative framing should appear but stay proportionate — don't let it dominate a chapter that isn't specifically about biological/evolutionary mechanisms (save the deep treatment for Ch. 2).
- Always verify citations against search before finalizing a References section — don't rely on memory for journal volume/page numbers. Build a References section (full citations) distinct from Further Reading (curated, annotated).
- Avoid panels/distinctions that don't serve "getting fundamentals across" even if technically accurate (e.g., cut the Psychology vs. Psychiatry panel from Ch1 — Jon judged it a distraction, not core).
- Add 2–3 concrete, recognizable daily-life examples per chapter (worked well: the flinch example, dog-training/notification-dread, phone-checking multi-perspective walkthrough).
- Review question answers use `<details>/<summary>` in HTML so rationale stays hidden until clicked — keep this pattern for retrieval practice.

---

## Key Files

| File | Location | Purpose |
|------|----------|---------|
| `concept_lineage_revised.csv` | `source/` | 181 concepts with era lineage and risk flags |
| `voice_profile_merged.csv` | `source/` | 129 voice entries across Gen Psych + 5 specialist courses |
| `chapter-spec.md` | `pipeline/` | Full chapter-writing pipeline spec (v3.0) |
| `html-conversion-spec.md` | `pipeline/` | HTML conversion reference: sidebar template, all CSS class names, every structural pattern — use this for Codex batch conversion |
| `index.html` | `docs/` | TOC landing page (GitHub Pages root) — live |
| `01-history-approaches.html` | `docs/chapters/` | Chapter 1 — complete and live |
| `ch01-history-approaches.md` | `source/chapters/` | Chapter 1 markdown source |
| `ch02-research-methods.md` | `source/chapters/` | Chapter 2 markdown source — v0.3, 6 figures, HTML on hold |
| `ch03-neuroscience-biological-bases.md` | `source/chapters/` | Chapter 3 markdown source — v0.3, Jon's structural review applied |
| `03-neuroscience.html` | `docs/chapters/` | Chapter 3 HTML — complete (Session 37) |
| `ch04-sensation-perception.md` | `source/chapters/` | Chapter 4 markdown source — v0.3, 6 figures, Other Senses sidebar, awaiting Jon's review |
| `ch05-states-of-consciousness.md` | `source/chapters/` | Chapter 5 markdown source — v0.2, 13 CON-* concepts (CON-013 added), awaiting Jon's review |
| `ch06-learning.md` | `source/chapters/` | Chapter 6 markdown source — v0.1, awaiting Jon's review |
| `ch07-memory.md` | `source/chapters/` | Chapter 7 markdown source — v0.2, awaiting Jon's review |
| `ch08-thinking-language-intelligence.md` | `source/chapters/` | Chapter 8 markdown source — v0.1, awaiting Jon's review |
| `ch09-lifespan-development.md` | `source/chapters/` | Chapter 9 markdown source — v0.3, awaiting Jon's review |
| `ch10-social-psychology.md` | `source/chapters/` | Chapter 10 markdown source — v0.1, awaiting Jon's review |
| `ch11-personality.md` | `source/chapters/` | Chapter 11 markdown source — v0.2, 2 figures (fig11-1, fig11-2), awaiting Jon's review |
| `ch12-emotion-stress-coping.md` | `source/chapters/` | Chapter 12 markdown source — v0.1, Barrett-centered, merges former Ch12+Ch13, awaiting Jon's review |
| `ch13-psychological-disorders-therapy.md` | `source/chapters/` | Chapter 13 markdown source — v0.1, awaiting Jon's review |
| `style.css` | `docs/css/` | Site styles incl. callout variants, tables, review-question pattern |

---

## Session Log

---

### 2026-06-25 — Session 38

**What happened:** Added interactive components to `docs/chapters/prologue.html`.

**New files created:**
- `docs/css/prologue-interactive.css` — styles for all interactive components; inherits CSS variables from style.css
- `docs/js/prologue-interactive.js` — all component logic; no framework, no backend, no raw answer storage

**Components implemented:**
1. **Hybrid retrieval prompts** — all 8 Stop & Retrieve callouts converted to two-stage interactive boxes: write answer → rate confidence (Low/Medium/High) → reveal model answer → self-score against 4 criteria → calibration feedback line. Feedback is specific and non-shaming, tied to Section 7 content. Stores only `{promptId, confidence, scored, total, timestamp}` in localStorage — never the student's written text.
2. **Calibration dashboard** (`#calibration-dashboard`, before Review Questions) — aggregates confidence and self-score across all 8 prompts; shows attempted count, avg accuracy, avg confidence, over/underconfident counts, a cautious interpretation sentence. Clear-data button. Graceful fallback if localStorage unavailable.
3. **Stepwise MCQs** — two placed in the chapter: one after the recognition/recall/application table in Section 3 (`mcq-recognition-levels`), one in Section 8 before the final Stop & Retrieve (`mcq-ai-use`). 5-second countdown before options appear; explanatory feedback (not just correct/incorrect).
4. **Spaced retrieval scheduler** — replaces static Study Contract. Quiz date input auto-suggests three sessions (within 24h, midpoint, 1–2 days before). Print / copy plain text / download .ics calendar file with three events titled with student's concept list.
5. **AI prompt builder** — replaces static single-prompt callout. Three patterns (A: quiz me, B: critique my explanation, C: application scenarios), each with topic input, copy-to-clipboard, accessible status message (no alert()). Teaching note under each explains why the pattern works.

**Phone-presence demo deliberately not implemented** — within-subject design in a browser has confounds severe enough to undermine the chapter's credibility on empirical precision.

**HTML changes to `prologue.html`:**
- Added `<link>` for `prologue-interactive.css`
- Added `data-interactive="retrieve"` and `data-prompt-id="..."` to all 8 `callout--stop-retrieve` divs (not the "Core Distinction" box at the top, which has no data attributes and is unchanged)
- Two MCQ `callout--stop-retrieve` divs inserted (Section 3 after levels table; Section 8 before final Stop & Retrieve)
- Static Study Contract replaced with `<div id="scheduler-widget">`
- Static AI prompt callout replaced with `<div id="ai-prompt-builder">`
- Calibration dashboard div inserted before Review Questions
- `<script src="js/prologue-interactive.js">` added before `</body>`

**Verification:** All 8 data-prompt-id values in HTML confirmed to match PROMPTS object keys in JS. Both MCQ IDs confirmed to match MCQS object keys. JS syntax check passed (Node --check). CSS brace count balanced (75/75). Script and stylesheet links confirmed in HTML.

**Open items:**
- Jon's line-by-line review of the interactive components in the browser
- Confirm localStorage behavior in the LMS environment (Canvas may clear it unpredictably — dashboard is designed to degrade gracefully but students should know data is session-scoped)
- Demo embed URLs for working memory demo (Section 1 placeholder comment still present)

**Files created/modified this session:**
- `docs/css/prologue-interactive.css` — new
- `docs/js/prologue-interactive.js` — new
- `docs/chapters/prologue.html` — interactive components wired in
- `HANDOFF.md` — this entry prepended

---

### 2026-06-25 — Session 37

**What happened:** Jon's structural review of Chapter 3 (Neuroscience). Applied full revision plan to markdown (v0.2 → v0.3); converted to HTML.

**v0.3 revision rationale:** Jon wanted deeper coverage of fewer topics rather than broad survey. Drove four structural changes: (1) neurotransmitters treated as a principle (excitation/inhibition → neuromodulation), not a catalog of chemicals with ascribed functions; dopamine retained as the single worked example because Jon teaches prediction error, goal-directed action, operant conditioning, and ADHD meds around it; serotonin/GABA/oxytocin removed; (2) agonist/antagonist section and Fig 3.5 removed from chapter flow; (3) brain imaging reduced from 4-method survey to fMRI only, with interpretive lesson foregrounded; (4) network framing paragraph added ("Brain Regions Are Specialized, but Behavior Is Networked") before Gage section.

**Changes applied to `ch03-neuroscience-biological-bases.md`:**
- LO2 rewritten to reflect network framing
- Neurotransmitter section restructured: excitation/inhibition principle → neuromodulation concept → dopamine as worked example (prediction error, Schultz 1998; goal-directed action; ADHD medication connection)
- Serotonin/GABA/oxytocin paragraphs removed
- Agonist/antagonist section removed; Fig 3.5 removed from chapter flow (file retained for slides)
- Sickness behavior/depression paragraph and Hart (1988) citation removed; Insel & Young (2001) removed
- Brain imaging paragraph replaced: 4-method table → fMRI-focused paragraph; Fig 3.8 removed from chapter flow (file retained)
- "Brain Regions Are Specialized, but Behavior Is Networked" paragraph added
- Gage section updated: Harlow (1868) cited for personality-change account; Harlow (1848) retained for acute injury description
- AI Connection sidebar compressed (~250 → ~150 words)
- Figure captions renumbered: old 3.6→3.5, old 3.7→3.6, old 3.9→3.7 (filenames unchanged to preserve slide references)
- Key Terms: removed Agonist, Antagonist, GABA, Oxytocin; added Dopamine, Neuromodulator
- Review Q4 updated; Chapter Summary updated; Connections table updated
- References: added Harlow (1868); removed Hart (1988) and Insel & Young (2001)
- Further Reading: added Harlow (1868); oxytocin/vasopressin demo placeholder removed

**HTML created:** `docs/chapters/03-neuroscience.html` — complete. Matches Ch1 HTML structure exactly: sidebar with Ch3 active, all callout classes, `<details>/<summary>` review questions, `<dl class="key-terms">`, `<div class="further-reading">`, `<div class="references">`. 7 active figures use original filenames (fig3_6_stress_response_fast_slow.png serves as caption Fig 3.5; fig3_7_ans_balance_lecture.jpg as Fig 3.6; fig3_9_split_brain_logic.png as Fig 3.7). Jon confirmed he created the page directly; file also present at the path above.

**Open items remaining for Ch3:**
- Two demo placeholders still need live embed URLs: action-potential simulator (awesome-sauce_neuroscience repo) and dopamine/neurotransmitter mixing board (neuronew repo)
- Body word count still ~5,400 after revision — over 3,500–5,000 target; Jon's call whether to trim further

**Files created/modified this session:**
- `source/chapters/ch03-neuroscience-biological-bases.md` — v0.2 → v0.3
- `docs/chapters/03-neuroscience.html` — new, complete
- `HANDOFF.md` — Status, Key Files updated; this entry prepended

---

### 2026-06-24 — Session 36

**What happened:** Planning/status reconciliation pass. No new content generated.

**Files inspected:**
- `docs/index.html` — authoritative TOC. Confirmed 13 chapters: Ch12 = Emotion, Stress & Coping; Ch13 = Psychological Disorders & Therapy.
- `HANDOFF.md` — found 6 stale references to "14 chapters" / "Ch14" surviving from before the Session 31 restructure.
- `source/visuals-inventory.md` — already consistent with 13-chapter structure. No edits needed.
- `docs/teaching/activity-ideas.md` — had entries for Prologue, Ch8, Ch11, Ch12. Ch13 missing.

**Edits made:**

*HANDOFF.md (6 changes):*
1. "14-chapter TOC and order" → "13-chapter TOC and order (updated Session 31)" (What's ready bullet)
2. "Ch2–Ch14 → HTML conversion" → "Ch2–Ch13" (What's not started)
3. "All 14 chapters now have a v0.1 draft" → "All 13 chapters (plus Prologue) now have at least a v0.1 draft" (old Next Up item 1)
4. "Chapters 8–14" → "Chapters 8–13" (old Next Up item 2)
5. "After all 14 chapters are drafted" → "After all 13 chapters are drafted" (twice, in old Next Up items 8 and 10)
6. "Chs 3–7, 9–14 — TBD" → "Chs 3–7, 9–13" and "Chs 1–2, 4, 6–14" → "Chs 1–2, 4, 6–13"
7. Lessons section: replaced the specific historical "14th chapter" wording with a bracketed note clarifying this was the pre-Session-31 structure.

*docs/teaching/activity-ideas.md (1 addition):*
- Added Chapter 13 section with two Draftable entries (Diagnostic Criteria Case Vignettes; Therapy Matching Exercise) drawn from the Session 30 drafting log. Used file's existing entry template style. Did not generate polished assignment prose.

**Intentionally not changed:**
- `source/visuals-inventory.md` — already correct; no edits.
- `docs/index.html` — already correct; no edits.
- Older session log entries — preserved as historical record; stale chapter numbers within them left in place (they describe the state of the project at the time they were written).
- No new figures, chapter content, or reorganization.

**Files modified:**
- `HANDOFF.md` — 7 targeted edits to Status and Next Up sections + Lessons section
- `docs/teaching/activity-ideas.md` — Ch13 section appended

---

### 2026-06-24 — Session 35

**What happened:** Revised prologue to v0.2 per Jon's detailed review. Built two new figures.

**Figures built (docs/images/prologue/):**
- `learning_exposure_retrieval_decision_tree.svg/.png` — "Exposure Is Not Learning" flowchart (Figure P.3). Jon's own GPT-original (from holding space). Proper diamond decision nodes, color-coded: orange = decision, red = familiarity, blue = recall, green = strong evidence, gray = next action.
- `ai_replacement_vs_scaffolding.svg/.png` — "AI Can Replace Retrieval or Support It" (Figure P.4). Jon's own GPT-original (from holding space). Two-column layout: red replacement pathway vs. teal scaffolding pathway. Both replaced the programmatic SVG versions built earlier this session.

**Prologue v0.2 changes applied:**
- Added "How to Use This Prologue" block (after opener, before learning objectives)
- Softened opener — removed "often the worst" phrasing; added Dunlosky et al. (2013) as the evidentiary basis
- Added Ward et al. (2017) phone-presence claim with narrow, study-specific wording
- Corrected K-D label: Study 1 → Study 2 (logical reasoning, per Jon confirming from PDF)
- Softened Ebbinghaus caption — removed specific percentages; notes method-specificity (nonsense syllables, savings measure)
- Revised AI memory language — product-agnostic; notes some systems retain context but still don't know what student understands
- Reframed Clark & Brennan as applied communication framework (not an AI source)
- Added Dunlosky et al. (2013) and Diekelmann & Born (2010) to inline citations and full References section
- Added Study Method Diagnostic table (5 rows: what you did / what it mostly trains / better next step)
- Added Do Not Confuse box: deep processing ≠ long processing (Section 2)
- Added boxed AI Study Prompt (copy-and-use quiz prompt) in Section 8
- Compressed sleep to 3 subsections (attention / consolidation / emotional regulation); all-nighter integrated into consolidation paragraph
- Added metacognition row to Learning System table
- Added Study Contract box with download placeholder (`docs/assignments/prologue-study-contract.docx` — build during final activities pass)
- Added Cepeda et al. (2006) for spacing; added Dunning (2011) for metacognition review
- Updated Further Reading (Walker removed; Diekelmann & Born added; Dunlosky added as first entry)
- Wired P.3 and P.4 figure references in body text
- All 4 figures now confirmed in `docs/images/prologue/`

**Open items:**
- Confirm demo embed URLs (working memory demo, retrieval cards, etc.) before HTML conversion
- Build `docs/assignments/prologue-study-contract.docx` during final activities pass
- Jon's line-by-line review of prologue v0.2

**Files created/modified:**
- `source/chapters/prologue-how-to-study.md` — v0.1 → v0.2
- `docs/images/prologue/learning_exposure_retrieval_decision_tree.svg/.png` — new
- `docs/images/prologue/ai_replacement_vs_scaffolding.svg/.png` — new
- `HANDOFF.md` — this entry prepended

---

### 2026-06-24 — Session 34

**What happened:** Drafted the prologue — `source/chapters/prologue-how-to-study.md` (v0.1).

**Source material:** Adapted directly from Jon's own `psych101_awesome-sauce` "How Studying Works" content (https://jkoxford-a11y.github.io/psych101_awesome-sauce/how-studying-works.html) as instructed by spec §0. That site covers attention, working memory, encoding, retrieval, spacing, sleep, study habits, and AI use — all adapted and reorganized into the textbook's standard format.

**What was added beyond the awesome-sauce content:**
- Section 7 (Metacognition) — new; uses the `fig_dunning_kruger_actual_data.svg/.png` figure built in Session 33. Describes what Kruger & Dunning (1999) actually found (bar chart by quartile — bottom-quartile overestimation of ~50 percentile points; top-quartile slight underestimation). Connects calibration to retrieval practice as the antidote.
- The Ebbinghaus forgetting curve figure (`fig_forgetting_curve_ebbinghaus.png`, also from Session 33) embedded in Section 4 (Spacing).
- Full Clark & Brennan grounding theory applied to AI in Section 8 (Working With AI), per spec §12 prologue content.
- Connections table (11 rows linking to Chs 4–10), review questions (8, all with wrong-answer rationales), key terms (15), and further reading (5 entries with annotations, including a Walker caveat).

**Architecture:** Misconception Opener → Learning Objectives (8) → Opening Case (Emma/Luis/Nia) → Learning System table → Section 1 Attention → Section 2 Encoding → Section 3 Retrieval → Section 4 Spacing + Ebbinghaus figure → Section 5 Sleep → Section 6 Study Habits → Section 7 Metacognition + DK figure → Section 8 AI → Summary → Connections → Review Questions → Key Terms → Further Reading.

**Word count:** 6,058 total; body prose estimated ~4,000 (inside 3,500–5,000 target).

**Open items / decisions for Jon:**
- Demo embeds: the awesome-sauce demos (working memory demo, retrieval cards, spacing simulator, AI decision tree) are referenced in the source as interactive placeholders. Jon needs to confirm live URLs for iframe embeds before HTML conversion. Working memory demo URL: https://jkoxford-a11y.github.io/psych101_awesome-sauce/working-memory-demo.html — confirm this is stable/current.
- Walker (2017) included in Further Reading with an explicit caveat about contested claims. Jon may want to drop it or expand the caveat.
- Section 8 (AI unit) is the first appearance of the Clark & Brennan grounding theory in the book. Jon should decide whether this level of technical specificity is right for an intro audience, or whether a lighter framing is better.
- The three-student opening case (Emma/Luis/Nia) is adapted from the awesome-sauce content — Jon should confirm he is happy with this framing as the prologue's main pedagogical hook.

**Files created/modified:**
- `source/chapters/prologue-how-to-study.md` — new, v0.1
- `HANDOFF.md` — Status updated; this entry prepended

---

### 2026-06-24 — Session 33

**What happened:** Three tasks following Jon's responses to the visuals inventory decisions.

**(1) Built accurate Dunning-Kruger figure** from Kruger & Dunning (1999) Study 1 actual data. The popular "Mount Stupid" spike-at-zero curve doesn't appear in the paper — the real finding is a grouped bar chart showing 4 quartile groups' actual vs. perceived test performance. Bottom quartile overestimates by ~50 percentile points; top quartile slightly underestimates. Saved as `docs/images/prologue/fig_dunning_kruger_actual_data.svg/.png`.

**(2) Chose best Ch4 figures** after viewing all competing versions:
- Fig 4.3 (retina): Programmatic SVG wins — shows actual receptor density data.
- Fig 4.5 (cochlea): Programmatic SVG wins — shows actual tonotopic frequency map.
- Fig 4.6 (gate control): Switched to infographic — it shows three gate states (open/partially closed/closed) more clearly than the SVG. Updated ch04 markdown to reference `fig_gate_control_infographic.png`.

**(3) Renamed all image files to descriptor-only names** (no sequential numbers) across Prologue, Ch02–Ch05, Ch08, Ch11, Ch13. Ch01 left unchanged (live HTML). Pattern: `fig_<descriptor>.png`. All chapter markdown references (ch02, ch03, ch04, ch11) updated to match. Orphaned old numbered files remain in folders — cannot delete from bash due to OneDrive FUSE permissions; Jon can delete manually.

Also: for Ch02, chose the new two-panel `fig_random_sampling_vs_assignment.png` (from holding space) over the old flowchart version — the side-by-side design makes the distinction cleaner. Kept both reliability/validity figures (`fig_reliability_validity_dartboard.svg` and `fig_operational_definition_reliability_validity.png`) — they cover different aspects and are complementary.

**Files modified:**
- `docs/images/prologue/` — renamed `fig0_1` → `fig_forgetting_curve_ebbinghaus.png`; added `fig_dunning_kruger_actual_data.svg/.png`
- `docs/images/ch02/` — all files renamed to `fig_*` descriptors; old numbered files remain (orphaned)
- `docs/images/ch03/` — all 15 files renamed to `fig_*` descriptors
- `docs/images/ch04/` — all 15 files renamed to `fig_*` descriptors
- `docs/images/ch05/` — 4 files renamed
- `docs/images/ch08/` — 10 files renamed
- `docs/images/ch11/` — 2 files renamed
- `docs/images/ch13/` — 1 file renamed
- `source/chapters/ch02-research-methods.md` — 7 figure references updated
- `source/chapters/ch03-neuroscience-biological-bases.md` — 7 figure references updated
- `source/chapters/ch04-sensation-perception.md` — 6 figure references updated (4.6 now uses infographic)
- `source/chapters/ch11-personality.md` — 2 figure references updated
- `HANDOFF.md` — Status updated; this entry prepended

---

### 2026-06-24 — Session 32

**What happened:** Two tasks. (1) Assessed all images in `Potential Images for Chapters Holding Space/` and moved viable ones to their chapter `docs/images/` folders. (2) Compiled a full visuals inventory by chapter.

**Images moved/organized:**
- `docs/images/prologue/` — created; added `fig0_1_forgetting_curve.png` (Ebbinghaus curve with spaced review intervals)
- `docs/images/ch02/` — added 5 new figures: evidence ladder (fig2-5), random sampling vs. assignment (fig2-6), operational definition/reliability/validity (fig2-7), Type I/II error matrix with AI analogy (fig2-8), double-blind placebo flowchart (fig2-double-blind-placebo)
- `docs/images/ch04/` — renamed 3 loose infographic PNGs to proper figure names: `fig4_3_retina_infographic.png`, `fig4_5_cochlea_infographic.png`, `fig4_6_gate_control_infographic.png` (richer versions alongside existing SVG programmatic figures)
- `docs/images/ch05/` — created; added `fig5_1_two_process_sleep_model.svg/.png` and `fig5_2_sleep_hypnogram.svg/.png` (rendered from SVG via cairosvg at 150 dpi)
- `docs/images/ch08/` — created; added 5 figures × SVG+PNG: bias/question substitution matrix, IQ standardization curve, Linda nested-set diagram, Wason task prompt, Wason task answer
- `docs/images/ch13/` — created; added `fig13_1_anxiety_maintenance_cycle.png` (4-step cycle with ERP callout)

**Images NOT moved (decisions needed):**
- `dunning k.jpg` in holding space: the popular "peak of Mount Stupid" curve shape does not match Kruger & Dunning (1999) actual data — the low-competence spike is an internet distortion. Did not move per Jon's "never overstate" instruction. Jon needs to decide: redraw from actual data, add a caveat caption, or drop.
- Two Ch2 candidate images excluded due to typos: `d87e5616...` has "Performace"; `2bf60bb8...` has "not conlusive." Both need regeneration before use.
- Ch2 folder has numbering conflicts (old `fig2-5-sampling-vs-assignment` and new `fig2-6-random-sampling-vs-assignment` for same concept) — Jon needs to reconcile when he supplies his own images.

**Visuals inventory:** Full per-chapter breakdown saved at `source/visuals-inventory.md`. Covers: existing figures ✅, needed figures 🔲, decisions pending from Jon ⚠️. Biggest gaps: Ch6 (0 figures), Ch7 (0 figures), Ch9 (0 figures), Ch10 (0 figures), Ch12 (0 figures).

**Files created/modified this session:**
- `docs/images/prologue/` — new folder + fig0_1
- `docs/images/ch02/` — 9 new files (5 figures × PNG+SVG, plus one PNG-only)
- `docs/images/ch04/` — 3 files renamed
- `docs/images/ch05/` — new folder + 4 files (2 SVG + 2 PNG)
- `docs/images/ch08/` — new folder + 10 files (5 figures × SVG+PNG)
- `docs/images/ch13/` — new folder + 1 file
- `source/visuals-inventory.md` — new, full visuals inventory by chapter
- `HANDOFF.md` — Status, Next Up updated; this entry prepended

---

### 2026-06-24 — Session 31

**What happened:** Jon approved a redesign of Chs. 12 and 13 (from prior session's discussion) and confirmed with "yes." Drafted the new merged chapter: `source/chapters/ch12-emotion-stress-coping.md` (v0.1). Updated `docs/index.html` to reflect the 13-chapter structure. Updated HANDOFF.md.

**Redesign rationale:** Jon found the original 12-concept Motivation & Emotion chapter "squishy" and preferred Lisa Feldman Barrett's constructionist account as the central framing. Ch. 13 (Stress & Health) had zero entries in `concept_lineage_revised.csv` and was already covered by MOT-006/007/008. Merging into a single Barrett-centered chapter with an allostasis spine was approved (Option B). SDT, intrinsic/extrinsic motivation, and Maslow as a theory were dropped by design decision.

**Architecture of new Ch. 12:**
- Misconception Opener: "Emotions are reflexes that happen to you"
- Section 1: Body budget — homeostasis vs. allostasis (McEwen 1998), interoception, core affect / Russell's circumplex
- Section 2: Emotions are constructed — James-Lange / Cannon-Bard / Schachter-Singer as scaffolding; Barrett's constructionist account; Classic Study Walkthrough: affect labeling (Torre & Lieberman 2018 meta-analysis); emotional granularity (Kashdan, Barrett & McKnight 2015); brief Ekman note under constructionist reading
- Section 3: Stress as budget emergency — GAS (Selye 1956), fight-or-flight (Cannon 1929), tend-and-befriend (Taylor et al. 2000), allostatic load (McEwen 1998)
- Section 4: Coping — problem-focused / emotion-focused (Lazarus & Folkman 1984), social support, body-budget deposits (sleep/movement/nutrition), affect labeling as active coping
- AI Connection: Barrett framework makes the gap precise — no body, no interoception, no allostatic state; emotion-shaped output without the bodily referent; affect-labeling effect may still have functional value for users regardless of speaker source

**Concepts covered:** MOT-004 (theories of emotion) ✓, MOT-005 (Ekman/basic emotions — brief) ✓, MOT-006 (GAS/Selye) ✓, MOT-007 (fight-or-flight/tend-and-befriend) ✓, MOT-008 (coping styles) ✓. MOT-001/002/003 dropped by design. New content (allostasis, interoception, core affect, emotional granularity, affect labeling, allostatic load) added from primary literature.

**Citations:** All 24 references independently verified. Programmatic cross-check: no orphans in either direction.

**Body word count:** ~4,800 estimated (inside 3,500–5,000 target).

**Decisions made:**
- Book is now 13 chapters. Former Ch. 14 (Disorders & Therapy) renumbers to Ch. 13.
- `docs/index.html` updated: Ch. 12 → `12-emotion-stress-coping.html` (not yet created); Ch. 13 → `13-disorders-therapy.html`.
- Old files renamed to `_superseded-ch12-motivation-emotion.md` and `_superseded-ch13-stress-health.md` — retained on disk but excluded from rendering by the underscore prefix convention.
- Noba pages returned empty again (client-side rendered). MOT-004 theories-of-emotion content sourced from verified primary papers directly (James 1884, Cannon 1927, Schachter & Singer 1962, Barrett 2017 SCAN paper). No OpenStax needed this time — primary literature alone was sufficient. No copyright deviation to flag.
- Activity ideas logged in chapter footer: body-budget audit (one-week tracker), granularity exercise (20-item emotion word list), coping strategy matching (6 scenarios varying in controllability).
- Demo ideas logged in chapter footer: core affect circumplex (live 2D class overlay), body-budget ledger (deposits/withdrawals simulation), GAS timeline (animated cortisol/immune function).

**Files created/modified this session:**
- `source/chapters/ch12-emotion-stress-coping.md` — new v0.1; then **v0.2** (review corrections applied — see below)
- `docs/index.html` — updated to 13-chapter TOC (Ch.12 renamed, Ch.13 removed, Ch.14→Ch.13)
- `docs/teaching/activity-ideas.md` — Ch.12 section added (4 activities: body-budget audit, granularity exercise, coping strategy matching, AI affect-labeling check)
- `HANDOFF.md` — Status, Next Up, Key Files, chapter order updated; this entry prepended

**v0.2 changes (review corrections — same session):**
- Barrett framing softened throughout: "most comprehensive current account" → "one influential contemporary framework"; "still an active area of debate" added to theory table
- Do Not Confuse: Constructed Does Not Mean Fake or Chosen box added after Misconception Opener
- Classic theories prose → 4-row comparison table (James-Lange / Cannon-Bard / Schachter-Singer / Constructed emotion)
- Stop & Retrieve prompt added after core affect section
- Reference cleanup: Damásio et al. (1994) and Lazarus (1991) removed as orphans; Ekman (1992), Barrett et al. (2019) PSPI, and Heinrichs et al. (2003) added
- Citation disambiguation: Barrett (2017) → (2017a) book / (2017b) SCAN paper throughout; McEwen (1998) → (1998a) NEJM / (1998b) NYAS throughout
- Torre & Lieberman (2018) corrected from "meta-analysis" to "review"
- Emotional granularity: worked mini-example added ("I feel bad" vs. precise label); intervention sentence softened
- Ekman note: added Ekman (1992) citation; added Barrett et al. (2019) facial movement caveat
- Oxytocin: "introduced in Chapter 3" cross-reference removed (oxytocin not in Ch.3 currently); defined inline with **bold**
- GAS resistance stage: "stress hormones remain elevated" → "stress mediators remain repeatedly engaged"
- Post-finals illness example: hedged to "plausible interpretation" / "consistent with"
- Social support/oxytocin: Heinrichs et al. (2003) added; claim softened from assertive to evidenced
- Sleep: "single most impactful variable" removed; replaced with evidenced hedged framing
- Movement/BDNF, blood glucose: both hedged
- AI Connection: "clinically significant" → "may matter when people use AI … in ways that replace rather than supplement genuine social connection"
- Coping match table added in Section 4
- Key Terms: oxytocin added
- Activity backlog (docs/teaching/activity-ideas.md): Ch.12 section added with 4 activities

---

### 2026-06-24 — Session 30

**What happened:** Jon said "Chapter 14 draft" (after a restart). Read HANDOFF.md per standing instruction; confirmed Chapter 14 (Psychological Disorders & Therapy) is the last remaining unstarted chapter. Confirmed title/filename from `docs/index.html`. Pulled all 12 DIS-* concepts from `concept_lineage_revised.csv` — all `canonical-common-knowledge` with instructor-original origin EXCEPT DIS-009 (Humanistic therapy / client-centered), which is flagged `needs-verification` (appeared only in SP18, publisher-supplied). Attempted to fetch Noba for DIS-009 but the server timed out (client-rendered pages, same pattern as Sessions 9/20). Applied the established deviation precedent: drafted DIS-009 from Rogers's own primary sources (Rogers 1951, 1957) and the Flückiger et al. 2018 meta-analysis already verified in Ch11, with an explicit inline note in the chapter header. Verified 5 citations independently via web search: Temerlin (1968) — J. Nervous and Mental Disease, 147(4), 349–353 ✓; Seeman et al. (1976) — Nature, 261, 717–719 ✓; Cardno & Gottesman (2000) — American Journal of Medical Genetics, 97(1), 12–17 (MZ concordance 40–65%, not the "~50%" shorthand) ✓; Geddes et al. (2003) — Lancet, 361(9360), 799–808 ✓; Craddock & Sklar (2013) — Lancet, 381, 1654–1662 ✓. 15 additional citations included from high-confidence training knowledge and flagged [*] in References for Jon to audit. Scanned voice profile for Disorders-tagged entries; used the 3D criteria discussion tip (51 hits, perennial), fear-vs-anxiety "right now" distinction (3 hits, Disorders slides), Sapolsky/dopamine → depression and ADHD (5 hits), and Phineas Gage → ASPD (82 hits, cross-chapter). Programmatic concept check: 12/12 DIS-* concepts present. Body word count: ~4,260 (inside 3,500–5,000 target, first draft).

**Architecture:** 4 sections — (1) Defining and diagnosing: 3D criteria, DSM-5-TR, diathesis-stress model, biopsychosocial model, Classic Study Walkthrough for Rosenhan (1973) with Cahalan (2019) data-integrity caveat foregrounded (consistent with Ch10/SPE treatment), Temerlin (1968) as the better-evidenced labeling-effects complement; (2) Anxiety, mood, and psychotic disorders: GAD/phobia/panic/OCD/PTSD with fear-vs-anxiety opener, MDD with Beck's cognitive triad and Abramson et al. (1978) depressogenic style plus Moncrieff (2022) caveat on serotonin, Sapolsky/dopamine framing for anhedonia, PDD, bipolar I/II (Craddock & Sklar 2013 heritability), schizophrenia positive/negative symptoms, dopamine hypothesis with complexity caveat (Seeman et al. 1976), twin concordance (Cardno & Gottesman 2000); (3) Personality and neurodevelopmental disorders: three PD clusters, ASPD with Cleckley/PCL-R/Phineas Gage cross-ref, BPD with Linehan biosocial theory, Do Not Confuse panel (ASPD ≠ antisocial behavior ≠ psychopathy ≠ legal insanity), ADHD with dopamine/executive function, ASD with Theory of Mind (Baron-Cohen et al. 1985) and Ch9 cross-reference; (4) Treatments: Dodo Bird Verdict + therapeutic alliance as frame, psychodynamic (Shedler 2010), humanistic/client-centered (Rogers 1951/1957, Flückiger 2018, DIS-009 deviation flagged), CBT/REBT/ERP/DBT (Beck 1979, Ellis 1962, Linehan 1993, Hofmann et al. 2012), pharmacotherapy (SSRIs/antipsychotics/lithium/benzodiazepines, honest mechanism-uncertainty framing, Cipriani et al. 2018), ECT (Geddes et al. 2003, modern-vs-Cuckoo's-Nest reframe). Full AI Connection per spec §12 Ch13 touchpoints: (a) diagnostic anchoring/premature closure = Ch8 heuristics at scale; (b) HIPAA/PHI — what clinical information entered into AI tools is actually protected; (c) AI sentiment mirroring ≠ empathy — pattern completion vs. regulated affective presence; (d) cognitive restructuring breakdown — requires a believing, feeling client and a therapist who notices what's unsaid.

**Decisions made:**
- Rosenhan (1973) treated like SPE in Ch10: classic study walkthrough with Cahalan (2019) data-integrity critique foregrounded. Phenomenon of labeling effects supported by Temerlin (1968) as a better-controlled complement.
- OCD and PTSD noted as now in separate DSM chapters from anxiety disorders proper — accurate per DSM-5-TR, covered in Section 2 for pedagogical continuity.
- Serotonin/depression: same honest treatment as Session 14 (Ch1 revision) and Ch11 — Moncrieff et al. (2022) used; SSRI efficacy acknowledged as real but mechanism-uncertain (Cipriani et al. 2018).
- 15 unverified citations flagged [*] for Jon's audit — transparent departure from full-verification standard, disclosed rather than silently included.
- Activity ideas: Diagnostic criteria case vignettes (apply 3D criteria to ambiguous vignettes) — Draftable; Therapy matching exercise (match presenting problem to evidence-based treatment) — Draftable.
- Demo ideas: No existing demo covers diagnosis or therapy. Possible future builds: symptoms-to-diagnosis case simulator; therapy-approach decision tree.

**Files created/modified this session:**
- `source/chapters/ch14-psychological-disorders-therapy.md` — new, full first draft (v0.1), ~4,260 body words, 12/12 DIS-* concepts, 24 references (15 flagged [*] for audit)
- `HANDOFF.md` — Status, Next Up, Key Files updated; this entry prepended

---

### 2026-06-24 — Session 29

**What happened:** Resumed mid-task (context had compacted again). Completed Ch9 v0.2 → v0.3 editorial pass based on Jon's detailed review. All nine prose fixes applied; learning objectives 6-7 rewritten; References expanded and corrected; Key Terms expanded with 5 new entries.

**Changes in v0.3:**
- Learning objectives 6 & 7 rewritten to match actual chapter content (moral motivation/reasoning distinction and identity formation gist, not Kohlberg stages or Erikson eight-stages)
- "None of us remembers being two" → "one reason most adults have few reliable autobiographical memories from the first years of life"
- Teratogen/alcohol paragraph: restructured to note alcohol has no established safe window (Jones & Smith, 1973 added); sensitive-period logic preserved for teratogens in general
- Genie paragraph: "Their cases illustrate..." → "Cases such as Genie are consistent with the sensitive-period account, but they are not clean tests" (trauma/malnutrition/unstable care entangled)
- Core knowledge: "not learned from experience" → "not constructed from scratch by general learning alone; initial biases or representational starting points that experience tunes and elaborates"; "number" → "quantity tracking" for Wynn
- AI/ZPD: assimilation/accommodation framing removed; replaced with "performance completed but learner's schema remains unchanged; effective scaffolding should leave student more capable after support removed"
- DEV-013 internal artifact removed from parenting section
- "deep evolutionary roots rather than being constructed through years of socialization" → "consistent with the idea that at least some forms of prosocial motivation have deep evolutionary roots and do not have to be constructed entirely through explicit teaching"
- Retrieval prompt: "why do they need each other?" → "why is neither a complete account of moral behavior by itself?"
- In-text citations added where claims were under-cited: Baumrind (1966) for parenting styles intro; Huttenlocher (1979) for synaptogenesis; van IJzendoorn & Kroonenberg (1988) for cross-cultural attachment caution; Casey et al. (2008) added alongside Blakemore & Choudhury (2006) for adolescent brain; Horn & Cattell (1967) for fluid/crystallized; Charles & Carstensen (2010) for well-being finding
- Key Terms added: Emerging adulthood, Fluid intelligence, Crystallized intelligence, Identity formation, Moral motivation, Moral reasoning
- References added: Baumrind (1966), Casey et al. (2008), Charles & Carstensen (2010), Horn & Cattell (1967), Huttenlocher (1979), Jones & Smith (1973), van IJzendoorn & Kroonenberg (1988); Lucca et al. author order corrected (Yuen 2nd, not Capelier-Mourguy); all entries alphabetized

**Decisions made:**
- Huttenlocher (1979) is the frontal cortex synaptogenesis paper; used for the general synaptogenesis claim. A more general review (e.g., Huttenlocher 1990) would also work but this is the primary empirical paper
- Casey et al. (2008) added as dual-systems reference alongside Blakemore — two independent labs' framing of the same adolescent-brain asymmetry is worth showing
- Kept the "Think About It" Erikson box intact — the intimacy/identity sequence point it invokes still works even with the table gone
- Charles & Carstensen (2010) is the review paper that best captures the emotional-aging / well-being finding

**Files modified this session:**
- `source/chapters/ch09-lifespan-development.md` — v0.2 → v0.3 (~16 targeted edits)
- `HANDOFF.md` — Key Files table updated; this entry prepended

---

### 2026-06-24 — Session 28

**What happened:** Continued Ch11 revision. Session 23 had written v0.1; this session applied the full v0.2 revision plan agreed with Jon (via GPT-mediated review), then built the two top-ranked figures and updated the activity backlog and HANDOFF.

**v0.2 changes applied to `ch11-personality.md`:**
- 5-section structure (split v0.1's combined person-situation + assessment section into dedicated Sections 4 and 5)
- Chapter map table added (4 rows: psychoanalytic / humanistic / trait / interactionist)
- Big Five converted from prose to a 5-row table (trait × high × low × misconception × example)
- Do Not Confuse: trait dimension vs. personality type (MBTI critique)
- HEXACO sentence added with Ashton & Lee (2007)
- Mischel r=.30 reframed with both Funder & Ozer (1983) and Funder & Ozer (2019) — single-act limitation distinct from "traits don't matter"
- Rogers therapy evidence narrowed: Flückiger alliance meta-analysis removed, replaced by Farber, Suzuki, & Lynch (2018) positive-regard meta-analysis (g=.28) and Elliott, Bohart, Watson, & Murphy (2018) empathy meta-analysis (r=.28)
- Freud citations corrected: 1923 for structural model; 1933/1964 (New Introductory Lectures, Lecture XXXI) for "seething cauldron / chaos" quote
- Electra complex attribution corrected: Jung coined the term; Freud retained "Oedipus complex" for both sexes; female development in this stage was contested even within psychoanalytic theory
- Recovered-memory caveat added to Freud evaluation
- Rogers worked example added (student with conditions of worth)
- AI Connection: Rao et al. (2023) replaced by Jiang et al. (2024) PersonaLLM (Findings of NAACL 2024, pp. 2162–2185) — LLMs assigned Big Five personas completing personality inventories; caveat added that this is assigned not spontaneous personality, and that LLM "personality" is prompt-sensitive
- Rorschach balanced with Mihura et al. (2013) — validity for some variables, Wood et al. (2003) caution on others
- MMPI narrowed to "clinical personality assessment instruments"
- 4 Do Not Confuse panels; 5 Stop & Retrieve prompts; personality assessment table; class-attendance aggregation example
- Body word count: ~3,750 (inside 3,500–5,000 target); 24 references all verified

**Figures built:**
- `fig11-1-trait-signal-aggregation.png` — side-by-side scatter plots showing r≈.29 (single behavioral act) vs. r≈.72 (aggregated across 20 situations), illustrating the noise/signal distinction in trait prediction
- `fig11-2-person-situation-grid.png` — grouped bar chart showing helping behavior across low/medium/high conscientiousness under weak vs. strong situation; range is ~4.7 pts in weak situations vs. ~0.8 pts in strong situations
- Both saved to `docs/images/ch11/` at 180 dpi; figure references wired into chapter markdown at the aggregation example and weak/strong situation paragraphs

**Activity logged:**
- `docs/teaching/activity-ideas.md`: "Situational Press on AI Personality" (Ch11 section, Status: Draftable) — give same model 3 different system prompts, observe behavioral change, rate Big Five per version, discuss what self-concept would require

**Decisions made:**
- Chatbot-prompt personality exercise stays in activity layer only; not inline in chapter body
- Only top 2 figures built now; remaining 6 from Jon's ranked inventory deferred to book-wide figure pass
- PER-003 (Psychosexual stages) flagged for Jon's call — absent from all instructor iterations; kept brief in v0.2

**Files created/modified this session:**
- `source/chapters/ch11-personality.md` — v0.1 → v0.2 (full rewrite, 393 lines, 3,750 body words, 24 references, 2 figures wired)
- `docs/images/ch11/fig11-1-trait-signal-aggregation.png` — new
- `docs/images/ch11/fig11-2-person-situation-grid.png` — new
- `docs/teaching/activity-ideas.md` — Ch11 section added
- `HANDOFF.md` — Status, Key Files updated; this entry added

---

### 2026-06-24 — Session 27

**What happened:** Jon said "Chapter 13 draft." Read HANDOFF.md per standing instruction; confirmed Chapter 13 (Stress & Health) is next per Next Up item 1. Confirmed filename from `docs/index.html` (`docs/chapters/13-stress-health.html`). Ch13 has **no entries in `concept_lineage_revised.csv`** — noted in HANDOFF and confirmed this session. Treated the entire chapter as needing Noba/open-access sourcing. Fetched and read Noba module "The Healthy Life" (Hooker & Pressman, 2026) in full — covers biopsychosocial model, stress and health (GAS, PNI, Cohen cold-virus studies), coping (problem/emotion-focused), control/self-efficacy, social relationships, dispositions and emotions (Type A/B, positive affect), and stress management. Independently verified all 11 primary citations via web search before inclusion. Added Langer & Rodin (1976) to References when programmatic cross-check found it cited in body but missing from the reference list; removed Cohen & Herbert (1996) when cross-check found it in References but not cited in body. Body word count ~5,254 — over the 3,500–5,000 target, flagged rather than cut (same precedent as Chs 3, 6, 7; this chapter spans stress physiology through coping/health promotion and required the extra length). No concepts to grep against concept_lineage_revised.csv — used the Noba module's learning objectives as the structural skeleton instead, supplemented by primary literature. No spec §12 AI touchpoint exists for Stress & Health in the old-numbered pipeline spec (that spec's Ch13 = Psych Disorders); developed an original AI Connection from within the chapter's own content — the appraisal gap: stress-detection AI can measure SAM/HPA activation via physiological signals but cannot do secondary appraisal (whether the person has resources to cope), because secondary appraisal requires embodied goals, a coping history, and stakes in the outcome. Scanned `voice_profile_merged.csv`: orchid brain/cortisol framing (58 hits, perennial) and Sapolsky reference (15 hits, perennial) are the primary voice anchors — both used. Orchid/Dandelion (Boyce & Ellis 2005) appears in Section 3; Sapolsky's zebra-vs-human framing anchors the Misconception Opener and the acute/chronic Do Not Confuse table.

**Decisions made:**
- No spec AI touchpoint for this chapter — developed one from within the chapter's own content (appraisal gap / stress detection AI). Flagged for Jon's call whether to keep, trim, or cut it.
- Laudenslager et al. (1983) cited as a secondary citation "as reviewed in Sapolsky, 2004" — not added to References (standard secondary-citation practice); Sapolsky (2004) is the citable primary source for this claim.
- Langer & Rodin (1976) added to References after programmatic cross-check identified it as an in-text orphan.
- Taylor et al. (2000) tend-and-befriend included — consistent with Jon's evolutionary/comparative framing; flagged in text as derived from primarily female mammalian data.
- Holmes & Rahe (1967) mentioned briefly for historical context (life-events quantification) but not given a full walkthrough — it's a methodological starting point, not a landmark finding.
- Body word count ~5,254 flagged as over target. Possible trim: the control/self-efficacy subsection could be compressed; the orchid/dandelion subsection could be shortened. Jon's call.
- No demo placeholder — no existing demo in the psych101 inventory covers stress physiology, coping, or PNI. Flagged as a gap.

**Files created/modified this session:**
- `source/chapters/ch13-stress-health.md` — new, full first draft (v0.1), ~5,254 body words, 20 references, all verified
- `HANDOFF.md` — Status, Next Up, Key Files updated; this entry added

---

### 2026-06-23 — Session 26

**What happened:** Applied Jon's 8-point review of ch10-social-psychology.md (v0.2 → v0.3).

**Corrections applied:**
- **Jones & Harris (1967)**: Replaced Ross, Greene, & House (1977) in the FAE paragraph — that paper is the false-consensus effect, not the constrained-essay paradigm. Updated study description to match actual Jones & Harris stimulus (pro/anti-Castro essays, not "a controversial policy"). Dropped Ross et al. from References.
- **Janis/Challenger**: Reframed. Janis (1982) developed groupthink through Bay of Pigs and Vietnam. Challenger (1986) was post-publication; now attributed to "later researchers" applying the framework.
- **Manning et al. (2007)**: Added citation to Genovese debunking paragraph (*American Psychologist*, 62(6), 555–562). Previously flagged the inaccuracy without citing the paper that established it.
- **Contact hypothesis**: Softened "All four conditions matter" to "facilitating rather than strictly required," noting meta-analytic literature. Review question 5 changed from "must be present" to "especially likely to reduce prejudice."
- **Aggression biology**: Replaced over-compressed testosterone/serotonin/amygdala claims with "modulate rather than cause" framing, consistent with Ch3's voice. Added cross-reference to Ch3.
- **AI Connection renames**: "The Fundamental Attribution Error → Anthropomorphism" → "Attribution → Anthropomorphism"; "Conformity → AI as a Confident Consensus of One" → "Informational Social Influence → AI as a Confident Consensus of One."
- **Sycophancy paragraph**: Replaced confident "inherit a systematic bias" claim with hedged "can develop response patterns… because agreeable responses are often rewarded by raters."
- **References**: Added Jones & Harris (1967) and Manning et al. (2007); removed Ross et al. (1977).

**Files modified:**
- `source/chapters/ch10-social-psychology.md` — v0.2 → v0.3
- `HANDOFF.md` — this entry prepended

---

### 2026-06-23 — Session 26

**What happened:** Jon said "Chapter 12 draft." Read HANDOFF.md per standing instruction; confirmed Chapter 12 (Motivation & Emotion) is next. Confirmed title/filename from `docs/index.html` (`docs/chapters/12-motivation-emotion.html`). Pulled all 8 MOT-* concepts from `concept_lineage_revised.csv`. Scanned `voice_profile_merged.csv` for Motivation-Emotion-Stress-tagged entries: Self-determination theory (113 hits, perennial — strongest voice entry for this chapter), intrinsic motivation framing (25 hits, perennial), Sapolsky reference (15 hits, perennial — dopamine/goal-directed behavior, cross-ref to Ch. 6), orchid brain/cortisol framing (58 hits, perennial — Neuroscience-Biology/Motivation-Emotion-Stress, appropriate for stress section). One concept flagged `book-adoption`: MOT-004 (Theories of emotion — James-Lange/Cannon-Bard/Schachter). Noba pages returned empty (client-side rendered, same issue as Ch. 4 and Ch. 6). Used OpenStax Psychology 1e (CC BY 4.0, LibreTexts mirror, read in full) plus verified primary sources (James 1884, Cannon 1927, Schachter & Singer 1962, Lazarus 1991). Deviation flagged in chapter header per Ch. 4/Ch. 6 precedent. Independently verified all 36 citations via web search before inclusion. Post-draft catch: Barrett (2017) and Strack (2016) were cited in body text but initially missing from References — corrected before finalizing. Programmatic concept check: all 8/8 MOT-* concepts confirmed present by grep. Citation cross-check: all in-text keys match References entries in both directions, no orphans.

**Architecture:** 4 sections — (1) Theories of motivation (drive reduction/Hull, Yerkes-Dodson arousal theory, Maslow's hierarchy with evaluation/cross-cultural caveats, hunger as biological motivation case study with hypothalamus/ghrelin/leptin/set-point); (2) Intrinsic motivation and self-determination (intrinsic vs. extrinsic, overjustification effect with Deci 1971 and Lepper et al. 1973, SDT with autonomy/competence/relatedness needs, applications in education/work/health); (3) Understanding emotion (three components, emotion vs. mood Do Not Confuse panel, four theories — James-Lange/Cannon-Bard/Schachter-Singer/Lazarus, Classic Study Walkthrough: Schachter & Singer 1962 with honest replication caveats, Ekman basic emotions with cross-cultural evidence and Barrett 2017 critique, facial feedback hypothesis with Strack 1988 and Wagenmakers 2016 replication failure, cultural display rules); (4) Stress (Selye's GAS three stages, fight-or-flight/Cannon, tend-and-befriend Taylor et al. 2000 with sex-difference caveats, Lazarus primary/secondary appraisal, problem-focused vs. emotion-focused coping, forward pointer to Ch. 13). Misconception Opener: "emotions interfere with rational thinking" — anchored in Damásio somatic marker hypothesis (Damásio et al. 1994 from Ch. 3, now carrying forward the decision-making-without-affect angle not used there). AI Connection: three-part medium-depth — AI "motivation" as metaphor without underlying drive/need substrate; AI emotion-language without arousal component (Schachter-Singer structure makes the gap visible); somatic marker as the clearest breakdown point (AI has no bodily tagging of good/bad outcomes). Body word count: ~4,800 (estimated from 9,200 total file words minus key terms, review questions, references, metadata). No figures yet. Not yet converted to HTML.

**Decisions made:**
- The spec's chapter-by-chapter AI touchpoint table does not include a dedicated entry for Motivation & Emotion (the table's numbering uses the old superseded order). Built the AI Connection from the spec's inline commentary on Ch. 6 ("operant conditioning requires a behaving organism with internal states — motivation, drive reduction, affect; RLHF updates model weights; nothing is trying to get rewarded") extended into the three-component emotion framework.
- Schachter-Singer replication failure is included with honest framing: Marshall & Zimbardo (1979) and Maslach (1979) failures described; misattribution-of-arousal supported by other paradigms (Dutton & Aron 1974). Consistent with Jon's "never overstate" instruction.
- Facial feedback hypothesis: Wagenmakers et al. (2016) 17-lab RRR failure is the lead finding; Strack (2016) commentary and Noah et al. (2018) modified replication noted. Conclusion: effect may exist but is smaller and more context-dependent than the 1988 study suggested. Stated with appropriate uncertainty.
- Ekman basic emotions: cross-cultural recognition data presented as real; Barrett (2017) forced-choice critique and Mesquita (2001) cultural variation included. Did not dismiss Ekman; calibrated the claim.
- Tend-and-befriend: Taylor et al.'s model included with explicit caveats (males also show affiliative responses; sex difference is statistical not categorical; oxytocin is one mechanism among several; socialization also contributes). Consistent with Jon's caution about overstating sex-difference claims.
- Maslow: evaluation included (weak empirical support for strict hierarchy; Wahba & Bridwell 1976; cross-cultural challenges; Triandis 1994). Presented as a useful organizing metaphor, not a law.
- Hunger section: included as a biological motivation case study drawing on the Neuroscience course's hunger-regulation lecture (identified in voice profile). Not a tracked MOT-* concept but logically necessary to illustrate biological motivation beyond drive reduction theory alone; flagged for Jon's call whether to keep or trim.
- No demo placeholder — no existing demo in the `psych101_awesome-sauce` inventory covers motivation or emotion. Flagged in the backlog comments.
- Three activity ideas logged in chapter comments (do not build now): appraisal diary, emotion theory prediction task, SDT needs audit.
- Three demo ideas logged: Yerkes-Dodson interactive slider, appraisal simulator (demand × coping → stress level), emotion labeling ambiguity demo for Schachter-Singer.

**Files created/modified this session:**
- `source/chapters/ch12-motivation-emotion.md` — new, full first draft (v0.1), ~9,200 total file words, ~4,800 estimated body words, 8/8 MOT-* concepts, 36 references
- `HANDOFF.md` — Status, Next Up, Key Files updated; this entry added

---

### 2026-06-23 — Session 25

**What happened:** Ch10 Noba correction pass. Jon provided PDF copies of the two Noba modules used for book-adoption concepts (Forsyth "The Psychology of Groups"; Poepsel & Schroeder "Helping and Prosocial Behavior"). Read both PDFs against the existing ch10-social-psychology.md draft. Identified four discrepancies and corrected all of them.

**Corrections applied:**

- **Batson citation:** (1991) *The Altruism Question* (Erlbaum) → (2011) *Altruism in Humans* (Oxford University Press) — different book, different edition, different publisher. Updated in body text and References.
- **Term:** "empathy-altruism hypothesis" → "empathy-altruism model" throughout (5 occurrences: LO #7, altruism section body, Chapter Summary, Key Terms, Review Q8 rationale) — Noba uses "model," not "hypothesis."
- **Janis citation:** (1972) *Victims of Groupthink* → (1982) *Groupthink: Psychological Studies of Policy Decisions and Fiascoes* (2nd ed.) — Forsyth module cites the revised edition. Added the Forsyth definition quote directly (p. 9) to the groupthink paragraph.
- **Bystander mechanism:** Added cost-benefit analysis as a third bystander mechanism (alongside pluralistic ignorance and diffusion of responsibility) per Poepsel & Schroeder's explicit Noba framing.
- **References cleanup:** Added Poepsel & Schroeder as a separate References entry; updated both Noba entries from "Diener Education Fund" to "DEF Publishers" per PDF cover page.
- **Chapter header note:** Updated to reflect that Noba content was verified directly against PDF copies (not search-result summaries), with date 2026-06-23.

**Files modified:**
- `source/chapters/ch10-social-psychology.md` — v0.1 → v0.2 (Noba-verified)
- `HANDOFF.md` — Ch10 status entry updated; this entry prepended

---

### 2026-06-23 — Session 24

**What happened:** Context had compacted mid-session during Ch9 revision work. Resumed at the citation-verification step. Verified all four pending citations via web search: Wynn (1992) *Nature, 358*, 749–750 ✓; Spelke (2000) *American Psychologist, 55*(11), 1233–1243 ✓; Warneken & Tomasello (2006) *Science, 311*, 1301–1303 ✓; Lucca et al. (2025) *Developmental Science, 28*(1), e13581 — confirmed journal is *Developmental Science*, NOT *Psychological Science* (caught and corrected before writing). Then applied all approved v0.2 revisions to `ch09-lifespan-development.md` in a single pass.

**Changes in v0.2:**
- Added core knowledge paragraph after the Piaget critique section (Wynn 1992 baby math + Spelke 2000 core knowledge framework) — answers "what do infants bring?" before moving to Vygotsky
- Disorganized attachment note revised: now acknowledges "additional patterns beyond these three" rather than presenting the fourth as equally primary to the three covered
- Replaced full Kohlberg section (~400 words, 6 paragraphs) with a two-paragraph "Moral motivation and moral reasoning" section: (a) Warneken & Tomasello 2006 spontaneous helping as anchor for early prosocial motivation + honest Hamlin 2007 / Lucca et al. 2025 replication-failure note; (b) Kohlberg gist (one paragraph, no stage memorization, limitations noted: all-male sample, justice bias, weak full-hierarchy support)
- Replaced Erikson table + framing (~350 words) with a two-paragraph gist: lifespan development doesn't stop at adolescence (Eriksonian insight); empirical support for full 8-stage sequence is modest; identity formation is the piece that holds up best and is the chapter's real Erikson payload
- Review Question 8 updated to match new moral motivation framing (Warneken & Tomasello + Kohlberg limitations) rather than Kohlberg stage levels
- Key Term added: **Core knowledge** (Spelke)
- References: added Hamlin et al. 2007, Lucca et al. 2025, Spelke 2000, Warneken & Tomasello 2006, Wynn 1992; removed Gilligan 1982 (no longer cited in text)
- Chapter Summary updated to reflect all changes
- Version comment updated to 0.2

**Decisions made:**
- Hamlin (2007) retained but explicitly flagged as a finding with replication problems (Lucca et al. 2025, 37 labs, n=1,018, 49% = chance). Not presented as settled.
- Gilligan removed from references and text — Kohlberg paragraph no longer mentions her (the care-ethics critique is accurate but footnote-level for the gist treatment Jon wanted)
- Erikson table gone entirely. The "Think About It" box referencing the intimacy stage was retained — it still works given the identity/intimacy sequence point survives in the surrounding text
- Lucca et al. 2025: published in *Developmental Science* (caught a near-error: early drafting used "Psychological Science")

**Files modified this session:**
- `source/chapters/ch09-lifespan-development.md` — revised v0.1 → v0.2 (8 targeted edits)
- `HANDOFF.md` — Key Files table updated; this entry prepended

---

### 2026-06-23 — Session 23

**What happened:** Jon said "Chapter 11 Draft." Read HANDOFF.md per standing instruction; confirmed Chapter 11 (Personality) is next. Confirmed title/filename from `docs/index.html` (`docs/chapters/11-personality.html`). Pulled all 7 PER-* concepts from `concept_lineage_revised.csv` — all `canonical-common-knowledge` with `wording_change_driver` = `publisher-template-change` or `n/a`; none flagged `book-adoption` or `needs-verification`, so drafted directly from course materials and verified primary literature (same pattern as Ch3 and Ch5). Scanned `voice_profile_merged.csv` for Personality-tagged entries: voice-profile coverage for this chapter is sparse. The "Who Am I?" framing (13 hits, recurring) is the only directly Personality-tagged Gen-Psych entry; the Phineas Gage narrative (82 hits, perennial) is tagged Neuroscience-Biology and already anchored in Ch3. Did not force either into the chapter structure since the chapter's natural organizing thread — the tension between trait consistency and situational variability — doesn't need an external signature analogy the way S&P needed Tesla Vision or Ch6 needed Sapolsky. Independently verified 18 citations via web search before inclusion (Freud 1923, A. Freud 1936, Freud 1905, Rogers 1961, Baumeister et al. 1998, Allport 1937, Goldberg 1990, Costa & McCrae 1992, McCrae & Costa 1997, Jang et al. 1996, Mischel 1968, Darley & Batson 1973, Mischel & Shoda 1995, Flückiger et al. 2018, Hathaway & McKinley 1943, Murray 1943, Rorschach 1921, Wood et al. 2003). One citation flagged in References as needing verification: Rao et al. (2023) on AI personality profiles is an arXiv preprint noted inline. Programmatic cross-check: all 7 PER-* concepts confirmed present; all in-text citation keys match References entries in both directions, no orphans. Body word count ~3,324 — below the 3,500–5,000 target; flagged, not padded, since this chapter's 7 tracked concepts are fewer than any other chapter.

**Decisions made:**
- PER-003 (Psychosexual stages) is `absent` across all instructor-material iterations but covered briefly as canonical Freudian theory — flagged for Jon's call whether to condense or cut.
- PER-008 (Person-situation debate) was only `publisher-supplied` in King-3e but included because it is the chapter's central empirical challenge and the AI Connection hook per spec §12.
- Darley & Batson (1973) Good Samaritan study used as the Classic Study Walkthrough for the person-situation debate — not redundant with Ch10, which covered Darley & Latané (1968) bystander effect (different study, different authors, different mechanism).
- AI Connection: "AI has personalities" → maps to Big Five trait consistency → breaks down at self-concept: AI trait-like tendencies are parameter-space regularities, not identity-motivated consistency. Uses the Mischel person-situation framework to show AI behavior is even more situationally variable than human behavior, not less.
- Body word count ~3,324 flagged as below target. Possible additions if Jon wants more: social-cognitive theory of personality (Bandura's reciprocal determinism) or expanded biological-bases of personality — neither is a tracked PER-* concept, so both are Jon's call.
- No demo placeholder — no existing demo covers personality testing or the person-situation debate; flagged as a gap.

**Files created/modified this session:**
- `source/chapters/ch11-personality.md` — new, full first draft (v0.1), 328 lines, ~3,324 body words, 7/7 PER-* concepts, 19 references (1 flagged for verification)
- `HANDOFF.md` — Status, Next Up, Key Files updated; this entry added

---

### 2026-06-23 — Session 23

**What happened:** Two tasks this session. (1) Jon requested creation of a structured activity/assignment design backlog for the textbook. Created `docs/teaching/activity-ideas.md` (new file, new folder) with: a preamble explaining the backlog's purpose, a status-label legend (Idea / Draftable / Built / Needs revision / Parked), a reusable entry template, and four Chapter 8 entries — the built AI-bias activity (cross-referencing the existing `assignments/ch08-ai-bias-activity.html`) plus three Draftable entries: K-Word Availability Demo, Linda Problem Nested-Set Mini-Exercise, and Wason Selection Task Rule-Testing Demo.

**Decisions made:**
- The backlog lives at `docs/teaching/activity-ideas.md`, a new subfolder of `docs/` rather than `source/` — teaching support material that will eventually become public-facing belongs in `docs/`.
- The three parallel teaching supports (figures / activities / chatbot prompts) are the stated organizing principle in the file header.
- New ideas for future chapters get appended under their chapter heading without polishing into full assignment pages unless explicitly requested.

(2) Jon asked whether the repo had enough documentation for Codex to do HTML conversion in batch. Confirmed no build script exists — conversion is entirely implicit in Ch1's HTML. Created `pipeline/html-conversion-spec.md` to make the pattern explicit: full sidebar template, all CSS class names with variant table, every structural pattern (callout, review question, key terms, figures, demos, references), common errors table, and a validation checklist. The spec is intended to be handed to Codex alongside a completed markdown draft so it can produce consistent output without needing to infer class names from Ch1.

**Files created/modified this session:**
- `docs/teaching/activity-ideas.md` — new, activity backlog with Ch8 entries
- `pipeline/html-conversion-spec.md` — new, HTML conversion reference for Codex
- `HANDOFF.md` — Key Files table updated; this entry added

---

### 2026-06-23 — Session 21

**What happened:** Context window had compacted from Session 18 (Ch8 draft) and Session 20 (Ch10 draft). Resumed mid-discussion: Jon had sent a detailed review of ch08-thinking-language-intelligence.md and asked for a discussion/verdict with no tool use. Delivered text-only assessment: agreed with ~85% of suggestions; endorsed all factual corrections (Gardner 1983 not 1985, chess game-tree wording, Russian blues / RVF conflation, Linda frequency-framing overstatement, System 2 / ego-depletion language); structural suggestions (unifying "simplification" frame, CHC paragraph, group-differences sidebar, language acquisition table, base-rate addition, Flynn softening); pushed back on 25–30% Linda box trim (argued for 10–15%), on moving AI Connection into a sidebar format (keep callout format), and on building all 7 figures simultaneously (prioritize 5). Flagged chatbot prompt box as new-format territory requiring a book-level decision. Jon agreed with assessment.

Jon proposed not including the chatbot prompt box in the chapter, but using the idea to build an assignment instead. Created `docs/assignments/ch08-ai-bias-activity.html` — a 50-minute in-class activity with three parts (Bias Audit, Source Check, Disconfirmation) using Ch8 vocabulary (System 1/2, availability, representativeness, confirmation bias, fluency heuristic, anchoring) as the evaluative framework. Prompts are general/reusable outside Ch8 context; the activity includes a reuse box with all three prompts written out verbatim for students to copy. Provided AI output included in Parts 2 and 3 so the activity works without a device. Created a new `docs/assignments/` folder (did not exist previously).

Jon then proposed that activity ideas should be noted as chapters are drafted and built out in a final book pass. Logged this as item 9 in Next Up and in this session entry.

**Decisions made:**
- Ch8 revisions (v0.1 → v0.2) agreed upon but NOT yet implemented — this is the next immediate task.
- Chapter activities: do not build each one during the drafting sprint; log ideas per chapter and do a final dedicated pass after all 14 chapters exist. Format template is `docs/assignments/ch08-ai-bias-activity.html`.
- Chatbot prompt boxes are not part of the chapter format — they belong in the assignments/activities layer, not inline in chapter text.

**Files created/modified this session:**
- `docs/assignments/ch08-ai-bias-activity.html` — new, ~350 lines, in-class activity for Ch8
- `HANDOFF.md` — Next Up item 9 added; this entry added

---

### 2026-06-23 — Session 20

**What happened:** Jon said "Chapter 10 draft." Read HANDOFF.md per standing instruction, confirmed Chapter 10 (Social Psychology) is next. Confirmed title/filename from `docs/index.html` (`docs/chapters/10-social-psychology.html`). Pulled all 12 SOC-* concepts from `concept_lineage_revised.csv`. Identified 3 `book-adoption` concepts (SOC-008, SOC-010, SOC-011); attempted to fetch the corresponding Noba modules ("The Psychology of Groups" by Forsyth; "Helping and Prosocial Behavior") but both pages returned empty — client-side rendered, same pattern as encountered before. Sourced Noba framing from search-result content and LibreTexts mirrors of the Noba material (which do render); flagged this approach in the chapter header. Applied the established precedent for Noba-inaccessibility: draft from Noba framing as captured in search results plus verified primary literature, flag deviation explicitly. Scanned `voice_profile_merged.csv` for Social Psychology entries: Milgram narrative (28 hits, perennial — highest hit count for Social Psych), Asch conformity (22 hits, perennial), Stanford Prison/Zimbardo (12 hits, recurring), bystander effect (5 hits, occasional) — used all four as primary voice anchors. Verified 22 citations via web search before inclusion; programmatic cross-check identified Burger (2009) as cited in body but absent from References — added before finalizing. All 12/12 SOC-* concepts confirmed present by programmatic keyword check. Body word count ~4,701 — inside the 3,500–5,000 target; only the third chapter (after Ch4 and Ch8) to land inside range on a first draft.

**Decisions made:**
- The Stanford Prison Experiment is presented with Le Texier (2019) critique foregrounded: guards were coached, Zimbardo played an active superintendent role, study cannot be treated as clean experimental evidence of situationism. The situationist insight itself is framed as real and supported by other evidence; the SPE as a study has serious methodological problems. This is the honest treatment, consistent with Jon's "never overstate" instruction.
- The Kitty Genovese "38 witnesses" story is noted explicitly as inaccurate in its original newspaper framing (fewer actual witnesses; some did try to intervene). Darley & Latané's seizure experiment is used as the primary evidence for the bystander effect, not the Genovese case.
- Triplett (1898) is cited with explicit note that Stroebe's (2012) re-analysis found the effect weaker than reported — consistent with Jon's confidence-calibration standard.
- The AI Connection delivers the full spec §12 Social Psychology treatment: FAE→anthropomorphism, conformity→AI as confident consensus-of-one, ELM peripheral route→fluency-based credulity, bystander effect→diffusion of AI responsibility, social desirability bias→sycophancy, with Theory of Mind as the explicit breakdown point for all five mechanisms.
- Evolutionary framing (kin selection, reciprocal altruism) is included in the altruism section — appropriate given Jon's evolutionary/comparative perspective and the fact that the altruism concept is discussed in the Noba module in this context. Kept proportionate; evolutionary framing does not dominate the section.
- No demo placeholder — no existing demo in the `psych101_awesome-sauce` inventory covers social psychology topics. Flagged as a gap; did not placeholder for a nonexistent demo per established precedent.
- Ross, Greene, & House (1977) is cited for the FAE quizmaster paradigm — this is the cleaner experimental demonstration than the term's original definition paper (Ross 1977), which is a review chapter; using the primary experiment citation is more defensible. Did not include Ross (1977) as a separate reference since the term appears in that essay, but the experiment citation (Ross et al. 1977) is what's in the chapter.
- Choi, Nisbett, & Norenzayan (1999) included for cross-cultural variation in FAE — consistent with Jon's caution against treating "basic" psychological findings as universal.

**Files created/modified this session:**
- `source/chapters/ch10-social-psychology.md` — new, full first draft (v0.1), 435 lines, ~4,701 body words, 12/12 SOC-* concepts, 22 references
- `HANDOFF.md` — Status, Next Up, Key Files updated; this entry added

---

### 2026-06-23 — Session 19

**What happened:** Jon said "Chapter 9 lets draft." Read HANDOFF.md per standing instruction, confirmed Chapter 9 (Lifespan Development) is next. Confirmed title/filename/position from `docs/index.html` (`docs/chapters/09-lifespan-development.html`). Pulled all 14 DEV-* concepts from `concept_lineage_revised.csv`. Checked `wording_change_driver` for each: 13 are `instructor-original`/`canonical-common-knowledge` with driver `instructor-revision` or `n/a`. Only DEV-006 (Vygotsky/ZPD/scaffolding) is flagged `book-adoption` (first appeared in King-4e era). Fetched and read Noba module "Cognitive Development in Childhood" (Siegler, 2026) in full — covers Piaget's four stages, sociocultural theories (Vygotsky), and information-processing approaches. The Noba module does not go into ZPD in extended technical depth, but does frame sociocultural theory as one of the three major theoretical orientations and its Vocabulary section defines it; drafted the ZPD/scaffolding content from this module's framing plus Vygotsky's own 1978 primary source. No Noba-coverage gap this chapter — unlike Ch4/Ch6, where some flagged concepts had no matching Noba module at all. Scanned `voice_profile_merged.csv` for Lifespan- and Developmental-tagged entries: the Lifespan course has relatively sparse voice-profile coverage (11 entries), but Gen-Psych entries for Orchid/Dandelion (13 hits, recurring) and "Who am I?" Erikson framing (13 hits, recurring) are strong; used both as primary voice anchors. Orchid brain/cortisol framing (58 hits, perennial) was not used — that entry is tagged Neuroscience-Biology/Motivation-Emotion-Stress and is better anchored in Ch3 and Ch13 than here. Independently verified all key citations via web search before inclusion: Ainsworth, Blehar, Waters, & Wall (1978) *Patterns of Attachment* — Erlbaum, confirmed; Bowlby (1969) *Attachment and Loss* Vol. 1 — Basic Books, confirmed; Boyce & Ellis (2005) "Biological sensitivity to context" — *Development & Psychopathology*, 17, 271–301, confirmed; Kohlberg (1969) "Stage and sequence" — in Goslin (Ed.) *Handbook of Socialization Theory and Research*, pp. 347–480, Rand McNally, confirmed; Erikson (1963) *Childhood and Society* (2nd ed.) — Norton, confirmed; Blakemore & Choudhury (2006) — *Journal of Child Psychiatry and Psychology*, 47, 296–312, confirmed from Noba's own reference list; Baillargeon (1987) — *Developmental Psychology*, 23, 655–664, confirmed from Noba; Vygotsky (1978) *Mind in Society* — Harvard University Press, confirmed; Main & Solomon (1986) "Discovery of an insecure-disorganized/disoriented attachment pattern" — in Brazelton & Yogman (Eds.) *Affective Development in Infancy*, pp. 95–124, Ablex, confirmed; Wimmer & Perner (1983) — *Cognition*, 13, 103–128, known citation confirmed; Thomas & Chess (1977) *Temperament and Development* — Brunner/Mazel, confirmed. Programmatic cross-check: all 15 References entries match the 15 in-text citation authors; no orphans either direction. All 14/14 DEV-* concepts confirmed present by keyword grep. Body word count ~5,033 — slightly over the 3,500–5,000 target, flagged rather than cut per established precedent (14 concepts, chapter must span the full lifespan from prenatal through late adulthood).

**Architecture:** 4 sections — (1) How development is studied and how it begins: three core tensions (nature/nurture, continuity/stages, stability/change), cross-sectional vs. longitudinal designs with cohort effects, teratogens, postnatal brain development (synaptogenesis, pruning, myelination, sensitive periods, Genie); (2) Cognitive development: Piaget's constructivist framework (schemas, assimilation, accommodation, four stages with milestones, object permanence, conservation, egocentrism/three-mountains task), evaluation and critiques (Baillargeon VOE method, false belief task/ToM at age 4 vs. 7), Vygotsky/ZPD/scaffolding with an AI Connection (ZPD → AI scaffolding calibration; assimilation vs. accommodation → passive vs. active AI use; statistical learning in infants vs. LLMs, building on Ch8's language acquisition section); (3) Social and emotional development: Ainsworth Strange Situation as Classic Study Walkthrough (three primary attachment classifications, note on disorganized category per Main & Solomon 1986, cross-cultural caveat), temperament (Thomas & Chess 1977, orchid/dandelion framing — Boyce & Ellis 2005), parenting styles, Kohlberg moral development (preconventional/conventional/postconventional) with Gilligan's care-ethics critique; (4) Adolescence through adulthood: Erikson's 8 stages as a full table (identity stage highlighted as adolescence's central task), teenage brain (frontal cortex maturation asymmetry, Blakemore & Choudhury 2006), puberty and identity, adulthood and aging (fluid vs. crystallized intelligence cross-referenced to Ch8, well-being across adulthood, midlife-crisis null result). Do Not Confuse panel: assimilation vs. accommodation.

**Decisions made:**
- The SS26 lecture slides explicitly note "Not: Kohlberg, Erikson" — this is a semester-specific syllabus decision by Jon, not a permanent exclusion. Both are tracked DEV-* concepts (DEV-008, DEV-009) and are fully covered in this chapter.
- Disorganized attachment (Main & Solomon 1986) was added as a brief fourth category note — not a tracked DEV-* concept, but genuinely needed to avoid creating the false impression that Ainsworth's original three categories exhaust the classification system. Flagged here so Jon can cut if he judges it beyond the scope of a Gen Psych chapter.
- The AI Connection is light-to-medium per spec §12's instruction for this chapter — the ZPD scaffolding parallel is the primary touchpoint, plus a brief bridge back to Ch8's statistical-learning content. Did not duplicate the heavier social AI touchpoints (sycophancy, anthropomorphism) that belong in Ch10.
- Gilligan (1982) is included as a named limitation of Kohlberg's framework, with an honest summary of what the subsequent data showed (the gender difference she proposed was smaller than claimed, but her critique improved the field's attention to non-justice-based moral reasoning). This is the accurate, appropriately hedged treatment — not softened past the evidence.
- No demo placeholder included — no existing demo in the psych101 inventory covers Piaget tasks, attachment, or lifespan development. Flagged as a gap.

**Files created/modified this session:**
- `source/chapters/ch09-lifespan-development.md` — new, full first draft (v0.1), ~5,033 body words, 14/14 DEV-* concepts, 15 references
- `HANDOFF.md` — Status, Next Up, Key Files updated; this entry added

---

### 2026-06-23 — Session 18

**What happened:** Jon said "could we continue drafting the next chapters" — read HANDOFF.md per the standing project instruction, confirmed Chapter 8 (Thinking, Language & Intelligence) is next. Confirmed Ch8 title/filename/position from `docs/index.html`. Pulled all 15 TLI-* concepts from `concept_lineage_revised.csv`. Identified two `book-adoption` flags: TLI-004 (Representativeness heuristic) and TLI-012 (Gardner's multiple intelligences) — fetched and read both relevant Noba modules in full (Bazerman's "Judgment and Decision Making" and Biswas-Diener's "Intelligence") before drafting. No Noba-coverage gap this chapter: both flagged concepts had adequate module coverage, unlike Ch4/Ch6 where some flagged concepts had no matching Noba module. Scanned voice profile — Cognitive-course entries are sparser for this chapter's topic area than prior chapters (no high-hit-count signature analogy like Tesla Vision or Sapolsky/dopamine); used the Chess Masters opener as a framing cue but built the Misconception Opener around the "we trust our own reasoning" theme, which more directly serves the heuristics/biases section. Independently verified all key citations via web search before inclusion: Sternberg (1985) is "Beyond IQ" (Cambridge University Press), confirmed via search; Tversky & Kahneman (1983) Linda problem is *Psychological Review*, 90(4) — confirmed via UCSD-hosted PDF; Chomsky (1965) *Aspects of the Theory of Syntax* — MIT Press, confirmed; Whorf's writings are the 1956 posthumous collected volume (Whorf died 1941) — confirmed; Kahneman (2011) *Thinking, Fast and Slow* — Farrar Straus and Giroux, confirmed. All 26 citations programmatically cross-checked in both directions, no orphans. All 15/15 TLI-* concepts confirmed present by keyword grep. Body word count ~4,981 — inside the 3,500–5,000 target, second chapter to land inside range on a first draft (after Ch4). No new concepts added to `concept_lineage_revised.csv` (all 15 TLI-* were already present).

**Decisions made:**
- Gardner's multiple intelligences (TLI-012) is presented with explicit caveats about the weakness of the empirical basis for genuine *independence* among the eight abilities — consistent with the project's standing instruction to never overstate confidence. The theory is real and educationally influential; the psychometric support for eight truly independent faculties is not strong. Both facts are in the chapter.
- Stereotype threat (Spencer, Steele, & Quinn, 1999) is included in the intelligence section as a mechanism that can produce group score differences without reflecting underlying ability differences — framed as one documented factor, not as a complete explanation of all group differences. This is the accurate, appropriately hedged position.
- The AI Connection is the chapter's primary spec §12 touchpoint (Ch7 delivered context window/working memory; Ch8 delivers the dual-process/fluency connection and the availability/schema points). Three-part structure: System 1 fluency of AI output deactivates metacognitive monitoring; availability heuristic overcounts AI past successes; schemas → template-driven AI pattern completion. Breakdown point: human schemas are revised through embodied corrective feedback; model weights don't self-correct through reasoning mid-conversation.
- No demo placeholder included — no existing demo in the `psych101_awesome-sauce` inventory covers heuristics or language acquisition. Flagged as a gap rather than placeholding for a nonexistent demo, per the Ch6 conditioning-simulator precedent.
- Reber & Schwarz (1999) cited for the fluency-as-accuracy heuristic in the AI Connection — an empirically grounded claim (processing fluency increases perceived truth judgments), not just an intuition.

**Files created/modified this session:**
- `source/chapters/ch08-thinking-language-intelligence.md` — new, full first draft (v0.1), 440 lines, ~4,981 body words, 15/15 TLI-* concepts, 26 references
- `HANDOFF.md` — Status, Next Up, Key Files updated; this entry added

---

### 2026-06-23 — Session 17

**What happened:** Continued work on ch05-states-of-consciousness.md (v0.1 → v0.2). Jon brought a detailed review package — a figure/diagram inventory with priority rankings, a six-item list of specific flagged claims, and an action plan — and asked to discuss before changing. Agreed with most items; pushed back on two (Figs 5.5 and 5.6 as lower value than the sleep-architecture visuals; the "revise claims" list needing specific targets before agreeing to change anything). Jon supplied the specific claims. Evaluated all six claim corrections against the underlying science and agreed with all of them. Separately, Jon decided to resolve the long-deferred selective-attention gap by adding CON-013 and a narrow bridge (not a full attention section), and to use Schultz et al. (1997) rather than Sapolsky n.d. as the dopamine citation. Held the Process C vs. Process S quiz question across the session — Jon eventually said he didn't know, which prompted a discussion of why the distinction matters practically (different targets for different interventions), which in turn led Jon to add a practical-interventions sentence to Section 1. All agreed edits implemented in a single pass.

**Decisions made:**
- CON-013 (Selective attention / inattentional blindness) is now a tracked concept in `concept_lineage_revised.csv` and in Section 1's bridge — three jobs only: repair Ch4 promise, explain perception-without-conscious-report, introduce attention as gateway. Inattentional blindness (Simons & Chabris 1999) is the primary example; cocktail-party effect is a sentence-level mention. Does not sprawl into a full attention chapter.
- Sapolsky n.d. is not a viable scholarly anchor — replaced throughout Ch5 with Schultz, Dayan, & Montague (1997) for reward prediction error; the "anticipation" framing is updated to "reward prediction error" throughout including Q8 and the Connections table.
- Cannabis is not a classical hallucinogen — separated into its own paragraph (CB1/5-HT2A distinction). This is a pedagogical and pharmacological precision call, not a softening.
- Opioid overdose is brainstem respiratory depression, not GABA — the two mechanisms are now explicitly separated in the text, with polydrug-combination risk specified.
- H.M.'s resection was broader than hippocampus-only — "medial temporal lobe structures including the hippocampal region" throughout.
- NREM arousal parasomnias vs. REM sleep behavior disorder are now distinguished; the common sleepwalking misconception is correctly attributed to REM-BD, not ordinary sleepwalking.
- Hilgard's hidden-observer finding is presented as Hilgard's interpretation, not settled fact — consistent with the unresolved-debate framing already elsewhere in Section 4.
- Figure priority: commission 5.1 (two-process model) and 5.2 (hypnogram) first. 5.3 and 5.4 follow. 5.5 (drug mechanisms) and 5.6 (dream theories) on hold — lower instructional payoff than sleep-architecture visuals.
- The Process C/S practical-interventions framing (caffeine targets Process S adenosine; light therapy/melatonin targets Process C) is now in the chapter — not because the quiz question revealed a content gap per se, but because the discussion revealed the "why it matters" angle was missing, which is the right reason to add it.

**Files created/modified this session:**
- `source/chapters/ch05-states-of-consciousness.md` — revised to v0.2 (~4,820 body words)
- `source/concept_lineage_revised.csv` — CON-013 row appended
- `HANDOFF.md` — Status, Next Up, Key Files updated; this entry added

---

### 2026-06-23 — Session 16

**What happened:** Jon offered a detailed structural critique of ch07-memory.md (v0.1) and asked how much of it I agreed with. Gave an honest point-by-point assessment: agreed with ~85–90%, pushed back on a few specifics (Miller/Cowan wording slightly too confident as proposed; confabulation citation gap deeper than framed — Johnson et al. 1993 is source monitoring, not confabulation; Hirst et al. 2009 should be added to flashbulb citations alongside Talarico & Rubin; the Atkinson & Shiffrin draft citation was an omission, not a near-miss). Jon agreed with the assessment and said to proceed. Revised ch07-memory.md to v0.2.

**Substantive changes in v0.2:** H.M. + Clive Wearing + Do Not Confuse: Anterograde/Retrograde moved from Section 4 to end of Section 2 (where they do structural work illustrating the memory-systems content). Memory-systems table added to Section 2 (Episodic/Semantic/Procedural/Priming with conscious-recall and case-anchor columns). Memory-error comparison table added to Section 4 (misinformation effect/false memory/source misattribution/confabulation). Section 4 heading changed to "Reconstructive Memory Errors." Language fixes: "almost-photographic trace" corrected; LTP caveat added; AI context-window "equal structural standing" replaced with accurate claim about attention weighting vs. executive control. Citations added: Atkinson & Shiffrin 1968, Cowan 2001, Cepeda et al. 2006, Roediger & Karpicke 2006, Hirst et al. 2009, Talarico & Rubin 2003, Kopelman 1987. Sleep-consolidation caveat added after Jenkins & Dallenbach. All 27 MEM-* concepts verified present post-restructuring; citation cross-check clean.

**Files created/modified this session:**
- `source/chapters/ch07-memory.md` — revised to v0.2 (452 lines; ~5,940 body words)
- `HANDOFF.md` — Status and Key Files updated; this entry added

---

### 2026-06-23 — Session 11 (new session)

**What happened:** New chat session started to continue work on Chapter 4 (Sensation & Perception). Jon presented the same GPT review discussed in Session 10 and asked for an agree/disagree verdict. Confirmed most items were already addressed in v0.2; the two remaining open items were (1) no figures existed and (2) the Other Senses gap (chemical senses promised in Where This Fits, not delivered). Generated all 6 priority figures using Matplotlib, saved as SVG+PNG to docs/images/ch04/. Added an Other Senses sidebar (~230 words on taste, smell, vestibular, proprioception) after the gate control section. Inserted figure references and captions at all 6 figure positions in the chapter. Updated chapter header to v0.3.

**Decisions made:**
- "never perceive reddish-green or bluish-yellow" is accurate and was not softened — it is a precise, falsifiable prediction of opponent-process theory
- Word-count alarm in the review was based on a wider boundary than the spec's Body definition — chapter remains within target on the correct count
- Other Senses sidebar placed as a sidebar (clearly labeled, not a full section) since taste/smell/vestibular/proprioception are not tracked SP-* concepts — conservative choice consistent with the project's scope-discipline pattern

**Open items carried forward:**
- Jon's line-by-line review of Ch4 v0.3 still pending
- Three demo placeholders in Ch4 still need URLs/builds (SDT simulator, Heider & Simmons, size-weight illusion)
- Chapters 5–7 drafted (v0.1) but unreviewed

---

### 2026-06-22 — Session 15

**What happened:** Jon brought a second round of detailed Ch2 feedback, this time from ChatGPT reviewing the v0.2 draft, and asked for an agree/disagree verdict before any changes — same evaluate-first pattern as the Session 4/5 ChatGPT round on this chapter. Verified two new factual claims independently before agreeing: (1) the childhood-books example's causal dismissal was genuinely overstated — Sikora, Evans, & Kelley (2019, *Social Science Research*) is a real study finding home-library size predicts adult literacy/numeracy/tech skills beyond parental and personal education, so "almost certainly explained by parental education" was too strong; (2) the 2010 Cochrane update to Hróbjartsson & Gøtzsche's placebo review is real and more current than the 2001 NEJM paper alone. Pushed back on three of the suggestions rather than accepting the full list: declined to build three of five proposed new figures (p-value-misconceptions diagram, evidence-ladder-as-slide-graphic, sampling-bias/training-data funnel) as disproportionate to their instructional payoff — built only the two judged genuinely high-value (random sampling vs. random assignment; reliability vs. validity target diagram); declined a "Three Ways a Correlation Can Happen" sidebar as redundant with the existing third-variable diagram and Do Not Confuse panel; Jon agreed with all three pushbacks before any edits were made. Implemented everything else agreed on: split the overloaded experimental-method section into Section 3 (Experiments and Causal Claims) and Section 4 (Bias Controls and Research Ethics) — 5 sections total now, still inside the spec's stated ceiling; added an ethics-safeguards table, a p-value "Common Misreadings" text box (not a figure, per the figure-budget pushback), a depression-questionnaire reliability/validity example, an evidence-ladder "Common student mistake" column, and a trimmed Section 1 opener. Caught and fixed two of my own citation errors mid-session rather than after the fact: the Sikora et al. DOI I'd initially written down resolved to a completely unrelated paper when checked against Crossref directly — found and substituted the correct one via a Crossref title search rather than re-trusting a second web-search guess. Separately confirmed the Ritter & Eslea (2005) author order via Crossref metadata (Ritter is correctly first — resolves a discrepancy flagged but left open in Session 5) and spot-checked the new Cochrane DOI against Crossref before adding it, rather than treating any search-engine-reported DOI as fact without a registry check.

**Decisions made:**
- When an external reviewer's citation or factual claim can be checked against a primary registry (Crossref, PubMed, etc.), check it there before adding it — a web-search blurb agreeing with a DOI is not the same as the DOI resolving to the right paper, and this session caught a real instance of exactly that gap
- Agreeing with most of a reviewer's suggestions doesn't mean agreeing with all of them — evaluate figure/content additions against the chapter's own stated goal (reduce cognitive load) even when the suggestion comes bundled with otherwise-good feedback; more figures can work against a cognitive-load argument as easily as more text can
- Splitting an overloaded section is a legitimate fix as long as the result stays inside the spec's section-count ceiling (3–5) — this isn't a one-off exception, it's a tool to reach for again if a later chapter's experimental/ethics content gets similarly dense

**Files created/modified this session:**
- `source/chapters/ch02-research-methods.md` — revised to v0.3
- `docs/images/ch02/fig2-5-sampling-vs-assignment.svg` / `.png` — new
- `docs/images/ch02/fig2-6-reliability-validity.svg` / `.png` — new
- `HANDOFF.md` — Status and Key Files updated; this entry added

---

### 2026-06-22 — Session 14 (continued)

**What happened (second round of fixes, same session):** After the consolidated revision pass below, Jon reviewed the result and sent four more specific items. One was a real bug, not a judgment call: Section 2's opening paragraph in the live HTML still said "...especially once we reach the biological basis of behavior in Chapter 2" — stale leftover from before the Session 4 chapter-renumbering fix. The markdown source already correctly said "Chapter 3"; only the HTML had drifted out of sync. Fixed in the HTML. The other three were citation/precision requests: added Flückiger et al. (2018) — a meta-analysis of 295 studies and 30,000+ patients confirming a reliable alliance-outcome relationship (r≈.28) — alongside Rogers (1951) to back the therapeutic-relationship claim in Section 2, and added it to References; replaced the Section 3 sentence calling behavioral treatments (including ABA) "among the more robustly evidence-supported treatments" with Jon's own suggested wording, separating exposure therapy's strong evidence base from ABA's evidence base plus the need for ethical discussion of goals/consent/quality of life; replaced the depression example's "dysregulation in serotonin, dopamine, and norepinephrine systems" with Jon's suggested broader framing ("genetic risk, stress physiology, sleep, inflammation, and neurotransmitter systems") plus an explicit note that the older chemical-imbalance story hasn't held up — checked this independently via search and found real support for the caution (Moncrieff et al., 2022, a systematic umbrella review, found no clear evidence for the serotonin-deficiency theory specifically), so this wasn't just softening language for safety, it's the more accurate framing.

**Decisions made (continued):**
- When a chapter has been "corrected" for a cross-reference error in one file (here, chapter renumbering, Session 4), explicitly check the other format (markdown vs. HTML) for the same error rather than assuming a fix applied to one propagated to both — this one slipped through three sessions
- When a user's suggested rewrite touches a scientifically contested claim (here, the serotonin theory of depression), verify the suggestion's premise independently rather than just accepting the softer wording as a safe default — in this case verification found real evidentiary support for the caution, not just rhetorical caution

---

### 2026-06-22 — Session 14

**What happened:** Jon asked for visual suggestions for Ch1, then uploaded "Images with links.docx" — a curated table of 6 historical-figure portraits (Wundt, James, Watson, Skinner, Freud, Turing) from Wikimedia Commons with license/attribution notes and intended placements. Extracted its content via bash unzip + XML parsing of `word/document.xml` (the Read tool can't open binary .docx directly). Confirmed the sandbox cannot reach wikimedia.org — both a direct curl (403, `blocked-by-allowlist`) and the web-fetch tool (empty response) failed — so this thread is blocked on Jon downloading the actual files himself; did not attempt any workaround per the standing instruction not to circumvent fetch restrictions.

Separately and in parallel, Jon sent a long, structured editorial review of the chapter covering historical accuracy, cognitive load, specific sentence-level rewrites, and citation/accuracy flags, and explicitly said "let's discuss these suggestions before doing anything." Went through the review point by point rather than applying it wholesale, independently verifying the two highest-stakes factual claims via WebSearch before agreeing: (1) the Milgram obedience study's psychiatrist-prediction numbers — confirmed 39 psychiatrists predicted ~1/1000 would reach maximum shock, actual was 26/40 — as a stronger, sourced replacement for the chapter's existing unsupported "barely above chance" line; (2) the Wundt/Titchener structuralism attribution — confirmed structuralism is more precisely associated with Titchener (a student and translator of Wundt), with Wundt's own system usually termed voluntarism by historians. Jon then said "one pass" — confirmed as an instruction to implement everything agreed-upon together in one consolidated edit, not incrementally.

Implemented the full set of agreed revisions in both `source/chapters/ch01-history-approaches.md` and `docs/chapters/01-history-approaches.html`, keeping them in sync: replaced the unsupported "barely above chance" claim with the verified Milgram (1963) example in the Misconception Opener (and added a new Connections-table row pointing it to Ch.10 Social Psychology, with an anchor link back to the opener); corrected the history table's Structuralism row to "Structuralism / early experimental psychology (Wundt, 1879; Titchener)" and updated the Key Terms definition to match; softened Functionalism's table limitation from "too broad and literary" to "less unified as a laboratory program than behaviorism"; added a new Humanistic psychology row to the history table (previously handled as a table-adjacent aside) and rewrote the supporting paragraph accordingly; rewrote the AI Connection panel's closing claim, which had asserted LLMs are "closer to Skinner's view of language than Chomsky's" — replaced with a more careful framing that LLMs complicate the debate rather than resolving it toward either side; rewrote the replication-crisis paragraph in Section 4 to drop the "paradoxically, a reason to trust the process more" framing Jon flagged as too triumphalist, in favor of "a reason to be more careful about which findings you trust"; replaced Section 3's seven long prose paragraphs (one per perspective) with a compact Perspective/Main-question table plus a few sentences of follow-up, narrowing "the most productive research perspective" to "one of the most productive" and "among the most robustly evidence-supported treatments" to "among the more robustly evidence-supported treatments"; added Review Question 13 on the humanistic perspective's therapeutic-relationship finding; added Milgram (1963) to the References list, alphabetically between Maslow and Miller.

Hit a tooling false alarm partway through verification: a bash-based tag-balance check on the HTML file showed it truncated mid-sentence with no closing tags at all, looking like real data loss from one of the edits. Per the lesson already logged in Session 13, treated this as a suspect OneDrive-mount staleness issue rather than panicking — confirmed via the Read tool (which reads the Windows filesystem directly) that the file was actually complete and correctly closed. Second confirmation of the same bash-mount-lag pattern; worth continuing to default to Read over bash for verifying a just-edited file in any of the OneDrive-synced folders.

**Decisions made:**
- When a detailed multi-point editorial review arrives with an explicit "discuss before doing anything," verify the highest-stakes factual claims independently before agreeing with any of it, then wait for explicit go-ahead ("one pass") before touching files — don't start editing during the discussion phase even if some suggestions seem obviously right
- "One pass" means apply every agreed change together in a single consolidated edit across both markdown and HTML, not incrementally with intermediate check-ins
- Reconfirmed: when bash and the Read tool disagree about a just-edited file in an OneDrive-synced folder, trust Read — this is now the second session this has happened in, so treat it as an expected quirk of this environment rather than re-investigating from scratch each time

**Files created/modified this session:**
- `source/chapters/ch01-history-approaches.md` — editorial revision pass (see above)
- `docs/chapters/01-history-approaches.html` — same revision pass, kept in sync
- `HANDOFF.md` — Status, Next Up updated; this entry added

---

### 2026-06-22 — Session 13

**What happened:** Jon asked to "draft the remaining chapters" (Ch7–14, 8 chapters). Given each prior chapter took a full session of concept-pulling, voice-profile scanning, and independent citation verification, asked Jon to clarify scope before starting rather than guessing — offered one-at-a-time-full-rigor, all-eight-now-with-lighter-verification, or just-Ch7. Jon chose one-at-a-time-full-rigor, so this session drafted only Chapter 7 (Memory), following the same process as every prior chapter. Read HANDOFF.md and `pipeline/chapter-spec.md` in full before starting (re-read the spec despite having read it in prior sessions, since this is a fresh session with no memory of having read it before). Confirmed Ch7's title/filename/position ("Memory," `docs/chapters/07-memory.html`) from `docs/index.html`.

Pulled all 27 MEM-* concepts from `concept_lineage_revised.csv` — the most of any chapter so far, ahead of Ch6's 17. 25 are `instructor-original`/`canonical-common-knowledge`; two (MEM-019 Confabulation, MEM-020 Source misattribution) are flagged `needs-verification` under `source_confidence`, which the copyright rule treats identically to `book-adoption`. Fetched and read two Noba modules in full: McDermott & Roediger's "Memory (Encoding, Storage, Retrieval)" and Laney & Loftus's "Eyewitness Testimony and Memory Biases." Neither module uses the word "confabulation," but Laney & Loftus's false-memory and schema content covers the identical underlying phenomenon in depth — applied the established Ch4/Ch6/Ch9 precedent (draft from the module's actual framing and examples when the exact clinical term isn't used, flag the deviation explicitly) rather than treating the term-mismatch as disqualifying.

Scanned `voice_profile_merged.csv` for Memory-tagged entries and found the chapter's signature misconception already precisely quantified in the data: a Cognitive-course voice entry states "63% believe memory is like video camera, and 48% that memory does not change once created." Rather than taking this at face value (the project's established standard for quantitative claims sourced from voice-profile snippets, per Session 9's decision), searched independently and found the exact source — Simons & Chabris (2011), a representative U.S. survey — and confirmed both numbers matched almost exactly (63% video-camera belief confirmed precisely; "doesn't change once created" corresponds to the survey's "48% believe memory is permanent" item). Used this as the Misconception Opener, anchored to a verified citation rather than an unverified course-slide statistic. Also caught and deliberately did not use the voice profile's "2+2=5 memory metaphor" entry (tagged Memory, 2 hits) after checking its representative snippet, which is actually about Piaget's conservation/reversibility — flagged this as a probable labeling artifact in the extraction rather than using a memory-tagged entry that isn't actually about memory. Held off (third consecutive chapter) on the SRT/Germany personal-anecdote entry, still not anchoring any tracked concept.

Drafted the chapter in four sections (encoding, storage, retrieval/forgetting, memory errors/amnesia/the brain) and delivered H.M.'s full case treatment, which Ch5 had anchored only briefly and explicitly deferred here. Added a deliberate contrast case — Clive Wearing — alongside H.M., the first time this book has paired a classic case with a second case chosen specifically to sharpen a distinction (here, anterograde vs. retrograde amnesia) rather than treating a single case as sufficient. Built two AI Connection passages per `pipeline/chapter-spec.md` §12's full-treatment flag for the Ch.7/8 touchpoint: working memory vs. context window (full callout, breakdown point is the missing executive-control/attention-allocation function) and reconstructive memory/confabulation vs. AI "hallucination" (lighter touch, breakdown point is that human reconstruction is anchored to a real, if distorted, encoding event while an AI hallucination has none) — the second one directly operationalizes a line from the spec's own AI-integration philosophy section ("hallucinations make the constructive nature of memory tangible").

Ran the chapter's programmatic concept-verification step (checking each MEM-* concept's topic against the drafted text, not just trusting the outline) and caught a real gap before finalizing: MEM-024 (spacing effect) and MEM-025 (testing effect) were referenced in the Learning Objectives and the Connections table but never actually explained in the chapter body. Added a paragraph to Section 1 covering both before finalizing — a concrete example of why this verification step exists rather than being a formality copied between chapters.

Verified every citation independently via web search before inclusion (Simons & Chabris 2011, Miller 1956, Baddeley & Hitch 1974, Sperling 1960, Craik & Lockhart 1972, Tulving 1972, Loftus & Palmer 1974, Brown & Kulik 1977, Bliss & Lømo 1973, Murdock 1962, Ebbinghaus 1885, Jenkins & Dallenbach 1924, Johnson/Hashtroudi/Lindsay 1993 for source monitoring, Scoville & Milner 1957, Wilson & Wearing 1995, Loftus & Pickrell 1995) and programmatically cross-checked all 16 in-text citation keys against the References list — all matched, no orphans either direction. Body word count came in at ~5,440, over the 3,500–5,000 target — flagged rather than cut, per the Ch3/Ch6 precedent, given this chapter covers more tracked concepts than any chapter so far.

**Note on tooling this session:** discovered that the bash sandbox's mount of the OneDrive-synced repo can lag behind the actual file state after a large single-file write — a `wc -l`/`tail` check showed the chapter file truncated mid-word, which looked like a real data-loss bug, but the Read tool (which reads the Windows filesystem directly) showed the file was complete and correct. Resolved by treating Read as authoritative for verification rather than bash when the two disagree on a just-written OneDrive-mounted file, rather than assuming the file itself was actually damaged.

**Decisions made:**
- When a multi-chapter request risks lowering verification rigor (citation checking, voice-profile cross-referencing) below the established standard, ask the user to choose the tradeoff explicitly rather than guessing at the right pace — first time this has come up since chapter drafting has so far always been one-chapter-per-request
- A flagged concept whose phenomenon is covered by a Noba module under different terminology (confabulation/false memory) should still be drafted from that module's actual content, not treated as "no Noba source exists" just because the exact word is absent — consistent with, and now a second confirmation of, the Ch4/Ch6/Ch9 precedent
- Quantitative claims in the voice profile get independently verified against their actual source before use, even when (as with the video-camera statistic here) they turn out to be accurate — verification has to happen regardless of expected outcome, not only when a number looks suspicious
- A voice-profile entry's chapter tag is not sufficient evidence that its content is actually about that chapter's topic — check the representative snippet itself before using an entry on the strength of its label
- When two classic cases illustrate complementary aspects of the same phenomenon (H.M. and Clive Wearing for amnesia direction), pairing them as a deliberate contrast is more pedagogically useful than picking one as "the" case study — a new pattern for this book, applicable again wherever a second well-documented case sharpens a distinction the first case alone doesn't fully demonstrate
- Programmatic concept-coverage verification (checking topic keywords against the full draft, not just trusting the outline) is worth doing even on a chapter that feels complete — it caught a real, non-obvious gap (spacing/testing effects) this session that a read-through alone had missed
- When bash and the Read tool disagree about a file's contents immediately after a write, trust Read (direct filesystem access) over a bash mount of a cloud-synced folder, which can lag

**Files created/modified this session:**
- `source/chapters/ch07-memory.md` — new, full first draft (v0.1)
- `HANDOFF.md` — Status, Next Up, Key Files updated; this entry added

---

### 2026-06-22 — Session 12

**What happened:** Read HANDOFF.md per the standing project instruction, then Jon said "let's work on chapter 6" without waiting for Ch3/Ch4/Ch5 reviews to land first — same pattern as Sessions 9 and 11, since chapters don't have a technical drafting dependency on each other. Confirmed Ch6's title and position ("Learning," `docs/chapters/06-learning.html`) directly from `docs/index.html`. Pulled all 17 LRN-* concepts from `concept_lineage_revised.csv` and checked `wording_change_driver` for each: 15 are `instructor-original`/`canonical-common-knowledge` (instructor-revision or n/a), but two stood out — LRN-011 (Shaping) is flagged `book-adoption` and LRN-016 (Dopamine and reinforcement schedules, Sapolsky framing) is flagged `needs-verification`, the first time a chapter has had a mix of both situations (Ch3/Ch5 were entirely instructor-original; Ch4 was mostly book-adoption). Fetched and read Noba's only relevant module, Mark E. Bouton's "Conditioning and Learning," in full — thorough on classical/operant/observational learning, but it never actually uses the word "shaping," so there was no passage to borrow for LRN-011 specifically despite the module's general relevance. Applied the established Ch4/Ch9 precedent (draft original prose from verified primary literature when no Noba/APA IPI module covers a flagged concept, and flag the deviation explicitly) for both: LRN-011 drafted from Skinner's own 1951 *Scientific American* article that introduced the term "shaping," and LRN-016 continued Ch5's already-established approach of drafting directly from Sapolsky's own public lecture rather than course-slide wording.

While verifying that Sapolsky citation independently via search, caught and corrected a factual error carried in Chapter 5's existing References section: Ch5 cites the lecture as delivered "at Stanford University," but it is actually the Pritzker Lecture, delivered at the California Academy of Sciences on February 15, 2011 (Sapolsky holds a Stanford professorship, but this specific lecture was not given there — confirmed via the original Open Culture writeup, which names the Pritzker Lecture and venue explicitly). Ch6 uses the corrected citation; flagged inline in Ch6's header and in Next Up for Jon to decide whether to fix Ch5's existing citation to match — did not edit Ch5 unilaterally since it's already a delivered draft awaiting Jon's separate review.

Scanned `voice_profile_merged.csv` and found the richest coverage of any chapter so far: Garcia taste aversion (28 hits, perennial), Tolman's maze (27 hits, perennial), Bandura/Bobo doll (17 hits, perennial), Little Albert (18 hits, perennial), Sapolsky/dopamine (15 hits, shared with Ch5), and intrinsic motivation framing (25 hits, shared with Ch9) — all used directly as the chapter's worked examples rather than picking a subset, since all six are tracked LRN-* concepts (no scope-expansion judgment call needed this time, unlike Ch3's agonist/antagonist or Ch4/Ch5's attention deferrals). Held off on the SRT/Germany personal-anecdote entry (2 hits, rare) as a bio aside not anchoring any tracked concept.

Architecture: 4 sections (classical conditioning, with a Little Albert classic-study walkthrough and a Do Not Confuse panel on classical vs. operant conditioning → operant conditioning, with a Do Not Confuse panel on negative reinforcement vs. punishment, schedules of reinforcement, and shaping → biological constraints and learning beyond conditioning, covering Garcia & Koelling, a second classic-study walkthrough for Bandura's Bobo doll, Tolman's latent learning, and mirror neurons → dopamine/reward/motivation, covering Sapolsky's anticipation-not-pleasure framing, intrinsic vs. extrinsic motivation, and Deci's 1971 overjustification finding). Built the AI Connection on RLHF-as-operant-conditioning as the most developed in the book so far, per `pipeline/chapter-spec.md` §12's explicit instruction that this is "the chapter where the deepest parallels live" — covered shaping, stimulus generalization/discrimination in overtrained models, and classical-conditioning-as-token-association, with the breakdown grounded specifically in this chapter's own dopamine content (RLHF adjusts weights through optimization math; nothing in the system is a motivated, anticipating organism the way reinforcement schedules and conditioned anticipation depend on in real animals). On mirror neurons (LRN-015), deliberately distinguished the well-replicated monkey single-neuron evidence from the weaker, more indirect human fMRI evidence, and flagged the popularized "broken mirror neuron theory of autism" as not well supported by current evidence — a direct application of Jon's standing instruction to never overstate confidence, on a topic where the popularized version of the science runs well ahead of what the data actually show.

Verified every citation independently via web search before inclusion (Pavlov 1927, Watson & Rayner 1920, Thorndike 1911, Skinner 1938 and 1951, Garcia & Koelling 1966, Bandura/Ross/Ross 1961 and 1963, Tolman & Honzik 1930, di Pellegrino et al. 1992, Rizzolatti & Craighero 2004, Deci 1971, Sapolsky 2011) and programmatically cross-checked all 13 in-text citations against the References list in both directions — exact match, no orphans. Also programmatically verified all 17 LRN-* concepts are present in the draft via grep against the concept list (not just by eye). Body word count came in at ~5,340 — over the 3,500–5,000 target, flagged rather than cut per the established Ch3 precedent, given this chapter covers more tracked concepts (17) than any chapter so far and includes two full classic-study walkthroughs plus the book's most developed AI Connection by design.

**Decisions made:**
- When a chapter has a mixed copyright situation (some concepts instructor-original, some book-adoption/needs-verification), handle each concept according to its own flag rather than applying one blanket approach to the whole chapter — first time this has come up, since Ch3/Ch5 were entirely instructor-original and Ch4 was predominantly book-adoption
- When Noba's only topically-relevant module doesn't actually cover a specific flagged sub-concept (here, "shaping" specifically, despite the module's general operant-conditioning coverage), the Ch4/Ch9 deviation precedent applies at the sub-concept level, not just at the whole-module level — draft from verified primary literature instead, and say so explicitly
- A citation error discovered while verifying a *different* chapter's content gets fixed in the chapter currently being drafted and flagged (not silently corrected) in the chapter where it actually lives, rather than either ignoring it or unilaterally editing a different chapter that's mid-review
- On contested or partially-overstated findings (mirror neurons and autism), the chapter should state plainly which part of the popular narrative is well-supported and which part is not, rather than presenting the full popularized version uncritically or omitting the topic to avoid the complexity

**Files created/modified this session:**
- `source/chapters/ch06-learning.md` — new, full first draft (v0.1)
- `HANDOFF.md` — Status, Next Up, Key Files updated; this entry added

---

### 2026-06-21 — Session 11

**What happened:** Jon said "let's start chapter 5" without waiting for Ch3 or Ch4's review to land — same pattern as Session 9 (Ch4 started before Ch3's review), since chapters in this project don't have a technical drafting dependency on each other. Read HANDOFF.md per the standing project instruction before starting. Confirmed Ch5's title and position ("States of Consciousness," `docs/chapters/05-consciousness.html`) directly from `docs/index.html` per the standing lesson to never re-derive numbering from the CSV. Pulled all 12 CON-* concepts from `concept_lineage_revised.csv` and checked `wording_change_driver` for each — all 12 are `instructor-original`/`canonical-common-knowledge` with driver `instructor-revision` or `n/a`, none `book-adoption` or `needs-verification`, so — like Ch3 — the chapter was drafted directly from course materials and verified primary/secondary literature, with no Noba/APA IPI substitution required.

Scanned `voice_profile_merged.csv` for consciousness/sleep-relevant entries and confirmed the "automatic camera, with a manual (conscious) override" analogy from the Neuroscience course's "8 Chapter Rhythms of Waking and Sleep.pptx" as the project's documented signature analogy for this chapter (matches the project instructions' explicit list). Used it as the chapter's central organizing conceit in the Misconception Opener and Section 1. Also found and used the "why has evolution built a brain that periodically shuts itself down" rhetorical hook for Section 2, and incorporated the Killingsworth & Gilbert (2010) mind-wandering statistic (47%/46.9% of waking hours) and an in-class focused-attention meditation demo from the S&P-tagged voice profile rows — flagged as an optional addition rather than required content, since meditation is not a tracked CON-* concept (consistent with the Ch3 agonist/antagonist precedent). Found the Tarzan hormone question again (rare, Neuroscience-Biology tagged) and again held off using it, per Session 7's original judgment that it fits better in a later motivation/hormones-focused chapter.

Verified every citation independently via web search before inclusion rather than drafting from memory, given how much of this chapter rests on specific empirical findings: confirmed Aserinsky & Kleitman's (1953) exact Science citation, Hobson & McCarley's (1977) activation-synthesis paper, Revonsuo's (2000) threat-simulation paper, Diekelmann & Born's (2010) sleep-memory review, Borbély's (1982) two-process model paper, Killingsworth & Gilbert's (2010) exact percentage (46.9%, rounds to the voice profile's "47%"), and Hilgard's (1977) hidden-observer source and the specific cold-pressor/automatic-writing methodology behind it. Cross-checked every in-text citation against the References list programmatically (regex extraction) to confirm no orphaned or missing citations in either direction.

**Decisions made:**
- When every concept in a chapter is flagged `instructor-original`/canonical (as with Ch3 and now Ch5), draft directly from course materials and primary literature, but still independently verify every factual claim and citation — same standard restated from Session 7, now confirmed as the default whenever this flag pattern recurs, not a one-off
- Dissociation theory and social-cognitive theory of hypnosis are presented as a genuinely unresolved scientific debate rather than picking a winner — consistent with Jon's stated preference (per his own standing instructions) to never overstate confidence and to be explicit about where the field hasn't settled
- The Ch5 AI Connection (sleep consolidation vs. AI training/inference) was deliberately scoped to avoid overlapping with `pipeline/chapter-spec.md` §12's planned touchpoints for later chapters — working memory/context-window content is reserved for Ch7/8, and RLHF/operant-conditioning content is reserved for Ch6; Ch5's AI Connection stays specifically about the offline-consolidation/training-vs-inference distinction, which is unique to this chapter's content
- H.M. and sleep-dependent memory consolidation get only a brief anchor mention in Ch5 (CON-011), with explicit deferral of H.M.'s full case treatment to Ch7 — same "anchor here, depth elsewhere" pattern already established for cross-chapter recurring topics
- **Carried forward, not resolved:** selective attention is still untracked anywhere in the concept extraction. Ch4 deferred it to Ch5 expecting it to be tracked there; it isn't. This is now a two-chapter-old open gap and needs an explicit decision from Jon (assign a concept ID, most plausibly in Ch5 or Ch8, or decide deliberately to leave it out) rather than deferring it a third time

**Files created/modified this session:**
- `source/chapters/ch05-states-of-consciousness.md` — new, full first draft (v0.1)
- `HANDOFF.md` — Status, Next Up, Key Files updated; this entry added

---

### 2026-06-21 — Session 10

**What happened:** Jon ran the freshly-drafted Ch4 through an external GPT review and brought the full review back for discussion before authorizing any changes — worked through it point by point rather than applying it wholesale, the same evaluate-don't-rubber-stamp approach used for the ChatGPT-sourced Ch2 revision proposal in Session 5. Verified several of GPT's specific claims independently rather than taking either GPT's or my own original judgment at face value: recomputed the chapter's word count against the chapter-spec's actual "Body" definition (content sections only) and found GPT's "~5,658, over target" used a wider boundary that included the Misconception Opener, Where This Fits, Learning Objectives, and Chapter Summary — by the spec's own definition the chapter was at 4,596 words, inside target. Confirmed the cut was still the right call regardless of which boundary was used, since the AI/Tesla subsection was genuinely disproportionate. Independently caught a "nose, tongue" mention in Where This Fits that promised chemical-senses coverage the chapter never delivers — a real inconsistency, found by direct grep rather than trusting either review's read. Also independently found and resolved a citation discrepancy GPT flagged for checking but didn't resolve: Noba's two S&P modules cite the same Svaetichin paper with different years (Privitera's reference list says 1955, Buetti & Lleras's says 1956) — confirmed via independent search that 1956 is correct and our chapter already had it right; the discrepancy is a typo on Noba's own site, not an error we introduced.

Agreed with and applied: trimming the AI Connection by roughly a third (cut an over-elaborated LLM/predictive-coding tangent that had grown into its own mini-topic, kept the core Tesla Vision parallel and the three-part breakdown structure required by the AI-connection format); tightening Tesla wording to "supervised camera-based driver-assistance system" with the North America/Model 3+Y/May 2021 market qualifier restored (I'd verified this earlier in drafting but dropped the qualifier when writing the actual prose — GPT's catch, not overcaution); softening the LLM "does not maintain a continuous world-model" claim to a sensorimotor-coupling framing, which is more defensible; fixing the sensation/perception location claim to acknowledge retinal/cochlear preprocessing instead of implying a clean brain/sense-organ split; naming nociceptors explicitly alongside mechanoreceptors and thermoreceptors; clarifying that gate control theory's "gate" is a simplified model, not a literal structure; softening the sensory-adaptation claim about what receptors do when a stimulus first appears versus over time; adding a signal-detection 2×2 table and converting depth-cue prose into a table.

Disagreed with and did not apply: GPT's suggestion to soften "you can never perceive reddish-green or bluish-yellow" — this is a precise, correct consequence of opponent-process coding, not an overstatement, and softening it would make the claim less accurate, not more. Also did not apply the suggested change to the Hubel & Wiesel "cat" framing — re-read the actual passage and judged it already appropriately serious (states plainly that single neurons were recorded), not informal or cute as characterized.

Made a unilateral call rather than waiting for Jon on one item: cut the "nose, tongue" phrase from Where This Fits rather than adding a chemical-senses sidebar, since smell/taste are not tracked SP-* concepts in the extraction — consistent with the established "don't expand scope beyond tracked concepts without sign-off" pattern from Ch3 (agonist/antagonist) and Ch4's own attention/dichotic-listening decision. Flagged this explicitly so Jon can ask for the sidebar instead if he'd rather have it.

Separately, Jon raised the idea of a course tutor/chat bot powered by the book, and floated three possible designs for surfacing likely-confusion points to it: inline cues in the chapter text, an end-of-chapter "ask the tutor about" prompt list, or a separate per-chapter knowledge file of misconceptions/emphases that feeds the bot without appearing in student-facing text, plus having the bot itself critique student prompt quality as a teaching device. Talked through tradeoffs (inline cues risk undercutting the retrieval-practice design that Stop-and-Retrieve and Do Not Confuse panels already rely on; a knowledge file is largely free to build since Review Question "why is X tempting" rationales and Do Not Confuse panels already are a confusion-knowledge-base in disguise; bot persona/behavior should be authored once centrally rather than per chapter). Jon decided to table the bot work entirely until closer to fall semester, when his thinking on it will have matured — noted here so a future session doesn't restart that design conversation from zero, but the bot itself is explicitly NOT a current priority.

**Decisions made:**
- When an external (non-Jon) review of a chapter arrives, evaluate it point-by-point with independent verification before applying anything — same standard as Session 5's ChatGPT-sourced Ch2 proposal, now established as the default response to any outside review, not a one-off
- The chapter-spec's "Body" word-count target means content sections only (Section 1 through the last numbered section), not the Misconception Opener, Where This Fits, Learning Objectives, or Chapter Summary — worth being explicit about this boundary if word-count questions come up again, since it's easy for an outside reviewer (or a future session) to count differently
- Tutor-bot design work is deferred until closer to fall semester — do not restart this discussion unprompted in future sessions; revisit when Jon raises it
- A per-chapter "knowledge file" of confusions/misconceptions, if built later, should be compiled substantially from material chapters already produce (Review Question wrong-answer rationales, Do Not Confuse panels) rather than authored from scratch

**Files created/modified this session:**
- `source/chapters/ch04-sensation-perception.md` — v0.1 → v0.2, revisions listed above
- `HANDOFF.md` — Status updated; this entry added

---

### 2026-06-21 — Session 9

**What happened:** Jon said "chapter 4 let's get started" without waiting for Ch3's review to land — drafted Chapter 4 (Sensation & Perception) in full this session rather than treating Ch3's pending review as a blocker, since the two chapters don't have a technical dependency on each other. Read `pipeline/chapter-spec.md` in full again before starting, and confirmed Ch4's title/filename/position via `docs/index.html` (no numbering ambiguity this time — learned that lesson in Session 4). Pulled all 15 SP-* concepts from `concept_lineage_revised.csv` and found a materially different copyright situation than Ch3: most concepts (10 of 15) are flagged `book-adoption`, with SP-004 (Weber's Law) and SP-014 (Tesla Vision framing) additionally flagged `needs-verification` — the opposite of Ch3, where none of the 19 BIO-* concepts required Noba/APA IPI substitution. Fetched both relevant Noba Project modules in full ("Sensation and Perception" by Privitera, "Vision" by Buetti & Lleras) rather than working from search-result summaries, and drafted the corresponding sections directly from that material. Discovered that Noba has no module covering four of the flagged concepts (Gestalt principles, place vs. frequency theory of hearing, gate control theory of pain, perceptual constancy) — checked Noba's full Sensation-and-Perception content listing to confirm only two modules exist in that category before concluding this, rather than assuming. Checked whether APA IPI materials could fill the gap and found they provide only student learning outcomes, not textbook-style prose to borrow from (consistent with how Ch2's RM-012 was actually sourced in Session 4 — Noba, not APA IPI, in practice). For those four concepts, drafted original prose grounded in independently verified primary literature (Wertheimer, 1912 for Gestalt; Melzack & Wall, 1965 for gate control theory; von Békésy, 1960 for place theory) instead of borrowing Noba/APA IPI phrasing, and flagged this explicitly in the chapter's own header note as a deviation from the stated process, rather than silently handling it differently without saying so.

Scanned `voice_profile_merged.csv` for the S&P-tagged course entries (20 rows, much richer than Ch2's research-methods coverage) and used the Tesla Vision signature analogy as the chapter's central recurring thread — verified the underlying Tesla facts independently (camera-only "Tesla Vision" system since May 2021 for Model 3/Y North America, 8 cameras, 360° coverage, radar removed) rather than taking the voice-profile snippet's claims at face value. Built a full AI Connection extending Tesla Vision through Hubel & Wiesel's feature detectors (1962, independently verified — direct conceptual ancestor of convolutional neural networks, with real measured correspondence in early-layer tuning curves, not just a loose metaphor) to predictive coding versus next-token prediction, including an explicit breakdown of where the LLM-prediction analogy fails. Used the voice profile's ambiguous-figure ("rat-man," tied to Crash Course Psychology #7) and lens-accommodation mnemonic entries directly in Section 2/3. Deliberately did not build out a selective-attention/dichotic-listening section despite that being the single highest-hit-count demo in the S&P voice profile (17 hits) — checked the concept CSV and found attention is not a tracked SP-* concept anywhere in the extraction, so treated it the same way Ch3 treated the agonist/antagonist addition: don't expand scope just because rich material exists for it. Added a one-sentence forward-pointer to Ch5 instead.

Architecture: 4 sections (psychophysics foundations → vision → perceptual organization → hearing/body senses), Misconception Opener on "eyes work like a camera," two Do Not Confuse panels (sensation vs. perception; place vs. frequency theory), one classic-study walkthrough (Hubel & Wiesel), one full AI Connection. Verified every citation via web search before inclusion, including some specific quantitative claims that needed checking rather than trusting common textbook repetition (human retina photoreceptor counts — confirmed ~120M rods + ~6M cones per eye, reconciling a discrepancy between the voice profile's "~120 million" and the Noba Vision module's "200 million" figures by checking an independent source; the ~100ms visual-processing-latency figure used in the AI Connection). Body word count came in at ~4,600 — the first chapter in this project to land inside the 3,500–5,000 target range on the first draft.

**Decisions made:**
- A pending review on one chapter does not block drafting the next chapter — Ch3 and Ch4 have no technical dependency, only a sequencing one
- When Noba has no module for a `book-adoption`/`needs-verification` concept, draft original prose from verified primary literature rather than forcing a Noba citation that doesn't exist — but flag the deviation explicitly in the chapter's own metadata, not just in HANDOFF, so the gap is visible to anyone opening the file directly
- Confirmed (again, independently of Session 4's similar finding for Ch2/RM-012) that APA IPI materials are learning-outcomes documents, not prose sources — in practice, "Noba or APA IPI" in the copyright rule functions as "Noba, and APA IPI as a backstop that in practice hasn't had usable content yet"
- Rich voice-profile material for a topic (here, selective attention) is not sufficient justification for covering that topic if it isn't a tracked concept in the extraction — use a forward-pointer to the chapter where it probably belongs instead of expanding scope
- Quantitative claims voice-profile snippets repeat (camera counts, photoreceptor counts, processing-latency figures) get independently verified before use, same standard as any other factual claim, even when they originate from Jon's own teaching material

**Files created/modified this session:**
- `source/chapters/ch04-sensation-perception.md` — new, full first draft (v0.1)
- `HANDOFF.md` — Status, Next Up, Key Files updated; this entry added

---

### 2026-06-21 — Session 8

**What happened:** Continuation of the Ch3 drafting session. Jon uploaded his old "6 Chapter 2 Biology.pptx" lecture deck (68 slides, era folder 6 = SP18, King 4e) and said any image not marked by the publisher is his to reuse. Did a full provenance audit before pulling anything: mapped every slide-to-media-file relationship via the slide rels XML, rendered all 68 slides to JPGs (LibreOffice → PDF → pdftoppm) for visual inspection, and checked each candidate against (a) a visible "Myers/DeWall, Psychology, 13e, © 2021 Worth Publishers" credit line, (b) stylistic match to other slides that did carry that credit (several "glossy 3D" brain illustrations had no visible credit in their own crop but were clearly the same illustration family as explicitly-credited ones elsewhere in the deck — treated those as publisher material too, not just the ones with a visible mark), and (c) third-party content that isn't the textbook publisher but also isn't Jon's own (a SciShow Psych YouTube thumbnail, two "X-Minute Neuroscience" YouTube screenshots, and corpus-callosum photos explicitly credited to Science Source and a named Lausanne researcher — excluded all of these on the same "not ours to publish" logic even though they don't trigger the Wade/King/Myers rule specifically). Found 3 slides that were clearly Jon's own original work: distinctive dark-card infographics (misconception myth/reality cards, agonist/antagonist lock-and-key, ANS push-pull balance) with no resemblance to any textbook figure — these had no embedded picture relationship at all (built as native PowerPoint shapes, not images), so rendered the full slides to JPG and used those as the figure files rather than trying to extract a nonexistent embedded image.

Separately, Jon had ChatGPT generate 6 original diagrams specifically for this chapter (found in the connected "101 Textbook Images/3 Chapter images" folder, zipped) — neuron anatomy, action-potential trace, neurotransmitter-vs-hormone, stress-response flowchart, brain-imaging-method comparison table, and split-brain logic — complete with a captions/alt-text/attribution README already written ("Original figure by Jonathan Oxford and ChatGPT, 2026... No external copyrighted image assets used"). Reviewed all 6 visually: clean, accurate, and the captions independently echo language already in the Ch3 draft almost verbatim (the action-potential figure's "stronger stimulation is mainly represented by firing rate" matches the chapter's own phrasing; the split-brain figure's "real lateralization, not personality types" matches the Do Not Confuse panel framing exactly) — strong sign the chapter and Jon's own visual instincts are well aligned.

Combined both sources into `docs/images/ch03/`: 9 figures total, renumbered into the order they actually appear in the chapter text (caught and fixed a numbering bug where the lecture-deck figures and the GPT figures, inserted in two separate edit passes, ended up numbered out of reading-order sequence — e.g., Figure 3.7 appeared in the text before Figure 3.4). Wired all 9 into the markdown with figure callouts and captions at the matching content points. Added a short new paragraph on agonists/antagonists to Section 2 (not in the original BIO-* concept list) specifically to give the lock-and-key figure something to attach to — flagged this as an optional addition, Jon's call whether to keep it. Added Agonist/Antagonist to Key Terms. Rewrote the images README to reflect final file names and dual provenance (ChatGPT-collaborative vs. lecture-deck-original). Body word count grew to ~5,800 (from ~5,200) from the new paragraph and figure-adjacent prose — flagged, not trimmed.

**Decisions made:**
- "Not marked by the publisher" needs a stricter test than "no visible credit line in this crop" — stylistic match to known-publisher images elsewhere in the same deck counts as evidence of common origin, and third-party web/stock content (YouTube screenshots, credited stock photos) is excluded on its own separate logic even when it doesn't trigger the textbook-publisher rule specifically
- When a slide's content is a native PowerPoint shape rather than an embedded image (no picture relationship in the slide rels), render the full slide to an image rather than trying to extract a nonexistent embedded picture
- Figure numbering must be assigned and verified against actual reading order in the text, not assumed from the order figures are added during editing — check this explicitly any time figures come from more than one source/editing pass
- New content additions prompted by an available figure (the agonist/antagonist paragraph) get flagged as optional/Jon's-call rather than treated as required just because a figure exists for it

**Files created/modified this session:**
- `docs/images/ch03/` — new folder, 9 figures (PNG + SVG where available) plus `README_captions_alt_text_attribution.md`
- `source/chapters/ch03-neuroscience-biological-bases.md` — v0.1 → v0.2: 9 figures wired in, agonist/antagonist paragraph added, Key Terms updated, header metadata updated
- `HANDOFF.md` — Status, Next Up updated; this entry added

---

### 2026-06-21 — Session 7

**What happened:** Drafted Chapter 3 (Neuroscience & Biological Bases) end to end in a new session, following the established pipeline from Sessions 3–4. Read `pipeline/chapter-spec.md` and both prior chapter drafts for structural/tone consistency before writing anything. Pulled all 19 concepts for this chapter from `concept_lineage_revised.csv` — confirmed the concept ID prefix is `BIO-*`, not `NEU-*` as referred to informally in earlier handoff text. Checked `wording_change_driver`/`source_confidence` for every concept: all 19 are `instructor-original`/`canonical-common-knowledge` with driver `publisher-template-change` or `n/a` — none flagged `book-adoption` or `needs-verification`, meaning this is the first chapter that could be drafted entirely from course materials and standard primary literature with no Noba/APA IPI substitution requirement. Scanned `voice_profile_merged.csv` for Neuroscience-tagged and Neuroscience-Biology-chapter-tagged entries (27 relevant rows) — used the Sapolsky/dopamine framing, the Phineas Gage narrative, the Animal Model connector pattern, and the evolutionary/comparative framing entries directly; held off on the orchid/dandelion analogy and Tarzan hormone question as better fits for Ch9 and didn't force them in. Architecture: 4 sections (neurons/action potential → neurotransmitters/hormones → autonomic nervous system/stress → brain structures), Misconception Opener on the "10% of the brain" myth, one AI Connection (artificial vs. biological "neurons" — where the name was borrowed but the electrochemistry, neurotransmitter diversity, and spike timing were not), two Do Not Confuse panels (neurotransmitter vs. hormone; left-brain/right-brain personality myth vs. real split-brain findings), and a Phineas Gage classic-study walkthrough. Verified every citation via web search before including it rather than drafting from memory, given how much of this chapter rests on specific empirical claims (neuron counts, resting potential values, the Damasio Gage reconstruction, the Nielsen left-brain/right-brain fMRI study) — caught and corrected my own plan to cite an uncertain "Furtak (2026)" Noba date by checking the actual module page (Noba's citation tool auto-generates the current year, a quirk already flagged in Session 5 for a different module). Connections table covers 8 chapters including non-obvious links (Phineas Gage/PFC → Ch11 Personality and Ch14 antisocial personality disorder). Body word count came in at ~5,200 words, slightly over the 3,500–5,000 target (flagged rather than cut). Did not build figures this chapter and did not get embed URLs for the three neuroscience demos in the inventory (action-potential simulator, neurotransmitter mixing board, oxytocin/vasopressin demo) — both flagged as open items for Jon, mirroring the still-open Ch2 demo-URL placeholder.

**Decisions made:**
- BIO-* is the correct concept-ID prefix for this chapter going forward (correcting informal "NEU-*" references in prior handoff text)
- When every concept in a chapter is flagged `instructor-original`/canonical, draft directly from course materials and primary literature with no Noba/APA IPI substitution — but still independently verify every factual claim and citation via search, since "no copyright concern" is a different question from "no risk of factual error"
- Slightly-over-target body word count gets flagged to Jon rather than cut for its own sake, mirroring how Ch2's slightly-under count was handled in Session 4 — let him make the length call
- Not every chapter needs original figures; Ch3 follows Ch1's no-figures precedent for this draft, left as an open question for Jon rather than assumed

**Files created/modified this session:**
- `source/chapters/ch03-neuroscience-biological-bases.md` — new, full first draft (v0.1)
- `HANDOFF.md` — Status, Next Up, Key Files updated; this entry added

---

### 2026-06-21 — Session 6

**What happened:** Short handoff session. Jon is generating his own images for Ch2 outside this workflow and explicitly asked to hold off on HTML conversion until that's done — Ch2 stays at v0.2 markdown, untouched, no HTML file created yet. Jon's plan is to start a new chat to draft Chapter 3 (Neuroscience & Biological Bases) next. Updated Status/Next Up accordingly and added an explicit "on hold" flag so a future session doesn't proceed with Ch2 HTML conversion or touch `docs/images/ch02/` without checking with Jon first about how his self-generated images should fit in (replacing the four already built, supplementing them, or serving a separate purpose like slides).

**Decisions made:**
- Ch2 → HTML is blocked on Jon, not on any remaining content work; the chapter content itself is considered done pending his line-by-line read
- Chapter 3 is the next drafting target, following the confirmed 14-chapter order

**Files created/modified this session:**
- `HANDOFF.md` — Status and Next Up updated; this entry added

---

### 2026-06-21 — Session 5

**What happened:** Jon brought a detailed Ch2 revision proposal from ChatGPT and asked which parts to adopt rather than applying it wholesale. Evaluated all ~12 suggestions individually rather than rubber-stamping: agreed with nearly all (evidence-ladder table, reliability/validity, internal/external validity terminology, effect size & confidence intervals, softened rhetoric, shortened AI analogy, refined IRB/p-value/Type I error wording). Caught and independently verified one real factual error in the *original* v0.1 draft that ChatGPT's suggestion correctly flagged: the hot sauce paradigm was attributed solely to Lieberman et al. (1999), but McGregor et al. (1998) actually used it first, in the terror-management/mortality-salience context — Lieberman et al. (1999) came after and formalized it as a general-purpose aggression measure. Verified this chronology independently via search rather than trusting either source blindly. Verified DOIs for all citations before adding them (Beecher, Hróbjartsson & Gøtzsche, Neyman & Pearson, Open Science Collaboration, Lieberman et al., McGregor et al., Wasserstein & Lazar, Henrich et al.) rather than accepting ChatGPT's DOI list at face value. Confirmed the Noba modules' "2026" citation year is real (Noba's own citation tool generates the current year, not a fixed publication date) rather than a hallucination, though flagged this convention as worth Jon's awareness. Added a new, real citation not in ChatGPT's list: Ritter & Eslea (2005), a methodological critique of the hot sauce paradigm's construct validity — used directly in the new reliability/validity worked example. Flagged one curriculum-architecture point: reliability/validity are not tracked as RM-* concepts in `concept_lineage_revised.csv` (they live under TLI-014, tagged to Ch. 8's IQ content) — added them to Ch2 anyway as a natural extension of operational definitions, with a note that Ch. 8 should build on this rather than re-deriving the basics. Rewrote the full chapter to v0.2 incorporating all agreed changes. Body word count grew from ~3,250 to ~3,700 words (now within the 3,500–5,000 target, mostly from the new reliability/validity and effect-size/CI content). Did not build new figures this session (reliability/validity dartboard, effect-size/CI plot) — recommended them for Jon's review but left as a follow-up rather than assuming he wants them built yet.

**Decisions made:**
- Evaluate AI-sourced editorial suggestions point-by-point before applying — agree, disagree, or modify each one with reasoning, and independently verify any citation or factual claim rather than trusting either the original draft or the suggested correction by default
- Reliability/validity introduced in Ch2 (general definitions, hot sauce worked example) even though tagged to a different chapter in the concept extraction; Ch8 will apply the same terms specifically to IQ testing rather than re-introducing them
- A single influential finding being later overturned or qualified by a more rigorous follow-up (Beecher vs. Hróbjartsson & Gøtzsche; McGregor/Lieberman attribution itself) is useful chapter content in its own right, not just a citation-accuracy footnote — model the chapter's own argument about replication using its own citations where it genuinely fits

**Files created/modified this session:**
- `source/chapters/ch02-research-methods.md` — revised to v0.2
- `HANDOFF.md` — Status updated; this entry added

---

### 2026-06-21 — Session 4

**What happened:** Confirmed with Jon that Chapter 2 is Research Methods & Statistics (not Neuroscience, as the original spec assumed). This triggered a chapter-renumbering question since Ch1's text/Connections table referenced the old assumed order ("Chapter 2" = Biological Bases, "Chapter 10" = Research Methods). Spent several exchanges deducing a plausible 14-chapter order from `concept_lineage_revised.csv`'s 13 categories (debating splitting Sensation & Perception vs. splitting Thinking/Language/Intelligence into Thinking/Decision-Making + Language/Intelligence) before checking `docs/index.html` — which already contained the complete, real, authoritative 14-chapter order, including a 14th chapter (Stress & Health) absent from the CSV entirely. Caught the error, owned it to Jon, and corrected all chapter cross-references in both `source/chapters/ch01-history-approaches.md` and `docs/chapters/01-history-approaches.html` to match the real order (full order recorded in Current Status above; added as a standing lesson). Then drafted Chapter 2 (Research Methods & Statistics) in full: pulled all 13 RM-* concepts from `concept_lineage_revised.csv` (only RM-012, volunteer/sampling bias, flagged `needs-verification` — sourced from Noba's Statistical Thinking and Conducting Psychology Research in the Real World modules rather than course materials per the copyright rule); scanned `voice_profile_merged.csv` (sparse coverage for this content area — only the Hot Sauce Paradigm example and the general persona/bio entries applied; no chapter-specific signature analogy fit naturally, so evolutionary framing stayed light, confined to the Section 1 naturalistic-observation hook tied to Jon's actual behavioral-ecology background). Architecture: 4 sections (descriptive methods → correlational research + Do Not Confuse panel on correlation/causation → experimental method with the hot sauce paradigm as a worked example with fading → statistics/significance/replication), one full AI Connection callout (Type I/II error ↔ hallucination acceptance vs. AI over-skepticism) plus a lighter touch (operational definitions ↔ prompt engineering; training-data sampling bias), and a placeholder for the existing solid-carnival demo (need Jon to supply the live embed URL). Verified all 13 concepts present via grep and checked citations via web search (Lieberman et al. 1999 for the hot sauce paradigm; Belmont Report 1979 for IRB; Beecher 1955 vs. Hróbjartsson & Gøtzsche 2001 for the placebo effect — used the disagreement deliberately as an in-chapter example of why single influential findings need replication, rather than just citing Beecher uncritically). Body word count came in at ~3,250 words, slightly under the 3,500–5,000 target — flagged rather than padded.

**Decisions made:**
- The real chapter order is settled and lives in `docs/index.html`; always check that file first for numbering questions, never re-derive from the CSV
- Chapter 13 (Stress & Health) has no source material in the extraction and will need separate sourcing later
- When a chapter's content area has thin or no voice-profile coverage, don't force a signature analogy or heavy evolutionary framing — let the chapter be more methodologically driven and use whatever genuine personal-background hook actually fits (behavioral ecology / naturalistic observation, in this case)
- Beecher's classic placebo finding and its later, more rigorous reanalysis (Hróbjartsson & Gøtzsche) were presented together deliberately, modeling the chapter's own lesson about replication rather than citing the more dramatic, less reliable number alone

**Files created/modified this session:**
- `source/chapters/ch02-research-methods.md` — new, full first draft
- `source/chapters/ch01-history-approaches.md` — chapter cross-references corrected to match the real 14-chapter order
- `docs/chapters/01-history-approaches.html` — same corrections applied to the live page
- `HANDOFF.md` — Status, Next Up, and Lessons sections updated; this entry added

---

### 2026-06-21 — Session 3

**What happened:** Drafted Chapter 1 (History & Approaches) end to end as the pilot test of the v3.0 pipeline spec. Initial draft included long prose treatment of each historical school, a Psychology vs. Psychiatry "Do Not Confuse" panel, and a heavier evolutionary-psychology framing tied to Jon's personal academic history. After Jon's review, made substantial revisions: converted the historical-schools narrative into a 6-row comparison table (School / Question / Contribution / Limitation); cut the Psychology vs. Psychiatry panel entirely (judged a distraction from fundamentals); corrected Jon's bio framing (animal behavioral ecology undergrad → developmental psychology graduate work, explicitly not "evolutionary psychology," which Jon does not want associated with his own behavioral-ecology-trained thinking); scaled back evolutionary framing throughout to a proportionate level; added concrete daily-life examples (flinch, dog-training/notification-dread, phone-checking multi-perspective walkthrough); added a full References section with citations verified via web search (caught a missing Miller 1956 citation and a misattributed Noba Project author credit — corrected to Baker & Sperry per Jon's direct knowledge). Converted the finished chapter to HTML (`docs/chapters/01-history-approaches.html`), extending `docs/css/style.css` with reusable callout variants, table styles, and a `<details>/<summary>` pattern for review-question rationales. Jon hit a 404 viewing the live page immediately after publishing; diagnosed via git log, GitHub Actions log, and direct fetch — confirmed file/commit/push were all correct and Pages had rebuilt successfully, concluded it was CDN propagation lag rather than a real error.

**Decisions made:**
- Tables beat long sequential prose for comparing multiple historical schools/concepts — apply this default in future chapters when content is naturally tabular
- "Evolutionary psychology" as a field-label is off-limits for describing Jon's own framing; use "evolutionary perspective" or "behavioral-ecology framing"
- References section (full citations, verification note) is now a standard chapter component, separate from the curated Further Reading list
- Do Not Confuse panels and other optional spec elements should be cut when they don't serve getting fundamentals across, even if factually fine — menu model judgment call, not just "does this fit somewhere"

**Files created/modified this session:**
- `source/chapters/ch01-history-approaches.md` — full draft, then substantially revised per Jon's feedback
- `docs/chapters/01-history-approaches.html` — new, converted from final markdown
- `docs/css/style.css` — added callout variants, table styles, review-question and glossary styles

---

### 2026-06-17 — Session 2

**What happened:** Designed and finalized the chapter-writing pipeline spec (created `pipeline/chapter-spec.md`, iterated v1.0 → v3.0). Major decisions this session: (1) Menu model for chapter structure — small required core, optional elements per chapter rather than rigid template. (2) Three-layer connections system: Where This Fits opener + inline cues + end-of-chapter hyperlinked table. (3) Prologue module ("How to Actually Learn This Stuff") before Chapter 1 — evidence-based study skills foreshadowing multiple chapters. (4) Plain HTML throughout, no Quarto migration. (5) Interactive demos via iframe embed with predict/explain/retrieve scaffold; inventoried 8 existing demo repos. (6) Added §12 AI Integration framework: bidirectional (psychology explains AI + AI illustrates psychology), "where the analogy breaks" rule as the pedagogical core, Human-AI Cognitive Alignment in prologue, chapter-by-chapter touchpoint map. Also read and synthesized three Notion AI literacy resources (Human-AI Cognitive Alignment, Understanding AI Through Psychology, Psychology Curriculum → AI Competency Map).

**Decisions made:**
- AI integration is a recurring thread, not a separate chapter
- Every AI Connection requires three parts: parallel → simplification → what the breakdown tells us
- Human-AI Cognitive Alignment (grounding theory) belongs in the prologue as study-skills science
- Heaviest AI integration: Ch. 6 Learning (RLHF/conditioning), Ch. 7/8 Memory/Cognition (context windows, illusion of knowing), Ch. 9 Social (sycophancy, anthropomorphism), Ch. 4/5 S&P (predictive coding, feature detection)
- Jon's intuition that "AI has personalities, memory, needs context" maps directly onto Social (sycophancy as trait-like tendency), Memory (context window as working memory), and the prologue (cognitive alignment as grounding theory)

**Files created/modified this session:**
- `pipeline/chapter-spec.md` — created v1.0, iterated to v3.0

---

### 2026-06-17 — Session 1

**What happened:** Full audit and revision of prior extraction outputs. Confirmed textbook-era mapping (Wade: folders 1–2; King 3e: folder 3; King 4e: folders 4–11; Myers 13e: folders 12–18; folders 4/5 chronologically swapped). Audited 8 source files across eras; found that the prior 75% `wording_changed_at_book_transition` rate was real but conflated two scenarios: publisher-template changes (King-era publisher slides replaced by instructor-built Myers slides) vs. genuine book-adoption risk. Added `wording_change_driver` column distinguishing `publisher-template-change` (55), `instructor-revision` (62), and `book-adoption` (19). Removed PER-004 (sourced from wrong course — PSYC 4053 Theories of Personality, not Gen Psych). Fixed DIS-009 schema (`publisher-supplied-only` → `needs-verification`). Corrected concept-level origin fields for pure-publisher chapter-era combos. Ran voice scans on latest iterations of 5 specialist courses (Neuroscience 26SS, S&P 226SS, Cognitive 25FS, Lifespan 24FS, Disorders 23SS); produced merged voice profile with `course_source` column. Scaffolded GitHub repo with `docs/`, `source/`, `pipeline/` structure.

**Decisions made:**
- `needs-verification` and `book-adoption` concepts will borrow phrasing from Noba/APA IPI in the pipeline — no need to forensically verify each one pre-emptively
- Voice scan uses latest iteration only for specialist courses (earlier iterations show evolution, latest shows where voice landed)
- GitHub Pages will serve from `docs/` folder

**Files created this session:**
- `source/concept_lineage_revised.csv`
- `source/voice_profile_merged.csv`
- `docs/index.html`
- `docs/css/style.css`
- `docs/js/nav.js`
- `HANDOFF.md`
                                                                                                                                                                                                                             