# Chapter 13 Pre-Review Audit

**Chapter:** Psychological Disorders & Therapy  
**Scope:** Read-only diagnostic audit for editorial review  
**Status:** No chapter prose, HTML, figures, labs, metadata, inventories, or project-state files were changed during the audit.

## A. Executive judgment

Chapter 13 has a strong instructor voice, a useful “diagnosis describes rather than explains” distinction, and memorable maintenance-loop examples. Its central argument—that familiar psychological processes can become rigid and costly—is teachable when presented as one lens, but the current draft turns that lens into a near-general theory of disorder and treatment.

The highest-impact problems are: the 3D criteria are presented as a formal diagnostic checklist; several candidate biological mechanisms become causal explanations; the psychotherapy evidence is organized around an overstrong Dodo Bird/common-factors story; and the AI section contains unsupported or already outdated categorical claims. The chapter’s learning system is also incomplete: eight objectives feed into no mid-section retrieval prompts and only six review questions.

The chapter therefore needs conceptual revision before line editing. The authoritative source and generated HTML are close in content, so revision should occur in Markdown followed by regeneration—not by patching HTML.

## B. Semantic skeleton and two-week takeaways

### Core argument

Psychological diagnosis organizes clinically significant patterns without, by itself, explaining their causes. Disorders emerge through interacting biological, psychological, developmental, and social influences; some are maintained by ordinary learning and regulatory processes that have become inflexible or poorly matched to current conditions. Treatments should be evaluated by evidence for particular problems, including both relationship processes and technique-specific effects.

### Two-week memory test

Students should retain:

1. A DSM diagnosis is a classification, not a causal explanation.
2. Distress, impairment, duration, culture, development, and context matter; no three-item checklist diagnoses a person.
3. Vulnerability and stress interact probabilistically rather than adding up to a literal threshold score.
4. Avoidance and compulsions can persist because short-term relief negatively reinforces them.
5. Positive and negative schizophrenia symptoms differ, and dopamine is only part of the explanatory picture.
6. Medication efficacy does not prove a simple neurotransmitter deficiency.
7. Treatment selection depends on the condition, evidence, risks, client preferences, and therapeutic relationship.
8. Mental-health AI varies greatly in evidence, regulation, privacy protection, and clinical integration; “AI” is not one intervention.

### Reconstruction judgment

A student could reconstruct the taxonomic survey from the headings and objectives, but not the chapter’s explanatory argument. Figures 13.1, 13.5, and 13.6 support a maintenance-process story; objectives 3–7 instead emphasize naming and comparing disorder categories; the six questions overrepresent diagnosis, Rosenhan, schizophrenia, ECT, and the Dodo Bird Verdict. There are no Stop and Retrieve or Think About It prompts.

The chapter begins with classification, moves through a broad disorder catalog, then shifts to a therapy catalog and an extended AI essay. The sequence is intelligible, but the explanatory depth is uneven: PTSD, depression, and ASD receive dense mechanistic accounts while GAD, bipolar disorder, personality disorders, and most therapies receive survey treatment.

## C. Construct/framework map and load-bearing claims

| Construct or framework | Role and nearest confusion | Audit judgment |
|---|---|---|
| 3D criteria | Pedagogical heuristic; confused with DSM definition or a required Venn-diagram intersection | Unstable and overstated |
| DSM-5-TR diagnosis | Descriptive classification; confused with cause or treatment prescription | Clear and load-bearing |
| Diathesis-stress model | Vulnerability × context framework; confused with an additive threshold mechanism | Useful, but the figure literalizes the metaphor |
| Biopsychosocial model | Organizing framework; confused with a causal theory | Accurate but underdeveloped |
| Maintenance loop | Mechanism in which behavior changes future exposure/reward; nearest confusion is disorder origin | Strong for avoidance and behavioral activation, not universal |
| Adaptive-process-becomes-costly | Broad teaching metaphor; confused with literal architecture and adaptive explanation | Memorable but overgeneralized |
| Common versus specific treatment factors | Competing and complementary accounts of outcome; confused with proof that technique rarely matters | Evidence overstated |
| Dopamine/inflammation/pruning accounts | Candidate biological mechanisms; confused with disorder definitions or settled causal pathways | Repeated construct slippage |

