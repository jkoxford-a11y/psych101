# Chapter 7 Learning Pre-Review Audit

**Audit date:** 2026-07-15  
**Scope:** Read-only diagnostic audit for editorial review  
**Canonical repository:** `C:\GitHub\psych101`  
**Authoritative prose:** `source/chapters/ch07-learning.md`  
**Generated output:** `docs/chapters/07-learning.html`

## A. Executive judgment

Chapter 7 has a strong instructor-authored voice, a memorable organizing problem—why unlearning is often harder than learning—and several unusually effective distinctions: classical versus operant conditioning, reinforcement versus punishment, learning versus performance, and extinction versus erasure. It is broadly teachable, but it is not ready for line-by-line editing yet. The main problem is not that the chapter lacks a coherent argument; it is that several downstream surfaces become more certain and more mechanistically tidy than the body prose. This is most serious in the dopamine section, the Classical Conditioning Lab’s explanation of extinction, the treatment of Little Albert as clean evidence, the preparedness question/figure/glossary, and the reinforcement-schedule figure and glossary entry.

The authoritative source and rendered HTML are semantically aligned and appear complete. The HTML contains all nine source figures, the linked Classical Conditioning Lab, eleven review questions with hidden rationales, a populated glossary, separated Further Reading and References, and no obvious truncation or source-only section loss. The chapter’s publication readiness is nevertheless blocked by the absence of a Chapter 7 figure manifest: there is no chapter-specific record of attribution, license, public-sharing status, or figure-specific caveats, even though the project’s current figure standard requires all four. The existing lab is structurally strong and privacy-preserving, so no second lab is needed; it requires a narrow scientific revision rather than replacement.

No chapter prose, generated HTML, figures, labs, inventories, handoff files, or project-log files were edited during this audit. This report is the only repository change.

## Repository state and authority

- **Prose source of truth:** `source/chapters/ch07-learning.md`.
- **Generated output:** `docs/chapters/07-learning.html`.
- **Generated output exists:** yes, and it is semantically aligned with the current source rather than the stale pre-figure version described in the provenance sidecar.
- **Chapter-specific figure metadata:** none found. `source/visuals-inventory.md` lists the nine figures and marks them wired, but it does not provide the required attribution/license/public-sharing/caveat record.
- **Lab:** `docs/labs/ch07/classical-conditioning.html` with `docs/js/labs-classical-conditioning.js`; linked from both source and HTML.
- **Completeness:** source, HTML, lab HTML, and lab JavaScript all end normally and appear complete.
- **Stale documentation encountered:** `_provenance/ch07-learning.md` still says the HTML is a stale pre-figure draft, but the current HTML contains all nine figures and the current chapter content. That provenance statement should be corrected later as low-impact documentation cleanup.
- **Inspection constraint:** binary figure files were confirmed by repository paths, source references, and prior provenance, but the GitHub connector did not expose renderable image bytes in this session. Figure judgments below therefore combine captions, alt text, source context, provenance notes, and known embedded-text defects. A final visual inspection remains required before figure approval.

---

## B. Semantic skeleton and two-week takeaways

### Core argument

Learning is the process by which experience changes what an organism predicts and does. Classical conditioning updates predictions about relationships among stimuli; operant conditioning updates predictions about relationships between behavior and consequences. Those mechanisms are powerful but constrained: prior learning is often suppressed rather than erased, biological history changes which associations are easy to acquire, and organisms can learn through observation or environmental exposure before that learning appears in behavior.

The chapter’s strongest unifying claim is that **learning and behavioral performance are not identical**. Extinguished learning can return, observational learning can be present without imitation, and latent learning can be present before reward makes it visible. That is a stronger and more defensible spine than the chapter’s occasional broader claim that all of these effects are instances of one literal compression architecture.

### Two-week memory test

Students should retain:

1. Classical conditioning is learning that one stimulus predicts another; operant conditioning is learning that a behavior predicts a consequence.
2. UCS/UCR/CS/CR terminology describes the source of a response and whether the eliciting stimulus-response relationship was learned.
3. Reinforcement increases behavior; punishment decreases it. Positive and negative mean adding and removing, not good and bad.
4. Extinction usually creates new learning that competes with earlier learning; it does not reliably erase the original learning.
5. The pattern of reinforcement changes response rate and persistence, but ratio/interval and fixed/variable schedules should not be reduced to one universal rule.
6. Garcia and Koelling demonstrated selective cue-consequence learning; the evolutionary explanation for that selectivity is plausible and well motivated, but it is still an inference beyond the observed pattern.
7. Bandura and Tolman show why learning must be distinguished from immediate performance and from direct reinforcement.
8. A well-established subset of dopamine signals encodes reward prediction error. Dopamine also contributes to motivation and action in pathway-, task-, and timescale-dependent ways; it is neither simply pleasure nor one single anticipation signal.

