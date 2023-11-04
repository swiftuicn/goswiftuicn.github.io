"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2647],{3631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(1874),r=t(6454);const o={title:"\u6846\u67b6\u96c6\u6210 - SwiftUI \u4e2d\u7684 UIKit",description:"\u6846\u67b6\u96c6\u6210 - SwiftUI \u4e2d\u7684 UIKit",sidebar_position:6,sidebar_label:"\u6846\u67b6\u96c6\u6210 - SwiftUI \u4e2d\u7684 UIKit"},a="\u6846\u67b6\u96c6\u6210 - SwiftUI \u4e2d\u7684 UIKit",l={id:"framework-integration-uikit-in-swiftui",title:"\u6846\u67b6\u96c6\u6210 - SwiftUI \u4e2d\u7684 UIKit",description:"\u6846\u67b6\u96c6\u6210 - SwiftUI \u4e2d\u7684 UIKit",source:"@site/docs/framework-integration-uikit-in-swiftui.md",sourceDirName:".",slug:"/framework-integration-uikit-in-swiftui",permalink:"/framework-integration-uikit-in-swiftui",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u6846\u67b6\u96c6\u6210 - SwiftUI \u4e2d\u7684 UIKit",description:"\u6846\u67b6\u96c6\u6210 - SwiftUI \u4e2d\u7684 UIKit",sidebar_position:6,sidebar_label:"\u6846\u67b6\u96c6\u6210 - SwiftUI \u4e2d\u7684 UIKit"},sidebar:"tutorialSidebar",previous:{title:"SwiftUI - \u89c6\u56fe\u5e03\u5c40\u548c\u6f14\u793a",permalink:"/swiftui-view-layout-and-presentation"},next:{title:"\u6846\u67b6\u96c6\u6210 - UIKit \u4e2d\u7684 SwiftUI",permalink:"/framework-integration-swiftui-in-uikit"}},s={},c=[{value:"UIViewRepresentable",id:"uiviewrepresentable",level:2},{value:"UIViewControllerRepresentable",id:"uiviewcontrollerrepresentable",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u6846\u67b6\u96c6\u6210---swiftui-\u4e2d\u7684-uikit",children:"\u6846\u67b6\u96c6\u6210 - SwiftUI \u4e2d\u7684 UIKit"}),"\n",(0,i.jsx)(n.h2,{id:"uiviewrepresentable",children:"UIViewRepresentable"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee3\u8868 UIKit \u89c6\u56fe\u7684\u89c6\u56fe\u3002 \u5f53\u4f60\u60f3\u5728\u91cc\u9762\u4f7f\u7528 UIView \u65f6\u4f7f\u7528\u8fd9\u4e2a SwiftUI\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u8981\u4f7f\u4efb\u4f55 UIView \u5728 SwiftUI \u4e2d\u53ef\u7528\uff0c\u8bf7\u521b\u5efa\u4e00\u4e2a\u7b26\u5408",(0,i.jsx)(n.code,{children:"UIViewRepresentable"}),"\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"import UIKit\nimport SwiftUI\n\nstruct ActivityIndicator: UIViewRepresentable {\n    @Binding var isAnimating: Bool\n\n    func makeUIView(context: Context) -> UIActivityIndicatorView {\n        let v = UIActivityIndicatorView()\n\n        return v\n    }\n\n    func updateUIView(_ uiView: UIActivityIndicatorView, context: Context) {\n        if isAnimating {\n            uiView.startAnimating()\n        } else {\n            uiView.stopAnimating()\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u5728 UIKit \u6570\u636e\u7ed1\u5b9a\uff08\u59d4\u6258\u3001\u76ee\u6807/\u52a8\u4f5c\uff09\u548c SwiftUI\uff0c\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"Coordinator"}),"\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u4ee5\u5728 ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/tutorials/swiftui/interfacing-with-uikit",children:"SwiftUI \u6559\u7a0b"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"import SwiftUI\nimport UIKit\n\nstruct PageControl: UIViewRepresentable {\n    var numberOfPages: Int\n    @Binding var currentPage: Int\n\n    func makeUIView(context: Context) -> UIPageControl {\n        let control = UIPageControl()\n        control.numberOfPages = numberOfPages\n        control.addTarget(\n            context.coordinator,\n            action: #selector(Coordinator.updateCurrentPage(sender:)),\n            for: .valueChanged)\n\n        return control\n    }\n\n    func updateUIView(_ uiView: UIPageControl, context: Context) {\n        uiView.currentPage = currentPage\n    }\n\n    func makeCoordinator() -> Coordinator {\n        Coordinator(self)\n    }\n\n    // This is where old paradigm located\n    class Coordinator: NSObject {\n        var control: PageControl\n\n        init(_ control: PageControl) {\n            self.control = control\n        }\n\n        @objc func updateCurrentPage(sender: UIPageControl) {\n            control.currentPage = sender.currentPage\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/uiviewrepresentable",children:"\u6587\u6863 - UIViewRepresentable"})}),"\n",(0,i.jsx)(n.h2,{id:"uiviewcontrollerrepresentable",children:"UIViewControllerRepresentable"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee3\u8868 UIKit \u89c6\u56fe\u63a7\u5236\u5668\u7684\u89c6\u56fe\u3002 \u60f3\u7528\u7684\u65f6\u5019\u7528\u8fd9\u4e2a SwiftUI \u4e2d\u7684 UIViewController\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u8981\u4f7f\u4efb\u4f55 UIViewController \u5728 SwiftUI \u4e2d\u53ef\u7528\uff0c\u8bf7\u521b\u5efa\u4e00\u4e2a\u7b26\u5408 ",(0,i.jsx)(n.code,{children:"UIViewControllerRepresentable"}),"\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u4ee5\u5728 ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/tutorials/swiftui/interfacing-with-uikit",children:"SwiftUI \u6559\u7a0b"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"import SwiftUI\nimport UIKit\n\nstruct PageViewController: UIViewControllerRepresentable {\n    var controllers: [UIViewController]\n\n    func makeUIViewController(context: Context) -> UIPageViewController {\n        let pageViewController = UIPageViewController(\n            transitionStyle: .scroll,\n            navigationOrientation: .horizontal)\n\n        return pageViewController\n    }\n\n    func updateUIViewController(_ pageViewController: UIPageViewController, context: Context) {\n        pageViewController.setViewControllers(\n            [controllers[0]], direction: .forward, animated: true)\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/uiviewcontrollerrepresentable",children:"\u6587\u6863 - UIViewControllerRepresentable"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},6454:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var i=t(9953);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);