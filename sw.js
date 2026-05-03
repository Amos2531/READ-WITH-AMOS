const CACHE_NAME = 'read-with-amos-v1';
const urlsToCache = [
  '/READ-WITH-AMOS/',
  '/READ-WITH-AMOS/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});Add service worker
