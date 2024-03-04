"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4182],{3064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(5893),a=t(1151);const o={title:"SwiftUI \u81ea\u5b9a\u5de5\u5177\u680f",description:"\u6211\u4eec\u5c06\u4e86\u89e3 SwiftUI \u4e2d\u5982\u4f55\u81ea\u5b9a\u4e49\u5de5\u5177\u680f\u4ee5\u53ca\u65b0\u7684\u5de5\u5177\u680f API\u3002",authors:["swift"],tags:["swift","iOS16","SwiftUI","\u5de5\u5177\u680f"]},l=void 0,r={permalink:"/blog/2022/09/24/customizing-toolbars-in-swiftui",source:"@site/blog/2022-09-24-customizing-toolbars-in-swiftui/index.md",title:"SwiftUI \u81ea\u5b9a\u5de5\u5177\u680f",description:"\u6211\u4eec\u5c06\u4e86\u89e3 SwiftUI \u4e2d\u5982\u4f55\u81ea\u5b9a\u4e49\u5de5\u5177\u680f\u4ee5\u53ca\u65b0\u7684\u5de5\u5177\u680f API\u3002",date:"2022-09-24T00:00:00.000Z",formattedDate:"2022\u5e749\u670824\u65e5",tags:[{label:"swift",permalink:"/blog/tags/swift"},{label:"iOS16",permalink:"/blog/tags/i-os-16"},{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"\u5de5\u5177\u680f",permalink:"/blog/tags/\u5de5\u5177\u680f"}],readingTime:4.82,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"SwiftUI \u81ea\u5b9a\u5de5\u5177\u680f",description:"\u6211\u4eec\u5c06\u4e86\u89e3 SwiftUI \u4e2d\u5982\u4f55\u81ea\u5b9a\u4e49\u5de5\u5177\u680f\u4ee5\u53ca\u65b0\u7684\u5de5\u5177\u680f API\u3002",authors:["swift"],tags:["swift","iOS16","SwiftUI","\u5de5\u5177\u680f"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528 SwiftUI \u4e3a iOS16 \u5b9e\u73b0\u9501\u5c4f\u5c0f\u7ec4\u4ef6",permalink:"/blog/2022/09/24/ios16-lock-screen-widgets-in-swiftui"},nextItem:{title:"\u4f7f\u7528 SKStoreReviewController \u5b9e\u73b0\u5e94\u7528\u5185\u8bc4\u5206\u6765\u63d0\u9ad8 AppStore \u8bc4\u5206",permalink:"/blog/2022/09/21/skstorereviewcontroller-app-ratings"}},s={authorsImageUrls:[void 0]},c=[{value:"\u5de5\u5177\u680f\u53ef\u89c1\u6027",id:"\u5de5\u5177\u680f\u53ef\u89c1\u6027",level:4},{value:"\u5de5\u5177\u680f\u80cc\u666f\u53ef\u89c1\u6027",id:"\u5de5\u5177\u680f\u80cc\u666f\u53ef\u89c1\u6027",level:4},{value:"\u5de5\u5177\u680f\u914d\u8272\u65b9\u6848",id:"\u5de5\u5177\u680f\u914d\u8272\u65b9\u6848",level:4},{value:"\u5de5\u5177\u680f\u6807\u9898\u83dc\u5355",id:"\u5de5\u5177\u680f\u6807\u9898\u83dc\u5355",level:4},{value:"\u5de5\u5177\u680f\u89d2\u8272",id:"\u5de5\u5177\u680f\u89d2\u8272",level:4},{value:"\u8f85\u52a9\u5de5\u5177\u680f\u9879\u76ee",id:"\u8f85\u52a9\u5de5\u5177\u680f\u9879\u76ee",level:4},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u5de5\u5177\u680fAPI\u662f\u6211\u5728SwiftUI\u4e2d\u6700\u559c\u6b22\u7684API\u4e4b\u4e00\u3002\u5b83\u5141\u8bb8\u60a8\u4ee5\u975e\u5e38\u660e\u786e\u7684\u65b9\u5f0f\u5b9a\u4e49\u5de5\u5177\u680f\u53ca\u5176\u9879\u76ee\uff0c\u5e76\u5728\u4e0d\u540c\u7684\u5e73\u53f0\u4e0a\u8868\u73b0\u4e0d\u540c\u3002\u4e0b\u4e00\u4ee3SwiftUI\u6846\u67b6\u4e3a\u6211\u4eec\u5e26\u6765\u4e86\u66f4\u591a\u81ea\u5b9a\u4e49\u5de5\u5177\u680f\u7684\u65b9\u6cd5\u3002\u4e0b\u9762\uff0c\u6211\u4eec\u5c06\u4e86\u89e3 SwiftUI \u4e2d\u65b0\u7684\u5de5\u5177\u680f API\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u5de5\u5177\u680f\u53ef\u89c1\u6027",children:"\u5de5\u5177\u680f\u53ef\u89c1\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u4ece\u65b0\u7684\u89c6\u56fe\u4fee\u9970\u7b26\u5f00\u59cb\uff0c\u5141\u8bb8\u6211\u4eec\u63a7\u5236\u5de5\u5177\u680f\u7684\u53ef\u89c1\u6027\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'struct ContentView: View {\n    var body: some View {\n        ScrollView {\n            Image("beach")\n                .resizable()\n                .scaledToFit()\n        }\n        .ignoresSafeArea(.container, edges: .top)\n        .navigationTitle("Hello")\n        .toolbar(.hidden, for: .navigationBar)\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u4e0a\u4f8b\u6240\u793a\uff0c\u65b0\u7684\u5de5\u5177\u680f\u89c6\u56fe\u4fee\u9970\u7b26\u5141\u8bb8\u6211\u4eec\u9690\u85cf\u6216\u663e\u793a\u7531SwiftUI\u63a7\u5236\u7684\u4efb\u4f55\u5de5\u5177\u680f\u3002\u6211\u4eec\u4e0d\u4ec5\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u63a7\u5236\u5bfc\u822a\u680f\u7684\u53ef\u89c1\u6027\uff0c\u8fd8\u53ef\u4ee5\u63a7\u5236\u9009\u9879\u5361\u548c\u5e95\u90e8\u680f\u7684\u53ef\u89c1\u6027\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'struct ContentView: View {\n    var body: some View {\n        ScrollView {\n            Image("beach")\n                .resizable()\n                .scaledToFit()\n        }\n        .ignoresSafeArea(.container, edges: .top)\n        .navigationTitle("Hello")\n        .toolbar(.hidden, for: .tabBar)\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u5de5\u5177\u680f\u80cc\u666f\u53ef\u89c1\u6027",children:"\u5de5\u5177\u680f\u80cc\u666f\u53ef\u89c1\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u53e6\u4e00\u4e2a\u65b0\u7684\u89c6\u56fe\u4fee\u9970\u7b26\u5141\u8bb8\u6211\u4eec\u63a7\u5236SwiftUI\u62e5\u6709\u7684\u4efb\u4f55\u680f\u7684\u540e\u53f0\u53ef\u89c1\u6027\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'struct ContentView: View {\n    var body: some View {\n        ScrollView {\n            Image("beach")\n                .resizable()\n                .scaledToFit()\n        }\n        .ignoresSafeArea(.container, edges: .top)\n        .navigationTitle("Hello")\n        .toolbarBackground(.hidden, for: .navigationBar)\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5de5\u5177\u680f\u80cc\u666f\u53ef\u89c1\u6027\u89c6\u56fe\u4fee\u9970\u7b26\u5141\u8bb8\u6211\u4eec\u5728\u5de5\u5177\u680f\u4e0b\u663e\u793a\u56fe\u50cf\u65f6\u521b\u5efa\u6f02\u4eae\u7684\u534a\u900f\u660e\u6548\u679c\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u5de5\u5177\u680f\u914d\u8272\u65b9\u6848",children:"\u5de5\u5177\u680f\u914d\u8272\u65b9\u6848"}),"\n",(0,i.jsx)(n.p,{children:"\u4eca\u5e74\u5de5\u5177\u680fAPI\u7684\u53e6\u4e00\u4e2a\u4ee4\u4eba\u5174\u594b\u7684\u8865\u5145\u662f\u6709\u673a\u4f1a\u63a7\u5236\u7279\u5b9a\u5de5\u5177\u680f\u7684\u914d\u8272\u65b9\u6848\u3002\u60a8\u53ef\u4ee5\u4e3a\u5de5\u5177\u680f\u8bbe\u7f6e\u9996\u9009\u914d\u8272\u65b9\u6848\uff0c\u72ec\u7acb\u4e8e\u89c6\u56fe\u5c42\u6b21\u7ed3\u6784\u7684\u914d\u8272\u65b9\u6848\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'struct ContentView: View {\n    var body: some View {\n        ScrollView {\n            Image("beach")\n                .resizable()\n                .scaledToFit()\n        }\n        .navigationTitle("Hello")\n        .toolbarColorScheme(.dark, for: .navigationBar)\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u5de5\u5177\u680f\u6807\u9898\u83dc\u5355",children:"\u5de5\u5177\u680f\u6807\u9898\u83dc\u5355"}),"\n",(0,i.jsx)(n.p,{children:"iOS 16\u63d0\u4f9b\u4e86\u65b0\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u5141\u8bb8\u6211\u4eec\u5728\u5bfc\u822a\u680f\u7684\u6807\u9898\u4e2d\u663e\u793a\u5f39\u51fa\u5f0f\u83dc\u5355\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'struct TitleMenuExample: View {\n    @State private var date = Date.now\n    @State private var datePickerShown = false\n    \n    var body: some View {\n        NavigationStack {\n            Text(date, style: .date)\n                .navigationTitle(Text(date, style: .date))\n                .navigationBarTitleDisplayMode(.inline)\n                .toolbarTitleMenu {\n                    Button("Pick another date") {\n                        datePickerShown = true\n                    }\n                }\n                .sheet(isPresented: $datePickerShown) {\n                    DatePicker(\n                        "Choose date",\n                        selection: $date,\n                        displayedComponents: .date\n                    )\n                    .datePickerStyle(.graphical)\n                    .presentationDetents([.medium])\n                    .presentationDragIndicator(.visible)\n                }\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://swiftwithmajid.com/public/toolbar-title-menu.png",alt:"\u5de5\u5177\u680f-\u6807\u9898\u83dc\u5355"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u4ee3\u7801\u5728\u5bfc\u822a\u680f\u7684\u6807\u9898\u4e2d\u663e\u793a\u4e00\u4e2a\u5c0f\u7bad\u5934\uff0c\u5141\u8bb8\u7528\u6237\u6309\u4e0b\u5b83\u3002SwiftUI \u4f1a\u663e\u793a\u4e00\u4e2a\u5f39\u51fa\u5f0f\u83dc\u5355\uff0c\u5176\u4e2d\u6709\u4e00\u4e2a\u6309\u94ae\uff0c\u5176\u4e2d\u663e\u793a\u6a21\u6001\u8868\u4e2d\u7684\u65e5\u671f\u9009\u62e9\u5668\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u5de5\u5177\u680f\u89d2\u8272",children:"\u5de5\u5177\u680f\u89d2\u8272"}),"\n",(0,i.jsx)(n.p,{children:"iPadOS 16 \u7684\u53e6\u4e00\u4e2a\u65b0\u5916\u89c2\u662f\u7f16\u8f91\u5668\u5de5\u5177\u680f\u3002\u60a8\u53ef\u4ee5\u5c06\u5de5\u5177\u680f\u7684\u89d2\u8272\u8bbe\u7f6e\u4e3a\u7f16\u8f91\u5668\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cSwiftUI\u4f1a\u5728\u7279\u5b9a\u5de5\u5177\u680f\u7684\u4e2d\u5fc3\u663e\u793a\u5de5\u5177\u680f\u9879\u3002\u5b83\u8fd8\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u6dfb\u52a0\u548c\u5220\u9664\u8f85\u52a9\u5de5\u5177\u680f\u9879\u6765\u81ea\u5b9a\u4e49\u5b83\u4eec\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'struct CollapsingToolbarItems: View {\n    var body: some View {\n        NavigationStack {\n            Text("Hello")\n                .toolbar {\n                    ToolbarItem(placement: .primaryAction) {\n                        Button("Primary action") {}\n                    }\n                    \n                    ToolbarItem(\n                        id: "copy",\n                        placement: .secondaryAction,\n                        showsByDefault: true\n                    ) {\n                        Button("copy") {}\n                    }\n                    \n                    ToolbarItem(\n                        id: "delete",\n                        placement: .secondaryAction,\n                        showsByDefault: false\n                    ) {\n                        Button("delete") {}\n                    }\n                }\n                .toolbarRole(.editor)\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u5de5\u5177\u680f\u89d2\u8272\u8bbe\u7f6e\u4e3a\u7f16\u8f91\u5668\u3002\u6211\u4eec\u8fd8\u4e3a\u6bcf\u4e2a\u5de5\u5177\u680f\u9879\u76ee\u8bbe\u7f6e\u6807\u8bc6\u7b26\u3002SwiftUI\u4f7f\u7528\u6807\u8bc6\u7b26\u6765\u5b58\u50a8\u5de5\u5177\u680f\u8bbe\u7f6e\u7684\u7528\u6237\u914d\u7f6e\u3002\u8bf7\u8bb0\u4f4f\uff0c\u60a8\u5e94\u8be5\u4e3a\u5de5\u5177\u680f\u9879\u76ee\u63d0\u4f9b\u7a33\u5b9a\u7684\u6807\u8bc6\u7b26\uff0c\u4ee5\u63d0\u4f9b\u4e00\u81f4\u7684\u5de5\u5177\u680f\u81ea\u5b9a\u4e49\u4f53\u9a8c\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u8f85\u52a9\u5de5\u5177\u680f\u9879\u76ee",children:"\u8f85\u52a9\u5de5\u5177\u680f\u9879\u76ee"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u524d\u4e00\u4ee3\u7684 SwiftUI \u6846\u67b6\u5f15\u5165\u4e86\u8f85\u52a9\u5de5\u5177\u680f\u64cd\u4f5c\u7684\u65b0\u4f4d\u7f6e\u3002\u5b83\u8fd8\u4f1a\u81ea\u52a8\u5c06\u5b83\u4eec\u6298\u53e0\u6210\u5355\u4e2a\u5de5\u5177\u680f\u9879\uff0c\u901a\u8fc7\u83dc\u5355\u663e\u793a\u6298\u53e0\u9879\u76ee\u5217\u8868\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'struct SecondaryToolbarItemsExample: View {\n    var body: some View {\n        NavigationStack {\n            Text("Hello")\n                .toolbar {\n                    ToolbarItem(placement: .primaryAction) {\n                        Button("Primary action") {}\n                    }\n                    \n                    ToolbarItem(placement: .secondaryAction) {\n                        Button("Secondary action 1") {}\n                    }\n                    \n                    ToolbarItem(placement: .secondaryAction) {\n                        Button("Secondary action 2") {}\n                    }\n                }\n                \n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,i.jsx)(n.p,{children:"\u4eca\u5929\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u4e00\u7cfb\u5217\u65b0\u7684API\uff0c\u5141\u8bb8\u6211\u4eec\u5728SwiftUI\u4e2d\u81ea\u5b9a\u4e49\u5de5\u5177\u680f\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u539f\u6587(\u82f1\u6587)\uff1a",(0,i.jsx)(n.a,{href:"https://swiftwithmajid.com/2022/09/07/customizing-toolbars-in-swiftui/",children:"https://swiftwithmajid.com/2022/09/07/customizing-toolbars-in-swiftui/"})]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var i=t(7294);const a={},o=i.createContext(a);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);