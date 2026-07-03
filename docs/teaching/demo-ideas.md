# Interactive Demo Ideas — by Chapter

Companion to `activity-ideas.md`. Tracks standalone interactive widget/demo ideas for each chapter.

**Demo vs. activity distinction:**
- **Demo:** Interactive widget — sliders, simulators, classifiers, reaction-time tasks, visualizations. Student *observes or manipulates*.
- **Activity:** Guided exercise with prompts, reflection, or collaborative task. Student *applies vocabulary*.

Some demos double as group activities — marked 👥.

**Top 10 priority entries** have full build specs including the Predict → Commit → Manipulate/Observe → Explain → Retrieve/Transfer (P→C→M→E→R) pattern. Remaining entries are lightweight stubs.

See also: `docs/labs/` (standalone lab pages), `pipeline/labs-spec.md` (lab architecture), `docs/teaching/activity-ideas.md`.

---

## Status labels

- **Idea** — rough concept only
- **Planned** — confirmed for build; in pipeline
- **Exists** — already built (link or repo noted)
- **Draftable** — design clear enough to build now; not yet started

---

## Priority Build Order

| Priority | Chapter | Demo | Lab path |
|----------|---------|------|----------|
| 1 | Ch6 | Classical Conditioning Simulator | `docs/labs/ch06/classical-conditioning.html` |
| 2 | Ch2 | Correlation vs. Causation Classifier | `docs/labs/ch02/correlation-causation.html` |
| 3 | Ch4 | Signal Detection Theory Simulator | `docs/labs/ch04/signal-detection.html` |
| 4 | Ch7 | Forgetting Curve / Spacing Simulator | `docs/labs/ch07/forgetting-curve.html` |
| 5 | Ch8 | Cognitive Reflection Test Timer | `docs/labs/ch08/cognitive-reflection-test.html` |
| 6 | Ch5 | Two-Process Sleep Model Visualizer | `docs/labs/ch05/two-process-sleep.html` |
| 7 | Ch10 | Conformity Pressure Demo | `docs/labs/ch10/conformity.html` |
| 8 | Ch7 | Serial Position Effect Demo | `docs/labs/ch07/serial-position.html` |
| 9 | Ch13 | Diathesis-Stress Slider | `docs/labs/ch13/diathesis-stress.html` |
| 10 | Ch12 | Core Affect Circumplex Plotter | `docs/labs/ch12/core-affect-circumplex.html` |

Vertical slice to prove the system (build these three first, in order): #2 → #1 → #3.

---

## Prologue — How to Actually Learn This Stuff

### Spaced Retrieval Scheduler
Status: Exists
Type: widget
Notes: Already in `docs/prologue.html`. Students input concept list and exam date; scheduler suggests three sessions with .ics download.

### Calibration Dashboard
Status: Exists
Type: widget
Notes: Already in `docs/prologue.html`. Aggregates confidence ratings vs. self-scored accuracy across all 8 Stop & Retrieve prompts.

---

## Chapter 1 — History & Approaches

### Perspective Sorter 👥
Status: Draftable
Type: drag-and-drop classifier
Core concepts: 7 major perspectives (biological, psychodynamic, behavioral, cognitive, humanistic, sociocultural, evolutionary)
Demo sketch: Show a brief scenario (e.g., "Maria is afraid of dogs after being bitten as a child"). Students drag it to the perspective(s) that would study it. Feedback shows what each perspective emphasizes.
Group use: Each pair is assigned one perspective and defends their classification to the class.
Notes: Good Ch1 opener; also works as a warm-up for later chapters.

### Timeline Drag-and-Drop
Status: Idea
Type: sorting widget
Core concepts: history of psychology, key figures
Demo sketch: Students drag event cards to the correct era on a timeline.
Notes: Lower priority — mostly gamification, limited conceptual depth.

---

## Chapter 2 — Research Methods & Statistics

### Correlation vs. Causation Classifier 👥 ★ Priority #2
Status: Planned — first lab vertical slice
Type: classifier
Core concepts: correlation, causation, third-variable problem, directionality problem
Build priority: 2
Lab path: `docs/labs/ch02/correlation-causation.html`

**Classroom version 👥:** Pairs read 8 research headlines and classify: does this show causation, and why not? Each pair brings their two most contested cases to class discussion. Instructor uses disagreements to show that the flaw isn't always obvious from the headline alone.

**Standalone lab version:** 10 headlines with tiered feedback per response. After each classification, student sees the actual study design and which confound applies (third variable, directionality, or both). Summary score and pattern feedback at end.

**Student deliverable:** Classification table (headline / verdict / design flaw in one sentence) + one paragraph: "Design a study that *would* establish causation for one of these headlines."

