"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9421],{2981:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=t(5893),r=t(1151);const s={title:"\u4f7f\u7528 SwiftUI \u4e3a iOS16 \u5b9e\u73b0\u9501\u5c4f\u5c0f\u7ec4\u4ef6",description:"\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 SwiftUI \u5728 iOS16 \u4e2d\u4e3a\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u5b9e\u73b0\u9501\u5c4f\u5c0f\u7ec4\u4ef6\u3002",authors:["swift"],tags:["swift","iOS16","SwiftUI","\u5c0f\u7ec4\u4ef6"]},a=void 0,l={permalink:"/blog/2022/09/24/ios16-lock-screen-widgets-in-swiftui",source:"@site/blog/2022-09-24-ios16-lock-screen-widgets-in-swiftui/index.md",title:"\u4f7f\u7528 SwiftUI \u4e3a iOS16 \u5b9e\u73b0\u9501\u5c4f\u5c0f\u7ec4\u4ef6",description:"\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 SwiftUI \u5728 iOS16 \u4e2d\u4e3a\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u5b9e\u73b0\u9501\u5c4f\u5c0f\u7ec4\u4ef6\u3002",date:"2022-09-24T00:00:00.000Z",formattedDate:"2022\u5e749\u670824\u65e5",tags:[{label:"swift",permalink:"/blog/tags/swift"},{label:"iOS16",permalink:"/blog/tags/i-os-16"},{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"\u5c0f\u7ec4\u4ef6",permalink:"/blog/tags/\u5c0f\u7ec4\u4ef6"}],readingTime:4.86,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"\u4f7f\u7528 SwiftUI \u4e3a iOS16 \u5b9e\u73b0\u9501\u5c4f\u5c0f\u7ec4\u4ef6",description:"\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 SwiftUI \u5728 iOS16 \u4e2d\u4e3a\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u5b9e\u73b0\u9501\u5c4f\u5c0f\u7ec4\u4ef6\u3002",authors:["swift"],tags:["swift","iOS16","SwiftUI","\u5c0f\u7ec4\u4ef6"]},unlisted:!1,prevItem:{title:"SwiftUI \u81ea\u5b9a\u5de5\u5177\u680f",permalink:"/blog/2022/09/24/customizing-toolbars-in-swiftui"},nextItem:{title:"\u4f7f\u7528 SKStoreReviewController \u5b9e\u73b0\u5e94\u7528\u5185\u8bc4\u5206\u6765\u63d0\u9ad8 AppStore \u8bc4\u5206",permalink:"/blog/2022/09/21/skstorereviewcontroller-app-ratings"}},c={authorsImageUrls:[void 0]},o=[];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"iOS \u8981\u6c42\u6700\u591a\u7684\u529f\u80fd\u4e4b\u4e00\u662f\u53ef\u5b9a\u5236\u7684\u9501\u5c4f\u3002\u6700\u540e\uff0c\u6211\u4eec\u5728\u6700\u65b0\u7684iOS 16\u4e0a\u5f97\u5230\u4e86\u5b83\u3002\u6211\u4eec\u53ef\u4ee5\u7528\u4e00\u76ee\u4e86\u7136\u7684\u5c0f\u7ec4\u4ef6\u586b\u5145\u6211\u4eec\u7684\u9501\u5c4f\u3002\u5b9e\u73b0\u9501\u5c4f\u5c0f\u7ec4\u4ef6\u5f88\u7b80\u5355\uff0c\u56e0\u4e3a\u5b83\u7684API\u4e0e\u4e3b\u5c4f\u5e55\u5c0f\u7ec4\u4ef6\u5171\u4eab\u76f8\u540c\u7684\u4ee3\u7801\u3002\u4e0b\u9762\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u4e3a\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u5b9e\u73b0\u9501\u5c4f\u5c0f\u7ec4\u4ef6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u4ece\u5e94\u7528\u7a0b\u5e8f\u4e2d\u53ef\u80fd\u5df2\u6709\u7684\u7528\u4e8e\u663e\u793a\u4e3b\u5c4f\u5e55\u5c0f\u7ec4\u4ef6\u7684\u4ee3\u7801\u5f00\u59cb\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"struct WidgetView: View {\n    let entry: Entry\n    \n    @Environment(\\.widgetFamily) private var family\n    \n    var body: some View {\n        switch family {\n        case .systemSmall:\n            SmallWidgetView(entry: entry)\n        case .systemMedium:\n            MediumWidgetView(entry: entry)\n        case .systemLarge, .systemExtraLarge:\n            LargeWidgetView(entry: entry)\n        default:\n            EmptyView()\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u6709\u4e00\u4e2a\u5b9a\u4e49\u5c0f\u7ec4\u4ef6\u7684\u5178\u578b\u89c6\u56fe\u3002\u6211\u4eec\u4f7f\u7528\u73af\u5883\u6765\u4e86\u89e3\u5c0f\u7ec4\u4ef6\u7cfb\u5217\uff0c\u5e76\u663e\u793a\u9002\u5f53\u5927\u5c0f\u7684\u89c6\u56fe\u3002\u4e3a\u4e86\u652f\u6301\u9501\u5c4f\u5c0f\u7ec4\u4ef6\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5220\u9664\u9ed8\u8ba4\u8bed\u53e5\uff0c\u5e76\u5b9e\u73b0\u6240\u6709\u5b9a\u4e49\u9501\u5c4f\u5c0f\u7ec4\u4ef6\u7684\u65b0\u60c5\u51b5\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"struct WidgetView: View {\n    let entry: Entry\n    \n    @Environment(\\.widgetFamily) private var family\n    \n    var body: some View {\n        switch family {\n        case .systemSmall:\n            SmallWidgetView(entry: entry)\n        case .systemMedium:\n            MediumWidgetView(entry: entry)\n        case .systemLarge, .systemExtraLarge:\n            LargeWidgetView(entry: entry)\n        case .accessoryCircular:\n            Gauge(value: entry.goal) {\n                Text(verbatim: entry.label)\n            }\n            .gaugeStyle(.accessoryCircularCapacity)\n        case .accessoryInline:\n            Text(verbatim: entry.label)\n        case .accessoryRectangular:\n            VStack(alignment: .leading) {\n                Text(verbatim: entry.label)\n                Text(entry.date, format: .dateTime)\n            }\n        default:\n            EmptyView()\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u597d\u8bb0\u4f4f\uff0c\u7cfb\u7edf\u5bf9\u9501\u5c4f\u548c\u4e3b\u5c4f\u5e55\u5c0f\u7ec4\u4ef6\u4f7f\u7528\u4e0d\u540c\u7684\u6e32\u67d3\u6a21\u5f0f\u3002\u8be5\u7cfb\u7edf\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e09\u79cd\u4e0d\u540c\u7684\u6e32\u67d3\u6a21\u5f0f\u3002"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e3b\u5c4f\u5e55\u5c0f\u7ec4\u4ef6\u7684 Full-color \u6a21\u5f0f\u548c\u652f\u6301\u989c\u8272\u7684watchOS\u590d\u6742\u529f\u80fd\u3002\u662f\u7684\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528WidgetKit\u5b9e\u73b0watchOS\u590d\u6742\u529f\u80fd\uff0c\u4ecewatchOS 9\u5f00\u59cb\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Vibrant \u6a21\u5f0f\u662f\u7cfb\u7edf\u5c06\u6587\u672c\u3001\u56fe\u50cf\u548c\u4eea\u8868\u5206\u89e3\u4e3a\u5355\u8272\uff0c\u5e76\u4e3a\u9501\u5c4f\u80cc\u666f\u6b63\u786e\u7740\u8272\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Accented \u6a21\u5f0f\u4ec5\u5728 watchOS\u4e0a\u4f7f\u7528\uff0c\u7cfb\u7edf\u5c06\u5c0f\u7ec4\u4ef6\u5206\u4e3a\u4e24\u7ec4\uff0c\u9ed8\u8ba4\u548c\u91cd\u97f3\u3002\u7cfb\u7edf\u4f1a\u7528\u7528\u6237\u5728\u8868\u76d8\u8bbe\u7f6e\u4e2d\u9009\u62e9\u7684\u8272\u8c03\u989c\u8272\u4e3a\u5c0f\u7ec4\u4ef6\u7684\u91cd\u97f3\u90e8\u5206\u7740\u8272\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6e32\u67d3\u6a21\u5f0f\u53ef\u4ee5\u901a\u8fc7 SwiftUI \u73af\u5883\u83b7\u5f97\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u968f\u65f6\u68c0\u67e5\u54ea\u79cd\u6e32\u67d3\u6a21\u5f0f\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\uff0c\u5e76\u5c06\u5176\u53cd\u6620\u5728\u60a8\u7684\u8bbe\u8ba1\u4e2d\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5177\u6709\u4e0d\u540c\u6e32\u67d3\u6a21\u5f0f\u7684\u4e0d\u540c\u56fe\u50cf\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"struct WidgetView: View {\n    let entry: Entry\n    \n    @Environment(\\.widgetRenderingMode) private var renderingMode\n    \n    var body: some View {\n        switch renderingMode {\n        case .accented:\n            AccentedWidgetView(entry: entry)\n        case .fullColor:\n            FullColorWidgetView(entry: entry)\n        case .vibrant:\n            VibrantWidgetView(entry: entry)\n        default:\n            EmptyView()\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u4e0a\u4f8b\u6240\u793a\uff0c\u6211\u4eec\u4f7f\u7528",(0,i.jsx)(n.em,{children:"\u5c0f\u7ec4\u4ef6\u6e32\u67d3\u6a21\u5f0f"}),"\u73af\u5883\u503c\u6765\u83b7\u53d6\u5b9e\u9645\u6e32\u67d3\u6a21\u5f0f\u5e76\u505a\u51fa\u4e0d\u540c\u7684\u884c\u4e3a\u3002\u6b63\u5982\u6211\u4e4b\u524d\u6240\u8bf4\uff0c\u5728\u91cd\u97f3\u6a21\u5f0f\u4e0b\uff0c\u7cfb\u7edf\u5c06\u60a8\u7684\u5c0f\u7ec4\u4ef6\u5206\u4e3a\u4e24\u90e8\u5206\uff0c\u5e76\u4e13\u95e8\u4e3a\u5b83\u4eec\u7740\u8272\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,i.jsx)(n.em,{children:"\u5c0f\u7ec4\u4ef6\u53ef\u91cd\u97f3"}),"\u89c6\u56fe\u4fee\u9970\u7b26\u6807\u8bb0\u89c6\u56fe\u5c42\u6b21\u7ed3\u6784\u7684\u4e00\u90e8\u5206\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7cfb\u7edf\u5c06\u77e5\u9053\u54ea\u4e9b\u89c6\u56fe\u5e94\u7528\u8272\u8c03\u989c\u8272\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'struct AccentedWidgetView: View {\n    let entry: Entry\n    var body: some View {\n        HStack {\n            Image(systemName: "moon")\n                .widgetAccentable()\n            Text(verbatim: entry.label)\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u540e\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528\u652f\u6301\u7684\u7c7b\u578b\u914d\u7f6e\u6211\u4eec\u7684\u5c0f\u7ec4\u4ef6\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'@main\nstruct MyAppWidget: Widget {\n    let kind: String = "Widget"\n    \n    var body: some WidgetConfiguration {\n        StaticConfiguration(kind: kind, provider: Provider()) { entry in\n            WidgetView(entry: entry)\n        }\n        .configurationDisplayName("My app widget")\n        .supportedFamilies(\n            [\n                .systemSmall,\n                .systemMedium,\n                .systemLarge,\n                .systemExtraLarge,\n                .accessoryInline,\n                .accessoryCircular,\n                .accessoryRectangular\n            ]\n        )\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u60a8\u4ecd\u7136\u652f\u6301iOS 15\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b\u65b0\u9501\u5c4f\u5c0f\u7ec4\u4ef6\u7684\u53ef\u7528\u6027\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'@main\nstruct MyAppWidget: Widget {\n    let kind: String = "Widget"\n    \n    private var supportedFamilies: [WidgetFamily] {\n        if #available(iOSApplicationExtension 16.0, *) {\n            return [\n                .systemSmall,\n                .systemMedium,\n                .systemLarge,\n                .accessoryCircular,\n                .accessoryRectangular,\n                .accessoryInline\n            ]\n        } else {\n            return [\n                .systemSmall,\n                .systemMedium,\n                .systemLarge\n            ]\n        }\n    }\n    \n    var body: some WidgetConfiguration {\n        StaticConfiguration(kind: kind, provider: Provider()) { entry in\n            WidgetView(entry: entry)\n        }\n        .configurationDisplayName("My app widget")\n        .supportedFamilies(supportedFamilies)\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4eca\u5929\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u5728iOS 16\u4e2d\u5b9e\u73b0\u65b0\u7684\u9501\u5c4f\u5c0f\u7ec4\u4ef6\u3002\u8bf7\u8bb0\u4f4f\uff0c\u6211\u4eec\u53ef\u4ee5\u91cd\u7528\u76f8\u540c\u7684API\u6765\u6784\u5efawatchOS\u590d\u6742\u529f\u80fd\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u73af\u5883\u503c\u6765\u8f7b\u677e\u5171\u4eab\u5c0f\u7ec4\u4ef6\u4ee3\u7801\u5e93\uff0c\u4ee5\u4e86\u89e3\u5f53\u524d\u54ea\u79cd\u6e32\u67d3\u6a21\u5f0f\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u539f\u6587(\u82f1\u6587)\uff1a",(0,i.jsx)(n.a,{href:"https://swiftwithmajid.com/2022/08/30/lock-screen-widgets-in-swiftui/",children:"https://swiftwithmajid.com/2022/08/30/lock-screen-widgets-in-swiftui/"})]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var i=t(7294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);