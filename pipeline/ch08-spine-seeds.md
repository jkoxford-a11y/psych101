# Chapter 8 (Memory) — Spine Seeds

**Date:** 2026-07-27
**Protocol:** `pipeline/spine-seed-protocol.md`
**Source:** `source/chapters/ch08-memory.md` (body L7–211, **7,268 words**)
**Layer 3 notes:** `pipeline/theoretical-spine.md` §8 → *Ch. 8 — Memory*
**Ledger rows:** `pipeline/evidence-commitments.md` → *Chapter 8 — Memory* (5 rows; 4 installed, 1 removed)

Delivered as chat iteration, not a `.docx` packet — the workflow settled across Chs. 12, 1–6.

> **STATUS: all five decisions approved by the instructor and installed, 2026-07-27.**
> Body 7,268 → 7,398 words (**+130**). Lint 14/14 PASS, 0 warnings. Coherence checker output is byte-identical to the pre-edit baseline — this pass introduced no new failures and no new review items.
> Verified by sorted-word diff against `git show HEAD:source/chapters/ch08-memory.md`: the only vocabulary that left the chapter belongs to the four edited passages. No paragraph was dropped.
> **Still open:** the Step 9 apparatus retrofit (below), and one pre-existing defect the verification pass surfaced — see *Incidental finding*.

---

## Step 1 — Thread-count diagnostic

Terms extracted from the four Layer 3 threads the spine assigns Ch. 8, plus the §8 Layer 3 table rows naming Ch. 8 (`gist errors`, `source amnesia`). Counts are case-insensitive line matches in the full source.

| Thread / term | Count | Reading |
|---|---:|---|
| `reconstruct` | 19 | Saturated. The chapter's strongest installed thread. |
| `model` | 18 | Mostly "three-box model," "working memory model" — the *noun*, not the spine sense. |
| `episodic` | 15 | Present, but as a taxonomy label (see below). |
| `source amnesia / monitoring / misattribution` | 13 | Fully installed, Section 4. |
| `forget` | 12 | Installed. |
| `semantic` | 9 | 6 of 9 are the figure, the table row, the objective, or the glossary. |
| `relevan` | 7 | Concentrated in one paragraph (L158). |
| `predict` | 6 | Mostly "predict" as a verb about study strategy, not the spine sense. |
| `priming` | 6 | **All six are figure alt text, figure caption, table cell, objective, or glossary. Zero body sentences.** |
| `compress` | 4 | L19 (Where This Fits), L91 (spacing, unrelated sense), L158, L210 (Summary). |
| `gist` | 0 | *(2 raw hits were "musicolo**gist**" / "neuropsycholo**gist**.")* |
| `schema` | 0 | — |
| `ecolog` | 0 | — |
| `efficac` | 0 | — |
| `evolution` | 0 | — |
| `life history` | 0 | — |
| `verbatim` | 0 | — |
| `calibrat` | 0 | — |

### What the zeros actually mean — two different things

**The evolutionary zeros are not a gap.** `ecolog` 0, `evolution` 0, `efficac` 0, `life history` 0 look alarming, but L158 carries the entire life-history argument in plain language, including the spine's own middle-school-morning-routine example almost verbatim, plus Nairne survival processing as evidence. Ch. 6's lesson applies: a vocabulary zero is not a conceptual zero. **Do not seed this thread.** Its problem is the opposite one — see Finding 1.

**The `priming`, `schema`, `gist`, `verbatim` zeros are a gap**, and they are the same gap — see Finding 2.

---

## Finding 1 — A committed claim is violated verbatim, twice, in one paragraph

`evidence-commitments.md` → Ch. 8 → **Survival processing**, status *installed*:

> The effect is broadly supported; the evolutionary interpretation is one account among elaboration, distinctiveness, and scenario richness. **Do not say memory was "tuned this way on purpose" or that forgetting is the compression it evolved to do.**

`ch08-memory.md` L158 currently says, in consecutive sentences:

> "There is direct experimental support for memory being **tuned this way on purpose**…"
> "…it is the system doing exactly the **compression it evolved to do**."

Both forbidden strings, word for word, `grep`-confirmed. The row is marked *installed* and is not installed. This is the highest-priority item in the chapter and it lives in the one paragraph that carries the chapter's spine.

The repair is a **rewrite, not a hedge-add.** Register calibration in `AGENTS.md` and the ledger pull in opposite directions here, and the resolution is the one `AGENTS.md` already states: the ledger constrains *claims*, `## Style` governs *register*. Name the rival accounts once, plainly, in short words, and keep the paragraph's force. See Decision 1.

