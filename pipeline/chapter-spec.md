# Chapter Writing Pipeline Spec

> This document governs how every chapter of the Psych101 textbook is drafted.  
> Author: Jon Oxford Ph.D. | Last updated: 2026-06-17 | Version 3.0  
> Format decision: plain HTML throughout. No Quarto migration. PDF via browser print if needed.

---

## 0. Prologue (Before Chapter 1)

A standalone module — not part of Chapter 1 — titled something like **"How to Actually Learn This Stuff"** or **"Before You Start."**

**Purpose:** Teach evidence-based study strategies before students develop bad habits. Frame the textbook's design as intentional. Foreshadow 4–5 later chapters through the lens of learning science.

**Content:** retrieval practice beats re-reading (→ Ch. 6 Learning), spaced repetition (→ Ch. 8 Memory), self-reference effect (→ Ch. 8 Memory), dual coding/visual imagery (→ Ch. 4 Sensation & Perception), why highlighting is a waste of time, metacognition.

**Status:** Draft content already exists at https://jkoxford-a11y.github.io/psych101_awesome-sauce/ (Quarto site covering attention, encoding, retrieval, spacing, sleep, study habits, working memory demo). Integrate or adapt, don't rebuild from scratch.

**Format:** Own HTML page, linked from `docs/index.html` before Chapter 1. Assign it. Students who read it understand why the book is structured the way it is.

---

## 1. Design Philosophy

This is not a conventional textbook. It is a **modular learning system** where prose is one component among several. The highest-impact elements are those that force students to retrieve, apply, discriminate, and revise misconceptions.

**Core learning unit:** concept → misconception → demonstration → retrieval → application → transfer

**Self-reference principle:** Every "Think About It" prompt and reflection question addresses the student directly — "think of a time when *you*..." not "imagine a student who..." The self-reference effect is robust: encoding connected to self produces better recall than semantic encoding alone.

**Interconnection principle:** Students learn by seeing the *network*, not isolated chapters. Every chapter explicitly reviews prior concepts and foreshadows future ones. The architecture supports this at three levels: (1) "Where This Fits" opener, (2) inline cues within prose, (3) Connections table at chapter end.

---

## 2. Chapter Structure — Menu Model

**Not every chapter uses every element.** The required core is small; optional elements are chosen based on what the chapter's content actually needs. Forcing elements where they don't fit produces a formulaic book.

### Required in every chapter (in order):

1. **Misconception Opener** *(where students have strong priors — most chapters)*  
   State the common wrong belief. Activate it. Explicitly reject it. Replace it with the scientific account. Format: *Common belief → why it's tempting → what the evidence says → better model.* Not a callout box — woven into the opening paragraph or a brief framing section. Skip only when no meaningful prior misconception exists.

2. **Where This Fits** *(~100 words)*  
   One paragraph. Foreshadows the chapter's role in the larger web. Names at least one forward connection and one backward connection (except Chapter 1). Written in the instructor's voice — a pitch, not a summary.

3. **Learning Objectives**  
   4–7 items, action verbs only (explain, distinguish, apply, evaluate, predict — never "understand" or "know"). Anchored to APA IPI Student Learning Outcomes and the relevant pillar(s). Rendered as a styled callout box in HTML.

4. **Content Sections** *(see §3)*  
   The body. Prose, not bullets. Instructor voice throughout. 3–5 major sections per chapter.

5. **Chapter Summary**  
   One paragraph per major section. Written to cue recall, not re-explain — activates retrieval rather than enabling passive re-reading. Tight.

6. **Connections Table** *(see §4)*  
   Explicit cross-chapter link table with hyperlinks. Before Review Questions.

7. **Review Questions**  
   8–12 retrieval-style questions. Mix of factual, conceptual, and application. At least 2 require connecting concepts across sections or chapters. **Every question includes rationale for why wrong answers are tempting** — not just the correct answer.

8. **Key Terms**  
   Alphabetical glossary. Each entry: term + one-sentence definition. In HTML, hover-linked from inline use.