**Privacy/accessibility notes:** No external data. Results stored in localStorage for session only. All feedback text-based — do not rely on color alone for correct/incorrect. Keyboard-navigable.

**P→C→M→E→R pattern:**
- *Predict:* Before seeing design details — "Does this headline claim causation? Yes / No." Commit.
- *Commit:* Locked before feedback appears.
- *Observe:* Study design revealed. Which confound applies?
- *Explain:* Student writes one sentence naming the specific flaw.
- *Retrieve/Transfer:* "What single design change would get this study closer to a causal claim?"

---

### p-Value Simulator
Status: Idea
Type: simulation
Core concepts: p-value, null hypothesis, Type I error, sampling variability
Demo sketch: Slider sets sample size; button runs 1,000 simulated studies under a true null. Bar chart shows p-value distribution — ~5% land below .05 by chance alone.
Notes: Directly addresses the most common p-value misconception. Moderate build complexity.

### Scatter Plot Correlation Guesser 👥
Status: Idea
Type: estimation game
Core concepts: correlation, r value, scatter plot
Demo sketch: Show a scatter cloud; student estimates r before seeing the value.
Group use: Teams compete; debrief on systematic estimation biases.

### Random Sampling vs. Assignment Visualizer
Status: Idea
Type: animation
Core concepts: random sampling, random assignment, generalizability, internal validity
Demo sketch: Animated population → random sampling → random assignment. Toggling which step is random shows what each controls for.
Notes: Complements existing `fig_random_sampling_vs_assignment` figure.

---

## Chapter 3 — Neuroscience & Biological Bases

### Action Potential Simulator
Status: Planned (repo: `awesome-sauce_neuroscience` — confirm embed URL with Jon)
Type: simulation
Core concepts: resting potential, threshold, action potential, refractory period, all-or-none principle
Demo sketch: Slider adjusts stimulus strength. Below threshold: nothing. At threshold: full spike fires, then refractory period.
Notes: Placeholder already in ch03 markdown. Needs embed URL confirmed before lab build.

### Dopamine Prediction Error Mixer
Status: Planned (repo: `neuronew` — confirm embed URL with Jon)
Type: simulation
Core concepts: dopamine, prediction error, reward, Schultz (1998), neuromodulation
Demo sketch: Three trial types — unexpected reward (spike), predicted reward (flat), omitted predicted reward (dip). Student watches signal shift as prediction is learned.
Notes: Placeholder already in ch03 markdown. Closely related to Ch6 conditioning simulator.

### Split-Brain Scenario Sorter 👥
Status: Idea
Type: classifier
Core concepts: hemispheric lateralization, corpus callosum, split-brain research
Demo sketch: Objects flashed to left or right visual field. Student predicts: Can the person name it? Reach for it? Both?
Group use: Pairs predict together, then compare reasoning.

---

## Chapter 4 — Sensation & Perception

### Signal Detection Theory Simulator 👥 ★ Priority #3
Status: Planned
Type: simulation with sliders
Core concepts: d-prime, criterion (beta), hits, false alarms, misses, correct rejections
Build priority: 3
Lab path: `docs/labs/ch04/signal-detection.html`

**Classroom version 👥:** Each pair is assigned a real-world scenario (airport screener, radiologist, smoke detector manufacturer). They set a criterion and justify the tradeoff. Class compares — same d', different criteria because the cost of each error type differs. Instructor maps their choices onto the 2×2.

**Standalone lab version:** Two sliders: d' (signal strength 0–3) and criterion beta (liberal to conservative). Live 2×2 outcome matrix updates with each slider move. Optional ROC curve panel. Three scenario prompts guide student through contrasting criterion choices.

**Student deliverable:** Screenshots of criterion settings for two contrasting scenarios + one paragraph per scenario justifying the tradeoff between hit rate and false alarm rate.

**Privacy/accessibility notes:** No data stored. Sliders must be keyboard-accessible (arrow keys). 2×2 matrix cells labeled with text, not color alone. Include a plain-language explanation of d' for students without stats background.

**P→C→M→E→R pattern:**
- *Predict:* "For a radiologist reading cancer scans — liberal or conservative criterion? What's the cost of each error?" Commit before touching sliders.
- *Commit:* Written prediction locked before interaction.
- *Manipulate:* Adjust criterion slider; watch hits and false alarms trade off.
- *Explain:* "Why can't you minimize all four cells simultaneously?"
- *Retrieve/Transfer:* "A new rapid test has low d'. Should clinicians use a liberal or conservative criterion? Explain using the SDT framework."

---

