const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AppPreact-BzWb7FyS.js","assets/htm.module-DO7Gmi3j.js","assets/mobx.esm-Bk1UdPHc.js","assets/AppReact-Cuvl7oai.js","assets/home-DdBDiKHU.js","assets/index-YsDheR60.css"])))=>i.map(i=>d[i]);
(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&c(t)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const A="modulepreload",S=function(r){return"/"+r},h={},d=function(s,n,c){let e=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),i=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));e=Promise.allSettled(n.map(l=>{if(l=S(l),l in h)return;h[l]=!0;const u=l.endsWith(".css"),O=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${O}`))return;const a=document.createElement("link");if(a.rel=u?"stylesheet":A,u||(a.as="script"),a.crossOrigin="",a.href=l,i&&a.setAttribute("nonce",i),document.head.appendChild(a),u)return new Promise((L,R)=>{a.addEventListener("load",L),a.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(t){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=t,window.dispatchEvent(i),!i.defaultPrevented)throw t}return e.then(t=>{for(const i of t||[])i.status==="rejected"&&o(i.reason);return s().catch(o)})},E={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};let g=!1;E||(g=!0);let f,$,w,m,v,p,_,b,P;const y=r=>{console.log("Module loaded:",r),{render:f,Fragment:$,html:w,Router:m,Route:v,LocationProvider:p,ErrorBoundary:_,Observer:b,getRouteProps:P}=r,console.log("render function:",f)},C=async()=>{try{if(g){const r=await d(()=>import("./AppPreact-BzWb7FyS.js"),__vite__mapDeps([0,1,2]));y(r)}else{const r=await d(()=>import("./AppReact-Cuvl7oai.js"),__vite__mapDeps([3,1,2]));y(r)}}catch(r){console.error("Error loading the module:",r)}},D=async()=>{const r=(await d(async()=>{const{default:s}=await import("./home-DdBDiKHU.js");return{default:s}},__vite__mapDeps([4,2]))).default;f(w` <${p}>
            <${_}>
              <${m}>
                <${v} path="/" ...${P(r)} />
              </${m}>
            </${_}>
          </${p}>
    `,document.body)};(async()=>{if(E)await d(()=>Promise.resolve({}),__vite__mapDeps([5]));else{const r=()=>fetch("./index.css").then(n=>n.text()).then(n=>{const c=document.createElement("style");c.textContent=n,document.head.appendChild(c)}).catch(console.error),s=()=>new Promise((n,c)=>{const e=document.createElement("script");e.src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,container-queries",e.onload=async()=>{const{default:o}=await d(async()=>{const{default:t}=await import("./tailwind.config-qjzy9oFx.js");return{default:t}},[]);tailwind.config=o,n(r())},e.onerror=c,document.head.appendChild(e)});try{await s()}catch(n){console.error(n)}}})().then(C).then(D);export{$ as F,b as O,w as h};
