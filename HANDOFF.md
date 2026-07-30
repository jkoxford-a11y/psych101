# Psych101 — Current Handoff

**Last updated:** 2026-07-30
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `AGENTS.md` for operating rules.

## Current state

**All Chapters 1–13 have completed the spine-seed protocol.** The current working method is chat iteration, one chapter at a time, with instructor decisions shown before prose changes. The Chapter 5–6 and Chapter 8–13 decision sequence remains in the working tree; source Markdown and regenerated chapter HTML were validated after each approved install. Chapter 1's proximate/ultimate forward promise is fulfilled in Chapters 7, 8, 10, 11, and 13. No commit or push has been made for this sequence.

**Chapter 10 is complete and preserves the instructor's academic lineage and prose.** The approved ecological-dominance/social-competition paragraph retains Flinn, Geary, and Ward, while the proposed life-history-mosaic insertion and its coupled cut were explicitly rejected. The village and siblings lines remain. The adolescent proximate/ultimate language, Objective 1, and glossary decisions are installed and validated. Record: `pipeline/ch10-spine-seeds.md`.

**The evidence-commitment workflow has been paused and reframed.** A read-only comparison checked all 105 rows in `pipeline/evidence-commitments.md` against current chapter Markdown. The instructor then identified that treating ledger rows as prose directives would reintroduce the hedging and negation framing removed during the completed chapter audits. Therefore:

- Do **not** install the audit's proposed Charles Bonnet, H.M., rereading, attachment, or Baillargeon prose changes.
- Do **not** use an `installed` status as authority to restore language or content.
- Keep chapter prose frozen while the ledger itself is audited.
- A valid ledger row may bind a factual claim, but it must not prescribe hedge-heavy sentence form, resurrect retired prose, or override approved instructor language.

**One finding stands independently of the ledger and remains open for later approval.** Chapter 13's Moncrieff reference gives incorrect metadata for DOI `10.1038/s41380-022-01661-0`. The final journal citation is 2023, *Molecular Psychiatry, 28*, 3243–3256, matching Chapters 1 and 3. This is a factual production issue, not an invitation to reopen chapter voice.

**Completed chapter decisions remain settled.** Chapter 5's constructed-self apparatus, Chapter 6's simplified objective and summary, Chapter 8's episodic-to-semantic apparatus and deliberate `schema` decline, Chapter 9's simplified objective and retired group-differences thread, and the Chapter 11/13 proximate-ultimate installs should not be re-proposed through the ledger audit. Chapter 11's dissonance-as-updating thread remains separately open.

**A lecture-deck generator pilot is present as a separate, self-contained work area.** `pipeline/build_chapter_deck.py`, `pipeline/slides/`, `slides/`, and the `build/` line in `.gitignore` are presentation tooling, not chapter work. The generator is a sibling of `pipeline/build_chapter_html.mjs`: it reads the same canonical chapter Markdown and emits a 16:9 `.pptx`. It does not write to `source/`, `docs/`, or any pipeline record. Chapter 6 builds to 66 slides at 1.6 MB; built decks land in `build/` and are **not** committed, because a `.pptx` is a zip that git stores whole on every rebuild. Rebuild with `python pipeline/build_chapter_deck.py 6 --render`. Details in `GPT_project_log.md` (2026-07-28, Claude Code) and `pipeline/slides/README.md`.

Awaiting the instructor's markup pass on slide *grammar* — which slide kinds, density, and titles are wrong — before the ingest half (capturing PowerPoint edits back into the seed) is written. Grammar changes move slide keys, so building ingest first would orphan overrides. A marked-up copy should be saved under a distinct filename; the generated deck is overwritten by the next rebuild.

