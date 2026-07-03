# Chapter 6 Figure Specs — Sleep

*Created: 2026-07-03*

Purpose: planning file for Chapter 6 sleep figures before generating, revising, or approving images. Use this file to prevent image churn: each figure must have one instructional job, a defined placement, readable labels, caption, alt text, attribution, and a status decision.

## Source files checked

- `pipeline/voice-brief.md` — preserve Jon Oxford / Herr Prof. Dr. Awesome-Sauce voice, direct misconception-first teaching, and explicit uncertainty flags.
- `docs/images/psych101_figure_style_guide.md` — one hard idea per figure, clean 16:9-friendly explanatory diagrams, large readable labels, no decorative stock images.
- `source/chapters/ch06-sleep.md` — current Chapter 6 source.
- `source/visuals-inventory.md` — current global visuals tracker.

## Current source-file mismatch to resolve

The current chapter header says Chapter 6 has two active figures in `docs/images/ch06/`:

- `fig_scn_pathway.png` as Fig. 6.1
- `fig_sleep_hypnogram.png` as Fig. 6.2

It also says `fig_two_process_sleep_model.png` remains on disk but is no longer referenced in the text.

The global visuals inventory still lists the two-process model as active Fig. 6.1 and lists the SCN pathway as Fig. 6.3. Before final HTML sync, reconcile the visuals inventory against the chapter source.

## Global visual direction for Chapter 6

Chapter 6 should not look like a generic sleep hygiene pamphlet. The visual spine should be:

> Sleep is not downtime. It is the brain's offline maintenance mode: timing, cycling, cleaning, consolidating, and regulating the conscious system.

Preferred figure style:

- Semi-realistic biology / medical-illustration look.
- Clean white or very light background.
- 16:9-friendly layout where possible.
- Few labels; captions carry nuance.
- Strong mechanism diagrams over decorative sleeping-person images.
- Do not imply the brain simply powers down.
- Do not overclaim weak or contested findings.
- Keep evidence-strength caveats in the caption or surrounding prose when needed.

---

# Figure Status Overview

| Proposed slug | Current file | Status | Placement | Decision |
|---|---|---|---|---|
| `ch06_sleep_active_maintenance_system` | not built | **High priority new build** | Misconception opener / Where This Fits | Build first after spec approval |
| `ch06_scn_circadian_clock_entrainment` | `fig_scn_pathway.png/.svg` | **Active, review/revise candidate** | Section 1 | Keep if readable; revise if too plain or cramped |
| `ch06_two_process_sleep_model` | `fig_two_process_sleep_model.png/.svg` | **Retired from current text; decision needed** | Section 1, if reinserted | Either leave retired or rebuild as practical lever diagram |
| `ch06_sleep_architecture_hypnogram` | `fig_sleep_hypnogram.png/.svg` | **Active, review/revise candidate** | Section 2 | Keep if readable; revise if too abstract or small |
| `ch06_glymphatic_clearance_deep_sleep` | not built | **High priority new build** | Section 2, after glymphatic paragraph | Build next; this is likely the strongest new mechanism figure |
| `ch06_lifespan_sleep_maintenance_arc` | not built | **Medium priority** | Section 3 | Useful if Section 3 needs visual support |
| `ch06_pfc_amygdala_sleep_deprivation` | not built | **High priority candidate** | Section 4 | Strong mechanism figure for consequences section |
| `ch06_parasomnia_do_not_confuse` | not built | **Medium priority** | Sleep Disorders subsection | Table may be enough; figure only if students struggle |
| `ch06_dream_theories_comparison` | not built | **Low/medium priority; on hold** | Dreams subsection | Use only if dream section becomes too prose-heavy |

---

# 1. Opening Anchor Figure

## Suggested filename

`ch06_sleep_active_maintenance_system.png`

## Status

**High priority new build.** This should be the chapter's visual thesis.

## Placement

Near the end of the Misconception Opener or immediately after `Where This Fits`.

## Core teaching idea

Sleep is not the brain doing nothing. It is offline maintenance for the conscious system: timing, architecture, clearance, consolidation, and regulation.

## Layout

16:9 semi-realistic infographic. Central sleeping head/brain silhouette or simplified brain-in-profile, surrounded by four or five clean mechanism panels.

Suggested panel labels:

1. **Timing** — SCN synchronizes the body clock.
2. **Architecture** — NREM/REM cycles organize the night.
3. **Cleaning** — deep sleep supports waste clearance.
4. **Consolidation** — memories are replayed and integrated.
5. **Regulation** — emotion, appetite, immunity, and hormones depend on sleep.

Bottom key idea:

> Offline does not mean inactive.

## Required labels

- Sleep = offline maintenance
- Timing
- Architecture
- Cleaning
- Consolidation
- Regulation
- Offline does not mean inactive

## Accuracy constraints

- Do not show the brain as dark, powered off, empty, or idle.
- Do not imply every sleep function happens equally in every stage.
- Do not imply sleep has one single purpose.
- Do not make glymphatic clearance look like ordinary blood circulation.
- Do not use a stock-photo bedroom scene as the main visual.

## Caption draft

Sleep is not biological downtime. Across the night, the brain cycles through organized states that synchronize circadian timing, support waste clearance, consolidate memories, and regulate emotion, appetite, immunity, and hormones. The point is not that sleep has one function, but that many maintenance processes depend on being offline from ordinary waking input.

## Alt text draft

A 16:9 educational infographic shows a sleeping head with an active brain at the center. Around it are five labeled maintenance jobs: timing by the SCN body clock, NREM/REM architecture, deep-sleep cleaning, memory consolidation, and biological regulation. The figure emphasizes that sleep is offline maintenance, not brain inactivity.

## Attribution

Original figure generated for Oxford Psychology 101 with ChatGPT image generation, 2026. No external copyrighted image assets intentionally used. Safe for public sharing pending final biological accuracy review.

## Detailed image-generation prompt

Create a 16:9 semi-realistic educational biology infographic for first-year General Psychology students.

Core teaching idea:
Sleep is not the brain doing nothing; it is offline maintenance for the conscious system.

Style:
- Clean white background.
- Semi-realistic textbook medical illustration.
- Large readable labels.
- Minimal text.
- No embedded figure number.
- No watermark.
- Avoid dark neon or decorative stock-image style.
- Use consistent soft colors for each maintenance function.

Layout:
A central sleeping head/brain silhouette or simplified side-view brain, visibly active but not cluttered. Around it, arrange five simple labeled mechanism panels like a clean radial dashboard.

Required labels:
- Sleep = offline maintenance
- Timing
- Architecture
- Cleaning
- Consolidation
- Regulation
- Offline does not mean inactive

Panel details:
- Timing: small SCN/body-clock icon entrained by light.
- Architecture: tiny hypnogram or NREM/REM cycle icon.
- Cleaning: cerebrospinal fluid flow through brain tissue.
- Consolidation: hippocampus-to-cortex memory replay arrows.
- Regulation: simple icons for emotion, appetite, immune, hormone regulation.

Accuracy constraints:
- Do not show the brain as powered off or empty.
- Do not imply all functions happen in the same sleep stage.
- Do not imply sleep has only one function.
- Do not make the glymphatic panel look like ordinary blood vessels only.
- Keep biological detail simplified for teaching.

Final bottom key idea:
Offline does not mean inactive.

Output:
PNG suitable for textbook and slides.

---

# 2. SCN Circadian Clock / Entrainment Figure

## Current file

`fig_scn_pathway.png/.svg`

## Suggested future filename if revised

`ch06_scn_circadian_clock_entrainment.png`

## Status

**Active in current chapter source as Fig. 6.1. Review before final approval.**

## Placement

Section 1, after the paragraph introducing circadian rhythms, the SCN, retinohypothalamic tract, pineal gland, and melatonin.

## Core teaching idea

Light does not create the circadian clock. Light entrains an internally generated SCN rhythm, which helps time melatonin release and biological night.

## Layout

Pathway diagram from environment to retina to SCN to pineal gland to melatonin rhythm.

Preferred visual grammar:

- Left: morning/evening light entering eye.
- Middle: retina and retinohypothalamic tract arrow to hypothalamic SCN.
- Right: SCN signaling pineal gland, with melatonin rising at night.
- Small inset: free-running rhythm continues without light cues.

## Required labels

- Light cue
- Retina
- Retinohypothalamic tract
- SCN master clock
- Pineal gland
- Melatonin = biological night signal
- Light entrains; it does not create the clock

