# Chapter 1 Canonical Revision Work Order

**Date:** 2026-07-17  
**Status:** approved for implementation after instructor review  
**Authority:** `pipeline/audits/ch01-pre-review-audit.md`

## Purpose

Implement the approved narrow revision of Chapter 1, preserving the chapter's instructor-authored voice and central argument. This is a revision, not a rebuild.

## Read first

1. `AGENTS.md`
2. `HANDOFF.md`
3. `pipeline/audits/ch01-pre-review-audit.md`
4. `pipeline/voice-brief.md`
5. `pipeline/chapter-spec.md`
6. `pipeline/html-conversion-spec.md`
7. `source/chapters/ch01-history-approaches.md`
8. `docs/chapters/01-history-approaches.html`
9. `docs/images/ch01/README_captions_alt_text_attribution.md`
10. `source/visuals-inventory.md`
11. `source/chapters/_provenance/ch01-history-approaches.md`

Inspect the actual repository state and recent commits before editing. Do not infer current state from this work order alone.

## Source authority

- Canonical prose: `source/chapters/ch01-history-approaches.md`
- Generated output: `docs/chapters/01-history-approaches.html`
- The source Markdown is authoritative. Revise source first, then regenerate or carefully rebuild HTML from the approved source.
- No checked-in Chapter 1 generator was identified in the audit. Confirm again before editing HTML. If none exists, perform a narrow, content-faithful HTML rebuild according to `pipeline/html-conversion-spec.md`.

## Editable files

Primary:

- `source/chapters/ch01-history-approaches.md`
- `docs/chapters/01-history-approaches.html`
- `docs/images/ch01/README_captions_alt_text_attribution.md`
- `source/chapters/_provenance/ch01-history-approaches.md`
- `source/visuals-inventory.md` only for Chapter 1 rows if needed
- `pipeline/audits/ch01-pre-review-audit.md` only to mark implementation/validation status after completion
- `GPT_project_log.md` and `HANDOFF.md` only after successful validation

Do not edit any other chapter, shared CSS, shared JavaScript, lab, figure binary, or site navigation unless a concrete Chapter 1 validation defect proves a shared-layer change is necessary. If a shared-layer issue appears, stop and report it instead of broadening scope.

## Must preserve

Preserve the following teaching and voice assets:

- the common-sense misconception opener;
- the Milgram prediction-versus-outcome structure, with citation repair rather than removal;
- “treat that feeling as data, not as proof”;
- “scar tissue from a century of productive arguments”;
- the dinner-party/airplane mentalist scene and peer-review punch line;
- the flinch example separating behavior from inferred mental process;
- the history table organized by question, contribution, and limitation;
- the explicit animal behavioral ecology identity and why-versus-how framing;
- the AI connection's central claim that behavior/output is evidence, not mechanism;
- “Performance tells us what a system can do. By itself, it does not tell us how the system did it”;
- the phone-checking multiple-perspectives application;
- the biopsychosocial model as an organizing framework rather than a completed causal explanation;
- the scientific self-correction conclusion: possible, not automatic.

Do not genericize the prose. Do not replace distinctive sentences merely because a conventional textbook formulation is available.

## Approved editorial changes

### 1. Historical architecture

Revise Learning Objective 2 and any downstream wording that implies a clean relay race in which one school's limitation forced the next school's emergence.

Teach the stronger architecture already present in the prose: schools overlapped, competed, and responded to unresolved problems. Preserve the problem-organized table.

### 2. Wundt and Titchener

Make the distinction consistent at Psych 101 depth:

- Wundt founded an experimental psychology laboratory and used trained introspection within a broader framework often called voluntarism.
- Titchener developed structuralism more specifically.

Repair the table, glossary, summary, and Review Question 2 so they do not refer to “Wundt's structuralism.” Do not add a long historiography detour.

### 3. Watson and Skinner

Do not collapse Watson and Skinner into the same claim that psychology should simply abandon all unobservable mental states.

At introductory depth:

- Watson's methodological behaviorism restricted psychology to publicly observable behavior.
- Skinner's radical behaviorism treated private events as behavior too, while insisting that explanation remain grounded in environmental histories and functional relations.

Revise only the minimum surfaces needed: table wording, behaviorism paragraph, summary, glossary, and affected answer rationales. Preserve the dog/treat example and the Skinner–Chomsky language transition.

### 4. Humanistic psychology and therapeutic alliance

Preserve the modern evidence bridge, but narrow the causal claim.

The chapter may state that therapeutic alliance reliably predicts outcome across therapy types and remains an important common factor. It must not say that the meta-analysis proves the relationship is the most important causal mechanism independent of technique.

Replace Review Question 11 with a stronger application or integration item rather than keeping an item whose keyed answer overstates causality.

### 5. Perspective weighting and depression example

Preserve the multiple-perspectives demonstration, but make evidentiary weighting visible.

Do not present all historical perspectives as equally supported causal explanations. In the depression example:

- retain biological, behavioral, cognitive, and sociocultural factors as evidence-informed levels of analysis;
- describe psychodynamic ideas as historically influential but less strongly supported as a general causal account;
- keep the biopsychosocial model as an organizer that still requires specified mechanisms.

Do not turn the example into an exhaustive depression review.

### 6. Evolutionary and gene–environment wording

Preserve the behavioral-ecology framing and the caution against just-so stories.

Replace any wording that implies every psychological trait has a simple genetic contribution. Prefer wording such as: most traits studied in psychology reflect development within environments, often including genetic differences, rather than genes and environments acting as competing causes.