9. **Further Reading / Resources**  
   3–6 curated links (Noba modules, APA IPI, accessible primary sources). Brief annotation per item.

### Optional elements — use when the chapter calls for it:

| Element | Use when |
|---|---|
| **"Do Not Confuse" panels** | Confusable concept pairs exist (e.g., negative reinforcement vs. punishment, correlation vs. causation, recall vs. recognition) |
| **Classic study + replication walkthrough** | A landmark study defines the chapter's territory (Milgram, Pavlov, Little Albert, Asch, Phineas Gage, etc.) |
| **Worked examples with fading** | Expert reasoning needs to be modeled: research methods, statistics, case analysis, diagnosis |
| **Data/figure interpretation task** | Chapter involves quantitative reasoning or graph reading |
| **Interactive demo** | A manipulable simulation will do cognitive work the prose cannot *(see §5)* |
| **"Teach Tomorrow" activities** | Instructor-facing supplement; not core chapter content |

---

## 3. Content Sections

### 3a. Section structure
Each major section follows this pattern, in order:
- **Hook opening** — anecdote, counterintuitive fact, question, or animal behavior example. Not a topic sentence announcing what the section covers.
- **Prose narrative** — no sub-bullets inside body sections. If something needs a list, convert it to prose.
- **Inline key term bolding** — first use of each key term is **bolded**.
- **Inline foreshadow/review cues** — brief parenthetical where a concept connects to another chapter: *"(we return to this in Chapter 9, where the same mechanism drives phobia treatment)."* One or two per section maximum.
- **"Stop and Retrieve" micro-question** — 1–2 brief inline questions per section, placed at natural pause points before moving on. Format: *"Before reading further: in your own words, what is the difference between X and Y?"* These interrupt passive reading mid-section, not just at the end.
- **"Think About It" prompt** — one per major section, set off visually. Self-referential framing required: connects the concept to the student's own experience. Not graded.

### 3b. How many sections?
3–5 major sections per chapter. More than 5 fragments the narrative.

### 3c. "Do Not Confuse" panels *(optional)*
Side-by-side comparison of two confusable concepts with a diagnostic question: "Which is which in this scenario?" Place at the point of maximum confusion, not at chapter end. High-value pairs include:
- Negative reinforcement vs. punishment
- Classical vs. operant conditioning
- Correlation vs. causation
- Reliability vs. validity
- Recall vs. recognition
- Depression vs. normal sadness
- Availability vs. representativeness heuristic

---

## 4. Connections Section

A dedicated section at the end of the chapter body, before Review Questions.

### Format
HTML table, three columns, hyperlinked:

| Concept from this chapter | Reappears in | Why it matters there |
|---|---|---|
| [concept — links to inline anchor] | Ch. X — [Title — links to chapter file] | [one sentence] |

- 4–8 rows minimum
- At least one non-obvious connection (not just adjacent chapters)
- Covers both forward (foreshadow) and backward (review) links

### Writing the connections
Before drafting: scan `concept_lineage_revised.csv` for concepts in other chapters sharing mechanisms, themes, or empirical lineage with this chapter. The goal is the *network*, not a checklist. Examples of the kind of connection to look for:
- Associative learning (Ch. 6) → behavioral therapies (Ch. 13) → social influence via conditioning (Ch. 11)
- Working memory limits (Ch. 8) → cognitive load in learning (Ch. 6) → eyewitness error (Ch. 8)
- Evolutionary framing (Ch. 1) → motivation and emotion (Ch. 9) → social behavior (Ch. 11)

---

## 5. Interactive Demos

### Philosophy
Interactivity alone does not improve learning. A demo must do **cognitive work**: prediction, contrast, error correction, feedback, transfer. Every demo uses the scaffold:

> **Predict first** → **Manipulate** → **Observe** → **Explain** → **Retrieve** → **Transfer**

The wrapper text around every embedded demo must include: (1) a prediction prompt before the student interacts, (2) an explanation prompt after, and (3) a retrieval check without looking back.

### Integration
Existing demos integrate via **iframe embed** in chapter HTML, with the predict/explain/retrieve scaffold as surrounding prose. Do not rebuild demos that already exist — link or embed them.

