# Chapter 10 Figure Specs — Lifespan Development

*Created: 2026-07-07 (Session 78). Planning file for a new batch of Chapter 10 figures.*

**Purpose.** Chapter 10 already has three figures on disk: `ch10_human_extended_development_life_history.png` (10.1, GPT raster, born-unfinished → flexible-mind infographic), `ch10_piaget_stages_sequence_with_caveat.svg` (10.2), and `ch10_vygotsky_zpd_scaffolding.svg` (10.3). None are wired into the chapter yet. This file specs **eight additional figures** that fill the chapter's remaining high-struggle gaps.

**How this set was chosen.** Cross-checked the current chapter text (`source/chapters/ch10-lifespan-development.md` v0.4) against Jon's own teaching deck (`5 Chapter 5 Developmental.pptx`). Several of the deck's highest-value slides rely on **copyright-encumbered figures** — the Myers/DeWall sensation-seeking-vs-impulse-control crossover (slide 67), the fluid/crystallized aging curves (slide 74), the Huttenlocher-style regional synaptic-density curves (slide 18), and the Nelson developmental-timeline chart (slide 22). Those are exactly the concepts that most reward an original, copyright-safe redraw in the book's house style. The rest of the set targets concepts students reliably misread (orchid/dandelion as "fragile," the three attachment styles as interchangeable) or find striking but currently have no figure (fast–slow life history; secondary altriciality's ~28% stat).

