!function(e){var r={};function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,r,n){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)o.d(n,t,function(r){return e[r]}.bind(null,t));return n},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s=78)}({78:function(e,r,o){e.exports=o(79)},79:function(e,r){var o=wp.i18n.__,n=wp.blocks.registerBlockStyle;n("core/group",{name:"cnvs-block-bordered",label:o("Bordered")}),n("core/group",{name:"cnvs-block-single-border",label:o("Single Border")}),n("core/group",{name:"cnvs-block-bg-light",label:o("Background Light")}),n("core/group",{name:"cnvs-block-bg-inverse",label:o("Background Inverse")}),n("core/group",{name:"cnvs-block-shadow",label:o("Shadow")}),wp.hooks.addFilter("blocks.registerBlockType","change/align/group",(function(e,r){return"core/group"===r?lodash.assign({},e,{supports:lodash.assign({},e.supports,{align:["left","center","right","wide","full"]})}):e}))}});