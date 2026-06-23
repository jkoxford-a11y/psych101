# Chapter 3: Neuroscience and Biological Bases of Behavior

> Draft v0.3 — 2026-06-23 | Status: revised draft (compression + restructure per Jon review)
> Word count target: 3,500–5,000 body words | AI touchpoints: moderate (artificial vs. biological neurons)
> Copyright note: all 19 BIO-* concepts in `concept_lineage_revised.csv` are flagged `instructor-original` / `canonical-common-knowledge` with `wording_change_driver` of `publisher-template-change` or `n/a` — none require Noba/APA IPI substitution. Drafted directly from course materials and standard primary literature.
> Figures: 7 active figures (3.1–3.7 in revised numbering). Fig 3.5 (agonist/antagonist, formerly Fig 3.5) and Fig 3.8 (imaging comparison table) removed from main chapter flow — files retained in `docs/images/ch03/` for slides/reference. Six GPT-generated originals; three rendered from Jon's own "6 Chapter 2 Biology.pptx" lecture slides. See `docs/images/ch03/README_captions_alt_text_attribution.md` for attribution/alt text.
> v0.3 changes: (1) agonist/antagonist section and Fig 3.5 removed from chapter flow; (2) neurotransmitter section restructured around excitation/inhibition + neuromodulation principle, dopamine as the single worked example (Sapolsky/prediction-error framing + ADHD connection); serotonin, GABA, oxytocin removed as named catalog entries; (3) sickness behavior/depression paragraph cut; (4) brain imaging reduced to fMRI focus; Fig 3.8 removed from flow; (5) localization-vs-network paragraph added before Gage; (6) Harlow (1868) added for personality-change account; (7) AI sidebar compressed; (8) figures formerly numbered 3.6, 3.7, 3.9 renumbered to 3.5, 3.6, 3.7 in captions.

---

## Misconception Opener

*"We only use 10% of our brains."*

You have heard this claim so many times that it probably feels like settled science — it shows up in movies, motivational posters, and at least one major motion picture built entirely around the premise. It is also false, and has been false for the entire time it has been popular (Beyerstein, 1999).

Here is how we know. Brain imaging studies — the same techniques described later in this chapter — show activity distributed across the brain over the course of a day, not confined to some unused 90%. Clinical neurology tells the same story from the opposite direction: damage to almost any region of the brain, however small, produces a detectable change in behavior, sensation, movement, or personality. An organ with 90% spare capacity should not work that way. And evolution would not have allowed it to: the human brain is metabolically ruinous to build and run, consuming roughly 20% of your resting energy budget while making up only about 2% of your body weight (Raichle & Gusnard, 2002). Natural selection does not tolerate that kind of expense for tissue that mostly idles. If 90% of the brain were doing nothing, there would have been overwhelming pressure to shrink it.

So why does the myth survive? Probably because it is a comforting one — it implies a vast reservoir of untapped potential, just waiting for the right trick to unlock it. The truth is less flattering and more interesting: you are already using your whole brain, all the time, and the differences between a typical brain and an exceptional one are mostly about *how* particular circuits are organized and tuned, not how much unused real estate is lying around.

This chapter is about that machinery — what it is built from, how it signals, and how a small set of structures and chemicals produce the entire range of what you think, feel, and do.

---

## Where This Fits

Chapter 1 introduced the biological perspective as one of several lenses for explaining behavior, and flagged the evolutionary framing as a habit of mind this course returns to often. This chapter cashes in both promises: it is where the physical mechanism actually gets explained, and where the question "what problem did this solve?" gets applied to real anatomy and real chemistry. Everything later in this book leans on what is built here. Sensation and perception (Chapter 4) is what sensory neurons do with incoming information; learning (Chapter 6) is partly the story of dopamine and synaptic change; memory (Chapter 7) is largely a hippocampal story; motivation, emotion, and stress (Chapters 12 and 13) run on the amygdala, cortisol, and the autonomic nervous system covered here. If this chapter feels like vocabulary-heavy infrastructure, that is because it is — but it is infrastructure you will use in every chapter that follows.

---

## Learning Objectives

By the end of this chapter, you should be able to:

1. Describe the structure of a neuron and explain how the action potential is generated and propagated.
2. Distinguish neurotransmitters from hormones, and explain how neuromodulatory systems — using dopamine as the primary example — change how circuits operate rather than simply causing specific feelings or behaviors directly.
3. Identify the major structures of the brain covered in this chapter and describe what each contributes to behavior — while explaining why "structure X does function Y" is an oversimplification psychological science keeps having to correct (APA IPI Theme 5: our perceptions and biases, including about how the brain works, can be inaccurate).
4. Explain how the sympathetic and parasympathetic nervous systems coordinate the body's stress response, and connect that response to its evolutionary function (APA IPI Theme 3: biological, psychological, and social factors interact to shape behavior).
5. Evaluate the Phineas Gage and split-brain cases as evidence for localization of function, including what each case can and cannot establish on its own.
6. Apply the evolutionary/comparative lens to explain why a specific neural or hormonal mechanism exists, not just how it operates.

---

## Section 1: How Neurons Talk — Structure and the Action Potential

In 1848, a 25-year-old railroad foreman named Phineas Gage was tamping explosive powder into a hole in the rock with a 13-pound iron rod when the powder detonated. The rod shot upward through his left cheek, behind his eye, and out through the top of his skull, landing some 80 feet away (Harlow, 1848). He did not lose consciousness. He sat up in the cart that carried him back to town and, by most accounts, was talking within minutes. We return to what happened to Gage's personality later in this chapter — for now, the case makes a useful opening point: an iron rod traveling through several inches of brain tissue at high speed destroyed an enormous number of individual cells, and Gage survived, because no single neuron does anything the brain cannot route around, compensate for, or simply do without. To understand why that is true — and why some kinds of damage matter enormously while others barely register — you need to understand what a single neuron actually is and how it works.

A **neuron** is a cell specialized for receiving, processing, and transmitting information through electrochemical signals. Three parts matter most for our purposes. **Dendrites** are the branching extensions that receive input from other neurons — think of them as the receiving antennae, typically numerous and richly branched, since a single neuron can receive signals from thousands of others. The **soma**, or cell body, contains the nucleus and the machinery that keeps the cell alive. The **axon** is the single long output fiber that carries the neuron's signal away from the soma toward the next cell in the chain, sometimes for a distance of more than a meter, as in the neurons running from your spinal cord to your toes. Many axons are wrapped in **myelin**, a fatty insulating sheath produced by support cells called glia; myelin is interrupted at regular gaps called nodes of Ranvier, and this matters for speed, which we get to shortly. Where the end of one neuron's axon meets the next neuron — typically at a dendrite — there is a tiny gap called the **synapse**, across which communication switches from electrical to chemical.

