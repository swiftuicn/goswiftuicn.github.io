"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[555],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=i,g=f["".concat(p,".").concat(m)]||f[m]||c[m]||o;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={slug:"supporting-password-autofill-for-ios-appilcations",title:"iOS \u5e94\u7528\u5b9e\u73b0\u5bc6\u7801\u81ea\u52a8\u586b\u5145",authors:["swift"],tags:["SwiftUI","\u5bc6\u7801","UIKit","iOS"]},a=void 0,l={permalink:"/blog/supporting-password-autofill-for-ios-appilcations",source:"@site/blog/2022-08-23-supporting-password-autofill-for-ios-appilcations/index.md",title:"iOS \u5e94\u7528\u5b9e\u73b0\u5bc6\u7801\u81ea\u52a8\u586b\u5145",description:"\u4e86\u89e3\u5982\u4f55\u5728 SwiftUI \u548c UIKit \u5b9e\u73b0 Apple \u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u3002",date:"2022-08-23T00:00:00.000Z",formattedDate:"2022\u5e748\u670823\u65e5",tags:[{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"\u5bc6\u7801",permalink:"/blog/tags/\u5bc6\u7801"},{label:"UIKit",permalink:"/blog/tags/ui-kit"},{label:"iOS",permalink:"/blog/tags/i-os"}],readingTime:3.405,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{slug:"supporting-password-autofill-for-ios-appilcations",title:"iOS \u5e94\u7528\u5b9e\u73b0\u5bc6\u7801\u81ea\u52a8\u586b\u5145",authors:["swift"],tags:["SwiftUI","\u5bc6\u7801","UIKit","iOS"]},nextItem:{title:"AppStore \u8d2d\u4e70\u6210\u529f\u540e\u9000\u6b3e\uff0c\u82f9\u679c\u662f\u5426\u4f1a\u4fdd\u7559\u4f63\u91d1\uff1f",permalink:"/blog/does-apple-keep-its-commission"}},p={authorsImageUrls:[void 0]},s=[{value:"\u4e86\u89e3\u5982\u4f55\u5728 SwiftUI \u548c UIKit \u5b9e\u73b0 Apple \u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u3002",id:"\u4e86\u89e3\u5982\u4f55\u5728-swiftui-\u548c-uikit-\u5b9e\u73b0-apple-\u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4e86\u89e3\u5982\u4f55\u5728-swiftui-\u548c-uikit-\u5b9e\u73b0-apple-\u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145"},"\u4e86\u89e3\u5982\u4f55\u5728 SwiftUI \u548c UIKit \u5b9e\u73b0 Apple \u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u3002"),(0,i.kt)("p",null,"Apple \u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u529f\u80fd\u5141\u8bb8\u7528\u6237\u5728\u4e0d\u540c\u8bbe\u5907\u4e0a\u767b\u5f55\u540c\u4e00\u4e2a\u5e10\u6237\uff0c\u800c\u65e0\u9700\u8bb0\u4f4f\u4ed6\u4eec\u7684\u51ed\u636e\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5728 Web \u5e94\u7528\u7a0b\u5e8f\u4e2d\u6ce8\u518c\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u751f\u6210\u5bc6\u7801\u5e76\u5c06\u51ed\u636e\u4fdd\u5b58\u5728\u4ed6\u4eec\u7684 iCloud \u94a5\u5319\u4e32\u4e2d\u3002\u5f53\u4ed6\u4eec\u5728\u67d0\u4e2a\u65f6\u5019\u8fd0\u884c\u672c\u673a\u5e94\u7528\u7a0b\u5e8f\u4ee5\u8bbf\u95ee\u540c\u4e00\u5e10\u6237\u65f6\uff0c\u8be5\u5e94\u7528\u7a0b\u5e8f\u4f1a\u5728\u5bc6\u7801 QuickType \u680f\u4e2d\u5efa\u8bae\u4e3a\u7f51\u7ad9\u5b58\u50a8\u7684\u51ed\u636e\u3002\u5728\u7528\u6237\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u540e\uff0c\u5047\u8bbe\u4f7f\u7528 Face ID\uff0c\u7cfb\u7edf\u4f1a\u9884\u5148\u586b\u5199\u51ed\u636e - \u56e0\u6b64\u65e0\u9700\u91cd\u65b0\u8f93\u5165\u5b83\u4eec\u3002"))}c.isMDXComponent=!0}}]);