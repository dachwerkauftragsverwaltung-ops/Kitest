const CACHE='dachwerk-v20261028-axis-lines-and-dimensions';
const ASSETS=['./','./index.html','./style.css','./app.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./dachwerk-logo.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

// PROTOTYP6 cache refresh marker: 2026-10-08-2016

// PROTOTYP7 cache refresh marker: 2026-10-08-2125
// FIX: Ohne Terminvergabe bleibt in Aufträge und wird nicht als Büro/erledigt behandelt (2026-10-25)

// Cache refresh for responsive all-orders map and per-order visibility controls.

// DACHWERK 2 test twin: gallery picker + technical drawing cache refresh 2026-10-28

// DACHWERK 2: editable dimension-line draft handles before commit (2026-10-28)

// DACHWERK 2: horizontal/vertical measure lines, whole-line drag and manual dimension label (2026-10-28)
