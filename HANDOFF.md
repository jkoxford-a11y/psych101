# Psych101 — Current Handoff

**Last updated:** 2026-07-14 (Session 107)
**Canonical repository:** `C:\GitHub\psych101`
**Current branch or PR:** `main`; no commit or push was made in this session.

This file is current-state only and is overwritten rather than appended. See `GPT_project_log.md` for chronological history and `PROJECT_BACKLOG.md` for durable deferred work.

## Current state

Chapter 9's HTML was rebuilt from Jon's clarified comparison draft, `source/chapters/09-thinking-language-intelligence-2.md`, and written to `docs/chapters/09-thinking-language-intelligence.html`. This was a structural conversion only: the revised prose, examples, claims, and citations were preserved. Neither Chapter 9 source draft was edited.

The build includes the current dynamic sidebar loader with `data-active="09"`, the `Chapter 9 · Cognitive` header, all four numbered content sections, allowed callout variants, tables, Chapter Summary, ten open-response review blocks with hidden rationales, alphabetized Key Terms, anchored Connections, Further Reading, and References with the standard verification note. The Finding the Rule lab is linked out to `../labs/ch09/fluid-intelligence-rule-finding.html`; no iframe or demo placeholder was added.

Eight confirmed images were wired: Figures 9.2–9.8 and 9.10. Figure 9.1 remains an HTML placeholder because the comparison draft explicitly says the existing bird hierarchy must be revised before reuse. The revised source has no Figure 9.9; its bias comparison is a table, so no placeholder was invented.

Validation is clean: `pipeline/lint_chapters.py` reports 0 HARD failures and 0 WARN items. A separate source-parity/structure check confirmed all source text is present, all `<h2>` IDs and document IDs are valid, all image and local link paths resolve, alt text is populated with no leading-dash artifacts, Further Reading has three separate items, review/details structure is intact, only allowed callout classes appear, ampersands are escaped, and no bad ` ? ` separator mojibake exists.

Copyright-lineage review found no Chapter 9 `needs-verification` rows. TLI-004 (representativeness heuristic) and TLI-012 (Gardner's multiple intelligences) are marked `wording_change_driver = book-adoption`; the comparison draft uses original prose supported by primary/critical sources and does not appear copied from Wade, King, or Myers.

## Next actions

1. **Jon: review and commit the Chapter 9 conversion** through GitHub Desktop when satisfied. The intended review set is `docs/chapters/09-thinking-language-intelligence.html`, `HANDOFF.md`, and `GPT_project_log.md`.
2. **Decide how to handle the end-of-chapter questions.** The supplied draft contains open-response prompts, not authored a–d choices. The HTML preserves them exactly with `<details>/<summary>` rationales; creating `<ol class="options" type="a">` lists would require an editorial/source-writing pass.
3. **Revise Figure 9.1** so its hierarchy matches the novice-level `Animal → bird/dog → robin/golden retriever` structure described in the source, then wire it in a separate figure task.
4. **Update `pipeline/html-conversion-spec.md` sidebar guidance** in a future workflow task: §2 still documents an obsolete static sidebar block, while `docs/index.html` and current chapters now use `docs/js/sidebar.js`.
5. **Browser-check Chapters 6, 7, and the new Chapter 9 build** when convenient; the earlier Ch6/Ch7 live visual check remains outstanding.

## Decisions needed from Jon

- Should Chapter 9 keep its ten open-response retrieval questions, or should the source later be revised into authored multiple-choice questions to satisfy the spec's `options` pattern literally?
- Figure 9.1 needs a revised asset before it can be restored. No decision is needed about Figure 9.9 unless Jon wants a visual in addition to the new table.

## Validation and known risks

- The current dynamic sidebar makes the older “byte-identical static sidebar except one active class” check impossible as written. Chapter 9 instead matches the current Chapter 8/9 loader scaffold; `data-active="09"` is the runtime active marker and the shared loader adds `class="active"` only to Chapter 9.
- Reference details were carried over from the supplied draft and were not independently web-verified during this structural conversion; the HTML verification note says so.
- `pipeline/context_budget_log.csv` was already modified outside this task and remains untouched by the Chapter 9 work.

## Important files

- `source/chapters/09-thinking-language-intelligence-2.md` — authoritative input used for this build; unchanged.
- `docs/chapters/09-thinking-language-intelligence.html` — fresh Chapter 9 HTML build, pending Jon's review/commit.
- `pipeline/html-conversion-spec.md` — conversion rules; sidebar section is stale relative to the current dynamic implementation.
- `GPT_project_log.md` — full Session 107 conversion and validation record.
