// What each ad network provides to a playable and what it demands of the file.
// Sources (checked 2026-10-01): AppLovin support.axon.ai creatives guidelines; Unity Ads
// docs.unity.com/grow/acquire/creatives/playable/specifications; Google Ads answer 9981650;
// Meta developers.facebook.com/docs/app-ads/formats/playable-ad; Mintegral mindworks-creative
// review/doc; TikTok ads.tiktok.com/help/article/playable-ads; Liftoff docs.liftoff.io;
// Moloco help.moloco.com/hc/en-us/articles/24124525963799.
//
// `apis`   — globals the container injects; pa-qa stubs exactly these and nothing else, so a
//            playable calling another network's API fails loudly instead of passing.
// `cta`    — the call that counts as "open the store" for this network.
// `limit`  — bytes of the delivered file (single HTML, or the ZIP).
// `format` — 'html' single inlined file, 'zip' archive with index.html.
// `must`   — static markers the delivered HTML must contain.
// `mustNot`— static markers it must not contain.

const MB = 1024 * 1024;

export const NETWORKS = {
  applovin: {
    format: 'html', limit: 5 * MB, apis: ['mraid'], mraidVersion: '2.0', cta: ['mraid.open'],
    must: [/<script[^>]+src=["']mraid\.js["']/i], mustNot: [],
  },
  unity: {
    format: 'html', limit: 5 * MB, apis: ['mraid'], mraidVersion: '3.0', cta: ['mraid.open'],
    must: [/<script[^>]+src=["']mraid\.js["']/i], mustNot: [],
  },
  liftoff: {
    format: 'html', limit: 5 * MB, apis: ['mraid'], mraidVersion: '2.0', cta: ['mraid.open'],
    must: [/<script[^>]+src=["']mraid\.js["']/i], mustNot: [],
  },
  google: {
    format: 'zip', limit: 5 * MB, apis: ['exitapi'], cta: ['ExitApi.exit'],
    must: [/exitapi\.js/i, /<meta[^>]+name=["']ad\.orientation["']/i], mustNot: [/mraid\.js/i],
    bansLocalStorage: true,
  },
  meta: {
    format: 'html', limit: 2 * MB, apis: ['fbplayable'], cta: ['FbPlayableAd.onCTAClick'],
    must: [/FbPlayableAd\.onCTAClick/], mustNot: [/mraid\.js/i],
  },
  moloco: {
    format: 'html', limit: 5 * MB, apis: ['fbplayable'], cta: ['FbPlayableAd.onCTAClick'],
    must: [/FbPlayableAd\.onCTAClick/], mustNot: [/mraid\.js/i],
  },
  mintegral: {
    format: 'zip', limit: 5 * MB, apis: ['mintegral'], cta: ['mintegral.install'],
    must: [/gameReady/, /gameEnd/], mustNot: [], requiresGameReady: true, requiresGameEnd: true,
  },
  tiktok: {
    format: 'zip', limit: 5 * MB, apis: ['tiktok'], cta: ['tiktok.openAppStore'],
    must: [/openAppStore/], mustNot: [/mraid\.js/i], zipMustHave: ['config.json'],
  },
  // The GitHub Pages demo: no container at all, the playable shows its own store stub.
  preview: {
    format: 'html', limit: 5 * MB, apis: [], cta: ['preview.cta'], must: [], mustNot: [],
  },
  // A Unity Playworks develop build: the Luna runtime owns the CTA; accept any of the
  // ways it can reach a store.
  luna: {
    format: 'dir', limit: 5 * MB, apis: ['mraid'], mraidVersion: '3.0',
    cta: ['mraid.open', 'window.open', 'preview.cta', 'postMessage'], must: [], mustNot: [], sizeIsInformational: true,
    audioPauseIsInformational: true,
  },
};

// External scripts a network container provides. pa-qa answers them with an empty stub
// instead of letting them hit the internet (and instead of counting them as violations).
export const CONTAINER_SCRIPTS = [
  /\/mraid\.js(\?.*)?$/i,
  /tpc\.googlesyndication\.com\/pagead\/gadgets\/html5\/api\/exitapi\.js/i,
  /\/playable\/sdk\/playable-sdk\.js/i,
];

export const VIEWPORTS = {
  portrait: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  landscape: { width: 844, height: 390, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  tablet: { width: 820, height: 1180, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
};
