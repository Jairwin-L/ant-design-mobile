(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var l=a("FfOG");a.d(t,"a",(function(){return l["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var l=a("/r+8"),n=a("Vhn3"),r=a("ahKI"),c=a.n(r),i=a("sj4x"),o=a("wOSa");a("P1/K"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,r=e.showCopy,m=void 0===r||r,d=Object(o["useCopy"])(),u=Object(n["a"])(d,2),s=u[0],E=u[1];return c.a.createElement("div",{className:"__dumi-default-code-block"},c.a.createElement(i["a"],Object(l["a"])({},i["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,l=e.style,n=e.tokens,r=e.getLineProps,i=e.getTokenProps;return c.a.createElement("pre",{className:a,style:l},m&&c.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:()=>s(t)}),n.map(((e,t)=>c.a.createElement("div",r({line:e,key:t}),e.map(((e,t)=>c.a.createElement("span",i({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("/r+8"),a("ahKI"),a("2Pr/")},IdDL:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),r=a("bIC1"),c=a.n(r);a("P2Nc");function i(e,t){return s(e)||u(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function u(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,n,r=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(l=a.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(o){i=!0,n=o}finally{try{c||null==a["return"]||a["return"]()}finally{if(i)throw n}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(l["useRef"])(),r=Object(l["useState"])(!1),o=i(r,2),m=o[0],d=o[1],u=Object(l["useState"])(!1),s=i(u,2),E=s[0],h=s[1];return Object(l["useEffect"])((function(){var e=a.current,t=c()((function(){d(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":m||void 0,"data-right-folded":E||void 0},n.a.createElement("table",null,t)))};t["a"]=E},N0lm:function(e,t,a){"use strict";var l=a("/r+8"),n=a("ahKI"),r=a.n(n);a("tCeM");t["a"]=e=>r.a.createElement("div",Object(l["a"])({className:"__dumi-default-alert"},e))},Ofqy:function(e,t,a){"use strict";a.r(t);var l=a("ahKI"),n=a.n(l),r=a("wOSa"),c=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX")),i=(a("gKi5"),a("Bjia"),a("0m3q"),a("IdDL")),o=n.a.memo((e=>{var t=e.demos,a=t["list-demo1"].component,l=t["list-demo3"].component,o=t["list-demo2"].component,m=t["list-demo4"].component,d=t["list-demo5"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"list"},n.a.createElement(r["AnchorLink"],{to:"#list","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"List"),n.a.createElement("p",null,"Generic list."),n.a.createElement("h2",{id:"when-to-use"},n.a.createElement(r["AnchorLink"],{to:"#when-to-use","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"When to Use"),n.a.createElement("p",null,"Carry text, lists, pictures, paragraphs, etc. cleanly and efficiently in the form of a list."),n.a.createElement("h2",{id:"demos"},n.a.createElement(r["AnchorLink"],{to:"#demos","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Demos")),n.a.createElement(c["default"],t["list-demo1"].previewerProps,n.a.createElement(a,null)),n.a.createElement(c["default"],t["list-demo3"].previewerProps,n.a.createElement(l,null)),n.a.createElement(c["default"],t["list-demo2"].previewerProps,n.a.createElement(o,null)),n.a.createElement(c["default"],t["list-demo4"].previewerProps,n.a.createElement(m,null)),n.a.createElement(c["default"],t["list-demo5"].previewerProps,n.a.createElement(d,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"list-1"},n.a.createElement(r["AnchorLink"],{to:"#list-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"List"),n.a.createElement("h3",{id:"props"},n.a.createElement(r["AnchorLink"],{to:"#props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Props"),n.a.createElement(i["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"header"),n.a.createElement("td",null,"The title of list."),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"mode"),n.a.createElement("td",null,"Support two modes: default and card."),n.a.createElement("td",null,n.a.createElement("code",null,"'default' | 'card'")),n.a.createElement("td",null,n.a.createElement("code",null,"'default'"))))),n.a.createElement("h3",{id:"css-variables"},n.a.createElement(r["AnchorLink"],{to:"#css-variables","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"CSS Variables"),n.a.createElement(i["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"--active-background-color"),n.a.createElement("td",null,"The background color when clicked."),n.a.createElement("td",null,n.a.createElement("code",null,"var(--adm-border-color)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--align-items"),n.a.createElement("td",null,"The ",n.a.createElement(r["Link"],{to:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"},"align-item")," of the list item"),n.a.createElement("td",null,n.a.createElement("code",null,"center"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--border-bottom"),n.a.createElement("td",null,"Border style of the list bottom"),n.a.createElement("td",null,n.a.createElement("code",null,"solid 1px var(--adm-border-color)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--border-inner"),n.a.createElement("td",null,"Border style of the list item bottom"),n.a.createElement("td",null,n.a.createElement("code",null,"solid 1px var(--adm-border-color)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--border-top"),n.a.createElement("td",null,"Border style of the list top"),n.a.createElement("td",null,n.a.createElement("code",null,"solid 1px var(--adm-border-color)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--extra-max-width"),n.a.createElement("td",null,"The max width of the extra part"),n.a.createElement("td",null,n.a.createElement("code",null,"70%"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--font-size"),n.a.createElement("td",null,"The font-size of the list body"),n.a.createElement("td",null,n.a.createElement("code",null,"17px"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--header-font-size"),n.a.createElement("td",null,"The font-size of the header"),n.a.createElement("td",null,n.a.createElement("code",null,"15px"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--padding-left"),n.a.createElement("td",null,"The padding-left of list item and header"),n.a.createElement("td",null,n.a.createElement("code",null,"12px"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--padding-right"),n.a.createElement("td",null,"The padding-right of list item and header"),n.a.createElement("td",null,n.a.createElement("code",null,"12px"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--prefix-padding-right"),n.a.createElement("td",null,"The padding-right of the prefix part"),n.a.createElement("td",null,n.a.createElement("code",null,"12px"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--prefix-width"),n.a.createElement("td",null,"Width of the prefix part."),n.a.createElement("td",null,n.a.createElement("code",null,"auto"))))),n.a.createElement("h3",{id:"ref"},n.a.createElement(r["AnchorLink"],{to:"#ref","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Ref"),n.a.createElement(i["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"nativeElement"),n.a.createElement("td",null,"Native div element"),n.a.createElement("td",null,n.a.createElement("code",null,"HTMLDivElement")," | ",n.a.createElement("code",null,"null"))))),n.a.createElement("h2",{id:"listitem"},n.a.createElement(r["AnchorLink"],{to:"#listitem","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"List.Item"),n.a.createElement("h3",{id:"props-1"},n.a.createElement(r["AnchorLink"],{to:"#props-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Props"),n.a.createElement(i["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"arrow"),n.a.createElement("td",null,"Whether to show the arrow icon on the right side, also supports passing ",n.a.createElement("code",null,"ReactNode")," to customize the icon."),n.a.createElement("td",null,n.a.createElement("code",null,"boolean | ReactNode")),n.a.createElement("td",null,"same as ",n.a.createElement("code",null,"clickable"))),n.a.createElement("tr",null,n.a.createElement("td",null,"children"),n.a.createElement("td",null,"The main content area in the middle of the list item."),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"clickable"),n.a.createElement("td",null,"Whether to show click effect."),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"Defaults to ",n.a.createElement("code",null,"true")," when the ",n.a.createElement("code",null,"onClick")," prop is present, otherwise defaults to ",n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"description"),n.a.createElement("td",null,"The description area in the lower middle of the list item."),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,"Is the list item disabled"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"extra"),n.a.createElement("td",null,"The right area of the list item."),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onClick"),n.a.createElement("td",null,"The click event of the list item. When the ",n.a.createElement("code",null,"onClick")," property is set, the list item will have click effect."),n.a.createElement("td",null,n.a.createElement("code",null,"(e: React.MouseEvent) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"prefix"),n.a.createElement("td",null,"The left area of the list item."),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"title"),n.a.createElement("td",null,"The title area in the upper middle of the list item."),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")))),n.a.createElement("h3",{id:"css-variables-1"},n.a.createElement(r["AnchorLink"],{to:"#css-variables-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"CSS Variables"),n.a.createElement("p",null,"Support following css variables in List: ",n.a.createElement("code",null,"--prefix-width"),", ",n.a.createElement("code",null,"--active-background-color")," and ",n.a.createElement("code",null,"--align-items")),n.a.createElement("h2",{id:"faq"},n.a.createElement(r["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"FAQ"),n.a.createElement("h3",{id:"whether-to-support-virtualized-list"},n.a.createElement(r["AnchorLink"],{to:"#whether-to-support-virtualized-list","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Whether to support virtualized list?"),n.a.createElement("p",null,"List will not support virtualized list, you can implement it via using ",n.a.createElement(r["Link"],{to:"https://github.com/bvaughn/react-virtualized"},"react-virtualized"),"."),n.a.createElement("h3",{id:"whether-to-support-drag-and-drop-the-sorting"},n.a.createElement(r["AnchorLink"],{to:"#whether-to-support-drag-and-drop-the-sorting","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Whether to support drag and drop the sorting?"),n.a.createElement("p",null,"List will not support Drag and drop the sorting, you can implement it via using ",n.a.createElement(r["Link"],{to:"https://github.com/atlassian/react-beautiful-dnd"},"react-beautiful-dnd"),"."))))}));t["default"]=e=>{var t=n.a.useContext(r["context"]),a=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(o,{demos:a})}},P2Nc:function(e,t,a){},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return g}));var l=a("ahKI"),n=a.n(l),r=a("Vhn3"),c=a("/7QA"),i=a("9kvl"),o=a("wOSa"),m=a("Bjia");a("YWOM");function d(e,t){var a,l=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return l||(l=t.tsx?"tsx":"jsx"),l}var u=e=>{var t=Object(l["useRef"])(null),a=Object(l["useContext"])(o["context"]),u=a.locale,s=Object(o["useLocaleProps"])(u,e),E=(null===i["a"]||void 0===i["a"]?void 0:i["a"].location.hash)==="#".concat(s.identifier),h=1===Object.keys(s.sources).length,p=Object(o["useMotions"])(s.motions||[],t.current),v=Object(r["a"])(p,2),f=v[0],b=v[1],g=Object(o["useCopy"])(),w=Object(r["a"])(g,2),k=w[0],y=w[1],x=Object(l["useState"])("_"),N=Object(r["a"])(x,2),_=N[0],O=N[1],L=Object(l["useState"])(d(_,s.sources[_])),j=Object(r["a"])(L,2),C=j[0],I=j[1],T=s.sources[_][C]||s.sources[_].content,A=Object(o["useTSPlaygroundUrl"])(u,T),S=Object(o["usePrefersColor"])(),z=Object(r["a"])(S,1);z[0];function M(e){O(e),I(d(e,s.sources[e]))}return n.a.createElement("div",{style:s.style,className:[s.className,"__dumi-default-previewer",E?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:s.identifier,"data-debug":s.debug||void 0},n.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":s.title},s.title&&n.a.createElement(o["AnchorLink"],{to:"#".concat(s.identifier)},s.title),s.description&&n.a.createElement("div",{dangerouslySetInnerHTML:{__html:s.description}})),n.a.createElement("div",{className:"__dumi-default-previewer-actions"},s.debug&&n.a.createElement("span",{className:"debug-badge"},"Debug Only"),s.motions&&n.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:b,onClick:()=>f()}),n.a.createElement("div",{className:"spacer"}),n.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":y,onClick:()=>k(T)}),"tsx"===C&&n.a.createElement(o["Link"],{target:"_blank",to:A},n.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),n.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&n.a.createElement(c["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:_,onChange:M},Object.keys(s.sources).map((e=>n.a.createElement(c["Tabs"].Tab,{title:"_"===e?"index.".concat(d(e,s.sources[e])):e,key:e})))),n.a.createElement("div",{className:"__dumi-default-previewer-source"},n.a.createElement(m["a"],{code:T,lang:C,showCopy:!1}))))},s=u,E=(a("oeoJ"),a("IzxR")),h=a.n(E),p=(a("q9vG"),e=>{var t=e.url,a=Object(l["useState"])(Math.random()),i=Object(r["a"])(a,2),m=i[0],d=i[1],u=Object(o["usePrefersColor"])(),s=Object(r["a"])(u,1),E=s[0],p=Object(l["useContext"])(o["context"]),g=p.config.mode;return Object(l["useEffect"])((()=>{d(Math.random())}),[E]),n.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":g},n.a.createElement("iframe",{title:"dumi-previewer",src:t,key:m}),n.a.createElement("div",{className:"adm-doc-device-action"},n.a.createElement("a",{onClick:()=>d(Math.random())},v),n.a.createElement(c["Popover"],{content:n.a.createElement(h.a,{value:t,size:96}),trigger:"click"},n.a.createElement("a",null,f)),n.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},b)))}),v=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),f=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),b=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),g="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(o["useDemoUrl"])(e.identifier);return n.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},n.a.createElement("div",{className:"adm-doc-previewer-source"},n.a.createElement(s,e)),n.a.createElement("div",{className:"adm-doc-previewer-device"},n.a.createElement(p,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),r=a("eqKt"),c=a.n(r),i=e=>n.a.createElement("a",{className:c.a.card,href:e.link,target:"_blank"},e.image&&n.a.createElement("img",{src:e.image,alt:e.title}),n.a.createElement("div",{className:c.a.content},n.a.createElement("div",{className:c.a.title},e.title),n.a.createElement("div",{className:c.a.description},e.description)));t["a"]=i},mVOg:function(e,t,a){"use strict";var l=a("Vhn3"),n=a("ahKI"),r=a.n(n),c=a("wOSa"),i=a("/7QA");t["a"]=()=>{var e=Object(n["useContext"])(c["context"]),t=e.locale,a=Object(n["useState"])(!1),o=Object(l["a"])(a,2),m=o[0],d=o[1];return r.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{d(!0)},onMouseLeave:()=>{d(!1)},style:{verticalAlign:"-0.125em"}},r.a.createElement(i["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:m,mode:"dark"},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){}}]);