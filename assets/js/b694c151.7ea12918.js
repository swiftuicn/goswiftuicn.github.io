"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3234],{9766:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=t(6070),s=t(5296);const i={title:"Xcode 15\uff1a2023\u5e74\u503c\u5f97\u4f7f\u7528\u7684 OSLog \u65b0\u7279\u6027",description:"\u57282023\u5e74\uff0cXcode 15\u5e26\u6765\u4e86\u65b0\u529f\u80fd\uff0c\u652f\u6301**\u7ed3\u6784\u5316\u65e5\u5fd7**\uff0c\u8ba9\u4f7f\u7528OSLog\u53d8\u5f97\u66f4\u52a0\u503c\u5f97\u63a8\u8350\u3002\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u7b5b\u9009\u529f\u80fd\u5728\u8c03\u8bd5\u63a7\u5236\u53f0\u4e2d\u53ea\u770b\u5230\u6765\u81ea\u81ea\u5df1\u5e94\u7528\u7a0b\u5e8f\u7684\u65e5\u5fd7\uff0c\u8fd8\u80fd\u9ad8\u4eae\u663e\u793a\u8b66\u544a\u548c\u9519\u8bef\u3002\u5bf9\u4e8e\u9700\u8981\u66f4\u591a\u4fe1\u606f\u7684\u60c5\u51b5\uff0c\u53ea\u9700\u6309\u4e00\u4e0b\u76f8\u5e94\u65e5\u5fd7\u884c\u5373\u53ef\u3002\u7136\u800c\uff0c\u9700\u8981\u6ce8\u610f\u7ed3\u6784\u5316\u65e5\u5fd7\u4ec5\u9002\u7528\u4e8eiOS 17\u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u4f46\u5bf9\u4e8e\u65e9\u671f\u7248\u672c\uff0c\u4ecd\u53ef\u4f7f\u7528\u65e7\u7684`os_log`\u3002\u914d\u7f6e\u65e5\u5fd7\u8bb0\u5f55\u5668\u65f6\uff0c\u4e60\u60ef\u4e0a\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u6807\u8bc6\u7b26\u4f5c\u4e3a\u5b50\u7cfb\u7edf\uff0c\u6a21\u5757\u540d\u4f5c\u4e3a\u7c7b\u522b\u3002\u6574\u4f53\u4e0a\uff0c\u8fd9\u4e9b\u6539\u8fdb\u4f7f\u5f97OSLog\u5728\u6280\u672f\u6587\u7ae0\u4e2d\u66f4\u52a0\u5b9e\u7528\u3002",authors:["swift"],tags:["Xcode","OSLog"]},r=void 0,c={permalink:"/blog/2023/07/29/why-you-should-use-oslog-in-2023",source:"@site/blog/2023-07-29-why-you-should-use-oslog-in-2023/index.md",title:"Xcode 15\uff1a2023\u5e74\u503c\u5f97\u4f7f\u7528\u7684 OSLog \u65b0\u7279\u6027",description:"\u57282023\u5e74\uff0cXcode 15\u5e26\u6765\u4e86\u65b0\u529f\u80fd\uff0c\u652f\u6301**\u7ed3\u6784\u5316\u65e5\u5fd7**\uff0c\u8ba9\u4f7f\u7528OSLog\u53d8\u5f97\u66f4\u52a0\u503c\u5f97\u63a8\u8350\u3002\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u7b5b\u9009\u529f\u80fd\u5728\u8c03\u8bd5\u63a7\u5236\u53f0\u4e2d\u53ea\u770b\u5230\u6765\u81ea\u81ea\u5df1\u5e94\u7528\u7a0b\u5e8f\u7684\u65e5\u5fd7\uff0c\u8fd8\u80fd\u9ad8\u4eae\u663e\u793a\u8b66\u544a\u548c\u9519\u8bef\u3002\u5bf9\u4e8e\u9700\u8981\u66f4\u591a\u4fe1\u606f\u7684\u60c5\u51b5\uff0c\u53ea\u9700\u6309\u4e00\u4e0b\u76f8\u5e94\u65e5\u5fd7\u884c\u5373\u53ef\u3002\u7136\u800c\uff0c\u9700\u8981\u6ce8\u610f\u7ed3\u6784\u5316\u65e5\u5fd7\u4ec5\u9002\u7528\u4e8eiOS 17\u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u4f46\u5bf9\u4e8e\u65e9\u671f\u7248\u672c\uff0c\u4ecd\u53ef\u4f7f\u7528\u65e7\u7684`os_log`\u3002\u914d\u7f6e\u65e5\u5fd7\u8bb0\u5f55\u5668\u65f6\uff0c\u4e60\u60ef\u4e0a\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u6807\u8bc6\u7b26\u4f5c\u4e3a\u5b50\u7cfb\u7edf\uff0c\u6a21\u5757\u540d\u4f5c\u4e3a\u7c7b\u522b\u3002\u6574\u4f53\u4e0a\uff0c\u8fd9\u4e9b\u6539\u8fdb\u4f7f\u5f97OSLog\u5728\u6280\u672f\u6587\u7ae0\u4e2d\u66f4\u52a0\u5b9e\u7528\u3002",date:"2023-07-29T00:00:00.000Z",tags:[{inline:!0,label:"Xcode",permalink:"/blog/tags/xcode"},{inline:!0,label:"OSLog",permalink:"/blog/tags/os-log"}],readingTime:3.835,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift",page:null}],frontMatter:{title:"Xcode 15\uff1a2023\u5e74\u503c\u5f97\u4f7f\u7528\u7684 OSLog \u65b0\u7279\u6027",description:"\u57282023\u5e74\uff0cXcode 15\u5e26\u6765\u4e86\u65b0\u529f\u80fd\uff0c\u652f\u6301**\u7ed3\u6784\u5316\u65e5\u5fd7**\uff0c\u8ba9\u4f7f\u7528OSLog\u53d8\u5f97\u66f4\u52a0\u503c\u5f97\u63a8\u8350\u3002\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u7b5b\u9009\u529f\u80fd\u5728\u8c03\u8bd5\u63a7\u5236\u53f0\u4e2d\u53ea\u770b\u5230\u6765\u81ea\u81ea\u5df1\u5e94\u7528\u7a0b\u5e8f\u7684\u65e5\u5fd7\uff0c\u8fd8\u80fd\u9ad8\u4eae\u663e\u793a\u8b66\u544a\u548c\u9519\u8bef\u3002\u5bf9\u4e8e\u9700\u8981\u66f4\u591a\u4fe1\u606f\u7684\u60c5\u51b5\uff0c\u53ea\u9700\u6309\u4e00\u4e0b\u76f8\u5e94\u65e5\u5fd7\u884c\u5373\u53ef\u3002\u7136\u800c\uff0c\u9700\u8981\u6ce8\u610f\u7ed3\u6784\u5316\u65e5\u5fd7\u4ec5\u9002\u7528\u4e8eiOS 17\u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u4f46\u5bf9\u4e8e\u65e9\u671f\u7248\u672c\uff0c\u4ecd\u53ef\u4f7f\u7528\u65e7\u7684`os_log`\u3002\u914d\u7f6e\u65e5\u5fd7\u8bb0\u5f55\u5668\u65f6\uff0c\u4e60\u60ef\u4e0a\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u6807\u8bc6\u7b26\u4f5c\u4e3a\u5b50\u7cfb\u7edf\uff0c\u6a21\u5757\u540d\u4f5c\u4e3a\u7c7b\u522b\u3002\u6574\u4f53\u4e0a\uff0c\u8fd9\u4e9b\u6539\u8fdb\u4f7f\u5f97OSLog\u5728\u6280\u672f\u6587\u7ae0\u4e2d\u66f4\u52a0\u5b9e\u7528\u3002",authors:["swift"],tags:["Xcode","OSLog"]},unlisted:!1,prevItem:{title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u8bf7\u6c42\u7528\u6237\u5bf9\u60a8\u7684\u5e94\u7528\u8fdb\u884c\u8bc4\u4ef7",permalink:"/blog/2023/11/04/how-to-request-users-to-review-app-in-swiftui"},nextItem:{title:"Swift \u4e2d\u6b63\u786e\u5224\u65ad\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u7a7a\u7684\u65b9\u6cd5",permalink:"/blog/2023/07/19/bad-practice-testing-if-a-string-is-empty"}},l={authorsImageUrls:[void 0]},a=[];function g(o){const e={code:"code",p:"p",strong:"strong",...(0,s.R)(),...o.components};return(0,n.jsxs)(e.p,{children:["\u5728 2023 \u5e74\uff0cXcode 15 \u5e26\u6765\u4e86\u65b0\u529f\u80fd\uff0c\u652f\u6301",(0,n.jsx)(e.strong,{children:"\u7ed3\u6784\u5316\u65e5\u5fd7"}),"\uff0c\u8ba9\u4f7f\u7528 OSLog \u53d8\u5f97\u66f4\u52a0\u503c\u5f97\u63a8\u8350\u3002\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u7b5b\u9009\u529f\u80fd\u5728\u8c03\u8bd5\u63a7\u5236\u53f0\u4e2d\u53ea\u770b\u5230\u6765\u81ea\u81ea\u5df1\u5e94\u7528\u7a0b\u5e8f\u7684\u65e5\u5fd7\uff0c\u8fd8\u80fd\u9ad8\u4eae\u663e\u793a\u8b66\u544a\u548c\u9519\u8bef\u3002\u5bf9\u4e8e\u9700\u8981\u66f4\u591a\u4fe1\u606f\u7684\u60c5\u51b5\uff0c\u53ea\u9700\u6309\u4e00\u4e0b\u76f8\u5e94\u65e5\u5fd7\u884c\u5373\u53ef\u3002\u7136\u800c\uff0c\u9700\u8981\u6ce8\u610f\u7ed3\u6784\u5316\u65e5\u5fd7\u4ec5\u9002\u7528\u4e8e iOS 17 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u4f46\u5bf9\u4e8e\u65e9\u671f\u7248\u672c\uff0c\u4ecd\u53ef\u4f7f\u7528\u65e7\u7684",(0,n.jsx)(e.code,{children:"os_log"}),"\u3002\u914d\u7f6e\u65e5\u5fd7\u8bb0\u5f55\u5668\u65f6\uff0c\u4e60\u60ef\u4e0a\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u6807\u8bc6\u7b26\u4f5c\u4e3a\u5b50\u7cfb\u7edf\uff0c\u6a21\u5757\u540d\u4f5c\u4e3a\u7c7b\u522b\u3002\u6574\u4f53\u4e0a\uff0c\u8fd9\u4e9b\u6539\u8fdb\u4f7f\u5f97 OSLog \u5728\u6280\u672f\u6587\u7ae0\u4e2d\u66f4\u52a0\u5b9e\u7528\u3002"]})}function u(o={}){const{wrapper:e}={...(0,s.R)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(g,{...o})}):g(o)}},5296:(o,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var n=t(758);const s={},i=n.createContext(s);function r(o){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function c(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:r(o.components),n.createElement(i.Provider,{value:e},o.children)}}}]);