**Two production methods this session (per Jon's call):**
- **Seven hand-coded SVGs** (Codex) — all the quantitative charts and structured matrices.
- **One GPT/DALL-E raster** — the fast–slow life-history continuum, which reads best as a semi-realistic comparative-biology scene (companion to the existing 10.1). Full natural-language prompt is in its section below, matching the prompt style already used in `ch10_human_extended_development_life_history_metadata.md`.

---

## Source files checked

- `source/chapters/ch10-lifespan-development.md` (v0.4) — current chapter text. Every figure below is anchored to a specific paragraph, quoted at its placement.
- `docs/images/ch10/ch10_piaget_stages_sequence_with_caveat.svg` and `ch10_vygotsky_zpd_scaffolding.svg` — the two already-built Ch10 SVGs; the house-style parameters below are extracted from these so the new figures match the two figures **already in this chapter's folder** (this matters — see the house-style note).
- `docs/images/ch10/ch10_human_extended_development_life_history_metadata.md` — the prompt/metadata format for the one GPT raster figure.
- `source/visuals-inventory.md` — Ch10 section (10.1–10.5 already reserved); this file adds 10.6–10.10 plus the continuum companion.
- `5 Chapter 5 Developmental.pptx` (Jon's teaching deck) — reviewed to see how each concept is currently visualized and which slides use borrowed art.

---

## SVG House Style (match the existing Ch10 figures, NOT the Ch8 Aptos style)

**Important:** the book has two hand-coded-SVG lineages. Ch8/Ch9 figures use `Aptos` font and a `#102a43` palette. **Ch10's own two figures (Piaget, Vygotsky) use a different, Arial-based lineage** — match *that one* so the new Ch10 figures are consistent with the two already sitting beside them in `docs/images/ch10/`.

**Canvas**
- `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900" role="img" aria-labelledby="title desc">`
- `<title id="title">` and `<desc id="desc">` populated (accessibility — both existing Ch10 SVGs do this).
- Background rect: `fill="#fbfbf8"` covering the full 1600×900 canvas (note: warm off-white `#fbfbf8`, not the Ch8 white).

**Typography** — `font-family: Arial, Helvetica, sans-serif` throughout.
| Role | Size / weight | Fill |
|---|---|---|
| Title (left-anchored, `x="80" y="82"`) | 48px / 700 | `#1f2f46` |
| Subtitle (one line, `x="82" y="~124"`) | 27px / 400 | `#4d5a6b` |
| Panel/stage heading | 31–32px / 700 | `#ffffff` on colored header, else `#1f2f46` |
| Body label | 25–26px / 400–700 | `#1f2f46` |
| Small / secondary | 21–24px | `#4d5a6b` / `#5e6978` |

**Cards & shadow**
- Card: `fill="#ffffff" stroke="#d8dddf" stroke-width="2.5"`, `rx="24–30"`.
- Soft shadow: `filter: drop-shadow(0 6px 10px rgba(35, 45, 60, 0.13));` applied to the group wrapping the main content (class `soft-shadow` in the existing files).
- Bottom "takeaway" strip/pill: rounded rect `fill="#f2f5f6" stroke="#cfd7db" stroke-width="2–2.5"` with centered or left-anchored dark text — used by both existing Ch10 figures to carry the one-sentence nuance.

**Accent palette** (from the Piaget stages figure — reuse these four so the whole chapter shares one color language):
| Accent | Fill | Use |
|---|---|---|
| Blue | `#456c86` (light tint `#e9f2f5`) | primary / "before" / calm |
| Tan | `#8b6f42` (light tint `#f5efe2`) | secondary contrast |
| Green | `#5e7f4d` (light tint `#eef5e8`) | growth / positive / crystallized |
| Purple | `#7b5b91` (light tint `#f0eaf4`) | later stages / higher-order |
| Warm orange/red | `#c65f4b` | warning / decline / reward-drive (use sparingly) |

**Arrow marker** (from the existing files):
```xml
<marker id="arrowhead-soft" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
  <path d="M0,0 L14,7 L0,14 Z" fill="#7a8da0" />
</marker>
```

**Chart discipline.** Charts must plot **real coordinate math** — a genuine axis line, tick marks, labeled reference points, and a smooth path built from actual control points — never a decorative squiggle. Where a curve is illustrative rather than reproducing a specific dataset, say so in the caption and keep axis values rounded/approximate. **No embedded figure numbers** ("Fig. 10.x") inside any SVG — filenames and captions carry those.

---

# Figure Status Overview

Numbering continues the reserved Ch10 series (10.1–10.5 already in `visuals-inventory.md`). Final reading-order numbers are confirmed at wiring, per the Ch8/Ch9 precedent.

| # | Proposed filename | Method | Priority | Placement (Section) | Type |
|---|---|---|---|---|---|
| 10.6 | `ch10_synaptogenesis_pruning_regional.svg` | SVG | **High** — replaces borrowed slide 18 | §1, brain-after-birth paragraph | Line chart (3 curves) |
| 10.1b | `ch10_fast_slow_life_history_continuum.png` | **GPT** | **High** — the "fast & slow" Jon flagged; no figure yet | §1, life-history paragraph | Comparative-biology scene |
| 10.9 | `ch10_secondary_altriciality_brain_completeness.svg` | SVG | High | §1, secondary-altriciality sentence | Comparison (two dials/bars) |
| 10.7 | `ch10_adolescent_dual_systems_crossover.svg` | SVG | **High** — replaces borrowed slide 67; fixes amygdala mislabel | §4, teenage-brain paragraph | Line chart (2 crossing curves) |
| 10.5 | `ch10_fluid_crystallized_adulthood.svg` | SVG | **High** — replaces borrowed slide 74; maps to LO8 | §4, fluid/crystallized paragraph | Line chart (2 curves) |
| 10.8 | `ch10_orchid_dandelion_susceptibility.svg` | SVG | High — corrects "orchid = fragile" misread | §3, orchid/dandelion paragraph | Line chart (2 crossing lines) |
| 10.4 | `ch10_attachment_styles_reunion_matrix.svg` | SVG | High (reserved slot) | §3, after the three-style list | Matrix / comparison table |
| 10.10 | `ch10_cross_sectional_vs_longitudinal.svg` | SVG | Medium | §1, "How to study change" paragraph | Two-panel schematic |

**Suggested build order:** 10.6 → 10.7 → 10.5 → 10.8 (the four line charts share construction logic — get the axis/curve machinery right once and reuse it) → 10.9 → 10.4 → 10.10 → then the GPT continuum (10.1b) separately.

---

# 10.6 — Synaptogenesis and Pruning (regional)

## Filename
`ch10_synaptogenesis_pruning_regional.svg`

## Method
Hand-coded SVG.

## Placement
Section 1, immediately after: *"...synaptic connections are massively overproduced, and the brain builds far more circuitry than it will ultimately keep (Huttenlocher, 1979). This is followed by **synaptic pruning**, in which unused connections are eliminated. The principle is blunt but effective: use it or lose it."* (Also directly supports the following sentence that the prefrontal cortex is among the last regions to mature.)

## Core teaching idea
Synapse number does not climb steadily to an adult plateau. It **overshoots** — rising to a peak well above adult levels in early childhood — then is **pruned back**. Different brain regions run this cycle on **different schedules**: sensory cortices (vision, hearing) peak and prune earlier; the prefrontal cortex peaks later and keeps pruning into adolescence. That staggering is why the chapter can say the PFC is "among the last regions to be fully myelinated / mature."

## Layout
A real plotted line chart, three smooth curves on shared axes:
- **X-axis:** age, from birth to adulthood, on a **compressed/log-like scale** so infancy is legible (label ticks at: Birth, 1 yr, 3 yr, 6 yr, 11 yr, Adult). A log-ish x mirrors the way the classic developmental curves are drawn and keeps the early peaks readable.
- **Y-axis:** "Relative synaptic density" — label the top region "above adult level" and mark a light horizontal dashed reference line for **"adult level"** roughly 60–65% up the axis, so every curve visibly rises above it and then settles back down to it.
- **Curve 1 — Visual cortex (vision)** [blue `#456c86`]: rises steeply, peaks earliest (around age ~0.5–1 yr, well above the adult line), prunes back to the adult line by roughly late childhood.
- **Curve 2 — Auditory cortex (hearing)** [tan `#8b6f42`]: similar early peak, close to the visual curve.
- **Curve 3 — Prefrontal cortex (reasoning, self-regulation)** [purple `#7b5b91`]: rises more slowly, peaks **later** (around age ~1–3 yr), and prunes back **more gradually**, not reaching the adult line until adolescence.
- Draw a light shaded vertical band over the adolescent region under the PFC curve's late descent, so the eye connects "PFC still pruning" with "adolescence."

Keep the three curves clearly distinguishable by color + a small inline legend (lower-right), matching the existing Ch10 label style.

## Required labels
- Title: "The brain overbuilds, then prunes — on a different clock for each region"
- Subtitle: "Synapses are massively overproduced in early childhood, then cut back. Sensory areas finish early; the prefrontal cortex keeps pruning into adolescence."
- Axis titles: "Age" (x), "Relative synaptic density" (y)
- Dashed reference line: "Adult level"
- Curve legend: "Visual cortex (vision)", "Auditory cortex (hearing)", "Prefrontal cortex (reasoning, self-regulation)"
- Bottom takeaway strip: "Use it or lose it: experience keeps the connections that get used and prunes the ones that stay quiet."

## Text to avoid
- Do **not** print exact synaptic-density numbers or exact peak ages as if from one dataset. This is a **schematic** of the well-replicated Huttenlocher / Huttenlocher & Dabholkar pattern, not a reproduction of a specific plotted dataset. Keep ages approximate ("~1 yr," "adolescence") and the y-axis unit-free ("relative density").
- Do not label this a "myelination" curve — myelination is a separate process mentioned in the same paragraph; this figure is specifically synapse count (density), not myelin.

## Accuracy constraints
- All three curves must visibly **exceed the adult line at their peak and return toward it** — the overshoot-then-prune shape is the entire point; a monotonic rise would teach the opposite of what the text says.
- The PFC curve must peak **later** and settle **later** than the sensory curves — that lateness is what licenses the chapter's adolescent-brain material in Section 4.
- Do not imply pruning is damage or loss of ability — the takeaway strip frames it as tuning ("use it or lose it"), matching the prose.
- Keep exactly three regions; do not add more curves (readability, and the chapter only needs the sensory-vs-PFC contrast).

## Caption draft
Early brain development overproduces synapses far beyond adult levels, then prunes the unused ones back — "use it or lose it." Crucially, regions run this cycle on different schedules: sensory areas like the visual and auditory cortex peak and settle early, while the prefrontal cortex (reasoning, impulse control, planning) peaks later and keeps pruning into adolescence. The curves are schematic, illustrating the well-replicated pattern reported by Huttenlocher rather than a single dataset.

## Alt text draft
A line chart plots relative synaptic density against age from birth to adulthood for three brain regions. All three curves rise above a dashed "adult level" reference line and then decline back toward it. The visual-cortex and auditory-cortex curves peak early, around the first year, and settle by late childhood. The prefrontal-cortex curve peaks later, around ages one to three, and declines more gradually, not returning to the adult level until adolescence, which is marked by a shaded band.

## Attribution
Original figure, hand-coded SVG for Oxford Psychology 101, 2026. Concept follows Huttenlocher's classic synaptic-density findings; no copyrighted source image reproduced. Safe for public sharing.

---

# 10.1b — Fast–Slow Life-History Continuum

## Filename
`ch10_fast_slow_life_history_continuum.png` (companion to 10.1)

## Method
**GPT / DALL-E raster** (the one raster figure in this batch). Semi-realistic comparative-biology scene; save the generated PNG at the filename above.

## Placement
Section 1, at/after the paragraph: *"Every species falls somewhere on a fast-to-slow **life history** continuum. Fast species — mice, many fish — reproduce early, often, and invest little in each offspring. Slow species — elephants, great apes — reproduce late, rarely, and invest heavily. Humans sit at the extreme slow end of that continuum..."*

## Core teaching idea
There is a single axis — the life-history continuum — that orders species from **fast** (reproduce early, often, many offspring, little investment each) to **slow** (reproduce late, rarely, few offspring, heavy investment each). Humans sit at the extreme **slow** end. This is the frame that makes "why does human childhood take so long?" a real question with an evolutionary answer, rather than a truism. It is the *companion* to figure 10.1: 10.1 shows the human developmental sequence; 10.1b shows where humans sit *relative to other animals*.

## Image prompt (for GPT image generation)
> Create a clean, textbook-style semi-realistic comparative-biology infographic for an introductory psychology chapter on lifespan development. 16:9 landscape, white or very light background, warm but restrained colors, large readable labels, no dense paragraphs.
>
> Core teaching idea: species fall on a single continuum from "fast" to "slow" life history. Fast = reproduce early, many offspring, little care each. Slow = reproduce late, few offspring, heavy care each. Humans are at the extreme slow end.
>
> Composition: a single horizontal axis running left ("FAST life history") to right ("SLOW life history"), with a soft gradient along it. Place four to five real animals along the axis, left to right, drawn semi-realistically (not cartoonish, not photoreal):
> - Far left (fast): a mouse, shown with a large litter of pups. Small tag: "many offspring, little care, short life."
> - Left-center: a rabbit with several kits.
> - Center: a wolf or deer with a small litter.
> - Right-center: an elephant with a single calf staying close. Small tag: "few offspring, heavy care, long life."
> - Far right (slowest): a human parent (and ideally a second helper/grandparent) with a single child. Tag: "one child at a time, the longest childhood of any animal."
>
> Along the bottom, three simple paired contrast labels spanning the axis, each with the fast value on the left and the slow value on the right: "Reproduce early ⟷ Reproduce late," "Many offspring ⟷ Few offspring," "Little investment each ⟷ Heavy investment each."
>
> Style constraints: warm, clean, medical-illustration / textbook feel. No evolutionary ladder, no "primitive to advanced" implication — this is a horizontal trade-off axis, not a progress ranking. No numbers or fake data. No watermark, logo, signature, or embedded figure number. If the model struggles with the small tags, prioritize the animal placement and the "FAST ⟷ SLOW" axis labels over the fine print.

## Required labels (must survive generation, or be added/cleaned up after)
- "FAST life history" (left), "SLOW life history" (right)
- Mouse / rabbit / (wolf or deer) / elephant / human, placed left→right
- The three bottom contrast pairs (early/late, many/few, little/heavy investment)
- Human end tag: "the longest childhood of any animal"

## Text to avoid
- No evolutionary-ladder or "primitive → advanced" framing; humans are not "more evolved," just at the slow extreme of one trade-off axis.
- No specific lifespan/litter numbers (avoids fake precision and keeps it a concept figure).

## Accuracy constraints
- The axis is a **trade-off continuum, not a ranking of worth or complexity** — the caption must preserve this.
- "Fast" species are not depicted as deficient; both ends are valid strategies matched to different ecologies.
- Humans at the slow extreme is the one claim the figure must land unambiguously (extreme right, single child, helper present to foreshadow cooperative breeding).

## Caption draft
Every species sits somewhere on a fast-to-slow life-history continuum — a trade-off, not a ranking. Fast species (mice, rabbits) reproduce early and often, with many offspring and little investment in each. Slow species (elephants, great apes) reproduce late and rarely, investing heavily in a few. Humans sit at the extreme slow end: the longest childhood of any animal, usually one dependent child at a time, and — as the next sections show — the help of more than one caregiver to afford it.

## Alt text draft
A horizontal infographic arranges animals along an axis from "fast life history" on the left to "slow life history" on the right. On the left, a mouse with a large litter; then a rabbit with several young; a wolf with a small litter in the center; an elephant with a single calf toward the right; and a human parent with a helper and one child at the far right. Bottom labels contrast the two ends: reproduce early versus late, many versus few offspring, and little versus heavy investment in each offspring.

## Attribution
Original figure generated for Oxford Psychology 101 with GPT image generation, 2026. No external copyrighted image assets intentionally used. Companion to figure 10.1. Safe for public sharing pending final biological-accuracy review.

---

# 10.9 — Secondary Altriciality: How Finished Is the Brain at Birth?

## Filename
`ch10_secondary_altriciality_brain_completeness.svg`

## Method
Hand-coded SVG.

## Placement
Section 1, at: *"**Secondary altriciality** is evolution's partial answer on the input side: human infants are born with brains at only about 28% of their eventual adult volume, noticeably less complete than a chimpanzee infant's brain, which is closer to 40% of its adult size at birth."*

## Core teaching idea
Humans are born with a **less finished** brain than our closest relatives — about 28% of adult volume, versus ~40% for chimpanzees. That is not a deficit: being born less finished means **more of the brain is built after birth, out in the world**, where experience can shape it. Maximum immaturity buys maximum postnatal plasticity.

## Layout
A clean side-by-side comparison of two "completeness" indicators:
- **Left — Human infant** [blue `#456c86`]: a radial dial / donut (or a vertical fill bar) filled to **~28%**, big numeral "≈28%", label "of adult brain volume at birth."
- **Right — Chimpanzee infant** [tan `#8b6f42`]: same indicator filled to **~40%**, numeral "≈40%", same sublabel.
- Under each, a one-line consequence: under the human, "more built after birth → more shaped by experience"; under the chimp, "more built before birth."
- A connecting bracket or arrow beneath both, pointing to the human side, labeled: "Born less finished = a longer, more plastic window."

Keep it to two subjects only; do not add a third species.

## Required labels
- Title: "Born unfinished — on purpose"
- Subtitle: "Humans arrive with a less complete brain than other apes, which leaves more of it to be built by experience after birth."
- "Human infant ≈ 28%" / "Chimpanzee infant ≈ 40%" (of adult brain volume at birth)
- Consequence lines as above
- Bottom takeaway: "Maximum immaturity at birth buys maximum postnatal plasticity."

## Text to avoid
- Do not present the percentages as exact/precise-to-the-decimal — the chapter uses "about 28%" and "closer to 40%." Keep the "≈" and the rounding.
- Do not imply "less finished" means "blank slate" — the chapter is explicit elsewhere that infants start with core knowledge; the figure is about *volume completeness*, not a claim that nothing is present at birth.

## Accuracy constraints
- The human value must be visibly **lower** than the chimp value — the whole point is that humans are *less* complete at birth.
- Frame the human side as an **advantage** (plasticity), not a deficiency — the consequence line and takeaway carry this.
- Use "adult brain volume" as the denominator, matching the chapter's own wording (not "brain development" generally).

## Caption draft
Human infants are born with brains at only about 28% of eventual adult volume — noticeably less complete than a chimpanzee's, which is closer to 40%. Being born less finished is not a deficit: it means more of the brain's wiring is built after birth, out in the world, where experience can shape it. Maximum immaturity at birth buys maximum postnatal plasticity.

## Alt text draft
Two circular fill indicators compare how complete the brain is at birth. The human infant indicator is filled to about 28% of adult brain volume; the chimpanzee infant indicator is filled to about 40%. Labels note that humans build more of the brain after birth, where experience can shape it, while chimpanzees build more before birth. A caption states that being born less finished buys a longer, more plastic developmental window.

## Attribution
Original figure, hand-coded SVG for Oxford Psychology 101, 2026. Safe for public sharing.

---

# 10.7 — The Adolescent Brain: Reward-Seeking Outpaces Control

## Filename
`ch10_adolescent_dual_systems_crossover.svg`

## Method
Hand-coded SVG.

## Placement
Section 4, at: *"The result is a characteristic developmental asymmetry: reward-seeking systems (the ventral striatum, dopamine circuits) mature earlier than regulatory systems (prefrontal cortex). Sensation-seeking peaks in the mid-teens; impulse control catches up only gradually as frontal maturation continues (Blakemore & Choudhury, 2006; Casey, Getz, & Galvan, 2008)."*

## Core teaching idea
Adolescent risk-taking is not a single "immature brain" — it's a **timing mismatch between two systems**. A reward/sensation-seeking system rises fast and **peaks in the mid-teens**; a cognitive-control/impulse system rises **slowly and keeps maturing into the mid-20s**. For a window in between, drive is high while the brakes are still coming online. That gap — not global immaturity — is what elevates risk-taking.

## Layout
A real plotted line chart, two curves:
- **X-axis:** age, ~10 to ~25 (label ticks 10, 13, 16, 19, 22, 25).
- **Y-axis:** "Relative strength" (unit-free), low to high.
- **Curve A — Reward / sensation-seeking (ventral striatum, dopamine)** [warm orange/red `#c65f4b`]: rises steeply from age ~10, **peaks around 15–16**, then declines gently.
- **Curve B — Impulse control (prefrontal cortex)** [blue `#456c86`]: rises steadily and roughly linearly from age ~10, still climbing at 25, no peak in range.
- The two curves **cross in the late teens (~18–19)**. Shade the region *before* the crossing (roughly ages 13–18, where reward is above control) lightly and label it: **"widest gap: high drive, brakes still developing."**

## Required labels
- Title: "In the teen brain, the gas pedal matures before the brakes"
- Subtitle: "Reward-seeking peaks in the mid-teens; impulse control keeps maturing into the mid-20s. The gap between them is the risk window."
- Axis titles: "Age" (x), "Relative strength" (y)
- Curve labels (inline, near each line): "Reward / sensation-seeking (ventral striatum, dopamine)" and "Impulse control (prefrontal cortex)"
- Shaded-region label: "widest gap — high drive, brakes still developing"
- Bottom takeaway: "Not a broken brain — a timing mismatch between two systems on different clocks."

## Text to avoid
- **Do not label the reward side "amygdala."** Jon's teaching slide (slide 64) uses "amygdala," but this chapter attributes the reward drive to the **ventral striatum / dopamine circuits** — use that. (The amygdala is a threat/relevance detector in this book's Ch12 framing, a different job.) This relabel is a deliberate accuracy correction, not an oversight.
- Do not print exact score values — this is the standard Steinberg-style dual-systems schematic, illustrative, not one dataset. Keep the y-axis unit-free.

## Accuracy constraints
- Reward curve must **peak in range (mid-teens) and turn down**; control curve must **still be rising at the right edge (25)**. The crossing point in the late teens is the teaching moment.
- Frame the asymmetry as **adaptive/normal** ("not a broken brain"), consistent with the chapter's "this is not a design flaw" sentence.
- Keep exactly two curves; do not add a third.

## Caption draft
Adolescent risk-taking reflects a timing mismatch, not a globally "immature" brain. A reward- and sensation-seeking system (ventral striatum, dopamine circuits) rises fast and peaks in the mid-teens, while the prefrontal impulse-control system rises slowly and keeps maturing into the mid-20s. In the years where drive is already high but control is still developing, the gap between the two curves is widest — and so is the pull toward risk. The curves are schematic, illustrating the dual-systems pattern rather than a single dataset.

## Alt text draft
A line chart plots relative strength against age from about 10 to 25 for two brain systems. The reward and sensation-seeking curve rises steeply and peaks around ages 15 to 16, then declines gently. The impulse-control curve rises steadily and is still climbing at age 25. The two curves cross in the late teens. The region before the crossing, roughly ages 13 to 18, is shaded and labeled as the widest gap, where drive is high but control is still developing.

## Attribution
Original figure, hand-coded SVG for Oxford Psychology 101, 2026. Concept follows the Steinberg / Casey dual-systems account; no copyrighted source image reproduced. Safe for public sharing.

---

# 10.5 — Fluid vs. Crystallized Intelligence Across Adulthood

## Filename
`ch10_fluid_crystallized_adulthood.svg`

## Method
Hand-coded SVG.

## Placement
Section 4, at: *"Fluid intelligence, which involves novel problem solving, working-memory capacity, and processing speed, begins a slow decline in the 30s and accelerates after 60. Crystallized intelligence, which involves accumulated knowledge, verbal ability, and expertise, continues to grow or remain stable well into late adulthood."*

## Core teaching idea
Cognitive aging is not uniform decline. Two abilities move in **opposite directions**: **fluid** intelligence (novel problem-solving, speed, working memory) peaks in early adulthood and declines from the 30s on; **crystallized** intelligence (knowledge, vocabulary, expertise) keeps growing or holds steady deep into late life. The trade-off, not the decline, is the point.

## Layout
A real plotted line chart, two curves:
- **X-axis:** age, ~20 to ~80 (ticks 20, 30, 40, 50, 60, 70, 80).
- **Y-axis:** "Ability level" (unit-free).
- **Curve A — Fluid intelligence** [blue `#456c86`]: rises to an early peak around the mid-20s, then declines gradually through the 30s–50s and more steeply after 60.
- **Curve B — Crystallized intelligence** [green `#5e7f4d`]: rises through early and middle adulthood, plateaus, and stays high (very slight late dip at most) into the 70s–80s.
- The curves **cross around the 30s–40s** (crystallized overtaking fluid). Optionally include a faint dotted "overall/average" curve as a gentle inverted-U, but only if it doesn't clutter — the two named curves are the priority.

## Required labels
- Title: "Two kinds of intelligence age in opposite directions"
- Subtitle: "Fluid problem-solving declines with age; accumulated knowledge and expertise keep rising or hold steady."
- Axis titles: "Age" (x), "Ability level" (y)
- Curve labels (inline): "Fluid intelligence — novel problems, speed, working memory" and "Crystallized intelligence — knowledge, vocabulary, expertise"
- Bottom takeaway: "The trade-off of aging: speed and flexibility fall, knowledge and expertise accumulate."

## Text to avoid
- No exact scores or IQ points — illustrative curves, not a dataset. Unit-free y-axis.
- Do not label either curve "IQ" — the chapter ties these to the Horn & Cattell distinction, not to a single IQ score.

## Accuracy constraints
- Fluid must **peak early and decline**; crystallized must **rise/hold late**. The opposite directions and the crossover are the teaching content.
- Do not depict crystallized as rising forever without limit — plateau/very-slight-late-dip is more accurate than an unbounded climb.
- Keep the decline of fluid **gradual then steeper after 60**, matching the chapter's "slow decline in the 30s and accelerates after 60."

## Caption draft
Cognitive aging is a trade-off, not uniform decline. Fluid intelligence — novel problem-solving, processing speed, and working memory — peaks in early adulthood and declines gradually from the 30s, more steeply after 60. Crystallized intelligence — accumulated knowledge, vocabulary, and expertise — keeps rising through midlife and holds steady well into late adulthood. An older adult may struggle with a novel puzzle yet outperform a younger one on anything drawing on deep knowledge. Curves are schematic, illustrating the Horn & Cattell pattern.

## Alt text draft
A line chart plots ability level against age from 20 to 80 for two types of intelligence. The fluid-intelligence curve peaks in the mid-20s, then declines gradually through midlife and more steeply after age 60. The crystallized-intelligence curve rises through early and middle adulthood and stays high into the 70s and 80s. The two curves cross in the 30s-to-40s range, where crystallized intelligence overtakes fluid.

## Attribution
Original figure, hand-coded SVG for Oxford Psychology 101, 2026. Concept follows Horn & Cattell (1967); no copyrighted source image reproduced. Safe for public sharing.

---

# 10.8 — Orchid and Dandelion: Differential Susceptibility

## Filename
`ch10_orchid_dandelion_susceptibility.svg`

## Method
Hand-coded SVG.

## Placement
Section 3, at: *"Dandelion children — those with easy, robust temperament profiles — tend to develop reasonably well across a wide range of environments... Orchid children — those with difficult or highly reactive temperament — are exquisitely sensitive to environmental quality in *both* directions. In supportive, predictable, high-quality environments, they often develop *better* than their dandelion peers; in adverse, chaotic, or low-quality environments, they tend to develop worse."*

## Core teaching idea
The single most-missed point in this topic: **orchid ≠ fragile.** Orchid children are more sensitive to environment in **both** directions — worse in bad environments *and better in good ones* than dandelion children. A crossing-lines plot makes this instantly visible in a way prose cannot: the orchid line is **steep** and the dandelion line is **flat**, and they **cross**.

## Layout
A real plotted line chart, two straight-ish lines:
- **X-axis:** "Environment quality," running left "adverse / chaotic" to right "supportive / enriched."
- **Y-axis:** "Developmental outcome," low to high.
- **Dandelion line** [green `#5e7f4d`]: gentle positive slope — relatively **flat**, sitting in the middle of the y-range across the whole x-range (buffered: does okay everywhere). Label "Dandelion — buffered, steady across environments."
- **Orchid line** [purple `#7b5b91`]: **steep** positive slope — starts **below** the dandelion line at the adverse (left) end and ends **above** it at the supportive (right) end. Label "Orchid — sensitive in both directions."
- Mark the **crossover point** where the lines intersect with a small node.
- Add two short annotations: at the left end, "adverse environment: orchid does *worse*"; at the right end, "enriched environment: orchid does *better*."

## Required labels
- Title: "The orchid child is not fragile — she is sensitive both ways"
- Subtitle: "Dandelion children do okay across most environments. Orchid children do worse in bad ones and better in good ones."
- Axis titles: "Environment quality (adverse → supportive)" (x), "Developmental outcome" (y)
- Line labels as above; crossover node; the two end annotations
- Bottom takeaway: "Same sensitivity that makes an orchid vulnerable to adversity makes her especially responsive to enrichment."

## Text to avoid
- Do not label the orchid line simply "vulnerable" or "at risk" without the both-directions framing — that reproduces the exact misconception the figure exists to correct.
- No data values — this is a conceptual differential-susceptibility plot (Boyce & Ellis), illustrative.

## Accuracy constraints
- The orchid line **must start below and end above** the dandelion line, with a clear crossover — the both-directions claim fails if the orchid line is merely lower everywhere.
- The dandelion line should be **flatter**, not flat-zero — it still does slightly better in good environments, just far less sensitively.
- Frame difficult/orchid temperament as a **different ecological strategy** (high risk / high reward), not as worse — matching the chapter's reframing.

## Caption draft
Children differ not just in how reactive they are but in how strongly the quality of their environment affects them. Dandelion children (easy, robust temperaments) develop reasonably well across a wide range of environments — buffered against both adversity and enrichment. Orchid children (highly reactive temperaments) are sensitive in both directions: they fare worse than dandelions in adverse environments but better in supportive ones. The same sensitivity is a liability in bad conditions and an advantage in good ones — which is why "orchid" is a different strategy, not simply a fragile one.

## Alt text draft
A line chart plots developmental outcome against environment quality, from adverse on the left to supportive on the right. The dandelion line has a gentle slope and stays near the middle of the outcome range across all environments. The orchid line has a steep slope: it starts below the dandelion line at the adverse end and ends above it at the supportive end, crossing it near the middle. Annotations note that orchid children do worse in adverse environments and better in enriched ones.

## Attribution
Original figure, hand-coded SVG for Oxford Psychology 101, 2026. Concept follows Boyce & Ellis (2005) biological sensitivity to context; no copyrighted source image reproduced. Safe for public sharing.

---

# 10.4 — Attachment Styles: The Reunion Is the Diagnostic

## Filename
`ch10_attachment_styles_reunion_matrix.svg`

## Method
Hand-coded SVG.

## Placement
Section 3, immediately after the three-style list (secure / anxious-ambivalent / anxious-avoidant paragraphs), before or beside the Strange Situation "Classic Study" box.

## Core teaching idea
Students conflate the three styles. The figure separates them cleanly on the dimension that actually diagnoses them — **behavior at reunion** (not at separation) — and pairs each with its typical caregiving history, without deterministic outcome language. The one structural nuance to preserve: a fourth (disorganized) category exists but sits apart from the core three.

## Layout
A three-row matrix (a fourth, visually set-apart row for disorganized), columns:
- **Column 1 — Style** (color-coded row header): Secure [blue `#456c86`], Anxious-ambivalent [tan `#8b6f42`], Anxious-avoidant [purple `#7b5b91`].
- **Column 2 — Behavior at reunion (the diagnostic):** 
  - Secure: "Seeks comfort, is readily soothed, returns to exploring."
  - Ambivalent: "Very distressed; seeks *and* resists comfort — clings, then pushes away; hard to soothe."
  - Avoidant: "Ignores or avoids caregiver; little visible distress (suppressed, not absent)."
- **Column 3 — Typical caregiving history:**
  - Secure: "Sensitive, consistently responsive."
  - Ambivalent: "Inconsistent — responsive sometimes, not others."
  - Avoidant: "Consistently rejecting of proximity-seeking."
- **Column 4 — Approx. share (Western samples):** ~60–65% / ~10–15% / ~20–25%.
- A separated bottom strip: **Disorganized** [neutral gray] — "A fourth pattern (Main & Solomon), linked to frightening or severely neglectful caregiving; sits outside the core three."

Add a small callout badge on the "reunion" column header: **"Reunion, not separation, is what distinguishes them."**

## Required labels
- Title: "Three attachment patterns — read at the reunion"
- Subtitle: "What most distinguishes the styles is how the infant behaves when the caregiver returns, not how upset they get when she leaves."
- Column headers: Style / Behavior at reunion / Typical caregiving history / Approx. share (Western samples)
- All cell text above; the disorganized bottom strip
- Bottom takeaway or the reunion badge (above)

## Text to avoid
- **No deterministic outcome language** — do not write that a style "causes" or "leads to" specific adult outcomes. The chapter and `visuals-inventory.md`'s own note both flag this. Keep it to reunion behavior + caregiving history + prevalence.
- Do not present the percentages as fixed universals — label them "Western samples," matching the chapter's cross-cultural caveat.

## Accuracy constraints
- Emphasize **reunion** as the diagnostic moment (the chapter states separation is "less diagnostic") — the badge/callout must carry this, since it's the single most common student error after conflating the styles.
- Keep the three core styles primary and disorganized **visually separated** (the chapter treats it as an added category, not one of the core three).
- Avoidant row must convey **suppression, not absence** of attachment ("little visible distress," not "no attachment") — the chapter is explicit that avoidant looks like independence but isn't.
- Percentages must match the chapter's ranges (secure 60–65, ambivalent 10–15, avoidant 20–25).

## Caption draft
Ainsworth's three attachment patterns are distinguished less by how distressed an infant is at separation than by how they behave when the caregiver returns. Secure infants seek comfort and are soothed; anxious-ambivalent infants both seek and resist comfort and are hard to settle; anxious-avoidant infants suppress attachment behavior and appear indifferent. Each pattern tracks a typical history of caregiver responsiveness. A fourth pattern, disorganized, is linked to frightening or neglectful caregiving and sits outside the core three. These are patterns of relationship, not fixed destinies.

## Alt text draft
A matrix compares three attachment styles across three columns: behavior at reunion, typical caregiving history, and approximate share in Western samples. Secure infants (about 60 to 65 percent) seek comfort and are readily soothed, with sensitive, consistent caregiving. Anxious-ambivalent infants (about 10 to 15 percent) both seek and resist comfort and are hard to soothe, with inconsistent caregiving. Anxious-avoidant infants (about 20 to 25 percent) avoid the caregiver and show little visible distress, with consistently rejecting caregiving. A separated bottom row notes a fourth, disorganized pattern linked to frightening or neglectful caregiving. A badge notes that reunion, not separation, is what distinguishes the styles.

## Attribution
Original figure, hand-coded SVG for Oxford Psychology 101, 2026. Safe for public sharing.

---

# 10.10 — Cross-Sectional vs. Longitudinal Designs

## Filename
`ch10_cross_sectional_vs_longitudinal.svg`

## Method
Hand-coded SVG.

## Placement
Section 1, at the "How to study change across time" subsection, after the cross-sectional and longitudinal definitions and their respective confounds (cohort effects; attrition).

## Core teaching idea
Two ways to measure change with age, each with the flaw the other avoids. **Cross-sectional:** measure people of *different ages* at *one time* — fast, but age is confounded with **cohort** (generation). **Longitudinal:** follow the *same people* across *many years* — captures true within-person change, but is slow, costly, and loses participants (**attrition**, biased toward the less healthy/privileged dropping out).

## Layout
Two side-by-side panels:
- **Left — Cross-sectional** [blue `#456c86`]: three groups of little figures at different ages (e.g., "20s," "50s," "80s"), all under a single time label **"tested in 2026."** Below: strength "Fast, cheap." Flaw (orange tag): "Age is tangled with cohort — the 80-year-olds also grew up in a different era."
- **Right — Longitudinal** [green `#5e7f4d`]: one group of the *same* figures shown three times along an arrow across years (**"2026 → 2041 → 2056"**), aging in place. Below: strength "Tracks real change within people." Flaw (orange tag): "Slow and costly; participants drop out (attrition), often the less healthy or privileged."

A short header over each panel with the one-line definition. Keep the figure-people schematic and simple (circles + simple bodies), consistent with the scaffolding-figure's simple person glyphs.

## Required labels
- Title: "Two ways to study change with age — each fixes the other's flaw"
- Subtitle: "Compare different people at one time, or follow the same people across time."
- Panel headers: "Cross-sectional: different ages, same moment" / "Longitudinal: same people, across years"
- Age-group labels; time labels ("tested in 2026"; "2026 → 2041 → 2056")
- Strength + flaw tags for each (as above)
- Bottom takeaway: "Cross-sectional confounds age with generation; longitudinal avoids that but is slow and loses participants."

## Text to avoid
- Do not imply one design is simply "better" — the chapter frames them as a trade-off; the takeaway must keep both flaws visible.

## Accuracy constraints
- Cross-sectional panel must show **different individuals** of different ages at **one** time point; longitudinal must show the **same** individuals at **multiple** time points — collapsing that distinction defeats the figure.
- The cohort confound must be attached specifically to cross-sectional, and attrition specifically to longitudinal (the chapter pairs each flaw with its design).

## Caption draft
Developmental change can be measured two ways. A cross-sectional study compares people of different ages at a single point in time — quick and inexpensive, but it confounds age with cohort, since older and younger groups also grew up in different eras. A longitudinal study follows the same people across years, capturing genuine within-person change, but it is slow, expensive, and loses participants over time — and those who drop out tend to be less healthy or less privileged, which biases the picture. Each design avoids the other's central weakness.

## Alt text draft
Two panels compare research designs. The left panel, cross-sectional, shows three separate groups of people aged in their 20s, 50s, and 80s, all tested at one time in 2026; it is labeled fast and cheap but confounding age with cohort. The right panel, longitudinal, shows one group of the same people aging across three time points from 2026 to 2056; it is labeled as tracking real within-person change but slow, costly, and subject to participant dropout.

## Attribution
Original figure, hand-coded SVG for Oxford Psychology 101, 2026. Safe for public sharing.

---

# Final Approval Checklist

Before any Chapter 10 figure is marked `use now`, confirm:

- It matches the **Ch10-native** SVG house style (1600×900, Arial/Helvetica, `#fbfbf8` background, `#1f2f46` navy titles, the four-accent palette, soft-shadow) so it sits consistently beside the already-built Piaget and Vygotsky figures — **not** the Ch8/Ch9 Aptos lineage.
- It teaches exactly one idea — no figure does two jobs.
- It matches what `ch10-lifespan-development.md` actually says at its placement point (re-read the anchor paragraph; the chapter may have moved since 2026-07-07).
- Every chart plots real coordinate math (axis, ticks, labeled reference points, smooth path) — no decorative squiggles — and any illustrative curve is flagged as schematic in the caption.
- The four deliberate accuracy points survive: reward side is **ventral striatum, not amygdala** (10.7); orchid line **crosses** the dandelion line, not merely sits below it (10.8); reunion, **not separation**, is the attachment diagnostic and **no deterministic outcomes** (10.4); brain-% figures stay approximate with "≈" (10.9).
- Captions and alt text are attached (drafts above are starting points — revise against the actual wired paragraph).
- `source/visuals-inventory.md`'s Ch10 table is updated when any figure is built and wired, following every other chapter's pattern.
