# Repository Agent Instructions

These instructions apply to all agents — GPT, Codex, Claude, and Cowork — working in this Psych 101 textbook repository.

## Start-of-session read order

1. `AGENTS.md` (this file) — routing and operating rules.
2. `HANDOFF.md` — current state, active work, immediate next actions.
3. Task-specific source/specification files for whatever you're actually working on.
4. `pipeline/claude-work-environment.md` — only when operating in Claude or Cowork.
5. `GPT_project_log.md` — only when historical context on a specific past decision is needed.

Don't load the entire chronological project log for every task — `HANDOFF.md` should already tell you what's current.

## Project-state files

Read these files according to the task:

- `HANDOFF.md` — current state, active work, immediate next actions, and decisions needed. Overwrite rather than append. Keep concise (~500–1,000 words).
- `GPT_project_log.md` — chronological record of major completed agent-assisted work. Append entries for major completed tasks; don't rewrite history.
- `PROJECT_BACKLOG.md` — durable future and deferred work (editorial review, labs, figures, HTML/rendering, repository/workflow, open decisions). This repository does not use GitHub Issues for work tracking; `PROJECT_BACKLOG.md` is the durable backlog until that changes. Do not duplicate the full backlog inside `HANDOFF.md` — only the next 3–5 immediate actions belong there.
- `HANDOFF-ARCHIVE.md` — frozen historical record of past Session Log entries and superseded Current Status snapshots, preserved verbatim. Not actively maintained; read only when tracing specific past history that isn't in `GPT_project_log.md`.
- `pipeline/claude-work-environment.md` — Claude/Cowork-specific environment cautions (sandbox-mount staleness, canonical repo path, commit workflow). Read when operating in Claude or Cowork; other agents don't need it.
- `AGENTS.md` — permanent repository instructions and routing rules (this file).

Do not maintain the same information in multiple project-state files. If you find duplication, fix it in the file where it belongs and point the other file at it instead of copying content.

## Source of Truth

- Chapter prose and content changes belong in `source/chapters/*.md`.
- Generated chapter HTML lives in `docs/chapters/*.html`.
- Do not patch generated HTML directly unless explicitly asked or no checked-in generator exists.
- `pipeline/html-conversion-spec.md` defines HTML/render expectations.
- `source/visuals-inventory.md` tracks figure status (known to drift stale — cross-check per-chapter `docs/images/chXX/README*.md` files).

## Style

- Preserve the instructor-authored voice.
- Do not genericize prose into publisher prose.
- Keep explanations student-facing, precise, and teachable.

### Voice (Herr Prof. Dr. Awesome-Sauce)

The instructor's voice is **confident, forward, exciting, vivid, fun, and deeply intellectual.**
The audience is mostly first-year students straight out of high school — curious non-scientists,
not researchers. The job is to get real ideas *into their heads* and make them want more, not to
publish a defensible paper. Draft and edit to that standard. Consult `source/voice_profile_merged.csv`
before drafting any chapter.

### Pre-line-edit checklist (apply to every chapter BEFORE line editing)

These rules are generalized from the instructor's completed line edits (Ch 1–8). Applying them up
front stops the same corrections from being redone by hand in every chapter.

1. **Do not qualify — and never over-qualify.** State the point with authority. Cut academic hedges
   the moment they blunt the idea: "if imperfect," "though those are variable," "reliably harder,
   because…," "remains an area of active research," "not by itself explain," "this doesn't prove."
   These read as research-paper caution and cost students the very point they needed. When a genuine
   caveat matters, state it **once, plainly, and move on** — never stack a second sentence that
   re-hedges the same idea (see the Ch 4 predictive-coding rule: keep one qualification, delete the
   repeat).

2. **Cut epistemological throat-clearing.** Delete meta-commentary about what a study "does not
   establish," "why a vivid case is not a surgical experiment," "none of this is a hierarchy," etc.
   Teach the finding; don't narrate the philosophy of science around it unless that IS the lesson.

3. **Lower cognitive load; cut word count.** Recurring instructor notes: "Quite wordy, lets adjust,"
   "Shorten, high cognitive load," "Make it easier to read," "Need to simplify." Shorter sentences,
   fewer clauses, one idea at a time. If a sentence survives having words removed with the same
   meaning, remove them.

4. **Keep the real mechanism — in vivid plain language.** Cutting hedges is not cutting substance.
   The instructor *adds* concrete causal mechanism when it's missing (reuptake → enzyme breakdown;
   ATP → adenosine → sleep pressure → caffeine "crash"; BOLD hemodynamics). Explain how it actually
   works, in words a freshman can picture.

