// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,a=r.__defineSetter__,l=r.__lookupGetter__,i=r.__lookupSetter__;var u=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,u){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof u||null===u||"[object Array]"===n.call(u))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+u+"`.");if((f="value"in u)&&(l.call(t,e)||i.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=u.value,t.__proto__=c):t[e]=u.value),p="get"in u,y="set"in u,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,u.get),y&&a&&a.call(t,e,u.set),t};function c(t,e,r){u(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol.toStringTag:"";var s=y()?function(t){var e,r,n,o,a;if(null==t)return b.call(t);r=t[v],a=v,e=null!=(o=t)&&_.call(o,a);try{t[v]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[v]=r:delete t[v],n}:function(t){return b.call(t)},g=String.prototype.valueOf;var d=y();function m(t){return"object"==typeof t&&(t instanceof String||(d?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object String]"===s(t)))}function j(t){return f(t)||m(t)}c(j,"isPrimitive",f),c(j,"isObject",m);function S(t){var e,r,n;if(!f(t))return!1;if(!(e=t.length))return!1;for(n=0;n<e;n++)if((r=t.charCodeAt(n))<48||r>57&&r<65||r>70&&r<97||r>102)return!1;return!0}export{S as default};
//# sourceMappingURL=mod.js.map
