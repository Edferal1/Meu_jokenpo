const CACHE_NAME = "jokenpo-v1";

self.addEventListener("install", event => {
    console.log("Service Worker instalado");
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                "./",
                "./index.html",
                "./manifest.json",
                "./icon-192.png",
                "./icon-512.png",
                "./pc.png",
                "./pcpedra.png",
                "./pcpapel.png",
                "./pctesoura.png"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