## Finding 2 — The chapter answers half its own spine question

The spine question is installed at the head of `Where This Fits` (L19): ***Why does memory preserve meaning better than detail?***

Section 3 answers the **detail** half completely: why a system sheds what no longer bears on acting now (L158). Nothing in the chapter answers the **meaning** half. The episodic → semantic compression pathway — the spine's named mechanism for how meaning gets kept — appears in exactly one place in the entire chapter, the Key Terms glossary:

> **Semantic memory** — General factual knowledge, *detached from the specific episode in which it was learned.* (L393)

That clause is the whole answer, and it is in the back matter. In the body, Section 2 presents episodic and semantic as two branches of a taxonomy tree (Figure 8.4), two rows of a table, and a dissociation ("can be selectively preserved or lost independently"). They are drawn as **siblings**. The spine says one is the **compressed product of** the other. The chapter never says so.

The same gap explains the other zeros. `schema` 0 is the missing name for the compressed product — even though Section 4 leans on it constantly ("assembling a plausible account from fragments, **general knowledge**…" L13; "encoded fragments, **general knowledge**, and expectation," Figure 8.6 caption). And `gist`/`verbatim` 0 is the missing name for the meaning/detail split the chapter's own question is about.

This is Ch. 8's structural finding, and it is the same species as Ch. 11's: two things defined far apart in the chapter, connected in the framework, never connected in the prose. Here they are only 1,200 words apart, which makes it cheaper to fix.

---

## Chapter engine

**Memory keeps what a life needs and rebuilds the rest — and both halves of that bargain show up as competence and as error.**

Every section should be traceable to it: Section 1 is what gets in, Section 2 is what the keeping produces, Section 3 is what the shedding buys, Section 4 is what the rebuilding costs.

**Spine question:** keep as written. *"Why does memory preserve meaning better than detail?"* is concrete, student-legible, and already installed in the right place. No alternative needed.

---

## Section seeds

### Section 1 — Encoding: Building the Trace (2,356 words)

| Field | |
|---|---|
| **Spine claim** | Encoding is triage, not recording — the limits are the point, not the caveat. |
| **Lead with** | Already correct. "Before you can forget something, you have to actually get it into memory in the first place." Do not touch the opener. |
| **Arc** | setup → tension → payoff: brief buffer → sharply limited workspace → what you do with it decides what survives. |
| **Payoff line seed** | *(none needed — L70's leaky bucket and L82's elaboration paragraph already land it.)* |
| **Prune candidate** | The two do-it-yourself demonstration tails, 131 words total. See Decision 5 — **coupled**, read the note. |
| **Watch** | This is the longest section in the chapter by 900 words and the most inventory-like. It is also the one section where the spine needs *nothing added*. Resist. |

### Section 2 — Storage: From Synapse to System (1,392 words)

| Field | |
|---|---|
| **Spine claim** | Semantic memory is mostly episodic memory that has been compressed — the branches of Figure 8.4 are a family tree, not a filing system. |
| **Lead with** | Keep the existing LTP opener. The seed goes *after* the taxonomy table, where the tree has just been drawn and the relationship between branches is conspicuously absent. |
| **Arc** | synapse → systems → the systems are not peers; one is what the other leaves behind. |
| **Payoff line seed** | See Decision 3 — drafted in full. |
| **Prune candidate** | None. This section is already the tightest in the chapter. Decision 3's words are paid for out of Section 1's prune. |
| **Watch** | **The H.M. ledger row binds here.** It commits the chapter to H.M.'s *limited new semantic learning*. If the seed says episodic→semantic is the **only** route to semantic memory, H.M.'s residual semantic learning becomes impossible and the chapter contradicts itself 20 lines later. The seed must say **main pathway**, not only pathway. This is why the drafted wording says "most of what you know" and not "everything you know." |

### Section 3 — Retrieval and Forgetting (1,032 words)

| Field | |
|---|---|
| **Spine claim** | Forgetting is the price of currency, not the failure of storage. |
| **Lead with** | Already correct, and L158 is the best paragraph in the chapter. |
| **Arc** | serial position → decay vs. interference → zoom out: why forget at all. |
| **Payoff line seed** | See Decision 1 — this is a repair of an existing payoff, not a new one. |
| **Prune candidate** | None. The Decision 1 rewrite runs roughly 15 words shorter than what it replaces. |
| **Watch** | **Survival-processing ledger row.** Also: do not let the repair turn into a hedge stack. One short sentence naming the rival accounts, then straight back to the point. Checklist rules 1 and 2 still apply on top of the ledger. |