### Visual Illusion Gallery
Status: Idea
Type: curated interactive page
Core concepts: top-down processing, Gestalt principles, perceptual constancy, ambiguous figures
Demo sketch: Classic illusions (Müller-Lyer, Rubin vase, Necker cube, duck/rabbit) with toggle overlays showing physical measurements vs. percept.
Notes: High engagement, low build complexity. Duck/rabbit is a signature demo in the voice profile.

### Weber's Law Adjuster 👥
Status: Idea
Type: slider demo
Core concepts: Weber's Law, just-noticeable difference, proportional threshold
Demo sketch: Two bars of adjustable length. Student adjusts until difference is just noticeable. Weber fraction stays constant regardless of starting value.
Group use: Each pair uses a different starting value; class pools data to show the constant ratio.

### Motion Perception / Heider & Simmel Demo
Status: Planned (repo: `motionperception` — confirm embed URL with Jon)
Type: video/animation
Core concepts: motion perception, social perception, intentionality attribution
Notes: Also works as a Ch10 social cognition opener.

### Size-Weight Illusion
Status: Planned (repo: `takingaction` — confirm embed URL with Jon)
Type: interactive
Core concepts: top-down vs. bottom-up processing, perceptual expectation

### Depth Cue Toggler
Status: Idea
Type: image manipulation
Core concepts: monocular depth cues, binocular depth cues
Demo sketch: Scene with checkboxes that toggle individual cues. Depth perception degrades with each removed cue.

---

## Chapter 5 — States of Consciousness

### Two-Process Sleep Model Visualizer ★ Priority #6
Status: Draftable
Type: animated graph with controls
Core concepts: Process S (sleep pressure/adenosine), Process C (circadian rhythm), sleep gate
Build priority: 6
Lab path: `docs/labs/ch05/two-process-sleep.html`

**Classroom version:** Instructor projects and advances the clock. Students predict when sleep pressure peaks, when the circadian gate opens, and where caffeine has most vs. least effect. Class votes before each reveal.

**Standalone lab version:** Animated 24-hour clock with Process S and Process C curves. Caffeine slider lowers Process S. Light therapy toggle shifts Process C phase. Student can model shift work, all-nighter + early class, and jet lag scenarios.

**Student deliverable:** Screenshot of a "bad sleep scenario" of their design + one paragraph explaining what the model predicts will happen to alertness and recovery time.

**Privacy/accessibility notes:** No personal sleep data collected. Animation must have pause/step controls. Describe curve changes in text as well as visual. No color-only encoding.

**P→C→M→E→R pattern:**
- *Predict:* "At 2 AM after being awake since 7 AM, where are Process S and Process C?" Students annotate a blank graph before interacting.
- *Commit:* Annotation locked before animation plays.
- *Manipulate:* Set wake time, advance clock, add caffeine or light therapy.
- *Explain:* "Why does caffeine help alertness without reducing actual sleep need?"
- *Retrieve/Transfer:* "A student has an 8 AM final after an all-nighter. What does the model predict? What intervention would help most?"

---

### Dichotic Listening / Selective Attention Demo 👥
Status: Idea
Type: text-stream simulation
Core concepts: selective attention, inattentional blindness (CON-013), cocktail party effect
Demo sketch: Two simultaneous text streams scroll side by side. Student tracks one stream (answers comprehension questions). Later revealed: a conspicuous word appeared in the unattended stream. Were they aware of it?
Group use: Half the class tracks left stream, half tracks right; compare what each group noticed in the unattended channel.

### Sleep Stage Hypnogram
Status: Draftable (static figure exists: fig5_2)
Type: animated timeline
Core concepts: NREM stages (N1–N3), REM sleep, sleep architecture, sleep cycles
Demo sketch: Play through a night's sleep on a hypnogram. Click any stage to see what's happening in the brain and body. Sliders show how sleep deprivation or alcohol truncates slow-wave and REM cycles.

---

## Chapter 6 — Learning

> **Chapter-numbering flag (Session 65):** Under the locked 13-chapter map (HANDOFF Session 60–61), Learning is now **Chapter 7**, not 6 — Ch. 6 is Sleep. This file was not part of the Session 61 renumbering sweep (same gap `source/visuals-inventory.md` had until Session 62) and still uses the old numbering throughout. Not fixed here — flagging rather than doing an unreviewed file-wide renumber. **Separately, and more concretely:** the Classical Conditioning Simulator below is **already built** (`docs/labs/ch06/classical-conditioning.html` exists on disk, confirmed Session 65), so its status below is corrected from "Planned" to "Exists." It sits in a folder literally named `ch06`, which now collides with the Sleep chapter's number, and **it is not linked from the current `ch07-learning.md` draft at all** (checked Session 65 — no `docs/labs` reference anywhere in the file). Two open decisions for Jon: (1) rename the `docs/labs/ch06/` folder to `ch07/` for consistency with the locked map (and update `docs/labs/index.html`'s link accordingly), or leave it; (2) add the actual lab link into `ch07-learning.md` (natural spot: end of Section 1 or Section 2, where classical/operant conditioning is taught) — currently a real gap, not a placeholder.