### Inference ladders

| Load-bearing claim | Observation | Construct | Mechanism | Broader theory/adaptive claim |
|---|---|---|---|---|
| Diagnosis classifies but does not explain | Symptoms co-occur and criteria improve reliability | Diagnostic category | Not applicable | Strongly supported |
| Avoidance maintains anxiety | Avoidance produces relief and predicts recurrence | Negative reinforcement | Avoidance limits corrective learning | Strongly supported, but not sufficient for every anxiety presentation |
| Vulnerability and stress interact | Similar events have heterogeneous outcomes | Diathesis | Gene, development, history, support, and stress interactions | Broadly supported framework; literal threshold is a simplification |
| Disorders are protective models that became stuck | Some symptoms resemble ordinary defenses or regulatory processes | Miscalibration/rigidity | Proposed updating, extinction, or regulation failures | Plausible for selected conditions; speculative as a chapter-wide adaptive theory |
| Treatment works through common plus specific processes | RCTs show treatment effects; alliance correlates with outcome | Common and specific factors | Causal share of alliance, expectancy, learning, insight, etc. | Contested and condition-dependent |

## D. Root-cause repair table

| Severity | Root cause | Evidence and affected surfaces | Minimum repair and route | Confidence |
|---|---|---|---|---|
| **High** | The 3D heuristic is presented as the definition and diagnostic decision rule | Source lines 51–60, Figure 13.2, LO1, Q1, summary, glossary. “Clinicians apply all three” and the Venn intersection imply all three are required. APA describes disorder-specific symptom, duration, exclusion, culture, and clinical-judgment requirements—not a universal three-D checklist. [APA DSM overview](https://www.psychiatry.org/psychiatrists/practice/dsm/about-dsm) | Call the 3Ds an introductory heuristic. Center clinically significant disturbance, distress or disability/impairment, dysfunction, developmental and cultural context, exclusions, and differential diagnosis. Revise Figure 13.2 and Q1 so a vignette raises concern but does not establish diagnosis. **Source + figure revision.** | High |
| **High** | The adaptive “stuck protective model” metaphor becomes a general architecture | The 318-word Where This Fits section, Figure 13.1, and closing summary describe threat, mood, self-models, schizophrenia, ASD, and therapy through one update/regulate/relearn loop. The caveat arrives, but the figure remains categorical. | Retain the metaphor as one recurring lens for maintenance, explicitly strongest for avoidance, trauma-related learning, and behavioral withdrawal. Do not use it as the origin story for all disorders or imply all therapies update one model. Revise Figure 13.1 accordingly. **Source + figure revision.** | High |
| **High** | Candidate biological findings are promoted into neat causal mechanisms | PTSD lines 119–123, depression lines 136–140, ADHD, and especially the dense ASD paragraph at line 201. Reward-processing differences in depression are heterogeneous associations, not proof that failed dopamine anticipation causes motivational collapse. [Reward-processing meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC7391183/). A systematic postmortem review reports largely undisturbed cortical layering overall, contrary to treating one small tissue study as the ASD developmental account. [Postmortem systematic review](https://pubmed.ncbi.nlm.nih.gov/34273379/) | Describe PTSD contextualization, reward learning, inflammation, ADHD circuitry, cortical organization, overgrowth, and pruning as candidate or subgroup-level findings. Correct PDD: it can include persistent or intermittent major depressive episodes. Remove the fetal-active-sleep-to-ASD causal bridge; its cited source concerns sensorimotor development, not ASD. Shorten the ASD paragraph substantially. **Source + citation revision.** | High |
| **High** | Treatment evidence is forced into an alliance/common-factors hierarchy | Lines 207–212, Figure 13.8, CBT line 238, Q6. Alliance is a robust correlate, not demonstrated to be “the strongest predictor” or the cause of most change. Comparative effects vary by disorder and comparator: depression therapies often show small differences, while CBT has stronger condition-specific evidence for GAD. [Depression network meta-analysis](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1001454), [GAD network meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC10585589/), [alliance analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC7529648/) | Replace the Dodo Bird verdict as the organizing conclusion with: several bona fide therapies are effective; average differences are sometimes small; specific techniques matter for some conditions; alliance predicts outcome across approaches but does not settle causal mechanism. Separate psychotherapy common factors from pharmacotherapy and ECT in Figure 13.8. **Source + figure revision.** | High |
| **High** | Medication and ECT summaries suppress clinically important qualifications | Antipsychotic line 248 implies atypicals generally improve negative symptoms and mainly reduce movement risk; evidence and adverse-effect tradeoffs are more complicated. [WHO guidance](https://www.who.int/teams/mental-health-and-substance-use/treatment-care/mental-health-gap-action-programme/evidence-centre/psychosis-and-bipolar-disorders/antipsychotic-medicines-for-psychotic-disorders). ECT lines 254–256 and Q5 describe memory effects as temporary and resolving for most, omit other indications, and extrapolate an old short-term meta-analysis to the exact vignette. NICE recognizes possible short- or long-term retrograde and anterograde memory impairment and recommends individualized consent. [NICE ECT guidance](https://www.nice.org.uk/guidance/ng222/chapter/Recommendations), [memory-risk description](https://www.nice.org.uk/guidance/ta59/chapter/3-the-technology) | Present antipsychotic choice as efficacy–adverse-effect–preference balancing; identify clozapine primarily as a treatment-resistant option. Retain the strong correction of cinematic ECT myths, but add consent, cognitive-risk variability, rapid-response indications, and short-term evidence limits. **Source + question revision.** | High |
| **High** | The AI section treats one heterogeneous technology family as a timeless, categorical opposite of therapy | Lines 262–275 and Figure 13.9. Claims about learned anchoring, “System 1,” emotional mirroring, inability to perform cognitive restructuring, lack of risk assessment/referrals/crisis response, and gaps that better models cannot close are uncited or philosophical. By 2025, a controlled trial had reported symptom improvement from a generative therapeutic chatbot, while proposed standards include risk monitoring and crisis escalation. This does not establish equivalence to licensed therapy, but it makes the chapter’s categorical claims untenable. [NEJM AI trial](https://doi.org/10.1056/AIoa2400802). HIPAA coverage also depends on whether the product is operated by or for a covered entity—not merely whether it is “AI.” [HHS health-app guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html) | Either cut the section to a short privacy/evidence/calibration passage or rebuild it around product type: general-purpose chatbot, standalone wellness app, regulated clinical product, and clinician-integrated tool. Distinguish current evidence, capability, legal status, and safety governance. Revise or remove Figure 13.9. The chapter inherited some of this from a now-stale shared AI specification, so also repair `pipeline/chapter-spec.md`. **Source + shared-spec + figure revision.** | High |
| **High** | The learning system does not practice or assess the stated objectives | Counts: 8 objectives, 4 sections, about 5,390 body words, 363-word summary, 11 Connections rows, 24 glossary terms, 6 review questions, 0 Stop and Retrieve, 0 Think About It. Governing counts are numerical targets except the required chapter-ending order and required presence of learning/review components. LOs 3, 4, 6, and 7 are not tested; LO5’s dopamine component and most of LO8 are not tested. | Consolidate to about five objectives. Add one retrieval interruption per major section and selective self-reference prompts that do not solicit personal diagnoses. Expand/rebalance to 8–10 questions. Convert catalog material into compact comparison tables where appropriate. **Source revision.** | High |

## E. Minimum repair sequence

1. Decide the scope of the adaptive-process spine, the AI passage, and substance-use disorders.
2. Repair the diagnostic foundation and Figure 13.2.
3. Recalibrate PTSD, depression/PDD, ADHD, ASD, schizophrenia, and medication claims.
4. Rebuild the treatment comparison and Figures 13.8–13.9.
5. Consolidate objectives, add retrieval practice, and rebalance questions.
6. Revise summary, glossary, and Connections only after the body is stable.
7. Verify every reference and complete figure metadata.
8. Build or repair the selected lab after its cognitive operation matches the revised chapter.
9. Regenerate HTML once; then perform parity, link, accessibility, desktop, and narrow-mobile validation.

## F. Alignment decisions

### Objectives

Recommended consolidation:

1. Explain what diagnosis does and does not establish, using context, impairment, duration, and differential evidence.
2. Apply diathesis-stress and biopsychosocial reasoning without treating either as a single cause.
3. Distinguish representative anxiety, mood, and psychotic patterns and explain one maintenance mechanism for each.
4. Distinguish personality disorders from neurodevelopmental conditions without reducing either to one biomarker or brain deficit.
5. Evaluate psychological and biological treatments by indication, evidence, mechanism uncertainty, adverse effects, and client context.

### Review questions

- **Q1: revise.** Keep the checking vignette, but ask what evidence suggests clinically significant impairment and what additional information a clinician needs.
- **Q2: revise.** Do not infer that the person who developed PTSD “likely had” named vulnerabilities from the outcome alone.
- **Q3: keep with a small revision.** Add that reduced expression, depression, medication effects, and primary negative symptoms require differentiation.
- **Q4: keep.** It usefully practices evidence calibration, but remove the unsupported claim that Rosenhan directly caused DSM-III changes.
- **Q5: revise.** Correct memory-risk and indication language.
- **Q6: revise.** Replace the Dodo verdict conclusion with condition-specific comparative reasoning.
- **Add four applications:** anxiety-maintenance/treatment matching; PDD versus episodic MDD/bipolar discrimination; diagnosis-versus-cause integration; and treatment selection across psychotherapy, medication, and ECT.

The deferred project-wide choice between open response and diagnostic multiple choice remains Jon’s decision. Regardless of format, six questions violates the 8–12 target and leaves major objectives uncovered.

### Glossary and ending

The 24 terms exceed the 8–20 target and are not alphabetical. Retain Tier 1 concepts such as DSM, diathesis-stress, biopsychosocial model, negative reinforcement/exposure, major depression, bipolar disorder, schizophrenia, CBT, therapeutic alliance, antipsychotic treatment, and ECT. Treat sickness behavior, memory reconsolidation, just-world hypothesis, and the dopamine hypothesis as Tier 2 unless they remain load-bearing after revision.

Current order—Summary → Key Terms → Review → Connections → References → Further Reading—violates the required sequence. Use Summary → Connections → Review → Key Terms → Further Reading → References. The Connections table should be consolidated from 11 to approximately 7–8 meaningful rows and given actual source and chapter links.

## G. Figures and lab-gap decision

All nine images exist, load, and have non-empty alt text. No Chapter 13 README or metadata file records full creation method, license, attribution, and public-sharing status, so no figure is publication-final under the figure guide.

| Figure | Decision |
|---|---|
| 13.1 adaptive response | **Revise.** Make it explicitly one maintenance lens, not the architecture of all disorder and therapy. |
| 13.2 3D criteria | **Revise.** Remove the required-intersection implication and label the 3Ds an introductory heuristic. |
| 13.3 diagnosis is not cause | **Use now, pending metadata.** It teaches the chapter’s strongest distinction clearly. |
| 13.4 diathesis-stress threshold | **Revise.** The “same stressor” encoding is visually unclear and the additive threshold looks more literal than the framework warrants. |
| 13.5 anxiety loop | **Revise lightly.** Prefer “corrective/safety learning” over promising generic “long-term extinction”; specify that the loop is common, not universal. |
| 13.6 depression loop | **Use now, pending metadata.** Caption it as one maintenance pathway. |
| 13.7 schizophrenia symptoms | **Use now, pending metadata.** |
| 13.8 therapy mechanisms | **Revise.** Pharmacotherapy and ECT should not radiate through a psychotherapy common-factors hub. |
| 13.9 AI versus therapist | **Revise or remove.** Compare service types and governance rather than assigning universal properties to all AI tools. |

**Lab-gap decision: one new lab is justified.** Build a clinical-reasoning lab in `docs/labs/ch13/` that asks students to predict whether brief vignettes indicate ordinary distress, need for further assessment, or a supported diagnosis; reveal duration, impairment, cultural context, exclusions, and differential evidence one item at a time; then require an explanation of why a label does not establish cause or treatment.

The existing `docs/labs/ch03/chemical-imbalance-claim-check.html` is relevant but not a substitute. It is built but not wired and currently lacks the separately gated explain phase required by the current lab specification.

## H. Source/HTML and pipeline routing

- **Prose source of truth:** `source/chapters/ch13-psychological-disorders-therapy.md`
- **Generated output:** `docs/chapters/13-disorders-therapy.html`
- Both files appear complete rather than truncated.
- Semantic parity is close; all nine figures and six question disclosures are present in both. No valuable HTML-only material is at risk.
- The global visual inventory is current about wiring, while the provenance file is more detailed about origins. Neither is complete figure metadata.
- No broken image, missing internal anchor, or mojibake was reproduced.
- At a narrow viewport, `.chapter-figure.wide` creates horizontal page overflow. This is a shared CSS defect; tables retain their own horizontal scroll. Repair the mobile `.wide` rule in the shared stylesheet rather than patching Chapter 13.
- Missing `.in-section-nav` blocks belong to the explicitly deferred shared retrofit and are not a Chapter 13 blocker by themselves.
- The sidebar’s shortened “13 — Disorders & Therapy” label differs from the full title in `docs/index.html`; this is low-impact shared navigation cleanup.

## I. Citation, lineage, and verification needs

DIS-009, client-centered therapy, is the only Chapter 13 concept marked `needs-verification`. The provenance shows that it was independently drafted from Rogers and alliance research, so no commercial-textbook wording risk is evident. Remove the visible “Sourcing note for DIS-009” from student prose while preserving provenance.

Substantive citation work:

- Correct Tang et al. The chapter has the wrong terminal author and omits the correct page range; the article is pages 1131–1143 and concerns neuronal mTOR-dependent autophagy, not a demonstrated microglial ASD mechanism. [Original article record](https://www.sciencedirect.com/science/article/pii/S0896627314007880)
- Blumberg (2010) supports a developmental role for sleep-related movement; it does not establish prenatal sleep disruption as an ASD pathway. [Article](https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2010.00140/full)
- Replace or supplement the 2003 ECT review with current guidance and describe it accurately as short-term evidence. [Original meta-analysis](https://pubmed.ncbi.nlm.nih.gov/12642045/)
- Add current support—or remove—the uncited AI anchoring, sentiment-mirroring, restructuring, and crisis-response claims.
- Resolve every “not independently verified this session” marker before publication; those are workflow notes, not final reference metadata.

## J. Decisions requiring Jon’s judgment

1. Should the adaptive-process framing remain the chapter’s spine as a bounded maintenance lens, or become one framework alongside developmental, disease-process, and social explanations?
2. Should the AI section be cut to a short evidence/privacy passage or rebuilt as a full comparison of general-purpose, wellness, regulated, and clinician-integrated tools?
3. Should substance-use disorder receive a compact Chapter 13 subsection? Addiction mechanisms already appear in Chapters 3 and 7, but diagnosis and treatment are currently absent.
4. Should the revised review set remain open response, become diagnostic multiple choice, or deliberately mix both?
5. Is Rosenhan important enough to retain both in the opener and in a full walkthrough, or should the opener use a less disputed case while the walkthrough remains as a methods lesson?

## Appendix: Low-impact mechanical findings

- Remove the visible DIS-009 sourcing note.
- Alphabetize the glossary.
- Correct the References introduction, which says Further Reading appears “above” even though it currently appears below.
- Add links and precise identifiers to Further Reading.
- Reconcile the shortened Chapter 13 sidebar label with `docs/index.html`.
- Record creation method, license, attribution, public-sharing status, and approval state for all nine figures.
- The rendered page has no reproduced ` ? ` separator corruption or malformed image alt text.

---

The rendered-page workflow materially confirmed that the mobile overflow is real and shared, while the feared source/HTML content divergence is not.
