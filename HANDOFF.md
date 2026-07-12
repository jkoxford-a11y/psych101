# Psych101 — Current Handoff

**Last updated:** 2026-07-12 (Session 102)
**Canonical repository:** `C:\GitHub\psych101` — see `pipeline/claude-work-environment.md` for the stale-copy caution and other Claude/Cowork-specific environment notes.
**Current branch or PR:** `main`, up to date with `origin/main`. One open branch not yet merged: `agent/ch06-learning-labs-2` (PR #1, adds two Ch6 labs).

This file is overwritten each session, not appended to. For process rules (which file to read when, what belongs where), see `AGENTS.md`. For chronological history, see `GPT_project_log.md` and `HANDOFF-ARCHIVE.md`.

## Current state

- Chapter 7's full audit-reconciliation pass is complete in both `source/chapters/ch07-learning.md` and `docs/chapters/07-learning.html`: mechanical repairs, three regenerated figures (7.5, 7.7, 7.8), and a full editorial pass (Little Albert, classical/operant elicited-emitted diagnostic, preparedness, Bandura's incentive phase, Tolman's hedged phrasing, nine corrected dopamine touchpoints, Mirror Neurons sidebar conversion, AI Connection compression, review-question changes, one consolidated glossary entry). Verified directly against the live files.
- Chapter 7's Do Not Confuse and AI Connection sections were found to have never been built as real colored callout divs (plain headings only) — now fixed to match every other chapter's convention.
- Chapter 4 source/HTML parity is restored: Key Terms narrowed to a consistent rule, all four new labs wired into the chapter text, lints clean (0 fails/0 warnings).
- Ch5/Ch7/Ch8 anchor and heading repairs (literal `####` paragraphs converted to real `<h4>` elements, broken internal Connections links fixed) all lint clean (0 fails, 0 warnings) but haven't had Jon's line-by-line review.
- A real data-loss incident (Sessions 91–93 vanishing from this file's Session Log) was found and repaired this session — recovered verbatim into `HANDOFF-ARCHIVE.md`.
- Nothing described above is committed or pushed yet.

## Active work

- Chapter 7 audit-reconciliation pass (Sessions 101–102) — complete, awaiting Jon's review and a GitHub Desktop commit.
- Chapter 4 Key Terms/lab-wiring pass (Session 99–100) — complete, awaiting commit.
- Ch5/7/8 anchor/heading repair (Session 94) — complete, blocked on the Ch06 cross-reference question below before committing.

## Next actions

1. **Commit and push the Chapter 7 audit-reconciliation pass** (`source/chapters/ch07-learning.md`, `docs/chapters/07-learning.html`) via Jon's GitHub Desktop workflow.
2. **Commit and push the verified Chapter 4 work** (`source/chapters/ch04-sensation-perception.md`, `docs/chapters/04-sensation-perception.html`).
3. **Resolve the "Chapter 6" cross-references in Ch07 and Ch08's Connections tables** — both currently point at a "Ch. 6 — Sleep" that doesn't exist as built HTML; sleep content currently lives in Ch05 (Consciousness). Likely just needs retargeting to Ch05, but confirm against the intended final chapter map first.
4. **Commit and push the Ch5/7/8 anchor/heading repair** (`docs/chapters/05-consciousness.html`, `07-learning.html`, `08-memory.html`, `pipeline/lint_chapters.py`) once #3 above is resolved.
5. **Browser-check Chapter 7 live** — the Do Not Confuse/AI Connection callout-div conversions and the new Figure 7.7 graph have only been verified via the Read tool, never rendered in an actual browser.

## Decisions needed from Jon

- **Sidebar collapse discoverability.** The small unlabeled hamburger icon is currently the only way to reopen a collapsed sidebar — is this acceptable, or does it need a label/affordance?
- **Merge or reapply `agent/ch06-learning-labs-2` (PR #1)?** It links two new Chapter 6 labs into `source/chapters/ch06-sleep.md` but isn't on `main` yet, and Ch6 has no built HTML at all so far.

## Validation and known risks

- **Sandbox-mount staleness bug** (Claude/Cowork only): bash reads, `git status`/`git diff`, and bash-run scripts can show stale or truncated content for files last edited via Edit/Write or externally. The Read tool and `git show HEAD:<path>` are ground truth. Full detail and workarounds: `pipeline/claude-work-environment.md`.
- `source/visuals-inventory.md` is known to drift out of sync with actual per-chapter image state — cross-check per-chapter `docs/images/chXX/README*.md` files before trusting it.
- CRLF/LF line-ending drift on this repo can make `git status` report large numbers of "modified" files that are actually whitespace-only — use `git diff -w` before treating that as real content drift.

## Important files

- `source/chapters/ch07-learning.md`, `docs/chapters/07-learning.html` — Chapter 7, pending commit.
- `source/chapters/ch04-sensation-perception.md`, `docs/chapters/04-sensation-perception.html` — Chapter 4, pending commit.
- `docs/chapters/05-consciousness.html`, `07-learning.html`, `08-memory.html`, `pipeline/lint_chapters.py` — anchor/heading repair, pending commit.
- `AGENTS.md` — permanent routing and operating rules.
- `PROJECT_BACKLOG.md` — durable deferred work (editorial review, labs, figures, HTML/rendering, repository/workflow, open decisions).
- `pipeline/claude-work-environment.md` — Claude/Cowork sandbox cautions.
