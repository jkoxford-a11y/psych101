# Chapter 12 Pre-Review Audit — Emotion, Stress & Coping

**Audit date:** 2026-07-14  
**Audit rubric:** `pipeline/audits/chapter-pre-review-audit-prompt-v3.md`  
**Status:** Diagnostic only. No chapter prose, HTML, figures, labs, metadata, inventories, or project-state files were changed during the audit.

## A. Executive judgment

Chapter 12 has a strong, unusually coherent teaching story: the brain anticipates bodily needs, core affect supplies a background state, emotions organize what matters, chronic human simulation can keep stress physiology engaged, and coping works best when it matches the problem. The body-budget metaphor, cognitive light cone, Selye origin story, coping matrix, and AI embodiment contrast make that story vivid in the instructor's voice. The chapter is broadly grounded in real affective and stress science, but it is not ready for line editing because one influential theory—the theory of constructed emotion—repeatedly becomes the established account rather than the chapter's explicitly chosen framework. Patient SM is then made to prove more than the case can show, while the HPA/GAS figures convert simplifications into literal, partly incorrect physiology. Several practical claims about granularity, affect labeling, social support, sleep, nutrition, and exercise move from association to mechanism or intervention without adequate support. The chapter also exceeds its cognitive budget and underuses retrieval: approximately 6,198 words from opener through the AI section, a 417-word summary, 25 glossary terms, one Stop and Retrieve prompt, one student-facing Think About It prompt, and seven review questions. A focused conceptual, visual, and alignment repair pass should precede line editing.

Repository authority is clear: `source/chapters/ch12-emotion-stress-coping.md` is the prose source of truth, and `docs/chapters/12-emotion-stress-coping.html` is generated output. The Chapter 12 HTML passes the repository linter with two warnings, has all four images, non-empty alt text, collapsible answer rationales, and no detected ` ? ` separator or replacement-character mojibake. It is nevertheless not publication-ready: the generator exposed internal programmatic checks, citation-work notes, and activity/demo ideas as visible chapter content. Live responsive rendering could not be certified because the in-app browser's security policy blocks local `file:` pages.

## B. Semantic and narrative skeleton

### Core argument

Emotion is embodied regulation, not irrational noise added after cognition. The brain anticipates bodily demands, integrates interoceptive and contextual information, and organizes action around what matters. Stress is adaptive mobilization when perceived demands press against coping resources; chronic unresolved demands produce cumulative costs. Effective coping changes the stressor when possible, regulates the response when necessary, and maintains the bodily and social conditions that support flexible action.

### Two-week takeaways

1. Allostasis emphasizes anticipatory regulation; homeostasis and allostasis are complementary models, not simply an obsolete model and its more accurate replacement.
2. Interoception and core affect help explain how bodily state contributes to emotional experience.
3. Constructionist, discrete-emotion, appraisal, and other contemporary accounts disagree about how emotion instances are organized; constructionism is influential, not settled consensus.
4. The amygdala contributes to detecting and responding to some forms of threat, but no single lesion case supplies a complete theory of fear or “mattering.”
5. Human memory, prospection, symbolic meaning, and social evaluation allow absent threats to recruit real stress responses.
6. Acute stress can be adaptive; chronic or dysregulated stress can produce allostatic costs across interacting systems.
7. Coping effectiveness depends on controllability, timing, current arousal, available resources, and strategy flexibility.
8. Emotion labels and granularity are useful tools and robust correlates, but their causal mechanisms and trainability should not be overstated.

### Narrative progression

The opener rejects the reflex-only model and introduces body regulation. Section 1 moves from allostasis to interoception and core affect. Section 2 uses classic theories, constructionism, Patient SM, affect labeling, and granularity to explain emotion. Section 3 moves from appraisal to the cognitive light cone, GAS, acute response patterns, and allostatic load. Section 4 turns the model into coping decisions and upstream maintenance, followed by an AI embodiment contrast. This progression is conceptually elegant. The main story becomes less visible when every later phenomenon is recruited as confirmation of constructionism and predictive processing rather than allowed to stand as converging, framework-neutral evidence.

### Reconstruction and story visibility

A first-year student could state the chapter's intended argument, and the chapter lands several strong claims cleanly. The reconstruction is too theory-exclusive, however: a student would likely leave believing neuroscience has established that emotions are predictions constructed from core affect and learned concepts, that affect labeling works by reducing prediction error, and that Patient SM shows the amygdala converts facts into felt “mattering.” The strongest repair is not a neutral survey chapter. Keep constructionism as the organizing lens, identify it once as an influential and debated account, and stop using every downstream finding as if it uniquely validates that account.

