# Chapter 10 Lifespan Development Pre-Review Audit

**Audit date:** 2026-07-14  
**Scope:** Read-only diagnostic audit for editorial review  
**Canonical repository:** `C:\GitHub\psych101`  
**Authoritative prose:** `source/chapters/ch10-lifespan-development.md`  
**Generated output:** `docs/chapters/10-lifespan-development.html`

## A. Executive judgment

Chapter 10 has a compelling teaching spine: humans take unusually long to develop because a long, plastic, socially supported childhood makes complex learning possible. The chapter then uses three recurring tensions—nature and nurture, continuity and stages, stability and change—to connect prenatal development, cognition, attachment, adolescence, and aging. Its best passages are memorable, student-facing, and unusually honest about replication and cultural limits. The water-glass opening, the cross-sectional/longitudinal contrast, the AI-and-scaffolding application, the reunion-focused explanation of attachment, the ManyBabies moral-evaluation result, and the aging tradeoff should all survive revision.

The chapter is not ready for line editing. Seven root problems need resolution first:

1. The human life-history explanation is presented as a single settled causal story and begins with species superlatives that are false or ambiguous as written.
2. The attachment section turns modest, heterogeneous associations into a stable causal pathway, and Figure 10.6 intensifies the problem by labeling infant relationship classifications as child traits.
3. The dual-systems account of adolescence is presented as a universal neural explanation rather than a useful but simplified model whose predictions depend on context.
4. Several theories and historical attributions need calibration: Piagetian stages, early object knowledge, differential susceptibility, Baumrind's parenting typology, and the origin of “scaffolding.”
5. The chapter is substantially over the word and concept targets, and the central story becomes difficult to see in the long social-development catalog.
6. The retrieval and ending structures do not meet the repository specification: the HTML linter fails, the apparent Stop-and-Retrieve prompts are plain paragraphs, the review questions lack hidden answers/rationales, Connections are unlinked, the glossary is oversized and unsorted, and Further Reading follows References.
7. Figure and citation records have drifted: some metadata still describes selected and wired figures as pending candidates, several captions omit essential “schematic” boundaries, and a few references do not support or accurately identify the claims attached to them.

Sections 1–4 contain approximately 6,652 words, 33% above the 5,000-word ceiling. There are 8 learning objectives against a 4–7 target and 32 glossary entries against an 8–20 target. Static source/HTML comparison found complete semantic alignment, all eight image paths present, nonempty alt text, populated key terms, no leading-dash caption artifacts, and no bad literal ` ? ` separator. The chapter linter failed because all 12 review blocks lack the required `<details>/<summary>` structure and warned that it found zero recognized Stop-and-Retrieve callouts.

A live browser/mobile render could not be completed because the required in-app browser runtime was unavailable in this session. Static CSS inspection suggests the eight `wide` figures deserve a focused small-screen overflow check; this is an unverified risk, not a confirmed defect. No chapter, HTML, figure, lab, metadata, inventory, handoff, backlog, or project-log file was changed during this audit.

## B. Core argument and two-week takeaways

### Core argument

Development is an extended construction process. Biology supplies constraints and starting conditions; experience, culture, and relationships tune what develops; and development continues through adolescence and adulthood as systems reorganize and trade one strength for another. Humans' prolonged dependence and large investment in learning make this interaction especially visible, but no single evolutionary factor or developmental timetable explains the whole lifespan.

### Two-week memory test

Students should retain:

1. Children are not defective adults or empty vessels. Their knowledge and strategies are actively constructed, although change can be gradual in one domain and stage-like in another.
2. Genes and environments transact: biology changes what environments people encounter, and experience changes how biological potentials are expressed.
3. Research design changes what can be concluded. Cross-sectional studies confound age with cohort; longitudinal studies follow change but face attrition and repeated-testing effects.
4. Timing and dose matter in development. Sensitive periods describe heightened responsiveness, not rigid deadlines after which learning is impossible.
5. Piaget's assimilation/accommodation distinction and Vygotsky's zone of proximal development offer complementary ways to think about active and socially supported learning.
6. Attachment classifications describe patterns in a relationship under a reunion procedure. They are probabilistic correlates of caregiving and later functioning, not fixed child traits or destinies.
7. Moral motivation and moral reasoning are distinct; an early preference for a helper is not an adult moral code.
8. Adolescent risk reflects an interaction among motivation, self-regulation, peers, opportunity, and context. Aging likewise involves uneven tradeoffs rather than uniform decline.

