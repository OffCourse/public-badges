var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="publicbadges";var a;var i;var s=false;var o="hydrated";var l=function(e,r){if(r===void 0){r=""}{return function(){return}}};var f=function(e,r){{return function(){return}}};var u=new WeakMap;var $=function(e,r,t){var n=_e.get(e);if(he&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}_e.set(e,n)};var c=function(e,r,t,n){var a=h(r.$tagName$);var i=_e.get(a);e=e.nodeType===11?e:$e;if(i){if(typeof i==="string"){e=e.head||e;var s=u.get(e);var o=void 0;if(!s){u.set(e,s=new Set)}if(!s.has(a)){{if(ce.$cssShim$){o=ce.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=$e.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=[i]}}return a};var v=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=l("attachStyles",r.$tagName$);var i=c(ve&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h")}a()};var h=function(e,r){return"sc-"+e};var m={};var d="http://www.w3.org/2000/svg";var p="http://www.w3.org/1999/xhtml";var g=function(e){return e!=null};var y=function(e){e=typeof e;return e==="object"||e==="function"};var w=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o=[];var l=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!y(a)){a=String(a)}if(i&&s){o[o.length-1].$text$+=a}else{o.push(i?b(null,a):a)}s=i}}};l(t);if(r){{var f=r.className||r.class;if(f){r.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}if(typeof e==="function"){return e(r,o,R)}var u=b(e,null);u.$attrs$=r;if(o.length>0){u.$children$=o}return u}));var b=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}return t};var S=e("H",{});var _=function(e){return e&&e.$tag$===S};var R={forEach:function(e,r){return e.map(E).forEach(r)},map:function(e,r){return e.map(E).map(r).map(x)}};var E=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var x=function(e){var r=b(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var L=function(e,r,t,n,a,i){if(t===n){return}var s=ye(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=N(t);var u=N(n);l.remove.apply(l,f.filter((function(e){return e&&!u.includes(e)})));l.add.apply(l,u.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var $ in t){if(!n||n[$]==null){if($.includes("-")){e.style.removeProperty($)}else{e.style[$]=""}}}}for(var $ in n){if(!t||n[$]!==t[$]){if($.includes("-")){e.style.setProperty($,n[$])}else{e.style[$]=n[$]}}}}else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(ye(ue,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){ce.rel(e,r,t,false)}if(n){ce.ael(e,r,n,false)}}else{var c=y(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var v=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=v){e[r]=v}}else{e[r]=n}}catch(h){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!c){n=n===true?"":n;{e.setAttribute(r,n)}}}};var j=/\s/;var N=function(e){return!e?[]:e.split(j)};var C=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||m;var s=r.$attrs$||m;{for(n in i){if(!(n in s)){L(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){L(a,n,i[n],s[n],t,r.$flags$)}};var M=function(e,r,t,n){var i=r.$children$[t];var o=0;var l;var f;if(i.$text$!==null){l=i.$elm$=$e.createTextNode(i.$text$)}else{if(!s){s=i.$tag$==="svg"}l=i.$elm$=$e.createElementNS(s?d:p,i.$tag$);if(s&&i.$tag$==="foreignObject"){s=false}{C(null,i,s)}if(g(a)&&l["s-si"]!==a){l.classList.add(l["s-si"]=a)}if(i.$children$){for(o=0;o<i.$children$.length;++o){f=M(e,i,o);if(f){l.appendChild(f)}}}{if(i.$tag$==="svg"){s=false}else if(l.tagName==="foreignObject"){s=true}}}return l};var k=function(e,r,t,n,a,s){var o=e;var l;if(o.shadowRoot&&o.tagName===i){o=o.shadowRoot}for(;a<=s;++a){if(n[a]){l=M(null,t,a);if(l){n[a].$elm$=l;o.insertBefore(l,r)}}}};var P=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;q(n);a.remove()}}};var O=function(e,r,t,n){var a=0;var i=0;var s=r.length-1;var o=r[0];var l=r[s];var f=n.length-1;var u=n[0];var $=n[f];var c;while(a<=s&&i<=f){if(o==null){o=r[++a]}else if(l==null){l=r[--s]}else if(u==null){u=n[++i]}else if($==null){$=n[--f]}else if(U(o,u)){A(o,u);o=r[++a];u=n[++i]}else if(U(l,$)){A(l,$);l=r[--s];$=n[--f]}else if(U(o,$)){A(o,$);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=r[++a];$=n[--f]}else if(U(l,u)){A(l,u);e.insertBefore(l.$elm$,o.$elm$);l=r[--s];u=n[++i]}else{{c=M(r&&r[i],t,i);u=n[++i]}if(c){{o.$elm$.parentNode.insertBefore(c,o.$elm$)}}}}if(a>s){k(e,n[f+1]==null?null:n[f+1].$elm$,t,n,i,f)}else if(i>f){P(r,a,s)}};var U=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var A=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;{s=t&&t.parentNode&&t.ownerSVGElement!==undefined;s=r.$tag$==="svg"?true:r.$tag$==="foreignObject"?false:s}if(r.$text$===null){{{C(e,r,s)}}if(n!==null&&a!==null){O(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}k(t,null,r,a,0,a.length-1)}else if(n!==null){P(n,0,n.length-1)}}else if(e.$text$!==r.$text$){t.data=r.$text$}if(s&&r.$tag$==="svg"){s=false}};var q=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.forEach(q)}};var I=function(e,r){var t=e.$hostElement$;var n=e.$vnode$||b(null,null);var s=_(r)?r:w(null,null,r);i=t.tagName;s.$tag$=null;s.$flags$|=4;e.$vnode$=s;s.$elm$=n.$elm$=t.shadowRoot||t;{a=t["s-sc"]}A(n,s)};var B=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var T=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}var t=l("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var i=function(){return z(e,a,r)};B(e,n);var s;if(r){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.forEach((function(e){var r=e[0],t=e[1];return G(a,r,t)}));e.$queuedListeners$=null}}{s=G(a,"componentWillLoad")}}t();return D(s,(function(){return ke(i)}))};var z=function(e,r,t){var n=e.$hostElement$;var a=l("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){v(e)}var s=l("render",e.$cmpMeta$.$tagName$);{{I(e,H(r))}}if(ce.$cssShim$){ce.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.forEach((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var f=function(){return V(e)};if(o.length===0){f()}else{Promise.all(o).then(f);e.$flags$|=4;o.length=0}}};var H=function(e){try{e=e.render()}catch(r){we(r)}return e};var V=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=l("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{t.classList.add(o)}{G(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){W()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Me((function(){return T(e,false)}))}e.$flags$&=~(4|512)}};var F=function(e){{var r=de(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){T(r,false)}return t}};var W=function(e){{$e.documentElement.classList.add(o)}{ce.$flags$|=2}};var G=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){we(n)}}return undefined};var D=function(e,r){return e&&e.then?e.then(r):r()};var Q=function(e,r,t){r.$queuedListeners$=r.$queuedListeners$||[];var n=t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=K(e,n);var o=J(r,i);var l=X(n);ce.ael(s,a,o,l);return function(){return ce.rel(s,a,o,l)}}));return function(){return n.forEach((function(e){return e()}))}};var J=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{e.$queuedListeners$.push([r,t])}}}};var K=function(e,r){if(r&8)return ue;return e};var X=function(e){return(e&2)!==0};var Y=function(e,r){if(e!=null&&!y(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var Z=function(e,r){return de(e).$instanceValues$.get(r)};var ee=function(e,r,t,n){var a=de(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=Y(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if((s&(2|16))===2){T(a,false)}}}};var re=function(e,r,t){if(r.$members$){var n=Object.entries(r.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return Z(this,n)},set:function(e){ee(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;ce.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var te=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var e,t,i,o,u,c,v;return __generator(this,(function(m){switch(m.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=Se(a);if(!s.then)return[3,2];e=f();return[4,s];case 1:s=m.sent();e();m.label=2;case 2:if(!s.isProxied){re(s,a,2);s.isProxied=true}t=l("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(d){we(d)}{n.$flags$&=~8}t();i=h(a.$tagName$);if(!(!_e.has(i)&&s.style))return[3,5];o=l("registerStyles",a.$tagName$);u=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-93c71f89.system.js").then((function(e){return e.scopeCss(u,i,false)}))];case 3:u=m.sent();m.label=4;case 4:$(i,u,!!(a.$flags$&1));o();m.label=5;case 5:c=n.$ancestorComponent$;v=function(){return T(n,true)};if(c&&c["s-rc"]){c["s-rc"].push(v)}else{v()}return[2]}}))}))};var ne=function(e){if((ce.$flags$&1)===0){var r=de(e);var t=r.$cmpMeta$;var n=l("connectedCallback",t.$tagName$);if(t.$listeners$){r.$rmListeners$=Q(e,r,t.$listeners$)}if(!(r.$flags$&1)){r.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){B(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).forEach((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{Me((function(){return te(e,r,t)}))}}n()}};var ae=function(e){if((ce.$flags$&1)===0){var r=de(e);{if(r.$rmListeners$){r.$rmListeners$();r.$rmListeners$=undefined}}if(ce.$cssShim$){ce.$cssShim$.removeHost(e)}}};var ie=e("b",(function(e,r){if(r===void 0){r={}}var t=l();var n=[];var a=r.exclude||[];var i=$e.head;var s=ue.customElements;var o=i.querySelector("meta[charset]");var f=$e.createElement("style");var u=[];var $;var c=true;Object.assign(ce,r);ce.$resourcesUrl$=new URL(r.resourcesUrl||"./",$e.baseURI).href;if(r.syncQueue){ce.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}if(!ve&&t.$flags$&1){t.$flags$|=8}var i=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;ge(r,t);if(t.$flags$&1){if(ve){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(c){u.push(this)}else{ce.jmp((function(){return ne(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;ce.jmp((function(){return ae(e)}))};r.prototype.forceUpdate=function(){F(this)};r.prototype.componentOnReady=function(){return de(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){n.push(i);s.define(i,re(o,t,1))}}))}));f.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";f.setAttribute("data-styles","");i.insertBefore(f,o?o.nextSibling:i.firstChild);c=false;if(u.length>0){u.forEach((function(e){return e.connectedCallback()}))}else{ce.jmp((function(){return $=setTimeout(W,30,"timeout")}))}t()}));var se=e("g",(function(e){return de(e).$hostElement$}));var oe=e("c",(function(e,r,t){var n=se(e);return{emit:function(e){var a=new CustomEvent(r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e});n.dispatchEvent(a);return a}}}));var le=0;var fe=false;var ue=typeof window!=="undefined"?window:{};var $e=ue.document||{head:{}};var ce={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var ve=function(){return($e.head.attachShadow+"").includes("[native")}();var he=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var me=new WeakMap;var de=function(e){return me.get(e)};var pe=e("r",(function(e,r){return me.set(r.$lazyInstance$=e,r)}));var ge=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return me.set(e,t)};var ye=function(e,r){return r in e};var we=function(e){return console.error(e)};var be=new Map;var Se=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=be.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{be.set(i,e)}return e[a]}),we)};var _e=new Map;var Re=[];var Ee=[];var xe=[];var Le=function(e,r){return function(t){e.push(t);if(!fe){fe=true;if(r&&ce.$flags$&4){Me(Ce)}else{ce.raf(Ce)}}}};var je=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){we(t)}}e.length=0};var Ne=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){we(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var Ce=function(){le++;je(Re);var e=(ce.$flags$&6)===2?performance.now()+10*Math.ceil(le*(1/22)):Infinity;Ne(Ee,e);Ne(xe,e);if(Ee.length>0){xe.push.apply(xe,Ee);Ee.length=0}if(fe=Re.length+Ee.length+xe.length>0){ce.raf(Ce)}else{le=0}};var Me=function(e){return Promise.resolve().then(e)};var ke=Le(Ee,true);var Pe=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var Oe=e("a",(function(){if(!(ue.CSS&&ue.CSS.supports&&ue.CSS.supports("color","var(--c)"))){return r.import("./p-794f492f.system.js").then((function(){ce.$cssShim$=ue.__stencil_cssshim;if(ce.$cssShim$){return ce.$cssShim$.initShim()}}))}return Promise.resolve()}));var Ue=e("p",(function(){{ce.$cssShim$=ue.__stencil_cssshim}var e=Array.from($e.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};var a=r.meta.url;if("onbeforeload"in e&&!history.scrollRestoration&&false){return{then:function(){}}}if(a!==""){t.resourcesUrl=new URL(".",a).href}else{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,ue.location.href)).href;Ae(t.resourcesUrl,e);if(!window.customElements){return r.import("./p-2d62a44f.system.js").then((function(){return t}))}}return Promise.resolve(t)}));var Ae=function(e,r){var t=Pe(n);try{ue[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;ue[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=$e.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(ue[t].m);o.remove()}}));a.set(i,s);$e.head.appendChild(o)}return s}}}}}}));