# Chapter 6 (→ 7) Learning — Spine Re-Alignment Work Order (TEMP)

> **Status:** planning document / work order, not approved chapter text.
> **Created:** 2026-07-03. **Target file:** `source/chapters/ch06-learning.md` (currently v0.3).
> **For:** a Sonnet execution pass. Read this file, then apply the edits to `ch06-learning.md`.
> **Delete when:** the edits below are applied and the chapter is re-versioned to v0.4.
>
> **Why this file exists:** The learning chapter already carries a "theoretical spine revision applied" banner (v0.3), and the `ChatGPT_spine_revisions_proposal.md` deliberately excluded Chapters 3–6 from scope. So this is the equivalent spine pass for Learning — but it is a **polish + consistency + split-repair** job, not a rebuild. Most of the spine content is already present. The single most urgent items are the numbering breaks introduced by the Ch5/Ch6 Consciousness/Sleep split (Sessions 58–59), which left several cross-references pointing at the wrong chapters.
>
> **Working spine:** psychology as biological sense-making under constraint (`pipeline/theoretical-spine.md`).
> **Voice:** consult `source/voice_profile_merged.csv` / `pipeline/voice-brief.md` before rewriting any prose. Do not import Wade/King/Myers wording; LRN-011 (Shaping) and LRN-016 (Dopamine/Sapolsky) are flagged — keep the existing v0.3 handling.

---

## 0. How to use this file

Priority order (do the top block first — it is factual-correctness, not taste):

1. **Section A — Numbering & cross-reference repair.** Objective errors from the split. High confidence.
2. **Section B — Spine-framing prose.** Make already-implicit spine moves explicit. Judgment calls; keep light.
3. **Section C — Drafting-rule checks.** Two small accuracy items the spine explicitly flags.
4. **Section D–F — Template extras** (Learning Lab / images / videos), to match the treatment the other 9 chapters got in the proposal. These are *specs to hand off*, not chapter prose.

**Two decisions belong to Jon before Section A can be fully closed** — see Section A.0. Where a target number depends on those decisions, the edit is written as a conditional and marked ⚠️DECISION.

---

## A. Numbering & cross-reference repair (HIGH PRIORITY, high confidence)

### A.0 — Chapter map (LOCKED by Jon, 2026-07-03)

Both open decisions are now settled:

1. **Split reconciled.** The Ch5/Ch6 Consciousness/Sleep split (+1) is confirmed. The spine's §6 map still shows the *pre-split* order and **must be updated to match — separate repo-wide task; flag in HANDOFF.**
2. **No Personality/Social swap; Personality folds into Social.** Personality is **not** a standalone chapter — its worthwhile material is glossed inside Social Psychology (Ch 11). The split's +1 and the merge's −1 cancel, so the book lands back at **13 chapters**. There are **no open ⚠️DECISION cells left for this chapter.**

**Final chapter map (use these numbers exactly):**

| # | Chapter |
|---|---|
| 1 | History & Approaches |
| 2 | Research Methods & Statistics |
| 3 | Neuroscience |
| 4 | Sensation & Perception |
| 5 | Consciousness |
| 6 | Sleep |
| **7** | **Learning ← this chapter** |
| 8 | Memory |
| 9 | Thinking, Language & Intelligence |
| 10 | Lifespan Development |
| 11 | Social Psychology (Personality glossed within) |
| 12 | Emotion, Stress & Coping |
| 13 | Disorders & Therapy |

### A.1 — Chapter title (line 1)

`# Chapter 6: Learning` → `# Chapter 7: Learning` (rename the file to `ch07-learning.md` only as part of the repo-wide renumbering pass, not here — but fix the in-file title/self-references now, or leave a single TODO note; do not create a half-renamed state silently).

### A.2 — "Where This Fits" opener (line 26) — **most important single fix**

Current opener reads: *"Chapter 5 closed by explaining how stimulant drugs hijack the dopamine system… this chapter opens up that same dopamine system…"*

