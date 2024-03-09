"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[304],{1861:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=n(5893),i=n(1151);const s={title:"\u5173\u4e8eSwift 5.1\u4f60\u9700\u8981\u77e5\u9053\u7684\u5185\u5bb9",description:"\uff1aSwift 5.1 \u6539\u8fdb\u4e86 Sendable \u548c actor \u9694\u79bb\u68c0\u67e5\uff0c\u4ee5\u8fdb\u4e00\u6b65\u6d88\u9664\u6570\u636e\u7ade\u901f\u3002\u6b64\u5916\uff0c\u8fd8\u6dfb\u52a0\u4e86\u4e00\u4e9b\u65b0\u7684\u5e76\u53d1\u6027 API\uff0c\u4ee5\u4f7f\u5f00\u53d1\u4eba\u5458\u66f4\u5bb9\u6613\u7f16\u5199\u6b63\u786e\u7684\u5e76\u53d1\u4ee3\u7801\u3002",authors:["swift"],tags:["swift"]},r=void 0,a={permalink:"/blog/2024/03/09/everything-you-need-to-know-about-swift-5-10",source:"@site/blog/2024-03-09-everything-you-need-to-know-about-swift-5-10/index.md",title:"\u5173\u4e8eSwift 5.1\u4f60\u9700\u8981\u77e5\u9053\u7684\u5185\u5bb9",description:"\uff1aSwift 5.1 \u6539\u8fdb\u4e86 Sendable \u548c actor \u9694\u79bb\u68c0\u67e5\uff0c\u4ee5\u8fdb\u4e00\u6b65\u6d88\u9664\u6570\u636e\u7ade\u901f\u3002\u6b64\u5916\uff0c\u8fd8\u6dfb\u52a0\u4e86\u4e00\u4e9b\u65b0\u7684\u5e76\u53d1\u6027 API\uff0c\u4ee5\u4f7f\u5f00\u53d1\u4eba\u5458\u66f4\u5bb9\u6613\u7f16\u5199\u6b63\u786e\u7684\u5e76\u53d1\u4ee3\u7801\u3002",date:"2024-03-09T00:00:00.000Z",formattedDate:"2024\u5e743\u67089\u65e5",tags:[{label:"swift",permalink:"/blog/tags/swift"}],readingTime:5.39,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"\u5173\u4e8eSwift 5.1\u4f60\u9700\u8981\u77e5\u9053\u7684\u5185\u5bb9",description:"\uff1aSwift 5.1 \u6539\u8fdb\u4e86 Sendable \u548c actor \u9694\u79bb\u68c0\u67e5\uff0c\u4ee5\u8fdb\u4e00\u6b65\u6d88\u9664\u6570\u636e\u7ade\u901f\u3002\u6b64\u5916\uff0c\u8fd8\u6dfb\u52a0\u4e86\u4e00\u4e9b\u65b0\u7684\u5e76\u53d1\u6027 API\uff0c\u4ee5\u4f7f\u5f00\u53d1\u4eba\u5458\u66f4\u5bb9\u6613\u7f16\u5199\u6b63\u786e\u7684\u5e76\u53d1\u4ee3\u7801\u3002",authors:["swift"],tags:["swift"]},unlisted:!1,nextItem:{title:"Swift \u4e2d\u7684\u53ef\u9009\u7c7b\u578b\u8be6\u89e3\uff1a\u4f60\u9700\u8981\u77e5\u9053\u7684 5 \u4ef6\u4e8b",permalink:"/blog/2024/03/07/optionals-in-swift-explained-5-things-you-should-know"}},c={authorsImageUrls:[void 0]},u=[];function f(t){const e={p:"p",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"\u671f\u5f85\u5df2\u4e45\u7684 iOS 17.4 \u548c iPadOS 17.4 \u521a\u521a\u53d1\u5e03\uff0c\u8fd9\u610f\u5473\u7740\u5982\u679c\u4f60\u662f\u4e00\u4f4d\u6b27\u76df iOS \u7528\u6237\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u9010\u6e10\u5f00\u59cb\u770b\u5230\u5176\u4ed6\u5e94\u7528\u5546\u5e97\u51fa\u73b0\u3002\u9664\u4e86 17.4 \u7248\u672c\u5916\uff0cApple \u8fd8\u53d1\u5e03\u4e86 Xcode 15.3 \u548c Swift 5.10\u3002"}),"\n",(0,o.jsx)(e.p,{children:"Swift 5.10 \u4e2d\u5305\u542b\u7684\u63d0\u6848\u6570\u91cf\u5e76\u4e0d\u591a\uff0c\u4f46\u8fd9\u5e76\u4e0d\u4f1a\u8ba9\u6b64\u7248\u672c\u663e\u5f97\u4e0d\u90a3\u4e48\u91cd\u8981\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u501f\u52a9 Swift 5.10\uff0cApple \u8bbe\u6cd5\u5f25\u8865\u4e86 Swift \u5e76\u53d1\u6570\u636e\u5b89\u5168\u529f\u80fd\u4e2d\u5b58\u5728\u7684\u4e00\u4e9b\u91cd\u5927\u5dee\u8ddd\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u8fd9\u610f\u5473\u7740\u7f16\u8bd1\u5668\u5c06\u80fd\u591f\u901a\u8fc7\u5728\u66f4\u591a\u5730\u65b9\u5f3a\u5236\u6267\u884c actor \u9694\u79bb\u548c\u53ef\u53d1\u9001\u6027\u6765\u6355\u83b7\u66f4\u591a\u53ef\u80fd\u7684\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\u3002"})]})}function l(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(f,{...t})}):f(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>r});var o=n(7294);const i={},s=o.createContext(i);function r(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);