### Section 4 — When Memory Goes Wrong (1,497 words)

| Field | |
|---|---|
| **Spine claim** | The reconstruction errors are the bill for the compression Section 3 just praised — same mechanism, opposite face. |
| **Lead with** | The section opener currently pivots off Section 2 ("The memory systems in Section 2 can be preserved or damaged"). It should pivot off Section 3, which is what it is actually the consequence of. |
| **Arc** | compression has a cost → misinformation → false memory → source error → flashbulb: vivid ≠ accurate. |
| **Payoff line seed** | See Decision 4. |
| **Prune candidate** | None proposed. The two Do Not Confuse boxes are long but are doing real discrimination work. |
| **Watch** | The connection between compression and error is currently made *only* in the Misconception Opener (L13) and the Chapter Summary (L210) — both outside the body. Making it at the seam is what installs it. **Confabulation ledger row** binds this section and is correctly installed; do not disturb the AI Connection wording. |

---

## Step 4 — The trade

| | Words |
|---|---:|
| Prune (Decision 5, partial cut) | **−105** |
| Decision 1 rewrite, net | **−15** |
| Decision 2, priming | +55 |
| Decision 3, episodic→semantic | +105 |
| Decision 4, Section 3→4 seam | +35 |
| **Net** | **+75** |

Body goes 7,268 → ~7,343 (+1.0%). Additions are 195 words against 120 words of prune and rewrite savings; the overage is small and lands entirely on Finding 2, which is the reason for the pass.

**No new prose is proposed in Section 1, which is the largest section.** Integration mechanisms used, cheapest first: no lead/definition inversions were needed — this chapter has already been through voice conversion and its four section openers are all correctly ordered. That leaves one seam (D4), one prune (D5), and two genuine additions (D2, D3), both of which pay for the structural finding.

---

## Decisions

**All five approved and installed 2026-07-27.** Each decision below is kept as written for the record; the proposed text is what went into the source, with one wording change noted under Decision 5.

### Decision 1 — Repair the survival-processing ledger violation *(highest priority)* — **INSTALLED**

**Current text, L158, final two sentences of the paragraph:**

> There is direct experimental support for memory being tuned this way on purpose: material that participants rate for survival relevance — imagining gathering food or evading a predator in an unfamiliar environment, for instance — is recalled significantly better than the same material processed just as deeply for unrelated reasons, an advantage that holds up even against study techniques, like imagery and self-reference, already known to be unusually effective on their own (Nairne, Thompson, & Pandeirada, 2007). Forgetting the mundane while retaining the fitness-relevant is not the system breaking down — it is the system doing exactly the compression it evolved to do.

**Proposed replacement:**

> Memory plays favorites, and you can measure it. Rate a list of words for how useful each would be in staying alive somewhere unfamiliar — finding food, avoiding a predator — and you will recall more of them than if you had processed those same words just as deeply for any other reason. The survival edge even beats imagery and self-reference, two of the strongest encoding tricks known (Nairne, Thompson, & Pandeirada, 2007). Why it wins is still argued: survival scenarios may simply be richer, more distinctive, and more elaborately processed than anything they are compared against. The direction is not argued. What bears on staying alive is what sticks. Forgetting the mundane while keeping what matters now is not the system breaking down. That is the system working.

**What is lost:** the words "tuned this way on purpose" and "evolved to do" — both are design language the ledger forbids. The replacement asserts the *pattern* with full force and stops short of asserting the *purpose*. One added sentence names the rival accounts, per the ledger.

**Coupling:** this also requires flipping the ledger row's status, or at minimum re-verifying it, since it currently reads *installed* and is not.

**Decision needed:** does this rewrite hold the paragraph's punch? It is a signature payoff line and the register call is yours.

---

### Decision 2 — Give priming one body sentence — **INSTALLED**

Priming appears six times in Chapter 8 and **not once in running prose** — only in the Figure 8.4 alt text, the figure caption, the taxonomy table, Learning Objective 3, and the Key Terms glossary. A student can finish the chapter having seen the word four times and never having been told what it feels like.

The spine assigns it a real job: *"Priming is the memory system's equivalent of the prediction/compression solution — rather than searching from scratch, the relevant past is already partially active."*

**Proposed insertion, after the taxonomy table (after L115), ~55 words:**