### Reconstruction judgment

The chapter can largely be reconstructed from its four section headings:

1. Classical conditioning: learning what predicts what.
2. Operant conditioning: learning from consequences.
3. Biological constraints and learning beyond conditioning.
4. Dopamine, reward, and the felt side of learning.

The objectives, most figures, and most review questions follow that sequence. The strongest alignment occurs in Sections 1 and 2, where definitions, examples, figures, retrieval prompts, and questions converge on the same discriminations.

The main reconstruction failures are downstream:

- The **body** carefully labels preparedness’s evolutionary account as an inference, while the objective, figure wording, glossary, and Question 6 treat evolutionary tuning as the demonstrated answer.
- The **body** eventually qualifies dopamine by pathway and context, while Figure 7.8, Question 10, the glossary, and the summary compress several distinct dopamine findings into one anticipation/uncertainty claim.
- The **Little Albert body and summary** present a historically weak single case as the field’s clearest demonstration of conditioned human fear.
- The **Classical Conditioning Lab** visually generates spontaneous recovery from fixed constants and then calls that generated rebound evidence for the mechanism assumed by the code.
- The **reinforcement-schedule paragraph, figure, question, and glossary** imply cleaner and more universal schedule effects than the underlying literature supports.
- The **mirror-neuron sidebar** is evidence-calibrated in isolation, but it pulls the chapter away from its central learning-performance argument and then reappears in the summary as a partial mechanism for observational learning.

### Conceptual progression

Sections 1 and 2 form the clearest instructional sequence. Students first learn stimulus-stimulus associations, then behavior-consequence associations, with diagnostic comparison boxes at the points of greatest confusion. The lab is placed at the right conceptual location.

Section 3 is the principal load bottleneck. It moves through biological preparedness, taste aversion, observational learning, vicarious consequences, latent learning, cognitive maps, mirror neurons, human neuroimaging, and autism claims. The material is interesting, but it operates at three explanatory levels—behavioral pattern, cognitive representation, and neural mechanism—and begins to read as a catalog of exceptions to conditioning rather than one argument. The common thread should be made explicit: **what is learned can differ from what is currently performed, and learning is constrained by the learner’s prior architecture**. The mirror-neuron material is the least necessary component of that argument.

Section 4 changes explanatory level again, from behavioral learning phenomena to single-neuron coding, computational prediction error, motivational vigor, incentive salience, addiction, reinforcement schedules, intrinsic motivation, and RLHF. The transition is defensible, but the section currently asks one dopamine story to unify too many constructs. A narrower structure would distinguish:

- phasic reward prediction error;
- sustained uncertainty-related activity in a particular delayed-reward task;
- motivational/incentive-salience functions;
- the separate question of how external rewards affect intrinsic motivation.

The chapter’s prediction framing is strongest rhetorically but incomplete mechanistically. Classical conditioning is defined mainly as repeated pairing. Modern associative learning emphasizes **contingency and informativeness**: a CS becomes useful when it improves prediction of the US relative to what the background already predicts. A compact contingency paragraph would make the chapter’s opening phrase—“learning what predicts what”—scientifically literal rather than only metaphorical. It need not add blocking, latent inhibition, or a full Rescorla-Wagner treatment.

---

## C. Construct/framework map and load-bearing claims

### Compact construct map

| Construct or framework | Working definition in the chapter | Explanatory type | Nearest confusion | Audit judgment |
|---|---|---|---|---|
| Classical conditioning | A neutral stimulus becomes predictive of a stimulus that already elicits a response | Learning process | Repeated contiguity versus predictive contingency; classical versus operant | Core definition is usable but overemphasizes repeated pairing and under-teaches contingency |
| Operant conditioning | Consequences change the future probability of behavior | Learning process | Reinforcement versus reward; negative reinforcement versus punishment | Strongly taught; operational effect should remain primary |
| Extinction as new learning | CS-noUS learning competes with earlier CS-US learning | Mechanism/model | Weakening of responding versus deletion of learning | Strong chapter spine, but lab and summary exceed what the demonstration establishes |
| Preparedness | Selective ease of learning some cue-consequence relations | Observed pattern plus adaptive interpretation | Demonstrated selectivity versus demonstrated evolutionary history | Body distinguishes levels; downstream surfaces collapse them |
| Observational learning | Behavior can be acquired through observing a model without direct reinforcement of the observer | Learning process | Acquisition versus performance | Strong and teachable; Figure 7.6 needs empirical correction |
| Latent learning/cognitive map | Environmental structure can be learned before reward makes that learning behaviorally visible | Construct plus inference from behavior | Learning versus performance | Strong but should avoid implying the classic maze result uniquely proves a literal map representation |
| Dopamine reward prediction error | Some dopamine-neuron activity reflects the signed difference between expected and obtained reward | Neural signal/computational construct | Pleasure, uncertainty, wanting, motivation, movement | Load-bearing and broadly supported; currently merged with several non-identical dopamine phenomena |
| Intrinsic/extrinsic motivation | The activity itself versus a separable outcome supplies motivation | Motivational constructs | External reward always helps versus always harms | Opening is appropriately conditional; later mechanism language needs modest calibration |