## C. Must-Preserve Ledger

| Asset | Instructional role | What makes it effective | Accuracy status | What must survive |
|---|---|---|---|---|
| Smoke-alarm misconception opener | Narrative hook | Activates the reflex-only model and immediately creates a better question | Strong teaching move; replacement model is too categorical | The alarm image, direct address, and constructed-does-not-mean-chosen distinction |
| Thermostat/preheating contrast | Mnemonic analogy | Makes anticipatory regulation intuitive in one image | Broadly useful; homeostasis is oversimplified | Reactive-versus-anticipatory contrast without “more accurate replacement” language |
| Body-budget metaphor | Mnemonic analogy/application | Connects sleep, food, workload, isolation, and recovery to felt state | Useful Barrett metaphor, not a literal measurable account | The deposits/withdrawals teaching job and practical relevance |
| Core-affect circumplex | Explanatory framework | Gives students a compact two-dimensional map and a needed emotion/core-affect distinction | Well established as Russell's model | Valence, arousal, and “core affect is not a specific emotion” |
| Emotional-granularity examples | Worked application | “Anxious,” “frustrated,” and “disappointed” visibly imply different actions | Associations are broadly supported; mechanism is speculative | The concrete contrast and precision-for-action payoff |
| Selye formalin-control origin story | Narrative hook/evidence history | Explains nonspecificity through a memorable experimental accident | Historically useful; GAS should remain a historical model | The control result and short landing on nonspecific response |
| Cognitive light cone | Original mnemonic analogy | Explains why absent, symbolic, remembered, and anticipated threats matter now | Course metaphor with sound ingredients; physiology is overstated | The course-specific label, mental-time-travel bridge, and simulated-threat insight |
| “Useful in the short run; costly when left running” | Distinctive formulation | Compresses the adaptive/maladaptive time-scale distinction | Sound at Psych 101 scale | The sentence, detached from an invented resource curve |
| Coping strategy matrix | Worked application | Forces controllability and arousal to determine the first move | Broadly useful simplification | The matching operation and emotion-focused-then-problem-focused sequence |
| AI embodiment contrast | Application/analogy boundary | Uses allostasis and interoception to clarify what current language models lack | Strong for current systems; subjective-experience conclusion is philosophical | “Emotion-shaped output” and “useful as a mirror, not evidence of felt state” |
| Closing “old, mostly excellent prediction system” cadence | Narrative landing | Returns to compassion without denying mechanism or agency | Too prediction-exclusive as written | The humane landing, symbolic/chronic threat landscape, and short final rhythm |

## D. Construct map and load-bearing claims

### Construct map

| Construct | Type and framework | Nearest confusion | Stability |
|---|---|---|---|
| Homeostasis/allostasis | Regulatory models | Reactive correction versus predictive regulation as mutually exclusive systems | Distinction useful; “different and more accurate” is too strong |
| Body budget | Barrett metaphor/framework | Literal account with social and metabolic resources in one measurable currency | Meaning expands across the chapter |
| Interoception | Sensory/regulatory construct | Direct body reading versus predictive inference | Definition stable; predictive implementation is theory-laden |
| Core affect | Dimensional construct | Core affect as a pre-emotion substance or mood | Valence/arousal stable; “raw material before emotion” is framework-specific |
| Constructed emotion | Theory | Established definition of emotion | Explicitly debated in one table, treated as fact elsewhere |
| Stress/appraisal | Construct and transactional framework | Objective demand versus perceived demand/resources | Stable and teachable |
| GAS/allostatic load | Historical stage model versus cumulative-cost construct | Fixed resource exhaustion versus multisystem dysregulation | Conflated in prose, figure, and Q5 |
| Fight-or-flight/tend-and-befriend | Physiological response versus behavioral proposal | Alternative sex-specific biological systems | Caveat present; oxytocin mechanism and sex pattern still too settled |
| Problem-/emotion-focused coping | Coping categories | Mutually exclusive styles or fixed traits | Well distinguished, though context flexibility needs emphasis |

### Load-bearing claims and inference ladders

