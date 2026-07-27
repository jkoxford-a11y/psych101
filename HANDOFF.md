# Psych101 — Current Handoff

**Last updated:** 2026-07-27
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `AGENTS.md` for the chapter voice-conversion workflow and all conventions.

## Current state

**Chapter 6 has been through the spine-seed protocol (2026-07-27).** Chapters 1, 2, 3, 4, 5, 6, 11, 12, and 13 have now had the actual protocol run on them; every other chapter's spine question predates it. Ch. 6 was the last chapter in the book with no spine question at all, and now has one: *"What is your brain doing that it cannot do while you are awake?"* — installed in `theoretical-spine.md` §8 and at the head of `Where This Fits`, mirroring Ch. 8's placement. Body 8,393 → 8,455 words (**+62**), no prune required. Apparatus clean: 14/14 lint PASS with 0 warnings, and the coherence checker went from `review=1` to `CLEAN fail=0 review=0` — the one review item was the missing spine question, which this pass satisfied.

**Ch. 6 was not the chapter Ch. 5 was, and the diagnostic said so before any seeds were drafted.** All three functional layers the spine assigns it scored non-zero and are genuinely installed — `consolidat*` 11, `glymph*` 7, amygdala/prefrontal 7/8, `model` 11. The usual justification for a full pass did not apply, and the pass was correspondingly small: four decisions, two new sentences. Two zeros were investigated and deliberately not seeded. `episodic`/`semantic` at 0/0 is a **deliberate deferral, not a gap** — `ch08-memory.md` L19 states Ch. 6 "deliberately left thin" the consolidation thread so Ch. 8 could deliver it; do not re-propose it. Fatal familial insomnia was cut from the pre-audit draft during conversion and no current file records the deletion; flagged, not acted on.

**The finding was a false ranking, and fixing it surfaced a second defect.** `### What Sleep May Do` opened by presenting restoration, an evolutionary trade-off, and memory reorganization as "three of the strongest" accounts that "carry different amounts of support." Two of those are proximate and one is ultimate; ranking them on one evidence scale invites the student to read the evolutionary account as the weak one, which it is not. Separately, the glymphatic paragraph opened *"The restorative account gained a concrete mechanistic boost…"* — a callback across two intervening paragraphs to the account it exists to support. Both are repaired: the framing sentence is rewritten, the subsection is reordered into a proximate block then an ultimate block with a seam at the single switch, and the two developmental paragraphs moved to the end of `Sleep Architecture` where they belong.

**The proximate/ultimate labels were deliberately withheld, reversing the agent's own first recommendation.** The initial proposal was to install `proximate`/`ultimate` in bold in Ch. 6 and add "6" to Ch. 1's list, piloting the propagation. That was withdrawn: if Ch. 6 gets the labels and Chs. 7, 8, 11, 13 then do not, Ch. 1 L162 becomes wrong in *both* directions. The rewrite is jargon-free and **upgradeable** — dropping the two terms in is a one-sentence edit whenever the propagation runs.

**Ch. 1's forward promise is now measured, and it is the largest open book-wide inconsistency.** `ch01-history-approaches.md` L162 installs both terms in bold with Key Terms entries (L413, L425) and states *"you will see the pair again in Chapters 7, 8, 10, 11, and 13."* Actual delivery: Ch. 7 **0**, Ch. 8 **0**, Ch. 10 **1**, Ch. 11 **0**, Ch. 13 **0**. One of five. Ch. 11 is at zero despite `theoretical-spine.md` L41 and L520 naming it the chapter where the distinction matters most.

**Chapter 2's pre-line-edit hedge/wordiness audit (2026-07-27) is still awaiting one decision from the instructor.** Body prose went 4,844 → 3,981 words (−18%), body negation tokens 84 → 56 (−33%), no authorial first person left; fresh packet at `line-edit-packets/Chapter_2_Research_Methods_and_Statistics_Line_Edit_POST_AUDIT_2026-07-27.docx`, marked-up original untouched. **Open: is the no-first-person rule book-wide or Ch2-local?** If book-wide, `pipeline/voice-brief.md` §2 contradicts it (it lists "Occasional first-person disclosure" as a voice feature) and eight other chapters plus the prologue still contain first person, the prologue most heavily.

**Workflow for spine-seed passes is settled.** Chat iteration, not `.docx` packets, and serial — one chapter at a time. This has now held across Ch. 12, 1, 2, 3, 4, 5, and 6. `spine-seed-protocol.md` Step 8 (delivery format) still describes the old packet flow and has not been rewritten to match. The `git show HEAD:<path>` baseline trick established on Ch. 5 held up again and is now the standard move — it also made a clean content-preservation check possible on Ch. 6's reorder (diffing sorted word content proved nothing was dropped).

## Immediate next actions

