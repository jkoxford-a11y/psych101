# Chapter 5 Pre-Review Audit — Consciousness

Audit date: 2026-07-11  
Canonical repository: `C:\GitHub\psych101`

## A. Executive judgment

The authoritative Markdown has a strong, teachable central problem—conscious information processing is not the same thing as conscious experience—and a potentially useful organizing framework, but it is **not ready for line-by-line editorial review yet**. The first blocking issue is state reconciliation: `source/chapters/ch05-consciousness.md` is the current predictive-model chapter, while `docs/chapters/05-consciousness.html` renders the superseded sleep-heavy chapter now archived as `_superseded-h05-states-of-consciousness.md`; regeneration from the source would replace most of the live page. The second is scientific calibration: the draft explicitly labels predictive processing as “our model,” but later treats consciousness as the top-down prediction, Charles Bonnet syndrome as a demonstration of that model, and five neurotransmitter systems as components of a single conscious-model architecture with more certainty than the cited evidence supports. The third is scope and learning design: the body is about 6,223 words against a 3,500–5,000 target, Section 2 and Section 3 each exceed 2,400 words, and the source contains no Stop and Retrieve prompts despite the project’s per-section pattern. The fourth is figure readiness: all eight source figures exist, but several encode the chapter’s strongest theoretical claims as settled facts, Figure 5.6 is too dense for textbook use, and the active image directory has no authoritative per-file attribution/license/public-sharing metadata. The chapter should receive a focused conceptual and structural pass, then a source-level alignment pass, before line editing or HTML regeneration.

No chapter, HTML, figure, lab, metadata, inventory, HANDOFF, or project-log file was edited. This report is the only repository change made by the audit.

## Repository state and authority

- **Prose source of truth:** `source/chapters/ch05-consciousness.md` (546 lines, 71,756 bytes, SHA-256 `0D729E3E2335B23D87F743C9D6549417349EE990953B93966DF1075A4E0EE399`). Repository instructions explicitly establish source Markdown as authoritative.
- **Generated output:** `docs/chapters/05-consciousness.html` (456 lines, 73,164 bytes, SHA-256 `3E89E48E54083CEC501764C6A96CC100DFAB1CD842BD078865FF71C09815BD31`). It is generated output and is substantively stale, not an alternative authority.
- **Chapter-specific state:** `source/chapters/_provenance/ch05-consciousness.md` and the Chapter 5 block in `source/visuals-inventory.md` agree that the current source is v0.3, that Sleep moved to Chapter 6, and that eight current figures are wired. This is more current than the holding-space README, which describes only old circadian and tolerance/withdrawal candidates.
- **Figure metadata:** there is no current `docs/images/ch05/README...` covering the eight wired figures. The provenance file records placement but not complete per-file license, attribution, or public-sharing status. The holding-space README is not authoritative for the current eight.
- **Completeness:** PowerShell full-file reads reached the final Wacker reference in Markdown and closing `</html>` in HTML. File sizes, line counts, hashes, closing tags, and rendered DOM all indicate complete—not truncated—files.
- **Stale/contradictory documentation encountered:** HANDOFF says the HTML recently passed an anchor/heading repair, which is true mechanically but obscures that its content is an older chapter generation. The HTML-conversion spec’s sidebar snapshot is explicitly non-authoritative; `docs/index.html` correctly identifies the public chapter as “Chapter 5 — Consciousness.” The global visual inventory is current for Chapter 5; the holding-space image README is stale for this chapter.

## B. Core argument and two-week takeaways

### Core argument

The chapter argues that conscious experience is a limited, action-guiding construction rather than a complete readout of everything the brain processes. It adopts predictive processing as a course framework: attention and salience help determine what becomes globally available, prediction errors update the model, and perturbations—lesions, sensory loss, and psychoactive drugs—can reveal separable functions. It closes by acknowledging that this functional framework does not resolve why any of those processes feel like anything from the inside.

### Two-week memory test

Students should retain:

1. Blindsight dissociates visually guided behavior from conscious visual experience.
2. Attention and consciousness are related but not identical; practiced action can be attentionally guided with little deliberate monitoring.
3. Predictive processing is one useful framework for perception and consciousness, not the settled definition of consciousness.
4. Prediction error is the mismatch between expectation and input or outcome; it can drive updating without itself defining consciousness.
5. Sensory loss and hallucination show that perception is constructive, but they do not uniquely prove one theory of consciousness.
6. Drug effects are system- and receptor-dependent; perturbations can inform mechanism, but a drug class is not a clean one-system lesion.
7. Dopamine is not simply pleasure; phasic reward-prediction-error signaling is important but does not exhaust dopamine function.
8. Functional accounts of consciousness do not by themselves settle the philosophical and scientific disputes grouped under the “hard problem.”

### Reconstruction test

- **Section headings:** support a clean progression from evolutionary framing → model operation → perturbation evidence → limits. The headings alone reconstruct the intended argument well.
- **Learning objectives:** largely match the headings, but LO 6 compresses five drug classes and five proposed model functions into one very large task; LO 5 also combines computation, cross-chapter transfer, and a disputed consciousness claim.
- **Bolded terms:** initially support the argument, then become a dense receptor/system catalog in Section 3. The bolding increasingly signals “memorize this mapping” even though the chapter says not to memorize a catalog.
- **Figures:** Figures 5.1–5.5 visually reinforce the central construction/awareness argument. Figures 5.6–5.8 shift the apparent center of gravity toward neurotransmitter taxonomy and dopamine, making the latter half feel like a psychopharmacology chapter.
- **Retrieval prompts:** do not reconstruct the whole argument. There are zero Stop and Retrieve prompts and only two Think About It prompts, both in Section 2.
- **Summary:** accurately follows the current source’s structure, but its drug paragraph repeats the strongest speculative mappings as conclusions.
- **Review questions:** cover all seven objectives at least once, but over-credit the adopted model in Q7 and test pharmacological detail in Q10–Q11 more strongly than cross-section integration.