> Priming is the one on that list you use constantly and never notice. Read the word *nurse* and for a while afterward you will recognize *doctor* a fraction faster — not because you remember reading *nurse*, but because your memory system has already leaned that way. The relevant past arrives slightly before you ask for it.

**What is lost if declined:** the chapter keeps a taxonomy cell with no experience attached to it, and the spine's prediction thread has no anchor in this chapter at all (`predict` scores 6, none in the spine's sense).

**Decision needed:** worth 55 words, or is priming genuinely Chapter 9's problem?

---

### Decision 3 — Name the episodic → semantic pathway *(the structural finding)* — **INSTALLED**

Section 2 draws episodic and semantic as sibling branches and never says that one is made out of the other. The chapter's own spine question — why meaning survives better than detail — has no answer in the body.

**Proposed insertion, immediately after Decision 2's paragraph (so: table → priming → this), ~105 words:**

> Those two explicit branches are not neighbors on a chart. One is made out of the other. You did not learn that stoves are hot from a definition — you learned it from one specific afternoon, in one specific kitchen, with an adult reacting, and then from a dozen other afternoons that made the same point. The afternoons blur together and stop coming back on request. What survives is the thing they all agreed on, now usable without retrieving a single one of them. That is most of what you know: episodes that piled up until only their overlap was worth keeping. It is also the answer to this chapter's question. Meaning outlasts detail because meaning *is* what is left when the details of many agreeing episodes are compressed away.

**What is lost if declined:** the spine question stays half-answered, `schema` stays at zero, and the Key Terms glossary continues to be the only place in the chapter where the mechanism appears.

**Coupling — read before deciding:** the H.M. ledger row commits the chapter to H.M. showing *limited new semantic learning*. The draft says "most of what you know," deliberately, so the pathway reads as the main route and not the only one. If you tighten this to "everything you know," the chapter contradicts its own ledger 20 lines later.

**Decision needed:** approve, or cut it to a single sentence appended to the Semantic row of the table?

---

### Decision 4 — Repoint the Section 4 opener at Section 3 — **INSTALLED**

**Current, L168 opening:**

> The memory systems in Section 2 can be preserved or damaged; that's one way memory fails. This section is about a different kind of failure — one that requires no brain damage at all and happens to essentially everyone.

**Proposed:**

> Section 3 ended with compression as a feature. Here is what it costs. A system that keeps the gist and lets the particulars go has to rebuild the particulars on demand — and rebuilding is guessing, however good the guess. That guessing requires no brain damage at all, and it happens to everyone.

**What is lost:** the explicit backward reference to Section 2's damage cases. Section 4's first paragraph already re-establishes the contrast in its next sentence ("Memory is reconstructive, and the clearest evidence…"), so the loss is small.

Net +35 words. This also gives `gist` its first occurrence in the chapter.

**Decision needed:** every seam sentence is a register call.

---

### Decision 5 — Prune the two do-it-yourself demonstration tails *(partial — coupling matters)*

Two 65-word do-it-yourself tails in Section 1, both trailing paragraphs that had already made their point.

**(a) L49, Sperling — cut whole, 66 words:**

> You can get a rough feel for Sperling's effect yourself: have someone flash a 3×3 grid of letters at you for under a second, then immediately point to one row and ask you to name it — if you can do that, but couldn't have named the entire grid, you've just demonstrated the gap between what sensory memory briefly holds and what whole report can capture.

**Why:** the *Try It Yourself* lab three lines below (L53, `sperling-partial-report.html`) runs the identical demonstration, properly, with both conditions and a comparison. The prose version asks the student to recruit a friend to do worse.

**(b) L55, digit span — cut partially, ~39 words, NOT whole:**

> ~~You can try the classic STM-capacity demonstration on yourself or a friend: read a random string of seven to nine digits aloud at a steady pace, then immediately repeat it back. To make the task harder, repeat the digits backward.~~ The **backward digit span** task requires you to maintain and reorganize the sequence at the same time, making it a simple illustration of working-memory demands.

**Coupling — this is why (b) is not a whole cut:** the very next paragraph (L57) opens *"That manipulation requirement is the seam between simple short-term storage and something more demanding."* **That** refers to the backward-digit-span sentence. Cut the whole tail and L57 opens with a dangling antecedent, and the Baddeley section loses its motivating example. Keeping the final sentence preserves the bridge at a cost of 26 words.

**Free side effect:** `backward digit span` is bolded in the body with **no Key Terms entry**, which the coherence checker can flag. Trimming around it does not fix that, but it is worth knowing the term is currently unsupported.

