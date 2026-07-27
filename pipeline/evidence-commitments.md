# Evidence Commitments

**What this is.** The book-wide ledger of claims whose *wording is load-bearing* — places where a sentence is phrased the way it is because the evidence does not support the stronger version. Before you soften, sharpen, shorten, or cut a sentence in this list, read the row.

**What this is not.** Not a style guide, not a repair plan, not a description of any chapter's current structure. It contains no word counts, no objective counts, no figure decisions, and no register prescriptions. `AGENTS.md` → `## Style` governs voice, and nothing here overrides it. **A boundary in this file must be *stated somewhere* in the chapter; where it lands is a register decision, not an accuracy one.** Putting a caveat in a paragraph's final position is a choice, and usually the wrong one.

**Provenance.** Extracted 2026-07-26 from the twelve `pipeline/audits/chNN-pre-review-audit.md` files, which were then deleted. Those audits diagnosed drafts that no longer exist and were being read by later passes as standing authorities; that is what this file replaces. **Recovery: the audits are in git at `a9dcedd`** (`git show a9dcedd:pipeline/audits/ch13-pre-review-audit.md`).

**What was deliberately not carried forward.** The audits' evidence-standing *opinions* — ratings like "speculative as a chapter-wide theory" — did not move here. They are one auditor's read of a literature, and giving them a permanent home would relaunder them as authority, which is the problem this file exists to end. Only corrections traceable to a named source came across.

**Status column.** `installed` = the bounded wording is present in the current source, verified by grep on 2026-07-26. `removed` = the correction was satisfied by cutting the material. `OPEN` = requested and not found; needs a decision. Re-verify rather than trusting this column after any prose pass.

**Adding a row.** A row earns its place only if it names a source and a claim someone would plausibly strengthen back. Do not record general cautions here.

---

## Chapter 1 — History & Approaches

| Claim | How it must stay bounded | Source | Status |
|---|---|---|---|
| Therapeutic alliance | Reliably *predicts* outcome across orientations. Not "the most important factor," not an independently established mechanism. Keep one bidirectionality note. | Flückiger et al. (2018) | installed |
| Watson vs. Skinner | Watson made publicly observable behavior psychology's subject; Skinner also treated private events as behavior but denied them autonomous causal status. Not one "observable behavior only" doctrine. | — | installed |
| Structuralism | Attributed most directly to Titchener. Wundt's controlled introspection is an antecedent; Wundt is voluntarism. | — | installed |
| Internalized anger (depression) | A historical psychodynamic account, not a currently comparably supported mechanism. Evidence weighting must arrive before or inside the example, not after. | — | installed |
| Chemical imbalance | Rejects a *simple serotonin-deficiency* account. Must not become "serotonin is irrelevant" or "antidepressants do not work." | Moncrieff et al. (2022) | installed |
| Replication | Open Science Collaboration (2015) is the flagship project. Its sample must not become a universal replication rate for all subfields. | OSC (2015) | installed |
| Milgram's 39-psychiatrist forecast | The 1963 paper supports the observed obedience result, not the forecast. Cite forecast and outcome separately. | Milgram (1963) + later record | installed |
| Biopsychosocial model | Organizes vulnerability, maintenance, context, and treatment planning. Not a diagnostic test and not a causal explanation — this must stay consistent with Ch. 13. | — | installed |

## Chapter 2 — Research Methods

| Claim | How it must stay bounded | Source | Status |
|---|---|---|---|
| Causal inference | Simple correlation cannot establish causation; randomized experiments are psychology's clearest ordinary basis. But natural experiments, quasi-experiments, and strong longitudinal designs can sometimes support causal conclusions without random assignment. | — | installed |
| Random assignment | Balances participant characteristics **in expectation**; makes systematic preexisting differences unlikely. It does not "rule out" preexisting differences or guarantee equivalent realized groups. | — | installed |
| Random sampling | Supports population representativeness — one component of generalizability. External validity also depends on settings, measures, treatments, and attrition. | — | installed |
| Reliability and validity | Reliability = consistency/precision under specified conditions. Validity = the extent to which evidence and theory support a proposed interpretation and use of scores. Inadequate reliability constrains validity claims. Do not label a target panel "valid but unreliable." | — | installed |
| Placebo (asthma study) | Participants **reported improvement**; objective airway function did not improve. Do not write "real relief," and do not imply subjective outcomes are unreal because the objective measure did not move. | — | installed |
| Tuskegee | Involved deception, withholding of information and treatment, and the absence of meaningful informed consent. Not consent that existed "on paper" and failed. | — | installed |
| Animal research | Independent oversight plus replacement–reduction–refinement. Present because the book opens with animal behavioral ecology. | — | installed |

