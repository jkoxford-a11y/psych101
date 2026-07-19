# Chapter 3 Pre-Review Audit

**Chapter:** Neuroscience and Biological Bases of Behavior  
**Date:** 2026-07-16  
**Scope:** Read-only diagnostic audit for editorial review  
**Status:** No chapter prose, generated HTML, figures, labs, metadata, inventories, or project-state files were changed during the audit. This report is the only new repository artifact.

## A. Executive judgment

Chapter 3 is conceptually ambitious, unusually coherent for an introductory neuroscience chapter, and recognizably instructor-authored. Its strongest organizing claim is that brains are not primarily “thinking organs,” but centralized systems for selecting action under biological constraints. That claim gives the chapter a real explanatory spine: body plan and action selection lead to neurons, synapses, neuromodulation, whole-body regulation, and finally specialized but networked brain systems.

The chapter is broadly sound, vivid, and teachable, but it is not ready for sentence-level polishing. Four concentrated scientific problems need canonical revision first: the neuropeptide definition is incorrect; dopamine reward-prediction-error language becomes broader and more categorical across the summary, glossary, Connections, and questions than it is in the body; the Phineas Gage and H.M. cases are made to support cleaner lesion-function inferences than the anatomy permits; and the stress section turns a useful acute-versus-prolonged contrast into an overconfident evolutionary-mismatch account. Section 2 also carries too many hard ideas, while the 41-term glossary and 11-row Connections table exceed their instructional value.

The correction should be narrow rather than reconstructive. Preserve the action-selection spine, comparative method, Gage return structure, wired-versus-broadcast distinction, inhibition-as-selection framing, Sapolsky cue-shift example, chemical-imbalance inference lesson, and network-localization conclusion. Repair the places where a vivid teaching model is allowed to become literal architecture or a universal mechanism.

The authoritative source is `source/chapters/ch03-neuroscience-biological-bases.md`. The generated page is `docs/chapters/03-neuroscience.html`. Spot checks and the chapter image manifest indicate close semantic parity and complete figure wiring as of 2026-07-11. Any approved source revision should therefore be made in Markdown and followed by one full HTML regeneration, not by direct HTML patching.

## B. Semantic and narrative skeleton

### Core argument

Nervous systems evolved to coordinate sensing, internal state, prediction, and movement so organisms can select actions under time and energy constraints. Neural and hormonal mechanisms constrain behavior, but no molecule, region, or case explains a psychological function by itself: effects depend on receptor, circuit, body, task, development, and context. The biology therefore explains substrate and mechanism more directly than meaning, purpose, or lived context.

### Two-week memory test

Students should still be able to use these ideas two weeks later:

1. A brain is usefully understood as an action-selection and coordination system, not merely a container for thought.
2. An action potential is a stereotyped electrochemical event; stronger stimulation is represented mainly through firing patterns and recruitment, not proportionally taller spikes.
3. Neurotransmitters and hormones are distinguished primarily by delivery route, while psychological effect depends on receptors and the circuits receiving the signal.
4. Excitation and inhibition work together. Inhibition is a constructive part of timing, selection, and noise suppression.
5. Reward-prediction error is a powerful model for phasic activity in some midbrain dopamine neurons during particular learning tasks, not a complete definition of dopamine.
6. Acute autonomic and endocrine mobilization can be adaptive; repeated or prolonged activation can become costly.
7. Brain regions are specialized contributors within networks. A lesion can reveal necessity or contribution without assigning an entire behavior to one region.
8. Methods constrain inference: fMRI, EEG, lesion evidence, animal models, and case studies answer different questions.

### Narrative progression

The opening asks why an organism needs a nervous system at all. The answer—action selection under directional movement and limited resources—creates the chapter’s organizing problem. Section 1 scales down to the neuron and action potential. Section 2 follows signaling outward from a synapse to circuit modulation and bloodstream signaling. Section 3 moves to coordinated bodily regulation under stress. Section 4 scales back up to brain systems and asks how much specialization evidence can legitimately establish.

The progression is intellectually strong, but Section 2 becomes an internal mini-chapter: synaptic release, clearance, agonists and antagonists, excitation and inhibition, dopamine, serotonin, depression, endocrine signaling, cortisol, oxytocin, and artificial neural networks. Its “four scales” promise is good, but too much content is assigned to one section for first-year readers to retain the scale transition.

Section 4 also combines three different instructional jobs: methods literacy, anatomical survey, and inference from classic cases. The network-localization argument is the payoff; the lobe and limbic-system catalog delays that payoff and can be compressed.

### Reconstruction judgment

A student can reconstruct most of the chapter’s intended story from the headings, objectives, figures, summary, and questions. Figures 3.1, 3.5, 3.7, 3.8, 3.9, and 3.10 reinforce the action-selection, signaling-scale, circuit-context, and network themes. The labs practice threshold coding, reward-prediction error, and chemical-cause inference.

