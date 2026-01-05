const cacheName = "reeha-v3";
const assets = [
  "./",
  "./index.html",
  "./2026.html",
  "./2027.html",
  "./manifest.json",
  "./media/mobillogo.webp",
  "./media/logo.webp",
  "./media/ask.webp",
  "./media/ask1.webp",
  "./media/ask2.webp",
  "./media/ask3.webp",
  "./media/ask4.webp",
  "./media/ask5.webp",
  "./media/ask6.webp",
  "./media/ask7.webp",
  "./media/askim.mp3",
  "./media/askim2.mp3"
];

// Dosyaları telefona kaydet (Önbelleğe al)
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Eski önbellekleri temizle
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== cacheName).map((k) => caches.delete(k))
      );
    })
  );
});

// Resimleri ve şarkıları hafızadan oku (Hızlandır)
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