### Load-bearing claims and inference ladders

#### 1. Extinction changes control of behavior without reliably erasing prior learning

- **Directly observed:** conditioned responding declines during CS-alone trials and can return after time or context change.
- **Strongly supported inference:** extinction involves new learning and context-sensitive retrieval rather than simple deletion.
- **Plausible but non-unique mechanism:** a competing inhibitory memory suppresses expression of the acquisition memory.
- **Unsupported step in the lab:** inhibitory learning “weakens faster” and the simulator’s programmed rebound therefore demonstrates the mechanism.

The first two levels should anchor the chapter. The lab currently presents the third and fourth as direct evidence.

#### 2. Learning can occur without immediate performance or direct reinforcement

- **Directly observed:** model-punished children initially imitated less, then increased imitation when directly incentivized; delayed-reward rats improved rapidly when reward was introduced.
- **Strongly supported inference:** acquisition and performance are separable; behavior can reveal learning that was not previously expressed.
- **Plausible interpretation:** Tolman’s rats formed a cognitive map of maze structure.
- **Overreach to avoid:** one classic maze design uniquely establishes the format of the internal representation.

This is the chapter’s strongest cross-study argument and should be made more explicit.

#### 3. Biological architecture constrains which associations are readily learned

- **Directly observed:** rats learned taste-illness and audiovisual-shock relations more readily than the crossed relations.
- **Strongly supported inference:** associability is domain- and species-sensitive rather than uniform.
- **Plausible adaptive interpretation:** natural selection favored cue-consequence biases that tracked recurrent ecological problems.
- **Not directly demonstrated:** the Garcia and Koelling experiment itself reconstructs that evolutionary history.

The body mostly gets this right; the objective, Figure 7.5, glossary, and Question 6 do not.

#### 4. Phasic dopamine activity can encode reward prediction error

- **Directly observed:** in specific primate tasks, responses shift from unexpected reward to reward-predicting cues and dip when expected reward is omitted.
- **Strongly supported computational interpretation:** this activity resembles a signed reward prediction error that can support learning.
- **Separate finding:** sustained delay-period activity in Fiorillo et al. varied with reward uncertainty and was highest near 50% probability.
- **Separate broader functions:** dopamine also contributes to motivation, vigor, action initiation, and incentive salience, with strong regional and timescale dependence.
- **Unsupported collapse:** “dopamine rises most sharply during anticipation of an uncertain reward” as a general statement about dopamine activity.

Berke’s review, “What does dopamine mean?” (*Nature Neuroscience*, 2018, doi:10.1038/s41593-018-0152-y), is a useful current boundary source because it explicitly treats learning and motivation as related but non-identical dopamine functions.

#### 5. Reward schedules change response patterns and persistence

- **Directly observed:** standard schedule preparations produce different cumulative-response patterns and different persistence under extinction.
- **Strongly supported instructional distinction:** ratio versus interval and fixed versus variable matter.
- **Overgeneralization:** all fixed schedules establish quickly and extinguish quickly, all variable schedules establish slowly and resist extinction, and fixed-ratio responding forms a “scallop.”
- **Needed boundary:** schedule effects depend on the exact contingency, species, task, reinforcement history, and extinction procedure.

---

## D. Root-cause repair table