## Chapter 3 — Neuroscience & Biological Bases

| Claim | How it must stay bounded | Source | Status |
|---|---|---|---|
| Dopamine | "Dopamine is not just pleasure" must not become "dopamine is prediction error." RPE scope is bounded on every surface. | Gershman et al. (2024), *Nat Neurosci* 27, 1645–1655 | installed |
| Phineas Gage | Lesion anatomy per the connectivity reconstruction; do not infer "selectively spared" function. | Van Horn et al. (2012), *PLOS ONE* 7(5), e37454 | installed |
| Patient H.M. | Do not teach a clean "forming not storing" inference or a pure-hippocampus lesion. | Annese et al. (2014), *Nat Commun* 5, 3122 | installed |
| Neuropeptides | Definition must match the transmission literature in body and glossary. | van den Pol (2012), *Neuron* 76(1), 98–115 | installed |
| Cortisol | Not the only glucose pathway. Evolutionary-mismatch framing stays a model. | — | installed |
| Tend-and-befriend / oxytocin | Stated with uncertainty, not as demonstrated social mechanism. | — | installed |
| fMRI | Hemodynamic timing means the signal lags neural activity; inference wording must reflect it. | — | installed |
| Chemical imbalance | Same boundary as Ch. 1, and must not slide to "antidepressants do not work." Cite one year for Moncrieff consistently. | Moncrieff et al., *Mol Psychiatry* | installed |
| Absolutes | "Every neuron," internodes "cannot fire," and exhaustive synaptic-clearance language are all overstatements. | — | installed |
| Working memory / PFC metabolic cost | The ~4-item capacity figure is well-supported; the energy-cost explanation for *why* the ceiling sits there is a hypothesis, stated as such on both mentions, not a confirmed mechanism (spine-seed Seed B, 2026-07-27). | Cowan (2001), *Behav Brain Sci* 24(1), 87–114 | installed |

## Chapter 4 — Sensation & Perception

The Chapter 4 audit was mechanical (citation integrity, parity, counts) and produced no accuracy corrections. Two lineage flags survive and are recorded under *Unresolved lineage flags* below.

| Claim | How it must stay bounded | Source | Status |
|---|---|---|---|
| Müller-Lyer / carpentered-world hypothesis | Not currently in the chapter — kept out. If reintroduced, the causal explanation (environment exposure → illusion susceptibility) must not be presented as clean confirming evidence. Original study confounded ethnicity with environment; carpentered-world explanation is now widely disputed on methodological grounds; Jahoda's same-group rural/urban comparison found no significant difference. The cross-population susceptibility difference appears to have replicated — the causal story does not. | Segall, Campbell & Herskovits (1963/1966) | verified 2026-07-27, kept out |
| Anosognosia (perceptual disorders) | A specific deficit in bodily self-monitoring, not general denial. Do not extend to "the self is fake" — that stronger claim belongs to Ch. 5's Seth extension, not here. | Orfei et al. (2007), *Brain* 130(12), 3075–3090 | installed |

## Chapter 5 — Consciousness

