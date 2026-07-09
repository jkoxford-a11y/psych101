# Repository Agent Instructions

These instructions apply to Codex/GPT agents working in this Psych 101 textbook repository.

## Source of Truth

- Chapter prose and content changes belong in `source/chapters/*.md`.
- Generated chapter HTML lives in `docs/chapters/*.html`.
- Do not patch generated HTML directly unless explicitly asked or no checked-in generator exists.
- `pipeline/html-conversion-spec.md` defines HTML/render expectations.
- `source/visuals-inventory.md` tracks figure status.
- `GPT_project_log.md` is the chronological GPT/Codex work log.
- `HANDOFF.md` should remain concise and current-state focused.

## Style

- Preserve the instructor-authored voice.
- Do not genericize prose into publisher prose.
- Keep explanations student-facing, precise, and teachable.

## Figures

- Prefer original explanatory diagrams.
- Do not embed figure numbers inside images.
- Preserve captions, alt text, attribution, and public-sharing status.
- Do not wire figures unless explicitly asked.

## Validation

- Check content, not just tag existence.
- Validate no bad ` ? ` separator mojibake.
- Validate populated key terms when source has terms.
- Validate figure paths, non-empty alt text, and no leading dash artifacts.
- Validate Further Reading items are separated.
- Validate review/details structure is preserved.

## Logging

- For major tasks, append concise entries to `GPT_project_log.md`.
- Do not include private chain-of-thought.
