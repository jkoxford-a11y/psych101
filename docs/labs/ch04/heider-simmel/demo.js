const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d', { alpha: false });
const overlay = document.getElementById('overlay');

let running = false;
let active = true;
let raf = null;
let lastT = 0;
let tSec = 0;
let presetId = 'social';

// Characters
let bigTri = { x: 0, y: 0, angle: 0, size: 1 };
let smallTri = { x: 0, y: 0, angle: 0, size: 0.6 };
let circle = { x: 0, y: 0, radius: 1 };

// House
let house = { x: 0, y: 0, w: 0, h: 0, doorOpen: 0 }; // doorOpen 0–1

// Random mode state
let randomVels = [];

function dpr() { return Math.max(1, window.devicePixelRatio || 1); }
function resize() {
  const r = dpr();
  const rect = canvas.getBoundingClientRect();
  const w = Math.max(1, Math.floor(rect.width * r));
  const h = Math.max(1, Math.floor(rect.height * r));
  if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
  initPositions();
}
function center() { return { cx: canvas.width / 2, cy: canvas.height / 2 }; }
function clear() { ctx.fillStyle = '#000'; ctx.fillRect(0, 0, canvas.width, canvas.height); }
function rand(a, b) { return a + Math.random() * (b - a); }
function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

function initPositions() {
  const { cx, cy } = center();
  const r = dpr();
  const unit = Math.min(canvas.width, canvas.height);

  house.w = unit * 0.22;
  house.h = unit * 0.25;
  house.x = cx + unit * 0.08;
  house.y = cy - unit * 0.02;
  house.doorOpen = 0;

  bigTri.size = unit * 0.065;
  smallTri.size = unit * 0.042;
  circle.radius = unit * 0.022;

  resetCharacterPositions();
}

function resetCharacterPositions() {
  const { cx, cy } = center();
  const unit = Math.min(canvas.width, canvas.height);
  bigTri.x = cx - unit * 0.25;
  bigTri.y = cy + unit * 0.10;
  bigTri.angle = 0;
  smallTri.x = house.x + house.w * 0.4;
  smallTri.y = house.y + house.h * 0.5;
  smallTri.angle = 30;
  circle.x = house.x + house.w * 0.7;
  circle.y = house.y + house.h * 0.6;
  house.doorOpen = 0;
}

function initRandomVels() {
  const s = Math.min(canvas.width, canvas.height) * 0.001;
  randomVels = [
    { vx: rand(-s, s), vy: rand(-s, s), va: rand(-1, 1) },
    { vx: rand(-s, s), vy: rand(-s, s), va: rand(-1, 1) },
    { vx: rand(-s, s), vy: rand(-s, s) }
  ];
}

function updateOverlay() {
  const labels = {
    'social': 'Social choreography',
    'random': 'Random motion (control)',
    'slow': 'Slow social',
    'static': 'Static (freeze frame)'
  };
  overlay.innerHTML = `<strong>Heider &amp; Simmel Social Motion</strong><br>` +
    `Preset: <span style="opacity:.9">${labels[presetId] || presetId}</span><br>` +
    `Time: ${tSec.toFixed(1)}s<br>` +
    `Keys: <strong>Space</strong> Start/Stop • <strong>R</strong> Reset • <strong>1–4</strong> Presets • <strong>F</strong> Fullscreen`;
}

// ---------- Drawing ----------

function drawHouse() {
  const r = dpr();
  const { x, y, w, h, doorOpen } = house;

  // Walls
  ctx.strokeStyle = 'rgba(255,255,255,.7)';
  ctx.lineWidth = 3 * r;
  ctx.strokeRect(x, y, w, h);

  // Door (right side, bottom half)
  const doorW = w * 0.25;
  const doorH = h * 0.45;
  const doorX = x + w - doorW;
  const doorY = y + h - doorH;

  // Door swings open (rotates from hinge on right edge)
  ctx.save();
  ctx.translate(doorX + doorW, doorY);
  ctx.rotate(-doorOpen * Math.PI * 0.45);
  ctx.strokeStyle = 'rgba(255,255,255,.55)';
  ctx.lineWidth = 2.5 * r;
  ctx.strokeRect(-doorW, 0, doorW, doorH);
  ctx.restore();
}

function drawTriangle(tri, color) {
  const r = dpr();
  const { x, y, angle, size } = tri;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle * Math.PI / 180);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.lineTo(-size * 0.7, size * 0.6);
  ctx.lineTo(size * 0.7, size * 0.6);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawCircle(circ, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(circ.x, circ.y, circ.radius, 0, Math.PI * 2);
  ctx.fill();
}

// ---------- Choreography (social preset) ----------
// A simplified Heider-Simmel-style sequence:
// 0–3s:   Small tri and circle are inside house, interacting
// 3–5s:   Big tri approaches house, door opens
// 5–8s:   Big tri enters, small tri confronts
// 8–11s:  Small tri and circle escape through door
// 11–14s: Big tri chases, small tri blocks
// 14–17s: Big tri frustrated, attacks house
// 17+:    Loop

