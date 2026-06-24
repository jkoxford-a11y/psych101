import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "file:///C:/Users/oxfor/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const root = process.cwd();
const outDir = path.join(root, "docs", "images", "ch04");
await fs.mkdir(outDir, { recursive: true });

const finalPptx = path.join(outDir, "fig4_3_retina_cutaway.pptx");
const previewPng = path.join(outDir, "fig4_3_retina_cutaway_pptx_preview.png");

const presentation = Presentation.create({ slideSize: { width: 1600, height: 900 } });
const slide = presentation.slides.add();
slide.background.fill = "#ffffff";

const addText = (name, value, left, top, width, height, opts = {}) => {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name,
    position: { left, top, width, height },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = value;
  shape.text.style = {
    fontSize: opts.size ?? 22,
    bold: opts.bold ?? false,
    color: opts.color ?? "#243b53",
    typeface: "Aptos",
    alignment: opts.align ?? "left",
  };
  return shape;
};

const addShape = (geometry, name, left, top, width, height, fill, lineFill = "#52606d", lineWidth = 1.5, extra = {}) =>
  slide.shapes.add({
    geometry,
    name,
    position: { left, top, width, height, rotation: extra.rotation },
    fill,
    line: { style: "solid", fill: lineFill, width: lineWidth },
    borderRadius: extra.borderRadius,
    shadow: extra.shadow,
  });

const addLine = (name, left, top, width, height, color = "#52606d", lineWidth = 2, rotation) =>
  slide.shapes.add({
    geometry: "line",
    name,
    position: { left, top, width, height, rotation },
    fill: "none",
    line: { style: "solid", fill: color, width: lineWidth },
  });

const addLabel = (name, value, tx, ty, lx, ly, anchor = "left") => {
  addLine(`${name}-leader`, lx, ly, tx - lx, ty - ly, "#52606d", 2);
  const labelWidth = value.length > 14 ? 220 : 150;
  const labelLeft = anchor === "right" ? tx - 116 : anchor === "center" ? tx - labelWidth / 2 : tx + 8;
  addText(name, value, labelLeft, ty - 16, labelWidth, 38, {
    size: 22,
    bold: true,
    color: "#243b53",
    align: anchor,
  });
};

addShape("roundRect", "figure-frame", 52, 54, 1496, 792, "#f8fbfd", "#dde7ee", 2, { borderRadius: 24 });
addText("title", "The Retina Is Not a Camera Sensor", 96, 80, 720, 56, { size: 42, bold: true, color: "#102a43" });
addText(
  "subtitle",
  "Photoreceptors are distributed for biological function, not even pixel sampling.",
  96,
  130,
  760,
  34,
  { size: 22, color: "#52606d" },
);

addShape("ellipse", "eye-body", 103, 242, 584, 406, "#eaf4f8", "#2f5d7c", 4, { shadow: "shadow" });
addShape("arc", "retina-outer", 590, 322, 78, 246, "#df8260", "#c65f4b", 8);
addShape("ellipse", "cornea", 127, 341, 144, 208, "#d9eff9", "#2f5d7c", 3);
addShape("ellipse", "pupil", 202, 425, 40, 40, "#111827", "#111827", 1);
addShape("ellipse", "lens", 271, 353, 86, 184, "#f2d6a9", "#c97832", 3);
addShape("ellipse", "fovea-marker", 594, 436, 26, 26, "#d97b48", "#ffffff", 4);
addShape("ellipse", "blind-spot-marker", 624, 466, 34, 34, "#f8fbfd", "#243b53", 3);
addLine("light-ray-upper", 236, 445, 370, -55, "#f2d16b", 3);
addLine("light-ray-lower", 236, 445, 370, 55, "#f2d16b", 3);
addLine("optic-nerve", 646, 482, 120, 84, "#9b6a36", 12);

addLabel("label-cornea", "cornea", 82, 348, 184, 356, "right");
addLabel("label-pupil", "pupil", 84, 454, 222, 445, "right");
addLabel("label-lens", "lens", 184, 626, 316, 445, "right");
addLabel("label-retina", "retina", 708, 306, 614, 382);
addLabel("label-fovea", "fovea", 706, 454, 606, 448);
addLabel("label-optic-nerve", "optic nerve", 750, 672, 720, 530);
addLabel("label-blind-spot", "blind spot", 706, 540, 641, 483);

addLine("inset-guide-top", 660, 365, 204, -71, "#b8c7d3", 2);
addLine("inset-guide-bottom", 660, 527, 204, 101, "#b8c7d3", 2);

addShape("roundRect", "retina-inset", 864, 235, 612, 420, "#ffffff", "#c9d6df", 2.5, { borderRadius: 18, shadow: "shadow" });
addText("inset-title", "Zoomed retina strip", 898, 263, 360, 40, { size: 30, bold: true, color: "#102a43" });
addText("inset-subtitle", "Dense cones at the fovea; rods become more common away from it.", 898, 304, 520, 28, {
  size: 19,
  color: "#52606d",
});
addShape("roundRect", "retina-strip-bg", 896, 336, 548, 250, "#f6fafc", "#e4edf3", 2, { borderRadius: 12 });
addLine("photoreceptor-layer", 900, 454, 540, 9, "#c65f4b", 7);
addShape("arc", "fovea-dip", 1090, 450, 102, 70, "#fff8ef", "#d97b48", 3);
addShape("roundRect", "blind-zone", 1388, 380, 54, 202, "#f8fbfd", "#243b53", 3, { borderRadius: 10 });
addLine("inset-optic-nerve", 1415, 582, 86, 64, "#9b6a36", 14);

for (const [i, x] of [900, 936, 972, 1008, 1190, 1226, 1262, 1298, 1334, 1370].entries()) {
  addShape("roundRect", `rod-${i + 1}`, x, x < 1100 ? 366 : 388, 11, i % 2 ? 78 : 68, "#466b80", "#466b80", 1, {
    borderRadius: 6,
  });
}
for (const [i, x] of [1078, 1108, 1140, 1172, 1202].entries()) {
  addShape("triangle", `cone-${i + 1}`, x - 12, 396, 24, 92, "#d97b48", "#d97b48", 1);
}
addShape("ellipse", "inset-fovea-dot", 1134, 446, 16, 16, "#d97b48", "#d97b48", 1);
addShape("ellipse", "inset-blind-dot", 1404, 461, 22, 22, "#ffffff", "#243b53", 3);
addText("fovea-label-inset", "fovea", 1092, 602, 100, 28, { size: 21, bold: true, color: "#8f3d2e", align: "center" });
addText("blind-label-inset", "blind spot", 1368, 602, 120, 28, { size: 21, bold: true, color: "#243b53", align: "center" });

addLabel("label-rods", "rods", 1008, 362, 1040, 386, "center");
addLabel("label-cones", "cones", 1178, 720, 1145, 404, "center");
addLabel("label-no-photoreceptors", "no photoreceptors", 1362, 720, 1416, 472, "center");

addShape("roundRect", "takeaway-band", 96, 774, 1408, 44, "#eaf4f8", "#c9d6df", 1.5, { borderRadius: 22 });
addText(
  "takeaway",
  "The retinal signal is already organized before conscious vision.",
  320,
  784,
  960,
  30,
  { size: 24, bold: true, color: "#102a43", align: "center" },
);

const png = await presentation.export({ slide, format: "png", scale: 1 });
await fs.writeFile(previewPng, new Uint8Array(await png.arrayBuffer()));
const pptx = await PresentationFile.exportPptx(presentation);
await pptx.save(finalPptx);

console.log(finalPptx);
console.log(previewPng);
