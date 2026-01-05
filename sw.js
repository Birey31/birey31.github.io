const cacheName = "reeha-v4"; // Versiyonu v4 yaptık
const assets = [
  "./",
  "./index.html",
  "./2026.html",
  "./2027.html",
  "./manifest.json",
  "./media/mobillogo.webp",
  "./media/logo.webp",
  "./media/logo2.webp", // Yeni eklediğimiz logoyu buraya ekledik
  "./media/ask.webp",
  "./media/ask1.webp"
  // ... diğer varlıkların listesi aynı kalabilir
];

// Dosyaları yükle
self.addEventListener("install", (e) => {
  self.skipWaiting(); // Yeni versiyon yüklendiğinde bekleme, hemen geç
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Eski önbellekleri anında temizle
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((k) => {
          if (k !== cacheName) {
            return caches.delete(k);
          }
        })
      );
    }).then(() => self.clients.claim()) // Kontrolü hemen ele al
  );
});

// GÜNCELLEME BURADA: Önce internete bak, internet yoksa hafızadan oku
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // İnternet varsa güncel halini al ve hafızayı güncelle
        const resClone = res.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch(() => caches.match(e.request)) // İnternet yoksa hafızadakini göster
  );
});
