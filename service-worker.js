const CACHE_NAME = "joyce-arrais-v20";
const CORE_ASSETS = [
  "./",
  "index.html",
  "css/main.css",
  "css/components.css",
  "css/responsive.css",
  "js/app.js",
  "js/components/Header.js",
  "js/components/Hero.js",
  "js/components/Services.js",
  "js/components/About.js",
  "js/components/Contact.js",
  "js/components/Footer.js",
  "js/components/WhatsAppButton.js",
  "js/utils/scroll.js",
  "js/utils/touch.js",
  "manifest.json",
  "assets/brand/logo-ja-mark.png",
  "assets/icons/favicon.svg",
  "assets/icons/touch-icon.svg",
  "assets/icons/og-cover.svg",
  "img/services/perfil-joyce-uniforme-02.jpeg",
  "img/services/perfil-joyce-avaliacao-01.jpeg",
  "img/services/facial-tratamento-01.jpeg",
  "img/services/facial-tratamento-02.jpeg",
  "img/services/facial-tratamento-03.jpeg",
  "img/services/facial-mascara-01.jpeg",
  "img/services/facial-mascara-02.jpeg",
  "img/services/facial-mascara-03.jpeg",
  "img/services/facial-mascara-04.jpeg",
  "img/services/facial-peeling-01.jpeg",
  "img/services/hydra-gloss-lips-resultado-01.jpeg",
  "img/services/hydra-gloss-lips-aplicacao-01.jpeg",
  "img/services/hydra-gloss-lips-arte-02.jpeg",
  "img/services/corporal-massagem-01.jpeg",
  "img/services/corporal-massagem-02.jpeg",
  "img/services/corporal-massagem-03.jpeg",
  "img/services/ozonioterapia-corporal-resultado-01.jpeg",
  "img/services/sobrancelhas-close-01.jpeg",
  "img/services/sobrancelhas-close-02.jpeg",
  "img/services/sobrancelhas-procedimento-01.jpeg",
  "img/services/maquiagem-olhar-01.jpeg",
  "img/services/maquiagem-social-01.jpeg",
  "img/services/maquiagem-social-04.jpeg",
  "img/services/maquiagem-social-05.jpeg",
  "img/services/maquiagem-social-06.jpeg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
            return networkResponse;
          }

          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => caches.match("index.html"));
    })
  );
});
