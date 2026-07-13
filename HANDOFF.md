# Psych101 — Current Handoff

**Last updated:** 2026-07-13 (Session 105)
**Canonical repository:** `C:\GitHub\psych101` — see `pipeline/claude-work-environment.md` for the stale-copy caution and other Claude/Cowork-specific environment notes.
**Current branch or PR:** `main`, up to date with `origin/main`. One open branch/PR not yet closed: `agent/ch06-learning-labs-2` (PR #1) — recommended for closure without merging (see Current state), not yet acted on.

This file is overwritten each session, not appended to. For process rules (which file to read when, what belongs where), see `AGENTS.md`. For chronological history, see `GPT_project_log.md` and `HANDOFF-ARCHIVE.md`.

## Current state

Jon confirmed the four Sessions 99–103 pending items are committed and pushed: the Chapter 7 audit-reconciliation pass, Chapter 4's Key Terms/lab-wiring pass, the Chapter 6 HTML conversion/navigation activation, and the Ch5/7/8 anchor-and-heading repair. Verified via `git log` and a clean working tree — the large list of "modified" files bash reported is CRLF/LF whitespace noise only (`git diff -w` shows zero real diff), not uncommitted content. Also confirmed `docs/chapters/06-sleep.html` is a genuine, complete conversion (526 lines, full section/heading structure) rather than a stub.

Two of the three open "Decisions needed from Jon" from Session 104 are now resolved. Ch8 interference theory: **keep**, no cut — no LO4 rewrite or Ch6 Connections-table relocation needed. Sidebar-collapse discoverability: resolved via documentation rather than a UI redesign — added an italic tip under the TOC intro paragraph (`docs/index.html`) pointing to the ☰ icon, with a new `.toc-note` class in `docs/css/style.css`. These two file edits are made but not yet committed.

The third item, the orphaned `agent/ch06-learning-labs-2` branch (PR #1), was investigated: diffing it against `main` shows it's stale — merging it would delete `HANDOFF-ARCHIVE.md` and `PROJECT_BACKLOG.md` and revert Ch6/7/8 work, and its two Ch6 labs (`sleep-state-detective`, `process-s-process-c`) already exist on `main` under the same paths. Recommendation: close PR #1 without merging and delete the branch. Claude has no push or `gh`-API credentials in this sandbox, so Jon needs to do this manually via GitHub Desktop or the web UI.

Not yet done: the four Session 104 Ch8 audit fixes that were agreed as real errors during the discussion-only pass (Q12 confabulation/AI-encoding distinction, LTP glossary contradiction, Connections-table hyperlinks, Further Reading Laney & Loftus mislabel) haven't been implemented in `source/chapters/ch08-memory.md` yet. No Ch8 files were touched this session either.

## Next actions

1. **Commit and push this session's sidebar-tip edit** (`docs/index.html`, `docs/css/style.css`).
2. **Close PR #1 and delete `agent/ch06-learning-labs-2`** via GitHub Desktop or the GitHub web UI — stale/superseded, see Current state.
3. **Implement the four agreed Ch8 audit fixes** in `source/chapters/ch08-memory.md`: Q12 confabulation/AI-encoded-event wording, the LTP glossary entry (currently contradicts calibrated body text), Connections-table hyperlinks, and the Further Reading Laney & Loftus mislabel — then reconcile `docs/chapters/08-memory.html` from the revised source (do not patch HTML independently).
4. **Browser-check Chapters 6 and 7 live** — still outstanding from Session 104; Chapter 6's build and Chapter 7's callout conversions/new Figure 7.7 haven't been visually reviewed in a browser.
5. **Low priority:** prune other stale-looking remote branches (`agent/ch06-learning-labs`, `agent/ch08-figure-8-2-episodic-buffer` — already merged via PR #2, `codex/ch3-nervous-system-figure-candidates`) — not evaluated this session.

## Decisions needed from Jon

None currently open.

## Validation and known risks

- **Sandbox-mount staleness bug** (Claude/Cowork only): bash reads, `git status`/`git diff`, and bash-run scripts can show stale or truncated content for files last edited via Edit/Write or externally. The Read tool and `git show HEAD:<path>` are ground truth. Full detail and workarounds: `pipeline/claude-work-environment.md`.
- `source/visuals-inventory.md` is known to drift out of sync with actual per-chapter image state — cross-check per-chapter `docs/images/chXX/README*.md` files before trusting it.
- CRLF/LF line-ending drift on this repo can make `git status` report large numbers of "modified" files that are actually whitespace-only — use `git diff -w` before treating that as real content drift. Reconfirmed this session.
- Claude has no push or `gh`-API credentials in this sandbox — branch/PR closure and any remote-write actions need to go through Jon's GitHub Desktop/web workflow.

## Important files

- `docs/index.html`, `docs/css/style.css` — sidebar-usage tip, pending commit.
- `source/chapters/ch08-memory.md`, `docs/chapters/08-memory.html` — four agreed audit fixes still to implement.
- `pipeline/audits/ch08-pre-review-audit.md` (+ Prompt 3.0 addendum) — reference for the agreed Ch8 fixes.
- `AGENTS.md` — permanent routing and operating rules.
- `PROJECT_BACKLOG.md` — durable deferred work (editorial review, labs, figures, HTML/rendering, repository/workflow, open decisions).
- `pipeline/claude-work-environment.md` — Claude/Cowork sandbox cautions.

## Session Log

### Session 105 (2026-07-13) — Confirmed Sessions 99–103 commits; sidebar-usage tip added; orphaned branch triaged; interference theory kept

Jon confirmed the four Session 99–103 pending items (Ch7 audit-reconciliation, Ch4 Key Terms/lab-wiring, Ch6 HTML conversion, Ch5/7/8 anchor repair) are committed; verified via `git log` and a clean `git status`/`git diff -w` (remaining "modified" files are CRLF/LF noise only, a known repo quirk). Ch8 interference-theory decision: keep, no cut — no LO4 rewrite needed. Resolved the sidebar-collapse-discoverability question via a documentation fix rather than a UI redesign: added an italic tip under the TOC intro paragraph (`docs/index.html`) pointing to the ☰ icon, styled with a new `.toc-note` class in `docs/css/style.css`. Investigated the orphaned `agent/ch06-learning-labs-2` branch (PR #1): diffed against main and found it stale — it would delete `HANDOFF-ARCHIVE.md`/`PROJECT_BACKLOG.md` and revert Ch6/7/8 work, and its two Ch6 labs already exist on main under the same paths. Recommended closing the PR and deleting the branch; Claude has no push/`gh`-API access in this sandbox, so Jon needs to do this manually. Confirmed `docs/chapters/06-sleep.html` conversion is genuinely complete (526 lines, full section/heading structure), not a stub. Not yet done: the four Session 104 Ch8 audit fixes (Q12, LTP glossary, Connections hyperlinks, Further Reading mislabel) — still unimplemented.

### Session 104 (2026-07-12) — Ch8 GPT-audit discussion; word-count analysis; ch06 conversion deferred

Jon asked to discuss GPT's pre-review audit of Chapter 8 Memory (`pipeline/audits/ch08-pre-review-audit.md` + Prompt 3.0 addendum) before any editing. Read the full audit and the live `source/chapters/ch08-memory.md` line-by-line to independently verify rather than rubber-stamp it. Agreed, high confidence: Q12's confabulation/AI "encoded-event" distinction is a real factual error (fantastic confabulation needs no real anchor), the LTP glossary entry ("the cellular basis") contradicts the already-calibrated body text, Connections table rows aren't hyperlinked per spec, and Further Reading mislabels Laney & Loftus as confabulation's primary source. Pushed back on: treating H.M. lines 103–107 as one defect (only "gone, permanently and completely" actually overclaims), redesigning Figure 8.1's SVG over "7 ± 2" (prose already hedges this), and flagging "lifetime duration" as a real problem (standard simplification). Confirmed Jon's metaphor-not-theory call on "lossy compression." Ran word counts: body (Section 1–Summary) is 7,358 words against a 3,500–5,000 spec target. Evaluated cutting interference theory (proactive/retroactive, Do Not Confuse box, Q7/Q8, 3 glossary terms) — ~815–968 words recoverable, but flagged that LO4 names interference explicitly and the sleep-consolidation sentence is the load-bearing payoff for the Ch6 Connections cross-reference promise. Jon is still deciding; no Ch8 files touched. Deferred: the separately-requested `ch06-sleep.md` → HTML conversion task (full spec provided, not started).
