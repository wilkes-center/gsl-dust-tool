(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const g of f)if(g.type==="childList")for(const m of g.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function c(f){const g={};return f.integrity&&(g.integrity=f.integrity),f.referrerPolicy&&(g.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?g.credentials="include":f.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function r(f){if(f.ep)return;f.ep=!0;const g=c(f);fetch(f.href,g)}})();function Ap(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var mc={exports:{}},oi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function jp(){if(Lh)return oi;Lh=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function c(r,f,g){var m=null;if(g!==void 0&&(m=""+g),f.key!==void 0&&(m=""+f.key),"key"in f){g={};for(var S in f)S!=="key"&&(g[S]=f[S])}else g=f;return f=g.ref,{$$typeof:l,type:r,key:m,ref:f!==void 0?f:null,props:g}}return oi.Fragment=u,oi.jsx=c,oi.jsxs=c,oi}var Bh;function Op(){return Bh||(Bh=1,mc.exports=jp()),mc.exports}var h=Op(),pc={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function Rp(){if(qh)return ot;qh=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),m=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),D=Symbol.iterator;function H(b){return b===null||typeof b!="object"?null:(b=D&&b[D]||b["@@iterator"],typeof b=="function"?b:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,nt={};function it(b,$,L){this.props=b,this.context=$,this.refs=nt,this.updater=L||G}it.prototype.isReactComponent={},it.prototype.setState=function(b,$){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,$,"setState")},it.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function I(){}I.prototype=it.prototype;function at(b,$,L){this.props=b,this.context=$,this.refs=nt,this.updater=L||G}var K=at.prototype=new I;K.constructor=at,X(K,it.prototype),K.isPureReactComponent=!0;var F=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},Y=Object.prototype.hasOwnProperty;function k(b,$,L,B,J,ut){return L=ut.ref,{$$typeof:l,type:b,key:$,ref:L!==void 0?L:null,props:ut}}function ht(b,$){return k(b.type,$,void 0,void 0,void 0,b.props)}function Kt(b){return typeof b=="object"&&b!==null&&b.$$typeof===l}function qe(b){var $={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(L){return $[L]})}var fe=/\/+/g;function Ct(b,$){return typeof b=="object"&&b!==null&&b.key!=null?qe(""+b.key):$.toString(36)}function $e(){}function Ce(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then($e,$e):(b.status="pending",b.then(function($){b.status==="pending"&&(b.status="fulfilled",b.value=$)},function($){b.status==="pending"&&(b.status="rejected",b.reason=$)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function Nt(b,$,L,B,J){var ut=typeof b;(ut==="undefined"||ut==="boolean")&&(b=null);var P=!1;if(b===null)P=!0;else switch(ut){case"bigint":case"string":case"number":P=!0;break;case"object":switch(b.$$typeof){case l:case u:P=!0;break;case E:return P=b._init,Nt(P(b._payload),$,L,B,J)}}if(P)return J=J(b),P=B===""?"."+Ct(b,0):B,F(J)?(L="",P!=null&&(L=P.replace(fe,"$&/")+"/"),Nt(J,$,L,"",function(Bt){return Bt})):J!=null&&(Kt(J)&&(J=ht(J,L+(J.key==null||b&&b.key===J.key?"":(""+J.key).replace(fe,"$&/")+"/")+P)),$.push(J)),1;P=0;var Rt=B===""?".":B+":";if(F(b))for(var mt=0;mt<b.length;mt++)B=b[mt],ut=Rt+Ct(B,mt),P+=Nt(B,$,L,ut,J);else if(mt=H(b),typeof mt=="function")for(b=mt.call(b),mt=0;!(B=b.next()).done;)B=B.value,ut=Rt+Ct(B,mt++),P+=Nt(B,$,L,ut,J);else if(ut==="object"){if(typeof b.then=="function")return Nt(Ce(b),$,L,B,J);throw $=String(b),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return P}function A(b,$,L){if(b==null)return b;var B=[],J=0;return Nt(b,B,"","",function(ut){return $.call(L,ut,J++)}),B}function C(b){if(b._status===-1){var $=b._result;$=$(),$.then(function(L){(b._status===0||b._status===-1)&&(b._status=1,b._result=L)},function(L){(b._status===0||b._status===-1)&&(b._status=2,b._result=L)}),b._status===-1&&(b._status=0,b._result=$)}if(b._status===1)return b._result.default;throw b._result}var q=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function V(){}return ot.Children={map:A,forEach:function(b,$,L){A(b,function(){$.apply(this,arguments)},L)},count:function(b){var $=0;return A(b,function(){$++}),$},toArray:function(b){return A(b,function($){return $})||[]},only:function(b){if(!Kt(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ot.Component=it,ot.Fragment=c,ot.Profiler=f,ot.PureComponent=at,ot.StrictMode=r,ot.Suspense=v,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,ot.__COMPILER_RUNTIME={__proto__:null,c:function(b){return Z.H.useMemoCache(b)}},ot.cache=function(b){return function(){return b.apply(null,arguments)}},ot.cloneElement=function(b,$,L){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var B=X({},b.props),J=b.key,ut=void 0;if($!=null)for(P in $.ref!==void 0&&(ut=void 0),$.key!==void 0&&(J=""+$.key),$)!Y.call($,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&$.ref===void 0||(B[P]=$[P]);var P=arguments.length-2;if(P===1)B.children=L;else if(1<P){for(var Rt=Array(P),mt=0;mt<P;mt++)Rt[mt]=arguments[mt+2];B.children=Rt}return k(b.type,J,void 0,void 0,ut,B)},ot.createContext=function(b){return b={$$typeof:m,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:g,_context:b},b},ot.createElement=function(b,$,L){var B,J={},ut=null;if($!=null)for(B in $.key!==void 0&&(ut=""+$.key),$)Y.call($,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(J[B]=$[B]);var P=arguments.length-2;if(P===1)J.children=L;else if(1<P){for(var Rt=Array(P),mt=0;mt<P;mt++)Rt[mt]=arguments[mt+2];J.children=Rt}if(b&&b.defaultProps)for(B in P=b.defaultProps,P)J[B]===void 0&&(J[B]=P[B]);return k(b,ut,void 0,void 0,null,J)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(b){return{$$typeof:S,render:b}},ot.isValidElement=Kt,ot.lazy=function(b){return{$$typeof:E,_payload:{_status:-1,_result:b},_init:C}},ot.memo=function(b,$){return{$$typeof:p,type:b,compare:$===void 0?null:$}},ot.startTransition=function(b){var $=Z.T,L={};Z.T=L;try{var B=b(),J=Z.S;J!==null&&J(L,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(V,q)}catch(ut){q(ut)}finally{Z.T=$}},ot.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},ot.use=function(b){return Z.H.use(b)},ot.useActionState=function(b,$,L){return Z.H.useActionState(b,$,L)},ot.useCallback=function(b,$){return Z.H.useCallback(b,$)},ot.useContext=function(b){return Z.H.useContext(b)},ot.useDebugValue=function(){},ot.useDeferredValue=function(b,$){return Z.H.useDeferredValue(b,$)},ot.useEffect=function(b,$,L){var B=Z.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return B.useEffect(b,$)},ot.useId=function(){return Z.H.useId()},ot.useImperativeHandle=function(b,$,L){return Z.H.useImperativeHandle(b,$,L)},ot.useInsertionEffect=function(b,$){return Z.H.useInsertionEffect(b,$)},ot.useLayoutEffect=function(b,$){return Z.H.useLayoutEffect(b,$)},ot.useMemo=function(b,$){return Z.H.useMemo(b,$)},ot.useOptimistic=function(b,$){return Z.H.useOptimistic(b,$)},ot.useReducer=function(b,$,L){return Z.H.useReducer(b,$,L)},ot.useRef=function(b){return Z.H.useRef(b)},ot.useState=function(b){return Z.H.useState(b)},ot.useSyncExternalStore=function(b,$,L){return Z.H.useSyncExternalStore(b,$,L)},ot.useTransition=function(){return Z.H.useTransition()},ot.version="19.1.0",ot}var Gh;function Bc(){return Gh||(Gh=1,pc.exports=Rp()),pc.exports}var U=Bc();const Le=Ap(U);var yc={exports:{}},ui={},bc={exports:{}},vc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kh;function Dp(){return kh||(kh=1,function(l){function u(A,C){var q=A.length;A.push(C);t:for(;0<q;){var V=q-1>>>1,b=A[V];if(0<f(b,C))A[V]=C,A[q]=b,q=V;else break t}}function c(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var C=A[0],q=A.pop();if(q!==C){A[0]=q;t:for(var V=0,b=A.length,$=b>>>1;V<$;){var L=2*(V+1)-1,B=A[L],J=L+1,ut=A[J];if(0>f(B,q))J<b&&0>f(ut,B)?(A[V]=ut,A[J]=q,V=J):(A[V]=B,A[L]=q,V=L);else if(J<b&&0>f(ut,q))A[V]=ut,A[J]=q,V=J;else break t}}return C}function f(A,C){var q=A.sortIndex-C.sortIndex;return q!==0?q:A.id-C.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;l.unstable_now=function(){return g.now()}}else{var m=Date,S=m.now();l.unstable_now=function(){return m.now()-S}}var v=[],p=[],E=1,D=null,H=3,G=!1,X=!1,nt=!1,it=!1,I=typeof setTimeout=="function"?setTimeout:null,at=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function F(A){for(var C=c(p);C!==null;){if(C.callback===null)r(p);else if(C.startTime<=A)r(p),C.sortIndex=C.expirationTime,u(v,C);else break;C=c(p)}}function Z(A){if(nt=!1,F(A),!X)if(c(v)!==null)X=!0,Y||(Y=!0,Ct());else{var C=c(p);C!==null&&Nt(Z,C.startTime-A)}}var Y=!1,k=-1,ht=5,Kt=-1;function qe(){return it?!0:!(l.unstable_now()-Kt<ht)}function fe(){if(it=!1,Y){var A=l.unstable_now();Kt=A;var C=!0;try{t:{X=!1,nt&&(nt=!1,at(k),k=-1),G=!0;var q=H;try{e:{for(F(A),D=c(v);D!==null&&!(D.expirationTime>A&&qe());){var V=D.callback;if(typeof V=="function"){D.callback=null,H=D.priorityLevel;var b=V(D.expirationTime<=A);if(A=l.unstable_now(),typeof b=="function"){D.callback=b,F(A),C=!0;break e}D===c(v)&&r(v),F(A)}else r(v);D=c(v)}if(D!==null)C=!0;else{var $=c(p);$!==null&&Nt(Z,$.startTime-A),C=!1}}break t}finally{D=null,H=q,G=!1}C=void 0}}finally{C?Ct():Y=!1}}}var Ct;if(typeof K=="function")Ct=function(){K(fe)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Ce=$e.port2;$e.port1.onmessage=fe,Ct=function(){Ce.postMessage(null)}}else Ct=function(){I(fe,0)};function Nt(A,C){k=I(function(){A(l.unstable_now())},C)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(A){A.callback=null},l.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ht=0<A?Math.floor(1e3/A):5},l.unstable_getCurrentPriorityLevel=function(){return H},l.unstable_next=function(A){switch(H){case 1:case 2:case 3:var C=3;break;default:C=H}var q=H;H=C;try{return A()}finally{H=q}},l.unstable_requestPaint=function(){it=!0},l.unstable_runWithPriority=function(A,C){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var q=H;H=A;try{return C()}finally{H=q}},l.unstable_scheduleCallback=function(A,C,q){var V=l.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?V+q:V):q=V,A){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=q+b,A={id:E++,callback:C,priorityLevel:A,startTime:q,expirationTime:b,sortIndex:-1},q>V?(A.sortIndex=q,u(p,A),c(v)===null&&A===c(p)&&(nt?(at(k),k=-1):nt=!0,Nt(Z,q-V))):(A.sortIndex=b,u(v,A),X||G||(X=!0,Y||(Y=!0,Ct()))),A},l.unstable_shouldYield=qe,l.unstable_wrapCallback=function(A){var C=H;return function(){var q=H;H=C;try{return A.apply(this,arguments)}finally{H=q}}}}(vc)),vc}var Yh;function $p(){return Yh||(Yh=1,bc.exports=Dp()),bc.exports}var xc={exports:{}},ee={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function Cp(){if(Xh)return ee;Xh=1;var l=Bc();function u(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var r={d:{f:c,r:function(){throw Error(u(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function g(v,p,E){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:D==null?null:""+D,children:v,containerInfo:p,implementation:E}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ee.createPortal=function(v,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(u(299));return g(v,p,null,E)},ee.flushSync=function(v){var p=m.T,E=r.p;try{if(m.T=null,r.p=2,v)return v()}finally{m.T=p,r.p=E,r.d.f()}},ee.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(v,p))},ee.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},ee.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var E=p.as,D=S(E,p.crossOrigin),H=typeof p.integrity=="string"?p.integrity:void 0,G=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?r.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:D,integrity:H,fetchPriority:G}):E==="script"&&r.d.X(v,{crossOrigin:D,integrity:H,fetchPriority:G,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ee.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=S(p.as,p.crossOrigin);r.d.M(v,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(v)},ee.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,D=S(E,p.crossOrigin);r.d.L(v,E,{crossOrigin:D,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ee.preloadModule=function(v,p){if(typeof v=="string")if(p){var E=S(p.as,p.crossOrigin);r.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(v)},ee.requestFormReset=function(v){r.d.r(v)},ee.unstable_batchedUpdates=function(v,p){return v(p)},ee.useFormState=function(v,p,E){return m.H.useFormState(v,p,E)},ee.useFormStatus=function(){return m.H.useHostTransitionStatus()},ee.version="19.1.0",ee}var Zh;function Ag(){if(Zh)return xc.exports;Zh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),xc.exports=Cp(),xc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function Np(){if(Qh)return ui;Qh=1;var l=$p(),u=Bc(),c=Ag();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function g(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function S(t){if(g(t)!==t)throw Error(r(188))}function v(t){var e=t.alternate;if(!e){if(e=g(t),e===null)throw Error(r(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===a)return S(i),t;if(o===n)return S(i),e;o=o.sibling}throw Error(r(188))}if(a.return!==n.return)a=i,n=o;else{for(var s=!1,d=i.child;d;){if(d===a){s=!0,a=i,n=o;break}if(d===n){s=!0,n=i,a=o;break}d=d.sibling}if(!s){for(d=o.child;d;){if(d===a){s=!0,a=o,n=i;break}if(d===n){s=!0,n=o,a=i;break}d=d.sibling}if(!s)throw Error(r(189))}}if(a.alternate!==n)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:e}function p(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=p(t),e!==null)return e;t=t.sibling}return null}var E=Object.assign,D=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),it=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),at=Symbol.for("react.consumer"),K=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Kt=Symbol.for("react.activity"),qe=Symbol.for("react.memo_cache_sentinel"),fe=Symbol.iterator;function Ct(t){return t===null||typeof t!="object"?null:(t=fe&&t[fe]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Symbol.for("react.client.reference");function Ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$e?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case it:return"Profiler";case nt:return"StrictMode";case Z:return"Suspense";case Y:return"SuspenseList";case Kt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case G:return"Portal";case K:return(t.displayName||"Context")+".Provider";case at:return(t._context.displayName||"Context")+".Consumer";case F:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return e=t.displayName||null,e!==null?e:Ce(t.type)||"Memo";case ht:e=t._payload,t=t._init;try{return Ce(t(e))}catch{}}return null}var Nt=Array.isArray,A=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},V=[],b=-1;function $(t){return{current:t}}function L(t){0>b||(t.current=V[b],V[b]=null,b--)}function B(t,e){b++,V[b]=t.current,t.current=e}var J=$(null),ut=$(null),P=$(null),Rt=$(null);function mt(t,e){switch(B(P,e),B(ut,t),B(J,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?dh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=dh(e),t=hh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}L(J),B(J,t)}function Bt(){L(J),L(ut),L(P)}function Jt(t){t.memoizedState!==null&&B(Rt,t);var e=J.current,a=hh(e,t.type);e!==a&&(B(ut,t),B(J,a))}function ne(t){ut.current===t&&(L(J),L(ut)),Rt.current===t&&(L(Rt),ei._currentValue=q)}var ae=Object.prototype.hasOwnProperty,un=l.unstable_scheduleCallback,rn=l.unstable_cancelCallback,o0=l.unstable_shouldYield,u0=l.unstable_requestPaint,Ge=l.unstable_now,r0=l.unstable_getCurrentPriorityLevel,Zc=l.unstable_ImmediatePriority,Qc=l.unstable_UserBlockingPriority,xi=l.unstable_NormalPriority,c0=l.unstable_LowPriority,Vc=l.unstable_IdlePriority,s0=l.log,f0=l.unstable_setDisableYieldValue,cn=null,de=null;function ha(t){if(typeof s0=="function"&&f0(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(cn,t)}catch{}}var he=Math.clz32?Math.clz32:g0,d0=Math.log,h0=Math.LN2;function g0(t){return t>>>=0,t===0?32:31-(d0(t)/h0|0)|0}var Si=256,Ei=4194304;function Ba(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ti(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,o=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var d=n&134217727;return d!==0?(n=d&~o,n!==0?i=Ba(n):(s&=d,s!==0?i=Ba(s):a||(a=d&~t,a!==0&&(i=Ba(a))))):(d=n&~o,d!==0?i=Ba(d):s!==0?i=Ba(s):a||(a=n&~t,a!==0&&(i=Ba(a)))),i===0?0:e!==0&&e!==i&&(e&o)===0&&(o=i&-i,a=e&-e,o>=a||o===32&&(a&4194048)!==0)?e:i}function sn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function m0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kc(){var t=Si;return Si<<=1,(Si&4194048)===0&&(Si=256),t}function Jc(){var t=Ei;return Ei<<=1,(Ei&62914560)===0&&(Ei=4194304),t}function nu(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function fn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function p0(t,e,a,n,i,o){var s=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var d=t.entanglements,y=t.expirationTimes,z=t.hiddenUpdates;for(a=s&~a;0<a;){var j=31-he(a),N=1<<j;d[j]=0,y[j]=-1;var M=z[j];if(M!==null)for(z[j]=null,j=0;j<M.length;j++){var w=M[j];w!==null&&(w.lane&=-536870913)}a&=~N}n!==0&&Wc(t,n,0),o!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=o&~(s&~e))}function Wc(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-he(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194090}function Fc(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-he(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function iu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ou(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Pc(){var t=C.p;return t!==0?t:(t=window.event,t===void 0?32:Dh(t.type))}function y0(t,e){var a=C.p;try{return C.p=t,e()}finally{C.p=a}}var ga=Math.random().toString(36).slice(2),It="__reactFiber$"+ga,ie="__reactProps$"+ga,rl="__reactContainer$"+ga,uu="__reactEvents$"+ga,b0="__reactListeners$"+ga,v0="__reactHandles$"+ga,Ic="__reactResources$"+ga,dn="__reactMarker$"+ga;function ru(t){delete t[It],delete t[ie],delete t[uu],delete t[b0],delete t[v0]}function cl(t){var e=t[It];if(e)return e;for(var a=t.parentNode;a;){if(e=a[rl]||a[It]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=yh(t);t!==null;){if(a=t[It])return a;t=yh(t)}return e}t=a,a=t.parentNode}return null}function sl(t){if(t=t[It]||t[rl]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function hn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function fl(t){var e=t[Ic];return e||(e=t[Ic]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function kt(t){t[dn]=!0}var ts=new Set,es={};function qa(t,e){dl(t,e),dl(t+"Capture",e)}function dl(t,e){for(es[t]=e,t=0;t<e.length;t++)ts.add(e[t])}var x0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),as={},ls={};function S0(t){return ae.call(ls,t)?!0:ae.call(as,t)?!1:x0.test(t)?ls[t]=!0:(as[t]=!0,!1)}function _i(t,e,a){if(S0(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function zi(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Ke(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}var cu,ns;function hl(t){if(cu===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);cu=e&&e[1]||"",ns=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cu+t+ns}var su=!1;function fu(t,e){if(!t||su)return"";su=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(w){var M=w}Reflect.construct(t,[],N)}else{try{N.call()}catch(w){M=w}t.call(N.prototype)}}else{try{throw Error()}catch(w){M=w}(N=t())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(w){if(w&&M&&typeof w.stack=="string")return[w.stack,M.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),s=o[0],d=o[1];if(s&&d){var y=s.split(`
`),z=d.split(`
`);for(i=n=0;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(n===y.length||i===z.length)for(n=y.length-1,i=z.length-1;1<=n&&0<=i&&y[n]!==z[i];)i--;for(;1<=n&&0<=i;n--,i--)if(y[n]!==z[i]){if(n!==1||i!==1)do if(n--,i--,0>i||y[n]!==z[i]){var j=`
`+y[n].replace(" at new "," at ");return t.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",t.displayName)),j}while(1<=n&&0<=i);break}}}finally{su=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?hl(a):""}function E0(t){switch(t.tag){case 26:case 27:case 5:return hl(t.type);case 16:return hl("Lazy");case 13:return hl("Suspense");case 19:return hl("SuspenseList");case 0:case 15:return fu(t.type,!1);case 11:return fu(t.type.render,!1);case 1:return fu(t.type,!0);case 31:return hl("Activity");default:return""}}function is(t){try{var e="";do e+=E0(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Te(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function os(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function T0(t){var e=os(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,o=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mi(t){t._valueTracker||(t._valueTracker=T0(t))}function us(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=os(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function wi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var _0=/[\n"\\]/g;function _e(t){return t.replace(_0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function du(t,e,a,n,i,o,s,d){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Te(e)):t.value!==""+Te(e)&&(t.value=""+Te(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?hu(t,s,Te(e)):a!=null?hu(t,s,Te(a)):n!=null&&t.removeAttribute("value"),i==null&&o!=null&&(t.defaultChecked=!!o),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+Te(d):t.removeAttribute("name")}function rs(t,e,a,n,i,o,s,d){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||e!=null))return;a=a!=null?""+Te(a):"",e=e!=null?""+Te(e):a,d||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=d?t.checked:!!n,t.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function hu(t,e,a){e==="number"&&wi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function gl(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+Te(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cs(t,e,a){if(e!=null&&(e=""+Te(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Te(a):""}function ss(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(r(92));if(Nt(n)){if(1<n.length)throw Error(r(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=Te(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function ml(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var z0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fs(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||z0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function ds(t,e,a){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&fs(t,i,n)}else for(var o in e)e.hasOwnProperty(o)&&fs(t,o,e[o])}function gu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),w0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ai(t){return w0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var mu=null;function pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pl=null,yl=null;function hs(t){var e=sl(t);if(e&&(t=e.stateNode)){var a=t[ie]||null;t:switch(t=e.stateNode,e.type){case"input":if(du(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_e(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[ie]||null;if(!i)throw Error(r(90));du(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&us(n)}break t;case"textarea":cs(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&gl(t,!!a.multiple,e,!1)}}}var yu=!1;function gs(t,e,a){if(yu)return t(e,a);yu=!0;try{var n=t(e);return n}finally{if(yu=!1,(pl!==null||yl!==null)&&(go(),pl&&(e=pl,t=yl,yl=pl=null,hs(e),t)))for(e=0;e<t.length;e++)hs(t[e])}}function gn(t,e){var a=t.stateNode;if(a===null)return null;var n=a[ie]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,e,typeof a));return a}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=!1;if(Je)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){bu=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{bu=!1}var ma=null,vu=null,ji=null;function ms(){if(ji)return ji;var t,e=vu,a=e.length,n,i="value"in ma?ma.value:ma.textContent,o=i.length;for(t=0;t<a&&e[t]===i[t];t++);var s=a-t;for(n=1;n<=s&&e[a-n]===i[o-n];n++);return ji=i.slice(t,1<n?1-n:void 0)}function Oi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ri(){return!0}function ps(){return!1}function oe(t){function e(a,n,i,o,s){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(a=t[d],this[d]=a?a(o):o[d]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ri:ps,this.isPropagationStopped=ps,this}return E(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),e}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Di=oe(Ga),pn=E({},Ga,{view:0,detail:0}),A0=oe(pn),xu,Su,yn,$i=E({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yn&&(yn&&t.type==="mousemove"?(xu=t.screenX-yn.screenX,Su=t.screenY-yn.screenY):Su=xu=0,yn=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),ys=oe($i),j0=E({},$i,{dataTransfer:0}),O0=oe(j0),R0=E({},pn,{relatedTarget:0}),Eu=oe(R0),D0=E({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=oe(D0),C0=E({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),N0=oe(C0),U0=E({},Ga,{data:0}),bs=oe(U0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B0[t])?!!e[t]:!1}function Tu(){return q0}var G0=E({},pn,{key:function(t){if(t.key){var e=H0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?L0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?Oi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k0=oe(G0),Y0=E({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vs=oe(Y0),X0=E({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Z0=oe(X0),Q0=E({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=oe(Q0),K0=E({},$i,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=oe(K0),W0=E({},Ga,{newState:0,oldState:0}),F0=oe(W0),P0=[9,13,27,32],_u=Je&&"CompositionEvent"in window,bn=null;Je&&"documentMode"in document&&(bn=document.documentMode);var I0=Je&&"TextEvent"in window&&!bn,xs=Je&&(!_u||bn&&8<bn&&11>=bn),Ss=" ",Es=!1;function Ts(t,e){switch(t){case"keyup":return P0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _s(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bl=!1;function tm(t,e){switch(t){case"compositionend":return _s(e);case"keypress":return e.which!==32?null:(Es=!0,Ss);case"textInput":return t=e.data,t===Ss&&Es?null:t;default:return null}}function em(t,e){if(bl)return t==="compositionend"||!_u&&Ts(t,e)?(t=ms(),ji=vu=ma=null,bl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xs&&e.locale!=="ko"?null:e.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!am[t.type]:e==="textarea"}function Ms(t,e,a,n){pl?yl?yl.push(n):yl=[n]:pl=n,e=xo(e,"onChange"),0<e.length&&(a=new Di("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var vn=null,xn=null;function lm(t){uh(t,0)}function Ci(t){var e=hn(t);if(us(e))return t}function ws(t,e){if(t==="change")return e}var As=!1;if(Je){var zu;if(Je){var Mu="oninput"in document;if(!Mu){var js=document.createElement("div");js.setAttribute("oninput","return;"),Mu=typeof js.oninput=="function"}zu=Mu}else zu=!1;As=zu&&(!document.documentMode||9<document.documentMode)}function Os(){vn&&(vn.detachEvent("onpropertychange",Rs),xn=vn=null)}function Rs(t){if(t.propertyName==="value"&&Ci(xn)){var e=[];Ms(e,xn,t,pu(t)),gs(lm,e)}}function nm(t,e,a){t==="focusin"?(Os(),vn=e,xn=a,vn.attachEvent("onpropertychange",Rs)):t==="focusout"&&Os()}function im(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ci(xn)}function om(t,e){if(t==="click")return Ci(e)}function um(t,e){if(t==="input"||t==="change")return Ci(e)}function rm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ge=typeof Object.is=="function"?Object.is:rm;function Sn(t,e){if(ge(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ae.call(e,i)||!ge(t[i],e[i]))return!1}return!0}function Ds(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $s(t,e){var a=Ds(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ds(a)}}function Cs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ns(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=wi(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=wi(t.document)}return e}function wu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var cm=Je&&"documentMode"in document&&11>=document.documentMode,vl=null,Au=null,En=null,ju=!1;function Us(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ju||vl==null||vl!==wi(n)||(n=vl,"selectionStart"in n&&wu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),En&&Sn(En,n)||(En=n,n=xo(Au,"onSelect"),0<n.length&&(e=new Di("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=vl)))}function ka(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var xl={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},Ou={},Hs={};Je&&(Hs=document.createElement("div").style,"AnimationEvent"in window||(delete xl.animationend.animation,delete xl.animationiteration.animation,delete xl.animationstart.animation),"TransitionEvent"in window||delete xl.transitionend.transition);function Ya(t){if(Ou[t])return Ou[t];if(!xl[t])return t;var e=xl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Hs)return Ou[t]=e[a];return t}var Ls=Ya("animationend"),Bs=Ya("animationiteration"),qs=Ya("animationstart"),sm=Ya("transitionrun"),fm=Ya("transitionstart"),dm=Ya("transitioncancel"),Gs=Ya("transitionend"),ks=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function Ne(t,e){ks.set(t,e),qa(e,[t])}var Ys=new WeakMap;function ze(t,e){if(typeof t=="object"&&t!==null){var a=Ys.get(t);return a!==void 0?a:(e={value:t,source:e,stack:is(e)},Ys.set(t,e),e)}return{value:t,source:e,stack:is(e)}}var Me=[],Sl=0,Du=0;function Ni(){for(var t=Sl,e=Du=Sl=0;e<t;){var a=Me[e];Me[e++]=null;var n=Me[e];Me[e++]=null;var i=Me[e];Me[e++]=null;var o=Me[e];if(Me[e++]=null,n!==null&&i!==null){var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}o!==0&&Xs(a,i,o)}}function Ui(t,e,a,n){Me[Sl++]=t,Me[Sl++]=e,Me[Sl++]=a,Me[Sl++]=n,Du|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function $u(t,e,a,n){return Ui(t,e,a,n),Hi(t)}function El(t,e){return Ui(t,null,null,e),Hi(t)}function Xs(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,o=t.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(i=!0)),t=o,o=o.return;return t.tag===3?(o=t.stateNode,i&&e!==null&&(i=31-he(a),t=o.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),o):null}function Hi(t){if(50<Vn)throw Vn=0,Br=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Tl={};function hm(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function me(t,e,a,n){return new hm(t,e,a,n)}function Cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function We(t,e){var a=t.alternate;return a===null?(a=me(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Zs(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Li(t,e,a,n,i,o){var s=0;if(n=t,typeof t=="function")Cu(t)&&(s=1);else if(typeof t=="string")s=mp(t,a,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Kt:return t=me(31,a,e,i),t.elementType=Kt,t.lanes=o,t;case X:return Xa(a.children,i,o,e);case nt:s=8,i|=24;break;case it:return t=me(12,a,e,i|2),t.elementType=it,t.lanes=o,t;case Z:return t=me(13,a,e,i),t.elementType=Z,t.lanes=o,t;case Y:return t=me(19,a,e,i),t.elementType=Y,t.lanes=o,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:case K:s=10;break t;case at:s=9;break t;case F:s=11;break t;case k:s=14;break t;case ht:s=16,n=null;break t}s=29,a=Error(r(130,t===null?"null":typeof t,"")),n=null}return e=me(s,a,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function Xa(t,e,a,n){return t=me(7,t,n,e),t.lanes=a,t}function Nu(t,e,a){return t=me(6,t,null,e),t.lanes=a,t}function Uu(t,e,a){return e=me(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var _l=[],zl=0,Bi=null,qi=0,we=[],Ae=0,Za=null,Fe=1,Pe="";function Qa(t,e){_l[zl++]=qi,_l[zl++]=Bi,Bi=t,qi=e}function Qs(t,e,a){we[Ae++]=Fe,we[Ae++]=Pe,we[Ae++]=Za,Za=t;var n=Fe;t=Pe;var i=32-he(n)-1;n&=~(1<<i),a+=1;var o=32-he(e)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Fe=1<<32-he(e)+i|a<<i|n,Pe=o+t}else Fe=1<<o|a<<i|n,Pe=t}function Hu(t){t.return!==null&&(Qa(t,1),Qs(t,1,0))}function Lu(t){for(;t===Bi;)Bi=_l[--zl],_l[zl]=null,qi=_l[--zl],_l[zl]=null;for(;t===Za;)Za=we[--Ae],we[Ae]=null,Pe=we[--Ae],we[Ae]=null,Fe=we[--Ae],we[Ae]=null}var le=null,jt=null,yt=!1,Va=null,ke=!1,Bu=Error(r(519));function Ka(t){var e=Error(r(418,""));throw zn(ze(e,t)),Bu}function Vs(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[It]=t,e[ie]=n,a){case"dialog":dt("cancel",e),dt("close",e);break;case"iframe":case"object":case"embed":dt("load",e);break;case"video":case"audio":for(a=0;a<Jn.length;a++)dt(Jn[a],e);break;case"source":dt("error",e);break;case"img":case"image":case"link":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"input":dt("invalid",e),rs(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Mi(e);break;case"select":dt("invalid",e);break;case"textarea":dt("invalid",e),ss(e,n.value,n.defaultValue,n.children),Mi(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||fh(e.textContent,a)?(n.popover!=null&&(dt("beforetoggle",e),dt("toggle",e)),n.onScroll!=null&&dt("scroll",e),n.onScrollEnd!=null&&dt("scrollend",e),n.onClick!=null&&(e.onclick=So),e=!0):e=!1,e||Ka(t)}function Ks(t){for(le=t.return;le;)switch(le.tag){case 5:case 13:ke=!1;return;case 27:case 3:ke=!0;return;default:le=le.return}}function Tn(t){if(t!==le)return!1;if(!yt)return Ks(t),yt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ec(t.type,t.memoizedProps)),a=!a),a&&jt&&Ka(t),Ks(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){jt=He(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}jt=null}}else e===27?(e=jt,Ra(t.type)?(t=ic,ic=null,jt=t):jt=e):jt=le?He(t.stateNode.nextSibling):null;return!0}function _n(){jt=le=null,yt=!1}function Js(){var t=Va;return t!==null&&(ce===null?ce=t:ce.push.apply(ce,t),Va=null),t}function zn(t){Va===null?Va=[t]:Va.push(t)}var qu=$(null),Ja=null,Ie=null;function pa(t,e,a){B(qu,e._currentValue),e._currentValue=a}function ta(t){t._currentValue=qu.current,L(qu)}function Gu(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function ku(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){var s=i.child;o=o.firstContext;t:for(;o!==null;){var d=o;o=i;for(var y=0;y<e.length;y++)if(d.context===e[y]){o.lanes|=a,d=o.alternate,d!==null&&(d.lanes|=a),Gu(o.return,a,t),n||(s=null);break t}o=d.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(r(341));s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),Gu(s,a,t),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Mn(t,e,a,n){t=null;for(var i=e,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(r(387));if(s=s.memoizedProps,s!==null){var d=i.type;ge(i.pendingProps.value,s.value)||(t!==null?t.push(d):t=[d])}}else if(i===Rt.current){if(s=i.alternate,s===null)throw Error(r(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(ei):t=[ei])}i=i.return}t!==null&&ku(e,t,a,n),e.flags|=262144}function Gi(t){for(t=t.firstContext;t!==null;){if(!ge(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Wa(t){Ja=t,Ie=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function te(t){return Ws(Ja,t)}function ki(t,e){return Ja===null&&Wa(t),Ws(t,e)}function Ws(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ie===null){if(t===null)throw Error(r(308));Ie=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ie=Ie.next=e;return a}var gm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},mm=l.unstable_scheduleCallback,pm=l.unstable_NormalPriority,qt={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new gm,data:new Map,refCount:0}}function wn(t){t.refCount--,t.refCount===0&&mm(pm,function(){t.controller.abort()})}var An=null,Xu=0,Ml=0,wl=null;function ym(t,e){if(An===null){var a=An=[];Xu=0,Ml=Qr(),wl={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Xu++,e.then(Fs,Fs),e}function Fs(){if(--Xu===0&&An!==null){wl!==null&&(wl.status="fulfilled");var t=An;An=null,Ml=0,wl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function bm(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Ps=A.S;A.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&ym(t,e),Ps!==null&&Ps(t,e)};var Fa=$(null);function Zu(){var t=Fa.current;return t!==null?t:zt.pooledCache}function Yi(t,e){e===null?B(Fa,Fa.current):B(Fa,e.pool)}function Is(){var t=Zu();return t===null?null:{parent:qt._currentValue,pool:t}}var jn=Error(r(460)),tf=Error(r(474)),Xi=Error(r(542)),Qu={then:function(){}};function ef(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zi(){}function af(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Zi,Zi),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,nf(t),t;default:if(typeof e.status=="string")e.then(Zi,Zi);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,nf(t),t}throw On=e,jn}}var On=null;function lf(){if(On===null)throw Error(r(459));var t=On;return On=null,t}function nf(t){if(t===jn||t===Xi)throw Error(r(483))}var ya=!1;function Vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function va(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(vt&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=Hi(t),Xs(t,null,a),e}return Ui(t,n,e,a),Hi(t)}function Rn(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Fc(t,a)}}function Ju(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?i=o=s:o=o.next=s,a=a.next}while(a!==null);o===null?i=o=e:o=o.next=e}else i=o=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Wu=!1;function Dn(){if(Wu){var t=wl;if(t!==null)throw t}}function $n(t,e,a,n){Wu=!1;var i=t.updateQueue;ya=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var y=d,z=y.next;y.next=null,s===null?o=z:s.next=z,s=y;var j=t.alternate;j!==null&&(j=j.updateQueue,d=j.lastBaseUpdate,d!==s&&(d===null?j.firstBaseUpdate=z:d.next=z,j.lastBaseUpdate=y))}if(o!==null){var N=i.baseState;s=0,j=z=y=null,d=o;do{var M=d.lane&-536870913,w=M!==d.lane;if(w?(gt&M)===M:(n&M)===M){M!==0&&M===Ml&&(Wu=!0),j!==null&&(j=j.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var lt=t,tt=d;M=e;var Tt=a;switch(tt.tag){case 1:if(lt=tt.payload,typeof lt=="function"){N=lt.call(Tt,N,M);break t}N=lt;break t;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=tt.payload,M=typeof lt=="function"?lt.call(Tt,N,M):lt,M==null)break t;N=E({},N,M);break t;case 2:ya=!0}}M=d.callback,M!==null&&(t.flags|=64,w&&(t.flags|=8192),w=i.callbacks,w===null?i.callbacks=[M]:w.push(M))}else w={lane:M,tag:d.tag,payload:d.payload,callback:d.callback,next:null},j===null?(z=j=w,y=N):j=j.next=w,s|=M;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;w=d,d=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);j===null&&(y=N),i.baseState=y,i.firstBaseUpdate=z,i.lastBaseUpdate=j,o===null&&(i.shared.lanes=0),wa|=s,t.lanes=s,t.memoizedState=N}}function of(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function uf(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)of(a[t],e)}var Al=$(null),Qi=$(0);function rf(t,e){t=ua,B(Qi,t),B(Al,e),ua=t|e.baseLanes}function Fu(){B(Qi,ua),B(Al,Al.current)}function Pu(){ua=Qi.current,L(Al),L(Qi)}var xa=0,ct=null,St=null,Ut=null,Vi=!1,jl=!1,Pa=!1,Ki=0,Cn=0,Ol=null,vm=0;function Dt(){throw Error(r(321))}function Iu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ge(t[a],e[a]))return!1;return!0}function tr(t,e,a,n,i,o){return xa=o,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,A.H=t===null||t.memoizedState===null?Zf:Qf,Pa=!1,o=a(n,i),Pa=!1,jl&&(o=sf(e,a,n,i)),cf(t),o}function cf(t){A.H=to;var e=St!==null&&St.next!==null;if(xa=0,Ut=St=ct=null,Vi=!1,Cn=0,Ol=null,e)throw Error(r(300));t===null||Yt||(t=t.dependencies,t!==null&&Gi(t)&&(Yt=!0))}function sf(t,e,a,n){ct=t;var i=0;do{if(jl&&(Ol=null),Cn=0,jl=!1,25<=i)throw Error(r(301));if(i+=1,Ut=St=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}A.H=Mm,o=e(a,n)}while(jl);return o}function xm(){var t=A.H,e=t.useState()[0];return e=typeof e.then=="function"?Nn(e):e,t=t.useState()[0],(St!==null?St.memoizedState:null)!==t&&(ct.flags|=1024),e}function er(){var t=Ki!==0;return Ki=0,t}function ar(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function lr(t){if(Vi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Vi=!1}xa=0,Ut=St=ct=null,jl=!1,Cn=Ki=0,Ol=null}function ue(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?ct.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Ht(){if(St===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Ut===null?ct.memoizedState:Ut.next;if(e!==null)Ut=e,St=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ut===null?ct.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function nr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Nn(t){var e=Cn;return Cn+=1,Ol===null&&(Ol=[]),t=af(Ol,t,e),e=ct,(Ut===null?e.memoizedState:Ut.next)===null&&(e=e.alternate,A.H=e===null||e.memoizedState===null?Zf:Qf),t}function Ji(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Nn(t);if(t.$$typeof===K)return te(t)}throw Error(r(438,String(t)))}function ir(t){var e=null,a=ct.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=ct.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=nr(),ct.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=qe;return e.index++,a}function ea(t,e){return typeof e=="function"?e(t):e}function Wi(t){var e=Ht();return or(e,St,t)}function or(t,e,a){var n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=a;var i=t.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}e.baseQueue=i=o,n.pending=null}if(o=t.baseState,i===null)t.memoizedState=o;else{e=i.next;var d=s=null,y=null,z=e,j=!1;do{var N=z.lane&-536870913;if(N!==z.lane?(gt&N)===N:(xa&N)===N){var M=z.revertLane;if(M===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),N===Ml&&(j=!0);else if((xa&M)===M){z=z.next,M===Ml&&(j=!0);continue}else N={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},y===null?(d=y=N,s=o):y=y.next=N,ct.lanes|=M,wa|=M;N=z.action,Pa&&a(o,N),o=z.hasEagerState?z.eagerState:a(o,N)}else M={lane:N,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},y===null?(d=y=M,s=o):y=y.next=M,ct.lanes|=N,wa|=N;z=z.next}while(z!==null&&z!==e);if(y===null?s=o:y.next=d,!ge(o,t.memoizedState)&&(Yt=!0,j&&(a=wl,a!==null)))throw a;t.memoizedState=o,t.baseState=s,t.baseQueue=y,n.lastRenderedState=o}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function ur(t){var e=Ht(),a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,o=e.memoizedState;if(i!==null){a.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);ge(o,e.memoizedState)||(Yt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),a.lastRenderedState=o}return[o,n]}function ff(t,e,a){var n=ct,i=Ht(),o=yt;if(o){if(a===void 0)throw Error(r(407));a=a()}else a=e();var s=!ge((St||i).memoizedState,a);s&&(i.memoizedState=a,Yt=!0),i=i.queue;var d=gf.bind(null,n,i,t);if(Un(2048,8,d,[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Rl(9,Fi(),hf.bind(null,n,i,a,e),null),zt===null)throw Error(r(349));o||(xa&124)!==0||df(n,e,a)}return a}function df(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ct.updateQueue,e===null?(e=nr(),ct.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function hf(t,e,a,n){e.value=a,e.getSnapshot=n,mf(e)&&pf(t)}function gf(t,e,a){return a(function(){mf(e)&&pf(t)})}function mf(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ge(t,a)}catch{return!0}}function pf(t){var e=El(t,2);e!==null&&xe(e,t,2)}function rr(t){var e=ue();if(typeof t=="function"){var a=t;if(t=a(),Pa){ha(!0);try{a()}finally{ha(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e}function yf(t,e,a,n){return t.baseState=a,or(t,St,typeof n=="function"?n:ea)}function Sm(t,e,a,n,i){if(Ii(t))throw Error(r(485));if(t=e.action,t!==null){var o={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};A.T!==null?a(!0):o.isTransition=!1,n(o),a=e.pending,a===null?(o.next=e.pending=o,bf(e,o)):(o.next=a.next,e.pending=a.next=o)}}function bf(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var o=A.T,s={};A.T=s;try{var d=a(i,n),y=A.S;y!==null&&y(s,d),vf(t,e,d)}catch(z){cr(t,e,z)}finally{A.T=o}}else try{o=a(i,n),vf(t,e,o)}catch(z){cr(t,e,z)}}function vf(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){xf(t,e,n)},function(n){return cr(t,e,n)}):xf(t,e,a)}function xf(t,e,a){e.status="fulfilled",e.value=a,Sf(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,bf(t,a)))}function cr(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,Sf(e),e=e.next;while(e!==n)}t.action=null}function Sf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ef(t,e){return e}function Tf(t,e){if(yt){var a=zt.formState;if(a!==null){t:{var n=ct;if(yt){if(jt){e:{for(var i=jt,o=ke;i.nodeType!==8;){if(!o){i=null;break e}if(i=He(i.nextSibling),i===null){i=null;break e}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){jt=He(i.nextSibling),n=i.data==="F!";break t}}Ka(n)}n=!1}n&&(e=a[0])}}return a=ue(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ef,lastRenderedState:e},a.queue=n,a=kf.bind(null,ct,n),n.dispatch=a,n=rr(!1),o=gr.bind(null,ct,!1,n.queue),n=ue(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=Sm.bind(null,ct,i,o,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function _f(t){var e=Ht();return zf(e,St,t)}function zf(t,e,a){if(e=or(t,e,Ef)[0],t=Wi(ea)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Nn(e)}catch(s){throw s===jn?Xi:s}else n=e;e=Ht();var i=e.queue,o=i.dispatch;return a!==e.memoizedState&&(ct.flags|=2048,Rl(9,Fi(),Em.bind(null,i,a),null)),[n,o,t]}function Em(t,e){t.action=e}function Mf(t){var e=Ht(),a=St;if(a!==null)return zf(e,a,t);Ht(),e=e.memoizedState,a=Ht();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Rl(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=ct.updateQueue,e===null&&(e=nr(),ct.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Fi(){return{destroy:void 0,resource:void 0}}function wf(){return Ht().memoizedState}function Pi(t,e,a,n){var i=ue();n=n===void 0?null:n,ct.flags|=t,i.memoizedState=Rl(1|e,Fi(),a,n)}function Un(t,e,a,n){var i=Ht();n=n===void 0?null:n;var o=i.memoizedState.inst;St!==null&&n!==null&&Iu(n,St.memoizedState.deps)?i.memoizedState=Rl(e,o,a,n):(ct.flags|=t,i.memoizedState=Rl(1|e,o,a,n))}function Af(t,e){Pi(8390656,8,t,e)}function jf(t,e){Un(2048,8,t,e)}function Of(t,e){return Un(4,2,t,e)}function Rf(t,e){return Un(4,4,t,e)}function Df(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $f(t,e,a){a=a!=null?a.concat([t]):null,Un(4,4,Df.bind(null,e,t),a)}function sr(){}function Cf(t,e){var a=Ht();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Iu(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function Nf(t,e){var a=Ht();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Iu(e,n[1]))return n[0];if(n=t(),Pa){ha(!0);try{t()}finally{ha(!1)}}return a.memoizedState=[n,e],n}function fr(t,e,a){return a===void 0||(xa&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=Ld(),ct.lanes|=t,wa|=t,a)}function Uf(t,e,a,n){return ge(a,e)?a:Al.current!==null?(t=fr(t,a,n),ge(t,e)||(Yt=!0),t):(xa&42)===0?(Yt=!0,t.memoizedState=a):(t=Ld(),ct.lanes|=t,wa|=t,e)}function Hf(t,e,a,n,i){var o=C.p;C.p=o!==0&&8>o?o:8;var s=A.T,d={};A.T=d,gr(t,!1,e,a);try{var y=i(),z=A.S;if(z!==null&&z(d,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var j=bm(y,n);Hn(t,e,j,ve(t))}else Hn(t,e,n,ve(t))}catch(N){Hn(t,e,{then:function(){},status:"rejected",reason:N},ve())}finally{C.p=o,A.T=s}}function Tm(){}function dr(t,e,a,n){if(t.tag!==5)throw Error(r(476));var i=Lf(t).queue;Hf(t,i,e,q,a===null?Tm:function(){return Bf(t),a(n)})}function Lf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:q},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Bf(t){var e=Lf(t).next.queue;Hn(t,e,{},ve())}function hr(){return te(ei)}function qf(){return Ht().memoizedState}function Gf(){return Ht().memoizedState}function _m(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=ve();t=ba(a);var n=va(e,t,a);n!==null&&(xe(n,e,a),Rn(n,e,a)),e={cache:Yu()},t.payload=e;return}e=e.return}}function zm(t,e,a){var n=ve();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ii(t)?Yf(e,a):(a=$u(t,e,a,n),a!==null&&(xe(a,t,n),Xf(a,e,n)))}function kf(t,e,a){var n=ve();Hn(t,e,a,n)}function Hn(t,e,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ii(t))Yf(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,d=o(s,a);if(i.hasEagerState=!0,i.eagerState=d,ge(d,s))return Ui(t,e,i,0),zt===null&&Ni(),!1}catch{}finally{}if(a=$u(t,e,i,n),a!==null)return xe(a,t,n),Xf(a,e,n),!0}return!1}function gr(t,e,a,n){if(n={lane:2,revertLane:Qr(),action:n,hasEagerState:!1,eagerState:null,next:null},Ii(t)){if(e)throw Error(r(479))}else e=$u(t,a,n,2),e!==null&&xe(e,t,2)}function Ii(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Yf(t,e){jl=Vi=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Xf(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Fc(t,a)}}var to={readContext:te,use:Ji,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},Zf={readContext:te,use:Ji,useCallback:function(t,e){return ue().memoizedState=[t,e===void 0?null:e],t},useContext:te,useEffect:Af,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Pi(4194308,4,Df.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Pi(4194308,4,t,e)},useInsertionEffect:function(t,e){Pi(4,2,t,e)},useMemo:function(t,e){var a=ue();e=e===void 0?null:e;var n=t();if(Pa){ha(!0);try{t()}finally{ha(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=ue();if(a!==void 0){var i=a(e);if(Pa){ha(!0);try{a(e)}finally{ha(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=zm.bind(null,ct,t),[n.memoizedState,t]},useRef:function(t){var e=ue();return t={current:t},e.memoizedState=t},useState:function(t){t=rr(t);var e=t.queue,a=kf.bind(null,ct,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:sr,useDeferredValue:function(t,e){var a=ue();return fr(a,t,e)},useTransition:function(){var t=rr(!1);return t=Hf.bind(null,ct,t.queue,!0,!1),ue().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=ct,i=ue();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=e(),zt===null)throw Error(r(349));(gt&124)!==0||df(n,e,a)}i.memoizedState=a;var o={value:a,getSnapshot:e};return i.queue=o,Af(gf.bind(null,n,o,t),[t]),n.flags|=2048,Rl(9,Fi(),hf.bind(null,n,o,a,e),null),a},useId:function(){var t=ue(),e=zt.identifierPrefix;if(yt){var a=Pe,n=Fe;a=(n&~(1<<32-he(n)-1)).toString(32)+a,e="«"+e+"R"+a,a=Ki++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=vm++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:hr,useFormState:Tf,useActionState:Tf,useOptimistic:function(t){var e=ue();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=gr.bind(null,ct,!0,a),a.dispatch=e,[t,e]},useMemoCache:ir,useCacheRefresh:function(){return ue().memoizedState=_m.bind(null,ct)}},Qf={readContext:te,use:Ji,useCallback:Cf,useContext:te,useEffect:jf,useImperativeHandle:$f,useInsertionEffect:Of,useLayoutEffect:Rf,useMemo:Nf,useReducer:Wi,useRef:wf,useState:function(){return Wi(ea)},useDebugValue:sr,useDeferredValue:function(t,e){var a=Ht();return Uf(a,St.memoizedState,t,e)},useTransition:function(){var t=Wi(ea)[0],e=Ht().memoizedState;return[typeof t=="boolean"?t:Nn(t),e]},useSyncExternalStore:ff,useId:qf,useHostTransitionStatus:hr,useFormState:_f,useActionState:_f,useOptimistic:function(t,e){var a=Ht();return yf(a,St,t,e)},useMemoCache:ir,useCacheRefresh:Gf},Mm={readContext:te,use:Ji,useCallback:Cf,useContext:te,useEffect:jf,useImperativeHandle:$f,useInsertionEffect:Of,useLayoutEffect:Rf,useMemo:Nf,useReducer:ur,useRef:wf,useState:function(){return ur(ea)},useDebugValue:sr,useDeferredValue:function(t,e){var a=Ht();return St===null?fr(a,t,e):Uf(a,St.memoizedState,t,e)},useTransition:function(){var t=ur(ea)[0],e=Ht().memoizedState;return[typeof t=="boolean"?t:Nn(t),e]},useSyncExternalStore:ff,useId:qf,useHostTransitionStatus:hr,useFormState:Mf,useActionState:Mf,useOptimistic:function(t,e){var a=Ht();return St!==null?yf(a,St,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ir,useCacheRefresh:Gf},Dl=null,Ln=0;function eo(t){var e=Ln;return Ln+=1,Dl===null&&(Dl=[]),af(Dl,t,e)}function Bn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ao(t,e){throw e.$$typeof===D?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Vf(t){var e=t._init;return e(t._payload)}function Kf(t){function e(T,x){if(t){var _=T.deletions;_===null?(T.deletions=[x],T.flags|=16):_.push(x)}}function a(T,x){if(!t)return null;for(;x!==null;)e(T,x),x=x.sibling;return null}function n(T){for(var x=new Map;T!==null;)T.key!==null?x.set(T.key,T):x.set(T.index,T),T=T.sibling;return x}function i(T,x){return T=We(T,x),T.index=0,T.sibling=null,T}function o(T,x,_){return T.index=_,t?(_=T.alternate,_!==null?(_=_.index,_<x?(T.flags|=67108866,x):_):(T.flags|=67108866,x)):(T.flags|=1048576,x)}function s(T){return t&&T.alternate===null&&(T.flags|=67108866),T}function d(T,x,_,R){return x===null||x.tag!==6?(x=Nu(_,T.mode,R),x.return=T,x):(x=i(x,_),x.return=T,x)}function y(T,x,_,R){var Q=_.type;return Q===X?j(T,x,_.props.children,R,_.key):x!==null&&(x.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===ht&&Vf(Q)===x.type)?(x=i(x,_.props),Bn(x,_),x.return=T,x):(x=Li(_.type,_.key,_.props,null,T.mode,R),Bn(x,_),x.return=T,x)}function z(T,x,_,R){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=Uu(_,T.mode,R),x.return=T,x):(x=i(x,_.children||[]),x.return=T,x)}function j(T,x,_,R,Q){return x===null||x.tag!==7?(x=Xa(_,T.mode,R,Q),x.return=T,x):(x=i(x,_),x.return=T,x)}function N(T,x,_){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Nu(""+x,T.mode,_),x.return=T,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case H:return _=Li(x.type,x.key,x.props,null,T.mode,_),Bn(_,x),_.return=T,_;case G:return x=Uu(x,T.mode,_),x.return=T,x;case ht:var R=x._init;return x=R(x._payload),N(T,x,_)}if(Nt(x)||Ct(x))return x=Xa(x,T.mode,_,null),x.return=T,x;if(typeof x.then=="function")return N(T,eo(x),_);if(x.$$typeof===K)return N(T,ki(T,x),_);ao(T,x)}return null}function M(T,x,_,R){var Q=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return Q!==null?null:d(T,x,""+_,R);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case H:return _.key===Q?y(T,x,_,R):null;case G:return _.key===Q?z(T,x,_,R):null;case ht:return Q=_._init,_=Q(_._payload),M(T,x,_,R)}if(Nt(_)||Ct(_))return Q!==null?null:j(T,x,_,R,null);if(typeof _.then=="function")return M(T,x,eo(_),R);if(_.$$typeof===K)return M(T,x,ki(T,_),R);ao(T,_)}return null}function w(T,x,_,R,Q){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return T=T.get(_)||null,d(x,T,""+R,Q);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case H:return T=T.get(R.key===null?_:R.key)||null,y(x,T,R,Q);case G:return T=T.get(R.key===null?_:R.key)||null,z(x,T,R,Q);case ht:var st=R._init;return R=st(R._payload),w(T,x,_,R,Q)}if(Nt(R)||Ct(R))return T=T.get(_)||null,j(x,T,R,Q,null);if(typeof R.then=="function")return w(T,x,_,eo(R),Q);if(R.$$typeof===K)return w(T,x,_,ki(x,R),Q);ao(x,R)}return null}function lt(T,x,_,R){for(var Q=null,st=null,W=x,et=x=0,Zt=null;W!==null&&et<_.length;et++){W.index>et?(Zt=W,W=null):Zt=W.sibling;var pt=M(T,W,_[et],R);if(pt===null){W===null&&(W=Zt);break}t&&W&&pt.alternate===null&&e(T,W),x=o(pt,x,et),st===null?Q=pt:st.sibling=pt,st=pt,W=Zt}if(et===_.length)return a(T,W),yt&&Qa(T,et),Q;if(W===null){for(;et<_.length;et++)W=N(T,_[et],R),W!==null&&(x=o(W,x,et),st===null?Q=W:st.sibling=W,st=W);return yt&&Qa(T,et),Q}for(W=n(W);et<_.length;et++)Zt=w(W,T,et,_[et],R),Zt!==null&&(t&&Zt.alternate!==null&&W.delete(Zt.key===null?et:Zt.key),x=o(Zt,x,et),st===null?Q=Zt:st.sibling=Zt,st=Zt);return t&&W.forEach(function(Ua){return e(T,Ua)}),yt&&Qa(T,et),Q}function tt(T,x,_,R){if(_==null)throw Error(r(151));for(var Q=null,st=null,W=x,et=x=0,Zt=null,pt=_.next();W!==null&&!pt.done;et++,pt=_.next()){W.index>et?(Zt=W,W=null):Zt=W.sibling;var Ua=M(T,W,pt.value,R);if(Ua===null){W===null&&(W=Zt);break}t&&W&&Ua.alternate===null&&e(T,W),x=o(Ua,x,et),st===null?Q=Ua:st.sibling=Ua,st=Ua,W=Zt}if(pt.done)return a(T,W),yt&&Qa(T,et),Q;if(W===null){for(;!pt.done;et++,pt=_.next())pt=N(T,pt.value,R),pt!==null&&(x=o(pt,x,et),st===null?Q=pt:st.sibling=pt,st=pt);return yt&&Qa(T,et),Q}for(W=n(W);!pt.done;et++,pt=_.next())pt=w(W,T,et,pt.value,R),pt!==null&&(t&&pt.alternate!==null&&W.delete(pt.key===null?et:pt.key),x=o(pt,x,et),st===null?Q=pt:st.sibling=pt,st=pt);return t&&W.forEach(function(wp){return e(T,wp)}),yt&&Qa(T,et),Q}function Tt(T,x,_,R){if(typeof _=="object"&&_!==null&&_.type===X&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case H:t:{for(var Q=_.key;x!==null;){if(x.key===Q){if(Q=_.type,Q===X){if(x.tag===7){a(T,x.sibling),R=i(x,_.props.children),R.return=T,T=R;break t}}else if(x.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===ht&&Vf(Q)===x.type){a(T,x.sibling),R=i(x,_.props),Bn(R,_),R.return=T,T=R;break t}a(T,x);break}else e(T,x);x=x.sibling}_.type===X?(R=Xa(_.props.children,T.mode,R,_.key),R.return=T,T=R):(R=Li(_.type,_.key,_.props,null,T.mode,R),Bn(R,_),R.return=T,T=R)}return s(T);case G:t:{for(Q=_.key;x!==null;){if(x.key===Q)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){a(T,x.sibling),R=i(x,_.children||[]),R.return=T,T=R;break t}else{a(T,x);break}else e(T,x);x=x.sibling}R=Uu(_,T.mode,R),R.return=T,T=R}return s(T);case ht:return Q=_._init,_=Q(_._payload),Tt(T,x,_,R)}if(Nt(_))return lt(T,x,_,R);if(Ct(_)){if(Q=Ct(_),typeof Q!="function")throw Error(r(150));return _=Q.call(_),tt(T,x,_,R)}if(typeof _.then=="function")return Tt(T,x,eo(_),R);if(_.$$typeof===K)return Tt(T,x,ki(T,_),R);ao(T,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,x!==null&&x.tag===6?(a(T,x.sibling),R=i(x,_),R.return=T,T=R):(a(T,x),R=Nu(_,T.mode,R),R.return=T,T=R),s(T)):a(T,x)}return function(T,x,_,R){try{Ln=0;var Q=Tt(T,x,_,R);return Dl=null,Q}catch(W){if(W===jn||W===Xi)throw W;var st=me(29,W,null,T.mode);return st.lanes=R,st.return=T,st}finally{}}}var $l=Kf(!0),Jf=Kf(!1),je=$(null),Ye=null;function Sa(t){var e=t.alternate;B(Gt,Gt.current&1),B(je,t),Ye===null&&(e===null||Al.current!==null||e.memoizedState!==null)&&(Ye=t)}function Wf(t){if(t.tag===22){if(B(Gt,Gt.current),B(je,t),Ye===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ye=t)}}else Ea()}function Ea(){B(Gt,Gt.current),B(je,je.current)}function aa(t){L(je),Ye===t&&(Ye=null),L(Gt)}var Gt=$(0);function lo(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||nc(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function mr(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:E({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var pr={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=ve(),i=ba(n);i.payload=e,a!=null&&(i.callback=a),e=va(t,i,n),e!==null&&(xe(e,t,n),Rn(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=ve(),i=ba(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=va(t,i,n),e!==null&&(xe(e,t,n),Rn(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=ve(),n=ba(a);n.tag=2,e!=null&&(n.callback=e),e=va(t,n,a),e!==null&&(xe(e,t,a),Rn(e,t,a))}};function Ff(t,e,a,n,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,s):e.prototype&&e.prototype.isPureReactComponent?!Sn(a,n)||!Sn(i,o):!0}function Pf(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&pr.enqueueReplaceState(e,e.state,null)}function Ia(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=E({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}var no=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function If(t){no(t)}function td(t){console.error(t)}function ed(t){no(t)}function io(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function ad(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function yr(t,e,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){io(t,e)},a}function ld(t){return t=ba(t),t.tag=3,t}function nd(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var o=n.value;t.payload=function(){return i(o)},t.callback=function(){ad(e,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ad(e,a,n),typeof i!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})})}function wm(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&Mn(e,a,i,!0),a=je.current,a!==null){switch(a.tag){case 13:return Ye===null?Gr():a.alternate===null&&Ot===0&&(Ot=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Qu?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),Yr(t,n,i)),!1;case 22:return a.flags|=65536,n===Qu?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),Yr(t,n,i)),!1}throw Error(r(435,a.tag))}return Yr(t,n,i),Gr(),!1}if(yt)return e=je.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==Bu&&(t=Error(r(422),{cause:n}),zn(ze(t,a)))):(n!==Bu&&(e=Error(r(423),{cause:n}),zn(ze(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=ze(n,a),i=yr(t.stateNode,n,i),Ju(t,i),Ot!==4&&(Ot=2)),!1;var o=Error(r(520),{cause:n});if(o=ze(o,a),Qn===null?Qn=[o]:Qn.push(o),Ot!==4&&(Ot=2),e===null)return!0;n=ze(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=yr(a.stateNode,n,t),Ju(a,t),!1;case 1:if(e=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))))return a.flags|=65536,i&=-i,a.lanes|=i,i=ld(i),nd(i,t,a,n),Ju(a,i),!1}a=a.return}while(a!==null);return!1}var id=Error(r(461)),Yt=!1;function Wt(t,e,a,n){e.child=t===null?Jf(e,null,a,n):$l(e,t.child,a,n)}function od(t,e,a,n,i){a=a.render;var o=e.ref;if("ref"in n){var s={};for(var d in n)d!=="ref"&&(s[d]=n[d])}else s=n;return Wa(e),n=tr(t,e,a,s,o,i),d=er(),t!==null&&!Yt?(ar(t,e,i),la(t,e,i)):(yt&&d&&Hu(e),e.flags|=1,Wt(t,e,n,i),e.child)}function ud(t,e,a,n,i){if(t===null){var o=a.type;return typeof o=="function"&&!Cu(o)&&o.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=o,rd(t,e,o,n,i)):(t=Li(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!zr(t,i)){var s=o.memoizedProps;if(a=a.compare,a=a!==null?a:Sn,a(s,n)&&t.ref===e.ref)return la(t,e,i)}return e.flags|=1,t=We(o,n),t.ref=e.ref,t.return=e,e.child=t}function rd(t,e,a,n,i){if(t!==null){var o=t.memoizedProps;if(Sn(o,n)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=n=o,zr(t,i))(t.flags&131072)!==0&&(Yt=!0);else return e.lanes=t.lanes,la(t,e,i)}return br(t,e,a,n,i)}function cd(t,e,a){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if((e.flags&128)!==0){if(n=o!==null?o.baseLanes|a:a,t!==null){for(i=e.child=t.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;e.childLanes=o&~n}else e.childLanes=0,e.child=null;return sd(t,e,n,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yi(e,o!==null?o.cachePool:null),o!==null?rf(e,o):Fu(),Wf(e);else return e.lanes=e.childLanes=536870912,sd(t,e,o!==null?o.baseLanes|a:a,a)}else o!==null?(Yi(e,o.cachePool),rf(e,o),Ea(),e.memoizedState=null):(t!==null&&Yi(e,null),Fu(),Ea());return Wt(t,e,i,a),e.child}function sd(t,e,a,n){var i=Zu();return i=i===null?null:{parent:qt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&Yi(e,null),Fu(),Wf(e),t!==null&&Mn(t,e,n,!0),null}function oo(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function br(t,e,a,n,i){return Wa(e),a=tr(t,e,a,n,void 0,i),n=er(),t!==null&&!Yt?(ar(t,e,i),la(t,e,i)):(yt&&n&&Hu(e),e.flags|=1,Wt(t,e,a,i),e.child)}function fd(t,e,a,n,i,o){return Wa(e),e.updateQueue=null,a=sf(e,n,a,i),cf(t),n=er(),t!==null&&!Yt?(ar(t,e,o),la(t,e,o)):(yt&&n&&Hu(e),e.flags|=1,Wt(t,e,a,o),e.child)}function dd(t,e,a,n,i){if(Wa(e),e.stateNode===null){var o=Tl,s=a.contextType;typeof s=="object"&&s!==null&&(o=te(s)),o=new a(n,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=pr,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=n,o.state=e.memoizedState,o.refs={},Vu(e),s=a.contextType,o.context=typeof s=="object"&&s!==null?te(s):Tl,o.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(mr(e,a,s,n),o.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&pr.enqueueReplaceState(o,o.state,null),$n(e,n,o,i),Dn(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){o=e.stateNode;var d=e.memoizedProps,y=Ia(a,d);o.props=y;var z=o.context,j=a.contextType;s=Tl,typeof j=="object"&&j!==null&&(s=te(j));var N=a.getDerivedStateFromProps;j=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function",d=e.pendingProps!==d,j||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d||z!==s)&&Pf(e,o,n,s),ya=!1;var M=e.memoizedState;o.state=M,$n(e,n,o,i),Dn(),z=e.memoizedState,d||M!==z||ya?(typeof N=="function"&&(mr(e,a,N,n),z=e.memoizedState),(y=ya||Ff(e,a,y,n,M,z,s))?(j||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=z),o.props=n,o.state=z,o.context=s,n=y):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{o=e.stateNode,Ku(t,e),s=e.memoizedProps,j=Ia(a,s),o.props=j,N=e.pendingProps,M=o.context,z=a.contextType,y=Tl,typeof z=="object"&&z!==null&&(y=te(z)),d=a.getDerivedStateFromProps,(z=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==N||M!==y)&&Pf(e,o,n,y),ya=!1,M=e.memoizedState,o.state=M,$n(e,n,o,i),Dn();var w=e.memoizedState;s!==N||M!==w||ya||t!==null&&t.dependencies!==null&&Gi(t.dependencies)?(typeof d=="function"&&(mr(e,a,d,n),w=e.memoizedState),(j=ya||Ff(e,a,j,n,M,w,y)||t!==null&&t.dependencies!==null&&Gi(t.dependencies))?(z||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,w,y),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,w,y)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&M===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&M===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=w),o.props=n,o.state=w,o.context=y,n=j):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&M===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&M===t.memoizedState||(e.flags|=1024),n=!1)}return o=n,oo(t,e),n=(e.flags&128)!==0,o||n?(o=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&n?(e.child=$l(e,t.child,null,i),e.child=$l(e,null,a,i)):Wt(t,e,a,i),e.memoizedState=o.state,t=e.child):t=la(t,e,i),t}function hd(t,e,a,n){return _n(),e.flags|=256,Wt(t,e,a,n),e.child}var vr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xr(t){return{baseLanes:t,cachePool:Is()}}function Sr(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Oe),t}function gd(t,e,a){var n=e.pendingProps,i=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(Gt.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(yt){if(i?Sa(e):Ea(),yt){var d=jt,y;if(y=d){t:{for(y=d,d=ke;y.nodeType!==8;){if(!d){d=null;break t}if(y=He(y.nextSibling),y===null){d=null;break t}}d=y}d!==null?(e.memoizedState={dehydrated:d,treeContext:Za!==null?{id:Fe,overflow:Pe}:null,retryLane:536870912,hydrationErrors:null},y=me(18,null,null,0),y.stateNode=d,y.return=e,e.child=y,le=e,jt=null,y=!0):y=!1}y||Ka(e)}if(d=e.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return nc(d)?e.lanes=32:e.lanes=536870912,null;aa(e)}return d=n.children,n=n.fallback,i?(Ea(),i=e.mode,d=uo({mode:"hidden",children:d},i),n=Xa(n,i,a,null),d.return=e,n.return=e,d.sibling=n,e.child=d,i=e.child,i.memoizedState=xr(a),i.childLanes=Sr(t,s,a),e.memoizedState=vr,n):(Sa(e),Er(e,d))}if(y=t.memoizedState,y!==null&&(d=y.dehydrated,d!==null)){if(o)e.flags&256?(Sa(e),e.flags&=-257,e=Tr(t,e,a)):e.memoizedState!==null?(Ea(),e.child=t.child,e.flags|=128,e=null):(Ea(),i=n.fallback,d=e.mode,n=uo({mode:"visible",children:n.children},d),i=Xa(i,d,a,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,$l(e,t.child,null,a),n=e.child,n.memoizedState=xr(a),n.childLanes=Sr(t,s,a),e.memoizedState=vr,e=i);else if(Sa(e),nc(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var z=s.dgst;s=z,n=Error(r(419)),n.stack="",n.digest=s,zn({value:n,source:null,stack:null}),e=Tr(t,e,a)}else if(Yt||Mn(t,e,a,!1),s=(a&t.childLanes)!==0,Yt||s){if(s=zt,s!==null&&(n=a&-a,n=(n&42)!==0?1:iu(n),n=(n&(s.suspendedLanes|a))!==0?0:n,n!==0&&n!==y.retryLane))throw y.retryLane=n,El(t,n),xe(s,t,n),id;d.data==="$?"||Gr(),e=Tr(t,e,a)}else d.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=y.treeContext,jt=He(d.nextSibling),le=e,yt=!0,Va=null,ke=!1,t!==null&&(we[Ae++]=Fe,we[Ae++]=Pe,we[Ae++]=Za,Fe=t.id,Pe=t.overflow,Za=e),e=Er(e,n.children),e.flags|=4096);return e}return i?(Ea(),i=n.fallback,d=e.mode,y=t.child,z=y.sibling,n=We(y,{mode:"hidden",children:n.children}),n.subtreeFlags=y.subtreeFlags&65011712,z!==null?i=We(z,i):(i=Xa(i,d,a,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,n=i,i=e.child,d=t.child.memoizedState,d===null?d=xr(a):(y=d.cachePool,y!==null?(z=qt._currentValue,y=y.parent!==z?{parent:z,pool:z}:y):y=Is(),d={baseLanes:d.baseLanes|a,cachePool:y}),i.memoizedState=d,i.childLanes=Sr(t,s,a),e.memoizedState=vr,n):(Sa(e),a=t.child,t=a.sibling,a=We(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=a,e.memoizedState=null,a)}function Er(t,e){return e=uo({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function uo(t,e){return t=me(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Tr(t,e,a){return $l(e,t.child,null,a),t=Er(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function md(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Gu(t.return,e,a)}function _r(t,e,a,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i)}function pd(t,e,a){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(Wt(t,e,n.children,a),n=Gt.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&md(t,a,e);else if(t.tag===19)md(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(B(Gt,n),i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&lo(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),_r(e,!1,i,a,o);break;case"backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&lo(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}_r(e,!0,a,null,o);break;case"together":_r(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function la(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),wa|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Mn(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,a=We(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=We(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function zr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Gi(t)))}function Am(t,e,a){switch(e.tag){case 3:mt(e,e.stateNode.containerInfo),pa(e,qt,t.memoizedState.cache),_n();break;case 27:case 5:Jt(e);break;case 4:mt(e,e.stateNode.containerInfo);break;case 10:pa(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Sa(e),e.flags|=128,null):(a&e.child.childLanes)!==0?gd(t,e,a):(Sa(e),t=la(t,e,a),t!==null?t.sibling:null);Sa(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(Mn(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return pd(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Gt,Gt.current),n)break;return null;case 22:case 23:return e.lanes=0,cd(t,e,a);case 24:pa(e,qt,t.memoizedState.cache)}return la(t,e,a)}function yd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Yt=!0;else{if(!zr(t,a)&&(e.flags&128)===0)return Yt=!1,Am(t,e,a);Yt=(t.flags&131072)!==0}else Yt=!1,yt&&(e.flags&1048576)!==0&&Qs(e,qi,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,i=n._init;if(n=i(n._payload),e.type=n,typeof n=="function")Cu(n)?(t=Ia(n,t),e.tag=1,e=dd(null,e,n,t,a)):(e.tag=0,e=br(null,e,n,t,a));else{if(n!=null){if(i=n.$$typeof,i===F){e.tag=11,e=od(null,e,n,t,a);break t}else if(i===k){e.tag=14,e=ud(null,e,n,t,a);break t}}throw e=Ce(n)||n,Error(r(306,e,""))}}return e;case 0:return br(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=Ia(n,e.pendingProps),dd(t,e,n,i,a);case 3:t:{if(mt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));n=e.pendingProps;var o=e.memoizedState;i=o.element,Ku(t,e),$n(e,n,null,a);var s=e.memoizedState;if(n=s.cache,pa(e,qt,n),n!==o.cache&&ku(e,[qt],a,!0),Dn(),n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=hd(t,e,n,a);break t}else if(n!==i){i=ze(Error(r(424)),e),zn(i),e=hd(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(jt=He(t.firstChild),le=e,yt=!0,Va=null,ke=!0,a=Jf(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_n(),n===i){e=la(t,e,a);break t}Wt(t,e,n,a)}e=e.child}return e;case 26:return oo(t,e),t===null?(a=Sh(e.type,null,e.pendingProps,null))?e.memoizedState=a:yt||(a=e.type,t=e.pendingProps,n=Eo(P.current).createElement(a),n[It]=e,n[ie]=t,Pt(n,a,t),kt(n),e.stateNode=n):e.memoizedState=Sh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Jt(e),t===null&&yt&&(n=e.stateNode=bh(e.type,e.pendingProps,P.current),le=e,ke=!0,i=jt,Ra(e.type)?(ic=i,jt=He(n.firstChild)):jt=i),Wt(t,e,e.pendingProps.children,a),oo(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&yt&&((i=n=jt)&&(n=ap(n,e.type,e.pendingProps,ke),n!==null?(e.stateNode=n,le=e,jt=He(n.firstChild),ke=!1,i=!0):i=!1),i||Ka(e)),Jt(e),i=e.type,o=e.pendingProps,s=t!==null?t.memoizedProps:null,n=o.children,ec(i,o)?n=null:s!==null&&ec(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=tr(t,e,xm,null,null,a),ei._currentValue=i),oo(t,e),Wt(t,e,n,a),e.child;case 6:return t===null&&yt&&((t=a=jt)&&(a=lp(a,e.pendingProps,ke),a!==null?(e.stateNode=a,le=e,jt=null,t=!0):t=!1),t||Ka(e)),null;case 13:return gd(t,e,a);case 4:return mt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=$l(e,null,n,a):Wt(t,e,n,a),e.child;case 11:return od(t,e,e.type,e.pendingProps,a);case 7:return Wt(t,e,e.pendingProps,a),e.child;case 8:return Wt(t,e,e.pendingProps.children,a),e.child;case 12:return Wt(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,pa(e,e.type,n.value),Wt(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,Wa(e),i=te(i),n=n(i),e.flags|=1,Wt(t,e,n,a),e.child;case 14:return ud(t,e,e.type,e.pendingProps,a);case 15:return rd(t,e,e.type,e.pendingProps,a);case 19:return pd(t,e,a);case 31:return n=e.pendingProps,a=e.mode,n={mode:n.mode,children:n.children},t===null?(a=uo(n,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=We(t.child,n),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return cd(t,e,a);case 24:return Wa(e),n=te(qt),t===null?(i=Zu(),i===null&&(i=zt,o=Yu(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=a),i=o),e.memoizedState={parent:n,cache:i},Vu(e),pa(e,qt,i)):((t.lanes&a)!==0&&(Ku(t,e),$n(e,null,null,a),Dn()),i=t.memoizedState,o=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),pa(e,qt,n)):(n=o.cache,pa(e,qt,n),n!==i.cache&&ku(e,[qt],a,!0))),Wt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function na(t){t.flags|=4}function bd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Mh(e)){if(e=je.current,e!==null&&((gt&4194048)===gt?Ye!==null:(gt&62914560)!==gt&&(gt&536870912)===0||e!==Ye))throw On=Qu,tf;t.flags|=8192}}function ro(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Jc():536870912,t.lanes|=e,Hl|=e)}function qn(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function jm(t,e,a){var n=e.pendingProps;switch(Lu(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return At(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ta(qt),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Tn(e)?na(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Js())),At(e),null;case 26:return a=e.memoizedState,t===null?(na(e),a!==null?(At(e),bd(e,a)):(At(e),e.flags&=-16777217)):a?a!==t.memoizedState?(na(e),At(e),bd(e,a)):(At(e),e.flags&=-16777217):(t.memoizedProps!==n&&na(e),At(e),e.flags&=-16777217),null;case 27:ne(e),a=P.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&na(e);else{if(!n){if(e.stateNode===null)throw Error(r(166));return At(e),null}t=J.current,Tn(e)?Vs(e):(t=bh(i,n,a),e.stateNode=t,na(e))}return At(e),null;case 5:if(ne(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&na(e);else{if(!n){if(e.stateNode===null)throw Error(r(166));return At(e),null}if(t=J.current,Tn(e))Vs(e);else{switch(i=Eo(P.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}t[It]=e,t[ie]=n;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(Pt(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&na(e)}}return At(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&na(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(r(166));if(t=P.current,Tn(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=le,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[It]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||fh(t.nodeValue,a)),t||Ka(e)}else t=Eo(t).createTextNode(n),t[It]=e,e.stateNode=t}return At(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Tn(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(r(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));i[It]=e}else _n(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;At(e),i=!1}else i=Js(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(aa(e),e):(aa(e),null)}if(aa(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),ro(e,e.updateQueue),At(e),null;case 4:return Bt(),t===null&&Wr(e.stateNode.containerInfo),At(e),null;case 10:return ta(e.type),At(e),null;case 19:if(L(Gt),i=e.memoizedState,i===null)return At(e),null;if(n=(e.flags&128)!==0,o=i.rendering,o===null)if(n)qn(i,!1);else{if(Ot!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=lo(t),o!==null){for(e.flags|=128,qn(i,!1),t=o.updateQueue,e.updateQueue=t,ro(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Zs(a,t),a=a.sibling;return B(Gt,Gt.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ge()>fo&&(e.flags|=128,n=!0,qn(i,!1),e.lanes=4194304)}else{if(!n)if(t=lo(o),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,ro(e,t),qn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!yt)return At(e),null}else 2*Ge()-i.renderingStartTime>fo&&a!==536870912&&(e.flags|=128,n=!0,qn(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(t=i.last,t!==null?t.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ge(),e.sibling=null,t=Gt.current,B(Gt,n?t&1|2:t&1),e):(At(e),null);case 22:case 23:return aa(e),Pu(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),a=e.updateQueue,a!==null&&ro(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&L(Fa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ta(qt),At(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function Om(t,e){switch(Lu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ta(qt),Bt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ne(e),null;case 13:if(aa(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));_n()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return L(Gt),null;case 4:return Bt(),null;case 10:return ta(e.type),null;case 22:case 23:return aa(e),Pu(),t!==null&&L(Fa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ta(qt),null;case 25:return null;default:return null}}function vd(t,e){switch(Lu(e),e.tag){case 3:ta(qt),Bt();break;case 26:case 27:case 5:ne(e);break;case 4:Bt();break;case 13:aa(e);break;case 19:L(Gt);break;case 10:ta(e.type);break;case 22:case 23:aa(e),Pu(),t!==null&&L(Fa);break;case 24:ta(qt)}}function Gn(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var o=a.create,s=a.inst;n=o(),s.destroy=n}a=a.next}while(a!==i)}}catch(d){_t(e,e.return,d)}}function Ta(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&t)===t){var s=n.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,i=e;var y=a,z=d;try{z()}catch(j){_t(i,y,j)}}}n=n.next}while(n!==o)}}catch(j){_t(e,e.return,j)}}function xd(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{uf(e,a)}catch(n){_t(t,t.return,n)}}}function Sd(t,e,a){a.props=Ia(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){_t(t,e,n)}}function kn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){_t(t,e,i)}}function Xe(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){_t(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){_t(t,e,i)}else a.current=null}function Ed(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){_t(t,t.return,i)}}function Mr(t,e,a){try{var n=t.stateNode;Fm(n,t.type,a,e),n[ie]=e}catch(i){_t(t,t.return,i)}}function Td(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ra(t.type)||t.tag===4}function wr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Td(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ar(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=So));else if(n!==4&&(n===27&&Ra(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Ar(t,e,a),t=t.sibling;t!==null;)Ar(t,e,a),t=t.sibling}function co(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&Ra(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(co(t,e,a),t=t.sibling;t!==null;)co(t,e,a),t=t.sibling}function _d(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Pt(e,n,a),e[It]=t,e[ie]=a}catch(o){_t(t,t.return,o)}}var ia=!1,$t=!1,jr=!1,zd=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function Rm(t,e){if(t=t.containerInfo,Ir=Ao,t=Ns(t),wu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break t}var s=0,d=-1,y=-1,z=0,j=0,N=t,M=null;e:for(;;){for(var w;N!==a||i!==0&&N.nodeType!==3||(d=s+i),N!==o||n!==0&&N.nodeType!==3||(y=s+n),N.nodeType===3&&(s+=N.nodeValue.length),(w=N.firstChild)!==null;)M=N,N=w;for(;;){if(N===t)break e;if(M===a&&++z===i&&(d=s),M===o&&++j===n&&(y=s),(w=N.nextSibling)!==null)break;N=M,M=N.parentNode}N=w}a=d===-1||y===-1?null:{start:d,end:y}}else a=null}a=a||{start:0,end:0}}else a=null;for(tc={focusedElem:t,selectionRange:a},Ao=!1,Xt=e;Xt!==null;)if(e=Xt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Xt=t;else for(;Xt!==null;){switch(e=Xt,o=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&o!==null){t=void 0,a=e,i=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var lt=Ia(a.type,i,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(lt,o),n.__reactInternalSnapshotBeforeUpdate=t}catch(tt){_t(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)lc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":lc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,Xt=t;break}Xt=e.return}}function Md(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:_a(t,a),n&4&&Gn(5,a);break;case 1:if(_a(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(s){_t(a,a.return,s)}else{var i=Ia(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){_t(a,a.return,s)}}n&64&&xd(a),n&512&&kn(a,a.return);break;case 3:if(_a(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{uf(t,e)}catch(s){_t(a,a.return,s)}}break;case 27:e===null&&n&4&&_d(a);case 26:case 5:_a(t,a),e===null&&n&4&&Ed(a),n&512&&kn(a,a.return);break;case 12:_a(t,a);break;case 13:_a(t,a),n&4&&jd(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=qm.bind(null,a),np(t,a))));break;case 22:if(n=a.memoizedState!==null||ia,!n){e=e!==null&&e.memoizedState!==null||$t,i=ia;var o=$t;ia=n,($t=e)&&!o?za(t,a,(a.subtreeFlags&8772)!==0):_a(t,a),ia=i,$t=o}break;case 30:break;default:_a(t,a)}}function wd(t){var e=t.alternate;e!==null&&(t.alternate=null,wd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ru(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var wt=null,re=!1;function oa(t,e,a){for(a=a.child;a!==null;)Ad(t,e,a),a=a.sibling}function Ad(t,e,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(cn,a)}catch{}switch(a.tag){case 26:$t||Xe(a,e),oa(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$t||Xe(a,e);var n=wt,i=re;Ra(a.type)&&(wt=a.stateNode,re=!1),oa(t,e,a),Fn(a.stateNode),wt=n,re=i;break;case 5:$t||Xe(a,e);case 6:if(n=wt,i=re,wt=null,oa(t,e,a),wt=n,re=i,wt!==null)if(re)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(a.stateNode)}catch(o){_t(a,e,o)}else try{wt.removeChild(a.stateNode)}catch(o){_t(a,e,o)}break;case 18:wt!==null&&(re?(t=wt,ph(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ii(t)):ph(wt,a.stateNode));break;case 4:n=wt,i=re,wt=a.stateNode.containerInfo,re=!0,oa(t,e,a),wt=n,re=i;break;case 0:case 11:case 14:case 15:$t||Ta(2,a,e),$t||Ta(4,a,e),oa(t,e,a);break;case 1:$t||(Xe(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Sd(a,e,n)),oa(t,e,a);break;case 21:oa(t,e,a);break;case 22:$t=(n=$t)||a.memoizedState!==null,oa(t,e,a),$t=n;break;default:oa(t,e,a)}}function jd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ii(t)}catch(a){_t(e,e.return,a)}}function Dm(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new zd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new zd),e;default:throw Error(r(435,t.tag))}}function Or(t,e){var a=Dm(t);e.forEach(function(n){var i=Gm.bind(null,t,n);a.has(n)||(a.add(n),n.then(i,i))})}function pe(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],o=t,s=e,d=s;t:for(;d!==null;){switch(d.tag){case 27:if(Ra(d.type)){wt=d.stateNode,re=!1;break t}break;case 5:wt=d.stateNode,re=!1;break t;case 3:case 4:wt=d.stateNode.containerInfo,re=!0;break t}d=d.return}if(wt===null)throw Error(r(160));Ad(o,s,i),wt=null,re=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Od(e,t),e=e.sibling}var Ue=null;function Od(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pe(e,t),ye(t),n&4&&(Ta(3,t,t.return),Gn(3,t),Ta(5,t,t.return));break;case 1:pe(e,t),ye(t),n&512&&($t||a===null||Xe(a,a.return)),n&64&&ia&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Ue;if(pe(e,t),ye(t),n&512&&($t||a===null||Xe(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(n){case"title":o=i.getElementsByTagName("title")[0],(!o||o[dn]||o[It]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(n),i.head.insertBefore(o,i.querySelector("head > title"))),Pt(o,n,a),o[It]=t,kt(o),n=o;break t;case"link":var s=_h("link","href",i).get(n+(a.href||""));if(s){for(var d=0;d<s.length;d++)if(o=s[d],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(d,1);break e}}o=i.createElement(n),Pt(o,n,a),i.head.appendChild(o);break;case"meta":if(s=_h("meta","content",i).get(n+(a.content||""))){for(d=0;d<s.length;d++)if(o=s[d],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(d,1);break e}}o=i.createElement(n),Pt(o,n,a),i.head.appendChild(o);break;default:throw Error(r(468,n))}o[It]=t,kt(o),n=o}t.stateNode=n}else zh(i,t.type,t.stateNode);else t.stateNode=Th(i,n,t.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?zh(i,t.type,t.stateNode):Th(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Mr(t,t.memoizedProps,a.memoizedProps)}break;case 27:pe(e,t),ye(t),n&512&&($t||a===null||Xe(a,a.return)),a!==null&&n&4&&Mr(t,t.memoizedProps,a.memoizedProps);break;case 5:if(pe(e,t),ye(t),n&512&&($t||a===null||Xe(a,a.return)),t.flags&32){i=t.stateNode;try{ml(i,"")}catch(w){_t(t,t.return,w)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,Mr(t,i,a!==null?a.memoizedProps:i)),n&1024&&(jr=!0);break;case 6:if(pe(e,t),ye(t),n&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(w){_t(t,t.return,w)}}break;case 3:if(zo=null,i=Ue,Ue=To(e.containerInfo),pe(e,t),Ue=i,ye(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{ii(e.containerInfo)}catch(w){_t(t,t.return,w)}jr&&(jr=!1,Rd(t));break;case 4:n=Ue,Ue=To(t.stateNode.containerInfo),pe(e,t),ye(t),Ue=n;break;case 12:pe(e,t),ye(t);break;case 13:pe(e,t),ye(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ur=Ge()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Or(t,n)));break;case 22:i=t.memoizedState!==null;var y=a!==null&&a.memoizedState!==null,z=ia,j=$t;if(ia=z||i,$t=j||y,pe(e,t),$t=j,ia=z,ye(t),n&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||y||ia||$t||tl(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){y=a=e;try{if(o=y.stateNode,i)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=y.stateNode;var N=y.memoizedProps.style,M=N!=null&&N.hasOwnProperty("display")?N.display:null;d.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(w){_t(y,y.return,w)}}}else if(e.tag===6){if(a===null){y=e;try{y.stateNode.nodeValue=i?"":y.memoizedProps}catch(w){_t(y,y.return,w)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Or(t,a))));break;case 19:pe(e,t),ye(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Or(t,n)));break;case 30:break;case 21:break;default:pe(e,t),ye(t)}}function ye(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(Td(n)){a=n;break}n=n.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var i=a.stateNode,o=wr(t);co(t,o,i);break;case 5:var s=a.stateNode;a.flags&32&&(ml(s,""),a.flags&=-33);var d=wr(t);co(t,d,s);break;case 3:case 4:var y=a.stateNode.containerInfo,z=wr(t);Ar(t,z,y);break;default:throw Error(r(161))}}catch(j){_t(t,t.return,j)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Rd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function _a(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Md(t,e.alternate,e),e=e.sibling}function tl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ta(4,e,e.return),tl(e);break;case 1:Xe(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Sd(e,e.return,a),tl(e);break;case 27:Fn(e.stateNode);case 26:case 5:Xe(e,e.return),tl(e);break;case 22:e.memoizedState===null&&tl(e);break;case 30:tl(e);break;default:tl(e)}t=t.sibling}}function za(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,o=e,s=o.flags;switch(o.tag){case 0:case 11:case 15:za(i,o,a),Gn(4,o);break;case 1:if(za(i,o,a),n=o,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){_t(n,n.return,z)}if(n=o,i=n.updateQueue,i!==null){var d=n.stateNode;try{var y=i.shared.hiddenCallbacks;if(y!==null)for(i.shared.hiddenCallbacks=null,i=0;i<y.length;i++)of(y[i],d)}catch(z){_t(n,n.return,z)}}a&&s&64&&xd(o),kn(o,o.return);break;case 27:_d(o);case 26:case 5:za(i,o,a),a&&n===null&&s&4&&Ed(o),kn(o,o.return);break;case 12:za(i,o,a);break;case 13:za(i,o,a),a&&s&4&&jd(i,o);break;case 22:o.memoizedState===null&&za(i,o,a),kn(o,o.return);break;case 30:break;default:za(i,o,a)}e=e.sibling}}function Rr(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&wn(a))}function Dr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&wn(t))}function Ze(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dd(t,e,a,n),e=e.sibling}function Dd(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Ze(t,e,a,n),i&2048&&Gn(9,e);break;case 1:Ze(t,e,a,n);break;case 3:Ze(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&wn(t)));break;case 12:if(i&2048){Ze(t,e,a,n),t=e.stateNode;try{var o=e.memoizedProps,s=o.id,d=o.onPostCommit;typeof d=="function"&&d(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(y){_t(e,e.return,y)}}else Ze(t,e,a,n);break;case 13:Ze(t,e,a,n);break;case 23:break;case 22:o=e.stateNode,s=e.alternate,e.memoizedState!==null?o._visibility&2?Ze(t,e,a,n):Yn(t,e):o._visibility&2?Ze(t,e,a,n):(o._visibility|=2,Cl(t,e,a,n,(e.subtreeFlags&10256)!==0)),i&2048&&Rr(s,e);break;case 24:Ze(t,e,a,n),i&2048&&Dr(e.alternate,e);break;default:Ze(t,e,a,n)}}function Cl(t,e,a,n,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var o=t,s=e,d=a,y=n,z=s.flags;switch(s.tag){case 0:case 11:case 15:Cl(o,s,d,y,i),Gn(8,s);break;case 23:break;case 22:var j=s.stateNode;s.memoizedState!==null?j._visibility&2?Cl(o,s,d,y,i):Yn(o,s):(j._visibility|=2,Cl(o,s,d,y,i)),i&&z&2048&&Rr(s.alternate,s);break;case 24:Cl(o,s,d,y,i),i&&z&2048&&Dr(s.alternate,s);break;default:Cl(o,s,d,y,i)}e=e.sibling}}function Yn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:Yn(a,n),i&2048&&Rr(n.alternate,n);break;case 24:Yn(a,n),i&2048&&Dr(n.alternate,n);break;default:Yn(a,n)}e=e.sibling}}var Xn=8192;function Nl(t){if(t.subtreeFlags&Xn)for(t=t.child;t!==null;)$d(t),t=t.sibling}function $d(t){switch(t.tag){case 26:Nl(t),t.flags&Xn&&t.memoizedState!==null&&yp(Ue,t.memoizedState,t.memoizedProps);break;case 5:Nl(t);break;case 3:case 4:var e=Ue;Ue=To(t.stateNode.containerInfo),Nl(t),Ue=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Xn,Xn=16777216,Nl(t),Xn=e):Nl(t));break;default:Nl(t)}}function Cd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Zn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Xt=n,Ud(n,t)}Cd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nd(t),t=t.sibling}function Nd(t){switch(t.tag){case 0:case 11:case 15:Zn(t),t.flags&2048&&Ta(9,t,t.return);break;case 3:Zn(t);break;case 12:Zn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,so(t)):Zn(t);break;default:Zn(t)}}function so(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Xt=n,Ud(n,t)}Cd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ta(8,e,e.return),so(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,so(e));break;default:so(e)}t=t.sibling}}function Ud(t,e){for(;Xt!==null;){var a=Xt;switch(a.tag){case 0:case 11:case 15:Ta(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:wn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Xt=n;else t:for(a=t;Xt!==null;){n=Xt;var i=n.sibling,o=n.return;if(wd(n),n===a){Xt=null;break t}if(i!==null){i.return=o,Xt=i;break t}Xt=o}}}var $m={getCacheForType:function(t){var e=te(qt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},Cm=typeof WeakMap=="function"?WeakMap:Map,vt=0,zt=null,ft=null,gt=0,xt=0,be=null,Ma=!1,Ul=!1,$r=!1,ua=0,Ot=0,wa=0,el=0,Cr=0,Oe=0,Hl=0,Qn=null,ce=null,Nr=!1,Ur=0,fo=1/0,ho=null,Aa=null,Ft=0,ja=null,Ll=null,Bl=0,Hr=0,Lr=null,Hd=null,Vn=0,Br=null;function ve(){if((vt&2)!==0&&gt!==0)return gt&-gt;if(A.T!==null){var t=Ml;return t!==0?t:Qr()}return Pc()}function Ld(){Oe===0&&(Oe=(gt&536870912)===0||yt?Kc():536870912);var t=je.current;return t!==null&&(t.flags|=32),Oe}function xe(t,e,a){(t===zt&&(xt===2||xt===9)||t.cancelPendingCommit!==null)&&(ql(t,0),Oa(t,gt,Oe,!1)),fn(t,a),((vt&2)===0||t!==zt)&&(t===zt&&((vt&2)===0&&(el|=a),Ot===4&&Oa(t,gt,Oe,!1)),Qe(t))}function Bd(t,e,a){if((vt&6)!==0)throw Error(r(327));var n=!a&&(e&124)===0&&(e&t.expiredLanes)===0||sn(t,e),i=n?Hm(t,e):kr(t,e,!0),o=n;do{if(i===0){Ul&&!n&&Oa(t,e,0,!1);break}else{if(a=t.current.alternate,o&&!Nm(a)){i=kr(t,e,!1),o=!1;continue}if(i===2){if(o=e,t.errorRecoveryDisabledLanes&o)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var d=t;i=Qn;var y=d.current.memoizedState.isDehydrated;if(y&&(ql(d,s).flags|=256),s=kr(d,s,!1),s!==2){if($r&&!y){d.errorRecoveryDisabledLanes|=o,el|=o,i=4;break t}o=ce,ce=i,o!==null&&(ce===null?ce=o:ce.push.apply(ce,o))}i=s}if(o=!1,i!==2)continue}}if(i===1){ql(t,0),Oa(t,e,0,!0);break}t:{switch(n=t,o=i,o){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Oa(n,e,Oe,!Ma);break t;case 2:ce=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(i=Ur+300-Ge(),10<i)){if(Oa(n,e,Oe,!Ma),Ti(n,0,!0)!==0)break t;n.timeoutHandle=gh(qd.bind(null,n,a,ce,ho,Nr,e,Oe,el,Hl,Ma,o,2,-0,0),i);break t}qd(n,a,ce,ho,Nr,e,Oe,el,Hl,Ma,o,0,-0,0)}}break}while(!0);Qe(t)}function qd(t,e,a,n,i,o,s,d,y,z,j,N,M,w){if(t.timeoutHandle=-1,N=e.subtreeFlags,(N&8192||(N&16785408)===16785408)&&(ti={stylesheets:null,count:0,unsuspend:pp},$d(e),N=bp(),N!==null)){t.cancelPendingCommit=N(Vd.bind(null,t,e,o,a,n,i,s,d,y,j,1,M,w)),Oa(t,o,s,!z);return}Vd(t,e,o,a,n,i,s,d,y)}function Nm(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],o=i.getSnapshot;i=i.value;try{if(!ge(o(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oa(t,e,a,n){e&=~Cr,e&=~el,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var o=31-he(i),s=1<<o;n[o]=-1,i&=~s}a!==0&&Wc(t,a,e)}function go(){return(vt&6)===0?(Kn(0),!1):!0}function qr(){if(ft!==null){if(xt===0)var t=ft.return;else t=ft,Ie=Ja=null,lr(t),Dl=null,Ln=0,t=ft;for(;t!==null;)vd(t.alternate,t),t=t.return;ft=null}}function ql(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Im(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),qr(),zt=t,ft=a=We(t.current,null),gt=e,xt=0,be=null,Ma=!1,Ul=sn(t,e),$r=!1,Hl=Oe=Cr=el=wa=Ot=0,ce=Qn=null,Nr=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-he(n),o=1<<i;e|=t[i],n&=~o}return ua=e,Ni(),a}function Gd(t,e){ct=null,A.H=to,e===jn||e===Xi?(e=lf(),xt=3):e===tf?(e=lf(),xt=4):xt=e===id?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,be=e,ft===null&&(Ot=1,io(t,ze(e,t.current)))}function kd(){var t=A.H;return A.H=to,t===null?to:t}function Yd(){var t=A.A;return A.A=$m,t}function Gr(){Ot=4,Ma||(gt&4194048)!==gt&&je.current!==null||(Ul=!0),(wa&134217727)===0&&(el&134217727)===0||zt===null||Oa(zt,gt,Oe,!1)}function kr(t,e,a){var n=vt;vt|=2;var i=kd(),o=Yd();(zt!==t||gt!==e)&&(ho=null,ql(t,e)),e=!1;var s=Ot;t:do try{if(xt!==0&&ft!==null){var d=ft,y=be;switch(xt){case 8:qr(),s=6;break t;case 3:case 2:case 9:case 6:je.current===null&&(e=!0);var z=xt;if(xt=0,be=null,Gl(t,d,y,z),a&&Ul){s=0;break t}break;default:z=xt,xt=0,be=null,Gl(t,d,y,z)}}Um(),s=Ot;break}catch(j){Gd(t,j)}while(!0);return e&&t.shellSuspendCounter++,Ie=Ja=null,vt=n,A.H=i,A.A=o,ft===null&&(zt=null,gt=0,Ni()),s}function Um(){for(;ft!==null;)Xd(ft)}function Hm(t,e){var a=vt;vt|=2;var n=kd(),i=Yd();zt!==t||gt!==e?(ho=null,fo=Ge()+500,ql(t,e)):Ul=sn(t,e);t:do try{if(xt!==0&&ft!==null){e=ft;var o=be;e:switch(xt){case 1:xt=0,be=null,Gl(t,e,o,1);break;case 2:case 9:if(ef(o)){xt=0,be=null,Zd(e);break}e=function(){xt!==2&&xt!==9||zt!==t||(xt=7),Qe(t)},o.then(e,e);break t;case 3:xt=7;break t;case 4:xt=5;break t;case 7:ef(o)?(xt=0,be=null,Zd(e)):(xt=0,be=null,Gl(t,e,o,7));break;case 5:var s=null;switch(ft.tag){case 26:s=ft.memoizedState;case 5:case 27:var d=ft;if(!s||Mh(s)){xt=0,be=null;var y=d.sibling;if(y!==null)ft=y;else{var z=d.return;z!==null?(ft=z,mo(z)):ft=null}break e}}xt=0,be=null,Gl(t,e,o,5);break;case 6:xt=0,be=null,Gl(t,e,o,6);break;case 8:qr(),Ot=6;break t;default:throw Error(r(462))}}Lm();break}catch(j){Gd(t,j)}while(!0);return Ie=Ja=null,A.H=n,A.A=i,vt=a,ft!==null?0:(zt=null,gt=0,Ni(),Ot)}function Lm(){for(;ft!==null&&!o0();)Xd(ft)}function Xd(t){var e=yd(t.alternate,t,ua);t.memoizedProps=t.pendingProps,e===null?mo(t):ft=e}function Zd(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=fd(a,e,e.pendingProps,e.type,void 0,gt);break;case 11:e=fd(a,e,e.pendingProps,e.type.render,e.ref,gt);break;case 5:lr(e);default:vd(a,e),e=ft=Zs(e,ua),e=yd(a,e,ua)}t.memoizedProps=t.pendingProps,e===null?mo(t):ft=e}function Gl(t,e,a,n){Ie=Ja=null,lr(e),Dl=null,Ln=0;var i=e.return;try{if(wm(t,i,e,a,gt)){Ot=1,io(t,ze(a,t.current)),ft=null;return}}catch(o){if(i!==null)throw ft=i,o;Ot=1,io(t,ze(a,t.current)),ft=null;return}e.flags&32768?(yt||n===1?t=!0:Ul||(gt&536870912)!==0?t=!1:(Ma=t=!0,(n===2||n===9||n===3||n===6)&&(n=je.current,n!==null&&n.tag===13&&(n.flags|=16384))),Qd(e,t)):mo(e)}function mo(t){var e=t;do{if((e.flags&32768)!==0){Qd(e,Ma);return}t=e.return;var a=jm(e.alternate,e,ua);if(a!==null){ft=a;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);Ot===0&&(Ot=5)}function Qd(t,e){do{var a=Om(t.alternate,t);if(a!==null){a.flags&=32767,ft=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ft=t;return}ft=t=a}while(t!==null);Ot=6,ft=null}function Vd(t,e,a,n,i,o,s,d,y){t.cancelPendingCommit=null;do po();while(Ft!==0);if((vt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(o=e.lanes|e.childLanes,o|=Du,p0(t,a,o,s,d,y),t===zt&&(ft=zt=null,gt=0),Ll=e,ja=t,Bl=a,Hr=o,Lr=i,Hd=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,km(xi,function(){return Pd(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=A.T,A.T=null,i=C.p,C.p=2,s=vt,vt|=4;try{Rm(t,e,a)}finally{vt=s,C.p=i,A.T=n}}Ft=1,Kd(),Jd(),Wd()}}function Kd(){if(Ft===1){Ft=0;var t=ja,e=Ll,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var n=C.p;C.p=2;var i=vt;vt|=4;try{Od(e,t);var o=tc,s=Ns(t.containerInfo),d=o.focusedElem,y=o.selectionRange;if(s!==d&&d&&d.ownerDocument&&Cs(d.ownerDocument.documentElement,d)){if(y!==null&&wu(d)){var z=y.start,j=y.end;if(j===void 0&&(j=z),"selectionStart"in d)d.selectionStart=z,d.selectionEnd=Math.min(j,d.value.length);else{var N=d.ownerDocument||document,M=N&&N.defaultView||window;if(M.getSelection){var w=M.getSelection(),lt=d.textContent.length,tt=Math.min(y.start,lt),Tt=y.end===void 0?tt:Math.min(y.end,lt);!w.extend&&tt>Tt&&(s=Tt,Tt=tt,tt=s);var T=$s(d,tt),x=$s(d,Tt);if(T&&x&&(w.rangeCount!==1||w.anchorNode!==T.node||w.anchorOffset!==T.offset||w.focusNode!==x.node||w.focusOffset!==x.offset)){var _=N.createRange();_.setStart(T.node,T.offset),w.removeAllRanges(),tt>Tt?(w.addRange(_),w.extend(x.node,x.offset)):(_.setEnd(x.node,x.offset),w.addRange(_))}}}}for(N=[],w=d;w=w.parentNode;)w.nodeType===1&&N.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<N.length;d++){var R=N[d];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}Ao=!!Ir,tc=Ir=null}finally{vt=i,C.p=n,A.T=a}}t.current=e,Ft=2}}function Jd(){if(Ft===2){Ft=0;var t=ja,e=Ll,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var n=C.p;C.p=2;var i=vt;vt|=4;try{Md(t,e.alternate,e)}finally{vt=i,C.p=n,A.T=a}}Ft=3}}function Wd(){if(Ft===4||Ft===3){Ft=0,u0();var t=ja,e=Ll,a=Bl,n=Hd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ft=5:(Ft=0,Ll=ja=null,Fd(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Aa=null),ou(a),e=e.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(cn,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=A.T,i=C.p,C.p=2,A.T=null;try{for(var o=t.onRecoverableError,s=0;s<n.length;s++){var d=n[s];o(d.value,{componentStack:d.stack})}}finally{A.T=e,C.p=i}}(Bl&3)!==0&&po(),Qe(t),i=t.pendingLanes,(a&4194090)!==0&&(i&42)!==0?t===Br?Vn++:(Vn=0,Br=t):Vn=0,Kn(0)}}function Fd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,wn(e)))}function po(t){return Kd(),Jd(),Wd(),Pd()}function Pd(){if(Ft!==5)return!1;var t=ja,e=Hr;Hr=0;var a=ou(Bl),n=A.T,i=C.p;try{C.p=32>a?32:a,A.T=null,a=Lr,Lr=null;var o=ja,s=Bl;if(Ft=0,Ll=ja=null,Bl=0,(vt&6)!==0)throw Error(r(331));var d=vt;if(vt|=4,Nd(o.current),Dd(o,o.current,s,a),vt=d,Kn(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(cn,o)}catch{}return!0}finally{C.p=i,A.T=n,Fd(t,e)}}function Id(t,e,a){e=ze(a,e),e=yr(t.stateNode,e,2),t=va(t,e,2),t!==null&&(fn(t,2),Qe(t))}function _t(t,e,a){if(t.tag===3)Id(t,t,a);else for(;e!==null;){if(e.tag===3){Id(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Aa===null||!Aa.has(n))){t=ze(a,t),a=ld(2),n=va(e,a,2),n!==null&&(nd(a,n,e,t),fn(n,2),Qe(n));break}}e=e.return}}function Yr(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new Cm;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||($r=!0,i.add(a),t=Bm.bind(null,t,e,a),e.then(t,t))}function Bm(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,zt===t&&(gt&a)===a&&(Ot===4||Ot===3&&(gt&62914560)===gt&&300>Ge()-Ur?(vt&2)===0&&ql(t,0):Cr|=a,Hl===gt&&(Hl=0)),Qe(t)}function th(t,e){e===0&&(e=Jc()),t=El(t,e),t!==null&&(fn(t,e),Qe(t))}function qm(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),th(t,a)}function Gm(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(r(314))}n!==null&&n.delete(e),th(t,a)}function km(t,e){return un(t,e)}var yo=null,kl=null,Xr=!1,bo=!1,Zr=!1,al=0;function Qe(t){t!==kl&&t.next===null&&(kl===null?yo=kl=t:kl=kl.next=t),bo=!0,Xr||(Xr=!0,Xm())}function Kn(t,e){if(!Zr&&bo){Zr=!0;do for(var a=!1,n=yo;n!==null;){if(t!==0){var i=n.pendingLanes;if(i===0)var o=0;else{var s=n.suspendedLanes,d=n.pingedLanes;o=(1<<31-he(42|t)+1)-1,o&=i&~(s&~d),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,nh(n,o))}else o=gt,o=Ti(n,n===zt?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||sn(n,o)||(a=!0,nh(n,o));n=n.next}while(a);Zr=!1}}function Ym(){eh()}function eh(){bo=Xr=!1;var t=0;al!==0&&(Pm()&&(t=al),al=0);for(var e=Ge(),a=null,n=yo;n!==null;){var i=n.next,o=ah(n,e);o===0?(n.next=null,a===null?yo=i:a.next=i,i===null&&(kl=a)):(a=n,(t!==0||(o&3)!==0)&&(bo=!0)),n=i}Kn(t)}function ah(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var s=31-he(o),d=1<<s,y=i[s];y===-1?((d&a)===0||(d&n)!==0)&&(i[s]=m0(d,e)):y<=e&&(t.expiredLanes|=d),o&=~d}if(e=zt,a=gt,a=Ti(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(xt===2||xt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&rn(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||sn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&rn(n),ou(a)){case 2:case 8:a=Qc;break;case 32:a=xi;break;case 268435456:a=Vc;break;default:a=xi}return n=lh.bind(null,t),a=un(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&rn(n),t.callbackPriority=2,t.callbackNode=null,2}function lh(t,e){if(Ft!==0&&Ft!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(po()&&t.callbackNode!==a)return null;var n=gt;return n=Ti(t,t===zt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Bd(t,n,e),ah(t,Ge()),t.callbackNode!=null&&t.callbackNode===a?lh.bind(null,t):null)}function nh(t,e){if(po())return null;Bd(t,e,!0)}function Xm(){tp(function(){(vt&6)!==0?un(Zc,Ym):eh()})}function Qr(){return al===0&&(al=Kc()),al}function ih(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ai(""+t)}function oh(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Zm(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var o=ih((i[ie]||null).action),s=n.submitter;s&&(e=(e=s[ie]||null)?ih(e.formAction):s.getAttribute("formAction"),e!==null&&(o=e,s=null));var d=new Di("action","action",null,n,i);t.push({event:d,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(al!==0){var y=s?oh(i,s):new FormData(i);dr(a,{pending:!0,data:y,method:i.method,action:o},null,y)}}else typeof o=="function"&&(d.preventDefault(),y=s?oh(i,s):new FormData(i),dr(a,{pending:!0,data:y,method:i.method,action:o},o,y))},currentTarget:i}]})}}for(var Vr=0;Vr<Ru.length;Vr++){var Kr=Ru[Vr],Qm=Kr.toLowerCase(),Vm=Kr[0].toUpperCase()+Kr.slice(1);Ne(Qm,"on"+Vm)}Ne(Ls,"onAnimationEnd"),Ne(Bs,"onAnimationIteration"),Ne(qs,"onAnimationStart"),Ne("dblclick","onDoubleClick"),Ne("focusin","onFocus"),Ne("focusout","onBlur"),Ne(sm,"onTransitionRun"),Ne(fm,"onTransitionStart"),Ne(dm,"onTransitionCancel"),Ne(Gs,"onTransitionEnd"),dl("onMouseEnter",["mouseout","mouseover"]),dl("onMouseLeave",["mouseout","mouseover"]),dl("onPointerEnter",["pointerout","pointerover"]),dl("onPointerLeave",["pointerout","pointerover"]),qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qa("onBeforeInput",["compositionend","keypress","textInput","paste"]),qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Km=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jn));function uh(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;t:{var o=void 0;if(e)for(var s=n.length-1;0<=s;s--){var d=n[s],y=d.instance,z=d.currentTarget;if(d=d.listener,y!==o&&i.isPropagationStopped())break t;o=d,i.currentTarget=z;try{o(i)}catch(j){no(j)}i.currentTarget=null,o=y}else for(s=0;s<n.length;s++){if(d=n[s],y=d.instance,z=d.currentTarget,d=d.listener,y!==o&&i.isPropagationStopped())break t;o=d,i.currentTarget=z;try{o(i)}catch(j){no(j)}i.currentTarget=null,o=y}}}}function dt(t,e){var a=e[uu];a===void 0&&(a=e[uu]=new Set);var n=t+"__bubble";a.has(n)||(rh(e,t,2,!1),a.add(n))}function Jr(t,e,a){var n=0;e&&(n|=4),rh(a,t,n,e)}var vo="_reactListening"+Math.random().toString(36).slice(2);function Wr(t){if(!t[vo]){t[vo]=!0,ts.forEach(function(a){a!=="selectionchange"&&(Km.has(a)||Jr(a,!1,t),Jr(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vo]||(e[vo]=!0,Jr("selectionchange",!1,e))}}function rh(t,e,a,n){switch(Dh(e)){case 2:var i=Sp;break;case 8:i=Ep;break;default:i=sc}a=i.bind(null,e,a,t),i=void 0,!bu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Fr(t,e,a,n,i){var o=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var d=n.stateNode.containerInfo;if(d===i)break;if(s===4)for(s=n.return;s!==null;){var y=s.tag;if((y===3||y===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;d!==null;){if(s=cl(d),s===null)return;if(y=s.tag,y===5||y===6||y===26||y===27){n=o=s;continue t}d=d.parentNode}}n=n.return}gs(function(){var z=o,j=pu(a),N=[];t:{var M=ks.get(t);if(M!==void 0){var w=Di,lt=t;switch(t){case"keypress":if(Oi(a)===0)break t;case"keydown":case"keyup":w=k0;break;case"focusin":lt="focus",w=Eu;break;case"focusout":lt="blur",w=Eu;break;case"beforeblur":case"afterblur":w=Eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=O0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Z0;break;case Ls:case Bs:case qs:w=$0;break;case Gs:w=V0;break;case"scroll":case"scrollend":w=A0;break;case"wheel":w=J0;break;case"copy":case"cut":case"paste":w=N0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=vs;break;case"toggle":case"beforetoggle":w=F0}var tt=(e&4)!==0,Tt=!tt&&(t==="scroll"||t==="scrollend"),T=tt?M!==null?M+"Capture":null:M;tt=[];for(var x=z,_;x!==null;){var R=x;if(_=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||_===null||T===null||(R=gn(x,T),R!=null&&tt.push(Wn(x,R,_))),Tt)break;x=x.return}0<tt.length&&(M=new w(M,lt,null,a,j),N.push({event:M,listeners:tt}))}}if((e&7)===0){t:{if(M=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",M&&a!==mu&&(lt=a.relatedTarget||a.fromElement)&&(cl(lt)||lt[rl]))break t;if((w||M)&&(M=j.window===j?j:(M=j.ownerDocument)?M.defaultView||M.parentWindow:window,w?(lt=a.relatedTarget||a.toElement,w=z,lt=lt?cl(lt):null,lt!==null&&(Tt=g(lt),tt=lt.tag,lt!==Tt||tt!==5&&tt!==27&&tt!==6)&&(lt=null)):(w=null,lt=z),w!==lt)){if(tt=ys,R="onMouseLeave",T="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(tt=vs,R="onPointerLeave",T="onPointerEnter",x="pointer"),Tt=w==null?M:hn(w),_=lt==null?M:hn(lt),M=new tt(R,x+"leave",w,a,j),M.target=Tt,M.relatedTarget=_,R=null,cl(j)===z&&(tt=new tt(T,x+"enter",lt,a,j),tt.target=_,tt.relatedTarget=Tt,R=tt),Tt=R,w&&lt)e:{for(tt=w,T=lt,x=0,_=tt;_;_=Yl(_))x++;for(_=0,R=T;R;R=Yl(R))_++;for(;0<x-_;)tt=Yl(tt),x--;for(;0<_-x;)T=Yl(T),_--;for(;x--;){if(tt===T||T!==null&&tt===T.alternate)break e;tt=Yl(tt),T=Yl(T)}tt=null}else tt=null;w!==null&&ch(N,M,w,tt,!1),lt!==null&&Tt!==null&&ch(N,Tt,lt,tt,!0)}}t:{if(M=z?hn(z):window,w=M.nodeName&&M.nodeName.toLowerCase(),w==="select"||w==="input"&&M.type==="file")var Q=ws;else if(zs(M))if(As)Q=um;else{Q=im;var st=nm}else w=M.nodeName,!w||w.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?z&&gu(z.elementType)&&(Q=ws):Q=om;if(Q&&(Q=Q(t,z))){Ms(N,Q,a,j);break t}st&&st(t,M,z),t==="focusout"&&z&&M.type==="number"&&z.memoizedProps.value!=null&&hu(M,"number",M.value)}switch(st=z?hn(z):window,t){case"focusin":(zs(st)||st.contentEditable==="true")&&(vl=st,Au=z,En=null);break;case"focusout":En=Au=vl=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,Us(N,a,j);break;case"selectionchange":if(cm)break;case"keydown":case"keyup":Us(N,a,j)}var W;if(_u)t:{switch(t){case"compositionstart":var et="onCompositionStart";break t;case"compositionend":et="onCompositionEnd";break t;case"compositionupdate":et="onCompositionUpdate";break t}et=void 0}else bl?Ts(t,a)&&(et="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(et="onCompositionStart");et&&(xs&&a.locale!=="ko"&&(bl||et!=="onCompositionStart"?et==="onCompositionEnd"&&bl&&(W=ms()):(ma=j,vu="value"in ma?ma.value:ma.textContent,bl=!0)),st=xo(z,et),0<st.length&&(et=new bs(et,t,null,a,j),N.push({event:et,listeners:st}),W?et.data=W:(W=_s(a),W!==null&&(et.data=W)))),(W=I0?tm(t,a):em(t,a))&&(et=xo(z,"onBeforeInput"),0<et.length&&(st=new bs("onBeforeInput","beforeinput",null,a,j),N.push({event:st,listeners:et}),st.data=W)),Zm(N,t,z,a,j)}uh(N,e)})}function Wn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function xo(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=gn(t,a),i!=null&&n.unshift(Wn(t,i,o)),i=gn(t,e),i!=null&&n.push(Wn(t,i,o))),t.tag===3)return n;t=t.return}return[]}function Yl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ch(t,e,a,n,i){for(var o=e._reactName,s=[];a!==null&&a!==n;){var d=a,y=d.alternate,z=d.stateNode;if(d=d.tag,y!==null&&y===n)break;d!==5&&d!==26&&d!==27||z===null||(y=z,i?(z=gn(a,o),z!=null&&s.unshift(Wn(a,z,y))):i||(z=gn(a,o),z!=null&&s.push(Wn(a,z,y)))),a=a.return}s.length!==0&&t.push({event:e,listeners:s})}var Jm=/\r\n?/g,Wm=/\u0000|\uFFFD/g;function sh(t){return(typeof t=="string"?t:""+t).replace(Jm,`
`).replace(Wm,"")}function fh(t,e){return e=sh(e),sh(t)===e}function So(){}function Et(t,e,a,n,i,o){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||ml(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&ml(t,""+n);break;case"className":zi(t,"class",n);break;case"tabIndex":zi(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":zi(t,a,n);break;case"style":ds(t,n,o);break;case"data":if(e!=="object"){zi(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Ai(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(e!=="input"&&Et(t,e,"name",i.name,i,null),Et(t,e,"formEncType",i.formEncType,i,null),Et(t,e,"formMethod",i.formMethod,i,null),Et(t,e,"formTarget",i.formTarget,i,null)):(Et(t,e,"encType",i.encType,i,null),Et(t,e,"method",i.method,i,null),Et(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Ai(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=So);break;case"onScroll":n!=null&&dt("scroll",t);break;case"onScrollEnd":n!=null&&dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=Ai(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":dt("beforetoggle",t),dt("toggle",t),_i(t,"popover",n);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":_i(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=M0.get(a)||a,_i(t,a,n))}}function Pr(t,e,a,n,i,o){switch(a){case"style":ds(t,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof n=="string"?ml(t,n):(typeof n=="number"||typeof n=="bigint")&&ml(t,""+n);break;case"onScroll":n!=null&&dt("scroll",t);break;case"onScrollEnd":n!=null&&dt("scrollend",t);break;case"onClick":n!=null&&(t.onclick=So);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!es.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),o=t[ie]||null,o=o!=null?o[a]:null,typeof o=="function"&&t.removeEventListener(e,o,i),typeof n=="function")){typeof o!="function"&&o!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):_i(t,a,n)}}}function Pt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",t),dt("load",t);var n=!1,i=!1,o;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];if(s!=null)switch(o){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Et(t,e,o,s,a,null)}}i&&Et(t,e,"srcSet",a.srcSet,a,null),n&&Et(t,e,"src",a.src,a,null);return;case"input":dt("invalid",t);var d=o=s=i=null,y=null,z=null;for(n in a)if(a.hasOwnProperty(n)){var j=a[n];if(j!=null)switch(n){case"name":i=j;break;case"type":s=j;break;case"checked":y=j;break;case"defaultChecked":z=j;break;case"value":o=j;break;case"defaultValue":d=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,e));break;default:Et(t,e,n,j,a,null)}}rs(t,o,d,y,z,s,i,!1),Mi(t);return;case"select":dt("invalid",t),n=s=o=null;for(i in a)if(a.hasOwnProperty(i)&&(d=a[i],d!=null))switch(i){case"value":o=d;break;case"defaultValue":s=d;break;case"multiple":n=d;default:Et(t,e,i,d,a,null)}e=o,a=s,t.multiple=!!n,e!=null?gl(t,!!n,e,!1):a!=null&&gl(t,!!n,a,!0);return;case"textarea":dt("invalid",t),o=i=n=null;for(s in a)if(a.hasOwnProperty(s)&&(d=a[s],d!=null))switch(s){case"value":n=d;break;case"defaultValue":i=d;break;case"children":o=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:Et(t,e,s,d,a,null)}ss(t,n,i,o),Mi(t);return;case"option":for(y in a)if(a.hasOwnProperty(y)&&(n=a[y],n!=null))switch(y){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Et(t,e,y,n,a,null)}return;case"dialog":dt("beforetoggle",t),dt("toggle",t),dt("cancel",t),dt("close",t);break;case"iframe":case"object":dt("load",t);break;case"video":case"audio":for(n=0;n<Jn.length;n++)dt(Jn[n],t);break;case"image":dt("error",t),dt("load",t);break;case"details":dt("toggle",t);break;case"embed":case"source":case"link":dt("error",t),dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(n=a[z],n!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Et(t,e,z,n,a,null)}return;default:if(gu(e)){for(j in a)a.hasOwnProperty(j)&&(n=a[j],n!==void 0&&Pr(t,e,j,n,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!=null&&Et(t,e,d,n,a,null))}function Fm(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,s=null,d=null,y=null,z=null,j=null;for(w in a){var N=a[w];if(a.hasOwnProperty(w)&&N!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":y=N;default:n.hasOwnProperty(w)||Et(t,e,w,null,n,N)}}for(var M in n){var w=n[M];if(N=a[M],n.hasOwnProperty(M)&&(w!=null||N!=null))switch(M){case"type":o=w;break;case"name":i=w;break;case"checked":z=w;break;case"defaultChecked":j=w;break;case"value":s=w;break;case"defaultValue":d=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,e));break;default:w!==N&&Et(t,e,M,w,n,N)}}du(t,s,d,y,z,j,o,i);return;case"select":w=s=d=M=null;for(o in a)if(y=a[o],a.hasOwnProperty(o)&&y!=null)switch(o){case"value":break;case"multiple":w=y;default:n.hasOwnProperty(o)||Et(t,e,o,null,n,y)}for(i in n)if(o=n[i],y=a[i],n.hasOwnProperty(i)&&(o!=null||y!=null))switch(i){case"value":M=o;break;case"defaultValue":d=o;break;case"multiple":s=o;default:o!==y&&Et(t,e,i,o,n,y)}e=d,a=s,n=w,M!=null?gl(t,!!a,M,!1):!!n!=!!a&&(e!=null?gl(t,!!a,e,!0):gl(t,!!a,a?[]:"",!1));return;case"textarea":w=M=null;for(d in a)if(i=a[d],a.hasOwnProperty(d)&&i!=null&&!n.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Et(t,e,d,null,n,i)}for(s in n)if(i=n[s],o=a[s],n.hasOwnProperty(s)&&(i!=null||o!=null))switch(s){case"value":M=i;break;case"defaultValue":w=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(r(91));break;default:i!==o&&Et(t,e,s,i,n,o)}cs(t,M,w);return;case"option":for(var lt in a)if(M=a[lt],a.hasOwnProperty(lt)&&M!=null&&!n.hasOwnProperty(lt))switch(lt){case"selected":t.selected=!1;break;default:Et(t,e,lt,null,n,M)}for(y in n)if(M=n[y],w=a[y],n.hasOwnProperty(y)&&M!==w&&(M!=null||w!=null))switch(y){case"selected":t.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:Et(t,e,y,M,n,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)M=a[tt],a.hasOwnProperty(tt)&&M!=null&&!n.hasOwnProperty(tt)&&Et(t,e,tt,null,n,M);for(z in n)if(M=n[z],w=a[z],n.hasOwnProperty(z)&&M!==w&&(M!=null||w!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,e));break;default:Et(t,e,z,M,n,w)}return;default:if(gu(e)){for(var Tt in a)M=a[Tt],a.hasOwnProperty(Tt)&&M!==void 0&&!n.hasOwnProperty(Tt)&&Pr(t,e,Tt,void 0,n,M);for(j in n)M=n[j],w=a[j],!n.hasOwnProperty(j)||M===w||M===void 0&&w===void 0||Pr(t,e,j,M,n,w);return}}for(var T in a)M=a[T],a.hasOwnProperty(T)&&M!=null&&!n.hasOwnProperty(T)&&Et(t,e,T,null,n,M);for(N in n)M=n[N],w=a[N],!n.hasOwnProperty(N)||M===w||M==null&&w==null||Et(t,e,N,M,n,w)}var Ir=null,tc=null;function Eo(t){return t.nodeType===9?t:t.ownerDocument}function dh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ec(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ac=null;function Pm(){var t=window.event;return t&&t.type==="popstate"?t===ac?!1:(ac=t,!0):(ac=null,!1)}var gh=typeof setTimeout=="function"?setTimeout:void 0,Im=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(t){return mh.resolve(null).then(t).catch(ep)}:gh;function ep(t){setTimeout(function(){throw t})}function Ra(t){return t==="head"}function ph(t,e){var a=e,n=0,i=0;do{var o=a.nextSibling;if(t.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(0<n&&8>n){a=n;var s=t.ownerDocument;if(a&1&&Fn(s.documentElement),a&2&&Fn(s.body),a&4)for(a=s.head,Fn(a),s=a.firstChild;s;){var d=s.nextSibling,y=s.nodeName;s[dn]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=d}}if(i===0){t.removeChild(o),ii(e);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=o}while(a);ii(e)}function lc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":lc(a),ru(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ap(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[dn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=He(t.nextSibling),t===null)break}return null}function lp(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=He(t.nextSibling),t===null))return null;return t}function nc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function np(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function He(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var ic=null;function yh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function bh(t,e,a){switch(e=Eo(a),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Fn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ru(t)}var Re=new Map,vh=new Set;function To(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=C.d;C.d={f:ip,r:op,D:up,C:rp,L:cp,m:sp,X:dp,S:fp,M:hp};function ip(){var t=ra.f(),e=go();return t||e}function op(t){var e=sl(t);e!==null&&e.tag===5&&e.type==="form"?Bf(e):ra.r(t)}var Xl=typeof document>"u"?null:document;function xh(t,e,a){var n=Xl;if(n&&typeof e=="string"&&e){var i=_e(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),vh.has(i)||(vh.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),Pt(e,"link",t),kt(e),n.head.appendChild(e)))}}function up(t){ra.D(t),xh("dns-prefetch",t,null)}function rp(t,e){ra.C(t,e),xh("preconnect",t,e)}function cp(t,e,a){ra.L(t,e,a);var n=Xl;if(n&&t&&e){var i='link[rel="preload"][as="'+_e(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+_e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+_e(a.imageSizes)+'"]')):i+='[href="'+_e(t)+'"]';var o=i;switch(e){case"style":o=Zl(t);break;case"script":o=Ql(t)}Re.has(o)||(t=E({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Re.set(o,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(Pn(o))||e==="script"&&n.querySelector(In(o))||(e=n.createElement("link"),Pt(e,"link",t),kt(e),n.head.appendChild(e)))}}function sp(t,e){ra.m(t,e);var a=Xl;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+_e(n)+'"][href="'+_e(t)+'"]',o=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ql(t)}if(!Re.has(o)&&(t=E({rel:"modulepreload",href:t},e),Re.set(o,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(In(o)))return}n=a.createElement("link"),Pt(n,"link",t),kt(n),a.head.appendChild(n)}}}function fp(t,e,a){ra.S(t,e,a);var n=Xl;if(n&&t){var i=fl(n).hoistableStyles,o=Zl(t);e=e||"default";var s=i.get(o);if(!s){var d={loading:0,preload:null};if(s=n.querySelector(Pn(o)))d.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Re.get(o))&&oc(t,a);var y=s=n.createElement("link");kt(y),Pt(y,"link",t),y._p=new Promise(function(z,j){y.onload=z,y.onerror=j}),y.addEventListener("load",function(){d.loading|=1}),y.addEventListener("error",function(){d.loading|=2}),d.loading|=4,_o(s,e,n)}s={type:"stylesheet",instance:s,count:1,state:d},i.set(o,s)}}}function dp(t,e){ra.X(t,e);var a=Xl;if(a&&t){var n=fl(a).hoistableScripts,i=Ql(t),o=n.get(i);o||(o=a.querySelector(In(i)),o||(t=E({src:t,async:!0},e),(e=Re.get(i))&&uc(t,e),o=a.createElement("script"),kt(o),Pt(o,"link",t),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function hp(t,e){ra.M(t,e);var a=Xl;if(a&&t){var n=fl(a).hoistableScripts,i=Ql(t),o=n.get(i);o||(o=a.querySelector(In(i)),o||(t=E({src:t,async:!0,type:"module"},e),(e=Re.get(i))&&uc(t,e),o=a.createElement("script"),kt(o),Pt(o,"link",t),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function Sh(t,e,a,n){var i=(i=P.current)?To(i):null;if(!i)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Zl(a.href),a=fl(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Zl(a.href);var o=fl(i).hoistableStyles,s=o.get(t);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,s),(o=i.querySelector(Pn(t)))&&!o._p&&(s.instance=o,s.state.loading=5),Re.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Re.set(t,a),o||gp(i,t,a,s.state))),e&&n===null)throw Error(r(528,""));return s}if(e&&n!==null)throw Error(r(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ql(a),a=fl(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Zl(t){return'href="'+_e(t)+'"'}function Pn(t){return'link[rel="stylesheet"]['+t+"]"}function Eh(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function gp(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Pt(e,"link",a),kt(e),t.head.appendChild(e))}function Ql(t){return'[src="'+_e(t)+'"]'}function In(t){return"script[async]"+t}function Th(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+_e(a.href)+'"]');if(n)return e.instance=n,kt(n),n;var i=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),kt(n),Pt(n,"style",i),_o(n,a.precedence,t),e.instance=n;case"stylesheet":i=Zl(a.href);var o=t.querySelector(Pn(i));if(o)return e.state.loading|=4,e.instance=o,kt(o),o;n=Eh(a),(i=Re.get(i))&&oc(n,i),o=(t.ownerDocument||t).createElement("link"),kt(o);var s=o;return s._p=new Promise(function(d,y){s.onload=d,s.onerror=y}),Pt(o,"link",n),e.state.loading|=4,_o(o,a.precedence,t),e.instance=o;case"script":return o=Ql(a.src),(i=t.querySelector(In(o)))?(e.instance=i,kt(i),i):(n=a,(i=Re.get(o))&&(n=E({},a),uc(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),kt(i),Pt(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,_o(n,a.precedence,t));return e.instance}function _o(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,o=i,s=0;s<n.length;s++){var d=n[s];if(d.dataset.precedence===e)o=d;else if(o!==i)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function oc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function uc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var zo=null;function _h(t,e,a){if(zo===null){var n=new Map,i=zo=new Map;i.set(a,n)}else i=zo,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var o=a[i];if(!(o[dn]||o[It]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(e)||"";s=t+s;var d=n.get(s);d?d.push(o):n.set(s,[o])}}return n}function zh(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function mp(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Mh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ti=null;function pp(){}function yp(t,e,a){if(ti===null)throw Error(r(475));var n=ti;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Zl(a.href),o=t.querySelector(Pn(i));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=Mo.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=o,kt(o);return}o=t.ownerDocument||t,a=Eh(a),(i=Re.get(i))&&oc(a,i),o=o.createElement("link"),kt(o);var s=o;s._p=new Promise(function(d,y){s.onload=d,s.onerror=y}),Pt(o,"link",a),e.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Mo.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function bp(){if(ti===null)throw Error(r(475));var t=ti;return t.stylesheets&&t.count===0&&rc(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&rc(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Mo(){if(this.count--,this.count===0){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wo=null;function rc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wo=new Map,e.forEach(vp,t),wo=null,Mo.call(t))}function vp(t,e){if(!(e.state.loading&4)){var a=wo.get(t);if(a)var n=a.get(null);else{a=new Map,wo.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var s=i[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}i=e.instance,s=i.getAttribute("data-precedence"),o=a.get(s)||n,o===n&&a.set(null,i),a.set(s,i),this.count++,n=Mo.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),o?o.parentNode.insertBefore(i,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var ei={$$typeof:K,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function xp(t,e,a,n,i,o,s,d){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nu(0),this.hiddenUpdates=nu(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function wh(t,e,a,n,i,o,s,d,y,z,j,N){return t=new xp(t,e,a,s,d,y,z,N),e=1,o===!0&&(e|=24),o=me(3,null,null,e),t.current=o,o.stateNode=t,e=Yu(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:e},Vu(o),t}function Ah(t){return t?(t=Tl,t):Tl}function jh(t,e,a,n,i,o){i=Ah(i),n.context===null?n.context=i:n.pendingContext=i,n=ba(e),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=va(t,n,e),a!==null&&(xe(a,t,e),Rn(a,t,e))}function Oh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function cc(t,e){Oh(t,e),(t=t.alternate)&&Oh(t,e)}function Rh(t){if(t.tag===13){var e=El(t,67108864);e!==null&&xe(e,t,67108864),cc(t,67108864)}}var Ao=!0;function Sp(t,e,a,n){var i=A.T;A.T=null;var o=C.p;try{C.p=2,sc(t,e,a,n)}finally{C.p=o,A.T=i}}function Ep(t,e,a,n){var i=A.T;A.T=null;var o=C.p;try{C.p=8,sc(t,e,a,n)}finally{C.p=o,A.T=i}}function sc(t,e,a,n){if(Ao){var i=fc(n);if(i===null)Fr(t,e,n,jo,a),$h(t,n);else if(_p(i,t,e,a,n))n.stopPropagation();else if($h(t,n),e&4&&-1<Tp.indexOf(t)){for(;i!==null;){var o=sl(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=Ba(o.pendingLanes);if(s!==0){var d=o;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var y=1<<31-he(s);d.entanglements[1]|=y,s&=~y}Qe(o),(vt&6)===0&&(fo=Ge()+500,Kn(0))}}break;case 13:d=El(o,2),d!==null&&xe(d,o,2),go(),cc(o,2)}if(o=fc(n),o===null&&Fr(t,e,n,jo,a),o===i)break;i=o}i!==null&&n.stopPropagation()}else Fr(t,e,n,null,a)}}function fc(t){return t=pu(t),dc(t)}var jo=null;function dc(t){if(jo=null,t=cl(t),t!==null){var e=g(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=m(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return jo=t,null}function Dh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(r0()){case Zc:return 2;case Qc:return 8;case xi:case c0:return 32;case Vc:return 268435456;default:return 32}default:return 32}}var hc=!1,Da=null,$a=null,Ca=null,ai=new Map,li=new Map,Na=[],Tp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $h(t,e){switch(t){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":ai.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":li.delete(e.pointerId)}}function ni(t,e,a,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=sl(e),e!==null&&Rh(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _p(t,e,a,n,i){switch(e){case"focusin":return Da=ni(Da,t,e,a,n,i),!0;case"dragenter":return $a=ni($a,t,e,a,n,i),!0;case"mouseover":return Ca=ni(Ca,t,e,a,n,i),!0;case"pointerover":var o=i.pointerId;return ai.set(o,ni(ai.get(o)||null,t,e,a,n,i)),!0;case"gotpointercapture":return o=i.pointerId,li.set(o,ni(li.get(o)||null,t,e,a,n,i)),!0}return!1}function Ch(t){var e=cl(t.target);if(e!==null){var a=g(e);if(a!==null){if(e=a.tag,e===13){if(e=m(a),e!==null){t.blockedOn=e,y0(t.priority,function(){if(a.tag===13){var n=ve();n=iu(n);var i=El(a,n);i!==null&&xe(i,a,n),cc(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=fc(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);mu=n,a.target.dispatchEvent(n),mu=null}else return e=sl(a),e!==null&&Rh(e),t.blockedOn=a,!1;e.shift()}return!0}function Nh(t,e,a){Oo(t)&&a.delete(e)}function zp(){hc=!1,Da!==null&&Oo(Da)&&(Da=null),$a!==null&&Oo($a)&&($a=null),Ca!==null&&Oo(Ca)&&(Ca=null),ai.forEach(Nh),li.forEach(Nh)}function Ro(t,e){t.blockedOn===e&&(t.blockedOn=null,hc||(hc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,zp)))}var Do=null;function Uh(t){Do!==t&&(Do=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Do===t&&(Do=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(dc(n||a)===null)continue;break}var o=sl(a);o!==null&&(t.splice(e,3),e-=3,dr(o,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function ii(t){function e(y){return Ro(y,t)}Da!==null&&Ro(Da,t),$a!==null&&Ro($a,t),Ca!==null&&Ro(Ca,t),ai.forEach(e),li.forEach(e);for(var a=0;a<Na.length;a++){var n=Na[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)Ch(a),a.blockedOn===null&&Na.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],o=a[n+1],s=i[ie]||null;if(typeof o=="function")s||Uh(a);else if(s){var d=null;if(o&&o.hasAttribute("formAction")){if(i=o,s=o[ie]||null)d=s.formAction;else if(dc(i)!==null)continue}else d=s.action;typeof d=="function"?a[n+1]=d:(a.splice(n,3),n-=3),Uh(a)}}}function gc(t){this._internalRoot=t}$o.prototype.render=gc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var a=e.current,n=ve();jh(a,n,t,e,null,null)},$o.prototype.unmount=gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jh(t.current,2,null,t,null,null),go(),e[rl]=null}};function $o(t){this._internalRoot=t}$o.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pc();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Na.length&&e!==0&&e<Na[a].priority;a++);Na.splice(a,0,t),a===0&&Ch(t)}};var Hh=u.version;if(Hh!=="19.1.0")throw Error(r(527,Hh,"19.1.0"));C.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=v(e),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Mp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{cn=Co.inject(Mp),de=Co}catch{}}return ui.createRoot=function(t,e){if(!f(t))throw Error(r(299));var a=!1,n="",i=If,o=td,s=ed,d=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(d=e.unstable_transitionCallbacks)),e=wh(t,1,!1,null,null,a,n,i,o,s,d,null),t[rl]=e.current,Wr(t),new gc(e)},ui.hydrateRoot=function(t,e,a){if(!f(t))throw Error(r(299));var n=!1,i="",o=If,s=td,d=ed,y=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(y=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),e=wh(t,1,!0,e,a??null,n,i,o,s,d,y,z),e.context=Ah(null),a=e.current,n=ve(),n=iu(n),i=ba(n),i.callback=null,va(a,i,n),a=n,e.current.lanes=a,fn(e,a),Qe(e),t[rl]=e.current,Wr(t),new $o(e)},ui.version="19.1.0",ui}var Vh;function Up(){if(Vh)return yc.exports;Vh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),yc.exports=Np(),yc.exports}var Hp=Up(),Vt=function(){return Vt=Object.assign||function(u){for(var c,r=1,f=arguments.length;r<f;r++){c=arguments[r];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(u[g]=c[g])}return u},Vt.apply(this,arguments)};function pi(l,u,c){if(c||arguments.length===2)for(var r=0,f=u.length,g;r<f;r++)(g||!(r in u))&&(g||(g=Array.prototype.slice.call(u,0,r)),g[r]=u[r]);return l.concat(g||Array.prototype.slice.call(u))}var Mt="-ms-",mi="-moz-",bt="-webkit-",jg="comm",Po="rule",qc="decl",Lp="@import",Og="@keyframes",Bp="@layer",Rg=Math.abs,Gc=String.fromCharCode,jc=Object.assign;function qp(l,u){return Qt(l,0)^45?(((u<<2^Qt(l,0))<<2^Qt(l,1))<<2^Qt(l,2))<<2^Qt(l,3):0}function Dg(l){return l.trim()}function da(l,u){return(l=u.exec(l))?l[0]:l}function rt(l,u,c){return l.replace(u,c)}function qo(l,u,c){return l.indexOf(u,c)}function Qt(l,u){return l.charCodeAt(u)|0}function Pl(l,u,c){return l.slice(u,c)}function Ve(l){return l.length}function $g(l){return l.length}function gi(l,u){return u.push(l),l}function Gp(l,u){return l.map(u).join("")}function Kh(l,u){return l.filter(function(c){return!da(c,u)})}var Io=1,Il=1,Cg=0,De=0,Lt=0,ln="";function tu(l,u,c,r,f,g,m,S){return{value:l,root:u,parent:c,type:r,props:f,children:g,line:Io,column:Il,length:m,return:"",siblings:S}}function Ha(l,u){return jc(tu("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},u)}function Vl(l){for(;l.root;)l=Ha(l.root,{children:[l]});gi(l,l.siblings)}function kp(){return Lt}function Yp(){return Lt=De>0?Qt(ln,--De):0,Il--,Lt===10&&(Il=1,Io--),Lt}function Be(){return Lt=De<Cg?Qt(ln,De++):0,Il++,Lt===10&&(Il=1,Io++),Lt}function nl(){return Qt(ln,De)}function Go(){return De}function eu(l,u){return Pl(ln,l,u)}function Oc(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xp(l){return Io=Il=1,Cg=Ve(ln=l),De=0,[]}function Zp(l){return ln="",l}function Sc(l){return Dg(eu(De-1,Rc(l===91?l+2:l===40?l+1:l)))}function Qp(l){for(;(Lt=nl())&&Lt<33;)Be();return Oc(l)>2||Oc(Lt)>3?"":" "}function Vp(l,u){for(;--u&&Be()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return eu(l,Go()+(u<6&&nl()==32&&Be()==32))}function Rc(l){for(;Be();)switch(Lt){case l:return De;case 34:case 39:l!==34&&l!==39&&Rc(Lt);break;case 40:l===41&&Rc(l);break;case 92:Be();break}return De}function Kp(l,u){for(;Be()&&l+Lt!==57;)if(l+Lt===84&&nl()===47)break;return"/*"+eu(u,De-1)+"*"+Gc(l===47?l:Be())}function Jp(l){for(;!Oc(nl());)Be();return eu(l,De)}function Wp(l){return Zp(ko("",null,null,null,[""],l=Xp(l),0,[0],l))}function ko(l,u,c,r,f,g,m,S,v){for(var p=0,E=0,D=m,H=0,G=0,X=0,nt=1,it=1,I=1,at=0,K="",F=f,Z=g,Y=r,k=K;it;)switch(X=at,at=Be()){case 40:if(X!=108&&Qt(k,D-1)==58){qo(k+=rt(Sc(at),"&","&\f"),"&\f",Rg(p?S[p-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:k+=Sc(at);break;case 9:case 10:case 13:case 32:k+=Qp(X);break;case 92:k+=Vp(Go()-1,7);continue;case 47:switch(nl()){case 42:case 47:gi(Fp(Kp(Be(),Go()),u,c,v),v);break;default:k+="/"}break;case 123*nt:S[p++]=Ve(k)*I;case 125*nt:case 59:case 0:switch(at){case 0:case 125:it=0;case 59+E:I==-1&&(k=rt(k,/\f/g,"")),G>0&&Ve(k)-D&&gi(G>32?Wh(k+";",r,c,D-1,v):Wh(rt(k," ","")+";",r,c,D-2,v),v);break;case 59:k+=";";default:if(gi(Y=Jh(k,u,c,p,E,f,S,K,F=[],Z=[],D,g),g),at===123)if(E===0)ko(k,u,Y,Y,F,g,D,S,Z);else switch(H===99&&Qt(k,3)===110?100:H){case 100:case 108:case 109:case 115:ko(l,Y,Y,r&&gi(Jh(l,Y,Y,0,0,f,S,K,f,F=[],D,Z),Z),f,Z,D,S,r?F:Z);break;default:ko(k,Y,Y,Y,[""],Z,0,S,Z)}}p=E=G=0,nt=I=1,K=k="",D=m;break;case 58:D=1+Ve(k),G=X;default:if(nt<1){if(at==123)--nt;else if(at==125&&nt++==0&&Yp()==125)continue}switch(k+=Gc(at),at*nt){case 38:I=E>0?1:(k+="\f",-1);break;case 44:S[p++]=(Ve(k)-1)*I,I=1;break;case 64:nl()===45&&(k+=Sc(Be())),H=nl(),E=D=Ve(K=k+=Jp(Go())),at++;break;case 45:X===45&&Ve(k)==2&&(nt=0)}}return g}function Jh(l,u,c,r,f,g,m,S,v,p,E,D){for(var H=f-1,G=f===0?g:[""],X=$g(G),nt=0,it=0,I=0;nt<r;++nt)for(var at=0,K=Pl(l,H+1,H=Rg(it=m[nt])),F=l;at<X;++at)(F=Dg(it>0?G[at]+" "+K:rt(K,/&\f/g,G[at])))&&(v[I++]=F);return tu(l,u,c,f===0?Po:S,v,p,E,D)}function Fp(l,u,c,r){return tu(l,u,c,jg,Gc(kp()),Pl(l,2,-2),0,r)}function Wh(l,u,c,r,f){return tu(l,u,c,qc,Pl(l,0,r),Pl(l,r+1,-1),r,f)}function Ng(l,u,c){switch(qp(l,u)){case 5103:return bt+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return bt+l+l;case 4789:return mi+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return bt+l+mi+l+Mt+l+l;case 5936:switch(Qt(l,u+11)){case 114:return bt+l+Mt+rt(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return bt+l+Mt+rt(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return bt+l+Mt+rt(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return bt+l+Mt+l+l;case 6165:return bt+l+Mt+"flex-"+l+l;case 5187:return bt+l+rt(l,/(\w+).+(:[^]+)/,bt+"box-$1$2"+Mt+"flex-$1$2")+l;case 5443:return bt+l+Mt+"flex-item-"+rt(l,/flex-|-self/g,"")+(da(l,/flex-|baseline/)?"":Mt+"grid-row-"+rt(l,/flex-|-self/g,""))+l;case 4675:return bt+l+Mt+"flex-line-pack"+rt(l,/align-content|flex-|-self/g,"")+l;case 5548:return bt+l+Mt+rt(l,"shrink","negative")+l;case 5292:return bt+l+Mt+rt(l,"basis","preferred-size")+l;case 6060:return bt+"box-"+rt(l,"-grow","")+bt+l+Mt+rt(l,"grow","positive")+l;case 4554:return bt+rt(l,/([^-])(transform)/g,"$1"+bt+"$2")+l;case 6187:return rt(rt(rt(l,/(zoom-|grab)/,bt+"$1"),/(image-set)/,bt+"$1"),l,"")+l;case 5495:case 3959:return rt(l,/(image-set\([^]*)/,bt+"$1$`$1");case 4968:return rt(rt(l,/(.+:)(flex-)?(.*)/,bt+"box-pack:$3"+Mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+bt+l+l;case 4200:if(!da(l,/flex-|baseline/))return Mt+"grid-column-align"+Pl(l,u)+l;break;case 2592:case 3360:return Mt+rt(l,"template-","")+l;case 4384:case 3616:return c&&c.some(function(r,f){return u=f,da(r.props,/grid-\w+-end/)})?~qo(l+(c=c[u].value),"span",0)?l:Mt+rt(l,"-start","")+l+Mt+"grid-row-span:"+(~qo(c,"span",0)?da(c,/\d+/):+da(c,/\d+/)-+da(l,/\d+/))+";":Mt+rt(l,"-start","")+l;case 4896:case 4128:return c&&c.some(function(r){return da(r.props,/grid-\w+-start/)})?l:Mt+rt(rt(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return rt(l,/(.+)-inline(.+)/,bt+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ve(l)-1-u>6)switch(Qt(l,u+1)){case 109:if(Qt(l,u+4)!==45)break;case 102:return rt(l,/(.+:)(.+)-([^]+)/,"$1"+bt+"$2-$3$1"+mi+(Qt(l,u+3)==108?"$3":"$2-$3"))+l;case 115:return~qo(l,"stretch",0)?Ng(rt(l,"stretch","fill-available"),u,c)+l:l}break;case 5152:case 5920:return rt(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,f,g,m,S,v,p){return Mt+f+":"+g+p+(m?Mt+f+"-span:"+(S?v:+v-+g)+p:"")+l});case 4949:if(Qt(l,u+6)===121)return rt(l,":",":"+bt)+l;break;case 6444:switch(Qt(l,Qt(l,14)===45?18:11)){case 120:return rt(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+bt+(Qt(l,14)===45?"inline-":"")+"box$3$1"+bt+"$2$3$1"+Mt+"$2box$3")+l;case 100:return rt(l,":",":"+Mt)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return rt(l,"scroll-","scroll-snap-")+l}return l}function Qo(l,u){for(var c="",r=0;r<l.length;r++)c+=u(l[r],r,l,u)||"";return c}function Pp(l,u,c,r){switch(l.type){case Bp:if(l.children.length)break;case Lp:case qc:return l.return=l.return||l.value;case jg:return"";case Og:return l.return=l.value+"{"+Qo(l.children,r)+"}";case Po:if(!Ve(l.value=l.props.join(",")))return""}return Ve(c=Qo(l.children,r))?l.return=l.value+"{"+c+"}":""}function Ip(l){var u=$g(l);return function(c,r,f,g){for(var m="",S=0;S<u;S++)m+=l[S](c,r,f,g)||"";return m}}function ty(l){return function(u){u.root||(u=u.return)&&l(u)}}function ey(l,u,c,r){if(l.length>-1&&!l.return)switch(l.type){case qc:l.return=Ng(l.value,l.length,c);return;case Og:return Qo([Ha(l,{value:rt(l.value,"@","@"+bt)})],r);case Po:if(l.length)return Gp(c=l.props,function(f){switch(da(f,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vl(Ha(l,{props:[rt(f,/:(read-\w+)/,":"+mi+"$1")]})),Vl(Ha(l,{props:[f]})),jc(l,{props:Kh(c,r)});break;case"::placeholder":Vl(Ha(l,{props:[rt(f,/:(plac\w+)/,":"+bt+"input-$1")]})),Vl(Ha(l,{props:[rt(f,/:(plac\w+)/,":"+mi+"$1")]})),Vl(Ha(l,{props:[rt(f,/:(plac\w+)/,Mt+"input-$1")]})),Vl(Ha(l,{props:[f]})),jc(l,{props:Kh(c,r)});break}return""})}}var ay={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Se={},tn=typeof process<"u"&&Se!==void 0&&(Se.REACT_APP_SC_ATTR||Se.SC_ATTR)||"data-styled",Ug="active",Hg="data-styled-version",au="6.1.17",kc=`/*!sc*/
`,Vo=typeof window<"u"&&"HTMLElement"in window,ly=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Se!==void 0&&Se.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Se.REACT_APP_SC_DISABLE_SPEEDY!==""?Se.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Se.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Se!==void 0&&Se.SC_DISABLE_SPEEDY!==void 0&&Se.SC_DISABLE_SPEEDY!==""&&Se.SC_DISABLE_SPEEDY!=="false"&&Se.SC_DISABLE_SPEEDY),ny={},lu=Object.freeze([]),en=Object.freeze({});function Lg(l,u,c){return c===void 0&&(c=en),l.theme!==c.theme&&l.theme||u||c.theme}var Bg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),iy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,oy=/(^-|-$)/g;function Fh(l){return l.replace(iy,"-").replace(oy,"")}var uy=/(a)(d)/gi,No=52,Ph=function(l){return String.fromCharCode(l+(l>25?39:97))};function Dc(l){var u,c="";for(u=Math.abs(l);u>No;u=u/No|0)c=Ph(u%No)+c;return(Ph(u%No)+c).replace(uy,"$1-$2")}var Ec,qg=5381,Fl=function(l,u){for(var c=u.length;c;)l=33*l^u.charCodeAt(--c);return l},Gg=function(l){return Fl(qg,l)};function kg(l){return Dc(Gg(l)>>>0)}function ry(l){return l.displayName||l.name||"Component"}function Tc(l){return typeof l=="string"&&!0}var Yg=typeof Symbol=="function"&&Symbol.for,Xg=Yg?Symbol.for("react.memo"):60115,cy=Yg?Symbol.for("react.forward_ref"):60112,sy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dy=((Ec={})[cy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ec[Xg]=Zg,Ec);function Ih(l){return("type"in(u=l)&&u.type.$$typeof)===Xg?Zg:"$$typeof"in l?dy[l.$$typeof]:sy;var u}var hy=Object.defineProperty,gy=Object.getOwnPropertyNames,tg=Object.getOwnPropertySymbols,my=Object.getOwnPropertyDescriptor,py=Object.getPrototypeOf,eg=Object.prototype;function Qg(l,u,c){if(typeof u!="string"){if(eg){var r=py(u);r&&r!==eg&&Qg(l,r,c)}var f=gy(u);tg&&(f=f.concat(tg(u)));for(var g=Ih(l),m=Ih(u),S=0;S<f.length;++S){var v=f[S];if(!(v in fy||c&&c[v]||m&&v in m||g&&v in g)){var p=my(u,v);try{hy(l,v,p)}catch{}}}}return l}function il(l){return typeof l=="function"}function Yc(l){return typeof l=="object"&&"styledComponentId"in l}function ll(l,u){return l&&u?"".concat(l," ").concat(u):l||u||""}function $c(l,u){if(l.length===0)return"";for(var c=l[0],r=1;r<l.length;r++)c+=l[r];return c}function yi(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Cc(l,u,c){if(c===void 0&&(c=!1),!c&&!yi(l)&&!Array.isArray(l))return u;if(Array.isArray(u))for(var r=0;r<u.length;r++)l[r]=Cc(l[r],u[r]);else if(yi(u))for(var r in u)l[r]=Cc(l[r],u[r]);return l}function Xc(l,u){Object.defineProperty(l,"toString",{value:u})}function ol(l){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var yy=function(){function l(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return l.prototype.indexOfGroup=function(u){for(var c=0,r=0;r<u;r++)c+=this.groupSizes[r];return c},l.prototype.insertRules=function(u,c){if(u>=this.groupSizes.length){for(var r=this.groupSizes,f=r.length,g=f;u>=g;)if((g<<=1)<0)throw ol(16,"".concat(u));this.groupSizes=new Uint32Array(g),this.groupSizes.set(r),this.length=g;for(var m=f;m<g;m++)this.groupSizes[m]=0}for(var S=this.indexOfGroup(u+1),v=(m=0,c.length);m<v;m++)this.tag.insertRule(S,c[m])&&(this.groupSizes[u]++,S++)},l.prototype.clearGroup=function(u){if(u<this.length){var c=this.groupSizes[u],r=this.indexOfGroup(u),f=r+c;this.groupSizes[u]=0;for(var g=r;g<f;g++)this.tag.deleteRule(r)}},l.prototype.getGroup=function(u){var c="";if(u>=this.length||this.groupSizes[u]===0)return c;for(var r=this.groupSizes[u],f=this.indexOfGroup(u),g=f+r,m=f;m<g;m++)c+="".concat(this.tag.getRule(m)).concat(kc);return c},l}(),Yo=new Map,Ko=new Map,Xo=1,Uo=function(l){if(Yo.has(l))return Yo.get(l);for(;Ko.has(Xo);)Xo++;var u=Xo++;return Yo.set(l,u),Ko.set(u,l),u},by=function(l,u){Xo=u+1,Yo.set(l,u),Ko.set(u,l)},vy="style[".concat(tn,"][").concat(Hg,'="').concat(au,'"]'),xy=new RegExp("^".concat(tn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Sy=function(l,u,c){for(var r,f=c.split(","),g=0,m=f.length;g<m;g++)(r=f[g])&&l.registerName(u,r)},Ey=function(l,u){for(var c,r=((c=u.textContent)!==null&&c!==void 0?c:"").split(kc),f=[],g=0,m=r.length;g<m;g++){var S=r[g].trim();if(S){var v=S.match(xy);if(v){var p=0|parseInt(v[1],10),E=v[2];p!==0&&(by(E,p),Sy(l,E,v[3]),l.getTag().insertRules(p,f)),f.length=0}else f.push(S)}}},ag=function(l){for(var u=document.querySelectorAll(vy),c=0,r=u.length;c<r;c++){var f=u[c];f&&f.getAttribute(tn)!==Ug&&(Ey(l,f),f.parentNode&&f.parentNode.removeChild(f))}};function Ty(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Vg=function(l){var u=document.head,c=l||u,r=document.createElement("style"),f=function(S){var v=Array.from(S.querySelectorAll("style[".concat(tn,"]")));return v[v.length-1]}(c),g=f!==void 0?f.nextSibling:null;r.setAttribute(tn,Ug),r.setAttribute(Hg,au);var m=Ty();return m&&r.setAttribute("nonce",m),c.insertBefore(r,g),r},_y=function(){function l(u){this.element=Vg(u),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var r=document.styleSheets,f=0,g=r.length;f<g;f++){var m=r[f];if(m.ownerNode===c)return m}throw ol(17)}(this.element),this.length=0}return l.prototype.insertRule=function(u,c){try{return this.sheet.insertRule(c,u),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},l.prototype.getRule=function(u){var c=this.sheet.cssRules[u];return c&&c.cssText?c.cssText:""},l}(),zy=function(){function l(u){this.element=Vg(u),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(u,c){if(u<=this.length&&u>=0){var r=document.createTextNode(c);return this.element.insertBefore(r,this.nodes[u]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},l.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},l}(),My=function(){function l(u){this.rules=[],this.length=0}return l.prototype.insertRule=function(u,c){return u<=this.length&&(this.rules.splice(u,0,c),this.length++,!0)},l.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},l.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},l}(),lg=Vo,wy={isServer:!Vo,useCSSOMInjection:!ly},Jo=function(){function l(u,c,r){u===void 0&&(u=en),c===void 0&&(c={});var f=this;this.options=Vt(Vt({},wy),u),this.gs=c,this.names=new Map(r),this.server=!!u.isServer,!this.server&&Vo&&lg&&(lg=!1,ag(this)),Xc(this,function(){return function(g){for(var m=g.getTag(),S=m.length,v="",p=function(D){var H=function(I){return Ko.get(I)}(D);if(H===void 0)return"continue";var G=g.names.get(H),X=m.getGroup(D);if(G===void 0||!G.size||X.length===0)return"continue";var nt="".concat(tn,".g").concat(D,'[id="').concat(H,'"]'),it="";G!==void 0&&G.forEach(function(I){I.length>0&&(it+="".concat(I,","))}),v+="".concat(X).concat(nt,'{content:"').concat(it,'"}').concat(kc)},E=0;E<S;E++)p(E);return v}(f)})}return l.registerId=function(u){return Uo(u)},l.prototype.rehydrate=function(){!this.server&&Vo&&ag(this)},l.prototype.reconstructWithOptions=function(u,c){return c===void 0&&(c=!0),new l(Vt(Vt({},this.options),u),this.gs,c&&this.names||void 0)},l.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(u=function(c){var r=c.useCSSOMInjection,f=c.target;return c.isServer?new My(f):r?new _y(f):new zy(f)}(this.options),new yy(u)));var u},l.prototype.hasNameForId=function(u,c){return this.names.has(u)&&this.names.get(u).has(c)},l.prototype.registerName=function(u,c){if(Uo(u),this.names.has(u))this.names.get(u).add(c);else{var r=new Set;r.add(c),this.names.set(u,r)}},l.prototype.insertRules=function(u,c,r){this.registerName(u,c),this.getTag().insertRules(Uo(u),r)},l.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},l.prototype.clearRules=function(u){this.getTag().clearGroup(Uo(u)),this.clearNames(u)},l.prototype.clearTag=function(){this.tag=void 0},l}(),Ay=/&/g,jy=/^\s*\/\/.*$/gm;function Kg(l,u){return l.map(function(c){return c.type==="rule"&&(c.value="".concat(u," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(u," ")),c.props=c.props.map(function(r){return"".concat(u," ").concat(r)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Kg(c.children,u)),c})}function Oy(l){var u,c,r,f=en,g=f.options,m=g===void 0?en:g,S=f.plugins,v=S===void 0?lu:S,p=function(H,G,X){return X.startsWith(c)&&X.endsWith(c)&&X.replaceAll(c,"").length>0?".".concat(u):H},E=v.slice();E.push(function(H){H.type===Po&&H.value.includes("&")&&(H.props[0]=H.props[0].replace(Ay,c).replace(r,p))}),m.prefix&&E.push(ey),E.push(Pp);var D=function(H,G,X,nt){G===void 0&&(G=""),X===void 0&&(X=""),nt===void 0&&(nt="&"),u=nt,c=G,r=new RegExp("\\".concat(c,"\\b"),"g");var it=H.replace(jy,""),I=Wp(X||G?"".concat(X," ").concat(G," { ").concat(it," }"):it);m.namespace&&(I=Kg(I,m.namespace));var at=[];return Qo(I,Ip(E.concat(ty(function(K){return at.push(K)})))),at};return D.hash=v.length?v.reduce(function(H,G){return G.name||ol(15),Fl(H,G.name)},qg).toString():"",D}var Ry=new Jo,Nc=Oy(),Jg=Le.createContext({shouldForwardProp:void 0,styleSheet:Ry,stylis:Nc});Jg.Consumer;Le.createContext(void 0);function Uc(){return U.useContext(Jg)}var Dy=function(){function l(u,c){var r=this;this.inject=function(f,g){g===void 0&&(g=Nc);var m=r.name+g.hash;f.hasNameForId(r.id,m)||f.insertRules(r.id,m,g(r.rules,m,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=c,Xc(this,function(){throw ol(12,String(r.name))})}return l.prototype.getName=function(u){return u===void 0&&(u=Nc),this.name+u.hash},l}(),$y=function(l){return l>="A"&&l<="Z"};function ng(l){for(var u="",c=0;c<l.length;c++){var r=l[c];if(c===1&&r==="-"&&l[0]==="-")return l;$y(r)?u+="-"+r.toLowerCase():u+=r}return u.startsWith("ms-")?"-"+u:u}var Wg=function(l){return l==null||l===!1||l===""},Fg=function(l){var u,c,r=[];for(var f in l){var g=l[f];l.hasOwnProperty(f)&&!Wg(g)&&(Array.isArray(g)&&g.isCss||il(g)?r.push("".concat(ng(f),":"),g,";"):yi(g)?r.push.apply(r,pi(pi(["".concat(f," {")],Fg(g),!1),["}"],!1)):r.push("".concat(ng(f),": ").concat((u=f,(c=g)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||u in ay||u.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return r};function La(l,u,c,r){if(Wg(l))return[];if(Yc(l))return[".".concat(l.styledComponentId)];if(il(l)){if(!il(g=l)||g.prototype&&g.prototype.isReactComponent||!u)return[l];var f=l(u);return La(f,u,c,r)}var g;return l instanceof Dy?c?(l.inject(c,r),[l.getName(r)]):[l]:yi(l)?Fg(l):Array.isArray(l)?Array.prototype.concat.apply(lu,l.map(function(m){return La(m,u,c,r)})):[l.toString()]}function Pg(l){for(var u=0;u<l.length;u+=1){var c=l[u];if(il(c)&&!Yc(c))return!1}return!0}var Cy=Gg(au),Ny=function(){function l(u,c,r){this.rules=u,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Pg(u),this.componentId=c,this.baseHash=Fl(Cy,c),this.baseStyle=r,Jo.registerId(c)}return l.prototype.generateAndInjectStyles=function(u,c,r){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,c,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))f=ll(f,this.staticRulesId);else{var g=$c(La(this.rules,u,c,r)),m=Dc(Fl(this.baseHash,g)>>>0);if(!c.hasNameForId(this.componentId,m)){var S=r(g,".".concat(m),void 0,this.componentId);c.insertRules(this.componentId,m,S)}f=ll(f,m),this.staticRulesId=m}else{for(var v=Fl(this.baseHash,r.hash),p="",E=0;E<this.rules.length;E++){var D=this.rules[E];if(typeof D=="string")p+=D;else if(D){var H=$c(La(D,u,c,r));v=Fl(v,H+E),p+=H}}if(p){var G=Dc(v>>>0);c.hasNameForId(this.componentId,G)||c.insertRules(this.componentId,G,r(p,".".concat(G),void 0,this.componentId)),f=ll(f,G)}}return f},l}(),bi=Le.createContext(void 0);bi.Consumer;function Uy(l){var u=Le.useContext(bi),c=U.useMemo(function(){return function(r,f){if(!r)throw ol(14);if(il(r)){var g=r(f);return g}if(Array.isArray(r)||typeof r!="object")throw ol(8);return f?Vt(Vt({},f),r):r}(l.theme,u)},[l.theme,u]);return l.children?Le.createElement(bi.Provider,{value:c},l.children):null}var _c={};function Hy(l,u,c){var r=Yc(l),f=l,g=!Tc(l),m=u.attrs,S=m===void 0?lu:m,v=u.componentId,p=v===void 0?function(F,Z){var Y=typeof F!="string"?"sc":Fh(F);_c[Y]=(_c[Y]||0)+1;var k="".concat(Y,"-").concat(kg(au+Y+_c[Y]));return Z?"".concat(Z,"-").concat(k):k}(u.displayName,u.parentComponentId):v,E=u.displayName,D=E===void 0?function(F){return Tc(F)?"styled.".concat(F):"Styled(".concat(ry(F),")")}(l):E,H=u.displayName&&u.componentId?"".concat(Fh(u.displayName),"-").concat(u.componentId):u.componentId||p,G=r&&f.attrs?f.attrs.concat(S).filter(Boolean):S,X=u.shouldForwardProp;if(r&&f.shouldForwardProp){var nt=f.shouldForwardProp;if(u.shouldForwardProp){var it=u.shouldForwardProp;X=function(F,Z){return nt(F,Z)&&it(F,Z)}}else X=nt}var I=new Ny(c,H,r?f.componentStyle:void 0);function at(F,Z){return function(Y,k,ht){var Kt=Y.attrs,qe=Y.componentStyle,fe=Y.defaultProps,Ct=Y.foldedComponentIds,$e=Y.styledComponentId,Ce=Y.target,Nt=Le.useContext(bi),A=Uc(),C=Y.shouldForwardProp||A.shouldForwardProp,q=Lg(k,Nt,fe)||en,V=function(ut,P,Rt){for(var mt,Bt=Vt(Vt({},P),{className:void 0,theme:Rt}),Jt=0;Jt<ut.length;Jt+=1){var ne=il(mt=ut[Jt])?mt(Bt):mt;for(var ae in ne)Bt[ae]=ae==="className"?ll(Bt[ae],ne[ae]):ae==="style"?Vt(Vt({},Bt[ae]),ne[ae]):ne[ae]}return P.className&&(Bt.className=ll(Bt.className,P.className)),Bt}(Kt,k,q),b=V.as||Ce,$={};for(var L in V)V[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&V.theme===q||(L==="forwardedAs"?$.as=V.forwardedAs:C&&!C(L,b)||($[L]=V[L]));var B=function(ut,P){var Rt=Uc(),mt=ut.generateAndInjectStyles(P,Rt.styleSheet,Rt.stylis);return mt}(qe,V),J=ll(Ct,$e);return B&&(J+=" "+B),V.className&&(J+=" "+V.className),$[Tc(b)&&!Bg.has(b)?"class":"className"]=J,ht&&($.ref=ht),U.createElement(b,$)}(K,F,Z)}at.displayName=D;var K=Le.forwardRef(at);return K.attrs=G,K.componentStyle=I,K.displayName=D,K.shouldForwardProp=X,K.foldedComponentIds=r?ll(f.foldedComponentIds,f.styledComponentId):"",K.styledComponentId=H,K.target=r?f.target:l,Object.defineProperty(K,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=r?function(Z){for(var Y=[],k=1;k<arguments.length;k++)Y[k-1]=arguments[k];for(var ht=0,Kt=Y;ht<Kt.length;ht++)Cc(Z,Kt[ht],!0);return Z}({},f.defaultProps,F):F}}),Xc(K,function(){return".".concat(K.styledComponentId)}),g&&Qg(K,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),K}function ig(l,u){for(var c=[l[0]],r=0,f=u.length;r<f;r+=1)c.push(u[r],l[r+1]);return c}var og=function(l){return Object.assign(l,{isCss:!0})};function Ig(l){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];if(il(l)||yi(l))return og(La(ig(lu,pi([l],u,!0))));var r=l;return u.length===0&&r.length===1&&typeof r[0]=="string"?La(r):og(La(ig(r,u)))}function Hc(l,u,c){if(c===void 0&&(c=en),!u)throw ol(1,u);var r=function(f){for(var g=[],m=1;m<arguments.length;m++)g[m-1]=arguments[m];return l(u,c,Ig.apply(void 0,pi([f],g,!1)))};return r.attrs=function(f){return Hc(l,u,Vt(Vt({},c),{attrs:Array.prototype.concat(c.attrs,f).filter(Boolean)}))},r.withConfig=function(f){return Hc(l,u,Vt(Vt({},c),f))},r}var t0=function(l){return Hc(Hy,l)},O=t0;Bg.forEach(function(l){O[l]=t0(l)});var Ly=function(){function l(u,c){this.rules=u,this.componentId=c,this.isStatic=Pg(u),Jo.registerId(this.componentId+1)}return l.prototype.createStyles=function(u,c,r,f){var g=f($c(La(this.rules,c,r,f)),""),m=this.componentId+u;r.insertRules(m,m,g)},l.prototype.removeStyles=function(u,c){c.clearRules(this.componentId+u)},l.prototype.renderStyles=function(u,c,r,f){u>2&&Jo.registerId(this.componentId+u),this.removeStyles(u,r),this.createStyles(u,c,r,f)},l}();function By(l){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];var r=Ig.apply(void 0,pi([l],u,!1)),f="sc-global-".concat(kg(JSON.stringify(r))),g=new Ly(r,f),m=function(v){var p=Uc(),E=Le.useContext(bi),D=Le.useRef(p.styleSheet.allocateGSInstance(f)).current;return p.styleSheet.server&&S(D,v,p.styleSheet,E,p.stylis),Le.useLayoutEffect(function(){if(!p.styleSheet.server)return S(D,v,p.styleSheet,E,p.stylis),function(){return g.removeStyles(D,p.styleSheet)}},[D,v,p.styleSheet,E,p.stylis]),null};function S(v,p,E,D,H){if(g.isStatic)g.renderStyles(v,ny,E,H);else{var G=Vt(Vt({},p),{theme:Lg(p,D,m.defaultProps)});g.renderStyles(v,G,E,H)}}return Le.memo(m)}const qy="modulepreload",Gy=function(l){return"/gsl-dust-tool/"+l},ug={},ky=function(u,c,r){let f=Promise.resolve();if(c&&c.length>0){let m=function(p){return Promise.all(p.map(E=>Promise.resolve(E).then(D=>({status:"fulfilled",value:D}),D=>({status:"rejected",reason:D}))))};document.getElementsByTagName("link");const S=document.querySelector("meta[property=csp-nonce]"),v=(S==null?void 0:S.nonce)||(S==null?void 0:S.getAttribute("nonce"));f=m(c.map(p=>{if(p=Gy(p),p in ug)return;ug[p]=!0;const E=p.endsWith(".css"),D=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${D}`))return;const H=document.createElement("link");if(H.rel=E?"stylesheet":qy,E||(H.as="script"),H.crossOrigin="",H.href=p,v&&H.setAttribute("nonce",v),document.head.appendChild(H),E)return new Promise((G,X)=>{H.addEventListener("load",G),H.addEventListener("error",()=>X(new Error(`Unable to preload CSS for ${p}`)))})}))}function g(m){const S=new Event("vite:preloadError",{cancelable:!0});if(S.payload=m,window.dispatchEvent(S),!S.defaultPrevented)throw m}return f.then(m=>{for(const S of m||[])S.status==="rejected"&&g(S.reason);return u().catch(g)})},Yy=U.createContext(null);function Xy(l,u){const c=Array.isArray(l)?l[0]:l?l.x:0,r=Array.isArray(l)?l[1]:l?l.y:0,f=Array.isArray(u)?u[0]:u?u.x:0,g=Array.isArray(u)?u[1]:u?u.y:0;return c===f&&r===g}function Ee(l,u){if(l===u)return!0;if(!l||!u)return!1;if(Array.isArray(l)){if(!Array.isArray(u)||l.length!==u.length)return!1;for(let c=0;c<l.length;c++)if(!Ee(l[c],u[c]))return!1;return!0}else if(Array.isArray(u))return!1;if(typeof l=="object"&&typeof u=="object"){const c=Object.keys(l),r=Object.keys(u);if(c.length!==r.length)return!1;for(const f of c)if(!u.hasOwnProperty(f)||!Ee(l[f],u[f]))return!1;return!0}return!1}function Zy(l){const u=l.clone();return u.pixelsToGLUnits=l.pixelsToGLUnits,u}function rg(l,u){if(!l.getProjection)return;const c=l.getProjection(),r=u.getProjection();Ee(c,r)||u.setProjection(c)}function cg(l){return{longitude:l.center.lng,latitude:l.center.lat,zoom:l.zoom,pitch:l.pitch,bearing:l.bearing,padding:l.padding}}function sg(l,u){const c=u.viewState||u;let r=!1;if("longitude"in c&&"latitude"in c){const f=l.center;l.center=new f.constructor(c.longitude,c.latitude),r=r||f!==l.center}if("zoom"in c){const f=l.zoom;l.zoom=c.zoom,r=r||f!==l.zoom}if("bearing"in c){const f=l.bearing;l.bearing=c.bearing,r=r||f!==l.bearing}if("pitch"in c){const f=l.pitch;l.pitch=c.pitch,r=r||f!==l.pitch}return c.padding&&!l.isPaddingEqual(c.padding)&&(r=!0,l.padding=c.padding),r}const Qy=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function fg(l){if(!l)return null;if(typeof l=="string"||("toJS"in l&&(l=l.toJS()),!l.layers))return l;const u={};for(const r of l.layers)u[r.id]=r;const c=l.layers.map(r=>{let f=null;"interactive"in r&&(f=Object.assign({},r),delete f.interactive);const g=u[r.ref];if(g){f=f||Object.assign({},r),delete f.ref;for(const m of Qy)m in g&&(f[m]=g[m])}return f||r});return{...l,layers:c}}var dg={};const hg={version:8,sources:{},layers:[]},gg={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},zc={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},mg={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},Vy=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],Ky=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class an{constructor(u,c,r){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=f=>{const g=this.props[mg[f.type]];g?g(f):f.type==="error"&&console.error(f.error)},this._onPointerEvent=f=>{(f.type==="mousemove"||f.type==="mouseout")&&this._updateHover(f);const g=this.props[gg[f.type]];g&&(this.props.interactiveLayerIds&&f.type!=="mouseover"&&f.type!=="mouseout"&&(f.features=this._hoveredFeatures||this._queryRenderedFeatures(f.point)),g(f),delete f.features)},this._onCameraEvent=f=>{if(!this._internalUpdate){const g=this.props[zc[f.type]];g&&g(f)}f.type in this._deferredEvents&&(this._deferredEvents[f.type]=!1)},this._MapClass=u,this.props=c,this._initialize(r)}get map(){return this._map}get transform(){return this._renderTransform}setProps(u){const c=this.props;this.props=u;const r=this._updateSettings(u,c);r&&this._createShadowTransform(this._map);const f=this._updateSize(u),g=this._updateViewState(u,!0);this._updateStyle(u,c),this._updateStyleComponents(u,c),this._updateHandlers(u,c),(r||f||g&&!this._map.isMoving())&&this.redraw()}static reuse(u,c){const r=an.savedMaps.pop();if(!r)return null;const f=r.map,g=f.getContainer();for(c.className=g.className;g.childNodes.length>0;)c.appendChild(g.childNodes[0]);f._container=c;const m=f._resizeObserver;m&&(m.disconnect(),m.observe(c)),r.setProps({...u,styleDiffing:!1}),f.resize();const{initialViewState:S}=u;return S&&(S.bounds?f.fitBounds(S.bounds,{...S.fitBoundsOptions,duration:0}):r._updateViewState(S,!1)),f.isStyleLoaded()?f.fire("load"):f.once("styledata",()=>f.fire("load")),f._update(),r}_initialize(u){const{props:c}=this,{mapStyle:r=hg}=c,f={...c,...c.initialViewState,accessToken:c.mapboxAccessToken||Jy()||null,container:u,style:fg(r)},g=f.initialViewState||f.viewState||f;if(Object.assign(f,{center:[g.longitude||0,g.latitude||0],zoom:g.zoom||0,pitch:g.pitch||0,bearing:g.bearing||0}),c.gl){const E=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=E,c.gl)}const m=new this._MapClass(f);g.padding&&m.setPadding(g.padding),c.cursor&&(m.getCanvas().style.cursor=c.cursor),this._createShadowTransform(m);const S=m._render;m._render=E=>{this._inRender=!0,S.call(m,E),this._inRender=!1};const v=m._renderTaskQueue.run;m._renderTaskQueue.run=E=>{v.call(m._renderTaskQueue,E),this._onBeforeRepaint()},m.on("render",()=>this._onAfterRepaint());const p=m.fire;m.fire=this._fireEvent.bind(this,p),m.on("resize",()=>{this._renderTransform.resize(m.transform.width,m.transform.height)}),m.on("styledata",()=>{this._updateStyleComponents(this.props,{}),rg(m.transform,this._renderTransform)}),m.on("sourcedata",()=>this._updateStyleComponents(this.props,{}));for(const E in gg)m.on(E,this._onPointerEvent);for(const E in zc)m.on(E,this._onCameraEvent);for(const E in mg)m.on(E,this._onEvent);this._map=m}recycle(){const c=this.map.getContainer().querySelector("[mapboxgl-children]");c==null||c.remove(),an.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const u=this._map;!this._inRender&&u.style&&(u._frame&&(u._frame.cancel(),u._frame=null),u._render())}_createShadowTransform(u){const c=Zy(u.transform);u.painter.transform=c,this._renderTransform=c}_updateSize(u){const{viewState:c}=u;if(c){const r=this._map;if(c.width!==r.transform.width||c.height!==r.transform.height)return r.resize(),!0}return!1}_updateViewState(u,c){if(this._internalUpdate)return!1;const r=this._map,f=this._renderTransform,{zoom:g,pitch:m,bearing:S}=f,v=r.isMoving();v&&(f.cameraElevationReference="sea");const p=sg(f,{...cg(r.transform),...u});if(v&&(f.cameraElevationReference="ground"),p&&c){const E=this._deferredEvents;E.move=!0,E.zoom||(E.zoom=g!==f.zoom),E.rotate||(E.rotate=S!==f.bearing),E.pitch||(E.pitch=m!==f.pitch)}return v||sg(r.transform,u),p}_updateSettings(u,c){const r=this._map;let f=!1;for(const g of Vy)if(g in u&&!Ee(u[g],c[g])){f=!0;const m=r[`set${g[0].toUpperCase()}${g.slice(1)}`];m==null||m.call(r,u[g])}return f}_updateStyle(u,c){if(u.cursor!==c.cursor&&(this._map.getCanvas().style.cursor=u.cursor||""),u.mapStyle!==c.mapStyle){const{mapStyle:r=hg,styleDiffing:f=!0}=u,g={diff:f};return"localIdeographFontFamily"in u&&(g.localIdeographFontFamily=u.localIdeographFontFamily),this._map.setStyle(fg(r),g),!0}return!1}_updateStyleComponents(u,c){const r=this._map;let f=!1;return r.isStyleLoaded()&&("light"in u&&r.setLight&&!Ee(u.light,c.light)&&(f=!0,r.setLight(u.light)),"fog"in u&&r.setFog&&!Ee(u.fog,c.fog)&&(f=!0,r.setFog(u.fog)),"terrain"in u&&r.setTerrain&&!Ee(u.terrain,c.terrain)&&(!u.terrain||r.getSource(u.terrain.source))&&(f=!0,r.setTerrain(u.terrain))),f}_updateHandlers(u,c){var r,f;const g=this._map;let m=!1;for(const S of Ky){const v=(r=u[S])!==null&&r!==void 0?r:!0,p=(f=c[S])!==null&&f!==void 0?f:!0;Ee(v,p)||(m=!0,v?g[S].enable(v):g[S].disable())}return m}_queryRenderedFeatures(u){const c=this._map,r=c.transform,{interactiveLayerIds:f=[]}=this.props;try{return c.transform=this._renderTransform,c.queryRenderedFeatures(u,{layers:f.filter(c.getLayer.bind(c))})}catch{return[]}finally{c.transform=r}}_updateHover(u){var c;const{props:r}=this;if(r.interactiveLayerIds&&(r.onMouseMove||r.onMouseEnter||r.onMouseLeave)){const g=u.type,m=((c=this._hoveredFeatures)===null||c===void 0?void 0:c.length)>0,S=this._queryRenderedFeatures(u.point),v=S.length>0;!v&&m&&(u.type="mouseleave",this._onPointerEvent(u)),this._hoveredFeatures=S,v&&!m&&(u.type="mouseenter",this._onPointerEvent(u)),u.type=g}else this._hoveredFeatures=null}_fireEvent(u,c,r){const f=this._map,g=f.transform,m=typeof c=="string"?c:c.type;return m==="move"&&this._updateViewState(this.props,!1),m in zc&&(typeof c=="object"&&(c.viewState=cg(g)),this._map.isMoving())?(f.transform=this._renderTransform,u.call(f,c,r),f.transform=g,f):(u.call(f,c,r),f)}_onBeforeRepaint(){const u=this._map;this._internalUpdate=!0;for(const r in this._deferredEvents)this._deferredEvents[r]&&u.fire(r);this._internalUpdate=!1;const c=this._map.transform;u.transform=this._renderTransform,this._onAfterRepaint=()=>{rg(this._renderTransform,c),u.transform=c}}}an.savedMaps=[];function Jy(){let l=null;if(typeof location<"u"){const u=/access_token=([^&\/]*)/.exec(location.search);l=u&&u[1]}try{l=l||dg.MapboxAccessToken}catch{}try{l=l||dg.REACT_APP_MAPBOX_ACCESS_TOKEN}catch{}return l}const Wy=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function Fy(l){if(!l)return null;const u=l.map,c={getMap:()=>u,getCenter:()=>l.transform.center,getZoom:()=>l.transform.zoom,getBearing:()=>l.transform.bearing,getPitch:()=>l.transform.pitch,getPadding:()=>l.transform.padding,getBounds:()=>l.transform.getBounds(),project:r=>{const f=u.transform;u.transform=l.transform;const g=u.project(r);return u.transform=f,g},unproject:r=>{const f=u.transform;u.transform=l.transform;const g=u.unproject(r);return u.transform=f,g},queryTerrainElevation:(r,f)=>{const g=u.transform;u.transform=l.transform;const m=u.queryTerrainElevation(r,f);return u.transform=g,m},queryRenderedFeatures:(r,f)=>{const g=u.transform;u.transform=l.transform;const m=u.queryRenderedFeatures(r,f);return u.transform=g,m}};for(const r of Py(u))!(r in c)&&!Wy.includes(r)&&(c[r]=u[r].bind(u));return c}function Py(l){const u=new Set;let c=l;for(;c;){for(const r of Object.getOwnPropertyNames(c))r[0]!=="_"&&typeof l[r]=="function"&&r!=="fire"&&r!=="setEventedParent"&&u.add(r);c=Object.getPrototypeOf(c)}return Array.from(u)}const Iy=typeof document<"u"?U.useLayoutEffect:U.useEffect,t1=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];function e1(l,u){for(const r of t1)r in u&&(l[r]=u[r]);const{RTLTextPlugin:c="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"}=u;c&&l.getRTLTextPluginStatus&&l.getRTLTextPluginStatus()==="unavailable"&&l.setRTLTextPlugin(c,r=>{r&&console.error(r)},!1)}const nn=U.createContext(null);function a1(l,u,c){const r=U.useContext(Yy),[f,g]=U.useState(null),m=U.useRef(),{current:S}=U.useRef({mapLib:null,map:null});U.useEffect(()=>{const E=l.mapLib;let D=!0,H;return Promise.resolve(E||c).then(G=>{if(!D)return;if(!G)throw new Error("Invalid mapLib");const X="Map"in G?G:G.default;if(!X.Map)throw new Error("Invalid mapLib");if(e1(X,l),!X.supported||X.supported(l))l.reuseMaps&&(H=an.reuse(l,m.current)),H||(H=new an(X.Map,l,m.current)),S.map=Fy(H),S.mapLib=X,g(H),r==null||r.onMapMount(S.map,l.id);else throw new Error("Map is not supported by this browser")}).catch(G=>{const{onError:X}=l;X?X({type:"error",target:null,originalEvent:null,error:G}):console.error(G)}),()=>{D=!1,H&&(r==null||r.onMapUnmount(l.id),l.reuseMaps?H.recycle():H.destroy())}},[]),Iy(()=>{f&&f.setProps(l)}),U.useImperativeHandle(u,()=>S.map,[f]);const v=U.useMemo(()=>({position:"relative",width:"100%",height:"100%",...l.style}),[l.style]),p={height:"100%"};return U.createElement("div",{id:l.id,ref:m,style:v},f&&U.createElement(nn.Provider,{value:S},U.createElement("div",{"mapboxgl-children":"",style:p},l.children)))}var e0=Ag();const l1=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function ul(l,u){if(!l||!u)return;const c=l.style;for(const r in u){const f=u[r];Number.isFinite(f)&&!l1.test(r)?c[r]=`${f}px`:c[r]=f}}function n1(l,u){const{map:c,mapLib:r}=U.useContext(nn),f=U.useRef({props:l});f.current.props=l;const g=U.useMemo(()=>{let nt=!1;U.Children.forEach(l.children,at=>{at&&(nt=!0)});const it={...l,element:nt?document.createElement("div"):null},I=new r.Marker(it);return I.setLngLat([l.longitude,l.latitude]),I.getElement().addEventListener("click",at=>{var K,F;(F=(K=f.current.props).onClick)===null||F===void 0||F.call(K,{type:"click",target:I,originalEvent:at})}),I.on("dragstart",at=>{var K,F;const Z=at;Z.lngLat=g.getLngLat(),(F=(K=f.current.props).onDragStart)===null||F===void 0||F.call(K,Z)}),I.on("drag",at=>{var K,F;const Z=at;Z.lngLat=g.getLngLat(),(F=(K=f.current.props).onDrag)===null||F===void 0||F.call(K,Z)}),I.on("dragend",at=>{var K,F;const Z=at;Z.lngLat=g.getLngLat(),(F=(K=f.current.props).onDragEnd)===null||F===void 0||F.call(K,Z)}),I},[]);U.useEffect(()=>(g.addTo(c.getMap()),()=>{g.remove()}),[]);const{longitude:m,latitude:S,offset:v,style:p,draggable:E=!1,popup:D=null,rotation:H=0,rotationAlignment:G="auto",pitchAlignment:X="auto"}=l;return U.useEffect(()=>{ul(g.getElement(),p)},[p]),U.useImperativeHandle(u,()=>g,[]),(g.getLngLat().lng!==m||g.getLngLat().lat!==S)&&g.setLngLat([m,S]),v&&!Xy(g.getOffset(),v)&&g.setOffset(v),g.isDraggable()!==E&&g.setDraggable(E),g.getRotation()!==H&&g.setRotation(H),g.getRotationAlignment()!==G&&g.setRotationAlignment(G),g.getPitchAlignment()!==X&&g.setPitchAlignment(X),g.getPopup()!==D&&g.setPopup(D),e0.createPortal(l.children,g.getElement())}U.memo(U.forwardRef(n1));function pg(l){return new Set(l?l.trim().split(/\s+/):[])}function i1(l,u){const{map:c,mapLib:r}=U.useContext(nn),f=U.useMemo(()=>document.createElement("div"),[]),g=U.useRef({props:l});g.current.props=l;const m=U.useMemo(()=>{const S={...l},v=new r.Popup(S);return v.setLngLat([l.longitude,l.latitude]),v.once("open",p=>{var E,D;(D=(E=g.current.props).onOpen)===null||D===void 0||D.call(E,p)}),v},[]);if(U.useEffect(()=>{const S=v=>{var p,E;(E=(p=g.current.props).onClose)===null||E===void 0||E.call(p,v)};return m.on("close",S),m.setDOMContent(f).addTo(c.getMap()),()=>{m.off("close",S),m.isOpen()&&m.remove()}},[]),U.useEffect(()=>{ul(m.getElement(),l.style)},[l.style]),U.useImperativeHandle(u,()=>m,[]),m.isOpen()&&((m.getLngLat().lng!==l.longitude||m.getLngLat().lat!==l.latitude)&&m.setLngLat([l.longitude,l.latitude]),l.offset&&!Ee(m.options.offset,l.offset)&&m.setOffset(l.offset),(m.options.anchor!==l.anchor||m.options.maxWidth!==l.maxWidth)&&(m.options.anchor=l.anchor,m.setMaxWidth(l.maxWidth)),m.options.className!==l.className)){const S=pg(m.options.className),v=pg(l.className);for(const p of S)v.has(p)||m.removeClassName(p);for(const p of v)S.has(p)||m.addClassName(p);m.options.className=l.className}return e0.createPortal(l.children,f)}const o1=U.memo(U.forwardRef(i1));function vi(l,u,c,r){const f=U.useContext(nn),g=U.useMemo(()=>l(f),[]);return U.useEffect(()=>{const m=u,S=null,v=typeof u=="function"?u:null,{map:p}=f;return p.hasControl(g)||(p.addControl(g,m==null?void 0:m.position),S&&S(f)),()=>{v&&v(f),p.hasControl(g)&&p.removeControl(g)}},[]),g}function u1(l){const u=vi(({mapLib:c})=>new c.AttributionControl(l),{position:l.position});return U.useEffect(()=>{ul(u._container,l.style)},[l.style]),null}U.memo(u1);function r1(l){const u=vi(({mapLib:c})=>new c.FullscreenControl({container:l.containerId&&document.getElementById(l.containerId)}),{position:l.position});return U.useEffect(()=>{ul(u._controlContainer,l.style)},[l.style]),null}U.memo(r1);function c1(l,u){const c=U.useRef({props:l}),r=vi(({mapLib:f})=>{const g=new f.GeolocateControl(l),m=g._setupUI;return g._setupUI=S=>{g._container.hasChildNodes()||m(S)},g.on("geolocate",S=>{var v,p;(p=(v=c.current.props).onGeolocate)===null||p===void 0||p.call(v,S)}),g.on("error",S=>{var v,p;(p=(v=c.current.props).onError)===null||p===void 0||p.call(v,S)}),g.on("outofmaxbounds",S=>{var v,p;(p=(v=c.current.props).onOutOfMaxBounds)===null||p===void 0||p.call(v,S)}),g.on("trackuserlocationstart",S=>{var v,p;(p=(v=c.current.props).onTrackUserLocationStart)===null||p===void 0||p.call(v,S)}),g.on("trackuserlocationend",S=>{var v,p;(p=(v=c.current.props).onTrackUserLocationEnd)===null||p===void 0||p.call(v,S)}),g},{position:l.position});return c.current.props=l,U.useImperativeHandle(u,()=>r,[]),U.useEffect(()=>{ul(r._container,l.style)},[l.style]),null}U.memo(U.forwardRef(c1));function s1(l){const u=vi(({mapLib:c})=>new c.NavigationControl(l),{position:l.position});return U.useEffect(()=>{ul(u._container,l.style)},[l.style]),null}U.memo(s1);function f1(l){const u=vi(({mapLib:g})=>new g.ScaleControl(l),{position:l.position}),c=U.useRef(l),r=c.current;c.current=l;const{style:f}=l;return l.maxWidth!==void 0&&l.maxWidth!==r.maxWidth&&(u.options.maxWidth=l.maxWidth),l.unit!==void 0&&l.unit!==r.unit&&u.setUnit(l.unit),U.useEffect(()=>{ul(u._container,f)},[f]),null}U.memo(f1);function Wo(l,u){if(!l)throw new Error(u)}function d1(l,u,c,r){if(Wo(c.id===r.id,"layer id changed"),Wo(c.type===r.type,"layer type changed"),c.type==="custom"||r.type==="custom")return;const{layout:f={},paint:g={},filter:m,minzoom:S,maxzoom:v,beforeId:p}=c;if(p!==r.beforeId&&l.moveLayer(u,p),f!==r.layout){const E=r.layout||{};for(const D in f)Ee(f[D],E[D])||l.setLayoutProperty(u,D,f[D]);for(const D in E)f.hasOwnProperty(D)||l.setLayoutProperty(u,D,void 0)}if(g!==r.paint){const E=r.paint||{};for(const D in g)Ee(g[D],E[D])||l.setPaintProperty(u,D,g[D]);for(const D in E)g.hasOwnProperty(D)||l.setPaintProperty(u,D,void 0)}Ee(m,r.filter)||l.setFilter(u,m),(S!==r.minzoom||v!==r.maxzoom)&&l.setLayerZoomRange(u,S,v)}function h1(l,u,c){if(l.style&&l.style._loaded&&(!("source"in c)||l.getSource(c.source))){const r={...c,id:u};delete r.beforeId,l.addLayer(r,c.beforeId)}}let g1=0;function m1(l){const u=U.useContext(nn).map.getMap(),c=U.useRef(l),[,r]=U.useState(0),f=U.useMemo(()=>l.id||`jsx-layer-${g1++}`,[]);if(U.useEffect(()=>{if(u){const m=()=>r(S=>S+1);return u.on("styledata",m),m(),()=>{u.off("styledata",m),u.style&&u.style._loaded&&u.getLayer(f)&&u.removeLayer(f)}}},[u]),u&&u.style&&u.getLayer(f))try{d1(u,f,l,c.current)}catch(m){console.warn(m)}else h1(u,f,l);return c.current=l,null}let p1=0;function y1(l,u,c){if(l.style&&l.style._loaded){const r={...c};return delete r.id,delete r.children,l.addSource(u,r),l.getSource(u)}return null}function b1(l,u,c){Wo(u.id===c.id,"source id changed"),Wo(u.type===c.type,"source type changed");let r="",f=0;for(const m in u)m!=="children"&&m!=="id"&&!Ee(c[m],u[m])&&(r=m,f++);if(!f)return;const g=u.type;if(g==="geojson")l.setData(u.data);else if(g==="image")l.updateImage({url:u.url,coordinates:u.coordinates});else if("setCoordinates"in l&&f===1&&r==="coordinates")l.setCoordinates(u.coordinates);else if("setUrl"in l)switch(r){case"url":l.setUrl(u.url);break;case"tiles":l.setTiles(u.tiles);break}else console.warn(`Unable to update <Source> prop: ${r}`)}function v1(l){const u=U.useContext(nn).map.getMap(),c=U.useRef(l),[,r]=U.useState(0),f=U.useMemo(()=>l.id||`jsx-source-${p1++}`,[]);U.useEffect(()=>{if(u){const m=()=>setTimeout(()=>r(S=>S+1),0);return u.on("styledata",m),m(),()=>{var S;if(u.off("styledata",m),u.style&&u.style._loaded&&u.getSource(f)){const v=(S=u.getStyle())===null||S===void 0?void 0:S.layers;if(v)for(const p of v)p.source===f&&u.removeLayer(p.id);u.removeSource(f)}}}},[u]);let g=u&&u.style&&u.getSource(f);return g?b1(g,l,c.current):g=y1(u,f,l),c.current=l,g&&U.Children.map(l.children,m=>m&&U.cloneElement(m,{source:f}))||null}const x1=ky(()=>import("./mapbox-gl-CAQarPuZ.js").then(l=>l.m),[]),S1=U.forwardRef(function(u,c){return a1(u,c,x1)}),E1=o1,ca=m1,Ho=v1;async function T1(){try{const l=`/gsl-dust-tool/assets/points_with_tracts.csv?v=${Date.now()}`;console.log(`Loading centroid locations from: ${l}`);const u=await fetch(l,{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"}});if(!u.ok)throw new Error(`Failed to fetch centroid locations: ${u.status} ${u.statusText}`);const c=await u.text();console.log("First few lines of loaded data:",c.split(`
`).slice(0,5).join(`
`));const r=c.split(`
`),f=[];for(let m=1;m<r.length;m++){if(!r[m].trim())continue;const S=r[m].split(",").map(p=>p.replace(/"/g,"")),v=M1(S[3].trim());f.push({centroid_name:S[0],lon:parseFloat(S[1]),lat:parseFloat(S[2]),geoid:v})}const g=f.find(m=>m.centroid_name==="centroid_503");return g&&console.log("Centroid 503 data:",g),f}catch(l){return console.error("Error loading centroid locations with tract data:",l),[]}}async function _1(l){try{const u=`/gsl-dust-tool/src/assets/gsl_${l.toFixed(1)}_mASL_centroid_results.csv`;console.log(`Attempting to load PM10 data from: ${u}`);const c=await fetch(u);if(!c.ok)throw new Error(`Failed to fetch PM10 data: ${c.status} ${c.statusText}`);const r=await c.text();if(!r||r.trim().length===0)return console.error(`Empty or invalid PM10 data file for lake level ${l}`),[];const f=r.split(`
`);if(f.length<=1)return console.error(`PM10 data file for lake level ${l} has insufficient data`),[];const g=f[0].split(",").map(S=>S.replace(/"/g,"")),m=[];for(let S=1;S<f.length;S++){if(!f[S].trim())continue;const v=f[S].split(",").map(E=>E.replace(/"/g,"")),p={timestamp:v[0]};for(let E=1;E<g.length;E++)p[g[E]]=parseFloat(v[E]);m.push(p)}return console.log(`Successfully loaded ${m.length} PM10 data points for lake level ${l}`),m}catch(u){return console.error(`Error loading PM10 data for lake level ${l}:`,u),[]}}function z1(l){const[u,c]=U.useState([]),[r,f]=U.useState([]),[g,m]=U.useState(!0),[S,v]=U.useState(null),[p,E]=U.useState(0);return U.useEffect(()=>{let D=!0;const H=2;async function G(){m(!0),v(null);try{const X=await T1();if(!D)return;if(X.length===0)throw new Error("Failed to load centroid locations");c(X);const nt=await _1(l);if(!D)return;if(nt.length===0)throw new Error(`No PM10 data available for lake level ${l}`);f(nt),m(!1),E(0)}catch(X){if(!D)return;const nt=X instanceof Error?X.message:"Failed to load PM10 data";console.error(nt),p<H?(console.log(`Retrying PM10 data load (attempt ${p+1}/${H})`),E(it=>it+1),setTimeout(()=>{D&&G()},1e3)):(v(nt),m(!1))}}return G(),()=>{D=!1}},[l,p]),{centroidLocations:u,pm10Data:r,loading:g,error:S}}function Lc(l){return l*3.28084}const se=[1275,1276,1277,1278,1279,1280,1281,1282];function Fo(l){return l<5?"#7cbf6f":l<10?"#e8db5b":l<15?"#e8a64d":l<20?"#d46457":"#a63c3c"}function M1(l){return l?l.replace(/\D/g,"").slice(-11):""}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A1=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(u,c,r)=>r?r.toUpperCase():c.toLowerCase()),yg=l=>{const u=A1(l);return u.charAt(0).toUpperCase()+u.slice(1)},a0=(...l)=>l.filter((u,c,r)=>!!u&&u.trim()!==""&&r.indexOf(u)===c).join(" ").trim(),j1=l=>{for(const u in l)if(u.startsWith("aria-")||u==="role"||u==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var O1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=U.forwardRef(({color:l="currentColor",size:u=24,strokeWidth:c=2,absoluteStrokeWidth:r,className:f="",children:g,iconNode:m,...S},v)=>U.createElement("svg",{ref:v,...O1,width:u,height:u,stroke:l,strokeWidth:r?Number(c)*24/Number(u):c,className:a0("lucide",f),...!g&&!j1(S)&&{"aria-hidden":"true"},...S},[...m.map(([p,E])=>U.createElement(p,E)),...Array.isArray(g)?g:[g]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=(l,u)=>{const c=U.forwardRef(({className:r,...f},g)=>U.createElement(R1,{ref:g,iconNode:u,className:a0(`lucide-${w1(yg(l))}`,`lucide-${l}`,r),...f}));return c.displayName=yg(l),c};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],l0=on("circle-help",D1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],C1=on("github",$1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],U1=on("info",N1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],L1=on("map-pin",H1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],q1=on("message-square",B1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],k1=on("play",G1),Y1=O.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${({theme:l})=>l.colors.snowbirdWhite};
  margin-top: 60px;
`;O.div`
  background-color: ${({theme:l})=>l.colors.snowbirdWhite};
  color: ${({theme:l})=>l.colors.olympicParkObsidian};
  padding: ${({theme:l})=>l.spacing.md} ${({theme:l})=>l.spacing.lg};
  font-family: ${({theme:l})=>l.typography.fontFamily};
  z-index: ${({theme:l})=>l.zIndices.mapOverlays};
  position: absolute;
  top: ${({theme:l})=>l.spacing.md};
  left: ${({theme:l})=>l.spacing.md};
  margin: 0;
  border-radius: ${({theme:l})=>l.borderRadius.md};
  box-shadow: ${({theme:l})=>l.shadows.md};
  max-width: 280px;
  border: 2px solid ${({theme:l})=>l.colors.moabMahogany};
  
  h1 {
    font-family: ${({theme:l})=>l.typography.displayFont};
    font-weight: ${({theme:l})=>l.typography.weights.semiBold};
    margin-bottom: ${({theme:l})=>l.spacing.md};
    font-size: 28px;
    letter-spacing: 1.5px;
    margin-top: 0;
  }
  
  > div {
    margin-bottom: ${({theme:l})=>l.spacing.xs};
    font-weight: ${({theme:l})=>l.typography.weights.regular};
    font-size: ${({theme:l})=>l.typography.sizes.body};
    letter-spacing: 0.5px;
  }
`;O.div`
  position: absolute;
  top: ${({theme:l})=>l.spacing.md};
  right: ${({theme:l})=>l.spacing.md};
  z-index: ${({theme:l})=>l.zIndices.mapControls};
  background: ${({theme:l})=>l.colors.snowbirdWhite};
  padding: ${({theme:l})=>l.spacing.sm};
  border-radius: ${({theme:l})=>l.borderRadius.md};
  box-shadow: ${({theme:l})=>l.shadows.md};
  max-width: 250px;
  max-height: 70vh;
  overflow-y: auto;
  border: 2px solid ${({theme:l})=>l.colors.moabMahogany};
  
  h2 {
    margin-top: 0;
    margin-bottom: ${({theme:l})=>l.spacing.xs};
    color: ${({theme:l})=>l.colors.moabMahogany};
    font-size: 16px;
    font-weight: ${({theme:l})=>l.typography.weights.semiBold};
    letter-spacing: 1px;
    border-bottom: 1px solid ${({theme:l})=>l.colors.moabMahogany};
    padding-bottom: ${({theme:l})=>l.spacing.xs};
    font-family: ${({theme:l})=>l.typography.displayFont};
  }
  
  h3 {
    margin-top: 0;
    margin-bottom: ${({theme:l})=>l.spacing.xs};
    color: ${({theme:l})=>l.colors.olympicParkObsidian};
    font-size: 13px;
    font-weight: ${({theme:l})=>l.typography.weights.regular};
    letter-spacing: 1px;
    font-family: ${({theme:l})=>l.typography.fontFamily};
  }
`;O.div`
  margin-bottom: ${({theme:l})=>l.spacing.sm};
  
  label {
    display: block;
    margin-bottom: 0;
    font-weight: ${({theme:l})=>l.typography.weights.regular};
    color: ${({theme:l})=>l.colors.olympicParkObsidian};
    letter-spacing: 0.5px;
    font-size: 12px;
  }
  
  p {
    margin-bottom: ${({theme:l})=>l.spacing.xs};
    color: ${({theme:l})=>l.colors.textSecondary};
    font-size: 11px;
    font-weight: ${({theme:l})=>l.typography.weights.regular};
    letter-spacing: 0.5px;
  }
  
  .highlight {
    color: ${({theme:l})=>l.colors.moabMahogany};
    font-weight: ${({theme:l})=>l.typography.weights.medium};
  }
`;O.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  padding: 2px 0;
  
  input {
    margin-right: ${({theme:l})=>l.spacing.xs};
    width: auto;
    cursor: pointer;
    height: 14px;
    width: 14px;
    accent-color: ${({theme:l})=>l.colors.moabMahogany};
  }
  
  label {
    margin-bottom: 0;
    cursor: pointer;
    text-transform: none;
    letter-spacing: 0.5px;
    font-weight: ${({theme:l})=>l.typography.weights.regular};
  }
`;O.div`
  margin-top: ${({theme:l})=>l.spacing.xs};
  padding-top: ${({theme:l})=>l.spacing.xs};
  border-top: 1px solid ${({theme:l})=>l.colors.moabMahogany};
  
  p {
    margin-bottom: ${({theme:l})=>l.spacing.xs};
    font-size: 11px;
    font-weight: ${({theme:l})=>l.typography.weights.regular};
    letter-spacing: 0.5px;
  }
  
  .highlight {
    color: ${({theme:l})=>l.colors.moabMahogany};
    font-weight: ${({theme:l})=>l.typography.weights.medium};
  }
`;O.div`
  font-size: 11px;
  margin-bottom: ${({theme:l})=>l.spacing.sm};
  background-color: rgba(249, 246, 239, 0.95);
  padding: ${({theme:l})=>l.spacing.xs};
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  border-left: 2px solid ${({theme:l})=>l.colors.moabMahogany};
  
  h4 {
    color: ${({theme:l})=>l.colors.moabMahogany};
    margin-top: ${({theme:l})=>l.spacing.xxs};
    margin-bottom: ${({theme:l})=>l.spacing.xs};
    font-size: 12px;
    font-weight: ${({theme:l})=>l.typography.weights.semiBold};
    letter-spacing: 0.5px;
    font-family: ${({theme:l})=>l.typography.displayFont};
  }
`;O.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({theme:l})=>l.spacing.xxs};
  font-weight: ${({theme:l})=>l.typography.weights.regular};
  font-size: 11px;
  letter-spacing: 0.5px;
`;O.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: ${({theme:l})=>l.spacing.xs};
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  border: 1px solid rgba(117, 29, 12, 0.3);
`;const X1=O.div`
  position: absolute;
  left: ${({theme:l})=>l.spacing.md};
  top: ${({theme:l})=>l.spacing.md};  /* Position from top */
  background: ${({theme:l})=>l.colors.snowbirdWhite};
  padding: ${({theme:l})=>l.spacing.md};
  border-radius: ${({theme:l})=>l.borderRadius.md};
  box-shadow: ${({theme:l})=>l.shadows.md};
  z-index: ${({theme:l})=>l.zIndices.mapControls};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  border: 2px solid ${({theme:l})=>l.colors.moabMahogany};
  background: linear-gradient(
    to bottom,
    rgba(249, 246, 239, 1),
    rgba(249, 246, 239, 0.9)
  );
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;O.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 10px;
  margin: 4px 0;

  /* Enhanced slider track visual */
  &:before {
    content: '';
    position: absolute;
    height: 160px;
    width: 6px;
    background: linear-gradient(to bottom,
      rgba(210, 180, 140, 0.5),
      rgba(117, 29, 12, 0.5)
    );
    border-radius: 3px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  input[type="range"] {
    margin: ${({theme:l})=>l.spacing.xs} 0;
    cursor: pointer;
    position: relative;
    z-index: 10;
    writing-mode: vertical-lr;
    direction: rtl;
    accent-color: ${({theme:l})=>l.colors.moabMahogany};
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    width: 28px;
    height: 160px;
    padding: 0;

    &::-webkit-slider-runnable-track {
      height: 6px;
      background: linear-gradient(to top,
        rgba(117, 29, 12, 0.7),
        rgba(210, 180, 140, 0.7)
      );
      border-radius: 3px;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2),
                  0 0 5px rgba(255, 255, 255, 0.5);
      border: 1px solid rgba(117, 29, 12, 0.4);
    }

    &::-moz-range-track {
      height: 6px;
      background: linear-gradient(to top,
        rgba(117, 29, 12, 0.7),
        rgba(210, 180, 140, 0.7)
      );
      border-radius: 3px;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2),
                  0 0 5px rgba(255, 255, 255, 0.5);
      border: 1px solid rgba(117, 29, 12, 0.4);
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: ${({theme:l})=>l.colors.moabMahogany};
      border: 2px solid ${({theme:l})=>l.colors.snowbirdWhite};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      margin-top: -8px;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;

      /* Inner highlight effect */
      &::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
      }

      &:hover {
        background: ${({theme:l})=>l.colors.olympicParkObsidian};
        transform: scale(1.15);
        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);
      }

      &:active {
        transform: scale(0.95);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
    }

    &::-moz-range-thumb {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: ${({theme:l})=>l.colors.moabMahogany};
      border: 2px solid ${({theme:l})=>l.colors.snowbirdWhite};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: ${({theme:l})=>l.colors.olympicParkObsidian};
        transform: scale(1.15);
        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);
      }

      &:active {
        transform: scale(0.95);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
    }

    /* Focus state */
    &:focus {
      outline: none;

      &::-webkit-slider-thumb {
        box-shadow: 0 0 0 3px rgba(117, 29, 12, 0.2), 0 2px 5px rgba(0, 0, 0, 0.3);
      }

      &::-moz-range-thumb {
        box-shadow: 0 0 0 3px rgba(117, 29, 12, 0.2), 0 2px 5px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;O.div`
  font-size: 11px;
  color: ${({theme:l})=>l.colors.olympicParkObsidian};
  font-weight: ${({theme:l})=>l.typography.weights.medium};
  margin: 2px 0;
`;O.div`
  font-size: 14px;
  color: ${({theme:l})=>l.colors.moabMahogany};
  font-weight: ${({theme:l})=>l.typography.weights.semiBold};
  margin-top: 4px;
  padding: 4px 8px;
  background: white;
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;O.div`
  position: absolute;
  width: 12px;
  height: 100%;
  margin-left: ${({theme:l})=>l.spacing.xxs};
`;O.div`
  position: absolute;
  bottom: ${l=>l.$bottom};
  transform: translateY(50%);
  width: ${l=>l.$isSelected?"18px":"8px"};
  height: ${l=>l.$isSelected?"4px":"2px"};
  background-color: ${l=>l.$isSelected?l.theme.colors.moabMahogany:"rgba(117, 29, 12, 0.4)"};
  border-radius: ${l=>l.$isSelected?"2px":"1px"};
  left: 0;
  transition: all 0.2s ease;

  /* Add glow effect for selected tick */
  ${l=>l.$isSelected&&`
    box-shadow: 0 0 4px rgba(117, 29, 12, 0.3);
  `}

  /* Add hover effect for non-selected ticks */
  ${l=>!l.$isSelected&&`
    &:hover {
      width: 12px;
      background-color: rgba(117, 29, 12, 0.6);
    }
  `}
`;O.span`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  font-size: ${l=>l.$isSelected?"11px":"9px"};
  color: ${l=>l.$isSelected?l.theme.colors.moabMahogany:l.theme.colors.olympicParkObsidian};
  font-weight: ${l=>l.$isSelected?l.theme.typography.weights.semiBold:l.theme.typography.weights.regular};
  white-space: nowrap;
  left: 22px;
  pointer-events: none;
  transition: all 0.15s ease;
  opacity: ${l=>l.$isSelected?1:.8};

  /* Add text glow for selected label */
  ${l=>l.$isSelected&&`
    text-shadow: 0 0 1px rgba(117, 29, 12, 0.2);
    letter-spacing: 0.02em;
  `}
`;O.select`
  width: 100%;
  padding: ${({theme:l})=>l.spacing.xs} ${({theme:l})=>l.spacing.sm};
  border: 1px solid ${({theme:l})=>l.colors.moabMahogany};
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  background-color: ${({theme:l})=>l.colors.snowbirdWhite};
  color: ${({theme:l})=>l.colors.olympicParkObsidian};
  font-family: ${({theme:l})=>l.typography.fontFamily};
  font-size: ${({theme:l})=>l.typography.sizes.body};
  font-weight: ${({theme:l})=>l.typography.weights.regular};
  letter-spacing: 0.5px;
  margin-bottom: ${({theme:l})=>l.spacing.md};
  
  &:focus {
    outline: none;
    border-color: ${({theme:l})=>l.colors.moabMahogany};
    box-shadow: 0 0 0 2px rgba(117, 29, 12, 0.2);
  }
`;O.button`
  padding: ${({theme:l})=>l.spacing.xs} ${({theme:l})=>l.spacing.md};
  background-color: ${({theme:l})=>l.colors.moabMahogany};
  color: ${({theme:l})=>l.colors.snowbirdWhite};
  border: none;
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  font-family: ${({theme:l})=>l.typography.fontFamily};
  font-size: ${({theme:l})=>l.typography.sizes.body};
  font-weight: ${({theme:l})=>l.typography.weights.medium};
  cursor: pointer;
  transition: ${({theme:l})=>l.transitions.fast};
  
  &:hover {
    background-color: rgba(117, 29, 12, 0.8);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;const Z1=O.div`
  padding: ${({theme:l})=>l.spacing.sm};
  
  h4 {
    font-size: ${({theme:l})=>l.typography.sizes.body};
    font-weight: ${({theme:l})=>l.typography.weights.semiBold};
    margin-bottom: ${({theme:l})=>l.spacing.xs};
    color: ${({theme:l})=>l.colors.moabMahogany};
    font-family: ${({theme:l})=>l.typography.displayFont};
  }
  
  p {
    font-size: ${({theme:l})=>l.typography.sizes.small};
    margin-bottom: ${({theme:l})=>l.spacing.xs};
    font-weight: ${({theme:l})=>l.typography.weights.regular};
  }
  
  .highlight {
    color: ${({theme:l})=>l.colors.moabMahogany};
    font-weight: ${({theme:l})=>l.typography.weights.medium};
  }
`,Mc=O.div`
  height: 6px;
  width: 100%;
  background-color: ${({backgroundColor:l})=>l};
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  margin-top: ${({theme:l})=>l.spacing.xs};
`,Q1=O.div`
  position: absolute;
  left: ${({theme:l})=>l.spacing.md};
  top: calc(${({theme:l})=>l.spacing.md} + var(--lake-level-height) + 20px);  /* Position relative to LakeLevelSlider height */
  background: ${({theme:l})=>l.colors.snowbirdWhite};
  padding: ${({theme:l})=>l.spacing.md};
  border-radius: ${({theme:l})=>l.borderRadius.md};
  box-shadow: ${({theme:l})=>l.shadows.md};
  z-index: ${({theme:l})=>l.zIndices.mapControls};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  border: 2px solid ${({theme:l})=>l.colors.moabMahogany};
  background: linear-gradient(
    to bottom,
    rgba(249, 246, 239, 1),
    rgba(249, 246, 239, 0.9)
  );
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  max-height: calc(100vh - var(--lake-level-height) - ${({theme:l})=>l.spacing.md} * 3 - 20px);
`;O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #f9f6ef;
  border-radius: 12px;
  padding: 8px 6px;
  margin-bottom: 12px;
  border: none;
  box-shadow: none;

  h3 {
    margin: 0;
    color: ${({theme:l})=>l.colors.moabMahogany};
    font-size: 26px;
    font-weight: ${({theme:l})=>l.typography.weights.semiBold};
    font-family: ${({theme:l})=>l.typography.displayFont};
    letter-spacing: 1.2px;
    margin-bottom: 6px;
  }

  span {
    color: ${({theme:l})=>l.colors.olympicParkObsidian};
    font-weight: ${({theme:l})=>l.typography.weights.medium};
    font-size: 14px;
    font-family: ${({theme:l})=>l.typography.fontFamily};
    background: #fff;
    padding: 4px 10px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(224,183,164,0.08);
    margin-bottom: 6px;
    margin-top: 2px;
    min-width: 80px;
    text-align: center;
    display: inline-block;
  }
`;O.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 10px;
  margin: 4px 0;

  input[type="range"] {
    margin: ${({theme:l})=>l.spacing.xs} 0;
    cursor: pointer;
    position: relative;
    z-index: 10;
    writing-mode: vertical-lr;
    direction: rtl;
    accent-color: ${({theme:l})=>l.colors.moabMahogany};
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    width: 20px;
    height: 200px;
    padding: 0;
  }
`;O.div`
  position: absolute;
  width: 16px;
  height: 100%;
  margin-left: ${({theme:l})=>l.spacing.xxs};
`;O.div`
  position: absolute;
  bottom: ${l=>l.$left};
  transform: translateY(50%);
  width: ${l=>l.$isSelected?"16px":"6px"};
  height: ${l=>l.$isSelected?"4px":"1px"};
  background-color: ${l=>l.$isSelected?"#D2B48C":l.theme.colors.moabMahogany}; // Mahogany for other ticks
  box-shadow: ${l=>l.$isSelected?"0 0 10px 3px rgba(210,180,140,0.45)":"none"};
  border-radius: 2px;
  left: 0;
`;O.span`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  font-size: ${l=>l.$isSelected?"11px":"9px"};
  color: ${l=>l.$isSelected?l.theme.colors.moabMahogany:l.theme.colors.olympicParkObsidian};
  font-weight: ${l=>l.$isSelected?l.theme.typography.weights.semiBold:l.theme.typography.weights.regular};
  white-space: nowrap;
  left: ${l=>l.$labelPosition==="above"?"22px":"-18px"};
  right: ${l=>l.$labelPosition==="above"?"unset":"22px"};
  pointer-events: none;
`;O.div`
  position: absolute;
  left: ${({theme:l})=>l.spacing.md};
  bottom: 100px;
  z-index: ${({theme:l})=>l.zIndices.mapControls};
  background: ${({theme:l})=>l.colors.snowbirdWhite};
  padding: ${({theme:l})=>l.spacing.sm};
  border-radius: ${({theme:l})=>l.borderRadius.md};
  box-shadow: ${({theme:l})=>l.shadows.md};
  max-width: 320px;
  border: 2px solid ${({theme:l})=>l.colors.moabMahogany};
  background: linear-gradient(
    to bottom,
    rgba(249, 246, 239, 1),
    rgba(249, 246, 239, 0.9)
  );
`;const V1="pk.eyJ1IjoicGt1bGFuZGgiLCJhIjoiY20xNGZqbDBiMHhmdzJucHd5OTA4d2h2bCJ9.J6GeFa6bPfwMKqufI9L3MA",K1={styleUrl:"mapbox://styles/pkulandh/cm9iyi6qq00jo01rce7xjcfay"},J1=l=>l<=.3?"#feb24c":l<=.6?"#fc4e2a":l<=.94?"#bd0026":"#800026",W1=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({theme:l})=>l.colors.snowbirdWhite};
  border-radius: 12px;
  padding: 2px;
  margin-bottom: 0px;
  border: none;
  box-shadow: none;

  h3 {
    margin: 0;
    color: ${({theme:l})=>l.colors.moabMahogany};
    font-size: 26px;
    font-weight: ${({theme:l})=>l.typography.weights.semiBold};
    font-family: ${({theme:l})=>l.typography.displayFont};
    letter-spacing: 1.2px;
    margin-bottom: 0px;
  }

  .level-display {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 0px;

    span {
      color: ${({theme:l})=>l.colors.olympicParkObsidian};
      font-weight: ${({theme:l})=>l.typography.weights.semiBold};
      font-size: 16px;
      font-family: ${({theme:l})=>l.typography.fontFamily};
      background: #fff;
      padding: 2px 8px;
      border-radius: 6px;
      box-shadow: 0 1px 3px rgba(224,183,164,0.08);
      text-align: center;
      line-height: 1.2;
      min-width: 80px;
    }

    .masl {
      opacity: 0.8;
    }
  }
`,F1=O.hr`
  width: 100%;
  border: none;
  height: 2px;
  background-color: ${({theme:l})=>l.colors.moabMahogany};
  margin: 8px 0;
`,bg=O.button`
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin: ${({theme:l})=>l.spacing.xs} 0;
  background-color: ${({theme:l})=>l.colors.moabMahogany};
  color: ${({theme:l})=>l.colors.snowbirdWhite};
  border: 2px solid ${({theme:l})=>l.colors.snowbirdWhite};
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: scale(1.1);
    background-color: ${({theme:l})=>l.colors.moabMahogany};
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,vg=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4px 0;
  width: 100%;
  padding: 0 10px;
`,P1=O.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4px 10px;
  margin: 2px 0;

  /* Slider track - base color with subtle gradient */
  &:before {
    content: '';
    position: absolute;
    height: 140px;
    width: 8px;
    background: linear-gradient(to bottom,
      rgba(224, 224, 224, 0.8),
      rgba(200, 200, 200, 0.9)
    );
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  /* Water level fill overlay with depth gradient */
  &:after {
    content: '';
    position: absolute;
    width: 8px;
    background: linear-gradient(to bottom,
      rgba(74, 144, 226, 0.7),  /* Lighter blue at top */
      rgba(41, 98, 166, 0.9)    /* Darker blue at bottom */
    );
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;  /* Fixed position at bottom */
    height: ${l=>(l.$value-l.$min)/(l.$max-l.$min)*140}px;
    transition: all 0.2s ease;
    z-index: 2;
    box-shadow: 0 1px 3px rgba(74, 144, 226, 0.3);
  }

  input[type="range"] {
    margin: ${({theme:l})=>l.spacing.xs} 0;
    cursor: pointer;
    position: relative;
    z-index: 10;
    writing-mode: vertical-lr;
    direction: rtl;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    width: 32px;
    height: 140px;
    padding: 0;

    &::-webkit-slider-runnable-track {
      height: 8px;
      background: transparent; 
      border-radius: 4px;
    }

    &::-moz-range-track {
      height: 8px;
      background: transparent;
      border-radius: 4px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: linear-gradient(135deg,
        ${({theme:l})=>l.colors.moabMahogany},
        ${({theme:l})=>l.colors.moabMahogany} 60%,
        rgba(117, 29, 12, 0.9)
      );
      border: 2px solid ${({theme:l})=>l.colors.snowbirdWhite};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      margin-top: -8px;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      z-index: 15;

      &:hover {
        background: linear-gradient(135deg,
          ${({theme:l})=>l.colors.olympicParkObsidian},
          ${({theme:l})=>l.colors.olympicParkObsidian} 60%,
          rgba(33, 33, 33, 0.9)
        );
        transform: scale(1.15);
        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);
      }

      &:active {
        transform: scale(0.95);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
    }

    &::-moz-range-thumb {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: linear-gradient(135deg,
        ${({theme:l})=>l.colors.moabMahogany},
        ${({theme:l})=>l.colors.moabMahogany} 60%,
        rgba(117, 29, 12, 0.9)
      );
      border: 2px solid ${({theme:l})=>l.colors.snowbirdWhite};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: linear-gradient(135deg,
          ${({theme:l})=>l.colors.olympicParkObsidian},
          ${({theme:l})=>l.colors.olympicParkObsidian} 60%,
          rgba(33, 33, 33, 0.9)
        );
        transform: scale(1.15);
        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);
      }

      &:active {
        transform: scale(0.95);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
    }

    /* Focus state */
    &:focus {
      outline: none;

      &::-webkit-slider-thumb {
        box-shadow: 0 0 0 3px rgba(117, 29, 12, 0.2), 0 2px 5px rgba(0, 0, 0, 0.3);
      }

      &::-moz-range-thumb {
        box-shadow: 0 0 0 3px rgba(117, 29, 12, 0.2), 0 2px 5px rgba(0, 0, 0, 0.3);
      }
    }
  }
`,I1=O.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`,tb=O.div`
  position: absolute;
  bottom: ${l=>l.$bottom};
  transform: translateY(50%);
  width: ${l=>l.$isSelected?"32px":"12px"};
  height: ${l=>l.$isSelected?"5px":"2px"};
  background-color: ${l=>l.$isSelected?l.theme.colors.moabMahogany:"rgba(117, 29, 12, 0.4)"};
  border-radius: ${l=>l.$isSelected?"2.5px":"1px"};
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  transition: all 0.2s ease;

  /* Add glow effect for selected tick */
  ${l=>l.$isSelected&&`
    box-shadow: 0 0 6px rgba(117, 29, 12, 0.4);
  `}

  /* Add hover effect for non-selected ticks */
  ${l=>!l.$isSelected&&`
    &:hover {
      width: 16px;
      background-color: rgba(117, 29, 12, 0.6);
    }
  `}
`,xg=O.span`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  font-size: ${l=>l.$isSelected?"13px":"9px"};
  color: ${l=>l.$isSelected?l.theme.colors.moabMahogany:l.theme.colors.olympicParkObsidian};
  font-weight: ${l=>l.$isSelected?"700":l.theme.typography.weights.regular};
  white-space: nowrap;
  ${l=>l.$side==="left"?"right: calc(50% + 26px);":"left: calc(50% + 26px);"}
  text-align: ${l=>l.$side==="left"?"right":"left"};
  pointer-events: none;
  transition: all 0.15s ease;
  opacity: ${l=>l.$isSelected?1:.7};
  line-height: 1.2;

  /* Add text glow for selected label */
  ${l=>l.$isSelected&&`
    text-shadow: 0 0 1px rgba(117, 29, 12, 0.3);
    letter-spacing: 0.03em;
  `}
`,eb=O.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 80px);
  padding: 0px 0;
`;function ab({selectedLakeLevel:l,handleElevationChange:u,showBathymetry:c}){const r=se[0],f=se[se.length-1],[g,m]=U.useState(0),S=U.useRef(null);U.useEffect(()=>{const E=se.findIndex(D=>Math.abs(D-l)<.1);E!==-1&&m(E)},[l]),U.useEffect(()=>{if(S.current){const E=S.current.offsetHeight;document.documentElement.style.setProperty("--lake-level-height",`${E}px`)}},[c]);const v=()=>{if(g<se.length-1){const D={target:{value:se[g+1].toString()}};u(D)}},p=()=>{if(g>0){const D={target:{value:se[g-1].toString()}};u(D)}};return c?h.jsxs(X1,{ref:S,children:[h.jsxs(W1,{children:[h.jsx("h3",{children:"LAKE LEVEL"}),h.jsx("div",{className:"level-display",children:h.jsxs("span",{children:[Lc(l).toFixed(1)," ft"]})})]}),h.jsx(F1,{}),h.jsxs(eb,{children:[h.jsx(vg,{children:h.jsx(bg,{onClick:v,disabled:g>=se.length-1,title:"Increase lake level",children:"+"})}),h.jsxs(P1,{$value:l,$min:r,$max:f,children:[h.jsx("input",{type:"range",min:r,max:f,step:(f-r)/(se.length-1),value:l,onChange:u,className:"vertical-slider",style:{zIndex:5}}),h.jsx(I1,{children:se.map(E=>{let H=(E-r)/(f-r)*100;E===r&&(H=0),E===f&&(H=100);const G=Math.abs(E-l)<.1;return h.jsxs(tb,{$bottom:`${H}%`,$isSelected:G,children:[h.jsxs(xg,{$isSelected:G,$side:"left",children:[E.toFixed(1)," mASL"]}),h.jsxs(xg,{$isSelected:G,$side:"right",children:[Lc(E).toFixed(1)," ft"]})]},E)})})]}),h.jsx(vg,{children:h.jsx(bg,{onClick:p,disabled:g<=0,title:"Decrease lake level",children:"-"})})]})]}):null}const lb=O.div`
  position: absolute;
  top: ${({theme:l})=>l.spacing.md};
  right: ${({theme:l})=>l.spacing.md};
  z-index: ${({theme:l})=>l.zIndices.mapControls};
  background: ${({theme:l})=>l.colors.snowbirdWhite};
  padding: ${({theme:l})=>l.spacing.sm};
  border-radius: ${({theme:l})=>l.borderRadius.md};
  box-shadow: ${({theme:l})=>l.shadows.md};
  max-width: 250px;
  max-height: 70vh;
  overflow-y: auto;
  border: 1px solid ${({theme:l})=>l.colors.moabMahogany};
  
  h2 {
    margin-top: 0;
    margin-bottom: ${({theme:l})=>l.spacing.xs};
    color: ${({theme:l})=>l.colors.moabMahogany};
    font-size: 16px;
    font-weight: ${({theme:l})=>l.typography.weights.semiBold};
    letter-spacing: 1px;
    border-bottom: 1px solid ${({theme:l})=>l.colors.moabMahogany};
    padding-bottom: ${({theme:l})=>l.spacing.xs};
    font-family: ${({theme:l})=>l.typography.displayFont};
  }
  
  h3 {
    margin-top: 0;
    margin-bottom: ${({theme:l})=>l.spacing.xs};
    color: ${({theme:l})=>l.colors.olympicParkObsidian};
    font-size: 13px;
    font-weight: ${({theme:l})=>l.typography.weights.regular};
    letter-spacing: 1px;
    font-family: ${({theme:l})=>l.typography.fontFamily};
  }
`,nb=O.div`
  margin-bottom: ${({theme:l})=>l.spacing.sm};
  padding-left: 4px;
  
  h3 {
    margin-top: 0;
    margin-bottom: 12px;
    margin-left: -4px;
    color: ${({theme:l})=>l.colors.olympicParkObsidian};
    font-size: 13px;
    font-weight: ${({theme:l})=>l.typography.weights.semiBold};
    letter-spacing: 1px;
    font-family: ${({theme:l})=>l.typography.fontFamily};
  }
  
  label {
    display: block;
    margin-bottom: 0;
    font-weight: ${({theme:l})=>l.typography.weights.regular};
    color: ${({theme:l})=>l.colors.olympicParkObsidian};
    letter-spacing: 0.5px;
    font-size: 12px;
  }
  
  p {
    margin-bottom: ${({theme:l})=>l.spacing.xs};
    color: ${({theme:l})=>l.colors.textSecondary};
    font-size: 11px;
    font-weight: ${({theme:l})=>l.typography.weights.regular};
    letter-spacing: 0.5px;
  }
  
  .highlight {
    color: ${({theme:l})=>l.colors.moabMahogany};
    font-weight: ${({theme:l})=>l.typography.weights.medium};
  }
`,ri=O.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 4px 0;
  
  input {
    margin-right: ${({theme:l})=>l.spacing.xs};
    flex-shrink: 0;
    cursor: pointer;
    height: 14px;
    width: 14px;
    accent-color: ${({theme:l})=>l.colors.moabMahogany};
  }
  
  label {
    margin-bottom: 0;
    cursor: pointer;
    text-transform: none;
    letter-spacing: 0.5px;
    font-weight: ${({theme:l})=>l.typography.weights.regular};
    line-height: 1.3;
  }
`,ib=O.div`
  margin-top: ${({theme:l})=>l.spacing.xs};
  padding-top: ${({theme:l})=>l.spacing.xs};
  border-top: 1px solid ${({theme:l})=>l.colors.moabMahogany};
  
  p {
    margin-bottom: ${({theme:l})=>l.spacing.xs};
    font-size: 11px;
    font-weight: ${({theme:l})=>l.typography.weights.regular};
    letter-spacing: 0.5px;
  }
  
  .highlight {
    color: ${({theme:l})=>l.colors.moabMahogany};
    font-weight: ${({theme:l})=>l.typography.weights.medium};
  }
`,Sg=O.div`
  font-size: 11px;
  margin-bottom: ${({theme:l})=>l.spacing.sm};
  background-color: rgba(249, 246, 239, 0.95);
  padding: ${({theme:l})=>l.spacing.sm};
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  border-left: 2px solid ${({theme:l})=>l.colors.moabMahogany};
  
  h4 {
    color: ${({theme:l})=>l.colors.moabMahogany};
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 12px;
    font-weight: ${({theme:l})=>l.typography.weights.semiBold};
    letter-spacing: 0.5px;
    font-family: ${({theme:l})=>l.typography.displayFont};
  }
`,sa=O.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-weight: ${({theme:l})=>l.typography.weights.regular};
  font-size: 11px;
  letter-spacing: 0.5px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,fa=O.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: ${({theme:l})=>l.spacing.sm};
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  border: 1px solid rgba(117, 29, 12, 0.3);
`;function ob({layers:l,toggleLayer:u}){return h.jsxs(lb,{children:[h.jsx("h2",{children:"MAP CONTROLS"}),h.jsxs(nb,{children:[h.jsx("h3",{children:"DATA LAYERS"}),h.jsxs(ri,{children:[h.jsx("input",{type:"checkbox",checked:l.satellite,onChange:()=>u("satellite"),id:"satellite-layer"}),h.jsx("label",{htmlFor:"satellite-layer",children:"Satellite Imagery"})]}),h.jsxs(ri,{children:[h.jsx("input",{type:"checkbox",checked:l.bathymetry,onChange:()=>u("bathymetry"),id:"bathymetry-layer"}),h.jsx("label",{htmlFor:"bathymetry-layer",children:"Lake Bathymetry"})]}),h.jsxs(ri,{children:[h.jsx("input",{type:"checkbox",checked:l.censusTracts,onChange:()=>u("censusTracts"),id:"census-tracts-layer"}),h.jsx("label",{htmlFor:"census-tracts-layer",children:"Census Tracts"})]}),h.jsxs(ri,{children:[h.jsx("input",{type:"checkbox",checked:l.pm10Data,onChange:()=>u("pm10Data"),id:"pm10-layer"}),h.jsx("label",{htmlFor:"pm10-layer",children:"PM10 Concentrations"})]}),h.jsxs(ri,{children:[h.jsx("input",{type:"checkbox",checked:l.erodibility,onChange:()=>u("erodibility"),id:"erodibility-layer"}),h.jsx("label",{htmlFor:"erodibility-layer",children:"Soil Erodibility"})]})]}),h.jsxs(ib,{style:{marginTop:"4px",paddingTop:"4px"},children:[(l.pm10Data||l.censusTracts)&&h.jsxs(Sg,{children:[h.jsx("h4",{children:"PM10 SCALE"}),h.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#7cbf6f"}}),h.jsx("span",{children:"< 5 µg/m³"})]}),h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#e8db5b"}}),h.jsx("span",{children:"5-10 µg/m³"})]}),h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#e8a64d"}}),h.jsx("span",{children:"10-15 µg/m³"})]}),h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#d46457"}}),h.jsx("span",{children:"15-20 µg/m³"})]}),h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#a63c3c"}}),h.jsx("span",{children:"> 20 µg/m³"})]})]})]}),l.erodibility&&h.jsxs(Sg,{children:[h.jsx("h4",{children:"SOIL ERODIBILITY"}),h.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#feb24c"}}),h.jsx("span",{children:"0.2 - 0.3"})]}),h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#fc4e2a"}}),h.jsx("span",{children:"0.3 - 0.6"})]}),h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#bd0026"}}),h.jsx("span",{children:"0.6 - 0.94"})]}),h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#800026"}}),h.jsx("span",{children:"≥ 0.94"})]})]})]})]})]})}function ub({layers:l,selectedElevation:u,selectedTimestampIndex:c,pm10Data:r,centroidLocations:f,getPM10Points:g,loading:m}){return h.jsxs(h.Fragment,{children:[l.censusTracts&&h.jsxs(Ho,{id:"census-tracts-source",type:"vector",url:"mapbox://pkulandh.7y35kkod",children:[h.jsx(ca,{id:"census-tracts-all-fill",type:"fill","source-layer":"UT_CensusTracts-cgq3a0",paint:{"fill-color":["match",["get","GEOID20"],...(()=>{const S={};return!m&&r&&r.length>0&&c<r.length&&f.filter(v=>v.geoid).forEach(v=>{if(v.geoid){const E=r[c][v.centroid_name],D=Fo(E);S[v.geoid]=D}}),Object.entries(S).flatMap(([v,p])=>[v,p])})(),"rgba(200,200,200,0.3)"],"fill-opacity":.7}}),h.jsx(ca,{id:"census-tracts-outline",type:"line","source-layer":"UT_CensusTracts-cgq3a0",paint:{"line-color":"#000000","line-width":["case",["boolean",["feature-state","hover"],!1],2,1],"line-opacity":["case",["boolean",["feature-state","hover"],!1],1,.7]}})]}),l.bathymetry&&h.jsxs(Ho,{id:"bathymetry-points-source",type:"vector",url:"mapbox://pkulandh.4mg8eo41",children:[h.jsx(ca,{id:"water-texture-layer",type:"fill",source:"bathymetry-points-source","source-layer":"bathymetry-df7t51",beforeId:"bathymetry-point-layer",paint:{"fill-pattern":"water-noise","fill-opacity":.07}}),h.jsx(ca,{id:"bathymetry-point-layer",type:"circle","source-layer":"bathymetry-df7t51",paint:{"circle-radius":["interpolate",["linear"],["zoom"],6,["case",["==",["get","bathymetry"],u],6,3],12,["case",["==",["get","bathymetry"],u],10,5]],"circle-color":["case",[">",["get","bathymetry"],1282],"transparent",["all",[">=",["get","bathymetry"],u],["<=",["get","bathymetry"],1282]],"#444444",["match",["floor",["get","bathymetry"]],1271,"#051e40",1272,"#072c5e",1273,"#093a7c",1274,"#0b489a",1275,"#0d56b8",1276,"#0f64d6",1277,"#1172f4",1278,"#3286f5",1279,"#539af7",1280,"#74aef8",1281,"#95c2fa",1282,"#b6d6fb","#FF00FF"]],"circle-opacity":["case",["==",["get","bathymetry"],u],1,.8],"circle-stroke-width":["case",["==",["get","bathymetry"],u],2,0],"circle-stroke-color":"#ffffff"}})]}),l.pm10Data&&!m&&h.jsx(Ho,{id:"pm10-data-source",type:"geojson",data:{type:"FeatureCollection",features:g().map(S=>({type:"Feature",properties:{centroid_name:S.centroid_name,pm10:S.pm10,geoid:S.geoid},geometry:{type:"Point",coordinates:[S.longitude,S.latitude]}}))},children:h.jsx(ca,{id:"pm10-point-layer",type:"circle",paint:{"circle-radius":["interpolate",["linear"],["zoom"],6,3,12,6],"circle-color":["match",["get","centroid_name"],...(()=>{const S=g(),v={};return S.forEach(p=>{v[p.centroid_name]=p.color}),Object.entries(v).flatMap(([p,E])=>[p,E])})(),"#aaaaaa"],"circle-opacity":.8,"circle-stroke-width":1,"circle-stroke-color":"#ffffff"}})}),l.erodibility&&h.jsxs(Ho,{id:"erodibility-source",type:"vector",url:"mapbox://pkulandh.ai74bdtb",children:[h.jsx(ca,{id:"erodibility-shadow",type:"fill","source-layer":"GSL_erodibility_fraction-5bzz8s",filter:[">",["get","erodibility"],.2],paint:{"fill-color":"#000000","fill-opacity":.2,"fill-translate":[3,3],"fill-translate-anchor":"viewport"}}),h.jsx(ca,{id:"erodibility-feather",type:"fill","source-layer":"GSL_erodibility_fraction-5bzz8s",filter:[">",["get","erodibility"],.2],paint:{"fill-color":["interpolate",["linear"],["get","erodibility"],0,"#ffffd4",.1,"#ffeda0",.3,"#feb24c",.6,"#fc4e2a",.94,"#bd0026",1,"#800026"],"fill-opacity":.3,"fill-translate":[0,0],"fill-translate-anchor":"viewport"}}),h.jsx(ca,{id:"erodibility-fill",type:"fill","source-layer":"GSL_erodibility_fraction-5bzz8s",filter:[">",["get","erodibility"],.2],paint:{"fill-color":["interpolate",["linear"],["get","erodibility"],0,"#ffffd4",.1,"#ffeda0",.3,"#feb24c",.6,"#fc4e2a",.94,"#bd0026",1,"#800026"],"fill-opacity":.7,"fill-translate":[1,1],"fill-translate-anchor":"viewport","fill-antialias":!0}}),h.jsx(ca,{id:"erodibility-outline",type:"line","source-layer":"GSL_erodibility_fraction-5bzz8s",filter:[">",["get","erodibility"],.2],paint:{"line-color":"#000000","line-width":.5,"line-opacity":.5,"line-blur":.5}})]})]})}function rb({popupInfo:l,onClose:u,pm10Data:c,selectedTimestampIndex:r,centroidLocations:f}){return l?h.jsx(E1,{longitude:l.longitude,latitude:l.latitude,closeButton:!0,closeOnClick:!1,onClose:u,anchor:"bottom",children:h.jsx(Z1,{children:l.type==="bathymetry"?h.jsxs(h.Fragment,{children:[h.jsx("h4",{children:"Bathymetry Data"}),h.jsxs("p",{children:["Elevation: ",h.jsxs("span",{className:"highlight",children:[l.depth.toFixed(2)," meters"]})," above sea level"]})]}):l.type==="censusTract"?h.jsxs(h.Fragment,{children:[h.jsx("h4",{children:"Census Tract Information"}),h.jsxs("p",{children:["Census Tract ID: ",h.jsx("span",{className:"highlight",children:l.GEOID20})]}),h.jsxs("p",{children:["Location: ",h.jsxs("span",{className:"highlight",children:[l.INTPTLAT20,", ",l.INTPTLON20]})]}),l.hasPM10Data?h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["PM10 Monitoring: ",h.jsx("span",{className:"highlight",children:"Active"})]}),c&&c.length>0&&r<c.length&&(()=>{const g=f.find(m=>m.geoid===l.GEOID20);if(g){const S=c[r][g.centroid_name];return h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["Monitoring Point: ",h.jsx("span",{className:"highlight",children:g.centroid_name})]}),h.jsxs("p",{children:["PM10 Concentration: ",h.jsxs("span",{className:"highlight",children:[S.toFixed(1)," µg/m³"]})]}),h.jsxs("p",{children:["Risk Level: ",h.jsx("span",{className:"highlight",children:S<5?"Low":S<10?"Moderate":S<15?"High":S<20?"Very High":"Extreme"})]}),h.jsx(Mc,{backgroundColor:Fo(S)})]})}return null})()]}):h.jsxs("p",{children:["PM10 Monitoring: ",h.jsx("span",{className:"highlight",children:"Not available for this tract"})]})]}):l.type==="pm10"?h.jsxs(h.Fragment,{children:[h.jsx("h4",{children:"PM10 Concentration Data"}),h.jsxs("p",{children:["Monitoring Point: ",h.jsx("span",{className:"highlight",children:l.centroidName})]}),h.jsxs("p",{children:["PM10 Concentration: ",h.jsxs("span",{className:"highlight",children:[l.pm10Value.toFixed(1)," µg/m³"]})]}),h.jsxs("p",{children:["Risk Level: ",h.jsx("span",{className:"highlight",children:l.pm10Value<5?"Low":l.pm10Value<10?"Moderate":l.pm10Value<15?"High":l.pm10Value<20?"Very High":"Extreme"})]}),l.geoid&&h.jsxs("p",{children:["Census Tract: ",h.jsx("span",{className:"highlight",children:l.geoid})]}),h.jsx(Mc,{backgroundColor:Fo(l.pm10Value)})]}):l.type==="erodibility"&&h.jsxs(h.Fragment,{children:[h.jsx("h4",{children:"Soil Erodibility Data"}),h.jsxs("p",{children:["Erodibility Index: ",h.jsx("span",{className:"highlight",children:l.erodibilityValue.toFixed(2)})]}),h.jsxs("p",{children:["Erodibility Class: ",h.jsx("span",{className:"highlight",children:l.erodibilityValue<=.3?"Moderate":l.erodibilityValue<=.6?"High":l.erodibilityValue<=.94?"Very High":"Extreme"})]}),h.jsx(Mc,{backgroundColor:J1(l.erodibilityValue)})]})})}):null}function cb(l){const u=parseInt(l.substring(0,4)),c=parseInt(l.substring(4,6))-1,r=parseInt(l.substring(6,8)),f=parseInt(l.substring(8,10)),g=parseInt(l.substring(10,12)),m=new Date(Date.UTC(u,c,r,f,g)),S=new Date(m.toLocaleString("en-US",{timeZone:"America/Denver"})),v=S.getFullYear(),p=String(S.getMonth()+1).padStart(2,"0"),E=String(S.getDate()).padStart(2,"0"),D=String(S.getHours()).padStart(2,"0"),H=String(S.getMinutes()).padStart(2,"0");return`${v}${p}${E}${D}${H}`}function sb(l){const c={timeZone:"America/Denver",timeZoneName:"short"};return new Intl.DateTimeFormat("en-US",c).format(l).split(" ").pop()||""}function n0(l){const u=cb(l);if(u.length!==12)return u;const c=u.substring(0,4),r=u.substring(4,6),f=u.substring(6,8),g=u.substring(8,10),m=u.substring(10,12),S=new Date(`${c}-${r}-${f}T${g}:${m}:00`),v=sb(S);return`${c}/${r}/${f} ${g}:${m} ${v}`}function fb(l){return`${Lc(l).toFixed(0)} ft`}const db=O.div`
  background: rgba(117, 29, 12, 0.05);
  padding: ${({theme:l})=>l.spacing.sm} ${({theme:l})=>l.spacing.sm};
  margin: -${({theme:l})=>l.spacing.md};
  margin-bottom: ${({theme:l})=>l.spacing.md};
  width: calc(100% + ${({theme:l})=>l.spacing.md} * 2);
  border-bottom: 2px solid ${({theme:l})=>l.colors.moabMahogany};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`,hb=O.h3`
  font-family: ${({theme:l})=>l.typography.displayFont};
  font-size: 26px;
  font-weight: ${({theme:l})=>l.typography.weights.semiBold};
  color: ${({theme:l})=>l.colors.moabMahogany};
  margin: 0;
  margin-bottom: ${({theme:l})=>l.spacing.xs};
  letter-spacing: 1.2px;
  text-align: center;
  width: 100%;
`,gb=O.div`
  background: white;
  border-radius: ${({theme:l})=>l.borderRadius.md};
  padding: ${({theme:l})=>l.spacing.xs} ${({theme:l})=>l.spacing.sm};
  font-size: 16px;
  font-weight: ${({theme:l})=>l.typography.weights.medium};
  color: ${({theme:l})=>l.colors.olympicParkObsidian};
  box-shadow: 0 2px 6px rgba(117, 29, 12, 0.15);
  width: 95%;
  text-align: center;
  margin: 0 auto ${({theme:l})=>l.spacing.xs};
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  line-height: 1;
`,mb=O.div`
  margin-top: ${({theme:l})=>l.spacing.xxs};
  width: 100%;
  background: rgba(249, 246, 239, 0.6);
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  padding: ${({theme:l})=>l.spacing.sm};
  padding-right: ${({theme:l})=>l.spacing.xs};
  padding-left: ${({theme:l})=>l.spacing.xs};
  box-sizing: border-box;
`,pb=O.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  border-bottom: 2px solid ${({theme:l})=>l.colors.moabMahogany};
  margin-bottom: ${({theme:l})=>l.spacing.md};
  position: relative;
  max-width: 100%;
  padding-bottom: 2px;
  gap: 2px;
`,yb=O.button`
  padding: ${({theme:l})=>`${l.spacing.xxs} ${l.spacing.xxs}`};
  min-width: 40px;
  background: ${l=>l.$isActive?"white":"transparent"};
  border: none;
  font-size: 10px;
  font-weight: ${l=>l.$isActive?l.theme.typography.weights.semiBold:l.theme.typography.weights.regular};
  color: ${l=>l.$isActive?l.theme.colors.moabMahogany:l.theme.colors.olympicParkObsidian};
  cursor: pointer;
  position: relative;
  z-index: 1;
  margin: 0 1px 2px 1px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
  
  ${l=>l.$isActive&&`
    border-radius: 3px 3px 0 0;
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.05);
    border-top: 1px solid ${l.theme.colors.moabMahogany};
    border-left: 1px solid ${l.theme.colors.moabMahogany};
    border-right: 1px solid ${l.theme.colors.moabMahogany};
    margin-bottom: -1px;
  `}
`,bb=O.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:l})=>l.spacing.xs};
  margin-top: ${({theme:l})=>l.spacing.md};
  padding: ${({theme:l})=>l.spacing.xs};
  padding-left: ${({theme:l})=>l.spacing.xxs};
  padding-right: ${({theme:l})=>l.spacing.xxs};
  background: white;
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  box-shadow: 0 1px 3px rgba(117, 29, 12, 0.1);
  width: 100%;
  box-sizing: border-box;
`,vb=O.button`
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  padding: ${({theme:l})=>l.spacing.xxs} ${({theme:l})=>l.spacing.xxs};
  border: 1px solid ${l=>l.$isSelected?l.theme.colors.moabMahogany:"rgba(117, 29, 12, 0.2)"};
  background: ${l=>l.$isSelected?"rgba(117, 29, 12, 0.1)":"white"};
  font-size: 12px;
  font-weight: ${l=>l.$isSelected?l.theme.typography.weights.semiBold:l.theme.typography.weights.regular};
  color: ${l=>l.$isSelected?l.theme.colors.moabMahogany:l.theme.colors.olympicParkObsidian};
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;
  margin-left: -2px;
  
  &:hover {
    background: rgba(117, 29, 12, 0.05);
    border-color: ${l=>l.$isSelected?l.theme.colors.moabMahogany:"rgba(117, 29, 12, 0.4)"};
  }
`,xb=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({theme:l})=>l.spacing.xxs};
  margin-bottom: ${({theme:l})=>l.spacing.sm};
  gap: ${({theme:l})=>l.spacing.xxs};
  width: 100%;
  padding: 0 ${({theme:l})=>l.spacing.xxs};
`,i0=O.button`
  background: white;
  border: 1px solid ${({theme:l})=>l.colors.moabMahogany};
  border-radius: ${({theme:l})=>l.borderRadius.md};
  padding: ${({theme:l})=>l.spacing.xs} ${({theme:l})=>l.spacing.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:l})=>l.spacing.xxs};
  color: ${({theme:l})=>l.colors.moabMahogany};
  font-weight: ${({theme:l})=>l.typography.weights.medium};
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  
  svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
  
  &:hover:not(:disabled) {
    background: rgba(117, 29, 12, 0.05);
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(117, 29, 12, 0.1);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Eg=O(i0)`
  min-width: 60px;
`,Sb=O(i0)`
  background: ${l=>l.$isPlaying?"rgba(117, 29, 12, 0.1)":"white"};
  min-width: 80px;
  margin: 0 ${({theme:l})=>l.spacing.xxs};
  
  &:hover:not(:disabled) {
    background: ${l=>l.$isPlaying?"rgba(117, 29, 12, 0.15)":"rgba(117, 29, 12, 0.05)"};
  }
`;function Eb({timestamps:l,selectedIndex:u,onChange:c}){var Z;const[r,f]=U.useState(!1),[g]=U.useState(1e3),m=U.useRef(null),S=U.useRef(null);if(!l||l.length===0)return null;const v=n0(l[u]),p=new Map;l.forEach(Y=>{var ht;const k=Y.substring(0,8);p.has(k)||p.set(k,[]),(ht=p.get(k))==null||ht.push(Y)});const E=Array.from(p.keys()),D=l[u],H=D.substring(0,8),G=E.indexOf(H),X=Y=>{const k=Y.substring(4,6),ht=Y.substring(6,8);return`${k}/${ht}`},nt=Y=>{const k=Y.substring(8,10),ht=Y.substring(10,12);return`${k}:${ht}`},it=Y=>{const k=l.findIndex(ht=>ht.startsWith(Y));k!==-1&&c(k)},I=Y=>{const k=l.indexOf(Y);k!==-1&&c(k)},at=()=>{if(r){f(!1),m.current!==null&&(clearInterval(m.current),m.current=null);return}f(!0);const Y=setInterval(()=>{c(k=>{const ht=k+1;return ht>=l.length?(f(!1),clearInterval(Y),m.current=null,k):ht})},g);m.current=Y},K=()=>{if(G>0){const Y=E[G-1];it(Y)}},F=()=>{if(G<E.length-1){const Y=E[G+1];it(Y)}};return U.useEffect(()=>()=>{m.current!==null&&(clearInterval(m.current),m.current=null)},[]),h.jsxs(Q1,{children:[h.jsxs(db,{children:[h.jsx(hb,{children:"TIME PERIOD"}),h.jsx(gb,{children:v})]}),h.jsxs(xb,{children:[h.jsxs(Eg,{onClick:K,disabled:G===0,children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:h.jsx("path",{d:"M15 18l-6-6 6-6"})}),"Prev"]}),h.jsxs(Sb,{onClick:at,$isPlaying:r,children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r?h.jsx("path",{d:"M6 4h4v16H6V4zm8 0h4v16h-4V4z"}):h.jsx("path",{d:"M8 5v14l11-7z"})}),r?"Pause":"Play"]}),h.jsxs(Eg,{onClick:F,disabled:G===E.length-1,children:["Next",h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:h.jsx("path",{d:"M9 18l6-6-6-6"})})]})]}),h.jsxs(mb,{children:[h.jsx(pb,{ref:S,children:E.map(Y=>h.jsx(yb,{$isActive:Y===H,onClick:()=>it(Y),children:X(Y)},Y))}),h.jsx(bb,{children:(Z=p.get(H))==null?void 0:Z.map(Y=>{const k=Y===D;return h.jsx(vb,{$isSelected:k,onClick:()=>I(Y),children:nt(Y)},Y)})})]})]})}const Tb=O.button`
  position: absolute;
  bottom: 160px;
  right: 10px;
  z-index: 10;
  background-color: ${({theme:l})=>l.colors.moabMahogany};
  color: ${({theme:l})=>l.colors.snowbirdWhite};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(117, 29, 12, 0.8);
    transform: scale(1.05);
  }
`;function _b({onElevationChange:l,onTimestampChange:u,onBackToIntro:c}){const r=U.useRef(null),[f,g]=U.useState({longitude:-112.3297,latitude:40.9121,zoom:8}),[m,S]=U.useState(!1),[v,p]=U.useState({satellite:!1,bathymetry:!0,censusTracts:!0,pm10Data:!1,erodibility:!0}),[E,D]=U.useState(se[0]),[H,G]=U.useState(se[0]),[X,nt]=U.useState(0),{centroidLocations:it,pm10Data:I,loading:at}=z1(E),[K,F]=U.useState([]);U.useEffect(()=>{I&&I.length>0&&!at&&(F(I),X>=I.length&&nt(0))},[I,at]);const Z=K.length>0?K.map(C=>C.timestamp):[];U.useEffect(()=>{Z.length>0&&u&&u(Z[X])},[X,Z,u]);const[Y,k]=U.useState(null),ht=U.useCallback(()=>{const C=document.createElement("canvas"),q=C.getContext("2d"),V=128;if(C.width=V,C.height=V,q){q.fillStyle="rgba(255, 255, 255, 0)",q.fillRect(0,0,V,V);for(let b=0;b<V;b++)for(let $=0;$<V;$++)if(Math.random()>.995){const B=Math.random()*.04;q.fillStyle=`rgba(255, 255, 255, ${B})`,q.fillRect(b,$,1,1)}return q.getImageData(0,0,V,V)}return null},[]),Kt=U.useCallback(()=>{if(r.current){const C=r.current.getMap(),q=ht();q&&C.addImage("water-noise",q,{sdf:!0}),S(!0)}},[ht]),qe=U.useCallback(C=>{const q=!v[C];p({...v,[C]:q})},[v]),fe=U.useCallback(()=>{if(!I||I.length===0||!it||X>=I.length)return[];const C=I[X];return it.map(q=>{const V=C[q.centroid_name];return{centroid_name:q.centroid_name,longitude:q.lon,latitude:q.lat,geoid:q.geoid,pm10:V,color:Fo(V)}})},[I,it,X]),Ct=U.useCallback(C=>{var b,$,L,B,J,ut,P,Rt,mt,Bt;const q=[v.censusTracts?"census-tracts-all-fill":null,v.bathymetry?"bathymetry-point-layer":null,v.pm10Data?"pm10-point-layer":null,v.erodibility?"erodibility-fill":null].filter(Boolean),V=(b=r.current)==null?void 0:b.queryRenderedFeatures(C.point,{layers:q});if(V&&V.length>0){const Jt=V[0],ne=(($=Jt.layer)==null?void 0:$.id)??"";if(ne==="bathymetry-point-layer")k({longitude:C.lngLat.lng,latitude:C.lngLat.lat,type:"bathymetry",depth:((L=Jt.properties)==null?void 0:L.bathymetry)||0});else if(ne==="census-tracts-all-fill"){const ae=(B=Jt.properties)==null?void 0:B.GEOID20,un=it.find(rn=>rn.geoid===ae);k({longitude:C.lngLat.lng,latitude:C.lngLat.lat,type:"censusTract",INTPTLAT20:(J=Jt.properties)==null?void 0:J.INTPTLAT20,INTPTLON20:(ut=Jt.properties)==null?void 0:ut.INTPTLON20,GEOID20:ae,hasPM10Data:!!un})}else ne==="pm10-point-layer"?k({longitude:C.lngLat.lng,latitude:C.lngLat.lat,type:"pm10",centroidName:(P=Jt.properties)==null?void 0:P.centroid_name,pm10Value:((Rt=Jt.properties)==null?void 0:Rt.pm10)||0,geoid:(mt=Jt.properties)==null?void 0:mt.geoid}):ne==="erodibility-fill"&&k({longitude:C.lngLat.lng,latitude:C.lngLat.lat,type:"erodibility",erodibilityValue:((Bt=Jt.properties)==null?void 0:Bt.erodibility)||0})}else k(null)},[v,it]),$e=C=>se.reduce((q,V)=>Math.abs(V-C)<Math.abs(q-C)?V:q),Ce=C=>{const q=parseFloat(C.target.value),V=$e(q);G(V),D(V),l&&l(V)},Nt=U.useCallback(C=>{const q={...C.viewState,zoom:Math.max(8,C.viewState.zoom)};g(q)},[]),[A]=U.useState({longitude:-112.3297,latitude:40.9121,zoom:8});return h.jsxs(Y1,{children:[c&&h.jsx(Tb,{onClick:c,title:"Help & Information",children:h.jsx(l0,{size:36})}),h.jsx(ab,{selectedLakeLevel:E,handleElevationChange:Ce,showBathymetry:v.bathymetry}),h.jsx(ob,{layers:v,toggleLayer:qe}),v.censusTracts&&Z.length>0&&h.jsx(Eb,{timestamps:Z,selectedIndex:Math.min(X,Z.length-1),onChange:nt}),h.jsxs(S1,{...f,ref:r,onMove:Nt,minZoom:8,mapStyle:v.satellite?"mapbox://styles/mapbox/satellite-v9":K1.styleUrl,mapboxAccessToken:V1,onLoad:Kt,onClick:Ct,interactiveLayerIds:[v.censusTracts?"census-tracts-all-fill":null,v.bathymetry?"bathymetry-point-layer":null,v.pm10Data?"pm10-point-layer":null,v.erodibility?"erodibility-fill":null].filter(Boolean),children:[h.jsxs("div",{className:"mapboxgl-ctrl-group mapboxgl-ctrl map-controls-container",style:{position:"absolute",bottom:"30px",right:"10px"},children:[h.jsx("button",{className:"zoom-control",onClick:()=>g(C=>({...C,zoom:Math.min(C.zoom+1,22)})),title:"Zoom In",children:h.jsx("span",{className:"mapboxgl-ctrl-icon",children:"+"})}),h.jsx("button",{className:"zoom-control",onClick:()=>g(C=>({...C,zoom:Math.max(C.zoom-1,8)})),title:"Zoom Out",children:h.jsx("span",{className:"mapboxgl-ctrl-icon",children:"−"})}),h.jsx("button",{className:"reset-view-btn",onClick:()=>g(A),title:"Reset View",children:h.jsx("span",{className:"mapboxgl-ctrl-icon",children:"⤧"})})]}),m&&h.jsx(ub,{layers:v,selectedElevation:H,selectedTimestampIndex:X,pm10Data:I,centroidLocations:it,getPM10Points:fe,loading:at}),h.jsx(rb,{popupInfo:Y,onClose:()=>k(null),pm10Data:I,selectedTimestampIndex:X,centroidLocations:it})]})]})}function zb(l){return h.jsx(_b,{...l})}const Mb=O.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: ${({theme:l})=>l.colors.moabMahogany};
  color: ${({theme:l})=>l.colors.snowbirdWhite};
  padding: 0 ${({theme:l})=>l.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: ${({theme:l})=>l.zIndices.mapOverlays};
  box-shadow: ${({theme:l})=>l.shadows.md};
`,wb=O.h1`
  font-family: ${({theme:l})=>l.typography.displayFont};
  font-weight: ${({theme:l})=>l.typography.weights.semiBold};
  font-size: 28px;
  margin: 0;
  letter-spacing: 1.5px;
`,Ab=O.div`
  display: flex;
  gap: ${({theme:l})=>l.spacing.md};
`,Tg=O.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,_g=O.span`
  font-size: 14px;
  font-weight: ${({theme:l})=>l.typography.weights.light};
  opacity: 0.8;
`,zg=O.span`
  font-size: 22px;
  font-weight: ${({theme:l})=>l.typography.weights.medium};
`;function jb({elevation:l,timestamp:u}){return h.jsxs(Mb,{children:[h.jsx(wb,{children:"GREAT SALT LAKE DUST EXPOSURE MODELING TOOL"}),h.jsxs(Ab,{children:[h.jsxs(Tg,{children:[h.jsx(_g,{children:"Lake Level"}),h.jsx(zg,{children:fb(l)})]}),h.jsxs(Tg,{children:[h.jsx(_g,{children:"Date & Time"}),h.jsx(zg,{children:n0(u)})]})]})]})}const Ob=By`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  /* Base styles */
  html, body {
    height: 100%;
    width: 100%;
    font-family: ${({theme:l})=>l.typography.fontFamily};
    font-size: ${({theme:l})=>l.typography.sizes.body};
    line-height: ${({theme:l})=>l.typography.lineHeights.body};
    font-weight: ${({theme:l})=>l.typography.weights.regular};
    color: ${({theme:l})=>l.colors.olympicParkObsidian};
    background-color: ${({theme:l})=>l.colors.snowbirdWhite};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.5px;
  }
  
  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${({theme:l})=>l.spacing.md};
    font-family: ${({theme:l})=>l.typography.displayFont};
  }
  
  h1 {
    font-size: ${({theme:l})=>l.typography.sizes.h1};
    line-height: ${({theme:l})=>l.typography.lineHeights.h1};
    font-weight: ${({theme:l})=>l.typography.weights.semiBold};
    letter-spacing: 1px;
  }
  
  h2 {
    font-size: ${({theme:l})=>l.typography.sizes.h2};
    line-height: ${({theme:l})=>l.typography.lineHeights.h2};
    font-weight: ${({theme:l})=>l.typography.weights.semiBold};
  }
  
  h3 {
    font-size: ${({theme:l})=>l.typography.sizes.h3};
    line-height: ${({theme:l})=>l.typography.lineHeights.h3};
    font-weight: ${({theme:l})=>l.typography.weights.light};
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
  
  p {
    margin-bottom: ${({theme:l})=>l.spacing.md};
    font-weight: ${({theme:l})=>l.typography.weights.regular};
    letter-spacing: 0.5px;
  }
  
  a {
    color: ${({theme:l})=>l.colors.moabMahogany};
    text-decoration: none;
    transition: ${({theme:l})=>l.transitions.fast};
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  /* Responsive images */
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Form elements */
  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  
  button {
    cursor: pointer;
    border: none;
    background: none;
    
    &:disabled {
      cursor: not-allowed;
    }
  }
  
  /* Utility classes */
  .text-center {
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: ${({theme:l})=>l.spacing.md};
  }
  
  .highlight {
    color: ${({theme:l})=>l.colors.moabMahogany};
    font-weight: ${({theme:l})=>l.typography.weights.medium};
  }
  
  /* App-specific global styles */
  #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  
  /* Map-specific styles */
  .mapboxgl-ctrl-group {
    border-radius: ${({theme:l})=>l.borderRadius.md} !important;
    box-shadow: ${({theme:l})=>l.shadows.md} !important;
    overflow: hidden;
    border: 2px solid ${({theme:l})=>l.colors.moabMahogany} !important;
    background-color: ${({theme:l})=>l.colors.snowbirdWhite} !important;
  }
  
  .map-controls-container {
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 0 !important;

    button {
      width: 36px !important;
      height: 36px !important;
      padding: 0 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      font-size: 22px !important;
      color: ${({theme:l})=>l.colors.moabMahogany} !important;
      transition: all 0.2s ease !important;
      cursor: pointer !important;
      border-bottom: 1px solid rgba(117, 29, 12, 0.1) !important;
      background-color: ${({theme:l})=>l.colors.snowbirdWhite} !important;

      &:last-child {
        border-bottom: none !important;
      }

      &:hover {
        background-color: rgba(117, 29, 12, 0.05) !important;
      }

      &:active {
        background-color: rgba(117, 29, 12, 0.1) !important;
      }

      .mapboxgl-ctrl-icon {
        width: auto !important;
        height: auto !important;
        background-image: none !important;
      }
    }

    .zoom-control {
      font-weight: bold !important;
    }

    .reset-view-btn {
      font-size: 20px !important;
    }
  }
  
  /* Remove outline on click for map controls */
  .mapboxgl-ctrl button:focus {
    outline: none !important;
  }
  
  .mapboxgl-popup-content {
    padding: ${({theme:l})=>l.spacing.md};
    border-radius: ${({theme:l})=>l.borderRadius.md};
    box-shadow: ${({theme:l})=>l.shadows.md};
    background-color: ${({theme:l})=>l.colors.snowbirdWhite};
    border: 2px solid ${({theme:l})=>l.colors.moabMahogany};
    font-family: ${({theme:l})=>l.typography.fontFamily};
    
    .mapboxgl-popup-close-button {
      font-size: 18px;
      padding: ${({theme:l})=>l.spacing.xs};
      color: ${({theme:l})=>l.colors.moabMahogany};
      font-weight: bold;
      
      &:hover {
        color: ${({theme:l})=>l.colors.olympicParkObsidian};
        background: none;
      }
    }
  }
  
  .mapboxgl-popup-tip {
    border-top-color: ${({theme:l})=>l.colors.moabMahogany} !important;
    border-bottom-color: ${({theme:l})=>l.colors.moabMahogany} !important;
  }
  
  /* Lake level slider */
  input[type="range"].vertical-slider {
    -webkit-appearance: slider-vertical;
    appearance: slider-vertical;
    width: 24px !important;
    height: 200px !important;
    padding: 0;
    margin: 0 15px !important;
    z-index: 10;
    position: relative;
    cursor: pointer;
  }
  
  /* Firefox-specific vertical slider fix */
  @-moz-document url-prefix() {
    input[type="range"].vertical-slider {
      width: 200px !important;
      height: 24px !important;
      transform: rotate(270deg);
      transform-origin: center center;
      position: relative;
      margin: 100px 0 !important;
      z-index: 10;
    }
  }
  
  /* Custom styling for checkboxes */
  input[type="checkbox"] {
    position: relative;
    cursor: pointer;
    
    &:checked {
      &:after {
        opacity: 1;
      }
    }
    
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: -3px;
      left: -3px;
      width: 18px;
      height: 18px;
      border-radius: 2px;
      background: ${({theme:l})=>l.colors.snowbirdWhite};
      border: 2px solid ${({theme:l})=>l.colors.moabMahogany};
      opacity: 1;
    }
    
    &:checked:after {
      background: ${({theme:l})=>l.colors.moabMahogany};
      border-color: ${({theme:l})=>l.colors.moabMahogany};
    }
    
    &:checked:before {
      content: '';
      display: block;
      position: absolute;
      top: 1px;
      left: 5px;
      width: 6px;
      height: 10px;
      border: solid ${({theme:l})=>l.colors.snowbirdWhite};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      z-index: 5;
    }
  }
  
  /* Custom scrollbar for controls panel */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(249, 246, 239, 0.5);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(117, 29, 12, 0.3);
    border-radius: 4px;
    
    &:hover {
      background: rgba(117, 29, 12, 0.5);
    }
  }
  
  /* Select dropdown styling */
  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23751d0c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 16px;
    padding-right: 28px;
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(117, 29, 12, 0.2);
    }
  }
  
  /* Focus styles for accessibility */
  *:focus-visible {
    outline: 2px solid ${({theme:l})=>l.colors.moabMahogany};
    outline-offset: 2px;
  }
  
  /* Additional map control styling */
  .mapboxgl-ctrl-scale {
    border-color: ${({theme:l})=>l.colors.moabMahogany} !important;
    color: ${({theme:l})=>l.colors.olympicParkObsidian} !important;
    background-color: rgba(249, 246, 239, 0.8) !important;
    font-family: ${({theme:l})=>l.typography.fontFamily} !important;
    font-weight: ${({theme:l})=>l.typography.weights.light} !important;
    font-size: 10pt !important;
    letter-spacing: 0.5px !important;
  }
  
  /* Slider thumb styling */
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: ${({theme:l})=>l.colors.moabMahogany};
    cursor: pointer;
    margin-top: -7px;
    border: 2px solid ${({theme:l})=>l.colors.snowbirdWhite};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  input[type=range]::-moz-range-thumb {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: ${({theme:l})=>l.colors.moabMahogany};
    cursor: pointer;
    border: 2px solid ${({theme:l})=>l.colors.snowbirdWhite};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  /* Track styling for range sliders */
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: rgba(117, 29, 12, 0.2);
    border-radius: 2px;
  }
  
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: rgba(117, 29, 12, 0.2);
    border-radius: 2px;
  }
  
  /* Mapbox attribution control styling */
  .mapboxgl-ctrl-attrib {
    font-family: ${({theme:l})=>l.typography.fontFamily} !important;
    font-size: 9pt !important;
    letter-spacing: 0.3px !important;
    padding: 2px 5px !important;
    
    a {
      color: ${({theme:l})=>l.colors.moabMahogany} !important;
    }
  }
  
  /* Mapbox compass styling */
  .mapboxgl-ctrl-compass {
    .mapboxgl-ctrl-compass-arrow {
      fill: ${({theme:l})=>l.colors.moabMahogany} !important;
    }
  }
  
  /* Additional popup styling */
  .mapboxgl-popup {
    max-width: 300px !important;
    
    .mapboxgl-popup-content {
      max-width: 100%;
    }
  }
  
  /* Additional responsive adjustments */
  @media (max-width: ${({theme:l})=>l.breakpoints.md}) {
    .mapboxgl-ctrl-group {
      margin-bottom: ${({theme:l})=>l.spacing.md};
    }
    
    .mapboxgl-popup-content {
      max-width: 280px;
    }
  }
  
  @media (max-width: ${({theme:l})=>l.breakpoints.sm}) {
    h1 {
      font-size: 30pt;
    }
    
    h2 {
      font-size: 18pt;
    }
    
    h3 {
      font-size: 14pt;
    }
    
    body {
      font-size: 14pt;
    }
    
    .mapboxgl-popup {
      max-width: 250px !important;
    }
  }
`,Mg={colors:{olympicParkObsidian:"#1a1a1a",snowbirdWhite:"#f9f6ef",canyonlandsTan:"#cea25d",moabMahogany:"#751d0c",spiralJettySage:"#99aa88",greatSaltLakeGreen:"#2d5954",bonnevilleSaltFlatsBlue:"#789ba8",rockyMountainRust:"#dd3b00",backgroundSecondary:"#f9f6ef",backgroundTertiary:"#f9f6ef",textSecondary:"#4a4a4a",textTertiary:"#767676",borderPrimary:"#751d0c",borderSecondary:"#751d0c",elevationScale:["#0571b0","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],pm10Scale:["#7cbf6f","#e8db5b","#e8a64d","#d46457","#a63c3c"]},typography:{fontFamily:"'Red Hat Display', sans-serif",displayFont:"'Sora', sans-serif",weights:{light:300,regular:400,medium:500,semiBold:600,bold:700},sizes:{h1:"36px",h2:"20px",h3:"15px",body:"14px",small:"12px",button:"15px"},lineHeights:{h1:1.2,h2:1.3,h3:1.4,body:1.5}},spacing:{xxs:"4px",xs:"8px",sm:"12px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},shadows:{sm:"0 1px 2px rgba(0,0,0,0.05)",md:"0 4px 6px rgba(0,0,0,0.1)",lg:"0 10px 15px rgba(0,0,0,0.1)",xl:"0 20px 25px rgba(0,0,0,0.15)"},borderRadius:{sm:"4px",md:"8px",lg:"12px",xl:"16px",round:"50%"},transitions:{fast:"all 0.2s ease",medium:"all 0.3s ease",slow:"all 0.5s ease"},breakpoints:{xs:"320px",sm:"576px",md:"768px",lg:"992px",xl:"1200px"},zIndices:{base:0,mapControls:10,mapOverlays:20,popups:30,modals:40,tooltips:50}},Rb=({onComplete:l})=>{const[u,c]=U.useState("about");return h.jsxs(Db,{children:[h.jsxs($b,{children:[h.jsx(Cb,{}),h.jsx(Nb,{})]}),h.jsxs(Ub,{children:[h.jsxs(Hb,{children:[h.jsxs(Lb,{children:[h.jsx(Bb,{children:h.jsx("img",{src:"/gsl-dust-tool/logo192.png",alt:"Great Salt Lake Dust Exposure Modeling Tool Logo",className:"w-full h-full object-contain rounded-md"})}),h.jsxs(qb,{children:[h.jsx(Gb,{children:"Great Salt Lake"})," Dust Exposure Modeling Tool"]})]}),h.jsx(kb,{children:h.jsxs(Yb,{onClick:l,children:[h.jsx(L1,{size:20,className:"mr-2"}),"Enter Map"]})}),h.jsx(Xb,{children:h.jsxs(Zb,{children:[h.jsxs(wc,{active:u==="about",onClick:()=>c("about"),children:[h.jsx(U1,{size:20,className:"mr-3"}),h.jsx("span",{children:"About"}),u==="about"&&h.jsx(Ac,{})]}),h.jsxs(wc,{active:u==="howto",onClick:()=>c("howto"),children:[h.jsx(l0,{size:20,className:"mr-3"}),h.jsx("span",{children:"How to Use"}),u==="howto"&&h.jsx(Ac,{})]}),h.jsxs(wc,{active:u==="feedback",onClick:()=>c("feedback"),children:[h.jsx(q1,{size:20,className:"mr-3"}),h.jsx("span",{children:"Feedback"}),u==="feedback"&&h.jsx(Ac,{})]})]})})]}),h.jsxs(Qb,{children:[u==="about"&&h.jsxs(Vb,{children:[h.jsxs(Zo,{children:[h.jsx(Lo,{children:"About This Tool"}),h.jsx(Bo,{})]}),h.jsxs(Zo,{children:[h.jsx(Lo,{children:"Understanding PM10"}),h.jsx(Bo,{}),h.jsx(wg,{children:"PM10 refers to coarse particulate matter with a diameter of 10 micrometers or smaller. These particles can settle in the bronchi and lungs, potentially causing health problems particularly for people with respiratory conditions."}),h.jsxs("div",{children:[h.jsx(Wb,{children:"PM10 Levels"}),h.jsxs(Fb,{children:[h.jsx(Pb,{}),h.jsxs(Ib,{children:[h.jsxs(Kl,{children:[h.jsx(Jl,{color:"#00d600",children:"Good"}),h.jsx(Wl,{children:"0-54 μg/m³"})]}),h.jsxs(Kl,{children:[h.jsx(Jl,{color:"#ffee00",children:"Moderate"}),h.jsx(Wl,{children:"55-154"})]}),h.jsxs(Kl,{children:[h.jsx(Jl,{color:"#ff8800",children:"USG"}),h.jsx(Wl,{children:"155-254"})]}),h.jsxs(Kl,{children:[h.jsx(Jl,{color:"#ff1a1a",children:"Unhealthy"}),h.jsx(Wl,{children:"255-354"})]}),h.jsxs(Kl,{children:[h.jsx(Jl,{color:"#9933ff",children:"Very Unhealthy"}),h.jsx(Wl,{children:"355-424"})]}),h.jsxs(Kl,{children:[h.jsx(Jl,{color:"#990033",children:"Hazardous"}),h.jsx(Wl,{children:"425+"})]})]})]}),h.jsx(tv,{children:'Note: USG stands for "Unhealthy for Sensitive Groups" - including children, older adults, and people with respiratory or heart conditions.'})]})]})]}),u==="howto"&&h.jsxs(Kb,{children:[h.jsxs(Jb,{children:[h.jsx(Lo,{children:"Quick Start Guide"}),h.jsx(Bo,{}),h.jsxs(ev,{children:[h.jsxs(ci,{children:[h.jsx(si,{children:"1"}),h.jsxs(fi,{children:[h.jsx(di,{children:"Navigate the map"}),h.jsx(hi,{children:"Use standard zoom and pan controls located on the left side of the screen."})]})]}),h.jsxs(ci,{children:[h.jsx(si,{children:"2"}),h.jsxs(fi,{children:[h.jsx(di,{children:"Choose lake elevation"}),h.jsx(hi,{children:"Select different GSL elevation scenarios to see how dust emissions change."})]})]}),h.jsxs(ci,{children:[h.jsx(si,{children:"3"}),h.jsxs(fi,{children:[h.jsx(di,{children:"Use timeline controls"}),h.jsx(hi,{children:"Play through the timeline or choose a specific date/time."})]})]}),h.jsxs(ci,{children:[h.jsx(si,{children:"4"}),h.jsxs(fi,{children:[h.jsx(di,{children:"View emissions levels"}),h.jsx(hi,{children:"Mouse over colored areas to see specific PM10 concentration values."})]})]}),h.jsxs(ci,{children:[h.jsx(si,{children:"5"}),h.jsxs(fi,{children:[h.jsx(di,{children:"Toggle map layers"}),h.jsx(hi,{children:"Use the layer control to customize your view and see different data visualizations."})]})]})]})]}),h.jsxs(av,{children:[h.jsx(lv,{children:h.jsx("h2",{children:"Video Tutorial"})}),h.jsxs(nv,{children:[h.jsx(iv,{children:h.jsx(ov,{children:h.jsx(k1,{size:40,className:"ml-1"})})}),h.jsx(uv,{children:"(Video would be embedded here)"})]}),h.jsx(rv,{children:h.jsxs("div",{children:[h.jsx(cv,{children:"Introduction to Great Salt Lake Dust Exposure Modeling Tool"}),h.jsx(sv,{children:"Duration: 4:30"})]})})]})]}),u==="feedback"&&h.jsxs(Zo,{wide:!0,children:[h.jsx(Lo,{children:"Submit Feedback"}),h.jsx(Bo,{}),h.jsxs(fv,{children:[h.jsxs(dv,{children:[h.jsx(C1,{size:24,className:"mr-3"}),h.jsx(hv,{children:"GitHub Issues"})]}),h.jsx(wg,{children:"For bug reports, feature requests, and technical feedback, please submit a GitHub issue. This helps us track and address your concerns effectively."}),h.jsxs(gv,{children:[h.jsx(mv,{children:"github.com/wilkes-center/gsl-dust-tool/issues"}),h.jsx(pv,{href:"https://github.com/wilkes-center/gsl-dust-tool/issues",target:"_blank",rel:"noopener noreferrer",children:"Submit Issue"})]})]})]})]})]})]})},Db=O.div`
  position: fixed;
  inset: 0;
  font-family: 'Sora', sans-serif;
  background-color: #f9f6ef;
  z-index: 1000;
`,$b=O.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,Cb=O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 33%;
  height: 33%;
  background-color: rgba(153, 170, 136, 0.1);
  border-radius: 50%;
  filter: blur(100px);
  transform: translate(-50%, -50%);
`,Nb=O.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  background-color: rgba(45, 89, 84, 0.05);
  border-radius: 50%;
  filter: blur(100px);
  transform: translate(25%, 25%);
`,Ub=O.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: auto;
`,Hb=O.header`
  margin-bottom: 2rem;
`,Lb=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Bb=O.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,qb=O.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1a1a1a;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Gb=O.span`
  color: #751d0c;
`,kb=O.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`,Yb=O.button`
  background-color: #751d0c;
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  padding: 0.75rem 2.5rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #8b2113;
    transform: scale(1.05);
  }
`,Xb=O.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`,Zb=O.div`
  display: flex;
  gap: 1rem;
  padding: 0.25rem;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 0.75rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,wc=O.button`  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  position: relative;
  background-color: ${l=>l.active?"rgba(153, 170, 136, 0.3)":"transparent"};
  color: ${l=>l.active?"#2d5954":"rgba(45, 89, 84, 0.7)"};
  font-weight: ${l=>l.active?"600":"400"};
  
  &:hover {
    background-color: ${l=>l.active?"rgba(153, 170, 136, 0.3)":"rgba(45, 89, 84, 0.05)"};
  }
`,Ac=O.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #751d0c;
  border-radius: 0 0 4px 4px;
`,Qb=O.div`
  flex: 1;
  margin-bottom: 2rem;
`,Vb=O.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Kb=O.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Zo=O.div`
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  grid-column: ${l=>l.wide?"1 / -1":"auto"};
`,Jb=O(Zo)``,Lo=O.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #2d5954;
  margin-bottom: 1.5rem;
`,Wb=O.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d5954;
  margin-bottom: 1rem;
`,Bo=O.div`
  height: 3px;
  width: 5rem;
  background-color: #751d0c;
  margin-bottom: 1.5rem;
`,wg=O.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-family: 'Red Hat Display', sans-serif;
`,Fb=O.div`
  margin-bottom: 1.5rem;
  padding: 1rem 0;
`,Pb=O.div`
  height: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  background: linear-gradient(to right, #00d600, #ffee00, #ff8800, #ff1a1a, #9933ff, #990033);
`,Ib=O.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 0.75rem;
`,Kl=O.div`
  text-align: center;
`,Jl=O.div`
  font-weight: 600;
  color: ${l=>l.color};
`,Wl=O.div`
  color: #1a1a1a;
`,tv=O.div`
  font-size: 0.75rem;
  color: #666;
  font-style: italic;
  margin-top: 1rem;
`,ev=O.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,ci=O.li`
  display: flex;
  align-items: flex-start;
`,si=O.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #99aa88;
  color: #2d5954;
  font-weight: 700;
  margin-right: 1rem;
  flex-shrink: 0;
`,fi=O.div``,di=O.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d5954;
  margin-bottom: 0.25rem;
`,hi=O.p`
  font-size: 1rem;
  color: #1a1a1a;
  font-family: 'Red Hat Display', sans-serif;
`;O.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(45, 89, 84, 0.2);
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #1a1a1a;
`;const av=O.div`
  background-color: #1a1a1a;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`,lv=O.div`
  padding: 1.5rem;
  border-bottom: 1px solid #333;
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #f9f6ef;
    margin: 0;
  }
`,nv=O.div`
  aspect-ratio: 16 / 9;
  background-color: #222;
  position: relative;
`,iv=O.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`,ov=O.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: rgba(117, 29, 12, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #751d0c;
  }
`,uv=O.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-family: 'Red Hat Display', sans-serif;
`,rv=O.div`
  padding: 1.5rem;
  background-color: #222;
  border-top: 1px solid #333;
`,cv=O.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #f9f6ef;
  margin: 0 0 0.25rem 0;
`,sv=O.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`,fv=O.div`
  background-color: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,dv=O.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #2d5954;
`,hv=O.h4`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
`,gv=O.div`
  background-color: #f9f6ef;
  border: 1px solid rgba(153, 170, 136, 0.5);
  border-radius: 0.5rem;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,mv=O.div`
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #1a1a1a;
  font-family: 'Red Hat Display', sans-serif;
`,pv=O.a`
  padding: 0.5rem 1.25rem;
  background-color: #2d5954;
  color: #f9f6ef;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s;
  white-space: nowrap;
  
  &:hover {
    background-color: #1e3d3a;
  }
`,yv=O.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;function bv(){const[l,u]=U.useState(!0),[c,r]=U.useState(se[0]),[f,g]=U.useState("202204191800"),m=E=>{r(E)},S=E=>{g(E)},v=()=>{u(!1)},p=()=>{u(!0)};return h.jsxs(Uy,{theme:Mg,children:[h.jsx(Ob,{theme:Mg}),l?h.jsx(Rb,{onComplete:v}):h.jsxs(yv,{children:[h.jsx(jb,{elevation:c,timestamp:f}),h.jsx(zb,{onElevationChange:m,onTimestampChange:S,onBackToIntro:p})]})]})}Hp.createRoot(document.getElementById("root")).render(h.jsx(U.StrictMode,{children:h.jsx(bv,{})}));export{Ap as g};
