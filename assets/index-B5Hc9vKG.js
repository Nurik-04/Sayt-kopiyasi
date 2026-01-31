(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function G0(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var tu={exports:{}},Yl={};var Ep;function Y0(){if(Ep)return Yl;Ep=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function i(r,c,f){var m=null;if(f!==void 0&&(m=""+f),c.key!==void 0&&(m=""+c.key),"key"in c){f={};for(var b in c)b!=="key"&&(f[b]=c[b])}else f=c;return c=f.ref,{$$typeof:l,type:r,key:m,ref:c!==void 0?c:null,props:f}}return Yl.Fragment=s,Yl.jsx=i,Yl.jsxs=i,Yl}var zp;function V0(){return zp||(zp=1,tu.exports=Y0()),tu.exports}var ce=V0(),nu={exports:{}},fe={};var Mp;function X0(){if(Mp)return fe;Mp=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),m=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),N=Symbol.iterator;function O(x){return x===null||typeof x!="object"?null:(x=N&&x[N]||x["@@iterator"],typeof x=="function"?x:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,k={};function E(x,V,$){this.props=x,this.context=V,this.refs=k,this.updater=$||A}E.prototype.isReactComponent={},E.prototype.setState=function(x,V){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,V,"setState")},E.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function M(){}M.prototype=E.prototype;function w(x,V,$){this.props=x,this.context=V,this.refs=k,this.updater=$||A}var X=w.prototype=new M;X.constructor=w,z(X,E.prototype),X.isPureReactComponent=!0;var Q=Array.isArray;function F(){}var Z={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function I(x,V,$){var te=$.ref;return{$$typeof:l,type:x,key:V,ref:te!==void 0?te:null,props:$}}function J(x,V){return I(x.type,V,x.props)}function K(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function P(x){var V={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function($){return V[$]})}var se=/\/+/g;function re(x,V){return typeof x=="object"&&x!==null&&x.key!=null?P(""+x.key):V.toString(36)}function me(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(F,F):(x.status="pending",x.then(function(V){x.status==="pending"&&(x.status="fulfilled",x.value=V)},function(V){x.status==="pending"&&(x.status="rejected",x.reason=V)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function B(x,V,$,te,de){var ve=typeof x;(ve==="undefined"||ve==="boolean")&&(x=null);var Me=!1;if(x===null)Me=!0;else switch(ve){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(x.$$typeof){case l:case s:Me=!0;break;case y:return Me=x._init,B(Me(x._payload),V,$,te,de)}}if(Me)return de=de(x),Me=te===""?"."+re(x,0):te,Q(de)?($="",Me!=null&&($=Me.replace(se,"$&/")+"/"),B(de,V,$,"",function(Pa){return Pa})):de!=null&&(K(de)&&(de=J(de,$+(de.key==null||x&&x.key===de.key?"":(""+de.key).replace(se,"$&/")+"/")+Me)),V.push(de)),1;Me=0;var at=te===""?".":te+":";if(Q(x))for(var je=0;je<x.length;je++)te=x[je],ve=at+re(te,je),Me+=B(te,V,$,ve,de);else if(je=O(x),typeof je=="function")for(x=je.call(x),je=0;!(te=x.next()).done;)te=te.value,ve=at+re(te,je++),Me+=B(te,V,$,ve,de);else if(ve==="object"){if(typeof x.then=="function")return B(me(x),V,$,te,de);throw V=String(x),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Me}function Y(x,V,$){if(x==null)return x;var te=[],de=0;return B(x,te,"","",function(ve){return V.call($,ve,de++)}),te}function j(x){if(x._status===-1){var V=x._result;V=V(),V.then(function($){(x._status===0||x._status===-1)&&(x._status=1,x._result=$)},function($){(x._status===0||x._status===-1)&&(x._status=2,x._result=$)}),x._status===-1&&(x._status=0,x._result=V)}if(x._status===1)return x._result.default;throw x._result}var W=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},ue={map:Y,forEach:function(x,V,$){Y(x,function(){V.apply(this,arguments)},$)},count:function(x){var V=0;return Y(x,function(){V++}),V},toArray:function(x){return Y(x,function(V){return V})||[]},only:function(x){if(!K(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return fe.Activity=g,fe.Children=ue,fe.Component=E,fe.Fragment=i,fe.Profiler=c,fe.PureComponent=w,fe.StrictMode=r,fe.Suspense=p,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,fe.__COMPILER_RUNTIME={__proto__:null,c:function(x){return Z.H.useMemoCache(x)}},fe.cache=function(x){return function(){return x.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(x,V,$){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var te=z({},x.props),de=x.key;if(V!=null)for(ve in V.key!==void 0&&(de=""+V.key),V)!L.call(V,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&V.ref===void 0||(te[ve]=V[ve]);var ve=arguments.length-2;if(ve===1)te.children=$;else if(1<ve){for(var Me=Array(ve),at=0;at<ve;at++)Me[at]=arguments[at+2];te.children=Me}return I(x.type,de,te)},fe.createContext=function(x){return x={$$typeof:m,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:f,_context:x},x},fe.createElement=function(x,V,$){var te,de={},ve=null;if(V!=null)for(te in V.key!==void 0&&(ve=""+V.key),V)L.call(V,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(de[te]=V[te]);var Me=arguments.length-2;if(Me===1)de.children=$;else if(1<Me){for(var at=Array(Me),je=0;je<Me;je++)at[je]=arguments[je+2];de.children=at}if(x&&x.defaultProps)for(te in Me=x.defaultProps,Me)de[te]===void 0&&(de[te]=Me[te]);return I(x,ve,de)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(x){return{$$typeof:b,render:x}},fe.isValidElement=K,fe.lazy=function(x){return{$$typeof:y,_payload:{_status:-1,_result:x},_init:j}},fe.memo=function(x,V){return{$$typeof:h,type:x,compare:V===void 0?null:V}},fe.startTransition=function(x){var V=Z.T,$={};Z.T=$;try{var te=x(),de=Z.S;de!==null&&de($,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(F,W)}catch(ve){W(ve)}finally{V!==null&&$.types!==null&&(V.types=$.types),Z.T=V}},fe.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},fe.use=function(x){return Z.H.use(x)},fe.useActionState=function(x,V,$){return Z.H.useActionState(x,V,$)},fe.useCallback=function(x,V){return Z.H.useCallback(x,V)},fe.useContext=function(x){return Z.H.useContext(x)},fe.useDebugValue=function(){},fe.useDeferredValue=function(x,V){return Z.H.useDeferredValue(x,V)},fe.useEffect=function(x,V){return Z.H.useEffect(x,V)},fe.useEffectEvent=function(x){return Z.H.useEffectEvent(x)},fe.useId=function(){return Z.H.useId()},fe.useImperativeHandle=function(x,V,$){return Z.H.useImperativeHandle(x,V,$)},fe.useInsertionEffect=function(x,V){return Z.H.useInsertionEffect(x,V)},fe.useLayoutEffect=function(x,V){return Z.H.useLayoutEffect(x,V)},fe.useMemo=function(x,V){return Z.H.useMemo(x,V)},fe.useOptimistic=function(x,V){return Z.H.useOptimistic(x,V)},fe.useReducer=function(x,V,$){return Z.H.useReducer(x,V,$)},fe.useRef=function(x){return Z.H.useRef(x)},fe.useState=function(x){return Z.H.useState(x)},fe.useSyncExternalStore=function(x,V,$){return Z.H.useSyncExternalStore(x,V,$)},fe.useTransition=function(){return Z.H.useTransition()},fe.version="19.2.3",fe}var Ap;function yu(){return Ap||(Ap=1,nu.exports=X0()),nu.exports}var He=yu();const ie=G0(He);var au={exports:{}},Vl={},lu={exports:{}},iu={};var _p;function Q0(){return _p||(_p=1,(function(l){function s(B,Y){var j=B.length;B.push(Y);e:for(;0<j;){var W=j-1>>>1,ue=B[W];if(0<c(ue,Y))B[W]=Y,B[j]=ue,j=W;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],j=B.pop();if(j!==Y){B[0]=j;e:for(var W=0,ue=B.length,x=ue>>>1;W<x;){var V=2*(W+1)-1,$=B[V],te=V+1,de=B[te];if(0>c($,j))te<ue&&0>c(de,$)?(B[W]=de,B[te]=j,W=te):(B[W]=$,B[V]=j,W=V);else if(te<ue&&0>c(de,j))B[W]=de,B[te]=j,W=te;else break e}}return Y}function c(B,Y){var j=B.sortIndex-Y.sortIndex;return j!==0?j:B.id-Y.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var m=Date,b=m.now();l.unstable_now=function(){return m.now()-b}}var p=[],h=[],y=1,g=null,N=3,O=!1,A=!1,z=!1,k=!1,E=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function X(B){for(var Y=i(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=B)r(h),Y.sortIndex=Y.expirationTime,s(p,Y);else break;Y=i(h)}}function Q(B){if(z=!1,X(B),!A)if(i(p)!==null)A=!0,F||(F=!0,P());else{var Y=i(h);Y!==null&&me(Q,Y.startTime-B)}}var F=!1,Z=-1,L=5,I=-1;function J(){return k?!0:!(l.unstable_now()-I<L)}function K(){if(k=!1,F){var B=l.unstable_now();I=B;var Y=!0;try{e:{A=!1,z&&(z=!1,M(Z),Z=-1),O=!0;var j=N;try{t:{for(X(B),g=i(p);g!==null&&!(g.expirationTime>B&&J());){var W=g.callback;if(typeof W=="function"){g.callback=null,N=g.priorityLevel;var ue=W(g.expirationTime<=B);if(B=l.unstable_now(),typeof ue=="function"){g.callback=ue,X(B),Y=!0;break t}g===i(p)&&r(p),X(B)}else r(p);g=i(p)}if(g!==null)Y=!0;else{var x=i(h);x!==null&&me(Q,x.startTime-B),Y=!1}}break e}finally{g=null,N=j,O=!1}Y=void 0}}finally{Y?P():F=!1}}}var P;if(typeof w=="function")P=function(){w(K)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,re=se.port2;se.port1.onmessage=K,P=function(){re.postMessage(null)}}else P=function(){E(K,0)};function me(B,Y){Z=E(function(){B(l.unstable_now())},Y)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(B){B.callback=null},l.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<B?Math.floor(1e3/B):5},l.unstable_getCurrentPriorityLevel=function(){return N},l.unstable_next=function(B){switch(N){case 1:case 2:case 3:var Y=3;break;default:Y=N}var j=N;N=Y;try{return B()}finally{N=j}},l.unstable_requestPaint=function(){k=!0},l.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var j=N;N=B;try{return Y()}finally{N=j}},l.unstable_scheduleCallback=function(B,Y,j){var W=l.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?W+j:W):j=W,B){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=j+ue,B={id:y++,callback:Y,priorityLevel:B,startTime:j,expirationTime:ue,sortIndex:-1},j>W?(B.sortIndex=j,s(h,B),i(p)===null&&B===i(h)&&(z?(M(Z),Z=-1):z=!0,me(Q,j-W))):(B.sortIndex=ue,s(p,B),A||O||(A=!0,F||(F=!0,P()))),B},l.unstable_shouldYield=J,l.unstable_wrapCallback=function(B){var Y=N;return function(){var j=N;N=Y;try{return B.apply(this,arguments)}finally{N=j}}}})(iu)),iu}var Cp;function Z0(){return Cp||(Cp=1,lu.exports=Q0()),lu.exports}var ru={exports:{}},nt={};var Dp;function K0(){if(Dp)return nt;Dp=1;var l=yu();function s(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(s(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(p,h,y){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:g==null?null:""+g,children:p,containerInfo:h,implementation:y}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,nt.createPortal=function(p,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(s(299));return f(p,h,null,y)},nt.flushSync=function(p){var h=m.T,y=r.p;try{if(m.T=null,r.p=2,p)return p()}finally{m.T=h,r.p=y,r.d.f()}},nt.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},nt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},nt.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var y=h.as,g=b(y,h.crossOrigin),N=typeof h.integrity=="string"?h.integrity:void 0,O=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:N,fetchPriority:O}):y==="script"&&r.d.X(p,{crossOrigin:g,integrity:N,fetchPriority:O,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},nt.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=b(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},nt.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,g=b(y,h.crossOrigin);r.d.L(p,y,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},nt.preloadModule=function(p,h){if(typeof p=="string")if(h){var y=b(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},nt.requestFormReset=function(p){r.d.r(p)},nt.unstable_batchedUpdates=function(p,h){return p(h)},nt.useFormState=function(p,h,y){return m.H.useFormState(p,h,y)},nt.useFormStatus=function(){return m.H.useHostTransitionStatus()},nt.version="19.2.3",nt}var wp;function J0(){if(wp)return ru.exports;wp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),ru.exports=K0(),ru.exports}var Np;function P0(){if(Np)return Vl;Np=1;var l=Z0(),s=yu(),i=J0();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(f(e)!==e)throw Error(r(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(r(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var u=o.alternate;if(u===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===n)return p(o),e;if(u===a)return p(o),t;u=u.sibling}throw Error(r(188))}if(n.return!==a.return)n=o,a=u;else{for(var d=!1,v=o.child;v;){if(v===n){d=!0,n=o,a=u;break}if(v===a){d=!0,a=o,n=u;break}v=v.sibling}if(!d){for(v=u.child;v;){if(v===n){d=!0,n=u,a=o;break}if(v===a){d=!0,a=u,n=o;break}v=v.sibling}if(!d)throw Error(r(189))}}if(n.alternate!==a)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var g=Object.assign,N=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),w=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),K=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case E:return"Profiler";case k:return"StrictMode";case Q:return"Suspense";case F:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case w:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case L:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var me=Array.isArray,B=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},W=[],ue=-1;function x(e){return{current:e}}function V(e){0>ue||(e.current=W[ue],W[ue]=null,ue--)}function $(e,t){ue++,W[ue]=e.current,e.current=t}var te=x(null),de=x(null),ve=x(null),Me=x(null);function at(e,t){switch($(ve,t),$(de,e),$(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Kd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Kd(t),e=Jd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(te),$(te,e)}function je(){V(te),V(de),V(ve)}function Pa(e){e.memoizedState!==null&&$(Me,e);var t=te.current,n=Jd(t,e.type);t!==n&&($(de,e),$(te,n))}function Il(e){de.current===e&&(V(te),V(de)),Me.current===e&&(V(Me),Ul._currentValue=j)}var Br,Tu;function Yn(e){if(Br===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Br=t&&t[1]||"",Tu=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Br+e+Tu}var kr=!1;function Ur(e,t){if(!e||kr)return"";kr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(R){var H=R}Reflect.construct(e,[],G)}else{try{G.call()}catch(R){H=R}e.call(G.prototype)}}else{try{throw Error()}catch(R){H=R}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(R){if(R&&H&&typeof R.stack=="string")return[R.stack,H.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),d=u[0],v=u[1];if(d&&v){var S=d.split(`
`),D=v.split(`
`);for(o=a=0;a<S.length&&!S[a].includes("DetermineComponentFrameRoot");)a++;for(;o<D.length&&!D[o].includes("DetermineComponentFrameRoot");)o++;if(a===S.length||o===D.length)for(a=S.length-1,o=D.length-1;1<=a&&0<=o&&S[a]!==D[o];)o--;for(;1<=a&&0<=o;a--,o--)if(S[a]!==D[o]){if(a!==1||o!==1)do if(a--,o--,0>o||S[a]!==D[o]){var U=`
`+S[a].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=a&&0<=o);break}}}finally{kr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Yn(n):""}function bh(e,t){switch(e.tag){case 26:case 27:case 5:return Yn(e.type);case 16:return Yn("Lazy");case 13:return e.child!==t&&t!==null?Yn("Suspense Fallback"):Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 15:return Ur(e.type,!1);case 11:return Ur(e.type.render,!1);case 1:return Ur(e.type,!0);case 31:return Yn("Activity");default:return""}}function Ou(e){try{var t="",n=null;do t+=bh(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var qr=Object.prototype.hasOwnProperty,jr=l.unstable_scheduleCallback,Gr=l.unstable_cancelCallback,yh=l.unstable_shouldYield,Sh=l.unstable_requestPaint,pt=l.unstable_now,xh=l.unstable_getCurrentPriorityLevel,Eu=l.unstable_ImmediatePriority,zu=l.unstable_UserBlockingPriority,ei=l.unstable_NormalPriority,Th=l.unstable_LowPriority,Mu=l.unstable_IdlePriority,Oh=l.log,Eh=l.unstable_setDisableYieldValue,$a=null,ht=null;function mn(e){if(typeof Oh=="function"&&Eh(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode($a,e)}catch{}}var mt=Math.clz32?Math.clz32:Ah,zh=Math.log,Mh=Math.LN2;function Ah(e){return e>>>=0,e===0?32:31-(zh(e)/Mh|0)|0}var ti=256,ni=262144,ai=4194304;function Vn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function li(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,u=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var v=a&134217727;return v!==0?(a=v&~u,a!==0?o=Vn(a):(d&=v,d!==0?o=Vn(d):n||(n=v&~e,n!==0&&(o=Vn(n))))):(v=a&~u,v!==0?o=Vn(v):d!==0?o=Vn(d):n||(n=a&~e,n!==0&&(o=Vn(n)))),o===0?0:t!==0&&t!==o&&(t&u)===0&&(u=o&-o,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:o}function Fa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _h(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Au(){var e=ai;return ai<<=1,(ai&62914560)===0&&(ai=4194304),e}function Yr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ch(e,t,n,a,o,u){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,S=e.expirationTimes,D=e.hiddenUpdates;for(n=d&~n;0<n;){var U=31-mt(n),G=1<<U;v[U]=0,S[U]=-1;var H=D[U];if(H!==null)for(D[U]=null,U=0;U<H.length;U++){var R=H[U];R!==null&&(R.lane&=-536870913)}n&=~G}a!==0&&_u(e,a,0),u!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=u&~(d&~t))}function _u(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-mt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Cu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-mt(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function Du(e,t){var n=t&-t;return n=(n&42)!==0?1:Vr(n),(n&(e.suspendedLanes|t))!==0?0:n}function Vr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wu(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:gp(e.type))}function Nu(e,t){var n=Y.p;try{return Y.p=e,t()}finally{Y.p=n}}var vn=Math.random().toString(36).slice(2),Fe="__reactFiber$"+vn,rt="__reactProps$"+vn,sa="__reactContainer$"+vn,Qr="__reactEvents$"+vn,Dh="__reactListeners$"+vn,wh="__reactHandles$"+vn,Hu="__reactResources$"+vn,Ia="__reactMarker$"+vn;function Zr(e){delete e[Fe],delete e[rt],delete e[Qr],delete e[Dh],delete e[wh]}function ua(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sa]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tp(e);e!==null;){if(n=e[Fe])return n;e=tp(e)}return t}e=n,n=e.parentNode}return null}function ca(e){if(e=e[Fe]||e[sa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function el(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function fa(e){var t=e[Hu];return t||(t=e[Hu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Pe(e){e[Ia]=!0}var Ru=new Set,Lu={};function Xn(e,t){da(e,t),da(e+"Capture",t)}function da(e,t){for(Lu[e]=t,e=0;e<t.length;e++)Ru.add(t[e])}var Nh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bu={},ku={};function Hh(e){return qr.call(ku,e)?!0:qr.call(Bu,e)?!1:Nh.test(e)?ku[e]=!0:(Bu[e]=!0,!1)}function ii(e,t,n){if(Hh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ri(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Zt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rh(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(d){n=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kr(e){if(!e._valueTracker){var t=Uu(e)?"checked":"value";e._valueTracker=Rh(e,t,""+e[t])}}function qu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Uu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Lh=/[\n"\\]/g;function Mt(e){return e.replace(Lh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jr(e,t,n,a,o,u,d,v){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Pr(e,d,zt(t)):n!=null?Pr(e,d,zt(n)):a!=null&&e.removeAttribute("value"),o==null&&u!=null&&(e.defaultChecked=!!u),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+zt(v):e.removeAttribute("name")}function ju(e,t,n,a,o,u,d,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Kr(e);return}n=n!=null?""+zt(n):"",t=t!=null?""+zt(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=v?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Kr(e)}function Pr(e,t,n){t==="number"&&oi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function pa(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Gu(e,t,n){if(t!=null&&(t=""+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+zt(n):""}function Yu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(r(92));if(me(a)){if(1<a.length)throw Error(r(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=zt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Kr(e)}function ha(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Bh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Xu(e,t,n){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&Vu(e,o,a)}else for(var u in t)t.hasOwnProperty(u)&&Vu(e,u,t[u])}function $r(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function si(e){return Uh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Kt(){}var Fr=null;function Wr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ma=null,va=null;function Qu(e){var t=ca(e);if(t&&(e=t.stateNode)){var n=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Jr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[rt]||null;if(!o)throw Error(r(90));Jr(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&qu(a)}break e;case"textarea":Gu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&pa(e,!!n.multiple,t,!1)}}}var Ir=!1;function Zu(e,t,n){if(Ir)return e(t,n);Ir=!0;try{var a=e(t);return a}finally{if(Ir=!1,(ma!==null||va!==null)&&(Pi(),ma&&(t=ma,e=va,va=ma=null,Qu(t),e)))for(t=0;t<e.length;t++)Qu(e[t])}}function tl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[rt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(r(231,t,typeof n));return n}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eo=!1;if(Jt)try{var nl={};Object.defineProperty(nl,"passive",{get:function(){eo=!0}}),window.addEventListener("test",nl,nl),window.removeEventListener("test",nl,nl)}catch{eo=!1}var gn=null,to=null,ui=null;function Ku(){if(ui)return ui;var e,t=to,n=t.length,a,o="value"in gn?gn.value:gn.textContent,u=o.length;for(e=0;e<n&&t[e]===o[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===o[u-a];a++);return ui=o.slice(e,1<a?1-a:void 0)}function ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function Ju(){return!1}function ot(e){function t(n,a,o,u,d){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?fi:Ju,this.isPropagationStopped=Ju,this}return g(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},di=ot(Qn),al=g({},Qn,{view:0,detail:0}),qh=ot(al),no,ao,ll,pi=g({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ll&&(ll&&e.type==="mousemove"?(no=e.screenX-ll.screenX,ao=e.screenY-ll.screenY):ao=no=0,ll=e),no)},movementY:function(e){return"movementY"in e?e.movementY:ao}}),Pu=ot(pi),jh=g({},pi,{dataTransfer:0}),Gh=ot(jh),Yh=g({},al,{relatedTarget:0}),lo=ot(Yh),Vh=g({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xh=ot(Vh),Qh=g({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zh=ot(Qh),Kh=g({},Qn,{data:0}),$u=ot(Kh),Jh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ph={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$h={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$h[e])?!!t[e]:!1}function io(){return Fh}var Wh=g({},al,{key:function(e){if(e.key){var t=Jh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ph[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:io,charCode:function(e){return e.type==="keypress"?ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ih=ot(Wh),em=g({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=ot(em),tm=g({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:io}),nm=ot(tm),am=g({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),lm=ot(am),im=g({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rm=ot(im),om=g({},Qn,{newState:0,oldState:0}),sm=ot(om),um=[9,13,27,32],ro=Jt&&"CompositionEvent"in window,il=null;Jt&&"documentMode"in document&&(il=document.documentMode);var cm=Jt&&"TextEvent"in window&&!il,Wu=Jt&&(!ro||il&&8<il&&11>=il),Iu=" ",ec=!1;function tc(e,t){switch(e){case"keyup":return um.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ga=!1;function fm(e,t){switch(e){case"compositionend":return nc(t);case"keypress":return t.which!==32?null:(ec=!0,Iu);case"textInput":return e=t.data,e===Iu&&ec?null:e;default:return null}}function dm(e,t){if(ga)return e==="compositionend"||!ro&&tc(e,t)?(e=Ku(),ui=to=gn=null,ga=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wu&&t.locale!=="ko"?null:t.data;default:return null}}var pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pm[e.type]:t==="textarea"}function lc(e,t,n,a){ma?va?va.push(a):va=[a]:ma=a,t=nr(t,"onChange"),0<t.length&&(n=new di("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var rl=null,ol=null;function hm(e){Gd(e,0)}function hi(e){var t=el(e);if(qu(t))return e}function ic(e,t){if(e==="change")return t}var rc=!1;if(Jt){var oo;if(Jt){var so="oninput"in document;if(!so){var oc=document.createElement("div");oc.setAttribute("oninput","return;"),so=typeof oc.oninput=="function"}oo=so}else oo=!1;rc=oo&&(!document.documentMode||9<document.documentMode)}function sc(){rl&&(rl.detachEvent("onpropertychange",uc),ol=rl=null)}function uc(e){if(e.propertyName==="value"&&hi(ol)){var t=[];lc(t,ol,e,Wr(e)),Zu(hm,t)}}function mm(e,t,n){e==="focusin"?(sc(),rl=t,ol=n,rl.attachEvent("onpropertychange",uc)):e==="focusout"&&sc()}function vm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi(ol)}function gm(e,t){if(e==="click")return hi(t)}function bm(e,t){if(e==="input"||e==="change")return hi(t)}function ym(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:ym;function sl(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!qr.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fc(e,t){var n=cc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cc(n)}}function dc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=oi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oi(e.document)}return t}function uo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Sm=Jt&&"documentMode"in document&&11>=document.documentMode,ba=null,co=null,ul=null,fo=!1;function hc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fo||ba==null||ba!==oi(a)||(a=ba,"selectionStart"in a&&uo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ul&&sl(ul,a)||(ul=a,a=nr(co,"onSelect"),0<a.length&&(t=new di("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ba)))}function Zn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ya={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},po={},mc={};Jt&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function Kn(e){if(po[e])return po[e];if(!ya[e])return e;var t=ya[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mc)return po[e]=t[n];return e}var vc=Kn("animationend"),gc=Kn("animationiteration"),bc=Kn("animationstart"),xm=Kn("transitionrun"),Tm=Kn("transitionstart"),Om=Kn("transitioncancel"),yc=Kn("transitionend"),Sc=new Map,ho="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ho.push("scrollEnd");function Lt(e,t){Sc.set(e,t),Xn(t,[e])}var mi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},At=[],Sa=0,mo=0;function vi(){for(var e=Sa,t=mo=Sa=0;t<e;){var n=At[t];At[t++]=null;var a=At[t];At[t++]=null;var o=At[t];At[t++]=null;var u=At[t];if(At[t++]=null,a!==null&&o!==null){var d=a.pending;d===null?o.next=o:(o.next=d.next,d.next=o),a.pending=o}u!==0&&xc(n,o,u)}}function gi(e,t,n,a){At[Sa++]=e,At[Sa++]=t,At[Sa++]=n,At[Sa++]=a,mo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function vo(e,t,n,a){return gi(e,t,n,a),bi(e)}function Jn(e,t){return gi(e,null,null,t),bi(e)}function xc(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,u=e.return;u!==null;)u.childLanes|=n,a=u.alternate,a!==null&&(a.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(o=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,o&&t!==null&&(o=31-mt(n),e=u.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=n|536870912),u):null}function bi(e){if(50<wl)throw wl=0,zs=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var xa={};function Em(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,a){return new Em(e,t,n,a)}function go(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pt(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Tc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,a,o,u){var d=0;if(a=e,typeof e=="function")go(e)&&(d=1);else if(typeof e=="string")d=C0(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case I:return e=gt(31,n,t,o),e.elementType=I,e.lanes=u,e;case z:return Pn(n.children,o,u,t);case k:d=8,o|=24;break;case E:return e=gt(12,n,t,o|2),e.elementType=E,e.lanes=u,e;case Q:return e=gt(13,n,t,o),e.elementType=Q,e.lanes=u,e;case F:return e=gt(19,n,t,o),e.elementType=F,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:d=10;break e;case M:d=9;break e;case X:d=11;break e;case Z:d=14;break e;case L:d=16,a=null;break e}d=29,n=Error(r(130,e===null?"null":typeof e,"")),a=null}return t=gt(d,n,t,o),t.elementType=e,t.type=a,t.lanes=u,t}function Pn(e,t,n,a){return e=gt(7,e,a,t),e.lanes=n,e}function bo(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function Oc(e){var t=gt(18,null,null,0);return t.stateNode=e,t}function yo(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ec=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var n=Ec.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ou(t)},Ec.set(e,t),t)}return{value:e,source:t,stack:Ou(t)}}var Ta=[],Oa=0,Si=null,cl=0,Ct=[],Dt=0,bn=null,jt=1,Gt="";function $t(e,t){Ta[Oa++]=cl,Ta[Oa++]=Si,Si=e,cl=t}function zc(e,t,n){Ct[Dt++]=jt,Ct[Dt++]=Gt,Ct[Dt++]=bn,bn=e;var a=jt;e=Gt;var o=32-mt(a)-1;a&=~(1<<o),n+=1;var u=32-mt(t)+o;if(30<u){var d=o-o%5;u=(a&(1<<d)-1).toString(32),a>>=d,o-=d,jt=1<<32-mt(t)+o|n<<o|a,Gt=u+e}else jt=1<<u|n<<o|a,Gt=e}function So(e){e.return!==null&&($t(e,1),zc(e,1,0))}function xo(e){for(;e===Si;)Si=Ta[--Oa],Ta[Oa]=null,cl=Ta[--Oa],Ta[Oa]=null;for(;e===bn;)bn=Ct[--Dt],Ct[Dt]=null,Gt=Ct[--Dt],Ct[Dt]=null,jt=Ct[--Dt],Ct[Dt]=null}function Mc(e,t){Ct[Dt++]=jt,Ct[Dt++]=Gt,Ct[Dt++]=bn,jt=t.id,Gt=t.overflow,bn=e}var We=null,Re=null,Te=!1,yn=null,wt=!1,To=Error(r(519));function Sn(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fl(_t(t,e)),To}function Ac(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Fe]=e,t[rt]=a,n){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(n=0;n<Hl.length;n++)be(Hl[n],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":be("invalid",t),ju(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":be("invalid",t);break;case"textarea":be("invalid",t),Yu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Qd(t.textContent,n)?(a.popover!=null&&(be("beforetoggle",t),be("toggle",t)),a.onScroll!=null&&be("scroll",t),a.onScrollEnd!=null&&be("scrollend",t),a.onClick!=null&&(t.onclick=Kt),t=!0):t=!1,t||Sn(e,!0)}function _c(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:wt=!1;return;case 27:case 3:wt=!0;return;default:We=We.return}}function Ea(e){if(e!==We)return!1;if(!Te)return _c(e),Te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||js(e.type,e.memoizedProps)),n=!n),n&&Re&&Sn(e),_c(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Re=ep(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Re=ep(e)}else t===27?(t=Re,Rn(e.type)?(e=Qs,Qs=null,Re=e):Re=t):Re=We?Ht(e.stateNode.nextSibling):null;return!0}function $n(){Re=We=null,Te=!1}function Oo(){var e=yn;return e!==null&&(ft===null?ft=e:ft.push.apply(ft,e),yn=null),e}function fl(e){yn===null?yn=[e]:yn.push(e)}var Eo=x(null),Fn=null,Ft=null;function xn(e,t,n){$(Eo,t._currentValue),t._currentValue=n}function Wt(e){e._currentValue=Eo.current,V(Eo)}function zo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Mo(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){var d=o.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=o;for(var S=0;S<t.length;S++)if(v.context===t[S]){u.lanes|=n,v=u.alternate,v!==null&&(v.lanes|=n),zo(u.return,n,e),a||(d=null);break e}u=v.next}}else if(o.tag===18){if(d=o.return,d===null)throw Error(r(341));d.lanes|=n,u=d.alternate,u!==null&&(u.lanes|=n),zo(d,n,e),d=null}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===e){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}}function za(e,t,n,a){e=null;for(var o=t,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var d=o.alternate;if(d===null)throw Error(r(387));if(d=d.memoizedProps,d!==null){var v=o.type;vt(o.pendingProps.value,d.value)||(e!==null?e.push(v):e=[v])}}else if(o===Me.current){if(d=o.alternate,d===null)throw Error(r(387));d.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Ul):e=[Ul])}o=o.return}e!==null&&Mo(t,e,n,a),t.flags|=262144}function xi(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Wn(e){Fn=e,Ft=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return Cc(Fn,e)}function Ti(e,t){return Fn===null&&Wn(e),Cc(e,t)}function Cc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ft===null){if(e===null)throw Error(r(308));Ft=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ft=Ft.next=t;return n}var zm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Mm=l.unstable_scheduleCallback,Am=l.unstable_NormalPriority,Ve={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ao(){return{controller:new zm,data:new Map,refCount:0}}function dl(e){e.refCount--,e.refCount===0&&Mm(Am,function(){e.controller.abort()})}var pl=null,_o=0,Ma=0,Aa=null;function _m(e,t){if(pl===null){var n=pl=[];_o=0,Ma=ws(),Aa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return _o++,t.then(Dc,Dc),t}function Dc(){if(--_o===0&&pl!==null){Aa!==null&&(Aa.status="fulfilled");var e=pl;pl=null,Ma=0,Aa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Cm(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var wc=B.S;B.S=function(e,t){md=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&_m(e,t),wc!==null&&wc(e,t)};var In=x(null);function Co(){var e=In.current;return e!==null?e:Ne.pooledCache}function Oi(e,t){t===null?$(In,In.current):$(In,t.pool)}function Nc(){var e=Co();return e===null?null:{parent:Ve._currentValue,pool:e}}var _a=Error(r(460)),Do=Error(r(474)),Ei=Error(r(542)),zi={then:function(){}};function Hc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Kt,Kt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bc(e),e;default:if(typeof t.status=="string")t.then(Kt,Kt);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bc(e),e}throw ta=t,_a}}function ea(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ta=n,_a):n}}var ta=null;function Lc(){if(ta===null)throw Error(r(459));var e=ta;return ta=null,e}function Bc(e){if(e===_a||e===Ei)throw Error(r(483))}var Ca=null,hl=0;function Mi(e){var t=hl;return hl+=1,Ca===null&&(Ca=[]),Rc(Ca,e,t)}function ml(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ai(e,t){throw t.$$typeof===N?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function kc(e){function t(_,T){if(e){var C=_.deletions;C===null?(_.deletions=[T],_.flags|=16):C.push(T)}}function n(_,T){if(!e)return null;for(;T!==null;)t(_,T),T=T.sibling;return null}function a(_){for(var T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function o(_,T){return _=Pt(_,T),_.index=0,_.sibling=null,_}function u(_,T,C){return _.index=C,e?(C=_.alternate,C!==null?(C=C.index,C<T?(_.flags|=67108866,T):C):(_.flags|=67108866,T)):(_.flags|=1048576,T)}function d(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function v(_,T,C,q){return T===null||T.tag!==6?(T=bo(C,_.mode,q),T.return=_,T):(T=o(T,C),T.return=_,T)}function S(_,T,C,q){var le=C.type;return le===z?U(_,T,C.props.children,q,C.key):T!==null&&(T.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===L&&ea(le)===T.type)?(T=o(T,C.props),ml(T,C),T.return=_,T):(T=yi(C.type,C.key,C.props,null,_.mode,q),ml(T,C),T.return=_,T)}function D(_,T,C,q){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=yo(C,_.mode,q),T.return=_,T):(T=o(T,C.children||[]),T.return=_,T)}function U(_,T,C,q,le){return T===null||T.tag!==7?(T=Pn(C,_.mode,q,le),T.return=_,T):(T=o(T,C),T.return=_,T)}function G(_,T,C){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=bo(""+T,_.mode,C),T.return=_,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case O:return C=yi(T.type,T.key,T.props,null,_.mode,C),ml(C,T),C.return=_,C;case A:return T=yo(T,_.mode,C),T.return=_,T;case L:return T=ea(T),G(_,T,C)}if(me(T)||P(T))return T=Pn(T,_.mode,C,null),T.return=_,T;if(typeof T.then=="function")return G(_,Mi(T),C);if(T.$$typeof===w)return G(_,Ti(_,T),C);Ai(_,T)}return null}function H(_,T,C,q){var le=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return le!==null?null:v(_,T,""+C,q);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case O:return C.key===le?S(_,T,C,q):null;case A:return C.key===le?D(_,T,C,q):null;case L:return C=ea(C),H(_,T,C,q)}if(me(C)||P(C))return le!==null?null:U(_,T,C,q,null);if(typeof C.then=="function")return H(_,T,Mi(C),q);if(C.$$typeof===w)return H(_,T,Ti(_,C),q);Ai(_,C)}return null}function R(_,T,C,q,le){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return _=_.get(C)||null,v(T,_,""+q,le);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case O:return _=_.get(q.key===null?C:q.key)||null,S(T,_,q,le);case A:return _=_.get(q.key===null?C:q.key)||null,D(T,_,q,le);case L:return q=ea(q),R(_,T,C,q,le)}if(me(q)||P(q))return _=_.get(C)||null,U(T,_,q,le,null);if(typeof q.then=="function")return R(_,T,C,Mi(q),le);if(q.$$typeof===w)return R(_,T,C,Ti(T,q),le);Ai(T,q)}return null}function ee(_,T,C,q){for(var le=null,Oe=null,ne=T,he=T=0,xe=null;ne!==null&&he<C.length;he++){ne.index>he?(xe=ne,ne=null):xe=ne.sibling;var Ee=H(_,ne,C[he],q);if(Ee===null){ne===null&&(ne=xe);break}e&&ne&&Ee.alternate===null&&t(_,ne),T=u(Ee,T,he),Oe===null?le=Ee:Oe.sibling=Ee,Oe=Ee,ne=xe}if(he===C.length)return n(_,ne),Te&&$t(_,he),le;if(ne===null){for(;he<C.length;he++)ne=G(_,C[he],q),ne!==null&&(T=u(ne,T,he),Oe===null?le=ne:Oe.sibling=ne,Oe=ne);return Te&&$t(_,he),le}for(ne=a(ne);he<C.length;he++)xe=R(ne,_,he,C[he],q),xe!==null&&(e&&xe.alternate!==null&&ne.delete(xe.key===null?he:xe.key),T=u(xe,T,he),Oe===null?le=xe:Oe.sibling=xe,Oe=xe);return e&&ne.forEach(function(qn){return t(_,qn)}),Te&&$t(_,he),le}function oe(_,T,C,q){if(C==null)throw Error(r(151));for(var le=null,Oe=null,ne=T,he=T=0,xe=null,Ee=C.next();ne!==null&&!Ee.done;he++,Ee=C.next()){ne.index>he?(xe=ne,ne=null):xe=ne.sibling;var qn=H(_,ne,Ee.value,q);if(qn===null){ne===null&&(ne=xe);break}e&&ne&&qn.alternate===null&&t(_,ne),T=u(qn,T,he),Oe===null?le=qn:Oe.sibling=qn,Oe=qn,ne=xe}if(Ee.done)return n(_,ne),Te&&$t(_,he),le;if(ne===null){for(;!Ee.done;he++,Ee=C.next())Ee=G(_,Ee.value,q),Ee!==null&&(T=u(Ee,T,he),Oe===null?le=Ee:Oe.sibling=Ee,Oe=Ee);return Te&&$t(_,he),le}for(ne=a(ne);!Ee.done;he++,Ee=C.next())Ee=R(ne,_,he,Ee.value,q),Ee!==null&&(e&&Ee.alternate!==null&&ne.delete(Ee.key===null?he:Ee.key),T=u(Ee,T,he),Oe===null?le=Ee:Oe.sibling=Ee,Oe=Ee);return e&&ne.forEach(function(j0){return t(_,j0)}),Te&&$t(_,he),le}function we(_,T,C,q){if(typeof C=="object"&&C!==null&&C.type===z&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case O:e:{for(var le=C.key;T!==null;){if(T.key===le){if(le=C.type,le===z){if(T.tag===7){n(_,T.sibling),q=o(T,C.props.children),q.return=_,_=q;break e}}else if(T.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===L&&ea(le)===T.type){n(_,T.sibling),q=o(T,C.props),ml(q,C),q.return=_,_=q;break e}n(_,T);break}else t(_,T);T=T.sibling}C.type===z?(q=Pn(C.props.children,_.mode,q,C.key),q.return=_,_=q):(q=yi(C.type,C.key,C.props,null,_.mode,q),ml(q,C),q.return=_,_=q)}return d(_);case A:e:{for(le=C.key;T!==null;){if(T.key===le)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){n(_,T.sibling),q=o(T,C.children||[]),q.return=_,_=q;break e}else{n(_,T);break}else t(_,T);T=T.sibling}q=yo(C,_.mode,q),q.return=_,_=q}return d(_);case L:return C=ea(C),we(_,T,C,q)}if(me(C))return ee(_,T,C,q);if(P(C)){if(le=P(C),typeof le!="function")throw Error(r(150));return C=le.call(C),oe(_,T,C,q)}if(typeof C.then=="function")return we(_,T,Mi(C),q);if(C.$$typeof===w)return we(_,T,Ti(_,C),q);Ai(_,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,T!==null&&T.tag===6?(n(_,T.sibling),q=o(T,C),q.return=_,_=q):(n(_,T),q=bo(C,_.mode,q),q.return=_,_=q),d(_)):n(_,T)}return function(_,T,C,q){try{hl=0;var le=we(_,T,C,q);return Ca=null,le}catch(ne){if(ne===_a||ne===Ei)throw ne;var Oe=gt(29,ne,null,_.mode);return Oe.lanes=q,Oe.return=_,Oe}}}var na=kc(!0),Uc=kc(!1),Tn=!1;function wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function No(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function On(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function En(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ze&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=bi(e),xc(e,null,n),t}return gi(e,a,t,n),bi(e)}function vl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Cu(e,n)}}function Ho(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?o=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?o=u=t:u=u.next=t}else o=u=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ro=!1;function gl(){if(Ro){var e=Aa;if(e!==null)throw e}}function bl(e,t,n,a){Ro=!1;var o=e.updateQueue;Tn=!1;var u=o.firstBaseUpdate,d=o.lastBaseUpdate,v=o.shared.pending;if(v!==null){o.shared.pending=null;var S=v,D=S.next;S.next=null,d===null?u=D:d.next=D,d=S;var U=e.alternate;U!==null&&(U=U.updateQueue,v=U.lastBaseUpdate,v!==d&&(v===null?U.firstBaseUpdate=D:v.next=D,U.lastBaseUpdate=S))}if(u!==null){var G=o.baseState;d=0,U=D=S=null,v=u;do{var H=v.lane&-536870913,R=H!==v.lane;if(R?(Se&H)===H:(a&H)===H){H!==0&&H===Ma&&(Ro=!0),U!==null&&(U=U.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var ee=e,oe=v;H=t;var we=n;switch(oe.tag){case 1:if(ee=oe.payload,typeof ee=="function"){G=ee.call(we,G,H);break e}G=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=oe.payload,H=typeof ee=="function"?ee.call(we,G,H):ee,H==null)break e;G=g({},G,H);break e;case 2:Tn=!0}}H=v.callback,H!==null&&(e.flags|=64,R&&(e.flags|=8192),R=o.callbacks,R===null?o.callbacks=[H]:R.push(H))}else R={lane:H,tag:v.tag,payload:v.payload,callback:v.callback,next:null},U===null?(D=U=R,S=G):U=U.next=R,d|=H;if(v=v.next,v===null){if(v=o.shared.pending,v===null)break;R=v,v=R.next,R.next=null,o.lastBaseUpdate=R,o.shared.pending=null}}while(!0);U===null&&(S=G),o.baseState=S,o.firstBaseUpdate=D,o.lastBaseUpdate=U,u===null&&(o.shared.lanes=0),Cn|=d,e.lanes=d,e.memoizedState=G}}function qc(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function jc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)qc(n[e],t)}var Da=x(null),_i=x(0);function Gc(e,t){e=sn,$(_i,e),$(Da,t),sn=e|t.baseLanes}function Lo(){$(_i,sn),$(Da,Da.current)}function Bo(){sn=_i.current,V(Da),V(_i)}var bt=x(null),Nt=null;function zn(e){var t=e.alternate;$(Ge,Ge.current&1),$(bt,e),Nt===null&&(t===null||Da.current!==null||t.memoizedState!==null)&&(Nt=e)}function ko(e){$(Ge,Ge.current),$(bt,e),Nt===null&&(Nt=e)}function Yc(e){e.tag===22?($(Ge,Ge.current),$(bt,e),Nt===null&&(Nt=e)):Mn()}function Mn(){$(Ge,Ge.current),$(bt,bt.current)}function yt(e){V(bt),Nt===e&&(Nt=null),V(Ge)}var Ge=x(0);function Ci(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Vs(n)||Xs(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,pe=null,Ce=null,Xe=null,Di=!1,wa=!1,aa=!1,wi=0,yl=0,Na=null,Dm=0;function Ue(){throw Error(r(321))}function Uo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function qo(e,t,n,a,o,u){return It=u,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?Mf:es,aa=!1,u=n(a,o),aa=!1,wa&&(u=Xc(t,n,a,o)),Vc(e),u}function Vc(e){B.H=Tl;var t=Ce!==null&&Ce.next!==null;if(It=0,Xe=Ce=pe=null,Di=!1,yl=0,Na=null,t)throw Error(r(300));e===null||Qe||(e=e.dependencies,e!==null&&xi(e)&&(Qe=!0))}function Xc(e,t,n,a){pe=e;var o=0;do{if(wa&&(Na=null),yl=0,wa=!1,25<=o)throw Error(r(301));if(o+=1,Xe=Ce=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}B.H=Af,u=t(n,a)}while(wa);return u}function wm(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?Sl(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(pe.flags|=1024),t}function jo(){var e=wi!==0;return wi=0,e}function Go(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Yo(e){if(Di){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Di=!1}It=0,Xe=Ce=pe=null,wa=!1,yl=wi=0,Na=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?pe.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ye(){if(Ce===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Xe===null?pe.memoizedState:Xe.next;if(t!==null)Xe=t,Ce=e;else{if(e===null)throw pe.alternate===null?Error(r(467)):Error(r(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Xe===null?pe.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sl(e){var t=yl;return yl+=1,Na===null&&(Na=[]),e=Rc(Na,e,t),t=pe,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?Mf:es),e}function Hi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sl(e);if(e.$$typeof===w)return Ie(e)}throw Error(r(438,String(e)))}function Vo(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=pe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ni(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=J;return t.index++,n}function en(e,t){return typeof t=="function"?t(e):t}function Ri(e){var t=Ye();return Xo(t,Ce,e)}function Xo(e,t,n){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var o=e.baseQueue,u=a.pending;if(u!==null){if(o!==null){var d=o.next;o.next=u.next,u.next=d}t.baseQueue=o=u,a.pending=null}if(u=e.baseState,o===null)e.memoizedState=u;else{t=o.next;var v=d=null,S=null,D=t,U=!1;do{var G=D.lane&-536870913;if(G!==D.lane?(Se&G)===G:(It&G)===G){var H=D.revertLane;if(H===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),G===Ma&&(U=!0);else if((It&H)===H){D=D.next,H===Ma&&(U=!0);continue}else G={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},S===null?(v=S=G,d=u):S=S.next=G,pe.lanes|=H,Cn|=H;G=D.action,aa&&n(u,G),u=D.hasEagerState?D.eagerState:n(u,G)}else H={lane:G,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},S===null?(v=S=H,d=u):S=S.next=H,pe.lanes|=G,Cn|=G;D=D.next}while(D!==null&&D!==t);if(S===null?d=u:S.next=v,!vt(u,e.memoizedState)&&(Qe=!0,U&&(n=Aa,n!==null)))throw n;e.memoizedState=u,e.baseState=d,e.baseQueue=S,a.lastRenderedState=u}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Qo(e){var t=Ye(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,u=t.memoizedState;if(o!==null){n.pending=null;var d=o=o.next;do u=e(u,d.action),d=d.next;while(d!==o);vt(u,t.memoizedState)||(Qe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,a]}function Qc(e,t,n){var a=pe,o=Ye(),u=Te;if(u){if(n===void 0)throw Error(r(407));n=n()}else n=t();var d=!vt((Ce||o).memoizedState,n);if(d&&(o.memoizedState=n,Qe=!0),o=o.queue,Jo(Jc.bind(null,a,o,e),[e]),o.getSnapshot!==t||d||Xe!==null&&Xe.memoizedState.tag&1){if(a.flags|=2048,Ha(9,{destroy:void 0},Kc.bind(null,a,o,n,t),null),Ne===null)throw Error(r(349));u||(It&127)!==0||Zc(a,t,n)}return n}function Zc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=Ni(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kc(e,t,n,a){t.value=n,t.getSnapshot=a,Pc(t)&&$c(e)}function Jc(e,t,n){return n(function(){Pc(t)&&$c(e)})}function Pc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function $c(e){var t=Jn(e,2);t!==null&&dt(t,e,2)}function Zo(e){var t=lt();if(typeof e=="function"){var n=e;if(e=n(),aa){mn(!0);try{n()}finally{mn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:en,lastRenderedState:e},t}function Fc(e,t,n,a){return e.baseState=n,Xo(e,Ce,typeof a=="function"?a:en)}function Nm(e,t,n,a,o){if(ki(e))throw Error(r(485));if(e=t.action,e!==null){var u={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){u.listeners.push(d)}};B.T!==null?n(!0):u.isTransition=!1,a(u),n=t.pending,n===null?(u.next=t.pending=u,Wc(t,u)):(u.next=n.next,t.pending=n.next=u)}}function Wc(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var u=B.T,d={};B.T=d;try{var v=n(o,a),S=B.S;S!==null&&S(d,v),Ic(e,t,v)}catch(D){Ko(e,t,D)}finally{u!==null&&d.types!==null&&(u.types=d.types),B.T=u}}else try{u=n(o,a),Ic(e,t,u)}catch(D){Ko(e,t,D)}}function Ic(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){ef(e,t,a)},function(a){return Ko(e,t,a)}):ef(e,t,n)}function ef(e,t,n){t.status="fulfilled",t.value=n,tf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Wc(e,n)))}function Ko(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,tf(t),t=t.next;while(t!==a)}e.action=null}function tf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function nf(e,t){return t}function af(e,t){if(Te){var n=Ne.formState;if(n!==null){e:{var a=pe;if(Te){if(Re){t:{for(var o=Re,u=wt;o.nodeType!==8;){if(!u){o=null;break t}if(o=Ht(o.nextSibling),o===null){o=null;break t}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){Re=Ht(o.nextSibling),a=o.data==="F!";break e}}Sn(a)}a=!1}a&&(t=n[0])}}return n=lt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nf,lastRenderedState:t},n.queue=a,n=Of.bind(null,pe,a),a.dispatch=n,a=Zo(!1),u=Io.bind(null,pe,!1,a.queue),a=lt(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=Nm.bind(null,pe,o,u,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function lf(e){var t=Ye();return rf(t,Ce,e)}function rf(e,t,n){if(t=Xo(e,t,nf)[0],e=Ri(en)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Sl(t)}catch(d){throw d===_a?Ei:d}else a=t;t=Ye();var o=t.queue,u=o.dispatch;return n!==t.memoizedState&&(pe.flags|=2048,Ha(9,{destroy:void 0},Hm.bind(null,o,n),null)),[a,u,e]}function Hm(e,t){e.action=t}function of(e){var t=Ye(),n=Ce;if(n!==null)return rf(t,n,e);Ye(),t=t.memoizedState,n=Ye();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ha(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=pe.updateQueue,t===null&&(t=Ni(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function sf(){return Ye().memoizedState}function Li(e,t,n,a){var o=lt();pe.flags|=e,o.memoizedState=Ha(1|t,{destroy:void 0},n,a===void 0?null:a)}function Bi(e,t,n,a){var o=Ye();a=a===void 0?null:a;var u=o.memoizedState.inst;Ce!==null&&a!==null&&Uo(a,Ce.memoizedState.deps)?o.memoizedState=Ha(t,u,n,a):(pe.flags|=e,o.memoizedState=Ha(1|t,u,n,a))}function uf(e,t){Li(8390656,8,e,t)}function Jo(e,t){Bi(2048,8,e,t)}function Rm(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=Ni(),pe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function cf(e){var t=Ye().memoizedState;return Rm({ref:t,nextImpl:e}),function(){if((ze&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function ff(e,t){return Bi(4,2,e,t)}function df(e,t){return Bi(4,4,e,t)}function pf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hf(e,t,n){n=n!=null?n.concat([e]):null,Bi(4,4,pf.bind(null,t,e),n)}function Po(){}function mf(e,t){var n=Ye();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Uo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function vf(e,t){var n=Ye();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Uo(t,a[1]))return a[0];if(a=e(),aa){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a}function $o(e,t,n){return n===void 0||(It&1073741824)!==0&&(Se&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=gd(),pe.lanes|=e,Cn|=e,n)}function gf(e,t,n,a){return vt(n,t)?n:Da.current!==null?(e=$o(e,n,a),vt(e,t)||(Qe=!0),e):(It&42)===0||(It&1073741824)!==0&&(Se&261930)===0?(Qe=!0,e.memoizedState=n):(e=gd(),pe.lanes|=e,Cn|=e,t)}function bf(e,t,n,a,o){var u=Y.p;Y.p=u!==0&&8>u?u:8;var d=B.T,v={};B.T=v,Io(e,!1,t,n);try{var S=o(),D=B.S;if(D!==null&&D(v,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var U=Cm(S,a);xl(e,t,U,Tt(e))}else xl(e,t,a,Tt(e))}catch(G){xl(e,t,{then:function(){},status:"rejected",reason:G},Tt())}finally{Y.p=u,d!==null&&v.types!==null&&(d.types=v.types),B.T=d}}function Lm(){}function Fo(e,t,n,a){if(e.tag!==5)throw Error(r(476));var o=yf(e).queue;bf(e,o,t,j,n===null?Lm:function(){return Sf(e),n(a)})}function yf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:en,lastRenderedState:j},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:en,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Sf(e){var t=yf(e);t.next===null&&(t=e.alternate.memoizedState),xl(e,t.next.queue,{},Tt())}function Wo(){return Ie(Ul)}function xf(){return Ye().memoizedState}function Tf(){return Ye().memoizedState}function Bm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Tt();e=On(n);var a=En(t,e,n);a!==null&&(dt(a,t,n),vl(a,t,n)),t={cache:Ao()},e.payload=t;return}t=t.return}}function km(e,t,n){var a=Tt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ki(e)?Ef(t,n):(n=vo(e,t,n,a),n!==null&&(dt(n,e,a),zf(n,t,a)))}function Of(e,t,n){var a=Tt();xl(e,t,n,a)}function xl(e,t,n,a){var o={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ki(e))Ef(t,o);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,v=u(d,n);if(o.hasEagerState=!0,o.eagerState=v,vt(v,d))return gi(e,t,o,0),Ne===null&&vi(),!1}catch{}if(n=vo(e,t,o,a),n!==null)return dt(n,e,a),zf(n,t,a),!0}return!1}function Io(e,t,n,a){if(a={lane:2,revertLane:ws(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ki(e)){if(t)throw Error(r(479))}else t=vo(e,n,a,2),t!==null&&dt(t,e,2)}function ki(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Ef(e,t){wa=Di=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Cu(e,n)}}var Tl={readContext:Ie,use:Hi,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};Tl.useEffectEvent=Ue;var Mf={readContext:Ie,use:Hi,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:uf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Li(4194308,4,pf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Li(4194308,4,e,t)},useInsertionEffect:function(e,t){Li(4,2,e,t)},useMemo:function(e,t){var n=lt();t=t===void 0?null:t;var a=e();if(aa){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=lt();if(n!==void 0){var o=n(t);if(aa){mn(!0);try{n(t)}finally{mn(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=km.bind(null,pe,e),[a.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=Zo(e);var t=e.queue,n=Of.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Po,useDeferredValue:function(e,t){var n=lt();return $o(n,e,t)},useTransition:function(){var e=Zo(!1);return e=bf.bind(null,pe,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=pe,o=lt();if(Te){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Ne===null)throw Error(r(349));(Se&127)!==0||Zc(a,t,n)}o.memoizedState=n;var u={value:n,getSnapshot:t};return o.queue=u,uf(Jc.bind(null,a,u,e),[e]),a.flags|=2048,Ha(9,{destroy:void 0},Kc.bind(null,a,u,n,t),null),n},useId:function(){var e=lt(),t=Ne.identifierPrefix;if(Te){var n=Gt,a=jt;n=(a&~(1<<32-mt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=wi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Dm++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Wo,useFormState:af,useActionState:af,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Io.bind(null,pe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Vo,useCacheRefresh:function(){return lt().memoizedState=Bm.bind(null,pe)},useEffectEvent:function(e){var t=lt(),n={impl:e};return t.memoizedState=n,function(){if((ze&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}},es={readContext:Ie,use:Hi,useCallback:mf,useContext:Ie,useEffect:Jo,useImperativeHandle:hf,useInsertionEffect:ff,useLayoutEffect:df,useMemo:vf,useReducer:Ri,useRef:sf,useState:function(){return Ri(en)},useDebugValue:Po,useDeferredValue:function(e,t){var n=Ye();return gf(n,Ce.memoizedState,e,t)},useTransition:function(){var e=Ri(en)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:Qc,useId:xf,useHostTransitionStatus:Wo,useFormState:lf,useActionState:lf,useOptimistic:function(e,t){var n=Ye();return Fc(n,Ce,e,t)},useMemoCache:Vo,useCacheRefresh:Tf};es.useEffectEvent=cf;var Af={readContext:Ie,use:Hi,useCallback:mf,useContext:Ie,useEffect:Jo,useImperativeHandle:hf,useInsertionEffect:ff,useLayoutEffect:df,useMemo:vf,useReducer:Qo,useRef:sf,useState:function(){return Qo(en)},useDebugValue:Po,useDeferredValue:function(e,t){var n=Ye();return Ce===null?$o(n,e,t):gf(n,Ce.memoizedState,e,t)},useTransition:function(){var e=Qo(en)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:Qc,useId:xf,useHostTransitionStatus:Wo,useFormState:of,useActionState:of,useOptimistic:function(e,t){var n=Ye();return Ce!==null?Fc(n,Ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Vo,useCacheRefresh:Tf};Af.useEffectEvent=cf;function ts(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:g({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ns={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Tt(),o=On(a);o.payload=t,n!=null&&(o.callback=n),t=En(e,o,a),t!==null&&(dt(t,e,a),vl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Tt(),o=On(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=En(e,o,a),t!==null&&(dt(t,e,a),vl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Tt(),a=On(n);a.tag=2,t!=null&&(a.callback=t),t=En(e,a,n),t!==null&&(dt(t,e,n),vl(t,e,n))}};function _f(e,t,n,a,o,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,d):t.prototype&&t.prototype.isPureReactComponent?!sl(n,a)||!sl(o,u):!0}function Cf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ns.enqueueReplaceState(t,t.state,null)}function la(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=g({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function Df(e){mi(e)}function wf(e){console.error(e)}function Nf(e){mi(e)}function Ui(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Hf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function as(e,t,n){return n=On(n),n.tag=3,n.payload={element:null},n.callback=function(){Ui(e,t)},n}function Rf(e){return e=On(e),e.tag=3,e}function Lf(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var u=a.value;e.payload=function(){return o(u)},e.callback=function(){Hf(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Hf(t,n,a),typeof o!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var v=a.stack;this.componentDidCatch(a.value,{componentStack:v!==null?v:""})})}function Um(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&za(t,n,o,!0),n=bt.current,n!==null){switch(n.tag){case 31:case 13:return Nt===null?$i():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===zi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),_s(e,a,o)),!1;case 22:return n.flags|=65536,a===zi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),_s(e,a,o)),!1}throw Error(r(435,n.tag))}return _s(e,a,o),$i(),!1}if(Te)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==To&&(e=Error(r(422),{cause:a}),fl(_t(e,n)))):(a!==To&&(t=Error(r(423),{cause:a}),fl(_t(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=_t(a,n),o=as(e.stateNode,a,o),Ho(e,o),qe!==4&&(qe=2)),!1;var u=Error(r(520),{cause:a});if(u=_t(u,n),Dl===null?Dl=[u]:Dl.push(u),qe!==4&&(qe=2),t===null)return!0;a=_t(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=as(n.stateNode,a,e),Ho(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Dn===null||!Dn.has(u))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Rf(o),Lf(o,e,n,a),Ho(n,o),!1}n=n.return}while(n!==null);return!1}var ls=Error(r(461)),Qe=!1;function et(e,t,n,a){t.child=e===null?Uc(t,null,n,a):na(t,e.child,n,a)}function Bf(e,t,n,a,o){n=n.render;var u=t.ref;if("ref"in a){var d={};for(var v in a)v!=="ref"&&(d[v]=a[v])}else d=a;return Wn(t),a=qo(e,t,n,d,u,o),v=jo(),e!==null&&!Qe?(Go(e,t,o),tn(e,t,o)):(Te&&v&&So(t),t.flags|=1,et(e,t,a,o),t.child)}function kf(e,t,n,a,o){if(e===null){var u=n.type;return typeof u=="function"&&!go(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Uf(e,t,u,a,o)):(e=yi(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!ds(e,o)){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:sl,n(d,a)&&e.ref===t.ref)return tn(e,t,o)}return t.flags|=1,e=Pt(u,a),e.ref=t.ref,e.return=t,t.child=e}function Uf(e,t,n,a,o){if(e!==null){var u=e.memoizedProps;if(sl(u,a)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=a=u,ds(e,o))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,tn(e,t,o)}return is(e,t,n,a,o)}function qf(e,t,n,a){var o=a.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~u}else a=0,t.child=null;return jf(e,t,u,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Oi(t,u!==null?u.cachePool:null),u!==null?Gc(t,u):Lo(),Yc(t);else return a=t.lanes=536870912,jf(e,t,u!==null?u.baseLanes|n:n,n,a)}else u!==null?(Oi(t,u.cachePool),Gc(t,u),Mn(),t.memoizedState=null):(e!==null&&Oi(t,null),Lo(),Mn());return et(e,t,o,n),t.child}function Ol(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function jf(e,t,n,a,o){var u=Co();return u=u===null?null:{parent:Ve._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&Oi(t,null),Lo(),Yc(t),e!==null&&za(e,t,a,!0),t.childLanes=o,null}function qi(e,t){return t=Gi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gf(e,t,n){return na(t,e.child,null,n),e=qi(t,t.pendingProps),e.flags|=2,yt(t),t.memoizedState=null,e}function qm(e,t,n){var a=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Te){if(a.mode==="hidden")return e=qi(t,a),t.lanes=536870912,Ol(null,e);if(ko(t),(e=Re)?(e=Id(e,wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bn!==null?{id:jt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},n=Oc(e),n.return=t,t.child=n,We=t,Re=null)):e=null,e===null)throw Sn(t);return t.lanes=536870912,null}return qi(t,a)}var u=e.memoizedState;if(u!==null){var d=u.dehydrated;if(ko(t),o)if(t.flags&256)t.flags&=-257,t=Gf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Qe||za(e,t,n,!1),o=(n&e.childLanes)!==0,Qe||o){if(a=Ne,a!==null&&(d=Du(a,n),d!==0&&d!==u.retryLane))throw u.retryLane=d,Jn(e,d),dt(a,e,d),ls;$i(),t=Gf(e,t,n)}else e=u.treeContext,Re=Ht(d.nextSibling),We=t,Te=!0,yn=null,wt=!1,e!==null&&Mc(t,e),t=qi(t,a),t.flags|=4096;return t}return e=Pt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ji(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function is(e,t,n,a,o){return Wn(t),n=qo(e,t,n,a,void 0,o),a=jo(),e!==null&&!Qe?(Go(e,t,o),tn(e,t,o)):(Te&&a&&So(t),t.flags|=1,et(e,t,n,o),t.child)}function Yf(e,t,n,a,o,u){return Wn(t),t.updateQueue=null,n=Xc(t,a,n,o),Vc(e),a=jo(),e!==null&&!Qe?(Go(e,t,u),tn(e,t,u)):(Te&&a&&So(t),t.flags|=1,et(e,t,n,u),t.child)}function Vf(e,t,n,a,o){if(Wn(t),t.stateNode===null){var u=xa,d=n.contextType;typeof d=="object"&&d!==null&&(u=Ie(d)),u=new n(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ns,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},wo(t),d=n.contextType,u.context=typeof d=="object"&&d!==null?Ie(d):xa,u.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(ts(t,n,d,a),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(d=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),d!==u.state&&ns.enqueueReplaceState(u,u.state,null),bl(t,a,u,o),gl(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,S=la(n,v);u.props=S;var D=u.context,U=n.contextType;d=xa,typeof U=="object"&&U!==null&&(d=Ie(U));var G=n.getDerivedStateFromProps;U=typeof G=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,U||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||D!==d)&&Cf(t,u,a,d),Tn=!1;var H=t.memoizedState;u.state=H,bl(t,a,u,o),gl(),D=t.memoizedState,v||H!==D||Tn?(typeof G=="function"&&(ts(t,n,G,a),D=t.memoizedState),(S=Tn||_f(t,n,S,a,H,D,d))?(U||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=D),u.props=a,u.state=D,u.context=d,a=S):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,No(e,t),d=t.memoizedProps,U=la(n,d),u.props=U,G=t.pendingProps,H=u.context,D=n.contextType,S=xa,typeof D=="object"&&D!==null&&(S=Ie(D)),v=n.getDerivedStateFromProps,(D=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==G||H!==S)&&Cf(t,u,a,S),Tn=!1,H=t.memoizedState,u.state=H,bl(t,a,u,o),gl();var R=t.memoizedState;d!==G||H!==R||Tn||e!==null&&e.dependencies!==null&&xi(e.dependencies)?(typeof v=="function"&&(ts(t,n,v,a),R=t.memoizedState),(U=Tn||_f(t,n,U,a,H,R,S)||e!==null&&e.dependencies!==null&&xi(e.dependencies))?(D||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,R,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,R,S)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=R),u.props=a,u.state=R,u.context=S,a=U):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,ji(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=na(t,e.child,null,o),t.child=na(t,null,n,o)):et(e,t,n,o),t.memoizedState=u.state,e=t.child):e=tn(e,t,o),e}function Xf(e,t,n,a){return $n(),t.flags|=256,et(e,t,n,a),t.child}var rs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function os(e){return{baseLanes:e,cachePool:Nc()}}function ss(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=xt),e}function Qf(e,t,n){var a=t.pendingProps,o=!1,u=(t.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),d&&(o=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Te){if(o?zn(t):Mn(),(e=Re)?(e=Id(e,wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bn!==null?{id:jt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},n=Oc(e),n.return=t,t.child=n,We=t,Re=null)):e=null,e===null)throw Sn(t);return Xs(e)?t.lanes=32:t.lanes=536870912,null}var v=a.children;return a=a.fallback,o?(Mn(),o=t.mode,v=Gi({mode:"hidden",children:v},o),a=Pn(a,o,n,null),v.return=t,a.return=t,v.sibling=a,t.child=v,a=t.child,a.memoizedState=os(n),a.childLanes=ss(e,d,n),t.memoizedState=rs,Ol(null,a)):(zn(t),us(t,v))}var S=e.memoizedState;if(S!==null&&(v=S.dehydrated,v!==null)){if(u)t.flags&256?(zn(t),t.flags&=-257,t=cs(e,t,n)):t.memoizedState!==null?(Mn(),t.child=e.child,t.flags|=128,t=null):(Mn(),v=a.fallback,o=t.mode,a=Gi({mode:"visible",children:a.children},o),v=Pn(v,o,n,null),v.flags|=2,a.return=t,v.return=t,a.sibling=v,t.child=a,na(t,e.child,null,n),a=t.child,a.memoizedState=os(n),a.childLanes=ss(e,d,n),t.memoizedState=rs,t=Ol(null,a));else if(zn(t),Xs(v)){if(d=v.nextSibling&&v.nextSibling.dataset,d)var D=d.dgst;d=D,a=Error(r(419)),a.stack="",a.digest=d,fl({value:a,source:null,stack:null}),t=cs(e,t,n)}else if(Qe||za(e,t,n,!1),d=(n&e.childLanes)!==0,Qe||d){if(d=Ne,d!==null&&(a=Du(d,n),a!==0&&a!==S.retryLane))throw S.retryLane=a,Jn(e,a),dt(d,e,a),ls;Vs(v)||$i(),t=cs(e,t,n)}else Vs(v)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Re=Ht(v.nextSibling),We=t,Te=!0,yn=null,wt=!1,e!==null&&Mc(t,e),t=us(t,a.children),t.flags|=4096);return t}return o?(Mn(),v=a.fallback,o=t.mode,S=e.child,D=S.sibling,a=Pt(S,{mode:"hidden",children:a.children}),a.subtreeFlags=S.subtreeFlags&65011712,D!==null?v=Pt(D,v):(v=Pn(v,o,n,null),v.flags|=2),v.return=t,a.return=t,a.sibling=v,t.child=a,Ol(null,a),a=t.child,v=e.child.memoizedState,v===null?v=os(n):(o=v.cachePool,o!==null?(S=Ve._currentValue,o=o.parent!==S?{parent:S,pool:S}:o):o=Nc(),v={baseLanes:v.baseLanes|n,cachePool:o}),a.memoizedState=v,a.childLanes=ss(e,d,n),t.memoizedState=rs,Ol(e.child,a)):(zn(t),n=e.child,e=n.sibling,n=Pt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function us(e,t){return t=Gi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gi(e,t){return e=gt(22,e,null,t),e.lanes=0,e}function cs(e,t,n){return na(t,e.child,null,n),e=us(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),zo(e.return,t,n)}function fs(e,t,n,a,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o,treeForkCount:u}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=n,d.tailMode=o,d.treeForkCount=u)}function Kf(e,t,n){var a=t.pendingProps,o=a.revealOrder,u=a.tail;a=a.children;var d=Ge.current,v=(d&2)!==0;if(v?(d=d&1|2,t.flags|=128):d&=1,$(Ge,d),et(e,t,a,n),a=Te?cl:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zf(e,n,t);else if(e.tag===19)Zf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ci(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fs(t,!1,o,n,u,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ci(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fs(t,!0,n,null,u,a);break;case"together":fs(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(za(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ds(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xi(e)))}function jm(e,t,n){switch(t.tag){case 3:at(t,t.stateNode.containerInfo),xn(t,Ve,e.memoizedState.cache),$n();break;case 27:case 5:Pa(t);break;case 4:at(t,t.stateNode.containerInfo);break;case 10:xn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ko(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(zn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Qf(e,t,n):(zn(t),e=tn(e,t,n),e!==null?e.sibling:null);zn(t);break;case 19:var o=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(za(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return Kf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),$(Ge,Ge.current),a)break;return null;case 22:return t.lanes=0,qf(e,t,n,t.pendingProps);case 24:xn(t,Ve,e.memoizedState.cache)}return tn(e,t,n)}function Jf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!ds(e,n)&&(t.flags&128)===0)return Qe=!1,jm(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,Te&&(t.flags&1048576)!==0&&zc(t,cl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ea(t.elementType),t.type=e,typeof e=="function")go(e)?(a=la(e,a),t.tag=1,t=Vf(null,t,e,a,n)):(t.tag=0,t=is(null,t,e,a,n));else{if(e!=null){var o=e.$$typeof;if(o===X){t.tag=11,t=Bf(null,t,e,a,n);break e}else if(o===Z){t.tag=14,t=kf(null,t,e,a,n);break e}}throw t=re(e)||e,Error(r(306,t,""))}}return t;case 0:return is(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=la(a,t.pendingProps),Vf(e,t,a,o,n);case 3:e:{if(at(t,t.stateNode.containerInfo),e===null)throw Error(r(387));a=t.pendingProps;var u=t.memoizedState;o=u.element,No(e,t),bl(t,a,null,n);var d=t.memoizedState;if(a=d.cache,xn(t,Ve,a),a!==u.cache&&Mo(t,[Ve],n,!0),gl(),a=d.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Xf(e,t,a,n);break e}else if(a!==o){o=_t(Error(r(424)),t),fl(o),t=Xf(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Ht(e.firstChild),We=t,Te=!0,yn=null,wt=!0,n=Uc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),a===o){t=tn(e,t,n);break e}et(e,t,a,n)}t=t.child}return t;case 26:return ji(e,t),e===null?(n=ip(t.type,null,t.pendingProps,null))?t.memoizedState=n:Te||(n=t.type,e=t.pendingProps,a=ar(ve.current).createElement(n),a[Fe]=t,a[rt]=e,tt(a,n,e),Pe(a),t.stateNode=a):t.memoizedState=ip(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pa(t),e===null&&Te&&(a=t.stateNode=np(t.type,t.pendingProps,ve.current),We=t,wt=!0,o=Re,Rn(t.type)?(Qs=o,Re=Ht(a.firstChild)):Re=o),et(e,t,t.pendingProps.children,n),ji(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Te&&((o=a=Re)&&(a=v0(a,t.type,t.pendingProps,wt),a!==null?(t.stateNode=a,We=t,Re=Ht(a.firstChild),wt=!1,o=!0):o=!1),o||Sn(t)),Pa(t),o=t.type,u=t.pendingProps,d=e!==null?e.memoizedProps:null,a=u.children,js(o,u)?a=null:d!==null&&js(o,d)&&(t.flags|=32),t.memoizedState!==null&&(o=qo(e,t,wm,null,null,n),Ul._currentValue=o),ji(e,t),et(e,t,a,n),t.child;case 6:return e===null&&Te&&((e=n=Re)&&(n=g0(n,t.pendingProps,wt),n!==null?(t.stateNode=n,We=t,Re=null,e=!0):e=!1),e||Sn(t)),null;case 13:return Qf(e,t,n);case 4:return at(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=na(t,null,a,n):et(e,t,a,n),t.child;case 11:return Bf(e,t,t.type,t.pendingProps,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,xn(t,t.type,a.value),et(e,t,a.children,n),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,Wn(t),o=Ie(o),a=a(o),t.flags|=1,et(e,t,a,n),t.child;case 14:return kf(e,t,t.type,t.pendingProps,n);case 15:return Uf(e,t,t.type,t.pendingProps,n);case 19:return Kf(e,t,n);case 31:return qm(e,t,n);case 22:return qf(e,t,n,t.pendingProps);case 24:return Wn(t),a=Ie(Ve),e===null?(o=Co(),o===null&&(o=Ne,u=Ao(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=n),o=u),t.memoizedState={parent:a,cache:o},wo(t),xn(t,Ve,o)):((e.lanes&n)!==0&&(No(e,t),bl(t,null,null,n),gl()),o=e.memoizedState,u=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),xn(t,Ve,a)):(a=u.cache,xn(t,Ve,a),a!==o.cache&&Mo(t,[Ve],n,!0))),et(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function nn(e){e.flags|=4}function ps(e,t,n,a,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(xd())e.flags|=8192;else throw ta=zi,Do}else e.flags&=-16777217}function Pf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!cp(t))if(xd())e.flags|=8192;else throw ta=zi,Do}function Yi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Au():536870912,e.lanes|=t,ka|=t)}function El(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Gm(e,t,n){var a=t.pendingProps;switch(xo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Wt(Ve),je(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ea(t)?nn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Oo())),Le(t),null;case 26:var o=t.type,u=t.memoizedState;return e===null?(nn(t),u!==null?(Le(t),Pf(t,u)):(Le(t),ps(t,o,null,a,n))):u?u!==e.memoizedState?(nn(t),Le(t),Pf(t,u)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&nn(t),Le(t),ps(t,o,e,a,n)),null;case 27:if(Il(t),n=ve.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&nn(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Le(t),null}e=te.current,Ea(t)?Ac(t):(e=np(o,a,n),t.stateNode=e,nn(t))}return Le(t),null;case 5:if(Il(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&nn(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Le(t),null}if(u=te.current,Ea(t))Ac(t);else{var d=ar(ve.current);switch(u){case 1:u=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:u=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":u=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":u=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":u=d.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?d.createElement("select",{is:a.is}):d.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?d.createElement(o,{is:a.is}):d.createElement(o)}}u[Fe]=t,u[rt]=a;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)u.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=u;e:switch(tt(u,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&nn(t)}}return Le(t),ps(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&nn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(r(166));if(e=ve.current,Ea(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=We,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[Fe]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Qd(e.nodeValue,n)),e||Sn(t,!0)}else e=ar(e).createTextNode(a),e[Fe]=t,t.stateNode=e}return Le(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ea(t),n!==null){if(e===null){if(!a)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Fe]=t}else $n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else n=Oo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(yt(t),t):(yt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Le(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Ea(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(r(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[Fe]=t}else $n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else o=Oo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(yt(t),t):(yt(t),null)}return yt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==o&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Yi(t,t.updateQueue),Le(t),null);case 4:return je(),e===null&&Ls(t.stateNode.containerInfo),Le(t),null;case 10:return Wt(t.type),Le(t),null;case 19:if(V(Ge),a=t.memoizedState,a===null)return Le(t),null;if(o=(t.flags&128)!==0,u=a.rendering,u===null)if(o)El(a,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Ci(e),u!==null){for(t.flags|=128,El(a,!1),e=u.updateQueue,t.updateQueue=e,Yi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Tc(n,e),n=n.sibling;return $(Ge,Ge.current&1|2),Te&&$t(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&pt()>Ki&&(t.flags|=128,o=!0,El(a,!1),t.lanes=4194304)}else{if(!o)if(e=Ci(u),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Yi(t,e),El(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!Te)return Le(t),null}else 2*pt()-a.renderingStartTime>Ki&&n!==536870912&&(t.flags|=128,o=!0,El(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(e=a.last,e!==null?e.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=pt(),e.sibling=null,n=Ge.current,$(Ge,o?n&1|2:n&1),Te&&$t(t,a.treeForkCount),e):(Le(t),null);case 22:case 23:return yt(t),Bo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&Yi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&V(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wt(Ve),Le(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function Ym(e,t){switch(xo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(Ve),je(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Il(t),null;case 31:if(t.memoizedState!==null){if(yt(t),t.alternate===null)throw Error(r(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Ge),null;case 4:return je(),null;case 10:return Wt(t.type),null;case 22:case 23:return yt(t),Bo(),e!==null&&V(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(Ve),null;case 25:return null;default:return null}}function $f(e,t){switch(xo(t),t.tag){case 3:Wt(Ve),je();break;case 26:case 27:case 5:Il(t);break;case 4:je();break;case 31:t.memoizedState!==null&&yt(t);break;case 13:yt(t);break;case 19:V(Ge);break;case 10:Wt(t.type);break;case 22:case 23:yt(t),Bo(),e!==null&&V(In);break;case 24:Wt(Ve)}}function zl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var u=n.create,d=n.inst;a=u(),d.destroy=a}n=n.next}while(n!==o)}}catch(v){_e(t,t.return,v)}}function An(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){var d=a.inst,v=d.destroy;if(v!==void 0){d.destroy=void 0,o=t;var S=n,D=v;try{D()}catch(U){_e(o,S,U)}}}a=a.next}while(a!==u)}}catch(U){_e(t,t.return,U)}}function Ff(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{jc(t,n)}catch(a){_e(e,e.return,a)}}}function Wf(e,t,n){n.props=la(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){_e(e,t,a)}}function Ml(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(o){_e(e,t,o)}}function Yt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){_e(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){_e(e,t,o)}else n.current=null}function If(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){_e(e,e.return,o)}}function hs(e,t,n){try{var a=e.stateNode;c0(a,e.type,n,t),a[rt]=t}catch(o){_e(e,e.return,o)}}function ed(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Rn(e.type)||e.tag===4}function ms(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Rn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kt));else if(a!==4&&(a===27&&Rn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}function Vi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Rn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Vi(e,t,n),e=e.sibling;e!==null;)Vi(e,t,n),e=e.sibling}function td(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);tt(t,a,n),t[Fe]=e,t[rt]=n}catch(u){_e(e,e.return,u)}}var an=!1,Ze=!1,gs=!1,nd=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Vm(e,t){if(e=e.containerInfo,Us=cr,e=pc(e),uo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var d=0,v=-1,S=-1,D=0,U=0,G=e,H=null;t:for(;;){for(var R;G!==n||o!==0&&G.nodeType!==3||(v=d+o),G!==u||a!==0&&G.nodeType!==3||(S=d+a),G.nodeType===3&&(d+=G.nodeValue.length),(R=G.firstChild)!==null;)H=G,G=R;for(;;){if(G===e)break t;if(H===n&&++D===o&&(v=d),H===u&&++U===a&&(S=d),(R=G.nextSibling)!==null)break;G=H,H=G.parentNode}G=R}n=v===-1||S===-1?null:{start:v,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(qs={focusedElem:e,selectionRange:n},cr=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,o=u.memoizedProps,u=u.memoizedState,a=n.stateNode;try{var ee=la(n.type,o);e=a.getSnapshotBeforeUpdate(ee,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(oe){_e(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ys(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ys(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function ad(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:rn(e,n),a&4&&zl(5,n);break;case 1:if(rn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){_e(n,n.return,d)}else{var o=la(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){_e(n,n.return,d)}}a&64&&Ff(n),a&512&&Ml(n,n.return);break;case 3:if(rn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{jc(e,t)}catch(d){_e(n,n.return,d)}}break;case 27:t===null&&a&4&&td(n);case 26:case 5:rn(e,n),t===null&&a&4&&If(n),a&512&&Ml(n,n.return);break;case 12:rn(e,n);break;case 31:rn(e,n),a&4&&rd(e,n);break;case 13:rn(e,n),a&4&&od(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Wm.bind(null,n),b0(e,n))));break;case 22:if(a=n.memoizedState!==null||an,!a){t=t!==null&&t.memoizedState!==null||Ze,o=an;var u=Ze;an=a,(Ze=t)&&!u?on(e,n,(n.subtreeFlags&8772)!==0):rn(e,n),an=o,Ze=u}break;case 30:break;default:rn(e,n)}}function ld(e){var t=e.alternate;t!==null&&(e.alternate=null,ld(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Zr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,st=!1;function ln(e,t,n){for(n=n.child;n!==null;)id(e,t,n),n=n.sibling}function id(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount($a,n)}catch{}switch(n.tag){case 26:Ze||Yt(n,t),ln(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ze||Yt(n,t);var a=Be,o=st;Rn(n.type)&&(Be=n.stateNode,st=!1),ln(e,t,n),Ll(n.stateNode),Be=a,st=o;break;case 5:Ze||Yt(n,t);case 6:if(a=Be,o=st,Be=null,ln(e,t,n),Be=a,st=o,Be!==null)if(st)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(n.stateNode)}catch(u){_e(n,t,u)}else try{Be.removeChild(n.stateNode)}catch(u){_e(n,t,u)}break;case 18:Be!==null&&(st?(e=Be,Fd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Qa(e)):Fd(Be,n.stateNode));break;case 4:a=Be,o=st,Be=n.stateNode.containerInfo,st=!0,ln(e,t,n),Be=a,st=o;break;case 0:case 11:case 14:case 15:An(2,n,t),Ze||An(4,n,t),ln(e,t,n);break;case 1:Ze||(Yt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Wf(n,t,a)),ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:Ze=(a=Ze)||n.memoizedState!==null,ln(e,t,n),Ze=a;break;default:ln(e,t,n)}}function rd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qa(e)}catch(n){_e(t,t.return,n)}}}function od(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qa(e)}catch(n){_e(t,t.return,n)}}function Xm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nd),t;default:throw Error(r(435,e.tag))}}function Xi(e,t){var n=Xm(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var o=Im.bind(null,e,a);a.then(o,o)}})}function ut(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a],u=e,d=t,v=d;e:for(;v!==null;){switch(v.tag){case 27:if(Rn(v.type)){Be=v.stateNode,st=!1;break e}break;case 5:Be=v.stateNode,st=!1;break e;case 3:case 4:Be=v.stateNode.containerInfo,st=!0;break e}v=v.return}if(Be===null)throw Error(r(160));id(u,d,o),Be=null,st=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)sd(t,e),t=t.sibling}var Bt=null;function sd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),ct(e),a&4&&(An(3,e,e.return),zl(3,e),An(5,e,e.return));break;case 1:ut(t,e),ct(e),a&512&&(Ze||n===null||Yt(n,n.return)),a&64&&an&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var o=Bt;if(ut(t,e),ct(e),a&512&&(Ze||n===null||Yt(n,n.return)),a&4){var u=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":u=o.getElementsByTagName("title")[0],(!u||u[Ia]||u[Fe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(a),o.head.insertBefore(u,o.querySelector("head > title"))),tt(u,a,n),u[Fe]=e,Pe(u),a=u;break e;case"link":var d=sp("link","href",o).get(a+(n.href||""));if(d){for(var v=0;v<d.length;v++)if(u=d[v],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(v,1);break t}}u=o.createElement(a),tt(u,a,n),o.head.appendChild(u);break;case"meta":if(d=sp("meta","content",o).get(a+(n.content||""))){for(v=0;v<d.length;v++)if(u=d[v],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(v,1);break t}}u=o.createElement(a),tt(u,a,n),o.head.appendChild(u);break;default:throw Error(r(468,a))}u[Fe]=e,Pe(u),a=u}e.stateNode=a}else up(o,e.type,e.stateNode);else e.stateNode=op(o,a,e.memoizedProps);else u!==a?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,a===null?up(o,e.type,e.stateNode):op(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&hs(e,e.memoizedProps,n.memoizedProps)}break;case 27:ut(t,e),ct(e),a&512&&(Ze||n===null||Yt(n,n.return)),n!==null&&a&4&&hs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ut(t,e),ct(e),a&512&&(Ze||n===null||Yt(n,n.return)),e.flags&32){o=e.stateNode;try{ha(o,"")}catch(ee){_e(e,e.return,ee)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,hs(e,o,n!==null?n.memoizedProps:o)),a&1024&&(gs=!0);break;case 6:if(ut(t,e),ct(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ee){_e(e,e.return,ee)}}break;case 3:if(rr=null,o=Bt,Bt=lr(t.containerInfo),ut(t,e),Bt=o,ct(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Qa(t.containerInfo)}catch(ee){_e(e,e.return,ee)}gs&&(gs=!1,ud(e));break;case 4:a=Bt,Bt=lr(e.stateNode.containerInfo),ut(t,e),ct(e),Bt=a;break;case 12:ut(t,e),ct(e);break;case 31:ut(t,e),ct(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Xi(e,a)));break;case 13:ut(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zi=pt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Xi(e,a)));break;case 22:o=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,D=an,U=Ze;if(an=D||o,Ze=U||S,ut(t,e),Ze=U,an=D,ct(e),a&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||S||an||Ze||ia(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(u=S.stateNode,o)d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=S.stateNode;var G=S.memoizedProps.style,H=G!=null&&G.hasOwnProperty("display")?G.display:null;v.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(ee){_e(S,S.return,ee)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=o?"":S.memoizedProps}catch(ee){_e(S,S.return,ee)}}}else if(t.tag===18){if(n===null){S=t;try{var R=S.stateNode;o?Wd(R,!0):Wd(S.stateNode,!1)}catch(ee){_e(S,S.return,ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Xi(e,n))));break;case 19:ut(t,e),ct(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Xi(e,a)));break;case 30:break;case 21:break;default:ut(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(ed(a)){n=a;break}a=a.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var o=n.stateNode,u=ms(e);Vi(e,u,o);break;case 5:var d=n.stateNode;n.flags&32&&(ha(d,""),n.flags&=-33);var v=ms(e);Vi(e,v,d);break;case 3:case 4:var S=n.stateNode.containerInfo,D=ms(e);vs(e,D,S);break;default:throw Error(r(161))}}catch(U){_e(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ud(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ud(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function rn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ad(e,t.alternate,t),t=t.sibling}function ia(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:An(4,t,t.return),ia(t);break;case 1:Yt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Wf(t,t.return,n),ia(t);break;case 27:Ll(t.stateNode);case 26:case 5:Yt(t,t.return),ia(t);break;case 22:t.memoizedState===null&&ia(t);break;case 30:ia(t);break;default:ia(t)}e=e.sibling}}function on(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,u=t,d=u.flags;switch(u.tag){case 0:case 11:case 15:on(o,u,n),zl(4,u);break;case 1:if(on(o,u,n),a=u,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(D){_e(a,a.return,D)}if(a=u,o=a.updateQueue,o!==null){var v=a.stateNode;try{var S=o.shared.hiddenCallbacks;if(S!==null)for(o.shared.hiddenCallbacks=null,o=0;o<S.length;o++)qc(S[o],v)}catch(D){_e(a,a.return,D)}}n&&d&64&&Ff(u),Ml(u,u.return);break;case 27:td(u);case 26:case 5:on(o,u,n),n&&a===null&&d&4&&If(u),Ml(u,u.return);break;case 12:on(o,u,n);break;case 31:on(o,u,n),n&&d&4&&rd(o,u);break;case 13:on(o,u,n),n&&d&4&&od(o,u);break;case 22:u.memoizedState===null&&on(o,u,n),Ml(u,u.return);break;case 30:break;default:on(o,u,n)}t=t.sibling}}function bs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&dl(n))}function ys(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&dl(e))}function kt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cd(e,t,n,a),t=t.sibling}function cd(e,t,n,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,n,a),o&2048&&zl(9,t);break;case 1:kt(e,t,n,a);break;case 3:kt(e,t,n,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&dl(e)));break;case 12:if(o&2048){kt(e,t,n,a),e=t.stateNode;try{var u=t.memoizedProps,d=u.id,v=u.onPostCommit;typeof v=="function"&&v(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){_e(t,t.return,S)}}else kt(e,t,n,a);break;case 31:kt(e,t,n,a);break;case 13:kt(e,t,n,a);break;case 23:break;case 22:u=t.stateNode,d=t.alternate,t.memoizedState!==null?u._visibility&2?kt(e,t,n,a):Al(e,t):u._visibility&2?kt(e,t,n,a):(u._visibility|=2,Ra(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),o&2048&&bs(d,t);break;case 24:kt(e,t,n,a),o&2048&&ys(t.alternate,t);break;default:kt(e,t,n,a)}}function Ra(e,t,n,a,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,d=t,v=n,S=a,D=d.flags;switch(d.tag){case 0:case 11:case 15:Ra(u,d,v,S,o),zl(8,d);break;case 23:break;case 22:var U=d.stateNode;d.memoizedState!==null?U._visibility&2?Ra(u,d,v,S,o):Al(u,d):(U._visibility|=2,Ra(u,d,v,S,o)),o&&D&2048&&bs(d.alternate,d);break;case 24:Ra(u,d,v,S,o),o&&D&2048&&ys(d.alternate,d);break;default:Ra(u,d,v,S,o)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:Al(n,a),o&2048&&bs(a.alternate,a);break;case 24:Al(n,a),o&2048&&ys(a.alternate,a);break;default:Al(n,a)}t=t.sibling}}var _l=8192;function La(e,t,n){if(e.subtreeFlags&_l)for(e=e.child;e!==null;)fd(e,t,n),e=e.sibling}function fd(e,t,n){switch(e.tag){case 26:La(e,t,n),e.flags&_l&&e.memoizedState!==null&&D0(n,Bt,e.memoizedState,e.memoizedProps);break;case 5:La(e,t,n);break;case 3:case 4:var a=Bt;Bt=lr(e.stateNode.containerInfo),La(e,t,n),Bt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=_l,_l=16777216,La(e,t,n),_l=a):La(e,t,n));break;default:La(e,t,n)}}function dd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Cl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];$e=a,hd(a,e)}dd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pd(e),e=e.sibling}function pd(e){switch(e.tag){case 0:case 11:case 15:Cl(e),e.flags&2048&&An(9,e,e.return);break;case 3:Cl(e);break;case 12:Cl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qi(e)):Cl(e);break;default:Cl(e)}}function Qi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];$e=a,hd(a,e)}dd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:An(8,t,t.return),Qi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qi(t));break;default:Qi(t)}e=e.sibling}}function hd(e,t){for(;$e!==null;){var n=$e;switch(n.tag){case 0:case 11:case 15:An(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:dl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,$e=a;else e:for(n=e;$e!==null;){a=$e;var o=a.sibling,u=a.return;if(ld(a),a===n){$e=null;break e}if(o!==null){o.return=u,$e=o;break e}$e=u}}}var Qm={getCacheForType:function(e){var t=Ie(Ve),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ie(Ve).controller.signal}},Zm=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ne=null,ge=null,Se=0,Ae=0,St=null,_n=!1,Ba=!1,Ss=!1,sn=0,qe=0,Cn=0,ra=0,xs=0,xt=0,ka=0,Dl=null,ft=null,Ts=!1,Zi=0,md=0,Ki=1/0,Ji=null,Dn=null,Ke=0,wn=null,Ua=null,un=0,Os=0,Es=null,vd=null,wl=0,zs=null;function Tt(){return(ze&2)!==0&&Se!==0?Se&-Se:B.T!==null?ws():wu()}function gd(){if(xt===0)if((Se&536870912)===0||Te){var e=ni;ni<<=1,(ni&3932160)===0&&(ni=262144),xt=e}else xt=536870912;return e=bt.current,e!==null&&(e.flags|=32),xt}function dt(e,t,n){(e===Ne&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(qa(e,0),Nn(e,Se,xt,!1)),Wa(e,n),((ze&2)===0||e!==Ne)&&(e===Ne&&((ze&2)===0&&(ra|=n),qe===4&&Nn(e,Se,xt,!1)),Vt(e))}function bd(e,t,n){if((ze&6)!==0)throw Error(r(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Fa(e,t),o=a?Pm(e,t):As(e,t,!0),u=a;do{if(o===0){Ba&&!a&&Nn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!Km(n)){o=As(e,t,!1),u=!1;continue}if(o===2){if(u=t,e.errorRecoveryDisabledLanes&u)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var v=e;o=Dl;var S=v.current.memoizedState.isDehydrated;if(S&&(qa(v,d).flags|=256),d=As(v,d,!1),d!==2){if(Ss&&!S){v.errorRecoveryDisabledLanes|=u,ra|=u,o=4;break e}u=ft,ft=o,u!==null&&(ft===null?ft=u:ft.push.apply(ft,u))}o=d}if(u=!1,o!==2)continue}}if(o===1){qa(e,0),Nn(e,t,0,!0);break}e:{switch(a=e,u=o,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Nn(a,t,xt,!_n);break e;case 2:ft=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(o=Zi+300-pt(),10<o)){if(Nn(a,t,xt,!_n),li(a,0,!0)!==0)break e;un=t,a.timeoutHandle=Pd(yd.bind(null,a,n,ft,Ji,Ts,t,xt,ra,ka,_n,u,"Throttled",-0,0),o);break e}yd(a,n,ft,Ji,Ts,t,xt,ra,ka,_n,u,null,-0,0)}}break}while(!0);Vt(e)}function yd(e,t,n,a,o,u,d,v,S,D,U,G,H,R){if(e.timeoutHandle=-1,G=t.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Kt},fd(t,u,G);var ee=(u&62914560)===u?Zi-pt():(u&4194048)===u?md-pt():0;if(ee=w0(G,ee),ee!==null){un=u,e.cancelPendingCommit=ee(Ad.bind(null,e,t,u,n,a,o,d,v,S,U,G,null,H,R)),Nn(e,u,d,!D);return}}Ad(e,t,u,n,a,o,d,v,S)}function Km(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],u=o.getSnapshot;o=o.value;try{if(!vt(u(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nn(e,t,n,a){t&=~xs,t&=~ra,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var u=31-mt(o),d=1<<u;a[u]=-1,o&=~d}n!==0&&_u(e,n,t)}function Pi(){return(ze&6)===0?(Nl(0),!1):!0}function Ms(){if(ge!==null){if(Ae===0)var e=ge.return;else e=ge,Ft=Fn=null,Yo(e),Ca=null,hl=0,e=ge;for(;e!==null;)$f(e.alternate,e),e=e.return;ge=null}}function qa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,p0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),un=0,Ms(),Ne=e,ge=n=Pt(e.current,null),Se=t,Ae=0,St=null,_n=!1,Ba=Fa(e,t),Ss=!1,ka=xt=xs=ra=Cn=qe=0,ft=Dl=null,Ts=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-mt(a),u=1<<o;t|=e[o],a&=~u}return sn=t,vi(),n}function Sd(e,t){pe=null,B.H=Tl,t===_a||t===Ei?(t=Lc(),Ae=3):t===Do?(t=Lc(),Ae=4):Ae=t===ls?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,St=t,ge===null&&(qe=1,Ui(e,_t(t,e.current)))}function xd(){var e=bt.current;return e===null?!0:(Se&4194048)===Se?Nt===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Nt:!1}function Td(){var e=B.H;return B.H=Tl,e===null?Tl:e}function Od(){var e=B.A;return B.A=Qm,e}function $i(){qe=4,_n||(Se&4194048)!==Se&&bt.current!==null||(Ba=!0),(Cn&134217727)===0&&(ra&134217727)===0||Ne===null||Nn(Ne,Se,xt,!1)}function As(e,t,n){var a=ze;ze|=2;var o=Td(),u=Od();(Ne!==e||Se!==t)&&(Ji=null,qa(e,t)),t=!1;var d=qe;e:do try{if(Ae!==0&&ge!==null){var v=ge,S=St;switch(Ae){case 8:Ms(),d=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var D=Ae;if(Ae=0,St=null,ja(e,v,S,D),n&&Ba){d=0;break e}break;default:D=Ae,Ae=0,St=null,ja(e,v,S,D)}}Jm(),d=qe;break}catch(U){Sd(e,U)}while(!0);return t&&e.shellSuspendCounter++,Ft=Fn=null,ze=a,B.H=o,B.A=u,ge===null&&(Ne=null,Se=0,vi()),d}function Jm(){for(;ge!==null;)Ed(ge)}function Pm(e,t){var n=ze;ze|=2;var a=Td(),o=Od();Ne!==e||Se!==t?(Ji=null,Ki=pt()+500,qa(e,t)):Ba=Fa(e,t);e:do try{if(Ae!==0&&ge!==null){t=ge;var u=St;t:switch(Ae){case 1:Ae=0,St=null,ja(e,t,u,1);break;case 2:case 9:if(Hc(u)){Ae=0,St=null,zd(t);break}t=function(){Ae!==2&&Ae!==9||Ne!==e||(Ae=7),Vt(e)},u.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:Hc(u)?(Ae=0,St=null,zd(t)):(Ae=0,St=null,ja(e,t,u,7));break;case 5:var d=null;switch(ge.tag){case 26:d=ge.memoizedState;case 5:case 27:var v=ge;if(d?cp(d):v.stateNode.complete){Ae=0,St=null;var S=v.sibling;if(S!==null)ge=S;else{var D=v.return;D!==null?(ge=D,Fi(D)):ge=null}break t}}Ae=0,St=null,ja(e,t,u,5);break;case 6:Ae=0,St=null,ja(e,t,u,6);break;case 8:Ms(),qe=6;break e;default:throw Error(r(462))}}$m();break}catch(U){Sd(e,U)}while(!0);return Ft=Fn=null,B.H=a,B.A=o,ze=n,ge!==null?0:(Ne=null,Se=0,vi(),qe)}function $m(){for(;ge!==null&&!yh();)Ed(ge)}function Ed(e){var t=Jf(e.alternate,e,sn);e.memoizedProps=e.pendingProps,t===null?Fi(e):ge=t}function zd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Yf(n,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=Yf(n,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:Yo(t);default:$f(n,t),t=ge=Tc(t,sn),t=Jf(n,t,sn)}e.memoizedProps=e.pendingProps,t===null?Fi(e):ge=t}function ja(e,t,n,a){Ft=Fn=null,Yo(t),Ca=null,hl=0;var o=t.return;try{if(Um(e,o,t,n,Se)){qe=1,Ui(e,_t(n,e.current)),ge=null;return}}catch(u){if(o!==null)throw ge=o,u;qe=1,Ui(e,_t(n,e.current)),ge=null;return}t.flags&32768?(Te||a===1?e=!0:Ba||(Se&536870912)!==0?e=!1:(_n=e=!0,(a===2||a===9||a===3||a===6)&&(a=bt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Md(t,e)):Fi(t)}function Fi(e){var t=e;do{if((t.flags&32768)!==0){Md(t,_n);return}e=t.return;var n=Gm(t.alternate,t,sn);if(n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);qe===0&&(qe=5)}function Md(e,t){do{var n=Ym(e.alternate,e);if(n!==null){n.flags&=32767,ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=n}while(e!==null);qe=6,ge=null}function Ad(e,t,n,a,o,u,d,v,S){e.cancelPendingCommit=null;do Wi();while(Ke!==0);if((ze&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(u=t.lanes|t.childLanes,u|=mo,Ch(e,n,u,d,v,S),e===Ne&&(ge=Ne=null,Se=0),Ua=t,wn=e,un=n,Os=u,Es=o,vd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,e0(ei,function(){return Nd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null,o=Y.p,Y.p=2,d=ze,ze|=4;try{Vm(e,t,n)}finally{ze=d,Y.p=o,B.T=a}}Ke=1,_d(),Cd(),Dd()}}function _d(){if(Ke===1){Ke=0;var e=wn,t=Ua,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var a=Y.p;Y.p=2;var o=ze;ze|=4;try{sd(t,e);var u=qs,d=pc(e.containerInfo),v=u.focusedElem,S=u.selectionRange;if(d!==v&&v&&v.ownerDocument&&dc(v.ownerDocument.documentElement,v)){if(S!==null&&uo(v)){var D=S.start,U=S.end;if(U===void 0&&(U=D),"selectionStart"in v)v.selectionStart=D,v.selectionEnd=Math.min(U,v.value.length);else{var G=v.ownerDocument||document,H=G&&G.defaultView||window;if(H.getSelection){var R=H.getSelection(),ee=v.textContent.length,oe=Math.min(S.start,ee),we=S.end===void 0?oe:Math.min(S.end,ee);!R.extend&&oe>we&&(d=we,we=oe,oe=d);var _=fc(v,oe),T=fc(v,we);if(_&&T&&(R.rangeCount!==1||R.anchorNode!==_.node||R.anchorOffset!==_.offset||R.focusNode!==T.node||R.focusOffset!==T.offset)){var C=G.createRange();C.setStart(_.node,_.offset),R.removeAllRanges(),oe>we?(R.addRange(C),R.extend(T.node,T.offset)):(C.setEnd(T.node,T.offset),R.addRange(C))}}}}for(G=[],R=v;R=R.parentNode;)R.nodeType===1&&G.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<G.length;v++){var q=G[v];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}cr=!!Us,qs=Us=null}finally{ze=o,Y.p=a,B.T=n}}e.current=t,Ke=2}}function Cd(){if(Ke===2){Ke=0;var e=wn,t=Ua,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var a=Y.p;Y.p=2;var o=ze;ze|=4;try{ad(e,t.alternate,t)}finally{ze=o,Y.p=a,B.T=n}}Ke=3}}function Dd(){if(Ke===4||Ke===3){Ke=0,Sh();var e=wn,t=Ua,n=un,a=vd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,Ua=wn=null,wd(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Dn=null),Xr(n),t=t.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot($a,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=B.T,o=Y.p,Y.p=2,B.T=null;try{for(var u=e.onRecoverableError,d=0;d<a.length;d++){var v=a[d];u(v.value,{componentStack:v.stack})}}finally{B.T=t,Y.p=o}}(un&3)!==0&&Wi(),Vt(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===zs?wl++:(wl=0,zs=e):wl=0,Nl(0)}}function wd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,dl(t)))}function Wi(){return _d(),Cd(),Dd(),Nd()}function Nd(){if(Ke!==5)return!1;var e=wn,t=Os;Os=0;var n=Xr(un),a=B.T,o=Y.p;try{Y.p=32>n?32:n,B.T=null,n=Es,Es=null;var u=wn,d=un;if(Ke=0,Ua=wn=null,un=0,(ze&6)!==0)throw Error(r(331));var v=ze;if(ze|=4,pd(u.current),cd(u,u.current,d,n),ze=v,Nl(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot($a,u)}catch{}return!0}finally{Y.p=o,B.T=a,wd(e,t)}}function Hd(e,t,n){t=_t(n,t),t=as(e.stateNode,t,2),e=En(e,t,2),e!==null&&(Wa(e,2),Vt(e))}function _e(e,t,n){if(e.tag===3)Hd(e,e,n);else for(;t!==null;){if(t.tag===3){Hd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Dn===null||!Dn.has(a))){e=_t(n,e),n=Rf(2),a=En(t,n,2),a!==null&&(Lf(n,a,t,e),Wa(a,2),Vt(a));break}}t=t.return}}function _s(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Zm;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(Ss=!0,o.add(n),e=Fm.bind(null,e,t,n),t.then(e,e))}function Fm(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ne===e&&(Se&n)===n&&(qe===4||qe===3&&(Se&62914560)===Se&&300>pt()-Zi?(ze&2)===0&&qa(e,0):xs|=n,ka===Se&&(ka=0)),Vt(e)}function Rd(e,t){t===0&&(t=Au()),e=Jn(e,t),e!==null&&(Wa(e,t),Vt(e))}function Wm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rd(e,n)}function Im(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(t),Rd(e,n)}function e0(e,t){return jr(e,t)}var Ii=null,Ga=null,Cs=!1,er=!1,Ds=!1,Hn=0;function Vt(e){e!==Ga&&e.next===null&&(Ga===null?Ii=Ga=e:Ga=Ga.next=e),er=!0,Cs||(Cs=!0,n0())}function Nl(e,t){if(!Ds&&er){Ds=!0;do for(var n=!1,a=Ii;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var u=0;else{var d=a.suspendedLanes,v=a.pingedLanes;u=(1<<31-mt(42|e)+1)-1,u&=o&~(d&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Ud(a,u))}else u=Se,u=li(a,a===Ne?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Fa(a,u)||(n=!0,Ud(a,u));a=a.next}while(n);Ds=!1}}function t0(){Ld()}function Ld(){er=Cs=!1;var e=0;Hn!==0&&d0()&&(e=Hn);for(var t=pt(),n=null,a=Ii;a!==null;){var o=a.next,u=Bd(a,t);u===0?(a.next=null,n===null?Ii=o:n.next=o,o===null&&(Ga=n)):(n=a,(e!==0||(u&3)!==0)&&(er=!0)),a=o}Ke!==0&&Ke!==5||Nl(e),Hn!==0&&(Hn=0)}function Bd(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var d=31-mt(u),v=1<<d,S=o[d];S===-1?((v&n)===0||(v&a)!==0)&&(o[d]=_h(v,t)):S<=t&&(e.expiredLanes|=v),u&=~v}if(t=Ne,n=Se,n=li(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Gr(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Fa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Gr(a),Xr(n)){case 2:case 8:n=zu;break;case 32:n=ei;break;case 268435456:n=Mu;break;default:n=ei}return a=kd.bind(null,e),n=jr(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Gr(a),e.callbackPriority=2,e.callbackNode=null,2}function kd(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Wi()&&e.callbackNode!==n)return null;var a=Se;return a=li(e,e===Ne?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(bd(e,a,t),Bd(e,pt()),e.callbackNode!=null&&e.callbackNode===n?kd.bind(null,e):null)}function Ud(e,t){if(Wi())return null;bd(e,t,!0)}function n0(){h0(function(){(ze&6)!==0?jr(Eu,t0):Ld()})}function ws(){if(Hn===0){var e=Ma;e===0&&(e=ti,ti<<=1,(ti&261888)===0&&(ti=256)),Hn=e}return Hn}function qd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:si(""+e)}function jd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function a0(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var u=qd((o[rt]||null).action),d=a.submitter;d&&(t=(t=d[rt]||null)?qd(t.formAction):d.getAttribute("formAction"),t!==null&&(u=t,d=null));var v=new di("action","action",null,a,o);e.push({event:v,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Hn!==0){var S=d?jd(o,d):new FormData(o);Fo(n,{pending:!0,data:S,method:o.method,action:u},null,S)}}else typeof u=="function"&&(v.preventDefault(),S=d?jd(o,d):new FormData(o),Fo(n,{pending:!0,data:S,method:o.method,action:u},u,S))},currentTarget:o}]})}}for(var Ns=0;Ns<ho.length;Ns++){var Hs=ho[Ns],l0=Hs.toLowerCase(),i0=Hs[0].toUpperCase()+Hs.slice(1);Lt(l0,"on"+i0)}Lt(vc,"onAnimationEnd"),Lt(gc,"onAnimationIteration"),Lt(bc,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(xm,"onTransitionRun"),Lt(Tm,"onTransitionStart"),Lt(Om,"onTransitionCancel"),Lt(yc,"onTransitionEnd"),da("onMouseEnter",["mouseout","mouseover"]),da("onMouseLeave",["mouseout","mouseover"]),da("onPointerEnter",["pointerout","pointerover"]),da("onPointerLeave",["pointerout","pointerover"]),Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hl));function Gd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var d=a.length-1;0<=d;d--){var v=a[d],S=v.instance,D=v.currentTarget;if(v=v.listener,S!==u&&o.isPropagationStopped())break e;u=v,o.currentTarget=D;try{u(o)}catch(U){mi(U)}o.currentTarget=null,u=S}else for(d=0;d<a.length;d++){if(v=a[d],S=v.instance,D=v.currentTarget,v=v.listener,S!==u&&o.isPropagationStopped())break e;u=v,o.currentTarget=D;try{u(o)}catch(U){mi(U)}o.currentTarget=null,u=S}}}}function be(e,t){var n=t[Qr];n===void 0&&(n=t[Qr]=new Set);var a=e+"__bubble";n.has(a)||(Yd(t,e,2,!1),n.add(a))}function Rs(e,t,n){var a=0;t&&(a|=4),Yd(n,e,a,t)}var tr="_reactListening"+Math.random().toString(36).slice(2);function Ls(e){if(!e[tr]){e[tr]=!0,Ru.forEach(function(n){n!=="selectionchange"&&(r0.has(n)||Rs(n,!1,e),Rs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[tr]||(t[tr]=!0,Rs("selectionchange",!1,t))}}function Yd(e,t,n,a){switch(gp(t)){case 2:var o=R0;break;case 8:o=L0;break;default:o=$s}n=o.bind(null,t,n,e),o=void 0,!eo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Bs(e,t,n,a,o){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var v=a.stateNode.containerInfo;if(v===o)break;if(d===4)for(d=a.return;d!==null;){var S=d.tag;if((S===3||S===4)&&d.stateNode.containerInfo===o)return;d=d.return}for(;v!==null;){if(d=ua(v),d===null)return;if(S=d.tag,S===5||S===6||S===26||S===27){a=u=d;continue e}v=v.parentNode}}a=a.return}Zu(function(){var D=u,U=Wr(n),G=[];e:{var H=Sc.get(e);if(H!==void 0){var R=di,ee=e;switch(e){case"keypress":if(ci(n)===0)break e;case"keydown":case"keyup":R=Ih;break;case"focusin":ee="focus",R=lo;break;case"focusout":ee="blur",R=lo;break;case"beforeblur":case"afterblur":R=lo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Gh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=nm;break;case vc:case gc:case bc:R=Xh;break;case yc:R=lm;break;case"scroll":case"scrollend":R=qh;break;case"wheel":R=rm;break;case"copy":case"cut":case"paste":R=Zh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Fu;break;case"toggle":case"beforetoggle":R=sm}var oe=(t&4)!==0,we=!oe&&(e==="scroll"||e==="scrollend"),_=oe?H!==null?H+"Capture":null:H;oe=[];for(var T=D,C;T!==null;){var q=T;if(C=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||C===null||_===null||(q=tl(T,_),q!=null&&oe.push(Rl(T,q,C))),we)break;T=T.return}0<oe.length&&(H=new R(H,ee,null,n,U),G.push({event:H,listeners:oe}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",H&&n!==Fr&&(ee=n.relatedTarget||n.fromElement)&&(ua(ee)||ee[sa]))break e;if((R||H)&&(H=U.window===U?U:(H=U.ownerDocument)?H.defaultView||H.parentWindow:window,R?(ee=n.relatedTarget||n.toElement,R=D,ee=ee?ua(ee):null,ee!==null&&(we=f(ee),oe=ee.tag,ee!==we||oe!==5&&oe!==27&&oe!==6)&&(ee=null)):(R=null,ee=D),R!==ee)){if(oe=Pu,q="onMouseLeave",_="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Fu,q="onPointerLeave",_="onPointerEnter",T="pointer"),we=R==null?H:el(R),C=ee==null?H:el(ee),H=new oe(q,T+"leave",R,n,U),H.target=we,H.relatedTarget=C,q=null,ua(U)===D&&(oe=new oe(_,T+"enter",ee,n,U),oe.target=C,oe.relatedTarget=we,q=oe),we=q,R&&ee)t:{for(oe=o0,_=R,T=ee,C=0,q=_;q;q=oe(q))C++;q=0;for(var le=T;le;le=oe(le))q++;for(;0<C-q;)_=oe(_),C--;for(;0<q-C;)T=oe(T),q--;for(;C--;){if(_===T||T!==null&&_===T.alternate){oe=_;break t}_=oe(_),T=oe(T)}oe=null}else oe=null;R!==null&&Vd(G,H,R,oe,!1),ee!==null&&we!==null&&Vd(G,we,ee,oe,!0)}}e:{if(H=D?el(D):window,R=H.nodeName&&H.nodeName.toLowerCase(),R==="select"||R==="input"&&H.type==="file")var Oe=ic;else if(ac(H))if(rc)Oe=bm;else{Oe=vm;var ne=mm}else R=H.nodeName,!R||R.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?D&&$r(D.elementType)&&(Oe=ic):Oe=gm;if(Oe&&(Oe=Oe(e,D))){lc(G,Oe,n,U);break e}ne&&ne(e,H,D),e==="focusout"&&D&&H.type==="number"&&D.memoizedProps.value!=null&&Pr(H,"number",H.value)}switch(ne=D?el(D):window,e){case"focusin":(ac(ne)||ne.contentEditable==="true")&&(ba=ne,co=D,ul=null);break;case"focusout":ul=co=ba=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,hc(G,n,U);break;case"selectionchange":if(Sm)break;case"keydown":case"keyup":hc(G,n,U)}var he;if(ro)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else ga?tc(e,n)&&(xe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(xe="onCompositionStart");xe&&(Wu&&n.locale!=="ko"&&(ga||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&ga&&(he=Ku()):(gn=U,to="value"in gn?gn.value:gn.textContent,ga=!0)),ne=nr(D,xe),0<ne.length&&(xe=new $u(xe,e,null,n,U),G.push({event:xe,listeners:ne}),he?xe.data=he:(he=nc(n),he!==null&&(xe.data=he)))),(he=cm?fm(e,n):dm(e,n))&&(xe=nr(D,"onBeforeInput"),0<xe.length&&(ne=new $u("onBeforeInput","beforeinput",null,n,U),G.push({event:ne,listeners:xe}),ne.data=he)),a0(G,e,D,n,U)}Gd(G,t)})}function Rl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nr(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=tl(e,n),o!=null&&a.unshift(Rl(e,o,u)),o=tl(e,t),o!=null&&a.push(Rl(e,o,u))),e.tag===3)return a;e=e.return}return[]}function o0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vd(e,t,n,a,o){for(var u=t._reactName,d=[];n!==null&&n!==a;){var v=n,S=v.alternate,D=v.stateNode;if(v=v.tag,S!==null&&S===a)break;v!==5&&v!==26&&v!==27||D===null||(S=D,o?(D=tl(n,u),D!=null&&d.unshift(Rl(n,D,S))):o||(D=tl(n,u),D!=null&&d.push(Rl(n,D,S)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var s0=/\r\n?/g,u0=/\u0000|\uFFFD/g;function Xd(e){return(typeof e=="string"?e:""+e).replace(s0,`
`).replace(u0,"")}function Qd(e,t){return t=Xd(t),Xd(e)===t}function De(e,t,n,a,o,u){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ha(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ha(e,""+a);break;case"className":ri(e,"class",a);break;case"tabIndex":ri(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ri(e,n,a);break;case"style":Xu(e,a,u);break;case"data":if(t!=="object"){ri(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=si(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&De(e,t,"name",o.name,o,null),De(e,t,"formEncType",o.formEncType,o,null),De(e,t,"formMethod",o.formMethod,o,null),De(e,t,"formTarget",o.formTarget,o,null)):(De(e,t,"encType",o.encType,o,null),De(e,t,"method",o.method,o,null),De(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=si(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Kt);break;case"onScroll":a!=null&&be("scroll",e);break;case"onScrollEnd":a!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=si(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":be("beforetoggle",e),be("toggle",e),ii(e,"popover",a);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ii(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=kh.get(n)||n,ii(e,n,a))}}function ks(e,t,n,a,o,u){switch(n){case"style":Xu(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ha(e,a):(typeof a=="number"||typeof a=="bigint")&&ha(e,""+a);break;case"onScroll":a!=null&&be("scroll",e);break;case"onScrollEnd":a!=null&&be("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Kt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),u=e[rt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,o),typeof a=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):ii(e,n,a)}}}function tt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var a=!1,o=!1,u;for(u in n)if(n.hasOwnProperty(u)){var d=n[u];if(d!=null)switch(u){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:De(e,t,u,d,n,null)}}o&&De(e,t,"srcSet",n.srcSet,n,null),a&&De(e,t,"src",n.src,n,null);return;case"input":be("invalid",e);var v=u=d=o=null,S=null,D=null;for(a in n)if(n.hasOwnProperty(a)){var U=n[a];if(U!=null)switch(a){case"name":o=U;break;case"type":d=U;break;case"checked":S=U;break;case"defaultChecked":D=U;break;case"value":u=U;break;case"defaultValue":v=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(137,t));break;default:De(e,t,a,U,n,null)}}ju(e,u,v,S,D,d,o,!1);return;case"select":be("invalid",e),a=d=u=null;for(o in n)if(n.hasOwnProperty(o)&&(v=n[o],v!=null))switch(o){case"value":u=v;break;case"defaultValue":d=v;break;case"multiple":a=v;default:De(e,t,o,v,n,null)}t=u,n=d,e.multiple=!!a,t!=null?pa(e,!!a,t,!1):n!=null&&pa(e,!!a,n,!0);return;case"textarea":be("invalid",e),u=o=a=null;for(d in n)if(n.hasOwnProperty(d)&&(v=n[d],v!=null))switch(d){case"value":a=v;break;case"defaultValue":o=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(r(91));break;default:De(e,t,d,v,n,null)}Yu(e,a,o,u);return;case"option":for(S in n)n.hasOwnProperty(S)&&(a=n[S],a!=null)&&(S==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":De(e,t,S,a,n,null));return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(a=0;a<Hl.length;a++)be(Hl[a],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in n)if(n.hasOwnProperty(D)&&(a=n[D],a!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:De(e,t,D,a,n,null)}return;default:if($r(t)){for(U in n)n.hasOwnProperty(U)&&(a=n[U],a!==void 0&&ks(e,t,U,a,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(a=n[v],a!=null&&De(e,t,v,a,n,null))}function c0(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,d=null,v=null,S=null,D=null,U=null;for(R in n){var G=n[R];if(n.hasOwnProperty(R)&&G!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":S=G;default:a.hasOwnProperty(R)||De(e,t,R,null,a,G)}}for(var H in a){var R=a[H];if(G=n[H],a.hasOwnProperty(H)&&(R!=null||G!=null))switch(H){case"type":u=R;break;case"name":o=R;break;case"checked":D=R;break;case"defaultChecked":U=R;break;case"value":d=R;break;case"defaultValue":v=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,t));break;default:R!==G&&De(e,t,H,R,a,G)}}Jr(e,d,v,S,D,U,u,o);return;case"select":R=d=v=H=null;for(u in n)if(S=n[u],n.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":R=S;default:a.hasOwnProperty(u)||De(e,t,u,null,a,S)}for(o in a)if(u=a[o],S=n[o],a.hasOwnProperty(o)&&(u!=null||S!=null))switch(o){case"value":H=u;break;case"defaultValue":v=u;break;case"multiple":d=u;default:u!==S&&De(e,t,o,u,a,S)}t=v,n=d,a=R,H!=null?pa(e,!!n,H,!1):!!a!=!!n&&(t!=null?pa(e,!!n,t,!0):pa(e,!!n,n?[]:"",!1));return;case"textarea":R=H=null;for(v in n)if(o=n[v],n.hasOwnProperty(v)&&o!=null&&!a.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:De(e,t,v,null,a,o)}for(d in a)if(o=a[d],u=n[d],a.hasOwnProperty(d)&&(o!=null||u!=null))switch(d){case"value":H=o;break;case"defaultValue":R=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==u&&De(e,t,d,o,a,u)}Gu(e,H,R);return;case"option":for(var ee in n)H=n[ee],n.hasOwnProperty(ee)&&H!=null&&!a.hasOwnProperty(ee)&&(ee==="selected"?e.selected=!1:De(e,t,ee,null,a,H));for(S in a)H=a[S],R=n[S],a.hasOwnProperty(S)&&H!==R&&(H!=null||R!=null)&&(S==="selected"?e.selected=H&&typeof H!="function"&&typeof H!="symbol":De(e,t,S,H,a,R));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)H=n[oe],n.hasOwnProperty(oe)&&H!=null&&!a.hasOwnProperty(oe)&&De(e,t,oe,null,a,H);for(D in a)if(H=a[D],R=n[D],a.hasOwnProperty(D)&&H!==R&&(H!=null||R!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,t));break;default:De(e,t,D,H,a,R)}return;default:if($r(t)){for(var we in n)H=n[we],n.hasOwnProperty(we)&&H!==void 0&&!a.hasOwnProperty(we)&&ks(e,t,we,void 0,a,H);for(U in a)H=a[U],R=n[U],!a.hasOwnProperty(U)||H===R||H===void 0&&R===void 0||ks(e,t,U,H,a,R);return}}for(var _ in n)H=n[_],n.hasOwnProperty(_)&&H!=null&&!a.hasOwnProperty(_)&&De(e,t,_,null,a,H);for(G in a)H=a[G],R=n[G],!a.hasOwnProperty(G)||H===R||H==null&&R==null||De(e,t,G,H,a,R)}function Zd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function f0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var o=n[a],u=o.transferSize,d=o.initiatorType,v=o.duration;if(u&&v&&Zd(d)){for(d=0,v=o.responseEnd,a+=1;a<n.length;a++){var S=n[a],D=S.startTime;if(D>v)break;var U=S.transferSize,G=S.initiatorType;U&&Zd(G)&&(S=S.responseEnd,d+=U*(S<v?1:(v-D)/(S-D)))}if(--a,t+=8*(u+d)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Us=null,qs=null;function ar(e){return e.nodeType===9?e:e.ownerDocument}function Kd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function js(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gs=null;function d0(){var e=window.event;return e&&e.type==="popstate"?e===Gs?!1:(Gs=e,!0):(Gs=null,!1)}var Pd=typeof setTimeout=="function"?setTimeout:void 0,p0=typeof clearTimeout=="function"?clearTimeout:void 0,$d=typeof Promise=="function"?Promise:void 0,h0=typeof queueMicrotask=="function"?queueMicrotask:typeof $d<"u"?function(e){return $d.resolve(null).then(e).catch(m0)}:Pd;function m0(e){setTimeout(function(){throw e})}function Rn(e){return e==="head"}function Fd(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(o),Qa(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Ll(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ll(n);for(var u=n.firstChild;u;){var d=u.nextSibling,v=u.nodeName;u[Ia]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=d}}else n==="body"&&Ll(e.ownerDocument.body);n=o}while(n);Qa(t)}function Wd(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Ys(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ys(n),Zr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function v0(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ia])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ht(e.nextSibling),e===null)break}return null}function g0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ht(e.nextSibling),e===null))return null;return e}function Id(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ht(e.nextSibling),e===null))return null;return e}function Vs(e){return e.data==="$?"||e.data==="$~"}function Xs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function b0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qs=null;function ep(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ht(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function tp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function np(e,t,n){switch(t=ar(n),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ll(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Zr(e)}var Rt=new Map,ap=new Set;function lr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var cn=Y.d;Y.d={f:y0,r:S0,D:x0,C:T0,L:O0,m:E0,X:M0,S:z0,M:A0};function y0(){var e=cn.f(),t=Pi();return e||t}function S0(e){var t=ca(e);t!==null&&t.tag===5&&t.type==="form"?Sf(t):cn.r(e)}var Ya=typeof document>"u"?null:document;function lp(e,t,n){var a=Ya;if(a&&typeof t=="string"&&t){var o=Mt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),ap.has(o)||(ap.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),tt(t,"link",e),Pe(t),a.head.appendChild(t)))}}function x0(e){cn.D(e),lp("dns-prefetch",e,null)}function T0(e,t){cn.C(e,t),lp("preconnect",e,t)}function O0(e,t,n){cn.L(e,t,n);var a=Ya;if(a&&e&&t){var o='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Mt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Mt(n.imageSizes)+'"]')):o+='[href="'+Mt(e)+'"]';var u=o;switch(t){case"style":u=Va(e);break;case"script":u=Xa(e)}Rt.has(u)||(e=g({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Rt.set(u,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(Bl(u))||t==="script"&&a.querySelector(kl(u))||(t=a.createElement("link"),tt(t,"link",e),Pe(t),a.head.appendChild(t)))}}function E0(e,t){cn.m(e,t);var n=Ya;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Mt(a)+'"][href="'+Mt(e)+'"]',u=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Xa(e)}if(!Rt.has(u)&&(e=g({rel:"modulepreload",href:e},t),Rt.set(u,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(kl(u)))return}a=n.createElement("link"),tt(a,"link",e),Pe(a),n.head.appendChild(a)}}}function z0(e,t,n){cn.S(e,t,n);var a=Ya;if(a&&e){var o=fa(a).hoistableStyles,u=Va(e);t=t||"default";var d=o.get(u);if(!d){var v={loading:0,preload:null};if(d=a.querySelector(Bl(u)))v.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Rt.get(u))&&Zs(e,n);var S=d=a.createElement("link");Pe(S),tt(S,"link",e),S._p=new Promise(function(D,U){S.onload=D,S.onerror=U}),S.addEventListener("load",function(){v.loading|=1}),S.addEventListener("error",function(){v.loading|=2}),v.loading|=4,ir(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:v},o.set(u,d)}}}function M0(e,t){cn.X(e,t);var n=Ya;if(n&&e){var a=fa(n).hoistableScripts,o=Xa(e),u=a.get(o);u||(u=n.querySelector(kl(o)),u||(e=g({src:e,async:!0},t),(t=Rt.get(o))&&Ks(e,t),u=n.createElement("script"),Pe(u),tt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(o,u))}}function A0(e,t){cn.M(e,t);var n=Ya;if(n&&e){var a=fa(n).hoistableScripts,o=Xa(e),u=a.get(o);u||(u=n.querySelector(kl(o)),u||(e=g({src:e,async:!0,type:"module"},t),(t=Rt.get(o))&&Ks(e,t),u=n.createElement("script"),Pe(u),tt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(o,u))}}function ip(e,t,n,a){var o=(o=ve.current)?lr(o):null;if(!o)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Va(n.href),n=fa(o).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Va(n.href);var u=fa(o).hoistableStyles,d=u.get(e);if(d||(o=o.ownerDocument||o,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=o.querySelector(Bl(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Rt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Rt.set(e,n),u||_0(o,e,n,d.state))),t&&a===null)throw Error(r(528,""));return d}if(t&&a!==null)throw Error(r(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Xa(n),n=fa(o).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Va(e){return'href="'+Mt(e)+'"'}function Bl(e){return'link[rel="stylesheet"]['+e+"]"}function rp(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function _0(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),tt(t,"link",n),Pe(t),e.head.appendChild(t))}function Xa(e){return'[src="'+Mt(e)+'"]'}function kl(e){return"script[async]"+e}function op(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Mt(n.href)+'"]');if(a)return t.instance=a,Pe(a),a;var o=g({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Pe(a),tt(a,"style",o),ir(a,n.precedence,e),t.instance=a;case"stylesheet":o=Va(n.href);var u=e.querySelector(Bl(o));if(u)return t.state.loading|=4,t.instance=u,Pe(u),u;a=rp(n),(o=Rt.get(o))&&Zs(a,o),u=(e.ownerDocument||e).createElement("link"),Pe(u);var d=u;return d._p=new Promise(function(v,S){d.onload=v,d.onerror=S}),tt(u,"link",a),t.state.loading|=4,ir(u,n.precedence,e),t.instance=u;case"script":return u=Xa(n.src),(o=e.querySelector(kl(u)))?(t.instance=o,Pe(o),o):(a=n,(o=Rt.get(u))&&(a=g({},n),Ks(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),Pe(o),tt(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ir(a,n.precedence,e));return t.instance}function ir(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,u=o,d=0;d<a.length;d++){var v=a[d];if(v.dataset.precedence===t)u=v;else if(u!==o)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Zs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ks(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var rr=null;function sp(e,t,n){if(rr===null){var a=new Map,o=rr=new Map;o.set(n,a)}else o=rr,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var u=n[o];if(!(u[Ia]||u[Fe]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var d=u.getAttribute(t)||"";d=e+d;var v=a.get(d);v?v.push(u):a.set(d,[u])}}return a}function up(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function C0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function cp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function D0(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=Va(a.href),u=t.querySelector(Bl(o));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=or.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,Pe(u);return}u=t.ownerDocument||t,a=rp(a),(o=Rt.get(o))&&Zs(a,o),u=u.createElement("link"),Pe(u);var d=u;d._p=new Promise(function(v,S){d.onload=v,d.onerror=S}),tt(u,"link",a),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=or.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Js=0;function w0(e,t){return e.stylesheets&&e.count===0&&ur(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&ur(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Js===0&&(Js=62500*f0());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ur(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Js?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function or(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ur(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sr=null;function ur(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sr=new Map,t.forEach(N0,e),sr=null,or.call(e))}function N0(e,t){if(!(t.state.loading&4)){var n=sr.get(e);if(n)var a=n.get(null);else{n=new Map,sr.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var d=o[u];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}o=t.instance,d=o.getAttribute("data-precedence"),u=n.get(d)||a,u===a&&n.set(null,o),n.set(d,o),this.count++,a=or.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),u?u.parentNode.insertBefore(o,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Ul={$$typeof:w,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function H0(e,t,n,a,o,u,d,v,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yr(0),this.hiddenUpdates=Yr(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function fp(e,t,n,a,o,u,d,v,S,D,U,G){return e=new H0(e,t,n,d,S,D,U,G,v),t=1,u===!0&&(t|=24),u=gt(3,null,null,t),e.current=u,u.stateNode=e,t=Ao(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:n,cache:t},wo(u),e}function dp(e){return e?(e=xa,e):xa}function pp(e,t,n,a,o,u){o=dp(o),a.context===null?a.context=o:a.pendingContext=o,a=On(t),a.payload={element:n},u=u===void 0?null:u,u!==null&&(a.callback=u),n=En(e,a,t),n!==null&&(dt(n,e,t),vl(n,e,t))}function hp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ps(e,t){hp(e,t),(e=e.alternate)&&hp(e,t)}function mp(e){if(e.tag===13||e.tag===31){var t=Jn(e,67108864);t!==null&&dt(t,e,67108864),Ps(e,67108864)}}function vp(e){if(e.tag===13||e.tag===31){var t=Tt();t=Vr(t);var n=Jn(e,t);n!==null&&dt(n,e,t),Ps(e,t)}}var cr=!0;function R0(e,t,n,a){var o=B.T;B.T=null;var u=Y.p;try{Y.p=2,$s(e,t,n,a)}finally{Y.p=u,B.T=o}}function L0(e,t,n,a){var o=B.T;B.T=null;var u=Y.p;try{Y.p=8,$s(e,t,n,a)}finally{Y.p=u,B.T=o}}function $s(e,t,n,a){if(cr){var o=Fs(a);if(o===null)Bs(e,t,a,fr,n),bp(e,a);else if(k0(o,e,t,n,a))a.stopPropagation();else if(bp(e,a),t&4&&-1<B0.indexOf(e)){for(;o!==null;){var u=ca(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var d=Vn(u.pendingLanes);if(d!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;d;){var S=1<<31-mt(d);v.entanglements[1]|=S,d&=~S}Vt(u),(ze&6)===0&&(Ki=pt()+500,Nl(0))}}break;case 31:case 13:v=Jn(u,2),v!==null&&dt(v,u,2),Pi(),Ps(u,2)}if(u=Fs(a),u===null&&Bs(e,t,a,fr,n),u===o)break;o=u}o!==null&&a.stopPropagation()}else Bs(e,t,a,null,n)}}function Fs(e){return e=Wr(e),Ws(e)}var fr=null;function Ws(e){if(fr=null,e=ua(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===31){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fr=e,null}function gp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xh()){case Eu:return 2;case zu:return 8;case ei:case Th:return 32;case Mu:return 268435456;default:return 32}default:return 32}}var Is=!1,Ln=null,Bn=null,kn=null,ql=new Map,jl=new Map,Un=[],B0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bp(e,t){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":ql.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jl.delete(t.pointerId)}}function Gl(e,t,n,a,o,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:u,targetContainers:[o]},t!==null&&(t=ca(t),t!==null&&mp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function k0(e,t,n,a,o){switch(t){case"focusin":return Ln=Gl(Ln,e,t,n,a,o),!0;case"dragenter":return Bn=Gl(Bn,e,t,n,a,o),!0;case"mouseover":return kn=Gl(kn,e,t,n,a,o),!0;case"pointerover":var u=o.pointerId;return ql.set(u,Gl(ql.get(u)||null,e,t,n,a,o)),!0;case"gotpointercapture":return u=o.pointerId,jl.set(u,Gl(jl.get(u)||null,e,t,n,a,o)),!0}return!1}function yp(e){var t=ua(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,Nu(e.priority,function(){vp(n)});return}}else if(t===31){if(t=b(n),t!==null){e.blockedOn=t,Nu(e.priority,function(){vp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fs(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Fr=a,n.target.dispatchEvent(a),Fr=null}else return t=ca(n),t!==null&&mp(t),e.blockedOn=n,!1;t.shift()}return!0}function Sp(e,t,n){dr(e)&&n.delete(t)}function U0(){Is=!1,Ln!==null&&dr(Ln)&&(Ln=null),Bn!==null&&dr(Bn)&&(Bn=null),kn!==null&&dr(kn)&&(kn=null),ql.forEach(Sp),jl.forEach(Sp)}function pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Is||(Is=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,U0)))}var hr=null;function xp(e){hr!==e&&(hr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){hr===e&&(hr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(Ws(a||n)===null)continue;break}var u=ca(n);u!==null&&(e.splice(t,3),t-=3,Fo(u,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function Qa(e){function t(S){return pr(S,e)}Ln!==null&&pr(Ln,e),Bn!==null&&pr(Bn,e),kn!==null&&pr(kn,e),ql.forEach(t),jl.forEach(t);for(var n=0;n<Un.length;n++){var a=Un[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)yp(n),n.blockedOn===null&&Un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],u=n[a+1],d=o[rt]||null;if(typeof u=="function")d||xp(n);else if(d){var v=null;if(u&&u.hasAttribute("formAction")){if(o=u,d=u[rt]||null)v=d.formAction;else if(Ws(o)!==null)continue}else v=d.action;typeof v=="function"?n[a+1]=v:(n.splice(a,3),a-=3),xp(n)}}}function Tp(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(d){return o=d})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function eu(e){this._internalRoot=e}mr.prototype.render=eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var n=t.current,a=Tt();pp(n,a,e,t,null,null)},mr.prototype.unmount=eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pp(e.current,2,null,e,null,null),Pi(),t[sa]=null}};function mr(e){this._internalRoot=e}mr.prototype.unstable_scheduleHydration=function(e){if(e){var t=wu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&yp(e)}};var Op=s.version;if(Op!=="19.2.3")throw Error(r(527,Op,"19.2.3"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=h(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var q0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{$a=vr.inject(q0),ht=vr}catch{}}return Vl.createRoot=function(e,t){if(!c(e))throw Error(r(299));var n=!1,a="",o=Df,u=wf,d=Nf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=fp(e,1,!1,null,null,n,a,null,o,u,d,Tp),e[sa]=t.current,Ls(e),new eu(t)},Vl.hydrateRoot=function(e,t,n){if(!c(e))throw Error(r(299));var a=!1,o="",u=Df,d=wf,v=Nf,S=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=fp(e,1,!0,t,n??null,a,o,S,u,d,v,Tp),t.context=dp(null),n=t.current,a=Tt(),a=Vr(a),o=On(a),o.callback=null,En(n,o,a),n=a,t.current.lanes=n,Wa(t,n),Vt(t),e[sa]=t.current,Ls(e),new mr(t)},Vl.version="19.2.3",Vl}var Hp;function $0(){if(Hp)return au.exports;Hp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),au.exports=P0(),au.exports}var F0=$0();function Je(l,s){s===void 0&&(s={});var i=s.insertAt;if(l&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",i==="top"&&r.firstChild?r.insertBefore(c,r.firstChild):r.appendChild(c),c.styleSheet?c.styleSheet.cssText=l:c.appendChild(document.createTextNode(l))}}Je(`.react-loading-indicator-normalize,
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
}`);var ye=function(){return ye=Object.assign||function(l){for(var s,i=1,r=arguments.length;i<r;i++)for(var c in s=arguments[i])Object.prototype.hasOwnProperty.call(s,c)&&(l[c]=s[c]);return l},ye.apply(this,arguments)};function Mr(l){return Mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Mr(l)}var W0=/^\s+/,I0=/\s+$/;function ae(l,s){if(s=s||{},(l=l||"")instanceof ae)return l;if(!(this instanceof ae))return new ae(l,s);var i=(function(r){var c={r:0,g:0,b:0},f=1,m=null,b=null,p=null,h=!1,y=!1;typeof r=="string"&&(r=(function(A){A=A.replace(W0,"").replace(I0,"").toLowerCase();var z,k=!1;if(mu[A])A=mu[A],k=!0;else if(A=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(z=Ut.rgb.exec(A))?{r:z[1],g:z[2],b:z[3]}:(z=Ut.rgba.exec(A))?{r:z[1],g:z[2],b:z[3],a:z[4]}:(z=Ut.hsl.exec(A))?{h:z[1],s:z[2],l:z[3]}:(z=Ut.hsla.exec(A))?{h:z[1],s:z[2],l:z[3],a:z[4]}:(z=Ut.hsv.exec(A))?{h:z[1],s:z[2],v:z[3]}:(z=Ut.hsva.exec(A))?{h:z[1],s:z[2],v:z[3],a:z[4]}:(z=Ut.hex8.exec(A))?{r:Ot(z[1]),g:Ot(z[2]),b:Ot(z[3]),a:qp(z[4]),format:k?"name":"hex8"}:(z=Ut.hex6.exec(A))?{r:Ot(z[1]),g:Ot(z[2]),b:Ot(z[3]),format:k?"name":"hex"}:(z=Ut.hex4.exec(A))?{r:Ot(z[1]+""+z[1]),g:Ot(z[2]+""+z[2]),b:Ot(z[3]+""+z[3]),a:qp(z[4]+""+z[4]),format:k?"name":"hex8"}:(z=Ut.hex3.exec(A))?{r:Ot(z[1]+""+z[1]),g:Ot(z[2]+""+z[2]),b:Ot(z[3]+""+z[3]),format:k?"name":"hex"}:!1})(r)),Mr(r)=="object"&&(fn(r.r)&&fn(r.g)&&fn(r.b)?(g=r.r,N=r.g,O=r.b,c={r:255*ke(g,255),g:255*ke(N,255),b:255*ke(O,255)},h=!0,y=String(r.r).substr(-1)==="%"?"prgb":"rgb"):fn(r.h)&&fn(r.s)&&fn(r.v)?(m=Zl(r.s),b=Zl(r.v),c=(function(A,z,k){A=6*ke(A,360),z=ke(z,100),k=ke(k,100);var E=Math.floor(A),M=A-E,w=k*(1-z),X=k*(1-M*z),Q=k*(1-(1-M)*z),F=E%6,Z=[k,X,w,w,Q,k][F],L=[Q,k,k,X,w,w][F],I=[w,w,Q,k,k,X][F];return{r:255*Z,g:255*L,b:255*I}})(r.h,m,b),h=!0,y="hsv"):fn(r.h)&&fn(r.s)&&fn(r.l)&&(m=Zl(r.s),p=Zl(r.l),c=(function(A,z,k){var E,M,w;function X(Z,L,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Z+6*(L-Z)*I:I<.5?L:I<2/3?Z+(L-Z)*(2/3-I)*6:Z}if(A=ke(A,360),z=ke(z,100),k=ke(k,100),z===0)E=M=w=k;else{var Q=k<.5?k*(1+z):k+z-k*z,F=2*k-Q;E=X(F,Q,A+1/3),M=X(F,Q,A),w=X(F,Q,A-1/3)}return{r:255*E,g:255*M,b:255*w}})(r.h,m,p),h=!0,y="hsl"),r.hasOwnProperty("a")&&(f=r.a));var g,N,O;return f=Jp(f),{ok:h,format:r.format||y,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:f}})(l);this._originalInput=l,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=s.format||i.format,this._gradientType=s.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function Rp(l,s,i){l=ke(l,255),s=ke(s,255),i=ke(i,255);var r,c,f=Math.max(l,s,i),m=Math.min(l,s,i),b=(f+m)/2;if(f==m)r=c=0;else{var p=f-m;switch(c=b>.5?p/(2-f-m):p/(f+m),f){case l:r=(s-i)/p+(s<i?6:0);break;case s:r=(i-l)/p+2;break;case i:r=(l-s)/p+4}r/=6}return{h:r,s:c,l:b}}function Lp(l,s,i){l=ke(l,255),s=ke(s,255),i=ke(i,255);var r,c,f=Math.max(l,s,i),m=Math.min(l,s,i),b=f,p=f-m;if(c=f===0?0:p/f,f==m)r=0;else{switch(f){case l:r=(s-i)/p+(s<i?6:0);break;case s:r=(i-l)/p+2;break;case i:r=(l-s)/p+4}r/=6}return{h:r,s:c,v:b}}function Bp(l,s,i,r){var c=[qt(Math.round(l).toString(16)),qt(Math.round(s).toString(16)),qt(Math.round(i).toString(16))];return r&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function kp(l,s,i,r){return[qt(Pp(r)),qt(Math.round(l).toString(16)),qt(Math.round(s).toString(16)),qt(Math.round(i).toString(16))].join("")}function ev(l,s){s=s===0?0:s||10;var i=ae(l).toHsl();return i.s-=s/100,i.s=Lr(i.s),ae(i)}function tv(l,s){s=s===0?0:s||10;var i=ae(l).toHsl();return i.s+=s/100,i.s=Lr(i.s),ae(i)}function nv(l){return ae(l).desaturate(100)}function av(l,s){s=s===0?0:s||10;var i=ae(l).toHsl();return i.l+=s/100,i.l=Lr(i.l),ae(i)}function lv(l,s){s=s===0?0:s||10;var i=ae(l).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-s/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-s/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-s/100*255))),ae(i)}function iv(l,s){s=s===0?0:s||10;var i=ae(l).toHsl();return i.l-=s/100,i.l=Lr(i.l),ae(i)}function rv(l,s){var i=ae(l).toHsl(),r=(i.h+s)%360;return i.h=r<0?360+r:r,ae(i)}function ov(l){var s=ae(l).toHsl();return s.h=(s.h+180)%360,ae(s)}function Up(l,s){if(isNaN(s)||s<=0)throw new Error("Argument to polyad must be a positive number");for(var i=ae(l).toHsl(),r=[ae(l)],c=360/s,f=1;f<s;f++)r.push(ae({h:(i.h+f*c)%360,s:i.s,l:i.l}));return r}function sv(l){var s=ae(l).toHsl(),i=s.h;return[ae(l),ae({h:(i+72)%360,s:s.s,l:s.l}),ae({h:(i+216)%360,s:s.s,l:s.l})]}function uv(l,s,i){s=s||6,i=i||30;var r=ae(l).toHsl(),c=360/i,f=[ae(l)];for(r.h=(r.h-(c*s>>1)+720)%360;--s;)r.h=(r.h+c)%360,f.push(ae(r));return f}function cv(l,s){s=s||6;for(var i=ae(l).toHsv(),r=i.h,c=i.s,f=i.v,m=[],b=1/s;s--;)m.push(ae({h:r,s:c,v:f})),f=(f+b)%1;return m}ae.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var l=this.toRgb();return(299*l.r+587*l.g+114*l.b)/1e3},getLuminance:function(){var l,s,i,r=this.toRgb();return l=r.r/255,s=r.g/255,i=r.b/255,.2126*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))+.7152*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(l){return this._a=Jp(l),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var l=Lp(this._r,this._g,this._b);return{h:360*l.h,s:l.s,v:l.v,a:this._a}},toHsvString:function(){var l=Lp(this._r,this._g,this._b),s=Math.round(360*l.h),i=Math.round(100*l.s),r=Math.round(100*l.v);return this._a==1?"hsv("+s+", "+i+"%, "+r+"%)":"hsva("+s+", "+i+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var l=Rp(this._r,this._g,this._b);return{h:360*l.h,s:l.s,l:l.l,a:this._a}},toHslString:function(){var l=Rp(this._r,this._g,this._b),s=Math.round(360*l.h),i=Math.round(100*l.s),r=Math.round(100*l.l);return this._a==1?"hsl("+s+", "+i+"%, "+r+"%)":"hsla("+s+", "+i+"%, "+r+"%, "+this._roundA+")"},toHex:function(l){return Bp(this._r,this._g,this._b,l)},toHexString:function(l){return"#"+this.toHex(l)},toHex8:function(l){return(function(s,i,r,c,f){var m=[qt(Math.round(s).toString(16)),qt(Math.round(i).toString(16)),qt(Math.round(r).toString(16)),qt(Pp(c))];return f&&m[0].charAt(0)==m[0].charAt(1)&&m[1].charAt(0)==m[1].charAt(1)&&m[2].charAt(0)==m[2].charAt(1)&&m[3].charAt(0)==m[3].charAt(1)?m[0].charAt(0)+m[1].charAt(0)+m[2].charAt(0)+m[3].charAt(0):m.join("")})(this._r,this._g,this._b,this._a,l)},toHex8String:function(l){return"#"+this.toHex8(l)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*ke(this._r,255))+"%",g:Math.round(100*ke(this._g,255))+"%",b:Math.round(100*ke(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*ke(this._r,255))+"%, "+Math.round(100*ke(this._g,255))+"%, "+Math.round(100*ke(this._b,255))+"%)":"rgba("+Math.round(100*ke(this._r,255))+"%, "+Math.round(100*ke(this._g,255))+"%, "+Math.round(100*ke(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(fv[Bp(this._r,this._g,this._b,!0)]||!1)},toFilter:function(l){var s="#"+kp(this._r,this._g,this._b,this._a),i=s,r=this._gradientType?"GradientType = 1, ":"";if(l){var c=ae(l);i="#"+kp(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+s+",endColorstr="+i+")"},toString:function(l){var s=!!l;l=l||this._format;var i=!1,r=this._a<1&&this._a>=0;return s||!r||l!=="hex"&&l!=="hex6"&&l!=="hex3"&&l!=="hex4"&&l!=="hex8"&&l!=="name"?(l==="rgb"&&(i=this.toRgbString()),l==="prgb"&&(i=this.toPercentageRgbString()),l!=="hex"&&l!=="hex6"||(i=this.toHexString()),l==="hex3"&&(i=this.toHexString(!0)),l==="hex4"&&(i=this.toHex8String(!0)),l==="hex8"&&(i=this.toHex8String()),l==="name"&&(i=this.toName()),l==="hsl"&&(i=this.toHslString()),l==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):l==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ae(this.toString())},_applyModification:function(l,s){var i=l.apply(null,[this].concat([].slice.call(s)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(av,arguments)},brighten:function(){return this._applyModification(lv,arguments)},darken:function(){return this._applyModification(iv,arguments)},desaturate:function(){return this._applyModification(ev,arguments)},saturate:function(){return this._applyModification(tv,arguments)},greyscale:function(){return this._applyModification(nv,arguments)},spin:function(){return this._applyModification(rv,arguments)},_applyCombination:function(l,s){return l.apply(null,[this].concat([].slice.call(s)))},analogous:function(){return this._applyCombination(uv,arguments)},complement:function(){return this._applyCombination(ov,arguments)},monochromatic:function(){return this._applyCombination(cv,arguments)},splitcomplement:function(){return this._applyCombination(sv,arguments)},triad:function(){return this._applyCombination(Up,[3])},tetrad:function(){return this._applyCombination(Up,[4])}},ae.fromRatio=function(l,s){if(Mr(l)=="object"){var i={};for(var r in l)l.hasOwnProperty(r)&&(i[r]=r==="a"?l[r]:Zl(l[r]));l=i}return ae(l,s)},ae.equals=function(l,s){return!(!l||!s)&&ae(l).toRgbString()==ae(s).toRgbString()},ae.random=function(){return ae.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ae.mix=function(l,s,i){i=i===0?0:i||50;var r=ae(l).toRgb(),c=ae(s).toRgb(),f=i/100;return ae({r:(c.r-r.r)*f+r.r,g:(c.g-r.g)*f+r.g,b:(c.b-r.b)*f+r.b,a:(c.a-r.a)*f+r.a})},ae.readability=function(l,s){var i=ae(l),r=ae(s);return(Math.max(i.getLuminance(),r.getLuminance())+.05)/(Math.min(i.getLuminance(),r.getLuminance())+.05)},ae.isReadable=function(l,s,i){var r,c,f=ae.readability(l,s);switch(c=!1,(r=(function(m){var b,p;return b=((m=m||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(m.size||"small").toLowerCase(),b!=="AA"&&b!=="AAA"&&(b="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:b,size:p}})(i)).level+r.size){case"AAsmall":case"AAAlarge":c=f>=4.5;break;case"AAlarge":c=f>=3;break;case"AAAsmall":c=f>=7}return c},ae.mostReadable=function(l,s,i){var r,c,f,m,b=null,p=0;c=(i=i||{}).includeFallbackColors,f=i.level,m=i.size;for(var h=0;h<s.length;h++)(r=ae.readability(l,s[h]))>p&&(p=r,b=ae(s[h]));return ae.isReadable(l,b,{level:f,size:m})||!c?b:(i.includeFallbackColors=!1,ae.mostReadable(l,["#fff","#000"],i))};var mu=ae.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},fv=ae.hexNames=(function(l){var s={};for(var i in l)l.hasOwnProperty(i)&&(s[l[i]]=i);return s})(mu);function Jp(l){return l=parseFloat(l),(isNaN(l)||l<0||l>1)&&(l=1),l}function ke(l,s){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(l)&&(l="100%");var i=(function(r){return typeof r=="string"&&r.indexOf("%")!=-1})(l);return l=Math.min(s,Math.max(0,parseFloat(l))),i&&(l=parseInt(l*s,10)/100),Math.abs(l-s)<1e-6?1:l%s/parseFloat(s)}function Lr(l){return Math.min(1,Math.max(0,l))}function Ot(l){return parseInt(l,16)}function qt(l){return l.length==1?"0"+l:""+l}function Zl(l){return l<=1&&(l=100*l+"%"),l}function Pp(l){return Math.round(255*parseFloat(l)).toString(16)}function qp(l){return Ot(l)/255}var jn,gr,br,Ut=(gr="[\\s|\\(]+("+(jn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+jn+")[,|\\s]+("+jn+")\\s*\\)?",br="[\\s|\\(]+("+jn+")[,|\\s]+("+jn+")[,|\\s]+("+jn+")[,|\\s]+("+jn+")\\s*\\)?",{CSS_UNIT:new RegExp(jn),rgb:new RegExp("rgb"+gr),rgba:new RegExp("rgba"+br),hsl:new RegExp("hsl"+gr),hsla:new RegExp("hsla"+br),hsv:new RegExp("hsv"+gr),hsva:new RegExp("hsva"+br),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function fn(l){return!!Ut.CSS_UNIT.exec(l)}var Jl=function(l,s){var i=(typeof l=="string"?parseInt(l):l)||0;if(i>=-5&&i<=5){var r=i,c=parseFloat(s),f=c+r*(c/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:s}},Pl=function(l,s){var i=l||{},r="";switch(s){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var c={};if(i.fontSize){var f=i.fontSize;c=(function(m,b){var p={};for(var h in m)Object.prototype.hasOwnProperty.call(m,h)&&b.indexOf(h)<0&&(p[h]=m[h]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(h=Object.getOwnPropertySymbols(m);y<h.length;y++)b.indexOf(h[y])<0&&Object.prototype.propertyIsEnumerable.call(m,h[y])&&(p[h[y]]=m[h[y]])}return p})(i,["fontSize"]),r=f}return{fontSize:r,styles:c}},dv={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},$l=function(l){var s=l.className,i=l.text,r=l.textColor,c=l.staticText,f=l.style;return i?ie.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(s||"").trim(),style:ye(ye(ye({},c&&dv),r&&{color:r,mixBlendMode:"unset"}),f&&f)},typeof i=="string"&&i.length?i:"loading"):null},hn="rgb(50, 205, 50)";function Fl(l,s){if(s===void 0&&(s=0),l.length===0)throw new Error("Input array cannot be empty!");var i=[];return(function r(c,f){return f===void 0&&(f=0),i.push.apply(i,c),i.length<f&&r(i,f),i.slice(0,f)})(l,s)}Je(`.atom-rli-bounding-box {
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
}`);ae(hn).toRgb();Array.from({length:4},(function(l,s){return"--atom-phase".concat(s+1,"-rgb")}));Je(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},(function(l,s){return"--commet-phase".concat(s+1,"-color")}));Je(`.OP-annulus-rli-bounding-box {
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
}`);var yr=Array.from({length:4},(function(l,s){return"--OP-annulus-phase".concat(s+1,"-color")})),pv=function(l){var s,i=Pl(l?.style,l?.size),r=i.styles,c=i.fontSize,f=l?.easing,m=Jl(l?.speedPlus,"1.5s").animationPeriod,b=(function(h){var y={},g=yr.length;if(h instanceof Array){for(var N=Fl(h,g),O=0;O<N.length&&!(O>=4);O++)y[yr[O]]=N[O];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var A=0;A<g;A++)y[yr[A]]=h}catch(z){for(z instanceof Error?console.warn("[".concat(z.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),A=0;A<g;A++)y[yr[A]]=hn}return y})((s=l?.color)!==null&&s!==void 0?s:""),p=l?.dense?4.3:2.9;return ie.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:ye(ye(ye(ye(ye({},c&&{fontSize:c}),m&&{"--rli-animation-duration":m}),f&&{"--rli-animation-function":f}),b),r),role:"status","aria-live":"polite","aria-label":"Loading"},ie.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},ie.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},ie.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:p,strokeMiterlimit:"10"})),ie.createElement($l,{className:"OP-annulus-text",text:l?.text,textColor:l?.textColor})))};function ou(l){return l&&l.Math===Math&&l}Je(`.OP-dotted-rli-bounding-box {
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
}`);var Za=ou(typeof window=="object"&&window)||ou(typeof self=="object"&&self)||ou(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();function $p(){var l,s;return!((l=Za?.crypto)===null||l===void 0)&&l.randomUUID?Za.crypto.randomUUID():!((s=Za?.btoa)===null||s===void 0)&&s.name?Za.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var Sr=Array.from({length:4},(function(l,s){return"--OP-dotted-phase".concat(s+1,"-color")})),hv=function(l){var s,i=Pl(l?.style,l?.size),r=i.styles,c=i.fontSize,f=l?.easing,m=Jl(l?.speedPlus,"1.2s").animationPeriod,b=(function(h){var y={},g=Sr.length;if(h instanceof Array){for(var N=Fl(h,g),O=0;O<N.length&&!(O>=4);O++)y[Sr[O]]=N[O];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var A=0;A<g;A++)y[Sr[A]]=h}catch(z){for(z instanceof Error?console.warn("[".concat(z.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),A=0;A<g;A++)y[Sr[A]]=hn}return y})((s=l?.color)!==null&&s!==void 0?s:""),p=l?.dense?16:12;return ie.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:ye(ye(ye(ye(ye({},c&&{fontSize:c}),m&&{"--rli-animation-duration":m}),f&&{"--rli-animation-function":f}),b),r),role:"status","aria-live":"polite","aria-label":"Loading"},ie.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:p}).map((function(h,y){var g=(function(A,z,k){if(z===16){var E=360*A/z,M=z-A,w=Number.parseFloat(k)/z*M*-1;return{transform:"rotate(".concat(E,"deg)"),animationDelay:"".concat(w,"s")}}return{transform:"",animationDelay:""}})(y,p,m),N=g.animationDelay,O=g.transform;return ie.createElement("span",{key:$p(),className:"rli-d-i-b dot-shape-holder",style:O?{transform:O}:void 0},ie.createElement("span",{className:"dot",style:N?{animationDelay:N}:void 0}))})),ie.createElement($l,{className:"OP-dotted-text",text:l?.text,textColor:l?.textColor})))};Je(`.OP-spokes-rli-bounding-box {
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
}`);var xr=Array.from({length:4},(function(l,s){return"--OP-spokes-phase".concat(s+1,"-color")})),mv=function(l){var s,i=Pl(l?.style,l?.size),r=i.styles,c=i.fontSize,f=l?.easing,m=Jl(l?.speedPlus,"1.2s").animationPeriod,b=(function(h){var y={},g=xr.length;if(h instanceof Array){for(var N=Fl(h,g),O=0;O<N.length&&!(O>=4);O++)y[xr[O]]=N[O];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var A=0;A<g;A++)y[xr[A]]=h}catch(z){for(z instanceof Error?console.warn("[".concat(z.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),A=0;A<g;A++)y[xr[A]]=hn}return y})((s=l?.color)!==null&&s!==void 0?s:""),p=l?.dense?16:12;return ie.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:ye(ye(ye(ye(ye({},c&&{fontSize:c}),m&&{"--rli-animation-duration":m}),f&&{"--rli-animation-function":f}),b),r),role:"status","aria-live":"polite","aria-label":"Loading"},ie.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:p},(function(h,y){return ie.createElement("span",{key:$p(),className:"rli-d-i-b spoke",style:vv(y,p,m)})}))),ie.createElement($l,{text:l?.text,textColor:l?.textColor}))};function vv(l,s,i){if(s===16){var r=s-l,c=Number.parseFloat(i)/s;return{transform:"rotate(".concat(360*l/s,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*c*-1,"s")}}}Je(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);var Tr=Array.from({length:4},(function(l,s){return"--OP-annulus-dual-sectors-phase".concat(s+1,"-color")})),gv=function(l){var s,i=Pl(l?.style,l?.size),r=i.styles,c=i.fontSize,f=l?.easing,m=Jl(l?.speedPlus,"1.2s").animationPeriod,b=(function(h){var y={},g=Tr.length;if(h instanceof Array){for(var N=Fl(h,g),O=0;O<N.length&&!(O>=4);O++)y[Tr[O]]=N[O];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var A=0;A<g;A++)y[Tr[A]]=h}catch(z){for(z instanceof Error?console.warn("[".concat(z.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),A=0;A<g;A++)y[Tr[A]]=hn}return y})((s=l?.color)!==null&&s!==void 0?s:""),p=l.dense?"0.45em":"";return ie.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:ye(ye(ye(ye(ye({},c&&{fontSize:c}),m&&{"--rli-animation-duration":m}),f&&{"--rli-animation-function":f}),b),r),role:"status","aria-live":"polite","aria-label":"Loading"},ie.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},ie.createElement("span",{className:"rli-d-i-b annulus-sectors",style:ye({},p&&{borderWidth:p})}),ie.createElement($l,{className:"OP-annulus-dual-sectors-text",text:l?.text,textColor:l?.textColor})))};Je(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);var Xl=Array.from({length:4},(function(l,s){return["--OP-annulus-track-phase".concat(s+1,"-color"),"--OP-annulus-sector-phase".concat(s+1,"-color")]})),Or=function(l){return l===void 0&&(l=1),.25*l},bv=function(l){var s,i=Pl(l?.style,l?.size),r=i.styles,c=i.fontSize,f=l?.easing,m=Jl(l?.speedPlus,"1s").animationPeriod,b=(function(h){var y={},g=Xl.length;if(h instanceof Array){for(var N=Fl(h,g),O=0;O<N.length&&!(O>=4);O++){var A=Xl[O];try{if(!(E=ae(N[O])).isValid())throw new Error("Invalid Color: ".concat(E.getOriginalInput()));var z=E.setAlpha(Or(E.getAlpha())).toRgbString(),k=N[O];y[A[0]]=z,y[A[1]]=k}catch{k=hn,z=(E=ae(hn)).setAlpha(Or(E.getAlpha())).toRgbString(),y[A[0]]=z,y[A[1]]=k}}return y}try{var E=ae(h);if(typeof h!="string")throw new Error("Color String expected");if(!E.isValid())throw new Error("Invalid Color: ".concat(E.getOriginalInput()));k=h,z=E.setAlpha(Or(E.getAlpha())).toRgbString();for(var M=0;M<g;M++)y[(A=Xl[M])[0]]=z,y[A[1]]=k}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),k=hn,z=(E=ae(hn)).setAlpha(Or(E.getAlpha())).toRgbString(),M=0;M<Xl.length;M++)y[(A=Xl[M])[0]]=z,y[A[1]]=k}return y})((s=l?.color)!==null&&s!==void 0?s:""),p=l.dense?"0.45em":"";return ie.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:ye(ye(ye(ye(ye({},c&&{fontSize:c}),m&&{"--rli-animation-duration":m}),f&&{"--rli-animation-function":f}),b),r),role:"status","aria-live":"polite","aria-label":"Loading"},ie.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},ie.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:ye({},p&&{borderWidth:p})}),ie.createElement($l,{className:"OP-annulus-sector-text",text:l?.text,textColor:l?.textColor})))},yv=function(l){var s=Object(l).variant,i=s===void 0?"disc":s;return i==="dotted"?ie.createElement(hv,ye({},l)):i==="spokes"?ie.createElement(mv,ye({},l)):i==="disc"?ie.createElement(pv,ye({},l)):i==="split-disc"?ie.createElement(gv,ye({},l)):i==="track-disc"?ie.createElement(bv,ye({},l)):null};Je(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},(function(l,s){return"--four-square-phase".concat(s+1,"-color")}));Je(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},(function(l,s){return"--mosaic-phase".concat(s+1,"-color")}));Je(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},(function(l,s){return"--riple-phase".concat(s+1,"-color")}));Je(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},(function(l,s){return"--TD-pulsate-phase".concat(s+1,"-color")}));Je(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},(function(l,s){return"--TD-brick-stack-phase".concat(s+1,"-color")}));Je(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},(function(l,s){return"--TD-bob-phase".concat(s+1,"-color")}));Je(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},(function(l,s){return"--TD-bounce-phase".concat(s+1,"-color")}));Je(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},(function(l,s){return"--shape-phase".concat(s+1,"-color")}));Je(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},(function(l,s){return"--trophySpin-phase".concat(s+1,"-color")}));Je(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},(function(l,s){return"--slab-phase".concat(s+1,"-color")}));Je(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},(function(l,s){return"--life-line-phase".concat(s+1,"-color")}));const Sv="/Sayt-kopiyasi/assets/NURIK_1-C1D5-K-N.png";var Fp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},jp=ie.createContext&&ie.createContext(Fp),xv=["attr","size","title"];function Tv(l,s){if(l==null)return{};var i=Ov(l,s),r,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(l);for(c=0;c<f.length;c++)r=f[c],!(s.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(l,r)&&(i[r]=l[r])}return i}function Ov(l,s){if(l==null)return{};var i={};for(var r in l)if(Object.prototype.hasOwnProperty.call(l,r)){if(s.indexOf(r)>=0)continue;i[r]=l[r]}return i}function Ar(){return Ar=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(l[r]=i[r])}return l},Ar.apply(this,arguments)}function Gp(l,s){var i=Object.keys(l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(l);s&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(l,c).enumerable})),i.push.apply(i,r)}return i}function _r(l){for(var s=1;s<arguments.length;s++){var i=arguments[s]!=null?arguments[s]:{};s%2?Gp(Object(i),!0).forEach(function(r){Ev(l,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(i)):Gp(Object(i)).forEach(function(r){Object.defineProperty(l,r,Object.getOwnPropertyDescriptor(i,r))})}return l}function Ev(l,s,i){return s=zv(s),s in l?Object.defineProperty(l,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):l[s]=i,l}function zv(l){var s=Mv(l,"string");return typeof s=="symbol"?s:s+""}function Mv(l,s){if(typeof l!="object"||!l)return l;var i=l[Symbol.toPrimitive];if(i!==void 0){var r=i.call(l,s);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(l)}function Wp(l){return l&&l.map((s,i)=>ie.createElement(s.tag,_r({key:i},s.attr),Wp(s.child)))}function Wl(l){return s=>ie.createElement(Av,Ar({attr:_r({},l.attr)},s),Wp(l.child))}function Av(l){var s=i=>{var{attr:r,size:c,title:f}=l,m=Tv(l,xv),b=c||i.size||"1em",p;return i.className&&(p=i.className),l.className&&(p=(p?p+" ":"")+l.className),ie.createElement("svg",Ar({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,m,{className:p,style:_r(_r({color:l.color||i.color},i.style),l.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),f&&ie.createElement("title",null,f),l.children)};return jp!==void 0?ie.createElement(jp.Consumer,null,i=>s(i)):s(Fp)}function _v(l){return Wl({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(l)}function Cv(l){return Wl({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(l)}function Dv(l){return Wl({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(l)}function wv(l){return Wl({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(l)}function Nv(l){return Wl({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(l)}const Hv=()=>ce.jsx("header",{className:"header fixed top-0 right-0 left-0 z-250 bg-orange-400",children:ce.jsx("div",{className:"contayner",children:ce.jsxs("nav",{className:"header__nav flex justify-between items-center px-10 w-full h-20 backdrop-blur-lg ",children:[ce.jsx("img",{src:Sv,alt:"",className:"header__img w-20 h-20"}),ce.jsxs("ul",{className:"header__list flex gap-7 text-white text-lg",children:[ce.jsx("li",{className:"header__item",children:ce.jsx("a",{className:"",href:"",children:"Ekskursiyalar"})}),ce.jsx("li",{className:"header__item",children:ce.jsx("a",{className:"",href:"",children:"Shahar"})}),ce.jsx("li",{className:"header__item",children:ce.jsx("a",{className:"",href:"",children:"Haqida"})}),ce.jsx("li",{className:"header__item",children:ce.jsx("a",{className:"",href:"",children:"Aloqaga chiqish"})})]}),ce.jsxs("div",{className:"header__box flex gap-5 text-white text-lg items-center",children:[ce.jsxs("div",{className:"header__icons flex gap-2",children:[ce.jsx("a",{className:"text-xl",href:"https://www.facebook.com/?locale=ru_RU",children:ce.jsx(_v,{})}),ce.jsx("a",{className:"text-xl",href:"https://x.com/?lang=ru",children:ce.jsx(wv,{})}),ce.jsx("a",{className:"text-xl",href:"https://www.instagram.com/",children:ce.jsx(Cv,{})}),ce.jsx("a",{className:"text-xl",href:"https://www.linkedin.com/",children:ce.jsx(Dv,{})}),ce.jsx("a",{className:"text-xl",href:"https://www.youtube.com/",children:ce.jsx(Nv,{})})]}),ce.jsxs("select",{name:"",id:" ",className:"bg-gray-400 rounded-md text-center",children:[ce.jsx("option",{value:"0",children:"Uzb"}),ce.jsx("option",{value:"1",children:"Рус"}),ce.jsx("option",{value:"2",children:"Eng"})]}),ce.jsx("button",{children:"🌑"})]})]})})});function Yp(l){return l!==null&&typeof l=="object"&&"constructor"in l&&l.constructor===Object}function Su(l={},s={}){const i=["__proto__","constructor","prototype"];Object.keys(s).filter(r=>i.indexOf(r)<0).forEach(r=>{typeof l[r]>"u"?l[r]=s[r]:Yp(s[r])&&Yp(l[r])&&Object.keys(s[r]).length>0&&Su(l[r],s[r])})}const Ip={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Qt(){const l=typeof document<"u"?document:{};return Su(l,Ip),l}const Rv={document:Ip,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(l){return typeof setTimeout>"u"?(l(),null):setTimeout(l,0)},cancelAnimationFrame(l){typeof setTimeout>"u"||clearTimeout(l)}};function it(){const l=typeof window<"u"?window:{};return Su(l,Rv),l}function Lv(l=""){return l.trim().split(" ").filter(s=>!!s.trim())}function Bv(l){const s=l;Object.keys(s).forEach(i=>{try{s[i]=null}catch{}try{delete s[i]}catch{}})}function eh(l,s=0){return setTimeout(l,s)}function Cr(){return Date.now()}function kv(l){const s=it();let i;return s.getComputedStyle&&(i=s.getComputedStyle(l,null)),!i&&l.currentStyle&&(i=l.currentStyle),i||(i=l.style),i}function Uv(l,s="x"){const i=it();let r,c,f;const m=kv(l);return i.WebKitCSSMatrix?(c=m.transform||m.webkitTransform,c.split(",").length>6&&(c=c.split(", ").map(b=>b.replace(",",".")).join(", ")),f=new i.WebKitCSSMatrix(c==="none"?"":c)):(f=m.MozTransform||m.OTransform||m.MsTransform||m.msTransform||m.transform||m.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=f.toString().split(",")),s==="x"&&(i.WebKitCSSMatrix?c=f.m41:r.length===16?c=parseFloat(r[12]):c=parseFloat(r[4])),s==="y"&&(i.WebKitCSSMatrix?c=f.m42:r.length===16?c=parseFloat(r[13]):c=parseFloat(r[5])),c||0}function Er(l){return typeof l=="object"&&l!==null&&l.constructor&&Object.prototype.toString.call(l).slice(8,-1)==="Object"}function qv(l){return typeof window<"u"&&typeof window.HTMLElement<"u"?l instanceof HTMLElement:l&&(l.nodeType===1||l.nodeType===11)}function Et(...l){const s=Object(l[0]),i=["__proto__","constructor","prototype"];for(let r=1;r<l.length;r+=1){const c=l[r];if(c!=null&&!qv(c)){const f=Object.keys(Object(c)).filter(m=>i.indexOf(m)<0);for(let m=0,b=f.length;m<b;m+=1){const p=f[m],h=Object.getOwnPropertyDescriptor(c,p);h!==void 0&&h.enumerable&&(Er(s[p])&&Er(c[p])?c[p].__swiper__?s[p]=c[p]:Et(s[p],c[p]):!Er(s[p])&&Er(c[p])?(s[p]={},c[p].__swiper__?s[p]=c[p]:Et(s[p],c[p])):s[p]=c[p])}}}return s}function Ka(l,s,i){l.style.setProperty(s,i)}function th({swiper:l,targetPosition:s,side:i}){const r=it(),c=-l.translate;let f=null,m;const b=l.params.speed;l.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(l.cssModeFrameID);const p=s>c?"next":"prev",h=(g,N)=>p==="next"&&g>=N||p==="prev"&&g<=N,y=()=>{m=new Date().getTime(),f===null&&(f=m);const g=Math.max(Math.min((m-f)/b,1),0),N=.5-Math.cos(g*Math.PI)/2;let O=c+N*(s-c);if(h(O,s)&&(O=s),l.wrapperEl.scrollTo({[i]:O}),h(O,s)){l.wrapperEl.style.overflow="hidden",l.wrapperEl.style.scrollSnapType="",setTimeout(()=>{l.wrapperEl.style.overflow="",l.wrapperEl.scrollTo({[i]:O})}),r.cancelAnimationFrame(l.cssModeFrameID);return}l.cssModeFrameID=r.requestAnimationFrame(y)};y()}function nh(l){return l.querySelector(".swiper-slide-transform")||l.shadowRoot&&l.shadowRoot.querySelector(".swiper-slide-transform")||l}function Xt(l,s=""){const i=it(),r=[...l.children];return i.HTMLSlotElement&&l instanceof HTMLSlotElement&&r.push(...l.assignedElements()),s?r.filter(c=>c.matches(s)):r}function jv(l,s){const i=[s];for(;i.length>0;){const r=i.shift();if(l===r)return!0;i.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function Gv(l,s){const i=it();let r=s.contains(l);return!r&&i.HTMLSlotElement&&s instanceof HTMLSlotElement&&(r=[...s.assignedElements()].includes(l),r||(r=jv(l,s))),r}function Dr(l){try{console.warn(l);return}catch{}}function wr(l,s=[]){const i=document.createElement(l);return i.classList.add(...Array.isArray(s)?s:Lv(s)),i}function Yv(l,s){const i=[];for(;l.previousElementSibling;){const r=l.previousElementSibling;s?r.matches(s)&&i.push(r):i.push(r),l=r}return i}function Vv(l,s){const i=[];for(;l.nextElementSibling;){const r=l.nextElementSibling;s?r.matches(s)&&i.push(r):i.push(r),l=r}return i}function Gn(l,s){return it().getComputedStyle(l,null).getPropertyValue(s)}function Nr(l){let s=l,i;if(s){for(i=0;(s=s.previousSibling)!==null;)s.nodeType===1&&(i+=1);return i}}function ah(l,s){const i=[];let r=l.parentElement;for(;r;)s?r.matches(s)&&i.push(r):i.push(r),r=r.parentElement;return i}function Xv(l,s){function i(r){r.target===l&&(s.call(l,r),l.removeEventListener("transitionend",i))}s&&l.addEventListener("transitionend",i)}function vu(l,s,i){const r=it();return l[s==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(l,null).getPropertyValue(s==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(l,null).getPropertyValue(s==="width"?"margin-left":"margin-bottom"))}function dn(l){return(Array.isArray(l)?l:[l]).filter(s=>!!s)}function Hr(l,s=""){typeof trustedTypes<"u"?l.innerHTML=trustedTypes.createPolicy("html",{createHTML:i=>i}).createHTML(s):l.innerHTML=s}let su;function Qv(){const l=it(),s=Qt();return{smoothScroll:s.documentElement&&s.documentElement.style&&"scrollBehavior"in s.documentElement.style,touch:!!("ontouchstart"in l||l.DocumentTouch&&s instanceof l.DocumentTouch)}}function lh(){return su||(su=Qv()),su}let uu;function Zv({userAgent:l}={}){const s=lh(),i=it(),r=i.navigator.platform,c=l||i.navigator.userAgent,f={ios:!1,android:!1},m=i.screen.width,b=i.screen.height,p=c.match(/(Android);?[\s\/]+([\d.]+)?/);let h=c.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const y=c.match(/(iPod)(.*OS\s([\d_]+))?/),g=!h&&c.match(/(iPhone\sOS|iOS)\s([\d_]+)/),N=r==="Win32";let O=r==="MacIntel";const A=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!h&&O&&s.touch&&A.indexOf(`${m}x${b}`)>=0&&(h=c.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),O=!1),p&&!N&&(f.os="android",f.android=!0),(h||g||y)&&(f.os="ios",f.ios=!0),f}function ih(l={}){return uu||(uu=Zv(l)),uu}let cu;function Kv(){const l=it(),s=ih();let i=!1;function r(){const b=l.navigator.userAgent.toLowerCase();return b.indexOf("safari")>=0&&b.indexOf("chrome")<0&&b.indexOf("android")<0}if(r()){const b=String(l.navigator.userAgent);if(b.includes("Version/")){const[p,h]=b.split("Version/")[1].split(" ")[0].split(".").map(y=>Number(y));i=p<16||p===16&&h<2}}const c=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(l.navigator.userAgent),f=r(),m=f||c&&s.ios;return{isSafari:i||f,needPerspectiveFix:i,need3dFix:m,isWebView:c}}function rh(){return cu||(cu=Kv()),cu}function Jv({swiper:l,on:s,emit:i}){const r=it();let c=null,f=null;const m=()=>{!l||l.destroyed||!l.initialized||(i("beforeResize"),i("resize"))},b=()=>{!l||l.destroyed||!l.initialized||(c=new ResizeObserver(y=>{f=r.requestAnimationFrame(()=>{const{width:g,height:N}=l;let O=g,A=N;y.forEach(({contentBoxSize:z,contentRect:k,target:E})=>{E&&E!==l.el||(O=k?k.width:(z[0]||z).inlineSize,A=k?k.height:(z[0]||z).blockSize)}),(O!==g||A!==N)&&m()})}),c.observe(l.el))},p=()=>{f&&r.cancelAnimationFrame(f),c&&c.unobserve&&l.el&&(c.unobserve(l.el),c=null)},h=()=>{!l||l.destroyed||!l.initialized||i("orientationchange")};s("init",()=>{if(l.params.resizeObserver&&typeof r.ResizeObserver<"u"){b();return}r.addEventListener("resize",m),r.addEventListener("orientationchange",h)}),s("destroy",()=>{p(),r.removeEventListener("resize",m),r.removeEventListener("orientationchange",h)})}function Pv({swiper:l,extendParams:s,on:i,emit:r}){const c=[],f=it(),m=(h,y={})=>{const g=f.MutationObserver||f.WebkitMutationObserver,N=new g(O=>{if(l.__preventObserver__)return;if(O.length===1){r("observerUpdate",O[0]);return}const A=function(){r("observerUpdate",O[0])};f.requestAnimationFrame?f.requestAnimationFrame(A):f.setTimeout(A,0)});N.observe(h,{attributes:typeof y.attributes>"u"?!0:y.attributes,childList:l.isElement||(typeof y.childList>"u"?!0:y).childList,characterData:typeof y.characterData>"u"?!0:y.characterData}),c.push(N)},b=()=>{if(l.params.observer){if(l.params.observeParents){const h=ah(l.hostEl);for(let y=0;y<h.length;y+=1)m(h[y])}m(l.hostEl,{childList:l.params.observeSlideChildren}),m(l.wrapperEl,{attributes:!1})}},p=()=>{c.forEach(h=>{h.disconnect()}),c.splice(0,c.length)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",b),i("destroy",p)}var $v={on(l,s,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof s!="function")return r;const c=i?"unshift":"push";return l.split(" ").forEach(f=>{r.eventsListeners[f]||(r.eventsListeners[f]=[]),r.eventsListeners[f][c](s)}),r},once(l,s,i){const r=this;if(!r.eventsListeners||r.destroyed||typeof s!="function")return r;function c(...f){r.off(l,c),c.__emitterProxy&&delete c.__emitterProxy,s.apply(r,f)}return c.__emitterProxy=s,r.on(l,c,i)},onAny(l,s){const i=this;if(!i.eventsListeners||i.destroyed||typeof l!="function")return i;const r=s?"unshift":"push";return i.eventsAnyListeners.indexOf(l)<0&&i.eventsAnyListeners[r](l),i},offAny(l){const s=this;if(!s.eventsListeners||s.destroyed||!s.eventsAnyListeners)return s;const i=s.eventsAnyListeners.indexOf(l);return i>=0&&s.eventsAnyListeners.splice(i,1),s},off(l,s){const i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||l.split(" ").forEach(r=>{typeof s>"u"?i.eventsListeners[r]=[]:i.eventsListeners[r]&&i.eventsListeners[r].forEach((c,f)=>{(c===s||c.__emitterProxy&&c.__emitterProxy===s)&&i.eventsListeners[r].splice(f,1)})}),i},emit(...l){const s=this;if(!s.eventsListeners||s.destroyed||!s.eventsListeners)return s;let i,r,c;return typeof l[0]=="string"||Array.isArray(l[0])?(i=l[0],r=l.slice(1,l.length),c=s):(i=l[0].events,r=l[0].data,c=l[0].context||s),r.unshift(c),(Array.isArray(i)?i:i.split(" ")).forEach(m=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(b=>{b.apply(c,[m,...r])}),s.eventsListeners&&s.eventsListeners[m]&&s.eventsListeners[m].forEach(b=>{b.apply(c,r)})}),s}};function Fv(){const l=this;let s,i;const r=l.el;typeof l.params.width<"u"&&l.params.width!==null?s=l.params.width:s=r.clientWidth,typeof l.params.height<"u"&&l.params.height!==null?i=l.params.height:i=r.clientHeight,!(s===0&&l.isHorizontal()||i===0&&l.isVertical())&&(s=s-parseInt(Gn(r,"padding-left")||0,10)-parseInt(Gn(r,"padding-right")||0,10),i=i-parseInt(Gn(r,"padding-top")||0,10)-parseInt(Gn(r,"padding-bottom")||0,10),Number.isNaN(s)&&(s=0),Number.isNaN(i)&&(i=0),Object.assign(l,{width:s,height:i,size:l.isHorizontal()?s:i}))}function Wv(){const l=this;function s(J,K){return parseFloat(J.getPropertyValue(l.getDirectionLabel(K))||0)}const i=l.params,{wrapperEl:r,slidesEl:c,rtlTranslate:f,wrongRTL:m}=l,b=l.virtual&&i.virtual.enabled,p=b?l.virtual.slides.length:l.slides.length,h=Xt(c,`.${l.params.slideClass}, swiper-slide`),y=b?l.virtual.slides.length:h.length;let g=[];const N=[],O=[];let A=i.slidesOffsetBefore;typeof A=="function"&&(A=i.slidesOffsetBefore.call(l));let z=i.slidesOffsetAfter;typeof z=="function"&&(z=i.slidesOffsetAfter.call(l));const k=l.snapGrid.length,E=l.slidesGrid.length,M=l.size-A-z;let w=i.spaceBetween,X=-A,Q=0,F=0;if(typeof M>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*M:typeof w=="string"&&(w=parseFloat(w)),l.virtualSize=-w-A-z,h.forEach(J=>{f?J.style.marginLeft="":J.style.marginRight="",J.style.marginBottom="",J.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(Ka(r,"--swiper-centered-offset-before",""),Ka(r,"--swiper-centered-offset-after","")),i.cssMode&&(Ka(r,"--swiper-slides-offset-before",`${A}px`),Ka(r,"--swiper-slides-offset-after",`${z}px`));const Z=i.grid&&i.grid.rows>1&&l.grid;Z?l.grid.initSlides(h):l.grid&&l.grid.unsetSlides();let L;const I=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(J=>typeof i.breakpoints[J].slidesPerView<"u").length>0;for(let J=0;J<y;J+=1){L=0;const K=h[J];if(!(K&&(Z&&l.grid.updateSlide(J,K,h),Gn(K,"display")==="none"))){if(b&&i.slidesPerView==="auto")i.virtual.slidesPerViewAutoSlideSize&&(L=i.virtual.slidesPerViewAutoSlideSize),L&&K&&(i.roundLengths&&(L=Math.floor(L)),K.style[l.getDirectionLabel("width")]=`${L}px`);else if(i.slidesPerView==="auto"){I&&(K.style[l.getDirectionLabel("width")]="");const P=getComputedStyle(K),se=K.style.transform,re=K.style.webkitTransform;if(se&&(K.style.transform="none"),re&&(K.style.webkitTransform="none"),i.roundLengths)L=l.isHorizontal()?vu(K,"width"):vu(K,"height");else{const me=s(P,"width"),B=s(P,"padding-left"),Y=s(P,"padding-right"),j=s(P,"margin-left"),W=s(P,"margin-right"),ue=P.getPropertyValue("box-sizing");if(ue&&ue==="border-box")L=me+j+W;else{const{clientWidth:x,offsetWidth:V}=K;L=me+B+Y+j+W+(V-x)}}se&&(K.style.transform=se),re&&(K.style.webkitTransform=re),i.roundLengths&&(L=Math.floor(L))}else L=(M-(i.slidesPerView-1)*w)/i.slidesPerView,i.roundLengths&&(L=Math.floor(L)),K&&(K.style[l.getDirectionLabel("width")]=`${L}px`);K&&(K.swiperSlideSize=L),O.push(L),i.centeredSlides?(X=X+L/2+Q/2+w,Q===0&&J!==0&&(X=X-M/2-w),J===0&&(X=X-M/2-w),Math.abs(X)<1/1e3&&(X=0),i.roundLengths&&(X=Math.floor(X)),F%i.slidesPerGroup===0&&g.push(X),N.push(X)):(i.roundLengths&&(X=Math.floor(X)),(F-Math.min(l.params.slidesPerGroupSkip,F))%l.params.slidesPerGroup===0&&g.push(X),N.push(X),X=X+L+w),l.virtualSize+=L+w,Q=L,F+=1}}if(l.virtualSize=Math.max(l.virtualSize,M)+z,f&&m&&(i.effect==="slide"||i.effect==="coverflow")&&(r.style.width=`${l.virtualSize+w}px`),i.setWrapperSize&&(r.style[l.getDirectionLabel("width")]=`${l.virtualSize+w}px`),Z&&l.grid.updateWrapperSize(L,g),!i.centeredSlides){const J=i.slidesPerView!=="auto"&&i.slidesPerView%1!==0,K=i.snapToSlideEdge&&!i.loop&&(i.slidesPerView==="auto"||J);let P=g.length;if(K){let re;if(i.slidesPerView==="auto"){re=1;let me=0;for(let B=O.length-1;B>=0&&(me+=O[B]+(B<O.length-1?w:0),me<=M);B-=1)re=O.length-B}else re=Math.floor(i.slidesPerView);P=Math.max(y-re,0)}const se=[];for(let re=0;re<g.length;re+=1){let me=g[re];i.roundLengths&&(me=Math.floor(me)),K?re<=P&&se.push(me):g[re]<=l.virtualSize-M&&se.push(me)}g=se,Math.floor(l.virtualSize-M)-Math.floor(g[g.length-1])>1&&(K||g.push(l.virtualSize-M))}if(b&&i.loop){const J=O[0]+w;if(i.slidesPerGroup>1){const K=Math.ceil((l.virtual.slidesBefore+l.virtual.slidesAfter)/i.slidesPerGroup),P=J*i.slidesPerGroup;for(let se=0;se<K;se+=1)g.push(g[g.length-1]+P)}for(let K=0;K<l.virtual.slidesBefore+l.virtual.slidesAfter;K+=1)i.slidesPerGroup===1&&g.push(g[g.length-1]+J),N.push(N[N.length-1]+J),l.virtualSize+=J}if(g.length===0&&(g=[0]),w!==0){const J=l.isHorizontal()&&f?"marginLeft":l.getDirectionLabel("marginRight");h.filter((K,P)=>!i.cssMode||i.loop?!0:P!==h.length-1).forEach(K=>{K.style[J]=`${w}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let J=0;O.forEach(P=>{J+=P+(w||0)}),J-=w;const K=J>M?J-M:0;g=g.map(P=>P<=0?-A:P>K?K+z:P)}if(i.centerInsufficientSlides){let J=0;O.forEach(P=>{J+=P+(w||0)}),J-=w;const K=(A||0)+(z||0);if(J+K<M){const P=(M-J-K)/2;g.forEach((se,re)=>{g[re]=se-P}),N.forEach((se,re)=>{N[re]=se+P})}}if(Object.assign(l,{slides:h,snapGrid:g,slidesGrid:N,slidesSizesGrid:O}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Ka(r,"--swiper-centered-offset-before",`${-g[0]}px`),Ka(r,"--swiper-centered-offset-after",`${l.size/2-O[O.length-1]/2}px`);const J=-l.snapGrid[0],K=-l.slidesGrid[0];l.snapGrid=l.snapGrid.map(P=>P+J),l.slidesGrid=l.slidesGrid.map(P=>P+K)}if(y!==p&&l.emit("slidesLengthChange"),g.length!==k&&(l.params.watchOverflow&&l.checkOverflow(),l.emit("snapGridLengthChange")),N.length!==E&&l.emit("slidesGridLengthChange"),i.watchSlidesProgress&&l.updateSlidesOffset(),l.emit("slidesUpdated"),!b&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const J=`${i.containerModifierClass}backface-hidden`,K=l.el.classList.contains(J);y<=i.maxBackfaceHiddenSlides?K||l.el.classList.add(J):K&&l.el.classList.remove(J)}}function Iv(l){const s=this,i=[],r=s.virtual&&s.params.virtual.enabled;let c=0,f;typeof l=="number"?s.setTransition(l):l===!0&&s.setTransition(s.params.speed);const m=b=>r?s.slides[s.getSlideIndexByData(b)]:s.slides[b];if(s.params.slidesPerView!=="auto"&&s.params.slidesPerView>1)if(s.params.centeredSlides)(s.visibleSlides||[]).forEach(b=>{i.push(b)});else for(f=0;f<Math.ceil(s.params.slidesPerView);f+=1){const b=s.activeIndex+f;if(b>s.slides.length&&!r)break;i.push(m(b))}else i.push(m(s.activeIndex));for(f=0;f<i.length;f+=1)if(typeof i[f]<"u"){const b=i[f].offsetHeight;c=b>c?b:c}(c||c===0)&&(s.wrapperEl.style.height=`${c}px`)}function eg(){const l=this,s=l.slides,i=l.isElement?l.isHorizontal()?l.wrapperEl.offsetLeft:l.wrapperEl.offsetTop:0;for(let r=0;r<s.length;r+=1)s[r].swiperSlideOffset=(l.isHorizontal()?s[r].offsetLeft:s[r].offsetTop)-i-l.cssOverflowAdjustment()}const Vp=(l,s,i)=>{s&&!l.classList.contains(i)?l.classList.add(i):!s&&l.classList.contains(i)&&l.classList.remove(i)};function tg(l=this&&this.translate||0){const s=this,i=s.params,{slides:r,rtlTranslate:c,snapGrid:f}=s;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&s.updateSlidesOffset();let m=-l;c&&(m=l),s.visibleSlidesIndexes=[],s.visibleSlides=[];let b=i.spaceBetween;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*s.size:typeof b=="string"&&(b=parseFloat(b));for(let p=0;p<r.length;p+=1){const h=r[p];let y=h.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(y-=r[0].swiperSlideOffset);const g=(m+(i.centeredSlides?s.minTranslate():0)-y)/(h.swiperSlideSize+b),N=(m-f[0]+(i.centeredSlides?s.minTranslate():0)-y)/(h.swiperSlideSize+b),O=-(m-y),A=O+s.slidesSizesGrid[p],z=O>=0&&O<=s.size-s.slidesSizesGrid[p],k=O>=0&&O<s.size-1||A>1&&A<=s.size||O<=0&&A>=s.size;k&&(s.visibleSlides.push(h),s.visibleSlidesIndexes.push(p)),Vp(h,k,i.slideVisibleClass),Vp(h,z,i.slideFullyVisibleClass),h.progress=c?-g:g,h.originalProgress=c?-N:N}}function ng(l){const s=this;if(typeof l>"u"){const y=s.rtlTranslate?-1:1;l=s&&s.translate&&s.translate*y||0}const i=s.params,r=s.maxTranslate()-s.minTranslate();let{progress:c,isBeginning:f,isEnd:m,progressLoop:b}=s;const p=f,h=m;if(r===0)c=0,f=!0,m=!0;else{c=(l-s.minTranslate())/r;const y=Math.abs(l-s.minTranslate())<1,g=Math.abs(l-s.maxTranslate())<1;f=y||c<=0,m=g||c>=1,y&&(c=0),g&&(c=1)}if(i.loop){const y=s.getSlideIndexByData(0),g=s.getSlideIndexByData(s.slides.length-1),N=s.slidesGrid[y],O=s.slidesGrid[g],A=s.slidesGrid[s.slidesGrid.length-1],z=Math.abs(l);z>=N?b=(z-N)/A:b=(z+A-O)/A,b>1&&(b-=1)}Object.assign(s,{progress:c,progressLoop:b,isBeginning:f,isEnd:m}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&s.updateSlidesProgress(l),f&&!p&&s.emit("reachBeginning toEdge"),m&&!h&&s.emit("reachEnd toEdge"),(p&&!f||h&&!m)&&s.emit("fromEdge"),s.emit("progress",c)}const fu=(l,s,i)=>{s&&!l.classList.contains(i)?l.classList.add(i):!s&&l.classList.contains(i)&&l.classList.remove(i)};function ag(){const l=this,{slides:s,params:i,slidesEl:r,activeIndex:c}=l,f=l.virtual&&i.virtual.enabled,m=l.grid&&i.grid&&i.grid.rows>1,b=g=>Xt(r,`.${i.slideClass}${g}, swiper-slide${g}`)[0];let p,h,y;if(f)if(i.loop){let g=c-l.virtual.slidesBefore;g<0&&(g=l.virtual.slides.length+g),g>=l.virtual.slides.length&&(g-=l.virtual.slides.length),p=b(`[data-swiper-slide-index="${g}"]`)}else p=b(`[data-swiper-slide-index="${c}"]`);else m?(p=s.find(g=>g.column===c),y=s.find(g=>g.column===c+1),h=s.find(g=>g.column===c-1)):p=s[c];p&&(m||(y=Vv(p,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!y&&(y=s[0]),h=Yv(p,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!h===0&&(h=s[s.length-1]))),s.forEach(g=>{fu(g,g===p,i.slideActiveClass),fu(g,g===y,i.slideNextClass),fu(g,g===h,i.slidePrevClass)}),l.emitSlidesClasses()}const zr=(l,s)=>{if(!l||l.destroyed||!l.params)return;const i=()=>l.isElement?"swiper-slide":`.${l.params.slideClass}`,r=s.closest(i());if(r){let c=r.querySelector(`.${l.params.lazyPreloaderClass}`);!c&&l.isElement&&(r.shadowRoot?c=r.shadowRoot.querySelector(`.${l.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(c=r.shadowRoot.querySelector(`.${l.params.lazyPreloaderClass}`),c&&!c.lazyPreloaderManaged&&c.remove())})),c&&!c.lazyPreloaderManaged&&c.remove()}},du=(l,s)=>{if(!l.slides[s])return;const i=l.slides[s].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},gu=l=>{if(!l||l.destroyed||!l.params)return;let s=l.params.lazyPreloadPrevNext;const i=l.slides.length;if(!i||!s||s<0)return;s=Math.min(s,i);const r=l.params.slidesPerView==="auto"?l.slidesPerViewDynamic():Math.ceil(l.params.slidesPerView),c=l.activeIndex;if(l.params.grid&&l.params.grid.rows>1){const m=c,b=[m-s];b.push(...Array.from({length:s}).map((p,h)=>m+r+h)),l.slides.forEach((p,h)=>{b.includes(p.column)&&du(l,h)});return}const f=c+r-1;if(l.params.rewind||l.params.loop)for(let m=c-s;m<=f+s;m+=1){const b=(m%i+i)%i;(b<c||b>f)&&du(l,b)}else for(let m=Math.max(c-s,0);m<=Math.min(f+s,i-1);m+=1)m!==c&&(m>f||m<c)&&du(l,m)};function lg(l){const{slidesGrid:s,params:i}=l,r=l.rtlTranslate?l.translate:-l.translate;let c;for(let f=0;f<s.length;f+=1)typeof s[f+1]<"u"?r>=s[f]&&r<s[f+1]-(s[f+1]-s[f])/2?c=f:r>=s[f]&&r<s[f+1]&&(c=f+1):r>=s[f]&&(c=f);return i.normalizeSlideIndex&&(c<0||typeof c>"u")&&(c=0),c}function ig(l){const s=this,i=s.rtlTranslate?s.translate:-s.translate,{snapGrid:r,params:c,activeIndex:f,realIndex:m,snapIndex:b}=s;let p=l,h;const y=O=>{let A=O-s.virtual.slidesBefore;return A<0&&(A=s.virtual.slides.length+A),A>=s.virtual.slides.length&&(A-=s.virtual.slides.length),A};if(typeof p>"u"&&(p=lg(s)),r.indexOf(i)>=0)h=r.indexOf(i);else{const O=Math.min(c.slidesPerGroupSkip,p);h=O+Math.floor((p-O)/c.slidesPerGroup)}if(h>=r.length&&(h=r.length-1),p===f&&!s.params.loop){h!==b&&(s.snapIndex=h,s.emit("snapIndexChange"));return}if(p===f&&s.params.loop&&s.virtual&&s.params.virtual.enabled){s.realIndex=y(p);return}const g=s.grid&&c.grid&&c.grid.rows>1;let N;if(s.virtual&&c.virtual.enabled)c.loop?N=y(p):N=p;else if(g){const O=s.slides.find(z=>z.column===p);let A=parseInt(O.getAttribute("data-swiper-slide-index"),10);Number.isNaN(A)&&(A=Math.max(s.slides.indexOf(O),0)),N=Math.floor(A/c.grid.rows)}else if(s.slides[p]){const O=s.slides[p].getAttribute("data-swiper-slide-index");O?N=parseInt(O,10):N=p}else N=p;Object.assign(s,{previousSnapIndex:b,snapIndex:h,previousRealIndex:m,realIndex:N,previousIndex:f,activeIndex:p}),s.initialized&&gu(s),s.emit("activeIndexChange"),s.emit("snapIndexChange"),(s.initialized||s.params.runCallbacksOnInit)&&(m!==N&&s.emit("realIndexChange"),s.emit("slideChange"))}function rg(l,s){const i=this,r=i.params;let c=l.closest(`.${r.slideClass}, swiper-slide`);!c&&i.isElement&&s&&s.length>1&&s.includes(l)&&[...s.slice(s.indexOf(l)+1,s.length)].forEach(b=>{!c&&b.matches&&b.matches(`.${r.slideClass}, swiper-slide`)&&(c=b)});let f=!1,m;if(c){for(let b=0;b<i.slides.length;b+=1)if(i.slides[b]===c){f=!0,m=b;break}}if(c&&f)i.clickedSlide=c,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(c.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=m;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}r.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var og={updateSize:Fv,updateSlides:Wv,updateAutoHeight:Iv,updateSlidesOffset:eg,updateSlidesProgress:tg,updateProgress:ng,updateSlidesClasses:ag,updateActiveIndex:ig,updateClickedSlide:rg};function sg(l=this.isHorizontal()?"x":"y"){const s=this,{params:i,rtlTranslate:r,translate:c,wrapperEl:f}=s;if(i.virtualTranslate)return r?-c:c;if(i.cssMode)return c;let m=Uv(f,l);return m+=s.cssOverflowAdjustment(),r&&(m=-m),m||0}function ug(l,s){const i=this,{rtlTranslate:r,params:c,wrapperEl:f,progress:m}=i;let b=0,p=0;const h=0;i.isHorizontal()?b=r?-l:l:p=l,c.roundLengths&&(b=Math.floor(b),p=Math.floor(p)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?b:p,c.cssMode?f[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-b:-p:c.virtualTranslate||(i.isHorizontal()?b-=i.cssOverflowAdjustment():p-=i.cssOverflowAdjustment(),f.style.transform=`translate3d(${b}px, ${p}px, ${h}px)`);let y;const g=i.maxTranslate()-i.minTranslate();g===0?y=0:y=(l-i.minTranslate())/g,y!==m&&i.updateProgress(l),i.emit("setTranslate",i.translate,s)}function cg(){return-this.snapGrid[0]}function fg(){return-this.snapGrid[this.snapGrid.length-1]}function dg(l=0,s=this.params.speed,i=!0,r=!0,c){const f=this,{params:m,wrapperEl:b}=f;if(f.animating&&m.preventInteractionOnTransition)return!1;const p=f.minTranslate(),h=f.maxTranslate();let y;if(r&&l>p?y=p:r&&l<h?y=h:y=l,f.updateProgress(y),m.cssMode){const g=f.isHorizontal();if(s===0)b[g?"scrollLeft":"scrollTop"]=-y;else{if(!f.support.smoothScroll)return th({swiper:f,targetPosition:-y,side:g?"left":"top"}),!0;b.scrollTo({[g?"left":"top"]:-y,behavior:"smooth"})}return!0}return s===0?(f.setTransition(0),f.setTranslate(y),i&&(f.emit("beforeTransitionStart",s,c),f.emit("transitionEnd"))):(f.setTransition(s),f.setTranslate(y),i&&(f.emit("beforeTransitionStart",s,c),f.emit("transitionStart")),f.animating||(f.animating=!0,f.onTranslateToWrapperTransitionEnd||(f.onTranslateToWrapperTransitionEnd=function(N){!f||f.destroyed||N.target===this&&(f.wrapperEl.removeEventListener("transitionend",f.onTranslateToWrapperTransitionEnd),f.onTranslateToWrapperTransitionEnd=null,delete f.onTranslateToWrapperTransitionEnd,f.animating=!1,i&&f.emit("transitionEnd"))}),f.wrapperEl.addEventListener("transitionend",f.onTranslateToWrapperTransitionEnd))),!0}var pg={getTranslate:sg,setTranslate:ug,minTranslate:cg,maxTranslate:fg,translateTo:dg};function hg(l,s){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${l}ms`,i.wrapperEl.style.transitionDelay=l===0?"0ms":""),i.emit("setTransition",l,s)}function oh({swiper:l,runCallbacks:s,direction:i,step:r}){const{activeIndex:c,previousIndex:f}=l;let m=i;m||(c>f?m="next":c<f?m="prev":m="reset"),l.emit(`transition${r}`),s&&m==="reset"?l.emit(`slideResetTransition${r}`):s&&c!==f&&(l.emit(`slideChangeTransition${r}`),m==="next"?l.emit(`slideNextTransition${r}`):l.emit(`slidePrevTransition${r}`))}function mg(l=!0,s){const i=this,{params:r}=i;r.cssMode||(r.autoHeight&&i.updateAutoHeight(),oh({swiper:i,runCallbacks:l,direction:s,step:"Start"}))}function vg(l=!0,s){const i=this,{params:r}=i;i.animating=!1,!r.cssMode&&(i.setTransition(0),oh({swiper:i,runCallbacks:l,direction:s,step:"End"}))}var gg={setTransition:hg,transitionStart:mg,transitionEnd:vg};function bg(l=0,s,i=!0,r,c){typeof l=="string"&&(l=parseInt(l,10));const f=this;let m=l;m<0&&(m=0);const{params:b,snapGrid:p,slidesGrid:h,previousIndex:y,activeIndex:g,rtlTranslate:N,wrapperEl:O,enabled:A}=f;if(!A&&!r&&!c||f.destroyed||f.animating&&b.preventInteractionOnTransition)return!1;typeof s>"u"&&(s=f.params.speed);const z=Math.min(f.params.slidesPerGroupSkip,m);let k=z+Math.floor((m-z)/f.params.slidesPerGroup);k>=p.length&&(k=p.length-1);const E=-p[k];if(b.normalizeSlideIndex)for(let Z=0;Z<h.length;Z+=1){const L=-Math.floor(E*100),I=Math.floor(h[Z]*100),J=Math.floor(h[Z+1]*100);typeof h[Z+1]<"u"?L>=I&&L<J-(J-I)/2?m=Z:L>=I&&L<J&&(m=Z+1):L>=I&&(m=Z)}if(f.initialized&&m!==g&&(!f.allowSlideNext&&(N?E>f.translate&&E>f.minTranslate():E<f.translate&&E<f.minTranslate())||!f.allowSlidePrev&&E>f.translate&&E>f.maxTranslate()&&(g||0)!==m))return!1;m!==(y||0)&&i&&f.emit("beforeSlideChangeStart"),f.updateProgress(E);let M;m>g?M="next":m<g?M="prev":M="reset";const w=f.virtual&&f.params.virtual.enabled;if(!(w&&c)&&(N&&-E===f.translate||!N&&E===f.translate))return f.updateActiveIndex(m),b.autoHeight&&f.updateAutoHeight(),f.updateSlidesClasses(),b.effect!=="slide"&&f.setTranslate(E),M!=="reset"&&(f.transitionStart(i,M),f.transitionEnd(i,M)),!1;if(b.cssMode){const Z=f.isHorizontal(),L=N?E:-E;if(s===0)w&&(f.wrapperEl.style.scrollSnapType="none",f._immediateVirtual=!0),w&&!f._cssModeVirtualInitialSet&&f.params.initialSlide>0?(f._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{O[Z?"scrollLeft":"scrollTop"]=L})):O[Z?"scrollLeft":"scrollTop"]=L,w&&requestAnimationFrame(()=>{f.wrapperEl.style.scrollSnapType="",f._immediateVirtual=!1});else{if(!f.support.smoothScroll)return th({swiper:f,targetPosition:L,side:Z?"left":"top"}),!0;O.scrollTo({[Z?"left":"top"]:L,behavior:"smooth"})}return!0}const F=rh().isSafari;return w&&!c&&F&&f.isElement&&f.virtual.update(!1,!1,m),f.setTransition(s),f.setTranslate(E),f.updateActiveIndex(m),f.updateSlidesClasses(),f.emit("beforeTransitionStart",s,r),f.transitionStart(i,M),s===0?f.transitionEnd(i,M):f.animating||(f.animating=!0,f.onSlideToWrapperTransitionEnd||(f.onSlideToWrapperTransitionEnd=function(L){!f||f.destroyed||L.target===this&&(f.wrapperEl.removeEventListener("transitionend",f.onSlideToWrapperTransitionEnd),f.onSlideToWrapperTransitionEnd=null,delete f.onSlideToWrapperTransitionEnd,f.transitionEnd(i,M))}),f.wrapperEl.addEventListener("transitionend",f.onSlideToWrapperTransitionEnd)),!0}function yg(l=0,s,i=!0,r){typeof l=="string"&&(l=parseInt(l,10));const c=this;if(c.destroyed)return;typeof s>"u"&&(s=c.params.speed);const f=c.grid&&c.params.grid&&c.params.grid.rows>1;let m=l;if(c.params.loop)if(c.virtual&&c.params.virtual.enabled)m=m+c.virtual.slidesBefore;else{let b;if(f){const z=m*c.params.grid.rows;b=c.slides.find(k=>k.getAttribute("data-swiper-slide-index")*1===z).column}else b=c.getSlideIndexByData(m);const p=f?Math.ceil(c.slides.length/c.params.grid.rows):c.slides.length,{centeredSlides:h,slidesOffsetBefore:y,slidesOffsetAfter:g}=c.params,N=h||!!y||!!g;let O=c.params.slidesPerView;O==="auto"?O=c.slidesPerViewDynamic():(O=Math.ceil(parseFloat(c.params.slidesPerView,10)),N&&O%2===0&&(O=O+1));let A=p-b<O;if(N&&(A=A||b<Math.ceil(O/2)),r&&N&&c.params.slidesPerView!=="auto"&&!f&&(A=!1),A){const z=N?b<c.activeIndex?"prev":"next":b-c.activeIndex-1<c.params.slidesPerView?"next":"prev";c.loopFix({direction:z,slideTo:!0,activeSlideIndex:z==="next"?b+1:b-p+1,slideRealIndex:z==="next"?c.realIndex:void 0})}if(f){const z=m*c.params.grid.rows;m=c.slides.find(k=>k.getAttribute("data-swiper-slide-index")*1===z).column}else m=c.getSlideIndexByData(m)}return requestAnimationFrame(()=>{c.slideTo(m,s,i,r)}),c}function Sg(l,s=!0,i){const r=this,{enabled:c,params:f,animating:m}=r;if(!c||r.destroyed)return r;typeof l>"u"&&(l=r.params.speed);let b=f.slidesPerGroup;f.slidesPerView==="auto"&&f.slidesPerGroup===1&&f.slidesPerGroupAuto&&(b=Math.max(r.slidesPerViewDynamic("current",!0),1));const p=r.activeIndex<f.slidesPerGroupSkip?1:b,h=r.virtual&&f.virtual.enabled;if(f.loop){if(m&&!h&&f.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&f.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+p,l,s,i)}),!0}return f.rewind&&r.isEnd?r.slideTo(0,l,s,i):r.slideTo(r.activeIndex+p,l,s,i)}function xg(l,s=!0,i){const r=this,{params:c,snapGrid:f,slidesGrid:m,rtlTranslate:b,enabled:p,animating:h}=r;if(!p||r.destroyed)return r;typeof l>"u"&&(l=r.params.speed);const y=r.virtual&&c.virtual.enabled;if(c.loop){if(h&&!y&&c.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const g=b?r.translate:-r.translate;function N(M){return M<0?-Math.floor(Math.abs(M)):Math.floor(M)}const O=N(g),A=f.map(M=>N(M)),z=c.freeMode&&c.freeMode.enabled;let k=f[A.indexOf(O)-1];if(typeof k>"u"&&(c.cssMode||z)){let M;f.forEach((w,X)=>{O>=w&&(M=X)}),typeof M<"u"&&(k=z?f[M]:f[M>0?M-1:M])}let E=0;if(typeof k<"u"&&(E=m.indexOf(k),E<0&&(E=r.activeIndex-1),c.slidesPerView==="auto"&&c.slidesPerGroup===1&&c.slidesPerGroupAuto&&(E=E-r.slidesPerViewDynamic("previous",!0)+1,E=Math.max(E,0))),c.rewind&&r.isBeginning){const M=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(M,l,s,i)}else if(c.loop&&r.activeIndex===0&&c.cssMode)return requestAnimationFrame(()=>{r.slideTo(E,l,s,i)}),!0;return r.slideTo(E,l,s,i)}function Tg(l,s=!0,i){const r=this;if(!r.destroyed)return typeof l>"u"&&(l=r.params.speed),r.slideTo(r.activeIndex,l,s,i)}function Og(l,s=!0,i,r=.5){const c=this;if(c.destroyed)return;typeof l>"u"&&(l=c.params.speed);let f=c.activeIndex;const m=Math.min(c.params.slidesPerGroupSkip,f),b=m+Math.floor((f-m)/c.params.slidesPerGroup),p=c.rtlTranslate?c.translate:-c.translate;if(p>=c.snapGrid[b]){const h=c.snapGrid[b],y=c.snapGrid[b+1];p-h>(y-h)*r&&(f+=c.params.slidesPerGroup)}else{const h=c.snapGrid[b-1],y=c.snapGrid[b];p-h<=(y-h)*r&&(f-=c.params.slidesPerGroup)}return f=Math.max(f,0),f=Math.min(f,c.slidesGrid.length-1),c.slideTo(f,l,s,i)}function Eg(){const l=this;if(l.destroyed)return;const{params:s,slidesEl:i}=l,r=s.slidesPerView==="auto"?l.slidesPerViewDynamic():s.slidesPerView;let c=l.getSlideIndexWhenGrid(l.clickedIndex),f;const m=l.isElement?"swiper-slide":`.${s.slideClass}`,b=l.grid&&l.params.grid&&l.params.grid.rows>1;if(s.loop){if(l.animating)return;f=parseInt(l.clickedSlide.getAttribute("data-swiper-slide-index"),10),s.centeredSlides?l.slideToLoop(f):c>(b?(l.slides.length-r)/2-(l.params.grid.rows-1):l.slides.length-r)?(l.loopFix(),c=l.getSlideIndex(Xt(i,`${m}[data-swiper-slide-index="${f}"]`)[0]),eh(()=>{l.slideTo(c)})):l.slideTo(c)}else l.slideTo(c)}var zg={slideTo:bg,slideToLoop:yg,slideNext:Sg,slidePrev:xg,slideReset:Tg,slideToClosest:Og,slideToClickedSlide:Eg};function Mg(l,s){const i=this,{params:r,slidesEl:c}=i;if(!r.loop||i.virtual&&i.params.virtual.enabled)return;const f=()=>{Xt(c,`.${r.slideClass}, swiper-slide`).forEach((A,z)=>{A.setAttribute("data-swiper-slide-index",z)})},m=()=>{const O=Xt(c,`.${r.slideBlankClass}`);O.forEach(A=>{A.remove()}),O.length>0&&(i.recalcSlides(),i.updateSlides())},b=i.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||b)&&m();const p=r.slidesPerGroup*(b?r.grid.rows:1),h=i.slides.length%p!==0,y=b&&i.slides.length%r.grid.rows!==0,g=O=>{for(let A=0;A<O;A+=1){const z=i.isElement?wr("swiper-slide",[r.slideBlankClass]):wr("div",[r.slideClass,r.slideBlankClass]);i.slidesEl.append(z)}};if(h){if(r.loopAddBlankSlides){const O=p-i.slides.length%p;g(O),i.recalcSlides(),i.updateSlides()}else Dr("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");f()}else if(y){if(r.loopAddBlankSlides){const O=r.grid.rows-i.slides.length%r.grid.rows;g(O),i.recalcSlides(),i.updateSlides()}else Dr("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");f()}else f();const N=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;i.loopFix({slideRealIndex:l,direction:N?void 0:"next",initial:s})}function Ag({slideRealIndex:l,slideTo:s=!0,direction:i,setTranslate:r,activeSlideIndex:c,initial:f,byController:m,byMousewheel:b}={}){const p=this;if(!p.params.loop)return;p.emit("beforeLoopFix");const{slides:h,allowSlidePrev:y,allowSlideNext:g,slidesEl:N,params:O}=p,{centeredSlides:A,slidesOffsetBefore:z,slidesOffsetAfter:k,initialSlide:E}=O,M=A||!!z||!!k;if(p.allowSlidePrev=!0,p.allowSlideNext=!0,p.virtual&&O.virtual.enabled){s&&(!M&&p.snapIndex===0?p.slideTo(p.virtual.slides.length,0,!1,!0):M&&p.snapIndex<O.slidesPerView?p.slideTo(p.virtual.slides.length+p.snapIndex,0,!1,!0):p.snapIndex===p.snapGrid.length-1&&p.slideTo(p.virtual.slidesBefore,0,!1,!0)),p.allowSlidePrev=y,p.allowSlideNext=g,p.emit("loopFix");return}let w=O.slidesPerView;w==="auto"?w=p.slidesPerViewDynamic():(w=Math.ceil(parseFloat(O.slidesPerView,10)),M&&w%2===0&&(w=w+1));const X=O.slidesPerGroupAuto?w:O.slidesPerGroup;let Q=M?Math.max(X,Math.ceil(w/2)):X;Q%X!==0&&(Q+=X-Q%X),Q+=O.loopAdditionalSlides,p.loopedSlides=Q;const F=p.grid&&O.grid&&O.grid.rows>1;h.length<w+Q||p.params.effect==="cards"&&h.length<w+Q*2?Dr("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):F&&O.grid.fill==="row"&&Dr("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const Z=[],L=[],I=F?Math.ceil(h.length/O.grid.rows):h.length,J=f&&I-E<w&&!M;let K=J?E:p.activeIndex;typeof c>"u"?c=p.getSlideIndex(h.find(j=>j.classList.contains(O.slideActiveClass))):K=c;const P=i==="next"||!i,se=i==="prev"||!i;let re=0,me=0;const Y=(F?h[c].column:c)+(M&&typeof r>"u"?-w/2+.5:0);if(Y<Q){re=Math.max(Q-Y,X);for(let j=0;j<Q-Y;j+=1){const W=j-Math.floor(j/I)*I;if(F){const ue=I-W-1;for(let x=h.length-1;x>=0;x-=1)h[x].column===ue&&Z.push(x)}else Z.push(I-W-1)}}else if(Y+w>I-Q){me=Math.max(Y-(I-Q*2),X),J&&(me=Math.max(me,w-I+E+1));for(let j=0;j<me;j+=1){const W=j-Math.floor(j/I)*I;F?h.forEach((ue,x)=>{ue.column===W&&L.push(x)}):L.push(W)}}if(p.__preventObserver__=!0,requestAnimationFrame(()=>{p.__preventObserver__=!1}),p.params.effect==="cards"&&h.length<w+Q*2&&(L.includes(c)&&L.splice(L.indexOf(c),1),Z.includes(c)&&Z.splice(Z.indexOf(c),1)),se&&Z.forEach(j=>{h[j].swiperLoopMoveDOM=!0,N.prepend(h[j]),h[j].swiperLoopMoveDOM=!1}),P&&L.forEach(j=>{h[j].swiperLoopMoveDOM=!0,N.append(h[j]),h[j].swiperLoopMoveDOM=!1}),p.recalcSlides(),O.slidesPerView==="auto"?p.updateSlides():F&&(Z.length>0&&se||L.length>0&&P)&&p.slides.forEach((j,W)=>{p.grid.updateSlide(W,j,p.slides)}),O.watchSlidesProgress&&p.updateSlidesOffset(),s){if(Z.length>0&&se){if(typeof l>"u"){const j=p.slidesGrid[K],ue=p.slidesGrid[K+re]-j;b?p.setTranslate(p.translate-ue):(p.slideTo(K+Math.ceil(re),0,!1,!0),r&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-ue,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-ue))}else if(r){const j=F?Z.length/O.grid.rows:Z.length;p.slideTo(p.activeIndex+j,0,!1,!0),p.touchEventsData.currentTranslate=p.translate}}else if(L.length>0&&P)if(typeof l>"u"){const j=p.slidesGrid[K],ue=p.slidesGrid[K-me]-j;b?p.setTranslate(p.translate-ue):(p.slideTo(K-me,0,!1,!0),r&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-ue,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-ue))}else{const j=F?L.length/O.grid.rows:L.length;p.slideTo(p.activeIndex-j,0,!1,!0)}}if(p.allowSlidePrev=y,p.allowSlideNext=g,p.controller&&p.controller.control&&!m){const j={slideRealIndex:l,direction:i,setTranslate:r,activeSlideIndex:c,byController:!0};Array.isArray(p.controller.control)?p.controller.control.forEach(W=>{!W.destroyed&&W.params.loop&&W.loopFix({...j,slideTo:W.params.slidesPerView===O.slidesPerView?s:!1})}):p.controller.control instanceof p.constructor&&p.controller.control.params.loop&&p.controller.control.loopFix({...j,slideTo:p.controller.control.params.slidesPerView===O.slidesPerView?s:!1})}p.emit("loopFix")}function _g(){const l=this,{params:s,slidesEl:i}=l;if(!s.loop||!i||l.virtual&&l.params.virtual.enabled)return;l.recalcSlides();const r=[];l.slides.forEach(c=>{const f=typeof c.swiperSlideIndex>"u"?c.getAttribute("data-swiper-slide-index")*1:c.swiperSlideIndex;r[f]=c}),l.slides.forEach(c=>{c.removeAttribute("data-swiper-slide-index")}),r.forEach(c=>{i.append(c)}),l.recalcSlides(),l.slideTo(l.realIndex,0)}var Cg={loopCreate:Mg,loopFix:Ag,loopDestroy:_g};function Dg(l){const s=this;if(!s.params.simulateTouch||s.params.watchOverflow&&s.isLocked||s.params.cssMode)return;const i=s.params.touchEventsTarget==="container"?s.el:s.wrapperEl;s.isElement&&(s.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=l?"grabbing":"grab",s.isElement&&requestAnimationFrame(()=>{s.__preventObserver__=!1})}function wg(){const l=this;l.params.watchOverflow&&l.isLocked||l.params.cssMode||(l.isElement&&(l.__preventObserver__=!0),l[l.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",l.isElement&&requestAnimationFrame(()=>{l.__preventObserver__=!1}))}var Ng={setGrabCursor:Dg,unsetGrabCursor:wg};function Hg(l,s=this){function i(r){if(!r||r===Qt()||r===it())return null;r.assignedSlot&&(r=r.assignedSlot);const c=r.closest(l);return!c&&!r.getRootNode?null:c||i(r.getRootNode().host)}return i(s)}function Xp(l,s,i){const r=it(),{params:c}=l,f=c.edgeSwipeDetection,m=c.edgeSwipeThreshold;return f&&(i<=m||i>=r.innerWidth-m)?f==="prevent"?(s.preventDefault(),!0):!1:!0}function Rg(l){const s=this,i=Qt();let r=l;r.originalEvent&&(r=r.originalEvent);const c=s.touchEventsData;if(r.type==="pointerdown"){if(c.pointerId!==null&&c.pointerId!==r.pointerId)return;c.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(c.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Xp(s,r,r.targetTouches[0].pageX);return}const{params:f,touches:m,enabled:b}=s;if(!b||!f.simulateTouch&&r.pointerType==="mouse"||s.animating&&f.preventInteractionOnTransition)return;!s.animating&&f.cssMode&&f.loop&&s.loopFix();let p=r.target;if(f.touchEventsTarget==="wrapper"&&!Gv(p,s.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||c.isTouched&&c.isMoved)return;const h=!!f.noSwipingClass&&f.noSwipingClass!=="",y=r.composedPath?r.composedPath():r.path;h&&r.target&&r.target.shadowRoot&&y&&(p=y[0]);const g=f.noSwipingSelector?f.noSwipingSelector:`.${f.noSwipingClass}`,N=!!(r.target&&r.target.shadowRoot);if(f.noSwiping&&(N?Hg(g,p):p.closest(g))){s.allowClick=!0;return}if(f.swipeHandler&&!p.closest(f.swipeHandler))return;m.currentX=r.pageX,m.currentY=r.pageY;const O=m.currentX,A=m.currentY;if(!Xp(s,r,O))return;Object.assign(c,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),m.startX=O,m.startY=A,c.touchStartTime=Cr(),s.allowClick=!0,s.updateSize(),s.swipeDirection=void 0,f.threshold>0&&(c.allowThresholdMove=!1);let z=!0;p.matches(c.focusableElements)&&(z=!1,p.nodeName==="SELECT"&&(c.isTouched=!1)),i.activeElement&&i.activeElement.matches(c.focusableElements)&&i.activeElement!==p&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!p.matches(c.focusableElements))&&i.activeElement.blur();const k=z&&s.allowTouchMove&&f.touchStartPreventDefault;(f.touchStartForcePreventDefault||k)&&!p.isContentEditable&&r.preventDefault(),f.freeMode&&f.freeMode.enabled&&s.freeMode&&s.animating&&!f.cssMode&&s.freeMode.onTouchStart(),s.emit("touchStart",r)}function Lg(l){const s=Qt(),i=this,r=i.touchEventsData,{params:c,touches:f,rtlTranslate:m,enabled:b}=i;if(!b||!c.simulateTouch&&l.pointerType==="mouse")return;let p=l;if(p.originalEvent&&(p=p.originalEvent),p.type==="pointermove"&&(r.touchId!==null||p.pointerId!==r.pointerId))return;let h;if(p.type==="touchmove"){if(h=[...p.changedTouches].find(Q=>Q.identifier===r.touchId),!h||h.identifier!==r.touchId)return}else h=p;if(!r.isTouched){r.startMoving&&r.isScrolling&&i.emit("touchMoveOpposite",p);return}const y=h.pageX,g=h.pageY;if(p.preventedByNestedSwiper){f.startX=y,f.startY=g;return}if(!i.allowTouchMove){p.target.matches(r.focusableElements)||(i.allowClick=!1),r.isTouched&&(Object.assign(f,{startX:y,startY:g,currentX:y,currentY:g}),r.touchStartTime=Cr());return}if(c.touchReleaseOnEdges&&!c.loop)if(i.isVertical()){if(g<f.startY&&i.translate<=i.maxTranslate()||g>f.startY&&i.translate>=i.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(m&&(y>f.startX&&-i.translate<=i.maxTranslate()||y<f.startX&&-i.translate>=i.minTranslate()))return;if(!m&&(y<f.startX&&i.translate<=i.maxTranslate()||y>f.startX&&i.translate>=i.minTranslate()))return}if(s.activeElement&&s.activeElement.matches(r.focusableElements)&&s.activeElement!==p.target&&p.pointerType!=="mouse"&&s.activeElement.blur(),s.activeElement&&p.target===s.activeElement&&p.target.matches(r.focusableElements)){r.isMoved=!0,i.allowClick=!1;return}r.allowTouchCallbacks&&i.emit("touchMove",p),f.previousX=f.currentX,f.previousY=f.currentY,f.currentX=y,f.currentY=g;const N=f.currentX-f.startX,O=f.currentY-f.startY;if(i.params.threshold&&Math.sqrt(N**2+O**2)<i.params.threshold)return;if(typeof r.isScrolling>"u"){let Q;i.isHorizontal()&&f.currentY===f.startY||i.isVertical()&&f.currentX===f.startX?r.isScrolling=!1:N*N+O*O>=25&&(Q=Math.atan2(Math.abs(O),Math.abs(N))*180/Math.PI,r.isScrolling=i.isHorizontal()?Q>c.touchAngle:90-Q>c.touchAngle)}if(r.isScrolling&&i.emit("touchMoveOpposite",p),typeof r.startMoving>"u"&&(f.currentX!==f.startX||f.currentY!==f.startY)&&(r.startMoving=!0),r.isScrolling||p.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;i.allowClick=!1,!c.cssMode&&p.cancelable&&p.preventDefault(),c.touchMoveStopPropagation&&!c.nested&&p.stopPropagation();let A=i.isHorizontal()?N:O,z=i.isHorizontal()?f.currentX-f.previousX:f.currentY-f.previousY;c.oneWayMovement&&(A=Math.abs(A)*(m?1:-1),z=Math.abs(z)*(m?1:-1)),f.diff=A,A*=c.touchRatio,m&&(A=-A,z=-z);const k=i.touchesDirection;i.swipeDirection=A>0?"prev":"next",i.touchesDirection=z>0?"prev":"next";const E=i.params.loop&&!c.cssMode,M=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!r.isMoved){if(E&&M&&i.loopFix({direction:i.swipeDirection}),r.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const Q=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(Q)}r.allowMomentumBounce=!1,c.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",p)}if(new Date().getTime(),c._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&k!==i.touchesDirection&&E&&M&&Math.abs(A)>=1){Object.assign(f,{startX:y,startY:g,currentX:y,currentY:g,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}i.emit("sliderMove",p),r.isMoved=!0,r.currentTranslate=A+r.startTranslate;let w=!0,X=c.resistanceRatio;if(c.touchReleaseOnEdges&&(X=0),A>0?(E&&M&&r.allowThresholdMove&&r.currentTranslate>(c.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-(c.slidesPerView!=="auto"&&i.slides.length-c.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>i.minTranslate()&&(w=!1,c.resistance&&(r.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+r.startTranslate+A)**X))):A<0&&(E&&M&&r.allowThresholdMove&&r.currentTranslate<(c.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+(c.slidesPerView!=="auto"&&i.slides.length-c.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(c.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(c.slidesPerView,10)))}),r.currentTranslate<i.maxTranslate()&&(w=!1,c.resistance&&(r.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-r.startTranslate-A)**X))),w&&(p.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(r.currentTranslate=r.startTranslate),c.threshold>0)if(Math.abs(A)>c.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,f.startX=f.currentX,f.startY=f.currentY,r.currentTranslate=r.startTranslate,f.diff=i.isHorizontal()?f.currentX-f.startX:f.currentY-f.startY;return}}else{r.currentTranslate=r.startTranslate;return}!c.followFinger||c.cssMode||((c.freeMode&&c.freeMode.enabled&&i.freeMode||c.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),c.freeMode&&c.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(r.currentTranslate),i.setTranslate(r.currentTranslate))}function Bg(l){const s=this,i=s.touchEventsData;let r=l;r.originalEvent&&(r=r.originalEvent);let c;if(r.type==="touchend"||r.type==="touchcancel"){if(c=[...r.changedTouches].find(Q=>Q.identifier===i.touchId),!c||c.identifier!==i.touchId)return}else{if(i.touchId!==null||r.pointerId!==i.pointerId)return;c=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(s.browser.isSafari||s.browser.isWebView)))return;i.pointerId=null,i.touchId=null;const{params:m,touches:b,rtlTranslate:p,slidesGrid:h,enabled:y}=s;if(!y||!m.simulateTouch&&r.pointerType==="mouse")return;if(i.allowTouchCallbacks&&s.emit("touchEnd",r),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&m.grabCursor&&s.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}m.grabCursor&&i.isMoved&&i.isTouched&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!1);const g=Cr(),N=g-i.touchStartTime;if(s.allowClick){const Q=r.path||r.composedPath&&r.composedPath();s.updateClickedSlide(Q&&Q[0]||r.target,Q),s.emit("tap click",r),N<300&&g-i.lastClickTime<300&&s.emit("doubleTap doubleClick",r)}if(i.lastClickTime=Cr(),eh(()=>{s.destroyed||(s.allowClick=!0)}),!i.isTouched||!i.isMoved||!s.swipeDirection||b.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let O;if(m.followFinger?O=p?s.translate:-s.translate:O=-i.currentTranslate,m.cssMode)return;if(m.freeMode&&m.freeMode.enabled){s.freeMode.onTouchEnd({currentPos:O});return}const A=O>=-s.maxTranslate()&&!s.params.loop;let z=0,k=s.slidesSizesGrid[0];for(let Q=0;Q<h.length;Q+=Q<m.slidesPerGroupSkip?1:m.slidesPerGroup){const F=Q<m.slidesPerGroupSkip-1?1:m.slidesPerGroup;typeof h[Q+F]<"u"?(A||O>=h[Q]&&O<h[Q+F])&&(z=Q,k=h[Q+F]-h[Q]):(A||O>=h[Q])&&(z=Q,k=h[h.length-1]-h[h.length-2])}let E=null,M=null;m.rewind&&(s.isBeginning?M=m.virtual&&m.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1:s.isEnd&&(E=0));const w=(O-h[z])/k,X=z<m.slidesPerGroupSkip-1?1:m.slidesPerGroup;if(N>m.longSwipesMs){if(!m.longSwipes){s.slideTo(s.activeIndex);return}s.swipeDirection==="next"&&(w>=m.longSwipesRatio?s.slideTo(m.rewind&&s.isEnd?E:z+X):s.slideTo(z)),s.swipeDirection==="prev"&&(w>1-m.longSwipesRatio?s.slideTo(z+X):M!==null&&w<0&&Math.abs(w)>m.longSwipesRatio?s.slideTo(M):s.slideTo(z))}else{if(!m.shortSwipes){s.slideTo(s.activeIndex);return}s.navigation&&(r.target===s.navigation.nextEl||r.target===s.navigation.prevEl)?r.target===s.navigation.nextEl?s.slideTo(z+X):s.slideTo(z):(s.swipeDirection==="next"&&s.slideTo(E!==null?E:z+X),s.swipeDirection==="prev"&&s.slideTo(M!==null?M:z))}}function Qp(){const l=this,{params:s,el:i}=l;if(i&&i.offsetWidth===0)return;s.breakpoints&&l.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:c,snapGrid:f}=l,m=l.virtual&&l.params.virtual.enabled;l.allowSlideNext=!0,l.allowSlidePrev=!0,l.updateSize(),l.updateSlides(),l.updateSlidesClasses();const b=m&&s.loop;(s.slidesPerView==="auto"||s.slidesPerView>1)&&l.isEnd&&!l.isBeginning&&!l.params.centeredSlides&&!b?l.slideTo(l.slides.length-1,0,!1,!0):l.params.loop&&!m?l.slideToLoop(l.realIndex,0,!1,!0):l.slideTo(l.activeIndex,0,!1,!0),l.autoplay&&l.autoplay.running&&l.autoplay.paused&&(clearTimeout(l.autoplay.resizeTimeout),l.autoplay.resizeTimeout=setTimeout(()=>{l.autoplay&&l.autoplay.running&&l.autoplay.paused&&l.autoplay.resume()},500)),l.allowSlidePrev=c,l.allowSlideNext=r,l.params.watchOverflow&&f!==l.snapGrid&&l.checkOverflow()}function kg(l){const s=this;s.enabled&&(s.allowClick||(s.params.preventClicks&&l.preventDefault(),s.params.preventClicksPropagation&&s.animating&&(l.stopPropagation(),l.stopImmediatePropagation())))}function Ug(){const l=this,{wrapperEl:s,rtlTranslate:i,enabled:r}=l;if(!r)return;l.previousTranslate=l.translate,l.isHorizontal()?l.translate=-s.scrollLeft:l.translate=-s.scrollTop,l.translate===0&&(l.translate=0),l.updateActiveIndex(),l.updateSlidesClasses();let c;const f=l.maxTranslate()-l.minTranslate();f===0?c=0:c=(l.translate-l.minTranslate())/f,c!==l.progress&&l.updateProgress(i?-l.translate:l.translate),l.emit("setTranslate",l.translate,!1)}function qg(l){const s=this;zr(s,l.target),!(s.params.cssMode||s.params.slidesPerView!=="auto"&&!s.params.autoHeight)&&s.update()}function jg(){const l=this;l.documentTouchHandlerProceeded||(l.documentTouchHandlerProceeded=!0,l.params.touchReleaseOnEdges&&(l.el.style.touchAction="auto"))}const sh=(l,s)=>{const i=Qt(),{params:r,el:c,wrapperEl:f,device:m}=l,b=!!r.nested,p=s==="on"?"addEventListener":"removeEventListener",h=s;!c||typeof c=="string"||(i[p]("touchstart",l.onDocumentTouchStart,{passive:!1,capture:b}),c[p]("touchstart",l.onTouchStart,{passive:!1}),c[p]("pointerdown",l.onTouchStart,{passive:!1}),i[p]("touchmove",l.onTouchMove,{passive:!1,capture:b}),i[p]("pointermove",l.onTouchMove,{passive:!1,capture:b}),i[p]("touchend",l.onTouchEnd,{passive:!0}),i[p]("pointerup",l.onTouchEnd,{passive:!0}),i[p]("pointercancel",l.onTouchEnd,{passive:!0}),i[p]("touchcancel",l.onTouchEnd,{passive:!0}),i[p]("pointerout",l.onTouchEnd,{passive:!0}),i[p]("pointerleave",l.onTouchEnd,{passive:!0}),i[p]("contextmenu",l.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&c[p]("click",l.onClick,!0),r.cssMode&&f[p]("scroll",l.onScroll),r.updateOnWindowResize?l[h](m.ios||m.android?"resize orientationchange observerUpdate":"resize observerUpdate",Qp,!0):l[h]("observerUpdate",Qp,!0),c[p]("load",l.onLoad,{capture:!0}))};function Gg(){const l=this,{params:s}=l;l.onTouchStart=Rg.bind(l),l.onTouchMove=Lg.bind(l),l.onTouchEnd=Bg.bind(l),l.onDocumentTouchStart=jg.bind(l),s.cssMode&&(l.onScroll=Ug.bind(l)),l.onClick=kg.bind(l),l.onLoad=qg.bind(l),sh(l,"on")}function Yg(){sh(this,"off")}var Vg={attachEvents:Gg,detachEvents:Yg};const Zp=(l,s)=>l.grid&&s.grid&&s.grid.rows>1;function Xg(){const l=this,{realIndex:s,initialized:i,params:r,el:c}=l,f=r.breakpoints;if(!f||f&&Object.keys(f).length===0)return;const m=Qt(),b=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",p=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?l.el:m.querySelector(r.breakpointsBase),h=l.getBreakpoint(f,b,p);if(!h||l.currentBreakpoint===h)return;const g=(h in f?f[h]:void 0)||l.originalParams,N=Zp(l,r),O=Zp(l,g),A=l.params.grabCursor,z=g.grabCursor,k=r.enabled;N&&!O?(c.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),l.emitContainerClasses()):!N&&O&&(c.classList.add(`${r.containerModifierClass}grid`),(g.grid.fill&&g.grid.fill==="column"||!g.grid.fill&&r.grid.fill==="column")&&c.classList.add(`${r.containerModifierClass}grid-column`),l.emitContainerClasses()),A&&!z?l.unsetGrabCursor():!A&&z&&l.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(F=>{if(typeof g[F]>"u")return;const Z=r[F]&&r[F].enabled,L=g[F]&&g[F].enabled;Z&&!L&&l[F].disable(),!Z&&L&&l[F].enable()});const E=g.direction&&g.direction!==r.direction,M=r.loop&&(g.slidesPerView!==r.slidesPerView||E),w=r.loop;E&&i&&l.changeDirection(),Et(l.params,g);const X=l.params.enabled,Q=l.params.loop;Object.assign(l,{allowTouchMove:l.params.allowTouchMove,allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev}),k&&!X?l.disable():!k&&X&&l.enable(),l.currentBreakpoint=h,l.emit("_beforeBreakpoint",g),i&&(M?(l.loopDestroy(),l.loopCreate(s),l.updateSlides()):!w&&Q?(l.loopCreate(s),l.updateSlides()):w&&!Q&&l.loopDestroy()),l.emit("breakpoint",g)}function Qg(l,s="window",i){if(!l||s==="container"&&!i)return;let r=!1;const c=it(),f=s==="window"?c.innerHeight:i.clientHeight,m=Object.keys(l).map(b=>{if(typeof b=="string"&&b.indexOf("@")===0){const p=parseFloat(b.substr(1));return{value:f*p,point:b}}return{value:b,point:b}});m.sort((b,p)=>parseInt(b.value,10)-parseInt(p.value,10));for(let b=0;b<m.length;b+=1){const{point:p,value:h}=m[b];s==="window"?c.matchMedia(`(min-width: ${h}px)`).matches&&(r=p):h<=i.clientWidth&&(r=p)}return r||"max"}var Zg={setBreakpoint:Xg,getBreakpoint:Qg};function Kg(l,s){const i=[];return l.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(c=>{r[c]&&i.push(s+c)}):typeof r=="string"&&i.push(s+r)}),i}function Jg(){const l=this,{classNames:s,params:i,rtl:r,el:c,device:f}=l,m=Kg(["initialized",i.direction,{"free-mode":l.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:r},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:f.android},{ios:f.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);s.push(...m),c.classList.add(...s),l.emitContainerClasses()}function Pg(){const l=this,{el:s,classNames:i}=l;!s||typeof s=="string"||(s.classList.remove(...i),l.emitContainerClasses())}var $g={addClasses:Jg,removeClasses:Pg};function Fg(){const l=this,{isLocked:s,params:i}=l,{slidesOffsetBefore:r}=i;if(r){const c=l.slides.length-1,f=l.slidesGrid[c]+l.slidesSizesGrid[c]+r*2;l.isLocked=l.size>f}else l.isLocked=l.snapGrid.length===1;i.allowSlideNext===!0&&(l.allowSlideNext=!l.isLocked),i.allowSlidePrev===!0&&(l.allowSlidePrev=!l.isLocked),s&&s!==l.isLocked&&(l.isEnd=!1),s!==l.isLocked&&l.emit(l.isLocked?"lock":"unlock")}var Wg={checkOverflow:Fg},bu={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Ig(l,s){return function(r={}){const c=Object.keys(r)[0],f=r[c];if(typeof f!="object"||f===null){Et(s,r);return}if(l[c]===!0&&(l[c]={enabled:!0}),c==="navigation"&&l[c]&&l[c].enabled&&!l[c].prevEl&&!l[c].nextEl&&(l[c].auto=!0),["pagination","scrollbar"].indexOf(c)>=0&&l[c]&&l[c].enabled&&!l[c].el&&(l[c].auto=!0),!(c in l&&"enabled"in f)){Et(s,r);return}typeof l[c]=="object"&&!("enabled"in l[c])&&(l[c].enabled=!0),l[c]||(l[c]={enabled:!1}),Et(s,r)}}const pu={eventsEmitter:$v,update:og,translate:pg,transition:gg,slide:zg,loop:Cg,grabCursor:Ng,events:Vg,breakpoints:Zg,checkOverflow:Wg,classes:$g},hu={};let xu=class pn{constructor(...s){let i,r;s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?r=s[0]:[i,r]=s,r||(r={}),r=Et({},r),i&&!r.el&&(r.el=i);const c=Qt();if(r.el&&typeof r.el=="string"&&c.querySelectorAll(r.el).length>1){const p=[];return c.querySelectorAll(r.el).forEach(h=>{const y=Et({},r,{el:h});p.push(new pn(y))}),p}const f=this;f.__swiper__=!0,f.support=lh(),f.device=ih({userAgent:r.userAgent}),f.browser=rh(),f.eventsListeners={},f.eventsAnyListeners=[],f.modules=[...f.__modules__],r.modules&&Array.isArray(r.modules)&&f.modules.push(...r.modules);const m={};f.modules.forEach(p=>{p({params:r,swiper:f,extendParams:Ig(r,m),on:f.on.bind(f),once:f.once.bind(f),off:f.off.bind(f),emit:f.emit.bind(f)})});const b=Et({},bu,m);return f.params=Et({},b,hu,r),f.originalParams=Et({},f.params),f.passedParams=Et({},r),f.params&&f.params.on&&Object.keys(f.params.on).forEach(p=>{f.on(p,f.params.on[p])}),f.params&&f.params.onAny&&f.onAny(f.params.onAny),Object.assign(f,{enabled:f.params.enabled,el:i,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return f.params.direction==="horizontal"},isVertical(){return f.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:f.params.allowSlideNext,allowSlidePrev:f.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:f.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:f.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),f.emit("_swiper"),f.params.init&&f.init(),f}getDirectionLabel(s){return this.isHorizontal()?s:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[s]}getSlideIndex(s){const{slidesEl:i,params:r}=this,c=Xt(i,`.${r.slideClass}, swiper-slide`),f=Nr(c[0]);return Nr(s)-f}getSlideIndexByData(s){return this.getSlideIndex(this.slides.find(i=>i.getAttribute("data-swiper-slide-index")*1===s))}getSlideIndexWhenGrid(s){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?s=Math.floor(s/this.params.grid.rows):this.params.grid.fill==="row"&&(s=s%Math.ceil(this.slides.length/this.params.grid.rows))),s}recalcSlides(){const s=this,{slidesEl:i,params:r}=s;s.slides=Xt(i,`.${r.slideClass}, swiper-slide`)}enable(){const s=this;s.enabled||(s.enabled=!0,s.params.grabCursor&&s.setGrabCursor(),s.emit("enable"))}disable(){const s=this;s.enabled&&(s.enabled=!1,s.params.grabCursor&&s.unsetGrabCursor(),s.emit("disable"))}setProgress(s,i){const r=this;s=Math.min(Math.max(s,0),1);const c=r.minTranslate(),m=(r.maxTranslate()-c)*s+c;r.translateTo(m,typeof i>"u"?0:i),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const s=this;if(!s.params._emitClasses||!s.el)return;const i=s.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(s.params.containerModifierClass)===0);s.emit("_containerClasses",i.join(" "))}getSlideClasses(s){const i=this;return i.destroyed?"":s.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){const s=this;if(!s.params._emitClasses||!s.el)return;const i=[];s.slides.forEach(r=>{const c=s.getSlideClasses(r);i.push({slideEl:r,classNames:c}),s.emit("_slideClass",r,c)}),s.emit("_slideClasses",i)}slidesPerViewDynamic(s="current",i=!1){const r=this,{params:c,slides:f,slidesGrid:m,slidesSizesGrid:b,size:p,activeIndex:h}=r;let y=1;if(typeof c.slidesPerView=="number")return c.slidesPerView;if(c.centeredSlides){let g=f[h]?Math.ceil(f[h].swiperSlideSize):0,N;for(let O=h+1;O<f.length;O+=1)f[O]&&!N&&(g+=Math.ceil(f[O].swiperSlideSize),y+=1,g>p&&(N=!0));for(let O=h-1;O>=0;O-=1)f[O]&&!N&&(g+=f[O].swiperSlideSize,y+=1,g>p&&(N=!0))}else if(s==="current")for(let g=h+1;g<f.length;g+=1)(i?m[g]+b[g]-m[h]<p:m[g]-m[h]<p)&&(y+=1);else for(let g=h-1;g>=0;g-=1)m[h]-m[g]<p&&(y+=1);return y}update(){const s=this;if(!s||s.destroyed)return;const{snapGrid:i,params:r}=s;r.breakpoints&&s.setBreakpoint(),[...s.el.querySelectorAll('[loading="lazy"]')].forEach(m=>{m.complete&&zr(s,m)}),s.updateSize(),s.updateSlides(),s.updateProgress(),s.updateSlidesClasses();function c(){const m=s.rtlTranslate?s.translate*-1:s.translate,b=Math.min(Math.max(m,s.maxTranslate()),s.minTranslate());s.setTranslate(b),s.updateActiveIndex(),s.updateSlidesClasses()}let f;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)c(),r.autoHeight&&s.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&s.isEnd&&!r.centeredSlides){const m=s.virtual&&r.virtual.enabled?s.virtual.slides:s.slides;f=s.slideTo(m.length-1,0,!1,!0)}else f=s.slideTo(s.activeIndex,0,!1,!0);f||c()}r.watchOverflow&&i!==s.snapGrid&&s.checkOverflow(),s.emit("update")}changeDirection(s,i=!0){const r=this,c=r.params.direction;return s||(s=c==="horizontal"?"vertical":"horizontal"),s===c||s!=="horizontal"&&s!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${c}`),r.el.classList.add(`${r.params.containerModifierClass}${s}`),r.emitContainerClasses(),r.params.direction=s,r.slides.forEach(f=>{s==="vertical"?f.style.width="":f.style.height=""}),r.emit("changeDirection"),i&&r.update()),r}changeLanguageDirection(s){const i=this;i.rtl&&s==="rtl"||!i.rtl&&s==="ltr"||(i.rtl=s==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(s){const i=this;if(i.mounted)return!0;let r=s||i.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=i,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);const c=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;let m=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(c()):Xt(r,c())[0];return!m&&i.params.createElements&&(m=wr("div",i.params.wrapperClass),r.append(m),Xt(r,`.${i.params.slideClass}`).forEach(b=>{m.append(b)})),Object.assign(i,{el:r,wrapperEl:m,slidesEl:i.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:m,hostEl:i.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Gn(r,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Gn(r,"direction")==="rtl"),wrongRTL:Gn(m,"display")==="-webkit-box"}),!0}init(s){const i=this;if(i.initialized||i.mount(s)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(void 0,!0),i.attachEvents();const c=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&c.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),c.forEach(f=>{f.complete?zr(i,f):f.addEventListener("load",m=>{zr(i,m.target)})}),gu(i),i.initialized=!0,gu(i),i.emit("init"),i.emit("afterInit"),i}destroy(s=!0,i=!0){const r=this,{params:c,el:f,wrapperEl:m,slides:b}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),c.loop&&r.loopDestroy(),i&&(r.removeClasses(),f&&typeof f!="string"&&f.removeAttribute("style"),m&&m.removeAttribute("style"),b&&b.length&&b.forEach(p=>{p.classList.remove(c.slideVisibleClass,c.slideFullyVisibleClass,c.slideActiveClass,c.slideNextClass,c.slidePrevClass),p.removeAttribute("style"),p.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(p=>{r.off(p)}),s!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),Bv(r)),r.destroyed=!0),null}static extendDefaults(s){Et(hu,s)}static get extendedDefaults(){return hu}static get defaults(){return bu}static installModule(s){pn.prototype.__modules__||(pn.prototype.__modules__=[]);const i=pn.prototype.__modules__;typeof s=="function"&&i.indexOf(s)<0&&i.push(s)}static use(s){return Array.isArray(s)?(s.forEach(i=>pn.installModule(i)),pn):(pn.installModule(s),pn)}};Object.keys(pu).forEach(l=>{Object.keys(pu[l]).forEach(s=>{xu.prototype[s]=pu[l][s]})});xu.use([Jv,Pv]);const uh=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function oa(l){return typeof l=="object"&&l!==null&&l.constructor&&Object.prototype.toString.call(l).slice(8,-1)==="Object"&&!l.__swiper__}function Ja(l,s){const i=["__proto__","constructor","prototype"];Object.keys(s).filter(r=>i.indexOf(r)<0).forEach(r=>{typeof l[r]>"u"?l[r]=s[r]:oa(s[r])&&oa(l[r])&&Object.keys(s[r]).length>0?s[r].__swiper__?l[r]=s[r]:Ja(l[r],s[r]):l[r]=s[r]})}function ch(l={}){return l.navigation&&typeof l.navigation.nextEl>"u"&&typeof l.navigation.prevEl>"u"}function fh(l={}){return l.pagination&&typeof l.pagination.el>"u"}function dh(l={}){return l.scrollbar&&typeof l.scrollbar.el>"u"}function ph(l=""){const s=l.split(" ").map(r=>r.trim()).filter(r=>!!r),i=[];return s.forEach(r=>{i.indexOf(r)<0&&i.push(r)}),i.join(" ")}function eb(l=""){return l?l.includes("swiper-wrapper")?l:`swiper-wrapper ${l}`:"swiper-wrapper"}function tb({swiper:l,slides:s,passedParams:i,changedParams:r,nextEl:c,prevEl:f,scrollbarEl:m,paginationEl:b}){const p=r.filter(L=>L!=="children"&&L!=="direction"&&L!=="wrapperClass"),{params:h,pagination:y,navigation:g,scrollbar:N,virtual:O,thumbs:A}=l;let z,k,E,M,w,X,Q,F;r.includes("thumbs")&&i.thumbs&&i.thumbs.swiper&&!i.thumbs.swiper.destroyed&&h.thumbs&&(!h.thumbs.swiper||h.thumbs.swiper.destroyed)&&(z=!0),r.includes("controller")&&i.controller&&i.controller.control&&h.controller&&!h.controller.control&&(k=!0),r.includes("pagination")&&i.pagination&&(i.pagination.el||b)&&(h.pagination||h.pagination===!1)&&y&&!y.el&&(E=!0),r.includes("scrollbar")&&i.scrollbar&&(i.scrollbar.el||m)&&(h.scrollbar||h.scrollbar===!1)&&N&&!N.el&&(M=!0),r.includes("navigation")&&i.navigation&&(i.navigation.prevEl||f)&&(i.navigation.nextEl||c)&&(h.navigation||h.navigation===!1)&&g&&!g.prevEl&&!g.nextEl&&(w=!0);const Z=L=>{l[L]&&(l[L].destroy(),L==="navigation"?(l.isElement&&(l[L].prevEl.remove(),l[L].nextEl.remove()),h[L].prevEl=void 0,h[L].nextEl=void 0,l[L].prevEl=void 0,l[L].nextEl=void 0):(l.isElement&&l[L].el.remove(),h[L].el=void 0,l[L].el=void 0))};r.includes("loop")&&l.isElement&&(h.loop&&!i.loop?X=!0:!h.loop&&i.loop?Q=!0:F=!0),p.forEach(L=>{if(oa(h[L])&&oa(i[L]))Object.assign(h[L],i[L]),(L==="navigation"||L==="pagination"||L==="scrollbar")&&"enabled"in i[L]&&!i[L].enabled&&Z(L);else{const I=i[L];(I===!0||I===!1)&&(L==="navigation"||L==="pagination"||L==="scrollbar")?I===!1&&Z(L):h[L]=i[L]}}),p.includes("controller")&&!k&&l.controller&&l.controller.control&&h.controller&&h.controller.control&&(l.controller.control=h.controller.control),r.includes("children")&&s&&O&&h.virtual.enabled?(O.slides=s,O.update(!0)):r.includes("virtual")&&O&&h.virtual.enabled&&(s&&(O.slides=s),O.update(!0)),r.includes("children")&&s&&h.loop&&(F=!0),z&&A.init()&&A.update(!0),k&&(l.controller.control=h.controller.control),E&&(l.isElement&&(!b||typeof b=="string")&&(b=document.createElement("div"),b.classList.add("swiper-pagination"),b.part.add("pagination"),l.el.appendChild(b)),b&&(h.pagination.el=b),y.init(),y.render(),y.update()),M&&(l.isElement&&(!m||typeof m=="string")&&(m=document.createElement("div"),m.classList.add("swiper-scrollbar"),m.part.add("scrollbar"),l.el.appendChild(m)),m&&(h.scrollbar.el=m),N.init(),N.updateSize(),N.setTranslate()),w&&(l.isElement&&((!c||typeof c=="string")&&(c=document.createElement("div"),c.classList.add("swiper-button-next"),Hr(c,l.navigation.arrowSvg),c.part.add("button-next"),l.el.appendChild(c)),(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-button-prev"),Hr(f,l.navigation.arrowSvg),f.part.add("button-prev"),l.el.appendChild(f))),c&&(h.navigation.nextEl=c),f&&(h.navigation.prevEl=f),g.init(),g.update()),r.includes("allowSlideNext")&&(l.allowSlideNext=i.allowSlideNext),r.includes("allowSlidePrev")&&(l.allowSlidePrev=i.allowSlidePrev),r.includes("direction")&&l.changeDirection(i.direction,!1),(X||F)&&l.loopDestroy(),(Q||F)&&l.loopCreate(),l.update()}function nb(l={},s=!0){const i={on:{}},r={},c={};Ja(i,bu),i._emitClasses=!0,i.init=!1;const f={},m=uh.map(p=>p.replace(/_/,"")),b=Object.assign({},l);return Object.keys(b).forEach(p=>{typeof l[p]>"u"||(m.indexOf(p)>=0?oa(l[p])?(i[p]={},c[p]={},Ja(i[p],l[p]),Ja(c[p],l[p])):(i[p]=l[p],c[p]=l[p]):p.search(/on[A-Z]/)===0&&typeof l[p]=="function"?s?r[`${p[2].toLowerCase()}${p.substr(3)}`]=l[p]:i.on[`${p[2].toLowerCase()}${p.substr(3)}`]=l[p]:f[p]=l[p])}),["navigation","pagination","scrollbar"].forEach(p=>{i[p]===!0&&(i[p]={}),i[p]===!1&&delete i[p]}),{params:i,passedParams:c,rest:f,events:r}}function ab({el:l,nextEl:s,prevEl:i,paginationEl:r,scrollbarEl:c,swiper:f},m){ch(m)&&s&&i&&(f.params.navigation.nextEl=s,f.originalParams.navigation.nextEl=s,f.params.navigation.prevEl=i,f.originalParams.navigation.prevEl=i),fh(m)&&r&&(f.params.pagination.el=r,f.originalParams.pagination.el=r),dh(m)&&c&&(f.params.scrollbar.el=c,f.originalParams.scrollbar.el=c),f.init(l)}function lb(l,s,i,r,c){const f=[];if(!s)return f;const m=p=>{f.indexOf(p)<0&&f.push(p)};if(i&&r){const p=r.map(c),h=i.map(c);p.join("")!==h.join("")&&m("children"),r.length!==i.length&&m("children")}return uh.filter(p=>p[0]==="_").map(p=>p.replace(/_/,"")).forEach(p=>{if(p in l&&p in s)if(oa(l[p])&&oa(s[p])){const h=Object.keys(l[p]),y=Object.keys(s[p]);h.length!==y.length?m(p):(h.forEach(g=>{l[p][g]!==s[p][g]&&m(p)}),y.forEach(g=>{l[p][g]!==s[p][g]&&m(p)}))}else l[p]!==s[p]&&m(p)}),f}const ib=l=>{!l||l.destroyed||!l.params.virtual||l.params.virtual&&!l.params.virtual.enabled||(l.updateSlides(),l.updateProgress(),l.updateSlidesClasses(),l.emit("_virtualUpdated"),l.parallax&&l.params.parallax&&l.params.parallax.enabled&&l.parallax.setTranslate())};function Rr(){return Rr=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(l[r]=i[r])}return l},Rr.apply(this,arguments)}function hh(l){return l.type&&l.type.displayName&&l.type.displayName.includes("SwiperSlide")}function mh(l){const s=[];return ie.Children.toArray(l).forEach(i=>{hh(i)?s.push(i):i.props&&i.props.children&&mh(i.props.children).forEach(r=>s.push(r))}),s}function rb(l){const s=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return ie.Children.toArray(l).forEach(r=>{if(hh(r))s.push(r);else if(r.props&&r.props.slot&&i[r.props.slot])i[r.props.slot].push(r);else if(r.props&&r.props.children){const c=mh(r.props.children);c.length>0?c.forEach(f=>s.push(f)):i["container-end"].push(r)}else i["container-end"].push(r)}),{slides:s,slots:i}}function ob(l,s,i){if(!i)return null;const r=y=>{let g=y;return y<0?g=s.length+y:g>=s.length&&(g=g-s.length),g},c=l.isHorizontal()?{[l.rtlTranslate?"right":"left"]:`${i.offset}px`}:{top:`${i.offset}px`},{from:f,to:m}=i,b=l.params.loop?-s.length:0,p=l.params.loop?s.length*2:s.length,h=[];for(let y=b;y<p;y+=1)y>=f&&y<=m&&h.push(s[r(y)]);return h.map((y,g)=>ie.cloneElement(y,{swiper:l,style:c,key:y.props.virtualIndex||y.key||`slide-${g}`}))}function Kl(l,s){return typeof window>"u"?He.useEffect(l,s):He.useLayoutEffect(l,s)}const Kp=He.createContext(null),sb=He.createContext(null),vh=He.forwardRef(({className:l,tag:s="div",wrapperTag:i="div",children:r,onSwiper:c,...f}={},m)=>{let b=!1;const[p,h]=He.useState("swiper"),[y,g]=He.useState(null),[N,O]=He.useState(!1),A=He.useRef(!1),z=He.useRef(null),k=He.useRef(null),E=He.useRef(null),M=He.useRef(null),w=He.useRef(null),X=He.useRef(null),Q=He.useRef(null),F=He.useRef(null),{params:Z,passedParams:L,rest:I,events:J}=nb(f),{slides:K,slots:P}=rb(r),se=()=>{O(!N)};Object.assign(Z.on,{_containerClasses(j,W){h(W)}});const re=()=>{Object.assign(Z.on,J),b=!0;const j={...Z};if(delete j.wrapperClass,k.current=new xu(j),k.current.virtual&&k.current.params.virtual.enabled){k.current.virtual.slides=K;const W={cache:!1,slides:K,renderExternal:g,renderExternalUpdate:!1};Ja(k.current.params.virtual,W),Ja(k.current.originalParams.virtual,W)}};z.current||re(),k.current&&k.current.on("_beforeBreakpoint",se);const me=()=>{b||!J||!k.current||Object.keys(J).forEach(j=>{k.current.on(j,J[j])})},B=()=>{!J||!k.current||Object.keys(J).forEach(j=>{k.current.off(j,J[j])})};He.useEffect(()=>()=>{k.current&&k.current.off("_beforeBreakpoint",se)}),He.useEffect(()=>{!A.current&&k.current&&(k.current.emitSlidesClasses(),A.current=!0)}),Kl(()=>{if(m&&(m.current=z.current),!!z.current)return k.current.destroyed&&re(),ab({el:z.current,nextEl:w.current,prevEl:X.current,paginationEl:Q.current,scrollbarEl:F.current,swiper:k.current},Z),c&&!k.current.destroyed&&c(k.current),()=>{k.current&&!k.current.destroyed&&k.current.destroy(!0,!1)}},[]),Kl(()=>{me();const j=lb(L,E.current,K,M.current,W=>W.key);return E.current=L,M.current=K,j.length&&k.current&&!k.current.destroyed&&tb({swiper:k.current,slides:K,passedParams:L,changedParams:j,nextEl:w.current,prevEl:X.current,scrollbarEl:F.current,paginationEl:Q.current}),()=>{B()}}),Kl(()=>{ib(k.current)},[y]);function Y(){return Z.virtual?ob(k.current,K,y):K.map((j,W)=>ie.cloneElement(j,{swiper:k.current,swiperSlideIndex:W}))}return ie.createElement(s,Rr({ref:z,className:ph(`${p}${l?` ${l}`:""}`)},I),ie.createElement(sb.Provider,{value:k.current},P["container-start"],ie.createElement(i,{className:eb(Z.wrapperClass)},P["wrapper-start"],Y(),P["wrapper-end"]),ch(Z)&&ie.createElement(ie.Fragment,null,ie.createElement("div",{ref:X,className:"swiper-button-prev"}),ie.createElement("div",{ref:w,className:"swiper-button-next"})),dh(Z)&&ie.createElement("div",{ref:F,className:"swiper-scrollbar"}),fh(Z)&&ie.createElement("div",{ref:Q,className:"swiper-pagination"}),P["container-end"]))});vh.displayName="Swiper";const gh=He.forwardRef(({tag:l="div",children:s,className:i="",swiper:r,zoom:c,lazy:f,virtualIndex:m,swiperSlideIndex:b,...p}={},h)=>{const y=He.useRef(null),[g,N]=He.useState("swiper-slide"),[O,A]=He.useState(!1);function z(w,X,Q){X===y.current&&N(Q)}Kl(()=>{if(typeof b<"u"&&(y.current.swiperSlideIndex=b),h&&(h.current=y.current),!(!y.current||!r)){if(r.destroyed){g!=="swiper-slide"&&N("swiper-slide");return}return r.on("_slideClass",z),()=>{r&&r.off("_slideClass",z)}}}),Kl(()=>{r&&y.current&&!r.destroyed&&N(r.getSlideClasses(y.current))},[r]);const k={isActive:g.indexOf("swiper-slide-active")>=0,isVisible:g.indexOf("swiper-slide-visible")>=0,isPrev:g.indexOf("swiper-slide-prev")>=0,isNext:g.indexOf("swiper-slide-next")>=0},E=()=>typeof s=="function"?s(k):s,M=()=>{A(!0)};return ie.createElement(l,Rr({ref:y,className:ph(`${g}${i?` ${i}`:""}`),"data-swiper-slide-index":m,onLoad:M},p),c&&ie.createElement(Kp.Provider,{value:k},ie.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof c=="number"?c:void 0},E(),f&&!O&&ie.createElement("div",{className:"swiper-lazy-preloader",ref:w=>{w&&(w.lazyPreloaderManaged=!0)}}))),!c&&ie.createElement(Kp.Provider,{value:k},E(),f&&!O&&ie.createElement("div",{className:"swiper-lazy-preloader",ref:w=>{w&&(w.lazyPreloaderManaged=!0)}})))});gh.displayName="SwiperSlide";function ub(l,s,i,r){return l.params.createElements&&Object.keys(r).forEach(c=>{if(!i[c]&&i.auto===!0){let f=Xt(l.el,`.${r[c]}`)[0];f||(f=wr("div",r[c]),f.className=r[c],l.el.append(f)),i[c]=f,s[c]=f}}),i}function Ql(l=""){return`.${l.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function cb({swiper:l,extendParams:s,on:i,emit:r}){const c="swiper-pagination";s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:E=>E,formatFractionTotal:E=>E,bulletClass:`${c}-bullet`,bulletActiveClass:`${c}-bullet-active`,modifierClass:`${c}-`,currentClass:`${c}-current`,totalClass:`${c}-total`,hiddenClass:`${c}-hidden`,progressbarFillClass:`${c}-progressbar-fill`,progressbarOppositeClass:`${c}-progressbar-opposite`,clickableClass:`${c}-clickable`,lockClass:`${c}-lock`,horizontalClass:`${c}-horizontal`,verticalClass:`${c}-vertical`,paginationDisabledClass:`${c}-disabled`}}),l.pagination={el:null,bullets:[]};let f,m=0;function b(){return!l.params.pagination.el||!l.pagination.el||Array.isArray(l.pagination.el)&&l.pagination.el.length===0}function p(E,M){const{bulletActiveClass:w}=l.params.pagination;E&&(E=E[`${M==="prev"?"previous":"next"}ElementSibling`],E&&(E.classList.add(`${w}-${M}`),E=E[`${M==="prev"?"previous":"next"}ElementSibling`],E&&E.classList.add(`${w}-${M}-${M}`)))}function h(E,M,w){if(E=E%w,M=M%w,M===E+1)return"next";if(M===E-1)return"previous"}function y(E){const M=E.target.closest(Ql(l.params.pagination.bulletClass));if(!M)return;E.preventDefault();const w=Nr(M)*l.params.slidesPerGroup;if(l.params.loop){if(l.realIndex===w)return;const X=h(l.realIndex,w,l.slides.length);X==="next"?l.slideNext():X==="previous"?l.slidePrev():l.slideToLoop(w)}else l.slideTo(w)}function g(){const E=l.rtl,M=l.params.pagination;if(b())return;let w=l.pagination.el;w=dn(w);let X,Q;const F=l.virtual&&l.params.virtual.enabled?l.virtual.slides.length:l.slides.length,Z=l.params.loop?Math.ceil(F/l.params.slidesPerGroup):l.snapGrid.length;if(l.params.loop?(Q=l.previousRealIndex||0,X=l.params.slidesPerGroup>1?Math.floor(l.realIndex/l.params.slidesPerGroup):l.realIndex):typeof l.snapIndex<"u"?(X=l.snapIndex,Q=l.previousSnapIndex):(Q=l.previousIndex||0,X=l.activeIndex||0),M.type==="bullets"&&l.pagination.bullets&&l.pagination.bullets.length>0){const L=l.pagination.bullets;let I,J,K;if(M.dynamicBullets&&(f=vu(L[0],l.isHorizontal()?"width":"height"),w.forEach(P=>{P.style[l.isHorizontal()?"width":"height"]=`${f*(M.dynamicMainBullets+4)}px`}),M.dynamicMainBullets>1&&Q!==void 0&&(m+=X-(Q||0),m>M.dynamicMainBullets-1?m=M.dynamicMainBullets-1:m<0&&(m=0)),I=Math.max(X-m,0),J=I+(Math.min(L.length,M.dynamicMainBullets)-1),K=(J+I)/2),L.forEach(P=>{const se=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(re=>`${M.bulletActiveClass}${re}`)].map(re=>typeof re=="string"&&re.includes(" ")?re.split(" "):re).flat();P.classList.remove(...se)}),w.length>1)L.forEach(P=>{const se=Nr(P);se===X?P.classList.add(...M.bulletActiveClass.split(" ")):l.isElement&&P.setAttribute("part","bullet"),M.dynamicBullets&&(se>=I&&se<=J&&P.classList.add(...`${M.bulletActiveClass}-main`.split(" ")),se===I&&p(P,"prev"),se===J&&p(P,"next"))});else{const P=L[X];if(P&&P.classList.add(...M.bulletActiveClass.split(" ")),l.isElement&&L.forEach((se,re)=>{se.setAttribute("part",re===X?"bullet-active":"bullet")}),M.dynamicBullets){const se=L[I],re=L[J];for(let me=I;me<=J;me+=1)L[me]&&L[me].classList.add(...`${M.bulletActiveClass}-main`.split(" "));p(se,"prev"),p(re,"next")}}if(M.dynamicBullets){const P=Math.min(L.length,M.dynamicMainBullets+4),se=(f*P-f)/2-K*f,re=E?"right":"left";L.forEach(me=>{me.style[l.isHorizontal()?re:"top"]=`${se}px`})}}w.forEach((L,I)=>{if(M.type==="fraction"&&(L.querySelectorAll(Ql(M.currentClass)).forEach(J=>{J.textContent=M.formatFractionCurrent(X+1)}),L.querySelectorAll(Ql(M.totalClass)).forEach(J=>{J.textContent=M.formatFractionTotal(Z)})),M.type==="progressbar"){let J;M.progressbarOpposite?J=l.isHorizontal()?"vertical":"horizontal":J=l.isHorizontal()?"horizontal":"vertical";const K=(X+1)/Z;let P=1,se=1;J==="horizontal"?P=K:se=K,L.querySelectorAll(Ql(M.progressbarFillClass)).forEach(re=>{re.style.transform=`translate3d(0,0,0) scaleX(${P}) scaleY(${se})`,re.style.transitionDuration=`${l.params.speed}ms`})}M.type==="custom"&&M.renderCustom?(Hr(L,M.renderCustom(l,X+1,Z)),I===0&&r("paginationRender",L)):(I===0&&r("paginationRender",L),r("paginationUpdate",L)),l.params.watchOverflow&&l.enabled&&L.classList[l.isLocked?"add":"remove"](M.lockClass)})}function N(){const E=l.params.pagination;if(b())return;const M=l.virtual&&l.params.virtual.enabled?l.virtual.slides.length:l.grid&&l.params.grid.rows>1?l.slides.length/Math.ceil(l.params.grid.rows):l.slides.length;let w=l.pagination.el;w=dn(w);let X="";if(E.type==="bullets"){let Q=l.params.loop?Math.ceil(M/l.params.slidesPerGroup):l.snapGrid.length;l.params.freeMode&&l.params.freeMode.enabled&&Q>M&&(Q=M);for(let F=0;F<Q;F+=1)E.renderBullet?X+=E.renderBullet.call(l,F,E.bulletClass):X+=`<${E.bulletElement} ${l.isElement?'part="bullet"':""} class="${E.bulletClass}"></${E.bulletElement}>`}E.type==="fraction"&&(E.renderFraction?X=E.renderFraction.call(l,E.currentClass,E.totalClass):X=`<span class="${E.currentClass}"></span> / <span class="${E.totalClass}"></span>`),E.type==="progressbar"&&(E.renderProgressbar?X=E.renderProgressbar.call(l,E.progressbarFillClass):X=`<span class="${E.progressbarFillClass}"></span>`),l.pagination.bullets=[],w.forEach(Q=>{E.type!=="custom"&&Hr(Q,X||""),E.type==="bullets"&&l.pagination.bullets.push(...Q.querySelectorAll(Ql(E.bulletClass)))}),E.type!=="custom"&&r("paginationRender",w[0])}function O(){l.params.pagination=ub(l,l.originalParams.pagination,l.params.pagination,{el:"swiper-pagination"});const E=l.params.pagination;if(!E.el)return;let M;typeof E.el=="string"&&l.isElement&&(M=l.el.querySelector(E.el)),!M&&typeof E.el=="string"&&(M=[...document.querySelectorAll(E.el)]),M||(M=E.el),!(!M||M.length===0)&&(l.params.uniqueNavElements&&typeof E.el=="string"&&Array.isArray(M)&&M.length>1&&(M=[...l.el.querySelectorAll(E.el)],M.length>1&&(M=M.find(w=>ah(w,".swiper")[0]===l.el))),Array.isArray(M)&&M.length===1&&(M=M[0]),Object.assign(l.pagination,{el:M}),M=dn(M),M.forEach(w=>{E.type==="bullets"&&E.clickable&&w.classList.add(...(E.clickableClass||"").split(" ")),w.classList.add(E.modifierClass+E.type),w.classList.add(l.isHorizontal()?E.horizontalClass:E.verticalClass),E.type==="bullets"&&E.dynamicBullets&&(w.classList.add(`${E.modifierClass}${E.type}-dynamic`),m=0,E.dynamicMainBullets<1&&(E.dynamicMainBullets=1)),E.type==="progressbar"&&E.progressbarOpposite&&w.classList.add(E.progressbarOppositeClass),E.clickable&&w.addEventListener("click",y),l.enabled||w.classList.add(E.lockClass)}))}function A(){const E=l.params.pagination;if(b())return;let M=l.pagination.el;M&&(M=dn(M),M.forEach(w=>{w.classList.remove(E.hiddenClass),w.classList.remove(E.modifierClass+E.type),w.classList.remove(l.isHorizontal()?E.horizontalClass:E.verticalClass),E.clickable&&(w.classList.remove(...(E.clickableClass||"").split(" ")),w.removeEventListener("click",y))})),l.pagination.bullets&&l.pagination.bullets.forEach(w=>w.classList.remove(...E.bulletActiveClass.split(" ")))}i("changeDirection",()=>{if(!l.pagination||!l.pagination.el)return;const E=l.params.pagination;let{el:M}=l.pagination;M=dn(M),M.forEach(w=>{w.classList.remove(E.horizontalClass,E.verticalClass),w.classList.add(l.isHorizontal()?E.horizontalClass:E.verticalClass)})}),i("init",()=>{l.params.pagination.enabled===!1?k():(O(),N(),g())}),i("activeIndexChange",()=>{typeof l.snapIndex>"u"&&g()}),i("snapIndexChange",()=>{g()}),i("snapGridLengthChange",()=>{N(),g()}),i("destroy",()=>{A()}),i("enable disable",()=>{let{el:E}=l.pagination;E&&(E=dn(E),E.forEach(M=>M.classList[l.enabled?"remove":"add"](l.params.pagination.lockClass)))}),i("lock unlock",()=>{g()}),i("click",(E,M)=>{const w=M.target,X=dn(l.pagination.el);if(l.params.pagination.el&&l.params.pagination.hideOnClick&&X&&X.length>0&&!w.classList.contains(l.params.pagination.bulletClass)){if(l.navigation&&(l.navigation.nextEl&&w===l.navigation.nextEl||l.navigation.prevEl&&w===l.navigation.prevEl))return;const Q=X[0].classList.contains(l.params.pagination.hiddenClass);r(Q===!0?"paginationShow":"paginationHide"),X.forEach(F=>F.classList.toggle(l.params.pagination.hiddenClass))}});const z=()=>{l.el.classList.remove(l.params.pagination.paginationDisabledClass);let{el:E}=l.pagination;E&&(E=dn(E),E.forEach(M=>M.classList.remove(l.params.pagination.paginationDisabledClass))),O(),N(),g()},k=()=>{l.el.classList.add(l.params.pagination.paginationDisabledClass);let{el:E}=l.pagination;E&&(E=dn(E),E.forEach(M=>M.classList.add(l.params.pagination.paginationDisabledClass))),A()};Object.assign(l.pagination,{enable:z,disable:k,render:N,update:g,init:O,destroy:A})}function fb({swiper:l,extendParams:s,on:i,emit:r,params:c}){l.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let f,m,b=c&&c.autoplay?c.autoplay.delay:3e3,p=c&&c.autoplay?c.autoplay.delay:3e3,h,y=new Date().getTime(),g,N,O,A,z,k;function E(Y){!l||l.destroyed||!l.wrapperEl||Y.target===l.wrapperEl&&(l.wrapperEl.removeEventListener("transitionend",E),!(k||Y.detail&&Y.detail.bySwiperTouchMove)&&I())}const M=()=>{if(l.destroyed||!l.autoplay.running)return;l.autoplay.paused?g=!0:g&&(p=h,g=!1);const Y=l.autoplay.paused?h:y+p-new Date().getTime();l.autoplay.timeLeft=Y,r("autoplayTimeLeft",Y,Y/b),m=requestAnimationFrame(()=>{M()})},w=()=>{let Y;return l.virtual&&l.params.virtual.enabled?Y=l.slides.find(W=>W.classList.contains("swiper-slide-active")):Y=l.slides[l.activeIndex],Y?parseInt(Y.getAttribute("data-swiper-autoplay"),10):void 0},X=()=>{let Y=l.params.autoplay.delay;const j=w();return!Number.isNaN(j)&&j>0&&(Y=j),Y},Q=Y=>{if(l.destroyed||!l.autoplay.running)return;cancelAnimationFrame(m),M();let j=Y;typeof j>"u"&&(j=X(),b=j,p=j),h=j;const W=l.params.speed,ue=()=>{!l||l.destroyed||(l.params.autoplay.reverseDirection?!l.isBeginning||l.params.loop||l.params.rewind?(l.slidePrev(W,!0,!0),r("autoplay")):l.params.autoplay.stopOnLastSlide||(l.slideTo(l.slides.length-1,W,!0,!0),r("autoplay")):!l.isEnd||l.params.loop||l.params.rewind?(l.slideNext(W,!0,!0),r("autoplay")):l.params.autoplay.stopOnLastSlide||(l.slideTo(0,W,!0,!0),r("autoplay")),l.params.cssMode&&(y=new Date().getTime(),requestAnimationFrame(()=>{Q()})))};return j>0?(clearTimeout(f),f=setTimeout(()=>{ue()},j)):requestAnimationFrame(()=>{ue()}),j},F=()=>{y=new Date().getTime(),l.autoplay.running=!0,Q(),r("autoplayStart")},Z=()=>{l.autoplay.running=!1,clearTimeout(f),cancelAnimationFrame(m),r("autoplayStop")},L=(Y,j)=>{if(l.destroyed||!l.autoplay.running)return;clearTimeout(f),Y||(z=!0);const W=()=>{r("autoplayPause"),l.params.autoplay.waitForTransition?l.wrapperEl.addEventListener("transitionend",E):I()};if(l.autoplay.paused=!0,j){W();return}h=(h||l.params.autoplay.delay)-(new Date().getTime()-y),!(l.isEnd&&h<0&&!l.params.loop)&&(h<0&&(h=0),W())},I=()=>{l.isEnd&&h<0&&!l.params.loop||l.destroyed||!l.autoplay.running||(y=new Date().getTime(),z?(z=!1,Q(h)):Q(),l.autoplay.paused=!1,r("autoplayResume"))},J=()=>{if(l.destroyed||!l.autoplay.running)return;const Y=Qt();Y.visibilityState==="hidden"&&(z=!0,L(!0)),Y.visibilityState==="visible"&&I()},K=Y=>{Y.pointerType==="mouse"&&(z=!0,k=!0,!(l.animating||l.autoplay.paused)&&L(!0))},P=Y=>{Y.pointerType==="mouse"&&(k=!1,l.autoplay.paused&&I())},se=()=>{l.params.autoplay.pauseOnMouseEnter&&(l.el.addEventListener("pointerenter",K),l.el.addEventListener("pointerleave",P))},re=()=>{l.el&&typeof l.el!="string"&&(l.el.removeEventListener("pointerenter",K),l.el.removeEventListener("pointerleave",P))},me=()=>{Qt().addEventListener("visibilitychange",J)},B=()=>{Qt().removeEventListener("visibilitychange",J)};i("init",()=>{l.params.autoplay.enabled&&(se(),me(),F())}),i("destroy",()=>{re(),B(),l.autoplay.running&&Z()}),i("_freeModeStaticRelease",()=>{(O||z)&&I()}),i("_freeModeNoMomentumRelease",()=>{l.params.autoplay.disableOnInteraction?Z():L(!0,!0)}),i("beforeTransitionStart",(Y,j,W)=>{l.destroyed||!l.autoplay.running||(W||!l.params.autoplay.disableOnInteraction?L(!0,!0):Z())}),i("sliderFirstMove",()=>{if(!(l.destroyed||!l.autoplay.running)){if(l.params.autoplay.disableOnInteraction){Z();return}N=!0,O=!1,z=!1,A=setTimeout(()=>{z=!0,O=!0,L(!0)},200)}}),i("touchEnd",()=>{if(!(l.destroyed||!l.autoplay.running||!N)){if(clearTimeout(A),clearTimeout(f),l.params.autoplay.disableOnInteraction){O=!1,N=!1;return}O&&l.params.cssMode&&I(),O=!1,N=!1}}),i("slideChange",()=>{l.destroyed||!l.autoplay.running||l.autoplay.paused&&(h=X(),b=X())}),Object.assign(l.autoplay,{start:F,stop:Z,pause:L,resume:I})}function db(l){const{effect:s,swiper:i,on:r,setTranslate:c,setTransition:f,overwriteParams:m,perspective:b,recreateShadows:p,getEffectParams:h}=l;r("beforeInit",()=>{if(i.params.effect!==s)return;i.classNames.push(`${i.params.containerModifierClass}${s}`),b&&b()&&i.classNames.push(`${i.params.containerModifierClass}3d`);const g=m?m():{};Object.assign(i.params,g),Object.assign(i.originalParams,g)}),r("setTranslate _virtualUpdated",()=>{i.params.effect===s&&c()}),r("setTransition",(g,N)=>{i.params.effect===s&&f(N)}),r("transitionEnd",()=>{if(i.params.effect===s&&p){if(!h||!h().slideShadows)return;i.slides.forEach(g=>{g.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(N=>N.remove())}),p()}});let y;r("virtualUpdate",()=>{i.params.effect===s&&(i.slides.length||(y=!0),requestAnimationFrame(()=>{y&&i.slides&&i.slides.length&&(c(),y=!1)}))})}function pb(l,s){const i=nh(s);return i!==s&&(i.style.backfaceVisibility="hidden",i.style["-webkit-backface-visibility"]="hidden"),i}function hb({swiper:l,duration:s,transformElements:i,allSlides:r}){const{activeIndex:c}=l;if(l.params.virtualTranslate&&s!==0){let f=!1,m;m=i,m.forEach(b=>{Xv(b,()=>{if(f||!l||l.destroyed)return;f=!0,l.animating=!1;const p=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});l.wrapperEl.dispatchEvent(p)})})}}function mb({swiper:l,extendParams:s,on:i}){s({fadeEffect:{crossFade:!1}}),db({effect:"fade",swiper:l,on:i,setTranslate:()=>{const{slides:f}=l,m=l.params.fadeEffect;for(let b=0;b<f.length;b+=1){const p=l.slides[b];let y=-p.swiperSlideOffset;l.params.virtualTranslate||(y-=l.translate);let g=0;l.isHorizontal()||(g=y,y=0);const N=l.params.fadeEffect.crossFade?Math.max(1-Math.abs(p.progress),0):1+Math.min(Math.max(p.progress,-1),0),O=pb(m,p);O.style.opacity=N,O.style.transform=`translate3d(${y}px, ${g}px, 0px)`}},setTransition:f=>{const m=l.slides.map(b=>nh(b));m.forEach(b=>{b.style.transitionDuration=`${f}ms`}),hb({swiper:l,duration:f,transformElements:m,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!l.params.cssMode})})}const vb="/Sayt-kopiyasi/assets/yapon-DbaUTjp8.jpg",gb="/Sayt-kopiyasi/assets/dubai-BiRkvVed.jpg",bb="/Sayt-kopiyasi/assets/xitoy-B47GAI8L.jpg",yb="/Sayt-kopiyasi/assets/orol-Dno8f7IR.jpg",Sb="/Sayt-kopiyasi/assets/turkiya-CB-g59cj.jpg",xb="/Sayt-kopiyasi/assets/tailand-DGrGv5N7.jpg",Tb="/Sayt-kopiyasi/assets/poytax-Y9BbMaY4.jpg",Ob=[{title:"Dubayni kashf eting",desc:"BAAda hashamat va sarguzasht",image:gb},{title:"Xitoyni kashf eting",desc:"Qadimiy tarix va zamonaviy madaniyat",image:bb},{title:"Yaponiya",desc:"Zamonaviy hayot va qadimiy an’analar",image:vb},{title:"Turkiya",desc:"Istanbulning sehri va moviy sohillar",image:Sb},{title:"Tropik Tailand",desc:"Chiroyli plyajlarda dam oling va mazali taomlarni tatib koring.",image:xb},{title:"Orollarda dam olish",desc:"Ajoyib orol manzaralarida tinchlikni his qiling",image:yb},{title:"Malakali shahar",desc:"Dunyoning ko'gilochar poytaxtiga shoshiling",image:Tb}],Eb=()=>ce.jsx("div",{className:"h-screen w-full overflow-hidden",children:ce.jsx(vh,{modules:[fb,cb,mb],effect:"fade",speed:1e3,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{clickable:!0},loop:!0,className:"h-full w-full",children:Ob.map((l,s)=>ce.jsx(gh,{children:ce.jsxs("div",{className:"h-screen bg-cover bg-center relative flex items-center justify-center",style:{backgroundImage:`url(${l.image})`},children:[ce.jsx("div",{className:"absolute inset-0 bg-black/40"}),ce.jsx("div",{className:"relative z-10 text-center px-4",children:ce.jsxs("div",{className:"text-white max-w-4xl mx-auto",children:[ce.jsx("h1",{className:"text-5xl md:text-7xl font-bold mb-6 drop-shadow-xl select-none",children:l.title}),ce.jsx("p",{className:"text-xl md:text-2xl font-light drop-shadow-md select-none",children:l.desc})]})})]})},s))})});function zb(){const[l,s]=He.useState(!0);return He.useEffect(()=>{const i=setTimeout(()=>{s(!1)},2500);return()=>clearTimeout(i)},[]),l?ce.jsx("div",{className:"loader",children:ce.jsx(yv,{className:"w-25 h-25",variant:"dotted",dense:!0,color:"red",size:"medium",text:"-_-"})}):ce.jsxs("div",{children:[ce.jsx(Hv,{}),ce.jsx(Eb,{})]})}F0.createRoot(document.getElementById("root")).render(ce.jsx(He.StrictMode,{children:ce.jsx(zb,{})}));
