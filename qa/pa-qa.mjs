#!/usr/bin/env node
// pa-qa — browser QA for an HTML5 playable ad.
//
// Opens the delivered file (single HTML, a folder, or a ZIP) the way an ad container would:
// served over local HTTP, with exactly one network's API stubbed in, every external request
// refused. Plays a journey (taps, waits, frames), then judges the rules networks reject
// playables for. Frames land as pairs (-a, then -b 400 ms later): one frame cannot show that
// something is NOT moving.
//
//   node pa-qa.mjs --html dist/applovin/index.html --network applovin \
//                  --journey qa/journey.json --viewports portrait,landscape --out qa-out/x
//
// Exit codes: 0 no violations · 1 violations (the playable must change) ·
//             2 no verdict (infrastructure: file missing, browser failed to start).

import { createServer } from 'node:http';
import { mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync, existsSync, renameSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, extname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { unzipSync } from 'fflate';
import { PNG } from 'pngjs';
import { NETWORKS, CONTAINER_SCRIPTS, VIEWPORTS } from './networks.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const INFRA = 2;
const VIOLATION = 1;

// ---------------------------------------------------------------------------- arguments
function parseArgs(argv) {
  const a = { network: 'preview', viewports: 'portrait', seed: 1, video: false, headed: false, gpu: false, timeout: 60000 };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    const v = () => argv[++i];
    if (k === '--html') a.html = v();
    else if (k === '--network') a.network = v();
    else if (k === '--journey') a.journey = v();
    else if (k === '--viewports') a.viewports = v();
    else if (k === '--out') a.out = v();
    else if (k === '--seed') a.seed = Number(v());
    else if (k === '--video') a.video = true;
    else if (k === '--headed') a.headed = true;
    else if (k === '--gpu') a.gpu = true;
    else if (k === '--timeout') a.timeout = Number(v());
    else if (k === '--help' || k === '-h') a.help = true;
    else throw new Error(`unknown argument ${k}`);
  }
  return a;
}

const USAGE = `usage: node pa-qa.mjs --html <file.html|dir|file.zip> [--network ${Object.keys(NETWORKS).join('|')}]
       [--journey journey.json] [--viewports portrait,landscape,tablet] [--out dir]
       [--seed 1] [--video] [--headed] [--gpu] [--timeout ms]`;

// ---------------------------------------------------------------------------- input file
function resolveInput(path) {
  const abs = resolve(path);
  if (!existsSync(abs)) throw infra(`нет файла: ${abs}`);
  const st = statSync(abs);
  if (st.isDirectory()) {
    const entry = findHtml(abs);
    if (!entry) throw infra(`в папке ${abs} нет html`);
    return { root: abs, entry, delivered: abs, bytes: dirSize(abs), kind: 'dir', zipFiles: null };
  }
  if (extname(abs).toLowerCase() === '.zip') {
    const files = unzipSync(readFileSync(abs));
    const root = mkdtempSync(join(tmpdir(), 'pa-qa-'));
    for (const [name, data] of Object.entries(files)) {
      if (name.endsWith('/')) continue;
      const out = join(root, name);
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, data);
    }
    const entry = findHtml(root);
    if (!entry) throw infra(`в архиве ${abs} нет html`);
    return { root, entry, delivered: abs, bytes: st.size, kind: 'zip', zipFiles: Object.keys(files), temp: true };
  }
  return { root: dirname(abs), entry: abs, delivered: abs, bytes: st.size, kind: 'html', zipFiles: null };
}

function findHtml(dir, depth = 0) {
  const names = readdirSync(dir);
  if (names.includes('index.html')) return join(dir, 'index.html');
  const html = names.find((n) => n.toLowerCase().endsWith('.html'));
  if (html) return join(dir, html);
  if (depth >= 2) return null;
  for (const n of names) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) {
      const found = findHtml(p, depth + 1);
      if (found) return found;
    }
  }
  return null;
}

function dirSize(dir) {
  let total = 0;
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    const st = statSync(p);
    total += st.isDirectory() ? dirSize(p) : st.size;
  }
  return total;
}

