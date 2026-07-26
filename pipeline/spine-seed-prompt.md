# Psych 101 Spine-Seed Pass

Run the spine-seed pass on Chapter **[CHAPTER NUMBER: CHAPTER TITLE]** in the canonical `psych101` repository.

**Read `pipeline/spine-seed-protocol.md` first and follow it.** This prompt does not restate the protocol — it starts you in the right place with the right constraints.

## What this pass is

You are producing the *lens* for the chapter, as decisions the instructor makes, before any prose is written. You are **not** drafting or converting prose in this pass. The deliverable is an editable packet.

The failure this exists to prevent: reading the Layer 3 notes and then drafting. That makes every framing decision silently, and hands the instructor 8,000 words to argue with instead of a page of choices.

## Order of work

1. **Run the thread-count diagnostic before anything else** (protocol Step 1). Count the chapter's own Layer 3 threads from `pipeline/theoretical-spine.md` §8 against the chapter source. Report the table. A thread the spine assigns to this chapter that scores zero is the finding that justifies the pass — without it your seeds are just taste.
2. Read this chapter's rows in `pipeline/evidence-commitments.md` — the claims whose wording is load-bearing. **A seed may not unbind one**; if a seed would restate a committed claim, say so rather than quietly routing around it. Nothing there governs register; `AGENTS.md` → `## Style` does. The pre-review audits were deleted on 2026-07-26 after extraction — do not look for one, and do not treat a git-recovered copy as authority. See `AGENTS.md` → *Evidence commitments are the only standing constraint on claims*.
3. Read the chapter source in full.
4. Draft seeds per section: spine claim / lead with / arc / payoff line seed / prune candidate / watch.
5. **Measure the trade** (protocol Step 4): body words per section, words in each prune candidate, estimated words added. State the net. If additions exceed prunes, cut threads before presenting — do not present a set you already know is too big.
6. Deliver as `.docx` in `line-edit-packets/`. Render it to PDF and look at the pages before handing it over. The instructor reads Word, not Markdown.

## Hard constraints

- **Payoff lines must be drafted, not described.** "Consider a line about sampling" is useless. Write the sentence in his register so he can strike or rewrite it. The whole point is that he edits rather than authors cold.
- **Route decisions correctly** (protocol Step 6). To him: adding or cutting a thread, register and voice, every prune, anything the audit flagged must-preserve, scope questions. Yourself, recorded not asked: sentence-level trims, mechanical reordering, anything the drafting rules already settle. A packet that routes everything to him trains him to skim the boxes.
- **Respect the do-not-overclaim list** in `theoretical-spine.md` §7.
- **When a spine note says "verify before use," verifying may not clear it.** Report a failed check as a finding and prefer dropping the item to teaching it on weak sourcing. If the check surfaces something better than what you went looking for, report that too.
- **If your shell is a sandbox with the repo mounted, do not run git write commands.** See `CLAUDE.md`.

## Then stop

Present the packet and wait. Do not begin the conversion until the instructor's decisions come back. When they do, record each one **in place** — including the reasoning for anything cut, and what is lost by cutting it (protocol Step 7).

## Known state for the next chapters

- **Chapter 12 (Emotion, Stress & Coping)** has a seed already waiting: social baseline theory (Coan & Beckes) was promoted to the spine on 2026-07-25 and deliberately routed here rather than to Chapter 11. See `theoretical-spine.md` §8, Ch. 12 notes. Treat it as a candidate, not a settled inclusion.
- **The packet format is not settled.** Chapter 11's ran to thirteen decisions across fourteen pages, which is probably too many of both. The open proposal is to split into a short instructor decision packet and a separate agent-facing conversion plan. Resolve this with the instructor before building the Chapter 12 packet — see `pipeline/spine-seed-protocol.md` Step 6 and `PROJECT_BACKLOG.md` → Editorial review.
- **Chapter 11 is the worked example.** Read `pipeline/ch11-spine-seeds.md` for the shape, including how returned decisions and cuts are recorded, and `pipeline/audits/ch11-conversion-residue-2026-07-25.md` for what the conversion residue looks like.