![Figure 3.1 — A neuron showing dendrites receiving input, a soma integrating it, a myelinated axon with nodes of Ranvier, and axon terminals forming synapses with the next cell](../images/ch03/fig3_1_neuron_anatomy_signal_direction.png)
*Figure 3.1. Information enters through the dendrites, gets integrated in the soma, and travels down the axon as output — myelin speeds the trip along the way.*

There are, by a widely used estimate, roughly 86 billion neurons in an adult human brain (Herculano-Houzel, 2009) — though you will also encounter the older figure of 100 billion in many textbooks (Williams & Herrup, 1988); the revision happened because a better counting method (literally dissolving brain tissue into a uniform "soup" and counting nuclei) came along decades after the original estimate. That revision is worth sitting with for a moment: even a number this basic, about an organ humans have been dissecting for centuries, was wrong by a meaningful margin until fifteen years ago. Psychological and biological science revises its facts as better methods become available (APA IPI Theme 1) — that is a feature of the enterprise, not an embarrassment.

> **Stop and Retrieve:** Before reading on — name the three main parts of a neuron and state, in one sentence each, what each one does.

Neurons are not the only cells in the brain. **Glial cells** outnumber neurons by a roughly comparable amount and perform support functions: forming myelin, clearing waste, regulating the chemical environment around neurons, and more. For decades, glia were dismissed as mere "packing material" around the neurons that did the real work — a framing that more recent research has substantially revised, though the full story of what glia contribute to information processing itself is still being worked out, and it would overstate the current evidence to claim they "think" the way neurons do.

### The Action Potential

Here is the question those structures exist to answer: how does a signal actually move down a neuron and jump to the next one?

At rest, a neuron maintains a voltage difference across its cell membrane of about −70 millivolts (the inside is negative relative to the outside) — the **resting potential**. This is maintained through the unequal distribution of charged particles (ions) — chiefly sodium and potassium — held in place by selectively permeable channels in the membrane and an energy-consuming sodium-potassium pump that continuously corrects the imbalance.

When a neuron receives enough excitatory input from other neurons to push that voltage up past a threshold (roughly −55 mV), something dramatic and very fast happens: voltage-gated sodium channels snap open, sodium rushes into the cell, and the voltage spikes rapidly upward — this rapid depolarization, followed by a return to resting potential as potassium flows back out, is the **action potential**. The key working principle of our foundational understanding of this process, the **all-or-nothing principle**, is that an action potential either fires at full strength or does not fire at all — there is no such thing as a weak action potential, the way there is no such thing as half of a binary digit. Strength of stimulation changes how *often* a neuron fires, not how *big* any individual spike is. Immediately after firing, the neuron enters a brief **refractory period** during which it cannot fire again, which is part of why signals travel down the axon in one direction rather than sloshing back and forth.

Our basic model of this entire process comes from work that, on its face, has nothing to do with human psychology: Alan Hodgkin and Andrew Huxley's experiments on the giant axon of the squid, conducted using equipment built largely from spare parts in the years around World War II (Hodgkin & Huxley, 1952). The squid's giant axon is roughly 100 times the diameter of an axon in the mammalian brain — easy to see and to thread an electrode into, and responsible for the squid's defensive jet-propulsion escape from predators. Hodgkin and Huxley were not asking "how do humans think" — they were asking how this one cell does what it does. They won a Nobel Prize for the answer, and the principles they described turn out to apply, with only minor modification, to every neuron in your body. This is the **comparative method** at its most direct: a mechanism studied in one species, chosen because it happened to make the mechanism easy to see, turning out to generalize across an enormous evolutionary distance. You will see this pattern again throughout this chapter — the prairie vole, the lab rat, even the squid, are not stand-ins for "simpler" versions of humans; they are organisms in which evolution happened to build a particularly legible version of a mechanism we share.

Myelin matters here because of speed. On an unmyelinated axon, the action potential must regenerate, point by point, along the entire membrane — slow, and metabolically expensive. On a myelinated axon, the insulated stretches cannot fire at all, so the signal effectively skips from node to node, a process called **saltatory conduction** (from the Latin for "to leap"). This is faster and cheaper, which is one reason the disease multiple sclerosis, which destroys myelin, produces such a wide range of motor and sensory disruption: it does not destroy the neurons, but it badly degrades the speed and reliability of the signal traveling through them.

![Figure 3.2 — Line graph of membrane voltage over time showing a failed subthreshold response and a full action potential after threshold is crossed, followed by a refractory period](../images/ch03/fig3_2_action_potential_threshold.png)
*Figure 3.2. Above threshold, action potentials do not get bigger — stronger stimulation is represented mainly by firing rate, not spike size.*

> **Think About It:** You have probably had the experience of your foot or hand "falling asleep" and then experienced the prickling sensation as it wakes back up. Given what you now know about ion channels, pressure, and signal transmission, what do you think is actually happening to your neurons during that minute or two?

#### AI Connection

Artificial neural networks — the architecture behind most modern AI systems, including large language models — borrow their name and a loose structural idea from biological neurons: units that receive weighted input, sum it, and produce an output if some threshold is crossed. That much of the analogy is real.

But the analogy breaks at almost every level of mechanism. An artificial "neuron" is a mathematical function producing a continuously variable number — there is no membrane, no ion channel, no refractory period, no metabolic cost, and no all-or-nothing spike. Biological neurons communicate through chemically distinct neurotransmitters with different excitatory, inhibitory, and modulatory effects; standard artificial networks have no equivalent chemical diversity. And the precise millisecond timing of biological signals carries real information that most artificial networks discard entirely.

The breakdown is informative in both directions. "Neural network" is a name borrowed for inspiration, not a claim of mechanism-level equivalence. And the fact that evolution retained all of that biological complexity — the chemistry, the timing, the metabolic cost — is itself evidence that the complexity is doing real work the simplified artificial version cannot. When you hear someone say an AI system "thinks like a brain," that claim is doing considerably more work than the underlying mechanism supports.

![Figure 3.3 — Myth/reality card: a stronger stimulus does not produce a bigger action potential, it produces more of them](../images/ch03/fig3_3_misconception_action_potential_lecture.jpg)
*Figure 3.3. Pulling a trigger harder does not make the bullet faster — but you can fire more often. Firing rate, not spike size, is how the nervous system encodes intensity.*

