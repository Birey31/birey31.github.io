self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    return caches.delete(cacheName); // Eski her şeyi temizler
                })
            );
        }).then(() => {
            return self.registration.unregister(); // Kendini imha eder
        })
    );
});