## Accuracy constraints

- Do not call melatonin a sedative or knockout drug.
- Do not imply the pineal gland generates the circadian rhythm.
- Do not imply the SCN only responds passively to light.
- Keep the anatomy approximate and clearly simplified.

## Caption draft

Light synchronizes the circadian system, but it does not create it. The SCN in the hypothalamus maintains an internally generated rhythm and uses retinal light input to entrain that rhythm to the external day-night cycle; one downstream output is timed melatonin release from the pineal gland.

## Alt text draft

A pathway diagram shows light entering the eye, retinal input traveling through the retinohypothalamic tract to the SCN in the hypothalamus, and SCN output influencing the pineal gland and melatonin release. A small inset indicates that the rhythm continues without light, but light synchronizes it to the day.

## Attribution

Original figure generated for Oxford Psychology 101 with ChatGPT image generation, 2026. No external copyrighted image assets intentionally used. Safe for public sharing pending final biological accuracy review.

---

# 3. Two-Process Sleep Model Figure

## Current file

`fig_two_process_sleep_model.png/.svg`

## Suggested future filename if rebuilt

`ch06_two_process_sleep_model_process_s_process_c.png`

## Status

**Currently retired from the chapter source. Decision needed.** The concept remains central in Section 1 and Review Question 2, but the image is no longer referenced in the markdown. If retained, the figure should earn its place by making caffeine, light, melatonin, and naps easier to reason about.

## Placement if reinserted

Section 1, after the intervention table.

## Core teaching idea

Sleep timing reflects two partly independent systems: homeostatic sleep pressure builds with time awake, while circadian alerting rises and falls by time of day. Practical interventions act on different systems.

## Layout

Two synchronized panels:

- Top: Process S builds during wakefulness and drops during sleep.
- Bottom: Process C oscillates across 24 hours.
- Overlay callouts: caffeine blocks adenosine receptors; morning light shifts/entrains Process C; melatonin signals biological night; naps discharge some Process S.

## Required labels

- Process S: sleep pressure
- Adenosine builds while awake
- Sleep discharges pressure
- Process C: circadian alerting
- SCN timing signal
- Caffeine masks pressure; it does not clear it
- Light shifts timing
- Melatonin signals biological night

## Accuracy constraints

- Do not imply caffeine removes adenosine or eliminates sleep need.
- Do not imply melatonin is a general sedative.
- Do not imply Process S and Process C are the same thing.
- Do not make the graph too mathematically dense for intro students.

## Caption draft

The two-process model separates sleep pressure from circadian timing. Process S builds the longer the brain stays awake and falls during sleep; Process C is the SCN-driven alerting rhythm that rises and falls across the day. Caffeine, light, melatonin, and naps work because they act on different parts of this system.

## Alt text draft

A two-panel graph compares homeostatic sleep pressure and circadian alerting across a 24-hour day. Sleep pressure rises during wakefulness and falls during sleep, while the circadian alerting signal oscillates by time of day. Callouts show that caffeine masks sleep pressure, light shifts circadian timing, melatonin signals biological night, and naps reduce some accumulated pressure.

## Decision note

If the chapter already explains this well through the table, keep the figure retired. If students need a visual model for exam reasoning, rebuild this as a practical lever diagram rather than a generic textbook curve.

---

# 4. Sleep Architecture / Hypnogram Figure

## Current file

`fig_sleep_hypnogram.png/.svg`

## Suggested future filename if revised

`ch06_sleep_architecture_hypnogram_nrem_rem_cycles.png`

## Status

**Active in current chapter source as Fig. 6.2. Review before final approval.**

## Placement

Section 2, after the NREM/REM stage table.

## Core teaching idea

Sleep is not one uniform state. Across a typical night, the brain cycles through NREM and REM about every 90 minutes, with more deep NREM early and longer REM periods later.

## Layout

Clean hypnogram across an 8-hour night.

Required visual features:

- X-axis: hours of sleep.
- Y-axis: Wake, REM, NREM 1, NREM 2, NREM 3.
- NREM 3 concentrated in first half of night.
- REM periods lengthen across second half.
- Simple bracket or annotation: about 90-minute cycles.

## Required labels