function socialUpdate(t) {
  const { cx, cy } = center();
  const unit = Math.min(canvas.width, canvas.height);
  const cycle = t % 18;
  const speed = (presetId === 'slow') ? 0.55 : 1.0;

  if (cycle < 3) {
    // Inside house: small tri and circle move gently
    const f = cycle / 3;
    smallTri.x = house.x + house.w * (0.35 + 0.1 * Math.sin(f * Math.PI * 4));
    smallTri.y = house.y + house.h * (0.45 + 0.08 * Math.cos(f * Math.PI * 3));
    smallTri.angle = 20 + 15 * Math.sin(f * Math.PI * 3);
    circle.x = house.x + house.w * (0.65 + 0.08 * Math.cos(f * Math.PI * 5));
    circle.y = house.y + house.h * (0.55 + 0.06 * Math.sin(f * Math.PI * 4));
    bigTri.x = cx - unit * (0.25 + 0.03 * Math.sin(f * 2));
    bigTri.y = cy + unit * 0.12;
    bigTri.angle = -10 + 5 * Math.sin(f * 3);
    house.doorOpen = 0;
  }
  else if (cycle < 5) {
    // Big tri approaches
    const f = (cycle - 3) / 2;
    bigTri.x = lerp(cx - unit * 0.25, house.x + house.w + bigTri.size * 1.2, f);
    bigTri.y = lerp(cy + unit * 0.12, house.y + house.h * 0.5, f);
    bigTri.angle = lerp(-10, 15, f);
    house.doorOpen = clamp((f - 0.6) * 3, 0, 1);
    smallTri.angle = lerp(20, -10, clamp((f - 0.5) * 2, 0, 1));
  }
  else if (cycle < 8) {
    // Big tri enters house, confrontation
    const f = (cycle - 5) / 3;
    bigTri.x = lerp(house.x + house.w + bigTri.size, house.x + house.w * 0.5, f);
    bigTri.y = house.y + house.h * 0.45;
    bigTri.angle = 15 + 10 * Math.sin(f * Math.PI * 4);
    house.doorOpen = 1;
    // Small tri gets agitated
    smallTri.x = house.x + house.w * (0.3 - 0.05 * f);
    smallTri.y = house.y + house.h * 0.45;
    smallTri.angle = -20 + 30 * Math.sin(f * Math.PI * 6);
    // Circle retreats to corner
    circle.x = house.x + house.w * 0.15;
    circle.y = house.y + house.h * 0.8;
  }
  else if (cycle < 11) {
    // Escape: small tri and circle flee through door
    const f = (cycle - 8) / 3;
    house.doorOpen = 1;
    // Circle escapes first
    const circEscape = clamp(f * 2, 0, 1);
    circle.x = lerp(house.x + house.w * 0.15, cx - unit * 0.3, circEscape);
    circle.y = lerp(house.y + house.h * 0.8, cy + unit * 0.2, circEscape);
    // Small tri follows
    const triEscape = clamp((f - 0.3) * 1.8, 0, 1);
    smallTri.x = lerp(house.x + house.w * 0.3, cx - unit * 0.25, triEscape);
    smallTri.y = lerp(house.y + house.h * 0.45, cy + unit * 0.15, triEscape);
    smallTri.angle = -30 + 20 * triEscape;
    // Big tri tries to follow
    bigTri.x = lerp(house.x + house.w * 0.5, house.x + house.w * 0.85, clamp(f * 1.5, 0, 1));
    bigTri.angle = 15 - 25 * clamp(f * 1.5, 0, 1);
  }
  else if (cycle < 14) {
    // Big tri exits, chases; small tri and circle flee
    const f = (cycle - 11) / 3;
    bigTri.x = lerp(house.x + house.w * 0.85, cx - unit * 0.15, f);
    bigTri.y = lerp(house.y + house.h * 0.5, cy + unit * 0.15, f);
    bigTri.angle = -20 + 15 * Math.sin(f * Math.PI * 3);
    smallTri.x = lerp(cx - unit * 0.25, cx - unit * 0.35, f);
    smallTri.y = lerp(cy + unit * 0.15, cy - unit * 0.05, f);
    smallTri.angle = 30 * Math.sin(f * Math.PI * 4);
    circle.x = lerp(cx - unit * 0.3, cx - unit * 0.38, f);
    circle.y = lerp(cy + unit * 0.2, cy - unit * 0.10, f);
    house.doorOpen = lerp(1, 0, f);
  }
  else if (cycle < 17) {
    // Big tri frustrated, attacks house
    const f = (cycle - 14) / 3;
    bigTri.x = lerp(cx - unit * 0.15, house.x + house.w * 0.5, clamp(f * 1.5, 0, 1));
    bigTri.y = lerp(cy + unit * 0.15, house.y + house.h * 0.5, clamp(f * 1.5, 0, 1));
    bigTri.angle = 40 * Math.sin(f * Math.PI * 8); // agitated
    // Small tri and circle watch from afar
    smallTri.x = cx - unit * 0.35;
    smallTri.y = cy - unit * 0.05;
    smallTri.angle = 10 * Math.sin(f * 2);
    circle.x = cx - unit * 0.38;
    circle.y = cy - unit * 0.10;
    house.doorOpen = 0;
  }
  else {
    // Brief pause, then loop
    resetCharacterPositions();
  }
}

