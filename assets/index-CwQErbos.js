(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))c(S);new MutationObserver(S=>{for(const A of S)if(A.type==="childList")for(const N of A.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&c(N)}).observe(document,{childList:!0,subtree:!0});function s(S){const A={};return S.integrity&&(A.integrity=S.integrity),S.referrerPolicy&&(A.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?A.credentials="include":S.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function c(S){if(S.ep)return;S.ep=!0;const A=s(S);fetch(S.href,A)}})();function Ym(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Rr={exports:{}},Ue={};var w0;function km(){if(w0)return Ue;w0=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function s(c,S,A){var N=null;if(A!==void 0&&(N=""+A),S.key!==void 0&&(N=""+S.key),"key"in S){A={};for(var G in S)G!=="key"&&(A[G]=S[G])}else A=S;return S=A.ref,{$$typeof:o,type:c,key:N,ref:S!==void 0?S:null,props:A}}return Ue.Fragment=f,Ue.jsx=s,Ue.jsxs=s,Ue}var K0;function Xm(){return K0||(K0=1,Rr.exports=km()),Rr.exports}var en=Xm(),jr={exports:{}},K={};var J0;function Gm(){if(J0)return K;J0=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),N=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),L=Symbol.iterator;function Z(m){return m===null||typeof m!="object"?null:(m=L&&m[L]||m["@@iterator"],typeof m=="function"?m:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function un(m,E,R){this.props=m,this.context=E,this.refs=w,this.updater=R||U}un.prototype.isReactComponent={},un.prototype.setState=function(m,E){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,E,"setState")},un.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function On(){}On.prototype=un.prototype;function cn(m,E,R){this.props=m,this.context=E,this.refs=w,this.updater=R||U}var Cn=cn.prototype=new On;Cn.constructor=cn,M(Cn,un.prototype),Cn.isPureReactComponent=!0;var Xn=Array.isArray;function En(){}var J={H:null,A:null,T:null,S:null},Rn=Object.prototype.hasOwnProperty;function Mn(m,E,R){var B=R.ref;return{$$typeof:o,type:m,key:E,ref:B!==void 0?B:null,props:R}}function Pt(m,E){return Mn(m.type,E,m.props)}function Ca(m){return typeof m=="object"&&m!==null&&m.$$typeof===o}function In(m){var E={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(R){return E[R]})}var Ht=/\/+/g;function ka(m,E){return typeof m=="object"&&m!==null&&m.key!=null?In(""+m.key):E.toString(36)}function Ma(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(En,En):(m.status="pending",m.then(function(E){m.status==="pending"&&(m.status="fulfilled",m.value=E)},function(E){m.status==="pending"&&(m.status="rejected",m.reason=E)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function z(m,E,R,B,W){var P=typeof m;(P==="undefined"||P==="boolean")&&(m=null);var hn=!1;if(m===null)hn=!0;else switch(P){case"bigint":case"string":case"number":hn=!0;break;case"object":switch(m.$$typeof){case o:case f:hn=!0;break;case H:return hn=m._init,z(hn(m._payload),E,R,B,W)}}if(hn)return W=W(m),hn=B===""?"."+ka(m,0):B,Xn(W)?(R="",hn!=null&&(R=hn.replace(Ht,"$&/")+"/"),z(W,E,R,"",function(Yl){return Yl})):W!=null&&(Ca(W)&&(W=Pt(W,R+(W.key==null||m&&m.key===W.key?"":(""+W.key).replace(Ht,"$&/")+"/")+hn)),E.push(W)),1;hn=0;var $n=B===""?".":B+":";if(Xn(m))for(var Un=0;Un<m.length;Un++)B=m[Un],P=$n+ka(B,Un),hn+=z(B,E,R,P,W);else if(Un=Z(m),typeof Un=="function")for(m=Un.call(m),Un=0;!(B=m.next()).done;)B=B.value,P=$n+ka(B,Un++),hn+=z(B,E,R,P,W);else if(P==="object"){if(typeof m.then=="function")return z(Ma(m),E,R,B,W);throw E=String(m),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return hn}function q(m,E,R){if(m==null)return m;var B=[],W=0;return z(m,B,"","",function(P){return E.call(R,P,W++)}),B}function V(m){if(m._status===-1){var E=m._result;E=E(),E.then(function(R){(m._status===0||m._status===-1)&&(m._status=1,m._result=R)},function(R){(m._status===0||m._status===-1)&&(m._status=2,m._result=R)}),m._status===-1&&(m._status=0,m._result=E)}if(m._status===1)return m._result.default;throw m._result}var vn=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},xn={map:q,forEach:function(m,E,R){q(m,function(){E.apply(this,arguments)},R)},count:function(m){var E=0;return q(m,function(){E++}),E},toArray:function(m){return q(m,function(E){return E})||[]},only:function(m){if(!Ca(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return K.Activity=C,K.Children=xn,K.Component=un,K.Fragment=s,K.Profiler=S,K.PureComponent=cn,K.StrictMode=c,K.Suspense=D,K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,K.__COMPILER_RUNTIME={__proto__:null,c:function(m){return J.H.useMemoCache(m)}},K.cache=function(m){return function(){return m.apply(null,arguments)}},K.cacheSignal=function(){return null},K.cloneElement=function(m,E,R){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var B=M({},m.props),W=m.key;if(E!=null)for(P in E.key!==void 0&&(W=""+E.key),E)!Rn.call(E,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&E.ref===void 0||(B[P]=E[P]);var P=arguments.length-2;if(P===1)B.children=R;else if(1<P){for(var hn=Array(P),$n=0;$n<P;$n++)hn[$n]=arguments[$n+2];B.children=hn}return Mn(m.type,W,B)},K.createContext=function(m){return m={$$typeof:N,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:A,_context:m},m},K.createElement=function(m,E,R){var B,W={},P=null;if(E!=null)for(B in E.key!==void 0&&(P=""+E.key),E)Rn.call(E,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(W[B]=E[B]);var hn=arguments.length-2;if(hn===1)W.children=R;else if(1<hn){for(var $n=Array(hn),Un=0;Un<hn;Un++)$n[Un]=arguments[Un+2];W.children=$n}if(m&&m.defaultProps)for(B in hn=m.defaultProps,hn)W[B]===void 0&&(W[B]=hn[B]);return Mn(m,P,W)},K.createRef=function(){return{current:null}},K.forwardRef=function(m){return{$$typeof:G,render:m}},K.isValidElement=Ca,K.lazy=function(m){return{$$typeof:H,_payload:{_status:-1,_result:m},_init:V}},K.memo=function(m,E){return{$$typeof:v,type:m,compare:E===void 0?null:E}},K.startTransition=function(m){var E=J.T,R={};J.T=R;try{var B=m(),W=J.S;W!==null&&W(R,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(En,vn)}catch(P){vn(P)}finally{E!==null&&R.types!==null&&(E.types=R.types),J.T=E}},K.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},K.use=function(m){return J.H.use(m)},K.useActionState=function(m,E,R){return J.H.useActionState(m,E,R)},K.useCallback=function(m,E){return J.H.useCallback(m,E)},K.useContext=function(m){return J.H.useContext(m)},K.useDebugValue=function(){},K.useDeferredValue=function(m,E){return J.H.useDeferredValue(m,E)},K.useEffect=function(m,E){return J.H.useEffect(m,E)},K.useEffectEvent=function(m){return J.H.useEffectEvent(m)},K.useId=function(){return J.H.useId()},K.useImperativeHandle=function(m,E,R){return J.H.useImperativeHandle(m,E,R)},K.useInsertionEffect=function(m,E){return J.H.useInsertionEffect(m,E)},K.useLayoutEffect=function(m,E){return J.H.useLayoutEffect(m,E)},K.useMemo=function(m,E){return J.H.useMemo(m,E)},K.useOptimistic=function(m,E){return J.H.useOptimistic(m,E)},K.useReducer=function(m,E,R){return J.H.useReducer(m,E,R)},K.useRef=function(m){return J.H.useRef(m)},K.useState=function(m){return J.H.useState(m)},K.useSyncExternalStore=function(m,E,R){return J.H.useSyncExternalStore(m,E,R)},K.useTransition=function(){return J.H.useTransition()},K.version="19.2.3",K}var W0;function Zr(){return W0||(W0=1,jr.exports=Gm()),jr.exports}var su=Zr();const rn=Ym(su);var Br={exports:{}},He={},Yr={exports:{}},kr={};var F0;function Qm(){return F0||(F0=1,(function(o){function f(z,q){var V=z.length;z.push(q);n:for(;0<V;){var vn=V-1>>>1,xn=z[vn];if(0<S(xn,q))z[vn]=q,z[V]=xn,V=vn;else break n}}function s(z){return z.length===0?null:z[0]}function c(z){if(z.length===0)return null;var q=z[0],V=z.pop();if(V!==q){z[0]=V;n:for(var vn=0,xn=z.length,m=xn>>>1;vn<m;){var E=2*(vn+1)-1,R=z[E],B=E+1,W=z[B];if(0>S(R,V))B<xn&&0>S(W,R)?(z[vn]=W,z[B]=V,vn=B):(z[vn]=R,z[E]=V,vn=E);else if(B<xn&&0>S(W,V))z[vn]=W,z[B]=V,vn=B;else break n}}return q}function S(z,q){var V=z.sortIndex-q.sortIndex;return V!==0?V:z.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;o.unstable_now=function(){return A.now()}}else{var N=Date,G=N.now();o.unstable_now=function(){return N.now()-G}}var D=[],v=[],H=1,C=null,L=3,Z=!1,U=!1,M=!1,w=!1,un=typeof setTimeout=="function"?setTimeout:null,On=typeof clearTimeout=="function"?clearTimeout:null,cn=typeof setImmediate<"u"?setImmediate:null;function Cn(z){for(var q=s(v);q!==null;){if(q.callback===null)c(v);else if(q.startTime<=z)c(v),q.sortIndex=q.expirationTime,f(D,q);else break;q=s(v)}}function Xn(z){if(M=!1,Cn(z),!U)if(s(D)!==null)U=!0,En||(En=!0,In());else{var q=s(v);q!==null&&Ma(Xn,q.startTime-z)}}var En=!1,J=-1,Rn=5,Mn=-1;function Pt(){return w?!0:!(o.unstable_now()-Mn<Rn)}function Ca(){if(w=!1,En){var z=o.unstable_now();Mn=z;var q=!0;try{n:{U=!1,M&&(M=!1,On(J),J=-1),Z=!0;var V=L;try{a:{for(Cn(z),C=s(D);C!==null&&!(C.expirationTime>z&&Pt());){var vn=C.callback;if(typeof vn=="function"){C.callback=null,L=C.priorityLevel;var xn=vn(C.expirationTime<=z);if(z=o.unstable_now(),typeof xn=="function"){C.callback=xn,Cn(z),q=!0;break a}C===s(D)&&c(D),Cn(z)}else c(D);C=s(D)}if(C!==null)q=!0;else{var m=s(v);m!==null&&Ma(Xn,m.startTime-z),q=!1}}break n}finally{C=null,L=V,Z=!1}q=void 0}}finally{q?In():En=!1}}}var In;if(typeof cn=="function")In=function(){cn(Ca)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,ka=Ht.port2;Ht.port1.onmessage=Ca,In=function(){ka.postMessage(null)}}else In=function(){un(Ca,0)};function Ma(z,q){J=un(function(){z(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rn=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return L},o.unstable_next=function(z){switch(L){case 1:case 2:case 3:var q=3;break;default:q=L}var V=L;L=q;try{return z()}finally{L=V}},o.unstable_requestPaint=function(){w=!0},o.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var V=L;L=z;try{return q()}finally{L=V}},o.unstable_scheduleCallback=function(z,q,V){var vn=o.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?vn+V:vn):V=vn,z){case 1:var xn=-1;break;case 2:xn=250;break;case 5:xn=1073741823;break;case 4:xn=1e4;break;default:xn=5e3}return xn=V+xn,z={id:H++,callback:q,priorityLevel:z,startTime:V,expirationTime:xn,sortIndex:-1},V>vn?(z.sortIndex=V,f(v,z),s(D)===null&&z===s(v)&&(M?(On(J),J=-1):M=!0,Ma(Xn,V-vn))):(z.sortIndex=xn,f(D,z),U||Z||(U=!0,En||(En=!0,In()))),z},o.unstable_shouldYield=Pt,o.unstable_wrapCallback=function(z){var q=L;return function(){var V=L;L=q;try{return z.apply(this,arguments)}finally{L=V}}}})(kr)),kr}var $0;function Zm(){return $0||($0=1,Yr.exports=Qm()),Yr.exports}var Xr={exports:{}},Fn={};var P0;function Vm(){if(P0)return Fn;P0=1;var o=Zr();function f(D){var v="https://react.dev/errors/"+D;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)v+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+D+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(f(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},S=Symbol.for("react.portal");function A(D,v,H){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:C==null?null:""+C,children:D,containerInfo:v,implementation:H}}var N=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function G(D,v){if(D==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Fn.createPortal=function(D,v){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(f(299));return A(D,v,null,H)},Fn.flushSync=function(D){var v=N.T,H=c.p;try{if(N.T=null,c.p=2,D)return D()}finally{N.T=v,c.p=H,c.d.f()}},Fn.preconnect=function(D,v){typeof D=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,c.d.C(D,v))},Fn.prefetchDNS=function(D){typeof D=="string"&&c.d.D(D)},Fn.preinit=function(D,v){if(typeof D=="string"&&v&&typeof v.as=="string"){var H=v.as,C=G(H,v.crossOrigin),L=typeof v.integrity=="string"?v.integrity:void 0,Z=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;H==="style"?c.d.S(D,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:C,integrity:L,fetchPriority:Z}):H==="script"&&c.d.X(D,{crossOrigin:C,integrity:L,fetchPriority:Z,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Fn.preinitModule=function(D,v){if(typeof D=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var H=G(v.as,v.crossOrigin);c.d.M(D,{crossOrigin:H,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&c.d.M(D)},Fn.preload=function(D,v){if(typeof D=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var H=v.as,C=G(H,v.crossOrigin);c.d.L(D,H,{crossOrigin:C,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Fn.preloadModule=function(D,v){if(typeof D=="string")if(v){var H=G(v.as,v.crossOrigin);c.d.m(D,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:H,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else c.d.m(D)},Fn.requestFormReset=function(D){c.d.r(D)},Fn.unstable_batchedUpdates=function(D,v){return D(v)},Fn.useFormState=function(D,v,H){return N.H.useFormState(D,v,H)},Fn.useFormStatus=function(){return N.H.useHostTransitionStatus()},Fn.version="19.2.3",Fn}var I0;function Lm(){if(I0)return Xr.exports;I0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),Xr.exports=Vm(),Xr.exports}var nd;function wm(){if(nd)return He;nd=1;var o=Zm(),f=Zr(),s=Lm();function c(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function A(n){var a=n,t=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(t=a.return),n=a.return;while(n)}return a.tag===3?t:null}function N(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function G(n){if(n.tag===31){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function D(n){if(A(n)!==n)throw Error(c(188))}function v(n){var a=n.alternate;if(!a){if(a=A(n),a===null)throw Error(c(188));return a!==n?null:n}for(var t=n,l=a;;){var e=t.return;if(e===null)break;var i=e.alternate;if(i===null){if(l=e.return,l!==null){t=l;continue}break}if(e.child===i.child){for(i=e.child;i;){if(i===t)return D(e),n;if(i===l)return D(e),a;i=i.sibling}throw Error(c(188))}if(t.return!==l.return)t=e,l=i;else{for(var u=!1,r=e.child;r;){if(r===t){u=!0,t=e,l=i;break}if(r===l){u=!0,l=e,t=i;break}r=r.sibling}if(!u){for(r=i.child;r;){if(r===t){u=!0,t=i,l=e;break}if(r===l){u=!0,l=i,t=e;break}r=r.sibling}if(!u)throw Error(c(189))}}if(t.alternate!==l)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?n:a}function H(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=H(n),a!==null)return a;n=n.sibling}return null}var C=Object.assign,L=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),un=Symbol.for("react.profiler"),On=Symbol.for("react.consumer"),cn=Symbol.for("react.context"),Cn=Symbol.for("react.forward_ref"),Xn=Symbol.for("react.suspense"),En=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),Mn=Symbol.for("react.activity"),Pt=Symbol.for("react.memo_cache_sentinel"),Ca=Symbol.iterator;function In(n){return n===null||typeof n!="object"?null:(n=Ca&&n[Ca]||n["@@iterator"],typeof n=="function"?n:null)}var Ht=Symbol.for("react.client.reference");function ka(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Ht?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case un:return"Profiler";case w:return"StrictMode";case Xn:return"Suspense";case En:return"SuspenseList";case Mn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case U:return"Portal";case cn:return n.displayName||"Context";case On:return(n._context.displayName||"Context")+".Consumer";case Cn:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J:return a=n.displayName||null,a!==null?a:ka(n.type)||"Memo";case Rn:a=n._payload,n=n._init;try{return ka(n(a))}catch{}}return null}var Ma=Array.isArray,z=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},vn=[],xn=-1;function m(n){return{current:n}}function E(n){0>xn||(n.current=vn[xn],vn[xn]=null,xn--)}function R(n,a){xn++,vn[xn]=n.current,n.current=a}var B=m(null),W=m(null),P=m(null),hn=m(null);function $n(n,a){switch(R(P,a),R(W,n),R(B,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?b0(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=b0(a),n=v0(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}E(B),R(B,n)}function Un(){E(B),E(W),E(P)}function Yl(n){n.memoizedState!==null&&R(hn,n);var a=B.current,t=v0(a,n.type);a!==t&&(R(W,n),R(B,t))}function Xe(n){W.current===n&&(E(B),E(W)),hn.current===n&&(E(hn),Ee._currentValue=V)}var vu,Vr;function qt(n){if(vu===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);vu=a&&a[1]||"",Vr=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vu+n+Vr}var pu=!1;function gu(n,a){if(!n||pu)return"";pu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(x){var y=x}Reflect.construct(n,[],_)}else{try{_.call()}catch(x){y=x}n.call(_.prototype)}}else{try{throw Error()}catch(x){y=x}(_=n())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(x){if(x&&y&&typeof x.stack=="string")return[x.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var e=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");e&&e.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],r=i[1];if(u&&r){var d=u.split(`
`),g=r.split(`
`);for(e=l=0;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;for(;e<g.length&&!g[e].includes("DetermineComponentFrameRoot");)e++;if(l===d.length||e===g.length)for(l=d.length-1,e=g.length-1;1<=l&&0<=e&&d[l]!==g[e];)e--;for(;1<=l&&0<=e;l--,e--)if(d[l]!==g[e]){if(l!==1||e!==1)do if(l--,e--,0>e||d[l]!==g[e]){var O=`
`+d[l].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=l&&0<=e);break}}}finally{pu=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?qt(t):""}function bd(n,a){switch(n.tag){case 26:case 27:case 5:return qt(n.type);case 16:return qt("Lazy");case 13:return n.child!==a&&a!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return gu(n.type,!1);case 11:return gu(n.type.render,!1);case 1:return gu(n.type,!0);case 31:return qt("Activity");default:return""}}function Lr(n){try{var a="",t=null;do a+=bd(n,t),t=n,n=n.return;while(n);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var yu=Object.prototype.hasOwnProperty,xu=o.unstable_scheduleCallback,Su=o.unstable_cancelCallback,vd=o.unstable_shouldYield,pd=o.unstable_requestPaint,oa=o.unstable_now,gd=o.unstable_getCurrentPriorityLevel,wr=o.unstable_ImmediatePriority,Kr=o.unstable_UserBlockingPriority,Ge=o.unstable_NormalPriority,yd=o.unstable_LowPriority,Jr=o.unstable_IdlePriority,xd=o.log,Sd=o.unstable_setDisableYieldValue,kl=null,ra=null;function ut(n){if(typeof xd=="function"&&Sd(n),ra&&typeof ra.setStrictMode=="function")try{ra.setStrictMode(kl,n)}catch{}}var ca=Math.clz32?Math.clz32:Td,Od=Math.log,zd=Math.LN2;function Td(n){return n>>>=0,n===0?32:31-(Od(n)/zd|0)|0}var Qe=256,Ze=262144,Ve=4194304;function Ct(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Le(n,a,t){var l=n.pendingLanes;if(l===0)return 0;var e=0,i=n.suspendedLanes,u=n.pingedLanes;n=n.warmLanes;var r=l&134217727;return r!==0?(l=r&~i,l!==0?e=Ct(l):(u&=r,u!==0?e=Ct(u):t||(t=r&~n,t!==0&&(e=Ct(t))))):(r=l&~i,r!==0?e=Ct(r):u!==0?e=Ct(u):t||(t=l&~n,t!==0&&(e=Ct(t)))),e===0?0:a!==0&&a!==e&&(a&i)===0&&(i=e&-e,t=a&-a,i>=t||i===32&&(t&4194048)!==0)?a:e}function Xl(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function _d(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wr(){var n=Ve;return Ve<<=1,(Ve&62914560)===0&&(Ve=4194304),n}function Ou(n){for(var a=[],t=0;31>t;t++)a.push(n);return a}function Gl(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ad(n,a,t,l,e,i){var u=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var r=n.entanglements,d=n.expirationTimes,g=n.hiddenUpdates;for(t=u&~t;0<t;){var O=31-ca(t),_=1<<O;r[O]=0,d[O]=-1;var y=g[O];if(y!==null)for(g[O]=null,O=0;O<y.length;O++){var x=y[O];x!==null&&(x.lane&=-536870913)}t&=~_}l!==0&&Fr(n,l,0),i!==0&&e===0&&n.tag!==0&&(n.suspendedLanes|=i&~(u&~a))}function Fr(n,a,t){n.pendingLanes|=a,n.suspendedLanes&=~a;var l=31-ca(a);n.entangledLanes|=a,n.entanglements[l]=n.entanglements[l]|1073741824|t&261930}function $r(n,a){var t=n.entangledLanes|=a;for(n=n.entanglements;t;){var l=31-ca(t),e=1<<l;e&a|n[l]&a&&(n[l]|=a),t&=~e}}function Pr(n,a){var t=a&-a;return t=(t&42)!==0?1:zu(t),(t&(n.suspendedLanes|a))!==0?0:t}function zu(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Tu(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ir(){var n=q.p;return n!==0?n:(n=window.event,n===void 0?32:k0(n.type))}function nc(n,a){var t=q.p;try{return q.p=n,a()}finally{q.p=t}}var ot=Math.random().toString(36).slice(2),Ln="__reactFiber$"+ot,na="__reactProps$"+ot,It="__reactContainer$"+ot,_u="__reactEvents$"+ot,Ed="__reactListeners$"+ot,Md="__reactHandles$"+ot,ac="__reactResources$"+ot,Ql="__reactMarker$"+ot;function Au(n){delete n[Ln],delete n[na],delete n[_u],delete n[Ed],delete n[Md]}function nl(n){var a=n[Ln];if(a)return a;for(var t=n.parentNode;t;){if(a=t[It]||t[Ln]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(n=z0(n);n!==null;){if(t=n[Ln])return t;n=z0(n)}return a}n=t,t=n.parentNode}return null}function al(n){if(n=n[Ln]||n[It]){var a=n.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return n}return null}function Zl(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(c(33))}function tl(n){var a=n[ac];return a||(a=n[ac]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Zn(n){n[Ql]=!0}var tc=new Set,lc={};function Rt(n,a){ll(n,a),ll(n+"Capture",a)}function ll(n,a){for(lc[n]=a,n=0;n<a.length;n++)tc.add(a[n])}var Dd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ec={},ic={};function Nd(n){return yu.call(ic,n)?!0:yu.call(ec,n)?!1:Dd.test(n)?ic[n]=!0:(ec[n]=!0,!1)}function we(n,a,t){if(Nd(a))if(t===null)n.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+t)}}function Ke(n,a,t){if(t===null)n.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+t)}}function Xa(n,a,t,l){if(l===null)n.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(a,t,""+l)}}function ga(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function uc(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ud(n,a,t){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,a);if(!n.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var e=l.get,i=l.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return e.call(this)},set:function(u){t=""+u,i.call(this,u)}}),Object.defineProperty(n,a,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Eu(n){if(!n._valueTracker){var a=uc(n)?"checked":"value";n._valueTracker=Ud(n,a,""+n[a])}}function oc(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return n&&(l=uc(n)?n.checked?"true":"false":n.value),n=l,n!==t?(a.setValue(n),!0):!1}function Je(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Hd=/[\n"\\]/g;function ya(n){return n.replace(Hd,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Mu(n,a,t,l,e,i,u,r){n.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.type=u:n.removeAttribute("type"),a!=null?u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+ga(a)):n.value!==""+ga(a)&&(n.value=""+ga(a)):u!=="submit"&&u!=="reset"||n.removeAttribute("value"),a!=null?Du(n,u,ga(a)):t!=null?Du(n,u,ga(t)):l!=null&&n.removeAttribute("value"),e==null&&i!=null&&(n.defaultChecked=!!i),e!=null&&(n.checked=e&&typeof e!="function"&&typeof e!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?n.name=""+ga(r):n.removeAttribute("name")}function rc(n,a,t,l,e,i,u,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.type=i),a!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){Eu(n);return}t=t!=null?""+ga(t):"",a=a!=null?""+ga(a):t,r||a===n.value||(n.value=a),n.defaultValue=a}l=l??e,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=r?n.checked:!!l,n.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(n.name=u),Eu(n)}function Du(n,a,t){a==="number"&&Je(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function el(n,a,t,l){if(n=n.options,a){a={};for(var e=0;e<t.length;e++)a["$"+t[e]]=!0;for(t=0;t<n.length;t++)e=a.hasOwnProperty("$"+n[t].value),n[t].selected!==e&&(n[t].selected=e),e&&l&&(n[t].defaultSelected=!0)}else{for(t=""+ga(t),a=null,e=0;e<n.length;e++){if(n[e].value===t){n[e].selected=!0,l&&(n[e].defaultSelected=!0);return}a!==null||n[e].disabled||(a=n[e])}a!==null&&(a.selected=!0)}}function cc(n,a,t){if(a!=null&&(a=""+ga(a),a!==n.value&&(n.value=a),t==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=t!=null?""+ga(t):""}function fc(n,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(c(92));if(Ma(l)){if(1<l.length)throw Error(c(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=ga(a),n.defaultValue=t,l=n.textContent,l===t&&l!==""&&l!==null&&(n.value=l),Eu(n)}function il(n,a){if(a){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=a;return}}n.textContent=a}var qd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sc(n,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":l?n.setProperty(a,t):typeof t!="number"||t===0||qd.has(a)?a==="float"?n.cssFloat=t:n[a]=(""+t).trim():n[a]=t+"px"}function dc(n,a,t){if(a!=null&&typeof a!="object")throw Error(c(62));if(n=n.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var e in a)l=a[e],a.hasOwnProperty(e)&&t[e]!==l&&sc(n,e,l)}else for(var i in a)a.hasOwnProperty(i)&&sc(n,i,a[i])}function Nu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function We(n){return Rd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Ga(){}var Uu=null;function Hu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ul=null,ol=null;function hc(n){var a=al(n);if(a&&(n=a.stateNode)){var t=n[na]||null;n:switch(n=a.stateNode,a.type){case"input":if(Mu(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ya(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==n&&l.form===n.form){var e=l[na]||null;if(!e)throw Error(c(90));Mu(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===n.form&&oc(l)}break n;case"textarea":cc(n,t.value,t.defaultValue);break n;case"select":a=t.value,a!=null&&el(n,!!t.multiple,a,!1)}}}var qu=!1;function mc(n,a,t){if(qu)return n(a,t);qu=!0;try{var l=n(a);return l}finally{if(qu=!1,(ul!==null||ol!==null)&&(ji(),ul&&(a=ul,n=ol,ol=ul=null,hc(a),n)))for(a=0;a<n.length;a++)hc(n[a])}}function Vl(n,a){var t=n.stateNode;if(t===null)return null;var l=t[na]||null;if(l===null)return null;t=l[a];n:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(c(231,a,typeof t));return t}var Qa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if(Qa)try{var Ll={};Object.defineProperty(Ll,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",Ll,Ll),window.removeEventListener("test",Ll,Ll)}catch{Cu=!1}var rt=null,Ru=null,Fe=null;function bc(){if(Fe)return Fe;var n,a=Ru,t=a.length,l,e="value"in rt?rt.value:rt.textContent,i=e.length;for(n=0;n<t&&a[n]===e[n];n++);var u=t-n;for(l=1;l<=u&&a[t-l]===e[i-l];l++);return Fe=e.slice(n,1<l?1-l:void 0)}function $e(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Pe(){return!0}function vc(){return!1}function aa(n){function a(t,l,e,i,u){this._reactName=t,this._targetInst=e,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var r in n)n.hasOwnProperty(r)&&(t=n[r],this[r]=t?t(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pe:vc,this.isPropagationStopped=vc,this}return C(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Pe)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Pe)},persist:function(){},isPersistent:Pe}),a}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ie=aa(jt),wl=C({},jt,{view:0,detail:0}),jd=aa(wl),ju,Bu,Kl,ni=C({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Kl&&(Kl&&n.type==="mousemove"?(ju=n.screenX-Kl.screenX,Bu=n.screenY-Kl.screenY):Bu=ju=0,Kl=n),ju)},movementY:function(n){return"movementY"in n?n.movementY:Bu}}),pc=aa(ni),Bd=C({},ni,{dataTransfer:0}),Yd=aa(Bd),kd=C({},wl,{relatedTarget:0}),Yu=aa(kd),Xd=C({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),Gd=aa(Xd),Qd=C({},jt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Zd=aa(Qd),Vd=C({},jt,{data:0}),gc=aa(Vd),Ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jd(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=Kd[n])?!!a[n]:!1}function ku(){return Jd}var Wd=C({},wl,{key:function(n){if(n.key){var a=Ld[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=$e(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?wd[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(n){return n.type==="keypress"?$e(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$e(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Fd=aa(Wd),$d=C({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yc=aa($d),Pd=C({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),Id=aa(Pd),nh=C({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),ah=aa(nh),th=C({},ni,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),lh=aa(th),eh=C({},jt,{newState:0,oldState:0}),ih=aa(eh),uh=[9,13,27,32],Xu=Qa&&"CompositionEvent"in window,Jl=null;Qa&&"documentMode"in document&&(Jl=document.documentMode);var oh=Qa&&"TextEvent"in window&&!Jl,xc=Qa&&(!Xu||Jl&&8<Jl&&11>=Jl),Sc=" ",Oc=!1;function zc(n,a){switch(n){case"keyup":return uh.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var rl=!1;function rh(n,a){switch(n){case"compositionend":return Tc(a);case"keypress":return a.which!==32?null:(Oc=!0,Sc);case"textInput":return n=a.data,n===Sc&&Oc?null:n;default:return null}}function ch(n,a){if(rl)return n==="compositionend"||!Xu&&zc(n,a)?(n=bc(),Fe=Ru=rt=null,rl=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return xc&&a.locale!=="ko"?null:a.data;default:return null}}var fh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _c(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!fh[n.type]:a==="textarea"}function Ac(n,a,t,l){ul?ol?ol.push(l):ol=[l]:ul=l,a=Zi(a,"onChange"),0<a.length&&(t=new Ie("onChange","change",null,t,l),n.push({event:t,listeners:a}))}var Wl=null,Fl=null;function sh(n){c0(n,0)}function ai(n){var a=Zl(n);if(oc(a))return n}function Ec(n,a){if(n==="change")return a}var Mc=!1;if(Qa){var Gu;if(Qa){var Qu="oninput"in document;if(!Qu){var Dc=document.createElement("div");Dc.setAttribute("oninput","return;"),Qu=typeof Dc.oninput=="function"}Gu=Qu}else Gu=!1;Mc=Gu&&(!document.documentMode||9<document.documentMode)}function Nc(){Wl&&(Wl.detachEvent("onpropertychange",Uc),Fl=Wl=null)}function Uc(n){if(n.propertyName==="value"&&ai(Fl)){var a=[];Ac(a,Fl,n,Hu(n)),mc(sh,a)}}function dh(n,a,t){n==="focusin"?(Nc(),Wl=a,Fl=t,Wl.attachEvent("onpropertychange",Uc)):n==="focusout"&&Nc()}function hh(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ai(Fl)}function mh(n,a){if(n==="click")return ai(a)}function bh(n,a){if(n==="input"||n==="change")return ai(a)}function vh(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var fa=typeof Object.is=="function"?Object.is:vh;function $l(n,a){if(fa(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var t=Object.keys(n),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var e=t[l];if(!yu.call(a,e)||!fa(n[e],a[e]))return!1}return!0}function Hc(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qc(n,a){var t=Hc(n);n=0;for(var l;t;){if(t.nodeType===3){if(l=n+t.textContent.length,n<=a&&l>=a)return{node:t,offset:a-n};n=l}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Hc(t)}}function Cc(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?Cc(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function Rc(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Je(n.document);a instanceof n.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)n=a.contentWindow;else break;a=Je(n.document)}return a}function Zu(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var ph=Qa&&"documentMode"in document&&11>=document.documentMode,cl=null,Vu=null,Pl=null,Lu=!1;function jc(n,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Lu||cl==null||cl!==Je(l)||(l=cl,"selectionStart"in l&&Zu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Pl&&$l(Pl,l)||(Pl=l,l=Zi(Vu,"onSelect"),0<l.length&&(a=new Ie("onSelect","select",null,a,t),n.push({event:a,listeners:l}),a.target=cl)))}function Bt(n,a){var t={};return t[n.toLowerCase()]=a.toLowerCase(),t["Webkit"+n]="webkit"+a,t["Moz"+n]="moz"+a,t}var fl={animationend:Bt("Animation","AnimationEnd"),animationiteration:Bt("Animation","AnimationIteration"),animationstart:Bt("Animation","AnimationStart"),transitionrun:Bt("Transition","TransitionRun"),transitionstart:Bt("Transition","TransitionStart"),transitioncancel:Bt("Transition","TransitionCancel"),transitionend:Bt("Transition","TransitionEnd")},wu={},Bc={};Qa&&(Bc=document.createElement("div").style,"AnimationEvent"in window||(delete fl.animationend.animation,delete fl.animationiteration.animation,delete fl.animationstart.animation),"TransitionEvent"in window||delete fl.transitionend.transition);function Yt(n){if(wu[n])return wu[n];if(!fl[n])return n;var a=fl[n],t;for(t in a)if(a.hasOwnProperty(t)&&t in Bc)return wu[n]=a[t];return n}var Yc=Yt("animationend"),kc=Yt("animationiteration"),Xc=Yt("animationstart"),gh=Yt("transitionrun"),yh=Yt("transitionstart"),xh=Yt("transitioncancel"),Gc=Yt("transitionend"),Qc=new Map,Ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ku.push("scrollEnd");function Da(n,a){Qc.set(n,a),Rt(a,[n])}var ti=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},xa=[],sl=0,Ju=0;function li(){for(var n=sl,a=Ju=sl=0;a<n;){var t=xa[a];xa[a++]=null;var l=xa[a];xa[a++]=null;var e=xa[a];xa[a++]=null;var i=xa[a];if(xa[a++]=null,l!==null&&e!==null){var u=l.pending;u===null?e.next=e:(e.next=u.next,u.next=e),l.pending=e}i!==0&&Zc(t,e,i)}}function ei(n,a,t,l){xa[sl++]=n,xa[sl++]=a,xa[sl++]=t,xa[sl++]=l,Ju|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Wu(n,a,t,l){return ei(n,a,t,l),ii(n)}function kt(n,a){return ei(n,null,null,a),ii(n)}function Zc(n,a,t){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t);for(var e=!1,i=n.return;i!==null;)i.childLanes|=t,l=i.alternate,l!==null&&(l.childLanes|=t),i.tag===22&&(n=i.stateNode,n===null||n._visibility&1||(e=!0)),n=i,i=i.return;return n.tag===3?(i=n.stateNode,e&&a!==null&&(e=31-ca(t),n=i.hiddenUpdates,l=n[e],l===null?n[e]=[a]:l.push(a),a.lane=t|536870912),i):null}function ii(n){if(50<xe)throw xe=0,ir=null,Error(c(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var dl={};function Sh(n,a,t,l){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sa(n,a,t,l){return new Sh(n,a,t,l)}function Fu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Za(n,a){var t=n.alternate;return t===null?(t=sa(n.tag,a,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=a,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,a=n.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function Vc(n,a){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,a=t.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function ui(n,a,t,l,e,i){var u=0;if(l=n,typeof n=="function")Fu(n)&&(u=1);else if(typeof n=="string")u=Am(n,t,B.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Mn:return n=sa(31,t,a,e),n.elementType=Mn,n.lanes=i,n;case M:return Xt(t.children,e,i,a);case w:u=8,e|=24;break;case un:return n=sa(12,t,a,e|2),n.elementType=un,n.lanes=i,n;case Xn:return n=sa(13,t,a,e),n.elementType=Xn,n.lanes=i,n;case En:return n=sa(19,t,a,e),n.elementType=En,n.lanes=i,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case cn:u=10;break n;case On:u=9;break n;case Cn:u=11;break n;case J:u=14;break n;case Rn:u=16,l=null;break n}u=29,t=Error(c(130,n===null?"null":typeof n,"")),l=null}return a=sa(u,t,a,e),a.elementType=n,a.type=l,a.lanes=i,a}function Xt(n,a,t,l){return n=sa(7,n,l,a),n.lanes=t,n}function $u(n,a,t){return n=sa(6,n,null,a),n.lanes=t,n}function Lc(n){var a=sa(18,null,null,0);return a.stateNode=n,a}function Pu(n,a,t){return a=sa(4,n.children!==null?n.children:[],n.key,a),a.lanes=t,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var wc=new WeakMap;function Sa(n,a){if(typeof n=="object"&&n!==null){var t=wc.get(n);return t!==void 0?t:(a={value:n,source:a,stack:Lr(a)},wc.set(n,a),a)}return{value:n,source:a,stack:Lr(a)}}var hl=[],ml=0,oi=null,Il=0,Oa=[],za=0,ct=null,Ra=1,ja="";function Va(n,a){hl[ml++]=Il,hl[ml++]=oi,oi=n,Il=a}function Kc(n,a,t){Oa[za++]=Ra,Oa[za++]=ja,Oa[za++]=ct,ct=n;var l=Ra;n=ja;var e=32-ca(l)-1;l&=~(1<<e),t+=1;var i=32-ca(a)+e;if(30<i){var u=e-e%5;i=(l&(1<<u)-1).toString(32),l>>=u,e-=u,Ra=1<<32-ca(a)+e|t<<e|l,ja=i+n}else Ra=1<<i|t<<e|l,ja=n}function Iu(n){n.return!==null&&(Va(n,1),Kc(n,1,0))}function no(n){for(;n===oi;)oi=hl[--ml],hl[ml]=null,Il=hl[--ml],hl[ml]=null;for(;n===ct;)ct=Oa[--za],Oa[za]=null,ja=Oa[--za],Oa[za]=null,Ra=Oa[--za],Oa[za]=null}function Jc(n,a){Oa[za++]=Ra,Oa[za++]=ja,Oa[za++]=ct,Ra=a.id,ja=a.overflow,ct=n}var wn=null,zn=null,on=!1,ft=null,Ta=!1,ao=Error(c(519));function st(n){var a=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ne(Sa(a,n)),ao}function Wc(n){var a=n.stateNode,t=n.type,l=n.memoizedProps;switch(a[Ln]=n,a[na]=l,t){case"dialog":nn("cancel",a),nn("close",a);break;case"iframe":case"object":case"embed":nn("load",a);break;case"video":case"audio":for(t=0;t<Oe.length;t++)nn(Oe[t],a);break;case"source":nn("error",a);break;case"img":case"image":case"link":nn("error",a),nn("load",a);break;case"details":nn("toggle",a);break;case"input":nn("invalid",a),rc(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":nn("invalid",a);break;case"textarea":nn("invalid",a),fc(a,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||h0(a.textContent,t)?(l.popover!=null&&(nn("beforetoggle",a),nn("toggle",a)),l.onScroll!=null&&nn("scroll",a),l.onScrollEnd!=null&&nn("scrollend",a),l.onClick!=null&&(a.onclick=Ga),a=!0):a=!1,a||st(n,!0)}function Fc(n){for(wn=n.return;wn;)switch(wn.tag){case 5:case 31:case 13:Ta=!1;return;case 27:case 3:Ta=!0;return;default:wn=wn.return}}function bl(n){if(n!==wn)return!1;if(!on)return Fc(n),on=!0,!1;var a=n.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||xr(n.type,n.memoizedProps)),t=!t),t&&zn&&st(n),Fc(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));zn=O0(n)}else if(a===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));zn=O0(n)}else a===27?(a=zn,_t(n.type)?(n=_r,_r=null,zn=n):zn=a):zn=wn?Aa(n.stateNode.nextSibling):null;return!0}function Gt(){zn=wn=null,on=!1}function to(){var n=ft;return n!==null&&(ia===null?ia=n:ia.push.apply(ia,n),ft=null),n}function ne(n){ft===null?ft=[n]:ft.push(n)}var lo=m(null),Qt=null,La=null;function dt(n,a,t){R(lo,a._currentValue),a._currentValue=t}function wa(n){n._currentValue=lo.current,E(lo)}function eo(n,a,t){for(;n!==null;){var l=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),n===t)break;n=n.return}}function io(n,a,t,l){var e=n.child;for(e!==null&&(e.return=n);e!==null;){var i=e.dependencies;if(i!==null){var u=e.child;i=i.firstContext;n:for(;i!==null;){var r=i;i=e;for(var d=0;d<a.length;d++)if(r.context===a[d]){i.lanes|=t,r=i.alternate,r!==null&&(r.lanes|=t),eo(i.return,t,n),l||(u=null);break n}i=r.next}}else if(e.tag===18){if(u=e.return,u===null)throw Error(c(341));u.lanes|=t,i=u.alternate,i!==null&&(i.lanes|=t),eo(u,t,n),u=null}else u=e.child;if(u!==null)u.return=e;else for(u=e;u!==null;){if(u===n){u=null;break}if(e=u.sibling,e!==null){e.return=u.return,u=e;break}u=u.return}e=u}}function vl(n,a,t,l){n=null;for(var e=a,i=!1;e!==null;){if(!i){if((e.flags&524288)!==0)i=!0;else if((e.flags&262144)!==0)break}if(e.tag===10){var u=e.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var r=e.type;fa(e.pendingProps.value,u.value)||(n!==null?n.push(r):n=[r])}}else if(e===hn.current){if(u=e.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==e.memoizedState.memoizedState&&(n!==null?n.push(Ee):n=[Ee])}e=e.return}n!==null&&io(a,n,t,l),a.flags|=262144}function ri(n){for(n=n.firstContext;n!==null;){if(!fa(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Zt(n){Qt=n,La=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Kn(n){return $c(Qt,n)}function ci(n,a){return Qt===null&&Zt(n),$c(n,a)}function $c(n,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},La===null){if(n===null)throw Error(c(308));La=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else La=La.next=a;return t}var Oh=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(t,l){n.push(l)}};this.abort=function(){a.aborted=!0,n.forEach(function(t){return t()})}},zh=o.unstable_scheduleCallback,Th=o.unstable_NormalPriority,jn={$$typeof:cn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uo(){return{controller:new Oh,data:new Map,refCount:0}}function ae(n){n.refCount--,n.refCount===0&&zh(Th,function(){n.controller.abort()})}var te=null,oo=0,pl=0,gl=null;function _h(n,a){if(te===null){var t=te=[];oo=0,pl=sr(),gl={status:"pending",value:void 0,then:function(l){t.push(l)}}}return oo++,a.then(Pc,Pc),a}function Pc(){if(--oo===0&&te!==null){gl!==null&&(gl.status="fulfilled");var n=te;te=null,pl=0,gl=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function Ah(n,a){var t=[],l={status:"pending",value:null,reason:null,then:function(e){t.push(e)}};return n.then(function(){l.status="fulfilled",l.value=a;for(var e=0;e<t.length;e++)(0,t[e])(a)},function(e){for(l.status="rejected",l.reason=e,e=0;e<t.length;e++)(0,t[e])(void 0)}),l}var Ic=z.S;z.S=function(n,a){Bs=oa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&_h(n,a),Ic!==null&&Ic(n,a)};var Vt=m(null);function ro(){var n=Vt.current;return n!==null?n:Sn.pooledCache}function fi(n,a){a===null?R(Vt,Vt.current):R(Vt,a.pool)}function nf(){var n=ro();return n===null?null:{parent:jn._currentValue,pool:n}}var yl=Error(c(460)),co=Error(c(474)),si=Error(c(542)),di={then:function(){}};function af(n){return n=n.status,n==="fulfilled"||n==="rejected"}function tf(n,a,t){switch(t=n[t],t===void 0?n.push(a):t!==a&&(a.then(Ga,Ga),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,ef(n),n;default:if(typeof a.status=="string")a.then(Ga,Ga);else{if(n=Sn,n!==null&&100<n.shellSuspendCounter)throw Error(c(482));n=a,n.status="pending",n.then(function(l){if(a.status==="pending"){var e=a;e.status="fulfilled",e.value=l}},function(l){if(a.status==="pending"){var e=a;e.status="rejected",e.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,ef(n),n}throw wt=a,yl}}function Lt(n){try{var a=n._init;return a(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(wt=t,yl):t}}var wt=null;function lf(){if(wt===null)throw Error(c(459));var n=wt;return wt=null,n}function ef(n){if(n===yl||n===si)throw Error(c(483))}var xl=null,le=0;function hi(n){var a=le;return le+=1,xl===null&&(xl=[]),tf(xl,n,a)}function ee(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function mi(n,a){throw a.$$typeof===L?Error(c(525)):(n=Object.prototype.toString.call(a),Error(c(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function uf(n){function a(b,h){if(n){var p=b.deletions;p===null?(b.deletions=[h],b.flags|=16):p.push(h)}}function t(b,h){if(!n)return null;for(;h!==null;)a(b,h),h=h.sibling;return null}function l(b){for(var h=new Map;b!==null;)b.key!==null?h.set(b.key,b):h.set(b.index,b),b=b.sibling;return h}function e(b,h){return b=Za(b,h),b.index=0,b.sibling=null,b}function i(b,h,p){return b.index=p,n?(p=b.alternate,p!==null?(p=p.index,p<h?(b.flags|=67108866,h):p):(b.flags|=67108866,h)):(b.flags|=1048576,h)}function u(b){return n&&b.alternate===null&&(b.flags|=67108866),b}function r(b,h,p,T){return h===null||h.tag!==6?(h=$u(p,b.mode,T),h.return=b,h):(h=e(h,p),h.return=b,h)}function d(b,h,p,T){var X=p.type;return X===M?O(b,h,p.props.children,T,p.key):h!==null&&(h.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Rn&&Lt(X)===h.type)?(h=e(h,p.props),ee(h,p),h.return=b,h):(h=ui(p.type,p.key,p.props,null,b.mode,T),ee(h,p),h.return=b,h)}function g(b,h,p,T){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=Pu(p,b.mode,T),h.return=b,h):(h=e(h,p.children||[]),h.return=b,h)}function O(b,h,p,T,X){return h===null||h.tag!==7?(h=Xt(p,b.mode,T,X),h.return=b,h):(h=e(h,p),h.return=b,h)}function _(b,h,p){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=$u(""+h,b.mode,p),h.return=b,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Z:return p=ui(h.type,h.key,h.props,null,b.mode,p),ee(p,h),p.return=b,p;case U:return h=Pu(h,b.mode,p),h.return=b,h;case Rn:return h=Lt(h),_(b,h,p)}if(Ma(h)||In(h))return h=Xt(h,b.mode,p,null),h.return=b,h;if(typeof h.then=="function")return _(b,hi(h),p);if(h.$$typeof===cn)return _(b,ci(b,h),p);mi(b,h)}return null}function y(b,h,p,T){var X=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return X!==null?null:r(b,h,""+p,T);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Z:return p.key===X?d(b,h,p,T):null;case U:return p.key===X?g(b,h,p,T):null;case Rn:return p=Lt(p),y(b,h,p,T)}if(Ma(p)||In(p))return X!==null?null:O(b,h,p,T,null);if(typeof p.then=="function")return y(b,h,hi(p),T);if(p.$$typeof===cn)return y(b,h,ci(b,p),T);mi(b,p)}return null}function x(b,h,p,T,X){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return b=b.get(p)||null,r(h,b,""+T,X);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Z:return b=b.get(T.key===null?p:T.key)||null,d(h,b,T,X);case U:return b=b.get(T.key===null?p:T.key)||null,g(h,b,T,X);case Rn:return T=Lt(T),x(b,h,p,T,X)}if(Ma(T)||In(T))return b=b.get(p)||null,O(h,b,T,X,null);if(typeof T.then=="function")return x(b,h,p,hi(T),X);if(T.$$typeof===cn)return x(b,h,p,ci(h,T),X);mi(h,T)}return null}function j(b,h,p,T){for(var X=null,fn=null,Y=h,$=h=0,ln=null;Y!==null&&$<p.length;$++){Y.index>$?(ln=Y,Y=null):ln=Y.sibling;var sn=y(b,Y,p[$],T);if(sn===null){Y===null&&(Y=ln);break}n&&Y&&sn.alternate===null&&a(b,Y),h=i(sn,h,$),fn===null?X=sn:fn.sibling=sn,fn=sn,Y=ln}if($===p.length)return t(b,Y),on&&Va(b,$),X;if(Y===null){for(;$<p.length;$++)Y=_(b,p[$],T),Y!==null&&(h=i(Y,h,$),fn===null?X=Y:fn.sibling=Y,fn=Y);return on&&Va(b,$),X}for(Y=l(Y);$<p.length;$++)ln=x(Y,b,$,p[$],T),ln!==null&&(n&&ln.alternate!==null&&Y.delete(ln.key===null?$:ln.key),h=i(ln,h,$),fn===null?X=ln:fn.sibling=ln,fn=ln);return n&&Y.forEach(function(Nt){return a(b,Nt)}),on&&Va(b,$),X}function Q(b,h,p,T){if(p==null)throw Error(c(151));for(var X=null,fn=null,Y=h,$=h=0,ln=null,sn=p.next();Y!==null&&!sn.done;$++,sn=p.next()){Y.index>$?(ln=Y,Y=null):ln=Y.sibling;var Nt=y(b,Y,sn.value,T);if(Nt===null){Y===null&&(Y=ln);break}n&&Y&&Nt.alternate===null&&a(b,Y),h=i(Nt,h,$),fn===null?X=Nt:fn.sibling=Nt,fn=Nt,Y=ln}if(sn.done)return t(b,Y),on&&Va(b,$),X;if(Y===null){for(;!sn.done;$++,sn=p.next())sn=_(b,sn.value,T),sn!==null&&(h=i(sn,h,$),fn===null?X=sn:fn.sibling=sn,fn=sn);return on&&Va(b,$),X}for(Y=l(Y);!sn.done;$++,sn=p.next())sn=x(Y,b,$,sn.value,T),sn!==null&&(n&&sn.alternate!==null&&Y.delete(sn.key===null?$:sn.key),h=i(sn,h,$),fn===null?X=sn:fn.sibling=sn,fn=sn);return n&&Y.forEach(function(Bm){return a(b,Bm)}),on&&Va(b,$),X}function yn(b,h,p,T){if(typeof p=="object"&&p!==null&&p.type===M&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Z:n:{for(var X=p.key;h!==null;){if(h.key===X){if(X=p.type,X===M){if(h.tag===7){t(b,h.sibling),T=e(h,p.props.children),T.return=b,b=T;break n}}else if(h.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Rn&&Lt(X)===h.type){t(b,h.sibling),T=e(h,p.props),ee(T,p),T.return=b,b=T;break n}t(b,h);break}else a(b,h);h=h.sibling}p.type===M?(T=Xt(p.props.children,b.mode,T,p.key),T.return=b,b=T):(T=ui(p.type,p.key,p.props,null,b.mode,T),ee(T,p),T.return=b,b=T)}return u(b);case U:n:{for(X=p.key;h!==null;){if(h.key===X)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){t(b,h.sibling),T=e(h,p.children||[]),T.return=b,b=T;break n}else{t(b,h);break}else a(b,h);h=h.sibling}T=Pu(p,b.mode,T),T.return=b,b=T}return u(b);case Rn:return p=Lt(p),yn(b,h,p,T)}if(Ma(p))return j(b,h,p,T);if(In(p)){if(X=In(p),typeof X!="function")throw Error(c(150));return p=X.call(p),Q(b,h,p,T)}if(typeof p.then=="function")return yn(b,h,hi(p),T);if(p.$$typeof===cn)return yn(b,h,ci(b,p),T);mi(b,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,h!==null&&h.tag===6?(t(b,h.sibling),T=e(h,p),T.return=b,b=T):(t(b,h),T=$u(p,b.mode,T),T.return=b,b=T),u(b)):t(b,h)}return function(b,h,p,T){try{le=0;var X=yn(b,h,p,T);return xl=null,X}catch(Y){if(Y===yl||Y===si)throw Y;var fn=sa(29,Y,null,b.mode);return fn.lanes=T,fn.return=b,fn}}}var Kt=uf(!0),of=uf(!1),ht=!1;function fo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function so(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function mt(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function bt(n,a,t){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(dn&2)!==0){var e=l.pending;return e===null?a.next=a:(a.next=e.next,e.next=a),l.pending=a,a=ii(n),Zc(n,null,t),a}return ei(n,l,a,t),ii(n)}function ie(n,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=n.pendingLanes,t|=l,a.lanes=t,$r(n,t)}}function ho(n,a){var t=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var e=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?e=i=u:i=i.next=u,t=t.next}while(t!==null);i===null?e=i=a:i=i.next=a}else e=i=a;t={baseState:l.baseState,firstBaseUpdate:e,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=a:n.next=a,t.lastBaseUpdate=a}var mo=!1;function ue(){if(mo){var n=gl;if(n!==null)throw n}}function oe(n,a,t,l){mo=!1;var e=n.updateQueue;ht=!1;var i=e.firstBaseUpdate,u=e.lastBaseUpdate,r=e.shared.pending;if(r!==null){e.shared.pending=null;var d=r,g=d.next;d.next=null,u===null?i=g:u.next=g,u=d;var O=n.alternate;O!==null&&(O=O.updateQueue,r=O.lastBaseUpdate,r!==u&&(r===null?O.firstBaseUpdate=g:r.next=g,O.lastBaseUpdate=d))}if(i!==null){var _=e.baseState;u=0,O=g=d=null,r=i;do{var y=r.lane&-536870913,x=y!==r.lane;if(x?(tn&y)===y:(l&y)===y){y!==0&&y===pl&&(mo=!0),O!==null&&(O=O.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});n:{var j=n,Q=r;y=a;var yn=t;switch(Q.tag){case 1:if(j=Q.payload,typeof j=="function"){_=j.call(yn,_,y);break n}_=j;break n;case 3:j.flags=j.flags&-65537|128;case 0:if(j=Q.payload,y=typeof j=="function"?j.call(yn,_,y):j,y==null)break n;_=C({},_,y);break n;case 2:ht=!0}}y=r.callback,y!==null&&(n.flags|=64,x&&(n.flags|=8192),x=e.callbacks,x===null?e.callbacks=[y]:x.push(y))}else x={lane:y,tag:r.tag,payload:r.payload,callback:r.callback,next:null},O===null?(g=O=x,d=_):O=O.next=x,u|=y;if(r=r.next,r===null){if(r=e.shared.pending,r===null)break;x=r,r=x.next,x.next=null,e.lastBaseUpdate=x,e.shared.pending=null}}while(!0);O===null&&(d=_),e.baseState=d,e.firstBaseUpdate=g,e.lastBaseUpdate=O,i===null&&(e.shared.lanes=0),xt|=u,n.lanes=u,n.memoizedState=_}}function rf(n,a){if(typeof n!="function")throw Error(c(191,n));n.call(a)}function cf(n,a){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)rf(t[n],a)}var Sl=m(null),bi=m(0);function ff(n,a){n=at,R(bi,n),R(Sl,a),at=n|a.baseLanes}function bo(){R(bi,at),R(Sl,Sl.current)}function vo(){at=bi.current,E(Sl),E(bi)}var da=m(null),_a=null;function vt(n){var a=n.alternate;R(Hn,Hn.current&1),R(da,n),_a===null&&(a===null||Sl.current!==null||a.memoizedState!==null)&&(_a=n)}function po(n){R(Hn,Hn.current),R(da,n),_a===null&&(_a=n)}function sf(n){n.tag===22?(R(Hn,Hn.current),R(da,n),_a===null&&(_a=n)):pt()}function pt(){R(Hn,Hn.current),R(da,da.current)}function ha(n){E(da),_a===n&&(_a=null),E(Hn)}var Hn=m(0);function vi(n){for(var a=n;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||zr(t)||Tr(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ka=0,F=null,pn=null,Bn=null,pi=!1,Ol=!1,Jt=!1,gi=0,re=0,zl=null,Eh=0;function Dn(){throw Error(c(321))}function go(n,a){if(a===null)return!1;for(var t=0;t<a.length&&t<n.length;t++)if(!fa(n[t],a[t]))return!1;return!0}function yo(n,a,t,l,e,i){return Ka=i,F=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=n===null||n.memoizedState===null?Jf:Co,Jt=!1,i=t(l,e),Jt=!1,Ol&&(i=hf(a,t,l,e)),df(n),i}function df(n){z.H=se;var a=pn!==null&&pn.next!==null;if(Ka=0,Bn=pn=F=null,pi=!1,re=0,zl=null,a)throw Error(c(300));n===null||Yn||(n=n.dependencies,n!==null&&ri(n)&&(Yn=!0))}function hf(n,a,t,l){F=n;var e=0;do{if(Ol&&(zl=null),re=0,Ol=!1,25<=e)throw Error(c(301));if(e+=1,Bn=pn=null,n.updateQueue!=null){var i=n.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Wf,i=a(t,l)}while(Ol);return i}function Mh(){var n=z.H,a=n.useState()[0];return a=typeof a.then=="function"?ce(a):a,n=n.useState()[0],(pn!==null?pn.memoizedState:null)!==n&&(F.flags|=1024),a}function xo(){var n=gi!==0;return gi=0,n}function So(n,a,t){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~t}function Oo(n){if(pi){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}pi=!1}Ka=0,Bn=pn=F=null,Ol=!1,re=gi=0,zl=null}function Pn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bn===null?F.memoizedState=Bn=n:Bn=Bn.next=n,Bn}function qn(){if(pn===null){var n=F.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var a=Bn===null?F.memoizedState:Bn.next;if(a!==null)Bn=a,pn=n;else{if(n===null)throw F.alternate===null?Error(c(467)):Error(c(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},Bn===null?F.memoizedState=Bn=n:Bn=Bn.next=n}return Bn}function yi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ce(n){var a=re;return re+=1,zl===null&&(zl=[]),n=tf(zl,n,a),a=F,(Bn===null?a.memoizedState:Bn.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?Jf:Co),n}function xi(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ce(n);if(n.$$typeof===cn)return Kn(n)}throw Error(c(438,String(n)))}function zo(n){var a=null,t=F.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=F.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(e){return e.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=yi(),F.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(n),l=0;l<n;l++)t[l]=Pt;return a.index++,t}function Ja(n,a){return typeof a=="function"?a(n):a}function Si(n){var a=qn();return To(a,pn,n)}function To(n,a,t){var l=n.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=t;var e=n.baseQueue,i=l.pending;if(i!==null){if(e!==null){var u=e.next;e.next=i.next,i.next=u}a.baseQueue=e=i,l.pending=null}if(i=n.baseState,e===null)n.memoizedState=i;else{a=e.next;var r=u=null,d=null,g=a,O=!1;do{var _=g.lane&-536870913;if(_!==g.lane?(tn&_)===_:(Ka&_)===_){var y=g.revertLane;if(y===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),_===pl&&(O=!0);else if((Ka&y)===y){g=g.next,y===pl&&(O=!0);continue}else _={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},d===null?(r=d=_,u=i):d=d.next=_,F.lanes|=y,xt|=y;_=g.action,Jt&&t(i,_),i=g.hasEagerState?g.eagerState:t(i,_)}else y={lane:_,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},d===null?(r=d=y,u=i):d=d.next=y,F.lanes|=_,xt|=_;g=g.next}while(g!==null&&g!==a);if(d===null?u=i:d.next=r,!fa(i,n.memoizedState)&&(Yn=!0,O&&(t=gl,t!==null)))throw t;n.memoizedState=i,n.baseState=u,n.baseQueue=d,l.lastRenderedState=i}return e===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function _o(n){var a=qn(),t=a.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=n;var l=t.dispatch,e=t.pending,i=a.memoizedState;if(e!==null){t.pending=null;var u=e=e.next;do i=n(i,u.action),u=u.next;while(u!==e);fa(i,a.memoizedState)||(Yn=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i}return[i,l]}function mf(n,a,t){var l=F,e=qn(),i=on;if(i){if(t===void 0)throw Error(c(407));t=t()}else t=a();var u=!fa((pn||e).memoizedState,t);if(u&&(e.memoizedState=t,Yn=!0),e=e.queue,Mo(pf.bind(null,l,e,n),[n]),e.getSnapshot!==a||u||Bn!==null&&Bn.memoizedState.tag&1){if(l.flags|=2048,Tl(9,{destroy:void 0},vf.bind(null,l,e,t,a),null),Sn===null)throw Error(c(349));i||(Ka&127)!==0||bf(l,a,t)}return t}function bf(n,a,t){n.flags|=16384,n={getSnapshot:a,value:t},a=F.updateQueue,a===null?(a=yi(),F.updateQueue=a,a.stores=[n]):(t=a.stores,t===null?a.stores=[n]:t.push(n))}function vf(n,a,t,l){a.value=t,a.getSnapshot=l,gf(a)&&yf(n)}function pf(n,a,t){return t(function(){gf(a)&&yf(n)})}function gf(n){var a=n.getSnapshot;n=n.value;try{var t=a();return!fa(n,t)}catch{return!0}}function yf(n){var a=kt(n,2);a!==null&&ua(a,n,2)}function Ao(n){var a=Pn();if(typeof n=="function"){var t=n;if(n=t(),Jt){ut(!0);try{t()}finally{ut(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:n},a}function xf(n,a,t,l){return n.baseState=t,To(n,pn,typeof l=="function"?l:Ja)}function Dh(n,a,t,l,e){if(Ti(n))throw Error(c(485));if(n=a.action,n!==null){var i={payload:e,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};z.T!==null?t(!0):i.isTransition=!1,l(i),t=a.pending,t===null?(i.next=a.pending=i,Sf(a,i)):(i.next=t.next,a.pending=t.next=i)}}function Sf(n,a){var t=a.action,l=a.payload,e=n.state;if(a.isTransition){var i=z.T,u={};z.T=u;try{var r=t(e,l),d=z.S;d!==null&&d(u,r),Of(n,a,r)}catch(g){Eo(n,a,g)}finally{i!==null&&u.types!==null&&(i.types=u.types),z.T=i}}else try{i=t(e,l),Of(n,a,i)}catch(g){Eo(n,a,g)}}function Of(n,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){zf(n,a,l)},function(l){return Eo(n,a,l)}):zf(n,a,t)}function zf(n,a,t){a.status="fulfilled",a.value=t,Tf(a),n.state=t,a=n.pending,a!==null&&(t=a.next,t===a?n.pending=null:(t=t.next,a.next=t,Sf(n,t)))}function Eo(n,a,t){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,Tf(a),a=a.next;while(a!==l)}n.action=null}function Tf(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function _f(n,a){return a}function Af(n,a){if(on){var t=Sn.formState;if(t!==null){n:{var l=F;if(on){if(zn){a:{for(var e=zn,i=Ta;e.nodeType!==8;){if(!i){e=null;break a}if(e=Aa(e.nextSibling),e===null){e=null;break a}}i=e.data,e=i==="F!"||i==="F"?e:null}if(e){zn=Aa(e.nextSibling),l=e.data==="F!";break n}}st(l)}l=!1}l&&(a=t[0])}}return t=Pn(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_f,lastRenderedState:a},t.queue=l,t=Lf.bind(null,F,l),l.dispatch=t,l=Ao(!1),i=qo.bind(null,F,!1,l.queue),l=Pn(),e={state:a,dispatch:null,action:n,pending:null},l.queue=e,t=Dh.bind(null,F,e,i,t),e.dispatch=t,l.memoizedState=n,[a,t,!1]}function Ef(n){var a=qn();return Mf(a,pn,n)}function Mf(n,a,t){if(a=To(n,a,_f)[0],n=Si(Ja)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=ce(a)}catch(u){throw u===yl?si:u}else l=a;a=qn();var e=a.queue,i=e.dispatch;return t!==a.memoizedState&&(F.flags|=2048,Tl(9,{destroy:void 0},Nh.bind(null,e,t),null)),[l,i,n]}function Nh(n,a){n.action=a}function Df(n){var a=qn(),t=pn;if(t!==null)return Mf(a,t,n);qn(),a=a.memoizedState,t=qn();var l=t.queue.dispatch;return t.memoizedState=n,[a,l,!1]}function Tl(n,a,t,l){return n={tag:n,create:t,deps:l,inst:a,next:null},a=F.updateQueue,a===null&&(a=yi(),F.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=n.next=n:(l=t.next,t.next=n,n.next=l,a.lastEffect=n),n}function Nf(){return qn().memoizedState}function Oi(n,a,t,l){var e=Pn();F.flags|=n,e.memoizedState=Tl(1|a,{destroy:void 0},t,l===void 0?null:l)}function zi(n,a,t,l){var e=qn();l=l===void 0?null:l;var i=e.memoizedState.inst;pn!==null&&l!==null&&go(l,pn.memoizedState.deps)?e.memoizedState=Tl(a,i,t,l):(F.flags|=n,e.memoizedState=Tl(1|a,i,t,l))}function Uf(n,a){Oi(8390656,8,n,a)}function Mo(n,a){zi(2048,8,n,a)}function Uh(n){F.flags|=4;var a=F.updateQueue;if(a===null)a=yi(),F.updateQueue=a,a.events=[n];else{var t=a.events;t===null?a.events=[n]:t.push(n)}}function Hf(n){var a=qn().memoizedState;return Uh({ref:a,nextImpl:n}),function(){if((dn&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}function qf(n,a){return zi(4,2,n,a)}function Cf(n,a){return zi(4,4,n,a)}function Rf(n,a){if(typeof a=="function"){n=n();var t=a(n);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function jf(n,a,t){t=t!=null?t.concat([n]):null,zi(4,4,Rf.bind(null,a,n),t)}function Do(){}function Bf(n,a){var t=qn();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&go(a,l[1])?l[0]:(t.memoizedState=[n,a],n)}function Yf(n,a){var t=qn();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&go(a,l[1]))return l[0];if(l=n(),Jt){ut(!0);try{n()}finally{ut(!1)}}return t.memoizedState=[l,a],l}function No(n,a,t){return t===void 0||(Ka&1073741824)!==0&&(tn&261930)===0?n.memoizedState=a:(n.memoizedState=t,n=ks(),F.lanes|=n,xt|=n,t)}function kf(n,a,t,l){return fa(t,a)?t:Sl.current!==null?(n=No(n,t,l),fa(n,a)||(Yn=!0),n):(Ka&42)===0||(Ka&1073741824)!==0&&(tn&261930)===0?(Yn=!0,n.memoizedState=t):(n=ks(),F.lanes|=n,xt|=n,a)}function Xf(n,a,t,l,e){var i=q.p;q.p=i!==0&&8>i?i:8;var u=z.T,r={};z.T=r,qo(n,!1,a,t);try{var d=e(),g=z.S;if(g!==null&&g(r,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var O=Ah(d,l);fe(n,a,O,va(n))}else fe(n,a,l,va(n))}catch(_){fe(n,a,{then:function(){},status:"rejected",reason:_},va())}finally{q.p=i,u!==null&&r.types!==null&&(u.types=r.types),z.T=u}}function Hh(){}function Uo(n,a,t,l){if(n.tag!==5)throw Error(c(476));var e=Gf(n).queue;Xf(n,e,a,V,t===null?Hh:function(){return Qf(n),t(l)})}function Gf(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:V},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:t},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function Qf(n){var a=Gf(n);a.next===null&&(a=n.alternate.memoizedState),fe(n,a.next.queue,{},va())}function Ho(){return Kn(Ee)}function Zf(){return qn().memoizedState}function Vf(){return qn().memoizedState}function qh(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var t=va();n=mt(t);var l=bt(a,n,t);l!==null&&(ua(l,a,t),ie(l,a,t)),a={cache:uo()},n.payload=a;return}a=a.return}}function Ch(n,a,t){var l=va();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ti(n)?wf(a,t):(t=Wu(n,a,t,l),t!==null&&(ua(t,n,l),Kf(t,a,l)))}function Lf(n,a,t){var l=va();fe(n,a,t,l)}function fe(n,a,t,l){var e={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ti(n))wf(a,e);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var u=a.lastRenderedState,r=i(u,t);if(e.hasEagerState=!0,e.eagerState=r,fa(r,u))return ei(n,a,e,0),Sn===null&&li(),!1}catch{}if(t=Wu(n,a,e,l),t!==null)return ua(t,n,l),Kf(t,a,l),!0}return!1}function qo(n,a,t,l){if(l={lane:2,revertLane:sr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ti(n)){if(a)throw Error(c(479))}else a=Wu(n,t,l,2),a!==null&&ua(a,n,2)}function Ti(n){var a=n.alternate;return n===F||a!==null&&a===F}function wf(n,a){Ol=pi=!0;var t=n.pending;t===null?a.next=a:(a.next=t.next,t.next=a),n.pending=a}function Kf(n,a,t){if((t&4194048)!==0){var l=a.lanes;l&=n.pendingLanes,t|=l,a.lanes=t,$r(n,t)}}var se={readContext:Kn,use:xi,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useLayoutEffect:Dn,useInsertionEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useSyncExternalStore:Dn,useId:Dn,useHostTransitionStatus:Dn,useFormState:Dn,useActionState:Dn,useOptimistic:Dn,useMemoCache:Dn,useCacheRefresh:Dn};se.useEffectEvent=Dn;var Jf={readContext:Kn,use:xi,useCallback:function(n,a){return Pn().memoizedState=[n,a===void 0?null:a],n},useContext:Kn,useEffect:Uf,useImperativeHandle:function(n,a,t){t=t!=null?t.concat([n]):null,Oi(4194308,4,Rf.bind(null,a,n),t)},useLayoutEffect:function(n,a){return Oi(4194308,4,n,a)},useInsertionEffect:function(n,a){Oi(4,2,n,a)},useMemo:function(n,a){var t=Pn();a=a===void 0?null:a;var l=n();if(Jt){ut(!0);try{n()}finally{ut(!1)}}return t.memoizedState=[l,a],l},useReducer:function(n,a,t){var l=Pn();if(t!==void 0){var e=t(a);if(Jt){ut(!0);try{t(a)}finally{ut(!1)}}}else e=a;return l.memoizedState=l.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},l.queue=n,n=n.dispatch=Ch.bind(null,F,n),[l.memoizedState,n]},useRef:function(n){var a=Pn();return n={current:n},a.memoizedState=n},useState:function(n){n=Ao(n);var a=n.queue,t=Lf.bind(null,F,a);return a.dispatch=t,[n.memoizedState,t]},useDebugValue:Do,useDeferredValue:function(n,a){var t=Pn();return No(t,n,a)},useTransition:function(){var n=Ao(!1);return n=Xf.bind(null,F,n.queue,!0,!1),Pn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,t){var l=F,e=Pn();if(on){if(t===void 0)throw Error(c(407));t=t()}else{if(t=a(),Sn===null)throw Error(c(349));(tn&127)!==0||bf(l,a,t)}e.memoizedState=t;var i={value:t,getSnapshot:a};return e.queue=i,Uf(pf.bind(null,l,i,n),[n]),l.flags|=2048,Tl(9,{destroy:void 0},vf.bind(null,l,i,t,a),null),t},useId:function(){var n=Pn(),a=Sn.identifierPrefix;if(on){var t=ja,l=Ra;t=(l&~(1<<32-ca(l)-1)).toString(32)+t,a="_"+a+"R_"+t,t=gi++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Eh++,a="_"+a+"r_"+t.toString(32)+"_";return n.memoizedState=a},useHostTransitionStatus:Ho,useFormState:Af,useActionState:Af,useOptimistic:function(n){var a=Pn();a.memoizedState=a.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=qo.bind(null,F,!0,t),t.dispatch=a,[n,a]},useMemoCache:zo,useCacheRefresh:function(){return Pn().memoizedState=qh.bind(null,F)},useEffectEvent:function(n){var a=Pn(),t={impl:n};return a.memoizedState=t,function(){if((dn&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}},Co={readContext:Kn,use:xi,useCallback:Bf,useContext:Kn,useEffect:Mo,useImperativeHandle:jf,useInsertionEffect:qf,useLayoutEffect:Cf,useMemo:Yf,useReducer:Si,useRef:Nf,useState:function(){return Si(Ja)},useDebugValue:Do,useDeferredValue:function(n,a){var t=qn();return kf(t,pn.memoizedState,n,a)},useTransition:function(){var n=Si(Ja)[0],a=qn().memoizedState;return[typeof n=="boolean"?n:ce(n),a]},useSyncExternalStore:mf,useId:Zf,useHostTransitionStatus:Ho,useFormState:Ef,useActionState:Ef,useOptimistic:function(n,a){var t=qn();return xf(t,pn,n,a)},useMemoCache:zo,useCacheRefresh:Vf};Co.useEffectEvent=Hf;var Wf={readContext:Kn,use:xi,useCallback:Bf,useContext:Kn,useEffect:Mo,useImperativeHandle:jf,useInsertionEffect:qf,useLayoutEffect:Cf,useMemo:Yf,useReducer:_o,useRef:Nf,useState:function(){return _o(Ja)},useDebugValue:Do,useDeferredValue:function(n,a){var t=qn();return pn===null?No(t,n,a):kf(t,pn.memoizedState,n,a)},useTransition:function(){var n=_o(Ja)[0],a=qn().memoizedState;return[typeof n=="boolean"?n:ce(n),a]},useSyncExternalStore:mf,useId:Zf,useHostTransitionStatus:Ho,useFormState:Df,useActionState:Df,useOptimistic:function(n,a){var t=qn();return pn!==null?xf(t,pn,n,a):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:zo,useCacheRefresh:Vf};Wf.useEffectEvent=Hf;function Ro(n,a,t,l){a=n.memoizedState,t=t(l,a),t=t==null?a:C({},a,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var jo={enqueueSetState:function(n,a,t){n=n._reactInternals;var l=va(),e=mt(l);e.payload=a,t!=null&&(e.callback=t),a=bt(n,e,l),a!==null&&(ua(a,n,l),ie(a,n,l))},enqueueReplaceState:function(n,a,t){n=n._reactInternals;var l=va(),e=mt(l);e.tag=1,e.payload=a,t!=null&&(e.callback=t),a=bt(n,e,l),a!==null&&(ua(a,n,l),ie(a,n,l))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var t=va(),l=mt(t);l.tag=2,a!=null&&(l.callback=a),a=bt(n,l,t),a!==null&&(ua(a,n,t),ie(a,n,t))}};function Ff(n,a,t,l,e,i,u){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,i,u):a.prototype&&a.prototype.isPureReactComponent?!$l(t,l)||!$l(e,i):!0}function $f(n,a,t,l){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==n&&jo.enqueueReplaceState(a,a.state,null)}function Wt(n,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(n=n.defaultProps){t===a&&(t=C({},t));for(var e in n)t[e]===void 0&&(t[e]=n[e])}return t}function Pf(n){ti(n)}function If(n){console.error(n)}function ns(n){ti(n)}function _i(n,a){try{var t=n.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function as(n,a,t){try{var l=n.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Bo(n,a,t){return t=mt(t),t.tag=3,t.payload={element:null},t.callback=function(){_i(n,a)},t}function ts(n){return n=mt(n),n.tag=3,n}function ls(n,a,t,l){var e=t.type.getDerivedStateFromError;if(typeof e=="function"){var i=l.value;n.payload=function(){return e(i)},n.callback=function(){as(a,t,l)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){as(a,t,l),typeof e!="function"&&(St===null?St=new Set([this]):St.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function Rh(n,a,t,l,e){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&vl(a,t,e,!0),t=da.current,t!==null){switch(t.tag){case 31:case 13:return _a===null?Bi():t.alternate===null&&Nn===0&&(Nn=3),t.flags&=-257,t.flags|=65536,t.lanes=e,l===di?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),rr(n,l,e)),!1;case 22:return t.flags|=65536,l===di?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),rr(n,l,e)),!1}throw Error(c(435,t.tag))}return rr(n,l,e),Bi(),!1}if(on)return a=da.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=e,l!==ao&&(n=Error(c(422),{cause:l}),ne(Sa(n,t)))):(l!==ao&&(a=Error(c(423),{cause:l}),ne(Sa(a,t))),n=n.current.alternate,n.flags|=65536,e&=-e,n.lanes|=e,l=Sa(l,t),e=Bo(n.stateNode,l,e),ho(n,e),Nn!==4&&(Nn=2)),!1;var i=Error(c(520),{cause:l});if(i=Sa(i,t),ye===null?ye=[i]:ye.push(i),Nn!==4&&(Nn=2),a===null)return!0;l=Sa(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,n=e&-e,t.lanes|=n,n=Bo(t.stateNode,l,n),ho(t,n),!1;case 1:if(a=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(St===null||!St.has(i))))return t.flags|=65536,e&=-e,t.lanes|=e,e=ts(e),ls(e,n,t,l),ho(t,e),!1}t=t.return}while(t!==null);return!1}var Yo=Error(c(461)),Yn=!1;function Jn(n,a,t,l){a.child=n===null?of(a,null,t,l):Kt(a,n.child,t,l)}function es(n,a,t,l,e){t=t.render;var i=a.ref;if("ref"in l){var u={};for(var r in l)r!=="ref"&&(u[r]=l[r])}else u=l;return Zt(a),l=yo(n,a,t,u,i,e),r=xo(),n!==null&&!Yn?(So(n,a,e),Wa(n,a,e)):(on&&r&&Iu(a),a.flags|=1,Jn(n,a,l,e),a.child)}function is(n,a,t,l,e){if(n===null){var i=t.type;return typeof i=="function"&&!Fu(i)&&i.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=i,us(n,a,i,l,e)):(n=ui(t.type,null,l,a,a.mode,e),n.ref=a.ref,n.return=a,a.child=n)}if(i=n.child,!wo(n,e)){var u=i.memoizedProps;if(t=t.compare,t=t!==null?t:$l,t(u,l)&&n.ref===a.ref)return Wa(n,a,e)}return a.flags|=1,n=Za(i,l),n.ref=a.ref,n.return=a,a.child=n}function us(n,a,t,l,e){if(n!==null){var i=n.memoizedProps;if($l(i,l)&&n.ref===a.ref)if(Yn=!1,a.pendingProps=l=i,wo(n,e))(n.flags&131072)!==0&&(Yn=!0);else return a.lanes=n.lanes,Wa(n,a,e)}return ko(n,a,t,l,e)}function os(n,a,t,l){var e=l.children,i=n!==null?n.memoizedState:null;if(n===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,n!==null){for(l=a.child=n.child,e=0;l!==null;)e=e|l.lanes|l.childLanes,l=l.sibling;l=e&~i}else l=0,a.child=null;return rs(n,a,i,t,l)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&fi(a,i!==null?i.cachePool:null),i!==null?ff(a,i):bo(),sf(a);else return l=a.lanes=536870912,rs(n,a,i!==null?i.baseLanes|t:t,t,l)}else i!==null?(fi(a,i.cachePool),ff(a,i),pt(),a.memoizedState=null):(n!==null&&fi(a,null),bo(),pt());return Jn(n,a,e,t),a.child}function de(n,a){return n!==null&&n.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function rs(n,a,t,l,e){var i=ro();return i=i===null?null:{parent:jn._currentValue,pool:i},a.memoizedState={baseLanes:t,cachePool:i},n!==null&&fi(a,null),bo(),sf(a),n!==null&&vl(n,a,l,!0),a.childLanes=e,null}function Ai(n,a){return a=Mi({mode:a.mode,children:a.children},n.mode),a.ref=n.ref,n.child=a,a.return=n,a}function cs(n,a,t){return Kt(a,n.child,null,t),n=Ai(a,a.pendingProps),n.flags|=2,ha(a),a.memoizedState=null,n}function jh(n,a,t){var l=a.pendingProps,e=(a.flags&128)!==0;if(a.flags&=-129,n===null){if(on){if(l.mode==="hidden")return n=Ai(a,l),a.lanes=536870912,de(null,n);if(po(a),(n=zn)?(n=S0(n,Ta),n=n!==null&&n.data==="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:ct!==null?{id:Ra,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},t=Lc(n),t.return=a,a.child=t,wn=a,zn=null)):n=null,n===null)throw st(a);return a.lanes=536870912,null}return Ai(a,l)}var i=n.memoizedState;if(i!==null){var u=i.dehydrated;if(po(a),e)if(a.flags&256)a.flags&=-257,a=cs(n,a,t);else if(a.memoizedState!==null)a.child=n.child,a.flags|=128,a=null;else throw Error(c(558));else if(Yn||vl(n,a,t,!1),e=(t&n.childLanes)!==0,Yn||e){if(l=Sn,l!==null&&(u=Pr(l,t),u!==0&&u!==i.retryLane))throw i.retryLane=u,kt(n,u),ua(l,n,u),Yo;Bi(),a=cs(n,a,t)}else n=i.treeContext,zn=Aa(u.nextSibling),wn=a,on=!0,ft=null,Ta=!1,n!==null&&Jc(a,n),a=Ai(a,l),a.flags|=4096;return a}return n=Za(n.child,{mode:l.mode,children:l.children}),n.ref=a.ref,a.child=n,n.return=a,n}function Ei(n,a){var t=a.ref;if(t===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(n===null||n.ref!==t)&&(a.flags|=4194816)}}function ko(n,a,t,l,e){return Zt(a),t=yo(n,a,t,l,void 0,e),l=xo(),n!==null&&!Yn?(So(n,a,e),Wa(n,a,e)):(on&&l&&Iu(a),a.flags|=1,Jn(n,a,t,e),a.child)}function fs(n,a,t,l,e,i){return Zt(a),a.updateQueue=null,t=hf(a,l,t,e),df(n),l=xo(),n!==null&&!Yn?(So(n,a,i),Wa(n,a,i)):(on&&l&&Iu(a),a.flags|=1,Jn(n,a,t,i),a.child)}function ss(n,a,t,l,e){if(Zt(a),a.stateNode===null){var i=dl,u=t.contextType;typeof u=="object"&&u!==null&&(i=Kn(u)),i=new t(l,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=jo,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=l,i.state=a.memoizedState,i.refs={},fo(a),u=t.contextType,i.context=typeof u=="object"&&u!==null?Kn(u):dl,i.state=a.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Ro(a,t,u,l),i.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&jo.enqueueReplaceState(i,i.state,null),oe(a,l,i,e),ue(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(n===null){i=a.stateNode;var r=a.memoizedProps,d=Wt(t,r);i.props=d;var g=i.context,O=t.contextType;u=dl,typeof O=="object"&&O!==null&&(u=Kn(O));var _=t.getDerivedStateFromProps;O=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=a.pendingProps!==r,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||g!==u)&&$f(a,i,l,u),ht=!1;var y=a.memoizedState;i.state=y,oe(a,l,i,e),ue(),g=a.memoizedState,r||y!==g||ht?(typeof _=="function"&&(Ro(a,t,_,l),g=a.memoizedState),(d=ht||Ff(a,t,d,l,y,g,u))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=g),i.props=l,i.state=g,i.context=u,l=d):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{i=a.stateNode,so(n,a),u=a.memoizedProps,O=Wt(t,u),i.props=O,_=a.pendingProps,y=i.context,g=t.contextType,d=dl,typeof g=="object"&&g!==null&&(d=Kn(g)),r=t.getDerivedStateFromProps,(g=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==_||y!==d)&&$f(a,i,l,d),ht=!1,y=a.memoizedState,i.state=y,oe(a,l,i,e),ue();var x=a.memoizedState;u!==_||y!==x||ht||n!==null&&n.dependencies!==null&&ri(n.dependencies)?(typeof r=="function"&&(Ro(a,t,r,l),x=a.memoizedState),(O=ht||Ff(a,t,O,l,y,x,d)||n!==null&&n.dependencies!==null&&ri(n.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,x,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,x,d)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===n.memoizedProps&&y===n.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&y===n.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=x),i.props=l,i.state=x,i.context=d,l=O):(typeof i.componentDidUpdate!="function"||u===n.memoizedProps&&y===n.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&y===n.memoizedState||(a.flags|=1024),l=!1)}return i=l,Ei(n,a),l=(a.flags&128)!==0,i||l?(i=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,n!==null&&l?(a.child=Kt(a,n.child,null,e),a.child=Kt(a,null,t,e)):Jn(n,a,t,e),a.memoizedState=i.state,n=a.child):n=Wa(n,a,e),n}function ds(n,a,t,l){return Gt(),a.flags|=256,Jn(n,a,t,l),a.child}var Xo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Go(n){return{baseLanes:n,cachePool:nf()}}function Qo(n,a,t){return n=n!==null?n.childLanes&~t:0,a&&(n|=ba),n}function hs(n,a,t){var l=a.pendingProps,e=!1,i=(a.flags&128)!==0,u;if((u=i)||(u=n!==null&&n.memoizedState===null?!1:(Hn.current&2)!==0),u&&(e=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,n===null){if(on){if(e?vt(a):pt(),(n=zn)?(n=S0(n,Ta),n=n!==null&&n.data!=="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:ct!==null?{id:Ra,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},t=Lc(n),t.return=a,a.child=t,wn=a,zn=null)):n=null,n===null)throw st(a);return Tr(n)?a.lanes=32:a.lanes=536870912,null}var r=l.children;return l=l.fallback,e?(pt(),e=a.mode,r=Mi({mode:"hidden",children:r},e),l=Xt(l,e,t,null),r.return=a,l.return=a,r.sibling=l,a.child=r,l=a.child,l.memoizedState=Go(t),l.childLanes=Qo(n,u,t),a.memoizedState=Xo,de(null,l)):(vt(a),Zo(a,r))}var d=n.memoizedState;if(d!==null&&(r=d.dehydrated,r!==null)){if(i)a.flags&256?(vt(a),a.flags&=-257,a=Vo(n,a,t)):a.memoizedState!==null?(pt(),a.child=n.child,a.flags|=128,a=null):(pt(),r=l.fallback,e=a.mode,l=Mi({mode:"visible",children:l.children},e),r=Xt(r,e,t,null),r.flags|=2,l.return=a,r.return=a,l.sibling=r,a.child=l,Kt(a,n.child,null,t),l=a.child,l.memoizedState=Go(t),l.childLanes=Qo(n,u,t),a.memoizedState=Xo,a=de(null,l));else if(vt(a),Tr(r)){if(u=r.nextSibling&&r.nextSibling.dataset,u)var g=u.dgst;u=g,l=Error(c(419)),l.stack="",l.digest=u,ne({value:l,source:null,stack:null}),a=Vo(n,a,t)}else if(Yn||vl(n,a,t,!1),u=(t&n.childLanes)!==0,Yn||u){if(u=Sn,u!==null&&(l=Pr(u,t),l!==0&&l!==d.retryLane))throw d.retryLane=l,kt(n,l),ua(u,n,l),Yo;zr(r)||Bi(),a=Vo(n,a,t)}else zr(r)?(a.flags|=192,a.child=n.child,a=null):(n=d.treeContext,zn=Aa(r.nextSibling),wn=a,on=!0,ft=null,Ta=!1,n!==null&&Jc(a,n),a=Zo(a,l.children),a.flags|=4096);return a}return e?(pt(),r=l.fallback,e=a.mode,d=n.child,g=d.sibling,l=Za(d,{mode:"hidden",children:l.children}),l.subtreeFlags=d.subtreeFlags&65011712,g!==null?r=Za(g,r):(r=Xt(r,e,t,null),r.flags|=2),r.return=a,l.return=a,l.sibling=r,a.child=l,de(null,l),l=a.child,r=n.child.memoizedState,r===null?r=Go(t):(e=r.cachePool,e!==null?(d=jn._currentValue,e=e.parent!==d?{parent:d,pool:d}:e):e=nf(),r={baseLanes:r.baseLanes|t,cachePool:e}),l.memoizedState=r,l.childLanes=Qo(n,u,t),a.memoizedState=Xo,de(n.child,l)):(vt(a),t=n.child,n=t.sibling,t=Za(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,n!==null&&(u=a.deletions,u===null?(a.deletions=[n],a.flags|=16):u.push(n)),a.child=t,a.memoizedState=null,t)}function Zo(n,a){return a=Mi({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function Mi(n,a){return n=sa(22,n,null,a),n.lanes=0,n}function Vo(n,a,t){return Kt(a,n.child,null,t),n=Zo(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function ms(n,a,t){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a),eo(n.return,a,t)}function Lo(n,a,t,l,e,i){var u=n.memoizedState;u===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:e,treeForkCount:i}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=t,u.tailMode=e,u.treeForkCount=i)}function bs(n,a,t){var l=a.pendingProps,e=l.revealOrder,i=l.tail;l=l.children;var u=Hn.current,r=(u&2)!==0;if(r?(u=u&1|2,a.flags|=128):u&=1,R(Hn,u),Jn(n,a,l,t),l=on?Il:0,!r&&n!==null&&(n.flags&128)!==0)n:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ms(n,t,a);else if(n.tag===19)ms(n,t,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break n;for(;n.sibling===null;){if(n.return===null||n.return===a)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(e){case"forwards":for(t=a.child,e=null;t!==null;)n=t.alternate,n!==null&&vi(n)===null&&(e=t),t=t.sibling;t=e,t===null?(e=a.child,a.child=null):(e=t.sibling,t.sibling=null),Lo(a,!1,e,t,i,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,e=a.child,a.child=null;e!==null;){if(n=e.alternate,n!==null&&vi(n)===null){a.child=e;break}n=e.sibling,e.sibling=t,t=e,e=n}Lo(a,!0,t,null,i,l);break;case"together":Lo(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function Wa(n,a,t){if(n!==null&&(a.dependencies=n.dependencies),xt|=a.lanes,(t&a.childLanes)===0)if(n!==null){if(vl(n,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(c(153));if(a.child!==null){for(n=a.child,t=Za(n,n.pendingProps),a.child=t,t.return=a;n.sibling!==null;)n=n.sibling,t=t.sibling=Za(n,n.pendingProps),t.return=a;t.sibling=null}return a.child}function wo(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&ri(n)))}function Bh(n,a,t){switch(a.tag){case 3:$n(a,a.stateNode.containerInfo),dt(a,jn,n.memoizedState.cache),Gt();break;case 27:case 5:Yl(a);break;case 4:$n(a,a.stateNode.containerInfo);break;case 10:dt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,po(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(vt(a),a.flags|=128,null):(t&a.child.childLanes)!==0?hs(n,a,t):(vt(a),n=Wa(n,a,t),n!==null?n.sibling:null);vt(a);break;case 19:var e=(n.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(vl(n,a,t,!1),l=(t&a.childLanes)!==0),e){if(l)return bs(n,a,t);a.flags|=128}if(e=a.memoizedState,e!==null&&(e.rendering=null,e.tail=null,e.lastEffect=null),R(Hn,Hn.current),l)break;return null;case 22:return a.lanes=0,os(n,a,t,a.pendingProps);case 24:dt(a,jn,n.memoizedState.cache)}return Wa(n,a,t)}function vs(n,a,t){if(n!==null)if(n.memoizedProps!==a.pendingProps)Yn=!0;else{if(!wo(n,t)&&(a.flags&128)===0)return Yn=!1,Bh(n,a,t);Yn=(n.flags&131072)!==0}else Yn=!1,on&&(a.flags&1048576)!==0&&Kc(a,Il,a.index);switch(a.lanes=0,a.tag){case 16:n:{var l=a.pendingProps;if(n=Lt(a.elementType),a.type=n,typeof n=="function")Fu(n)?(l=Wt(n,l),a.tag=1,a=ss(null,a,n,l,t)):(a.tag=0,a=ko(null,a,n,l,t));else{if(n!=null){var e=n.$$typeof;if(e===Cn){a.tag=11,a=es(null,a,n,l,t);break n}else if(e===J){a.tag=14,a=is(null,a,n,l,t);break n}}throw a=ka(n)||n,Error(c(306,a,""))}}return a;case 0:return ko(n,a,a.type,a.pendingProps,t);case 1:return l=a.type,e=Wt(l,a.pendingProps),ss(n,a,l,e,t);case 3:n:{if($n(a,a.stateNode.containerInfo),n===null)throw Error(c(387));l=a.pendingProps;var i=a.memoizedState;e=i.element,so(n,a),oe(a,l,null,t);var u=a.memoizedState;if(l=u.cache,dt(a,jn,l),l!==i.cache&&io(a,[jn],t,!0),ue(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=ds(n,a,l,t);break n}else if(l!==e){e=Sa(Error(c(424)),a),ne(e),a=ds(n,a,l,t);break n}else for(n=a.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,zn=Aa(n.firstChild),wn=a,on=!0,ft=null,Ta=!0,t=of(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Gt(),l===e){a=Wa(n,a,t);break n}Jn(n,a,l,t)}a=a.child}return a;case 26:return Ei(n,a),n===null?(t=E0(a.type,null,a.pendingProps,null))?a.memoizedState=t:on||(t=a.type,n=a.pendingProps,l=Vi(P.current).createElement(t),l[Ln]=a,l[na]=n,Wn(l,t,n),Zn(l),a.stateNode=l):a.memoizedState=E0(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return Yl(a),n===null&&on&&(l=a.stateNode=T0(a.type,a.pendingProps,P.current),wn=a,Ta=!0,e=zn,_t(a.type)?(_r=e,zn=Aa(l.firstChild)):zn=e),Jn(n,a,a.pendingProps.children,t),Ei(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&on&&((e=l=zn)&&(l=hm(l,a.type,a.pendingProps,Ta),l!==null?(a.stateNode=l,wn=a,zn=Aa(l.firstChild),Ta=!1,e=!0):e=!1),e||st(a)),Yl(a),e=a.type,i=a.pendingProps,u=n!==null?n.memoizedProps:null,l=i.children,xr(e,i)?l=null:u!==null&&xr(e,u)&&(a.flags|=32),a.memoizedState!==null&&(e=yo(n,a,Mh,null,null,t),Ee._currentValue=e),Ei(n,a),Jn(n,a,l,t),a.child;case 6:return n===null&&on&&((n=t=zn)&&(t=mm(t,a.pendingProps,Ta),t!==null?(a.stateNode=t,wn=a,zn=null,n=!0):n=!1),n||st(a)),null;case 13:return hs(n,a,t);case 4:return $n(a,a.stateNode.containerInfo),l=a.pendingProps,n===null?a.child=Kt(a,null,l,t):Jn(n,a,l,t),a.child;case 11:return es(n,a,a.type,a.pendingProps,t);case 7:return Jn(n,a,a.pendingProps,t),a.child;case 8:return Jn(n,a,a.pendingProps.children,t),a.child;case 12:return Jn(n,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,dt(a,a.type,l.value),Jn(n,a,l.children,t),a.child;case 9:return e=a.type._context,l=a.pendingProps.children,Zt(a),e=Kn(e),l=l(e),a.flags|=1,Jn(n,a,l,t),a.child;case 14:return is(n,a,a.type,a.pendingProps,t);case 15:return us(n,a,a.type,a.pendingProps,t);case 19:return bs(n,a,t);case 31:return jh(n,a,t);case 22:return os(n,a,t,a.pendingProps);case 24:return Zt(a),l=Kn(jn),n===null?(e=ro(),e===null&&(e=Sn,i=uo(),e.pooledCache=i,i.refCount++,i!==null&&(e.pooledCacheLanes|=t),e=i),a.memoizedState={parent:l,cache:e},fo(a),dt(a,jn,e)):((n.lanes&t)!==0&&(so(n,a),oe(a,null,null,t),ue()),e=n.memoizedState,i=a.memoizedState,e.parent!==l?(e={parent:l,cache:l},a.memoizedState=e,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=e),dt(a,jn,l)):(l=i.cache,dt(a,jn,l),l!==e.cache&&io(a,[jn],t,!0))),Jn(n,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(c(156,a.tag))}function Fa(n){n.flags|=4}function Ko(n,a,t,l,e){if((a=(n.mode&32)!==0)&&(a=!1),a){if(n.flags|=16777216,(e&335544128)===e)if(n.stateNode.complete)n.flags|=8192;else if(Zs())n.flags|=8192;else throw wt=di,co}else n.flags&=-16777217}function ps(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!H0(a))if(Zs())n.flags|=8192;else throw wt=di,co}function Di(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?Wr():536870912,n.lanes|=a,Ml|=a)}function he(n,a){if(!on)switch(n.tailMode){case"hidden":a=n.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function Tn(n){var a=n.alternate!==null&&n.alternate.child===n.child,t=0,l=0;if(a)for(var e=n.child;e!==null;)t|=e.lanes|e.childLanes,l|=e.subtreeFlags&65011712,l|=e.flags&65011712,e.return=n,e=e.sibling;else for(e=n.child;e!==null;)t|=e.lanes|e.childLanes,l|=e.subtreeFlags,l|=e.flags,e.return=n,e=e.sibling;return n.subtreeFlags|=l,n.childLanes=t,a}function Yh(n,a,t){var l=a.pendingProps;switch(no(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(a),null;case 1:return Tn(a),null;case 3:return t=a.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),wa(jn),Un(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(bl(a)?Fa(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,to())),Tn(a),null;case 26:var e=a.type,i=a.memoizedState;return n===null?(Fa(a),i!==null?(Tn(a),ps(a,i)):(Tn(a),Ko(a,e,null,l,t))):i?i!==n.memoizedState?(Fa(a),Tn(a),ps(a,i)):(Tn(a),a.flags&=-16777217):(n=n.memoizedProps,n!==l&&Fa(a),Tn(a),Ko(a,e,n,l,t)),null;case 27:if(Xe(a),t=P.current,e=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==l&&Fa(a);else{if(!l){if(a.stateNode===null)throw Error(c(166));return Tn(a),null}n=B.current,bl(a)?Wc(a):(n=T0(e,l,t),a.stateNode=n,Fa(a))}return Tn(a),null;case 5:if(Xe(a),e=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==l&&Fa(a);else{if(!l){if(a.stateNode===null)throw Error(c(166));return Tn(a),null}if(i=B.current,bl(a))Wc(a);else{var u=Vi(P.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(e,{is:l.is}):u.createElement(e)}}i[Ln]=a,i[na]=l;n:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break n;for(;u.sibling===null;){if(u.return===null||u.return===a)break n;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=i;n:switch(Wn(i,e,l),e){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break n;case"img":l=!0;break n;default:l=!1}l&&Fa(a)}}return Tn(a),Ko(a,a.type,n===null?null:n.memoizedProps,a.pendingProps,t),null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==l&&Fa(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(c(166));if(n=P.current,bl(a)){if(n=a.stateNode,t=a.memoizedProps,l=null,e=wn,e!==null)switch(e.tag){case 27:case 5:l=e.memoizedProps}n[Ln]=a,n=!!(n.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||h0(n.nodeValue,t)),n||st(a,!0)}else n=Vi(n).createTextNode(l),n[Ln]=a,a.stateNode=n}return Tn(a),null;case 31:if(t=a.memoizedState,n===null||n.memoizedState!==null){if(l=bl(a),t!==null){if(n===null){if(!l)throw Error(c(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(557));n[Ln]=a}else Gt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Tn(a),n=!1}else t=to(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return a.flags&256?(ha(a),a):(ha(a),null);if((a.flags&128)!==0)throw Error(c(558))}return Tn(a),null;case 13:if(l=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(e=bl(a),l!==null&&l.dehydrated!==null){if(n===null){if(!e)throw Error(c(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e[Ln]=a}else Gt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Tn(a),e=!1}else e=to(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),e=!0;if(!e)return a.flags&256?(ha(a),a):(ha(a),null)}return ha(a),(a.flags&128)!==0?(a.lanes=t,a):(t=l!==null,n=n!==null&&n.memoizedState!==null,t&&(l=a.child,e=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(e=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==e&&(l.flags|=2048)),t!==n&&t&&(a.child.flags|=8192),Di(a,a.updateQueue),Tn(a),null);case 4:return Un(),n===null&&br(a.stateNode.containerInfo),Tn(a),null;case 10:return wa(a.type),Tn(a),null;case 19:if(E(Hn),l=a.memoizedState,l===null)return Tn(a),null;if(e=(a.flags&128)!==0,i=l.rendering,i===null)if(e)he(l,!1);else{if(Nn!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(i=vi(n),i!==null){for(a.flags|=128,he(l,!1),n=i.updateQueue,a.updateQueue=n,Di(a,n),a.subtreeFlags=0,n=t,t=a.child;t!==null;)Vc(t,n),t=t.sibling;return R(Hn,Hn.current&1|2),on&&Va(a,l.treeForkCount),a.child}n=n.sibling}l.tail!==null&&oa()>Ci&&(a.flags|=128,e=!0,he(l,!1),a.lanes=4194304)}else{if(!e)if(n=vi(i),n!==null){if(a.flags|=128,e=!0,n=n.updateQueue,a.updateQueue=n,Di(a,n),he(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!on)return Tn(a),null}else 2*oa()-l.renderingStartTime>Ci&&t!==536870912&&(a.flags|=128,e=!0,he(l,!1),a.lanes=4194304);l.isBackwards?(i.sibling=a.child,a.child=i):(n=l.last,n!==null?n.sibling=i:a.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=oa(),n.sibling=null,t=Hn.current,R(Hn,e?t&1|2:t&1),on&&Va(a,l.treeForkCount),n):(Tn(a),null);case 22:case 23:return ha(a),vo(),l=a.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(Tn(a),a.subtreeFlags&6&&(a.flags|=8192)):Tn(a),t=a.updateQueue,t!==null&&Di(a,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),n!==null&&E(Vt),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),wa(jn),Tn(a),null;case 25:return null;case 30:return null}throw Error(c(156,a.tag))}function kh(n,a){switch(no(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return wa(jn),Un(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Xe(a),null;case 31:if(a.memoizedState!==null){if(ha(a),a.alternate===null)throw Error(c(340));Gt()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 13:if(ha(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(c(340));Gt()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return E(Hn),null;case 4:return Un(),null;case 10:return wa(a.type),null;case 22:case 23:return ha(a),vo(),n!==null&&E(Vt),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return wa(jn),null;case 25:return null;default:return null}}function gs(n,a){switch(no(a),a.tag){case 3:wa(jn),Un();break;case 26:case 27:case 5:Xe(a);break;case 4:Un();break;case 31:a.memoizedState!==null&&ha(a);break;case 13:ha(a);break;case 19:E(Hn);break;case 10:wa(a.type);break;case 22:case 23:ha(a),vo(),n!==null&&E(Vt);break;case 24:wa(jn)}}function me(n,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var e=l.next;t=e;do{if((t.tag&n)===n){l=void 0;var i=t.create,u=t.inst;l=i(),u.destroy=l}t=t.next}while(t!==e)}}catch(r){bn(a,a.return,r)}}function gt(n,a,t){try{var l=a.updateQueue,e=l!==null?l.lastEffect:null;if(e!==null){var i=e.next;l=i;do{if((l.tag&n)===n){var u=l.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,e=a;var d=t,g=r;try{g()}catch(O){bn(e,d,O)}}}l=l.next}while(l!==i)}}catch(O){bn(a,a.return,O)}}function ys(n){var a=n.updateQueue;if(a!==null){var t=n.stateNode;try{cf(a,t)}catch(l){bn(n,n.return,l)}}}function xs(n,a,t){t.props=Wt(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(l){bn(n,a,l)}}function be(n,a){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof t=="function"?n.refCleanup=t(l):t.current=l}}catch(e){bn(n,a,e)}}function Ba(n,a){var t=n.ref,l=n.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(e){bn(n,a,e)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(e){bn(n,a,e)}else t.current=null}function Ss(n){var a=n.type,t=n.memoizedProps,l=n.stateNode;try{n:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break n;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(e){bn(n,n.return,e)}}function Jo(n,a,t){try{var l=n.stateNode;om(l,n.type,t,a),l[na]=a}catch(e){bn(n,n.return,e)}}function Os(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&_t(n.type)||n.tag===4}function Wo(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Os(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&_t(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fo(n,a,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(n),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ga));else if(l!==4&&(l===27&&_t(n.type)&&(t=n.stateNode,a=null),n=n.child,n!==null))for(Fo(n,a,t),n=n.sibling;n!==null;)Fo(n,a,t),n=n.sibling}function Ni(n,a,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,a?t.insertBefore(n,a):t.appendChild(n);else if(l!==4&&(l===27&&_t(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(Ni(n,a,t),n=n.sibling;n!==null;)Ni(n,a,t),n=n.sibling}function zs(n){var a=n.stateNode,t=n.memoizedProps;try{for(var l=n.type,e=a.attributes;e.length;)a.removeAttributeNode(e[0]);Wn(a,l,t),a[Ln]=n,a[na]=t}catch(i){bn(n,n.return,i)}}var $a=!1,kn=!1,$o=!1,Ts=typeof WeakSet=="function"?WeakSet:Set,Vn=null;function Xh(n,a){if(n=n.containerInfo,gr=$i,n=Rc(n),Zu(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var e=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break n}var u=0,r=-1,d=-1,g=0,O=0,_=n,y=null;a:for(;;){for(var x;_!==t||e!==0&&_.nodeType!==3||(r=u+e),_!==i||l!==0&&_.nodeType!==3||(d=u+l),_.nodeType===3&&(u+=_.nodeValue.length),(x=_.firstChild)!==null;)y=_,_=x;for(;;){if(_===n)break a;if(y===t&&++g===e&&(r=u),y===i&&++O===l&&(d=u),(x=_.nextSibling)!==null)break;_=y,y=_.parentNode}_=x}t=r===-1||d===-1?null:{start:r,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(yr={focusedElem:n,selectionRange:t},$i=!1,Vn=a;Vn!==null;)if(a=Vn,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,Vn=n;else for(;Vn!==null;){switch(a=Vn,i=a.alternate,n=a.flags,a.tag){case 0:if((n&4)!==0&&(n=a.updateQueue,n=n!==null?n.events:null,n!==null))for(t=0;t<n.length;t++)e=n[t],e.ref.impl=e.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&i!==null){n=void 0,t=a,e=i.memoizedProps,i=i.memoizedState,l=t.stateNode;try{var j=Wt(t.type,e);n=l.getSnapshotBeforeUpdate(j,i),l.__reactInternalSnapshotBeforeUpdate=n}catch(Q){bn(t,t.return,Q)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,t=n.nodeType,t===9)Or(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Or(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(c(163))}if(n=a.sibling,n!==null){n.return=a.return,Vn=n;break}Vn=a.return}}function _s(n,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ia(n,t),l&4&&me(5,t);break;case 1:if(Ia(n,t),l&4)if(n=t.stateNode,a===null)try{n.componentDidMount()}catch(u){bn(t,t.return,u)}else{var e=Wt(t.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(e,a,n.__reactInternalSnapshotBeforeUpdate)}catch(u){bn(t,t.return,u)}}l&64&&ys(t),l&512&&be(t,t.return);break;case 3:if(Ia(n,t),l&64&&(n=t.updateQueue,n!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{cf(n,a)}catch(u){bn(t,t.return,u)}}break;case 27:a===null&&l&4&&zs(t);case 26:case 5:Ia(n,t),a===null&&l&4&&Ss(t),l&512&&be(t,t.return);break;case 12:Ia(n,t);break;case 31:Ia(n,t),l&4&&Ms(n,t);break;case 13:Ia(n,t),l&4&&Ds(n,t),l&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=Wh.bind(null,t),bm(n,t))));break;case 22:if(l=t.memoizedState!==null||$a,!l){a=a!==null&&a.memoizedState!==null||kn,e=$a;var i=kn;$a=l,(kn=a)&&!i?nt(n,t,(t.subtreeFlags&8772)!==0):Ia(n,t),$a=e,kn=i}break;case 30:break;default:Ia(n,t)}}function As(n){var a=n.alternate;a!==null&&(n.alternate=null,As(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&Au(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var _n=null,ta=!1;function Pa(n,a,t){for(t=t.child;t!==null;)Es(n,a,t),t=t.sibling}function Es(n,a,t){if(ra&&typeof ra.onCommitFiberUnmount=="function")try{ra.onCommitFiberUnmount(kl,t)}catch{}switch(t.tag){case 26:kn||Ba(t,a),Pa(n,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:kn||Ba(t,a);var l=_n,e=ta;_t(t.type)&&(_n=t.stateNode,ta=!1),Pa(n,a,t),Te(t.stateNode),_n=l,ta=e;break;case 5:kn||Ba(t,a);case 6:if(l=_n,e=ta,_n=null,Pa(n,a,t),_n=l,ta=e,_n!==null)if(ta)try{(_n.nodeType===9?_n.body:_n.nodeName==="HTML"?_n.ownerDocument.body:_n).removeChild(t.stateNode)}catch(i){bn(t,a,i)}else try{_n.removeChild(t.stateNode)}catch(i){bn(t,a,i)}break;case 18:_n!==null&&(ta?(n=_n,y0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),jl(n)):y0(_n,t.stateNode));break;case 4:l=_n,e=ta,_n=t.stateNode.containerInfo,ta=!0,Pa(n,a,t),_n=l,ta=e;break;case 0:case 11:case 14:case 15:gt(2,t,a),kn||gt(4,t,a),Pa(n,a,t);break;case 1:kn||(Ba(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&xs(t,a,l)),Pa(n,a,t);break;case 21:Pa(n,a,t);break;case 22:kn=(l=kn)||t.memoizedState!==null,Pa(n,a,t),kn=l;break;default:Pa(n,a,t)}}function Ms(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{jl(n)}catch(t){bn(a,a.return,t)}}}function Ds(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{jl(n)}catch(t){bn(a,a.return,t)}}function Gh(n){switch(n.tag){case 31:case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Ts),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Ts),a;default:throw Error(c(435,n.tag))}}function Ui(n,a){var t=Gh(n);a.forEach(function(l){if(!t.has(l)){t.add(l);var e=Fh.bind(null,n,l);l.then(e,e)}})}function la(n,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var e=t[l],i=n,u=a,r=u;n:for(;r!==null;){switch(r.tag){case 27:if(_t(r.type)){_n=r.stateNode,ta=!1;break n}break;case 5:_n=r.stateNode,ta=!1;break n;case 3:case 4:_n=r.stateNode.containerInfo,ta=!0;break n}r=r.return}if(_n===null)throw Error(c(160));Es(i,u,e),_n=null,ta=!1,i=e.alternate,i!==null&&(i.return=null),e.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Ns(a,n),a=a.sibling}var Na=null;function Ns(n,a){var t=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:la(a,n),ea(n),l&4&&(gt(3,n,n.return),me(3,n),gt(5,n,n.return));break;case 1:la(a,n),ea(n),l&512&&(kn||t===null||Ba(t,t.return)),l&64&&$a&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var e=Na;if(la(a,n),ea(n),l&512&&(kn||t===null||Ba(t,t.return)),l&4){var i=t!==null?t.memoizedState:null;if(l=n.memoizedState,t===null)if(l===null)if(n.stateNode===null){n:{l=n.type,t=n.memoizedProps,e=e.ownerDocument||e;a:switch(l){case"title":i=e.getElementsByTagName("title")[0],(!i||i[Ql]||i[Ln]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=e.createElement(l),e.head.insertBefore(i,e.querySelector("head > title"))),Wn(i,l,t),i[Ln]=n,Zn(i),l=i;break n;case"link":var u=N0("link","href",e).get(l+(t.href||""));if(u){for(var r=0;r<u.length;r++)if(i=u[r],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(r,1);break a}}i=e.createElement(l),Wn(i,l,t),e.head.appendChild(i);break;case"meta":if(u=N0("meta","content",e).get(l+(t.content||""))){for(r=0;r<u.length;r++)if(i=u[r],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(r,1);break a}}i=e.createElement(l),Wn(i,l,t),e.head.appendChild(i);break;default:throw Error(c(468,l))}i[Ln]=n,Zn(i),l=i}n.stateNode=l}else U0(e,n.type,n.stateNode);else n.stateNode=D0(e,l,n.memoizedProps);else i!==l?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,l===null?U0(e,n.type,n.stateNode):D0(e,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Jo(n,n.memoizedProps,t.memoizedProps)}break;case 27:la(a,n),ea(n),l&512&&(kn||t===null||Ba(t,t.return)),t!==null&&l&4&&Jo(n,n.memoizedProps,t.memoizedProps);break;case 5:if(la(a,n),ea(n),l&512&&(kn||t===null||Ba(t,t.return)),n.flags&32){e=n.stateNode;try{il(e,"")}catch(j){bn(n,n.return,j)}}l&4&&n.stateNode!=null&&(e=n.memoizedProps,Jo(n,e,t!==null?t.memoizedProps:e)),l&1024&&($o=!0);break;case 6:if(la(a,n),ea(n),l&4){if(n.stateNode===null)throw Error(c(162));l=n.memoizedProps,t=n.stateNode;try{t.nodeValue=l}catch(j){bn(n,n.return,j)}}break;case 3:if(Ki=null,e=Na,Na=Li(a.containerInfo),la(a,n),Na=e,ea(n),l&4&&t!==null&&t.memoizedState.isDehydrated)try{jl(a.containerInfo)}catch(j){bn(n,n.return,j)}$o&&($o=!1,Us(n));break;case 4:l=Na,Na=Li(n.stateNode.containerInfo),la(a,n),ea(n),Na=l;break;case 12:la(a,n),ea(n);break;case 31:la(a,n),ea(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Ui(n,l)));break;case 13:la(a,n),ea(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(qi=oa()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Ui(n,l)));break;case 22:e=n.memoizedState!==null;var d=t!==null&&t.memoizedState!==null,g=$a,O=kn;if($a=g||e,kn=O||d,la(a,n),kn=O,$a=g,ea(n),l&8192)n:for(a=n.stateNode,a._visibility=e?a._visibility&-2:a._visibility|1,e&&(t===null||d||$a||kn||Ft(n)),t=null,a=n;;){if(a.tag===5||a.tag===26){if(t===null){d=t=a;try{if(i=d.stateNode,e)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{r=d.stateNode;var _=d.memoizedProps.style,y=_!=null&&_.hasOwnProperty("display")?_.display:null;r.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(j){bn(d,d.return,j)}}}else if(a.tag===6){if(t===null){d=a;try{d.stateNode.nodeValue=e?"":d.memoizedProps}catch(j){bn(d,d.return,j)}}}else if(a.tag===18){if(t===null){d=a;try{var x=d.stateNode;e?x0(x,!0):x0(d.stateNode,!1)}catch(j){bn(d,d.return,j)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break n;for(;a.sibling===null;){if(a.return===null||a.return===n)break n;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=n.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,Ui(n,t))));break;case 19:la(a,n),ea(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Ui(n,l)));break;case 30:break;case 21:break;default:la(a,n),ea(n)}}function ea(n){var a=n.flags;if(a&2){try{for(var t,l=n.return;l!==null;){if(Os(l)){t=l;break}l=l.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var e=t.stateNode,i=Wo(n);Ni(n,i,e);break;case 5:var u=t.stateNode;t.flags&32&&(il(u,""),t.flags&=-33);var r=Wo(n);Ni(n,r,u);break;case 3:case 4:var d=t.stateNode.containerInfo,g=Wo(n);Fo(n,g,d);break;default:throw Error(c(161))}}catch(O){bn(n,n.return,O)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function Us(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;Us(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Ia(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)_s(n,a.alternate,a),a=a.sibling}function Ft(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:gt(4,a,a.return),Ft(a);break;case 1:Ba(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&xs(a,a.return,t),Ft(a);break;case 27:Te(a.stateNode);case 26:case 5:Ba(a,a.return),Ft(a);break;case 22:a.memoizedState===null&&Ft(a);break;case 30:Ft(a);break;default:Ft(a)}n=n.sibling}}function nt(n,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,e=n,i=a,u=i.flags;switch(i.tag){case 0:case 11:case 15:nt(e,i,t),me(4,i);break;case 1:if(nt(e,i,t),l=i,e=l.stateNode,typeof e.componentDidMount=="function")try{e.componentDidMount()}catch(g){bn(l,l.return,g)}if(l=i,e=l.updateQueue,e!==null){var r=l.stateNode;try{var d=e.shared.hiddenCallbacks;if(d!==null)for(e.shared.hiddenCallbacks=null,e=0;e<d.length;e++)rf(d[e],r)}catch(g){bn(l,l.return,g)}}t&&u&64&&ys(i),be(i,i.return);break;case 27:zs(i);case 26:case 5:nt(e,i,t),t&&l===null&&u&4&&Ss(i),be(i,i.return);break;case 12:nt(e,i,t);break;case 31:nt(e,i,t),t&&u&4&&Ms(e,i);break;case 13:nt(e,i,t),t&&u&4&&Ds(e,i);break;case 22:i.memoizedState===null&&nt(e,i,t),be(i,i.return);break;case 30:break;default:nt(e,i,t)}a=a.sibling}}function Po(n,a){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&ae(t))}function Io(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&ae(n))}function Ua(n,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Hs(n,a,t,l),a=a.sibling}function Hs(n,a,t,l){var e=a.flags;switch(a.tag){case 0:case 11:case 15:Ua(n,a,t,l),e&2048&&me(9,a);break;case 1:Ua(n,a,t,l);break;case 3:Ua(n,a,t,l),e&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&ae(n)));break;case 12:if(e&2048){Ua(n,a,t,l),n=a.stateNode;try{var i=a.memoizedProps,u=i.id,r=i.onPostCommit;typeof r=="function"&&r(u,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(d){bn(a,a.return,d)}}else Ua(n,a,t,l);break;case 31:Ua(n,a,t,l);break;case 13:Ua(n,a,t,l);break;case 23:break;case 22:i=a.stateNode,u=a.alternate,a.memoizedState!==null?i._visibility&2?Ua(n,a,t,l):ve(n,a):i._visibility&2?Ua(n,a,t,l):(i._visibility|=2,_l(n,a,t,l,(a.subtreeFlags&10256)!==0||!1)),e&2048&&Po(u,a);break;case 24:Ua(n,a,t,l),e&2048&&Io(a.alternate,a);break;default:Ua(n,a,t,l)}}function _l(n,a,t,l,e){for(e=e&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=n,u=a,r=t,d=l,g=u.flags;switch(u.tag){case 0:case 11:case 15:_l(i,u,r,d,e),me(8,u);break;case 23:break;case 22:var O=u.stateNode;u.memoizedState!==null?O._visibility&2?_l(i,u,r,d,e):ve(i,u):(O._visibility|=2,_l(i,u,r,d,e)),e&&g&2048&&Po(u.alternate,u);break;case 24:_l(i,u,r,d,e),e&&g&2048&&Io(u.alternate,u);break;default:_l(i,u,r,d,e)}a=a.sibling}}function ve(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=n,l=a,e=l.flags;switch(l.tag){case 22:ve(t,l),e&2048&&Po(l.alternate,l);break;case 24:ve(t,l),e&2048&&Io(l.alternate,l);break;default:ve(t,l)}a=a.sibling}}var pe=8192;function Al(n,a,t){if(n.subtreeFlags&pe)for(n=n.child;n!==null;)qs(n,a,t),n=n.sibling}function qs(n,a,t){switch(n.tag){case 26:Al(n,a,t),n.flags&pe&&n.memoizedState!==null&&Em(t,Na,n.memoizedState,n.memoizedProps);break;case 5:Al(n,a,t);break;case 3:case 4:var l=Na;Na=Li(n.stateNode.containerInfo),Al(n,a,t),Na=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=pe,pe=16777216,Al(n,a,t),pe=l):Al(n,a,t));break;default:Al(n,a,t)}}function Cs(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function ge(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Vn=l,js(l,n)}Cs(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Rs(n),n=n.sibling}function Rs(n){switch(n.tag){case 0:case 11:case 15:ge(n),n.flags&2048&&gt(9,n,n.return);break;case 3:ge(n);break;case 12:ge(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,Hi(n)):ge(n);break;default:ge(n)}}function Hi(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Vn=l,js(l,n)}Cs(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:gt(8,a,a.return),Hi(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Hi(a));break;default:Hi(a)}n=n.sibling}}function js(n,a){for(;Vn!==null;){var t=Vn;switch(t.tag){case 0:case 11:case 15:gt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ae(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Vn=l;else n:for(t=n;Vn!==null;){l=Vn;var e=l.sibling,i=l.return;if(As(l),l===t){Vn=null;break n}if(e!==null){e.return=i,Vn=e;break n}Vn=i}}}var Qh={getCacheForType:function(n){var a=Kn(jn),t=a.data.get(n);return t===void 0&&(t=n(),a.data.set(n,t)),t},cacheSignal:function(){return Kn(jn).controller.signal}},Zh=typeof WeakMap=="function"?WeakMap:Map,dn=0,Sn=null,I=null,tn=0,mn=0,ma=null,yt=!1,El=!1,nr=!1,at=0,Nn=0,xt=0,$t=0,ar=0,ba=0,Ml=0,ye=null,ia=null,tr=!1,qi=0,Bs=0,Ci=1/0,Ri=null,St=null,Gn=0,Ot=null,Dl=null,tt=0,lr=0,er=null,Ys=null,xe=0,ir=null;function va(){return(dn&2)!==0&&tn!==0?tn&-tn:z.T!==null?sr():Ir()}function ks(){if(ba===0)if((tn&536870912)===0||on){var n=Ze;Ze<<=1,(Ze&3932160)===0&&(Ze=262144),ba=n}else ba=536870912;return n=da.current,n!==null&&(n.flags|=32),ba}function ua(n,a,t){(n===Sn&&(mn===2||mn===9)||n.cancelPendingCommit!==null)&&(Nl(n,0),zt(n,tn,ba,!1)),Gl(n,t),((dn&2)===0||n!==Sn)&&(n===Sn&&((dn&2)===0&&($t|=t),Nn===4&&zt(n,tn,ba,!1)),Ya(n))}function Xs(n,a,t){if((dn&6)!==0)throw Error(c(327));var l=!t&&(a&127)===0&&(a&n.expiredLanes)===0||Xl(n,a),e=l?wh(n,a):or(n,a,!0),i=l;do{if(e===0){El&&!l&&zt(n,a,0,!1);break}else{if(t=n.current.alternate,i&&!Vh(t)){e=or(n,a,!1),i=!1;continue}if(e===2){if(i=a,n.errorRecoveryDisabledLanes&i)var u=0;else u=n.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;n:{var r=n;e=ye;var d=r.current.memoizedState.isDehydrated;if(d&&(Nl(r,u).flags|=256),u=or(r,u,!1),u!==2){if(nr&&!d){r.errorRecoveryDisabledLanes|=i,$t|=i,e=4;break n}i=ia,ia=e,i!==null&&(ia===null?ia=i:ia.push.apply(ia,i))}e=u}if(i=!1,e!==2)continue}}if(e===1){Nl(n,0),zt(n,a,0,!0);break}n:{switch(l=n,i=e,i){case 0:case 1:throw Error(c(345));case 4:if((a&4194048)!==a)break;case 6:zt(l,a,ba,!yt);break n;case 2:ia=null;break;case 3:case 5:break;default:throw Error(c(329))}if((a&62914560)===a&&(e=qi+300-oa(),10<e)){if(zt(l,a,ba,!yt),Le(l,0,!0)!==0)break n;tt=a,l.timeoutHandle=p0(Gs.bind(null,l,t,ia,Ri,tr,a,ba,$t,Ml,yt,i,"Throttled",-0,0),e);break n}Gs(l,t,ia,Ri,tr,a,ba,$t,Ml,yt,i,null,-0,0)}}break}while(!0);Ya(n)}function Gs(n,a,t,l,e,i,u,r,d,g,O,_,y,x){if(n.timeoutHandle=-1,_=a.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ga},qs(a,i,_);var j=(i&62914560)===i?qi-oa():(i&4194048)===i?Bs-oa():0;if(j=Mm(_,j),j!==null){tt=i,n.cancelPendingCommit=j(Ws.bind(null,n,a,i,t,l,e,u,r,d,O,_,null,y,x)),zt(n,i,u,!g);return}}Ws(n,a,i,t,l,e,u,r,d)}function Vh(n){for(var a=n;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var e=t[l],i=e.getSnapshot;e=e.value;try{if(!fa(i(),e))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function zt(n,a,t,l){a&=~ar,a&=~$t,n.suspendedLanes|=a,n.pingedLanes&=~a,l&&(n.warmLanes|=a),l=n.expirationTimes;for(var e=a;0<e;){var i=31-ca(e),u=1<<i;l[i]=-1,e&=~u}t!==0&&Fr(n,t,a)}function ji(){return(dn&6)===0?(Se(0),!1):!0}function ur(){if(I!==null){if(mn===0)var n=I.return;else n=I,La=Qt=null,Oo(n),xl=null,le=0,n=I;for(;n!==null;)gs(n.alternate,n),n=n.return;I=null}}function Nl(n,a){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,fm(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),tt=0,ur(),Sn=n,I=t=Za(n.current,null),tn=a,mn=0,ma=null,yt=!1,El=Xl(n,a),nr=!1,Ml=ba=ar=$t=xt=Nn=0,ia=ye=null,tr=!1,(a&8)!==0&&(a|=a&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=a;0<l;){var e=31-ca(l),i=1<<e;a|=n[e],l&=~i}return at=a,li(),t}function Qs(n,a){F=null,z.H=se,a===yl||a===si?(a=lf(),mn=3):a===co?(a=lf(),mn=4):mn=a===Yo?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ma=a,I===null&&(Nn=1,_i(n,Sa(a,n.current)))}function Zs(){var n=da.current;return n===null?!0:(tn&4194048)===tn?_a===null:(tn&62914560)===tn||(tn&536870912)!==0?n===_a:!1}function Vs(){var n=z.H;return z.H=se,n===null?se:n}function Ls(){var n=z.A;return z.A=Qh,n}function Bi(){Nn=4,yt||(tn&4194048)!==tn&&da.current!==null||(El=!0),(xt&134217727)===0&&($t&134217727)===0||Sn===null||zt(Sn,tn,ba,!1)}function or(n,a,t){var l=dn;dn|=2;var e=Vs(),i=Ls();(Sn!==n||tn!==a)&&(Ri=null,Nl(n,a)),a=!1;var u=Nn;n:do try{if(mn!==0&&I!==null){var r=I,d=ma;switch(mn){case 8:ur(),u=6;break n;case 3:case 2:case 9:case 6:da.current===null&&(a=!0);var g=mn;if(mn=0,ma=null,Ul(n,r,d,g),t&&El){u=0;break n}break;default:g=mn,mn=0,ma=null,Ul(n,r,d,g)}}Lh(),u=Nn;break}catch(O){Qs(n,O)}while(!0);return a&&n.shellSuspendCounter++,La=Qt=null,dn=l,z.H=e,z.A=i,I===null&&(Sn=null,tn=0,li()),u}function Lh(){for(;I!==null;)ws(I)}function wh(n,a){var t=dn;dn|=2;var l=Vs(),e=Ls();Sn!==n||tn!==a?(Ri=null,Ci=oa()+500,Nl(n,a)):El=Xl(n,a);n:do try{if(mn!==0&&I!==null){a=I;var i=ma;a:switch(mn){case 1:mn=0,ma=null,Ul(n,a,i,1);break;case 2:case 9:if(af(i)){mn=0,ma=null,Ks(a);break}a=function(){mn!==2&&mn!==9||Sn!==n||(mn=7),Ya(n)},i.then(a,a);break n;case 3:mn=7;break n;case 4:mn=5;break n;case 7:af(i)?(mn=0,ma=null,Ks(a)):(mn=0,ma=null,Ul(n,a,i,7));break;case 5:var u=null;switch(I.tag){case 26:u=I.memoizedState;case 5:case 27:var r=I;if(u?H0(u):r.stateNode.complete){mn=0,ma=null;var d=r.sibling;if(d!==null)I=d;else{var g=r.return;g!==null?(I=g,Yi(g)):I=null}break a}}mn=0,ma=null,Ul(n,a,i,5);break;case 6:mn=0,ma=null,Ul(n,a,i,6);break;case 8:ur(),Nn=6;break n;default:throw Error(c(462))}}Kh();break}catch(O){Qs(n,O)}while(!0);return La=Qt=null,z.H=l,z.A=e,dn=t,I!==null?0:(Sn=null,tn=0,li(),Nn)}function Kh(){for(;I!==null&&!vd();)ws(I)}function ws(n){var a=vs(n.alternate,n,at);n.memoizedProps=n.pendingProps,a===null?Yi(n):I=a}function Ks(n){var a=n,t=a.alternate;switch(a.tag){case 15:case 0:a=fs(t,a,a.pendingProps,a.type,void 0,tn);break;case 11:a=fs(t,a,a.pendingProps,a.type.render,a.ref,tn);break;case 5:Oo(a);default:gs(t,a),a=I=Vc(a,at),a=vs(t,a,at)}n.memoizedProps=n.pendingProps,a===null?Yi(n):I=a}function Ul(n,a,t,l){La=Qt=null,Oo(a),xl=null,le=0;var e=a.return;try{if(Rh(n,e,a,t,tn)){Nn=1,_i(n,Sa(t,n.current)),I=null;return}}catch(i){if(e!==null)throw I=e,i;Nn=1,_i(n,Sa(t,n.current)),I=null;return}a.flags&32768?(on||l===1?n=!0:El||(tn&536870912)!==0?n=!1:(yt=n=!0,(l===2||l===9||l===3||l===6)&&(l=da.current,l!==null&&l.tag===13&&(l.flags|=16384))),Js(a,n)):Yi(a)}function Yi(n){var a=n;do{if((a.flags&32768)!==0){Js(a,yt);return}n=a.return;var t=Yh(a.alternate,a,at);if(t!==null){I=t;return}if(a=a.sibling,a!==null){I=a;return}I=a=n}while(a!==null);Nn===0&&(Nn=5)}function Js(n,a){do{var t=kh(n.alternate,n);if(t!==null){t.flags&=32767,I=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(n=n.sibling,n!==null)){I=n;return}I=n=t}while(n!==null);Nn=6,I=null}function Ws(n,a,t,l,e,i,u,r,d){n.cancelPendingCommit=null;do ki();while(Gn!==0);if((dn&6)!==0)throw Error(c(327));if(a!==null){if(a===n.current)throw Error(c(177));if(i=a.lanes|a.childLanes,i|=Ju,Ad(n,t,i,u,r,d),n===Sn&&(I=Sn=null,tn=0),Dl=a,Ot=n,tt=t,lr=i,er=e,Ys=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,$h(Ge,function(){return n0(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,e=q.p,q.p=2,u=dn,dn|=4;try{Xh(n,a,t)}finally{dn=u,q.p=e,z.T=l}}Gn=1,Fs(),$s(),Ps()}}function Fs(){if(Gn===1){Gn=0;var n=Ot,a=Dl,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=z.T,z.T=null;var l=q.p;q.p=2;var e=dn;dn|=4;try{Ns(a,n);var i=yr,u=Rc(n.containerInfo),r=i.focusedElem,d=i.selectionRange;if(u!==r&&r&&r.ownerDocument&&Cc(r.ownerDocument.documentElement,r)){if(d!==null&&Zu(r)){var g=d.start,O=d.end;if(O===void 0&&(O=g),"selectionStart"in r)r.selectionStart=g,r.selectionEnd=Math.min(O,r.value.length);else{var _=r.ownerDocument||document,y=_&&_.defaultView||window;if(y.getSelection){var x=y.getSelection(),j=r.textContent.length,Q=Math.min(d.start,j),yn=d.end===void 0?Q:Math.min(d.end,j);!x.extend&&Q>yn&&(u=yn,yn=Q,Q=u);var b=qc(r,Q),h=qc(r,yn);if(b&&h&&(x.rangeCount!==1||x.anchorNode!==b.node||x.anchorOffset!==b.offset||x.focusNode!==h.node||x.focusOffset!==h.offset)){var p=_.createRange();p.setStart(b.node,b.offset),x.removeAllRanges(),Q>yn?(x.addRange(p),x.extend(h.node,h.offset)):(p.setEnd(h.node,h.offset),x.addRange(p))}}}}for(_=[],x=r;x=x.parentNode;)x.nodeType===1&&_.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<_.length;r++){var T=_[r];T.element.scrollLeft=T.left,T.element.scrollTop=T.top}}$i=!!gr,yr=gr=null}finally{dn=e,q.p=l,z.T=t}}n.current=a,Gn=2}}function $s(){if(Gn===2){Gn=0;var n=Ot,a=Dl,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=z.T,z.T=null;var l=q.p;q.p=2;var e=dn;dn|=4;try{_s(n,a.alternate,a)}finally{dn=e,q.p=l,z.T=t}}Gn=3}}function Ps(){if(Gn===4||Gn===3){Gn=0,pd();var n=Ot,a=Dl,t=tt,l=Ys;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Gn=5:(Gn=0,Dl=Ot=null,Is(n,n.pendingLanes));var e=n.pendingLanes;if(e===0&&(St=null),Tu(t),a=a.stateNode,ra&&typeof ra.onCommitFiberRoot=="function")try{ra.onCommitFiberRoot(kl,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=z.T,e=q.p,q.p=2,z.T=null;try{for(var i=n.onRecoverableError,u=0;u<l.length;u++){var r=l[u];i(r.value,{componentStack:r.stack})}}finally{z.T=a,q.p=e}}(tt&3)!==0&&ki(),Ya(n),e=n.pendingLanes,(t&261930)!==0&&(e&42)!==0?n===ir?xe++:(xe=0,ir=n):xe=0,Se(0)}}function Is(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,ae(a)))}function ki(){return Fs(),$s(),Ps(),n0()}function n0(){if(Gn!==5)return!1;var n=Ot,a=lr;lr=0;var t=Tu(tt),l=z.T,e=q.p;try{q.p=32>t?32:t,z.T=null,t=er,er=null;var i=Ot,u=tt;if(Gn=0,Dl=Ot=null,tt=0,(dn&6)!==0)throw Error(c(331));var r=dn;if(dn|=4,Rs(i.current),Hs(i,i.current,u,t),dn=r,Se(0,!1),ra&&typeof ra.onPostCommitFiberRoot=="function")try{ra.onPostCommitFiberRoot(kl,i)}catch{}return!0}finally{q.p=e,z.T=l,Is(n,a)}}function a0(n,a,t){a=Sa(t,a),a=Bo(n.stateNode,a,2),n=bt(n,a,2),n!==null&&(Gl(n,2),Ya(n))}function bn(n,a,t){if(n.tag===3)a0(n,n,t);else for(;a!==null;){if(a.tag===3){a0(a,n,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(St===null||!St.has(l))){n=Sa(t,n),t=ts(2),l=bt(a,t,2),l!==null&&(ls(t,l,a,n),Gl(l,2),Ya(l));break}}a=a.return}}function rr(n,a,t){var l=n.pingCache;if(l===null){l=n.pingCache=new Zh;var e=new Set;l.set(a,e)}else e=l.get(a),e===void 0&&(e=new Set,l.set(a,e));e.has(t)||(nr=!0,e.add(t),n=Jh.bind(null,n,a,t),a.then(n,n))}function Jh(n,a,t){var l=n.pingCache;l!==null&&l.delete(a),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,Sn===n&&(tn&t)===t&&(Nn===4||Nn===3&&(tn&62914560)===tn&&300>oa()-qi?(dn&2)===0&&Nl(n,0):ar|=t,Ml===tn&&(Ml=0)),Ya(n)}function t0(n,a){a===0&&(a=Wr()),n=kt(n,a),n!==null&&(Gl(n,a),Ya(n))}function Wh(n){var a=n.memoizedState,t=0;a!==null&&(t=a.retryLane),t0(n,t)}function Fh(n,a){var t=0;switch(n.tag){case 31:case 13:var l=n.stateNode,e=n.memoizedState;e!==null&&(t=e.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(a),t0(n,t)}function $h(n,a){return xu(n,a)}var Xi=null,Hl=null,cr=!1,Gi=!1,fr=!1,Tt=0;function Ya(n){n!==Hl&&n.next===null&&(Hl===null?Xi=Hl=n:Hl=Hl.next=n),Gi=!0,cr||(cr=!0,Ih())}function Se(n,a){if(!fr&&Gi){fr=!0;do for(var t=!1,l=Xi;l!==null;){if(n!==0){var e=l.pendingLanes;if(e===0)var i=0;else{var u=l.suspendedLanes,r=l.pingedLanes;i=(1<<31-ca(42|n)+1)-1,i&=e&~(u&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,u0(l,i))}else i=tn,i=Le(l,l===Sn?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Xl(l,i)||(t=!0,u0(l,i));l=l.next}while(t);fr=!1}}function Ph(){l0()}function l0(){Gi=cr=!1;var n=0;Tt!==0&&cm()&&(n=Tt);for(var a=oa(),t=null,l=Xi;l!==null;){var e=l.next,i=e0(l,a);i===0?(l.next=null,t===null?Xi=e:t.next=e,e===null&&(Hl=t)):(t=l,(n!==0||(i&3)!==0)&&(Gi=!0)),l=e}Gn!==0&&Gn!==5||Se(n),Tt!==0&&(Tt=0)}function e0(n,a){for(var t=n.suspendedLanes,l=n.pingedLanes,e=n.expirationTimes,i=n.pendingLanes&-62914561;0<i;){var u=31-ca(i),r=1<<u,d=e[u];d===-1?((r&t)===0||(r&l)!==0)&&(e[u]=_d(r,a)):d<=a&&(n.expiredLanes|=r),i&=~r}if(a=Sn,t=tn,t=Le(n,n===a?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,t===0||n===a&&(mn===2||mn===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Su(l),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||Xl(n,t)){if(a=t&-t,a===n.callbackPriority)return a;switch(l!==null&&Su(l),Tu(t)){case 2:case 8:t=Kr;break;case 32:t=Ge;break;case 268435456:t=Jr;break;default:t=Ge}return l=i0.bind(null,n),t=xu(t,l),n.callbackPriority=a,n.callbackNode=t,a}return l!==null&&l!==null&&Su(l),n.callbackPriority=2,n.callbackNode=null,2}function i0(n,a){if(Gn!==0&&Gn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(ki()&&n.callbackNode!==t)return null;var l=tn;return l=Le(n,n===Sn?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Xs(n,l,a),e0(n,oa()),n.callbackNode!=null&&n.callbackNode===t?i0.bind(null,n):null)}function u0(n,a){if(ki())return null;Xs(n,a,!0)}function Ih(){sm(function(){(dn&6)!==0?xu(wr,Ph):l0()})}function sr(){if(Tt===0){var n=pl;n===0&&(n=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),Tt=n}return Tt}function o0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:We(""+n)}function r0(n,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,n.id&&t.setAttribute("form",n.id),a.parentNode.insertBefore(t,a),n=new FormData(n),t.parentNode.removeChild(t),n}function nm(n,a,t,l,e){if(a==="submit"&&t&&t.stateNode===e){var i=o0((e[na]||null).action),u=l.submitter;u&&(a=(a=u[na]||null)?o0(a.formAction):u.getAttribute("formAction"),a!==null&&(i=a,u=null));var r=new Ie("action","action",null,l,e);n.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Tt!==0){var d=u?r0(e,u):new FormData(e);Uo(t,{pending:!0,data:d,method:e.method,action:i},null,d)}}else typeof i=="function"&&(r.preventDefault(),d=u?r0(e,u):new FormData(e),Uo(t,{pending:!0,data:d,method:e.method,action:i},i,d))},currentTarget:e}]})}}for(var dr=0;dr<Ku.length;dr++){var hr=Ku[dr],am=hr.toLowerCase(),tm=hr[0].toUpperCase()+hr.slice(1);Da(am,"on"+tm)}Da(Yc,"onAnimationEnd"),Da(kc,"onAnimationIteration"),Da(Xc,"onAnimationStart"),Da("dblclick","onDoubleClick"),Da("focusin","onFocus"),Da("focusout","onBlur"),Da(gh,"onTransitionRun"),Da(yh,"onTransitionStart"),Da(xh,"onTransitionCancel"),Da(Gc,"onTransitionEnd"),ll("onMouseEnter",["mouseout","mouseover"]),ll("onMouseLeave",["mouseout","mouseover"]),ll("onPointerEnter",["pointerout","pointerover"]),ll("onPointerLeave",["pointerout","pointerover"]),Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oe));function c0(n,a){a=(a&4)!==0;for(var t=0;t<n.length;t++){var l=n[t],e=l.event;l=l.listeners;n:{var i=void 0;if(a)for(var u=l.length-1;0<=u;u--){var r=l[u],d=r.instance,g=r.currentTarget;if(r=r.listener,d!==i&&e.isPropagationStopped())break n;i=r,e.currentTarget=g;try{i(e)}catch(O){ti(O)}e.currentTarget=null,i=d}else for(u=0;u<l.length;u++){if(r=l[u],d=r.instance,g=r.currentTarget,r=r.listener,d!==i&&e.isPropagationStopped())break n;i=r,e.currentTarget=g;try{i(e)}catch(O){ti(O)}e.currentTarget=null,i=d}}}}function nn(n,a){var t=a[_u];t===void 0&&(t=a[_u]=new Set);var l=n+"__bubble";t.has(l)||(f0(a,n,2,!1),t.add(l))}function mr(n,a,t){var l=0;a&&(l|=4),f0(t,n,l,a)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function br(n){if(!n[Qi]){n[Qi]=!0,tc.forEach(function(t){t!=="selectionchange"&&(lm.has(t)||mr(t,!1,n),mr(t,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Qi]||(a[Qi]=!0,mr("selectionchange",!1,a))}}function f0(n,a,t,l){switch(k0(a)){case 2:var e=Um;break;case 8:e=Hm;break;default:e=Nr}t=e.bind(null,a,t,n),e=void 0,!Cu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(e=!0),l?e!==void 0?n.addEventListener(a,t,{capture:!0,passive:e}):n.addEventListener(a,t,!0):e!==void 0?n.addEventListener(a,t,{passive:e}):n.addEventListener(a,t,!1)}function vr(n,a,t,l,e){var i=l;if((a&1)===0&&(a&2)===0&&l!==null)n:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var r=l.stateNode.containerInfo;if(r===e)break;if(u===4)for(u=l.return;u!==null;){var d=u.tag;if((d===3||d===4)&&u.stateNode.containerInfo===e)return;u=u.return}for(;r!==null;){if(u=nl(r),u===null)return;if(d=u.tag,d===5||d===6||d===26||d===27){l=i=u;continue n}r=r.parentNode}}l=l.return}mc(function(){var g=i,O=Hu(t),_=[];n:{var y=Qc.get(n);if(y!==void 0){var x=Ie,j=n;switch(n){case"keypress":if($e(t)===0)break n;case"keydown":case"keyup":x=Fd;break;case"focusin":j="focus",x=Yu;break;case"focusout":j="blur",x=Yu;break;case"beforeblur":case"afterblur":x=Yu;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Id;break;case Yc:case kc:case Xc:x=Gd;break;case Gc:x=ah;break;case"scroll":case"scrollend":x=jd;break;case"wheel":x=lh;break;case"copy":case"cut":case"paste":x=Zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=yc;break;case"toggle":case"beforetoggle":x=ih}var Q=(a&4)!==0,yn=!Q&&(n==="scroll"||n==="scrollend"),b=Q?y!==null?y+"Capture":null:y;Q=[];for(var h=g,p;h!==null;){var T=h;if(p=T.stateNode,T=T.tag,T!==5&&T!==26&&T!==27||p===null||b===null||(T=Vl(h,b),T!=null&&Q.push(ze(h,T,p))),yn)break;h=h.return}0<Q.length&&(y=new x(y,j,null,t,O),_.push({event:y,listeners:Q}))}}if((a&7)===0){n:{if(y=n==="mouseover"||n==="pointerover",x=n==="mouseout"||n==="pointerout",y&&t!==Uu&&(j=t.relatedTarget||t.fromElement)&&(nl(j)||j[It]))break n;if((x||y)&&(y=O.window===O?O:(y=O.ownerDocument)?y.defaultView||y.parentWindow:window,x?(j=t.relatedTarget||t.toElement,x=g,j=j?nl(j):null,j!==null&&(yn=A(j),Q=j.tag,j!==yn||Q!==5&&Q!==27&&Q!==6)&&(j=null)):(x=null,j=g),x!==j)){if(Q=pc,T="onMouseLeave",b="onMouseEnter",h="mouse",(n==="pointerout"||n==="pointerover")&&(Q=yc,T="onPointerLeave",b="onPointerEnter",h="pointer"),yn=x==null?y:Zl(x),p=j==null?y:Zl(j),y=new Q(T,h+"leave",x,t,O),y.target=yn,y.relatedTarget=p,T=null,nl(O)===g&&(Q=new Q(b,h+"enter",j,t,O),Q.target=p,Q.relatedTarget=yn,T=Q),yn=T,x&&j)a:{for(Q=em,b=x,h=j,p=0,T=b;T;T=Q(T))p++;T=0;for(var X=h;X;X=Q(X))T++;for(;0<p-T;)b=Q(b),p--;for(;0<T-p;)h=Q(h),T--;for(;p--;){if(b===h||h!==null&&b===h.alternate){Q=b;break a}b=Q(b),h=Q(h)}Q=null}else Q=null;x!==null&&s0(_,y,x,Q,!1),j!==null&&yn!==null&&s0(_,yn,j,Q,!0)}}n:{if(y=g?Zl(g):window,x=y.nodeName&&y.nodeName.toLowerCase(),x==="select"||x==="input"&&y.type==="file")var fn=Ec;else if(_c(y))if(Mc)fn=bh;else{fn=hh;var Y=dh}else x=y.nodeName,!x||x.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?g&&Nu(g.elementType)&&(fn=Ec):fn=mh;if(fn&&(fn=fn(n,g))){Ac(_,fn,t,O);break n}Y&&Y(n,y,g),n==="focusout"&&g&&y.type==="number"&&g.memoizedProps.value!=null&&Du(y,"number",y.value)}switch(Y=g?Zl(g):window,n){case"focusin":(_c(Y)||Y.contentEditable==="true")&&(cl=Y,Vu=g,Pl=null);break;case"focusout":Pl=Vu=cl=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,jc(_,t,O);break;case"selectionchange":if(ph)break;case"keydown":case"keyup":jc(_,t,O)}var $;if(Xu)n:{switch(n){case"compositionstart":var ln="onCompositionStart";break n;case"compositionend":ln="onCompositionEnd";break n;case"compositionupdate":ln="onCompositionUpdate";break n}ln=void 0}else rl?zc(n,t)&&(ln="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(ln="onCompositionStart");ln&&(xc&&t.locale!=="ko"&&(rl||ln!=="onCompositionStart"?ln==="onCompositionEnd"&&rl&&($=bc()):(rt=O,Ru="value"in rt?rt.value:rt.textContent,rl=!0)),Y=Zi(g,ln),0<Y.length&&(ln=new gc(ln,n,null,t,O),_.push({event:ln,listeners:Y}),$?ln.data=$:($=Tc(t),$!==null&&(ln.data=$)))),($=oh?rh(n,t):ch(n,t))&&(ln=Zi(g,"onBeforeInput"),0<ln.length&&(Y=new gc("onBeforeInput","beforeinput",null,t,O),_.push({event:Y,listeners:ln}),Y.data=$)),nm(_,n,g,t,O)}c0(_,a)})}function ze(n,a,t){return{instance:n,listener:a,currentTarget:t}}function Zi(n,a){for(var t=a+"Capture",l=[];n!==null;){var e=n,i=e.stateNode;if(e=e.tag,e!==5&&e!==26&&e!==27||i===null||(e=Vl(n,t),e!=null&&l.unshift(ze(n,e,i)),e=Vl(n,a),e!=null&&l.push(ze(n,e,i))),n.tag===3)return l;n=n.return}return[]}function em(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function s0(n,a,t,l,e){for(var i=a._reactName,u=[];t!==null&&t!==l;){var r=t,d=r.alternate,g=r.stateNode;if(r=r.tag,d!==null&&d===l)break;r!==5&&r!==26&&r!==27||g===null||(d=g,e?(g=Vl(t,i),g!=null&&u.unshift(ze(t,g,d))):e||(g=Vl(t,i),g!=null&&u.push(ze(t,g,d)))),t=t.return}u.length!==0&&n.push({event:a,listeners:u})}var im=/\r\n?/g,um=/\u0000|\uFFFD/g;function d0(n){return(typeof n=="string"?n:""+n).replace(im,`
`).replace(um,"")}function h0(n,a){return a=d0(a),d0(n)===a}function gn(n,a,t,l,e,i){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||il(n,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&il(n,""+l);break;case"className":Ke(n,"class",l);break;case"tabIndex":Ke(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ke(n,t,l);break;case"style":dc(n,l,i);break;case"data":if(a!=="object"){Ke(n,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){n.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=We(""+l),n.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(a!=="input"&&gn(n,a,"name",e.name,e,null),gn(n,a,"formEncType",e.formEncType,e,null),gn(n,a,"formMethod",e.formMethod,e,null),gn(n,a,"formTarget",e.formTarget,e,null)):(gn(n,a,"encType",e.encType,e,null),gn(n,a,"method",e.method,e,null),gn(n,a,"target",e.target,e,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=We(""+l),n.setAttribute(t,l);break;case"onClick":l!=null&&(n.onclick=Ga);break;case"onScroll":l!=null&&nn("scroll",n);break;case"onScrollEnd":l!=null&&nn("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(t=l.__html,t!=null){if(e.children!=null)throw Error(c(60));n.innerHTML=t}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}t=We(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""+l):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":l===!0?n.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,l):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(t,l):n.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(t):n.setAttribute(t,l);break;case"popover":nn("beforetoggle",n),nn("toggle",n),we(n,"popover",l);break;case"xlinkActuate":Xa(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xa(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xa(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xa(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xa(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xa(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xa(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xa(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xa(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":we(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Cd.get(t)||t,we(n,t,l))}}function pr(n,a,t,l,e,i){switch(t){case"style":dc(n,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(t=l.__html,t!=null){if(e.children!=null)throw Error(c(60));n.innerHTML=t}}break;case"children":typeof l=="string"?il(n,l):(typeof l=="number"||typeof l=="bigint")&&il(n,""+l);break;case"onScroll":l!=null&&nn("scroll",n);break;case"onScrollEnd":l!=null&&nn("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Ga);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lc.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(e=t.endsWith("Capture"),a=t.slice(2,e?t.length-7:void 0),i=n[na]||null,i=i!=null?i[t]:null,typeof i=="function"&&n.removeEventListener(a,i,e),typeof l=="function")){typeof i!="function"&&i!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(a,l,e);break n}t in n?n[t]=l:l===!0?n.setAttribute(t,""):we(n,t,l)}}}function Wn(n,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":nn("error",n),nn("load",n);var l=!1,e=!1,i;for(i in t)if(t.hasOwnProperty(i)){var u=t[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":e=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:gn(n,a,i,u,t,null)}}e&&gn(n,a,"srcSet",t.srcSet,t,null),l&&gn(n,a,"src",t.src,t,null);return;case"input":nn("invalid",n);var r=i=u=e=null,d=null,g=null;for(l in t)if(t.hasOwnProperty(l)){var O=t[l];if(O!=null)switch(l){case"name":e=O;break;case"type":u=O;break;case"checked":d=O;break;case"defaultChecked":g=O;break;case"value":i=O;break;case"defaultValue":r=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,a));break;default:gn(n,a,l,O,t,null)}}rc(n,i,r,d,g,u,e,!1);return;case"select":nn("invalid",n),l=u=i=null;for(e in t)if(t.hasOwnProperty(e)&&(r=t[e],r!=null))switch(e){case"value":i=r;break;case"defaultValue":u=r;break;case"multiple":l=r;default:gn(n,a,e,r,t,null)}a=i,t=u,n.multiple=!!l,a!=null?el(n,!!l,a,!1):t!=null&&el(n,!!l,t,!0);return;case"textarea":nn("invalid",n),i=e=l=null;for(u in t)if(t.hasOwnProperty(u)&&(r=t[u],r!=null))switch(u){case"value":l=r;break;case"defaultValue":e=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:gn(n,a,u,r,t,null)}fc(n,l,e,i);return;case"option":for(d in t)t.hasOwnProperty(d)&&(l=t[d],l!=null)&&(d==="selected"?n.selected=l&&typeof l!="function"&&typeof l!="symbol":gn(n,a,d,l,t,null));return;case"dialog":nn("beforetoggle",n),nn("toggle",n),nn("cancel",n),nn("close",n);break;case"iframe":case"object":nn("load",n);break;case"video":case"audio":for(l=0;l<Oe.length;l++)nn(Oe[l],n);break;case"image":nn("error",n),nn("load",n);break;case"details":nn("toggle",n);break;case"embed":case"source":case"link":nn("error",n),nn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in t)if(t.hasOwnProperty(g)&&(l=t[g],l!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:gn(n,a,g,l,t,null)}return;default:if(Nu(a)){for(O in t)t.hasOwnProperty(O)&&(l=t[O],l!==void 0&&pr(n,a,O,l,t,void 0));return}}for(r in t)t.hasOwnProperty(r)&&(l=t[r],l!=null&&gn(n,a,r,l,t,null))}function om(n,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var e=null,i=null,u=null,r=null,d=null,g=null,O=null;for(x in t){var _=t[x];if(t.hasOwnProperty(x)&&_!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":d=_;default:l.hasOwnProperty(x)||gn(n,a,x,null,l,_)}}for(var y in l){var x=l[y];if(_=t[y],l.hasOwnProperty(y)&&(x!=null||_!=null))switch(y){case"type":i=x;break;case"name":e=x;break;case"checked":g=x;break;case"defaultChecked":O=x;break;case"value":u=x;break;case"defaultValue":r=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(c(137,a));break;default:x!==_&&gn(n,a,y,x,l,_)}}Mu(n,u,r,d,g,O,i,e);return;case"select":x=u=r=y=null;for(i in t)if(d=t[i],t.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":x=d;default:l.hasOwnProperty(i)||gn(n,a,i,null,l,d)}for(e in l)if(i=l[e],d=t[e],l.hasOwnProperty(e)&&(i!=null||d!=null))switch(e){case"value":y=i;break;case"defaultValue":r=i;break;case"multiple":u=i;default:i!==d&&gn(n,a,e,i,l,d)}a=r,t=u,l=x,y!=null?el(n,!!t,y,!1):!!l!=!!t&&(a!=null?el(n,!!t,a,!0):el(n,!!t,t?[]:"",!1));return;case"textarea":x=y=null;for(r in t)if(e=t[r],t.hasOwnProperty(r)&&e!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:gn(n,a,r,null,l,e)}for(u in l)if(e=l[u],i=t[u],l.hasOwnProperty(u)&&(e!=null||i!=null))switch(u){case"value":y=e;break;case"defaultValue":x=e;break;case"children":break;case"dangerouslySetInnerHTML":if(e!=null)throw Error(c(91));break;default:e!==i&&gn(n,a,u,e,l,i)}cc(n,y,x);return;case"option":for(var j in t)y=t[j],t.hasOwnProperty(j)&&y!=null&&!l.hasOwnProperty(j)&&(j==="selected"?n.selected=!1:gn(n,a,j,null,l,y));for(d in l)y=l[d],x=t[d],l.hasOwnProperty(d)&&y!==x&&(y!=null||x!=null)&&(d==="selected"?n.selected=y&&typeof y!="function"&&typeof y!="symbol":gn(n,a,d,y,l,x));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in t)y=t[Q],t.hasOwnProperty(Q)&&y!=null&&!l.hasOwnProperty(Q)&&gn(n,a,Q,null,l,y);for(g in l)if(y=l[g],x=t[g],l.hasOwnProperty(g)&&y!==x&&(y!=null||x!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(c(137,a));break;default:gn(n,a,g,y,l,x)}return;default:if(Nu(a)){for(var yn in t)y=t[yn],t.hasOwnProperty(yn)&&y!==void 0&&!l.hasOwnProperty(yn)&&pr(n,a,yn,void 0,l,y);for(O in l)y=l[O],x=t[O],!l.hasOwnProperty(O)||y===x||y===void 0&&x===void 0||pr(n,a,O,y,l,x);return}}for(var b in t)y=t[b],t.hasOwnProperty(b)&&y!=null&&!l.hasOwnProperty(b)&&gn(n,a,b,null,l,y);for(_ in l)y=l[_],x=t[_],!l.hasOwnProperty(_)||y===x||y==null&&x==null||gn(n,a,_,y,l,x)}function m0(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rm(){if(typeof performance.getEntriesByType=="function"){for(var n=0,a=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var e=t[l],i=e.transferSize,u=e.initiatorType,r=e.duration;if(i&&r&&m0(u)){for(u=0,r=e.responseEnd,l+=1;l<t.length;l++){var d=t[l],g=d.startTime;if(g>r)break;var O=d.transferSize,_=d.initiatorType;O&&m0(_)&&(d=d.responseEnd,u+=O*(d<r?1:(r-g)/(d-g)))}if(--l,a+=8*(i+u)/(e.duration/1e3),n++,10<n)break}}if(0<n)return a/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var gr=null,yr=null;function Vi(n){return n.nodeType===9?n:n.ownerDocument}function b0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function v0(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function xr(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Sr=null;function cm(){var n=window.event;return n&&n.type==="popstate"?n===Sr?!1:(Sr=n,!0):(Sr=null,!1)}var p0=typeof setTimeout=="function"?setTimeout:void 0,fm=typeof clearTimeout=="function"?clearTimeout:void 0,g0=typeof Promise=="function"?Promise:void 0,sm=typeof queueMicrotask=="function"?queueMicrotask:typeof g0<"u"?function(n){return g0.resolve(null).then(n).catch(dm)}:p0;function dm(n){setTimeout(function(){throw n})}function _t(n){return n==="head"}function y0(n,a){var t=a,l=0;do{var e=t.nextSibling;if(n.removeChild(t),e&&e.nodeType===8)if(t=e.data,t==="/$"||t==="/&"){if(l===0){n.removeChild(e),jl(a);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")Te(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,Te(t);for(var i=t.firstChild;i;){var u=i.nextSibling,r=i.nodeName;i[Ql]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=u}}else t==="body"&&Te(n.ownerDocument.body);t=e}while(t);jl(a)}function x0(n,a){var t=n;n=0;do{var l=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=l}while(t)}function Or(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Or(t),Au(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function hm(n,a,t,l){for(;n.nodeType===1;){var e=t;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Ql])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(i=n.getAttribute("rel"),i==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(i!==e.rel||n.getAttribute("href")!==(e.href==null||e.href===""?null:e.href)||n.getAttribute("crossorigin")!==(e.crossOrigin==null?null:e.crossOrigin)||n.getAttribute("title")!==(e.title==null?null:e.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(i=n.getAttribute("src"),(i!==(e.src==null?null:e.src)||n.getAttribute("type")!==(e.type==null?null:e.type)||n.getAttribute("crossorigin")!==(e.crossOrigin==null?null:e.crossOrigin))&&i&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var i=e.name==null?null:""+e.name;if(e.type==="hidden"&&n.getAttribute("name")===i)return n}else return n;if(n=Aa(n.nextSibling),n===null)break}return null}function mm(n,a,t){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=Aa(n.nextSibling),n===null))return null;return n}function S0(n,a){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Aa(n.nextSibling),n===null))return null;return n}function zr(n){return n.data==="$?"||n.data==="$~"}function Tr(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function bm(n,a){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=a;else if(n.data!=="$?"||t.readyState!=="loading")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function Aa(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return n}var _r=null;function O0(n){n=n.nextSibling;for(var a=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(a===0)return Aa(n.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}n=n.nextSibling}return null}function z0(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return n;a--}else t!=="/$"&&t!=="/&"||a++}n=n.previousSibling}return null}function T0(n,a,t){switch(a=Vi(t),n){case"html":if(n=a.documentElement,!n)throw Error(c(452));return n;case"head":if(n=a.head,!n)throw Error(c(453));return n;case"body":if(n=a.body,!n)throw Error(c(454));return n;default:throw Error(c(451))}}function Te(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Au(n)}var Ea=new Map,_0=new Set;function Li(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var lt=q.d;q.d={f:vm,r:pm,D:gm,C:ym,L:xm,m:Sm,X:zm,S:Om,M:Tm};function vm(){var n=lt.f(),a=ji();return n||a}function pm(n){var a=al(n);a!==null&&a.tag===5&&a.type==="form"?Qf(a):lt.r(n)}var ql=typeof document>"u"?null:document;function A0(n,a,t){var l=ql;if(l&&typeof a=="string"&&a){var e=ya(a);e='link[rel="'+n+'"][href="'+e+'"]',typeof t=="string"&&(e+='[crossorigin="'+t+'"]'),_0.has(e)||(_0.add(e),n={rel:n,crossOrigin:t,href:a},l.querySelector(e)===null&&(a=l.createElement("link"),Wn(a,"link",n),Zn(a),l.head.appendChild(a)))}}function gm(n){lt.D(n),A0("dns-prefetch",n,null)}function ym(n,a){lt.C(n,a),A0("preconnect",n,a)}function xm(n,a,t){lt.L(n,a,t);var l=ql;if(l&&n&&a){var e='link[rel="preload"][as="'+ya(a)+'"]';a==="image"&&t&&t.imageSrcSet?(e+='[imagesrcset="'+ya(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(e+='[imagesizes="'+ya(t.imageSizes)+'"]')):e+='[href="'+ya(n)+'"]';var i=e;switch(a){case"style":i=Cl(n);break;case"script":i=Rl(n)}Ea.has(i)||(n=C({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:n,as:a},t),Ea.set(i,n),l.querySelector(e)!==null||a==="style"&&l.querySelector(_e(i))||a==="script"&&l.querySelector(Ae(i))||(a=l.createElement("link"),Wn(a,"link",n),Zn(a),l.head.appendChild(a)))}}function Sm(n,a){lt.m(n,a);var t=ql;if(t&&n){var l=a&&typeof a.as=="string"?a.as:"script",e='link[rel="modulepreload"][as="'+ya(l)+'"][href="'+ya(n)+'"]',i=e;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Rl(n)}if(!Ea.has(i)&&(n=C({rel:"modulepreload",href:n},a),Ea.set(i,n),t.querySelector(e)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ae(i)))return}l=t.createElement("link"),Wn(l,"link",n),Zn(l),t.head.appendChild(l)}}}function Om(n,a,t){lt.S(n,a,t);var l=ql;if(l&&n){var e=tl(l).hoistableStyles,i=Cl(n);a=a||"default";var u=e.get(i);if(!u){var r={loading:0,preload:null};if(u=l.querySelector(_e(i)))r.loading=5;else{n=C({rel:"stylesheet",href:n,"data-precedence":a},t),(t=Ea.get(i))&&Ar(n,t);var d=u=l.createElement("link");Zn(d),Wn(d,"link",n),d._p=new Promise(function(g,O){d.onload=g,d.onerror=O}),d.addEventListener("load",function(){r.loading|=1}),d.addEventListener("error",function(){r.loading|=2}),r.loading|=4,wi(u,a,l)}u={type:"stylesheet",instance:u,count:1,state:r},e.set(i,u)}}}function zm(n,a){lt.X(n,a);var t=ql;if(t&&n){var l=tl(t).hoistableScripts,e=Rl(n),i=l.get(e);i||(i=t.querySelector(Ae(e)),i||(n=C({src:n,async:!0},a),(a=Ea.get(e))&&Er(n,a),i=t.createElement("script"),Zn(i),Wn(i,"link",n),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(e,i))}}function Tm(n,a){lt.M(n,a);var t=ql;if(t&&n){var l=tl(t).hoistableScripts,e=Rl(n),i=l.get(e);i||(i=t.querySelector(Ae(e)),i||(n=C({src:n,async:!0,type:"module"},a),(a=Ea.get(e))&&Er(n,a),i=t.createElement("script"),Zn(i),Wn(i,"link",n),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(e,i))}}function E0(n,a,t,l){var e=(e=P.current)?Li(e):null;if(!e)throw Error(c(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Cl(t.href),t=tl(e).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Cl(t.href);var i=tl(e).hoistableStyles,u=i.get(n);if(u||(e=e.ownerDocument||e,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(n,u),(i=e.querySelector(_e(n)))&&!i._p&&(u.instance=i,u.state.loading=5),Ea.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ea.set(n,t),i||_m(e,n,t,u.state))),a&&l===null)throw Error(c(528,""));return u}if(a&&l!==null)throw Error(c(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Rl(t),t=tl(e).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,n))}}function Cl(n){return'href="'+ya(n)+'"'}function _e(n){return'link[rel="stylesheet"]['+n+"]"}function M0(n){return C({},n,{"data-precedence":n.precedence,precedence:null})}function _m(n,a,t,l){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=n.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Wn(a,"link",t),Zn(a),n.head.appendChild(a))}function Rl(n){return'[src="'+ya(n)+'"]'}function Ae(n){return"script[async]"+n}function D0(n,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=n.querySelector('style[data-href~="'+ya(t.href)+'"]');if(l)return a.instance=l,Zn(l),l;var e=C({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Zn(l),Wn(l,"style",e),wi(l,t.precedence,n),a.instance=l;case"stylesheet":e=Cl(t.href);var i=n.querySelector(_e(e));if(i)return a.state.loading|=4,a.instance=i,Zn(i),i;l=M0(t),(e=Ea.get(e))&&Ar(l,e),i=(n.ownerDocument||n).createElement("link"),Zn(i);var u=i;return u._p=new Promise(function(r,d){u.onload=r,u.onerror=d}),Wn(i,"link",l),a.state.loading|=4,wi(i,t.precedence,n),a.instance=i;case"script":return i=Rl(t.src),(e=n.querySelector(Ae(i)))?(a.instance=e,Zn(e),e):(l=t,(e=Ea.get(i))&&(l=C({},t),Er(l,e)),n=n.ownerDocument||n,e=n.createElement("script"),Zn(e),Wn(e,"link",l),n.head.appendChild(e),a.instance=e);case"void":return null;default:throw Error(c(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,wi(l,t.precedence,n));return a.instance}function wi(n,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),e=l.length?l[l.length-1]:null,i=e,u=0;u<l.length;u++){var r=l[u];if(r.dataset.precedence===a)i=r;else if(i!==e)break}i?i.parentNode.insertBefore(n,i.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(n,a.firstChild))}function Ar(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function Er(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Ki=null;function N0(n,a,t){if(Ki===null){var l=new Map,e=Ki=new Map;e.set(t,l)}else e=Ki,l=e.get(t),l||(l=new Map,e.set(t,l));if(l.has(n))return l;for(l.set(n,null),t=t.getElementsByTagName(n),e=0;e<t.length;e++){var i=t[e];if(!(i[Ql]||i[Ln]||n==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(a)||"";u=n+u;var r=l.get(u);r?r.push(i):l.set(u,[i])}}return l}function U0(n,a,t){n=n.ownerDocument||n,n.head.insertBefore(t,a==="title"?n.querySelector("head > title"):null)}function Am(n,a,t){if(t===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(n=a.disabled,typeof a.precedence=="string"&&n==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function H0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Em(n,a,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var e=Cl(l.href),i=a.querySelector(_e(e));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(n.count++,n=Ji.bind(n),a.then(n,n)),t.state.loading|=4,t.instance=i,Zn(i);return}i=a.ownerDocument||a,l=M0(l),(e=Ea.get(e))&&Ar(l,e),i=i.createElement("link"),Zn(i);var u=i;u._p=new Promise(function(r,d){u.onload=r,u.onerror=d}),Wn(i,"link",l),t.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Ji.bind(n),a.addEventListener("load",t),a.addEventListener("error",t))}}var Mr=0;function Mm(n,a){return n.stylesheets&&n.count===0&&Fi(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var l=setTimeout(function(){if(n.stylesheets&&Fi(n,n.stylesheets),n.unsuspend){var i=n.unsuspend;n.unsuspend=null,i()}},6e4+a);0<n.imgBytes&&Mr===0&&(Mr=62500*rm());var e=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Fi(n,n.stylesheets),n.unsuspend)){var i=n.unsuspend;n.unsuspend=null,i()}},(n.imgBytes>Mr?50:800)+a);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(e)}}:null}function Ji(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fi(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Wi=null;function Fi(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Wi=new Map,a.forEach(Dm,n),Wi=null,Ji.call(n))}function Dm(n,a){if(!(a.state.loading&4)){var t=Wi.get(n);if(t)var l=t.get(null);else{t=new Map,Wi.set(n,t);for(var e=n.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<e.length;i++){var u=e[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),l=u)}l&&t.set(null,l)}e=a.instance,u=e.getAttribute("data-precedence"),i=t.get(u)||l,i===l&&t.set(null,e),t.set(u,e),this.count++,l=Ji.bind(this),e.addEventListener("load",l),e.addEventListener("error",l),i?i.parentNode.insertBefore(e,i.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(e,n.firstChild)),a.state.loading|=4}}var Ee={$$typeof:cn,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function Nm(n,a,t,l,e,i,u,r,d){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ou(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.hiddenUpdates=Ou(null),this.identifierPrefix=l,this.onUncaughtError=e,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function q0(n,a,t,l,e,i,u,r,d,g,O,_){return n=new Nm(n,a,t,u,d,g,O,_,r),a=1,i===!0&&(a|=24),i=sa(3,null,null,a),n.current=i,i.stateNode=n,a=uo(),a.refCount++,n.pooledCache=a,a.refCount++,i.memoizedState={element:l,isDehydrated:t,cache:a},fo(i),n}function C0(n){return n?(n=dl,n):dl}function R0(n,a,t,l,e,i){e=C0(e),l.context===null?l.context=e:l.pendingContext=e,l=mt(a),l.payload={element:t},i=i===void 0?null:i,i!==null&&(l.callback=i),t=bt(n,l,a),t!==null&&(ua(t,n,a),ie(t,n,a))}function j0(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<a?t:a}}function Dr(n,a){j0(n,a),(n=n.alternate)&&j0(n,a)}function B0(n){if(n.tag===13||n.tag===31){var a=kt(n,67108864);a!==null&&ua(a,n,67108864),Dr(n,67108864)}}function Y0(n){if(n.tag===13||n.tag===31){var a=va();a=zu(a);var t=kt(n,a);t!==null&&ua(t,n,a),Dr(n,a)}}var $i=!0;function Um(n,a,t,l){var e=z.T;z.T=null;var i=q.p;try{q.p=2,Nr(n,a,t,l)}finally{q.p=i,z.T=e}}function Hm(n,a,t,l){var e=z.T;z.T=null;var i=q.p;try{q.p=8,Nr(n,a,t,l)}finally{q.p=i,z.T=e}}function Nr(n,a,t,l){if($i){var e=Ur(l);if(e===null)vr(n,a,l,Pi,t),X0(n,l);else if(Cm(e,n,a,t,l))l.stopPropagation();else if(X0(n,l),a&4&&-1<qm.indexOf(n)){for(;e!==null;){var i=al(e);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ct(i.pendingLanes);if(u!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var d=1<<31-ca(u);r.entanglements[1]|=d,u&=~d}Ya(i),(dn&6)===0&&(Ci=oa()+500,Se(0))}}break;case 31:case 13:r=kt(i,2),r!==null&&ua(r,i,2),ji(),Dr(i,2)}if(i=Ur(l),i===null&&vr(n,a,l,Pi,t),i===e)break;e=i}e!==null&&l.stopPropagation()}else vr(n,a,l,null,t)}}function Ur(n){return n=Hu(n),Hr(n)}var Pi=null;function Hr(n){if(Pi=null,n=nl(n),n!==null){var a=A(n);if(a===null)n=null;else{var t=a.tag;if(t===13){if(n=N(a),n!==null)return n;n=null}else if(t===31){if(n=G(a),n!==null)return n;n=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Pi=n,null}function k0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gd()){case wr:return 2;case Kr:return 8;case Ge:case yd:return 32;case Jr:return 268435456;default:return 32}default:return 32}}var qr=!1,At=null,Et=null,Mt=null,Me=new Map,De=new Map,Dt=[],qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X0(n,a){switch(n){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":Me.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":De.delete(a.pointerId)}}function Ne(n,a,t,l,e,i){return n===null||n.nativeEvent!==i?(n={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:i,targetContainers:[e]},a!==null&&(a=al(a),a!==null&&B0(a)),n):(n.eventSystemFlags|=l,a=n.targetContainers,e!==null&&a.indexOf(e)===-1&&a.push(e),n)}function Cm(n,a,t,l,e){switch(a){case"focusin":return At=Ne(At,n,a,t,l,e),!0;case"dragenter":return Et=Ne(Et,n,a,t,l,e),!0;case"mouseover":return Mt=Ne(Mt,n,a,t,l,e),!0;case"pointerover":var i=e.pointerId;return Me.set(i,Ne(Me.get(i)||null,n,a,t,l,e)),!0;case"gotpointercapture":return i=e.pointerId,De.set(i,Ne(De.get(i)||null,n,a,t,l,e)),!0}return!1}function G0(n){var a=nl(n.target);if(a!==null){var t=A(a);if(t!==null){if(a=t.tag,a===13){if(a=N(t),a!==null){n.blockedOn=a,nc(n.priority,function(){Y0(t)});return}}else if(a===31){if(a=G(t),a!==null){n.blockedOn=a,nc(n.priority,function(){Y0(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ii(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var t=Ur(n.nativeEvent);if(t===null){t=n.nativeEvent;var l=new t.constructor(t.type,t);Uu=l,t.target.dispatchEvent(l),Uu=null}else return a=al(t),a!==null&&B0(a),n.blockedOn=t,!1;a.shift()}return!0}function Q0(n,a,t){Ii(n)&&t.delete(a)}function Rm(){qr=!1,At!==null&&Ii(At)&&(At=null),Et!==null&&Ii(Et)&&(Et=null),Mt!==null&&Ii(Mt)&&(Mt=null),Me.forEach(Q0),De.forEach(Q0)}function nu(n,a){n.blockedOn===a&&(n.blockedOn=null,qr||(qr=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Rm)))}var au=null;function Z0(n){au!==n&&(au=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){au===n&&(au=null);for(var a=0;a<n.length;a+=3){var t=n[a],l=n[a+1],e=n[a+2];if(typeof l!="function"){if(Hr(l||t)===null)continue;break}var i=al(t);i!==null&&(n.splice(a,3),a-=3,Uo(i,{pending:!0,data:e,method:t.method,action:l},l,e))}}))}function jl(n){function a(d){return nu(d,n)}At!==null&&nu(At,n),Et!==null&&nu(Et,n),Mt!==null&&nu(Mt,n),Me.forEach(a),De.forEach(a);for(var t=0;t<Dt.length;t++){var l=Dt[t];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Dt.length&&(t=Dt[0],t.blockedOn===null);)G0(t),t.blockedOn===null&&Dt.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var e=t[l],i=t[l+1],u=e[na]||null;if(typeof i=="function")u||Z0(t);else if(u){var r=null;if(i&&i.hasAttribute("formAction")){if(e=i,u=i[na]||null)r=u.formAction;else if(Hr(e)!==null)continue}else r=u.action;typeof r=="function"?t[l+1]=r:(t.splice(l,3),l-=3),Z0(t)}}}function V0(){function n(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return e=u})},focusReset:"manual",scroll:"manual"})}function a(){e!==null&&(e(),e=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,e=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),e!==null&&(e(),e=null)}}}function Cr(n){this._internalRoot=n}tu.prototype.render=Cr.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(c(409));var t=a.current,l=va();R0(t,l,n,a,null,null)},tu.prototype.unmount=Cr.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;R0(n.current,2,null,n,null,null),ji(),a[It]=null}};function tu(n){this._internalRoot=n}tu.prototype.unstable_scheduleHydration=function(n){if(n){var a=Ir();n={blockedOn:null,target:n,priority:a};for(var t=0;t<Dt.length&&a!==0&&a<Dt[t].priority;t++);Dt.splice(t,0,n),t===0&&G0(n)}};var L0=f.version;if(L0!=="19.2.3")throw Error(c(527,L0,"19.2.3"));q.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(c(188)):(n=Object.keys(n).join(","),Error(c(268,n)));return n=v(a),n=n!==null?H(n):null,n=n===null?null:n.stateNode,n};var jm={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{kl=lu.inject(jm),ra=lu}catch{}}return He.createRoot=function(n,a){if(!S(n))throw Error(c(299));var t=!1,l="",e=Pf,i=If,u=ns;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(e=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=q0(n,1,!1,null,null,t,l,null,e,i,u,V0),n[It]=a.current,br(n),new Cr(a)},He.hydrateRoot=function(n,a,t){if(!S(n))throw Error(c(299));var l=!1,e="",i=Pf,u=If,r=ns,d=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(e=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.formState!==void 0&&(d=t.formState)),a=q0(n,1,!0,a,t??null,l,e,d,i,u,r,V0),a.context=C0(null),t=a.current,l=va(),l=zu(l),e=mt(l),e.callback=null,bt(t,e,l),t=l,a.current.lanes=t,Gl(a,t),Ya(a),n[It]=a.current,br(n),new tu(a)},He.version="19.2.3",He}var ad;function Km(){if(ad)return Br.exports;ad=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),Br.exports=wm(),Br.exports}var Jm=Km();function Qn(o,f){f===void 0&&(f={});var s=f.insertAt;if(o&&typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],S=document.createElement("style");S.type="text/css",s==="top"&&c.firstChild?c.insertBefore(S,c.firstChild):c.appendChild(S),S.styleSheet?S.styleSheet.cssText=o:S.appendChild(document.createTextNode(o))}}Qn(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var an=function(){return an=Object.assign||function(o){for(var f,s=1,c=arguments.length;s<c;s++)for(var S in f=arguments[s])Object.prototype.hasOwnProperty.call(f,S)&&(o[S]=f[S]);return o},an.apply(this,arguments)};function du(o){return du=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},du(o)}var Wm=/^\s+/,Fm=/\s+$/;function k(o,f){if(f=f||{},(o=o||"")instanceof k)return o;if(!(this instanceof k))return new k(o,f);var s=(function(c){var S={r:0,g:0,b:0},A=1,N=null,G=null,D=null,v=!1,H=!1;typeof c=="string"&&(c=(function(U){U=U.replace(Wm,"").replace(Fm,"").toLowerCase();var M,w=!1;if(Qr[U])U=Qr[U],w=!0;else if(U=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(M=Ha.rgb.exec(U))?{r:M[1],g:M[2],b:M[3]}:(M=Ha.rgba.exec(U))?{r:M[1],g:M[2],b:M[3],a:M[4]}:(M=Ha.hsl.exec(U))?{h:M[1],s:M[2],l:M[3]}:(M=Ha.hsla.exec(U))?{h:M[1],s:M[2],l:M[3],a:M[4]}:(M=Ha.hsv.exec(U))?{h:M[1],s:M[2],v:M[3]}:(M=Ha.hsva.exec(U))?{h:M[1],s:M[2],v:M[3],a:M[4]}:(M=Ha.hex8.exec(U))?{r:pa(M[1]),g:pa(M[2]),b:pa(M[3]),a:od(M[4]),format:w?"name":"hex8"}:(M=Ha.hex6.exec(U))?{r:pa(M[1]),g:pa(M[2]),b:pa(M[3]),format:w?"name":"hex"}:(M=Ha.hex4.exec(U))?{r:pa(M[1]+""+M[1]),g:pa(M[2]+""+M[2]),b:pa(M[3]+""+M[3]),a:od(M[4]+""+M[4]),format:w?"name":"hex8"}:(M=Ha.hex3.exec(U))?{r:pa(M[1]+""+M[1]),g:pa(M[2]+""+M[2]),b:pa(M[3]+""+M[3]),format:w?"name":"hex"}:!1})(c)),du(c)=="object"&&(et(c.r)&&et(c.g)&&et(c.b)?(C=c.r,L=c.g,Z=c.b,S={r:255*An(C,255),g:255*An(L,255),b:255*An(Z,255)},v=!0,H=String(c.r).substr(-1)==="%"?"prgb":"rgb"):et(c.h)&&et(c.s)&&et(c.v)?(N=Ce(c.s),G=Ce(c.v),S=(function(U,M,w){U=6*An(U,360),M=An(M,100),w=An(w,100);var un=Math.floor(U),On=U-un,cn=w*(1-M),Cn=w*(1-On*M),Xn=w*(1-(1-On)*M),En=un%6,J=[w,Cn,cn,cn,Xn,w][En],Rn=[Xn,w,w,Cn,cn,cn][En],Mn=[cn,cn,Xn,w,w,Cn][En];return{r:255*J,g:255*Rn,b:255*Mn}})(c.h,N,G),v=!0,H="hsv"):et(c.h)&&et(c.s)&&et(c.l)&&(N=Ce(c.s),D=Ce(c.l),S=(function(U,M,w){var un,On,cn;function Cn(J,Rn,Mn){return Mn<0&&(Mn+=1),Mn>1&&(Mn-=1),Mn<1/6?J+6*(Rn-J)*Mn:Mn<.5?Rn:Mn<2/3?J+(Rn-J)*(2/3-Mn)*6:J}if(U=An(U,360),M=An(M,100),w=An(w,100),M===0)un=On=cn=w;else{var Xn=w<.5?w*(1+M):w+M-w*M,En=2*w-Xn;un=Cn(En,Xn,U+1/3),On=Cn(En,Xn,U),cn=Cn(En,Xn,U-1/3)}return{r:255*un,g:255*On,b:255*cn}})(c.h,N,D),v=!0,H="hsl"),c.hasOwnProperty("a")&&(A=c.a));var C,L,Z;return A=fd(A),{ok:v,format:c.format||H,r:Math.min(255,Math.max(S.r,0)),g:Math.min(255,Math.max(S.g,0)),b:Math.min(255,Math.max(S.b,0)),a:A}})(o);this._originalInput=o,this._r=s.r,this._g=s.g,this._b=s.b,this._a=s.a,this._roundA=Math.round(100*this._a)/100,this._format=f.format||s.format,this._gradientType=f.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=s.ok}function td(o,f,s){o=An(o,255),f=An(f,255),s=An(s,255);var c,S,A=Math.max(o,f,s),N=Math.min(o,f,s),G=(A+N)/2;if(A==N)c=S=0;else{var D=A-N;switch(S=G>.5?D/(2-A-N):D/(A+N),A){case o:c=(f-s)/D+(f<s?6:0);break;case f:c=(s-o)/D+2;break;case s:c=(o-f)/D+4}c/=6}return{h:c,s:S,l:G}}function ld(o,f,s){o=An(o,255),f=An(f,255),s=An(s,255);var c,S,A=Math.max(o,f,s),N=Math.min(o,f,s),G=A,D=A-N;if(S=A===0?0:D/A,A==N)c=0;else{switch(A){case o:c=(f-s)/D+(f<s?6:0);break;case f:c=(s-o)/D+2;break;case s:c=(o-f)/D+4}c/=6}return{h:c,s:S,v:G}}function ed(o,f,s,c){var S=[qa(Math.round(o).toString(16)),qa(Math.round(f).toString(16)),qa(Math.round(s).toString(16))];return c&&S[0].charAt(0)==S[0].charAt(1)&&S[1].charAt(0)==S[1].charAt(1)&&S[2].charAt(0)==S[2].charAt(1)?S[0].charAt(0)+S[1].charAt(0)+S[2].charAt(0):S.join("")}function id(o,f,s,c){return[qa(sd(c)),qa(Math.round(o).toString(16)),qa(Math.round(f).toString(16)),qa(Math.round(s).toString(16))].join("")}function $m(o,f){f=f===0?0:f||10;var s=k(o).toHsl();return s.s-=f/100,s.s=bu(s.s),k(s)}function Pm(o,f){f=f===0?0:f||10;var s=k(o).toHsl();return s.s+=f/100,s.s=bu(s.s),k(s)}function Im(o){return k(o).desaturate(100)}function n1(o,f){f=f===0?0:f||10;var s=k(o).toHsl();return s.l+=f/100,s.l=bu(s.l),k(s)}function a1(o,f){f=f===0?0:f||10;var s=k(o).toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(-f/100*255))),s.g=Math.max(0,Math.min(255,s.g-Math.round(-f/100*255))),s.b=Math.max(0,Math.min(255,s.b-Math.round(-f/100*255))),k(s)}function t1(o,f){f=f===0?0:f||10;var s=k(o).toHsl();return s.l-=f/100,s.l=bu(s.l),k(s)}function l1(o,f){var s=k(o).toHsl(),c=(s.h+f)%360;return s.h=c<0?360+c:c,k(s)}function e1(o){var f=k(o).toHsl();return f.h=(f.h+180)%360,k(f)}function ud(o,f){if(isNaN(f)||f<=0)throw new Error("Argument to polyad must be a positive number");for(var s=k(o).toHsl(),c=[k(o)],S=360/f,A=1;A<f;A++)c.push(k({h:(s.h+A*S)%360,s:s.s,l:s.l}));return c}function i1(o){var f=k(o).toHsl(),s=f.h;return[k(o),k({h:(s+72)%360,s:f.s,l:f.l}),k({h:(s+216)%360,s:f.s,l:f.l})]}function u1(o,f,s){f=f||6,s=s||30;var c=k(o).toHsl(),S=360/s,A=[k(o)];for(c.h=(c.h-(S*f>>1)+720)%360;--f;)c.h=(c.h+S)%360,A.push(k(c));return A}function o1(o,f){f=f||6;for(var s=k(o).toHsv(),c=s.h,S=s.s,A=s.v,N=[],G=1/f;f--;)N.push(k({h:c,s:S,v:A})),A=(A+G)%1;return N}k.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var o=this.toRgb();return(299*o.r+587*o.g+114*o.b)/1e3},getLuminance:function(){var o,f,s,c=this.toRgb();return o=c.r/255,f=c.g/255,s=c.b/255,.2126*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.7152*(f<=.03928?f/12.92:Math.pow((f+.055)/1.055,2.4))+.0722*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))},setAlpha:function(o){return this._a=fd(o),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var o=ld(this._r,this._g,this._b);return{h:360*o.h,s:o.s,v:o.v,a:this._a}},toHsvString:function(){var o=ld(this._r,this._g,this._b),f=Math.round(360*o.h),s=Math.round(100*o.s),c=Math.round(100*o.v);return this._a==1?"hsv("+f+", "+s+"%, "+c+"%)":"hsva("+f+", "+s+"%, "+c+"%, "+this._roundA+")"},toHsl:function(){var o=td(this._r,this._g,this._b);return{h:360*o.h,s:o.s,l:o.l,a:this._a}},toHslString:function(){var o=td(this._r,this._g,this._b),f=Math.round(360*o.h),s=Math.round(100*o.s),c=Math.round(100*o.l);return this._a==1?"hsl("+f+", "+s+"%, "+c+"%)":"hsla("+f+", "+s+"%, "+c+"%, "+this._roundA+")"},toHex:function(o){return ed(this._r,this._g,this._b,o)},toHexString:function(o){return"#"+this.toHex(o)},toHex8:function(o){return(function(f,s,c,S,A){var N=[qa(Math.round(f).toString(16)),qa(Math.round(s).toString(16)),qa(Math.round(c).toString(16)),qa(sd(S))];return A&&N[0].charAt(0)==N[0].charAt(1)&&N[1].charAt(0)==N[1].charAt(1)&&N[2].charAt(0)==N[2].charAt(1)&&N[3].charAt(0)==N[3].charAt(1)?N[0].charAt(0)+N[1].charAt(0)+N[2].charAt(0)+N[3].charAt(0):N.join("")})(this._r,this._g,this._b,this._a,o)},toHex8String:function(o){return"#"+this.toHex8(o)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*An(this._r,255))+"%",g:Math.round(100*An(this._g,255))+"%",b:Math.round(100*An(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*An(this._r,255))+"%, "+Math.round(100*An(this._g,255))+"%, "+Math.round(100*An(this._b,255))+"%)":"rgba("+Math.round(100*An(this._r,255))+"%, "+Math.round(100*An(this._g,255))+"%, "+Math.round(100*An(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(r1[ed(this._r,this._g,this._b,!0)]||!1)},toFilter:function(o){var f="#"+id(this._r,this._g,this._b,this._a),s=f,c=this._gradientType?"GradientType = 1, ":"";if(o){var S=k(o);s="#"+id(S._r,S._g,S._b,S._a)}return"progid:DXImageTransform.Microsoft.gradient("+c+"startColorstr="+f+",endColorstr="+s+")"},toString:function(o){var f=!!o;o=o||this._format;var s=!1,c=this._a<1&&this._a>=0;return f||!c||o!=="hex"&&o!=="hex6"&&o!=="hex3"&&o!=="hex4"&&o!=="hex8"&&o!=="name"?(o==="rgb"&&(s=this.toRgbString()),o==="prgb"&&(s=this.toPercentageRgbString()),o!=="hex"&&o!=="hex6"||(s=this.toHexString()),o==="hex3"&&(s=this.toHexString(!0)),o==="hex4"&&(s=this.toHex8String(!0)),o==="hex8"&&(s=this.toHex8String()),o==="name"&&(s=this.toName()),o==="hsl"&&(s=this.toHslString()),o==="hsv"&&(s=this.toHsvString()),s||this.toHexString()):o==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return k(this.toString())},_applyModification:function(o,f){var s=o.apply(null,[this].concat([].slice.call(f)));return this._r=s._r,this._g=s._g,this._b=s._b,this.setAlpha(s._a),this},lighten:function(){return this._applyModification(n1,arguments)},brighten:function(){return this._applyModification(a1,arguments)},darken:function(){return this._applyModification(t1,arguments)},desaturate:function(){return this._applyModification($m,arguments)},saturate:function(){return this._applyModification(Pm,arguments)},greyscale:function(){return this._applyModification(Im,arguments)},spin:function(){return this._applyModification(l1,arguments)},_applyCombination:function(o,f){return o.apply(null,[this].concat([].slice.call(f)))},analogous:function(){return this._applyCombination(u1,arguments)},complement:function(){return this._applyCombination(e1,arguments)},monochromatic:function(){return this._applyCombination(o1,arguments)},splitcomplement:function(){return this._applyCombination(i1,arguments)},triad:function(){return this._applyCombination(ud,[3])},tetrad:function(){return this._applyCombination(ud,[4])}},k.fromRatio=function(o,f){if(du(o)=="object"){var s={};for(var c in o)o.hasOwnProperty(c)&&(s[c]=c==="a"?o[c]:Ce(o[c]));o=s}return k(o,f)},k.equals=function(o,f){return!(!o||!f)&&k(o).toRgbString()==k(f).toRgbString()},k.random=function(){return k.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},k.mix=function(o,f,s){s=s===0?0:s||50;var c=k(o).toRgb(),S=k(f).toRgb(),A=s/100;return k({r:(S.r-c.r)*A+c.r,g:(S.g-c.g)*A+c.g,b:(S.b-c.b)*A+c.b,a:(S.a-c.a)*A+c.a})},k.readability=function(o,f){var s=k(o),c=k(f);return(Math.max(s.getLuminance(),c.getLuminance())+.05)/(Math.min(s.getLuminance(),c.getLuminance())+.05)},k.isReadable=function(o,f,s){var c,S,A=k.readability(o,f);switch(S=!1,(c=(function(N){var G,D;return G=((N=N||{level:"AA",size:"small"}).level||"AA").toUpperCase(),D=(N.size||"small").toLowerCase(),G!=="AA"&&G!=="AAA"&&(G="AA"),D!=="small"&&D!=="large"&&(D="small"),{level:G,size:D}})(s)).level+c.size){case"AAsmall":case"AAAlarge":S=A>=4.5;break;case"AAlarge":S=A>=3;break;case"AAAsmall":S=A>=7}return S},k.mostReadable=function(o,f,s){var c,S,A,N,G=null,D=0;S=(s=s||{}).includeFallbackColors,A=s.level,N=s.size;for(var v=0;v<f.length;v++)(c=k.readability(o,f[v]))>D&&(D=c,G=k(f[v]));return k.isReadable(o,G,{level:A,size:N})||!S?G:(s.includeFallbackColors=!1,k.mostReadable(o,["#fff","#000"],s))};var Qr=k.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},r1=k.hexNames=(function(o){var f={};for(var s in o)o.hasOwnProperty(s)&&(f[o[s]]=s);return f})(Qr);function fd(o){return o=parseFloat(o),(isNaN(o)||o<0||o>1)&&(o=1),o}function An(o,f){(function(c){return typeof c=="string"&&c.indexOf(".")!=-1&&parseFloat(c)===1})(o)&&(o="100%");var s=(function(c){return typeof c=="string"&&c.indexOf("%")!=-1})(o);return o=Math.min(f,Math.max(0,parseFloat(o))),s&&(o=parseInt(o*f,10)/100),Math.abs(o-f)<1e-6?1:o%f/parseFloat(f)}function bu(o){return Math.min(1,Math.max(0,o))}function pa(o){return parseInt(o,16)}function qa(o){return o.length==1?"0"+o:""+o}function Ce(o){return o<=1&&(o=100*o+"%"),o}function sd(o){return Math.round(255*parseFloat(o)).toString(16)}function od(o){return pa(o)/255}var Ut,eu,iu,Ha=(eu="[\\s|\\(]+("+(Ut="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ut+")[,|\\s]+("+Ut+")\\s*\\)?",iu="[\\s|\\(]+("+Ut+")[,|\\s]+("+Ut+")[,|\\s]+("+Ut+")[,|\\s]+("+Ut+")\\s*\\)?",{CSS_UNIT:new RegExp(Ut),rgb:new RegExp("rgb"+eu),rgba:new RegExp("rgba"+iu),hsl:new RegExp("hsl"+eu),hsla:new RegExp("hsla"+iu),hsv:new RegExp("hsv"+eu),hsva:new RegExp("hsva"+iu),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function et(o){return!!Ha.CSS_UNIT.exec(o)}var Re=function(o,f){var s=(typeof o=="string"?parseInt(o):o)||0;if(s>=-5&&s<=5){var c=s,S=parseFloat(f),A=S+c*(S/5)*-1;return(A==0||A<=Number.EPSILON)&&(A=.1),{animationPeriod:A+"s"}}return{animationPeriod:f}},je=function(o,f){var s=o||{},c="";switch(f){case"small":c="12px";break;case"medium":c="16px";break;case"large":c="20px";break;default:c=void 0}var S={};if(s.fontSize){var A=s.fontSize;S=(function(N,G){var D={};for(var v in N)Object.prototype.hasOwnProperty.call(N,v)&&G.indexOf(v)<0&&(D[v]=N[v]);if(N!=null&&typeof Object.getOwnPropertySymbols=="function"){var H=0;for(v=Object.getOwnPropertySymbols(N);H<v.length;H++)G.indexOf(v[H])<0&&Object.prototype.propertyIsEnumerable.call(N,v[H])&&(D[v[H]]=N[v[H]])}return D})(s,["fontSize"]),c=A}return{fontSize:c,styles:S}},c1={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Be=function(o){var f=o.className,s=o.text,c=o.textColor,S=o.staticText,A=o.style;return s?rn.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(f||"").trim(),style:an(an(an({},S&&c1),c&&{color:c,mixBlendMode:"unset"}),A&&A)},typeof s=="string"&&s.length?s:"loading"):null},it="rgb(50, 205, 50)";function Ye(o,f){if(f===void 0&&(f=0),o.length===0)throw new Error("Input array cannot be empty!");var s=[];return(function c(S,A){return A===void 0&&(A=0),s.push.apply(s,S),s.length<A&&c(s,A),s.slice(0,A)})(o,f)}Qn(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);k(it).toRgb();Array.from({length:4},(function(o,f){return"--atom-phase".concat(f+1,"-rgb")}));Qn(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(o,f){return"--commet-phase".concat(f+1,"-color")}));Qn(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var uu=Array.from({length:4},(function(o,f){return"--OP-annulus-phase".concat(f+1,"-color")})),f1=function(o){var f,s=je(o?.style,o?.size),c=s.styles,S=s.fontSize,A=o?.easing,N=Re(o?.speedPlus,"1.5s").animationPeriod,G=(function(v){var H={},C=uu.length;if(v instanceof Array){for(var L=Ye(v,C),Z=0;Z<L.length&&!(Z>=4);Z++)H[uu[Z]]=L[Z];return H}try{if(typeof v!="string")throw new Error("Color String expected");for(var U=0;U<C;U++)H[uu[U]]=v}catch(M){for(M instanceof Error?console.warn("[".concat(M.message,']: Received "').concat(typeof v,'" instead with value, ').concat(JSON.stringify(v))):console.warn("".concat(JSON.stringify(v),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),U=0;U<C;U++)H[uu[U]]=it}return H})((f=o?.color)!==null&&f!==void 0?f:""),D=o?.dense?4.3:2.9;return rn.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:an(an(an(an(an({},S&&{fontSize:S}),N&&{"--rli-animation-duration":N}),A&&{"--rli-animation-function":A}),G),c),role:"status","aria-live":"polite","aria-label":"Loading"},rn.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},rn.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},rn.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:D,strokeMiterlimit:"10"})),rn.createElement(Be,{className:"OP-annulus-text",text:o?.text,textColor:o?.textColor})))};function Gr(o){return o&&o.Math===Math&&o}Qn(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var Bl=Gr(typeof window=="object"&&window)||Gr(typeof self=="object"&&self)||Gr(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();function dd(){var o,f;return!((o=Bl?.crypto)===null||o===void 0)&&o.randomUUID?Bl.crypto.randomUUID():!((f=Bl?.btoa)===null||f===void 0)&&f.name?Bl.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var ou=Array.from({length:4},(function(o,f){return"--OP-dotted-phase".concat(f+1,"-color")})),s1=function(o){var f,s=je(o?.style,o?.size),c=s.styles,S=s.fontSize,A=o?.easing,N=Re(o?.speedPlus,"1.2s").animationPeriod,G=(function(v){var H={},C=ou.length;if(v instanceof Array){for(var L=Ye(v,C),Z=0;Z<L.length&&!(Z>=4);Z++)H[ou[Z]]=L[Z];return H}try{if(typeof v!="string")throw new Error("Color String expected");for(var U=0;U<C;U++)H[ou[U]]=v}catch(M){for(M instanceof Error?console.warn("[".concat(M.message,']: Received "').concat(typeof v,'" with value, ').concat(JSON.stringify(v))):console.warn("".concat(JSON.stringify(v),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),U=0;U<C;U++)H[ou[U]]=it}return H})((f=o?.color)!==null&&f!==void 0?f:""),D=o?.dense?16:12;return rn.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:an(an(an(an(an({},S&&{fontSize:S}),N&&{"--rli-animation-duration":N}),A&&{"--rli-animation-function":A}),G),c),role:"status","aria-live":"polite","aria-label":"Loading"},rn.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:D}).map((function(v,H){var C=(function(U,M,w){if(M===16){var un=360*U/M,On=M-U,cn=Number.parseFloat(w)/M*On*-1;return{transform:"rotate(".concat(un,"deg)"),animationDelay:"".concat(cn,"s")}}return{transform:"",animationDelay:""}})(H,D,N),L=C.animationDelay,Z=C.transform;return rn.createElement("span",{key:dd(),className:"rli-d-i-b dot-shape-holder",style:Z?{transform:Z}:void 0},rn.createElement("span",{className:"dot",style:L?{animationDelay:L}:void 0}))})),rn.createElement(Be,{className:"OP-dotted-text",text:o?.text,textColor:o?.textColor})))};Qn(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var ru=Array.from({length:4},(function(o,f){return"--OP-spokes-phase".concat(f+1,"-color")})),d1=function(o){var f,s=je(o?.style,o?.size),c=s.styles,S=s.fontSize,A=o?.easing,N=Re(o?.speedPlus,"1.2s").animationPeriod,G=(function(v){var H={},C=ru.length;if(v instanceof Array){for(var L=Ye(v,C),Z=0;Z<L.length&&!(Z>=4);Z++)H[ru[Z]]=L[Z];return H}try{if(typeof v!="string")throw new Error("Color String expected");for(var U=0;U<C;U++)H[ru[U]]=v}catch(M){for(M instanceof Error?console.warn("[".concat(M.message,']: Received "').concat(typeof v,'" instead with value, ').concat(JSON.stringify(v))):console.warn("".concat(JSON.stringify(v),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),U=0;U<C;U++)H[ru[U]]=it}return H})((f=o?.color)!==null&&f!==void 0?f:""),D=o?.dense?16:12;return rn.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:an(an(an(an(an({},S&&{fontSize:S}),N&&{"--rli-animation-duration":N}),A&&{"--rli-animation-function":A}),G),c),role:"status","aria-live":"polite","aria-label":"Loading"},rn.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:D},(function(v,H){return rn.createElement("span",{key:dd(),className:"rli-d-i-b spoke",style:h1(H,D,N)})}))),rn.createElement(Be,{text:o?.text,textColor:o?.textColor}))};function h1(o,f,s){if(f===16){var c=f-o,S=Number.parseFloat(s)/f;return{transform:"rotate(".concat(360*o/f,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((c-1)*S*-1,"s")}}}Qn(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var cu=Array.from({length:4},(function(o,f){return"--OP-annulus-dual-sectors-phase".concat(f+1,"-color")})),m1=function(o){var f,s=je(o?.style,o?.size),c=s.styles,S=s.fontSize,A=o?.easing,N=Re(o?.speedPlus,"1.2s").animationPeriod,G=(function(v){var H={},C=cu.length;if(v instanceof Array){for(var L=Ye(v,C),Z=0;Z<L.length&&!(Z>=4);Z++)H[cu[Z]]=L[Z];return H}try{if(typeof v!="string")throw new Error("Color String expected");for(var U=0;U<C;U++)H[cu[U]]=v}catch(M){for(M instanceof Error?console.warn("[".concat(M.message,']: Received "').concat(typeof v,'" with value, ').concat(JSON.stringify(v))):console.warn("".concat(JSON.stringify(v),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),U=0;U<C;U++)H[cu[U]]=it}return H})((f=o?.color)!==null&&f!==void 0?f:""),D=o.dense?"0.45em":"";return rn.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:an(an(an(an(an({},S&&{fontSize:S}),N&&{"--rli-animation-duration":N}),A&&{"--rli-animation-function":A}),G),c),role:"status","aria-live":"polite","aria-label":"Loading"},rn.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},rn.createElement("span",{className:"rli-d-i-b annulus-sectors",style:an({},D&&{borderWidth:D})}),rn.createElement(Be,{className:"OP-annulus-dual-sectors-text",text:o?.text,textColor:o?.textColor})))};Qn(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var qe=Array.from({length:4},(function(o,f){return["--OP-annulus-track-phase".concat(f+1,"-color"),"--OP-annulus-sector-phase".concat(f+1,"-color")]})),fu=function(o){return o===void 0&&(o=1),.25*o},b1=function(o){var f,s=je(o?.style,o?.size),c=s.styles,S=s.fontSize,A=o?.easing,N=Re(o?.speedPlus,"1s").animationPeriod,G=(function(v){var H={},C=qe.length;if(v instanceof Array){for(var L=Ye(v,C),Z=0;Z<L.length&&!(Z>=4);Z++){var U=qe[Z];try{if(!(un=k(L[Z])).isValid())throw new Error("Invalid Color: ".concat(un.getOriginalInput()));var M=un.setAlpha(fu(un.getAlpha())).toRgbString(),w=L[Z];H[U[0]]=M,H[U[1]]=w}catch{w=it,M=(un=k(it)).setAlpha(fu(un.getAlpha())).toRgbString(),H[U[0]]=M,H[U[1]]=w}}return H}try{var un=k(v);if(typeof v!="string")throw new Error("Color String expected");if(!un.isValid())throw new Error("Invalid Color: ".concat(un.getOriginalInput()));w=v,M=un.setAlpha(fu(un.getAlpha())).toRgbString();for(var On=0;On<C;On++)H[(U=qe[On])[0]]=M,H[U[1]]=w}catch(cn){for(cn instanceof Error?console.warn("[".concat(cn.message,']: Received "').concat(typeof v,'" with value, ').concat(JSON.stringify(v))):console.warn("".concat(JSON.stringify(v),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),w=it,M=(un=k(it)).setAlpha(fu(un.getAlpha())).toRgbString(),On=0;On<qe.length;On++)H[(U=qe[On])[0]]=M,H[U[1]]=w}return H})((f=o?.color)!==null&&f!==void 0?f:""),D=o.dense?"0.45em":"";return rn.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:an(an(an(an(an({},S&&{fontSize:S}),N&&{"--rli-animation-duration":N}),A&&{"--rli-animation-function":A}),G),c),role:"status","aria-live":"polite","aria-label":"Loading"},rn.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},rn.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:an({},D&&{borderWidth:D})}),rn.createElement(Be,{className:"OP-annulus-sector-text",text:o?.text,textColor:o?.textColor})))},v1=function(o){var f=Object(o).variant,s=f===void 0?"disc":f;return s==="dotted"?rn.createElement(s1,an({},o)):s==="spokes"?rn.createElement(d1,an({},o)):s==="disc"?rn.createElement(f1,an({},o)):s==="split-disc"?rn.createElement(m1,an({},o)):s==="track-disc"?rn.createElement(b1,an({},o)):null};Qn(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(o,f){return"--four-square-phase".concat(f+1,"-color")}));Qn(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},(function(o,f){return"--mosaic-phase".concat(f+1,"-color")}));Qn(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(o,f){return"--riple-phase".concat(f+1,"-color")}));Qn(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(o,f){return"--TD-pulsate-phase".concat(f+1,"-color")}));Qn(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(o,f){return"--TD-brick-stack-phase".concat(f+1,"-color")}));Qn(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(o,f){return"--TD-bob-phase".concat(f+1,"-color")}));Qn(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(o,f){return"--TD-bounce-phase".concat(f+1,"-color")}));Qn(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},(function(o,f){return"--shape-phase".concat(f+1,"-color")}));Qn(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(o,f){return"--trophySpin-phase".concat(f+1,"-color")}));Qn(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},(function(o,f){return"--slab-phase".concat(f+1,"-color")}));Qn(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(o,f){return"--life-line-phase".concat(f+1,"-color")}));const p1="/Sayt-kopiyasi/assets/NURIK_1-C1D5-K-N.png";var hd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},rd=rn.createContext&&rn.createContext(hd),g1=["attr","size","title"];function y1(o,f){if(o==null)return{};var s=x1(o,f),c,S;if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(o);for(S=0;S<A.length;S++)c=A[S],!(f.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(o,c)&&(s[c]=o[c])}return s}function x1(o,f){if(o==null)return{};var s={};for(var c in o)if(Object.prototype.hasOwnProperty.call(o,c)){if(f.indexOf(c)>=0)continue;s[c]=o[c]}return s}function hu(){return hu=Object.assign?Object.assign.bind():function(o){for(var f=1;f<arguments.length;f++){var s=arguments[f];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(o[c]=s[c])}return o},hu.apply(this,arguments)}function cd(o,f){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);f&&(c=c.filter(function(S){return Object.getOwnPropertyDescriptor(o,S).enumerable})),s.push.apply(s,c)}return s}function mu(o){for(var f=1;f<arguments.length;f++){var s=arguments[f]!=null?arguments[f]:{};f%2?cd(Object(s),!0).forEach(function(c){S1(o,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):cd(Object(s)).forEach(function(c){Object.defineProperty(o,c,Object.getOwnPropertyDescriptor(s,c))})}return o}function S1(o,f,s){return f=O1(f),f in o?Object.defineProperty(o,f,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[f]=s,o}function O1(o){var f=z1(o,"string");return typeof f=="symbol"?f:f+""}function z1(o,f){if(typeof o!="object"||!o)return o;var s=o[Symbol.toPrimitive];if(s!==void 0){var c=s.call(o,f);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(f==="string"?String:Number)(o)}function md(o){return o&&o.map((f,s)=>rn.createElement(f.tag,mu({key:s},f.attr),md(f.child)))}function ke(o){return f=>rn.createElement(T1,hu({attr:mu({},o.attr)},f),md(o.child))}function T1(o){var f=s=>{var{attr:c,size:S,title:A}=o,N=y1(o,g1),G=S||s.size||"1em",D;return s.className&&(D=s.className),o.className&&(D=(D?D+" ":"")+o.className),rn.createElement("svg",hu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,c,N,{className:D,style:mu(mu({color:o.color||s.color},s.style),o.style),height:G,width:G,xmlns:"http://www.w3.org/2000/svg"}),A&&rn.createElement("title",null,A),o.children)};return rd!==void 0?rn.createElement(rd.Consumer,null,s=>f(s)):f(hd)}function _1(o){return ke({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(o)}function A1(o){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(o)}function E1(o){return ke({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(o)}function M1(o){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(o)}function D1(o){return ke({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(o)}const N1=()=>en.jsx("header",{className:"header fixed top-0 right-0 left-0 ",children:en.jsx("div",{className:"contayner",children:en.jsxs("nav",{className:"header__nav flex justify-between items-center px-10 w-full h-20",children:[en.jsx("img",{src:p1,alt:"",className:"header__img w-20 h-20"}),en.jsxs("ul",{className:"header__list flex gap-7",children:[en.jsx("li",{className:"header__item",children:en.jsx("a",{className:"",href:"",children:"Ekskursiyalar"})}),en.jsx("li",{className:"header__item",children:en.jsx("a",{className:"",href:"",children:"Shahar"})}),en.jsx("li",{className:"header__item",children:en.jsx("a",{className:"",href:"",children:"Haqida"})}),en.jsx("li",{className:"header__item",children:en.jsx("a",{className:"",href:"",children:"Aloqaga chiqish"})})]}),en.jsxs("div",{className:"header__box flex gap-3",children:[en.jsxs("div",{className:"header__icons flex gap-2",children:[en.jsx("a",{href:"https://www.facebook.com/?locale=ru_RU",children:en.jsx(_1,{})}),en.jsx("a",{href:"https://x.com/?lang=ru",children:en.jsx(M1,{})}),en.jsx("a",{href:"https://www.instagram.com/",children:en.jsx(A1,{})}),en.jsx("a",{href:"https://www.linkedin.com/",children:en.jsx(E1,{})}),en.jsx("a",{href:"https://www.youtube.com/",children:en.jsx(D1,{})})]}),en.jsxs("select",{name:"",id:"",children:[en.jsx("option",{value:"0",children:"Uzbekcha"}),en.jsx("option",{value:"1",children:"Русский"}),en.jsx("option",{value:"2",children:"English"})]}),en.jsx("button",{children:"🌑"})]})]})})});function U1(){const[o,f]=su.useState(!0);return su.useEffect(()=>{const s=setTimeout(()=>{f(!1)},2500);return()=>clearTimeout(s)},[]),o?en.jsx("div",{className:"loader",children:en.jsx(v1,{className:"w-25 h-25",variant:"dotted",dense:!0,color:"red",size:"medium",text:"-_-"})}):en.jsx("div",{children:en.jsx(N1,{})})}Jm.createRoot(document.getElementById("root")).render(en.jsx(su.StrictMode,{children:en.jsx(U1,{})}));
