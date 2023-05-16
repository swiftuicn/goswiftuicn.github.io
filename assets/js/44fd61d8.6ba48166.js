"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3826],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,g=u["".concat(l,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(1163),i=(r(9496),r(9613));const o={title:"\u4fee\u590d iOS \u5c0f\u90e8\u4ef6\u4e2d\u6700\u5947\u602a\u7684\u9519\u8bef/\u5d29\u6e83\uff1f",description:"\u795e\u79d8\u7684\u5d29\u6e83\u548c ChatGPT \u6765\u62ef\u6551\u3002",authors:["swift"],tags:["Swift","iOS"]},a=void 0,c={permalink:"/blog/2023/02/20/the-weirdest-bugcrash-in-widgets",source:"@site/blog/2023-02-20-the-weirdest-bugcrash-in-widgets/index.md",title:"\u4fee\u590d iOS \u5c0f\u90e8\u4ef6\u4e2d\u6700\u5947\u602a\u7684\u9519\u8bef/\u5d29\u6e83\uff1f",description:"\u795e\u79d8\u7684\u5d29\u6e83\u548c ChatGPT \u6765\u62ef\u6551\u3002",date:"2023-02-20T00:00:00.000Z",formattedDate:"2023\u5e742\u670820\u65e5",tags:[{label:"Swift",permalink:"/blog/tags/swift"},{label:"iOS",permalink:"/blog/tags/i-os"}],readingTime:4.365,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"\u4fee\u590d iOS \u5c0f\u90e8\u4ef6\u4e2d\u6700\u5947\u602a\u7684\u9519\u8bef/\u5d29\u6e83\uff1f",description:"\u795e\u79d8\u7684\u5d29\u6e83\u548c ChatGPT \u6765\u62ef\u6551\u3002",authors:["swift"],tags:["Swift","iOS"]},prevItem:{title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u79fb\u9664List\u7684\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf",permalink:"/blog/2023/03/25/swiftui-list-remove-first-separator"},nextItem:{title:"\u5728 Swift App \u4e2d\u4f7f\u7528 JavaScript",permalink:"/blog/2023/02/10/javascript-in-swift"}},l={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'\u4eca\u5929\uff0c\u5f53\u6211\u6ce8\u610f\u5230 SwitchBuddy \u5012\u8ba1\u65f6\u5c0f\u90e8\u4ef6\u4e4b\u4e00\u51fa\u73b0\u95ee\u9898\u65f6\uff0c\u6211\u7684\u4e00\u5929\u53d8\u5f97\u76f8\u5f53\u7cdf\u7cd5\u3002\u6e38\u620f\u662f\u4eca\u5929\u63a8\u51fa\u7684\uff0c\u4f46\u5c0f\u5de5\u5177\u663e\u793a\u7684\u662f "\u660e\u5929"\u3002\u8d77\u521d\uff0c\u6211\u4ee5\u4e3a\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u7684\u5012\u8ba1\u65f6\u903b\u8f91\u53ea\u662f\u7a0d\u6709\u504f\u5dee\uff0c\u800c\u6211\u4e4b\u524d\u5e76\u6ca1\u6709\u6ce8\u610f\u5230\u3002'))}f.isMDXComponent=!0}}]);