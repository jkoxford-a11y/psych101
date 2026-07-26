# Spine-Seed Protocol

**Purpose:** produce the *lens* for a chapter conversion as instructor-editable seeds, before any prose is written.

**When to use it:** for any chapter where the base text is conceptually sound but reads as a construct inventory, and for the least-intuitive chapters generally. First worked example: Chapter 11 (Social Psychology), 2026-07-25. See `AGENTS.md` → `## Style` → *Install the spine* for where this sits in the conversion workflow.

**Why it exists.** The conversion workflow's "install the spine" step was under-specified. In practice an agent would read the Layer 3 notes and then draft, which produces prose the instructor has to react to *as prose* — expensive to correct, and it arrives with the framing decisions already silently made. Seeding inverts that: the framing decisions get made first, cheaply, by the instructor, on a document that is explicitly not the book.

---

## Step 1 — The thread-count diagnostic (required, do this first)

**This is the highest-value step in the protocol and it costs one command.** It converts "this chapter feels term-driven" from an impression into a fact.

Extract the named threads from the chapter's Layer 3 notes in `pipeline/theoretical-spine.md` §8, then count their occurrences in the chapter source:

```bash
cd <repo>
f=source/chapters/chNN-<slug>.md
for t in "compress" "predict" "belong" "calibrat" "<other Layer 3 terms>"; do
  printf "%-24s %s\n" "$t" "$(grep -ci "$t" "$f")"
done
```

Report as a table: thread, occurrences, and what you propose to do about it.

A thread the spine assigns to the chapter that scores **0** is the finding. It means the framework asserts a connection that the prose has never carried. This is not a stylistic complaint — it is a measurable gap between two documents in the repo, and it is what justifies the whole exercise.

**Do not skip to drafting seeds without running this.** Without it the seeds are one agent's taste, and the instructor has no basis to evaluate them.

## Step 2 — Read before seeding

In this order:

1. The chapter's Layer 3 notes and student-facing spine question — `pipeline/theoretical-spine.md` §8.
2. The chapter's rows in `pipeline/evidence-commitments.md`. Read only the rows for this chapter; they name the claims whose wording is load-bearing.
3. The chapter source itself, in full.
4. The relevant section of `pipeline/theoretical-foundations.md` for anything the spine flags as needing verification.

**A seed may not unbind a committed claim.** If a seed would restate one of the chapter's rows, say so explicitly in the seed rather than proposing around it. Nothing in the ledger governs register — `AGENTS.md` → `## Style` does. See `AGENTS.md` → *Evidence commitments are the only standing constraint on claims*.

**The pre-review audits were deleted on 2026-07-26** after being extracted into the ledger. Do not go looking for one, and do not treat a copy recovered from git (`a9dcedd`) as authority. They described drafts that no longer exist, and reading them as ledgers is what produced the hedge-heavy prose this protocol exists to repair.

## Step 3 — Seed structure, per section

Every section gets the same six fields. Keep them short — these are prompts, not prose.

| Field | What goes in it |
|---|---|
| **Spine claim** | One sentence. The lens for this section, traceable to a Layer 3 note. |
| **Lead with** | The image or stakes the section should open on. Usually already in the text, in the wrong position. |
| **Arc** | setup → tension → payoff, in a dozen words. |
| **Payoff line seed** | A drafted sentence, in the instructor's register, that he can rewrite or strike. |
| **Prune candidate** | What comes out to pay for what goes in. Every section names one. |
| **Watch** | The drafting rule, audit boundary, or do-not-overclaim item that constrains this section. |