**Chapter 2's complete nine-figure sequence has been re-audited and repaired.** The rendered inspection found four defects that the 2026-07-15 review metadata missed: Figure 2.2's fourth dart cloud was precise rather than dispersed, Figure 2.3's lower positive-direction cue did not rise, Figure 2.5 overgeneralized sampling/assignment as external/internal validity and duplicated a marker ID, and Figure 2.6 used an overbroad title and overflowed its causal footer box. A later bookwide pass found a separate Figure 2.3 contradiction: the scatterplots ran positive-to-negative while the coefficient scale ran −1-to+1. Figure 2.3 is now a deterministic SVG whose five plots, signs, trend lines, colors, and scale all run strong negative through zero to strong positive. Figures 2.1, 2.4, 2.7, 2.8, and 2.9 required no change. All nine figures pass desktop, laptop, compact-desktop, portrait-phone, and landscape-phone expansion checks without page overflow.

**All seven P0 items in the temporary figure catalog are resolved.** Figure 12.3 was a valid PNG mislabeled as SVG; the asset, source reference, generated HTML, metadata, and inventory now use `.png`, and the browser serves it as `image/png`. Figure 9.3's invented and mechanically invalid water-jar sequence was replaced with an original SVG based on verified classic Luchins problems. The later A = 23, B = 49, C = 3 problem reaches 20 through both B − A − 2C and the simpler A − C route; all displayed arithmetic and the rendered figure were checked. Figure 6.3 now gives Process S and Process C separate scales: high Process S means greater sleep pressure, while high Process C means greater circadian alerting. Figure 4.5 now sends residual prediction error into an explicit model-update step; the updated model generates the next prediction and guides perception/action, while action produces new evidence. Figure 6.2 now uses a simplified anatomical inset placing the paired SCN in the anterior hypothalamus immediately above the optic chiasm, with retinal input and all five circadian-output arrows intact. Figure 4.9 now separates place coding from phase-locked timing and shows its 1,000-Hz example as a pooled volley in which three auditory-nerve fibers share cycles rather than one neuron firing on every cycle.

Chapter 3's former signaling/autonomic problem is also resolved. Figures 3.5 and 3.6 now separate focal synaptic signaling from slower HPA-axis hormonal signaling. The autonomic replacement is Figure 3.10 and retains the sympathetic/parasympathetic learning objective through four organ-specific comparisons, without cortisol, HPA, SAM, adrenal-medullary, or adrenaline content. The old combined-messenger and autonomic binaries remain preserved but unwired. Chapter 3 now has a continuous 3.1–3.11 sequence; its rebuilt page passed the chapter linter and desktop/390 × 844 browser checks.

**A temporary bookwide figure-audit catalog is active.** Before starting or resuming figure work, read `pipeline/audits/bookwide-figure-audit-TEMP.md`. It records the current ranked issue queue, proposed fixes, and repair effort without replacing chapter Markdown or `source/visuals-inventory.md` as authority. Keep it current during this finite pass, then delete it using the deletion gate in the file. Figure 7.5 now shows the Garcia–Koelling experiment as compound-cue drinking, illness-versus-shock outcomes, and separated cue tests, rather than four separately trained pairings. Figure 8.1 retains its useful three-stage map but now identifies Atkinson-Shiffrin as a classic model, marks `7 ± 2` as a classic estimate beneath the sharper capacity lesson, and replaces literal “unlimited”/“lifetime” labels. The instructor retained Figure 6.1 for the current edition because its direct active-maintenance lesson outweighs the cost of adding glymphatic qualifications to the artwork; Figure 6.5 is likewise deferred. Both may be reassessed in a future book revision. The ranked queue now continues with Figure 4.4.

**The repository is mixed.** Preserve every unrelated change. The deck-pilot files above are a distinct scope: do not modify, remove, stage, or characterize them as part of the chapter/ledger sequence, and equally do not let the ledger audit touch them.

## Immediate next actions

