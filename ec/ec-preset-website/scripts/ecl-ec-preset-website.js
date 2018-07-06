/* @ecl/ec-preset-website - 1.1.0 Built on 2018-07-06T15:58:51.421Z */
var ECL=function(e){"use strict";var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))},n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(e,t){return e(t={exports:{}},t.exports),t.exports}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="Expected a function",a=NaN,l="[object Symbol]",s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,v="object"==o(n)&&n&&n.Object===Object&&n,m="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,h=v||m||Function("return this")(),p=Object.prototype.toString,g=Math.max,y=Math.min,b=function(){return h.Date.now()};function _(e){var t=void 0===e?"undefined":o(e);return!!e&&("object"==t||"function"==t)}function E(e){return"symbol"==(void 0===e?"undefined":o(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":o(e))}(e)&&p.call(e)==l}function S(e){if("number"==typeof e)return e;if(E(e))return a;if(_(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=_(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=u.test(e);return n||d.test(e)?f(e.slice(2),n?2:8):c.test(e)?a:+e}var k=function(e,t,n){var i,o,a,l,s,c,u=0,d=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function m(t){var n=i,r=o;return i=o=void 0,u=t,l=e.apply(r,n)}function h(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-u>=a}function p(){var e=b();if(h(e))return E(e);s=setTimeout(p,function(e){var n=t-(e-c);return f?y(n,a-(e-u)):n}(e))}function E(e){return s=void 0,v&&i?m(e):(i=o=void 0,l)}function k(){var e=b(),n=h(e);if(i=arguments,o=this,c=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(p,t),d?m(e):l}(c);if(f)return s=setTimeout(p,t),m(c)}return void 0===s&&(s=setTimeout(p,t)),l}return t=S(t)||0,_(n)&&(d=!!n.leading,a=(f="maxWait"in n)?g(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),k.cancel=function(){void 0!==s&&clearTimeout(s),u=0,i=c=o=s=void 0},k.flush=function(){return void 0===s?l:E(b())},k};var w=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.context,o=void 0===i?document:i,r=n.forceClose,a=void 0!==r&&r,l=n.closeSiblings,s=void 0!==l&&l,c=n.siblingsSelector,u=void 0===c?"[aria-controls][aria-expanded]":c;if(t){var d=document.getElementById(t.getAttribute("aria-controls"));if(d){var f=!0===a||"true"===t.getAttribute("aria-expanded");if(t.setAttribute("aria-expanded",!f),d.setAttribute("aria-hidden",f),!f&&t.hasAttribute("data-label-expanded")?t.innerHTML=t.getAttribute("data-label-expanded"):f&&t.hasAttribute("data-label-collapsed")&&(t.innerHTML=t.getAttribute("data-label-collapsed")),!0===s)Array.prototype.slice.call(o.querySelectorAll(u)).filter(function(e){return e!==t}).forEach(function(t){e(t,{context:o,forceClose:!0})})}}};var L=i(function(e){!function(t,n){var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var o=!1;if(t.getComputedStyle){var r=n.createElement("div");["","-webkit-","-moz-","-ms-"].some(function(e){try{r.style.position=e+"sticky"}catch(e){}return""!=r.style.position})&&(o=!0)}else o=!0;var a="undefined"!=typeof ShadowRoot,l={top:null,left:null},s=[];function c(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}function u(e){return parseFloat(e)||0}function d(e){for(var t=0;e;)t+=e.offsetTop,e=e.offsetParent;return t}var f=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!(t instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(s.some(function(e){return e._node===t}))throw new Error("Stickyfill is already applied to this node");this._node=t,this._stickyMode=null,this._active=!1,s.push(this),this.refresh()}return i(e,[{key:"refresh",value:function(){if(!o&&!this._removed){this._active&&this._deactivate();var e=this._node,i=getComputedStyle(e),r={top:i.top,display:i.display,marginTop:i.marginTop,marginBottom:i.marginBottom,marginLeft:i.marginLeft,marginRight:i.marginRight,cssFloat:i.cssFloat};if(!isNaN(parseFloat(r.top))&&"table-cell"!=r.display&&"none"!=r.display){this._active=!0;var l=e.parentNode,s=a&&l instanceof ShadowRoot?l.host:l,f=e.getBoundingClientRect(),v=s.getBoundingClientRect(),m=getComputedStyle(s);this._parent={node:s,styles:{position:s.style.position},offsetHeight:s.offsetHeight},this._offsetToWindow={left:f.left,right:n.documentElement.clientWidth-f.right},this._offsetToParent={top:f.top-v.top-u(m.borderTopWidth),left:f.left-v.left-u(m.borderLeftWidth),right:-f.right+v.right-u(m.borderRightWidth)},this._styles={position:e.style.position,top:e.style.top,bottom:e.style.bottom,left:e.style.left,right:e.style.right,width:e.style.width,marginTop:e.style.marginTop,marginLeft:e.style.marginLeft,marginRight:e.style.marginRight};var h=u(r.top);this._limits={start:f.top+t.pageYOffset-h,end:v.top+t.pageYOffset+s.offsetHeight-u(m.borderBottomWidth)-e.offsetHeight-h-u(r.marginBottom)};var p=m.position;"absolute"!=p&&"relative"!=p&&(s.style.position="relative"),this._recalcPosition();var g=this._clone={};g.node=n.createElement("div"),c(g.node.style,{width:f.right-f.left+"px",height:f.bottom-f.top+"px",marginTop:r.marginTop,marginBottom:r.marginBottom,marginLeft:r.marginLeft,marginRight:r.marginRight,cssFloat:r.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),l.insertBefore(g.node,e),g.docOffsetTop=d(g.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var e=l.top<=this._limits.start?"start":l.top>=this._limits.end?"end":"middle";if(this._stickyMode!=e){switch(e){case"start":c(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":c(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":c(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=e}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(d(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var e=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,c(this._node.style,this._styles),delete this._styles,s.some(function(t){return t!==e&&t._parent&&t._parent.node===e._parent.node})||c(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var e=this;this._deactivate(),s.some(function(t,n){if(t._node===e._node)return s.splice(n,1),!0}),this._removed=!0}}]),e}(),v={stickies:s,Sticky:f,addOne:function(e){if(!(e instanceof HTMLElement)){if(!e.length||!e[0])return;e=e[0]}for(var t=0;t<s.length;t++)if(s[t]._node===e)return s[t];return new f(e)},add:function(e){if(e instanceof HTMLElement&&(e=[e]),e.length){for(var t=[],n=function(n){var i=e[n];return i instanceof HTMLElement?s.some(function(e){if(e._node===i)return t.push(e),!0})?"continue":void t.push(new f(i)):(t.push(void 0),"continue")},i=0;i<e.length;i++)n(i);return t}},refreshAll:function(){s.forEach(function(e){return e.refresh()})},removeOne:function(e){if(!(e instanceof HTMLElement)){if(!e.length||!e[0])return;e=e[0]}s.some(function(t){if(t._node===e)return t.remove(),!0})},remove:function(e){if(e instanceof HTMLElement&&(e=[e]),e.length)for(var t=function(t){var n=e[t];s.some(function(e){if(e._node===n)return e.remove(),!0})},n=0;n<e.length;n++)t(n)},removeAll:function(){for(;s.length;)s[0].remove()}};o||function(){function e(){t.pageXOffset!=l.left?(l.top=t.pageYOffset,l.left=t.pageXOffset,v.refreshAll()):t.pageYOffset!=l.top&&(l.top=t.pageYOffset,l.left=t.pageXOffset,s.forEach(function(e){return e._recalcPosition()}))}e(),t.addEventListener("scroll",e),t.addEventListener("resize",v.refreshAll),t.addEventListener("orientationchange",v.refreshAll);var i=void 0;function o(){i=setInterval(function(){s.forEach(function(e){return e._fastCheck()})},500)}var r=void 0,a=void 0;"hidden"in n?(r="hidden",a="visibilitychange"):"webkitHidden"in n&&(r="webkitHidden",a="webkitvisibilitychange"),a?(n[r]||o(),n.addEventListener(a,function(){n[r]?clearInterval(i):o()})):o()}(),e.exports?e.exports=v:t.Stickyfill=v}(window,document)}),A=i(function(e,t){var i,o;i=void 0!==n?n:n.window||n.global,o=function(e){var t,n,i,o,r,a,l={},s="querySelector"in document&&"addEventListener"in e&&"classList"in document.createElement("_"),c=[],u={selector:"[data-gumshoe] a",selectorHeader:"[data-gumshoe-header]",container:e,offset:0,activeClass:"active",scrollDelay:!1,callback:function(){}},d=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(n,e[i],i,e);else for(var o=0,r=e.length;o<r;o++)t.call(n,e[o],o,e)},f=function(e){var n=0;if(e.offsetParent)do{n+=e.offsetTop,e=e.offsetParent}while(e);else n=e.offsetTop;return(n=n-r-t.offset)>=0?n:0};l.setDistances=function(){var e;i=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),r=o?(e=o,Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)+f(o)):0,d(c,function(e){e.distance=f(e.target)}),c.sort(function(e,t){return e.distance>t.distance?-1:e.distance<t.distance?1:0})};var v=function(){a&&(a.nav.classList.remove(t.activeClass),a.parent&&a.parent.classList.remove(t.activeClass))},m=function(e){v(),e.nav.classList.add(t.activeClass),e.parent&&e.parent.classList.add(t.activeClass),t.callback(e),a={nav:e.nav,parent:e.parent}};l.getCurrentNav=function(){var n=e.pageYOffset;if(e.innerHeight+n>=i&&function(t){var n=t.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(e.innerHeight||document.documentElement.clientHeight)&&n.right<=(e.innerWidth||document.documentElement.clientWidth)}(c[0].target))return m(c[0]),c[0];for(var o=0,r=c.length;o<r;o++){var a=c[o];if(a.distance<=n)return m(a),a}v(),t.callback()};l.destroy=function(){t&&(t.container.removeEventListener("resize",p,!1),t.container.removeEventListener("scroll",p,!1),c=[],t=null,n=null,i=null,o=null,r=null,a=null,null)};var h=function(e){window.clearTimeout(n),n=setTimeout(function(){l.setDistances(),l.getCurrentNav()},66)},p=function(e){n||(n=setTimeout(function(){n=null,"scroll"===e.type&&l.getCurrentNav(),"resize"===e.type&&(l.setDistances(),l.getCurrentNav())},66))};return l.init=function(e){s&&(l.destroy(),t=function e(){var t={},n=!1,i=0,o=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],i++);i<o;i++)!function(i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n&&"[object Object]"===Object.prototype.toString.call(i[o])?t[o]=e(!0,t[o],i[o]):t[o]=i[o])}(arguments[i]);return t}(u,e||{}),o=document.querySelector(t.selectorHeader),function(){var e=document.querySelectorAll(t.selector);d(e,function(e){if(e.hash){var t=document.querySelector(e.hash);t&&c.push({nav:e,target:t,parent:"li"===e.parentNode.tagName.toLowerCase()?e.parentNode:null,distance:0})}})}(),0!==c.length&&(d(c,function(e){e.nav.classList.contains(t.activeClass)&&(a={nav:e.nav,parent:e.parent})}),l.setDistances(),l.getCurrentNav(),t.container.addEventListener("resize",p,!1),t.scrollDelay?t.container.addEventListener("scroll",h,!1):t.container.addEventListener("scroll",p,!1)))},l},e.exports=o(i)}),C=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.context,o=void 0===i?document:i,r=n.forceClose,a=void 0!==r&&r,l=n.closeSiblings,s=void 0!==l&&l,c=n.siblingsSelector,u=void 0===c?"[aria-controls][aria-expanded]":c;if(t){var d=document.getElementById(t.getAttribute("aria-controls"));if(d){var f=!0===a||"true"===t.getAttribute("aria-expanded");if(t.setAttribute("aria-expanded",!f),d.setAttribute("aria-hidden",f),!f&&t.hasAttribute("data-label-expanded")?t.innerHTML=t.getAttribute("data-label-expanded"):f&&t.hasAttribute("data-label-collapsed")&&(t.innerHTML=t.getAttribute("data-label-collapsed")),!0===s)Array.prototype.slice.call(o.querySelectorAll(u)).filter(function(e){return e!==t}).forEach(function(t){e(t,{context:o,forceClose:!0})})}}},x=function(e,t){return function(n){if(e&&e.hasAttribute("aria-haspopup")){var i=e.getAttribute("aria-haspopup");""!==i&&"true"!==i||(n.preventDefault(),C(e,{context:t,closeSiblings:!0}))}}},T=function(){function e(e,t){var n=void 0!==t?t:{};this.version="3.3.2",this.userAgent=window.navigator.userAgent||"no `userAgent` provided by the browser",this.props={customStickyChangeNumber:n.customStickyChangeNumber||null,noStyles:n.noStyles||!1,stickyBitStickyOffset:n.stickyBitStickyOffset||0,parentClass:n.parentClass||"js-stickybit-parent",scrollEl:document.querySelector(n.scrollEl)||window,stickyClass:n.stickyClass||"js-is-sticky",stuckClass:n.stuckClass||"js-is-stuck",stickyChangeClass:n.stickyChangeClass||"js-is-sticky--change",useStickyClasses:n.useStickyClasses||!1,verticalPosition:n.verticalPosition||"top"};var i=this.props;i.positionVal=this.definePosition()||"fixed";var o=i.verticalPosition,r=i.noStyles,a=i.positionVal;this.els="string"==typeof e?document.querySelectorAll(e):e,"length"in this.els||(this.els=[this.els]),this.instances=[];for(var l=0;l<this.els.length;l+=1){var s=this.els[l],c=s.style;if(c[o]="top"!==o||r?"":i.stickyBitStickyOffset+"px",c.position="fixed"!==a?a:"","fixed"===a||i.useStickyClasses){var u=this.addInstance(s,i);this.instances.push(u)}}return this}var t=e.prototype;return t.definePosition=function(){for(var e=["","-o-","-webkit-","-moz-","-ms-"],t=document.head.style,n=0;n<e.length;n+=1)t.position=e[n]+"sticky";var i=t.position?t.position:"fixed";return t.position="",i},t.addInstance=function(e,t){var n=this,i={el:e,parent:e.parentNode,props:t};this.isWin=this.props.scrollEl===window;var o=this.isWin?window:this.getClosestParent(i.el,i.props.scrollEl);return this.computeScrollOffsets(i),i.parent.className+=" "+t.parentClass,i.state="default",i.stateContainer=function(){return n.manageState(i)},o.addEventListener("scroll",i.stateContainer),i},t.getClosestParent=function(e,t){var n=t,i=e;if(i.parentElement===n)return n;for(;i.parentElement!==n;)i=i.parentElement;return n},t.getOffsetTop=function(e){var t=0;do{t=e.offsetTop+t}while(e=e.offsetParent);return t},t.computeScrollOffsets=function(e){var t=e,n=t.props,i=t.el,o=t.parent,r=!this.isWin&&"fixed"===n.positionVal,a="bottom"!==n.verticalPosition,l=r?this.getOffsetTop(n.scrollEl):0,s=r?this.getOffsetTop(o)-l:this.getOffsetTop(o),c=null!==n.customStickyChangeNumber?n.customStickyChangeNumber:i.offsetHeight;return t.offset=l+n.stickyBitStickyOffset,t.stickyStart=a?s-t.offset:0,t.stickyChange=t.stickyStart+c,t.stickyStop=a?s+o.offsetHeight-(t.el.offsetHeight+t.offset):s+o.offsetHeight,t},t.toggleClasses=function(e,t,n){var i=e,o=i.className.split(" ");n&&-1===o.indexOf(n)&&o.push(n);var r=o.indexOf(t);-1!==r&&o.splice(r,1),i.className=o.join(" ")},t.manageState=function(e){var t=e,n=t.el,i=t.props,o=t.state,r=t.stickyStart,a=t.stickyChange,l=t.stickyStop,s=n.style,c=i.noStyles,u=i.positionVal,d=i.scrollEl,f=i.stickyClass,v=i.stickyChangeClass,m=i.stuckClass,h=i.verticalPosition,p=function(e){e()},g=this.isWin&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame)||p,y=this.toggleClasses,b=this.isWin?window.scrollY||window.pageYOffset:d.scrollTop,_=b<=r&&"sticky"===o,E=b>=l&&"sticky"===o;b>r&&b<l&&("default"===o||"stuck"===o)?(t.state="sticky",g(function(){y(n,m,f),s.position=u,c||(s.bottom="",s[h]=i.stickyBitStickyOffset+"px")})):_?(t.state="default",g(function(){y(n,f),"fixed"===u&&(s.position="")})):E&&(t.state="stuck",g(function(){y(n,f,m),"fixed"!==u||c||(s.top="",s.bottom="0",s.position="absolute")}));var S=b>=a&&b<=l;return b<a||b>l?g(function(){y(n,v)}):S&&g(function(){y(n,"stub",v)}),t},t.update=function(){for(var e=0;e<this.instances.length;e+=1){var t=this.instances[e];this.computeScrollOffsets(t)}return this},t.removeInstance=function(e){var t=e.el,n=e.props,i=this.toggleClasses;t.style.position="",t.style[n.verticalPosition]="",i(t,n.stickyClass),i(t,n.stuckClass),i(t.parentNode,n.parentClass)},t.cleanup=function(){for(var e=0;e<this.instances.length;e+=1){var t=this.instances[e];t.props.scrollEl.removeEventListener("scroll",t.stateContainer),this.removeInstance(t)}this.manageState=!1,this.instances=[]},e}();return e.accordions=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.selector,i=void 0===n?".ecl-accordion":n,o=e.headerSelector,r=void 0===o?".ecl-accordion__header":o;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var a=t(i);function l(e){"true"!==e.getAttribute("aria-expanded")?function(e){var t=document.getElementById(e.getAttribute("aria-controls"));e.setAttribute("tabindex",0),e.setAttribute("aria-expanded","true"),t.setAttribute("aria-hidden","false")}(e):function(e){var t=document.getElementById(e.getAttribute("aria-controls"));e.setAttribute("aria-expanded","false"),t.setAttribute("aria-hidden","true")}(e)}function s(e,t){e[t].focus()}function c(e){l(e.currentTarget)}function u(e){var n=e.currentTarget,i=e.metaKey||e.altKey,o=n.parentNode.parentNode,a=t(r,o),c=[].indexOf.call(a,n);if(!i)switch(e.keyCode){case 13:case 32:l(n),e.preventDefault();break;case 37:case 38:s(a,0===c?a.length-1:c-1),e.preventDefault();break;case 39:case 40:s(a,c<a.length-1?c+1:0),e.preventDefault()}}function d(){a.length&&a.forEach(function(e){!function(e){t(r,e).forEach(function(e){e.addEventListener("click",c),e.addEventListener("keydown",u)})}(e)})}return d(),{init:d,destroy:function(){a.forEach(function(e){!function(e){t(r,e).forEach(function(e){e.removeEventListener("click",c),e.removeEventListener("keydown",u)})}(e)})}}},e.initBreadcrumb=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.breadcrumbSelector,i=void 0===n?".ecl-breadcrumb":n,o=e.expandButtonSelector,r=void 0===o?".ecl-breadcrumb__expand-btn":o,a=e.segmentSelector,l=void 0===a?".ecl-breadcrumb__segment":a,s=e.segmentFirstSelector,c=void 0===s?".ecl-breadcrumb__segment--first":s,u=e.segmentVisibleSelector,d=void 0===u?'.ecl-breadcrumb__segment:not(.ecl-breadcrumb__segment--first):not(.ecl-breadcrumb__segment--ellipsis):not(.ecl-breadcrumb__segment--last):not([aria-hidden="true"])':u,f=e.segmentHiddenSelector,v=void 0===f?'.ecl-breadcrumb__segment[aria-hidden="true"]:not(.ecl-breadcrumb__segment--ellipsis)':f,m=e.ellipsisSelector,h=void 0===m?".ecl-breadcrumb__segment--ellipsis":m;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;function p(e){var n=Math.floor(e.getBoundingClientRect().width),i=0;return t(l,e).forEach(function(e){i+=Math.ceil(e.getBoundingClientRect().width)}),i>=n}function g(e){var n=t(d,e);n.length>1&&(n[0].setAttribute("aria-hidden","true"),p(e)&&g(e))}function y(e,n){e.preventDefault(),t(l,n).forEach(function(e){e.setAttribute("aria-hidden","false")}),e.currentTarget.parentElement.setAttribute("aria-hidden","true")}function b(e){p(e)?g(e):function e(n){var i=t(v,n);i.length>0&&(i[i.length-1].setAttribute("aria-hidden","false"),p(n)?g(n):e(n))}(e),function(e){var n=t(v,e).length>0?"false":"true";t(h,e).forEach(function(e){e.setAttribute("aria-hidden",n)})}(e)}var _=t(i);function E(){_.length&&_.forEach(function(e){!function(e){t(c,e).forEach(function(e){var t=document.createElement("a");t.classList.add("ecl-link"),t.classList.add("ecl-link--inverted"),t.classList.add("ecl-link--standalone"),t.classList.add("ecl-breadcrumb__link"),t.classList.add("ecl-breadcrumb__expand-btn"),t.setAttribute("href","#"),t.innerHTML="…";var n=document.createElement("li");n.classList.add("ecl-breadcrumb__segment"),n.classList.add("ecl-breadcrumb__segment--ellipsis"),n.classList.add("ecl-u-aria"),n.setAttribute("aria-hidden","true"),n.appendChild(t),e.parentNode.insertBefore(n,e.nextSibling)})}(e),function(e){t(r,e).forEach(function(t){t.addEventListener("click",function(t){return y(t,e)})}),window.addEventListener("resize",k(function(){_.forEach(b)},100,{maxWait:300}))}(e),b(e)})}return E(),{init:E,destroy:function(){_.length&&_.forEach(function(e){!function(e){t(r,e).forEach(function(t){t.removeEventListener("click",function(t){return y(t,e)})}),window.removeEventListener("resize",k(function(){_.forEach(b)},100,{maxWait:300}))}(e)})}}},e.carousels=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).selectorId,n=void 0===e?"ecl-carousel":e;if(!("querySelector"in document&&"addEventListener"in window))return null;var i=0,o=document.getElementById(n),r=t(".ecl-carousel__item",o),a=o.querySelector(".ecl-carousel__list");function l(e){r[i].classList.remove("ecl-carousel__item--showing"),i=(e+r.length)%r.length,r[i].classList.add("ecl-carousel__item--showing")}function s(){var e=o.querySelector(".ecl-carousel__item").offsetWidth,t="translate3d("+-i*e+"px, 0, 0)";a.style.MozTransform=t,a.style.msTransform=t,a.style.OTransform=t,a.style.WebkitTransform=t,a.style.transform=t}function c(){o.querySelector(".ecl-carousel__meta-slide").textContent=i+1+" / "+r.length}function u(){var e=t("[data-image]");e&&e.forEach(function(e){return e.style.display="none"}),o.querySelector('[data-image="'+i+'"]').style.display="block"}function d(){l(i-1),s(),c(),u()}function f(){l(i+1),s(),c(),u()}var v=function(){return k(function(){s()},100,{maxWait:300})()};function m(){var e,t;(e=document.createElement("ul")).className="ecl-carousel__controls ecl-list--unstyled",e.innerHTML='\n      <li>\n        <button type="button" class="ecl-icon ecl-icon--left ecl-carousel__button ecl-carousel__button--previous">\n          <span class="ecl-u-sr-only">Previous</span></button>\n      </li>\n      <li>\n        <button type="button" class="ecl-icon ecl-icon--right ecl-carousel__button ecl-carousel__button--next">\n          <span class="ecl-u-sr-only">Next</span>\n        </button>\n      </li>\n    ',e.querySelector(".ecl-carousel__button--previous",".ecl-carousel__controls").addEventListener("click",d),e.querySelector(".ecl-carousel__button--next",".ecl-carousel__controls").addEventListener("click",f),o.querySelector(".ecl-carousel__list-wrapper").appendChild(e),(t=document.createElement("div")).setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true"),t.classList.add("ecl-carousel__meta-slide"),o.querySelector(".ecl-carousel__live-region").appendChild(t),l(0),c(),u(),window.addEventListener("resize",v)}return m(),{init:m,destroy:function(){var e,t;e=o.querySelector(".ecl-carousel__controls"),o.querySelector(".ecl-carousel__list-wrapper").removeChild(e),t=o.querySelector(".ecl-carousel__meta-slide"),o.querySelector(".ecl-carousel__live-region").removeChild(t),window.removeEventListener("resize",v)}}},e.contextualNavs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.selector,i=void 0===n?".ecl-context-nav":n,o=e.buttonSelector,r=void 0===o?".ecl-context-nav__more":o,a=e.hiddenElementsSelector,l=void 0===a?".ecl-context-nav__item--over-limit":a,s=e.classToRemove,c=void 0===s?"ecl-context-nav__item--over-limit":s,u=e.context,d=void 0===u?document:u;t(i,d).forEach(function(e){var n=d.querySelector(r);n&&n.addEventListener("click",function(){return function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.classToRemove,r=void 0===o?"ecl-context-nav__item--over-limit":o,a=i.hiddenElementsSelector,l=void 0===a?".ecl-context-nav__item--over-limit":a,s=i.context,c=void 0===s?document:s;e&&(t(l,c).forEach(function(e){e.classList.remove(r)}),n.parentNode.removeChild(n))}(e,n,{classToRemove:c,hiddenElementsSelector:l})})})},e.dropdown=function(e){var t=Array.prototype.slice.call(document.querySelectorAll(e));document.addEventListener("click",function(n){t.forEach(function(t){var i,o;if(i=t,o=n.target,!(i===o||16&i.compareDocumentPosition(o))){var r=document.querySelector(e+" > [aria-expanded=true]"),a=document.querySelector(e+" > [aria-hidden=false]");a&&(r.setAttribute("aria-expanded",!1),a.setAttribute("aria-hidden",!0))}})})},e.dialogs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.triggerElementsSelector,i=void 0===n?"[data-ecl-dialog]":n,o=e.dialogWindowId,r=void 0===o?"ecl-dialog":o,a=e.dialogOverlayId,l=void 0===a?"ecl-overlay":a;if(!("querySelector"in document&&"addEventListener"in window))return null;var s=t(i),c=document.getElementById(r),u=document.getElementById(l);if(!u){var d=document.createElement("div");d.setAttribute("id","ecl-overlay"),d.setAttribute("class","ecl-dialog__overlay"),d.setAttribute("aria-hidden","true"),document.body.appendChild(d),u=d}var f=[].slice.call(t('\n        a[href],\n        area[href],\n        input:not([disabled]),\n        select:not([disabled]),\n        textarea:not([disabled]),\n        button:not([disabled]),\n        [tabindex="0"]\n      ',c)),v=null,m=f[0],h=f[f.length-1];function p(e){e.preventDefault(),c.setAttribute("aria-hidden",!0),u.setAttribute("aria-hidden",!0),v&&v.focus(),document.querySelector("body").classList.remove("ecl-u-disablescroll")}function g(e){switch(e.keyCode){case 9:if(1===f.length){e.preventDefault();break}e.shiftKey?document.activeElement===m&&(e.preventDefault(),h.focus()):document.activeElement===h&&(e.preventDefault(),m.focus());break;case 27:p()}}function y(e){e.preventDefault(),c.setAttribute("aria-hidden",!1),u.setAttribute("aria-hidden",!1),v=document.activeElement,m.focus(),u.addEventListener("click",p),c.addEventListener("keydown",g),document.querySelector("body").classList.add("ecl-u-disablescroll")}function b(){s.length&&(s.forEach(function(e){return e.addEventListener("click",y)}),t(".ecl-dialog__dismiss").forEach(function(e){e.addEventListener("click",p)}))}return b(),{init:b,destroy:function(){s.forEach(function(e){return e.removeEventListener("click",y)}),t(".ecl-dialog__dismiss").forEach(function(e){e.removeEventListener("click",p)})}}},e.toggleExpandable=w,e.initExpandables=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;e&&Array.prototype.slice.call(t.querySelectorAll(e)).forEach(function(e){return e.addEventListener("click",function(n){w(e,{context:t}),n.preventDefault()})})},e.fileUploads=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.selector,i=void 0===n?".ecl-file-upload":n,o=e.inputSelector,r=void 0===o?".ecl-file-upload__input":o,a=e.valueSelector,l=void 0===a?".ecl-file-upload__value":a,s=e.browseSelector,c=void 0===s?".ecl-file-upload__browse":s;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var u=t(i);function d(e){"files"in e.target&&t(l,e.target.parentNode).forEach(function(t){!function(e,t){if(0!==t.length){for(var n="",i=0;i<t.length;i+=1){var o=t[i];"name"in o&&(i>0&&(n+=", "),n+=o.name)}e.innerHTML=n}}(t,e.target.files)})}function f(e){var n=e.metaKey||e.altKey;t(r,e.target.parentNode).forEach(function(t){if(!n)switch(e.keyCode){case 13:case 32:e.preventDefault(),t.click()}})}function v(){u.length&&u.forEach(function(e){!function(e){t(r,e).forEach(function(e){e.addEventListener("change",d)}),t(c,e).forEach(function(e){e.addEventListener("keydown",f)})}(e)})}return v(),{init:v,destroy:function(){u.forEach(function(e){!function(e){t(r,e).forEach(function(e){e.removeEventListener("change",d)}),t(c,e).forEach(function(e){e.removeEventListener("keydown",f)})}(e)})}}},e.eclLangSelectPages=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.selector,i=void 0===n?".ecl-lang-select-page":n,o=e.toggleClass,r=void 0===o?"ecl-lang-select-page--dropdown":o,a=e.listSelector,l=void 0===a?".ecl-lang-select-page__list":a,s=e.dropdownSelector,c=void 0===s?".ecl-lang-select-page__dropdown":s,u=e.dropdownOnChange,d=void 0===u?void 0:u;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var f=t(i);function v(e){if(!e)return null;var n=t(l,e)[0];return e.classList.contains(r)?t(c,e)[0].offsetLeft+n.offsetWidth<e.offsetWidth&&e.classList.remove(r):n&&n.offsetLeft+n.offsetWidth>e.offsetWidth&&e.classList.add(r),!0}return f.forEach(function(e){if(v(e),d){var n=t(c,e)[0];n&&n.addEventListener("change",d)}}),void window.addEventListener("resize",k(function(){f.forEach(v)},100,{maxWait:300}))},e.initMessages=function(){Array.prototype.slice.call(document.getElementsByClassName("ecl-message__dismiss")).forEach(function(e){return e.addEventListener("click",function(){return function(e){e&&null!==e.parentNode&&e.parentNode.removeChild(e)}(e.parentElement)})})},e.navigationInpages=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.stickySelector,i=void 0===n?".ecl-inpage-navigation":n,o=e.spySelector,r=void 0===o?".ecl-inpage-navigation__link":o,a=e.spyClass,l=void 0===a?"ecl-inpage-navigation__link--is-active":a,s=e.spyActiveContainer,c=void 0===s?"ecl-inpage-navigation--visible":s,u=e.spyTrigger,d=void 0===u?".ecl-inpage-navigation__trigger":u,f=e.spyOffset,v=void 0===f?20:f,m=e.toggleSelector,h=void 0===m?".ecl-inpage-navigation__trigger":m,p=e.linksSelector,g=void 0===p?".ecl-inpage-navigation__link":p;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var y=void 0;function b(){var e,n=document.querySelector(i),o=n.querySelector(h),a=t(g,n);e=n,y=new L.Sticky(e),function(e){A.init({selector:r,activeClass:l,offset:v,callback:function(t){var n=document.querySelector(d);t?(e.classList.add(c),n.innerHTML=t.nav.innerHTML):(e.classList.remove(c),n.innerHTML="")}})}(n),o.addEventListener("click",function(e){C(o,{context:n}),e.preventDefault()}),a.forEach(function(e){return e.addEventListener("click",function(){C(o,{context:n,forceClose:!0})})})}return b(),{init:b,destroy:function(){A.destroy(),y&&y.remove()}}},e.megamenu=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.selector,i=void 0===n?".ecl-navigation-menu":n,o=e.toggleSelector,r=void 0===o?".ecl-navigation-menu__toggle":o,a=e.listSelector,l=void 0===a?".ecl-navigation-menu__root":a,s=e.linkSelector,c=void 0===s?".ecl-navigation-menu__link":s;t(i).forEach(function(e){var n=e.querySelector(r);n&&n.addEventListener("click",function(){return C(n,{context:e})});var i=e.querySelector(l);t(c,i).forEach(function(e){e.addEventListener("click",x(e,i)),e.addEventListener("keydown",function(e,t){return function(n){var i=e.parentElement,o=i.previousElementSibling||i.parentElement.lastElementChild,r=i.nextElementSibling||i.parentElement.firstElementChild;if(!n.metaKey&&!n.altKey)switch(n.keyCode){case 13:case 32:x(n.currentTarget,t)(n);break;case 37:case 38:n.preventDefault(),o.querySelector("a").focus();break;case 39:case 40:n.preventDefault(),r.querySelector("a").focus()}}}(e,i))})})},e.navigationSide=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stickySelector,n=void 0===t?".ecl-side-navigation__toggle":t,i=e.activeSelector,o=void 0===i?".ecl-side-navigation__link--active":i;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;function r(){new T(n,{useStickyClasses:!0})}function a(){var e;r(),(e=document.getElementsByClassName(n.substring(1))[0])&&e.addEventListener("click",function(e){"false"===e.target.getAttribute("aria-expanded")&&e.target.scrollIntoView()}),function(){var e=document.getElementsByClassName(o.substring(1))[0];if(e)for(var t=e;t;){if((t=t.parentNode).matches(".ecl-side-navigation__group")){var n=t.previousElementSibling;n.matches(".ecl-side-navigation__link")&&n.setAttribute("aria-expanded","true")}if(t.matches(".ecl-side-navigation"))break}}()}return a(),{init:a}},e.eclTables=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||document.getElementsByClassName("ecl-table--responsive");[].forEach.call(e,function(e){for(var t=[],n="",i=0,o=[],r=e.querySelectorAll("tbody tr"),a=e.querySelectorAll("thead tr th"),l=e.querySelectorAll("thead tr")[0].querySelectorAll("th").length-1,s=e.querySelectorAll("tbody tr")[0].querySelectorAll("td").length,c=-1,u=0;u<a.length;u+=1)a[u].getAttribute("colspan")&&(c=u),t[u]=[],t[u]=a[u].textContent;if(-1!==c){n=t.splice(c,1),i=c,o=e.querySelectorAll("th[colspan]")[0].getAttribute("colspan");for(var d=0;d<o;d+=1)t.splice(i+d,0,t[l+d]),t.splice(l+1+d,1)}[].forEach.call(r,function(e){for(var i=0;i<s;i+=1)if(""===t[i]||" "===t[i]?e.querySelectorAll("td")[i].setAttribute("class","ecl-table__heading"):e.querySelectorAll("td")[i].setAttribute("data-th",t[i]),-1!==c){var r=e.querySelectorAll("td")[c];r.setAttribute("class","ecl-table__group-label"),r.setAttribute("data-th-group",n);for(var a=1;a<o;a+=1)e.querySelectorAll("td")[c+a].setAttribute("class","ecl-table__group_element")}})})},e.tabs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.selector,i=void 0===n?".ecl-tabs":n,o=e.tablistSelector,r=void 0===o?".ecl-tabs__tablist":o,a=e.tabpanelSelector,l=void 0===a?".ecl-tabs__tabpanel":a,s=e.tabelementsSelector,c=void 0===s?r+" li":s;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var u=t(i);function d(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=t(r+" li",e.parentElement.parentElement),o=t(l,e.parentElement.parentElement);i.forEach(function(e){e.setAttribute("tabindex",-1),e.removeAttribute("aria-selected")}),o.forEach(function(e){e.setAttribute("aria-hidden","true")}),e.setAttribute("tabindex",0),e.setAttribute("aria-selected","true"),n&&e.focus(),document.getElementById(e.getAttribute("aria-controls")).removeAttribute("aria-hidden")}function f(e){d(e.currentTarget),e.preventDefault()}function v(e){var t=e.currentTarget,n=t.previousElementSibling||t.parentElement.lastElementChild,i=t.nextElementSibling||t.parentElement.firstElementChild;if(!e.metaKey&&!e.altKey)switch(e.keyCode){case 37:case 38:d(n),e.preventDefault();break;case 39:case 40:d(i),e.preventDefault()}}function m(e){t(c,e).forEach(function(e){e.addEventListener("click",f),e.addEventListener("keydown",v)})}function h(e){t(c,e).forEach(function(e){e.removeEventListener("click",f),e.removeEventListener("keydown",v)})}function p(){u.forEach(m)}return p(),{init:p,destroy:function(){u.forEach(h)}}},e.timelines=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.selector,n=void 0===t?".ecl-timeline":t,i=e.buttonSelector,o=void 0===i?".ecl-timeline__button":i,r=e.hiddenElementsSelector,a=void 0===r?".ecl-timeline__item--over-limit":r,l=e.classToRemove,s=void 0===l?"ecl-timeline__item--over-limit":l,c=e.context,u=void 0===c?document:c;Array.prototype.slice.call(u.querySelectorAll(n)).forEach(function(e){var t=u.querySelector(o);t&&t.addEventListener("click",function(){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.classToRemove,o=void 0===i?"ecl-timeline__item--over-limit":i,r=n.hiddenElementsSelector,a=void 0===r?".ecl-timeline__item--over-limit":r;e&&(Array.prototype.slice.call(e.querySelectorAll(a)).forEach(function(e){e.classList.remove(o)}),t.parentNode.removeChild(t))}(e,t,{classToRemove:s,hiddenElementsSelector:a})})})},e}({});