### Reconstruction test

The intended progression is recoverable:

- Section 1 establishes evolutionary context, research methods, prenatal development, and brain plasticity.
- Section 2 explains active cognitive construction through Piaget, core knowledge, and Vygotsky.
- Section 3 moves from social support to attachment, temperament, parenting, and morality.
- Section 4 carries the stability/change tension through identity, adolescent risk, and aging.

The story is visible in the opening and summary and is reinforced by the three tensions. It becomes obscured in Section 3, where attachment physiology, temperament, susceptibility, parenting styles, and moral development accumulate as adjacent topics. The objectives, 32-term glossary, and review set also foreground topical coverage more than the three tensions or the construction argument.

## C. Confirmed defects

### High — Human life history is framed with inaccurate superlatives and monocausal language

- **Location:** Section 1, “Why Does Human Development Take So Long?”; Figure 10.1; Summary.
- **Problem:** The chapter calls humans the species with the largest brain relative to body size, longest childhood, latest average age at first reproduction, and longest lifespan. It then says “the brain is the reason” development slowed, calls cooperative breeding “the social half of the answer,” and closes with a four-factor equation that implies one complete causal solution.
- **Why it matters:** A simple brain-to-body ratio is not largest in humans; small mammals can have much larger raw ratios. Encephalization quotient gives humans an exceptional value but is a different and limited comparison. Human life history is also a hybrid: slow development and longevity coexist with relatively short interbirth intervals and high reproductive output compared with other apes. Cooperative breeding is a serious evolutionary model, not an established single origin story.
- **Recommended fix:** Keep the “long, plastic, expensive” spine, but label the evolutionary account as a supported model. Replace the four universal superlatives with comparative primate claims, distinguish brain/body ratio from encephalization, change monocausal sentences to coevolutionary language, and remove the equation-like certainty from Figure 10.1 and the Summary.
- **Confidence:** High. Comparative reviews describe a coevolved, mosaic human life history rather than four universal extremes ([Bogin et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC7293148/); [Schuppli et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC12394790/)). Raw brain/body ratio and encephalization are not interchangeable ([Roth and Dicke](https://pmc.ncbi.nlm.nih.gov/articles/PMC11222651/)).

### High — Attachment associations are converted into stable child traits and causal histories

- **Location:** Section 3, “Attachment”; Strange Situation discussion; Figure 10.6; Summary.
- **Problem:** The prose says the first relationship has consequences “well beyond” infancy, that first-year working models tend to persist into adult relationships, and that Ainsworth's home observations predicted reunion patterns “powerfully.” Figure 10.6 labels infants as “comfortable with closeness and autonomy,” “high need for closeness,” or “emotionally distant,” and assigns each pattern a typical caregiving history and learned worldview.
- **Why it matters:** Attachment security and caregiver sensitivity are related, but pooled associations are modest and heterogeneous. Stability from infancy is also modest. The Strange Situation classifies behavior in a caregiver–child relationship under a specific procedure; it does not directly measure an enduring personality trait or adult romantic style.
- **Recommended fix:** Preserve the reunion diagnostic, secure-base concept, internal-working-model hypothesis, and cultural caution. Recast causal verbs as probabilistic associations; distinguish infant classifications from adult attachment constructs; and redesign Figure 10.6 around observable reunion behavior, with caregiving sensitivity and later outcomes shown as correlates rather than deterministic causes or destinies.
- **Confidence:** High. A 2024 meta-analysis of 22,914 dyads found a pooled sensitivity–security association of about *r* = .25, with heterogeneity ([Madigan et al.](https://pubmed.ncbi.nlm.nih.gov/38709619/)). Meta-analytic stability of early attachment is modest rather than fixed ([Pinquart et al.](https://pubmed.ncbi.nlm.nih.gov/32772822/)).

### High — The adolescent dual-systems model is presented as a universal neural explanation

- **Location:** Section 4, adolescent risk; Figure 10.7; Review Questions 9 and 12; Summary.
- **Problem:** Reward systems are said to mature earlier than the prefrontal cortex, and this mismatch is said to explain elevated risk-taking across almost all cultures and historical periods. Question 9 asks which late-maturing brain region is “primarily responsible,” and Question 12 asks students to use prefrontal maturation to explain both identity exploration and vulnerability to risk.
- **Why it matters:** Dual-systems models are useful heuristics, but “gas before brakes” can imply two independent systems, a universal reward peak, and a single-region deficit account. Real-world risk varies with peers, incentives, stress, opportunity, learning, and culture; identity exploration is not established as a direct consequence of prefrontal maturation.
- **Recommended fix:** Present the model as one schematic account of average developmental tendencies. Add context and individual variation, remove the cross-cultural/historical universal, revise Question 9 to ask what the model explains and misses, and replace Question 12's neural reduction with an integration of self-regulation, identity, and social context. Add “schematic” to the figure caption.
- **Confidence:** High. A major review concludes that the model is useful but overly simple and that empirical results depend strongly on operationalization and context ([Pfeifer and Allen](https://pmc.ncbi.nlm.nih.gov/articles/PMC6990093/)).

### High — The review and retrieval structures fail the repository specification

- **Location:** Three italic “Stop and retrieve” paragraphs in source; 12 review questions; generated HTML.
- **Problem:** The source includes retrieval language, but the generator renders it as ordinary italic paragraphs. Section 4 has no Stop-and-Retrieve prompt. The review questions are open response without answer choices, model answers, rationales, or `<details>/<summary>` wrappers.
- **Why it matters:** Students receive no immediate answer feedback, and the HTML linter reports a hard failure for 12 review blocks missing `<details>/<summary>` plus a warning for zero recognized Stop-and-Retrieve callouts.
- **Recommended fix:** Convert the three existing prompts to the standard callout structure, add one retrieval prompt in Section 4, and provide hidden model answers/rationales. If the book intentionally prefers open response over multiple choice, preserve the strong prompts but make an explicit repository-level decision and update the shared specification/linter rather than allowing Chapter 10 to remain an exception by accident.
- **Confidence:** High. Confirmed by static source inspection and `pipeline/lint_chapters.py`.

### Medium — Several framework boundaries and historical attributions are wrong or too strong

- **Location:** Sections 2–3; glossary.
- **Problem:** The chapter says Piaget's core qualitative-stage claim “held up well”; says Baillargeon “demonstrated” object permanence; defines core knowledge as present at birth or early infancy; treats orchid/dandelion children as biological categories; credits Baumrind (1966) with four parenting styles; and presents scaffolding as Vygotsky's own mechanism.
- **Why it matters:** Modern evidence supports active construction and important age-related change, but performance can be more continuous and task-dependent than a stage account predicts. Looking-time studies provide evidence of early expectations, not uncontested proof of adult-like object concepts. Environmental susceptibility appears more continuous and domain-specific than a two-type metaphor implies. Baumrind's original framework had three styles; the neglectful/uninvolved quadrant was formalized later. “Scaffolding” was introduced by Wood, Bruner, and Ross in 1976 and subsequently linked to Vygotskian theory.
- **Recommended fix:** Keep these frameworks but name their epistemic status. Change “demonstrated” to “provided early looking-time evidence consistent with”; define core knowledge as early-emerging systems or biases; teach orchid/dandelion as a metaphor for a susceptibility continuum; correct the parenting-style attribution; and identify scaffolding as a later instructional concept compatible with the ZPD.
- **Confidence:** High. The assigned Noba source itself emphasizes that development can look continuous or discontinuous depending on the measure ([Noba](https://nobaproject.com/modules/cognitive-development-in-childhood)). Differential-susceptibility evidence argues against a simple bimodal orchid/dandelion split ([Lionetti et al.](https://pubmed.ncbi.nlm.nih.gov/34711295/)).

### Medium — The Connections, glossary, and ending order do not meet specification

- **Location:** Connections table; Key Terms; References and Further Reading.
- **Problem:** Connections has 10 rows rather than the 4–8 target and neither the concepts nor destinations are hyperlinks. One row defines theory of mind tautologically, and the orchid row claims the same gene can produce different phenotypes although no gene is identified. The 32-term glossary is above target and ceases to be alphabetical after “zone of proximal development.” References precedes Further Reading, and the HTML text says Further Reading is “above” when it is below.
- **Why it matters:** This is a structural and navigation failure, not a prose preference. The oversized glossary reinforces catalog learning, while the two weak Connections rows teach inaccurate transfer.
- **Recommended fix:** Reduce Connections to 6–8 high-value, accurate, linked rows; rewrite the theory-of-mind and susceptibility rows; reduce and alphabetize Key Terms; and place Further Reading before References with individually separated entries.
- **Confidence:** High.

### Medium — Citation support and bibliographic details need a focused repair

- **Location:** Prenatal alcohol, scaffolding, parenting styles, adolescent brain, Genie, aging, References.
- **Problem:** Jones and Smith (1973) is the first fetal alcohol syndrome case report, not adequate support for the current no-known-safe-amount/no-safe-time guidance. The Blakemore reference gives the journal title incorrectly. Scaffolding and the fourth parenting style lack their historically relevant sources. Several load-bearing factual claims—including the neuron count, Genie, emerging adulthood, myelination timing, and some aging claims—have no nearby citation.
- **Why it matters:** The prose can remain accessible, but its strongest claims must be traceable to the evidence that actually supports them.
- **Recommended fix:** Retain Jones and Smith for historical recognition, add a current public-health or review source for alcohol guidance, correct the journal to *Journal of Child Psychology and Psychiatry*, add Wood, Bruner, and Ross (1976) and the later four-style taxonomy source, and cite the most load-bearing uncited claims rather than adding references indiscriminately.
- **Confidence:** High. Current public-health guidance supports the alcohol statement ([CDC](https://www.cdc.gov/alcohol-pregnancy/about/index.html)); the 1973 article documents initial recognition ([Jones and Smith](https://pubmed.ncbi.nlm.nih.gov/4127281/)); the publisher page confirms the Blakemore journal title ([Wiley](https://acamh.onlinelibrary.wiley.com/doi/abs/10.1111/j.1469-7610.2006.01611.x)).

## D. High-impact editorial decisions

1. **Choose the epistemic status of the life-history spine.** Recommended: retain it as the chapter's organizing explanation, but state once at first introduction that it is a coevolutionary model rather than a complete or uniquely established account. Carry that boundary into Figure 10.1 and the Summary.
2. **Choose a compression strategy.** Recommended: protect the moral-development replication, AI/ZPD application, and aging tradeoff; compress the Neanderthal enrichment, natural-pedagogy aside, biobehavioral-synchrony mechanism, and parenting-style catalog. A compact parenting table could replace several paragraphs.
3. **Resolve the review-format mismatch at the project level.** Recommended: keep the existing open questions, add hidden model answers and rationales, and convert only selected items to multiple choice where a diagnostic distractor genuinely teaches something. If all questions must be MCQ, that is an author decision, not a mechanical HTML fix.
4. **Decide whether Figure 10.3 belongs in the chapter or slides.** It currently combines synaptic overproduction, pruning, efficiency, experience, multiple sensitive windows, cost, and optimization. Recommended: revise it to one hard idea—selective stabilization/tuning—or move the dense version to slides.
5. **Confirm that eight objectives are intentional.** Recommended: merge the Piaget and Vygotsky objectives into one active/social-construction objective and rewrite the aging objective, which currently promises causal explanation the chapter does not supply.

## E. Scientific accuracy and overreach

### Construct map

| Construct | Epistemic status the chapter should teach | Current risk |
|---|---|---|
| Development as construction/plasticity | Broad organizing framework | Strong and appropriate |
| Secondary altriciality, life history, cooperative breeding | Comparative observations plus evolutionary models | Written as one settled adaptive explanation |
| Sensitive periods and synaptic tuning | Mechanisms with domain- and region-specific timing | “Use it or lose it” and “precisely tuned” imply overly simple optimization |
| Piagetian schemas and stages | Influential theory; active construction is durable, rigid stages less so | Stage claim treated as broadly confirmed |
| ZPD and scaffolding | Sociocultural construct plus later instructional method | Historical concepts collapsed |
| Attachment and internal working models | Observed reunion patterns plus inferred relational model | Converted into child traits and long-term causal destiny |
| Temperament and differential susceptibility | Individual-difference and interaction frameworks | Orchid/dandelion metaphor reified into categories |
| Dual systems and fluid/crystallized abilities | Useful schematic developmental models | Average trends presented as universal mechanisms |

### Load-bearing claims

- **Extended human development:** Long dependence, substantial postnatal brain growth, and extensive social learning are observed. Their coevolution is strongly plausible. A unique brain-first or cooperative-breeding-first causal sequence is an inference, not a direct observation.
- **Active and social cognitive construction:** Children's task performance and responsiveness to support are observed. Schemas, stages, and the ZPD are theoretical constructs used to organize those observations; the exact degree of stage-like change varies by domain and measure.
- **Relationships and context:** Reunion behavior and caregiver behavior are observed; their associations are probabilistic. Internal working models are inferred mechanisms. Lifelong relationship destiny is not demonstrated by an infant classification.
- **Adolescent and adult reorganization:** Average behavioral and cognitive trajectories are observed. Dual-systems imbalance is one candidate model. Broad fluid/crystallized trends are defensible, but individual trajectories and task measures vary.

### Qualification audit

Several boundaries are excellent and should stay: the Neanderthal sample warning, the Genie confounds, the Piaget age/culture caution, the attachment cultural caution, the parenting correlation warning, the ManyBabies null result, and the limits placed on Erikson's stages. The moral-development section is the chapter's best example of claim-first writing followed by an appropriately scoped replication boundary.

Other qualifications need to move closer to the claim. The life-history boundary belongs in the first explanatory paragraph, not only in a later caveat. Figure 10.7 and Figure 10.8 need “schematic average pattern” in their captions. The attachment caveat needs to precede or accompany the long-term consequences claim. The Summary currently strengthens rather than preserves uncertainty by saying Piaget's progression was confirmed, attachment patterns are traceable to caregiver sensitivity, and dual systems explains risk-taking.

The prenatal alcohol conclusion should remain: no known safe amount or time is current guidance. The repair is evidentiary, not a softening of the student-facing safety message.

## F. Cognitive load and organization

### Quantitative profile

| Element | Observed | Target | Judgment |
|---|---:|---:|---|
| Sections 1–4 | ~6,652 words | 3,500–5,000 | 33% above maximum |
| Major sections | 4 | 4–6 | On target |
| Subsections | 17 | — | High topic switching |
| Learning objectives | 8 | 4–7 | Slightly high |
| Key terms | 32 | 8–20 | Substantially high |
| Review questions | 12 | 8–12 | Quantity on target; feedback format fails |
| Recognized Stop-and-Retrieve callouts | 0 | 1–2 per section | Missing |
| Figures | 8 | — | Appropriate count; uneven conceptual load |

The central load problem is not merely length. Section 3 asks students to retain multiple classifications and proposed mechanisms without enough retrieval between them. The attachment styles, temperament types, orchid/dandelion metaphor, four parenting styles, moral evaluation, and Kohlberg levels create a taxonomy stack. The three developmental tensions are introduced as an organizer but are not consistently used to compress these lists.

Recommended repair:

- Use the three tensions as explicit signposts at section transitions.
- Turn parenting styles into a compact comparison and emphasize the correlation/culture boundary rather than four miniature portraits.
- Shorten the Neanderthal and natural-pedagogy enrichments unless they directly serve a retrieval question.
- Reduce physiological synchrony to one carefully scoped mechanism sentence.
- Keep the moral helper/hinderer replication because it models scientific self-correction and distinguishes motivation from reasoning.
- Reduce Key Terms to the constructs students need for the two-week memory test; move names and secondary labels to ordinary prose.
- Fix the duplicated “Cases of extreme deprivation. Cases…” sentence during later line editing.

### Objective and assessment alignment

| Objective | Teaching coverage | Retrieval coverage | Judgment |
|---|---|---|---|
| 1. Methods | Clear cross-sectional/longitudinal explanation | Question 1 | Strong |
| 2. Prenatal risks | Timing, dose, teratogens | Question 2 | Strong, citation update needed |
| 3. Piaget | Extensive | Questions 3–4 | Strong but encourages stage memorization |
| 4. Vygotsky | Extensive, excellent AI application | Question 5 | Strong; mergeable with Objective 3 |
| 5. Attachment | Extensive | Question 6 tests classification only | Misaligned with claims about caregiving and later relationships |
| 6. Moral development | Clear distinction and replication | Question 8 | Strong |
| 7. Identity/adolescence | Clear topical coverage | Question 12 is neuroreductive | Revise question |
| 8. Aging mechanisms | Describes patterns more than causes | Questions 10–11 | Objective overpromises |

Questions 1–8 and 10–11 are worth preserving after adding feedback. Question 4 has a useful tempting error and should remain diagnostic. Revise Question 9 to ask students to explain both the utility and limitation of the dual-systems model. Replace Question 12 with an application that integrates identity exploration, social context, and developing self-regulation without claiming that prefrontal maturation causes identity exploration.

## G. Source/HTML reconciliation plan

The generated HTML is semantically aligned with the authoritative markdown and should be regenerated only after source edits. Do not patch it directly.

Confirmed static strengths:

- all source sections are present in HTML;
- all eight selected figures are wired and their paths resolve;
- all image alt attributes are nonempty;
- all 32 glossary entries are populated;
- 12 review blocks are present;
- captions do not have leading-dash artifacts;
- Further Reading items are separated;
- no literal ` ? ` separator mojibake was found.

Required regeneration outcomes:

1. Standard callout markup for Stop-and-Retrieve and Do-Not-Confuse items.
2. Review questions with hidden answers/rationales using the required details/summary structure.
3. Six to eight linked Connections rows.
4. Reduced, alphabetized glossary.
5. Further Reading before References.
6. Corrected reference metadata and added load-bearing citations.
7. Revised figure captions carrying necessary schematic/probabilistic boundaries.

After regeneration, rerun the chapter linter and inspect content, not only tag counts. Then perform desktop and narrow-mobile rendering checks, with special attention to the `wide` figure class, caption wrapping, table overflow, expanded review answers, and SVG text legibility.

## H. Figures and labs

### Figure decisions

| Figure | Decision | Reason and minimum repair |
|---|---|---|
| 10.1 Human extended development | Revise | Strong four-part organizer, but the equation and causal sequence overstate a single evolutionary solution. Preserve the visual vocabulary; convert to interacting contributors and label as a model. |
| 10.2 Cross-sectional vs. longitudinal | Use now | Clear, accurate, and directly supports a durable methods distinction. |
| 10.3 Synaptic pruning/developmental tuning | Revise or slide-only | Too many hard ideas in one image; “optimized,” exact-looking windows, and use-it-or-lose-it framing imply excessive precision. Narrow to selective stabilization/tuning or move the dense version to slides. |
| 10.4 Piaget stages | Use now | Clear and includes a prominent “useful map, not rigid calendar” caveat. Ensure “11 years and up” is qualified in the caption/body as an approximate theoretical sequence, not a universal achievement. |
| 10.5 Zone of proximal development | Use now | Clear, accurate, and supports the strongest instructional application in the chapter. |
| 10.6 Attachment styles | Revise before use | Replace adult-style trait labels and deterministic caregiving histories with observable reunion behavior and probabilistic correlates. |
| 10.7 Adolescent dual systems | Revise caption/body | Artwork is usable. Identify curves as schematic and the gas/brakes metaphor as a heuristic; add peer/context variation. |
| 10.8 Fluid vs. crystallized intelligence | Use with calibrated caption | The broad tradeoff is defensible, but curves are schematic averages and not opposite trajectories for every person. Longitudinal evidence supports fluid decline with greater crystallized stability ([Rönnlund et al.](https://pubmed.ncbi.nlm.nih.gov/29360573/)). |

No new body figure is justified. The selected set already covers the chapter's load-bearing visual distinctions.

### Figure records and public-sharing status

The global visuals inventory says eight final figures are selected and wired, which matches the HTML. Several per-figure metadata files and older revision/specification documents still say “candidate pending review,” “nothing wired,” or refer to superseded SVG filenames. The pruning metadata also references a visual-QA report that is not present. Treat the global inventory as the more current status, then reconcile per-figure records after editorial decisions. Do not use the stale metadata to reopen figure selection automatically.

The active images all have metadata, but several PNG records still mark public-sharing approval as pending. HTML captions do not expose creation attribution or these pending status boundaries. Resolve approval/attribution consistently before publication.

### Lab decision

No Chapter 10 lab currently exists. One optional lab is justified only if it replaces or shortens prose rather than adding another topic: a **ZPD and fading-support lab**. Students would attempt a transfer problem unaided, receive calibrated hints, compare answer replacement with scaffolded support, then explain a new case without help. This would directly practice the chapter's strongest learning distinction and its AI connection. It can be completed without external AI or private data; an AI extension should remain optional. If the chapter is not being compressed, do not add the lab simply to increase activity count.

## I. Preserve-at-all-costs list

1. The water-glass opening and the line that the child is not a defective adult; soften only the rigid-stage implication.
2. The organizing question “Why do humans take so long?” and the long/plastic/expensive frame.
3. The nature/nurture, continuity/stages, and stability/change tensions.
4. The cross-sectional/longitudinal contrast and Figure 10.2.
5. Assimilation versus accommodation, including the Do-Not-Confuse contrast and active “baby scientist” voice.
6. The ZPD explanation and the practical AI-after-effort scaffolding application.
7. The Strange Situation's emphasis on reunion behavior and the cultural boundary, after causal calibration.
8. The useful core of differential susceptibility: the same child can fare unusually well in supportive settings and unusually poorly in adverse ones.
9. The distinction between moral motivation and moral reasoning, especially the ManyBabies null result.
10. The aging tradeoff and rejection of a universal midlife crisis.
11. The instructor's direct, memorable voice. Repair the claims without smoothing the chapter into generic publisher prose.

## J. Recommended action sequence

1. Make the five author decisions in Sections D and K before line editing.
2. Repair the three load-bearing scientific frames: life history, attachment, and adolescent dual systems. Update their figures and summaries in the same pass so qualification is not lost at repetition points.
3. Correct framework status and attribution for Piaget/object knowledge, susceptibility, parenting styles, and scaffolding.
4. Compress the secondary threads and reduce objectives/key terms while preserving the chapter's narrative spine and high-value applications.
5. Rebuild retrieval practice, review feedback, Connections, glossary order, and ending order in source markdown.
6. Repair citations and bibliography; reconcile figure metadata only after figure decisions are final.
7. Regenerate HTML from source, run the linter, validate all content checks, and complete desktop/mobile visual QA.
8. Consider the optional ZPD lab only if it substitutes for prose and has a clear assessment role.

## K. Author decisions needed

1. **Life-history claim:** May the chapter retain cooperative breeding and secondary altriciality as its main explanatory spine if they are explicitly labeled a supported coevolutionary model, or should the chapter retreat to the broader claim that extended development supports plasticity and cultural learning? **Recommendation:** retain the distinctive spine with a clear model boundary.
2. **Compression:** Which secondary material may move out of the core narrative? **Recommendation:** compress Neanderthal enrichment, natural pedagogy, physiological synchrony, and the parenting-style catalog; protect AI/ZPD, moral replication, and aging tradeoffs.
3. **Review format:** Must every end question become multiple choice, or may strong open-response prompts use hidden model answers/rationales? **Recommendation:** preserve open response where it tests explanation and application; use MCQ only where distractors diagnose a misconception.
4. **Figure 10.3:** Should the book receive a simpler one-idea pruning/tuning figure, with the current dense version reserved for slides? **Recommendation:** yes.
5. **Objectives:** Is eight a deliberate exception? **Recommendation:** reduce to seven by merging the Piaget/Vygotsky learning objectives and rewrite the aging objective to match descriptive coverage.

## Appendix: audit inventory and limitations

### Files and records inspected

- `AGENTS.md`
- `HANDOFF.md`
- `pipeline/audits/chapter-pre-review-audit-prompt-v3.md`
- `pipeline/chapter-spec.md`
- `pipeline/html-conversion-spec.md`
- `pipeline/voice-brief.md`
- `docs/images/psych101_figure_style_guide.md`
- `docs/labs/lab-design-spec.md`
- `source/chapters/ch10-lifespan-development.md`
- `docs/chapters/10-lifespan-development.html`
- `source/chapters/_provenance/ch10-lifespan-development.md`
- `source/visuals-inventory.md`
- `source/concept_lineage_revised.csv`
- all active Chapter 10 figure assets and metadata files
- Chapter 10 figure specifications and revision notes
- relevant entries in `PROJECT_BACKLOG.md` and `GPT_project_log.md`

### Validation performed

- source/HTML semantic and structural comparison;
- quantitative count of body words, headings, objectives, glossary terms, review blocks, callouts, figures, and alt text;
- local figure-path existence check;
- bad-separator and caption-artifact checks;
- Chapter 10 HTML linter run;
- visual inspection of all eight active figures;
- targeted current-source verification for life history, brain/body comparison, attachment, adolescent dual systems, susceptibility, alcohol guidance, Piagetian continuity, cognitive aging, and bibliographic details.

### Limitations

- Live desktop and mobile rendering was not completed because the required in-app browser runtime was unavailable. Static inspection cannot rule out overflow, clipping, or interaction problems.
- This is a diagnostic audit, not a rewrite. Proposed wording is intentionally limited to repair direction.
- Figure metadata is internally inconsistent. “Selected and wired” was verified against current HTML; public-sharing approval was not inferred where metadata still says pending.
- Word counts use the Section 1-through-Section 4 instructional body and exclude the front matter and ending apparatus; minor tokenizer differences will not change the over-target judgment.