| Severity | Root cause | Affected surfaces | Evidence in current chapter | Minimum repair | Action route | Confidence |
|---|---|---|---|---|---|---|
| **Medium** | The prediction spine is not fully carried into the mechanics of classical conditioning | Definition, acquisition paragraph, Figure 7.1 framing, lab model, LO2 | Conditioning is described mainly as repeated CS-US pairing, even though the chapter’s organizing phrase is “learning what predicts what.” Pairing and prediction are not equivalent when the US is already equally probable in the background. | Add one compact paragraph explaining contingency/informativeness; revise “pairing” language where it implies repetition alone is sufficient. Do not add a full formal model. | Authoritative source revision; later lab wording revision | High |
| **High** | The extinction account becomes more mechanistically certain in the lab and summary than the evidence permits | Section 1, Figure 7.2 caption, lab HTML/JS, summary, glossary, Q2 | The lab repeatedly names the learned relation as “CS–CR” rather than CS–US, hard-codes a 35% recovery, says inhibitory learning weakens faster, and calls the programmed rebound evidence for suppression rather than deletion. The summary adds adaptive “in case the world reverts” language. | Correct CS–CR to CS–US; label the curve as a teaching model; explain return of responding through competing/context-sensitive learning without asserting differential decay; remove teleological summary language. | Source revision; lab revision; later HTML regeneration | High |
| **High** | Classic studies are presented as cleaner and more decisive than their designs justify | Little Albert body/summary; Figure 7.6; Bobo body/caption; references | Little Albert is called the field’s “clearest demonstration” despite a single participant, weak controls, ambiguous response coding, disputed generalization, and a heavily mythologized historical record. Figure 7.6’s caption implies a clean rewarded > no-consequence > punished ordering and describes children as expecting punishment themselves, which does not accurately summarize Bandura’s 1965 design. | Keep Little Albert as a flawed historical illustration, not definitive evidence; add one compact methods boundary and Harris/Powell historical references. Revise Figure 7.6 to distinguish the model-consequence phase from the later direct-incentive test and avoid a reward/no-consequence difference the study did not clearly establish. | Source revision; figure revision; citation work | High |
| **High** | Preparedness is calibrated in the body but converted into a demonstrated evolutionary mechanism downstream | LO5, Figure 7.5, retrieval prompt, Q6, glossary, summary, Connections | The body explicitly says preparedness names the selective pattern and the evolutionary account is an inference. Elsewhere the chapter says the pairings are “the pairings evolution prepared them for” and makes “evolution has tuned rats” the correct answer. | Define preparedness first as selective cue-consequence associability. State the adaptive account as the leading interpretation, not the observed result. Revise LO5, Figure 7.5 caption/embedded wording, Q6, glossary, and Connections row to preserve that distinction. | Source revision; figure revision; later HTML regeneration | High |
| **Medium** | The reinforcement-schedule treatment compresses distinct schedules into overly neat rules | Schedule paragraph, Figure 7.4, LO4, Q4, glossary | Fixed-ratio responding is called a “scallop,” a term normally associated with fixed-interval performance; the exam-studying example is not a clean first-response-after-interval contingency; the glossary claims fixed schedules establish quickly/extinguish quickly and variable schedules establish slowly/resist extinction as a general law. | Correct Figure 7.4’s FR pattern to break-and-run/post-reinforcement pause; use controlled schedule examples before everyday analogies; narrow the glossary and Question 4 to the conditional empirical pattern rather than a universal rule. | Source revision; figure revision | High |
| **High** | Several distinct dopamine findings are collapsed into a replacement myth | Section 4, Figures 7.8–7.9, LO7, Q10, glossary, summary, addiction bridge | Cue-evoked RPE, sustained uncertainty activity, anticipation, motivational vigor, incentive salience/wanting, variable-ratio persistence, and addiction are narrated as one signal. Figure 7.8 says dopamine firing is low at 100% and maximal at 50% without specifying the sustained delay-period component. Provenance records an embedded claim that “Dopamine causes focus and attention.” Q10 treats “anticipation of an uncertain reward” as the general answer. | Rebuild Section 4 around explicit distinctions: RPE first; uncertainty-related sustained activity second; wanting/motivation as a related but separate framework. Redraw Figure 7.8, preserve Figure 7.9 with a pathway/task caveat, narrow LO7 and Q10, and label Sapolsky’s retirement/afterlife extension as an analogy rather than a finding. | Source revision; figure revision; reference update; later HTML regeneration | High |
| **Medium** | Chapter architecture and assessment reward catalog recall more than the chapter’s best integrative argument | Section 3, Section 4, objectives, retrieval distribution, review set, glossary, summary | Body is approximately 6,060 words against a 3,500–5,000 target; glossary has 28 entries against an 8–20 target; 11 questions are within count but only Question 9 clearly integrates across sections. LO2, LO6, and especially LO7 bundle multiple operations. Section 4 lacks a self-referential Think About It prompt. | Organize Section 3 around learning-versus-performance and biological constraint; shorten or relocate mirror neurons; split the dopamine constructs; reduce glossary to durable Tier 1 terms; revise rather than add questions so at least two require integration. | Authoritative source revision | High |
| **High for release readiness** | Chapter 7 lacks figure governance and contains known embedded-image defects | All nine figures, global inventory | No Chapter 7 README/metadata file records captions, alt text, creation method, attribution, license, public-sharing status, or caveats. Provenance already flags incorrect embedded text in Figures 7.5 and 7.8. The global inventory nevertheless marks all nine as complete. | Create a Chapter 7 figure manifest; inspect every binary; correct or redraw 7.4, 7.5, 7.6, and 7.8; record status for all nine; then reconcile the global inventory. | Figure revision; metadata/attribution work | High |