The reconstruction becomes less reliable in the back matter. The summary and glossary convert qualified teaching models into categorical definitions, especially for dopamine, H.M., cortisol, and neuropeptides. The Connections table also strengthens several claims: dopamine becomes “the chemical mechanism underlying reinforcement learning,” H.M. becomes proof of forming rather than storing memories, and Gage is connected to antisocial personality disorder. Those are not neutral summaries of the body; they alter the argument.

### Story-visibility judgment

The central story is visible and worth preserving. Scientific qualifications generally appear after the claim rather than burying it. The problem is not excessive caution. It is the reverse: several memorable simplifications escape their local boundaries and become the chapter’s official retrieval cues.

## C. Must-Preserve Ledger

| Asset | Instructional role | Why it works | Accuracy status | What must survive |
|---|---|---|---|---|
| “Why Do We Have a Brain?” action-selection opener | Narrative hook and organizing model | Gives the chapter a problem rather than an anatomy catalog | Broadly supported but adaptive history needs calibration | Brain as coordination/action-selection system; body-plan comparison; anti-ladder warning |
| Figure 3.1 and the sentence rejecting a “more evolved” ladder | Explanatory comparison | Makes comparative anatomy serve a mechanism question | Strong teaching asset | Comparative body-plan logic and explicit anti-ladder boundary |
| Ten-percent myth correction | Misconception correction | Familiar prior belief, direct refutation, metabolic-cost logic | Broadly sound | The correction and the line that broad activity does not mean equal activity everywhere |
| Gage cold open and return in Section 4 | Narrative architecture | Creates suspense and a cross-scale bridge from survival to personality | Keep, but narrow the inference | The accident narrative, return structure, and case-study limitation lesson |
| Hodgkin–Huxley squid giant axon story | Evidence and comparative-method example | Explains why animal models can reveal conserved mechanisms | Strong with one wording repair | Squid escape function, legible mechanism, and comparative-method conclusion |
| Wired/focal versus bloodstream/broadcast distinction | Do Not Confuse model | Compresses a difficult distinction into delivery architecture | Strong | The contrast, diagnostic question, and Figure 3.5 |
| “Inhibition is not bad” and Figure 3.7 | Misconception correction | Replaces moralized on/off language with circuit selection | Strong, with receptor-context nuance | Inhibition as timing, selectivity, and noise suppression |
| Sapolsky cue-shift example | Mnemonic illustration | Makes reward prediction error memorable without equations | Strong within a restricted teaching model | Unexpected reward, learned cue, omitted reward; anti-“pleasure chemical” correction |
| Aspirin/headache analogy | Inference lesson | Separates treatment efficacy from proof of original cause | Strong and highly transferable | The analogy and the distinction between involvement, mechanism, and deficiency |
| Push-pull autonomic framing and Figure 3.9 | System-level model | Corrects an on/off misconception | Strong if “balanced” and tend-and-befriend are calibrated | Simultaneous shifting influence, mobilization versus recovery, self-reference prompt |
| “Lego-brain thinking” correction | Organizing metaphor | Gives students a memorable alternative to one-region/one-function maps | Strong | Regions contribute operations within distributed networks |
| H.M. procedural/declarative contrast | Classic case and conceptual discrimination | Shows separable memory systems vividly | Strong, but not a pure hippocampal lesion | Profound new declarative-memory impairment alongside preserved procedural learning |
| Split-brain versus personality myth | Do Not Confuse model | Cleanly separates a real clinical finding from pop psychology | Strong | Surgical-population boundary and diagnostic question |
| Biological versus artificial neurons | AI comparison | Clarifies the biology by identifying what engineering omitted | Useful but interrupts the main flow | Comparison and breakdown point; may move to a sidebar |

## D. Construct map and load-bearing claims

### Compact construct map

| Construct | Role | Nearest confusion | Audit judgment |
|---|---|---|---|
| Action-selection problem | Functional/evolutionary framing | A demonstrated single origin story for brains | Strong organizing hypothesis; historical causation is more complex than the prose implies |
| Action potential | Cellular mechanism | Stimulus intensity equals spike height | Strong; numerical values and all-or-none language should remain explicitly typical/schematic |
| Neurotransmitter versus hormone | Delivery distinction | Chemical identity determines category | Strong; timing and distance are tendencies, not absolute definitions |
| Excitation/inhibition | Effect on firing probability and circuit operation | Excitatory transmitter is always excitatory in every receptor/circuit | Strong teaching contrast; receptor dependence should be stated once |
| Neuromodulation | Circuit-state adjustment | One molecule equals one feeling or behavior | Strong and load-bearing |
| Reward-prediction error | Computational account of selected phasic dopamine signals | The primary function of dopamine everywhere | Strong restricted model; unstable across current surfaces |
| Acute/prolonged stress mobilization | Regulatory mechanism and cost tradeoff | A system built only for physical emergencies and unable to distinguish social threats | Useful; current adaptive account overreaches |
| Functional specialization within networks | Systems-neuroscience framework | One region owns one function, or localization is false | Strong and load-bearing |
| Case-study inference | Evidence framework | A vivid lesion is a clean experimental manipulation | Explicitly taught, but violated in the Gage and H.M. conclusions |

