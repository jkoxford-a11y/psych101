# Chapter 10 Figure Revision Plan

*Created: 2026-07-07 (Session 78b). Companion to `ch10_figure_specs.md`. Written after rendering all 8 first-draft figures to PNG and reviewing them visually.*

**How to use this file.** Each SVG figure has a "Fixes" list — hand these to Codex along with the original spec. The one raster figure (10.1b) has a revised GPT prompt to regenerate from. Priority order for the SVGs: **10.7 (most work) → 10.8 → 10.6 → 10.4 → 10.9 → 10.10 → 10.5 (nearly done).**

---

## The one problem behind most of the defects

Several figures place a **semi-transparent white background box** (`fill="#ffffff" opacity="0.86–0.88"`) behind a text label, and that box is positioned **on top of a plotted line**. This causes two separate defects at once:

1. **Washed-out line segments** — the line shows through the translucent box as a pale, broken-looking stretch (very visible on the dual-systems chart's blue and red lines).
2. **Misplaced labels** — the label ends up floating over the *wrong* curve, so a reader connects it to the line it's sitting on rather than the one it describes.

### Global rules (apply to every SVG)

1. **No label or annotation box may overlap a plotted line, ever.** Put text in genuinely empty regions of the plot. If a curve runs through the only available space, move the label — don't paint a box over the line.
2. If a text background is needed for legibility, make it **fully opaque** (`opacity="1"`), and still keep it clear of every stroke.
3. **Every plotted line is one solid stroke end to end** — no faded or broken segments.
4. **Both cues must agree:** color-code each curve's label to its line *and* place the label beside that same line.
5. Remove stray, ambiguous marks (see 10.10's floating "canes").
6. **Re-render each SVG to PNG and look at it** after editing — coordinate-reading missed all of these the first time.

---

## 10.7 — Adolescent dual-systems crossover  *(most work)*

The curve *shapes* are correct (reward peaks ~16 and falls; control rises into the mid-20s; they cross ~20–21). Do not change the paths. Fix the labels and annotation:

- **Labels are next to the wrong lines.** The red "Reward / sensation-seeking" label sits top-right, where the **blue** line ends; the "Impulse control" label sits mid-right, where the **red** line descends. Swap their vertical positions: to the right of the crossing, the **blue** (impulse) line is on top and the **red** (reward) line is on the bottom — so put **"Impulse control (prefrontal cortex)" in the upper-right beside the blue line**, and **"Reward / sensation-seeking (ventral striatum, dopamine)" in the lower-right beside the red line.** Keep the color-coded text fills.
- **Washed-out line segments** come from the two translucent white label boxes (`opacity 0.88` at `x=805,y=94` and `x=895,y=238`) painting over the opposite line. Once the labels move to clear space (per above), drop the translucent boxes or make them opaque; confirm no line runs behind either.
- **"Widest gap" annotation overlaps the red curve** — "high drive" is struck through by the line. Move that callout into the clear lower portion of the shaded band, below both curves (roughly plot-y 400–470), or above the plotted area entirely. It must not touch either line.

## 10.8 — Fluid vs. crystallized

Shapes are good (fluid peaks ~28 then declines; crystallized rises, plateaus, slight late dip; cross ~42). Only the labels collide:

- **"…novel problems, speed, working memory"** is crossed by the blue fluid curve, and **"knowledge, vocabulary, expertise"** is crossed by the green crystallized curve. Move the fluid label up-left into the open space above the fluid peak; move the crystallized label into the clear area above its plateau. No stroke behind either text.

## 10.6 — Synaptogenesis / pruning

Strong overall — keep the overshoot-then-prune shape, the adolescence band, and the PFC-late timing. Two refinements:

- **Visual (blue) and Auditory (tan) curves nearly coincide** and peak at the same height, so they read as one line. Separate them: give auditory a slightly **later and slightly lower** peak than visual, so both are legible. (Teaching point is unchanged — both are "early" sensory areas; they just need to be visually distinct.)
- Minor: the sensory curves dip a touch **below** the "Adult level" dashed line before flattening. Smooth them so they settle *onto* the line, not under it.

## 10.4 — Attachment reunion matrix

Clean and legible — keep the rows, color-coding, percentages, and the separated Disorganized strip. One fix:

- **The "Reunion, not separation, distinguishes them" badge overlaps the "Behavior at reunion" column header.** Relocate it so it doesn't collide — either a standalone badge in the top-right of the card, or folded into the subtitle line. It should read as a note, not sit on the header text.

## 10.9 — Secondary altriciality

Donuts and the "≈28% / ≈40%" numerals are good — keep them. One fix:

- **The curved "Born less finished = a longer, more plastic window" arrow crosses into both panel cards** and its bold label crowds the arrow. Move the whole arrow-plus-label into the clear band **below both panels** (between the panels' bottom edges and the takeaway pill). A straight or gently curved arrow pointing from the chimp side toward the human side, with the label sitting above it in clear space — not overlapping either card.

## 10.10 — Cross-sectional vs. longitudinal

Excellent structure — keep the two panels, color-coding, and strength/flaw tags. Two small fixes:

- **Remove the stray brown diagonal "stick" marks** floating beside the 80s figure and the 2056 figure. They read as noise. If an aging cue is wanted, either omit it or draw an unambiguous cane that actually touches the figure's hand.
- **Nudge the longitudinal arrow** so its head stops just before the 2056 figure rather than overlapping it.

## 10.5 — Orchid / dandelion  *(nearly done)*

The core is right — orchid (purple) starts below dandelion (green), crosses it, and ends above, with the crossover node and both-direction annotations. One minor fix:

- **The "Adverse environment: orchid does worse" callout** sits in empty upper-left, far from the orchid line's actual low point (bottom-left). Move it down toward the low end of the purple line, or add a short leader line, so the annotation points at what it describes. The "Enriched environment: orchid does better" box is already well placed near the high end.

---

## 10.1b — Fast–slow life-history continuum  *(GPT raster — regenerate)*

This is the **strongest** figure in the set — the animal lineup, the FAST⟷SLOW axis, and the gradient all work. One real content gap, which is Jon's note:

> **Life history is also about how *often* you reproduce, not just how many offspring per event.** A mouse doesn't only have large litters — it has *many litters, frequently, across a short life*. An elephant or human has few offspring *and* long gaps between them. The current figure shows litter size and investment but not reproductive *frequency*.

### Changes to make
1. **Add a fourth bottom contrast pair** for reproductive frequency: **"Reproduce often (many litters) ⟷ Reproduce rarely (few, spaced births)."**
2. **Clarify the offspring pair to mean lifetime totals**, so "many offspring" isn't read as per-litter: **"Many offspring over a lifetime ⟷ Few offspring over a lifetime."**
3. Optional small per-animal cue reinforcing frequency: mouse tag "several litters a year," elephant/human tag "one birth every few years."
4. Keep everything else — the five animals, semi-realistic style, the cooperative-breeding hint (human + grandparent), and the "longest childhood of any animal" tag are all working.

### Revised full prompt

> Create a clean, textbook-style semi-realistic comparative-biology infographic for an introductory psychology chapter on lifespan development. 16:9 landscape, white or very light background, warm but restrained colors, large readable labels, no dense paragraphs.
>
> Core teaching idea: species fall on a single continuum from "fast" to "slow" life history. Fast species reproduce early, **reproduce often, and have many offspring over a lifetime** with little care invested in each. Slow species reproduce late, **reproduce rarely with long gaps between births, and have few offspring over a lifetime**, investing heavily in each. Humans are at the extreme slow end.
>
> Composition: a single horizontal axis running left ("FAST life history") to right ("SLOW life history"), with a soft gradient along it. Place five real animals along the axis, left to right, drawn semi-realistically (not cartoonish, not photoreal):
> - Far left (fast): a mouse with a large litter of pups. Tag: "several litters a year; many offspring, little care."
> - Left-center: a rabbit with several kits.
> - Center: a deer with one or two fawns.
> - Right-center: an elephant with a single calf staying close. Tag: "one calf every few years; heavy care."
> - Far right (slowest): a human parent with a grandparent/helper and one child. Tag: "one child at a time, the longest childhood of any animal."
>
> Along the bottom, four paired contrast labels spanning the axis, fast value on the left and slow value on the right, evenly spaced:
> "Reproduce early ⟷ Reproduce late"
> "Reproduce often (many litters) ⟷ Reproduce rarely (few, spaced births)"
> "Many offspring over a lifetime ⟷ Few offspring over a lifetime"
> "Little investment each ⟷ Heavy investment each"
>
> Style constraints: warm, clean, medical-illustration / textbook feel. No evolutionary ladder and no "primitive to advanced" implication — this is a horizontal trade-off axis, not a progress ranking. No numbers or fake data. No watermark, logo, signature, or figure number. Keep the four bottom label pairs evenly spaced and non-overlapping; if space is tight, prioritize the animal lineup and the FAST⟷SLOW axis over the fine print.

After regenerating, save as `ch10_fast_slow_life_history_continuum.png` (overwriting the current draft) and update `..._metadata.md` to note the added reproductive-frequency dimension.

---

## Verification step

After Codex applies the SVG fixes and GPT regenerates 10.1b: render every SVG to PNG (`cairosvg`, 1600×900) and view each one, checking specifically that (a) no label or annotation touches a plotted line, (b) every line is a single solid stroke, (c) each label is beside its own correctly-colored curve, and (d) no stray marks remain. Only then wire into `ch10-lifespan-development.md` and update `source/visuals-inventory.md`.