---

## E. Minimum repair sequence

1. **Settle the scientific architecture in the source before touching HTML.** Preserve the chapter’s central prediction/update argument, but distinguish contingency from repetition, observed patterns from adaptive explanations, and learning from performance.
2. **Rewrite the extinction explanation and lab model together.** Correct CS–US terminology, remove circular “the simulator proves” language, and use a bounded context/competition account across prose, lab, summary, glossary, and Question 2.
3. **Repair the classic-study treatments.** Reframe Little Albert as a historically influential but methodologically weak illustration; revise the Bobo figure to match the 1965 procedure and findings.
4. **Rebuild the dopamine subsection around distinct constructs.** RPE should carry the neural learning argument. Uncertainty-related activity and incentive salience should be labeled as related but not identical. Remove or clearly label the Sapolsky extensions that exceed the cited experiment.
5. **Correct the preparedness and schedule surfaces.** Because the bodies are partly calibrated already, these are mostly downstream alignment repairs plus two figure corrections.
6. **Reduce cognitive load after the scientific structure is stable.** Tighten Section 3, decide whether mirror neurons earn page space, reduce glossary terms, narrow objectives, and revise the review set for integration.
7. **Complete the Chapter 7 figure manifest and visual inspection.** Do not preserve a misleading image merely because the surrounding caption is corrected.
8. **Regenerate `docs/chapters/07-learning.html` from the revised authoritative source, then validate source/HTML parity, links, figures, review disclosures, glossary, Further Reading, references, narrow-screen tables, and the lab link.**
9. **Live-test the revised lab and figures** at desktop, portrait-mobile, and landscape-mobile widths before calling the chapter public-ready.

---

## F. Alignment decisions

### Counts and specification status

| Element | Current count/status | Governing rule | Classification | Instructional judgment |
|---|---:|---|---|---|
| Learning objectives | 7 | 4–7 | Target met | LO2, LO6, and LO7 are internally overloaded; narrow rather than add |
| Major sections | 4 | 3–5 | Target met | Good macro-structure; Sections 3–4 need internal reorganization |
| Body length | ~6,060 words | 3,500–5,000 | Numerical target exceeded | Demonstrated load problem, not automatic cutting mandate |
| Chapter summary | Two paragraphs, approximately within 200–400 words | 200–400 | Likely target met | Too dense and more certain than body; revise content rather than expand |
| Connections | 7 rows | 4–8 | Target met | Semantically useful; preparedness and extinction rows need calibration |
| Review questions | 11 | 8–12; at least two integrative | Count met; integration requirement likely unmet | Revise existing questions; do not increase count |
| Key Terms | 28 | 8–20 | Numerical target exceeded | Creates real memorization load and omits several more central constructs |
| Further Reading | 5 | 3–6 | Target met | One item is too vague to locate reliably |
| Stop and Retrieve | 5 | Preferred 1–2 per section | Preferred pattern broadly met | Distribution is acceptable |
| Think About It | 3 | Preferred one per major section | Preferred pattern missed in Section 4 | Add only if it replaces, rather than adds to, current prose |
| Do Not Confuse | 3 | Optional | Appropriate | First two are high-value; mirror-neuron panel is less central |
| Lab | 1 linked | Optional; must do cognitive work | Appropriate concept, revision required | No new lab needed |

### Learning objectives

- **LO1:** keep. It states the chapter’s foundational discrimination and is taught, practiced, and tested well.
- **LO2:** narrow. It currently combines diagramming, acquisition, extinction, spontaneous recovery, generalization, and discrimination. Keep the classification/diagramming operation and group the change-over-time phenomena under one explanatory task.
- **LO3:** keep. It aligns strongly with prose, table, DNC panel, and Question 3.
- **LO4:** revise after the schedule correction. Avoid promising one schedule as universally “most resistant” without the conditions taught in the chapter.
- **LO5:** revise to require students to distinguish the observed selective-learning pattern from the evolutionary interpretation.
- **LO6:** retain the learning-versus-performance aim, but do not require two entire classic studies in the objective. The studies are evidence, not the performance target.
- **LO7:** substantially narrow. A workable target is: interpret cue, reward, and omission responses as reward prediction error and explain why this does not make dopamine a universal pleasure or motivation signal. Evaluation of addiction, uncertainty, and real-world reward claims can remain application examples rather than all being embedded in the objective.

### Retrieval distribution

