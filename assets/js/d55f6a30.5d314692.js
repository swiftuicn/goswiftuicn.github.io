"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9453],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=i,d=s["".concat(p,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(1163),i=(r(9496),r(9613));const o={slug:"Finally-Multiline-TextField-in-SwiftUI",title:"SwiftUI \u4e2d\u4f7f\u7528 TextField \u5b9e\u73b0\u591a\u884c\u6587\u672c\u6548\u679c",authors:["swift"],tags:["SwiftUI","TextField","iOS"]},a=void 0,l={permalink:"/blog/Finally-Multiline-TextField-in-SwiftUI",source:"@site/blog/2022-08-27-Finally-Multiline-TextField-in-SwiftUI/index.md",title:"SwiftUI \u4e2d\u4f7f\u7528 TextField \u5b9e\u73b0\u591a\u884c\u6587\u672c\u6548\u679c",description:"\u6211\u6709\u591a\u5c11\u6b21\u5c1d\u8bd5\u5728 Stackoverflow \u4e0a\u627e\u5230\u7b54\u6848\uff0c\u55ef\uff1f\u4e0d\u518d\u4f7f\u7528\u81ea\u5b9a\u4e49\u591a\u884c\u6587\u672c\u5b57\u6bb5TextEditor\u3002\u4eceiOS 16 \u5f00\u59cb\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528TextField\u6765\u5b9e\u73b0\u5b83\uff0c\u53ea\u9700\u6dfb\u52a0\u4e00\u4e2a\u65b0\u53c2\u6570axis\uff1a",date:"2022-08-27T00:00:00.000Z",formattedDate:"2022\u5e748\u670827\u65e5",tags:[{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"TextField",permalink:"/blog/tags/text-field"},{label:"iOS",permalink:"/blog/tags/i-os"}],readingTime:1.825,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{slug:"Finally-Multiline-TextField-in-SwiftUI",title:"SwiftUI \u4e2d\u4f7f\u7528 TextField \u5b9e\u73b0\u591a\u884c\u6587\u672c\u6548\u679c",authors:["swift"],tags:["SwiftUI","TextField","iOS"]},prevItem:{title:"\u5982\u4f55\u5728 Combine \u6846\u67b6\u4e2d\u4f7f\u7528 Swift \u4e2d async/await \u51fd\u6570",permalink:"/blog/bridge-async-await-to-combine-future"},nextItem:{title:"\u5982\u4f55\u5728 App Store \u4e0a\u83b7\u5f97\u63a8\u8350",permalink:"/blog/how-to-get-featured-on-the-app-store"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c},s="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6211\u6709\u591a\u5c11\u6b21\u5c1d\u8bd5\u5728 Stackoverflow \u4e0a\u627e\u5230",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/search?q=multiline+TextField+SwiftUI"},"\u7b54\u6848"),"\uff0c\u55ef\uff1f\u4e0d\u518d\u4f7f\u7528\u81ea\u5b9a\u4e49\u591a\u884c\u6587\u672c\u5b57\u6bb5",(0,i.kt)("inlineCode",{parentName:"p"},"TextEditor"),"\u3002\u4ece",(0,i.kt)("strong",{parentName:"p"},"iOS 16 \u5f00\u59cb\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528"),(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swiftui/textfield"},"TextField"),"\u6765\u5b9e\u73b0\u5b83\uff0c\u53ea\u9700\u6dfb\u52a0\u4e00\u4e2a\u65b0\u53c2\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"axis"),"\uff1a"))}f.isMDXComponent=!0}}]);