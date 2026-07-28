# Psych101 — Current Handoff

**Last updated:** 2026-07-28
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `AGENTS.md` for operating rules.

## Current state

**Chapter 10 has completed the spine-seed protocol.** Record: `pipeline/ch10-spine-seeds.md`. The instructor rewrote and approved the ecological-dominance/social-competition connection, rejected the proposed life-history-mosaic insertion and its coupled cut, and approved proximate/ultimate labels in the adolescent-brain passage. The installed D1 preserves the Flinn, Geary, and Ward lineage while correcting the evidence wording: brain size and cognition increased rapidly in the hominin lineage, not “exponentially over the last million years,” and “principal hostile force of nature” is attributed to Alexander rather than Darwin. The matching 2005 reference is installed. D2 is explicitly retired from this pass; the instructor's village and siblings lines remain intact. Body 5,059 → 5,175 words (**+116**). Source and generated HTML are synchronized.

**Chapter 10 validation:** structural lint passes 14/14 chapters with zero warnings. Coherence remains at the pre-installation category baseline, `fail=1 review=7`. The failure is the known institutional-author parsing problem for CDC; the bolded-term review now expectedly includes `proximate level` and `the ultimate level`. Objectives, Chapter Summary, review questions, Key Terms, figures, and labs were not changed. The open apparatus decisions are whether to name life-history theory and secondary altriciality in an objective, name life history in the summary, and add the proximate/ultimate labels to Chapter 10's Key Terms.

**All Chapters 1–13 have now had the actual spine-seed protocol run.** The working method is chat iteration, one chapter at a time. `pipeline/spine-seed-protocol.md` Step 8 still describes the superseded DOCX-packet delivery path and should eventually be brought into line with practice.

**Chapters 8 and 9 remain the strongest warning against trusting ledger status cells.** Chapter 8's survival-processing row read `installed` while the chapter contained both forbidden claims verbatim; that prose and status note were repaired. Chapter 9's group-differences row also claimed an installed thread absent from the canonical chapter; the instructor retired it from Chapter 9. The rest of `pipeline/evidence-commitments.md` has not been systematically checked. Chapter 10's life-history-mosaic row still reads OPEN even though the instructor rejected that insertion in this pass; correcting the ledger is a separate decision because the evidence boundary may remain useful while the chapter assignment is retired.

**Recent chapter apparatus decisions remain open.** Chapter 9 needs a framing→language objective/summary connection, a relation-testing review question, and a cite-or-move decision for Deary (2001). Chapter 8 needs the drafted Objective 3 and summary retrofit, a decision on `schema` as a Key Term, and a verified reference entry for the genuinely uncited Baddeley (2000). Chapter 6 still has drafted objective/summary wording that removes the obsolete “differently supported” framing. Chapter 5 still has a drafted constructed-self objective/summary retrofit and an open `depersonalization` Key Term decision.

**Chapter 1's proximate/ultimate forward promise is fulfilled in Chapters 7 and 10, but not yet in Chapters 8, 11, and 13.** Chapter 11 remains the highest-value missing use because the theoretical spine names it as the chapter where the distinction matters most. Chapter 6 is pre-wired for the labels but is not named in Chapter 1's promise.

**Chapter 2's pre-line-edit hedge/wordiness audit still awaits one scope decision:** is the no-first-person rule Chapter 2-local or book-wide? A book-wide rule would conflict with `pipeline/voice-brief.md` and current prose in eight chapters plus the prologue.

## Immediate next actions

1. **Resolve Chapter 10's follow-on record and apparatus decisions:** retire or revise the ledger's OPEN life-history-mosaic assignment; decide whether life history/secondary altriciality belong in an objective and summary; decide whether proximate/ultimate become Chapter 10 Key Terms.
2. **Retrofit Chapter 9's apparatus** from `pipeline/ch09-spine-seeds.md` Step 9 and decide whether to cite or move Deary (2001).
3. **Retrofit Chapter 8's apparatus** from `pipeline/ch08-spine-seeds.md` Step 9; verify and add the Baddeley (2000) bibliographic record; decide on `schema`.
4. **Audit all evidence-commitment rows against current chapter prose.** Treat every `installed` status as unverified until checked.
5. **Resolve Chapter 7's figure-number gap:** captions skip 7.8, while unreferenced dopamine-uncertainty PNG/SVG assets exist. Restore that figure or renumber 7.9 → 7.8.
6. **Complete the proximate/ultimate propagation** in Chapters 8, 11, and 13 as one deliberate pass.
7. **Repair the theoretical-spine ownership note** that still assigns the cognitive light cone to Chapter 5; Chapter 12 owns it.

## Files changed by the current Chapter 10 pass

- `source/chapters/ch10-lifespan-development.md`
- `docs/chapters/10-lifespan-development.html`
- `pipeline/ch10-spine-seeds.md`
- `GPT_project_log.md`
- `HANDOFF.md`

No Chapter 10 objective, summary, review question, glossary, figure, image, lab, shared builder, evidence-ledger row, commit, or remote branch changed.

## Repository notes

- `pipeline/build_chapter_html.mjs` registers Chapters 1–13 and accepts chapter numbers as arguments. `node pipeline/build_chapter_html.mjs 10` rebuilds only Chapter 10; calling it with no number rebuilds all registered chapters. The prologue is separate.
- Baseline `pipeline/check_chapter_coherence.py` before editing; its citation, singular/plural Key Terms, institutional-author, and apostrophe-anchor false-positive classes are documented in `PROJECT_BACKLOG.md`.
- Run Python validators with `-X utf8` on Windows. `check_chapter_coherence.py --all` can otherwise hit console encoding failures on Chapter 9.
- Preserve exact file scope in this mixed repository. Do not bulk add, clean, reset, or restore.
- A revised line-edit packet always gets a new filename; never rebuild over instructor markup.
- Three `.png` files in `docs/images/ch03/` are UTF-8 text notes and can generate recurring line-ending noise.

## Important files

- Chapter 10 decisions: `pipeline/ch10-spine-seeds.md`
- Spine protocol: `pipeline/spine-seed-protocol.md`
- Evidence ledger: `pipeline/evidence-commitments.md`
- Theoretical spine: `pipeline/theoretical-spine.md`
- Validators: `pipeline/check_chapter_coherence.py`, `pipeline/lint_chapters.py`
- Durable deferred work: `PROJECT_BACKLOG.md`
