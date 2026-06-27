# Design and Pedagogy Log

Status: working log for non-chapter-draft development decisions.  
Purpose: preserve the work that sits around chapter drafting: theoretical framing, visual strategy, Learning Labs, demos, AI pedagogy, attribution workflow, and prompts/instructions handed to Claude or Codex.

## How to use this file

Use this file for:

- theoretical framing decisions that are not ready for `GPT_spine.md` or `pipeline/theoretical-spine.md`
- Learning Lab ideas and lab workflow decisions
- demo/activity ideas
- figure and visual strategy
- AI-after-effort pedagogy
- source, license, attribution, and image workflow decisions
- prompts or instructions handed to Claude/Codex
- open design questions

Do not use this file for:

- full chapter drafts
- final line edits that belong directly in chapter files
- current production status that belongs in `HANDOFF.md`
- deep semanticization theory that belongs in `pipeline/concepts-semanticization-log.md`

## Working division of labor

Claude’s main role in this project has tended to be chapter drafting, revision implementation, HTML conversion, citation cleanup, and repo plumbing.

This log records the surrounding design work: the conceptual framework, visuals, demos, Learning Labs, activities, AI pedagogy, figure/source workflow, and decisions that should inform future drafting.

This is not a rigid rule. It is a practical orientation so future sessions can find the right context quickly.

## Key files to check

- `HANDOFF.md` — current production status, next-up items, append-only session log
- `GPT_spine.md` — compressed philosophy / durable orientation
- `pipeline/theoretical-spine.md` — operational framework for chapter review and drafting; Claude is currently preparing a v2
- `pipeline/concepts-semanticization-log.md` — rough theory-development log on concepts, schemas, semanticization, lossy compression, and emotions-as-mattering
- `pipeline/design-pedagogy-log.md` — this file; non-drafting design decisions, labs, demos, visuals, AI pedagogy, and workflow notes
- `pipeline/interactive-components-spec.md` — embedded chapter-level interactive components
- future `pipeline/learning-labs-spec.md` — standalone `/docs/labs/` pages, if/when created

## 2026-06-27 — Theoretical Spine v2 / semanticization workflow

Decision: do not update the ChatGPT project instructions yet. The working changes belong in repo logs and spine files first.

New theory-development log created:

- `pipeline/concepts-semanticization-log.md`

Purpose of that file:

- preserve rough working ideas about concepts, schemas, semanticization, lossy compression, Piaget, prototypes/exemplars, Huth semantic maps, stereotypes, Dunning-Kruger, expertise, AI, teaching, and the newer “concepts predict meaning / emotions predict mattering” distinction
- serve as a discovery log and source of reusable framing
- not serve as chapter prose

Current emerging trunk loop:

> partial input → attention/selection → compression → concepts/schemas → prediction → action/regulation → error → updating or defense

Important refinement:

Concepts and prediction are reciprocal, not linear. Concepts enable prediction; prediction error refines, differentiates, or protects concepts.

Key addition for future spine revisions:

Compression is adaptive but lossy. The same compression that makes perception, memory, social judgment, language, expertise, and AI useful also produces characteristic errors.

Core lines to preserve:

> The mind is not wrong because it is broken. It is often wrong because it is using a compressed model that is usually good enough.

> Concepts predict meaning. Emotions predict mattering.

## 2026-06-27 — Activity and Learning Lab implications

New activity pattern to reuse across the textbook:

> predict → classify → explain → compare → revise → transfer

This is the pedagogy version of the spine. It creates retrieval, exposes compression, produces safe prediction error, and forces semantic revision.

High-priority activity/lab ideas:

1. Lossy Compression Lab — students compare perceptual illusions, false memory, source confusion, stereotypes, diagnosis reification, expert premature closure, and AI hallucination as examples of useful compression failing at the edges.
2. Semantic Map Lab — students build a concept from examples, map typical and atypical cases, compare with a peer, revise, then use AI only after effort.
3. Concepts Predict Meaning; Emotions Predict Mattering — students separate semantic predictions from embodied/appraisal predictions in ambiguous social situations.
4. Diagnosis Is a Label, Not a Cause — students sort symptoms, labels, possible causes, and treatment targets to prevent diagnosis reification.
5. Borderline Case Machine — students classify edge cases, rate confidence, identify the feature that mattered, and revise after comparison.
6. Expert Grain Size Demo — students compare novice vs. expert categorization in familiar domains to show that expertise changes semantic resolution.
7. AI Gist Without Verification — students compare their own answer with AI output and mark claims as supported, plausible-but-unchecked, wrong, vague, or useful.

Design requirement for labs:

- accessibility-first
- privacy-preserving
- evidence-calibrated
- no claim that a short individual activity is a valid experiment on the student
- AI-after-effort, not AI-as-shortcut

## 2026-06-27 — Visual/figure implications

The new spine suggests a reusable visual grammar:

- partial input
- compression
- concept/schema
- prediction
- prediction error
- revision or defense

Possible signature figure:

**From Episodes to Concepts**

Left: individual episodes/examples  
Middle: compression into prototype/exemplar cloud  
Right: differentiated semantic map  
Bottom arrow: experience → compression → concept → prediction → feedback → revision

Caption draft:

Concepts are not dictionary entries. Repeated examples compress into semantic neighborhoods that support prediction. Typical cases sit near the center; atypical cases stretch the boundary; feedback and expertise differentiate the map.

Possible course-wide prompt attached to illusions, memory errors, stereotypes, diagnosis labels, and AI mistakes:

> What did the system preserve? What did it discard? When did the discarded information become important?
