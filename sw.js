if(importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"),workbox){workbox.precaching.precacheAndRoute([{url:"/index.html",revision:"1"},{url:"/main.min.css",revision:"1"},{url:"/manifest.json",revision:"1"},{url:"/android-chrome-192x192.png",revision:null},{url:"/android-chrome-512x512.png",revision:null},{url:"/apple-touch-icon.png",revision:null},{url:"/browserconfig.xml",revision:null},{url:"/favicon-32x32.png",revision:null},{url:"/mstile-150x150.png",revision:null},{url:"/safari-pinned-tab.svg",revision:null}]);const o=workbox.precaching.createHandlerBoundToURL("/index.html"),e=new workbox.routing.NavigationRoute(o);workbox.routing.registerRoute(e),workbox.routing.registerRoute(({request:o})=>"style"===o.destination,new workbox.strategies.StaleWhileRevalidate({cacheName:"css-cache"}))}
