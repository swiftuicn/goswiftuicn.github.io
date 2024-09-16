"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1337],{7916:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>f});var i=n(6070),s=n(5296);const o={title:"\u5982\u4f55\u4ee5\u53ca\u4f55\u65f6\u4f7f\u7528 Swift \u4e2d\u7684\u6269\u5c55",description:"Swift \u4e2d\u7684\u6269\u5c55\u5141\u8bb8\u4f60\u6269\u5c55\u7c7b\u3001\u7ed3\u6784\u4f53\u3001\u534f\u8bae\u548c\u679a\u4e3e\uff0c\u5373\u4f7f\u4f60\u65e0\u6cd5\u8bbf\u95ee\u6e90\u4ee3\u7801\u3002\u6240\u8c13\u7684\u8ffd\u6eaf\u5efa\u6a21\u5141\u8bb8\u4f60\u6269\u5c55\u4f60\u6ca1\u6709\u6e90\u4ee3\u7801\u8bbf\u95ee\u6743\u9650\u7684\u7c7b\u578b\u3002Swift \u7684\u8fd9\u4e00\u5f3a\u5927\u529f\u80fd\u4f7f\u4f60\u80fd\u591f\u5728\u5916\u90e8\u4ee3\u7801\u4e4b\u4e0a\u521b\u5efa\u81ea\u5b9a\u4e49\u5c42\u3002\u4f5c\u4e3a\u4e00\u540d\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u8005\uff0c\u4f55\u65f6\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u662f\u4e00\u9879\u91cd\u8981\u7684\u6280\u80fd\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u6df1\u5165\u4e86\u89e3\u4e00\u4e0b\u3002",authors:["swift"],tags:["swift","extensions"]},r=void 0,a={permalink:"/blog/2024/03/04/extensions-in-swift-how-and-when-to-use-them",source:"@site/blog/2024-03-04-extensions-in-swift-how-and-when-to-use-them/index.md",title:"\u5982\u4f55\u4ee5\u53ca\u4f55\u65f6\u4f7f\u7528 Swift \u4e2d\u7684\u6269\u5c55",description:"Swift \u4e2d\u7684\u6269\u5c55\u5141\u8bb8\u4f60\u6269\u5c55\u7c7b\u3001\u7ed3\u6784\u4f53\u3001\u534f\u8bae\u548c\u679a\u4e3e\uff0c\u5373\u4f7f\u4f60\u65e0\u6cd5\u8bbf\u95ee\u6e90\u4ee3\u7801\u3002\u6240\u8c13\u7684\u8ffd\u6eaf\u5efa\u6a21\u5141\u8bb8\u4f60\u6269\u5c55\u4f60\u6ca1\u6709\u6e90\u4ee3\u7801\u8bbf\u95ee\u6743\u9650\u7684\u7c7b\u578b\u3002Swift \u7684\u8fd9\u4e00\u5f3a\u5927\u529f\u80fd\u4f7f\u4f60\u80fd\u591f\u5728\u5916\u90e8\u4ee3\u7801\u4e4b\u4e0a\u521b\u5efa\u81ea\u5b9a\u4e49\u5c42\u3002\u4f5c\u4e3a\u4e00\u540d\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u8005\uff0c\u4f55\u65f6\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u662f\u4e00\u9879\u91cd\u8981\u7684\u6280\u80fd\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u6df1\u5165\u4e86\u89e3\u4e00\u4e0b\u3002",date:"2024-03-04T00:00:00.000Z",tags:[{inline:!0,label:"swift",permalink:"/blog/tags/swift"},{inline:!0,label:"extensions",permalink:"/blog/tags/extensions"}],readingTime:6.925,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift",page:null}],frontMatter:{title:"\u5982\u4f55\u4ee5\u53ca\u4f55\u65f6\u4f7f\u7528 Swift \u4e2d\u7684\u6269\u5c55",description:"Swift \u4e2d\u7684\u6269\u5c55\u5141\u8bb8\u4f60\u6269\u5c55\u7c7b\u3001\u7ed3\u6784\u4f53\u3001\u534f\u8bae\u548c\u679a\u4e3e\uff0c\u5373\u4f7f\u4f60\u65e0\u6cd5\u8bbf\u95ee\u6e90\u4ee3\u7801\u3002\u6240\u8c13\u7684\u8ffd\u6eaf\u5efa\u6a21\u5141\u8bb8\u4f60\u6269\u5c55\u4f60\u6ca1\u6709\u6e90\u4ee3\u7801\u8bbf\u95ee\u6743\u9650\u7684\u7c7b\u578b\u3002Swift \u7684\u8fd9\u4e00\u5f3a\u5927\u529f\u80fd\u4f7f\u4f60\u80fd\u591f\u5728\u5916\u90e8\u4ee3\u7801\u4e4b\u4e0a\u521b\u5efa\u81ea\u5b9a\u4e49\u5c42\u3002\u4f5c\u4e3a\u4e00\u540d\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u8005\uff0c\u4f55\u65f6\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u662f\u4e00\u9879\u91cd\u8981\u7684\u6280\u80fd\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u6df1\u5165\u4e86\u89e3\u4e00\u4e0b\u3002",authors:["swift"],tags:["swift","extensions"]},unlisted:!1,prevItem:{title:"\u5982\u4f55\u5728 SwiftUI \u4e2d\u5ef6\u8fdf\u52a8\u753b",permalink:"/blog/2024/03/04/delay-swiftui-animation"},nextItem:{title:"\u7528SwiftUI\u8f7b\u677e\u4f7f\u7528SFSafariViewController\u5b9e\u73b0\u5728APP\u91cc\u6253\u5f00\u7f51\u9875",permalink:"/blog/2023/12/07/sfsafariviewcontroller-open-webpages-in-app"}},l={authorsImageUrls:[void 0]},f=[];function c(t){const e={p:"p",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Swift \u4e2d\u7684\u6269\u5c55\u5141\u8bb8\u4f60\u6269\u5c55\u7c7b\u3001\u7ed3\u6784\u4f53\u3001\u534f\u8bae\u548c\u679a\u4e3e\uff0c\u5373\u4f7f\u4f60\u65e0\u6cd5\u8bbf\u95ee\u6e90\u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6240\u8c13\u7684\u8ffd\u6eaf\u5efa\u6a21\u5141\u8bb8\u4f60\u6269\u5c55\u4f60\u6ca1\u6709\u6e90\u4ee3\u7801\u8bbf\u95ee\u6743\u9650\u7684\u7c7b\u578b\u3002Swift \u7684\u8fd9\u4e00\u5f3a\u5927\u529f\u80fd\u4f7f\u4f60\u80fd\u591f\u5728\u5916\u90e8\u4ee3\u7801\u4e4b\u4e0a\u521b\u5efa\u81ea\u5b9a\u4e49\u5c42\u3002\u4f5c\u4e3a\u4e00\u540d\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u8005\uff0c\u4f55\u65f6\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u662f\u4e00\u9879\u91cd\u8981\u7684\u6280\u80fd\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u6df1\u5165\u4e86\u89e3\u4e00\u4e0b\u3002"})]})}function u(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},5296:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>a});var i=n(758);const s={},o=i.createContext(s);function r(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);