> *[Demo placeholder — Jon: the action potential simulator from the "awesome-sauce_neuroscience" repo (threshold/all-or-none, voltage-gated channels, refractory period, saltatory conduction, each with a prediction challenge) fits here. Need the live embed URL to wire this in.]* **Predict, before interacting:** if you reduce the strength of a stimulus to a neuron, will the resulting action potential be smaller, or will it simply fail to occur at all? After interacting: was your prediction correct, and can you explain why in terms of the all-or-nothing principle?

---

## Section 2: Chemical Messengers — Neurotransmitters and Hormones

The action potential gets a signal to the end of an axon. What happens next — how that signal crosses the synaptic gap to influence the next cell, or how the body coordinates a response across organs that have no direct neural connection to each other — is a chemistry problem, not an electrical one.

#### Do Not Confuse: Neurotransmitter vs. Hormone

Both are chemical messengers, and the same molecule (dopamine and norepinephrine are good examples) can sometimes act as either one depending on where it is released. The distinction is about distance and delivery, not chemical identity.

A **neurotransmitter** is released by a neuron into a synapse and acts almost immediately on a neuron immediately across that tiny gap, milliseconds away. A **hormone** is released by an endocrine gland into the bloodstream and travels throughout the body to act on distant target cells, taking seconds to hours to have its effect and often lasting much longer once it does. Think of a neurotransmitter as a text message to one specific, adjacent contact, and a hormone as a public broadcast that every cell with the right receptor can pick up, wherever in the body it happens to be.

*Diagnostic question:* a person's adrenal glands release a chemical into their bloodstream during a stressful event, and that chemical's effects are still measurable twenty minutes later, in organs throughout the body. Neurotransmitter or hormone? (This is exactly the cortisol mechanism described later in this section — a hormone, by both the distance and the duration criteria.)

![Figure 3.4 — Two-panel diagram comparing a neurotransmitter crossing a synapse to a hormone traveling through the bloodstream to distant target cells](../images/ch03/fig3_4_neurotransmitter_vs_hormone.png)
*Figure 3.4. The distinction is delivery and distance, not the chemical's identity — the same molecule can sometimes act as either one.*

### Neurotransmitters

The nervous system uses dozens of different **neurotransmitters**, chemical messengers released from the presynaptic terminal that cross the synaptic gap and bind to receptors on the next cell. At the most basic level, their effect is directional: some are **excitatory**, pushing the receiving neuron closer to firing; others are **inhibitory**, pushing it further away. Inhibition is not "bad" — unchecked excitation produces seizures, and coordinated inhibition is what gives neural circuits their selectivity and timing.

But many neurotransmitters do something subtler than simply flipping a cell on or off. Some function primarily as **neuromodulators** — chemicals that adjust how entire circuits respond, changing their sensitivity, signal-to-noise ratio, or readiness for learning and action. The key point about neuromodulators is that the same molecule can produce different effects in different brain regions, depending on what receptors are present, what circuit is active, and what the organism is currently trying to do. The circuit, not the molecule alone, gives the signal its psychological meaning. "Chemical X causes feeling Y" is almost never an accurate description of how these systems work.

**Dopamine** is the clearest example of why this matters, and the most commonly mis-taught. It is almost universally described in popular accounts as the "pleasure chemical" — and that description is wrong in an instructive way. Careful neural recording in behaving animals found that dopamine neurons fire most strongly not at the moment a reward is consumed, but at the moment a reward is *predicted* — and they fire even more strongly when a reward arrives unexpectedly, or fire less when an expected reward fails to arrive (Schultz, 1998). This is a **prediction error signal**, not a pleasure signal. The Sapolsky framing of this finding has become a teaching fixture: imagine a light that reliably signals that a lever-press will be rewarded. After training, the dopamine surge moves from the reward to the light — dopamine encodes the *anticipation and pursuit* of reward, and it signals when expectations are violated. You will see exactly why this matters in Chapter 6, where that predictive error signal becomes the chemical basis of operant conditioning and reinforcement learning.

That framing also explains two phenomena that otherwise look unrelated. First, it explains why dopamine is so central to addiction: drugs of abuse hijack the same prediction and anticipation circuitry, making the cue that signals drug availability trigger the same kind of pursuit that natural rewards do. Second, it explains how stimulant medications used to treat ADHD work: by upregulating dopaminergic activity in prefrontal circuits, they strengthen the signal that sustains goal-directed behavior and keeps attention organized around a task rather than drifting. The connection between dopamine, motivation, and learning is one of the deepest threads in this course, and one we return to repeatedly.

The same logic — that a chemical's effect depends on context, circuit, and receptor — applies across neuromodulatory systems. Rather than cataloging them here, the next section introduces the hormonal arm of the same principle: the endocrine system coordinates longer-range, slower-acting versions of the same kinds of state changes.

> *[Demo placeholder — Jon: the neurotransmitter/dopamine mixing board from the "neuronew" repo fits naturally here. Need the live embed URL.]* **Predict, before interacting:** if you increase dopamine signaling in the circuit that tracks predicted reward, what do you expect to happen to how hard an animal works for a cue that signals future reward? After interacting: did the result match the Schultz prediction-error model?

### Hormones and the Endocrine System

The **endocrine system** is the body's network of glands — including the pituitary, thyroid, adrenal glands, and gonads — that secrete hormones directly into the bloodstream. Where the nervous system specializes in fast, precise, point-to-point signaling, the endocrine system specializes in slower, broader, longer-lasting coordination — adjusting growth, metabolism, reproduction, and the body's overall state over a timescale of minutes to weeks rather than milliseconds.

**Cortisol**, released by the adrenal glands in response to stress, is the clearest example of why this matters for psychology specifically. In a genuine emergency, a surge of cortisol mobilizes stored energy, sharpens certain kinds of attention, and temporarily suppresses functions — digestion, long-term tissue repair, parts of the immune response — that are not useful in the next sixty seconds. This is adaptive and necessary for short bursts. The trouble, as Robert Sapolsky's "Why Zebras Don't Get Ulcers" (2004) puts it, is that a zebra's stress response activates for the genuine emergency of being chased by a lion and then switches off once the lion is gone or the zebra is dead — the system was built for acute, time-limited threats. Humans, by contrast, can keep the same stress-response machinery running for weeks over a conflict with a coworker, a worry about money, or a relationship that is not going anywhere — chronic activation of a system built for sprints, not marathons. Chronically elevated cortisol is linked to impaired memory, suppressed immune function, and increased risk for several physical and psychological disorders. Chapter 13 develops the full picture of chronic stress; for now, the evolutionary point is the one worth holding onto — the stress response itself is not the problem. The mismatch between what it evolved for and how modern life actually deploys it is.

