(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[162],{"0m3q":function(e,a,t){"use strict";t("ahKI")},"2Pr/":function(e,a,t){},"60ow":function(e,a,t){},"9kvl":function(e,a,t){"use strict";var n=t("FfOG");t.d(a,"a",(function(){return n["b"]}));t("bCY9")},Bjia:function(e,a,t){"use strict";var n=t("/r+8"),c=t("Vhn3"),r=t("ahKI"),l=t.n(r),i=t("sj4x"),o=t("wOSa");t("P1/K"),t("60ow");a["a"]=e=>{var a=e.code,t=e.lang,r=e.showCopy,s=void 0===r||r,m=Object(o["useCopy"])(),d=Object(c["a"])(m,2),u=d[0],v=d[1];return l.a.createElement("div",{className:"__dumi-default-code-block"},l.a.createElement(i["a"],Object(n["a"])({},i["b"],{code:a,language:t,theme:void 0}),(e=>{var t=e.className,n=e.style,c=e.tokens,r=e.getLineProps,i=e.getTokenProps;return l.a.createElement("pre",{className:t,style:n},s&&l.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":v,onClick:()=>u(a)}),c.map(((e,a)=>l.a.createElement("div",r({line:e,key:a}),e.map(((e,a)=>l.a.createElement("span",i({token:e,key:a}))))))))})))}},DgDr:function(e,a,t){"use strict";t("/r+8"),t("ahKI"),t("2Pr/")},N0lm:function(e,a,t){"use strict";var n=t("/r+8"),c=t("ahKI"),r=t.n(c);t("tCeM");a["a"]=e=>r.a.createElement("div",Object(n["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,a,t){"use strict"},YWOM:function(e,a,t){},ekZX:function(e,a,t){"use strict";t.r(a),t.d(a,"ACTIVE_MSG_TYPE",(function(){return g}));var n=t("ahKI"),c=t.n(n),r=t("Vhn3"),l=t("/7QA"),i=t("9kvl"),o=t("wOSa"),s=t("Bjia");t("YWOM");function m(e,a){var t,n=null===(t=e.match(/\.(\w+)$/))||void 0===t?void 0:t[1];return n||(n=a.tsx?"tsx":"jsx"),n}var d=e=>{var a=Object(n["useRef"])(null),t=Object(n["useContext"])(o["context"]),d=t.locale,u=Object(o["useLocaleProps"])(d,e),v=(null===i["a"]||void 0===i["a"]?void 0:i["a"].location.hash)==="#".concat(u.identifier),h=1===Object.keys(u.sources).length,E=Object(o["useMotions"])(u.motions||[],a.current),p=Object(r["a"])(E,2),b=p[0],f=p[1],g=Object(o["useCopy"])(),w=Object(r["a"])(g,2),_=w[0],O=w[1],j=Object(n["useState"])("_"),k=Object(r["a"])(j,2),N=k[0],x=k[1],y=Object(n["useState"])(m(N,u.sources[N])),C=Object(r["a"])(y,2),V=C[0],Z=C[1],M=u.sources[N][V]||u.sources[N].content,I=Object(o["useTSPlaygroundUrl"])(d,M),L=Object(o["usePrefersColor"])(),A=Object(r["a"])(L,1);A[0];function P(e){x(e),Z(m(e,u.sources[e]))}return c.a.createElement("div",{style:u.style,className:[u.className,"__dumi-default-previewer",v?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:u.identifier,"data-debug":u.debug||void 0},c.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":u.title},u.title&&c.a.createElement(o["AnchorLink"],{to:"#".concat(u.identifier)},u.title),u.description&&c.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.description}})),c.a.createElement("div",{className:"__dumi-default-previewer-actions"},u.debug&&c.a.createElement("span",{className:"debug-badge"},"Debug Only"),u.motions&&c.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:f,onClick:()=>b()}),c.a.createElement("div",{className:"spacer"}),c.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":O,onClick:()=>_(M)}),"tsx"===V&&c.a.createElement(o["Link"],{target:"_blank",to:I},c.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),c.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&c.a.createElement(l["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:N,onChange:P},Object.keys(u.sources).map((e=>c.a.createElement(l["Tabs"].Tab,{title:"_"===e?"index.".concat(m(e,u.sources[e])):e,key:e})))),c.a.createElement("div",{className:"__dumi-default-previewer-source"},c.a.createElement(s["a"],{code:M,lang:V,showCopy:!1}))))},u=d,v=(t("oeoJ"),t("IzxR")),h=t.n(v),E=(t("q9vG"),e=>{var a=e.url,t=Object(n["useState"])(Math.random()),i=Object(r["a"])(t,2),s=i[0],m=i[1],d=Object(o["usePrefersColor"])(),u=Object(r["a"])(d,1),v=u[0],E=Object(n["useContext"])(o["context"]),g=E.config.mode;return Object(n["useEffect"])((()=>{m(Math.random())}),[v]),c.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":g},c.a.createElement("iframe",{title:"dumi-previewer",src:a,key:s}),c.a.createElement("div",{className:"adm-doc-device-action"},c.a.createElement("a",{onClick:()=>m(Math.random())},p),c.a.createElement(l["Popover"],{content:c.a.createElement(h.a,{value:a,size:96}),trigger:"click"},c.a.createElement("a",null,b)),c.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer"},f)))}),p=c.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),b=c.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),f=c.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),g="dumi:scroll-into-demo";a["default"]=e=>{var a,t=Object(o["useDemoUrl"])(e.identifier);return c.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},c.a.createElement("div",{className:"adm-doc-previewer-source"},c.a.createElement(u,e)),c.a.createElement("div",{className:"adm-doc-previewer-device"},c.a.createElement(E,{url:null!==(a=e.demoUrl)&&void 0!==a?a:t})))}},eqKt:function(e,a,t){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,a,t){"use strict";var n=t("ahKI"),c=t.n(n),r=t("eqKt"),l=t.n(r),i=e=>c.a.createElement("a",{className:l.a.card,href:e.link,target:"_blank"},e.image&&c.a.createElement("img",{src:e.image,alt:e.title}),c.a.createElement("div",{className:l.a.content},c.a.createElement("div",{className:l.a.title},e.title),c.a.createElement("div",{className:l.a.description},e.description)));a["a"]=i},mVOg:function(e,a,t){"use strict";var n=t("Vhn3"),c=t("ahKI"),r=t.n(c),l=t("wOSa"),i=t("/7QA");a["a"]=()=>{var e=Object(c["useContext"])(l["context"]),a=e.locale,t=Object(c["useState"])(!1),o=Object(n["a"])(t,2),s=o[0],m=o[1];return r.a.createElement("a",{href:("zh"===a?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},style:{verticalAlign:"-0.125em"}},r.a.createElement(i["Popover"],{content:"zh"===a?"\u8bd5\u9a8c\u6027":"Experimental",visible:s,mode:"dark"},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,a,t){},q9vG:function(e,a,t){},qUTR:function(e,a,t){"use strict";t.r(a);var n=t("tGGB"),c=t("NUIj"),r=t.n(c),l=t("ahKI"),i=t.n(l),o=t("HIVr"),s=t("wOSa"),m=(t("N0lm"),t("TAbJ"),t("DgDr"),t("mVOg"),t("ekZX")),d=(t("gKi5"),t("Bjia")),u=(t("0m3q"),i.a.memo((e=>{var a=e.demos,c=Object(o["dynamic"])({loader:function(){var e=Object(n["a"])(r.a.mark((function e(){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(5),t.e(194),t.e(150)]).then(t.bind(null,"b6d3"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}(),loading:()=>null}),l=a["icon-demo-single"].component;return i.a.createElement(i.a.Fragment,null,i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"markdown"},i.a.createElement("h1",{id:"icon-\u56fe\u6807"},i.a.createElement(s["AnchorLink"],{to:"#icon-\u56fe\u6807","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"Icon \u56fe\u6807"),i.a.createElement("p",null,"\u56fe\u6807\u662f\u5728\u4e00\u4e2a\u5355\u72ec\u7684 npm \u5305\u4e2d\uff0c\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u56fe\u6807\uff0c\u9700\u8981\u5148\u5b89\u88c5\u5b83\uff1a"),i.a.createElement(d["a"],{code:"npm install --save antd-mobile-icons\n# or\nyarn add antd-mobile-icons\n# or\npnpm add antd-mobile-icons",lang:"bash"}),i.a.createElement("p",null,"\u7136\u540e\u4ece\u8fd9\u4e2a\u5305\u4e2d\u5f15\u5165\u4f60\u6240\u9700\u8981\u7684\u56fe\u6807\u5373\u53ef\uff1a"),i.a.createElement(d["a"],{code:"import { AntOutline } from 'antd-mobile-icons'",lang:"js"}),i.a.createElement("p",null,"\u7531\u4e8e\u4e3b\u6d41\u7684\u6784\u5efa\u5de5\u5177\u4f1a\u81ea\u52a8\u505a Tree-Shaking\uff0c\u6240\u4ee5\u6700\u7ec8\u88ab\u6253\u5305\u8fdb\u6765\u7684\u53ea\u6709\u4f60\u7528\u5230\u7684\u90a3\u4e9b\u56fe\u6807\uff0c\u4e0d\u5fc5\u62c5\u5fc3\u5305\u4f53\u79ef\u95ee\u9898\u3002"),i.a.createElement("h2",{id:"\u56fe\u6807\u5217\u8868"},i.a.createElement(s["AnchorLink"],{to:"#\u56fe\u6807\u5217\u8868","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u56fe\u6807\u5217\u8868")),i.a.createElement(c,null),i.a.createElement("div",{className:"markdown"},i.a.createElement("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},i.a.createElement(s["AnchorLink"],{to:"#\u4f7f\u7528\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u793a\u4f8b")),i.a.createElement(m["default"],a["icon-demo-single"].previewerProps,i.a.createElement(l,null))))})));a["default"]=e=>{var a=i.a.useContext(s["context"]),t=a.demos;return i.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&s["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),i.a.createElement(u,{demos:t})}},tCeM:function(e,a,t){}}]);