### Load-bearing inference ladders

| Claim | Direct observation | Inferred construct/mechanism | Broader interpretation | Judgment |
|---|---|---|---|---|
| Nervous systems solve action-selection problems | Directional organisms concentrate sensory and neural structures anteriorly; nervous systems coordinate behavior | Centralization improves coordination under time/energy constraints | Directional movement caused cephalization and nervous-system centralization | Broadly supported functional account; not a uniquely demonstrated evolutionary history |
| Individual action potentials are all-or-none | Suprathreshold membrane events show stereotyped regenerative spikes | Voltage-gated channel dynamics and refractory properties | Intensity is encoded by population/rate patterns | Strong at Psych 101 scale; “every neuron” and identical-spike language need limits |
| Circuit context gives a chemical signal meaning | Receptor types and target circuits differ; the same molecule has heterogeneous effects | Receptor/circuit/state dependence | One-molecule psychological labels are misleading | Strong |
| Phasic dopamine can resemble reward-prediction error | Selected midbrain dopamine neurons change phasic firing with cues, unexpected rewards, and omission in reward-learning tasks | Temporal-difference-like error signal | Dopamine is the chemical mechanism of reinforcement learning | First two levels are influential and well supported; final universalization is too strong |
| Prolonged stress activation can be costly | Repeated/prolonged autonomic and endocrine activation correlates with physiological and psychological burden | Allostatic load and regulatory cost | The system evolved for brief physical threats and is mismatched to modern social stress | Cost claim is strong; origin/mismatch account is plausible but non-unique and overstated |
| Gage demonstrates frontal/network contribution to regulation | Penetrating injury followed by reported behavioral change | Frontal and white-matter network disruption contributed | Prefrontal damage selectively changed personality while sparing other capacities | Historically important, but anatomy and premorbid/postinjury behavior are too uncertain for the clean conclusion |
| H.M. demonstrates separable memory systems | Bilateral medial-temporal surgery followed by profound declarative-memory impairment and preserved procedural learning | Medial-temporal circuits are critical for declarative memory | The hippocampus converts but does not store memories | Core dissociation is strong; pure hippocampal/converter interpretation is too narrow |

## E. Root-cause repair table

