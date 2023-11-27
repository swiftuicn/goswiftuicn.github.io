"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1111],{8445:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var a=i(5893),o=i(1151);const n={slug:"sharing-code-in-swiftui-apps",title:"SwiftUI \u4e2d\u5b9e\u73b0\u5171\u4eab\u8de8\u5e73\u53f0(iOS/macOS)\u4ee3\u7801",description:"\u5728 SwiftUI \u4e2d\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u5438\u5f15\u529b\u5728\u4e8e\u80fd\u591f\u8de8\u5e73\u53f0(iOS/macOS)\u5171\u4eab UI \u4ee3\u7801\u3002",authors:["swift"],tags:["SwiftUI","iOS","macOS","UIKit"]},s=void 0,c={permalink:"/blog/sharing-code-in-swiftui-apps",source:"@site/blog/2022-09-03-sharing-code-in-swiftui-apps/index.md",title:"SwiftUI \u4e2d\u5b9e\u73b0\u5171\u4eab\u8de8\u5e73\u53f0(iOS/macOS)\u4ee3\u7801",description:"\u5728 SwiftUI \u4e2d\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u5438\u5f15\u529b\u5728\u4e8e\u80fd\u591f\u8de8\u5e73\u53f0(iOS/macOS)\u5171\u4eab UI \u4ee3\u7801\u3002",date:"2022-09-03T00:00:00.000Z",formattedDate:"2022\u5e749\u67083\u65e5",tags:[{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"iOS",permalink:"/blog/tags/i-os"},{label:"macOS",permalink:"/blog/tags/mac-os"},{label:"UIKit",permalink:"/blog/tags/ui-kit"}],readingTime:2.855,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{slug:"sharing-code-in-swiftui-apps",title:"SwiftUI \u4e2d\u5b9e\u73b0\u5171\u4eab\u8de8\u5e73\u53f0(iOS/macOS)\u4ee3\u7801",description:"\u5728 SwiftUI \u4e2d\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u5438\u5f15\u529b\u5728\u4e8e\u80fd\u591f\u8de8\u5e73\u53f0(iOS/macOS)\u5171\u4eab UI \u4ee3\u7801\u3002",authors:["swift"],tags:["SwiftUI","iOS","macOS","UIKit"]},unlisted:!1,prevItem:{title:"ASO \u6392\u540d\u4f18\u5316\u6280\u5de7\u65b9\u6cd5\u5206\u6790\u548c\u7ecf\u9a8c\u603b\u7ed3",permalink:"/blog/aso-tips-and-tricks-to-increase-your-apps-ranking"},nextItem:{title:"\u5982\u4f55\u5728 Combine \u6846\u67b6\u4e2d\u4f7f\u7528 Swift \u4e2d async/await \u51fd\u6570",permalink:"/blog/bridge-async-await-to-combine-future"}},r={authorsImageUrls:[void 0]},p=[];function l(t){const e={a:"a",code:"code",em:"em",p:"p",...(0,o.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://developer.apple.com/xcode/swiftui/",children:"\u5728SwiftUI"}),"\u4e2d\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u5438\u5f15\u529b\u5728\u4e8e\u80fd\u591f\u8de8\u5e73\u53f0\u5171\u4eab UI \u4ee3\u7801\uff0c\u5c24\u5176\u662f iOS \u548c macOS\u3002\u5b83\u5e76\u4e0d\u5b8c\u7f8e\uff0c\u60a8\u7ecf\u5e38\u9700\u8981\u8fdb\u884c\u4e00\u4e9b",(0,a.jsx)(e.code,{children:"#if os()"}),"\u68c0\u67e5\uff0c\u4f46\u662f\u5f53\u5b83\u8d77\u4f5c\u7528\u65f6\uff0c\u5b83\u786e\u5b9e\u5f88\u68d2\u3002\u5728 SwiftUI \u51fa\u73b0\u4e4b\u524d\uff0c\u60a8\u5df2\u7ecf\u53ef\u4ee5\u5728 iOS \u548c macOS \u4e4b\u95f4\u5171\u4eab\u5927\u91cf\uff08\u975e UI\uff09\u4ee3\u7801\u3002\u8bb8\u591a\u7cfb\u7edf\u6846\u67b6\u5728\u4e24\u4e2a\u5e73\u53f0\u4e0a\u90fd\u53ef\u7528\uff0c\u4f8b\u5982",(0,a.jsx)(e.a,{href:"https://developer.apple.com/documentation/foundation",children:"Foundation"}),"\u548c",(0,a.jsx)(e.a,{href:"https://developer.apple.com/documentation/coredata",children:"Core Data"}),"\u3002\u5076\u5c14\u4f1a\u5b58\u5728 API \u5dee\u5f02\uff0c\u4f46\u5b83\u4eec\u5f88\u5c11\u4f1a\u5e26\u6765\u5f88\u5927\u7684\u8d1f\u62c5\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u5f00\u53d1\u8de8\u5e73\u53f0 SwiftUI \u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u6700\u5927\u7684\u95ee\u9898\u662f\u5f53\u60a8\u9700\u8981\u5728 macOS\u4e0a\u4f7f\u7528",(0,a.jsx)(e.a,{href:"https://developer.apple.com/documentation/appkit",children:"AppKit"}),"\u548c\u5728 iOS\u4e0a\u4f7f\u7528",(0,a.jsx)(e.a,{href:"https://developer.apple.com/documentation/uikit",children:"UIKit\u65f6\u3002"}),"\u901a\u5e38\uff0c\u60a8\u9700\u8981\u7684 API\uff08\u56e0\u4e3a SwiftUI \u4e2d\u6ca1\u6709\u5b83\u4eec\uff09\u5b8c\u5168\u4e0d\u540c\u3002\u4f46\u662f\uff0c\u6709\u65f6 API",(0,a.jsx)(e.em,{children:"\u51e0\u4e4e\u76f8\u540c"}),"\uff0c\u4f46",(0,a.jsx)(e.em,{children:"\u53ea\u662f\u4e0d\u540c\uff0c\u4ee5\u81f3\u4e8e"}),"\u9700\u8981\u5206\u652f\u5230\u7279\u5b9a\u4e8e\u5e73\u53f0\u7684\u4ee3\u7801\u8def\u5f84\u3002\u4e00\u4e2a\u5f88\u597d\u7684\u4f8b\u5b50\u662f",(0,a.jsx)(e.a,{href:"https://developer.apple.com/documentation/uikit/uipasteboard",children:(0,a.jsx)(e.code,{children:"UIPasteboard"})}),"\u5728 iOS \u548c",(0,a.jsx)(e.a,{href:"https://developer.apple.com/documentation/appkit/nspasteboard",children:(0,a.jsx)(e.code,{children:"NSPasteboard"})}),"macOS \u4e0a\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u6211\u6b63\u5728\u5f00\u53d1\u7684\u8fd9\u4e2a\u8de8\u5e73\u53f0 SwiftUI \u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u6211\u5e0c\u671b\u5141\u8bb8\u7528\u6237\u4ece\u8868\u683c\u89c6\u56fe\u4e2d\u590d\u5236\u4e00\u4e9b\u6587\u672c\u3002\u4e24\u4e2a\u5e73\u53f0\u5171\u4eab UI \u4ee3\u7801\uff0c\u4f46\u4e0d\u5171\u4eab\u5e95\u5c42\u590d\u5236\u529f\u80fd\u2014\u2014\u56e0\u4e3a\u6211\u4eec\u9700\u8981\u5728 macOS \u4e0a\u4f7f\u7528 AppKit\uff0c\u5728 iOS \u4e0a\u4f7f\u7528 UIKit\u3002\u4f46\u6211\u60f3\u4fdd\u6301\u8c03\u7528\u7ad9\u70b9\u7684\u590d\u5236\u64cd\u4f5c\u4ee3\u7801\u5e72\u51c0\uff0c\u65e0\u9700\u8fdb\u884c\u5927\u91cf",(0,a.jsx)(e.code,{children:"#if os()"}),"\u68c0\u67e5\u3002\u4e3a\u6b64\uff0c\u60a8\u53ef\u4ee5\u5de7\u5999\u5730\u4f7f\u7528",(0,a.jsx)(e.code,{children:"typealias"}),"."]})]})}function d(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},1151:(t,e,i)=>{i.d(e,{Z:()=>c,a:()=>s});var a=i(7294);const o={},n=a.createContext(o);function s(t){const e=a.useContext(n);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),a.createElement(n.Provider,{value:e},t.children)}}}]);