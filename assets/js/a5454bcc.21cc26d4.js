"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4797],{7329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>n,toc:()=>p});var i=r(1874),a=r(6454);const c={title:"\u5728 Swift App \u4e2d\u4f7f\u7528 JavaScript",description:"\u6211\u5982\u4f55\u4f7f\u7528 JavaScriptCore \u5c06 JavaScript \u4f9d\u8d56\u9879\u6dfb\u52a0\u5230\u6211\u7684 iOS \u5e94\u7528\u7a0b\u5e8f\u4ee5\u4ece URL \u4e2d\u5220\u9664\u8ddf\u8e2a\u53c2\u6570\u3002",authors:["swift"],tags:["Swift","JavaScript"]},s=void 0,n={permalink:"/blog/2023/02/10/javascript-in-swift",source:"@site/blog/2023-02-10-javascript-in-swift/index.md",title:"\u5728 Swift App \u4e2d\u4f7f\u7528 JavaScript",description:"\u6211\u5982\u4f55\u4f7f\u7528 JavaScriptCore \u5c06 JavaScript \u4f9d\u8d56\u9879\u6dfb\u52a0\u5230\u6211\u7684 iOS \u5e94\u7528\u7a0b\u5e8f\u4ee5\u4ece URL \u4e2d\u5220\u9664\u8ddf\u8e2a\u53c2\u6570\u3002",date:"2023-02-10T00:00:00.000Z",formattedDate:"2023\u5e742\u670810\u65e5",tags:[{label:"Swift",permalink:"/blog/tags/swift"},{label:"JavaScript",permalink:"/blog/tags/java-script"}],readingTime:9.19,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"\u5728 Swift App \u4e2d\u4f7f\u7528 JavaScript",description:"\u6211\u5982\u4f55\u4f7f\u7528 JavaScriptCore \u5c06 JavaScript \u4f9d\u8d56\u9879\u6dfb\u52a0\u5230\u6211\u7684 iOS \u5e94\u7528\u7a0b\u5e8f\u4ee5\u4ece URL \u4e2d\u5220\u9664\u8ddf\u8e2a\u53c2\u6570\u3002",authors:["swift"],tags:["Swift","JavaScript"]},unlisted:!1,prevItem:{title:"\u4fee\u590d iOS \u5c0f\u90e8\u4ef6\u4e2d\u6700\u5947\u602a\u7684\u9519\u8bef/\u5d29\u6e83\uff1f",permalink:"/blog/2023/02/20/the-weirdest-bugcrash-in-widgets"},nextItem:{title:"Swift \u4e2d `#available` \u548c @available \u6709\u4ec0\u4e48\u533a\u522b",permalink:"/blog/2022/12/19/swift-available-vs-available"}},l={authorsImageUrls:[void 0]},p=[{value:"\u6848\u4f8b\u7814\u7a76\uff1a\u4ece JavaScript \u4e2d\u7684 URL \u4e2d\u5220\u9664\u8ddf\u8e2a\u53c2\u6570",id:"\u6848\u4f8b\u7814\u7a76\u4ece-javascript-\u4e2d\u7684-url-\u4e2d\u5220\u9664\u8ddf\u8e2a\u53c2\u6570",level:2},{value:"\u6574\u5408\u4f9d\u8d56",id:"\u6574\u5408\u4f9d\u8d56",level:3},{value:"\u521b\u5efa JavaScript \u73af\u5883",id:"\u521b\u5efa-javascript-\u73af\u5883",level:3},{value:"\u52a0\u8f7d JavaScript \u4ee3\u7801",id:"\u52a0\u8f7d-javascript-\u4ee3\u7801",level:3},{value:"\u4ece Swift \u8c03\u7528 JavaScript \u51fd\u6570",id:"\u4ece-swift-\u8c03\u7528-javascript-\u51fd\u6570",level:3},{value:"\u5c06\u503c\u4ece Swift \u52a8\u6001\u4f20\u9012\u5230 JavaScript",id:"\u5c06\u503c\u4ece-swift-\u52a8\u6001\u4f20\u9012\u5230-javascript",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["\u5728 iOS \u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u4f7f\u7528 C\u3001C++\u3001Objective-C\u3001Objective-C++ \u6216 JavaScript \u7f16\u5199\u7684\u4ee3\u7801\u5728\u6280\u672f\u4e0a\u76f8\u5f53\u5bb9\u6613\u3002\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 JavaScriptCore \u4ece Swift \u8c03\u7528 JavaScript \u4ee3\u7801\u3002\u4f8b\u5982\uff0c\u6211\u5c06\u901a\u8fc7\u5411\u6211\u7684",(0,i.jsx)(t.a,{href:"https://douglashill.co/reading-app/",children:"iOS \u9605\u8bfb\u5e94\u7528\u7a0b\u5e8f"}),"\u6dfb\u52a0 JavaScript \u4f9d\u8d56\u9879\u6765\u4ece URL \u4e2d\u5220\u9664\u8ddf\u8e2a\u53c2\u6570\u7684\u6b65\u9aa4\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528 Swift \u7f16\u5199 iOS \u5e94\u7528\u7a0b\u5e8f\u5e76\u5c1d\u8bd5\u89e3\u51b3\u60a8\u786e\u5b9a\u4ee5\u524d\u5df2\u7ecf\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u60a8\u53ef\u80fd\u4f1a\u5bfb\u627e\u89e3\u51b3\u8be5\u95ee\u9898\u7684\u73b0\u6709\u4ee3\u7801\u3002\u60a8\u53ef\u80fd\u9996\u5148\u4f1a\u60f3\u5230\u5bfb\u627e\u7528 Swift \u7f16\u5199\u7684\u5f00\u6e90\u4ee3\u7801\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Swift Package Manager \u5c06\u5176\u96c6\u6210\u5230\u60a8\u7684\u9879\u76ee\u4e2d\u3002\u4f8b\u5982\uff0c\u901a\u8fc7\u641c\u7d22",(0,i.jsx)(t.a,{href:"https://swiftpackageindex.com/",children:"Swift Package Index"}),"\u3002\u7136\u800c\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u5c06\u81ea\u5df1\u5c40\u9650\u4e8e Swift\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u5728 iOS \u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u4f7f\u7528 C\u3001C++\u3001Objective-C\u3001Objective-C++ \u6216 JavaScript \u7f16\u5199\u7684\u4ee3\u7801\u5728\u6280\u672f\u4e0a\u76f8\u5f53\u5bb9\u6613\u3002\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 JavaScriptCore \u4ece Swift \u8c03\u7528 JavaScript \u4ee3\u7801\u3002\u4f8b\u5982\uff0c\u6211\u5c06\u901a\u8fc7\u5411\u6211\u7684",(0,i.jsx)(t.a,{href:"https://douglashill.co/reading-app/",children:"iOS \u9605\u8bfb\u5e94\u7528\u7a0b\u5e8f"}),"\u6dfb\u52a0 JavaScript \u4f9d\u8d56\u9879\u6765\u4ece URL \u4e2d\u5220\u9664\u8ddf\u8e2a\u53c2\u6570\u7684\u6b65\u9aa4\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u6211\u4e0d\u662f\u5728\u8c08\u8bba\u50cf React Native \u8fd9\u6837\u7684\u6df7\u5408\u6280\u672f\uff0c\u5b83\u53ef\u4ee5\u8ba9\u4f60\u7528 JavaScript \u7f16\u5199\u5e94\u7528\u7a0b\u5e8f\u7684 UI\u3002\u8fd9\u662f\u5173\u4e8e\u903b\u8f91\u4e2d\u7684\u7279\u5b9a\u7ec4\u4ef6\u2014\u2014\u751a\u81f3\u662f\u5355\u4e2a\u529f\u80fd\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u6848\u4f8b\u7814\u7a76\u4ece-javascript-\u4e2d\u7684-url-\u4e2d\u5220\u9664\u8ddf\u8e2a\u53c2\u6570",children:"\u6848\u4f8b\u7814\u7a76\uff1a\u4ece JavaScript \u4e2d\u7684 URL \u4e2d\u5220\u9664\u8ddf\u8e2a\u53c2\u6570"}),"\n",(0,i.jsxs)(t.p,{children:["\u6211\u5236\u4f5c\u4e86\u4e00\u4e2a",(0,i.jsx)(t.a,{href:"https://douglashill.co/reading-app/",children:"\u9605\u8bfb\u5e94\u7528\u7a0b\u5e8f"}),"\uff0c\u8ba9\u7528\u6237\u53ef\u4ee5\u4fdd\u5b58\u7f51\u9875\u4ee5\u4f9b\u65e5\u540e\u9605\u8bfb\u3002\u67d0\u4e9b\u7f51\u9875\u94fe\u63a5\u5728\u5171\u4eab\u65f6\u6dfb\u52a0\u4e86\u8ddf\u8e2a\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u4e0d\u4f1a\u4e3a\u7528\u6237\u63d0\u4f9b\u4efb\u4f55\u4ef7\u503c\u3002\u6211\u51b3\u5b9a\u5982\u679c\u6211\u7684\u5e94\u7528\u7a0b\u5e8f\u5728\u4fdd\u5b58\u6587\u7ae0\u65f6\u900f\u660e\u5730\u5220\u9664\u8fd9\u4e9b\u8ddf\u8e2a\u53c2\u6570\uff0c\u90a3\u5bf9\u7528\u6237\u6765\u8bf4\u4f1a\u5f88\u597d\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u4f8b\u5982\u8fd9\u4e2a\u7f51\u5740\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://example.com/something?utm_source=whatever\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u4f1a\u53d8\u6210\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://example.com/something\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u901a\u5e38\uff0c\u67e5\u8be2\u53c2\u6570\u5bf9\u4e8e\u575a\u6301\u5f88\u91cd\u8981\uff0c\u56e0\u4e3a\u5b83\u4eec\u4f1a\u5f71\u54cd\u9875\u9762\u5185\u5bb9\uff0c\u56e0\u6b64\u89e3\u51b3\u6b64\u95ee\u9898\u7684\u4e3b\u8981\u6311\u6218\u662f\u4e86\u89e3\u54ea\u4e9b\u53c2\u6570\u53ef\u80fd\u7528\u4e8e\u8ddf\u8e2a\u3002\u5f53\u6709\u5f00\u6e90\u9009\u9879\u65f6\uff0c\u793e\u533a\u5df2\u7ecf\u6295\u8d44\u4e8e\u4fdd\u6301\u6700\u65b0\u7684\u8ddf\u8e2a\u53c2\u6570\u5217\u8868\uff0c\u6211\u4e0d\u60f3\u81ea\u5df1\u7ec4\u88c5\u4e00\u4e2a\u5e38\u7528\u8ddf\u8e2a\u53c2\u6570\u5217\u8868\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["\u5f15\u8d77\u6211\u6ce8\u610f\u7684\u4e00\u4e2a\u9009\u9879\u662f",(0,i.jsx)(t.a,{href:"https://github.com/newhouse/url-tracking-stripper",children:"Chris Newhouse \u7684 URL Tracking Stripper Chrome \u6269\u5c55\u7a0b\u5e8f"}),"\u3002\u5728\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u53ef\u4ee5\u770b\u5230 URL \u4fee\u6539\u662f\u7531\u6587\u4ef6\u6267\u884c\u7684",(0,i.jsx)(t.a,{href:"https://github.com/newhouse/url-tracking-stripper/blob/master/assets/js/trackers.js",children:(0,i.jsx)(t.code,{children:"trackers.js"})}),"\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u7279\u522b\u662f\uff0c\u8fd9\u4e2a\u6587\u4ef6\u5b9a\u4e49\u4e86\u4e00\u4e2a",(0,i.jsx)(t.code,{children:"ALL_TRACKERS"}),"\u5e38\u91cf\u548c\u8fd9\u4e2a\u51fd\u6570\uff1a"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"function removeTrackersFromUrl(url, trackers) {\n    ...\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u8fd9\u4f3c\u4e4e\u662f\u89e3\u51b3\u6211\u7684\u95ee\u9898\u7684\u53ef\u884c\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"\u6574\u5408\u4f9d\u8d56",children:"\u6574\u5408\u4f9d\u8d56"}),"\n",(0,i.jsxs)(t.p,{children:["\u5982\u679c\u60a8\u6709\u5f88\u591a JavaScript \u4f9d\u8d56\u9879\uff0c\u800c\u8fd9\u4e9b\u4f9d\u8d56\u9879\u53c8\u6709\u81ea\u5df1\u7684\u4f9d\u8d56\u9879\uff0c\u90a3\u4e48\u4f7f\u7528 JavaScript \u4f9d\u8d56\u9879\u7ba1\u7406\u5668\uff08\u4f8b\u5982",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/",children:"npm"})," \uff09\u53ef\u80fd\u662f\u4e2a\u597d\u4e3b\u610f\u3002\u5728\u6211\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u6ca1\u6709\u5f88\u591a JavaScript \u4f9d\u8d56\u9879\uff0c\u6240\u4ee5\u6211\u53ea\u662f\u5c06\u8fd9\u4e2a\u5b58\u50a8\u5e93\u6dfb\u52a0\u4e3a Git \u5b50\u6a21\u5757\u3002\u6211\u5c06\u8df3\u8fc7\u8fd9\u65b9\u9762\u7684\u7ec6\u8282\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u63a5\u4e0b\u6765\u6211\u6dfb\u52a0",(0,i.jsx)(t.a,{href:"https://github.com/newhouse/url-tracking-stripper/blob/master/assets/js/trackers.js",children:(0,i.jsx)(t.code,{children:"trackers.js"})}),"\u5230\u6211\u7684 Xcode \u9879\u76ee\u5e76\u5c06\u5176\u6dfb\u52a0\u4e3a Xcode \u4e2d\u6211\u7684\u76ee\u6807\u7684\u8d44\u6e90\u3002Swift \u4ee3\u7801\u88ab\u7f16\u8bd1\u6210\u673a\u5668\u4ee3\u7801\u3002\u53e6\u4e00\u65b9\u9762\uff0cJavaScript \u662f\u4e00\u79cd\u89e3\u91ca\u578b\u8bed\u8a00\uff0c\u6e90\u4ee3\u7801\u5b8c\u5168\u6309\u7167\u60a8\u6240\u89c1\u5728\u5e94\u7528\u7a0b\u5e8f\u5305\u4e2d\u4ea4\u4ed8\u3002"]}),"\n",(0,i.jsx)(t.h3,{id:"\u521b\u5efa-javascript-\u73af\u5883",children:"\u521b\u5efa JavaScript \u73af\u5883"}),"\n",(0,i.jsxs)(t.p,{children:["\u4e3a\u4e86\u4ece\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c JavaScript\uff0c\u6211\u4eec\u4f7f\u7528\u4e86 Apple \u7684",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/javascriptcore",children:"JavaScriptCore"}),"\u6846\u67b6\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"import JavaScriptCore\n"})}),"\n",(0,i.jsx)(t.p,{children:"JavaScriptCore \u63d0\u4f9b\u4e86\u6267\u884c JavaScript \u7684\u73af\u5883\u3002\u6ca1\u6709\u7f51\u9875\u3001UI \u6216\u6587\u6863\u5bf9\u8c61\u6a21\u578b (DOM)\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["JavaScript \u73af\u5883\u4e0e\u6211\u4eec\u7684 Swift \u4ee3\u7801\u8fd0\u884c\u7684\u73af\u5883\u662f\u5206\u5f00\u7684\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5728 Swift \u548c JavaScript \u73af\u5883\u4e4b\u95f4\u660e\u786e\u5730\u79fb\u52a8\u6570\u636e\u3002",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/javascriptcore/jscontext",children:(0,i.jsx)(t.code,{children:"JSContext"})}),"\u4e8b\u5b9e\u4e0a\uff0c\u901a\u8fc7\u4ece\u6211\u4eec\u7684 Swift \u4ee3\u7801\u521b\u5efa\u7c7b\u7684\u5b9e\u4f8b\uff0c\u60a8\u53ef\u4ee5\u62e5\u6709\u4efb\u610f\u591a\u7684 JavaScript \u73af\u5883\u3002"]}),"\n",(0,i.jsx)(t.h3,{id:"\u52a0\u8f7d-javascript-\u4ee3\u7801",children:"\u52a0\u8f7d JavaScript \u4ee3\u7801"}),"\n",(0,i.jsxs)(t.p,{children:["\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u52a0\u8f7d",(0,i.jsx)(t.a,{href:"https://github.com/newhouse/url-tracking-stripper/blob/master/assets/js/trackers.js",children:(0,i.jsx)(t.code,{children:"trackers.js"})}),"\u5230\u6211\u4eec\u7684 JavaScript \u73af\u5883\u4e2d\uff1a"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'let context = JSContext()!\nlet scriptURL = Bundle.main.url(forResource: "trackers", withExtension: "js")!\nlet script = try! String(contentsOf: scriptURL)\ncontext.evaluateScript(script)\n'})}),"\n",(0,i.jsxs)(t.p,{children:["\u8fd9\u5c06\u4f7f",(0,i.jsx)(t.code,{children:"removeTrackersFromUrl"}),"\u53ef\u7528\u5e76\u52a0\u8f7d\u4e00\u4e9b\u5e38\u91cf\uff0c\u4f8b\u5982",(0,i.jsx)(t.code,{children:"ALL_TRACKERS"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["\u60a8\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\u6211\u5f3a\u5236\u89e3\u5305\u4e86\u5bf9",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/javascriptcore/jscontext",children:(0,i.jsx)(t.code,{children:"JSContext"})}),". \u5927\u591a\u6570\u5177\u6709 Objective-C API \u7684 Apple \u6846\u67b6\u90fd\u901a\u8fc7\u6dfb\u52a0\u53ef",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/swift/designating-nullability-in-objective-c-apis",children:"\u7a7a\u6027\u6ce8\u91ca"}),"\u548c\u5176\u4ed6\u6539\u8fdb\u5f88\u597d\u5730\u6865\u63a5\u5230 Swift\u3002JavaScriptCore \u8fd8\u6ca1\u6709\u8fd9\u6837\u505a\uff0c\u6240\u4ee5\u5b83\u7684\u8bb8\u591a API \u4f7f\u7528",(0,i.jsx)(t.a,{href:"https://www.hackingwithswift.com/example-code/language/what-are-implicitly-unwrapped-optionals",children:"\u9690\u5f0f\u5c55\u5f00\u7684\u53ef\u9009"}),"\u503c\u6865\u63a5\u5230 Swift \uff0c\u6211\u4eec\u771f\u7684\u4e0d\u77e5\u9053\u8fd9\u4e9b API \u662f\u5426\u53ef\u80fd\u8fd4\u56de nil\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4e0d\u77e5\u9053\u521b\u5efa a",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/javascriptcore/jscontext",children:(0,i.jsx)(t.code,{children:"JSContext"})}),"\u53ef\u80fd\u4f1a\u5931\u8d25\u7684\u4efb\u4f55\u539f\u56e0\uff0c\u6240\u4ee5\u6211\u5192\u4e86\u98ce\u9669\uff0c\u4f46\u66f4\u4f18\u96c5\u5730\u5904\u7406 nil \u53ef\u80fd\u662f\u660e\u667a\u7684\u3002"]}),"\n",(0,i.jsx)(t.h3,{id:"\u4ece-swift-\u8c03\u7528-javascript-\u51fd\u6570",children:"\u4ece Swift \u8c03\u7528 JavaScript \u51fd\u6570"}),"\n",(0,i.jsxs)(t.p,{children:["\u73b0\u5728\u6211\u4eec\u53ef\u4ee5",(0,i.jsx)(t.code,{children:"removeTrackersFromUrl"}),"\u50cf\u8fd9\u6837\u5728 JavaScript \u73af\u5883\u4e2d\u8fd0\u884c\u8be5\u51fd\u6570\uff1a"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"let output = context.evaluateScript(\"removeTrackersFromUrl('https://example.com/something?utm_source=whatever', ALL_TRACKERS)\")\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u7531\u4e8e\u6b64\u811a\u672c\u76f4\u63a5\u8c03\u7528\u51fd\u6570\uff0c",(0,i.jsx)(t.code,{children:"evaluateScript(_:)"})," \u56e0\u6b64\u4f1a\u5c06 JavaScript \u51fd\u6570\u7684\u8f93\u51fa\u4f5c\u4e3a .swift \u6587\u4ef6\u8fd4\u56de\u5230 Swift \u73af\u5883\u4e2d",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/javascriptcore/jsvalue",children:(0,i.jsx)(t.code,{children:"JSValue"})}),"\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5f88\u5bb9\u6613\u4f20\u5165\uff0c\u56e0\u4e3a\u6211\u4eec\u4f7f\u7528\u4e86\u4e00\u4e2a\u5df2\u7ecf\u5728 JavaScript \u73af\u5883\u4e2d\u5b9a\u4e49\u7684\u5e38\u91cf\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"\u5c06\u503c\u4ece-swift-\u52a8\u6001\u4f20\u9012\u5230-javascript",children:"\u5c06\u503c\u4ece Swift \u52a8\u6001\u4f20\u9012\u5230 JavaScript"}),"\n",(0,i.jsx)(t.p,{children:"\u5bf9\u4e8e JavaScript \u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u6211\u4eec\u9700\u8981\u4f20\u5165 URL\u3002\u8be5\u503c\u9700\u8981\u6765\u81ea Swift \u73af\u5883\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u6211\u4eec\u53ef\u4ee5\u50cf\u8fd9\u6837\u4f7f\u7528\u5b57\u7b26\u4e32\u63d2\u503c\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"let output = context.evaluateScript(\"removeTrackersFromUrl('\\(inputURL.absoluteString)', ALL_TRACKERS)\")\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u8fd9\u79cd\u4ee3\u7801\u4f1a\u5f15\u53d1\u4ee3\u7801\u6ce8\u5165\u5b89\u5168\u6f0f\u6d1e\u3002\u76f8\u53cd\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u8f93\u5165 URL \u8bbe\u7f6e\u4e3a JavaScript \u73af\u5883\u4e2d\u7684\u53d8\u91cf\uff0c\u7136\u540e\u901a\u8fc7\u540d\u79f0\u5f15\u7528\u5b83\u3002"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/javascriptcore/jscontext",children:(0,i.jsx)(t.code,{children:"JSContext"})}),"\u8ba9\u6211\u4eec",(0,i.jsx)(t.code,{children:"objectForKeyedSubscript(_:)"}),"\u4f7f\u7528",(0,i.jsx)(t.code,{children:"setObject(_:forKeyedSubscript)"}),". \u5947\u602a\u7684\u662f\uff0c\u8fd9\u4e2a API \u66f4\u9002\u5408\u5728 Objective-C \u4e2d\u4f7f\u7528\uff0c\u56e0\u4e3a\u5b83\u4eec\u6620\u5c04\u5230\u4e0b\u6807\u8bed\u6cd5\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u50cf\u5728\u5b57\u5178\u4e2d\u4e00\u6837\u8bfb\u53d6\u548c\u8bbe\u7f6e\u503c\u3002\u4e0b\u6807\u8bed\u6cd5\u5728\u8fd9\u91cc\u4f3c\u4e4e\u5728 Swift \u4e2d\u4e0d\u8d77\u4f5c\u7528\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u8fd9\u662f\u4f7f\u7528\u53d8\u91cf\u8bbe\u7f6e\u8f93\u5165 URL\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'// The prefix is very defensive to avoid overwriting a variable name already in use.\nlet inputName = "dh_inputURL" as NSString\ncontext.setObject(inputURL.absoluteString, forKeyedSubscript: inputName)\nlet output = context.evaluateScript("removeTrackersFromUrl(\\(inputName), ALL_TRACKERS)")\n// Not strictly necessary, but we could clean up:\ncontext.setObject(nil, forKeyedSubscript: inputName)\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/javascriptcore/jsvalue",children:(0,i.jsx)(t.code,{children:"JSValue"})}),"JavaScriptCore \u4f7f\u7528 Swift \u4e2d\u7684\u7c7b\u5bf9\u6765\u81ea JavaScript \u73af\u5883\u7684\u503c\u8fdb\u884c\u5efa\u6a21\u3002\u5b83\u662f\u4e00\u4e2a\u5305\u88c5\u5668\u5bf9\u8c61\uff0c\u60a8\u53ef\u4ee5\u4ece\u4e2d\u83b7\u53d6\u7279\u5b9a\u7c7b\u578b\u7684\u503c\uff0c\u5982\u5b57\u7b26\u4e32\u548c\u6574\u6570\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u6211\u4eec\u7684\u6848\u4f8b\u7814\u7a76\u5269\u4e0b\u7684\u5c31\u662f\u5c06 a \u8f6c\u6362",(0,i.jsx)(t.code,{children:"output"}),"\u4e3a",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/javascriptcore/jsvalue",children:(0,i.jsx)(t.code,{children:"JSValue"})}),"a",(0,i.jsx)(t.code,{children:"String"}),"\u7136\u540e\u518d\u8f6c\u6362\u4e3a a ",(0,i.jsx)(t.code,{children:"URL"}),"\uff1a"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"if let outputString = output?.toString(), let outputURL = URL(string: outputString) {\n    return outputURL\n} else {\n    // The output is missing or invalid for some reason. Handle error.\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,i.jsx)(t.p,{children:"\u4ece Swift \u4ee3\u7801\u8c03\u7528 JavaScript \u5f88\u5bb9\u6613\uff0c\u5c3d\u7ba1\u8fd9\u5e76\u975e\u6ca1\u6709\u6469\u64e6\u3002\u4e92\u64cd\u4f5c\u6027\u8fdc\u4e0d\u53ca Swift \u548c Objective-C \u4e4b\u95f4\u7684\u4e92\u64cd\u4f5c\u6027\u3002\u540c\u6837\u660e\u663e\u7684\u662f\uff0cJavaScriptCore API \u662f\u4e3a Objective-C \u8bbe\u8ba1\u7684\uff0c\u5e76\u6ca1\u6709\u9488\u5bf9 Swift \u8fdb\u884c\u9002\u5f53\u7684\u6539\u8fdb\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6700\u540e\uff0c\u6211\u5b81\u613f\u6709\u4e00\u4e2a\u66f4\u5f3a\u5927\u7684\u95ee\u9898\u89e3\u51b3\u65b9\u6848\uff0c\u800c\u4e0d\u7ba1\u7528\u4e8e\u5b9e\u73b0\u8be5\u89e3\u51b3\u65b9\u6848\u7684\u7f16\u7a0b\u8bed\u8a00\u5982\u4f55\uff0c\u5373\u4f7f\u8fd9\u610f\u5473\u7740\u66f4\u591a\u7684\u6469\u64e6\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u901a\u8fc7\u4f7f\u7528\u66f4\u5e7f\u6cdb\u7684\u7f16\u7a0b\u8bed\u8a00\u641c\u7d22\u5f00\u6e90\u89e3\u51b3\u65b9\u6848\uff0c\u6211\u4eec\u6269\u5927\u4e86\u641c\u7d22\u8303\u56f4\uff0c\u56e0\u6b64\u66f4\u6709\u53ef\u80fd\u627e\u5230\u89e3\u51b3\u6211\u4eec\u95ee\u9898\u7684\u73b0\u6709\u89e3\u51b3\u65b9\u6848\u3002\u5bf9\u4e8e JavaScript \u5c24\u5176\u5982\u6b64\uff0c\u56e0\u4e3a Web \u5f00\u53d1\u4eba\u5458\u6bd4 iOS \u5f00\u53d1\u4eba\u5458\u591a\u5f97\u591a\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["\u6211\u5728\u8fd9\u91cc\u4f7f\u7528\u7684\u4f8b\u5b50\u5f88\u7b80\u5355\u3002",(0,i.jsx)(t.a,{href:"https://github.com/newhouse/url-tracking-stripper/blob/master/assets/js/trackers.js",children:(0,i.jsx)(t.code,{children:"trackers.js"})}),"\u624b\u52a8\u5c06\u6574\u4e2a\u6587\u4ef6\u4ece JavaScript \u7ffb\u8bd1\u6210 Swift \u4e0d\u4f1a\u82b1\u5f88\u957f\u65f6\u95f4\u3002\u7136\u800c\uff0c\u76f4\u63a5\u4f7f\u7528\u5f00\u6e90\u4ee3\u7801\u7684\u597d\u5904\u662f\uff0c\u5982\u679c\u8ddf\u8e2a\u5668\u5217\u8868\u968f\u65f6\u95f4\u53d8\u5316\uff0c\u6211\u53ef\u4ee5\u66f4\u65b0\u6211\u7684\u9879\u76ee\u4ee5\u4ec5\u901a\u8fc7\u66f4\u65b0\u5b50\u6a21\u5757\u6765\u4f7f\u7528\u5b83\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 JavaScript \u4f9d\u8d56\u9879\u7ba1\u7406\u5668\u6765\u66f4\u8fdb\u4e00\u6b65\u3002"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\u539f\u6587(\u82f1\u6587)\uff1a",(0,i.jsx)(t.a,{href:"https://douglashill.co/javascript-in-swift/",children:"https://douglashill.co/javascript-in-swift/"})]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},6454:(e,t,r)=>{r.d(t,{Z:()=>n,a:()=>s});var i=r(9953);const a={},c=i.createContext(a);function s(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);