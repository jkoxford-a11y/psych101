# Psych101 — Current Handoff

**Last updated:** 2026-07-14
**Canonical repository:** `C:\GitHub\psych101`
**Current branch or PR:** `main`. Chapter 9 audit, comparison-draft, figure, metadata, and decision updates have been committed directly to `main` through the GitHub connector.

This file is current-state only and is overwritten rather than appended. See `GPT_project_log.md` for chronological history and `PROJECT_BACKLOG.md` for durable deferred work.

## Current state

Chapter 9 is the active editorial task. A pre-review audit at `pipeline/audits/ch09-pre-review-audit.md` identified several root problems: heterogeneous heuristics were being pulled toward one mechanism, some language-acquisition and intelligence claims exceeded their evidence, a brief group-differences section carried too much causal weight, the chapter was overloaded, and several figures needed reconsideration.

A non-authoritative comparison revision addressing most of those issues exists at `source/chapters/09-thinking-language-intelligence-2.md`. The authoritative source remains `source/chapters/ch09-thinking-language-intelligence.md` until Jon explicitly approves promotion.

- **Decision (2026-07-14): keep the Linda/bank-teller passage — do not replace it.** Jon's earlier agreement to swap in a Jordan campus-library/sustainability-club example was reversed once it was noted that Linda is Tversky and Kahneman's own original research example (1983), not publisher/commercial-textbook material — so the copyright-driven replacement rationale that applies elsewhere in this chapter doesn't apply here. The existing `fig_linda_conjunction_fallacy.svg` is already correctly labeled and needs no change.
- One new original figure is committed and ready but **not wired into the draft**: `docs/images/ch09/ch09_category_hierarchy_superordinate_basic_subordinate.svg` (metadata at `docs/images/ch09/README_captions_alt_text_attribution.md`).
- The other new figure, `docs/images/ch09/ch09_conjunction_fallacy_nested_sets.svg`, was built specifically for the now-superseded Jordan example — its "campus library workers" / "sustainability club" labels are baked into the SVG's text elements, so it can't represent Linda without redrawing. **Jon's call: leave it in the repo, unused** — an available original asset, not pending work or a defect.
- The former bias/question-substitution Figure 9.9 should remain omitted (the existing bias-comparison table is more accurate), but the IQ figure still needs renumbering from 9.10 to 9.9 to close the gap.
- The exact patch list is specified at `pipeline/audits/ch09-comparison-figure-followup.md` (updated to reflect the Linda reversal).

### Confirmed editorial and figure decisions

But because the conversion ran on unpatched input, **it faithfully carried the draft's unfinished content into the built HTML**: the live build correctly keeps the Linda/bank-teller passage and its figure (that's now confirmed correct, not a defect), but it still references the old placeholder for the hierarchy figure (`fig_prototype_compression_dogs.png`) instead of the new category-hierarchy SVG, and still captions the IQ figure as Figure 9.10. Structural validity is not the same as content readiness — **this build should not be committed or published as final.**

## Next actions

1. **Apply the patches in `pipeline/audits/ch09-comparison-figure-followup.md`** to `source/chapters/09-thinking-language-intelligence-2.md`: wire the category-hierarchy SVG at Figure 9.1, keep Figure 9.9 absent, renumber the IQ figure to Figure 9.9. Do **not** touch the Linda passage or Figure 9.6 — keeping Linda is a confirmed decision, not an open item.
2. **Update `source/visuals-inventory.md`'s Chapter 9 rows** to match the patched draft, including recording `ch09_conjunction_fallacy_nested_sets.svg` as an unused, available original asset (not a defect).
3. **Read the patched comparison draft end to end** and decide whether to promote it to the authoritative `ch09-thinking-language-intelligence.md`.
4. **Only after that decision, reconvert `docs/chapters/09-thinking-language-intelligence.html`** so the live build reflects the patched content — the current build needs a second pass; do not treat it as final.
5. **Decide on the ten review questions:** the supplied draft uses open-response prompts, not authored a–d choices. The current HTML preserves them exactly with `<details>/<summary>` rationales rather than fabricating `<ol class="options" type="a">` content — decide whether a later editorial pass should author MCQs instead.
6. Figure 9.1's replacement asset already exists and just needs wiring (item 1) — no further redesign needed, unlike the earlier state where this was still an open figure-revision task.
7. **Browser-check Chapters 6, 7, and the eventual final Chapter 9 build** — still outstanding from earlier sessions.
8. Low priority: `pipeline/html-conversion-spec.md` §2 still documents an obsolete static sidebar block; current chapters (including this Ch9 build) use the dynamic `docs/js/sidebar.js` loader instead — the spec doc needs updating to match.

