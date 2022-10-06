"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||r;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"\u89e3\u51b3 SwiftUI \u4e2d\u52a8\u6001\u65e5\u671f/\u65f6\u95f4\u5012\u8ba1\u65f6\u6587\u672c\u6296\u52a8",description:"\u5728 SwiftUI \u4e2d\u4f7f\u7528 Text \u5b9e\u73b0\u65e5\u671f\u65f6\u95f4\u81ea\u52a8\u66f4\u65b0\u6216\u5012\u8ba1\u65f6\uff0c\u89e3\u51b3\u6587\u672c\u6296\u52a8\u95ee\u9898\u3002",authors:["swift"],tags:["swift","dynamic","SwiftUI","date","countdown"]},o=void 0,l={permalink:"/blog/2022/10/06/Dynamic-Dates-With-Monospaced-Digits",source:"@site/blog/2022-10-06-Dynamic-Dates-With-Monospaced-Digits/index.md",title:"\u89e3\u51b3 SwiftUI \u4e2d\u52a8\u6001\u65e5\u671f/\u65f6\u95f4\u5012\u8ba1\u65f6\u6587\u672c\u6296\u52a8",description:"\u5728 SwiftUI \u4e2d\u4f7f\u7528 Text \u5b9e\u73b0\u65e5\u671f\u65f6\u95f4\u81ea\u52a8\u66f4\u65b0\u6216\u5012\u8ba1\u65f6\uff0c\u89e3\u51b3\u6587\u672c\u6296\u52a8\u95ee\u9898\u3002",date:"2022-10-06T00:00:00.000Z",formattedDate:"2022\u5e7410\u67086\u65e5",tags:[{label:"swift",permalink:"/blog/tags/swift"},{label:"dynamic",permalink:"/blog/tags/dynamic"},{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"date",permalink:"/blog/tags/date"},{label:"countdown",permalink:"/blog/tags/countdown"}],readingTime:1.745,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"\u89e3\u51b3 SwiftUI \u4e2d\u52a8\u6001\u65e5\u671f/\u65f6\u95f4\u5012\u8ba1\u65f6\u6587\u672c\u6296\u52a8",description:"\u5728 SwiftUI \u4e2d\u4f7f\u7528 Text \u5b9e\u73b0\u65e5\u671f\u65f6\u95f4\u81ea\u52a8\u66f4\u65b0\u6216\u5012\u8ba1\u65f6\uff0c\u89e3\u51b3\u6587\u672c\u6296\u52a8\u95ee\u9898\u3002",authors:["swift"],tags:["swift","dynamic","SwiftUI","date","countdown"]},nextItem:{title:"SwiftUI \u81ea\u5b9a\u5de5\u5177\u680f",permalink:"/blog/2022/09/24/customizing-toolbars-in-swiftui"}},p={authorsImageUrls:[void 0]},c=[],s={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728 SwiftUI \u4e2d\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/SwiftUI/Text"},"Text"),"\u89c6\u56fe\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u65e5\u671f\u548c\u65f6\u95f4\u7684\u81ea\u52a8\u66f4\u65b0\u3002\u4e3a\u4e86\u5b9e\u73b0\u5b83\uff0c\u6211\u4eec\u53ef\u4ee5\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"Text"),"\u4e2d\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"relative"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"offset"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"timer"),"\u6837\u5f0f\u63d2\u503c\u65e5\u671f\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u80fd\u60f3\u901a\u8fc7\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"relative"),"\u6837\u5f0f\u63d2\u503c\u4e8b\u4ef6\u65e5\u671f\u6765\u663e\u793a\u79bb\u7279\u5b9a\u4e8b\u4ef6\u8fd8\u5269\u591a\u5c11\u65f6\u95f4\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Text"),"\u89c6\u56fe\u5c06\u663e\u793a\u5f53\u524d\u65e5\u671f\u548c\u65f6\u95f4\u4e0e\u6307\u5b9a\u65e5\u671f\u4e4b\u95f4\u7684\u5dee\u5f02\u3002SwiftUI\u5c06\u81ea\u52a8\u4fdd\u6301\u66f4\u65b0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Text("\\(eventDate, style: .relative) left until the event")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://nilcoalescing.com/static/blog/DynamicDatesWithMonospacedDigits/relative-date.Hqxan9mJ9FEe6QNP8b3enJhL6nSfaDVrtEKHWU6Tp-E.gif",alt:"\u4e00\u4e2aGIF\u663e\u793a\u6587\u672c\u89c6\u56fe\u4e2d\u7684\u65f6\u95f4\u4f1a\u81ea\u52a8\u66f4\u65b0\uff0c\u4f46\u7528\u6237\u754c\u9762\u4f1a\u6296\u52a8"})),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u6587\u672c\u4e2d\u7684\u65f6\u95f4\u4f1a\u52a8\u6001\u53d8\u5316\uff0c\u4f46\u968f\u7740\u6570\u5b57\u7684\u66f4\u65b0\uff0c\u7528\u6237\u754c\u9762\u4f1a\u6296\u52a8\u3002\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u662f\u56e0\u4e3a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6570\u5b57\u5177\u6709\u6bd4\u4f8b\u5bbd\u5ea6\uff0c\u800c\u4e0d\u540c\u7684\u6570\u5b57\u5360\u7528\u4e0d\u540c\u7684\u7a7a\u95f4\u91cf\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u5728\u65f6\u95f4\u53d8\u5316\u65f6\u963b\u6b62\u6587\u672c\u6296\u52a8\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swiftui/text/monospaceddigit()"},"monospacedDigit()"),"\u4fee\u9970\u7b26\u5e94\u7528\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"Text"),"\u3002\u5b83\u5c06\u5f3a\u5236\u6240\u6709\u6570\u5b57\u5b57\u7b26\u91c7\u7528\u76f8\u540c\u7684\u5bbd\u5ea6\uff0c\u4e0e\u5b83\u4eec\u663e\u793a\u7684\u6570\u5b57\u65e0\u5173\uff0c\u5176\u4ed6\u5b57\u7b26\u5c06\u4fdd\u6301\u4e0d\u53d8\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Text("\\(eventDate, style: .relative) left until the event")\n    .monospacedDigit()\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://nilcoalescing.com/static/blog/DynamicDatesWithMonospacedDigits/relative-date-monospaced-digit.ktmYWOWN6gbA_RtMkRyT2tKQO99ZsQ6hJ_AELUMQ0P4.gif",alt:"\u663e\u793a\u65f6\u95f4\u66f4\u65b0\u4e14\u6587\u672c\u5bbd\u5ea6\u4e0d\u53d8\u7684GIF"})),(0,i.kt)("p",null,"\u5e94\u7528monospacedDigit",(0,i.kt)("inlineCode",{parentName:"p"},"monospacedDigit()"),"\u4fee\u9970\u7b26\u540e\uff0c\u6587\u672c\u7684\u5bbd\u5ea6\u4e0d\u4f1a\u968f\u7740\u6bcf\u6b21\u66f4\u65b0\u65e5\u671f\u4e2d\u7684\u6570\u5b57\u800c\u53d1\u751f\u53d8\u5316\uff0c\u8fd9\u6837\u63d0\u5347\u4e86\u89c6\u89c9\u4f53\u9a8c\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"\u539f\u6587(\u82f1\u6587)\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://nilcoalescing.com/blog/DynamicDatesWithMonospacedDigits/"},"https://nilcoalescing.com/blog/DynamicDatesWithMonospacedDigits/")))))}m.isMDXComponent=!0}}]);