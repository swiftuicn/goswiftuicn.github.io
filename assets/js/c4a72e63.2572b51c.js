"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1813],{2547:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>g,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var i=o(5893),s=o(1151);const t={title:"Xcode 15\uff1a2023\u5e74\u503c\u5f97\u4f7f\u7528\u7684 OSLog \u65b0\u7279\u6027",description:"\u57282023\u5e74\uff0cXcode 15\u5e26\u6765\u4e86\u65b0\u529f\u80fd\uff0c\u652f\u6301**\u7ed3\u6784\u5316\u65e5\u5fd7**\uff0c\u8ba9\u4f7f\u7528OSLog\u53d8\u5f97\u66f4\u52a0\u503c\u5f97\u63a8\u8350\u3002\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u7b5b\u9009\u529f\u80fd\u5728\u8c03\u8bd5\u63a7\u5236\u53f0\u4e2d\u53ea\u770b\u5230\u6765\u81ea\u81ea\u5df1\u5e94\u7528\u7a0b\u5e8f\u7684\u65e5\u5fd7\uff0c\u8fd8\u80fd\u9ad8\u4eae\u663e\u793a\u8b66\u544a\u548c\u9519\u8bef\u3002\u5bf9\u4e8e\u9700\u8981\u66f4\u591a\u4fe1\u606f\u7684\u60c5\u51b5\uff0c\u53ea\u9700\u6309\u4e00\u4e0b\u76f8\u5e94\u65e5\u5fd7\u884c\u5373\u53ef\u3002\u7136\u800c\uff0c\u9700\u8981\u6ce8\u610f\u7ed3\u6784\u5316\u65e5\u5fd7\u4ec5\u9002\u7528\u4e8eiOS 17\u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u4f46\u5bf9\u4e8e\u65e9\u671f\u7248\u672c\uff0c\u4ecd\u53ef\u4f7f\u7528\u65e7\u7684`os_log`\u3002\u914d\u7f6e\u65e5\u5fd7\u8bb0\u5f55\u5668\u65f6\uff0c\u4e60\u60ef\u4e0a\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u6807\u8bc6\u7b26\u4f5c\u4e3a\u5b50\u7cfb\u7edf\uff0c\u6a21\u5757\u540d\u4f5c\u4e3a\u7c7b\u522b\u3002\u6574\u4f53\u4e0a\uff0c\u8fd9\u4e9b\u6539\u8fdb\u4f7f\u5f97OSLog\u5728\u6280\u672f\u6587\u7ae0\u4e2d\u66f4\u52a0\u5b9e\u7528\u3002",authors:["swift"],tags:["Xcode","OSLog"]},l="\u4e3a\u4ec0\u4e48\u4f60\u5e94\u8be5\u5728 2023 \u5e74\u5f00\u59cb\u4f7f\u7528 OSLog",c={permalink:"/blog/2023/07/29/why-you-should-use-oslog-in-2023",source:"@site/blog/2023-07-29-why-you-should-use-oslog-in-2023/index.md",title:"Xcode 15\uff1a2023\u5e74\u503c\u5f97\u4f7f\u7528\u7684 OSLog \u65b0\u7279\u6027",description:"\u57282023\u5e74\uff0cXcode 15\u5e26\u6765\u4e86\u65b0\u529f\u80fd\uff0c\u652f\u6301**\u7ed3\u6784\u5316\u65e5\u5fd7**\uff0c\u8ba9\u4f7f\u7528OSLog\u53d8\u5f97\u66f4\u52a0\u503c\u5f97\u63a8\u8350\u3002\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u7b5b\u9009\u529f\u80fd\u5728\u8c03\u8bd5\u63a7\u5236\u53f0\u4e2d\u53ea\u770b\u5230\u6765\u81ea\u81ea\u5df1\u5e94\u7528\u7a0b\u5e8f\u7684\u65e5\u5fd7\uff0c\u8fd8\u80fd\u9ad8\u4eae\u663e\u793a\u8b66\u544a\u548c\u9519\u8bef\u3002\u5bf9\u4e8e\u9700\u8981\u66f4\u591a\u4fe1\u606f\u7684\u60c5\u51b5\uff0c\u53ea\u9700\u6309\u4e00\u4e0b\u76f8\u5e94\u65e5\u5fd7\u884c\u5373\u53ef\u3002\u7136\u800c\uff0c\u9700\u8981\u6ce8\u610f\u7ed3\u6784\u5316\u65e5\u5fd7\u4ec5\u9002\u7528\u4e8eiOS 17\u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u4f46\u5bf9\u4e8e\u65e9\u671f\u7248\u672c\uff0c\u4ecd\u53ef\u4f7f\u7528\u65e7\u7684`os_log`\u3002\u914d\u7f6e\u65e5\u5fd7\u8bb0\u5f55\u5668\u65f6\uff0c\u4e60\u60ef\u4e0a\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u6807\u8bc6\u7b26\u4f5c\u4e3a\u5b50\u7cfb\u7edf\uff0c\u6a21\u5757\u540d\u4f5c\u4e3a\u7c7b\u522b\u3002\u6574\u4f53\u4e0a\uff0c\u8fd9\u4e9b\u6539\u8fdb\u4f7f\u5f97OSLog\u5728\u6280\u672f\u6587\u7ae0\u4e2d\u66f4\u52a0\u5b9e\u7528\u3002",date:"2023-07-29T00:00:00.000Z",formattedDate:"2023\u5e747\u670829\u65e5",tags:[{label:"Xcode",permalink:"/blog/tags/xcode"},{label:"OSLog",permalink:"/blog/tags/os-log"}],readingTime:3.835,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"Xcode 15\uff1a2023\u5e74\u503c\u5f97\u4f7f\u7528\u7684 OSLog \u65b0\u7279\u6027",description:"\u57282023\u5e74\uff0cXcode 15\u5e26\u6765\u4e86\u65b0\u529f\u80fd\uff0c\u652f\u6301**\u7ed3\u6784\u5316\u65e5\u5fd7**\uff0c\u8ba9\u4f7f\u7528OSLog\u53d8\u5f97\u66f4\u52a0\u503c\u5f97\u63a8\u8350\u3002\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u7b5b\u9009\u529f\u80fd\u5728\u8c03\u8bd5\u63a7\u5236\u53f0\u4e2d\u53ea\u770b\u5230\u6765\u81ea\u81ea\u5df1\u5e94\u7528\u7a0b\u5e8f\u7684\u65e5\u5fd7\uff0c\u8fd8\u80fd\u9ad8\u4eae\u663e\u793a\u8b66\u544a\u548c\u9519\u8bef\u3002\u5bf9\u4e8e\u9700\u8981\u66f4\u591a\u4fe1\u606f\u7684\u60c5\u51b5\uff0c\u53ea\u9700\u6309\u4e00\u4e0b\u76f8\u5e94\u65e5\u5fd7\u884c\u5373\u53ef\u3002\u7136\u800c\uff0c\u9700\u8981\u6ce8\u610f\u7ed3\u6784\u5316\u65e5\u5fd7\u4ec5\u9002\u7528\u4e8eiOS 17\u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u4f46\u5bf9\u4e8e\u65e9\u671f\u7248\u672c\uff0c\u4ecd\u53ef\u4f7f\u7528\u65e7\u7684`os_log`\u3002\u914d\u7f6e\u65e5\u5fd7\u8bb0\u5f55\u5668\u65f6\uff0c\u4e60\u60ef\u4e0a\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u6807\u8bc6\u7b26\u4f5c\u4e3a\u5b50\u7cfb\u7edf\uff0c\u6a21\u5757\u540d\u4f5c\u4e3a\u7c7b\u522b\u3002\u6574\u4f53\u4e0a\uff0c\u8fd9\u4e9b\u6539\u8fdb\u4f7f\u5f97OSLog\u5728\u6280\u672f\u6587\u7ae0\u4e2d\u66f4\u52a0\u5b9e\u7528\u3002",authors:["swift"],tags:["Xcode","OSLog"]},unlisted:!1,prevItem:{title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u5173\u95ed\u952e\u76d8",permalink:"/blog/2023/11/04/dismiss-keyboard-in-swiftui"},nextItem:{title:"Swift \u4e2d\u6b63\u786e\u5224\u65ad\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u7a7a\u7684\u65b9\u6cd5",permalink:"/blog/2023/07/19/bad-practice-testing-if-a-string-is-empty"}},r={authorsImageUrls:[void 0]},a=[{value:"\u76ee\u524d\u65e5\u5fd7\u8bb0\u5f55\u5b58\u5728\u7684\u95ee\u9898",id:"\u76ee\u524d\u65e5\u5fd7\u8bb0\u5f55\u5b58\u5728\u7684\u95ee\u9898",level:2},{value:"Xcode 15 \u7684\u89e3\u51b3\u65b9\u6848",id:"xcode-15-\u7684\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u4ec5\u9002\u7528\u4e8e iOS 17",id:"\u4ec5\u9002\u7528\u4e8e-ios-17",level:2},{value:"\u5982\u4f55\u8bb0\u5f55\u65e5\u5fd7",id:"\u5982\u4f55\u8bb0\u5f55\u65e5\u5fd7",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u5728 2023 \u5e74\uff0cXcode 15 \u5e26\u6765\u4e86\u65b0\u529f\u80fd\uff0c\u652f\u6301",(0,i.jsx)(n.strong,{children:"\u7ed3\u6784\u5316\u65e5\u5fd7"}),"\uff0c\u8ba9\u4f7f\u7528 OSLog \u53d8\u5f97\u66f4\u52a0\u503c\u5f97\u63a8\u8350\u3002\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u7b5b\u9009\u529f\u80fd\u5728\u8c03\u8bd5\u63a7\u5236\u53f0\u4e2d\u53ea\u770b\u5230\u6765\u81ea\u81ea\u5df1\u5e94\u7528\u7a0b\u5e8f\u7684\u65e5\u5fd7\uff0c\u8fd8\u80fd\u9ad8\u4eae\u663e\u793a\u8b66\u544a\u548c\u9519\u8bef\u3002\u5bf9\u4e8e\u9700\u8981\u66f4\u591a\u4fe1\u606f\u7684\u60c5\u51b5\uff0c\u53ea\u9700\u6309\u4e00\u4e0b\u76f8\u5e94\u65e5\u5fd7\u884c\u5373\u53ef\u3002\u7136\u800c\uff0c\u9700\u8981\u6ce8\u610f\u7ed3\u6784\u5316\u65e5\u5fd7\u4ec5\u9002\u7528\u4e8e iOS 17 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u4f46\u5bf9\u4e8e\u65e9\u671f\u7248\u672c\uff0c\u4ecd\u53ef\u4f7f\u7528\u65e7\u7684",(0,i.jsx)(n.code,{children:"os_log"}),"\u3002\u914d\u7f6e\u65e5\u5fd7\u8bb0\u5f55\u5668\u65f6\uff0c\u4e60\u60ef\u4e0a\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u6807\u8bc6\u7b26\u4f5c\u4e3a\u5b50\u7cfb\u7edf\uff0c\u6a21\u5757\u540d\u4f5c\u4e3a\u7c7b\u522b\u3002\u6574\u4f53\u4e0a\uff0c\u8fd9\u4e9b\u6539\u8fdb\u4f7f\u5f97 OSLog \u5728\u6280\u672f\u6587\u7ae0\u4e2d\u66f4\u52a0\u5b9e\u7528\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"OSLog \u662f\u4e00\u4e2a\u957f\u671f\u53ef\u7528\u7684\u7edf\u4e00\u65e5\u5fd7\u6846\u67b6\uff0c\u4f46\u6211\u4e00\u76f4\u6ca1\u6709\u5927\u91cf\u91c7\u7528\u5b83\u3002\u4f46\u968f\u7740 WWDC 2023 \u7684\u65b0\u529f\u80fd\uff0c\u60c5\u51b5\u5373\u5c06\u53d1\u751f\u6539\u53d8\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["Xcode 15\uff08\u76ee\u524d\u4e3a\u6d4b\u8bd5\u7248\uff09\u5728\u8c03\u8bd5\u63a7\u5236\u53f0\u4e2d\u652f\u6301",(0,i.jsx)(n.strong,{children:"\u7ed3\u6784\u5316\u65e5\u5fd7"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u76ee\u524d\u65e5\u5fd7\u8bb0\u5f55\u5b58\u5728\u7684\u95ee\u9898",children:"\u76ee\u524d\u65e5\u5fd7\u8bb0\u5f55\u5b58\u5728\u7684\u95ee\u9898"}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d\uff0c\u6211\u7684 Xcode 14 \u8c03\u8bd5\u63a7\u5236\u53f0\u4e2d\u5145\u65a5\u7740\u592a\u591a\u65e5\u5fd7\uff0c\u6765\u81ea\u5176\u4ed6\u6846\u67b6\u751a\u81f3\u64cd\u4f5c\u7cfb\u7edf\u672c\u8eab\uff01"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"2023-07-25 14:39:38.819584+0800 MyApp[12:34] [WC] WCSession is not paired\n2023-07-25 14:39:38.819834+0800 MyApp[12:34] [WC] -[WCSession onqueue_handleUpdateSessionState:]_block_invoke dropping as pairingIDs no longer match. pairingID (null), client pairingID: (null)\n2023-07-25 14:39:38.997445+0800 MyApp[34:56] [MediaRemote] [ConcreteOutputContext] WARNING: AVF context unavailable for +[MRAVConcreteOutputContext sharedAudioPresentationContext]_block_invoke\n2023-07-25 14:39:49.499876+0800 MyApp[56:78] 9.6.0 - [FirebaseAnalytics][I-ACS023007] Analytics v.9.6.0 started\n2023-07-25 14:39:49.889278+0800 MyApp[56:78] 9.6.0 - [FirebaseAnalytics][I-ACS023008] To enable debug logging set the following application argument: -FIRAnalyticsDebugEnabled (see http://goo.gl/RfcP7r)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u592a\u591a\u7684\u566a\u97f3\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u5df2\u7ecf\u5c1d\u8bd5\u8fc7",(0,i.jsx)(n.a,{href:"https://samwize.com/2022/10/29/reduce-xcode-debugger-logs/",children:"\u5982\u4f55\u51cf\u5c11\u8c03\u8bd5\u65e5\u5fd7"}),"\uff0c\u4f46\u8fd9\u9700\u8981\u989d\u5916\u7684\u6b65\u9aa4\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"xcode-15-\u7684\u89e3\u51b3\u65b9\u6848",children:"Xcode 15 \u7684\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsx)(n.p,{children:"Xcode 15 \u6dfb\u52a0\u4e86\u7b5b\u9009\u529f\u80fd\uff0c\u56e0\u6b64\u6211\u53ef\u4ee5\u53ea\u770b\u5230\u6765\u81ea\u6211\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u65e5\u5fd7\uff08\u7b5b\u9009\u5b50\u7cfb\u7edf\uff09\u3002\u5b83\u751a\u81f3\u7528\u9ec4\u8272\u7a81\u51fa\u663e\u793a\u8b66\u544a\u548c\u7528\u7ea2\u8272\u7a81\u51fa\u663e\u793a\u9519\u8bef\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://samwize.com/images/xcode-15-logging-4.jpg",alt:"img"})}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u60a8\u4e5f\u53ef\u4ee5\u6309\u7c7b\u522b\u6216\u6d88\u606f\u8fdb\u884c\u7b5b\u9009\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u8fd8\u559c\u6b22\u5c06\u89c6\u56fe\u914d\u7f6e\u4e3a\u4e0d\u663e\u793a\u5176\u4ed6\u5143\u6570\u636e\uff0c\u4ee5\u4fbf\u6bcf\u4e2a\u65e5\u5fd7\u90fd\u53ea\u6709\u4e00\u884c\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://samwize.com/images/xcode-15-logging-config.png",alt:"img"})}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\uff0c\u5f53\u60a8\u5e0c\u671b\u67e5\u770b\u66f4\u591a\u4fe1\u606f\u65f6\uff0c\u53ef\u4ee5\u6309\u4e00\u4e0b\u884c\u4e0a\u7684\u7a7a\u683c\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://samwize.com/images/xcode-15-logging-3.jpg",alt:"img"})}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u751a\u81f3\u53ef\u4ee5\u4f7f\u7528 CMD + OPT + SHIFT + J \u8fdb\u884c",(0,i.jsx)(n.strong,{children:"\u8df3\u8f6c\u5230\u6e90\u4ee3\u7801"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5f88\u68d2\uff01"}),"\n",(0,i.jsx)(n.h2,{id:"\u4ec5\u9002\u7528\u4e8e-ios-17",children:"\u4ec5\u9002\u7528\u4e8e iOS 17"}),"\n",(0,i.jsxs)(n.p,{children:["\u5373\u4f7f\u60a8\u5728 Xcode 15 \u4e0a\u8fd0\u884c\uff0c\u9700\u8981\u6ce8\u610f\u7ed3\u6784\u5316\u65e5\u5fd7\u4ec5\u9002\u7528\u4e8e iOS 17\uff08\u6d4b\u8bd5\u7248\uff09\u3002\u5728 iOS 16 \u4e0a\u8fd0\u884c\u5c06\u50cf\u4f7f\u7528",(0,i.jsx)(n.em,{children:"print"}),"\u4e00\u6837\u663e\u793a\u65e5\u5fd7\u3002\u4e0d\u8fc7\uff0c\u60a8\u4ecd\u7136\u53ef\u4ee5\u6253\u5f00\u201cConsole\u201d\u5e94\u7528\u7a0b\u5e8f\u6765\u67e5\u770b\u5b83\u7684\u5b8c\u6574\u6548\u679c\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u53e6\u5916\uff0c",(0,i.jsx)(n.code,{children:"Logger"}),"\u7c7b\u5728 iOS 14 \u4e2d\u5f15\u5165\u3002\u5982\u679c\u60a8\u652f\u6301\u4efb\u4f55\u66f4\u65e9\u7684 iOS \u7248\u672c\uff0c\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u65e7\u7684",(0,i.jsx)(n.code,{children:"os_log"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5982\u4f55\u8bb0\u5f55\u65e5\u5fd7",children:"\u5982\u4f55\u8bb0\u5f55\u65e5\u5fd7"}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u5e38\uff0c\u6211\u4f1a\u5728\u6269\u5c55\u4e2d\u8bbe\u7f6e\u6240\u6709\u7684\u65e5\u5fd7\u8bb0\u5f55\u5668\u3002\u6309\u7167\u60ef\u4f8b\uff0c\u5b50\u7cfb\u7edf\u662f\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u6807\u8bc6\u7b26\uff0c\u800c\u7c7b\u522b\u662f\u60a8\u7684\u6a21\u5757\u540d\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'import OSLog\nextension Logger {\n    private static let appIdentifier = Bundle.main.bundleIdentifier ?? ""\n    static let main = Logger(subsystem: appIdentifier, category: "main")\n    static let camera = Logger(subsystem: appIdentifier, category: "camera")\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528\u65f6\uff0c\u60a8\u53ef\u4ee5\u7b80\u5355\u5730\u8c03\u7528",(0,i.jsx)(n.code,{children:"Logger.camera.info(...)"}),"\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u539f\u6587(\u82f1\u6587)\uff1a",(0,i.jsx)(n.a,{href:"https://samwize.com/2023/07/25/why-you-should-use-oslog-in-2023",children:"https://samwize.com/2023/07/25/why-you-should-use-oslog-in-2023"})]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>l});var i=o(7294);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);