(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[65],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var l=a("FfOG");a.d(t,"a",(function(){return l["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var l=a("/r+8"),n=a("Vhn3"),c=a("ahKI"),r=a.n(c),o=a("sj4x"),i=a("wOSa");a("P1/K"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,c=e.showCopy,u=void 0===c||c,m=Object(i["useCopy"])(),d=Object(n["a"])(m,2),s=d[0],E=d[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(o["a"],Object(l["a"])({},o["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,l=e.style,n=e.tokens,c=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:a,style:l},u&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:()=>s(t)}),n.map(((e,t)=>r.a.createElement("div",c({line:e,key:t}),e.map(((e,t)=>r.a.createElement("span",o({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("/r+8"),a("ahKI"),a("2Pr/")},IdDL:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),c=a("bIC1"),r=a.n(c);a("P2Nc");function o(e,t){return s(e)||d(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,n,c=[],r=!0,o=!1;try{for(a=a.call(e);!(r=(l=a.next()).done);r=!0)if(c.push(l.value),t&&c.length===t)break}catch(i){o=!0,n=i}finally{try{r||null==a["return"]||a["return"]()}finally{if(o)throw n}}return c}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(l["useRef"])(),c=Object(l["useState"])(!1),i=o(c,2),u=i[0],m=i[1],d=Object(l["useState"])(!1),s=o(d,2),E=s[0],h=s[1];return Object(l["useEffect"])((function(){var e=a.current,t=r()((function(){m(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":u||void 0,"data-right-folded":E||void 0},n.a.createElement("table",null,t)))};t["a"]=E},KfMh:function(e,t,a){"use strict";a.r(t);var l=a("ahKI"),n=a.n(l),c=a("wOSa"),r=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX")),o=(a("gKi5"),a("Bjia"),a("0m3q"),a("IdDL")),i=n.a.memo((e=>{var t=e.demos,a=t["input-demo1"].component,l=t["input-demo2"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"input"},n.a.createElement(c["AnchorLink"],{to:"#input","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Input"),n.a.createElement("p",null,"Entering content through the keyboard is the most basic form field wrapper."),n.a.createElement("h2",{id:"when-to-use"},n.a.createElement(c["AnchorLink"],{to:"#when-to-use","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"When to Use"),n.a.createElement("p",null,"It is generally used in form pages to collect information, and provides two types of text boxes and selection boxes."),n.a.createElement("p",null,"The ",n.a.createElement("code",null,"Input")," component is layout-independent. It only includes the most basic input box part. If you want to add borders, titles, or some operation buttons to it, you can use it with the ",n.a.createElement("code",null,"List")," or ",n.a.createElement("code",null,"Form")," components."),n.a.createElement("h2",{id:"demos"},n.a.createElement(c["AnchorLink"],{to:"#demos","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Demos")),n.a.createElement(r["default"],t["input-demo1"].previewerProps,n.a.createElement(a,null)),n.a.createElement(r["default"],t["input-demo2"].previewerProps,n.a.createElement(l,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"input-1"},n.a.createElement(c["AnchorLink"],{to:"#input-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Input"),n.a.createElement("h3",{id:"props"},n.a.createElement(c["AnchorLink"],{to:"#props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Props"),n.a.createElement(o["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"clearable"),n.a.createElement("td",null,"Whether to enable the clear icon, the input box will be cleared after clicking the clear icon"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultValue"),n.a.createElement("td",null,"The default value"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,"Whether it is disabled or not"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"id"),n.a.createElement("td",null,"The ",n.a.createElement("code",null,"id")," of the ",n.a.createElement("code",null,"input")," element, usually used with ",n.a.createElement("code",null,"label")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"max"),n.a.createElement("td",null,"Maximum value, only valid when ",n.a.createElement("code",null,"type")," is ",n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"min"),n.a.createElement("td",null,"Minimum value, only valid when ",n.a.createElement("code",null,"type")," is ",n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onChange"),n.a.createElement("td",null,"Triggered when the input content is changed"),n.a.createElement("td",null,n.a.createElement("code",null,"(value: string) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onClear"),n.a.createElement("td",null,"Triggered after clicking the clear button"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onEnterPress"),n.a.createElement("td",null,"The callback when Enter key is pressed"),n.a.createElement("td",null,n.a.createElement("code",null,"(e: React.KeyboardEvent<HTMLInputElement>) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onlyShowClearWhenFocus"),n.a.createElement("td",null,"If ",n.a.createElement("code",null,"true"),", the clear button will only be displayed when the input box is focused. If ",n.a.createElement("code",null,"false"),", the clear button will still be displayed after the input box loses focus."),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"placeholder"),n.a.createElement("td",null,"The prompt text"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"readOnly"),n.a.createElement("td",null,"Whether it is readonly or not"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"value"),n.a.createElement("td",null,"The input value"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")))),n.a.createElement("p",null,"In addition, the following native attributes are supported: ",n.a.createElement("code",null,"maxLength")," ",n.a.createElement("code",null,"minLength")," ",n.a.createElement("code",null,"max")," ",n.a.createElement("code",null,"min")," ",n.a.createElement("code",null,"autoComplete")," ",n.a.createElement("code",null,"autoFocus")," ",n.a.createElement("code",null,"enterKeyHint")," ",n.a.createElement("code",null,"pattern")," ",n.a.createElement("code",null,"inputMode")," ",n.a.createElement("code",null,"type")," ",n.a.createElement("code",null,"onFocus")," ",n.a.createElement("code",null,"onBlur")," ",n.a.createElement("code",null,"autoCapitalize")," ",n.a.createElement("code",null,"autoCorrect")," ",n.a.createElement("code",null,"onKeyDown")," ",n.a.createElement("code",null,"onKeyUp")," ",n.a.createElement("code",null,"onCompositionStart")," ",n.a.createElement("code",null,"onCompositionEnd")," ",n.a.createElement("code",null,"onClick")),n.a.createElement("h3",{id:"css-variables"},n.a.createElement(c["AnchorLink"],{to:"#css-variables","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"CSS Variables"),n.a.createElement(o["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"--color"),n.a.createElement("td",null,"Text color."),n.a.createElement("td",null,n.a.createElement("code",null,"var(--adm-color-text)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--font-size"),n.a.createElement("td",null,"Text font size."),n.a.createElement("td",null,n.a.createElement("code",null,"17px"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--placeholder-color"),n.a.createElement("td",null,"Placeholder text color."),n.a.createElement("td",null,n.a.createElement("code",null,"var(--adm-color-light)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--text-align"),n.a.createElement("td",null,"The alignment of text."),n.a.createElement("td",null,n.a.createElement("code",null,"left"))))),n.a.createElement("h3",{id:"ref"},n.a.createElement(c["AnchorLink"],{to:"#ref","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Ref"),n.a.createElement(o["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"blur"),n.a.createElement("td",null,"Let the input box lose focus"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"clear"),n.a.createElement("td",null,"Clear the input content"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"focus"),n.a.createElement("td",null,"Let the input box get focus"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"nativeElement"),n.a.createElement("td",null,"Native input element"),n.a.createElement("td",null,n.a.createElement("code",null,"HtmlInputElement")," | ",n.a.createElement("code",null,"null"))))),n.a.createElement("h2",{id:"faq"},n.a.createElement(c["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"FAQ"),n.a.createElement("h3",{id:"when-the-type-is-number-why-does-the-maxlength-limit-not-take-effect"},n.a.createElement(c["AnchorLink"],{to:"#when-the-type-is-number-why-does-the-maxlength-limit-not-take-effect","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"When the type is number, why does the maxLength limit not take effect?"),n.a.createElement("p",null,"In native ",n.a.createElement("code",null,"input"),", ",n.a.createElement("code",null,"maxlength")," only takes effect when ",n.a.createElement("code",null,"type")," is ",n.a.createElement("code",null,"text"),", ",n.a.createElement("code",null,"search"),", ",n.a.createElement("code",null,"url"),", ",n.a.createElement("code",null,"tel"),", ",n.a.createElement("code",null,"email"),", ",n.a.createElement("code",null,"password"),", please refer to ",n.a.createElement(c["Link"],{to:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-maxlength"},"MDN document"),"\u3002"),n.a.createElement("p",null,"If you need to limit the input box with number type, you can pass the ",n.a.createElement("code",null,"max")," ",n.a.createElement("code",null,"min")," prop."),n.a.createElement("h3",{id:"on-ios-devices-when-i-use-the-input-method-to-input-text-and-click-the-clear-button-why-does-the-input-box-lose-focus-sometimes"},n.a.createElement(c["AnchorLink"],{to:"#on-ios-devices-when-i-use-the-input-method-to-input-text-and-click-the-clear-button-why-does-the-input-box-lose-focus-sometimes","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"On iOS devices, when I use the input method to input text and click the clear button, why does the input box lose focus sometimes?"),n.a.createElement("p",null,"This is expected behavior, see this ",n.a.createElement(c["Link"],{to:"https://github.com/ant-design/ant-design-mobile/issues/5212"},"issue")," for details on why."),n.a.createElement("h3",{id:"under-ios-why-is-autofocus-set-but-still-cant-get-focus-automatically"},n.a.createElement(c["AnchorLink"],{to:"#under-ios-why-is-autofocus-set-but-still-cant-get-focus-automatically","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Under iOS, why is ",n.a.createElement("code",null,"autoFocus")," set but still can't get focus automatically?"),n.a.createElement("p",null,"This is expected behavior because the iOS system has limitations on focusing. See this ",n.a.createElement(c["Link"],{to:"https://github.com/ant-design/ant-design-mobile/issues/5256"},"issue")," for specific reasons."))))}));t["default"]=e=>{var t=n.a.useContext(c["context"]),a=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(i,{demos:a})}},N0lm:function(e,t,a){"use strict";var l=a("/r+8"),n=a("ahKI"),c=a.n(n);a("tCeM");t["a"]=e=>c.a.createElement("div",Object(l["a"])({className:"__dumi-default-alert"},e))},P2Nc:function(e,t,a){},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return g}));var l=a("ahKI"),n=a.n(l),c=a("Vhn3"),r=a("/7QA"),o=a("9kvl"),i=a("wOSa"),u=a("Bjia");a("YWOM");function m(e,t){var a,l=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return l||(l=t.tsx?"tsx":"jsx"),l}var d=e=>{var t=Object(l["useRef"])(null),a=Object(l["useContext"])(i["context"]),d=a.locale,s=Object(i["useLocaleProps"])(d,e),E=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(s.identifier),h=1===Object.keys(s.sources).length,p=Object(i["useMotions"])(s.motions||[],t.current),v=Object(c["a"])(p,2),f=v[0],b=v[1],g=Object(i["useCopy"])(),y=Object(c["a"])(g,2),w=y[0],x=y[1],k=Object(l["useState"])("_"),_=Object(c["a"])(k,2),O=_[0],N=_[1],I=Object(l["useState"])(m(O,s.sources[O])),L=Object(c["a"])(I,2),j=L[0],C=L[1],S=s.sources[O][j]||s.sources[O].content,T=Object(i["useTSPlaygroundUrl"])(d,S),A=Object(i["usePrefersColor"])(),M=Object(c["a"])(A,1);M[0];function V(e){N(e),C(m(e,s.sources[e]))}return n.a.createElement("div",{style:s.style,className:[s.className,"__dumi-default-previewer",E?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:s.identifier,"data-debug":s.debug||void 0},n.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":s.title},s.title&&n.a.createElement(i["AnchorLink"],{to:"#".concat(s.identifier)},s.title),s.description&&n.a.createElement("div",{dangerouslySetInnerHTML:{__html:s.description}})),n.a.createElement("div",{className:"__dumi-default-previewer-actions"},s.debug&&n.a.createElement("span",{className:"debug-badge"},"Debug Only"),s.motions&&n.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:b,onClick:()=>f()}),n.a.createElement("div",{className:"spacer"}),n.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":x,onClick:()=>w(S)}),"tsx"===j&&n.a.createElement(i["Link"],{target:"_blank",to:T},n.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),n.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&n.a.createElement(r["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:O,onChange:V},Object.keys(s.sources).map((e=>n.a.createElement(r["Tabs"].Tab,{title:"_"===e?"index.".concat(m(e,s.sources[e])):e,key:e})))),n.a.createElement("div",{className:"__dumi-default-previewer-source"},n.a.createElement(u["a"],{code:S,lang:j,showCopy:!1}))))},s=d,E=(a("oeoJ"),a("IzxR")),h=a.n(E),p=(a("q9vG"),e=>{var t=e.url,a=Object(l["useState"])(Math.random()),o=Object(c["a"])(a,2),u=o[0],m=o[1],d=Object(i["usePrefersColor"])(),s=Object(c["a"])(d,1),E=s[0],p=Object(l["useContext"])(i["context"]),g=p.config.mode;return Object(l["useEffect"])((()=>{m(Math.random())}),[E]),n.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":g},n.a.createElement("iframe",{title:"dumi-previewer",src:t,key:u}),n.a.createElement("div",{className:"adm-doc-device-action"},n.a.createElement("a",{onClick:()=>m(Math.random())},v),n.a.createElement(r["Popover"],{content:n.a.createElement(h.a,{value:t,size:96}),trigger:"click"},n.a.createElement("a",null,f)),n.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},b)))}),v=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),f=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),b=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),g="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(i["useDemoUrl"])(e.identifier);return n.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},n.a.createElement("div",{className:"adm-doc-previewer-source"},n.a.createElement(s,e)),n.a.createElement("div",{className:"adm-doc-previewer-device"},n.a.createElement(p,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),c=a("eqKt"),r=a.n(c),o=e=>n.a.createElement("a",{className:r.a.card,href:e.link,target:"_blank"},e.image&&n.a.createElement("img",{src:e.image,alt:e.title}),n.a.createElement("div",{className:r.a.content},n.a.createElement("div",{className:r.a.title},e.title),n.a.createElement("div",{className:r.a.description},e.description)));t["a"]=o},mVOg:function(e,t,a){"use strict";var l=a("Vhn3"),n=a("ahKI"),c=a.n(n),r=a("wOSa"),o=a("/7QA");t["a"]=()=>{var e=Object(n["useContext"])(r["context"]),t=e.locale,a=Object(n["useState"])(!1),i=Object(l["a"])(a,2),u=i[0],m=i[1];return c.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},style:{verticalAlign:"-0.125em"}},c.a.createElement(o["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:u,mode:"dark"},c.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){}}]);