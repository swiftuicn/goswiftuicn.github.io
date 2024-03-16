"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2843],{6463:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>w});var r=i(5893),t=i(1151);const o={title:"\u7528SwiftUI\u8f7b\u677e\u4f7f\u7528SFSafariViewController\u5b9e\u73b0\u5728APP\u91cc\u6253\u5f00\u7f51\u9875",description:"\u5b66\u4e60\u5982\u4f55\u5728SwiftUI\u5e94\u7528\u4e2d\u4f7f\u7528SFSafariViewController\u521b\u5efa\u5305\u88c5\u5668\uff0c\u4ee5\u5b9e\u73b0\u5728\u5e94\u7528\u5185\u800c\u975e\u5916\u90e8\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u7f51\u9875\u3002\u901a\u8fc7\u6b64\u6559\u7a0b\uff0c\u60a8\u5c06\u4e86\u89e3\u521b\u5efa\u53ef\u91cd\u7528\u4ee3\u7801\u3001\u6355\u83b7\u4efb\u4f55\u5373\u5c06\u79bb\u5f00\u7684URL\uff0c\u5e76\u901a\u8fc7\u73af\u5883\u5bf9\u8c61\u5728\u5e94\u7528\u7a0b\u5e8f\u5185\u5448\u73b0\u5b83\u4eec\u7684\u6b65\u9aa4\u3002",authors:["swift"],tags:["SwiftUI","SFSafariViewController"]},l=void 0,s={permalink:"/blog/2023/12/07/sfsafariviewcontroller-open-webpages-in-app",source:"@site/blog/2023-12-07-sfsafariviewcontroller-open-webpages-in-app/index.md",title:"\u7528SwiftUI\u8f7b\u677e\u4f7f\u7528SFSafariViewController\u5b9e\u73b0\u5728APP\u91cc\u6253\u5f00\u7f51\u9875",description:"\u5b66\u4e60\u5982\u4f55\u5728SwiftUI\u5e94\u7528\u4e2d\u4f7f\u7528SFSafariViewController\u521b\u5efa\u5305\u88c5\u5668\uff0c\u4ee5\u5b9e\u73b0\u5728\u5e94\u7528\u5185\u800c\u975e\u5916\u90e8\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u7f51\u9875\u3002\u901a\u8fc7\u6b64\u6559\u7a0b\uff0c\u60a8\u5c06\u4e86\u89e3\u521b\u5efa\u53ef\u91cd\u7528\u4ee3\u7801\u3001\u6355\u83b7\u4efb\u4f55\u5373\u5c06\u79bb\u5f00\u7684URL\uff0c\u5e76\u901a\u8fc7\u73af\u5883\u5bf9\u8c61\u5728\u5e94\u7528\u7a0b\u5e8f\u5185\u5448\u73b0\u5b83\u4eec\u7684\u6b65\u9aa4\u3002",date:"2023-12-07T00:00:00.000Z",formattedDate:"2023\u5e7412\u67087\u65e5",tags:[{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"SFSafariViewController",permalink:"/blog/tags/sf-safari-view-controller"}],readingTime:6.295,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"\u7528SwiftUI\u8f7b\u677e\u4f7f\u7528SFSafariViewController\u5b9e\u73b0\u5728APP\u91cc\u6253\u5f00\u7f51\u9875",description:"\u5b66\u4e60\u5982\u4f55\u5728SwiftUI\u5e94\u7528\u4e2d\u4f7f\u7528SFSafariViewController\u521b\u5efa\u5305\u88c5\u5668\uff0c\u4ee5\u5b9e\u73b0\u5728\u5e94\u7528\u5185\u800c\u975e\u5916\u90e8\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u7f51\u9875\u3002\u901a\u8fc7\u6b64\u6559\u7a0b\uff0c\u60a8\u5c06\u4e86\u89e3\u521b\u5efa\u53ef\u91cd\u7528\u4ee3\u7801\u3001\u6355\u83b7\u4efb\u4f55\u5373\u5c06\u79bb\u5f00\u7684URL\uff0c\u5e76\u901a\u8fc7\u73af\u5883\u5bf9\u8c61\u5728\u5e94\u7528\u7a0b\u5e8f\u5185\u5448\u73b0\u5b83\u4eec\u7684\u6b65\u9aa4\u3002",authors:["swift"],tags:["SwiftUI","SFSafariViewController"]},unlisted:!1,prevItem:{title:"\u5982\u4f55\u4ee5\u53ca\u4f55\u65f6\u4f7f\u7528 Swift \u4e2d\u7684\u6269\u5c55",permalink:"/blog/2024/03/04/extensions-in-swift-how-and-when-to-use-them"},nextItem:{title:"iOS 17\u4e2d\u7684SwiftUI\u5206\u680f\u89c6\u56fe\u63a7\u5236\uff1a\u9996\u9009\u7d27\u51d1\u5217\u8be6\u89e3",permalink:"/blog/2023/12/07/swiftui-splitview-compact-column-control"}},a={authorsImageUrls:[void 0]},w=[{value:"\u4e3a SFSafariViewController \u521b\u5efa SwiftUI \u5305\u88c5\u5668",id:"\u4e3a-sfsafariviewcontroller-\u521b\u5efa-swiftui-\u5305\u88c5\u5668",level:2},{value:"\u521b\u5efa\u53ef\u91cd\u7528\u7684\u89c6\u56fe\u4fee\u9970\u7b26",id:"\u521b\u5efa\u53ef\u91cd\u7528\u7684\u89c6\u56fe\u4fee\u9970\u7b26",level:2},{value:"\u5728 SwiftUI \u4e2d\u5448\u73b0 SFSafariViewController",id:"\u5728-swiftui-\u4e2d\u5448\u73b0-sfsafariviewcontroller",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"SFSafariViewController \u53ef\u7528\u4e8e\u8ba9\u7528\u6237\u5728\u5e94\u7528\u5185\u800c\u975e\u5916\u90e8\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u7f51\u9875\u3002\u867d\u7136\u8be5\u89c6\u56fe\u63a7\u5236\u5668\u5728 UIKit \u4e2d\u8fd0\u884c\u826f\u597d\uff0c\u4f46\u5728 SwiftUI \u5e94\u7528\u4e2d\u8ba9\u5176\u6b63\u5e38\u5de5\u4f5c\u53ef\u80fd\u5177\u6709\u6311\u6218\u6027\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6bcf\u5f53\u4f60\u9047\u5230\u53ea\u6709 UIKit \u89e3\u51b3\u65b9\u6848\u53ef\u7528\u7684\u60c5\u51b5\u65f6\uff0c\u4f60\u60f3\u77e5\u9053\u5982\u4f55\u7f16\u5199\u4e00\u4e2a\u5305\u88c5\u5668\u5e76\u4f7f UIKit \u7c7b\u5bf9 SwiftUI \u89c6\u56fe\u53ef\u7528\u3002\u6700\u597d\u7684\u60c5\u51b5\u662f\uff0c\u5b83\u662f\u53ef\u91cd\u7528\u7684\uff0c\u4ee5\u4fbf\u7a0d\u540e\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\u5b83\u3002\u8ba9\u6211\u4eec\u6df1\u5165\u4e86\u89e3\u5427\uff01"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e3a-sfsafariviewcontroller-\u521b\u5efa-swiftui-\u5305\u88c5\u5668",children:"\u4e3a SFSafariViewController \u521b\u5efa SwiftUI \u5305\u88c5\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u901a\u8fc7\u521b\u5efa ",(0,r.jsx)(n.code,{children:"UIViewRepresentable"})," \u7684\u5b9e\u73b0\u6765\u5f00\u59cb\u5b9e\u73b0 ",(0,r.jsx)(n.code,{children:"SFSafariViewController"})," \u7684 SwiftUI \u5305\u88c5\u5668\u3002\u8be5\u534f\u8bae\u5141\u8bb8\u6211\u4eec\u521b\u5efa\u4e00\u4e2a SwiftUI \u89c6\u56fe\uff0c\u8be5\u89c6\u56fe\u5305\u88c5\u4e86 UIKit \u89c6\u56fe\u63a7\u5236\u5668\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"struct SFSafariView: UIViewControllerRepresentable {\n    let url: URL\n\n    func makeUIViewController(context: UIViewControllerRepresentableContext<Self>) -> SFSafariViewController {\n        return SFSafariViewController(url: url)\n    }\n\n    func updateUIViewController(_ uiViewController: SFSafariViewController, context: UIViewControllerRepresentableContext<SFSafariView>) {\n        // \u8fd9\u91cc\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u4e8b\u60c5\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u9700\u8981\u5b9e\u73b0\u4e24\u4e2a\u65b9\u6cd5\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"makeUIViewController"})," \u5c06\u88ab\u8c03\u7528\u4ee5\u521b\u5efa ",(0,r.jsx)(n.code,{children:"UIViewController"})," \u5b9e\u4f8b"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"updateUIViewController"})," \u5c06\u88ab\u8c03\u7528\u4ee5\u4f7f\u7528 SwiftUI \u4e2d\u7684\u65b0\u4fe1\u606f\u66f4\u65b0 ",(0,r.jsx)(n.code,{children:"UIViewController"})," \u7684\u72b6\u6001"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6211\u4eec\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u9700\u4f7f\u7528\u7ed9\u5b9a\u7684 URL \u5b9e\u4f8b\u5316 ",(0,r.jsx)(n.code,{children:"SFSafariViewController"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u540c\u6837\u7684\u6280\u672f\u4e5f\u9002\u7528\u4e8e ",(0,r.jsx)(n.code,{children:"UIView"})," \u5b9e\u4f8b\uff0c\u6211\u5728\u6211\u7684\u6587\u7ae0\u4e2d\u5df2\u7ecf\u89e3\u91ca\u8fc7",(0,r.jsx)(n.a,{href:"https://www.avanderlee.com/swiftui/integrating-swiftui-with-uikit/",children:"\u4f7f\u7528 UIViewRepresentable \u5c06 UIView \u5b9e\u4f8b\u96c6\u6210\u5230 SwiftUI \u4e2d"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u521b\u5efa\u53ef\u91cd\u7528\u7684\u89c6\u56fe\u4fee\u9970\u7b26",children:"\u521b\u5efa\u53ef\u91cd\u7528\u7684\u89c6\u56fe\u4fee\u9970\u7b26"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u603b\u662f\u559c\u6b22\u4ece\u4e00\u5f00\u59cb\u5c31\u7f16\u5199\u53ef\u91cd\u7528\u7684\u4ee3\u7801\uff0c\u4ee5\u5141\u8bb8\u6211\u7684\u4ee3\u7801\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\u3002\u6211\u751a\u81f3\u6709\u4e00\u4e2a\u4e13\u95e8\u7528\u4e8e\u6269\u5c55\u7684\u5305\uff0c\u6211\u53ef\u4ee5\u8f7b\u677e\u5730\u5728\u4e0d\u540c\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u91cd\u590d\u4f7f\u7528\u5b83\uff0c\u4ece\u800c\u5728\u9047\u5230\u4ee5\u524d\u89c1\u8fc7\u7684\u95ee\u9898\u65f6\u66f4\u5feb\u5730\u7f16\u5199\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u60f3\u8981\u4e00\u4e2a\u89c6\u56fe\u4fee\u9970\u7b26\uff0c\u5b83\u53ef\u4ee5\u6355\u83b7\u901a\u5e38\u5728\u5916\u90e8\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u7684\u4efb\u4f55\u94fe\u63a5\u3002\u5728 SwiftUI \u4e2d\uff0c\u8fd9\u4e9b\u94fe\u63a5\u53ef\u4ee5\u5982\u4e0b\u751f\u6210\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'struct SwiftUILinksView: View {\n    var body: some View {\n        VStack(spacing: 20) {\n            /// \u4f7f\u7528 `Link` \u89c6\u56fe\u521b\u5efa\u94fe\u63a5\uff1a\n            Link("SwiftUI Link \u793a\u4f8b", destination: URL(string: "https://www.rocketsim.app")!)\n\n            /// \u4f7f\u7528 markdown \u521b\u5efa\u94fe\u63a5\uff1a\n            Text("Markdown \u94fe\u63a5\u793a\u4f8b: [RocketSim](https://www.rocketsim.app)")\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u952e\u662f\u5728\u73af\u5883\u89c6\u56fe\u4fee\u9970\u7b26\u5185\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"openURL"})," \u73af\u5883\u5c5e\u6027\u3002\u89c6\u56fe\u4fee\u9970\u7b26\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"/// \u76d1\u63a7 `openURL` \u73af\u5883\u53d8\u91cf\u5e76\u5728\u5e94\u7528\u5185\u5904\u7406\u5b83\u4eec\u800c\u4e0d\u662f\u901a\u8fc7\u5916\u90e8\u7f51\u7edc\u6d4f\u89c8\u5668\u5904\u7406\u5b83\u4eec\u3002\nprivate struct SafariViewControllerViewModifier: ViewModifier {\n    @State private var urlToOpen: URL?\n\n    func body(content: Content) -> some View {\n        content\n            .environment(\\.openURL, OpenURLAction { url in\n                /// \u6355\u83b7\u5373\u5c06\u5728\u5916\u90e8\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u7684\u4efb\u4f55 URL\u3002\n                /// \u76f8\u53cd\uff0c\u5728\u8fd9\u91cc\u5904\u7406\u5b83\u4eec\u5e76\u5b58\u50a8 URL \u4ee5\u5728\u6211\u4eec\u7684 sheet \u4e2d\u91cd\u65b0\u6253\u5f00\u3002\n                urlToOpen = url\n                return .handled\n            })\n            .sheet(isPresented: $urlToOpen.mappedToBool(), onDismiss: {\n                urlToOpen = nil\n            }, content: {\n                SFSafariView(url: urlToOpen!)\n            })\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u4f7f\u7528\u89c6\u56fe\u4fee\u9970\u7b26\u6765\u6355\u83b7\u4efb\u4f55\u6b63\u5728\u8fdb\u884c\u7684 URL\uff0c\u5e76\u5c06\u5b83\u4eec\u7528\u4f5c\u6211\u4eec sheet \u7684\u8f93\u5165\u3002\u8be5 sheet \u5c06\u4f7f\u7528\u6211\u4eec\u4e4b\u524d\u521b\u5efa\u7684 ",(0,r.jsx)(n.code,{children:"SFSafariView"})," \u6765\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"SFSafariViewController"})," \u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5448\u73b0 URL\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u53e6\u4e00\u4e2a\u6269\u5c55\uff0c\u8be5\u6269\u5c55\u5141\u8bb8\u5c06\u4efb\u4f55\u53ef\u9009\u7ed1\u5b9a\u6620\u5c04\u5230\u5e03\u5c14\u7ed1\u5b9a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"extension Binding where Value == Bool {\n    init(binding: Binding<(some Any)?>) {\n        self.init(\n            get: {\n                binding.wrappedValue != nil\n            },\n            set: { newValue in\n                guard newValue == false else { return }\n\n                // \u6211\u4eec\u53ea\u5904\u7406 `false` \u5e03\u5c14\u503c\u4ee5\u5c06\u6211\u4eec\u7684\u53ef\u9009\u503c\u8bbe\u7f6e\u4e3a `nil`\n                // \u56e0\u4e3a\u6211\u4eec\u4e0d\u80fd\u5904\u7406\u7528\u4e8e\u6062\u590d\u5148\u524d\u503c\u7684 `true`\u3002\n                binding.wrappedValue = nil\n            }\n        )\n    }\n}\n\nextension Binding {\n    /// \u5c06\u53ef\u9009\u7ed1\u5b9a\u6620\u5c04\u5230 `Binding<Bool>`\u3002\n    /// \u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528 `Error?` \u5bf9\u8c61\u6765\u51b3\u5b9a\u662f\u5426\u663e\u793a\u8b66\u62a5\uff0c\u800c\u65e0\u9700\u4f9d\u8d56\u4e8e\u5355\u72ec\u5904\u7406\u7684 `Binding<Bool>`\u3002\n    func mappedToBool<Wrapped>() -> Binding<Bool> where Value == Wrapped? {\n        Binding<Bool>(binding: self)\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u662f\u6211\u5728\u7f16\u5199 SwiftUI \u89e3\u51b3\u65b9\u6848\u65f6\u7ecf\u5e38\u91cd\u590d\u4f7f\u7528\u7684\u6269\u5c55\u4e4b\u4e00\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u540e\u7f3a\u5931\u7684\u662f\u4e00\u4e2a\u65b9\u4fbf\u7684\u89c6\u56fe\u6269\u5c55\uff0c\u4ee5\u66f4\u8f7b\u677e\u5730\u8bbf\u95ee\u6211\u4eec\u7684\u903b\u8f91\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"extension View {\n    /// \u76d1\u63a7 `openURL` \u73af\u5883\u53d8\u91cf\u5e76\u5728\u5e94\u7528\u5185\u5904\u7406\u5b83\u4eec\u800c\u4e0d\u662f\u901a\u8fc7\u5916\u90e8\u7f51\u7edc\u6d4f\u89c8\u5668\u5904\u7406\u5b83\u4eec\u3002\n    /// \u4f7f\u7528 `SafariViewWrapper`\uff0c\u8be5\u5305\u88c5\u5668\u5c06\u5728 `SFSafariViewController` \u4e2d\u5448\u73b0 URL\u3002\n    func handleOpenURLInApp() -> some View {\n        modifier(SafariViewControllerViewModifier())\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5728-swiftui-\u4e2d\u5448\u73b0-sfsafariviewcontroller",children:"\u5728 SwiftUI \u4e2d\u5448\u73b0 SFSafariViewController"}),"\n",(0,r.jsxs)(n.p,{children:["\u73b0\u5728\u6211\u4eec\u6709\u4e86\u6240\u6709\u7684\u903b\u8f91\uff0c\u6211\u4eec\u53ef\u4ee5\u5f00\u59cb\u5728 SwiftUI \u4e2d\u4f7f\u7528\u89c6\u56fe\u6269\u5c55\u65b9\u6cd5\u5448\u73b0\u4efb\u4f55\u5373\u5c06\u79bb\u5f00\u7684 URL \u5728 ",(0,r.jsx)(n.code,{children:"SFSafariViewController"})," \u4e2d\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5728\u6211\u4eec\u7684\u5782\u76f4\u5806\u6808\u4e0a\u4f7f\u7528\u89c6\u56fe\u6269\u5c55\u65b9\u6cd5\u6765\u5b9e\u73b0\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'struct SwiftUILinksView: View {\n    var body: some View {\n        VStack(spacing: 20) {\n            /// \u4f7f\u7528 `Link` \u89c6\u56fe\u521b\u5efa\u94fe\u63a5\uff1a\n            Link("SwiftUI Link \u793a\u4f8b", destination: URL(string: "https://www.rocketsim.app")!)\n\n            /// \u4f7f\u7528 markdown \u521b\u5efa\u94fe\u63a5\uff1a\n            Text("Markdown \u94fe\u63a5\u793a\u4f8b: [RocketSim](https://www.rocketsim.app)")\n        }\n            /// \u8fd9\u6355\u83b7\u4efb\u4f55\u6b63\u5728\u8fdb\u884c\u7684 URL\u3002\n            .handleOpenURLInApp()\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u786e\u4fdd\u4f60\u4e86\u89e3",(0,r.jsx)(n.a,{href:"https://www.avanderlee.com/swiftui/environmentobject/",children:"\u73af\u5883\u5bf9\u8c61\u662f\u5982\u4f55\u901a\u8fc7\u5b50\u89c6\u56fe\u4f20\u9012\u7684"}),"\u3002\u603b\u7684\u6765\u8bf4\uff0c\u8fd9\u6bb5\u4ee3\u7801\u5141\u8bb8\u6211\u4eec\u6355\u83b7\u4efb\u4f55\u5373\u5c06\u79bb\u5f00\u7684 URL \u5e76\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5448\u73b0\u5b83\u4eec\uff1a"]}),"\n",(0,r.jsx)("video",{autoplay:!0,loop:!0,muted:!0,src:"https://www.avanderlee.com/wp-content/uploads/2023/12/sfsafariviewcontroller_swiftui.mp4","max-width":"100%",width:"100%"}),"\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa\u5305\u88c5\u5668\u540e\uff0c\u60a8\u53ef\u4ee5\u5728 SwiftUI \u4e2d\u4f7f\u7528 SFSafariViewController\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u7ec8\u7ed3\u679c\u5141\u8bb8\u60a8\u901a\u8fc7\u91cd\u590d\u4f7f\u7528\u89c6\u56fe\u4fee\u9970\u7b26\u8f7b\u677e\u6355\u83b7\u4ee3\u7801\u4e2d\u7684\u4efb\u4f55\u5373\u5c06\u79bb\u5f00\u7684 URL\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u539f\u6587(\u82f1\u6587)\uff1a",(0,r.jsx)(n.a,{href:"https://www.avanderlee.com/swiftui/sfsafariviewcontroller-open-webpages-in-app/",children:"https://www.avanderlee.com/swiftui/sfsafariviewcontroller-open-webpages-in-app/"})]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>l});var r=i(7294);const t={},o=r.createContext(t);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);