!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=84)}({136:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t);var f=wp.i18n.__,p=wp.element,s=p.Component,y=p.Fragment,d=wp.components,b=d.PanelBody,m=d.SelectControl,v=d.Placeholder,w=wp.blockEditor.InspectorControls,h=window.canvasWidgetizedBlock.sidebars,g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(a,e);var t,n,r,l=i(a);function a(){return o(this,a),l.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes,r=t.area,o=[{label:f("Select Widgetized Area"),value:""}];return h&&Object.keys(h).length&&Object.keys(h).forEach((function(e){o.push({label:h[e].name,value:h[e].id})})),wp.element.createElement(y,null,wp.element.createElement(w,null,wp.element.createElement(b,null,wp.element.createElement(m,{label:f("Widgetized Area"),value:r,options:o,onChange:function(e){n({area:e})}}))),wp.element.createElement(v,null,wp.element.createElement(m,{label:f("Widgetized Area"),value:r,options:o,onChange:function(e){n({area:e})}})))}}])&&u(t.prototype,n),r&&u(t,r),a}(s);(0,wp.hooks.addFilter)("canvas.customBlock.editRender","canvas/widgetized-area/editRender",(function(e,t){return"canvas/widgetized-area"===t.name?wp.element.createElement(g,t):e}))},84:function(e,t,n){e.exports=n(136)}});