| Claim | How it must stay bounded | Source | Status |
|---|---|---|---|
| Cocktail-party name capture | Roughly 29% of participants noticed their own name. "Reliably breaks through" overstates the base rate. | Röer & Cowan, preregistered replication | installed |
| Charles Bonnet syndrome | Deafferentation is a leading explanation, not settled pathogenesis. Retained insight is characteristic — do not write "indistinguishable from the inside from ordinary vision." | CBS review (PMC8330457) | installed |
| Predictive processing | One proposed account, compared against global workspace, higher-order, re-entry, and IIT approaches. Not an established identity with consciousness. Seth (2021) is a trade book; Rao & Ballard (1999) concerns visual cortex, not consciousness. | — | installed |
| AI "hallucination" | The term is explicitly metaphorical and contested. Next-token prediction is not the same computation as cortical predictive coding. | — | installed |
| Psychedelics / REBUS | Influential but proposed. Whichever precision-weighting direction is taught must be stated *consistently* — the draft once described relaxed priors and reduced trust in error signals in the same passage, which are opposite claims. | — | installed |
| Opioids and pain | Sensory-discriminative and affective-motivational dimensions are separable, but opioids reduce both intensity and unpleasantness. Not "suffering only." | human remifentanil data | removed — passage cut |
| Alcohol / GABA | GABAergic effects matter, but alcohol is pharmacologically broad; the chain from GABA to blackout to respiratory death is too unified for a multi-target drug. | — | removed — passage cut |
| Cannabis and appetite | Endocannabinoid involvement in feeding is documented. Do not write "it's not that you're suddenly hungrier." | — | removed — passage cut |

## Chapter 7 — Learning

| Claim | How it must stay bounded | Source | Status |
|---|---|---|---|
| Extinction | Return of responding reflects competing, context-sensitive learning — not deletion, and not a demonstrated differential decay rate. The learned relation is CS–US, not CS–CR. No teleological "in case the world reverts." | Bouton (2004), *Learn Mem* 11, 485–494 | installed |
| Contingency | Pairing and prediction are not equivalent; repetition is insufficient when the US is equally probable in the background. | Rescorla (1968) | installed |
| Little Albert | A flawed historical illustration, not the field's "clearest demonstration." Single participant, weak controls, ambiguous coding, mythologized record. | Harris (1979); Powell et al. (2014) | installed |
| Preparedness | Names a selective cue-consequence associability pattern. The adaptive account is the leading *interpretation*, not the observed result. Must hold across objectives, figures, glossary, and questions. | — | installed |
| Reinforcement schedules | Fixed-ratio produces break-and-run with a post-reinforcement pause; "scallop" belongs to fixed-interval. Fast/slow acquisition and extinction resistance are conditional patterns, not a general law. | — | installed |
| Dopamine | Cue-evoked RPE, sustained uncertainty-related activity, and wanting/incentive salience are distinct findings and must not be narrated as one signal. Sapolsky's retirement/afterlife extension is an analogy. | Berke (2018), doi:10.1038/s41593-018-0152-y | installed |
| Intrinsic motivation | State the conditions under which external rewards undermine intrinsic motivation. Do not convert to "rewards backfire." | Deci, Koestner & Ryan (1999) | installed |
| Bobo doll | Distinguish the model-consequence phase from the later direct-incentive test. Do not assert a clean rewarded > no-consequence > punished ordering, or that children expected punishment themselves. | Bandura (1965) | installed |

## Chapter 8 — Memory

| Claim | How it must stay bounded | Source | Status |
|---|---|---|---|
| Confabulation | Do **not** define it by an encoded-event criterion — confabulations can be fantastic and foundationless. The defensible boundary is that human confabulation arises within autobiographical, motivational, affective, and source-monitoring systems, while language-model output is a different computational process. | Johnson & Raye; clinical overview (PMID 30725646) | installed |
| Survival processing | The effect is broadly supported; the evolutionary interpretation is one account among elaboration, distinctiveness, and scenario richness. Do not say memory was "tuned this way on purpose" or that forgetting is the compression it evolved to do. | Nairne et al. (2007) | installed |
| Patient H.M. | Severe system-selective impairment, not an absolute declarative/nondeclarative wall. He showed limited new *semantic* learning. Avoid "gone, permanently and completely" and "no explicit memory whatsoever." | O'Kane, Kensinger & Corkin (2004) | installed |
| LTP | Not the singular cellular basis of durable memory. | — | installed |
| Rereading | Not shallow processing *by definition*. | — | removed — passage cut |

## Chapter 9 — Thinking, Language & Intelligence