5. **Gloss terms inline with `(i.e., …)`.** Define on the spot rather than in dense stand-alone
   sentences: "ganglia (i.e., group of neuron cell bodies)," "chatbot (i.e., LLM, generative AI like
   ChatGPT or Claude)." Fast, low-load, keeps momentum.

6. **Tune every example to THIS cohort.** Reach for what first-years care about: SAT/IQ scores,
   video-game performance, texting while studying, all-nighters vs. spaced practice, COVID as their
   generation's flashbulb memory, ChatGPT/Claude. Prefer the relatable everyday *consequence*
   ("pulling an all-nighter is more work and less payoff than 15–30 minutes every day").

7. **Stay current and forward-looking.** "Chatbots are yesterday; they need to know about tomorrow —
   it's college." Where tech is the example, reach for the frontier (agentic AI, current models),
   not last year's version.

8. **Mirror how the instructor actually teaches — prune what he doesn't.** Content he skips or finds
   dull in lecture (e.g., sleep apnea/insomnia detail, self-reference effect) is a candidate for
   cutting, not padding. The book should track his emphasis, not exhaustively cover a syllabus.

9. **Make the point land — and give it the "why."** State the takeaway plainly and anchor it in the
   recurring **evolutionary / comparative "animal model"** framing (an organism remembers what helps
   it predict *now*; connections that aren't used decay). Don't bury the payoff under caveats.

10. **Format for the eye.** Bold the load-bearing verbs/terms, and convert dense serial prose into
    parallel bullets where it lowers load (misconception demos, hit/miss/false-alarm/correct-rejection,
    rods/cones, bottom-up/top-down, Gestalt principles). Paragraph breaks separate demonstration,
    interpretation, and forward pointer.

**One-line test before submitting prose:** *Would this excite a curious 18-year-old and make the
point unmissable — or does it read like a hedged journal paragraph?* Edit toward the former.

### Keep the story (the additive half — don't let compression flatten the narrative)

The checklist above is mostly *subtractive*. Applied alone it produces prose that is accurate, lean,
and lifeless. Cutting hedges is necessary but not sufficient — every passage also needs a **narrative
spine**, or the story is lost even when every sentence is correct.

Diagnose the failure by asking: **is this term-driven or story-driven?** If the sentences exist to
deliver definitions in sequence (term → definition → next term → definition — a "definition march"),
the story is gone. Terms should be *earned by* the story, not the thing the story is built around.

Restore the spine:

- **Lead with the image or the stakes, not the definition.** Open on something the student can
  picture or care about; let the technical terms arrive to explain what they're already looking at.
  (E.g. a newborn brain is "*overgrown*" — start there, then name synaptogenesis.)
- **Give every passage one clear arc:** setup → tension/process → payoff. Most chapter passages have
  all three beats already but ordered as definitions, so the arc never lands.
- **Put the payoff to work as the engine, not a tacked-on final clause.** The most exciting line
  (usually the evolutionary / "why it matters for the organism" point) should drive the passage, not
  trail it. If the best sentence is stranded at the end, the paragraph is built backwards.
- **Turn flat catalogs into part of the story.** A bare list of mechanisms is inert; frame what the
  list is *doing* in the narrative (e.g. "experience does much of the carving — but not alone: …").
- **Prefer verbs with motion and images** (overbuilt, carves, sculpted, exploding) over static
  is/are/consists-of constructions. The animal-model / evolutionary frame is the recurring engine.

## Figures

- Prefer original explanatory diagrams.
- Do not embed figure numbers inside images.
- Preserve captions, alt text, attribution, and public-sharing status.
- Keep figure creation and figure wiring as separate steps — do not wire a figure into chapter HTML unless explicitly asked, even if you just created it.
- Expandable-figure implementation details (the `.expandable` CSS / `figure-expand.js` pattern) live in `pipeline/html-conversion-spec.md` §9.

## Validation

- Check content, not just tag existence — this applies to generated chapter HTML as much as to source markdown.
- Validate no bad ` ? ` separator mojibake.
- Validate populated key terms when source has terms.
- Validate figure paths, non-empty alt text, and no leading dash artifacts.
- Validate Further Reading items are separated.
- Validate review/details structure is preserved.

## Logging

- For major tasks, append concise entries to `GPT_project_log.md`.
- Do not include private chain-of-thought.