| Severity | Root cause | Evidence and affected surfaces | What must be preserved | Risk of overcorrection | Minimum effective repair and route | Confidence |
|---|---|---|---|---|---|---|
| **High** | Neuropeptide is defined by the wrong criterion | Section 2 says chemicals acting centrally and peripherally “are more precisely called neuropeptides.” The glossary defines a neuropeptide as synthesized in the brain and released both centrally and into blood. Peptide chemistry, precursor synthesis, dense-core vesicles, and often slower modulatory signaling—not obligatory dual release—define the class. Oxytocin is a neuropeptide that can also function neuroendocrinologically. | Oxytocin as the bridge showing that one molecule can operate at multiple signaling scales | Replacing the paragraph with biochemical detail that overwhelms Psych 101 | Define neuropeptides as amino-acid-chain signaling molecules made as precursor proteins and commonly released by neurons as modulators; then state separately that oxytocin is released centrally and into the bloodstream. Revise body, summary if retained, and glossary. Add van den Pol (2012). **Authoritative source revision.** | High |
| **High** | The chapter’s anti-one-molecule argument is violated by its dopamine retrieval surfaces | Body language includes useful caveats, but it also says “dopamine neurons” broadly and “This is a prediction error signal.” The summary and glossary call prediction error dopamine’s “primary role in reward circuits”; Connections calls it “the chemical mechanism underlying reinforcement learning”; Q3 generalizes to dopamine neurons. Gershman et al. (2024) explicitly describe original RPE theory as too simple and note findings requiring accounts beyond RPE. | Anti-“pleasure chemical” correction, cue-shift example, Chapter 7 bridge, Figure 3.8, dopamine lab | So much qualification that students lose the classical pattern | Use one stable formula across surfaces: “In well-studied reward-learning tasks, phasic activity in a subset of midbrain dopamine neurons often resembles reward-prediction error.” State once that other dopamine signals/pathways support movement, salience, action vigor, novelty, and other computations. Revise body, summary, glossary, Connections, Q3, and lab link wrapper; the lab itself is already well calibrated. **Authoritative source revision.** | High |
| **High** | Classic cases are treated as cleaner anatomical manipulations than they were | Gage is said to show that prefrontal damage “selectively” disrupts personality while sparing memory/language/perception, and Damasio et al. (1994) is treated as a precise bilateral reconstruction. Van Horn et al. (2012) estimated left frontal/temporal/insular damage, no direct right-frontal crossing in the best-fit path, widespread connectivity loss, and unavoidable uncertainty without brain tissue. H.M. is described as a hippocampal converter case, but postmortem work found substantial residual hippocampal tissue, near-complete entorhinal loss/disconnection, and other pathology. | Gage narrative and return structure; case-study limitation; H.M. declarative/procedural dissociation | Removing the two most memorable cases or turning them into historiography essays | Reframe Gage as a famous case consistent with frontal/network contributions to planning and regulation, with sparse behavioral records and uncertain lesion anatomy. Reframe H.M. as bilateral medial-temporal surgery establishing critical MTL involvement and separable memory systems—not a pure hippocampal lesion or proof that old memories are simply stored elsewhere. Revise Q7, Q8, summary, glossary, and Connections. Add Van Horn et al. (2012) and Annese et al. (2014). **Authoritative source + citation revision.** | High |
| **High** | Functional explanation repeatedly becomes an untested adaptive history | The opener says nervous systems “evolved to solve” action selection; stress prose says the system was built for acute threats, a zebra switches it off, and public-speaking physiology is deployed against a target it “was never built to distinguish” from physical danger. Social evaluation, status, coalition, and uncertainty are not evolutionarily novel categories. The CGM example attributes glucose rise to cortisol alone despite coordinated catecholamine, glucagon, insulin, and cortisol effects. | Action-selection spine; sprint/marathon image; acute-benefit/prolonged-cost distinction; Sapolsky voice | Removing the behavioral-ecology lens or replacing it with generic “stress is complex” prose | Mark action selection as a useful functional account rather than a singular historical cause. Preserve “built for sprints” as an analogy, but say repeated/prolonged activation can become costly and modern conditions can extend activation. Replace “cortisol doing exactly its job” with coordinated autonomic/endocrine energy mobilization. Revise LO6 so students generate and evaluate functional hypotheses rather than “explain why” mechanisms exist. **Authoritative source revision.** | High |
| **High** | Section 2 and the back matter exceed first-year cognitive capacity | Section 2 carries synaptic mechanics, drug action, E/I, neuromodulation, two monoamines, depression, endocrine signaling, cortisol, oxytocin, and AI. The glossary has 41 entries, many with multiple ideas. Connections has 11 rows, several weak or overextended. Section 4 adds methods, anatomy, network theory, and three classic cases. | Four-scale signaling progression, strong analogies, major figures, classic cases | Cutting the very examples that make the chapter memorable | Preferred repair: split Section 2 into “Synapses and Circuit Effects” and “Neuromodulators and Hormones,” producing five major sections. Move the AI comparison to a sidebar after the biological mechanism is established. Convert the lobe/limbic catalog into a compact “structure / contribution / do not reduce to” table. Reduce glossary to about 20–24 load-bearing terms or create a clearly secondary anatomy reference. Reduce Connections to 7–8 strong rows. **Authoritative source revision.** | High |
| **Medium–High** | The autonomic section’s push-pull model is accurate in prose but overclean in labels and assessment | “Fight-or-flight” and “rest-and-digest” are introduced as branches before the text corrects the on/off model. Q5 says both exert “continuous, balanced influence”; influence is simultaneous and shifting but not necessarily balanced. Slow breathing is described as directly making one branch dominant. Tend-and-befriend is placed beside fight/flight/freeze in Figure 3.9 and can read as a settled autonomic response or third branch, despite being a proposed biobehavioral framework. | Push-pull correction, self-reference prompt, Figure 3.9’s organ-level comparison | Adding detailed autonomic exceptions everywhere | Replace “balanced” with “simultaneous, shifting, and organ-specific.” Describe slow breathing as influencing autonomic regulation rather than simply switching dominance. Keep tend-and-befriend as an influential proposed framework in prose or a caption note; do not render it as a third autonomic branch. Revise Figure 3.9 caption/art only as needed after direct binary inspection and revise Q5. **Source + possible figure revision.** | High |
| **Medium** | Several cellular and methods explanations use absolute language that conflicts with the chapter’s own circuit-context principle | Hodgkin–Huxley principles apply “with only minor modification, to every neuron”; myelinated internodes “cannot fire at all” and the signal “skips”; signaling ends by two routes; “most psychiatric drugs” act at the synapse; transmitters are called directionally excitatory or inhibitory without naming receptor dependence; fMRI blood flow is said to lag by “a second or more,” understating the several-second hemodynamic response. | Clear cellular sequence, binary-digit analogy, myelin figure, synapse figure, method-headline skepticism | Importing ion-channel and pharmacology detail that obscures the intro model | Change “every” to “most” or “widely conserved”; align myelin prose with Figure 3.4 (“current spreads under myelin; spikes regenerate at nodes”); call reuptake and degradation two important routes; change “most” to “many” drugs; state once that receptor type determines excitatory/inhibitory effect; say fMRI’s hemodynamic response unfolds over several seconds. **Authoritative source revision.** | High |
| **Medium** | The chemical-imbalance correction is defensible but relies too heavily on one synthesis and the associated lab predates the current lab architecture | The body correctly rejects a simple serotonin-deficiency cause and correctly separates drug efficacy from proof of cause. The Moncrieff review is a relevant umbrella synthesis, but the body treats it nearly as the final evidentiary verdict, while the review itself reports variable source quality. The lab has prediction, classification, and transfer but lacks a distinct concept-reveal/explain phase required by the current six-phase lab spec. The source Markdown link is also malformed by nested brackets. | Aspirin analogy, “involvement is not deficiency” distinction, claim-classification operation, privacy-preserving local storage | Diluting the correction into “we know nothing” or implying serotonin is irrelevant | State the target narrowly: the simple low-serotonin deficiency model is unsupported; serotonin systems can still be involved and antidepressant mechanisms remain more complex. Cite the review as one synthesis and standardize its publication year to the publisher record. Repair the lab by adding an explicit concept explanation, an open-ended explain response, and a completion summary before transfer. Fix the source link syntax. **Source + lab revision.** | High |

