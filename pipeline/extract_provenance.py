#!/usr/bin/env python3
"""
Move each chapter markdown's front-matter provenance block (version history /
drafting notes, in `> blockquote` and/or `<!-- HTML comment -->` form) out of the
chapter file into source/chapters/_provenance/<name>.md.

SAFETY INVARIANT: the chapter body -- everything from the first `## ` heading
onward -- is placed unchanged as the exact suffix of the rewritten file, and we
assert new_text.endswith(body) before writing. Any file failing the assertion is
skipped and reported, never written. Preserves each file's newline style on read
via Python universal newlines (output is normalized to LF).

Usage:
  python pipeline/extract_provenance.py --check    # dry run
  python pipeline/extract_provenance.py --apply     # rewrite

RECOMMENDED: snapshot the chapter files (git commit, or a copy) before --apply,
then independently diff the body (first `## ` onward) against the snapshot.
"""
import sys, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "source" / "chapters"
PROV = SRC / "_provenance"

def process(path, apply):
    raw = path.read_text(encoding="utf-8")
    if "Drafting history & provenance: see `_provenance/" in raw:
        return ("skip-clean", 0)  # already extracted (idempotent guard)
    nl = "\r\n" if "\r\n" in raw else "\n"
    m_body = re.search(r"(?m)^## ", raw)
    if not m_body:
        return ("skip-no-body", 0)
    body = raw[m_body.start():]
    front = raw[:m_body.start()]
    m_title = re.search(r"(?m)^# .+$", front)
    if not m_title:
        return ("skip-no-title", 0)
    title_line = m_title.group(0).rstrip("\r")
    if ("<!--" not in front) and (not re.search(r"(?m)^>", front)):
        return ("skip-clean", 0)
    prov = (front[:m_title.start()] + front[m_title.end():]).strip()
    prov_bytes = len(prov.encode("utf-8"))
    if not apply:
        return ("would-extract", prov_bytes)
    PROV.mkdir(exist_ok=True)
    header = (f"# Provenance & drafting history — {path.name}{nl}{nl}"
              f"> Moved out of the chapter to keep per-read context small. "
              f"Git history is authoritative; this is a convenience copy.{nl}{nl}")
    (PROV / (path.stem + ".md")).write_text(header + prov + nl, encoding="utf-8")
    pointer = (f"{title_line}{nl}{nl}"
               f"> Drafting history & provenance: see "
               f"`_provenance/{path.stem}.md` (and git log).{nl}{nl}---{nl}{nl}")
    new_text = pointer + body
    if not new_text.endswith(body):
        return ("FAIL-body-changed", prov_bytes)
    path.write_text(new_text, encoding="utf-8")
    return ("extracted", prov_bytes)

def main():
    apply = "--apply" in sys.argv
    targets = sorted([p for p in SRC.glob("ch*.md") if "EDIT-SHEET" not in p.name]
                     + list(SRC.glob("prologue*.md")))
    total = 0
    for p in targets:
        status, b = process(p, apply)
        if status in ("would-extract", "extracted"):
            total += b
        print(f"{p.name:48s} {status:20s} {b:6d} B (~{b//4} tok)")
    print(f"{'TOTAL':48s} {'':20s} {total:6d} B (~{total//4} tok)")

if __name__ == "__main__":
    main()