The chapter has enough retrieval interruptions. The problem is not count but operation. Section 3’s preparedness prompt asks for the evolutionary explanation rather than first requiring students to state the observed cue-consequence pattern. Revise it into two steps: what was observed, then what explanation is inferred.

Section 4 should replace one explanatory paragraph or the current broad dopamine retrieval item with a figure-interpretation prompt: predict firing at the cue and outcome for unexpected, expected, and omitted reward. A brief self-reference prompt about wanting versus liking could then replace, not supplement, some of the current addiction prose.

### Review-question actions

- **Keep with minor copyedit:** Q1, Q2, Q3, Q5, Q7, Q8, Q9.
- **Revise Q4:** retain schedule discrimination but remove the universal “why” and use a clearly specified experimental schedule/extinction case.
- **Revise Q6:** ask students to identify the observed selective-association pattern and distinguish it from the adaptive explanation. The current correct answer treats inferred evolutionary history as directly demonstrated.
- **Replace Q10:** use a cue/reward/omission trace or Figure 7.9 interpretation. The current question makes “anticipation under uncertainty” a general dopamine rule.
- **Revise Q11:** retain the overjustification application but specify an initially interesting task, an expected tangible reward, and the post-reward free-choice measure. Ask which conclusion is warranted and which “all rewards undermine motivation” conclusion is not.

At least one revised item should integrate Sections 1 and 2—for example, comparing Pavlovian extinction with operant extinction while identifying what relation changed—and one should integrate Section 2 with Section 4 without claiming that dopamine alone causes the variable-ratio effect.

### Key Terms

The glossary is alphabetized, but 28 entries exceed the 8–20 target and distribute attention toward nested vocabulary rather than the chapter’s durable distinctions.

**Tier 1—retain or add:** classical conditioning; operant conditioning; UCS/UCR/CS/CR (possibly consolidated as one vocabulary cluster); acquisition; extinction; spontaneous recovery; generalization; discrimination; reinforcement; punishment; negative reinforcement; schedule of reinforcement; shaping; preparedness; observational learning; latent learning; reward prediction error.

**Tier 2—retain only if space permits:** cognitive map; renewal; vicarious reinforcement; intrinsic motivation; extrinsic motivation; overjustification effect; habit.

**Tier 3—remove from glossary or fold into broader entries:** higher-order conditioning; law of effect; taste aversion learning as a separate entry; dopamine as a general neurotransmitter entry. Dopamine belongs in Chapter 3’s durable glossary; Chapter 7 needs the more precise learning construct, **reward prediction error**.

### Summary and Connections

The summary should cue the four-section argument rather than compress nearly every term. Remove:

- “the field’s clearest demonstration” for Little Albert;
- the adaptive claim that retained associations exist “in case the world reverts”;
- mirror neurons as a partial mechanism unless the sidebar remains core;
- “dopamine tracks prediction and reward uncertainty rather than pleasure itself” as a single replacement definition.

The Connections table has seven useful rows and correct internal anchors. Revise the extinction row so exposure therapy is not equated with extinction “by another name”; contemporary exposure treatment involves inhibitory learning, expectancy violation, context, and broader therapeutic processes. Revise the preparedness row so the demonstrated selectivity and evolutionary interpretation remain separate. The Chapter 5 connection is structurally valid but points to a chapter whose own source/HTML reconciliation remains unresolved outside Chapter 7.

---

## G. Figures and lab-gap decision

### Figure status

| Figure | Provisional status | Reason/action |
|---|---|---|
| **7.1 Classical conditioning phases** | **Use after metadata and visual check** | Supports the core vocabulary. Caption should mention predictive relation/contingency rather than imply repetition alone is the mechanism. |
| **7.2 Extinction is not erasure** | **Revise wording; likely retain** | Strong one-idea figure. Ensure the figure depicts competing CS-US and CS-noUS learning, not a CS-CR “association,” and avoid claiming a specific inhibitory-decay mechanism. |
| **7.3 Operant 2×2** | **Use after metadata and visual check** | High-value discrimination figure. Confirm artwork defines categories by observed behavior change and added/removed consequence. |
| **7.4 Reinforcement schedules** | **Revise** | Correct fixed-ratio “scallop” to break-and-run/post-reinforcement pause; verify axes and curve shapes; avoid embedding a universal extinction ranking into the curve itself. |
| **7.5 Garcia and Koelling** | **Revise** | Provenance records an embedded “Garcia (1972)” citation inconsistent with the chapter’s Garcia and Koelling (1966) source. Replace “pairings evolution prepared them for” with observed selective-association language plus a caption caveat. |
| **7.6 Bobo doll** | **Revise** | Separate 1961 aggressive-model comparison from the 1965 model-consequence/direct-incentive test. Do not imply children expected personal punishment, and do not depict a strong rewarded-over-no-consequence difference unless the source supports it. |
| **7.7 Tolman delayed reward** | **Use after metadata and visual check** | Strong data-shaped figure. Caption appropriately says the result suggests prior learning; retain that inferential wording. |
| **7.8 Dopamine uncertainty** | **Redraw** | Must distinguish sustained delay-period uncertainty activity from cue-evoked probability/value responses. Remove the embedded “Dopamine causes focus and attention” claim recorded in provenance. |
| **7.9 Reward prediction error** | **Use after metadata and visual check; add boundary** | This is the most important dopamine figure. Keep unexpected/cued/omitted reward sequence; caption should specify a classic midbrain dopamine-neuron pattern in a particular reward-learning paradigm, not all dopamine activity. |

