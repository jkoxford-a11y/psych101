# Claude / Cowork Work Environment Notes

Operational cautions specific to Claude and Cowork sessions on this repository. Read this file when operating in Claude or Cowork; other agents (GPT/Codex) are not required to load it, since it describes a sandbox behavior specific to this environment, not a repository rule.

This file is factual and operational only — no session history, no current-project status. Current state lives in `HANDOFF.md`; chronological work history lives in `GPT_project_log.md`.

## The sandbox-mount staleness bug

**Symptom:** bash's view of files in this repo can lag the true file state, sometimes by hours. A fresh chat/session does **not** reset it.

**Root cause (confirmed Session 90):** the writable mount Claude's bash tool reads from caches file contents — matching two open public reports: [anthropics/claude-code#55877](https://github.com/anthropics/claude-code/issues/55877) (rclone FUSE cache set to a 3600s/1hr duration) and [#38993](https://github.com/anthropics/claude-code/issues/38993) (virtiofs mount serving truncated/stale content, unaffected by remounting).

**Scope:** it only affects files last changed via the Edit/Write tools or externally (Jon's own edits, GitHub Desktop commits). A file bash *itself* just wrote via a heredoc is read back correctly in the same session.

**Practical rules until Anthropic fixes it upstream:**

- **Never trust a bash read, `git status`, `git diff`, or a bash-run script's output as proof of a file's true content.** The Read tool (or `git show HEAD:<path>`, tested reliable) is ground truth.
- **Before running any bash-based check (the linter, a Python script, git) on a file edited via Edit/Write this session**, re-materialize that specific file through a bash heredoc — paste its true, Read-confirmed content into `cat > file <<'EOF' ... EOF` — first. This is the only workaround that's worked so far. Do this only for files actually touched, not the whole repo.
- If a bash-run check reports truncation, unbalanced tags, or a lower line count than expected right after an edit, treat that as a signal to re-verify via Read before concluding anything is actually broken.

## Commits

Commits normally go through Jon's own GitHub Desktop workflow, not sandbox git, unless he explicitly asks otherwise. This is already insulated from the staleness bug above — don't route around it by running `git commit`/`git push` from the sandbox on your own initiative.

## Canonical repository path

This repository is canonical only at `C:\GitHub\psych101`. A renamed, stale copy has previously existed at paths like `C:\Users\oxfor\OneDrive\Docs\GitHub\old_psych101` (or similarly named folders). If a connected folder in Cowork resolves to something other than the canonical path, don't trust its contents — confirm with Jon before reading or writing anything through it.

## Limitations specific to Claude/Cowork

- Local `file:` browser navigation is policy-blocked in this environment — don't rely on it to visually verify built HTML; ask Jon to check the live GitHub Pages site or a local server instead.
- CRLF/LF line-ending drift on this repo can make `git status`/`git diff` in the sandbox report large numbers of "modified" files that are actually whitespace-only. Cross-check with `git diff -w` before treating a large diff count as real content drift.
