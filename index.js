// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,l=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__,a=r,f=function(t,e,r){var a,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(t,e)||c.call(t,e)?(a=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=a):t[e]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&l&&l.call(t,e,r.set),t},p=e()?a:f,y=function(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},b=function(t){return"string"==typeof t},s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=function(){return s&&"symbol"==typeof Symbol.toStringTag},d=Object.prototype.toString,g=d,m=function(t){return g.call(t)},v=Object.prototype.hasOwnProperty,j=function(t,e){return null!=t&&v.call(t,e)},S="function"==typeof Symbol?Symbol.toStringTag:"",h=j,w=S,O=d,P=m,T=function(t){var e,r,n;if(null==t)return O.call(t);r=t[w],e=h(t,w);try{t[w]=void 0}catch(e){return O.call(t)}return n=O.call(t),e?t[w]=r:delete t[w],n},x=_()?T:P,A=String.prototype.valueOf,E=x,k=function(t){try{return A.call(t),!0}catch(t){return!1}},C=_(),G=function(t){return"object"==typeof t&&(t instanceof String||(C?k(t):"[object String]"===E(t)))},V=b,F=G,H=y,q=function(t){return V(t)||F(t)},z=G;H(q,"isPrimitive",b),H(q,"isObject",z);var B=q;return function(t){var e,r,n;if(!B.isPrimitive(t))return!1;if(!(e=t.length))return!1;for(n=0;n<e;n++)if((r=t.charCodeAt(n))<48||r>57&&r<65||r>70&&r<97||r>102)return!1;return!0}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isHexString=e();
//# sourceMappingURL=index.js.map
