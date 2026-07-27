# Psych101 — Current Handoff

**Last updated:** 2026-07-27
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `AGENTS.md` for the chapter voice-conversion workflow and all conventions.

## Current state

**Chapter 5 has been through the spine-seed protocol (2026-07-27).** Chapters 1, 2, 3, 4, 5, 11, 12, and 13 have now had the actual protocol run on them; every other chapter's spine question predates it. Chapter 6 remains a step behind even that — no spine question exists for it at all. Ch. 5's diagnostic returned zeros on bottleneck/bandwidth, binding, octopus, Seth/self-as-construction, Eagleman, the cognitive light cone, and the chapter's own spine question. Two findings justified the pass: `self` appeared twelve times in the body and every instance was a modifier on something else, with Section 4 leaning on "the ordinary sense of self" against a construct never built and `evidence-commitments.md` L64 deferring the strong self claim to a "Ch. 5 Seth extension" that did not exist; and Ch. 4 hands the binding problem forward twice into a chapter containing `bind` zero times. Four decisions accepted (self-as-construction, binding routed through global-workspace theory, the octopus paragraph, and moving the camera-analogy limitation to the end of §2), two declined (Eagleman's neural delay as too much for intro psych; the cognitive light cone left with Ch. 12). Body 4,096 → 4,384 words against seven prunes. Apparatus clean — 14/14 lint PASS, coherence checker's only failure byte-identical pre/post and a documented false-positive class.

**Verification changed the content twice, which is now the expected outcome rather than the exception.** The rubber hand illusion was cut from the self-construction paragraph and replaced with depersonalization: the paradigm is under an unresolved demand-characteristics challenge (Lush 2020; Lush et al. 2020; Ehrsson-group rebuttal and Lush/Seth reply, both 2022), and Seth is himself a co-author on the critique — so citing Seth's argument and demonstrating it with the rubber hand would have used a paradigm its own proponent argues is confounded. Third instance of the Asch/Müller-Lyer pattern. Separately, Young (1963) gives ~300 million of ~500 million octopus neurons in the arm ganglia, three-fifths rather than the spine's "approximately two-thirds"; `theoretical-spine.md` was corrected in place with the original claim preserved.

**Chapter 2's pre-line-edit hedge/wordiness audit (2026-07-27) is still awaiting one decision from the instructor.** Body prose went 4,844 → 3,981 words (−18%), body negation tokens 84 → 56 (−33%), no authorial first person left; fresh packet at `line-edit-packets/Chapter_2_Research_Methods_and_Statistics_Line_Edit_POST_AUDIT_2026-07-27.docx`, marked-up original untouched. **Open: is the no-first-person rule book-wide or Ch2-local?** If book-wide, `pipeline/voice-brief.md` §2 contradicts it (it lists "Occasional first-person disclosure" as a voice feature) and eight other chapters plus the prologue still contain first person, the prologue most heavily.

**Workflow for spine-seed passes is settled.** Chat iteration, not `.docx` packets, and serial — one chapter at a time. This has now held across Ch. 12, 1, 2, 3, 4, and 5. `spine-seed-protocol.md` Step 8 (delivery format) still describes the old packet flow and has not been rewritten to match. Ch. 5 also confirmed a cheaper baseline trick: take the pre-edit coherence baseline with `git show HEAD:<path>` into a temp file rather than `git stash`, which is read-only and safe under the Cowork sandbox mount.

## Immediate next actions