1. **Bodily regulation is anticipatory and shapes affect.** Predictive regulation is strongly supported; the body-budget extension is a useful but theory-laden interpretation.
2. **Emotion instances depend on bodily state, context, learning, and concepts.** These contributions are broadly supported. The stronger claim that emotion simply *is* a constructed prediction is plausible and debated, not uniquely demonstrated.
3. **Human simulation lets absent threats mobilize present physiology.** Strongly supported at the broad level. “The identical pathway” is too strong because stressors engage overlapping but variable neural, SAM, HPA, cardiovascular, and immune responses.
4. **Chronic stress produces cumulative physiological costs.** Strongly supported. A fixed alarm→resistance→exhaustion capacity curve and universal high-cortisol/immune-suppression pathway are not.
5. **Coping works through fit and flexibility.** Broadly supported at the framework level; specific biological and intervention mechanisms are unevenly evidenced.

Key overreach ladder: affect-labeling studies directly observe changes in task responses, self-report in some designs, and BOLD activity. They support incidental regulation as an inference. They do not directly demonstrate “more accurate emotion concepts,” reduced prediction error, or a general mechanism by which journaling, friendship, and therapy work. The minimum accurate claim is: precise labeling can change emotional responding in some contexts, and constructionist theory offers one interpretation of why.

## E. Root-cause repair table

| Severity | Root cause and affected surfaces | Evidence | What must be preserved and risk of overcorrection | Minimum effective repair | Action route | Confidence |
|---|---|---|---|---|---|---|
| **High** | Constructionism shifts from organizing framework to settled neuroscience | Source lines 11–20, 52–83, 98–108, 126–145, 252–274; Objectives 2–4; Figures 12.1–12.2; Q2–Q4; glossary | Preserve the constructionist spine, body-state/context/concept integration, and direct prose. Do not replace it with a generic “many theories exist” catalog. | Name constructionism once as the chapter's chosen influential framework; revise categorical “emotions are” claims to distinguish evidence shared across theories from constructionist interpretation. Present classic theories as historical simplifications, not foils that all “underestimated” the winning modern theory. | Authoritative source revision, figure text/captions, then regeneration | High |
| **High** | Patient SM is made into a clean lesion of felt “mattering” | Source lines 110–118; Connections; implied support for Section 2 | Preserve snakes, haunted house, personal space, abstract danger knowledge, and the facts-versus-urgency teaching contrast. | Add the crucial boundary that bilateral amygdala-damage patients, including SM, experienced fear and panic during CO₂ inhalation. Conclude that the amygdala is important for some externally triggered threat responses, not necessary for all fear, and remove “Take it out, and the facts survive; the mattering does not.” Put the boundary once in the walkthrough. | Authoritative source revision and citation addition | High |
| **High** | Historical stress models and visual metaphors are rendered as literal, unitary physiology | Source lines 162–196; Figures 12.3–12.4, captions/alt; summary; Q5 | Preserve the cognitive light cone, Selye origin story, duration distinction, and “useful/costly” sentence. | Separate fast SAM effects from slower HPA/cortisol effects; remove cortisol→increased-heart-rate as a single pathway and “identical pathway” language. Treat GAS as a historical heuristic, remove the invented 15–25% capacity endpoint, and describe chronic stress as immune dysregulation that can include suppression and inflammation. Reframe post-finals illness as a familiar hypothesis/example, not a GAS explanation. | Figure revision, authoritative source revision, metadata, regeneration | High |
| **High** | Hedonic adaptation is assigned a dopamine reward-prediction-error mechanism that the cited well-being studies do not establish | Source lines 229–230; summary line 272; glossary; Connections | Preserve the lottery/accident prediction gap, adaptation-is-incomplete boundary, and Chapter 7 bridge. | Present adaptation as a descriptive well-being pattern. If dopamine remains, label it as a limited analogy to updating rather than the mechanism of the hedonic treadmill; remove “firing hardest during anticipation, not consumption,” “there's no more error,” and the claim that novelty/competence/other people are what keeps it alive unless separately supported. | Authoritative source revision, then regeneration | High |
| **Medium** | Correlational, task-specific, or single-study findings become general causal coping mechanisms | Source lines 124–138, 212–246; Q2, Q4, Q7; summary/glossary | Preserve emotional specificity, social support, sleep/movement/nutrition, and practical student relevance. Do not turn the section into a methods review. | Keep robust associations and practical applications, but remove claims that granularity creates accurate predictions, that labeling necessarily reduces “subcortical arousal,” or that friendship/therapy work through this mechanism. Identify Heinrichs et al. as one small experiment in healthy men using intranasal oxytocin. Add current support for sleep, exercise, and nutrition claims or narrow them. Describe chronic stress as dysregulating—not simply suppressing—immunity. | Authoritative source and citation revision | High |
| **Medium** | The chapter exceeds its learning budget and retrieval/assessment are too thin for its breadth | 6,198 opener-through-AI words; 417-word summary; 25 terms; one Stop and Retrieve; one Think About It; seven open-response questions | Preserve the four-section progression, both classic-study walkthroughs after correction, figures' teaching jobs, coping matrix, AI contrast, and closing cadence. Targets are guides, not automatic cuts. | Cut duplicated framework claims before examples. Shorten the body-budget, granularity, and upstream-coping repetitions; keep one caveat per claim. Add targeted retrieval in Sections 2–4 and bring review to 8–12 without making constructionism the answer to multiple items. | Authoritative source revision | High |
| **High** | Generated HTML exposes internal notes and Chapter 12 figure governance is incomplete | HTML lines 483–499; source Markdown figure paths; no Chapter 12 metadata README | Preserve the semantically current body HTML and valid local image links. | Fix the converter so multiline HTML comments remain comments; regenerate rather than patching HTML. Correct source image paths. Create metadata recording caption, alt text, creation method, attribution, license/public-sharing status, and revised status for all four images. | Shared converter repair; source path repair; metadata; later regeneration | High |

