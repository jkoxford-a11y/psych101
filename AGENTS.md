# Repository Agent Instructions

These instructions apply to all agents — GPT, Codex, Claude, and Cowork — working in this Psych 101 textbook repository.

## Start-of-session read order

1. `AGENTS.md` (this file) — routing and operating rules.
2. `HANDOFF.md` — current state, active work, immediate next actions.
3. Task-specific source/specification files for whatever you're actually working on.
4. `pipeline/claude-work-environment.md` — only when operating in Claude or Cowork.
5. `GPT_project_log.md` — only when historical context on a specific past decision is needed.

Don't load the entire chronological project log for every task — `HANDOFF.md` should already tell you what's current.

## Project-state files

Read these files according to the task:

- `HANDOFF.md` — current state, active work, immediate next actions, and decisions needed. Overwrite rather than append. Keep concise (~500–1,000 words).
- `GPT_project_log.md` — chronological record of major completed agent-assisted work. Append entries for major completed tasks; don't rewrite history.
- `PROJECT_BACKLOG.md` — durable future and deferred work (editorial review, labs, figures, HTML/rendering, repository/workflow, open decisions). This repository does not use GitHub Issues for work tracking; `PROJECT_BACKLOG.md` is the durable backlog until that changes. Do not duplicate the full backlog inside `HANDOFF.md` — only the next 3–5 immediate actions belong there.
- `HANDOFF-ARCHIVE.md` — frozen historical record of past Session Log entries and superseded Current Status snapshots, preserved verbatim. Not actively maintained; read only when tracing specific past history that isn't in `GPT_project_log.md`.
- `pipeline/claude-work-environment.md` — Claude/Cowork-specific environment cautions (sandbox-mount staleness, canonical repo path, commit workflow). Read when operating in Claude or Cowork; other agents don't need it.
- `AGENTS.md` — permanent repository instructions and routing rules (this file).

Do not maintain the same information in multiple project-state files. If you find duplication, fix it in the file where it belongs and point the other file at it instead of copying content.

## Source of Truth

- Chapter prose and content changes belong in `source/chapters/*.md`.
- Generated chapter HTML lives in `docs/chapters/*.html`.
- Do not patch generated HTML directly unless explicitly asked or no checked-in generator exists.
- `pipeline/html-conversion-spec.md` defines HTML/render expectations.
- `source/visuals-inventory.md` tracks figure status (known to drift stale — cross-check per-chapter `docs/images/chXX/README*.md` files).

## Style

- Preserve the instructor-authored voice.
- Do not genericize prose into publisher prose.
- Keep explanations student-facing, precise, and teachable.

## Figures

- Prefer original explanatory diagrams.
- Do not embed figure numbers inside images.
- Preserve captions, alt text, attribution, and public-sharing status.
- Keep figure creation and figure wiring as separate steps — do not wire a figure into chapter HTML unless explicitly asked, even if you just created it.
- Expandable-figure implementation details (the `.expandable` CSS / `figure-expand.js` pattern) live in `pipeline/html-conversion-spec.md` §9.

## Validation

- Check content, not just tag existence — this applies to generated chapter HTML as much as to source markdown.
- Validate no bad ` ? ` separator mojibake.
- Validate populated key terms when source has terms.
- Validate figure paths, non-empty alt text, and no leading dash artifacts.
- Validate Further Reading items are separated.
- Validate review/details structure is preserved.

## Logging

- For major tasks, append concise entries to `GPT_project_log.md`.
- Do not include private chain-of-thought.
