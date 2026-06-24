import fs from "node:fs/promises";
import path from "node:path";
import { Presentation } from "file:///C:/Users/oxfor/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const root = process.cwd();
const outDir = path.join(root, "docs", "images", "ch04");
const svgPath = path.join(outDir, "fig4_3_retina_cutaway.svg");
const pngPath = path.join(outDir, "fig4_3_retina_cutaway.png");

const svgBytes = await fs.readFile(svgPath);
const presentation = Presentation.create({ slideSize: { width: 1600, height: 900 } });
const slide = presentation.slides.add();
slide.background.fill = "#ffffff";
slide.images.add({
  blob: svgBytes,
  contentType: "image/svg+xml",
  alt: "The Retina Is Not a Camera Sensor instructional diagram",
  fit: "contain",
  position: { left: 0, top: 0, width: 1600, height: 900 },
});

const png = await presentation.export({ slide, format: "png", scale: 1 });
await fs.writeFile(pngPath, new Uint8Array(await png.arrayBuffer()));
console.log(pngPath);
