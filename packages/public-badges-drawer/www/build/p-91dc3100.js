let t,e,n=!1;const l=new WeakMap,s=t=>"sc-"+t,o={},r=t=>"object"==(t=typeof t)||"function"===t,c=(t,e,...n)=>{let l=null,s=!1,o=!1,c=[];const a=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!r(l))&&(l=String(l)),s&&o?c[c.length-1].t+=l:c.push(s?i(null,l):l),o=s)};if(a(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}if("function"==typeof t)return t(e,c,u);const f=i(t,null);return f.l=e,c.length>0&&(f.s=c),f},i=(t,e)=>({o:0,i:t,t:e,u:null,s:null,l:null}),a={},u={forEach:(t,e)=>t.map(f).forEach(e),map:(t,e)=>t.map(f).map(e).map(p)},f=t=>({vattrs:t.l,vchildren:t.s,vkey:t.p,vname:t.h,vtag:t.i,vtext:t.t}),p=t=>{const e=i(t.vtag,t.vtext);return e.l=t.vattrs,e.s=t.vchildren,e.p=t.vkey,e.h=t.vname,e},d=(t,e,n,l,s,o)=>{if(n===l)return;let c=I(t,e),i=e.toLowerCase();if("class"===e){const e=t.classList,s=b(n),o=b(l);e.remove(...s.filter(t=>t&&!o.includes(t))),e.add(...o.filter(t=>t&&!s.includes(t)))}else if("style"===e){for(const e in n)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)n&&l[e]===n[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("ref"===e)l&&l(t);else if(c||"o"!==e[0]||"n"!==e[1]){const i=r(l);if((c||i&&null!==l)&&!s)try{if(t.tagName.includes("-"))t[e]=l;else{let s=null==l?"":l;"list"===e?c=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(a){}null==l||!1===l?t.removeAttribute(e):(!c||4&o||s)&&!i&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):I(W,i)?i.slice(2):i[2]+e.slice(3),n&&q.rel(t,e,n,!1),l&&q.ael(t,e,l,!1)},m=/\s/,b=t=>t?t.split(m):[],w=(t,e,n,l)=>{const s=11===e.u.nodeType&&e.u.host?e.u.host:e.u,r=t&&t.l||o,c=e.l||o;for(l in r)l in c||d(s,l,r[l],void 0,n,e.o);for(l in c)d(s,l,r[l],c[l],n,e.o)},h=(e,l,s)=>{let o,r,c=l.s[s],i=0;if(null!==c.t)o=c.u=H.createTextNode(c.t);else{if(n||(n="svg"===c.i),o=c.u=H.createElementNS(n?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",c.i),n&&"foreignObject"===c.i&&(n=!1),w(null,c,n),null!=t&&o["s-si"]!==t&&o.classList.add(o["s-si"]=t),c.s)for(i=0;i<c.s.length;++i)r=h(e,c,i),r&&o.appendChild(r);"svg"===c.i?n=!1:"foreignObject"===o.tagName&&(n=!0)}return o},$=(t,n,l,s,o,r)=>{let c,i=t;for(i.shadowRoot&&i.tagName===e&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=h(null,l,o),c&&(s[o].u=c,i.insertBefore(c,n)))},y=(t,e,n,l,s)=>{for(;e<=n;++e)(l=t[e])&&(s=l.u,_(l),s.remove())},g=(t,e)=>t.i===e.i,v=(t,e)=>{const l=e.u=t.u,s=t.s,o=e.s;n=l&&l.parentNode&&void 0!==l.ownerSVGElement,n="svg"===e.i||"foreignObject"!==e.i&&n,null===e.t?(w(t,e,n),null!==s&&null!==o?((t,e,n,l)=>{let s,o=0,r=0,c=e.length-1,i=e[0],a=e[c],u=l.length-1,f=l[0],p=l[u];for(;o<=c&&r<=u;)null==i?i=e[++o]:null==a?a=e[--c]:null==f?f=l[++r]:null==p?p=l[--u]:g(i,f)?(v(i,f),i=e[++o],f=l[++r]):g(a,p)?(v(a,p),a=e[--c],p=l[--u]):g(i,p)?(v(i,p),t.insertBefore(i.u,a.u.nextSibling),i=e[++o],p=l[--u]):g(a,f)?(v(a,f),t.insertBefore(a.u,i.u),a=e[--c],f=l[++r]):(s=h(e&&e[r],n,r),f=l[++r],s&&i.u.parentNode.insertBefore(s,i.u));o>c?$(t,null==l[u+1]?null:l[u+1].u,n,l,r,u):r>u&&y(e,o,c)})(l,s,e,o):null!==o?(null!==t.t&&(l.textContent=""),$(l,null,e,o,0,o.length-1)):null!==s&&y(s,0,s.length-1)):t.t!==e.t&&(l.data=e.t),n&&"svg"===e.i&&(n=!1)},_=t=>{t.l&&t.l.ref&&t.l.ref(null),t.s&&t.s.forEach(_)},j=(t,e)=>{e&&!t.$&&e["s-p"].push(new Promise(e=>t.$=e))},M=(t,e)=>{if(t.o|=16,4&t.o)return void(t.o|=512);const n=t.g,l=()=>S(t,n,e);let s;return j(t,t.v),e&&(t.o|=256,t._&&(t._.forEach(([t,e])=>k(n,t,e)),t._=null),s=k(n,"componentWillLoad")),P(s,()=>ot(l))},S=(n,o,r)=>{const u=n.j,f=u["s-rc"];r&&(t=>{const e=t.M,n=t.j,o=e.o,r=((t,e,n,o)=>{let r=s(e.S),c=X.get(r);if(t=11===t.nodeType?t:H,c)if("string"==typeof c){let n,s=l.get(t=t.head||t);if(s||l.set(t,s=new Set),!s.has(r)){if(q.O){n=q.O.createHostStyle(o,r,c,!!(10&e.o));const t=n["s-sc"];t&&(r=t,s=null)}else n=H.createElement("style"),n.innerHTML=c;t.insertBefore(n,t.querySelector("link")),s&&s.add(r)}}else t.adoptedStyleSheets.includes(c)||(t.adoptedStyleSheets=[c]);return r})(B&&n.shadowRoot?n.shadowRoot:n.getRootNode(),e,0,n);10&o&&(n["s-sc"]=r,n.classList.add(r+"-h"))})(n);((n,l)=>{const s=n.j,o=n.L||i(null,null),r=(u=l)&&u.i===a?l:c(null,null,l);var u;e=s.tagName,r.i=null,r.o|=4,n.L=r,r.u=o.u=s.shadowRoot||s,t=s["s-sc"],v(o,r)})(n,O(o)),q.O&&q.O.updateHost(u),n.o&=-17,n.o|=2,f&&(f.forEach(t=>t()),u["s-rc"]=void 0);{const t=u["s-p"],e=()=>L(n);0===t.length?e():(Promise.all(t).then(e),n.o|=4,t.length=0)}},O=t=>{try{t=t.render()}catch(e){J(e)}return t},L=t=>{const e=t.j,n=t.g,l=t.v;64&t.o||(t.o|=64,e.classList.add("hydrated"),k(n,"componentDidLoad"),t.R(e),l||R()),t.$&&(t.$(),t.$=void 0),512&t.o&&st(()=>M(t,!1)),t.o&=-517},R=()=>{H.documentElement.classList.add("hydrated"),q.o|=2},k=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){J(l)}},P=(t,e)=>t&&t.then?t.then(e):e(),U=(t,e,n)=>{if(e.k){const l=Object.entries(e.k),s=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,t,{get(){return e=t,V(this).P.get(e);var e},set(n){((t,e,n,l)=>{const s=V(t),o=s.P.get(e),c=s.o,i=s.g;var a,u;u=l.k[e][0],n=null==(a=n)||r(a)?a:4&u?"false"!==a&&(""===a||!!a):2&u?parseFloat(a):1&u?String(a):a,8&c&&void 0!==o||n===o||(s.P.set(e,n),i&&2==(18&c)&&M(s,!1))})(this,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;s.attributeChangedCallback=function(t,n,l){q.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},x=t=>{if(0==(1&q.o)){const e=V(t),n=e.M,l=()=>{};if(n.U&&(e.C=((t,e,n)=>{e._=e._||[];const l=n.map(([n,l,s])=>{const o=((t,e)=>8&e?W:t)(t,n),r=((t,e)=>n=>{256&t.o?t.g[e](n):t._.push([e,n])})(e,s),c=(t=>0!=(2&t))(n);return q.ael(o,l,r,c),()=>q.rel(o,l,r,c)});return()=>l.forEach(t=>t())})(t,e,n.U)),!(1&e.o)){e.o|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){j(e,e.v=n);break}}n.k&&Object.entries(n.k).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),st(()=>(async(t,e,n,l,o)=>{if(0==(32&e.o)){e.o|=32;{if((o=Q(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(U(o,n,2),o.isProxied=!0);const t=()=>{};e.o|=8;try{new o(e)}catch(i){J(i)}e.o&=-9,t()}const t=s(n.S);if(!X.has(t)&&o.style){const e=()=>{};let l=o.style;8&n.o&&(l=await __sc_import_publicbadges("./p-1b3669c1.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=X.get(t);D&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,X.set(t,l)})(t,l,!!(1&n.o)),e()}}const r=e.v,c=()=>M(e,!0);r&&r["s-rc"]?r["s-rc"].push(c):c()})(0,e,n))}l()}},C=(t,e={})=>{const n=[],l=e.exclude||[],s=H.head,o=W.customElements,r=s.querySelector("meta[charset]"),c=H.createElement("style"),i=[];let a,u=!0;Object.assign(q,e),q.A=new URL(e.resourcesUrl||"./",H.baseURI).href,e.syncQueue&&(q.o|=4),t.forEach(t=>t[1].forEach(e=>{const s={o:e[0],S:e[1],k:e[2],U:e[3]};s.k=e[2],s.U=e[3],!B&&1&s.o&&(s.o|=8);const r=s.S,c=class extends HTMLElement{constructor(t){super(t),G(t=this,s),1&s.o&&(B?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){a&&(clearTimeout(a),a=null),u?i.push(this):q.jmp(()=>x(this))}disconnectedCallback(){q.jmp(()=>(t=>{if(0==(1&q.o)){const e=V(t);e.C&&(e.C(),e.C=void 0),q.O&&q.O.removeHost(t)}})(this))}forceUpdate(){(()=>{{const t=V(this);t.j.isConnected&&2==(18&t.o)&&M(t,!1)}})()}componentOnReady(){return V(this).F}};s.T=t[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,U(c,s,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,r?r.nextSibling:s.firstChild),u=!1,i.length>0?i.forEach(t=>t.connectedCallback()):q.jmp(()=>a=setTimeout(R,30,"timeout"))},E=t=>V(t).j,A=(t,e,n)=>{const l=E(t);return{emit:t=>{const s=new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t});return l.dispatchEvent(s),s}}};let F=0,T=!1;const W="undefined"!=typeof window?window:{},H=W.document||{head:{}},q={o:0,A:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},B=(()=>(H.head.attachShadow+"").includes("[native"))(),D=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),N=new WeakMap,V=t=>N.get(t),z=(t,e)=>N.set(e.g=t,e),G=(t,e)=>{const n={o:0,j:t,M:e,P:new Map};return n.F=new Promise(t=>n.R=t),t["s-p"]=[],t["s-rc"]=[],N.set(t,n)},I=(t,e)=>e in t,J=t=>console.error(t),K=new Map,Q=t=>{const e=t.S.replace(/-/g,"_"),n=t.T,l=K.get(n);return l?l[e]:__sc_import_publicbadges(`./${n}.entry.js`).then(t=>(K.set(n,t),t[e]),J)},X=new Map,Y=[],Z=[],tt=[],et=(t,e)=>n=>{t.push(n),T||(T=!0,e&&4&q.o?st(lt):q.raf(lt))},nt=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(s){J(s)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},lt=()=>{F++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){J(e)}t.length=0})(Y);const t=2==(6&q.o)?performance.now()+10*Math.ceil(F*(1/22)):1/0;nt(Z,t),nt(tt,t),Z.length>0&&(tt.push(...Z),Z.length=0),(T=Y.length+Z.length+tt.length>0)?q.raf(lt):F=0},st=t=>Promise.resolve().then(t),ot=et(Z,!0),rt=()=>W.CSS&&W.CSS.supports&&W.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_publicbadges("./p-9eb74d76.js").then(()=>{if(q.O=W.__stencil_cssshim,q.O)return q.O.initShim()}),ct=()=>{q.O=W.__stencil_cssshim;const t=Array.from(H.querySelectorAll("script")).find(t=>new RegExp("/publicbadges(\\.esm)?\\.js($|\\?|#)").test(t.src)||"publicbadges"===t.getAttribute("data-stencil-namespace")),e=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,W.location.href)).href,it(e.resourcesUrl,t),window.customElements?Promise.resolve(e):__sc_import_publicbadges("./p-1ada5d30.js").then(()=>e))},it=(t,e)=>{const n=`__sc_import_${"publicbadges".replace(/\s|-/g,"_")}`;try{W[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const s=new Map;W[n]=l=>{const o=new URL(l,t).href;let r=s.get(o);if(!r){const t=H.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${n}.m = m;`],{type:"application/javascript"})),r=new Promise(e=>{t.onload=()=>{e(W[n].m),t.remove()}}),s.set(o,r),H.head.appendChild(t)}return r}}};export{a as H,rt as a,C as b,A as c,E as g,c as h,ct as p,z as r};