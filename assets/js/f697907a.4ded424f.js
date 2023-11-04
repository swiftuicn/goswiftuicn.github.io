"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6988],{3213:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var t=i(1874),l=i(6454);const s={title:"SwiftUI - \u89c6\u56fe\u5e03\u5c40\u548c\u6f14\u793a",description:"SwiftUI - \u89c6\u56fe\u5e03\u5c40\u548c\u6f14\u793a",sidebar_position:5,sidebar_label:"SwiftUI - \u89c6\u56fe\u5e03\u5c40\u548c\u6f14\u793a"},r="SwiftUI - \u89c6\u56fe\u5e03\u5c40\u548c\u6f14\u793a",a={id:"swiftui-view-layout-and-presentation",title:"SwiftUI - \u89c6\u56fe\u5e03\u5c40\u548c\u6f14\u793a",description:"SwiftUI - \u89c6\u56fe\u5e03\u5c40\u548c\u6f14\u793a",source:"@site/docs/swiftui-view-layout-and-presentation.md",sourceDirName:".",slug:"/swiftui-view-layout-and-presentation",permalink:"/swiftui-view-layout-and-presentation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"SwiftUI - \u89c6\u56fe\u5e03\u5c40\u548c\u6f14\u793a",description:"SwiftUI - \u89c6\u56fe\u5e03\u5c40\u548c\u6f14\u793a",sidebar_position:5,sidebar_label:"SwiftUI - \u89c6\u56fe\u5e03\u5c40\u548c\u6f14\u793a"},sidebar:"tutorialSidebar",previous:{title:"SwiftUI - \u89c6\u56fe\u548c\u63a7\u4ef6",permalink:"/swiftui-views-and-controls"},next:{title:"\u6846\u67b6\u96c6\u6210 - SwiftUI \u4e2d\u7684 UIKit",permalink:"/framework-integration-uikit-in-swiftui"}},c={},o=[{value:"HStack",id:"hstack",level:2},{value:"LazyHStack",id:"lazyhstack",level:2},{value:"VStack",id:"vstack",level:2},{value:"LazyVStack",id:"lazyvstack",level:2},{value:"ZStack",id:"zstack",level:2},{value:"List",id:"list",level:2},{value:"ScrollView",id:"scrollview",level:2},{value:"\u5982\u4f55\u4f7f\u7528 SwiftUI ScrollView",id:"\u5982\u4f55\u4f7f\u7528-swiftui-scrollview",level:3},{value:"ScrollView \u6eda\u52a8\u65b9\u5411",id:"scrollview-\u6eda\u52a8\u65b9\u5411",level:3},{value:"LazyHGrid",id:"lazyhgrid",level:2},{value:"LazyVGrid",id:"lazyvgrid",level:2},{value:"Form",id:"form",level:2},{value:"Spacer",id:"spacer",level:2},{value:"Divider",id:"divider",level:2},{value:"NavigationView",id:"navigationview",level:2},{value:"TabView",id:"tabview",level:2},{value:"UIPageViewController",id:"uipageviewcontroller",level:3},{value:"Alert",id:"alert",level:2},{value:"Modal",id:"modal",level:2},{value:"ActionSheet",id:"actionsheet",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"swiftui---\u89c6\u56fe\u5e03\u5c40\u548c\u6f14\u793a",children:"SwiftUI - \u89c6\u56fe\u5e03\u5c40\u548c\u6f14\u793a"}),"\n",(0,t.jsx)(n.h2,{id:"hstack",children:"HStack"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u5176\u5b50\u7ea7\u6392\u5217\u6210\u6c34\u5e73\u7ebf\u7684\u89c6\u56fe\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u9759\u6001\u53ef\u6eda\u52a8",(0,t.jsx)(n.strong,{children:"\u5217\u8868"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'HStack (alignment: .center, spacing: 20){\n    Text("Hello")\n    Divider()\n    Text("World")\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/hstack",children:"\u6587\u6863 - HStack"})}),"\n",(0,t.jsx)(n.h2,{id:"lazyhstack",children:"LazyHStack"}),"\n",(0,t.jsx)("div",{class:"primary--tag",children:"iOS 14"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u5176\u5b50\u9879\u6392\u5217\u6210\u4e00\u6761\u6c34\u5e73\u589e\u957f\u7684\u7ebf\u7684\u89c6\u56fe\uff0c\u521b\u5efa\u9879\u76ee\u4ec5\u5728\u9700\u8981\u65f6\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'ScrollView(.horizontal) {\n    LazyHStack(alignment: .center, spacing: 20) {\n        ForEach(1...100, id: \\.self) {\n            Text("Column \\($0)")\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/lazyhstack",children:"\u6587\u6863 - LazayHStack"})}),"\n",(0,t.jsx)(n.h2,{id:"vstack",children:"VStack"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u5176\u5b50\u7ea7\u6392\u5217\u6210\u4e00\u6761\u5782\u76f4\u7ebf\u7684\u89c6\u56fe\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u9759\u6001\u53ef\u6eda\u52a8",(0,t.jsx)(n.strong,{children:"\u5217\u8868"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'HStack (alignment: .center, spacing: 20){\n    Text("Hello")\n    Divider()\n    Text("World")\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/vstack",children:"\u6587\u6863 - VStack"})}),"\n",(0,t.jsx)(n.h2,{id:"lazyvstack",children:"LazyVStack"}),"\n",(0,t.jsx)("div",{class:"primary--tag",children:"iOS 14"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u5176\u5b50\u9879\u6392\u5217\u6210\u4e00\u6761\u5782\u76f4\u6392\u5217\u7684\u89c6\u56fe\uff0c\u521b\u5efa\u9879\u76ee\u4ec5\u5728\u9700\u8981\u65f6\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'ScrollView(.horizontal) {\n    LazyHStack(alignment: .center, spacing: 20) {\n        ForEach(1...100, id: \\.self) {\n            Text("Column \\($0)")\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/lazyvstack",children:"\u6587\u6863 - LazyVStack"})}),"\n",(0,t.jsx)(n.h2,{id:"zstack",children:"ZStack"}),"\n",(0,t.jsx)(n.p,{children:"\u8986\u76d6\u5176\u5b50\u7ea7\u7684\u89c6\u56fe\uff0c\u4f7f\u5b83\u4eec\u5728\u4e24\u4e2a\u8f74\u4e0a\u5bf9\u9f50\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'ZStack {\n    Text("Hello")\n        .padding(10)\n        .background(Color.red)\n        .opacity(0.8)\n    Text("World")\n        .padding(20)\n        .background(Color.red)\n        .offset(x: 0, y: 40)\n}\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/zstack",children:"\u6587\u6863 - ZStack"})}),"\n",(0,t.jsx)(n.h2,{id:"list",children:"List"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u4e2a\u5bb9\u5668\uff0c\u663e\u793a\u6392\u5217\u5728\u5355\u4e2a\u5217\u4e2d\u7684\u6570\u636e\u884c\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u9759\u6001\u53ef\u6eda\u52a8 ",(0,t.jsx)(n.strong,{children:"\u5217\u8868"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'List {\n    Text("Hello world")\n    Text("Hello world")\n    Text("Hello world")\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6df7\u5408\u6392\u7248"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'List {\n    Text("Hello world")\n    Image(systemName: "clock")\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u52a8\u6001",(0,t.jsx)(n.strong,{children:"\u5217\u8868"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'let names = ["John", "Apple", "Seed"]\nList(names) { name in\n    Text(name)\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6dfb\u52a0 section"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'List {\n    Section(header: Text("UIKit"), footer: Text("We will miss you")) {\n        Text("UITableView")\n    }\n\n    Section(header: Text("SwiftUI"), footer: Text("A lot to learn")) {\n        Text("List")\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u4f7f\u5176\u5206\u7ec4\u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:".listStyle(GroupedListStyle())"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'List {\n    Section(header: Text("UIKit"), footer: Text("We will miss you")) {\n        Text("UITableView")\n    }\n\n    Section(header: Text("SwiftUI"), footer: Text("A lot to learn")) {\n        Text("List")\n    }\n}.listStyle(GroupedListStyle())\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u4f7f\u5176\u63d2\u5165\u5206\u7ec4 (",(0,t.jsx)(n.code,{children:".insetGrouped"}),")\uff0c\u8bf7\u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:".listStyle(GroupedListStyle())"})," \u5e76\u5f3a\u5236\u5e38\u89c4\u6c34\u5e73\u5c3a\u5bf8\u7c7b ",(0,t.jsx)(n.code,{children:".environment(\\.horizontalSizeClass, .regular)"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'List {\n    Section(header: Text("UIKit"), footer: Text("We will miss you")) {\n        Text("UITableView")\n    }\n\n    Section(header: Text("SwiftUI"), footer: Text("A lot to learn")) {\n        Text("List")\n    }\n}.listStyle(GroupedListStyle())\n.environment(\\.horizontalSizeClass, .regular)\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5728 iOS 13.2 \u7684 SwiftUI \u4e2d\u6dfb\u52a0\u4e86 Inset grouped"}),"\n",(0,t.jsx)("div",{class:"primary--tag",children:"iOS 14"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 iOS 14 \u4e2d\uff0c\u6211\u4eec\u5bf9\u6b64\u6709\u4e13\u95e8\u7684\u6837\u5f0f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:".listStyle(InsetGroupedListStyle())\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/list",children:"\u6587\u6863 - List"})}),"\n",(0,t.jsx)(n.h2,{id:"scrollview",children:"ScrollView"}),"\n",(0,t.jsx)(n.p,{children:"\u6eda\u52a8\u5305\u88c5\u5185\u5bb9\u89c6\u56fe\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'ScrollView {\n    Image("foo")\n    Text("Hello World")\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ScrollView"})," \u662f\u4e00\u4e2a",(0,t.jsx)(n.strong,{children:"\u5141\u8bb8\u6eda\u52a8"}),"\u5176",(0,t.jsx)(n.strong,{children:"\u5305\u542b\u7684\u89c6\u56fe"}),"\u7684\u89c6\u56fe\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u6211\u4eec\u6709\u4e00\u4e2a",(0,t.jsx)(n.strong,{children:"\u65e0\u6cd5\u5728\u8bbe\u5907\u5c4f\u5e55\u4e2d\u4e00\u5c4f\u663e\u793a\u5b8c\u6574\u7684\u5185\u5bb9"}),"\u65f6\uff0c\u6211\u4eec\u4f1a\u4f7f\u7528\u6b64\u89c6\u56fe\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 s \u6eda\u52a8\u89c6\u56fe\u6765\u5448\u73b0\u4e00\u4e2a\u957f\u6587\u672c\u5217\u8868\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://fuckingswiftui.com/images/swiftui-scrollview-sample.gif",alt:"ScrollView \u4f7f\u5185\u5bb9\u53ef\u6eda\u52a8\u3002"}),"ScrollView \u4f7f\u5185\u5bb9\u53ef\u6eda\u52a8\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5982\u4f55\u4f7f\u7528-swiftui-scrollview",children:"\u5982\u4f55\u4f7f\u7528 SwiftUI ScrollView"}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"ScrollView"}),"\uff0c\u60a8\u9700\u8981\u653e\u7f6e\u4e00\u4e2a ",(0,t.jsx)(n.strong,{children:"content"})," \u89c6\u56fe ",(0,t.jsx)(n.strong,{children:"\u60a8\u60f3\u8981\u4f7f\u5176\u53ef\u6eda\u52a8\u4f5c\u4e3a\u6eda\u52a8\u89c6\u56fe\u5185\u5bb9"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'struct ScrollViewDemo: View {\n    var body: some View {\n        ScrollView {\n            VStack {\n                ForEach(0..<100) { i in\n                    Text("Item \\(i)")\n                }\n            }.frame(maxWidth: .infinity)\n        }\n\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"scrollview-\u6eda\u52a8\u65b9\u5411",children:"ScrollView \u6eda\u52a8\u65b9\u5411"}),"\n",(0,t.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,t.jsx)(n.code,{children:"ScrollView"})," \u4f7f\u5185\u5bb9\u53ef\u5728",(0,t.jsx)(n.strong,{children:"\u5782\u76f4\u8f74"}),"\u4e0a\u6eda\u52a8\u3002 \u60a8\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/axis/set",children:(0,t.jsx)(n.code,{children:"Axis.Set"})})," ",(0,t.jsx)(n.strong,{children:"\u5728\u521d\u59cb\u5316\u6eda\u52a8\u89c6\u56fe\u65f6"}),"\u6765\u8986\u76d6\u5b83\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u6709",(0,t.jsx)(n.strong,{children:"\u4e09\u4e2a\u9009\u9879"}),"\u6765\u8bbe\u7f6e\u652f\u6301\u6eda\u52a8\u8f74\u3002"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5782\u76f4"}),"\uff1a",(0,t.jsx)(n.code,{children:"ScrollView"})," \u6216 ",(0,t.jsx)(n.code,{children:"ScrollView(.vertical)"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u6c34\u5e73"}),"\uff1a",(0,t.jsx)(n.code,{children:"ScrollView(.horizontal)"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Both"})," \u5782\u76f4\u548c\u6c34\u5e73\uff1a",(0,t.jsx)(n.code,{children:"ScrollView([.horizontal, .vertical])"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\u53ef\u6eda\u52a8\u8f74\u4ec5\u8bbe\u7f6e\u6eda\u52a8\u89c6\u56fe\u7684\u65b9\u5411\uff0c\u800c\u4e0d\u662f\u5185\u5bb9**\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u53ef\u6eda\u52a8\u8f74\u8bbe\u7f6e\u4e3a ",(0,t.jsx)(n.code,{children:".horizontal"}),"\uff0c\u800c ",(0,t.jsxs)(n.strong,{children:["\u5185\u5bb9\u4ecd\u7136\u5728 ",(0,t.jsx)(n.code,{children:"VStack"})," \u4e2d\u5782\u76f4\u6e32\u67d3"]}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'struct ScrollViewDemo: View {\n    var body: some View {\n        ScrollView(.horizontal) {\n            VStack {\n                ForEach(0..<100) { i in\n                    Text("Item \\(i)")\n                }\n            }.frame(maxWidth: .infinity)\n        }\n\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64 ",(0,t.jsx)(n.code,{children:"ScrollView"})," \u53ea\u80fd\u6c34\u5e73\u6eda\u52a8\uff0c\u4f46\u5185\u5bb9\u4f1a\u5782\u76f4\u5448\u73b0\u5e76\u79bb\u5f00\u5c4f\u5e55\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://fuckingswiftui.com/images/swiftui-scrollview-horizontal-vstack.gif",alt:"\u5e26\u6709\u5782\u76f4\u5185\u5bb9\u7684\u6c34\u5e73\u6eda\u52a8\u3002"}),"\u5e26\u6709\u5782\u76f4\u5185\u5bb9\u7684\u6c34\u5e73\u6eda\u52a8\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u60f3\u6c34\u5e73\u6eda\u52a8\uff0c\u60a8",(0,t.jsx)(n.strong,{children:"\u4e5f\u9700\u8981\u66f4\u6539\u5185\u5bb9\u7684\u5e03\u5c40"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u5e26\u6709\u201cHStack\u201d\u5185\u5bb9\u7684\u6c34\u5e73\u6eda\u52a8\u89c6\u56fe\u793a\u4f8b\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'struct ScrollViewDemo: View {\n    var body: some View {\n        ScrollView(.horizontal) {\n            HStack {\n                ForEach(0..<100) { i in\n                    Text("Item \\(i)")\n                }\n            }.frame(maxHeight: .infinity)\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://fuckingswiftui.com/images/swiftui-scrollview-horizontal-hstack.gif",alt:"\u6a2a\u5411\u5185\u5bb9\u7684\u6a2a\u5411\u6eda\u52a8\u3002"}),"\u6a2a\u5411\u5185\u5bb9\u7684\u6a2a\u5411\u6eda\u52a8\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"lazyhgrid",children:"LazyHGrid"}),"\n",(0,t.jsx)("div",{class:"primary--tag",children:"iOS 14"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u5176\u5b50\u89c6\u56fe\u6392\u5217\u5728\u6c34\u5e73\u589e\u957f\u7684\u7f51\u683c\u4e2d\u7684\u5bb9\u5668\u89c6\u56fe\uff0c\u4ec5\u6839\u636e\u9700\u8981\u521b\u5efa\u9879\u76ee\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'var rows: [GridItem] =\n        Array(repeating: .init(.fixed(20)), count: 2)\n\nScrollView(.horizontal) {\n    LazyHGrid(rows: rows, alignment: .top) {\n        ForEach((0...100), id: \\.self) {\n            Text("\\($0)").background(Color.pink)\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/lazyhgrid",children:"\u6587\u6863 - LazyHGrid"})}),"\n",(0,t.jsx)(n.h2,{id:"lazyvgrid",children:"LazyVGrid"}),"\n",(0,t.jsx)("div",{class:"primary--tag",children:"iOS 14"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u5176\u5b50\u89c6\u56fe\u6392\u5217\u5728\u5782\u76f4\u589e\u957f\u7684\u7f51\u683c\u4e2d\u7684\u5bb9\u5668\u89c6\u56fe\uff0c\u4ec5\u6839\u636e\u9700\u8981\u521b\u5efa\u9879\u76ee\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'var columns: [GridItem] =\n        Array(repeating: .init(.fixed(20)), count: 5)\n\nScrollView {\n    LazyVGrid(columns: columns) {\n        ForEach((0...100), id: \\.self) {\n            Text("\\($0)").background(Color.pink)\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/lazyvgrid",children:"\u6587\u6863 - LazyVGrid"})}),"\n",(0,t.jsx)(n.h2,{id:"form",children:"Form"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u4e8e\u5bf9\u7528\u4e8e\u6570\u636e\u8f93\u5165\u7684\u63a7\u4ef6\u8fdb\u884c\u5206\u7ec4\u7684\u5bb9\u5668\uff0c\u4f8b\u5982\u5728\u8bbe\u7f6e\u6216\u68c0\u67e5\u5668\u4e2d\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5c06\u51e0\u4e4e\u4efb\u4f55\u4e1c\u897f\u653e\u5165\u8fd9\u4e2a ",(0,t.jsx)(n.code,{children:"Form"})," \u4e2d\uff0c\u5b83\u4f1a\u5448\u73b0\u9002\u5408\u8868\u5355\u7684\u6837\u5f0f\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'NavigationView {\n    Form {\n        Section {\n            Text("Plain Text")\n            Stepper(value: $quantity, in: 0...10, label: { Text("Quantity") })\n        }\n        Section {\n            DatePicker($date, label: { Text("Due Date") })\n            Picker(selection: $selection, label:\n                Text("Picker Name")\n                , content: {\n                    Text("Value 1").tag(0)\n                    Text("Value 2").tag(1)\n                    Text("Value 3").tag(2)\n                    Text("Value 4").tag(3)\n            })\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/form",children:"\u6587\u6863 - Form"})}),"\n",(0,t.jsx)(n.h2,{id:"spacer",children:"Spacer"}),"\n",(0,t.jsx)(n.p,{children:"\u6cbf\u5176\u5305\u542b\u5806\u6808\u5e03\u5c40\u7684\u4e3b\u8f74\u6269\u5c55\u7684\u7075\u6d3b\u7a7a\u95f4\uff0c\u6216\u5982\u679c\u4e0d\u5305\u542b\u5728\u5806\u6808\u4e2d\uff0c\u5219\u5728\u4e24\u4e2a\u8f74\u4e0a\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'HStack {\n    Image(systemName: "clock")\n    Spacer()\n    Text("Time")\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/spacer",children:"\u6587\u6863 - Spacer"})}),"\n",(0,t.jsx)(n.h2,{id:"divider",children:"Divider"}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u7528\u4e8e\u5206\u9694\u5176\u4ed6\u5185\u5bb9\u7684\u89c6\u89c9\u5143\u7d20\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'HStack {\n    Image(systemName: "clock")\n    Divider()\n    Text("Time")\n}.fixedSize()\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/divider",children:"\u6587\u6863 - Divider"})}),"\n",(0,t.jsx)(n.h2,{id:"navigationview",children:"NavigationView"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u4e2a\u89c6\u56fe\uff0c\u7528\u4e8e\u663e\u793a\u8868\u793a\u5bfc\u822a\u4e2d\u53ef\u89c1\u8def\u5f84\u7684\u89c6\u56fe\u5806\u6808\u5c42\u6b21\u7ed3\u6784\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'NavigationView {\n    List {\n        Text("Hello World")\n    }\n    .navigationBarTitle(Text("Navigation Title")) // Default to large title style\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u65e7\u5f0f\u6807\u9898"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'NavigationView {\n    List {\n        Text("Hello World")\n    }\n    .navigationBarTitle(Text("Navigation Title"), displayMode: .inline)\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6dfb\u52a0",(0,t.jsx)(n.code,{children:"UIBarButtonItem"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'NavigationView {\n    List {\n        Text("Hello World")\n    }\n    .navigationBarItems(trailing:\n        Button(action: {\n            // Add action\n        }, label: {\n            Text("Add")\n        })\n    )\n    .navigationBarTitle(Text("Navigation Title"))\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:"show"}),"/",(0,t.jsx)(n.code,{children:"push"})," \u548c ",(0,t.jsx)(n.a,{href:"https://goswiftui.com/#navigationlink",children:"\u5bfc\u822a\u94fe\u63a5"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u7528\u4e8e ",(0,t.jsx)(n.code,{children:"UISplitViewController"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'NavigationView {\n    List {\n        NavigationLink("Go to detail", destination: Text("New Detail"))\n    }.navigationBarTitle("Master")\n    Text("Placeholder for Detail")\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e24\u4e2a\u65b0\u7684\u6837\u5f0f\u5c5e\u6027\u8bbe\u7f6e NavigationView \u7684\u6837\u5f0f\uff1a",(0,t.jsx)(n.code,{children:"stack"})," \u548c ",(0,t.jsx)(n.code,{children:"doubleColumn"}),"\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0ciPhone \u548c Apple TV \u4e0a\u7684\u5bfc\u822a\u89c6\u56fe\u76f4\u89c2\u5730\u53cd\u6620\u5bfc\u822a\u5806\u6808\uff0c\u800c\u5728 iPad \u548c Mac \u4e0a\uff0c\u62c6\u5206\u89c6\u56fe\u6837\u5f0f\u5bfc\u822a\u89c6\u56fe\u663e\u793a\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:".navigationViewStyle"})," \u8986\u76d6\u5b83\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"NavigationView {\n    MyMasterView()\n    MyDetailView()\n}\n.navigationViewStyle(StackNavigationViewStyle())\n"})}),"\n",(0,t.jsx)("div",{class:"primary--tag",children:"iOS 14"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 iOS 14 \u4e2d\uff0c",(0,t.jsx)(n.code,{children:"UISplitViewController"})," \u65b0\u589e\u4e86\u4fa7\u8fb9\u680f\u6837\u5f0f\u3002 \u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,t.jsx)(n.code,{children:"NavigationView"})," \u4e0b\u653e\u7f6e\u4e09\u4e2a\u89c6\u56fe\u6765\u505a\u5230\u8fd9\u4e00\u70b9\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'NavigationView {\n    Text("Sidebar")\n    Text("Primary")\n    Text("Detail")\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/navigationview",children:"\u6587\u6863 - NavigationView"})}),"\n",(0,t.jsx)("div",{class:"primary--tag",children:"iOS 14"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.code,{children:"toolbarItems"}),"\u4e2d\u6dfb\u52a0",(0,t.jsx)(n.code,{children:"UIToolbar"})," ",(0,t.jsx)(n.code,{children:"UIViewController"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'NavigationView {\n    Text("SwiftUI").padding()\n        .toolbar {\n            ToolbarItem(placement: .bottomBar) {\n                Button {\n\n                } label: {\n                    Image(systemName: "archivebox")\n                }\n            }\n\n            ToolbarItem(placement: .bottomBar) {\n                Spacer()\n            }\n\n            ToolbarItem(placement: .bottomBar) {\n                Button {\n\n                } label: {\n                    Image(systemName: "square.and.pencil")\n                }\n            }\n        }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/toolbaritem",children:"\u6587\u6863 - ToolbarItem"})}),"\n",(0,t.jsx)(n.h2,{id:"tabview",children:"TabView"}),"\n",(0,t.jsx)(n.p,{children:"\u5141\u8bb8\u4f7f\u7528\u53ef\u4ea4\u4e92\u7528\u6237\u5728\u591a\u4e2a\u5b50\u89c6\u56fe\u4e4b\u95f4\u5207\u6362\u7684\u89c6\u56fe\u754c\u9762\u5143\u7d20\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'TabView {\n    Text("First View")\n        .font(.title)\n        .tabItem({ Text("First") })\n        .tag(0)\n    Text("Second View")\n        .font(.title)\n        .tabItem({ Text("Second") })\n        .tag(1)\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u56fe\u50cf\u548c\u6587\u672c\u5728\u4e00\u8d77\u3002 \u60a8\u53ef\u4ee5\u5728\u6b64\u5904\u4f7f\u7528 SF Symbol\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'TabView {\n    Text("First View")\n        .font(.title)\n        .tabItem({\n            Image(systemName: "circle")\n            Text("First")\n        })\n        .tag(0)\n    Text("Second View")\n        .font(.title)\n        .tabItem(VStack {\n            Image("second")\n            Text("Second")\n        })\n        .tag(1)\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6216\u8005\u4f60\u53ef\u4ee5\u7701\u7565",(0,t.jsx)(n.code,{children:"VStack"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'TabView {\n    Text("First View")\n        .font(.title)\n        .tabItem({\n            Image(systemName: "circle")\n            Text("First")\n        })\n        .tag(0)\n    Text("Second View")\n        .font(.title)\n        .tabItem({\n            Image("second")\n            Text("Second")\n        })\n        .tag(1)\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"uipageviewcontroller",children:"UIPageViewController"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"UIPageViewController"})," \u6210\u4e3a ",(0,t.jsx)(n.code,{children:"TabView"})," \u7684\u4e00\u79cd\u6837\u5f0f\u3002 \u4f7f\u7528\u9875\u9762\u67e5\u770b\u6837\u5f0f\uff0c\u5728\u6807\u7b7e\u4e0a\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:".tabViewStyle(PageTabViewStyle())"})," \u4fee\u9970\u7b26\u67e5\u770b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'TabView {\n    Text("1")\n        .frame(maxWidth: .infinity, maxHeight: .infinity)\n        .background(Color.pink)\n    Text("2")\n        .frame(maxWidth: .infinity, maxHeight: .infinity)\n        .background(Color.red)\n    Text("3")\n        .frame(maxWidth: .infinity, maxHeight: .infinity)\n        .background(Color.green)\n    Text("4")\n        .frame(maxWidth: .infinity, maxHeight: .infinity)\n        .background(Color.blue)\n}.tabViewStyle(PageTabViewStyle())\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e2a ",(0,t.jsx)(n.code,{children:"PageTabViewStyle"})," \u5c06\u5305\u542b ",(0,t.jsx)(n.code,{children:"UIPage"}),"indexDisplayMode \u5230 ",(0,t.jsx)(n.code,{children:"PageTabViewStyle"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:".tabViewStyle(PageTabViewStyle(indexDisplayMode: .never))\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u9875\u9762\u63a7\u4ef6\u6709\u4e00\u79cd\u65b0\u6837\u5f0f\uff0c\u5b83\u5c06\u5728\u9875\u9762\u5468\u56f4\u5448\u73b0\u80cc\u666f\u6307\u6807\u3002 \u8981\u5f3a\u5236\u6267\u884c\u8fd9\u79cd\u65b0\u6837\u5f0f\uff0c\u8bf7\u6dfb\u52a0",(0,t.jsx)(n.code,{children:".indexViewStyle(PageIndexViewStyle(backgroundDisplayMode: .always))"}),"\u4fee\u9970\u7b26\u5230\u60a8\u7684\u9009\u9879\u5361\u89c6\u56fe\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'TabView {\n    Text("1")\n        .frame(maxWidth: .infinity, maxHeight: .infinity)\n        .background(Color.pink)\n    Text("2")\n        .frame(maxWidth: .infinity, maxHeight: .infinity)\n        .background(Color.red)\n    Text("3")\n        .frame(maxWidth: .infinity, maxHeight: .infinity)\n        .background(Color.green)\n    Text("4")\n        .frame(maxWidth: .infinity, maxHeight: .infinity)\n        .background(Color.blue)\n}\n.indexViewStyle(PageIndexViewStyle(backgroundDisplayMode: .always))\n.tabViewStyle(PageTabViewStyle())\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/tabview",children:"\u6587\u6863 - TabView"})}),"\n",(0,t.jsx)(n.h2,{id:"alert",children:"Alert"}),"\n",(0,t.jsx)(n.p,{children:"\u8b66\u544a\u7684\u5bb9\u5668\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u5e03\u5c14\u503c\u663e\u793a",(0,t.jsx)(n.code,{children:"Alert"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'@State var isError: Bool = false\n\nButton("Alert") {\n    self.isError = true\n}.alert(isPresented: $isError, content: {\n    Alert(title: Text("Error"), message: Text("Error Reason"), dismissButton: .default(Text("OK")))\n})\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5b83\u4e5f\u53ef\u4ee5\u4e0e ",(0,t.jsx)(n.code,{children:"Identifiable"})," \u9879\u7ed1\u5b9a\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'@State var error: AlertError?\n\nvar body: some View {\n    Button("Alert Error") {\n        self.error = AlertError(reason: "Reason")\n    }.alert(item: $error, content: { error in\n        alert(reason: error.reason)\n    })\n}\n\nfunc alert(reason: String) -> Alert {\n    Alert(title: Text("Error"),\n            message: Text(reason),\n            dismissButton: .default(Text("OK"))\n    )\n}\n\nstruct AlertError: Identifiable {\n    var id: String {\n        return reason\n    }\n\n    let reason: String\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/alert",children:"\u6587\u6863 - Alert"})}),"\n",(0,t.jsx)(n.h2,{id:"modal",children:"Modal"}),"\n",(0,t.jsx)(n.p,{children:"\u6a21\u6001\u8f6c\u6362\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u5e03\u5c14\u503c\u663e\u793a",(0,t.jsx)(n.code,{children:"Modal"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'@State var isModal: Bool = false\n\nvar modal: some View {\n    Text("Modal")\n}\n\nButton("Modal") {\n    self.isModal = true\n}.sheet(isPresented: $isModal, content: {\n    self.modal\n})\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/appkit/nsaccessibility/attribute/1533928-modal/",children:"\u6587\u6863 - Alert"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5b83\u4e5f\u53ef\u4ee5\u4e0e ",(0,t.jsx)(n.code,{children:"Identifiable"})," \u9879\u7ed1\u5b9a\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'@State var detail: ModalDetail?\n\nvar body: some View {\n    Button("Modal") {\n        self.detail = ModalDetail(body: "Detail")\n    }.sheet(item: $detail, content: { detail in\n        self.modal(detail: detail.body)\n    })\n}\n\nfunc modal(detail: String) -> some View {\n    Text(detail)\n}\n\nstruct ModalDetail: Identifiable {\n    var id: String {\n        return body\n    }\n\n    let body: String\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/view/3352792-sheet",children:"\u6587\u6863 - Sheet"})}),"\n",(0,t.jsx)("div",{class:"primary--tag",children:"iOS 14"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u60f3\u8981\u5b8c\u6574\u5448\u73b0\u6a21\u6001\u89c6\u56fe\u7684\u65e7\u5f0f\u6a21\u6001\u5448\u73b0\u5c4f\u5e55\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:".fullScreenCover"})," \u4ee3\u66ff ",(0,t.jsx)(n.code,{children:".sheet"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e\u5168\u5c4f\u5c01\u9762\u6837\u5f0f\u4e0d\u5141\u8bb8\u7528\u6237\u4f7f\u7528\u624b\u52bf\u6765\u5173\u95ed modal\uff0c\u60a8\u5fc5\u987b\u6dfb\u52a0\u4e00\u79cd\u624b\u52a8\u5173\u95ed\u5448\u73b0\u89c6\u56fe\u7684\u65b9\u6cd5\u3002 \u5728\u91cc\u9762\u4e0b\u9762\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a\u6309\u94ae\u6765\u901a\u8fc7 set \u5173\u95ed\u5448\u73b0\u7684\u89c6\u56fe",(0,t.jsx)(n.code,{children:"isModal"})," \u4e3a\u5047\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'@State var isModal: Bool = false\n\nvar modal: some View {\nText("Modal")\n      Button("Dismiss") {\n        self.isModal = false\n      }\n}\n\nButton("Fullscreen") {\n    self.isModal = true\n}.fullScreenCover(isPresented: $isFullscreen, content: {\n      self.modal\n    })\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u4f7f\u7528\u81ea\u5b9a\u4e49\u89c6\u56fe\u4f5c\u4e3a\u6a21\u5f0f\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"presentationMode"})," \u73af\u5883\u952e\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'struct Modal: View {\n  @Environment(\\.presentationMode) var presentationMode\n\n  var body: some View {\n    Text("Modal")\n    Button("Dismiss Modal") {\n      presentationMode.wrappedValue.dismiss()\n    }\n  }\n}\n\nstruct ContentView: View {\n    @State private var isModal = false\n\n    var body: some View {\n        Button("Fullscreen") {\n            isModal = true\n        }\n        .fullScreenCover(isPresented: $isFullscreen, content: {\n      Modal()\n    })\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/view/fullscreencover(ispresented:ondismiss:content:)",children:"\u6587\u6863 - fullScreenCover"})}),"\n",(0,t.jsx)(n.h2,{id:"actionsheet",children:"ActionSheet"}),"\n",(0,t.jsx)(n.p,{children:"\u64cd\u4f5c\u8868\u6f14\u793a\u7684\u5b58\u50a8\u7c7b\u578b\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u5e03\u5c14\u503c\u663e\u793a",(0,t.jsx)(n.code,{children:"ActionSheet"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'@State var isSheet: Bool = false\n\nvar actionSheet: ActionSheet {\n    ActionSheet(title: Text("Action"),\n                message: Text("Description"),\n                buttons: [\n                    .default(Text("OK"), action: {\n\n                    }),\n                    .destructive(Text("Delete"), action: {\n\n                    })\n                ]\n    )\n}\n\nButton("Action Sheet") {\n    self.isSheet = true\n}.actionSheet(isPresented: $isSheet, content: {\n    self.actionSheet\n})\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5b83\u4e5f\u53ef\u4ee5\u4e0e ",(0,t.jsx)(n.code,{children:"Identifiable"})," \u9879\u7ed1\u5b9a\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'@State var sheetDetail: SheetDetail?\n\nvar body: some View {\n    Button("Action Sheet") {\n        self.sheetDetail = ModSheetDetail(body: "Detail")\n    }.actionSheet(item: $sheetDetail, content: { detail in\n        self.sheet(detail: detail.body)\n    })\n}\n\nfunc sheet(detail: String) -> ActionSheet {\n    ActionSheet(title: Text("Action"),\n                message: Text(detail),\n                buttons: [\n                    .default(Text("OK"), action: {\n\n                    }),\n                    .destructive(Text("Delete"), action: {\n\n                    })\n                ]\n    )\n}\n\nstruct SheetDetail: Identifiable {\n    var id: String {\n        return body\n    }\n\n    let body: String\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/actionsheet",children:"\u6587\u6863 - ActionSheet"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},6454:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(9953);const l={},s=t.createContext(l);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);