# Line-edit packets

These Word files are lightweight, disposable editorial snapshots generated from the canonical chapter Markdown.

- Included: chapter prose, headings, lists, tables, callouts, review questions, key terms, Further Reading, references, and figure/video captions.
- Omitted: artwork, internal comments, and source-provenance notes.
- The Markdown in `source/chapters/` remains authoritative. Returned Word edits should be reconciled into Markdown before regenerating and validating the chapter HTML.

Regenerate all remaining-chapter packets:

```powershell
python pipeline/build_line_edit_docx.py
```

Regenerate selected chapters:

```powershell
python pipeline/build_line_edit_docx.py --chapters 5 6 7
```