### Minimum repair sequence

1. Repair neuropeptide classification and establish stable language for transmitter, hormone, neuromodulator, and neuropeptide.
2. Calibrate dopamine once, then propagate the same wording through body, summary, glossary, Connections, questions, and Chapter 7 bridge.
3. Rebuild the Gage and H.M. inference paragraphs and associated questions using modern lesion anatomy.
4. Narrow the evolutionary-mismatch language without removing the functional/comparative spine.
5. Decide whether to split Section 2; then compress Section 4’s anatomy catalog.
6. Repair ANS/tend-and-befriend wording and inspect Figure 3.9.
7. Rebalance objectives, retrieval prompts, review questions, glossary, and Connections.
8. Repair the chemical-imbalance lab to the current lab specification.
9. Regenerate HTML once and run content, link, figure, lab, desktop, and mobile validation.

## F. Hedging and qualification audit

### Qualifications that materially protect accuracy

Keep these boundaries:

- Figure 3.1’s anti-ladder statement.
- The distinction between a chemical’s involvement and a one-chemical cause.
- The statement that dopamine effects depend on pathway, receptor, circuit, and task.
- The case-study limitation that one lesion cannot assign a function exclusively to one subregion.
- The split-brain boundary between surgical patients and intact-brain personality claims.
- The network caveat accompanying lobe and amygdala labels.
- The dopamine lab’s explicit statement that its units are schematic and the classical model is incomplete.

### Qualifications to consolidate

- Dopamine caveats should appear once in the main explanatory passage and once in the lab’s concept reveal; they should not be restated differently in every surface.
- The “regions are networked” caveat appears in the lobe caption, network paragraph, Gage paragraph, H.M. paragraph, split-brain paragraph, amygdala paragraph, summary, and glossary. Keep the full explanation in the network paragraph; use brief reminders elsewhere.
- The chemical-imbalance box repeats circuit/context language already established in the neuromodulator section. The box should focus on the causal-inference error and use one closing sentence to reconnect to circuits.

### Places where the claim is hard to recover

The serotonin paragraph offers inhibition, patience, waiting, persistence, receptor context, and contrast with dopamine without a single stable claim. Either shorten it to a misconception correction or give it a clear first sentence: serotonin is a widely projecting modulatory system whose effects vary across receptors and circuits; “happiness chemical” is not a useful model.

The oxytocin paragraphs simultaneously teach signaling category, social context, affiliation, vigilance, outgroup wariness, HPA attenuation, attachment, and stress regulation. The category correction is the essential job. The behavioral claims should be shortened and cited or moved to Chapters 10 and 12.

### Overrepresented caution in assessment

The chapter does not generally over-hedge, but its assessment overrepresents “what the evidence cannot establish.” Q4, Q7, Q9, Q10, and Q12 all test calibration or myth correction. Those are valuable, but students also need to apply signaling route, receptor/circuit context, excitation/inhibition, and fast-versus-slow regulation. Replace at least two evidence-status questions with mechanism/application items.

## G. Alignment decisions

### Objectives

Current LO1 and LO2 are strong after scientific wording repairs.

**LO3: revise and split internally.** It currently asks students to identify anatomy, describe contributions, and explain network oversimplification in one item. Use: “Relate selected brain structures to the operations they contribute to, and explain why psychological functions emerge from networks rather than isolated regions.”

**LO4: revise.** It names only sympathetic and parasympathetic branches while the section also depends on the slower endocrine route. Use: “Distinguish fast autonomic and slower endocrine components of stress regulation, and explain why prolonged activation can become costly.”

**LO5: retain with updated case language.** Use medial-temporal rather than hippocampus-only wording.