### Accuracy sources consulted

- Gündem et al. (2022), evidence consistent with psychological construction while explicitly locating an ongoing theoretical debate: [PubMed](https://pubmed.ncbi.nlm.nih.gov/36494449/)
- Lench, Flores, and Bench (2011), meta-analysis supporting differentiated effects of discrete emotions: [PubMed](https://pubmed.ncbi.nlm.nih.gov/21766999/)
- Feinstein et al. (2013), fear and panic after bilateral amygdala damage during CO₂ inhalation: [PubMed](https://pubmed.ncbi.nlm.nih.gov/23377128/)
- Sterling (2012), allostasis as predictive regulation: [PubMed](https://pubmed.ncbi.nlm.nih.gov/21684297/)
- Dhabhar (2009), acute enhancement versus chronic suppression/dysregulation of immunity: [PubMed](https://pubmed.ncbi.nlm.nih.gov/19571591/)
- Russell and Lightman (2019), interacting and time-dependent human stress systems: [PubMed](https://pubmed.ncbi.nlm.nih.gov/31249398/)
- Love (2018), context- and sex-dependent oxytocin effects on stress: [PubMed](https://pubmed.ncbi.nlm.nih.gov/31745496/)
- Ariely et al. (2026), affect-labeling mechanisms remain unclear and findings can conflict: [PubMed](https://pubmed.ncbi.nlm.nih.gov/42311801/)
- Ozomaro et al. (2025), granularity is robustly associated with functioning and psychopathology: [PubMed](https://pubmed.ncbi.nlm.nih.gov/40816203/)
- Berridge (2007), dopamine should not be reduced to pleasure or a single reward-prediction function: [PubMed](https://pubmed.ncbi.nlm.nih.gov/17072591/)

## F. Hedging and qualification audit

The chapter is not globally overhedged. Its best calibrations should remain:

- “Constructed does not mean fake or chosen” prevents a serious agency misconception.
- The classic-theory table admits that constructionism remains debated.
- The basic-emotions paragraph states the cross-cultural recognition result before limiting what it proves.
- The tend-and-befriend paragraph says the sex difference is statistical, not categorical.
- The cognitive light cone is explicitly marked as a course term, not standard neuroscience vocabulary.
- Hedonic adaptation is already bounded as incomplete for chronic pain, unemployment, and bereavement.

Qualifications needing consolidation or relocation:

- The constructionism debate appears in the table but is overwhelmed by categorical claims in the opener, headings, figures, summary, glossary, and questions. State the boundary once near Section 2's start and calibrate downstream wording rather than adding caveats everywhere.
- Patient SM's single-case caution is too generic; replace it with the specific CO₂ counterexample, which changes the inference.
- GAS needs conceptual replacement, not an extra disclaimer after a literal three-stage resource graph.
- Affect-labeling and granularity need one mechanism boundary in Section 2. Do not repeat it in coping, summary, and questions.
- The upstream-coping section uses little hedging but lacks citations. Narrow or support claims rather than adding vague “may” language.
- Q6 devotes substantial answer space to caveats about sex differences while the body already gives them. Test the behavioral distinction and place one concise boundary in the rationale.

## G. Alignment decisions

| Objective | Taught, practiced, and tested | Decision |
|---|---|---|
| 1. Allostasis/body budget | Strong prose/figure; Q1–Q2; only retrieval prompt indirectly supports it | Keep after homeostasis calibration |
| 2. Interoception/core affect/construction | Strong prose/figures; Q2; constructionism dominates | Split model-neutral constructs from theoretical interpretation |
| 3. Classic theories/Barrett | Strong table and Q3 | Keep, but ask comparison rather than “what all three missed” |
| 4. Granularity/affect labeling | Taught twice; Q4 | Keep after association/mechanism distinction |
| 5. GAS | Taught, visualized, and Q5 | Retain as historical heuristic, not literal physiology |
| 6. Fight/flight, tend/befriend, allostatic load | Taught and Q6; three performances in one objective | Narrow or split; reduce caveat-heavy assessment |
| 7. Coping categories/fit | Strong matrix and application Q7 | Keep; this is the best candidate for a lab and transfer item |

Additional decisions:

- Add retrieval that discriminates evidence from framework in Section 2, SAM from HPA/GAS from allostatic load in Section 3, and coping-by-controllability in Section 4.
- Increase review questions from seven to at least eight. Preserve open-response quality if Jon intentionally waives the MCQ rule; otherwise author real distractors and rationales rather than mechanically converting prompts.
- Add a question that separates acute adaptive stress from chronic dysregulation and one transfer item for coping fit. Do not add another question whose correct answer is simply “constructed emotion.”
- The glossary is concise but too large. Alphabetize `oxytocin` before `primary appraisal`; add `stress` if it remains a durable target; consider removing `hedonic treadmill` unless the dopamine bridge survives in calibrated form.
- The 417-word summary exceeds the 200–400 target only slightly, but its real problem is certainty: it restates constructionist mechanisms and the dopamine adaptation explanation more strongly than warranted.
- Connections are meaningful but unlinked. Preserve the HPA, amygdala, learning, attachment, and disorder bridges after calibrating their claims.

## H. Figures and lab-gap decision

| Figure | Status | Decision |
|---|---|---|
| 12.1 Body budget | **Revise** | Keep deposits/withdrawals. Mark body budget as a metaphor/framework; replace the categorical constructionist tagline; reduce the implication that metabolic and social “resources” form one literal tank. |
| 12.2 Core affect | **Revise lightly** | Keep circumplex, labels, and “core affect ≠ emotion.” Replace the constructionist bottom tagline with a model-neutral takeaway about valence and arousal. |
| 12.3 Cognitive light cone/HPA | **Revise urgently** | Keep symbolic/remembered/future/social threats around the present body. Separate SAM and HPA or stop at cortisol; remove cortisol→heart-rate and “identical pathway” claims. |
| 12.4 GAS | **Revise urgently** | Keep three historical labels and adaptive-duration contrast. Remove the invented 15–25% endpoint and literal functional-capacity curve; identify GAS as a heuristic and chronic stress as multisystem dysregulation. |

All four figures exist, are readable, omit embedded figure numbers, and have non-empty captions and alt text. None has complete creation/license/attribution/public-sharing metadata; “Original figure” is insufficient for the repository's public-sharing workflow.

**Lab-gap decision:** One new lab is justified; no existing lab practices Chapter 12's central coping operation. Build a coping-fit lab around controllability and arousal: students predict a strategy, classify varied stressors, receive mechanism-level feedback, explain why strategy fit matters, and transfer the rule to a new personal-but-nonclinical scenario. Use the existing “coping strategy matching” activity idea as the seed. Avoid collecting health details or implying diagnosis; store only session responses. A body-budget tracker is less suitable because it risks turning a metaphor into a quasi-diagnostic score.

## I. Source/HTML, citation, and pipeline routing

- Conceptual and prose corrections belong in the authoritative Markdown; regenerate HTML afterward. Do not patch generated HTML independently.
- The Markdown uses `../../images/ch12/...`, which resolves outside `docs/images` from the source location. Correct paths during the source pass; HTML currently points to the real files.
- HTML body content is largely semantically current, but lines 483–499 visibly expose `Programmatic Concept Check`, citation verification notes, and activity/demo ideas because the converter mishandles multiline comments. This is a shared conversion defect and a publication blocker.
- HTML uses the current dynamic sidebar loader and includes `nav.js`. Review answers use `<details>/<summary>`, but there are no option lists because the seven questions are open response.
- Source and HTML place Learning Objectives before Where This Fits, contrary to the required chapter order. Decide once and make source/spec/output agree.
- Figure alt text is descriptive, but Figures 12.3–12.4 faithfully describe inaccurate artwork and therefore must change with the figures.
- Body citations appear to have matching reference entries, and references are alphabetized. The major citation problem is unsupported claim clusters: upstream coping, the constructionist mechanism for granularity/labeling, dopamine as the hedonic-treadmill mechanism, and generalized oxytocin/social-support claims.
- Further Reading and References remain distinct. The three Further Reading items meet the numeric target.
- The global visuals inventory agrees with file existence but overstates readiness by marking all four figures complete despite missing metadata and substantive revision needs.
- Mobile overflow and rendered callout nesting remain unverified because local browser rendering was blocked by the in-app browser's security policy. Static CSS gives figures responsive width, but that is not a rendered-page certification.

## J. Decisions requiring Jon's judgment

1. Should constructionism remain the explicit organizing lens, calibrated as one influential contemporary theory, or should Section 2 become a more plural appraisal/construction/discrete-emotion comparison? The audit recommends keeping constructionism as the lens and removing exclusivity, not rebuilding the chapter as a survey.
2. Should the hedonic-treadmill passage remain as a descriptive Chapter 7 bridge without a dopamine mechanism, or be cut to recover space?
3. Should GAS remain as a short historical heuristic after Figure 12.4 is redesigned, or should allostatic load replace it as the main chronic-stress model?
4. Are Chapter 12's open-response review questions an intentional exception to the MCQ/distractor-rationale requirement?
5. Should a coping-fit lab be prioritized for Chapter 12, or should the chapter intentionally remain lab-free until higher-priority cross-book labs are complete?

## K. Revision constraints

### Must preserve

- Smoke-alarm opener and constructed-does-not-mean-chosen correction.
- Thermostat/preheating analogy, with calibrated model language.
- Body-budget deposits/withdrawals teaching job.
- Russell circumplex and core-affect/emotion distinction.
- Concrete emotional-granularity examples.
- Selye formalin-control origin story.
- Cognitive light cone as a clearly labeled course metaphor.
- “Useful in the short run; costly when left running.”
- Coping-fit matrix and controllability logic.
- “Emotion-shaped output” AI distinction.
- Humane final cadence about an old, mostly excellent system facing symbolic and chronic demands.

### Must correct

- Constructionism presented as the established definition of emotion.
- Patient SM as evidence that amygdala removal eliminates felt mattering or all fear.
- HPA/cortisol shown as a single direct cause of increased heart rate.
- “Identical pathway” language for physical and simulated stressors.
- GAS as a literal universal resource curve with 15–25% remaining.
- Chronic stress reduced to elevated cortisol and immune suppression.
- Dopamine reward-prediction error as the established mechanism of hedonic adaptation.
- Granularity and affect labeling correlations/task effects turned into demonstrated predictive mechanisms and broad therapy explanations.
- Thin retrieval/review coverage, broken source figure paths, missing figure metadata, and visible internal HTML notes.

### Must not happen

- Do not flatten the chapter into generic “emotions involve biology and cognition” prose.
- Do not remove body budget or the cognitive light cone without replacing their teaching functions.
- Do not turn the constructionism boundary into a repeated caveat across every surface.
- Do not preserve Patient SM merely because the case is vivid while omitting the CO₂ counterexample.
- Do not replace inaccurate figures with technically safe but instructionally empty art.
- Do not make a body-budget activity resemble a health assessment or diagnostic score.
- Do not let uncertainty become the dominant retrieval cue; students should remember what bodily state, appraisal, chronicity, and coping fit do.

## Appendix: Low-impact mechanical findings

- Chapter linter warnings: seven review questions (target 8–12) and one Stop and Retrieve prompt (typical target 3–5).
- One student-facing Think About It prompt appears across four sections.
- Key terms are not fully alphabetical: `oxytocin` follows `stressor`.
- `stress` is bolded as a central term but lacks a glossary entry.
- Where This Fits is approximately 177 words versus the ~100-word target.
- Summary is approximately 417 words versus the 200–400-word target.
- Connections contain five meaningful rows but lack the specified source anchors and chapter links.
- Figure inventory marks all four assets complete despite missing metadata and required scientific revisions.