This is broken two ways by the split:
- The chapter immediately **before** Learning is now **Sleep (Ch 6)**, not Consciousness.
- **Ch 5 (Consciousness) no longer closes on stimulants** — it closes on Chalmers / the hard problem. The stimulant/dopamine material (cocaine, Ritalin) still lives in Ch 5, but mid-chapter, not as the closing bridge. (Verified: `grep` shows stimulant content in `ch05-consciousness.md`, none in `ch06-sleep.md`.)

**Fix:** rewrite the bridge so it (a) transitions from **Sleep (Ch 6)** as the immediately-prior chapter, and (b) reaches back to the **Ch 5 dopamine/stimulant** content explicitly as "two chapters ago" rather than "the chapter that just ended." A clean seam: Sleep framed Ch 6 as the model's offline maintenance window; Learning is how the model gets *updated by experience* while online. Keep the existing dopamine hook, just re-anchor its chapter reference.

Also in this same paragraph — both are **already correct** under the locked map; verify and leave as-is:
- "Chapter 13's behavioral therapies" → Disorders & Therapy = **Ch 13.** No change.
- "Chapter 11's account of how social influence and aggression can spread" → Social Psychology = **Ch 11.** No change.

### A.3 — "Chapter 5's 'Process S'" in the AI Connection (line 153)