**LO6: revise.** “Explain why a mechanism exists” invites just-so explanation. Use: “Generate a functional hypothesis for a neural or hormonal mechanism and distinguish that hypothesis from evidence about its immediate mechanism or evolutionary history.”

### Retrieval and practice

- Section 1 has a strong structural retrieval prompt and an aligned lab.
- Section 2 has a good wired-versus-broadcast retrieval prompt, but needs one additional discrimination after E/I or neuromodulation: “Does the chemical name alone tell you whether the next cell is excited, inhibited, or modulated? What information is missing?”
- Section 3 has a self-reference prompt but no retrieval interruption. Add a fast-neural-versus-slower-endocrine classification.
- Section 4’s Gage retrieval prompt is useful but currently presupposes an overclean answer. Revise it to ask what the case is consistent with and what remains uncertain.
- The AI comparison should use AI-after-effort if retained: ask students first to list biological features omitted from the artificial-neuron abstraction, then reveal the comparison.

### Review questions

- **Q1: keep.** It tests the all-or-none misconception.
- **Q2: keep with a small revision.** Make route primary and treat timescale/distance as common consequences rather than absolute criteria.
- **Q3: revise.** Restrict to phasic activity in a well-studied subset of midbrain dopamine neurons during reward-learning tasks.
- **Q4: keep.** Correct fMRI timing language in the rationale.
- **Q5: revise.** Replace “continuous, balanced” with “simultaneous, shifting, and organ-specific.”
- **Q6: replace or substantially revise.** Test prolonged/repeated activation costs without claiming stress evolved only for brief physical threats.
- **Q7: revise.** Ask what later reconstructions added and why they remain estimates; include network damage and lack of tissue.
- **Q8: revise.** Ask what the bilateral medial-temporal case established about declarative versus procedural memory; remove “not storing old memories.”
- **Q9: keep.**
- **Q10: keep with wording repair.** “Useful first-pass shorthand that becomes misleading if treated as a dedicated fear organ” is preferable to “defensible fear center.”
- **Q11: keep with a small revision.** Replace “every neuron” generalization with widely conserved membrane mechanisms.
- **Q12: keep.** It is the chapter’s strongest causal-inference transfer item.

Add or substitute one item on excitation/inhibition and one on fast neural versus slower endocrine signaling. Twelve total is appropriate; the problem is distribution, not count.

### Summary

The summary preserves the main arc but strengthens several claims. Revise after the body is stable:

- “Cephalization evolved to solve” → “Directional movement helps explain why…”
- “mechanism most psychiatric drugs target” → “a major target of many psychoactive drugs”
- dopamine primary-role sentence → restricted RPE language
- cortisol/CGM sentence → coordinated energy mobilization
- Gage and H.M. sentences → frontal/network and medial-temporal/separable-memory wording

### Glossary

Forty-one terms are too many for a retrieval glossary and many entries contain more than one hard idea. Retain approximately 20–24 terms that carry the chapter’s argument. Candidate core set:

action potential; all-or-nothing principle; autonomic nervous system; cephalization; cortisol; dopamine; endocrine system; excitation/inhibition; glial cells; hippocampus/medial temporal lobe; hormone; myelin; neuron; neuromodulator; neuropeptide; neurotransmitter; parasympathetic nervous system; prefrontal cortex; receptor; reuptake; split-brain; sympathetic nervous system; synapse.

Move lobe names and basic neuron parts into a compact anatomy reference or retain them only if the course expects glossary retrieval. Rewrite neuropeptide, dopamine, serotonin, hippocampus, limbic system, and cortisol after body revision.

### Connections

Reduce from 11 rows to 7–8. Retain dopamine-learning, drug mechanisms, hypothalamus-sleep, hippocampal/MTL-memory, cortisol-stress, sensory transduction, and split-brain-language. Consider retaining oxytocin only after its claims are calibrated.

Remove or replace:

- “Dopamine’s predictive-error signal is the chemical mechanism underlying reinforcement learning.”
- Gage as a direct bridge to “risk factors for antisocial personality disorder.”
- The orchid/dandelion connection, which shares a broad evolutionary lens but not a sufficiently direct mechanism.
- H.M. as proof of forming rather than storing memory.

## H. Figures and lab-gap decision

### Figure decision

The chapter manifest is unusually complete: filenames, captions, alt text, attribution, and public-sharing status are recorded. All ten figures are reported as wired in both source and HTML. Generated originals remain marked pending final biological-accuracy review.

This connector session could inspect paths, captions, alt text, source/HTML placement, and manifest status, but it did not produce reliable full-resolution renderings of every image binary. The decisions below are therefore content-level decisions and remain conditional on direct visual inspection before publication approval.

