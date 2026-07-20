# Chapter 4 Line-Edit Reconciliation and Revision Specification

**Date:** 2026-07-20  
**Repository:** `jkoxford-a11y/psych101`  
**Authoritative file:** `source/chapters/ch04-sensation-perception.md`  
**Inspected source SHA:** `cddfcfc23a57ebdca2731394d5c6bcd2240000a3`

## Scope and authority

This specification reconciles the instructor's tracked Word review with the current authoritative Markdown and adds the agreed structural, cognitive-load, and accuracy revisions.

Apply changes only to:

- `source/chapters/ch04-sensation-perception.md`

Do **not** modify in this pass:

- `docs/chapters/04-sensation-perception.html`
- CSS or JavaScript
- labs or lab assets
- figure files
- `source/visuals-inventory.md`
- project-state files
- commits or pushes

The generated HTML should remain unchanged until the revised source is reviewed and approved.

**Decision update:** Remove the Müller-Lyer treatment from the main chapter. Do not wire Figure 4.8 into revised source or generated HTML. Preserve the image asset for possible slide-only use or a later epistemics example about entrenched textbook explanations.

---

# 1. Global editorial decisions

## Accept from the Word line edit

Accept the instructor's paragraph breaks and list conversions throughout the chapter. They clarify the chapter's argumentative structure without changing its voice.

In particular:

- Present the two misconception demonstrations as two parallel bullets.
- Separate the opener's demonstration, interpretation, and forward pointer into distinct paragraphs.
- Present sensation and perception as two bullets in the `Do Not Confuse` section.
- Keep absolute threshold, difference threshold, signal detection, and sensory adaptation in separate instructional units.
- Present hit, miss, false alarm, and correct rejection as four bullets.
- Present rods and cones as parallel bullets.
- Present bottom-up and top-down processing as parallel bullets.
- Present the Gestalt principles as separate bullets.
- Present taste and smell as parallel bullets.

## Keep the predictive-coding deletion

In the “controlled hallucination” paragraph, retain the qualification that predictive coding is not a fully settled account of all perception. Delete the additional sentence/clause that repeats the same qualification by stating that not all perceptual scientists use it and that its exact mechanistic status remains debated.

The paragraph should end with:

> It is worth being clear, though, that predictive coding is a theoretical framework with strong empirical support in some domains, not a fully settled account of all perception.

## Logic-emphasis treatment

Convert the four instructor-underlined phrases to the existing Markdown/HTML convention:

```html
<span class="logic-emphasis">...</span>
```

Use these phrases:

1. `<span class="logic-emphasis">both</span>`
2. `<span class="logic-emphasis">developmental history</span>`
3. `<span class="logic-emphasis">compression</span>`
4. `<span class="logic-emphasis">shifts with context and attention</span>`

Do not use black underlining.

---

# 2. Learning Objectives

Replace Learning Objectives 3 and 7.

### Replace Objective 3 with

> 3. Describe how the visual and auditory systems transduce light and sound, and identify the major structures involved in each process.

### Replace Objective 7 with

> 7. Use an evolutionary trade-off framework to explain why sensory systems prioritize useful change over maximal sensitivity.

Leave Objectives 1, 2, 4, 5, and 6 unchanged.

---

# 3. Misconception Opener

Retain the existing prose, but implement the accepted structure:

1. Keep the first explanatory paragraph ending with “what is actually out there.”
2. Keep “It is not” as the start of a new paragraph.
3. Convert the blind-spot and repeated-word demonstrations into two bullets.
4. Start a new paragraph with “Both demonstrations point at the same conclusion.”
5. Start a new paragraph with “The evidence for this goes well beyond a couple of clever tricks.”
6. Start a new paragraph with “Later in this chapter...”
7. Apply logic emphasis to “both”:

> Your visual system does <span class="logic-emphasis">both</span>, constantly...

No substantive wording change is required beyond the structural conversion.

---

# 4. Section 1 — targeted replacements

## Sensation versus perception

Retain the opening sentence, then present the definitions as bullets:

- **Sensation** is the physical process by which a sense organ responds to a stimulus and converts it into a neural signal — light hitting your retina, a sound wave reaching your eardrum, or a chemical binding to a receptor on your tongue.
- **Perception** is the psychological process of organizing and interpreting that signal so that it becomes a meaningful experience — recognizing the light pattern as your friend's face, the sound as your name being called, or the taste as the coffee you ordered.

