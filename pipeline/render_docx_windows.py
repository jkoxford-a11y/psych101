#!/usr/bin/env python3
"""Run the bundled DOCX renderer with a Windows LibreOffice URI repair.

The bundled renderer currently builds a Windows LibreOffice profile argument as
``file://C:\\...``. LibreOffice waits indefinitely on that malformed URI. This
wrapper rewrites only that argument to the required ``file:///C:/...`` form and
then delegates all conversion and rasterization work to the bundled renderer.
"""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

import pypdfium2 as pdfium


RENDERER = Path(
    r"C:\Users\oxfor\.codex\plugins\cache\openai-primary-runtime\documents"
    r"\26.614.11602\skills\documents\render_docx.py"
)


def main():
    spec = importlib.util.spec_from_file_location("bundled_render_docx", RENDERER)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Could not load bundled renderer: {RENDERER}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)

    original_run_cmd = module._run_cmd

    def windows_safe_run_cmd(cmd, env, verbose):
        repaired = []
        prefix = "-env:UserInstallation=file://"
        for argument in cmd:
            if argument.startswith(prefix):
                raw_path = argument[len(prefix):]
                if ":\\" in raw_path or ":/" in raw_path:
                    argument = "-env:UserInstallation=" + Path(raw_path).resolve().as_uri()
            repaired.append(argument)
        return original_run_cmd(repaired, env, verbose)

    def pdfium_convert_from_path(
        pdf_path,
        dpi=200,
        fmt="png",
        thread_count=1,
        output_folder=None,
        paths_only=True,
        output_file="page",
        **_kwargs,
    ):
        """Small pdf2image-compatible adapter for Windows without Poppler."""
        if fmt.lower() != "png" or output_folder is None:
            raise ValueError("Windows renderer adapter currently supports PNG output only")
        out_dir = Path(output_folder)
        out_dir.mkdir(parents=True, exist_ok=True)
        paths = []
        pdf = pdfium.PdfDocument(str(pdf_path))
        try:
            scale = float(dpi) / 72.0
            for index in range(len(pdf)):
                page = pdf[index]
                bitmap = page.render(scale=scale)
                image = bitmap.to_pil()
                out_path = out_dir / f"{output_file}0001-{index + 1:02d}.png"
                image.save(out_path, format="PNG")
                paths.append(str(out_path))
                bitmap.close()
                page.close()
        finally:
            pdf.close()
        return paths if paths_only else []

    module._run_cmd = windows_safe_run_cmd
    module.convert_from_path = pdfium_convert_from_path
    module.main()


if __name__ == "__main__":
    sys.exit(main())
