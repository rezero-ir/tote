if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),l={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>l[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e4da89b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"078242eb6af074d4a6d7ad3ab2544dc5"},{url:"assets/index.b435c9b2.css",revision:null},{url:"assets/index.f750ff15.js",revision:null},{url:"assets/vendor.e88f3336.js",revision:null},{url:"assets/writing-hand.71521691.gif",revision:null},{url:"img/icons/icon-72x72.png",revision:"517eea541343a61f81807d12e708ff31"},{url:"img/icons/icon-96x96.png",revision:"6aeedac72b05cd332a54f89ab715583c"},{url:"img/icons/icon-128x128.png",revision:"df8ff737b9cac297401d8c024ce4b4e4"},{url:"img/icons/icon-144x144.png",revision:"bfc3191f31265fb72abc8a5da98a1731"},{url:"manifest.webmanifest",revision:"8024823523676b251f9575ef4fc443ec"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
