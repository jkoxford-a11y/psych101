# pipeline/slides/

Per-chapter **seed files** for the lecture-deck builder (`pipeline/build_chapter_deck.py`).

The chapter Markdown in `source/chapters/` stays authoritative. Decks are generated
and are never hand-patched — anything you want to survive a rebuild goes in
`chNN.md` here.

## Why a seed file instead of editing the deck

A `.pptx` is a zip. Git stores a complete new copy on every save, so committed decks
compound fast — Fall2026's committed teaching decks run 7–20 MB each, with the same
deck appearing twice in history after a single edit. Built decks are gitignored and
rebuilt; the seed file is small text that diffs cleanly.

## Format

```markdown
## <slide-key>
title: Replacement title
skip: true
body:
  Multi-line replacement body.
  Indented lines continue the field.
```

Fields:

| Field | Effect |
|---|---|
| `title:` | Replaces the slide title |
| `body:` | Replaces the slide body (multi-line if indented) |
| `notes:` | Replaces the speaker notes |
| `image:` | Path to a slide-only image, resolved under `slides/chNN/` |
| `skip: true` | Drops the slide from the deck |
| `insert-after: <key>` | Creates a **new** slide after an existing one |

## Slide keys

Every generated slide carries a key and a content fingerprint in its speaker notes:

```
[slide-key: ch06-s1-p2]
[fingerprint: 4c1e8a09b3]
```

Keys are positional *within a section* (`ch06-s1-p2` = Section 1, second prose slide),
so inserting a paragraph shifts only the keys after it inside that one section.
Figures, key terms, and review questions get semantic keys instead
(`ch06-fig-6-2`, `ch06-term-adenosine`, `ch06-rq-5`) and are stable against
everything except renumbering.

The full key list for a chapter is in `build/decks/chNN-*.deck-model.json` after a build.

## Orphaned keys

If a seed key no longer matches any slide, the build reports it rather than silently
dropping it:

```
ORPHANED SEED KEYS (1) — the chapter likely moved underneath these:
    ch06-s2-p7
```

That almost always means a chapter revision moved or removed the slide the override
was written for. Re-point the key, or delete the override if the chapter now says
what you wanted the slide to say.

## Slide-only images

Images that appear in decks but not in the book live in `slides/chNN/assets/`, with
provenance recorded in that directory's `manifest.md`. They are **not** part of
`docs/images/`, which is the book's own figure set with its own attribution records.

Reference them from a seed:

```markdown
## ch06-new-hypnogram-demo
insert-after: ch06-fig-6-4
title: What a real night looks like
image: assets/student-hypnogram-2026.png
```

## Building

```bash
python pipeline/build_chapter_deck.py 6
```

```bash
python pipeline/build_chapter_deck.py 6 --render
```

`--render` produces one PNG per slide via LibreOffice so a deck can be checked
without opening PowerPoint. Output goes to `build/decks/` (gitignored).
