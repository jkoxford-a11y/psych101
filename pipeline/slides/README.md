# pipeline/slides/

Per-chapter **durable lecture-deck decisions** live here.

## Authority

The active pedagogical and visual standard is:

- `pipeline/deck-spec.md`

Read it before creating or rebuilding a lecture deck.

The chapter Markdown in `source/chapters/` remains authoritative for psychology content. Generated `.pptx` files are outputs and should not become the source of truth.

## Important compatibility note

This directory originally supported `pipeline/build_chapter_deck.py`, a pilot that automatically converted chapter paragraphs into slides and then applied small seed overrides. That mechanism is retained as implementation history and may still be useful for keyed overrides, fingerprints, and orphan detection.

**It is not the design target for the mature 4:3 lecture decks.**

For Chapters 2–10, the successful workflow became explicit pedagogical authoring: decide the teaching move first, then build the slide. Do not regenerate a mature deck by mapping every chapter paragraph to a slide.

If `build_chapter_deck.py` is reused or extended, it must consume or preserve an explicitly authored deck model that follows `pipeline/deck-spec.md`.

## Per-chapter source

Use `chNN.md` for chapter-specific decisions that must survive a rebuild, including:

- slide order and slide type;
- replacement titles/claims;
- visible body structure;
- core / optional / backup status;
- speaker notes;
- inserted activities or predictions;
- omitted chapter material;
- slide-only visual references;
- natural stopping points.

Do not use this file to change textbook content. If a psychological claim is wrong, edit the authoritative chapter through the normal chapter workflow.

## Legacy seed fields

The pilot generator currently recognizes:

```markdown
## <slide-key>
title: Replacement title
skip: true
body:
  Multi-line replacement body.
notes:
  Multi-line replacement notes.
image: assets/example.png
insert-after: <key>
```

These fields remain useful as a compatibility layer, but a title/body override alone does not satisfy the mature deck spec. New or substantially rebuilt decks need the full teaching decisions and structured notes required by `pipeline/deck-spec.md`.

## Slide identity

The pilot generator writes slide keys and content fingerprints into speaker notes:

```text
[slide-key: ch06-s1-p2]
[fingerprint: 4c1e8a09b3]
```

Figures, terms, and review questions may use semantic keys. Orphaned keys should be reported rather than silently discarded.

Keep this identity mechanism when the generator is refactored; it is useful for future PowerPoint-edit ingest.

## Slide-only images

Slide-only assets live in:

`slides/chNN/assets/`

Record provenance in that directory's `manifest.md`. Book figures remain under `docs/images/chNN/` with the book's own metadata.

## Rendering and QA

A successful build is not sufficient. Render the finished deck and inspect every slide visually according to `pipeline/deck-spec.md`.

The previous command remains useful when the legacy builder is involved:

```bash
python pipeline/build_chapter_deck.py 6 --render
```

But the canonical validation criterion is the rendered slide set, not whether the command exits successfully.