Then retain the synthesis as its own paragraph:

> Sensation begins with receptor transduction at the sense organ; perception emerges as the nervous system organizes and interprets those signals — a process that starts surprisingly early. The retina and cochlea both do real preprocessing before a signal ever reaches the brain, and interpretation continues through many stages rather than occurring in one final “perception step.”

## Signal-detection vocabulary

Replace the semicolon chain with:

- A **hit** is correctly detecting a stimulus that was actually present.
- A **miss** is failing to detect one that was present.
- A **false alarm** is reporting a stimulus that was not actually there — the phantom vibration.
- A **correct rejection** is correctly reporting that nothing was there.

Then begin a new paragraph:

> Critically, signal detection theory recognizes that your *willingness* to report “yes, I detected it” — your decision criterion — is separate from your actual sensory sensitivity. The criterion shifts depending on the cost of getting it wrong.

Retain the radiologist/crush comparison as a separate paragraph.

## Psychometric-function caption

Replace the existing caption with:

> *The psychometric function shows how the probability of reporting detection rises with stimulus intensity. The absolute threshold is conventionally defined as the intensity detected 50% of the time. Decision criterion is a separate signal-detection concept and is not depicted directly in this graph. Source: Kalloniatis & Luu, Webvision (CC BY-NC 4.0), https://webvision.med.utah.edu/*

This removes the misleading implication that the observer's criterion is a boundary located on the psychometric curve.

## Sensory adaptation

Replace the sensory-adaptation paragraph with:

> Finally, sensory systems generally respond most strongly when stimulation changes and less strongly when it remains constant. This decline in responsiveness is called **sensory adaptation**. Some receptors adapt rapidly and may become nearly silent during continued stimulation; others continue firing at a reduced or sustained rate. That division lets the nervous system represent both change and persistence. Sensory adaptation is why you stop noticing the pressure of your clothing and why a steady background odor or hum gradually fades from awareness, even though the stimulus is still present (Privitera, 2026).

Retain the evolutionary paragraph, but revise its opening sentence to:

> From an evolutionary standpoint, prioritizing change over constancy makes sense: a constant stimulus usually carries less new information than one that has just appeared or shifted.

This corrects the overstatement that receptors simply “stop responding.”

---

# 5. Section 2 — targeted replacements

## Rods and cones

Present the two photoreceptor types as bullets:

- **Rods** are extremely sensitive to dim light and support night vision, but they do not provide color or fine detail. They are concentrated in the retinal periphery and nearly absent from the center.
- **Cones** require more light but support color vision and sharp detail. They are densely packed in the **fovea**, the small central region you are using right now to read this sentence (Privitera, 2026).

Retain the dim-star and peripheral-reading examples as a separate paragraph.

## Hubel and Wiesel classic study

Replace the entire current walkthrough with:

#### Classic Study: Hubel and Wiesel — Feature Detectors and Critical Periods

**Question:** Does visual cortex respond to light in general, or do individual neurons respond to particular features?

**Method:** Hubel and Wiesel recorded single neurons in cats' primary visual cortex while presenting bars of light at different positions and orientations (Hubel & Wiesel, 1962). In later experiments, they temporarily deprived young kittens of patterned input through one eye and then examined how visual cortex represented each eye (Hubel & Wiesel, 1970).

**Key finding — feature detectors:** Individual neurons responded selectively to particular edges and orientations in particular regions of the visual field. Visual cortex did not merely register that light was present; it extracted structured features from the scene.

**Key finding — critical periods:** When one eye was deprived early in development, cortical representation shifted toward the open eye even though the deprived eye itself remained anatomically intact. Normal sensory input was required during a **critical period** for the cortex to organize normally.

**Why it matters:** Together, the findings show that perception depends on identifiable neural computations and on experience-dependent development. The visual system is not a camera sensor wired completely in advance. It extracts features, and experience helps determine how the cortical machinery performing that extraction is organized.

> **Stop and Retrieve:** What did the feature-detector experiments show that the deprivation experiments did not — and what did the deprivation experiments add?

Delete:

- the chronic-otitis-media extension;
- the Nobel-recognition sentence.

## Color vision

Split trichromatic and opponent-process theory into separate paragraphs.

Revise the opponent-process explanation to:

> **Opponent-process theory** (Hering, 1892) explains the second phenomenon. Downstream neural channels, beginning in retinal circuits, compare cone outputs in opposing dimensions — red versus green, blue versus yellow, and light versus dark. Color is therefore represented not only by how strongly each cone type responds, but also by differences between cone signals. This is why afterimages appear in opponent colors and why reddish-green and bluish-yellow are not normally perceived as ordinary color mixtures.

Revise the final synthesis to:

> Trichromatic and opponent-process theories are not rivals. They describe complementary stages of the same system: three cone classes first sample wavelength information; downstream circuits then compare those signals in opponent channels.

Revise Figure 4.4's caption by replacing “ganglion cells” with “downstream neural channels” and “the impossibility” with “why reddish-green and bluish-yellow are not normally perceived as ordinary mixtures.”

---

# 6. Replace Section 3 in full

Replace everything from:

```markdown
## Section 3: Perception as Prediction — How the Brain Builds an Experience
```

through the end of the current “Individual Differences in Perception” material with the following. Preserve the existing image paths unless a revised alt/caption is supplied below.

```markdown
## Section 3: Perception as Prediction — How the Brain Builds an Experience

Section 1 introduced bottom-up and top-down processing through two quick demonstrations. Here is the formal distinction.

- **Bottom-up processing** builds a percept from incoming sensory data, assembling simple features into increasingly complex representations.
- **Top-down processing** uses existing knowledge, expectations, goals, and context to shape how that input is interpreted (Privitera, 2026).

Both operate together. An experienced radiologist and an untrained viewer receive the same image, but the radiologist's learned expectations change which patterns become meaningful. Expertise does not alter the pixels. It alters what the visual system can extract from them.

One influential account of this interaction is **predictive coding**. Higher brain areas generate predictions about likely input, while lower areas return information about mismatches — **prediction errors** — between what was expected and what arrived (Rao & Ballard, 1999). On this account, perception is less like reading a message and more like sending a draft and receiving tracked changes. The brain proposes an interpretation; sensory evidence corrects it.

![Figure 4.5 — "Perception Is a Prediction Loop." A five-step circular diagram: (1) World — the external world is rich and complex, we never get all of it; (2) Sensory Evidence — our senses provide partial, noisy input; (3) Prediction Error — what came in is compared with what was expected; mismatch produces prediction error; (4) Prediction — the brain's best current guess about the world; top-down predictions shape early processing; (5) Perception — the updated model becomes your conscious experience and guides your actions; predictions generate our percepts and guide our actions. Actions change the world and produce new sensory input, keeping the loop going. Bottom label: "Not a recording — a controlled guess. Perception is an active, ongoing process of prediction, testing, and updating, constrained by sensory evidence."](../images/ch04/ch04_perception_prediction_loop.png)

*Figure 4.5. Perception as a prediction loop. Rather than passively receiving sensory data, the brain continuously generates predictions, compares them with incoming evidence, and updates its model. Action closes the loop by changing the next sensory input.*

Anil Seth calls perception a “controlled hallucination”: a best guess constrained, but not completely dictated, by sensory input (Seth, 2021). The phrase captures what the camera metaphor misses — perception is generative as well as receptive. It is worth being clear, though, that predictive coding is a theoretical framework with strong empirical support in some domains, not a fully settled account of all perception.

Ambiguous input shows why the distinction matters. In the viral 2015 image known as **the dress**, viewers tend to settle into one of two percepts: white and gold or blue and black. The pixels do not change. What changes is the visual system's assumption about the light illuminating the dress. If the scene is interpreted as blue shadow, the brain discounts blue and the dress appears lighter and warmer. If the scene is interpreted as warm illumination, the dress appears darker and bluer (Brainard & Hurlbert, 2015).

> **Try it in the lab:** Watch how the same ambiguous stimulus flips depending on the surrounding context your brain supplies: [Ch. 4 Interactive Labs → Context Changes Perception](../labs/ch04/context-and-ambiguous-perception.html).

![Figure 4.6 — "Same Pixels, Different Percepts." Two scenarios show the same fabric object under different lighting assumptions. In Assumption A (blue shadow), the brain discounts the blue cast and perceives the surface as lighter and warmer. In Assumption B (warm light), the brain discounts yellow and perceives the surface as darker and cooler. The center panel shows that both scenarios start from the same digital image. Key idea label at the bottom: "Perception is an inference. With the same sensory input, different assumptions lead the brain to different interpretations of the world."](../images/ch04/ch04_same_pixels_illumination_assumptions_v1.png)

*Figure 4.6. Same image, different percepts. The visual system must estimate the illuminant before inferring surface color. Different assumptions about that illuminant can therefore produce different color experiences from the same image file.*

The claim concerns the shared image file, not perfectly identical retinal stimulation. Screens, ambient light, and individual eyes still differ. The point is narrower and stronger: ambiguity in the input allows different interpretations to become stable.

#### AI Connection: Sensing Is Not Yet Perceiving

Tesla Vision is useful because it exposes the sensation–perception distinction in machine form. Tesla describes Full Self-Driving (Supervised) as using camera inputs and neural networks to build a model of the vehicle's surroundings and guide decisions (Tesla, n.d.). The cameras do not deliver a finished scene. The system must transform visual input into a task-relevant representation, and it can register an object while still interpreting it incorrectly.

The parallel should not be pushed too far. Human priors are shaped by individual <span class="logic-emphasis">developmental history</span>, and what receives weight <span class="logic-emphasis">shifts with context and attention</span>. The point is not that Tesla uses predictive coding or that machine and biological vision share one mechanism. The point is that sensing is not yet perceiving.

Two additional principles describe how perception produces a stable, usable world from incomplete input: Gestalt organization and perceptual constancy.

**Gestalt organization** begins from the observation that the perceived whole is not simply the sum of isolated sensory parts. The governing meta-principle, **Prägnanz**, is that the visual system tends toward a simple, stable organization. This is a form of <span class="logic-emphasis">compression</span>: fragmented edges, gaps, and movements are grouped into a manageable scene.

- **Figure-ground organization** separates a focal object from its background. Ambiguous images can support more than one assignment, as in the vase-or-faces illusion.
- **Proximity** groups elements that are close together.
- **Similarity** groups elements that share features such as shape, color, or orientation.
- **Good continuation** favors smooth paths over abrupt, disconnected changes in direction.
- **Closure** completes an incomplete figure when the available parts strongly imply a whole.
- **Common fate** groups elements that move together. A camouflaged animal can remain hidden while still, then become immediately visible when its parts move as one.

These principles describe perceptual organization; they do not by themselves prove predictive coding. They do, however, reinforce the broader point that the visual system actively organizes incomplete input rather than waiting for a finished picture.

![Figure 4.7 — Six-panel figure illustrating Gestalt principles of perceptual grouping. Proximity: two tight clusters of dots perceived as two separate groups. Similarity: a grid of alternating circles and squares perceived as columns by shape. Figure-Ground: a white vase silhouette on a dark background that can also be perceived as two facing profiles. Closure: three Pac-Man shapes arranged so the gaps imply a white triangle that is not actually drawn (Kanizsa triangle). Good Continuation: an ambiguous X shape shown alongside the same shape with upper arms highlighted in gold and lower arms in dark, illustrating the kinked interpretation that good continuation prevents you from perceiving. Common Fate: two clusters of dots with arrows — one cluster moving upward, one downward — perceived as two separate groups because elements share a common direction of motion.](../images/ch04/fig_gestalt_principles_original.png)

*Figure 4.7. Gestalt principles describe recurring ways the visual system organizes incomplete or ambiguous input into stable wholes. They are examples of Prägnanz: a bias toward a simple, coherent organization. Original diagram created for this textbook, 2026.*

**Perceptual constancy** is the tendency to perceive an object as stable even while its retinal projection changes. A door swinging open projects a changing trapezoid, but you perceive one rectangular door rotating in space. A person walking away produces a shrinking retinal image, but you do not perceive the person as physically shrinking. The visual system uses distance and context to infer that the object remains stable while the viewing conditions change.

<!-- LAB PLACEHOLDER: size-weight illusion (takingaction repo) — wire embed here when live -->
> **Try it in the lab:** Lift two objects of equal weight but different sizes and notice how your expectation changes how heavy they feel. Practice this in the size-weight illusion lab when available.

#### Perceptual Disorders — When Construction Breaks Down

If perception is constructed across multiple stages, damage at different stages should produce different failures.

**Visual agnosia** is difficulty recognizing objects despite intact basic vision. A person may see edges, colors, and shapes yet fail to assemble them into a recognized object (Lissauer, 1890). **Prosopagnosia** is a more selective deficit in recognizing familiar faces despite otherwise adequate vision and, in many cases, preserved recognition of nonface objects. These conditions separate sensation from later interpretation.

**Charles Bonnet syndrome** shows a different failure. People with substantial visual loss may experience vivid visual hallucinations while retaining insight that the images are not real (Teunisse et al., 1996). Reduced visual input appears to release or destabilize activity in visual association systems. Predictive coding offers one possible interpretation — expectations are less constrained by incoming evidence — but it is not the only account.

These disorders make perceptual construction visible by showing how it can fail. They are consistent with predictive coding, but they do not prove it.
```