| Claim | How it must stay bounded | Source | Status |
|---|---|---|---|
| Wason selection task | Researchers disagree whether the pattern reflects confirmation bias, matching bias, task interpretation, or information-gain search. Not "confirmation bias in miniature." | PMC11561113; PMC3098374 | installed |
| Attribute substitution | One mechanism among several — not an umbrella covering confirmation-seeking, reference points, defaults, and every anchoring effect. | — | removed — term cut |
| Organ donation | Primarily a **default effect**. Framing, implied norms, effort, and loss aversion may explain why defaults matter. | PMC10192178 | installed |
| Chomsky / poverty of the stimulus | Chomsky's critique showed strict behaviorism was inadequate. Universal Grammar and poverty-of-stimulus remain disputed learnability arguments, not established fact. | Cambridge *Language* critique | installed |
| Kuhl et al. | Tested short-term learning of foreign-language phonetic contrasts under live social exposure. Does not establish social interaction as necessary for language acquisition generally. | Kuhl et al. (2003), *PNAS* | installed |
| Anchoring | The 1974 demonstration used a wheel-derived anchor and UN-membership estimates. The Chicago-population item is a later variant and must be cited as such. | PMC8006283 | installed |
| Linda / conjunction fallacy | Real, but not invariant to representation — explicit frequency or nested-set formats sharply reduce errors. | Tversky & Kahneman (1983) | installed |
| Group differences in test scores | Current evidence does not *establish* genetic causation for socially defined group gaps — which is not the same as proving no genetic contribution under every definition. Race and ethnicity are not biological proxies. Stereotype threat is context-sensitive, not a general account of mean gaps. | 2024 meta-analysis (PMID 38421748); National Academies (2023) | installed — stereotype-threat mechanism removed from this chapter; see Ch. 11 |
| Water-jar figure | Any Luchins-style figure must be checked so every intermediate volume is reachable and the simple solution actually hits the stated target. The prior figure showed an impossible sequence. | — | installed |

## Chapter 10 — Lifespan Development

| Claim | How it must stay bounded | Source | Status |
|---|---|---|---|
| Human life history | Comparative primate claims only — "of any primate," not universal superlatives. Brain/body ratio is not encephalization. The evolutionary account is a supported model, not a solved equation. | Bogin et al.; Schuppli et al.; Roth & Dicke | installed |
| Life-history mosaic | Slow development and longevity coexist with relatively short interbirth intervals and high reproductive output compared with other apes. | Bogin et al. (PMC7293148) | **OPEN** — requested, not found in current source |
| Attachment | Sensitivity–security is a modest, heterogeneous association (pooled *r* ≈ .25, 22,914 dyads). Stability from infancy is modest. The Strange Situation classifies relationship behavior under a procedure — not an enduring trait or an adult romantic style. | Madigan et al. (2024); Pinquart et al. (2020) | installed |
| Adolescent dual systems | A schematic account of average developmental tendencies. Not two independent systems, not a universal reward peak, not a single-region deficit, and not established as the cause of identity exploration. | Pfeifer & Allen (PMC6990093) | installed |
| Baillargeon | "Provided early looking-time evidence consistent with" — not "demonstrated" object permanence. | — | installed |
| Core knowledge | Early-emerging systems or biases, not "present at birth." | — | installed |
| Orchid/dandelion | A metaphor for a susceptibility continuum, not two biological categories. | Lionetti et al. (2021) | installed |
| Parenting styles | Baumrind (1966) had three styles; the neglectful/uninvolved quadrant was formalized later. | — | installed |
| Scaffolding | Introduced by Wood, Bruner & Ross (1976) and later linked to Vygotskian theory. Not Vygotsky's own mechanism. | Wood, Bruner & Ross (1976) | installed |
| Prenatal alcohol | Jones & Smith (1973) is the historical first case report, not support for current no-safe-amount guidance. Cite current public-health guidance separately. | CDC | installed |

## Chapter 11 — Social Psychology