> **Stop and Retrieve:** In your own words — what is the key difference between how a neurotransmitter and a hormone deliver their message? Use the text-message/broadcast comparison or come up with your own.

---

## Section 3: The Body's Stress Response — The Autonomic Nervous System

Cortisol does not act alone. It is one half of a coordinated, whole-body stress response, and the other half is wired rather than chemical: the **autonomic nervous system**, the division of the peripheral nervous system that controls involuntary functions like heart rate, digestion, and breathing rate, without requiring any conscious effort on your part.

![Figure 3.5 — Flowchart showing a threat activating both the sympathetic nervous system for rapid bodily changes and the adrenal cortisol pathway for slower, longer-lasting effects](../images/ch03/fig3_6_stress_response_fast_slow.png)
*Figure 3.5. A threat triggers two pathways at once: a fast neural route through the sympathetic nervous system (seconds) and a slower hormonal route through adrenal cortisol (minutes to hours). Section 2 covered the chemistry; this section covers the wiring.*

The autonomic nervous system has two branches that work in approximate opposition. The **sympathetic nervous system** is the "fight-or-flight" branch: it accelerates heart rate, dilates pupils, redirects blood flow toward large muscles, and suppresses digestion — the same general profile of changes that cortisol produces over a slower timescale, but achieved through direct nerve signaling that can take effect in a second or two rather than minutes. The **parasympathetic nervous system** is the "rest-and-digest" branch: it slows heart rate, constricts pupils, and supports digestion and recovery — the state your body defaults toward once a threat has passed.

![Figure 3.6 — Sympathetic and parasympathetic branches shown as two opposing accelerators rather than an on/off switch, with what each is doing right now and applied examples](../images/ch03/fig3_7_ans_balance_lecture.jpg)
*Figure 3.6. Stress pushes the sympathetic accelerator up; deep breathing pushes the parasympathetic accelerator up. Both are always running — the balance between them is what you feel.*

These two branches are best understood as a coordinated push-pull system rather than an on/off switch — at any given moment, both are exerting some influence, and what you experience as "calm" or "keyed up" reflects the balance between them. This matters practically: most relaxation and anxiety-management techniques you will encounter, in this course or in a clinical setting, work by deliberately activating the parasympathetic branch — slow, deep breathing is the most direct example, since the rate and depth of breathing has a measurable, fairly fast effect on which branch of the autonomic nervous system is currently dominant.

The evolutionary logic of the sympathetic branch is direct: an organism that detects a threat and does not rapidly redirect resources toward escape or confrontation is at a survival disadvantage relative to one that does. The same logic that makes the acute cortisol response useful for a genuine emergency, and poorly matched to a six-week conflict at work, applies here. A racing heart and dry mouth before a public-speaking assignment are your sympathetic nervous system doing exactly what it evolved to do, deployed against a target — social evaluation rather than physical danger — that it was never built to distinguish from a real threat.

> **Think About It:** Think of the last time you felt your heart race or your stomach drop before something — a test, a conversation, a performance. Looking back, was the situation an actual physical threat, or was your sympathetic nervous system responding to something else (social evaluation, uncertainty, anticipated failure) as though it were one?

---

## Section 4: The Brain — Structure, Localization, and Its Limits

We now have the building blocks: the neuron, the action potential, the chemical messengers. This section turns to where those building blocks are organized into the large-scale structures that produce the things this course is actually about — memory, emotion, personality, language, decision-making.

### Studying the Brain

Before describing what specific structures do, it is worth being honest about how we know what we claim to know — because the methods carry real trade-offs that affect how confidently any particular claim can be made.

The most widely cited tool in contemporary cognitive and social neuroscience is **fMRI** (functional magnetic resonance imaging), which tracks blood-flow changes as a proxy for neural activity. It offers good spatial resolution — down to a few millimeters — which is why it generates those colorful activation maps you have probably seen accompanying brain-science news stories. But blood flow changes lag the actual neural event by a second or more, so its temporal precision is poor. More importantly, an fMRI activation map does not show you what the brain is doing in any direct sense. It shows which regions had relatively greater blood flow during one condition compared to a comparison condition — a contrast that still requires careful experimental design, statistics, and interpretation before it says anything about behavior. A colorful activation blob tells you a region was more active under those specific conditions; it does not tell you that the region *causes* the behavior, or what the person was thinking.

Other methods — EEG for millisecond-level timing, PET for tracking specific receptor systems, lesion studies and animal models for establishing causal roles — each answer different questions with different trade-offs. No single method gives you the full picture. When you see a headline reading "scientists found the brain region responsible for X," the method used to generate that finding is always worth asking about.

### Cortex, Lobes, and the Limbic System

The **cerebral cortex** is the wrinkled outer layer of the brain most people picture when they picture "the brain" — and it is conventionally divided into four **lobes** per hemisphere. The **frontal lobe**, at the front, handles planning, decision-making, and voluntary movement, and contains the **prefrontal cortex**, the region most associated with executive function — impulse control, weighing long-term consequences, and regulating emotional responses generated elsewhere in the brain. The **parietal lobe**, toward the top and back, integrates sensory information and supports spatial processing. The **temporal lobe**, roughly at ear level, is heavily involved in auditory processing, language comprehension, and — critically for the next subsection — memory. The **occipital lobe**, at the very back, is dedicated almost entirely to visual processing, a topic Chapter 4 develops at length.

Beneath the cortex sits the **limbic system**, a set of interconnected structures most associated with emotion, motivation, and memory — not a single, sharply bounded anatomical unit so much as a useful grouping of structures that tend to work together on these problems. The **hippocampus**, shaped (and named) for its resemblance to a seahorse, is essential for forming new long-term memories, particularly the conversion of short-term experience into lasting storage. The **amygdala** is most associated with processing fear and threat-related emotion, and with attaching emotional weight to memories — which is a large part of why frightening or threatening experiences tend to be remembered more vividly than mundane ones.

### Brain Regions Are Specialized, but Behavior Is Networked

Before examining the case studies, it is worth stating the organizing principle explicitly. The question is not whether different brain regions do different things — they do, and the evidence is strong and comes from multiple converging methods. The question is what kind of specialization is actually there.