function infra(message) {
  const e = new Error(message);
  e.infra = true;
  return e;
}

// ---------------------------------------------------------------------------- local server
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.gif': 'image/gif', '.svg': 'image/svg+xml', '.mp3': 'audio/mpeg', '.ogg': 'audio/ogg', '.wav': 'audio/wav',
  '.m4a': 'audio/mp4', '.wasm': 'application/wasm', '.glb': 'model/gltf-binary', '.gltf': 'model/gltf+json',
  '.ttf': 'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2', '.bin': 'application/octet-stream', '.txt': 'text/plain',
};

function serve(root, { devTracing = false } = {}) {
  return new Promise((ok) => {
    const server = createServer((req, res) => {
      const url = decodeURIComponent((req.url || '/').split('?')[0]);
      if (CONTAINER_SCRIPTS.some((re) => re.test(url))) {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        return res.end('/* provided by the ad container; stubbed by pa-qa */');
      }
      // A Playworks develop build reports Runtime Analysis to the server it came from; the
      // plugin's own dev server answers it, pa-qa stands in. Same origin, not the internet.
      if (devTracing && url.startsWith('/tracing')) {
        res.writeHead(200, { 'content-type': 'application/json' });
        return res.end('{}');
      }
      const file = resolve(join(root, url));
      if (!file.startsWith(resolve(root)) || !existsSync(file) || statSync(file).isDirectory()) {
        res.writeHead(404);
        return res.end();
      }
      res.writeHead(200, { 'content-type': TYPES[extname(file).toLowerCase()] || 'application/octet-stream' });
      res.end(readFileSync(file));
    });
    server.listen(0, '127.0.0.1', () => ok(server));
  });
}

// ---------------------------------------------------------------------------- static rules
function staticRules(input, net, netName) {
  const v = [];
  const f = [];
  const html = readFileSync(input.entry, 'utf8');
  const mb = (n) => (n / 1024 / 1024).toFixed(2) + ' МБ';

  if (net.format !== 'dir' && net.format !== input.kind && !(net.format === 'html' && input.kind === 'html')) {
    v.push(rule('wrong-format', `сеть ${netName} ждёт ${net.format}, а на входе ${input.kind}`));
  }
  if (input.bytes > net.limit) {
    const msg = `вес ${mb(input.bytes)} больше лимита ${netName} ${mb(net.limit)}`;
    if (net.sizeIsInformational) f.push({ id: 'size', message: msg });
    else v.push(rule('size-limit', msg));
  } else {
    f.push({ id: 'size', message: `вес ${mb(input.bytes)} из ${mb(net.limit)}` });
  }
  for (const re of net.must) if (!re.test(html)) v.push(rule('missing-marker', `${netName} требует в HTML ${re}`));
  for (const re of net.mustNot) if (re.test(html)) v.push(rule('forbidden-marker', `${netName} запрещает в HTML ${re}`));
  if (net.zipMustHave && input.zipFiles) {
    for (const need of net.zipMustHave) {
      if (!input.zipFiles.some((n) => n === need || n.endsWith('/' + need))) v.push(rule('zip-missing-file', `в архиве нет ${need}`));
    }
  }
  if (input.kind === 'html' && net.format === 'html') {
    // A single-file playable must not reference sibling files: nothing else is delivered.
    const refs = [...html.matchAll(/\s(?:src|href)=["'](?!data:|blob:|#|https?:|mraid\.js)([^"']+)["']/gi)].map((m) => m[1]);
    if (refs.length) v.push(rule('not-inlined', `однофайловая сборка ссылается на файлы рядом: ${refs.slice(0, 5).join(', ')}`));
  }
  return { violations: v, findings: f };
}

const rule = (id, message, viewport) => ({ id, message, ...(viewport ? { viewport } : {}) });

// ---------------------------------------------------------------------------- journey
const DEFAULT_JOURNEY = {
  steps: [
    { frame: 'start' },
    { tap: [0.5, 0.55] },
    { wait: 800 },
    { frame: 'after-tap' },
  ],
};

