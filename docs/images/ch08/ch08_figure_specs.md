# Chapter 8 Figure Specs — Memory

*Created: 2026-07-07 (Session 76)*

**Purpose:** planning file for Chapter 8 (Memory) figures, written for batch generation by a coding agent (Codex) producing hand-coded SVGs rather than GPT/DALL-E raster images. Unlike every other chapter's figure backlog, Ch8 started this session with **zero candidate images anywhere in the repo** — confirmed by full listing of `Potential Images for Chapters Holding Space/` (only chapters 0,1,2,3,4,5,8,13 have folders there) and by content-search (atkinson, baddeley, serial position, misinformation, reconstructive — no hits). The one folder that looked promising, `Potential Images for Chapters Holding Space/8 Chapter/`, is a **false lead**: byte-for-byte (md5) identical to five images already wired into the current Ch9 (Thinking, Language & Intelligence) — a leftover from when that chapter was numbered "Chapter 8," before the Session 59/61 renumbering. Do not revisit that folder for Memory content; it has nothing to do with this chapter.

Jon's direction this session: write specs precise enough that Codex can batch-produce the SVGs directly, rather than writing DALL-E-style natural-language image prompts (the approach used for Ch6). This file gives the exact technical parameters to match the book's existing hand-coded SVG house style, plus per-figure content specs.

## Source files checked

- `pipeline/voice-brief.md` — voice/tone (not heavily relevant to diagram figures, but keep captions in Jon's direct, misconception-first register).
- `docs/images/psych101_figure_style_guide.md` — one hard idea per figure, few labels, caption carries nuance, accuracy-constraints discipline. Read in full before drafting below; every figure here follows its pre-generation workflow (teaching job → placement → figure type → layout → labels → text to avoid → accuracy constraints → caption → alt text → attribution).
- `source/chapters/ch08-memory.md` (v0.3) — current chapter text. Every figure below is anchored to specific paragraphs, not guessed from the visuals-inventory's one-line descriptions.
- `source/visuals-inventory.md` — Ch8 section (lines 153–164), the original 8.1–8.6 planning list this file supersedes with real placements and content.
- `docs/images/ch09/fig_iq_bell_curve.svg`, `fig_wason_task_prompt.svg`, `fig_linda_conjunction_fallacy.svg` — reverse-engineered for the house-style parameters below.
- `Potential Images for Chapters Holding Space/13 Chapter/diagnosis_is_not_a_cause_flowchart.svg` — a second, matplotlib-generated SVG lineage also in production use (see note at end of House Style section).

---

## SVG House Style (extracted from live, already-wired figures)

Most of this book's hand-coded SVGs (Ch9's `fig_iq_bell_curve.svg`, `fig_wason_task_prompt.svg`, `fig_wason_task_answer.svg`, `fig_linda_conjunction_fallacy.svg`, `fig_bias_question_substitution.svg`) share one consistent visual system. **Match this exactly** so Ch8's figures don't look like a different book:

**Canvas**
- `<svg viewBox="0 0 1600 900">`, `width="1600" height="900"`.
- White background rect covering the full canvas.
- A rounded "card" rect inset from the edges: `x="52" y="54" width="1496" height="792" rx="24" fill="#f8fbfd" stroke="#dde7ee" stroke-width="2"`.

**Typography**
- `font-family="Aptos, Arial, sans-serif"` throughout — no exceptions.
- Title: `x="96" y="116"`, `font-size="42" font-weight="700" fill="#102a43"`, left-anchored.
- Subtitle (one line, states the concept or question): `x="96" y="152"`, `font-size="22" font-weight="400" fill="#52606d"`.
- Body/diagram labels: typically 25–32px bold for primary labels, 22–28px for secondary text, always `fill="#102a43"` (dark navy) or the accent color when inside a colored panel.

**Reusable defs**
```xml
<defs>
  <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
    <feDropShadow dx="0" dy="8" stdDeviation="9" flood-color="#102a43" flood-opacity="0.12"/>
  </filter>
  <marker id="arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M0,0 L10,5 L0,10 Z" fill="#52606d"/>
  </marker>
</defs>
```
Apply `filter="url(#softShadow)"` to the group wrapping the main diagram content (boxes, circles, cards). Use `marker-end="url(#arrow)"` on any directional line/path.

