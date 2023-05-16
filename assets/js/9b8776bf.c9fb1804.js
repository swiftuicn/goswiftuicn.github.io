"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6554],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,y=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[f]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(1163),i=(n(9496),n(9613));const a={title:"SwiftUI \u81ea\u5b9a\u4e49\u5b57\u4f53\u5b9e\u73b0\u81ea\u9002\u5e94\u5927\u5c0f\uff08Dynamic Type\uff09",description:"\u5728 SwiftUI \u4e2d\u4f7f\u7528 Dynamic Type \u5b9e\u73b0\u81ea\u5b9a\u4e49\u5b57\u4f53\u6839\u636e\u8bbf\u95ee\u8bbe\u5907\u81ea\u9002\u5e94\u5927\u5c0f\u3002",authors:["swift"],tags:["SwiftUI","dynamic type","\u5b57\u4f53"]},o=void 0,c={permalink:"/blog/2022/10/17/swiftui-scale-custom-font-dynamic-type",source:"@site/blog/2022-10-17-swiftui-scale-custom-font-dynamic-type/index.md",title:"SwiftUI \u81ea\u5b9a\u4e49\u5b57\u4f53\u5b9e\u73b0\u81ea\u9002\u5e94\u5927\u5c0f\uff08Dynamic Type\uff09",description:"\u5728 SwiftUI \u4e2d\u4f7f\u7528 Dynamic Type \u5b9e\u73b0\u81ea\u5b9a\u4e49\u5b57\u4f53\u6839\u636e\u8bbf\u95ee\u8bbe\u5907\u81ea\u9002\u5e94\u5927\u5c0f\u3002",date:"2022-10-17T00:00:00.000Z",formattedDate:"2022\u5e7410\u670817\u65e5",tags:[{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"dynamic type",permalink:"/blog/tags/dynamic-type"},{label:"\u5b57\u4f53",permalink:"/blog/tags/\u5b57\u4f53"}],readingTime:3.265,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"SwiftUI \u81ea\u5b9a\u4e49\u5b57\u4f53\u5b9e\u73b0\u81ea\u9002\u5e94\u5927\u5c0f\uff08Dynamic Type\uff09",description:"\u5728 SwiftUI \u4e2d\u4f7f\u7528 Dynamic Type \u5b9e\u73b0\u81ea\u5b9a\u4e49\u5b57\u4f53\u6839\u636e\u8bbf\u95ee\u8bbe\u5907\u81ea\u9002\u5e94\u5927\u5c0f\u3002",authors:["swift"],tags:["SwiftUI","dynamic type","\u5b57\u4f53"]},prevItem:{title:"Swift \u4e2d JSON \u65e5\u671f\u4e0e Swift \u539f\u751f\u65e5\u671f Date \u7c7b\u578b\u4e92\u76f8\u8f6c\u6362",permalink:"/blog/2022/11/22/swift-json-date-decoding-encoding"},nextItem:{title:"\u89e3\u51b3 SwiftUI \u4e2d\u52a8\u6001\u65e5\u671f/\u65f6\u95f4\u5012\u8ba1\u65f6\u6587\u672c\u6296\u52a8",permalink:"/blog/2022/10/06/Dynamic-Dates-With-Monospaced-Digits"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l},f="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dynamic Type"),"\u662f Apple \u9884\u5b9a\u4e49\u7684\u4f20\u8fbe",(0,i.kt)("strong",{parentName:"p"},"\u8bed\u4e49\u542b\u4e49"),"\u7684\u6587\u672c\u6837\u5f0f\u3002"),(0,i.kt)("p",null,"Dynamic Type \u7684\u597d\u5904\u662f\u5b83\u4f1a\u6839\u636e",(0,i.kt)("strong",{parentName:"p"},"\u5f53\u524d\u7684\u53ef\u8bbf\u95ee\u6027\u8bbe\u7f6e\u81ea\u52a8\u653e\u5927\u548c\u7f29\u5c0f\u6587\u672c\u5927\u5c0f"),"\u3002"))}u.isMDXComponent=!0}}]);