function loadJourney(path) {
  if (!path) return DEFAULT_JOURNEY;
  const j = JSON.parse(readFileSync(resolve(path), 'utf8'));
  if (!Array.isArray(j.steps)) throw infra(`в ${path} нет массива steps`);
  return j;
}

function isBlank(pngBuffer) {
  const png = PNG.sync.read(pngBuffer);
  const d = png.data;
  const r = d[0], g = d[1], b = d[2];
  // Sample a grid; a real first frame has at least a few percent of differing pixels.
  let differing = 0, samples = 0;
  for (let y = 0; y < png.height; y += 8) {
    for (let x = 0; x < png.width; x += 8) {
      const i = (y * png.width + x) * 4;
      samples++;
      if (Math.abs(d[i] - r) + Math.abs(d[i + 1] - g) + Math.abs(d[i + 2] - b) > 24) differing++;
    }
  }
  return differing / samples < 0.01;
}

async function runViewport(browser, ctx) {
  const { vpName, input, net, netName, journey, out, origin, seed, video, timeout } = ctx;
  const vp = VIEWPORTS[vpName];
  if (!vp) throw infra(`неизвестный экран ${vpName}: ${Object.keys(VIEWPORTS).join(', ')}`);
  const dir = join(out, vpName);
  mkdirSync(dir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: vp.deviceScaleFactor,
    isMobile: vp.isMobile,
    hasTouch: vp.hasTouch,
    ...(video ? { recordVideo: { dir, size: { width: vp.width, height: vp.height } } } : {}),
  });
  const stub = readFileSync(join(HERE, 'stubs.js'), 'utf8').replace('const NET = __PA_NET__;', `const NET = ${JSON.stringify({ ...net, name: netName, must: undefined, mustNot: undefined })};`);
  await context.addInitScript({ content: stub });

  const external = [];
  await context.route('**/*', (route) => {
    const url = route.request().url();
    if (url.startsWith(origin)) return route.continue();
    if (CONTAINER_SCRIPTS.some((re) => re.test(url))) {
      return route.fulfill({ status: 200, contentType: 'text/javascript', body: '/* stubbed by pa-qa */' });
    }
    external.push(url);
    return route.abort();
  });

  const page = await context.newPage();
  page.setDefaultTimeout(timeout);
  const consoleErrors = [];
  const pageErrors = [];
  let crashed = false;
  const missing = [];
  page.on('response', (r) => { if (r.status() >= 400 && r.url().startsWith(origin)) missing.push(`${r.status()} ${r.url().slice(origin.length)}`); });
  const consoleAll = [];
  page.on('console', (m) => {
    consoleAll.push(`[${m.type()}] ${m.text()}`);
    if (m.type() === 'error') consoleErrors.push(m.text());
  });
  page.on('pageerror', (e) => pageErrors.push(String(e && e.message ? e.message : e)));
  page.on('crash', () => { crashed = true; });

  const violations = [];
  const findings = [];
  const frames = [];
  const tapLog = [];
  let frameNo = 0;
  let reachedEnd = false;

  const rel = relative(input.root, input.entry).split(sep).join('/');
  const t0 = Date.now();
  await page.goto(`${origin}/${rel}?pa_seed=${seed}`, { waitUntil: 'load' });
  // Without the probe every verdict below would be about pa-qa, not about the playable.
  if (!(await page.evaluate('!!window.__paProbe').catch(() => false))) {
    await context.close();
    throw infra('заглушки контейнера не встали: window.__paProbe нет. Это поломка pa-qa, а не playable');
  }

  // First frame: poll until the page shows something, or call it blank.
  let firstFrameMs = null;
  for (let i = 0; i < 30; i++) {
    const shot = await page.screenshot();
    if (!isBlank(shot)) { firstFrameMs = Date.now() - t0; break; }
    await page.waitForTimeout(100);
  }
  if (firstFrameMs === null) violations.push(rule('blank-first-frame', 'за 3 с после загрузки экран остался пустым', vpName));
  else findings.push({ id: 'first-frame', message: `первый кадр через ${firstFrameMs} мс после начала загрузки`, viewport: vpName });

  const pa = (expr) => page.evaluate(expr).catch(() => undefined);
  // A tap the way a finger makes one: down, ~80 ms, up. Playwright's touchscreen.tap is
  // instantaneous, and an engine that polls input once per frame (Unity/Luna, on a slow
  // software renderer above all) never sees its "began" phase — measured 2026-10-01.
  const cdp = await context.newCDPSession(page);
  const tapAt = async (x, y, kind) => {
    const n = await pa('window.__paProbe.inputs.length');
    tapLog.push({ kind, inputsBefore: n ?? 0 });
    const point = { x: Math.round(x), y: Math.round(y) };
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [point] });
    await page.waitForTimeout(80);
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  };

  for (const step of journey.steps) {
    if (crashed) break;
    if ('wait' in step) {
      await page.waitForTimeout(step.wait);
    } else if ('frame' in step) {
      const name = /^\d/.test(step.frame) ? step.frame : `${String(frameNo).padStart(2, '0')}-${step.frame}`;
      frameNo++;
      const a = join(dir, `${name}-a.png`);
      const b = join(dir, `${name}-b.png`);
      await page.screenshot({ path: a });
      await page.waitForTimeout(400);
      await page.screenshot({ path: b });
      frames.push(relative(out, a).split(sep).join('/'), relative(out, b).split(sep).join('/'));
    } else if ('tap' in step) {
      // [x, y] for every screen, or { portrait: [x, y], landscape: [x, y], ... } when the
      // layout moves with the orientation (builds without a test API tap by position only).
      const at = Array.isArray(step.tap) ? step.tap : step.tap[vpName];
      if (!at) { violations.push(rule('journey-no-tap', `шаг tap не задан для экрана ${vpName}`, vpName)); continue; }
      await tapAt(at[0] * vp.width, at[1] * vp.height, 'game');
    } else if ('tapTarget' in step) {
      const targets = await pa('window.__pa && window.__pa.targets ? window.__pa.targets() : null');
      if (!targets) { violations.push(rule('no-test-api', `шаг tapTarget, а window.__pa.targets нет`, vpName)); continue; }
      const t = targets.find((x) => String(x.id).startsWith(step.tapTarget));
      if (!t) { violations.push(rule('target-missing', `нет цели «${step.tapTarget}» на экране (есть: ${targets.map((x) => x.id).join(', ') || 'ничего'})`, vpName)); continue; }
      await tapAt(t.x, t.y, 'game');
    } else if ('tapCta' in step) {
      let point = await pa('window.__pa && window.__pa.ctaPoint ? window.__pa.ctaPoint() : null');
      const at = step.at && (Array.isArray(step.at) ? step.at : step.at[vpName]);
      if (!point && at) point = { x: at[0] * vp.width, y: at[1] * vp.height };
      if (!point) { violations.push(rule('cta-missing', 'шаг tapCta, а кнопки установки не найти (нет __pa.ctaPoint и нет at)', vpName)); continue; }
      await tapAt(point.x, point.y, 'cta');
    } else if ('expectState' in step) {
      const deadline = Date.now() + (step.timeout ?? 8000);
      let state;
      while (Date.now() < deadline) {
        state = await pa('window.__pa && window.__pa.state');
        if (state === step.expectState) break;
        await page.waitForTimeout(100);
      }
      if (state !== step.expectState) violations.push(rule('state-timeout', `не дошли до состояния «${step.expectState}» (сейчас «${state}»)`, vpName));
      else if (step.expectState === 'end') reachedEnd = true;
    } else if ('expectCta' in step) {
      const deadline = Date.now() + (step.timeout ?? 1500);
      let n = 0;
      while (Date.now() < deadline) {
        n = (await pa('window.__paProbe.cta.length')) ?? 0;
        if (n >= step.expectCta) break;
        await page.waitForTimeout(100);
      }
      if (n < step.expectCta) violations.push(rule('cta-missing', `ждали вызов установки (${step.expectCta}), а было ${n}`, vpName));
    } else if ('hide' in step) {
      await pa('window.__paProbe.setHidden(true)');
      await page.waitForTimeout(600);
      const states = (await pa('window.__paProbe.audioStates()')) || [];
      if (states.includes('running')) {
        const msg = `реклама скрыта, а звук играет (AudioContext: ${states.join(', ')})`;
        // A Playworks develop build is not wired to any container's pause: judge it on the
        // network files, report it here.
        if (net.audioPauseIsInformational) findings.push({ id: 'audio-pause', message: msg + ' — для develop-сборки только наблюдение', viewport: vpName });
        else violations.push(rule('audio-not-paused-when-hidden', msg, vpName));
      }
      const paused = await pa('window.__pa ? window.__pa.paused : undefined');
      if (paused === false) violations.push(rule('not-paused-when-hidden', 'реклама скрыта, а игра не на паузе (__pa.paused = false)', vpName));
    } else if ('show' in step) {
      await pa('window.__paProbe.setHidden(false)');
      await page.waitForTimeout(300);
    } else if ('timeScale' in step) {
      await pa(`window.__pa && window.__pa.setTimeScale && window.__pa.setTimeScale(${Number(step.timeScale)})`);
    } else if ('fps' in step) {
      const fps = await pa(`window.__paProbe.fps(${Number(step.fps) || 2000})`);
      findings.push({ id: 'fps', message: `FPS ${fps ? fps.toFixed(1) : '—'} (${ctx.renderer})`, viewport: vpName });
    } else {
      throw infra(`непонятный шаг сценария: ${JSON.stringify(step)}`);
    }
  }

  const probe = (await pa('JSON.parse(JSON.stringify(window.__paProbe))')) || { inputs: [], cta: [], audio: [], errors: [], lifecycle: [], storage: [] };

  // ---- runtime rules --------------------------------------------------------------------
  if (crashed) violations.push(rule('page-crash', 'страница упала во время прогона', vpName));

  // Chromium's "Failed to load resource" line carries no URL; the response log does, so a
  // missing file is reported once, by name, instead of as an anonymous console error.
  const blockedNoise = (text) => /ERR_FAILED|ERR_BLOCKED|ERR_ABORTED/.test(text) && external.length > 0;
  const missingNoise = (text) => /Failed to load resource: the server responded with a status of/.test(text) && missing.length > 0;
  const errs = [...new Set([...pageErrors, ...probe.errors.map((e) => e.m), ...consoleErrors.filter((t) => !blockedNoise(t) && !missingNoise(t))])];
  for (const e of errs.slice(0, 10)) violations.push(rule('console-error', e.slice(0, 300), vpName));
  for (const m of [...new Set(missing)].slice(0, 10)) violations.push(rule('missing-file', `файл не найден: ${m}`, vpName));

  for (const url of [...new Set(external)].slice(0, 10)) violations.push(rule('external-request', `запрос наружу: ${url}`, vpName));

  for (const a of probe.audio) {
    if (a.inputs > 0) continue;
    if (a.e === 'start' || (a.e === 'media.play' && !a.muted)) {
      violations.push(rule('audio-before-interaction', `звук запущен до первого касания (${a.e} на ${a.t} мс)`, vpName));
      break;
    }
  }
  if (probe.audio.some((a) => a.e === 'resume' && a.inputs === 0)) {
    findings.push({ id: 'audio-resume-early', message: 'AudioContext.resume() до первого касания: звука нет, но попытка была', viewport: vpName });
  }

  for (const c of probe.cta) {
    if (c.inputs === 0) violations.push(rule('cta-without-input', `переход в стор без действия игрока (${c.api} на ${c.t} мс)`, vpName));
    if (!net.cta.includes(c.api)) violations.push(rule('cta-wrong-api', `${netName} открывает стор через ${net.cta.join(' / ')}, а вызван ${c.api}`, vpName));
  }
  const firstTap = tapLog[0];
  if (firstTap && firstTap.kind === 'game') {
    const onFirst = probe.cta.filter((c) => c.inputs === 1);
    if (onFirst.length) violations.push(rule('cta-on-first-tap', `первый игровой тап открыл стор (${onFirst[0].api})`, vpName));
  }

  if (net.requiresGameReady && !probe.lifecycle.some((l) => l.e === 'gameReady')) {
    violations.push(rule('mintegral-game-ready', 'Mintegral: не вызван window.gameReady()', vpName));
  }
  if (net.requiresGameEnd && reachedEnd && !probe.lifecycle.some((l) => l.e === 'gameEnd')) {
    violations.push(rule('mintegral-game-end', 'Mintegral: игра закончилась, а window.gameEnd() не вызван', vpName));
  }
  if (net.bansLocalStorage && probe.storage.length) {
    violations.push(rule('local-storage', `${netName} запрещает localStorage, а он использован (${probe.storage[0].e})`, vpName));
  }

  const coverage = await pa(`(() => { const c = [...document.querySelectorAll('canvas')].map(e => e.getBoundingClientRect()).sort((a,b) => b.width*b.height - a.width*a.height)[0]; return c ? Math.min(1, (Math.min(c.right, innerWidth) - Math.max(c.left, 0)) * (Math.min(c.bottom, innerHeight) - Math.max(c.top, 0)) / (innerWidth * innerHeight)) : null })()`);
  if (coverage !== undefined && coverage !== null && coverage < 0.9) {
    findings.push({ id: 'canvas-coverage', message: `канвас закрывает ${(coverage * 100).toFixed(0)}% экрана`, viewport: vpName });
  }

  // The whole console, for whoever debugs a red run (Unity/Luna Debug.Log lands here too),
  // and every postMessage the page sent (how a Playworks develop build talks to its host).
  const messages = (probe.messages || []).map((m) => `[message ${m.t} ms] ${m.data}`);
  writeFileSync(join(dir, 'console.txt'), [...consoleAll, ...messages].join('\n') + '\n');
  await context.close();
  if (video) {
    for (const n of readdirSync(dir)) if (n.endsWith('.webm') && n !== 'journey.webm') renameSync(join(dir, n), join(dir, 'journey.webm'));
  }
  return { viewport: vpName, violations, findings, frames, cta: probe.cta, inputs: probe.inputs.length };
}