1. **Ch5 apparatus retrofit — the only thing Ch. 5 still owes.** Both items are drafted in `pipeline/ch05-spine-seeds.md` → Step 9 and were proposed rather than installed, per the rule that objectives are pedagogical commitments: a new learning objective naming the constructed-self thread (with the existing LO 7 and 8 renumbering), and a Chapter Summary sentence covering the same thread. Third, undecided: whether *depersonalization* becomes a Key Term. It is deliberately unbolded in the body so the checker does not demand an entry.
2. **`theoretical-spine.md` L386 is now inconsistent with the book** — it still assigns the cognitive light cone to Ch. 5, which declined it. Re-point to Ch. 12.
3. **Next chapter for the spine-seed protocol is an open choice.** Chapter 6 is the strongest candidate — it is the only chapter with no spine question at all. Alternatively, pick up the ED–SC/proximate-ultimate propagation into Ch. 7, 8, 10, 11, or 13 that Ch. 1's pass was the prerequisite for and which has not been started.
4. **Ch4 — genuinely open, needs a decision before another pass is worth it:** the individual-differences taxonomy (sensory/experience-shaped/state-based) is still a real gap, but its planned flagship example (Müller-Lyer) was rejected on 2026-07-27 verification. Needs a different experience-shaped-priors example — a perceptual-learning or expertise case (echoing the radiologist example already in §3) was floated but not drafted.
5. **Ch11 — genuinely open, needs the instructor:** the "Social psychology as model-building organisms in contact" thread has no Learning Objective naming it. A scope decision, not a mechanical fix.
6. **Chapter 11 apparatus retrofit** — objectives/key terms partially updated in a prior session; confirm whether the full retrofit (review questions, summary) is still needed against `pipeline/ch11-spine-seeds.md`'s decisions.
7. **Ch12 — optional:** `cognitive light cone` isn't named in the Chapter Summary, though the idea is fully present in plain language. Now slightly more load-bearing given Ch. 5 declined the thread and Ch. 12 formally owns it.
8. Keep the Chapter 6 and Chapter 7 image lanes paused unless reopened.
9. `pipeline/check_chapter_coherence.py --all` currently crashes on Chapter 9 with a `UnicodeEncodeError` (Windows console `cp1252` can't encode `ć`) — pre-existing, not fixed. Run it per-chapter-path until someone fixes the encoding or redirects output to a UTF-8 sink.
10. **Ch2's remaining coherence review items are checker noise, not chapter defects** — two "and colleagues"-phrased narrative citations (Lieberman 1999, McGregor 1998) and one multi-year combined citation (Hróbjartsson 2010). Verified genuinely cited; not acted on.

## Builder — all 13 chapters registered

`pipeline/build_chapter_html.mjs` registers Chapters **1–13**. The prologue is built separately and is not part of this registry. A lint PASS is a reliable signal for every numbered chapter; 14/14 currently PASS with 0 warnings.

## Repository notes

- **`git status` is safe in a native shell (Claude Code).** The lock-file hazard below is specific to the Cowork sandbox mount.
- **Cowork sandbox mount:** do not run `git add`, `git commit`, or `git update-ref` there — it can create `.git/index.lock`/`.git/HEAD.lock` but can't unlink them, which blocks every subsequent git command until deleted by hand. Safe read-only commands under that mount are `git log`, `git diff`, `git show`, `git rev-list`. **Use `git show HEAD:<path> > /tmp/...` to take a pre-edit baseline** rather than `git stash`; it is read-only and avoids the lock entirely (established Ch. 5, 2026-07-27).
- **`check_chapter_coherence.py` has several documented false-positive classes** (see `PROJECT_BACKLOG.md` → Editorial review for full detail): its citation regex can't parse year-first narrative citations, three-author comma-list narrative citations, "Author and colleagues (year)" phrasing, or multi-year combined citations (only the first year is captured); its institutional-author keying picks a different word depending on citation vs. reference-list direction, so a correct citation can read as missing in both directions at once — **this is what produces Ch. 5's standing `Gelder (2008)` failure, where the reference list correctly reads `de Gelder, B.`**; its reference-parenthetical regex requires a bare year and rejects a correctly-formatted date like `(2024, September 4)`; its Key Terms check treats a slash-joined term ("X / Y") as one literal string, which will essentially never match; and its Connections-anchor slugifier doesn't match the JS builder's apostrophe-handling for `#### Classic Study` callout divs. Always verify a suggested fix against `lint_chapters.py` or by hand against the References list before applying it.
- **`pipeline/evidence-commitments.md` has one OPEN row** — Ch. 10's life-history mosaic point (short interbirth intervals and high reproductive output alongside slow development) was requested and is not in the source.
- **Three files in `docs/images/ch03/` are not images.** Despite `.png` extensions they are UTF-8 text notes, producing a recurring ~10-byte CRLF phantom diff. They reappear as modified until renamed to `.txt` or the one-time renormalization runs.
- **A revised packet always goes to a new filename** if packets are used again — a packet was once rebuilt in place over the instructor's entered answers and they were unrecoverable.
- Deferred and needing a decision, in `PROJECT_BACKLOG.md`: removing ~20 MB of unreferenced images from `docs/`; the one-time `git add --renormalize .`; the twelve unreviewed coherence-check failures; and the book-wide finding that banned throat-clearing rose in 11 of 11 audited chapters.

## Chapter 13 — open, none of it blocking

1. **The five maintenance-lens disclaimers.** The proximate/ultimate install does not by itself remove the hedges the 2026-07-15 repair pass added. Separate cleanup, still wanted.
2. **Register.** 1.3 second-person uses per 1,000 body words — the lowest in the book by a wide margin. About half of body paragraphs still end on a negation.
3. **Does the spine question move into the opener?** *"When does a protective model become costly?"* appears only in figure captions and alt text. Ch. 12 precedent says move it.
4. **Section 3 is 435 words**, roughly a third of its neighbours. Its position is correct and worth keeping; whether that justifies the length is a separate question.
5. **Grupe & Nitschke (2013)** remains open for Ch. 13 in `evidence-commitments.md`.
6. **Opener prevalence figure** says "roughly one in five U.S. adults." NIMH's current figure is 23.1%. The existing hedge covers it; the phrasing is on the low side of the source.
7. **Five reference-list entries are never cited in text** — Barth et al. (2013), Beck et al. (1979), Craske et al. (2014), Linehan (1993), Rogers (1957). Linehan and Rogers are discussed by name without a parenthetical; the other three are unused. Cite them or move them to Further Reading.

## Important files

- **Spine-seed protocol:** `pipeline/spine-seed-protocol.md` — delivery format (Step 8) is stale; the instructor wants chat iteration, not `.docx` packets, and this has now held across six passes.
- **Chapter 1 seeds and settled decisions:** `pipeline/ch01-spine-seeds.md`
- **Chapter 2 seeds and settled decisions:** `pipeline/ch02-spine-seeds.md`
- **Chapter 3 seeds and settled decisions:** `pipeline/ch03-spine-seeds.md`
- **Chapter 4 seeds and settled decisions (including the Müller-Lyer re-verification):** `pipeline/ch04-spine-seeds.md`
- **Chapter 5 seeds, six settled decisions, and the rubber-hand-illusion finding:** `pipeline/ch05-spine-seeds.md`
- **Chapter 11 seeds and decision record:** `pipeline/ch11-spine-seeds.md`; conversion residue: `pipeline/audits/ch11-conversion-residue-2026-07-25.md`
- **Chapter 12 seeds and all nine settled decisions:** `pipeline/ch12-spine-seeds.md`
- **Chapter 13 seeds, settled decisions, and verification run:** `pipeline/ch13-spine-seeds.md`
- **Evidence commitments (claim-level constraints, book-wide):** `pipeline/evidence-commitments.md`
- Chapter voice-conversion workflow: `AGENTS.md` → `## Style`
- Theoretical spine (Layer 3 + drafting rules): `pipeline/theoretical-spine.md`; elaborations in `pipeline/theoretical-foundations.md`, `GPT_spine.md`, `pipeline/concepts-semanticization-log.md`
- Validators: `pipeline/lint_chapters.py` (structure, on generated HTML), `pipeline/check_chapter_coherence.py` (apparatus, on Markdown source — takes explicit paths or `--all`; `--all` currently crashes on Ch9's Unicode; has known false-positive classes, see Repository notes)
- Shared builder: `pipeline/build_chapter_html.mjs` (Chapters 1–13 registered); line-edit packet builder: `pipeline/build_line_edit_docx.py`
- Durable deferred work: `PROJECT_BACKLOG.md`
