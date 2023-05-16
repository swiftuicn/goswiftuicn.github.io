"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9804],{9613:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var a=r(9496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),l=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=l(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},v=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),u=l(r),v=n,m=u["".concat(p,".").concat(v)]||u[v]||f[v]||i;return r?a.createElement(m,o(o({ref:e},s),{},{components:r})):a.createElement(m,o({ref:e},s))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=v;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c[u]="string"==typeof t?t:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},7926:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(1163),n=(r(9496),r(9613));const i={title:"\u5728 Swift App \u4e2d\u4f7f\u7528 JavaScript",description:"\u6211\u5982\u4f55\u4f7f\u7528 JavaScriptCore \u5c06 JavaScript \u4f9d\u8d56\u9879\u6dfb\u52a0\u5230\u6211\u7684 iOS \u5e94\u7528\u7a0b\u5e8f\u4ee5\u4ece URL \u4e2d\u5220\u9664\u8ddf\u8e2a\u53c2\u6570\u3002",authors:["swift"],tags:["Swift","JavaScript"]},o=void 0,c={permalink:"/blog/2023/02/10/javascript-in-swift",source:"@site/blog/2023-02-10-javascript-in-swift/index.md",title:"\u5728 Swift App \u4e2d\u4f7f\u7528 JavaScript",description:"\u6211\u5982\u4f55\u4f7f\u7528 JavaScriptCore \u5c06 JavaScript \u4f9d\u8d56\u9879\u6dfb\u52a0\u5230\u6211\u7684 iOS \u5e94\u7528\u7a0b\u5e8f\u4ee5\u4ece URL \u4e2d\u5220\u9664\u8ddf\u8e2a\u53c2\u6570\u3002",date:"2023-02-10T00:00:00.000Z",formattedDate:"2023\u5e742\u670810\u65e5",tags:[{label:"Swift",permalink:"/blog/tags/swift"},{label:"JavaScript",permalink:"/blog/tags/java-script"}],readingTime:9.19,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"\u5728 Swift App \u4e2d\u4f7f\u7528 JavaScript",description:"\u6211\u5982\u4f55\u4f7f\u7528 JavaScriptCore \u5c06 JavaScript \u4f9d\u8d56\u9879\u6dfb\u52a0\u5230\u6211\u7684 iOS \u5e94\u7528\u7a0b\u5e8f\u4ee5\u4ece URL \u4e2d\u5220\u9664\u8ddf\u8e2a\u53c2\u6570\u3002",authors:["swift"],tags:["Swift","JavaScript"]},prevItem:{title:"\u4fee\u590d iOS \u5c0f\u90e8\u4ef6\u4e2d\u6700\u5947\u602a\u7684\u9519\u8bef/\u5d29\u6e83\uff1f",permalink:"/blog/2023/02/20/the-weirdest-bugcrash-in-widgets"},nextItem:{title:"Swift \u4e2d `#available` \u548c @available \u6709\u4ec0\u4e48\u533a\u522b",permalink:"/blog/2022/12/19/swift-available-vs-available"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l},u="wrapper";function f(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728 iOS \u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u4f7f\u7528 C\u3001C++\u3001Objective-C\u3001Objective-C++ \u6216 JavaScript \u7f16\u5199\u7684\u4ee3\u7801\u5728\u6280\u672f\u4e0a\u76f8\u5f53\u5bb9\u6613\u3002\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 JavaScriptCore \u4ece Swift \u8c03\u7528 JavaScript \u4ee3\u7801\u3002\u4f8b\u5982\uff0c\u6211\u5c06\u901a\u8fc7\u5411\u6211\u7684",(0,n.kt)("a",{parentName:"p",href:"https://douglashill.co/reading-app/"},"iOS \u9605\u8bfb\u5e94\u7528\u7a0b\u5e8f"),"\u6dfb\u52a0 JavaScript \u4f9d\u8d56\u9879\u6765\u4ece URL \u4e2d\u5220\u9664\u8ddf\u8e2a\u53c2\u6570\u7684\u6b65\u9aa4\u3002"))}f.isMDXComponent=!0}}]);