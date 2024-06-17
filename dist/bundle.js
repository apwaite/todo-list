(()=>{"use strict";var e={719:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const c=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=o(e,r),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),o=t(825),r=t.n(o),i=t(659),a=t.n(i),c=t(56),d=t.n(c),s=t(540),l=t.n(s),p=t(113),u=t.n(p),m=t(719),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),n()(m.A,h),m.A&&m.A.locals&&m.A.locals;console.log("todos connected!");console.log("projects connected!");const f=["Study","Shopping"],b=1,v="TODO Title",y="TODO Due Date",g="Completed",C="Priority",E=!1,x=()=>{const e=document.querySelector(".project-input");e.value="",e.placeholder="Enter new project title..."};console.log("Connected!"),function(){const e=document.getElementById("content");e.appendChild((()=>{const e=document.createElement("header"),n=document.createElement("h1");n.innerHTML='<i class="fas fa-clipboard-list"></i>',e.appendChild(n);const t=document.createElement("h1");t.classList.add("header-title"),t.innerText="Todo List",e.appendChild(t);const o=document.createElement("ul");return o.classList.add("menu"),o.innerHTML='<i class="fas fa-bars"></i>',e.appendChild(o),e})()),e.appendChild((()=>{const e=document.createElement("section");return e.classList.add("main"),e})()),e.appendChild((()=>{const e=document.createElement("footer"),n=document.createElement("p");n.classList.add("made-by"),n.innerText="Made with ";const t=document.createElement("p");t.classList.add("emoji"),t.innerHTML="&#10084;&#65039";const o=document.createElement("p");o.classList.add("name"),o.innerText="by Andrew",e.appendChild(n),e.appendChild(t),e.appendChild(o);const r=document.createElement("a");r.href="https://github.com/apwaite",r.target="_blank",o.appendChild(r);const i=document.createElement("i");return i.classList.add("fab","fa-github"),r.appendChild(i),e})());const n=document.querySelector(".main");n.appendChild((()=>{const e=document.createElement("nav"),n=document.createElement("div");n.classList.add("default-projects"),e.appendChild(n);const t=document.createElement("h2");t.classList.add("projects-title"),t.textContent="Projects",e.appendChild(t);const o=document.createElement("div");o.classList.add("project-list"),e.appendChild(o);const r=document.createElement("button");return r.classList.add("new-project-btn"),r.textContent="+ Add New Project",e.appendChild(r),e})()),n.appendChild((()=>{const e=document.createElement("div");return e.classList.add("todos"),e})()),document.getElementById("form-overlay").appendChild((()=>{const e=document.createElement("div");e.classList.add("form","form-styling");const n=document.createElement("h3");n.classList.add("project-title"),n.textContent="Project Title:",e.appendChild(n);const t=document.createElement("span");t.classList.add("close-form"),t.textContent="x",e.appendChild(t);const o=document.createElement("input");o.classList.add("project-input"),o.type="text",o.placeholder="Enter project title...",e.appendChild(o);const r=document.createElement("div");r.classList.add("button-container"),e.appendChild(r);const i=document.createElement("button");i.classList.add("clear-btn"),i.textContent="Clear",r.appendChild(i);const a=document.createElement("button");return a.classList.add("add-new-btn"),a.textContent="Add",r.appendChild(a),e})()),(()=>{const e=document.querySelector(".new-project-btn"),n=document.getElementById("form-overlay");e&&n?e.addEventListener("click",(()=>{console.log("Add new project button clicked!"),n.classList.toggle("show-overlay")})):console.error("Add Project button or form not found!")})(),(()=>{const e=document.querySelector(".menu"),n=document.querySelector("nav");e&&n?e.addEventListener("click",(()=>{"none"===n.style.display?(n.style.display="flex",n.classList.toggle("active")):n.style.display="none"})):console.error("Hamburger menu or navigation display not found!")})(),(()=>{const e=document.querySelector(".clear-btn"),n=document.querySelector(".project-input");e&&n?e.addEventListener("click",(()=>{console.log("Clear input field button clicked!"),x()})):console.error("Clear button or input field not found!")})(),(()=>{const e=document.querySelector(".add-new-btn"),n=document.querySelector(".project-input");e&&n?e.addEventListener("click",(()=>{var e;(e=n.value.trim())?(f.push(e),console.log("Project added: ",e),console.log("Current projects: ",f)):console.error("Project name cannot be empty."),n.value="",n.placeholder="Enter new project title...",(()=>{const e=document.querySelector(".default-projects");if(e){const[n]=f.slice(-1),t=f.length-1,o=document.createElement("button");o.classList.add("project-btn"),o.dataset.id=t,o.textContent=n,e.appendChild(o)}else console.error("Links element not found!")})(),document.getElementById("form-overlay").classList.toggle("show-overlay")})):console.error("Add button or project input not found!")})(),(()=>{const e=document.querySelector(".close-form"),n=document.getElementById("form-overlay");e&&n?e.addEventListener("click",(()=>{console.log("Close new project button clicked!"),n.classList.toggle("show-overlay"),x()})):console.error("Close button or form not found!")})(),(e=>{const n=document.querySelector(".project-list");n?e.forEach(((e,t)=>{const o=document.createElement("button");o.classList.add("project-btn"),o.textContent=e,o.dataset.id=t,n.appendChild(o)})):console.error("defaultProjects element not found!")})(f),(()=>{const e=document.querySelector(".todos"),n=document.createElement("div");n.classList.add("todo",`todo-${b}`),e.appendChild(n);const t=document.createElement("div");t.classList.add("todo-title"),n.appendChild(t);const o=document.createElement("p");o.classList.add("title"),o.textContent=`${v}`,t.appendChild(o);const r=document.createElement("div");r.classList.add("todo-due-date"),n.appendChild(r);const i=document.createElement("p");i.classList.add("due-date"),i.textContent=`${y}`,r.appendChild(i);const a=document.createElement("div");a.classList.add("todo-completed"),n.appendChild(a);const c=document.createElement("p");c.classList.add("completed"),c.textContent=`${g}`,a.appendChild(c);const d=document.createElement("div");d.classList.add("todo-priority"),n.appendChild(d);const s=document.createElement("p");s.classList.add("priority"),s.textContent=`${C}`,d.appendChild(s);const l=document.createElement("div");l.classList.add("todo-remove"),n.appendChild(l);const p=document.createElement("p");p.classList.add("remove"),p.textContent=`${E}`,l.appendChild(p)})()}()})()})();