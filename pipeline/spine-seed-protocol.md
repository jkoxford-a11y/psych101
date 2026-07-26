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
2. The chapter's pre-review audit — `pipeline/audits/chNN-pre-review-audit.md`. It names must-preserve assets and repair items; seeds must not contradict either.
3. The chapter source itself, in full.
4. The relevant section of `pipeline/theoretical-foundations.md` for anything the spine flags as needing verification.

The audit's **must-preserve and must-correct findings are content commitments and stand** — if a seed would touch a protected asset, say so explicitly in the seed rather than proposing around it. But an audit does **not** outrank `AGENTS.md`: its prescriptions about hedging, qualification, and register are superseded by `## Style`. See `AGENTS.md` → *Audits are diagnostic, not authoritative*.

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

*Open question, unresolved as of 2026-07-25:* Chapter 11 produced thirteen instructor decisions across a fourteen-page document. That may be too many of both — a format that routes everything to the instructor trains him to skim the boxes, which defeats them. Candidate fix under consideration: split into a short **decision packet** (instructor, docx) and a **conversion plan** (agent, markdown in `pipeline/`). Pending the instructor's read of the Ch11 packet. Resolve this before the protocol is applied to Chapter 12.

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

Build with `docx` (npm); render to PDF and read the pages before delivering. Never ship an unrendered packet.

---

## What this protocol produced on Ch11 (baseline for comparison)

- Four spine threads measured at zero occurrences in a chapter the spine assigns them to.
- Two threads cut by the instructor as framework-tidiness rather than student payoff.
- One structural finding: the fundamental attribution error and Mischel's aggregation critique are the same statistical error, defined 6,000 words apart and never connected.
- One evidentiary inconsistency: every other classic in the chapter had been bounded during the repair pass; Asch had not.
- Net word budget: ~250–300 words added against 812 words of measured prune candidates.
