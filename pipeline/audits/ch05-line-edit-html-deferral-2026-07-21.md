# Chapter 5 Line-Edit Preparation and HTML Deferral — 2026-07-21

## Scope

This record closes the July 21 session after Chapter 4 HTML regeneration and establishes the correct Chapter 5 workflow.

No Chapter 5 HTML, Chapter 6 source, figure, lab, CSS, JavaScript, or existing line-edit packet was changed by this record.

## Chapter 4 status

Chapter 4 source-to-HTML regeneration is complete in commit `6d0baf39f4f66240be47528cfe0006b1aa678707` (`Regenerate Chapter 4 HTML`). The commit contains:

- `docs/chapters/04-sensation-perception.html`
- `pipeline/build_chapter_html.mjs`

The shared builder additions are guarded by Chapter 4 configuration flags. Chapter 4's authoritative source reconciliation and generated-HTML cycle are closed. The separate deployed Signal Detection and repository-wide human spot checks remain release-validation tasks rather than Chapter 4 prose work.

## Chapter 5 editorial state

The authoritative editorial source is:

- `source/chapters/ch05-consciousness.md`

A structure-only preparation pass was produced for the instructor's line edit. It used paragraph splitting and limited list conversion without intentionally changing the chapter's argument. The instructor explicitly reserved substantive judgments about the sea-squirt material, attention/clinical material, and comparison-drug table for the line edit itself.

The working Word packet is the consciousness-only Chapter 5 text. The instructor will complete the line edit before any HTML regeneration.

## Confirmed HTML mismatch

`docs/chapters/05-consciousness.html` is an obsolete combined Consciousness + Sleep chapter. It still contains circadian rhythms, sleep architecture, dreaming, sleep disorders, and sleep-deprivation material.

`docs/chapters/06-sleep.html` already contains the separate current Sleep chapter. The live site therefore currently duplicates sleep material across Chapters 5 and 6.

The current shared builder does not yet include a Chapter 5 configuration. The stale Chapter 5 HTML must not be used as the editorial source and must not be manually patched to remove sleep sections.

## Approved sequence

1. Complete the instructor's Chapter 5 Word line edit.
2. Reconcile the approved edits into `source/chapters/ch05-consciousness.md`.
3. Validate objectives, figures, tables, review questions, Key Terms, Further Reading, References, citations, and image paths in the revised source.
4. Add a narrowly scoped Chapter 5 configuration to `pipeline/build_chapter_html.mjs`.
5. Regenerate `docs/chapters/05-consciousness.html` from the reconciled source.
6. Confirm that no circadian-rhythm, sleep-architecture, dreaming, sleep-disorder, or sleep-deprivation material remains in Chapter 5.
7. Run source/HTML parity, chapter lint, local-link, figure/caption/alt, callout, review/details, encoding, and responsive browser validation.

## Working-tree caution

At session close, unrelated local changes existed in several `line-edit-packets/` files and `source/chapters/ch06-sleep.md`. Future work must avoid broad staging, restoration, or cleanup commands. Stage only explicitly authorized Chapter 5 paths during the reconciliation workflow.