**Total: −105 words.**

**Decision needed:** every prune is yours. (a) and (b) can be decided separately.

**INSTALLED, with one wording change.** (a) was cut whole as proposed. For (b), leaving the surviving sentence untouched would have left *backward digit span* named but never described, since the description lived in the cut half. It now reads: *"The **backward digit span** task — repeating a string of digits in reverse — requires you to maintain and reorganize the sequence at the same time…"* Six words added back to keep the term self-defining. L57's *"That manipulation requirement"* still has its antecedent.

---

## Recorded, not asked

- **No lead/definition inversions proposed.** All four section openers were checked and all four already lead with the problem rather than the term. This chapter has been through voice conversion; the free mechanism is already spent.
- **The spine question stays as written.** Installed in the right place, concrete, no alternative wording needed.
- **The evolutionary/life-history thread is not seeded** despite four vocabulary zeros. It is installed at L158 in plain language, including the spine's own middle-school example. Ch. 6's precedent: vocabulary zero ≠ conceptual zero.
- **Section 1 gets no additions** despite being the largest section, per the working rule that a spine claim which cannot ride an existing sentence has not earned its place.
- **`model` at 18 is noise.** Nearly all instances are "three-box model" / "working memory model" — the modeling-*noun*, not the spine's model-building sense. Not treated as installed coverage.

---

## Incidental finding — one real, pre-existing citation defect

`check_chapter_coherence.py` reports `fail=2 review=2` on Ch. 8, and the output is **byte-identical before and after this pass** — all four items predate it. Three are known false-positive classes; one is real.

- **REAL: `Baddeley (2000)` is cited in the body (L63, for the episodic buffer) and has no reference-list entry.** The list carries only `Baddeley, A. D., & Hitch, G. (1974)`. Not fixed here — adding a bibliographic record is a citation decision, not a spine-seed edit, and it should be entered from the actual source rather than from memory. Flagged.
- *Noise:* `key term defined but absent from body: Flashbulb memory` — the body says "Flashbulb **memories**" in bold at L194. The checker's literal-string match on the singular Key Term misses it. Known class.
- *Noise:* `reference entry not cited: Laney (2026), McDermott (2026)` — both are Further Reading entries and correctly uncited in text.
- *Noise:* seven bolded-with-no-Key-Terms-entry items, including `backward digit span`. Pre-existing and unchanged by Decision 5.

## Step 8 — Verification

- Every seed traces to a Layer 3 construct in `theoretical-spine.md` §8 (D2 → priming-as-probabilistic-parsing; D3 → episodic→semantic compression; D1/D4 → the life-history and lossy-compression threads) or to a ledger row (D1).
- **One §7 do-not-overclaim item is currently violated** and D1 exists to repair it. No seed introduces a new violation.
- D3 was checked against the H.M. ledger row and the wording adjusted before proposal; the coupling is stated in the decision rather than resolved silently.
- D1 was checked against the survival-processing row; the rival accounts are named in the replacement text as the row requires.
- Counts and word measurements in Step 1 and Step 4 were run against the current source, not remembered. Both forbidden strings in Finding 1 were confirmed by exact `grep -o`, not by reading.
- No research check was blocked. Nairne et al. (2007) is already cited and already in the reference list.

---

## Step 9 — Apparatus retrofit *(proposed, not installed — objectives are pedagogical commitments)*

Run **last**, after the body decisions above are resolved, so the prompts test the chapter as it finally reads.

1. **Learning Objective 3** currently reads *"**Differentiate** explicit from implicit memory, and episodic from semantic memory…"* — pure term discrimination, and it is the objective that would need to change most if Decision 3 lands. Proposed replacement: *"**Explain** how episodic experience compresses into semantic knowledge, and use that relationship — together with H.M.'s case — to distinguish explicit from implicit memory."* Tests the relation instead of the labels.
2. **Chapter Summary L210** already closes on lossy compression, correctly. But its middle sentence still describes explicit memory as splitting "into episodic and semantic," siblings again. One clause fix if Decision 3 lands.
3. **Undecided, needs you:** should `schema` become a bolded Key Term if Decision 3 installs the concept? The draft deliberately avoids the word so the coherence checker does not demand an entry — the same move Ch. 5 made with *depersonalization*. Adding the term is a separate call from adding the idea.
4. **Not acted on:** `backward digit span` is bolded with no Key Terms entry (see Decision 5). Pre-existing.