async function rendererName(browser) {
  const page = await browser.newPage();
  const name = await page.evaluate(() => {
    const gl = document.createElement('canvas').getContext('webgl');
    if (!gl) return 'WebGL недоступен';
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
  }).catch(() => 'неизвестно');
  await page.close();
  return name;
}

// ---------------------------------------------------------------------------- report
function writeReport(out, r) {
  writeFileSync(join(out, 'report.json'), JSON.stringify(r, null, 2));
  const lines = [];
  const verdict = r.verdict === 'clean' ? 'ЧИСТО' : r.verdict === 'violations' ? `НАРУШЕНИЯ: ${r.violations.length}` : 'ПРОГОН НЕ СОСТОЯЛСЯ';
  lines.push(`# pa-qa: ${r.network}`, '', `**Вердикт: ${verdict}**`, '');
  lines.push(`- файл: \`${r.input}\``, `- сценарий: ${r.journey}`, `- экраны: ${r.viewports.join(', ')}`, `- рендер: ${r.renderer}`, '');
  if (r.error) lines.push('## Инфраструктура', '', r.error, '');
  if (r.violations.length) {
    lines.push('## Нарушения', '', '| правило | экран | что не так |', '|---|---|---|');
    for (const v of r.violations) lines.push(`| ${v.id} | ${v.viewport || '—'} | ${v.message.replace(/\|/g, '\\|')} |`);
    lines.push('');
  }
  if (r.findings.length) {
    lines.push('## Наблюдения (не проваливают прогон)', '');
    for (const f of r.findings) lines.push(`- ${f.viewport ? `[${f.viewport}] ` : ''}${f.message}`);
    lines.push('');
  }
  if (r.frames.length) {
    lines.push('## Кадры', '', 'Пары: `-a`, через 400 мс `-b`. Смотреть обе: один кадр не покажет, что что-то стоит на месте.', '');
    for (const f of r.frames) lines.push(`- ${f}`);
  }
  writeFileSync(join(out, 'report.md'), lines.join('\n') + '\n');
}