- Wake
- REM
- NREM 1
- NREM 2
- NREM 3 / slow-wave sleep
- ~90-minute cycles
- Deep sleep early
- REM lengthens later

## Accuracy constraints

- Label as a typical simplified night, not every person's exact pattern.
- Do not imply each cycle is identical.
- Do not imply vivid dreaming only ever occurs in REM, if the caption has space for nuance.
- Keep graph readable at slide distance.

## Caption draft

A typical night's sleep cycles through NREM and REM stages about every 90 minutes. Deep NREM sleep is concentrated in the first half of the night, while REM periods lengthen toward morning. The figure is simplified: real sleep varies across individuals, age, stress, alcohol use, illness, and sleep disorders.

## Alt text draft

A hypnogram plots sleep stage across eight hours. The line descends from wake into NREM stages, reaches deep NREM 3 early in the night, then cycles back toward REM several times. Later cycles contain less deep sleep and longer REM periods.

## Attribution

Original figure generated/programmed for Oxford Psychology 101, 2026. Safe for public sharing pending final accuracy review.

---

# 5. Glymphatic Clearance During Deep Sleep

## Suggested filename

`ch06_glymphatic_clearance_deep_sleep.png`

## Status

**High priority new build.** This is probably the strongest next image because it gives the restorative account a concrete biological mechanism.

## Placement

Section 2, immediately after the glymphatic paragraph.

## Core teaching idea

During deep slow-wave sleep, cerebrospinal fluid moves through brain tissue more effectively, helping clear metabolic waste such as amyloid-beta. This is one reason sleep is active maintenance, not passive rest.

## Layout

Two-panel comparison:

- Left panel: **Awake brain** — cells more crowded, narrower interstitial space, less visible CSF flow, waste accumulates.
- Right panel: **Deep sleep** — expanded interstitial space, clearer CSF flow arrows through brain tissue, waste particles being cleared.

Keep it semi-realistic but simplified. Avoid microscopic overload.

## Required labels

- Awake: limited clearance
- Deep slow-wave sleep: increased CSF flow
- Cerebrospinal fluid (CSF)
- Interstitial space
- Metabolic waste
- Amyloid-beta example
- Cleaning is active maintenance

## Accuracy constraints

- Say amyloid-beta is an example, not the only waste product.
- Do not say sleep cures or prevents Alzheimer's disease.
- Do not show the glymphatic system as identical to the lymphatic system.
- Do not imply clearance stops entirely during wakefulness; say less efficient / limited.
- Do not imply this is the only restorative function of sleep.

## Caption draft

The glymphatic system is one concrete mechanism behind sleep's restorative function. During deep slow-wave sleep, cerebrospinal fluid moves more effectively through brain tissue and helps clear metabolic waste products such as amyloid-beta. This does not mean sleep is a cure for neurodegenerative disease; it means that one important maintenance process runs more efficiently during sleep than during waking.

## Alt text draft

A two-panel brain-tissue diagram compares the awake brain with deep slow-wave sleep. In the awake panel, cells are closer together and cerebrospinal fluid flow is limited. In the deep-sleep panel, wider spaces between cells allow stronger cerebrospinal fluid flow, shown by arrows carrying metabolic waste such as amyloid-beta away from the tissue.

## Attribution

Original figure generated for Oxford Psychology 101 with ChatGPT image generation, 2026. No external copyrighted image assets intentionally used. Safe for public sharing pending final biological accuracy review.

## Detailed image-generation prompt

Create a 16:9 semi-realistic educational biology infographic for first-year General Psychology students.

Core teaching idea:
During deep slow-wave sleep, cerebrospinal fluid moves more effectively through brain tissue and helps clear metabolic waste. This is active maintenance, not passive rest.

Style:
- Clean white background.
- Semi-realistic textbook medical illustration.
- Large readable labels.
- Minimal text.
- No embedded figure number.
- No watermark.
- Avoid dark neon, dramatic disease imagery, or decorative stock-image style.

Layout:
Two-panel comparison with matched brain-tissue cross sections.

Left panel title:
Awake: limited clearance

Right panel title:
Deep slow-wave sleep: increased CSF flow

Visual structure:
- Left panel: tightly packed brain cells, narrower interstitial spaces, small or faint CSF arrows, a few labeled waste particles.
- Right panel: slightly expanded interstitial spaces, clear CSF flow arrows moving through tissue, waste particles being flushed away.
- Include a small simplified brain silhouette above or behind each tissue panel to show this is brain tissue, but keep the focus on mechanism.