A common student model is what might be called Lego-brain thinking: this region does fear, that one does memory, another does language, and you could in principle label every function onto a map. The more accurate model is that regions contribute specific computational operations to functions that are distributed across circuits. The amygdala is heavily involved in threat detection and emotional memory — but it is one node in a circuit that also includes sensory cortex, prefrontal cortex, and hippocampus. The prefrontal cortex is essential for impulse control — but its behavioral influence depends on its connections to the limbic structures it modulates. Damage to one node disrupts the circuit; that is why lesion evidence (like Gage's case below) can tell you what a region *contributes* without proving it acts alone or that the function belongs exclusively to it.

#### Classic Study: Phineas Gage and the Limits of "Where" Versus "What"

Return to Gage, from the opening of this chapter. He survived the accident, recovered physically within weeks, and lived another twelve years — but according to his physician, John Martyn Harlow, the accident changed who he was. Harlow's 1848 report documented the acute injury; it was his 1868 follow-up, written twenty years later, that contained the personality-change description that entered the textbooks: a man who had been regarded as responsible, shrewd, and capable, and who afterward became impulsive, profane, unable to settle on or follow through with plans, and generally unrecognizable in temperament to people who had known him before (Harlow, 1868).

For more than a century, the Gage case was treated mostly as folklore — vivid, often retold, and only loosely connected to precise anatomy, since nobody in 1848 could image a living brain. That changed in 1994, when researchers used measurements from Gage's actual skull (preserved at Harvard's Warren Anatomical Museum) combined with modern neuroimaging techniques to reconstruct, with far more precision than had previously been possible, exactly which brain regions the iron rod most likely destroyed: substantial damage to the left and right prefrontal cortex, the region this section just described as central to executive function and emotional regulation (Damasio et al., 1994).

The case is a genuinely good piece of evidence that prefrontal damage can selectively disrupt personality, impulse control, and emotional regulation while sparing memory, language, perception, and most other capacities — a strong demonstration that the brain has at least some functional specialization by region, rather than operating as an undifferentiated whole. It is a much weaker piece of evidence for any precise claim about exactly *which* prefrontal subregion does exactly *what*, because Gage's injury was not a clean, surgical lesion of one well-defined area — it was a chaotic path of destruction through several adjacent regions, observed in a single patient, reconstructed retrospectively from a 146-year-old skull and a doctor's prose description. Single dramatic case studies like Gage's are extraordinarily good for generating hypotheses and for making an abstract idea ("the prefrontal cortex matters for personality") vivid and memorable. They are much weaker for testing those hypotheses with precision — for that you need the kind of converging, repeated evidence — modern lesion studies in many patients, imaging studies, animal research — that the rest of this chapter draws on.

> **Stop and Retrieve:** What can the Phineas Gage case establish about brain function, and what can it not establish? Try to state the limitation in your own words before reading further.

#### Do Not Confuse: Hemispheric Specialization vs. the "Left-Brain/Right-Brain Personality" Myth

The cerebral cortex is split into two hemispheres connected by a thick band of fibers called the **corpus callosum**, which allows constant communication between them. In a small number of patients with severe, treatment-resistant epilepsy, surgeons have cut the corpus callosum to prevent seizures from spreading between hemispheres — producing what is called a **split-brain** patient. Roger Sperry and Michael Gazzaniga's studies of these patients in the 1960s produced some genuinely striking findings: because each hemisphere primarily receives sensory input from, and controls movement on, the opposite side of the body, and because (in most people) language production is concentrated in the left hemisphere, a split-brain patient shown a word in their left visual field (processed by the right hemisphere) might be completely unable to say what they saw, while still being able to draw or select it with their left hand — strong evidence that the two hemispheres really can process information somewhat independently when the connection between them is severed (Sperry, 1968).

This genuine and well-replicated finding is the seed of a much less accurate popular idea: that ordinary people (with an intact corpus callosum) are "left-brained" (logical, analytical) or "right-brained" (creative, intuitive) as a matter of dominant personality style. This version of the claim has been directly tested and does not hold up. A 2013 study analyzed resting-state brain connectivity data from over 1,000 people, looking specifically for evidence that strongly "lateralized" brain networks cluster together within the same individuals in a way that would support a stable left-dominant or right-dominant personality type. It found no such pattern: both hemispheres are highly interconnected and collaborate continuously on nearly every task, and individual differences in which specific networks happen to be more lateralized do not group people into two personality types (Nielsen, Zielinski, Ferguson, Lainhart, & Anderson, 2013).

![Figure 3.7 — Diagram showing how a word presented to the left visual field reaches the right hemisphere in a split-brain patient and can guide the left hand even when the patient cannot verbally report it](../images/ch03/fig3_9_split_brain_logic.png)
*Figure 3.7. A real clinical finding — measurable hemispheric specialization when the corpus callosum is severed — got overgeneralized into a popular personality myth about ordinary, intact brains.*

*Diagnostic question:* a friend tells you they are "definitely a right-brain person" because they are creative rather than analytical. What does the genuine split-brain research actually show, and why does it not support your friend's claim? (The split-brain findings show real functional differences between hemispheres *when the corpus callosum is severed* — they say nothing about personality differences between intact-brained individuals, which is the claim your friend is actually making.)

The broader lesson generalizes well beyond this one myth: a real, well-replicated finding from an unusual population (split-brain patients) got generalized, in popular culture, to a much broader and considerably less supported claim about ordinary brains. Watch for this pattern — it recurs constantly in how psychological findings get translated for a general audience, and you will have more chances to apply it as this course continues. It is also worth connecting back to BIO concepts already covered: the amygdala's association with fear works the same way. Calling the amygdala "the brain's fear center" is a defensible shorthand — the amygdala is heavily involved in fear and threat processing — but more recent work argues this oversimplifies a structure that contributes to several distinct functions, and is itself only one node in a larger, distributed circuit for emotional processing, not a single dedicated "fear organ" (LeDoux, 2012). Localization of function in the brain is real, but it is closer to "this region is heavily involved in and necessary for this function" than to "this region is solely responsible for this function and nothing else" — a distinction worth holding onto for the rest of this course.

