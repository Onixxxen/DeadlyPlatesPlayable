// pa-qa's own check: synthetic playables with one known defect each, and the exit code and
// rule id pa-qa must answer with. A rule nobody has seen fire is decoration; this is where
// every rule is seen firing once, and the clean fixtures prove it does not fire by mistake.
//
//   node selftest/run.mjs        → exit 0 all cases hold · 1 some case failed

import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { zipSync, strToU8 } from 'fflate';

const HERE = dirname(fileURLToPath(import.meta.url));
const PA_QA = join(HERE, '..', 'pa-qa.mjs');

const JOURNEY = {
  steps: [
    { frame: 'start' },
    { tapTarget: 'box' }, { wait: 250 },
    { tapTarget: 'box' }, { wait: 250 },
    { expectState: 'end', timeout: 3000 },
    { frame: 'end' },
    { tapCta: true }, { expectCta: 1 },
    { hide: true }, { show: true },
  ],
};

// One tiny 2D-canvas playable; each flag switches on exactly one defect.
function fixture(flags = {}) {
  const f = { cta: 'mraid', mraidTag: true, ...flags };
  const head = [
    f.mraidTag ? '<script src="mraid.js"></script>' : '',
    f.exitApi ? '<meta name="ad.orientation" content="portrait,landscape"><script src="https://tpc.googlesyndication.com/pagead/gadgets/html5/api/exitapi.js"></script>' : '',
  ].join('');
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${head}
<style>html,body{margin:0;height:100%;overflow:hidden;background:#123}canvas{display:block;width:100vw;height:100vh}
#cta{position:absolute;left:50%;top:70%;transform:translate(-50%,-50%);padding:16px 32px;background:#fc0;font:bold 20px sans-serif;border:0;display:none}</style>
</head><body><canvas id="c"></canvas><button id="cta">PLAY NOW</button>
<script>
const FLAGS = ${JSON.stringify(f)};
const c = document.getElementById('c'), g = c.getContext('2d');
let state = 'boot', hits = 0, paused = false, ac = null, started = false;
const box = { x: 0.5, y: 0.45, r: 50 };
function size(){ c.width = innerWidth * devicePixelRatio; c.height = innerHeight * devicePixelRatio; }
addEventListener('resize', size); size();
function draw(t){
  const s = devicePixelRatio;
  g.fillStyle = '#123'; g.fillRect(0, 0, c.width, c.height);
  if (state !== 'end') { g.fillStyle = '#4af'; g.beginPath(); g.arc(box.x*innerWidth*s, box.y*innerHeight*s, (box.r + 5*Math.sin(t/200))*s, 0, 7); g.fill(); }
  else { g.fillStyle = '#fff'; g.font = (28*s) + 'px sans-serif'; g.fillText('WELL DONE', 40*s, 120*s); }
  requestAnimationFrame(draw);
}
function start(){ if (started) return; started = true; state = 'play'; if (window.gameReady && !FLAGS.noGameReady) window.gameReady(); requestAnimationFrame(draw); }
function beep(){ if (!ac) ac = new AudioContext(); const o = ac.createOscillator(); const gn = ac.createGain(); gn.gain.value = 0.01; o.connect(gn).connect(ac.destination); o.start(); o.stop(ac.currentTime + 0.05); }
function doInstall(){
  const url = 'https://play.google.com/store/apps/details?id=com.example';
  if (FLAGS.cta === 'window.open') window.open(url);
  else if (FLAGS.cta === 'exitapi') ExitApi.exit();
  else if (FLAGS.cta === 'mintegral') window.install();
  else mraid.open(url);
}
addEventListener('pointerdown', (e) => {
  if (FLAGS.ctaOnFirstTap && hits === 0) doInstall();
  if (state !== 'play') return;
  const dx = e.clientX - box.x*innerWidth, dy = e.clientY - box.y*innerHeight;
  if (dx*dx + dy*dy < (box.r + 20)**2) {
    hits++; beep();
    if (hits >= 2) { state = 'end'; if (window.gameEnd && !FLAGS.noGameEnd) window.gameEnd(); document.getElementById('cta').style.display = 'block'; }
  }
});
document.getElementById('cta').addEventListener('click', doInstall);
function pause(p){ paused = p; if (ac && !FLAGS.noPause) { p ? ac.suspend() : ac.resume(); } }
document.addEventListener('visibilitychange', () => pause(document.hidden));
if (window.mraid) {
  const go = () => { mraid.addEventListener('viewableChange', (v) => { pause(!v); if (v) start(); }); if (mraid.isViewable()) start(); };
  mraid.getState() === 'loading' ? mraid.addEventListener('ready', go) : go();
} else start();
window.__pa = {
  get state(){ return state }, get paused(){ return paused },
  targets(){ return state === 'play' ? [{ id: 'box', x: box.x*innerWidth, y: box.y*innerHeight }] : [] },
  ctaPoint(){ const r = document.getElementById('cta').getBoundingClientRect(); return r.width ? { x: r.left + r.width/2, y: r.top + r.height/2 } : null },
};
if (FLAGS.throwOnLoad) throw new Error('fixture: boom');
if (FLAGS.fetchOnLoad) fetch('https://example.com/track?x=1').catch(() => {});
if (FLAGS.audioOnLoad) { ac = new AudioContext(); const o = ac.createOscillator(); o.connect(ac.destination); o.start(); }
if (FLAGS.blank) { document.body.innerHTML = ''; document.body.style.background = '#fff'; }
</script>${f.pad ? `<!--${'x'.repeat(f.pad)}-->` : ''}</body></html>`;
}

const CASES = [
  { name: 'clean applovin', network: 'applovin', html: fixture(), exit: 0, expect: [] },
  { name: 'clean unity (MRAID 3)', network: 'unity', html: fixture(), exit: 0, expect: [] },
  { name: 'clean google zip', network: 'google', zip: { 'index.html': fixture({ cta: 'exitapi', mraidTag: false, exitApi: true }) }, exit: 0, expect: [] },
  { name: 'clean mintegral zip', network: 'mintegral', zip: { 'game/game.html': fixture({ cta: 'mintegral', mraidTag: false }) }, exit: 0, expect: [] },
  { name: 'request to the internet', network: 'applovin', html: fixture({ fetchOnLoad: true }), exit: 1, expect: ['external-request'] },
  { name: 'sound before the first tap', network: 'applovin', html: fixture({ audioOnLoad: true }), exit: 1, expect: ['audio-before-interaction'] },
  { name: 'store on the first tap', network: 'applovin', html: fixture({ ctaOnFirstTap: true }), exit: 1, expect: ['cta-on-first-tap'] },
  { name: 'exception on load', network: 'applovin', html: fixture({ throwOnLoad: true }), exit: 1, expect: ['console-error'] },
  { name: 'blank screen', network: 'applovin', html: fixture({ blank: true }), exit: 1, expect: ['blank-first-frame'] },
  { name: 'sound keeps playing when hidden', network: 'applovin', html: fixture({ noPause: true }), exit: 1, expect: ['audio-not-paused-when-hidden'] },
  { name: 'wrong format, markers and CTA API for Google', network: 'google', html: fixture({ cta: 'window.open', mraidTag: false }), exit: 1, expect: ['wrong-format', 'missing-marker', 'cta-wrong-api'] },
  { name: 'Mintegral without gameReady/gameEnd', network: 'mintegral', zip: { 'index.html': fixture({ cta: 'mintegral', mraidTag: false, noGameReady: true, noGameEnd: true }) }, exit: 1, expect: ['mintegral-game-ready', 'mintegral-game-end'] },
  { name: 'over the 5 MB limit', network: 'applovin', html: fixture({ pad: 5.2 * 1024 * 1024 }), exit: 1, expect: ['size-limit'] },
];

const work = mkdtempSync(join(tmpdir(), 'pa-qa-selftest-'));
const journeyPath = join(work, 'journey.json');
writeFileSync(journeyPath, JSON.stringify(JOURNEY));
let failed = 0;

for (const [i, c] of CASES.entries()) {
  let input;
  if (c.zip) {
    input = join(work, `case${i}.zip`);
    const files = Object.fromEntries(Object.entries(c.zip).map(([k, v]) => [k, strToU8(v)]));
    if (c.network === 'tiktok') files['config.json'] = strToU8('{"playable_orientation":0}');
    writeFileSync(input, zipSync(files));
  } else {
    input = join(work, `case${i}.html`);
    writeFileSync(input, c.html);
  }
  const out = join(work, `out${i}`);
  const r = spawnSync(process.execPath, [PA_QA, '--html', input, '--network', c.network, '--journey', journeyPath, '--out', out], { encoding: 'utf8' });
  let ids = [];
  try { ids = JSON.parse(readFileSync(join(out, 'report.json'), 'utf8')).violations.map((v) => v.id); } catch { /* no report */ }
  const missing = c.expect.filter((id) => !ids.includes(id));
  const unexpected = c.exit === 0 ? ids : [];
  const ok = r.status === c.exit && missing.length === 0 && unexpected.length === 0;
  if (!ok) failed++;
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${c.name}: exit ${r.status} (want ${c.exit})${ids.length ? `, rules ${[...new Set(ids)].join(', ')}` : ''}${missing.length ? ` — MISSING ${missing.join(', ')}` : ''}`);
  if (!ok) console.log(r.stdout.split('\n').map((l) => '     ' + l).join('\n'));
}

rmSync(work, { recursive: true, force: true });
console.log(failed ? `\n${failed} of ${CASES.length} cases FAILED` : `\nall ${CASES.length} cases hold`);
process.exit(failed ? 1 : 0);
