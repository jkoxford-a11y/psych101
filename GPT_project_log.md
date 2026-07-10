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

- Keep figure wiring separate from figure creation unless explicitly asked.
- Continue validating generated HTML against actual content, not only structural tags.
- CSS/JS pattern (`.expandable`, `figure-expand.js`) is Ch9-only so far; not yet applied to other chapters' wide figures.

## Log Entries

### 2026-07-10 - Chapter 8 Memory Learning Labs

- Built two standalone Chapter 8 labs following `docs/labs/lab-design-spec.md`: `docs/labs/ch08/levels-of-processing.html` with `docs/js/labs-levels-of-processing.js`, and `docs/labs/ch08/self-reference-effect.html` with `docs/js/labs-self-reference-effect.js`.
- Levels-of-processing lab compares appearance, sound, and meaning judgments using counterbalanced word sets, a distractor task, old/new recognition, false-alarm reporting, explanation gating, and a study-strategy transfer task.
- Self-reference lab isolates self-reference from ordinary semantic processing using two counterbalanced trait-word sets. It does not store yes/no trait endorsements, includes a per-item skip option, excludes skipped targets from condition scores, reports false alarms, and explicitly rejects personality-test interpretation.
- Updated `docs/labs/index.html` with both Chapter 8 labs.
- Validation: JavaScript syntax checked; all JavaScript DOM IDs matched HTML IDs; target/lure sets contain no duplicates or overlap; condition assignment rotates across sessions; lab state uses `sessionStorage`; no server submission or analytics added.
- Remaining issue: both labs still need a manual browser interaction/visual pass and are not yet linked from `source/chapters/ch08-memory.md`.

### 2026-07-09 - Ch9 Figure Expand/Sizing Pattern (resolves prior open issue)

- Resolved the Ch9 figure-sizing open issue: built a reusable "in-place expand" pattern instead of resizing figures individually. Added `docs/css/style.css` `.chapter-figure.expandable` / `.is-expanded` rules (thumbnail-height cap with click-to-grow, no modal/overlay) and `docs/js/figure-expand.js` (click handler, `<a href>` fallback to full image for no-JS).
- Applied `expandable` class + toggle markup to all 10 Ch9 figures (previously all `wide`, uncapped height, which was the source of the oversized/awkward rendering). Figure numbers, captions, alt text, and attribution untouched.
- Validated: HTML parses clean, `<figure>`/`</figure>` counts match (10/10), each figure has matching toggle link + hint text, no plain-`wide`-only figures remain in Ch9.
- Note: this was done in a Claude/Cowork session working in `C:\GitHub\psych101` (repo relocated off OneDrive this session; old path was `C:\Users\oxfor\OneDrive\Docs\GitHub\psych101`).

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
