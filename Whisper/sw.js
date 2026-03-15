// Increment this version number every time you update the app
const CACHE_VERSION = 'whisper-v3';
const ASSETS = ['./index.html', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_VERSION).then(c => c.addAll(ASSETS))
  );
  // Force immediate activation — don't wait for old tabs to close
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    // Delete ALL old caches
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Never cache API calls or fonts — always fetch fresh
  if (
    e.request.url.includes('supabase.co') ||
    e.request.url.includes('huggingface.co') ||
    e.request.url.includes('fonts.googleapis.com')
  ) {
    return; // Let browser handle it normally
  }
  // For app files: try network first, fall back to cache
  e.respondWith(
    fetch(e.request).then(res => {
      const clone = res.clone();
      caches.open(CACHE_VERSION).then(c => c.put(e.request, clone));
      return res;
    }).catch(() => caches.match(e.request))
  );
});
