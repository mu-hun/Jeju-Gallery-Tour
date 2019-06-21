if (workbox) {
	workbox.precaching.precacheAndRoute(self.__precacheManifest)
	workbox.routing.registerNavigationRoute('/index.html')
	workbox.routing.registerRoute(
		/\.(?:png|gif|jpg|jpeg|webp|svg)$/,
		new workbox.strategies.CacheFirst({
			cacheName: 'images',
			plugins: [
				new workbox.expiration.Plugin({
					maxEntries: 60,
					maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
				}),
			],
		})
	)
	workbox.routing.registerRoute(
		/\.(?:js|css)$/,
		new workbox.strategies.StaleWhileRevalidate({
			cacheName: 'static-resources',
		})
	)
}

self.addEventListener('activate', evt => {
	evt.waitUntil(
		caches.keys()
		.then(names => Promise.all(
				names.map(name => {
					if (cacheWhitelist.indexOf(name) === -1)
						return caches.delete(name)
				}))
			.catch(err => console.log(err))
		)
	)
})