1. **Continue the ranked figure queue** with Figure 4.4: replace the false “eye” versus “brain” boundary with cones followed by retinal, LGN, and cortical opponent channels, and re-check the cone-response curves.
2. **Audit `pipeline/evidence-commitments.md` itself, read-only first.** Compare each row with current instructor decisions, the de-hedging/wordiness audits, and current prose. Classify rows as: genuine factual boundary; hedge/negation prescription; stale status; retired/removed content; or unsupported/incorrect source metadata.
3. **Present proposed ledger decisions in chat before editing the ledger.** Do not change chapter prose during this audit. Preserve the instructor's approved words and do not infer that a ledger disagreement requires a chapter revision.
4. **After explicit approval, reconcile ledger rows only.** Re-read `HANDOFF.md` immediately before updating it. Validate exact scope and do not commit or push.
5. **Handle the Moncrieff metadata separately** after the ledger audit or when the instructor chooses; it does not require reopening surrounding prose.
6. Later project items remain: Chapter 7's missing Figure 7.8 decision, the theoretical-spine cognitive-light-cone ownership note, Chapter 2's no-first-person scope, and Chapter 11 Thread B.
7. **Deck pilot, independent of the ledger sequence:** instructor markup on slide grammar, then a `.potx` template (decks currently render in the default Office theme), then the PowerPoint-edit ingest. Do not interleave with the ledger audit.

## Current intentional file scope

The existing Chapter 5–6 and Chapter 8–13 decision sequence includes the corresponding source Markdown, generated HTML, and `pipeline/chNN-spine-seeds.md` files, plus `pipeline/evidence-commitments.md`, `GPT_project_log.md`, and `HANDOFF.md`. Inspect `git status` and exact diffs before any write; do not bulk add, clean, reset, restore, commit, or push.

The deck pilot is a second, non-overlapping scope: `pipeline/build_chapter_deck.py`, `pipeline/slides/README.md`, `pipeline/slides/ch06.md`, `slides/ch06/assets/manifest.md`, and `.gitignore`. Stage it separately from the chapter/ledger sequence.

The completed Chapter 2 figure audit is a third, non-overlapping scope: `docs/images/ch02/ch02_reliability_validity_accuracy_precision.png`, `docs/images/ch02/ch02_correlation_direction_strength.svg`, `docs/images/ch02/fig2-5-random-sampling-vs-assignment.svg`, `docs/images/ch02/fig_experiment_flowchart.svg`, `docs/images/ch02/README_captions_alt_text_attribution.md`, `source/visuals-inventory.md`, plus this handoff and the matching project-log entry. Keep it separate from both the ledger sequence and deck pilot.

The active bookwide figure-repair pass is a fourth scope: `pipeline/audits/bookwide-figure-audit-TEMP.md`, the exact figure assets and per-chapter metadata named by resolved rows, their authoritative chapter Markdown, regenerated chapter HTML, `source/visuals-inventory.md`, this handoff, and matching project-log entries. Figures 12.3, 9.3, 8.1, 7.5, 6.2, 6.3, 6.4, 4.2, 4.5, 4.9, 2.3, 1.2, and the Chapter 3 signaling/autonomic sequence are resolved; preserve all unrelated chapter, ledger, and deck-pilot changes. Figure 1.1's responsive prototype remains deliberately unwired until the higher-priority queue is complete.

## Validation and operating notes

- Source Markdown is authoritative; regenerate chapter HTML rather than patching generated HTML.
- Run Python validators with `-X utf8` on Windows.
- `pipeline/check_chapter_coherence.py` and `pipeline/lint_chapters.py` test different things; run both after approved chapter changes.
- Known checker false positives include particle surnames, institutional authors, singular/plural glossary matching, wording-match thread misses, and apostrophe anchors.
- `pipeline/spine-seed-protocol.md` Step 8 still describes a superseded DOCX delivery path and eventually needs alignment with the chat-review workflow.
- Always preserve exact file scope in this mixed worktree.

## Important files

- Evidence ledger under review: `pipeline/evidence-commitments.md`
- Spine protocol: `pipeline/spine-seed-protocol.md`
- Chapter 10 decisions: `pipeline/ch10-spine-seeds.md`
- Chapter 11 decisions: `pipeline/ch11-spine-seeds.md`
- Theoretical spine: `pipeline/theoretical-spine.md`
- Validators: `pipeline/check_chapter_coherence.py`, `pipeline/lint_chapters.py`
- Temporary figure-repair queue (delete when pass is complete): `pipeline/audits/bookwide-figure-audit-TEMP.md`
- Deck generator and seed format: `pipeline/build_chapter_deck.py`, `pipeline/slides/README.md`
- Durable deferred work: `PROJECT_BACKLOG.md`
