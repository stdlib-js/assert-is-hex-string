// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";function t(t){var e,n,s;if(!r(t))return!1;if(!(e=t.length))return!1;for(s=0;s<e;s++)if((n=t.charCodeAt(s))<48||n>57&&n<65||n>70&&n<97||n>102)return!1;return!0}export{t as default};
//# sourceMappingURL=index.mjs.map