// ---------------------------------------------------------------------------- main
async function main() {
  let args;
  try { args = parseArgs(process.argv.slice(2)); } catch (e) { console.error(e.message + '\n' + USAGE); return INFRA; }
  if (args.help || !args.html) { console.log(USAGE); return args.help ? 0 : INFRA; }

  const net = NETWORKS[args.network];
  if (!net) { console.error(`неизвестная сеть ${args.network}: ${Object.keys(NETWORKS).join(', ')}`); return INFRA; }
  const out = resolve(args.out || join('qa-out', args.network));
  mkdirSync(out, { recursive: true });

  const report = {
    tool: 'pa-qa', network: args.network, input: args.html, journey: args.journey || '(встроенный smoke)',
    viewports: args.viewports.split(',').map((s) => s.trim()).filter(Boolean),
    renderer: '', verdict: 'no-verdict', violations: [], findings: [], frames: [], runs: [],
  };

  let input;
  let server;
  let browser;
  try {
    input = resolveInput(args.html);
    // A folder build (a Playworks develop build) may be entered through one of its pages
    // (iframe.html is the playable, index.html the Dev Environment around it): judge the
    // folder, not the page.
    if (net.format === 'dir' && input.kind === 'html') {
      input.kind = 'dir';
      input.bytes = dirSize(input.root);
    }
    const journey = loadJourney(args.journey);
    const st = staticRules(input, net, args.network);
    report.violations.push(...st.violations);
    report.findings.push(...st.findings);

    server = await serve(input.root, { devTracing: args.network === 'luna' });
    const origin = `http://127.0.0.1:${server.address().port}`;

    const { chromium } = await import('playwright');
    const launch = { headless: !args.headed, args: [] };
    if (args.gpu) {
      launch.channel = 'chromium';
      launch.args.push('--enable-gpu', '--ignore-gpu-blocklist', '--use-angle=d3d11');
    }
    try {
      browser = await chromium.launch(launch);
    } catch (e) {
      throw infra(`браузер не запустился: ${e.message.split('\n')[0]}. Установлен ли Chromium: npx playwright install chromium`);
    }
    report.renderer = await rendererName(browser);

    for (const vpName of report.viewports) {
      const r = await runViewport(browser, {
        vpName, input, net, netName: args.network, journey, out, origin,
        seed: journey.seed ?? args.seed, video: args.video, timeout: args.timeout, renderer: report.renderer,
      });
      report.violations.push(...r.violations);
      report.findings.push(...r.findings);
      report.frames.push(...r.frames);
      report.runs.push({ viewport: r.viewport, cta: r.cta, inputs: r.inputs });
    }
    report.verdict = report.violations.length ? 'violations' : 'clean';
  } catch (e) {
    report.verdict = 'no-verdict';
    report.error = e.infra ? e.message : `${e.message}\n${e.stack}`;
  } finally {
    if (browser) await browser.close().catch(() => {});
    if (server) server.close();
    if (input && input.temp) rmSync(input.root, { recursive: true, force: true });
  }

  writeReport(out, report);
  const head = report.verdict === 'clean' ? 'ЧИСТО' : report.verdict === 'violations' ? `НАРУШЕНИЯ ${report.violations.length}` : 'ПРОГОН НЕ СОСТОЯЛСЯ';
  console.log(`pa-qa ${args.network}: ${head}  (${join(out, 'report.md')})`);
  for (const v of report.violations) console.log(`  X ${v.id}${v.viewport ? ` [${v.viewport}]` : ''}: ${v.message}`);
  for (const f of report.findings) console.log(`  · ${f.viewport ? `[${f.viewport}] ` : ''}${f.message}`);
  if (report.error) console.log(`  ! ${report.error.split('\n')[0]}`);
  return report.verdict === 'clean' ? 0 : report.verdict === 'violations' ? VIOLATION : INFRA;
}

main().then((code) => process.exit(code), (e) => { console.error(e); process.exit(INFRA); });