> *[Connection to Chapter 7 — Memory: one of the most famous patients in the history of memory research, Henry Molaison ("H.M."), had both hippocampi surgically removed in 1953 to treat severe epilepsy, and as a result lost the ability to form new long-term declarative memories for the rest of his life, while his memory for events before the surgery, his language, and his intelligence remained largely intact (Scoville & Milner, 1957). H.M.'s case is the clearest single piece of evidence that the hippocampus introduced above is specifically necessary for *forming* new long-term memories, not for *storing* or *retrieving* old ones — a distinction Chapter 7 develops fully.]*

> **Think About It:** Before this section, did you believe some version of the left-brain/right-brain personality idea? If so, where do you think you picked it up — a teacher, a quiz, a piece of pop psychology? Now that you have seen the actual split-brain evidence and what it does and does not support, how would you explain the difference to someone who still believes the popular version?

---

## Chapter Summary

Neurons communicate through an electrochemical process: dendrites receive input, the soma integrates it, and if accumulated input crosses a threshold, an all-or-nothing action potential fires down the axon, accelerated where the axon is myelinated. This basic model, established through Hodgkin and Huxley's work on the squid giant axon, generalizes across an enormous range of species, including humans — a clean example of the comparative method.

Chemical messengers operate at two different scales. Neurotransmitters act locally across the synapse, either exciting or inhibiting the next cell; many also function as neuromodulators, adjusting the sensitivity and responsiveness of larger circuits rather than simply flipping individual neurons on or off. Dopamine is the clearest example: its primary role is encoding prediction error — signaling the gap between expected and actual reward — which makes it central to goal-directed behavior, operant conditioning, addiction, and ADHD. Hormones, including cortisol, act more broadly and slowly through the bloodstream, coordinating whole-body responses like the stress response. The sympathetic and parasympathetic branches of the autonomic nervous system provide the fast, wired counterpart to that same stress response, accelerating the body toward action or settling it back toward rest. Across both systems, the recurring evolutionary point is that these mechanisms were shaped for acute, time-limited demands, and much of their cost to modern humans comes from a mismatch between what they evolved for and how chronically they now get deployed.

The brain's major structures — the four cortical lobes, the limbic system, the hippocampus, the amygdala, and the two hemispheres joined by the corpus callosum — show real functional specialization, but two of this chapter's central cases, Phineas Gage and the split-brain patients, illustrate both what localization evidence can establish and how easily it gets overextended once it leaves the research literature for popular culture. The right conclusion is calibrated: specific brain regions are heavily involved in specific functions, evidence for that claim is strong and comes from multiple converging methods, and any version of that claim that becomes simple, dramatic, and personality-quiz-friendly should be treated with extra suspicion.

---

## Connections

| Concept from this chapter | Reappears in | Why it matters there |
|---|---|---|
| [Dopamine and reward prediction](#section-2-chemical-messengers--neurotransmitters-and-hormones) | Ch. 6 — Learning | Dopamine's predictive-error signal is the chemical mechanism underlying reinforcement learning; the Sapolsky framing introduced here becomes a working model |
| [Amygdala and emotional memory](#section-4-the-brain--structure-localization-and-its-limits) | Ch. 12 — Motivation & Emotion | The amygdala's role in threat appraisal and emotional weighting of memory is developed fully when emotion theory is covered |
| [Hippocampus / H.M.](#section-4-the-brain--structure-localization-and-its-limits) | Ch. 7 — Memory | H.M.'s case establishes the hippocampus's specific role in forming (not storing) new memories — and directly sets up the "memory is not a video camera" reframing Chapter 7 builds on |
| [Cortisol and the stress response](#section-3-the-bodys-stress-response--the-autonomic-nervous-system) | Ch. 13 — Stress & Health | The acute-versus-chronic mismatch introduced here is the organizing framework for the entire chapter on stress and health outcomes |
| [Prefrontal cortex / Phineas Gage](#section-4-the-brain--structure-localization-and-its-limits) | Ch. 11 — Personality; Ch. 14 — Psychological Disorders & Therapy | Frontal-lobe damage reshaping personality directly foreshadows the genetic and neurological risk factors discussed for antisocial personality disorder — a non-obvious link between a 19th-century case and a modern clinical diagnosis |
| [Evolutionary / comparative framing](#section-1-how-neurons-talk--structure-and-the-action-potential) | Ch. 1 — History & Approaches (review); Ch. 9 — Lifespan Development | Chapter 1 introduced this lens with caution about overclaiming; this chapter applies it directly to real mechanisms, and Chapter 9's gene-environment interaction work (the orchid/dandelion framing) extends the same logic to development |
| [Sensory neuron basics](#section-1-how-neurons-talk--structure-and-the-action-potential) | Ch. 4 — Sensation & Perception | The action potential mechanism covered here is reused without modification to explain how sensory receptors convert physical stimuli into neural signals |
| [Split-brain / hemispheric specialization](#section-4-the-brain--structure-localization-and-its-limits) | Ch. 8 — Thinking, Language & Intelligence | Left-hemisphere language dominance, introduced here through the split-brain evidence, becomes directly relevant when language processing is covered |

---

## Review Questions

**1.** The all-or-nothing principle of the action potential means that:

a) stronger stimuli produce larger action potentials  
b) an action potential either fires at full strength or does not fire at all, regardless of stimulus strength above threshold  
c) neurons can only fire once in their lifetime  
d) action potentials only occur in myelinated axons  

*Answer: b. Why (a) is tempting: it seems intuitive that a stronger stimulus should produce a "bigger" response, but stimulus strength is instead encoded in how frequently a neuron fires, not in the size of any single spike. (d) is tempting because myelination is discussed alongside the action potential, but unmyelinated axons fire action potentials too — myelin affects speed, not whether firing is all-or-nothing.*

---

**2.** Which best distinguishes a neurotransmitter from a hormone?

a) hormones are always inhibitory, neurotransmitters are always excitatory  
b) neurotransmitters act across the synapse on a nearby cell within milliseconds; hormones travel through the bloodstream to distant targets over a longer timescale  
c) neurotransmitters are produced only in the brain, hormones only in the body  
d) hormones are involved in emotion, neurotransmitters are involved only in movement  

*Answer: b. Why (c) is tempting: it sounds like a clean anatomical rule, but several molecules (dopamine, norepinephrine) function as both, depending on where they are released — the distinction is about distance and delivery mechanism, not where in the body the molecule originates.*

---

**3.** Research on dopamine and reward (Schultz, 1998) found that dopamine neurons fire most strongly:

a) at the exact moment a reward is consumed  
b) in response to predictive cues, and especially to unexpected rewards or unexpected reward omissions  
c) only during sleep  
d) exclusively in response to social rewards, not physical ones  

*Answer: b. Why (a) is tempting: "the pleasure chemical" framing implies dopamine should track the reward itself, but the actual neural recording data shows the strongest signal tied to prediction and prediction error, not consumption.*

---