**Color palette**
| Role | Fill | Stroke |
|---|---|---|
| Neutral panel/box | `#ffffff` | `#c9d6df` (width 2.5–5) |
| Light blue accent (primary category, "before," calm state) | `#eaf4f8` | `#2f5d7c` |
| Orange/red accent (contrast category, "after," error, warning) | `#f7d5c2` | `#c65f4b` |
| Orange/red text on light panel | — | `#8f3d2e` |
| Dark navy (titles, primary text) | `#102a43` | — |
| Gray (subtitles, axis lines, neutral arrows) | `#52606d` | — |
| Medium blue (data markers, secondary lines) | `#466b80` | — |

**Bottom "key idea" pill** (used to state the one-sentence takeaway at the foot of the canvas): rounded rect, `fill="#eaf4f8" stroke="#c9d6df" stroke-width="2"`, centered bold text, `fill="#102a43"`, `font-size="28"`.

**Layout conventions**
- Diagram content sits inside a white or light-tinted rounded rectangle (rx 18), itself inside the outer card.
- Comparisons use the blue-vs-orange pair above, never more than two accent colors in one figure.
- Charts (e.g. the IQ curve) plot real coordinate math, not decorative squiggles — axis line, tick marks, labeled reference points, smooth path.
- No embedded figure numbers ("Fig. 8.1") anywhere in the SVG — filenames and captions carry that, per the style guide.

**Secondary lineage (acceptable fallback, not preferred):** `diagnosis_is_not_a_cause_flowchart.svg` (built for Ch13) is matplotlib-generated — DejaVu Sans, DPI-based coordinates, dashed-line annotations, red X-mark accents. It reads fine and made it into the live book, so if generating via a Python/matplotlib script is more convenient for a given figure than hand-authoring path data, that's acceptable — but default to the Aptos/1600×900 hand-coded style above for consistency, since it's the majority style across Ch9/Ch13's already-wired figures.

---

# Figure Status Overview

| # | Proposed filename | Priority | Placement (ch08-memory.md) | Figure type |
|---|---|---|---|---|
| 8.1 | `ch08_atkinson_shiffrin_three_box_model.svg` | High — chapter's organizing figure | Section 1, end of first paragraph (the three-box model intro) | Sequential/pathway diagram |
| 8.2 | `ch08_baddeley_working_memory_model.svg` | High | Section 1, end of the Baddeley & Hitch paragraph | Hub-and-component diagram |
| 8.3 | `ch08_levels_of_processing_shallow_to_deep.svg` | High | Section 1, end of the Craik & Lockhart paragraph | Ladder / gradient diagram |
| 8.4 | `ch08_serial_position_curve.svg` | High | Section 3, end of the serial position effect paragraph | Data visualization (line chart) |
| 8.5 | `ch08_memory_taxonomy_tree.svg` | High | Section 2, immediately before the memory-systems table | Taxonomy tree |
| 8.6 | `ch08_reconstructive_memory_process.svg` | Optional / lower priority | Section 4, end of the misinformation-effect paragraph | Sequential process diagram |

Build order: 8.1 → 8.5 → 8.2 → 8.4 → 8.3 → 8.6. (8.1 and 8.5 anchor the chapter's two organizing frameworks — the encoding/storage/retrieval map and the memory-type taxonomy — so get those exactly right first; 8.6 is the one the visuals-inventory already flagged optional, since Section 4's four-error table already does real teaching work on its own.)

---

# 1. Atkinson-Shiffrin Three-Box Model

## Filename
`ch08_atkinson_shiffrin_three_box_model.svg`

## Placement
Section 1, immediately after: *"...where information ends up if it survives the earlier stages (Atkinson & Shiffrin, 1968)... this chapter is organized around exactly that map: encoding (this section), storage (Section 2), and retrieval, including how retrieval goes wrong (Sections 3 and 4)."*

