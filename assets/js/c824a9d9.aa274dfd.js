"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4549],{2210:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var e=i(5893),s=i(1151);const r={title:"SwiftUI\u6570\u5b57\u53d8\u5316\u52a8\u753b\uff1aiOS 17\u65b0\u529f\u80fd\u6559\u7a0b",description:"\u5728iOS 17\u4e2d\uff0cSwiftUI\u5f15\u5165\u4e86\u4e00\u79cd\u5185\u7f6e\u65b9\u6cd5\uff0c\u901a\u8fc7 .contentTransition(.numericText()) \u5b9e\u73b0\u6570\u5b57\u52a8\u753b\u3002\u5b66\u4e60\u5982\u4f55\u5728SwiftUI\u4e2d\u5e94\u7528\u8fd9\u4e00\u65b0\u529f\u80fd\uff0c\u5448\u73b0\u51fa\u7f8e\u4e3d\u7684\u6570\u5b57\u53d8\u5316\u52a8\u753b\u3002",authors:["swift"],tags:["SwiftUI","swift","iOS17"]},o=void 0,a={permalink:"/blog/2023/11/27/animating-number-changes-in-swiftui",source:"@site/blog/2023-11-27-animating-number-changes-in-swiftui/index.md",title:"SwiftUI\u6570\u5b57\u53d8\u5316\u52a8\u753b\uff1aiOS 17\u65b0\u529f\u80fd\u6559\u7a0b",description:"\u5728iOS 17\u4e2d\uff0cSwiftUI\u5f15\u5165\u4e86\u4e00\u79cd\u5185\u7f6e\u65b9\u6cd5\uff0c\u901a\u8fc7 .contentTransition(.numericText()) \u5b9e\u73b0\u6570\u5b57\u52a8\u753b\u3002\u5b66\u4e60\u5982\u4f55\u5728SwiftUI\u4e2d\u5e94\u7528\u8fd9\u4e00\u65b0\u529f\u80fd\uff0c\u5448\u73b0\u51fa\u7f8e\u4e3d\u7684\u6570\u5b57\u53d8\u5316\u52a8\u753b\u3002",date:"2023-11-27T00:00:00.000Z",formattedDate:"2023\u5e7411\u670827\u65e5",tags:[{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"swift",permalink:"/blog/tags/swift"},{label:"iOS17",permalink:"/blog/tags/i-os-17"}],readingTime:1.665,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"SwiftUI\u6570\u5b57\u53d8\u5316\u52a8\u753b\uff1aiOS 17\u65b0\u529f\u80fd\u6559\u7a0b",description:"\u5728iOS 17\u4e2d\uff0cSwiftUI\u5f15\u5165\u4e86\u4e00\u79cd\u5185\u7f6e\u65b9\u6cd5\uff0c\u901a\u8fc7 .contentTransition(.numericText()) \u5b9e\u73b0\u6570\u5b57\u52a8\u753b\u3002\u5b66\u4e60\u5982\u4f55\u5728SwiftUI\u4e2d\u5e94\u7528\u8fd9\u4e00\u65b0\u529f\u80fd\uff0c\u5448\u73b0\u51fa\u7f8e\u4e3d\u7684\u6570\u5b57\u53d8\u5316\u52a8\u753b\u3002",authors:["swift"],tags:["SwiftUI","swift","iOS17"]},unlisted:!1,nextItem:{title:"SwiftUI \u4e0d\u9700\u8981\u6743\u9650\u8bbf\u95ee\u7528\u6237\u7167\u7247",permalink:"/blog/2023/11/13/swiftui-displaying-a-photo-picker"}},c={authorsImageUrls:[void 0]},l=[{value:"\u5728 iOS 17 \u4e2d\u5982\u4f55\u5b9e\u73b0\u6570\u5b57\u53d8\u5316\u52a8\u753b",id:"\u5728-ios-17-\u4e2d\u5982\u4f55\u5b9e\u73b0\u6570\u5b57\u53d8\u5316\u52a8\u753b",level:2}];function u(n){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.p,{children:"iOS 17 \u5e26\u6765\u4e86 SwiftUI \u4e2d\u4e00\u79cd\u65b0\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u6f02\u4eae\u7684\u6570\u5b57\u52a8\u753b\u3002\u8ba9\u6211\u4eec\u5b66\u4e60\u5982\u4f55\u505a\u5230\u8fd9\u4e00\u70b9\u3002"}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"\u5728 iOS 17 \u4e4b\u524d"}),"\uff0c\u5982\u679c\u4f60\u5c1d\u8bd5\u5728 SwiftUI \u4e2d\u5b9e\u73b0\u6570\u5b57\u52a8\u753b\uff0c\u4f60\u5c06\u5f97\u5230\u4e00\u4e2a\u7b80\u5355\u7684\u6de1\u5165/\u6de1\u51fa\u52a8\u753b\u3002"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{children:'swiftCopy code\nstruct ContentView: View {\n    @State private var number: Int = 0\n\n    var body: some View {\n        VStack(spacing: 20) {\n            Text("\\(number)")\n\n            Button {\n                withAnimation {\n                    number = .random(in: 0 ..< 200)\n                }\n            } label: {\n                Text("\u968f\u673a")\n            }\n        }\n        .font(.largeTitle)\n    }\n}\n'})}),"\n",(0,e.jsx)(t.p,{children:"\u8fd9\u662f\u4f60\u4f1a\u5f97\u5230\u7684\uff1a\u4e00\u4e2a\u6de1\u5165\u6de1\u51fa\u7684\u52a8\u753b\u3002"}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.img,{src:"https://sarunw.com/images/animating-number-changes-in-swiftui-old.gif",alt:"\u5728iOS 16\u4e2d\u5b9e\u73b0\u6570\u5b57\u53d8\u5316\u52a8\u753b\u3002"}),"\u5728 iOS 16 \u4e2d\u5b9e\u73b0\u6570\u5b57\u53d8\u5316\u52a8\u753b\u3002"]}),"\n",(0,e.jsx)(t.h2,{id:"\u5728-ios-17-\u4e2d\u5982\u4f55\u5b9e\u73b0\u6570\u5b57\u53d8\u5316\u52a8\u753b",children:"\u5728 iOS 17 \u4e2d\u5982\u4f55\u5b9e\u73b0\u6570\u5b57\u53d8\u5316\u52a8\u753b"}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"\u5728 iOS 17 \u4e2d"}),"\uff0cSwiftUI \u63d0\u4f9b\u4e86\u4e00\u79cd\u5185\u7f6e\u7684\u65b9\u6cd5\u6765\u5b9e\u73b0\u6570\u5b57\u52a8\u753b\u3002"]}),"\n",(0,e.jsx)(t.p,{children:"\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002"}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.img,{src:"https://sarunw.com/images/animating-number-changes-in-swiftui-new.gif",alt:"\u5728iOS 17\u4e2d\u5b9e\u73b0\u6570\u5b57\u53d8\u5316\u52a8\u753b\u3002"}),"\u5728 iOS 17 \u4e2d\u5b9e\u73b0\u6570\u5b57\u53d8\u5316\u52a8\u753b\u3002"]}),"\n",(0,e.jsxs)(t.p,{children:["\u8981\u5728 iOS 17 \u4e2d\u5b9e\u73b0\u6570\u5b57\u52a8\u753b\uff0c\u6211\u4eec\u5728\u6587\u672c\u89c6\u56fe\u4e0a\u5e94\u7528",(0,e.jsx)(t.code,{children:".contentTransition(.numericText())"}),"\u5373\u53ef\u3002"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{children:'swiftCopy code\nstruct ContentView: View {\n    @State private var number: Int = 0\n\n    var body: some View {\n        VStack(spacing: 20) {\n            // 1\n            Text("\\(number)")\n                .contentTransition(.numericText())\n            Button {\n                withAnimation {\n                    number = .random(in: 0 ..< 200)\n                }\n            } label: {\n                Text("\u968f\u673a")\n            }\n        }\n        .font(.largeTitle)\n    }\n}\n'})}),"\n",(0,e.jsxs)(t.p,{children:["\u8981\u4eab\u53d7\u8fd9\u4e2a\u7f8e\u4e3d\u7684\u52a8\u753b\uff0c\u6211\u4eec\u9700\u8981\u505a\u7684\u552f\u4e00\u4e00\u4ef6\u4e8b\u5c31\u662f\u4f7f\u7528",(0,e.jsx)(t.code,{children:".contentTransition"}),"\u4fee\u9970\u7b26\u5e76\u4f7f\u7528",(0,e.jsx)(t.code,{children:"numericText()"}),"\u8fc7\u6e21\u3002"]}),"\n",(0,e.jsxs)(t.blockquote,{children:["\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsxs)(t.li,{children:["\u539f\u6587(\u82f1\u6587)\uff1a",(0,e.jsx)(t.a,{href:"https://sarunw.com/posts/animating-number-changes-in-swiftui/",children:"https://sarunw.com/posts/animating-number-changes-in-swiftui/"})]}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:t}={...(0,s.a)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(u,{...n})}):u(n)}},1151:(n,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var e=i(7294);const s={},r=e.createContext(s);function o(n){const t=e.useContext(r);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),e.createElement(r.Provider,{value:t},n.children)}}}]);