### Figure metadata requirement

Create `docs/images/ch07/README_captions_alt_text_attribution.md` or an equivalent authoritative manifest containing, for each figure:

- descriptive filename;
- final caption;
- accessibility-first alt text;
- creation/source method;
- license and attribution;
- public-sharing status;
- scientific caveat;
- use-now/revise/slide-only/candidate/remove status.

The global inventory should not mark a figure complete merely because it is wired.

### Lab-gap decision

**No new Chapter 7 lab is justified. Revise the existing Classical Conditioning Simulator.**

The current lab already performs the chapter’s highest-value operation: prediction before observation, acquisition, extinction, delayed return, explanation, and transfer. It is session-local, collects no identifiers, provides an accessible text log, and follows the six-phase lab design.

Required revisions:

1. Replace every “CS–CR association” with the relevant **CS–US relation** or “conditioned responding,” depending on context.
2. State that the curve is a **simplified teaching model with chosen parameters**, not data generated by the student.
3. Remove the claim that inhibitory learning necessarily weakens faster than excitatory learning.
4. Explain spontaneous recovery as evidence that reduced responding does not guarantee deletion, while noting that context-sensitive retrieval and competing learning are leading accounts.
5. Do not say the hard-coded rebound is evidence for the code’s assumed mechanism. The student observes the implication of a model.
6. Use the chapter’s UCS/UCR terminology or explicitly state that US/UR and UCS/UCR are equivalent conventions.
7. Gate the Explain response before revealing transfer if the current implementation permits saving an empty explanation.

An optional later enhancement would introduce contingency by allowing students to compare CS-US pairings against a condition in which the US occurs just as often without the CS. That would deepen the current lab rather than justify a second lab.

---

## H. Source/HTML and pipeline routing

### Source/HTML parity

No dangerous source/HTML parity defect was found. The HTML reproduces the current source’s:

- misconception opener and Where This Fits;
- seven objectives;
- four major sections;
- nine figures in the same order;
- three Do Not Confuse panels;
- linked Classical Conditioning Lab;
- summary and seven-row Connections table;
- eleven review questions with paired `<details>/<summary>` rationales;
- twenty-eight Key Terms;
- five Further Reading items;
- seventeen References entries.

The HTML uses the correct rendered relative path to `../labs/ch07/classical-conditioning.html`; the source path is relative to the source directory and points to the same canonical file. Headings and internal anchors appear populated, and prior repository validation reports Chapter 7 with zero linter failures and warnings.

Because the source and HTML share the same substantive problems, direct HTML repair would only duplicate work. Revise the source, lab, figures, and metadata first; regenerate HTML last.

### Shared-site and pipeline routing

No Chapter 7-specific shared CSS or sidebar defect was reproduced during this audit. Actual browser checks remain necessary for:

- figure readability and loading;
- narrow-screen table containment;
- lab phase transitions, restore/reset, keyboard operation, and focus movement;
- mobile figure sizing;
- any future expandable-figure decision.

The stale provenance statement about the HTML belongs to documentation cleanup, not the chapter revision.

---

## I. Citation, lineage, and verification needs

### Concept lineage

- **LRN-011 Shaping** is marked `book-adoption`. The provenance sidecar documents that no suitable Noba wording used the term directly and that the chapter was drafted from Skinner’s 1951 primary article instead. That is a defensible application of the project rule; no commercial-text wording issue was identified.
- **LRN-016 Dopamine and reinforcement schedules** is marked `needs-verification`. The current chapter cites primary monkey electrophysiology, but the surrounding synthesis extends beyond those studies. This is a claim-calibration issue, not merely a missing-citation issue.
- No evidence of copied Wade, King, or Myers prose was identified from the available lineage record and current chapter wording.

### Substantive citation repairs

