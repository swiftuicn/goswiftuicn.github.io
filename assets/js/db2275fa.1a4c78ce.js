"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[335],{9613:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>m});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},f=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=p(a),s=n,m=d["".concat(c,".").concat(s)]||d[s]||u[s]||o;return a?r.createElement(m,i(i({ref:t},f),{},{components:a})):r.createElement(m,i({ref:t},f))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(1163),n=(a(9496),a(9613));const o={title:"\u5728SwiftUI\u4e2d\u4f7f\u7528CoordinateSpace\u5b9e\u73b0\u89c6\u5dee\u6807\u9898\u6548\u679c",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u4f7f\u7528SwiftUI\u5b9e\u73b0\u89c6\u5dee\u5934\u90e8\uff08parallax headers\uff09\u7684\u6559\u7a0b\u3002\u89c6\u5dee\u5934\u90e8\u4f1a\u5728\u7528\u6237\u6eda\u52a8\u5c4f\u5e55\u65f6\u4ea7\u751f\u6df1\u5ea6\u548c\u79fb\u52a8\u7684\u6548\u679c\u3002\u6587\u7ae0\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528.named(coordinateSpace)\u65b9\u6cd5\u521b\u5efa\u5750\u6807\u7cfb\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528GeometryReader\u8ba1\u7b97\u5934\u90e8\u4f4d\u7f6e\u3002\u6700\u540e\uff0c\u4f5c\u8005\u5c55\u793a\u4e86\u89c6\u5dee\u5934\u90e8\u7684\u6210\u679c\u3002",authors:["swift"],tags:["SwiftUI","iOS","Swift"]},i=void 0,l={permalink:"/blog/2023/05/16/parallax-header-effect-in-swiftui-using-coordinatespace",source:"@site/blog/2023-05-16-parallax-header-effect-in-swiftui-using-coordinatespace/index.md",title:"\u5728SwiftUI\u4e2d\u4f7f\u7528CoordinateSpace\u5b9e\u73b0\u89c6\u5dee\u6807\u9898\u6548\u679c",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u4f7f\u7528SwiftUI\u5b9e\u73b0\u89c6\u5dee\u5934\u90e8\uff08parallax headers\uff09\u7684\u6559\u7a0b\u3002\u89c6\u5dee\u5934\u90e8\u4f1a\u5728\u7528\u6237\u6eda\u52a8\u5c4f\u5e55\u65f6\u4ea7\u751f\u6df1\u5ea6\u548c\u79fb\u52a8\u7684\u6548\u679c\u3002\u6587\u7ae0\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528.named(coordinateSpace)\u65b9\u6cd5\u521b\u5efa\u5750\u6807\u7cfb\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528GeometryReader\u8ba1\u7b97\u5934\u90e8\u4f4d\u7f6e\u3002\u6700\u540e\uff0c\u4f5c\u8005\u5c55\u793a\u4e86\u89c6\u5dee\u5934\u90e8\u7684\u6210\u679c\u3002",date:"2023-05-16T00:00:00.000Z",formattedDate:"2023\u5e745\u670816\u65e5",tags:[{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"iOS",permalink:"/blog/tags/i-os"},{label:"Swift",permalink:"/blog/tags/swift"}],readingTime:5.62,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"\u5728SwiftUI\u4e2d\u4f7f\u7528CoordinateSpace\u5b9e\u73b0\u89c6\u5dee\u6807\u9898\u6548\u679c",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u4f7f\u7528SwiftUI\u5b9e\u73b0\u89c6\u5dee\u5934\u90e8\uff08parallax headers\uff09\u7684\u6559\u7a0b\u3002\u89c6\u5dee\u5934\u90e8\u4f1a\u5728\u7528\u6237\u6eda\u52a8\u5c4f\u5e55\u65f6\u4ea7\u751f\u6df1\u5ea6\u548c\u79fb\u52a8\u7684\u6548\u679c\u3002\u6587\u7ae0\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528.named(coordinateSpace)\u65b9\u6cd5\u521b\u5efa\u5750\u6807\u7cfb\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528GeometryReader\u8ba1\u7b97\u5934\u90e8\u4f4d\u7f6e\u3002\u6700\u540e\uff0c\u4f5c\u8005\u5c55\u793a\u4e86\u89c6\u5dee\u5934\u90e8\u7684\u6210\u679c\u3002",authors:["swift"],tags:["SwiftUI","iOS","Swift"]},nextItem:{title:"\u4f18\u5316 SwiftUI \u652f\u6301\u591a\u5e73\u53f0\u4ee3\u7801",permalink:"/blog/2023/03/25/improve-multiplatform-swiftui-code"}},c={authorsImageUrls:[void 0]},p=[{value:"\u521b\u5efa ParallaxHeader \u89c6\u56fe",id:"\u521b\u5efa-parallaxheader-\u89c6\u56fe",level:2},{value:"Body",id:"body",level:2},{value:"\u6a21\u7cca\u6548\u679c",id:"\u6a21\u7cca\u6548\u679c",level:2},{value:"\u8ba1\u7b97\u504f\u79fb\u91cf",id:"\u8ba1\u7b97\u504f\u79fb\u91cf",level:2},{value:"\u8ba1\u7b97\u9ad8\u5ea6",id:"\u8ba1\u7b97\u9ad8\u5ea6",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u6700\u7ec8\u6548\u679c",id:"\u6700\u7ec8\u6548\u679c",level:2}],f={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728\u79fb\u52a8\u548c Web \u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u89c6\u5dee\u6807\u9898\u662f\u4e00\u79cd\u6d41\u884c\u7684\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u53ef\u4ee5\u521b\u5efa\u89c6\u89c9\u4e0a\u4ee4\u4eba\u60ca\u53f9\u7684\u754c\u9762\u3002\u901a\u8fc7\u5728\u7528\u6237\u6eda\u52a8\u65f6\u4ee5\u4e0d\u540c\u7684\u901f\u5ea6\u79fb\u52a8\u5185\u5bb9\uff0c\u89c6\u5dee\u6807\u9898\u53ef\u4ee5\u521b\u5efa\u6df1\u5ea6\u548c\u52a8\u6001\u7684\u9519\u89c9\u3002"),(0,n.kt)("p",null,"\u5728\u672c\u535a\u5ba2\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba8\u8bba\u5982\u4f55\u4f7f\u7528 SwiftUI \u5b9e\u73b0\u89c6\u5dee\u6807\u9898\u3002\u6211\u4eec\u5c06\u4f7f\u7528.named(coordinateSpace)\u4fee\u9970\u7b26\u521b\u5efa\u4e00\u4e2a\u5750\u6807\u7a7a\u95f4\uff0c\u7528\u4e8e\u8ba1\u7b97\u6807\u9898\u5728\u7528\u6237\u6eda\u52a8\u65f6\u7684\u4f4d\u7f6e\u3002"),(0,n.kt)("h2",{id:"\u521b\u5efa-parallaxheader-\u89c6\u56fe"},"\u521b\u5efa ParallaxHeader \u89c6\u56fe"),(0,n.kt)("p",null,"\u6211\u4eec\u7684\u89c6\u5dee\u6807\u9898\u7684\u5b9e\u73b0\u5c06\u4f4d\u4e8e ParallaxHeader \u89c6\u56fe\u4e2d\u3002ParallaxHeader \u89c6\u56fe\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff1acoordinateSpace\u3001defaultHeight \u548c content\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"struct ParallaxHeader<Content: View, Space: Hashable>: View {\n    let content: () -> Content\n    let coordinateSpace: Space\n    let defaultHeight: CGFloat\n\n    init(\n        coordinateSpace: Space,\n        defaultHeight: CGFloat,\n        @ViewBuilder _ content: @escaping () -> Content\n    ) {\n        self.content = content\n        self.coordinateSpace = coordinateSpace\n        self.defaultHeight = defaultHeight\n    }\n\n    var body: some View {\n        // ...\n    }\n\n    private func offset(for proxy: GeometryProxy) -> CGFloat {\n        // ...\n    }\n\n    private func heightModifier(for proxy: GeometryProxy) -> CGFloat {\n        // ...\n    }\n}\n")),(0,n.kt)("p",null,"content \u53c2\u6570\u662f\u4e00\u4e2a\u89c6\u56fe\u6784\u5efa\u5668\u95ed\u5305\uff0c\u8fd4\u56de\u5c06\u663e\u793a\u5728\u6807\u9898\u4e2d\u7684\u89c6\u56fe\u3002coordinateSpace \u53c2\u6570\u662f\u5c06\u7528\u4e8e\u8ba1\u7b97\u6807\u9898\u4f4d\u7f6e\u7684\u5750\u6807\u7a7a\u95f4\u7684\u540d\u79f0\u3002\u8fd9\u5e94\u8be5\u662f\u6211\u4eec\u7a0d\u540e\u5c06\u5b9e\u73b0\u7684\u5305\u542b ScrollView \u7684\u5750\u6807\u7a7a\u95f4\u3002defaultHeight \u53c2\u6570\u662f\u504f\u79fb\u91cf\u4e3a 0 \u65f6\u6807\u9898\u7684\u9ed8\u8ba4\u9ad8\u5ea6\u3002"),(0,n.kt)("h2",{id:"body"},"Body"),(0,n.kt)("p",null,"\u5728 ParallaxHeader \u89c6\u56fe\u7684\u6b63\u6587\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 GeometryReader \u6765\u786e\u5b9a\u6807\u9898\u7684\u4f4d\u7f6e\u3002\u6211\u4eec\u4f7f\u7528 offset(for:)\u548c heightModifier(for:)\u8f85\u52a9\u51fd\u6570\u6765\u8ba1\u7b97\u504f\u79fb\u91cf\u548c\u9ad8\u5ea6\u4fee\u9970\u5668\uff0c\u7a0d\u540e\u6211\u4eec\u5c06\u8be6\u7ec6\u8ba8\u8bba\u8fd9\u4e24\u4e2a\u51fd\u6570\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"var body: some View {\n    GeometryReader { proxy in\n        let offset = offset(for: proxy)\n        let heightModifier = heightModifier(for: proxy)\n        let blurRadius = min(\n            heightModifier / 20,\n            max(10, heightModifier / 20)\n        )\n        content()\n            .edgesIgnoringSafeArea(.horizontal)\n            .frame(\n                width: proxy.size.width,\n                height: proxy.size.height + heightModifier\n            )\n            .offset(y: offset)\n            .blur(radius: blurRadius)\n    }.frame(height: defaultHeight)\n}\n")),(0,n.kt)("p",null,"\u6211\u4eec\u7684 ParallaxHeader \u5c06\u4f1a\u662f\u795e\u5947\u7684\uff01\u5f53\u5411\u4e0a\u6eda\u52a8\u65f6\uff0c\u5b83\u5c06\u7ed9\u6211\u4eec\u4e00\u79cd\u6df1\u5ea6\u9519\u89c9\u3002\u5f53\u6211\u4eec\u5c1d\u8bd5\u5411\u4e0b\u62c9\u52a8\u65f6\uff0c\u5b83\u8fd8\u4f1a\u4f7f\u5185\u5bb9\u62c9\u4f38\u548c\u6a21\u7cca\uff01\u8fd9\u5c06\u4e30\u5bcc\u7528\u6237\u4f53\u9a8c\u5e76\u63d0\u4f9b\u6109\u5feb\u7684\u6eda\u52a8\u611f\uff01"),(0,n.kt)("h2",{id:"\u6a21\u7cca\u6548\u679c"},"\u6a21\u7cca\u6548\u679c"),(0,n.kt)("p",null,"\u6211\u4eec\u6b63\u5728\u8ba1\u7b97\u6807\u9898\u56fe\u50cf\u7684\u6a21\u7cca\u534a\u5f84\u3002\u5b83\u4e0d\u5e94\u8be5\u592a\u5927\u4ee5\u906e\u6321\u56fe\u7247\uff0c\u4f46\u8db3\u591f\u5927\u4ee5\u521b\u5efa\u51fa\u4ee4\u4eba\u6109\u60a6\u7684\u6548\u679c\u3002\u6211\u9009\u62e9\u4e86\u6700\u5927\u6a21\u7cca\u534a\u5f84\u4e3a 10\u3002\u4e3a\u4e86\u4f7f\u6a21\u7cca\u6548\u679c\u9010\u6e10\u589e\u52a0\uff0c\u6211\u901a\u8fc7\u5c06 heightModifier \u9664\u4ee5 20 \u6765\u51cf\u5c0f\u589e\u52a0\u7387\u3002\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u4e0d\u540c\u7684\u503c\uff0c\u627e\u5230\u6700\u9002\u5408\u60a8\u7279\u5b9a\u60c5\u51b5\u7684\u503c\u3002"),(0,n.kt)("h2",{id:"\u8ba1\u7b97\u504f\u79fb\u91cf"},"\u8ba1\u7b97\u504f\u79fb\u91cf"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"private func offset(for proxy: GeometryProxy) -> CGFloat {\n    let frame = proxy.frame(in: .named(coordinateSpace))\n    if frame.minY < 0 {\n        return -frame.minY * 0.8\n    }\n    return -frame.minY\n}\n")),(0,n.kt)("p",null,"offset(for:) \u65b9\u6cd5\u6839\u636e GeometryProxy \u76f8\u5bf9\u4e8e\u6307\u5b9a\u7684 coordinateSpace \u7684\u4f4d\u7f6e\u6765\u8ba1\u7b97\u6807\u9898\u89c6\u56fe\u7684\u5f53\u524d\u504f\u79fb\u91cf\u3002\u5982\u679c\u6807\u9898\u5728\u6eda\u52a8\u89c6\u56fe\u7684\u9876\u90e8\u4e4b\u4e0a\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u4fee\u6539\u8fc7\u7684\u504f\u79fb\u91cf\uff0c\u4f7f\u6807\u9898\u7684\u79fb\u52a8\u901f\u5ea6\u6bd4\u5185\u5bb9\u6162\u3002\u5426\u5219\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de\u4e0e\u7528\u6237\u6eda\u52a8\u4f4d\u7f6e\u76f8\u5339\u914d\u7684\u504f\u79fb\u91cf\u3002\u7b2c\u4e8c\u79cd\u9009\u9879\u786e\u4fdd\u6211\u4eec\u7684\u5185\u5bb9\u4fdd\u6301\u7c98\u5728\u5c4f\u5e55\u9876\u90e8\u3002\u8fd9\u4e2a\u8ba1\u7b97\u662f\u57fa\u4e8e\u6307\u5b9a\u7684 coordinateSpace \u4e2d\u6807\u9898\u89c6\u56fe\u7684\u6846\u67b6\u3002"),(0,n.kt)("h2",{id:"\u8ba1\u7b97\u9ad8\u5ea6"},"\u8ba1\u7b97\u9ad8\u5ea6"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"private func heightModifier(for proxy: GeometryProxy) -> CGFloat {\n    let frame = proxy.frame(in: .named(coordinateSpace))\n    return max(0, frame.minY)\n}\n")),(0,n.kt)("p",null,"heightModifier(for:) \u65b9\u6cd5\u6839\u636e GeometryProxy \u76f8\u5bf9\u4e8e\u6307\u5b9a\u7684 coordinateSpace \u7684\u4f4d\u7f6e\u6765\u8ba1\u7b97\u6807\u9898\u89c6\u56fe\u9ad8\u5ea6\u7684\u4fee\u9970\u5668\u3002\u5982\u679c\u6807\u9898\u5b8c\u5168\u53ef\u89c1\uff0cheightModifier \u88ab\u8bbe\u7f6e\u4e3a\u96f6\u3002\u5982\u679c\u6807\u9898\u5b8c\u5168\u4e0d\u53ef\u89c1\uff0cheightModifier \u88ab\u8bbe\u7f6e\u4e3a\u96f6\u7684\u6700\u5c0f\u503c - \u6211\u4eec\u4e0d\u5e0c\u671b\u5728\u5411\u4e0a\u6eda\u52a8\u65f6\u4f7f\u6807\u9898\u53d8\u5c0f\uff01\u5426\u5219\uff0cheightModifier \u88ab\u8bbe\u7f6e\u4e3a\u6807\u9898\u5728\u6307\u5b9a\u7684 coordinateSpace \u4e2d\u7684\u5f53\u524d\u4f4d\u7f6e\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,n.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u7684\u89c6\u5dee\u6807\u9898\u5e76\u4eab\u53d7\u6548\u679c\uff01"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},'struct ContentView: View {\n    private enum CoordinateSpaces {\n        case scrollView\n    }\n    var body: some View {\n        ScrollView {\n            ParalaxHeader(\n                coordinateSpace: CoordinateSpaces.scrollView,\n                defaultHeight: 400\n            ) {\n                Image("flower")\n                    .resizable()\n                    .scaledToFill()\n            }\n            Rectangle()\n                .fill(.blue)\n                .frame(height: 1000)\n                .shadow(color: .black.opacity(0.8), radius: 10, y: -10)\n                .offset(y: -10)\n        }\n        .coordinateSpace(name: CoordinateSpaces.scrollView)\n        .edgesIgnoringSafeArea(.top)\n\n    }\n}\n')),(0,n.kt)("p",null,"\u6211\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u7ed3\u6784\uff0c\u4f7f\u7528\u56fe\u50cf\u4f5c\u4e3a\u6807\u9898\u5185\u5bb9\u3002\u4e3a\u6b64\uff0c\u6211\u4f7f\u7528\u4e86\u4e00\u5f20\u514d\u8d39\u7684\u82b1\u6735\u56fe\u7247\u3002\u4e3a\u4e86\u6a21\u62df\u5927\u91cf\u53ef\u6eda\u52a8\u7684\u5185\u5bb9\uff0c\u6211\u4f7f\u7528\u4e86\u4e00\u4e2a\u975e\u5e38\u9ad8\u7684\u77e9\u5f62\u3002\u8fd9\u8db3\u4ee5\u6f14\u793a\u89c6\u5dee\u6548\u679c\u3002\u6211\u4eec\u4ee3\u7801\u7684\u5173\u952e\u90e8\u5206\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},".coordinateSpace(name: CoordinateSpaces.scrollView)")," \u4fee\u9970\u7b26\u3002\u8fd9\u4e2a\u4fee\u9970\u7b26\u5141\u8bb8\u6211\u4eec\u7cbe\u786e\u8ba1\u7b97\u89c6\u5dee\u6548\u679c\u7684\u504f\u79fb\u91cf\u3002\u53e6\u5916\uff0c\u6211\u521b\u5efa\u4e86\u4e00\u4e2a CoordinateSpaces \u679a\u4e3e\uff0c\u4e3a\u6211\u4eec\u7684\u5750\u6807\u7a7a\u95f4\u63d0\u4f9b\u4e86\u7c7b\u578b\u5b89\u5168\u6027\u548c\u547d\u540d\u7a7a\u95f4\u3002"),(0,n.kt)("h2",{id:"\u6700\u7ec8\u6548\u679c"},"\u6700\u7ec8\u6548\u679c"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u6211\u4eec\u89c6\u5dee\u6807\u9898\u7684\u6700\u7ec8\u6f14\u793a\u6548\u679c\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://arturgruchala.com/content/images/2023/05/version-1-uuid-5E32AB2C-ED9D-48DD-9C1F-EE36A740016D-mode-compatible-noloc-0.gif",alt:"Working effect"})),(0,n.kt)("p",null,"\u5e0c\u671b\u4f60\u80fd\u559c\u6b22\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\u539f\u6587(\u82f1\u6587)\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://arturgruchala.com/parallax-header-effect-in-swiftui-using-coordinatespace/"},"https://arturgruchala.com/parallax-header-effect-in-swiftui-using-coordinatespace/")))))}u.isMDXComponent=!0}}]);