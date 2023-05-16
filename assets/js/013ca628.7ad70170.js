"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2222],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),u=r,d=f["".concat(s,".").concat(u)]||f[u]||m[u]||a;return n?i.createElement(d,o(o({ref:t},c),{},{components:n})):i.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(1163),r=(n(9496),n(9613));const a={title:"\u4f18\u5316 SwiftUI \u652f\u6301\u591a\u5e73\u53f0\u4ee3\u7801",description:"\u5bf9\u4e8e\u4f7f\u7528 SwiftUI \u7684\u591a\u5e73\u53f0\u9879\u76ee\uff0c\u5b83\u786e\u5b9e\u53ef\u4ee5\u663e\u8457\u52a0\u5feb\u4e3a\u591a\u4e2a\u5e73\u53f0\u5f00\u53d1\u7684\u901f\u5ea6\u3002\u7136\u800c\uff0c\u7531\u4e8e\u82f9\u679c\u7684\u5404\u4e2a\u5e73\u53f0\u4e4b\u95f4\u5b58\u5728\u8db3\u591f\u7684\u5dee\u5f02\uff0c\u56e0\u6b64\u6700\u7ec8\u4f60\u7684\u4ee3\u7801\u5e93\u5c06\u5145\u65a5\u7740#if os()\u5224\u65ad\u3002",authors:["swift"],tags:["SwiftUI","iOS"]},o=void 0,l={permalink:"/blog/2023/03/25/improve-multiplatform-swiftui-code",source:"@site/blog/2023-03-25-improve-multiplatform-swiftui-code/index.md",title:"\u4f18\u5316 SwiftUI \u652f\u6301\u591a\u5e73\u53f0\u4ee3\u7801",description:"\u5bf9\u4e8e\u4f7f\u7528 SwiftUI \u7684\u591a\u5e73\u53f0\u9879\u76ee\uff0c\u5b83\u786e\u5b9e\u53ef\u4ee5\u663e\u8457\u52a0\u5feb\u4e3a\u591a\u4e2a\u5e73\u53f0\u5f00\u53d1\u7684\u901f\u5ea6\u3002\u7136\u800c\uff0c\u7531\u4e8e\u82f9\u679c\u7684\u5404\u4e2a\u5e73\u53f0\u4e4b\u95f4\u5b58\u5728\u8db3\u591f\u7684\u5dee\u5f02\uff0c\u56e0\u6b64\u6700\u7ec8\u4f60\u7684\u4ee3\u7801\u5e93\u5c06\u5145\u65a5\u7740#if os()\u5224\u65ad\u3002",date:"2023-03-25T00:00:00.000Z",formattedDate:"2023\u5e743\u670825\u65e5",tags:[{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"iOS",permalink:"/blog/tags/i-os"}],readingTime:3.905,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"\u4f18\u5316 SwiftUI \u652f\u6301\u591a\u5e73\u53f0\u4ee3\u7801",description:"\u5bf9\u4e8e\u4f7f\u7528 SwiftUI \u7684\u591a\u5e73\u53f0\u9879\u76ee\uff0c\u5b83\u786e\u5b9e\u53ef\u4ee5\u663e\u8457\u52a0\u5feb\u4e3a\u591a\u4e2a\u5e73\u53f0\u5f00\u53d1\u7684\u901f\u5ea6\u3002\u7136\u800c\uff0c\u7531\u4e8e\u82f9\u679c\u7684\u5404\u4e2a\u5e73\u53f0\u4e4b\u95f4\u5b58\u5728\u8db3\u591f\u7684\u5dee\u5f02\uff0c\u56e0\u6b64\u6700\u7ec8\u4f60\u7684\u4ee3\u7801\u5e93\u5c06\u5145\u65a5\u7740#if os()\u5224\u65ad\u3002",authors:["swift"],tags:["SwiftUI","iOS"]},prevItem:{title:"\u5728SwiftUI\u4e2d\u4f7f\u7528CoordinateSpace\u5b9e\u73b0\u89c6\u5dee\u6807\u9898\u6548\u679c",permalink:"/blog/2023/05/16/parallax-header-effect-in-swiftui-using-coordinatespace"},nextItem:{title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u79fb\u9664List\u7684\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf",permalink:"/blog/2023/03/25/swiftui-list-remove-first-separator"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p},f="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 SwiftUI \u7684\u591a\u5e73\u53f0\u9879\u76ee\uff0c\u5b83\u786e\u5b9e\u53ef\u4ee5\u663e\u8457\u52a0\u5feb\u4e3a\u591a\u4e2a\u5e73\u53f0\u5f00\u53d1\u7684\u901f\u5ea6\u3002\u7136\u800c\uff0c\u7531\u4e8e\u82f9\u679c\u7684\u5404\u4e2a\u5e73\u53f0\u4e4b\u95f4\u5b58\u5728\u8db3\u591f\u7684\u5dee\u5f02\uff0c\u56e0\u6b64\u6700\u7ec8\u4f60\u7684\u4ee3\u7801\u5e93\u5c06\u5145\u65a5\u7740",(0,r.kt)("inlineCode",{parentName:"p"},"#if os()"),"\u5224\u65ad\u3002"),(0,r.kt)("p",null,"\u6211\u4ee5\u524d\u66fe\u5199\u8fc7\u5173\u4e8e\u5728 SwiftUI \u5e94\u7528\u7a0b\u5e8f\u4e2d\u5171\u4eab\u8de8\u5e73\u53f0\u4ee3\u7801\u7684\u6587\u7ae0\uff0c\u5176\u4e2d\u6211\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"UIPasteboard"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"NSPasteboard"),"\u4e4b\u95f4\u7684\u5fae\u5c0f\u5dee\u5f02\u4e3a\u4f8b\uff0c\u4ee5\u4f7f\u5e94\u7528\u7a0b\u5e8f\u5728 iOS \u548c macOS \u4e0a\u8fd0\u884c\u3002\u4f46\u662f\uff0c\u5e73\u53f0\u4e4b\u95f4\u7684 API \u5dee\u5f02\u5e76\u4e0d\u80fd\u89e3\u51b3\u60a8\u53ef\u80fd\u9700\u8981\u8fdb\u884c\u7279\u5b9a\u4e8e\u5e73\u53f0\u7684\u66f4\u6539\u7684\u6240\u6709\u60c5\u51b5\u3002\u4f8b\u5982\uff0cUIKit \u5728 watchOS \u548c tvOS \u4e0a\uff08\u90e8\u5206\uff09\u53ef\u7528\u3002\u800c SwiftUI \u5728\u6240\u6709\u5e73\u53f0\u4e0a\u90fd\u53ef\u7528\u3002"),(0,r.kt)("p",null,"\u6700\u597d\u7684\u5e73\u53f0\u7279\u5b9a\u5dee\u5f02\u793a\u4f8b\u4e4b\u4e00\u662f UI \u5e03\u5c40\u4ee3\u7801\u7684\u586b\u5145\u503c\u3002David Smith \u4e0a\u5468\u5199\u4e86\u4e00\u7bc7\u5173\u4e8e\u4ed6\u7684\u4e00\u4e2a\u624b\u8868\u5e94\u7528\u7a0b\u5e8f\u7684\u201c\u50cf\u7d20\u5b8c\u7f8e\u201d\u8bbe\u8ba1\u7684\u6587\u7ae0\u3002\u867d\u7136\u4ed6\u662f\u9488\u5bf9\u6bcf\u4e2a\u624b\u8868\u8bbe\u5907\u5c3a\u5bf8\u8c03\u6574 UI \u5e03\u5c40\u800c\u4e0d\u662f\u4e0d\u540c\u7684\u5e73\u53f0\uff0c\u4f46\u6838\u5fc3\u95ee\u9898\u662f\u76f8\u540c\u7684\uff1a\u5373\u4f7f\u662f\u81ea\u9002\u5e94\u7684 UI \u5e03\u5c40\u4ee3\u7801\u4e5f\u4e0d\u80fd\u603b\u662f\u901a\u7528\u5e94\u7528\u3002"),(0,r.kt)("p",null,"\u4f60\u6700\u7ec8\u5f97\u5230\u7684\u4ee3\u7801\u770b\u8d77\u6765\u50cf\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"var body: some View {\n    MyCustomView()\n    #if os(iOS)\n        .padding(10)\n    #elseif os(watchOS)\n        .padding(4)\n    #else // macOS\n        .padding(24)\n    #endif\n}\n")),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"#if os()"),"\u7f16\u5199\u7684\u4ee3\u7801\u5f88\u96be\u9605\u8bfb\uff0c\u589e\u52a0\u4e86\u8ba4\u77e5\u8d1f\u8377\uff0c\u5e76\u4e14 Xcode \u9ed8\u8ba4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"#if os()"),"\u683c\u5f0f\u975e\u5e38\u4e11\u964b\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684\u6269\u5c55\u6765\u907f\u514d\u5728\u6bcf\u4e2a\u5730\u65b9\u7f16\u5199",(0,r.kt)("inlineCode",{parentName:"p"},"#if os()"),"\uff0c\u540c\u65f6\u4f7f\u8fd9\u6bb5\u4ee3\u7801\u66f4\u6613\u4e8e\u9605\u8bfb\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"extension Double {\n    init(iOS: Self, watchOS: Self, macOS: Self) {\n        #if os(iOS)\n        self = iOS\n        #elseif os(watchOS)\n        self = watchOS\n        #else // macOS\n        self = macOS\n        #endif\n    }\n}\n")),(0,r.kt)("p",null,"\u7136\u540e\u6211\u4eec\u7684\u5e03\u5c40\u4ee3\u7801\u7b80\u5316\u4e3a\u4ee5\u4e0b\u5f62\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"var body: some View {\n    MyCustomView()\n        .padding(Double(iOS: 10, watchOS: 4, macOS: 24))\n}\n")),(0,r.kt)("p",null,"\u8fd9\u6837\uff0c\u6211\u4eec\u7acb\u5373\u6e05\u695a\u5730\u77e5\u9053\u6211\u4eec\u603b\u662f\u60f3\u7ed9\u8fd9\u4e2a\u89c6\u56fe\u4e00\u4e9b\u586b\u5145\uff0c\u800c\u503c\u662f\u7279\u5b9a\u4e8e\u5e73\u53f0\u7684\u3002\u5982\u679c\u60a8\u559c\u6b22\uff0c\u60a8\u8fd8\u53ef\u4ee5\u76f4\u63a5\u5c06\u6b64\u6a21\u5f0f\u6269\u5c55\u5230\u89c6\u56fe\u4fee\u9970\u7b26\u3002\u5982\u679c\u6211\u4eec\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},".padding()"),"\u8fd9\u6837\u505a\uff0c\u90a3\u4e48\u7ed3\u679c\u4ee3\u7801\u5c06\u8fdb\u4e00\u6b65\u7b80\u5316\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"var body: some View {\n    MyCustomView()\n        .padding(iOS: 10, watchOS: 4, macOS: 24)\n}\n")),(0,r.kt)("p",null,"\u6211\u4eec\u663e\u7136\u4e0d\u80fd\u5728\u6bcf\u4e2a\u5e73\u53f0\u5dee\u5f02\u7684\u573a\u666f\u4e2d\u90fd\u4f7f\u7528\u8fd9\u79cd\u6a21\u5f0f\uff0c\u4f46\u5b83\u786e\u5b9e\u53ef\u4ee5\u6539\u5584\u8bb8\u591a\u60c5\u51b5\u3002\u6211\u53d1\u73b0\u8fd9\u662f\u51cf\u5c11\u5728\u7279\u5b9a\u89c6\u56fe\u7684\u591a\u4e2a\u5e73\u53f0\u5171\u4eab\u5927\u90e8\u5206 UI \u4ee3\u7801\u65f6\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"#if os()"),"\u7684\u597d\u65b9\u6cd5\u3002\u4f46\u662f\uff0c\u5f53\u5fc5\u8981\u65f6\uff0c\u60a8\u6c38\u8fdc\u4e0d\u5e94\u8be5\u72b9\u8c6b\u5730\u4e3a\u7279\u5b9a\u5e73\u53f0\u6784\u5efa\u5b8c\u5168\u72ec\u7279\u7684\u89c6\u56fe\u3002\u5728\u8fd9\u4e9b\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"#if os()"),"\u68c0\u67e5\u548c\u5e73\u53f0\u5dee\u5f02\u63d0\u53d6\u5230\u4e00\u4e2a\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"View"),"\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"struct MyPlatformSpecificView: View {\n\n    var body: some View {\n    #if os(iOS)\n        self.body_iOS\n    #else // macOS\n        self.body_macOS\n    #endif\n    }\n\n    private var body_iOS: some View {\n        // the body for iOS only\n    }\n\n    private var body_macOS: some View {\n        // the body for macOS only\n    }\n}\n\nstruct ContentView: View {\n\n    var body: some View {\n        MyPlatformSpecificView()\n    }\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u7f16\u5199\u5927\u91cf\u7684\u591a\u5e73\u53f0 SwiftUI \u4ee3\u7801\uff0c\u6211\u5e0c\u671b\u8fd9\u4e9b\u5c0f\u6539\u8fdb\u4e5f\u80fd\u5bf9\u60a8\u7684\u4ee3\u7801\u4f18\u5316\u6709\u6240\u5e2e\u52a9\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u539f\u6587(\u82f1\u6587)\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://www.jessesquires.com/blog/2023/03/23/improve-multiplatform-swiftui-code/"},"https://www.jessesquires.com/blog/2023/03/23/improve-multiplatform-swiftui-code/")))))}m.isMDXComponent=!0}}]);