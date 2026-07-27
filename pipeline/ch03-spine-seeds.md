# Chapter 3 — Spine Seeds (for instructor decision)

**Drafted:** 2026-07-27
**Status:** Editable seed. Nothing here is book prose. Chat iteration per the instructor's standing preference (see `HANDOFF.md`) — no `.docx` packet.
**Inputs:** `pipeline/theoretical-spine.md` §6 (chapter map), §8 Ch. 3 Layer 3 notes; `pipeline/evidence-commitments.md` Ch. 3 rows; `source/chapters/ch03-neuroscience-biological-bases.md`.

---

## Step 1 — Thread-count diagnostic

Ch. 3's chapter-map row (`theoretical-spine.md` §6): *"Biological substrate for sense-making; action-selection as the origin of nervous systems; serotonin/dopamine as action-selection signals; chemical imbalance as misconception to correct."*

| Thread | Occurrences | Status |
|---|---|---|
| "Action-selection" | 4 | **Healthy.** Opens the chapter (`Why Do We Have a Brain?`), carries the bilateral-symmetry argument, and is the chapter's actual spine — not a bolt-on. |
| "Serotonin" | 11 | **Healthy.** |
| "Dopamine" | 16 | **Healthy.** RPE is correctly scoped per the evidence-commitments row and the drafting rules (§7). |
| "Chemical imbalance" (literal phrase) | 1 | **Present only as a lab title**, not in body prose. Body prose corrects the *content* of the misconception at length (the "Do Not Confuse: Chemical Influence vs. Chemical Cause" box, Moncrieff et al.) but never names its *source* — see finding below. |
| "Bilateral" / "cephalization" | 5 / 3 | **Healthy.** |
| "Working memory" / "Cowan" | 0 / 0* | **The finding.** See below. (*The one raw hit on "Cowan" is a false positive — Cowan, C. S. M., a coauthor in the Cryan et al. 2019 reference, not Cowan, 2001.) |
| "Model of [reality]" / "sense-making" (literal) | 1 / 0 | Present only as "video-camera model of memory" in the Connections table — never the master-loop sense. Likely fine: Ch. 3 is scoped as the *substrate* chapter, and the master-loop vocabulary is Ch. 4/5 territory per their own chapter-map rows (compression bottleneck, prediction). Flagging, not seeding — see *Flagged, not seeded* below. |

**This chapter is not in the same state Ch. 1 and Ch. 2 were in before their passes.** It already reads as substantially spine-installed — action-selection frames the opener, the chemical-imbalance and dopamine-RPE misconceptions are both correctly bounded per the evidence-commitments ledger, and the "Where This Fits" section and chapter question are already in place. The diagnostic did not turn up a zero-score thread the spine assigns to the chapter's core four. It turned up one specific Layer 3 elaboration that was drafted for this chapter and never installed, and one incompleteness in how an already-installed correction is framed. Both are below.

## Step 2 — Evidence-commitments check

Ch. 3's nine rows in `evidence-commitments.md` (dopamine, Phineas Gage, H.M., neuropeptides, cortisol, tend-and-befriend/oxytocin, fMRI, chemical imbalance, absolutes) are all marked **installed**. Relevant to the seeds below:

- **Chemical imbalance row:** *"Same boundary as Ch. 1, and must not slide to 'antidepressants do not work.' Cite one year for Moncrieff consistently."* This is a claim-wording constraint on the correction itself. **Seed A below does not touch it** — naming the misconception's advertising origin is additive framing, not a reword of the bounded claim, and doesn't slide toward "antidepressants don't work."
- No row touches working-memory capacity or the PFC metabolic-cost hypothesis. **Seed B is not at risk of unbinding a committed claim** — it would be a new addition, not present in any form currently.

---

## Seed A — Name the misconception's source, not just its content

**Spine claim:** The chapter's Layer 3 note is explicit that this matters pedagogically: *"Students often arrive with this belief from advertising. It should be named and corrected explicitly."* The "Do Not Confuse" box currently does the second half — it corrects the content (Moncrieff et al., the aspirin/headache analogy) — but never says where the belief came from. This is the same shape as Ch. 2's finding: the chapter teaches the correction without naming the thing being corrected.

**Lead with:** what's already there. The box already opens with "**The claim:** Depression is caused by low serotonin..." — it just presents that claim as free-floating rather than naming it as something students have been sold, repeatedly, by name-brand pharmaceutical marketing since the 1990s (the spine's own framing, `theoretical-spine.md` §8).

