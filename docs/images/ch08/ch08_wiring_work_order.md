# Ch8 Figure Wiring Work Order — Memory

*Created: 2026-07-07 after tracker reconciliation.*

Purpose: provide exact insertion blocks for wiring the six completed Chapter 8 SVG figures into `source/chapters/ch08-memory.md` without re-opening figure design decisions. The SVGs already exist in `docs/images/ch08/`, were audited in Session 77, and `figure_metadata.md` confirms all six are original hand-coded SVGs safe for public sharing.

Because the current GitHub connector only supports whole-file replacement for `update_file`, apply these as targeted local/Codex edits rather than risky manual full-file reconstruction from streamed chunks.

---

## Header update

In the chapter header, replace:

```markdown
> Figures: none yet, same open question as every chapter so far.
```

with:

```markdown
> Figures: all six Chapter 8 SVGs wired (Session 78, 2026-07-07): Fig 8.1 Atkinson-Shiffrin three-box model, Fig 8.2 Baddeley working memory model, Fig 8.3 levels of processing, Fig 8.4 explicit/implicit memory taxonomy, Fig 8.5 serial position curve, Fig 8.6 reconstructive memory process. All are original hand-coded SVGs in `docs/images/ch08/`; captions/alt text drawn from `figure_metadata.md`.
```

Also add a new status line after the v0.3 line:

```markdown
> v0.4 — figure wiring pass (Session 78, 2026-07-07): wired all six completed Ch8 SVGs in reading order using `docs/images/ch08/figure_metadata.md` captions/alt text and `docs/images/ch08/ch08_figure_specs.md` placement anchors. No prose content changed.
```

---

## Figure 8.1 — Atkinson-Shiffrin three-box model

**Anchor:** Immediately after the first paragraph in Section 1, ending:

> ...this chapter is organized around exactly that map: encoding (this section), storage (Section 2), and retrieval, including how retrieval goes wrong (Sections 3 and 4).

**Insert:**

```markdown
![Figure 8.1 — A three-panel flow diagram shows information moving from Sensory Memory, with high capacity and a duration under one second, to Short-Term/Working Memory, with about seven plus or minus two items and a duration of seconds to about one minute, to Long-Term Memory, with effectively unlimited capacity and a lifetime duration. Arrows labeled Attention and Encoding connect the panels moving forward; a thinner return arrow labeled Retrieval moves from Long-Term Memory back to Short-Term/Working Memory. Small downward arrows beneath each panel indicate information can be lost at every stage.](../images/ch08/ch08_atkinson_shiffrin_three_box_model.svg)
*Figure 8.1. The Atkinson-Shiffrin model maps memory as three stages that differ in capacity and duration: a brief, high-capacity sensory buffer; a sharply limited short-term/working memory; and an effectively unlimited long-term store. The three "boxes" are a simplification: modern research treats them as functionally distinct processes rather than physical containers, but the map is still useful for locating where memory succeeds or fails.*
```

---

## Figure 8.2 — Baddeley working memory model

**Anchor:** Immediately after the Baddeley & Hitch paragraph in Section 1, ending:

> ...and individual differences in working memory capacity turn out to predict a surprisingly wide range of cognitive abilities, a connection Chapter 9 picks up directly.

**Insert:**

```markdown
![Figure 8.2 — A cognitive-architecture diagram shows the Central Executive at the top coordinating three components below: the Phonological Loop for verbal and acoustic information, the Episodic Buffer as a temporary binding workspace, and the Visuospatial Sketchpad for visual and spatial information. Bidirectional arrows connect the components. Long-Term Memory appears below the episodic buffer, showing that relevant stored knowledge can be incorporated into a temporary integrated representation.](../images/ch08/ch08_baddeley_working_memory_model.svg)
*Figure 8.2. Baddeley's working-memory model replaces a single passive short-term store with an active system. The central executive coordinates attention; the phonological loop maintains verbal and acoustic information; the visuospatial sketchpad maintains visual and spatial information; and the episodic buffer temporarily binds those contents with relevant long-term knowledge into a coherent representation. The episodic buffer is not the same as episodic long-term memory.*
```

---

## Figure 8.3 — Levels of processing