## Decisions needed from Jon

- Whether to promote the completed comparison draft to the authoritative Chapter 9 source.
- Whether Chapter 9's review questions should remain open response or become authored multiple choice.

No further decision is needed on Linda or the former Figure 9.9.

## Validation and known risks

- **The current `docs/chapters/09-thinking-language-intelligence.html` build passed all structural/lint checks but was built from unpatched source** (hierarchy figure still a placeholder, IQ figure still labeled 9.10) — treat it as a working draft build, not commit-ready, until reconverted after the patches above. The Linda passage/figure in this build are correct as-is; do not flag them.
- **Sandbox-mount staleness bug** (Claude/Cowork only): bash reads, `git status`/`git diff`, and bash-run scripts can show stale, truncated, or (as observed this session) transiently inaccessible content for files recently changed via Edit/Write or externally. `git show HEAD:<path>` and the Read tool are ground truth, though this session briefly saw the reverse (a working-tree read glitch coinciding with two now-superseded test commits, `7ea449c`/`2d26802`, "Test/Remove connector local file handling") — resolved on its own with no data loss, confirmed via `git show HEAD:<path>`.
- `source/visuals-inventory.md` is known to drift out of sync with actual per-chapter image state — cross-check per-chapter `docs/images/chXX/README*.md` files before trusting it. Chapter 9's rows specifically need updating per item 2 above.
- CRLF/LF line-ending drift on this repo can make `git status` report large numbers of "modified" files that are actually whitespace-only — use `git diff -w` before treating that as real content drift.
- Claude has no push or `gh`-API credentials in this sandbox — commits and pushes need to go through Jon's usual workflow.
- Five of today's Chapter 9 commits went directly to `main` via the GitHub connector rather than Jon's usual GitHub Desktop review step — worth confirming that's the intended commit path going forward.

## Important files

- `pipeline/audits/ch09-pre-review-audit.md` — full Chapter 9 audit (executive judgment, confirmed defects, figure/lab decisions, author decisions needed).
- `source/chapters/09-thinking-language-intelligence-2.md` — non-authoritative comparison draft; still needs the hierarchy-figure and IQ-renumbering patches above. Linda/Figure 9.6 are confirmed correct, no change needed.
- `pipeline/audits/ch09-comparison-figure-followup.md` — exact patch spec for the comparison draft; updated 2026-07-14 to reflect the Linda-keep decision.
- `docs/images/ch09/ch09_category_hierarchy_superordinate_basic_subordinate.svg` — new figure, committed, not yet wired (still needed).
- `docs/images/ch09/ch09_conjunction_fallacy_nested_sets.svg` — new figure, committed, **not used** in Chapter 9 (built for the superseded Jordan example); left in the repo unused per Jon's call, not pending work.
- `docs/images/ch09/README_captions_alt_text_attribution.md` — metadata for both figures above.
- `docs/chapters/09-thinking-language-intelligence.html` — freshly rebuilt from the unpatched comparison draft; structurally valid but content-incomplete; needs a second rebuild after patching.
- `source/chapters/ch09-thinking-language-intelligence.md` — authoritative chapter; unchanged.
- `AGENTS.md` — permanent routing and operating rules.
- `PROJECT_BACKLOG.md` — durable deferred work.
- `pipeline/claude-work-environment.md` — Claude/Cowork sandbox cautions.
