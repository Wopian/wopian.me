if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const t=e=>n(e,c),d={module:{uri:c},exports:r,require:t};i[c]=Promise.all(o.map((e=>d[e]||t(e)))).then((e=>(s(...e),r)))}}define(["./workbox-e8f5ea68"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"28086721c539ccb5bd61691a5330b25e"},{url:"favicon.png",revision:"41235024c525aa134bc0ea7de5add705"},{url:"favicon.svg",revision:"035726755540dd5d3842b3330df44220"},{url:"index.html",revision:"ac470e80eec445c7001c54c87623aadd"},{url:"logo.png",revision:"4844695d5716a0d4ed0f77f15e0d30e8"},{url:"logo.svg",revision:"3df232935fa956eb77f13c69adb4ada6"},{url:"main.min.css",revision:"c0be6786f7b56dd95e0b7ef62ad3abbb"},{url:"mask-icon.svg",revision:"173e780e2d6911f25fa712a34f892ceb"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.CacheFirst({cacheName:"google-fonts",plugins:[]}),"GET")}));
