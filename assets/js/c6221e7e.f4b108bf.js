"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9282],{4475:(i,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var e=n(6070),o=n(5296);const l={title:"iOS 17\u4e2d\u7684SwiftUI\u5206\u680f\u89c6\u56fe\u63a7\u5236\uff1a\u9996\u9009\u7d27\u51d1\u5217\u8be6\u89e3",description:"\u4e86\u89e3iOS 17\u4e2d\u65b0\u589e\u7684SwiftUI NavigationSplitView\u529f\u80fd\uff0c\u63a2\u7d22\u5982\u4f55\u5728\u5206\u680f\u89c6\u56fe\u6298\u53e0\u4e3a\u5355\u4e00\u5217\u65f6\u7cbe\u786e\u63a7\u5236\u663e\u793a\u54ea\u4e00\u5217\u3002\u901a\u8fc7\u5b9e\u4f8b\u6f14\u793a\u65b0\u7684\u521d\u59cb\u5316\u5668\u548cNavigationSplitViewColumn\u72b6\u6001\u7684\u4f7f\u7528\uff0c\u4f7f\u60a8\u80fd\u591f\u5b9a\u5236\u5206\u680f\u89c6\u56fe\u5728\u7d27\u51d1\u5bbd\u5ea6\u4e0b\u7684\u663e\u793a\u884c\u4e3a\u3002",authors:["swift"],tags:["SwiftUI","iOS 17"]},a=void 0,c={permalink:"/blog/2023/12/07/swiftui-splitview-compact-column-control",source:"@site/blog/2023-12-07-swiftui-splitview-compact-column-control/index.md",title:"iOS 17\u4e2d\u7684SwiftUI\u5206\u680f\u89c6\u56fe\u63a7\u5236\uff1a\u9996\u9009\u7d27\u51d1\u5217\u8be6\u89e3",description:"\u4e86\u89e3iOS 17\u4e2d\u65b0\u589e\u7684SwiftUI NavigationSplitView\u529f\u80fd\uff0c\u63a2\u7d22\u5982\u4f55\u5728\u5206\u680f\u89c6\u56fe\u6298\u53e0\u4e3a\u5355\u4e00\u5217\u65f6\u7cbe\u786e\u63a7\u5236\u663e\u793a\u54ea\u4e00\u5217\u3002\u901a\u8fc7\u5b9e\u4f8b\u6f14\u793a\u65b0\u7684\u521d\u59cb\u5316\u5668\u548cNavigationSplitViewColumn\u72b6\u6001\u7684\u4f7f\u7528\uff0c\u4f7f\u60a8\u80fd\u591f\u5b9a\u5236\u5206\u680f\u89c6\u56fe\u5728\u7d27\u51d1\u5bbd\u5ea6\u4e0b\u7684\u663e\u793a\u884c\u4e3a\u3002",date:"2023-12-07T00:00:00.000Z",tags:[{inline:!0,label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{inline:!0,label:"iOS 17",permalink:"/blog/tags/i-os-17"}],readingTime:2.39,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift",page:null}],frontMatter:{title:"iOS 17\u4e2d\u7684SwiftUI\u5206\u680f\u89c6\u56fe\u63a7\u5236\uff1a\u9996\u9009\u7d27\u51d1\u5217\u8be6\u89e3",description:"\u4e86\u89e3iOS 17\u4e2d\u65b0\u589e\u7684SwiftUI NavigationSplitView\u529f\u80fd\uff0c\u63a2\u7d22\u5982\u4f55\u5728\u5206\u680f\u89c6\u56fe\u6298\u53e0\u4e3a\u5355\u4e00\u5217\u65f6\u7cbe\u786e\u63a7\u5236\u663e\u793a\u54ea\u4e00\u5217\u3002\u901a\u8fc7\u5b9e\u4f8b\u6f14\u793a\u65b0\u7684\u521d\u59cb\u5316\u5668\u548cNavigationSplitViewColumn\u72b6\u6001\u7684\u4f7f\u7528\uff0c\u4f7f\u60a8\u80fd\u591f\u5b9a\u5236\u5206\u680f\u89c6\u56fe\u5728\u7d27\u51d1\u5bbd\u5ea6\u4e0b\u7684\u663e\u793a\u884c\u4e3a\u3002",authors:["swift"],tags:["SwiftUI","iOS 17"]},unlisted:!1,prevItem:{title:"\u7528SwiftUI\u8f7b\u677e\u4f7f\u7528SFSafariViewController\u5b9e\u73b0\u5728APP\u91cc\u6253\u5f00\u7f51\u9875",permalink:"/blog/2023/12/07/sfsafariviewcontroller-open-webpages-in-app"},nextItem:{title:"\u8bbe\u8ba1\u4f18\u79c0\u4ed8\u8d39\u5899\u76848\u4e2a\u6280\u5de7 | \u63d0\u9ad8\u5e94\u7528\u6536\u5165\u7684\u79d8\u8bc0",permalink:"/blog/2023/11/30/8-tips-to-design-a-great-paywall"}},s={authorsImageUrls:[void 0]},r=[{value:"NavigationSplitView",id:"navigationsplitview",level:2},{value:"\u9996\u9009\u7d27\u51d1\u5217",id:"\u9996\u9009\u7d27\u51d1\u5217",level:2}];function p(i){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...i.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.p,{children:"\u5728 iOS 17 \u4e2d\uff0cApple \u65b0\u589e\u4e86\u5bf9\u5206\u680f\u89c6\u56fe\uff08Split View\uff09\u6298\u53e0\u4e3a\u5355\u4e00\u5217\u65f6\u663e\u793a\u54ea\u4e00\u5217\u7684\u63a7\u5236\u529f\u80fd\u3002"}),"\n",(0,e.jsx)(t.h2,{id:"navigationsplitview",children:"NavigationSplitView"}),"\n",(0,e.jsxs)(t.p,{children:["\u5728 iOS 16 \u4e2d\uff0cApple \u5f15\u5165\u4e86",(0,e.jsx)(t.code,{children:"NavigationSplitView"}),"\uff0c\u7528\u4e8e\u5728 SwiftUI \u4e2d\u521b\u5efa\u4e24\u5217\u6216\u4e09\u5217\u5e03\u5c40\u3002iOS 16 \u4e2d\u7684",(0,e.jsx)(t.a,{href:"https://useyourloaf.com/blog/swiftui-split-view-configuration/",children:"\u5206\u680f\u89c6\u56fe\u914d\u7f6e"}),"\u5305\u542b\u63a7\u5236\u5217\u7684\u53ef\u89c1\u6027\u3001\u5bbd\u5ea6\u548c\u6837\u5f0f\u7684\u9009\u9879\u3002\u7136\u800c\uff0c\u5728\u8f83\u5c0f\u7684\u5bbd\u5ea6\u4e0b\uff0c\u7f3a\u5c11\u4e86\u63a7\u5236\u5206\u680f\u89c6\u56fe\u6298\u53e0\u4e3a\u5355\u4e00\u5217\u65f6\u663e\u793a\u54ea\u4e00\u5217\u7684 API\u3002Apple \u5728 iOS 17\uff08\u4ee5\u53ca macOS 14\uff09\u4e2d\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002"]}),"\n",(0,e.jsx)(t.h2,{id:"\u9996\u9009\u7d27\u51d1\u5217",children:"\u9996\u9009\u7d27\u51d1\u5217"}),"\n",(0,e.jsx)(t.p,{children:"\u5f53\u5206\u680f\u89c6\u56fe\u6298\u53e0\u4e3a\u5355\u4e00\u5217\u65f6\uff0c\u9ed8\u8ba4\u884c\u4e3a\u662f\u8ba9 SwiftUI \u6839\u636e\u5217\u7684\u5185\u5bb9\u81ea\u52a8\u9009\u62e9\u8981\u5728\u9876\u90e8\u663e\u793a\u54ea\u4e2a\u89c6\u56fe\u3002\u5728 iPhone \u4e0a\uff0c\u8fd9\u4f3c\u4e4e\u610f\u5473\u7740\u663e\u793a\u4fa7\u8fb9\u680f\u89c6\u56fe\uff0c\u4f46\u8fd9\u5e76\u4e0d\u603b\u662f\u6211\u60f3\u8981\u7684\u7ed3\u679c\u3002"}),"\n",(0,e.jsxs)(t.p,{children:["\u5728 iOS 17 \u4e2d\uff0c\u65b0\u589e\u4e86",(0,e.jsx)(t.strong,{children:"\u65b0\u7684\u521d\u59cb\u5316\u5668"}),"\uff0c\u7528\u4e8e\u521b\u5efa\u4e24\u5217\u6216\u4e09\u5217\u5206\u680f\u89c6\u56fe\u3002\u5728\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u7ed1\u5b9a\u5230",(0,e.jsx)(t.code,{children:"NavigationSplitViewColumn"}),"\u72b6\u6001\u7684\u53c2\u6570\uff0c\u8be5\u72b6\u6001\u63a7\u5236\u5206\u680f\u89c6\u56fe\u6298\u53e0\u65f6\u663e\u793a\u54ea\u4e00\u5217\u3002"]}),"\n",(0,e.jsx)(t.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u4e09\u5217\u7248\u672c\u7684\u4f8b\u5b50\uff0c\u6211\u5c06\u521d\u59cb\u72b6\u6001\u8bbe\u7f6e\u4e3a\u5728\u6298\u53e0\u65f6\u663e\u793a\u5185\u5bb9\u89c6\u56fe\uff1a"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-swift",children:"struct ContentView: View {\n  @State private var compactColumn = NavigationSplitViewColumn.content\n\n  var body: some View {\n    NavigationSplitView(preferredCompactColumn: $compactColumn) {\n      Sidebar(compactColumn: $compactColumn)\n    } content: {\n      Content(compactColumn: $compactColumn)\n    } detail: {\n      Detail(compactColumn: $compactColumn)\n    }\n  }\n}\n"})}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.code,{children:"NavigationSplitViewColumn"}),"\u7c7b\u578b\u6709\u4e09\u4e2a\u53ef\u80fd\u7684\u503c\uff0c\u5206\u522b\u662f",(0,e.jsx)(t.code,{children:"sidebar"}),"\u3001",(0,e.jsx)(t.code,{children:"content"}),"\u548c",(0,e.jsx)(t.code,{children:"detail"}),"\u5217\u3002\u66f4\u6539\u7d27\u51d1\u5217\u72b6\u6001\u5c06\u5bfc\u81f4\u5206\u680f\u89c6\u56fe\u5728\u6298\u53e0\u65f6\u5207\u6362\u5230\u663e\u793a\u8be5\u5217\u3002"]}),"\n",(0,e.jsx)(t.p,{children:"\u4f8b\u5982\uff0c\u4e3a\u4e86\u4f7f\u6211\u7684\u8be6\u7ec6\u89c6\u56fe\u80fd\u591f\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u8fd4\u56de\u5230\u4fa7\u8fb9\u680f\u5217\uff1a"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-swift",children:'struct Detail: View {\n  @Binding var compactColumn: NavigationSplitViewColumn\n\n  var body: some View {\n    Button("\u4fa7\u8fb9\u680f") {\n      compactColumn = .sidebar\n    }\n    .navigationTitle("\u8be6\u7ec6\u4fe1\u606f")\n  }\n}\n'})}),"\n",(0,e.jsx)(t.p,{children:"\u66f4\u6539\u9996\u9009\u7684\u7d27\u51d1\u5217\u5728\u5206\u680f\u89c6\u56fe\u672a\u6298\u53e0\u65f6\u4e0d\u4f1a\u4ea7\u751f\u53ef\u89c1\u6548\u679c\uff0c\u5c3d\u7ba1\u5b83\u5c06\u6539\u53d8\u4e0b\u4e00\u6b21\u5206\u680f\u89c6\u56fe\u6298\u53e0\u65f6\u7684\u884c\u4e3a\u3002"}),"\n",(0,e.jsxs)(t.blockquote,{children:["\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsxs)(t.li,{children:["\u539f\u6587(\u82f1\u6587)\uff1a",(0,e.jsx)(t.a,{href:"https://useyourloaf.com/blog/swiftui-splitview-compact-column-control/",children:"https://useyourloaf.com/blog/swiftui-splitview-compact-column-control/"})]}),"\n"]}),"\n"]})]})}function u(i={}){const{wrapper:t}={...(0,o.R)(),...i.components};return t?(0,e.jsx)(t,{...i,children:(0,e.jsx)(p,{...i})}):p(i)}},5296:(i,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var e=n(758);const o={},l=e.createContext(o);function a(i){const t=e.useContext(l);return e.useMemo((function(){return"function"==typeof i?i(t):{...t,...i}}),[t,i])}function c(i){let t;return t=i.disableParentContext?"function"==typeof i.components?i.components(o):i.components||o:a(i.components),e.createElement(l.Provider,{value:t},i.children)}}}]);