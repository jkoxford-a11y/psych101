# Interactive Demo Ideas — by Chapter

Companion to `activity-ideas.md`. This file tracks standalone interactive widget/demo ideas for each chapter. Demos are primarily illustrative — students observe or manipulate something to see a phenomenon. Items that work well as **pair or small-group classroom activities** are marked 👥.

Demo vs. activity distinction:
- **Demo:** Interactive widget — sliders, simulators, classifiers, reaction-time tasks, visualizations. Student *observes or manipulates*.
- **Activity:** Guided exercise with prompts, reflection, or collaborative task. Student *applies vocabulary*.

Some demos double as group activities — these are the most versatile builds.

See also: `docs/labs/` (standalone lab pages), `pipeline/labs-spec.md` (lab architecture).

---

## Status labels

- **Idea** — rough concept only
- **Planned** — confirmed for build; may be in pipeline
- **Exists** — already built (link or repo noted)
- **Draftable** — design clear enough to build now

---

## Prologue — How to Actually Learn This Stuff

### Spaced Retrieval Scheduler
Status: Exists (built in prologue interactive components)
Type: widget
Core concepts: spacing effect, retrieval practice
Notes: Already in `docs/prologue.html`. Students input their concept list and exam date; scheduler auto-suggests three study sessions with .ics download.

### Calibration Dashboard
Status: Exists (built in prologue interactive components)
Type: widget
Core concepts: metacognition, calibration, fluency illusion
Notes: Already in `docs/prologue.html`. Aggregates confidence ratings vs. self-scored accuracy across all 8 Stop & Retrieve prompts.

---

## Chapter 1 — History & Approaches

### Perspective Sorter 👥
Status: Draftable
Type: drag-and-drop classifier
Core concepts: 7 major perspectives (biological, psychodynamic, behavioral, cognitive, humanistic, sociocultural, evolutionary)
Demo sketch: Show a brief scenario (e.g., "Maria is afraid of dogs after being bitten as a child"). Students drag it to the perspective(s) that would study it and how. Instant feedback shows what each perspective would emphasize.
Group use: Each pair is assigned one perspective and defends their classification to the class.
Notes: Low-build complexity; high pedagogical payoff for Ch1. Works as an opener for any later chapter too.

### Timeline Drag-and-Drop
Status: Idea
Type: sorting/ordering widget
Core concepts: history of psychology, key figures (Wundt, James, Watson, Freud, Maslow, etc.)
Demo sketch: Students drag cards (founding event + name) to the correct era on a timeline. Reveals era label on correct placement.
Notes: Low educational depth; mostly gamification. Lower priority than perspective sorter.

---

## Chapter 2 — Research Methods & Statistics

