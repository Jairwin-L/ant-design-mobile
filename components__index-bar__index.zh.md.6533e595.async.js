(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var n=a("/r+8"),l=a("Vhn3"),r=a("ahKI"),c=a.n(r),i=a("sj4x"),o=a("wOSa");a("P1/K"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,r=e.showCopy,m=void 0===r||r,d=Object(o["useCopy"])(),u=Object(l["a"])(d,2),s=u[0],E=u[1];return c.a.createElement("div",{className:"__dumi-default-code-block"},c.a.createElement(i["a"],Object(n["a"])({},i["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,n=e.style,l=e.tokens,r=e.getLineProps,i=e.getTokenProps;return c.a.createElement("pre",{className:a,style:n},m&&c.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:()=>s(t)}),l.map(((e,t)=>c.a.createElement("div",r({line:e,key:t}),e.map(((e,t)=>c.a.createElement("span",i({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("/r+8"),a("ahKI"),a("2Pr/")},IdDL:function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),r=a("bIC1"),c=a.n(r);a("P2Nc");function i(e,t){return s(e)||u(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function u(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(o){i=!0,l=o}finally{try{c||null==a["return"]||a["return"]()}finally{if(i)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),o=i(r,2),m=o[0],d=o[1],u=Object(n["useState"])(!1),s=i(u,2),E=s[0],h=s[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){d(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":m||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},N0lm:function(e,t,a){"use strict";var n=a("/r+8"),l=a("ahKI"),r=a.n(l);a("tCeM");t["a"]=e=>r.a.createElement("div",Object(n["a"])({className:"__dumi-default-alert"},e))},P2Nc:function(e,t,a){},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return g}));var n=a("ahKI"),l=a.n(n),r=a("Vhn3"),c=a("/7QA"),i=a("9kvl"),o=a("wOSa"),m=a("Bjia");a("YWOM");function d(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var u=e=>{var t=Object(n["useRef"])(null),a=Object(n["useContext"])(o["context"]),u=a.locale,s=Object(o["useLocaleProps"])(u,e),E=(null===i["a"]||void 0===i["a"]?void 0:i["a"].location.hash)==="#".concat(s.identifier),h=1===Object.keys(s.sources).length,v=Object(o["useMotions"])(s.motions||[],t.current),f=Object(r["a"])(v,2),b=f[0],p=f[1],g=Object(o["useCopy"])(),w=Object(r["a"])(g,2),x=w[0],k=w[1],_=Object(n["useState"])("_"),y=Object(r["a"])(_,2),O=y[0],N=y[1],j=Object(n["useState"])(d(O,s.sources[O])),I=Object(r["a"])(j,2),L=I[0],C=I[1],A=s.sources[O][L]||s.sources[O].content,S=Object(o["useTSPlaygroundUrl"])(u,A),Z=Object(o["usePrefersColor"])(),M=Object(r["a"])(Z,1);M[0];function V(e){N(e),C(d(e,s.sources[e]))}return l.a.createElement("div",{style:s.style,className:[s.className,"__dumi-default-previewer",E?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:s.identifier,"data-debug":s.debug||void 0},l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":s.title},s.title&&l.a.createElement(o["AnchorLink"],{to:"#".concat(s.identifier)},s.title),s.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:s.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},s.debug&&l.a.createElement("span",{className:"debug-badge"},"Debug Only"),s.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:p,onClick:()=>b()}),l.a.createElement("div",{className:"spacer"}),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":k,onClick:()=>x(A)}),"tsx"===L&&l.a.createElement(o["Link"],{target:"_blank",to:S},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&l.a.createElement(c["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:O,onChange:V},Object.keys(s.sources).map((e=>l.a.createElement(c["Tabs"].Tab,{title:"_"===e?"index.".concat(d(e,s.sources[e])):e,key:e})))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(m["a"],{code:A,lang:L,showCopy:!1}))))},s=u,E=(a("oeoJ"),a("IzxR")),h=a.n(E),v=(a("q9vG"),e=>{var t=e.url,a=Object(n["useState"])(Math.random()),i=Object(r["a"])(a,2),m=i[0],d=i[1],u=Object(o["usePrefersColor"])(),s=Object(r["a"])(u,1),E=s[0],v=Object(n["useContext"])(o["context"]),g=v.config.mode;return Object(n["useEffect"])((()=>{d(Math.random())}),[E]),l.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":g},l.a.createElement("iframe",{title:"dumi-previewer",src:t,key:m}),l.a.createElement("div",{className:"adm-doc-device-action"},l.a.createElement("a",{onClick:()=>d(Math.random())},f),l.a.createElement(c["Popover"],{content:l.a.createElement(h.a,{value:t,size:96}),trigger:"click"},l.a.createElement("a",null,b)),l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},p)))}),f=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),b=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),p=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),g="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(o["useDemoUrl"])(e.identifier);return l.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},l.a.createElement("div",{className:"adm-doc-previewer-source"},l.a.createElement(s,e)),l.a.createElement("div",{className:"adm-doc-previewer-device"},l.a.createElement(v,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),r=a("eqKt"),c=a.n(r),i=e=>l.a.createElement("a",{className:c.a.card,href:e.link,target:"_blank"},e.image&&l.a.createElement("img",{src:e.image,alt:e.title}),l.a.createElement("div",{className:c.a.content},l.a.createElement("div",{className:c.a.title},e.title),l.a.createElement("div",{className:c.a.description},e.description)));t["a"]=i},h4Tt:function(e,t,a){"use strict";a.r(t);var n=a("ahKI"),l=a.n(n),r=a("wOSa"),c=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX")),i=(a("gKi5"),a("Bjia"),a("0m3q"),a("IdDL")),o=l.a.memo((e=>{var t=e.demos,a=t["index-bar-demo1"].component,n=t["index-bar-demo2"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"indexbar-\u5e8f\u5217"},l.a.createElement(r["AnchorLink"],{to:"#indexbar-\u5e8f\u5217","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"IndexBar \u5e8f\u5217"),l.a.createElement("p",null,"\u6839\u636e\u5b57\u6bcd A \uff5e Z \u6392\u5217\u5185\u5bb9\u3002"),l.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.a.createElement("p",null,"\u9002\u7528\u4e8e\u5217\u8868\u7684\u5206\u7c7b\u663e\u793a\u548c\u5feb\u901f\u5b9a\u4f4d\u3002"),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),l.a.createElement(c["default"],t["index-bar-demo1"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("p",null)),l.a.createElement(c["default"],t["index-bar-demo2"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("p",null),l.a.createElement("h2",{id:"indexbar"},l.a.createElement(r["AnchorLink"],{to:"#indexbar","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"IndexBar"),l.a.createElement("h3",{id:"\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"onIndexChange"),l.a.createElement("td",null,"\u5f53\u951a\u70b9\u53d8\u5316\u65f6\u56de\u8c03"),l.a.createElement("td",null,l.a.createElement("code",null,"(index: string) => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"sticky"),l.a.createElement("td",null,"\u662f\u5426\u5f00\u542f\u951a\u70b9\u81ea\u52a8\u5438\u9876"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"true"))))),l.a.createElement("h3",{id:"ref"},l.a.createElement(r["AnchorLink"],{to:"#ref","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Ref"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"scrollTo"),l.a.createElement("td",null,"\u6eda\u52a8\u5230\u6307\u5b9a\u951a\u70b9"),l.a.createElement("td",null,l.a.createElement("code",null,"(index: string) => void"))))),l.a.createElement("h3",{id:"css-\u53d8\u91cf"},l.a.createElement(r["AnchorLink"],{to:"#css-\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),l.a.createElement("th",null,"\u5168\u5c40\u53d8\u91cf"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"--sticky-offset-top"),l.a.createElement("td",null,"\u951a\u70b9\u81ea\u52a8\u5438\u9876\u65f6\u4e0e\u9876\u90e8\u7684\u8ddd\u79bb"),l.a.createElement("td",null,l.a.createElement("code",null,"0")),l.a.createElement("td",null,"-")))),l.a.createElement("h2",{id:"indexbarpanel"},l.a.createElement(r["AnchorLink"],{to:"#indexbarpanel","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"IndexBar.Panel"),l.a.createElement("h3",{id:"\u5c5e\u6027-1"},l.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"brief"),l.a.createElement("td",null,"\u53f3\u4fa7\u7d22\u5f15\u6761\u4e2d\u7684\u663e\u793a\u5185\u5bb9"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,"\u9ed8\u8ba4\u53d6 ",l.a.createElement("code",null,"index")," \u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26")),l.a.createElement("tr",null,l.a.createElement("td",null,"index"),l.a.createElement("td",null,"\u7d22\u5f15\uff08\u4e0d\u53ef\u4ee5\u91cd\u590d\uff09"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"title"),l.a.createElement("td",null,"\u5de6\u4fa7\u4e3b\u5185\u5bb9\u533a\u7684\u5206\u7ec4\u6807\u9898"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,"\u9ed8\u8ba4\u53d6 ",l.a.createElement("code",null,"index"))))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:a})}},mVOg:function(e,t,a){"use strict";var n=a("Vhn3"),l=a("ahKI"),r=a.n(l),c=a("wOSa"),i=a("/7QA");t["a"]=()=>{var e=Object(l["useContext"])(c["context"]),t=e.locale,a=Object(l["useState"])(!1),o=Object(n["a"])(a,2),m=o[0],d=o[1];return r.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{d(!0)},onMouseLeave:()=>{d(!1)},style:{verticalAlign:"-0.125em"}},r.a.createElement(i["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:m,mode:"dark"},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){}}]);