| Figure | Decision |
|---|---|
| 3.1 nervous-system centralization | **Use now with caption wording check.** Preserve anti-ladder caveat; consider “coordination systems” rather than “command systems.” |
| 3.2 neuron anatomy | **Use now pending binary check.** Because it labels Schwann cells, ensure students are not led to generalize a PNS myelinating cell to all CNS myelin. |
| 3.3 action potential | **Use now.** Keep voltage values explicitly typical/schematic. |
| 3.4 myelin/saltatory conduction | **Use now.** The caption is more accurate than the prose; revise prose to match passive current spread plus nodal regeneration. |
| 3.5 neurotransmitter versus hormone | **Use now.** Keep receptor-bearing target qualification in caption/alt text. |
| 3.6 synaptic transmission | **Use now with minor caption/body alignment.** Present reuptake and enzymatic degradation as important routes, not exhaustive routes. |
| 3.7 excitation/inhibition | **Use now pending binary check.** Ensure inhibition is not visualized only as simple hyperpolarization and that receptor context is not contradicted. |
| 3.8 dopamine/serotonin projections | **Use now with direct inspection.** Ensure pathways are representative rather than exhaustive and do not label either transmitter with one psychological function. Change “same chemical family” in the manifest caption to “same molecule” or “a neuromodulator.” |
| 3.9 autonomic balance | **Revise if the artwork presents tend-and-befriend as a third autonomic branch or equally settled reflex.** Preserve organ-level push-pull teaching job. |
| 3.10 lateral lobes | **Use now.** Network caveat makes the locator figure instructionally defensible. |
| Video 3.1 saltatory conduction | **Use now pending live test.** Verify captions, reduced-motion expectations, poster loading, and mobile playback. |

No new figure is justified. The unwired fast-neural/slow-hormonal stress flowchart remains optional; a compact table or two-pathway sentence may do the job with less page load.

### Lab-gap decision

**No new Chapter 3 lab is justified. Reuse two labs and revise one.**

- **Action Potential Threshold:** retain. It follows prediction → manipulation → explicit concept explanation → explain → transfer → summary, uses sessionStorage, and provides text equivalents.
- **Dopamine Prediction Error:** retain. It is better calibrated than the chapter prose because it names a simplified teaching model, avoids fabricated empirical units, and states the model’s limits.
- **Chemical Imbalance Claim-Check:** revise. Preserve classification and causal-inference transfer, but add the current lab specification’s explicit concept-reveal and open-ended explain phases before transfer. The prediction currently asks which category will be hardest rather than committing to a substantive claim; a better prediction would ask whether medication efficacy proves a pre-existing deficiency.

The backlog says to live-test “both” Chapter 3 labs, but the repository now contains three. Live-test all three at desktop, portrait-mobile, and landscape-mobile widths, including restore/reset and keyboard focus.

## I. Source/HTML, citation, and pipeline routing

### Authority and parity

- **Source of truth:** `source/chapters/ch03-neuroscience-biological-bases.md`
- **Generated output:** `docs/chapters/03-neuroscience.html`
- **Figure metadata:** `docs/images/ch03/README_captions_alt_text_attribution.md`
- **Provenance:** `source/chapters/_provenance/ch03-neuroscience-biological-bases.md`

Spot checks show current semantic parity in the opener, objectives, neuron section, figure paths, captions, and callout structure. The manifest states all ten figures are wired in source and HTML with matching alt text. The generated page therefore appears current enough for audit purposes. It should become stale intentionally once source revision begins and should then be regenerated once after the canonical source stabilizes.

The chemical-imbalance lab link in the source uses nested Markdown brackets and should be rewritten as one valid link. Do not patch the rendered page alone.

### Citation repairs

Add or update:

- Annese, J., et al. (2014). *Postmortem examination of patient H.M.’s brain based on histological sectioning and digital 3D reconstruction*. **Nature Communications, 5**, 3122.
- Van Horn, J. D., et al. (2012). *Mapping connectivity damage in the case of Phineas Gage*. **PLOS ONE, 7**(5), e37454.
- van den Pol, A. N. (2012). *Neuropeptide transmission in brain circuits*. **Neuron, 76**(1), 98–115.
- Complete Gershman et al. (2024) as **Nature Neuroscience, 27**, 1645–1655.
- Standardize Moncrieff et al. to the publisher’s volume citation: **Molecular Psychiatry, 28**, 3243–3256 (2023; first published online in 2022), then use one year consistently.
- Add a source for the fMRI hemodynamic timing/inference paragraph.
- Add current support or narrow/remove specific claims about stimulant mechanisms, oxytocin social effects, breathing-based parasympathetic regulation, and the CGM example.
- Add a comparative-neurobiology source for the action-selection/cephalization spine because it is a load-bearing claim, not merely background.

Existing Sapolsky lecture material should remain clearly an explanatory illustration rather than the primary evidentiary source.

### Pipeline and state routing

The following belong to the source revision: definitions, case-study claims, section structure, objectives, retrieval, summary, glossary, Connections, questions, and citation list.