| Claim | How it must stay bounded | Source | Status |
|---|---|---|---|
| Milgram | Harmful continuation was produced by the structured authority relationship, but the mechanism is contested — identification with the scientific project may have mattered more than orders, and the order-like prod was *least* effective. Remove "good people," which the experiment did not establish. | Haslam, Reicher & Birney (2014) | installed |
| Anthropomorphism | Not the fundamental attribution error. Do not describe one AI answer as conformity to a consensus, and do not claim every social mechanism presupposes a mental-state-bearing source. | Strachan et al. (2024) | installed |
| Social identity | Positive distinctiveness, without making self-esteem the single causal motive. | Rubin & Hewstone (1998) | installed |
| Stereotype threat | Context-sensitive and often small in operational settings. | Shewach, Sackett & Quint (2019) | installed |
| Deindividuation | Anonymity increases conformity to salient group norms — which may be prosocial or antisocial. Not "loss of self → aggression." | Postmes & Spears (1998) | installed |
| Figures 11.6–11.7 | Values are invented. Captions must say so — currently "Conceptual illustration; no empirical values are shown." Never restore empirical precision. | — | installed |
| Asch | Bounded during the repair pass alongside the chapter's other classics. Do not teach a conformity rate from study-guide secondaries; the Asch taxonomy did not survive verification. Bond & Smith (1996), a 133-study meta-analysis, is the better anchor. | Bond & Smith (1996) | installed |

## Chapter 12 — Emotion, Stress & Coping

| Claim | How it must stay bounded | Source | Status |
|---|---|---|---|
| Constructionism | Named once as the chapter's chosen influential framework, in prose, at the head of Section 2. Not settled neuroscience, and classic theories are historical simplifications rather than defeated foils. | Gündem et al. (2022) | installed |
| Patient S.M. | Bilateral amygdala-damage patients, including S.M., experienced fear and panic during CO₂ inhalation. The amygdala is important for some externally triggered threat responses, not necessary for all fear. Never restore "take it out, and the facts survive; the mattering does not." | Feinstein et al. (2013) | installed |
| Stress physiology | Separate fast SAM effects from slower HPA/cortisol effects. Cortisol is not a single direct cause of increased heart rate. | Russell & Lightman (2019) | installed |
| Physical vs. simulated stressors | "**Overlapping**," never "identical pathway" or "the same machinery." | — | installed |
| General adaptation syndrome | A historical heuristic. No literal universal resource curve and no "15–25% remaining" endpoint. Post-finals illness is a familiar hypothesis, not a GAS explanation. | — | installed |
| Chronic stress and immunity | Immune **dysregulation** — which can include suppression *and* inflammation. Not simply suppression. | Dhabhar (2009) | installed |
| Hedonic adaptation | A descriptive well-being pattern. Dopamine RPE is not its established mechanism; at most a limited analogy to updating. | Berridge (2007) | installed |
| Oxytocin / Heinrichs | One small experiment in healthy men using intranasal oxytocin. Effects are context- and sex-dependent. | Heinrichs et al.; Love (2018) | installed |
| Granularity and affect labeling | Granularity is robustly *associated* with functioning. Labeling does not necessarily reduce "subcortical arousal," and friendship and therapy do not demonstrably work through this mechanism. | Ozomaro et al. (2025); Ariely et al. (2026) | installed |
| Cognitive light cone | The term is Levin's (2019); Suddendorf, Schacter, Gilbert & Wilson, and Sapolsky ground the *application*. Levin derives the expanding boundary from a homeostatic drive to reduce stress. | Levin (2019) | installed |
| Grupe & Nitschke (2013) | Verifies as a real, well-cited paper, but concerns **pathological** anxiety. Declined for Ch. 12 because it imports a diagnostic frame. Live candidate for Ch. 13 only. | Grupe & Nitschke (2013), *Nat Rev Neurosci* 14, 488–501 | declined for Ch. 12; open for Ch. 13 |

## Chapter 13 — Psychological Disorders & Therapy

