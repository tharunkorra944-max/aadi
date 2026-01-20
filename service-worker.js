self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('adc-dashboard-v1').then(function(cache) {
      return cache.addAll([
        './',
        'Adichenchunagiri Dashboard.html',
        'manifest.json',
        // Add other assets if needed
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