## Core teaching idea
Memory moves through three stages that differ in how much they hold and for how long — but the "boxes" are a teaching simplification for functionally distinct processes, not three literal physical containers. This figure is the chapter's organizing map: everything in Sections 1–4 is about where information succeeds or fails at one of these three stages.

## Layout
Three panels left to right, connected by rightward arrows (`marker-end="url(#arrow)"`):

1. **Sensory Memory** (light blue panel) — capacity: high; duration: under 1 second.
2. **Short-Term / Working Memory** (light blue panel) — capacity: ~7 ± 2 items (fewer distinct chunks); duration: seconds to about a minute.
3. **Long-Term Memory** (light blue panel) — capacity: effectively unlimited; duration: lifetime.

Arrow labels between panels: "Attention" (Sensory → STM), "Encoding" (STM → LTM). Add a **thinner return arrow** from Long-Term Memory back to Short-Term/Working Memory labeled "Retrieval," since the chapter explicitly treats retrieval as pulling stored information back into active use (this also sets up Section 3).

Below each of the three panels, a small downward-fading arrow or dotted drop-off labeled **"lost"** — sensory information not attended to, STM information not encoded, and (much more rarely, smaller/fainter) LTM information not retrieved — visually establishing that forgetting can happen at any stage, which is the frame the rest of the chapter builds on.

## Required labels
- Sensory Memory
- Short-Term / Working Memory
- Long-Term Memory
- Attention
- Encoding
- Retrieval
- "< 1 second" / "seconds to ~1 minute" / "lifetime" (duration stats)
- "high capacity" / "~7 ± 2 items" / "unlimited" (capacity stats)
- Bottom key-idea pill: **"Not three physical boxes — three functionally distinct stages."**

## Text to avoid
- Do not write "7 items" as a bare, unhedged number — the chapter itself immediately complicates this with Cowan's 3–4 chunk estimate. Use "~7 ± 2 items (or fewer larger chunks)" or similar, short enough to fit.
- Do not label boxes as brain regions or imply a specific neural location for each stage — this model is functional/cognitive, not anatomical (LTP/hippocampus content is a separate Section 2 concept, not part of this figure).

