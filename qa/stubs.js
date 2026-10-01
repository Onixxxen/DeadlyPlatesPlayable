// Injected into the page before any playable script (page.addInitScript). It plays the ad
// container: it provides exactly the APIs of one network and records everything the rules
// judge. Plain ES2020, no imports: it runs inside the page, not in Node.
//
// `__PA_NET__` is replaced by pa-qa with the network entry from networks.mjs (JSON).
(() => {
  const NET = __PA_NET__;
  const P = (window.__paProbe = {
    net: NET.name,
    t0: performance.now(),
    inputs: [],
    cta: [],
    audio: [],
    errors: [],
    lifecycle: [],
    storage: [],
    contexts: [],
    hidden: false,
  });
  const now = () => Math.round(performance.now() - P.t0);

  // --- input: capture phase, before the playable sees it --------------------------------
  // One physical tap arrives as touchstart + pointerdown + mousedown; count it once, or
  // "the first tap" would be three inputs and the first-tap rule would judge nothing.
  const onInput = (type) => {
    const t = now();
    const last = P.inputs[P.inputs.length - 1];
    if (last && t - last.t < 40) return;
    P.inputs.push({ type, t });
  };
  for (const type of ['pointerdown', 'touchstart', 'mousedown', 'keydown']) {
    addEventListener(type, () => onInput(type), true);
  }

  const cta = (api, arg) =>
    P.cta.push({ api, arg: arg === undefined ? '' : String(arg), t: now(), inputs: P.inputs.length });

  // --- network APIs: only the ones this network provides ----------------------------------
  const listeners = {};
  let viewable = true;
  let state = 'loading';
  const fire = (event, ...args) => {
    (listeners[event] || []).slice().forEach((fn) => {
      try { fn(...args); } catch (e) { P.errors.push({ m: 'mraid listener: ' + e, t: now() }); }
    });
  };

  if (NET.apis.includes('mraid')) {
    const size = () => ({ width: innerWidth, height: innerHeight });
    window.mraid = {
      getVersion: () => NET.mraidVersion || '2.0',
      getState: () => state,
      isViewable: () => viewable,
      getPlacementType: () => 'interstitial',
      addEventListener: (e, fn) => { (listeners[e] = listeners[e] || []).push(fn); },
      removeEventListener: (e, fn) => { listeners[e] = (listeners[e] || []).filter((f) => f !== fn); },
      open: (url) => cta('mraid.open', url),
      close: () => P.lifecycle.push({ e: 'mraid.close', t: now() }),
      expand: () => {}, resize: () => {}, useCustomClose: () => {},
      setOrientationProperties: () => {}, getOrientationProperties: () => ({ allowOrientationChange: true, forceOrientation: 'none' }),
      setExpandProperties: () => {}, getExpandProperties: () => ({ ...size(), useCustomClose: false, isModal: true }),
      setResizeProperties: () => {}, getResizeProperties: () => size(),
      getMaxSize: size, getScreenSize: size,
      getCurrentPosition: () => ({ x: 0, y: 0, ...size() }),
      getDefaultPosition: () => ({ x: 0, y: 0, ...size() }),
      supports: () => false,
      isAudioMuted: () => false, getAudioVolume: () => 100, // MRAID 3.0
    };
    // The container becomes ready after the page parsed, then the ad becomes visible.
    addEventListener('DOMContentLoaded', () => setTimeout(() => {
      state = 'default';
      fire('ready');
      fire('stateChange', 'default');
      fire('viewableChange', true);
      fire('exposureChange', 100, null, null);
    }, 50));
  }

  if (NET.apis.includes('fbplayable')) {
    window.FbPlayableAd = { onCTAClick: () => cta('FbPlayableAd.onCTAClick') };
  }
  if (NET.apis.includes('exitapi')) {
    window.ExitApi = { exit: () => cta('ExitApi.exit') };
  }
  if (NET.apis.includes('mintegral')) {
    window.install = () => cta('mintegral.install');
    window.gameReady = () => P.lifecycle.push({ e: 'gameReady', t: now() });
    window.gameEnd = () => P.lifecycle.push({ e: 'gameEnd', t: now() });
    window.gameRetry = () => P.lifecycle.push({ e: 'gameRetry', t: now() });
    window.gameClose = () => P.lifecycle.push({ e: 'gameClose', t: now() });
  }
  if (NET.apis.includes('tiktok')) {
    window.openAppStore = () => cta('tiktok.openAppStore');
  }

  // Any network: a store opened by navigation or a new window is still a CTA, and it must
  // not actually leave the page during a run.
  window.open = (url) => { cta('window.open', url); return null; };
  // The preview adapter of the skeleton reports here instead of opening anything.
  window.__paPreviewCta = (url) => cta('preview.cta', url);

  // A Playworks develop build runs inside its Dev Environment page and reports to it with
  // postMessage; opened on its own, window.parent is the window itself, so the message lands here.
  P.messages = [];
  addEventListener('message', (e) => {
    let text;
    try { text = typeof e.data === 'string' ? e.data : JSON.stringify(e.data); } catch (_) { text = String(e.data); }
    P.messages.push({ t: now(), data: String(text).slice(0, 300) });
    if (NET.cta.includes('postMessage') && /install|store|cta|click.?through/i.test(text)) cta('postMessage', String(text).slice(0, 200));
  });

  // --- audio: record every attempt to make sound, with how many inputs preceded it -------
  const AC = window.AudioContext || window.webkitAudioContext;
  if (AC) {
    const Wrapped = function (...args) {
      const ctx = new AC(...args);
      P.contexts.push(ctx);
      const resume = ctx.resume.bind(ctx);
      ctx.resume = () => { P.audio.push({ e: 'resume', t: now(), inputs: P.inputs.length }); return resume(); };
      return ctx;
    };
    Wrapped.prototype = AC.prototype;
    window.AudioContext = Wrapped;
    window.webkitAudioContext = Wrapped;
  }
  if (window.AudioScheduledSourceNode) {
    const start = AudioScheduledSourceNode.prototype.start;
    AudioScheduledSourceNode.prototype.start = function (...args) {
      P.audio.push({ e: 'start', t: now(), inputs: P.inputs.length, ctx: this.context && this.context.state });
      return start.apply(this, args);
    };
  }
  if (window.HTMLMediaElement) {
    const play = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function () {
      P.audio.push({ e: 'media.play', t: now(), inputs: P.inputs.length, muted: !!this.muted });
      return play.call(this);
    };
  }

  // --- storage: Google Ads bans it; everyone else merely gets it recorded -----------------
  try {
    for (const k of ['getItem', 'setItem', 'removeItem', 'clear']) {
      const orig = Storage.prototype[k];
      Storage.prototype[k] = function (...args) {
        P.storage.push({ e: k, t: now() });
        return orig.apply(this, args);
      };
    }
  } catch (_) { /* storage unavailable: nothing to record */ }

  // --- errors -------------------------------------------------------------------------------
  addEventListener('error', (e) => P.errors.push({ m: String(e.message || e), t: now() }));
  addEventListener('unhandledrejection', (e) => P.errors.push({ m: 'unhandledrejection: ' + String(e.reason), t: now() }));

  // --- controls pa-qa drives from outside ------------------------------------------------
  P.setHidden = (hidden) => {
    P.hidden = hidden;
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => hidden });
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => (hidden ? 'hidden' : 'visible') });
    document.dispatchEvent(new Event('visibilitychange'));
    if (window.mraid && NET.apis.includes('mraid')) {
      viewable = !hidden;
      fire('viewableChange', !hidden);
      fire('exposureChange', hidden ? 0 : 100, null, null);
    }
  };
  P.fps = (ms = 2000) => new Promise((resolve) => {
    let frames = 0;
    const start = performance.now();
    const tick = () => {
      frames++;
      if (performance.now() - start < ms) requestAnimationFrame(tick);
      else resolve(frames / ((performance.now() - start) / 1000));
    };
    requestAnimationFrame(tick);
  });
  P.audioStates = () => P.contexts.map((c) => c.state);
})();
