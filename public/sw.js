importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"),workbox&&(workbox.routing.registerNavigationRoute("https://wopian.me/index.html"),workbox.routing.registerRoute(/\.(?:js|css|html)$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"content"})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.cacheableResponse.Plugin({statuses:[0,200]}),new workbox.expiration.Plugin({maxAgeSeconds:31536e3,maxEntries:30})]})),workbox.routing.registerRoute(/\.(?:png|svg|xml|ico|json)$/,new workbox.strategies.CacheFirst({cacheName:"icons",plugins:[new workbox.expiration.Plugin({maxEntries:60,maxAgeSeconds:2592e3})]})),addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&skipWaiting()}))