## Delete from Section 3

The full replacement above intentionally removes:

- the Plassmann wine-price paragraph;
- the extended CNN/Tesla architecture discussion;
- the Heider and Simmel lab callout;
- the W/M good-continuation callout and second figure;
- the “Individual Differences in Perception” table and concluding radiologist sentence;
- the Müller-Lyer paragraph, Figure 4.8 wiring and caption, and cross-cultural/carpentered-world discussion.

Do not delete the Heider–Simmel lab, W/M image asset, or Müller-Lyer image asset from the repository in this pass. They may be evaluated later for relocation or slide-only use. Mark the Müller-Lyer figure as **slide only/candidate** in any later visual-inventory reconciliation.

---

# 7. Section 4 — Hearing and the Body Senses

## Pitch coding

Replace the opening pitch paragraph with:

> Sound waves are funneled by the outer ear into the auditory canal, vibrate the eardrum, and are amplified by three tiny bones before reaching the fluid-filled **cochlea**. Within the cochlea, movement of the basilar membrane bends hair cells and converts mechanical vibration into neural activity (Privitera, 2026). Pitch is represented through two complementary kinds of information.
>
> - **Place theory** holds that pitch depends partly on *where* activity peaks along the basilar membrane. High frequencies peak nearer the base; lower frequencies peak farther toward the apex.
> - **Frequency theory**, more precisely called temporal coding, holds that pitch also depends on the timing pattern of auditory-nerve firing. At lower frequencies, neural firing can phase-lock to the sound wave. Individual neurons do not need to fire on every cycle; groups of neurons can share the timing burden through the volley principle.
>
> Temporal coding becomes less precise as frequency rises, while place coding becomes increasingly informative. The auditory system therefore uses both mechanisms rather than choosing between two rival theories.