Overall, headings and summary tell one story; retrieval distribution, receptor bolding, Figures 5.6–5.8, and four drug-heavy questions pull toward a second story about pharmacology.

### Conceptual progression

1. **Blindsight opener:** establishes the processing/experience dissociation.
2. **Evolutionary movement argument:** asks why costly centralized nervous systems and predictive control emerged.
3. **Adopted definition:** names consciousness as a live action-guiding predictive model while acknowledging alternatives.
4. **Attention/salience:** distinguishes selection from conscious experience.
5. **Prediction loop and constructive perception:** moves from perception to gap-filling, hallucination, timing, abstraction, and AI.
6. **Drug perturbation:** maps GABA, dopamine/NE, 5-HT2A, CB1, and opioid systems onto five proposed functions.
7. **Limits:** distinguishes functional explanation from the hard problem.

The prerequisite gap is not basic neuroscience—Chapter 3 supplies that—but **theory comparison**. Global workspace is named at line 71 and “globally available” returns at line 131 without being taught, even though global availability is doing central explanatory work. Section 2 then moves abruptly from visual prediction to metaphor and false-belief tasks; these are interesting extensions, but they require a claim that the same cortical computation scales from contour completion to abstract language and social inference. Section 3 is the largest abrupt shift: it becomes a drug-by-drug catalog wrapped in one predictive-model interpretation. The source tries to correct this with both a bullet recap and a table, which duplicates rather than solves the load.

## Strong claims requiring author attention