**4.** A news headline reads: "Brain scans reveal the region responsible for political opinions." Based on what this chapter says about fMRI, what is the most important limitation to keep in mind?

a) fMRI cannot detect any brain activity at all  
b) fMRI shows relative blood-flow differences between conditions, not direct evidence that a region causes a behavior  
c) fMRI only works on non-human animals  
d) fMRI provides excellent timing information but poor spatial information  

*Answer: b. Why (d) is tempting: it reverses fMRI's actual trade-off — fMRI has good spatial resolution but poor temporal resolution because blood flow lags the neural event by a second or more. The deeper limitation is that "more active during condition X" does not establish causation or tell you what the person was thinking.*

---

**5.** The sympathetic and parasympathetic nervous systems are best understood as:

a) two systems that are never active at the same time  
b) a coordinated push-pull system in which both exert continuous, balanced influence  
c) systems found only in the brain, not the rest of the body  
d) the same system under two different names  

*Answer: b. Why (a) is tempting: "fight-or-flight" versus "rest-and-digest" sounds like an on/off switch, but in reality both branches are always exerting some influence, and subjective states like "calm" or "anxious" reflect the balance between them rather than one being fully off.*

---

**6.** According to the evolutionary mismatch argument applied to cortisol and the stress response in this chapter, the central problem with chronic stress in modern humans is that:

a) cortisol itself is a uniquely harmful and poorly designed hormone  
b) the stress response evolved for brief, acute threats, but modern stressors often activate it for weeks at a time  
c) humans evolved to have a weaker stress response than other animals  
d) the parasympathetic nervous system no longer functions in modern humans  

*Answer: b. Why (a) is tempting: it can feel like cortisol is "the problem," especially given how often chronic stress is discussed in negative terms — but the acute version of the response is adaptive and necessary; the problem this chapter identifies is the mismatch between the threat duration the system evolved for and the duration it is now often deployed for.*

---

**7.** What did the Damasio et al. (1994) re-analysis of the Phineas Gage case add to the original 1848 case report?

a) it was the first evidence that brain damage could change personality at all  
b) it used skull measurements and modern neuroimaging to identify, with more precision, that the injury involved the prefrontal cortex  
c) it proved that all personality differences are caused by frontal lobe damage  
d) it discredited Harlow's original observations as inaccurate  

*Answer: b. Why (c) is tempting: it is easy to overgeneralize a vivid single case into a universal claim, but the chapter explicitly cautions against this — Gage's case shows that prefrontal damage *can* disrupt personality, not that *all* personality variation has this cause.*

---

**8.** The split-brain studies (Sperry, 1968) found that a patient shown a word only in their left visual field, with their corpus callosum severed, might:

a) be completely unable to perceive the word at all  
b) be unable to say the word aloud but still able to identify or draw it with their left hand  
c) immediately lose all language ability permanently  
d) experience no change in behavior, since the hemispheres communicate through other pathways  

*Answer: b. Why (a) is tempting: it would be intuitive to assume the information is lost entirely, but the deficit is specific to *verbal report*, because language production is concentrated in the left hemisphere — the right hemisphere, which received the visual information, can still guide a nonverbal response.*

---

**9.** The popular "left-brain/right-brain personality" claim differs from Sperry and Gazzaniga's actual split-brain research in that:

a) the popular claim applies to people with an intact corpus callosum, generalizing findings from a specific surgical population to the general population in a way the original research does not support  
b) the popular claim is simply a more detailed and accurate restatement of the original findings  
c) the original research never involved any human patients  
d) the original research was specifically about personality types, and the popular version waters it down  

*Answer: a. Why (d) is tempting: it reverses the actual relationship — the original split-brain research was about functional differences in an unusual clinical population under unusual experimental conditions, not about personality, and the popularized version is the one that introduced the (unsupported) personality claim.*

---

**10.** Calling the amygdala "the brain's fear center" is best described in this chapter as:

a) completely accurate and uncontroversial  
b) a defensible shorthand that risks oversimplifying a structure involved in several functions within a larger distributed circuit  
c) entirely false — the amygdala has no relationship to fear processing  
d) only true in non-human animals, not in humans  

*Answer: b. Why (c) is tempting: pointing out that a popular claim oversimplifies something can read as a claim that it's simply wrong, but the amygdala's involvement in fear and threat processing is real and well-supported — the correction here is about precision (one node in a circuit, with several functions) rather than a wholesale rejection of the amygdala-fear connection.*

---

**11.** Why does the Hodgkin and Huxley research on the squid giant axon generalize to human neurons?

a) squid and humans are evolutionarily very close relatives  
b) the basic electrochemical mechanism of the action potential is conserved across a very wide range of species, even ones that are not closely related  
c) it does not actually generalize, and is only included here for historical interest  
d) squid neurons and human neurons are visually identical under a microscope  

*Answer: b. Why (a) is tempting: it would be a tidier story if squid and humans were closely related, but they are not — cephalopods and vertebrates diverged hundreds of millions of years ago. The generalization works specifically because the action potential mechanism is deeply conserved, not because of close evolutionary relationship.*

---

**12.** A 2026 imaging study finds that the actual proportion of resting metabolic energy consumed by the human brain is somewhat different from the commonly cited 20% figure (Raichle & Gusnard, 2002). Which APA integrative theme does this scenario best illustrate?

a) psychology values diversity, equity, and inclusion  
b) psychological science relies on empirical evidence and adapts as new evidence emerges  
c) ethical principles guide psychological study and application  
d) our perceptions and biases can be inaccurate  

*Answer: b. Why (d) is tempting: this theme is also genuinely relevant elsewhere in this chapter (the left-brain/right-brain myth, the 10% brain myth), and revising a biological fact does involve correcting an inaccurate prior belief — but the scenario as described is specifically about a finding being updated by new evidence, which is the more precise match for Theme 1.*

---

## Key Terms

**Action potential** — The rapid, all-or-nothing electrical signal that travels down a neuron's axon when accumulated input crosses a threshold voltage.

**All-or-nothing principle** — The rule that an action potential fires at full strength or not at all; stimulus strength is encoded in firing frequency, not spike size.

**Amygdala** — A limbic structure heavily involved in processing fear and threat, and in attaching emotional significance to memories; part of a larger distributed emotional circuit rather than a sole "fear center."

**Autonomic nervous system** — The division of the peripheral nervous system controlling involuntary functions (heart rate, digestion, breathing) through its sympathetic and parasympathetic branches.

**Axon** — The long output fiber of a neuron that carries its signal toward the next cell.