Keep evolutionary claims as testable function questions supported through comparative, developmental, cross-cultural, genetic, and ecological evidence.

### 7. AI retrieval prompt

Keep the AI connection. Revise the retrieval prompt so it does not force the false binary “genuine reasoning or memorized association.”

Test the actual principle: why fluent output alone cannot identify the internal process or mechanism that produced it, and what additional converging evidence would be needed.

### 8. Objectives and assessment integration

Keep 4–7 learning objectives. Ensure at least one objective explicitly names an applicable APA IPI theme, especially that psychological science relies on empirical evidence and revises conclusions as evidence changes.

Keep eleven review questions unless a compelling reason requires a different count. At least two questions must require cross-section integration or transfer. Good targets include:

- distinguish a historical school's question from a modern perspective's use;
- apply several perspectives to one novel behavior while recognizing that evidence weights them differently;
- distinguish observable performance from inferred mechanism;
- distinguish biopsychosocial organization from a completed causal explanation.

Retain hidden rationales and explain why distractors are tempting.

### 9. Chapter 13 connection

Revise the Connections row so the biopsychosocial model is not described as a framework for diagnosing disorders. Align with Chapter 13's settled architecture: it organizes biological, psychological, and social contributors to vulnerability, maintenance, and treatment planning; diagnosis classifies patterns and does not itself specify cause.

Add working destination links to chapter files during HTML regeneration where the conversion pattern supports them.

### 10. Citations and references

Verify against primary or authoritative sources before finalizing:

- the source for the 39 psychiatrists' prediction and the “one in a thousand” estimate;
- the observed 26-of-40 Milgram result;
- the Wundt/Titchener distinction if new historical wording is added;
- the therapeutic alliance meta-analysis wording;
- the rejection of a simple chemical-imbalance account;
- Fischhoff and Turing bibliographic details.

Do not add citations merely to preserve an overextended claim. Narrow the claim first.

Remove the public-facing note saying references were only checked against secondary sources once direct verification is complete.

### 11. Figures and metadata

Do not redesign or regenerate images in this task.

- Retain Figure 1.1 and the portrait strip unless direct inspection reveals a concrete defect.
- Retain the Skinner/Chomsky/LLM figure's teaching function.
- Resolve the visible numbering gap created by the removed Maslow figure. Prefer renumbering the current Figure 1.3 to Figure 1.2 across source, HTML, caption, alt text, manifest, and inventory. Do not embed figure numbers in the image itself.
- Synchronize Figure 1.2 authorship wording across source, HTML, and manifest.
- Replace the portrait-strip editorial placeholder in source with a durable source representation compatible with the project's conversion workflow.
- Expand the Chapter 1 manifest to include source page/creator, license, modifications, attribution text, public-sharing status, and caveats for every active image.
- Confirm actual image paths and inspect the binaries directly before approval.

### 12. HTML structure

After source approval, regenerate or carefully rebuild the HTML.

- Preserve the dynamic sidebar loader already used by the live page.
- Add 2–4 descriptive `<h3>` subsections within each numbered section and an `.in-section-nav` block immediately after each section `<h2>`.
- Subsection titles must expose the chapter's real argument rather than mechanically dividing paragraphs.
- Preserve callouts, tables, portrait strip, figures, review/details structure, glossary, Further Reading, References, and navigation.
- Do not patch only the visible text while leaving source/HTML drift.

## No required new lab

Do not build a Chapter 1 Learning Lab in this task. The chapter already contains sufficient retrieval and application opportunities. A prediction/calibration activity may be considered later as an optional enhancement, not a completion requirement.

## Validation gates

Before declaring completion:

- source and HTML semantic parity;
- no wording that implies a forced linear succession of schools;
- Wundt/Titchener distinction consistent across table, prose, summary, glossary, and questions;
- Watson and Skinner not collapsed into one historically inaccurate doctrine;
- alliance language describes a robust association without declaring a uniquely important independent causal mechanism;
- depression example distinguishes historical relevance from evidentiary support;
- biopsychosocial Chapter 13 connection does not treat the framework as diagnostic;
- AI retrieval prompt tests mechanism inference rather than reasoning-versus-memorization;
- at least two review questions require integration or transfer;
- at least one objective explicitly names empirical evidence and revision with new evidence;
- visible figure numbering sequential and synchronized across source, HTML, manifest, and inventory;
- portrait provenance and public-sharing status documented;
- actual image files opened and inspected;
- all image paths resolve and alt text is non-empty with no leading-dash artifacts;
- four numbered sections have descriptive subsections and valid in-section navigation;
- Connections contain valid internal anchors and destination links;
- eleven review answers remain hidden in valid `<details>` structures;
- Key Terms populated and alphabetized;
- Further Reading separated from References;
- no bad ` ? ` mojibake;
- no malformed ampersands, broken local links, duplicate IDs, or broad line-ending-only rewrite;
- desktop, portrait-mobile, and landscape-mobile checks for tables, portrait strip, figures, captions, navigation, and disclosure controls;
- run the repository chapter linter and any relevant local validation scripts;
- inspect `git diff --check` and review the actual diff for unintended prose loss.

## Completion and project state

After validation:

1. Mark `pipeline/audits/ch01-pre-review-audit.md` implemented and validated, including the canonical revision commit.
2. Append a concise entry to `GPT_project_log.md` with date, scope, files changed, decisions, validation, and remaining issues.
3. Update `HANDOFF.md` to reflect Chapter 1's actual current state and the next concrete project action.
4. Put any genuinely deferred visual/browser issue in `PROJECT_BACKLOG.md`; do not duplicate it across state files.

Do not include private chain-of-thought in any repository record.