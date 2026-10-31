const CACHE_NAME = 'rhm-2027-vip-v1';

// Danh sách các tệp giao diện cốt lõi cần lưu ngoại tuyến
const STATIC_ASSETS = [
  './',
  './index.html',
  './Play.html',
  './Flashcard.html',
  './Read.html',
  './manifest.json',
  './icon.svg',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
];

// 1. Cài đặt Service Worker & Lưu các tệp giao diện
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// 2. Dọn dẹp bộ nhớ đệm cũ khi có bản cập nhật mới
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// 3. Điều phối luồng dữ liệu (Offline-ready)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Chiến thuật Network-First cho link CSV Google Sheets (luôn lấy đề mới nhất nếu có mạng)
  if (req.url.includes('docs.google.com/spreadsheets')) {
    event.respondWith(
      fetch(req)
        .then((networkRes) => {
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          return networkRes;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Chiến thuật Stale-While-Revalidate cho các tệp HTML, Font, Icon
  event.respondWith(
    caches.match(req).then((cachedRes) => {
      const fetchPromise = fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const resClone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          }
          return networkRes;
        })
        .catch(() => cachedRes);

      return cachedRes || fetchPromise;
    })
  );
});
