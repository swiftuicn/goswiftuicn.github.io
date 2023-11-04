"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5096],{4714:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=i(1874),t=i(6454);const o={title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u5173\u95ed\u952e\u76d8",description:"\u5728iOS 15\u4e2d\uff0cSwiftUI\u5f15\u5165\u4e86\u4e00\u79cd\u672c\u5730\u65b9\u6cd5\uff0c\u4f7f\u7528\u65b0\u7684\u5c5e\u6027\u5305\u88c5\u5668@FocusState\u548cfocused(_:)\u4fee\u6539\u5668\u6765\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5173\u95ed\u952e\u76d8\u3002",authors:["swift"],tags:["SwiftUI","\u952e\u76d8"]},c=void 0,d={permalink:"/blog/2023/11/04/dismiss-keyboard-in-swiftui",source:"@site/blog/2023-11-04-dismiss-keyboard-in-swiftui/index.md",title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u5173\u95ed\u952e\u76d8",description:"\u5728iOS 15\u4e2d\uff0cSwiftUI\u5f15\u5165\u4e86\u4e00\u79cd\u672c\u5730\u65b9\u6cd5\uff0c\u4f7f\u7528\u65b0\u7684\u5c5e\u6027\u5305\u88c5\u5668@FocusState\u548cfocused(_:)\u4fee\u6539\u5668\u6765\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5173\u95ed\u952e\u76d8\u3002",date:"2023-11-04T00:00:00.000Z",formattedDate:"2023\u5e7411\u67084\u65e5",tags:[{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"\u952e\u76d8",permalink:"/blog/tags/\u952e\u76d8"}],readingTime:2.17,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u5173\u95ed\u952e\u76d8",description:"\u5728iOS 15\u4e2d\uff0cSwiftUI\u5f15\u5165\u4e86\u4e00\u79cd\u672c\u5730\u65b9\u6cd5\uff0c\u4f7f\u7528\u65b0\u7684\u5c5e\u6027\u5305\u88c5\u5668@FocusState\u548cfocused(_:)\u4fee\u6539\u5668\u6765\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5173\u95ed\u952e\u76d8\u3002",authors:["swift"],tags:["SwiftUI","\u952e\u76d8"]},unlisted:!1,nextItem:{title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u8bf7\u6c42\u7528\u6237\u5bf9\u60a8\u7684\u5e94\u7528\u8fdb\u884c\u8bc4\u4ef7",permalink:"/blog/2023/11/04/how-to-request-users-to-review-app-in-swiftui"}},r={authorsImageUrls:[void 0]},l=[{value:"\u5982\u4f55\u5728 SwiftUI \u4e2d\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5173\u95ed\u952e\u76d8",id:"\u5982\u4f55\u5728-swiftui-\u4e2d\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5173\u95ed\u952e\u76d8",level:2},{value:"\u5982\u4f55\u63a7\u5236\u7126\u70b9\u72b6\u6001",id:"\u5982\u4f55\u63a7\u5236\u7126\u70b9\u72b6\u6001",level:2}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"\u5982\u4f55\u5728 SwiftUI \u4e2d\u5173\u95ed\u952e\u76d8"}),"\n",(0,n.jsx)(s.p,{children:"\u4e86\u89e3\u5982\u4f55\u5728 SwiftUI \u4e2d\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5173\u95ed\u952e\u76d8\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u5728 iOS 15 \u4e2d\uff0cSwiftUI \u5f15\u5165\u4e86\u4e00\u79cd\u672c\u5730\u65b9\u6cd5\uff0c\u4f7f\u7528\u65b0\u7684\u5c5e\u6027\u5305\u88c5\u5668",(0,n.jsx)(s.a,{href:"https://developer.apple.com/documentation/swiftui/focusstate",children:(0,n.jsx)(s.code,{children:"@FocusState"})}),"\u548c",(0,n.jsx)(s.a,{href:"https://developer.apple.com/documentation/swiftui/view/focused(_:)",children:(0,n.jsx)(s.code,{children:"focused(_:)"})}),"\u4fee\u6539\u5668\u6765\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5173\u95ed\u952e\u76d8\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u5982\u4f55\u5728-swiftui-\u4e2d\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5173\u95ed\u952e\u76d8",children:"\u5982\u4f55\u5728 SwiftUI \u4e2d\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5173\u95ed\u952e\u76d8"}),"\n",(0,n.jsx)(s.p,{children:"\u952e\u76d8\u7684\u663e\u793a\u548c\u9690\u85cf\u57fa\u4e8e\u6587\u672c\u5b57\u6bb5\u7684\u7126\u70b9\u72b6\u6001\u3002"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u5f53\u6587\u672c\u5b57\u6bb5\u83b7\u5f97\u7126\u70b9\u65f6\uff0c\u952e\u76d8\u5c06\u663e\u793a\u3002"}),"\n",(0,n.jsx)(s.li,{children:"\u5f53\u6587\u672c\u5b57\u6bb5\u5931\u53bb\u7126\u70b9\u65f6\uff0c\u952e\u76d8\u5c06\u6d88\u5931\u3002"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"\u8981\u5173\u95ed\u952e\u76d8\uff0c\u6211\u4eec\u9700\u8981\u80fd\u591f\u63a7\u5236\u6587\u672c\u5b57\u6bb5\u7684\u7126\u70b9\u3002"}),"\n",(0,n.jsx)(s.h2,{id:"\u5982\u4f55\u63a7\u5236\u7126\u70b9\u72b6\u6001",children:"\u5982\u4f55\u63a7\u5236\u7126\u70b9\u72b6\u6001"}),"\n",(0,n.jsxs)(s.p,{children:["\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,n.jsx)(s.a,{href:"https://developer.apple.com/documentation/swiftui/view/focused(_:)",children:(0,n.jsx)(s.code,{children:"focused(_:)"})}),"\u4fee\u6539\u5668\u6765\u76d1\u542c\u548c\u63a7\u5236\u7279\u5b9a\u8f93\u5165\u7684\u7126\u70b9\u72b6\u6001\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u6b64\u4fee\u6539\u5668\u9700\u8981\u4e00\u4e2a\u540d\u4e3a",(0,n.jsx)(s.a,{href:"https://developer.apple.com/documentation/swiftui/focusstate",children:(0,n.jsx)(s.code,{children:"FocusState"})}),"\u7684\u7279\u6b8a\u7c7b\u578b\u6765\u7ed1\u5b9a\u7126\u70b9\u72b6\u6001\u3002"]}),"\n",(0,n.jsx)(s.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5176\u4e2d\u6211\u4eec\u5728\u201c\u767b\u5f55\u201d\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\u9690\u85cf\u952e\u76d8\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-swift",children:'struct ContentView: View {\n    @State private var username = ""\n    // 1\n    @FocusState private var isFocused: Bool\n\n    var body: some View {\n        VStack {\n            // 2\n            TextField("\u7528\u6237\u540d", text: $username)\n                .focused($isFocused)\n            Button("\u767b\u5f55") {\n                // 3\n                isFocused = false\n            }\n        }\n        .padding()\n    }\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["1 \u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a",(0,n.jsx)(s.code,{children:"@FocusState"}),"\u53d8\u91cf\uff0c\u7528\u4e8e\u4e0e\u6587\u672c\u5b57\u6bb5\u7684\u7126\u70b9\u72b6\u6001\u7ed1\u5b9a\u3002 2 \u6211\u4eec\u4f7f\u7528",(0,n.jsx)(s.code,{children:".focused($isFocused)"}),"\u4fee\u6539\u5668\u7ed1\u5b9a\u7126\u70b9\u72b6\u6001\u3002 3 \u4e3a\u4e86\u5173\u95ed\u952e\u76d8\uff0c\u6211\u4eec\u901a\u8fc7\u5c06\u7126\u70b9\u72b6\u6001\u8bbe\u7f6e\u4e3a",(0,n.jsx)(s.code,{children:"false"}),"\u6765\u53d6\u6d88\u6587\u672c\u5b57\u6bb5\u7684\u7126\u70b9\uff0c",(0,n.jsx)(s.code,{children:"isFocused = false"}),"\u3002"]}),"\n",(0,n.jsx)(s.p,{children:"\u5f53\u70b9\u51fb\u6587\u672c\u5b57\u6bb5\u65f6\uff1a"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"\u5b83\u5c06\u83b7\u5f97\u7126\u70b9\u3002"}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"isFocused"}),"\u5c06\u53d8\u4e3a",(0,n.jsx)(s.code,{children:"true"}),"\u3002"]}),"\n",(0,n.jsx)(s.li,{children:"\u952e\u76d8\u5c06\u663e\u793a\u3002"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5f53\u6211\u4eec\u5c06",(0,n.jsx)(s.code,{children:"isFocused"}),"\u91cd\u65b0\u8bbe\u7f6e\u4e3a",(0,n.jsx)(s.code,{children:"false"}),"\u65f6\uff1a"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"\u6587\u672c\u5b57\u6bb5\u653e\u5f03\u7126\u70b9\u3002"}),"\n",(0,n.jsx)(s.li,{children:"\u952e\u76d8\u5c06\u5173\u95ed\u3002"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://sarunw.com/images/dismiss-keyboard-in-swiftui-demo.gif",alt:"\u4f7f\u7528isFocused\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5173\u95ed\u952e\u76d8\u3002"})}),"\n",(0,n.jsxs)(s.p,{children:["\u4f7f\u7528",(0,n.jsx)(s.code,{children:"isFocused"}),"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5173\u95ed\u952e\u76d8\u3002"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\u539f\u6587(\u82f1\u6587)\uff1a",(0,n.jsx)(s.a,{href:"https://sarunw.com/posts/dismiss-keyboard-in-swiftui/",children:"https://sarunw.com/posts/dismiss-keyboard-in-swiftui/"})]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},6454:(e,s,i)=>{i.d(s,{Z:()=>d,a:()=>c});var n=i(9953);const t={},o=n.createContext(t);function c(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);