function randomUpdate(dt) {
  const bound = Math.min(canvas.width, canvas.height) * 0.38;
  const { cx, cy } = center();
  const chars = [bigTri, smallTri, circle];

  for (let i = 0; i < 3; i++) {
    const v = randomVels[i];
    chars[i].x += v.vx * dt;
    chars[i].y += v.vy * dt;
    if (v.va !== undefined) chars[i].angle += v.va * dt;

    // Bounce off bounds
    if (chars[i].x < cx - bound || chars[i].x > cx + bound) v.vx *= -1;
    if (chars[i].y < cy - bound || chars[i].y > cy + bound) v.vy *= -1;

    // Random jitter
    v.vx += rand(-0.002, 0.002) * dt;
    v.vy += rand(-0.002, 0.002) * dt;
    const maxV = Math.min(canvas.width, canvas.height) * 0.003;
    v.vx = clamp(v.vx, -maxV, maxV);
    v.vy = clamp(v.vy, -maxV, maxV);
  }
}

function drawOnce() {
  clear();
  const r = dpr();

  // House (always visible)
  drawHouse();

  // Characters
  drawTriangle(bigTri, 'rgba(255,100,100,.85)');
  drawTriangle(smallTri, 'rgba(100,180,255,.85)');
  drawCircle(circle, 'rgba(255,230,100,.85)');
}

function update(dtMs) {
  const dt = dtMs / 1000;

  if (presetId === 'static') return;

  const speed = (presetId === 'slow') ? 0.55 : 1.0;
  tSec += dt * speed;

  if (presetId === 'random') {
    randomUpdate(dtMs);
  } else {
    socialUpdate(tSec);
  }
}

function applyPreset(id) {
  presetId = id;
  tSec = 0;
  initPositions();
  if (presetId === 'random') {
    // Scatter characters randomly
    const { cx, cy } = center();
    const spread = Math.min(canvas.width, canvas.height) * 0.25;
    bigTri.x = cx + rand(-spread, spread);
    bigTri.y = cy + rand(-spread, spread);
    smallTri.x = cx + rand(-spread, spread);
    smallTri.y = cy + rand(-spread, spread);
    circle.x = cx + rand(-spread, spread);
    circle.y = cy + rand(-spread, spread);
    initRandomVels();
  }
  updateOverlay();
  drawOnce();
}

function reset() {
  tSec = 0;
  initPositions();
  if (presetId === 'random') initRandomVels();
  updateOverlay();
  drawOnce();
}

function tick(now) {
  if (!running || !active) return;
  const dt = Math.min(50, now - lastT);
  lastT = now;
  update(dt);
  drawOnce();
  updateOverlay();
  raf = requestAnimationFrame(tick);
}

function start() {
  if (running) return;
  running = true;
  window.parent?.postMessage?.({ type: 'demo:runningState', payload: { running: true } }, '*');
  lastT = performance.now();
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(tick);
}
function stop() {
  running = false;
  window.parent?.postMessage?.({ type: 'demo:runningState', payload: { running: false } }, '*');
  cancelAnimationFrame(raf);
  drawOnce();
}

function activate() { active = true; resize(); updateOverlay(); drawOnce(); }
function deactivate() { active = false; stop(); }

window.addEventListener('message', (evt) => {
  const msg = evt.data;
  if (!msg || typeof msg !== 'object') return;
  if (msg.type === 'demo:activate') activate();
  if (msg.type === 'demo:deactivate') deactivate();
  if (msg.type === 'demo:resize') { resize(); drawOnce(); }
  if (msg.type === 'demo:start') start();
  if (msg.type === 'demo:stop') stop();
  if (msg.type === 'demo:reset') reset();
  if (msg.type === 'demo:preset') applyPreset(msg.payload?.presetId || 'social');
});

function handleKeys(e) {
  if (e.code === 'Space') { e.preventDefault(); running ? stop() : start(); return; }
  if (e.key.toLowerCase() === 'r') { e.preventDefault(); reset(); return; }
  if (/^[1-4]$/.test(e.key)) {
    const map = { '1': 'social', '2': 'random', '3': 'slow', '4': 'static' };
    applyPreset(map[e.key]);
    return;
  }
  if (e.key.toLowerCase() === 'f') {
    e.preventDefault();
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  }
}
window.addEventListener('keydown', handleKeys, { passive: false });
window.addEventListener('load', () => document.body?.focus());
window.addEventListener('pointerdown', () => document.body?.focus());

resize();
applyPreset('social');
drawOnce();
window.parent?.postMessage?.({ type: 'demo:ready' }, '*');