Plus, at chapter level: the **spine question** (with alternatives if the spine's own wording is too abstract for students) and a **one-sentence chapter engine** every section must be traceable to.

**The payoff line seeds must be drafted, not described.** "Consider a line about sampling" is useless. A written sentence the instructor can react to is the entire point — the protocol exists so he edits rather than authors cold.

## Step 4 — Measure the trade

Before proposing anything, quantify:

- body words per section
- words in each prune candidate
- estimated words of genuinely additive content

State the net. If the additions exceed the prunes, the seed set is too big — cut threads before presenting, and say which and why.

Word counts by line range:

```bash
awk -v s=<start> -v e=<end> 'NR>=s&&NR<=e' "$f" | wc -w
```

## Step 5 — Integration mechanisms, cheapest first

The default assumption should be **reordering, not adding**. Rank proposed work this way:

1. **Invert lead-and-definition.** Free. Most sections already contain the right image, arriving after the definition that should have arrived second. Verify the chapter linter doesn't enforce term position before proposing it (`pipeline/lint_chapters.py` currently does not).
2. **Seam sentences.** ~10 total. The spine belongs at transitions between constructs, doing visible work, not announcing itself in a block.
3. **Apparatus retrofit.** Free. Existing Stop and Retrieve / Think About It / Do Not Confuse / review questions mostly test *term discrimination*. Converting a few to test *relations* installs the spine in the retrieval layer at zero word cost. Do this **last**, so it tests the chapter as it finally reads.
4. **New prose.** The only real expense. Budget it explicitly and keep it to threads that cannot ride on an existing sentence.

**The failure mode to name every time:** adding a spine framing paragraph at the top of each section. It is the obvious move and it reproduces the spine-disconnected draft — a framing layer students skip while the body stays term-driven.

**Working rule:** *if a spine claim can't be carried by a sentence already doing other work, it probably hasn't earned its place.*

**Sequencing, or the chapter gets rewritten twice:** prune decisions → lead/definition inversions → seams → new prose → apparatus retrofit.

## Step 6 — Route decisions correctly

Mark as an instructor decision only what genuinely requires his judgment:

- adding or cutting a spine thread
- anything touching register, voice, or a signature analogy
- every prune
- anything the audit flagged as must-preserve
- scope questions (does this chapter carry this idea, or does another one)

Decide yourself, and record rather than ask: sentence-level trims, mechanical reordering, and anything the spine's drafting rules already settle.

*Resolved 2026-07-26 (Chapter 12).* The instructor kept the **single-packet** format rather than splitting it. The fix for the skim problem is to hold the **decision count** down, not the page count — Ch12 ran nine decisions across fourteen pages, and everything the agent could settle itself went into a *Recorded, not asked* section in the same file. That worked; the split is not needed.

**But nine boxes was still not the binding constraint.** The instructor's actual objection was *"hard to make decisions with the info available."* A decision box that names a prune as "P4, L121, journaling/friendship/therapy — whole, 27 words" requires him to open the source, find the line, read around it and reconstruct the context — nine times. See *Delivery format* for what a box has to contain instead.

## Step 7 — Record decisions in place

When the instructor cuts a thread, **replace the seed with the reasoning, in the same position.** Do not delete it.

Record: what it was, why it was seeded, why it was cut, and what is lost. Ch11's just-world and attachment cuts are the model. This prevents the next pass from silently re-proposing the same thread, and it preserves the consequence — the just-world cut left the Ch13 stigma bridge with no anchor at either end, which is worth knowing later.

## Step 8 — Verification before delivery

- Every seed traces to a real Layer 3 construct or an audit finding. No freelancing.
- No seed contradicts the audit's must-preserve ledger.
- No seed violates the §7 do-not-overclaim list.
- Anything the spine flags as needing a source check is either checked or marked as blocking, with the safe alternative framing supplied.
- Counts and word measurements are re-run, not remembered.

**On research checks:** when a spine caution says "verify before use," verifying may not clear it. Three searches on the Asch taxonomy returned only study-guide secondaries, one of which reported 13 of 50 as "20%". That result *strengthened* the caution. Report a failed check as a finding, not as a gap — and prefer dropping the item to teaching it on weak sourcing.

Also: a check that fails at its stated goal often surfaces something better. The Asch search produced Bond & Smith (1996), a 133-study meta-analysis that was more useful than the question originally asked. Report those; don't discard them because they weren't the assignment.

---

## Delivery format

Deliver in **.docx**, in `line-edit-packets/`, matching the existing line-edit workflow — the instructor edits and comments in Word, and reconciliation runs the same way as any other packet. Markdown is retained in `pipeline/` as the diffable record.

Requirements for the packet:

- Real Word heading styles, so the navigation pane works.
- Each decision in a shaded, **numbered** box with an adjacent empty field for the answer.
- An index of all decisions at the front, so the instructor sees the scope before starting.
- Cuts and closed items in visually distinct callouts, not buried in prose.
- No inline code formatting or markdown syntax anywhere in the rendered text.
- **Every decision quotes the current text in full, shows the proposal in place, and names what is lost.** A line number and a five-word label is not a decidable unit — it makes the instructor reconstruct the context the packet should have supplied. Added 2026-07-26 after the Ch12 packet was returned with *"hard to make decisions with the info available."* This makes the document longer and answerable, which is the right trade.
- **Say when a decision is not independent.** Ch12 listed two prunes separately that were in fact the second half of a thread decision — cutting them without the thread would have left an unbounded claim, which is worse than the disclaimer being cut. Couplings are part of the decision.

Build with `docx` (npm) or `python-docx`; render to PDF and read the pages before delivering. Never ship an unrendered packet.

**Never rebuild a packet in place once it has been sent.** Any revision goes to a new filename — the convention `Chapter_11_Social_Psychology_Line_Edit_MARKED_2026-07-26.docx` already followed. Recorded 2026-07-26 because the Ch12 packet was rebuilt over the instructor's entered answers and they were unrecoverable: git held only the clean pre-review blob and Word left no remnant. Confirming "the file is closed" is not sufficient — the file being closed says nothing about whether it was saved.

## Step 9 — Check the apparatus against the converted body

Prose passes rewrite the body and leave learning objectives, review questions, the summary, key terms, and the Connections table describing the chapter that used to be there. Run both validators against the markdown after conversion:

```bash
python pipeline/check_chapter_coherence.py source/chapters/chNN-*.md
python pipeline/lint_chapters.py
```

`lint_chapters.py` checks structure on generated HTML and passes all fourteen chapters; it cannot see this class of problem. See `AGENTS.md` → *The apparatus must be re-checked against the body after any prose pass* for what each report means.

**The Ch11 evidence for why this is a required step, not a nicety.** After its conversion, Objective 5 and the Chapter Summary both taught *"multiple levels of explanation"* — the framing the instructor cut as Decision 9 — while seven threads the chapter now teaches were named in no objective at all, including the chapter's own spine question frame.

**Objectives are pedagogical commitments. Propose, never edit silently.** The check surfaces drift; the instructor resolves it. Apparatus retrofit still runs last, so the prompts test the chapter as it finally reads.

---

## What this protocol produced on Ch11 (baseline for comparison)

- Four spine threads measured at zero occurrences in a chapter the spine assigns them to.
- Two threads cut by the instructor as framework-tidiness rather than student payoff.
- One structural finding: the fundamental attribution error and Mischel's aggregation critique are the same statistical error, defined 6,000 words apart and never connected.
- One evidentiary inconsistency: every other classic in the chapter had been bounded during the repair pass; Asch had not.
- Net word budget: ~250–300 words added against 812 words of measured prune candidates.