Required labels:
- Cerebrospinal fluid (CSF)
- Interstitial space
- Metabolic waste
- Amyloid-beta example
- Active maintenance

Accuracy constraints:
- Do not say clearance stops during waking; show it as limited or less efficient.
- Do not imply sleep cures Alzheimer's disease.
- Do not show the glymphatic system as identical to ordinary lymph vessels.
- Do not imply amyloid-beta is the only waste product.
- Keep details simplified for teaching.

Final bottom key idea:
Deep sleep helps the brain run a cleaning cycle it cannot run as efficiently while awake.

Output:
PNG suitable for textbook and slides.

---

# 6. Lifespan Sleep Maintenance Arc

## Suggested filename

`ch06_lifespan_sleep_maintenance_arc.png`

## Status

**Medium priority.** Build only if Section 3 needs a visual anchor.

## Placement

Section 3, after the paragraph comparing fetal/newborn active sleep with older-adult sleep fragmentation.

## Core teaching idea

Sleep's maintenance job changes across the lifespan: early sleep supports circuit construction and sensorimotor tuning; later life shows reduced deep sleep, reduced melatonin, and more fragmented maintenance.

## Layout

Horizontal lifespan arc from fetus/newborn to child/adolescent to adult to older adult.

Suggested labels:

- Fetus/newborn: active sleep supports brain construction.
- Child/adolescent: high plasticity and later clock shift.
- Adult: consolidated sleep supports maintenance.
- Older adult: less deep sleep, earlier timing, more fragmentation.

## Accuracy constraints

- Do not imply older adults do not need sleep.
- Do not imply all age changes are pathological.
- Do not overload with exact percentages unless the surrounding prose carries them.

## Caption draft

The maintenance system changes across development. Early in life, REM-like active sleep may help build and tune neural circuits before waking experience can do the job; in older adulthood, sleep becomes lighter, more fragmented, and less rich in deep slow-wave sleep. The same system is visible at both ends: overbuilt for construction early, harder to sustain later.

## Alt text draft

A horizontal lifespan diagram shows sleep functions changing from fetal and newborn active sleep, through childhood and adolescence, into adulthood and older age. Early sleep is labeled as supporting neural construction and sensorimotor tuning; older-adult sleep is labeled as lighter, more fragmented, and reduced in deep slow-wave sleep.

---

# 7. Sleep Deprivation: Prefrontal-Amygdala Regulation

## Suggested filename

`ch06_sleep_deprivation_pfc_amygdala_regulation.png`

## Status

**High priority candidate.** Strong mechanism figure for Section 4.

## Placement

Section 4, after the Do Not Confuse box on emotional reactivity.

## Core teaching idea

Sleep deprivation is not just feeling cranky. It weakens prefrontal regulation of amygdala reactivity, making emotional responses stronger and less contextually controlled.

## Layout

Two-panel comparison:

- Left: **Well rested** — prefrontal cortex sends strong regulating arrow to amygdala; response proportional.
- Right: **Sleep deprived** — weakened PFC regulation, larger amygdala response, exaggerated reaction to minor threat/frustration.

## Required labels

- Well rested
- Sleep deprived
- Prefrontal cortex
- Amygdala
- Top-down regulation
- Stronger emotional reactivity
- Brain state, not character flaw

## Accuracy constraints

- Do not imply the amygdala is a fear center only.
- Do not imply people lose all self-control after one poor night.
- Do not present the 60% amygdala finding as universal for every person and every sleep-loss condition.
- Keep the figure about circuit regulation, not moral failure.

## Caption draft

Sleep deprivation changes the regulation of emotional reactivity. When well rested, prefrontal systems help keep amygdala responses proportionate to the situation. After sleep loss, that top-down regulation is weaker, so emotional responses can become stronger and less contextually controlled. The point is not an excuse for behavior; it is a mechanism.

## Alt text draft

A two-panel brain diagram compares a well-rested state with a sleep-deprived state. In the well-rested panel, the prefrontal cortex sends a strong regulating signal to the amygdala. In the sleep-deprived panel, the regulating signal is weaker and the amygdala response is shown as larger, illustrating increased emotional reactivity.