### Classical Conditioning Simulator 👥 ★ Priority #1
Status: Exists (built and linked from `docs/labs/index.html`; not yet linked from the chapter itself — see flag above)
Type: simulation
Core concepts: US, UR, CS, CR, acquisition, extinction, spontaneous recovery, generalization, discrimination
Build priority: 1
Lab path: `docs/labs/ch06/classical-conditioning.html` (folder name pending Jon's renumbering decision, see flag above)

**Classroom version 👥:** Instructor runs demo on projector. Students predict whether CR will appear at each phase (pre-acquisition, mid-acquisition, after extinction). Class votes before each reveal. Spontaneous recovery is the key moment — most students predict it won't happen; its appearance is the pedagogical punch.

**Standalone lab version:** Student controls the number of CS-US pairings, advances through acquisition, extinction, and spontaneous recovery phases. CR strength curve builds live. Tabs for generalization (similar CS tested) and discrimination (different CS tested). Matches the Rescorla-Wagner prediction-error logic from Ch3/Ch6.

**Student deliverable:** Annotated curve screenshot showing where each phase begins/ends + one paragraph: "What does spontaneous recovery reveal about what extinction actually does to the original learning?"

**Privacy/accessibility notes:** No data stored externally. localStorage tracks phase progress for session continuity only. Keyboard-navigable trial buttons. Aria-live region announces CR strength updates for screen readers.

**P→C→M→E→R pattern:**
- *Predict:* "After 10 CS-US pairings, what will happen when I present the CS alone? After 10 extinction trials, is the CR gone permanently?" Student commits written predictions for both questions.
- *Commit:* Locked before advancing to each phase.
- *Manipulate:* Control pairings, run extinction, trigger spontaneous recovery test.
- *Explain:* "Spontaneous recovery appeared / did not appear. What does this mean about what extinction actually changed?"
- *Retrieve/Transfer:* "How does this model explain why a 'recovered' smoker can relapse after seeing an old smoking friend? Use CS, CR, and extinction in your answer."

---

### Operant Conditioning Schedule Comparator 👥
Status: Draftable
Type: simulation/graph
Core concepts: fixed ratio, variable ratio, fixed interval, variable interval, extinction
Demo sketch: Student picks a schedule; button press earns reinforcement. Response rate graph builds live. Switch to extinction — schedule-specific pattern appears (FR pauses, VR persistence).
Group use: Each pair picks a different schedule; class compares patterns.

### Reinforcement vs. Punishment Classifier 👥
Status: Draftable
Type: classifier
Core concepts: positive/negative reinforcement, positive/negative punishment
Demo sketch: 8–10 scenarios. Student classifies into the four quadrants. Hardest cases (negative reinforcement) flagged for discussion.
Group use: Pairs classify; disagreements drive the debrief. The Do Not Confuse panel (negative reinforcement ≠ punishment) is the anchor.

### Prediction Error / Dopamine Animator
Status: Draftable
Type: animation
Core concepts: prediction error (Schultz 1998), dopamine, Sapolsky framing
Demo sketch: Three trial types animated across learning trials. Student watches the dopamine signal migrate from reward delivery to CS onset.
Notes: Related to Ch3 dopamine mixing board; different framing (learning vs. neuromodulation). May share underlying widget.

**Session 65 cross-check:** the spine re-alignment work order (`ch07-learning_SPINE-REALIGNMENT_TEMP.md`, now deleted) independently proposed a "Four-Contingencies Classifier" and a "Dopamine-Shift Visualizer" for this chapter — both already covered by the "Reinforcement vs. Punishment Classifier" and "Prediction Error / Dopamine Animator" entries directly above. No new demo entries added; recorded here so the two specs aren't duplicated later. The work order's recommended build order was: Reinforcement/Punishment Classifier first (cheap, reuses the Ch2 classifier scaffold), Classical Conditioning Simulator second — but the Classical Conditioning Simulator is the one that's actually already built (see flag above), so the real remaining build gap is the two Draftable operant items, not the flagship.

### Video candidates (Gemini-style, 8–20s, 16:9, concept-first, no in-video text) — logged Session 65, not yet built
1. **Extinction is not erasure** — fresh paint over old paint; under "stress" the old color bleeds back through. (~12s)
2. **Dopamine shifts to the cue** — the signal spike visibly migrating from the reward moment to the earlier predictive cue across repeats. (~12s)
3. **Variable-ratio pull** — an unpredictable payoff sustaining steady responding where a predictable one lapses. (~10s)
4. **Preparedness** — taste + illness snapping together instantly; light + illness refusing to bond. (~10s)

---

## Chapter 7 — Memory

### Forgetting Curve / Spacing Simulator ★ Priority #4
Status: Planned
Type: simulation
Core concepts: Ebbinghaus forgetting curve, spacing effect, retention interval, massed vs. distributed practice
Build priority: 4
Lab path: `docs/labs/ch07/forgetting-curve.html`

**Classroom version:** Instructor projects and advances time from 100% retention. Students predict retention at 1 day, 1 week, 1 month before the curve is revealed. Add a review event — class predicts the new baseline before it appears. Show massed vs. spaced comparison for the same total study time.

**Standalone lab version:** Student sets initial learning level, places review events on a timeline by dragging, adjusts inter-review spacing. System shows projected retention at a target exam date. Compare massed vs. spaced schedules side by side.

**Student deliverable:** Screenshot of their optimized review schedule for an actual upcoming exam + one paragraph connecting the spacing effect to the prologue's study recommendations.

**Privacy/accessibility notes:** localStorage for review event positions (session only). No content or grade data stored. Timeline drag-and-drop needs keyboard fallback (add/remove review events by button). No color-only encoding.

**P→C→M→E→R pattern:**
- *Predict:* "If you study once, 7 days before an exam, what percentage do you predict you'll retain on exam day?" Commit.
- *Commit:* Written estimate locked.
- *Manipulate:* Place study events; compare massed (all the night before) vs. spaced (3 sessions over 2 weeks).
- *Explain:* "Why does spacing outperform massing even with equal total study time?"
- *Retrieve/Transfer:* "Design a 3-session study schedule for your next exam using the spacing principle. When would each session be?"

---

### Serial Position Effect Demo 👥 ★ Priority #8
Status: Draftable
Type: experiment
Core concepts: primacy effect, recency effect, working memory, long-term memory
Build priority: 8
Lab path: `docs/labs/ch07/serial-position.html`

**Classroom version 👥:** 15-word list displayed on projector one word at a time (2 sec each). After final word: 30-second filler task (count backward from 100), then students write all recalled words in any order. Class data pooled into a live serial position curve.

**Standalone lab version:** Self-paced version. Student studies the list, completes filler task, recalls, plots their personal curve. Overlay of idealized primacy/recency comparison appears after.

**Student deliverable:** Personal serial position curve + one paragraph explaining which words were recalled most and why, in terms of LTM consolidation (primacy) vs. working memory persistence (recency).

**Privacy/accessibility notes:** Word list is not personal data. No external storage. Recall text field not stored — only position-tagged recall counts. Pooled class curve version uses aggregate data only, no individual responses.

**P→C→M→E→R pattern:**
- *Predict:* "Which words from a 15-word list do you predict you'll recall most — beginning, middle, or end?" Commit before list starts.
- *Observe:* Study list, recall, plot curve.
- *Explain:* Does your prediction match? Explain primacy (rehearsal → LTM) and recency (still in WM at recall).
- *Retrieve/Transfer:* "Why does a 30-second delay (the filler task) eliminate the recency effect but not the primacy effect?"

---

### Working Memory Capacity Demo
Status: Exists (repo: `psych101_awesome-sauce` — confirm URL: https://jkoxford-a11y.github.io/psych101_awesome-sauce/working-memory-demo.html)
Type: digit/word span task
Core concepts: working memory, capacity limits, chunking
Notes: Needs embed URL confirmed in ch07 markdown.

### DRM False Memory Paradigm 👥
Status: Draftable
Type: experiment
Core concepts: false memory, schema-driven reconstruction, spreading activation, source monitoring
Demo sketch: Study a list of sleep-related words (bed, rest, pillow, dream, night…). Recognition test includes "sleep" — not on list. Virtually all students "recognize" it. Class false-recognition rate is the finding.
Group use: Half class studies tight semantic list; half studies random list. Compare false recognition rates.
Notes: Directly corrects the "video camera" memory misconception.

### Levels of Processing Encoding Test 👥
Status: Idea
Type: experiment
Core concepts: levels of processing, elaborative rehearsal, shallow vs. deep encoding
Demo sketch: 20 words; students answer one of three orienting tasks (uppercase? rhymes with? fits in sentence?). Surprise recall test. Deep-processing condition outperforms.
Group use: Divide class by condition; pool recall data; compare group averages.

---

## Chapter 8 — Thinking, Language & Intelligence

### Cognitive Reflection Test Timer 👥 ★ Priority #5
Status: Draftable
Type: timed quiz
Core concepts: System 1, System 2, dual-process theory, intuitive errors
Build priority: 5
Lab path: `docs/labs/ch08/cognitive-reflection-test.html`

**Classroom version 👥:** Display one CRT item at a time with a 15-second timer. Students write first-instinct answer. After time expires: reveal the intuitive wrong answer and the correct answer with explanation. Pairs compare: did they catch the System 1 error before time ran out?

**Standalone lab version:** 5 CRT items timed individually. First answer recorded on submission. After each item: the intuitive wrong answer + correct answer + explanation of the System 2 override required. Session score and reflection prompt at end.

**Student deliverable:** Score (0–5) + one-paragraph reflection: which item was hardest to override, and what does that suggest about the effort required to engage System 2?

**Privacy/accessibility notes:** Timer must be pauseable for accessibility (screen reader users, extended time accommodations). No answer content stored externally — localStorage for session score only. Provide a no-timer version toggle.

**P→C→M→E→R pattern:**
- *Predict:* The format IS the predict-and-commit step — first answer under time pressure captures the System 1 response.
- *Commit:* First answer locked on submission.
- *Observe:* Correct answer + intuitive wrong answer revealed with explanation.
- *Explain:* Where did the intuitive answer come from? Why does it feel right?
- *Retrieve/Transfer:* "Identify one real-world situation from this chapter where System 1 fires incorrectly. What would engaging System 2 require in that situation?"

---

### Wason Selection Task 👥
Status: Draftable
Type: interactive card flip
Core concepts: confirmation bias, falsification, rule testing
Demo sketch: Four cards on screen (E, K, 4, 7). Student selects which to flip; reveals whether choice was diagnostic. Feedback explains why 4 is tempting but non-diagnostic.
Group use: Pairs commit to a selection before flipping; debrief common error patterns.
Notes: Figure (`fig_wason_task_prompt/answer`) already exists in `docs/images/ch08/`. Low build complexity.

### Framing Effect Demo 👥
Status: Draftable
Type: choice scenario
Core concepts: framing effect, prospect theory, loss aversion
Demo sketch: Two groups see identical problems framed as gains (save 200 of 600 lives) vs. losses (400 of 600 die). Class results compared across framing conditions. The preference reversal is the finding.
Group use: A/B split within class — half gets gain frame, half gets loss frame. Reveal after voting.

### Linda Problem Nested-Set Interactive 👥
Status: Draftable
Type: step-by-step walkthrough
Core concepts: representativeness heuristic, conjunction fallacy, base-rate neglect
Demo sketch: Student reads Linda vignette, makes prediction, then interactive nested-set diagram reveals the set relationships.
Notes: Figure (`fig_linda_conjunction_fallacy`) already exists in `docs/images/ch08/`.

### Availability Heuristic K-Word Demo
Status: Draftable
Type: poll/timed generation
Core concepts: availability heuristic, ease of recall as frequency proxy
Demo sketch: Students generate 5 words starting with K, then 5 with K as 3rd letter. System times generation speed and plots class distribution. Ease of generation ≠ actual frequency.
Notes: Already captured in activity-ideas.md. Widget version adds timing and class data pooling.

---

## Chapter 9 — Lifespan Development

### Piaget Stage Sorter 👥
Status: Draftable
Type: classifier
Core concepts: sensorimotor, preoperational, concrete operational, formal operational; conservation, object permanence, egocentrism
Demo sketch: Vignette describing a child's behavior. Student classifies which stage it most likely reflects. Feedback explains reasoning.
Group use: Each pair gets a different vignette; class builds a collective stage map.

### Attachment Style Matcher 👥
Status: Draftable
Type: vignette classifier
Core concepts: secure, anxious, avoidant attachment; Ainsworth Strange Situation
Demo sketch: Four brief descriptions of child (or adult) attachment behavior. Student matches each to an attachment style and explains reasoning.
Notes: Keep vignettes fictional and non-stigmatizing.

### Sensitive Periods Timeline
Status: Idea
Type: interactive timeline
Core concepts: prenatal development, sensitive periods, teratogens, critical periods
Demo sketch: Horizontal gestational/developmental timeline. Click a week range to see which systems are developing and what inputs have the greatest effect.

---

## Chapter 10 — Social Psychology

### Conformity Pressure Demo 👥 ★ Priority #7
Status: Draftable
Type: social judgment task
Core concepts: conformity, normative vs. informational influence, Asch (1955)
Build priority: 7
Lab path: `docs/labs/ch10/conformity.html`

**Classroom version 👥:** Web version on projector (or each student on device). Comparison line task — correct answer obvious — then "group votes" appear (all wrong). Instructor tracks how many students change answers across 6 trials as pressure increases. Debrief: raise hands if you changed an answer.

**Standalone lab version:** 12 comparison-line trials. Pre-programmed "group" responses start clearly wrong, then become more plausible across trials. Conformity score tracked across trials. Post-task: student reflects on which trial (if any) produced the pull to conform.

**Student deliverable:** Conformity score + written reflection: on which trial (if any) did they yield or feel the pull? What was the internal experience? Was it normative or informational pressure?

**Privacy/accessibility notes:** Responses in localStorage for session only. No identifiable data stored. Reflection prompt is explicitly private — student is not asked to share results publicly. Frame the conformity score as illustrative, not diagnostic.

**P→C→M→E→R pattern:**
- *Predict:* "If 5 people clearly chose the wrong line, would you go along? What about if the answer were ambiguous?" Commit written prediction before starting trials.
- *Commit:* Prediction locked before trials begin.
- *Observe:* Work through trials; notice if/when pull to conform increases.
- *Explain:* Compare predicted behavior to actual behavior. What changed across trials?
- *Retrieve/Transfer:* "Classify the pressure in this demo as normative, informational, or both. What design change would shift the balance toward informational influence?"

---

### Bystander Diffusion Calculator 👥
Status: Draftable
Type: interactive graph
Core concepts: bystander effect, diffusion of responsibility, Darley & Latané (1968)
Demo sketch: Slider for number of bystanders. Graph shows actual helping-probability data from Darley & Latané's staged emergency paradigm. Students adjust group size and observe the helping curve.
Group use: Pairs predict the shape before data are revealed; discuss inflection points.

### Attribution Style Explorer 👥
Status: Draftable
Type: scenario ratings
Core concepts: fundamental attribution error, actor-observer bias, self-serving bias
Demo sketch: 6 scenarios — 3 where student is actor, 3 where they observe another. Rate each on internal/external and stable/unstable. After all 6, the actor vs. observer attribution asymmetry is plotted.
Group use: Compare ratings across pairs; look for systematic biases in class data.

### ELM Route Identifier 👥
Status: Idea
Type: ad analysis classifier
Core concepts: elaboration likelihood model, central route, peripheral route persuasion
Demo sketch: 4–6 brief persuasive messages. Student classifies which route each targets and rates personal susceptibility.

---

## Chapter 11 — Personality

### Big Five Self-Profiler 👥
Status: Draftable
Type: mini questionnaire + radar chart
Core concepts: Big Five (OCEAN), trait measurement, self-report, situational press
Demo sketch: 20-item mini-BFI. Student gets a radar chart profile. Optional: take again answering "at work vs. at home" to introduce situational press.
Group use: Pairs share profiles and discuss which traits they agree or disagree with in themselves.
Notes: Frame explicitly as a measurement exercise, not a diagnostic test. Must include a note that results are not a definitive personality profile.

### Aggregation Effect Visualizer 👥
Status: Draftable
Type: animated scatter plot
Core concepts: person-situation debate, Mischel r≈.30, aggregation principle, Funder & Ozer (1983)
Demo sketch: Scatter plot for single-observation trait prediction (wide, r≈.29). Slider increases number of aggregated observations — scatter tightens dramatically.
Group use: Students discuss why averaging helps and what this means for personality research.
Notes: Static fig11-1 already shows this. Interactive version adds the aggregation slider.

---

## Chapter 12 — Emotion, Stress & Coping

### Core Affect Circumplex Plotter 👥 ★ Priority #10
Status: Planned
Type: live data overlay
Core concepts: core affect, valence, arousal, Russell's circumplex, constructed emotion
Build priority: 10
Lab path: `docs/labs/ch12/core-affect-circumplex.html`

**Classroom version 👥:** 2D circumplex projected (valence x-axis, arousal y-axis). Each student plots where they currently are. Class dot cloud overlays live. Debrief: same external situation (sitting in class), wide variation in core affect. What's driving the variance?

**Standalone lab version:** Student plots current state on the circumplex. Option to plot at 3 time points across the day. Common emotion labels appear after plotting, showing where they cluster relative to the student's position.

**Student deliverable:** Two plotted states (now + one hour ago) + one sentence: what body or situational factor changed between the two?

**Privacy/accessibility notes:** No affect data stored externally. Plots are local and ephemeral. Do not ask students to label clinical states — frame as "right now" snapshot only. Include explicit note that the circumplex is a model of core affect, not a diagnostic tool. Keyboard-accessible dot placement.

**P→C→M→E→R pattern:**
- *Predict:* "Where on the circumplex (high/low valence × high/low arousal) are you right now?" Commit before seeing the full circumplex with emotion label overlays.
- *Commit:* Position committed before label layer appears.
- *Observe:* Reveal where common emotion words cluster. Does the nearest label match what you'd normally say?
- *Explain:* "The constructionist view says your emotion label is built from core affect + context. What context clues are shaping how you interpret your current state?"
- *Retrieve/Transfer:* "Two people are both in the upper-left quadrant (unpleasant, high arousal). One labels it 'anxious'; the other labels it 'excited.' What does Barrett's framework say about why the same core affect produces different emotions?"

---

### GAS Timeline Animator
Status: Planned (logged in ch12 session notes)
Type: animation
Core concepts: General Adaptation Syndrome, alarm/resistance/exhaustion, allostatic load, cortisol, immune function
Demo sketch: Animated timeline showing cortisol and immune function curves across the three GAS stages as a stressor continues. Student adjusts stressor duration/intensity to see when exhaustion hits.

### Body-Budget Ledger Simulator
Status: Planned (logged in ch12 session notes)
Type: running simulation
Core concepts: allostasis, body budget, deposits (sleep, movement, nutrition) vs. withdrawals (stressors)
Demo sketch: Running "account balance" that rises with deposits and falls with withdrawals. Balance affects simulated next-day mood valence. Students see how depleted budgets compound.
Notes: Frame as a model, not medical advice. Pairs with the Body-Budget Audit activity in activity-ideas.md.

---

## Chapter 13 — Psychological Disorders & Therapy

### Diathesis-Stress Slider 👥 ★ Priority #9
Status: Draftable
Type: interactive sliders
Core concepts: diathesis-stress model, genetic vulnerability, environmental stress, threshold for disorder
Build priority: 9
Lab path: `docs/labs/ch13/diathesis-stress.html`

**Classroom version 👥:** Instructor projects. Each pair sets vulnerability and stress levels for a provided fictional case and predicts whether the threshold is crossed. Class compares — identical stress levels produce different outcomes based on vulnerability. Debrief: why does the same stressor produce disorder in one person and not another?

**Standalone lab version:** Two sliders (genetic/biological vulnerability, cumulative environmental stress). Threshold line shifts with a protective factors toggle (social support, coping skills). Three fictional case prompts guide exploration.

**Student deliverable:** Slider settings for 3 fictional cases + one paragraph: what does the model reveal about statements like "they should just handle it"?

**Privacy/accessibility notes:** Fictional cases only — no prompts for personal mental health information. Explicit framing: this is a conceptual model, not a clinical assessment. Sliders keyboard-accessible. No data stored.

**P→C→M→E→R pattern:**
- *Predict:* "Two people experience the same stressor. Person A develops depression; Person B does not. What must differ between them?" Commit before interacting.
- *Commit:* Written prediction locked.
- *Manipulate:* Adjust vulnerability and stress sliders for each fictional case; add/remove protective factors.
- *Explain:* "Why isn't stress alone sufficient to explain disorder onset?"
- *Retrieve/Transfer:* "How does the diathesis-stress model change how you'd think about treatment? Which levers can intervention actually affect?"

---

### Diagnostic Criteria Classifier 👥
Status: Draftable (also in activity-ideas.md)
Type: vignette classifier
Core concepts: 3D criteria (distress, dysfunction, deviance), DSM-5-TR
Demo sketch: 5 vignettes varying in how clearly they meet the 3D criteria. Student classifies each: meets / borderline / does not meet, with written justification.
Group use: Small groups classify; disagreements drive debrief.

### Anxiety Maintenance Cycle
Status: Draftable (static figure exists: fig13_1)
Type: animated loop
Core concepts: anxiety, avoidance, negative reinforcement, ERP, CBT
Demo sketch: 4-step loop animated (trigger → anxiety spike → avoidance → short-term relief → loop resets). "What ERP does instead" button interrupts the avoidance step and shows the habituation curve across repeated exposures.

### CBT Thought Record 👥
Status: Idea
Type: structured guided form
Core concepts: cognitive distortions, automatic thoughts, cognitive restructuring, CBT
Demo sketch: Guided 5-column thought record with dropdown menu of common distortions. Use fictional scenarios only.
Group use: Pairs work through a fictional vignette together; debrief on which distortions were hardest to identify.
Notes: Not a therapeutic tool. Frame as "this is what a CBT therapist teaches."

---

*Last updated: 2026-06-26 (Session 40). Confirm existing embed URLs (action potential, dopamine mixing board, Heider & Simmel, size-weight illusion, working memory demo) with Jon before building lab wrappers for those entries.*