### Existing demo inventory

| Chapter area | Demos available | Source |
|---|---|---|
| Prologue / Memory | Attention & working memory, encoding, retrieval, spacing, sleep, study habits, learning system audit, working memory demo | psych101_awesome-sauce |
| Neuroscience — neurons | Action potentials: electrochemical gradients, threshold/all-or-none, voltage-gated channels, refractory periods, saltatory conduction (each with prediction challenges + simulator) | awesome-sauce_neuroscience |
| Neuroscience — systems | Neurotransmitter mixing board, receptor polymorphisms, synaptogenesis/pruning, social bonding (oxytocin/vasopressin), predictive processing | neuronew |
| Neuroscience — circuits | Build-the-circuit, signal sorting, circuit sandbox, meal state/hunger, lesion simulator, incretin drugs | hunger_regulation |
| Sensation & Perception | Motion: apparent motion, aftereffect, RDK, aperture problem, biological motion, induced motion, representational momentum, corollary discharge, Heider & Simmel | motionperception |
| Sensation & Perception | Visual attention demos | sensationperception / 6_101_S-P_Demos |
| Sensation & Perception — action | Optic flow/FOE, swinging room, blind walk/spatial updating, curve steering, affordances, size-weight illusion | takingaction |
| Research Methods / Stats | Normality, regression, chi-square, sampling distributions/CLT (coffee sim) | solid-carnival |

### Demos still needed (priority order)
1. Conditioning simulator — CS/US pairing, reinforcement schedules, extinction, negative reinforcement vs. punishment (highest priority; most persistent confusion)
2. Correlation/causation simulator — manipulate third variables, sample size, range restriction
3. Signal detection theory — d′, criterion, ROC curve; unifies perception, cognition, clinical testing
4. Forgetting/retrieval practice simulator — study strategy comparison with retention curves (also serves prologue)
5. Clinical diagnosis decision tree — vignettes distinguishing normal distress from disorder
6. Research ethics branching cases — IRB decisions with feedback

---

## 6. Voice Rules

Consult `source/voice_profile_merged.csv` before drafting each chapter.

- **Persona** — Herr Prof. Dr. Awesome-Sauce appears in hooks, asides, and "Think About It" prompts. Not in formal definitions or summaries.
- **Signature analogies** — use where they fit, never forced:
  - Tesla Vision → Sensation & Perception
  - Automatic camera → Consciousness
  - Video camera misconception → Memory (always subvert this)
  - Sapolsky/dopamine → Learning/motivation
  - Animal Model connector → any time a human finding has an animal research basis
- **Evolutionary/comparative framing** — default lens. Ask "what problem did this solve?" for any psychological mechanism before explaining what it does.
- **Tone** — conversational but precise. No hedging on well-established findings. Honest about genuine uncertainty. Never condescending.
- **No passive voice** in explanatory passages.
- **Self-reference throughout** — "Think About It" prompts always use *you*, not hypothetical third parties.

---

## 7. Copyright Handling

Check `wording_change_driver` in `concept_lineage_revised.csv` before drafting each concept:

| Flag | Action |
|---|---|
| `instructor-revision` or `n/a` | Draft freely from course materials |
| `publisher-template-change` | Draft freely — wording changed for formatting reasons, not IP |
| `book-adoption` | Borrow definition/framing from Noba Project or APA IPI. Do not use course slide wording. |
| `needs-verification` (source_confidence) | Same as book-adoption — use Noba/APA IPI |

Never copy wording from Wade & Tavris, King, or Myers.

---

## 8. APA IPI Alignment

Each chapter addresses its relevant APA pillar(s) and 2–4 applicable integrative themes:

1. Psychological science relies on empirical evidence and adapts as new evidence emerges
2. Psychology explains general principles that apply across a variety of situations
3. Psychological, biological, social, and cultural factors influence behavior and mental processes
4. Psychology values diversity, equity, and inclusion
5. Our perceptions and biases can be inaccurate
6. Psychological findings can be applied to everyday life
7. Ethical principles guide psychological study and application

