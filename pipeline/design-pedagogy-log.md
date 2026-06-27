# Design and Pedagogy Log

Status: working log for non-chapter-draft development decisions.  
Purpose: preserve the work that sits around chapter drafting: theoretical framing, visual strategy, Learning Labs, demos, AI pedagogy, attribution workflow, and prompts/instructions handed to Claude or Codex.

## How to use this file

Use this file for:

- theoretical framing decisions that are not ready for `GPT_spine.md` or `pipeline/theoretical-spine.md`
- Learning Lab ideas and lab workflow decisions
- demo/activity ideas
- figure and visual strategy
- AI-after-effort pedagogy
- source, license, attribution, and image workflow decisions
- prompts or instructions handed to Claude/Codex
- open design questions

Do not use this file for:

- full chapter drafts
- final line edits that belong directly in chapter files
- current production status that belongs in `HANDOFF.md`
- deep semanticization theory that belongs in `pipeline/concepts-semanticization-log.md`

## Working division of labor

Claude’s main role in this project has tended to be chapter drafting, revision implementation, HTML conversion, citation cleanup, and repo plumbing.

This log records the surrounding design work: the conceptual framework, visuals, demos, Learning Labs, activities, AI pedagogy, figure/source workflow, and decisions that should inform future drafting.

This is not a rigid rule. It is a practical orientation so future sessions can find the right context quickly.

## Key files to check

- `HANDOFF.md` — current production status, next-up items, append-only session log
- `GPT_spine.md` — compressed philosophy / durable orientation
- `pipeline/theoretical-spine.md` — operational framework for chapter review and drafting; Claude is currently preparing a v2
- `pipeline/concepts-semanticization-log.md` — rough theory-development log on concepts, schemas, semanticization, lossy compression, and emotions-as-mattering
- `pipeline/design-pedagogy-log.md` — this file; non-drafting design decisions, labs, demos, visuals, AI pedagogy, and workflow notes
- `pipeline/interactive-components-spec.md` — embedded chapter-level interactive components
- future `pipeline/learning-labs-spec.md` — standalone `/docs/labs/` pages, if/when created

## 2026-06-27 — Theoretical Spine v2 / semanticization workflow

Decision: do not update the ChatGPT project instructions yet. The working changes belong in repo logs and spine files first.

New theory-development log created:

- `pipeline/concepts-semanticization-log.md`

Purpose of that file:

- preserve rough working ideas about concepts, schemas, semanticization, lossy compression, Piaget, prototypes/exemplars, Huth semantic maps, stereotypes, Dunning-Kruger, expertise, AI, teaching, and the newer “concepts predict meaning / emotions predict mattering” distinction
- serve as a discovery log and source of reusable framing
- not serve as chapter prose

Current emerging trunk loop:

> partial input → attention/selection → compression → concepts/schemas → prediction → action/regulation → error → updating or defense

Important refinement:

Concepts and prediction are reciprocal, not linear. Concepts enable prediction; prediction error refines, differentiates, or protects concepts.

Key addition for future spine revisions:

Compression is adaptive but lossy. The same compression that makes perception, memory, social judgment, language, expertise, and AI useful also produces characteristic errors.

Core lines to preserve:

> The mind is not wrong because it is broken. It is often wrong because it is using a compressed model that is usually good enough.

> Concepts predict meaning. Emotions predict mattering.

## 2026-06-27 — Activity and Learning Lab implications

New activity pattern to reuse across the textbook:

> predict → classify → explain → compare → revise → transfer

This is the pedagogy version of the spine. It creates retrieval, exposes compression, produces safe prediction error, and forces semantic revision.

High-priority activity/lab ideas:

