"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5130],{9613:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var i=r(9496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=i.createContext({}),l=function(t){var e=i.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=l(t.components);return i.createElement(p.Provider,{value:e},t.children)},f="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),f=l(r),m=n,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return r?i.createElement(d,o(o({ref:e},c),{},{components:r})):i.createElement(d,o({ref:e},c))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[f]="string"==typeof t?t:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7984:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=r(1163),n=(r(9496),r(9613));const a={title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u79fb\u9664List\u7684\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf",description:"\u5728SwiftUI List\u4e2d\uff0c\u7b2c\u4e00\u4e2a\u5206\u9694\u7ebf\u6216\u6700\u9876\u90e8\u7684\u5206\u9694\u7ebf\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u533a\u57df\u5206\u9694\u7ebf\u3002\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528listSectionSeparator(_:edges:)\u4fee\u6539\u5668\u5728SwiftUI\u4e2d\u79fb\u9664List\u7684\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf\uff0c\u540c\u65f6\u63d0\u4f9b\u4e86\u4ee3\u7801\u793a\u4f8b\u548c\u76f8\u5173\u7684\u56fe\u793a\u8bf4\u660e\u3002\u9605\u8bfb\u672c\u6587\uff0c\u4e86\u89e3\u5982\u4f55\u4f7f\u7528SwiftUI\u8f7b\u677e\u5730\u79fb\u9664List\u4e2d\u7684\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf\u3002",authors:["swift"],tags:["SwiftUI","iOS"]},o=void 0,s={permalink:"/blog/2023/03/25/swiftui-list-remove-first-separator",source:"@site/blog/2023-03-25-swiftui-list-remove-first-separator/index.md",title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u79fb\u9664List\u7684\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf",description:"\u5728SwiftUI List\u4e2d\uff0c\u7b2c\u4e00\u4e2a\u5206\u9694\u7ebf\u6216\u6700\u9876\u90e8\u7684\u5206\u9694\u7ebf\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u533a\u57df\u5206\u9694\u7ebf\u3002\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528listSectionSeparator(_:edges:)\u4fee\u6539\u5668\u5728SwiftUI\u4e2d\u79fb\u9664List\u7684\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf\uff0c\u540c\u65f6\u63d0\u4f9b\u4e86\u4ee3\u7801\u793a\u4f8b\u548c\u76f8\u5173\u7684\u56fe\u793a\u8bf4\u660e\u3002\u9605\u8bfb\u672c\u6587\uff0c\u4e86\u89e3\u5982\u4f55\u4f7f\u7528SwiftUI\u8f7b\u677e\u5730\u79fb\u9664List\u4e2d\u7684\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf\u3002",date:"2023-03-25T00:00:00.000Z",formattedDate:"2023\u5e743\u670825\u65e5",tags:[{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"iOS",permalink:"/blog/tags/i-os"}],readingTime:1.405,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u79fb\u9664List\u7684\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf",description:"\u5728SwiftUI List\u4e2d\uff0c\u7b2c\u4e00\u4e2a\u5206\u9694\u7ebf\u6216\u6700\u9876\u90e8\u7684\u5206\u9694\u7ebf\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u533a\u57df\u5206\u9694\u7ebf\u3002\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528listSectionSeparator(_:edges:)\u4fee\u6539\u5668\u5728SwiftUI\u4e2d\u79fb\u9664List\u7684\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf\uff0c\u540c\u65f6\u63d0\u4f9b\u4e86\u4ee3\u7801\u793a\u4f8b\u548c\u76f8\u5173\u7684\u56fe\u793a\u8bf4\u660e\u3002\u9605\u8bfb\u672c\u6587\uff0c\u4e86\u89e3\u5982\u4f55\u4f7f\u7528SwiftUI\u8f7b\u677e\u5730\u79fb\u9664List\u4e2d\u7684\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf\u3002",authors:["swift"],tags:["SwiftUI","iOS"]},prevItem:{title:"\u4f18\u5316 SwiftUI \u652f\u6301\u591a\u5e73\u53f0\u4ee3\u7801",permalink:"/blog/2023/03/25/improve-multiplatform-swiftui-code"},nextItem:{title:"\u4fee\u590d iOS \u5c0f\u90e8\u4ef6\u4e2d\u6700\u5947\u602a\u7684\u9519\u8bef/\u5d29\u6e83\uff1f",permalink:"/blog/2023/02/20/the-weirdest-bugcrash-in-widgets"}},p={authorsImageUrls:[void 0]},l=[{value:"\u5982\u4f55\u5728 SwiftUI List \u4e2d\u79fb\u9664\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf",id:"\u5982\u4f55\u5728-swiftui-list-\u4e2d\u79fb\u9664\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf",level:2}],c={toc:l},f="wrapper";function u(t){let{components:e,...r}=t;return(0,n.kt)(f,(0,i.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728 SwiftUI List \u4e2d\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u4e2a\u5206\u9694\u7ebf\u6216\u6700\u9876\u90e8\u7684\u5206\u9694\u7ebf"),"\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a",(0,n.kt)("strong",{parentName:"p"},"\u533a\u57df\u5206\u9694\u7ebf"),"\u3002"),(0,n.kt)("p",null,"\u81ea\u4ece iOS 15 \u4ee5\u6765\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"listSectionSeparator(_:edges:)"),"\u4fee\u6539\u5668\u8f7b\u677e\u5730",(0,n.kt)("strong",{parentName:"p"},"\u79fb\u9664\u533a\u57df\u5206\u9694\u7ebf"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://d33wubrfki0l68.cloudfront.net/79189889b3f2be7b02c11f1079615077e1a82b71/f713f/images/swiftui-list-remove-first-separator-intro.png",alt:"\u9876\u90e8\u5206\u9694\u7ebf\u662f\u533a\u57df\u5206\u9694\u7ebf\u3002"}),"\u9876\u90e8\u5206\u9694\u7ebf\u662f\u533a\u57df\u5206\u9694\u7ebf\u3002"),(0,n.kt)("h2",{id:"\u5982\u4f55\u5728-swiftui-list-\u4e2d\u79fb\u9664\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf"},"\u5982\u4f55\u5728 SwiftUI List \u4e2d\u79fb\u9664\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"listSectionSeparator(_:edges:)"),"\u63a7\u5236",(0,n.kt)("strong",{parentName:"p"},"\u533a\u57df\u5206\u9694\u7ebf\u7684\u53ef\u89c1\u6027"),"\u3002"),(0,n.kt)("p",null,"\u8981",(0,n.kt)("strong",{parentName:"p"},"\u9690\u85cf"),"\u533a\u57df\u5206\u9694\u7ebf\uff0c\u6211\u4eec\u5c06\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u9012\u4e3a ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swiftui/visibility/hidden"},(0,n.kt)("inlineCode",{parentName:"a"},"Visibility.hidden")),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"listSectionSeparator(_:edges:)"),"\u8fd8\u63a5\u53d7\u4e00\u4e2a\u53ef\u9009\u7684",(0,n.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u7528\u4e8e\u63a7\u5236\u60a8\u8981\u9690\u85cf\u7684\u8fb9\u7f18"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Section"),"\u53ef\u4ee5\u6709",(0,n.kt)("strong",{parentName:"p"},"\u4e24\u4e2a\u5206\u9694\u7ebf"),"\uff0c\u5206\u522b\u5305\u88f9\u8be5\u90e8\u5206\u4e2d\u7684\u884c\u7684\u9876\u90e8\u548c\u5e95\u90e8\u3002",(0,n.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u4e2a\u5206\u9694\u7ebf"),"\u662f\u4e00\u4e2a\u533a\u57df\u5206\u9694\u7ebf\u7684",(0,n.kt)("strong",{parentName:"p"},"\u9876\u90e8\u8fb9\u7f18"),"\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5c06 ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swiftui/verticaledge/top"},(0,n.kt)("inlineCode",{parentName:"a"},"VerticalEdge.top"))," \u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002"),(0,n.kt)("p",null,"\u8981\u9690\u85cf\u5b83\uff0c\u6211\u4eec\u5c06",(0,n.kt)("inlineCode",{parentName:"p"},".listSectionSeparator(.hidden, edges: .top)"),"\u5e94\u7528\u4e8e",(0,n.kt)("inlineCode",{parentName:"p"},"Section"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},'swiftCopy code\nNavigationView {\n    List {\n        Section("Section Header") {\n            ForEach(0..<7) { i in\n                Text("Row \\(i.description)")\n            }\n        }\n        .listSectionSeparator(.hidden, edges: .top)\n    }\n    .listStyle(.plain)\n    .navigationTitle("List")\n}\n')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://d33wubrfki0l68.cloudfront.net/63ae47e446d9fb96b369d88f9652b162a230048a/1d65e/images/swiftui-list-remove-first-separator-solution.png",alt:"\u4f7f\u7528.listSectionSeparator(.hidden, edges: .top)\u9690\u85cf\u7b2c\u4e00\u4e2a\u5206\u9694\u7ebf\u3002"})),(0,n.kt)("p",null,"\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},".listSectionSeparator(.hidden, edges: .top)"),"\u9690\u85cf\u7b2c\u4e00\u4e2a\u5206\u9694\u7ebf\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\u539f\u6587(\u82f1\u6587)\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://sarunw.com/posts/swiftui-list-remove-first-separator/"},"https://sarunw.com/posts/swiftui-list-remove-first-separator/")))))}u.isMDXComponent=!0}}]);