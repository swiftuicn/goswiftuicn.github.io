"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9094],{9613:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=s(r),g=i,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||a;return r?n.createElement(m,o(o({ref:t},f),{},{components:r})):n.createElement(m,o({ref:t},f))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9325:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(1163),i=(r(9496),r(9613));const a={title:"\u7528\u4ee3\u7801\u793a\u4f8b\u89e3\u91ca Swift \u4e2d\u7684 Ranges",description:"Swift\u4e2d\u7684\u8303\u56f4\uff08Ranges\uff09\u8ba9\u4f60\u80fd\u591f\u9009\u62e9\u5b57\u7b26\u4e32\u3001\u96c6\u5408\u7b49\u90e8\u5206\u5185\u5bb9\u3002\u5b83\u4eec\u662fSwift\u4e2d\u5bf9Objective-C\u7684NSRange\u7684\u53d8\u79cd\uff0c\u7528\u6cd5\u6709\u6240\u4e0d\u540c\u3002\u4e86\u89e3\u66f4\u591a\u8bf7\u770b\u8fd9\u7bc7\u535a\u6587\u3002",authors:["swift"],tags:["iOS","Swift"]},o=void 0,c={permalink:"/blog/2023/05/17/swift-ranges-explained",source:"@site/blog/2023-05-17-swift-ranges-explained/index.md",title:"\u7528\u4ee3\u7801\u793a\u4f8b\u89e3\u91ca Swift \u4e2d\u7684 Ranges",description:"Swift\u4e2d\u7684\u8303\u56f4\uff08Ranges\uff09\u8ba9\u4f60\u80fd\u591f\u9009\u62e9\u5b57\u7b26\u4e32\u3001\u96c6\u5408\u7b49\u90e8\u5206\u5185\u5bb9\u3002\u5b83\u4eec\u662fSwift\u4e2d\u5bf9Objective-C\u7684NSRange\u7684\u53d8\u79cd\uff0c\u7528\u6cd5\u6709\u6240\u4e0d\u540c\u3002\u4e86\u89e3\u66f4\u591a\u8bf7\u770b\u8fd9\u7bc7\u535a\u6587\u3002",date:"2023-05-17T00:00:00.000Z",formattedDate:"2023\u5e745\u670817\u65e5",tags:[{label:"iOS",permalink:"/blog/tags/i-os"},{label:"Swift",permalink:"/blog/tags/swift"}],readingTime:6.62,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"\u7528\u4ee3\u7801\u793a\u4f8b\u89e3\u91ca Swift \u4e2d\u7684 Ranges",description:"Swift\u4e2d\u7684\u8303\u56f4\uff08Ranges\uff09\u8ba9\u4f60\u80fd\u591f\u9009\u62e9\u5b57\u7b26\u4e32\u3001\u96c6\u5408\u7b49\u90e8\u5206\u5185\u5bb9\u3002\u5b83\u4eec\u662fSwift\u4e2d\u5bf9Objective-C\u7684NSRange\u7684\u53d8\u79cd\uff0c\u7528\u6cd5\u6709\u6240\u4e0d\u540c\u3002\u4e86\u89e3\u66f4\u591a\u8bf7\u770b\u8fd9\u7bc7\u535a\u6587\u3002",authors:["swift"],tags:["iOS","Swift"]},nextItem:{title:"\u5728SwiftUI\u4e2d\u4f7f\u7528CoordinateSpace\u5b9e\u73b0\u89c6\u5dee\u6807\u9898\u6548\u679c",permalink:"/blog/2023/05/16/parallax-header-effect-in-swiftui-using-coordinatespace"}},l={authorsImageUrls:[void 0]},s=[],f={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Swift \u4e2d\u7684\u8303\u56f4\uff08Ranges\uff09\u5141\u8bb8\u6211\u4eec\u9009\u62e9\u5b57\u7b26\u4e32\u3001\u96c6\u5408\u548c\u5176\u4ed6\u7c7b\u578b\u7684\u90e8\u5206\u5185\u5bb9\u3002\u5b83\u4eec\u662f\u6211\u4eec\u4ece Objective-C \u4e2d\u719f\u6089\u7684 NSRange \u7684 Swift \u53d8\u4f53\uff0c\u5c3d\u7ba1\u5728\u4f7f\u7528\u4e0a\u6709\u6240\u4e0d\u540c\uff0c\u6211\u5c06\u5728\u672c\u7bc7\u535a\u6587\u4e2d\u89e3\u91ca\u6e05\u695a\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528\u8303\u56f4\u8fd0\u7b97\u7b26\uff0c\u8303\u56f4\u4f7f\u6211\u4eec\u80fd\u591f\u7f16\u5199\u4f18\u96c5\u7684 Swift \u4ee3\u7801\u3002\u4f60\u7b2c\u4e00\u6b21\u4f7f\u7528\u8303\u56f4\u53ef\u80fd\u662f\u56e0\u4e3a\u4f60\u9700\u8981\u4ece\u5b57\u7b26\u4e32\u4e2d\u9009\u62e9\u4e00\u6bb5\u5b57\u7b26\uff0c\u4f46\u662f\u5b9e\u9645\u4e0a\u4f60\u53ef\u4ee5\u505a\u7684\u8fdc\u4e0d\u6b62\u8fd9\u4e9b\uff01"))}u.isMDXComponent=!0}}]);