1. **Extinction:** add a modern extinction/context source such as Bouton, M. E. (2004), “Context and behavioral processes in extinction,” *Learning & Memory, 11*, 485–494, doi:10.1101/lm.78804. Use it to support the competition/context account, not a mandatory differential-decay mechanism.
2. **Contingency:** if the compact prediction paragraph is added, use Rescorla, R. A. (1968), “Probability of shock in the presence and absence of CS in fear conditioning,” *Journal of Comparative and Physiological Psychology, 66*, 1–5, doi:10.1037/h0025984.
3. **Little Albert:** add Harris, B. (1979), “Whatever happened to Little Albert?” *American Psychologist, 34*, 151–160, doi:10.1037/0003-066X.34.2.151, and/or Powell, Digdon, Harris, and Smithson (2014), “Correcting the record on Watson, Rayner, and Little Albert,” *American Psychologist, 69*, 600–611, doi:10.1037/a0036854. The point is methodological and historical calibration, not resolving the child’s identity in the textbook.
4. **Dopamine:** retain Schultz et al. (1997) and Fiorillo et al. (2003), but add a modern synthesis such as Berke (2018), doi:10.1038/s41593-018-0152-y, to support the pathway/task/timescale boundary.
5. **Intrinsic motivation:** Deci (1971) supports the classic demonstration; a meta-analytic source such as Deci, Koestner, and Ryan (1999), doi:10.1037/0033-2909.125.6.627, is needed if the chapter retains a general statement about when external rewards undermine intrinsic motivation. State the conditions rather than converting the result into “rewards backfire.”
6. **Mirror neurons/autism:** if the sidebar remains, replace reliance on a 2004 review alone with a more current critical synthesis. Otherwise, shortening or removing the sidebar is better than adding references to preserve a peripheral claim.
7. **RLHF:** if retained, cite the actual training pipeline rather than leaving a current technical description uncited; Ouyang et al. (2022), arXiv:2203.02155, is an appropriate primary source for the InstructGPT-style pipeline.

### Reference-list findings

- All named author-year citations in the chapter have corresponding References entries.
- **Bouton (2026)** appears in References and Further Reading but is not cited in the chapter body. Either cite it for conditioning/extinction or retain it only in Further Reading.
- The punishment paragraph makes broad applied and side-effect claims without a source. Narrow the paragraph or add an authoritative applied-behavior source; do not add a citation merely to preserve an absolute statement.
- “Crash Course Psychology—episodes on…” is too vague for a curated resource. Supply exact episode titles/links or remove it.

---

## J. Decisions requiring Jon’s judgment

1. **Little Albert’s role:** keep it as a vivid but flawed historical case, or replace it as the main classic-study walkthrough with a cleaner modern fear-conditioning demonstration. Recommendation: keep it, but make the methodological weakness part of the lesson and remove “clearest demonstration.”
2. **Mirror neurons:** retain the evidence-boundary sidebar, move it to Chapter 3/10, or cut it from the core chapter. Recommendation: cut or compress to a brief optional sidebar; observational learning does not require a mirror-neuron mechanism to be teachable.
3. **Dopamine scope:** keep the current broad motivation/addiction treatment or narrow Section 4 to RPE plus a short wanting/liking boundary. Recommendation: let RPE carry the learning chapter; move the fuller motivational treatment to Chapter 12 and keep one concise cross-reference here.
4. **Contingency:** add a compact Rescorla-style paragraph to make “learning what predicts what” scientifically complete. Recommendation: yes, but do not add blocking or a formal equation.
5. **Body-length reduction:** accept the ~6,060-word deviation or reduce it during revision. Recommendation: reduce primarily by removing repeated spine explanations, shortening the mirror-neuron detour, and separating rather than repeatedly qualifying dopamine constructs. Preserve the vivid classic examples.
6. **Figure style:** repair the existing raster figures or replace the four flagged visuals with clean original programmatic diagrams. Recommendation: redraw 7.4 and 7.8; revise or redraw 7.5 and 7.6 depending on whether embedded text can be corrected cleanly.

---

## Appendix: Low-impact mechanical findings

- `_provenance/ch07-learning.md` incorrectly says `docs/chapters/07-learning.html` is still a stale pre-figure draft. The current HTML contains all nine figures and the current prose.
- The chapter uses UCS/UCR; the lab uses US/UR. Both conventions are legitimate, but students should not encounter the switch without explanation.
- The source and HTML are aligned, but neither has the newer per-section `<h3>`/in-section navigation structure. That retrofit is a later book-wide structural task, not a Chapter 7 correctness defect.
- The glossary’s `Schedule of reinforcement` definition is longer than the project’s one-sentence glossary preference and embeds contested generalizations.
- Figure status in `source/visuals-inventory.md` should be changed only after the missing Chapter 7 manifest and actual visual review are completed.
- Live browser and actual-phone interaction checks were not reproduced in this connector-only audit and remain required before release.