**Arc:** setup (a claim you've probably heard stated as fact) → tension (where did that certainty come from, and was it earned) → payoff (**it came from advertising copy, not from the evidence — and the evidence never supported the simple version**).

**Payoff line seed:** insertion as a new sentence opening the existing "Do Not Confuse: Chemical Influence vs. Chemical Cause" box, before "**The claim:**":

> If you've heard depression explained as a "chemical imbalance," that framing did not come from a research consensus. It came largely from direct-to-consumer pharmaceutical advertising beginning in the 1990s, which needed a one-sentence mechanism simple enough to sell in thirty seconds.

**Prune candidate:** none proposed. The box is 207 words; the insertion is ~45 words and doesn't displace anything — it's a naming addition ahead of a correction that already exists.

**Watch:**
- Do not let this drift into "advertising lied," which risks the "antidepressants don't work" slide the evidence-commitments row specifically forbids. The existing box's aspirin/headache analogy and "SSRI efficacy is real" sentence already guard this; the insertion sits before them and doesn't touch their wording.
- Keep to one Moncrieff citation year, per the same row (chapter currently cites Moncrieff et al., 2023 consistently — insertion adds no new citation).

---

## Seed B — The working-memory/metabolic-constraint thread (currently unused)

**Spine claim:** `theoretical-spine.md` §8 drafted this specifically for Ch. 3: working memory capacity is remarkably limited (~4 items; Cowan, 2001), and one hypothesis is that the prefrontal cortex — among the most metabolically expensive brain tissue — has its working-memory capacity constrained by energy as much as by evolutionary history. The note is explicit: *"Teach as a compelling hypothesis, not a confirmed mechanism."* It is a natural fit for the chapter's own frame — the chapter's structure table already says the frontal lobe/PFC covers "planning, action selection, voluntary movement, regulation, and goal maintenance," and the chapter thesis (biology as *constraint*, not just substrate) is exactly what this hypothesis illustrates. Currently zero words of it appear anywhere in the chapter.

**Lead with:** the frontal lobe/PFC row in the "Compact Map of Selected Structures" table (Section 5), which is the chapter's existing home for what the PFC does — the constraint framing would attach there as the natural next sentence, not a new topic.

**Arc:** setup (the PFC plans, regulates, holds goals in mind) → tension (so why can you only hold about four things in mind at once?) → payoff (**one hypothesis: that ceiling may be a metabolic price tag, not a design flaw — the same tissue that makes planning possible is some of the most expensive real estate in the brain**).

**Payoff line seed:** new short paragraph after the structure table (Section 5, after line ~249, before "### Brain Regions Are Specialized, but Behavior Is Networked"):

> One constraint is worth naming here. Working memory — holding a small amount of information active and available — is remarkably limited, typically to only about four items at a time (Cowan, 2001). The prefrontal cortex is among the most metabolically expensive tissue in the brain. One hypothesis worth taking seriously, though not yet confirmed, is that this narrow ceiling is set partly by energy cost: a wider working-memory window might simply be too expensive to run continuously, not merely a feature evolution never got around to expanding.

**Prune candidate:** none proposed as drafted — the addition is ~75 words in a 1,051-word section, and doesn't displace the table or the Lego-brain-thinking argument that follows it.

**Watch:**
- Keep it a hypothesis, explicitly, both times it's stated (per the spine note) — the drafted line hedges twice ("one hypothesis," "not yet confirmed") deliberately; do not tighten that in editing.
- Do not let "metabolically expensive" imply the *whole* brain's structure is explained by energy minimization — this is scoped to one specific capacity limit, not a general theory of neural architecture.
- This is genuinely additive (Step 4, below) rather than a reordering — flag as the one candidate in this seed set that costs real words rather than riding on an existing sentence.

---

## Step 4 — Trade measured

| Seed | Host section (words) | Addition (words) | Prune |
|---|---|---|---|
| A | 207 | ~45 | none |
| B | 1,051 (Section 5) | ~75 | none |

Total addition: ~120 words against a 8,129-word chapter body. No prunes taken in either case — both are small, targeted additions to sections with room, consistent with a chapter that's already mostly spine-installed rather than one carrying a structural gap.

---

## Flagged, not seeded

**The "sense-making"/master-loop vocabulary never appears in Ch. 3 by name.** Not proposing an insertion: the chapter map assigns the *compression bottleneck* and *top-down prediction* vocabulary to Ch. 4, and *attention as bottleneck control* to Ch. 5. Ch. 3's own framing — action-selection under a bilateral body plan, with metabolic/attentional limits — is functionally the same idea in this chapter's own vocabulary, and importing "model of reality" language here risks stepping on Ch. 4's install rather than reinforcing it. Flagging in case the instructor wants an explicit forward-reference (e.g., a sentence noting that the "select what matters" problem returns as the compression bottleneck in Ch. 4), but not drafting one unprompted — this is a scope question, not a naming gap.

**Working memory as ~4 items could also be cross-referenced forward** to wherever the book teaches short-term/working memory capacity in Ch. 8 (Memory), if Seed B is accepted. Not drafting a specific cross-reference sentence until Seed B itself is decided.

---

## DECISIONS RETURNED — 2026-07-27

| # | Decision | Outcome |
|---|---|---|
| 1 | Seed A (advertising-origin naming) | **Accepted as drafted.** Installed as a new sentence opening the "Do Not Confuse: Chemical Influence vs. Chemical Cause" box, before "**The claim:**". |
| 2 | Seed B (working-memory/metabolic-constraint) | **Accepted as drafted.** Installed as a new paragraph after the structures table, before "### Brain Regions Are Specialized, but Behavior Is Networked". |

Net: both insertions installed as written, no prunes. Cowan (2001) added to the References list (alphabetical, after Bartz et al. 2011) and to `evidence-commitments.md` Ch. 3 table, since Seed B introduces a new citation.

## Step 9 — Apparatus check after conversion

Ran both validators against the edited chapter:

- **`check_chapter_coherence.py`**: fail=2, review=4 — **identical counts before and after the edit**, confirmed by running against the pre-edit version via `git stash`. Neither insertion introduced a new fail or review item. The five persisting items (Cryan/Pol/Sapolsky/Van Horn narrative-citation parsing, Parasympathetic/Sympathetic key-terms-vs-body phrasing, the Horn(2012)-not-cited false positive, sixteen bolded-terms-not-in-Key-Terms items, summary at 401 words, and the Connections-anchor slugifier mismatch) all predate this pass and match `HANDOFF.md`'s documented false-positive classes (narrative-citation regex, Connections-anchor slugifier) or are pre-existing apparatus items out of scope for this seed. Not touched.
- **`lint_chapters.py`** (via rebuilt HTML): **14/14 PASS, 0 fails, 0 warnings**, including the rebuilt `03-neuroscience.html`.

No apparatus drift found — neither insertion is referenced by any Learning Objective, Key Term, or the Chapter Summary, and neither seed changes anything those currently claim, so nothing needs reconciling this time (unlike Ch. 11's retrofit finding).
