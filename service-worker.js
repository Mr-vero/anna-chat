if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const f=e=>i(e,n),o={module:{uri:n},exports:r,require:f};s[n]=Promise.all(c.map((e=>o[e]||f(e)))).then((e=>(a(...e),r)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/Framework7Icons-Regular-2_UcA6v9.woff2",revision:"4a39aba9fb8a2f831fa437780e1a058a"},{url:"assets/Framework7Icons-Regular-6HKbhkhc.woff",revision:"d03b787b6492fa2b0141c43fb7e56689"},{url:"assets/index-eX5CD9pL.css",revision:"6801f10edf195e15820dfc0b38ea1843"},{url:"assets/index-qaxQKwQ4.js",revision:"472ca11ce602da66c074d78a5cae63f1"},{url:"assets/material-icons-69IKE8Hh.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/material-icons-JAMAXUYH.woff2",revision:"53436aca8627a49f4deaaa44dc9e3c05"},{url:"icons/128x128.png",revision:"f20f8dfd0d645d193c439075ac23d96b"},{url:"icons/144x144.png",revision:"42b533434f775800c4aa3a6da801f949"},{url:"icons/152x152.png",revision:"8e08d65a20bc8c7e444a359671c6c243"},{url:"icons/192x192.png",revision:"ffd308ef80a2c2d8bc9aa7af7776b460"},{url:"icons/256x256.png",revision:"986effcf3e2a4f3803a5ce7ae76bb9a1"},{url:"icons/512x512.png",revision:"1e72d37b2f4b49cdbd02b5a8ac480e21"},{url:"icons/apple-touch-icon.png",revision:"986effcf3e2a4f3803a5ce7ae76bb9a1"},{url:"icons/favicon.png",revision:"f20f8dfd0d645d193c439075ac23d96b"},{url:"icons/user.png",revision:"5405d77c51fb46a0cbf26cb96fe4da4d"},{url:"index.html",revision:"ecb6c3aa3387c2e5ba4b2d9f8de3c1fb"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map