---

# 8. Parasomnia Misconception Figure

## Suggested filename

`ch06_sleepwalking_vs_rem_behavior_disorder.png`

## Status

**Medium priority.** Build only if the table and prose do not sufficiently correct the misconception.

## Placement

Sleep Disorders subsection, after the disorder table.

## Core teaching idea

Ordinary sleepwalking is usually a NREM arousal parasomnia, not dream enactment. REM sleep behavior disorder is the disorder that actually involves acting out dreams.

## Layout

Two-column Do Not Confuse diagram.

Left:

- NREM arousal parasomnia
- Deep NREM / first half of night
- Sleepwalking, night terrors
- Not dream enactment

Right:

- REM sleep behavior disorder
- REM sleep / dream content
- Failure of REM atonia
- Dream enactment

## Accuracy constraints

- Do not imply all sleepwalking is identical.
- Do not imply REM behavior disorder is common in young healthy students.
- Avoid cartoonish or funny depictions of sleepwalking; keep it clinically clear.

## Caption draft

The common belief that sleepwalkers are acting out dreams mixes up two different parasomnias. Ordinary sleepwalking and night terrors usually emerge from deep NREM sleep, whereas REM sleep behavior disorder involves failure of REM atonia and actual enactment of dream content.

## Alt text draft

A two-column comparison distinguishes NREM arousal parasomnias from REM sleep behavior disorder. The NREM column lists sleepwalking and night terrors from deep sleep and notes that these are not dream enactment. The REM behavior disorder column shows failure of REM atonia during REM sleep and labels this as actual dream enactment.

---

# 9. Dream Theories Comparison Diagram

## Suggested filename

`ch06_dream_theories_activation_synthesis_threat_simulation.png`

## Status

**Low/medium priority; currently on hold.** The section may be teachable enough with prose and the existing theory comparison. Build only if the dream section becomes too dense.

## Placement

Dreams subsection.

## Core teaching idea

Activation-synthesis and threat-simulation theories ask different questions about dreams: where bizarre dream content comes from versus what adaptive function threat-heavy dream content might have served.

## Layout

Side-by-side comparison.

Activation-synthesis:

- Brainstem activation
- Cortex synthesizes story
- Explains bizarreness / loose logic

Threat simulation:

- Emotionally negative / threat-rich content
- Safe rehearsal
- Adaptive hypothesis; contested details

## Accuracy constraints

- Do not present threat-simulation as settled consensus.
- Do not present activation-synthesis as explaining all dream content.
- Do not frame theories as mutually exclusive when chapter treats them as potentially complementary.

## Caption draft

Dream theories explain different parts of the puzzle. Activation-synthesis theory explains why internally generated brain activity can become bizarre story-like experience; threat-simulation theory asks whether threat-heavy dream content may have served an adaptive rehearsal function. The accounts are not mutually exclusive, and the adaptive claim remains more contested than the basic fact that dreams often carry negative emotional tone.

## Alt text draft

A side-by-side comparison contrasts activation-synthesis theory and threat-simulation theory. The activation-synthesis side shows brainstem activation leading the cortex to build a story from internal signals. The threat-simulation side shows negative or threatening dream content as possible safe rehearsal, with a note that the adaptive interpretation is contested.

---

# Recommended Build Order

1. **Opening anchor:** `ch06_sleep_active_maintenance_system.png`
2. **Glymphatic mechanism:** `ch06_glymphatic_clearance_deep_sleep.png`
3. **Review active figures:** SCN pathway and hypnogram for readability and conceptual fit.
4. **Decide two-process figure:** keep retired, or rebuild as a practical lever diagram.
5. **Build PFC-amygdala deprivation figure** if Section 4 needs a mechanism anchor.
6. **Only then consider** lifespan, parasomnia, or dream-theory figures.

# Final approval checklist

Before any Chapter 6 figure is marked `use now`, confirm:

- It teaches one clear concept.
- It supports a specific paragraph or learning objective.
- It is readable at slide distance.
- It does not reinforce the "sleep = downtime" misconception.
- It avoids unsupported disease or treatment claims.
- Caption, alt text, attribution, and public-sharing status are recorded.
- The visuals inventory and chapter source agree about figure numbering and file status.
