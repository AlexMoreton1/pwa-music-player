if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const f=e=>c(e,d),a={module:{uri:d},exports:o,require:f};i[d]=Promise.all(n.map((e=>a[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-9cbc1cc6"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"93ce05dd7386b072bc791fd69f0c637c"},{url:"android-chrome-256x256.png",revision:"2f01f81ae374b56fd39fe0bf90a93e62"},{url:"android-chrome-512x512.png",revision:"cadbc480576592ca10a15d57c911733f"},{url:"apple-touch-icon.png",revision:"ed308cd7d7d35e2449f796aaa0645e9b"},{url:"browserconfig.xml",revision:"0f181289d3870795841c7b87e64ef043"},{url:"favicon-16x16.png",revision:"61a1cb1cbf5276563ab81bd305a5ea1d"},{url:"favicon-32x32.png",revision:"5a4abcc69e9eecd7d854957ce87908e0"},{url:"favicon-48x48.png",revision:"c19fcf777b742223d9885d71d41ad093"},{url:"favicon.ico",revision:"91388d311d9c28bb270488fe987b34d9"},{url:"icon-128x128.png",revision:"278d1a514c3ffee71c875a9e6fb0a3c6"},{url:"icon-144x144.png",revision:"6bfd800df9bba2e75fe80f7ad28b463a"},{url:"icon-152x152.png",revision:"93eaf37d59c5c58e690533e2d04bd654"},{url:"icon-192x192.png",revision:"dbc54dc22d59b265beebed10e8a43cce"},{url:"icon-384x384.png",revision:"a5ccef69dd7d153b72e98deb0f8b50a7"},{url:"icon-512x512.png",revision:"e187d93ef5144b398ae93aacab46f035"},{url:"icon-72x72.png",revision:"792f14b441b967ccc65ff83f18c18f81"},{url:"icon-96x96.png",revision:"9a1588d87c575fd207320f313f690199"},{url:"index.html",revision:"3b020e3cd93ad833d008768585e3d37b"},{url:"manifest.json",revision:"06e6fdfb044076668ec194f58a7d36e0"},{url:"mstile-150x150.png",revision:"e9071028efd53ae98035642aba44bdde"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"8def3e6ac9dff0bfa6396fc5bc18c94c"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map
