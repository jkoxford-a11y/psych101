# GPT/Codex Project Log

This is the chronological, append-only operational log for GPT/Codex-assisted work on the Psych 101 textbook repository.

Record only actions, decisions, files changed, validation, and remaining issues. Do not include private chain-of-thought.

## Current Conventions

- Chapter prose/content changes belong in `source/chapters/*.md`.
- Generated chapter HTML lives in `docs/chapters/*.html`.
- Do not patch generated chapter HTML directly unless explicitly asked or no checked-in generator exists.
- `pipeline/html-conversion-spec.md` defines HTML/render expectations.
- `source/visuals-inventory.md` tracks figure status.
- `HANDOFF.md` should stay concise and current-state oriented.

## Open Follow-ups

- Ch9 figure sizing remains open after all figures were made wide.
- Keep figure wiring separate from figure creation unless explicitly asked.
- Continue validating generated HTML against actual content, not only structural tags.

## Log Entries

### 2026-07-09 - Ch9 Figure Sizing Open Issue

- Current open issue: Ch9 figure sizing needs follow-up after all figures were made wide.
- Remaining issue: determine an appropriate reusable sizing/expansion pattern before applying broad figure presentation changes.

### 2026-07-09 - Ch7-Ch13 Generated HTML Repair Pass, Excluding Ch10

- Repaired generated HTML issues across Ch7-Ch13, excluding Ch10.
- Scope was generated HTML repair, not prose revision.
- Validation focus included complete rendered sections, key terms, review/details structure, figure paths, alt text, mojibake, and Further Reading separation.

### 2026-07-09 - Ch10 Render Repair and Final 8-Figure Wiring

- Completed Ch10 render repair and final wiring for 8 figures.
- Preserved captions, alt text, attribution, and public-sharing status while wiring figures.
- Validation focus included render completeness, figure paths, alt text, key terms, review/details structure, and bad separator mojibake.