1. **Predictive processing repeatedly becomes an identity claim about consciousness.** Source lines 73–77 correctly say “in our model,” but lines 125, 131, 135–142, 265–281 and Figures 5.4–5.5 treat conscious experience as the top-down prediction and hallucinations/drugs as demonstrations of this architecture. Current consciousness science contains multiple competing frameworks whose empirical separation remains immature; predictive processing is one family, not the field’s settled definition. See Seth and Bayne’s review of competing theories: [Theories of consciousness](https://www.nature.com/articles/s41583-022-00587-4).
2. **The five-system “disruption matrix” exceeds the evidence.** GABA/arousal, dopamine/NE/salience, 5-HT2A/precision, CB1/relevance-time, and opioids/suffering are presented as parallel components of one conscious model. The symmetry is pedagogically attractive but scientifically uneven: the 5-HT2A account is explicitly a proposed predictive-processing model; the CB1 “relevance assignment” construct is not established as a canonical system function; and opioids affect both pain unpleasantness and intensity, not only suffering. The matrix needs calibration before it becomes the chapter’s organizing evidence.
3. **The psychedelic explanation contains an internal mechanistic contradiction.** Lines 203–207 say psychedelics relax high-level prior confidence and allow ascending/intrinsic information more influence, consistent with REBUS. Line 209 then says “Turn down how much the brain trusts its own error signals,” which reverses the account. REBUS proposes relaxed precision of high-level priors, not reduced trust in prediction-error evidence: [Carhart-Harris & Friston, 2019](https://pubmed.ncbi.nlm.nih.gov/31221820/).
4. **Cannabis appetite is misexplained.** Line 225 says the munchies are “not that you're suddenly hungrier” but a relevance filter unable to say no. CB1 signaling directly participates in hypothalamic and broader energy/feeding circuits; cannabinoids can increase appetite and food intake. The rhetoric replaces a documented appetite mechanism with the chapter’s speculative relevance construct. See [cannabinoid regulation of feeding](https://pubmed.ncbi.nlm.nih.gov/28596721/).
5. **The evolutionary sequence is suggestive, not evidence for the origin of consciousness.** Sea-squirt nervous-system reduction supports a relationship among locomotion, sensorimotor control, and neural cost. Bilaterian monoamine evolution and cephalization do not establish that predictive modeling is “the origin of consciousness.” The dopamine/serotonin “turn toward/stand down” shorthand is drawn from one opponency model; later reviews note little agreement about serotonin as dopamine’s simple aversive opponent: [Boureau & Dayan, 2011](https://www.nature.com/articles/npp2010151).

## C. Confirmed defects

### Critical

#### C1. Live HTML is a superseded chapter

- **Location:** Entire `docs/chapters/05-consciousness.html` versus `source/chapters/ch05-consciousness.md`.
- **Problem:** HTML teaches circadian rhythms, sleep stages, dreams, sleep disorders, deprivation, and three old figures. Source teaches blindsight, predictive processing, a five-system perturbation argument, the hard problem, and eight different figures. Learning objectives, opener, headings, summary, connections, questions, glossary, Further Reading, and References all differ.
- **Why it matters:** The live page teaches a different chapter. Any narrow HTML repair risks preserving obsolete content; regeneration risks losing the current HTML’s signature automatic-camera analogy and any approved structural presentation.
- **Recommended fix:** Settle the source first. Preserve only explicitly approved HTML material by moving it into the source—most plausibly the automatic-camera analogy, not the displaced Sleep content—then regenerate the HTML from the authoritative Markdown.
- **Confidence:** high.

#### C2. Three rendered images are broken

- **Location:** HTML lines 61–69 and 87–90.
- **Problem:** Browser verification returned `naturalWidth = 0` for `fig_scn_pathway.png`, `fig_two_process_sleep_model.png`, and `fig_sleep_hypnogram.png`; none exists under `docs/images/ch05/`.
- **Why it matters:** The public page visibly contains three broken figures.
- **Recommended fix:** This disappears when the stale HTML is rebuilt from source; do not repair these obsolete paths in isolation.
- **Confidence:** high.

### High

#### C3. Source exceeds the body-length specification by about 1,223 words

- **Location:** Source Sections 1–3 plus Closing, lines 50–271.
- **Problem:** Approximately 6,223 body words versus the 3,500–5,000 target. Section 2 is ~2,425 words and Section 3 ~2,541.
- **Why it matters:** The overage is concentrated where theory extensions and drug mappings accumulate; it increases cognitive load and weakens the single argument.
- **Recommended fix:** Consolidate or move material based on conceptual necessity, not an arbitrary word cut. Specific candidates appear in Section F.
- **Confidence:** high.

#### C4. The psychedelic mechanism contradicts itself

- **Location:** Source lines 203–209.
- **Problem:** The text first describes relaxed high-level prior precision, then says psychedelics reduce trust in error signals. Those imply opposite changes in the relative weighting of prior versus error.
- **Why it matters:** This can teach the central predictive-processing mechanism backward.
- **Recommended fix:** Decide which predictive-processing account is being taught and state it consistently as a proposed model.
- **Confidence:** high.

#### C5. Cannabis appetite explanation is factually misleading

- **Location:** Source line 225.
- **Problem:** “It's not that you're suddenly hungrier” denies direct endocannabinoid involvement in appetite and feeding regulation.
- **Why it matters:** It replaces a supported mechanism with an analogy constructed to fit the chapter’s matrix.
- **Recommended fix:** Separate documented appetite circuitry from any broader relevance-assignment interpretation.
- **Confidence:** high.

### Medium

#### C6. Source has no Stop and Retrieve prompts

- **Location:** Entire authoritative Markdown.
- **Problem:** Count is 0. The project pattern expects 1–2 per major section. Two Think About It prompts exist, both in Section 2; Sections 1 and 3 have none.
- **Why it matters:** The longest and most conceptually difficult chapter passages provide no interruption for retrieval or application.
- **Recommended fix:** Reclassify or add a small number of prompts at conceptual pivots; do not seed one after every subsection.
- **Confidence:** high.

#### C7. Connections row cites content not taught in the source

- **Location:** Source line 292.
- **Problem:** “Tolerance, withdrawal, and substance use disorder” is listed as a Chapter 5 connection, but current source body does not define tolerance or withdrawal. Those belong to the superseded HTML/Sleep-era source.
- **Why it matters:** The table falsely cues prerequisite knowledge.
- **Recommended fix:** Either restore a deliberately scoped neuroadaptation treatment to the source or change the connection to content actually taught.
- **Confidence:** high.

#### C8. Hard-problem connection points to absent Chapter 13 content

- **Location:** Source line 294.
- **Problem:** The row says Chapter 13 covers vegetative states/disorders of awareness. Full-text search of `ch13-psychological-disorders-therapy.md` found no disorders-of-consciousness or vegetative-state treatment.
- **Why it matters:** It promises a cross-chapter payoff that does not exist.
- **Recommended fix:** Remove or redirect the connection based on actual chapter content.
- **Confidence:** high.

#### C9. Body uses a duplicate bullet recap immediately before the table

- **Location:** Source lines 243–259.
- **Problem:** Five bullets repeat the five mappings and are immediately followed by a table containing the same information. Body bullets also conflict with the chapter spec’s prose/table preference.
- **Why it matters:** Students process the densest and least secure claims twice without additional explanation.
- **Recommended fix:** Retain one synthesis form after the scientific mappings are calibrated; the table is the more teachable form.
- **Confidence:** high.

#### C10. Current figure metadata is incomplete

- **Location:** `docs/images/ch05/`, current captions at source lines 17–18, 58–59, 95–96, 122–123, 139–140, 166–167, 189–195; provenance and holding-space README.
- **Problem:** There is no current per-file README stating attribution, license, public-sharing status, alt text, and accuracy-review status for all eight wired figures. Source captions do not supply attribution. The holding-space README describes different Sleep-era assets.
- **Why it matters:** Public-sharing readiness cannot be verified.
- **Recommended fix:** After figure selection is settled, create/reconcile authoritative metadata for the surviving current figures.
- **Confidence:** high.

#### C11. Major pharmacological claims lack claim-level sources

- **Location:** Source lines 171–181, 192, 203–209, 221–239.
- **Problem:** The chapter provides citations for selected alcohol, stimulant, psychedelic, and dopamine claims but none for the proposed CB1 relevance/temporal architecture, the “munchies” interpretation, opioid separation of suffering from detection, or opioid GABA-interneuron disinhibition. One opioid study literature directly shows effects on both intensity and unpleasantness: [Atlas et al. evidence summarized here](https://pmc.ncbi.nlm.nih.gov/articles/PMC3945427/).
- **Why it matters:** The least established claims are among the least sourced.
- **Recommended fix:** First decide which claims survive. Then cite claim-matched reviews or primary evidence; do not add citations to claims that should be narrowed or removed.
- **Confidence:** high.

#### C12. Glossary is not alphabetical

- **Location:** Source Key Terms, lines 434–462.
- **Problem:** `5-HT2A receptor` appears last rather than under a consistent numeric/serotonin sorting rule.
- **Why it matters:** Low learning impact, but the spec requires alphabetical order.
- **Recommended fix:** Reorder during back-matter cleanup after the final term set is decided.
- **Confidence:** high.

#### C13. Rendered page has narrow-width horizontal overflow

- **Location:** HTML/site CSS at a 390 × 844 browser viewport.
- **Problem:** Browser verification measured document scroll width 414 px at 390 px viewport width. The `.main` content box extended to about 413.8 px. The single table itself was not the primary overflow source.
- **Why it matters:** Mobile users can get unintended horizontal scrolling.
- **Recommended fix:** Treat as a verified shared-layout defect, but repair it separately from Chapter 5 content regeneration.
- **Confidence:** high.

### Low

#### C14. HTML Further Reading contains malformed Markdown and a split item

- **Location:** HTML lines 425–426.
- **Problem:** `**Crash Course Psychology` appears literally, and its description is split into a second paragraph.
- **Why it matters:** Visible polish/accessibility issue on the stale page.
- **Recommended fix:** Do not repair the obsolete HTML item separately; ensure the future conversion does not leak Markdown markers.
- **Confidence:** high.

#### C15. HTML duplicates the References introduction

- **Location:** HTML lines 431 and 433.
- **Problem:** The same “Full citations...” note appears twice.
- **Why it matters:** Minor visible duplication.
- **Recommended fix:** Remove through regeneration.
- **Confidence:** high.

## D. High-impact editorial decisions

1. **What is the chapter actually claiming consciousness is?** One defensible choice is to use predictive processing as a unifying interpretive lens while distinguishing it from a theory of conscious access such as global workspace. Another is to keep the course-specific definition but explicitly mark every downstream inference as model-dependent. The current draft alternates between those positions.
2. **How much psychopharmacology belongs here?** The drug section can remain if it genuinely tests “disruption reveals function,” but its five-way symmetry must be weakened where evidence is weak. Alternatively, the chapter can teach a smaller number of high-quality dissociations and move receptor detail to a table/sidebar or Chapter 13.
3. **Does the evolutionary section argue for nervous-system centralization or for consciousness?** The sea-squirt example strongly supports the former. The step from predictive action control to subjective experience needs either a defended bridge or a narrower claim.
4. **Should global availability be taught explicitly?** “Globally available for flexible, deliberate action” appears to explain the transition from local processing to consciousness, but the relevant theory is named only in a list. If it remains central, students need a compact explanation; if not, remove the unexplained theoretical import.
5. **How should the hard problem be framed?** Chalmers’ distinction is important, but “the central unsolved problem in the science of consciousness” implies a consensus not shared by eliminativist/functionalist positions. Jon should decide whether the chapter presents it as the course’s chosen philosophical framing or compares the dispute.
6. **Which HTML-only voice material is worth preserving?** The automatic-camera/manual-override analogy is the signature Consciousness analogy in `voice-brief.md` and is absent from the current source. It could complement the stronger blindsight opener, but importing it is an editorial choice; displaced Sleep material belongs in Chapter 6, not back in Chapter 5.

## E. Scientific accuracy and overreach

### Strongly established or broadly supported with reasonable simplification

- **Blindsight dissociation:** behavior can use visual information without reported visual awareness. The chapter’s core distinction is sound, although the exact residual pathways and capacities should remain calibrated.
- **Attention and awareness are separable:** the distinction is supported, and the chapter appropriately warns against equivalence. A current overview notes distinct neural correlates: [Janssens, 2022](https://www.nature.com/articles/s44159-022-00049-9).
- **Inattentional blindness:** the gorilla example supports failures of conscious report under attentional load. The statement that the gorilla was processed “at retinal level and beyond” is safe at a broad level; the precise depth of unconscious processing should not be inferred from failure to report alone.
- **Reward prediction error:** phasic activity in important dopamine populations tracks better-/worse-than-expected reward in conditioning paradigms. The chapter’s anti-“pleasure chemical” correction is useful. Current reviews still treat RPE as important while acknowledging alternative/heterogeneous functions: [Amo, 2024](https://pubmed.ncbi.nlm.nih.gov/37451506/) and [Bromberg-Martin et al., 2010](https://pubmed.ncbi.nlm.nih.gov/21144997/).
- **Methylphenidate/cocaine pharmacokinetic contrast:** rate and route of DAT occupancy matter. The phrase “the timing does” is too exclusive, but the core contrast has empirical support: [Volkow et al. review](https://pubmed.ncbi.nlm.nih.gov/10667609/).
- **LSD residence time:** slow receptor dissociation is relevant to duration, though dose, active signaling, and pharmacokinetics should not be reduced to one variable.

### Broadly supported but over-simplified

- **Cocktail-party name capture, line 102:** “reliably breaks through” overstates the base rate. A preregistered replication found 29% noticed their own name, similar to earlier studies—not reliable for most participants: [Röer & Cowan](https://pmc.ncbi.nlm.nih.gov/articles/PMC8908911/).
- **Charles Bonnet syndrome, lines 137–142:** reduced sensory input/deafferentation is a leading explanation, but pathogenesis remains uncertain. Hallucinations can be vivid and clear, yet “indistinguishable from the inside from ordinary vision” is too broad because retained insight is characteristic and phenomenology varies: [CBS review](https://pmc.ncbi.nlm.nih.gov/articles/PMC8330457/).
- **Opioids and pain, lines 233–239:** sensory-discriminative and affective-motivational dimensions are separable, but opioids do not specifically control only suffering; human remifentanil data show reductions in both pain intensity and unpleasantness.
- **Alcohol/GABA, lines 171–181:** GABAergic effects are important, but alcohol is pharmacologically broad. The sequence from GABA enhancement to quieter amygdala, weaker oversight, blackout, and respiratory death is too unified for a multi-target drug.

### Plausible and debated

- **Predictive processing as a theory of consciousness:** useful but not exclusive or mature enough to be treated as established identity. Current reviews explicitly compare it with global workspace, higher-order, re-entry, and integrated-information approaches.
- **CBS as predictive-processing evidence:** consistent with predictive accounts, not diagnostic proof.
- **Postdiction/flash-lag, line 146:** appropriately presented as debated; this is one of the draft’s best-calibrated passages.
- **Psychedelic precision-weighting and self-model destabilization:** REBUS is influential but proposed. Therapeutic mechanism and the link from spine growth in mice to durable human outcomes remain unsettled; the draft’s mouse caveat is appropriate.

### Weak, misleading, or unsupported at the level stated

- **“Most sensory input...matches prediction...and never reaches conscious awareness,” line 125:** prediction match is not an established general criterion for conscious access; the ambient-hum example also involves adaptation and attention.
- **“The error signal is correct; the prediction wins anyway,” line 127:** a hollow-mask percept does not provide direct access to a distinct “correct error signal” that was computed and defeated.
- **Perception, metaphor, corvid problem solving, ape false belief, and consciousness as “the same machinery,” lines 129–131:** this collapses phenomena across levels of explanation without evidence that one identical mechanism performs all of them.
- **System 1/System 2 as the same predictive model at different speeds, line 131:** a useful bridge at most, not an established derivation of dual-process theory.
- **AI hallucination label “not a loose borrowing,” line 152:** the field’s term is explicitly metaphorical and contested; next-token prediction is not the same computation as cortical predictive coding. The paragraph’s breakdown is strong, but the opening overclaims the parallel.
- **Methylphenidate treats ADHD by “making the task feel worth doing,” line 192:** motivational salience may contribute, but this is not a sufficient mechanism of ADHD treatment.
- **CB1 as relevance assignment/temporal encoding, lines 221–229:** acute effects are real; the single latent model-function label is a chapter-specific inference presented as established architecture.

## F. Cognitive load and organization

| Passage | Load/problem | Recommendation |
|---|---|---|
| Lines 63–67, monoamines → predictive model → octopus | Monoamine evolution, opponent computation, cephalization, consciousness, and distributed octopus control are five hard ideas with weak connective evidence. | **Split and shorten.** Keep the movement/centralization comparison; move monoamine opponency or octopus detail to a sidebar unless it directly supports an objective. |
| Lines 71–77, theory list and adopted definition | Students see four theories named but not distinguished, then receive one definition. | **Keep but clarify.** Either omit the undeveloped list or add a compact table showing what the adopted framework does and does not claim. |
| Lines 85–110, attention/salience | Selective attention, automaticity, inattentional blindness, cocktail-party effect, LC/NE, amygdala, blindsight routes, extinction, phobia, and PTSD accumulate before retrieval. | **Split.** Preserve the attention-consciousness distinction; shorten the anatomy/clinical bridge. A comparison table could separate attention, salience, and consciousness. |
| Lines 116–131, prediction loop through metaphor/false belief/System 1 | Moves from five-step loop to illusions, language, social inference, comparative cognition, global availability, and dual-process theory. | **Shorten/move.** Keep one perceptual example and one transfer example. Move metaphor/false-belief/corvid/ape material to a sidebar or Further Reading. |
| Lines 133–154, CBS, postdiction, AI | Three distinct advanced demonstrations plus two Think prompts form a chapter inside the chapter. | **Split or move.** Keep CBS as the main case. Retain postdiction only if timing is a two-week takeaway. Keep AI only after correcting the computational equivalence claim. |
| Lines 169–239, five drug classes | Dense receptor/anatomy/effects catalog plus a speculative model function for each. | **Convert to calibrated table plus fewer anchor cases.** Teach two or three strong dissociations in prose; keep the rest as comparison/reference material. |
| Lines 241–259, bullets and matrix | Immediate duplication. | **Keep one form.** The table is more useful than the bullets. |
| Lines 263–271, hard problem close | Repeats the same limit three times. | **Shorten.** Preserve the honest landing sentence, but one clear statement of the unresolved issue is sufficient. |

The draft should not be shortened uniformly. The core blindsight distinction, explicit “in our model” guardrail, attention/consciousness discrimination, RPE correction, postdiction caveat, and hard-problem limitation all earn complexity. The cuts should come from repeated extensions and artificially symmetric drug mappings.

## G. Source/HTML reconciliation plan

### Dangerous parity defects

1. **Entire chapter generation differs:** opener, objectives, sections, summary, connections, review questions, Key Terms, Further Reading, and References.
2. **Different figures:** source uses eight consciousness/prediction/drug figures numbered 5.1–5.8; HTML uses three missing Sleep figures numbered 5.1–5.3.
3. **Different scientific claims:** HTML defines consciousness as graded subjective awareness and emphasizes automatic-camera/manual override; source adopts an action-guiding predictive model.
4. **Different chapter boundary:** HTML retains circadian rhythms, sleep stages, dreams, disorders, and deprivation now assigned to Chapter 6.
5. **Different back matter:** HTML’s 12 questions and 19 terms test Sleep-era content; source’s 12 questions and 15 terms test current content.
6. **Different Connections:** HTML points to Sleep/Memory content; source points to Chapter 6 as future maintenance.

### Acceptable or potentially valuable transformations

- HTML callout structuring and collapsible answer markup are appropriate rendering transformations.
- The automatic-camera/manual-override analogy is valuable instructor voice, but it must be deliberately approved and moved into source before regeneration if retained.
- The HTML’s structured Sleep classic-study callout is pedagogically sound in form, but its content belongs in Chapter 6; it should not be used to preserve old Ch5 HTML.
- Recent anchor repairs are mechanically correct but should not be treated as a reason to retain the stale generation.

### Reconciliation sequence

1. Finish conceptual/scientific decisions in source.
2. Select any HTML-only material worth preserving and move it into source.
3. Reconcile source captions/metadata for the surviving eight figures.
4. Regenerate HTML once from the settled source.
5. Re-run link, image, details, mobile, and semantic parity checks.

## H. Figures and labs

### Figure inventory and recommendations

All eight source image files exist. Actual images were visually inspected, not judged from filenames alone.

| Figure | Status | Finding |
|---|---|---|
| 5.1 `blind_sight.png` | **Use now after metadata** | Clear processing-versus-awareness dissociation and strong opener support. Confirm that illustration wording does not imply all visual processing or a uniquely known route. |
| 5.2 `sea_squirt_life.png` | **Revise** | Visually clear, but on-image title and takeaway move from nervous-system reduction to prediction/consciousness more strongly than the organism demonstrates. |
| 5.3 `Attention_filter.png` | **Revise** | Teaches one useful distinction, but “attention is the filter; consciousness is the model” looks like settled architecture rather than the adopted framework. |
| 5.4 `the_prediction_model.png` | **Revise** | Excellent visual sequence, but bottom banner states “Conscious experience is this...model” without the source’s “in our model” qualification. |
| 5.5 `charles_bonnet.png` | **Revise** | Readable and relevant. “Brain is a prediction machine,” “uncorrected predictions,” and “fills gaps—creatively” encode debated mechanism as fact. |
| 5.6 `fig_neuromodulatory_systems_section3.png` | **Slide only or redesign** | Too many panels and small labels for textbook/mobile reading; it also turns all five speculative mappings into authoritative architecture. This is the least publication-ready current figure. |
| 5.7 `Dopamine_1.png` | **Remove or consolidate** | Clear but duplicates Figure 5.8 and nearby prose. The “do it again/not good” framing anthropomorphizes the learning signal. |
| 5.8 `dopamine_error.png` | **Use now after calibration/metadata** | Strongest dopamine figure and directly represents the classic conditioning sequence. Caption should identify the classic paradigm and avoid implying every dopamine neuron behaves identically. |

No genuinely necessary new figure is recommended. The chapter already has more visual material than its argument needs. Revision and consolidation should precede any new build.

### Attribution, license, and public-sharing status

Current source alt text is non-empty and generally descriptive. File existence is confirmed. Attribution, license, and public-sharing status are **not verifiable** for the current eight because no authoritative per-file README exists and captions omit attribution. Until reconciled, the figures are “use-now candidates pending metadata and accuracy review,” not publication-cleared assets.

### Labs and demonstrations

- **Chapter 5 source lab links:** none.
- **Rendered HTML lab links/embeds:** none.
- **External demonstration/resource:** Sapolsky’s *Dopamine Jackpot!* is mentioned in body and Further Reading as a video lecture, not a six-phase Learning Lab.
- **Relevant existing lab:** `docs/labs/ch03/dopamine-prediction-error.html` exists and practices the same RPE sequence. It is **built but not wired to Chapter 5**. Reusing it would be preferable to building a duplicate, but only if the dopamine section remains central enough to justify interrupting the chapter.
- **Sleep demos/labs:** belong to Chapter 6 under the locked chapter split; do not wire them into current Chapter 5 merely because the stale HTML contains Sleep.
- **Privacy/data:** no Chapter 5 activity currently collects or transmits data because none is integrated.

Potential insertion recommendation only: if reused, place the existing dopamine-prediction-error lab after current Figure 5.8, with prediction/retrieval wrapper text. This is optional; the chapter’s first need is conceptual reduction, not more activity.

## I. Learning objectives, glossary, and review questions

### Project-spec counts

| Element | Source count | Specification | Judgment |
|---|---:|---:|---|
| Where This Fits | ~132 words | ~100 | Slightly long; acceptable after tightening. |
| Learning Objectives | 7 | 4–7 | At ceiling. |
| Major numbered sections | 3, plus a closing section | 3–5 | Within range. |
| Body | ~6,223 words | 3,500–5,000 | Over target by ~1,223. |
| Chapter Summary | ~358 words | 200–400 | Within range. |
| Connections rows | 6 | 4–8 | Count compliant; two rows substantively stale. |
| Review questions | 12 | 8–12 | At ceiling. |
| Key Terms | 15 | 8–20 | Within range. |
| Further Reading | 6 | 3–6 | At ceiling. |
| Stop and Retrieve | 0 | 1–2 per major section pattern | Noncompliant with structural pattern. |
| Think About It | 2, both Section 2 | one per major section pattern | Uneven; Sections 1 and 3 lack one. |
| Classic Study | 0 | optional | No defect. |
| Current chapter lab/demo | 0 | optional | No defect. |
| Figures | 8 | no numeric requirement | More than enough; consolidate before adding. |

### Learning-objective alignment

| LO | Taught | Practiced | Tested | Judgment |
|---|---|---|---|---|
| 1. Blindsight/processing distinction | Opener, lines 11–22 | Everyday driving analogy only | Q1 | Appropriate; “identify what it means for definition” is broader than Q1 tests. |
| 2. Evolutionary/comparative argument | Section 1, lines 52–67 | No in-text retrieval | Q2 | Taught and tested, but expected causal confidence exceeds evidence. Narrow before line edit. |
| 3. Predictive definition plus caveat | Lines 69–77 | No practice | Q3 | Appropriate metatheoretical objective; could merge with LO 7 if objectives need reduction. |
| 4. Attention, salience, NE/amygdala, inattentional blindness | Lines 83–110 | Diagnostic question at line 98 | Q4–Q5 | Too many tasks in one objective. Q4–Q5 cover attention/automaticity and inattentional blindness, not NE/amygdala mechanism. |
| 5. Prediction loop, learning/perception, top-down consciousness | Lines 112–154 | Two Think prompts | Q6–Q7 | Too broad and includes the most disputed claim. Separate the computation from its consciousness interpretation. |
| 6. Five drug classes/disruption | Section 3 | Matrix only; no retrieval/application prompt | Q8–Q11 | Overloaded. “Apply” across five systems is more advanced than the chapter’s evidence supports. |
| 7. Hard problem and framework limits | Closing | No practice | Q12 | Clear and tested. Potential merge with LO 3 because both are framework-calibration goals. |

No major current source content is wholly outside the objectives, but postdiction, AI hallucination, metaphor/social inference, and detailed drug pharmacokinetics are disproportionate supporting material. They should be reduced or explicitly promoted; at present they compete with the objective set.

### Review-question audit

| Q | LO/concept | Level | Recommendation |
|---:|---|---|---|
| 1 | LO1, blindsight | discrimination | **Keep.** Plausible reversal distractor and useful rationale. |
| 2 | LO2, movement/evolution | application | **Revise.** Keep the nervous-system cost/action inference; do not make sea-squirt reduction evidence for consciousness itself. |
| 3 | LO3, model caveat | discrimination/metacognition | **Keep.** Important calibration item. |
| 4 | LO4, automaticity/attention | application | **Keep.** Good everyday application, though rationale should explicitly distinguish attention from motor control. |
| 5 | LO4, inattentional blindness | recall/application | **Keep.** Distinct enough from Q4. Avoid claiming nonreport proves a specified salience mechanism. |
| 6 | LO5, prediction error | application | **Revise.** Intensity and expectancy interact; “critical factor is mismatch” is too absolute for conscious awareness. |
| 7 | LO5, CBS | theory application | **Revise.** Change “supports” to “is consistent with” and preserve alternative mechanisms. |
| 8 | LO6, alcohol blackout | application | **Keep with narrower pharmacology.** Encoding-versus-retrieval distinction is valuable. |
| 9 | LO5/6, dopamine RPE | recall/application | **Keep with population caveat.** Strong core misconception correction. |
| 10 | LO6, LSD residence time | recall/trivia | **Replace.** Tests an incidental pharmacokinetic detail rather than disruption-reveals-function or semantic skeleton. |
| 11 | LO6, CB1 matrix mapping | recall of disputed taxonomy | **Replace.** Treats the least-supported mapping as settled and can be answered by memorizing the table. |
| 12 | LO7, hard problem | discrimination | **Keep, revise framing.** Do not label all functional/measurement questions “the easy problem” without noting Chalmers’ terminology. |

The set has one clear cross-chapter item (Q2 applies Chapter 1’s evolutionary lens) and several cross-section possibilities, but not two strong cross-section/cross-chapter integrations as required. Replace Q10 and Q11 rather than adding questions above the ceiling. One replacement should integrate blindsight/attention with predictive processing; the other should ask students to compare a strong drug dissociation with the chapter’s framework while recognizing evidentiary limits.

### Key Terms tiers

#### Tier 1 — must retain

Consciousness; blindsight; selective attention; inattentional blindness; automaticity; prediction error; predictive model (with explicit course-framework label); hard problem of consciousness.

#### Tier 2 — useful but optional

Charles Bonnet syndrome; postdiction; reward prediction error. These support major cases but are not all equal to the chapter’s central vocabulary.

#### Tier 3 — do not glossary separately unless the drug architecture remains a durable objective

CB1 receptor; endocannabinoid system; locus coeruleus; 5-HT2A receptor. These are anatomical/receptor labels supporting the broader drug argument and could be consolidated under the comparison table rather than maintained as durable conceptual vocabulary.

Definitions are generally one sentence and body concepts are present. The central missing glossary decision is not “add every bold term”; it is whether the receptor taxonomy belongs in the durable chapter skeleton at all.

## J. Citation and lineage issues

### Citation integrity

- **Orphaned References entry:** Sapolsky (2017), *Behave*, appears in References and Further Reading but is not cited in body/caption/review rationale. Decide whether it is a curated resource only or a claim source.
- **Corporate/product references:** none in the current source References.
- **Missing claim-level support:** cannabis relevance/time/appetite mapping and opioid suffering-only mapping need direct support if retained; the latter is contradicted by evidence of opioid effects on both intensity and unpleasantness.
- **Cocktail-party citations:** Cherry (1953) and Moray (1959) establish the paradigm/history, but the “reliably” statement should be updated or qualified using modern replication evidence.
- **Predictive-consciousness support:** Seth (2021) is a trade book and Rao/Ballard (1999) concerns predictive coding in visual cortex, not a general identity between predictive models and consciousness. A current theory-comparison review is needed for the chapter-level claim.
- **Historical/modern balance:** Chalmers (1995) is correct for naming the hard problem but does not establish current scientific consensus. Schultz et al. (1997) is correct for the classic RPE paradigm but should be paired with a modern review if generalized to dopamine as a whole.
- **Citation details:** the project provenance notes a previously corrected venue for Sapolsky’s lecture (California Academy of Sciences rather than Stanford); current source uses California Academy in Further Reading and a generic Pritzker Lecture entry in References, so venue should be reconciled during source cleanup.
- **Reference ordering:** not prioritized; substantive calibration comes first.

### Copyright and concept lineage

All `CON-001` through `CON-013` lineage rows are marked instructor-original/canonical-common-knowledge, with `instructor-revision` or `n/a`; none is `book-adoption`, `needs-verification`, publisher-originated, or ambiguous. The provenance note likewise says no flagged concepts. Therefore:

- **No current concept-lineage copyright flag requires a mandatory Noba/APA wording route.**
- **No evidence of commercial-textbook wording was identified in this audit.**
- The source’s novel predictive-model/drug architecture is an **accuracy and citation issue**, not a concept-origin or wording-proximity issue.
- The stale HTML matches the archived superseded source; it is stale generated content, not evidence of unapproved copying.

## K. Voice audit and optional enhancements

### Voice findings

The current source strongly matches the voice brief in direct address, concrete scenes, dry understatement, explicit argument turns, cross-chapter bridges, and honest caveats. Strong examples include the blindsight hallway, “Try writing that protocol for a human ethics board,” “Same seam—different tear,” and the final acknowledgment of uncertainty. The sea-squirt and octopus material fits the behavioral-ecology lens and never incorrectly calls it evolutionary psychology.

Voice weakens when narrative confidence smooths theory into fact. “The error signal is correct; the prediction wins,” “the same prediction-and-correction machinery,” and the five “What this reveals” conclusions have strong rhetorical closure but exceed the evidence. The solution is not generic hedging everywhere; it is precise uncertainty at the points of inference.

The signature automatic-camera analogy appears in stale HTML lines 24–28 but not current source. Its absence is not a defect—no signature analogy is mandatory—but it is the most clearly valuable HTML-only voice candidate. Persona seasoning is appropriately light; no Herr Prof./Awesome-Sauce marker is necessary.

### Chapter ending and back matter

- **Summary:** 358 words, within target. It cues the source’s argument but repeats contested drug mappings as settled. Revise after scientific decisions rather than before.
- **Closing:** earns its place, but three paragraphs repeat the framework/hard-problem limit. It can land more sharply with less repetition.
- **Connections:** six rows, forward and backward, count-compliant. Row 4 and row 6 are stale as documented. Source rows are not internally hyperlinked as the spec expects; anchors can be added during conversion after headings settle.
- **Public labels:** `docs/index.html` correctly uses concise “Chapter 5 — Consciousness.” Full source subtitles and draft suffixes need not be reproduced in Connections labels.
- **Further Reading versus References:** clearly separated in source. Six Further Reading items meet the maximum.

### Optional enhancements

1. A compact “framework comparison” sidebar could distinguish predictive processing, global workspace/access, and the hard problem without turning the chapter into a survey of theories.
2. If postdiction remains, a simple timing diagram would teach the integration-window dispute more efficiently than prose—but only after deciding that postdiction is a two-week takeaway. No new figure is otherwise needed.
3. Reuse the existing dopamine-prediction-error lab rather than building a Chapter 5 duplicate, if the final chapter still gives RPE this much weight.
4. Consider moving detailed receptor residence time, mouse spine-growth evidence, and opioid disinhibition circuitry into annotated Further Reading or a pharmacology sidebar.

## L. Recommended order of operations

1. **Lock the claim boundary:** decide whether predictive processing is a lens, a theory of consciousness, or the course definition; decide whether global availability needs explicit teaching.
2. **Repair scientific overreach:** psychedelic precision contradiction, cannabis appetite/relevance claim, opioid suffering-only claim, evolutionary origin claim, dopamine/serotonin shorthand, and AI mechanism equivalence.
3. **Re-scope Section 2 and Section 3:** remove duplicate extensions and reduce body toward 5,000 words without cutting the core distinctions.
4. **Rework LO 4–6 and the assessment set:** narrow compound objectives; revise Q2/Q6/Q7/Q12; replace Q10–Q11 with integration questions while staying at or below 12.
5. **Add sparse retrieval at true pivots:** at least one in Section 1 and one or two across Section 3; redistribute Think About It rather than mechanically adding one after every subsection.
6. **Settle figure statuses:** revise 5.2–5.6, choose between 5.7 and 5.8, and create current attribution/license/public-sharing metadata for survivors.
7. **Clean back matter:** stale Connections rows, source hyperlinks/anchors, glossary tiers/order, orphan Sapolsky reference, and claim-matched citations.
8. **Preserve approved HTML-only material in source:** chiefly the automatic-camera analogy if Jon wants it. Do not restore displaced Sleep content to Chapter 5.
9. **Regenerate HTML once:** replace the superseded page rather than patching it incrementally.
10. **Run final parity/render validation:** images, anchors, citations, details disclosures, malformed Markdown, mobile overflow, keyboard access, and narrow/landscape layouts.

## Decisions requiring Jon’s judgment

1. Is predictive processing the chapter’s organizing lens, its explicit course definition of consciousness, or a claim about what consciousness literally is?
2. Should the drug section retain all five systems, or center only the strongest perturbation cases and move the rest to reference material?
3. Does the sea-squirt/monoamine/octopus sequence argue only for predictive action control, or should the chapter defend a further inference to consciousness?
4. Should global workspace/global availability be taught explicitly, or removed from the explanation?
5. Should the hard problem be presented as Chalmers’ influential framing or as the chapter’s chosen statement of the field’s central problem?
6. Should the automatic-camera/manual-override analogy from stale HTML be moved into the current source alongside the blindsight opener?
7. Is postdiction important enough for the semantic skeleton, or should it move to a sidebar/Further Reading?
8. Which dopamine figure survives—5.7’s accessible summary or 5.8’s stronger classic-paradigm teaching value?
