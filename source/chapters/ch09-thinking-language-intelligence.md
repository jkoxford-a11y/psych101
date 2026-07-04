# Chapter 9: Thinking, Language & Intelligence

<!-- v0.1 — first full draft (2026-06-23, Session 18) -->
<!-- v0.2 — spine-alignment pass (Session 68, 2026-07-04): fronted the spine question ("why is one good concept worth more than a hundred memorized facts?") in Where This Fits; added the organizing formulation to Section 1 (a concept as a location + pattern of relations in a compressed semantic space, unifying prototypes/exemplars/hierarchy already in the text); added Huth et al. (2016) fMRI semantic-map evidence as convergent support, with explicit hedge against overclaiming; added a brief assimilation/accommodation bridge to Ch10's Piaget coverage (framed in prediction/model-revision terms, deliberately not re-teaching the stage theory Ch10 already owns); added a "Worked Example: Reinforcement" callout cross-referencing Ch7; named heuristics explicitly as the same compression logic applied to decisions (Algorithms and Heuristics); extended the AI Connection with Tang et al. (2023) LLM-brain alignment findings, hedged as correlational; added a closing spine-unifying line to the Chapter Summary. New Key Terms entry: Semantic space. Chapter was already well over the 3,500–5,000 word target other chapters were flagged for; this pass adds meaningfully to that overage — flagged, not trimmed, per Jon's request to see the full picture before deciding what to cut or offload to labs. -->
<!-- Concepts covered: TLI-001 through TLI-015 (15 concepts total) -->
<!-- Copyright handling: TLI-004 (Representativeness heuristic) and TLI-012 (Gardner's multiple intelligences) are flagged book-adoption. Both were drafted from Noba Project sources: Bazerman (2026) "Judgment and Decision Making" for TLI-004; Biswas-Diener (2026) "Intelligence" for TLI-012. All other 13 TLI-* concepts are instructor-original or canonical-common-knowledge and were drafted from course materials and verified primary literature. -->
<!-- Citations: All independently verified via web search before inclusion. See References section. -->

---

## Misconception Opener: Do You Trust Your Own Thinking?

You likely believe you are a fairly rational person. You pay attention to evidence, you consider the facts, and when you make a decision you think it through. Most people believe this about themselves — and most people are wrong in a specific, measurable way.

Research consistently shows that human reasoning is not a slow, impartial weighing of evidence. It is fast, pattern-based, and shaped by shortcuts that usually serve us well but sometimes lead us badly astray. We overestimate the likelihood of events we can easily call to mind. We judge someone as probably a feminist bank teller because she fits a certain profile, even when the logic of probability rules that out. We stick with the first number we hear when estimating something we know nothing about. And we almost never notice any of this happening.

This is not a character flaw. These patterns are the predictable products of a cognitive system that evolved to make quick, good-enough judgments under uncertainty — and they are surprisingly resistant to correction, even when we know about them. As you work through this chapter, try to catch yourself using the very shortcuts we discuss. It is harder than it sounds.

**Stop and Predict:** Without looking anything up, write down your answer: are there more English words that begin with *k*, or more English words that have *k* as the third letter? Also write one sentence explaining how you made the judgment. You will return to this after reading Section 2.

---

## Where This Fits

**Why is one good concept worth more than a hundred memorized facts?** Chapter 8 explored how memory works — how information is encoded, stored, and retrieved. This chapter asks what happens *after* retrieval: how we use information to form concepts, solve problems, make decisions, and communicate. These cognitive processes are among the most complex the human brain performs and are the subject of an entire field (cognitive psychology), of which this chapter gives a selective survey.

Language is introduced here because it is both a cognitive tool and the medium through which most of what we know was acquired. Intelligence follows because modern conceptions of intelligence are rooted in cognitive science — IQ tests are, at bottom, measures of certain cognitive abilities.

**Connections to other chapters:** Working memory (Ch. 8) is the active workspace for reasoning and problem-solving — its capacity limits directly constrain what we can hold in mind while thinking. Attention and perception (Ch. 4) shape what information even enters reasoning. Social cognition (Ch. 11) extends cognitive biases into the realm of person perception and group judgment. Intelligence measurement connects forward to personality assessment (Ch. 11, glossed within Social Psychology) and to psychological diagnosis (Ch. 13), where IQ scores play a contested role.

---

## Learning Objectives

By the end of this chapter, you should be able to:

1. Distinguish between concepts, prototypes, and exemplars, and explain how they organize knowledge.
2. Contrast algorithms and heuristics as problem-solving strategies and give an example of each.
3. Identify the availability heuristic, representativeness heuristic, confirmation bias, framing effect, and anchoring bias, and describe how each distorts judgment.
4. Explain the System 1 / System 2 distinction and apply it to everyday reasoning errors.
5. Describe the basic structure of human language (phoneme → morpheme → syntax) and Chomsky's argument for an innate Language Acquisition Device.
6. Evaluate the strong and weak versions of the linguistic relativity hypothesis in light of available evidence.
7. Compare and contrast Spearman's *g*, fluid vs. crystallized intelligence, Gardner's multiple intelligences, and Sternberg's triarchic theory.
8. Explain what IQ standardization means, what the Flynn Effect shows, and why reliability and validity matter for interpreting any intelligence test score.

---

## Section 1: Concepts, Categories, and Problem Solving

### Concepts and Prototypes

Your brain does not store individual experiences as isolated snapshots. It organizes them into **concepts** — mental categories that group objects, events, and ideas based on shared features. Concepts allow you to recognize a new dog you have never seen before as a dog: you compare it to your stored concept of "dog" without consciously listing every feature.

At the center of most natural concepts sits a **prototype**: the most typical or representative member of the category. When you hear "bird," you probably think of something like a robin or a sparrow, not a penguin or an ostrich — even though all four are equally birds. The prototype is the mental default: new instances are judged as more or less bird-like depending on how closely they match it (Rosch, 1975).

Alongside prototypes, people also use **exemplars** — specific remembered members of a category — particularly for unusual cases. When someone says "exotic fruit," your concept is unlikely to have a strong prototype; you are more likely to reason from specific examples you have encountered.

Concepts are organized hierarchically. "Animal" is a superordinate category containing "dog," which is a basic-level category containing "golden retriever" as a subordinate example. Most everyday thinking happens at the basic level — specific enough to be useful, general enough to be efficient.

Put these three ideas together and a single picture emerges: a concept is not a definition or a checklist of defining features — it is a location in a compressed space of meaning, defined by its pattern of relations to everything else you know. "Apple" sits near fruit, food, sweetness, trees, red/green/yellow, seeds, pie, and school lunches — a region built up from repeated episodes and pruned down to whatever generalizes well, not a filing-cabinet entry with fixed boundaries. This is the same compression this book keeps finding at every level of the system: raw experience is too large and too specific to keep in full, so what survives is the structure that predicts — the prototype, the neighborhood of exemplars, the place in the hierarchy — while the rest is let go. That compression is exactly why concepts are useful (they let you recognize a dog you've never seen before) and exactly why they mislead in predictable ways (a penguin has to fight its way toward a prototype built mostly from robins and sparrows).

There's now real neuroscience consistent with this "concept as location" picture, though it should be read carefully. Huth and colleagues (2016) had seven people simply listen to more than two hours of narrated stories in an fMRI scanner, then used the words in those stories to build a map of which brain regions responded to which kinds of meaning. They found roughly 140 distinct semantically selective areas spread across temporal, parietal, and prefrontal cortex, organized along consistent dimensions — the single largest axis of variation separated social, emotional, and violent content from perceptual, spatial, and numeric content — and the overall map looked remarkably similar across all seven listeners. This does not mean the brain literally stores concepts as coordinates the way a map stores locations; the semantic-space model is a tool that predicts brain activity well, not a description of the brain's actual code. But it is real evidence, at the level of measured brain activity, that meaning is organized geometrically and distributed across cortex rather than filed in discrete word-boxes — support for the same "location in a space of relations" picture built from purely behavioral evidence above.

This location also keeps moving over development. Chapter 10 covers Piaget's stage theory in full; the spine-level version is worth naming here. Assimilation — using your current concept to interpret something new — is this book's prediction step. Accommodation — reshaping the concept when the new case doesn't fit — is prediction error forcing an update. A toddler's overextended "doggie" (applied to any four-legged animal) is a coarse, underdifferentiated region of semantic space; accommodation across repeated corrective episodes sharpens its boundaries into the adult concept. Expertise runs the same process well into adulthood — it doesn't replace prototypes and exemplars with something else, it makes the semantic neighborhood denser and more finely differentiated.

> **Worked Example: How a Concept Gets Built — "Reinforcement"**
> Most students' first mental model of *reinforcement* (Chapter 7) is a crude prototype: reward = reinforcement, and reinforcement is whatever feels good. That model handles the obvious cases fine — until it meets *negative reinforcement*, which removes something unpleasant rather than adding something pleasant, and doesn't fit the "feels good" prototype at all. The crude model mis-predicts, the mismatch registers, and the concept has to be rebuilt around what actually defines reinforcement: any consequence that makes a behavior *more likely to recur*, regardless of whether it works by adding or removing something. That rebuilt concept — sharper, less prototype-dependent — is what lets you correctly classify a case you have never seen before, which is the entire point of having a concept instead of a list of memorized examples.

### Algorithms and Heuristics

When you face a problem, you can approach it in two fundamentally different ways.

An **algorithm** is a step-by-step procedure that, if followed correctly, is guaranteed to produce the right answer. Long division is an algorithm. A recipe is an algorithm. The advantage is certainty; the disadvantage is that algorithms are slow and not always available. Searching every possible chess move before choosing is theoretically an algorithm, but the number of moves in a typical chess game is greater than the number of atoms in the observable universe — no human (or current computer playing in real time) uses this approach.

A **heuristic** is a cognitive shortcut — a rule of thumb that usually produces a good answer quickly, without guaranteeing the best answer. "If it looks like a duck and quacks like a duck, treat it as a duck" is a heuristic for category assignment. Heuristics are how virtually all everyday human thinking works. They are not failures of rationality; they are the operating system that allows a three-pound brain to navigate a complex world in real time. Heuristics run on the same compression logic as the concepts in Section 1, just applied to decisions instead of categories: a heuristic keeps the piece of a judgment that predicts well most of the time and discards the rest — which is exactly why the discarded part occasionally turns out to matter. Section 2 catalogs when that trade-off breaks down in predictable ways.

The study of when and why heuristics go wrong is one of the most productive areas in cognitive science — see Section 2.

### Problem Solving: Strategies and Obstacles

Productive problem solving typically involves some combination of three strategies. **Working forward** starts with the current state and applies operations to move toward the goal (how most people approach a math problem). **Working backward** starts from the goal and reasons toward the current state (useful for planning or for geometry proofs). **Means-ends analysis** identifies the largest gap between the current state and the goal and selects an operation to reduce that gap — the strategy underlying most search algorithms and much human troubleshooting.

Two classic obstacles block effective problem solving:

**Mental set** is the tendency to approach a new problem using a strategy that worked before, even when it does not apply. A solver who has just been given a series of water-jug problems requiring a complex three-step formula will often apply that formula to a later problem that could be solved much more simply — because the earlier strategy is primed and active (Luchins, 1942).

**Functional fixedness** is a specific form of mental set in which we see an object only in terms of its conventional use and fail to notice that it could serve another function. In Duncker's (1945) classic candle problem, participants are given a candle, a box of thumbtacks, and matches and asked to mount the candle on a wall so it burns without dripping on a table. Most people try to tack the candle directly to the wall or melt it onto the wall. The solution — tacking the box to the wall and using it as a platform — requires seeing the thumbtack box as a *shelf*, not just a container. Functional fixedness prevents this reframing.

**Insight** is the sudden, often surprising shift in representation that unlocks a problem — the "aha" moment when the box becomes a shelf, or when two separately encoded pieces of information suddenly combine into a solution. Insight problems feel qualitatively different from analytical problems: they resist incremental progress, then resolve all at once. Neuroimaging studies suggest that insight solutions are associated with a sudden burst of gamma-band activity in the right anterior temporal lobe, a region associated with integrating distantly related information (Jung-Beeman et al., 2004).

---

## Section 2: Heuristics, Biases, and the Two-System View

### System 1 and System 2

The single most useful organizing framework for understanding reasoning errors comes from the psychologist Daniel Kahneman, summarized in his 2011 book *Thinking, Fast and Slow*. Kahneman distinguishes two modes of processing:

**System 1** is fast, automatic, associative, and largely unconscious. It reads emotional expressions effortlessly, completes familiar phrases, and produces intuitive answers almost instantly. It cannot be fully turned off — you cannot *not* read a word that appears in front of you. System 1 is the source of intuition, of gut feelings, and of virtually all the cognitive shortcuts described in this section.

**System 2** is slow, deliberate, effortful, and rule-governed. It is the system you engage when you work through a long-division problem, check your reasoning for errors, or resist the urge to say something you'd regret. It requires sustained attention and depletes with mental fatigue.

The critical point is that System 1 is not the "bad" system that we should try to override with System 2. System 1 handles most of life correctly — recognizing your friend's face across a crowded room, catching yourself about to step off a curb when a car is coming, intuiting that something in a conversation is wrong before you can articulate what. The problem arises in specific domains where System 1's shortcuts produce predictable, correctable errors, and where System 2 fails to catch them — either because it is not engaged, or because the System 1 output *feels* right.

> **Do Not Confuse: System 1 ≠ irrational; System 2 ≠ rational**
> System 1 is fast and associative — not inherently flawed. System 2 is slow and deliberate — but it can also be used to rationalize bad decisions after the fact, or to construct logically valid arguments for false conclusions. The two systems are better understood as different processing *modes* than as a conflict between irrationality and rationality.

### The Availability Heuristic

When estimating the frequency or probability of something, people tend to judge how often it occurs based on how easily examples come to mind. This is the **availability heuristic** (Tversky & Kahneman, 1973).

In most circumstances this works well — frequent things are easier to bring to mind than rare things. But availability is affected by factors other than actual frequency: vividness, recency, media coverage, and personal relevance. Shark attacks are rare but dramatic and heavily reported, so people overestimate their likelihood. Car accidents are common but familiar, so people underestimate their relative risk. Mortality from smoking is distributed across millions of individual cases over decades, which makes it less vivid than a single plane crash, even though the smoking toll is vastly larger.

**Return to your prediction from the Misconception Opener.** The point is not whether you guessed correctly — it is *how* you generated the answer. Most people say there are more words starting with *k*. In fact, there are roughly three times as many words with *k* as the third letter. But words that *start* with *k* (king, key, kite) are much easier to pull from memory than words where *k* is the third letter (ask, ski, ink) — and ease of recall gets mistaken for frequency. The method you described in your one-sentence explanation is the availability heuristic in action (Tversky & Kahneman, 1973).

> **Classroom version — a predict→reveal→name→transfer sequence:**
> 1. Students vote by hand or poll: "starts with *k*" vs. "*k* as third letter."
> 2. Give 30 seconds to list examples of each type. Ask which list felt easier to build.
> 3. Reveal the actual frequency ratio (~3:1 in favor of third-letter *k*).
> 4. Ask: what does this tell us about how you make frequency estimates? Ease of generation ≠ actual frequency.
> 5. *Then* introduce the term **availability heuristic** and name the mechanism.
>
> This sequence — predict → reveal the error → name the mechanism → transfer to a real-world case — is worth repeating across the chapter. Students who feel the heuristic first are far more likely to recognize it later than students who are simply told its definition.

### The Representativeness Heuristic

When judging whether something belongs to a category, people often assess how well it matches their prototype of that category rather than relying on base-rate probabilities. This is the **representativeness heuristic** (Tversky & Kahneman, 1974).

The most famous demonstration is the Linda problem:

> *Linda is 31 years old, single, outspoken, and very bright. She majored in philosophy. As a student, she was deeply concerned with issues of discrimination and social justice, and also participated in anti-nuclear demonstrations.*
>
> *Which is more probable?*
> *A. Linda is a bank teller.*
> *B. Linda is a bank teller and is active in the feminist movement.*

When Tversky and Kahneman (1983) posed this question, roughly 85% of participants chose option B. This is logically impossible — the probability of two things both being true cannot be higher than the probability of either one alone. Every feminist bank teller is necessarily a bank teller, so A must be at least as probable as B.

The error arises because the description of Linda fits our prototype of a feminist activist. Option B is more *representative* of Linda's description, so System 1 judges it as more probable — overriding the probability logic that would require Option A to win. Tversky and Kahneman (1983) called this the **conjunction fallacy**: treating the conjunction of two events as more probable than either event alone, when it cannot be.

> **Classic Study Walkthrough: The Linda Problem (Tversky & Kahneman, 1983)**
>
> **What they did:** Participants read a brief personality sketch of "Linda," constructed to fit the prototype of someone politically engaged and socially conscious. They were then given a list of statements about Linda and asked to rank them by probability.
>
> **What they found:** ~85% ranked "bank teller and feminist activist" as *more probable* than "bank teller" — a direct violation of the conjunction rule of probability. The effect held even when participants had training in statistics and even when the word "probable" was replaced with an explicit frequency framing ("how many out of 100 people with this description…").
>
> **What it means:** The representativeness heuristic can override explicitly probabilistic reasoning. This has practical consequences wherever we need to estimate compound probabilities — in medical diagnosis, legal reasoning, risk assessment, and everyday prediction. The persistence of the error under statistical instruction is a key reason researchers began treating these as *systematic* biases, not just casual mistakes.

### Confirmation Bias

Once we form a belief, we tend to seek out, interpret, and remember evidence that supports it — and to discount, ignore, or misremember evidence that contradicts it. This is **confirmation bias**.

Wason's (1968) selection task is the most studied demonstration. Participants are shown four cards, each with a letter on one side and a number on the other. The cards show: E, K, 4, 7. The rule to test is: "If a card has a vowel on one side, it must have an even number on the other side." Which cards must you turn over to check whether the rule is violated?

Most people turn over E (correct — checking whether the vowel has an even number) and 4 (incorrect — this would only confirm the rule, not test it). Few turn over 7 — yet 7 is the critical card: if 7 has a vowel on its back, the rule is violated. The error reveals confirmation bias in miniature: people test the rule by looking for confirming instances rather than by seeking the disconfirming case that would actually test it.

Confirmation bias is robust across contexts from scientific reasoning to political belief formation. It is one reason two people can examine the same body of evidence and reach opposite conclusions — each is attending to different subsets of it.

### The Framing Effect

Decision-making is sensitive to how choices are presented, even when the objective content is identical. Tversky and Kahneman (1981) demonstrated this with the Asian disease problem, described in the Noba module on judgment and decision making (Bazerman, 2026): participants offered a program that saves 200 of 600 people are risk-averse and prefer the certain outcome; participants offered the logically equivalent choice of a program that results in 400 deaths are risk-seeking and prefer the gamble. The *frame* — losses versus gains — determines the choice, not the underlying probabilities.

The framing effect has documented consequences in medicine (how surgical risks are framed affects patient choices), public policy (organ donation opt-in vs. opt-out defaults produce vastly different donation rates), and financial decisions (loss-framed warnings motivate behavior change more strongly than gain-framed incentives for equivalent outcomes).

### Anchoring

When making numerical estimates, people are heavily influenced by an initial number (the "anchor"), even when that number is arbitrary. In a well-known demonstration, participants who were first asked "Is the population of Chicago more or less than 2 million?" subsequently estimated a lower population than participants who were first asked "Is it more or less than 10 million?" — even though both groups knew the question was starting from an arbitrary anchor (Tversky & Kahneman, 1974).

Anchoring operates in salary negotiation (the first offer anchors subsequent counteroffers), in medical diagnosis (the first diagnosis anchors subsequent interpretation of ambiguous symptoms), and in everyday estimation (an initial Google search result anchors follow-up searches).

### The AI Connection: Your System 2 Is Vulnerable to Polished Text

> The central cognitive-AI connection for this chapter is not about how AI *works* — it is about how humans respond to AI output.
>
> **The problem:** AI-generated text is typically grammatically fluent, well-organized, and confident in tone. These are exactly the surface features that System 1 uses to classify output as "smart" and "trustworthy." When something reads like well-reasoned expert writing, your metacognitive System 2 monitoring tends to disengage — the output feels right, so there is no signal to slow down and check.
>
> This is why AI factual errors are often not caught by the people reading them. It is not that the errors are subtle — sometimes they are quite large. It is that the packaging is smooth, and smooth packaging deactivates the checking system. Kahneman's framework predicts exactly this: System 1 processes fluency as a signal of truth. Polished formatting, confident phrasing, and well-structured paragraphs all increase processing fluency — and processing fluency increases perceived accuracy, independent of actual accuracy (Reber & Schwarz, 1999).
>
> **The availability problem:** Students who have used AI tools and seen them produce accurate, useful outputs many times have built up a mental database of "AI was right." When they ask AI about a topic where it is actually unreliable — a niche historical event, a specific citation, a recent development — the availability heuristic (System 1 says: "I can easily remember it being right before") overcounts past successes and undercounts the specific risk for this kind of query.
>
> **Schemas and template-matching:** AI language models learn to produce output by detecting statistical patterns in large training corpora. When asked for an "explanation of the availability heuristic," the model produces text that matches the *template* of textbook explanations it has seen. This is not reasoning about the concept; it is very high-fidelity pattern completion — the same way that a human schema produces plausible-but-reconstructed memory. The critical difference: human schemas are revised through corrective feedback and embodied experience. Model weights do not self-correct through reasoning during a conversation.
>
> **A genuine point of convergence, carefully qualified:** Tang, LeBel, Jain, and Huth (2023) built a decoder that uses a language model's own semantic representations to reconstruct the gist of a story someone is hearing — purely from their fMRI activity while listening. That only works if human brains and language models represent meaning in ways similar enough to translate between. It is tempting to read this as proof that AI "thinks like a brain." Resist that reading: alignment here is a correlational fact about two systems both shaped by the statistical structure of human language, not evidence that they share an underlying mechanism. A model and a brain can converge on similar representations for entirely different reasons — the way two independently evolved wings both solve the aerodynamics of flight without sharing a skeleton.
>
> **The practical implication:** Apply this chapter's content to your use of AI. When you encounter AI output that *reads like* an authoritative source, that is exactly when to engage System 2: check the specific claim, look for the original source, ask whether the evidence is actually cited or just gestured at. Fluency is not accuracy. Confidence of tone is not a quality signal.
>
> **Where the analogy breaks:** It would be tempting to describe AI as a "System 1 reasoner" — fast, pattern-based, non-deliberate. But that framing misleads. System 1 in humans is fast because it is built on decades of embodied, motivated experience in a world that provided real feedback. An AI model has neither embodied experience nor the kind of motivated goal-states that make heuristics adaptive. The parallel is in the *output quality* (fluent, confident, sometimes wrong in systematic ways), not in the underlying architecture.

---

## Section 3: Language

### The Structure of Language

Language is a system of symbols and rules that allows an unbounded number of meaningful messages to be generated from a finite set of elements. The structure of language can be analyzed at several levels, each embedded in the next.

**Phonemes** are the smallest units of sound that distinguish meaning in a language. The sounds represented by /p/ and /b/ are different phonemes in English — "pin" and "bin" mean different things — even though the physical difference between them is just the timing of vocal cord vibration (voicing). English has roughly 44 phonemes; Mandarin Chinese has about 22; some languages have more than 100 (including click consonants). Phonemes themselves carry no meaning.

**Morphemes** are the smallest units that carry meaning. The word "unbreakable" contains three morphemes: *un-* (negation), *break* (the root meaning), and *-able* (capable of). A single word can be one morpheme ("cat") or many ("antidisestablishmentarianism"). Morphological rules govern how morphemes combine within a language.

**Syntax** is the set of rules governing how words are arranged into phrases and sentences. "The cat chased the mouse" and "The mouse chased the cat" contain the same words but have opposite meanings because syntax determines who did what to whom. Syntactic rules are tacitly known by all fluent speakers — you know immediately that "Cat the chased mouse the" is wrong — yet most speakers could not state the rules explicitly.

Above syntax, **semantics** concerns meaning: what words and sentences refer to. **Pragmatics** concerns how language is used in context: how we interpret indirect requests ("Could you pass the salt?" as a request, not a question about ability), detect sarcasm, and understand what is implied but not said.

### Language Acquisition: The Nativist-Behaviorist Debate

How do children learn language so quickly? A typical child acquires thousands of words in the first few years of life and produces grammatically correct (if simplified) sentences before the age of three, with no formal instruction and from impoverished, error-filled input.

The **behaviorist account** (Skinner, 1957) holds that language is learned like any other behavior — through imitation, reinforcement, and shaping. Children repeat sounds that are reinforced by caregivers, gradually approximating adult speech.

The problem with this account is the *poverty of the stimulus*: the language children hear is too fragmentary, ambiguous, and error-prone to teach the grammatical rules they end up knowing. Children produce grammatical structures they have never heard ("I goed to the store") — evidence of rule application, not imitation. They also generalize rules to novel words correctly and almost never make errors of the type that simple reinforcement would predict.

Noam Chomsky (1965) proposed instead that humans are born with a biological **Language Acquisition Device** (LAD) — a set of innate grammatical principles, or **universal grammar**, shared by all human languages. The LAD allows children to bootstrap from the limited language input they receive to the full grammar of their native language. Evidence for this view includes:

- **Cross-linguistic universals:** All human languages share certain structural features (hierarchical phrase structure, a distinction between nouns and predicates, a means of negating propositions).
- **Critical period:** First-language acquisition is most rapid and most likely to achieve native-level mastery before puberty. Children who are not exposed to language until after the critical period (as in documented cases of severe deprivation) rarely achieve full grammatical competence.
- **Sign language:** Deaf children exposed to sign language acquire it on the same developmental timetable as hearing children acquire spoken language — even though sign language is entirely manual. This argues against imitation of specific sounds as the engine of acquisition.

Chomsky's nativist account remains influential but not unchallenged. More recent work in statistical learning (Saffran, Aslin, & Newport, 1996) demonstrates that infants are highly sensitive to distributional properties of language — they can segment words from running speech after just two minutes of exposure to a novel artificial language — suggesting that domain-general statistical learning may do more of the work than a dedicated LAD. The most likely answer is that both biological preparedness and powerful general learning mechanisms are involved, with neither sufficient alone.

### Linguistic Relativity

Does the language you speak shape how you think? This is the **linguistic relativity hypothesis**, associated most strongly with Benjamin Lee Whorf, whose writings were compiled posthumously in *Language, Thought, and Reality* (Whorf, 1956).

The **strong version** (sometimes called linguistic determinism) holds that language *determines* thought: if your language lacks a word for a concept, you cannot think it. This extreme claim is largely unsupported. People can think about and reason with concepts for which their language has no word, and perceptual experience is not simply a function of lexical categories.

The **weak version** holds that language *influences* certain aspects of cognition — that having a word for something makes it easier to perceive, remember, and communicate. This weaker claim has moderate empirical support:

- *Color discrimination:* Languages carve up the color spectrum differently. Russian has separate basic-color terms for light blue (*goluboy*) and dark blue (*siniy*) where English has one ("blue"). Russian speakers are faster at discriminating colors that straddle their linguistic boundary than English speakers — but only when the stimuli appear in the right visual field (processed by the language-dominant left hemisphere), suggesting that language facilitates color categorization without determining basic color perception (Winawer et al., 2007).
- *Spatial reasoning:* Speakers of languages that use absolute directional terms (north/south/east/west) rather than egocentric terms (left/right) perform differently on certain spatial tasks and maintain different spatial representations (Levinson et al., 2002).

> **Do Not Confuse: Linguistic Relativity vs. Linguistic Determinism**
> Whorf's original writings are often read as the strong (determinism) claim: that thought is *impossible* without language. Current evidence supports a much weaker version: language can make certain thoughts *more or less accessible*, particularly in domains like color perception, spatial reasoning, and time metaphor. Language does not create or prevent thoughts; it calibrates the ease and habits of certain cognitive operations. Be skeptical of headlines claiming that a language "doesn't have a word for X and therefore its speakers can't think about X" — this is the discredited strong version.

---

## Section 4: Intelligence

### The Question of General Intelligence

What is intelligence? The everyday intuition is that some people are just generally smarter across the board — better at learning, reasoning, problem-solving, and adapting to new situations. This intuition found empirical support in the work of Charles Spearman (1904), who noticed that performance across very different cognitive tasks — verbal ability, spatial reasoning, numerical computation — tends to be positively correlated. People who perform well in one area tend to perform relatively well in others.

Spearman proposed that this co-variation is explained by a single underlying factor he called **g** — general intelligence. *g* is not directly observable; it is inferred from the pattern of intercorrelations among specific ability tests. It remains one of the most replicable findings in psychometrics: the positive manifold (all cognitive tests correlate positively with one another) is robust across cultures, ages, and measures (Deary, 2001).

This does not mean that all cognitive abilities are equivalent. *g* is best thought of as a broad capacity underlying many specific abilities (**s** factors), much as cardiovascular fitness underlies performance on many different forms of physical exertion without determining any specific athletic skill perfectly.

### Fluid and Crystallized Intelligence

A major refinement to the single-*g* model comes from Horn and Cattell (1966), who proposed that general intelligence is better understood as at least two distinct types:

**Fluid intelligence** (*Gf*) is the capacity to reason, solve novel problems, and identify patterns independently of specific knowledge. It is the intelligence you bring to a problem you have never seen before. Fluid intelligence peaks in early adulthood and declines gradually with age.

**Crystallized intelligence** (*Gc*) is the accumulated knowledge, skills, and expertise acquired through experience and education — vocabulary, historical knowledge, procedural expertise. It is what you have learned to do well. Crystallized intelligence tends to increase or remain stable into late adulthood.

A useful illustration: a 25-year-old computer science student typically outperforms a 65-year-old experienced programmer on puzzles involving novel algorithms (fluid); the experienced programmer typically outperforms the student on diagnosing a complex legacy codebase problem (crystallized).

### Gardner's Multiple Intelligences

Howard Gardner (1985) proposed a more radical departure from the *g*-factor tradition. In *Frames of Mind*, Gardner argued that traditional IQ-based conceptions of intelligence are too narrow and culturally biased — they predominantly measure academic-linguistic and logical-mathematical abilities while ignoring others. His original 1983 theory identified **seven relatively independent intelligences**, each with its own neural basis, developmental trajectory, and profile of strengths; he later described at least eight, adding naturalistic intelligence:

1. **Logical-mathematical** — reasoning with numbers and logical rules
2. **Verbal-linguistic** — sensitivity to language, grammar, and story
3. **Visual-spatial** — perceiving and manipulating spatial relationships
4. **Musical-rhythmic** — sensitivity to pitch, rhythm, and musical structure
5. **Bodily-kinesthetic** — skilled use and awareness of the body
6. **Interpersonal** — understanding others' emotions and motivations
7. **Intrapersonal** — understanding one's own emotional life
8. **Naturalistic** — recognizing and classifying features of the natural world (added later)

Gardner's theory is valuable as an educational reminder that students have different strengths and that school success is not the same thing as total human ability. But as a psychometric theory of *independent* intelligences, it is weakly supported (Biswas-Diener, 2026; Waterhouse, 2006). The evidence that these abilities are genuinely independent — rather than personality traits, domain-specific talents, or expressions of *g* applied to different content — is not strong, and the criteria Gardner used to identify them were not derived from psychometric data. Most cognitive psychologists treat multiple intelligences as an influential educational framework, not as a strongly validated model of intelligence structure.

### Sternberg's Triarchic Theory

Robert Sternberg (1985) proposed the **triarchic theory of intelligence**, which distinguishes three broad types of intellectual ability:

**Analytic intelligence** is the ability to analyze, evaluate, and compare — the type of reasoning that IQ tests are designed to measure. When you critique an argument or solve a logic puzzle, you are using analytic intelligence.

**Creative intelligence** is the ability to generate novel ideas, combine existing knowledge in new ways, and deal with unfamiliar problems. When you adapt to a situation that requires you to apply knowledge in a new domain, you are using creative intelligence.

**Practical intelligence** is the ability to adapt to real-world environments — what is sometimes called "street smarts." It involves reading contexts, negotiating social dynamics, and knowing how to apply knowledge in messy real situations that don't come pre-labeled as "problems."

Sternberg's theory is valuable because it highlights that conventional IQ tests measure only a slice of the cognitive capacities relevant to success in life. High analytic intelligence predicts academic performance well but is a weaker predictor of real-world adaptive success than triarchic theory would expect from IQ alone. Practical intelligence — notoriously hard to measure — shows predictive validity for job performance independent of conventional IQ in some studies (Sternberg et al., 2000). Like Gardner's theory, Sternberg's triarchic model is more widely accepted in education than in cognitive neuroscience, where the g-based hierarchical models retain stronger empirical support.

### IQ: Measurement, Standardization, and Limits

Intelligence testing began with Alfred Binet, who developed the first practical intelligence test in 1905 to identify French schoolchildren who needed additional educational support. The concept of **IQ (intelligence quotient)** — originally a ratio of mental age to chronological age — was later reformulated as a **standardized score** with a mean of 100 and a standard deviation of 15 (for most modern tests).

Standardization means that scores are meaningful only relative to a reference population. An IQ of 115 means "one standard deviation above the mean of the reference sample" — not an absolute quantity of intelligence. Chapter 2 introduced the concepts of **reliability** (does the test give consistent results?) and **validity** (does it measure what it claims to measure?); both matter here. Modern IQ tests are highly reliable (test-retest correlations above .90) and show substantial criterion validity — they predict academic achievement, certain job outcomes, and health outcomes better than most other psychological measures (Deary, 2001). They do not, however, measure all of what we intuitively mean by "intelligence," as Gardner and Sternberg both argue.

A striking empirical puzzle is the **Flynn Effect** (Flynn, 1987): average IQ scores have risen substantially in many countries over the 20th century — roughly 3 points per decade in some nations. Because genes cannot change this quickly, this gain must reflect environmental factors: better nutrition, greater familiarity with abstract thinking and test-taking, reduced infectious disease load, or increased cognitive demands in daily life. The Flynn Effect complicates simple heritability arguments: even if intelligence differences *among individuals within a population* are substantially heritable, differences *between* populations or across generations can be driven entirely by environmental factors. Heritability does not imply immutability.

**A note on group differences:** Research consistently finds mean IQ score differences among demographically defined groups. These findings are real in the psychometric sense — they exist in the data. What they reflect is deeply contested, and the scientific consensus is that they are not explained by genetic differences between groups. Stereotype threat — the phenomenon in which awareness of a negative group stereotype impairs the performance of members of the stereotyped group on ability tests — is one well-documented mechanism that can produce score differences without reflecting underlying ability differences (Spencer, Steele, & Quinn, 1999). Environmental factors including differential access to educational resources, exposure to chronic stress, and historical economic exclusion are substantial contributors. Any interpretation of group IQ differences as reflecting fixed, biological capacities is not supported by the evidence.

---

## Chapter Summary

**Thinking:** The mind organizes knowledge through concepts structured around prototypes. Problem solving involves algorithms (guaranteed but slow) and heuristics (fast but fallible). Mental set and functional fixedness are common obstacles; insight is their sudden resolution.

**Heuristics and biases:** Kahneman's System 1/System 2 framework explains why predictable reasoning errors are resistant to correction. The availability heuristic (estimating probability from ease of recall), representativeness heuristic (judging by prototype match rather than base rate), confirmation bias (seeking confirming evidence), framing effect (sensitivity to how options are presented), and anchoring (over-reliance on initial numbers) are among the best-replicated findings in cognitive psychology. AI output is particularly likely to exploit System 1's fluency-as-accuracy heuristic, making the principles in this section directly practical.

**Language:** Language is structured hierarchically (phoneme → morpheme → syntax). Chomsky's nativist account proposes an innate Language Acquisition Device and universal grammar; statistical learning research suggests domain-general learning also plays a role. The linguistic relativity hypothesis has weak-version support (language influences certain cognitive operations) but not strong-version support (language does not determine thought).

**Intelligence:** Spearman's *g* is a robust empirical finding — cognitive abilities correlate positively. Fluid intelligence (novel reasoning) and crystallized intelligence (accumulated knowledge) show different aging trajectories. Gardner's multiple intelligences and Sternberg's triarchic theory broaden the construct at the cost of reduced psychometric precision. IQ is reliable, valid for certain predictions, and responsive to environmental change (Flynn Effect) — which means it is neither arbitrary nor fixed.

Across all three domains, the same logic recurs. Concepts, heuristics, grammar, and IQ scores are all compressed models built from partial experience — powerful because they generalize, and imperfect for exactly the same reason. Thinking well is not a matter of eliminating that compression; it isn't optional. It's a matter of knowing where it has probably cut a corner.

---

## Key Terms

- **Algorithm** — a step-by-step procedure guaranteed to produce a correct answer
- **Anchoring** — the tendency to rely too heavily on an initial piece of information when making estimates
- **Availability heuristic** — estimating frequency or probability based on how easily examples come to mind
- **Concept** — a mental category grouping objects, events, or ideas based on shared features
- **Confirmation bias** — the tendency to search for, interpret, and remember evidence that confirms existing beliefs
- **Conjunction fallacy** — judging the conjunction of two events as more probable than either event alone
- **Crystallized intelligence (*Gc*)** — accumulated knowledge and skills gained through experience
- **Flynn Effect** — the rise in average IQ scores across generations, likely due to environmental factors
- **Fluid intelligence (*Gf*)** — the capacity to reason and solve novel problems independently of specific knowledge
- **Framing effect** — decision-making sensitivity to how options are presented, holding objective content constant
- **Functional fixedness** — seeing objects only in terms of their conventional use, blocking creative problem solutions
- **g (general intelligence)** — Spearman's proposed single underlying factor explaining the positive correlations among diverse cognitive abilities
- **Heuristic** — a cognitive shortcut or rule of thumb that usually produces a good answer quickly
- **IQ (intelligence quotient)** — a standardized score, typically with a mean of 100 and SD of 15, indicating performance relative to a reference population
- **Language Acquisition Device (LAD)** — Chomsky's hypothesized innate biological mechanism enabling language acquisition
- **Linguistic relativity** — the hypothesis that language influences (weak version) or determines (strong version) thought
- **Mental set** — the tendency to approach new problems with previously successful strategies, even when inappropriate
- **Morpheme** — the smallest unit of language that carries meaning
- **Phoneme** — the smallest unit of sound that distinguishes meaning in a language
- **Prototype** — the most typical or representative member of a concept category
- **Representativeness heuristic** — judging the probability of something by how well it matches a prototype
- **Semantic space** — a way of describing meaning as a location defined by relationships to other concepts, rather than a fixed list of defining features
- **Stereotype threat** — the impairment of performance that occurs when a person is aware of a negative group stereotype
- **Syntax** — the rules governing how words are arranged into grammatical phrases and sentences
- **System 1** — fast, automatic, associative, largely unconscious processing
- **System 2** — slow, deliberate, effortful, rule-governed processing
- **Universal grammar** — Chomsky's proposed set of innate grammatical principles shared by all human languages

---

## Stop and Retrieve

**1.** What is the difference between a concept and a prototype? Give an example of each.

<details><summary>Why this matters</summary>A concept is a mental category ("bird"); a prototype is the most typical member of that category (robin/sparrow for most English speakers). The distinction matters because category membership is graded — penguins are "worse" birds than robins by prototype distance — not all-or-nothing.</details>

**2.** Contrast an algorithm and a heuristic. When might a heuristic produce a better outcome than an algorithm?

<details><summary>Why this matters</summary>Algorithms guarantee correct answers but are often too slow or unavailable for real-world use. Heuristics are fast and usually good enough. In time-pressured decisions (medical triage, fire-fighting, sports) a well-calibrated heuristic frequently outperforms a slow algorithmic approach that runs out of time before producing an answer.</details>

**3.** Explain functional fixedness using Duncker's candle problem. What cognitive shift is required to solve it?

<details><summary>Why this matters</summary>The thumbtack box is seen as a container, not a potential shelf. Solving the problem requires reframing the box's function — seeing it as a platform. This is a common insight-problem structure: the block is not missing information but a fixed representation of an object's conventional use.</details>

**4.** In Kahneman's framework, what is the relationship between System 1 and System 2? Are they in competition?

<details><summary>Why this matters</summary>They are not simply in competition — System 1 handles most cognition correctly and efficiently. System 2 is a checking and deliberation system that is resource-limited. The danger is that System 1 outputs *feel* right, so System 2 often doesn't activate even when the System 1 answer is wrong. They interact, rather than compete.</details>

**5.** What is the conjunction fallacy? Why is it technically impossible to say that "bank teller and feminist" is more probable than "bank teller"?

<details><summary>Why this matters</summary>The probability of a conjunction (A AND B) can never exceed the probability of either component alone — every instance of A-and-B is necessarily an instance of A. The error arises because B (feminist activist) matches the Linda description well, and representativeness overrides probability logic.</details>

**6.** Distinguish between the strong and weak versions of the linguistic relativity hypothesis. Which has more empirical support?

<details><summary>Why this matters</summary>Strong: language determines thought (largely discredited — people can think about concepts for which their language has no word). Weak: language influences certain cognitive operations, particularly in perception and categorization domains where linguistic labels help structure experience. The weak version has moderate support from color discrimination and spatial reasoning research.</details>

**7.** What is Chomsky's "poverty of the stimulus" argument? Why is it relevant to language acquisition?

<details><summary>Why this matters</summary>The input children receive (fragmentary, error-prone, ambiguous speech) is insufficient to teach the abstract grammatical rules they end up knowing. This gap — the poverty of the stimulus — is Chomsky's core argument for why language must be partly innate. Children apply grammatical rules to novel cases they have never heard, which imitation alone cannot explain.</details>

**8.** What is the Flynn Effect and why does it complicate simple genetic explanations of intelligence?

<details><summary>Why this matters</summary>Average IQ scores have risen roughly 3 points per decade in many countries over the 20th century. Since genes cannot change this fast, the gains must be environmental. This shows that even a substantially heritable trait can change dramatically under environmental pressure — heritability describes variance *within* a population at a given time, not the degree to which a trait is fixed or unresponsive to environmental change.</details>

**9.** How does Gardner's theory of multiple intelligences differ from Spearman's *g*? What is the main criticism of Gardner's theory from a psychometric standpoint?

<details><summary>Why this matters</summary>Gardner proposes eight largely independent intelligences; Spearman proposes one underlying general factor behind all cognitive performance. The psychometric criticism is that the positive manifold (all cognitive tests correlate positively) directly contradicts genuine independence among intelligences. Gardner's abilities look more like personality traits and talents than independent cognitive faculties, and they were not derived from psychometric data.</details>

**10.** What makes AI output particularly susceptible to System 1 acceptance? What should you do differently when reading AI-generated content?

<details><summary>Why this matters</summary>AI text is typically fluent, well-organized, and confident — the surface features that trigger System 1's fluency-as-accuracy heuristic. System 2 checks are less likely to activate when input reads smoothly. To compensate: deliberately slow down when reading AI content on high-stakes topics, look for specific source citations (not just gestured-at authority), and check at least one factual claim independently before trusting the whole response.</details>

---

## Connections Table

| Topic in this chapter | Connected to | How |
|---|---|---|
| Working memory → reasoning | Ch. 8 (Memory) | Problem solving uses WM as the active workspace; WM capacity limits constrain how many problem states you can hold simultaneously |
| System 1/2 and metacognition | Ch. 4 (S&P) | Inattentional blindness is a System 1 failure to notice unattended stimuli; top-down expectation parallels schema-driven processing |
| Confirmation bias | Ch. 11 (Social Psychology) | In-group favoritism and stereotyping involve selective attention to confirming evidence about social groups |
| Linguistic relativity | Ch. 10 (Lifespan Development) | Language acquisition trajectory and the role of caregiver input connects Chomsky's LAD to developmental milestones |
| Intelligence and IQ | Ch. 11 (Personality, glossed within Social Psychology) | Personality assessment and intelligence testing share methodological roots; both rely on standardized, normed measures |
| Intelligence group differences | Ch. 13 (Disorders) | IQ score thresholds are used in intellectual disability diagnosis; stereotype threat is relevant to assessment contexts |
| Framing and decision making | Ch. 12 (Emotion, Stress & Coping) | Medical decision framing (surgery survival rate vs. mortality rate) directly affects patient choices |

---

## References

Bazerman, M. H. (2026). Judgment and decision making. In R. Biswas-Diener & E. Diener (Eds.), *Noba textbook series: Psychology*. DEF Publishers. http://noba.to/9xjyvc3a

Biswas-Diener, R. (2026). Intelligence. In R. Biswas-Diener & E. Diener (Eds.), *Noba textbook series: Psychology*. DEF Publishers. http://noba.to/ncb2h79v

Chomsky, N. (1965). *Aspects of the theory of syntax*. MIT Press.

Deary, I. J. (2001). *Intelligence: A very short introduction*. Oxford University Press.

Duncker, K. (1945). On problem-solving. *Psychological Monographs*, *58*(5, Whole No. 270).

Flynn, J. R. (1987). Massive IQ gains in 14 nations: What IQ tests really measure. *Psychological Bulletin*, *101*(2), 171–191.

Gardner, H. (1985). *Frames of mind: The theory of multiple intelligences*. Basic Books.

Horn, J. L., & Cattell, R. B. (1966). Refinement and test of the theory of fluid and crystallized general intelligences. *Journal of Educational Psychology*, *57*(5), 253–270.

Huth, A. G., de Heer, W. A., Griffiths, T. L., Theunissen, F. E., & Gallant, J. L. (2016). Natural speech reveals the semantic maps that tile human cerebral cortex. *Nature*, *532*(7600), 453–458.

Jung-Beeman, M., Bowden, E. M., Haberman, J., Frymiare, J. L., Arambel-Liu, S., Greenblatt, R., Reber, P. J., & Kounios, J. (2004). Neural activity when people solve verbal problems with insight. *PLOS Biology*, *2*(4), e97.

Kahneman, D. (2011). *Thinking, fast and slow*. Farrar, Straus and Giroux.

Levinson, S. C., Kita, S., Haun, D. B. M., & Rasch, B. H. (2002). Returning the tables: Language affects spatial reasoning. *Cognition*, *84*(2), 155–188.

Luchins, A. S. (1942). Mechanization in problem solving: The effect of Einstellung. *Psychological Monographs*, *54*(6, Whole No. 248).

Reber, R., & Schwarz, N. (1999). Effects of perceptual fluency on judgments of truth. *Consciousness and Cognition*, *8*(3), 338–342.

Rosch, E. (1975). Cognitive representations of semantic categories. *Journal of Experimental Psychology: General*, *104*(3), 192–233.

Saffran, J. R., Aslin, R. N., & Newport, E. L. (1996). Statistical learning by 8-month-old infants. *Science*, *274*(5294), 1926–1928.

Skinner, B. F. (1957). *Verbal behavior*. Appleton-Century-Crofts.

Spearman, C. (1904). "General intelligence," objectively determined and measured. *American Journal of Psychology*, *15*(2), 201–292.

Spencer, S. J., Steele, C. M., & Quinn, D. M. (1999). Stereotype threat and women's math performance. *Journal of Experimental Social Psychology*, *35*(1), 4–28.

Sternberg, R. J. (1985). *Beyond IQ: A triarchic theory of human intelligence*. Cambridge University Press.

Sternberg, R. J., Forsythe, G. B., Hedlund, J., Horvath, J. A., Wagner, R. K., Williams, W. M., Snook, S. A., & Grigorenko, E. L. (2000). *Practical intelligence in everyday life*. Cambridge University Press.

Tang, J., LeBel, A., Jain, S., & Huth, A. G. (2023). Semantic reconstruction of continuous language from non-invasive brain recordings. *Nature Neuroscience*, *26*, 858–866.

Tversky, A., & Kahneman, D. (1973). Availability: A heuristic for judging frequency and probability. *Cognitive Psychology*, *5*(2), 207–232.

Tversky, A., & Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases. *Science*, *185*(4157), 1124–1131.

Tversky, A., & Kahneman, D. (1981). The framing of decisions and the psychology of choice. *Science*, *211*(4481), 453–458.

Tversky, A., & Kahneman, D. (1983). Extensional versus intuitive reasoning: The conjunction fallacy in probability judgment. *Psychological Review*, *90*(4), 293–315.

Wason, P. C. (1968). Reasoning about a rule. *Quarterly Journal of Experimental Psychology*, *20*(3), 273–281.

Waterhouse, L. (2006). Multiple intelligences, the Mozart effect, and emotional intelligence: A critical review. *Educational Psychologist*, *41*(4), 207–225.

Whorf, B. L. (1956). *Language, thought, and reality: Selected writings of Benjamin Lee Whorf* (J. B. Carroll, Ed.). MIT Press.

Winawer, J., Witthoft, N., Frank, M. C., Wu, L., Wade, A. R., & Boroditsky, L. (2007). Russian blues reveal effects of language on color discrimination. *Proceedings of the National Academy of Sciences*, *104*(19), 7780–7785.

---

## Further Reading

- Kahneman, D. (2011). *Thinking, fast and slow.* Farrar, Straus and Giroux. — The accessible, Nobel-laureate synthesis of a career studying judgment and decision making. Read at least Part I and Part III.
- Pinker, S. (1994). *The language instinct.* William Morrow. — The case for a strong nativist position on language, written for a general audience; worth reading alongside a more interactionist account.
- Nisbett, R. E. (2003). *The geography of thought.* Free Press. — An exploration of how cultural context shapes cognition and reasoning, relevant to both linguistic relativity and intelligence cross-cultural comparisons.