### Correlation vs. Causation Classifier 👥
Status: Planned — **first lab build** (`docs/labs/ch02/correlation-causation.html`)
Type: classifier
Core concepts: correlation, causation, third-variable problem, directionality problem
Demo sketch: Students read 10 research headlines and classify: "Does this show causation? Why or why not?" Tiered feedback per response.
Group use: Pairs debate ambiguous cases; then reveal the design details that would (or wouldn't) support causal inference.
Notes: First vertical slice of the labs system. Establishes the template for other classifier labs.

### p-Value Simulator
Status: Idea
Type: simulation
Core concepts: p-value, null hypothesis, Type I error, sampling variability
Demo sketch: Slider sets sample size. Button runs 1,000 simulated studies with null hypothesis true. Bar chart shows p-value distribution — student sees that ~5% land below .05 even when there is no effect.
Notes: Addresses the most common p-value misconception directly. Pairs with Ch2's "Common Misreadings" box. Moderate build complexity.

### Scatter Plot Correlation Guesser 👥
Status: Idea
Type: estimation game
Core concepts: correlation, r value, scatter plot interpretation
Demo sketch: Show a scatter cloud; student enters their estimate of r before seeing the value. Score improves with accuracy.
Group use: Teams compete; debrief on systematic biases in estimation.
Notes: Fast build; reinforces visual intuition for correlation strength.

### Random Sampling vs. Assignment Visualizer
Status: Idea
Type: animation/interactive
Core concepts: random sampling, random assignment, generalizability, internal validity
Demo sketch: Animated population of dots → random sampling pulls a subset → random assignment splits into groups. Toggling which step is random shows what each step controls for.
Notes: Complements the existing `fig_random_sampling_vs_assignment` figure. Low complexity if built as an SVG animation.

---

## Chapter 3 — Neuroscience & Biological Bases

### Action Potential Simulator
Status: Planned (placeholder in ch03 markdown; repo: `awesome-sauce_neuroscience`)
Type: simulation
Core concepts: resting potential, threshold, action potential, refractory period, all-or-none principle
Demo sketch: Slider adjusts stimulus strength. Below threshold: nothing. At threshold: full spike fires, then refractory period. Students observe all-or-none principle directly.
Notes: Already exists — needs embed URL confirmed.

### Dopamine Prediction Error Mixer
Status: Planned (placeholder in ch03 markdown; repo: `neuronew`)
Type: simulation
Core concepts: dopamine, prediction error, reward, Schultz 1998, neuromodulation
Demo sketch: Three trial types — unexpected reward (dopamine spike), predicted reward (flat), predicted reward omitted (dopamine dip). Student watches signal shift as prediction is learned.
Notes: Ties directly to Ch3 neuromodulation section and to Ch6 Sapolsky/dopamine framing.

### Split-Brain Scenario Sorter 👥
Status: Idea
Type: classifier
Core concepts: cerebral hemispheres, lateralization, corpus callosum, split-brain research
Demo sketch: Objects flashed to left or right visual field. Student predicts: Can the person name it? Reach for it? Both? Feedback explains hemispheric routing.
Group use: Pairs predict together, then compare reasoning.
Notes: Addresses the common misconception that hemispheres are cleanly specialized. Moderate build.

---

## Chapter 4 — Sensation & Perception

### Signal Detection Theory Simulator
Status: Planned (priority #3 on demo-gap list)
Type: simulation with sliders
Core concepts: d-prime, beta (criterion), hits, false alarms, misses, correct rejections
Demo sketch: Slider adjusts signal strength (d') and criterion (beta). 2×2 outcome matrix updates live. Students see that liberal criterion increases hits AND false alarms; conservative criterion does the reverse.
Group use: Pairs set a criterion for a given scenario (airport screener, radiologist) and justify the tradeoff.
Notes: High conceptual payoff; connects to research methods and real-world decision-making.

### Visual Illusion Gallery
Status: Idea
Type: curated interactive page
Core concepts: top-down processing, Gestalt principles, perceptual constancy, ambiguous figures
Demo sketch: Gallery of classic illusions (Müller-Lyer, Ponzo, Rubin vase, Necker cube, duck/rabbit) with toggle overlays showing the physical measurements vs. percept. Students record their initial perception before the reveal.
Notes: High engagement; relatively low build complexity using SVGs. Duck/rabbit and Necker cube are already in the voice profile as signature demos.

### Weber's Law Adjuster 👥
Status: Idea
Type: slider demo
Core concepts: Weber's Law, just-noticeable difference, proportionality
Demo sketch: Two bars of adjustable length (or two tone frequencies). Student adjusts the second until the difference is just noticeable. Weber fraction stays constant regardless of starting value.
Group use: Each pair uses a different starting value; class pools data to show the constant ratio.
Notes: Simple build; directly illustrates the proportionality principle.

### Motion Perception / Heider & Simmel Demo
Status: Planned (repo: `motionperception`)
Type: video/animation
Core concepts: motion perception, social perception, intentionality attribution
Demo sketch: Play the Heider & Simmel (1944) animated shapes video. Students write what "happened." Almost all describe intentional action. Debrief: we're wired to perceive agency.
Notes: Already exists — needs embed URL confirmed. Also works as an opener for Ch10 social cognition.

### Size-Weight Illusion
Status: Planned (repo: `takingaction`)
Type: interactive
Core concepts: size-weight illusion, top-down vs. bottom-up processing, perceptual expectation
Notes: Already exists — needs embed URL confirmed.

### Depth Cue Toggler
Status: Idea
Type: image manipulation
Core concepts: monocular depth cues (interposition, linear perspective, relative size, texture gradient, aerial perspective), binocular depth cues
Demo sketch: Show a complex scene. Checkboxes toggle individual cues on/off; depth perception degrades with each removed cue.
Notes: Nice visual; moderate build.

---

## Chapter 5 — States of Consciousness

### Two-Process Sleep Model Visualizer
Status: Draftable
Type: animated graph
Core concepts: Process S (sleep pressure / adenosine), Process C (circadian rhythm), sleep gate
Demo sketch: Live clock advances across a 24-hour day. Process S curve rises with wakefulness; Process C curve oscillates. The gap between them (sleep gate) widens around typical bedtime. Caffeine slider lowers Process S artificially.
Notes: Existing figures (fig5_1) are static; an interactive version with the caffeine slider adds real explanatory value.

### Dichotic Listening / Selective Attention Demo 👥
Status: Idea
Type: audio or text-based simulation
Core concepts: selective attention, inattentional blindness (CON-013), cocktail party effect, attentional spotlight
Demo sketch: Two simultaneous text streams scroll side by side. Student is told to track one (answer comprehension questions). Later revealed: a clearly incongruent word or name appeared in the unattended stream. Were they aware of it?
Group use: Half the class tracks left, half tracks right; compare what each group noticed in the unattended stream.
Notes: Audio version would be most powerful but complex. Text version is buildable and still illustrative.

### Sleep Stage Hypnogram
Status: Draftable (figure exists: fig5_2)
Type: animated timeline
Core concepts: NREM stages (N1–N3), REM sleep, sleep architecture, sleep cycles
Demo sketch: Play through a night's sleep on a hypnogram. Click any stage to see what's happening in the brain and body. Sliders show how sleep deprivation or alcohol truncates slow-wave and REM cycles.
Notes: Static figure already exists. Animation + clickable stages would significantly increase utility.

---

## Chapter 6 — Learning

### Classical Conditioning Simulator
Status: Planned (priority #1 on demo-gap list)
Type: simulation
Core concepts: US, UR, CS, CR, acquisition, extinction, spontaneous recovery, generalization, discrimination
Demo sketch: Student controls whether CS and US are paired. Acquisition curve grows with pairings. Extinction extinguishes responding. Button triggers spontaneous recovery.
Notes: Should be the first learning lab build. Potentially the same widget extended for the operant tab.

### Operant Conditioning Schedule Comparator 👥
Status: Draftable
Type: simulation/graph
Core concepts: fixed ratio, variable ratio, fixed interval, variable interval, reinforcement schedules, extinction
Demo sketch: Student picks a schedule; button press "earns" reinforcement. Response rate graph builds live. Switch to extinction and watch the schedule-specific extinction pattern (FR pauses, VR persistence).
Group use: Each pair picks a different schedule; class compares patterns and discusses why VR is most resistant to extinction.
Notes: VR vs. FR contrast is immediately intuitive when students *see* their own response pattern.

### Prediction Error / Dopamine Animator
Status: Draftable
Type: simulation
Core concepts: prediction error (Schultz 1998), reward, dopamine, Sapolsky framing
Demo sketch: Three trial types animated: (1) unexpected reward → dopamine signal fires at reward; (2) predicted reward → signal shifts to CS onset, flat at reward; (3) omitted predicted reward → signal dips at expected reward time. Students advance through trials and watch signal migrate.
Notes: Closely related to the Ch3 dopamine mixing board but framed around learning rather than neuromodulation. Could be the same widget with a different framing panel.

### Reinforcement vs. Punishment Classifier 👥
Status: Draftable
Type: classifier
Core concepts: positive/negative reinforcement, positive/negative punishment, operant conditioning
Demo sketch: 8–10 scenarios. Student classifies each as one of the four quadrants. Feedback on each. The hardest cases (negative reinforcement) are flagged for discussion.
Group use: Pairs classify; bring disagreements to class. The Do Not Confuse panel (negative reinforcement ≠ punishment) is the debrief anchor.
Notes: This is the single most persistently confused distinction in Ch6. A hands-on classifier is more memorable than a table.

---

## Chapter 7 — Memory

### Forgetting Curve / Spacing Simulator
Status: Planned (priority on demo-gap list)
Type: simulation
Core concepts: Ebbinghaus forgetting curve, spacing effect, retention interval
Demo sketch: Adjustable curve shows retention decay from 100% over days/weeks. Add a review event: curve resets to a higher baseline and decays more slowly. Add more reviews: near-flat retention. Slider for inter-review spacing shows optimum.
Notes: Prologue already has a static forgetting curve figure. This would be the interactive version.

### Serial Position Effect Demo 👥
Status: Draftable
Type: experiment
Core concepts: primacy effect, recency effect, working memory, long-term memory
Demo sketch: 15-word list displayed one word at a time. After final word, students type all recalled words. Their personal serial position curve plotted live; class data pooled into a class curve.
Group use: Small groups predict the shape of the curve before running the demo; compare to actual data.
Notes: High pedagogical value; students generate real data from themselves. Classic, clean finding.

### Working Memory Capacity Demo
Status: Exists (in `psych101_awesome-sauce` — URL: https://jkoxford-a11y.github.io/psych101_awesome-sauce/working-memory-demo.html; confirm still current)
Type: digit/word span task
Core concepts: working memory, capacity limits (~4 chunks), chunking
Notes: Already exists — needs embed URL confirmed in ch07.

### DRM False Memory Paradigm 👥
Status: Draftable
Type: experiment
Core concepts: false memory, schema-driven reconstruction, spreading activation, source monitoring
Demo sketch: Study a list of sleep-related words (bed, rest, pillow, dream, night…). Later recognition test includes "sleep" — not on the list. Virtually all students recognize it as "studied." Class data shows false recognition rate.
Group use: Half the class studies a semantically tight list; half studies a random list. Compare false recognition rates.
Notes: Demonstrates memory reconstruction directly. The "video camera misconception" is the exact thing this demo corrects. Moderate build.

### Levels of Processing Encoding Test 👥
Status: Idea
Type: experiment
Core concepts: levels of processing, elaborative rehearsal, shallow vs. deep encoding
Demo sketch: For 20 words, students answer one of three orienting tasks (random assignment): (1) uppercase or lowercase? (2) Does it rhyme with ___? (3) Does it fit in the sentence "I saw a ___ at the zoo"? Surprise recall test. Deep-processing condition outperforms.
Group use: Divide class by condition; pool recall data; compare group averages.
Notes: Classic Craik & Lockhart demonstration. Very simple to run in class even without a widget.

---

## Chapter 8 — Thinking, Language & Intelligence

### Wason Selection Task 👥
Status: Draftable (in activity-ideas.md as Draftable; note figure exists)
Type: interactive card flip
Core concepts: confirmation bias, falsification, rule testing
Demo sketch: Four cards on screen (E, K, 4, 7). Student selects which to flip; reveals whether their choice was diagnostic. Feedback explains why 4 is tempting but non-diagnostic.
Group use: Pairs commit to a selection before flipping; debrief common error patterns together.
Notes: Works as a simple HTML interactive; the figure (`fig_wason_task_prompt/answer`) already exists in docs/images/ch08/.

### Cognitive Reflection Test Timer 👥
Status: Draftable
Type: timed quiz
Core concepts: System 1, System 2, dual-process theory, intuitive errors
Demo sketch: 3–6 CRT items displayed with a timer. System 1 answer appears immediately to most people; students must catch and override it. After submission, reveals the intuitive wrong answer and the correct reasoning.
Group use: Pairs compare first instincts; discuss which items were hardest to override and why.
Notes: The bat-and-ball, lily pad, and widget problems are all in the public domain. High engagement, low build complexity.

### Framing Effect Demo 👥
Status: Draftable
Type: choice scenario
Core concepts: framing effect, prospect theory (descriptive), loss aversion
Demo sketch: Two groups see identical problems framed as gains (save 200 of 600 lives) vs. losses (400 of 600 die). Students choose a program; class results compared across framing conditions. The preference reversal is the finding.
Group use: Half the class gets the gain frame; half gets the loss frame. Reveal after voting.
Notes: A/B split within a lecture section is the cleanest way to run this; a web widget lets both versions be shown simultaneously.

### Availability Heuristic K-Word Demo
Status: Draftable (in activity-ideas.md)
Type: poll/prediction
Core concepts: availability heuristic, ease of recall
Notes: Already captured in activity-ideas.md. Could be embedded as a widget (student types 5 words starting with K, then 5 with K as 3rd letter; system times generation speed and plots the class distribution).

### Linda Problem Nested-Set Interactive 👥
Status: Draftable (in activity-ideas.md; figure exists)
Type: step-by-step walkthrough
Core concepts: representativeness heuristic, conjunction fallacy, base-rate neglect
Demo sketch: Student reads Linda vignette, makes prediction, then interactive nested-set diagram reveals the set relationships. Can students revise their intuition using the diagram?
Group use: Pairs discuss before and after diagram reveal.
Notes: Figure `fig_linda_nested_set` already exists in docs/images/ch08/.

---

## Chapter 9 — Lifespan Development

### Piaget Stage Sorter 👥
Status: Draftable
Type: classifier
Core concepts: sensorimotor, preoperational, concrete operational, formal operational stages; conservation, object permanence, egocentrism
Demo sketch: Video clip or vignette describing a child's behavior. Student classifies which Piagetian stage it most likely reflects. Feedback explains the reasoning.
Group use: Each pair gets a different vignette; class builds a collective stage map.
Notes: Video clips of conservation tasks and object permanence are publicly available (check licensing). Text-based vignettes are simpler to build.

### Attachment Style Matcher 👥
Status: Draftable
Type: vignette classifier
Core concepts: secure, anxious, avoidant attachment; Ainsworth Strange Situation; internal working models
Demo sketch: Four brief descriptions of how a child (or adult in relationships) behaves. Student matches each to an attachment style and explains their reasoning.
Group use: Pairs classify and discuss; debrief whether the categories feel mutually exclusive.
Notes: Keep vignettes fictional and non-stigmatizing. Also connects adult attachment research in Ch11 (personality/self-concept).

### Sensitive Periods Timeline
Status: Idea
Type: interactive timeline
Core concepts: prenatal development, sensitive periods, teratogens, critical periods (language, attachment)
Demo sketch: Horizontal gestational/developmental timeline. Click on a week range to see which systems are developing and what environmental inputs (teratogens, experience) have the greatest effect at that moment.
Notes: High visual clarity; moderate build. Could extend to postnatal language critical period.

---

## Chapter 10 — Social Psychology

### Conformity Pressure Demo 👥
Status: Draftable
Type: live social judgment task
Core concepts: conformity, normative vs. informational influence, Asch (1955)
Demo sketch: Student sees a comparison line task. Correct answer is obvious. Then the "group's" answers appear (all wrong). Does the student conform? Tracks response across multiple trials as group pressure increases.
Group use: Run live in class with an actor confederate or as a web widget where "group responses" are pre-programmed. Debrief: how many changed their answer?
Notes: One of the most powerful demoes in the book. Can be run without tech (cards + a confederate). Web version makes the effect anonymous and measurable.

### Bystander Diffusion Calculator 👥
Status: Draftable
Type: interactive graph
Core concepts: bystander effect, diffusion of responsibility, Darley & Latané (1968)
Demo sketch: Slider for number of bystanders. Graph shows actual probability-of-helping data from Darley & Latané's staged emergency paradigm. Students adjust group size and observe the helping curve.
Group use: Pairs predict the shape before the data are revealed; discuss where the inflection points are.
Notes: Real data from the paper can be digitized; makes the effect concrete and quantitative.

### Attribution Style Explorer 👥
Status: Draftable
Type: scenario ratings
Core concepts: fundamental attribution error, actor-observer bias, self-serving bias, internal vs. external attribution
Demo sketch: 6 scenarios — 3 where the student is the actor, 3 where they observe another person. Rate each on internal/external and stable/unstable. After all 6, the pattern of actor vs. observer attribution asymmetry is plotted.
Group use: Compare ratings across pairs; look for systematic biases in the class data.
Notes: Personal data makes the FAE feel real rather than abstract.

### ELM Route Identifier 👥
Status: Idea
Type: ad analysis classifier
Core concepts: elaboration likelihood model, central route, peripheral route persuasion, argument quality, source credibility
Demo sketch: Show 4–6 brief "ad" scenarios or persuasive messages. Student classifies which route each targets, and rates their personal susceptibility.
Group use: Pairs debate borderline cases.
Notes: High relevance to media literacy and misinformation. Lower priority than conformity/bystander demos.

---

## Chapter 11 — Personality

### Big Five Self-Profiler
Status: Draftable
Type: mini questionnaire + visualization
Core concepts: Big Five (OCEAN), trait measurement, self-report, trait continuity
Demo sketch: 20-item mini-BFI. Student gets a radar chart of their profile. Compare to class distribution. Optional: take again answering "how I am at work vs. at home" to introduce situational press.
Group use: Pairs share profiles and discuss which traits they agree/disagree with in themselves.
Notes: Do not present results as diagnostic or definitive — frame explicitly as a measurement exercise, not a personality test. The radar chart makes distributions visible.

### Aggregation Effect Visualizer 👥
Status: Draftable
Type: animated scatter plot
Core concepts: person-situation debate, Mischel's r≈.30, aggregation principle, Funder & Ozer (1983)
Demo sketch: Show correlation scatter for predicting helping from a single trait measurement (wide scatter, r≈.29). Then aggregate 10 behavioral observations — scatter tightens dramatically.
Group use: Students discuss: why does averaging help? What does this mean for personality research?
Notes: The existing fig11-1 is a static version of this. An interactive version where students can adjust the number of observations aggregated would add value.

---

## Chapter 12 — Emotion, Stress & Coping

### Core Affect Circumplex Plotter 👥
Status: Planned (logged in ch12 session notes)
Type: live class data overlay
Core concepts: core affect, valence, arousal, Russell's circumplex, constructed emotion
Demo sketch: 2D circumplex on screen (valence x-axis, arousal y-axis). Each student plots where they currently are. Class data overlays as a dot cloud. Debrief: same external situation (sitting in class), wide variety of core affect states.
Group use: Natural group activity — the whole class generates the data.
Notes: Simple to build as a shared widget if class uses devices simultaneously; also works as a paper exercise (sticky dots on projected image).

### GAS Timeline Animator
Status: Planned (logged in ch12 session notes)
Type: animation
Core concepts: General Adaptation Syndrome, alarm/resistance/exhaustion, allostatic load, cortisol, immune function
Demo sketch: Animated timeline showing cortisol and immune function curves across the three GAS stages as a stressor continues. Student can adjust stressor duration and intensity to see when exhaustion hits.
Notes: Makes Selye's abstract stages concrete. Should show the tradeoff between adaptive short-term stress response and cumulative allostatic load.

### Body-Budget Ledger Simulator
Status: Planned (logged in ch12 session notes)
Type: running simulation
Core concepts: allostasis, body budget, deposits (sleep, movement, nutrition) vs. withdrawals (stressors)
Demo sketch: Running "account balance" that goes up with deposits (8h sleep, exercise, meals) and down with withdrawals (deadline, social conflict, illness). Balance affects simulated next-day mood valence. Students see how depleted budgets compound.
Notes: Frame as a model, not medical advice. Good tie-in to the body-budget audit activity.

---

## Chapter 13 — Psychological Disorders & Therapy

### Diagnostic Criteria Classifier 👥
Status: Draftable (also in activity-ideas.md)
Type: vignette classifier
Core concepts: 3D criteria (distress, dysfunction, deviance), DSM-5-TR, diathesis-stress model
Demo sketch: 5 brief case vignettes varying in how clearly they meet the 3D criteria. Student classifies each as meets / borderline / does not meet, with written justification.
Group use: Small groups classify; bring disagreements to class. Highlight where reasonable people differ.
Notes: Already sketched in activity-ideas.md under Chapter 13.

### Diathesis-Stress Slider 👥
Status: Draftable
Type: interactive sliders
Core concepts: diathesis-stress model, vulnerability, environmental stress, threshold for disorder
Demo sketch: Two sliders — genetic/biological vulnerability (low to high) and cumulative environmental stress (low to high). Their product determines whether an illustrated threshold is crossed.
Group use: Pairs set different vulnerability levels and manipulate stress to find each person's threshold; discuss why the same stressor produces disorder in one person and not another.
Notes: Simple build with high explanatory payoff. Directly counters genetic determinism.

### Anxiety Maintenance Cycle
Status: Draftable (figure exists: fig13_1)
Type: animated loop
Core concepts: anxiety, avoidance, negative reinforcement, exposure and response prevention (ERP), CBT
Demo sketch: 4-step loop animated (trigger → anxiety spike → avoidance → short-term relief → loop resets). Button for "what ERP does instead" interrupts the avoidance step and shows the habituation curve across repeated exposures.
Notes: Existing static figure (fig13_1) already shows the cycle. Animation with the ERP contrast adds the treatment logic.

### CBT Thought Record 👥
Status: Idea
Type: structured form / guided worksheet
Core concepts: cognitive distortions, automatic thoughts, cognitive restructuring, CBT
Demo sketch: Guided 5-column thought record — situation, automatic thought, cognitive distortion, evidence for/against, balanced thought. Dropdown menu of common distortions (catastrophizing, all-or-nothing, personalization) to help with column 3.
Group use: Pairs work through a fictional vignette together; debrief on which distortions were hardest to identify.
Notes: Not a therapeutic tool — use fictional scenarios only. Frame as "this is what a CBT therapist teaches" rather than a self-help exercise.

---

## Priority Build Order

Based on pedagogical impact, chapter priority, and existing infrastructure:

1. **Ch6 — Classical Conditioning Simulator** (flagged #1 in pipeline/chapter-spec.md §5)
2. **Ch2 — Correlation vs. Causation Classifier** (first lab vertical slice)
3. **Ch4 — Signal Detection Theory Simulator** (flagged priority #3 on demo-gap list)
4. **Ch7 — Forgetting Curve/Spacing Simulator** (flagged in pipeline)
5. **Ch8 — Cognitive Reflection Test Timer** (low build complexity, high engagement)
6. **Ch5 — Two-Process Sleep Model Visualizer** (extends existing static figure)
7. **Ch10 — Conformity Pressure Demo** (highest social psychology impact)
8. **Ch7 — Serial Position Effect Demo** (generates real class data; high reuse)
9. **Ch13 — Diathesis-Stress Slider** (simple build; counters key misconception)
10. **Ch12 — Core Affect Circumplex Plotter** (good group activity; low build complexity)

---

*Confirm existing demo embed URLs with Jon: action potential simulator, dopamine mixing board, Heider & Simmel, size-weight illusion, working memory demo.*
