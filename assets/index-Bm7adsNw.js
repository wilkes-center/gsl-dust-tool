(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const g of f)if(g.type==="childList")for(const m of g.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function c(f){const g={};return f.integrity&&(g.integrity=f.integrity),f.referrerPolicy&&(g.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?g.credentials="include":f.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function r(f){if(f.ep)return;f.ep=!0;const g=c(f);fetch(f.href,g)}})();function Ap(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var mc={exports:{}},ii={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function jp(){if(Lh)return ii;Lh=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function c(r,f,g){var m=null;if(g!==void 0&&(m=""+g),f.key!==void 0&&(m=""+f.key),"key"in f){g={};for(var v in f)v!=="key"&&(g[v]=f[v])}else g=f;return f=g.ref,{$$typeof:l,type:r,key:m,ref:f!==void 0?f:null,props:g}}return ii.Fragment=o,ii.jsx=c,ii.jsxs=c,ii}var Bh;function Op(){return Bh||(Bh=1,mc.exports=jp()),mc.exports}var h=Op(),pc={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function Rp(){if(qh)return ut;qh=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),m=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.iterator;function H(b){return b===null||typeof b!="object"?null:(b=D&&b[D]||b["@@iterator"],typeof b=="function"?b:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,P={};function et(b,$,B){this.props=b,this.context=$,this.refs=P,this.updater=B||L}et.prototype.isReactComponent={},et.prototype.setState=function(b,$){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,$,"setState")},et.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function it(){}it.prototype=et.prototype;function lt(b,$,B){this.props=b,this.context=$,this.refs=P,this.updater=B||L}var J=lt.prototype=new it;J.constructor=lt,Z(J,et.prototype),J.isPureReactComponent=!0;var V=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},q=Object.prototype.hasOwnProperty;function Y(b,$,B,k,K,ot){return B=ot.ref,{$$typeof:l,type:b,key:$,ref:B!==void 0?B:null,props:ot}}function ht(b,$){return Y(b.type,$,void 0,void 0,void 0,b.props)}function Kt(b){return typeof b=="object"&&b!==null&&b.$$typeof===l}function qe(b){var $={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(B){return $[B]})}var ce=/\/+/g;function Nt(b,$){return typeof b=="object"&&b!==null&&b.key!=null?qe(""+b.key):$.toString(36)}function $e(){}function Ce(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then($e,$e):(b.status="pending",b.then(function($){b.status==="pending"&&(b.status="fulfilled",b.value=$)},function($){b.status==="pending"&&(b.status="rejected",b.reason=$)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function Ut(b,$,B,k,K){var ot=typeof b;(ot==="undefined"||ot==="boolean")&&(b=null);var F=!1;if(b===null)F=!0;else switch(ot){case"bigint":case"string":case"number":F=!0;break;case"object":switch(b.$$typeof){case l:case o:F=!0;break;case T:return F=b._init,Ut(F(b._payload),$,B,k,K)}}if(F)return K=K(b),F=k===""?"."+Nt(b,0):k,V(K)?(B="",F!=null&&(B=F.replace(ce,"$&/")+"/"),Ut(K,$,B,"",function(zt){return zt})):K!=null&&(Kt(K)&&(K=ht(K,B+(K.key==null||b&&b.key===K.key?"":(""+K.key).replace(ce,"$&/")+"/")+F)),$.push(K)),1;F=0;var Dt=k===""?".":k+":";if(V(b))for(var mt=0;mt<b.length;mt++)k=b[mt],ot=Dt+Nt(k,mt),F+=Ut(k,$,B,ot,K);else if(mt=H(b),typeof mt=="function")for(b=mt.call(b),mt=0;!(k=b.next()).done;)k=k.value,ot=Dt+Nt(k,mt++),F+=Ut(k,$,B,ot,K);else if(ot==="object"){if(typeof b.then=="function")return Ut(Ce(b),$,B,k,K);throw $=String(b),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return F}function M(b,$,B){if(b==null)return b;var k=[],K=0;return Ut(b,k,"","",function(ot){return $.call(B,ot,K++)}),k}function U(b){if(b._status===-1){var $=b._result;$=$(),$.then(function(B){(b._status===0||b._status===-1)&&(b._status=1,b._result=B)},function(B){(b._status===0||b._status===-1)&&(b._status=2,b._result=B)}),b._status===-1&&(b._status=0,b._result=$)}if(b._status===1)return b._result.default;throw b._result}var G=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function nt(){}return ut.Children={map:M,forEach:function(b,$,B){M(b,function(){$.apply(this,arguments)},B)},count:function(b){var $=0;return M(b,function(){$++}),$},toArray:function(b){return M(b,function($){return $})||[]},only:function(b){if(!Kt(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ut.Component=et,ut.Fragment=c,ut.Profiler=f,ut.PureComponent=lt,ut.StrictMode=r,ut.Suspense=S,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ut.__COMPILER_RUNTIME={__proto__:null,c:function(b){return X.H.useMemoCache(b)}},ut.cache=function(b){return function(){return b.apply(null,arguments)}},ut.cloneElement=function(b,$,B){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var k=Z({},b.props),K=b.key,ot=void 0;if($!=null)for(F in $.ref!==void 0&&(ot=void 0),$.key!==void 0&&(K=""+$.key),$)!q.call($,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&$.ref===void 0||(k[F]=$[F]);var F=arguments.length-2;if(F===1)k.children=B;else if(1<F){for(var Dt=Array(F),mt=0;mt<F;mt++)Dt[mt]=arguments[mt+2];k.children=Dt}return Y(b.type,K,void 0,void 0,ot,k)},ut.createContext=function(b){return b={$$typeof:m,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:g,_context:b},b},ut.createElement=function(b,$,B){var k,K={},ot=null;if($!=null)for(k in $.key!==void 0&&(ot=""+$.key),$)q.call($,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(K[k]=$[k]);var F=arguments.length-2;if(F===1)K.children=B;else if(1<F){for(var Dt=Array(F),mt=0;mt<F;mt++)Dt[mt]=arguments[mt+2];K.children=Dt}if(b&&b.defaultProps)for(k in F=b.defaultProps,F)K[k]===void 0&&(K[k]=F[k]);return Y(b,ot,void 0,void 0,null,K)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(b){return{$$typeof:v,render:b}},ut.isValidElement=Kt,ut.lazy=function(b){return{$$typeof:T,_payload:{_status:-1,_result:b},_init:U}},ut.memo=function(b,$){return{$$typeof:p,type:b,compare:$===void 0?null:$}},ut.startTransition=function(b){var $=X.T,B={};X.T=B;try{var k=b(),K=X.S;K!==null&&K(B,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(nt,G)}catch(ot){G(ot)}finally{X.T=$}},ut.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ut.use=function(b){return X.H.use(b)},ut.useActionState=function(b,$,B){return X.H.useActionState(b,$,B)},ut.useCallback=function(b,$){return X.H.useCallback(b,$)},ut.useContext=function(b){return X.H.useContext(b)},ut.useDebugValue=function(){},ut.useDeferredValue=function(b,$){return X.H.useDeferredValue(b,$)},ut.useEffect=function(b,$,B){var k=X.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return k.useEffect(b,$)},ut.useId=function(){return X.H.useId()},ut.useImperativeHandle=function(b,$,B){return X.H.useImperativeHandle(b,$,B)},ut.useInsertionEffect=function(b,$){return X.H.useInsertionEffect(b,$)},ut.useLayoutEffect=function(b,$){return X.H.useLayoutEffect(b,$)},ut.useMemo=function(b,$){return X.H.useMemo(b,$)},ut.useOptimistic=function(b,$){return X.H.useOptimistic(b,$)},ut.useReducer=function(b,$,B){return X.H.useReducer(b,$,B)},ut.useRef=function(b){return X.H.useRef(b)},ut.useState=function(b){return X.H.useState(b)},ut.useSyncExternalStore=function(b,$,B){return X.H.useSyncExternalStore(b,$,B)},ut.useTransition=function(){return X.H.useTransition()},ut.version="19.1.0",ut}var kh;function Bc(){return kh||(kh=1,pc.exports=Rp()),pc.exports}var N=Bc();const Le=Ap(N);var yc={exports:{}},ui={},bc={exports:{}},vc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function Dp(){return Gh||(Gh=1,function(l){function o(M,U){var G=M.length;M.push(U);t:for(;0<G;){var nt=G-1>>>1,b=M[nt];if(0<f(b,U))M[nt]=U,M[G]=b,G=nt;else break t}}function c(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var U=M[0],G=M.pop();if(G!==U){M[0]=G;t:for(var nt=0,b=M.length,$=b>>>1;nt<$;){var B=2*(nt+1)-1,k=M[B],K=B+1,ot=M[K];if(0>f(k,G))K<b&&0>f(ot,k)?(M[nt]=ot,M[K]=G,nt=K):(M[nt]=k,M[B]=G,nt=B);else if(K<b&&0>f(ot,G))M[nt]=ot,M[K]=G,nt=K;else break t}}return U}function f(M,U){var G=M.sortIndex-U.sortIndex;return G!==0?G:M.id-U.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;l.unstable_now=function(){return g.now()}}else{var m=Date,v=m.now();l.unstable_now=function(){return m.now()-v}}var S=[],p=[],T=1,D=null,H=3,L=!1,Z=!1,P=!1,et=!1,it=typeof setTimeout=="function"?setTimeout:null,lt=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function V(M){for(var U=c(p);U!==null;){if(U.callback===null)r(p);else if(U.startTime<=M)r(p),U.sortIndex=U.expirationTime,o(S,U);else break;U=c(p)}}function X(M){if(P=!1,V(M),!Z)if(c(S)!==null)Z=!0,q||(q=!0,Nt());else{var U=c(p);U!==null&&Ut(X,U.startTime-M)}}var q=!1,Y=-1,ht=5,Kt=-1;function qe(){return et?!0:!(l.unstable_now()-Kt<ht)}function ce(){if(et=!1,q){var M=l.unstable_now();Kt=M;var U=!0;try{t:{Z=!1,P&&(P=!1,lt(Y),Y=-1),L=!0;var G=H;try{e:{for(V(M),D=c(S);D!==null&&!(D.expirationTime>M&&qe());){var nt=D.callback;if(typeof nt=="function"){D.callback=null,H=D.priorityLevel;var b=nt(D.expirationTime<=M);if(M=l.unstable_now(),typeof b=="function"){D.callback=b,V(M),U=!0;break e}D===c(S)&&r(S),V(M)}else r(S);D=c(S)}if(D!==null)U=!0;else{var $=c(p);$!==null&&Ut(X,$.startTime-M),U=!1}}break t}finally{D=null,H=G,L=!1}U=void 0}}finally{U?Nt():q=!1}}}var Nt;if(typeof J=="function")Nt=function(){J(ce)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Ce=$e.port2;$e.port1.onmessage=ce,Nt=function(){Ce.postMessage(null)}}else Nt=function(){it(ce,0)};function Ut(M,U){Y=it(function(){M(l.unstable_now())},U)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(M){M.callback=null},l.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ht=0<M?Math.floor(1e3/M):5},l.unstable_getCurrentPriorityLevel=function(){return H},l.unstable_next=function(M){switch(H){case 1:case 2:case 3:var U=3;break;default:U=H}var G=H;H=U;try{return M()}finally{H=G}},l.unstable_requestPaint=function(){et=!0},l.unstable_runWithPriority=function(M,U){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var G=H;H=M;try{return U()}finally{H=G}},l.unstable_scheduleCallback=function(M,U,G){var nt=l.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?nt+G:nt):G=nt,M){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=G+b,M={id:T++,callback:U,priorityLevel:M,startTime:G,expirationTime:b,sortIndex:-1},G>nt?(M.sortIndex=G,o(p,M),c(S)===null&&M===c(p)&&(P?(lt(Y),Y=-1):P=!0,Ut(X,G-nt))):(M.sortIndex=b,o(S,M),Z||L||(Z=!0,q||(q=!0,Nt()))),M},l.unstable_shouldYield=qe,l.unstable_wrapCallback=function(M){var U=H;return function(){var G=H;H=U;try{return M.apply(this,arguments)}finally{H=G}}}}(vc)),vc}var Yh;function $p(){return Yh||(Yh=1,bc.exports=Dp()),bc.exports}var xc={exports:{}},te={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function Cp(){if(Xh)return te;Xh=1;var l=Bc();function o(S){var p="https://react.dev/errors/"+S;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)p+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+S+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var r={d:{f:c,r:function(){throw Error(o(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function g(S,p,T){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:D==null?null:""+D,children:S,containerInfo:p,implementation:T}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(S,p){if(S==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,te.createPortal=function(S,p){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return g(S,p,null,T)},te.flushSync=function(S){var p=m.T,T=r.p;try{if(m.T=null,r.p=2,S)return S()}finally{m.T=p,r.p=T,r.d.f()}},te.preconnect=function(S,p){typeof S=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(S,p))},te.prefetchDNS=function(S){typeof S=="string"&&r.d.D(S)},te.preinit=function(S,p){if(typeof S=="string"&&p&&typeof p.as=="string"){var T=p.as,D=v(T,p.crossOrigin),H=typeof p.integrity=="string"?p.integrity:void 0,L=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;T==="style"?r.d.S(S,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:D,integrity:H,fetchPriority:L}):T==="script"&&r.d.X(S,{crossOrigin:D,integrity:H,fetchPriority:L,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},te.preinitModule=function(S,p){if(typeof S=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var T=v(p.as,p.crossOrigin);r.d.M(S,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(S)},te.preload=function(S,p){if(typeof S=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var T=p.as,D=v(T,p.crossOrigin);r.d.L(S,T,{crossOrigin:D,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},te.preloadModule=function(S,p){if(typeof S=="string")if(p){var T=v(p.as,p.crossOrigin);r.d.m(S,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(S)},te.requestFormReset=function(S){r.d.r(S)},te.unstable_batchedUpdates=function(S,p){return S(p)},te.useFormState=function(S,p,T){return m.H.useFormState(S,p,T)},te.useFormStatus=function(){return m.H.useHostTransitionStatus()},te.version="19.1.0",te}var Zh;function jg(){if(Zh)return xc.exports;Zh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),xc.exports=Cp(),xc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function Np(){if(Qh)return ui;Qh=1;var l=$p(),o=Bc(),c=jg();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function g(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function v(t){if(g(t)!==t)throw Error(r(188))}function S(t){var e=t.alternate;if(!e){if(e=g(t),e===null)throw Error(r(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var u=i.alternate;if(u===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===a)return v(i),t;if(u===n)return v(i),e;u=u.sibling}throw Error(r(188))}if(a.return!==n.return)a=i,n=u;else{for(var s=!1,d=i.child;d;){if(d===a){s=!0,a=i,n=u;break}if(d===n){s=!0,n=i,a=u;break}d=d.sibling}if(!s){for(d=u.child;d;){if(d===a){s=!0,a=u,n=i;break}if(d===n){s=!0,n=u,a=i;break}d=d.sibling}if(!s)throw Error(r(189))}}if(a.alternate!==n)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:e}function p(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=p(t),e!==null)return e;t=t.sibling}return null}var T=Object.assign,D=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),et=Symbol.for("react.profiler"),it=Symbol.for("react.provider"),lt=Symbol.for("react.consumer"),J=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Kt=Symbol.for("react.activity"),qe=Symbol.for("react.memo_cache_sentinel"),ce=Symbol.iterator;function Nt(t){return t===null||typeof t!="object"?null:(t=ce&&t[ce]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Symbol.for("react.client.reference");function Ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$e?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Z:return"Fragment";case et:return"Profiler";case P:return"StrictMode";case X:return"Suspense";case q:return"SuspenseList";case Kt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case L:return"Portal";case J:return(t.displayName||"Context")+".Provider";case lt:return(t._context.displayName||"Context")+".Consumer";case V:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Y:return e=t.displayName||null,e!==null?e:Ce(t.type)||"Memo";case ht:e=t._payload,t=t._init;try{return Ce(t(e))}catch{}}return null}var Ut=Array.isArray,M=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},nt=[],b=-1;function $(t){return{current:t}}function B(t){0>b||(t.current=nt[b],nt[b]=null,b--)}function k(t,e){b++,nt[b]=t.current,t.current=e}var K=$(null),ot=$(null),F=$(null),Dt=$(null);function mt(t,e){switch(k(F,e),k(ot,t),k(K,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?dh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=dh(e),t=hh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}B(K),k(K,t)}function zt(){B(K),B(ot),B(F)}function Se(t){t.memoizedState!==null&&k(Dt,t);var e=K.current,a=hh(e,t.type);e!==a&&(k(ot,t),k(K,a))}function Ee(t){ot.current===t&&(B(K),B(ot)),Dt.current===t&&(B(Dt),ti._currentValue=G)}var ae=Object.prototype.hasOwnProperty,on=l.unstable_scheduleCallback,ao=l.unstable_cancelCallback,u0=l.unstable_shouldYield,o0=l.unstable_requestPaint,ke=l.unstable_now,r0=l.unstable_getCurrentPriorityLevel,Zc=l.unstable_ImmediatePriority,Qc=l.unstable_UserBlockingPriority,vi=l.unstable_NormalPriority,c0=l.unstable_LowPriority,Vc=l.unstable_IdlePriority,s0=l.log,f0=l.unstable_setDisableYieldValue,rn=null,se=null;function ha(t){if(typeof s0=="function"&&f0(t),se&&typeof se.setStrictMode=="function")try{se.setStrictMode(rn,t)}catch{}}var fe=Math.clz32?Math.clz32:g0,d0=Math.log,h0=Math.LN2;function g0(t){return t>>>=0,t===0?32:31-(d0(t)/h0|0)|0}var xi=256,Si=4194304;function Ba(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ei(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,u=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var d=n&134217727;return d!==0?(n=d&~u,n!==0?i=Ba(n):(s&=d,s!==0?i=Ba(s):a||(a=d&~t,a!==0&&(i=Ba(a))))):(d=n&~u,d!==0?i=Ba(d):s!==0?i=Ba(s):a||(a=n&~t,a!==0&&(i=Ba(a)))),i===0?0:e!==0&&e!==i&&(e&u)===0&&(u=i&-i,a=e&-e,u>=a||u===32&&(a&4194048)!==0)?e:i}function cn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function m0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kc(){var t=xi;return xi<<=1,(xi&4194048)===0&&(xi=256),t}function Jc(){var t=Si;return Si<<=1,(Si&62914560)===0&&(Si=4194304),t}function lo(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function sn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function p0(t,e,a,n,i,u){var s=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var d=t.entanglements,y=t.expirationTimes,z=t.hiddenUpdates;for(a=s&~a;0<a;){var j=31-fe(a),C=1<<j;d[j]=0,y[j]=-1;var w=z[j];if(w!==null)for(z[j]=null,j=0;j<w.length;j++){var A=w[j];A!==null&&(A.lane&=-536870913)}a&=~C}n!==0&&Wc(t,n,0),u!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=u&~(s&~e))}function Wc(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-fe(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194090}function Fc(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-fe(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function no(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function io(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Pc(){var t=U.p;return t!==0?t:(t=window.event,t===void 0?32:Dh(t.type))}function y0(t,e){var a=U.p;try{return U.p=t,e()}finally{U.p=a}}var ga=Math.random().toString(36).slice(2),Pt="__reactFiber$"+ga,le="__reactProps$"+ga,rl="__reactContainer$"+ga,uo="__reactEvents$"+ga,b0="__reactListeners$"+ga,v0="__reactHandles$"+ga,Ic="__reactResources$"+ga,fn="__reactMarker$"+ga;function oo(t){delete t[Pt],delete t[le],delete t[uo],delete t[b0],delete t[v0]}function cl(t){var e=t[Pt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[rl]||a[Pt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=yh(t);t!==null;){if(a=t[Pt])return a;t=yh(t)}return e}t=a,a=t.parentNode}return null}function sl(t){if(t=t[Pt]||t[rl]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function dn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function fl(t){var e=t[Ic];return e||(e=t[Ic]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Gt(t){t[fn]=!0}var ts=new Set,es={};function qa(t,e){dl(t,e),dl(t+"Capture",e)}function dl(t,e){for(es[t]=e,t=0;t<e.length;t++)ts.add(e[t])}var x0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),as={},ls={};function S0(t){return ae.call(ls,t)?!0:ae.call(as,t)?!1:x0.test(t)?ls[t]=!0:(as[t]=!0,!1)}function Ti(t,e,a){if(S0(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function _i(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Ke(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}var ro,ns;function hl(t){if(ro===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);ro=e&&e[1]||"",ns=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ro+t+ns}var co=!1;function so(t,e){if(!t||co)return"";co=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(A){var w=A}Reflect.construct(t,[],C)}else{try{C.call()}catch(A){w=A}t.call(C.prototype)}}else{try{throw Error()}catch(A){w=A}(C=t())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(A){if(A&&w&&typeof A.stack=="string")return[A.stack,w.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),s=u[0],d=u[1];if(s&&d){var y=s.split(`
`),z=d.split(`
`);for(i=n=0;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(n===y.length||i===z.length)for(n=y.length-1,i=z.length-1;1<=n&&0<=i&&y[n]!==z[i];)i--;for(;1<=n&&0<=i;n--,i--)if(y[n]!==z[i]){if(n!==1||i!==1)do if(n--,i--,0>i||y[n]!==z[i]){var j=`
`+y[n].replace(" at new "," at ");return t.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",t.displayName)),j}while(1<=n&&0<=i);break}}}finally{co=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?hl(a):""}function E0(t){switch(t.tag){case 26:case 27:case 5:return hl(t.type);case 16:return hl("Lazy");case 13:return hl("Suspense");case 19:return hl("SuspenseList");case 0:case 15:return so(t.type,!1);case 11:return so(t.type.render,!1);case 1:return so(t.type,!0);case 31:return hl("Activity");default:return""}}function is(t){try{var e="";do e+=E0(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Te(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function us(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function T0(t){var e=us(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,u.call(this,s)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zi(t){t._valueTracker||(t._valueTracker=T0(t))}function os(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=us(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function Mi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var _0=/[\n"\\]/g;function _e(t){return t.replace(_0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function fo(t,e,a,n,i,u,s,d){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Te(e)):t.value!==""+Te(e)&&(t.value=""+Te(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?ho(t,s,Te(e)):a!=null?ho(t,s,Te(a)):n!=null&&t.removeAttribute("value"),i==null&&u!=null&&(t.defaultChecked=!!u),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+Te(d):t.removeAttribute("name")}function rs(t,e,a,n,i,u,s,d){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;a=a!=null?""+Te(a):"",e=e!=null?""+Te(e):a,d||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=d?t.checked:!!n,t.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function ho(t,e,a){e==="number"&&Mi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function gl(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+Te(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cs(t,e,a){if(e!=null&&(e=""+Te(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Te(a):""}function ss(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(r(92));if(Ut(n)){if(1<n.length)throw Error(r(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=Te(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function ml(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var z0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fs(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||z0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function ds(t,e,a){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&fs(t,i,n)}else for(var u in e)e.hasOwnProperty(u)&&fs(t,u,e[u])}function go(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),w0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wi(t){return w0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var mo=null;function po(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pl=null,yl=null;function hs(t){var e=sl(t);if(e&&(t=e.stateNode)){var a=t[le]||null;t:switch(t=e.stateNode,e.type){case"input":if(fo(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_e(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[le]||null;if(!i)throw Error(r(90));fo(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&os(n)}break t;case"textarea":cs(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&gl(t,!!a.multiple,e,!1)}}}var yo=!1;function gs(t,e,a){if(yo)return t(e,a);yo=!0;try{var n=t(e);return n}finally{if(yo=!1,(pl!==null||yl!==null)&&(du(),pl&&(e=pl,t=yl,yl=pl=null,hs(e),t)))for(e=0;e<t.length;e++)hs(t[e])}}function hn(t,e){var a=t.stateNode;if(a===null)return null;var n=a[le]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,e,typeof a));return a}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=!1;if(Je)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){bo=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{bo=!1}var ma=null,vo=null,Ai=null;function ms(){if(Ai)return Ai;var t,e=vo,a=e.length,n,i="value"in ma?ma.value:ma.textContent,u=i.length;for(t=0;t<a&&e[t]===i[t];t++);var s=a-t;for(n=1;n<=s&&e[a-n]===i[u-n];n++);return Ai=i.slice(t,1<n?1-n:void 0)}function ji(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oi(){return!0}function ps(){return!1}function ne(t){function e(a,n,i,u,s){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=u,this.target=s,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(a=t[d],this[d]=a?a(u):u[d]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Oi:ps,this.isPropagationStopped=ps,this}return T(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),e}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ri=ne(ka),mn=T({},ka,{view:0,detail:0}),A0=ne(mn),xo,So,pn,Di=T({},mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:To,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pn&&(pn&&t.type==="mousemove"?(xo=t.screenX-pn.screenX,So=t.screenY-pn.screenY):So=xo=0,pn=t),xo)},movementY:function(t){return"movementY"in t?t.movementY:So}}),ys=ne(Di),j0=T({},Di,{dataTransfer:0}),O0=ne(j0),R0=T({},mn,{relatedTarget:0}),Eo=ne(R0),D0=T({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=ne(D0),C0=T({},ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),N0=ne(C0),U0=T({},ka,{data:0}),bs=ne(U0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B0[t])?!!e[t]:!1}function To(){return q0}var k0=T({},mn,{key:function(t){if(t.key){var e=H0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ji(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?L0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:To,charCode:function(t){return t.type==="keypress"?ji(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ji(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),G0=ne(k0),Y0=T({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vs=ne(Y0),X0=T({},mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:To}),Z0=ne(X0),Q0=T({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=ne(Q0),K0=T({},Di,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=ne(K0),W0=T({},ka,{newState:0,oldState:0}),F0=ne(W0),P0=[9,13,27,32],_o=Je&&"CompositionEvent"in window,yn=null;Je&&"documentMode"in document&&(yn=document.documentMode);var I0=Je&&"TextEvent"in window&&!yn,xs=Je&&(!_o||yn&&8<yn&&11>=yn),Ss=" ",Es=!1;function Ts(t,e){switch(t){case"keyup":return P0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _s(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bl=!1;function tm(t,e){switch(t){case"compositionend":return _s(e);case"keypress":return e.which!==32?null:(Es=!0,Ss);case"textInput":return t=e.data,t===Ss&&Es?null:t;default:return null}}function em(t,e){if(bl)return t==="compositionend"||!_o&&Ts(t,e)?(t=ms(),Ai=vo=ma=null,bl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xs&&e.locale!=="ko"?null:e.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!am[t.type]:e==="textarea"}function Ms(t,e,a,n){pl?yl?yl.push(n):yl=[n]:pl=n,e=bu(e,"onChange"),0<e.length&&(a=new Ri("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var bn=null,vn=null;function lm(t){oh(t,0)}function $i(t){var e=dn(t);if(os(e))return t}function ws(t,e){if(t==="change")return e}var As=!1;if(Je){var zo;if(Je){var Mo="oninput"in document;if(!Mo){var js=document.createElement("div");js.setAttribute("oninput","return;"),Mo=typeof js.oninput=="function"}zo=Mo}else zo=!1;As=zo&&(!document.documentMode||9<document.documentMode)}function Os(){bn&&(bn.detachEvent("onpropertychange",Rs),vn=bn=null)}function Rs(t){if(t.propertyName==="value"&&$i(vn)){var e=[];Ms(e,vn,t,po(t)),gs(lm,e)}}function nm(t,e,a){t==="focusin"?(Os(),bn=e,vn=a,bn.attachEvent("onpropertychange",Rs)):t==="focusout"&&Os()}function im(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $i(vn)}function um(t,e){if(t==="click")return $i(e)}function om(t,e){if(t==="input"||t==="change")return $i(e)}function rm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var de=typeof Object.is=="function"?Object.is:rm;function xn(t,e){if(de(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ae.call(e,i)||!de(t[i],e[i]))return!1}return!0}function Ds(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $s(t,e){var a=Ds(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ds(a)}}function Cs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ns(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Mi(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Mi(t.document)}return e}function wo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var cm=Je&&"documentMode"in document&&11>=document.documentMode,vl=null,Ao=null,Sn=null,jo=!1;function Us(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jo||vl==null||vl!==Mi(n)||(n=vl,"selectionStart"in n&&wo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Sn&&xn(Sn,n)||(Sn=n,n=bu(Ao,"onSelect"),0<n.length&&(e=new Ri("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=vl)))}function Ga(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var xl={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},Oo={},Hs={};Je&&(Hs=document.createElement("div").style,"AnimationEvent"in window||(delete xl.animationend.animation,delete xl.animationiteration.animation,delete xl.animationstart.animation),"TransitionEvent"in window||delete xl.transitionend.transition);function Ya(t){if(Oo[t])return Oo[t];if(!xl[t])return t;var e=xl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Hs)return Oo[t]=e[a];return t}var Ls=Ya("animationend"),Bs=Ya("animationiteration"),qs=Ya("animationstart"),sm=Ya("transitionrun"),fm=Ya("transitionstart"),dm=Ya("transitioncancel"),ks=Ya("transitionend"),Gs=new Map,Ro="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ro.push("scrollEnd");function Ne(t,e){Gs.set(t,e),qa(e,[t])}var Ys=new WeakMap;function ze(t,e){if(typeof t=="object"&&t!==null){var a=Ys.get(t);return a!==void 0?a:(e={value:t,source:e,stack:is(e)},Ys.set(t,e),e)}return{value:t,source:e,stack:is(e)}}var Me=[],Sl=0,Do=0;function Ci(){for(var t=Sl,e=Do=Sl=0;e<t;){var a=Me[e];Me[e++]=null;var n=Me[e];Me[e++]=null;var i=Me[e];Me[e++]=null;var u=Me[e];if(Me[e++]=null,n!==null&&i!==null){var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}u!==0&&Xs(a,i,u)}}function Ni(t,e,a,n){Me[Sl++]=t,Me[Sl++]=e,Me[Sl++]=a,Me[Sl++]=n,Do|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function $o(t,e,a,n){return Ni(t,e,a,n),Ui(t)}function El(t,e){return Ni(t,null,null,e),Ui(t)}function Xs(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,u=t.return;u!==null;)u.childLanes|=a,n=u.alternate,n!==null&&(n.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(i=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,i&&e!==null&&(i=31-fe(a),t=u.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),u):null}function Ui(t){if(50<Qn)throw Qn=0,Br=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Tl={};function hm(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function he(t,e,a,n){return new hm(t,e,a,n)}function Co(t){return t=t.prototype,!(!t||!t.isReactComponent)}function We(t,e){var a=t.alternate;return a===null?(a=he(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Zs(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Hi(t,e,a,n,i,u){var s=0;if(n=t,typeof t=="function")Co(t)&&(s=1);else if(typeof t=="string")s=mp(t,a,K.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Kt:return t=he(31,a,e,i),t.elementType=Kt,t.lanes=u,t;case Z:return Xa(a.children,i,u,e);case P:s=8,i|=24;break;case et:return t=he(12,a,e,i|2),t.elementType=et,t.lanes=u,t;case X:return t=he(13,a,e,i),t.elementType=X,t.lanes=u,t;case q:return t=he(19,a,e,i),t.elementType=q,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case it:case J:s=10;break t;case lt:s=9;break t;case V:s=11;break t;case Y:s=14;break t;case ht:s=16,n=null;break t}s=29,a=Error(r(130,t===null?"null":typeof t,"")),n=null}return e=he(s,a,e,i),e.elementType=t,e.type=n,e.lanes=u,e}function Xa(t,e,a,n){return t=he(7,t,n,e),t.lanes=a,t}function No(t,e,a){return t=he(6,t,null,e),t.lanes=a,t}function Uo(t,e,a){return e=he(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var _l=[],zl=0,Li=null,Bi=0,we=[],Ae=0,Za=null,Fe=1,Pe="";function Qa(t,e){_l[zl++]=Bi,_l[zl++]=Li,Li=t,Bi=e}function Qs(t,e,a){we[Ae++]=Fe,we[Ae++]=Pe,we[Ae++]=Za,Za=t;var n=Fe;t=Pe;var i=32-fe(n)-1;n&=~(1<<i),a+=1;var u=32-fe(e)+i;if(30<u){var s=i-i%5;u=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Fe=1<<32-fe(e)+i|a<<i|n,Pe=u+t}else Fe=1<<u|a<<i|n,Pe=t}function Ho(t){t.return!==null&&(Qa(t,1),Qs(t,1,0))}function Lo(t){for(;t===Li;)Li=_l[--zl],_l[zl]=null,Bi=_l[--zl],_l[zl]=null;for(;t===Za;)Za=we[--Ae],we[Ae]=null,Pe=we[--Ae],we[Ae]=null,Fe=we[--Ae],we[Ae]=null}var ee=null,Ot=null,yt=!1,Va=null,Ge=!1,Bo=Error(r(519));function Ka(t){var e=Error(r(418,""));throw _n(ze(e,t)),Bo}function Vs(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[Pt]=t,e[le]=n,a){case"dialog":dt("cancel",e),dt("close",e);break;case"iframe":case"object":case"embed":dt("load",e);break;case"video":case"audio":for(a=0;a<Kn.length;a++)dt(Kn[a],e);break;case"source":dt("error",e);break;case"img":case"image":case"link":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"input":dt("invalid",e),rs(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),zi(e);break;case"select":dt("invalid",e);break;case"textarea":dt("invalid",e),ss(e,n.value,n.defaultValue,n.children),zi(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||fh(e.textContent,a)?(n.popover!=null&&(dt("beforetoggle",e),dt("toggle",e)),n.onScroll!=null&&dt("scroll",e),n.onScrollEnd!=null&&dt("scrollend",e),n.onClick!=null&&(e.onclick=vu),e=!0):e=!1,e||Ka(t)}function Ks(t){for(ee=t.return;ee;)switch(ee.tag){case 5:case 13:Ge=!1;return;case 27:case 3:Ge=!0;return;default:ee=ee.return}}function En(t){if(t!==ee)return!1;if(!yt)return Ks(t),yt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ec(t.type,t.memoizedProps)),a=!a),a&&Ot&&Ka(t),Ks(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Ot=He(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Ot=null}}else e===27?(e=Ot,Ra(t.type)?(t=ic,ic=null,Ot=t):Ot=e):Ot=ee?He(t.stateNode.nextSibling):null;return!0}function Tn(){Ot=ee=null,yt=!1}function Js(){var t=Va;return t!==null&&(oe===null?oe=t:oe.push.apply(oe,t),Va=null),t}function _n(t){Va===null?Va=[t]:Va.push(t)}var qo=$(null),Ja=null,Ie=null;function pa(t,e,a){k(qo,e._currentValue),e._currentValue=a}function ta(t){t._currentValue=qo.current,B(qo)}function ko(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function Go(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){var s=i.child;u=u.firstContext;t:for(;u!==null;){var d=u;u=i;for(var y=0;y<e.length;y++)if(d.context===e[y]){u.lanes|=a,d=u.alternate,d!==null&&(d.lanes|=a),ko(u.return,a,t),n||(s=null);break t}u=d.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(r(341));s.lanes|=a,u=s.alternate,u!==null&&(u.lanes|=a),ko(s,a,t),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function zn(t,e,a,n){t=null;for(var i=e,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(r(387));if(s=s.memoizedProps,s!==null){var d=i.type;de(i.pendingProps.value,s.value)||(t!==null?t.push(d):t=[d])}}else if(i===Dt.current){if(s=i.alternate,s===null)throw Error(r(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(ti):t=[ti])}i=i.return}t!==null&&Go(e,t,a,n),e.flags|=262144}function qi(t){for(t=t.firstContext;t!==null;){if(!de(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Wa(t){Ja=t,Ie=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function It(t){return Ws(Ja,t)}function ki(t,e){return Ja===null&&Wa(t),Ws(t,e)}function Ws(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ie===null){if(t===null)throw Error(r(308));Ie=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ie=Ie.next=e;return a}var gm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},mm=l.unstable_scheduleCallback,pm=l.unstable_NormalPriority,qt={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yo(){return{controller:new gm,data:new Map,refCount:0}}function Mn(t){t.refCount--,t.refCount===0&&mm(pm,function(){t.controller.abort()})}var wn=null,Xo=0,Ml=0,wl=null;function ym(t,e){if(wn===null){var a=wn=[];Xo=0,Ml=Qr(),wl={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Xo++,e.then(Fs,Fs),e}function Fs(){if(--Xo===0&&wn!==null){wl!==null&&(wl.status="fulfilled");var t=wn;wn=null,Ml=0,wl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function bm(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Ps=M.S;M.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&ym(t,e),Ps!==null&&Ps(t,e)};var Fa=$(null);function Zo(){var t=Fa.current;return t!==null?t:Mt.pooledCache}function Gi(t,e){e===null?k(Fa,Fa.current):k(Fa,e.pool)}function Is(){var t=Zo();return t===null?null:{parent:qt._currentValue,pool:t}}var An=Error(r(460)),tf=Error(r(474)),Yi=Error(r(542)),Qo={then:function(){}};function ef(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xi(){}function af(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Xi,Xi),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,nf(t),t;default:if(typeof e.status=="string")e.then(Xi,Xi);else{if(t=Mt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,nf(t),t}throw jn=e,An}}var jn=null;function lf(){if(jn===null)throw Error(r(459));var t=jn;return jn=null,t}function nf(t){if(t===An||t===Yi)throw Error(r(483))}var ya=!1;function Vo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ko(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function va(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(vt&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=Ui(t),Xs(t,null,a),e}return Ni(t,n,e,a),Ui(t)}function On(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Fc(t,a)}}function Jo(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?i=u=s:u=u.next=s,a=a.next}while(a!==null);u===null?i=u=e:u=u.next=e}else i=u=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Wo=!1;function Rn(){if(Wo){var t=wl;if(t!==null)throw t}}function Dn(t,e,a,n){Wo=!1;var i=t.updateQueue;ya=!1;var u=i.firstBaseUpdate,s=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var y=d,z=y.next;y.next=null,s===null?u=z:s.next=z,s=y;var j=t.alternate;j!==null&&(j=j.updateQueue,d=j.lastBaseUpdate,d!==s&&(d===null?j.firstBaseUpdate=z:d.next=z,j.lastBaseUpdate=y))}if(u!==null){var C=i.baseState;s=0,j=z=y=null,d=u;do{var w=d.lane&-536870913,A=w!==d.lane;if(A?(gt&w)===w:(n&w)===w){w!==0&&w===Ml&&(Wo=!0),j!==null&&(j=j.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var at=t,I=d;w=e;var Tt=a;switch(I.tag){case 1:if(at=I.payload,typeof at=="function"){C=at.call(Tt,C,w);break t}C=at;break t;case 3:at.flags=at.flags&-65537|128;case 0:if(at=I.payload,w=typeof at=="function"?at.call(Tt,C,w):at,w==null)break t;C=T({},C,w);break t;case 2:ya=!0}}w=d.callback,w!==null&&(t.flags|=64,A&&(t.flags|=8192),A=i.callbacks,A===null?i.callbacks=[w]:A.push(w))}else A={lane:w,tag:d.tag,payload:d.payload,callback:d.callback,next:null},j===null?(z=j=A,y=C):j=j.next=A,s|=w;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;A=d,d=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(!0);j===null&&(y=C),i.baseState=y,i.firstBaseUpdate=z,i.lastBaseUpdate=j,u===null&&(i.shared.lanes=0),wa|=s,t.lanes=s,t.memoizedState=C}}function uf(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function of(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)uf(a[t],e)}var Al=$(null),Zi=$(0);function rf(t,e){t=oa,k(Zi,t),k(Al,e),oa=t|e.baseLanes}function Fo(){k(Zi,oa),k(Al,Al.current)}function Po(){oa=Zi.current,B(Al),B(Zi)}var xa=0,ct=null,St=null,Ht=null,Qi=!1,jl=!1,Pa=!1,Vi=0,$n=0,Ol=null,vm=0;function $t(){throw Error(r(321))}function Io(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!de(t[a],e[a]))return!1;return!0}function tr(t,e,a,n,i,u){return xa=u,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,M.H=t===null||t.memoizedState===null?Zf:Qf,Pa=!1,u=a(n,i),Pa=!1,jl&&(u=sf(e,a,n,i)),cf(t),u}function cf(t){M.H=Ii;var e=St!==null&&St.next!==null;if(xa=0,Ht=St=ct=null,Qi=!1,$n=0,Ol=null,e)throw Error(r(300));t===null||Yt||(t=t.dependencies,t!==null&&qi(t)&&(Yt=!0))}function sf(t,e,a,n){ct=t;var i=0;do{if(jl&&(Ol=null),$n=0,jl=!1,25<=i)throw Error(r(301));if(i+=1,Ht=St=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}M.H=Mm,u=e(a,n)}while(jl);return u}function xm(){var t=M.H,e=t.useState()[0];return e=typeof e.then=="function"?Cn(e):e,t=t.useState()[0],(St!==null?St.memoizedState:null)!==t&&(ct.flags|=1024),e}function er(){var t=Vi!==0;return Vi=0,t}function ar(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function lr(t){if(Qi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Qi=!1}xa=0,Ht=St=ct=null,jl=!1,$n=Vi=0,Ol=null}function ie(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?ct.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Lt(){if(St===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Ht===null?ct.memoizedState:Ht.next;if(e!==null)Ht=e,St=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ht===null?ct.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function nr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cn(t){var e=$n;return $n+=1,Ol===null&&(Ol=[]),t=af(Ol,t,e),e=ct,(Ht===null?e.memoizedState:Ht.next)===null&&(e=e.alternate,M.H=e===null||e.memoizedState===null?Zf:Qf),t}function Ki(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Cn(t);if(t.$$typeof===J)return It(t)}throw Error(r(438,String(t)))}function ir(t){var e=null,a=ct.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=ct.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=nr(),ct.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=qe;return e.index++,a}function ea(t,e){return typeof e=="function"?e(t):e}function Ji(t){var e=Lt();return ur(e,St,t)}function ur(t,e,a){var n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=a;var i=t.baseQueue,u=n.pending;if(u!==null){if(i!==null){var s=i.next;i.next=u.next,u.next=s}e.baseQueue=i=u,n.pending=null}if(u=t.baseState,i===null)t.memoizedState=u;else{e=i.next;var d=s=null,y=null,z=e,j=!1;do{var C=z.lane&-536870913;if(C!==z.lane?(gt&C)===C:(xa&C)===C){var w=z.revertLane;if(w===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),C===Ml&&(j=!0);else if((xa&w)===w){z=z.next,w===Ml&&(j=!0);continue}else C={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},y===null?(d=y=C,s=u):y=y.next=C,ct.lanes|=w,wa|=w;C=z.action,Pa&&a(u,C),u=z.hasEagerState?z.eagerState:a(u,C)}else w={lane:C,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},y===null?(d=y=w,s=u):y=y.next=w,ct.lanes|=C,wa|=C;z=z.next}while(z!==null&&z!==e);if(y===null?s=u:y.next=d,!de(u,t.memoizedState)&&(Yt=!0,j&&(a=wl,a!==null)))throw a;t.memoizedState=u,t.baseState=s,t.baseQueue=y,n.lastRenderedState=u}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function or(t){var e=Lt(),a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,u=e.memoizedState;if(i!==null){a.pending=null;var s=i=i.next;do u=t(u,s.action),s=s.next;while(s!==i);de(u,e.memoizedState)||(Yt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),a.lastRenderedState=u}return[u,n]}function ff(t,e,a){var n=ct,i=Lt(),u=yt;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=e();var s=!de((St||i).memoizedState,a);s&&(i.memoizedState=a,Yt=!0),i=i.queue;var d=gf.bind(null,n,i,t);if(Nn(2048,8,d,[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Rl(9,Wi(),hf.bind(null,n,i,a,e),null),Mt===null)throw Error(r(349));u||(xa&124)!==0||df(n,e,a)}return a}function df(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ct.updateQueue,e===null?(e=nr(),ct.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function hf(t,e,a,n){e.value=a,e.getSnapshot=n,mf(e)&&pf(t)}function gf(t,e,a){return a(function(){mf(e)&&pf(t)})}function mf(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!de(t,a)}catch{return!0}}function pf(t){var e=El(t,2);e!==null&&be(e,t,2)}function rr(t){var e=ie();if(typeof t=="function"){var a=t;if(t=a(),Pa){ha(!0);try{a()}finally{ha(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e}function yf(t,e,a,n){return t.baseState=a,ur(t,St,typeof n=="function"?n:ea)}function Sm(t,e,a,n,i){if(Pi(t))throw Error(r(485));if(t=e.action,t!==null){var u={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){u.listeners.push(s)}};M.T!==null?a(!0):u.isTransition=!1,n(u),a=e.pending,a===null?(u.next=e.pending=u,bf(e,u)):(u.next=a.next,e.pending=a.next=u)}}function bf(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var u=M.T,s={};M.T=s;try{var d=a(i,n),y=M.S;y!==null&&y(s,d),vf(t,e,d)}catch(z){cr(t,e,z)}finally{M.T=u}}else try{u=a(i,n),vf(t,e,u)}catch(z){cr(t,e,z)}}function vf(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){xf(t,e,n)},function(n){return cr(t,e,n)}):xf(t,e,a)}function xf(t,e,a){e.status="fulfilled",e.value=a,Sf(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,bf(t,a)))}function cr(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,Sf(e),e=e.next;while(e!==n)}t.action=null}function Sf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ef(t,e){return e}function Tf(t,e){if(yt){var a=Mt.formState;if(a!==null){t:{var n=ct;if(yt){if(Ot){e:{for(var i=Ot,u=Ge;i.nodeType!==8;){if(!u){i=null;break e}if(i=He(i.nextSibling),i===null){i=null;break e}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){Ot=He(i.nextSibling),n=i.data==="F!";break t}}Ka(n)}n=!1}n&&(e=a[0])}}return a=ie(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ef,lastRenderedState:e},a.queue=n,a=Gf.bind(null,ct,n),n.dispatch=a,n=rr(!1),u=gr.bind(null,ct,!1,n.queue),n=ie(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=Sm.bind(null,ct,i,u,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function _f(t){var e=Lt();return zf(e,St,t)}function zf(t,e,a){if(e=ur(t,e,Ef)[0],t=Ji(ea)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Cn(e)}catch(s){throw s===An?Yi:s}else n=e;e=Lt();var i=e.queue,u=i.dispatch;return a!==e.memoizedState&&(ct.flags|=2048,Rl(9,Wi(),Em.bind(null,i,a),null)),[n,u,t]}function Em(t,e){t.action=e}function Mf(t){var e=Lt(),a=St;if(a!==null)return zf(e,a,t);Lt(),e=e.memoizedState,a=Lt();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Rl(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=ct.updateQueue,e===null&&(e=nr(),ct.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Wi(){return{destroy:void 0,resource:void 0}}function wf(){return Lt().memoizedState}function Fi(t,e,a,n){var i=ie();n=n===void 0?null:n,ct.flags|=t,i.memoizedState=Rl(1|e,Wi(),a,n)}function Nn(t,e,a,n){var i=Lt();n=n===void 0?null:n;var u=i.memoizedState.inst;St!==null&&n!==null&&Io(n,St.memoizedState.deps)?i.memoizedState=Rl(e,u,a,n):(ct.flags|=t,i.memoizedState=Rl(1|e,u,a,n))}function Af(t,e){Fi(8390656,8,t,e)}function jf(t,e){Nn(2048,8,t,e)}function Of(t,e){return Nn(4,2,t,e)}function Rf(t,e){return Nn(4,4,t,e)}function Df(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $f(t,e,a){a=a!=null?a.concat([t]):null,Nn(4,4,Df.bind(null,e,t),a)}function sr(){}function Cf(t,e){var a=Lt();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Io(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function Nf(t,e){var a=Lt();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Io(e,n[1]))return n[0];if(n=t(),Pa){ha(!0);try{t()}finally{ha(!1)}}return a.memoizedState=[n,e],n}function fr(t,e,a){return a===void 0||(xa&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=Ld(),ct.lanes|=t,wa|=t,a)}function Uf(t,e,a,n){return de(a,e)?a:Al.current!==null?(t=fr(t,a,n),de(t,e)||(Yt=!0),t):(xa&42)===0?(Yt=!0,t.memoizedState=a):(t=Ld(),ct.lanes|=t,wa|=t,e)}function Hf(t,e,a,n,i){var u=U.p;U.p=u!==0&&8>u?u:8;var s=M.T,d={};M.T=d,gr(t,!1,e,a);try{var y=i(),z=M.S;if(z!==null&&z(d,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var j=bm(y,n);Un(t,e,j,ye(t))}else Un(t,e,n,ye(t))}catch(C){Un(t,e,{then:function(){},status:"rejected",reason:C},ye())}finally{U.p=u,M.T=s}}function Tm(){}function dr(t,e,a,n){if(t.tag!==5)throw Error(r(476));var i=Lf(t).queue;Hf(t,i,e,G,a===null?Tm:function(){return Bf(t),a(n)})}function Lf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:G},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Bf(t){var e=Lf(t).next.queue;Un(t,e,{},ye())}function hr(){return It(ti)}function qf(){return Lt().memoizedState}function kf(){return Lt().memoizedState}function _m(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=ye();t=ba(a);var n=va(e,t,a);n!==null&&(be(n,e,a),On(n,e,a)),e={cache:Yo()},t.payload=e;return}e=e.return}}function zm(t,e,a){var n=ye();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Pi(t)?Yf(e,a):(a=$o(t,e,a,n),a!==null&&(be(a,t,n),Xf(a,e,n)))}function Gf(t,e,a){var n=ye();Un(t,e,a,n)}function Un(t,e,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pi(t))Yf(e,i);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var s=e.lastRenderedState,d=u(s,a);if(i.hasEagerState=!0,i.eagerState=d,de(d,s))return Ni(t,e,i,0),Mt===null&&Ci(),!1}catch{}finally{}if(a=$o(t,e,i,n),a!==null)return be(a,t,n),Xf(a,e,n),!0}return!1}function gr(t,e,a,n){if(n={lane:2,revertLane:Qr(),action:n,hasEagerState:!1,eagerState:null,next:null},Pi(t)){if(e)throw Error(r(479))}else e=$o(t,a,n,2),e!==null&&be(e,t,2)}function Pi(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Yf(t,e){jl=Qi=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Xf(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Fc(t,a)}}var Ii={readContext:It,use:Ki,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t},Zf={readContext:It,use:Ki,useCallback:function(t,e){return ie().memoizedState=[t,e===void 0?null:e],t},useContext:It,useEffect:Af,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Fi(4194308,4,Df.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Fi(4194308,4,t,e)},useInsertionEffect:function(t,e){Fi(4,2,t,e)},useMemo:function(t,e){var a=ie();e=e===void 0?null:e;var n=t();if(Pa){ha(!0);try{t()}finally{ha(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=ie();if(a!==void 0){var i=a(e);if(Pa){ha(!0);try{a(e)}finally{ha(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=zm.bind(null,ct,t),[n.memoizedState,t]},useRef:function(t){var e=ie();return t={current:t},e.memoizedState=t},useState:function(t){t=rr(t);var e=t.queue,a=Gf.bind(null,ct,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:sr,useDeferredValue:function(t,e){var a=ie();return fr(a,t,e)},useTransition:function(){var t=rr(!1);return t=Hf.bind(null,ct,t.queue,!0,!1),ie().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=ct,i=ie();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=e(),Mt===null)throw Error(r(349));(gt&124)!==0||df(n,e,a)}i.memoizedState=a;var u={value:a,getSnapshot:e};return i.queue=u,Af(gf.bind(null,n,u,t),[t]),n.flags|=2048,Rl(9,Wi(),hf.bind(null,n,u,a,e),null),a},useId:function(){var t=ie(),e=Mt.identifierPrefix;if(yt){var a=Pe,n=Fe;a=(n&~(1<<32-fe(n)-1)).toString(32)+a,e="«"+e+"R"+a,a=Vi++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=vm++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:hr,useFormState:Tf,useActionState:Tf,useOptimistic:function(t){var e=ie();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=gr.bind(null,ct,!0,a),a.dispatch=e,[t,e]},useMemoCache:ir,useCacheRefresh:function(){return ie().memoizedState=_m.bind(null,ct)}},Qf={readContext:It,use:Ki,useCallback:Cf,useContext:It,useEffect:jf,useImperativeHandle:$f,useInsertionEffect:Of,useLayoutEffect:Rf,useMemo:Nf,useReducer:Ji,useRef:wf,useState:function(){return Ji(ea)},useDebugValue:sr,useDeferredValue:function(t,e){var a=Lt();return Uf(a,St.memoizedState,t,e)},useTransition:function(){var t=Ji(ea)[0],e=Lt().memoizedState;return[typeof t=="boolean"?t:Cn(t),e]},useSyncExternalStore:ff,useId:qf,useHostTransitionStatus:hr,useFormState:_f,useActionState:_f,useOptimistic:function(t,e){var a=Lt();return yf(a,St,t,e)},useMemoCache:ir,useCacheRefresh:kf},Mm={readContext:It,use:Ki,useCallback:Cf,useContext:It,useEffect:jf,useImperativeHandle:$f,useInsertionEffect:Of,useLayoutEffect:Rf,useMemo:Nf,useReducer:or,useRef:wf,useState:function(){return or(ea)},useDebugValue:sr,useDeferredValue:function(t,e){var a=Lt();return St===null?fr(a,t,e):Uf(a,St.memoizedState,t,e)},useTransition:function(){var t=or(ea)[0],e=Lt().memoizedState;return[typeof t=="boolean"?t:Cn(t),e]},useSyncExternalStore:ff,useId:qf,useHostTransitionStatus:hr,useFormState:Mf,useActionState:Mf,useOptimistic:function(t,e){var a=Lt();return St!==null?yf(a,St,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ir,useCacheRefresh:kf},Dl=null,Hn=0;function tu(t){var e=Hn;return Hn+=1,Dl===null&&(Dl=[]),af(Dl,t,e)}function Ln(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function eu(t,e){throw e.$$typeof===D?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Vf(t){var e=t._init;return e(t._payload)}function Kf(t){function e(E,x){if(t){var _=E.deletions;_===null?(E.deletions=[x],E.flags|=16):_.push(x)}}function a(E,x){if(!t)return null;for(;x!==null;)e(E,x),x=x.sibling;return null}function n(E){for(var x=new Map;E!==null;)E.key!==null?x.set(E.key,E):x.set(E.index,E),E=E.sibling;return x}function i(E,x){return E=We(E,x),E.index=0,E.sibling=null,E}function u(E,x,_){return E.index=_,t?(_=E.alternate,_!==null?(_=_.index,_<x?(E.flags|=67108866,x):_):(E.flags|=67108866,x)):(E.flags|=1048576,x)}function s(E){return t&&E.alternate===null&&(E.flags|=67108866),E}function d(E,x,_,O){return x===null||x.tag!==6?(x=No(_,E.mode,O),x.return=E,x):(x=i(x,_),x.return=E,x)}function y(E,x,_,O){var Q=_.type;return Q===Z?j(E,x,_.props.children,O,_.key):x!==null&&(x.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===ht&&Vf(Q)===x.type)?(x=i(x,_.props),Ln(x,_),x.return=E,x):(x=Hi(_.type,_.key,_.props,null,E.mode,O),Ln(x,_),x.return=E,x)}function z(E,x,_,O){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=Uo(_,E.mode,O),x.return=E,x):(x=i(x,_.children||[]),x.return=E,x)}function j(E,x,_,O,Q){return x===null||x.tag!==7?(x=Xa(_,E.mode,O,Q),x.return=E,x):(x=i(x,_),x.return=E,x)}function C(E,x,_){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=No(""+x,E.mode,_),x.return=E,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case H:return _=Hi(x.type,x.key,x.props,null,E.mode,_),Ln(_,x),_.return=E,_;case L:return x=Uo(x,E.mode,_),x.return=E,x;case ht:var O=x._init;return x=O(x._payload),C(E,x,_)}if(Ut(x)||Nt(x))return x=Xa(x,E.mode,_,null),x.return=E,x;if(typeof x.then=="function")return C(E,tu(x),_);if(x.$$typeof===J)return C(E,ki(E,x),_);eu(E,x)}return null}function w(E,x,_,O){var Q=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return Q!==null?null:d(E,x,""+_,O);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case H:return _.key===Q?y(E,x,_,O):null;case L:return _.key===Q?z(E,x,_,O):null;case ht:return Q=_._init,_=Q(_._payload),w(E,x,_,O)}if(Ut(_)||Nt(_))return Q!==null?null:j(E,x,_,O,null);if(typeof _.then=="function")return w(E,x,tu(_),O);if(_.$$typeof===J)return w(E,x,ki(E,_),O);eu(E,_)}return null}function A(E,x,_,O,Q){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return E=E.get(_)||null,d(x,E,""+O,Q);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case H:return E=E.get(O.key===null?_:O.key)||null,y(x,E,O,Q);case L:return E=E.get(O.key===null?_:O.key)||null,z(x,E,O,Q);case ht:var st=O._init;return O=st(O._payload),A(E,x,_,O,Q)}if(Ut(O)||Nt(O))return E=E.get(_)||null,j(x,E,O,Q,null);if(typeof O.then=="function")return A(E,x,_,tu(O),Q);if(O.$$typeof===J)return A(E,x,_,ki(x,O),Q);eu(x,O)}return null}function at(E,x,_,O){for(var Q=null,st=null,W=x,tt=x=0,Zt=null;W!==null&&tt<_.length;tt++){W.index>tt?(Zt=W,W=null):Zt=W.sibling;var pt=w(E,W,_[tt],O);if(pt===null){W===null&&(W=Zt);break}t&&W&&pt.alternate===null&&e(E,W),x=u(pt,x,tt),st===null?Q=pt:st.sibling=pt,st=pt,W=Zt}if(tt===_.length)return a(E,W),yt&&Qa(E,tt),Q;if(W===null){for(;tt<_.length;tt++)W=C(E,_[tt],O),W!==null&&(x=u(W,x,tt),st===null?Q=W:st.sibling=W,st=W);return yt&&Qa(E,tt),Q}for(W=n(W);tt<_.length;tt++)Zt=A(W,E,tt,_[tt],O),Zt!==null&&(t&&Zt.alternate!==null&&W.delete(Zt.key===null?tt:Zt.key),x=u(Zt,x,tt),st===null?Q=Zt:st.sibling=Zt,st=Zt);return t&&W.forEach(function(Ua){return e(E,Ua)}),yt&&Qa(E,tt),Q}function I(E,x,_,O){if(_==null)throw Error(r(151));for(var Q=null,st=null,W=x,tt=x=0,Zt=null,pt=_.next();W!==null&&!pt.done;tt++,pt=_.next()){W.index>tt?(Zt=W,W=null):Zt=W.sibling;var Ua=w(E,W,pt.value,O);if(Ua===null){W===null&&(W=Zt);break}t&&W&&Ua.alternate===null&&e(E,W),x=u(Ua,x,tt),st===null?Q=Ua:st.sibling=Ua,st=Ua,W=Zt}if(pt.done)return a(E,W),yt&&Qa(E,tt),Q;if(W===null){for(;!pt.done;tt++,pt=_.next())pt=C(E,pt.value,O),pt!==null&&(x=u(pt,x,tt),st===null?Q=pt:st.sibling=pt,st=pt);return yt&&Qa(E,tt),Q}for(W=n(W);!pt.done;tt++,pt=_.next())pt=A(W,E,tt,pt.value,O),pt!==null&&(t&&pt.alternate!==null&&W.delete(pt.key===null?tt:pt.key),x=u(pt,x,tt),st===null?Q=pt:st.sibling=pt,st=pt);return t&&W.forEach(function(wp){return e(E,wp)}),yt&&Qa(E,tt),Q}function Tt(E,x,_,O){if(typeof _=="object"&&_!==null&&_.type===Z&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case H:t:{for(var Q=_.key;x!==null;){if(x.key===Q){if(Q=_.type,Q===Z){if(x.tag===7){a(E,x.sibling),O=i(x,_.props.children),O.return=E,E=O;break t}}else if(x.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===ht&&Vf(Q)===x.type){a(E,x.sibling),O=i(x,_.props),Ln(O,_),O.return=E,E=O;break t}a(E,x);break}else e(E,x);x=x.sibling}_.type===Z?(O=Xa(_.props.children,E.mode,O,_.key),O.return=E,E=O):(O=Hi(_.type,_.key,_.props,null,E.mode,O),Ln(O,_),O.return=E,E=O)}return s(E);case L:t:{for(Q=_.key;x!==null;){if(x.key===Q)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){a(E,x.sibling),O=i(x,_.children||[]),O.return=E,E=O;break t}else{a(E,x);break}else e(E,x);x=x.sibling}O=Uo(_,E.mode,O),O.return=E,E=O}return s(E);case ht:return Q=_._init,_=Q(_._payload),Tt(E,x,_,O)}if(Ut(_))return at(E,x,_,O);if(Nt(_)){if(Q=Nt(_),typeof Q!="function")throw Error(r(150));return _=Q.call(_),I(E,x,_,O)}if(typeof _.then=="function")return Tt(E,x,tu(_),O);if(_.$$typeof===J)return Tt(E,x,ki(E,_),O);eu(E,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,x!==null&&x.tag===6?(a(E,x.sibling),O=i(x,_),O.return=E,E=O):(a(E,x),O=No(_,E.mode,O),O.return=E,E=O),s(E)):a(E,x)}return function(E,x,_,O){try{Hn=0;var Q=Tt(E,x,_,O);return Dl=null,Q}catch(W){if(W===An||W===Yi)throw W;var st=he(29,W,null,E.mode);return st.lanes=O,st.return=E,st}finally{}}}var $l=Kf(!0),Jf=Kf(!1),je=$(null),Ye=null;function Sa(t){var e=t.alternate;k(kt,kt.current&1),k(je,t),Ye===null&&(e===null||Al.current!==null||e.memoizedState!==null)&&(Ye=t)}function Wf(t){if(t.tag===22){if(k(kt,kt.current),k(je,t),Ye===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ye=t)}}else Ea()}function Ea(){k(kt,kt.current),k(je,je.current)}function aa(t){B(je),Ye===t&&(Ye=null),B(kt)}var kt=$(0);function au(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||nc(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function mr(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:T({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var pr={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=ye(),i=ba(n);i.payload=e,a!=null&&(i.callback=a),e=va(t,i,n),e!==null&&(be(e,t,n),On(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=ye(),i=ba(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=va(t,i,n),e!==null&&(be(e,t,n),On(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=ye(),n=ba(a);n.tag=2,e!=null&&(n.callback=e),e=va(t,n,a),e!==null&&(be(e,t,a),On(e,t,a))}};function Ff(t,e,a,n,i,u,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,u,s):e.prototype&&e.prototype.isPureReactComponent?!xn(a,n)||!xn(i,u):!0}function Pf(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&pr.enqueueReplaceState(e,e.state,null)}function Ia(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=T({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}var lu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function If(t){lu(t)}function td(t){console.error(t)}function ed(t){lu(t)}function nu(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function ad(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function yr(t,e,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){nu(t,e)},a}function ld(t){return t=ba(t),t.tag=3,t}function nd(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var u=n.value;t.payload=function(){return i(u)},t.callback=function(){ad(e,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ad(e,a,n),typeof i!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})})}function wm(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&zn(e,a,i,!0),a=je.current,a!==null){switch(a.tag){case 13:return Ye===null?kr():a.alternate===null&&Rt===0&&(Rt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Qo?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),Yr(t,n,i)),!1;case 22:return a.flags|=65536,n===Qo?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),Yr(t,n,i)),!1}throw Error(r(435,a.tag))}return Yr(t,n,i),kr(),!1}if(yt)return e=je.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==Bo&&(t=Error(r(422),{cause:n}),_n(ze(t,a)))):(n!==Bo&&(e=Error(r(423),{cause:n}),_n(ze(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=ze(n,a),i=yr(t.stateNode,n,i),Jo(t,i),Rt!==4&&(Rt=2)),!1;var u=Error(r(520),{cause:n});if(u=ze(u,a),Zn===null?Zn=[u]:Zn.push(u),Rt!==4&&(Rt=2),e===null)return!0;n=ze(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=yr(a.stateNode,n,t),Jo(a,t),!1;case 1:if(e=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Aa===null||!Aa.has(u))))return a.flags|=65536,i&=-i,a.lanes|=i,i=ld(i),nd(i,t,a,n),Jo(a,i),!1}a=a.return}while(a!==null);return!1}var id=Error(r(461)),Yt=!1;function Jt(t,e,a,n){e.child=t===null?Jf(e,null,a,n):$l(e,t.child,a,n)}function ud(t,e,a,n,i){a=a.render;var u=e.ref;if("ref"in n){var s={};for(var d in n)d!=="ref"&&(s[d]=n[d])}else s=n;return Wa(e),n=tr(t,e,a,s,u,i),d=er(),t!==null&&!Yt?(ar(t,e,i),la(t,e,i)):(yt&&d&&Ho(e),e.flags|=1,Jt(t,e,n,i),e.child)}function od(t,e,a,n,i){if(t===null){var u=a.type;return typeof u=="function"&&!Co(u)&&u.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=u,rd(t,e,u,n,i)):(t=Hi(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!zr(t,i)){var s=u.memoizedProps;if(a=a.compare,a=a!==null?a:xn,a(s,n)&&t.ref===e.ref)return la(t,e,i)}return e.flags|=1,t=We(u,n),t.ref=e.ref,t.return=e,e.child=t}function rd(t,e,a,n,i){if(t!==null){var u=t.memoizedProps;if(xn(u,n)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=n=u,zr(t,i))(t.flags&131072)!==0&&(Yt=!0);else return e.lanes=t.lanes,la(t,e,i)}return br(t,e,a,n,i)}function cd(t,e,a){var n=e.pendingProps,i=n.children,u=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if((e.flags&128)!==0){if(n=u!==null?u.baseLanes|a:a,t!==null){for(i=e.child=t.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;e.childLanes=u&~n}else e.childLanes=0,e.child=null;return sd(t,e,n,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gi(e,u!==null?u.cachePool:null),u!==null?rf(e,u):Fo(),Wf(e);else return e.lanes=e.childLanes=536870912,sd(t,e,u!==null?u.baseLanes|a:a,a)}else u!==null?(Gi(e,u.cachePool),rf(e,u),Ea(),e.memoizedState=null):(t!==null&&Gi(e,null),Fo(),Ea());return Jt(t,e,i,a),e.child}function sd(t,e,a,n){var i=Zo();return i=i===null?null:{parent:qt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&Gi(e,null),Fo(),Wf(e),t!==null&&zn(t,e,n,!0),null}function iu(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function br(t,e,a,n,i){return Wa(e),a=tr(t,e,a,n,void 0,i),n=er(),t!==null&&!Yt?(ar(t,e,i),la(t,e,i)):(yt&&n&&Ho(e),e.flags|=1,Jt(t,e,a,i),e.child)}function fd(t,e,a,n,i,u){return Wa(e),e.updateQueue=null,a=sf(e,n,a,i),cf(t),n=er(),t!==null&&!Yt?(ar(t,e,u),la(t,e,u)):(yt&&n&&Ho(e),e.flags|=1,Jt(t,e,a,u),e.child)}function dd(t,e,a,n,i){if(Wa(e),e.stateNode===null){var u=Tl,s=a.contextType;typeof s=="object"&&s!==null&&(u=It(s)),u=new a(n,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=pr,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=n,u.state=e.memoizedState,u.refs={},Vo(e),s=a.contextType,u.context=typeof s=="object"&&s!==null?It(s):Tl,u.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(mr(e,a,s,n),u.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(s=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),s!==u.state&&pr.enqueueReplaceState(u,u.state,null),Dn(e,n,u,i),Rn(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){u=e.stateNode;var d=e.memoizedProps,y=Ia(a,d);u.props=y;var z=u.context,j=a.contextType;s=Tl,typeof j=="object"&&j!==null&&(s=It(j));var C=a.getDerivedStateFromProps;j=typeof C=="function"||typeof u.getSnapshotBeforeUpdate=="function",d=e.pendingProps!==d,j||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d||z!==s)&&Pf(e,u,n,s),ya=!1;var w=e.memoizedState;u.state=w,Dn(e,n,u,i),Rn(),z=e.memoizedState,d||w!==z||ya?(typeof C=="function"&&(mr(e,a,C,n),z=e.memoizedState),(y=ya||Ff(e,a,y,n,w,z,s))?(j||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=z),u.props=n,u.state=z,u.context=s,n=y):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{u=e.stateNode,Ko(t,e),s=e.memoizedProps,j=Ia(a,s),u.props=j,C=e.pendingProps,w=u.context,z=a.contextType,y=Tl,typeof z=="object"&&z!==null&&(y=It(z)),d=a.getDerivedStateFromProps,(z=typeof d=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s!==C||w!==y)&&Pf(e,u,n,y),ya=!1,w=e.memoizedState,u.state=w,Dn(e,n,u,i),Rn();var A=e.memoizedState;s!==C||w!==A||ya||t!==null&&t.dependencies!==null&&qi(t.dependencies)?(typeof d=="function"&&(mr(e,a,d,n),A=e.memoizedState),(j=ya||Ff(e,a,j,n,w,A,y)||t!==null&&t.dependencies!==null&&qi(t.dependencies))?(z||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,A,y),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,A,y)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||s===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=A),u.props=n,u.state=A,u.context=y,n=j):(typeof u.componentDidUpdate!="function"||s===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),n=!1)}return u=n,iu(t,e),n=(e.flags&128)!==0,u||n?(u=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&n?(e.child=$l(e,t.child,null,i),e.child=$l(e,null,a,i)):Jt(t,e,a,i),e.memoizedState=u.state,t=e.child):t=la(t,e,i),t}function hd(t,e,a,n){return Tn(),e.flags|=256,Jt(t,e,a,n),e.child}var vr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xr(t){return{baseLanes:t,cachePool:Is()}}function Sr(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Oe),t}function gd(t,e,a){var n=e.pendingProps,i=!1,u=(e.flags&128)!==0,s;if((s=u)||(s=t!==null&&t.memoizedState===null?!1:(kt.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(yt){if(i?Sa(e):Ea(),yt){var d=Ot,y;if(y=d){t:{for(y=d,d=Ge;y.nodeType!==8;){if(!d){d=null;break t}if(y=He(y.nextSibling),y===null){d=null;break t}}d=y}d!==null?(e.memoizedState={dehydrated:d,treeContext:Za!==null?{id:Fe,overflow:Pe}:null,retryLane:536870912,hydrationErrors:null},y=he(18,null,null,0),y.stateNode=d,y.return=e,e.child=y,ee=e,Ot=null,y=!0):y=!1}y||Ka(e)}if(d=e.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return nc(d)?e.lanes=32:e.lanes=536870912,null;aa(e)}return d=n.children,n=n.fallback,i?(Ea(),i=e.mode,d=uu({mode:"hidden",children:d},i),n=Xa(n,i,a,null),d.return=e,n.return=e,d.sibling=n,e.child=d,i=e.child,i.memoizedState=xr(a),i.childLanes=Sr(t,s,a),e.memoizedState=vr,n):(Sa(e),Er(e,d))}if(y=t.memoizedState,y!==null&&(d=y.dehydrated,d!==null)){if(u)e.flags&256?(Sa(e),e.flags&=-257,e=Tr(t,e,a)):e.memoizedState!==null?(Ea(),e.child=t.child,e.flags|=128,e=null):(Ea(),i=n.fallback,d=e.mode,n=uu({mode:"visible",children:n.children},d),i=Xa(i,d,a,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,$l(e,t.child,null,a),n=e.child,n.memoizedState=xr(a),n.childLanes=Sr(t,s,a),e.memoizedState=vr,e=i);else if(Sa(e),nc(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var z=s.dgst;s=z,n=Error(r(419)),n.stack="",n.digest=s,_n({value:n,source:null,stack:null}),e=Tr(t,e,a)}else if(Yt||zn(t,e,a,!1),s=(a&t.childLanes)!==0,Yt||s){if(s=Mt,s!==null&&(n=a&-a,n=(n&42)!==0?1:no(n),n=(n&(s.suspendedLanes|a))!==0?0:n,n!==0&&n!==y.retryLane))throw y.retryLane=n,El(t,n),be(s,t,n),id;d.data==="$?"||kr(),e=Tr(t,e,a)}else d.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=y.treeContext,Ot=He(d.nextSibling),ee=e,yt=!0,Va=null,Ge=!1,t!==null&&(we[Ae++]=Fe,we[Ae++]=Pe,we[Ae++]=Za,Fe=t.id,Pe=t.overflow,Za=e),e=Er(e,n.children),e.flags|=4096);return e}return i?(Ea(),i=n.fallback,d=e.mode,y=t.child,z=y.sibling,n=We(y,{mode:"hidden",children:n.children}),n.subtreeFlags=y.subtreeFlags&65011712,z!==null?i=We(z,i):(i=Xa(i,d,a,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,n=i,i=e.child,d=t.child.memoizedState,d===null?d=xr(a):(y=d.cachePool,y!==null?(z=qt._currentValue,y=y.parent!==z?{parent:z,pool:z}:y):y=Is(),d={baseLanes:d.baseLanes|a,cachePool:y}),i.memoizedState=d,i.childLanes=Sr(t,s,a),e.memoizedState=vr,n):(Sa(e),a=t.child,t=a.sibling,a=We(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=a,e.memoizedState=null,a)}function Er(t,e){return e=uu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function uu(t,e){return t=he(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Tr(t,e,a){return $l(e,t.child,null,a),t=Er(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function md(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),ko(t.return,e,a)}function _r(t,e,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=a,u.tailMode=i)}function pd(t,e,a){var n=e.pendingProps,i=n.revealOrder,u=n.tail;if(Jt(t,e,n.children,a),n=kt.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&md(t,a,e);else if(t.tag===19)md(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(k(kt,n),i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&au(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),_r(e,!1,i,a,u);break;case"backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&au(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}_r(e,!0,a,null,u);break;case"together":_r(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function la(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),wa|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(zn(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,a=We(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=We(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function zr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&qi(t)))}function Am(t,e,a){switch(e.tag){case 3:mt(e,e.stateNode.containerInfo),pa(e,qt,t.memoizedState.cache),Tn();break;case 27:case 5:Se(e);break;case 4:mt(e,e.stateNode.containerInfo);break;case 10:pa(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Sa(e),e.flags|=128,null):(a&e.child.childLanes)!==0?gd(t,e,a):(Sa(e),t=la(t,e,a),t!==null?t.sibling:null);Sa(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(zn(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return pd(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(kt,kt.current),n)break;return null;case 22:case 23:return e.lanes=0,cd(t,e,a);case 24:pa(e,qt,t.memoizedState.cache)}return la(t,e,a)}function yd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Yt=!0;else{if(!zr(t,a)&&(e.flags&128)===0)return Yt=!1,Am(t,e,a);Yt=(t.flags&131072)!==0}else Yt=!1,yt&&(e.flags&1048576)!==0&&Qs(e,Bi,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,i=n._init;if(n=i(n._payload),e.type=n,typeof n=="function")Co(n)?(t=Ia(n,t),e.tag=1,e=dd(null,e,n,t,a)):(e.tag=0,e=br(null,e,n,t,a));else{if(n!=null){if(i=n.$$typeof,i===V){e.tag=11,e=ud(null,e,n,t,a);break t}else if(i===Y){e.tag=14,e=od(null,e,n,t,a);break t}}throw e=Ce(n)||n,Error(r(306,e,""))}}return e;case 0:return br(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=Ia(n,e.pendingProps),dd(t,e,n,i,a);case 3:t:{if(mt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));n=e.pendingProps;var u=e.memoizedState;i=u.element,Ko(t,e),Dn(e,n,null,a);var s=e.memoizedState;if(n=s.cache,pa(e,qt,n),n!==u.cache&&Go(e,[qt],a,!0),Rn(),n=s.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=hd(t,e,n,a);break t}else if(n!==i){i=ze(Error(r(424)),e),_n(i),e=hd(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ot=He(t.firstChild),ee=e,yt=!0,Va=null,Ge=!0,a=Jf(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Tn(),n===i){e=la(t,e,a);break t}Jt(t,e,n,a)}e=e.child}return e;case 26:return iu(t,e),t===null?(a=Sh(e.type,null,e.pendingProps,null))?e.memoizedState=a:yt||(a=e.type,t=e.pendingProps,n=xu(F.current).createElement(a),n[Pt]=e,n[le]=t,Ft(n,a,t),Gt(n),e.stateNode=n):e.memoizedState=Sh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Se(e),t===null&&yt&&(n=e.stateNode=bh(e.type,e.pendingProps,F.current),ee=e,Ge=!0,i=Ot,Ra(e.type)?(ic=i,Ot=He(n.firstChild)):Ot=i),Jt(t,e,e.pendingProps.children,a),iu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&yt&&((i=n=Ot)&&(n=ap(n,e.type,e.pendingProps,Ge),n!==null?(e.stateNode=n,ee=e,Ot=He(n.firstChild),Ge=!1,i=!0):i=!1),i||Ka(e)),Se(e),i=e.type,u=e.pendingProps,s=t!==null?t.memoizedProps:null,n=u.children,ec(i,u)?n=null:s!==null&&ec(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=tr(t,e,xm,null,null,a),ti._currentValue=i),iu(t,e),Jt(t,e,n,a),e.child;case 6:return t===null&&yt&&((t=a=Ot)&&(a=lp(a,e.pendingProps,Ge),a!==null?(e.stateNode=a,ee=e,Ot=null,t=!0):t=!1),t||Ka(e)),null;case 13:return gd(t,e,a);case 4:return mt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=$l(e,null,n,a):Jt(t,e,n,a),e.child;case 11:return ud(t,e,e.type,e.pendingProps,a);case 7:return Jt(t,e,e.pendingProps,a),e.child;case 8:return Jt(t,e,e.pendingProps.children,a),e.child;case 12:return Jt(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,pa(e,e.type,n.value),Jt(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,Wa(e),i=It(i),n=n(i),e.flags|=1,Jt(t,e,n,a),e.child;case 14:return od(t,e,e.type,e.pendingProps,a);case 15:return rd(t,e,e.type,e.pendingProps,a);case 19:return pd(t,e,a);case 31:return n=e.pendingProps,a=e.mode,n={mode:n.mode,children:n.children},t===null?(a=uu(n,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=We(t.child,n),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return cd(t,e,a);case 24:return Wa(e),n=It(qt),t===null?(i=Zo(),i===null&&(i=Mt,u=Yo(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=a),i=u),e.memoizedState={parent:n,cache:i},Vo(e),pa(e,qt,i)):((t.lanes&a)!==0&&(Ko(t,e),Dn(e,null,null,a),Rn()),i=t.memoizedState,u=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),pa(e,qt,n)):(n=u.cache,pa(e,qt,n),n!==i.cache&&Go(e,[qt],a,!0))),Jt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function na(t){t.flags|=4}function bd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Mh(e)){if(e=je.current,e!==null&&((gt&4194048)===gt?Ye!==null:(gt&62914560)!==gt&&(gt&536870912)===0||e!==Ye))throw jn=Qo,tf;t.flags|=8192}}function ou(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Jc():536870912,t.lanes|=e,Hl|=e)}function Bn(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function jm(t,e,a){var n=e.pendingProps;switch(Lo(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return jt(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ta(qt),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(En(e)?na(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Js())),jt(e),null;case 26:return a=e.memoizedState,t===null?(na(e),a!==null?(jt(e),bd(e,a)):(jt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(na(e),jt(e),bd(e,a)):(jt(e),e.flags&=-16777217):(t.memoizedProps!==n&&na(e),jt(e),e.flags&=-16777217),null;case 27:Ee(e),a=F.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&na(e);else{if(!n){if(e.stateNode===null)throw Error(r(166));return jt(e),null}t=K.current,En(e)?Vs(e):(t=bh(i,n,a),e.stateNode=t,na(e))}return jt(e),null;case 5:if(Ee(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&na(e);else{if(!n){if(e.stateNode===null)throw Error(r(166));return jt(e),null}if(t=K.current,En(e))Vs(e);else{switch(i=xu(F.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}t[Pt]=e,t[le]=n;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(Ft(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&na(e)}}return jt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&na(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(r(166));if(t=F.current,En(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=ee,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[Pt]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||fh(t.nodeValue,a)),t||Ka(e)}else t=xu(t).createTextNode(n),t[Pt]=e,e.stateNode=t}return jt(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=En(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(r(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));i[Pt]=e}else Tn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;jt(e),i=!1}else i=Js(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(aa(e),e):(aa(e),null)}if(aa(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var u=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==i&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),ou(e,e.updateQueue),jt(e),null;case 4:return zt(),t===null&&Wr(e.stateNode.containerInfo),jt(e),null;case 10:return ta(e.type),jt(e),null;case 19:if(B(kt),i=e.memoizedState,i===null)return jt(e),null;if(n=(e.flags&128)!==0,u=i.rendering,u===null)if(n)Bn(i,!1);else{if(Rt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=au(t),u!==null){for(e.flags|=128,Bn(i,!1),t=u.updateQueue,e.updateQueue=t,ou(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Zs(a,t),a=a.sibling;return k(kt,kt.current&1|2),e.child}t=t.sibling}i.tail!==null&&ke()>su&&(e.flags|=128,n=!0,Bn(i,!1),e.lanes=4194304)}else{if(!n)if(t=au(u),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,ou(e,t),Bn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!yt)return jt(e),null}else 2*ke()-i.renderingStartTime>su&&a!==536870912&&(e.flags|=128,n=!0,Bn(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ke(),e.sibling=null,t=kt.current,k(kt,n?t&1|2:t&1),e):(jt(e),null);case 22:case 23:return aa(e),Po(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),a=e.updateQueue,a!==null&&ou(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&B(Fa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ta(qt),jt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function Om(t,e){switch(Lo(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ta(qt),zt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ee(e),null;case 13:if(aa(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Tn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return B(kt),null;case 4:return zt(),null;case 10:return ta(e.type),null;case 22:case 23:return aa(e),Po(),t!==null&&B(Fa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ta(qt),null;case 25:return null;default:return null}}function vd(t,e){switch(Lo(e),e.tag){case 3:ta(qt),zt();break;case 26:case 27:case 5:Ee(e);break;case 4:zt();break;case 13:aa(e);break;case 19:B(kt);break;case 10:ta(e.type);break;case 22:case 23:aa(e),Po(),t!==null&&B(Fa);break;case 24:ta(qt)}}function qn(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var u=a.create,s=a.inst;n=u(),s.destroy=n}a=a.next}while(a!==i)}}catch(d){_t(e,e.return,d)}}function Ta(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var u=i.next;n=u;do{if((n.tag&t)===t){var s=n.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,i=e;var y=a,z=d;try{z()}catch(j){_t(i,y,j)}}}n=n.next}while(n!==u)}}catch(j){_t(e,e.return,j)}}function xd(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{of(e,a)}catch(n){_t(t,t.return,n)}}}function Sd(t,e,a){a.props=Ia(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){_t(t,e,n)}}function kn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){_t(t,e,i)}}function Xe(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){_t(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){_t(t,e,i)}else a.current=null}function Ed(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){_t(t,t.return,i)}}function Mr(t,e,a){try{var n=t.stateNode;Fm(n,t.type,a,e),n[le]=e}catch(i){_t(t,t.return,i)}}function Td(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ra(t.type)||t.tag===4}function wr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Td(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ar(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=vu));else if(n!==4&&(n===27&&Ra(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Ar(t,e,a),t=t.sibling;t!==null;)Ar(t,e,a),t=t.sibling}function ru(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&Ra(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ru(t,e,a),t=t.sibling;t!==null;)ru(t,e,a),t=t.sibling}function _d(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ft(e,n,a),e[Pt]=t,e[le]=a}catch(u){_t(t,t.return,u)}}var ia=!1,Ct=!1,jr=!1,zd=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function Rm(t,e){if(t=t.containerInfo,Ir=Mu,t=Ns(t),wo(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var s=0,d=-1,y=-1,z=0,j=0,C=t,w=null;e:for(;;){for(var A;C!==a||i!==0&&C.nodeType!==3||(d=s+i),C!==u||n!==0&&C.nodeType!==3||(y=s+n),C.nodeType===3&&(s+=C.nodeValue.length),(A=C.firstChild)!==null;)w=C,C=A;for(;;){if(C===t)break e;if(w===a&&++z===i&&(d=s),w===u&&++j===n&&(y=s),(A=C.nextSibling)!==null)break;C=w,w=C.parentNode}C=A}a=d===-1||y===-1?null:{start:d,end:y}}else a=null}a=a||{start:0,end:0}}else a=null;for(tc={focusedElem:t,selectionRange:a},Mu=!1,Xt=e;Xt!==null;)if(e=Xt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Xt=t;else for(;Xt!==null;){switch(e=Xt,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,a=e,i=u.memoizedProps,u=u.memoizedState,n=a.stateNode;try{var at=Ia(a.type,i,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(at,u),n.__reactInternalSnapshotBeforeUpdate=t}catch(I){_t(a,a.return,I)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)lc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":lc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,Xt=t;break}Xt=e.return}}function Md(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:_a(t,a),n&4&&qn(5,a);break;case 1:if(_a(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(s){_t(a,a.return,s)}else{var i=Ia(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){_t(a,a.return,s)}}n&64&&xd(a),n&512&&kn(a,a.return);break;case 3:if(_a(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{of(t,e)}catch(s){_t(a,a.return,s)}}break;case 27:e===null&&n&4&&_d(a);case 26:case 5:_a(t,a),e===null&&n&4&&Ed(a),n&512&&kn(a,a.return);break;case 12:_a(t,a);break;case 13:_a(t,a),n&4&&jd(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=qm.bind(null,a),np(t,a))));break;case 22:if(n=a.memoizedState!==null||ia,!n){e=e!==null&&e.memoizedState!==null||Ct,i=ia;var u=Ct;ia=n,(Ct=e)&&!u?za(t,a,(a.subtreeFlags&8772)!==0):_a(t,a),ia=i,Ct=u}break;case 30:break;default:_a(t,a)}}function wd(t){var e=t.alternate;e!==null&&(t.alternate=null,wd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&oo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var At=null,ue=!1;function ua(t,e,a){for(a=a.child;a!==null;)Ad(t,e,a),a=a.sibling}function Ad(t,e,a){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(rn,a)}catch{}switch(a.tag){case 26:Ct||Xe(a,e),ua(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ct||Xe(a,e);var n=At,i=ue;Ra(a.type)&&(At=a.stateNode,ue=!1),ua(t,e,a),Wn(a.stateNode),At=n,ue=i;break;case 5:Ct||Xe(a,e);case 6:if(n=At,i=ue,At=null,ua(t,e,a),At=n,ue=i,At!==null)if(ue)try{(At.nodeType===9?At.body:At.nodeName==="HTML"?At.ownerDocument.body:At).removeChild(a.stateNode)}catch(u){_t(a,e,u)}else try{At.removeChild(a.stateNode)}catch(u){_t(a,e,u)}break;case 18:At!==null&&(ue?(t=At,ph(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ni(t)):ph(At,a.stateNode));break;case 4:n=At,i=ue,At=a.stateNode.containerInfo,ue=!0,ua(t,e,a),At=n,ue=i;break;case 0:case 11:case 14:case 15:Ct||Ta(2,a,e),Ct||Ta(4,a,e),ua(t,e,a);break;case 1:Ct||(Xe(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Sd(a,e,n)),ua(t,e,a);break;case 21:ua(t,e,a);break;case 22:Ct=(n=Ct)||a.memoizedState!==null,ua(t,e,a),Ct=n;break;default:ua(t,e,a)}}function jd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ni(t)}catch(a){_t(e,e.return,a)}}function Dm(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new zd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new zd),e;default:throw Error(r(435,t.tag))}}function Or(t,e){var a=Dm(t);e.forEach(function(n){var i=km.bind(null,t,n);a.has(n)||(a.add(n),n.then(i,i))})}function ge(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],u=t,s=e,d=s;t:for(;d!==null;){switch(d.tag){case 27:if(Ra(d.type)){At=d.stateNode,ue=!1;break t}break;case 5:At=d.stateNode,ue=!1;break t;case 3:case 4:At=d.stateNode.containerInfo,ue=!0;break t}d=d.return}if(At===null)throw Error(r(160));Ad(u,s,i),At=null,ue=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Od(e,t),e=e.sibling}var Ue=null;function Od(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ge(e,t),me(t),n&4&&(Ta(3,t,t.return),qn(3,t),Ta(5,t,t.return));break;case 1:ge(e,t),me(t),n&512&&(Ct||a===null||Xe(a,a.return)),n&64&&ia&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Ue;if(ge(e,t),me(t),n&512&&(Ct||a===null||Xe(a,a.return)),n&4){var u=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(n){case"title":u=i.getElementsByTagName("title")[0],(!u||u[fn]||u[Pt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(n),i.head.insertBefore(u,i.querySelector("head > title"))),Ft(u,n,a),u[Pt]=t,Gt(u),n=u;break t;case"link":var s=_h("link","href",i).get(n+(a.href||""));if(s){for(var d=0;d<s.length;d++)if(u=s[d],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(d,1);break e}}u=i.createElement(n),Ft(u,n,a),i.head.appendChild(u);break;case"meta":if(s=_h("meta","content",i).get(n+(a.content||""))){for(d=0;d<s.length;d++)if(u=s[d],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(d,1);break e}}u=i.createElement(n),Ft(u,n,a),i.head.appendChild(u);break;default:throw Error(r(468,n))}u[Pt]=t,Gt(u),n=u}t.stateNode=n}else zh(i,t.type,t.stateNode);else t.stateNode=Th(i,n,t.memoizedProps);else u!==n?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,n===null?zh(i,t.type,t.stateNode):Th(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Mr(t,t.memoizedProps,a.memoizedProps)}break;case 27:ge(e,t),me(t),n&512&&(Ct||a===null||Xe(a,a.return)),a!==null&&n&4&&Mr(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ge(e,t),me(t),n&512&&(Ct||a===null||Xe(a,a.return)),t.flags&32){i=t.stateNode;try{ml(i,"")}catch(A){_t(t,t.return,A)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,Mr(t,i,a!==null?a.memoizedProps:i)),n&1024&&(jr=!0);break;case 6:if(ge(e,t),me(t),n&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(A){_t(t,t.return,A)}}break;case 3:if(Tu=null,i=Ue,Ue=Su(e.containerInfo),ge(e,t),Ue=i,me(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{ni(e.containerInfo)}catch(A){_t(t,t.return,A)}jr&&(jr=!1,Rd(t));break;case 4:n=Ue,Ue=Su(t.stateNode.containerInfo),ge(e,t),me(t),Ue=n;break;case 12:ge(e,t),me(t);break;case 13:ge(e,t),me(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ur=ke()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Or(t,n)));break;case 22:i=t.memoizedState!==null;var y=a!==null&&a.memoizedState!==null,z=ia,j=Ct;if(ia=z||i,Ct=j||y,ge(e,t),Ct=j,ia=z,me(t),n&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||y||ia||Ct||tl(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){y=a=e;try{if(u=y.stateNode,i)s=u.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=y.stateNode;var C=y.memoizedProps.style,w=C!=null&&C.hasOwnProperty("display")?C.display:null;d.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(A){_t(y,y.return,A)}}}else if(e.tag===6){if(a===null){y=e;try{y.stateNode.nodeValue=i?"":y.memoizedProps}catch(A){_t(y,y.return,A)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Or(t,a))));break;case 19:ge(e,t),me(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Or(t,n)));break;case 30:break;case 21:break;default:ge(e,t),me(t)}}function me(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(Td(n)){a=n;break}n=n.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var i=a.stateNode,u=wr(t);ru(t,u,i);break;case 5:var s=a.stateNode;a.flags&32&&(ml(s,""),a.flags&=-33);var d=wr(t);ru(t,d,s);break;case 3:case 4:var y=a.stateNode.containerInfo,z=wr(t);Ar(t,z,y);break;default:throw Error(r(161))}}catch(j){_t(t,t.return,j)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Rd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function _a(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Md(t,e.alternate,e),e=e.sibling}function tl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ta(4,e,e.return),tl(e);break;case 1:Xe(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Sd(e,e.return,a),tl(e);break;case 27:Wn(e.stateNode);case 26:case 5:Xe(e,e.return),tl(e);break;case 22:e.memoizedState===null&&tl(e);break;case 30:tl(e);break;default:tl(e)}t=t.sibling}}function za(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,u=e,s=u.flags;switch(u.tag){case 0:case 11:case 15:za(i,u,a),qn(4,u);break;case 1:if(za(i,u,a),n=u,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){_t(n,n.return,z)}if(n=u,i=n.updateQueue,i!==null){var d=n.stateNode;try{var y=i.shared.hiddenCallbacks;if(y!==null)for(i.shared.hiddenCallbacks=null,i=0;i<y.length;i++)uf(y[i],d)}catch(z){_t(n,n.return,z)}}a&&s&64&&xd(u),kn(u,u.return);break;case 27:_d(u);case 26:case 5:za(i,u,a),a&&n===null&&s&4&&Ed(u),kn(u,u.return);break;case 12:za(i,u,a);break;case 13:za(i,u,a),a&&s&4&&jd(i,u);break;case 22:u.memoizedState===null&&za(i,u,a),kn(u,u.return);break;case 30:break;default:za(i,u,a)}e=e.sibling}}function Rr(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Mn(a))}function Dr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Mn(t))}function Ze(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dd(t,e,a,n),e=e.sibling}function Dd(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Ze(t,e,a,n),i&2048&&qn(9,e);break;case 1:Ze(t,e,a,n);break;case 3:Ze(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Mn(t)));break;case 12:if(i&2048){Ze(t,e,a,n),t=e.stateNode;try{var u=e.memoizedProps,s=u.id,d=u.onPostCommit;typeof d=="function"&&d(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(y){_t(e,e.return,y)}}else Ze(t,e,a,n);break;case 13:Ze(t,e,a,n);break;case 23:break;case 22:u=e.stateNode,s=e.alternate,e.memoizedState!==null?u._visibility&2?Ze(t,e,a,n):Gn(t,e):u._visibility&2?Ze(t,e,a,n):(u._visibility|=2,Cl(t,e,a,n,(e.subtreeFlags&10256)!==0)),i&2048&&Rr(s,e);break;case 24:Ze(t,e,a,n),i&2048&&Dr(e.alternate,e);break;default:Ze(t,e,a,n)}}function Cl(t,e,a,n,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,s=e,d=a,y=n,z=s.flags;switch(s.tag){case 0:case 11:case 15:Cl(u,s,d,y,i),qn(8,s);break;case 23:break;case 22:var j=s.stateNode;s.memoizedState!==null?j._visibility&2?Cl(u,s,d,y,i):Gn(u,s):(j._visibility|=2,Cl(u,s,d,y,i)),i&&z&2048&&Rr(s.alternate,s);break;case 24:Cl(u,s,d,y,i),i&&z&2048&&Dr(s.alternate,s);break;default:Cl(u,s,d,y,i)}e=e.sibling}}function Gn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:Gn(a,n),i&2048&&Rr(n.alternate,n);break;case 24:Gn(a,n),i&2048&&Dr(n.alternate,n);break;default:Gn(a,n)}e=e.sibling}}var Yn=8192;function Nl(t){if(t.subtreeFlags&Yn)for(t=t.child;t!==null;)$d(t),t=t.sibling}function $d(t){switch(t.tag){case 26:Nl(t),t.flags&Yn&&t.memoizedState!==null&&yp(Ue,t.memoizedState,t.memoizedProps);break;case 5:Nl(t);break;case 3:case 4:var e=Ue;Ue=Su(t.stateNode.containerInfo),Nl(t),Ue=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Yn,Yn=16777216,Nl(t),Yn=e):Nl(t));break;default:Nl(t)}}function Cd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Xn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Xt=n,Ud(n,t)}Cd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nd(t),t=t.sibling}function Nd(t){switch(t.tag){case 0:case 11:case 15:Xn(t),t.flags&2048&&Ta(9,t,t.return);break;case 3:Xn(t);break;case 12:Xn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,cu(t)):Xn(t);break;default:Xn(t)}}function cu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Xt=n,Ud(n,t)}Cd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ta(8,e,e.return),cu(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,cu(e));break;default:cu(e)}t=t.sibling}}function Ud(t,e){for(;Xt!==null;){var a=Xt;switch(a.tag){case 0:case 11:case 15:Ta(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Mn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Xt=n;else t:for(a=t;Xt!==null;){n=Xt;var i=n.sibling,u=n.return;if(wd(n),n===a){Xt=null;break t}if(i!==null){i.return=u,Xt=i;break t}Xt=u}}}var $m={getCacheForType:function(t){var e=It(qt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},Cm=typeof WeakMap=="function"?WeakMap:Map,vt=0,Mt=null,ft=null,gt=0,xt=0,pe=null,Ma=!1,Ul=!1,$r=!1,oa=0,Rt=0,wa=0,el=0,Cr=0,Oe=0,Hl=0,Zn=null,oe=null,Nr=!1,Ur=0,su=1/0,fu=null,Aa=null,Wt=0,ja=null,Ll=null,Bl=0,Hr=0,Lr=null,Hd=null,Qn=0,Br=null;function ye(){if((vt&2)!==0&&gt!==0)return gt&-gt;if(M.T!==null){var t=Ml;return t!==0?t:Qr()}return Pc()}function Ld(){Oe===0&&(Oe=(gt&536870912)===0||yt?Kc():536870912);var t=je.current;return t!==null&&(t.flags|=32),Oe}function be(t,e,a){(t===Mt&&(xt===2||xt===9)||t.cancelPendingCommit!==null)&&(ql(t,0),Oa(t,gt,Oe,!1)),sn(t,a),((vt&2)===0||t!==Mt)&&(t===Mt&&((vt&2)===0&&(el|=a),Rt===4&&Oa(t,gt,Oe,!1)),Qe(t))}function Bd(t,e,a){if((vt&6)!==0)throw Error(r(327));var n=!a&&(e&124)===0&&(e&t.expiredLanes)===0||cn(t,e),i=n?Hm(t,e):Gr(t,e,!0),u=n;do{if(i===0){Ul&&!n&&Oa(t,e,0,!1);break}else{if(a=t.current.alternate,u&&!Nm(a)){i=Gr(t,e,!1),u=!1;continue}if(i===2){if(u=e,t.errorRecoveryDisabledLanes&u)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var d=t;i=Zn;var y=d.current.memoizedState.isDehydrated;if(y&&(ql(d,s).flags|=256),s=Gr(d,s,!1),s!==2){if($r&&!y){d.errorRecoveryDisabledLanes|=u,el|=u,i=4;break t}u=oe,oe=i,u!==null&&(oe===null?oe=u:oe.push.apply(oe,u))}i=s}if(u=!1,i!==2)continue}}if(i===1){ql(t,0),Oa(t,e,0,!0);break}t:{switch(n=t,u=i,u){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Oa(n,e,Oe,!Ma);break t;case 2:oe=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(i=Ur+300-ke(),10<i)){if(Oa(n,e,Oe,!Ma),Ei(n,0,!0)!==0)break t;n.timeoutHandle=gh(qd.bind(null,n,a,oe,fu,Nr,e,Oe,el,Hl,Ma,u,2,-0,0),i);break t}qd(n,a,oe,fu,Nr,e,Oe,el,Hl,Ma,u,0,-0,0)}}break}while(!0);Qe(t)}function qd(t,e,a,n,i,u,s,d,y,z,j,C,w,A){if(t.timeoutHandle=-1,C=e.subtreeFlags,(C&8192||(C&16785408)===16785408)&&(In={stylesheets:null,count:0,unsuspend:pp},$d(e),C=bp(),C!==null)){t.cancelPendingCommit=C(Vd.bind(null,t,e,u,a,n,i,s,d,y,j,1,w,A)),Oa(t,u,s,!z);return}Vd(t,e,u,a,n,i,s,d,y)}function Nm(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],u=i.getSnapshot;i=i.value;try{if(!de(u(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oa(t,e,a,n){e&=~Cr,e&=~el,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var u=31-fe(i),s=1<<u;n[u]=-1,i&=~s}a!==0&&Wc(t,a,e)}function du(){return(vt&6)===0?(Vn(0),!1):!0}function qr(){if(ft!==null){if(xt===0)var t=ft.return;else t=ft,Ie=Ja=null,lr(t),Dl=null,Hn=0,t=ft;for(;t!==null;)vd(t.alternate,t),t=t.return;ft=null}}function ql(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Im(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),qr(),Mt=t,ft=a=We(t.current,null),gt=e,xt=0,pe=null,Ma=!1,Ul=cn(t,e),$r=!1,Hl=Oe=Cr=el=wa=Rt=0,oe=Zn=null,Nr=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-fe(n),u=1<<i;e|=t[i],n&=~u}return oa=e,Ci(),a}function kd(t,e){ct=null,M.H=Ii,e===An||e===Yi?(e=lf(),xt=3):e===tf?(e=lf(),xt=4):xt=e===id?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,pe=e,ft===null&&(Rt=1,nu(t,ze(e,t.current)))}function Gd(){var t=M.H;return M.H=Ii,t===null?Ii:t}function Yd(){var t=M.A;return M.A=$m,t}function kr(){Rt=4,Ma||(gt&4194048)!==gt&&je.current!==null||(Ul=!0),(wa&134217727)===0&&(el&134217727)===0||Mt===null||Oa(Mt,gt,Oe,!1)}function Gr(t,e,a){var n=vt;vt|=2;var i=Gd(),u=Yd();(Mt!==t||gt!==e)&&(fu=null,ql(t,e)),e=!1;var s=Rt;t:do try{if(xt!==0&&ft!==null){var d=ft,y=pe;switch(xt){case 8:qr(),s=6;break t;case 3:case 2:case 9:case 6:je.current===null&&(e=!0);var z=xt;if(xt=0,pe=null,kl(t,d,y,z),a&&Ul){s=0;break t}break;default:z=xt,xt=0,pe=null,kl(t,d,y,z)}}Um(),s=Rt;break}catch(j){kd(t,j)}while(!0);return e&&t.shellSuspendCounter++,Ie=Ja=null,vt=n,M.H=i,M.A=u,ft===null&&(Mt=null,gt=0,Ci()),s}function Um(){for(;ft!==null;)Xd(ft)}function Hm(t,e){var a=vt;vt|=2;var n=Gd(),i=Yd();Mt!==t||gt!==e?(fu=null,su=ke()+500,ql(t,e)):Ul=cn(t,e);t:do try{if(xt!==0&&ft!==null){e=ft;var u=pe;e:switch(xt){case 1:xt=0,pe=null,kl(t,e,u,1);break;case 2:case 9:if(ef(u)){xt=0,pe=null,Zd(e);break}e=function(){xt!==2&&xt!==9||Mt!==t||(xt=7),Qe(t)},u.then(e,e);break t;case 3:xt=7;break t;case 4:xt=5;break t;case 7:ef(u)?(xt=0,pe=null,Zd(e)):(xt=0,pe=null,kl(t,e,u,7));break;case 5:var s=null;switch(ft.tag){case 26:s=ft.memoizedState;case 5:case 27:var d=ft;if(!s||Mh(s)){xt=0,pe=null;var y=d.sibling;if(y!==null)ft=y;else{var z=d.return;z!==null?(ft=z,hu(z)):ft=null}break e}}xt=0,pe=null,kl(t,e,u,5);break;case 6:xt=0,pe=null,kl(t,e,u,6);break;case 8:qr(),Rt=6;break t;default:throw Error(r(462))}}Lm();break}catch(j){kd(t,j)}while(!0);return Ie=Ja=null,M.H=n,M.A=i,vt=a,ft!==null?0:(Mt=null,gt=0,Ci(),Rt)}function Lm(){for(;ft!==null&&!u0();)Xd(ft)}function Xd(t){var e=yd(t.alternate,t,oa);t.memoizedProps=t.pendingProps,e===null?hu(t):ft=e}function Zd(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=fd(a,e,e.pendingProps,e.type,void 0,gt);break;case 11:e=fd(a,e,e.pendingProps,e.type.render,e.ref,gt);break;case 5:lr(e);default:vd(a,e),e=ft=Zs(e,oa),e=yd(a,e,oa)}t.memoizedProps=t.pendingProps,e===null?hu(t):ft=e}function kl(t,e,a,n){Ie=Ja=null,lr(e),Dl=null,Hn=0;var i=e.return;try{if(wm(t,i,e,a,gt)){Rt=1,nu(t,ze(a,t.current)),ft=null;return}}catch(u){if(i!==null)throw ft=i,u;Rt=1,nu(t,ze(a,t.current)),ft=null;return}e.flags&32768?(yt||n===1?t=!0:Ul||(gt&536870912)!==0?t=!1:(Ma=t=!0,(n===2||n===9||n===3||n===6)&&(n=je.current,n!==null&&n.tag===13&&(n.flags|=16384))),Qd(e,t)):hu(e)}function hu(t){var e=t;do{if((e.flags&32768)!==0){Qd(e,Ma);return}t=e.return;var a=jm(e.alternate,e,oa);if(a!==null){ft=a;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);Rt===0&&(Rt=5)}function Qd(t,e){do{var a=Om(t.alternate,t);if(a!==null){a.flags&=32767,ft=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ft=t;return}ft=t=a}while(t!==null);Rt=6,ft=null}function Vd(t,e,a,n,i,u,s,d,y){t.cancelPendingCommit=null;do gu();while(Wt!==0);if((vt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(u=e.lanes|e.childLanes,u|=Do,p0(t,a,u,s,d,y),t===Mt&&(ft=Mt=null,gt=0),Ll=e,ja=t,Bl=a,Hr=u,Lr=i,Hd=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Gm(vi,function(){return Pd(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=M.T,M.T=null,i=U.p,U.p=2,s=vt,vt|=4;try{Rm(t,e,a)}finally{vt=s,U.p=i,M.T=n}}Wt=1,Kd(),Jd(),Wd()}}function Kd(){if(Wt===1){Wt=0;var t=ja,e=Ll,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var n=U.p;U.p=2;var i=vt;vt|=4;try{Od(e,t);var u=tc,s=Ns(t.containerInfo),d=u.focusedElem,y=u.selectionRange;if(s!==d&&d&&d.ownerDocument&&Cs(d.ownerDocument.documentElement,d)){if(y!==null&&wo(d)){var z=y.start,j=y.end;if(j===void 0&&(j=z),"selectionStart"in d)d.selectionStart=z,d.selectionEnd=Math.min(j,d.value.length);else{var C=d.ownerDocument||document,w=C&&C.defaultView||window;if(w.getSelection){var A=w.getSelection(),at=d.textContent.length,I=Math.min(y.start,at),Tt=y.end===void 0?I:Math.min(y.end,at);!A.extend&&I>Tt&&(s=Tt,Tt=I,I=s);var E=$s(d,I),x=$s(d,Tt);if(E&&x&&(A.rangeCount!==1||A.anchorNode!==E.node||A.anchorOffset!==E.offset||A.focusNode!==x.node||A.focusOffset!==x.offset)){var _=C.createRange();_.setStart(E.node,E.offset),A.removeAllRanges(),I>Tt?(A.addRange(_),A.extend(x.node,x.offset)):(_.setEnd(x.node,x.offset),A.addRange(_))}}}}for(C=[],A=d;A=A.parentNode;)A.nodeType===1&&C.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<C.length;d++){var O=C[d];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Mu=!!Ir,tc=Ir=null}finally{vt=i,U.p=n,M.T=a}}t.current=e,Wt=2}}function Jd(){if(Wt===2){Wt=0;var t=ja,e=Ll,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var n=U.p;U.p=2;var i=vt;vt|=4;try{Md(t,e.alternate,e)}finally{vt=i,U.p=n,M.T=a}}Wt=3}}function Wd(){if(Wt===4||Wt===3){Wt=0,o0();var t=ja,e=Ll,a=Bl,n=Hd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Wt=5:(Wt=0,Ll=ja=null,Fd(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Aa=null),io(a),e=e.stateNode,se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(rn,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=M.T,i=U.p,U.p=2,M.T=null;try{for(var u=t.onRecoverableError,s=0;s<n.length;s++){var d=n[s];u(d.value,{componentStack:d.stack})}}finally{M.T=e,U.p=i}}(Bl&3)!==0&&gu(),Qe(t),i=t.pendingLanes,(a&4194090)!==0&&(i&42)!==0?t===Br?Qn++:(Qn=0,Br=t):Qn=0,Vn(0)}}function Fd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Mn(e)))}function gu(t){return Kd(),Jd(),Wd(),Pd()}function Pd(){if(Wt!==5)return!1;var t=ja,e=Hr;Hr=0;var a=io(Bl),n=M.T,i=U.p;try{U.p=32>a?32:a,M.T=null,a=Lr,Lr=null;var u=ja,s=Bl;if(Wt=0,Ll=ja=null,Bl=0,(vt&6)!==0)throw Error(r(331));var d=vt;if(vt|=4,Nd(u.current),Dd(u,u.current,s,a),vt=d,Vn(0,!1),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(rn,u)}catch{}return!0}finally{U.p=i,M.T=n,Fd(t,e)}}function Id(t,e,a){e=ze(a,e),e=yr(t.stateNode,e,2),t=va(t,e,2),t!==null&&(sn(t,2),Qe(t))}function _t(t,e,a){if(t.tag===3)Id(t,t,a);else for(;e!==null;){if(e.tag===3){Id(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Aa===null||!Aa.has(n))){t=ze(a,t),a=ld(2),n=va(e,a,2),n!==null&&(nd(a,n,e,t),sn(n,2),Qe(n));break}}e=e.return}}function Yr(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new Cm;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||($r=!0,i.add(a),t=Bm.bind(null,t,e,a),e.then(t,t))}function Bm(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Mt===t&&(gt&a)===a&&(Rt===4||Rt===3&&(gt&62914560)===gt&&300>ke()-Ur?(vt&2)===0&&ql(t,0):Cr|=a,Hl===gt&&(Hl=0)),Qe(t)}function th(t,e){e===0&&(e=Jc()),t=El(t,e),t!==null&&(sn(t,e),Qe(t))}function qm(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),th(t,a)}function km(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(r(314))}n!==null&&n.delete(e),th(t,a)}function Gm(t,e){return on(t,e)}var mu=null,Gl=null,Xr=!1,pu=!1,Zr=!1,al=0;function Qe(t){t!==Gl&&t.next===null&&(Gl===null?mu=Gl=t:Gl=Gl.next=t),pu=!0,Xr||(Xr=!0,Xm())}function Vn(t,e){if(!Zr&&pu){Zr=!0;do for(var a=!1,n=mu;n!==null;){if(t!==0){var i=n.pendingLanes;if(i===0)var u=0;else{var s=n.suspendedLanes,d=n.pingedLanes;u=(1<<31-fe(42|t)+1)-1,u&=i&~(s&~d),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,nh(n,u))}else u=gt,u=Ei(n,n===Mt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||cn(n,u)||(a=!0,nh(n,u));n=n.next}while(a);Zr=!1}}function Ym(){eh()}function eh(){pu=Xr=!1;var t=0;al!==0&&(Pm()&&(t=al),al=0);for(var e=ke(),a=null,n=mu;n!==null;){var i=n.next,u=ah(n,e);u===0?(n.next=null,a===null?mu=i:a.next=i,i===null&&(Gl=a)):(a=n,(t!==0||(u&3)!==0)&&(pu=!0)),n=i}Vn(t)}function ah(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var s=31-fe(u),d=1<<s,y=i[s];y===-1?((d&a)===0||(d&n)!==0)&&(i[s]=m0(d,e)):y<=e&&(t.expiredLanes|=d),u&=~d}if(e=Mt,a=gt,a=Ei(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(xt===2||xt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&ao(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||cn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&ao(n),io(a)){case 2:case 8:a=Qc;break;case 32:a=vi;break;case 268435456:a=Vc;break;default:a=vi}return n=lh.bind(null,t),a=on(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&ao(n),t.callbackPriority=2,t.callbackNode=null,2}function lh(t,e){if(Wt!==0&&Wt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(gu()&&t.callbackNode!==a)return null;var n=gt;return n=Ei(t,t===Mt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Bd(t,n,e),ah(t,ke()),t.callbackNode!=null&&t.callbackNode===a?lh.bind(null,t):null)}function nh(t,e){if(gu())return null;Bd(t,e,!0)}function Xm(){tp(function(){(vt&6)!==0?on(Zc,Ym):eh()})}function Qr(){return al===0&&(al=Kc()),al}function ih(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wi(""+t)}function uh(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Zm(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var u=ih((i[le]||null).action),s=n.submitter;s&&(e=(e=s[le]||null)?ih(e.formAction):s.getAttribute("formAction"),e!==null&&(u=e,s=null));var d=new Ri("action","action",null,n,i);t.push({event:d,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(al!==0){var y=s?uh(i,s):new FormData(i);dr(a,{pending:!0,data:y,method:i.method,action:u},null,y)}}else typeof u=="function"&&(d.preventDefault(),y=s?uh(i,s):new FormData(i),dr(a,{pending:!0,data:y,method:i.method,action:u},u,y))},currentTarget:i}]})}}for(var Vr=0;Vr<Ro.length;Vr++){var Kr=Ro[Vr],Qm=Kr.toLowerCase(),Vm=Kr[0].toUpperCase()+Kr.slice(1);Ne(Qm,"on"+Vm)}Ne(Ls,"onAnimationEnd"),Ne(Bs,"onAnimationIteration"),Ne(qs,"onAnimationStart"),Ne("dblclick","onDoubleClick"),Ne("focusin","onFocus"),Ne("focusout","onBlur"),Ne(sm,"onTransitionRun"),Ne(fm,"onTransitionStart"),Ne(dm,"onTransitionCancel"),Ne(ks,"onTransitionEnd"),dl("onMouseEnter",["mouseout","mouseover"]),dl("onMouseLeave",["mouseout","mouseover"]),dl("onPointerEnter",["pointerout","pointerover"]),dl("onPointerLeave",["pointerout","pointerover"]),qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qa("onBeforeInput",["compositionend","keypress","textInput","paste"]),qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Km=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kn));function oh(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;t:{var u=void 0;if(e)for(var s=n.length-1;0<=s;s--){var d=n[s],y=d.instance,z=d.currentTarget;if(d=d.listener,y!==u&&i.isPropagationStopped())break t;u=d,i.currentTarget=z;try{u(i)}catch(j){lu(j)}i.currentTarget=null,u=y}else for(s=0;s<n.length;s++){if(d=n[s],y=d.instance,z=d.currentTarget,d=d.listener,y!==u&&i.isPropagationStopped())break t;u=d,i.currentTarget=z;try{u(i)}catch(j){lu(j)}i.currentTarget=null,u=y}}}}function dt(t,e){var a=e[uo];a===void 0&&(a=e[uo]=new Set);var n=t+"__bubble";a.has(n)||(rh(e,t,2,!1),a.add(n))}function Jr(t,e,a){var n=0;e&&(n|=4),rh(a,t,n,e)}var yu="_reactListening"+Math.random().toString(36).slice(2);function Wr(t){if(!t[yu]){t[yu]=!0,ts.forEach(function(a){a!=="selectionchange"&&(Km.has(a)||Jr(a,!1,t),Jr(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yu]||(e[yu]=!0,Jr("selectionchange",!1,e))}}function rh(t,e,a,n){switch(Dh(e)){case 2:var i=Sp;break;case 8:i=Ep;break;default:i=sc}a=i.bind(null,e,a,t),i=void 0,!bo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Fr(t,e,a,n,i){var u=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var d=n.stateNode.containerInfo;if(d===i)break;if(s===4)for(s=n.return;s!==null;){var y=s.tag;if((y===3||y===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;d!==null;){if(s=cl(d),s===null)return;if(y=s.tag,y===5||y===6||y===26||y===27){n=u=s;continue t}d=d.parentNode}}n=n.return}gs(function(){var z=u,j=po(a),C=[];t:{var w=Gs.get(t);if(w!==void 0){var A=Ri,at=t;switch(t){case"keypress":if(ji(a)===0)break t;case"keydown":case"keyup":A=G0;break;case"focusin":at="focus",A=Eo;break;case"focusout":at="blur",A=Eo;break;case"beforeblur":case"afterblur":A=Eo;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=O0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Z0;break;case Ls:case Bs:case qs:A=$0;break;case ks:A=V0;break;case"scroll":case"scrollend":A=A0;break;case"wheel":A=J0;break;case"copy":case"cut":case"paste":A=N0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=vs;break;case"toggle":case"beforetoggle":A=F0}var I=(e&4)!==0,Tt=!I&&(t==="scroll"||t==="scrollend"),E=I?w!==null?w+"Capture":null:w;I=[];for(var x=z,_;x!==null;){var O=x;if(_=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||_===null||E===null||(O=hn(x,E),O!=null&&I.push(Jn(x,O,_))),Tt)break;x=x.return}0<I.length&&(w=new A(w,at,null,a,j),C.push({event:w,listeners:I}))}}if((e&7)===0){t:{if(w=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",w&&a!==mo&&(at=a.relatedTarget||a.fromElement)&&(cl(at)||at[rl]))break t;if((A||w)&&(w=j.window===j?j:(w=j.ownerDocument)?w.defaultView||w.parentWindow:window,A?(at=a.relatedTarget||a.toElement,A=z,at=at?cl(at):null,at!==null&&(Tt=g(at),I=at.tag,at!==Tt||I!==5&&I!==27&&I!==6)&&(at=null)):(A=null,at=z),A!==at)){if(I=ys,O="onMouseLeave",E="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(I=vs,O="onPointerLeave",E="onPointerEnter",x="pointer"),Tt=A==null?w:dn(A),_=at==null?w:dn(at),w=new I(O,x+"leave",A,a,j),w.target=Tt,w.relatedTarget=_,O=null,cl(j)===z&&(I=new I(E,x+"enter",at,a,j),I.target=_,I.relatedTarget=Tt,O=I),Tt=O,A&&at)e:{for(I=A,E=at,x=0,_=I;_;_=Yl(_))x++;for(_=0,O=E;O;O=Yl(O))_++;for(;0<x-_;)I=Yl(I),x--;for(;0<_-x;)E=Yl(E),_--;for(;x--;){if(I===E||E!==null&&I===E.alternate)break e;I=Yl(I),E=Yl(E)}I=null}else I=null;A!==null&&ch(C,w,A,I,!1),at!==null&&Tt!==null&&ch(C,Tt,at,I,!0)}}t:{if(w=z?dn(z):window,A=w.nodeName&&w.nodeName.toLowerCase(),A==="select"||A==="input"&&w.type==="file")var Q=ws;else if(zs(w))if(As)Q=om;else{Q=im;var st=nm}else A=w.nodeName,!A||A.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?z&&go(z.elementType)&&(Q=ws):Q=um;if(Q&&(Q=Q(t,z))){Ms(C,Q,a,j);break t}st&&st(t,w,z),t==="focusout"&&z&&w.type==="number"&&z.memoizedProps.value!=null&&ho(w,"number",w.value)}switch(st=z?dn(z):window,t){case"focusin":(zs(st)||st.contentEditable==="true")&&(vl=st,Ao=z,Sn=null);break;case"focusout":Sn=Ao=vl=null;break;case"mousedown":jo=!0;break;case"contextmenu":case"mouseup":case"dragend":jo=!1,Us(C,a,j);break;case"selectionchange":if(cm)break;case"keydown":case"keyup":Us(C,a,j)}var W;if(_o)t:{switch(t){case"compositionstart":var tt="onCompositionStart";break t;case"compositionend":tt="onCompositionEnd";break t;case"compositionupdate":tt="onCompositionUpdate";break t}tt=void 0}else bl?Ts(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(xs&&a.locale!=="ko"&&(bl||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&bl&&(W=ms()):(ma=j,vo="value"in ma?ma.value:ma.textContent,bl=!0)),st=bu(z,tt),0<st.length&&(tt=new bs(tt,t,null,a,j),C.push({event:tt,listeners:st}),W?tt.data=W:(W=_s(a),W!==null&&(tt.data=W)))),(W=I0?tm(t,a):em(t,a))&&(tt=bu(z,"onBeforeInput"),0<tt.length&&(st=new bs("onBeforeInput","beforeinput",null,a,j),C.push({event:st,listeners:tt}),st.data=W)),Zm(C,t,z,a,j)}oh(C,e)})}function Jn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function bu(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=hn(t,a),i!=null&&n.unshift(Jn(t,i,u)),i=hn(t,e),i!=null&&n.push(Jn(t,i,u))),t.tag===3)return n;t=t.return}return[]}function Yl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ch(t,e,a,n,i){for(var u=e._reactName,s=[];a!==null&&a!==n;){var d=a,y=d.alternate,z=d.stateNode;if(d=d.tag,y!==null&&y===n)break;d!==5&&d!==26&&d!==27||z===null||(y=z,i?(z=hn(a,u),z!=null&&s.unshift(Jn(a,z,y))):i||(z=hn(a,u),z!=null&&s.push(Jn(a,z,y)))),a=a.return}s.length!==0&&t.push({event:e,listeners:s})}var Jm=/\r\n?/g,Wm=/\u0000|\uFFFD/g;function sh(t){return(typeof t=="string"?t:""+t).replace(Jm,`
`).replace(Wm,"")}function fh(t,e){return e=sh(e),sh(t)===e}function vu(){}function Et(t,e,a,n,i,u){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||ml(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&ml(t,""+n);break;case"className":_i(t,"class",n);break;case"tabIndex":_i(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":_i(t,a,n);break;case"style":ds(t,n,u);break;case"data":if(e!=="object"){_i(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=wi(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(e!=="input"&&Et(t,e,"name",i.name,i,null),Et(t,e,"formEncType",i.formEncType,i,null),Et(t,e,"formMethod",i.formMethod,i,null),Et(t,e,"formTarget",i.formTarget,i,null)):(Et(t,e,"encType",i.encType,i,null),Et(t,e,"method",i.method,i,null),Et(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=wi(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=vu);break;case"onScroll":n!=null&&dt("scroll",t);break;case"onScrollEnd":n!=null&&dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=wi(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":dt("beforetoggle",t),dt("toggle",t),Ti(t,"popover",n);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ti(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=M0.get(a)||a,Ti(t,a,n))}}function Pr(t,e,a,n,i,u){switch(a){case"style":ds(t,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof n=="string"?ml(t,n):(typeof n=="number"||typeof n=="bigint")&&ml(t,""+n);break;case"onScroll":n!=null&&dt("scroll",t);break;case"onScrollEnd":n!=null&&dt("scrollend",t);break;case"onClick":n!=null&&(t.onclick=vu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!es.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),u=t[le]||null,u=u!=null?u[a]:null,typeof u=="function"&&t.removeEventListener(e,u,i),typeof n=="function")){typeof u!="function"&&u!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):Ti(t,a,n)}}}function Ft(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",t),dt("load",t);var n=!1,i=!1,u;for(u in a)if(a.hasOwnProperty(u)){var s=a[u];if(s!=null)switch(u){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Et(t,e,u,s,a,null)}}i&&Et(t,e,"srcSet",a.srcSet,a,null),n&&Et(t,e,"src",a.src,a,null);return;case"input":dt("invalid",t);var d=u=s=i=null,y=null,z=null;for(n in a)if(a.hasOwnProperty(n)){var j=a[n];if(j!=null)switch(n){case"name":i=j;break;case"type":s=j;break;case"checked":y=j;break;case"defaultChecked":z=j;break;case"value":u=j;break;case"defaultValue":d=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,e));break;default:Et(t,e,n,j,a,null)}}rs(t,u,d,y,z,s,i,!1),zi(t);return;case"select":dt("invalid",t),n=s=u=null;for(i in a)if(a.hasOwnProperty(i)&&(d=a[i],d!=null))switch(i){case"value":u=d;break;case"defaultValue":s=d;break;case"multiple":n=d;default:Et(t,e,i,d,a,null)}e=u,a=s,t.multiple=!!n,e!=null?gl(t,!!n,e,!1):a!=null&&gl(t,!!n,a,!0);return;case"textarea":dt("invalid",t),u=i=n=null;for(s in a)if(a.hasOwnProperty(s)&&(d=a[s],d!=null))switch(s){case"value":n=d;break;case"defaultValue":i=d;break;case"children":u=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:Et(t,e,s,d,a,null)}ss(t,n,i,u),zi(t);return;case"option":for(y in a)if(a.hasOwnProperty(y)&&(n=a[y],n!=null))switch(y){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Et(t,e,y,n,a,null)}return;case"dialog":dt("beforetoggle",t),dt("toggle",t),dt("cancel",t),dt("close",t);break;case"iframe":case"object":dt("load",t);break;case"video":case"audio":for(n=0;n<Kn.length;n++)dt(Kn[n],t);break;case"image":dt("error",t),dt("load",t);break;case"details":dt("toggle",t);break;case"embed":case"source":case"link":dt("error",t),dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(n=a[z],n!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Et(t,e,z,n,a,null)}return;default:if(go(e)){for(j in a)a.hasOwnProperty(j)&&(n=a[j],n!==void 0&&Pr(t,e,j,n,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!=null&&Et(t,e,d,n,a,null))}function Fm(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,s=null,d=null,y=null,z=null,j=null;for(A in a){var C=a[A];if(a.hasOwnProperty(A)&&C!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":y=C;default:n.hasOwnProperty(A)||Et(t,e,A,null,n,C)}}for(var w in n){var A=n[w];if(C=a[w],n.hasOwnProperty(w)&&(A!=null||C!=null))switch(w){case"type":u=A;break;case"name":i=A;break;case"checked":z=A;break;case"defaultChecked":j=A;break;case"value":s=A;break;case"defaultValue":d=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(137,e));break;default:A!==C&&Et(t,e,w,A,n,C)}}fo(t,s,d,y,z,j,u,i);return;case"select":A=s=d=w=null;for(u in a)if(y=a[u],a.hasOwnProperty(u)&&y!=null)switch(u){case"value":break;case"multiple":A=y;default:n.hasOwnProperty(u)||Et(t,e,u,null,n,y)}for(i in n)if(u=n[i],y=a[i],n.hasOwnProperty(i)&&(u!=null||y!=null))switch(i){case"value":w=u;break;case"defaultValue":d=u;break;case"multiple":s=u;default:u!==y&&Et(t,e,i,u,n,y)}e=d,a=s,n=A,w!=null?gl(t,!!a,w,!1):!!n!=!!a&&(e!=null?gl(t,!!a,e,!0):gl(t,!!a,a?[]:"",!1));return;case"textarea":A=w=null;for(d in a)if(i=a[d],a.hasOwnProperty(d)&&i!=null&&!n.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Et(t,e,d,null,n,i)}for(s in n)if(i=n[s],u=a[s],n.hasOwnProperty(s)&&(i!=null||u!=null))switch(s){case"value":w=i;break;case"defaultValue":A=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(r(91));break;default:i!==u&&Et(t,e,s,i,n,u)}cs(t,w,A);return;case"option":for(var at in a)if(w=a[at],a.hasOwnProperty(at)&&w!=null&&!n.hasOwnProperty(at))switch(at){case"selected":t.selected=!1;break;default:Et(t,e,at,null,n,w)}for(y in n)if(w=n[y],A=a[y],n.hasOwnProperty(y)&&w!==A&&(w!=null||A!=null))switch(y){case"selected":t.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Et(t,e,y,w,n,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in a)w=a[I],a.hasOwnProperty(I)&&w!=null&&!n.hasOwnProperty(I)&&Et(t,e,I,null,n,w);for(z in n)if(w=n[z],A=a[z],n.hasOwnProperty(z)&&w!==A&&(w!=null||A!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,e));break;default:Et(t,e,z,w,n,A)}return;default:if(go(e)){for(var Tt in a)w=a[Tt],a.hasOwnProperty(Tt)&&w!==void 0&&!n.hasOwnProperty(Tt)&&Pr(t,e,Tt,void 0,n,w);for(j in n)w=n[j],A=a[j],!n.hasOwnProperty(j)||w===A||w===void 0&&A===void 0||Pr(t,e,j,w,n,A);return}}for(var E in a)w=a[E],a.hasOwnProperty(E)&&w!=null&&!n.hasOwnProperty(E)&&Et(t,e,E,null,n,w);for(C in n)w=n[C],A=a[C],!n.hasOwnProperty(C)||w===A||w==null&&A==null||Et(t,e,C,w,n,A)}var Ir=null,tc=null;function xu(t){return t.nodeType===9?t:t.ownerDocument}function dh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ec(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ac=null;function Pm(){var t=window.event;return t&&t.type==="popstate"?t===ac?!1:(ac=t,!0):(ac=null,!1)}var gh=typeof setTimeout=="function"?setTimeout:void 0,Im=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(t){return mh.resolve(null).then(t).catch(ep)}:gh;function ep(t){setTimeout(function(){throw t})}function Ra(t){return t==="head"}function ph(t,e){var a=e,n=0,i=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(0<n&&8>n){a=n;var s=t.ownerDocument;if(a&1&&Wn(s.documentElement),a&2&&Wn(s.body),a&4)for(a=s.head,Wn(a),s=a.firstChild;s;){var d=s.nextSibling,y=s.nodeName;s[fn]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=d}}if(i===0){t.removeChild(u),ni(e);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=u}while(a);ni(e)}function lc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":lc(a),oo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ap(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[fn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=He(t.nextSibling),t===null)break}return null}function lp(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=He(t.nextSibling),t===null))return null;return t}function nc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function np(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function He(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var ic=null;function yh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function bh(t,e,a){switch(e=xu(a),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Wn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);oo(t)}var Re=new Map,vh=new Set;function Su(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=U.d;U.d={f:ip,r:up,D:op,C:rp,L:cp,m:sp,X:dp,S:fp,M:hp};function ip(){var t=ra.f(),e=du();return t||e}function up(t){var e=sl(t);e!==null&&e.tag===5&&e.type==="form"?Bf(e):ra.r(t)}var Xl=typeof document>"u"?null:document;function xh(t,e,a){var n=Xl;if(n&&typeof e=="string"&&e){var i=_e(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),vh.has(i)||(vh.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),Ft(e,"link",t),Gt(e),n.head.appendChild(e)))}}function op(t){ra.D(t),xh("dns-prefetch",t,null)}function rp(t,e){ra.C(t,e),xh("preconnect",t,e)}function cp(t,e,a){ra.L(t,e,a);var n=Xl;if(n&&t&&e){var i='link[rel="preload"][as="'+_e(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+_e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+_e(a.imageSizes)+'"]')):i+='[href="'+_e(t)+'"]';var u=i;switch(e){case"style":u=Zl(t);break;case"script":u=Ql(t)}Re.has(u)||(t=T({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Re.set(u,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(Fn(u))||e==="script"&&n.querySelector(Pn(u))||(e=n.createElement("link"),Ft(e,"link",t),Gt(e),n.head.appendChild(e)))}}function sp(t,e){ra.m(t,e);var a=Xl;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+_e(n)+'"][href="'+_e(t)+'"]',u=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ql(t)}if(!Re.has(u)&&(t=T({rel:"modulepreload",href:t},e),Re.set(u,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Pn(u)))return}n=a.createElement("link"),Ft(n,"link",t),Gt(n),a.head.appendChild(n)}}}function fp(t,e,a){ra.S(t,e,a);var n=Xl;if(n&&t){var i=fl(n).hoistableStyles,u=Zl(t);e=e||"default";var s=i.get(u);if(!s){var d={loading:0,preload:null};if(s=n.querySelector(Fn(u)))d.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Re.get(u))&&uc(t,a);var y=s=n.createElement("link");Gt(y),Ft(y,"link",t),y._p=new Promise(function(z,j){y.onload=z,y.onerror=j}),y.addEventListener("load",function(){d.loading|=1}),y.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Eu(s,e,n)}s={type:"stylesheet",instance:s,count:1,state:d},i.set(u,s)}}}function dp(t,e){ra.X(t,e);var a=Xl;if(a&&t){var n=fl(a).hoistableScripts,i=Ql(t),u=n.get(i);u||(u=a.querySelector(Pn(i)),u||(t=T({src:t,async:!0},e),(e=Re.get(i))&&oc(t,e),u=a.createElement("script"),Gt(u),Ft(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(i,u))}}function hp(t,e){ra.M(t,e);var a=Xl;if(a&&t){var n=fl(a).hoistableScripts,i=Ql(t),u=n.get(i);u||(u=a.querySelector(Pn(i)),u||(t=T({src:t,async:!0,type:"module"},e),(e=Re.get(i))&&oc(t,e),u=a.createElement("script"),Gt(u),Ft(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(i,u))}}function Sh(t,e,a,n){var i=(i=F.current)?Su(i):null;if(!i)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Zl(a.href),a=fl(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Zl(a.href);var u=fl(i).hoistableStyles,s=u.get(t);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,s),(u=i.querySelector(Fn(t)))&&!u._p&&(s.instance=u,s.state.loading=5),Re.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Re.set(t,a),u||gp(i,t,a,s.state))),e&&n===null)throw Error(r(528,""));return s}if(e&&n!==null)throw Error(r(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ql(a),a=fl(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Zl(t){return'href="'+_e(t)+'"'}function Fn(t){return'link[rel="stylesheet"]['+t+"]"}function Eh(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function gp(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Ft(e,"link",a),Gt(e),t.head.appendChild(e))}function Ql(t){return'[src="'+_e(t)+'"]'}function Pn(t){return"script[async]"+t}function Th(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+_e(a.href)+'"]');if(n)return e.instance=n,Gt(n),n;var i=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),Gt(n),Ft(n,"style",i),Eu(n,a.precedence,t),e.instance=n;case"stylesheet":i=Zl(a.href);var u=t.querySelector(Fn(i));if(u)return e.state.loading|=4,e.instance=u,Gt(u),u;n=Eh(a),(i=Re.get(i))&&uc(n,i),u=(t.ownerDocument||t).createElement("link"),Gt(u);var s=u;return s._p=new Promise(function(d,y){s.onload=d,s.onerror=y}),Ft(u,"link",n),e.state.loading|=4,Eu(u,a.precedence,t),e.instance=u;case"script":return u=Ql(a.src),(i=t.querySelector(Pn(u)))?(e.instance=i,Gt(i),i):(n=a,(i=Re.get(u))&&(n=T({},a),oc(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),Gt(i),Ft(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Eu(n,a.precedence,t));return e.instance}function Eu(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,u=i,s=0;s<n.length;s++){var d=n[s];if(d.dataset.precedence===e)u=d;else if(u!==i)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function uc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function oc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Tu=null;function _h(t,e,a){if(Tu===null){var n=new Map,i=Tu=new Map;i.set(a,n)}else i=Tu,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var u=a[i];if(!(u[fn]||u[Pt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var s=u.getAttribute(e)||"";s=t+s;var d=n.get(s);d?d.push(u):n.set(s,[u])}}return n}function zh(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function mp(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Mh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var In=null;function pp(){}function yp(t,e,a){if(In===null)throw Error(r(475));var n=In;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Zl(a.href),u=t.querySelector(Fn(i));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=_u.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=u,Gt(u);return}u=t.ownerDocument||t,a=Eh(a),(i=Re.get(i))&&uc(a,i),u=u.createElement("link"),Gt(u);var s=u;s._p=new Promise(function(d,y){s.onload=d,s.onerror=y}),Ft(u,"link",a),e.instance=u}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=_u.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function bp(){if(In===null)throw Error(r(475));var t=In;return t.stylesheets&&t.count===0&&rc(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&rc(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function _u(){if(this.count--,this.count===0){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zu=null;function rc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zu=new Map,e.forEach(vp,t),zu=null,_u.call(t))}function vp(t,e){if(!(e.state.loading&4)){var a=zu.get(t);if(a)var n=a.get(null);else{a=new Map,zu.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var s=i[u];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}i=e.instance,s=i.getAttribute("data-precedence"),u=a.get(s)||n,u===n&&a.set(null,i),a.set(s,i),this.count++,n=_u.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),u?u.parentNode.insertBefore(i,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var ti={$$typeof:J,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function xp(t,e,a,n,i,u,s,d){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.hiddenUpdates=lo(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function wh(t,e,a,n,i,u,s,d,y,z,j,C){return t=new xp(t,e,a,s,d,y,z,C),e=1,u===!0&&(e|=24),u=he(3,null,null,e),t.current=u,u.stateNode=t,e=Yo(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:n,isDehydrated:a,cache:e},Vo(u),t}function Ah(t){return t?(t=Tl,t):Tl}function jh(t,e,a,n,i,u){i=Ah(i),n.context===null?n.context=i:n.pendingContext=i,n=ba(e),n.payload={element:a},u=u===void 0?null:u,u!==null&&(n.callback=u),a=va(t,n,e),a!==null&&(be(a,t,e),On(a,t,e))}function Oh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function cc(t,e){Oh(t,e),(t=t.alternate)&&Oh(t,e)}function Rh(t){if(t.tag===13){var e=El(t,67108864);e!==null&&be(e,t,67108864),cc(t,67108864)}}var Mu=!0;function Sp(t,e,a,n){var i=M.T;M.T=null;var u=U.p;try{U.p=2,sc(t,e,a,n)}finally{U.p=u,M.T=i}}function Ep(t,e,a,n){var i=M.T;M.T=null;var u=U.p;try{U.p=8,sc(t,e,a,n)}finally{U.p=u,M.T=i}}function sc(t,e,a,n){if(Mu){var i=fc(n);if(i===null)Fr(t,e,n,wu,a),$h(t,n);else if(_p(i,t,e,a,n))n.stopPropagation();else if($h(t,n),e&4&&-1<Tp.indexOf(t)){for(;i!==null;){var u=sl(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var s=Ba(u.pendingLanes);if(s!==0){var d=u;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var y=1<<31-fe(s);d.entanglements[1]|=y,s&=~y}Qe(u),(vt&6)===0&&(su=ke()+500,Vn(0))}}break;case 13:d=El(u,2),d!==null&&be(d,u,2),du(),cc(u,2)}if(u=fc(n),u===null&&Fr(t,e,n,wu,a),u===i)break;i=u}i!==null&&n.stopPropagation()}else Fr(t,e,n,null,a)}}function fc(t){return t=po(t),dc(t)}var wu=null;function dc(t){if(wu=null,t=cl(t),t!==null){var e=g(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=m(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return wu=t,null}function Dh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(r0()){case Zc:return 2;case Qc:return 8;case vi:case c0:return 32;case Vc:return 268435456;default:return 32}default:return 32}}var hc=!1,Da=null,$a=null,Ca=null,ei=new Map,ai=new Map,Na=[],Tp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $h(t,e){switch(t){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":ei.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(e.pointerId)}}function li(t,e,a,n,i,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:u,targetContainers:[i]},e!==null&&(e=sl(e),e!==null&&Rh(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _p(t,e,a,n,i){switch(e){case"focusin":return Da=li(Da,t,e,a,n,i),!0;case"dragenter":return $a=li($a,t,e,a,n,i),!0;case"mouseover":return Ca=li(Ca,t,e,a,n,i),!0;case"pointerover":var u=i.pointerId;return ei.set(u,li(ei.get(u)||null,t,e,a,n,i)),!0;case"gotpointercapture":return u=i.pointerId,ai.set(u,li(ai.get(u)||null,t,e,a,n,i)),!0}return!1}function Ch(t){var e=cl(t.target);if(e!==null){var a=g(e);if(a!==null){if(e=a.tag,e===13){if(e=m(a),e!==null){t.blockedOn=e,y0(t.priority,function(){if(a.tag===13){var n=ye();n=no(n);var i=El(a,n);i!==null&&be(i,a,n),cc(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Au(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=fc(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);mo=n,a.target.dispatchEvent(n),mo=null}else return e=sl(a),e!==null&&Rh(e),t.blockedOn=a,!1;e.shift()}return!0}function Nh(t,e,a){Au(t)&&a.delete(e)}function zp(){hc=!1,Da!==null&&Au(Da)&&(Da=null),$a!==null&&Au($a)&&($a=null),Ca!==null&&Au(Ca)&&(Ca=null),ei.forEach(Nh),ai.forEach(Nh)}function ju(t,e){t.blockedOn===e&&(t.blockedOn=null,hc||(hc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,zp)))}var Ou=null;function Uh(t){Ou!==t&&(Ou=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Ou===t&&(Ou=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(dc(n||a)===null)continue;break}var u=sl(a);u!==null&&(t.splice(e,3),e-=3,dr(u,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function ni(t){function e(y){return ju(y,t)}Da!==null&&ju(Da,t),$a!==null&&ju($a,t),Ca!==null&&ju(Ca,t),ei.forEach(e),ai.forEach(e);for(var a=0;a<Na.length;a++){var n=Na[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)Ch(a),a.blockedOn===null&&Na.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],u=a[n+1],s=i[le]||null;if(typeof u=="function")s||Uh(a);else if(s){var d=null;if(u&&u.hasAttribute("formAction")){if(i=u,s=u[le]||null)d=s.formAction;else if(dc(i)!==null)continue}else d=s.action;typeof d=="function"?a[n+1]=d:(a.splice(n,3),n-=3),Uh(a)}}}function gc(t){this._internalRoot=t}Ru.prototype.render=gc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var a=e.current,n=ye();jh(a,n,t,e,null,null)},Ru.prototype.unmount=gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jh(t.current,2,null,t,null,null),du(),e[rl]=null}};function Ru(t){this._internalRoot=t}Ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pc();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Na.length&&e!==0&&e<Na[a].priority;a++);Na.splice(a,0,t),a===0&&Ch(t)}};var Hh=o.version;if(Hh!=="19.1.0")throw Error(r(527,Hh,"19.1.0"));U.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=S(e),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Mp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Du.isDisabled&&Du.supportsFiber)try{rn=Du.inject(Mp),se=Du}catch{}}return ui.createRoot=function(t,e){if(!f(t))throw Error(r(299));var a=!1,n="",i=If,u=td,s=ed,d=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(d=e.unstable_transitionCallbacks)),e=wh(t,1,!1,null,null,a,n,i,u,s,d,null),t[rl]=e.current,Wr(t),new gc(e)},ui.hydrateRoot=function(t,e,a){if(!f(t))throw Error(r(299));var n=!1,i="",u=If,s=td,d=ed,y=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(y=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),e=wh(t,1,!0,e,a??null,n,i,u,s,d,y,z),e.context=Ah(null),a=e.current,n=ye(),n=no(n),i=ba(n),i.callback=null,va(a,i,n),a=n,e.current.lanes=a,sn(e,a),Qe(e),t[rl]=e.current,Wr(t),new Ru(e)},ui.version="19.1.0",ui}var Vh;function Up(){if(Vh)return yc.exports;Vh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),yc.exports=Np(),yc.exports}var Hp=Up(),Vt=function(){return Vt=Object.assign||function(o){for(var c,r=1,f=arguments.length;r<f;r++){c=arguments[r];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(o[g]=c[g])}return o},Vt.apply(this,arguments)};function mi(l,o,c){if(c||arguments.length===2)for(var r=0,f=o.length,g;r<f;r++)(g||!(r in o))&&(g||(g=Array.prototype.slice.call(o,0,r)),g[r]=o[r]);return l.concat(g||Array.prototype.slice.call(o))}var wt="-ms-",gi="-moz-",bt="-webkit-",Og="comm",Wu="rule",qc="decl",Lp="@import",Rg="@keyframes",Bp="@layer",Dg=Math.abs,kc=String.fromCharCode,jc=Object.assign;function qp(l,o){return Qt(l,0)^45?(((o<<2^Qt(l,0))<<2^Qt(l,1))<<2^Qt(l,2))<<2^Qt(l,3):0}function $g(l){return l.trim()}function da(l,o){return(l=o.exec(l))?l[0]:l}function rt(l,o,c){return l.replace(o,c)}function Lu(l,o,c){return l.indexOf(o,c)}function Qt(l,o){return l.charCodeAt(o)|0}function Pl(l,o,c){return l.slice(o,c)}function Ve(l){return l.length}function Cg(l){return l.length}function hi(l,o){return o.push(l),l}function kp(l,o){return l.map(o).join("")}function Kh(l,o){return l.filter(function(c){return!da(c,o)})}var Fu=1,Il=1,Ng=0,De=0,Bt=0,ln="";function Pu(l,o,c,r,f,g,m,v){return{value:l,root:o,parent:c,type:r,props:f,children:g,line:Fu,column:Il,length:m,return:"",siblings:v}}function Ha(l,o){return jc(Pu("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},o)}function Vl(l){for(;l.root;)l=Ha(l.root,{children:[l]});hi(l,l.siblings)}function Gp(){return Bt}function Yp(){return Bt=De>0?Qt(ln,--De):0,Il--,Bt===10&&(Il=1,Fu--),Bt}function Be(){return Bt=De<Ng?Qt(ln,De++):0,Il++,Bt===10&&(Il=1,Fu++),Bt}function nl(){return Qt(ln,De)}function Bu(){return De}function Iu(l,o){return Pl(ln,l,o)}function Oc(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xp(l){return Fu=Il=1,Ng=Ve(ln=l),De=0,[]}function Zp(l){return ln="",l}function Sc(l){return $g(Iu(De-1,Rc(l===91?l+2:l===40?l+1:l)))}function Qp(l){for(;(Bt=nl())&&Bt<33;)Be();return Oc(l)>2||Oc(Bt)>3?"":" "}function Vp(l,o){for(;--o&&Be()&&!(Bt<48||Bt>102||Bt>57&&Bt<65||Bt>70&&Bt<97););return Iu(l,Bu()+(o<6&&nl()==32&&Be()==32))}function Rc(l){for(;Be();)switch(Bt){case l:return De;case 34:case 39:l!==34&&l!==39&&Rc(Bt);break;case 40:l===41&&Rc(l);break;case 92:Be();break}return De}function Kp(l,o){for(;Be()&&l+Bt!==57;)if(l+Bt===84&&nl()===47)break;return"/*"+Iu(o,De-1)+"*"+kc(l===47?l:Be())}function Jp(l){for(;!Oc(nl());)Be();return Iu(l,De)}function Wp(l){return Zp(qu("",null,null,null,[""],l=Xp(l),0,[0],l))}function qu(l,o,c,r,f,g,m,v,S){for(var p=0,T=0,D=m,H=0,L=0,Z=0,P=1,et=1,it=1,lt=0,J="",V=f,X=g,q=r,Y=J;et;)switch(Z=lt,lt=Be()){case 40:if(Z!=108&&Qt(Y,D-1)==58){Lu(Y+=rt(Sc(lt),"&","&\f"),"&\f",Dg(p?v[p-1]:0))!=-1&&(it=-1);break}case 34:case 39:case 91:Y+=Sc(lt);break;case 9:case 10:case 13:case 32:Y+=Qp(Z);break;case 92:Y+=Vp(Bu()-1,7);continue;case 47:switch(nl()){case 42:case 47:hi(Fp(Kp(Be(),Bu()),o,c,S),S);break;default:Y+="/"}break;case 123*P:v[p++]=Ve(Y)*it;case 125*P:case 59:case 0:switch(lt){case 0:case 125:et=0;case 59+T:it==-1&&(Y=rt(Y,/\f/g,"")),L>0&&Ve(Y)-D&&hi(L>32?Wh(Y+";",r,c,D-1,S):Wh(rt(Y," ","")+";",r,c,D-2,S),S);break;case 59:Y+=";";default:if(hi(q=Jh(Y,o,c,p,T,f,v,J,V=[],X=[],D,g),g),lt===123)if(T===0)qu(Y,o,q,q,V,g,D,v,X);else switch(H===99&&Qt(Y,3)===110?100:H){case 100:case 108:case 109:case 115:qu(l,q,q,r&&hi(Jh(l,q,q,0,0,f,v,J,f,V=[],D,X),X),f,X,D,v,r?V:X);break;default:qu(Y,q,q,q,[""],X,0,v,X)}}p=T=L=0,P=it=1,J=Y="",D=m;break;case 58:D=1+Ve(Y),L=Z;default:if(P<1){if(lt==123)--P;else if(lt==125&&P++==0&&Yp()==125)continue}switch(Y+=kc(lt),lt*P){case 38:it=T>0?1:(Y+="\f",-1);break;case 44:v[p++]=(Ve(Y)-1)*it,it=1;break;case 64:nl()===45&&(Y+=Sc(Be())),H=nl(),T=D=Ve(J=Y+=Jp(Bu())),lt++;break;case 45:Z===45&&Ve(Y)==2&&(P=0)}}return g}function Jh(l,o,c,r,f,g,m,v,S,p,T,D){for(var H=f-1,L=f===0?g:[""],Z=Cg(L),P=0,et=0,it=0;P<r;++P)for(var lt=0,J=Pl(l,H+1,H=Dg(et=m[P])),V=l;lt<Z;++lt)(V=$g(et>0?L[lt]+" "+J:rt(J,/&\f/g,L[lt])))&&(S[it++]=V);return Pu(l,o,c,f===0?Wu:v,S,p,T,D)}function Fp(l,o,c,r){return Pu(l,o,c,Og,kc(Gp()),Pl(l,2,-2),0,r)}function Wh(l,o,c,r,f){return Pu(l,o,c,qc,Pl(l,0,r),Pl(l,r+1,-1),r,f)}function Ug(l,o,c){switch(qp(l,o)){case 5103:return bt+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return bt+l+l;case 4789:return gi+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return bt+l+gi+l+wt+l+l;case 5936:switch(Qt(l,o+11)){case 114:return bt+l+wt+rt(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return bt+l+wt+rt(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return bt+l+wt+rt(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return bt+l+wt+l+l;case 6165:return bt+l+wt+"flex-"+l+l;case 5187:return bt+l+rt(l,/(\w+).+(:[^]+)/,bt+"box-$1$2"+wt+"flex-$1$2")+l;case 5443:return bt+l+wt+"flex-item-"+rt(l,/flex-|-self/g,"")+(da(l,/flex-|baseline/)?"":wt+"grid-row-"+rt(l,/flex-|-self/g,""))+l;case 4675:return bt+l+wt+"flex-line-pack"+rt(l,/align-content|flex-|-self/g,"")+l;case 5548:return bt+l+wt+rt(l,"shrink","negative")+l;case 5292:return bt+l+wt+rt(l,"basis","preferred-size")+l;case 6060:return bt+"box-"+rt(l,"-grow","")+bt+l+wt+rt(l,"grow","positive")+l;case 4554:return bt+rt(l,/([^-])(transform)/g,"$1"+bt+"$2")+l;case 6187:return rt(rt(rt(l,/(zoom-|grab)/,bt+"$1"),/(image-set)/,bt+"$1"),l,"")+l;case 5495:case 3959:return rt(l,/(image-set\([^]*)/,bt+"$1$`$1");case 4968:return rt(rt(l,/(.+:)(flex-)?(.*)/,bt+"box-pack:$3"+wt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+bt+l+l;case 4200:if(!da(l,/flex-|baseline/))return wt+"grid-column-align"+Pl(l,o)+l;break;case 2592:case 3360:return wt+rt(l,"template-","")+l;case 4384:case 3616:return c&&c.some(function(r,f){return o=f,da(r.props,/grid-\w+-end/)})?~Lu(l+(c=c[o].value),"span",0)?l:wt+rt(l,"-start","")+l+wt+"grid-row-span:"+(~Lu(c,"span",0)?da(c,/\d+/):+da(c,/\d+/)-+da(l,/\d+/))+";":wt+rt(l,"-start","")+l;case 4896:case 4128:return c&&c.some(function(r){return da(r.props,/grid-\w+-start/)})?l:wt+rt(rt(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return rt(l,/(.+)-inline(.+)/,bt+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ve(l)-1-o>6)switch(Qt(l,o+1)){case 109:if(Qt(l,o+4)!==45)break;case 102:return rt(l,/(.+:)(.+)-([^]+)/,"$1"+bt+"$2-$3$1"+gi+(Qt(l,o+3)==108?"$3":"$2-$3"))+l;case 115:return~Lu(l,"stretch",0)?Ug(rt(l,"stretch","fill-available"),o,c)+l:l}break;case 5152:case 5920:return rt(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,f,g,m,v,S,p){return wt+f+":"+g+p+(m?wt+f+"-span:"+(v?S:+S-+g)+p:"")+l});case 4949:if(Qt(l,o+6)===121)return rt(l,":",":"+bt)+l;break;case 6444:switch(Qt(l,Qt(l,14)===45?18:11)){case 120:return rt(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+bt+(Qt(l,14)===45?"inline-":"")+"box$3$1"+bt+"$2$3$1"+wt+"$2box$3")+l;case 100:return rt(l,":",":"+wt)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return rt(l,"scroll-","scroll-snap-")+l}return l}function Xu(l,o){for(var c="",r=0;r<l.length;r++)c+=o(l[r],r,l,o)||"";return c}function Pp(l,o,c,r){switch(l.type){case Bp:if(l.children.length)break;case Lp:case qc:return l.return=l.return||l.value;case Og:return"";case Rg:return l.return=l.value+"{"+Xu(l.children,r)+"}";case Wu:if(!Ve(l.value=l.props.join(",")))return""}return Ve(c=Xu(l.children,r))?l.return=l.value+"{"+c+"}":""}function Ip(l){var o=Cg(l);return function(c,r,f,g){for(var m="",v=0;v<o;v++)m+=l[v](c,r,f,g)||"";return m}}function ty(l){return function(o){o.root||(o=o.return)&&l(o)}}function ey(l,o,c,r){if(l.length>-1&&!l.return)switch(l.type){case qc:l.return=Ug(l.value,l.length,c);return;case Rg:return Xu([Ha(l,{value:rt(l.value,"@","@"+bt)})],r);case Wu:if(l.length)return kp(c=l.props,function(f){switch(da(f,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vl(Ha(l,{props:[rt(f,/:(read-\w+)/,":"+gi+"$1")]})),Vl(Ha(l,{props:[f]})),jc(l,{props:Kh(c,r)});break;case"::placeholder":Vl(Ha(l,{props:[rt(f,/:(plac\w+)/,":"+bt+"input-$1")]})),Vl(Ha(l,{props:[rt(f,/:(plac\w+)/,":"+gi+"$1")]})),Vl(Ha(l,{props:[rt(f,/:(plac\w+)/,wt+"input-$1")]})),Vl(Ha(l,{props:[f]})),jc(l,{props:Kh(c,r)});break}return""})}}var ay={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ve={},tn=typeof process<"u"&&ve!==void 0&&(ve.REACT_APP_SC_ATTR||ve.SC_ATTR)||"data-styled",Hg="active",Lg="data-styled-version",to="6.1.17",Gc=`/*!sc*/
`,Zu=typeof window<"u"&&"HTMLElement"in window,ly=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ve!==void 0&&ve.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ve.REACT_APP_SC_DISABLE_SPEEDY!==""?ve.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ve.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ve!==void 0&&ve.SC_DISABLE_SPEEDY!==void 0&&ve.SC_DISABLE_SPEEDY!==""&&ve.SC_DISABLE_SPEEDY!=="false"&&ve.SC_DISABLE_SPEEDY),ny={},eo=Object.freeze([]),en=Object.freeze({});function Bg(l,o,c){return c===void 0&&(c=en),l.theme!==c.theme&&l.theme||o||c.theme}var qg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),iy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uy=/(^-|-$)/g;function Fh(l){return l.replace(iy,"-").replace(uy,"")}var oy=/(a)(d)/gi,$u=52,Ph=function(l){return String.fromCharCode(l+(l>25?39:97))};function Dc(l){var o,c="";for(o=Math.abs(l);o>$u;o=o/$u|0)c=Ph(o%$u)+c;return(Ph(o%$u)+c).replace(oy,"$1-$2")}var Ec,kg=5381,Fl=function(l,o){for(var c=o.length;c;)l=33*l^o.charCodeAt(--c);return l},Gg=function(l){return Fl(kg,l)};function Yg(l){return Dc(Gg(l)>>>0)}function ry(l){return l.displayName||l.name||"Component"}function Tc(l){return typeof l=="string"&&!0}var Xg=typeof Symbol=="function"&&Symbol.for,Zg=Xg?Symbol.for("react.memo"):60115,cy=Xg?Symbol.for("react.forward_ref"):60112,sy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dy=((Ec={})[cy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ec[Zg]=Qg,Ec);function Ih(l){return("type"in(o=l)&&o.type.$$typeof)===Zg?Qg:"$$typeof"in l?dy[l.$$typeof]:sy;var o}var hy=Object.defineProperty,gy=Object.getOwnPropertyNames,tg=Object.getOwnPropertySymbols,my=Object.getOwnPropertyDescriptor,py=Object.getPrototypeOf,eg=Object.prototype;function Vg(l,o,c){if(typeof o!="string"){if(eg){var r=py(o);r&&r!==eg&&Vg(l,r,c)}var f=gy(o);tg&&(f=f.concat(tg(o)));for(var g=Ih(l),m=Ih(o),v=0;v<f.length;++v){var S=f[v];if(!(S in fy||c&&c[S]||m&&S in m||g&&S in g)){var p=my(o,S);try{hy(l,S,p)}catch{}}}}return l}function il(l){return typeof l=="function"}function Yc(l){return typeof l=="object"&&"styledComponentId"in l}function ll(l,o){return l&&o?"".concat(l," ").concat(o):l||o||""}function $c(l,o){if(l.length===0)return"";for(var c=l[0],r=1;r<l.length;r++)c+=l[r];return c}function pi(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Cc(l,o,c){if(c===void 0&&(c=!1),!c&&!pi(l)&&!Array.isArray(l))return o;if(Array.isArray(o))for(var r=0;r<o.length;r++)l[r]=Cc(l[r],o[r]);else if(pi(o))for(var r in o)l[r]=Cc(l[r],o[r]);return l}function Xc(l,o){Object.defineProperty(l,"toString",{value:o})}function ul(l){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var yy=function(){function l(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return l.prototype.indexOfGroup=function(o){for(var c=0,r=0;r<o;r++)c+=this.groupSizes[r];return c},l.prototype.insertRules=function(o,c){if(o>=this.groupSizes.length){for(var r=this.groupSizes,f=r.length,g=f;o>=g;)if((g<<=1)<0)throw ul(16,"".concat(o));this.groupSizes=new Uint32Array(g),this.groupSizes.set(r),this.length=g;for(var m=f;m<g;m++)this.groupSizes[m]=0}for(var v=this.indexOfGroup(o+1),S=(m=0,c.length);m<S;m++)this.tag.insertRule(v,c[m])&&(this.groupSizes[o]++,v++)},l.prototype.clearGroup=function(o){if(o<this.length){var c=this.groupSizes[o],r=this.indexOfGroup(o),f=r+c;this.groupSizes[o]=0;for(var g=r;g<f;g++)this.tag.deleteRule(r)}},l.prototype.getGroup=function(o){var c="";if(o>=this.length||this.groupSizes[o]===0)return c;for(var r=this.groupSizes[o],f=this.indexOfGroup(o),g=f+r,m=f;m<g;m++)c+="".concat(this.tag.getRule(m)).concat(Gc);return c},l}(),ku=new Map,Qu=new Map,Gu=1,Cu=function(l){if(ku.has(l))return ku.get(l);for(;Qu.has(Gu);)Gu++;var o=Gu++;return ku.set(l,o),Qu.set(o,l),o},by=function(l,o){Gu=o+1,ku.set(l,o),Qu.set(o,l)},vy="style[".concat(tn,"][").concat(Lg,'="').concat(to,'"]'),xy=new RegExp("^".concat(tn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Sy=function(l,o,c){for(var r,f=c.split(","),g=0,m=f.length;g<m;g++)(r=f[g])&&l.registerName(o,r)},Ey=function(l,o){for(var c,r=((c=o.textContent)!==null&&c!==void 0?c:"").split(Gc),f=[],g=0,m=r.length;g<m;g++){var v=r[g].trim();if(v){var S=v.match(xy);if(S){var p=0|parseInt(S[1],10),T=S[2];p!==0&&(by(T,p),Sy(l,T,S[3]),l.getTag().insertRules(p,f)),f.length=0}else f.push(v)}}},ag=function(l){for(var o=document.querySelectorAll(vy),c=0,r=o.length;c<r;c++){var f=o[c];f&&f.getAttribute(tn)!==Hg&&(Ey(l,f),f.parentNode&&f.parentNode.removeChild(f))}};function Ty(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Kg=function(l){var o=document.head,c=l||o,r=document.createElement("style"),f=function(v){var S=Array.from(v.querySelectorAll("style[".concat(tn,"]")));return S[S.length-1]}(c),g=f!==void 0?f.nextSibling:null;r.setAttribute(tn,Hg),r.setAttribute(Lg,to);var m=Ty();return m&&r.setAttribute("nonce",m),c.insertBefore(r,g),r},_y=function(){function l(o){this.element=Kg(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var r=document.styleSheets,f=0,g=r.length;f<g;f++){var m=r[f];if(m.ownerNode===c)return m}throw ul(17)}(this.element),this.length=0}return l.prototype.insertRule=function(o,c){try{return this.sheet.insertRule(c,o),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},l.prototype.getRule=function(o){var c=this.sheet.cssRules[o];return c&&c.cssText?c.cssText:""},l}(),zy=function(){function l(o){this.element=Kg(o),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(o,c){if(o<=this.length&&o>=0){var r=document.createTextNode(c);return this.element.insertBefore(r,this.nodes[o]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},l.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},l}(),My=function(){function l(o){this.rules=[],this.length=0}return l.prototype.insertRule=function(o,c){return o<=this.length&&(this.rules.splice(o,0,c),this.length++,!0)},l.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},l.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},l}(),lg=Zu,wy={isServer:!Zu,useCSSOMInjection:!ly},Vu=function(){function l(o,c,r){o===void 0&&(o=en),c===void 0&&(c={});var f=this;this.options=Vt(Vt({},wy),o),this.gs=c,this.names=new Map(r),this.server=!!o.isServer,!this.server&&Zu&&lg&&(lg=!1,ag(this)),Xc(this,function(){return function(g){for(var m=g.getTag(),v=m.length,S="",p=function(D){var H=function(it){return Qu.get(it)}(D);if(H===void 0)return"continue";var L=g.names.get(H),Z=m.getGroup(D);if(L===void 0||!L.size||Z.length===0)return"continue";var P="".concat(tn,".g").concat(D,'[id="').concat(H,'"]'),et="";L!==void 0&&L.forEach(function(it){it.length>0&&(et+="".concat(it,","))}),S+="".concat(Z).concat(P,'{content:"').concat(et,'"}').concat(Gc)},T=0;T<v;T++)p(T);return S}(f)})}return l.registerId=function(o){return Cu(o)},l.prototype.rehydrate=function(){!this.server&&Zu&&ag(this)},l.prototype.reconstructWithOptions=function(o,c){return c===void 0&&(c=!0),new l(Vt(Vt({},this.options),o),this.gs,c&&this.names||void 0)},l.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(o=function(c){var r=c.useCSSOMInjection,f=c.target;return c.isServer?new My(f):r?new _y(f):new zy(f)}(this.options),new yy(o)));var o},l.prototype.hasNameForId=function(o,c){return this.names.has(o)&&this.names.get(o).has(c)},l.prototype.registerName=function(o,c){if(Cu(o),this.names.has(o))this.names.get(o).add(c);else{var r=new Set;r.add(c),this.names.set(o,r)}},l.prototype.insertRules=function(o,c,r){this.registerName(o,c),this.getTag().insertRules(Cu(o),r)},l.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},l.prototype.clearRules=function(o){this.getTag().clearGroup(Cu(o)),this.clearNames(o)},l.prototype.clearTag=function(){this.tag=void 0},l}(),Ay=/&/g,jy=/^\s*\/\/.*$/gm;function Jg(l,o){return l.map(function(c){return c.type==="rule"&&(c.value="".concat(o," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(o," ")),c.props=c.props.map(function(r){return"".concat(o," ").concat(r)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Jg(c.children,o)),c})}function Oy(l){var o,c,r,f=en,g=f.options,m=g===void 0?en:g,v=f.plugins,S=v===void 0?eo:v,p=function(H,L,Z){return Z.startsWith(c)&&Z.endsWith(c)&&Z.replaceAll(c,"").length>0?".".concat(o):H},T=S.slice();T.push(function(H){H.type===Wu&&H.value.includes("&")&&(H.props[0]=H.props[0].replace(Ay,c).replace(r,p))}),m.prefix&&T.push(ey),T.push(Pp);var D=function(H,L,Z,P){L===void 0&&(L=""),Z===void 0&&(Z=""),P===void 0&&(P="&"),o=P,c=L,r=new RegExp("\\".concat(c,"\\b"),"g");var et=H.replace(jy,""),it=Wp(Z||L?"".concat(Z," ").concat(L," { ").concat(et," }"):et);m.namespace&&(it=Jg(it,m.namespace));var lt=[];return Xu(it,Ip(T.concat(ty(function(J){return lt.push(J)})))),lt};return D.hash=S.length?S.reduce(function(H,L){return L.name||ul(15),Fl(H,L.name)},kg).toString():"",D}var Ry=new Vu,Nc=Oy(),Wg=Le.createContext({shouldForwardProp:void 0,styleSheet:Ry,stylis:Nc});Wg.Consumer;Le.createContext(void 0);function Uc(){return N.useContext(Wg)}var Dy=function(){function l(o,c){var r=this;this.inject=function(f,g){g===void 0&&(g=Nc);var m=r.name+g.hash;f.hasNameForId(r.id,m)||f.insertRules(r.id,m,g(r.rules,m,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=c,Xc(this,function(){throw ul(12,String(r.name))})}return l.prototype.getName=function(o){return o===void 0&&(o=Nc),this.name+o.hash},l}(),$y=function(l){return l>="A"&&l<="Z"};function ng(l){for(var o="",c=0;c<l.length;c++){var r=l[c];if(c===1&&r==="-"&&l[0]==="-")return l;$y(r)?o+="-"+r.toLowerCase():o+=r}return o.startsWith("ms-")?"-"+o:o}var Fg=function(l){return l==null||l===!1||l===""},Pg=function(l){var o,c,r=[];for(var f in l){var g=l[f];l.hasOwnProperty(f)&&!Fg(g)&&(Array.isArray(g)&&g.isCss||il(g)?r.push("".concat(ng(f),":"),g,";"):pi(g)?r.push.apply(r,mi(mi(["".concat(f," {")],Pg(g),!1),["}"],!1)):r.push("".concat(ng(f),": ").concat((o=f,(c=g)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||o in ay||o.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return r};function La(l,o,c,r){if(Fg(l))return[];if(Yc(l))return[".".concat(l.styledComponentId)];if(il(l)){if(!il(g=l)||g.prototype&&g.prototype.isReactComponent||!o)return[l];var f=l(o);return La(f,o,c,r)}var g;return l instanceof Dy?c?(l.inject(c,r),[l.getName(r)]):[l]:pi(l)?Pg(l):Array.isArray(l)?Array.prototype.concat.apply(eo,l.map(function(m){return La(m,o,c,r)})):[l.toString()]}function Ig(l){for(var o=0;o<l.length;o+=1){var c=l[o];if(il(c)&&!Yc(c))return!1}return!0}var Cy=Gg(to),Ny=function(){function l(o,c,r){this.rules=o,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ig(o),this.componentId=c,this.baseHash=Fl(Cy,c),this.baseStyle=r,Vu.registerId(c)}return l.prototype.generateAndInjectStyles=function(o,c,r){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,c,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))f=ll(f,this.staticRulesId);else{var g=$c(La(this.rules,o,c,r)),m=Dc(Fl(this.baseHash,g)>>>0);if(!c.hasNameForId(this.componentId,m)){var v=r(g,".".concat(m),void 0,this.componentId);c.insertRules(this.componentId,m,v)}f=ll(f,m),this.staticRulesId=m}else{for(var S=Fl(this.baseHash,r.hash),p="",T=0;T<this.rules.length;T++){var D=this.rules[T];if(typeof D=="string")p+=D;else if(D){var H=$c(La(D,o,c,r));S=Fl(S,H+T),p+=H}}if(p){var L=Dc(S>>>0);c.hasNameForId(this.componentId,L)||c.insertRules(this.componentId,L,r(p,".".concat(L),void 0,this.componentId)),f=ll(f,L)}}return f},l}(),yi=Le.createContext(void 0);yi.Consumer;function Uy(l){var o=Le.useContext(yi),c=N.useMemo(function(){return function(r,f){if(!r)throw ul(14);if(il(r)){var g=r(f);return g}if(Array.isArray(r)||typeof r!="object")throw ul(8);return f?Vt(Vt({},f),r):r}(l.theme,o)},[l.theme,o]);return l.children?Le.createElement(yi.Provider,{value:c},l.children):null}var _c={};function Hy(l,o,c){var r=Yc(l),f=l,g=!Tc(l),m=o.attrs,v=m===void 0?eo:m,S=o.componentId,p=S===void 0?function(V,X){var q=typeof V!="string"?"sc":Fh(V);_c[q]=(_c[q]||0)+1;var Y="".concat(q,"-").concat(Yg(to+q+_c[q]));return X?"".concat(X,"-").concat(Y):Y}(o.displayName,o.parentComponentId):S,T=o.displayName,D=T===void 0?function(V){return Tc(V)?"styled.".concat(V):"Styled(".concat(ry(V),")")}(l):T,H=o.displayName&&o.componentId?"".concat(Fh(o.displayName),"-").concat(o.componentId):o.componentId||p,L=r&&f.attrs?f.attrs.concat(v).filter(Boolean):v,Z=o.shouldForwardProp;if(r&&f.shouldForwardProp){var P=f.shouldForwardProp;if(o.shouldForwardProp){var et=o.shouldForwardProp;Z=function(V,X){return P(V,X)&&et(V,X)}}else Z=P}var it=new Ny(c,H,r?f.componentStyle:void 0);function lt(V,X){return function(q,Y,ht){var Kt=q.attrs,qe=q.componentStyle,ce=q.defaultProps,Nt=q.foldedComponentIds,$e=q.styledComponentId,Ce=q.target,Ut=Le.useContext(yi),M=Uc(),U=q.shouldForwardProp||M.shouldForwardProp,G=Bg(Y,Ut,ce)||en,nt=function(ot,F,Dt){for(var mt,zt=Vt(Vt({},F),{className:void 0,theme:Dt}),Se=0;Se<ot.length;Se+=1){var Ee=il(mt=ot[Se])?mt(zt):mt;for(var ae in Ee)zt[ae]=ae==="className"?ll(zt[ae],Ee[ae]):ae==="style"?Vt(Vt({},zt[ae]),Ee[ae]):Ee[ae]}return F.className&&(zt.className=ll(zt.className,F.className)),zt}(Kt,Y,G),b=nt.as||Ce,$={};for(var B in nt)nt[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&nt.theme===G||(B==="forwardedAs"?$.as=nt.forwardedAs:U&&!U(B,b)||($[B]=nt[B]));var k=function(ot,F){var Dt=Uc(),mt=ot.generateAndInjectStyles(F,Dt.styleSheet,Dt.stylis);return mt}(qe,nt),K=ll(Nt,$e);return k&&(K+=" "+k),nt.className&&(K+=" "+nt.className),$[Tc(b)&&!qg.has(b)?"class":"className"]=K,ht&&($.ref=ht),N.createElement(b,$)}(J,V,X)}lt.displayName=D;var J=Le.forwardRef(lt);return J.attrs=L,J.componentStyle=it,J.displayName=D,J.shouldForwardProp=Z,J.foldedComponentIds=r?ll(f.foldedComponentIds,f.styledComponentId):"",J.styledComponentId=H,J.target=r?f.target:l,Object.defineProperty(J,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=r?function(X){for(var q=[],Y=1;Y<arguments.length;Y++)q[Y-1]=arguments[Y];for(var ht=0,Kt=q;ht<Kt.length;ht++)Cc(X,Kt[ht],!0);return X}({},f.defaultProps,V):V}}),Xc(J,function(){return".".concat(J.styledComponentId)}),g&&Vg(J,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),J}function ig(l,o){for(var c=[l[0]],r=0,f=o.length;r<f;r+=1)c.push(o[r],l[r+1]);return c}var ug=function(l){return Object.assign(l,{isCss:!0})};function t0(l){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];if(il(l)||pi(l))return ug(La(ig(eo,mi([l],o,!0))));var r=l;return o.length===0&&r.length===1&&typeof r[0]=="string"?La(r):ug(La(ig(r,o)))}function Hc(l,o,c){if(c===void 0&&(c=en),!o)throw ul(1,o);var r=function(f){for(var g=[],m=1;m<arguments.length;m++)g[m-1]=arguments[m];return l(o,c,t0.apply(void 0,mi([f],g,!1)))};return r.attrs=function(f){return Hc(l,o,Vt(Vt({},c),{attrs:Array.prototype.concat(c.attrs,f).filter(Boolean)}))},r.withConfig=function(f){return Hc(l,o,Vt(Vt({},c),f))},r}var e0=function(l){return Hc(Hy,l)},R=e0;qg.forEach(function(l){R[l]=e0(l)});var Ly=function(){function l(o,c){this.rules=o,this.componentId=c,this.isStatic=Ig(o),Vu.registerId(this.componentId+1)}return l.prototype.createStyles=function(o,c,r,f){var g=f($c(La(this.rules,c,r,f)),""),m=this.componentId+o;r.insertRules(m,m,g)},l.prototype.removeStyles=function(o,c){c.clearRules(this.componentId+o)},l.prototype.renderStyles=function(o,c,r,f){o>2&&Vu.registerId(this.componentId+o),this.removeStyles(o,r),this.createStyles(o,c,r,f)},l}();function By(l){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];var r=t0.apply(void 0,mi([l],o,!1)),f="sc-global-".concat(Yg(JSON.stringify(r))),g=new Ly(r,f),m=function(S){var p=Uc(),T=Le.useContext(yi),D=Le.useRef(p.styleSheet.allocateGSInstance(f)).current;return p.styleSheet.server&&v(D,S,p.styleSheet,T,p.stylis),Le.useLayoutEffect(function(){if(!p.styleSheet.server)return v(D,S,p.styleSheet,T,p.stylis),function(){return g.removeStyles(D,p.styleSheet)}},[D,S,p.styleSheet,T,p.stylis]),null};function v(S,p,T,D,H){if(g.isStatic)g.renderStyles(S,ny,T,H);else{var L=Vt(Vt({},p),{theme:Bg(p,D,m.defaultProps)});g.renderStyles(S,L,T,H)}}return Le.memo(m)}const qy="modulepreload",ky=function(l){return"/gsl-dust-tool/"+l},og={},Gy=function(o,c,r){let f=Promise.resolve();if(c&&c.length>0){let m=function(p){return Promise.all(p.map(T=>Promise.resolve(T).then(D=>({status:"fulfilled",value:D}),D=>({status:"rejected",reason:D}))))};document.getElementsByTagName("link");const v=document.querySelector("meta[property=csp-nonce]"),S=(v==null?void 0:v.nonce)||(v==null?void 0:v.getAttribute("nonce"));f=m(c.map(p=>{if(p=ky(p),p in og)return;og[p]=!0;const T=p.endsWith(".css"),D=T?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${D}`))return;const H=document.createElement("link");if(H.rel=T?"stylesheet":qy,T||(H.as="script"),H.crossOrigin="",H.href=p,S&&H.setAttribute("nonce",S),document.head.appendChild(H),T)return new Promise((L,Z)=>{H.addEventListener("load",L),H.addEventListener("error",()=>Z(new Error(`Unable to preload CSS for ${p}`)))})}))}function g(m){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=m,window.dispatchEvent(v),!v.defaultPrevented)throw m}return f.then(m=>{for(const v of m||[])v.status==="rejected"&&g(v.reason);return o().catch(g)})},Yy=N.createContext(null);function Xy(l,o){const c=Array.isArray(l)?l[0]:l?l.x:0,r=Array.isArray(l)?l[1]:l?l.y:0,f=Array.isArray(o)?o[0]:o?o.x:0,g=Array.isArray(o)?o[1]:o?o.y:0;return c===f&&r===g}function xe(l,o){if(l===o)return!0;if(!l||!o)return!1;if(Array.isArray(l)){if(!Array.isArray(o)||l.length!==o.length)return!1;for(let c=0;c<l.length;c++)if(!xe(l[c],o[c]))return!1;return!0}else if(Array.isArray(o))return!1;if(typeof l=="object"&&typeof o=="object"){const c=Object.keys(l),r=Object.keys(o);if(c.length!==r.length)return!1;for(const f of c)if(!o.hasOwnProperty(f)||!xe(l[f],o[f]))return!1;return!0}return!1}function Zy(l){const o=l.clone();return o.pixelsToGLUnits=l.pixelsToGLUnits,o}function rg(l,o){if(!l.getProjection)return;const c=l.getProjection(),r=o.getProjection();xe(c,r)||o.setProjection(c)}function cg(l){return{longitude:l.center.lng,latitude:l.center.lat,zoom:l.zoom,pitch:l.pitch,bearing:l.bearing,padding:l.padding}}function sg(l,o){const c=o.viewState||o;let r=!1;if("longitude"in c&&"latitude"in c){const f=l.center;l.center=new f.constructor(c.longitude,c.latitude),r=r||f!==l.center}if("zoom"in c){const f=l.zoom;l.zoom=c.zoom,r=r||f!==l.zoom}if("bearing"in c){const f=l.bearing;l.bearing=c.bearing,r=r||f!==l.bearing}if("pitch"in c){const f=l.pitch;l.pitch=c.pitch,r=r||f!==l.pitch}return c.padding&&!l.isPaddingEqual(c.padding)&&(r=!0,l.padding=c.padding),r}const Qy=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function fg(l){if(!l)return null;if(typeof l=="string"||("toJS"in l&&(l=l.toJS()),!l.layers))return l;const o={};for(const r of l.layers)o[r.id]=r;const c=l.layers.map(r=>{let f=null;"interactive"in r&&(f=Object.assign({},r),delete f.interactive);const g=o[r.ref];if(g){f=f||Object.assign({},r),delete f.ref;for(const m of Qy)m in g&&(f[m]=g[m])}return f||r});return{...l,layers:c}}var dg={};const hg={version:8,sources:{},layers:[]},gg={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},zc={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},mg={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},Vy=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],Ky=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class an{constructor(o,c,r){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=f=>{const g=this.props[mg[f.type]];g?g(f):f.type==="error"&&console.error(f.error)},this._onPointerEvent=f=>{(f.type==="mousemove"||f.type==="mouseout")&&this._updateHover(f);const g=this.props[gg[f.type]];g&&(this.props.interactiveLayerIds&&f.type!=="mouseover"&&f.type!=="mouseout"&&(f.features=this._hoveredFeatures||this._queryRenderedFeatures(f.point)),g(f),delete f.features)},this._onCameraEvent=f=>{if(!this._internalUpdate){const g=this.props[zc[f.type]];g&&g(f)}f.type in this._deferredEvents&&(this._deferredEvents[f.type]=!1)},this._MapClass=o,this.props=c,this._initialize(r)}get map(){return this._map}get transform(){return this._renderTransform}setProps(o){const c=this.props;this.props=o;const r=this._updateSettings(o,c);r&&this._createShadowTransform(this._map);const f=this._updateSize(o),g=this._updateViewState(o,!0);this._updateStyle(o,c),this._updateStyleComponents(o,c),this._updateHandlers(o,c),(r||f||g&&!this._map.isMoving())&&this.redraw()}static reuse(o,c){const r=an.savedMaps.pop();if(!r)return null;const f=r.map,g=f.getContainer();for(c.className=g.className;g.childNodes.length>0;)c.appendChild(g.childNodes[0]);f._container=c;const m=f._resizeObserver;m&&(m.disconnect(),m.observe(c)),r.setProps({...o,styleDiffing:!1}),f.resize();const{initialViewState:v}=o;return v&&(v.bounds?f.fitBounds(v.bounds,{...v.fitBoundsOptions,duration:0}):r._updateViewState(v,!1)),f.isStyleLoaded()?f.fire("load"):f.once("styledata",()=>f.fire("load")),f._update(),r}_initialize(o){const{props:c}=this,{mapStyle:r=hg}=c,f={...c,...c.initialViewState,accessToken:c.mapboxAccessToken||Jy()||null,container:o,style:fg(r)},g=f.initialViewState||f.viewState||f;if(Object.assign(f,{center:[g.longitude||0,g.latitude||0],zoom:g.zoom||0,pitch:g.pitch||0,bearing:g.bearing||0}),c.gl){const T=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=T,c.gl)}const m=new this._MapClass(f);g.padding&&m.setPadding(g.padding),c.cursor&&(m.getCanvas().style.cursor=c.cursor),this._createShadowTransform(m);const v=m._render;m._render=T=>{this._inRender=!0,v.call(m,T),this._inRender=!1};const S=m._renderTaskQueue.run;m._renderTaskQueue.run=T=>{S.call(m._renderTaskQueue,T),this._onBeforeRepaint()},m.on("render",()=>this._onAfterRepaint());const p=m.fire;m.fire=this._fireEvent.bind(this,p),m.on("resize",()=>{this._renderTransform.resize(m.transform.width,m.transform.height)}),m.on("styledata",()=>{this._updateStyleComponents(this.props,{}),rg(m.transform,this._renderTransform)}),m.on("sourcedata",()=>this._updateStyleComponents(this.props,{}));for(const T in gg)m.on(T,this._onPointerEvent);for(const T in zc)m.on(T,this._onCameraEvent);for(const T in mg)m.on(T,this._onEvent);this._map=m}recycle(){const c=this.map.getContainer().querySelector("[mapboxgl-children]");c==null||c.remove(),an.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const o=this._map;!this._inRender&&o.style&&(o._frame&&(o._frame.cancel(),o._frame=null),o._render())}_createShadowTransform(o){const c=Zy(o.transform);o.painter.transform=c,this._renderTransform=c}_updateSize(o){const{viewState:c}=o;if(c){const r=this._map;if(c.width!==r.transform.width||c.height!==r.transform.height)return r.resize(),!0}return!1}_updateViewState(o,c){if(this._internalUpdate)return!1;const r=this._map,f=this._renderTransform,{zoom:g,pitch:m,bearing:v}=f,S=r.isMoving();S&&(f.cameraElevationReference="sea");const p=sg(f,{...cg(r.transform),...o});if(S&&(f.cameraElevationReference="ground"),p&&c){const T=this._deferredEvents;T.move=!0,T.zoom||(T.zoom=g!==f.zoom),T.rotate||(T.rotate=v!==f.bearing),T.pitch||(T.pitch=m!==f.pitch)}return S||sg(r.transform,o),p}_updateSettings(o,c){const r=this._map;let f=!1;for(const g of Vy)if(g in o&&!xe(o[g],c[g])){f=!0;const m=r[`set${g[0].toUpperCase()}${g.slice(1)}`];m==null||m.call(r,o[g])}return f}_updateStyle(o,c){if(o.cursor!==c.cursor&&(this._map.getCanvas().style.cursor=o.cursor||""),o.mapStyle!==c.mapStyle){const{mapStyle:r=hg,styleDiffing:f=!0}=o,g={diff:f};return"localIdeographFontFamily"in o&&(g.localIdeographFontFamily=o.localIdeographFontFamily),this._map.setStyle(fg(r),g),!0}return!1}_updateStyleComponents(o,c){const r=this._map;let f=!1;return r.isStyleLoaded()&&("light"in o&&r.setLight&&!xe(o.light,c.light)&&(f=!0,r.setLight(o.light)),"fog"in o&&r.setFog&&!xe(o.fog,c.fog)&&(f=!0,r.setFog(o.fog)),"terrain"in o&&r.setTerrain&&!xe(o.terrain,c.terrain)&&(!o.terrain||r.getSource(o.terrain.source))&&(f=!0,r.setTerrain(o.terrain))),f}_updateHandlers(o,c){var r,f;const g=this._map;let m=!1;for(const v of Ky){const S=(r=o[v])!==null&&r!==void 0?r:!0,p=(f=c[v])!==null&&f!==void 0?f:!0;xe(S,p)||(m=!0,S?g[v].enable(S):g[v].disable())}return m}_queryRenderedFeatures(o){const c=this._map,r=c.transform,{interactiveLayerIds:f=[]}=this.props;try{return c.transform=this._renderTransform,c.queryRenderedFeatures(o,{layers:f.filter(c.getLayer.bind(c))})}catch{return[]}finally{c.transform=r}}_updateHover(o){var c;const{props:r}=this;if(r.interactiveLayerIds&&(r.onMouseMove||r.onMouseEnter||r.onMouseLeave)){const g=o.type,m=((c=this._hoveredFeatures)===null||c===void 0?void 0:c.length)>0,v=this._queryRenderedFeatures(o.point),S=v.length>0;!S&&m&&(o.type="mouseleave",this._onPointerEvent(o)),this._hoveredFeatures=v,S&&!m&&(o.type="mouseenter",this._onPointerEvent(o)),o.type=g}else this._hoveredFeatures=null}_fireEvent(o,c,r){const f=this._map,g=f.transform,m=typeof c=="string"?c:c.type;return m==="move"&&this._updateViewState(this.props,!1),m in zc&&(typeof c=="object"&&(c.viewState=cg(g)),this._map.isMoving())?(f.transform=this._renderTransform,o.call(f,c,r),f.transform=g,f):(o.call(f,c,r),f)}_onBeforeRepaint(){const o=this._map;this._internalUpdate=!0;for(const r in this._deferredEvents)this._deferredEvents[r]&&o.fire(r);this._internalUpdate=!1;const c=this._map.transform;o.transform=this._renderTransform,this._onAfterRepaint=()=>{rg(this._renderTransform,c),o.transform=c}}}an.savedMaps=[];function Jy(){let l=null;if(typeof location<"u"){const o=/access_token=([^&\/]*)/.exec(location.search);l=o&&o[1]}try{l=l||dg.MapboxAccessToken}catch{}try{l=l||dg.REACT_APP_MAPBOX_ACCESS_TOKEN}catch{}return l}const Wy=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function Fy(l){if(!l)return null;const o=l.map,c={getMap:()=>o,getCenter:()=>l.transform.center,getZoom:()=>l.transform.zoom,getBearing:()=>l.transform.bearing,getPitch:()=>l.transform.pitch,getPadding:()=>l.transform.padding,getBounds:()=>l.transform.getBounds(),project:r=>{const f=o.transform;o.transform=l.transform;const g=o.project(r);return o.transform=f,g},unproject:r=>{const f=o.transform;o.transform=l.transform;const g=o.unproject(r);return o.transform=f,g},queryTerrainElevation:(r,f)=>{const g=o.transform;o.transform=l.transform;const m=o.queryTerrainElevation(r,f);return o.transform=g,m},queryRenderedFeatures:(r,f)=>{const g=o.transform;o.transform=l.transform;const m=o.queryRenderedFeatures(r,f);return o.transform=g,m}};for(const r of Py(o))!(r in c)&&!Wy.includes(r)&&(c[r]=o[r].bind(o));return c}function Py(l){const o=new Set;let c=l;for(;c;){for(const r of Object.getOwnPropertyNames(c))r[0]!=="_"&&typeof l[r]=="function"&&r!=="fire"&&r!=="setEventedParent"&&o.add(r);c=Object.getPrototypeOf(c)}return Array.from(o)}const Iy=typeof document<"u"?N.useLayoutEffect:N.useEffect,t1=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];function e1(l,o){for(const r of t1)r in o&&(l[r]=o[r]);const{RTLTextPlugin:c="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"}=o;c&&l.getRTLTextPluginStatus&&l.getRTLTextPluginStatus()==="unavailable"&&l.setRTLTextPlugin(c,r=>{r&&console.error(r)},!1)}const nn=N.createContext(null);function a1(l,o,c){const r=N.useContext(Yy),[f,g]=N.useState(null),m=N.useRef(),{current:v}=N.useRef({mapLib:null,map:null});N.useEffect(()=>{const T=l.mapLib;let D=!0,H;return Promise.resolve(T||c).then(L=>{if(!D)return;if(!L)throw new Error("Invalid mapLib");const Z="Map"in L?L:L.default;if(!Z.Map)throw new Error("Invalid mapLib");if(e1(Z,l),!Z.supported||Z.supported(l))l.reuseMaps&&(H=an.reuse(l,m.current)),H||(H=new an(Z.Map,l,m.current)),v.map=Fy(H),v.mapLib=Z,g(H),r==null||r.onMapMount(v.map,l.id);else throw new Error("Map is not supported by this browser")}).catch(L=>{const{onError:Z}=l;Z?Z({type:"error",target:null,originalEvent:null,error:L}):console.error(L)}),()=>{D=!1,H&&(r==null||r.onMapUnmount(l.id),l.reuseMaps?H.recycle():H.destroy())}},[]),Iy(()=>{f&&f.setProps(l)}),N.useImperativeHandle(o,()=>v.map,[f]);const S=N.useMemo(()=>({position:"relative",width:"100%",height:"100%",...l.style}),[l.style]),p={height:"100%"};return N.createElement("div",{id:l.id,ref:m,style:S},f&&N.createElement(nn.Provider,{value:v},N.createElement("div",{"mapboxgl-children":"",style:p},l.children)))}var a0=jg();const l1=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function ol(l,o){if(!l||!o)return;const c=l.style;for(const r in o){const f=o[r];Number.isFinite(f)&&!l1.test(r)?c[r]=`${f}px`:c[r]=f}}function n1(l,o){const{map:c,mapLib:r}=N.useContext(nn),f=N.useRef({props:l});f.current.props=l;const g=N.useMemo(()=>{let P=!1;N.Children.forEach(l.children,lt=>{lt&&(P=!0)});const et={...l,element:P?document.createElement("div"):null},it=new r.Marker(et);return it.setLngLat([l.longitude,l.latitude]),it.getElement().addEventListener("click",lt=>{var J,V;(V=(J=f.current.props).onClick)===null||V===void 0||V.call(J,{type:"click",target:it,originalEvent:lt})}),it.on("dragstart",lt=>{var J,V;const X=lt;X.lngLat=g.getLngLat(),(V=(J=f.current.props).onDragStart)===null||V===void 0||V.call(J,X)}),it.on("drag",lt=>{var J,V;const X=lt;X.lngLat=g.getLngLat(),(V=(J=f.current.props).onDrag)===null||V===void 0||V.call(J,X)}),it.on("dragend",lt=>{var J,V;const X=lt;X.lngLat=g.getLngLat(),(V=(J=f.current.props).onDragEnd)===null||V===void 0||V.call(J,X)}),it},[]);N.useEffect(()=>(g.addTo(c.getMap()),()=>{g.remove()}),[]);const{longitude:m,latitude:v,offset:S,style:p,draggable:T=!1,popup:D=null,rotation:H=0,rotationAlignment:L="auto",pitchAlignment:Z="auto"}=l;return N.useEffect(()=>{ol(g.getElement(),p)},[p]),N.useImperativeHandle(o,()=>g,[]),(g.getLngLat().lng!==m||g.getLngLat().lat!==v)&&g.setLngLat([m,v]),S&&!Xy(g.getOffset(),S)&&g.setOffset(S),g.isDraggable()!==T&&g.setDraggable(T),g.getRotation()!==H&&g.setRotation(H),g.getRotationAlignment()!==L&&g.setRotationAlignment(L),g.getPitchAlignment()!==Z&&g.setPitchAlignment(Z),g.getPopup()!==D&&g.setPopup(D),a0.createPortal(l.children,g.getElement())}N.memo(N.forwardRef(n1));function pg(l){return new Set(l?l.trim().split(/\s+/):[])}function i1(l,o){const{map:c,mapLib:r}=N.useContext(nn),f=N.useMemo(()=>document.createElement("div"),[]),g=N.useRef({props:l});g.current.props=l;const m=N.useMemo(()=>{const v={...l},S=new r.Popup(v);return S.setLngLat([l.longitude,l.latitude]),S.once("open",p=>{var T,D;(D=(T=g.current.props).onOpen)===null||D===void 0||D.call(T,p)}),S},[]);if(N.useEffect(()=>{const v=S=>{var p,T;(T=(p=g.current.props).onClose)===null||T===void 0||T.call(p,S)};return m.on("close",v),m.setDOMContent(f).addTo(c.getMap()),()=>{m.off("close",v),m.isOpen()&&m.remove()}},[]),N.useEffect(()=>{ol(m.getElement(),l.style)},[l.style]),N.useImperativeHandle(o,()=>m,[]),m.isOpen()&&((m.getLngLat().lng!==l.longitude||m.getLngLat().lat!==l.latitude)&&m.setLngLat([l.longitude,l.latitude]),l.offset&&!xe(m.options.offset,l.offset)&&m.setOffset(l.offset),(m.options.anchor!==l.anchor||m.options.maxWidth!==l.maxWidth)&&(m.options.anchor=l.anchor,m.setMaxWidth(l.maxWidth)),m.options.className!==l.className)){const v=pg(m.options.className),S=pg(l.className);for(const p of v)S.has(p)||m.removeClassName(p);for(const p of S)v.has(p)||m.addClassName(p);m.options.className=l.className}return a0.createPortal(l.children,f)}const u1=N.memo(N.forwardRef(i1));function bi(l,o,c,r){const f=N.useContext(nn),g=N.useMemo(()=>l(f),[]);return N.useEffect(()=>{const m=o,v=null,S=typeof o=="function"?o:null,{map:p}=f;return p.hasControl(g)||(p.addControl(g,m==null?void 0:m.position),v&&v(f)),()=>{S&&S(f),p.hasControl(g)&&p.removeControl(g)}},[]),g}function o1(l){const o=bi(({mapLib:c})=>new c.AttributionControl(l),{position:l.position});return N.useEffect(()=>{ol(o._container,l.style)},[l.style]),null}N.memo(o1);function r1(l){const o=bi(({mapLib:c})=>new c.FullscreenControl({container:l.containerId&&document.getElementById(l.containerId)}),{position:l.position});return N.useEffect(()=>{ol(o._controlContainer,l.style)},[l.style]),null}N.memo(r1);function c1(l,o){const c=N.useRef({props:l}),r=bi(({mapLib:f})=>{const g=new f.GeolocateControl(l),m=g._setupUI;return g._setupUI=v=>{g._container.hasChildNodes()||m(v)},g.on("geolocate",v=>{var S,p;(p=(S=c.current.props).onGeolocate)===null||p===void 0||p.call(S,v)}),g.on("error",v=>{var S,p;(p=(S=c.current.props).onError)===null||p===void 0||p.call(S,v)}),g.on("outofmaxbounds",v=>{var S,p;(p=(S=c.current.props).onOutOfMaxBounds)===null||p===void 0||p.call(S,v)}),g.on("trackuserlocationstart",v=>{var S,p;(p=(S=c.current.props).onTrackUserLocationStart)===null||p===void 0||p.call(S,v)}),g.on("trackuserlocationend",v=>{var S,p;(p=(S=c.current.props).onTrackUserLocationEnd)===null||p===void 0||p.call(S,v)}),g},{position:l.position});return c.current.props=l,N.useImperativeHandle(o,()=>r,[]),N.useEffect(()=>{ol(r._container,l.style)},[l.style]),null}N.memo(N.forwardRef(c1));function s1(l){const o=bi(({mapLib:c})=>new c.NavigationControl(l),{position:l.position});return N.useEffect(()=>{ol(o._container,l.style)},[l.style]),null}N.memo(s1);function f1(l){const o=bi(({mapLib:g})=>new g.ScaleControl(l),{position:l.position}),c=N.useRef(l),r=c.current;c.current=l;const{style:f}=l;return l.maxWidth!==void 0&&l.maxWidth!==r.maxWidth&&(o.options.maxWidth=l.maxWidth),l.unit!==void 0&&l.unit!==r.unit&&o.setUnit(l.unit),N.useEffect(()=>{ol(o._container,f)},[f]),null}N.memo(f1);function Ku(l,o){if(!l)throw new Error(o)}function d1(l,o,c,r){if(Ku(c.id===r.id,"layer id changed"),Ku(c.type===r.type,"layer type changed"),c.type==="custom"||r.type==="custom")return;const{layout:f={},paint:g={},filter:m,minzoom:v,maxzoom:S,beforeId:p}=c;if(p!==r.beforeId&&l.moveLayer(o,p),f!==r.layout){const T=r.layout||{};for(const D in f)xe(f[D],T[D])||l.setLayoutProperty(o,D,f[D]);for(const D in T)f.hasOwnProperty(D)||l.setLayoutProperty(o,D,void 0)}if(g!==r.paint){const T=r.paint||{};for(const D in g)xe(g[D],T[D])||l.setPaintProperty(o,D,g[D]);for(const D in T)g.hasOwnProperty(D)||l.setPaintProperty(o,D,void 0)}xe(m,r.filter)||l.setFilter(o,m),(v!==r.minzoom||S!==r.maxzoom)&&l.setLayerZoomRange(o,v,S)}function h1(l,o,c){if(l.style&&l.style._loaded&&(!("source"in c)||l.getSource(c.source))){const r={...c,id:o};delete r.beforeId,l.addLayer(r,c.beforeId)}}let g1=0;function m1(l){const o=N.useContext(nn).map.getMap(),c=N.useRef(l),[,r]=N.useState(0),f=N.useMemo(()=>l.id||`jsx-layer-${g1++}`,[]);if(N.useEffect(()=>{if(o){const m=()=>r(v=>v+1);return o.on("styledata",m),m(),()=>{o.off("styledata",m),o.style&&o.style._loaded&&o.getLayer(f)&&o.removeLayer(f)}}},[o]),o&&o.style&&o.getLayer(f))try{d1(o,f,l,c.current)}catch(m){console.warn(m)}else h1(o,f,l);return c.current=l,null}let p1=0;function y1(l,o,c){if(l.style&&l.style._loaded){const r={...c};return delete r.id,delete r.children,l.addSource(o,r),l.getSource(o)}return null}function b1(l,o,c){Ku(o.id===c.id,"source id changed"),Ku(o.type===c.type,"source type changed");let r="",f=0;for(const m in o)m!=="children"&&m!=="id"&&!xe(c[m],o[m])&&(r=m,f++);if(!f)return;const g=o.type;if(g==="geojson")l.setData(o.data);else if(g==="image")l.updateImage({url:o.url,coordinates:o.coordinates});else if("setCoordinates"in l&&f===1&&r==="coordinates")l.setCoordinates(o.coordinates);else if("setUrl"in l)switch(r){case"url":l.setUrl(o.url);break;case"tiles":l.setTiles(o.tiles);break}else console.warn(`Unable to update <Source> prop: ${r}`)}function v1(l){const o=N.useContext(nn).map.getMap(),c=N.useRef(l),[,r]=N.useState(0),f=N.useMemo(()=>l.id||`jsx-source-${p1++}`,[]);N.useEffect(()=>{if(o){const m=()=>setTimeout(()=>r(v=>v+1),0);return o.on("styledata",m),m(),()=>{var v;if(o.off("styledata",m),o.style&&o.style._loaded&&o.getSource(f)){const S=(v=o.getStyle())===null||v===void 0?void 0:v.layers;if(S)for(const p of S)p.source===f&&o.removeLayer(p.id);o.removeSource(f)}}}},[o]);let g=o&&o.style&&o.getSource(f);return g?b1(g,l,c.current):g=y1(o,f,l),c.current=l,g&&N.Children.map(l.children,m=>m&&N.cloneElement(m,{source:f}))||null}const x1=Gy(()=>import("./mapbox-gl-8TUiXUXh.js").then(l=>l.m),[]),S1=N.forwardRef(function(o,c){return a1(o,c,x1)}),E1=u1,ca=m1,Nu=v1;async function T1(){try{const l=`/gsl-dust-tool/assets/points_with_tracts.csv?v=${Date.now()}`;console.log(`Loading centroid locations from: ${l}`);const o=await fetch(l,{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"}});if(!o.ok)throw new Error(`Failed to fetch centroid locations: ${o.status} ${o.statusText}`);const c=await o.text();console.log("First few lines of loaded data:",c.split(`
`).slice(0,5).join(`
`));const r=c.split(`
`),f=[];for(let m=1;m<r.length;m++){if(!r[m].trim())continue;const v=r[m].split(",").map(p=>p.replace(/"/g,"")),S=M1(v[3].trim());f.push({centroid_name:v[0],lon:parseFloat(v[1]),lat:parseFloat(v[2]),geoid:S})}const g=f.find(m=>m.centroid_name==="centroid_503");return g&&console.log("Centroid 503 data:",g),f}catch(l){return console.error("Error loading centroid locations with tract data:",l),[]}}async function _1(l){try{const o=`/gsl-dust-tool/src/assets/gsl_${l.toFixed(1)}_mASL_centroid_results.csv`;console.log(`Attempting to load PM10 data from: ${o}`);const c=await fetch(o);if(!c.ok)throw new Error(`Failed to fetch PM10 data: ${c.status} ${c.statusText}`);const r=await c.text();if(!r||r.trim().length===0)return console.error(`Empty or invalid PM10 data file for lake level ${l}`),[];const f=r.split(`
`);if(f.length<=1)return console.error(`PM10 data file for lake level ${l} has insufficient data`),[];const g=f[0].split(",").map(v=>v.replace(/"/g,"")),m=[];for(let v=1;v<f.length;v++){if(!f[v].trim())continue;const S=f[v].split(",").map(T=>T.replace(/"/g,"")),p={timestamp:S[0]};for(let T=1;T<g.length;T++)p[g[T]]=parseFloat(S[T]);m.push(p)}return console.log(`Successfully loaded ${m.length} PM10 data points for lake level ${l}`),m}catch(o){return console.error(`Error loading PM10 data for lake level ${l}:`,o),[]}}function z1(l){const[o,c]=N.useState([]),[r,f]=N.useState([]),[g,m]=N.useState(!0),[v,S]=N.useState(null),[p,T]=N.useState(0);return N.useEffect(()=>{let D=!0;const H=2;async function L(){m(!0),S(null);try{const Z=await T1();if(!D)return;if(Z.length===0)throw new Error("Failed to load centroid locations");c(Z);const P=await _1(l);if(!D)return;if(P.length===0)throw new Error(`No PM10 data available for lake level ${l}`);f(P),m(!1),T(0)}catch(Z){if(!D)return;const P=Z instanceof Error?Z.message:"Failed to load PM10 data";console.error(P),p<H?(console.log(`Retrying PM10 data load (attempt ${p+1}/${H})`),T(et=>et+1),setTimeout(()=>{D&&L()},1e3)):(S(P),m(!1))}}return L(),()=>{D=!1}},[l,p]),{centroidLocations:o,pm10Data:r,loading:g,error:v}}function Lc(l){return l*3.28084}const re=[1275,1276,1277,1278,1279,1280,1281,1282];function Ju(l){return l<5?"#7cbf6f":l<10?"#e8db5b":l<15?"#e8a64d":l<20?"#d46457":"#a63c3c"}function M1(l){return l?l.replace(/\D/g,"").slice(-11):""}const w1=R.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${({theme:l})=>l.colors.snowbirdWhite};
  margin-top: 60px;
`;R.div`
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
`;R.div`
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
`;R.div`
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
`;R.div`
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
`;R.div`
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
`;R.div`
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
`;R.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({theme:l})=>l.spacing.xxs};
  font-weight: ${({theme:l})=>l.typography.weights.regular};
  font-size: 11px;
  letter-spacing: 0.5px;
`;R.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: ${({theme:l})=>l.spacing.xs};
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  border: 1px solid rgba(117, 29, 12, 0.3);
`;const A1=R.div`
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
`;R.div`
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
`;R.div`
  font-size: 11px;
  color: ${({theme:l})=>l.colors.olympicParkObsidian};
  font-weight: ${({theme:l})=>l.typography.weights.medium};
  margin: 2px 0;
`;R.div`
  font-size: 14px;
  color: ${({theme:l})=>l.colors.moabMahogany};
  font-weight: ${({theme:l})=>l.typography.weights.semiBold};
  margin-top: 4px;
  padding: 4px 8px;
  background: white;
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;R.div`
  position: absolute;
  width: 12px;
  height: 100%;
  margin-left: ${({theme:l})=>l.spacing.xxs};
`;R.div`
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
`;R.span`
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
`;R.select`
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
`;R.button`
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
`;const j1=R.div`
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
`,Mc=R.div`
  height: 6px;
  width: 100%;
  background-color: ${({backgroundColor:l})=>l};
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  margin-top: ${({theme:l})=>l.spacing.xs};
`,O1=R.div`
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
`;R.div`
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
`;R.div`
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
`;R.div`
  position: absolute;
  width: 16px;
  height: 100%;
  margin-left: ${({theme:l})=>l.spacing.xxs};
`;R.div`
  position: absolute;
  bottom: ${l=>l.$left};
  transform: translateY(50%);
  width: ${l=>l.$isSelected?"16px":"6px"};
  height: ${l=>l.$isSelected?"4px":"1px"};
  background-color: ${l=>l.$isSelected?"#D2B48C":l.theme.colors.moabMahogany}; // Mahogany for other ticks
  box-shadow: ${l=>l.$isSelected?"0 0 10px 3px rgba(210,180,140,0.45)":"none"};
  border-radius: 2px;
  left: 0;
`;R.span`
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
`;R.div`
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
`;const R1="",D1={styleUrl:"mapbox://styles/pkulandh/cm9iyi6qq00jo01rce7xjcfay"},$1=l=>l<=.3?"#feb24c":l<=.6?"#fc4e2a":l<=.94?"#bd0026":"#800026",C1=R.div`
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
`,N1=R.hr`
  width: 100%;
  border: none;
  height: 2px;
  background-color: ${({theme:l})=>l.colors.moabMahogany};
  margin: 8px 0;
`,yg=R.button`
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
`,bg=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4px 0;
  width: 100%;
  padding: 0 10px;
`,U1=R.div`
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
`,H1=R.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`,L1=R.div`
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
`,vg=R.span`
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
`,B1=R.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 80px);
  padding: 0px 0;
`;function q1({selectedLakeLevel:l,handleElevationChange:o,showBathymetry:c}){const r=re[0],f=re[re.length-1],[g,m]=N.useState(0),v=N.useRef(null);N.useEffect(()=>{const T=re.findIndex(D=>Math.abs(D-l)<.1);T!==-1&&m(T)},[l]),N.useEffect(()=>{if(v.current){const T=v.current.offsetHeight;document.documentElement.style.setProperty("--lake-level-height",`${T}px`)}},[c]);const S=()=>{if(g<re.length-1){const D={target:{value:re[g+1].toString()}};o(D)}},p=()=>{if(g>0){const D={target:{value:re[g-1].toString()}};o(D)}};return c?h.jsxs(A1,{ref:v,children:[h.jsxs(C1,{children:[h.jsx("h3",{children:"LAKE LEVEL"}),h.jsx("div",{className:"level-display",children:h.jsxs("span",{children:[Lc(l).toFixed(1)," ft"]})})]}),h.jsx(N1,{}),h.jsxs(B1,{children:[h.jsx(bg,{children:h.jsx(yg,{onClick:S,disabled:g>=re.length-1,title:"Increase lake level",children:"+"})}),h.jsxs(U1,{$value:l,$min:r,$max:f,children:[h.jsx("input",{type:"range",min:r,max:f,step:(f-r)/(re.length-1),value:l,onChange:o,className:"vertical-slider",style:{zIndex:5}}),h.jsx(H1,{children:re.map(T=>{let H=(T-r)/(f-r)*100;T===r&&(H=0),T===f&&(H=100);const L=Math.abs(T-l)<.1;return h.jsxs(L1,{$bottom:`${H}%`,$isSelected:L,children:[h.jsxs(vg,{$isSelected:L,$side:"left",children:[T.toFixed(1)," mASL"]}),h.jsxs(vg,{$isSelected:L,$side:"right",children:[Lc(T).toFixed(1)," ft"]})]},T)})})]}),h.jsx(bg,{children:h.jsx(yg,{onClick:p,disabled:g<=0,title:"Decrease lake level",children:"-"})})]})]}):null}const k1=R.div`
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
`,G1=R.div`
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
`,oi=R.div`
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
`,Y1=R.div`
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
`,xg=R.div`
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
`,sa=R.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-weight: ${({theme:l})=>l.typography.weights.regular};
  font-size: 11px;
  letter-spacing: 0.5px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,fa=R.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: ${({theme:l})=>l.spacing.sm};
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  border: 1px solid rgba(117, 29, 12, 0.3);
`;function X1({layers:l,toggleLayer:o}){return h.jsxs(k1,{children:[h.jsx("h2",{children:"MAP CONTROLS"}),h.jsxs(G1,{children:[h.jsx("h3",{children:"DATA LAYERS"}),h.jsxs(oi,{children:[h.jsx("input",{type:"checkbox",checked:l.satellite,onChange:()=>o("satellite"),id:"satellite-layer"}),h.jsx("label",{htmlFor:"satellite-layer",children:"Satellite Imagery"})]}),h.jsxs(oi,{children:[h.jsx("input",{type:"checkbox",checked:l.bathymetry,onChange:()=>o("bathymetry"),id:"bathymetry-layer"}),h.jsx("label",{htmlFor:"bathymetry-layer",children:"Lake Bathymetry"})]}),h.jsxs(oi,{children:[h.jsx("input",{type:"checkbox",checked:l.censusTracts,onChange:()=>o("censusTracts"),id:"census-tracts-layer"}),h.jsx("label",{htmlFor:"census-tracts-layer",children:"Census Tracts"})]}),h.jsxs(oi,{children:[h.jsx("input",{type:"checkbox",checked:l.pm10Data,onChange:()=>o("pm10Data"),id:"pm10-layer"}),h.jsx("label",{htmlFor:"pm10-layer",children:"PM10 Concentrations"})]}),h.jsxs(oi,{children:[h.jsx("input",{type:"checkbox",checked:l.erodibility,onChange:()=>o("erodibility"),id:"erodibility-layer"}),h.jsx("label",{htmlFor:"erodibility-layer",children:"Soil Erodibility"})]})]}),h.jsxs(Y1,{style:{marginTop:"4px",paddingTop:"4px"},children:[(l.pm10Data||l.censusTracts)&&h.jsxs(xg,{children:[h.jsx("h4",{children:"PM10 SCALE"}),h.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#7cbf6f"}}),h.jsx("span",{children:"< 5 µg/m³"})]}),h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#e8db5b"}}),h.jsx("span",{children:"5-10 µg/m³"})]}),h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#e8a64d"}}),h.jsx("span",{children:"10-15 µg/m³"})]}),h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#d46457"}}),h.jsx("span",{children:"15-20 µg/m³"})]}),h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#a63c3c"}}),h.jsx("span",{children:"> 20 µg/m³"})]})]})]}),l.erodibility&&h.jsxs(xg,{children:[h.jsx("h4",{children:"SOIL ERODIBILITY"}),h.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#feb24c"}}),h.jsx("span",{children:"0.2 - 0.3"})]}),h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#fc4e2a"}}),h.jsx("span",{children:"0.3 - 0.6"})]}),h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#bd0026"}}),h.jsx("span",{children:"0.6 - 0.94"})]}),h.jsxs(sa,{children:[h.jsx(fa,{style:{backgroundColor:"#800026"}}),h.jsx("span",{children:"≥ 0.94"})]})]})]})]})]})}function Z1({layers:l,selectedElevation:o,selectedTimestampIndex:c,pm10Data:r,centroidLocations:f,getPM10Points:g,loading:m}){return h.jsxs(h.Fragment,{children:[l.censusTracts&&h.jsxs(Nu,{id:"census-tracts-source",type:"vector",url:"mapbox://pkulandh.7y35kkod",children:[h.jsx(ca,{id:"census-tracts-all-fill",type:"fill","source-layer":"UT_CensusTracts-cgq3a0",paint:{"fill-color":["match",["get","GEOID20"],...(()=>{const v={};return!m&&r&&r.length>0&&c<r.length&&f.filter(S=>S.geoid).forEach(S=>{if(S.geoid){const T=r[c][S.centroid_name],D=Ju(T);v[S.geoid]=D}}),Object.entries(v).flatMap(([S,p])=>[S,p])})(),"rgba(200,200,200,0.3)"],"fill-opacity":.7}}),h.jsx(ca,{id:"census-tracts-outline",type:"line","source-layer":"UT_CensusTracts-cgq3a0",paint:{"line-color":"#000000","line-width":["case",["boolean",["feature-state","hover"],!1],2,1],"line-opacity":["case",["boolean",["feature-state","hover"],!1],1,.7]}})]}),l.bathymetry&&h.jsxs(Nu,{id:"bathymetry-points-source",type:"vector",url:"mapbox://pkulandh.4mg8eo41",children:[h.jsx(ca,{id:"water-texture-layer",type:"fill",source:"bathymetry-points-source","source-layer":"bathymetry-df7t51",beforeId:"bathymetry-point-layer",paint:{"fill-pattern":"water-noise","fill-opacity":.07}}),h.jsx(ca,{id:"bathymetry-point-layer",type:"circle","source-layer":"bathymetry-df7t51",paint:{"circle-radius":["interpolate",["linear"],["zoom"],6,["case",["==",["get","bathymetry"],o],6,3],12,["case",["==",["get","bathymetry"],o],10,5]],"circle-color":["case",[">",["get","bathymetry"],1282],"transparent",["all",[">=",["get","bathymetry"],o],["<=",["get","bathymetry"],1282]],"#444444",["match",["floor",["get","bathymetry"]],1271,"#051e40",1272,"#072c5e",1273,"#093a7c",1274,"#0b489a",1275,"#0d56b8",1276,"#0f64d6",1277,"#1172f4",1278,"#3286f5",1279,"#539af7",1280,"#74aef8",1281,"#95c2fa",1282,"#b6d6fb","#FF00FF"]],"circle-opacity":["case",["==",["get","bathymetry"],o],1,.8],"circle-stroke-width":["case",["==",["get","bathymetry"],o],2,0],"circle-stroke-color":"#ffffff"}})]}),l.pm10Data&&!m&&h.jsx(Nu,{id:"pm10-data-source",type:"geojson",data:{type:"FeatureCollection",features:g().map(v=>({type:"Feature",properties:{centroid_name:v.centroid_name,pm10:v.pm10,geoid:v.geoid},geometry:{type:"Point",coordinates:[v.longitude,v.latitude]}}))},children:h.jsx(ca,{id:"pm10-point-layer",type:"circle",paint:{"circle-radius":["interpolate",["linear"],["zoom"],6,3,12,6],"circle-color":["match",["get","centroid_name"],...(()=>{const v=g(),S={};return v.forEach(p=>{S[p.centroid_name]=p.color}),Object.entries(S).flatMap(([p,T])=>[p,T])})(),"#aaaaaa"],"circle-opacity":.8,"circle-stroke-width":1,"circle-stroke-color":"#ffffff"}})}),l.erodibility&&h.jsxs(Nu,{id:"erodibility-source",type:"vector",url:"mapbox://pkulandh.ai74bdtb",children:[h.jsx(ca,{id:"erodibility-shadow",type:"fill","source-layer":"GSL_erodibility_fraction-5bzz8s",filter:[">",["get","erodibility"],.2],paint:{"fill-color":"#000000","fill-opacity":.2,"fill-translate":[3,3],"fill-translate-anchor":"viewport"}}),h.jsx(ca,{id:"erodibility-feather",type:"fill","source-layer":"GSL_erodibility_fraction-5bzz8s",filter:[">",["get","erodibility"],.2],paint:{"fill-color":["interpolate",["linear"],["get","erodibility"],0,"#ffffd4",.1,"#ffeda0",.3,"#feb24c",.6,"#fc4e2a",.94,"#bd0026",1,"#800026"],"fill-opacity":.3,"fill-translate":[0,0],"fill-translate-anchor":"viewport"}}),h.jsx(ca,{id:"erodibility-fill",type:"fill","source-layer":"GSL_erodibility_fraction-5bzz8s",filter:[">",["get","erodibility"],.2],paint:{"fill-color":["interpolate",["linear"],["get","erodibility"],0,"#ffffd4",.1,"#ffeda0",.3,"#feb24c",.6,"#fc4e2a",.94,"#bd0026",1,"#800026"],"fill-opacity":.7,"fill-translate":[1,1],"fill-translate-anchor":"viewport","fill-antialias":!0}}),h.jsx(ca,{id:"erodibility-outline",type:"line","source-layer":"GSL_erodibility_fraction-5bzz8s",filter:[">",["get","erodibility"],.2],paint:{"line-color":"#000000","line-width":.5,"line-opacity":.5,"line-blur":.5}})]})]})}function Q1({popupInfo:l,onClose:o,pm10Data:c,selectedTimestampIndex:r,centroidLocations:f}){return l?h.jsx(E1,{longitude:l.longitude,latitude:l.latitude,closeButton:!0,closeOnClick:!1,onClose:o,anchor:"bottom",children:h.jsx(j1,{children:l.type==="bathymetry"?h.jsxs(h.Fragment,{children:[h.jsx("h4",{children:"Bathymetry Data"}),h.jsxs("p",{children:["Elevation: ",h.jsxs("span",{className:"highlight",children:[l.depth.toFixed(2)," meters"]})," above sea level"]})]}):l.type==="censusTract"?h.jsxs(h.Fragment,{children:[h.jsx("h4",{children:"Census Tract Information"}),h.jsxs("p",{children:["Census Tract ID: ",h.jsx("span",{className:"highlight",children:l.GEOID20})]}),h.jsxs("p",{children:["Location: ",h.jsxs("span",{className:"highlight",children:[l.INTPTLAT20,", ",l.INTPTLON20]})]}),l.hasPM10Data?h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["PM10 Monitoring: ",h.jsx("span",{className:"highlight",children:"Active"})]}),c&&c.length>0&&r<c.length&&(()=>{const g=f.find(m=>m.geoid===l.GEOID20);if(g){const v=c[r][g.centroid_name];return h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["Monitoring Point: ",h.jsx("span",{className:"highlight",children:g.centroid_name})]}),h.jsxs("p",{children:["PM10 Concentration: ",h.jsxs("span",{className:"highlight",children:[v.toFixed(1)," µg/m³"]})]}),h.jsxs("p",{children:["Risk Level: ",h.jsx("span",{className:"highlight",children:v<5?"Low":v<10?"Moderate":v<15?"High":v<20?"Very High":"Extreme"})]}),h.jsx(Mc,{backgroundColor:Ju(v)})]})}return null})()]}):h.jsxs("p",{children:["PM10 Monitoring: ",h.jsx("span",{className:"highlight",children:"Not available for this tract"})]})]}):l.type==="pm10"?h.jsxs(h.Fragment,{children:[h.jsx("h4",{children:"PM10 Concentration Data"}),h.jsxs("p",{children:["Monitoring Point: ",h.jsx("span",{className:"highlight",children:l.centroidName})]}),h.jsxs("p",{children:["PM10 Concentration: ",h.jsxs("span",{className:"highlight",children:[l.pm10Value.toFixed(1)," µg/m³"]})]}),h.jsxs("p",{children:["Risk Level: ",h.jsx("span",{className:"highlight",children:l.pm10Value<5?"Low":l.pm10Value<10?"Moderate":l.pm10Value<15?"High":l.pm10Value<20?"Very High":"Extreme"})]}),l.geoid&&h.jsxs("p",{children:["Census Tract: ",h.jsx("span",{className:"highlight",children:l.geoid})]}),h.jsx(Mc,{backgroundColor:Ju(l.pm10Value)})]}):l.type==="erodibility"&&h.jsxs(h.Fragment,{children:[h.jsx("h4",{children:"Soil Erodibility Data"}),h.jsxs("p",{children:["Erodibility Index: ",h.jsx("span",{className:"highlight",children:l.erodibilityValue.toFixed(2)})]}),h.jsxs("p",{children:["Erodibility Class: ",h.jsx("span",{className:"highlight",children:l.erodibilityValue<=.3?"Moderate":l.erodibilityValue<=.6?"High":l.erodibilityValue<=.94?"Very High":"Extreme"})]}),h.jsx(Mc,{backgroundColor:$1(l.erodibilityValue)})]})})}):null}function V1(l){const o=parseInt(l.substring(0,4)),c=parseInt(l.substring(4,6))-1,r=parseInt(l.substring(6,8)),f=parseInt(l.substring(8,10)),g=parseInt(l.substring(10,12)),m=new Date(Date.UTC(o,c,r,f,g)),v=new Date(m.toLocaleString("en-US",{timeZone:"America/Denver"})),S=v.getFullYear(),p=String(v.getMonth()+1).padStart(2,"0"),T=String(v.getDate()).padStart(2,"0"),D=String(v.getHours()).padStart(2,"0"),H=String(v.getMinutes()).padStart(2,"0");return`${S}${p}${T}${D}${H}`}function K1(l){const c={timeZone:"America/Denver",timeZoneName:"short"};return new Intl.DateTimeFormat("en-US",c).format(l).split(" ").pop()||""}function l0(l){const o=V1(l);if(o.length!==12)return o;const c=o.substring(0,4),r=o.substring(4,6),f=o.substring(6,8),g=o.substring(8,10),m=o.substring(10,12),v=new Date(`${c}-${r}-${f}T${g}:${m}:00`),S=K1(v);return`${c}/${r}/${f} ${g}:${m} ${S}`}function J1(l){return`${Lc(l).toFixed(0)} ft`}const W1=R.div`
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
`,F1=R.h3`
  font-family: ${({theme:l})=>l.typography.displayFont};
  font-size: 26px;
  font-weight: ${({theme:l})=>l.typography.weights.semiBold};
  color: ${({theme:l})=>l.colors.moabMahogany};
  margin: 0;
  margin-bottom: ${({theme:l})=>l.spacing.xs};
  letter-spacing: 1.2px;
  text-align: center;
  width: 100%;
`,P1=R.div`
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
`,I1=R.div`
  margin-top: ${({theme:l})=>l.spacing.xxs};
  width: 100%;
  background: rgba(249, 246, 239, 0.6);
  border-radius: ${({theme:l})=>l.borderRadius.sm};
  padding: ${({theme:l})=>l.spacing.sm};
  padding-right: ${({theme:l})=>l.spacing.xs};
  padding-left: ${({theme:l})=>l.spacing.xs};
  box-sizing: border-box;
`,tb=R.div`
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
`,eb=R.button`
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
`,ab=R.div`
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
`,lb=R.button`
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
`,nb=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({theme:l})=>l.spacing.xxs};
  margin-bottom: ${({theme:l})=>l.spacing.sm};
  gap: ${({theme:l})=>l.spacing.xxs};
  width: 100%;
  padding: 0 ${({theme:l})=>l.spacing.xxs};
`,n0=R.button`
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
`,Sg=R(n0)`
  min-width: 60px;
`,ib=R(n0)`
  background: ${l=>l.$isPlaying?"rgba(117, 29, 12, 0.1)":"white"};
  min-width: 80px;
  margin: 0 ${({theme:l})=>l.spacing.xxs};
  
  &:hover:not(:disabled) {
    background: ${l=>l.$isPlaying?"rgba(117, 29, 12, 0.15)":"rgba(117, 29, 12, 0.05)"};
  }
`;function ub({timestamps:l,selectedIndex:o,onChange:c}){var X;const[r,f]=N.useState(!1),[g]=N.useState(1e3),m=N.useRef(null),v=N.useRef(null);if(!l||l.length===0)return null;const S=l0(l[o]),p=new Map;l.forEach(q=>{var ht;const Y=q.substring(0,8);p.has(Y)||p.set(Y,[]),(ht=p.get(Y))==null||ht.push(q)});const T=Array.from(p.keys()),D=l[o],H=D.substring(0,8),L=T.indexOf(H),Z=q=>{const Y=q.substring(4,6),ht=q.substring(6,8);return`${Y}/${ht}`},P=q=>{const Y=q.substring(8,10),ht=q.substring(10,12);return`${Y}:${ht}`},et=q=>{const Y=l.findIndex(ht=>ht.startsWith(q));Y!==-1&&c(Y)},it=q=>{const Y=l.indexOf(q);Y!==-1&&c(Y)},lt=()=>{if(r){f(!1),m.current!==null&&(clearInterval(m.current),m.current=null);return}f(!0);const q=setInterval(()=>{c(Y=>{const ht=Y+1;return ht>=l.length?(f(!1),clearInterval(q),m.current=null,Y):ht})},g);m.current=q},J=()=>{if(L>0){const q=T[L-1];et(q)}},V=()=>{if(L<T.length-1){const q=T[L+1];et(q)}};return N.useEffect(()=>()=>{m.current!==null&&(clearInterval(m.current),m.current=null)},[]),h.jsxs(O1,{children:[h.jsxs(W1,{children:[h.jsx(F1,{children:"TIME PERIOD"}),h.jsx(P1,{children:S})]}),h.jsxs(nb,{children:[h.jsxs(Sg,{onClick:J,disabled:L===0,children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:h.jsx("path",{d:"M15 18l-6-6 6-6"})}),"Prev"]}),h.jsxs(ib,{onClick:lt,$isPlaying:r,children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r?h.jsx("path",{d:"M6 4h4v16H6V4zm8 0h4v16h-4V4z"}):h.jsx("path",{d:"M8 5v14l11-7z"})}),r?"Pause":"Play"]}),h.jsxs(Sg,{onClick:V,disabled:L===T.length-1,children:["Next",h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:h.jsx("path",{d:"M9 18l6-6-6-6"})})]})]}),h.jsxs(I1,{children:[h.jsx(tb,{ref:v,children:T.map(q=>h.jsx(eb,{$isActive:q===H,onClick:()=>et(q),children:Z(q)},q))}),h.jsx(ab,{children:(X=p.get(H))==null?void 0:X.map(q=>{const Y=q===D;return h.jsx(lb,{$isSelected:Y,onClick:()=>it(q),children:P(q)},q)})})]})]})}function ob({onElevationChange:l,onTimestampChange:o}){const c=N.useRef(null),[r,f]=N.useState({longitude:-112.3297,latitude:40.9121,zoom:8}),[g,m]=N.useState(!1),[v,S]=N.useState({satellite:!1,bathymetry:!0,censusTracts:!0,pm10Data:!1,erodibility:!0}),[p,T]=N.useState(re[0]),[D,H]=N.useState(re[0]),[L,Z]=N.useState(0),{centroidLocations:P,pm10Data:et,loading:it}=z1(p),[lt,J]=N.useState([]);N.useEffect(()=>{et&&et.length>0&&!it&&(J(et),L>=et.length&&Z(0))},[et,it]);const V=lt.length>0?lt.map(M=>M.timestamp):[];N.useEffect(()=>{V.length>0&&o&&o(V[L])},[L,V,o]);const[X,q]=N.useState(null),Y=N.useCallback(()=>{const M=document.createElement("canvas"),U=M.getContext("2d"),G=128;if(M.width=G,M.height=G,U){U.fillStyle="rgba(255, 255, 255, 0)",U.fillRect(0,0,G,G);for(let nt=0;nt<G;nt++)for(let b=0;b<G;b++)if(Math.random()>.995){const B=Math.random()*.04;U.fillStyle=`rgba(255, 255, 255, ${B})`,U.fillRect(nt,b,1,1)}return U.getImageData(0,0,G,G)}return null},[]),ht=N.useCallback(()=>{if(c.current){const M=c.current.getMap(),U=Y();U&&M.addImage("water-noise",U,{sdf:!0}),m(!0)}},[Y]),Kt=N.useCallback(M=>{const U=!v[M];S({...v,[M]:U})},[v]),qe=N.useCallback(()=>{if(!et||et.length===0||!P||L>=et.length)return[];const M=et[L];return P.map(U=>{const G=M[U.centroid_name];return{centroid_name:U.centroid_name,longitude:U.lon,latitude:U.lat,geoid:U.geoid,pm10:G,color:Ju(G)}})},[et,P,L]),ce=N.useCallback(M=>{var nt,b,$,B,k,K,ot,F,Dt,mt;const U=[v.censusTracts?"census-tracts-all-fill":null,v.bathymetry?"bathymetry-point-layer":null,v.pm10Data?"pm10-point-layer":null,v.erodibility?"erodibility-fill":null].filter(Boolean),G=(nt=c.current)==null?void 0:nt.queryRenderedFeatures(M.point,{layers:U});if(G&&G.length>0){const zt=G[0],Se=((b=zt.layer)==null?void 0:b.id)??"";if(Se==="bathymetry-point-layer")q({longitude:M.lngLat.lng,latitude:M.lngLat.lat,type:"bathymetry",depth:(($=zt.properties)==null?void 0:$.bathymetry)||0});else if(Se==="census-tracts-all-fill"){const Ee=(B=zt.properties)==null?void 0:B.GEOID20,ae=P.find(on=>on.geoid===Ee);q({longitude:M.lngLat.lng,latitude:M.lngLat.lat,type:"censusTract",INTPTLAT20:(k=zt.properties)==null?void 0:k.INTPTLAT20,INTPTLON20:(K=zt.properties)==null?void 0:K.INTPTLON20,GEOID20:Ee,hasPM10Data:!!ae})}else Se==="pm10-point-layer"?q({longitude:M.lngLat.lng,latitude:M.lngLat.lat,type:"pm10",centroidName:(ot=zt.properties)==null?void 0:ot.centroid_name,pm10Value:((F=zt.properties)==null?void 0:F.pm10)||0,geoid:(Dt=zt.properties)==null?void 0:Dt.geoid}):Se==="erodibility-fill"&&q({longitude:M.lngLat.lng,latitude:M.lngLat.lat,type:"erodibility",erodibilityValue:((mt=zt.properties)==null?void 0:mt.erodibility)||0})}else q(null)},[v,P]),Nt=M=>re.reduce((U,G)=>Math.abs(G-M)<Math.abs(U-M)?G:U),$e=M=>{const U=parseFloat(M.target.value),G=Nt(U);H(G),T(G),l&&l(G)},Ce=N.useCallback(M=>{const U={...M.viewState,zoom:Math.max(8,M.viewState.zoom)};f(U)},[]),[Ut]=N.useState({longitude:-112.3297,latitude:40.9121,zoom:8});return h.jsxs(w1,{children:[h.jsx(q1,{selectedLakeLevel:p,handleElevationChange:$e,showBathymetry:v.bathymetry}),h.jsx(X1,{layers:v,toggleLayer:Kt}),v.censusTracts&&V.length>0&&h.jsx(ub,{timestamps:V,selectedIndex:Math.min(L,V.length-1),onChange:Z}),h.jsxs(S1,{...r,ref:c,onMove:Ce,minZoom:8,mapStyle:v.satellite?"mapbox://styles/mapbox/satellite-v9":D1.styleUrl,mapboxAccessToken:R1,onLoad:ht,onClick:ce,interactiveLayerIds:[v.censusTracts?"census-tracts-all-fill":null,v.bathymetry?"bathymetry-point-layer":null,v.pm10Data?"pm10-point-layer":null,v.erodibility?"erodibility-fill":null].filter(Boolean),children:[h.jsxs("div",{className:"mapboxgl-ctrl-group mapboxgl-ctrl map-controls-container",style:{position:"absolute",bottom:"30px",right:"10px"},children:[h.jsx("button",{className:"zoom-control",onClick:()=>f(M=>({...M,zoom:Math.min(M.zoom+1,22)})),title:"Zoom In",children:h.jsx("span",{className:"mapboxgl-ctrl-icon",children:"+"})}),h.jsx("button",{className:"zoom-control",onClick:()=>f(M=>({...M,zoom:Math.max(M.zoom-1,8)})),title:"Zoom Out",children:h.jsx("span",{className:"mapboxgl-ctrl-icon",children:"−"})}),h.jsx("button",{className:"reset-view-btn",onClick:()=>f(Ut),title:"Reset View",children:h.jsx("span",{className:"mapboxgl-ctrl-icon",children:"⤧"})})]}),g&&h.jsx(Z1,{layers:v,selectedElevation:D,selectedTimestampIndex:L,pm10Data:et,centroidLocations:P,getPM10Points:qe,loading:it}),h.jsx(Q1,{popupInfo:X,onClose:()=>q(null),pm10Data:et,selectedTimestampIndex:L,centroidLocations:P})]})]})}function rb(l){return h.jsx(ob,{...l})}const cb=R.header`
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
`,sb=R.h1`
  font-family: ${({theme:l})=>l.typography.displayFont};
  font-weight: ${({theme:l})=>l.typography.weights.semiBold};
  font-size: 28px;
  margin: 0;
  letter-spacing: 1.5px;
`,fb=R.div`
  display: flex;
  gap: ${({theme:l})=>l.spacing.md};
`,Eg=R.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,Tg=R.span`
  font-size: 14px;
  font-weight: ${({theme:l})=>l.typography.weights.light};
  opacity: 0.8;
`,_g=R.span`
  font-size: 22px;
  font-weight: ${({theme:l})=>l.typography.weights.medium};
`;function db({elevation:l,timestamp:o}){return h.jsxs(cb,{children:[h.jsx(sb,{children:"GREAT SALT LAKE DUST EXPOSURE MODELING TOOL"}),h.jsxs(fb,{children:[h.jsxs(Eg,{children:[h.jsx(Tg,{children:"Lake Level"}),h.jsx(_g,{children:J1(l)})]}),h.jsxs(Eg,{children:[h.jsx(Tg,{children:"Date & Time"}),h.jsx(_g,{children:l0(o)})]})]})]})}const hb=By`
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
`,zg={colors:{olympicParkObsidian:"#1a1a1a",snowbirdWhite:"#f9f6ef",canyonlandsTan:"#cea25d",moabMahogany:"#751d0c",spiralJettySage:"#99aa88",greatSaltLakeGreen:"#2d5954",bonnevilleSaltFlatsBlue:"#789ba8",rockyMountainRust:"#dd3b00",backgroundSecondary:"#f9f6ef",backgroundTertiary:"#f9f6ef",textSecondary:"#4a4a4a",textTertiary:"#767676",borderPrimary:"#751d0c",borderSecondary:"#751d0c",elevationScale:["#0571b0","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],pm10Scale:["#7cbf6f","#e8db5b","#e8a64d","#d46457","#a63c3c"]},typography:{fontFamily:"'Red Hat Display', sans-serif",displayFont:"'Sora', sans-serif",weights:{light:300,regular:400,medium:500,semiBold:600,bold:700},sizes:{h1:"36px",h2:"20px",h3:"15px",body:"14px",small:"12px",button:"15px"},lineHeights:{h1:1.2,h2:1.3,h3:1.4,body:1.5}},spacing:{xxs:"4px",xs:"8px",sm:"12px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},shadows:{sm:"0 1px 2px rgba(0,0,0,0.05)",md:"0 4px 6px rgba(0,0,0,0.1)",lg:"0 10px 15px rgba(0,0,0,0.1)",xl:"0 20px 25px rgba(0,0,0,0.15)"},borderRadius:{sm:"4px",md:"8px",lg:"12px",xl:"16px",round:"50%"},transitions:{fast:"all 0.2s ease",medium:"all 0.3s ease",slow:"all 0.5s ease"},breakpoints:{xs:"320px",sm:"576px",md:"768px",lg:"992px",xl:"1200px"},zIndices:{base:0,mapControls:10,mapOverlays:20,popups:30,modals:40,tooltips:50}};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mb=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,c,r)=>r?r.toUpperCase():c.toLowerCase()),Mg=l=>{const o=mb(l);return o.charAt(0).toUpperCase()+o.slice(1)},i0=(...l)=>l.filter((o,c,r)=>!!o&&o.trim()!==""&&r.indexOf(o)===c).join(" ").trim(),pb=l=>{for(const o in l)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=N.forwardRef(({color:l="currentColor",size:o=24,strokeWidth:c=2,absoluteStrokeWidth:r,className:f="",children:g,iconNode:m,...v},S)=>N.createElement("svg",{ref:S,...yb,width:o,height:o,stroke:l,strokeWidth:r?Number(c)*24/Number(o):c,className:i0("lucide",f),...!g&&!pb(v)&&{"aria-hidden":"true"},...v},[...m.map(([p,T])=>N.createElement(p,T)),...Array.isArray(g)?g:[g]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=(l,o)=>{const c=N.forwardRef(({className:r,...f},g)=>N.createElement(bb,{ref:g,iconNode:o,className:i0(`lucide-${gb(Mg(l))}`,`lucide-${l}`,r),...f}));return c.displayName=Mg(l),c};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],wg=un("circle-help",vb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Sb=un("github",xb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Tb=un("info",Eb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],zb=un("map-pin",_b);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],wb=un("message-square",Mb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],jb=un("play",Ab),Ob=({onComplete:l})=>{const[o,c]=N.useState("about");return h.jsxs(Rb,{children:[h.jsxs(Db,{children:[h.jsx($b,{}),h.jsx(Cb,{})]}),h.jsxs(Nb,{children:[h.jsxs(Ub,{children:[h.jsxs(Hb,{children:[h.jsx(Lb,{children:h.jsx("img",{src:"/gsl-dust-tool/logo192.png",alt:"Great Salt Lake Dust Exposure Modeling Tool Logo",className:"w-full h-full object-contain rounded-md"})}),h.jsxs(Bb,{children:[h.jsx(qb,{children:"Great Salt Lake"})," Dust Exposure Modeling Tool"]})]}),h.jsx(kb,{children:h.jsxs(Gb,{onClick:l,children:[h.jsx(zb,{size:20,className:"mr-2"}),"Enter Map"]})}),h.jsx(Yb,{children:h.jsxs(Xb,{children:[h.jsxs(wc,{active:o==="about",onClick:()=>c("about"),children:[h.jsx(Tb,{size:20,className:"mr-3"}),h.jsx("span",{children:"About"}),o==="about"&&h.jsx(Ac,{})]}),h.jsxs(wc,{active:o==="howto",onClick:()=>c("howto"),children:[h.jsx(wg,{size:20,className:"mr-3"}),h.jsx("span",{children:"How to Use"}),o==="howto"&&h.jsx(Ac,{})]}),h.jsxs(wc,{active:o==="feedback",onClick:()=>c("feedback"),children:[h.jsx(wb,{size:20,className:"mr-3"}),h.jsx("span",{children:"Feedback"}),o==="feedback"&&h.jsx(Ac,{})]})]})})]}),h.jsxs(Zb,{children:[o==="about"&&h.jsxs(Qb,{children:[h.jsxs(Yu,{children:[h.jsx(Uu,{children:"About This Tool"}),h.jsx(Hu,{})]}),h.jsxs(Yu,{children:[h.jsx(Uu,{children:"Understanding PM10"}),h.jsx(Hu,{}),h.jsx(Ag,{children:"PM10 refers to coarse particulate matter with a diameter of 10 micrometers or smaller. These particles can settle in the bronchi and lungs, potentially causing health problems particularly for people with respiratory conditions."}),h.jsxs("div",{children:[h.jsx(Jb,{children:"PM10 Levels"}),h.jsxs(Wb,{children:[h.jsx(Fb,{}),h.jsxs(Pb,{children:[h.jsxs(Kl,{children:[h.jsx(Jl,{color:"#00d600",children:"Good"}),h.jsx(Wl,{children:"0-54 μg/m³"})]}),h.jsxs(Kl,{children:[h.jsx(Jl,{color:"#ffee00",children:"Moderate"}),h.jsx(Wl,{children:"55-154"})]}),h.jsxs(Kl,{children:[h.jsx(Jl,{color:"#ff8800",children:"USG"}),h.jsx(Wl,{children:"155-254"})]}),h.jsxs(Kl,{children:[h.jsx(Jl,{color:"#ff1a1a",children:"Unhealthy"}),h.jsx(Wl,{children:"255-354"})]}),h.jsxs(Kl,{children:[h.jsx(Jl,{color:"#9933ff",children:"Very Unhealthy"}),h.jsx(Wl,{children:"355-424"})]}),h.jsxs(Kl,{children:[h.jsx(Jl,{color:"#990033",children:"Hazardous"}),h.jsx(Wl,{children:"425+"})]})]})]}),h.jsx(Ib,{children:'Note: USG stands for "Unhealthy for Sensitive Groups" - including children, older adults, and people with respiratory or heart conditions.'})]})]})]}),o==="howto"&&h.jsxs(Vb,{children:[h.jsxs(Kb,{children:[h.jsx(Uu,{children:"Quick Start Guide"}),h.jsx(Hu,{}),h.jsxs(tv,{children:[h.jsxs(ri,{children:[h.jsx(ci,{children:"1"}),h.jsxs(si,{children:[h.jsx(fi,{children:"Navigate the map"}),h.jsx(di,{children:"Use standard zoom and pan controls located on the left side of the screen."})]})]}),h.jsxs(ri,{children:[h.jsx(ci,{children:"2"}),h.jsxs(si,{children:[h.jsx(fi,{children:"Choose lake elevation"}),h.jsx(di,{children:"Select different GSL elevation scenarios to see how dust emissions change."})]})]}),h.jsxs(ri,{children:[h.jsx(ci,{children:"3"}),h.jsxs(si,{children:[h.jsx(fi,{children:"Use timeline controls"}),h.jsx(di,{children:"Play through the forecast timeline or choose a specific date/time."})]})]}),h.jsxs(ri,{children:[h.jsx(ci,{children:"4"}),h.jsxs(si,{children:[h.jsx(fi,{children:"View emissions levels"}),h.jsx(di,{children:"Mouse over colored areas to see specific PM10 concentration values."})]})]}),h.jsxs(ri,{children:[h.jsx(ci,{children:"5"}),h.jsxs(si,{children:[h.jsx(fi,{children:"Toggle map layers"}),h.jsx(di,{children:"Use the layer control to customize your view and see different data visualizations."})]})]})]}),h.jsxs(ev,{children:[h.jsx(wg,{size:24,className:"mr-4 text-mahogany flex-shrink-0"}),h.jsx("div",{children:"Need more help? A detailed guided tour is available by clicking the help button in the bottom-right corner of the map interface."})]})]}),h.jsxs(av,{children:[h.jsx(lv,{children:h.jsx("h2",{children:"Video Tutorial"})}),h.jsxs(nv,{children:[h.jsx(iv,{children:h.jsx(uv,{children:h.jsx(jb,{size:40,className:"ml-1"})})}),h.jsx(ov,{children:"(Video would be embedded here)"})]}),h.jsx(rv,{children:h.jsxs("div",{children:[h.jsx(cv,{children:"Introduction to Great Salt Lake Dust Exposure Modeling Tool"}),h.jsx(sv,{children:"Duration: 4:30"})]})})]})]}),o==="feedback"&&h.jsxs(Yu,{wide:!0,children:[h.jsx(Uu,{children:"Submit Feedback"}),h.jsx(Hu,{}),h.jsxs(fv,{children:[h.jsxs(dv,{children:[h.jsx(Sb,{size:24,className:"mr-3"}),h.jsx(hv,{children:"GitHub Issues"})]}),h.jsx(Ag,{children:"For bug reports, feature requests, and technical feedback, please submit a GitHub issue. This helps us track and address your concerns effectively."}),h.jsxs(gv,{children:[h.jsx(mv,{children:"github.com/wilkes-center/gsl-dust-tool/issues"}),h.jsx(pv,{href:"https://github.com/wilkes-center/gsl-dust-tool/issues",target:"_blank",rel:"noopener noreferrer",children:"Submit Issue"})]})]})]})]})]})]})},Rb=R.div`
  position: fixed;
  inset: 0;
  font-family: 'Sora', sans-serif;
  background-color: #f9f6ef;
  z-index: 1000;
`,Db=R.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,$b=R.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 33%;
  height: 33%;
  background-color: rgba(153, 170, 136, 0.1);
  border-radius: 50%;
  filter: blur(100px);
  transform: translate(-50%, -50%);
`,Cb=R.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  background-color: rgba(45, 89, 84, 0.05);
  border-radius: 50%;
  filter: blur(100px);
  transform: translate(25%, 25%);
`,Nb=R.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: auto;
`,Ub=R.header`
  margin-bottom: 2rem;
`,Hb=R.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Lb=R.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,Bb=R.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1a1a1a;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,qb=R.span`
  color: #751d0c;
`,kb=R.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`,Gb=R.button`
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
`,Yb=R.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`,Xb=R.div`
  display: flex;
  gap: 1rem;
  padding: 0.25rem;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 0.75rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,wc=R.button`  padding: 0.75rem 2rem;
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
`,Ac=R.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #751d0c;
  border-radius: 0 0 4px 4px;
`,Zb=R.div`
  flex: 1;
  margin-bottom: 2rem;
`,Qb=R.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Vb=R.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Yu=R.div`
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  grid-column: ${l=>l.wide?"1 / -1":"auto"};
`,Kb=R(Yu)``,Uu=R.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #2d5954;
  margin-bottom: 1.5rem;
`,Jb=R.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d5954;
  margin-bottom: 1rem;
`,Hu=R.div`
  height: 3px;
  width: 5rem;
  background-color: #751d0c;
  margin-bottom: 1.5rem;
`,Ag=R.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-family: 'Red Hat Display', sans-serif;
`,Wb=R.div`
  margin-bottom: 1.5rem;
  padding: 1rem 0;
`,Fb=R.div`
  height: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  background: linear-gradient(to right, #00d600, #ffee00, #ff8800, #ff1a1a, #9933ff, #990033);
`,Pb=R.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 0.75rem;
`,Kl=R.div`
  text-align: center;
`,Jl=R.div`
  font-weight: 600;
  color: ${l=>l.color};
`,Wl=R.div`
  color: #1a1a1a;
`,Ib=R.div`
  font-size: 0.75rem;
  color: #666;
  font-style: italic;
  margin-top: 1rem;
`,tv=R.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,ri=R.li`
  display: flex;
  align-items: flex-start;
`,ci=R.span`
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
`,si=R.div``,fi=R.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d5954;
  margin-bottom: 0.25rem;
`,di=R.p`
  font-size: 1rem;
  color: #1a1a1a;
  font-family: 'Red Hat Display', sans-serif;
`,ev=R.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(45, 89, 84, 0.2);
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #1a1a1a;
`,av=R.div`
  background-color: #1a1a1a;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`,lv=R.div`
  padding: 1.5rem;
  border-bottom: 1px solid #333;
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #f9f6ef;
    margin: 0;
  }
`,nv=R.div`
  aspect-ratio: 16 / 9;
  background-color: #222;
  position: relative;
`,iv=R.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`,uv=R.div`
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
`,ov=R.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-family: 'Red Hat Display', sans-serif;
`,rv=R.div`
  padding: 1.5rem;
  background-color: #222;
  border-top: 1px solid #333;
`,cv=R.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #f9f6ef;
  margin: 0 0 0.25rem 0;
`,sv=R.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`,fv=R.div`
  background-color: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,dv=R.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #2d5954;
`,hv=R.h4`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
`,gv=R.div`
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
`,mv=R.div`
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #1a1a1a;
  font-family: 'Red Hat Display', sans-serif;
`,pv=R.a`
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
`,yv=R.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;function bv(){const[l,o]=N.useState(!0),[c,r]=N.useState(re[0]),[f,g]=N.useState("202204191800"),m=p=>{r(p)},v=p=>{g(p)},S=()=>{o(!1)};return h.jsxs(Uy,{theme:zg,children:[h.jsx(hb,{theme:zg}),l?h.jsx(Ob,{onComplete:S}):h.jsxs(yv,{children:[h.jsx(db,{elevation:c,timestamp:f}),h.jsx(rb,{onElevationChange:m,onTimestampChange:v})]})]})}Hp.createRoot(document.getElementById("root")).render(h.jsx(N.StrictMode,{children:h.jsx(bv,{})}));export{Ap as g};
