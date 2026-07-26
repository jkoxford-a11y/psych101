# Chapter Audits

This directory holds records of specific passes — conversion residues, validations, reconciliations, figure reviews, and pause notes. Each one describes what happened during one pass on one date. **None of them is an authority over a chapter's current content.**

## The pre-review audit lane is retired

The twelve `chNN-pre-review-audit.md` reports were extracted into `pipeline/evidence-commitments.md` and deleted on 2026-07-26. They are recoverable from git at `a9dcedd`.

They were removed rather than archived because they were being *used* rather than merely consulted: each described a draft that had already been repaired, and later passes read their must-preserve and must-correct ledgers as standing constraints. Measured across the book, the repair passes they drove raised the banned throat-clearing phrasings in 11 of 11 audited chapters and lowered them in none. Marking them stale had been tried on one file and did not stop the pattern.

**If you recover one, treat it as history.** A correction it contains that the ledger lacks is a reason to add a row to `pipeline/evidence-commitments.md`, not a reason to cite the audit.

The rubrics that generated them — `chapter-pre-review-audit-prompt-v2.md` and `-v3.md`, and version 1 at `pipeline/chapter-pre-review-audit-prompt.md` — are retained as history. Do not run them. Every chapter has been audited, and the current lane is the spine-seed conversion in `pipeline/spine-seed-protocol.md`.

## What still belongs here

New reports about a *pass*: what was validated, what was reconciled, what was deferred and why. Use a dated, chapter-specific filename, and put any durable claim-level constraint the pass discovers into `pipeline/evidence-commitments.md` rather than leaving it here to be found later.