| Claim | How it must stay bounded | Source | Status |
|---|---|---|---|
| The 3Ds | An introductory heuristic that opens an inquiry. Not a definition, not a required intersection, and not a diagnostic decision rule. | APA DSM-5-TR overview | installed |
| Reliability vs. validity | Clinicians can agree consistently about a category while its mapping to one causal process stays uncertain. Field-trial agreement varied substantially across diagnoses rather than reaching one high level. | Regier et al. (2013) | installed |
| Rosenhan | A contested episode in the history of diagnosis. Not clean proof that psychiatric classification is impossible. | Cahalan (2019) | installed |
| Serotonin and depression | The serotonin-deficiency story is unsupported as a general causal account; antidepressants can still reduce symptoms. Efficacy does not prove the untreated disorder was a deficiency of what the drug alters. | Moncrieff et al. (2022); Cipriani et al. (2018) | installed |
| Dopamine hypothesis | Captures part of psychosis, especially presynaptic dopamine function and D2 blockade. Antipsychotic efficacy does not prove "too much dopamine." | Howes & Kapur (2009) | installed |
| Schizophrenia heritability | Substantial, with identical-twin concordance far below 100%. Genes alter probability. | Cardno & Gottesman (2000) | installed |
| ECT and memory | Cognitive effects vary with parameters and person, can include anterograde and retrograde impairment, and some autobiographical difficulty may persist. Consent must address this rather than promising brief effects. | NICE (2022) | installed |
| Antipsychotic selection | Efficacy–adverse-effect–preference balancing. No simple "old drugs cause movement problems, new ones don't" division. Clozapine is primarily a treatment-resistant option requiring monitoring. | WHO (2023) | installed |
| Therapeutic alliance | Predicts outcome across approaches; prediction does not establish causation. "All therapies are equal" and "only technique matters" are both too strong — comparative evidence favors CBT-based approaches for GAD while depression therapies show smaller average differences. | Flückiger et al. (2018); Barth et al. (2013) | installed |
| Maintenance vs. origin | Avoidance, compulsions, and behavioral withdrawal explain why a pattern *continues*. Not an origin story, and not a general theory of psychopathology. Neurodevelopmental conditions are outside the lens. | — | installed |
| Mental-health AI | A controlled trial reported symptom improvement for a purpose-built generative chatbot, so categorical "AI can never help" claims are untenable. It did not establish equivalence to licensed therapy, superiority to active treatment, or safety across products. | Heinz et al. (2025), *NEJM AI* | installed |
| HIPAA | Applies when a tool is operated by or for a covered entity or business associate. It does not automatically protect consumer health apps or general-purpose chatbots. | HHS health-app guidance | installed |
| Fetal sleep → ASD | Removed. Blumberg (2010) supports a developmental role for sleep-related movement; it does not establish prenatal sleep disruption as an ASD pathway. Do not reintroduce. | Blumberg (2010) | removed |
| Tang et al. | Removed. The chapter had the wrong terminal author and the article concerns neuronal mTOR-dependent autophagy, not a demonstrated microglial ASD mechanism. If reintroduced, cite pages 1131–1143 correctly. | Tang et al. | removed |

---

## Unresolved lineage flags

Not accuracy claims — open provenance questions requiring a human proximity read. Carried forward so deleting the audits does not lose them.

| Concept | Question | Chapter |
|---|---|---|
| `SP-004` Weber's Law | Lineage row remains `needs-verification` despite instructor-original origin columns and Noba provenance. Clearance was not inferred from provenance alone. | Ch. 4 |
| `SP-014` Tesla Vision framing | Row says the framing first appeared with Myers-13e while labeling origin `instructor-original`; provenance disclaims Myers wording. Those facts coexist, so it stays a human decision. | Ch. 4 |
| `LRN-016` Dopamine and reinforcement schedules | Marked `needs-verification`. The chapter cites primary monkey electrophysiology but the surrounding synthesis extends beyond those studies — a calibration question, not a missing citation. | Ch. 7 |
| `MEM-019` Confabulation, `MEM-020` Source misattribution | Marked `needs-verification`. Not a copyright problem in themselves; the open question is whether the current wording descends from a source that actually discusses clinical confabulation. | Ch. 8 |
| `DIS-009` Client-centered therapy | Drafted independently from Rogers (1951, 1957) and the Flückiger meta-analysis when Noba was unreachable. No commercial-wording risk evident. | Ch. 13 |