Retain the diagnostic and retrieval questions, but revise “firing-rate coding” to “temporal coding.”

## Figure 4.9 caption

Replace with:

> *Figure 4.9. Pitch is coded with complementary place and temporal information. Basilar-membrane location is especially informative for high frequencies; phase-locked timing patterns contribute most at lower frequencies. Neither mechanism alone explains pitch across the full hearing range.*

## Add the missing subheading

Immediately before “The skin, the body's largest sense organ...” add:

```markdown
#### Somatosensation: Touch, Temperature, and Pain
```

## Somatosensation opening

Split the current paragraph into:

> The skin, the body's largest sense organ, transduces touch, temperature, and potentially damaging stimulation through specialized receptors. Mechanoreceptors respond to touch and pressure, thermoreceptors to temperature, and nociceptors to stimuli associated with actual or threatened tissue damage.

> These signals travel through the spinal cord and thalamus to cortical systems that include a **somatotopic map** — an organized representation of the body surface. Sensitive regions such as the lips and fingertips occupy more cortical territory than less sensitive regions such as the shoulder (Penfield & Rasmussen, 1950).

> Pain deserves special attention because it shows why an unpleasant sensation can still be adaptive. Without pain, an organism would lack an urgent signal to withdraw from injury and protect damaged tissue. People born with rare conditions that severely reduce pain perception accumulate repeated injuries precisely because that warning system is missing.

Retain the gate-control discussion and figure.

## Move perceptual disorders

The perceptual-disorders material is now included at the end of the replacement Section 3. Delete its old location after the pain discussion so it does not appear twice.

## Chemical senses

Replace the opening of “The Other Senses” with:

> Vision, hearing, touch, and pain are not the whole story. Taste and smell respond to **chemical stimuli** rather than to light or mechanical vibration.
>
> - **Taste (gustation)** begins when compounds dissolved in saliva interact with receptor cells. Five basic qualities — sweet, salty, sour, bitter, and umami — combine with smell, texture, and temperature to produce the richer experience of flavor.
> - **Smell (olfaction)** begins when airborne molecules bind to receptors in the nasal epithelium. Olfactory pathways reach primary olfactory cortex without the obligatory first thalamic relay used by the other major senses and connect strongly with emotion- and memory-related systems. This organization helps explain why odors can trigger vivid autobiographical memories and why anosmia can disrupt flavor and quality of life.