**Anchor:** Immediately after the Craik & Lockhart / elaboration paragraph in Section 1, ending:

> ...connecting new information to your own life builds far more retrieval cues than connecting it to nothing at all.

**Insert:**

```markdown
![Figure 8.3 — A diagonal ramp rises from lower left to upper right. The lower-left end is labeled Shallow Processing, with surface features like sound and appearance and an example of re-reading a chapter, next to a weak, easily lost trace label. The upper-right end is labeled Deep Processing, with meaning, associations, and implications and an example of explaining material in your own words, next to a durable trace label.](../images/ch08/ch08_levels_of_processing_shallow_to_deep.svg)
*Figure 8.3. Memory strength depends on how information is processed, not just how many times it is encountered. Shallow processing, such as attending to surface features like how something sounds or looks, produces weak, easily lost traces. Deep processing, which engages meaning and connects new information to what you already know, produces more durable traces.*
```

---

## Figure 8.4 — Explicit vs. implicit memory taxonomy

**Anchor:** Immediately before the memory systems table in Section 2:

```markdown
| Memory type | Conscious recall required? | Example | Case anchor |
```

**Insert:**

```markdown
![Figure 8.4 — A top-down tree diagram shows Long-Term Memory branching into Explicit/Declarative memory, which requires conscious recall, and Implicit/Nondeclarative memory, which does not require conscious recall. The Explicit branch splits into Episodic memory for personally experienced events and Semantic memory for general facts. The Implicit branch splits into Procedural memory for skills and motor sequences and Priming for speeded recognition from prior exposure.](../images/ch08/ch08_memory_taxonomy_tree.svg)
*Figure 8.4. Long-term memory is not one undifferentiated store. As this chapter organizes memory types, it splits first into explicit memory, which is conscious and recall-dependent, and implicit memory, which influences behavior without conscious recall. Explicit memory then splits into episodic and semantic memory, while implicit memory splits into procedural memory and priming. This structure matters because the branches can be damaged independently.*
```

---

## Figure 8.5 — Serial position curve

**Anchor:** Immediately after the serial position paragraph in Section 3, ending:

> ...rather than one unified process.

**Insert:**

```markdown
![Figure 8.5 — A line chart plots percent recalled against serial position in a list of thirty items. The curve starts high for the first few positions, declines to a trough around the middle of the list, then rises again for the last few positions. The left rise is labeled Primacy effect and the right rise is labeled Recency effect.](../images/ch08/ch08_serial_position_curve.svg)
*Figure 8.5. Recall across a list is not uniform. It traces a reliable U-shaped pattern called the serial position effect. Early items benefit from the primacy effect because more total rehearsal time helps them into long-term storage; late items benefit from the recency effect because they are still active in short-term/working memory at the moment of recall. Middle items get neither advantage and are recalled worst.*
```

---

## Figure 8.6 — Reconstructive memory process

**Anchor:** Immediately after the misinformation-effect paragraph in Section 4, before the false-memory paragraph.

**Insert:**

```markdown
![Figure 8.6 — A four-stage left-to-right diagram shows an Original Event being reduced to Fragments Encoded, shown as scattered marks rather than a complete picture. Post-event information, other accounts, and expectations feed into reconstruction. The final Reconstructed Memory panel is visually similar to the original event but includes one changed detail and is labeled may not match the original event.](../images/ch08/ch08_reconstructive_memory_process.svg)
*Figure 8.6. Memory retrieval does not replay a stored recording. It reconstructs a plausible account from encoded fragments, general knowledge, and expectation. Most of the time this reconstruction is close enough to accurate that it works well. But because anything encountered between the original event and the moment of recall can blend into that reconstruction, memory can drift from what actually happened without feeling wrong.*
```

---

## After wiring

Update `source/visuals-inventory.md` Ch8 table:

- change all six Ch8 statuses from 🧩 to ✅ wired
- replace the Ch8 note with: “All six completed SVGs wired into `ch08-memory.md` in Session 78.”
- update Current completion plan Tier 1 so Ch11 repair becomes the first remaining cheap-execution task.

Then render-check the chapter page for image loading, caption wrapping, and mobile-width behavior.
