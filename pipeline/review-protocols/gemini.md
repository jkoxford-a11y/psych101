# Gemini External Audit Protocol

## Purpose

Gemini is useful in this repository as an **external, book-level hypothesis generator**. Its strongest role is to inspect a large cross-section of the textbook at once, notice recurring conceptual patterns, and surface candidates for verification that chapter-local editing can miss.

Gemini findings are **leads, not edit instructions**. Substantive findings must be verified against the current canonical source before implementation.

This protocol records observed strengths and failure modes from the August 2026 Psychology 101 conceptual-coherence audit so later sessions do not have to rediscover them.

---

## Source authority

For textbook-content audits, the current canonical chapter Markdown is authoritative:

- `source/chapters/ch01-history-approaches.md`
- `source/chapters/ch02-research-methods.md`
- `source/chapters/ch03-neuroscience-biological-bases.md`
- `source/chapters/ch04-sensation-perception.md`
- `source/chapters/ch05-consciousness.md`
- `source/chapters/ch06-sleep.md`
- `source/chapters/ch07-learning.md`
- `source/chapters/ch08-memory.md`
- `source/chapters/09-thinking-language-intelligence.md`
- `source/chapters/ch10-lifespan-development.md`
- `source/chapters/ch11-social-psychology.md`
- `source/chapters/ch12-emotion-stress-coping.md`
- `source/chapters/ch13-disorders-therapy.md`

Planning documents, audits, decision notes, handoff files, provenance files, archived drafts, pre-audit drafts, and other development material may explain history or intent, but **must not be used as evidence that a current problem exists**.

Before accepting a Gemini finding, verify it against the current canonical chapter.

---

## Best uses

Gemini is most useful when the task benefits from broad cross-chapter pattern detection rather than local implementation. Good uses include:

- prerequisite-map audits;
- terminology-drift audits;
- concept-lifecycle audits (`introduced -> developed -> reused -> integrated`);
- cross-chapter redundancy and callback audits;
- misconception architecture;
- assessment-alignment hypotheses;
- end-state student mental-model reconstruction;
- adversarial counter-framework review;
- identifying recurring conceptual or theoretical patterns that may be hard to see chapter by chapter;
- Deep Research checks for current scientific literature, when separately scoped and source-verified.

Gemini is particularly useful as an **outsider reader**: give it the finished canonical text and ask what intellectual structure it infers without allowing repo history to determine the answer.

---

## Strengths observed in the 2026-08 audit

The audit produced several useful signals:

1. **Cross-chapter prerequisite detection.** Gemini identified that Chapter 12 said Chapter 3 had introduced `individual differences in stress reactivity`, while the canonical Chapter 3 did not actually teach that prerequisite. Claude later independently verified this as a real defect.
2. **Macro-pattern recognition.** Gemini strongly detected the recurring use of prediction, construction, inference, biological constraint, and active regulation across chapters.
3. **Integration opportunities.** It noticed that Chapter 3's `action-selection problem` could potentially be recalled in later chapters where competing actions or behavioral control become salient.
4. **Whole-book reading stance.** It naturally treated the textbook as an intellectual argument rather than a collection of independent chapter summaries.
5. **Adversarial perspective generation.** It was able to suggest plausible ways an outside reader might overgeneralize the book's preferred explanatory lenses, which can be useful hypotheses even when the proposed repair is ultimately rejected.

These are reasons to use Gemini for discovery. They are not reasons to skip verification.

---

## Failure modes observed

The same audit exposed recurrent failure modes that must be anticipated.

### 1. Stale-source contamination

Gemini sometimes treated planning notes or older development material as if they described the current book. This led it to report already-resolved problems as current.

**Rule:** planning material can explain intent, never establish present-tense defects.

### 2. Failure to privilege canonical text after correction

Even after being instructed to use current Markdown as authority, Gemini later reintroduced claims contradicted by the canonical text or by the verification pass.

**Rule:** every final synthesis must be checked again against current source; do not assume a conclusion remains valid because Gemini repeated it confidently.

### 3. Pattern -> grand-theory inflation

