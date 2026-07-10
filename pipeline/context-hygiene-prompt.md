# Context-Hygiene Prompt (reusable)

A portable prompt for making **any** long-running Cowork/Claude project adopt the
token-optimization patterns developed in this project: tiny mandatory reads,
provenance moved to sidecars, slice-reading instead of whole-file reads, and a
`context_budget.py` meter to watch for drift.

**How to use:** paste the block below into the target project's chat (e.g. the stats
book). It audits the project's own structure first and asks for approval before
changing anything, so it works regardless of that project's layout. If the project
turns out to be clean, the audit simply reports so and the meter still gets installed.

Companion files in this repo: `pipeline/context_budget.py` (the meter) and
`pipeline/extract_provenance.py` (the provenance-sidecar extractor). Background:
the Notion case study "The Handoff File That Grew to 476KB."

---

```
CONTEXT-HYGIENE PASS — adopt the token-optimization patterns from my Psych101 project.

Goal: cut the tokens this project burns on repeated reads, without deleting any
content, and install a meter so I can watch for drift going forward. Work in
phases and check with me before making changes.

PHASE 1 — AUDIT (read-only, report back before changing anything)
1. Identify every file this project's standing instructions tell you to read at
   the start of a session (the "orient" / handoff / status file, plus any specs
   or logs). Report each one's size in bytes and an approximate token count
   (bytes / 4).
2. Separate them into COLD-PATH (read once per session) vs HOT-PATH (read many
   times per session — e.g. chapter/source files you open to edit, reference
   CSVs/spreadsheets, specs). Hot-path bloat costs far more; flag it.
3. Look for these three bloat smells and report where each occurs:
   a. Append-only growth in a file the header claims is "overwritten each
      session" (an orient/status file that's actually been prepended to).
   b. Per-file version/provenance headers — running "v0.2 did X, v0.3 did Y"
      blocks at the top of working files that git already tracks.
   c. Whole-file reads where only a slice is needed (grepping a few rows out of
      a large CSV/spreadsheet, or one section out of a big spec).

PHASE 2 — FIX (only after I approve the audit; one safe change at a time)
- Orient/status file: keep only a compact, genuinely-overwritten "Current
  Status" + a bullet "Next Up" as the mandatory read. Move the append-only
  history to a separate archive file. Rewrite the standing instruction to say
  "overwrite, don't append," and to read only Status + Next Up at session start.
- Provenance headers: move each working file's version-history block into a
  sidecar (e.g. a _provenance/ folder), leave a one-line pointer at the top, and
  establish the rule: drafting/version notes go in the sidecar or the commit
  message, never the top of the working file.
- Slice-reading: add an explicit instruction to grep the rows/sections you need
  from large reference files instead of reading them whole, and mark heavy specs
  that are archival ("read only when doing X") vs draft-time.

SAFETY RULES (non-negotiable — this project has been corrupted by a careless
bulk edit before):
- Before any bulk/scripted edit, snapshot the originals. After, verify the
  content body is byte-identical to the snapshot (e.g. everything from the first
  real content heading onward). Skip and report any file that fails; never write
  a file whose body changed unexpectedly.
- Never delete source content — move it, always leaving a pointer and keeping git
  history intact.
- Keep this pass in its own commit, separate from any unrelated working-tree drift.

PHASE 3 — INSTALL A METER
- Write a small (~60-line, standard-library-only) script, context_budget.py,
  that prints the approximate token weight (bytes / 4) of every file loaded at
  session start, grouped by cold-path vs hot-path. Run it and show me the before/
  after. Add a note to run it periodically to catch drift.

Then report: what you found, what you changed, the before/after token totals for
the mandatory read and the hot path, and anything you flagged but didn't touch.
```