1. Lossy Compression Lab — students compare perceptual illusions, false memory, source confusion, stereotypes, diagnosis reification, expert premature closure, and AI hallucination as examples of useful compression failing at the edges.
2. Semantic Map Lab — students build a concept from examples, map typical and atypical cases, compare with a peer, revise, then use AI only after effort.
3. Concepts Predict Meaning; Emotions Predict Mattering — students separate semantic predictions from embodied/appraisal predictions in ambiguous social situations.
4. Diagnosis Is a Label, Not a Cause — students sort symptoms, labels, possible causes, and treatment targets to prevent diagnosis reification.
5. Borderline Case Machine — students classify edge cases, rate confidence, identify the feature that mattered, and revise after comparison.
6. Expert Grain Size Demo — students compare novice vs. expert categorization in familiar domains to show that expertise changes semantic resolution.
7. AI Gist Without Verification — students compare their own answer with AI output and mark claims as supported, plausible-but-unchecked, wrong, vague, or useful.

Design requirement for labs:

- accessibility-first
- privacy-preserving
- evidence-calibrated
- no claim that a short individual activity is a valid experiment on the student
- AI-after-effort, not AI-as-shortcut

## 2026-06-27 — Visual/figure implications

The new spine suggests a reusable visual grammar:

- partial input
- compression
- concept/schema
- prediction
- prediction error
- revision or defense

Possible signature figure:

**From Episodes to Concepts**

Left: individual episodes/examples  
Middle: compression into prototype/exemplar cloud  
Right: differentiated semantic map  
Bottom arrow: experience → compression → concept → prediction → feedback → revision

Caption draft:

Concepts are not dictionary entries. Repeated examples compress into semantic neighborhoods that support prediction. Typical cases sit near the center; atypical cases stretch the boundary; feedback and expertise differentiate the map.

Possible course-wide prompt attached to illusions, memory errors, stereotypes, diagnosis labels, and AI mistakes:

> What did the system preserve? What did it discard? When did the discarded information become important?

## 2026-06-27 — Detailed activity and Learning Lab proposals

These are candidate activities generated from the current spine. They are not yet assigned to specific builds. Treat this section as a menu for future `/docs/labs/` pages, in-class demonstrations, D2L activities, or chapter callouts.

### Reusable activity pattern

Use this as the default structure when turning a concept into an activity:

> predict → classify → explain → compare → revise → transfer

Pedagogical purpose:

- require retrieval or prediction before explanation
- expose the student’s current compressed model
- create safe prediction error
- support revision without humiliation
- test transfer to a new case

### 1. Lossy Compression Gallery / Lossy Compression Lab

**Use in:** Prologue, Ch. 4 Perception, Ch. 7 Memory, Ch. 8 Concepts, Ch. 11 Social, Ch. 13 Disorders  
**Possible format:** in-class station demo, reusable Learning Lab, or chapter-spanning review activity  
**Core idea:** The mind compresses information because it has to. Compression works until edge cases expose what was discarded.

Stations could include:

| Station | What is compressed | What error appears |
|---|---|---|
| Optical illusion | lighting, depth, or constancy priors | perceptual error |
| Gist memory | meaning of a list or story | false detail |
| Source memory | claim separated from origin | familiarity mistaken for truth |
| Social category | people compressed into group expectation | stereotype |
| Diagnosis | symptoms compressed into label | label mistaken for cause |
| Expertise | fluent pattern recognition | premature closure |
| AI answer | statistical gist | plausible hallucination |

Student prompt:

> What did the system preserve? What did it discard? When did the discarded information become important?

Instructional value: This could become the signature lab for the framework because it connects perception, memory, concepts, social judgment, diagnosis, expertise, and AI.

### 2. Concepts Predict Meaning; Emotions Predict Mattering

**Use in:** Ch. 8 Concepts, Ch. 12 Emotion, Ch. 13 Therapy  
**Possible format:** paired in-class activity, short lab component, discussion prompt  
**Core idea:** Concepts and emotions are both prediction-based, but they prepare the organism for different futures.

Prompt students with ambiguous scenarios, for example:

> Your professor says, “Can you stay after class for a minute?”

Students complete two columns:

| Concept prediction | Emotion/appraisal prediction |
|---|---|
| What is this situation? | What does this mean for me? |
| meeting, feedback, grade, request, clarification | threat, curiosity, embarrassment, relief, opportunity |