1. **Ch6 apparatus retrofit — the only thing Ch. 6 still owes.** Both items are drafted in `pipeline/ch06-spine-seeds.md` → Step 9 and were proposed rather than installed, per the rule that objectives are pedagogical commitments. Learning Objective 3 and Chapter Summary L182 both still describe the accounts as "differently supported" — the exact framing this pass removed from the body. Replacement wording for both is drafted. Third, undecided: whether the spine question should also appear in the Misconception Opener; L13 already closes on its declarative form, so making both interrogative may read as repetition.
2. **Ch5 apparatus retrofit — still open from the previous session.** Both items drafted in `pipeline/ch05-spine-seeds.md` → Step 9: a new learning objective naming the constructed-self thread (with LO 7 and 8 renumbering), and a Chapter Summary sentence covering it. Third, undecided: whether *depersonalization* becomes a Key Term. It is deliberately unbolded in the body so the checker does not demand an entry.
3. **`theoretical-spine.md` L386 is still inconsistent with the book** — it assigns the cognitive light cone to Ch. 5, which declined it. Re-point to Ch. 12. Unchanged from last session; Ch. 6's pass inserted lines below this point only, so the line number still holds.
4. **The proximate/ultimate propagation is now measured and still unstarted.** This is the strongest candidate for the next pass. Ch. 11 is the highest-value target. Whatever happens, **Ch. 1 L162's list is inaccurate as written** — either the propagation runs or the clause is edited. Ch. 6 is pre-wired for the labels and can be upgraded in one sentence.
5. **Ch4 — genuinely open, needs a decision before another pass is worth it:** the individual-differences taxonomy (sensory/experience-shaped/state-based) is still a real gap, but its planned flagship example (Müller-Lyer) was rejected on 2026-07-27 verification. Needs a different experience-shaped-priors example — a perceptual-learning or expertise case (echoing the radiologist example already in §3) was floated but not drafted.
6. **Ch11 — genuinely open, needs the instructor:** the "Social psychology as model-building organisms in contact" thread has no Learning Objective naming it. A scope decision, not a mechanical fix.
7. **Chapter 11 apparatus retrofit** — objectives/key terms partially updated in a prior session; confirm whether the full retrofit (review questions, summary) is still needed against `pipeline/ch11-spine-seeds.md`'s decisions.
8. **Ch12 — optional:** `cognitive light cone` isn't named in the Chapter Summary, though the idea is fully present in plain language. Slightly more load-bearing given Ch. 5 declined the thread and Ch. 12 formally owns it.
9. **No Chapter 6 section exists in `pipeline/evidence-commitments.md`.** Four bounded claims in the chapter would qualify — the glymphatic human-evidence boundary, the Yoo et al. (2007) correlational hedge, the Spiegel et al. (2004) sex/weight variability, and the Cohen et al. (2009) observed-not-assigned caveat. Whether they should be recorded is a decision, not a fix.
10. Keep the Chapter 6 and Chapter 7 image lanes paused unless reopened.
11. `pipeline/check_chapter_coherence.py --all` currently crashes on Chapter 9 with a `UnicodeEncodeError` (Windows console `cp1252` can't encode `ć`) — pre-existing, not fixed. Run it per-chapter-path until someone fixes the encoding or redirects output to a UTF-8 sink.
12. **Ch2's remaining coherence review items are checker noise, not chapter defects** — two "and colleagues"-phrased narrative citations (Lieberman 1999, McGregor 1998) and one multi-year combined citation (Hróbjartsson 2010). Verified genuinely cited; not acted on.

## Builder — all 13 chapters registered

`pipeline/build_chapter_html.mjs` registers Chapters **1–13**. The prologue is built separately and is not part of this registry. A lint PASS is a reliable signal for every numbered chapter; 14/14 currently PASS with 0 warnings.

**The builder rewrites all thirteen HTML files on every run**, so after a single-chapter pass the other twelve may surface as modified even when only one chapter's content changed. Stage exact paths.

## Repository notes

- **`git status` is safe in a native shell (Claude Code).** The lock-file hazard below is specific to the Cowork sandbox mount.
- **Cowork sandbox mount:** do not run `git add`, `git commit`, or `git update-ref` there — it can create `.git/index.lock`/`.git/HEAD.lock` but can't unlink them, which blocks every subsequent git command until deleted by hand. Safe read-only commands under that mount are `git log`, `git diff`, `git show`, `git rev-list`. **Use `git show HEAD:<path> > /tmp/...` to take a pre-edit baseline** rather than `git stash`; it is read-only and avoids the lock entirely (established Ch. 5, reused Ch. 6).
- **Verify a reorder by diffing sorted word content against the baseline** (`diff <(tr -s ' \n' '\n' < base | sort) <(... | sort)`). On Ch. 6 this proved the only vocabulary that left the chapter was the rewritten sentence's, confirming no paragraph was dropped in the move. Cheap, and stronger than eyeballing the diff.
- **`check_chapter_coherence.py` has several documented false-positive classes** (see `PROJECT_BACKLOG.md` → Editorial review for full detail): its citation regex can't parse year-first narrative citations, three-author comma-list narrative citations, "Author and colleagues (year)" phrasing, or multi-year combined citations (only the first year is captured); its institutional-author keying picks a different word depending on citation vs. reference-list direction, so a correct citation can read as missing in both directions at once — **this is what produces Ch. 5's standing `Gelder (2008)` failure, where the reference list correctly reads `de Gelder, B.`**; its reference-parenthetical regex requires a bare year and rejects a correctly-formatted date like `(2024, September 4)`; its Key Terms check treats a slash-joined term ("X / Y") as one literal string, which will essentially never match; and its Connections-anchor slugifier doesn't match the JS builder's apostrophe-handling for `#### Classic Study` callout divs. Always verify a suggested fix against `lint_chapters.py` or by hand against the References list before applying it.
- **The checker does read the spine question** out of `theoretical-spine.md` §8 and check for its presence in the chapter body. Ch. 6's pre-edit baseline flagged it as absent; installing it cleared the review. Useful signal, not noise.
- **`pipeline/evidence-commitments.md` has one OPEN row** — Ch. 10's life-history mosaic point (short interbirth intervals and high reproductive output alongside slow development) was requested and is not in the source. It also has **no Chapter 6 section at all** (see next action 9).
- **Three files in `docs/images/ch03/` are not images.** Despite `.png` extensions they are UTF-8 text notes, producing a recurring ~10-byte CRLF phantom diff. They reappear as modified until renamed to `.txt` or the one-time renormalization runs.
- **A revised packet always goes to a new filename** if packets are used again — a packet was once rebuilt in place over the instructor's entered answers and they were unrecoverable.
- Deferred and needing a decision, in `PROJECT_BACKLOG.md`: removing ~20 MB of unreferenced images from `docs/`; the one-time `git add --renormalize .`; the twelve unreviewed coherence-check failures; and the book-wide finding that banned throat-clearing rose in 11 of 11 audited chapters.

## Chapter 13 — open, none of it blocking

1. **The five maintenance-lens disclaimers.** The proximate/ultimate install does not by itself remove the hedges the 2026-07-15 repair pass added. Separate cleanup, still wanted.
2. **Register.** 1.3 second-person uses per 1,000 body words — the lowest in the book by a wide margin. About half of body paragraphs still end on a negation.
3. **Does the spine question move into the opener?** *"When does a protective model become costly?"* appears only in figure captions and alt text. Ch. 12 precedent says move it; Ch. 6 has now followed that precedent too.
4. **Section 3 is 435 words**, roughly a third of its neighbours. Its position is correct and worth keeping; whether that justifies the length is a separate question.
5. **Grupe & Nitschke (2013)** remains open for Ch. 13 in `evidence-commitments.md`.
6. **Opener prevalence figure** says "roughly one in five U.S. adults." NIMH's current figure is 23.1%. The existing hedge covers it; the phrasing is on the low side of the source.
7. **Five reference-list entries are never cited in text** — Barth et al. (2013), Beck et al. (1979), Craske et al. (2014), Linehan (1993), Rogers (1957). Linehan and Rogers are discussed by name without a parenthetical; the other three are unused. Cite them or move them to Further Reading.

## Important files

- **Spine-seed protocol:** `pipeline/spine-seed-protocol.md` — delivery format (Step 8) is stale; the instructor wants chat iteration, not `.docx` packets, and this has now held across seven passes.
- **Chapter 1 seeds and settled decisions:** `pipeline/ch01-spine-seeds.md`
- **Chapter 2 seeds and settled decisions:** `pipeline/ch02-spine-seeds.md`
- **Chapter 3 seeds and settled decisions:** `pipeline/ch03-spine-seeds.md`
- **Chapter 4 seeds and settled decisions (including the Müller-Lyer re-verification):** `pipeline/ch04-spine-seeds.md`
- **Chapter 5 seeds, six settled decisions, and the rubber-hand-illusion finding:** `pipeline/ch05-spine-seeds.md`
- **Chapter 6 seeds, four settled decisions, and the Ch. 1 L162 propagation measurement:** `pipeline/ch06-spine-seeds.md`
- **Chapter 11 seeds and decision record:** `pipeline/ch11-spine-seeds.md`; conversion residue: `pipeline/audits/ch11-conversion-residue-2026-07-25.md`
- **Chapter 12 seeds and all nine settled decisions:** `pipeline/ch12-spine-seeds.md`
- **Chapter 13 seeds, settled decisions, and verification run:** `pipeline/ch13-spine-seeds.md`
- **Evidence commitments (claim-level constraints, book-wide):** `pipeline/evidence-commitments.md`
- Chapter voice-conversion workflow: `AGENTS.md` → `## Style`
- Theoretical spine (Layer 3 + drafting rules): `pipeline/theoretical-spine.md`; elaborations in `pipeline/theoretical-foundations.md`, `GPT_spine.md`, `pipeline/concepts-semanticization-log.md`
- Validators: `pipeline/lint_chapters.py` (structure, on generated HTML), `pipeline/check_chapter_coherence.py` (apparatus, on Markdown source — takes explicit paths or `--all`; `--all` currently crashes on Ch9's Unicode; has known false-positive classes, see Repository notes)
- Shared builder: `pipeline/build_chapter_html.mjs` (Chapters 1–13 registered); line-edit packet builder: `pipeline/build_line_edit_docx.py`
- Durable deferred work: `PROJECT_BACKLOG.md`