Retain the vestibular and proprioception paragraph.

---

# 8. Chapter Summary — replace in full

Replace the current summary with:

> **Sensation** begins when receptor systems transduce stimulation into neural activity; **perception** is the organization and interpretation of that activity into meaningful experience. The distinction is real but not a simple two-step handoff: sensory organs such as the retina and cochlea already preprocess input, while interpretation continues across multiple neural stages. Absolute threshold describes the minimum stimulation detected 50% of the time, Weber's Law describes how detectable change scales with the starting stimulus, and signal detection theory separates sensory sensitivity from the decision criterion used under uncertainty. Sensory adaptation reduces responses to unchanging input and keeps the system responsive to change.
>
> Vision begins when rods and cones transduce light in the retina. Cones support color and fine detail in the fovea; rods provide greater sensitivity in dim light and dominate the periphery. Depth perception combines binocular, physiological, pictorial, and motion cues. Hubel and Wiesel showed that visual cortex extracts particular features and that normal early experience is required for cortical organization during critical periods. Color vision likewise requires two complementary stages: three cone classes sample wavelength information, and downstream opponent channels compare those cone signals.
>
> Perception is not a recording. Bottom-up evidence and top-down expectations operate together, and predictive coding is one influential account of how prediction error may coordinate that exchange. The dress demonstrates how an ambiguous image can support different stable interpretations because the visual system must infer illumination before surface color. Gestalt principles describe how fragmented input is grouped into coherent wholes, while perceptual constancy stabilizes objects as viewing conditions change. Visual agnosia, prosopagnosia, and Charles Bonnet syndrome reveal different failures of perceptual construction without proving any single theoretical framework.
>
> Hearing uses both place information along the basilar membrane and temporal patterns in auditory-nerve firing to represent pitch. Somatosensation includes touch, temperature, body position, and pain. Gate control theory shows that pain is modulated by competing sensory input and descending signals from the brain rather than determined by tissue damage alone. Taste and smell transduce chemical stimulation, while vestibular and proprioceptive systems provide information about balance, movement, and body position.

---

# 9. “A Note on What Comes Next”

Replace the second paragraph with:

> Visual processing is distributed across partially specialized but strongly interacting pathways. Motion-sensitive regions such as MT/V5, ventral-stream regions including V4 and inferotemporal cortex, attentional systems, and recurrent feedback all contribute to the unified scene you experience. How the brain binds distributed processing into a coherent conscious percept is known as the **binding problem**. Chapter 4 shows how the brain constructs a perceptual model; Chapter 5 asks which parts of that construction become conscious — and why some well-processed information never reaches awareness.

This avoids presenting V4, MT/V5, and inferotemporal cortex as isolated modules for color, motion, and form.

---

# 10. Connections table

Update the “Predictive coding and the binding problem” row to preserve the existing link but use:

> Perception is constructed across interacting pathways; Chapter 5 asks how distributed processing becomes unified conscious experience.

No other Connections row requires substantive change.

---

# 11. Review-question answer rebalancing

Reorder alternatives without changing the tested concept.

Target distribution:

- A: Questions 2, 5, 8
- B: Questions 1, 9, 12
- C: Questions 3, 6, 10
- D: Questions 4, 7, 11

Apply these exact moves:

- **Q1:** unchanged; answer B.
- **Q2:** swap current A and B; answer A. Existing “Why (d) is tempting” rationale remains correct.
- **Q3:** unchanged; answer C.
- **Q4:** move the current correct B option to D; move current D to B; answer D. Existing “Why (a) is tempting” rationale remains correct.
- **Q5:** move current correct C option to A; move current A to C; answer A. Change “Why (a) is tempting” to “Why (c) is tempting.”
- **Q6:** swap current B and C; answer C. Existing “Why (a) is tempting” rationale remains correct.
- **Q7:** move current correct B option to D; move current D to B; answer D. Existing “Why (a) is tempting” rationale remains correct.
- **Q8:** unchanged; answer A.
- **Q9:** unchanged; answer B.
- **Q10:** swap current B and C; answer C. Existing “Why (d) is tempting” rationale remains correct.
- **Q11:** move current correct B option to D; move current D to B; answer D. Existing “Why (a) is tempting” rationale remains correct.
- **Q12:** unchanged; answer B.