The following belong to later figure review: direct binary inspection of Figures 3.2, 3.7, 3.8, and especially 3.9; any minimal caption/art correction.

The following belong to lab revision: Chemical Imbalance Claim-Check structure and live testing of all three labs.

The following belong to later regeneration/validation: source–HTML parity, anchors, figure expansion, alt text, video loading, lab links, sidebar state, mobile overflow, and no mojibake.

The stale “both Chapter 3 labs” backlog wording is a project-state documentation issue, not a chapter defect. Do not update it until the audit is accepted and revision scope is chosen.

## J. Decisions requiring Jon’s judgment

1. **Section architecture:** split Section 2 into two major sections, producing five total, or retain four sections with stronger internal navigation. The split is pedagogically cleaner and stays within the chapter specification.
2. **AI connection:** keep in the main flow or move to a sidebar/optional enrichment block. The content is useful, but it currently interrupts the biological signaling-scale progression.
3. **Tend-and-befriend:** retain as a short proposed framework in the main stress section or move it to a sidebar/Chapter 12 bridge. It should not remain visually equivalent to a settled autonomic branch.
4. **Glossary strategy:** reduce to a core retrieval glossary or preserve broad anatomical coverage in a separate reference table. The current 41-term single glossary is not serving retrieval well.
5. **Case-study balance:** retain both Gage and H.M. at current narrative prominence, or shorten H.M. after repairing the inference. Both are strong recurring cases; the default recommendation is to keep both and narrow, not remove.
6. **Serotonin scope:** retain the brief patience/waiting contrast or reduce serotonin to a projection-system and “not happiness” correction. The current paragraph attempts more than the evidence and chapter need require.

## K. Revision constraints

### Must preserve

- Brain/action-selection organizing argument.
- Comparative body-plan framing and anti-ladder warning.
- Gage cold open and return structure.
- Hodgkin–Huxley comparative-method example.
- Wired/focal versus bloodstream/broadcast distinction.
- Inhibition as constructive circuit selection.
- Sapolsky cue-shift teaching example, with restricted dopamine scope.
- Aspirin/headache causal-inference analogy.
- Acute-benefit/prolonged-cost stress distinction.
- Push-pull autonomic model.
- Lego-brain/network correction.
- H.M. procedural/declarative dissociation.
- Split-brain/pop-personality correction.
- Biological/artificial neuron breakdown point, even if moved.
- Current action-potential and dopamine labs.

### Must correct

- Neuropeptide definition in body and glossary.
- Dopamine RPE scope across all surfaces.
- Gage lesion anatomy and “selectively spared” inference.
- H.M. pure-hippocampus and “forming not storing” inference.
- Stress evolutionary-mismatch and cortisol-only glucose language.
- Tend-and-befriend/oxytocin certainty.
- fMRI temporal-lag wording.
- “Every neuron,” internodes “cannot fire,” and exhaustive synaptic-clearance language.
- LO6’s invitation to infer adaptive purpose as fact.
- Q3, Q5, Q6, Q7, and Q8.
- Summary, glossary, and Connections claims that exceed the body.
- Chemical-imbalance lab architecture and malformed source link.

### Must not happen

- Do not convert the chapter into a conventional region-and-neurotransmitter catalog.
- Do not remove the evolutionary/comparative lens because some functional claims need calibration.
- Do not eliminate Gage or H.M. when a narrower inference solves the problem.
- Do not replace the Sapolsky example with abstract computational prose.
- Do not turn “dopamine is not just pleasure” into “dopamine is prediction error.”
- Do not turn “chemical imbalance is not an established simple cause” into “serotonin is irrelevant” or “antidepressants do not work.”
- Do not repeat the same network or uncertainty caveat in every paragraph.
- Do not add a new figure or lab until the existing assets are evaluated against the revised cognitive operation.
- Do not patch generated HTML before the authoritative Markdown is stable.
- Do not let correction erase the chapter’s short landing sentences or direct student address.

## Appendix: Low-impact mechanical findings

- The image manifest says Figure 3.8’s caption uses “the same chemical family”; the intended meaning is likely the same molecule or a neuromodulatory signal.
- The provenance file says nine active figures, while the current manifest and chapter contain ten figures plus one video. Provenance is a convenience history, but the discrepancy should be corrected during a later metadata pass.
- The figure manifest’s generated-original attribution is complete but remains “pending final biological accuracy review”; do not change public-sharing status until direct binary inspection is complete.
- “Schwann cells” in Figure 3.2 is appropriate for peripheral myelin but should not stand as the unqualified myelinating cell for the whole brain.
- “Save transfer response locally” in the chemical-imbalance lab is technically sessionStorage, not persistent localStorage; the privacy text is accurate, but the button label could say “Save response for this session.”
- Further Reading and References are correctly separated.
- The chapter-ending order is Summary → Connections → Review Questions → Key Terms → Further Reading → References, which matches the current chapter specification.