Gemini correctly detected recurring prediction/construction themes, then repeatedly characterized the book as a unified `Predictive / Constructivist model of psychology`. Close reading showed the book deliberately uses these as recurring domain-level lenses while repeatedly declining a grand-theory commitment.

**Rule:** do not infer that recurring concepts constitute one theoretical framework unless the textbook explicitly makes that commitment.

### 4. Related concepts collapsed into identity

Gemini proposed treating social buffering as the `systemic outcome` of tend-and-befriend. The concepts are related, but that formulation overstates their theoretical relationship.

**Rule:** preserve distinctions among related mechanisms, functions, frameworks, and outcomes. A useful conceptual bridge is not automatically an identity claim.

### 5. Already-present bridges reported as missing

Gemini claimed tend-and-befriend and social buffering were disconnected even though the canonical Chapter 12 already links them in the current text.

**Rule:** verify the exact local passage before reporting terminology drift or a missing callback.

### 6. Uniformity bias

Gemini recommended standardizing a chapter-level `spine question` based partly on planning notes. A full canonical check showed that chapters use several intentional organizing devices, including questions, thesis echoes, and dashboards.

**Rule:** structural variation is not automatically inconsistency. Require a demonstrated novice-learning cost before standardizing chapter architecture.

### 7. Partial corpus described as book-wide

A later synthesis called itself a book-level audit while stating that it had evaluated only Chapters 2, 3, 4, 5, 6, 12, and 13.

**Rule:** Gemini must state exactly which canonical chapters it successfully inspected. Do not describe an analysis as `book-wide` unless all canonical chapters were examined.

### 8. Overconfident edit prescriptions

Gemini sometimes moved directly from a plausible pattern to a concrete sentence-level fix, even when the proposed wording strengthened the claim beyond what the source supported.

**Rule:** discovery and implementation are separate stages. The audit should identify the problem first; a second source-grounded pass should adjudicate whether any edit is warranted.

### 9. Persistence of an initial interpretation

Gemini's later final synthesis repeated the `Predictive / Constructivist spine` characterization even after an earlier audit had itself concluded that this description overstated the book's theoretical commitment.

**Rule:** treat final synthesis as another model output requiring verification, not as a guaranteed reconciliation of earlier findings.

---

## Mandatory Gemini pre-prompt

Use the following block before substantive textbook audits. Adapt the requested audit tasks after it, but preserve the source and verification rules.

> Treat the **current finished chapter Markdown files as canonical**.
>
> Planning documents, audits, decision notes, handoff files, provenance files, archived drafts, pre-audit drafts, and other development materials may help explain the history or intent of the book, but **must not be used as evidence that a problem currently exists**.
>
> Before reporting any issue:
>
> 1. Verify it against the current canonical chapter Markdown.
> 2. If a planning document identifies a problem that has since been repaired in the current chapter, classify it as **ALREADY RESOLVED** and do not recommend another change.
> 3. Do not assume that a terminology difference is a defect merely because identical wording is not reused.
> 4. Do not infer that recurring concepts constitute one grand theoretical framework unless the textbook itself makes that commitment.
> 5. Preserve distinctions the text intentionally makes between evidence, interpretation, mechanism, function, and theoretical framework.
> 6. Do not rewrite prose unless specifically asked. This is an audit.
> 7. State exactly which canonical chapters you successfully inspected. Do not describe the analysis as **book-wide** unless all canonical chapters were examined.
>
> For substantive findings, use this structure:
>
> **Current text / location -> claimed problem -> evidence -> likely student consequence -> proposed correction -> confidence**
>
> Classify each finding as:
>
> - CONFIRMED DEFECT
> - POSSIBLE IMPROVEMENT
> - INTENTIONAL / NO CHANGE NEEDED
> - ALREADY RESOLVED
> - UNCERTAIN
>
> Prioritize findings by likely effect on **first-year student understanding**, not by stylistic preference.
>
> Be skeptical of your own conclusions. If evidence is ambiguous, classify the finding as UNCERTAIN rather than converting it into an editing recommendation.

---

## Recommended audit sequence

When Gemini has broad textbook context, the highest-value sequence is:

1. **Prerequisite map** — find concepts later chapters assume and verify that earlier chapters actually establish them.
2. **Concept lifecycle** — trace major ideas from introduction through development, reuse, and integration.
3. **Terminology drift** — report only differences likely to produce a wrong novice model.
4. **Misconception architecture** — check whether misconceptions are replaced with useful models rather than merely negated.
5. **Assessment alignment** — compare objectives, explanatory emphasis, retrieval, labs, review questions, and key terms without demanding mechanical one-to-one alignment.
6. **Cognitive load** — identify concept-dense stretches lacking retrieval, examples, comparison, or consolidation.
7. **Cross-chapter redundancy** — distinguish productive retrieval from unnecessary re-teaching.
8. **Example/case reuse** — determine whether recurrence adds transfer or merely repeats material.
9. **Figure-prose coherence** — evaluate the novice mental model implied by figures/captions relative to prose when Gemini has access to the relevant visual information.
10. **Intellectual-spine reconstruction** — ask Gemini to infer the 8-12 propositions a strong student should retain six months later, using canonical text only.
11. **End-state student model** — reconstruct what an academically capable first-year student would believe after Chapter 13 and identify likely distortions caused by the book's actual framing choices.
12. **Adversarial counter-framework review** — identify defensible framing choices a knowledgeable instructor could dispute, without manufacturing false balance.

Do not require every audit in every session. Use the smallest set that answers the current editorial question.

---

## Verification workflow

The default multi-model workflow is:

**Gemini discovery -> source-grounded verification -> human judgment -> implementation -> validation**

In this repository that usually means:

1. **Gemini:** generate cross-chapter hypotheses and candidate defects.
2. **Claude Code or ChatGPT/Codex:** independently verify each substantive candidate against the current canonical repository source. Do not ask the verifier merely whether Gemini's reasoning `sounds right`; require chapter/section evidence.
3. **Human editorial judgment:** decide whether the verified issue is actually worth changing and whether the proposed change preserves the author's intended claim.
4. **Codex or Claude Code:** implement approved changes in canonical source.
5. **Validation:** regenerate/check derived HTML, links, figures, assessments, or other affected outputs as appropriate.

### Verification classifications

A verifier should classify each Gemini candidate as one of:

- `CONFIRMED DEFECT`
- `POSSIBLE IMPROVEMENT`
- `INTENTIONAL / NO CHANGE NEEDED`
- `EXTERNAL AUDIT FALSE POSITIVE`
- `UNCERTAIN`

For theoretical/framing recommendations, explicitly test whether Gemini has silently strengthened, narrowed, normalized, or conventionalized the author's actual claim.

---

## Example from the August 2026 audit

### Candidate that survived verification

Gemini noticed that Chapter 12's `Where This Fits` said Chapter 3 had introduced `individual differences in stress reactivity`, while Chapter 3 taught the ANS and HPA mechanisms but not individual differences in reactivity.

Independent verification classified this as a **CONFIRMED DEFECT**. The cleaner correction was to trim the inaccurate Chapter 12 recap rather than add new sourced content to an already-dense Chapter 3 merely to make the recap true.

### Candidates that failed verification

- A claimed missing bridge between `tend-and-befriend` and `social buffering` was already present in canonical Chapter 12.
- A recommendation to standardize a chapter-level spine question mistook intentional structural variation for inconsistency.
- The label `unified Predictive / Constructivist model of psychology` overstated a recurring pedagogical vocabulary into a theoretical commitment the chapters repeatedly decline to make.

These examples define the intended use of the protocol: **Gemini is valuable precisely because it generates hypotheses that are worth checking; verification determines which become edits.**

---

## Do not use Gemini output as a standing authority

Do not copy a Gemini audit wholesale into `AGENTS.md`, `HANDOFF.md`, the evidence ledger, or a chapter as if it were canonical project state.

If an audit produces a durable finding:

- implement the verified correction in canonical source;
- record major completed work in the normal project log when warranted;
- put deferred work in the backlog when warranted;
- update this protocol only when the audit reveals a reusable workflow lesson or model failure mode.

The protocol should remain short enough to be operational and specific enough to prevent recurrence of known failures.