Debrief point:

The same semantic situation can produce different predictions of mattering depending on prior experience, current state, goals, relationship, and self-concept.

Framework line:

> Concepts predict meaning. Emotions predict mattering.

### 3. Schema Accommodation: Doggie, Deer, and Reinforcement

**Use in:** Ch. 6 Learning, Ch. 8 Concepts, Ch. 9 Development  
**Possible format:** worked example, short classification quiz, active lecture segment  
**Core idea:** Piaget’s schemas map directly onto prediction and model revision.

Structure:

1. Give students a crude starting schema: “reinforcement = reward.”
2. Ask them to classify cases.
3. Introduce edge cases that break the crude schema.
4. Have them revise the concept.
5. Test transfer to new cases.

Useful cases:

- A parent removes chores after a child cleans their room.
- A student checks their phone to reduce anxiety.
- A rat presses a lever and food appears.
- A child is scolded, but the attention increases the behavior.

Revision target:

> Reinforcement is not reward. Reinforcement is any consequence that increases behavior.

Instructional value: This teaches Piaget, prototypes, negative reinforcement, prediction error, and conceptual differentiation in one activity.

### 4. Semantic Map Lab — Build a Concept from Examples

**Use in:** Ch. 8 Concepts; reusable across chapters  
**Possible format:** standalone `/docs/labs/` page  
**Core idea:** Concepts are not definitions. They are structured spaces built from examples, goals, experience, and cultural context.

Candidate concepts:

- chair
- bird
- intelligence
- stress
- disorder
- fairness
- addiction
- reinforcement
- stereotype

Steps:

1. List 8 examples.
2. Mark 2 typical and 2 borderline examples.
3. Create two axes that organize the examples.
4. Place the examples on the map.
5. Compare with a peer.
6. Revise the axes.
7. Ask AI for a different map only after effort.
8. Explain what AI noticed, missed, or overgeneralized.

Learning target:

Students experience that concepts are not dictionary entries. They are structured spaces built from examples, goals, experience, and cultural context.

### 5. Borderline Case Machine

**Use in:** Ch. 8 Concepts, Ch. 13 Diagnosis, Ch. 11 Social  
**Possible format:** quick in-class demo, reusable lab component, D2L quiz with justification  
**Core idea:** Concepts become clearer at the boundary.

Possible cases:

- Is a beanbag a chair?
- Is a penguin a bird?
- Is grief depression?
- Is nervousness anxiety disorder?
- Is persuasion manipulation?
- Is habit addiction?
- Is confidence intelligence?

Student sequence:

1. Initial classification.
2. Confidence rating.
3. Identify the feature that mattered most.
4. Name what would change your mind.
5. Revise after comparison or feedback.

Instructional value: Trains conceptual boundaries and metacognitive calibration.

### 6. Diagnosis Is a Label, Not a Cause

**Use in:** Ch. 13 Disorders, Ch. 2 Research Methods, Ch. 8 Concepts  
**Possible format:** in-class card sort, chapter callout, standalone lab  
**Core idea:** Diagnosis compresses symptom patterns, but compression can be mistaken for explanation.

Cards could include:

- sleep disruption
- low energy
- loss of interest
- persistent sadness
- appetite change
- social withdrawal
- diagnosis: major depressive disorder
- possible biological contributors
- possible learning history
- possible social stressors
- possible treatment targets

Student sort categories:

1. Observed symptoms
2. Pattern label
3. Possible causes
4. Treatment targets

Key prompt:

> What has the diagnosis explained? What has it not explained?

Instructional value: Directly attacks diagnosis reification while preserving the usefulness of diagnosis.

### 7. Expert Grain Size Demo

**Use in:** Ch. 8 Concepts, Prologue, possibly Personality/Intelligence  
**Possible format:** in-class demo  
**Core idea:** Expertise changes the basic level and grain size of categorization.

Possible domains:

- dogs
- birds
- cars
- coffee drinks
- video games
- makeup products
- sports plays
- music genres

Structure:

1. Show images or descriptions from a domain where student expertise varies.
2. Ask students to name what they see.
3. Compare novice and expert labels.
4. Discuss what features experts noticed that novices ignored.

Framework line:

> Expertise is not just more facts. It is a denser semantic map.

### 8. Stereotype as Social Prototype

**Use in:** Ch. 11 Social, Ch. 8 Concepts  
**Possible format:** fictional-group demo, privacy-preserving lab  
**Core idea:** Stereotypes are social concepts built from biased examples.

Use fictional groups rather than real protected identities.

Example structure:

1. Students read short profiles from two fictional campus clubs or invented groups.
2. One group’s sample is biased: a few vivid members are extreme.
3. Students estimate group traits.
4. Debrief how availability, salience, and sample bias shaped the prototype.

Prompts:

- Which examples were most available?
- Which examples shaped the prototype?
- What did the compressed category preserve?
- What did it distort?
- How would media exposure amplify this?

Instructional value: Shows ordinary categorization machinery applied to people under biased sampling, emotional salience, repetition, and power.

### 9. AI Gist Without Verification

**Use in:** Prologue, Ch. 2 Research Methods, Ch. 8 Concepts, assignments  
**Possible format:** AI-after-effort lab  
**Core idea:** AI hallucination can be taught as plausible semantic construction without grounded verification.

Steps:

1. Students answer a conceptual question from memory.
2. Students ask AI for an explanation.
3. Students mark each AI claim as:
   - supported by text/class
   - plausible but unchecked
   - wrong
   - too vague
   - useful example
4. Students revise their own answer.

Key prompt:

> Where did AI preserve the gist? Where did it fill in missing structure without evidence?

Instructional value: Supports responsible AI use without outsourcing the learning task.

### 10. Prediction Error Without Humiliation

**Use in:** any chapter  
**Possible format:** repeated classroom routine  
**Core idea:** Good teaching creates safe model failure.

Structure:

1. Predict first.
2. Commit confidence.
3. See a case that violates the prediction.
4. Explain what your model assumed.
5. Revise the concept.
6. Try a transfer case.

Instructional value: This is a general teaching routine rather than a single lab. It can be embedded in chapters, slides, assignments, and Learning Labs.

### 11. Explain Without the Label

**Use in:** Ch. 8 Concepts, Ch. 13 Disorders, Ch. 11 Personality/Social, Ch. 6 Learning  
**Possible format:** short writing prompt or discussion routine  
**Core idea:** Labels compress patterns, but students often mistake the label for an explanation.

Candidate labels:

- depression
- intelligence
- personality
- addiction
- stress
- reinforcement
- memory
- stereotype
- trauma

Prompt:

> Explain the pattern without using the label.

Example:

Instead of “They avoid because they have anxiety,” students must describe the trigger, prediction, body response, avoidance behavior, short-term relief, and long-term maintenance loop.

Instructional value: Prevents reification and forces mechanism-level explanation.

### 12. Prediction Ledger

**Use in:** any chapter; especially labs and assignments  
**Possible format:** reusable worksheet or lab component  
**Core idea:** Make model revision visible.

Template:

| My prediction | What happened | What my model missed | Revised concept |
|---|---|---|---|
|  |  |  |  |

Use cases:

- perceptual illusions
- reinforcement examples
- memory demonstrations
- diagnosis cases
- social judgment cases
- AI output verification

Instructional value: Converts “I was wrong” into “my model was incomplete,” which supports safe correction.

### Build priority

Highest-value standalone labs:

1. Lossy Compression Lab
2. Semantic Map Lab
3. Diagnosis Is Not a Cause Lab
4. Concept Calibration / Borderline Case Lab
5. AI Gist Verification Lab

Highest-value low-build classroom routines:

1. Predict → classify → explain → compare → revise → transfer
2. What did the system preserve/discard?
3. Explain without the label
4. Prediction ledger
5. Borderline case vote
