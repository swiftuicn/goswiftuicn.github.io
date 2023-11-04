"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6737],{5697:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(1874),s=i(6454);const r={title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u8bf7\u6c42\u7528\u6237\u5bf9\u60a8\u7684\u5e94\u7528\u8fdb\u884c\u8bc4\u4ef7",description:"SwiftUI\u63d0\u4f9b\u4e86\u4e00\u79cd\u672c\u5730\u65b9\u6cd5\u6765\u8bf7\u6c42\u7528\u6237\u7684\u53cd\u9988\u548c\u5e94\u7528\u8bc4\u5206\u3002\u4e86\u89e3\u5982\u4f55\u5728SwiftUI\u4e2d\u8bf7\u6c42\u7528\u6237\u5bf9\u60a8\u7684\u5e94\u7528\u8fdb\u884c\u8bc4\u4ef7\uff0c\u4ee5\u53ca\u9650\u5236\u548c\u6700\u4f73\u5b9e\u8df5\u3002",authors:["swift"],tags:["SwiftUI","\u8bc4\u4ef7"]},o=void 0,l={permalink:"/blog/2023/11/04/how-to-request-users-to-review-app-in-swiftui",source:"@site/blog/2023-11-04-how-to-request-users-to-review-app-in-swiftui/index.md",title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u8bf7\u6c42\u7528\u6237\u5bf9\u60a8\u7684\u5e94\u7528\u8fdb\u884c\u8bc4\u4ef7",description:"SwiftUI\u63d0\u4f9b\u4e86\u4e00\u79cd\u672c\u5730\u65b9\u6cd5\u6765\u8bf7\u6c42\u7528\u6237\u7684\u53cd\u9988\u548c\u5e94\u7528\u8bc4\u5206\u3002\u4e86\u89e3\u5982\u4f55\u5728SwiftUI\u4e2d\u8bf7\u6c42\u7528\u6237\u5bf9\u60a8\u7684\u5e94\u7528\u8fdb\u884c\u8bc4\u4ef7\uff0c\u4ee5\u53ca\u9650\u5236\u548c\u6700\u4f73\u5b9e\u8df5\u3002",date:"2023-11-04T00:00:00.000Z",formattedDate:"2023\u5e7411\u67084\u65e5",tags:[{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"\u8bc4\u4ef7",permalink:"/blog/tags/\u8bc4\u4ef7"}],readingTime:3.46,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u8bf7\u6c42\u7528\u6237\u5bf9\u60a8\u7684\u5e94\u7528\u8fdb\u884c\u8bc4\u4ef7",description:"SwiftUI\u63d0\u4f9b\u4e86\u4e00\u79cd\u672c\u5730\u65b9\u6cd5\u6765\u8bf7\u6c42\u7528\u6237\u7684\u53cd\u9988\u548c\u5e94\u7528\u8bc4\u5206\u3002\u4e86\u89e3\u5982\u4f55\u5728SwiftUI\u4e2d\u8bf7\u6c42\u7528\u6237\u5bf9\u60a8\u7684\u5e94\u7528\u8fdb\u884c\u8bc4\u4ef7\uff0c\u4ee5\u53ca\u9650\u5236\u548c\u6700\u4f73\u5b9e\u8df5\u3002",authors:["swift"],tags:["SwiftUI","\u8bc4\u4ef7"]},unlisted:!1,prevItem:{title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u5173\u95ed\u952e\u76d8",permalink:"/blog/2023/11/04/dismiss-keyboard-in-swiftui"},nextItem:{title:"Xcode 15\uff1a2023\u5e74\u503c\u5f97\u4f7f\u7528\u7684 OSLog \u65b0\u7279\u6027",permalink:"/blog/2023/07/29/why-you-should-use-oslog-in-2023"}},c={authorsImageUrls:[void 0]},d=[{value:"\u9650\u5236",id:"\u9650\u5236",level:2},{value:"\u4f55\u65f6\u8bf7\u6c42\u8bc4\u7ea7",id:"\u4f55\u65f6\u8bf7\u6c42\u8bc4\u7ea7",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u5728 iOS 16 \u4e2d\uff0cSwiftUI \u5177\u6709\u4e00\u79cd\u672c\u5730\u65b9\u5f0f\u6765\u8bf7\u6c42\u7528\u6237\u7684\u53cd\u9988\u548c\u8bc4\u5206\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u5448\u73b0\u4e00\u4e2a\u672c\u5730\u63d0\u793a\uff0c\u8bf7\u6c42\u7528\u6237\u5bf9\u60a8\u7684\u5e94\u7528\u8fdb\u884c App Store \u8bc4\u5206\u548c\u8bc4\u8bba\uff0c\u60a8\u9700\u8981\u6267\u884c\u4e24\u9879\u64cd\u4f5c\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5bfc\u5165",(0,t.jsx)(n.code,{children:"StoreKit"}),"\u6846\u67b6\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5f53\u60a8\u5e0c\u671b\u8bf7\u6c42\u7528\u6237\u5bf9\u60a8\u7684\u5e94\u7528\u8fdb\u884c\u8bc4\u4ef7\u65f6\uff0c\u8c03\u7528",(0,t.jsx)(n.code,{children:"RequestReviewAction"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'import SwiftUI\nimport StoreKit\n\nstruct ContentView: View {\n    // 1\n    @Environment(\\.requestReview) var requestReview\n\n    var body: some View {\n        Text("\u4f60\u597d\uff0c\u4e16\u754c\uff01")\n            .padding()\n            .onAppear {\n                // 2\n                requestReview()\n            }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RequestReviewAction"}),"\u662f\u4e00\u4e2a\u64cd\u4f5c\uff0c\u5c06\u5448\u73b0\u4e00\u4e2a\u63d0\u793a\uff0c\u8981\u6c42\u7528\u6237\u4e3a\u6211\u4eec\u7684\u5e94\u7528\u8bc4\u5206\u3002\u6211\u4eec\u53ef\u4ee5\u4ece",(0,t.jsx)(n.code,{children:"StoreKit"}),"\u6846\u67b6\u4e2d\u58f0\u660e\u7684\u73af\u5883\u503c",(0,t.jsx)(n.code,{children:"\\.requestReview"}),"\u4e2d\u83b7\u53d6\u8be5\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5728\u83b7\u5f97\u5bf9\u8fd9\u4e2a\u64cd\u4f5c\u7684\u8bbf\u95ee\u6743\u9650\u540e\uff0c\u53ea\u9700\u5728\u5e0c\u671b\u8bf7\u6c42\u7528\u6237\u8bc4\u4ef7\u65f6\u8c03\u7528\u5b83\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u662f UI \u7684\u6837\u5b50\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://sarunw.com/images/how-to-request-users-to-review-app-in-swiftui.png",alt:"\u8bf7\u6c42\u8bc4\u4ef7\u5f39\u51fa\u5bf9\u8bdd\u6846\u3002"}),"\u8bf7\u6c42\u8bc4\u4ef7\u5f39\u51fa\u5bf9\u8bdd\u6846\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9650\u5236",children:"\u9650\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u82f9\u679c\u5728\u7528\u6237\u4f53\u9a8c\u65b9\u9762\u975e\u5e38\u8ba4\u771f\uff0c\u4ed6\u4eec\u5e0c\u671b\u63a7\u5236\u6211\u4eec\u8bf7\u6c42\u7528\u6237\u8bc4\u4ef7\u7684\u9891\u7387\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u5373\u4f7f\u60a8\u660e\u786e\u8c03\u7528",(0,t.jsx)(n.code,{children:"requestReview()"}),"\uff0c\u8bc4\u4ef7\u5f39\u51fa\u7a97\u53e3\u4e5f\u53ef\u80fd\u4e0d\u4f1a\u663e\u793a\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u662f\u82f9\u679c\u7528\u6765\u51b3\u5b9a\u662f\u5426\u663e\u793a\u8bc4\u4ef7\u7a97\u53e3\u7684\u6807\u51c6\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u7528\u6237\u5728\u8be5\u8bbe\u5907\u4e0a\u5c1a\u672a\u5bf9\u60a8\u7684\u5e94\u7528\u8fdb\u884c\u8bc4\u7ea7\u6216\u8bc4\u8bba\uff0c\u5219 StoreKit \u5728 365 \u5929\u5185\u6700\u591a\u4f1a\u663e\u793a\u8bc4\u7ea7\u548c\u8bc4\u8bba\u8bf7\u6c42\u4e09\u6b21\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u7528\u6237\u5728\u8be5\u8bbe\u5907\u4e0a\u5bf9\u60a8\u7684\u5e94\u7528\u8fdb\u884c\u4e86\u8bc4\u7ea7\u6216\u8bc4\u8bba\uff0c\u5e76\u4e14\u81ea\u4e0a\u6b21\u8bc4\u4ef7\u4ee5\u6765\u5df2\u7ecf\u8fc7\u53bb\u4e86 365 \u5929\uff0cStoreKit \u4f1a\u663e\u793a\u8bc4\u7ea7\u548c\u8bc4\u8bba\u8bf7\u6c42\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5373\u4f7f\u6240\u6709\u6807\u51c6\u90fd\u6ee1\u8db3\uff0c\u7531\u4e8e\u82f9\u679c\u7684\u9690\u85cf\u6807\u51c6\uff0c\u4f8b\u5982\u9891\u7387\uff0c\u4ecd\u6709\u53ef\u80fd\u4e0d\u663e\u793a\u63d0\u793a\uff0c\u56e0\u6b64\u4e0d\u8981\u5728\u6309\u94ae\u70b9\u51fb\u6216\u5176\u4ed6\u7528\u6237\u64cd\u4f5c\u7684\u54cd\u5e94\u4e2d\u8c03\u7528\u8be5\u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f55\u65f6\u8bf7\u6c42\u8bc4\u7ea7",children:"\u4f55\u65f6\u8bf7\u6c42\u8bc4\u7ea7"}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8e\u60a8\u53ef\u4ee5\u8bf7\u6c42\u8bc4\u4ef7\u7684\u6b21\u6570\u6709\u9650\uff0c\u60a8\u5e94\u8be5\u5728\u6709\u610f\u4e49\u7684\u65f6\u5019\u8c03\u7528\u5b83\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u53ef\u80fd\u5e0c\u671b\u5728\u7528\u6237\u53ef\u80fd\u4f1a\u83b7\u5f97\u8bc4\u4ef7\u7684\u65f6\u5019\u8981\u6c42\u8bc4\u4ef7\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u65b9\u9762\u6ca1\u6709\u56fa\u5b9a\u7684\u89c4\u5219\uff0c\u4f46\u6211\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e9b\u793a\u4f8b\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5f53\u7528\u6237\u53cd\u590d\u8fd4\u56de\u60a8\u7684\u5e94\u7528\u65f6\u3002\u8fd9\u8868\u660e\u7528\u6237\u5bf9\u60a8\u7684\u5e94\u7528\u611f\u5230\u6ee1\u610f\u5e76\u8ba4\u4e3a\u5b83\u6709\u5e2e\u52a9\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5728\u91cd\u8981\u4e8b\u4ef6\u4e4b\u540e\uff0c\u4f8b\u5982\u5b8c\u6210\u6e38\u620f\u5173\u5361\u6216\u5b8c\u6210\u4e00\u4e9b\u4efb\u52a1\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u603b\u4e4b\uff0c\u60a8\u5e94\u8be5\u5728\u7528\u6237\u5bf9\u60a8\u7684\u5e94\u7528\u611f\u5230\u79ef\u6781\u65f6\u8bf7\u6c42\u8bc4\u4ef7\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u60a8\u7684\u4ee3\u7801\u53ef\u80fd\u5982\u4e0b\u6240\u793a\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'struct ContentView: View {\n    @Environment(\\.requestReview) var requestReview\n\n    var body: some View {\n        Text("\u4f60\u597d\uff0c\u4e16\u754c\uff01")\n            .padding()\n            .onAppear {\n                requestReviewIfAppropriated()\n            }\n    }\n    @MainActor\n    private func requestReviewIfAppropriated() {\n        let numberOfVisits = 10\n        let numberOfSignificantEvents = 10\n        if numberOfVisits > 5 || numberOfSignificantEvents > 5 {\n            requestReview()\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5b9e\u9645\u4e0a\uff0c",(0,t.jsx)(n.code,{children:"numberOfVisits"}),"\u548c",(0,t.jsx)(n.code,{children:"numberOfSignificantEvents"}),"\u5e94\u8be5\u6765\u81ea\u60a8\u7684\u6570\u636e\u5e93\uff0c\u5373",(0,t.jsx)(n.code,{children:"UserDefaults"}),"\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u539f\u6587(\u82f1\u6587)\uff1a",(0,t.jsx)(n.a,{href:"https://sarunw.com/posts/how-to-request-users-to-review-app-in-swiftui/",children:"https://sarunw.com/posts/how-to-request-users-to-review-app-in-swiftui/"})]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},6454:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var t=i(9953);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);