**Cortisol** — A hormone released by the adrenal glands during stress that mobilizes energy and temporarily suppresses non-urgent functions; chronic elevation is linked to several negative health outcomes.

**Dendrite** — The branching extension of a neuron that receives input from other neurons.

**Dopamine** — A neuromodulatory neurotransmitter whose primary role is encoding prediction error — signaling when outcomes differ from expectation — making it central to goal-directed behavior, reinforcement learning, addiction, and ADHD.

**Endocrine system** — The body's network of glands that secrete hormones directly into the bloodstream to coordinate slower, body-wide responses.

**Hippocampus** — A limbic structure essential for forming new long-term declarative memories.

**Hormone** — A chemical messenger released by an endocrine gland into the bloodstream, acting on distant target cells over a longer timescale than a neurotransmitter.

**Myelin** — A fatty insulating sheath around many axons, produced by glial cells, that increases the speed of signal conduction via saltatory conduction.

**Neuron** — A cell specialized for receiving, processing, and transmitting information through electrochemical signals.

**Neuromodulator** — A neurotransmitter that adjusts the sensitivity or responsiveness of broader neural circuits rather than directly exciting or inhibiting a single cell; its effect depends on receptor type, circuit context, and what the organism is currently doing.

**Neurotransmitter** — A chemical messenger released by a neuron into the synapse that excites or inhibits the next cell.

**Parasympathetic nervous system** — The "rest-and-digest" branch of the autonomic nervous system that slows heart rate and supports recovery and digestion.

**Prefrontal cortex** — The frontal-lobe region most associated with executive function, including impulse control and emotional regulation.

**Refractory period** — The brief period immediately following an action potential during which a neuron cannot fire again.

**Resting potential** — The stable voltage difference (about −70 mV) across a neuron's membrane when it is not firing.

**Split-brain** — A condition, typically surgically induced to treat severe epilepsy, in which the corpus callosum connecting the two cerebral hemispheres is severed.

**Sympathetic nervous system** — The "fight-or-flight" branch of the autonomic nervous system that accelerates heart rate and redirects resources toward rapid action.

---

## Further Reading

**Noba Project — Neurons** (Furtak)  
https://nobaproject.com/modules/neurons  
A detailed, peer-reviewed treatment of neuron structure and the action potential, including the ionic mechanisms only briefly summarized in this chapter.

**Noba Project — Hormones & Behavior**  
https://nobaproject.com/modules/hormones-behavior  
Open-access overview of behavioral endocrinology, including hormone-behavior relationships beyond the stress response covered here.

**Noba Project — The Brain and Nervous System** (Biswas-Diener)  
https://nobaproject.com/modules/the-brain-and-nervous-system  
A broader anatomical overview that complements this chapter's focus on a smaller set of structures.

**Harlow, J. M. (1848). Passage of an iron rod through the head.**  
*Boston Medical and Surgical Journal, 39*(20), 389–393.  
The original acute case report on Phineas Gage — short, vivid, and worth reading before any secondhand retelling, including this one.

**Harlow, J. M. (1868). Recovery from the passage of an iron bar through the head.**  
*Publications of the Massachusetts Medical Society, 2*(3), 327–347.  
The follow-up report, written twenty years later, containing the personality-change description that became the basis of the modern Gage narrative. The contrast between the 1848 and 1868 accounts is itself instructive about how case studies accumulate interpretation over time.

**Sapolsky, R. M. (2004). *Why Zebras Don't Get Ulcers* (3rd ed.). Holt.**  
A widely accessible, full-length treatment of the stress response and its evolutionary mismatch with modern chronic stressors, written by one of the field's most prominent researchers.

**Nielsen, J. A., Zielinski, B. A., Ferguson, M. A., Lainhart, J. E., & Anderson, J. S. (2013). An evaluation of the left-brain vs. right-brain hypothesis with resting state functional connectivity magnetic resonance imaging.**  
*PLOS ONE, 8*(8), e71275.  
The direct empirical test of the left-brain/right-brain personality myth discussed in this chapter; the abstract and discussion are accessible without a neuroimaging background.

---

## References

*Full citations for factual claims made in this chapter, for instructors or students who want to verify or go deeper. Distinct from Further Reading above, which is curated for student exploration rather than completeness.*

Beyerstein, B. L. (1999). Whence cometh the myth that we only use 10% of our brains? In S. Della Sala (Ed.), *Mind myths: Exploring popular assumptions about the mind and brain* (pp. 3–24). Wiley.

Damasio, H., Grabowski, T., Frank, R., Galaburda, A. M., & Damasio, A. R. (1994). The return of Phineas Gage: Clues about the brain from the skull of a famous patient. *Science, 264*(5162), 1102–1105.

Harlow, J. M. (1848). Passage of an iron rod through the head. *Boston Medical and Surgical Journal, 39*(20), 389–393.

Harlow, J. M. (1868). Recovery from the passage of an iron bar through the head. *Publications of the Massachusetts Medical Society, 2*(3), 327–347.

Herculano-Houzel, S. (2009). The human brain in numbers: A linearly scaled-up primate brain. *Frontiers in Human Neuroscience, 3*, 31.

Hodgkin, A. L., & Huxley, A. F. (1952). A quantitative description of membrane current and its application to conduction and excitation in nerve. *Journal of Physiology, 117*(4), 500–544.

LeDoux, J. (2012). Rethinking the emotional brain. *Neuron, 73*(4), 653–676.

Nielsen, J. A., Zielinski, B. A., Ferguson, M. A., Lainhart, J. E., & Anderson, J. S. (2013). An evaluation of the left-brain vs. right-brain hypothesis with resting state functional connectivity magnetic resonance imaging. *PLOS ONE, 8*(8), e71275.

Raichle, M. E., & Gusnard, D. A. (2002). Appraising the brain's energy budget. *Proceedings of the National Academy of Sciences, 99*(16), 10237–10239.

Sapolsky, R. M. (2004). *Why zebras don't get ulcers* (3rd ed.). Holt.

Schultz, W. (1998). Predictive reward signal of dopamine neurons. *Journal of Neurophysiology, 80*(1), 1–27.

Scoville, W. B., & Milner, B. (1957). Loss of recent memory after bilateral hippocampal lesions. *Journal of Neurology, Neurosurgery, and Psychiatry, 20*(1), 11–21.

Sperry, R. W. (1968). Hemisphere deconnection and unity in conscious awareness. *American Psychologist, 23*(10), 723–733.

Williams, R. W., & Herrup, K. (1988). The control of neuron number. *Annual Review of Neuroscience, 11*, 423–453.