Two problems:
- **Number:** "Process S" (sleep homeostatic pressure, two-process model) now lives in **Ch 6 (Sleep)**, not Ch 5. (Verified: 5 hits in `ch06-sleep.md`, 0 in `ch05-consciousness.md`.) → change "Chapter 5's 'Process S'" to **"Chapter 6's 'Process S'."**
- **Substance (flag, don't silently keep):** Process S is a homeostatic *pressure* signal, not a *prediction-error/surprise* mechanism. The sentence uses it as an example of "a system that is surprised when expectation and reality diverge," which is a shaky fit. Recommend replacing the Process S example with a cleaner prediction-error referent already in the book — e.g., Ch 4's top-down perceptual prediction, or Ch 5's predictive-model/prediction-error-loop material — and reserve Process S for sleep. Leave for Jon's call, but do not leave a wrong mechanism attached to a wrong number.

### A.4 — "Chapter 5's account of stimulant drugs" (line 143)

**Keep "Chapter 5."** Stimulants (cocaine/amphetamines) are still in Ch 5 Consciousness. Only the *opener* (A.2) is wrong because it says Ch 5 *closed* on them and that it's the prior chapter. This mid-chapter reference is fine as a number; optionally soften "noted" if the reader hasn't just read Ch 5.

### A.5 — Connections table (lines 171–179) — internally inconsistent, fix all rows

| Row | Current target | Corrected target | Note |
|---|---|---|---|
| Extinction | Ch. 13 — Disorders & Therapy | **Ch. 13** (keep) | correct under locked map — no change |
| Little Albert / conditioned fear | Ch. 14 — Disorders & Therapy | **Ch. 13** — Disorders & Therapy | change 14 → 13 |
| Biological preparedness / taste aversion | Ch. 1 — History & Approaches | **Ch. 1** (keep) | correct |
| Observational learning / Bandura | Ch. 11 — Social Psychology | **Ch. 11** (keep) | correct — Social stays at 11; Personality glossed within |
| Mirror neurons | Ch. 9 — Social Psychology (Theory of Mind) | **Ch. 10 — Lifespan Development (Theory of Mind)** *(recommended)* | Ch. 9 is now Thinking/Lang/Intel — wrong. ToM's standard home is Lifespan Development (false-belief tasks); redirect there. Alt: Social (Ch 11). Confirm with Jon. |
| Dopamine as anticipation | Ch. 5 — States of Consciousness (review) | **Ch. 5 — Consciousness** (review) | number OK; retitle "States of Consciousness" → "Consciousness" |
| Intrinsic vs. extrinsic motivation | Ch. 9 — Motivation & Emotion | **Ch. 12 — Emotion, Stress & Coping** | no standalone "Motivation & Emotion" chapter; also reword the why-column ("when motivation becomes the chapter's central topic") to point at self-determination theory in Ch 12 |

### A.6 — Sweep for other stale numbers

After the above, do a full-chapter `grep` for "Chapter " and "Ch." and reconcile every remaining reference against the A.0 working map. Confirmed-OK as of this writing: LO5 → "Chapter 1" (evolution); Little Albert ethics aside → "Chapter 2" (research ethics). Re-verify these survive any map change.

---

## B. Spine-framing prose (MEDIUM PRIORITY — make implicit spine moves explicit; keep light)

The chapter already does the heavy lifting (master loop named in Section 4; extinction-as-new-learning; dopamine RPE; efficiency-vs-flexibility trade-off for habits). These are small surfacing moves, matching the proposal's four "spine-facing moves."

### B.1 — Surface the spine question in the opener
Spine question for this chapter (`theoretical-spine.md` §8): ***"Why is unlearning harder than learning?"*** It currently appears only in the *last* line of Where This Fits. The drafting rules say it should drive the **opener**. Lift it into the Misconception Opener or the top of Where This Fits so it frames the chapter, not just closes the intro.

### B.2 — Name the master-loop location up front
Per proposal rule 2 (sharper Where This Fits): state plainly that Learning is the **"prediction error → update or defend"** stage of the master loop — the chapter about how experience *revises* the model. Section 4 already says this; move a one-line version to the opener.

### B.3 — Name the trade-offs explicitly
The chapter invokes efficiency-vs-flexibility (habits) but leaves two spine trade-offs implicit. Extinction/spontaneous recovery/renewal is the book's cleanest case of **"prediction vs. updating"** and **"stability vs. change."** Add the labels where extinction is discussed (Section 1) so the cross-chapter vocabulary compounds. Don't over-label — one clause each.

### B.4 — Frame conditioning itself as compression
The lossy-compression lens is used once (habits). Consider one sentence, early, framing conditioning as the organism *compressing regularities of experience into predictions* (CS→US; behavior→consequence). This ties Section 1–2 to the spine's central device without a new section. Optional; do not force it if it bloats the (already over-target) word count.

### B.5 — Adopt the spine's unifying teaching line, learning-flavored
Spine's signature line: *"the mind is not wrong because it is broken; it is often wrong because it is using a compressed model that is usually good enough."* The learning analogue — old associations persisting under new learning (spontaneous recovery, renewal, habit intrusion) is **the model doing its job, not a bug** — is a natural one-liner for the Chapter Summary. It also directly answers the spine question (B.1).

---

## C. Spine drafting-rule checks (small, accuracy)

### C.1 — Wanting/liking (Berridge & Robinson)
Spine drafting rule: *"Do not say dopamine equals pleasure. The wanting/liking distinction matters for teaching addiction and the hedonic treadmill accurately."* Section 4 does anticipation-vs-pleasure well but never names **wanting vs. liking**. Add a short parenthetical or sentence introducing the distinction (dopamine tracks *wanting/incentive salience*, not *liking/hedonic pleasure*), citing Berridge & Robinson. This sharpens the existing stimulant-addiction point ("compulsive, anxious pursuit that persists even once the drug stops producing pleasure") — that *is* wanting-without-liking; name it. **Verify the citation before inserting** (Berridge & Robinson, 1998, *Brain Research Reviews*, or Robinson & Berridge, 1993 — confirm which).

### C.2 — Sapolsky "afterlife/retirement" extension (line 141)
Spine rule: *"Do not generalize the dopamine RPE mechanism to other emotional systems or stress physiology."* The Sapolsky extension to humans sustaining anticipation "for years… a retirement… a promised afterlife" is about **sustained anticipation**, not stress physiology, so it likely does not violate the rule — but it sits close to the line and is the chapter's least directly-cited claim (LRN-016 is flagged `needs-verification`). Action: keep, but add no new mechanistic weight; ensure it's framed as anticipation/motivation, not as a stress or pleasure claim. No change required if already so framed — just confirm.

---

## D. Learning Lab opportunities (spec to hand off — matches proposal template)

Content chapters link OUT to standalone labs in `docs/labs/` (per project instructions; Ch 2's `correlation-causation.html` is the vertical-slice precedent). Learning has **no lab yet** and is the **#1 demo request** in `pipeline/chapter-spec.md §5`.

1. **Conditioning Simulator (flagship; chapter-spec §5 #1).** Interactive: pair CS/US and watch a CR acquire; run extinction and watch spontaneous recovery/renewal; toggle the four reinforcement schedules (FR/VR/FI/VI) and compare response curves and resistance to extinction; contrast negative reinforcement vs. punishment on the same behavior. Directly dramatizes A.2/B.3 (extinction ≠ erasure).
2. **Four-Contingencies Classifier.** Scenario in → student places it in the add/remove × increase/decrease 2×2. Same *classifier* pattern as the Ch 2 vertical slice; low build cost; targets the chapter's single most common confusion (negative reinforcement vs. punishment).
3. **Dopamine-Shift Visualizer.** Animate the Schultz result: the dopamine response moving from reward → predictive cue across trials, with the dip on omission. Pairs with Section 4 and image D-image #3.

Recommend building #2 first (cheap, high pedagogical value, reuses the classifier scaffold), then #1 as the flagship.

## E. Image priorities (spec to hand off — proposal figure policy: one hard idea/figure, 16:9, few labels, no embedded figure numbers)

1. `ch07_extinction_not_erasure.png` — original CS→US association intact *underneath* a new inhibitory "CS→no US" layer; spontaneous recovery/renewal shown as the old layer resurfacing under stress/context change. (Carries B.1/B.3/B.5.)
2. `ch07_four_contingencies_2x2.png` — clean visual of the add/remove × behavior-up/down grid with one canonical example per cell. (Supports the negative-reinforcement-vs-punishment confusion.)
3. `ch07_dopamine_rpe_shift.png` — three-panel Schultz signal: response to unexpected reward → shift to predictive cue → dip on omission.
4. `ch07_learning_in_master_loop.png` — where Learning sits in the master loop (highlight the "prediction error → update or defend" arc). Reuses the book's master-loop motif for cross-chapter consistency.
5. `ch07_preparedness_taste_vs_shock.png` — Garcia & Koelling crossed associations: taste↔illness fast, audiovisual↔shock fast, the diagonals weak.

## F. Gemini video candidates (8–20s, 16:9, concept-first, no in-video text — per proposal video policy)

1. **Extinction is not erasure** — fresh paint over old paint; under "stress" the old color bleeds back through. (≈12s)
2. **Dopamine shifts to the cue** — the signal spike visibly migrating from the reward moment to the earlier predictive cue across repeats. (≈12s)
3. **Variable-ratio pull** — an unpredictable payoff sustaining steady responding where a predictable one lapses. (≈10s)
4. **Preparedness** — taste + illness snapping together instantly; light + illness refusing to bond. (≈10s)

---

## G. Out of scope / leave alone
- Do not re-open the LRN-011 (Shaping) / LRN-016 (Sapolsky) copyright handling — v0.3 already resolved these per the Ch4/Ch9 precedent.
- Do not trim for word count as part of this pass unless Jon asks; the v0.3 header already flags the ~5,340-word overage as Jon's call.
- Do not convert to HTML here; markdown first, HTML after Jon's line-by-line review (standard project order).

## H. Definition of done
- All Section A numbers reconciled against the final map Jon confirms; zero ⚠️DECISION cells left unresolved.
- Section B/C edits applied and voice-checked against `voice_profile_merged.csv`.
- Version header bumped to **v0.4** with a change summary; citation integrity re-checked (in-text ↔ References, both directions).
- D/E/F handed to the labs/figures backlog (log in the relevant HANDOFF/plan files, e.g. the chapter demos/activities memory notes); this TEMP file deleted.