At least one theme must appear explicitly in the Learning Objectives.

---

## 9. Length Targets

| Element | Target |
|---|---|
| Where This Fits | ~100 words |
| Learning Objectives | 4–7 items |
| Body (all content sections combined) | 3,500–5,000 words |
| Chapter Summary | 200–400 words |
| Connections table | 4–8 rows |
| Review Questions | 8–12 questions |
| Key Terms | 8–20 terms |

Total prose per chapter: ~4,500–6,000 words.

---

## 10. Drafting Sequence (Per Chapter)

1. Pull all concepts for the chapter from `concept_lineage_revised.csv`
2. Check `wording_change_driver` — flag any `book-adoption` or `needs-verification` concepts
3. Scan `voice_profile_merged.csv` for relevant analogies and voice patterns
4. Check demo inventory (§5) — identify existing demos to embed; flag gaps needing new builds
5. Identify 4–8 cross-chapter connections for the Connections table
6. Identify confusable concept pairs → plan "Do Not Confuse" panels if warranted
7. Identify landmark study → plan classic study walkthrough if warranted
8. Draft Misconception Opener
9. Draft Learning Objectives (APA-aligned)
10. Draft "Where This Fits" paragraph
11. Draft content sections (body), with Stop & Retrieve micro-questions and Think About It prompts
12. Draft Chapter Summary
13. Draft Connections table
14. Draft Review Questions with wrong-answer rationales
15. Compile Key Terms glossary
16. Add Further Reading
17. Integrate demo embeds with predict/explain/retrieve wrappers
18. Convert markdown draft to HTML and place in `docs/chapters/`

---

## 11. File Naming

| Format | Location | Convention |
|---|---|---|
| Markdown draft | `source/chapters/` | `ch01-history-approaches.md` |
| HTML final | `docs/chapters/` | `ch01-history-approaches.html` |
| Prologue markdown | `source/` | `prologue-how-to-study.md` |
| Prologue HTML | `docs/` | `prologue.html` |

---

---

## 12. AI Integration

### Philosophy

AI integration is **bidirectional** — it serves two distinct goals simultaneously, and both must be present:

1. **Psychology explains AI** — when a psychological concept has a genuine structural parallel in how AI systems work, showing that parallel helps students understand *both* the concept and why AI behaves the way it does.
2. **AI illustrates psychology** — AI's failures and limitations make abstract psychological concepts concrete. Sycophancy illustrates social desirability bias more vividly than a textbook example because students already interact with AI. Hallucinations make the constructive nature of memory tangible.

Integration is a **recurring thread**, not a separate chapter. It lives inside content sections, Stop & Retrieve prompts, and Think About It prompts — not as add-on boxes that a reader can skip.

### The "where the analogy breaks" rule

Every AI connection must include not just the parallel but where it fails. This is the pedagogical core: the breakdown point reveals something true about AI *and* something true about the psychological mechanism. Example:

> RLHF operates like operant conditioning: the model produces outputs and receives reinforcement signals that shape future behavior. **But the analogy breaks:** operant conditioning requires a behaving organism with internal states — motivation, drive reduction, affect. RLHF updates model weights; nothing is *trying* to get rewarded. The difference matters for predicting when AI will "resist" reinforcement — it won't, in the way an animal will when the behavior conflicts with a competing drive.

The breakdown analysis follows this structure: *AI borrowed concept X from psychology → simplified it by removing Y → which means AI will fail when Y matters.*

### Format: "AI Connection" passages

Use a visually distinct passage (styled callout in HTML, blockquote-style in markdown) when the connection is:
- Genuinely structural (not just metaphorical)
- Illuminating in both directions
- Explainable without requiring technical knowledge the student doesn't have yet

Do not use when the connection is superficial, decorative, or would require more setup than the payoff justifies. A bad AI Connection is worse than none.

**Three-part structure for every AI Connection:**

1. *The parallel:* what AI engineers borrowed or approximated from this concept
2. *The simplification:* what they left out, and why (computational cost, unknown mechanism, no equivalent in digital systems)
3. *What the breakdown tells us:* either about AI's limitations or about why the original psychological mechanism matters

