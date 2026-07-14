# Psych101 — Current Handoff

**Last updated:** 2026-07-14 (Chapter 9 audit/revision session)  
**Canonical repository:** `C:\GitHub\psych101` — see `pipeline/claude-work-environment.md` for Claude/Cowork environment cautions.  
**Current branch:** `main`. The Chapter 9 comparison draft, two replacement SVGs, figure metadata, and follow-up specification are committed on the remote.

This file is overwritten with present state. Permanent rules live in `AGENTS.md`; chronological history lives in `GPT_project_log.md`; durable deferred work lives in `PROJECT_BACKLOG.md`.

## Current state

Chapter 9 has been audited for conceptual accuracy, cognitive load, organization, figures, labs, and teachability. A non-authoritative comparison revision now exists at:

- `source/chapters/09-thinking-language-intelligence-2.md`

The authoritative source and rendered page remain unchanged:

- `source/chapters/ch09-thinking-language-intelligence.md`
- `docs/chapters/09-thinking-language-intelligence.html`

Agreed editorial decisions in the comparison revision:

- Keep **compression** as a learning metaphor connecting cognitive constraint to Chapter 8, with one explicit boundary that it is not a single literal mechanism.
- Keep a shorter AI connection centered on **fluency is not accuracy**.
- Remove the group-differences paragraph from the textbook chapter; handle the topic in class.
- Treat System 1/System 2 as processing modes, not literal modules.
- Do not force availability, representativeness, confirmation bias, framing, and anchoring into one mechanism.
- Tighten language-acquisition and intelligence claims without flattening the chapter's vivid teaching examples.

Two replacement original figures are committed:

- `docs/images/ch09/ch09_category_hierarchy_superordinate_basic_subordinate.svg`
- `docs/images/ch09/ch09_conjunction_fallacy_nested_sets.svg`

Their caption, alt-text, attribution, public-sharing, and caveat records are in:

- `docs/images/ch09/README_captions_alt_text_attribution.md`

Figure decision: do **not** rebuild the old bias/question-substitution Figure 9.9. The revised comparison table is more accurate. After rewiring, the IQ curve should be numbered Figure 9.9.

## Immediate next actions

1. Patch `source/chapters/09-thinking-language-intelligence-2.md`:
   - wire the corrected category-hierarchy SVG;
   - replace the Linda/bank-teller passage with the original Jordan campus-library/sustainability-club conjunction example;
   - wire the new nested-set SVG;
   - keep the former bias Figure 9.9 omitted;
   - renumber the IQ curve from Figure 9.10 to Figure 9.9.
2. Reconcile the Chapter 9 section of `source/visuals-inventory.md`.
3. Read the complete comparison draft end to end and decide whether it should replace the authoritative Chapter 9 source.
4. Only after approval, rebuild/reconcile `docs/chapters/09-thinking-language-intelligence.html` and browser-check the figures and lab link.

The exact narrow patch specification is in:

- `pipeline/audits/ch09-comparison-figure-followup.md`

## Validation and known risks

- The new SVGs are original, use light backgrounds and large labels, contain no embedded figure numbers, and have complete accessibility/attribution metadata.
- The comparison markdown still contains the Linda example and has not yet wired the two replacement SVGs.
- `source/visuals-inventory.md` is stale for Chapter 9 until the source wiring is completed.
- No generated HTML has been changed for this revision.
- The existing Chapter 9 fluid-intelligence rule-finding lab remains the preferred full Learning Lab; no second standalone lab is currently justified.
- Chapter 6 and Chapter 7 live browser checks remain outstanding unless completed in a later unlogged session.

## Important files

- `source/chapters/09-thinking-language-intelligence-2.md` — comparison revision under review.
- `pipeline/audits/ch09-comparison-figure-followup.md` — exact remaining wiring and inventory changes.
- `docs/images/ch09/README_captions_alt_text_attribution.md` — Chapter 9 replacement-figure metadata.
- `source/visuals-inventory.md` — must be reconciled after the comparison source is patched.
- `GPT_project_log.md` — chronological record of the Chapter 9 audit and decisions.
