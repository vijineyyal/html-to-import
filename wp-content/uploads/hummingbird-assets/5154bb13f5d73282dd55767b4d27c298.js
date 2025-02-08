/**handles:imagesLoaded,isotope,salient-portfolio-js,salient-social,jquery-easing,jquery-mousewheel,nectar_priority,nectar-transit,nectar-waypoints,hoverintent,magnific,anime,superfish,nectar-frontend,touchswipe,wpb_composer_front_js,flickity**/
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a,b){function c(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function d(){}function e(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=h.length;c>b;b++){var d=h[b];a[d]=0}return a}function f(b){function d(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||g("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=b("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var f=document.body||document.documentElement;f.appendChild(e);var h=j(e);l=200===c(h.width),f.removeChild(e)}}}function f(a){if(d(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var b=j(a);if("none"===b.display)return e();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var g=f.isBorderBox=!(!k||!b[k]||"border-box"!==b[k]),m=0,n=h.length;n>m;m++){var o=h[m],p=b[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=g&&l,y=c(b.width);y!==!1&&(f.width=y+(x?0:r+v));var z=c(b.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return f}var g="undefined"==typeof console?d:function(a){console.error(a)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],f):"object"==typeof exports?module.exports=f(require("desandro-get-style-property")):a.getSize=f(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){"use strict";function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){"use strict";function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){"use strict";function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.Item=b(a.Outlayer))}(window,function(a){"use strict";function b(){a.Item.apply(this,arguments)}b.prototype=new a.Item,b.prototype._create=function(){this.id=this.layout.itemGUID++,a.Item.prototype._create.call(this),this.sortData={}},b.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,b=this.layout._sorters;for(var c in a){var d=b[c];this.sortData[c]=d(this.element,this)}}};var c=b.prototype.destroy;return b.prototype.destroy=function(){c.apply(this,arguments),this.css({display:""})},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("get-size"),require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.LayoutMode=b(a.getSize,a.Outlayer))}(window,function(a,b){"use strict";function c(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}return function(){function a(a){return function(){return b.prototype[a].apply(this.isotope,arguments)}}for(var d=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],e=0,f=d.length;f>e;e++){var g=d[e];c.prototype[g]=a(g)}}(),c.prototype.needsVerticalResizeLayout=function(){var b=a(this.isotope.element),c=this.isotope.size&&b;return c&&b.innerHeight!=this.isotope.size.innerHeight},c.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},c.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},c.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},c.prototype.getSegmentSize=function(a,b){var c=a+b,d="outer"+b;if(this._getMeasurement(c,d),!this[c]){var e=this.getFirstItemSize();this[c]=e&&e[d]||this.isotope.size["inner"+b]}},c.prototype.getFirstItemSize=function(){var b=this.isotope.filteredItems[0];return b&&b.element&&a(b.element)},c.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},c.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},c.modes={},c.create=function(a,b){function d(){c.apply(this,arguments)}return d.prototype=new c,b&&(d.options=b),d.prototype.namespace=a,c.modes[a]=d,d},c}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],b):"object"==typeof exports?module.exports=b(require("../layout-mode"),require("masonry-layout")):b(a.Isotope.LayoutMode,a.Masonry)}(window,function(a,b){"use strict";function c(a,b){for(var c in b)a[c]=b[c];return a}var d=a.create("masonry"),e=d.prototype._getElementOffset,f=d.prototype.layout,g=d.prototype._getMeasurement;
c(d.prototype,b.prototype),d.prototype._getElementOffset=e,d.prototype.layout=f,d.prototype._getMeasurement=g;var h=d.prototype.measureColumns;d.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,h.call(this)};var i=d.prototype._manageStamp;return d.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,i.apply(this,arguments)},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("fitRows");return b.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;0!==this.x&&b+this.x>c&&(this.x=0,this.y=this.maxY);var d={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+a.size.outerHeight),this.x+=b,d},b.prototype._getContainerSize=function(){return{height:this.maxY}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("vertical",{horizontalAlignment:0});return b.prototype._resetLayout=function(){this.y=0},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,c=this.y;return this.y+=a.size.outerHeight,{x:b,y:c}},b.prototype._getContainerSize=function(){return{height:this.y}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(c,d,e,f,g,h){return b(a,c,d,e,f,g,h)}):"object"==typeof exports?module.exports=b(a,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):a.Isotope=b(a,a.Outlayer,a.getSize,a.matchesSelector,a.fizzyUIUtils,a.Isotope.Item,a.Isotope.LayoutMode)}(window,function(a,b,c,d,e,f,g){function h(a,b){return function(c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e],h=c.sortData[g],i=d.sortData[g];if(h>i||i>h){var j=void 0!==b[g]?b[g]:b,k=j?1:-1;return(h>i?1:-1)*k}}return 0}}var i=a.jQuery,j=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")},k=document.documentElement,l=k.textContent?function(a){return a.textContent}:function(a){return a.innerText},m=b.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});m.Item=f,m.LayoutMode=g,m.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),b.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var a in g.modes)this._initLayoutMode(a)},m.prototype.reloadItems=function(){this.itemGUID=0,b.prototype.reloadItems.call(this)},m.prototype._itemize=function(){for(var a=b.prototype._itemize.apply(this,arguments),c=0,d=a.length;d>c;c++){var e=a[c];e.id=this.itemGUID++}return this._updateItemsSortData(a),a},m.prototype._initLayoutMode=function(a){var b=g.modes[a],c=this.options[a]||{};this.options[a]=b.options?e.extend(b.options,c):c,this.modes[a]=new b(this)},m.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},m.prototype._layout=function(){var a=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,a),this._isLayoutInited=!0},m.prototype.arrange=function(a){function b(){d.reveal(c.needReveal),d.hide(c.needHide)}this.option(a),this._getIsInstant();var c=this._filter(this.items);this.filteredItems=c.matches;var d=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(b):b(),this._sort(),this._layout()},m.prototype._init=m.prototype.arrange,m.prototype._getIsInstant=function(){var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=a,a},m.prototype._bindArrangeComplete=function(){function a(){b&&c&&d&&e.dispatchEvent("arrangeComplete",null,[e.filteredItems])}var b,c,d,e=this;this.once("layoutComplete",function(){b=!0,a()}),this.once("hideComplete",function(){c=!0,a()}),this.once("revealComplete",function(){d=!0,a()})},m.prototype._filter=function(a){var b=this.options.filter;b=b||"*";for(var c=[],d=[],e=[],f=this._getFilterTest(b),g=0,h=a.length;h>g;g++){var i=a[g];if(!i.isIgnored){var j=f(i);j&&c.push(i),j&&i.isHidden?d.push(i):j||i.isHidden||e.push(i)}}return{matches:c,needReveal:d,needHide:e}},m.prototype._getFilterTest=function(a){return i&&this.options.isJQueryFiltering?function(b){return i(b.element).is(a)}:"function"==typeof a?function(b){return a(b.element)}:function(b){return d(b.element,a)}},m.prototype.updateSortData=function(a){var b;a?(a=e.makeArray(a),b=this.getItems(a)):b=this.items,this._getSorters(),this._updateItemsSortData(b)},m.prototype._getSorters=function(){var a=this.options.getSortData;for(var b in a){var c=a[b];this._sorters[b]=n(c)}},m.prototype._updateItemsSortData=function(a){for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.updateSortData()}};var n=function(){function a(a){if("string"!=typeof a)return a;var c=j(a).split(" "),d=c[0],e=d.match(/^\[(.+)\]$/),f=e&&e[1],g=b(f,d),h=m.sortDataParsers[c[1]];return a=h?function(a){return a&&h(g(a))}:function(a){return a&&g(a)}}function b(a,b){var c;return c=a?function(b){return b.getAttribute(a)}:function(a){var c=a.querySelector(b);return c&&l(c)}}return a}();m.sortDataParsers={parseInt:function(a){return parseInt(a,10)},parseFloat:function(a){return parseFloat(a)}},m.prototype._sort=function(){var a=this.options.sortBy;if(a){var b=[].concat.apply(a,this.sortHistory),c=h(b,this.options.sortAscending);this.filteredItems.sort(c),a!=this.sortHistory[0]&&this.sortHistory.unshift(a)}},m.prototype._mode=function(){var a=this.options.layoutMode,b=this.modes[a];if(!b)throw new Error("No layout mode: "+a);return b.options=this.options[a],b},m.prototype._resetLayout=function(){b.prototype._resetLayout.call(this),this._mode()._resetLayout()},m.prototype._getItemLayoutPosition=function(a){return this._mode()._getItemLayoutPosition(a)},m.prototype._manageStamp=function(a){this._mode()._manageStamp(a)},m.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},m.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},m.prototype.appended=function(a){var b=this.addItems(a);if(b.length){var c=this._filterRevealAdded(b);this.filteredItems=this.filteredItems.concat(c)}},m.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){this._resetLayout(),this._manageStamps();var c=this._filterRevealAdded(b);this.layoutItems(this.filteredItems),this.filteredItems=c.concat(this.filteredItems),this.items=b.concat(this.items)}},m.prototype._filterRevealAdded=function(a){var b=this._filter(a);return this.hide(b.needHide),this.reveal(b.matches),this.layoutItems(b.matches,!0),b.matches},m.prototype.insert=function(a){var b=this.addItems(a);if(b.length){var c,d,e=b.length;for(c=0;e>c;c++)d=b[c],this.element.appendChild(d.element);var f=this._filter(b).matches;for(c=0;e>c;c++)b[c].isLayoutInstant=!0;for(this.arrange(),c=0;e>c;c++)delete b[c].isLayoutInstant;this.reveal(f)}};var o=m.prototype.remove;return m.prototype.remove=function(a){a=e.makeArray(a);var b=this.getItems(a);o.call(this,a);var c=b&&b.length;if(c)for(var d=0;c>d;d++){var f=b[d];e.removeFrom(this.filteredItems,f)}},m.prototype.shuffle=function(){for(var a=0,b=this.items.length;b>a;a++){var c=this.items[a];c.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},m.prototype._noTransition=function(a){var b=this.options.transitionDuration;this.options.transitionDuration=0;var c=a.call(this);return this.options.transitionDuration=b,c},m.prototype.getFilteredItemElements=function(){for(var a=[],b=0,c=this.filteredItems.length;c>b;b++)a.push(this.filteredItems[b].element);return a},m});

/*!
 * Packery layout mode PACKAGED v1.1.1
 * sub-classes Packery
 * http://packery.metafizzy.co
 */

!function(a){function b(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}function c(a,b){var c=d(a,b)?f:e;c(a,b)}var d,e,f;"classList"in document.documentElement?(d=function(a,b){return a.classList.contains(b)},e=function(a,b){a.classList.add(b)},f=function(a,b){a.classList.remove(b)}):(d=function(a,c){return b(c).test(a.className)},e=function(a,b){d(a,b)||(a.className=a.className+" "+b)},f=function(a,c){a.className=a.className.replace(b(c)," ")});var g={hasClass:d,addClass:e,removeClass:f,toggleClass:c,has:d,add:e,remove:f,toggle:c};"function"==typeof define&&define.amd?define("classie/classie",g):"object"==typeof exports?module.exports=g:a.classie=g}(window),function(a){function b(){function a(b){for(var c in a.defaults)this[c]=a.defaults[c];for(c in b)this[c]=b[c]}return c.Rect=a,a.defaults={x:0,y:0,width:0,height:0},a.prototype.contains=function(a){var b=a.width||0,c=a.height||0;return this.x<=a.x&&this.y<=a.y&&this.x+this.width>=a.x+b&&this.y+this.height>=a.y+c},a.prototype.overlaps=function(a){var b=this.x+this.width,c=this.y+this.height,d=a.x+a.width,e=a.y+a.height;return this.x<d&&b>a.x&&this.y<e&&c>a.y},a.prototype.getMaximalFreeRects=function(b){if(!this.overlaps(b))return!1;var c,d=[],e=this.x+this.width,f=this.y+this.height,g=b.x+b.width,h=b.y+b.height;return this.y<b.y&&(c=new a({x:this.x,y:this.y,width:this.width,height:b.y-this.y}),d.push(c)),e>g&&(c=new a({x:g,y:this.y,width:e-g,height:this.height}),d.push(c)),f>h&&(c=new a({x:this.x,y:h,width:this.width,height:f-h}),d.push(c)),this.x<b.x&&(c=new a({x:this.x,y:this.y,width:b.x-this.x,height:this.height}),d.push(c)),d},a.prototype.canFit=function(a){return this.width>=a.width&&this.height>=a.height},a}var c=a.Packery=function(){};"function"==typeof define&&define.amd?define("packery/js/rect",b):"object"==typeof exports?module.exports=b():(a.Packery=a.Packery||{},a.Packery.Rect=b())}(window),function(a){function b(a){function b(a,b,c){this.width=a||0,this.height=b||0,this.sortDirection=c||"downwardLeftToRight",this.reset()}b.prototype.reset=function(){this.spaces=[],this.newSpaces=[];var b=new a({x:0,y:0,width:this.width,height:this.height});this.spaces.push(b),this.sorter=c[this.sortDirection]||c.downwardLeftToRight},b.prototype.pack=function(a){for(var b=0,c=this.spaces.length;c>b;b++){var d=this.spaces[b];if(d.canFit(a)){this.placeInSpace(a,d);break}}},b.prototype.placeInSpace=function(a,b){a.x=b.x,a.y=b.y,this.placed(a)},b.prototype.placed=function(a){for(var b=[],c=0,d=this.spaces.length;d>c;c++){var e=this.spaces[c],f=e.getMaximalFreeRects(a);f?b.push.apply(b,f):b.push(e)}this.spaces=b,this.mergeSortSpaces()},b.prototype.mergeSortSpaces=function(){b.mergeRects(this.spaces),this.spaces.sort(this.sorter)},b.prototype.addSpace=function(a){this.spaces.push(a),this.mergeSortSpaces()},b.mergeRects=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];if(d){var e=a.slice(0);e.splice(b,1);for(var f=0,g=0,h=e.length;h>g;g++){var i=e[g],j=b>g?0:1;d.contains(i)&&(a.splice(g+j-f,1),f++)}}}return a};var c={downwardLeftToRight:function(a,b){return a.y-b.y||a.x-b.x},rightwardTopToBottom:function(a,b){return a.x-b.x||a.y-b.y}};return b}if("function"==typeof define&&define.amd)define("packery/js/packer",["./rect"],b);else if("object"==typeof exports)module.exports=b(require("./rect"));else{var c=a.Packery=a.Packery||{};c.Packer=b(c.Rect)}}(window),function(a){function b(a,b,c){var d=a("transform"),e=function(){b.Item.apply(this,arguments)};e.prototype=new b.Item;var f=e.prototype._create;return e.prototype._create=function(){f.call(this),this.rect=new c,this.placeRect=new c},e.prototype.dragStart=function(){this.getPosition(),this.removeTransitionStyles(),this.isTransitioning&&d&&(this.element.style[d]="none"),this.getSize(),this.isPlacing=!0,this.needsPositioning=!1,this.positionPlaceRect(this.position.x,this.position.y),this.isTransitioning=!1,this.didDrag=!1},e.prototype.dragMove=function(a,b){this.didDrag=!0;var c=this.layout.size;a-=c.paddingLeft,b-=c.paddingTop,this.positionPlaceRect(a,b)},e.prototype.dragStop=function(){this.getPosition();var a=this.position.x!==this.placeRect.x,b=this.position.y!==this.placeRect.y;this.needsPositioning=a||b,this.didDrag=!1},e.prototype.positionPlaceRect=function(a,b,c){this.placeRect.x=this.getPlaceRectCoord(a,!0),this.placeRect.y=this.getPlaceRectCoord(b,!1,c)},e.prototype.getPlaceRectCoord=function(a,b,c){var d=b?"Width":"Height",e=this.size["outer"+d],f=this.layout[b?"columnWidth":"rowHeight"],g=this.layout.size["inner"+d];b||(g=Math.max(g,this.layout.maxY),this.layout.rowHeight||(g-=this.layout.gutter));var h;if(f){f+=this.layout.gutter,g+=b?this.layout.gutter:0,a=Math.round(a/f);var i;i=this.layout.options.isHorizontal?b?"ceil":"floor":b?"floor":"ceil";var j=Math[i](g/f);j-=Math.ceil(e/f),h=j}else h=g-e;return a=c?a:Math.min(a,h),a*=f||1,Math.max(0,a)},e.prototype.copyPlaceRectPosition=function(){this.rect.x=this.placeRect.x,this.rect.y=this.placeRect.y},e.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},e}"function"==typeof define&&define.amd?define("packery/js/item",["get-style-property/get-style-property","outlayer/outlayer","./rect"],b):"object"==typeof exports?module.exports=b(require("desandro-get-style-property"),require("outlayer"),require("./rect")):a.Packery.Item=b(a.getStyleProperty,a.Outlayer,a.Packery.Rect)}(window),function(a){function b(a,b,c,d,e,f){function g(a,b){return a.position.y-b.position.y||a.position.x-b.position.x}function h(a,b){return a.position.x-b.position.x||a.position.y-b.position.y}d.prototype.canFit=function(a){return this.width>=a.width-1&&this.height>=a.height-1};var i=c.create("packery");return i.Item=f,i.prototype._create=function(){c.prototype._create.call(this),this.packer=new e,this.stamp(this.options.stamped);var a=this;this.handleDraggabilly={dragStart:function(b){a.itemDragStart(b.element)},dragMove:function(b){a.itemDragMove(b.element,b.position.x,b.position.y)},dragEnd:function(b){a.itemDragEnd(b.element)}},this.handleUIDraggable={start:function(b){a.itemDragStart(b.currentTarget)},drag:function(b,c){a.itemDragMove(b.currentTarget,c.position.left,c.position.top)},stop:function(b){a.itemDragEnd(b.currentTarget)}}},i.prototype._resetLayout=function(){this.getSize(),this._getMeasurements();var a=this.packer;this.options.isHorizontal?(a.width=Number.POSITIVE_INFINITY,a.height=this.size.innerHeight+this.gutter,a.sortDirection="rightwardTopToBottom"):(a.width=this.size.innerWidth+this.gutter,a.height=Number.POSITIVE_INFINITY,a.sortDirection="downwardLeftToRight"),a.reset(),this.maxY=0,this.maxX=0},i.prototype._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},i.prototype._getItemLayoutPosition=function(a){return this._packItem(a),a.rect},i.prototype._packItem=function(a){this._setRectSize(a.element,a.rect),this.packer.pack(a.rect),this._setMaxXY(a.rect)},i.prototype._setMaxXY=function(a){this.maxX=Math.max(a.x+a.width,this.maxX),this.maxY=Math.max(a.y+a.height,this.maxY)},i.prototype._setRectSize=function(a,c){var d=b(a),e=d.outerWidth,f=d.outerHeight;(e||f)&&(e=this._applyGridGutter(e,this.columnWidth),f=this._applyGridGutter(f,this.rowHeight)),c.width=Math.min(e,this.packer.width),c.height=Math.min(f,this.packer.height)},i.prototype._applyGridGutter=function(a,b){if(!b)return a+this.gutter;b+=this.gutter;var c=a%b,d=c&&1>c?"round":"ceil";return a=Math[d](a/b)*b},i.prototype._getContainerSize=function(){return this.options.isHorizontal?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},i.prototype._manageStamp=function(a){var b,c=this.getItem(a);if(c&&c.isPlacing)b=c.placeRect;else{var e=this._getElementOffset(a);b=new d({x:this.options.isOriginLeft?e.left:e.right,y:this.options.isOriginTop?e.top:e.bottom})}this._setRectSize(a,b),this.packer.placed(b),this._setMaxXY(b)},i.prototype.sortItemsByPosition=function(){var a=this.options.isHorizontal?h:g;this.items.sort(a)},i.prototype.fit=function(a,b,c){var d=this.getItem(a);d&&(this._getMeasurements(),this.stamp(d.element),d.getSize(),d.isPlacing=!0,b=void 0===b?d.rect.x:b,c=void 0===c?d.rect.y:c,d.positionPlaceRect(b,c,!0),this._bindFitEvents(d),d.moveTo(d.placeRect.x,d.placeRect.y),this.layout(),this.unstamp(d.element),this.sortItemsByPosition(),d.isPlacing=!1,d.copyPlaceRectPosition())},i.prototype._bindFitEvents=function(a){function b(){d++,2===d&&c.emitEvent("fitComplete",[c,a])}var c=this,d=0;a.on("layout",function(){return b(),!0}),this.on("layoutComplete",function(){return b(),!0})},i.prototype.resize=function(){var a=b(this.element),c=this.size&&a,d=this.options.isHorizontal?"innerHeight":"innerWidth";c&&a[d]===this.size[d]||this.layout()},i.prototype.itemDragStart=function(a){this.stamp(a);var b=this.getItem(a);b&&b.dragStart()},i.prototype.itemDragMove=function(a,b,c){function d(){f.layout(),delete f.dragTimeout}var e=this.getItem(a);e&&e.dragMove(b,c);var f=this;this.clearDragTimeout(),this.dragTimeout=setTimeout(d,40)},i.prototype.clearDragTimeout=function(){this.dragTimeout&&clearTimeout(this.dragTimeout)},i.prototype.itemDragEnd=function(b){var c,d=this.getItem(b);if(d&&(c=d.didDrag,d.dragStop()),!d||!c&&!d.needsPositioning)return void this.unstamp(b);a.add(d.element,"is-positioning-post-drag");var e=this._getDragEndLayoutComplete(b,d);d.needsPositioning?(d.on("layout",e),d.moveTo(d.placeRect.x,d.placeRect.y)):d&&d.copyPlaceRectPosition(),this.clearDragTimeout(),this.on("layoutComplete",e),this.layout()},i.prototype._getDragEndLayoutComplete=function(b,c){var d=c&&c.needsPositioning,e=0,f=d?2:1,g=this;return function(){return e++,e!==f?!0:(c&&(a.remove(c.element,"is-positioning-post-drag"),c.isPlacing=!1,c.copyPlaceRectPosition()),g.unstamp(b),g.sortItemsByPosition(),d&&g.emitEvent("dragItemPositioned",[g,c]),!0)}},i.prototype.bindDraggabillyEvents=function(a){a.on("dragStart",this.handleDraggabilly.dragStart),a.on("dragMove",this.handleDraggabilly.dragMove),a.on("dragEnd",this.handleDraggabilly.dragEnd)},i.prototype.bindUIDraggableEvents=function(a){a.on("dragstart",this.handleUIDraggable.start).on("drag",this.handleUIDraggable.drag).on("dragstop",this.handleUIDraggable.stop)},i.Rect=d,i.Packer=e,i}"function"==typeof define&&define.amd?define("packery/js/packery",["classie/classie","get-size/get-size","outlayer/outlayer","./rect","./packer","./item"],b):"object"==typeof exports?module.exports=b(require("desandro-classie"),require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):a.Packery=b(a.classie,a.getSize,a.Outlayer,a.Packery.Rect,a.Packery.Packer,a.Packery.Item)}(window),function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a,c,d){var e=a.create("packery"),f=e.prototype._getElementOffset,g=e.prototype._getMeasurement;b(e.prototype,c.prototype),e.prototype._getElementOffset=f,e.prototype._getMeasurement=g;var h=e.prototype._resetLayout;e.prototype._resetLayout=function(){this.packer=this.packer||new c.Packer,h.apply(this,arguments)};var i=e.prototype._getItemLayoutPosition;e.prototype._getItemLayoutPosition=function(a){return a.rect=a.rect||new c.Rect,i.call(this,a)};var j=e.prototype._manageStamp;return e.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,j.apply(this,arguments)},e.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a,c=this.options.isHorizontal?"innerHeight":"innerWidth";return b&&a[c]!==this.size[c]},e}"function"==typeof define&&define.amd?define(["isotope/js/layout-mode","packery/js/packery","get-size/get-size"],c):"object"==typeof exports?module.exports=c(require("isotope-layout/js/layout-mode"),require("packery"),require("get-size")):c(a.Isotope.LayoutMode,a.Packery,a.getSize)}(window);

!function(c){"use strict";function t(t,e,i,n){this.$el=t,this.fullWidthContentColumns=e,this.fullWidthSections=n,this.$window=c(window),this.onMobile=!1,this.clearIsoAnimation=null,this.mediaQuerySize="",this.fullscreenSelector=i,this.initialized=!1,this.total=0,this.totalLoaded=0,this.mouseEventHandler(),this.portfolioFiltersInit(),this.portfolioInit(),this.resizeHandler(),0<this.$el.find('.inner-wrap[data-animation="perspective"]').length&&this.perspectiveAnimationInit(),this.portfolioAccentColor(),this.isotopeCatSelection(),this.portfolioCommentOrder()}function e(t){this.$el=t,this.rotationSpeed=0<t.attr("data-autorotate").length&&parseInt(t.attr("data-autorotate")),this.rotationInterval=null,this.$window=c(window),this.splitLineText(),this.positionFix(),this.sliderCalcs(),this.sliderInit(),this.resizeHandler()}function i(t){this.$el=t,this.carouselInit(),this.resizeHandler()}t.prototype.portfolioInit=function(){var n=this;this.total=this.$el.find("img").length,0<this.$el.parents(".wpb_gallery").length&&0<this.$el.find(".nectar-lazy").length?(this.fullWidthSections(),this.$el.find("img.nectar-lazy:not(.loaded)").each(function(){c(this).css({height:"",width:""});var t=parseInt(c(this).attr("height")),e=parseInt(c(this).attr("width")),i=c(this).width(),i=n.imageAspectRatio(e,t,i,2e3);c(this).css({height:i.height+"px",width:i.width+"px"})}),this.masonryInit("0s"),this.initialized=!0,c(window).on("salient-portfolio-recalculate",this.imageLoadLayout.bind(this))):this.$el.imagesLoaded(function(){n.masonryInit("0.6s"),n.initialized=!0})},t.prototype.imageLoadLayout=function(){this.totalLoaded=this.totalLoaded+1,1==this.initialized&&this.totalLoaded%4==0&&this.$el.isotope("layout")},t.prototype.imageAspectRatio=function(t,e,i,n){var n=Math.min(i/t,n/e);return{width:t*n,height:e*n}},t.prototype.masonryInit=function(t){var e=this,i=e.$el.hasClass("masonry-items")?"packery":"fitRows",n=""!=e.$el.attr("data-starting-filter")&&"default"!=e.$el.attr("data-starting-filter")?"."+e.$el.attr("data-starting-filter"):"*",a=!(0<c("body.rtl").length);e.beforeReLayout(),e.$el.addClass("isotope-activated"),e.$el.isotope({itemSelector:".element",filter:n,layoutMode:i,transitionDuration:t,isOriginLeft:a,packery:{gutter:0}}).isotope("layout"),"*"!=n?(0<e.$el.parent().parent().find(".portfolio-filters").length?e.$el.parent().parent().find('.portfolio-filters ul a[data-filter="'+n+'"]'):e.$el.parent().parent().find('.portfolio-filters-inline ul a[data-filter="'+n+'"]')).trigger("click"):(0<e.$el.parent().parent().find('.portfolio-filters-inline[data-alignment="left"]').length||0<e.$el.parent().parent().find('.portfolio-filters-inline[data-alignment="center"]').length?e.$el.parent().parent().find(".portfolio-filters-inline .container > ul > li:nth-child(1) a"):e.$el.parent().parent().find(".portfolio-filters-inline .container > ul > li:nth-child(2) a")).trigger("click").addClass("active"),"none"===e.$el.find(".inner-wrap").attr("data-animation")&&e.$el.find(".inner-wrap").removeClass("animated"),e.loadAnimationWaypoint(),c(window).on("nectar-waypoints-reinit",e.loadAnimationWaypoint.bind(e)),e.masonryZindex();var o=this;setTimeout(function(){e.masonryZindex()},800),0<e.$el.parents(".full-width-content").length&&setTimeout(function(){e.fullWidthContentColumns()},200),c(".portfolio-loading").stop(!0,!0).fadeOut(200)},t.prototype.resizeHandler=function(){var t=this;this.$window.on("resize",function(){setTimeout(function(){t.reLayout(),t.masonryZindex(),t.portfolioCommentOrder()},30)})},t.prototype.mouseEventHandler=function(){(0<this.$el.parent().parent().find(".portfolio-filters").length?this.$el.parent().parent().find(".portfolio-filters ul li a"):this.$el.parent().parent().find(".portfolio-filters-inline ul li a")).on("click",this.isoClickFilter.bind(this)),0<c("body.page-template-template-portfolio").length&&0<c("#page-header-wrap .portfolio-filters").length&&c("#page-header-wrap .portfolio-filters ul li a").on("click",this.isoClickFilter.bind(this)),c("body").on("mouseenter",".portfolio-filters",function(){this.onMobile||c(this).find("> ul").stop(!0,!0).slideDown(500,"easeOutExpo"),c(this).find("a#sort-portfolio span").html(c(this).find("a#sort-portfolio").attr("data-sortable-label"))}),c("body").on("mouseleave",".portfolio-filters",function(){var t=c(this).find("a.active").html();void 0!==t&&0!=t.length||(t=c(this).attr("data-sortable-label")),c(this).find("a#sort-portfolio span").html(t),this.onMobile||c(this).find("> ul").stop(!0,!0).slideUp(500,"easeOutExpo")}),c("body").on("click",".portfolio-filters ul li a",function(){c(this).parents(".portfolio-filters").find("#sort-portfolio span").html(c(this).html())}),c("body").on("click",".portfolio-filters > a#sort-portfolio",function(){return!1});var t="";c(".portfolio-items > .col a[title]").on("mouseenter",function(){0<c(this).attr("title").length&&(t=c(this).attr("title"),c(this).attr("title",""))}),c(".portfolio-items > .col a[title]").on("mouseleave",function(){0<t.length&&c(this).attr("title",t)}),c(".portfolio-items > .col a[title]").on("mousedown",function(){0<t.length&&c(this).attr("title",t)})},t.prototype.portfolioFiltersInit=function(){(c("body").hasClass("mobile")||navigator.userAgent.match(/(iPad|IEMobile)/))&&(this.onMobile=!0,c("body").off("mouseenter mouseleave",".portfolio-filters"),this.$el.parent().parent().find(".portfolio-filters > a").on("click",function(t){void 0!==t.originalEvent&&c(this).parents(".portfolio-filters").find("> ul").stop(!0,!0).slideToggle(600,"easeOutCubic")}),this.$el.parent().parent().find(".portfolio-filters ul li a").on("click",function(t){var t;void 0!==t.originalEvent&&(c(this).parents(".portfolio-filters").find("> ul").stop(!0,!0).slideToggle(600,"easeOutCubic"),t=c(this).html(),c(this).parents(".portfolio-filters").find("a#sort-portfolio span").html(t))})),c('body.single-portfolio #header-outer nav > ul > li > a:contains("Portfolio")').parents("li").addClass("current-menu-item"),c(".portfolio-items").find("a[href*='http://']:not([href*='"+window.location.hostname+"'])").attr("target","_blank"),c(".recent_projects_widget").find("a[href*='http://']:not([href*='"+window.location.hostname+"'])").attr("target","_blank"),c(".portfolio-items").find("a[href*='https://']:not([href*='"+window.location.hostname+"']):not([href*='youtube.com']):not([href*='vimeo.com'])").attr("target","_blank"),c(".recent_projects_widget").find("a[href*='https://']:not([href*='"+window.location.hostname+"'])").attr("target","_blank")},t.prototype.isoClickFilter=function(t){var e,i=this;690<window.innerWidth&&!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)&&(clearTimeout(void 0),e=setTimeout(function(){i.masonryZindex()},600));var n=c(t.target).attr("data-filter");return this.$el.isotope({filter:n}).attr("data-current-cat",n),0===this.$el.find('.inner-wrap[data-animation="none"]').length&&this.$el.find(".col").addClass("animated-in"),c(t.target).closest("ul:not(.children)").find("li a").removeClass("active"),c(t.target).addClass("active"),0<c(t.target).parents(".portfolio-filters-inline").length&&c(t.target).parents(".portfolio-filters-inline").find("#current-category").html(c(t.target).html()),0<this.$el.find('a[rel^="prettyPhoto"]').length?setTimeout(this.updatePrettyPhotoGallery.bind(this),170):setTimeout(this.updateMagPrettyPhotoGallery.bind(this),170),!1},t.prototype.loadAnimationWaypoint=function(){var a=0<c("#nectar_fullscreen_rows").length?"200%":"90%",o=this;"none"!==this.$el.find(".inner-wrap").attr("data-animation")&&this.$el.find(".col").each(function(t){var e=c(this);if(c(this).visible(!0)||0<c(this).parents("#nectar_fullscreen_rows").length){if(0<c(this).parents("#nectar_fullscreen_rows").length&&0<o.fullscreenSelector.length&&0==c(this).parents(o.fullscreenSelector).length)return!0;var i=e.is('[data-masonry-type="photography"].masonry-items')?90:115;c(this).delay(i*t).queue(function(t){c(this).addClass("animated-in"),t()})}else var n=new Waypoint({element:e,handler:function(){var t;0<e.parents(".wpb_tab").length&&"hidden"===e.parents(".wpb_tab").css("visibility")||e.hasClass("animated-in")||(t=e.is('[data-masonry-type="photography"].masonry-items')?85:100,setTimeout(function(){e.addClass("animated-in")},t*e.attr("data-delay-amount"))),n.destroy()},offset:a})})},t.prototype.perspectiveAnimationInit=function(){var e=c(window).scrollTop(),i=this;function n(){var t=c(window).scrollTop();e===t||(e=t,i.$el.css("perspective-origin","50% "+(e+c(window).height())+"px")),requestAnimationFrame(n)}this.$el.css("perspective-origin","50% "+(e+c(window).height())+"px"),requestAnimationFrame(n)},t.prototype.portfolioItemWidths=function(){var t="elastic"===this.$el.attr("data-col-num");if(t){var e=Math.floor(this.$el.width()),i=4,n="one"===this.mediaQuerySize?1:2;if("five"===this.mediaQuerySize?i=5:"four"===this.mediaQuerySize?i=4:"three"===this.mediaQuerySize?i=3:"two"===this.mediaQuerySize?i=2:"one"===this.mediaQuerySize&&(i=1),this.$el.is('[data-ps="6"]')&&5==i&&(i=4),t&&this.$el.is('[data-masonry-type="photography"]')&&!this.$el.hasClass("no-masonry")&&("five"===this.mediaQuerySize&&(i=6),"four"===this.mediaQuerySize&&(i=5),"three"===this.mediaQuerySize&&(i=4)),e%i==0)this.$el.find(".elastic-portfolio-item:not(.wide):not(.wide_tall)").css("width",Math.floor(e/i)+"px"),this.$el.find(".elastic-portfolio-item.wide, .elastic-portfolio-item.wide_tall").css("width",Math.floor(e/i*n)+"px");else{var a=1e3<c(window).width()?6:3;this.$el.hasClass("fullwidth-constrained")&&1e3<c(window).width()&&(a=4);for(var o=1;o<a;o++)(e-o)%i==0&&(this.$el.find(".elastic-portfolio-item:not(.wide):not(.wide_tall)").css("width",(e-o)/i+"px"),this.$el.find(".elastic-portfolio-item.wide, .elastic-portfolio-item.wide_tall").css("width",(e-o)/i*n+"px"))}}},t.prototype.masonryZindex=function(){var n;0<c('body .portfolio-items:not(".carousel") > .col').length&&c('body .portfolio-items:not(".carousel") > .col').offset().left&&(n=this,c('body .portfolio-items:not(".carousel")').each(function(){var e={},a={},o=c(this);c(this).find("> .col").each(function(){var t,t=(t=c(this).offset()).left;e[c(this).index()]=t,c(this).css("z-index",Math.abs(Math.floor(c(this).offset().left/20)))});var t=jQuery.map(e,function(t){return t}),t;(t=n.removeDuplicates(t)).sort(function(t,e){return t-e});for(var i=0;i<t.length;i++)a[t[i]]=i;jQuery.each(e,function(t,e){var i,n=e;jQuery.each(a,function(t,e){n===t&&(i=e)}),o.find("> .col:eq("+t+")").attr("data-delay-amount",i)})}))},t.prototype.removeDuplicates=function(t){for(var e,i=t.length,n=[],a={},e=0;e<i;e++)a[t[e]]=0;for(e in a)n.push(e);return n},t.prototype.beforeReLayout=function(){var t=this,e,i,n,a,a;clearTimeout(this.clearIsoAnimation),this.$el.find(".col").addClass("no-transition"),this.clearIsoAnimation=setTimeout(function(){t.$el.find(".col").removeClass("no-transition")},700),1600<window.innerWidth?this.$el.hasClass("fullwidth-constrained")?this.$el.is('[data-masonry-type="photography"]')?this.mediaQuerySize="three":this.mediaQuerySize="four":this.$el.hasClass("constrain-max-cols")?this.mediaQuerySize="four":this.mediaQuerySize="five":window.innerWidth<=1600&&1300<window.innerWidth?this.$el.hasClass("fullwidth-constrained")&&this.$el.is('[data-masonry-type="photography"]')?this.mediaQuerySize="three":this.mediaQuerySize="four":window.innerWidth<=1300&&990<window.innerWidth?this.$el.hasClass("constrain-max-cols")?this.mediaQuerySize="four":this.mediaQuerySize="three":window.innerWidth<=990&&470<window.innerWidth?this.mediaQuerySize="two":window.innerWidth<=470&&(this.mediaQuerySize="one"),0<c("#boxed").length&&(1300<window.innerWidth?this.mediaQuerySize="four":window.innerWidth<1300&&990<window.innerWidth?this.$el.hasClass("constrain-max-cols")?this.mediaQuerySize="four":this.mediaQuerySize="three":window.innerWidth<990&&(this.mediaQuerySize="one")),this.portfolioItemWidths(),this.$el.is('[data-bypass-cropping="true"]')||(0<this.$el.find('.col.elastic-portfolio-item[class*="regular"]:visible').length||0<this.$el.find('.col.elastic-portfolio-item[class*="wide"]:visible').length||0<this.$el.find('.col.elastic-portfolio-item[class*="tall"]:visible').length||0<this.$el.find('.col.elastic-portfolio-item[class*="wide_tall"]:visible').length?(e=this.$el.is('[data-gutter*="px"]')&&0<this.$el.attr("data-gutter").length&&"none"!=this.$el.attr("data-gutter")?parseInt(this.$el.attr("data-gutter")):0,i=470<window.innerWidth?2:1,n="regular",0===this.$el.find('.col.elastic-portfolio-item[class*="regular"]:visible').length&&0<this.$el.find(".col.elastic-portfolio-item.wide:visible").length?n="wide":0===this.$el.find('.col.elastic-portfolio-item[class*="regular"]:visible').length&&0<this.$el.find(".col.elastic-portfolio-item.wide_tall:visible").length?(n="wide_tall",i=1):0===this.$el.find('.col.elastic-portfolio-item[class*="regular"]:visible').length&&0<this.$el.find(".col.elastic-portfolio-item.tall:visible").length&&(n="tall",i=1),this.$el.find(".col.elastic-portfolio-item."+n+" img").css("height","auto"),a=this.$el.find(".col.elastic-portfolio-item."+n+":visible img").height(),this.$el.find('.col.elastic-portfolio-item[class*="tall"] img, .col.elastic-portfolio-item.wide img, .col.elastic-portfolio-item.regular img').removeClass("auto-height"),this.$el.find('.col.elastic-portfolio-item[class*="tall"] img:not(.custom-thumbnail)').css("height",a*i+2*e),"regular"===n||"wide"===n?this.$el.find(".col.elastic-portfolio-item.wide img:not(.custom-thumbnail), .col.elastic-portfolio-item.regular img:not(.custom-thumbnail)").css("height",a):this.$el.find(".col.elastic-portfolio-item.wide img:not(.custom-thumbnail), .col.elastic-portfolio-item.regular img:not(.custom-thumbnail)").css("height",a/2-2*e),this.$el.find('.col.elastic-portfolio-item[class*="tall"] .parallaxImg').css("height",a*i+2*parseInt(this.$el.find(".col.elastic-portfolio-item").css("padding-bottom"))),"regular"===n||"wide"===n?this.$el.find(".col.elastic-portfolio-item.regular .parallaxImg, .col.elastic-portfolio-item.wide .parallaxImg").css("height",a):this.$el.find(".col.elastic-portfolio-item.regular .parallaxImg, .col.elastic-portfolio-item.wide .parallaxImg").css("height",a/2-2*e)):this.$el.find('.col.elastic-portfolio-item[class*="tall"] img, .col.elastic-portfolio-item.wide img, .col.elastic-portfolio-item.regular img').addClass("auto-height")),this.$el.hasClass("no-masonry")&&0<this.$el.find(".col:first:visible").length&&0===this.$el.parents(".wpb_gallery").length&&(this.$el.is('[data-ps="9"]')||this.$el.is('[data-bypass-cropping="true"]')||(this.$el.find(".col img").css("height","auto"),a=this.$el.find(".col:first:visible img").height(),this.$el.find(".col img:not(.custom-thumbnail)").css("height",a),this.$el.find(".col .parallaxImg").css("height",a)))},t.prototype.reLayout=function(){this.beforeReLayout(),this.$el.isotope()&&this.$el.isotope("layout")},t.prototype.updatePrettyPhotoGallery=function(){var t,e;0<this.$el.find('a[rel^="prettyPhoto"]').length&&(t=Math.floor(1e4*Math.random()),e=this.$el.attr("data-current-cat"),this.$el.find(".col"+e).find('a[rel^="prettyPhoto"]').attr("rel","prettyPhoto["+t+"_sorted]"))},t.prototype.updateMagPrettyPhotoGallery=function(){var t=this.$el.attr("data-current-cat"),e=Math.floor(1e4*Math.random());this.$el.is('[data-lightbox-only="true"]')?this.$el.find(".col").each(function(){c(this).find("a.gallery").removeClass("gallery").removeClass("magnific"),c(this).is(t)&&(0<c(this).find(".parallaxImg-wrap").length?0<c('body[data-ls="fancybox"]').length?c(this).find('.work-item > a:not([target="_blank"])').attr("data-fancybox","group_"+e):c(this).find('.work-item > a:not([target="_blank"])').addClass("gallery").addClass("magnific"):0<c('body[data-ls="fancybox"]').length?c(this).find('.work-item a:not([target="_blank"])').attr("data-fancybox","group_"+e):c(this).find('.work-item a:not([target="_blank"])').addClass("gallery").addClass("magnific"))}):0<this.$el.find(".work-item.style-1").length&&this.$el.find(".col").each(function(){c(this).find("a.gallery").removeClass("gallery").removeClass("magnific"),c(this).is(t)&&(0<c('body[data-ls="fancybox"]').length?c(this).find(".work-info .vert-center a:first-of-type").attr("data-fancybox","group_"+e):c(this).find(".work-info .vert-center a:first-of-type").addClass("gallery").addClass("magnific"))})},t.prototype.portfolioAccentColor=function(){this.$el.find(".col").each(function(){c(this).has("[data-project-color]")&&(c(this).find(".work-info-bg, .bottom-meta").css("background-color",c(this).attr("data-project-color")),c(this).find(".parallaxImg-rendered-layer .bg-overlay").css("border-color",c(this).attr("data-project-color")))})},t.prototype.isotopeCatSelection=function(){var e=[],i=0;this.$el.parent().parent().find("div[class^=portfolio-filters] ul li").each(function(t){0<c(this).find("a").length&&(e[i]=c(this).find("a").attr("data-filter").substring(1),i++)}),e.shift();var t="",n=this;this.$el.find("> div").each(function(){t+=c(this).attr("data-project-cat")}),(t=t.split(" ")).pop();var a=[],o;c.each(t,function(t,e){-1===c.inArray(e,a)&&a.push(e)}),this.$el.is("[data-categories-to-show]")&&0!=this.$el.attr("data-categories-to-show").length&&"all"!=this.$el.attr("data-categories-to-show")?(o=(o=this.$el.attr("data-categories-to-show").replace(/,/g," ")).split(" "),this.$el.hasClass("infinite_scroll")||this.$el.removeAttr("data-categories-to-show")):o=a;var s=[];jQuery.grep(e,function(t){-1==jQuery.inArray(t,a)&&s.push(t),-1==jQuery.inArray(t,o)&&s.push(t)}),0!=s.length&&this.$el.parent().parent().find("div[class^=portfolio-filters] ul li").each(function(){0<c(this).find("a").length&&(-1!=jQuery.inArray(c(this).find("a").attr("data-filter").substring(1),s)?(0<c(this).find("> ul.children").length?c(this).find("> a"):c(this)).hide():c(this).show())})},t.prototype.portfolioCommentOrder=function(){c("body").hasClass("mobile")&&c("body").hasClass("single-portfolio")&&0<c("#respond").length?c("#sidebar").insertBefore(".comments-section"):c("body").hasClass("single-portfolio")&&0<c("#respond").length&&c("#sidebar").insertAfter(".post-area")},e.prototype.resizeHandler=function(){c(window).resize(this.sliderCalcs.bind(this)),c(window).resize(this.splitLineText.bind(this))},e.prototype.positionFix=function(){var t,e;1<this.$el.parents(".span_12").find("> .wpb_column").length&&(t=this.$el.clone(),e=this.$el.parents(".span_12"),this.$el.remove(),e.prepend(t),this.$el=t)},e.prototype.sliderCalcs=function(){var t=0<c(".body-border-top").length&&1e3<c(window).width()?c(".body-border-top").height():0,e;void 0!==window.vc_iframe&&1<this.$el.parents(".wpb_row").parent().index()&&this.$el.parents(".first-section").removeClass("first-section"),0<this.$el.parents(".first-section").length?this.$el.css("height",c(window).height()-this.$el.offset().top-t):this.$el.css("height",c(window).height())},e.prototype.sliderRotate=function(){var t,e,i,n;0<c("body.vc_editor").length||(t=0<this.$el.find(".project-slides").length?".dot-nav > span":".controls > li",e=0<this.$el.find(".project-slides").length?"span":" li",i=this.$el.find(t).length,(this.$el.find(t+".active").index()+1===i?this.$el.find(t+":first-child"):this.$el.find(t+".active").next(e)).trigger("click"))},e.prototype.sliderResetRotate=function(){var t;clearInterval(this.rotationInterval),0!=this.rotationSpeed&&(t=this.rotationSpeed<100?4e3:this.rotationSpeed,this.rotationInterval=setInterval(this.sliderRotate.bind(this),t))},e.prototype.splitLineText=function(){var t=0<this.$el.find(".project-slides").length?".project-slide":".nectar-recent-post-slide",e=0<this.$el.find(".project-slides").length?".project-info h1":".inner-wrap h2 a";this.$el.find(t).each(function(t){c(this).find(e).each(function(){var t=c(this).text(),t;t=(t=t.trim()).split(" "),c(this)[0].innerHTML="";for(var e=0;e<t.length;e++)c(this)[0].innerHTML+="<span>"+t[e]+"</span> "}),c(this).find(e+" > span").wrapInner('<span class="inner" />')})},e.prototype.sliderInit=function(){var n=this.$el.find(".project-slide").length,a=this,t;0!=this.rotationSpeed&&(t=this.rotationSpeed<100?4e3:this.rotationSpeed,this.rotationInterval=setInterval(this.sliderRotate.bind(this),t)),this.$el.find(".zoom-slider-controls .next").on("click",function(){var t=c(this);if(t.parent().hasClass("timeout")||setTimeout(function(){t.parent().removeClass("timeout")},1150),c(this).parent().hasClass("timeout"))return!1;c(this).parent().addClass("timeout"),a.sliderResetRotate();var e=c(this).parents(".nectar_fullscreen_zoom_recent_projects").find(".project-slide.current"),i=c(this).parents(".nectar_fullscreen_zoom_recent_projects");return i.find(".project-slide").removeClass("next").removeClass("prev"),i.find(".project-slide").each(function(t){t<e.index()+1&&e.index()+1<n?c(this).addClass("prev"):c(this).addClass("next")}),e.index()+1===n&&i.find(".project-slide:first-child").addClass("no-trans"),setTimeout(function(){e.index()+1===n?(i.find(".project-slide:first-child").removeClass("no-trans").removeClass("next").removeClass("prev").addClass("current"),i.find(".project-slide:last-child").removeClass("next").removeClass("current").addClass("prev")):(e.next(".project-slide").removeClass("next").removeClass("prev").addClass("current"),e.removeClass("current").addClass("prev")),0<i.find(".dot-nav").length&&(i.find(".dot-nav span.active").removeClass("active"),i.find(".dot-nav span:nth-child("+(i.find(".project-slide.current").index()+1)+")").addClass("active"))},30),!1}),this.$el.find(".zoom-slider-controls .prev").on("click",function(){var t=c(this);if(t.parent().hasClass("timeout")||setTimeout(function(){t.parent().removeClass("timeout")},1150),c(this).parent().hasClass("timeout"))return!1;c(this).parent().addClass("timeout"),a.sliderResetRotate();var e=c(this).parents(".nectar_fullscreen_zoom_recent_projects").find(".project-slide.current"),i=c(this).parents(".nectar_fullscreen_zoom_recent_projects");return i.find(".project-slide").removeClass("next").removeClass("prev"),i.find(".project-slide").each(function(t){t<e.index()||0==e.index()?c(this).addClass("prev"):c(this).addClass("next")}),0==e.index()&&i.find(".project-slide:last-child").addClass("no-trans"),setTimeout(function(){0==e.index()?(i.find(".project-slide:last-child").removeClass("no-trans").removeClass("next").removeClass("prev").addClass("current"),i.find(".project-slide:first-child").removeClass("next").removeClass("prev").removeClass("current").addClass("next")):(e.prev(".project-slide").removeClass("next").removeClass("prev").addClass("current"),e.removeClass("current").addClass("next")),0<i.find(".dot-nav").length&&(i.find(".dot-nav span.active").removeClass("active"),i.find(".dot-nav span:nth-child("+(i.find(".project-slide.current").index()+1)+")").addClass("active"))},30),!1}),this.$el.find("> .normal-container > .dot-nav").remove(),this.$el.find("> .normal-container").append('<div class="dot-nav"></div>');for(var e=0;e<n;e++)0==e?this.$el.find(".dot-nav").append('<span class="dot active"><span></span></span>'):this.$el.find(".dot-nav").append('<span class="dot"><span></span></span>');var o=1;this.$el.find(".dot-nav > span").on("click",function(){var t,e,i,n;c(this).hasClass("active")||((t=c(this)).parent().hasClass("timeout")||setTimeout(function(){t.parent().removeClass("timeout")},1150),c(this).parent().hasClass("timeout")||(c(this).parent().addClass("timeout"),a.sliderResetRotate(),c(this).parent().find("span.active").removeClass("active"),c(this).addClass("active"),o=c(this).index()+1,e=c(this).parents(".nectar_fullscreen_zoom_recent_projects").find(".project-slide.current"),i=c(this).parents(".nectar_fullscreen_zoom_recent_projects"),n=e.index()+1,i.find(".project-slide").removeClass("next").removeClass("prev"),i.find(".project-slide").each(function(t){t<o-1?c(this).addClass("prev"):c(this).addClass("next")}),o<n?(i.find(".project-slide").eq(o-1).addClass("no-trans").addClass("prev").removeClass("next"),setTimeout(function(){i.find(".project-slide").eq(o-1).removeClass("no-trans").removeClass("next").removeClass("prev").addClass("current"),e.removeClass("current").addClass("next")},30)):(i.find(".project-slide").eq(o-1).addClass("no-trans").addClass("next").removeClass("prev"),setTimeout(function(){i.find(".project-slide").eq(o-1).removeClass("no-trans").removeClass("next").removeClass("prev").addClass("current"),e.removeClass("current").addClass("prev")},30))))})},i.prototype.resizeHandler=function(){c(window).resize(this.carouselHeightCalcs.bind(this))},i.prototype.carouselInit=function(){var e=this.$el,t=this,i="true"===this.$el.parents(".carousel-wrap").attr("data-full-width")?"auto":3,n="true"===this.$el.parents(".carousel-wrap").attr("data-full-width")?"auto":"",a="true"===this.$el.parents(".carousel-wrap").attr("data-full-width")?500:453,o,s,r="true"===this.$el.attr("data-autorotate"),l,h,h=!(0<c("body.ascend").length&&"true"!==this.$el.parents(".carousel-wrap").attr("data-full-width")||0<c("body.material").length&&"true"!==this.$el.parents(".carousel-wrap").attr("data-full-width"))||this.$el.find("li").length%3==0?l=!0:!(l=!1),o=parseInt(this.$el.attr("data-scroll-speed"))?parseInt(this.$el.attr("data-scroll-speed")):700,s=this.$el.is("[data-easing]")?this.$el.attr("data-easing"):"linear";this.$el.find(".col").each(function(){c(this).has("[data-project-color]")&&c(this).find(".work-info-bg, .bottom-meta").css("background-color",c(this).attr("data-project-color"))});var d=e;0===e.find("img").length&&(d=c("body")),imagesLoaded(d,function(){e.carouFredSel({circular:l,infinite:h,height:"auto",responsive:!0,items:{width:a,visible:{min:1,max:i}},swipe:{onTouch:!0,onMouse:!0,options:{excludedElements:"button, input, select, textarea, .noSwipe",tap:function(t,e){!c(e).attr("href")||c(e).is('[target="_blank"]')||c(e).is('[data-fancybox^="group_"]')||c(e).is('[rel^="prettyPhoto"]')||c(e).is(".magnific-popup")||c(e).is(".magnific")||window.open(c(e).attr("href"),"_self")}},onBefore:function(){e.find(".work-item").trigger("mouseleave"),e.find(".work-item .work-info a").trigger("mouseup")}},scroll:{items:n,easing:s,duration:o,onBefore:function(t){(0<c("body.ascend").length&&"true"!=e.parents(".carousel-wrap").attr("data-full-width")||0<c("body.material").length&&"true"!=e.parents(".carousel-wrap").attr("data-full-width"))&&e.parents(".carousel-wrap").find(".item-count .total").html(Math.ceil(e.find("> li").length/e.triggerHandler("currentVisible").length))},onAfter:function(t){(0<c("body.ascend").length&&"true"!=e.parents(".carousel-wrap").attr("data-full-width")||0<c("body.material").length&&"true"!=e.parents(".carousel-wrap").attr("data-full-width"))&&(e.parents(".carousel-wrap").find(".item-count .current").html(e.triggerHandler("currentPage")+1),e.parents(".carousel-wrap").find(".item-count .total").html(Math.ceil(e.find("> li").length/e.triggerHandler("currentVisible").length)))}},prev:{button:function(){return e.parents(".carousel-wrap").find(".carousel-prev")}},next:{button:function(){return e.parents(".carousel-wrap").find(".carousel-next")}},auto:{play:r}},{transition:!0}).animate({opacity:1},1300),e.parents(".carousel-wrap").wrap('<div class="carousel-outer">'),"true"===e.parents(".carousel-wrap").attr("data-full-width")&&e.parents(".carousel-outer").css("overflow","visible"),(0<c("body.ascend").length&&"true"!=e.parents(".carousel-wrap").attr("data-full-width")||0<c("body.material").length&&"true"!=e.parents(".carousel-wrap").attr("data-full-width"))&&c('<div class="item-count"><span class="current">1</span>/<span class="total">'+e.find("> li").length/e.triggerHandler("currentVisible").length+"</span></div>").insertAfter(e.parents(".carousel-wrap").find(".carousel-prev")),e.addClass("finished-loading"),t.carouselHeightCalcs()})},i.prototype.carouselHeightCalcs=function(){var t,e,i;this.$el.hasClass("finished-loading")&&(e="true"===(t=this).$el.parents(".carousel-wrap").attr("data-full-width")&&0<this.$el.find(".style-2, .style-3, .style-4").length?0:28,i=0,this.$el.find("> li").each(function(){c(this).find(".work-meta").height()>i&&(i=c(this).find(".work-meta").height())}),setTimeout(function(){t.$el.parents(".caroufredsel_wrapper").css({height:t.$el.find(".work-item").outerHeight()+i+e-2+"px"})},30),(0<c("body.ascend").length&&"true"!=this.$el.parents(".carousel-wrap").attr("data-full-width")||0<c("body.material").length&&"true"!=this.$el.parents(".carousel-wrap").attr("data-full-width"))&&(this.$el.parents(".carousel-wrap").find(".item-count .current").html(Math.ceil((this.$el.triggerHandler("currentPosition")+1)/this.$el.triggerHandler("currentVisible").length)),this.$el.parents(".carousel-wrap").find(".item-count .total").html(Math.ceil(this.$el.find("> li").length/this.$el.triggerHandler("currentVisible").length))))},window.SalientPortfolio=t,window.SalientRecentProjectsFullScreen=e,window.SalientRecentProjectsCarousel=i}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,a){return jQuery.easing[jQuery.easing.def](t,e,i,n,a)},easeInQuad:function(t,e,i,n,a){return n*(e/=a)*e+i},easeOutQuad:function(t,e,i,n,a){return-n*(e/=a)*(e-2)+i},easeInOutQuad:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,a){return n*(e/=a)*e*e+i},easeOutCubic:function(t,e,i,n,a){return n*((e=e/a-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,a){return n*(e/=a)*e*e*e+i},easeOutQuart:function(t,e,i,n,a){return-n*((e=e/a-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,a){return n*(e/=a)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,a){return n*((e=e/a-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,a){return-n*Math.cos(e/a*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,a){return n*Math.sin(e/a*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,a){return-n/2*(Math.cos(Math.PI*e/a)-1)+i},easeInExpo:function(t,e,i,n,a){return 0==e?i:n*Math.pow(2,10*(e/a-1))+i},easeOutExpo:function(t,e,i,n,a){return e==a?i+n:n*(1-Math.pow(2,-10*e/a))+i},easeInOutExpo:function(t,e,i,n,a){return 0==e?i:e==a?i+n:(e/=a/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(2-Math.pow(2,-10*--e))+i},easeInCirc:function(t,e,i,n,a){return-n*(Math.sqrt(1-(e/=a)*e)-1)+i},easeOutCirc:function(t,e,i,n,a){return n*Math.sqrt(1-(e=e/a-1)*e)+i},easeInOutCirc:function(t,e,i,n,a){return(e/=a/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,a){var o=1.70158,s=0,r=n,r,o,o;return 0==e?i:1==(e/=a)?i+n:(s=s||.3*a,o=r<Math.abs(n)?(r=n,s/4):s/(2*Math.PI)*Math.asin(n/r),-(r*Math.pow(2,10*--e)*Math.sin(2*(e*a-o)*Math.PI/s))+i)},easeOutElastic:function(t,e,i,n,a){var o=1.70158,s=0,r=n,r,o,o;return 0==e?i:1==(e/=a)?i+n:(s=s||.3*a,o=r<Math.abs(n)?(r=n,s/4):s/(2*Math.PI)*Math.asin(n/r),r*Math.pow(2,-10*e)*Math.sin(2*(e*a-o)*Math.PI/s)+n+i)},easeInOutElastic:function(t,e,i,n,a){var o=1.70158,s=0,r=n,r,o,o;return 0==e?i:2==(e/=a/2)?i+n:(s=s||.3*a*1.5,o=r<Math.abs(n)?(r=n,s/4):s/(2*Math.PI)*Math.asin(n/r),e<1?-.5*r*Math.pow(2,10*--e)*Math.sin(2*(e*a-o)*Math.PI/s)+i:r*Math.pow(2,-10*--e)*Math.sin(2*(e*a-o)*Math.PI/s)*.5+n+i)},easeInBack:function(t,e,i,n,a,o){return n*(e/=a)*e*(((o=null==o?1.70158:o)+1)*e-o)+i},easeOutBack:function(t,e,i,n,a,o){return n*((e=e/a-1)*e*(((o=null==o?1.70158:o)+1)*e+o)+1)+i},easeInOutBack:function(t,e,i,n,a,o){return null==o&&(o=1.70158),(e/=a/2)<1?n/2*e*e*((1+(o*=1.525))*e-o)+i:n/2*((e-=2)*e*((1+(o*=1.525))*e+o)+2)+i},easeInBounce:function(t,e,i,n,a){return n-jQuery.easing.easeOutBounce(t,a-e,0,n,a)+i},easeOutBounce:function(t,e,i,n,a){return(e/=a)<1/2.75?7.5625*n*e*e+i:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,a){return e<a/2?.5*jQuery.easing.easeInBounce(t,2*e,0,n,a)+i:.5*jQuery.easing.easeOutBounce(t,2*e-a,0,n,a)+.5*n+i}}),function(t){var u=t(window);t.fn.visible=function(t,e,i){if(!(this.length<1)){var n=1<this.length?this.eq(0):this,a=n.get(0),o=u.width(),s=u.height(),i=i||"both",e=!0!==e||a.offsetWidth*a.offsetHeight;if("function"==typeof a.getBoundingClientRect){var r=a.getBoundingClientRect(),l=0<=r.top&&r.top<s,h=0<r.bottom&&r.bottom<=s,d=0<=r.left&&r.left<o,c=0<r.right&&r.right<=o,f=t?l||h:l&&h,r=t?d||c:d&&c;return"both"===i?e&&f&&r:"vertical"===i?e&&f:"horizontal"===i?e&&r:void 0}var l=u.scrollTop(),h=l+s,d=u.scrollLeft(),c=d+o,f=n.offset(),r=f.top,s=r+n.height(),o=f.left,f=o+n.width(),n=!0===t?s:r,r=!0===t?r:s,s=!0===t?f:o,f=!0===t?o:f;return"both"===i?!!e&&r<=h&&l<=n&&f<=c&&d<=s:"vertical"===i?!!e&&r<=h&&l<=n:"horizontal"===i?!!e&&f<=c&&d<=s:void 0}}}(jQuery),jQuery(document).ready(function(e){"use strict";var i,n,a;"true"!=nectar_theme_info.using_salient&&(i=[],e(".portfolio-items:not(.carousel)").each(function(t){e(this).attr("instance",t),e(this).parent().parent().find("div[class^=portfolio-filters]").attr("instance",t),i[t]=new SalientPortfolio(e(this))}),n=[],e(".nectar_fullscreen_zoom_recent_projects").each(function(t){n[t]=new SalientRecentProjectsFullScreen(e(this))}),a=[],e("ul.portfolio-items.carousel").each(function(t){a[t]=new SalientRecentProjectsCarousel(e(this))}))});
jQuery(document).ready(function(i){"use strict";function t(){this.$body=i("body"),this.$window=i(window),this.$wpAdminBar=i("#wpadminbar"),this.usingMobileBrowser=!!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/),this.mouseEvents(),this.nectarLove(),0<i("body").find(".nectar-social.fixed").length&&this.fixedStyle()}t.prototype.mouseEvents=function(){var e;this.$body.on("click","#single-below-header .nectar-social a",function(){return!1}),i("body.single-product .nectar-social").addClass("woo"),this.$body.on("click",".facebook-share:not(.inactive)",this.facebookShare),this.$body.on("click",'.nectar-social:not(".woo") .twitter-share:not(.inactive)',this.twitterShare),this.$body.on("click",".nectar-social.woo .twitter-share",this.wooTwitterShare),this.$body.on("click",'.nectar-social:not(".woo") .linkedin-share:not(.inactive)',this.linkedInShare),this.$body.on("click",".nectar-social.woo .linkedin-share",this.woolinkedInShare),this.$body.on("click",'.nectar-social:not(".woo") .pinterest-share:not(.inactive)',this.pinterestShare),this.$body.on("click",".nectar-social.woo .pinterest-share",this.wooPinterestShare),this.$body.on("click",".nectar-social.fixed > a",function(){return!1}),this.usingMobileBrowser?this.$body.on("click",".nectar-social.hover .share-btn",function(){return 0<i(this).parents('[id*="-meta"]').length&&i(this).parents('[id*="-meta"]').addClass("social-hovered"),0<i(this).parents("#single-below-header").length&&i(this).parents("#single-below-header").addClass("social-hovered"),i(this).parent().addClass("visible"),!1}):(this.$body.on("mouseenter",".nectar-social.hover .share-btn",function(){clearTimeout(e),0<i(this).parents('[id*="-meta"]').length&&i(this).parents('[id*="-meta"]').addClass("social-hovered"),0<i(this).parents("#single-below-header").length&&i(this).parents("#single-below-header").addClass("social-hovered"),i(this).parent().addClass("visible")}),this.$body.on("mouseleave",".nectar-social.hover",function(){var t=i(this);e=setTimeout(function(){t.removeClass("visible"),0<t.parents('[id*="-meta"]').length&&t.parents('[id*="-meta"]').removeClass("social-hovered"),0<t.parents("#single-below-header").length&&t.parents("#single-below-header").removeClass("social-hovered")},200)}))},t.prototype.facebookShare=function(){var t=window.location.href.replace(window.location.hash,"");return window.open("https://www.facebook.com/sharer/sharer.php?u="+t,"facebookWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.facebookShare=function(){var t=window.location.href.replace(window.location.hash,"");return window.open("https://www.facebook.com/sharer/sharer.php?u="+t,"facebookWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.twitterShare=function(){var t=window.location.href.replace(window.location.hash,""),e,e=0<i(".section-title h1").length?encodeURIComponent(i(".section-title h1").text()):encodeURIComponent(i(document).find("title").text());return window.open("http://twitter.com/intent/tweet?text="+e+" "+t,"twitterWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.wooTwitterShare=function(){var t=window.location.href.replace(window.location.hash,"");return window.open("http://twitter.com/intent/tweet?text="+i("h1.product_title").text()+" "+t,"twitterWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.linkedInShare=function(){var t=window.location.href.replace(window.location.hash,""),e,e=0<i(".section-title h1").length?encodeURIComponent(i(".section-title h1").text()):encodeURIComponent(i(document).find("title").text());return window.open("http://www.linkedin.com/shareArticle?mini=true&url="+t+"&title="+e,"linkedInWindow","height=480,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.woolinkedInShare=function(){var t=window.location.href.replace(window.location.hash,"");return window.open("http://www.linkedin.com/shareArticle?mini=true&url="+t+"&title="+i("h1.product_title").text(),"twitterWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.pinterestShare=function(){var t=window.location.href.replace(window.location.hash,""),e=0<i(".single-portfolio").length&&"empty"!=i("div[data-featured-img]").attr("data-featured-img")?i("div[data-featured-img]").attr("data-featured-img"):i("#ajax-content-wrap img").first().attr("src"),o,o=0<i(".section-title h1").length?encodeURIComponent(i(".section-title h1").text()):encodeURIComponent(i(document).find("title").text());return window.open("http://pinterest.com/pin/create/button/?url="+t+"&media="+e+"&description="+o,"pinterestWindow","height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.wooPinterestShare=function(){var t=(0<i("img.attachment-shop_single").length?i("img.attachment-shop_single"):i(".single-product-main-image img")).first().attr("src"),e=window.location.href.replace(window.location.hash,"");return window.open("http://pinterest.com/pin/create/button/?url="+e+"&media="+t+"&description="+i("h1.product_title").text(),"pinterestWindow","height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.nectarLove=function(){this.$body.on("click",".nectar-love",function(){var e=i(this),t=i(this).attr("id"),o=i(this);if(e.hasClass("loved")||i(this).hasClass("inactive"))return!1;var t={action:"nectar-love",loves_id:t,love_nonce:window.nectarLove.loveNonce};return i.post(window.nectarLove.ajaxurl,t,function(t){e.find(".nectar-love-count").html(t),e.addClass("loved").attr("title","You already love this!"),o.find(".icon-salient-heart-2").addClass("loved")}),i(this).addClass("inactive"),!1})},t.prototype.fixedStyle=function(){function t(){150<i(window).scrollTop()&&(i(".nectar-social.fixed").addClass("visible"),i(window).off("scroll",t),i(window).on("scroll",e))}function e(){i(window).scrollTop()<150&&(i(".nectar-social.fixed").removeClass("visible"),i(window).off("scroll",e),i(window).on("scroll",t))}i(".wpb_wrapper .nectar-social.fixed").each(function(t){var t;0!==t||(t=i(this).clone(),i("body").append(t)),i(this).remove()}),0<i(".nectar-social.fixed").length&&(i(window).width()<1e3&&(150<i(window).scrollTop()?i(window).on("scroll",e):i(window).on("scroll",t)),i(window).on("smartresize",function(){1e3<i(window).width()?i(".nectar-social.fixed").addClass("visible"):i(window).scrollTop()<150?(i(window).off("scroll",e),i(window).on("scroll",t),i(".nectar-social.fixed").removeClass("visible")):(i(window).off("scroll",t),i(window).on("scroll",e))}))};var e=new t;window.NectarSocial=t});
/*
* jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
*/
!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}void 0!==n.easing&&(n.easing.jswing=n.easing.swing);var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,o=1.70158,c=1.525*o,s=2*a/3,f=2*a/4.5;return n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-t(2,20*n-10)*r((20*n-11.125)*f)/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return 2.70158*n*n*n-o*n*n},easeOutBack:function(n){return 1+2.70158*t(n-1,3)+o*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-c)/2:(t(2*n-2,2)*((c+1)*(2*n-2)+c)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}}),n});
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(u){var f,d,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in window.document||9<=window.document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],w=Array.prototype.slice;if(u.event.fixHooks)for(var i=e.length;i;)u.event.fixHooks[e[--i]]=u.event.mouseHooks;var c=u.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],n,{passive:false});else this.onmousewheel=n;u.data(this,"mousewheel-line-height",c.getLineHeight(this)),u.data(this,"mousewheel-page-height",c.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],n,!1);else this.onmousewheel=null;u.removeData(this,"mousewheel-line-height"),u.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=u(e),i=t["offsetParent"in u.fn?"offsetParent":"parent"]();return i.length||(i=u("body")),parseInt(i.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return u(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function n(e){var t,i=e||window.event,n=w.call(arguments,1),o=0,l=0,s=0;if((e=u.event.fix(i)).type="mousewheel","detail"in i&&(s=-1*i.detail),"wheelDelta"in i&&(s=i.wheelDelta),"wheelDeltaY"in i&&(s=i.wheelDeltaY),"wheelDeltaX"in i&&(l=-1*i.wheelDeltaX),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(l=-1*s,s=0),o=0===s?l:s,"deltaY"in i&&(o=s=-1*i.deltaY),"deltaX"in i&&(l=i.deltaX,0===s&&(o=-1*l)),0!==s||0!==l){if(1===i.deltaMode){var a=u.data(this,"mousewheel-line-height");o*=a,s*=a,l*=a}else if(2===i.deltaMode){var h=u.data(this,"mousewheel-page-height");o*=h,s*=h,l*=h}if(t=Math.max(Math.abs(s),Math.abs(l)),(!d||t<d)&&g(i,d=t)&&(d/=40),g(i,t)&&(o/=40,l/=40,s/=40),o=Math[1<=o?"floor":"ceil"](o/d),l=Math[1<=l?"floor":"ceil"](l/d),s=Math[1<=s?"floor":"ceil"](s/d),c.settings.normalizeOffset&&this.getBoundingClientRect){var r=this.getBoundingClientRect();e.offsetX=e.clientX-r.left,e.offsetY=e.clientY-r.top}return e.deltaX=l,e.deltaY=s,e.deltaFactor=d,e.deltaMode=0,n.unshift(e,o,l,s),f&&window.clearTimeout(f),f=window.setTimeout(m,200),(u.event.dispatch||u.event.handle).apply(this,n)}}function m(){d=null}function g(e,t){return c.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}u.fn.extend({mousewheel:function(e){return e?this.on("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.off("mousewheel",e)}})});

var headerEl=document.getElementById("header-outer"),headerSpaceEl=document.getElementById("header-space");void 0!==headerEl&&null!=headerEl&&void 0!==headerSpaceEl&&null!=headerSpaceEl&&headerSpaceEl.hasAttribute("data-secondary-header-display")&&(headerSpaceEl.style.height=headerEl.clientHeight+"px"),jQuery(function(t){"use strict";var a,e,r,n,o,n,o=!1,d,i;function h(){var e=a.offset().top;t("#page-header-wrap.fullscreen-header").css("height","auto"),a.css("height",parseInt(window.innerHeight)-parseInt(e)+"px")}(o=navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)?!0:o)&&0<t("#page-header-bg.fullscreen-header").length&&(a=t("#page-header-bg"),h(),d=window.innerWidth,i=window.innerHeight,t(window).resize(function(){t(window).width()!=d&&t(window).height!=i&&(h(),d=window.innerWidth,i=window.innerHeight)})),o&&0<t(".nectar_fullscreen_zoom_recent_projects").length&&(e=0<t(".body-border-top").length&&1e3<t(window).width()?t(".body-border-top").height():0,t(".nectar_fullscreen_zoom_recent_projects").each(function(){0<t(this).parents(".first-section").length?t(this).css("height",t(window).height()-t(this).offset().top-e):t(this).css("height",t(window).height())})),0<t('#header-outer[data-format="centered-menu-bottom-bar"]').length&&(r=t('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),n=t('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_3'),o=t("#header-secondary-outer"),(n=n.find("#logo").clone()).is('[data-supplied-ml="true"]')&&n.find("img:not(.mobile-only-logo)").remove(),n.find("img.starting-logo").remove(),0<o.length&&o.addClass("centered-menu-bottom-bar"),0<t('#header-outer[data-condense="true"]').length&&0==t('#header-outer[data-menu-bottom-bar-align="left"]').length&&r.prepend(n)),t('#page-header-bg[data-animate-in-effect="zoom-out"]').addClass("loaded")});
/*!
* jQuery Transit - CSS3 transitions and transformations
* (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
* MIT Licensed.
*/

(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var d=document.createElement("div");var q={};function b(v){if(v in d.style){return v}var u=["Moz","Webkit","O","ms"];var r=v.charAt(0).toUpperCase()+v.substr(1);if(v in d.style){return v}for(var t=0;t<u.length;++t){var s=u[t]+r;if(s in d.style){return s}}}function e(){d.style[q.transform]="";d.style[q.transform]="rotateY(90deg)";return d.style[q.transform]!==""}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=b("transition");q.transitionDelay=b("transitionDelay");q.transform=b("transform");q.transformOrigin=b("transformOrigin");q.transform3d=e();var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var f=q.transitionEnd=i[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]}}d=null;k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()},set:function(s,r){var t=r;if(!(t instanceof j)){t=new j(t)}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(true)}else{s.style[q.transform]=t.toString()}k(s).data("transform",t)}};k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};k.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){r.style[q.transition]=s}}}n("scale");n("translate");n("rotate");n("rotateX");n("rotateY");n("rotate3d");n("perspective");n("skewX");n("skewY");n("x",true);n("y",true);function j(r){if(typeof r==="string"){this.parse(r)}return this}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);j.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function m(s,r,t){if(r===true){s.queue(t)}else{if(r){s.queue(r,t)}else{t()}}}function h(s){var r=[];k.each(s,function(t){t=k.camelCase(t);t=k.transit.propertyMap[t]||k.cssProps[t]||t;t=c(t);if(k.inArray(t,r)===-1){r.push(t)}});return r}function g(s,v,x,r){var t=h(s);if(k.cssEase[x]){x=k.cssEase[x]}var w=""+l(v)+" "+x;if(parseInt(r,10)>0){w+=" "+l(r)}var u=[];k.each(t,function(z,y){u.push(y+" "+w)});return u.join(", ")}k.fn.transition=k.fn.transit=function(z,s,y,C){var D=this;var u=0;var w=true;if(typeof s==="function"){C=s;s=undefined}if(typeof y==="function"){C=y;y=undefined}if(typeof z.easing!=="undefined"){y=z.easing;delete z.easing}if(typeof z.duration!=="undefined"){s=z.duration;delete z.duration}if(typeof z.complete!=="undefined"){C=z.complete;delete z.complete}if(typeof z.queue!=="undefined"){w=z.queue;delete z.queue}if(typeof z.delay!=="undefined"){u=z.delay;delete z.delay}if(typeof s==="undefined"){s=k.fx.speeds._default}if(typeof y==="undefined"){y=k.cssEase._default}s=l(s);var E=g(z,s,y,u);var B=k.transit.enabled&&q.transition;var t=B?(parseInt(s,10)+parseInt(u,10)):0;if(t===0){var A=function(F){D.css(z);if(C){C.apply(D)}if(F){F()}};m(D,w,A);return D}var x={};var r=function(H){var G=false;var F=function(){if(G){D.unbind(f,F)}if(t>0){D.each(function(){this.style[q.transition]=(x[this]||null)})}if(typeof C==="function"){C.apply(D)}if(typeof H==="function"){H()}};if((t>0)&&(f)&&(k.transit.useTransitionEnd)){G=true;D.bind(f,F)}else{window.setTimeout(F,t)}D.each(function(){if(t>0){this.style[q.transition]=E}k(this).css(z)})};var v=function(F){this.offsetWidth;r(F)};m(D,w,v);return this};function n(s,r){if(!r){k.cssNumber[s]=true}k.transit.propertyMap[s]=q.transform;k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=k(v).css("transit:transform");u.setFromString(s,w);k(v).css({"transit:transform":u})}}}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function l(s){var r=s;if(k.fx.speeds[r]){r=k.fx.speeds[r]}return o(r,"ms")}k.transit.getTransitionValue=g})(jQuery);

!function(){"use strict";var e=0,r={};function i(t){if(!t)throw new Error("No options passed to Waypoint constructor");if(!t.element)throw new Error("No element option passed to Waypoint constructor");if(!t.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=i.Adapter.extend({},i.defaults,t),this.element=this.options.element,this.adapter=new i.Adapter(this.element),this.callback=t.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=i.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=i.Context.findOrCreateByElement(this.options.context),i.offsetAliases[this.options.offset]&&(this.options.offset=i.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),r[this.key]=this,e+=1}i.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},i.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},i.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete r[this.key]},i.prototype.disable=function(){return this.enabled=!1,this},i.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},i.prototype.next=function(){return this.group.next(this)},i.prototype.previous=function(){return this.group.previous(this)},i.invokeAll=function(t){var e=[],i;for(i in r)e.push(r[i]);for(var o=0,n=e.length;o<n;o++)e[o][t]()},i.destroyAll=function(){i.invokeAll("destroy")},i.disableAll=function(){i.invokeAll("disable")},i.enableAll=function(){for(var t in i.Context.refreshAll(),r)r[t].enabled=!0;return this},i.refreshAll=function(){i.Context.refreshAll()},i.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},i.viewportWidth=function(){return document.documentElement.clientWidth},i.adapters=[],i.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},i.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=i}(),function(){"use strict";function e(t){window.setTimeout(t,1e3/60)}var i=0,o={},d=window.Waypoint,t=window.onload;function n(t){this.element=t,this.Adapter=d.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,d.windowContext||(d.windowContext=!0,d.windowContext=new n(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}n.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},n.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},n.prototype.createThrottledResizeHandler=function(){var t=this;function e(){t.handleResize(),t.didResize=!1}this.adapter.on("resize.waypoints",function(){t.didResize||(t.didResize=!0,d.requestAnimationFrame(e))})},n.prototype.createThrottledScrollHandler=function(){var t=this;function e(){t.handleScroll(),t.didScroll=!1}this.adapter.on("scroll.waypoints",function(){t.didScroll&&!d.isTouch||(t.didScroll=!0,d.requestAnimationFrame(e))})},n.prototype.handleResize=function(){setTimeout(function(){d.Context.refreshAll()},150)},n.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:0,oldScroll:0,forward:"right",backward:"left"},vertical:{newScroll:window.nectarDOMInfo?window.nectarDOMInfo.scrollTop:0,oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},i,o;for(i in e){var n=e[i],r=n.newScroll>n.oldScroll?n.forward:n.backward,s;for(s in this.waypoints[i]){var a=this.waypoints[i][s],l,h;null!==a.triggerPoint&&(l=n.oldScroll<a.triggerPoint,h=n.newScroll>=a.triggerPoint,(l&&h||!l&&!h)&&(a.queueTrigger(r),t[a.group.id]=a.group))}}for(o in t)t[o].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},n.prototype.innerHeight=function(){return this.element==this.element.window?d.viewportHeight():this.adapter.innerHeight()},n.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},n.prototype.innerWidth=function(){return this.element==this.element.window?d.viewportWidth():this.adapter.innerWidth()},n.prototype.destroy=function(){var t=[],e;for(e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;o<n;o++)t[o].destroy()},n.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={},n;for(n in this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var r=t[n],s;for(s in this.waypoints[n]){var a,a,l,h,p=this.waypoints[n][s],l=p.options.offset,h=p.triggerPoint,c=0,u=null==h;p.element!==p.element.window&&(c=p.adapter.offset()[r.offsetProp]),"function"==typeof l?l=l.apply(p):"string"==typeof l&&(l=parseFloat(l),-1<p.options.offset.indexOf("%")&&(l=Math.ceil(r.contextDimension*l/100))),a=r.contextScroll-r.contextOffset,p.triggerPoint=Math.floor(c+a-l),a=h<r.oldScroll,l=p.triggerPoint>=r.oldScroll,h=!a&&!l,!u&&a&&l?(p.queueTrigger(r.backward),o[p.group.id]=p.group):(!u&&h||u&&r.oldScroll>=p.triggerPoint)&&(p.queueTrigger(r.forward),o[p.group.id]=p.group)}}return d.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},n.findOrCreateByElement=function(t){return n.findByElement(t)||new n(t)},n.refreshAll=function(){for(var t in o)o[t].refresh()},n.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){t&&t(),n.refreshAll()},d.requestAnimationFrame=function(t){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e).call(window,t)},d.Context=n}(),function(){"use strict";function s(t,e){return t.triggerPoint-e.triggerPoint}function a(t,e){return e.triggerPoint-t.triggerPoint}var e={vertical:{},horizontal:{}},i=window.Waypoint;function o(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),e[this.axis][this.name]=this}o.prototype.add=function(t){this.waypoints.push(t)},o.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},o.prototype.flushTriggers=function(){for(var t in this.triggerQueues){var e=this.triggerQueues[t],i;e.sort("up"===t||"left"===t?a:s);for(var o=0,n=e.length;o<n;o+=1){var r=e[o];!r.options.continuous&&o!==e.length-1||r.trigger([t])}}this.clearTriggerQueues()},o.prototype.next=function(t){this.waypoints.sort(s);var t=i.Adapter.inArray(t,this.waypoints);return t===this.waypoints.length-1?null:this.waypoints[t+1]},o.prototype.previous=function(t){this.waypoints.sort(s);var t=i.Adapter.inArray(t,this.waypoints);return t?this.waypoints[t-1]:null},o.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},o.prototype.remove=function(t){var t=i.Adapter.inArray(t,this.waypoints);-1<t&&this.waypoints.splice(t,1)},o.prototype.first=function(){return this.waypoints[0]},o.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},o.findOrCreate=function(t){return e[t.axis][t.name]||new o(t)},i.Group=o}(),function(){"use strict";var i=window.jQuery,t=window.Waypoint;function o(t){this.$element=i(t)}i.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(t,e){o.prototype[e]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[e].apply(this.$element,t)}}),i.each(["extend","inArray","isEmptyObject"],function(t,e){o[e]=i[e]}),t.adapters.push({name:"jquery",Adapter:o}),t.Adapter=o}(),function(){"use strict";var n=window.Waypoint;function t(o){return function(){var e=[],i=arguments[0];return o.isFunction(arguments[0])&&((i=o.extend({},arguments[1])).handler=arguments[0]),this.each(function(){var t=o.extend({},i,{element:this});"string"==typeof t.context&&(t.context=o(this).closest(t.context)[0]),e.push(new n(t))}),e}}window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */
!function(factory){"use strict";"function"==typeof define&&define.amd?define(["jquery"],factory):jQuery&&!jQuery.fn.hoverIntent&&factory(jQuery)}(function($){"use strict";var cX,cY,_cfg={interval:100,sensitivity:6,timeout:0},INSTANCE_COUNT=0,track=function(ev){cX=ev.pageX,cY=ev.pageY},compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity)return $el.off(s.event,track),delete s.timeoutId,s.isActive=!0,ev.pageX=cX,ev.pageY=cY,delete s.pX,delete s.pY,cfg.over.apply($el[0],[ev]);s.pX=cX,s.pY=cY,s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg)},cfg.interval)},delay=function(ev,$el,s,out){return delete $el.data("hoverIntent")[s.id],out.apply($el[0],[ev])};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++,cfg=$.extend({},_cfg);$.isPlainObject(handlerIn)?(cfg=$.extend(cfg,handlerIn),$.isFunction(cfg.out)||(cfg.out=cfg.over)):cfg=$.isFunction(handlerOut)?$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector}):$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});var handleHover=function(e){var ev=$.extend({},e),$el=$(this),hoverIntentData=$el.data("hoverIntent");hoverIntentData||$el.data("hoverIntent",hoverIntentData={});var state=hoverIntentData[instanceId];state||(hoverIntentData[instanceId]=state={id:instanceId}),state.timeoutId&&(state.timeoutId=clearTimeout(state.timeoutId));var mousemove=state.event="mousemove.hoverIntent.hoverIntent"+instanceId;if("mouseenter"===e.type){if(state.isActive)return;state.pX=ev.pageX,state.pY=ev.pageY,$el.off(mousemove,track).on(mousemove,track),state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg)},cfg.interval)}else{if(!state.isActive)return;$el.off(mousemove,track),state.timeoutId=setTimeout(function(){delay(ev,$el,state,cfg.out)},cfg.timeout)}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}});

!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(window.jQuery||window.Zepto)}(function(c){var p,o,d,i,u,t,e=function(){},a=!!window.jQuery,f=c(window),m=function(e,t){p.ev.on("mfp"+e+".mfp",t)},g=function(e,t,n,o){var i=document.createElement("div");return i.className="mfp-"+e,n&&(i.innerHTML=n),o?t&&t.appendChild(i):(i=c(i),t&&i.appendTo(t)),i},h=function(e,t){p.ev.triggerHandler("mfp"+e,t),p.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),p.st.callbacks[e]&&p.st.callbacks[e].apply(p,c.isArray(t)?t:[t]))},v=function(e){return e===t&&p.currTemplate.closeBtn||(p.currTemplate.closeBtn=c(p.st.closeMarkup.replace("%title%",p.st.tClose)),t=e),p.currTemplate.closeBtn},r=function(){c.magnificPopup.instance||((p=new e).init(),c.magnificPopup.instance=p)};e.prototype={constructor:e,init:function(){var e=navigator.appVersion;p.isIE7=-1!==e.indexOf("MSIE 7."),p.isIE8=-1!==e.indexOf("MSIE 8."),p.isLowIE=p.isIE7||p.isIE8,p.isAndroid=/android/gi.test(e),p.isIOS=/iphone|ipad|ipod/gi.test(e),p.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),p.probablyMobile=p.isAndroid||p.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=c(document),p.popupsCache={}},open:function(e){var t;if(!1===e.isObj){p.items=e.items.toArray(),p.index=0;for(var n,o=e.items,t=0;t<o.length;t++)if((n=(n=o[t]).parsed?n.el[0]:n)===e.el[0]){p.index=t;break}}else p.items=c.isArray(e.items)?e.items:[e.items],p.index=e.index||0;if(!p.isOpen){p.types=[],u="",e.mainEl&&e.mainEl.length?p.ev=e.mainEl.eq(0):p.ev=d,e.key?(p.popupsCache[e.key]||(p.popupsCache[e.key]={}),p.currTemplate=p.popupsCache[e.key]):p.currTemplate={},p.st=c.extend(!0,{},c.magnificPopup.defaults,e),p.fixedContentPos="auto"===p.st.fixedContentPos?!p.probablyMobile:p.st.fixedContentPos,p.st.modal&&(p.st.closeOnContentClick=!1,p.st.closeOnBgClick=!1,p.st.showCloseBtn=!1,p.st.enableEscapeKey=!1),p.bgOverlay||(p.bgOverlay=g("bg").on("click.mfp",function(){p.close()}),p.wrap=g("wrap").attr("tabindex",-1).on("click.mfp",function(e){p._checkIfClose(e.target)&&p.close()}),p.container=g("container",p.wrap)),p.contentContainer=g("content"),p.st.preloader&&(p.preloader=g("preloader",p.container,p.st.tLoading));var i=c.magnificPopup.modules;for(t=0;t<i.length;t++){var a,a=(a=i[t]).charAt(0).toUpperCase()+a.slice(1);p["init"+a].call(p)}h("BeforeOpen"),p.st.showCloseBtn&&(p.st.closeBtnInside?(m("MarkupParse",function(e,t,n,o){n.close_replaceWith=v(o.type)}),u+=" mfp-close-btn-in"):p.wrap.append(v())),p.st.alignTop&&(u+=" mfp-align-top"),p.fixedContentPos?p.wrap.css({overflow:p.st.overflowY,overflowX:"hidden",overflowY:p.st.overflowY}):p.wrap.css({top:f.scrollTop()-parseInt(c("html").css("margin-top")),position:"absolute"}),!1!==p.st.fixedBgPos&&("auto"!==p.st.fixedBgPos||p.fixedContentPos)||p.bgOverlay.css({height:d.height(),position:"absolute"}),p.st.enableEscapeKey&&d.on("keyup.mfp",function(e){27===e.keyCode&&p.close()}),f.on("resize.mfp",function(){p.updateSize()}),p.st.closeOnContentClick||(u+=" mfp-auto-cursor"),u&&p.wrap.addClass(u);var r=p.wH=f.height(),s={},l;p.fixedContentPos&&p._hasScrollBar(r)&&((l=p._getScrollbarSize())&&(s.marginRight=l)),p.fixedContentPos&&(p.isIE7?c("body, html").css("overflow","hidden"):s.overflow="hidden");var l=p.st.mainClass;return p.isIE7&&(l+=" mfp-ie7"),l&&p._addClassToMFP(l),p.updateItemHTML(),h("BuildControls"),c("html").css(s),p.bgOverlay.add(p.wrap).prependTo(p.st.prependTo||c(document.body)),p._lastFocusedEl=document.activeElement,setTimeout(function(){p.content?(p._addClassToMFP("mfp-ready"),p._setFocus()):p.bgOverlay.addClass("mfp-ready"),d.on("focusin.mfp",p._onFocusIn)},16),p.isOpen=!0,p.updateSize(r),h("Open"),e}p.updateItemHTML()},close:function(){p.isOpen&&(h("BeforeClose"),p.isOpen=!1,p.st.removalDelay&&!p.isLowIE&&p.supportsTransition?(p._addClassToMFP("mfp-removing"),setTimeout(function(){p._close()},p.st.removalDelay)):p._close())},_close:function(){h("Close");var e="mfp-removing mfp-ready ",e;p.bgOverlay.detach(),p.wrap.detach(),p.container.empty(),p.st.mainClass&&(e+=p.st.mainClass+" "),p._removeClassFromMFP(e),p.fixedContentPos&&(e={marginRight:""},p.isIE7?c("body, html").css("overflow",""):e.overflow="",c("html").css(e)),d.off("keyup.mfp focusin.mfp"),p.ev.off(".mfp"),p.wrap.attr("class","mfp-wrap").removeAttr("style"),p.bgOverlay.attr("class","mfp-bg"),p.container.attr("class","mfp-container"),!p.st.showCloseBtn||p.st.closeBtnInside&&!0!==p.currTemplate[p.currItem.type]||p.currTemplate.closeBtn&&p.currTemplate.closeBtn.detach(),p._lastFocusedEl,p.currItem=null,p.content=null,p.currTemplate=null,p.prevHeight=0,h("AfterClose")},updateSize:function(e){var t,t;p.isIOS?(t=document.documentElement.clientWidth/window.innerWidth,t=window.innerHeight*t,p.wrap.css("height",t),p.wH=t):p.wH=e||f.height(),p.fixedContentPos||p.wrap.css("height",p.wH),h("Resize")},updateItemHTML:function(){var e=p.items[p.index];p.contentContainer.detach(),p.content&&p.content.detach();var t=(e=!e.parsed?p.parseEl(p.index):e).type,n;h("BeforeChange",[p.currItem?p.currItem.type:"",t]),p.currItem=e,p.currTemplate[t]||(n=!!p.st[t]&&p.st[t].markup,h("FirstMarkupParse",n),p.currTemplate[t]=!n||c(n)),i&&i!==e.type&&p.container.removeClass("mfp-"+i+"-holder");var n=p["get"+t.charAt(0).toUpperCase()+t.slice(1)](e,p.currTemplate[t]);p.appendContent(n,t),e.preloaded=!0,h("Change",e),i=e.type,p.container.prepend(p.contentContainer),h("AfterChange")},appendContent:function(e,t){(p.content=e)?p.st.showCloseBtn&&p.st.closeBtnInside&&!0===p.currTemplate[t]?p.content.find(".mfp-close").length||p.content.append(v()):p.content=e:p.content="",h("BeforeAppend"),p.container.addClass("mfp-"+t+"-holder"),p.contentContainer.append(p.content)},parseEl:function(e){var t,n=p.items[e],n;if((n=n.tagName?{el:c(n)}:(t=n.type,{data:n,src:n.src})).el){for(var o=p.types,i=0;i<o.length;i++)if(n.el.hasClass("mfp-"+o[i])){t=o[i];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=t||p.st.type||"inline",n.index=e,n.parsed=!0,p.items[e]=n,h("ElementParse",n),p.items[e]},addGroup:function(t,n){var e=function(e){e.mfpEl=this,p._openClick(e,t,n)},o="click.magnificPopup";(n=n||{}).mainEl=t,n.items?(n.isObj=!0,t.off(o).on(o,e)):(n.isObj=!1,n.delegate?t.off(o).on(o,n.delegate,e):(n.items=t).off(o).on(o,e))},_openClick:function(e,t,n){if((void 0!==n.midClick?n:c.magnificPopup.defaults).midClick||!(2===e.which||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){var o=(void 0!==n.disableOn?n:c.magnificPopup.defaults).disableOn;if(o)if(c.isFunction(o)){if(!o.call(p))return!0}else if(f.width()<o)return!0;e.type&&(e.preventDefault(),p.isOpen&&e.stopPropagation()),n.el=c(e.mfpEl),n.delegate&&(n.items=t.find(n.delegate)),p.open(n)}},updateStatus:function(e,t){var n;p.preloader&&(o!==e&&p.container.removeClass("mfp-s-"+o),n={status:e,text:t=!t&&"loading"===e?p.st.tLoading:t},h("UpdateStatus",n),e=n.status,p.preloader.html(t=n.text),p.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),p.container.addClass("mfp-s-"+e),o=e)},_checkIfClose:function(e){if(!c(e).hasClass("mfp-prevent-close")){var t=p.st.closeOnContentClick,n=p.st.closeOnBgClick;if(t&&n)return!0;if(!p.content||c(e).hasClass("mfp-close")||p.preloader&&e===p.preloader[0])return!0;if(e===p.content[0]||c.contains(p.content[0],e)){if(t)return!0}else if(n&&c.contains(document,e))return!0;return!1}},_addClassToMFP:function(e){p.bgOverlay.addClass(e),p.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),p.wrap.removeClass(e)},_hasScrollBar:function(e){return(p.isIE7?d.height():document.body.scrollHeight)>(e||f.height())},_setFocus:function(){(p.st.focus?p.content.find(p.st.focus).eq(0):p.wrap).focus()},_onFocusIn:function(e){if(e.target!==p.wrap[0]&&!c.contains(p.wrap[0],e.target))return p._setFocus(),!1},_parseMarkup:function(i,e,t){var a;t.data&&(e=c.extend(t.data,e)),h("MarkupParse",[i,e,t]),c.each(e,function(e,t){return void 0===t||!1===t||void(1<(a=e.split("_")).length?0<(n=i.find(".mfp-"+a[0])).length&&("replaceWith"===(o=a[1])?n[0]!==t[0]&&n.replaceWith(t):"img"===o?n.is("img")?n.attr("src",t):n.replaceWith('<img src="'+t+'" class="'+n.attr("class")+'" />'):n.attr(a[1],t)):i.find(".mfp-"+e).html(t));var n,o})},_getScrollbarSize:function(){var e;return void 0===p.scrollbarSize&&((e=document.createElement("div")).style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),p.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)),p.scrollbarSize}},c.magnificPopup={instance:null,proto:e.prototype,modules:[],open:function(e,t){return r(),(e=e?c.extend(!0,{},e):{}).isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return c.magnificPopup.instance&&c.magnificPopup.instance.close()},registerModule:function(e,t){t.options&&(c.magnificPopup.defaults[e]=t.options),c.extend(this.proto,t.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close"></button>',tClose:"Close (Esc)",tLoading:"Loading..."}},c.fn.magnificPopup=function(e){r();var t=c(this),n,o,i,n;return"string"==typeof e?"open"===e?(o=a?t.data("magnificPopup"):t[0].magnificPopup,i=parseInt(arguments[1],10)||0,n=o.items?o.items[i]:(n=t,(n=o.delegate?n.find(o.delegate):n).eq(i)),p._openClick({mfpEl:n},t,o)):p.isOpen&&p[e].apply(p,Array.prototype.slice.call(arguments,1)):(e=c.extend(!0,{},e),a?t.data("magnificPopup",e):t[0].magnificPopup=e,p.addGroup(t,e)),t};var s,l,C,y=function(){C&&(l.after(C.addClass(s)).detach(),C=null)};c.magnificPopup.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){p.types.push("inline"),m("Close.inline",function(){y()})},getInline:function(e,t){if(y(),e.src){var n=p.st.inline,o=c(e.src),i;return o.length?((i=o[0].parentNode)&&i.tagName&&(l||(s=n.hiddenClass,l=g(s),s="mfp-"+s),C=o.after(l).detach().removeClass(s)),p.updateStatus("ready")):(p.updateStatus("error",n.tNotFound),o=c("<div>")),e.inlineElement=o}return p.updateStatus("ready"),p._parseMarkup(t,{},e),t}}});var n,w=function(){n&&c(document.body).removeClass(n)},b=function(){w(),p.req&&p.req.abort()};c.magnificPopup.registerModule("ajax",{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){p.types.push("ajax"),n=p.st.ajax.cursor,m("Close.ajax",b),m("BeforeChange.ajax",b)},getAjax:function(o){n&&c(document.body).addClass(n),p.updateStatus("loading");var e=c.extend({url:o.src,success:function(e,t,n){var n={data:e,xhr:n};h("ParseAjax",n),p.appendContent(c(n.data),"ajax"),o.finished=!0,w(),p._setFocus(),setTimeout(function(){p.wrap.addClass("mfp-ready")},16),p.updateStatus("ready"),h("AjaxContentAdded")},error:function(){w(),o.finished=o.loadError=!0,p.updateStatus("error",p.st.ajax.tError.replace("%url%",o.src))}},p.st.ajax.settings);return p.req=c.ajax(e),""}}});var I,x=function(e){if(e.data&&void 0!==e.data.title)return e.data.title;var t=p.st.image.titleSrc;if(t){if(c.isFunction(t))return t.call(p,e);if(e.el)return e.el.attr(t)||""}return""},k;c.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=p.st.image,t=".image";p.types.push("image"),m("Open"+t,function(){"image"===p.currItem.type&&e.cursor&&c(document.body).addClass(e.cursor)}),m("Close"+t,function(){e.cursor&&c(document.body).removeClass(e.cursor),f.off("resize.mfp")}),m("Resize"+t,p.resizeImage),p.isLowIE&&m("AfterChange",p.resizeImage)},resizeImage:function(){var e=p.currItem,t;e&&e.img&&p.st.image.verticalFit&&(t=0,p.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",p.wH-t))},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,I&&clearInterval(I),e.isCheckingImgSize=!1,h("ImageHasSize",e),e.imgHidden&&(p.content&&p.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(t){var n=0,o=t.img[0],i=function(e){I&&clearInterval(I),I=setInterval(function(){0<o.naturalWidth?p._onImageHasSize(t):(200<n&&clearInterval(I),3==++n?i(10):40===n?i(50):100===n&&i(500))},e)};i(1)},getImage:function(e,t){var n=0,o=function(){e&&(e.img[0].complete?(e.img.off(".mfploader"),e===p.currItem&&(p._onImageHasSize(e),p.updateStatus("ready")),e.hasSize=!0,e.loaded=!0,h("ImageLoadComplete")):++n<200?setTimeout(o,100):i())},i=function(){e&&(e.img.off(".mfploader"),e===p.currItem&&(p._onImageHasSize(e),p.updateStatus("error",a.tError.replace("%url%",e.src))),e.hasSize=!0,e.loaded=!0,e.loadError=!0)},a=p.st.image,r=t.find(".mfp-img"),s;return r.length&&((s=document.createElement("img")).className="mfp-img",e.el&&e.el.find("img").length&&(s.alt=e.el.find("img").attr("alt")),e.img=c(s).on("load.mfploader",o).on("error.mfploader",i),s.src=e.src,r.is("img")&&(e.img=e.img.clone()),0<(s=e.img[0]).naturalWidth?e.hasSize=!0:s.width||(e.hasSize=!1)),p._parseMarkup(t,{title:x(e),img_replaceWith:e.img},e),p.resizeImage(),e.hasSize?(I&&clearInterval(I),e.loadError?(t.addClass("mfp-loading"),p.updateStatus("error",a.tError.replace("%url%",e.src))):(t.removeClass("mfp-loading"),p.updateStatus("ready"))):(p.updateStatus("loading"),e.loading=!0,e.hasSize||(e.imgHidden=!0,t.addClass("mfp-loading"),p.findImageSize(e))),t}}}),c.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,i=p.st.zoom,t=".zoom",n,o,a,r,s;i.enabled&&p.supportsTransition&&(a=i.duration,r=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+i.duration/1e3+"s "+i.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},e="transition";return o["-webkit-"+e]=o["-moz-"+e]=o["-o-"+e]=o[e]=n,t.css(o),t},s=function(){p.content.css("visibility","visible")},m("BuildControls"+t,function(){p._allowZoom()&&(clearTimeout(n),p.content.css("visibility","hidden"),(e=p._getItemToZoom())?((o=r(e)).css(p._getOffset()),p.wrap.append(o),n=setTimeout(function(){o.css(p._getOffset(!0)),n=setTimeout(function(){s(),setTimeout(function(){o.remove(),e=o=null,h("ZoomAnimationEnded")},16)},a)},16)):s())}),m("BeforeClose"+t,function(){if(p._allowZoom()){if(clearTimeout(n),p.st.removalDelay=a,!e){if(!(e=p._getItemToZoom()))return;o=r(e)}o.css(p._getOffset(!0)),p.wrap.append(o),p.content.css("visibility","hidden"),setTimeout(function(){o.css(p._getOffset())},16)}}),m("Close"+t,function(){p._allowZoom()&&(s(),o&&o.remove(),e=null)}))},_allowZoom:function(){return"image"===p.currItem.type},_getItemToZoom:function(){return!!p.currItem.hasSize&&p.currItem.img},_getOffset:function(e){var t,n=(t=e?p.currItem.img:p.st.zoom.opener(p.currItem.el||p.currItem)).offset(),o=parseInt(t.css("padding-top"),10),e=parseInt(t.css("padding-bottom"),10);n.top-=c(window).scrollTop()-o;var o={width:t.width(),height:(a?t.innerHeight():t[0].offsetHeight)-e-o};return(k=void 0===k?void 0!==document.createElement("p").style.MozTransform:k)?o["-moz-transform"]=o.transform="translate("+n.left+"px,"+n.top+"px)":(o.left=n.left,o.top=n.top),o}}});var T=function(e){var t;!p.currTemplate.iframe||(t=p.currTemplate.iframe.find("iframe")).length&&(e||(t[0].src="//about:blank"),p.isIE8&&t.css("display",e?"block":"none"))};c.magnificPopup.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},youtube_compressed_url:{index:"youtu.be/",id:"/",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){p.types.push("iframe"),m("BeforeChange",function(e,t,n){t!==n&&("iframe"===t?T():"iframe"===n&&T(!0))}),m("Close.iframe",function(){T()})},getIframe:function(e,t){var n=e.src,o=p.st.iframe;c.each(o.patterns,function(){if(-1<n.indexOf(this.index))return this.id&&(n="string"==typeof this.id?n.substr(n.lastIndexOf(this.id)+this.id.length,n.length):this.id.call(this,n)),n=this.src.replace("%id%",n),!1});var i={};return o.srcAction&&(i[o.srcAction]=n),p._parseMarkup(t,i,e),p.updateStatus("ready"),t}}});var _=function(e){var t=p.items.length;return t-1<e?e-t:e<0?t+e:e},E=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)},P,S,O;c.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var a=p.st.gallery,e=".mfp-gallery",o=Boolean(c.fn.mfpFastClick);if(p.direction=!0,!a||!a.enabled)return!1;u+=" mfp-gallery",m("Open"+e,function(){a.navigateByImgClick&&p.wrap.on("click"+e,".mfp-img",function(){if(1<p.items.length)return p.next(),!1}),d.on("keydown"+e,function(e){37===e.keyCode?p.prev():39===e.keyCode&&p.next()})}),m("UpdateStatus"+e,function(e,t){t.text&&(t.text=E(t.text,p.currItem.index,p.items.length))}),m("MarkupParse"+e,function(e,t,n,o){var i=p.items.length;n.counter=1<i?E(a.tCounter,o.index,i):""}),m("BuildControls"+e,function(){var e,t,n,e;1<p.items.length&&a.arrows&&!p.arrowLeft&&(e=a.arrowMarkup,t=p.arrowLeft=c(e.replace(/%title%/gi,a.tPrev).replace(/%dir%/gi,"left")).addClass("mfp-prevent-close"),n=p.arrowRight=c(e.replace(/%title%/gi,a.tNext).replace(/%dir%/gi,"right")).addClass("mfp-prevent-close"),t[e=o?"mfpFastClick":"click"](function(){p.prev()}),n[e](function(){p.next()}),p.isIE7&&(g("b",t[0],!1,!0),g("a",t[0],!1,!0),g("b",n[0],!1,!0),g("a",n[0],!1,!0)),p.container.append(t.add(n)))}),m("Change"+e,function(){p._preloadTimeout&&clearTimeout(p._preloadTimeout),p._preloadTimeout=setTimeout(function(){p.preloadNearbyImages(),p._preloadTimeout=null},16)}),m("Close"+e,function(){d.off(e),p.wrap.off("click"+e),p.arrowLeft&&o&&p.arrowLeft.add(p.arrowRight).destroyMfpFastClick(),p.arrowRight=p.arrowLeft=null})},next:function(){p.direction=!0,p.index=_(p.index+1),p.updateItemHTML()},prev:function(){p.direction=!1,p.index=_(p.index-1),p.updateItemHTML()},goTo:function(e){p.direction=e>=p.index,p.index=e,p.updateItemHTML()},preloadNearbyImages:function(){for(var e,t=p.st.gallery.preload,n=Math.min(t[0],p.items.length),o=Math.min(t[1],p.items.length),e=1;e<=(p.direction?o:n);e++)p._preloadItem(p.index+e);for(e=1;e<=(p.direction?n:o);e++)p._preloadItem(p.index-e)},_preloadItem:function(e){var t;e=_(e),p.items[e].preloaded||((t=p.items[e]).parsed||(t=p.parseEl(e)),h("LazyLoad",t),"image"===t.type&&(t.img=c('<img class="mfp-img" />').on("load.mfploader",function(){t.hasSize=!0}).on("error.mfploader",function(){t.hasSize=!0,t.loadError=!0,h("LazyLoadError",t)}).attr("src",t.src)),t.preloaded=!0)}}}),c.magnificPopup.registerModule("retina",{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){var n,o;1<window.devicePixelRatio&&(n=p.st.retina,o=n.ratio,1<(o=isNaN(o)?o():o)&&(m("ImageHasSize.retina",function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/o,width:"100%"})}),m("ElementParse.retina",function(e,t){t.src=n.replaceSrc(t,o)})))}}}),P="ontouchstart"in window,S=function(){f.off("touchmove"+O+" touchend"+O)},O=".mfpFastClick",c.fn.mfpFastClick=function(l){return c(this).each(function(){var t,n,o,i,a,r,s,e=c(this);P&&e.on("touchstart"+O,function(e){a=!1,s=1,r=(e.originalEvent||e).touches[0],o=r.clientX,i=r.clientY,f.on("touchmove"+O,function(e){r=(e.originalEvent||e).touches,s=r.length,r=r[0],(10<Math.abs(r.clientX-o)||10<Math.abs(r.clientY-i))&&(a=!0,S())}).on("touchend"+O,function(e){S(),a||1<s||(t=!0,e.preventDefault(),clearTimeout(n),n=setTimeout(function(){t=!1},1e3),l())})}),e.on("click"+O,function(){t||l()})})},c.fn.destroyMfpFastClick=function(){c(this).off("touchstart"+O+" click"+O),P&&f.off("touchmove"+O+" touchend"+O)},r()});
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.anime=e()}(this,function(){"use strict";var n={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},e={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},t=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],r={CSS:{},springs:{}};function a(n,e,t){return Math.min(Math.max(n,e),t)}function o(n,e){return n.indexOf(e)>-1}function u(n,e){return n.apply(null,e)}var i={arr:function(n){return Array.isArray(n)},obj:function(n){return o(Object.prototype.toString.call(n),"Object")},pth:function(n){return i.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||i.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return i.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return i.hex(n)||i.rgb(n)||i.hsl(n)},key:function(t){return!n.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function c(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function s(n,e){var t=c(n),o=a(i.und(t[0])?1:t[0],.1,100),u=a(i.und(t[1])?100:t[1],.1,100),s=a(i.und(t[2])?10:t[2],.1,100),f=a(i.und(t[3])?0:t[3],.1,100),l=Math.sqrt(u/o),d=s/(2*Math.sqrt(u*o)),p=d<1?l*Math.sqrt(1-d*d):0,v=1,h=d<1?(d*l-f)/p:-f+l;function g(n){var t=e?e*n/1e3:n;return t=d<1?Math.exp(-t*d*l)*(v*Math.cos(p*t)+h*Math.sin(p*t)):(v+h*t)*Math.exp(-t*l),0===n||1===n?n:1-t}return e?g:function(){var e=r.springs[n];if(e)return e;for(var t=0,a=0;;)if(1===g(t+=1/6)){if(++a>=16)break}else a=0;var o=t*(1/6)*1e3;return r.springs[n]=o,o}}function f(n){return void 0===n&&(n=10),function(e){return Math.ceil(a(e,1e-6,1)*n)*(1/n)}}var l,d,p=function(){var n=11,e=1/(n-1);function t(n,e){return 1-3*e+3*n}function r(n,e){return 3*e-6*n}function a(n){return 3*n}function o(n,e,o){return((t(e,o)*n+r(e,o))*n+a(e))*n}function u(n,e,o){return 3*t(e,o)*n*n+2*r(e,o)*n+a(e)}return function(t,r,a,i){if(0<=t&&t<=1&&0<=a&&a<=1){var c=new Float32Array(n);if(t!==r||a!==i)for(var s=0;s<n;++s)c[s]=o(s*e,t,a);return function(n){return t===r&&a===i?n:0===n||1===n?n:o(f(n),r,i)}}function f(r){for(var i=0,s=1,f=n-1;s!==f&&c[s]<=r;++s)i+=e;var l=i+(r-c[--s])/(c[s+1]-c[s])*e,d=u(l,t,a);return d>=.001?function(n,e,t,r){for(var a=0;a<4;++a){var i=u(e,t,r);if(0===i)return e;e-=(o(e,t,r)-n)/i}return e}(r,l,t,a):0===d?l:function(n,e,t,r,a){for(var u,i,c=0;(u=o(i=e+(t-e)/2,r,a)-n)>0?t=i:e=i,Math.abs(u)>1e-7&&++c<10;);return i}(r,i,i+e,t,a)}}}(),v=(l={linear:function(){return function(n){return n}}},d={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=a(n,1,10),r=a(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(n,e){d[n]=function(){return function(n){return Math.pow(n,e+2)}}}),Object.keys(d).forEach(function(n){var e=d[n];l["easeIn"+n]=e,l["easeOut"+n]=function(n,t){return function(r){return 1-e(n,t)(1-r)}},l["easeInOut"+n]=function(n,t){return function(r){return r<.5?e(n,t)(2*r)/2:1-e(n,t)(-2*r+2)/2}},l["easeOutIn"+n]=function(n,t){return function(r){return r<.5?(1-e(n,t)(1-2*r))/2:(e(n,t)(2*r-1)+1)/2}}}),l);function h(n,e){if(i.fnc(n))return n;var t=n.split("(")[0],r=v[t],a=c(n);switch(t){case"spring":return s(n,e);case"cubicBezier":return u(p,a);case"steps":return u(f,a);default:return u(r,a)}}function g(n){try{return document.querySelectorAll(n)}catch(n){return}}function m(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<t;o++)if(o in n){var u=n[o];e.call(r,u,o,n)&&a.push(u)}return a}function y(n){return n.reduce(function(n,e){return n.concat(i.arr(e)?y(e):e)},[])}function b(n){return i.arr(n)?n:(i.str(n)&&(n=g(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function M(n,e){return n.some(function(n){return n===e})}function x(n){var e={};for(var t in n)e[t]=n[t];return e}function w(n,e){var t=x(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function k(n,e){var t=x(n);for(var r in e)t[r]=i.und(n[r])?e[r]:n[r];return t}function O(n){return i.rgb(n)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+t[1]+",1)":e:i.hex(n)?(r=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,t,r){return e+e+t+t+r+r}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),"rgba("+parseInt(a[1],16)+","+parseInt(a[2],16)+","+parseInt(a[3],16)+",1)"):i.hsl(n)?function(n){var e,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,u=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(0==u)e=t=r=i;else{var f=i<.5?i*(1+u):i+u-i*u,l=2*i-f;e=s(l,f,o+1/3),t=s(l,f,o),r=s(l,f,o-1/3)}return"rgba("+255*e+","+255*t+","+255*r+","+c+")"}(n):void 0;var e,t,r,a}function C(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function P(n,e){return i.fnc(n)?n(e.target,e.id,e.total):n}function I(n,e){return n.getAttribute(e)}function D(n,e,t){if(M([t,"deg","rad","turn"],C(e)))return e;var a=r.CSS[e+t];if(!i.und(a))return a;var o=document.createElement(n.tagName),u=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;u.appendChild(o),o.style.position="absolute",o.style.width=100+t;var c=100/o.offsetWidth;u.removeChild(o);var s=c*parseFloat(e);return r.CSS[e+t]=s,s}function B(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?D(n,a,t):a}}function T(n,e){return i.dom(n)&&!i.inp(n)&&(!i.nil(I(n,e))||i.svg(n)&&n[e])?"attribute":i.dom(n)&&M(t,e)?"transform":i.dom(n)&&"transform"!==e&&B(n,e)?"css":null!=n[e]?"object":void 0}function E(n){if(i.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function F(n,e,t,r){var a,u=o(e,"scale")?1:0+(o(a=e,"translate")||"perspective"===a?"px":o(a,"rotate")||o(a,"skew")?"deg":void 0),i=E(n).get(e)||u;return t&&(t.transforms.list.set(e,i),t.transforms.last=e),r?D(n,i,r):i}function A(n,e,t,r){switch(T(n,e)){case"transform":return F(n,e,r,t);case"css":return B(n,e,t);case"attribute":return I(n,e);default:return n[e]||0}}function N(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=C(n)||0,a=parseFloat(e),o=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function S(n,e){if(i.col(n))return O(n);if(/\s/g.test(n))return n;var t=C(n),r=t?n.substr(0,n.length-t.length):n;return e?r+e:r}function L(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function j(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);a>0&&(r+=L(e,o)),e=o}return r}function q(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return o=n,2*Math.PI*I(o,"r");case"rect":return 2*I(a=n,"width")+2*I(a,"height");case"line":return L({x:I(r=n,"x1"),y:I(r,"y1")},{x:I(r,"x2"),y:I(r,"y2")});case"polyline":return j(n);case"polygon":return t=(e=n).points,j(e)+L(t.getItem(t.numberOfItems-1),t.getItem(0))}var e,t,r,a,o}function H(n,e){var t=e||{},r=t.el||function(n){for(var e=n.parentNode;i.svg(e)&&i.svg(e.parentNode);)e=e.parentNode;return e}(n),a=r.getBoundingClientRect(),o=I(r,"viewBox"),u=a.width,c=a.height,s=t.viewBox||(o?o.split(" "):[0,0,u,c]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:u,h:c,vW:s[2],vH:s[3]}}function V(n,e,t){function r(t){void 0===t&&(t=0);var r=e+t>=1?e+t:0;return n.el.getPointAtLength(r)}var a=H(n.el,n.svg),o=r(),u=r(-1),i=r(1),c=t?1:a.w/a.vW,s=t?1:a.h/a.vH;switch(n.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}function $(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=S(i.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:i.str(n)||e?r.split(t):[]}}function W(n){return m(n?y(i.arr(n)?n.map(b):b(n)):[],function(n,e,t){return t.indexOf(n)===e})}function X(n){var e=W(n);return e.map(function(n,t){return{target:n,id:t,total:e.length,transforms:{list:E(n)}}})}function Y(n,e){var t=x(e);if(/^spring/.test(t.easing)&&(t.duration=s(t.easing)),i.arr(n)){var r=n.length;2===r&&!i.obj(n[0])?n={value:n}:i.fnc(e.duration)||(t.duration=e.duration/r)}var a=i.arr(n)?n:[n];return a.map(function(n,t){var r=i.obj(n)&&!i.pth(n)?n:{value:n};return i.und(r.delay)&&(r.delay=t?0:e.delay),i.und(r.endDelay)&&(r.endDelay=t===a.length-1?e.endDelay:0),r}).map(function(n){return k(n,t)})}function Z(n,e){var t=[],r=e.keyframes;for(var a in r&&(e=k(function(n){for(var e=m(y(n.map(function(n){return Object.keys(n)})),function(n){return i.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),t={},r=function(r){var a=e[r];t[a]=n.map(function(n){var e={};for(var t in n)i.key(t)?t==a&&(e.value=n[t]):e[t]=n[t];return e})},a=0;a<e.length;a++)r(a);return t}(r),e)),e)i.key(a)&&t.push({name:a,tweens:Y(e[a],n)});return t}function G(n,e){var t;return n.tweens.map(function(r){var a=function(n,e){var t={};for(var r in n){var a=P(n[r],e);i.arr(a)&&1===(a=a.map(function(n){return P(n,e)})).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,e),o=a.value,u=i.arr(o)?o[1]:o,c=C(u),s=A(e.target,n.name,c,e),f=t?t.to.original:s,l=i.arr(o)?o[0]:f,d=C(l)||C(s),p=c||d;return i.und(u)&&(u=f),a.from=$(l,p),a.to=$(N(u,l),p),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=h(a.easing,a.duration),a.isPath=i.pth(o),a.isPathTargetInsideSVG=a.isPath&&i.svg(e.target),a.isColor=i.col(a.from.original),a.isColor&&(a.round=1),t=a,a})}var Q={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){if(r.list.set(e,t),e===r.last||a){var o="";r.list.forEach(function(n,e){o+=e+"("+n+") "}),n.style.transform=o}}};function z(n,e){X(n).forEach(function(n){for(var t in e){var r=P(e[t],n),a=n.target,o=C(r),u=A(a,t,o,n),i=N(S(r,o||C(u)),u),c=T(a,t);Q[c](a,t,i,n.transforms,!0)}})}function _(n,e){return m(y(n.map(function(n){return e.map(function(e){return function(n,e){var t=T(n.target,e.name);if(t){var r=G(e,n),a=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,e)})})),function(n){return!i.und(n)})}function R(n,e){var t=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,n.map(function(n){return r(n)+n.duration})):e.duration,a.delay=t?Math.min.apply(Math,n.map(function(n){return r(n)+n.delay})):e.delay,a.endDelay=t?a.duration-Math.max.apply(Math,n.map(function(n){return r(n)+n.duration-n.endDelay})):e.endDelay,a}var J=0;var K=[],U=function(){var n;function e(t){for(var r=K.length,a=0;a<r;){var o=K[a];o.paused?(K.splice(a,1),r--):(o.tick(t),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){en.suspendWhenDocumentHidden&&(nn()?n=cancelAnimationFrame(n):(K.forEach(function(n){return n._onDocumentVisibility()}),U()))}),function(){n||nn()&&en.suspendWhenDocumentHidden||!(K.length>0)||(n=requestAnimationFrame(e))}}();function nn(){return!!document&&document.hidden}function en(t){void 0===t&&(t={});var r,o=0,u=0,i=0,c=0,s=null;function f(n){var e=window.Promise&&new Promise(function(n){return s=n});return n.finished=e,e}var l,d,p,v,h,g,y,b,M=(d=w(n,l=t),p=w(e,l),v=Z(p,l),h=X(l.targets),g=_(h,v),y=R(g,p),b=J,J++,k(d,{id:b,children:[],animatables:h,animations:g,duration:y.duration,delay:y.delay,endDelay:y.endDelay}));f(M);function x(){var n=M.direction;"alternate"!==n&&(M.direction="normal"!==n?"normal":"reverse"),M.reversed=!M.reversed,r.forEach(function(n){return n.reversed=M.reversed})}function O(n){return M.reversed?M.duration-n:n}function C(){o=0,u=O(M.currentTime)*(1/en.speed)}function P(n,e){e&&e.seek(n-e.timelineOffset)}function I(n){for(var e=0,t=M.animations,r=t.length;e<r;){var o=t[e],u=o.animatable,i=o.tweens,c=i.length-1,s=i[c];c&&(s=m(i,function(e){return n<e.end})[0]||s);for(var f=a(n-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(f)?1:s.easing(f),d=s.to.strings,p=s.round,v=[],h=s.to.numbers.length,g=void 0,y=0;y<h;y++){var b=void 0,x=s.to.numbers[y],w=s.from.numbers[y]||0;b=s.isPath?V(s.value,l*x,s.isPathTargetInsideSVG):w+l*(x-w),p&&(s.isColor&&y>2||(b=Math.round(b*p)/p)),v.push(b)}var k=d.length;if(k){g=d[0];for(var O=0;O<k;O++){d[O];var C=d[O+1],P=v[O];isNaN(P)||(g+=C?P+C:P+" ")}}else g=v[0];Q[o.type](u.target,o.property,g,u.transforms),o.currentValue=g,e++}}function D(n){M[n]&&!M.passThrough&&M[n](M)}function B(n){var e=M.duration,t=M.delay,l=e-M.endDelay,d=O(n);M.progress=a(d/e*100,0,100),M.reversePlayback=d<M.currentTime,r&&function(n){if(M.reversePlayback)for(var e=c;e--;)P(n,r[e]);else for(var t=0;t<c;t++)P(n,r[t])}(d),!M.began&&M.currentTime>0&&(M.began=!0,D("begin")),!M.loopBegan&&M.currentTime>0&&(M.loopBegan=!0,D("loopBegin")),d<=t&&0!==M.currentTime&&I(0),(d>=l&&M.currentTime!==e||!e)&&I(e),d>t&&d<l?(M.changeBegan||(M.changeBegan=!0,M.changeCompleted=!1,D("changeBegin")),D("change"),I(d)):M.changeBegan&&(M.changeCompleted=!0,M.changeBegan=!1,D("changeComplete")),M.currentTime=a(d,0,e),M.began&&D("update"),n>=e&&(u=0,M.remaining&&!0!==M.remaining&&M.remaining--,M.remaining?(o=i,D("loopComplete"),M.loopBegan=!1,"alternate"===M.direction&&x()):(M.paused=!0,M.completed||(M.completed=!0,D("loopComplete"),D("complete"),!M.passThrough&&"Promise"in window&&(s(),f(M)))))}return M.reset=function(){var n=M.direction;M.passThrough=!1,M.currentTime=0,M.progress=0,M.paused=!0,M.began=!1,M.loopBegan=!1,M.changeBegan=!1,M.completed=!1,M.changeCompleted=!1,M.reversePlayback=!1,M.reversed="reverse"===n,M.remaining=M.loop,r=M.children;for(var e=c=r.length;e--;)M.children[e].reset();(M.reversed&&!0!==M.loop||"alternate"===n&&1===M.loop)&&M.remaining++,I(M.reversed?M.duration:0)},M._onDocumentVisibility=C,M.set=function(n,e){return z(n,e),M},M.tick=function(n){i=n,o||(o=i),B((i+(u-o))*en.speed)},M.seek=function(n){B(O(n))},M.pause=function(){M.paused=!0,C()},M.play=function(){M.paused&&(M.completed&&M.reset(),M.paused=!1,K.push(M),C(),U())},M.reverse=function(){x(),M.completed=!M.reversed,C()},M.restart=function(){M.reset(),M.play()},M.remove=function(n){rn(W(n),M)},M.reset(),M.autoplay&&M.play(),M}function tn(n,e){for(var t=e.length;t--;)M(n,e[t].animatable.target)&&e.splice(t,1)}function rn(n,e){var t=e.animations,r=e.children;tn(n,t);for(var a=r.length;a--;){var o=r[a],u=o.animations;tn(n,u),u.length||o.children.length||r.splice(a,1)}t.length||r.length||e.pause()}return en.version="3.2.1",en.speed=1,en.suspendWhenDocumentHidden=!0,en.running=K,en.remove=function(n){for(var e=W(n),t=K.length;t--;)rn(e,K[t])},en.get=A,en.set=z,en.convertPx=D,en.path=function(n,e){var t=i.str(n)?g(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:H(t),totalLength:q(t)*(r/100)}}},en.setDashoffset=function(n){var e=q(n);return n.setAttribute("stroke-dasharray",e),e},en.stagger=function(n,e){void 0===e&&(e={});var t=e.direction||"normal",r=e.easing?h(e.easing):null,a=e.grid,o=e.axis,u=e.from||0,c="first"===u,s="center"===u,f="last"===u,l=i.arr(n),d=l?parseFloat(n[0]):parseFloat(n),p=l?parseFloat(n[1]):0,v=C(l?n[1]:n)||0,g=e.start||0+(l?d:0),m=[],y=0;return function(n,e,i){if(c&&(u=0),s&&(u=(i-1)/2),f&&(u=i-1),!m.length){for(var h=0;h<i;h++){if(a){var b=s?(a[0]-1)/2:u%a[0],M=s?(a[1]-1)/2:Math.floor(u/a[0]),x=b-h%a[0],w=M-Math.floor(h/a[0]),k=Math.sqrt(x*x+w*w);"x"===o&&(k=-x),"y"===o&&(k=-w),m.push(k)}else m.push(Math.abs(u-h));y=Math.max.apply(Math,m)}r&&(m=m.map(function(n){return r(n/y)*y})),"reverse"===t&&(m=m.map(function(n){return o?n<0?-1*n:-n:Math.abs(y-n)}))}return g+(l?(p-d)/y:d)*(Math.round(100*m[e])/100)+v}},en.timeline=function(n){void 0===n&&(n={});var t=en(n);return t.duration=0,t.add=function(r,a){var o=K.indexOf(t),u=t.children;function c(n){n.passThrough=!0}o>-1&&K.splice(o,1);for(var s=0;s<u.length;s++)c(u[s]);var f=k(r,w(e,n));f.targets=f.targets||n.targets;var l=t.duration;f.autoplay=!1,f.direction=t.direction,f.timelineOffset=i.und(a)?l:N(a,l),c(t),t.seek(f.timelineOffset);var d=en(f);c(d),u.push(d);var p=R(u,n);return t.delay=p.delay,t.endDelay=p.endDelay,t.duration=p.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},en.easing=h,en.penner=v,en.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},en});
!function(r){"use strict";r(window).on("resize",function(){r(".sf-menu ul.tracked-pos").removeClass("tracked-pos")});var e,i,n,t,a,h,l,d,p,u,f,c,m,s,o,v,g=(i="sf-breadcrumb",n="sf-js-enabled",t="sf-with-ul",a="sf-arrows",(e=/iPhone|iPad|iPod/i.test(navigator.userAgent))&&r("html").css("cursor","pointer").on("click",r.noop),h=e,l="behavior"in(e=document.documentElement.style)&&"fill"in e&&/iemobile/i.test(navigator.userAgent),d=function(e,t){var s=n;t.cssArrows&&(s+=" "+a),e.toggleClass(s)},p=function(e){e.children("a").toggleClass(t)},u=function(e){var t=e.css("ms-touch-action"),t;e.css("ms-touch-action",t="pan-y"===t?"auto":"pan-y")},f=function(e){var t=r(this),s=t.siblings(e.data.popUpSelector);0<s.length&&s.is(":hidden")&&(t.one("click.superfish",!1),"MSPointerDown"===e.type?t.trigger("focus"):r.proxy(c,t.parent("li"))())},c=function(){var e=r(this),t=v(e);0<r(this).parents(".megamenu").length||(clearTimeout(t.sfTimer),e.siblings().superfish("hide").end().superfish("show"))},m=function(){var e=r(this),t=v(e);h?r.proxy(s,e,t)():(clearTimeout(t.sfTimer),t.sfTimer=setTimeout(r.proxy(s,e,t),t.delay))},s=function(e){e.retainPath=-1<r.inArray(this[0],e.$path),this.superfish("hide"),this.parents("."+e.hoverClass).length||(e.onIdle.call(o(this)),e.$path.length&&r.proxy(c,e.$path)())},o=function(e){return e.closest("."+n)},v=function(e){return o(e).data("sf-options")},{hide:function(e){if(this.length){var t=v(a=this);if(!t)return this;if(r(this).hasClass("menu-item-over")&&r(this).hasClass("megamenu"))return!0;var s=!0===t.retainPath?t.$path:"",n=this.find("li."+t.hoverClass).add(this).not(s).removeClass(t.hoverClass).children(t.popUpSelector),s=t.speedOut,a;if(e&&(n.show(),s=0),t.retainPath=!1,t.onBeforeHide.call(n),"minimal"==t.dropdownStyle?(a=r(this),t.onHide.call(a)):n.stop(!0,!0).animate(t.animationOut,s,function(){var e=r(this);t.onHide.call(e)}),0<r(this).parents(".megamenu").length)return;0<r('#header-outer[data-megamenu-rt="1"]').length&&0<r('#header-outer[data-transparent-header="true"]').length&&(0==r("#header-outer.scrolled-down").length&&0==r("#header-outer.small-nav").length&&0==r("#header-outer.detached").length&&0==r("#header-outer.fixed-menu").length&&r("#header-outer").addClass("transparent"),0<r('#header-outer[data-permanent-transparent="1"][data-transparent-header="true"]').length&&r("#header-outer").addClass("transparent"))}return this},show:function(){if(!(0<r(this).parents(".megamenu").length)){var e=v(this);if(!e)return this;var t=this.addClass(e.hoverClass).children(e.popUpSelector),s,n;return 0<r('#header-outer[data-megamenu-rt="1"]').length&&r(this).hasClass("megamenu")&&!r(this).hasClass("width-75")&&!r(this).hasClass("width-50")&&"true"==r("#header-outer").attr("data-transparent-header")&&(r("#header-outer").addClass("no-transition"),r("#header-outer").removeClass("transparent")),e.onBeforeShow.call(t),t.hasClass("tracked-pos")||r(t).parents("li").hasClass("megamenu")||r(t).parents("ul").hasClass("sub-menu")||!t.offset()||(t.addClass("temp-hidden-display"),s=r("#top .container").width(),(n=t).offset().left-(r(window).width()-s)/2+n.width()<=r(window).width()-100?t.parents("li").removeClass("edge"):t.parents("li").addClass("edge"),t.removeClass("temp-hidden-display")),"minimal"==e.dropdownStyle?e.onShow.call(t):t.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(t)}),t.hasClass("tracked-pos")||0<t.length&&0<t.parents(".sub-menu").length&&0<t.parents(".sf-menu").length&&t.offset().left+t.outerWidth()>r(window).width()&&(t.addClass("on-left-side"),t.find("ul").addClass("on-left-side")),t.addClass("tracked-pos"),this}},destroy:function(){return this.each(function(){var e,t=r(this),s=t.data("sf-options");if(!s)return!1;e=t.find(s.popUpSelector).parent("li"),clearTimeout(s.sfTimer),d(t,s),p(e),u(t),t.off(".superfish").off(".hoverIntent"),e.children(s.popUpSelector).attr("style",function(e,t){return t.replace(/display[^;]+;?/g,"")}),s.$path.removeClass(s.hoverClass+" "+i).addClass(s.pathClass),t.find("."+s.hoverClass).removeClass(s.hoverClass),s.onDestroy.call(t),t.removeData("sf-options")})},init:function(o){return this.each(function(){var e=r(this);if(e.data("sf-options"))return!1;var t=r.extend({},r.fn.superfish.defaults,o),s=e.find(t.popUpSelector).parent("li"),n,a;t.$path=(a=t,e.find("li."+a.pathClass).slice(0,a.pathLevels).addClass(a.hoverClass+" "+i).filter(function(){return r(this).children(a.popUpSelector).hide().show().length}).removeClass(a.pathClass)),e.data("sf-options",t),d(e,t),p(s),u(e),function(e,t){var s="li:has("+t.popUpSelector+")";r.fn.hoverIntent&&!t.disableHI?e.hoverIntent(c,m,s):e.on("mouseenter.superfish",s,c).on("mouseleave.superfish",s,m);var s="MSPointerDown.superfish";h||(s+=" touchend.superfish"),l&&(s+=" mousedown.superfish"),e.on("focusin.superfish","li",c).on("focusout.superfish","li",m).on(s,"a",t,f)}(e,t),s.not("."+i).superfish("hide",!0),t.onInit.call(this)})}}),e;r.fn.superfish=function(e,t){return g[e]?g[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?r.error("Method "+e+" does not exist on jQuery.fn.superfish"):g.init.apply(this,arguments)},r.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:r.noop,onBeforeShow:r.noop,onShow:r.noop,onBeforeHide:r.noop,onHide:r.noop,onIdle:r.noop,onDestroy:r.noop,dropdownStyle:0<r('body[data-dropdown-style="minimal"]').length?"minimal":"classic"},r.fn.extend({hideSuperfishUl:g.hide,showSuperfishUl:g.show})}(jQuery);
!function(q,L,T){"use strict";var e,l,Y=q(L),j=q("body"),r=q("#slide-out-widget-area"),s=q("#slide-out-widget-area-bg"),u=q("#header-outer"),c=q("#header-secondary-outer"),a=q("#header-outer #search-btn a"),h=q("#wpadminbar"),n=q("#ajax-loading-screen"),p=q(".body-border-top"),d=q("#page-header-bg"),i=q("#footer-outer"),o=0<q(".body-border-right").length?q(".body-border-right").width():0,g=u.is("[data-logo-height]")?parseInt(u.attr("data-logo-height")):30,f=u.is("[data-padding]")?parseInt(u.attr("data-padding")):28,m=u.is("[data-shrink-num]")?u.attr("data-shrink-num"):6,v=!!u.is('[data-condense="true"]'),b=!!u.is('[data-using-logo="1"]'),w=!!u.is('[data-header-resize="1"]'),y=!!u.is('[data-transparent-header="true"]'),_=(u.is('[data-mobile-fixed="1"]'),j.is("[data-header-format]")?j.attr("data-header-format"):"default"),t=j.is("[data-hhun]")?j.attr("data-hhun"):"",x=j.is("[data-cae]")&&"swing"!==j.attr("data-cae")?j.attr("data-cae"):"easeOutCubic",C=j.is("[data-cad]")?j.attr("data-cad"):"650",k=!(j.is('[data-m-animate="1"]')||!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)),$=L.nectarOptions&&L.nectarOptions.ocm_btn_position&&"left"===L.nectarOptions.ocm_btn_position?"left":"default",I=[],E=[],z=[],B=[],P=[],O=[],H=[],S=[],M=[],A=[],W=[],F=[],R=[],V=[],X=[],N=[],D=[],Q=[],Z=[],U=[],G=[],J=[],K=[],tt=[],et=0,at="",nt=!1,it=!1,st={animating:"false",perspect:"not-rolled",inUse:!1},rt={$usingFullScreenRows:!1};0<p.length&&("#ffffff"==p.css("background-color")&&"light"==j.attr("data-header-color")||"rgb(255, 255, 255)"==p.css("background-color")&&"light"==j.attr("data-header-color")||p.css("background-color")==u.attr("data-user-set-bg"))&&(it=!0);var ot={usingMobileBrowser:!!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/),usingFrontEndEditor:void 0!==L.vc_iframe,getWindowSize:function(){ot.winH=L.innerHeight,ot.winW=L.innerWidth,ot.adminBarHeight=0<h.length?h.height():0,ot.secondaryHeaderHeight=0<c.length&&"none"!=c.css("display")?c.outerHeight():0,ot.footerOuterHeight=0<i.length?i.outerHeight():0},scrollTop:0,clientX:0,clientY:0,scrollPosMouse:function(){return L.scrollY||Y.scrollTop()},scrollPosRAF:function(){ot.scrollTop=L.scrollY||Y.scrollTop(),requestAnimationFrame(ot.scrollPosRAF)},bindEvents:function(){ot.usingMobileBrowser?requestAnimationFrame(ot.scrollPosRAF):(Y.on("scroll",function(){ot.scrollTop=ot.scrollPosMouse()}),T.addEventListener("mousemove",function(t){ot.clientX=t.clientX,ot.clientY=t.clientY})),Y.on("resize",ot.getWindowSize),L.addEventListener("orientationchange",ot.getWindowSize)},init:function(){h=q("#wpadminbar"),this.getWindowSize(),this.usingPhoneBrowser=!!(ot.usingMobileBrowser&&ot.winW<690),this.scrollTop=this.scrollPosMouse(),this.bindEvents(),this.usingFrontEndEditor=void 0!==L.vc_iframe}};L.nectarDOMInfo=ot;var lt,dt={materialOffCanvasOpen:!1,materialSearchOpen:!1,permanentTransHeader:!!u.is('[data-permanent-transparent="1"]'),animatedScrolling:!1,preventScroll:!1,ocmOpen:!1,ocmAnimating:!1,ocmInit:!1,mobileHeader:""},ct,ht,ut,pt,gt,ft;function mt(){We(),ot.usingMobileBrowser||He(),mn(),Ia(),q("#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul").each(function(){q(this).removeClass("on-left-side"),q(this).offset().left+q(this).outerWidth()>Y.width()?(q(this).addClass("on-left-side"),q(this).find("ul").addClass("on-left-side")):(q(this).removeClass("on-left-side"),q(this).find("ul").removeClass("on-left-side"))}),zt()}function vt(){setTimeout(function(){He()},100)}function bt(){ke(),We(),Ht(),ga(),ot.usingMobileBrowser||He()}function wt(){q(".flex-gallery").each(function(){var e;q().flexslider&&(e=q(this),imagesLoaded(q(this),function(){var t=!e.find("ul").is('[data-d-autorotate="true"]');e.flexslider({animation:"fade",smoothHeight:!1,animationSpeed:500,useCSS:!1,touch:!0,slideshow:t}),q(".flex-gallery .flex-direction-nav li a.flex-next").html('<i class="fa fa-angle-right"></i>'),q(".flex-gallery .flex-direction-nav li a.flex-prev").html('<i class="fa fa-angle-left"></i>')}))})}function yt(t,e){this.lastX=ot.clientX,this.lastY=ot.clientY,this.$el=t,this.iconType=e,this.timeout=!1,this.overEl=!1,this.initialCalc=!1,this.styleType="default",this.bgElSelector="",this.$dragEl="",this.$innerParallaxEl="",this.parallaxLastX=0,this.parallaxLastY=0,this.$viewEl="",this.$closeEl="",this.lerpDamp=.18,this.createMarkup(),this.setup(),this.mouseBind()}function _t(){q('.wpb_gallery_slidesflickity_static_height_style .cell[data-lazy="true"]').each(function(){q(this).css({height:"",width:""});var t=parseInt(q(this).find("img").attr("height")),e=Rt(parseInt(q(this).find("img").attr("width")),t,2e3,parseInt(q(this).find("img").height())),t=0<q(this).find(".item-meta").length?q(this).find(".item-meta").outerHeight():0;q(this).css({height:e.height+t+"px",width:e.width+"px"})})}function xt(){0<q('.wpb_gallery_slidesflickity_static_height_style .cell[data-lazy="true"]').length&&(_t(),Y.on("smartresize",_t))}function Ct(){if(0==q(".nectar-flickity:not(.masonry)").length)return!1;B=[],P=[],q(".nectar-flickity:not(.masonry)").each(function(d){q(this).removeClass(function(t,e){return(e.match(/(^|\s)instance-\S+/g)||[]).join(" ")}),q(this).addClass("instance-"+d);var t=!(!q(this).is("[data-free-scroll]")||"true"!=q(this).attr("data-free-scroll")),e=!0,a=!0,n=.025,i=!1,s=!0,r=!0,o=!0,l="center",c=!1;q(this).is('[data-format="fixed_text_content_fullwidth"]')&&(a=e=!(l="left"),n=.02,q(this).parent().is('[data-alignment="right"]')&&(l="right")),1==t&&(e=!1),0<q(this).find(".nectar-el-parallax-scroll").length&&0<q(this).parents('[class*="wpb_gallery_slidesflickity_"]').length&&(e=!1),s=0<q(this).attr("data-controls").length&&"next_prev_arrows"==q(this).attr("data-controls")||0<q(this).attr("data-controls").length&&"next_prev_arrows_overlaid"==q(this).attr("data-controls")?!(i=!1):!(i=!0),0<q(this).attr("data-controls").length&&"none"==q(this).attr("data-controls")&&(s=i=!1);var h=!1,u=!1;q(this).is("[data-autoplay]")&&"true"==q(this).attr("data-autoplay")&&(h=!0,u=5e3,q(this).is("[data-autoplay-dur]")&&0<q(this).attr("data-autoplay-dur").length&&100<parseInt(q(this).attr("data-autoplay-dur"))&&parseInt(q(this).attr("data-autoplay-dur"))<3e4&&(u=h=parseInt(q(this).attr("data-autoplay-dur"))));var p=q(this),g=!(0<q("body.vc_editor").length),f=0<q("body.vc_editor").length,m="",v=!q(this).is("[data-wrap]")||"no-wrap"!=q(this).attr("data-wrap");q(this).is('[data-pause-on-hover="true"]')&&(f=!0),q(this).is('[data-centered-cells="true"]')&&(e=1);var b=!1;q(this).is('[data-adaptive-height="true"]')&&(b=!0);var w=0<q(this).find("img[data-flickity-lazyload]").length&&1;0<q(this).find("img[data-flickity-lazyload]").length&&q(this).is('[data-overflow="visible"]')&&q(this).is('[data-wrap="no-wrap"]')&&(w=2);var y=!!j.hasClass("rtl"),m=0<q(this).attr("data-controls").length&&"next_prev_arrows_overlaid"==q(this).attr("data-controls")||0<q(this).attr("data-controls").length&&"touch_total"==q(this).attr("data-controls")||q(this).hasClass("nectar-simple-slider")?{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}:{x0:20,x1:70,y1:30,x2:70,y2:25,x3:70};q(this).is('[data-format="fixed_text_content_fullwidth"]')&&0<q(this).parents(".full-width-content.wpb_row").length&&q(this).parents(".full-width-content.wpb_row").removeClass("full-width-content").addClass("full-width-section"),q(this).hasClass("nectar-simple-slider")&&(o=v=r=s=i=b=!1,n=.022,"true"==q(this).attr("data-pagination")&&(i=!0),"true"==q(this).attr("data-wrap")&&(v=!0),q(this).is('[data-simple-slider-transition="fade"]')&&(c=!0)),B[d]=new Flickity(".nectar-flickity.instance-"+d,{setGallerySize:r,contain:a,draggable:g,lazyLoad:w,imagesLoaded:o,percentPosition:!0,adaptiveHeight:b,cellAlign:l,groupCells:e,prevNextButtons:s,freeScroll:t,pageDots:i,resize:!0,selectedAttraction:n,autoPlay:h,rightToLeft:y,pauseAutoPlayOnHover:f,wrapAround:v,accessibility:!1,fade:c,arrowShape:m}),"true"==p.attr("data-arrows")&&0==p.find(".flickity-prev-next-button").length&&(p.append('<button class="flickity-button flickity-prev-next-button previous" aria-label="'+nectar_front_i18n.previous+'" type="button"><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg></button>'),p.append('<button class="flickity-button flickity-prev-next-button next" aria-label="'+nectar_front_i18n.next+'" type="button"><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></button>'),p.find(".flickity-prev-next-button.previous").on("click",function(){var t;!1!==v||0!=B[d].selectedIndex||0!=B[d].isAnimating&&void 0!==B[d].isAnimating||(t=B[d].x,anime({targets:B[d],x:t+100,duration:350,easing:"easeOutCubic"}),B[d].startAnimation()),B[d].previous()}),p.find(".flickity-prev-next-button.next").on("click",function(){var t;!1===v&&B[d].selectedIndex==B[d].slides.length-1&&0==B[d].isAnimating&&(t=B[d].x,anime({targets:B[d],x:t-100,duration:350,easing:"easeOutCubic"}),B[d].startAnimation()),B[d].next()}));var _,x,C="",k="",T,$,I,E,$,I,z,O,E,i,H,S,M,A,W;function F(){var t=0<q("body.vc_editor").length?p.find(".is-selected > .cell"):p.find(".is-selected");C&&t&&C.css({transition:"background-color 0.5s ease-out","background-color":t.is(".has-bg-color")?t.find(".bg-layer-wrap").css("background-color"):k})}q(this).is('.nectar-simple-slider[data-row-bg-connection="true"]')&&(C=(C=q(this).parents(".wpb_row")).find("> .row-bg-wrap .row-bg"),k=0<C.length?C.css("background-color"):"",B[d].on("change",F),F()),q(this).hasClass("nectar-simple-slider")&&0<p.find(".bg-layer[data-nectar-img-src]").length&&(T=new Waypoint({element:p[0],handler:function(){p.find(".bg-layer[data-nectar-img-src]").each(function(){var t=q(this)[0],e=t.getAttribute("data-nectar-img-src");t.style.backgroundImage="url('"+e+"')",t.classList.add("loaded")}),T.destroy()},offset:"95%"})),q(this).hasClass("nectar-simple-slider")&&q(this).is('[data-parallax="true"]')&&($=q(this).find(".cell"),I=d,!0===v&&p.find(".flickity-prev-next-button").on("click",function(){p.addClass("disabled-nav"),setTimeout(function(){p.removeClass("disabled-nav")},500)}),E=y?1:-1,B[d].on("scroll",function(){q.each(B[d].slides,function(t,e){var a=$[t].querySelector(".bg-layer"),n=$[t].querySelector(".inner"),i=B[I],s=0,s=0===t?Math.abs(i.x)>i.slidesWidth?i.slidesWidth+i.x+i.slides[i.slides.length-1].outerWidth+e.target:e.target+i.x:t===i.slides.length-1&&Math.abs(i.x)+i.slides[t].outerWidth<i.slidesWidth?e.target-i.slidesWidth+i.x-i.slides[t].outerWidth:e.target+i.x;a.style.transform="translate3d("+s*(E/2)+"px,0,0)",n.style.transform="translate3d("+s*(E/4)+"px,0,0)"})})),(q(this).is('.nectar-carousel[data-wrap="no-wrap"]')&&0<q(this).find('.nectar-fancy-box[data-n-parallax-bg="true"]').length||0<q(this).parents('[class*="wpb_gallery_slidesflickity_"]').length&&0<q(this).find(".nectar-el-parallax-scroll").length)&&($=q(this).find(".cell"),I=d,z=0<q(this).find(".nectar-fancy-box").length?".parallax-layer .box-bg":".nectar-el-parallax-scroll .img-wrap",O=!!q(this).is('[data-wrap="wrap"]'),E=y?1:-1,B[d].on("scroll",function(){q.each(B[d].slides,function(t,e){var a=$[t].querySelector(z),n=B[I],i=0,i=0===t&&O?Math.abs(n.x)>n.slidesWidth?n.slidesWidth+n.x+n.slides[n.slides.length-1].outerWidth+e.target:e.target+n.x:1===t&&O?Math.abs(n.x)>n.slidesWidth?n.slidesWidth+n.x+n.slides[n.slides.length-2].outerWidth+e.target:e.target+n.x:t===n.slides.length-1&&O?Math.abs(n.x)+n.slides[t].outerWidth<n.slidesWidth?e.target-n.slidesWidth+n.x-n.slides[t].outerWidth:e.target+n.x:t===n.slides.length-2&&O&&Math.abs(n.x)+n.slides[t].outerWidth+n.slides[t+1].outerWidth<n.slidesWidth?e.target-n.slidesWidth+n.x-n.slides[t].outerWidth:e.target+n.x;a&&(a.style.transform="translate3d("+i*(E/11)+"px,0,0)",a.style.willChange="transform")})}),B[d].reposition()),q(this).hasClass("nectar-simple-slider")&&1==i&&(q(this).find(".flickity-page-dots li").append('<svg width="65px" height="65px" viewBox="0 0 72 72" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><circle class="time" stroke-width="5" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg>'),u&&(q(this).find(".flickity-page-dots li circle.time").css("transition","stroke-dashoffset "+(parseInt(u)+100)+"ms linear, stroke 0.2s ease"),q(this).find(".flickity-page-dots li:first").addClass("no-trans"),setTimeout(function(){p.find(".flickity-page-dots li:first").removeClass("no-trans")},60),B[d].on("select",function(t){B[d].playPlayer()}),B[d].on("dragEnd",function(t){B[d].playPlayer(),p.find(".flickity-page-dots .is-selected").removeClass("no-trans")}),B[d].on("dragStart",function(t){p.find(".flickity-page-dots .is-selected").addClass("no-trans")}))),(q(this).is('[data-controls="touch_total"]')||q(this).is('[data-touch-indicator="true"]'))&&(i=!(!q(this).hasClass("drag-indicator-only")&&!q(this).is('[data-r-bottom-total="true"]')),0!=q(this).find(".visualized-total").length||i||(0<q(this).parents(".full-width-content").length&&0<q(this).parents(".vc_col-sm-12").length?q(this).append('<div class="container normal-container"><div class="visualized-total"><span></span></div></div>'):q(this).append('<div class="visualized-total"><span></span></div>')),ot.usingMobileBrowser||(P[d]=new yt(q(this),"horizontal-movement"),B[d].on("dragMove",function(t,e){ot.clientY=e.clientY,ot.clientX=e.clientX}),B[d].on("pointerDown",function(t,e){q(".nectar-drag-indicator").addClass("pointer-down")}),B[d].on("pointerUp",function(t,e){q(".nectar-drag-indicator").removeClass("pointer-down")})),H=q(this).find(".flickity-page-dots li").length,S=q(this).find(".visualized-total span"),M=1,A=q(this).find(".visualized-total").width(),i||(Y.on("smartresize",function(){setTimeout(function(){H=p.find(".flickity-page-dots li").length,A=p.find(".visualized-total").width(),M=A/H*p.find(".flickity-page-dots .is-selected").index(),S.css("width",100/H+"%"),S.css({x:M+"px"})},200)}),setTimeout(function(){H=p.find(".flickity-page-dots li").length,A=p.find(".visualized-total").width(),S.css("width",100/H+"%")},200),B[d].on("change",function(t,e){M=A/H*p.find(".flickity-page-dots .is-selected").index(),S.css({x:M+"px"})}))),q(this).is('[data-format="fixed_text_content_fullwidth"]')&&!ot.usingFrontEndEditor&&(W=ot.usingMobileBrowser,u&&(q(L).on("nectar-material-ocm-open",function(){B[d].stopPlayer()}),q(L).on("nectar-material-ocm-close",function(){B[d].playPlayer()})),B[d].on("scroll",function(){var o,t,l;W||(1!=dt.materialOffCanvasOpen?(o=p.find(".cell").outerWidth()+25,t=0<q('body[data-header-format="left-header"]').length&&1e3<Y.width()?275:0,l=(Y.width()+t-p.parents(".main-content").width())/2,l+=parseInt(p.css("margin-left"))+2,B[d].slides.forEach(function(t,e){var a=1,n=0,i=0,s=10,r=1,t=q(t.cells[0].element).offset().left,e=q(".nectar-flickity.instance-"+d+" .cell:nth-child("+(e+1)+")"),i=t-l<0&&-1*o<t-l?(a=1+(t-l)/1500,r=1+(t-l+70)/550,n=-1*(t-l),(t-l)/25*-1):(r=a=1,n=0),s;e.css({"z-index":t+5-l<0&&-1*o<t-l?5:10}),e.find(".inner-wrap-outer").css({transform:"perspective(800px) translateX("+n+"px) rotateY("+i+"deg) translateZ(0)",opacity:r}),e.find(".inner-wrap").css({transform:"scale("+a+") translateZ(0)"})})):B[d].slides.forEach(function(t,e){var e=q(".nectar-flickity.instance-"+d+" .cell:nth-child("+(e+1)+")");e.find(".inner-wrap-outer").css({transform:"perspective(800px) translateX(0) rotateY(0) translateZ(0)",opacity:"1"}),e.find(".inner-wrap").css({transform:"scale(1) translateZ(0)"})}))})),B[d].on("dragStart",function(){clearTimeout(_),clearTimeout(x),p.addClass("is-dragging"),p.addClass("is-moving"),p.find(".flickity-prev-next-button").addClass("hidden")}),B[d].on("dragEnd",function(){p.removeClass("is-dragging"),_=setTimeout(function(){p.removeClass("is-moving"),p.find(".flickity-prev-next-button").removeClass("hidden")},600),x=setTimeout(function(){p.removeClass("is-moving")},300)}),q(".flickity-prev-next-button").on("click",function(){clearTimeout(_),q(this).parents(".nectar-flickity").find(".flickity-prev-next-button").addClass("hidden"),_=setTimeout(function(){p.find(".flickity-prev-next-button").removeClass("hidden")},600)}),p.hasClass("nectar-carousel")&&!p.is('[data-adaptive-height="true"]')&&imagesLoaded(p,function(){$t(p)})}),0<q(".nectar-carousel.nectar-flickity:not(.masonry)").length&&(ot.usingMobileBrowser?L.addEventListener("orientationchange",kt):Y.on("resize",kt)),0<q(".wpb_gallery_slidesflickity_static_height_style .item-meta").length&&(Y.on("resize",Tt),Tt())}function kt(){q('.nectar-carousel.nectar-flickity:not(.masonry):not([data-adaptive-height="true"])').each(function(){$t(q(this))})}function Tt(){q(".wpb_gallery_slidesflickity_static_height_style .item-meta").each(function(){q(this).css({width:q(this).parent().find("img").width()})})}function $t(t){var e=0;t.find(".flickity-slider > .cell").css("height","auto"),t.find(".flickity-slider > .cell").each(function(){q(this).height()>e&&(e=q(this).height())}),e<10&&(e="auto"),t.find(".flickity-slider > .cell").css("height",e+"px")}function It(){q(".twentytwenty-container").each(function(){var t=q(this);0==t.find(".twentytwenty-handle").length&&q(this).imagesLoaded(function(){t.twentytwenty()})})}function Et(){var t,a;Ht(),0!=q('body[data-header-format="left-header"]').length||ot.usingPhoneBrowser||(t=!(0<q('#header-outer[data-megamenu-rt="1"]').length&&0<q('#header-outer[data-transparent-header="true"]').length),q(".sf-menu:not(.buttons)").superfish({delay:500,speed:"fast",disableHI:t,speedOut:"fast",animation:{opacity:"show"}}),q("#header-outer .sf-menu.buttons li.menu-item").on("mouseover",function(){q(this).addClass("sfHover")}),q("#header-outer .sf-menu.buttons li.menu-item").on("mouseleave",function(){var t=q(this);t.is(".menu-item-has-children")?setTimeout(function(){t.is(":hover")||t.removeClass("sfHover")},200):t.removeClass("sfHover")}),q('#header-secondary-outer li.megamenu:not(.nectar-megamenu-menu-item), #header-outer:not([data-format="menu-left-aligned"]):not([data-format="centered-logo-between-menu-alt"]) .sf-menu.buttons li.megamenu').removeClass("nectar-megamenu-menu-item").removeClass("megamenu"),q('#header-outer[data-format="centered-menu-bottom-bar"] .right-side .sf-menu li.nectar-megamenu-menu-item').removeClass("align-left").removeClass("align-middle").addClass("align-right"),q('#header-outer[data-format="centered-menu-bottom-bar"] .left-side .sf-menu li.nectar-megamenu-menu-item').removeClass("align-right").removeClass("align-middle").addClass("align-left"),q("#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul").each(function(){q(this).offset().left+q(this).outerWidth()>Y.width()&&(q(this).addClass("on-left-side"),q(this).find("ul").addClass("on-left-side"))}),q('body:not([data-header-format="left-header"]) header#top nav > ul > li.megamenu > ul > li > ul > li:has("> ul")').addClass("has-ul"),0<q('body[data-megamenu-width="full-width"]').length&&0<q("ul.sub-menu").length&&(Ot(),Y.on("smartresize",Ot),q("header#top nav > ul > li.megamenu > .sub-menu").css("box-sizing","content-box")),q("header#top nav > ul.sf-menu > li.menu-item").on("mouseenter",function(){q(this).addClass("menu-item-over")}),q("header#top nav > ul.sf-menu > li.menu-item").on("mouseleave",function(){q(this).removeClass("menu-item-over")}),q("#header-outer nav .megamenu .sub-menu a.sf-with-ul .sf-sub-indicator, #header-outer .megamenu .sub-menu a .sf-sub-indicator").remove(),q(".sf-menu > .nectar-megamenu-menu-item > a .menu-title-text .megamenu-bg-lazy[data-bg-src]").each(function(){var t=q(this).parents(".nectar-megamenu-menu-item"),e=q(this).attr("data-bg-src"),a=q(this).attr("data-align").replace("_"," ");t.find("> ul").css({"background-position":a,"background-image":'url("'+e+'")'}),q(this).remove()}),q(".sf-menu > .nectar-megamenu-menu-item > ul > li > a .menu-title-text .megamenu-col-bg-lazy[data-bg-src]").each(function(){var t=q(this).closest(".menu-item"),e=q(this).attr("data-bg-src"),a=q(this).attr("data-align").replace("_"," ");t.css({"background-position":a,"background-image":'url("'+e+'")'}),q(this).remove()}),q("#header-outer nav > ul > li.megamenu > ul.sub-menu > li > a").each(function(){"-"!=q(this).text()&&"–"!=q(this).text()&&!q(this).parent().hasClass("hide-title")||q(this).remove()})),"IntersectionObserver"in L?(a=new IntersectionObserver(function(t){t.forEach(function(t){var e,t;t.isIntersecting&&((e=t.target).classList.add("loaded"),(t=e.getAttribute("data-menu-img-src"))&&(e.setAttribute("src",t),e.removeAttribute("data-menu-img-src")),a.unobserve(e))})},{rootMargin:"0px",threshold:0}),[].slice.call(T.querySelectorAll(".nectar-menu-icon-img[data-menu-img-src], #header-outer .nectar-ext-menu-item .image-layer")).forEach(function(t){a.observe(t)})):(q(".sf-menu .nectar-menu-icon-img[data-menu-img-src]").each(function(){q(this).attr("src",q(this).attr("data-menu-img-src")),q(this).removeAttr("data-menu-img-src")}),q(".nectar-ext-menu-item .image-layer").addClass("loaded")),q(".sub-menu .nectar-menu-icon, .sub-menu .nectar-menu-icon-img, .off-canvas-menu-container > ul > li > a .nectar-menu-icon, .off-canvas-menu-container > ul > li > a .nectar-menu-icon-img").each(function(){var t=q(this).parent(),e=q(this).detach();0==t.parents(".nectar-ext-menu-item").length&&(t.wrapInner('<span class="nectar-menu-icon-text" />'),t.addClass("nectar-menu-item-with-icon")),t.prepend(e)}),q("#slide-out-widget-area:not(.fullscreen) .nectar-menu-label").each(function(){0==q(this).parents(".nectar-ext-menu-item").length&&q(this).closest("a").addClass("nectar-menu-item-with-icon")}),q(".off-canvas-menu-container .nectar-menu-icon, .off-canvas-menu-container .nectar-menu-icon-img").each(function(){var t=q(this).parent();(0<t.find(".item_desc").length||0<t.find(".nav_desc").length)&&t.addClass("nectar-menu-item-with-desc")}),zt()}function zt(){q("nav:not(.left-side):not(.right-side) .sf-menu > .nectar-megamenu-menu-item.align-left:not(.width-100)").each(function(){var t=q(this),e=q("header#top > .container > .row"),a=q(this).find("> ul.sub-menu");if(t){if(a.width()+t.offset().left>ot.winW)return q(this).addClass("align-middle"),!0;q(this).find("> ul.sub-menu").css({right:e.width()-(t.offset().left+t.width()-e.offset().left)-q(this).find("> ul.sub-menu").width()+t.width(),left:"auto"}),q(this).removeClass("align-middle")}}),q("nav:not(.left-side):not(.right-side) .sf-menu > .nectar-megamenu-menu-item.align-right:not(.width-100)").each(function(){var t=q(this),e=q("header#top > .container > .row"),a=q(this).find("> ul.sub-menu");if(t){if(t.offset().left+t.width()-a.width()<0)return q(this).addClass("align-middle"),!0;q(this).find("> ul.sub-menu").css({right:e.width()-(t.offset().left+t.width()-e.offset().left),left:"auto"}),q(this).removeClass("align-middle")}}),q("nav:not(.left-side):not(.right-side) .sf-menu > .nectar-megamenu-menu-item.align-middle:not(.width-100)").each(function(){var t=q(this),e=q("header#top > .container > .row"),a=q(this).find("> ul.sub-menu"),n,i,s,e,t,e;t&&(n=e.width(),i=e.offset().left,s=t.offset().left,e=t.width(),t=a.width(),a.css({right:n-(s+e-i)-t/2+e/2,left:"auto"}),(e=a.offset()).left<0?a.css({right:"auto",left:"0px"}):e.left+t>ot.winW&&a.css({right:"0px",left:"auto"}))})}function Ot(){var t=Y.width(),e=q("header#top > .container").width();q("header#top nav:not(.left-side):not(.right-side) > ul > li.megamenu:not(.width-50):not(.width-75) > .sub-menu").css({"padding-left":(t-e)/2+"px","padding-right":(t+2-e)/2+"px",width:e,left:"-"+(t-e)/2+"px"})}function Ht(){ot.winW<1e3&&"1"==j.attr("data-responsive")?(j.addClass("mobile"),q("header#top nav").css("display","none")):(j.removeClass("mobile"),q("header#top nav").css("display",""),q(".slide-out-widget-area-toggle #toggle-nav .lines-button").removeClass("close"))}function St(){0!=q(".carousel").length&&("undefined"!=typeof SalientRecentProjectsCarousel&&q("ul.carousel.portfolio-items").each(function(t){U[t]=new SalientRecentProjectsCarousel(q(this))}),q('ul.carousel:not(".clients"):not(.portfolio-items)').each(function(){var t,e,a=q(this),n="true"==q(this).parents(".carousel-wrap").attr("data-full-width")?"auto":3,i="true"==q(this).parents(".carousel-wrap").attr("data-full-width")?"auto":"",s="true"==q(this).parents(".carousel-wrap").attr("data-full-width")?500:453,r="true"==q(this).attr("data-autorotate"),o=!0,l=!0,l=(o=!(0<q("body.ascend").length&&"true"!=q(this).parents(".carousel-wrap").attr("data-full-width")||0<q("body.material").length&&"true"!=q(this).parents(".carousel-wrap").attr("data-full-width"))||q(this).find("li").length%3==0,!0),t=parseInt(q(this).attr("data-scroll-speed"))?parseInt(q(this).attr("data-scroll-speed")):700,e=q(this).is("[data-easing]")?q(this).attr("data-easing"):"linear",d=a;0==a.find("img").length&&(d=j),imagesLoaded(d,function(){a.carouFredSel({circular:o,infinite:l,height:"auto",responsive:!0,items:{width:s,visible:{min:1,max:n}},swipe:{onTouch:!0,onMouse:!0,options:{excludedElements:"button, input, select, textarea, .noSwipe",tap:function(t,e){!q(e).attr("href")||q(e).is('[target="_blank"]')||q(e).is('[rel^="prettyPhoto"]')||q(e).is(".magnific-popup")||q(e).is(".magnific")||L.open(q(e).attr("href"),"_self")}},onBefore:function(){a.find(".work-item").trigger("mouseleave"),a.find(".work-item .work-info a").trigger("mouseup")}},scroll:{items:i,easing:e,duration:t,onBefore:function(){(0<q("body.ascend").length&&"true"!=a.parents(".carousel-wrap").attr("data-full-width")||0<q("body.material").length&&"true"!=a.parents(".carousel-wrap").attr("data-full-width"))&&a.parents(".carousel-wrap").find(".item-count .total").html(Math.ceil(a.find("> li").length/a.triggerHandler("currentVisible").length))},onAfter:function(){(0<q("body.ascend").length&&"true"!=a.parents(".carousel-wrap").attr("data-full-width")||0<q("body.material").length&&"true"!=a.parents(".carousel-wrap").attr("data-full-width"))&&(a.parents(".carousel-wrap").find(".item-count .current").html(a.triggerHandler("currentPage")+1),a.parents(".carousel-wrap").find(".item-count .total").html(Math.ceil(a.find("> li").length/a.triggerHandler("currentVisible").length)))}},prev:{button:function(){return a.parents(".carousel-wrap").find(".carousel-prev")}},next:{button:function(){return a.parents(".carousel-wrap").find(".carousel-next")}},auto:{play:r}},{transition:!0}).animate({opacity:1},1300),a.parents(".carousel-wrap").wrap('<div class="carousel-outer">'),"true"==a.parents(".carousel-wrap").attr("data-full-width")&&a.parents(".carousel-outer").css("overflow","visible"),(0<q("body.ascend").length&&"true"!=a.parents(".carousel-wrap").attr("data-full-width")||0<q("body.material").length&&"true"!=a.parents(".carousel-wrap").attr("data-full-width"))&&q('<div class="item-count"><span class="current">1</span>/<span class="total">'+a.find("> li").length/a.triggerHandler("currentVisible").length+"</span></div>").insertAfter(a.parents(".carousel-wrap").find(".carousel-prev")),a.addClass("finished-loading"),qt()})}),Y.off("smartresize.carouselHeightCalcs"),Y.on("smartresize.carouselHeightCalcs",qt))}function Mt(){var e=0,a=0,t=".carousel-wrap .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a";q(t).on("mousedown",function(t){e=t.clientX}),q(t).on("mouseup",function(t){a=t.clientX}),q(t).on("click",function(){if(10<Math.abs(e-a))return!1})}function At(){0!==q(".owl-carousel[data-desktop-cols]").length&&q(".owl-carousel[data-desktop-cols]").each(function(){q(this).addClass("owl-theme");var t=q(this),e=t.attr("data-autorotate"),a=t.attr("data-autorotation-speed"),n=!!t.is('[data-loop="true"]'),i=!!j.hasClass("rtl");q(this).owlCarousel({responsive:{0:{items:q(this).attr("data-mobile-cols")},690:{items:q(this).attr("data-tablet-cols")},1e3:{items:q(this).attr("data-desktop-small-cols")},1300:{items:q(this).attr("data-desktop-cols")}},autoplay:e,autoplayTimeout:a,loop:n,rtl:i,smartSpeed:350,onTranslate:function(){t.addClass("moving")},onTranslated:function(){t.removeClass("moving")}}),q(this).on("changed.owl.carousel",function(t){t.item.count-t.page.size==t.item.index&&q(t.target).find(".owl-dots div:last").addClass("active").siblings().removeClass("active")})})}function Wt(t){var e=t.data.wooFlickity.selectedIndex+1;t.data.wooFlickityCount.text(e+"/"+t.data.wooFlickity.slides.length)}function Ft(){0===q(".products-carousel").length&&0===q(".nectar-woo-flickity").length||(q(".products-carousel").each(function(){var t=q(this).find("ul.products"),e=0<q(this).parents(".full-width-content ").length?400:353,a=t;0==t.find("img").length&&(a=j),q(this).append('<a class="carousel-prev" href="#"><i class="icon-salient-left-arrow"></i></a> <a class="carousel-next" href="#"><i class="icon-salient-right-arrow"></i></a>'),imagesLoaded(a,function(){t.carouFredSel({circular:!0,responsive:!0,items:{width:e,visible:{min:1,max:"auto"}},swipe:{onTouch:!0,onMouse:!0,options:{excludedElements:"button, input, select, textarea, .noSwipe",tap:function(t,e){!q(e).attr("href")||q(e).is('[target="_blank"]')||q(e).hasClass("add_to_wishlist")||q(e).hasClass("add_to_cart_button")||q(e).is('[rel^="prettyPhoto"]')||L.open(q(e).attr("href"),"_self"),!q(e).parent().attr("href")||q(e).parent().is('[target="_blank"]')||q(e).parent().hasClass("add_to_wishlist")||q(e).parent().hasClass("add_to_cart_button")||q(e).parent().is('[rel^="prettyPhoto"]')||L.open(q(e).parent().attr("href"),"_self")}},onBefore:function(){t.find(".product-wrap").trigger("mouseleave"),t.find(".product a").trigger("mouseup")}},scroll:{items:"auto",easing:"easeInOutQuart",duration:800},prev:{button:function(){return t.parents(".carousel-wrap").find(".carousel-prev")}},next:{button:function(){return t.parents(".carousel-wrap").find(".carousel-next")}},auto:{play:!1}}).animate({opacity:1},1300),t.parents(".carousel-wrap").wrap('<div class="carousel-outer">'),t.addClass("finished-loading"),We(),Y.trigger("resize")})}),R=[],q(".nectar-woo-flickity").each(function(t){var a=q(this);q(this).find(".products > li").each(function(){q(this).wrap('<div class="flickity-cell"></div>')});var e=!!a.is('[data-controls="bottom-pagination"]'),n=!a.is('[data-controls="bottom-pagination"]'),i=!a.is('[data-wrap="no-wrap"]'),s=1!=i||e,r=a.is("[data-autorotate-speed]")&&800<parseInt(a.attr("data-autorotate-speed"))?parseInt(a.attr("data-autorotate-speed")):5e3;a.is('[data-autorotate="true"]')||(r=!1),q(this).find("ul.products").addClass("generate-markup"),R[t]=q(this).find("ul.products"),1==(n=a.is('[data-controls="arrows-overlaid"]')?!0:n)&&R[t].on("ready.flickity",function(){var t=a.find(".flickity-prev-next-button.previous").detach(),e=a.find(".flickity-prev-next-button.next").detach();a.find(".nectar-woo-carousel-top").append(t).append(e)});var o=!1,l="center";j.hasClass("rtl")&&(o=!0,l="right"),a.is('[data-group-columns="no-overflow"]')?(s=!0,l="left"):a.is('[data-group-columns="overflow"]')&&(s=!1,l="center");var d=!1,n,d;L.nectarOptions&&L.nectarOptions.woo_related_upsell_carousel&&"true"==L.nectarOptions.woo_related_upsell_carousel&&q(this).hasClass("related-upsell-carousel")&&(s=!(i=!(d=!0)),"center"==l&&q(this).find(".products > div").length<4&&(l="left"),q(this).find(".products > div").length<5&&q(this).addClass("desktop-controls-hidden")),R[t].flickity({draggable:!0,contain:!0,lazyLoad:!1,imagesLoaded:!0,cellAlign:l,groupCells:s,prevNextButtons:n,pageDots:e,resize:!0,adaptiveHeight:!1,percentPosition:!0,setGallerySize:!0,rightToLeft:o,wrapAround:i,autoPlay:r,accessibility:!1}),q(this).is('[data-controls="touch_indicator"]')?ot.usingMobileBrowser||(P.push(new yt(q(this),"horizontal-movement")),R[t].on("dragMove.flickity",function(t,e){ot.clientY=e.clientY,ot.clientX=e.clientX}),R[t].on("pointerDown.flickity",function(t,e){q(".nectar-drag-indicator").addClass("pointer-down")}),R[t].on("pointerUp.flickity",function(t,e){q(".nectar-drag-indicator").removeClass("pointer-down")})):1==n&&(a.find(".flickity-prev-next-button").append('<svg width="65px" height="65px" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><circle stroke-width="3" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle> <circle class="time" stroke-width="3" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg>'),n=q('<div class="woo-flickity-count" />'),(1==d?a.find("section > h2"):a).append(n),Wt({data:{wooFlickity:d=R[t].data("flickity"),wooFlickityCount:n}}),R[t].on("select.flickity",{wooFlickity:d,wooFlickityCount:n},Wt))}))}function qt(){q('.carousel.finished-loading:not(".portfolio-items, .clients"), .caroufredsel_wrapper .products.finished-loading').each(function(){var t=0;q(this).find("> li").each(function(){q(this).height()>t&&(t=q(this).height())}),q(this).css("height",t+5),q(this).parents(".caroufredsel_wrapper").css("height",t+5),(0<q("body.ascend").length&&"true"!=q(this).parents(".carousel-wrap").attr("data-full-width")||0<q("body.material").length&&"true"!=q(this).parents(".carousel-wrap").attr("data-full-width"))&&(q(this).parents(".carousel-wrap").find(".item-count .current").html(Math.ceil((q(this).triggerHandler("currentPosition")+1)/q(this).triggerHandler("currentVisible").length)),q(this).parents(".carousel-wrap").find(".item-count .total").html(Math.ceil(q(this).find("> li").length/q(this).triggerHandler("currentVisible").length)))})}function Lt(){0!==q(".carousel.clients").length&&(q(".carousel.clients").each(function(){var t,e=q(this),a=!q(this).hasClass("disable-autorotate"),t=parseInt(q(this).attr("data-max"))?parseInt(q(this).attr("data-max")):5;Y.width()<690&&"1"==j.attr("data-responsive")&&(t=2,q(this).addClass("phone"));var n=e;0==e.find("img").length&&(n=j),imagesLoaded(n,function(){e.carouFredSel({circular:!0,responsive:!0,items:{height:e.find("> div:first").height(),width:e.find("> div:first").width(),visible:{min:1,max:t}},swipe:{onTouch:!0,onMouse:!0},scroll:{items:1,easing:"easeInOutCubic",duration:"800",pauseOnHover:!0},auto:{play:a,timeoutDuration:2700}}).animate({opacity:1},1300),e.addClass("finished-loading"),e.parents(".carousel-wrap").wrap('<div class="carousel-outer">'),Y.trigger("resize")})}),Y.off("smartresize.clientsCarouselHeight",Yt),Y.on("smartresize.clientsCarouselHeight",Yt))}function Yt(){var t=0;q(".carousel.clients.finished-loading").each(function(){q(this).find("> div").each(function(){q(this).height()>t&&(t=q(this).height())}),q(this).css("height",t),q(this).parent().css("height",t)})}function jt(){j.on("mousedown",'.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a',function(){q(this).addClass("active")}),j.on("mouseup",'.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a',function(){q(this).removeClass("active")}),q("body.ascend, body.material").on("mouseover",".carousel-next",function(){q(this).parent().find(".carousel-prev, .item-count").addClass("next-hovered")}),q("body.ascend, body.material").on("mouseleave",".carousel-next",function(){q(this).parent().find(".carousel-prev, .item-count").removeClass("next-hovered")})}function Bt(t,e,a){return Math.max(Math.min(t,e),a)}function Pt(t,e,a){return(1-a)*t+a*e}function Rt(t,e,a,n){var n=Math.min(a/t,n/e);return{width:t*n,height:e*n}}function Vt(t){if(t){var t=q(t.bold());return t.find("script").remove(),t.html()}return""}function Xt(){var t,t,e,e,t;return t=j.is('[data-header-format="left-header"]')&&1e3<=ot.winW||j.is('[data-hhun="1"]')||0<q(".page-template-template-no-header-footer").length||0<q(".page-template-template-no-header").length?0:(t=f-f/1.8,e=u.outerHeight(),(0<c.length&&j.is(".material")||0<c.length&&!j.is(".material")&&ot.winW<1e3)&&(e-=ot.secondaryHeaderHeight),u.is('[data-header-resize="1"]')&&!u.is(".small-nav")&&1e3<=ot.winW?e-(parseInt(m)+2*t):e),1e3<=ot.winW&&0<q('#header-outer[data-condense="true"]').length&&(e=q('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),t=u.height()-(parseInt(e.position().top)-parseInt(u.find("#logo").css("margin-top")))-parseInt(ot.secondaryHeaderHeight)),t}function Nt(t){return("0"+parseInt(t).toString(16)).slice(-2)}function Dt(){return Math.floor(1e4*Math.random())}function Qt(n,t,i){var s=L.scrollY||T.documentElement.scrollTop,r=(n=n||0,t=t||2e3,i=i||"easeOutSine",0),o=Math.max(.1,Math.min(Math.abs(s-n)/t,.8)),l={easeInOutQuint:function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)}};!function t(){var e=(r+=1/60)/o,a=l[i](e);e<1?(requestAnimationFrame(t),L.scrollTo(0,s+(n-s)*a)):L.scrollTo(0,n)}()}function Zt(){var t=0<q("body[data-header-breakpoint]").length&&"1000"!=j.attr("data-header-breakpoint")?parseInt(j.attr("data-header-breakpoint")):1e3,e=!1;return e=1e3!=t&&1e3<ot.winW&&ot.winW<=t?!0:e}function Ut(t){return t.replace(/"/g,"").replace(/url\(|\)$/gi,"")}L.nectarState=dt,yt.prototype.setup=function(){"post-grid-images"!==this.iconType&&"horizontal-movement"!==this.iconType&&"link-indicator"!==this.iconType&&"view-indicator"!==this.iconType||this.viewportTracking()},yt.prototype.viewportTracking=function(){var e=this;"IntersectionObserver"in L&&(this.observer=new IntersectionObserver(function(t){t.forEach(function(t){t.isIntersecting?(e.$el.addClass("active").addClass("el-in-view"),e.$el.find(e.bgElSelector).css("visibility","visible"),e.activeViewRAF=!0):(e.$el.find(e.bgElSelector).css("visibility","hidden"),e.activeViewRAF=!1,e.$el.removeClass("el-in-view"),0==q(".el-in-view").length&&(0<e.$dragEl.length?e.$dragEl.removeClass("visible"):0<e.$viewEl.length&&e.$viewEl.removeClass("visible")))})},{rootMargin:"0px",threshold:0}),this.observer.observe(this.$el[0]))},yt.prototype.createMarkup=function(){var t=this,e;"horizontal-movement"===this.iconType&&(this.$el.is("[data-indicator-bg]")&&(this.styleType="solid"),0==q(".nectar-drag-indicator").length?(e=0<q("body > #boxed").length?" in-boxed":"",q("body").append('<div class="nectar-drag-indicator'+e+'" data-type="'+this.styleType+'"><div class="color-circle"></div><span class="inner-layer"><i class="fa fa-angle-left"></i><i class="fa fa-angle-right"></i></span></div>'),this.$dragEl=q(".nectar-drag-indicator"),this.dragRAF()):this.$dragEl=q(".nectar-drag-indicator"),"default"!=this.styleType&&(this.$innerParallaxEl=q(".nectar-drag-indicator .inner-layer"))),"view-indicator"!==this.iconType&&"link-indicator"!==this.iconType||(this.activeViewRAF=!0,0==q(".nectar-view-indicator").length?(e=0<q("body > #boxed").length?" in-boxed":"",q("body").append('<div class="nectar-view-indicator'+e+'"><div class="color-circle"></div><span class="inner-layer"></span></div>'),"gallery-zoom-indicator"!==this.iconType&&q(".nectar-view-indicator span").text(q(".nectar-post-grid").attr("data-indicator-text")),this.$viewEl=q(".nectar-view-indicator"),setTimeout(function(){t.lastY=ot.clientY,t.lastX=ot.clientX,t.viewRAF()},100)):this.$viewEl=q(".nectar-view-indicator"),this.$innerParallaxEl=q(".nectar-view-indicator .inner-layer")),"close-indicator"===this.iconType&&(0==q(".nectar-view-indicator").length?(e=0<q("body > #boxed").length?" in-boxed":"",q("body").append('<div class="nectar-close-indicator'+e+'"><div class="inner"><div class="inner-layer"><i class="icon-salient-m-close"></i></div></div></div>'),this.$closeEl=q(".nectar-close-indicator"),this.closeRAF()):this.$closeEl=q(".nectar-close-indicator"),this.$innerParallaxEl=q(".nectar-close-indicator .inner-layer")),"post-grid-images"===this.iconType&&(this.activeViewRAF=!0,this.bgElSelector=this.$el.hasClass("nectar-category-grid")?".nectar-category-grid-item-bg":".nectar-post-grid-item-bg-wrap",this.$el.hasClass("mouse-move-bound")?this.$viewEl=this.$el.find(this.bgElSelector):(this.$viewEl=this.$el.find(this.bgElSelector),this.$el.addClass("mouse-move-bound")),this.viewRAF())},yt.prototype.mouseBind=function(){var a=this,t,e,n;"horizontal-movement"===this.iconType?(a.$el.find(".flickity-viewport").on("mouseover",function(){a.$dragEl.attr("data-type",a.styleType),a.$dragEl.addClass("visible");var t=a.$el.is("[data-touch-icon-color]")?"color-"+a.$el.attr("data-touch-icon-color"):"",t,t;a.$dragEl.removeClass("color-dark").removeClass("color-light").removeClass("color-default"),"default"==a.styleType?(a.$dragEl.addClass(t),a.$dragEl.find("> span, i").css("color",""),a.$dragEl.find(".color-circle").css("background-color","")):"solid"==a.styleType&&(t=a.$el.attr("data-indicator-bg"),a.$dragEl.find(".color-circle").css("background-color",t),a.$dragEl.find("> span").css("color",t),t=a.$el.attr("data-indicator-icon"),a.$dragEl.find("i").css("color",t))}),a.$el.find(".flickity-viewport").on("mouseleave",function(){a.$dragEl.removeClass("visible")}),a.$el.find(".product-add-to-cart a").on("mouseenter",function(){a.$dragEl.removeClass("visible")}),a.$el.find(".product-add-to-cart a").on("mouseleave",function(){a.$dragEl.addClass("visible")})):"close-indicator"===this.iconType?(q("body").on("click",'.team-member[data-style*="bio_fullscreen"]',function(){0<q(".nectar_team_member_overlay:not(.open)").length||(a.$closeEl.addClass("visible"),a.$closeEl.find(".inner").addClass("visible"))}),q("body").on("click",".nectar_team_member_overlay:not(.animating)",function(){a.$closeEl.removeClass("visible"),a.$closeEl.find(".inner").removeClass("visible")}),q("body").on("mouseenter",".nectar_team_member_overlay .bio-inner a",function(){a.$closeEl.removeClass("visible")}),q("body").on("mouseleave",".nectar_team_member_overlay .bio-inner a",function(){a.$closeEl.addClass("visible")})):"link-indicator"===this.iconType?(a.$el.off(),a.$el.on("mouseenter",function(){a.$viewEl.addClass("visible"),a.$viewEl.attr("class",function(t,e){return e.replace(/(^|\s)style-\S+/g,"")});var t=a.$el.attr("data-indicator-bg"),e=a.$el.attr("data-indicator-icon");a.$viewEl.find(".color-circle").css("background-color",t);var e='<div class="nectar-cta loaded" data-style="arrow-animation"><span class="link_wrap" style="color: '+e+'"><svg class="next-arrow" width="20px" height="25px" viewBox="0 0 50 80"><polyline stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round" points="0, 0 45, 40 0, 80"></polyline></svg><span class="line" style="background-color: '+e+'"></span></span></div>';a.$viewEl.find("span").html(e)}),a.$el.on("mouseleave",function(){a.$viewEl.removeClass("visible")})):"view-indicator"===this.iconType?(t=a.$el.is("[data-indicator-text-color]")?a.$el.attr("data-indicator-text-color"):"#fff",e=a.$el.attr("data-indicator-color"),n=a.$el.attr("data-indicator-style"),a.$el.find(".nectar-post-grid-item").off(),a.$el.find(".nectar-post-grid-item").on("mouseenter",function(){a.activeViewRAF=!0,a.$viewEl.addClass("visible"),a.$viewEl.find("span").text(q(".nectar-post-grid").attr("data-indicator-text")),a.$viewEl.attr("class",function(t,e){return e.replace(/(^|\s)style-\S+/g,"")}),a.$viewEl.addClass("style-"+n),"see-through"!==n&&(a.$viewEl.find(".color-circle").css("background-color",e),a.$viewEl.find(".inner-layer").css("color",t)),clearTimeout(a.timeout)}),a.$el.find(".nectar-post-grid-item").on("mouseleave",function(){a.timeout=setTimeout(function(){a.$viewEl.removeClass("visible")},100)}),a.$el.find(".nectar-post-grid-item .meta-category a").on("mouseenter",function(){a.$viewEl.removeClass("visible")}),a.$el.find(".nectar-post-grid-item .meta-category a").on("mouseleave",function(){a.$viewEl.addClass("visible")})):"post-grid-images"===this.iconType&&(a.$el.on("mouseenter",function(){q(this).addClass("mouse-over"),a.activeViewRAF=!0}),a.$el.on("mouseleave",function(){q(this).removeClass("mouse-over")}))},yt.prototype.updatePos=function(){this.lastY=Pt(this.lastY,ot.clientY,this.lerpDamp),this.lastX=Pt(this.lastX,ot.clientX,this.lerpDamp)},yt.prototype.parallaxIcon=function(){this.parallaxLastX=Pt(this.parallaxLastX,parseInt(ot.clientX)-parseInt(this.lastX),this.lerpDamp)/1.7,this.parallaxLastY=Pt(this.parallaxLastY,parseInt(ot.clientY)-parseInt(this.lastY),this.lerpDamp)/1.7,0<this.$innerParallaxEl.length&&(this.$innerParallaxEl[0].style.transform="translateX("+Bt(this.parallaxLastX,10,-10)+"px) translateY("+Bt(this.parallaxLastY,10,-10)+"px)")},yt.prototype.dragRAF=function(){this.updatePos(),this.$dragEl[0].style.transform="translateX("+this.lastX+"px) translateY("+this.lastY+"px)",this.parallaxIcon(),requestAnimationFrame(this.dragRAF.bind(this))},yt.prototype.viewRAF=function(){if(this.updatePos(),this.activeViewRAF||"view-indicator"===this.iconType||"link-indicator"===this.iconType){for(var t=0;t<this.$viewEl.length;t++)this.$viewEl[t].style.transform="translateX("+this.lastX+"px) translateY("+this.lastY+"px)";this.parallaxIcon()}requestAnimationFrame(this.viewRAF.bind(this))},yt.prototype.closeRAF=function(){this.updatePos(),this.$closeEl.css({transform:"translateX("+this.lastX+"px) translateY("+this.lastY+"px)"}),this.parallaxIcon(),requestAnimationFrame(this.closeRAF.bind(this))},Y.on("orientationchange",function(){setTimeout(Yt,200)}),L.requestAnimationFrame=L.requestAnimationFrame||L.mozRequestAnimationFrame||L.webkitRequestAnimationFrame||L.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},q(L).on("resize",function(){clearTimeout(lt),lt=setTimeout(function(){q(L).trigger("smartresize")},125)}),q.fn.smartresize=function(t){return t?this.on("smartresize",t):this.trigger("smartresize",["execAsap"])},ct=T,ot.usingMobileBrowser||(ht={hidden:!1},ut=ct.createElement("STYLE"),pt="addEventListener"in ct,gt=function(t,e){pt?ct.addEventListener(t,e):ct.attachEvent("on"+t,e)},ft=function(t){ut.styleSheet?ut.styleSheet.cssText=t:ut.innerHTML=t},ct.getElementsByTagName("HEAD")[0].appendChild(ut),gt("mousedown",function(){0==ht.hidden&&(ft(":focus{outline:0}::-moz-focus-inner{border:0;}"),ht.hidden=!0)}),gt("keydown",function(){ft(""),ht.hidden=!1})),jQuery.fn.setCursorPosition=function(t){return 0==this.length?this:q(this).setSelection(t,t)},jQuery.fn.setSelection=function(t,e){if(0==this.length)return this;var a=this[0],n;return a.createTextRange?((n=a.createTextRange()).collapse(!0),n.moveEnd("character",e),n.moveStart("character",t),n.select()):a.setSelectionRange&&(a.focus(),a.setSelectionRange(t,e)),this},q.extend(jQuery.expr.pseudos,{transparent:function(t,e,a){return"0"===q(t).css("opacity")}}),q.cssHooks.color={get:function(t){var e;return t.currentStyle?e=t.currentStyle.color:L.getComputedStyle&&(e=T.defaultView.getComputedStyle(t,null).getPropertyValue("color")),-1==e.search("rgb")?e:(e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))?"#"+Nt(e[1])+Nt(e[2])+Nt(e[3]):void 0}},q.cssHooks.backgroundColor={get:function(t){var e;return t.currentStyle?e=t.currentStyle.backgroundColor:L.getComputedStyle&&(e=T.defaultView.getComputedStyle(t,null).getPropertyValue("background-color")),-1==e.search("rgb")?e:(e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))?"#"+Nt(e[1])+Nt(e[2])+Nt(e[3]):void 0}},function(o){function i(t,e){var a=o.proxy(this.process,this);this.$body=o("body"),this.$scrollElement=o(o(t).is("body")?L:t),this.options=o.extend({},i.DEFAULTS,e),this.selector=(this.options.target||"")+" ul li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a),this.pageSubmenuHeight=0,this.calcPageSubemnu(),this.refresh(),this.process(),o(L).on("resize",this.calcPageSubemnu.bind(this))}i.VERSION="3.2.0",i.DEFAULTS={offset:10},i.prototype.calcPageSubemnu=function(){(0<o('.page-submenu[data-sticky="true"]').length&&0==o('body[data-hhun="1"]').length||0<o('.page-submenu[data-sticky="true"]').length&&0<o('#header-outer[data-remove-fixed="1"]').length)&&(this.pageSubmenuHeight=o(".page-submenu").height())},i.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,T.documentElement.scrollHeight)},i.prototype.refresh=function(){var t,a="offset",n=0;null!=(t=this.$scrollElement[0])&&t===t.window||(a="position",n=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var e=this;this.$body.find(this.selector).map(function(){var t=o(this),e=t.data("target")||t.attr("href"),t=/^#./.test(e)&&o(e);return t&&t.length&&t.is(":visible")?[[t[a]().top+n,e]]:null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},i.prototype.process=function(){if(dt.preventScroll)return!0;var t,e=ot.scrollTop+this.options.offset+this.pageSubmenuHeight,a=this.getScrollHeight(),n=this.options.offset+a-this.$scrollElement.height()-this.pageSubmenuHeight,i=this.offsets,s=this.targets,r=this.activeTarget;if(this.activeTarget&&e<this.offsets[0]&&0<this.offsets[0])return this.activeTarget=null,void o(this.selector).parentsUntil(this.options.target,".current-menu-item").removeClass("current-menu-item").removeClass("sfHover");if(this.scrollHeight!=a&&this.refresh(),n<=e)return r!=(t=s[s.length-1])&&this.activate(t);if(r&&e<=i[0])return r!=(t=s[0])&&this.activate(t);for(t=i.length;t--;)r!=s[t]&&e>=i[t]&&(!i[t+1]||e<=i[t+1])&&this.activate(s[t])},i.prototype.activate=function(t){this.activeTarget=t,o(this.selector).parentsUntil(this.options.target,".current-menu-item").removeClass("current-menu-item").removeClass("sfHover");var t=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',t=o(t).parents("li").addClass("current-menu-item");(t=t.parent(".dropdown-menu").length?t.closest("li.dropdown").addClass("current-menu-item"):t).trigger("activate.bs.scrollspy")};var t=o.fn.scrollspy;o.fn.scrollspy=function(n){return this.each(function(){var t=o(this),e=t.data("bs.scrollspy"),a;e||t.data("bs.scrollspy",e=new i(this,"object"==typeof n&&n)),"string"==typeof n&&e[n]()})},o.fn.scrollspy.Constructor=i,o.fn.scrollspy.noConflict=function(){return o.fn.scrollspy=t,this}}(jQuery);var gt,Gt,Jt=function(t){t=t.split("+").join(" ");for(var e,a={},n=/[?&]?([^=]+)=([^&]*)/g;e=n.exec(t);)a[decodeURIComponent(e[1])]=decodeURIComponent(e[2]);return a}(T.location.search),gt=jQuery,Gt=gt(L);gt.fn.visible=function(t,e,a){if(!(this.length<1)){var n=1<this.length?this.eq(0):this,i=n.get(0),s=Gt.width(),r=Gt.height(),e=(a=a||"both",!0!==e||i.offsetWidth*i.offsetHeight);if("function"==typeof i.getBoundingClientRect){var o=i.getBoundingClientRect(),l=0<=o.top&&o.top<r,d=0<o.bottom&&o.bottom<=r,c=0<=o.left&&o.left<s,h=0<o.right&&o.right<=s,u=t?l||d:l&&d,o=t?c||h:c&&h;return"both"===a?e&&u&&o:"vertical"===a?e&&u:"horizontal"===a?e&&o:void 0}var l=Gt.scrollTop(),d=l+r,c=Gt.scrollLeft(),h=c+s,u=n.offset(),o=u.top,r=o+n.height(),s=u.left,u=s+n.width(),n=!0===t?r:o,o=!0===t?o:r,r=!0===t?u:s,u=!0===t?s:u;return"both"===a?!!e&&o<=d&&l<=n&&u<=h&&c<=r:"vertical"===a?!!e&&o<=d&&l<=n:"horizontal"===a?!!e&&u<=h&&c<=r:void 0}};var Kt=function(t,e,a,n,i,s){for(var r=0,o=["webkit","moz","ms","o"],l=0;l<o.length&&!L.requestAnimationFrame;++l)L.requestAnimationFrame=L[o[l]+"RequestAnimationFrame"],L.cancelAnimationFrame=L[o[l]+"CancelAnimationFrame"]||L[o[l]+"CancelRequestAnimationFrame"];L.requestAnimationFrame||(L.requestAnimationFrame=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-r)),n=L.setTimeout(function(){t(e+a)},a);return r=e+a,n}),L.cancelAnimationFrame||(L.cancelAnimationFrame=function(t){clearTimeout(t)});var d=this,c;for(c in d.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null},s)s.hasOwnProperty(c)&&(d.options[c]=s[c]);""===d.options.separator&&(d.options.useGrouping=!1),d.options.prefix||(d.options.prefix=""),d.options.suffix||(d.options.suffix=""),d.d="string"==typeof t?T.getElementById(t):t,d.startVal=Number(e),d.endVal=Number(a),d.countDown=d.startVal>d.endVal,d.frameVal=d.startVal,d.decimals=Math.max(0,n||0),d.dec=Math.pow(10,d.decimals),d.duration=1e3*Number(i)||2e3,d.formatNumber=function(t){var t,e,t,a;if(t=t.toFixed(d.decimals),e=(t=(t+="").split("."))[0],t=1<t.length?d.options.decimal+t[1]:"",a=/(\d+)(\d{3})/,d.options.useGrouping)for(;a.test(e);)e=e.replace(a,"$1"+d.options.separator+"$2");return d.options.prefix+e+t+d.options.suffix},d.easeOutExpo=function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e},d.easingFn=d.options.easingFn||d.easeOutExpo,d.formattingFn=d.options.formattingFn||d.formatNumber,d.version=function(){return"1.7.1"},d.printValue=function(t){var t=d.formattingFn(t);"INPUT"===d.d.tagName?this.d.value=t:"text"===d.d.tagName||"tspan"===d.d.tagName?this.d.textContent=t:this.d.innerHTML=t},d.count=function(t){d.startTime||(d.startTime=t);var t=(d.timestamp=t)-d.startTime;d.remaining=d.duration-t,d.options.useEasing?d.countDown?d.frameVal=d.startVal-d.easingFn(t,0,d.startVal-d.endVal,d.duration):d.frameVal=d.easingFn(t,d.startVal,d.endVal-d.startVal,d.duration):d.countDown?d.frameVal=d.startVal-(d.startVal-d.endVal)*(t/d.duration):d.frameVal=d.startVal+(d.endVal-d.startVal)*(t/d.duration),d.countDown?d.frameVal=d.frameVal<d.endVal?d.endVal:d.frameVal:d.frameVal=d.frameVal>d.endVal?d.endVal:d.frameVal,d.frameVal=Math.round(d.frameVal*d.dec)/d.dec,d.printValue(d.frameVal),t<d.duration?d.rAF=requestAnimationFrame(d.count):d.callback&&d.callback()},d.start=function(t){return d.callback=t,d.rAF=requestAnimationFrame(d.count),!1},d.pauseResume=function(){d.paused?(d.paused=!1,delete d.startTime,d.duration=d.remaining,d.startVal=d.frameVal,requestAnimationFrame(d.count)):(d.paused=!0,cancelAnimationFrame(d.rAF))},d.reset=function(){d.paused=!1,delete d.startTime,d.startVal=e,cancelAnimationFrame(d.rAF),d.printValue(d.startVal)},d.update=function(t){cancelAnimationFrame(d.rAF),d.paused=!1,delete d.startTime,d.startVal=d.frameVal,d.endVal=Number(t),d.countDown=d.startVal>d.endVal,d.rAF=requestAnimationFrame(d.count)},d.printValue(d.startVal)},te=function(t,e,a,n){return a*((t=t/n-1)*t*t+1)+e};function ee(t,e){var a,n;0<t.length&&(a=T.head||T.getElementsByTagName("head")[0],(n=T.createElement("style")).type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(T.createTextNode(t)),q(n).attr("id",e),q("head").find("#"+e).remove(),a.appendChild(n))}function ae(){setTimeout(function(){0<q('body[data-ls="magnific"]').length||0<q('body[data-ls="pretty_photo"]').length?(q("a.pp").removeClass("pp").addClass("magnific-popup"),q("a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])").removeAttr("rel").addClass("magnific-popup"),q(".wpb_gallery .wpb_gallery_slidesnectarslider_style").each(function(){q(this).find(".swiper-slide a:not(.ext-url-link)").addClass("pretty_photo")}),q('.wpb_gallery_slides.wpb_flexslider:not([data-onclick="custom_link"])').each(function(){q(this).find(".slides > li > a").addClass("pretty_photo")}),q(".wpb_gallery_slidesflickity_style, .wpb_gallery_slidesflickity_static_height_style").each(function(){q(this).find(".cell > a:not(.ext-url-link)").addClass("pretty_photo")}),q(".portfolio-items, .wpb_gallery .swiper-slide, .wpb_gallery_slidesflickity_style .cell, .wpb_gallery_slidesflickity_static_height_style .cell, .wpb_gallery_slides.wpb_flexslider ul > li, .wpb_gallery .parallax-grid-item, .nectar-post-grid-item").each(function(){0<q(this).find(".pretty_photo").length?q(this).find(".pretty_photo").removeClass("pretty_photo").addClass("gallery").addClass("magnific"):0<q(this).find('a[rel*="prettyPhoto["]').length&&q(this).find('a[rel*="prettyPhoto["]').removeAttr("rel").addClass("gallery").addClass("magnific")}),q("a[data-rel='prettyPhoto[product-gallery]']").each(function(){q(this).removeAttr("data-rel").addClass("magnific").addClass("gallery")}),j.hasClass("nectar-auto-lightbox")&&(q(".gallery").each(function(){0==q(this).find('.gallery-icon a[rel^="prettyPhoto"]').length&&q(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]').addClass("magnific").addClass("gallery").removeClass("pretty_photo")}),q(".main-content img").each(function(){q(this).parent().is("[href]")&&!q(this).parent().is(".magnific-popup")&&0==q(this).parents(".tiled-gallery").length&&0==q(this).parents(".product-image").length&&0==q(this).parents(".iosSlider.product-slider").length&&q(this).parent().attr("href").match(/\.(jpg|png|gif)\b/)&&q(this).parent().addClass("magnific-popup").addClass("image-link")})),q("a.magnific-popup:not(.gallery):not(.nectar_video_lightbox):not(.nectar_video_lightbox_trigger)").magnificPopup({type:"image",callbacks:{imageLoadComplete:function(){var t=this;setTimeout(function(){t.wrap.addClass("mfp-image-loaded")},10)},beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim")},open:function(){q.magnificPopup.instance.next=function(){var t=this;this.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){q.magnificPopup.proto.next.call(t)},100)},q.magnificPopup.instance.prev=function(){var t=this;this.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){q.magnificPopup.proto.prev.call(t)},100)}}},fixedContentPos:!1,mainClass:"mfp-zoom-in",removalDelay:400}),q("a.magnific-popup.nectar_video_lightbox, .nectar_video_lightbox_trigger, .magnific_nectar_video_lightbox a.link_text, .swiper-slide a[href*=youtube], .swiper-slide a[href*=vimeo], .nectar-video-box a.full-link.magnific-popup").magnificPopup({type:"iframe",fixedContentPos:!1,mainClass:"mfp-zoom-in",removalDelay:400}),q("a.magnific.gallery").each(function(){var t=0<q(this).closest(".wpb_column").length?q(this).closest(".wpb_column"):q(this).parents(".row");0<t.length&&!t.hasClass("lightbox-col")&&(t.magnificPopup({type:"image",delegate:"a.magnific",mainClass:"mfp-zoom-in",fixedContentPos:!1,callbacks:{elementParse:function(t){q(t.el).is("[href]")&&-1!=q(t.el).attr("href").indexOf("iframe=true")||q(t.el).is("[href]")&&-1!=q(t.el).attr("href").indexOf("https://www.youtube.com/watch")?t.type="iframe":q(t.el).is("[href]")&&-1!=q(t.el).attr("href").indexOf("video-popup-")?t.type="inline":t.type="image"},imageLoadComplete:function(){var t=this;setTimeout(function(){t.wrap.addClass("mfp-image-loaded")},10)},beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim")},open:function(){var t;0<q(this.content).find(".mejs-video video").length&&q().mediaelementplayer&&(q(this.content).find(".mejs-video video")[0].player.remove(),t=this,setTimeout(function(){q(t.content).find("video").mediaelementplayer(),q(t.content).find(".mejs-video video")[0].player.play()},50)),q.magnificPopup.instance.next=function(){var t=this;this.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){q.magnificPopup.proto.next.call(t),0<q(t.content).find(".mejs-video video").length&&q(t.content).find(".mejs-video video")[0].play()},100)},q.magnificPopup.instance.prev=function(){var t=this;this.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){q.magnificPopup.proto.prev.call(t),0<q(t.content).find(".mejs-video video").length&&q(t.content).find(".mejs-video video")[0].play()},100)}},close:function(){0<q(this.content).find(".mejs-video video").length&&q(this.content).find(".mejs-video video")[0].load()}},removalDelay:400,gallery:{enabled:!0}}),t.addClass("lightbox-col"))})):0<q('body[data-ls="fancybox"]').length&&function(){q("a.pp").removeClass("pp").attr("data-fancybox",""),q("a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])").removeAttr("rel").attr("data-fancybox","");var t=Dt();q(".wpb_gallery .wpb_gallery_slidesnectarslider_style").each(function(){t=Dt(),q(this).find(".swiper-slide a:not(.ext-url-link)").attr("data-fancybox","group_"+t)}),q('.wpb_gallery_slides.wpb_flexslider:not([data-onclick="custom_link"])').each(function(){t=Dt(),q(this).find(".slides > li > a").attr("data-fancybox","group_"+t)}),q(".wpb_gallery_slidesflickity_style, .wpb_gallery_slidesflickity_static_height_style").each(function(){t=Dt(),q(this).find(".cell > a:not(.ext-url-link)").attr("data-fancybox","group_"+t)}),q(".portfolio-items, .wpb_gallery_slidesparallax_image_grid, .nectar-post-grid-item").each(function(){t=Dt(),0<q(this).find(".pretty_photo").length?q(this).find(".pretty_photo").removeClass("pretty_photo").attr("data-fancybox","group_"+t):0<q(this).find('a[rel*="prettyPhoto["]').length&&q(this).find('a[rel*="prettyPhoto["]').removeAttr("rel").attr("data-fancybox","group_"+t)}),j.hasClass("nectar-auto-lightbox")&&(q(".gallery").each(function(){var t;0==q(this).find('.gallery-icon a[rel^="prettyPhoto"]').length&&(t=Dt(),q(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]').attr("data-fancybox","group_"+t).removeClass("pretty_photo"))}),q(".main-content img").each(function(){q(this).parent().is("[href]")&&!q(this).parent().is(".magnific-popup")&&0==q(this).parents(".tiled-gallery").length&&0==q(this).parents(".product-image").length&&0==q(this).parents(".woocommerce-product-gallery").length&&0==q(this).parents(".wpb_gallery_slides.wpb_flexslider").length&&0==q(this).parents(".iosSlider.product-slider").length&&q(this).parent().attr("href").match(/\.(jpg|png|gif)\b/)&&q(this).parent().attr("data-fancybox","")}));var e=(q("body.admin-bar").length,[60,100]);ot.winW<1e3&&(e=[0,0]),q("[data-fancybox]").fancybox({animationEffect:"zoom-in-out",animationDuration:350,buttons:["fullScreen","zoom","close"],margin:e,backFocus:!1,loop:!0,caption:function(){return q(this).attr("title")},hash:!1,beforeLoad:function(t){"string"!=typeof t.current.src&&q.fancybox.close(!0)},mobile:{margin:0}})}()},100)}function ne(){q(at+" .wpb_animate_when_almost_visible").each(function(){var t=q(this),e,a=new Waypoint({element:t[0],handler:function(){0<t.parents(".wpb_tab").length&&"hidden"==t.parents(".wpb_tab").css("visibility")||t.hasClass("animated")?a.destroy():(t.addClass("animated"),t.addClass("wpb_start_animation"),a.destroy(),t.is(".nectar-button")&&0<q('body[data-button-style*="rounded_shadow"]').length&&setTimeout(function(){t.removeClass("wpb_start_animation")},1100))},offset:1==nt?"200%":"90%"})})}function ie(t,e){this.$el=t,this.duration=e,this.interval="",this.words=[],this.state={activeIndex:0,sequenceStarted:0,visible:!1},this.setup()}function se(){q(at+".nectar-milestone").each(function(){var t=1==nt?"250%":"98%";ot.usingMobileBrowser&&"98%"==t&&(t="110%");var n=q(this),i=new Waypoint({element:n[0],handler:function(){var t,e,a;0<n.parents(".wpb_tab").length&&"hidden"==n.parents(".wpb_tab").css("visibility")||n.hasClass("animated-in")||(t=parseInt(n.find(".number span:not(.symbol)").text().replace(/,/g,"")),n.hasClass("motion_blur")?n.find("span").each(function(t){var e=q(this);setTimeout(function(){e.addClass("in-sight")},200*t)}):(e={easingFn:te},a=n.find(".number span:not(.symbol)")[0],new Kt(a,0,t,0,2.2,e).start()),n.addClass("animated-in")),i.destroy()},offset:t})})}function re(t){var e,a,n;(e=t.parent()).length?(a=e.position().left,n=e.width()):a=n=0,t.parent().parent().find(".magic-line").css("transform","translateX("+a+"px) scaleX("+n+")")}function oe(){j.on("click",".tabbed > ul li:not(.cta-button) a",function(t){var e,t,a,n,i,s;return a=q(this),n=a.parents("li").index()+1,i=0<q("body.vc_editor").length?"> .wpb_tab ":"",a.hasClass("active-tab")||a.hasClass("loading")||(a.parents("ul").find("a").removeClass("active-tab"),a.addClass("active-tab"),a.parents(".tabbed").find("> div:not(.clear)"+i).css({visibility:"hidden",position:"absolute",opacity:"0",left:"-9999px",display:"none"}).removeClass("visible-tab"),0<q("body.vc_editor").length?(s=a.parent().is("[data-m-id]")?a.parent().attr("data-m-id"):"",a.parents(".tabbed").find('> div[data-model-id="'+s+'"]'+i).css({visibility:"visible",position:"relative",left:"0",display:"block"}).stop().transition({opacity:1},400).addClass("visible-tab"),j.is('[data-flex-cols="true"]')||oi()):a.parents(".tabbed").find("> div:nth-of-type("+n+")"+i).css({visibility:"visible",position:"relative",left:"0",display:"block"}).stop().transition({opacity:1},400).addClass("visible-tab"),(0<a.parents(".tabbed").find("> div:nth-of-type("+n+") .iframe-embed").length||0<a.parents(".tabbed").find("> div:nth-of-type("+n+") .portfolio-items").length)&&setTimeout(function(){Y.trigger("resize")},10)),0!=et&&(0<(i=a.parents(".tabbed").find("> div:nth-of-type("+n+")"+i)).find(".nectar-progress-bar").length&&Re(),(0<i.find('.divider-small-border [data-animate="yes"]').length||0<i.find('.divider-border [data-animate="yes"]').length)&&Ne(),(0<i.find("img.img-with-animation").length||0<i.find(".col.has-animation").length||0<i.find(".nectar_cascading_images").length||0<i.find(".wpb_column.has-animation").length)&&(Ye(),je()),(0<i.find(".parallax-layer").length||0<i.parents(".nectar-parallax-enabled").length)&&He(),Ee(),0<i.find(".nectar-milestone").length&&se(),0<i.find('.nectar_image_with_hotspots[data-animation="true"]').length&&(Ze(),setTimeout(function(){Y.trigger("resize")},100)),0<i.find(".nectar-fancy-ul").length&&ye(),0<i.find(".nectar-split-heading").length&&Pe(),0<i.find('.wpb_column[data-border-animation="true"]').length&&Ve(),0<i.find(".wpb_animate_when_almost_visible").length&&ne(),0<i.find(".nectar-animated-title").length&&aa(),0<i.find(".nectar-highlighted-text").length&&na(),0<i.find(".nectar_food_menu_item").length&&Xe(),0<i.find('.nectar-post-grid:not([data-animation="none"])').length&&ea(),0<a.parents(".wpb_row").length&&((0<i.find(".vc_pie_chart").length||0<i.find(".wp-video-shortcode").length||0<i.find(".post-area.masonry .posts-container").length||0<i.find(".twentytwenty-container").length||0<a.parents('#nectar_fullscreen_rows[data-content-overflow="scrollbar"]').length||0<a.parents(".tabbed").find("> div:nth-of-type("+n+")").find(".wpb_gallery").length||0<a.parents(".tabbed").find("> div:nth-of-type("+n+")").find(".swiper-container").length||a.parents(".wpb_row").next().hasClass("parallax_section"))&&Y.trigger("resize"),0<i.find(".nectar-flickity").length&&"undefined"!=typeof Flickity&&a.parents(".tabbed").find("> div:nth-of-type("+n+")").find(".nectar-flickity").each(function(){Flickity.data(q(this)[0]).resize()}),0<i.find(".nectar-woo-flickity").length&&"undefined"!=typeof Flickity&&(Flickity.data(a.parents(".tabbed").find("> div:nth-of-type("+n+")").find(".nectar-woo-flickity > ul")[0]).resize(),q(L).trigger("nectar-product-filters-layout"))),i.find(".svg-icon-holder").each(function(e){var a=q(this);setTimeout(function(){var t=0;a.is("[data-animation-delay]")&&0<a.attr("data-animation-delay").length&&"false"!=a.attr("data-animation")&&(t=a.attr("data-animation-delay")),clearTimeout(Z[e]),"false"==a.attr("data-animation")?(a.css("opacity","1"),E[a.find("svg").attr("id").slice(-1)].finish()):(E[a.find("svg").attr("id").slice(-1)].reset(),Z[e]=setTimeout(function(){E[a.find("svg").attr("id").slice(-1)].play()},t))},150)})),a.parents(".tabbed").find(".wpb_row").each(function(){var t;void 0!==q(this).find('[class*="vc_col-"]').first().offset()&&(t=q(this).find('[class*="vc_col-"]').first().offset().left,q(this).find('[class*="vc_col-"]').each(function(){q(this).removeClass("no-left-margin"),q(this).offset().left<t+15?q(this).addClass("no-left-margin"):q(this).removeClass("no-left-margin")}))}),et++,0<a.parent().parent().find(".magic-line").length&&re(a),q(L).trigger("nectar-tab-changed"),void 0!==t.originalEvent&&ot.winW<1e3&&0==rt.$usingFullScreenRows&&350<(e=q(this).closest(".tabbed").find("> ul")).height()&&(t=e.offset().top+e.height()-ot.adminBarHeight,Qt(t=0<q('#header-outer[data-mobile-fixed="1"]').length?e.offset().top+e.height()-u.outerHeight()-ot.adminBarHeight:t,700,"easeInOutQuint")),!1}),q('a[class*="nectar-tab-trigger"]').on("click",function(t){if(!q(this).is('[href*="#"]')||q(this).attr("href").length<1)return!0;var e,e=(e=(e=q(this).attr("href")).substr(1)).replace(/\s+/g,"-").replace(/</g,"&lt;").replace(/"/g,"&quot;").toLowerCase();q(".wpb_tabs_nav").each(function(){q(this).find("li").each(function(){var t=q(this).find("a").clone();t.find("svg").remove(),(t=0<(t=(t=t.text()).replace(/\s+/g,"-").toLowerCase()).length&&"-"===t.substring(0,1)?t.substring(1):t)==e&&q(this).find("a").trigger("click")})}),t.preventDefault()}),q(".tabbed").each(function(){var t;q(this).find(".wpb_tab").each(function(t){var e;q(this).is("[data-tab-icon]")&&0<q(this).attr("data-tab-icon").length&&0==q(this).find(".im-icon-wrap.tab-icon").length&&(q(this).parents(".tabbed").addClass("using-icons"),q(this).parents(".tabbed").find(".wpb_tabs_nav li:nth-child("+(t+1)+") > a").prepend('<i class="'+q(this).attr("data-tab-icon")+'"></i>')),0<q(this).find(".im-icon-wrap.tab-icon").length&&(e=q(this).find(".im-icon-wrap.tab-icon").detach(),q(this).parents(".tabbed").find(".wpb_tabs_nav li:nth-child("+(t+1)+") > a").prepend(e))}),q(this).find("> ul li:first-child a").trigger("click"),t=q(this),setTimeout(function(){t.is('[data-style="minimal_alt"]')&&(t.find("> ul").append('<li class="magic-line" />'),re(t.find("> ul > li:first-child > a")))},100)}),0<q('.tabbed[data-style="minimal_alt"]').length&&Y.on("smartresize",function(){q('.tabbed[data-style="minimal_alt"]').each(function(){0<q(this).find("a.active-tab").length&&re(q(this).find("a.active-tab"))})}),void 0!==Jt.tab&&q(".wpb_tabs_nav").each(function(){q(this).find("li").each(function(){var t=q(this).find("a").clone(),e=Jt.tab,a=q(this);t.find("svg").remove(),(t=0<(t=(t=t.text()).replace(/\s+/g,"-").toLowerCase()).length&&"-"===t.substring(0,1)?t.substring(1):t)==(e=e.replace(/\s+/g,"-").replace(/</g,"&lt;").replace(/"/g,"&quot;").toLowerCase())&&(q(this).find("a").trigger("click"),setTimeout(function(){a.find("a").trigger("click")},501))})}),q(".nectar-scrolling-tabs").each(function(t){ot.usingFrontEndEditor||(J[t]=new le(q(this)))});var r=!1;j.on("click",".scrolling-tab-nav-current-item",function(){q(this).toggleClass("open"),q(this).siblings(".wpb_tabs_nav").toggle(),Ee()}),j.on("click",".nectar-sticky-tabs .wpb_tabs_nav li",function(t){var e=q(this).parents(".wpb_tabs_nav"),a=q(this).parents(".scrolling-tab-nav").find(".scrolling-tab-nav-current-item"),n=q(this).find(".tab-nav-heading").clone();a.html(n),void 0!==t.originalEvent&&(q(this).parents(".scrolling-tab-nav").find(".scrolling-tab-nav-current-item").toggleClass("open"),e.toggle())}),j.on("click",".nectar-sticky-tabs .wpb_tabs_nav a",function(t){var e=q(this),a=e.parents("li").index()+1,n=0<q("body.vc_editor").length?"> .wpb_tab ":"",i=e.parents(".nectar-sticky-tabs"),s=i.hasClass("content_animation_fade")?200:600;(e.parents("li").hasClass("active-tab")||r)&&i.hasClass("loaded")||(r=!0,i.find(".wpb_tabs_nav li").removeClass("active-tab"),e.parents("li").addClass("active-tab"),i.find(".scrolling-tab-content  > div").removeClass("previously-active-tab"),i.find(".scrolling-tab-content > div.active-tab").addClass("previously-active-tab").removeClass("active-tab"),i.find(".scrolling-tab-content > div:nth-of-type("+a+")"+n).addClass("active-tab"),q(L).trigger("nectar-tab-changed"),setTimeout(function(){r=!1},s)),t.preventDefault()}),q(".nectar-sticky-tabs .wpb_tabs_nav > li:first-child").each(function(){q(this).find("a").first().trigger("click")}),r=!1,q(".nectar-sticky-tabs").addClass("loaded"),q(L).on("nectar-tab-changed",ia)}function le(t){this.$el=t,this.$tabContent=t.find(".scrolling-tab-content"),this.$lineEl=t.find(".scrolling-tab-nav .line"),this.observer=null,this.linkFunc=this.$el.hasClass("navigation_func_active_link_only")?"single_link":"default",this.domSetup(),this.highlightObserve(),this.events()}function de(){void 0!==Jt.toggle&&q(".toggles").each(function(){q(this).find(".toggle").each(function(){var t=q(this).find("h3 a").clone(),e=Jt.toggle;q(t).find("i").remove(),(t=(t=t.text()).replace(/\s+/g,"-").toLowerCase())==(e=e.replace(/\s+/g,"-").replace(/</g,"&lt;").replace(/"/g,"&quot;").toLowerCase())&&q(this).find("h3 a").trigger("click")})})}function ce(){q(".toggles").each(function(){var t=q(this).find(".toggle.open");0<t.length&&t.each(function(){var t=q(this).find("> div")[0];t.style.maxHeight=t.scrollHeight+"px"})})}function he(){setTimeout(function(){q('.toggles.accordion:not([data-starting="closed"])').each(function(){var t;0==q(this).find('.toggle[data-inner-wrap="true"]').length?q(this).find("> .toggle").first().addClass("open").find("> div").show():ot.usingFrontEndEditor||((t=q(this).find("> .toggle").first()).addClass("open"),t.find("> div")[0].style.maxHeight=t.find("> div")[0].scrollHeight+"px"),q(this).find("> .toggle").first().find("a:not(.nectar-button) i").attr("class","fa fa-minus-circle")}),setTimeout(de,300)},60),0<q('.toggle[data-inner-wrap="true"]').length&&Y.on("smartresize",ce)}function ue(t){this.$el=t,this.$innerEl=this.$el.find(" > .n-sticky > .vc_column-inner"),0!=this.$innerEl.length&&(this.topOffset=0,this.resizeEvent(),Y.on("resize",this.resizeEvent.bind(this)))}function pe(t,e){(t=String(t).replace(/[^0-9a-f]/gi,"")).length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),e=e||0;for(var a,n,i="#",n=0;n<3;n++)a=parseInt(t.substr(2*n,2),16),i+=("00"+(a=Math.round(Math.min(Math.max(0,a+a*e),255)).toString(16))).substr(a.length);return i}function ge(){q(".nectar-3d-transparent-button").each(function(){var t,e,a,n,a,i,n;"visible"==q(this).css("visibility")&&(e=0,a=1.7,"extra_jumbo"==(t=q(this)).attr("data-size")&&(a=ot.winW<1e3&&690<ot.winW?(e=64,n=34,t.find(".back-3d rect").attr("stroke-width","12"),1.7):ot.winW<=690?(e=46,n=16,t.find(".back-3d rect").attr("stroke-width","10"),1.7):(e=100,n=64,t.find(".back-3d rect").attr("stroke-width","20"),1.6),t.find("svg text").attr("font-size",n),i=q(this).find(".back-3d .button-text")[0].getBoundingClientRect().width,t.css({width:i+1.5*e+"px",height:(n=1.5*n)+e+"px"}),t.find("> a").css({height:n+e+"px"}),t.find(".back-3d svg, .front-3d svg").css({width:i+1.5*e+"px",height:n+e+"px"}).attr("viewBox","0 0 "+(i+1.5*e)+" "+(n+e)),t.find("svg text").attr("transform","matrix(1 0 0 1 "+(i+1.6*e)/2+" "+(n+e)/a+")"),t.find(".front-3d ").css("transform-origin","50% 50% -"+(n+e)/2+"px"),t.find(".back-3d").css("transform-origin","50% 50% -"+(n+e)/2+"px")))})}function fe(){var n,i,o;q('.nectar-cta[data-style="text-reveal-wave"], .menu-item-hover-text-reveal-wave').each(function(){q(this).find(".char").each(function(t){q(this).css("animation-delay",.015*t+"s")});var t=q(this).is('[data-using-bg="true"]')?".link_wrap":".link_text";q(this).is(".menu-item-hover-text-reveal-wave")&&(t="a"),q(this).find(t).on("mouseenter",function(){var t;999<ot.winW&&(q(this).removeClass("hover"),t=q(this),setTimeout(function(){t.addClass("hover")},20))})}),q(".nectar-link-underline-effect a").on("mouseenter",function(){q(this).addClass("accessed")}),q(".nectar-button.see-through[data-color-override], .nectar-button.see-through-2[data-color-override], .nectar-button.see-through-3[data-color-override]").each(function(){var t,e,a=0<q('body.material[data-button-style^="rounded"]').length;if(q(this).css("visibility","visible"),q(this).hasClass("see-through-3")&&"false"==q(this).attr("data-color-override"))return!0;t="false"!=q(this).attr("data-color-override")?q(this).attr("data-color-override"):0<q(this).parents(".dark").length?"#000000":"#ffffff",q(this).hasClass("see-through-3")||q(this).css("color",t),q(this).find("i").css("color",t);var n=parseInt(t.substring(1),16),i=q(this).has("[data-hover-color-override]")?q(this).attr("data-hover-color-override"):"no-override",s=q(this).has("[data-hover-text-color-override]")?q(this).attr("data-hover-text-color-override"):"#fff",r=(16711680&n)>>16,o=(65280&n)>>8,l=(255&n)>>0,d=q(this).hasClass("see-through-3")?"1":"0.75";q(this).css("border-color","rgba("+r+","+o+","+l+","+d+")"),a&&q(this).find("i").css({"background-color":"rgba("+r+","+o+","+l+",1)","box-shadow":"0px 8px 15px rgba("+r+","+o+","+l+",0.24)"}),q(this).hasClass("see-through")?(e=q(this),q(this).on("mouseenter touchstart",function(){e.css("border-color","rgba("+r+","+o+","+l+",1)")}),q(this).on("mouseleave touchtouchend",function(){e.css("border-color","rgba("+r+","+o+","+l+",1)"),d=q(this).hasClass("see-through-3")?"1":"0.75",e.css("border-color","rgba("+r+","+o+","+l+","+d+")")})):(q(this).find("i").css("color",s),"no-override"!=i?(e=q(this),q(this).on("mouseenter touchstart",function(){e.css({"border-color":i,"background-color":i,color:s}),a&&e.find("i").css({"background-color":"","box-shadow":""})}),q(this).on("mouseleave touchtouchend",function(){d=q(this).hasClass("see-through-3")?"1":"0.75",a&&e.find("i").css({"background-color":"rgba("+r+","+o+","+l+",1)","box-shadow":"0px 8px 15px rgba("+r+","+o+","+l+",0.24)"}),e.hasClass("see-through-3")?e.css({"border-color":"rgba("+r+","+o+","+l+","+d+")","background-color":"transparent"}):e.css({"border-color":"rgba("+r+","+o+","+l+","+d+")","background-color":"transparent",color:t})})):(e=q(this),q(this).on("mouseenter touchstart",function(){e.css({"border-color":i,color:s})}),q(this).on("mouseleave touchtouchend",function(){d=e.hasClass("see-through-3")?"1":"0.75",e.css({"border-color":"rgba("+r+","+o+","+l+","+d+")",color:s})})))}),q(".nectar-button:not(.see-through):not(.see-through-2):not(.see-through-3)[data-color-override]").each(function(){var t;q(this).css("visibility","visible"),"false"!=q(this).attr("data-color-override")&&(t=q(this).attr("data-color-override"),q(this).removeClass("accent-color").removeClass("extra-color-1").removeClass("extra-color-2").removeClass("extra-color-3").css("background-color",t))}),(0<q(".swiper-slide .solid_color_2").length||0<q(".tilt-button-inner").length)&&(i="",q(".swiper-slide .solid_color_2 a").each(function(t){q(this).addClass("instance-"+t),n="false"!=q(this).attr("data-color-override")?q(this).attr("data-color-override"):0<q(this).parents(".dark").length?"#000000":"#ffffff",q(this).css("color",n),q(this).find("i").css("color",n);var e=q(this).css("background-color"),a=pe(e,.13),e=pe(e,-.15);i+=".swiper-slide .solid_color_2 a.instance-"+t+":after { background-color: "+a+";  } .swiper-slide .solid_color_2 a.instance-"+t+":before { background-color: "+e+"; } "}),q(".tilt-button-wrap a").each(function(t){q(this).addClass("instance-"+t);var e,a=q(this).css("background-color");"false"!=q(this).attr("data-color-override")&&(e=q(this).attr("data-color-override"),q(this).css("background-color",e),a=e);var e=pe(a,.13),a=pe(a,-.15);i+=".tilt-button-wrap a.instance-"+t+":after { background-color: "+e+";  } .tilt-button-wrap a.instance-"+t+":before { background-color: "+a+"; } "}),ee(i,"tilt-button")),0<q(".nectar-3d-transparent-button").length&&(o="",q(".nectar-3d-transparent-button").each(function(t){var e,a=q(this),n=a.attr("data-size"),i=0,s=1.5,r=1.65;"large"==n?(i=46,e=16,s=1.5,r=1.7):"medium"==n?(i=30,e=16):"small"==n?(i=20,e=12):"jumbo"==n?(i=54,e=24,s=1.5,r=1.68):"extra_jumbo"==n&&(i=100,e=64,r=s=1.6),a.find("svg text").attr("font-size",e);var n=q(this).find(".back-3d .button-text")[0].getBoundingClientRect().width,e=1.5*e;a.css({width:n+1.5*i+"px",height:e+i+"px"}),a.find("> a").css({height:e+i+"px"}),a.find(".back-3d svg, .front-3d svg").css({width:n+1.5*i+"px",height:e+i+"px"}).attr("viewBox","0 0 "+(n+1.5*i)+" "+(e+i)),a.find("svg text").attr("transform","matrix(1 0 0 1 "+(n+i*s)/2+" "+(e+i)/r+")"),a.find(".front-3d, .back-3d").css("transform-origin","50% 50% -"+(e+i)/2+"px"),q(this).find(".front-3d svg > rect").attr("id","masked-rect-id-"+t),q(this).find(".front-3d defs mask").attr("id","button-text-mask-"+t),a.css("visibility","visible"),o+="#masked-rect-id-"+t+" { mask: url(#button-text-mask-"+t+"); -webkit-mask: url(#button-text-mask-"+t+")} "}),ge(),Y.on("smartresize",ge),ee(o,"nectar-td-button")),setTimeout(function(){q('.nectar-button[class*="color-gradient"] .start').removeClass("loading")},150),(-1<navigator.userAgent.toLowerCase().indexOf("firefox")||-1<navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident\/7\./))&&q('.nectar-button[class*="color-gradient"] .start').addClass("no-text-grad")}function me(){q(".icon-3x").each(function(){q(this).closest(".col").on("mouseenter",function(){q(this).find(".icon-3x").addClass("hovered")}),q(this).closest(".col").on("mouseleave",function(){q(this).find(".icon-3x").removeClass("hovered")})}),(-1<navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident\/7\./))&&q('[class^="icon-"][class*="color-gradient"], .nectar_icon_wrap[data-color*="extra-color-gradient"] .nectar_icon, .nectar-gradient-text').addClass("no-grad")}function ve(){var t=0<q('body[data-header-format="left-header"]').length&&1e3<Y.width()?275:0;q(".nectar_team_member_overlay").css({width:Y.width()-t,left:t})}function be(){var n="";q(".wpb_column").each(function(t){q(this).removeClass(function(t,e){return(e.match(/(^|\s)instance-\S+/g)||[]).join(" ")}),"true"!=q(this).attr("data-has-bg-color")&&!q(this).is('[data-hover-bg^="#"]')||q(this).addClass("instance-"+t);var e=0<q(this).find("> .vc_column-inner > .column-bg-overlay-wrap").length||0<q(this).find("> .vc_column-inner > .column-bg-overlay").length?" > .vc_column-inner ":"",a=0<q(this).find(e+" > .column-bg-overlay-wrap").length?"> .column-bg-overlay-wrap ":"";"true"==q(this).attr("data-has-bg-color")&&(n+=".wpb_column.instance-"+t+e+a+" > .column-bg-overlay { background-color:"+q(this).attr("data-bg-color")+";  opacity: "+q(this).attr("data-bg-opacity")+"; }"),q(this).is('[data-hover-bg^="#"]')&&(n+=".wpb_column.instance-"+t+":hover "+e+a+" > .column-bg-overlay { background-color: "+q(this).attr("data-hover-bg")+"!important; opacity: "+q(this).attr("data-hover-bg-opacity")+"!important; }")}),ee(n,"column-bg-colors")}function we(){var r,o;0<q(".morphing-outline").length&&(r="",o=0<q("body.vc_editor").length?"":">",q(".morphing-outline").each(function(t){q(this).removeClass(function(t,e){return(e.match(/(^|\s)instance-\S+/g)||[]).join(" ")}),q(this).addClass("instance-"+t).css({visibility:"visible"});var e=q(this).find(".inner").width(),a=q(this).find(".inner").height(),n=parseInt(q(this).attr("data-border-thickness")),i=0<q('body[data-button-style*="rounded"]').length?":hover":"",s=0<q('body[data-button-style*="rounded"]').length?"":":hover";r+="body .morphing-outline.instance-"+t+" .inner > * { color: "+q(this).attr("data-starting-color")+"; } ",r+="body .morphing-outline.instance-"+t+" .inner:after  { border-width:"+q(this).attr("data-border-thickness")+"px ; border-color: "+q(this).attr("data-starting-color")+"; } ",r+="body .wpb_column:hover > .wpb_wrapper "+o+" .morphing-outline.instance-"+t+" .inner > *, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper "+o+" .morphing-outline.instance-"+t+" .inner > * { color: "+q(this).attr("data-hover-color")+"; } ",r+="body .wpb_column:hover > .wpb_wrapper "+o+" .morphing-outline.instance-"+t+" .inner:after, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper "+o+" .morphing-outline.instance-"+t+" .inner:after  { border-color: "+q(this).attr("data-hover-color")+"; } ",r+="body .wpb_column"+s+" > .wpb_wrapper "+o+" .morphing-outline.instance-"+t+" .inner:after, body .wpb_column"+s+" > .vc_column-inner > .wpb_wrapper "+o+" .morphing-outline.instance-"+t+" .inner:after { padding: "+((e+100+2*n-a)/2-n)+"px 50px}",r+=".morphing-outline.instance-"+t+" { padding: "+(30+(e+80+2*n-a)/2-n)+"px 50px}",r+="body .wpb_column"+s+" > .wpb_wrapper "+o+" .morphing-outline.instance-"+t+" .inner:after, body .wpb_column"+s+" > .vc_column-inner > .wpb_wrapper "+o+" .morphing-outline.instance-"+t+" .inner:after { top: -"+parseInt((e+100+2*n-a)/2-n+n)+"px }",r+="body .wpb_column > .wpb_wrapper "+o+" .morphing-outline.instance-"+t+" .inner:after, body .wpb_column > .vc_column-inner > .wpb_wrapper "+o+" .morphing-outline.instance-"+t+" .inner:after { left: -"+parseInt(50+n)+"px }",r+="body .wpb_column"+i+" > .wpb_wrapper "+o+" .morphing-outline.instance-"+t+" .inner:after, body .wpb_column"+i+" > .vc_column-inner > .wpb_wrapper "+o+" .morphing-outline.instance-"+t+" .inner:after { padding: 50px 50px}",r+="body .wpb_column"+i+" > .wpb_wrapper "+o+" .morphing-outline.instance-"+t+" .inner:after, body .wpb_column"+i+" > .vc_column-inner > .wpb_wrapper "+o+" .morphing-outline.instance-"+t+" .inner:after { top: -"+parseInt(50+n)+"px }"}),ee(r,"morphing-outlines"))}function ye(){q(at+".nectar-fancy-ul").each(function(){var t=q(this).attr("data-animation"),e=0,a,n;q(this).is("[data-animation-delay]")&&0<q(this).attr("data-animation-delay").length&&"false"!=q(this).attr("data-animation")&&(e=q(this).attr("data-animation-delay")),"true"==t&&(a=q(this),n=new Waypoint({element:a[0],handler:function(){0<a.parents(".wpb_tab").length&&"hidden"==a.parents(".wpb_tab").css("visibility")||a.hasClass("animated-in")||(setTimeout(function(){a.find("li").each(function(t){q(this).delay(220*t).transition({opacity:"1",left:"0"},220,"easeOutCubic")})},e),a.addClass("animated-in")),n.destroy()},offset:"bottom-in-view"}))})}function _e(){q('.nectar-fancy-ul:not([data-list-icon="dot"]):not([data-list-icon="none"])').each(function(){var t=q(this).attr("data-list-icon"),e=q(this).attr("data-color");q(this).find("li").each(function(){q(this).find("> i").remove(),q(this).prepend('<i class="icon-default-style '+t+" "+e+'"></i> ')})})}function xe(){q(".nectar-flip-box").each(function(){var t=parseInt(q(this).attr("data-min-height")),e=q(this).find(".flip-box-front .inner").height();t-80<=(e=q(this).find(".flip-box-back .inner").height()>q(this).find(".flip-box-front .inner").height()?q(this).find(".flip-box-back .inner").height():e)?q(this).find("> div").css("height",e+80):q(this).find("> div").css("height","auto"),q(this).parent().hasClass("wpb_wrapper")&&q(this).parent().css("transform","translateZ(0)")})}function Ce(){q('.wpb_row .vc_col-sm-12 .nectar-slider-wrap[data-full-width="true"]').each(function(){0==q(this).parents(".wpb_row.full-width-section").length&&0==q(this).parents(".wpb_row.full-width-content").length&&q(this).parents(".wpb_row").addClass("full-width-section")}),!ot.usingMobileBrowser&&0<q('body[data-boxed-style="1"]').length&&0<q("#boxed").length&&0<q("#boxed").length&&q(".full-width-section[data-top-percent], .full-width-section[data-bottom-percent], .full-width-content[data-top-percent], .full-width-content[data-bottom-percent]").each(function(){var t=q(this).attr("data-top-percent")?q(this).attr("data-top-percent"):"skip",e=q(this).attr("data-bottom-percent")?q(this).attr("data-bottom-percent"):"skip";"skip"!=t&&q(this).css("padding-top",t),"skip"!=e&&q(this).css("padding-bottom",e)})}function ke(){var i,s,r,o,t,l,d,c,i,h,s;0!=q('.carousel-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), #boxed .full-width-content').length&&(o=ot.winW,t=0<q(".body-border-right").length&&1e3<o?2*parseInt(q(".body-border-right").width()):0,l=0<q(".container-wrap").length?parseInt(q(".container-wrap").outerWidth()):Y.width(),d=0<q("body[data-ext-padding]").length?2*parseInt(q("body").attr("data-ext-padding")):180,s=1==q("#boxed").length?(parseInt(q(".container-wrap").width())-parseInt(q(".main-content").width()))/2+4:(c=0<q('body[data-ext-responsive="true"]').length&&1e3<=o?d:0,i=l-t<=parseInt(q(".main-content").css("max-width"))?parseInt(q(".main-content").css("max-width")):l-t,h=parseInt(q(".main-content").css("max-width")),0<q('body.single-post[data-ext-responsive="true"]').length&&0<q(".container-wrap.no-sidebar").length&&(h=q(".post-area").width(),c=0),Math.ceil((i+c-h)/2)),q(".carousel-outer").has('.carousel-wrap[data-full-width="true"]').css("overflow","visible"),q('.carousel-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), #boxed .full-width-content').each(function(){var t=0<q('#header-outer[data-format="left-header"]').length&&1e3<=o?parseInt(q('#header-outer[data-format="left-header"]').width()):0,e=0<q(".body-border-right").length&&1e3<o?2*parseInt(q(".body-border-right").width())-2:0,a;s=1==q("#boxed").length?(r=0==q("#nectar_fullscreen_rows").length?parseInt(q(".main-content").width()):parseInt(q(this).parents(".container").width()),0<q('body.single-post[data-ext-responsive="true"]').length&&0<q(".container-wrap.no-sidebar").length&&0<q(this).parents(".post-area").length?(h=q(".post-area").width(),c=0,i=l-e,Math.ceil((i+c-h)/2)):0<q(this).parents(".page-submenu").length?(parseInt(q(".container-wrap").width())-r)/2:(parseInt(q(".container-wrap").width())-r)/2+4):(0<q('body.single-post[data-ext-responsive="true"]').length&&0<q(".container-wrap.no-sidebar").length&&0<q(this).parents(".post-area").length?(h=q(".post-area").width(),c=0,i=l-e):(a=0==q("#nectar_fullscreen_rows").length?parseInt(q(".main-content").css("max-width")):parseInt(q(this).parents(".container").css("max-width")),l-e<=a&&(i=a),h=a,c=0<q('body[data-ext-responsive="true"]').length&&1e3<=ot.winW?d:0,0<t&&(c=0<q('body[data-ext-responsive="true"]').length&&1e3<=ot.winW?120:0)),Math.ceil((i+c-h)/2));var a=0;q(this).hasClass("carousel-wrap")&&(a=1),q(this).hasClass("portfolio-items")&&(a=5);var t=1==q("#boxed").length?r+parseInt(2*s):l-e+a,t,n;0==q("#boxed").length&&q(this).hasClass("portfolio-items")&&q(this).is('[data-gutter*="px"]')&&0<q(this).attr("data-gutter").length&&"none"!=q(this).attr("data-gutter")&&(t=1e3<l?l-e+3:l-e),q(this).parent().hasClass("default-style")?(r=0==q("#nectar_fullscreen_rows").length?parseInt(q(".main-content").width()):parseInt(q(this).parents(".container").width()),0!=q("#boxed").length?t=1==q("#boxed").length?r+parseInt(2*s):l+a:(t=1==q("#boxed").length?r+parseInt(2*s):l-e-.025*(l-e)+a,i=l-e<=r?r:l-e-.025*(l-e),s=Math.ceil((i-r)/2))):q(this).parent().hasClass("spaced")&&(r=0==q("#nectar_fullscreen_rows").length?parseInt(q(".main-content").width()):parseInt(q(this).parents(".container").width()),0!=q("#boxed").length?t=1==q("#boxed").length?r+parseInt(2*s)-.02*l:l+a:(t=1==q("#boxed").length?r+parseInt(2*s):l-e-Math.ceil(.02*(l-e))+a,s=Math.ceil(((l-e<=r?r:l-e-.02*(l-e))-r)/2+2))),0<!q(this).parents(".span_9").length&&!q(this).parent().hasClass("span_3")&&"sidebar-inner"!=q(this).parent().attr("id")&&0<!q(this).find(".nectar-carousel-flickity-fixed-content").length&&"portfolio-extra"!=q(this).parent().attr("id")?0<q(".single-product").length&&0<q(this).parents("#tab-description").length&&0==q(this).parents(".full-width-tabs").length?q(this).css({visibility:"visible"}):q(this).hasClass("portfolio-items")?0==q(this).parents(".full-width-content").length&&q(this).css({"margin-left":-s,left:0,width:t,visibility:"visible"}):0<q("#nectar_fullscreen_rows").length&&q(this).hasClass("wpb_row")?q(this).css({"margin-left":-s,width:t,visibility:"visible"}):0==q(this).parents(".full-width-content").length&&q(this).css({left:0,"margin-left":-s,width:t,visibility:"visible"}):"portfolio-extra"==q(this).parent().attr("id")&&0!=q("#full_width_portfolio").length?0<!q(this).find(".nectar-carousel-flickity-fixed-content").length&&q(this).css({left:0,"margin-left":-s,width:t,visibility:"visible"}):q(this).css({"margin-left":0,width:"auto",left:"0",visibility:"visible"})}))}function Te(){q(".full-width-section.wpb_row, .full-width-content.wpb_row").each(function(){if(!q(this).parent().hasClass("span_9")&&!q(this).parent().hasClass("span_3")&&"sidebar-inner"!=q(this).parent().attr("id")){if(0<q(this).parents("#portfolio-extra").length&&0==q("#full_width_portfolio").length)return!1;var t;"0"==q(this).index()&&0==d.length&&0==q(".page-header-no-bg").length&&0==q(".project-title").length&&0==q("body.single").length&&0==q(".project-title").length&&(q(this).addClass("first-section"),t=q(this),setTimeout(function(){t.addClass("loaded")},50))}})}function $e(t){var e;this.$element=t,this.$elementInner=t.find("> .vc_column-inner"),this.inView=!1,this.topLevel=!1,this.lastY=0,this.lerp=t.data("scroll-animation-lerp")?parseFloat(t.data("scroll-animation-lerp")):.28,this.intensity=t.data("scroll-animation-intensity")?Math.max(Math.min(parseFloat(t.data("scroll-animation-intensity")),5),-5):3,this.intensity=this.intensity/10,this.storedWinH=ot.winH,this.type="translateY",this.persistOnMobile=!(!t.is("[data-scroll-animation-mobile]")||"true"!=t.attr("data-scroll-animation-mobile")),ot.usingMobileBrowser&&0==this.persistOnMobile||(this.setType(),this.calculatePos(),this.trackView(),this.animate(),0==this.$element.parents(".wpb_column.has-animation").length&&setInterval(this.calculatePos.bind(this),1e3),Y.on("resize",this.calculatePos.bind(this)),e=this,L.addEventListener("orientationchange",function(){this.setTimeout(function(){e.orientationChange()},80)}))}function Ie(t,e,a,n){this.$el=t,this.$parallaxEl=this.$el.find(e),this.firstSection=!1,this.type=n,this.speed=a,this.storedWinH=ot.winH,0<t.parents(".nectar-sticky-tabs").length||0<t.parents(".nectar-sticky-column-css").length||(this.setup(),this.resize(),this.update())}function Ee(){for(var t=0;t<A.length;t++)A[t].resize();for(t=0;t<W.length;t++)W[t].calculatePos()}function ze(t){var e;switch(t){case"slow":e=.6;break;case"medium":e=.4;break;case"medium_fast":e=.28;break;case"fast":e=.2;break;case"mid_subtle":e=.15;break;case"subtle":e=.13;break;case"very_subtle":e=.12;break;case"minimum":e=.09}return e}function Oe(){var t;ot.usingMobileBrowser&&0<q('body[data-remove-m-parallax="1"]').length||(W=[],q('.wpb_column[data-scroll-animation="true"], .nectar-el-parallax-scroll[data-scroll-animation="true"]').each(function(e){imagesLoaded(q(this),function(t){q(t.elements[0]).is('[data-scroll-animation="true"]')&&0==q("#nectar_fullscreen_rows").length&&(W[e]=new $e(q(t.elements[0])))})}),He(),t=0,q('.nectar-recent-posts-single_featured, [data-n-parallax-bg="true"], .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, #page-header-bg[data-parallax="1"] .nectar-video-wrap, .parallax_slider_outer .nectar-slider-wrap').each(function(){q(this).is("[data-n-parallax-bg][data-parallax-speed]")?(A[t]=new Ie(q(this),".parallax-layer",ze(q(this).attr("data-parallax-speed")),"regular"),t++):0==q(this).find('[data-parallax-speed="fixed"]').length&&(q(this).hasClass("nectar-slider-wrap")?A[t]=new Ie(q(this),".video-wrap, .image-bg",.25,"nectar-slider"):q(this).hasClass("page-header-bg-image-wrap")?A[t]=new Ie(q(this),".page-header-bg-image",.25,"page-header"):q(this).hasClass("nectar-video-wrap")&&0<q(this).parents("#page-header-bg").length?A[t]=new Ie(q(this),".nectar-video-bg",.25,"page-header"):A[t]=new Ie(q(this),".row-bg.using-image",ze(q(this).find(".row-bg").attr("data-parallax-speed")),"regular"),t++),q(this).addClass("nectar-parallax-enabled")}),q(".woocommerce-tabs .wc-tabs li").on("click",function(){setTimeout(He,100)}))}function He(){ot.usingMobileBrowser&&0<q('body[data-remove-m-parallax="1"]').length||q('.nectar-recent-posts-single_featured, [data-n-parallax-bg="true"], .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, .parallax_slider_outer .nectar-slider-wrap .slide-bg-wrap').each(function(){var t,e,a,n,a,n,e,a;return 0<q(this).parents(".wpb_tab:not(.visible-tab)").length&&0==q(this).parents(".nectar-scrolling-tabs").length||0<q(this).parents(".wc-tab").length&&"block"!==q(this).parents(".wc-tab").css("display")||void(0==q(this).find(".row-bg").length&&0<q(this).find(".page-header-bg-image").length||(0==q(this).find(".row-bg").length&&0<q(this).find(".image-bg").length?(t=!1,0==q(".wpb_row").length&&0<q(this).parents('.nectar-slider-wrap[data-full-width="true"]').length&&0<q(this).parents(".parallax_slider_outer").length&&"1"==q(this).parents(".parallax_slider_outer").index()&&(t=!0),0<q("#portfolio-extra").length&&0<q(this).parents(".wpb_row").length&&0<q(this).parents(".parallax_slider_outer").length&&"0"==q(this).parents(".wpb_row").index()&&(t=!0),0<q(this).parents(".top-level").length&&!ot.usingFrontEndEditor||t&&!ot.usingFrontEndEditor?q(this).find(".image-bg").css({height:Math.ceil(.25*q(this).parent().offset().top)+q(this).outerHeight(!0)}):q(this).find(".image-bg").css({height:Math.ceil(.25*Y.height())+q(this).outerHeight(!0)})):0==q(this).find(".row-bg").length&&0<q(this).find(".video-wrap").length?(t=!1,0==q(".wpb_row").length&&0<q(this).parents('.nectar-slider-wrap[data-full-width="true"]').length&&0<q(this).parents(".parallax_slider_outer").length&&"1"==q(this).parents(".parallax_slider_outer").index()&&(t=!0),0<q("#portfolio-extra").length&&0<q(this).parents(".wpb_row").length&&0<q(this).parents(".parallax_slider_outer").length&&"0"==q(this).parents(".wpb_row").index()&&(t=!0),0<q(this).parents(".top-level").length&&!ot.usingFrontEndEditor||t&&!ot.usingFrontEndEditor?q(this).find(".video-wrap").css({height:Math.ceil(.25*q(this).parent().offset().top)+q(this).outerHeight(!0)}):q(this).find(".video-wrap").css({height:Math.ceil(.25*ot.winH)+q(this).outerHeight(!0)}),a=(e=q(this).find(".video-wrap video")).parent().width()/1280,n=e.parent().height()/720,e.width(1280*(a=n<a?a:n)),e.height(720*a)):q(this).is(".nectar-recent-posts-single_featured")&&0<q(this).parents(".top-level").length&&!ot.usingFrontEndEditor||q(this).is(".nectar-simple-slider")&&0<q(this).parents(".top-level").length&&!ot.usingFrontEndEditor||q(this).is(".column-image-bg-wrap")&&0<q(this).parents(".top-level").length&&q(this).parent().parent().is(".vc_col-sm-12:not(.child_column)")||(!q(this).hasClass("top-level")||ot.usingFrontEndEditor||0<q(this).find(".parallax-layer").length)&&(n=".row-bg",e=q(this).find(".row-bg").attr("data-parallax-speed"),0<q(this).find(".parallax-layer").length&&!q(this).hasClass("wpb_row")&&(n=".parallax-layer",e=q(this).attr("data-parallax-speed")),a=0<q(this).find(n+'[data-parallax-speed="fast"]').length?60:0,q(this).find(n).css({height:Math.ceil(ot.winH*ze(e))+q(this).outerHeight(!0)+a}))))})}function Se(){q('.wpb_wrapper > .nectar-slider-wrap[data-full-width="true"]').each(function(){q(this).parent().hasClass("span_9")||q(this).parent().hasClass("span_3")||"sidebar-inner"==q(this).parent().attr("id")||"0"==q(this).parents(".wpb_row").index()&&q(this).addClass("first-nectar-slider")});var t=(0==q("#portfolio-extra").length?q(".main-content > .row > *"):q(".main-content > .row #portfolio-extra > *")).length,t=(0==q("#portfolio-extra").length?0<q(".main-content > .row > .wpb_row").length?q(".main-content > .row > .wpb_row"):q(".main-content > .row > *"):q(".main-content > .row #portfolio-extra > *")).length;q('.container-wrap .full-width-section, .container-wrap .full-width-content:not(.page-submenu .full-width-content):not(.blog-fullwidth-wrap), .row > .nectar-slider-wrap[data-full-width="true"], .wpb_wrapper > .nectar-slider-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]').each(function(){if(0<q(this).parents(".nectar-global-section.before-footer").length)return!0;if(!q(this).parent().hasClass("span_9")&&!q(this).parent().hasClass("span_3")&&"sidebar-inner"!=q(this).parent().attr("id"))if(0<q(this).parents(".wpb_row").length){if(0<q(this).parents("#portfolio-extra").length&&0==q("#full_width_portfolio").length)return!1;"0"==q(this).parents(".wpb_row").index()&&0!=d.length||"0"==q(this).parents(".wpb_row").index()&&0==d.length&&0==q(".page-header-no-bg").length&&0==q(".project-title").length&&"0"==q(this).parents(".wpb_row").index()&&0==q(".project-title").length&&0==q('body[data-bg-header="true"]').length&&(0==q(".single").length?q(".container-wrap").css("padding-top","0px"):q(this).addClass("first-section")),q(this).parents(".wpb_row").index()==t-1&&0==q("#respond").length&&"portfolio-filters-inline"!=q(this).attr("id")&&(q(".container-wrap").css("padding-bottom","0px"),q("#call-to-action .triangle").remove())}else{if(0<q(this).parents("#portfolio-extra").length&&0==q("#full_width_portfolio").length)return!1;0==q(this).find(".portfolio-filters-inline").length&&"post-area"!=q(this).attr("id")&&("0"==q(this).index()&&0!=d.length||"0"!=q(this).index()||0!=d.length||"0"!=q(this).index()||0!=q(".page-header-no-bg").length||"0"!=q(this).index()||q(this).hasClass("blog_next_prev_buttons")||q(this).hasClass("nectar-shop-outer")||0!=q(this).parents(".pum-container").length||(1==q('body[data-header-resize="0"]').length&&0==q(".single").length||0<q("body.material").length&&0==q(".single").length?0<!q("body.blog .blog-fullwidth-wrap > .masonry:not(.meta-overlaid)").length&&q(".container-wrap").css("padding-top","0px"):q(this).addClass("first-section")),q(this).index()==t-1&&0==q("#respond").length&&0==q("body.woocommerce-checkout").length&&(q(".container-wrap").css("padding-bottom","0px"),q(".bottom_controls").css("margin-top","0px"),q("#call-to-action .triangle").remove()))}}),q('#portfolio-extra > .nectar-slider-wrap[data-full-width="true"], .portfolio-wrap').each(function(){q(this).index()==t-1&&0==q("#commentform").length&&0==q("#pagination").length&&(0<parseInt(q(".container-wrap").css("padding-bottom"))&&q(this).css("margin-bottom","-40px"),q("#call-to-action .triangle").remove())}),q(".portfolio-filters").each(function(){"0"==q(this).index()&&0!=d.length||"0"==q(this).index()?q(this).addClass("first-section nder-page-header"):("0"==q(this).index()&&0==d.length||"0"==q(this).index())&&q(this).css({"margin-top":"0px"}).addClass("first-section")}),q(".portfolio-filters-inline").each(function(){0<q(this).parents(".wpb_row").length||("0"==q(this).index()&&0!=d.length||"0"==q(this).index()?q(this).addClass("first-section nder-page-header"):("0"==q(this).index()&&0==d.length||"0"==q(this).index())&&q(this).css({"margin-top":"-30px","padding-top":"50px"}).addClass("first-section"))})}function Me(){0==q("#boxed").length&&q(".full-width-section[data-top-percent], .full-width-section[data-bottom-percent], .full-width-content[data-top-percent], .full-width-content[data-bottom-percent]").each(function(){var t=Y.width(),e=q(this).attr("data-top-percent")?q(this).attr("data-top-percent"):"skip",a=q(this).attr("data-bottom-percent")?q(this).attr("data-bottom-percent"):"skip";"skip"!=e&&q(this).css("padding-top",t*(parseInt(e)/100)),"skip"!=a&&q(this).css("padding-bottom",t*(parseInt(a)/100))})}function Ae(){ot.usingMobileBrowser&&Me(),Y.on("resize",Me)}function We(){var i=0<q("body.vc_editor").length?".vc_element > ":"";q(".main-content > .row > "+i+" .full-width-content, #portfolio-extra > "+i+" .full-width-content, .woocommerce-tabs #tab-description > .full-width-content, .post-area.span_12 article .content-inner > .full-width-content").each(function(){var a,n,e;1<q(this).find("> .span_12 > "+i+" .col").length&&(e=n=0,q(this).find("> .span_12 > "+i+"  .col").each(function(){a=0<q(this).find("> .vc_column-inner > .wpb_wrapper").length?".vc_column-inner":".column-inner-wrap > .column-inner";var t=j.is('[data-flex-cols="true"]')?parseInt(q(this).find("> .vc_column-inner").css("padding-top")):parseInt(q(this).css("padding-top")),e=2<i.length&&0<q(this).find("> .vc_column-inner").length?parseInt(q(this).find("> .vc_column-inner").css("padding-top")):0;q(this).find("> "+a+" > .wpb_wrapper").height()+2*t+e>n&&(n=q(this).find("> "+a+" > .wpb_wrapper").height()+2*t+e)}),q(this).find("> .span_12 > "+i+" .col").each(function(){a=0<q(this).find("> .vc_column-inner > .wpb_wrapper").length?".vc_column-inner":".column-inner-wrap > .column-inner",0<q(this).find("> "+a+" > .wpb_wrapper > *").length?(i.length<2&&!q(this).parent().parent().hasClass("vc_row-o-equal-height")||2<i.length&&!q(this).parent().parent().parent().hasClass("vc_row-o-equal-height"))&&(q(this).css("height",n),j.is('[data-flex-cols="true"]')&&q(this).find("> .vc_column-inner").css("height",n)):q(this).is('[data-using-bg="true"]')&&(q(this).css("min-height",n),j.is('[data-flex-cols="true"]')&&q(this).find("> .vc_column-inner").css("min-height",n),q(this).is('[data-animation*="reveal"]')&&q(this).find(".column-inner").css("min-height",n))}),ot.winW<1e3&&q(this).find("> .span_12 > "+i+" .col .wpb_row .col").css("min-height","0px"),q(this).hasClass("vertically-align-columns")&&1e3<ot.winW&&!q(this).hasClass("vc_row-o-equal-height")&&q(this).find("> .span_12 > "+i+" .col").each(function(){a=0<q(this).find("> .vc_column-inner > .wpb_wrapper").length?".vc_column-inner":".column-inner-wrap > .column-inner",e=q(this).find("> "+a+" > .wpb_wrapper").height();var t=q(this).height()/2-e/2;t<=0&&(t=0),q(this).find("> "+a+" > .wpb_wrapper").css("margin-top",t).css("margin-bottom",t)}))}),0==q('body[data-flex-cols="true"]').length&&(q(".main-content > .row > .wpb_row:not(.full-width-content).vc_row-o-equal-height").each(function(){var e;0<q(this).find(">.span_12 > "+i+' .wpb_column[data-animation*="reveal"]').length&&(e=0,q(this).find("> .span_12 > "+i+" .col").each(function(){var t=parseInt(q(this).find("> .column-inner-wrap > .column-inner").css("padding-top"));q(this).find("> .column-inner-wrap > .column-inner").height()+2*t>e&&(e=q(this).find("> .column-inner-wrap > .column-inner").height()+2*t)}),q(this).find("> .span_12 > "+i+" .col").each(function(){0<q(this).find("> .column-inner-wrap > .column-inner .wpb_wrapper > *").length?q(this).find("> .column-inner-wrap").css("height",e):(q(this).css("min-height",e),q(this).is('[data-animation*="reveal"]')&&q(this).find(".column-inner").css("min-height",e))}))}),q(".wpb_row.vc_row-o-equal-height>.span_12> "+i+'.wpb_column[class*="padding-"][data-padding-pos="all"]').each(function(){0==q(this).parents(".tabbed").length&&q(this).css({"padding-top":q(this).css("padding-left"),"padding-bottom":q(this).css("padding-left")})}))}function Fe(){q(".wpb_row:has(.nectar-parallax-scene)").each(function(t){var e=parseInt(q(this).find(".nectar-parallax-scene").attr("data-scene-strength"));N[t]=q(this).find(".nectar-parallax-scene").parallax({scalarX:e,scalarY:e});var a=q(this).find(".nectar-parallax-scene li");q.each(a,function(){var t;0<q(this).find("div").length&&((t=q(this).find("div").css("background-image").replace(/"/g,"").replace(/url\(|\)$/gi,""))&&""!==t&&"none"!==t&&(a=a.add(q("<img>").attr("src",t))))})})}function qe(){q("ul.checks li").each(function(){0==q(this).find("i.fa-check-circle").length&&q(this).prepend('<i class="fa fa-check-circle"></i>')})}function Le(){q('.nectar-cta[data-style="arrow-animation"]').addClass("loaded")}function Ye(){var s=1==nt?"500%":"88%",n=1==nt?"500%":"70%",t=1==nt?"500%":"70%";q(at+".img-with-animation").each(function(){var a=q(this),n=a.is("[data-animation]")?a.attr("data-animation"):"fade-in";("ro-reveal-from-right"==n&&"88%"==s||"ro-reveal-from-left"==n&&"88%"==s)&&(s="75%");var i=new Waypoint({element:a[0],handler:function(){var t,e;0<a.parents(".wpb_tab").length&&"hidden"==a.parents(".wpb_tab").css("visibility")||a.hasClass("animated-in")||(!k||0<q('body[data-responsive="0"]').length)&&(t=a.is("[data-delay]")?a.attr("data-delay"):0,e=0<a.parents(".hover-wrap").length?a.parents(".hover-wrap"):a,"fade-in-from-left"==n||"fade-in-from-right"==n?e.delay(t).transition({opacity:1,x:"0px"},C,x):"fade-in-from-bottom"==n?e.delay(t).transition({opacity:1,y:"0px"},C,x):"fade-in"==n?e.delay(t).transition({opacity:1},C,x):"grow-in"==n?setTimeout(function(){e.transition({scale:1,opacity:1},C,x)},t):"flip-in"==n?setTimeout(function(){e.transition({rotateY:0,opacity:1},C,x)},t):"flip-in-vertical"==n?setTimeout(function(){e.transition({rotateX:0,opacity:1},C,x)},t):"ro-reveal-from-left"!=n&&"ro-reveal-from-right"!=n&&"ro-reveal-from-bottom"!=n&&"ro-reveal-from-top"!=n||a.parents(".img-with-aniamtion-wrap").addClass("animated-in"),a.addClass("animated-in")),i.destroy()},offset:s})}),q(at+".nectar_cascading_images").each(function(){var t=q(this),a=q(this).is("[data-animation-timing]")?q(this).attr("data-animation-timing"):175,a=parseInt(a),e=new Waypoint({element:t[0],handler:function(){0<t.parents(".wpb_tab").length&&"hidden"==t.parents(".wpb_tab").css("visibility")||t.hasClass("animated-in")||(!k||0<q('body[data-responsive="0"]').length)&&(t.find(".cascading-image").each(function(t){var e=q(this);"flip-in"==e.attr("data-animation")||"flip-in-vertical"==e.attr("data-animation")?setTimeout(function(){e.find(".inner-wrap").css({opacity:1,transform:"rotate(0deg) translateZ(0px)"})},t*a):"grow-in-reveal"==e.attr("data-animation")?setTimeout(function(){e.find(".inner-wrap").css({opacity:1,transform:"translateX(0px) translateY(0px) scale(1,1) translateZ(0px)"}),e.find(".inner-wrap img").css({transform:"translateX(0px) translateY(0px) scale(1,1) translateZ(0px)"})},t*a):setTimeout(function(){e.find(".inner-wrap").css({opacity:1,transform:"translateX(0px) translateY(0px) scale(1,1) translateZ(0px)"})},t*a)}),t.addClass("animated-in")),e.destroy()},offset:n})}),q(at+'.col.has-animation:not([data-animation*="reveal"]), '+at+'.wpb_column.has-animation:not([data-animation*="reveal"]), '+at+".nectar-fancy-box.has-animation").each(function(e){var a=q(this),t=s;q(this)[0].hasAttribute("data-animation-offset")&&(t=parseInt(q(this).attr("data-animation-offset"))+"%");var n=new Waypoint({element:a[0],handler:function(){var t;0<a.parents(".wpb_tab").length&&"hidden"==a.parents(".wpb_tab").css("visibility")||a.hasClass("animated-in")||(!k||0<q('body[data-responsive="0"]').length)&&(a.addClass("triggered-animation"),q(L).trigger("nectar-column-animation-start"),t=a.attr("data-delay"),"fade-in-from-left"==a.attr("data-animation")||"fade-in-from-right"==a.attr("data-animation")?Q[e]=setTimeout(function(){a.transition({opacity:1,x:"0px"},C,x)},t):"fade-in-from-bottom"==a.attr("data-animation")?Q[e]=setTimeout(function(){a.transition({opacity:1,y:"0px"},C,x)},t):"fade-in"==a.attr("data-animation")?Q[e]=setTimeout(function(){a.transition({opacity:1},C,x)},t):"grow-in"==a.attr("data-animation")||"zoom-out"==a.attr("data-animation")?Q[e]=setTimeout(function(){a.transition({scale:1,opacity:1},C,x)},t):"flip-in"==a.attr("data-animation")?Q[e]=setTimeout(function(){a.transition({rotateY:"0",opacity:1},C,x)},t):"flip-in-vertical"==a.attr("data-animation")?Q[e]=setTimeout(function(){a.transition({rotateX:"0",y:"0",opacity:1},C,x)},t):"slight-twist"==a.attr("data-animation")&&(Q[e]=setTimeout(function(){anime({targets:a[0],rotateY:[20,0],rotateZ:[-4,0],opacity:1,easing:x,duration:C})},t)),a.hasClass("boxed")&&(a.addClass("no-pointer-events"),setTimeout(function(){a.removeClass("no-pointer-events")},parseInt(C)+parseInt(t)+30)),a.find('.nectar-post-grid-wrap[data-style="mouse_follow_image"]')&&setTimeout(function(){a[0].style.transform="none"},parseInt(C)+parseInt(t)+30),a.addClass("animated-in")),n.destroy()},offset:t})}),q(at+'.wpb_column.has-animation[data-animation*="reveal"]').each(function(){var a=q(this),n=new Waypoint({element:a[0],handler:function(){var t,e;0<a.parents(".wpb_tab").length&&"hidden"==a.parents(".wpb_tab").css("visibility")||a.hasClass("animated-in")||(t=a.attr("data-delay"),(!k||0<q('body[data-responsive="0"]').length)&&(e=0<a.find("> .vc_column-inner").length,"reveal-from-bottom"==a.attr("data-animation")||"reveal-from-top"==a.attr("data-animation")?setTimeout(function(){a.hasClass("animated-in")&&(1==e?a.find("> .vc_column-inner").transition({y:0},C,x):a.find(".column-inner-wrap, .column-inner").transition({y:0},C,x,function(){a.find(".column-inner-wrap, .column-inner").addClass("no-transform")}))},t):"reveal-from-right"!=a.attr("data-animation")&&"reveal-from-left"!=a.attr("data-animation")||setTimeout(function(){a.hasClass("animated-in")&&(1==e?a.find("> .vc_column-inner").transition({x:0},C,x):a.find(".column-inner-wrap, .column-inner").transition({x:0},C,x,function(){a.find(".column-inner-wrap, .column-inner").addClass("no-transform")}))},t),a.addClass("animated-in"))),n.destroy()},offset:t})})}function je(){q(".nectar_cascading_images").each(function(){var n=!!q(this).hasClass("forced-aspect");0<q(this).parents(".vc_row-o-equal-height").length&&0<q(this).parents(".wpb_column").length&&q(this).css("max-width",q(this).parents(".wpb_column").width()),q(this).find(".bg-color").each(function(){if(1==n&&0==q(this).parents(".cascading-image").index())return!0;var t=0,e=0,a,t,e;e=0==q(this).parent().find(".img-wrap").length?(t=(a=q(this).parents(".cascading-image").siblings('.cascading-image[data-has-img="true"]').first()).find(".img-wrap").height(),a.find(".img-wrap").width()):(t=q(this).parent().find(".img-wrap").height(),q(this).parent().find(".img-wrap").width()),q(this).css({height:t,width:e}).addClass("calculated")})})}function Be(t,e){switch(this.$element=t,this.inView=!1,this.topLevel=!1,this.lastY=0,this.layer1Parallax=!!this.$element.is('[data-layer-1-parallax="yes"]'),e){case"subtle":this.intensity=.09;break;case"medium":this.intensity=.15;break;case"high":this.intensity=.25}this.calculatePos(),this.trackView(),this.animate(),(0<q(".portfolio-filters").length||0<q(".portfolio-filters-inline").length)&&setInterval(this.calculatePos.bind(this),700),Y.on("resize",this.calculatePos.bind(this))}function Pe(){var a=1==nt?"500%":"bottom-in-view";q(at+".nectar-split-heading").each(function(){q(this)[0].hasAttribute("data-animation-offset")&&1!=nt&&0<q(this).attr("data-animation-offset").length&&(a=parseInt(q(this).attr("data-animation-offset"))+"%");var i=q(this),t=i.is("[data-animation-delay]")?parseInt(i.attr("data-animation-delay")):0,e=new Waypoint({element:i[0],handler:function(){var n;0<i.parents(".wpb_tab").length&&"hidden"==i.parents(".wpb_tab").css("visibility")||i.hasClass("animated-in")||(!k||0<q('body[data-responsive="0"]').length)&&setTimeout(function(){var a,a,t,e;i.is('[data-animation-type="line-reveal-by-space"]:not([data-text-effect*="letter-reveal"])')?(a=0,i.is('[data-stagger="true"]')&&(a=500/i.find("> * > span").length,a=Math.min(Math.max(a,15),50)),n=parseInt(C)<1100?C:"1100",i.is('[data-m-rm-animation="true"]')&&ot.winW<1e3?i.find("> * > span .inner").css({transform:"translateY(0)",opacity:"1"}):i.find("> * > span").each(function(t){var e;0==a?q(this).find("> .inner").delay(t*a).transition({y:"0px",opacity:"1"},n,x):(e=q(this).find("> .inner"),setTimeout(function(){e[0].style.transform="translateY(0em)",e[0].style.opacity="1"},t*a))})):i.is('[data-animation-type="line-reveal-by-space"][data-text-effect*="letter-reveal"]')?(n=parseInt(C)<1e3?C:"1000",a=0,t=i.find("> * > span span"),e=i.is('[data-text-effect="letter-reveal-top"]')?["-1.3em","0em"]:["1.3em","0em"],a=400/t.length,a=Math.min(Math.max(a,20),50),0<t.length&&anime({targets:i.find("> * > span span").toArray(),translateY:e,delay:anime.stagger(a),duration:1200,easing:"cubicBezier(0.25,1,0.5,1)"})):i.find(".heading-line").each(function(t){q(this).find("> div").delay(70*t).transition({y:"0px"},C,x)}),i.addClass("animated-in")},t),e.destroy()},offset:a})})}function Re(){var s=1==nt?"500%":"bottom-in-view",t=0<q('#nectar_fullscreen_rows[data-mobile-disable="on"]').length&&ot.usingMobileBrowser?".nectar-progress-bar":at+".nectar-progress-bar";ot.usingMobileBrowser&&"bottom-in-view"==s&&(s="70%"),q(t).each(function(){var n=q(this),i=new Waypoint({element:n[0],handler:function(){var t,e,a;0<n.parents(".wpb_tab").length&&"hidden"==n.parents(".wpb_tab").css("visibility")||n.hasClass("completed")||("100%"==s&&n.find(".bar-wrap").css("opacity","1"),t=n.find("span").attr("data-width"),e=parseInt(n.find("span strong i").text()),n.find("span").transition({width:t+"%"},800,"easeInOutCubic"),a=n.find("span strong i")[0],new Kt(a,0,e,0,1,{useEasing:!1}).start(),n.find("span strong").transition({opacity:1},550,"easeInCirc"),"100"==t&&n.find("span strong").addClass("full"),n.addClass("completed")),i.destroy()},offset:s})})}function Ve(){var t=1==nt?"500%":"75%";q(at+'.wpb_column[data-border-animation="true"]').each(function(){var e=q(this),a=new Waypoint({element:e[0],handler:function(){var t;0<e.parents(".wpb_tab").length&&"hidden"==e.parents(".wpb_tab").css("visibility")||e.hasClass("completed")||(t=0<e.attr("data-border-animation-delay").length?parseInt(e.attr("data-border-animation-delay")):0,setTimeout(function(){e.find(".border-wrap").addClass("animation"),e.find(".border-wrap").addClass("completed")},t)),a.destroy()},offset:t})})}function Xe(){var a=1==nt?"500%":"80%";q(at+".nectar_food_menu_item").parent().each(function(){var t=q(this),e=new Waypoint({element:t[0],handler:function(){0<t.parents(".wpb_tab").length&&"hidden"==t.parents(".wpb_tab").css("visibility")||t.hasClass("completed")||t.find(".nectar_food_menu_item").each(function(t){var e=q(this);setTimeout(function(){e.addClass("animated-in")},150*t)}),e.destroy()},offset:a})})}function Ne(){var n=1==nt?"500%":"bottom-in-view";q(at+'.divider-small-border[data-animate="yes"], '+at+'.divider-border[data-animate="yes"]').each(function(){var e=q(this).hasClass("divider-small-border")?1300:1500,t=q(this),a=new Waypoint({element:t[0],handler:function(){0<t.parents(".wpb_tab").length&&"hidden"==t.parents(".wpb_tab").css("visibility")||t.hasClass("completed")||(t.each(function(){q(this).css({transform:"scale(0,1)",visibility:"visible"});var t=q(this);t.delay(t.attr("data-animation-delay")).transition({transform:"scale(1, 1)"},e,"cubic-bezier(.18,0.75,.25,1)")}),t.addClass("completed")),a.destroy()},offset:n})})}function De(){q(".nectar_image_with_hotspots").each(function(){q(this).find(".nectar_hotspot_wrap").each(function(){var t;690<ot.winW?(0<q(this).parents('.nectar_image_with_hotspots[data-tooltip-func="hover"]').length&&(q(this).find(".nectar_hotspot").removeClass("click"),q(this).find(".nttip").removeClass("open")),q(this).find(".nttip .inner a.tipclose").remove(),q(".nttip").css("height","auto"),q(this).css({width:"auto",height:"auto"}),q(this).find(".nttip").removeClass("force-right").removeClass("force-left").removeClass("force-top").css("width","auto"),(t=q(this).find(".nttip").offset()).left>q(this).parents(".nectar_image_with_hotspots").width()-200?q(this).find(".nttip").css("width","250px"):q(this).find(".nttip").css("width","auto"),t.left<0?q(this).find(".nttip").addClass("force-right"):t.left+q(this).find(".nttip").outerWidth(!0)>ot.winW?q(this).find(".nttip").addClass("force-left").css("width","250px"):t.top+q(this).find(".nttip").height()+35>Y.height()&&0<q("#nectar_fullscreen_rows").length&&q(this).find(".nttip").addClass("force-top"),0==q(this).find("> .open").length&&q(this).css({width:"30px",height:"30px"})):(q(this).find(".nttip").removeClass("force-left").removeClass("force-right").removeClass("force-top"),q(this).find(".nectar_hotspot").addClass("click"),0==q(this).find(".nttip a.tipclose").length&&q(this).find(".nttip .inner").append('<a href="#" class="tipclose"><span></span></a>'),q(".nttip").css("height",Y.height()))})})}function Qe(){0!=q(".nectar_image_with_hotspots").length&&(function(){q('.nectar_image_with_hotspots[data-hotspot-icon="numerical"]').each(function(){q(this).find(".nectar_hotspot_wrap").each(function(t){var e=q(this);setTimeout(function(){e.find(".nectar_hotspot").addClass("pulse")},300*t)})});var a=[];q('.nectar_image_with_hotspots:not([data-tooltip-func="click"]) .nectar_hotspot').each(function(e){a[e]="",q(this).on("mouseover",function(){clearTimeout(a[e]),q(this).parent().css({"z-index":"400",height:"auto",width:"auto"})}),q(this).on("mouseleave",function(){var t=q(this);t.parent().css({"z-index":"auto"}),a[e]=setTimeout(function(){t.parent().css({height:"30px",width:"30px"})},300)})})}(),j.on("click",".nectar_hotspot.click",function(){var t;return q(this).parents(".nectar_image_with_hotspots").find(".nttip").removeClass("open"),q(this).parent().find(".nttip").addClass("open"),q(this).parents(".nectar_image_with_hotspots").find(".nectar_hotspot").removeClass("open"),q(this).parent().find(".nectar_hotspot").addClass("open"),690<ot.winW&&(q(this).parent().css({"z-index":"120",height:"auto",width:"auto"}),t=q(this),setTimeout(function(){t.parents(".nectar_image_with_hotspots").find(".nectar_hotspot_wrap").each(function(){0==q(this).find("> .open").length&&q(this).css({height:"30px",width:"30px","z-index":"auto"})})},300)),ot.winW<=690&&(0<q("body.nectar_box_roll").length&&q(".container-wrap").addClass("hotspot-open"),q(this).parents('.wpb_row, [class*="vc_col-"]').css("z-index","200")),!1}),j.on("click",".nectar_hotspot.open",function(){return q(this).parent().find(".nttip").removeClass("open"),q(this).parent().find(".nectar_hotspot").removeClass("open"),q(this).parents(".wpb_row").css("z-index","auto"),!1}),j.on("click",".nttip.open",function(t){if(ot.winW<690&&(!t.target||!q(t.target).is("a")))return 0<q("body.nectar_box_roll").length&&q(".container-wrap").removeClass("hotspot-open"),q(this).parents(".nectar_image_with_hotspots").find(".nttip").removeClass("open"),q(this).parents(".nectar_image_with_hotspots").find(".nectar_hotspot").removeClass("open"),q(this).parents(".wpb_row").css("z-index","auto"),!1}),De(),Y.on("resize",De))}function Ze(){var a=1==nt?"500%":"50%";q(at+'.nectar_image_with_hotspots[data-animation="true"]').each(function(){var t=q(this),e=new Waypoint({element:t[0],handler:function(){0<t.parents(".wpb_tab").length&&"hidden"==t.parents(".wpb_tab").css("visibility")||t.hasClass("completed")||(t.addClass("completed"),t.find(".nectar_hotspot_wrap").each(function(t){var e=q(this),a=0<e.parents(".col.has-animation").length?1:0;setTimeout(function(){e.addClass("animated-in")},175*(t+a))})),e.destroy()},offset:a})})}function Ue(){var t=[].slice.call(T.querySelectorAll("[data-nectar-img-src]")),e=[].slice.call(T.querySelectorAll(".nectar-lazy-video")),a,n,i;"IntersectionObserver"in L?(a={rootMargin:"300px"},Ge(),Y.off("resize.nectarLazySizing",Ge),Y.on("resize.nectarLazySizing",Ge),n=new IntersectionObserver(function(t){t.forEach(function(t){var e,a,t;!t.isIntersecting||(a=(e=t.target).getAttribute("data-nectar-img-src"))&&(e.classList.contains("nectar-lazy")?(e.addEventListener("load",function(){e.classList.contains("keep-calculated-size")||(e.style.height="",e.style.width=""),e.classList.add("loaded"),e.removeAttribute("data-nectar-img-src"),"undefined"!=typeof SalientPortfolio&&e.classList.contains("image-gallery-portfolio-item")&&q(L).trigger("salient-portfolio-recalculate"),n.unobserve(e)}),e.src=a,(t=e.getAttribute("data-nectar-img-srcset"))&&(e.setAttribute("srcset",t),e.removeAttribute("data-nectar-img-srcset")),e.parentNode.classList.add("img-loaded")):(e.style.backgroundImage="url('"+a+"')",e.classList.add("loaded"),e.removeAttribute("data-nectar-img-src"),n.unobserve(e)))})},a),t.forEach(function(t){n.observe(t)}),i=new IntersectionObserver(function(t,e){t.forEach(function(t){if(t.isIntersecting){for(var e in t.target.children){var e=t.target.children[e];"string"==typeof e.tagName&&"SOURCE"===e.tagName&&(e.src=e.dataset.nectarVideoSrc)}t.target.load(),t.target.classList.remove("lazy"),i.unobserve(t.target)}})},a),e.forEach(function(t){i.observe(t)})):t.forEach(function(t){var e;t.classList.contains("nectar-lazy")?(t.classList.contains("keep-calculated-size")||(t.style.height="",t.style.width=""),t.src=t.getAttribute("data-nectar-img-src"),(e=t.getAttribute("data-nectar-img-srcset"))&&(t.setAttribute("srcset",e),t.removeAttribute("data-nectar-img-srcset")),t.parentNode.classList.add("img-loaded")):t.style.backgroundImage="url('"+t.getAttribute("data-nectar-img-src")+"')",t.classList.add("loaded"),t.removeAttribute("data-nectar-img-src")})}function Ge(){q("img.nectar-lazy:not(.loaded):not(.image-gallery-portfolio-item)").each(function(){if(q(this).hasClass("attachment-shop_thumbnail")||q(this).hasClass("attachment-woocommerce_thumbnail"))return!0;q(this).css({height:"",width:""});var t=parseInt(q(this).attr("height")),e=parseInt(q(this).attr("width")),a=(0<q(this).parents(".nectar_cascading_images").length?q(this).parents(".bg-layer"):q(this)).width();0<q(this).parents(".img-with-aniamtion-wrap.custom-size").length&&e<a&&(a=e),0<q(this).parents('.img-with-aniamtion-wrap[data-shadow*="depth"]').length&&(a=q(this).parents(".img-with-aniamtion-wrap").width());var a=Rt(e,t,a=0<q(this).parents(".nectar-post-grid-item-bg-wrap-inner").length&&!q(this).hasClass("nectar-post-grid-item__overlaid-img")?q(this).parents(".nectar-post-grid-item-bg-wrap-inner").width():a,2e3);q(this).css({height:a.height+"px",width:a.width+"px"})})}function Je(){O=[],M=[],ot.usingMobileBrowser||(q('.nectar-post-grid[data-indicator="yes"]').each(function(t){O[t]=new yt(q(this),"view-indicator")}),q('.nectar-post-grid-wrap[data-style="mouse_follow_image"] .nectar-post-grid').each(function(t){M[t]=new yt(q(this),"post-grid-images")}),q('.nectar-category-grid[data-style="mouse_follow_image"]').each(function(t){M[t]=new yt(q(this),"post-grid-images")}))}function Ke(){G=[],Je(),q(".nectar-post-grid-wrap").each(function(t){G[t]=new ta(q(this))})}function ta(t){this.el=t,this.currentPage=0,this.activeFilter=1,this.activeCatTotal=0,this.settingsData=JSON.parse(this.el.attr("data-el-settings")),this.queryData=JSON.parse(this.el.attr("data-query")),this.sortable=this.el.find(".nectar-post-grid-filters").attr("data-sortable"),this.gridStyle=this.el.attr("data-style"),this.initialMarkup(),this.clickEvents(),this.deepLinking(),this.lightboxGroups(),this.externalProjectLinks()}function ea(){var a=1==nt?"200%":"75%";q(at+".nectar-post-grid-wrap").each(function(){var t=q(this),e=new Waypoint({element:t[0],handler:function(){0<t.parents(".wpb_tab").length&&"hidden"==t.parents(".wpb_tab").css("visibility")||t.hasClass("completed")||(t.find(".nectar-post-grid-filters").addClass("animated-in"),t.find(".nectar-post-grid-item").each(function(t){var e=q(this);setTimeout(function(){e.addClass("animated-in")},90*t)}),setTimeout(function(){t.addClass("finished-animating")},950)),e.destroy()},offset:a})})}function aa(){var a=1==nt?"500%":"bottom-in-view";q(at+".nectar-animated-title").each(function(){var t=q(this),e=new Waypoint({element:t[0],handler:function(){0<t.parents(".wpb_tab").length&&"hidden"==t.parents(".wpb_tab").css("visibility")||t.hasClass("completed")||t.addClass("completed"),e.destroy()},offset:a})})}function na(){var i=1==nt?"500%":"bottom-in-view";ot.usingMobileBrowser&&"bottom-in-view"==i&&(i="85%"),q(at+".nectar-highlighted-text").each(function(t){var e=0;q(this).find("i").each(function(){q(this).replaceWith(function(){return q("<em />").append(q(this).html())})}),q(this).is("[data-animation-delay]")&&0<q(this).attr("data-animation-delay").length&&"false"!=q(this).attr("data-animation")&&(e=q(this).attr("data-animation-delay")),q(this).find("em:has(a)").addClass("has-link"),k&&q(this).find("em").addClass("animated");var a=q(this),n=new Waypoint({element:a[0],handler:function(){0<a.parents(".wpb_tab").length&&"hidden"==a.parents(".wpb_tab").css("visibility")||a.hasClass("animated")||setTimeout(function(){a.find("em").each(function(t){var e=q(this);setTimeout(function(){e.addClass("animated")},300*t)})},e),n.destroy()},offset:i})})}function ia(){var a=1==nt?"500%":"75%";q(at+'.nectar-woo-flickity[data-animation*="fade-in"]').each(function(){var t=q(this),e=new Waypoint({element:t[0],handler:function(){0<t.parents(".wpb_tab").length&&"hidden"==t.parents(".wpb_tab").css("visibility")||t.hasClass("animated-in")||(t.addClass("animated-in"),t.find(".flickity-cell").each(function(t){var e=q(this);setTimeout(function(){e.css({transform:"translate3d(0,0,0)",opacity:"1"})},100*t)})),e.destroy()},offset:a})})}function sa(){var t;q('.pricing-table[data-style="default"]').each(function(){t=0,q(this).find("> div ul").each(function(){q(this).height()>t&&(t=q(this).height())}),0==t&&(t="auto"),q(this).find("> div ul").css("height",t)})}function ra(){X=[],"undefined"!=typeof NectarTestimonialSlider&&q(".testimonial_slider").each(function(t){var e=q(this),a=q(this).is("[data-style]")?q(this).attr("data-style"):"none";X[t]=new NectarTestimonialSlider(e,a,ma,We),q(this).is('.disable-height-animation:not([data-style*="multiple_visible"])')&&(X[t].testimonialSliderHeight(),setTimeout(X[t].testimonialSliderHeight.bind(X[t]),700)),q(this).is('.testimonial_slider[data-style="multiple_visible_minimal"]')&&(X[t].testimonialSliderHeightMinimalMult(),setTimeout(function(){X[t].testimonialSliderHeightMinimalMult(),X[t].flickityEl.flickity("resize")},700))})}function oa(){Y.off("smartresize.nectarTestimonials"),Y.off("resize.nectarTestimonialsMin"),0<X.length&&Y.on("smartresize.nectarTestimonials",la),0<q('.testimonial_slider[data-style="multiple_visible_minimal"]').length&&Y.on("resize.nectarTestimonialsMin",da)}function la(){for(var t=0;t<X.length;t++)X[t].testimonialSliderHeight(),X[t].testimonialHeightResize()}function da(){for(var t=0;t<X.length;t++)X[t].testimonialSliderHeightMinimalMult()}function ca(t){return 0<t.parents('.wpb_column[data-bg-color*="#"]').length&&0<t.parents('.wpb_column[data-bg-opacity="1"]').length?t.parents(".wpb_column").attr("data-bg-color"):(0<t.parents(".wpb_row").length&&0<t.parents(".wpb_row").find(".row-bg.using-bg-color").length||0<t.parents(".wpb_row").length&&0<t.parents(".wpb_row").find(".row-bg.using-bg-color-excluded").length?t.parents(".wpb_row").find(".row-bg"):0<q("#nectar_fullscreen_rows").length?q("#nectar_fullscreen_rows > .wpb_row .full-page-inner-wrap"):q(".container-wrap")).css("background-color")}function ha(){var a="";q('.nectar-icon-list[data-icon-style="border"], .nectar_icon_wrap[data-style="border-animation"][data-color*="extra-color-gradient-"]').each(function(t){var e=ca(q(this));q(this).hasClass("nectar-icon-list")?q(this).find(".list-icon-holder").css("background-color",e):(q(this).removeClass(function(t,e){return(e.match(/(^|\s)instance-\S+/g)||[]).join(" ")}),q(this).addClass("instance-"+t),a+=".nectar_icon_wrap.instance-"+t+" .nectar_icon:before { background-color: "+e+"!important; }")}),q('body.material .nectar-button.see-through[class*="m-extra-color-gradient"]').each(function(t){var e=ca(q(this));q(this).removeClass(function(t,e){return(e.match(/(^|\s)instance-\S+/g)||[]).join(" ")}),q(this).addClass("instance-"+t),a+=".nectar-button.see-through.instance-"+t+":after { background-color: "+e+"!important; }"}),ee(a,"nectaricon-color-match")}function ua(){q(".col.span_3, .vc_span3, .vc_col-sm-3").each(function(){var t,e;q(this).is('[data-t-w-inherits="small_desktop"]')||(t=q(this),((e=q(this).next("div")).hasClass("span_3")&&!t.hasClass("one-fourths")||e.hasClass("vc_span3")&&!t.hasClass("one-fourths")||e.hasClass("vc_col-sm-3")&&!t.hasClass("one-fourths"))&&(t.addClass("one-fourths clear-both"),e.addClass("one-fourths right-edge")))}),q(".span_12 .col.span_6").each(function(){q(this).next("div").hasClass("span_6")&&0==q.trim(q(this).next("div").html()).length&&q(this).addClass("empty-second")})}function pa(){q("iframe").each(function(){if(void 0!==q(this).attr("src")&&!q(this).hasClass("skip-nectar-video-size")&&!q(this).hasClass("iframe-embed")&&0==q(this).parents(".ult_modal").length&&0==q(this).parents(".ls-slide").length&&0==q(this).parents(".woo-variation-product-gallery").length&&0==q(this).parents(".esg-entry-media").length&&0==q(this).parents(".wpb_video_widget.wpb_content_element").length){if(0<q(this).parents(".woocommerce-product-gallery").length&&(!q(this).is('[width="100%"]')||!q(this).is('[height="100%"]')))return!0;var t=q(this).attr("src").toLowerCase();(0<=t.indexOf("youtube")||0<=t.indexOf("vimeo")||0<=t.indexOf("twitch.tv")||0<=t.indexOf("kickstarter")||0<=t.indexOf("embed-ssl.ted")||0<=t.indexOf("dailymotion"))&&(q(this).addClass("iframe-embed"),(q(this).width()<q(this).parent().width()?q(this).attr("data-aspectRatio",q(this).height()/q(this).width()):q(this).attr("data-aspectRatio","0.56")).removeAttr("height").removeAttr("width"),0<q(this).parents(".post-area.masonry.classic").length&&q(this).attr("data-aspectRatio","0.56").removeAttr("height").removeAttr("width"))}})}function ga(){q("iframe[data-aspectRatio]").each(function(){var t=q(this),e=t.parent().width();0<q(this).parents(".swiper-slide").length&&!q(this).is(":visible")||t.width(e).height(e*t.attr("data-aspectRatio"))})}function fa(){q(".video-wrap iframe").unwrap(),q("#sidebar iframe[src]").unwrap(),q("audio").attr("width","100%").attr("height","100%").css("visibility","visible"),q("video").css("visibility","visible"),q(".wp-video").each(function(){q(this).find("video").get(0).addEventListener("loadeddata",function(){Y.trigger("resize")},!1)}),q(".main-content iframe[src]").each(function(){q(this).css({opacity:"1",visibility:"visible"})})}function ma(){var i=1200;q(".nectar-video-wrap").each(function(){var t,e,a,t,e,n;if(0!=q(this).find("video").length){if(0<q(this).parents("#page-header-bg").length){if(0<q(".container-wrap.auto-height").length)return!1;t=q(this).parents("#page-header-bg").outerHeight(),e=q(this).parents("#page-header-bg").outerWidth()}else{e=q(this).hasClass("column-video")?j.is('[data-flex-cols="true"]')?(t=(a=q(this).parents(".vc_column-inner")).outerHeight(),a.outerWidth()):(t=q(this).parents(".wpb_column").outerHeight(),q(this).parents(".wpb_column").outerWidth()):(t=(n=q(this).parents(".wpb_row")).outerHeight(),0<q(this).parents(".full-width-section").length?ot.winW:n.outerWidth())}q(this).width(e),0<q(this).parents("#page-header-bg").length&&q(this).height(t);var a=e/1280,n=(t-t)/720,n=n<a?a:n;1280*n<(i=1280/720*(t+40))&&(n=i/1280),q(this).find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(1280*n+0)),q(this).find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(720*n+0)),q(this).scrollLeft((q(this).find("video").width()-e)/2),q(this).scrollTop((q(this).find("video").height()-t)/2),q(this).find(".mejs-overlay, .mejs-poster").scrollTop((q(this).find("video").height()-t)/2),"center bottom"==q(this).attr("data-bg-alignment")||"bottom"==q(this).attr("data-bg-alignment")?q(this).scrollTop(q(this).find("video").height()-(t+6)):"center top"!=q(this).attr("data-bg-alignment")&&"top"!=q(this).attr("data-bg-alignment")||q(this).scrollTop(0),q(this).addClass("position-loaded")}})}function va(){function s(t){var e,a,n,i,s=t.innerWidth(),r=t.innerHeight();s/r<16/9?(e=r*(16/9),a=r,n=-Math.round((e-s)/2)+"px",i=-Math.round((a-r)/2)+"px"):(a=(e=s)*(9/16),i=-Math.round((a-r)/2)+"px",n=-Math.round((e-s)/2)+"px"),e+="px",a+="px",t.find(".vc_video-bg iframe").css({maxWidth:"1000%",marginLeft:n,marginTop:i,width:e,height:a})}0==q(".nectar-video-wrap").length&&0==q(".nectar-youtube-bg").length||(setTimeout(function(){ma(),Y.on("resize",ma),L.addEventListener("orientationchange",function(){this.setTimeout(function(){ma()},100)}),q(".video-color-overlay").each(function(){q(this).css("background-color",q(this).attr("data-color"))}),q(".nectar-video-wrap").each(function(){var t,e,a;0!=q(this).find("video").length&&(t=0<q(this).parents("#page-header-bg").length,e=q(this),a=setInterval(function(){3<e.find("video").get(0).readyState&&(ot.usingMobileBrowser||(e.transition({opacity:"1"},400),e.find("video").transition({opacity:"1"},400),e.parent().find(".video-color-overlay").transition({opacity:"0.7"},400),1==t&&Ra()),n.addClass("loaded"),setTimeout(function(){n.addClass("hidden")},1e3),clearInterval(a))},60),ot.usingMobileBrowser&&(0<e.parents(".full-width-section").length&&0==e.parents("#nectar_fullscreen_rows").length&&!e.hasClass("column-video")?e.css("left","50%"):e.css("left","0px"),1==t&&Ra(),e.find("video")[0].onplay=function(){e.transition({opacity:"1"},400),e.find("video").transition({opacity:"1"},400),e.parent().find(".video-color-overlay").transition({opacity:"0.7"},400)}))})},300),ot.usingMobileBrowser&&q(".nectar-video-wrap").each(function(){q(this).find("video").is("[muted]")||(q(this).parent().find(".mobile-video-image").show(),q(this).remove())}),q('.wpb_row:has(".nectar-video-wrap"):not(.fp-section)').each(function(t){q(this).css("z-index",100+t)}),q(".vc_row").each(function(){var t,e=jQuery(this);0<e.find(".nectar-youtube-bg").length?(t=function(t){if(void 0===t)return!1;var t=t.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return null!==t&&t[1]}(e.find(".nectar-youtube-bg span").text()))&&(e.find(".vc_video-bg").remove(),function t(e,a,n){if("undefined"==typeof YT||void 0===YT.Player)return 100<(n=void 0===n?0:n)?void console.warn("Too many attempts to load YouTube api"):void setTimeout(function(){t(e,a,n++)},100);var i=e.prepend('<div class="vc_video-bg"><div class="inner"></div></div>').find(".inner");new YT.Player(i[0],{width:"100%",height:"100%",videoId:a,playerVars:{playlist:a,iv_load_policy:3,enablejsapi:1,disablekb:1,autoplay:1,controls:0,showinfo:0,rel:0,loop:1},events:{onReady:function(t){t.target.mute().setLoop(!0),s(e)}}}),s(e),jQuery(L).on("resize",function(){s(e)}),setTimeout(function(){s(e)},100)}(e.find(".nectar-youtube-bg"),t)):e.find(".nectar-youtube-bg").remove(),e.find(".nectar-youtube-bg span").remove(),ot.usingMobileBrowser||e.find(".nectar-video-wrap, .nectar-youtube-bg").css({opacity:"1",width:"100%",height:"100%"}),e.find(".video-color-overlay").transition({opacity:"0.7"},400)}))}function ba(){var e;j.hasClass("single-post")&&0<q(".content-inner[data-has-gallery]").length&&(0<q(".wp-block-gallery").length?q(".content-inner").find(".wp-block-gallery").each(function(t){0!==t&&q(this).css("display","flex")}):q(".content-inner").find(".gallery").each(function(t){0!==t&&q(this).css("display","block")})),j.hasClass("single-post")&&0<q(".nectar-social.vertical").length&&(e=q(".nectar-social.vertical"),new Waypoint({element:q(".post-area")[0],handler:function(t){dt.materialOffCanvasOpen||("down"===t?e.addClass("visible"):e.removeClass("visible"))},offset:"70%"}))}function wa(){var t=0<q("#top #mobile-menu").length?"#top #mobile-menu ":".off-canvas-menu-container.mobile-only ";q(t+".menu-item > ul > li > a").each(function(){var t;("-"==q(this).text()||"–"==q(this).text()||q(this).parent().hasClass("hide-title")||0<q(this).find("> .remove-menu-item-title").length)&&(t=q(this).parent().find("> ul > li").clone(),0<q(this).parent().find("> .widget-area-active").length?q(this).parent().find("> a").remove():(q(this).parent().find("ul").remove(),q(this).parent().parent().append(t),q(this).parent().remove()))})}function ya(){var t,e,a,n,i,s,t;0<q('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length&&(xa(),0<h.length)&&(t=h.detach(),q(".ocm-effect-wrap-inner").append(t)),0<q("body.material").length&&0==q('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length&&(0==q("#mobile-menu").length&&((t=q("header#top ul .slide-out-widget-area-toggle:first a > span > i").clone()).addClass("hover-effect"),q("header#top ul .slide-out-widget-area-toggle a > span").append(t),(t=q("header#top .slide-out-widget-area-toggle.mobile-icon a > span > i").clone()).addClass("hover-effect"),q("header#top .slide-out-widget-area-toggle.mobile-icon a > span").append(t)),q('body:not([data-slide-out-widget-area-style="slide-out-from-right"]) header#top .slide-out-widget-area-toggle a > span').append(q('<span class="close-wrap"> <span class="close-line close-line1"></span> <span class="close-line close-line2"></span> </span>')),setTimeout(function(){q("header#top .slide-out-widget-area-toggle a > span .close-wrap").addClass("loaded")},200)),0<q("body.material #boxed").length&&0<q('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length&&0<q(".ocm-effect-wrap").length&&q("#ajax-content-wrap > .slide-out-widget-area-toggle.slide-out-hover-icon-effect").insertAfter(".ocm-effect-wrap"),0<q("body.material").length&&0==q('body[data-slide-out-widget-area-style*="fullscreen"]').length&&0<q(".ocm-effect-wrap").length&&(q("body.material #slide-out-widget-area.slide-out-from-right .slide_out_area_close").insertAfter(".ocm-effect-wrap"),q("#slide-out-widget-area-bg").insertAfter(".ocm-effect-wrap"),r.insertAfter(".ocm-effect-wrap")),(0<q('body.material[data-header-search="true"]').length||0<q("body.material .ocm-effect-wrap").length)&&(a=!1,n=0,i=ot.winW,s=ot.winH,L.addEventListener("orientationchange",function(){n=1}),Y.on("resize",function(){ot.usingMobileBrowser?(Y.width()!=i&&Y.height!=s||1===n)&&(i=ot.winW,s=ot.winH,a=!(n=0)):a=!0,a&&(clearTimeout(e),q('body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow').addClass("no-material-transition"),e=setTimeout(function(){q('body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow').removeClass("no-material-transition")},250),xa(),a=!1)})),Y.on("resize",Ca)}function _a(){var t,e=0;q("#slide-out-widget-area > .widget").each(function(){e+=q(this).height()}),t=r.height()-25-q(".bottom-meta-wrap").outerHeight(!0)-e>q("#slide-out-widget-area .off-canvas-menu-container:last-child").height()?r.height()-25-q(".bottom-meta-wrap").outerHeight(!0)-e:q("#slide-out-widget-area .off-canvas-menu-container:last-child").height(),q("#slide-out-widget-area .inner").css({height:"auto","min-height":t})}function xa(){q("#slide-out-widget-area.slide-out-from-right").css({"padding-top":.1*Y.height(),"padding-bottom":.1*Y.height()}),Ia()}function Ca(){0<q(".ocm-effect-wrap.material-ocm-open").length&&(q(".ocm-effect-wrap").css({height:Y.height()}),q(".ocm-effect-wrap-inner").css({"padding-top":ot.adminBarHeight}))}function ka(){"separate-dropdown-parent-link"==(0<q("#slide-out-widget-area[data-dropdown-func]").length?r.attr("data-dropdown-func"):"default")&&q("#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children").append('<span class="ocm-dropdown-arrow"><i class="fa fa-angle-down"></i></span>')}function Ta(){q('#slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children').each(function(){q(this).find(".ocm-dropdown-arrow").css({top:q(this).find("a").height()/2})}),q("#slide-out-widget-area.fullscreen-split .off-canvas-menu-container li.menu-item-has-children").each(function(){q(this).find(".ocm-dropdown-arrow").css({top:q(this).find("a").height()/2})})}function $a(){L.nectarOptions&&L.nectarOptions.ocm_remove_ext_menu_items&&"remove_images"==L.nectarOptions.ocm_remove_ext_menu_items&&!1===dt.ocmInit&&(q('.off-canvas-menu-container .title[class*="inherit-h"], #mobile-menu .title[class*="inherit-h"]').removeClass(function(t,e){return(e.match(/(^|\s)inherit-h\S+/g)||[]).join(" ")}),q(".off-canvas-menu-container .nectar-ext-menu-item .image-layer-outer, #mobile-menu .nectar-ext-menu-item .image-layer-outer").remove(),q(".off-canvas-menu-container .nectar-ext-menu-item .menu-item-desc").removeClass("menu-item-desc").addClass("item_desc"),q(".off-canvas-menu-container .nectar-ext-menu-item .inner-content > .title").each(function(){0==q(this).find(".menu-title-text").length&&q(this).removeClass("title").addClass("menu-title-text")}),q(".off-canvas-menu-container .item_desc").each(function(){"none"!==q(this).css("display")&&q(this).parents(".menu-item").addClass("nectar-extra-menu-item-spacing")}),Ta(),dt.ocmInit=!0)}function Ia(){ot.winW<1e3||0<q("body > #boxed").length||0<q(".ocm-effect-wrap-inner > #boxed").length?(q("#slide-out-widget-area.fullscreen .off-canvas-social-links, #slide-out-widget-area.fullscreen-alt .off-canvas-social-links").appendTo("#slide-out-widget-area .inner"),q("#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text").appendTo("#slide-out-widget-area .inner")):(q("#slide-out-widget-area.fullscreen .off-canvas-social-links,#slide-out-widget-area.fullscreen-alt .off-canvas-social-links").appendTo("#slide-out-widget-area .inner-wrap"),q("#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text").appendTo("#slide-out-widget-area .inner-wrap")),0<q(".slide-out-from-right.open .off-canvas-menu-container.mobile-only").length&&0==q("body.mobile").length&&q("#slide-out-widget-area .slide_out_area_close").trigger("click"),Ta()}function Ea(){if(_a(),ot.usingMobileBrowser&&0<q("#slide-out-widget-area.open").length)return Oa(),!1;ot.usingMobileBrowser&&(q(".slide-out-widget-area-toggle a").attr("aria-expanded","true"),s.css({height:"100%",width:"100%"})),r.css({transform:"translate3d(0,0,0)"}).addClass("open"),$a();var t=Zt();ot.winW<1e3&&(t=!0);var e=L.nectarOptions&&L.nectarOptions.mobile_header_format&&"centered-menu"===L.nectarOptions.mobile_header_format&&t?"left":"right",a,n,i,t,e;if(0<q("header#top .container .span_9 > .slide-out-widget-area-toggle").length&&(n=q(".slide-out-hover-icon-effect"),i=ot.secondaryHeaderHeight,t=Zt(),0<q('#header-outer[data-format="centered-menu-bottom-bar"]').length&&(t=!1),0<q("body.mobile").length||t||"left"===$?(n.css({top:q("header#top .span_9 > .slide-out-widget-area-toggle a").offset().top-ot.scrollTop}),"left"==e||"left"===$?n.css({left:parseInt(q("#header-outer header > .container").css("padding-right"))+1,right:""}):n.css({right:parseInt(q("#header-outer header > .container").css("padding-right"))+1,left:""})):it?(e=0<q('#header-outer[data-has-menu="false"]').length?2:1,n.css({top:ot.adminBarHeight+i+parseInt(q("header#top nav >ul .slide-out-widget-area-toggle a").css("padding-top")),right:29+e})):0<q('#header-outer[data-format="centered-menu-bottom-bar"]').length?(a=("flex"==q("header#top .span_9 > .slide-out-widget-area-toggle").css("display")?q("header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon a"):q("header#top .span_3 .right-side .slide-out-widget-area-toggle > div")).offset(),"flex"==q("#top .span_3 .slide-out-widget-area-toggle.mobile-icon").css("display")&&(a=q("#top .span_3 .slide-out-widget-area-toggle.mobile-icon a").offset()),n.css({top:parseInt(a.top)-ot.scrollTop,right:parseInt(q("#header-outer header >.container").css("padding-right"))+2,left:""})):(a=(j.hasClass("ascend")?"block"==q("header#top .span_9 > .slide-out-widget-area-toggle").css("display")?q("header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon"):q("header#top nav .buttons .slide-out-widget-area-toggle > div a > span:not(.screen-reader-text)"):"block"==q("header#top .span_9 > .slide-out-widget-area-toggle").css("display")?q("header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon"):q("header#top nav .buttons .slide-out-widget-area-toggle > div")).position(),0<q("#header-secondary-outer.hide-up").length&&(i=0),n.css({top:ot.adminBarHeight+i+parseInt(a.top),right:parseInt(q("#header-outer header >.container").css("padding-right"))+2,left:""}))),q(".slide-out-hover-icon-effect .lines-button").removeClass("no-delay").addClass("unhidden-line"),0==q('#header-outer[data-permanent-transparent="1"]').length&&0==q("#nectar_fullscreen_rows").length&&!ot.usingFrontEndEditor&&1e3<ot.winW&&(0==ot.scrollTop&&0<q("#header-outer.transparent").length||0==q("body.mobile").length&&it&&(u.attr("data-transparent","true").addClass("no-bg-color").addClass("slide-out-hover"),q("#header-outer header, #header-outer > .cart-outer").addClass("all-hidden")),0==q('#header-outer[data-remove-fixed="1"]').length&&0==q("body.mobile").length&&it&&(1==w?(Y.off("scroll",dn),Y.off("scroll",ln)):(Y.off("scroll",cn),Y.off("scroll",hn)))),ot.usingMobileBrowser)return!1;Y.on("mousemove.rightOffsetCheck",za)}function za(t){var e=Y.width(),a=r.outerWidth(),n=Zt();ot.winW<1e3&&(n=!0),("left"!=(L.nectarOptions&&L.nectarOptions.mobile_header_format&&"centered-menu"===L.nectarOptions.mobile_header_format&&n?"left":"right")&&"left"!==$?t.clientX<e-parseInt(a)-o:t.clientX>parseInt(a)+o)&&r.hasClass("mouse-accessed")&&(r.removeClass("mouse-accessed"),Y.off("mousemove.rightOffsetCheck",za),r.css({transform:""}).removeClass("open"),u.removeClass("style-slide-out-from-right"),q(".slide-out-hover-icon-effect .lines-button").removeClass("unhidden-line").addClass("no-delay"),0==q('#header-outer[data-permanent-transparent="1"]').length&&(0==q('#header-outer[data-remove-fixed="1"]').length&&0==q("body.mobile").length&&it&&0==q("body.mobile").length&&(u.removeClass("no-bg-color"),q("#header-outer header, #header-outer > .cart-outer").removeClass("all-hidden")),0==q('#header-outer[data-remove-fixed="1"]').length&&0==q("body.mobile").length&&it&&(1==w?(Y.off("scroll.headerResizeEffect"),0==ot.scrollTop?(Y.on("scroll.headerResizeEffect",ln),0<q('#header-outer[data-full-width="true"][data-transparent-header="true"]').length&&0<p.length&&1==it&&0<q("#header-outer.pseudo-data-transparent").length&&q('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({padding:"0"},{queue:!1,duration:250,easing:"easeOutCubic"})):Y.on("scroll.headerResizeEffect",dn)):(Y.off("scroll.headerResizeEffectOpaque"),Y.on("scroll.headerResizeEffectOpaque",cn)))))}function Oa(){ot.usingMobileBrowser&&(q(".slide-out-widget-area-toggle a").attr("aria-expanded","false"),s.css({height:"1px",width:"1px"})),r.css({transform:""}).removeClass("open"),u.removeClass("style-slide-out-from-right"),q(".slide-out-hover-icon-effect .lines-button").removeClass("unhidden-line").addClass("no-delay"),0==q('#header-outer[data-permanent-transparent="1"]').length&&(u.removeClass("no-bg-color"),q("#header-outer header").removeClass("all-hidden")),0==q('#header-outer[data-remove-fixed="1"]').length&&0==q("body.mobile").length&&it&&(1==w?(Y.off("scroll.headerResizeEffect"),0==ot.scrollTop?(Y.on("scroll.headerResizeEffect",ln),0<q('#header-outer[data-full-width="true"][data-transparent-header="true"]').length&&0<p.length&&1==it&&0<q("#header-outer.pseudo-data-transparent").length&&q('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({padding:"0"},{queue:!1,duration:250,easing:"easeOutCubic"})):Y.on("scroll.headerResizeEffect",dn)):(Y.off("scroll.headerResizeEffectOpaque"),Y.on("scroll.headerResizeEffectOpaque",cn)))}function Ha(){0<q(".slide-out-from-right-hover.open").length&&(q(".slide-out-widget-area-toggle:not(.std-menu) a").first().addClass("non-human-allowed").trigger("click"),setTimeout(function(){q(".slide-out-widget-area-toggle:not(.std-menu) a").removeClass("non-human-allowed")},100))}function Sa(t){q("#mobile-menu").show(),q("header#top").find("."+t+":not(.std-menu) .lines-button").addClass("close"),0<q("body.material").length&&q("header#top").find("."+t+" a").addClass("menu-push-out"),setTimeout(function(){q("header#top").find("."+t+" > div > a").removeClass("animating")},100)}function Ma(t){q("#mobile-menu").hide(),q("body").find("."+t+":not(.std-menu) .lines-button").removeClass("close"),setTimeout(function(){0<q("body.material").length&&q("header#top ."+t+" a").removeClass("menu-push-out"),q("body").find("."+t+" a").removeClass("animating")},350)}function Aa(){var t;j.on("click",".slide-out-widget-area-toggle:not(.std-menu) a.closed.animating",function(){return!1}),j.on("click",".slide-out-widget-area-toggle:not(.std-menu) a.closed:not(.animating), .nectar-ocm-trigger-open",function(){if(dt.ocmAnimating||"true"==st.animating||0<q(".slide-out-from-right-hover").length)return!1;var t,e=700;return dt.ocmOpen=!0,$a(),u.removeClass("no-transition"),q(this).hasClass("simple-mobile-menu")?(Sa("simple-mobile-menu"),q(this).find("a").addClass("open")):(r.hasClass("slide-out-from-right")?function(){var t=0<p.length&&0==q("body.mobile").length?p.height():0,e=Zt();ot.winW<1e3&&(e=!0);var a=L.nectarOptions&&L.nectarOptions.mobile_header_format&&"centered-menu"===L.nectarOptions.mobile_header_format&&e?"left":"right",e,t;0==q("body.material").length?(q("#slide-out-widget-area .inner").css({height:"auto","min-height":r.height()-25-q(".bottom-meta-wrap").height()}),0<q('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"] .inner > div:first-of-type > .menu > li:first-child').length&&q("#slide-out-widget-area .inner > div:first-of-type > .menu > li:first-child").hasClass("menu-item-has-children")&&q("#slide-out-widget-area .inner > div:first-of-type").css({"margin-top":"50px"}),0==q("#boxed").length&&(q(".container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image, #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title").stop(!0).transition({x:"left"==a||"left"===$?"300px":"-300px"},700,"easeInOutCubic"),e=Zt(),0==q('#header-outer[data-format="centered-logo-between-menu"]').length||e?0==q('#header-outer[data-transparency-option="1"]').length||0<q('#header-outer[data-transparency-option="1"]').length&&0==q('#header-outer[data-full-width="true"]').length||0<q("body.mobile").length?u.stop(!0).css("transform","translateY(0)").transition({x:"left"==a||"left"===$?300+t+"px":"-"+(300+t)+"px"},700,"easeInOutCubic"):u.stop(!0).css("transform","translateY(0)").transition({x:"left"==a||"left"===$?300+t+"px":"-"+(300+t)+"px","background-color":"transparent","border-bottom":"1px solid rgba(255,255,255,0.22)"},700,"easeInOutCubic"):q('#header-outer header#top nav > ul.buttons, body:not(.material) #header-outer:not([data-format="centered-logo-between-menu"]) .cart-outer .cart-menu-wrap').transition({x:"left"==a||"left"===$?"300px":"-300px"},700,"easeInOutCubic")),r.stop(!0).transition({x:"left"==a||"left"===$?t+"px":"-"+t+"px"},700,"easeInOutCubic").addClass("open"),0==q("#boxed").length&&0<q('#header-outer[data-full-width="true"]').length&&!j.hasClass("mobile")&&(u.addClass("highzI"),q("#ascrail2000").addClass("z-index-adj"),0==q('#header-outer[data-format="centered-logo-between-menu"]').length&&0==o&&("left"===$||q("header#top #logo").stop(!0).transition({x:300+t+"px"},700,"easeInOutCubic")),q("header#top .slide-out-widget-area-toggle .lines-button:not(.legacy-double)").addClass("close"),q("body #header-outer nav > ul > li > a").css({"margin-bottom":"0"})),u.addClass("style-slide-out-from-right"),s.css({height:"100%",width:"100%"}).stop(!0).transition({opacity:1},700,"easeInOutCubic",function(){q(".slide-out-widget-area-toggle:not(.std-menu) > div > a").removeClass("animating")}),0==q('#header-outer[data-format="centered-logo-between-menu"]').length?(t=(0<q("#logo img:visible").length?q("#logo img:visible"):q("#logo")).width(),q("header#top nav > .sf-menu").offset().left-t-300<20&&u.addClass("hidden-menu")):u.addClass("hidden-menu-items"),0==q('#header-outer[data-remove-fixed="1"]').length&&1e3<ot.winW&&(1==it&&1==w&&"true"==u.attr("data-transparent-header")?(u.stop(!0).transition({y:"0"},0).addClass("transparent").css("transition","transform"),Y.off("scroll",dn),Y.off("scroll",ln)):1==it&&"true"==u.attr("data-transparent-header")&&(u.addClass("transparent"),Y.off("scroll",cn),Y.off("scroll",hn)))):0<q("body.material").length&&(0<n.length&&0<q(".ocm-effect-wrap #ajax-loading-screen").length&&n.insertBefore(".ocm-effect-wrap"),40<ot.scrollTop&&q('body[data-hhun="1"] #header-secondary-outer').addClass("hidden"),setTimeout(function(){q(".slide-out-widget-area-toggle:not(.std-menu) > div > a").removeClass("animating")},300),q("#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle").addClass("material-open"),0<q('body:not(.mobile) #header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length&&"none"!=q('#header-outer[data-format="centered-menu-bottom-bar"] .span_9').css("display")&&(q("#header-outer:not(.fixed-menu)").css("top",ot.adminBarHeight-ot.scrollTop+"px"),0<c.length&&0<q("#header-outer.fixed-menu").length&&c.css("visibility","hidden")),q("#ajax-content-wrap").css({position:"relative",top:"-"+ot.scrollTop+"px"}),q(".ocm-effect-wrap-inner").css({"padding-top":ot.adminBarHeight}),q("#fp-nav").addClass("material-ocm-open"),dt.materialOffCanvasOpen=!0,j.addClass("material-ocm-open"),j.addClass("nectar-no-flex-height"),q(".ocm-effect-wrap").css({height:ot.winH}),setTimeout(function(){q(".ocm-effect-wrap").addClass("material-ocm-open")},40),q("body > .slide_out_area_close").addClass("follow-body"),q('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').addClass("effect-shown"),q('body[data-hhun="1"]:not(.no-scroll):not(.mobile) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({transition:"none",transform:"translateY("+ot.adminBarHeight+"px)"}),setTimeout(function(){q("body > .slide_out_area_close").addClass("material-ocm-open")},350)),q(L).trigger("nectar-material-ocm-open")}():r.hasClass("fullscreen")?function(){0<q("body.material").length&&q("header#top .slide-out-widget-area-toggle a").addClass("menu-push-out");var t=0,e=0;ot.scrollTop+Y.height()>q(".blurred-wrap").height()&&0==q("#nectar_fullscreen_rows").length&&(q("body,html").stop().animate({scrollTop:q(".blurred-wrap").height()-Y.height()},600,"easeInOutCubic"),t=550,e=200),q("header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)").addClass("close"),setTimeout(function(){q(".blurred-wrap").addClass("blurred")},t),q("#slide-out-widget-area.fullscreen").show().addClass("open"),0==q(".nectar-social.fixed").length&&Yn(),q(".container-wrap").addClass("no-shadow"),u.stop(!0).css("transform","translateY(0)"),setTimeout(function(){q(".off-canvas-menu-container .menu > li").each(function(t){q(this).delay(50*t).transition({y:0,opacity:1},800,"easeOutExpo")}),q("#slide-out-widget-area.fullscreen .widget").each(function(t){q(this).delay(100*t).transition({y:0,opacity:1},800,"easeOutExpo")})},370+e),setTimeout(function(){q("#slide-out-widget-area .off-canvas-social-links").addClass("line-shown"),q("#slide-out-widget-area .off-canvas-social-links li").each(function(t){q(this).delay(50*t).transition({scale:1},400,"easeOutCubic")}),q("#slide-out-widget-area .bottom-text").transition({opacity:.7},400,"easeOutCubic")},750+e),setTimeout(function(){var t=0<q("body.mobile").length?"easeOutCubic":"easeInOutQuint";s.css({height:"100%",width:"100%"}).show().stop(!0).transition({y:"0%"},920,t,function(){q(".slide-out-widget-area-toggle > div > a").removeClass("animating")})},50+e),Ia(),0<q('.mobile #header-outer[data-permanent-transparent="false"]').length&&q(".container-wrap").hasClass("no-scroll")&&q("#ajax-content-wrap").addClass("at-content");var e=u.offset().top-ot.scrollTop+ot.secondaryHeaderHeight;q("#slide-out-widget-area.fullscreen .inner-wrap").css("padding-top",u.outerHeight()+e)}():r.hasClass("fullscreen-alt")||r.hasClass("fullscreen-split")?function(){var t=".fullscreen-alt";r.hasClass("fullscreen-split")&&(t=".fullscreen-split"),0<q("body.material").length&&q("header#top .slide-out-widget-area-toggle a").addClass("menu-push-out"),q("header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)").addClass("close"),".fullscreen-alt"===t?q("#slide-out-widget-area"+t).show().addClass("open"):q("#slide-out-widget-area"+t).addClass("open").removeClass("hidden"),s.addClass("open").removeClass("hidden"),q('body > div[class*="body-border"]').css("z-index","9995"),".fullscreen-alt"===t&&q(".off-canvas-menu-container .menu").transition({y:"0px",opacity:1},0),0==q(".nectar-social.fixed").length&&Yn(),0<q("#header-outer.transparent").length&&0<p.length&&(q(".admin-bar #slide-out-widget-area-bg"+t).css({"padding-top":p.outerHeight(!0)+32+"px"}),q("body:not(.admin-bar) #slide-out-widget-area-bg"+t).css({"padding-top":p.outerHeight(!0)+"px"})),u.stop(!0).css("transform","translateY(0)"),1e3<Y.width()&&0==q('#header-outer[data-format="centered-menu-bottom-bar"].fixed-menu').length&&0==q('body.material #header-outer[data-condense="true"]').length&&"true"==u.attr("data-transparent-header")&&!ot.usingFrontEndEditor&&(0<q("#logo .starting-logo").length||0<q("#logo.no-image").length)&&u.stop(!0).css("transform","translateY(0)").addClass("transparent"),q(".off-canvas-menu-container .clip-wrap").css("transition-duration","0s"),".fullscreen-alt"===t&&(setTimeout(function(){q(".off-canvas-menu-container .menu > li").each(function(t){q(this).delay(50*t).transition({y:0,opacity:1},750,"easeOutCubic").addClass("no-pointer-events")}),setTimeout(function(){q(".off-canvas-menu-container .menu > li").removeClass("no-pointer-events"),q(".off-canvas-menu-container .clip-wrap").css("transition-duration",".45s")},500),q("#slide-out-widget-area.fullscreen-alt .widget").each(function(t){q(this).delay(100*t).transition({y:0,opacity:1},650,"easeOutCubic")})},200),setTimeout(function(){q("#slide-out-widget-area .off-canvas-social-links").addClass("line-shown"),q("#slide-out-widget-area .off-canvas-social-links li").css("opacity","1").each(function(t){q(this).delay(50*t).transition({scale:1},400,"easeOutCubic")}),q("#slide-out-widget-area .bottom-text").transition({opacity:1},600,"easeOutCubic")},200));var e=.4,e;s.hasClass("solid")&&(e=1),s.hasClass("dark")&&(e=.97),s.hasClass("medium")&&(e=.6),s.hasClass("light")&&(e=.4),s.removeClass("no-transition"),".fullscreen-alt"===t&&(s.addClass("padding-removed").css({height:"100%",width:"100%",left:"0",opacity:e}),Ia()),setTimeout(function(){q(".slide-out-widget-area-toggle > div > a").removeClass("animating")},600),0<q('.mobile #header-outer[data-permanent-transparent="false"]').length&&q(".container-wrap").hasClass("no-scroll")&&q("#ajax-content-wrap").addClass("at-content"),".fullscreen-alt"===t?(e=u.offset().top-ot.scrollTop+ot.secondaryHeaderHeight,q("#slide-out-widget-area"+t+" .inner-wrap").css("padding-top",u.outerHeight()+e)):q("#slide-out-widget-area"+t+" .inner-wrap").css("padding-top",u.outerHeight())}():r.hasClass("fullscreen-inline-images")?(t=ot.winW<ot.winH,u.css({"z-index":"9990",transition:"transform 0.3s ease"}),0==q(".nectar-social.fixed").length&&Yn(),0<q("body.material").length&&q("header#top .slide-out-widget-area-toggle a").addClass("menu-push-out"),q("header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)").addClass("close"),q("#slide-out-widget-area.fullscreen-inline-images").addClass("open").removeClass("hidden"),s.addClass("open").removeClass("hidden"),q('body > div[class*="body-border"]').css("z-index","9995"),setTimeout(function(){u.removeClass("side-widget-closed").addClass("side-widget-open"),y||(u.attr("data-transparent-header","true"),u.addClass("lighten-logo")),ot.usingFrontEndEditor||u.stop(!0).css("transform","translateY(0)").addClass("transparent"),0<q("#header-outer.dark-slide.transparent").length&&0==q("#boxed").length&&u.removeClass("dark-slide").addClass("temp-removed-dark-slide"),setTimeout(function(){anime({targets:"#header-outer #top > .container",opacity:[0,1],duration:900,easing:"easeOutQuad"}),u.css({"z-index":"",transition:""})},50)},t?350:425),q(".off-canvas-menu-container .clip-wrap").css("transition-duration","0s"),s.removeClass("no-transition"),setTimeout(function(){q(".slide-out-widget-area-toggle > div > a").removeClass("animating")},600),0<q('.mobile #header-outer[data-permanent-transparent="false"]').length&&q(".container-wrap").hasClass("no-scroll")&&q("#ajax-content-wrap").addClass("at-content"),q("#slide-out-widget-area.fullscreen-inline-images .inner-wrap").css("padding-top",u.outerHeight()),e=1100):0<q("#header-outer #mobile-menu").length&&Sa("slide-out-widget-area-toggle"),dt.ocmAnimating=!0,setTimeout(function(){dt.ocmAnimating=!1},e),0!=q("#header-outer #mobile-menu").length||r.hasClass("fullscreen-inline-images")||(u.removeClass("side-widget-closed").addClass("side-widget-open"),0<q('#header-outer[data-transparency-option="1"]').length&&0==q("#boxed").length&&0<q('#header-outer[data-full-width="true"]').length&&!ot.usingFrontEndEditor&&0==q('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length&&0==q('body.material #header-outer[data-condense="true"]').length&&u.addClass("transparent"),0<q("#header-outer.dark-slide.transparent").length&&0==q("#boxed").length&&0==q("body.material-ocm-open").length&&u.removeClass("dark-slide").addClass("temp-removed-dark-slide")),q(".slide-out-widget-area-toggle:not(.simple-mobile-menu) > div > a").removeClass("closed").addClass("open").attr("aria-expanded","true"),q(".slide-out-widget-area-toggle:not(.simple-mobile-menu) > div > a").addClass("animating")),!1}),j.on("click",".slide-out-widget-area-toggle:not(.std-menu) a.open.animating",function(){return!1}),j.on("click",".slide-out-widget-area-toggle:not(.std-menu) a.open:not(.animating), .nectar-ocm-trigger-open a.open, #slide-out-widget-area .slide_out_area_close, > .slide_out_area_close, #slide-out-widget-area-bg.slide-out-from-right, .material-ocm-open #ajax-content-wrap",function(t){var e,a,t;if(null!=t.originalEvent||0!=q(".slide_out_area_close.non-human-allowed").length||0!=q(".slide-out-widget-area-toggle.mobile-icon a.non-human-allowed").length)return!(dt.ocmAnimating||0<q(".slide-out-widget-area-toggle:not(.std-menu) a.animating").length||(dt.ocmOpen=!1,u.removeClass("no-transition"),0<q(this).parents(".simple-mobile-menu").length?(Ma("simple-mobile-menu"),q(this).removeClass("open")):(q(".slide-out-widget-area-toggle:not(.std-menu):not(.simple-mobile-menu) a").removeClass("open").addClass("closed").attr("aria-expanded","false"),q(".slide-out-widget-area-toggle:not(.simple-mobile-menu):not(.std-menu) a").addClass("animating"),r.hasClass("slide-out-from-right")?0==q("body.material").length?(a=Zt(),ot.winW<1e3&&(a=!0),t=L.nectarOptions&&L.nectarOptions.mobile_header_format&&"centered-menu"===L.nectarOptions.mobile_header_format&&a?"left":"right",q(".container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image,  #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title").stop(!0).transition({x:"0px"},700,"easeInOutCubic"),0<q('#header-outer[data-transparency-option="1"]').length&&0==q("#boxed").length?(a=0<q("#header-outer[data-current-row-bg-color]").length?u.attr("data-current-row-bg-color"):u.attr("data-user-set-bg"),u.stop(!0).transition({x:"0px","background-color":a},700,"easeInOutCubic")):u.stop(!0).transition({x:"0px"},700,"easeInOutCubic"),r.stop(!0).transition({x:"left"==t||"left"===$?"-301px":"301px"},700,"easeInOutCubic").removeClass("open"),0==q("#boxed").length&&0<q('#header-outer[data-full-width="true"]').length&&(u.removeClass("highzI"),q("header#top #logo").stop(!0).transition({x:"0px"},700,"easeInOutCubic"),q(".lines-button").removeClass("close")),0<q('#header-outer[data-format="centered-logo-between-menu"]').length&&q("#header-outer header#top nav > ul.buttons, #header-outer .cart-outer .cart-menu-wrap").stop(!0).transition({x:"0px"},700,"easeInOutCubic"),s.stop(!0).transition({opacity:0},700,"easeInOutCubic",function(){q(".slide-out-widget-area-toggle a").removeClass("animating"),q(this).css({height:"1px",width:"1px"}),0==q('#header-outer[data-remove-fixed="1"]').length&&(u.hasClass("parallax-contained")&&0<ot.scrollTop&&0==q('#header-outer[data-permanent-transparent="1"]').length?u.removeClass("parallax-contained").addClass("detached").removeClass("transparent"):(0==ot.scrollTop&&0<q('body[data-hhun="1"]').length&&0<q('#page-header-bg[data-parallax="1"]').length||0==ot.scrollTop&&0<q('body[data-hhun="1"]').length&&0<q(".parallax_slider_outer").length)&&0<q('#header-outer[data-transparency-option="1"]').length&&u.addClass("transparent")),q(".container-wrap").css("transform","none")}),u.removeClass("style-slide-out-from-right"),0==q('#header-outer[data-remove-fixed="1"]').length&&(1==it&&1==w&&1e3<ot.winW?(Y.off("scroll.headerResizeEffect"),0==ot.scrollTop?(Y.on("scroll.headerResizeEffect",ln),0<q('#header-outer[data-full-width="true"][data-transparent-header="true"]').length&&0<p.length&&1==it&&0<q("#header-outer.pseudo-data-transparent").length&&q('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({padding:"0"},{queue:!1,duration:250,easing:"easeOutCubic"})):Y.on("scroll.headerResizeEffect",dn),u.hasClass("pseudo-data-transparent")&&u.attr("data-transparent-header","false").removeClass("pseudo-data-transparent").removeClass("transparent"),u.css("transition","transform")):1==it&&1e3<ot.winW&&(Y.off("scroll.headerResizeEffectOpaque"),Y.on("scroll.headerResizeEffectOpaque",cn),u.css("transition","transform"),u.hasClass("pseudo-data-transparent")&&u.attr("data-transparent-header","false").removeClass("pseudo-data-transparent").removeClass("transparent")))):0<q("body.material").length&&(r.removeClass("open"),q("#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle").removeClass("material-open"),q(".ocm-effect-wrap, .ocm-effect-wrap-shadow, body > .slide_out_area_close, #fp-nav").removeClass("material-ocm-open"),q("body > .slide_out_area_close").removeClass("follow-body"),setTimeout(function(){q(".slide-out-widget-area-toggle a").removeClass("animating"),j.removeClass("material-ocm-open"),j.removeClass("nectar-no-flex-height"),q(".ocm-effect-wrap").css({height:"100%"}),q(".ocm-effect-wrap-inner").css({"padding-top":"0"}),Y.scrollTop(Math.abs(parseInt(q("#ajax-content-wrap").css("top")))),q("#ajax-content-wrap").css({position:"",top:""}),0<q('#header-outer[data-format="centered-menu-bottom-bar"]').length&&"none"!=q('#header-outer[data-format="centered-menu-bottom-bar"] .span_9').css("display")&&0==q("body.mobile").length&&(q("#header-outer:not(.fixed-menu)").css("top",""),c.css("visibility","")),q('body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({transform:""}),setTimeout(function(){q('body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({transition:""})},30),q('body[data-hhun="1"] #header-secondary-outer.hidden').removeClass("hidden"),dt.materialOffCanvasOpen=!1,q(L).trigger("nectar-material-ocm-close")},900),setTimeout(function(){q('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').addClass("no-trans").removeClass("effect-shown")},200),setTimeout(function(){q('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').removeClass("no-trans")},500)):r.hasClass("fullscreen")?(0<q("body.material").length&&setTimeout(function(){q("header#top .slide-out-widget-area-toggle a").removeClass("menu-push-out")},350),q(".slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)").removeClass("close"),q(".blurred-wrap").removeClass("blurred"),q("#slide-out-widget-area.fullscreen").transition({opacity:0},700,"easeOutQuad",function(){q("#slide-out-widget-area.fullscreen").hide().css("opacity","1")}).removeClass("open"),q("#slide-out-widget-area.fullscreen .widget").transition({opacity:0},700,"easeOutQuad",function(){q(this).transition({y:"110px"},0)}),setTimeout(function(){q(".off-canvas-menu-container .menu > li").transition({y:"80px",opacity:0},0),q("#slide-out-widget-area .off-canvas-social-links li").transition({scale:0},0),q("#slide-out-widget-area .off-canvas-social-links").removeClass("line-shown"),q("#slide-out-widget-area .bottom-text").transition({opacity:0},0),q("#slide-out-widget-area .menuwrapper .menu").removeClass("subview"),q("#slide-out-widget-area .menuwrapper .menu li").removeClass("subview subviewopen"),q("#slide-out-widget-area.fullscreen .inner .menu-wrap").css("height","auto")},800),setTimeout(function(){0==q(".nectar-social.fixed").length&&Ln(),q(".container-wrap").removeClass("no-shadow")},500),s.stop(!0).transition({opacity:0},900,"easeOutQuad",function(){0<q('.mobile #header-outer[data-permanent-transparent="false"]').length&&q(".container-wrap").hasClass("no-scroll")&&q("#ajax-content-wrap").removeClass("at-content"),0==q('.mobile #header-outer[data-permanent-transparent="false"]').length&&q("#slide-out-widget-area.fullscreen .inner-wrap").css("padding-top","0"),q(".slide-out-widget-area-toggle a").removeClass("animating");var t=.4;s.hasClass("solid")&&(t=1),s.hasClass("dark")&&(t=.93),s.hasClass("medium")&&(t=.6),s.hasClass("light")&&(t=.4),q(this).css({height:"1px",width:"1px",opacity:t}).transition({y:"-100%"},0)})):r.hasClass("fullscreen-alt")||r.hasClass("fullscreen-split")||r.hasClass("fullscreen-inline-images")?(e=".fullscreen-alt",r.hasClass("fullscreen-inline-images")?(e=".fullscreen-inline-images",u.css({"z-index":"9990",transition:"transform 0.3s ease"}),setTimeout(function(){u.css({"z-index":"",transition:""})},450),y||(u.removeClass("lighten-logo"),u.attr("data-transparent-header","").removeClass("transparent"))):r.hasClass("fullscreen-split")&&(e=".fullscreen-split"),0<q("body.material").length&&setTimeout(function(){q("header#top .slide-out-widget-area-toggle a").removeClass("menu-push-out")},350),q(".slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)").removeClass("close"),s.removeClass("open"),".fullscreen-split"!==e&&".fullscreen-inline-images"!==e||setTimeout(function(){s.addClass("hidden"),q("#slide-out-widget-area"+e).addClass("hidden")},550),".fullscreen-alt"===e&&(q(".blurred-wrap").removeClass("blurred"),q("#slide-out-widget-area.fullscreen-alt .widget").transition({opacity:0},500,"easeOutQuad",function(){q(this).transition({y:"40px"},0)}),q("#slide-out-widget-area .bottom-text, #slide-out-widget-area .off-canvas-social-links li").transition({opacity:0},250,"easeOutQuad"),q("#slide-out-widget-area .off-canvas-social-links").removeClass("line-shown"),q(".off-canvas-menu-container .menu").transition({y:"-13px",opacity:0},400)),setTimeout(function(){".fullscreen-alt"===e&&(q(".off-canvas-menu-container .menu > li").stop(!0,!0).transition({y:"40px",opacity:0},0),q("#slide-out-widget-area .off-canvas-social-links li").transition({scale:0},0),q("#slide-out-widget-area .off-canvas-social-links").removeClass("line-shown"),q("#slide-out-widget-area .menuwrapper .menu").removeClass("subview"),q("#slide-out-widget-area .menuwrapper .menu li").removeClass("subview subviewopen"),q("#slide-out-widget-area.fullscreen-alt .inner .menu-wrap").css("height","auto"),s.css({height:"1px",width:"1px",left:"-100%"})),0<q('.mobile #header-outer[data-permanent-transparent="false"]').length&&q(".container-wrap").hasClass("no-scroll")&&q("#ajax-content-wrap").removeClass("at-content"),0==q('.mobile #header-outer[data-permanent-transparent="false"]').length&&q("#slide-out-widget-area"+e+" .inner-wrap").css("padding-top","0"),q(".slide-out-widget-area-toggle a").removeClass("animating"),".fullscreen-alt"===e&&q("#slide-out-widget-area"+e).hide().removeClass("open")},550),".fullscreen-split"!==e&&".fullscreen-inline-images"!==e||q("#slide-out-widget-area"+e).removeClass("open"),setTimeout(function(){0==q(".nectar-social.fixed").length&&Ln()},600),setTimeout(function(){s.removeClass("padding-removed")},50),setTimeout(function(){".fullscreen-alt"===e&&s.stop(!0).css({opacity:0}),0<q('#header-outer[data-transparent-header="true"]').length&&q('body > div[class*="body-border"]').css("z-index","10000")},1==it?150:50),setTimeout(function(){q('#header-outer:not([data-permanent-transparent="1"]).transparent.small-nav, body[data-hhun="1"] #header-outer:not([data-permanent-transparent="1"]).transparent.scrolling, #header-outer:not([data-permanent-transparent="1"]).transparent.scrolled-down').removeClass("transparent"),u.hasClass("pseudo-data-transparent")&&u.attr("data-transparent-header","false").removeClass("pseudo-data-transparent").removeClass("transparent")},".fullscreen-inline-images"==e?0:100)):0<q("#header-outer #mobile-menu").length&&Ma("slide-out-widget-area-toggle"),0==q("#header-outer #mobile-menu").length&&(0<q("#header-outer.temp-removed-dark-slide.transparent").length&&0==q("#boxed").length&&u.removeClass("temp-removed-dark-slide").addClass("dark-slide"),0==q('#header-outer[data-permanent-transparent="1"]').length&&0==q("#slide-out-widget-area.fullscreen-alt").length&&(0==q(".nectar-box-roll").length?(0<q("#header-outer.small-nav").length||0<q("#header-outer.scrolled-down").length)&&u.removeClass("transparent"):(0<q("#header-outer.small-nav").length||0<q("#header-outer.scrolled-down").length||0<q(".container-wrap.auto-height").length)&&u.removeClass("transparent")),u.removeClass("hidden-menu"),u.removeClass("side-widget-open").addClass("side-widget-closed"))),1))}),r.hasClass("fullscreen-inline-images")&&(t=q('#slide-out-widget-area .off-canvas-menu-container .menu > li[class*="current"][id]').attr("id"),0<q(".nectar-ocm-image."+t).length&&(q(".nectar-ocm-image.default").remove(),q(".nectar-ocm-image."+t).addClass("current")),q("#slide-out-widget-area .off-canvas-menu-container li[id]").on("mouseenter",function(){var t=q(this).attr("id");q(".nectar-ocm-image."+t).addClass("active"),0<q(".nectar-ocm-image."+t).length&&q(".nectar-ocm-image.current:not(.active)").addClass("hidden")}),q("#slide-out-widget-area .off-canvas-menu-container li").on("mouseleave",function(){q(".nectar-ocm-image.active").removeClass("active"),q(".nectar-ocm-image.current").removeClass("hidden")}))}function Wa(){var t;0<q("#slide-out-widget-area.slide-out-from-right-hover").length?(0==q("#ajax-content-wrap > .slide-out-widget-area-toggle").length&&(t=0<q('.slide-out-widget-area-toggle[data-custom-color="true"]').length?"#slide-out-widget-area > div":"#slide-out-widget-area",q('<div class="slide-out-widget-area-toggle slide-out-hover-icon-effect" data-icon-animation="simple-transform"><div> <a href="#sidewidgetarea" class="closed"> <span> <i class="lines-button x2"> <i class="lines"></i> </i> </span> </a> </div> </div>').insertAfter(t),(0<q('#header-outer[data-has-menu="true"]').length||0<q('body[data-header-search="true"]').length||0<q(".slide-out-widget-area-toggle a.using-label").length||0<q('.slide-out-widget-area-toggle[data-custom-color="true"]').length)&&q(".slide-out-widget-area-toggle").addClass("small")),ot.usingMobileBrowser?(j.on("click",".slide-out-widget-area-toggle:not(.std-menu) a",Ea),j.on("click","#slide-out-widget-area-bg",Ha)):(j.on("mouseenter","#header-outer .slide-out-widget-area-toggle:not(.std-menu) a",Ea),r.on("mouseenter",function(){q(this).addClass("mouse-accessed")})),Y.on("smartresize",_a)):(Aa(),0!=q("#header-outer #mobile-menu").length&&(q("#header-outer #mobile-menu li.megamenu").removeClass("megamenu"),q("#header-outer #mobile-menu ul li a").each(function(){q(this).hasClass("nectar-widget-link")||0!=q(this).find(".nectar-ext-menu-item").length||q(this).wrapInner("<span></span>")}),q("#header-outer #mobile-menu ul li").each(function(){0<q(this).find("> ul").length&&q(this).find("> a").append('<span class="sf-sub-indicator"><i class="fa fa-angle-down"></i></span>')}),q("#header-outer #mobile-menu .sf-sub-indicator").on("click",function(){var t=q(this).parent().parent();return t.toggleClass("current-open-item"),t.hasClass("current-open-item")?(t.find("> ul").show(),setTimeout(function(){t.addClass("visible")},30)):(t.find("ul").hide(),t.find("li").removeClass("visible").removeClass("current-open-item"),t.removeClass("visible")),!1}),Y.on("smartresize",function(){(1e3<ot.winW&&0<q(".slide-out-widget-area-toggle.mobile-icon a.open").length||1e3<ot.winW&&0<q(".nectar-ocm-trigger-open.simple-mobile-menu a.open").length)&&(q(".slide-out-widget-area-toggle.mobile-icon a, .nectar-ocm-trigger-open.simple-mobile-menu a").addClass("non-human-allowed"),q(".slide-out-widget-area-toggle.mobile-icon a.open, .nectar-ocm-trigger-open.simple-mobile-menu a.open").trigger("click"),setTimeout(function(){q(".slide-out-widget-area-toggle.mobile-icon a, .nectar-ocm-trigger-open.simple-mobile-menu a").removeClass("non-human-allowed")},100))}))),q("#slide-out-widget-area").hasClass("fullscreen-inline-images")&&0==q(".off-canvas-menu-container .menu > li > a span.wrap").length&&q(".off-canvas-menu-container .menu > li a").wrapInner('<span class="wrap"></span>'),0==q("#slide-out-widget-area.fullscreen-split").length&&0==q('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length&&0==q('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length?function(){q("#slide-out-widget-area .off-canvas-menu-container .menu").wrap('<div class="menu-wrap menuwrapper" />'),q("#slide-out-widget-area .off-canvas-menu-container .menu").addClass("menuopen");var t=0<q("#slide-out-widget-area.fullscreen-alt").length||0<q("#slide-out-widget-area.fullscreen-inline-images").length?"4":"5";q("#slide-out-widget-area .off-canvas-menu-container .menu-wrap").dlmenu({animationClasses:{classin:"dl-animate-in-"+t,classout:"dl-animate-out-"+t}})}():0<q('body.using-mobile-browser[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length&&q('body #slide-out-widget-area .inner .off-canvas-menu-container li a[href*="#"]').on("click",function(){"#"!=q(this).attr("href")&&qa(q(this).parent())}),0<q("#nectar_fullscreen_rows").length&&(0<q('body[data-slide-out-widget-area-style*="fullscreen"]').length||0<q('body[data-slide-out-widget-area-style="slide-out-from-right"]:not(.material)').length)&&q("body #slide-out-widget-area .inner .off-canvas-menu-container li a[href]").on("click",function(){var t=q(this).is('[href*="#"]')?q(this).attr("href"):"";"#"!=t&&0<q('div[data-fullscreen-anchor-id="'+t.substr(t.indexOf("#")+1)+'"]').length&&(setTimeout(function(){q("#slide-out-widget-area .slide_out_area_close").addClass("non-human-allowed").trigger("click")},100),setTimeout(function(){q("#slide-out-widget-area .slide_out_area_close").removeClass("non-human-allowed")},150))}),j.on("mouseover","#slide-out-widget-area .off-canvas-menu-container .menuwrapper > .sub-menu li > a",function(){var t=q(this).text();q(".off-canvas-menu-container .menuwrapper .menu li > a").removeClass("hovered"),q(".off-canvas-menu-container .menuwrapper .menu li > a:contains("+t+")").addClass("hovered")}),j.on("mouseover",".off-canvas-menu-container .menuwrapper .menu li > a",function(){q(".off-canvas-menu-container .menuwrapper .menu li > a").removeClass("hovered")}),r.hasClass("fullscreen-inline-images")||setTimeout(Fa,500),ot.usingMobileBrowser&&r.addClass("mobile")}function Fa(){r.mousewheel(function(t,e){this.scrollTop-=t.deltaY*t.deltaFactor/1.5,t.preventDefault()})}function qa(t){0<q("#slide-out-widget-area.open").length&&(L.location.href.split("#")[0]==t.find("> a").attr("href").split("#")[0]||0<t.find('a[href^="#"]').length)&&(0<t.parents(".slide-out-from-right-hover").length?q(".slide-out-widget-area-toggle.slide-out-hover-icon-effect a"):q(".slide-out-widget-area-toggle a")).trigger("click")}function La(){var t,t,e,n,a,t,t;0<!q('#header-outer[data-format="left-header"]').length&&0<!q('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length&&0<!q("#slide-out-widget-area.fullscreen-split").length&&0<!q('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length||(q('#header-outer[data-format="left-header"] nav li.megamenu').removeClass("nectar-megamenu-menu-item").removeClass("megamenu"),t=0<q('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length?"#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children > .ocm-dropdown-arrow":'body.material #slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children > a, #slide-out-widget-area.fullscreen-split .off-canvas-menu-container li.menu-item-has-children > a',e='#header-outer[data-format="left-header"] nav li.menu-item-has-children > a',n=L.nectarOptions&&L.nectarOptions.left_header_dropdown_func?L.nectarOptions.left_header_dropdown_func:"default",q((e="separate-dropdown-parent-link"===n?'#header-outer[data-format="left-header"] nav li.menu-item-has-children > a .sf-sub-indicator':e)+", "+t).on("click",function(){var t=q(this).parent(),e,a;return(t="separate-dropdown-parent-link"===n?q(this).closest(".menu-item"):t).hasClass("open-submenu")?(t.find(".sub-menu").css({"max-height":"0"}),t.removeClass("open-submenu")):(a=q(this),t.find("> .sub-menu").addClass("no-trans"),setTimeout(function(){t.find("> .sub-menu").css({"max-height":"none",position:"absolute",visibility:"hidden"}),e=t.find("> .sub-menu").height(),t.find("> .sub-menu").removeClass("no-trans"),t.find("> .sub-menu").css({"max-height":"0",position:"relative",visibility:"visible"})},25),setTimeout(function(){a.closest("ul").find("li.menu-item-has-children").removeClass("open-submenu"),a.closest("ul").find("li.menu-item-has-children > .sub-menu").css({"max-height":"0"}),t.addClass("open-submenu"),t.find("> .sub-menu").css("max-height",e),0<a.parents("ul").length&&a.parents("ul:not(.sf-menu)").each(function(){q(this).css("max-height"),q(this).css("max-height",parseInt(q(this).height()+2*parseInt(q(this).css("padding-top"))+e)+"px")})},50)),!1}),0<(a=q('#header-outer[data-format="left-header"] nav .sf-menu > .current-menu-ancestor.menu-item-has-children')).length&&0<a.find(".current-menu-item").length&&(a.find("ul").css("transition","none"),t=a.find(".current-menu-item").parents(".current-menu-ancestor.menu-item-has-children"),t=Array.from(t),"separate-dropdown-parent-link"===n?t.reverse().forEach(function(t){q(t).find("> a .sf-sub-indicator").trigger("click")}):t.reverse().forEach(function(t){q(t).find("> a").trigger("click")}),setTimeout(function(){a.find("ul").css("transition","")},100)))}ie.prototype.setup=function(){var e=this;this.$el.find(".dynamic-words > span").each(function(t){e.words[t]=q(this)}),this.viewportTracking(),this.$el.hasClass("element_stagger_words")?(this.staggerWaypoint(),q(L).on("nectar-waypoints-reinit nectar-tab-changed",this.staggerWaypoint.bind(this))):(clearInterval(this.interval),this.interval=setInterval(this.sequence.bind(this),this.duration)),ot.usingMobileBrowser?L.addEventListener("orientationchange",this.calcWidth.bind(this)):q(L).on("resize",this.calcWidth.bind(this))},ie.prototype.viewportTracking=function(){var e=this;"IntersectionObserver"in L?(this.observer=new IntersectionObserver(function(t){t.forEach(function(t){t.isIntersecting?e.state.visible=!0:e.state.visible=!1})},{rootMargin:"0px",threshold:0}),this.observer.observe(this.$el[0])):this.state.visible=!0},ie.prototype.calcWidth=function(){var t=this,e=this.$el.find(".dynamic-words").width();this.$el.find(".dynamic-words").css({width:""});var a=this.words[this.state.activeIndex].find("span").width();this.$el.find(".dynamic-words").css({width:e}),setTimeout(function(){t.$el.find(".dynamic-words").css({width:a})},30)},ie.prototype.sequence=function(){if(this.$el.find(".dynamic-words > span").length<2||0==this.state.visible)return!0;var t,e;this.state.activeIndex=(t=this.words.length,0<=(e=this.state.activeIndex+1)?e%t:(e%t+t)%t),this.calcWidth(),this.$el.find(".dynamic-words > span").removeClass("active"),this.words[this.state.activeIndex].addClass("active")},ie.prototype.staggerWaypoint=function(){var t=this;if(1==nt&&0==this.$el.parents(".active").length)return!0;var a=q(this).hasClass("animated-in")?" animated":"";this.$el.find(".beginning-text, .ending-text").each(function(){var t,t=(t=(t=q(this).text()).trim()).split(" ");q(this)[0].innerHTML="";for(var e=0;e<t.length;e++)q(this)[0].innerHTML+='<span class="text-wrap"><span class="inner'+a+'">'+t[e]+"</span></span> "}),this.$el.hasClass("animated-in")&&this.$el.find(".beginning-text .inner, .ending-text .inner").css({transform:"translateY(0)"}),this.$el.addClass("markup-generated");var e=1==nt?"500%":"bottom-in-view",n=this.$el,i=n.is("[data-delay]")?parseInt(n.attr("data-delay")):0,s=new Waypoint({element:n[0],handler:function(){0<n.parents(".wpb_tab").length&&"hidden"==n.parents(".wpb_tab").css("visibility")||n.hasClass("animated-in")||((!k||0<q('body[data-responsive="0"]').length)&&setTimeout(function(){var e=0,e=500/n.find(".text-wrap").length;e=Math.min(Math.max(e,15),50),parseInt(C);var a=0;n.find(".text-wrap").each(function(){var t=q(this);if(0<q(this).parents(".dynamic-words").length&&!q(this).hasClass("active"))return t.find("> span").css({transform:"translate3d(0,0,0)"}),!0;setTimeout(function(){t.find("> span").css({transform:"translate3d(0,0,0)"})},a*e),a++}),n.addClass("animated-in")},i),1!=t.state.sequenceStarted&&(clearInterval(t.interval),t.interval=setInterval(t.sequence.bind(t),t.duration)),t.state.sequenceStarted=!0),s.destroy()},offset:e})},le.prototype.events=function(){var a=this;"single_link"==this.linkFunc&&(q(L).on("resize",this.setVertCenter.bind(this)),this.setVertCenter(),this.$el.find(".wpb_tabs_nav li").on("click",function(t){var e;ot.winW<1e3&&(e=a.$el.find(".wpb_tabs_nav"),void 0!==t.originalEvent&&(a.$el.find(".scrolling-tab-nav .scrolling-tab-nav-current-item").toggleClass("open"),e.toggle(),Ee()),a.$el.find(".scrolling-tab-nav li").removeClass("active"),q(this).addClass("active"),a.updateActiveTitle())}))},le.prototype.setVertCenter=function(){var t=(ot.winH-this.$el.find(".scrolling-tab-nav").height())/2;T.documentElement.style.setProperty("--nectar-sticky-tabs-vert-y",t+"px")},le.prototype.updateActiveTitle=function(){var t=this.$el.find(".scrolling-tab-nav .scrolling-tab-nav-current-item"),e=this.$el.find(".scrolling-tab-nav .menu-item.active .tab-nav-heading").clone(),a=this.$el.find(".scrolling-tab-nav .menu-item.active").index();this.$el.find(".scrolling-tab-content > div").removeClass("active"),this.$el.find(".scrolling-tab-content > div:eq("+a+")").addClass("active"),this.$el.find(".scrolling-tab-nav .scrolling-tab-nav-total .inner").css("transform","translateY(-"+100*a+"%)"),t.html(e)},le.prototype.domSetup=function(){var a=this,n="";this.$el.find(".wpb_tab").each(function(t){var e;q(this).is("[data-tab-icon]")&&0<q(this).attr("data-tab-icon").length&&0===q(this).find(".im-icon-wrap.tab-icon").length&&(a.$el.addClass("using-icons"),n=a.$el.find(".wpb_tabs_nav li:nth-child("+(t+1)+") a").attr("href"),a.$el.find(".wpb_tabs_nav li:nth-child("+(t+1)+")").addClass("has-icon").prepend('<a class="skip-hash" href="'+n+'"><i class="'+q(this).attr("data-tab-icon")+'"></i></a>')),0<q(this).find(".im-icon-wrap.tab-icon").length&&(n=a.$el.find(".wpb_tabs_nav li:nth-child("+(t+1)+") a").attr("href"),e=q(this).find(".im-icon-wrap.tab-icon").detach(),a.$el.find(".wpb_tabs_nav li:nth-child("+(t+1)+")").addClass("has-icon").prepend('<a class="skip-hash svg-icon-link" href="'+n+'"></a>'),a.$el.find(".wpb_tabs_nav li:nth-child("+(t+1)+") .svg-icon-link").append(e))}),this.$el.find(".scrolling-tab-nav .menu-item:first").addClass("active"),this.lineAnimation(),"single_link"==a.linkFunc&&this.updateActiveTitle(),1==this.$el.find(".scrolling-tab-nav .menu-item").length&&this.$el.find(".scrolling-tab-nav").addClass("single-tab");var i=this.$el.find(".scrolling-tab-content");this.$el.find(".scrolling-tab-nav .menu-item").each(function(t){var e=i.find("> div:nth-child("+(t+=1)+")"),t,t,t;"default"==a.linkFunc&&(t=q(this).html(),e.prepend('<div class="scrolling-tab-mobile-title"><div class="inner">'+Vt(t)+"</div></div>"),e.find(".scrolling-tab-mobile-title a").contents().unwrap(),e&&(t=(t=q(this).find("a").attr("href")).substr(1),e.find("> .scrolling-tab-mobile-title").attr("id",t),e.removeAttr("id")))}),this.$el.addClass("initalized")},le.prototype.highlightObserve=function(){var a=this,t;!(ot.usingMobileBrowser&&ot.winW<1e3)&&"IntersectionObserver"in L&&(t={rootMargin:u.is('[data-remove-fixed="1"]')?"100px 0px 0px 0px":"5px 0px 0px 0px",threshold:1},this.observer=new IntersectionObserver(function(t){t.forEach(function(t){var e="#"+q(t.target).attr("id"),e=a.$el.find('.scrolling-tab-nav a[href="'+e+'"]');t.isIntersecting&&1<=t.intersectionRatio?e.parents(".menu-item").addClass("visible"):e.parents(".menu-item").removeClass("visible");var e=a.$el.find(".scrolling-tab-nav .menu-item.visible:first");0<e.length&&(a.$el.find(".scrolling-tab-nav .menu-item").removeClass("active"),e.addClass("active"),a.lineAnimation())})},t),this.$tabContent.find("> div > .scrolling-tab-mobile-title[id]").each(function(){a.observer.observe(q(this)[0])}),this.tabs=Array.from(this.$tabContent.find("> div")),this.scrollDir="up",this.prevScroll=0,this.prevIndex=0,this.observer=new IntersectionObserver(function(t){t.forEach(function(t){var e,e;ot.winW<1e3||(ot.scrollTop>a.prevScroll?a.scrollDir="down":a.scrollDir="up",e="down"===a.scrollDir?a.getTargetSection(t):t.target,a.shouldUpdate(t)&&((e=q(e).index())<a.prevIndex?a.$el.addClass("scrolling-up"):a.$el.removeClass("scrolling-up"),a.$el.find(".scrolling-tab-nav .ui-tabs-nav > .menu-item").removeClass("prev-active"),a.$el.find(".scrolling-tab-nav .ui-tabs-nav > .menu-item.active").addClass("prev-active"),a.$el.find(".scrolling-tab-nav .ui-tabs-nav > .menu-item").removeClass("active"),a.$el.find(".scrolling-tab-nav .ui-tabs-nav > .menu-item:eq("+e+")").addClass("active"),a.updateActiveTitle(),a.prevIndex=e),a.prevScroll=ot.scrollTop)})},{rootMargin:"-40% 0% -40% 0%",threshold:0}),this.$tabContent.find("> div").each(function(){a.observer.observe(q(this)[0])}))},le.prototype.getTargetSection=function(e){var t=this.tabs.findIndex(function(t){return t==e.target});return t>=this.tabs.length-1?e.target:this.tabs[t+1]},le.prototype.shouldUpdate=function(t){return"down"===this.scrollDir&&!t.isIntersecting&&0!=this.prevScroll||!("up"!==this.scrollDir||!t.isIntersecting||0==this.prevScroll)},le.prototype.lineAnimation=function(){var t=this.$el.find(".scrolling-tab-nav .active"),e,t;0!=t.length&&(e=parseInt(t.position().top),t=parseInt(t.height()),this.$lineEl.css({"max-height":t+"px",transform:"translate3d(0px, "+e+"px, 0px)"}))},ue.prototype.calcTopOffset=function(){this.topOffset=(ot.winH-this.$innerEl.height())/2},ue.prototype.resizeEvent=function(){1e3<ot.winW?(this.calcTopOffset(),this.$innerEl.css({top:this.topOffset})):this.$innerEl.css({top:""})},$e.prototype.setType=function(){this.$element.is("[data-scroll-animation-movement]")&&"transform_x"==this.$element.attr("data-scroll-animation-movement")&&(this.type="translateX")},$e.prototype.calculatePos=function(){1!=dt.materialOffCanvasOpen&&1!=dt.ocmAnimating&&(this.offsetTop=this.$element.offset().top,this.height=this.$element.outerHeight(),this.vertCenter=this.storedWinH/2-this.height/2),ot.usingMobileBrowser||(this.storedWinH=ot.winH)},$e.prototype.orientationChange=function(){ot.usingMobileBrowser&&(this.offsetTop=this.$element.offset().top,this.height=this.$element.outerHeight(),this.storedWinH=ot.winH)},$e.prototype.trackView=function(){var e=this;0<this.$element.parents(".top-level").length&&(this.topLevel=!0,this.offsetTop>ot.winH&&(this.topLevel=!1)),"IntersectionObserver"in L&&new IntersectionObserver(function(t){t.forEach(function(t){var t=t.isIntersecting;e.inView=!!t})},{rootMargin:"250px"}).observe(this.$element[0])},$e.prototype.animate=function(){var t;1!=dt.materialOffCanvasOpen&&(this.lastY=parseInt(Pt(this.lastY,ot.scrollTop,this.lerp)),1==dt.animatedScrolling&&(this.inView=!0),this.inView&&(t=this.intensity,ot.winW<1025&&(t/=1.2),ot.winW<690&&(t/=1.35),!0===this.topLevel&&1e3<ot.winW||!0===this.topLevel&&this.persistOnMobile?this.$elementInner[0].style.transform=this.type+"("+-this.lastY*t+"px) translateZ(0)":1e3<ot.winW||this.persistOnMobile?this.$elementInner[0].style.transform=this.type+"("+-(this.lastY-this.offsetTop+this.vertCenter)*t+"px) translateZ(0)":this.$elementInner[0].style.transform=this.type+"(0px) translateZ(0)")),L.requestAnimationFrame(this.animate.bind(this))},Ie.prototype.setup=function(){var t=this;(0<this.$el.parents("#page-header-bg").length||0<this.$el.parents(".featured-media-under-header").length)&&(this.type="page-header"),(0<this.$el.parents(".top-level").length&&0<this.$el.parents(".parallax_slider_outer").length||0<this.$el.parents(".top-level").length&&this.$el.hasClass("nectar-simple-slider")||0<this.$el.parents(".top-level").length&&this.$el.hasClass("nectar-recent-posts-single_featured")||0<this.$el.parents(".top-level").length&&this.$el.hasClass("column-image-bg-wrap")&&this.$el.parent().parent().is(".vc_col-sm-12:not(.child_column)")||this.$el.is(".wpb_row.top-level")||"page-header"==this.type||0==q(".wpb_row").length)&&(this.firstSection=!0),(0==q(".wpb_row").length&&0<this.$el.parents(".parallax_slider_outer").length&&this.$el.is('[data-full-width="true"]')||0<q("#portfolio-extra").length&&0<this.$el.parents(".parallax_slider_outer").length&&0<this.$el.parents(".wpb_row").length&&"0"==this.$el.parents(".wpb_row").index())&&(this.firstSection=!0),ot.usingFrontEndEditor&&"page-header"!=this.type&&(this.firstSection=!1),this.$parallaxEl.addClass("translate"),0==this.$parallaxEl.parents('[data-scroll-animation="true"]').length&&setInterval(function(){1!=dt.materialOffCanvasOpen&&1!=dt.ocmAnimating&&(t.offsetTop=t.$el.offset().top,t.height=t.$el.outerHeight(!0))},800),q(L).on("nectar-column-animation-start",this.checkColumnAnimation.bind(this)),q(L).on("resize load",this.resize.bind(this)),L.addEventListener("orientationchange",function(){this.setTimeout(function(){t.orientationChange()},110)})},Ie.prototype.checkColumnAnimation=function(){0<this.$parallaxEl.parents(".col.has-animation.triggered-animation:not(.animated-in)").length&&this.realtimeOffsetUpdate()},Ie.prototype.realtimeOffsetUpdate=function(){var t=this,e=setInterval(function(){1!=dt.materialOffCanvasOpen&&(t.offsetTop=t.$el.offset().top,t.height=t.$el.outerHeight(!0))},30);setTimeout(function(){clearInterval(e)},2e3)},Ie.prototype.resize=function(){this.offsetTop=this.$el.offset().top,this.height=this.$el.outerHeight(!0),ot.usingMobileBrowser||(this.storedWinH=ot.winH)},Ie.prototype.orientationChange=function(){ot.usingMobileBrowser&&(this.offsetTop=this.$el.offset().top,this.height=this.$el.outerHeight(!0),this.storedWinH=ot.winH)},Ie.prototype.update=function(){if(this.offsetTop+150+this.height<ot.scrollTop||this.offsetTop-150>ot.scrollTop+this.storedWinH||1==dt.materialOffCanvasOpen){for(var t=0;t<this.$parallaxEl.length;t++)this.$parallaxEl[t].style.willChange="auto";requestAnimationFrame(this.update.bind(this))}else{for(t=0;t<this.$parallaxEl.length;t++)!0===this.firstSection?this.$parallaxEl[t].style.transform="translate3d(0, "+parseInt(ot.scrollTop*this.speed)+"px, 0)":this.$parallaxEl[t].style.transform="translate3d(0, "+parseInt((this.storedWinH+ot.scrollTop-this.offsetTop)*this.speed)+"px, 0) scale(1.005)",this.$parallaxEl[t].style.willChange="transform";requestAnimationFrame(this.update.bind(this))}},Be.prototype.calculatePos=function(){1!=dt.materialOffCanvasOpen&&1!=dt.ocmAnimating&&(this.offsetTop=this.$element.offset().top,this.height=this.$element.outerHeight(),this.vertCenter=ot.winH/2-this.height/2)},Be.prototype.trackView=function(){var e=this;0<this.$element.parents(".top-level").length&&(this.topLevel=!0),"IntersectionObserver"in L&&new IntersectionObserver(function(t){t.forEach(function(t){var t=t.isIntersecting;e.inView=!!t})},{rootMargin:"250px"}).observe(this.$element[0])},Be.prototype.animate=function(){var a;1!=dt.materialOffCanvasOpen&&(1==dt.animatedScrolling&&(this.inView=!0),this.lastY=Pt(this.lastY,ot.scrollTop,.2),this.inView&&(a=this).$element.find(".bg-layer").each(function(t){var e=q(this).data("scale");a.layer1Parallax&&(t=t/1.5+1),!0===a.topLevel&&1e3<ot.winW?q(this)[0].style.transform="translateY("+-a.lastY*a.intensity*t+"px) translateZ(0) scale("+e+")":q(this)[0].style.transform="translateY("+-(a.lastY-a.offsetTop+a.vertCenter)*a.intensity*t+"px) translateZ(0) scale("+e+")"})),L.requestAnimationFrame(this.animate.bind(this))},q(L).on("salient-lazyloading-image-reinit",Ue),ta.prototype.initialMarkup=function(){0==this.el.find(".nectar-post-grid-filters a.active").length&&this.el.find(".nectar-post-grid-filters a:first-child").addClass("active"),"load-more"===this.settingsData.pagination&&0==this.el.find(".load-more-wrap").length&&(0<this.el.find(".active.all-filter").length&&(this.activeFilter=this.el.find(".active.all-filter").index()+1),this.activeCatTotal=parseInt(this.el.find(".nectar-post-grid-filters a:nth-child("+this.activeFilter+")").attr("data-total-count")),this.el.find(".nectar-post-grid-item").length>=this.activeCatTotal?(this.el.addClass("all-loaded"),this.el.append('<div class="load-more-wrap inactive"><a href="#" class="load-more">'+this.el.attr("data-load-more-text")+"</a></div>")):(this.el.removeClass("all-loaded"),this.el.append('<div class="load-more-wrap"><a href="#" class="load-more">'+this.el.attr("data-load-more-text")+"</a></div>")))},ta.prototype.lightboxGroups=function(){var t=Dt(),e=0<this.el.find(".nectar-post-grid-link.pretty_photo").length;0<q('body[data-ls="magnific"]').length?this.el.find(".nectar-post-grid-link.pretty_photo").addClass("magnific").addClass("gallery").removeClass("pretty_photo"):0<q('body[data-ls="fancybox"]').length&&(this.el.find(".nectar-post-grid-link.pretty_photo").attr("data-fancybox","group_"+t).removeClass("pretty_photo"),this.el.find(".nectar-post-grid-link[data-fancybox]").attr("data-fancybox","group_"+t)),e&&ae()},ta.prototype.externalProjectLinks=function(){this.el.hasClass("target-blank-external-urls")&&(this.el.find(".nectar-post-grid-item a[href*='http://']:not([href*='"+L.location.hostname+"'])").attr("target","_blank"),this.el.find(".nectar-post-grid-item a[href*='https://']:not([href*='"+L.location.hostname+"'])").attr("target","_blank"))},ta.prototype.clickEvents=function(){this.el.find(".nectar-post-grid-filters h4").on("click",function(){q(this).parent().find("div").toggleClass("visible"),q(this).toggleClass("visible")}),"content_under_image"==this.gridStyle&&0<this.el.find(".nectar-post-grid-link.pretty_photo").length&&this.el.on("click",".bg-wrap-link",function(){return q(this).parents(".nectar-post-grid-item").find(".nectar-post-grid-link").trigger("click"),!1});var o=this.settingsData,l=this.queryData,d=this;this.el.find(".nectar-post-grid-filters a, .load-more-wrap .load-more").on("click",function(){var e=q(this);if(0<e.parents(".nectar-post-grid-wrap.loading").length||q(this).hasClass("active")||q(this).hasClass("inactive"))return!1;0<q(this).parents(".nectar-post-grid-filters").length?(e.parent().find("a").removeClass("active"),e.addClass("active"),d.currentPage=0,d.activeFilter=e.index()+1):d.currentPage++;var a=e.parents(".nectar-post-grid-wrap").find(".nectar-post-grid"),n=o.pagination,i=e.hasClass("load-more")&&"load-more"===n?"load-more":"filter",t="",s="",r,s="yes"===d.sortable?(t=e.parents(".nectar-post-grid-wrap").find(".nectar-post-grid-filters a.active").attr("data-filter"),e.parents(".nectar-post-grid-wrap").find(".nectar-post-grid-filters a.active").attr("data-filter")):(r=1<e.parents(".nectar-post-grid-wrap").find(".nectar-post-grid-filters a").length?":not(.all-filter)":"",e.parents(".nectar-post-grid-wrap").find(".nectar-post-grid-filters a"+r).each(function(){t+=q(this).attr("data-filter")+", ",s+=q(this).attr("data-filter")+", "}),t=t.substring(0,t.length-2),s.substring(0,s.length-2)),r={action:"nectar_get_post_grid_segment",post_type:l.post_type,cpt_name:l.cpt_name,custom_query_tax:s,category:t,posts_per_page:l.posts_per_page,current_page:d.currentPage,offset:l.offset,order:l.order,orderby:l.orderby,load_action:i,ignore_sticky_posts:l.ignore_sticky_posts,settings:{pagination:n,post_type:o.post_type,image_size:o.image_size,aspect_ratio_image_size:o.aspect_ratio_image_size,card_bg_color:o.card_bg_color,display_categories:o.display_categories,display_excerpt:o.display_excerpt,display_date:o.display_date,color_overlay:o.color_overlay,color_overlay_opacity:o.color_overlay_opacity,color_overlay_hover_opacity:o.color_overlay_hover_opacity,grid_style:o.grid_style,hover_effect:o.hover_effect,heading_tag:o.heading_tag,post_title_overlay:o.post_title_overlay,enable_gallery_lightbox:o.enable_gallery_lightbox,overlay_secondary_project_image:o.overlay_secondary_project_image,vertical_list_hover_effect:o.vertical_list_hover_effect,vertical_list_read_more:o.vertical_list_read_more}};return e.parents(".nectar-post-grid-wrap").addClass("loading"),q.post(L.nectarLove.ajaxurl,r,function(t){"load-more"==i?a.append(t):a.html(t),a.is('[data-animation="fade-in-from-bottom"]')&&(e.parents(".nectar-post-grid-wrap").removeClass("finished-animating"),a.find(".nectar-post-grid-item:not(.animated-in)").each(function(t){var e=q(this);setTimeout(function(){e.addClass("animated-in")},90*t)}),setTimeout(function(){e.parents(".nectar-post-grid-wrap").addClass("finished-animating")},950)),"load-more"===n&&(d.activeCatTotal=parseInt(d.el.find(".nectar-post-grid-filters a:nth-child("+d.activeFilter+")").attr("data-total-count")),a.find(".nectar-post-grid-item").length>=d.activeCatTotal?(d.el.find(".load-more-wrap").addClass("inactive"),d.el.addClass("all-loaded")):(d.el.find(".load-more-wrap").removeClass("inactive"),d.el.removeClass("all-loaded"))),d.lightboxGroups(),d.externalProjectLinks(),e.parents(".nectar-post-grid-wrap").removeClass("loading"),Y.trigger("resize"),Je()}),!1})},ta.prototype.deepLinking=function(){void 0!==Jt["grid-filter"]&&this.el.find(".nectar-post-grid-filters a").each(function(){var t=q(this).clone(),e=Jt["grid-filter"];q(this),(t=0<(t=(t=t.text()).replace(/\s+/g,"-").toLowerCase()).length&&"-"===t.substring(0,1)?t.substring(1):t)==(e=e.replace(/\s+/g,"-").replace(/</g,"&lt;").replace(/"/g,"&quot;").toLowerCase())&&q(this).trigger("click")})},q.DLMenu=function(t,e){this.$el=q(e),this._init(t)},q.DLMenu.defaults={animationClasses:{classin:"dl-animate-in-1",classout:"dl-animate-out-1"},onLevelClick:function(){return!1},onLinkClick:function(){return!1}},q.DLMenu.prototype={_init:function(t){this.options=q.extend(!0,{},q.DLMenu.defaults,t),this._config(),this.animEndEventName="animationend.menu",this.transEndEventName="transitionend.menu",this.supportAnimations=!0,this.supportTransitions=!0,this._initEvents()},_config:function(){this.open=!1,this.$trigger=this.$el.children(".trigger"),this.$menu=this.$el.children("ul.menu"),this.$menuitems=this.$menu.find("li:not(.back) > a"),this.$el.find("ul.sub-menu").prepend('<li class="back"><a href="#"> '+r.attr("data-back-txt")+" </a></li>"),this.$back=this.$menu.find("li.back")},_initEvents:function(){var s=this;this.$trigger.on("click.menu",function(){return s.open?s._closeMenu():s._openMenu(),!1}),this.$menuitems.on("click.menu",function(t){var e=q(this).parent("li"),a=e.children("ul.sub-menu");if(q(".fullscreen-alt .off-canvas-menu-container .clip-wrap, .fullscreen-alt .off-canvas-menu-container .clip-wrap span").css("transition-duration","0s"),0<a.length){var n=a.clone().css("opacity",0).insertAfter(s.$menu),i=function(){s.$menu.off(s.animEndEventName).removeClass(s.options.animationClasses.classout).addClass("subview"),e.addClass("subviewopen").parents(".subviewopen:first").removeClass("subviewopen").addClass("subview"),n.remove(),setTimeout(function(){q(".off-canvas-menu-container .menu > li").removeClass("no-pointer-events"),q(".off-canvas-menu-container .clip-wrap, .off-canvas-menu-container .clip-wrap span").css("transition-duration",".45s")},300)};return setTimeout(function(){n.addClass(s.options.animationClasses.classin),s.$menu.addClass(s.options.animationClasses.classout),s.supportAnimations?s.$menu.on(s.animEndEventName,i):i.call(),s.options.onLevelClick(e,e.children("a:first").text())}),e.parents(".menu-wrap").css("height",e.parents(".off-canvas-menu-container").find(".menuwrapper .menu").height()).transition({height:n.height()},500,"easeInOutQuad"),setTimeout(Ia,600),!1}s.options.onLinkClick(e.find("> a"),t),qa(e)}),this.$back.on("click.menu",function(){var e=q(this),t=e.parents("ul.sub-menu:first"),a=t.parent(),n=t.clone().insertAfter(s.$menu),i=function(){s.$menu.off(s.animEndEventName).removeClass(s.options.animationClasses.classin),n.remove()};return setTimeout(function(){n.addClass(s.options.animationClasses.classout),s.$menu.addClass(s.options.animationClasses.classin),s.supportAnimations?s.$menu.on(s.animEndEventName,i):i.call(),a.removeClass("subviewopen");var t=e.parents(".subview:first");t.is("li")&&t.addClass("subviewopen"),t.removeClass("subview")}),setTimeout(function(){a.parents(".menu-wrap").transition({height:a.parent().height()},500,"easeInOutQuad"),setTimeout(Ia,600)},50),!1})},closeMenu:function(){this.open&&this._closeMenu()},_closeMenu:function(){var t=this,e=function(){t.$menu.off(t.transEndEventName),t._resetMenu()};this.$menu.removeClass("menuopen"),this.$menu.addClass("menu-toggle"),this.$trigger.removeClass("active"),this.supportTransitions?this.$menu.on(this.transEndEventName,e):e.call(),this.open=!1},openMenu:function(){this.open||this._openMenu()},_openMenu:function(){var t=this;j.off("click").on("click.menu",function(){t._closeMenu()}),this.$menu.addClass("menuopen menu-toggle").on(this.transEndEventName,function(){q(this).removeClass("menu-toggle")}),this.$trigger.addClass("active"),this.open=!0},_resetMenu:function(){this.$menu.removeClass("subview"),this.$menuitems.removeClass("subview subviewopen")}};var Ya=function(t){L.console&&L.console.error(t)};function ja(){var t=parseInt(d.height());q('body[data-aie="slide-down"] #page-header-wrap:not(.fullscreen-header):not([data-responsive="true"])').css("height",t+"px")}function Ba(){0!=q("#ajax-content-wrap").length&&j.hasClass("ajax-loaded")?1==q("#ajax-content-wrap").length&&q('#page-header-bg[data-parallax="1"]').css({opacity:1}):q('#page-header-bg[data-parallax="1"]').animate({opacity:1},350,"easeInCubic"),q('#page-header-bg[data-parallax="1"] .nectar-particles').append('<div class="fade-out" />')}function Pa(){var t={inView:!0},e=q("#page-header-bg .span_6 .inner-wrap"),a=q("#page-header-bg #canvas"),n,i,s,r,o;0<q('#page-header-bg[data-parallax="1"]').length&&(n=new Image,i=parseInt(d.height()),s=q("#header-space").height(),r=0<q(".nectar-global-section.after-nav").length?q(".nectar-global-section.after-nav").height():0,(o=Ut(q('#page-header-bg[data-parallax="1"]').css("background-image")))&&-1!==o.indexOf(".")?(n.onload=function(){Ba()},n.src=Ut(q('#page-header-bg[data-parallax="1"]').css("background-image"))):Ba(),1e3<ot.winW&&l(),L.addEventListener("scroll",function(){1e3<ot.winW&&L.requestAnimationFrame(l)},!1));var n=0<q('body[data-ajax-transitions="true"]').length&&0<q('#page-header-bg[data-animate-in-effect="slide-down"]').length?350:0,n;function l(){1e3<=ot.winW&&null==navigator.userAgent.match(/iPad/i)&&1!=dt.materialOffCanvasOpen&&(1==t.inView&&(e.css({transform:"translateY("+.15*ot.scrollTop+"px)",opacity:1-ot.scrollTop/(.7*(r+i))}),a&&a.css({transform:"translateY("+.15*ot.scrollTop*2+"px)"})),1<ot.scrollTop/(i+s+ot.adminBarHeight)?(t.inView=!1,q(".nectar-particles, #page-header-bg .fade-out").css("visibility","hidden").addClass("out-of-sight"),q("#page-header-bg").addClass("out-of-sight")):(t.inView=!0,q("#page-header-bg, .nectar-particles, #page-header-bg .fade-out").css("visibility","visible").removeClass("out-of-sight")))}0<d.length&&(setTimeout(function(){ja()},n),q('#page-header-bg[data-animate-in-effect="fade-in"]').addClass("loaded"),(n=Ut(d.css("background-image")))&&-1!==n.indexOf(".")&&d.addClass("has-bg"),Y.on("smartresize",ja)),0<d.length&&((-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")||navigator.userAgent.match(/(iPod|iPhone|iPad)/))&&(L.onunload=function(){Pa(),q('#page-header-bg[data-parallax="1"] .span_6').css({opacity:1})}),0==q(".nectar-box-roll").length&&Va())}function Ra(){var t;(0==q("#page-header-bg .nectar-particles").length&&0==q('#page-header-bg[data-text-effect="none"]').length||0<q(".nectar-box-roll").length&&0==q("#page-header-bg .nectar-particles").length)&&(t=0==q(".nectar-box-roll").length?"#page-header-bg .span_6":".nectar-box-roll .overlaid-content .span_6",q(t).find(".wraped").each(function(t){q(this).find("span").delay(370*t).transition({rotateX:"0",opacity:1,y:0},400,"easeOutQuad")}),setTimeout(function(){q(t).find(".inner-wrap > *:not(.top-heading)").each(function(t){q(this).delay(370*t).transition({rotateX:"0",opacity:1,y:0},650,"easeOutQuad")}),q(".scroll-down-wrap, .scroll-down-wrap .section-down-arrow").removeClass("hidden")},370*q(t).find(".wraped").length))}function Va(){d.each(function(){var t,e;"rotate_in"!=q(this).attr("data-text-effect")||(t="none")!=(t=0<q(this).find(".span_6 h1").length?"h1":t)&&(e=0<q(this).find(".nectar-particles").length?".inner-wrap.shape-1":".span_6",q(this).find(e).find(t).addClass("top-heading").contents().filter(function(){return 3===this.nodeType&&void 0!==this.data&&this.data.replace(/\s+/,"")}).wrap('<span class="wraped"></span>'),q(this).find(e).find(".wraped").each(function(){var t=q(this),e=t.text().split(" "),a="";q.each(e,function(t,e){e.replace(/\s+/,"")&&(a+='<span class="wraped"><span>'+e+"</span></span> ")}),t.replaceWith(q(a))}))});var t=0<n.length?800:0;0==q("#page-header-bg .nectar-video-wrap video").length&&setTimeout(Ra,t)}function Xa(){var n;0<q('#header-outer[data-permanent-transparent="1"]').length&&0<q('body[data-bg-header="true"]').length&&(0==q(".container-wrap div[data-midnight]").length&&q(".container-wrap").attr("data-midnight","dark"),n=[],q("div[data-midnight]:not(.has-global-section)").each(function(){("light"==q(this).attr("data-midnight")&&0==q(this).parents(".pum-content").length||"dark"==q(this).attr("data-midnight")&&0==q(this).parents(".pum-content").length)&&(q(this).is("#page-header-bg")&&0<q(this).parents("#page-header-wrap[data-midnight]").length||n.push(q(this)))}),0<n.length&&q.each(n,function(e,t){var a;"light"!=t.attr("data-midnight")&&"dark"!=t.attr("data-midnight")||(a=t,new Waypoint({element:a[0],handler:function(t){var t;0<q("body.material-ocm-open").length||0<q("#slide-out-widget-area.open").length||"none"==a.css("display")||(t="down"==t?"light"==a.attr("data-midnight")?"":"dark-slide":"light"==n[0<=e-1?e-1:e].attr("data-midnight")?"":"dark-slide",u.removeClass("dark-slide").addClass(t))},offset:u.height()}))}))}function Na(){0<q(".nectar-box-roll").length&&"undefined"!=typeof NectarBoxRoll&&(Va(),q(L).on("nectar-box-roll-scroll-disabled",function(){dt.preventScroll=!0}),q(L).on("nectar-box-roll-scroll-enabled",function(){dt.preventScroll=!1}),(st=new NectarBoxRoll(ot,Da,Xa,Pn,ma)).inUse=!0)}function Da(){var n,i,s,r,o,l,a,d,c,t,h,i=1==nt?"500%":"93%",s=1==nt?"500%":"95%";q(at+'.row-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]) .row-bg').each(function(){var t=q(this).parents(".row-bg-wrap").attr("data-bg-animation");n="zoom-out-reveal"!=t&&-1==t.indexOf("reveal-from-")?i:s;var e=q(this),a=new Waypoint({element:e.parents(".row-bg-wrap")[0],handler:function(){0<e.parents(".wpb_tab").length&&"hidden"==e.parents(".wpb_tab").css("visibility")||e.hasClass("animated-in")||(e.parents(".inner-wrap").addClass("animated-in"),("zoom-out-reveal"==t||-1<t.indexOf("reveal-from-")||0<e.parents(".nectar-scrolling-text").length)&&e.parents(".row-bg-wrap").addClass("animated-in")),a.destroy()},offset:n})}),o=1==nt?"500%":"93%",l=1==nt?"500%":"80%",q(at+'.column-image-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]):not([data-bg-animation*="displace-filter"]) .column-image-bg').each(function(){var t=q(this).parents(".column-image-bg-wrap").attr("data-bg-animation");r="zoom-out-reveal"!=t&&-1==t.indexOf("reveal-from-")?o:"ro-reveal-from-bottom"==t&&0==nt?"95%":"ro-reveal-from-top"==t&&0==nt?"65%":l;var e=q(this),a=new Waypoint({element:e.parents(".column-image-bg-wrap")[0],handler:function(){0<e.parents(".wpb_tab").length&&"hidden"==e.parents(".wpb_tab").css("visibility")||e.hasClass("animated-in")||(e.parents(".inner-wrap").addClass("animated-in"),("zoom-out-reveal"==t||-1<t.indexOf("reveal-from-"))&&(e.parents(".column-image-bg-wrap").addClass("animated-in"),e.parents(".column-image-bg-wrap").siblings(".column-bg-overlay-wrap").addClass("animated-in"),e.parents(".vc_column-inner").addClass("revealed-bg"))),a.destroy()},offset:r})}),q(at+".column-bg-overlay-wrap[data-bg-animation]").each(function(){r=l;var t=q(this),e=q(this).attr("data-bg-animation"),a;("zoom-out-reveal"==e||0<e.indexOf("reveal-from-"))&&0==t.parent().find(".column-image-bg-wrap").length&&(a=new Waypoint({element:t[0],handler:function(){t.hasClass("animated-in")||(t.addClass("animated-in"),t.parents(".vc_column-inner").addClass("revealed-bg")),a.destroy()},offset:r}))}),Ye(),Re(),Ne(),a=1==nt?"250%":"75%",q(at+'.nectar-icon-list[data-animate="true"]').each(function(){var t=q(this),e=new Waypoint({element:t[0],handler:function(){0<t.parents(".wpb_tab").length&&"hidden"==t.parents(".wpb_tab").css("visibility")||t.hasClass("completed")||(t.each(function(){var a=t.is('[data-direction="horizontal"]')?100:300;q(this).find(".nectar-icon-list-item").each(function(t){var e=q(this);setTimeout(function(){e.addClass("animated")},t*a)})}),t.addClass("completed")),e.destroy()},offset:a})}),aa(),na(),Ze(),d=1==nt?"200%":"95%",q(at+".clients.fade-in-animation").each(function(){var t=q(this),e=new Waypoint({element:t[0],handler:function(){0<t.parents(".wpb_tab").length&&"hidden"==t.parents(".wpb_tab").css("visibility")||t.hasClass("animated-in")||(t.find("> div").each(function(t){q(this).delay(80*t).transition({opacity:"1"},450)}),setTimeout(function(){t.addClass("completed")},80*t.find("> div").length+450),t.addClass("animated-in")),e.destroy()},offset:d})}),Pe(),c=1==nt?"500%":"bottom-in-view",0==E.length?(q(".svg-icon-holder:not(.animated-in)").has("svg").each(function(t){var a=q(this);k&&a.attr("data-animation","false"),a.find("svg").css({height:parseInt(a.attr("data-size"))+"px",width:parseInt(a.attr("data-size"))+"px"}),q(this).find("svg").attr("id","nectar-svg-animation-instance-"+t);var e=a.is("[data-animation-speed]")&&0<a.attr("data-animation-speed").length?a.attr("data-animation-speed"):200,n;function i(){var t=0;a.is("[data-animation-delay]")&&0<a.attr("data-animation-delay").length&&"false"!=a.attr("data-animation")&&(t=a.attr("data-animation-delay"));var e=a.find("svg").attr("id").replace(/[^0-9]/g,"");1==E[e].isReady?setTimeout(function(){a.css("opacity","1"),E[e].reset().play()},t):setTimeout(i,50)}"false"==a.attr("data-animation")&&(e=1,a.css("opacity","1")),a.hasClass("bound")||(E[t]=new Vivus(a.find("svg").attr("id"),{type:"delayed",pathTimingFunction:Vivus.EASE_OUT,animTimingFunction:Vivus.LINEAR,duration:e,onReady:function(){a.css({height:parseInt(a.attr("data-size"))+"px",width:parseInt(a.attr("data-size"))+"px"})}})),1!==e?n=new Waypoint({element:a[0],handler:function(){a.hasClass("animated-in")||(i(),a.addClass("animated-in")),n.destroy()},offset:c}):i(),a.addClass("bound")}),0<q('.vc_row-o-equal-height .svg-icon-holder[data-animation="true"]').length&&0==q("#nectar_fullscreen_rows").length&&Y.on("smartresize",function(){clearTimeout(e),e=setTimeout(function(){0<E.length&&q(".svg-icon-holder.animated-in").each(function(){var t;q(this).css("opacity","1"),q(this).is("[id]")&&(t=q(this).attr("id").replace(/[^0-9]/g,""),E[t].finish())})},300)})):q(".svg-icon-holder").addClass("animated-in").css("opacity","1"),q("#nectar_fullscreen_rows .svg-icon-holder.animated-in").has("svg").each(function(t){var e=0;q(this).is("[data-animation-delay]")&&0<q(this).attr("data-animation-delay").length&&"false"!=q(this).attr("data-animation")&&(e=q(this).attr("data-animation-delay"));var a=q(this),n=a.find("svg").attr("id").replace(/[^0-9]/g,"");clearTimeout(Z[t]),"false"==a.attr("data-animation")?(a.css("opacity","1"),E[n].finish()):0<q(this).parents(".active").length||0<q(this).parents("#footer-outer").length||0<q("body.mobile").length?(E[n].reset(),Z[t]=setTimeout(function(){E[n].play()},e)):E[n].reset().stop()}),q(".nectar-milestone").each(function(){var t;q(this).is("[data-symbol]")&&(0==q(this).find(".symbol-wrap").length&&("before"==q(this).attr("data-symbol-pos")?q(this).find(".number").prepend('<div class="symbol-wrap"><span class="symbol">'+q(this).attr("data-symbol")+"</span></div>"):q(this).find(".number").append('<div class="symbol-wrap"><span class="symbol">'+q(this).attr("data-symbol")+"</span></div>")),t=q(this).attr("data-symbol-size")==q(this).find(".number").attr("data-number-size")&&"superscript"==q(this).attr("data-symbol-alignment")?32:parseInt(q(this).attr("data-symbol-size")),q(this).find(".symbol-wrap").css({"font-size":t+"px","line-height":t+"px"})),q(this).find(".number").css({"font-size":q(this).find(".number").attr("data-number-size")+"px","line-height":q(this).find(".number").attr("data-number-size")+"px"})}),(!k&&0<q(".nectar-milestone").length||j.hasClass("rtl")&&0<q(".nectar-milestone").length)&&(h="",q(at+".nectar-milestone.motion_blur").each(function(t){q(this).removeClass(function(t,e){return(e.match(/(^|\s)instance-\S+/g)||[]).join(" ")}),q(this).addClass("instance-"+t);var e=q(this).find(".number").css("color"),a=parseInt(e.substring(1),16),n=(16711680&a)>>16,i=(65280&a)>>8,e=(255&a)>>0,a="rgba("+n+","+i+","+e+",0.2)",i="rgba("+n+","+i+","+e+",1)",e=parseInt(q(this).find(".number").attr("data-number-size")),i,t,s;h+="@keyframes motion-blur-number-"+t+" {  0% { opacity: 0;color: "+a+"; text-shadow: 0 "+e/20+"px 0 "+a+", 0 "+e/10+"px 0 "+a+", 0 "+e/6+"px 0 "+a+", 0 "+e/5+"px 0 "+a+", 0 "+e/4+"px 0 "+a+", 0 -"+e/20+"px 0 "+a+", 0 -"+e/10+"px 0 "+a+", 0 -"+e/6+"px 0 "+a+", 0 -"+e/5+"px 0 "+a+", 0 -"+e/4+"px 0 "+a+"; transform: translateZ(0px) translateY(-100%); -webkit-transform: translateZ(0px) translateY(-100%); } 33% { opacity: 1 }100% { color: "+i+"; text-shadow: none; transform: translateZ(0px) translateY(0px); -webkit-transform: translateZ(0px) translateY(0px); } } @-webkit-keyframes motion-blur-number-"+t+" {  0% { opacity: 0;color: "+a+"; text-shadow: 0 "+e/20+"px 0 "+a+", 0 "+e/10+"px 0 "+a+", 0 "+e/6+"px 0 "+a+", 0 "+e/5+"px 0 "+a+", 0 "+e/4+"px 0 "+a+", 0 -"+e/20+"px 0 "+a+", 0 -"+e/10+"px 0 "+a+", 0 -"+e/6+"px 0 "+a+", 0 -"+e/5+"px 0 "+a+", 0 -"+e/4+"px 0 "+a+"; transform: translateZ(0px) translateY(-100%); -webkit-transform: translateZ(0px) translateY(-100%); } 33% { opacity: 1 }100% { color: "+i+"; text-shadow: none; transform: translateZ(0px) translateY(0px); -webkit-transform: translateZ(0px) translateY(0px); } } .nectar-milestone.motion_blur.instance-"+t+" .number span.in-sight { animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-"+t+"; -webkit-animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-"+t+"; } ",0==rt.$usingFullScreenRows&&0!=q(this).find(".number > span").length||(i=q(this).find(".symbol-wrap").clone(),q(this).find(".symbol-wrap").remove(),t=q(this).find(".number").text().split(""),(s=q(this).find(".number")).empty(),q.each(t,function(t,e){s.append("<span>"+e+"</span")}),q(this).has("[data-symbol]")&&("after"==q(this).attr("data-symbol-pos")?s.append(i):s.prepend(i)))}),ee(h,"milestone-blur"),se()),ye(),q(at+'.owl-carousel[data-enable-animation="true"]').each(function(){var t=1==nt?"200%":"bottom-in-view",e=0;q(this).is("[data-animation-delay]")&&0<q(this).attr("data-animation-delay").length&&"false"!=q(this).attr("data-animation")&&(e=q(this).attr("data-animation-delay"));var a=q(this),n=new Waypoint({element:a[0],handler:function(){0<a.parents(".wpb_tab").length&&"hidden"==a.parents(".wpb_tab").css("visibility")||a.hasClass("animated-in")||setTimeout(function(){a.find(".owl-stage > .owl-item").each(function(t){q(this).delay(200*t).transition({opacity:"1",y:"0"},600,"easeOutQuart")}),a.addClass("animated-in")},e),n.destroy()},offset:t})}),0<q('body[data-header-inherit-rc="true"]').length&&0==q(".mobile").length&&0<q('#header-outer[data-transparent-header="true"]').length&&(t=g/2+f+ot.adminBarHeight,0==q('#header-outer[data-permanent-transparent="1"]').length&&(t=g-m+Math.ceil(2*f/1.8)+ot.adminBarHeight),q(".main-content > .row > .wpb_row").each(function(){var e,a=q(this);new Waypoint({element:a[0],handler:function(t){"down"==t?0<a.find(".row-bg.using-bg-color").length?(e=0<a.find("> .col.span_12.light").length?"light-text":"dark-text",u.css("background-color",a.find(".row-bg").css("background-color")).removeClass("light-text").removeClass("dark-text").addClass(e),u.attr("data-current-row-bg-color",a.find(".row-bg").css("background-color")),q("body.material #header-outer .bg-color-stripe").css("background-color",a.find(".row-bg").css("background-color"))):(u.css("background-color",u.attr("data-user-set-bg")).removeClass("light-text").removeClass("dark-text"),u.attr("data-current-row-bg-color",u.attr("data-user-set-bg")),q("body.material #header-outer .bg-color-stripe").css("background-color","")):0<a.prev("div.wpb_row").find(".row-bg.using-bg-color").length?(e=0<a.prev("div.wpb_row").find("> .col.span_12.light").length?"light-text":"dark-text",u.css("background-color",a.prev("div.wpb_row").find(".row-bg").css("background-color")).removeClass("light-text").removeClass("dark-text").addClass(e),u.attr("data-current-row-bg-color",a.prev("div.wpb_row").find(".row-bg").css("background-color")),q("body.material #header-outer .bg-color-stripe").css("background-color",a.prev("div.wpb_row").find(".row-bg").css("background-color"))):(u.css("background-color",u.attr("data-user-set-bg")).removeClass("light-text").removeClass("dark-text"),u.attr("data-current-row-bg-color",u.attr("data-user-set-bg")),q("body.material #header-outer .bg-color-stripe").css("background-color",""))},offset:t})})),we(),Ve(),ia(),Xe(),ne(),ea(),function(){if(0<K.length)for(var t=0;t<K.length;t++)clearInterval(K[t].interval);K=[],q(".nectar-rotating-words-title").each(function(t){var e=parseInt(q(this).attr("data-rotation"));K[t]=new ie(q(this),e)})}()}function Qa(){var t,e,a,e,n,r,i,o,s;function l(){q('.blog-recent[data-style="title_only"]').each(function(){if(1<q(this).find("> .col").length)return!1;var t=q(this).parent().parent().parent(),e;(t.hasClass("vc_col-sm-3")||t.hasClass("vc_col-sm-4")||t.hasClass("vc_col-sm-6")||t.hasClass("vc_col-sm-8")||t.hasClass("vc_col-sm-9"))&&(0==q("body.mobile").length&&0==q(this).next("div").length?(e=0,q(this).find("> .col").css("padding","50px 20px"),q(this).parents(".span_12").find(" > .wpb_column").each(function(){Math.floor(q(this).height())>e&&(e=Math.floor(q(this).height()))}),Math.floor(q(this).find("> .col").outerHeight(!0))<Math.floor(q(this).parents(".wpb_row").height())-1&&(q(this).find("> .col").css("padding-top",(e-q(this).find("> .col").height())/2+"px"),q(this).find("> .col").css("padding-bottom",(e-q(this).find("> .col").height())/2+"px"))):q(this).find("> .col").css("padding","50px 20px"))})}function d(t){this.options=r.extend({},i.defaults,d.defaults,t),this.element=this.options.element,this.$element=r(this.element),this.createWrapper(),this.topLevel=0<r(this.element).parents(".top-level").length,this.createWaypoint()}wt(),xt(),setTimeout(Ct,100),It(),St(),Ft(),Lt(),jt(),setTimeout(oe,60),he(),j.on("click",".toggle h3 a",function(){if(!q(this).parents(".toggles").hasClass("accordion")){var t;if(0==q(this).parents('.toggle[data-inner-wrap="true"]').length?q(this).parents(".toggle").find("> div").slideToggle(300):(t=q(this).parents(".toggle").find("> div")[0]).style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px",q(this).parents(".toggle").toggleClass("open"),q(this).parents(".toggle").hasClass("open")?q(this).find("i").attr("class","fa fa-minus-circle"):q(this).find("i").attr("class","fa fa-plus-circle"),0<q(this).parents(".toggle").find("> div .iframe-embed").length&&"0"==q(this).parents(".toggle").find("> div iframe.iframe-embed").height()&&ga(),0<q(this).parents(".toggle").find("> div img").length&&q(this).parents(".toggle").is('[data-inner-wrap="true"]'))for(var e=1;e<10;e++)setTimeout(ce,100*e);return 0<q(this).parents(".full-width-content").length&&setTimeout(function(){We()},300),0<q("#nectar_fullscreen_rows").length&&setTimeout(function(){Y.trigger("smartresize")},300),!1}}),j.on("click",".toggles.accordion .toggle h3 a",function(t){if(q(this).parents(".toggle").hasClass("open"))return!1;var e,a=q(this).parents(".toggles"),n=q(this).parents(".toggle"),t;return 0==q(this).parents('.toggle[data-inner-wrap="true"]').length?(a.find(".toggle > div").slideUp(300),a.find(".toggle h3 a i").attr("class","fa fa-plus-circle"),a.find(".toggle").removeClass("open"),n.find("> div").slideDown(300)):(void 0!==t.originalEvent&&ot.winW<1e3&&0<a.find(".toggle.open").length&&0==rt.$usingFullScreenRows&&(a.find(".toggle.open"),setTimeout(function(){var t=n.offset().top-ot.adminBarHeight;Qt(t=0<q('#header-outer[data-mobile-fixed="1"]').length?n.offset().top-u.outerHeight()-ot.adminBarHeight:t,500,"easeInOutQuint")},50)),t=n.find("> div")[0],a.find(".toggle > div").each(function(){q(this)[0].style.maxHeight=null}),a.find(".toggle h3 a i").attr("class","fa fa-plus-circle"),a.find(".toggle").removeClass("open"),t.style.maxHeight=t.scrollHeight+"px"),n.addClass("open"),n.hasClass("open")?q(this).find("i").attr("class","fa fa-minus-circle"):q(this).find("i").attr("class","fa fa-plus-circle"),0<q(this).parents(".full-width-content").length&&(clearTimeout(e),e=setTimeout(function(){We()},400)),0<q("#nectar_fullscreen_rows").length&&(clearTimeout(e),e=setTimeout(function(){Y.trigger("smartresize")},400)),!1}),me(),ha(),fe(),j.on("click",'.nectar-cta[data-using-bg="true"]:not([data-style="material"]) .link_wrap',function(t){q(t.target).is("a")||q(this).find("a.link_text")[0].click()}),0!==q(".team-member").length&&(j.on("click",'.team-member[data-style="bio_fullscreen"], .team-member[data-style="bio_fullscreen_alt"]',function(){var t,e,a,n,i,s,e,s,n;0<q(".nectar_team_member_overlay").length||(t=0<q("body > #boxed").length?"in-boxed":"",e=q(this).find(".nectar_team_bio").html(),a=(q(this).is('[data-style="bio_fullscreen_alt"]')?q(this).find(".team-meta h5"):q(this).find(".team-meta p")).text(),n=0<q(this).find(".nectar_team_bio_img[data-img-src]").length?q(this).find(".nectar_team_bio_img").attr("data-img-src"):"",i=q(this).is('[data-style="bio_fullscreen_alt"]')?"bio-fullscreen-alt":"bio-fullscreen",s="",s=q(this).is('[data-style="bio_fullscreen_alt"]')?'<div class="title">'+a+"</div><h2>"+q(this).find(".team-meta h3").text()+"</h2>":"<h2>"+q(this).find(".team-meta h3").text()+'</h2><div class="title">'+a+"</div>",j.append('<div class="nectar_team_member_overlay '+t+'" data-style="'+i+'"><div class="inner-wrap"><div class="team_member_details"><div class="bio-inner"><span class="mobile-close"></span>'+s+'<div class="team-desc">'+Vt(e)+'</div></div></div><div class="team_member_picture"><div class="team_member_image_bg_cover"></div><div class="team_member_picture_wrap"><div class="team_member_image"></div></div></div></div></div>'),0<n.length&&((e=new Image).src=n,e.onload=function(){q(".nectar_team_member_overlay .team_member_image").css("opacity","1")},q(".nectar_team_member_overlay .team_member_image").css({"background-image":'url("'+n+'")'})),n=0<q('body[data-header-format="left-header"]').length&&1e3<Y.width()?0:u.height(),q(".nectar_team_member_overlay .inner-wrap").css({"padding-top":n}),0<q(".using-mobile-browser").length&&q("body,html").addClass("nectar-no-scrolling"),ve(),q(".nectar_team_member_overlay").addClass("open").addClass("animating"),setTimeout(function(){q(".nectar_team_member_close").addClass("visible"),q(".nectar_team_member_overlay").removeClass("animating")},500),0<q('.team-member[data-style="bio_fullscreen"]').length&&ot.usingMobileBrowser&&q(".nectar_team_member_overlay").addClass("on-mobile"),ga())}),j.on("click",".nectar_team_member_overlay",function(t){return!!(q(t.target).is("a")||0<q(t.target).parents("a").length||q(t.target).is(".skip-team-member-close")||0<q(t.target).parents(".skip-team-member-close").length)||void(q(this).hasClass("animating")||(q(".nectar_team_member_overlay").removeClass("open"),q(".nectar_team_member_close").removeClass("visible"),0<q(".using-mobile-browser").length&&q("body,html").removeClass("nectar-no-scrolling"),setTimeout(function(){q(".nectar_team_member_overlay, .nectar_team_member_close").remove()},820)))}),(0<q('.team-member[data-style="bio_fullscreen"]').length||0<q('.team-member[data-style="bio_fullscreen_alt"]').length)&&(Y.on("resize",ve),!ot.usingMobileBrowser))&&new yt("","close-indicator"),0<q(".nectar-flip-box").length&&(ot.usingMobileBrowser&&j.on("click",".nectar-flip-box",function(){q(this).toggleClass("flipped")}),xe(),Y.on("smartresize",xe)),At(),Fe(),qe(),_e(),Sn(),An(),Le(),0<q(".morphing-outline").length&&(setTimeout(we,100),setTimeout(We,125),Y.on("smartresize",we)),H=[],ot.usingMobileBrowser||q("[data-nectar-link-indicator]").each(function(t){H[t]=new yt(q(this),"link-indicator")}),Ke(),0<q(".nectar_cascading_images").length&&(s=[],q(".nectar_cascading_images").each(function(e){imagesLoaded(q(this),function(t){je(),q(t.elements[0]).is('[data-parallax="yes"]')&&!ot.usingMobileBrowser&&0==q("#nectar_fullscreen_rows").length&&(s[e]=new Be(q(t.elements[0]),q(t.elements[0]).attr("data-parallax-intensity")))})}),Y.on("resize",je)),Qe(),sa(),0<q('.page-submenu[data-sticky="true"]').length&&0==q("#nectar_fullscreen_rows").length&&(r=L.jQuery,i=L.Waypoint,o=Xt(),Xt(),Y.on("smartresize",function(){var t;o=Xt(),0<h.length&&"fixed"==h.css("position")&&(o+=h.height()),0<p.length&&1e3<Y.width()&&0<r('body[data-hhun="1"]').length&&(o+=p.height()),0<r(".page-submenu.stuck").length?(r(".page-submenu.stuck").addClass("no-trans").css("top",o).css("transform","translateY(0)").addClass("stuck"),setTimeout(function(){r(".page-submenu.stuck").removeClass("no-trans")},50),r(".page-submenu.stuck").parents(".wpb_row").css("z-index",1e4),0<r("#boxed").length&&(t=1e3<Y.width()?.04*r(".container-wrap").width():39,r(".page-submenu.stuck").css({"margin-left":"-"+t+"px",width:r(".container-wrap").width()}))):(r(".page-submenu.stuck").css("top","0").removeClass("stuck"),r(".page-submenu.stuck").parents(".wpb_row").css("z-index","auto"),0<r("#boxed").length&&r(".page-submenu.stuck").css({"margin-left":"0px",width:"100%"}))}),d.prototype.createWaypoint=function(){var s=this.options.handler;o=Xt(),this.topLevel&&0<r('body[data-hhun="1"] #header-outer.detached:not(.invisible)').length&&(o+=1,this.$element.css({"margin-top":"-1px"})),0<h.length&&"fixed"==h.css("position")&&(o+=h.height()),0<p.length&&1e3<Y.width()&&0<r('body[data-hhun="1"]').length&&(o+=p.height()),this.waypoint=new i(r.extend({},this.options,{element:this.wrapper,handler:r.proxy(function(t){var e=-1<this.options.direction.indexOf(t),a=e?this.$element.outerHeight(!0):"",n,a,e,i,n;this.$wrapper.height(a),e?(n=0,this.topLevel&&0<r('body[data-hhun="1"] #header-outer.detached:not(.invisible)').length&&(a=u.outerHeight(),(e=0)<c.length&&(a-=ot.secondaryHeaderHeight),n=a-(e=0<p.length&&0==r("body.mobile").length?it?p.height():0:e)),this.$element.addClass("no-trans").css("top",o).css("transform","translateY("+n+"px)").addClass("stuck"),i=this,setTimeout(function(){i.$element.removeClass("no-trans")},50),this.$element.parents(".wpb_row").css("z-index",1e4),0<r("#boxed").length&&(n=1e3<Y.width()?.04*r(".container-wrap").width():39,this.$element.css({"margin-left":"-"+n+"px",width:r(".container-wrap").width()}))):(this.$element.css("top","0").removeClass("stuck"),0<r("#boxed").length&&this.$element.css({"margin-left":"0px",width:"100%"})),s&&s.call(this,t)},this),offset:o}));var e=this;setInterval(function(){var t;0<r('body[data-hhun="1"] #header-outer.detached:not(.invisible)').length?(t=u.outerHeight(),0<c.length&&(t-=ot.secondaryHeaderHeight),e.waypoint.options.offset=o+t):e.waypoint.options.offset=o,i.refreshAll()},100)},d.prototype.createWrapper=function(){this.options.wrapper&&this.$element.wrap(this.options.wrapper),this.$wrapper=this.$element.parent(),this.wrapper=this.$wrapper[0]},d.prototype.destroy=function(){this.$element.parent()[0]===this.wrapper&&(this.waypoint.destroy(),this.$element.removeClass(this.options.stuckClass),this.options.wrapper&&this.$element.unwrap())},d.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},i.Sticky=d,1<q(".page-submenu").parents(".span_12").find("> .wpb_column").length&&(e=q(".page-submenu").clone(),n=q(".page-submenu").parents(".wpb_row"),0<q(".page-submenu").parents(".wpb_row.has-global-section").length&&(n=q(".page-submenu").parents(".wpb_row.has-global-section")),q(".page-submenu").remove(),n.before(e)),new Waypoint.Sticky({element:q('.page-submenu[data-sticky="true"]')[0]})),0==q("#nectar_fullscreen_rows").length&&q(".page-submenu").parents(".wpb_row").css("z-index",1e4),q(".page-submenu .mobile-menu-link").on("click",function(){return q(this).parents(".page-submenu").find("ul").stop(!0).slideToggle(350),!1}),q(".page-submenu ul li a").on("click",function(){0<q("body.mobile").length&&q(this).parents(".page-submenu").find("ul").stop(!0).slideToggle(350)}),V=[],"undefined"==typeof NectarLiquid||ot.usingFrontEndEditor||q('.row-bg-wrap[data-bg-animation*="displace-filter"] .row-bg.using-image, .column-image-bg-wrap[data-bg-animation*="displace-filter"] .column-image-bg').each(function(t){var e,a,n=q(this);q(this).is(".row-bg")?(e=q(this).parents(".row-bg-wrap").attr("data-bg-animation"),a="row"):q(this).is(".column-image-bg")&&(e=q(this).parents(".column-image-bg-wrap").attr("data-bg-animation"),a="col"),V[t]=new NectarLiquid(n,e,a)}),ra(),oa(),0<q('.blog-recent[data-style="title_only"]').length&&(l(),Y.on("smartresize",l)),On(),Hn(),Fn(),j.on("mouseover",'.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a',function(){q(this).parents(".grav-wrap").find("img").addClass("hovered")}),j.on("mouseleave",'.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a',function(){q(this).parents(".grav-wrap").find("img").removeClass("hovered")}),j.on("mouseleave",'.container-wrap[data-nav-pos="after_project_2"] #portfolio-nav ul li, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul li',function(){q(this).addClass("mouse-leaving")}),Xn(),Zn(),(0<q(".portfolio-items .col .style-3-alt").length||0<q(".portfolio-items .col .style-3").length||0<q(".portfolio-items .col .style-2").length||0<q(".portfolio-items .col .style-5").length)&&(a="",q(".portfolio-items .col").each(function(){var t=q(this).attr("data-title-color"),e=q(this).attr("data-subtitle-color");0<t.length&&(a+='.col[data-title-color="'+t+'"] .vert-center h3, .portfolio-items[data-ps="6"] .col[data-title-color="'+t+'"] .work-meta h4 { color: '+t+"!important; } ",a+=' .portfolio-items[data-ps="8"] .col[data-title-color="'+t+'"] .line { background-color: '+t+"; }",a+='.portfolio-items[data-ps="8"] .col[data-title-color="'+t+'"] .next-arrow line { stroke: '+t+"; } "),0<e.length&&(a+='.col[data-subtitle-color="'+e+'"] .vert-center p, .portfolio-items[data-ps="6"] .col[data-title-color="'+t+'"] .work-meta p { color: '+e+"!important; } ")}),ee(a,"nectar-portfolio-colors")),0<q("body.search-results").length&&0<q("#search-results article").length&&0==q('#search-results[data-layout="list-no-sidebar"]').length&&0==q('#search-results[data-layout="list-with-sidebar"]').length&&((t=q("#search-results")).is('[data-layout="masonry-no-sidebar"]'),t.imagesLoaded(function(){t.isotope({itemSelector:".result",layoutMode:"packery",packery:{gutter:0}}),t.find("article").css("opacity","1")}),Y.on("resize",function(){t.isotope({layoutMode:"packery",packery:{gutter:0}})})),Gn(),q(".single-portfolio #sidebar").attr("data-follow-on-scroll"),0!=q("body.single-portfolio").length&&0!=q("#sidebar[data-follow-on-scroll]").length&&1==q(".single-portfolio #sidebar").attr("data-follow-on-scroll")&&!j.hasClass("mobile")&&parseInt(q("#sidebar").height())+50<=parseInt(q(".post-area").height())&&(e=Un(),q(".single-portfolio #sidebar").theiaStickySidebar({additionalMarginTop:e,updateSidebarHeight:!1})),$n()}function Za(){this.$toggleBtn=q(".nectar-shop-filters .nectar-shop-filter-trigger"),this.$sidebar=q("#sidebar"),this.sidebarPos=this.$sidebar.hasClass("col_last")?"right":"left",this.state={open:this.getLS()?this.getLS():"true"},this.setup(),this.events()}function Ua(){this.$qty="",this.step=1,this.ajaxTimeout="",this.ajaxTimeoutDur=500,this.state={max:1e5,min:0,currentVal:1,key:0,removeFlag:!1},this.events()}function Ga(){this.state={processing:!1,productID:!1,type:"regular"},this.events()}function Ja(){var e,t,a,n;function i(){!q(".widget_shopping_cart .widget_shopping_cart_content .cart_list .empty").length&&0<q(".widget_shopping_cart .widget_shopping_cart_content .cart_list").length&&(q(".cart-menu-wrap").addClass("has_products"),q("header#top nav > ul, #search-outer #search #close a, header#top .span_9 >.slide-out-widget-area-toggle").addClass("product_added"),q(".cart-menu-wrap").hasClass("static")||q(".cart-menu-wrap, #mobile-cart-link").addClass("first-load"))}function s(){q("#header-outer .cart-notification").stop(!0,!0).fadeOut()}function r(t){var e=Y.width();t.clientX<e-370-o&&q(".nectar-slide-in-cart").hasClass("mouse-accessed")&&(Y.off("mousemove.rightCartOffsetCheck",r),q(".nectar-slide-in-cart").removeClass("open").removeClass("mouse-accessed"))}j.on("click",".product .add_to_cart_button",function(){var t=0<q(this).parents("li").find("h2").length?"h2":"h3",t=q(this).parents("li").find(t).text();q("#header-outer .cart-notification span.item-name").html(t)}),j.on("mouseenter","#header-outer .cart-notification",function(){q(this).hide(),q("#header-outer .widget_shopping_cart").addClass("open").stop(!0,!0).show(),q("#header-outer .cart_list").stop(!0,!0).show(),clearTimeout(e)}),0<q("#header-outer .nectar-woo-cart").length&&q("#header-outer .nectar-woo-cart").hoverIntent(function(){q("#header-outer .widget_shopping_cart").addClass("open").stop(!0,!0).show(),q("#header-outer .cart_list").stop(!0,!0).show(),clearTimeout(e),q("#header-outer .cart-notification").hide()}),j.on("mouseleave","#header-outer .nectar-woo-cart",function(){var t=q(this);setTimeout(function(){t.is(":hover")||(q("#header-outer .widget_shopping_cart").removeClass("open").stop(!0,!0).fadeOut(300),q("#header-outer .cart_list").stop(!0,!0).fadeOut(300))},200)}),0==q('#header-outer[data-cart="false"]').length&&(j.on("added_to_cart",function(t){clearTimeout(e),!q(".widget_shopping_cart .widget_shopping_cart_content .cart_list .empty").length&&0<q(".widget_shopping_cart .widget_shopping_cart_content .cart_list").length&&void 0!==t.type&&(0<q("#header-outer .cart-notification .item-name").length&&0==q("#header-outer .cart-notification .item-name").text().length||(q("#header-outer .cart-menu-wrap").hasClass("has_products")?q("#header-outer .cart-notification").is(":visible")?q("#header-outer .cart-notification").show():q("#header-outer .cart-notification").fadeIn(400):setTimeout(function(){q("#header-outer .cart-notification").fadeIn(400)},400),q('body #header-outer [data-cart-style="slide_in_click"] .cart-menu-wrap').trigger("click"),e=setTimeout(s,2700)))}),j.on("added_to_cart",i)),0==q('#header-outer[data-cart="false"]').length&&(t=setInterval(i,250),setTimeout(function(){clearInterval(t)},4500)),0!=q("body.woocommerce-account #customer_login").length&&(q(".woocommerce-account .woocommerce > #customer_login").prepend('<div class="nectar-form-controls" />'),q(".woocommerce-account .woocommerce > #customer_login > div:not(.nectar-form-controls)").each(function(){var t=q(this).find("> h2").text();q("#customer_login .nectar-form-controls").append('<div class="control">'+t+"</div>")}),q(".woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control").on("click",function(){q(".woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control").removeClass("active"),q(this).addClass("active");var t=q(this).index()+1;q('#customer_login div[class*="u-column"]').hide(),q('#customer_login div[class*="u-column"].col-'+t).show(),setTimeout(function(){q('#customer_login div[class*="u-column"]').removeClass("visible"),q('#customer_login div[class*="u-column"].col-'+t).addClass("visible")},30)}),q(".woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control:nth-child(1)").trigger("click")),0<q('.products[data-rm-m-hover="1"]').length&&ot.usingMobileBrowser||(j.on("mouseover",".text_on_hover .product-wrap, .text_on_hover > a:first-child",function(){q(this).parent().addClass("hovered")}),j.on("mouseout",".text_on_hover .product-wrap, .text_on_hover > a:first-child",function(){q(this).parent().removeClass("hovered")})),(0<q(".material.product").length||0<q(".minimal.product").length||0<q('.nectar-fancy-box[data-style="parallax_hover"]').length||0<q('.nectar-category-grid[data-shadow-hover="yes"]').length||0<q('.nectar-post-grid[data-shadow-hover="yes"]').length)&&(n=101,j.on("mouseenter",'.material.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-post-grid[data-shadow-hover="yes"] .nectar-post-grid-item, .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item',function(){n++,q(this).css("z-index",n+1)}),j.on("mouseleave",'.material.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-post-grid[data-shadow-hover="yes"] .nectar-post-grid-item, .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item',function(){var t=q(this);setTimeout(function(){t.is(":hover")||t.css("z-index",100)},350)}),L.nectarOptions&&L.nectarOptions.woo_minimal_product_effect&&"default"===L.nectarOptions.woo_minimal_product_effect&&(j.on("mouseenter",".minimal.product",function(){n++,q(this).css("z-index",n+1)}),j.on("mouseleave",".minimal.product",function(){var t=q(this);setTimeout(function(){t.is(":hover")||t.css("z-index",100)},350)})),setInterval(function(){0<q('.nectar-fancy-box[data-style="parallax_hover"]:hover').length||0<q(".minimal.product:hover").length||(q('.material.product:not(:hover), .minimal.product:not(:hover), .nectar-fancy-box[data-style="parallax_hover"]:not(:hover), .nectar-post-grid[data-shadow-hover="yes"] .nectar-post-grid-item:not(:hover), .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item:not(:hover)').css("z-index",100),n=101)},1e4)),q(".products .classic .product-wrap .add_to_cart_button").wrapInner("<span />"),q(".products .classic .product-wrap .add_to_cart_button").prepend('<i class="normal icon-salient-cart"></i>'),0<q('.products[data-rm-m-hover="1"]').length&&ot.usingMobileBrowser||!L.nectarOptions||!L.nectarOptions.woo_minimal_product_effect||"default"!==L.nectarOptions.woo_minimal_product_effect||(j.on("mouseover",".products .minimal.product",function(){var t,e,a,n,a,n,t,a=(e=q(this)).width(),n=e.height(),a=(parseInt(a)+40)/parseInt(a),n=(parseInt(n)+40)/parseInt(n);e.addClass("hover-bound"),e.find(".background-color-expand").css({transform:"scale("+a+","+n+") translateY(0px) translateZ(0px)"})}),j.on("mouseleave",".products .minimal.product",function(){q(this).find(".background-color-expand").css({transform:"scale(1, 1) translateY(0) translateZ(0px)"})})),q(".products .minimal.product").each(function(){q(this).is(":hover")&&q(this).trigger("mouseover")}),q(".woocommerce #sidebar .widget.woocommerce").each(function(){0==q(this).find("> h4").length&&q(this).addClass("no-widget-title")}),j.on("click","#sidebar .widget.woocommerce:not(.widget_price_filter) h4",function(){L.nectarOptions&&"false"!==L.nectarOptions.woo_sidebar_toggles&&Y.width()<1e3&&(q(this).parent().is(".widget_product_tag_cloud")&&q(this).parent().find("> div").slideToggle(),q(this).parent().is(".woocommerce-widget-layered-nav")&&0<q(this).parent().find("> .woocommerce-widget-layered-nav-dropdown").length&&q(this).parent().find("> .woocommerce-widget-layered-nav-dropdown").slideToggle(),q(this).parent().find("> ul").slideToggle(),q(this).parent().toggleClass("open-filter"))}),j.on("mouseenter",'#header-outer [data-cart-style="slide_in"] .cart-menu-wrap',function(){0<q(".nectar-slide-in-cart ul.cart_list li:not(.empty)").length&&(q(".nectar-slide-in-cart").addClass("open"),Y.on("mousemove.rightCartOffsetCheck",r))}),j.on("mouseenter",".nectar-slide-in-cart",function(){q(this).addClass("mouse-accessed")}),j.on("click",'#header-outer [data-cart-style="slide_in_click"] .cart-menu-wrap, #mobile-cart-link[data-cart-style="slide_in_click"]',function(){return!(!j.is(".woocommerce-checkout")&&!j.is(".woocommerce-cart"))||(q(".nectar-slide-in-cart, .nectar-slide-in-cart-bg").addClass("open"),q(".nectar-slide-in-cart-bg").addClass("revealed"),clearTimeout(a),q(".style_slide_in_click div.quantity").each(function(){1<q(this).find(".minus").length&&q(this).find(".minus").first().remove(),1<q(this).find(".plus").length&&q(this).find(".plus").first().remove()}),!1)}),j.on("click",".nectar-slide-in-cart.style_slide_in_click .close-cart, .nectar-slide-in-cart-bg",function(){return q(".nectar-slide-in-cart, .nectar-slide-in-cart-bg").removeClass("open"),a=setTimeout(function(){q(".nectar-slide-in-cart-bg").removeClass("revealed")},400),!1}),new Ua,L.nectarOptions&&"1"===L.nectarOptions.ajax_add_to_cart&&new Ga,L.nectarOptions&&"1"===L.nectarOptions.woo_product_filter_toggle&&j.is(".archive.woocommerce")&&new Za,q(T).on("yith-wcan-ajax-filtered",Ue)}function Ka(){this.$el=q("#search-outer #search .container #s"),this.$container="",this.$parent="",this.$searchEl=q("#search-outer"),this.request="",this.timeout="",this.setup(),this.events(),this.state={requesting:!1,open:!1,prevResults:""},this.minChars=2}function tn(){L.nectarOptions&&L.nectarOptions.quick_search&&"true"===L.nectarOptions.quick_search&&new Ka;var t=0<q("#search-outer #search input[type=text][data-placeholder]").length?q("#search-outer #search input[type=text]").attr("data-placeholder"):"";function e(){var t;j.hasClass("ascend")||0<q('body[data-header-format="left-header"]').length&&0==q("body.material").length?(q("#search-outer").stop().transition({opacity:0},300,"cubic-bezier(0.2, 1, 0.3, 1)"),a.addClass("inactive"),setTimeout(function(){q("#search-outer").hide(),a.removeClass("inactive")},300)):0==q("body.material").length&&q("#search-outer").stop(!0).fadeOut(450,"easeOutExpo"),j.hasClass("material")&&(q(L).trigger("nectar-search-close"),t=u.hasClass("results-shown")?800:400,setTimeout(function(){q("#search-outer #s").val("")},t),q("#ajax-content-wrap").removeClass("material-open"),dt.materialSearchOpen=!1,u.removeClass("material-search-open"),q("#search-outer").removeClass("material-open"),q("#fp-nav").removeClass("material-ocm-open"))}j.hasClass("material")&&0==q("#header-outer .bg-color-stripe").length&&u.append('<div class="bg-color-stripe" />'),j.on("click","#search-btn a",function(){return!1}),j.on("click","#search-btn a:not(.inactive), #header-outer .mobile-search",function(){return!q(this).hasClass("open-search")&&(j.hasClass("original")&&0<q(".slide-out-widget-area-toggle.mobile-icon a.open").length&&(q(".slide-out-widget-area-toggle.mobile-icon a").addClass("non-human-allowed").trigger("click"),setTimeout(function(){q(".slide-out-widget-area-toggle.mobile-icon a").removeClass("non-human-allowed")},100)),j.hasClass("ascend")||0<q('body[data-header-format="left-header"]').length&&0==q("body.material").length?(q("#search-outer > #search form, #search-outer #search .span_12 span, #search-outer #search #close").css("opacity",0),q("#search-outer > #search form").css("transform","translateY(-30px)"),q("#search-outer #search .span_12 span").css("transform","translateY(20px)"),q("#search-outer").show(),q("#search-outer").stop().transition({scale:"1,0",opacity:1},0).transition({scale:"1,1"},700,"cubic-bezier(0.2, 1, 0.3, 1)"),q("#search-outer > #search form").delay(350).transition({opacity:1,transform:"translateY(0)"},700,"cubic-bezier(0.2, 1, 0.3, 1)"),q("#search-outer #search #close").delay(500).transition({opacity:1},700,"cubic-bezier(0.2, 1, 0.3, 1)"),q("#search-outer #search .span_12 span").delay(450).transition({opacity:1,transform:"translateY(0)"},700,"cubic-bezier(0.2, 1, 0.3, 1)")):j.hasClass("material")?(q('#header-outer[data-transparent-header="true"] .bg-color-stripe').css("transition",""),q("#search-outer, #ajax-content-wrap").addClass("material-open"),dt.materialSearchOpen=!0,u.addClass("material-search-open"),q("#fp-nav").addClass("material-ocm-open"),q(L).trigger("nectar-search-open")):q("#search-outer").stop(!0).fadeIn(600,"easeOutExpo"),setTimeout(function(){q("#search input[type=text]").trigger("focus"),q("#search input[type=text]").val()==t&&q("#search input[type=text]").setCursorPosition(0)},300),q(this).toggleClass("open-search"),q(".slide-out-widget-area-toggle a:not(#toggle-nav).open:not(.animating)").trigger("click"),!1)}),q("body:not(.material)").on("keydown","#search input[type=text]",function(){q(this).val()==t&&q(this).val("")}),q("body:not(.material)").on("keyup","#search input[type=text]",function(){0==q(this).val().length&&(q(this).val(t),q(this).setCursorPosition(0))}),j.on("click","#close",function(){return e(),a.removeClass("open-search"),q("#header-outer .mobile-search").removeClass("open-search"),!1}),q("body:not(.material)").on("blur","#search-box input[type=text]",function(){e(),a.removeClass("open-search"),q("#header-outer .mobile-search").removeClass("open-search")}),q("body.material").on("click","#ajax-content-wrap",function(t){void 0!==t.originalEvent&&(e(),a.removeClass("open-search"),q("#header-outer .mobile-search").removeClass("open-search"))}),0<q("body.material").length&&q(T).on("keyup",function(t){27==t.keyCode&&(e(),a.removeClass("open-search"),0<q(".ocm-effect-wrap.material-ocm-open").length&&q(".slide-out-widget-area-toggle.material-open a").trigger("click"))})}function en(){function t(){Zt()?u.addClass("within-custom-breakpoint"):u.removeClass("within-custom-breakpoint")}function e(){var t,e,a,t;ot.winW<1e3||0<q("body.page-template-template-no-header").length||0<q("body.page-template-template-no-header-footer").length||0<q("body.material-ocm-open").length||"none"==q('#header-outer[data-has-menu="true"][data-format="centered-menu-bottom-bar"] .span_9').css("display")||"none"==q('#header-outer[data-has-menu="true"][data-format="centered-menu-bottom-bar"] .span_9 > nav').css("display")||(p=0<p.length&&0<ot.secondaryHeaderHeight?p.height():0,n.hasClass("force-condense")||!n.hasClass("fixed-menu")&&ot.scrollTop>=d?(t=parseInt(i.position().top)-o-parseInt(ot.adminBarHeight)+parseInt(ot.secondaryHeaderHeight)-p,0<q('#header-outer[data-megamenu-rt="1"]').length&&0<q("#header-outer .megamenu").length&&0<q('#header-outer[data-transparent-header="true"]').length&&u.removeClass("no-transition"),n.addClass("fixed-menu").removeClass("transparent").css({top:"-"+t+"px",position:"fixed"}),n.is('[data-menu-bottom-bar-align="left"]')||(e=0<q("header#top .span_9 nav > ul .menu-title-text").length?q("header#top .span_9 nav > ul .menu-title-text").offset().top:0,a=0<r.find("li:first-child > *").length?r.find("li:first-child > *").offset().top:0,t=0<i.find("nav .sf-menu > li > a .menu-title-text").length?(20-parseInt(i.find("nav .sf-menu > li > a .menu-title-text").height()))/2:2,r.css("transform","translateY("+Math.ceil(parseInt(e)-parseInt(a)-t)+"px)"),r.find(".nectar-woo-cart").css("height",n.height()+parseInt(n.css("top"))-parseInt(ot.adminBarHeight)))):(n.hasClass("force-condense-remove")||n.hasClass("fixed-menu")&&ot.scrollTop<d)&&(n.removeClass("fixed-menu").css({top:"0",position:"absolute"}),r.css("transform","translateY(0px)"),r.find(".nectar-woo-cart").css("height",""),0==q("#header-outer.transparent").length&&(0<q('#header-outer[data-megamenu-rt="1"]').length&&0<q("#header-outer .megamenu").length&&u.removeClass("no-transition"),0<q('#header-outer[data-megamenu-rt="1"]').length&&0<q('#header-outer[data-transparent-header="true"]').length&&0<q("#header-outer .megamenu").length?"true"==u.attr("data-transparent-header")&&0==q(".nectar-box-roll").length&&0==q(".megamenu.sfHover:not(.width-75):not(.width-50)").length?(u.addClass("transparent"),u.removeClass("no-transition")):"true"==u.attr("data-transparent-header")&&0==q(".nectar-box-roll").length&&0<q(".megamenu.sfHover").length&&u.addClass("no-transition"):"true"==u.attr("data-transparent-header")&&0==q(".nectar-box-roll").length&&u.addClass("transparent"))))}var n,i,a,s,r,o,l,d;0<q('#header-outer[data-format="centered-menu-bottom-bar"]').length&&(n=u,i=q('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),a=q('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_3'),s=c,r=a.find("nav >ul.buttons"),o=parseInt(q("body.material #header-outer").attr("data-padding")),l=parseInt(q("body.material #header-outer").attr("data-logo-height")),a=parseInt(a.css("margin-bottom")),d=o+a+l+parseInt(ot.secondaryHeaderHeight),0<s.length&&0==q('#header-outer[data-remove-fixed="1"]').length&&0<q('#header-outer[data-condense="true"]').length&&setTimeout(function(){"none"!=c.css("display")&&(ot.secondaryHeaderHeight=c.outerHeight())},50),0<q('#header-outer[data-condense="true"]').length&&(Y.on("scroll.centeredNavCondense",e),Y.trigger("scroll"),Y.on("resize",function(){(ot.winW<1e3||Zt())&&(n.addClass("force-condense-remove"),Y.off("scroll.centeredNavCondense"))}),Y.on("smartresize",function(){t(),1e3<=ot.winW&&0==Zt()&&n.hasClass("force-condense-remove")&&(e(),n.removeClass("force-condense-remove"),setTimeout(function(){ot.scrollTop>=d&&(n.addClass("force-condense"),e(),n.removeClass("force-condense")),Y.on("scroll.centeredNavCondense",e)},200))}),t()))}function an(){var t,e,a,n,i,e;1e3<ot.winW?(a=q('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li').length,0<q("#header-outer #social-in-menu").length&&a--,t=0==q("#header-outer #top .row .col.span_3 #logo img:visible").length?parseInt(q("#header-outer #top .row .col.span_3").width()):parseInt(q("#header-outer #top .row .col.span_3 img:visible").width()),e=0<q('#header-outer[data-lhe="animated_underline"]').length?parseInt(q("header#top nav > ul > li:first-child > a").css("margin-right")):parseInt(q("header#top nav > ul > li:first-child > a").css("padding-right")),e+=30<e?45:20<e?40:30,(j.hasClass("rtl")?q('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:nth-child('+Math.floor(a/2)+")").css({"margin-left":t+e+"px"}):q('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:nth-child('+Math.floor(a/2)+")").css({"margin-right":t+e+"px"})).addClass("menu-item-with-margin"),i=n=0,q('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:not(#social-in-menu)').each(function(t){t+1<=Math.floor(a/2)?n+=q(this).width():i+=q(this).width()}),e=Math.abs(i-n),i<n||j.hasClass("rtl")&&n<i?q("#header-outer #top .row > .col.span_9").css("padding-right",e):q("#header-outer #top .row > .col.span_9").css("padding-left",e),q('#header-outer[data-format="centered-logo-between-menu"] nav').css("visibility","visible")):0<q('#header-outer[data-format="centered-logo-between-menu"]').length&&ot.winW<1e3&&q("#header-outer .row > .col.span_9").css({"padding-right":"0","padding-left":"0"})}function nn(){var t;0<q('#header-outer[data-format="centered-logo-between-menu"]').length&&(b?b&&0<q('#header-outer[data-format="centered-logo-between-menu"]').length&&0<q("header#top #logo img:first[src]").length&&((t=new Image).src=q("header#top #logo img:first").attr("src"),t.onload=function(){an()}):an(),Y.on("smartresize",an))}function sn(){0<q("#nectar_fullscreen_rows").length&&1==nt&&u.attr("data-permanent-transparent","false"),ot.usingMobileBrowser&&0<q('#header-outer[data-mobile-fixed="1"]').length&&0==q('#header-outer[data-transparent-header="true"]').length&&q("#header-space").css("height",u.outerHeight()),L.nectarOptions&&L.nectarOptions.header_entrance&&"true"==L.nectarOptions.header_entrance&&(0==ot.scrollTop?q("#header-outer").addClass("entrance-animation"):q("#header-outer").css("opacity","1"))}q.fn.dlmenu=function(e){var a;return"string"==typeof e?(a=Array.prototype.slice.call(arguments,1),this.each(function(){var t=q.data(this,"menu");t?q.isFunction(t[e])&&"_"!==e.charAt(0)?t[e].apply(t,a):Ya("no such method '"+e+"' for menu instance"):Ya("cannot call methods on menu prior to initialization; attempted to call method '"+e+"'")})):this.each(function(){var t=q.data(this,"menu");t?t._init():t=q.data(this,"menu",new q.DLMenu(e,this))}),this},Za.prototype.events=function(){this.$toggleBtn.on("click",this.toggle.bind(this)),this.$sidebar.find(".nectar-close-btn-wrap").on("click",this.mobileToggle.bind(this)),q(L).on("smartresize",this.mobileToggleResize.bind(this))},Za.prototype.mobileToggleResize=function(){this.$sidebar.hasClass("open")&&999<ot.winW&&(this.$sidebar.removeClass("open"),this.$sidebar.find(".nectar-close-btn-wrap").removeClass("open"),q(".container-wrap").css("z-index","11"))},Za.prototype.mobileToggle=function(){return this.$sidebar.hasClass("open")?(this.$sidebar.removeClass("open"),this.$sidebar.find(".nectar-close-btn-wrap").removeClass("open"),q(".container-wrap").css("z-index","11")):(q(".container-wrap").css("z-index","10000"),this.$sidebar.addClass("open"),this.$sidebar.find(".nectar-close-btn-wrap").addClass("open")),!1},Za.prototype.toggle=function(){if(ot.winW<1e3)return this.mobileToggle(),!1;var t="";return"true"==this.state.open?(t=this.state.open="false",this.$toggleBtn.find(".hide").hide(),this.$toggleBtn.find(".show").show(),this.$toggleBtn.find(".top-line, .bottom-line").css({transform:"translateX(0)"}),"left"==this.sidebarPos?this.$sidebar.css({"margin-right":"-25%",opacity:"0"}):this.$sidebar.css({"margin-left":"-25%",opacity:"0"}),this.$sidebar.find("> .inner").css({transform:"left"==this.sidebarPos?"translateX(-100%)":"translateX(100%)"})):(t=this.state.open="true",this.$toggleBtn.find(".show").hide(),this.$toggleBtn.find(".hide").show(),this.$toggleBtn.find(".top-line").css({transform:"translateX(10px)"}),this.$toggleBtn.find(".bottom-line").css({transform:"translateX(-10px)"}),"left"==this.sidebarPos?this.$sidebar.css({"margin-right":"0",opacity:"1"}):this.$sidebar.css({"margin-left":"0",opacity:"1"}),this.$sidebar.find("> .inner").css({transform:"translateX(0)"})),setTimeout(function(){q(L).trigger("nectar-product-filters-layout")},425),"undefined"!=typeof Storage&&localStorage.setItem("nectar_product_filters_vis",t),!1},Za.prototype.setup=function(){var t;this.$sidebar.find(".widget.woocommerce").addClass("open-filter").find("ul").css({display:"block"}),this.$sidebar.find(".widget.woocommerce.widget_product_tag_cloud").find("div.tagcloud").css({display:"block"}),0<q(".nectar-active-product-filters").length&&(t=q(".nectar-active-product-filters").clone(),this.$sidebar.find("> .inner").prepend(t))},Za.prototype.getLS=function(){return"undefined"!=typeof Storage?localStorage.getItem("nectar_product_filters_vis"):null},Ua.prototype.updateState=function(t){var e=0;!0===this.checkMiniCart(this.$qty)&&(e=this.$qty.attr("name").match(/cart\[(\w+)\]/)[1]);var a=parseFloat(this.$qty.val());a&&""!==a&&"NaN"!==a||(a=0);var n=parseFloat(this.$qty.attr("max")),i=parseFloat(this.$qty.attr("min"));""!==n&&"NaN"!==n&&!isNaN(n)||(n=""),""!==i&&"NaN"!==i&&!isNaN(i)||(i=0),this.state={currentVal:a,max:n,min:i,key:e}},Ua.prototype.events=function(){var e=this;q("body").on("click",".quantity .plus",function(){e.$qty=q(this).closest(".quantity").find(".qty"),e.setStep(),e.updateState(),e.increment(q(this))}),q("body").on("click",".quantity .minus",function(){e.$qty=q(this).closest(".quantity").find(".qty"),e.setStep(),e.updateState(),e.decrement(q(this))}),q("body").on("keyup",".woocommerce-mini-cart .quantity .qty",function(t){e.$qty=q(this),e.updateState(),e.state.max&&e.$qty.val()>e.state.max&&e.$qty.val(e.state.max),e.state.min&&(e.state.min==e.state.currentVal||e.state.currentVal<e.state.min)&&(e.state.removeFlag=!0),q(this).trigger("change")}),q("body").on("change",".woocommerce-mini-cart .quantity .qty",function(t){t.originalEvent||!0!==e.checkMiniCart(e.$qty)||e.updateCart(e.$qty.val())})},Ua.prototype.setStep=function(){var t;this.$qty.is("[step]")&&(t=parseInt(this.$qty.attr("step")),isNaN(t)||""==t||0==t||(this.step=t))},Ua.prototype.increment=function(){this.state.max&&(this.state.max==this.state.currentVal||this.state.currentVal>this.state.max)?this.$qty.val(this.state.max):this.$qty.val(this.state.currentVal+parseFloat(this.step)),this.$qty.trigger("change")},Ua.prototype.decrement=function(){this.state.min&&(this.state.min==this.state.currentVal||this.state.currentVal<this.state.min)?(this.$qty.val(0),this.state.removeFlag=!0):0<this.state.currentVal&&this.$qty.val(this.state.currentVal-parseFloat(this.step)),this.$qty.trigger("change")},Ua.prototype.checkMiniCart=function(t){return 0<t.parents(".woocommerce-mini-cart").length},Ua.prototype.updateCart=function(t){var a=this;clearTimeout(this.ajaxTimeout),this.ajaxTimeout=setTimeout(function(){a.$qty.closest(".widget_shopping_cart_content").addClass("loading"),a.$qty.closest(".woocommerce-mini-cart-item").addClass("blockUI").addClass("blockOverlay"),q.ajax({type:"POST",url:L.nectarLove.ajaxurl,data:{action:"nectar_minicart_update_quantity",quantity:t,item_key:a.state.key},cache:!1,success:function(t){var e;t&&(a.$qty.closest(".widget_shopping_cart_content").removeClass("loading"),a.$qty.closest(".woocommerce-mini-cart-item").removeClass("blockUI").removeClass("blockOverlay"),(e=a.$qty.closest(".widget_shopping_cart_content").find(".woocommerce-mini-cart__total")).find(".woocommerce-Price-amount, .tax_label").remove(),e.append(t.subtotal),!0===a.state.removeFlag&&(a.$qty.closest(".woocommerce-mini-cart-item").remove(),a.state.removeFlag=!1,q(T.body).trigger("updated_wc_div")),0<q("#header-outer a.cart-contents .cart-wrap span").length&&q("#header-outer a.cart-contents .cart-wrap span").text(t.item_count))}})},this.ajaxTimeoutDur)},Ga.prototype.events=function(){q("body:not(.woocommerce-account)").on("submit","form.cart",this.addToCartAJAX.bind(this))},Ga.prototype.addNotices=function(t){var a=q(".nectar-slide-in-cart.style_slide_in_click .widget_shopping_cart_content");q.each(t,function(t,e){a.prepend('<div class="nectar-notice">'+e.notice+"</div>")}),setTimeout(function(){a.find(".nectar-notice").slideUp(function(){q(this).remove()})},6e3)},Ga.prototype.addToCartAJAX=function(t){var e=this,a=q(t.currentTarget),n,i,t,a;a.closest(".product").hasClass("product-type-external")||wc_add_to_cart_params&&"yes"===wc_add_to_cart_params.cart_redirect_after_add||(t.preventDefault(),1==e.state.processing)||(e.state.processing=!0,e.state.productID=!1,e.state.type="regular",0<a.parents(".nectar-quick-view-box").length&&(e.state.type="quickview"),n=a.closest(".product"),i=a.find("button.single_add_to_cart_button"),t=a.serializeArray(),a=0,n.is('[id*="product-"]')&&(a=n.attr("id").match(/\d+/))&&a[0]&&(e.state.productID=a[0]),!1===e.state.productID&&0<i.length&&(a=i.val().match(/\d+/))&&a[0]&&(e.state.productID=a[0]),!1!==e.state.productID?((i="quickview"===e.state.type?q(".single_add_to_cart_button_wrap .single_add_to_cart_button"):i).prepend('<div class="loading-wrap"><div class="loading" /></div></div>'),setTimeout(function(){i.addClass("processing")},50),t.push({name:"action",value:"nectar_ajax_add_to_cart"},{name:"add-to-cart",value:e.state.productID}),q.ajax({type:"POST",url:L.nectarLove.ajaxurl,data:t,cache:!1,success:function(t){setTimeout(function(){e.state.processing=!1,i.removeClass("processing"),i.find(".loading-wrap").remove()},300),t&&t.fragments&&(q("body").trigger("added_to_cart",[t.fragments,t.cart_hash]),t.notices&&0<t.notices.length&&setTimeout(function(){e.addNotices(t.notices)},100),"quickview"===e.state.type&&q(".nectar-quick-view-box .close").trigger("click"))}})):console.log("Error: no product ID found."))},Ka.prototype.setup=function(){this.$container=q('<div class="inner"></div>'),q("#search-outer").append(q('<div class="nectar-ajax-search-results"><div class="container"></div></div>')),this.$parent=q("#search-outer .nectar-ajax-search-results"),q("#search-outer .nectar-ajax-search-results .container").append(this.$container)},Ka.prototype.events=function(){var t,e,a,n=this;this.throttled=(t=this.getResults.bind(this),a=!(e=350),function(){a||(t.call(),a=!0,setTimeout(function(){a=!1},e))}),this.$el.on("keyup",this.keyHandle.bind(this)),q(L).on("resize",this.resize.bind(this)),q(L).on("nectar-search-close",function(){n.resetHeight(),n.requestCheck()})},Ka.prototype.keyHandle=function(t){-1==[16,91,32,37,39,17].indexOf(t.keyCode)&&(this.throttled(),this.debouncedSearch())},Ka.prototype.debouncedSearch=function(){var t=this;clearTimeout(this.timeout),this.timeout=setTimeout(function(){t.state.requesting||t.getResults()},400)},Ka.prototype.resize=function(){this.$parent.css({"max-height":""}),!0===this.state.open&&this.$parent.css({"max-height":parseInt(this.$container.outerHeight())+"px"})},Ka.prototype.resetHeight=function(){this.$parent.css({"max-height":""}),setTimeout(function(){u.removeClass("results-shown")},400),this.state.prevResults="",this.state.open=!1},Ka.prototype.requestCheck=function(){!0===this.state.requesting&&(this.request.abort(),this.state.requesting=!1)};var rn={timeoutQueued:!(Ka.prototype.getResults=function(){var e=this,t=this.$el.val();if(0==t.length||t.length<this.minChars)return u.removeClass("results-shown"),this.requestCheck(),void this.resetHeight();this.request=q.ajax({type:"POST",url:L.nectarLove.ajaxurl,data:{action:"nectar_ajax_ext_search_results",search:t},cache:!1,success:function(t){e.state.requesting=!1,t||e.resetHeight(),t&&t.content&&t.content!==e.state.prevResults&&e.$searchEl.hasClass("material-open")&&(e.$container.html(t.content),e.$parent.css({"max-height":parseInt(e.$container.outerHeight())+"px"}),setTimeout(function(){u.addClass("results-shown")},200),1e3<=ot.winW&&!u.hasClass("results-shown")&&(e.$container.find(".product, .search-post-item").css({opacity:"0",transform:"translateY(25px)",transition:"none"}),setTimeout(function(){e.$container.find(".product, .search-post-item").css({transition:"box-shadow 0.25s ease, opacity 0.55s cubic-bezier(0.2, 0.6, 0.4, 1), transform 0.55s cubic-bezier(0.2, 0.6, 0.4, 1)"})},50),e.$container.find(".product, .search-post-item").each(function(t){var e=q(this);setTimeout(function(){e.css({opacity:"1",transform:"translateY(0)"})},50+60*t)})),e.state.open=!0,e.state.prevResults=t.content)}}),this.state.requesting=!0}),visible:!0,init:!1,raf:""};function on(){var i=0,s=0==y&&0<q('#page-header-bg[data-parallax="1"]').length?200:60,t=3,r=0<q('.page-submenu[data-sticky="true"]').length,o=T.body.offsetHeight;0==rn.init&&setInterval(function(){1!=dt.materialOffCanvasOpen&&(o=T.body.offsetHeight)},1500),rn.raf=requestAnimationFrame(function t(){u[0].classList.add("detached");var e=ot.scrollTop,a=Math.abs(e-i),n,a;return 1==dt.animatedScrolling||1==dt.preventScroll||1==dt.ocmOpen?s<e&&(1==dt.animatedScrolling&&1==y&&0==dt.permanentTransHeader&&u.removeClass("transparent").addClass("scrolling"),i=ot.scrollTop,e=ot.scrollTop):1==dt.materialOffCanvasOpen||1==dt.materialSearchOpen?1==dt.materialSearchOpen&&1==y&&(0==dt.permanentTransHeader&&s<e?u.removeClass("transparent").addClass("scrolling"):u.addClass("transparent").removeClass("scrolling")):(u.hasClass("side-widget-open")||q("#header-outer .slide-out-widget-area-toggle a").hasClass("animating")||(0<c.length&&(s<e?(c.addClass("hide-up"),u.css("transform","translateY(-"+ot.secondaryHeaderHeight+"px)")):(c.removeClass("hide-up"),u.css("transform","0px)"))),s<e?(0==dt.permanentTransHeader&&(0==rn.timeoutQueued&&setTimeout(function(){0==dt.ocmOpen&&(u.removeClass("transparent"),u.addClass("scrolling")),rn.timeoutQueued=!1},400),rn.timeoutQueued=!0),u.removeClass("no-transition"),3<=a&&(i<e?(u.hasClass("invisible")||(u.addClass("invisible").removeClass("at-top"),1e3<ot.winW&&0<q(".sf-menu").length&&q().superfish&&(q(".sf-menu").superfish("hide"),q("header#top nav > ul.sf-menu > li.menu-item-over").removeClass("menu-item-over"))),1==r&&q(".page-submenu.stuck").css("transform","translateY(0px)").addClass("header-not-visible")):(u.hasClass("invisible")&&u.removeClass("invisible"),1==r&&(n=u.outerHeight(),0<c.length&&(n-=ot.secondaryHeaderHeight),0<p.length&&999<ot.winW?(l=it?p.height():0,q(".page-submenu.stuck").css("transform","translateY("+(n-l)+"px)").removeClass("header-not-visible")):q(".page-submenu.stuck").css("transform","translateY("+n+"px)").removeClass("header-not-visible"))))):(a=0<c.length?32:0,e<=(a=0<p.length?0<c.length?32+p.height():p.height():a)&&(u.addClass("at-top").removeClass("invisible").removeClass("scrolling"),999<ot.winW&&0<q('#header-outer[data-megamenu-rt="1"]').length&&1==y&&0<q("#header-outer .megamenu").length?0==q(".nectar-box-roll").length&&0==q(".megamenu.sfHover:not(.width-75):not(.width-50)").length?u.addClass("transparent").css("transform","translateY(0)").removeClass("no-transition"):0<q(".nectar-box-roll").length&&u.css("transform","translateY(0)").addClass("at-top-before-box"):1==y&&0==st.inUse?u.addClass("transparent").css("transform","translateY(0)"):1==st.inUse&&u.css("transform","translateY(0)").addClass("at-top-before-box"))),ot.winH+ot.scrollTop>=o&&(u.removeClass("invisible"),1==r&&(n=u.outerHeight(),0<c.length&&(n-=ot.secondaryHeaderHeight),0<p.length&&999<ot.winW?(l=it?p.height():0,q(".page-submenu.stuck").css("transform","translateY("+(n-l)+"px)").removeClass("header-not-visible")):q(".page-submenu.stuck").css("transform","translateY("+n+"px)").removeClass("header-not-visible")))),i=e),void(rn.raf=requestAnimationFrame(t))}),0==rn.init&&(rn.init=!0)}function ln(){var t=ot.scrollTop,e=ot.winW,a=30;(a=1==y&&!ot.usingMobileBrowser?0:a)<t&&1e3<=e&&0==q("body.material-ocm-open").length&&(j.is(".material")&&(0==q("#search-outer.material-open").length&&q('#header-outer[data-transparent-header="true"] .bg-color-stripe').css("transition","none"),0<c.length&&(c.addClass("hide-up"),u.css("transform","translateY(-"+ot.secondaryHeaderHeight+"px)"))),0<q('#header-outer[data-megamenu-rt="1"]').length&&0<q('#header-outer[data-transparent-header="true"]').length&&0<q("#header-outer .megamenu").length?"true"==u.attr("data-transparent-header")&&0==q("#header-outer.side-widget-open").length&&0==q('#header-outer[data-permanent-transparent="1"]').length&&0==q(".megamenu.sfHover:not(.width-75):not(.width-50)").length&&(u.removeClass("transparent"),u.removeClass("no-transition")):"true"==u.attr("data-transparent-header")&&0==q("#header-outer.side-widget-open").length&&0==q('#header-outer[data-permanent-transparent="1"]').length&&u.removeClass("transparent"),q("#header-outer:not(.small-nav) header#top nav > ul > li.menu-item-with-margin").stop(!0,!0).animate({"margin-right":parseInt(q("header#top nav > ul > li.menu-item-with-margin").css("margin-right"))-3*parseInt(m)+"px"},{queue:!1,duration:250,easing:"easeOutCubic"}),q("#header-outer, #search-outer").addClass("small-nav"),0<q('#header-outer[data-full-width="true"][data-transparent-header="true"]').length&&0<p.length&&1==it&&q('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({padding:"0"},{queue:!1,duration:250,easing:"easeOutCubic"}),0<q(".nectar-box-roll").length&&0==q('#header-outer[data-permanent-transparent="1"]').length&&q("#ajax-content-wrap").animate({"margin-top":Math.floor(g-m+2*f/1.8+ot.adminBarHeight+ot.secondaryHeaderHeight)},{queue:!1,duration:250,easing:"easeOutCubic"}),Y.off("scroll.headerResizeEffect",ln),Y.on("scroll.headerResizeEffect",dn),q('#header-outer[data-transparent-header="true"]').css("transition","transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out"),q('#header-outer[data-transparent-header="true"] .cart-menu').css("transition","none"),setTimeout(function(){q('#header-outer[data-transparent-header="true"]').css("transition","transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out"),q('#header-outer[data-transparent-header="true"] .cart-menu').css("transition","border-color 0.30s ease")},300))}function dn(){var t=ot.scrollTop,e=ot.winW,a=30;if(j.is(".material-ocm-open"))return!1;(t<=(a=1==y&&!ot.usingMobileBrowser?0:a)&&1e3<=e||0<q(".small-nav").length&&0<q("#ajax-content-wrap.no-scroll").length)&&(q("#header-outer, #search-outer").removeClass("small-nav"),0<q('#header-outer[data-megamenu-rt="1"]').length&&0<q('#header-outer[data-transparent-header="true"]').length&&0<q("#header-outer .megamenu").length?"true"==u.attr("data-transparent-header")&&0==q(".nectar-box-roll").length&&0==q(".megamenu.sfHover:not(.width-75):not(.width-50)").length&&(u.addClass("transparent"),u.removeClass("no-transition")):"true"==u.attr("data-transparent-header")&&0==q(".nectar-box-roll").length&&u.addClass("transparent"),0<q('#header-outer[data-full-width="true"][data-transparent-header="true"]').length&&0<p.length&&1==it&&q('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({padding:"0 28px"},{queue:!1,duration:250,easing:"easeOutCubic"}),q("header#top nav > ul > li.menu-item-with-margin").stop(!0,!0).animate({"margin-right":parseInt(q("header#top nav > ul > li.menu-item-with-margin").css("margin-right"))+3*parseInt(m)+"px"},{queue:!1,duration:150,easing:"easeOutCubic"}),0<c.length&&(c.removeClass("hide-up"),u.removeClass("hide-up").css("transform","translateY(0%)")),0<q(".nectar-box-roll").length&&0==q('#header-outer[data-permanent-transparent="1"]').length&&q("#ajax-content-wrap").animate({"margin-top":Math.floor(g+2*f+ot.adminBarHeight+ot.secondaryHeaderHeight)},{queue:!1,duration:250,easing:"easeOutCubic"}),Y.off("scroll.headerResizeEffect",dn),Y.on("scroll.headerResizeEffect",ln),q('#header-outer[data-transparent-header="true"]').css("transition","transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out"),q('#header-outer[data-transparent-header="true"] .cart-menu').css("transition","none"),setTimeout(function(){q('#header-outer[data-transparent-header="true"]').css("transition","transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out"),q('#header-outer[data-transparent-header="true"] .cart-menu').css("transition","border-color 0.30s ease")},300))}function cn(){0<q('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length&&!u.hasClass("within-custom-breakpoint")||0<ot.scrollTop&&(0<q("body.material").length&&(u.addClass("scrolled-down"),0<c.length&&1e3<ot.winW&&(c.addClass("hide-up"),u.css("transform","translateY(-"+ot.secondaryHeaderHeight+"px)"))),"true"==u.attr("data-transparent-header")&&0==q('#header-outer[data-permanent-transparent="1"]').length&&u.removeClass("transparent").addClass("scrolled-down"),Y.off("scroll.headerResizeEffectOpaque",cn),Y.on("scroll.headerResizeEffectOpaque",hn))}function hn(){0<q('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length&&!u.hasClass("within-custom-breakpoint")||0==ot.scrollTop&&0==q("body.material-ocm-open").length&&(0<q('#header-outer[data-megamenu-rt="1"]').length&&0<q('#header-outer[data-transparent-header="true"]').length&&0<q("#header-outer .megamenu").length?"true"==u.attr("data-transparent-header")&&0==q(".megamenu.sfHover:not(.width-75):not(.width-50)").length?(u.addClass("transparent").removeClass("scrolled-down"),u.removeClass("no-transition")):"true"==u.attr("data-transparent-header")&&u.removeClass("scrolled-down"):"true"==u.attr("data-transparent-header")&&u.addClass("transparent").removeClass("scrolled-down"),0<q("body.material").length&&(u.removeClass("scrolled-down"),0<c.length&&1e3<ot.winW&&(c.removeClass("hide-up"),u.removeClass("hide-up").css("transform","translateY(0%)"))),Y.off("scroll.headerResizeEffectOpaque",hn),Y.on("scroll.headerResizeEffectOpaque",cn))}function un(){1!=dt.materialOffCanvasOpen?(5<ot.scrollTop?"scrolled"!=dt.mobileHeader&&(0==dt.permanentTransHeader&&u.removeClass("transparent"),0<ot.secondaryHeaderHeight?(c.addClass("hide-up"),u.css("transform","translateY(-"+ot.secondaryHeaderHeight+"px)").addClass("hidden-secondary")):u.removeClass("hidden-secondary"),u.addClass("scrolled-down"),dt.mobileHeader="scrolled"):"at-top"!=dt.mobileHeader&&("true"==u.attr("data-transparent-header")&&u.addClass("transparent"),0<ot.secondaryHeaderHeight&&(c.removeClass("hide-up"),u.css("transform","translateY(0px)")),u.removeClass("hidden-secondary").removeClass("scrolled-down"),dt.mobileHeader="at-top"),ot.winW<1e3&&requestAnimationFrame(un)):requestAnimationFrame(un)}function pn(){999<ot.winW||(dt.mobileHeader="",Y.off("scroll.headerResizeEffect"),Y.off("scroll.headerResizeEffectOpaque"),"1"==t&&0==q('#header-outer[data-remove-fixed="1"]').length?0<q('#header-outer[data-mobile-fixed="1"]').length?(0<q(".nectar-box-roll").length&&u.addClass("at-top-before-box"),cancelAnimationFrame(rn.raf),on()):(cancelAnimationFrame(rn.raf),u.removeClass("scrolled-down").removeClass("detached").removeClass("invisible").removeClass("at-top").css("transform","none")):0<q('#header-outer[data-mobile-fixed="1"]').length?requestAnimationFrame(un):"true"==u.attr("data-transparent-header")&&u.addClass("transparent"),Y.off("smartresize.nectarNavScrollEffects"),Y.on("smartresize.nectarNavScrollEffects",gn))}function gn(){ot.winW<1e3||(1==w&&"1"!=t?(Y.off("scroll.headerResizeEffect"),(0==q("#nectar_fullscreen_rows").length||0<q('#nectar_fullscreen_rows[data-mobile-disable="on"]').length&&ot.usingMobileBrowser)&&Y.on("scroll.headerResizeEffect",ln)):"1"!=t?(Y.off("scroll.headerResizeEffectOpaque"),Y.on("scroll.headerResizeEffectOpaque",cn)):"1"==t&&(0<q(".nectar-box-roll").length&&u.addClass("at-top-before-box"),0==q('#header-outer[data-remove-fixed="1"]').length&&(cancelAnimationFrame(rn.raf),on())),0<q('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length&&(0<c.length&&u.css("transform",""),200<ot.scrollTop&&!u.hasClass("fixed-menu")&&u.addClass("fixed-menu")),Y.off("smartresize.nectarNavScrollEffects"),Y.on("smartresize.nectarNavScrollEffects",pn))}function fn(){0==q('#header-outer[data-remove-fixed="1"]').length&&1e3<ot.winW&&0!=q(L).scrollTop()&&1==q('#header-outer.transparent[data-permanent-transparent="false"]').length&&u.removeClass("transparent"),(0==q("#nectar_fullscreen_rows").length&&0==q(".nectar-box-roll").length||0<q("#nectar_fullscreen_rows").length&&0==nt)&&Xa(),ot.winW<1e3&&0==q(".nectar-box-roll").length?(pn(),Y.on("smartresize.nectarNavScrollEffects",pn)):(gn(),Y.on("smartresize.nectarNavScrollEffects",gn))}function mn(){var t,t;0<q(".mobile").length?ot.winH<ot.winW&&1e3<ot.winW&&0!=q("#header-outer.small-nav").length||q("#header-space").css("height",u.outerHeight()):0==q(".nectar-parallax-scene.first-section").length&&(t=f-f/1.8,t=0<q('#header-outer[data-header-resize="1"]').length&&0<q(".small-nav").length?u.outerHeight()+(parseInt(m)+2*t):u.outerHeight(),7<Math.abs(t-q("#header-space").height())&&q("#header-space").css("height",t))}function vn(){var t=-1,a=ot.scrollTop;function e(){if(!j.hasClass("compose-mode")){if(a=ot.scrollTop,t==a)return requestAnimationFrame(e),!1;t=a,n(),requestAnimationFrame(e)}}function n(){var t=0,t,e;ot.winW<1e3||1==v&&"none"==q("#header-outer .span_9").css("display")||1==v&&"none"==q("#header-outer .span_9 > nav").css("display")?(t=0,e="fixed"==h.css("position")?h.height():0,(t+=ot.adminBarHeight)-a>e?u.css("top",t-a+"px"):u.css("top",e)):0==v&&(t=0,u.is('[data-remove-fixed="1"]')||(t+=ot.adminBarHeight),u.css("top",t+"px"))}0<q('#header-outer[data-mobile-fixed="1"]').length&&0<h.length&&((0==q("#nectar_fullscreen_rows").length||0<q("#nectar_fullscreen_rows").length&&ot.usingMobileBrowser)&&requestAnimationFrame(e),Y.on("smartresize",n))}function bn(){var t=0,e=0,a;u.is("[data-logo-height]")&&u.is("[data-padding]")?u.hasClass("transparent")||(t=0<u.find("#logo.no-image").length?"left-header"==_&&1e3<ot.winW?0:parseInt(u.find("#logo.no-image").height())+parseInt(2*u.attr("data-padding")):"left-header"==_&&1e3<ot.winW?0:parseInt(u.attr("data-logo-height"))+parseInt(2*u.attr("data-padding"))):t="left-header"==_&&1e3<ot.winW?0:u.outerHeight(),0<d.length&&(e+=d.height()),0<q(".page-header-no-bg").length&&(e+=q(".page-header-no-bg").height()),0<ot.winH-ot.adminBarHeight-t-ot.footerOuterHeight-1-e?(a=0<q('body:not(.material) #header-outer[data-header-resize="1"]').length?55:0,q('body[data-footer-reveal="1"]:not(.nectar_using_pfsr) .container-wrap').css({"margin-bottom":ot.footerOuterHeight}),q(".container-wrap").css({"min-height":ot.winH-ot.adminBarHeight-t-ot.footerOuterHeight-e+a})):q('body[data-footer-reveal="1"]:not(.nectar_using_pfsr) .container-wrap').css({"margin-bottom":ot.footerOuterHeight}),ot.winW<1e3?i.attr("data-midnight","light"):i.removeAttr("data-midnight")}function wn(){(0<q('body[data-footer-reveal="1"]').length||0<q('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length)&&(setTimeout(bn,60),bn(),Y.on("resize",bn),0<q('body[data-footer-reveal="1"][data-footer-reveal-shadow="large_2"]').length&&q(".container-wrap").css({boxShadow:"0 70px 110px -30px "+i.css("backgroundColor")}))}function yn(t){this.$el=t,this.offsetTop=0,this.fullHeight=100,this.storedWinH=ot.winH,this.events(),this.calculate()}function _n(){tt=[],q(".vc_row-o-full-height").each(function(t){tt[t]=new yn(q(this))})}function xn(){var t=L.navigator.userAgent.indexOf("MSIE ");(0<t||navigator.userAgent.match(/Trident.*rv\:11\./))&&q(".vc_row-o-full-height").each(function(){"flex"===q(this).find("> .span_12").css("display")&&q(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')}),(0<t||navigator.userAgent.match(/Trident.*rv\:11\./))&&(Cn(),q(L).on("resize",Cn))}function Cn(){q(".img-with-aniamtion-wrap img.img-with-animation").each(function(){var t,e;0==q(this).parents(".tabbed").length&&0==q(this).parents(".toggle").length&&((t=q(this).parents(".img-with-aniamtion-wrap")).css({height:""}),e=q(this).height(),t.css({height:e}))})}function kn(){q(".nectar-recent-posts-slider").each(function(){var t=parseInt(q(this).attr("data-height")),e=0<q('body[data-ext-responsive="true"]').length?Y.width()/1400:Y.width()/1100,a=q(this).find(".nectar-recent-post-slide, .flickity-viewport"),n,e,t,e;1e3<ot.winW&&0==q("#boxed").length?0==q(this).parents(".full-width-content").length&&(0<q('body[data-ext-responsive="true"]').length&&1400<=ot.winW||0==q('body[data-ext-responsive="true"]').length&&1100<=ot.winW)?a.css("height",Math.ceil(t)):a.css("height",Math.ceil(t*e)):(n=0==(n=0<q(this).parents(".wpb_column").length?q(this).parents(".wpb_column"):q(this).parents(".col")).length?q(".main-content"):n).hasClass("vc_span12")||n.hasClass("main-content")||n.hasClass("span_12")||n.hasClass("vc_col-sm-12")?t*e<=250?a.css("height",250):a.css("height",Math.ceil(t*e)):(e=t/(e=1100,"2"==(t=q(t=n).attr("class").match(/\d+/))?e=170:"3"==t?e=260:"4"==t?e=340:"6"==t?e=530:"8"==t?e=700:"9"==t?e=805:"10"==t?e=916.3:"12"==t&&(e=1100),e))*n.width()<=250?a.css("height",250):a.css("height",e*n.width())})}function Tn(){q(".nectar-recent-posts-single_featured.multiple_featured").each(function(){var t=0<q(this).find(".project-slides").length?".project-slide":".nectar-recent-post-slide",e=0<q(this).find(".project-slides").length?".project-info h1":".inner-wrap h2 a";q(this).find(t).each(function(){q(this).find(e).each(function(){var t,t=(t=(t=q(this).text()).trim()).split(" ");q(this)[0].innerHTML="";for(var e=0;e<t.length;e++)q(this)[0].innerHTML+="<span>"+t[e]+"</span> "}),q(this).find(e+" > span").wrapInner('<span class="inner" />')})})}function $n(){(0<q('.nectar-split-heading[data-animation-type="line-reveal-by-space"]').length||0<q('.nectar-split-heading[data-animation-type="letter-fade-reveal"]').length)&&(q('.nectar-split-heading[data-animation-type="line-reveal-by-space"]:not([data-text-effect="none"])').each(function(){var a=q(this).hasClass("animated-in")?" animated":"";q(this).find("> *").each(function(){var t,t=(t=(t=q(this).text()).trim()).split(" ");q(this)[0].innerHTML="";for(var e=0;e<t.length;e++)q(this)[0].innerHTML+='<span><span class="inner'+a+'">'+t[e]+"</span></span> "}),q(this).addClass("markup-generated")}),q('.nectar-split-heading[data-animation-type="line-reveal-by-space"][data-text-effect*="letter-reveal"]').each(function(){if(q(this).is('[data-m-rm-animation="true"]')&&ot.winW<1e3)return!0;var n=q(this).hasClass("animated-in")?' style="transform: none;"':"";q(this).find("> *").each(function(){var t,t=(t=(t=q(this).text()).trim()).split(" ");q(this)[0].innerHTML="";for(var e=0;e<t.length;e++)q(this)[0].innerHTML+="<span>"+t[e]+"</span> "}),q(this).find("span").each(function(){var a=q(this),t=q(this).text().split("");a.empty(),q.each(t,function(t,e){a.append('<span class="inner"'+n+">"+e+"</span>")})}),q(this).addClass("markup-generated")}))}function In(){var t,t,e;0<q(".nectar-recent-posts-slider-inner").length&&(t=0<q(".nectar-recent-posts-slider_multiple_visible").length&&"90%",t=q(".nectar-recent-posts-slider-inner").flickity({contain:!0,groupCells:t,draggable:!0,lazyLoad:!1,imagesLoaded:!0,percentPosition:!0,prevNextButtons:!1,pageDots:!0,resize:!0,setGallerySize:!0,wrapAround:!0,accessibility:!1}),setTimeout(function(){q(".nectar-recent-posts-slider-inner").addClass("loaded")},1150),t.data("flickity"),t.on("dragStart.flickity",function(){q(".flickity-viewport").addClass("is-moving")}),t.on("dragEnd.flickity",function(){q(".flickity-viewport").removeClass("is-moving")}),t.on("select.flickity",function(){q(".flickity-viewport").addClass("no-hover"),clearTimeout(e),e=setTimeout(function(){q(".flickity-viewport").removeClass("no-hover")},400)}),kn(),Y.on("resize",kn),ot.usingMobileBrowser||ot.usingFrontEndEditor||Y.on("resize",zn)),q(".nectar-recent-posts-single_featured.multiple_featured").each(function(s){0<q(this).find("> .normal-container").length&&q(this).find("> .normal-container").remove(),q(this).append('<div class="normal-container container"> <ul class="controls" data-color="'+q(this).attr("data-button-color")+'" data-num="'+q(this).find(".nectar-recent-post-slide").length+'"></ul> </div>');var r,e=q(this),a=0;z[s]={autorotate:""},q(this).find(".nectar-recent-post-slide").each(function(t){q(this).find(".recent-post-container").height()>a&&(q(this).siblings().removeClass("tallest"),q(this).addClass("tallest"),a=q(this).find(".recent-post-container").height());var t=0==t&&0<q(this).parents('.nectar-recent-posts-single_featured.multiple_featured[data-autorotate="none"]').length?'class="active"':"";e.find(".controls").append("<li "+t+'><span class="title">'+q(this).find("h2").text()+"</span></li>")}),q(this).addClass("js-loaded"),q(this).find(".controls li").on("click",function(t){var e,a,n,i,t,a;q(this).hasClass("active")||(void 0!==t.originalEvent&&q(this).parent().find(".active").addClass("trans-out"),e=q(this).index(),a=q(this).parent().find(".active").index(),n=q(this),clearTimeout(r),q(this).siblings().removeClass("active"),q(this).addClass("active"),r=setTimeout(function(){n.parents(".multiple_featured").find(".nectar-recent-post-slide:not(:eq("+e+"))").css("opacity","0").removeClass("active"),n.parent().find(".trans-out").removeClass("trans-out")},300),n.parents(".multiple_featured").find(".nectar-recent-post-slide:not(:eq("+e+"))").css("z-index","10"),n.parents(".multiple_featured").find(".nectar-recent-post-slide:eq("+a+")").css("z-index","15"),q(this).parents(".multiple_featured").find(".nectar-recent-post-slide").eq(e).css({opacity:"1","z-index":"20"}).addClass("active"),"none"!=q(this).parents(".multiple_featured").attr("data-autorotate")&&(i=n.parents(".nectar-recent-posts-single_featured.multiple_featured"),t=s,clearInterval(z[t].autorotate),0<i.attr("data-autorotate").length&&(a=parseInt(i.attr("data-autorotate"))<100?4e3:parseInt(i.attr("data-autorotate")),z[t].autorotate=setInterval(function(){Wn(i)},a))))}),e=q(this),0<q(this).attr("data-autorotate").length&&"none"!=q(this).attr("data-autorotate")&&0==q("body.vc_editor").length&&setTimeout(function(){var t=parseInt(e.attr("data-autorotate"))<100?4e3:parseInt(e.attr("data-autorotate"));z[s].autorotate=setInterval(function(){Wn(e)},t),e.find(".controls > li:first-child").addClass("active")},30)}),Tn(),Y.on("resize",Tn)}function En(){q(".nectar-recent-posts-slider").each(function(){var t=parseInt(q(this).find(".flickity-slider").position().left),e=q(this).find(".nectar-recent-post-slide"),a=e.length,n=e.width(),i=q(this).find(".nectar-recent-post-slide:last-child").index(),s=q(this).find(".nectar-recent-post-slide:first-child .nectar-recent-post-bg"),e=q(this).find(".nectar-recent-post-slide:last-child .nectar-recent-post-bg");-3<=t?e.css("margin-left",parseInt(Math.ceil(n/3.5))+"px"):e.css("margin-left","-"+parseInt(Math.ceil(n/3.5*i))+"px"),Math.abs(t)>=(a-1)*n?s.css("margin-left","-"+parseInt(Math.ceil(n/3.5*a))+"px"):s.css("margin-left","0px"),q(this).find(".nectar-recent-post-bg").css("transform","translateX("+Math.ceil(q(this).find(".flickity-slider").position().left/-3.5)+"px)")}),requestAnimationFrame(En)}function zn(){q(".nectar-recent-posts-slider").each(function(){var e=q(this).find(".nectar-recent-post-slide").width();q(this).find(".nectar-recent-post-slide").each(function(t){q(this).find(".nectar-recent-post-bg").css("margin-left","-"+parseInt(Math.ceil(e/3.5)*t)+"px")})})}function On(){In(),q('.blog-recent[data-style="classic_enhanced_alt"] .inner-wrap').each(function(){q(this).find(".post-featured-img").each(function(){var t=q(this).find("img").attr("src");q(this).css("background-image","url("+t+")")})}),q('.blog-recent[data-style="classic_enhanced"]').each(function(){0==q(this).find(".inner-wrap.has-post-thumbnail").length&&q(this).addClass("no-thumbs")}),ot.usingMobileBrowser||0<q(".nectar-recent-posts-slider").length&&!ot.usingFrontEndEditor&&L.requestAnimationFrame(En),ot.usingMobileBrowser||ot.usingFrontEndEditor||zn()}function Hn(){q(".style-5").each(function(){q(this).find(".sizer").insertBefore(q(this).find(".parallaxImg"))}),q(".style-5").parents(".wpb_row").css("z-index","100");var t=T,e=(t.getElementsByTagName("body")[0],L),a=t.querySelectorAll(".parallaxImg"),n=a.length,i="ontouchstart"in e||navigator.msMaxTouchPoints,s=!1;if(!(n<=0)){for(var r=0;r<n;r++){var c=a[r],o=c.querySelectorAll(".parallaxImg-layer"),l=o.length;if(!(l<=0)){for(;c.firstChild;)c.removeChild(c.firstChild);var h=0,u=80;-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge/")<1?(u=1,q("html").addClass("cssreflections")):j.addClass("cssreflections");var d=t.createElement("div"),p=t.createElement("div"),g=t.createElement("div"),f=t.createElement("div"),m=[];c.id="parallaxImg__"+r,d.className="parallaxImg-container",g.className="parallaxImg-shadow",f.className="parallaxImg-layers";for(var v=0;v<l;v++){var b=t.createElement("div"),w=t.createElement("div"),y=o[v].getAttribute("data-img");q(b).html(q(o[v]).html()),b.className="parallaxImg-rendered-layer",b.setAttribute("data-layer",v),0==v&&0==q(c).parents(".wpb_gallery").length&&(w.className="bg-img",0<q(c).parents(".nectar-fancy-box").length?(w.setAttribute("data-nectar-img-src",y),s=!0):w.style.backgroundImage="url("+y+")",b.appendChild(w)),f.appendChild(b),m.push(b)}d.appendChild(f),c.appendChild(d),q(c).wrap('<div class="parallaxImg-wrap" />'),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")||q(c).parent().append(g),i&&0<q("body.using-mobile-browser").length||function(r,o,l,d){q(c).parents(".style-5").on("mousemove",function(t){var e=q(this),a=e.find(".parallaxImg-container"),n=e.find(".parallaxImg-shadow"),i=Date.now(),s=0<q(r).parents(".wpb_gallery").length;h+u<i&&(h=i,L.requestAnimationFrame(function(){_(t,!1,r,o,l,d,e,a,n,s)}))}),q(c).parents(".style-5").on("mouseenter",function(t){x(t,r)}),q(c).parents(".style-5").on("mouseleave",function(t){C(t,r)})}(c,m,l,p),function(t,e,a,n){k(!1,t,e,a),L.addEventListener("resize",function(){k(!1,t,e,a)})}(c,m,l)}}s&&Ue()}function _(t,e,a,n,i,s,r,o,l,d){if(!q(a.firstChild).hasClass("over"))return C(t,a),0;var c=.03,h=.063,u="1.03",p="-10",g=!1;0<q(a).parents(".col.wide").length?(c=.03,h=.063,g=!0):0<q(a).parents(".col.regular").length||0<q(a).parents(".wpb_gallery").length?h=c=.045:0<q(a).parents(".col.tall").length?(c=.05,h=.015,g=!0):0<q(a).parents(".col.wide_tall").length?(h=c=.04,g=!0):r.hasClass("nectar-fancy-box")?(c=.045,h=.022,u="1.06",p="-2"):(c=.045,h=.075);var t,f=ot.scrollTop,m=(e?t.touches[0]:t).pageX,v=(e?t.touches[0]:t).pageY,b=a.getBoundingClientRect(),w=a.clientWidth||a.offsetWidth||a.scrollWidth,r=a.clientHeight||a.offsetHeight||a.scrollHeight,e=320/w,t=.52-(m-b.left)/w,a=.52-(v-b.top-f)/r,r=v-b.top-f-r/2,b=c*e*(t-(m-b.left-w/2)),r=h*e*(r-a),t=1==d?" perspective("+3*w+"px) rotateX("+1.9*-r+"deg) rotateY("+1.3*-b+"deg)":0==g?" perspective("+3*w+"px) rotateX("+r+"deg) rotateY("+b+"deg)  translateY("+a*p+"px) translateX("+t*p+"px) scale("+u+")":" perspective("+3*w+"px) rotateX("+r+"deg) rotateY("+b+"deg)  translateY("+-10*a+"px) translateX("+-10*t+"px) scale(1.013)";o.css("transform",t),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")||l.css("transform",t)}function x(t,e){e.firstChild.className+=" over",e.className+=" over",q(e).addClass("transition"),0<q(e).parents(".wpb_gallery").length?setTimeout(function(){q(e).removeClass("transition")},450):setTimeout(function(){q(e).removeClass("transition")},200)}function C(t,e){var a=e.clientWidth||e.offsetWidth||e.scrollWidth,n=e.firstChild;n.className=n.className.replace(" over",""),e.className=e.className.replace(" over",""),q(n).css("transform","perspective("+3*a+"px) rotateX(0deg) rotateY(0deg) translateZ(0)"),q(e).parents(".parallaxImg-wrap").find(".parallaxImg-shadow").css("transform","perspective("+3*a+"px) rotateX(0deg) rotateY(0deg) translateZ(0)"),q(e).addClass("transition"),setTimeout(function(){q(e).removeClass("transition")},200)}function k(t,e,a,n){for(var i=e.clientWidth||e.offsetWidth||e.scrollWidth,e=e.firstChild,s=0;s<n;s++)0==s?q(a[s]).css("transform","translateZ(0px)"):q(a[s]).css("transform","translateZ("+3*i/27*(1.1*s)+"px) ");n+=3,q(e).css("transform","perspective("+3*i+"px)")}}function Sn(){var t;0!=q('.nectar-fancy-box[data-style="hover_desc"]').length&&(t=0,q("body").on("mouseenter touchstart",'.nectar-fancy-box[data-style="hover_desc"]',function(){t=parseInt(q(this).find(".hover-content").outerHeight(!0)),q(this).addClass("hovered"),q(this).find(".heading-wrap").css("transform","translateY(-"+t+"px)")}),q("body").on("mouseleave touchend",'.nectar-fancy-box[data-style="hover_desc"]',function(){q(this).removeClass("hovered"),q(this).find(".heading-wrap").css("transform","translateY(0)")}))}function Mn(t,e){this.$el=t,this.$iconEl=this.$el.find(e),this.$innerIconEl=this.$el.find(".inner"),this.initialX=this.$el.width()/2,this.initialY=this.$el.height()/2,this.elX=0,this.elY=0,this.lastScroll=0,this.scrollAdjust=0,this.lastX=this.initialX,this.lastY=this.initialY,this.lastY2=this.initialY,this.innerLastX=0,this.innerLastY=0,this.activeFollow=!1,this.percentage=.03,this.percentageInterval,this.$iconEl.css({top:"0",left:"0"}),Y.on("resize",this.resizeEvent.bind(this)),this.mouseEvents(),this.rafLoop()}function An(){S=[],j.on("mouseenter",'.nectar_video_lightbox[data-parent-hover="1"]',function(){var t=q(this).parents(".wpb_row");t.find("> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner").addClass("transition"),t.find("> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner").css({transform:"scale(1.08)"})}),j.on("mouseleave",'.nectar_video_lightbox[data-parent-hover="1"]',function(){q(this).parents(".wpb_row").find("> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner").css({transform:"scale(1)"})}),q(".nectar_video_player_self_hosted").each(function(t){!ot.usingMobileBrowser&&0<q(this).find(".play_button.follow_mouse").length&&(S[t]=new Mn(q(this),".play_button.follow_mouse .play"))}),q(".nectar-video-box").each(function(e){var a;0<q(this).find(".play_button_mouse_follow").length&&(a=q(this),q(this).imagesLoaded(function(){ot.usingMobileBrowser||(S[e]=new Mn(a,".play_button_mouse_follow"));var t=a.is("[data-mouse-icon-color]")&&0<a.attr("data-mouse-icon-color").length?a.attr("data-mouse-icon-color"):"#000";a.is('[data-mouse-style="solid_color"]')&&a.find(".play_button_mouse_follow").css({"background-color":t}),a.find(".play_button_mouse_follow").addClass("visible")}))})}function Wn(t){var e,a,n;0<q("body.vc_editor").length||(e=0<t.find(".project-slides").length?".dot-nav > span":".controls > li",a=0<t.find(".project-slides").length?"span":" li",n=t.find(e).length,(t.find(e+".active").index()+1==n?t.find(e+":first-child"):t.find(e+".active").next(a)).trigger("click"))}function Fn(){F=[],"undefined"!=typeof SalientRecentProjectsFullScreen&&q(".nectar_fullscreen_zoom_recent_projects").each(function(t){F[t]=new SalientRecentProjectsFullScreen(q(this))})}function qn(){0<q(".infinite_scroll").length&&(q(".portfolio-items.infinite_scroll").infinitescroll({navSelector:"div#pagination",nextSelector:"div#pagination a:first",itemSelector:".portfolio-items.infinite_scroll .element",finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",msgText:" "},function(a){var n=q(".portfolio-items.infinite_scroll:not(.carousel)");q(a).css("opacity",0).imagesLoaded(function(){var t;q(a).css("opacity",1),n.isotope("appended",q(a)),q(a).find(".work-item").addClass("ajax-loaded"),q(a).addClass("ajax-loaded"),q(a).find(".work-meta, .nectar-love-wrap").css({opacity:1}),(0<q(".portfolio-filters-inline").length||0<q(".portfolio-filters").length)&&(t=(0<q(".portfolio-filters-inline").length?q(".portfolio-filters-inline a.active"):q(".portfolio-filters a.active")).attr("data-filter"),q(".portfolio-filters-inline a.active").attr("data-filter"),n.isotope({filter:t}));for(var e=0;e<I.length;e++)I[e].reLayout();if(0<q(a).find(".work-item.style-5").length&&Hn(),"none"==q(a).find(".inner-wrap").attr("data-animation"))q(".portfolio-items .col .inner-wrap").removeClass("animated");else{for(e=0;e<I.length;e++)I[e].masonryZindex(),I[e].portfolioAccentColor();q(a).each(function(){var t=0<q("#nectar_fullscreen_rows").length?"200%":"90%",e=q(this),a=new Waypoint({element:e[0],handler:function(){var t=e.is('[data-masonry-type="photography"].masonry-items')?85:115;setTimeout(function(){e.addClass("animated-in")},t*e.attr("data-delay-amount")),a.destroy()},offset:t})})}q(".portfolio-items").each(function(){var t=Dt();q(this).find('a[rel^="prettyPhoto"], a.pretty_photo').attr("rel","prettyPhoto["+t+"_gal]").removeClass("pretty_photo")}),q(".portfolio-items").each(function(){var t=Dt();q(this).find('a[data-fancybox^="group_"]').attr("data-fancybox","group_"+t)}),ae(),setTimeout(function(){for(var t=0;t<I.length;t++)I[t].masonryZindex(),I[t].reLayout(),I[t].isotopeCatSelection();q(a).removeClass("ajax-loaded")},700),He()})}),q(".post-area.infinite_scroll .posts-container").infinitescroll({navSelector:"div#pagination",nextSelector:"div#pagination a:first",itemSelector:".post-area.infinite_scroll .posts-container .post",finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",msgText:" "},function(e){0<q(e).find("[data-nectar-img-src]").length&&Ue(),(0<q(".masonry.classic").length||0<q(".post-area:not(.masonry):not(.featured_img_left)").length||0<q(".post-area.standard-minimal").length)&&(wt(),q().mediaelementplayer&&q(e).find(".wp-audio-shortcode, .wp-video-shortcode").mediaelementplayer(),ae(),0<q(".carousel").length&&(St(),Lt()),Da(),q(".testimonial_slider").animate({opacity:"1"},800),ra(),oa(),setTimeout(function(){pa(),ga(),Y.trigger("resize")},500)),He(),Y.trigger("resize");var a=q(".infinite_scroll .posts-container");a.parent().hasClass("masonry")&&q(e).addClass("masonry-blog-item");var t=q(e);(t=0==t.find("img").length?q("body"):t).imagesLoaded(function(){a.parent().hasClass("masonry")&&!a.parent().hasClass("auto_meta_overlaid_spaced")&&a.isotope("appended",q(e));for(var t=0;t<D.length;t++)D[t].flickityBlogInit();if(q(e).addClass("ajax-loaded"),a.parent().hasClass("classic_enhanced")&&(a.find(".large_featured.has-post-thumbnail.ajax-loaded .post-featured-img, .wide_tall.has-post-thumbnail.ajax-loaded .post-featured-img").each(function(){var t=q(this).find("img").attr("src");q(this).css("background-image","url("+t+")")}),a.find(".large_featured.ajax-loaded .nectar-flickity, .wide_tall.ajax-loaded .nectar-flickity").each(function(){q(this).find(".cell").each(function(){var t=q(this).find("img").attr("src");q(this).css("background-image","url("+t+")")})})),"none"==q(e).parents(".posts-container").attr("data-animation"))q(e).find(".inner-wrap").removeClass("animated");else{for(t=0;t<D.length;t++)D[t].blogMasonryZindex();q(e).each(function(){var t=q(this),e=new Waypoint({element:t[0],handler:function(){setTimeout(function(){t.addClass("animated-in")},80*t.attr("data-delay-amount")),e.destroy()},offset:"90%"})})}setTimeout(function(){q(e).removeClass("ajax-loaded")},700)})}))}function Ln(){350<ot.scrollTop&&!r.is(".fullscreen.open")&&(q("#to-top").stop().transition({transform:"translateY(-50%)"},350,"easeInOutCubic"),Y.off("scroll",Ln),Y.on("scroll",Yn))}function Yn(){var t;(ot.scrollTop<350||r.is(".fullscreen.open"))&&(t=0<q("#slide-out-widget-area.fullscreen.open").length?1150:350,q("#to-top").stop().transition({transform:"translateY(105%)"},t,"easeInOutQuint"),Y.off("scroll",Yn),Y.on("scroll",Ln))}function jn(){var t;0==q(".nectar-social.fixed").length&&(0<q("#to-top").length&&1020<Y.width()||0<q("#to-top").length&&0<q("#to-top.mobile-enabled").length)&&(350<ot.scrollTop?Y.on("scroll",Yn):Y.on("scroll",Ln)),0<q('body[data-button-style*="rounded"]').length&&((t=q("#to-top .fa-angle-up").clone()).addClass("top-icon"),q("#to-top").prepend(t)),j.on("click",'#to-top, a[href="#top"]',function(){return q("body,html").stop().animate({scrollTop:0},800,"easeOutQuad",function(){0<q(".nectar-box-roll").length&&j.trigger("mousewheel",[1,0,0])}),!1})}function Bn(){var a=0<q('body[data-header-format="left-header"]').length&&1e3<Y.width()?0:u.outerHeight();(0<q(".page-template-template-no-header-footer").length||0<q(".page-template-template-no-header").length)&&(a=0);var e=!1;q('header#top .sf-menu li a[href="#"]').on("click",function(t){t.preventDefault()}),0==q("#nectar_fullscreen_rows").length||0==rt.$usingFullScreenRows?q("a.nectar-next-section").each(function(){var t,t;0<q(this).parents(".wpb_row:not(.inner_row)").length&&(0<(t=q(this).parents(".wpb_row:not(.inner_row)")).next(".wpb_row[id]:not(.inner_row)").length&&(t=t.next(".wpb_row[id]:not(.inner_row)").attr("id"),q(this).attr("href","#"+t),e=!0))}):q().fullpage&&q("a.nectar-next-section").on("click",function(){return q.fn.fullpage.moveSectionDown(),!1}),0<q("#slide-out-widget-area .off-canvas-menu-container").length&&q("#slide-out-widget-area .off-canvas-menu-container").find("a[href*='"+location.pathname+"']").each(function(){var t=q(this).attr("href");"#"!=t&&-1!=t.indexOf("#")&&"#"!==t.substr(t.indexOf("#"))&&0<q("div"+t.substr(t.indexOf("#"))).length&&(q(this).attr("href",t.substr(t.indexOf("#"))),q(this).parent().removeClass("current_page_item").removeClass("current-menu-item")),0<q('div[data-fullscreen-anchor-id="'+t.substr(t.indexOf("#")+1)+'"]').length&&q(this).parent().removeClass("current_page_item").removeClass("current-menu-item")}),q("#header-outer").find("a[href*='"+location.pathname+"']").each(function(){var t=q(this).attr("href");-1!=t.indexOf("#")&&"#"!==t.substr(t.indexOf("#"))&&0<q("div"+t.substr(t.indexOf("#"))).length&&(q(this).attr("href",t.substr(t.indexOf("#"))),q(this).parent().removeClass("current_page_item").removeClass("current-menu-item")),0<q('div[data-fullscreen-anchor-id="'+t.substr(t.indexOf("#")+1)+'"]').length&&q(this).parent().removeClass("current_page_item").removeClass("current-menu-item")}),0<q("#header-outer").length&&q("#header-outer").find("a[href*='#']:not([href='#'])").each(function(){"#"!==q(this).attr("href")&&"#searchbox"!==q(this).attr("href")&&"#sidewidgetarea"!==q(this).attr("href")&&(e=!0)}),0<q("#slide-out-widget-area .off-canvas-menu-container").length&&q("#slide-out-widget-area .off-canvas-menu-container").find("a[href*='#']:not([href='#'])").each(function(){"#"!==q(this).attr("href")&&(e=!0)});var t=[];1==e&&t.push("#header-outer nav"),0<q('.page-submenu[data-sticky="true"] a[href*="#"]').length&&t.push('.page-submenu[data-sticky="true"]'),0<t.length&&t.forEach(function(t,e){(0==e?j:q(L)).scrollspy({target:t,offset:a+ot.adminBarHeight+40})})}function Pn(){var t=L.location.hash,e=(t=t&&0<t.length?t.replace(/<|>/g,""):t)&&0<t.length?t.substring(1,t.length):0,a=f-f/1.8,n=0,i,s,e;e&&(n=(n=e.split("/")).length),e&&1<n&&(e=e.replace(/\//g,""),t=t.replace(/\//g,"")),(t&&0<q(".main-content").find(t).length||t&&0<q(".main-content").find('[data-fullscreen-anchor-id="'+e+'"]').length)&&(i=0<q(".main-content").find(t).length?q(".main-content").find(t):q(".main-content").find('[data-fullscreen-anchor-id="'+e+'"]'),s=0<q('body[data-header-format="left-header"]').length&&1e3<Y.width()?0:q("#header-space").outerHeight(),(0<q(".page-template-template-no-header-footer").length||0<q(".page-template-template-no-header").length)&&(s=0),e=100,0<q(".nectar-box-roll").length&&0<q(".container-wrap.bottomBoxOut").length&&(st.boxRoll(null,-1),e=2050),setTimeout(function(){var t,e,e,e,t;0==q('body[data-permanent-transparent="1"]').length?j.hasClass("mobile")?t=0<q('#header-outer[data-mobile-fixed="1"]').length?i.offset().top+2-s+ot.adminBarHeight:i.offset().top-ot.adminBarHeight+1:(e=0<q('#header-outer[data-header-resize="0"]').length?0:parseInt(m)+2*a,0<q('#header-outer[data-remove-fixed="1"]').length&&(s=0),t=i.offset().top-parseInt(s)+e+3-ot.adminBarHeight,0==q("body.mobile").length&&0<q('#header-outer[data-condense="true"]').length&&0===q("body.page-template-template-no-header").length&&0===q("body.page-template-template-no-header-footer").length&&(e=q('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),e=u.height()-(parseInt(e.height())+parseInt(q("#header-outer #logo").css("margin-top"))),t=i.offset().top-parseInt(s)+e-ot.adminBarHeight)):t=i.offset().top-ot.adminBarHeight+1,0<q('body[data-hhun="1"]').length&&0==q('#header-outer[data-remove-fixed="1"]').length&&0==q("#header-outer.detached").length&&(t+=s),Qt(t-(0<q('.page-submenu[data-sticky="true"]').length?q(".page-submenu").height():0)+(0<q("body.material").length&&0<c.length&&0==q('body[data-hhun="1"]').length&&0==q('#header-outer[data-remove-fixed="1"]').length&&!j.hasClass("mobile")?c.height():0),700,"easeInOutQuint"),dt.animatedScrolling=!0,setTimeout(function(){dt.animatedScrolling=!1},1100)},e))}function Rn(){0<q('body[data-animated-anchors="true"]').length&&(0==q(".nectar-box-roll").length&&0==q("#nectar_fullscreen_rows").length&&(void 0!==Jt.tab?setTimeout(function(){Pn()},800):Pn()),0<q('#nectar_fullscreen_rows[data-mobile-disable="on"]').length&&0==q(".nectar-box-roll").length&&ot.usingMobileBrowser&&Pn())}function Vn(){var n,d;(0<q('body[data-animated-anchors="true"]').length||0<q('.single-product [data-gallery-style="left_thumb_sticky"]').length)&&(d=f-f/1.8,setTimeout(Bn,100),j.on("click","#header-outer nav .sf-menu a, #footer-outer .nectar-button, #footer-outer .widget_nav_menu a, #footer-widgets .textwidget a, #mobile-menu li a, .nectar-scrolling-tabs:not(.navigation_func_active_link_only) .scrolling-tab-nav a, .container-wrap a:not(.wpb_tabs_nav a):not(.navigation_func_active_link_only .scrolling-tab-nav a):not(.woocommerce-checkout a):not(.um-woo-view-order):not(.magnific):not([data-fancybox]):not(.woocommerce-tabs .tabs a):not(.slider-prev):not(.slider-next):not(.testimonial-next-prev a):not(.page-numbers), .swiper-slide .button a, #slide-out-widget-area a, #slide-out-widget-area .inner div a",function(t){var i=!0,s=q(this).prop("hash");s&&!q(this).hasClass("nectar-next-section")&&0==q(this).parents(".slide-out-widget-area-toggle").length&&(j.addClass("animated-scrolling"),dt.animatedScrolling=!0),clearTimeout(n),n=setTimeout(function(){j.removeClass("animated-scrolling"),dt.animatedScrolling=!1},1100);var r=0<q('body[data-header-format="left-header"]').length&&1e3<Y.width()?0:q("#header-space").outerHeight(),e,i,o,a,l;(0<q(".page-template-template-no-header-footer").length||0<q(".page-template-template-no-header").length||0==q("#header-space").length)&&(r=0),0!=rt.$usingFullScreenRows&&0<q('#nectar_fullscreen_rows[data-anchors="on"]').length&&s&&""!=s&&"#top"!=s&&0<q('body.material[data-slide-out-widget-area-style="slide-out-from-right"].material-ocm-open').length&&(t.preventDefault(),q(this).hasClass("skip-hash")||(history.pushState?history.pushState(null,null,s):location.hash=s),setTimeout(function(){q(L).trigger("hashchange")},800)),(s&&0<j.find(s).length&&"#top"!=s&&""!=s&&-1!==q(this).attr("href").indexOf(L.location.href.split("#")[0])||q(this).is('[href^="#"]')&&""!=s&&0<j.find(s).length&&"#top"!=s)&&(q(this).hasClass("skip-hash")||(history.pushState?history.pushState(null,null,s):location.hash=s),0<q(this).parents("ul").length&&q(this).parents("ul").find("li").removeClass("current-menu-item"),0<q(this).parents("#slide-out-widget-area").length&&(0<q('body.material[data-slide-out-widget-area-style="slide-out-from-right"].material-ocm-open').length?(q("body > .slide_out_area_close").addClass("non-human-allowed").trigger("click"),e=q(this),i=!1,setTimeout(function(){e.trigger("click")},1e3)):q("#slide-out-widget-area .slide_out_area_close").addClass("non-human-allowed").trigger("click"),setTimeout(function(){(0<q('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length?q("body > .slide_out_area_close"):q("#slide-out-widget-area .slide_out_area_close")).removeClass("non-human-allowed")},100)),0<q(this).parents("#mobile-menu").length&&(q(".slide-out-widget-area-toggle.mobile-icon a").addClass("non-human-allowed").trigger("click"),setTimeout(function(){q(".slide-out-widget-area-toggle.mobile-icon a").removeClass("non-human-allowed")},100)),o=0<q(this).parents("#mobile-menu").length?q(this).parents("#mobile-menu").height():null,a=1,l=q(this),0<q(".nectar-box-roll").length&&0<q(".container-wrap.bottomBoxOut").length&&(st.boxRoll(null,-1),a=2050),setTimeout(function(){var t,e,a,n,t;0==q('body[data-permanent-transparent="1"]').length?j.hasClass("mobile")?t=0<q('#header-outer[data-mobile-fixed="1"]').length?q(s).offset().top+2-r+ot.adminBarHeight:q(s).offset().top-o-ot.adminBarHeight+1:(e=0<q('#header-outer[data-header-resize="0"]').length?0:parseInt(m)+2*d,0<q('#header-outer[data-remove-fixed="1"]').length&&(r=0),t=q(s).offset().top-o-parseInt(r)+e+3-ot.adminBarHeight,0==q("body.mobile").length&&0===q("body.page-template-template-no-header").length&&0===q("body.page-template-template-no-header-footer").length&&0<q('#header-outer[data-condense="true"]').length&&(a=q('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),n=u.height()-(parseInt(a.height())+parseInt(q("#header-outer #logo").css("margin-top"))),t=q(s).offset().top-parseInt(r)+n-ot.adminBarHeight)):t=q(s).offset().top-ot.adminBarHeight+1,0<q('body[data-hhun="1"]').length&&0==q('#header-outer[data-remove-fixed="1"]').length&&((0==q("#header-outer.detached").length||0<l.parents('.page-submenu[data-sticky="true"]').length)&&(t+=r),0<l.parents('.page-submenu[data-sticky="true"]').length&&(q("#header-outer.detached").addClass("invisible"),q(".page-submenu").addClass("header-not-visible").css("transform","translateY(0px)")));var n,a=0<l.parents('.page-submenu[data-sticky="true"]').length?l.parents(".page-submenu").height():0,n=0<q("body.material").length&&0<c.length&&0==q('body[data-hhun="1"]').length&&0==q('#header-outer[data-remove-fixed="1"]').length&&!j.hasClass("mobile")||0<q('body[data-hhun="1"]').length&&0<c.length&&!j.hasClass("mobile")&&0==q('#header-outer[data-remove-fixed="1"]').length?c.height():0;i&&Qt(t-a+n,700,"easeInOutQuint")},a),t.preventDefault()),"#top"==s&&0<q(this).parents("#slide-out-widget-area").length&&q("#slide-out-widget-area .slide_out_area_close").trigger("click")}))}function Xn(){I=[];var e=0;q(".portfolio-items:not(.carousel)").each(function(t){q(this).attr("instance",t),q(this).parent().parent().find("div[class^=portfolio-filters]").attr("instance",t),"undefined"!=typeof SalientPortfolio&&(I[e]=new SalientPortfolio(q(this),We,at,ke),e++)})}function Nn(){690<ot.winW&&q('.posts-container[data-load-animation="perspective"]').css("perspective-origin","50% "+(ot.scrollTop+ot.winH)+"px"),requestAnimationFrame(Nn)}function Dn(){0<q('.posts-container[data-load-animation="perspective"]').length&&requestAnimationFrame(Nn)}function Qn(t){"none"==t.attr("data-load-animation")?t.find(".inner-wrap").removeClass("animated"):t.find("article").each(function(t){var e,a;q(this).visible(!0)?q(this).delay(110*t).queue(function(t){q(this).addClass("animated-in"),t()}):(e=q(this),a=new Waypoint({element:e[0],handler:function(){setTimeout(function(){e.addClass("animated-in")},80*e.attr("data-delay-amount")),a.destroy()},offset:"90%"}))})}function Zn(){D=[],q(".posts-container").each(function(t){q(this).parent().hasClass("masonry")&&!q(this).parent().hasClass("auto_meta_overlaid_spaced")?"undefined"!=typeof NectarMasonryBlog&&(D[t]=new NectarMasonryBlog(q(this),ke,Qn)):Qn(q(this))})}function Un(){var t=50,e,e,t;return 0<q('#header-outer[data-remove-fixed="0"]').length&&0==q('#header-outer[data-format="left-header"]').length&&(t+=u.outerHeight(),0<q('#header-outer[data-shrink-num][data-header-resize="1"]').length&&(e=parseInt(u.attr("data-padding"))-parseInt(u.attr("data-padding"))/1.8,t-=m,t-=e),0==q("body.mobile").length&&0<q('#header-outer[data-condense="true"]').length&&(e=q('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),t=50,t+=u.height()-(parseInt(e.position().top)-parseInt(q("#header-outer #logo").css("margin-top")))-parseInt(ot.secondaryHeaderHeight))),0<h.length&&(t+=h.outerHeight()),t}function Gn(){var e=Un(),t;ot.winW<690&&ot.usingMobileBrowser||T.documentElement.style.setProperty("--nectar-sticky-top-distance",e+"px"),q(".nectar-sticky-column-css").each(function(){0==q(this).find(".n-sticky").length&&(q(this).wrapInner('<div class="n-sticky" />'),q(this).hasClass("nectar-sticky-column-css--middle")&&new ue(q(this)))}),!q().theiaStickySidebar||ot.usingMobileBrowser&&ot.winW<1e3||0!=rt.$usingFullScreenRows&&1e3<ot.winW||(t='#sidebar[data-nectar-ss="true"], #sidebar[data-nectar-ss="1"], .nectar-scrolling-tabs:not(.navigation_func_active_link_only) .scrolling-tab-nav, .nectar-sticky-column',L.nectarOptions&&L.nectarOptions.woo_sticky_sidebar&&"1"===L.nectarOptions.woo_sticky_sidebar&&(t+=", .woocommerce.archive #sidebar"),q(t).each(function(){var t=e;0<q(this).parents(".wpb_widgetised_column").length?0<q("body.vc_editor").length||q(this).parents(".wpb_column").theiaStickySidebar({additionalMarginTop:t,updateSidebarHeight:!1}):q(this).theiaStickySidebar({additionalMarginTop:t,updateSidebarHeight:!1})}))}function Jn(){var l=f-f/1.8;j.on("click",".section-down-arrow, .scroll-down-wrap > .minimal-arrow",function(){if(0<q(this).parents(".nectar-box-roll").length)return!1;var t=q(this).parents("#page-header-bg"),e=t.height(),a=0==t.parents(".first-section").length||0<q('body[data-transparent-header="false"]').length?t.offset().top:0,n=0<p.length&&1e3<Y.width()?p.height():0,i=0<q('body[data-header-format="left-header"]').length?0:q("#header-space").height(),s=0,r,o,i;return 0<q("body.material").length&&0<c.length&&(s=c.height()),0==q('body[data-permanent-transparent="1"]').length?j.hasClass("mobile")?Qt((0<q('#header-outer[data-mobile-fixed="1"]').length?parseInt(e)-i+parseInt(t.offset().top)+2:parseInt(e)+parseInt(t.offset().top)+2)-2*n,700,"easeInOutQuint"):0<q('body[data-hhun="1"]').length&&0==q('#header-outer[data-remove-fixed="1"]').length?Qt(parseInt(e)+a+2-2*n,700,"easeInOutQuint"):(r=0<q('#header-outer[data-header-resize="0"]').length?0:parseInt(m)+2*l,0<q('#header-outer[data-remove-fixed="1"]').length&&(a=i=0),0==q("body.mobile").length&&0<q('#header-outer[data-condense="true"]').length&&(o=q('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),i=u.height()-(parseInt(o.position().top)-parseInt(q("#header-outer #logo").css("margin-top")))-parseInt(ot.secondaryHeaderHeight)),Qt(parseInt(e-i)+r+3+a+s,700,"easeInOutQuint")):Qt(parseInt(e)+parseInt(t.offset().top)+2-2*n,700,"easeInOutQuint"),!1})}function Kn(){q(".nectar-liquid-bg").removeClass("animated-in");for(var t=0;t<V.length;t++)"displace-filter-fade"==V[t].animationType&&0<q(V[t].canvasContainer).parents(".fp-section.active").length&&(0==q(V[t].canvasContainer).find(".image-added-to-stage").length&&V[t].imgContainer.addChild(V[t].bg),q(V[t].canvasContainer).find(".nectar-liquid-bg").addClass("image-added-to-stage"),V[t].animateProps(V[t]))}function ti(){var t;0<q("#nectar_fullscreen_rows").length&&q().fullpage&&(at=L.vc_iframe?".vc_element.vc_vc_row.active ":".wpb_row.active ",t=0<q("#nectar_fullscreen_rows[data-mobile-disable]").length?q("#nectar_fullscreen_rows").attr("data-mobile-disable"):"off","on"!=(t=!ot.usingMobileBrowser?"off":t)?nt=!0:at="",rt=new NectarFullScreenRows(Da,N,Kn,ot,De,Q,E))}function ei(){ot.usingMobileBrowser&&j.addClass("using-mobile-browser"),0<L.navigator.userAgent.indexOf("Edge/")&&j.addClass("msie"),0==q("html.js").length&&q("html").removeClass("no-js").addClass("js"),q("code").find("br").remove(),q(".wpcf7-form p:has(input[type=submit])").css("padding-bottom","0px"),q(".full-width-content .wpcf7-submit").on("click",function(){setTimeout(function(){We()},1e3),setTimeout(function(){We()},2e3)}),q(".gform_body").on("click",function(){setTimeout(function(){We()},200)}),q(".pum.pum-theme-salient-page-builder-optimized button.pum-close").wrapInner("<span />"),0<q("#nectar_fullscreen_rows").length&&0<q(".pum-container .pum-content > .wpb_row .full-page-inner > .container > .span_12").length&&q(".pum-container .pum-content > .wpb_row .full-page-inner > .container > .span_12").unwrap(),0<q(".single .blog_next_prev_buttons").length&&q(".container-wrap").css("padding-bottom",0),q(".full-width-section").each(function(){q(this).find("> .span_12 > div.col_last").last().css("margin-bottom","0")}),q(".full-width-content .col.boxed").removeClass("boxed"),q(".wpb_column.neg-marg").parents(".wpb_row:not(.inner_row):not(.zindex-set)").css("z-index","110"),q(".wpb_row.legacy").each(function(){0<q(this).find(".wpb_column").length&&q(this).removeClass("legacy")})}function ai(){q(".wpb_row").each(function(){void 0!==q(this).find(".span_12").offset()&&q(this).find('[class*="vc_col-"]').each(function(){var t=q(this).parents(".span_12").offset().left;q(this).removeClass("no-left-margin"),q(this).offset().left<t+27?q(this).addClass("no-left-margin"):q(this).removeClass("no-left-margin")})})}function ni(){var t=ot.winW,e=ot.winH,a=0;j.is('[data-flex-cols="true"]')||0<q('[class*="vc_col-xs-"], [class*="vc_col-md-"], [class*="vc_col-lg-"]').length&&(ai(),ot.usingMobileBrowser?(L.addEventListener("orientationchange",function(){a=1}),Y.on("resize",function(){(Y.width()!=t&&Y.height!=e||1===a)&&(ai(),t=ot.winW,e=ot.winH,a=0)})):Y.on("resize",ai))}function ii(){0<q('body[data-fancy-form-rcs="1"]').length&&0==q("#wcfm-main-content").length&&(q("select:not(.comment-form-rating #rating)").each(function(){var t;0<q(this).parents(".wpcf7-form-control-wrap").length?1==(t=0<q(this).parents(".wpcf7-form-control-wrap").find(".select2-container").length?q(q(this).prev(".select2-container")):q(this)).parents(".wpcf7-form-control-wrap").parent().find("label").length?t.parents(".wpcf7-form-control-wrap").parent().wrapInner('<div class="fancy-select-wrap" />'):t.wrap('<div class="fancy-select-wrap" />'):(t=0<q(this).prev(".select2-container").length?q(this).prev(".select2-container"):q(this),0==q(this).parents("#buddypress").length&&0==q(this).parents(".widget_categories").length&&(1==t.prev("label").length?t.prev("label").andSelf().wrapAll('<div class="fancy-select-wrap" />'):1==t.next("label").length?t.next("label").andSelf().wrapAll('<div class="fancy-select-wrap" />'):t.wrap('<div class="fancy-select-wrap" />')))}),q("select:not(.state_select):not(.country_select):not(.comment-form-rating #rating):not(#tribe-bar-form select):not(.woocommerce-currency-switcher):not(.nectar-custom-product-attr select)").each(function(){var t=690<ot.winW?7:200,e;(q(this).hasClass("skip-select2-search")||0<q(this).parents(".skip-select2-search").length)&&(t=1e3),0==q(this).parents("#buddypress").length&&(e={minimumResultsForSearch:t,width:"100%"},("underline"==(L.nectarOptions&&L.nectarOptions.woo_product_variable_select?L.nectarOptions.woo_product_variable_select:"default")||0<q(this).parents(".woocommerce-ordering").length)&&(e={minimumResultsForSearch:t,dropdownParent:q(this).parent(),dropdownAutoWidth:!0}),q(this).select2(e))}))}function si(){(-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")||navigator.userAgent.match(/(iPod|iPhone|iPad)/))&&(L.onpageshow=function(t){t.persisted&&(q(".nectar-video-wrap, .nectar-slider-wrap .swiper-slide .video-wrap").each(function(){0<q(this).find("video").length&&q(this).find("video")[0].play()}),0<q("body.material-ocm-open").length?(q("body > .slide_out_area_close").addClass("non-human-allowed").trigger("click"),setTimeout(function(){q("body > .slide_out_area_close").removeClass("non-human-allowed")},100)):0<q("#slide-out-widget-area.slide-out-from-right-hover.open").length&&navigator.userAgent.match(/(iPod|iPhone|iPad)/)?Oa():(0<q("#slide-out-widget-area.fullscreen.open").length||0<q("#slide-out-widget-area.fullscreen-alt.open").length||0<q("#slide-out-widget-area.slide-out-from-right.open").length)&&(q("#slide-out-widget-area .slide_out_area_close").addClass("non-human-allowed"),q(".slide-out-widget-area-toggle:not(.std-menu) a.open").addClass("non-human-allowed").trigger("click"),setTimeout(function(){q("#slide-out-widget-area .slide_out_area_close").removeClass("non-human-allowed")},100)))})}function ri(){q(".wpb_row").removeClass("only-ns"),q('.nectar-slider-wrap[data-full-width="true"], .page-submenu, .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), .blog-fullwidth-wrap').parents(".wpb_row").addClass("only-ns"),q("body.vc_editor.compose-mode .wpb_row .vc_vc_column > .wpb_column > .vc_column-inner").each(function(){0<q(this).find("> .vc_element-container > div").length&&(q(this).find("> .vc_element-container > div:first-child").is(".vc_vc_row_inner")?q(this).find("> .vc_element-container > div:first-child").addClass("first-inner-row-el"):q(this).find("> .vc_element-container > div:first-child").removeClass("first-inner-row-el"))}),q("body.vc_editor.compose-mode .vc_row.inner_row").each(function(){q(this).hasClass("row_position_absolute")?q(this).parent().css({position:"static","min-height":"0"}):q(this).parent().css({position:"","min-height":""})})}function oi(){q('.vc_element > .wpb_column[class*="padding-"][class*="-percent"]').each(function(){var t=4,e=this.className.match(/padding-\d+/),e;(t=e?(t=e[0].match(/\d+/))?t[0]/100:0:t)&&(e=q(this).parents(".span_12").width(),q(this).is('[data-padding-pos="all"]')?q(this).css("padding",e*t):q(this).is('[data-padding-pos="top"]')?q(this).css("padding-top",e*t):q(this).is('[data-padding-pos="bottom"]')?q(this).css("padding-bottom",e*t):q(this).is('[data-padding-pos="left"]')?q(this).css("padding-left",e*t):q(this).is('[data-padding-pos="right"]')?q(this).css("padding-right",e*t):q(this).is('[data-padding-pos="top-bottom"]')?q(this).css({"padding-top":e*t,"padding-bottom":e*t}):q(this).is('[data-padding-pos="top-right"]')?q(this).css({"padding-top":e*t,"padding-right":e*t}):q(this).is('[data-padding-pos="bottom-right"]')?q(this).css({"padding-right":e*t,"padding-bottom":e*t}):q(this).is('[data-padding-pos="bottom-left"]')?q(this).css({"padding-left":e*t,"padding-bottom":e*t}):q(this).is('[data-padding-pos="left-right"]')&&q(this).css({"padding-left":e*t,"padding-right":e*t}))}),q('.wpb_row[class*="vc_custom_"]').each(function(){q(this).parent().addClass("no-bottom-margin")})}function li(){setTimeout(function(){0<q("body.compose-mode").length&&q(".container-wrap").addClass("visible-editor-controls"),ot.usingFrontEndEditor&&(ri(),j.is('[data-flex-cols="true"]')||(oi(),Y.on("smartresize",oi)))},200),Y.on("vc_reload",function(){if(ri(),be(),fe(),It(),He(),wt(),he(),qe(),_e(),Sn(),ua(),jt(),Ke(),$n(),An(),Le(),Ue(),0<q(".carousel").length&&(St(),Lt(),qt()),0<q(".owl-carousel").length&&(q(".owl-carousel").each(function(){q(this).trigger("destroy.owl.carousel").removeClass("owl-loaded"),q(this).find(".owl-stage-outer .owl-stage > *").unwrap(),q(this).find(".owl-stage-outer > *").unwrap(),q(this).find(".owl-item > *").unwrap(),q(this).find(".owl-dots").remove(),q(this).find(".owl-nav").remove()}),At()),0<q(".nectar_cascading_images").length&&imagesLoaded(q(".nectar_cascading_images"),function(){je()}),ke(),Se(),On(),Ae(),0<B.length)for(var t=0;t<B.length;t++)B[t].reloadCells(),B[t].off("scroll.flickity"),B[t].off("dragStart.flickity"),B[t].off("dragEnd.flickity");if(xt(),setTimeout(function(){if(Ct(),0<B.length)for(var t=0;t<B.length;t++)B[t].reloadCells(),B[t].resize()},100),0<R.length)for(t=0;t<R.length;t++)R[t].flickity("reloadCells"),R[t].off("scroll.flickity"),R[t].off("dragStart.flickity"),R[t].off("dragEnd.flickity");for(setTimeout(function(){if(0<q(".nectar-woo-flickity").length&&Ft(),0<R.length)for(var t=0;t<R.length;t++)R[t].flickity("reloadCells"),R[t].flickity("resize")},100),ra(),t=0;t<X.length;t++)"multiple_visible"!=X[t].type&&"multiple_visible_minimal"!=X[t].type||(X[t].flickityEl.flickity("reloadCells"),X[t].flickityEl.off("select.flickity"),ra(),X[t].flickityEl.resize()),X[t].testimonialSliderHeight();if(oa(),sa(),ha(),ae(),Qe(),me(),Xa(),pa(),ga(),We(),setTimeout(We,1e3),va(),_n(),Y.off("scroll.parallaxSections").off("resize.parallaxSections"),Oe(),Zn(),Xn(),0<I.length)for(t=0;t<I.length;t++)I[t].portfolioAccentColor();var e;Hn(),Fn(),setTimeout(function(){if(0<q(".nectar_fullscreen_zoom_recent_projects").length&&0<F.length)for(var t=0;t<F.length;t++)F[t].sliderCalcs()},300),Y.unbind(".infscr"),qn(),Fe(),q(".nectar-video-wrap").each(function(){0<q(this).find("video").length&&q(this).find("video").css("visibility","visible")}),q(".wpb_column[data-t-w-inherits]").each(function(){q(this).is('[data-t-w-inherits="small_desktop"]')?q(this).parent().addClass("inherits-s-desktop-col"):q(this).parent().removeClass("inherits-s-desktop-col")}),0<q("#nectar_fullscreen_rows").length?(0==q("#nectar_fullscreen_rows > .vc_element").length&&q("#nectar_fullscreen_rows").prepend('<div class="vc_element empty_placeholder" />'),0<q("#nectar_fullscreen_rows > .vc_element:not(.empty_placeholder)").length&&q("#nectar_fullscreen_rows >.vc_element.empty_placeholder").remove(),q.fn.fullpage.destroy("all"),ti(),e=[{el:"",offset:0}],q("#nectar_fullscreen_rows > div.vc_element").each(function(t){e[t]={el:q(this),offset:q(this).offset().top}}),1===q("#nectar_fullscreen_rows > div.vc_element").length&&q("#nectar_fullscreen_rows").css({transform:"translate3d(0,0,0)"}),j.scrollTo(0,0)):0<q('body .main-content > .row > .vc_element:first > .wpb_row[class*="full-width-"]').length||0<q('body .main-content > .row > .vc_element:first .nectar-slider-wrap[data-full-width="true"]').length?q(".container-wrap").css({"padding-top":"0","margin-top":"0"}):q(".container-wrap").css({"padding-top":"40px"}),E=[],q(".svg-icon-holder").removeClass("animated-in").removeClass("bound"),0<q(".vc_nectar_gmap").length&&setTimeout(function(){"object"==typeof google&&"object"==typeof google.maps?L.mapAPI_Loaded():0<L.nectarLove.mapApiKey.length&&q.getScript("https://maps.google.com/maps/api/js?sensor=false&key="+L.nectarLove.mapApiKey+"&callback=mapAPI_Loaded")},100),Gn(),void 0!==L.Waypoint&&(Waypoint.destroyAll(),Da())})}function di(){var t=!1,e;0<q('body[data-ajax-transitions="true"]').length&&0<q('#ajax-loading-screen[data-disable-mobile="1"]').length&&ot.winW<1e3&&(t=!0),0<q('body[data-ajax-transitions="true"]').length&&0<q('#ajax-loading-screen[data-method="standard"]').length&&0==t?(q("html").addClass("page-trans-loaded"),0<q('#ajax-loading-screen[data-effect="standard"]').length?(0==q(".nectar-particles").length&&(n.transition({opacity:0},500,function(){q(this).css({display:"none"})}),q("#ajax-loading-screen .loading-icon").transition({opacity:0},500)),0==q(".nectar-box-roll").length&&setTimeout(function(){Da()},550)):(0<q('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length&&setTimeout(function(){n.addClass("loaded")},60),0==q('#page-header-wrap #page-header-bg[data-animate-in-effect="zoom-out"] .nectar-video-wrap').length&&setTimeout(function(){q("#ajax-loading-screen:not(.loaded)").addClass("loaded"),setTimeout(function(){n.addClass("hidden")},1e3)},150),0==q(".nectar-box-roll").length&&0<q('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length?setTimeout(function(){Da()},750):0==q(".nectar-box-roll").length&&setTimeout(function(){Da()},350)),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")||navigator.userAgent.match(/(iPod|iPhone|iPad)/)?(L.onunload=function(){q("#ajax-loading-screen").stop().transition({opacity:0},800,function(){q(this).css({display:"none"})}),q("#ajax-loading-screen .loading-icon").transition({opacity:0},600)},L.onpageshow=function(t){t.persisted&&(q("#ajax-loading-screen").stop().transition({opacity:0},800,function(){q(this).css({display:"none"})}),q("#ajax-loading-screen .loading-icon").transition({opacity:0},600))}):-1!=navigator.userAgent.indexOf("Firefox")&&(L.onunload=function(){}),q(".portfolio-loading, .nectar-slider-loading .loading-icon").remove(),0==q('#ajax-loading-screen[data-disable-fade-on-click="1"]').length&&0==q('body.using-mobile-browser #ajax-loading-screen[data-method="standard"][data-disable-mobile="1"]').length&&(e=!1,q('a[href^="mailto"], a[href^="tel"], .woocommerce-order-downloads a[class*="downloads-file"], .wpdm-cta.download-link a[data-downloadurl], .nectar-ignore-beforeunload a').on("click",function(){e=!0}),L.addEventListener("beforeunload",function(){e||(n.addClass("set-to-fade"),0<q('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length?(n.removeClass("loaded"),n.addClass("in-from-right"),setTimeout(function(){n.addClass("loaded")},30)):(0<q('#ajax-loading-screen[data-effect="center_mask_reveal"]').length?n.css("opacity","0").css("display","block"):n.show()).transition({opacity:"1"},450)),e=!1}))):(1==t&&n.css({opacity:"0",display:"none"}).addClass("loaded").addClass("hidden"),0!=q(".nectar-box-roll").length||ot.usingFrontEndEditor||Da())}yn.prototype.events=function(){var t=this;q(L).on("smartresize",this.resize.bind(this)),L.addEventListener("orientationchange",function(){this.setTimeout(function(){t.orientationChange()},100)})},yn.prototype.resize=function(){ot.usingMobileBrowser||(this.storedWinH=ot.winH,this.calculate())},yn.prototype.calculate=function(){if(1==dt.materialOffCanvasOpen)return!0;this.offsetTop=this.$el.offset().top,this.offsetTop<this.storedWinH&&this.$el.hasClass("top-level")&&!ot.usingFrontEndEditor||(this.$el.css("min-height",this.storedWinH),this.$el.find("> .col.span_12").css("min-height",this.storedWinH))},yn.prototype.orientationChange=function(){ot.usingMobileBrowser&&(this.storedWinH=ot.winH,this.calculate())},Mn.prototype.resizeEvent=function(){this.initialX=this.$el.width()/2,this.initialY=this.$el.height()/2},Mn.prototype.mouseEvents=function(){var e=this;e.$el.on("mouseenter",function(t){e.activeFollow=!0,e.elX=t.offsetX,e.elY=t.offsetY,e.lastScroll=0,clearInterval(e.percentageInterval),e.percentageInterval=setInterval(function(){e.percentage<.16?e.percentage+=.008:clearInterval(e.percentageInterval)},30)}),e.$el.on("mouseleave",function(){e.activeFollow=!1,e.lastScroll=0,clearInterval(e.percentageInterval),e.percentage=.03}),e.$el.on("mousemove",function(t){e.elX=t.offsetX,e.elY=t.offsetY,e.lastScroll=0}),q(L).on("scroll",function(){1==e.activeFollow&&0==e.lastScroll&&(e.lastScroll=ot.scrollTop)})},Mn.prototype.rafLoop=function(){1==this.activeFollow?(this.scrollAdjust=0<this.lastScroll?ot.scrollTop-this.lastScroll:0,this.lastY=Pt(this.lastY,this.elY+this.scrollAdjust,this.percentage),this.lastX=Pt(this.lastX,this.elX,this.percentage),this.lastY2=Pt(this.lastY2,this.elY,this.percentage),this.innerLastX=Pt(this.innerLastX,parseInt(this.elX)-parseInt(this.lastX),this.percentage)/1.7,this.innerLastY=Pt(this.innerLastY,parseInt(this.elY)-parseInt(this.lastY2),this.percentage)/1.7):(this.lastY=Pt(this.lastY,this.initialY,.055),this.lastX=Pt(this.lastX,this.initialX,.055),this.innerLastX=0,this.innerLastY=0),this.$iconEl[0].style.transform="translateX("+this.lastX+"px) translateY("+this.lastY+"px)",0<this.$innerIconEl.length&&(this.$innerIconEl[0].style.transform="translateX("+Bt(this.innerLastX,14,-14)+"px) translateY("+Bt(this.innerLastY,14,-14)+"px)"),requestAnimationFrame(this.rafLoop.bind(this))},jQuery(T).ready(function(t){ot.init(),Na(),ti(),Ue(),Et(),tn(),en(),nn(),sn(),fn(),vn(),Qa(),be(),ni(),ke(),Se(),Mt(),Ce(),Te(),Oe(),He(),Ae(),We(),ua(),xn(),_n(),ae(),fa(),pa(),ga(),va(),ba(),wa(),ya(),ka(),La(),Wa(),Pa(),wn(),Ja(),ii(),qn(),jn(),Vn(),Dn(),Jn(),ei(),si(),li(),di(),Y.off("smartresize.srInit"),Y.on("smartresize.srInit",mt),Y.off("resize.srInit"),Y.on("resize.srInit",bt),L.addEventListener("orientationchange",vt),"complete"===T.readyState&&setTimeout(function(){Y.trigger("load")},30),Y.on("load",function(){0==t(L).scrollTop()&&mn(),t("video").css("visibility","visible"),Rn(),We(),He(),ma()})})}(window.jQuery,window,document);
/* Touch swipe */
(function(d){var m="left",l="right",c="up",s="down",b="in",t="out",j="none",o="auto",i="swipe",p="pinch",u="tap",x="horizontal",q="vertical",g="all",e="start",h="move",f="end",n="cancel",a="ontouchstart" in window,v="TouchSwipe";var k={fingers:1,threshold:75,cancelThreshold:25,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"button, input, select, textarea, a, .noSwipe"};d.fn.swipe=function(A){var z=d(this),y=z.data(v);if(y&&typeof A==="string"){if(y[A]){return y[A].apply(this,Array.prototype.slice.call(arguments,1))}else{d.error("Method "+A+" does not exist on jQuery.swipe")}}else{if(!y&&(typeof A==="object"||!A)){return r.apply(this,arguments)}}return z};d.fn.swipe.defaults=k;d.fn.swipe.phases={PHASE_START:e,PHASE_MOVE:h,PHASE_END:f,PHASE_CANCEL:n};d.fn.swipe.directions={LEFT:m,RIGHT:l,UP:c,DOWN:s,IN:b,OUT:t};d.fn.swipe.pageScroll={NONE:j,HORIZONTAL:x,VERTICAL:q,AUTO:o};d.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:g};function r(y){if(y&&(y.allowPageScroll===undefined&&(y.swipe!==undefined||y.swipeStatus!==undefined))){y.allowPageScroll=j}if(y.click!==undefined&&y.tap===undefined){y.tap=y.click}if(!y){y={}}y=d.extend({},d.fn.swipe.defaults,y);return this.each(function(){var A=d(this);var z=A.data(v);if(!z){z=new w(this,y);A.data(v,z)}})}function w(S,ag){var aJ=(a||!ag.fallbackToMouseEvents),az=aJ?"touchstart":"mousedown",U=aJ?"touchmove":"mousemove",av=aJ?"touchend":"mouseup",D=aJ?null:"mouseleave",R="touchcancel";var ad=0,N=null,ah=0,aF=0,A=0,aj=1,aA=0,aN=0,Z=null;var H=d(S);var O="start";var aI=0;var ai=null;var I=0,Y=0,aD=0,aP=0;try{H.bind(az,at);H.bind(R,L)}catch(aG){d.error("events not supported "+az+","+R+" on jQuery.swipe")}this.enable=function(){H.bind(az,at);H.bind(R,L);return H};this.disable=function(){Q();return H};this.destroy=function(){Q();H.data(v,null);return H};this.option=function(aR,aQ){if(ag[aR]!==undefined){if(aQ===undefined){return ag[aR]}else{ag[aR]=aQ}}else{d.error("Option "+aR+" does not exist on jQuery.swipe.options")}};function at(aS){if(X()){return}if(d(aS.target).closest(ag.excludedElements,H).length>0){return}var aT=aS.originalEvent?aS.originalEvent:aS;var aR,aQ=a?aT.touches[0]:aT;O=e;if(a){aI=aT.touches.length}else{aS.preventDefault()}ad=0;N=null;aN=null;ah=0;aF=0;A=0;aj=1;aA=0;ai=T();Z=aE();z();if(!a||(aI===ag.fingers||ag.fingers===g)||ap()){aO(0,aQ);I=B();if(aI==2){aO(1,aT.touches[1]);aF=A=aa(ai[0].start,ai[1].start)}if(ag.swipeStatus||ag.pinchStatus){aR=aH(aT,O)}}else{aR=false}if(aR===false){O=n;aH(aT,O);return aR}else{ak(true)}}function P(aT){var aW=aT.originalEvent?aT.originalEvent:aT;if(O===f||O===n||af()){return}var aS,aR=a?aW.touches[0]:aW;var aU=V(aR);Y=B();if(a){aI=aW.touches.length}O=h;if(aI==2){if(aF==0){aO(1,aW.touches[1]);aF=A=aa(ai[0].start,ai[1].start)}else{V(aW.touches[1]);A=aa(ai[0].end,ai[1].end);aN=ao(ai[0].end,ai[1].end)}aj=y(aF,A);aA=Math.abs(aF-A)}if((aI===ag.fingers||ag.fingers===g)||!a||ap()){N=ar(aU.start,aU.end);C(aT,N);ad=G(aU.start,aU.end);ah=K();aK(N,ad);if(ag.swipeStatus||ag.pinchStatus){aS=aH(aW,O)}if(!ag.triggerOnTouchEnd||ag.triggerOnTouchLeave){var aQ=true;if(ag.triggerOnTouchLeave){var aV=au(this);aQ=aC(aU.end,aV)}if(!ag.triggerOnTouchEnd&&aQ){O=aM(h)}else{if(ag.triggerOnTouchLeave&&!aQ){O=aM(f)}}if(O==n||O==f){aH(aW,O)}}}else{O=n;aH(aW,O)}if(aS===false){O=n;aH(aW,O)}}function ab(aS){var aU=aS.originalEvent;if(a){if(aU.touches.length>0){aw();return true}}if(af()){aI=aP}aS.preventDefault();Y=B();if(ag.triggerOnTouchEnd||(ag.triggerOnTouchEnd==false&&O===h)){O=f;var aR=((aI===ag.fingers||ag.fingers===g)||!a);var aQ=ai[0].end.x!==0;var aT=aR&&aQ&&(an()||aB());if(aT){aH(aU,O)}else{O=n;aH(aU,O)}}else{if(!ag.triggerOnTouchEnd&&ay()){O=f;am(aU,O,u)}else{if(O===h){O=n;aH(aU,O)}}}ak(false)}function L(){aI=0;Y=0;I=0;aF=0;A=0;aj=1;z();ak(false)}function W(aQ){var aR=aQ.originalEvent;if(ag.triggerOnTouchLeave){O=aM(f);aH(aR,O)}}function Q(){H.unbind(az,at);H.unbind(R,L);H.unbind(U,P);H.unbind(av,ab);if(D){H.unbind(D,W)}ak(false)}function aM(aT){var aS=aT;var aR=aq();var aQ=ae();if(!aR){aS=n}else{if(aQ&&aT==h&&(!ag.triggerOnTouchEnd||ag.triggerOnTouchLeave)){aS=f}else{if(!aQ&&aT==f&&ag.triggerOnTouchLeave){aS=n}}}return aS}function aH(aS,aQ){var aR=undefined;if(ac()){aR=am(aS,aQ,i)}if(ap()&&aR!==false){aR=am(aS,aQ,p)}if(ay()&&aR!==false){aR=am(aS,aQ,u)}if(aQ===n){L(aS)}if(aQ===f){if(a){if(aS.touches.length==0){L(aS)}}else{L(aS)}}return aR}function am(aT,aQ,aS){var aR=undefined;if(aS==i){H.trigger("swipeStatus",[aQ,N||null,ad||0,ah||0,aI]);if(ag.swipeStatus){aR=ag.swipeStatus.call(H,aT,aQ,N||null,ad||0,ah||0,aI);if(aR===false){return false}}if(aQ==f&&aB()){H.trigger("swipe",[N,ad,ah,aI]);if(ag.swipe){aR=ag.swipe.call(H,aT,N,ad,ah,aI);if(aR===false){return false}}switch(N){case m:H.trigger("swipeLeft",[N,ad,ah,aI]);if(ag.swipeLeft){aR=ag.swipeLeft.call(H,aT,N,ad,ah,aI)}break;case l:H.trigger("swipeRight",[N,ad,ah,aI]);if(ag.swipeRight){aR=ag.swipeRight.call(H,aT,N,ad,ah,aI)}break;case c:H.trigger("swipeUp",[N,ad,ah,aI]);if(ag.swipeUp){aR=ag.swipeUp.call(H,aT,N,ad,ah,aI)}break;case s:H.trigger("swipeDown",[N,ad,ah,aI]);if(ag.swipeDown){aR=ag.swipeDown.call(H,aT,N,ad,ah,aI)}break}}}if(aS==p){H.trigger("pinchStatus",[aQ,aN||null,aA||0,ah||0,aI,aj]);if(ag.pinchStatus){aR=ag.pinchStatus.call(H,aT,aQ,aN||null,aA||0,ah||0,aI,aj);if(aR===false){return false}}if(aQ==f&&an()){switch(aN){case b:H.trigger("pinchIn",[aN||null,aA||0,ah||0,aI,aj]);if(ag.pinchIn){aR=ag.pinchIn.call(H,aT,aN||null,aA||0,ah||0,aI,aj)}break;case t:H.trigger("pinchOut",[aN||null,aA||0,ah||0,aI,aj]);if(ag.pinchOut){aR=ag.pinchOut.call(H,aT,aN||null,aA||0,ah||0,aI,aj)}break}}}if(aS==u){if(aQ===n||aQ===f){if((aI===1||!a)&&(isNaN(ad)||ad===0)){H.trigger("tap",[aT.target]);if(ag.tap){aR=ag.tap.call(H,aT,aT.target)}}}}return aR}function ae(){var aQ=true;if(ag.threshold!==null){aQ=ad>=ag.threshold}if(aQ&&ag.cancelThreshold!==null){aQ=(M(N)-ad)<ag.cancelThreshold}return aQ}function al(){if(ag.pinchThreshold!==null){return aA>=ag.pinchThreshold}return true}function aq(){var aQ;if(ag.maxTimeThreshold){if(ah>=ag.maxTimeThreshold){aQ=false}else{aQ=true}}else{aQ=true}return aQ}function C(aQ,aR){if(ag.allowPageScroll===j||ap()){aQ.preventDefault()}else{var aS=ag.allowPageScroll===o;switch(aR){case m:if((ag.swipeLeft&&aS)||(!aS&&ag.allowPageScroll!=x)){aQ.preventDefault()}break;case l:if((ag.swipeRight&&aS)||(!aS&&ag.allowPageScroll!=x)){aQ.preventDefault()}break;case c:if((ag.swipeUp&&aS)||(!aS&&ag.allowPageScroll!=q)){aQ.preventDefault()}break;case s:if((ag.swipeDown&&aS)||(!aS&&ag.allowPageScroll!=q)){aQ.preventDefault()}break}}}function an(){return al()}function ap(){return !!(ag.pinchStatus||ag.pinchIn||ag.pinchOut)}function ax(){return !!(an()&&ap())}function aB(){var aQ=aq();var aS=ae();var aR=aS&&aQ;return aR}function ac(){return !!(ag.swipe||ag.swipeStatus||ag.swipeLeft||ag.swipeRight||ag.swipeUp||ag.swipeDown)}function E(){return !!(aB()&&ac())}function ay(){return !!(ag.tap)}function aw(){aD=B();aP=event.touches.length+1}function z(){aD=0;aP=0}function af(){var aQ=false;if(aD){var aR=B()-aD;if(aR<=ag.fingerReleaseThreshold){aQ=true}}return aQ}function X(){return !!(H.data(v+"_intouch")===true)}function ak(aQ){if(aQ===true){H.bind(U,P);H.bind(av,ab);if(D){H.bind(D,W)}}else{H.unbind(U,P,false);H.unbind(av,ab,false);if(D){H.unbind(D,W,false)}}H.data(v+"_intouch",aQ===true)}function aO(aR,aQ){var aS=aQ.identifier!==undefined?aQ.identifier:0;ai[aR].identifier=aS;ai[aR].start.x=ai[aR].end.x=aQ.pageX||aQ.clientX;ai[aR].start.y=ai[aR].end.y=aQ.pageY||aQ.clientY;return ai[aR]}function V(aQ){var aS=aQ.identifier!==undefined?aQ.identifier:0;var aR=J(aS);aR.end.x=aQ.pageX||aQ.clientX;aR.end.y=aQ.pageY||aQ.clientY;return aR}function J(aR){for(var aQ=0;aQ<ai.length;aQ++){if(ai[aQ].identifier==aR){return ai[aQ]}}}function T(){var aQ=[];for(var aR=0;aR<=5;aR++){aQ.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return aQ}function aK(aQ,aR){aR=Math.max(aR,M(aQ));Z[aQ].distance=aR}function M(aQ){return Z[aQ].distance}function aE(){var aQ={};aQ[m]=aL(m);aQ[l]=aL(l);aQ[c]=aL(c);aQ[s]=aL(s);return aQ}function aL(aQ){return{direction:aQ,distance:0}}function K(){return Y-I}function aa(aT,aS){var aR=Math.abs(aT.x-aS.x);var aQ=Math.abs(aT.y-aS.y);return Math.round(Math.sqrt(aR*aR+aQ*aQ))}function y(aQ,aR){var aS=(aR/aQ)*1;return aS.toFixed(2)}function ao(){if(aj<1){return t}else{return b}}function G(aR,aQ){return Math.round(Math.sqrt(Math.pow(aQ.x-aR.x,2)+Math.pow(aQ.y-aR.y,2)))}function F(aT,aR){var aQ=aT.x-aR.x;var aV=aR.y-aT.y;var aS=Math.atan2(aV,aQ);var aU=Math.round(aS*180/Math.PI);if(aU<0){aU=360-Math.abs(aU)}return aU}function ar(aR,aQ){var aS=F(aR,aQ);if((aS<=45)&&(aS>=0)){return m}else{if((aS<=360)&&(aS>=315)){return m}else{if((aS>=135)&&(aS<=225)){return l}else{if((aS>45)&&(aS<135)){return s}else{return c}}}}}function B(){var aQ=new Date();return aQ.getTime()}function au(aQ){aQ=d(aQ);var aS=aQ.offset();var aR={left:aS.left,right:aS.left+aQ.outerWidth(),top:aS.top,bottom:aS.top+aQ.outerHeight()};return aR}function aC(aQ,aR){return(aQ.x>aR.left&&aQ.x<aR.right&&aQ.y>aR.top&&aQ.y<aR.bottom)}}})(jQuery);
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2021 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(),
    function($) {
        "function" != typeof window.vc_js && (window.vc_js = function() {
            /* nectar addition */
        }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
            ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() {
                var this_element = jQuery(this),
                    sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                    sliderFx = this_element.attr("data-flex_fx"),
                    slideshow = 0 == sliderTimeout ? !1 : !0;
                this_element.is(":visible") && this_element.flexslider({
                    animation: sliderFx,
                    slideshow: slideshow,
                    slideshowSpeed: sliderTimeout,
                    sliderSpeed: 800,
                    smoothHeight: !0
                })
            })
        }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
            0 < jQuery(".wpb_googleplus").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
            0 < jQuery(".wpb_pinterest").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.find(".vc_single_bar").each(function(index) {
                        var bar = jQuery(this).find(".vc_bar"),
                            val = bar.data("percentage-value");
                        setTimeout(function() {
                            bar.css({
                                width: val + "%"
                            })
                        }, 200 * index)
                    })
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.addClass("wpb_start_animation animated")
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
            function event(content) {
                content && content.preventDefault && content.preventDefault();
                var element = jQuery(this).closest(".vc_toggle"),
                    content = element.find(".vc_toggle_content");
                element.hasClass("vc_toggle_active") ? content.slideUp({
                    duration: 300,
                    complete: function() {
                        element.removeClass("vc_toggle_active")
                    }
                }) : content.slideDown({
                    duration: 300,
                    complete: function() {
                        element.addClass("vc_toggle_active")
                    }
                })
            }($el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click") : $el.find(".vc_toggle_title").off("click") : jQuery(".vc_toggle_title").off("click")).on("click", event)
        }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function(ver) {
            var $call, old_version;
            jQuery.ui && ($call = ver || jQuery(".wpb_tabs, .wpb_tour"), ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10", old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9, $call.each(function(index) {
                var interval = jQuery(this).attr("data-interval"),
                    tabs_array = [],
                    $tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                        show: function(event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        },
                        activate: function(event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        }
                    });
                if (interval && 0 < interval) try {
                    $tabs.tabs("rotate", 1e3 * interval)
                } catch (err) {
                    window.console && window.console.warn && console.warn("tabs behaviours error", err)
                }
                jQuery(this).find(".wpb_tab").each(function() {
                    tabs_array.push(this.id)
                }), jQuery(this).find(".wpb_tabs_nav li").on("click", function(e) {
                    return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function(length) {
                    var index;
                    length && length.preventDefault && length.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index))
                })
            }))
        }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
            jQuery(".wpb_accordion").each(function(index) {
                var $this = jQuery(this),
                    active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1),
                    $tabs = !1 === active_tab || "yes" === $this.data("collapsible"),
                    $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                        header: "> div > h3",
                        autoHeight: !1,
                        heightStyle: "content",
                        active: active_tab,
                        collapsible: $tabs,
                        navigation: !0,
                        activate: vc_accordionActivate,
                        change: function(event, ui) {
                            void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                        }
                    });
                !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {})
            })
        }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
            var layout_modes = {
                fitrows: "fitRows",
                masonry: "masonry"
            };
            jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
                var $container = jQuery(this),
                    $thumbs = $container.find(".wpb_thumbnails"),
                    layout_mode = $thumbs.attr("data-layout-mode");
                $thumbs.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
                }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function($thumbs) {
                    $thumbs && $thumbs.preventDefault && $thumbs.preventDefault();
                    $thumbs = jQuery(this).data("isotope");
                    jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                        filter: jQuery(this).attr("data-filter")
                    })
                }), jQuery(window).on("load resize", function() {
                    $thumbs.isotope("layout")
                })
            })
        }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
            ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() {
                var fluid_ul = jQuery(this);
                !0 !== fluid_ul.data("carousel_enabled") && fluid_ul.is(":visible") && (fluid_ul.data("carousel_enabled", !0), getColumnsCount(jQuery(this)), jQuery(this).hasClass("columns_count_1"), (fluid_ul = jQuery(this).find(".wpb_thumbnails-fluid li")).css({
                    "margin-right": fluid_ul.css("margin-left"),
                    "margin-left": 0
                }), (fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid")).width(fluid_ul.width() + 300), jQuery(window).on("resize", function() {
                    screen_size != (screen_size = getSizeName()) && window.setTimeout(function() {
                        location.reload()
                    }, 20)
                }))
            })
        }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
            jQuery(".wpb_gallery_slides").each(function(index) {
                var $imagesGrid, sliderTimeout, this_element = jQuery(this);
                this_element.hasClass("wpb_slider_nivo") ? (0 === (sliderTimeout = 1e3 * this_element.attr("data-interval")) && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                    effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                    slices: 15,
                    boxCols: 8,
                    boxRows: 4,
                    animSpeed: 800,
                    pauseTime: sliderTimeout,
                    startSlide: 0,
                    directionNav: !0,
                    directionNavHide: !0,
                    controlNav: !0,
                    keyboardNav: !1,
                    pauseOnHover: !0,
                    manualAdvance: !1,
                    prevText: "Prev",
                    nextText: "Next"
                })) : this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
                    $imagesGrid.isotope({
                        itemSelector: ".isotope-item",
                        layoutMode: "fitRows"
                    })
                }) : this_element.find(".wpb_image_grid_ul").isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                }))
            })
        }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
            try {
                jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                    animationSpeed: "normal",
                    hook: "data-rel",
                    padding: 15,
                    opacity: .7,
                    showTitle: !0,
                    allowresize: !0,
                    counter_separator_label: "/",
                    hideflash: !1,
                    deeplinking: !1,
                    modal: !1,
                    callback: function() {
                        -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                    },
                    social_tools: ""
                })
            } catch (err) {
                window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err)
            }
        }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
            return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1
        }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
            var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;

            function fullWidthRow() {
                var $elements = $('[data-vc-full-width="true"]');
                $.each($elements, function(key, item) {
                    var $el = $(this);
                    $el.addClass("vc_hidden");
                    var el_margin_left, el_margin_right, offset, width, padding, paddingRight, $el_full = $el.next(".vc_row-full-width");
                    ($el_full = !$el_full.length ? $el.parent().next(".vc_row-full-width") : $el_full).length && (el_margin_left = parseInt($el.css("margin-left"), 10), el_margin_right = parseInt($el.css("margin-right"), 10), offset = 0 - $el_full.offset().left - el_margin_left, width = $(window).width(), "rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
                        position: "relative",
                        left: offset,
                        "box-sizing": "border-box",
                        width: width
                    }), $el.data("vcStretchContent") || ("rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : (paddingRight = width - (padding = (padding = -1 * offset) < 0 ? 0 : padding) - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0), $el.css({
                        "padding-left": padding + "px",
                        "padding-right": paddingRight + "px"
                    })), $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                        el: $el,
                        offset: offset,
                        marginLeft: el_margin_left,
                        marginRight: el_margin_right,
                        elFull: $el_full,
                        width: width
                    }))
                }), $(document).trigger("vc-full-width-row", $elements)
            }

            function fullHeightRow() {
                var fullHeight, offsetTop, $element = $(".vc_row-o-full-height:first");
                $element.length && (fullHeight = $(window).height(), (offsetTop = $element.offset().top) < fullHeight && (fullHeight = 100 - offsetTop / (fullHeight / 100), $element.css("min-height", fullHeight + "vh"))), $(document).trigger("vc-full-height-row", $element)
            }
            $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
                "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
            }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() {
                var skrollrStart, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrStart = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrStart + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrStart - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;")
            }), callSkrollInit && window.skrollr && (vcSkrollrOptions = {
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function() {
                    return !1
                }
            }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
        }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
            jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
        }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
            for (var find = !1, i = 1; !1 === find;) {
                if (el.hasClass("columns_count_" + i)) return find = !0, i;
                i++
            }
        });
        var screen_size = getSizeName();

        function getSizeName() {
            var screen_w = jQuery(window).width();
            return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : ""
        }
        "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
            var panel = ui.panel || ui.newPanel,
                $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = panel.find(".vc_round-chart"),
                $frame = panel.find(".vc_line-chart"),
                $google_maps = panel.find('[data-ride="vc_carousel"]');
            vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                reload: !1
            }), $frame.length && jQuery.fn.vcLineChart && $frame.vcLineChart({
                reload: !1
            }), $google_maps.length && jQuery.fn.carousel && $google_maps.carousel("resizeAction"), $frame = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $frame.length && $frame.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready") && (($frame = $google_maps.find("iframe")).attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")), panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
                jQuery(this).isotope("layout")
            }), $(document).trigger("wpb_prepare_tab_content", panel)
        }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function() {
            jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
                var $ = window.jQuery,
                    ui = {};
                ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
            })
        }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function(event, ui) {
            var $pie_charts, $round_charts, $line_charts, $carousel;
            ui.newPanel.length && ui.newHeader.length && ($pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"), $round_charts = ui.newPanel.find(".vc_round-chart"), $line_charts = ui.newPanel.find(".vc_line-chart"), $carousel = ui.newPanel.find('[data-ride="vc_carousel"]'), void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                reload: !1
            }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                reload: !1
            }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() {
                jQuery(this).isotope("layout")
            }))
        }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function() {
            return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
        }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function() {
            jQuery("[data-vc-video-bg]").each(function() {
                var youtubeId, $element = jQuery(this);
                $element.data("vcVideoBg") ? (youtubeId = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeId)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) {
                    $element.has($grid).length && vcResizeVideoBackground($element)
                })) : $element.find(".vc_video-bg").remove()
            })
        }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function($element, youtubeId, counter) {
            if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
                insertYoutubeVideoAsBackground($element, youtubeId, counter++)
            }, 100);
            var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0], {
                width: "100%",
                height: "100%",
                videoId: youtubeId,
                playerVars: {
                    playlist: youtubeId,
                    iv_load_policy: 3,
                    enablejsapi: 1,
                    disablekb: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    loop: 1,
                    wmode: "transparent"
                },
                events: {
                    onReady: function(event) {
                        event.target.mute().setLoop(!0)
                    }
                }
            }), vcResizeVideoBackground($element), jQuery(window).on("resize", function() {
                vcResizeVideoBackground($element)
            })
        }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function($element) {
            var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                containerH = $element.innerHeight();
            containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH
            })
        }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function(id) {
            if (void 0 === id) return !1;
            id = id.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            return null !== id && id[1]
        }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function() {
            var $ = window.jQuery,
                $wpbGmapsWidget = $(".wpb_gmaps_widget");
            $wpbGmapsWidget.on("click", function() {
                $("iframe", this).css("pointer-events", "auto")
            }), $wpbGmapsWidget.on("mouseleave", function() {
                $("iframe", this).css("pointer-events", "none")
            }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
        }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    perspective = 4 * $this.width() + "px";
                $this.css("perspective", perspective)
            })
        }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function(hoverBox) {
            hoverBox.each(function() {
                var hoverBoxHeight = jQuery(this),
                    hoverBoxInner = hoverBoxHeight.find(".vc-hoverbox-inner");
                hoverBoxInner.css("min-height", 0);
                var frontHeight = hoverBoxHeight.find(".vc-hoverbox-front-inner").outerHeight(),
                    hoverBoxHeight = hoverBoxHeight.find(".vc-hoverbox-back-inner").outerHeight(),
                    hoverBoxHeight = hoverBoxHeight < frontHeight ? frontHeight : hoverBoxHeight;
                hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
            })
        }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function() {
            var hoverBox = jQuery(".vc-hoverbox");
            vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
        }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).on("resize", window.vc_prepareHoverBox), jQuery(document).ready(function($) {
            window.vc_js()
        })
    }(window.jQuery);
/*!
 * Flickity PACKAGED v2.1.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      return factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      /*nectar addition*/
      if(jQuery('body.compose-mode').length == 0) {
        return;
      }
      /*nectar addition end*/
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

// Flickity.Cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/cell',[
      'get-size/get-size'
    ], function( getSize ) {
      return factory( window, getSize );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('get-size')
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Cell = factory(
      window,
      window.getSize
    );
  }

}( window, function factory( window, getSize ) {



function Cell( elem, parent ) {
  this.element = elem;
  this.parent = parent;

  this.create();
}

var proto = Cell.prototype;

proto.create = function() {
  this.element.style.position = 'absolute';
  this.element.setAttribute( 'aria-selected', 'false' );
  this.x = 0;
  this.shift = 0;
};

proto.destroy = function() {
  // reset style
  this.element.style.position = '';
  var side = this.parent.originSide;
  this.element.removeAttribute('aria-selected');
  this.element.style[ side ] = '';
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

proto.setPosition = function( x ) {
  this.x = x;
  this.updateTarget();
  this.renderPosition( x );
};

// setDefaultTarget v1 method, backwards compatibility, remove in v3
proto.updateTarget = proto.setDefaultTarget = function() {
  var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
  this.target = this.x + this.size[ marginProperty ] +
    this.size.width * this.parent.cellAlign;
};

proto.renderPosition = function( x ) {
  // render position of cell with in slider
  var side = this.parent.originSide;
  this.element.style[ side ] = this.parent.getPositionValue( x );
};

/**
 * @param {Integer} factor - 0, 1, or -1
**/
proto.wrapShift = function( shift ) {
  this.shift = shift;
  this.renderPosition( this.x + this.parent.slideableWidth * shift );
};

proto.remove = function() {
  this.element.parentNode.removeChild( this.element );
};

return Cell;

}));

// slide
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/slide',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Slide = factory();
  }

}( window, function factory() {
'use strict';

function Slide( parent ) {
  this.parent = parent;
  this.isOriginLeft = parent.originSide == 'left';
  this.cells = [];
  this.outerWidth = 0;
  this.height = 0;
}

var proto = Slide.prototype;

proto.addCell = function( cell ) {
  this.cells.push( cell );
  this.outerWidth += cell.size.outerWidth;
  this.height = Math.max( cell.size.outerHeight, this.height );
  // first cell stuff
  if ( this.cells.length == 1 ) {
    this.x = cell.x; // x comes from first cell
    var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
    this.firstMargin = cell.size[ beginMargin ];
  }
};

proto.updateTarget = function() {
  var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
  var lastCell = this.getLastCell();
  var lastMargin = lastCell ? lastCell.size[ endMargin ] : 0;
  var slideWidth = this.outerWidth - ( this.firstMargin + lastMargin );
  this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.select = function() {
  this.changeSelected( true );
};

proto.unselect = function() {
  this.changeSelected( false );
};

proto.changeSelected = function( isSelected ) {
  var classMethod = isSelected ? 'add' : 'remove';
  this.cells.forEach( function( cell ) {
    cell.element.classList[ classMethod ]('is-selected');
    cell.element.setAttribute( 'aria-selected', isSelected.toString() );
  });
};

proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  });
};

return Slide;

}));

// animate
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/animate',[
      'fizzy-ui-utils/utils'
    ], function( utils ) {
      return factory( window, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.animatePrototype = factory(
      window,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, utils ) {



// -------------------------- animate -------------------------- //

var proto = {};

proto.startAnimation = function() {
  if ( this.isAnimating ) {
    return;
  }

  this.isAnimating = true;
  this.restingFrames = 0;
  this.animate();
};

proto.animate = function() {
  this.applyDragForce();
  this.applySelectedAttraction();

  var previousX = this.x;

  this.integratePhysics();
  this.positionSlider();
  this.settle( previousX );
  // animate next frame
  if ( this.isAnimating ) {
    var _this = this;
    requestAnimationFrame( function animateFrame() {
      _this.animate();
    });
  }
};

proto.positionSlider = function() {
  var x = this.x;
  // wrap position around
  if ( this.options.wrapAround && this.cells.length > 1 ) {
    x = utils.modulo( x, this.slideableWidth );
    x = x - this.slideableWidth;
    this.shiftWrapCells( x );
  }

  x = x + this.cursorPosition;
  // reverse if right-to-left and using transform
  x = this.options.rightToLeft ? -x : x;
  var value = this.getPositionValue( x );
  // use 3D tranforms for hardware acceleration on iOS
  // but use 2D when settled, for better font-rendering
  this.slider.style.transform = this.isAnimating ?
    'translate3d(' + value + ',0,0)' : 'translateX(' + value + ')';

  // scroll event
  var firstSlide = this.slides[0];
  if ( firstSlide ) {
    var positionX = -this.x - firstSlide.target;
    var progress = positionX / this.slidesWidth;
    this.dispatchEvent( 'scroll', null, [ progress, positionX ] );
  }
};

proto.setTranslateX = function( x, is3d ) {
  x += this.cursorPosition;
  // reverse if right-to-left and using transform
  x = this.options.rightToLeft ? -x : x;
  var translateX = this.getPositionValue( x );
  // use 3D transforms for hardware acceleration on iOS
  // but use 2D when settled, for better font-rendering
  this.slider.style.transform = is3d ?
    'translate3d(' + translateX + ',0,0)' : 'translateX(' + translateX + ')';
};

proto.dispatchScrollEvent = function() {
  var firstSlide = this.slides[0];
  if ( !firstSlide ) {
    return;
  }
  var positionX = -this.x - firstSlide.target;
  var progress = positionX / this.slidesWidth;
  this.dispatchEvent( 'scroll', null, [ progress, positionX ] );
};


proto.positionSliderAtSelected = function() {
  if ( !this.cells.length ) {
    return;
  }
  this.x = -this.selectedSlide.target;
  this.velocity = 0; // stop wobble
  this.positionSlider();
};

proto.getPositionValue = function( position ) {
  if ( this.options.percentPosition ) {
    // percent position, round to 2 digits, like 12.34%
    return ( Math.round( ( position / this.size.innerWidth ) * 10000 ) * 0.01 )+ '%';
  } else {
    // pixel positioning
    return Math.round( position ) + 'px';
  }
};

proto.settle = function( previousX ) {
  // keep track of frames where x hasn't moved
  if ( !this.isPointerDown && Math.round( this.x * 100 ) == Math.round( previousX * 100 ) ) {
    this.restingFrames++;
  }
  // stop animating if resting for 3 or more frames
  if ( this.restingFrames > 2 ) {
    this.isAnimating = false;
    delete this.isFreeScrolling;
    // render position with translateX when settled
    this.positionSlider();
    this.dispatchEvent( 'settle', null, [ this.selectedIndex ] );
  }
};

proto.shiftWrapCells = function( x ) {
  // shift before cells
  var beforeGap = this.cursorPosition + x;
  this._shiftCells( this.beforeShiftCells, beforeGap, -1 );
  // shift after cells
  var afterGap = this.size.innerWidth - ( x + this.slideableWidth + this.cursorPosition );
  this._shiftCells( this.afterShiftCells, afterGap, 1 );
};

proto._shiftCells = function( cells, gap, shift ) {
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    var cellShift = gap > 0 ? shift : 0;
    cell.wrapShift( cellShift );
    gap -= cell.size.outerWidth;
  }
};

proto._unshiftCells = function( cells ) {
  if ( !cells || !cells.length ) {
    return;
  }
  for ( var i=0; i < cells.length; i++ ) {
    cells[i].wrapShift( 0 );
  }
};

// -------------------------- physics -------------------------- //

proto.integratePhysics = function() {
  this.x += this.velocity;
  this.velocity *= this.getFrictionFactor();
};

proto.applyForce = function( force ) {
  this.velocity += force;
};

proto.getFrictionFactor = function() {
  return 1 - this.options[ this.isFreeScrolling ? 'freeScrollFriction' : 'friction' ];
};

proto.getRestingPosition = function() {
  // my thanks to Steven Wittens, who simplified this math greatly
  return this.x + this.velocity / ( 1 - this.getFrictionFactor() );
};

proto.applyDragForce = function() {
  if ( !this.isDraggable || !this.isPointerDown ) {
    return;
  }
  // change the position to drag position by applying force
  var dragVelocity = this.dragX - this.x;
  var dragForce = dragVelocity - this.velocity;
  this.applyForce( dragForce );
};

proto.applySelectedAttraction = function() {
  // do not attract if pointer down or no slides
  var dragDown = this.isDraggable && this.isPointerDown;
  if ( dragDown || this.isFreeScrolling || !this.slides.length ) {
    return;
  }
  var distance = this.selectedSlide.target * -1 - this.x;
  var force = distance * this.options.selectedAttraction;
  this.applyForce( force );
};

return proto;

}));

// Flickity main
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/flickity',[
      'ev-emitter/ev-emitter',
      'get-size/get-size',
      'fizzy-ui-utils/utils',
      './cell',
      './slide',
      './animate'
    ], function( EvEmitter, getSize, utils, Cell, Slide, animatePrototype ) {
      return factory( window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./cell'),
      require('./slide'),
      require('./animate')
    );
  } else {
    // browser global
    var _Flickity = window.Flickity;

    window.Flickity = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      _Flickity.Cell,
      _Flickity.Slide,
      _Flickity.animatePrototype
    );
  }

}( window, function factory( window, EvEmitter, getSize,
  utils, Cell, Slide, animatePrototype ) {



// vars
var jQuery = window.jQuery;
var getComputedStyle = window.getComputedStyle;
var console = window.console;

function moveElements( elems, toElem ) {
  elems = utils.makeArray( elems );
  while ( elems.length ) {
    toElem.appendChild( elems.shift() );
  }
}

// -------------------------- Flickity -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Flickity intances
var instances = {};

function Flickity( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // do not initialize twice on same element
  if ( this.element.flickityGUID ) {
    var instance = instances[ this.element.flickityGUID ];
    instance.option( options );
    return instance;
  }

  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }
  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // kick things off
  this._create();
}

Flickity.defaults = {
  accessibility: true,
  // adaptiveHeight: false,
  cellAlign: 'center',
  // cellSelector: undefined,
  // contain: false,
  freeScrollFriction: 0.075, // friction when free-scrolling
  friction: 0.28, // friction when selecting
  namespaceJQueryEvents: true,
  // initialIndex: 0,
  percentPosition: true,
  resize: true,
  selectedAttraction: 0.025,
  setGallerySize: true
  // watchCSS: false,
  // wrapAround: false
};

// hash of methods triggered on _create()
Flickity.createMethods = [];

var proto = Flickity.prototype;
// inherit EventEmitter
utils.extend( proto, EvEmitter.prototype );

proto._create = function() {
  // add id for Flickity.data
  var id = this.guid = ++GUID;
  this.element.flickityGUID = id; // expando
  instances[ id ] = this; // associate via id
  // initial properties
  this.selectedIndex = 0;
  // how many frames slider has been in same position
  this.restingFrames = 0;
  // initial physics properties
  this.x = 0;
  this.velocity = 0;
  this.originSide = this.options.rightToLeft ? 'right' : 'left';
  // create viewport & slider
  /*nectar addition*/

  if(this.$element.hasClass('generate-markup')) {
    this.viewport = document.createElement('div');
    this.viewport.className = 'flickity-viewport';
  } else {
    this.viewport = this.$element.find('.flickity-viewport')[0];
    this.slider = this.$element.find('.flickity-slider')[0];
    this.viewport.className = 'flickity-viewport';
  }

  this._createSlider();


  /*nectar addition end*/

  if ( this.options.resize || this.options.watchCSS ) {
    window.addEventListener( 'resize', this );
  }

  // add listeners from on option
  for ( var eventName in this.options.on ) {
    var listener = this.options.on[ eventName ];
    this.on( eventName, listener );
  }

  Flickity.createMethods.forEach( function( method ) {
    this[ method ]();
  }, this );

  if ( this.options.watchCSS ) {
    this.watchCSS();
  } else {
    this.activate();
  }

};

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

proto.activate = function() {
  if ( this.isActive ) {
    return;
  }
  this.isActive = true;
  this.element.classList.add('flickity-enabled');
  if ( this.options.rightToLeft ) {
    this.element.classList.add('flickity-rtl');
  }

  this.getSize();
  // move initial cell elements so they can be loaded as cells
  var cellElems = this._filterFindCellElements( this.element.children );

  /* nectar addition */
  if(this.$element.hasClass('generate-markup')) {
    moveElements( cellElems, this.slider );
    this.viewport.appendChild( this.slider );
    this.element.appendChild( this.viewport );
  } else {
    //do nothing
  }
  /* nectar addition  end */

  // get cells from children
  this.reloadCells();

  if ( this.options.accessibility ) {
    // allow element to focusable
    this.element.tabIndex = 0;
    // listen for key presses
    this.element.addEventListener( 'keydown', this );
  }

  this.emitEvent('activate');

  var index;
  var initialIndex = this.options.initialIndex;
  if ( this.isInitActivated ) {
    index = this.selectedIndex;
  } else if ( initialIndex !== undefined ) {
    index = this.cells[ initialIndex ] ? initialIndex : 0;
  } else {
    index = 0;
  }
  // select instantly
  this.select( index, false, true );
  // flag for initial activation, for using initialIndex
  this.isInitActivated = true;
  // ready event. #493
  this.dispatchEvent('ready');
};

// slider positions the cells
/* nectar addition */
proto._createSlider = function() {
  if(this.$element.hasClass('generate-markup')) {
    var slider = document.createElement('div');
    slider.className = 'flickity-slider';
    slider.style[ this.originSide ] = 0;
    this.slider = slider;
  } else {
    // slider element does all the positioning
    //var slider = document.createElement('div');
    //slider.className = 'flickity-slider';
    this.slider.style[ this.originSide ] = 0;
    //this.slider = slider;
  }

};
/* nectar addition end */

proto._filterFindCellElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.cellSelector );
};

// goes through all children
proto.reloadCells = function() {
  /* nectar addition */

  if(jQuery(this.slider).parent().parent().find('.flickity-page-dots').length > 0) {
    var $that = this;
    setTimeout(function(){
      $that.pageDots.setDots();
    },100);
  }
  var slidesArr = [];
  jQuery(this.slider).find('> *').each(function(i){
    slidesArr[i] = jQuery(this)[0];
  });


  // collection of item elements
    this.cells = this._makeCells(slidesArr);
    /* nectar addition end */
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
};

/**
 * turn elements into Flickity.Cells
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Flickity Cells
 */
proto._makeCells = function( elems ) {
  var cellElems = this._filterFindCellElements( elems );

  // create new Flickity for collection
  var cells = cellElems.map( function( cellElem ) {
    return new Cell( cellElem, this );
  }, this );

  return cells;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.getLastSlide = function() {
  return this.slides[ this.slides.length - 1 ];
};

// positions all cells
proto.positionCells = function() {
  // size all cells
  this._sizeCells( this.cells );
  // position all cells
  this._positionCells( 0 );
};

/**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */
proto._positionCells = function( index ) {
  index = index || 0;
  // also measure maxCellHeight
  // start 0 if positioning all cells
  this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
  var cellX = 0;
  // get cellX
  if ( index > 0 ) {
    var startCell = this.cells[ index - 1 ];
    cellX = startCell.x + startCell.size.outerWidth;
  }
  var len = this.cells.length;
  for ( var i=index; i < len; i++ ) {
    var cell = this.cells[i];
    cell.setPosition( cellX );
    cellX += cell.size.outerWidth;
    this.maxCellHeight = Math.max( cell.size.outerHeight, this.maxCellHeight );
  }
  // keep track of cellX for wrap-around
  this.slideableWidth = cellX;
  // slides
  this.updateSlides();
  // contain slides target
  this._containSlides();
  // update slidesWidth
  this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
};

/**
 * cell.getSize() on multiple cells
 * @param {Array} cells
 */
proto._sizeCells = function( cells ) {
  cells.forEach( function( cell ) {
    cell.getSize();
  });
};

// --------------------------  -------------------------- //

proto.updateSlides = function() {
  this.slides = [];
  if ( !this.cells.length ) {
    return;
  }

  var slide = new Slide( this );
  this.slides.push( slide );
  var isOriginLeft = this.originSide == 'left';
  var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

  var canCellFit = this._getCanCellFit();

  this.cells.forEach( function( cell, i ) {
    // just add cell if first cell in slide
    if ( !slide.cells.length ) {
      slide.addCell( cell );
      return;
    }

    var slideWidth = ( slide.outerWidth - slide.firstMargin ) +
      ( cell.size.outerWidth - cell.size[ nextMargin ] );

    if ( canCellFit.call( this, i, slideWidth ) ) {
      slide.addCell( cell );
    } else {
      // doesn't fit, new slide
      slide.updateTarget();

      slide = new Slide( this );
      this.slides.push( slide );
      slide.addCell( cell );
    }
  }, this );
  // last slide
  slide.updateTarget();
  // update .selectedSlide
  this.updateSelectedSlide();
};

proto._getCanCellFit = function() {
  var groupCells = this.options.groupCells;
  if ( !groupCells ) {
    return function() {
      return false;
    };
  } else if ( typeof groupCells == 'number' ) {
    // group by number. 3 -> [0,1,2], [3,4,5], ...
    var number = parseInt( groupCells, 10 );
    return function( i ) {
      return ( i % number ) !== 0;
    };
  }
  // default, group by width of slide
  // parse '75%
  var percentMatch = typeof groupCells == 'string' &&
    groupCells.match(/^(\d+)%$/);
  var percent = percentMatch ? parseInt( percentMatch[1], 10 ) / 100 : 1;
  return function( i, slideWidth ) {
    return slideWidth <= ( this.size.innerWidth + 1 ) * percent;
  };
};

// alias _init for jQuery plugin .flickity()
proto._init =
proto.reposition = function() {
  this.positionCells();
  this.positionSliderAtSelected();
};

proto.getSize = function() {
  this.size = getSize( this.element );
  this.setCellAlign();
  this.cursorPosition = this.size.innerWidth * this.cellAlign;
};

var cellAlignShorthands = {
  // cell align, then based on origin side
  center: {
    left: 0.5,
    right: 0.5
  },
  left: {
    left: 0,
    right: 1
  },
  right: {
    right: 0,
    left: 1
  }
};

proto.setCellAlign = function() {
  var shorthand = cellAlignShorthands[ this.options.cellAlign ];
  this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
};

proto.setGallerySize = function() {
  if ( this.options.setGallerySize ) {
    var height = this.options.adaptiveHeight && this.selectedSlide ?
      this.selectedSlide.height : this.maxCellHeight;
    this.viewport.style.height = height + 'px';
  }
};

proto._getWrapShiftCells = function() {
  // only for wrap-around
  if ( !this.options.wrapAround ) {
    return;
  }
  // unshift previous cells
  this._unshiftCells( this.beforeShiftCells );
  this._unshiftCells( this.afterShiftCells );
  // get before cells
  // initial gap
  var gapX = this.cursorPosition;
  var cellIndex = this.cells.length - 1;
  this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
  // get after cells
  // ending gap between last cell and end of gallery viewport
  gapX = this.size.innerWidth - this.cursorPosition;
  // start cloning at first cell, working forwards
  this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
};

proto._getGapCells = function( gapX, cellIndex, increment ) {
  // keep adding cells until the cover the initial gap
  var cells = [];
  while ( gapX > 0 ) {
    var cell = this.cells[ cellIndex ];
    if ( !cell ) {
      break;
    }
    cells.push( cell );
    cellIndex += increment;
    gapX -= cell.size.outerWidth;
  }
  return cells;
};

// ----- contain ----- //

// contain cell targets so no excess sliding
proto._containSlides = function() {
  if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
    return;
  }
  var isRightToLeft = this.options.rightToLeft;
  var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
  var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
  var contentWidth = this.slideableWidth - this.getLastCell().size[ endMargin ];
  // content is less than gallery size
  var isContentSmaller = contentWidth < this.size.innerWidth;
  // bounds
  var beginBound = this.cursorPosition + this.cells[0].size[ beginMargin ];
  var endBound = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
  // contain each cell target
  this.slides.forEach( function( slide ) {
    if ( isContentSmaller ) {
      // all cells fit inside gallery
      slide.target = contentWidth * this.cellAlign;
    } else {
      // contain to bounds
      slide.target = Math.max( slide.target, beginBound );
      slide.target = Math.min( slide.target, endBound );
    }
  }, this );
};

// -----  ----- //

/**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery && this.$element ) {
    // default trigger with type if no event
    type += this.options.namespaceJQueryEvents ? '.flickity' : '';
    var $event = type;
    if ( event ) {
      // create jQuery event
      var jQEvent = new jQuery.Event( event );
      jQEvent.type = type;
      $event = jQEvent;
    }
    this.$element.trigger( $event, args );
  }
};

// -------------------------- select -------------------------- //

/**
 * @param {Integer} index - index of the slide
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 * @param {Boolean} isInstant - will immediately set position at selected cell
 */
proto.select = function( index, isWrap, isInstant ) {
  if ( !this.isActive ) {
    return;
  }
  index = parseInt( index, 10 );
  this._wrapSelect( index );

  if ( this.options.wrapAround || isWrap ) {
    index = utils.modulo( index, this.slides.length );
  }
  // bail if invalid index
  if ( !this.slides[ index ] ) {
    return;
  }
  var prevIndex = this.selectedIndex;
  this.selectedIndex = index;
  this.updateSelectedSlide();
  if ( isInstant ) {
    this.positionSliderAtSelected();
  } else {
    this.startAnimation();
  }
  if ( this.options.adaptiveHeight ) {
    this.setGallerySize();
  }
  // events
  this.dispatchEvent( 'select', null, [ index ] );
  // change event if new index
  if ( index != prevIndex ) {
    this.dispatchEvent( 'change', null, [ index ] );
  }
  // old v1 event name, remove in v3
  this.dispatchEvent('cellSelect');
};

// wraps position for wrapAround, to move to closest slide. #113
proto._wrapSelect = function( index ) {
  var len = this.slides.length;
  var isWrapping = this.options.wrapAround && len > 1;
  if ( !isWrapping ) {
    return index;
  }
  var wrapIndex = utils.modulo( index, len );
  // go to shortest
  var delta = Math.abs( wrapIndex - this.selectedIndex );
  var backWrapDelta = Math.abs( ( wrapIndex + len ) - this.selectedIndex );
  var forewardWrapDelta = Math.abs( ( wrapIndex - len ) - this.selectedIndex );
  if ( !this.isDragSelect && backWrapDelta < delta ) {
    index += len;
  } else if ( !this.isDragSelect && forewardWrapDelta < delta ) {
    index -= len;
  }
  // wrap position so slider is within normal area
  if ( index < 0 ) {
    this.x -= this.slideableWidth;
  } else if ( index >= len ) {
    this.x += this.slideableWidth;
  }
};

proto.previous = function( isWrap, isInstant ) {
  this.select( this.selectedIndex - 1, isWrap, isInstant );
};

proto.next = function( isWrap, isInstant ) {
  this.select( this.selectedIndex + 1, isWrap, isInstant );
};

proto.updateSelectedSlide = function() {
  var slide = this.slides[ this.selectedIndex ];
  // selectedIndex could be outside of slides, if triggered before resize()
  if ( !slide ) {
    return;
  }
  // unselect previous selected slide
  this.unselectSelectedSlide();
  // update new selected slide
  this.selectedSlide = slide;
  slide.select();
  this.selectedCells = slide.cells;
  this.selectedElements = slide.getCellElements();
  // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
  // Remove in v3?
  this.selectedCell = slide.cells[0];
  this.selectedElement = this.selectedElements[0];
};

proto.unselectSelectedSlide = function() {
  if ( this.selectedSlide ) {
    this.selectedSlide.unselect();
  }
};

/**
 * select slide from number or cell element
 * @param {Element or Number} elem
 */
proto.selectCell = function( value, isWrap, isInstant ) {
  // get cell
  var cell = this.queryCell( value );
  if ( !cell ) {
    return;
  }

  var index = this.getCellSlideIndex( cell );
  this.select( index, isWrap, isInstant );
};

proto.getCellSlideIndex = function( cell ) {
  // get index of slides that has cell
  for ( var i=0; i < this.slides.length; i++ ) {
    var slide = this.slides[i];
    var index = slide.cells.indexOf( cell );
    if ( index != -1 ) {
      return i;
    }
  }
};

// -------------------------- get cells -------------------------- //

/**
 * get Flickity.Cell, given an Element
 * @param {Element} elem
 * @returns {Flickity.Cell} item
 */
proto.getCell = function( elem ) {
  // loop through cells to get the one that matches
  for ( var i=0; i < this.cells.length; i++ ) {
    var cell = this.cells[i];
    if ( cell.element == elem ) {
      return cell;
    }
  }
};

/**
 * get collection of Flickity.Cells, given Elements
 * @param {Element, Array, NodeList} elems
 * @returns {Array} cells - Flickity.Cells
 */
proto.getCells = function( elems ) {
  elems = utils.makeArray( elems );
  var cells = [];
  elems.forEach( function( elem ) {
    var cell = this.getCell( elem );
    if ( cell ) {
      cells.push( cell );
    }
  }, this );
  return cells;
};

/**
 * get cell elements
 * @returns {Array} cellElems
 */
proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  });
};

/**
 * get parent cell from an element
 * @param {Element} elem
 * @returns {Flickit.Cell} cell
 */
proto.getParentCell = function( elem ) {
  // first check if elem is cell
  var cell = this.getCell( elem );
  if ( cell ) {
    return cell;
  }
  // try to get parent cell elem
  elem = utils.getParent( elem, '.flickity-slider > *' );
  return this.getCell( elem );
};

/**
 * get cells adjacent to a slide
 * @param {Integer} adjCount - number of adjacent slides
 * @param {Integer} index - index of slide to start
 * @returns {Array} cells - array of Flickity.Cells
 */
proto.getAdjacentCellElements = function( adjCount, index ) {
  if ( !adjCount ) {
    return this.selectedSlide.getCellElements();
  }
  index = index === undefined ? this.selectedIndex : index;

  var len = this.slides.length;
  if ( 1 + ( adjCount * 2 ) >= len ) {
    return this.getCellElements();
  }

  var cellElems = [];
  for ( var i = index - adjCount; i <= index + adjCount ; i++ ) {
    var slideIndex = this.options.wrapAround ? utils.modulo( i, len ) : i;
    var slide = this.slides[ slideIndex ];
    if ( slide ) {
      cellElems = cellElems.concat( slide.getCellElements() );
    }
  }
  return cellElems;
};

/**
 * select slide from number or cell element
 * @param {Element, Selector String, or Number} selector
 */
proto.queryCell = function( selector ) {
  if ( typeof selector == 'number' ) {
    // use number as index
    return this.cells[ selector ];
  }
  if ( typeof selector == 'string' ) {
    // use string as selector, get element
    selector = this.element.querySelector( selector );
  }
  // get cell from element
  return this.getCell( selector );
};

// -------------------------- events -------------------------- //

proto.uiChange = function() {
  this.emitEvent('uiChange');
};

proto.childUIPointerDown = function( event ) {
  this.emitEvent( 'childUIPointerDown', [ event ] );
};

// ----- resize ----- //

proto.onresize = function() {
  this.watchCSS();
  this.resize();
};

utils.debounceMethod( Flickity, 'onresize', 150 );

proto.resize = function() {
  if ( !this.isActive ) {
    return;
  }
  this.getSize();
  // wrap values
  if ( this.options.wrapAround ) {
    this.x = utils.modulo( this.x, this.slideableWidth );
  }
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
  this.emitEvent('resize');
  // update selected index for group slides, instant
  // TODO: position can be lost between groups of various numbers
  var selectedElement = this.selectedElements && this.selectedElements[0];
  this.selectCell( selectedElement, false, true );
};

// watches the :after property, activates/deactivates
proto.watchCSS = function() {
  var watchOption = this.options.watchCSS;
  if ( !watchOption ) {
    return;
  }

  var afterContent = getComputedStyle( this.element, ':after' ).content;
  // activate if :after { content: 'flickity' }
  if ( afterContent.indexOf('flickity') != -1 ) {
    this.activate();
  } else {
    this.deactivate();
  }
};

// ----- keydown ----- //

// go previous/next if left/right keys pressed
proto.onkeydown = function( event ) {
  // only work if element is in focus
  var isNotFocused = document.activeElement && document.activeElement != this.element;
  if ( !this.options.accessibility ||isNotFocused ) {
    return;
  }

  var handler = Flickity.keyboardHandlers[ event.keyCode ];
  if ( handler ) {
    handler.call( this );
  }
};

Flickity.keyboardHandlers = {
  // left arrow
  37: function() {
    var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
    this.uiChange();
    this[ leftMethod ]();
  },
  // right arrow
  39: function() {
    var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
    this.uiChange();
    this[ rightMethod ]();
  },
};

// ----- focus ----- //

proto.focus = function() {
  // TODO remove scrollTo once focus options gets more support
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Browser_compatibility
  var prevScrollY = window.pageYOffset;
  this.element.focus({ preventScroll: true });
  // hack to fix scroll jump after focus, #76
  if ( window.pageYOffset != prevScrollY && prevScrollY > 10 ) { // nectar addition - iframe fix
    window.scrollTo( window.pageXOffset, prevScrollY );
  }
};

// -------------------------- destroy -------------------------- //

// deactivate all Flickity functionality, but keep stuff available
proto.deactivate = function() {
  if ( !this.isActive ) {
    return;
  }
  this.element.classList.remove('flickity-enabled');
  this.element.classList.remove('flickity-rtl');
  this.unselectSelectedSlide();
  // destroy cells
  this.cells.forEach( function( cell ) {
    cell.destroy();
  });
  this.element.removeChild( this.viewport );
  // move child elements back into element
  moveElements( this.slider.children, this.element );
  if ( this.options.accessibility ) {
    this.element.removeAttribute('tabIndex');
    this.element.removeEventListener( 'keydown', this );
  }
  // set flags
  this.isActive = false;
  this.emitEvent('deactivate');
};

proto.destroy = function() {
  this.deactivate();
  window.removeEventListener( 'resize', this );
  this.emitEvent('destroy');
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'flickity' );
  }
  delete this.element.flickityGUID;
  delete instances[ this.guid ];
};

// -------------------------- prototype -------------------------- //

utils.extend( proto, animatePrototype );

// -------------------------- extras -------------------------- //

/**
 * get Flickity instance from element
 * @param {Element} elem
 * @returns {Flickity}
 */
Flickity.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.flickityGUID;
  return id && instances[ id ];
};

utils.htmlInit( Flickity, 'flickity' );

if ( jQuery && jQuery.bridget ) {
  jQuery.bridget( 'flickity', Flickity );
}

// set internal jQuery, for Webpack + jQuery v3, #478
Flickity.setJQuery = function( jq ) {
  jQuery = jq;
};

Flickity.Cell = Cell;
Flickity.Slide = Slide;

return Flickity;

}));

/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*global define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'unipointer/unipointer',[
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.Unipointer = factory(
      window,
      window.EvEmitter
    );
  }

}( window, function factory( window, EvEmitter ) {



function noop() {}

function Unipointer() {}

// inherit EvEmitter
var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );

proto.bindStartEvent = function( elem ) {
  this._bindStartEvent( elem, true );
};

proto.unbindStartEvent = function( elem ) {
  this._bindStartEvent( elem, false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd - remove if falsey
 */
proto._bindStartEvent = function( elem, isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';

  // default to mouse events
  var startEvent = 'mousedown';
  if ( window.PointerEvent ) {
    // Pointer Events
    startEvent = 'pointerdown';
  } else if ( 'ontouchstart' in window ) {
    // Touch Events. iOS Safari
    startEvent = 'touchstart';
  }
  elem[ bindMethod ]( startEvent, this );
};

// trigger handler methods for events
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// returns the touch that we're keeping track of
proto.getTouch = function( touches ) {
  for ( var i=0; i < touches.length; i++ ) {
    var touch = touches[i];
    if ( touch.identifier == this.pointerIdentifier ) {
      return touch;
    }
  }
};

// ----- start event ----- //

proto.onmousedown = function( event ) {
  // dismiss clicks from right or middle buttons
  var button = event.button;
  if ( button && ( button !== 0 && button !== 1 ) ) {
    return;
  }
  this._pointerDown( event, event );
};

proto.ontouchstart = function( event ) {
  this._pointerDown( event, event.changedTouches[0] );
};

proto.onpointerdown = function( event ) {
  this._pointerDown( event, event );
};

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto._pointerDown = function( event, pointer ) {
  // dismiss right click and other pointers
  // button = 0 is okay, 1-4 not
  if ( event.button || this.isPointerDown ) {
    return;
  }

  this.isPointerDown = true;
  // save pointer identifier to match up touch events
  this.pointerIdentifier = pointer.pointerId !== undefined ?
    // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;

  this.pointerDown( event, pointer );
};

proto.pointerDown = function( event, pointer ) {
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// hash of events to be bound after start event
var postStartEvents = {
  mousedown: [ 'mousemove', 'mouseup' ],
  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
};

proto._bindPostStartEvents = function( event ) {
  if ( !event ) {
    return;
  }
  // get proper events to match start event
  var events = postStartEvents[ event.type ];
  // bind events to node
  events.forEach( function( eventName ) {
    window.addEventListener( eventName, this );
  }, this );
  // save these arguments
  this._boundPointerEvents = events;
};

proto._unbindPostStartEvents = function() {
  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
  if ( !this._boundPointerEvents ) {
    return;
  }
  this._boundPointerEvents.forEach( function( eventName ) {
    window.removeEventListener( eventName, this );
  }, this );

  delete this._boundPointerEvents;
};

// ----- move event ----- //

proto.onmousemove = function( event ) {
  this._pointerMove( event, event );
};

proto.onpointermove = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerMove( event, event );
  }
};

proto.ontouchmove = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerMove( event, touch );
  }
};

/**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerMove = function( event, pointer ) {
  this.pointerMove( event, pointer );
};

// public
proto.pointerMove = function( event, pointer ) {
  this.emitEvent( 'pointerMove', [ event, pointer ] );
};

// ----- end event ----- //


proto.onmouseup = function( event ) {
  this._pointerUp( event, event );
};

proto.onpointerup = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerUp( event, event );
  }
};

proto.ontouchend = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerUp( event, touch );
  }
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerUp = function( event, pointer ) {
  this._pointerDone();
  this.pointerUp( event, pointer );
};

// public
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
};

// ----- pointer done ----- //

// triggered on pointer up & pointer cancel
proto._pointerDone = function() {
  this._pointerReset();
  this._unbindPostStartEvents();
  this.pointerDone();
};

proto._pointerReset = function() {
  // reset properties
  this.isPointerDown = false;
  delete this.pointerIdentifier;
};

proto.pointerDone = noop;

// ----- pointer cancel ----- //

proto.onpointercancel = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerCancel( event, event );
  }
};

proto.ontouchcancel = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerCancel( event, touch );
  }
};

/**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerCancel = function( event, pointer ) {
  this._pointerDone();
  this.pointerCancel( event, pointer );
};

// public
proto.pointerCancel = function( event, pointer ) {
  this.emitEvent( 'pointerCancel', [ event, pointer ] );
};

// -----  ----- //

// utility function for getting x/y coords from event
Unipointer.getPointerPoint = function( pointer ) {
  return {
    x: pointer.pageX,
    y: pointer.pageY
  };
};

// -----  ----- //

return Unipointer;

}));

/*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'unidragger/unidragger',[
      'unipointer/unipointer'
    ], function( Unipointer ) {
      return factory( window, Unipointer );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('unipointer')
    );
  } else {
    // browser global
    window.Unidragger = factory(
      window,
      window.Unipointer
    );
  }

}( window, function factory( window, Unipointer ) {



// -------------------------- Unidragger -------------------------- //

function Unidragger() {}

// inherit Unipointer & EvEmitter
var proto = Unidragger.prototype = Object.create( Unipointer.prototype );

// ----- bind start ----- //

proto.bindHandles = function() {
  this._bindHandles( true );
};

proto.unbindHandles = function() {
  this._bindHandles( false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd
 */
proto._bindHandles = function( isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  // bind each handle
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
  var touchAction = isAdd ? this._touchActionValue : '';
  for ( var i=0; i < this.handles.length; i++ ) {
    var handle = this.handles[i];
    this._bindStartEvent( handle, isAdd );
    handle[ bindMethod ]( 'click', this );
    // touch-action: none to override browser touch gestures. metafizzy/flickity#540
    if ( window.PointerEvent ) {
      handle.style.touchAction = touchAction;
    }
  }
};

// prototype so it can be overwriteable by Flickity
proto._touchActionValue = 'none';

// ----- start event ----- //

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerDown = function( event, pointer ) {
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }
  // track start event position
  // Safari 9 overrides pageX and pageY. These values needs to be copied. flickity#842
  this.pointerDownPointer = {
    pageX: pointer.pageX,
    pageY: pointer.pageY,
  };

  event.preventDefault();
  this.pointerDownBlur();
  // bind move and end events
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// nodes that have text fields
var cursorNodes = {
  TEXTAREA: true,
  INPUT: true,
  SELECT: true,
  OPTION: true,
};

// input types that do not have text fields
var clickTypes = {
  radio: true,
  checkbox: true,
  button: true,
  submit: true,
  image: true,
  file: true,
};

// dismiss inputs with text fields. flickity#403, flickity#404
proto.okayPointerDown = function( event ) {
  var isCursorNode = cursorNodes[ event.target.nodeName ];
  var isClickType = clickTypes[ event.target.type ];
  var isOkay = !isCursorNode || isClickType;
  if ( !isOkay ) {
    this._pointerReset();
  }
  return isOkay;
};

// kludge to blur previously focused input
proto.pointerDownBlur = function() {
  var focused = document.activeElement;
  // do not blur body for IE10, metafizzy/flickity#117
  var canBlur = focused && focused.blur && focused != document.body;
  if ( canBlur ) {
    focused.blur();
  }
};

// ----- move event ----- //

/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

// base pointer move logic
proto._dragPointerMove = function( event, pointer ) {
  var moveVector = {
    x: pointer.pageX - this.pointerDownPointer.pageX,
    y: pointer.pageY - this.pointerDownPointer.pageY
  };
  // start drag if pointer has moved far enough to start drag
  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
    this._dragStart( event, pointer );
  }
  return moveVector;
};

// condition if pointer has moved far enough to start drag
proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
};

// ----- end event ----- //

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
  this._dragPointerUp( event, pointer );
};

proto._dragPointerUp = function( event, pointer ) {
  if ( this.isDragging ) {
    this._dragEnd( event, pointer );
  } else {
    // pointer didn't move enough for drag to start
    this._staticClick( event, pointer );
  }
};

// -------------------------- drag -------------------------- //

// dragStart
proto._dragStart = function( event, pointer ) {
  this.isDragging = true;
  // prevent clicks
  this.isPreventingClicks = true;
  this.dragStart( event, pointer );
};

proto.dragStart = function( event, pointer ) {
  this.emitEvent( 'dragStart', [ event, pointer ] );
};

// dragMove
proto._dragMove = function( event, pointer, moveVector ) {
  // do not drag if not dragging yet
  if ( !this.isDragging ) {
    return;
  }

  this.dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  event.preventDefault();
  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
};

// dragEnd
proto._dragEnd = function( event, pointer ) {
  // set flags
  this.isDragging = false;
  // re-enable clicking async
  setTimeout( function() {
    delete this.isPreventingClicks;
  }.bind( this ) );

  this.dragEnd( event, pointer );
};

proto.dragEnd = function( event, pointer ) {
  this.emitEvent( 'dragEnd', [ event, pointer ] );
};

// ----- onclick ----- //

// handle all clicks and prevent clicks when dragging
proto.onclick = function( event ) {
  if ( this.isPreventingClicks ) {
    event.preventDefault();
  }
};

// ----- staticClick ----- //

// triggered after pointer down & up with no/tiny movement
proto._staticClick = function( event, pointer ) {
  // ignore emulated mouse up clicks
  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
    return;
  }

  this.staticClick( event, pointer );

  // set flag for emulated clicks 300ms after touchend
  if ( event.type != 'mouseup' ) {
    this.isIgnoringMouseUp = true;
    // reset flag after 300ms
    setTimeout( function() {
      delete this.isIgnoringMouseUp;
    }.bind( this ), 400 );
  }
};

proto.staticClick = function( event, pointer ) {
  this.emitEvent( 'staticClick', [ event, pointer ] );
};

// ----- utils ----- //

Unidragger.getPointerPoint = Unipointer.getPointerPoint;

// -----  ----- //

return Unidragger;

}));

// drag
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/drag',[
      './flickity',
      'unidragger/unidragger',
      'fizzy-ui-utils/utils'
    ], function( Flickity, Unidragger, utils ) {
      return factory( window, Flickity, Unidragger, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('unidragger'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.Unidragger,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, Unidragger, utils ) {



// ----- defaults ----- //

utils.extend( Flickity.defaults, {
  draggable: '>1',
  dragThreshold: 3,
});

// ----- create ----- //

Flickity.createMethods.push('_createDrag');

// -------------------------- drag prototype -------------------------- //

var proto = Flickity.prototype;
utils.extend( proto, Unidragger.prototype );
proto._touchActionValue = 'pan-y';

// --------------------------  -------------------------- //

var isTouch = 'createTouch' in document;
var isTouchmoveScrollCanceled = false;

proto._createDrag = function() {
  this.on( 'activate', this.onActivateDrag );
  this.on( 'uiChange', this._uiChangeDrag );
  this.on( 'childUIPointerDown', this._childUIPointerDownDrag );
  this.on( 'deactivate', this.onDeactivateDrag );
  this.on( 'cellChange', this.updateDraggable );
  // TODO updateDraggable on resize? if groupCells & slides change
  // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
  // #457, RubaXa/Sortable#973
  if ( isTouch && !isTouchmoveScrollCanceled ) {
    window.addEventListener( 'touchmove', function() {});
    isTouchmoveScrollCanceled = true;
  }
};

proto.onActivateDrag = function() {
  this.handles = [ this.viewport ];
  this.bindHandles();
  this.updateDraggable();
};

proto.onDeactivateDrag = function() {
  this.unbindHandles();
  this.element.classList.remove('is-draggable');
};

proto.updateDraggable = function() {
  // disable dragging if less than 2 slides. #278
  if ( this.options.draggable == '>1' ) {
    this.isDraggable = this.slides.length > 1;
  } else {
    this.isDraggable = this.options.draggable;
  }
  if ( this.isDraggable ) {
    this.element.classList.add('is-draggable');
  } else {
    this.element.classList.remove('is-draggable');
  }
};

// backwards compatibility
proto.bindDrag = function() {
  this.options.draggable = true;
  this.updateDraggable();
};

proto.unbindDrag = function() {
  this.options.draggable = false;
  this.updateDraggable();
};

proto._uiChangeDrag = function() {
  delete this.isFreeScrolling;
};

proto._childUIPointerDownDrag = function( event ) {
  // allow focus & preventDefault even when not draggable
  // so child UI elements keep focus on carousel. #721
  event.preventDefault();
  this.pointerDownFocus( event );
};

// -------------------------- pointer events -------------------------- //

proto.pointerDown = function( event, pointer ) {
  if ( !this.isDraggable ) {
    this._pointerDownDefault( event, pointer );
    return;
  }
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }

  this._pointerDownPreventDefault( event );
  this.pointerDownFocus( event );
  // blur
  if ( document.activeElement != this.element ) {
    // do not blur if already focused
    this.pointerDownBlur();
  }

  // stop if it was moving
  this.dragX = this.x;
  this.viewport.classList.add('is-pointer-down');
  // track scrolling
  this.pointerDownScroll = getScrollPosition();
  window.addEventListener( 'scroll', this );

  this._pointerDownDefault( event, pointer );
};

// default pointerDown logic, used for staticClick
proto._pointerDownDefault = function( event, pointer ) {
  // track start event position
  // Safari 9 overrides pageX and pageY. These values needs to be copied. #779
  this.pointerDownPointer = {
    pageX: pointer.pageX,
    pageY: pointer.pageY,
  };
  // bind move and end events
  this._bindPostStartEvents( event );
  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
};

var focusNodes = {
  INPUT: true,
  TEXTAREA: true,
  SELECT: true,
};

proto.pointerDownFocus = function( event ) {
  var isFocusNode = focusNodes[ event.target.nodeName ];
  if ( !isFocusNode ) {
    this.focus();
  }
};

proto._pointerDownPreventDefault = function( event ) {
  var isTouchStart = event.type == 'touchstart';
  var isTouchPointer = event.pointerType == 'touch';
  var isFocusNode = focusNodes[ event.target.nodeName ];
  if ( !isTouchStart && !isTouchPointer && !isFocusNode ) {
    event.preventDefault();
  }
};

// ----- move ----- //

proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > this.options.dragThreshold;
};

// ----- up ----- //

proto.pointerUp = function( event, pointer ) {
  delete this.isTouchScrolling;
  this.viewport.classList.remove('is-pointer-down');
  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
  this._dragPointerUp( event, pointer );
};

proto.pointerDone = function() {
  window.removeEventListener( 'scroll', this );
  delete this.pointerDownScroll;
};

// -------------------------- dragging -------------------------- //

proto.dragStart = function( event, pointer ) {
  if ( !this.isDraggable ) {
    return;
  }
  this.dragStartPosition = this.x;
  this.startAnimation();
  window.removeEventListener( 'scroll', this );
  this.dispatchEvent( 'dragStart', event, [ pointer ] );
};

proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  if ( !this.isDraggable ) {
    return;
  }
  event.preventDefault();

  // reverse if right-to-left
  var direction = this.options.rightToLeft ? -1 : 1;
  if ( this.options.wrapAround ) {
    // wrap around move. #589
    moveVector.x = moveVector.x % this.slideableWidth;
  }
  var dragX = this.dragStartPosition + moveVector.x * direction;

  if ( !this.options.wrapAround && this.slides.length ) {
    // slow drag
    var originBound = Math.max( -this.slides[0].target, this.dragStartPosition );
    dragX = dragX > originBound ? ( dragX + originBound ) * 0.5 : dragX;
    var endBound = Math.min( -this.getLastSlide().target, this.dragStartPosition );
    dragX = dragX < endBound ? ( dragX + endBound ) * 0.5 : dragX;
  }

  // nectar addition ios13 bugfix
  if ( this.dragX !== dragX ) {
    this.previousDragX = this.dragX;
  }

  this.dragX = dragX;

  this.dragMoveTime = new Date();
  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
};

proto.dragEnd = function( event, pointer ) {
  if ( !this.isDraggable ) {
    return;
  }
  if ( this.options.freeScroll ) {
    this.isFreeScrolling = true;
  }
  // set selectedIndex based on where flick will end up
  var index = this.dragEndRestingSelect();

  if ( this.options.freeScroll && !this.options.wrapAround ) {
    // if free-scroll & not wrap around
    // do not free-scroll if going outside of bounding slides
    // so bounding slides can attract slider, and keep it in bounds
    var restingX = this.getRestingPosition();
    this.isFreeScrolling = -restingX > this.slides[0].target &&
      -restingX < this.getLastSlide().target;
  } else if ( !this.options.freeScroll && index == this.selectedIndex ) {
    // boost selection if selected index has not changed
    index += this.dragEndBoostSelect();
  }
  delete this.previousDragX;
  // apply selection
  // TODO refactor this, selecting here feels weird
  // HACK, set flag so dragging stays in correct direction
  this.isDragSelect = this.options.wrapAround;
  this.select( index );
  delete this.isDragSelect;
  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
};

proto.dragEndRestingSelect = function() {
  var restingX = this.getRestingPosition();
  // how far away from selected slide
  var distance = Math.abs( this.getSlideDistance( -restingX, this.selectedIndex ) );
  // get closet resting going up and going down
  var positiveResting = this._getClosestResting( restingX, distance, 1 );
  var negativeResting = this._getClosestResting( restingX, distance, -1 );
  // use closer resting for wrap-around
  var index = positiveResting.distance < negativeResting.distance ?
    positiveResting.index : negativeResting.index;
  return index;
};

/**
 * given resting X and distance to selected cell
 * get the distance and index of the closest cell
 * @param {Number} restingX - estimated post-flick resting position
 * @param {Number} distance - distance to selected cell
 * @param {Integer} increment - +1 or -1, going up or down
 * @returns {Object} - { distance: {Number}, index: {Integer} }
 */
proto._getClosestResting = function( restingX, distance, increment ) {
  var index = this.selectedIndex;
  var minDistance = Infinity;
  var condition = this.options.contain && !this.options.wrapAround ?
    // if contain, keep going if distance is equal to minDistance
    function( d, md ) { return d <= md; } : function( d, md ) { return d < md; };
  while ( condition( distance, minDistance ) ) {
    // measure distance to next cell
    index += increment;
    minDistance = distance;
    distance = this.getSlideDistance( -restingX, index );
    if ( distance === null ) {
      break;
    }
    distance = Math.abs( distance );
  }
  return {
    distance: minDistance,
    // selected was previous index
    index: index - increment
  };
};

/**
 * measure distance between x and a slide target
 * @param {Number} x
 * @param {Integer} index - slide index
 */
proto.getSlideDistance = function( x, index ) {
  var len = this.slides.length;
  // wrap around if at least 2 slides
  var isWrapAround = this.options.wrapAround && len > 1;
  var slideIndex = isWrapAround ? utils.modulo( index, len ) : index;
  var slide = this.slides[ slideIndex ];
  if ( !slide ) {
    return null;
  }
  // add distance for wrap-around slides
  var wrap = isWrapAround ? this.slideableWidth * Math.floor( index / len ) : 0;
  return x - ( slide.target + wrap );
};

proto.dragEndBoostSelect = function() {
  // do not boost if no previousDragX or dragMoveTime
  if ( this.previousDragX === undefined || !this.dragMoveTime ||
    // or if drag was held for 100 ms
    new Date() - this.dragMoveTime > 100 ) {
    return 0;
  }

  var distance = this.getSlideDistance( -this.dragX, this.selectedIndex );
  var delta = this.previousDragX - this.dragX;
  if ( distance > 0 && delta > 0 ) {
    // boost to next if moving towards the right, and positive velocity
    return 1;
  } else if ( distance < 0 && delta < 0 ) {
    // boost to previous if moving towards the left, and negative velocity
    return -1;
  }
  return 0;
};

// ----- staticClick ----- //

proto.staticClick = function( event, pointer ) {
  // get clickedCell, if cell was clicked
  var clickedCell = this.getParentCell( event.target );
  var cellElem = clickedCell && clickedCell.element;
  var cellIndex = clickedCell && this.cells.indexOf( clickedCell );
  this.dispatchEvent( 'staticClick', event, [ pointer, cellElem, cellIndex ] );
};

// ----- scroll ----- //

proto.onscroll = function() {
  var scroll = getScrollPosition();
  var scrollMoveX = this.pointerDownScroll.x - scroll.x;
  var scrollMoveY = this.pointerDownScroll.y - scroll.y;
  // cancel click/tap if scroll is too much
  if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
    this._pointerDone();
  }
};

// ----- utils ----- //

function getScrollPosition() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}

// -----  ----- //

return Flickity;

}));

/*!
 * Tap listener v2.0.0
 * listens to taps
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false*/ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'tap-listener/tap-listener',[
      'unipointer/unipointer'
    ], function( Unipointer ) {
      return factory( window, Unipointer );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('unipointer')
    );
  } else {
    // browser global
    window.TapListener = factory(
      window,
      window.Unipointer
    );
  }

}( window, function factory( window, Unipointer ) {



// --------------------------  TapListener -------------------------- //

function TapListener( elem ) {
  this.bindTap( elem );
}

// inherit Unipointer & EventEmitter
var proto = TapListener.prototype = Object.create( Unipointer.prototype );

/**
 * bind tap event to element
 * @param {Element} elem
 */
proto.bindTap = function( elem ) {
  if ( !elem ) {
    return;
  }
  this.unbindTap();
  this.tapElement = elem;
  this._bindStartEvent( elem, true );
};

proto.unbindTap = function() {
  if ( !this.tapElement ) {
    return;
  }
  this._bindStartEvent( this.tapElement, true );
  delete this.tapElement;
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = function( event, pointer ) {
  // ignore emulated mouse up clicks
  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
    return;
  }

  var pointerPoint = Unipointer.getPointerPoint( pointer );
  var boundingRect = this.tapElement.getBoundingClientRect();
  var scrollX = window.pageXOffset;
  var scrollY = window.pageYOffset;
  // calculate if pointer is inside tapElement
  var isInside = pointerPoint.x >= boundingRect.left + scrollX &&
    pointerPoint.x <= boundingRect.right + scrollX &&
    pointerPoint.y >= boundingRect.top + scrollY &&
    pointerPoint.y <= boundingRect.bottom + scrollY;
  // trigger callback if pointer is inside element
  if ( isInside ) {
    this.emitEvent( 'tap', [ event, pointer ] );
  }

  // set flag for emulated clicks 300ms after touchend
  if ( event.type != 'mouseup' ) {
    this.isIgnoringMouseUp = true;
    // reset flag after 300ms
    var _this = this;
    setTimeout( function() {
      delete _this.isIgnoringMouseUp;
    }, 400 );
  }
};

proto.destroy = function() {
  this.pointerDone();
  this.unbindTap();
};

// -----  ----- //

return TapListener;

}));

// prev/next buttons
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/prev-next-button',[
      './flickity',
      'tap-listener/tap-listener',
      'fizzy-ui-utils/utils'
    ], function( Flickity, TapListener, utils ) {
      return factory( window, Flickity, TapListener, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('tap-listener'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.TapListener,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, TapListener, utils ) {
'use strict';

var svgURI = 'http://www.w3.org/2000/svg';

// -------------------------- PrevNextButton -------------------------- //

function PrevNextButton( direction, parent ) {
  this.direction = direction;
  this.parent = parent;
  this._create();
}

PrevNextButton.prototype = Object.create( TapListener.prototype );

PrevNextButton.prototype._create = function() {
  // properties
  this.isEnabled = true;
  this.isPrevious = this.direction == -1;
  var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
  this.isLeft = this.direction == leftDirection;

  var element = this.element = document.createElement('button');
  element.className = 'flickity-button flickity-prev-next-button';
  element.className += this.isPrevious ? ' previous' : ' next';
  // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
  element.setAttribute( 'type', 'button' );
  // init as disabled
  this.disable();

  element.setAttribute( 'aria-label', this.isPrevious ? 'Previous' : 'Next' );

  // create arrow
  var svg = this.createSVG();
  element.appendChild( svg );
  // events
  this.on( 'tap', this.onTap );
  this.parent.on( 'select', this.update.bind( this ) );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PrevNextButton.prototype.activate = function() {
  this.bindTap( this.element );
  // click events from keyboard
  this.element.addEventListener( 'click', this );
  // add to DOM
  this.parent.element.appendChild( this.element );
};

PrevNextButton.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.element );
  // do regular TapListener destroy
  TapListener.prototype.destroy.call( this );
  // click events from keyboard
  this.element.removeEventListener( 'click', this );
};

PrevNextButton.prototype.createSVG = function() {
  var svg = document.createElementNS( svgURI, 'svg');
  svg.setAttribute( 'class', 'flickity-button-icon' );
  svg.setAttribute( 'viewBox', '0 0 100 100' );
  var path = document.createElementNS( svgURI, 'path');
  var pathMovements = getArrowMovements( this.parent.options.arrowShape );
  path.setAttribute( 'd', pathMovements );
  path.setAttribute( 'class', 'arrow' );
  // rotate arrow
  if ( !this.isLeft ) {
    path.setAttribute( 'transform', 'translate(100, 100) rotate(180) ' );
  }
  svg.appendChild( path );
  return svg;
};

// get SVG path movmement
function getArrowMovements( shape ) {
  // use shape as movement if string
  if ( typeof shape == 'string' ) {
    return shape;
  }
  // create movement string
  return 'M ' + shape.x0 + ',50' +
    ' L ' + shape.x1 + ',' + ( shape.y1 + 50 ) +
    ' L ' + shape.x2 + ',' + ( shape.y2 + 50 ) +
    ' L ' + shape.x3 + ',50 ' +
    ' L ' + shape.x2 + ',' + ( 50 - shape.y2 ) +
    ' L ' + shape.x1 + ',' + ( 50 - shape.y1 ) +
    ' Z';
}

PrevNextButton.prototype.onTap = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.parent.uiChange();
  var method = this.isPrevious ? 'previous' : 'next';
  this.parent[ method ]();
};

PrevNextButton.prototype.handleEvent = utils.handleEvent;

PrevNextButton.prototype.onclick = function( event ) {
  // only allow clicks from keyboard
  var focused = document.activeElement;
  if ( focused && focused == this.element ) {
    this.onTap( event, event );
  }
};

// -----  ----- //

PrevNextButton.prototype.enable = function() {
  if ( this.isEnabled ) {
    return;
  }
  this.element.disabled = false;
  this.isEnabled = true;
};

PrevNextButton.prototype.disable = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.element.disabled = true;
  this.isEnabled = false;
};

PrevNextButton.prototype.update = function() {
  // index of first or last slide, if previous or next
  var slides = this.parent.slides;
  // enable is wrapAround and at least 2 slides
  if ( this.parent.options.wrapAround && slides.length > 1 ) {
    this.enable();
    return;
  }
  var lastIndex = slides.length ? slides.length - 1 : 0;
  var boundIndex = this.isPrevious ? 0 : lastIndex;
  var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
  this[ method ]();
};

PrevNextButton.prototype.destroy = function() {
  this.deactivate();
};

// -------------------------- Flickity prototype -------------------------- //

utils.extend( Flickity.defaults, {
  prevNextButtons: true,
  arrowShape: {
    x0: 10,
    x1: 60, y1: 50,
    x2: 70, y2: 40,
    x3: 30
  }
});

Flickity.createMethods.push('_createPrevNextButtons');
var proto = Flickity.prototype;

proto._createPrevNextButtons = function() {
  if ( !this.options.prevNextButtons ) {
    return;
  }

  this.prevButton = new PrevNextButton( -1, this );
  this.nextButton = new PrevNextButton( 1, this );

  this.on( 'activate', this.activatePrevNextButtons );
};

proto.activatePrevNextButtons = function() {
  this.prevButton.activate();
  this.nextButton.activate();
  this.on( 'deactivate', this.deactivatePrevNextButtons );
};

proto.deactivatePrevNextButtons = function() {
  this.prevButton.deactivate();
  this.nextButton.deactivate();
  this.off( 'deactivate', this.deactivatePrevNextButtons );
};

// --------------------------  -------------------------- //

Flickity.PrevNextButton = PrevNextButton;

return Flickity;

}));

// page dots
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/page-dots',[
      './flickity',
      'tap-listener/tap-listener',
      'fizzy-ui-utils/utils'
    ], function( Flickity, TapListener, utils ) {
      return factory( window, Flickity, TapListener, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('tap-listener'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.TapListener,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, TapListener, utils ) {

// -------------------------- PageDots -------------------------- //



function PageDots( parent ) {
  this.parent = parent;
  this._create();
}

PageDots.prototype = new TapListener();

PageDots.prototype._create = function() {
  // create holder element
  this.holder = document.createElement('ol');
  this.holder.className = 'flickity-page-dots';
  // create dots, array of elements
  this.dots = [];
  // events
  this.on( 'tap', this.onTap );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PageDots.prototype.activate = function() {
  this.setDots();
  this.bindTap( this.holder );
  // add to DOM
  this.parent.element.appendChild( this.holder );
};

PageDots.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.holder );
  TapListener.prototype.destroy.call( this );
};

PageDots.prototype.setDots = function() {
  // get difference between number of slides and number of dots
  var delta = this.parent.slides.length - this.dots.length;
  if ( delta > 0 ) {
    this.addDots( delta );
  } else if ( delta < 0 ) {
    this.removeDots( -delta );
  }
};

PageDots.prototype.addDots = function( count ) {
  var fragment = document.createDocumentFragment();
  var newDots = [];
  var length = this.dots.length;
  var max = length + count;

  for ( var i = length; i < max; i++ ) {
    var dot = document.createElement('li');
    dot.className = 'dot';
    dot.setAttribute( 'aria-label', 'Page dot ' + ( i + 1 ) );
    fragment.appendChild( dot );
    newDots.push( dot );
  }

  this.holder.appendChild( fragment );
  this.dots = this.dots.concat( newDots );
};

PageDots.prototype.removeDots = function( count ) {
  // remove from this.dots collection
  var removeDots = this.dots.splice( this.dots.length - count, count );
  // remove from DOM
  removeDots.forEach( function( dot ) {
    this.holder.removeChild( dot );
  }, this );
};

PageDots.prototype.updateSelected = function() {
  // remove selected class on previous
  if ( this.selectedDot ) {
    this.selectedDot.className = 'dot';
    this.selectedDot.removeAttribute('aria-current');
  }
  // don't proceed if no dots
  if ( !this.dots.length ) {
    return;
  }
  this.selectedDot = this.dots[ this.parent.selectedIndex ];
  this.selectedDot.className = 'dot is-selected';
  this.selectedDot.setAttribute( 'aria-current', 'step' );
};

PageDots.prototype.onTap = function( event ) {
  var target = event.target;
  // only care about dot clicks
  if ( target.nodeName != 'LI' ) {
    return;
  }

  this.parent.uiChange();
  var index = this.dots.indexOf( target );
  this.parent.select( index );
};

PageDots.prototype.destroy = function() {
  this.deactivate();
};

Flickity.PageDots = PageDots;

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pageDots: true
});

Flickity.createMethods.push('_createPageDots');

var proto = Flickity.prototype;

proto._createPageDots = function() {
  if ( !this.options.pageDots ) {
    return;
  }
  this.pageDots = new PageDots( this );
  // events
  this.on( 'activate', this.activatePageDots );
  this.on( 'select', this.updateSelectedPageDots );
  this.on( 'cellChange', this.updatePageDots );
  this.on( 'resize', this.updatePageDots );
  this.on( 'deactivate', this.deactivatePageDots );
};

proto.activatePageDots = function() {
  this.pageDots.activate();
};

proto.updateSelectedPageDots = function() {
  this.pageDots.updateSelected();
};

proto.updatePageDots = function() {
  this.pageDots.setDots();
};

proto.deactivatePageDots = function() {
  this.pageDots.deactivate();
};

// -----  ----- //

Flickity.PageDots = PageDots;

return Flickity;

}));

// player & autoPlay
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/player',[
      'ev-emitter/ev-emitter',
      'fizzy-ui-utils/utils',
      './flickity'
    ], function( EvEmitter, utils, Flickity ) {
      return factory( EvEmitter, utils, Flickity );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('ev-emitter'),
      require('fizzy-ui-utils'),
      require('./flickity')
    );
  } else {
    // browser global
    factory(
      window.EvEmitter,
      window.fizzyUIUtils,
      window.Flickity
    );
  }

}( window, function factory( EvEmitter, utils, Flickity ) {



// -------------------------- Player -------------------------- //

function Player( parent ) {
  this.parent = parent;
  this.state = 'stopped';
  // visibility change event handler
  this.onVisibilityChange = this.visibilityChange.bind( this );
  this.onVisibilityPlay = this.visibilityPlay.bind( this );
}

Player.prototype = Object.create( EvEmitter.prototype );

// start play
Player.prototype.play = function() {
  if ( this.state == 'playing' ) {
    return;
  }
  // do not play if page is hidden, start playing when page is visible
  var isPageHidden = document.hidden;
  if ( isPageHidden ) {
    document.addEventListener( 'visibilitychange', this.onVisibilityPlay );
    return;
  }

  this.state = 'playing';
  // listen to visibility change
  document.addEventListener( 'visibilitychange', this.onVisibilityChange );
  // start ticking
  this.tick();
};

Player.prototype.tick = function() {
  // do not tick if not playing
  if ( this.state != 'playing' ) {
    return;
  }

  var time = this.parent.options.autoPlay;
  // default to 3 seconds
  time = typeof time == 'number' ? time : 3000;
  var _this = this;
  // HACK: reset ticks if stopped and started within interval
  this.clear();
  this.timeout = setTimeout( function() {
    _this.parent.next( true );
    _this.tick();
  }, time );
};

Player.prototype.stop = function() {
  this.state = 'stopped';
  this.clear();
  // remove visibility change event
  document.removeEventListener( 'visibilitychange', this.onVisibilityChange );
};

Player.prototype.clear = function() {
  clearTimeout( this.timeout );
};

Player.prototype.pause = function() {
  if ( this.state == 'playing' ) {
    this.state = 'paused';
    this.clear();
  }
};

Player.prototype.unpause = function() {
  // re-start play if paused
  if ( this.state == 'paused' ) {
    this.play();
  }
};

// pause if page visibility is hidden, unpause if visible
Player.prototype.visibilityChange = function() {
  var isPageHidden = document.hidden;
  this[ isPageHidden ? 'pause' : 'unpause' ]();
};

Player.prototype.visibilityPlay = function() {
  this.play();
  document.removeEventListener( 'visibilitychange', this.onVisibilityPlay );
};

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pauseAutoPlayOnHover: true
});

Flickity.createMethods.push('_createPlayer');
var proto = Flickity.prototype;

proto._createPlayer = function() {
  this.player = new Player( this );

  this.on( 'activate', this.activatePlayer );
  this.on( 'uiChange', this.stopPlayer );
  this.on( 'pointerDown', this.stopPlayer );
  this.on( 'deactivate', this.deactivatePlayer );
};

proto.activatePlayer = function() {
  if ( !this.options.autoPlay ) {
    return;
  }
  this.player.play();
  this.element.addEventListener( 'mouseenter', this );
};

// Player API, don't hate the ... thanks I know where the door is

proto.playPlayer = function() {
  this.player.play();
};

proto.stopPlayer = function() {
  this.player.stop();
};

proto.pausePlayer = function() {
  this.player.pause();
};

proto.unpausePlayer = function() {
  this.player.unpause();
};

proto.deactivatePlayer = function() {
  this.player.stop();
  this.element.removeEventListener( 'mouseenter', this );
};

// ----- mouseenter/leave ----- //

// pause auto-play on hover
proto.onmouseenter = function() {
  if ( !this.options.pauseAutoPlayOnHover ) {
    return;
  }
  this.player.pause();
  this.element.addEventListener( 'mouseleave', this );
};

// resume auto-play on hover off
proto.onmouseleave = function() {
  this.player.unpause();
  this.element.removeEventListener( 'mouseleave', this );
};

// -----  ----- //

Flickity.Player = Player;

return Flickity;

}));

// add, remove cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/add-remove-cell',[
      './flickity',
      'fizzy-ui-utils/utils'
    ], function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils ) {



// append cells to a document fragment
function getCellsFragment( cells ) {
  var fragment = document.createDocumentFragment();
  cells.forEach( function( cell ) {
    fragment.appendChild( cell.element );
  });
  return fragment;
}

// -------------------------- add/remove cell prototype -------------------------- //

var proto = Flickity.prototype;

/**
 * Insert, prepend, or append cells
 * @param {Element, Array, NodeList} elems
 * @param {Integer} index
 */
proto.insert = function( elems, index ) {
  var cells = this._makeCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }
  var len = this.cells.length;
  // default to append
  index = index === undefined ? len : index;
  // add cells with document fragment
  var fragment = getCellsFragment( cells );
  // append to slider
  var isAppend = index == len;
  if ( isAppend ) {
    this.slider.appendChild( fragment );
  } else {
    var insertCellElement = this.cells[ index ].element;
    this.slider.insertBefore( fragment, insertCellElement );
  }
  // add to this.cells
  if ( index === 0 ) {
    // prepend, add to start
    this.cells = cells.concat( this.cells );
  } else if ( isAppend ) {
    // append, add to end
    this.cells = this.cells.concat( cells );
  } else {
    // insert in this.cells
    var endCells = this.cells.splice( index, len - index );
    this.cells = this.cells.concat( cells ).concat( endCells );
  }

  this._sizeCells( cells );
  this.cellChange( index, true );
};

proto.append = function( elems ) {
  this.insert( elems, this.cells.length );
};

proto.prepend = function( elems ) {
  this.insert( elems, 0 );
};

/**
 * Remove cells
 * @param {Element, Array, NodeList} elems
 */
proto.remove = function( elems ) {
  var cells = this.getCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }

  var minCellIndex = this.cells.length - 1;
  // remove cells from collection & DOM
  cells.forEach( function( cell ) {
    cell.remove();
    var index = this.cells.indexOf( cell );
    minCellIndex = Math.min( index, minCellIndex );
    utils.removeFrom( this.cells, cell );
  }, this );

  this.cellChange( minCellIndex, true );
};

/**
 * logic to be run after a cell's size changes
 * @param {Element} elem - cell's element
 */
proto.cellSizeChange = function( elem ) {
  var cell = this.getCell( elem );
  if ( !cell ) {
    return;
  }
  cell.getSize();

  var index = this.cells.indexOf( cell );
  this.cellChange( index );
};

/**
 * logic any time a cell is changed: added, removed, or size changed
 * @param {Integer} changedCellIndex - index of the changed cell, optional
 */
proto.cellChange = function( changedCellIndex, isPositioningSlider ) {
  var prevSelectedElem = this.selectedElement;
  this._positionCells( changedCellIndex );
  this._getWrapShiftCells();
  this.setGallerySize();
  // update selectedIndex
  // try to maintain position & select previous selected element
  var cell = this.getCell( prevSelectedElem );
  if ( cell ) {
    this.selectedIndex = this.getCellSlideIndex( cell );
  }
  this.selectedIndex = Math.min( this.slides.length - 1, this.selectedIndex );

  this.emitEvent( 'cellChange', [ changedCellIndex ] );
  // position slider
  this.select( this.selectedIndex );
  // do not position slider after lazy load
  if ( isPositioningSlider ) {
    this.positionSliderAtSelected();
  }
};

// -----  ----- //

return Flickity;

}));

// lazyload
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/lazyload',[
      './flickity',
      'fizzy-ui-utils/utils'
    ], function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils ) {
'use strict';

Flickity.createMethods.push('_createLazyload');
var proto = Flickity.prototype;

proto._createLazyload = function() {
  this.on( 'select', this.lazyLoad );
};

proto.lazyLoad = function() {
  var lazyLoad = this.options.lazyLoad;
  if ( !lazyLoad ) {
    return;
  }
  // get adjacent cells, use lazyLoad option for adjacent count
  var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
  var cellElems = this.getAdjacentCellElements( adjCount );
  // get lazy images in those cells
  var lazyImages = [];
  cellElems.forEach( function( cellElem ) {
    var lazyCellImages = getCellLazyImages( cellElem );
    lazyImages = lazyImages.concat( lazyCellImages );
  });
  // load lazy images
  lazyImages.forEach( function( img ) {
    new LazyLoader( img, this );
  }, this );
};

function getCellLazyImages( cellElem ) {
  // check if cell element is lazy image
  if ( cellElem.nodeName == 'IMG' ) {
    var lazyloadAttr = cellElem.getAttribute('data-flickity-lazyload');
    var srcAttr = cellElem.getAttribute('data-flickity-lazyload-src');
    var srcsetAttr = cellElem.getAttribute('data-flickity-lazyload-srcset');
    if ( lazyloadAttr || srcAttr || srcsetAttr ) {
      return [ cellElem ];
    }
  }
  // select lazy images in cell
  var lazySelector = 'img[data-flickity-lazyload], ' +
    'img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]';
  var imgs = cellElem.querySelectorAll( lazySelector );
  return utils.makeArray( imgs );
}

// -------------------------- LazyLoader -------------------------- //

/**
 * class to handle loading images
 */
function LazyLoader( img, flickity ) {
  this.img = img;
  this.flickity = flickity;
  this.load();
}

LazyLoader.prototype.handleEvent = utils.handleEvent;

LazyLoader.prototype.load = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  // get src & srcset
  var src = this.img.getAttribute('data-flickity-lazyload') ||
    this.img.getAttribute('data-flickity-lazyload-src');
  var srcset = this.img.getAttribute('data-flickity-lazyload-srcset');
  // set src & serset
  this.img.src = src;
  if ( srcset ) {
    this.img.setAttribute( 'srcset', srcset );
  }
  // remove attr
  this.img.removeAttribute('data-flickity-lazyload');
  this.img.removeAttribute('data-flickity-lazyload-src');
  this.img.removeAttribute('data-flickity-lazyload-srcset');
};

LazyLoader.prototype.onload = function( event ) {
  this.complete( event, 'flickity-lazyloaded' );
};

LazyLoader.prototype.onerror = function( event ) {
  this.complete( event, 'flickity-lazyerror' );
};

LazyLoader.prototype.complete = function( event, className ) {
  // unbind events
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );

  var cell = this.flickity.getParentCell( this.img );
  var cellElem = cell && cell.element;
  this.flickity.cellSizeChange( cellElem );

  this.img.classList.add( className );
  this.flickity.dispatchEvent( 'lazyLoad', event, cellElem );
};

// -----  ----- //

Flickity.LazyLoader = LazyLoader;

return Flickity;

}));

/*!
 * Flickity v2.1.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/index',[
      './flickity',
      './drag',
      './prev-next-button',
      './page-dots',
      './player',
      './add-remove-cell',
      './lazyload'
    ], factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('./flickity'),
      require('./drag'),
      require('./prev-next-button'),
      require('./page-dots'),
      require('./player'),
      require('./add-remove-cell'),
      require('./lazyload')
    );
  }

})( window, function factory( Flickity ) {
  /*jshint strict: false*/
  return Flickity;
});

/*!
 * Flickity asNavFor v2.0.1
 * enable asNavFor for Flickity
 */

/*jshint browser: true, undef: true, unused: true, strict: true*/

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity-as-nav-for/as-nav-for',[
      'flickity/js/index',
      'fizzy-ui-utils/utils'
    ], factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( Flickity, utils ) {



// -------------------------- asNavFor prototype -------------------------- //

// Flickity.defaults.asNavFor = null;

Flickity.createMethods.push('_createAsNavFor');

var proto = Flickity.prototype;

proto._createAsNavFor = function() {
  this.on( 'activate', this.activateAsNavFor );
  this.on( 'deactivate', this.deactivateAsNavFor );
  this.on( 'destroy', this.destroyAsNavFor );

  var asNavForOption = this.options.asNavFor;
  if ( !asNavForOption ) {
    return;
  }
  // HACK do async, give time for other flickity to be initalized
  var _this = this;
  setTimeout( function initNavCompanion() {
    _this.setNavCompanion( asNavForOption );
  });
};

proto.setNavCompanion = function( elem ) {
  elem = utils.getQueryElement( elem );
  var companion = Flickity.data( elem );
  // stop if no companion or companion is self
  if ( !companion || companion == this ) {
    return;
  }

  this.navCompanion = companion;
  // companion select
  var _this = this;
  this.onNavCompanionSelect = function() {
    _this.navCompanionSelect();
  };
  companion.on( 'select', this.onNavCompanionSelect );
  // click
  this.on( 'staticClick', this.onNavStaticClick );

  this.navCompanionSelect( true );
};

proto.navCompanionSelect = function( isInstant ) {
  if ( !this.navCompanion ) {
    return;
  }
  // select slide that matches first cell of slide
  var selectedCell = this.navCompanion.selectedCells[0];
  var firstIndex = this.navCompanion.cells.indexOf( selectedCell );
  var lastIndex = firstIndex + this.navCompanion.selectedCells.length - 1;
  var selectIndex = Math.floor( lerp( firstIndex, lastIndex,
    this.navCompanion.cellAlign ) );
  this.selectCell( selectIndex, false, isInstant );
  // set nav selected class
  this.removeNavSelectedElements();
  // stop if companion has more cells than this one
  if ( selectIndex >= this.cells.length ) {
    return;
  }

  var selectedCells = this.cells.slice( firstIndex, lastIndex + 1 );
  this.navSelectedElements = selectedCells.map( function( cell ) {
    return cell.element;
  });
  this.changeNavSelectedClass('add');
};

function lerp( a, b, t ) {
  return ( b - a ) * t + a;
}

proto.changeNavSelectedClass = function( method ) {
  this.navSelectedElements.forEach( function( navElem ) {
    navElem.classList[ method ]('is-nav-selected');
  });
};

proto.activateAsNavFor = function() {
  this.navCompanionSelect( true );
};

proto.removeNavSelectedElements = function() {
  if ( !this.navSelectedElements ) {
    return;
  }
  this.changeNavSelectedClass('remove');
  delete this.navSelectedElements;
};

proto.onNavStaticClick = function( event, pointer, cellElement, cellIndex ) {
  if ( typeof cellIndex == 'number' ) {
    this.navCompanion.selectCell( cellIndex );
  }
};

proto.deactivateAsNavFor = function() {
  this.removeNavSelectedElements();
};

proto.destroyAsNavFor = function() {
  if ( !this.navCompanion ) {
    return;
  }
  this.navCompanion.off( 'select', this.onNavCompanionSelect );
  this.off( 'staticClick', this.onNavStaticClick );
  delete this.navCompanion;
};

// -----  ----- //

return Flickity;

}));

/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'imagesloaded/imagesloaded',[
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {



var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});

/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'flickity/js/index',
      'imagesloaded/imagesloaded'
    ], function( Flickity, imagesLoaded ) {
      return factory( window, Flickity, imagesLoaded );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('flickity'),
      require('imagesloaded')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.imagesLoaded
    );
  }

}( window, function factory( window, Flickity, imagesLoaded ) {
'use strict';

Flickity.createMethods.push('_createImagesLoaded');

var proto = Flickity.prototype;

proto._createImagesLoaded = function() {
  this.on( 'activate', this.imagesLoaded );
};

proto.imagesLoaded = function() {
  if ( !this.options.imagesLoaded ) {
    return;
  }
  var _this = this;
  function onImagesLoadedProgress( instance, image ) {
    var cell = _this.getParentCell( image.img );
    _this.cellSizeChange( cell && cell.element );
    if ( !_this.options.freeScroll ) {
      _this.positionSliderAtSelected();
    }
  }
  imagesLoaded( this.slider ).on( 'progress', onImagesLoadedProgress );
};

return Flickity;


}));