### Human-AI Cognitive Alignment — Prologue integration

The prologue section ("How to Actually Learn This Stuff") should include a final unit on **working with AI as a cognitive tool**. This is not a bonus tip — it is study-skills science applied to a new tool students are already using badly.

**Core content for prologue AI unit:**
- Clark & Brennan grounding theory applied to AI: AI has no access to your context, intentions, or prior knowledge unless you provide it. The cognitive work of establishing common ground is entirely on the human side.
- The illusion of knowing (already in prologue for memory) extends to AI fluency: polished, confident output activates the same metacognitive signal as comprehension. Students who read an AI summary feel like they've learned.
- Elicited disambiguation activity: show a bare prompt → show an aligned prompt → compare outputs. Students see that prompt specificity is not a tech skill but a clarity-of-thought skill. You cannot prompt well for a topic you don't understand.
- Connects forward: ToM (Ch. 9 Social — AI has no mental states to read), working memory (Ch. 7/8 — context windows *as* working memory but no executive control), metacognition (Ch. 7/8 — calibrating when to trust AI output).

### Chapter-by-chapter touchpoints

Select touchpoints per chapter based on depth of parallel and student readiness. Not every chapter needs an AI Connection. Lighter touches (one sentence in a Think About It prompt) are better than forced full callouts.