Also revise Q5's correct option to say:

> the afterimage effect, including why reddish-green and bluish-yellow are not normally perceived as ordinary mixtures

---

# 12. Key Terms

## Delete

Delete:

> **Sensation-seeking** — ...

## Replace Frequency theory

> **Frequency theory** — The theory that pitch is represented partly by the timing pattern of auditory-nerve firing. At lower frequencies, neural responses can phase-lock to the sound wave; groups of neurons can share the timing burden as frequency rises.

## Replace Opponent-process theory

> **Opponent-process theory** — The theory that downstream visual channels compare cone outputs in opposing dimensions such as red versus green, blue versus yellow, and light versus dark, helping explain afterimages and why some color combinations are not normally perceived as ordinary mixtures.

## Replace Transduction

> **Transduction** — The conversion of stimulation — such as light, mechanical vibration, pressure, temperature, or chemical binding — into changes in receptor-cell activity that can be represented as neural signals.

Leave the remaining terms unless wording must be adjusted to match the revised body exactly.

---

# 13. References

## Delete references no longer cited

Delete:

- Enns, J. T., & Lleras, A. (2008).
- Plassmann, H., O'Doherty, J., Shiv, B., & Rangel, A. (2008).
- Segall, M. H., Campbell, D. T., & Herskovits, M. J. (1963).
- Zuckerman, M. (1994).

## Add

Add:

> Teunisse, R. J., Cruysberg, J. R., Hoefnagels, W. H., Verbeek, A. L. M., & Zitman, F. G. (1996). Visual hallucinations in psychologically normal people: Charles Bonnet's syndrome. *The Lancet, 347*(9004), 794–797. https://doi.org/10.1016/S0140-6736(96)90869-7

## Replace Tesla reference

Replace the current Autopilot reference with:

> Tesla. (n.d.). *Full Self-Driving (Supervised).* Model Y Owner's Manual. https://www.tesla.com/ownersmanual/modely/en_us/GUID-2CB60804-9CEA-4F4B-8B04-09B991368DC5.html

Delete Segall et al. (1963), because the Müller-Lyer discussion is removed from the chapter.

---

# 14. Validation

After applying the source changes, verify:

1. Only `source/chapters/ch04-sensation-perception.md` changed.
2. The chapter contains exactly four `logic-emphasis` spans:
   - both
   - developmental history
   - compression
   - shifts with context and attention
3. No Plassmann, Enns and Lleras, or Zuckerman citation remains.
4. Teunisse et al. (1996) appears in both body and References; Amir and Firestone (2025) and Segall et al. (1963) do not appear.
5. “Perceptual Disorders” occurs once and appears before Section 4.
6. “Somatosensation: Touch, Temperature, and Pain” appears before the skin paragraph.
7. The Heider–Simmel body callout, W/M figure, and Müller-Lyer treatment are absent, but their repository assets are untouched.
8. The Müller-Lyer image is not wired into revised source; any later visual-inventory update should mark it slide only/candidate.
9. The size–weight placeholder remains unchanged pending a separate build-or-remove decision.
10. Review-answer positions are exactly A=3, B=3, C=3, D=3.
11. Learning Objectives 3 and 7 match what the revised chapter actually teaches.
12. No generated HTML, figures, labs, CSS, JavaScript, state files, commits, or pushes were changed.
13. Report the approximate before/after narrative word count and identify any remaining section above roughly 2,000 words.

---

# 15. Evidence basis for the accuracy updates

- Auditory pitch uses complementary place and temporal information; lower-frequency auditory-nerve responses can phase-lock to the waveform, while place coding is central at higher frequencies.
- Sensory receptors vary in adaptation rate; some become nearly silent under sustained stimulation, whereas slowly adapting receptors continue responding.
- Tesla's current official documentation describes FSD (Supervised) as using multiple camera inputs and neural networks to build a model of the surrounding area and guide decisions. It does not justify the previous chapter's stronger claims about a standard feedforward CNN architecture or fixed within-drive model weights.
- Charles Bonnet syndrome involves visual hallucinations associated with visual impairment, commonly with retained insight; predictive coding is one possible account rather than an established exclusive mechanism.
- V4, MT/V5, and inferotemporal regions are partially specialized but extensively interconnected; the chapter should not describe them as three isolated processing modules.