## Accuracy constraints
- Do not imply the three stages are literally separate physical locations in the brain.
- Do not imply retrieval is effortless or automatic — the return arrow should look like ordinary information flow, not a guarantee.
- Do not omit the "lost" drop-offs — losing information at every stage is the point the surrounding prose is making (this is the chapter's first move toward "memory doesn't preserve everything, by design").
- Keep exactly three main stages — do not add a fourth stage or subdivide LTM here (LTM's internal structure is Figure 8.5's job, not this one's).

## Caption draft
The Atkinson-Shiffrin model maps memory as three stages that differ in capacity and duration: a brief, high-capacity sensory buffer; a sharply limited short-term/working memory; and an effectively unlimited long-term store. The three "boxes" are a simplification — modern research treats them as functionally distinct processes rather than physical containers — but the map is still useful for locating exactly where memory succeeds or fails at each stage.

## Alt text draft
A three-panel flow diagram shows information moving from Sensory Memory (high capacity, under one second) to Short-Term/Working Memory (about seven items, seconds to a minute) to Long-Term Memory (effectively unlimited capacity and duration). Arrows labeled "Attention" and "Encoding" connect the panels moving forward; a thinner return arrow labeled "Retrieval" moves from Long-Term Memory back to Short-Term/Working Memory. Small downward arrows beneath each panel are labeled "lost," indicating that information can be lost at every stage.

## Attribution
Original figure, hand-coded SVG for Oxford Psychology 101, 2026. Safe for public sharing.

---

# 2. Baddeley's Working Memory Model

## Filename
`ch08_baddeley_working_memory_model.svg`

## Placement
Section 1, immediately after the Baddeley & Hitch paragraph ending: *"...a phonological loop that holds verbal/acoustic information, and a visuospatial sketchpad that holds visual and spatial information (Baddeley & Hitch, 1974)."*

## Core teaching idea
Working memory is not one passive storage box — it's an active system with a coordinating executive directing two content-specific subsystems.

## Layout
Hub-and-spoke: **Central Executive** as a top-center panel (orange/red accent — it's the coordinating, active component), with two arrows pointing downward to two subsystem panels side by side below it (light blue accent, matched pair):

- Left: **Phonological Loop** — holds verbal/acoustic information (small label: "inner voice," e.g. rehearsing a phone number).
- Right: **Visuospatial Sketchpad** — holds visual/spatial information (small label: "inner eye," e.g. picturing a route).

Arrows from Central Executive to each subsystem should read as bidirectional coordination (allocating attention to / receiving from each), not one-way delivery — use a double-headed arrow or two thin opposite-direction arrows if that reads more clearly than a single line with two arrowheads.

## Required labels
- Central Executive — "allocates attention, coordinates the system"
- Phonological Loop — "verbal / acoustic information"
- Visuospatial Sketchpad — "visual / spatial information"

## Text to avoid
- Do not add an "episodic buffer" component. Baddeley's later (2000) model includes one, but **this chapter's text names only three components** (central executive, phonological loop, visuospatial sketchpad) — adding a fourth would show students something the chapter itself doesn't teach and create a mismatch they'd have to reconcile on their own.

## Accuracy constraints
- Keep exactly three components — no episodic buffer, no additional subsystems.
- Do not depict the phonological loop or visuospatial sketchpad as operating independently of the executive — the arrows should make clear the executive is actively coordinating both, not just sitting above two self-running boxes.
- Do not make this look like a brain-anatomy diagram (no brain outline) — this is a cognitive-architecture diagram, parallel in style to Figure 8.1, not a neuroanatomy figure (that distinction matters given Section 2 separately covers actual hippocampal biology).

## Caption draft
Baddeley and Hitch's working memory model replaces a single passive short-term store with an active system: a central executive that allocates attention and coordinates the rest of the system, a phonological loop that holds verbal and acoustic information, and a visuospatial sketchpad that holds visual and spatial information. This chapter's text uses only these three components — a later version of the model adds a fourth (the episodic buffer), which is not covered here.

## Alt text draft
A hub-and-spoke diagram shows the Central Executive at the top, with arrows connecting it to two subsystems below: the Phonological Loop, labeled as holding verbal and acoustic information, and the Visuospatial Sketchpad, labeled as holding visual and spatial information. The arrows indicate active coordination between the executive and both subsystems, not one-way delivery.

## Attribution
Original figure, hand-coded SVG for Oxford Psychology 101, 2026. Safe for public sharing.

---

# 3. Levels of Processing: Shallow to Deep

## Filename
`ch08_levels_of_processing_shallow_to_deep.svg`

## Placement
Section 1, immediately after the Craik & Lockhart paragraph, likely right before or after the sentence: *"This is why simply re-reading a textbook chapter... is a notoriously weak study strategy compared to actually explaining the material in your own words..."*

## Core teaching idea
How you process information determines how durable the memory trace is: shallow, surface-feature processing (how something looks or sounds) produces weak traces; deep, meaning-based processing produces durable ones. **Keep this a two-level gradient, matching the chapter's own shallow/deep framing** — do not introduce a three-tier structural/phonemic/semantic taxonomy; the chapter text doesn't teach that breakdown, so the figure shouldn't either.

## Layout
A diagonal ladder or ramp rising left (shallow, weak) to right (deep, durable):

- Bottom-left rung: **Shallow Processing** (orange/red accent) — surface features: how it looks, how it sounds. Small example tag: "Re-reading a chapter" (matches the chapter's own example).
- Top-right rung: **Deep Processing** (light blue accent) — meaning: what it means, how it connects to what you know. Small example tag: "Explaining it in your own words."

A vertical axis or shaded gradient bar beside the ramp labeled from "Weak, easily lost trace" (bottom) to "Durable trace" (top), so the ramp's rise visually maps onto memory strength, not just effort.

## Required labels
- Shallow Processing
- Deep Processing
- "Surface features (sound, appearance)"
- "Meaning, associations, implications"
- "Re-reading a chapter" / "Explaining it in your own words"
- Vertical axis: "Weak, easily lost" → "Durable"

## Text to avoid
- Do not use "structural," "phonemic," or "semantic" as named levels — those are the classic three-tier Craik & Lockhart taxonomy from the broader literature, but this chapter's prose only ever contrasts shallow vs. deep. Introducing three named tiers here would show students a framework the chapter text never defines.

## Accuracy constraints
- Keep this a two-level (or continuous gradient) figure, not three discrete tiers.
- Do not imply re-reading has zero value — the point is comparative (weaker relative to deep processing), not that shallow processing does nothing.
- Do not conflate this with the spacing/testing effects covered later in the same section — this figure is specifically about processing depth at encoding, not about when/how often you study.

## Caption draft
Memory strength depends on how information is processed, not just how many times it's encountered. Shallow processing — attending to surface features like how a word sounds or looks — produces weak, easily lost traces. Deep processing — engaging with meaning and connecting new information to what you already know — produces far more durable ones. This is why re-reading a chapter (shallow) is a weaker study strategy than explaining it in your own words (deep).

## Alt text draft
A diagonal ramp rises from lower left to upper right. The lower-left end is labeled Shallow Processing, with surface features like sound and appearance, and an example of re-reading a chapter, next to a "weak, easily lost trace" label. The upper-right end is labeled Deep Processing, with meaning and associations, and an example of explaining material in your own words, next to a "durable trace" label.

## Attribution
Original figure, hand-coded SVG for Oxford Psychology 101, 2026. Safe for public sharing.

---

# 4. Serial Position Curve

## Filename
`ch08_serial_position_curve.svg`

## Placement
Section 3, immediately after the serial position effect paragraph, ending: *"...that's strong evidence the two effects really do come from two separate systems (working memory for recency, long-term memory for primacy) rather than one unified process."*

## Core teaching idea
Recall isn't uniform across a list — it forms a U-shaped (or "smile") curve: better for early items (primacy, attributed to more total rehearsal → long-term storage) and better for late items (recency, attributed to those items still sitting in short-term/working memory), worse for the middle.

## Layout
A real plotted line chart (not decorative), following the same construction pattern as `fig_iq_bell_curve.svg` (smooth path built from actual coordinate math, axis line, tick marks, labeled reference points):

- X-axis: serial position, 1 through 30 (label ticks at 1, 5, 10, 15, 20, 25, 30).
- Y-axis: percent recalled, roughly 0–100% (need not show every tick — light axis line plus a couple of labeled reference points is enough, matching the IQ curve's restrained tick style).
- Curve shape: high at position 1–3 (~80–90%), declining through the middle (trough around position 12–18, roughly 35–45%), rising again toward the last 3–5 positions (~85–95%).
- Shade the two end regions (first ~5 positions, last ~5 positions) with a light color wash, each labeled directly on the chart: **"Primacy effect"** over the left hump, **"Recency effect"** over the right hump. Leave the middle trough unlabeled/plain, or label lightly as "poorest recall."

## Required labels
- X-axis: "Serial position in list"
- Y-axis: "Percent recalled"
- "Primacy effect" (left hump annotation)
- "Recency effect" (right hump annotation)
- Bottom key-idea pill: **"Two effects, two systems: rehearsal into long-term memory vs. still active in short-term memory."**

## Text to avoid
- Do not print exact percentages as if from a specific real dataset — this is an illustrative, typical-shape curve (the chapter cites Murdock, 1962 for the general finding, not a specific dataset this figure is reproducing). Keep the y-axis reference points approximate/rounded.

## Accuracy constraints
- Keep the middle trough clearly the lowest point — that's the entire teaching point of the shape.
- Do not make the curve symmetrical in an unrealistic way that looks obviously fabricated data — a smooth, slightly asymmetric U/smile shape (recency hump often taller/steeper than primacy in the real literature) reads as more credible than a perfectly mirrored curve.
- Do not label this "the forgetting curve" — that name belongs to Ebbinghaus's separate, differently-shaped time-decay curve mentioned later in the same section; conflating the two would actively mislead.

## Caption draft
Recall across a list is not uniform — it traces a reliable U-shaped pattern called the serial position effect. Early items benefit from the primacy effect (more total rehearsal time helped them into long-term storage); late items benefit from the recency effect (they're still active in short-term/working memory at the moment of recall). Middle items get neither advantage and are recalled worst.

## Alt text draft
A line chart plots percent recalled against serial position in a list of thirty items. The curve starts high around 80-90% for the first few positions, declines to a trough near 35-45% around the middle of the list, then rises again to 85-95% for the last few positions. The left rise is labeled "Primacy effect" and the right rise is labeled "Recency effect."

## Attribution
Original figure, hand-coded SVG for Oxford Psychology 101, 2026. Safe for public sharing.

---

# 5. Explicit vs. Implicit Memory Taxonomy Tree

## Filename
`ch08_memory_taxonomy_tree.svg`

## Placement
Section 2, immediately before the existing memory-systems table (the one with columns "Memory type / Conscious recall required? / Example / Case anchor"). This figure previews the categories the table then details — it should not duplicate the table's example/case-anchor columns, just the taxonomy structure itself.

## Core teaching idea
Long-term memory splits first into explicit (conscious, recall-dependent) versus implicit (behavior-influencing without conscious recall), and each of those splits again — explicit into episodic and semantic, implicit into procedural memory and priming. The split matters because the branches can be damaged independently (this sets up the H.M./Clive Wearing classic study immediately following).

## Layout
Top-down tree:

- Root (top-center): **Long-Term Memory**
- Two branches down: **Explicit / Declarative** (light blue, left) — "conscious recall required" — and **Implicit / Nondeclarative** (orange, right) — "no conscious recall required."
- Explicit branches further into two leaf nodes: **Episodic** (personally experienced events) and **Semantic** (general facts).
- Implicit branches further into two leaf nodes: **Procedural** (skills, motor sequences) and **Priming** (speeded recognition from prior exposure).

Use the arrow marker for each branching connector. Keep leaf nodes as small labeled cards, consistent with the panel style used elsewhere (white fill, `#c9d6df` stroke).

## Required labels
- Long-Term Memory (root)
- Explicit / Declarative — "conscious recall required"
- Implicit / Nondeclarative — "no conscious recall required"
- Episodic — "personally experienced events"
- Semantic — "general facts"
- Procedural — "skills, motor sequences"
- Priming — "speeded recognition from prior exposure"

## Text to avoid
- Do not include Sensory Memory or Short-Term/Working Memory in this tree — this taxonomy is specifically the internal structure of long-term memory (the chapter is explicit that this split is a long-term-memory phenomenon); mixing in the earlier stages would conflate this figure with Figure 8.1.
- Do not include H.M. or Clive Wearing by name in the figure itself — the tree sets up the classic study that follows in prose; keep the figure to the taxonomy only, per the "one hard idea per figure" rule.

## Accuracy constraints
- Keep the four-leaf structure exactly (episodic, semantic, procedural, priming) — matching the chapter's own table precisely, so the figure and table don't disagree.
- Do not imply this is the only possible memory taxonomy in the field — a caption note ("as this chapter organizes memory types") is enough hedging; no need for an in-figure disclaimer.

## Caption draft
Long-term memory is not one undifferentiated store. It splits first into explicit memory (conscious, recall-dependent) and implicit memory (influences behavior without conscious recall), and each of those splits again — explicit into episodic and semantic memory, implicit into procedural memory and priming. This structure matters because the branches can be damaged independently of each other, which the following classic study demonstrates directly.

## Alt text draft
A top-down tree diagram shows Long-Term Memory branching into Explicit/Declarative memory (requiring conscious recall) and Implicit/Nondeclarative memory (not requiring conscious recall). The Explicit branch splits further into Episodic memory (personally experienced events) and Semantic memory (general facts). The Implicit branch splits further into Procedural memory (skills and motor sequences) and Priming (speeded recognition from prior exposure).

## Attribution
Original figure, hand-coded SVG for Oxford Psychology 101, 2026. Safe for public sharing.

---

# 6. Reconstructive Memory Process (Optional)

## Filename
`ch08_reconstructive_memory_process.svg`

## Status
**Optional, lower priority.** The visuals-inventory already flagged this one "optional but useful," and Section 4's existing four-row error-comparison table (misinformation effect / false memory / source misattribution / confabulation) already does solid teaching work distinguishing the four failure modes. This figure's job should be different from the table's, not a redundant restatement of it — it illustrates the general reconstructive *mechanism* itself, once, rather than comparing the four named errors.

## Placement
Section 4, immediately after the misinformation-effect paragraph (the Loftus & Palmer "smashed into" vs. "contacted" study), before false memory is introduced.

## Core teaching idea
Remembering is reconstruction, not replay: an original event is encoded as partial fragments; at retrieval, those fragments are combined with general knowledge, expectations, and — critically — anything encountered in between (including misleading post-event information) into a plausible-feeling account that may not match what actually happened.

## Layout
Left-to-right sequential process, three or four stages:

1. **Original Event** (small icon/panel) → arrow →
2. **Fragments Encoded** (a few scattered small marks/dots inside a panel, suggesting partial, incomplete capture — deliberately not a full picture) → arrow →
3. **[Interference zone]** — a small side-input arrow feeding into the next arrow, labeled "Post-event information, other people's accounts, expectations" (orange accent, marking this as where distortion enters) → arrow →
4. **Reconstructed Memory** (final panel) — visually similar to but subtly different from panel 1 (e.g., one detail changed or added), captioned "May not match the original event."

## Required labels
- Original Event
- Fragments Encoded
- Post-event information / other accounts / expectations
- Reconstructed Memory
- "May not match the original event"

## Text to avoid
- Do not name all four Section-4 error types (misinformation effect, false memory, source misattribution, confabulation) inside this figure — that's the table's job; this figure should stay at the level of the single shared mechanism, not the taxonomy of things that can go wrong with it.

## Accuracy constraints
- Do not depict the "Reconstructed Memory" panel as wildly different from the original — the point is subtle alteration/plausible drift, not a completely fabricated scene (false memory, the more extreme case, gets its own prose treatment right after this in the chapter).
- Do not imply reconstruction always produces error — most reconstructed memories are close enough to accurate that memory works fine most of the time; the caption should carry that caveat since the figure itself can't easily show "usually fine, sometimes altered."

## Caption draft
Memory retrieval doesn't replay a stored recording — it reconstructs a plausible account from encoded fragments, general knowledge, and expectation. Most of the time this reconstruction is close enough to accurate that it doesn't matter. But because anything encountered between the original event and the moment of recall — a leading question, another witness's account — can blend into that reconstruction, memory can also drift from what actually happened without any sense that it has.

## Alt text draft
A four-stage left-to-right diagram shows an Original Event being reduced to Fragments Encoded (shown as a few scattered marks rather than a complete picture). An arrow labeled "post-event information, other accounts, expectations" feeds into the final stage, Reconstructed Memory, which is visually similar to but subtly different from the original event, captioned "may not match the original event."

## Attribution
Original figure, hand-coded SVG for Oxford Psychology 101, 2026. Safe for public sharing.

---

# Final Approval Checklist

Before any Chapter 8 figure is marked `use now`, confirm:

- It matches the SVG house style (1600×900, Aptos font, established color palette) so it doesn't look like a different book from Ch9/Ch13's already-wired figures.
- It teaches exactly one of the six ideas above — no figure should try to do two jobs.
- It matches what `ch08-memory.md` actually says at its placement point (re-read the anchor paragraph, don't rely on this file's paraphrase alone — the chapter may have changed since 2026-07-07).
- Labels are spelled correctly and match the chapter's exact terminology (e.g., "Short-Term / Working Memory," not an invented shorthand).
- It does not introduce content the chapter text doesn't teach (no episodic buffer in 8.2, no three-tier processing depth in 8.3, no Sensory/STM stages in 8.5).
- Caption and alt text are attached (drafts above are starting points, not final copy — revise against the actual wired paragraph).
- `source/visuals-inventory.md`'s Ch8 table is updated to match once any figure is built and wired, same as every other chapter's pattern this project has followed.
