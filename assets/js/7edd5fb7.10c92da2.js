"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[328],{683:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=i(5893),n=i(1151);const a={slug:"sharing-code-in-swiftui-apps",title:"SwiftUI \u4e2d\u5b9e\u73b0\u5171\u4eab\u8de8\u5e73\u53f0(iOS/macOS)\u4ee3\u7801",description:"\u5728 SwiftUI \u4e2d\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u5438\u5f15\u529b\u5728\u4e8e\u80fd\u591f\u8de8\u5e73\u53f0(iOS/macOS)\u5171\u4eab UI \u4ee3\u7801\u3002",authors:["swift"],tags:["SwiftUI","iOS","macOS","UIKit"]},o=void 0,r={permalink:"/blog/sharing-code-in-swiftui-apps",source:"@site/blog/2022-09-03-sharing-code-in-swiftui-apps/index.md",title:"SwiftUI \u4e2d\u5b9e\u73b0\u5171\u4eab\u8de8\u5e73\u53f0(iOS/macOS)\u4ee3\u7801",description:"\u5728 SwiftUI \u4e2d\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u5438\u5f15\u529b\u5728\u4e8e\u80fd\u591f\u8de8\u5e73\u53f0(iOS/macOS)\u5171\u4eab UI \u4ee3\u7801\u3002",date:"2022-09-03T00:00:00.000Z",formattedDate:"2022\u5e749\u67083\u65e5",tags:[{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"iOS",permalink:"/blog/tags/i-os"},{label:"macOS",permalink:"/blog/tags/mac-os"},{label:"UIKit",permalink:"/blog/tags/ui-kit"}],readingTime:2.855,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{slug:"sharing-code-in-swiftui-apps",title:"SwiftUI \u4e2d\u5b9e\u73b0\u5171\u4eab\u8de8\u5e73\u53f0(iOS/macOS)\u4ee3\u7801",description:"\u5728 SwiftUI \u4e2d\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u5438\u5f15\u529b\u5728\u4e8e\u80fd\u591f\u8de8\u5e73\u53f0(iOS/macOS)\u5171\u4eab UI \u4ee3\u7801\u3002",authors:["swift"],tags:["SwiftUI","iOS","macOS","UIKit"]},unlisted:!1,prevItem:{title:"ASO \u6392\u540d\u4f18\u5316\u6280\u5de7\u65b9\u6cd5\u5206\u6790\u548c\u7ecf\u9a8c\u603b\u7ed3",permalink:"/blog/aso-tips-and-tricks-to-increase-your-apps-ranking"},nextItem:{title:"\u5982\u4f55\u5728 Combine \u6846\u67b6\u4e2d\u4f7f\u7528 Swift \u4e2d async/await \u51fd\u6570",permalink:"/blog/bridge-async-await-to-combine-future"}},c={authorsImageUrls:[void 0]},l=[];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://developer.apple.com/xcode/swiftui/",children:"\u5728SwiftUI"}),"\u4e2d\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u5438\u5f15\u529b\u5728\u4e8e\u80fd\u591f\u8de8\u5e73\u53f0\u5171\u4eab UI \u4ee3\u7801\uff0c\u5c24\u5176\u662f iOS \u548c macOS\u3002\u5b83\u5e76\u4e0d\u5b8c\u7f8e\uff0c\u60a8\u7ecf\u5e38\u9700\u8981\u8fdb\u884c\u4e00\u4e9b",(0,s.jsx)(t.code,{children:"#if os()"}),"\u68c0\u67e5\uff0c\u4f46\u662f\u5f53\u5b83\u8d77\u4f5c\u7528\u65f6\uff0c\u5b83\u786e\u5b9e\u5f88\u68d2\u3002\u5728 SwiftUI \u51fa\u73b0\u4e4b\u524d\uff0c\u60a8\u5df2\u7ecf\u53ef\u4ee5\u5728 iOS \u548c macOS \u4e4b\u95f4\u5171\u4eab\u5927\u91cf\uff08\u975e UI\uff09\u4ee3\u7801\u3002\u8bb8\u591a\u7cfb\u7edf\u6846\u67b6\u5728\u4e24\u4e2a\u5e73\u53f0\u4e0a\u90fd\u53ef\u7528\uff0c\u4f8b\u5982",(0,s.jsx)(t.a,{href:"https://developer.apple.com/documentation/foundation",children:"Foundation"}),"\u548c",(0,s.jsx)(t.a,{href:"https://developer.apple.com/documentation/coredata",children:"Core Data"}),"\u3002\u5076\u5c14\u4f1a\u5b58\u5728 API \u5dee\u5f02\uff0c\u4f46\u5b83\u4eec\u5f88\u5c11\u4f1a\u5e26\u6765\u5f88\u5927\u7684\u8d1f\u62c5\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u5f00\u53d1\u8de8\u5e73\u53f0 SwiftUI \u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u6700\u5927\u7684\u95ee\u9898\u662f\u5f53\u60a8\u9700\u8981\u5728 macOS\u4e0a\u4f7f\u7528",(0,s.jsx)(t.a,{href:"https://developer.apple.com/documentation/appkit",children:"AppKit"}),"\u548c\u5728 iOS\u4e0a\u4f7f\u7528",(0,s.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit",children:"UIKit\u65f6\u3002"}),"\u901a\u5e38\uff0c\u60a8\u9700\u8981\u7684 API\uff08\u56e0\u4e3a SwiftUI \u4e2d\u6ca1\u6709\u5b83\u4eec\uff09\u5b8c\u5168\u4e0d\u540c\u3002\u4f46\u662f\uff0c\u6709\u65f6 API",(0,s.jsx)(t.em,{children:"\u51e0\u4e4e\u76f8\u540c"}),"\uff0c\u4f46",(0,s.jsx)(t.em,{children:"\u53ea\u662f\u4e0d\u540c\uff0c\u4ee5\u81f3\u4e8e"}),"\u9700\u8981\u5206\u652f\u5230\u7279\u5b9a\u4e8e\u5e73\u53f0\u7684\u4ee3\u7801\u8def\u5f84\u3002\u4e00\u4e2a\u5f88\u597d\u7684\u4f8b\u5b50\u662f",(0,s.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/uipasteboard",children:(0,s.jsx)(t.code,{children:"UIPasteboard"})}),"\u5728 iOS \u548c",(0,s.jsx)(t.a,{href:"https://developer.apple.com/documentation/appkit/nspasteboard",children:(0,s.jsx)(t.code,{children:"NSPasteboard"})}),"macOS \u4e0a\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u6211\u6b63\u5728\u5f00\u53d1\u7684\u8fd9\u4e2a\u8de8\u5e73\u53f0 SwiftUI \u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u6211\u5e0c\u671b\u5141\u8bb8\u7528\u6237\u4ece\u8868\u683c\u89c6\u56fe\u4e2d\u590d\u5236\u4e00\u4e9b\u6587\u672c\u3002\u4e24\u4e2a\u5e73\u53f0\u5171\u4eab UI \u4ee3\u7801\uff0c\u4f46\u4e0d\u5171\u4eab\u5e95\u5c42\u590d\u5236\u529f\u80fd\u2014\u2014\u56e0\u4e3a\u6211\u4eec\u9700\u8981\u5728 macOS \u4e0a\u4f7f\u7528 AppKit\uff0c\u5728 iOS \u4e0a\u4f7f\u7528 UIKit\u3002\u4f46\u6211\u60f3\u4fdd\u6301\u8c03\u7528\u7ad9\u70b9\u7684\u590d\u5236\u64cd\u4f5c\u4ee3\u7801\u5e72\u51c0\uff0c\u65e0\u9700\u8fdb\u884c\u5927\u91cf",(0,s.jsx)(t.code,{children:"#if os()"}),"\u68c0\u67e5\u3002\u4e3a\u6b64\uff0c\u60a8\u53ef\u4ee5\u5de7\u5999\u5730\u4f7f\u7528",(0,s.jsx)(t.code,{children:"typealias"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["\u9996\u5148\uff0c\u6211\u4eec\u5728\u4e24\u4e2a\u5e73\u53f0\u4e0a\u5b9a\u4e49\u4e00\u4e2a\u516c\u7528\u7684 ",(0,s.jsx)(t.code,{children:"typealias"})," \u3002"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"#if os(macOS)\n    import AppKit\n    typealias XPasteboard = NSPasteboard\n#else\n    import UIKit\n    typealias XPasteboard = UIPasteboard\n#endif\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u5199\u4e00\u4e2a\u6269\u5c55",(0,s.jsx)(t.code,{children:"XPasteboard"}),"\u6765\u5c01\u88c5\u901a\u7528\u529f\u80fd\u3002"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"extension XPasteboard {\n    func copyText(_ text: String) {\n#if os(macOS)\n        self.clearContents()\n        self.setString(text, forType: .string)\n#else\n        self.string = text\n#endif\n    }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u6211\u4eec\u73b0\u5728\u6709\u4e00\u4e2a\u5355\u4e00\u7684\u201c\u8de8\u5e73\u53f0\u201dAPI \u53ef\u4f9b\u4f7f\u7528\uff0c\u6211\u559c\u6b22\u8fd9\u6837\u4f7f\u4ee3\u7801\u66f4\u7b80\u6d01\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"XPasteboard.general.copyText(someText)\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u8fd9\u53ea\u662f\u4e00\u4e2a\u5c0f\u4f8b\u5b50\uff0c\u8bf4\u660e\u5982\u4f55\u89e3\u51b3 AppKit \u548c UIKit \u4e2d\u7684\u5dee\u5f02\u4ee5\u751f\u6210\u66f4\u597d\u7684\u4ee3\u7801\uff0c\u4f46\u662f\u5f53\u60a8\u5728\u4e24\u4e2a\u6846\u67b6\u4e2d\u9047\u5230\u76f8\u4f3c\u4f46\u4e0d\u540c\u7684 API \u65f6\uff0c\u8fd8\u6709\u5f88\u591a\u5176\u4ed6\u6539\u8fdb\u7684\u673a\u4f1a\u3002\u968f\u7740\u60a8\u7684 SwiftUI \u5e94\u7528\u7a0b\u5e8f\u53d8\u5f97\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u60a8\u5c06\u8d8a\u6765\u8d8a\u9700\u8981 AppKit \u548c UIKit\u3002\u8fd9\u662f\u6211\u559c\u6b22\u7528\u6765\u5c01\u88c5\u4e00\u4e9b\u590d\u6742\u6027\u7684\u4e00\u79cd\u7b56\u7565\u3002"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u539f\u6587(\u82f1\u6587)\uff1a",(0,s.jsx)(t.a,{href:"https://www.jessesquires.com/blog/2022/08/19/sharing-code-in-swiftui-apps",children:"https://www.jessesquires.com/blog/2022/08/19/sharing-code-in-swiftui-apps"})]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var s=i(7294);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);