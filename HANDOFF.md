# Psych101 — Current Handoff

**Last updated:** 2026-07-12 (Session 104)
**Canonical repository:** `C:\GitHub\psych101` — see `pipeline/claude-work-environment.md` for the stale-copy caution and other Claude/Cowork-specific environment notes.
**Current branch or PR:** `main`, up to date with `origin/main`. One open branch not yet merged: `agent/ch06-learning-labs-2` (PR #1, adds two Ch6 labs).

This file is overwritten each session, not appended to. For process rules (which file to read when, what belongs where), see `AGENTS.md`. For chronological history, see `GPT_project_log.md` and `HANDOFF-ARCHIVE.md`.

## Current state

Nothing from Sessions 99–103 is committed or pushed yet: the Chapter 7 audit-reconciliation pass (`source/chapters/ch07-learning.md`, `docs/chapters/07-learning.html`), Chapter 4's Key Terms/lab-wiring pass, the Chapter 6 HTML conversion/navigation activation (`docs/chapters/06-sleep.html`, `docs/index.html`, `docs/js/sidebar.js`), and the Ch5/7/8 anchor-and-heading repair are all complete and lint-clean but still awaiting Jon's line-by-line review and a GitHub Desktop commit.

Session 104 opened a new track: a discussion-only pass on GPT's pre-review audit of Chapter 8 (`pipeline/audits/ch08-pre-review-audit.md` plus its Prompt 3.0 addendum), done by independently re-checking the audit's claims against the live `source/chapters/ch08-memory.md` rather than accepting them wholesale. Agreed, high confidence: Q12's confabulation/AI "encoded-event" distinction is a real factual error, the LTP glossary entry contradicts the already-calibrated body text, the Connections table rows aren't hyperlinked per spec, and Further Reading mislabels the Laney & Loftus module as confabulation's primary source. Pushed back on treating H.M. lines 103–107 as one defect (only "gone, permanently and completely" actually overclaims), on redesigning Figure 8.1's SVG over "7 ± 2" (the prose already hedges it), and on "lifetime duration" as a real problem (standard simplification). Jon confirmed "lossy compression" is a metaphor, not a literal theory — source-only edits, HTML regen deferred. Word count: chapter body (Section 1 through Chapter Summary) is 7,358 words against a 3,500–5,000 spec target. Evaluated cutting interference theory (proactive/retroactive, the Do Not Confuse box, Q7/Q8, three glossary terms) to recover length — roughly 815–968 words — but flagged that Learning Objective 4 names interference explicitly and that the sleep-consolidation sentence inside that same paragraph is the load-bearing payoff for the Chapter 6 Connections cross-reference. Jon is still deciding; no Chapter 8 files were touched this session.

Separately, Jon also asked for a full `source/chapters/ch06-sleep.md` → `docs/chapters/06-sleep.html` conversion per `pipeline/html-conversion-spec.md`, with sidebar-link and Connections-table updates across every chapter — full instructions were given but the conversation pivoted to the Chapter 8 audit discussion before this was started. This task is still outstanding and unstarted.

## Next actions

1. **Commit and push the Chapter 7 audit-reconciliation pass** (`source/chapters/ch07-learning.md`, `docs/chapters/07-learning.html`) via Jon's GitHub Desktop workflow.
2. **Commit and push the verified Chapter 4 work** (`source/chapters/ch04-sensation-perception.md`, `docs/chapters/04-sensation-perception.html`).
3. **Review and commit the Chapter 6 HTML conversion/navigation activation** (`docs/chapters/06-sleep.html`, `docs/index.html`, `docs/js/sidebar.js`).
4. **Commit and push the Ch5/7/8 anchor/heading repair** (`docs/chapters/05-consciousness.html`, `07-learning.html`, `08-memory.html`, `pipeline/lint_chapters.py`); the Chapter 6 reference blocker is resolved by the new built chapter.
5. **Browser-check Chapters 6 and 7 live** — Chapter 6 has passed structural/content validation but still needs Jon's visual pass; Chapter 7's callout conversions and new Figure 7.7 likewise have not been rendered in a browser.
6. **Resolve the Ch8 interference-theory cut decision** (keep vs. cut proactive/retroactive, the Do Not Confuse box, Q7/Q8, and 3 glossary terms) — if cut, LO4 needs rewriting and the Ch6 Connections-table sleep-consolidation promise needs a new home.
7. **Once Ch8 content decisions land, revise `source/chapters/ch08-memory.md` first**, then reconcile `docs/chapters/08-memory.html` from the approved source — do not patch the HTML independently.
8. **Do the deferred `source/chapters/ch06-sleep.md` → `docs/chapters/06-sleep.html` conversion** per `pipeline/html-conversion-spec.md` (§2 sidebar, §4 callouts, §9/§10 placeholders for the two missing labs and any unmapped figure), update every chapter's sidebar copy, fix the Ch7/Ch8 Connections-table Ch6 links, run `pipeline/lint_chapters.py`, and report lint result + placeholder flags — do not commit.

## Decisions needed from Jon

- **Sidebar collapse discoverability.** The small unlabeled hamburger icon is currently the only way to reopen a collapsed sidebar — is this acceptable, or does it need a label/affordance?
- **Close or otherwise reconcile `agent/ch06-learning-labs-2` (PR #1)?** Equivalent Chapter 6 lab files are already tracked on `main` and now linked from the built chapter, although the named branch itself is not an ancestor of `main`.
- **Ch8 interference theory: keep or cut?** See Next Actions #6 — cutting saves ~815–968 words but requires rewriting LO4 and relocating the Ch6 sleep-consolidation cross-reference payoff.

## Validation and known risks

- **Sandbox-mount staleness bug** (Claude/Cowork only): bash reads, `git status`/`git diff`, and bash-run scripts can show stale or truncated content for files last edited via Edit/Write or externally. The Read tool and `git show HEAD:<path>` are ground truth. Full detail and workarounds: `pipeline/claude-work-environment.md`.
- `source/visuals-inventory.md` is known to drift out of sync with actual per-chapter image state — cross-check per-chapter `docs/images/chXX/README*.md` files before trusting it.
- CRLF/LF line-ending drift on this repo can make `git status` report large numbers of "modified" files that are actually whitespace-only — use `git diff -w` before treating that as real content drift.

## Important files

- `source/chapters/ch07-learning.md`, `docs/chapters/07-learning.html` — Chapter 7, pending commit.
- `source/chapters/ch04-sensation-perception.md`, `docs/chapters/04-sensation-perception.html` — Chapter 4, pending commit.
- `docs/chapters/06-sleep.html`, `docs/index.html`, `docs/js/sidebar.js` — Chapter 6 conversion/navigation activation, staged for review.
- `docs/chapters/05-consciousness.html`, `07-learning.html`, `08-memory.html`, `pipeline/lint_chapters.py` — anchor/heading repair, pending commit.
- `AGENTS.md` — permanent routing and operating rules.
- `PROJECT_BACKLOG.md` — durable deferred work (editorial review, labs, figures, HTML/rendering, repository/workflow, open decisions).
- `pipeline/claude-work-environment.md` — Claude/Cowork sandbox cautions.

## Session Log

### Session 104 (2026-07-12) — Ch8 GPT-audit discussion; word-count analysis; ch06 conversion deferred

Jon asked to discuss GPT's pre-review audit of Chapter 8 Memory (`pipeline/audits/ch08-pre-review-audit.md` + Prompt 3.0 addendum) before any editing. Read the full audit and the live `source/chapters/ch08-memory.md` line-by-line to independently verify rather than rubber-stamp it. Agreed, high confidence: Q12's confabulation/AI "encoded-event" distinction is a real factual error (fantastic confabulation needs no real anchor), the LTP glossary entry ("the cellular basis") contradicts the already-calibrated body text, Connections table rows aren't hyperlinked per spec, and Further Reading mislabels Laney & Loftus as confabulation's primary source. Pushed back on: treating H.M. lines 103–107 as one defect (only "gone, permanently and completely" actually overclaims), redesigning Figure 8.1's SVG over "7 ± 2" (prose already hedges this), and flagging "lifetime duration" as a real problem (standard simplification). Confirmed Jon's metaphor-not-theory call on "lossy compression." Ran word counts: body (Section 1–Summary) is 7,358 words against a 3,500–5,000 spec target. Evaluated cutting interference theory (proactive/retroactive, Do Not Confuse box, Q7/Q8, 3 glossary terms) — ~815–968 words recoverable, but flagged that LO4 names interference explicitly and the sleep-consolidation sentence is the load-bearing payoff for the Ch6 Connections cross-reference promise. Jon is still deciding; no Ch8 files touched. Deferred: the separately-requested `ch06-sleep.md` → HTML conversion task (full spec provided, not started).