| Chapter | Touchpoint | Depth |
|---|---|---|
| **Ch. 1 — History & Approaches** | Turing and "can machines think?" as the cognitivist turn in miniature; Skinner-Chomsky debate resurrected by LLMs (statistical learning vs. innate structure); connectionism and the PDP models as the intellectual ancestors of neural networks | Light — historical frame, no technical detail needed |
| **Ch. 2 — Biological Bases of Behavior** | Hebbian learning ("neurons that fire together wire together") → backpropagation as a mathematical approximation; artificial neural networks as inspired-by, not modeled-on, biology; **breakdown:** ANNs have no axons, dendrites, glial cells, or neuromodulation — they borrowed the metaphor, not the mechanism. RLHF → dopamine prediction-error signal; **breakdown:** dopamine encodes signed prediction errors tied to survival; RLHF encodes human preference ratings — the substrate and the stakes are entirely different. Catastrophic forgetting as the ANN version of retroactive interference. | Medium — tie to neural structure content; demo opportunity |
| **Ch. 4/5 — Sensation & Perception** | Feature detection (Hubel & Wiesel) → convolutional neural networks; CNNs trained on ImageNet reproduce early visual cortex tuning curves — genuine convergence. Top-down vs. bottom-up processing → the same distinction in vision AI. Tesla Vision analogy extended: self-driving is top-down prediction all the way down. Predictive coding (Helmholtz/Clark) → next-token prediction as the LLM equivalent; **breakdown:** predictive coding in brains updates generative models through prediction error minimization — LLMs compute a probability distribution over tokens, no continuous model update during inference. Change blindness → AI hallucination blindness (users fail to notice errors in fluent text for the same reason we fail to notice scene changes). | Full callout opportunity — connects to existing Tesla Vision signature analogy |
| **Ch. 6 — Learning** | RLHF as operant conditioning with shaping: early training reinforces broad correct outputs, later training reinforces finer distinctions. Stimulus generalization and discrimination apply directly — overtrained models generalize when they should discriminate. Classical conditioning → token association (co-occurrence statistics during training are associative, not semantic); **breakdown:** Pavlov's dog developed a conditioned response through contingency; LLMs develop statistical associations through exposure — the mechanism differs but the surface behavior (conditioned-like responses to cues) looks similar. Reinforcement schedules: RLHF doesn't use variable-ratio schedules, but the parallel illuminates why variable reinforcement is powerful. | Full — this is the chapter where the deepest parallels live |
| **Ch. 7/8 — Memory & Cognition** | Working memory → context window: both are limited-capacity active buffers; **breakdown:** working memory has an executive controller that allocates attention — context windows are flat; there's no homunculus deciding what to attend to. Google effect / cognitive offloading → AI offloading; the illusion of knowing extends to AI fluency. Encoding specificity → training distribution: models perform best on inputs resembling their training data, like humans perform best on retrieval cues that match encoding context. Semantic networks / spreading activation → embeddings (high-dimensional vector spaces capture associative distance); genuinely analogous. Dual-process theory: System 1 fluency of AI output fools metacognitive System 2 monitoring — this is why AI errors are dangerous, not just wrong. Availability and representativeness heuristics applied to AI use: students over-rely on AI for topics where it's actually unreliable (availability: they've seen it be right before). Schemas → template-driven AI output. | Full — multiple Stop & Retrieve opportunities here |
| **Ch. 9 — Social Psychology** | Social desirability bias → sycophancy: AI systems trained on human preference ratings inherit a systematic bias toward agreement. Conformity → AI as confident consensus of one (no dissenting minority). FAE → anthropomorphism: we attribute intentions and mental states to AI behavior by default, same mechanism as we do with other humans. ELM peripheral processing → accepting AI output on the basis of fluency and confidence rather than argument quality. Bystander effect → diffusion of responsibility for AI output ("the AI said it, not me"). Social learning / observational learning → fine-tuning on human-generated text. ToM: AI has no mental states to model — this is the precise breakdown point for all social analogies. | Full — most accessible chapter for AI ethics discussion |
| **Ch. 10/11 — Research Methods & Statistics** | Type I/II errors → hallucination acceptance (false positive: accepting a hallucination as true) vs. over-skepticism (false negative: rejecting a correct AI output). Validity and reliability applied to AI output: is it measuring what it claims? Does it replicate? Operationalization → prompt engineering: specifying what you want precisely enough to measure it is the same cognitive challenge. Sampling bias → training data bias: the data AI was trained on is not a random sample of human knowledge. Internal validity → confounds in AI-generated "research summaries." | Medium — methodological framing, high practical value |
| **Ch. 12 — Developmental Psychology** | ZPD → AI as scaffolding tool that requires calibration: effective scaffolding meets the learner in the zone, not below or above it. AI scaffolding fails when students use it to skip the zone entirely (assimilation without accommodation). Piaget assimilation/accommodation → passive AI use (assimilation: fitting AI output into existing schemas without restructuring) vs. active use (accommodation: using AI output that challenges schemas to update them). Language acquisition: Chomsky's universal grammar debate reactivated — statistical learning in infants vs. LLMs (both learn from distributional patterns; what does this tell us about language acquisition?). | Light-to-medium — student agency framing is the hook |
| **Ch. 13 — Psychological Disorders & Treatment** | Diagnostic reasoning errors (anchoring, premature closure) illustrated with AI diagnostic tools — same heuristic failures. Confidentiality → HIPAA/AI data handling: what counts as protected health information when it's entered into an AI system? Emotional contagion → AI sentiment mirroring: AI systems trained on emotionally laden text may mirror distress rather than provide therapeutic responses — clinical risk. Cognitive restructuring → what AI cannot do: restructuring requires a behaving person with beliefs, affect, and revision — AI produces restructuring-*shaped* language. | Medium — ethics and clinical application focus |

### Jon's intuition: "AI has personalities, memory, needs context"

This is accurate and maps cleanly:
- **Personalities** — different AI systems have systematic behavioral tendencies that function like trait-like consistency. Sycophancy varies by model. This connects to personality chapter (trait theory, person-situation debate) and to social psych (behavioral consistency vs. situational sensitivity).
- **Memory** — AI has no persistent memory across conversations by default. Within a conversation, context window = working memory. Across conversations = nothing, unless externally provided. This connects to memory chapter discussions of encoding, storage, and the difference between availability and accessibility.
- **Needs context** — this is Clark & Brennan grounding theory in practice. AI can only work with what's in its context; establishing common ground is the human's cognitive task. Prologue is the right place for this.

---

*Spec version 3.0 — adds AI integration framework. Pilot Chapter 1 draft will test and refine.*
