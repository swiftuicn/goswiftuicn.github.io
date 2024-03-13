"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3885],{8980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=n(5893),c=n(1151);const i={title:"iOS APP \u5982\u4f55\u8f7b\u677e\u6d4b\u8bd5\u5e94\u7528\u5185\u8d2d\u4e70(IAP)",description:"\u5982\u679c\u4f60\u66fe\u7ecf\u4f7f\u7528\u8fc7\u4f9d\u8d56\u4e8e\u5e94\u7528\u5185\u8d2d\u4e70\uff08\u6211\u5c06\u5176\u7f29\u5199\u4e3a IAP\uff09\u7684 iOS \u5e94\u7528\u7a0b\u5e8f\uff0c\u4f60\u53ef\u80fd\u5df2\u7ecf\u4f53\u9a8c\u8fc7\u5f7b\u5e95\u6d4b\u8bd5\u4f60\u7684 IAP \u662f\u5426\u6b63\u5e38\u5de5\u4f5c\u662f\u591a\u4e48\u5177\u6709\u6311\u6218\u6027\u3002",authors:["swift"],tags:["StoreKit","iOS","IAP"]},r=void 0,o={permalink:"/blog/2024/03/05/how-to-easily-test-in-app-purchases",source:"@site/blog/2024-03-05-how-to-easily-test-in-app-purchases/index.md",title:"iOS APP \u5982\u4f55\u8f7b\u677e\u6d4b\u8bd5\u5e94\u7528\u5185\u8d2d\u4e70(IAP)",description:"\u5982\u679c\u4f60\u66fe\u7ecf\u4f7f\u7528\u8fc7\u4f9d\u8d56\u4e8e\u5e94\u7528\u5185\u8d2d\u4e70\uff08\u6211\u5c06\u5176\u7f29\u5199\u4e3a IAP\uff09\u7684 iOS \u5e94\u7528\u7a0b\u5e8f\uff0c\u4f60\u53ef\u80fd\u5df2\u7ecf\u4f53\u9a8c\u8fc7\u5f7b\u5e95\u6d4b\u8bd5\u4f60\u7684 IAP \u662f\u5426\u6b63\u5e38\u5de5\u4f5c\u662f\u591a\u4e48\u5177\u6709\u6311\u6218\u6027\u3002",date:"2024-03-05T00:00:00.000Z",formattedDate:"2024\u5e743\u67085\u65e5",tags:[{label:"StoreKit",permalink:"/blog/tags/store-kit"},{label:"iOS",permalink:"/blog/tags/i-os"},{label:"IAP",permalink:"/blog/tags/iap"}],readingTime:5.835,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"iOS APP \u5982\u4f55\u8f7b\u677e\u6d4b\u8bd5\u5e94\u7528\u5185\u8d2d\u4e70(IAP)",description:"\u5982\u679c\u4f60\u66fe\u7ecf\u4f7f\u7528\u8fc7\u4f9d\u8d56\u4e8e\u5e94\u7528\u5185\u8d2d\u4e70\uff08\u6211\u5c06\u5176\u7f29\u5199\u4e3a IAP\uff09\u7684 iOS \u5e94\u7528\u7a0b\u5e8f\uff0c\u4f60\u53ef\u80fd\u5df2\u7ecf\u4f53\u9a8c\u8fc7\u5f7b\u5e95\u6d4b\u8bd5\u4f60\u7684 IAP \u662f\u5426\u6b63\u5e38\u5de5\u4f5c\u662f\u591a\u4e48\u5177\u6709\u6311\u6218\u6027\u3002",authors:["swift"],tags:["StoreKit","iOS","IAP"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528\u9ad8\u7ea7\u63cf\u8ff0\u5728 Swift \u4e2d\u5b9a\u4e49\u81ea\u5b9a\u4e49\u9519\u8bef",permalink:"/blog/2024/03/06/defining-custom-errors-with-advanced-descriptions-in-swift"},nextItem:{title:"\u5982\u4f55\u5728 SwiftUI \u4e2d\u5ef6\u8fdf\u52a8\u753b",permalink:"/blog/2024/03/04/delay-swiftui-animation"}},d={authorsImageUrls:[void 0]},a=[{value:"<strong>\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981 StoreKit \u914d\u7f6e\u6587\u4ef6\uff1f</strong>",id:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981-storekit-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"<strong>\u5982\u4f55\u8bbe\u7f6e StoreKit \u914d\u7f6e\u6587\u4ef6</strong>",id:"\u5982\u4f55\u8bbe\u7f6e-storekit-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"<strong>StoreKit \u914d\u7f6e\u6587\u4ef6\u8fd8\u80fd\u505a\u4ec0\u4e48\uff1f</strong>",id:"storekit-\u914d\u7f6e\u6587\u4ef6\u8fd8\u80fd\u505a\u4ec0\u4e48",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"\u5982\u679c\u4f60\u66fe\u7ecf\u4f7f\u7528\u8fc7\u4f9d\u8d56\u4e8e\u5e94\u7528\u5185\u8d2d\u4e70\uff08\u6211\u5c06\u5176\u7f29\u5199\u4e3a IAP\uff09\u7684 iOS \u5e94\u7528\u7a0b\u5e8f\uff0c\u4f60\u53ef\u80fd\u5df2\u7ecf\u4f53\u9a8c\u8fc7\u5f7b\u5e95\u6d4b\u8bd5\u4f60\u7684 IAP \u662f\u5426\u6b63\u5e38\u5de5\u4f5c\u662f\u591a\u4e48\u5177\u6709\u6311\u6218\u6027\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u8fd9\u662f\u56e0\u4e3a IAP \u5904\u4e8e\u4e00\u4e2a\u7279\u522b\u56f0\u96be\u7684\u4ea4\u53c9\u70b9\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u4e00\u65b9\u9762\uff0c\u56f4\u7ed5 IAP \u7684\u7528\u6237\u6d41\u7a0b\u53ef\u80fd\u4f1a\u5f88\u5feb\u53d8\u5f97\u590d\u6742\uff1a\u6062\u590d\u8d2d\u4e70\u3001\u4ece\u4e00\u4e2a\u8ba1\u5212\u5347\u7ea7\u6216\u964d\u7ea7\u5230\u53e6\u4e00\u4e2a\u8ba1\u5212\u3001\u8ba2\u9605\u4ef7\u683c\u4e0a\u6da8\u901a\u77e5\u7b49\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u53e6\u4e00\u65b9\u9762\uff0cIAP \u901a\u5e38\u662f\u4f7f\u7528\u5b83\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u6536\u5165\u6765\u6e90\uff0c\u56e0\u6b64\u751f\u4ea7\u4e2d\u7684 IAP \u635f\u574f\u53ef\u80fd\u4f1a\u5bf9\u5e94\u7528\u7a0b\u5e8f\u80cc\u540e\u7684\u516c\u53f8\u4ea7\u751f\u975e\u5e38\u4e25\u91cd\u7684\u540e\u679c"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u7136\u800c\uff0c\u82f9\u679c\u4f3c\u4e4e\u6ce8\u610f\u5230\u8fd9\u6b63\u5728\u6210\u4e3a\u4e00\u4e2a\u95ee\u9898\uff0c\u56e0\u4e3a\u51e0\u5e74\u524d\u4ed6\u4eec\u5728 Xcode \u4e2d\u5f15\u5165\u4e86\u4e00\u9879\u65b0\u529f\u80fd\uff0c\u4f7f\u6d4b\u8bd5 IAP \u6bd4\u4ee5\u524d\u66f4\u5bb9\u6613\uff1a",(0,s.jsx)(t.strong,{children:"StoreKit \u914d\u7f6e\u6587\u4ef6"}),"\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981-storekit-\u914d\u7f6e\u6587\u4ef6",children:(0,s.jsx)(t.strong,{children:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981 StoreKit \u914d\u7f6e\u6587\u4ef6\uff1f"})}),"\n",(0,s.jsxs)(t.p,{children:["\u8ba9\u6211\u4eec\u8003\u8651\u8fd9\u4e2a\u53ea\u663e\u793a\u6b64 ",(0,s.jsx)(t.code,{children:"**View**"})," \u7684\u7b80\u5355 iOS \u5e94\u7528\u7a0b\u5e8f\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/35d1762e-f0c2-43c8-9e77-ee1f75125c8e/Screenshot%2B2024-02-18%2Bat%2B15.38.44.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["\u5982\u4f60\u6240\u89c1\uff0c\u6b64 ",(0,s.jsx)(t.code,{children:"**View**"})," \u5c1d\u8bd5\u4f7f\u7528\u5176 ",(0,s.jsx)(t.code,{children:"**productIds**"})," \u4ece ",(0,s.jsx)(t.code,{children:"**StoreKit**"})," \u52a0\u8f7d\u4e09\u4e2a\u4ea7\u54c1\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5f53 ",(0,s.jsx)(t.code,{children:"**Product**"})," \u6210\u529f\u52a0\u8f7d\u65f6\uff0c",(0,s.jsx)(t.code,{children:"**View**"})," \u5c06\u663e\u793a\u4e00\u4e2a ",(0,s.jsx)(t.code,{children:"**Button**"}),"\uff0c\u5141\u8bb8\u7528\u6237\u8d2d\u4e70\u8be5 ",(0,s.jsx)(t.code,{children:"**Product**"}),"\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u4f46\u662f\uff0c\u5982\u679c\u4f60\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u6b64\u4ee3\u7801\uff0c\u4f60\u4f1a\u6ce8\u610f\u5230\u4f3c\u4e4e\u6ca1\u6709\u4e00\u4e2a\u4ea7\u54c1\u6210\u529f\u52a0\u8f7d\uff1a"}),"\n",(0,s.jsxs)(t.p,{children:["\u8fd9\u5b9e\u9645\u4e0a\u662f\u5b8c\u5168\u6b63\u5e38\u7684\uff1a\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u8fd8\u6ca1\u6709\u5728 App Store Connect \u4e2d\u914d\u7f6e\u4efb\u4f55\u53ef\u8d2d\u4e70\u7684 ",(0,s.jsx)(t.code,{children:"**Product**"}),"\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u4f46\u6211\u4eec\u5c06\u770b\u5230\uff0c\u591a\u4e8f\u4e86 StoreKit \u914d\u7f6e\u6587\u4ef6\uff0c\u5b9e\u9645\u4e0a\u53ef\u4ee5\u5728\u672c\u5730\u6d4b\u8bd5\u6b64\u8d2d\u4e70\u6d41\u7a0b\uff0c\u800c\u65e0\u9700\u5728 App Store Connect \u4e0a\u8fdb\u884c\u4efb\u4f55\u66f4\u6539\uff01"}),"\n",(0,s.jsx)(t.h3,{id:"\u5982\u4f55\u8bbe\u7f6e-storekit-\u914d\u7f6e\u6587\u4ef6",children:(0,s.jsx)(t.strong,{children:"\u5982\u4f55\u8bbe\u7f6e StoreKit \u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,s.jsxs)(t.p,{children:["\u8981\u5728 Xcode \u4e2d\u521b\u5efa StoreKit \u914d\u7f6e\u6587\u4ef6\uff0c\u53ea\u9700\u5728\u83dc\u5355\u4e2d\u5355\u51fb ",(0,s.jsx)(t.em,{children:"\u6587\u4ef6 > \u65b0\u5efa > \u6587\u4ef6\u2026"}),"\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u4ece\u4e2d\uff0c\u786e\u4fdd\u9009\u62e9\u9009\u9879 ",(0,s.jsx)(t.em,{children:"StoreKit \u914d\u7f6e\u6587\u4ef6"}),"\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/e1adcd77-271f-4649-88c9-17dbba964ad8/Screenshot%2B2024-02-18%2Bat%2B15.49.39.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["\u7136\u540e\uff0c\u4f60\u53ea\u9700\u4e3a\u4f60\u7684 ",(0,s.jsx)(t.em,{children:"StoreKit \u914d\u7f6e\u6587\u4ef6"})," \u547d\u540d\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/b3aaabae-8c86-41fa-9d0b-0aaec6e6cf09/Screenshot%2B2024-02-18%2Bat%2B15.50.35.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u5df2\u7ecf\u5728 App Store Connect \u4e2d\u8bbe\u7f6e\u4e86 IAP\uff0c\u5f3a\u70c8\u5efa\u8bae\u9009\u4e2d ",(0,s.jsx)(t.em,{children:"\u5c06\u6b64\u6587\u4ef6\u4e0e App Store Connect \u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f\u540c\u6b65"}),"\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0cStoreKit \u914d\u7f6e\u6587\u4ef6\u5c06\u81ea\u52a8\u751f\u6210\u5e76\u4e0e\u6765\u81ea App Store Connect \u7684\u51c6\u786e\u6570\u636e\u4fdd\u6301\u540c\u6b65 \ud83d\udc4c"}),"\n",(0,s.jsx)(t.p,{children:"\u4f46\u662f\uff0c\u51fa\u4e8e\u6b64\u7535\u5b50\u90ae\u4ef6\u7684\u76ee\u7684\uff0c\u6211\u4eec\u5c06\u624b\u52a8\u521b\u5efa StoreKit \u914d\u7f6e\u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u66f4\u8f7b\u677e\u5730\u7406\u89e3\u5176\u5de5\u4f5c\u539f\u7406\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u6240\u4ee5\u8ba9\u6211\u4eec\u6253\u5f00\u8fd9\u4e2a\u65b0\u7684 StoreKit \u914d\u7f6e\u6587\u4ef6\uff01"}),"\n",(0,s.jsxs)(t.p,{children:["\u8be5\u6587\u4ef6\u5f53\u524d\u4e3a\u7a7a\uff0c\u56e0\u6b64\u8ba9\u6211\u4eec\u6309\u7167\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u5e76 ",(0,s.jsx)(t.em,{children:"\u5355\u51fb\u201c+\u201d\u6309\u94ae\u4ee5\u6dfb\u52a0\u5e94\u7528\u5185\u8d2d\u4e70\u6216\u8ba2\u9605"}),"\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/feab6893-b88d-459d-bd6b-f22fedba62cd/Screenshot%2B2024-02-18%2Bat%2B16.24.28.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["\u6211\u4eec\u5c06\u9009\u62e9 ",(0,s.jsx)(t.em,{children:"\u6dfb\u52a0\u4e0d\u53ef\u6d88\u8017\u7684\u5e94\u7528\u5185\u8d2d\u4e70"}),"\uff0c\u56e0\u4e3a\u8fd9\u662f\u6700\u5bb9\u6613\u8bbe\u7f6e\u7684\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u7136\u540e\u7cfb\u7edf\u4f1a\u8981\u6c42\u6211\u4eec\u8bbe\u7f6e ",(0,s.jsx)(t.em,{children:"\u53c2\u8003\u540d\u79f0"})," \u548c ",(0,s.jsx)(t.em,{children:"\u4ea7\u54c1 ID"}),"\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/f1ae7322-da75-403d-a171-fc2ad690c68c/Screenshot%2B2024-02-18%2Bat%2B15.58.15.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u6b64\u5904\uff0c\u786e\u4fdd\u4f60\u4f7f\u7528\u4e0e\u5728\u4ee3\u7801\u4e2d\u8bbe\u7f6e\u7684\u76f8\u540c\u7684 ",(0,s.jsx)(t.em,{children:"\u4ea7\u54c1 ID"}),"\uff01"]}),"\n",(0,s.jsxs)(t.p,{children:["\u6211\u4eec\u51e0\u4e4e\u5b8c\u6210\u4e86\uff0c\u6211\u4eec\u6700\u540e\u9700\u8981\u505a\u7684\u662f\u5b9a\u4e49\u4e00\u4e9b\u672c\u5730\u5316\u7684 ",(0,s.jsx)(t.em,{children:"\u663e\u793a\u540d\u79f0"})," \u548c ",(0,s.jsx)(t.em,{children:"\u63cf\u8ff0"}),"\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/b424eec3-56a3-41e0-aa26-651629f4bfaf/Screenshot%2B2024-02-18%2Bat%2B16.00.26.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/5f7c3441-86a7-4ef7-b853-a78d1657a0b7/Screenshot%2B2024-02-18%2Bat%2B16.01.03.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["\uff08\u4e0d\u8981\u8df3\u8fc7\u8bbe\u7f6e\u672c\u5730\u5316\u7684 ",(0,s.jsx)(t.em,{children:"\u663e\u793a\u540d\u79f0"})," \u548c ",(0,s.jsx)(t.em,{children:"\u63cf\u8ff0"}),"\uff0c\u5426\u5219\u4f60\u7684 IAP \u5c06\u4e0d\u4f1a\u663e\u793a\uff01\uff09"]}),"\n",(0,s.jsx)(t.p,{children:"\u5982\u679c\u4f60\u613f\u610f\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4fee\u6539\u8d2d\u4e70\u65f6\u663e\u793a\u7684\u4ef7\u683c\uff1a"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/1e8e8e25-d2b1-4f67-894c-c461d527fa78/Screenshot%2B2024-02-18%2Bat%2B16.25.24.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"\u73b0\u5728\u6211\u4eec\u51e0\u4e4e\u51c6\u5907\u597d\u4f7f\u7528\u6211\u4eec\u7684\u65b0 StoreKit \u914d\u7f6e\u6587\u4ef6\u4e86\uff01"}),"\n",(0,s.jsx)(t.p,{children:"\u53ea\u5269\u4e00\u6b65\uff1a\u6211\u4eec\u9700\u8981\u8ba9 Xcode \u77e5\u9053\u5728\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u65f6\u5e94\u8be5\u4f7f\u7528\u8be5\u6587\u4ef6\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u7531\u4e8e\u5b83\u5df2\u7ecf\u9002\u7528\u4e8e\u8bb8\u591a\u5176\u4ed6\u8fd0\u884c\u65f6\u9009\u9879\uff0c\u56e0\u6b64\u8fd9\u662f\u901a\u8fc7\u9879\u76ee\u7684 ",(0,s.jsx)(t.em,{children:"\u65b9\u6848"})," \u914d\u7f6e\u7684\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u56e0\u6b64\uff0c\u5355\u51fb\u5f53\u524d ",(0,s.jsx)(t.em,{children:"\u65b9\u6848"})," \u5e76\u9009\u62e9 ",(0,s.jsx)(t.em,{children:"\u7f16\u8f91\u65b9\u6848\u2026"}),"\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/00d5abd6-a78a-45f4-b607-5d6bfd98f893/Screenshot%2B2024-02-18%2Bat%2B16.05.06.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"\u7136\u540e\u53ea\u9700\u9009\u62e9\u4f60\u521a\u521a\u521b\u5efa\u7684 StoreKit \u914d\u7f6e\u6587\u4ef6\uff1a"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/a93d7023-c81f-4be0-a2a5-a1d27f2b7de1/Screenshot%2B2024-02-18%2Bat%2B16.05.25.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["\u73b0\u5728\uff0c\u5982\u679c\u4f60\u5728\u6a21\u62df\u5668\u4e2d\u518d\u6b21\u8fd0\u884c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f60\u5c06\u770b\u5230\u6211\u4eec\u5728 StoreKit \u914d\u7f6e\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684 ",(0,s.jsx)(t.code,{children:"**Product**"})," \u73b0\u5728\u5df2\u6210\u529f\u52a0\u8f7d\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u66f4\u597d\u7684\u662f\uff1a\u4f60\u8fd8\u53ef\u4ee5\u8d2d\u4e70\u5b83\uff01"}),"\n",(0,s.jsx)(t.h3,{id:"storekit-\u914d\u7f6e\u6587\u4ef6\u8fd8\u80fd\u505a\u4ec0\u4e48",children:(0,s.jsx)(t.strong,{children:"StoreKit \u914d\u7f6e\u6587\u4ef6\u8fd8\u80fd\u505a\u4ec0\u4e48\uff1f"})}),"\n",(0,s.jsxs)(t.p,{children:["\u80fd\u591f\u5728\u672c\u5730\u6a21\u62df\u8d2d\u4e70 ",(0,s.jsx)(t.strong,{children:"StoreKit"})," ",(0,s.jsx)(t.strong,{children:"Product"})," \u5df2\u7ecf\u975e\u5e38\u6709\u7528\uff0c\u4f46 StoreKit \u914d\u7f6e\u6587\u4ef6\u5b9e\u9645\u4e0a\u80fd\u591f\u505a\u66f4\u591a\u7684\u4e8b\u60c5\uff01"]}),"\n",(0,s.jsx)(t.p,{children:"\u4f60\u8fd8\u53ef\u4ee5\u5229\u7528\u8be5\u6587\u4ef6\u6765\u6a21\u62df\u548c\u6d4b\u8bd5\u4e00\u4e9b\u975e\u5e38\u68d8\u624b\u7684\u8fb9\u7f18\u60c5\u51b5\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"App Store Connect \u53d1\u884c\u7684\u9000\u6b3e"}),"\n",(0,s.jsx)(t.li,{children:"\u7528\u6237\u6536\u5230\u8ba2\u9605\u4ef7\u683c\u4e0a\u6da8\u7684\u901a\u77e5"}),"\n",(0,s.jsx)(t.li,{children:"\u542f\u7528\u6216\u7981\u7528\u5bb6\u5ead\u5171\u4eab"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u6709\u5173\u4f7f\u7528 StoreKit \u914d\u7f6e\u6587\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u4f60\u53ef\u4ee5\u9605\u8bfb ",(0,s.jsx)(t.a,{href:"https://developer.apple.com/documentation/xcode/setting-up-storekit-testing-in-xcode/",children:"Apple \u7684\u5b98\u65b9\u6587\u6863"})," \u6216\u4f60\u53ef\u4ee5 ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=o_YMsmmkfFc",children:"\u89c2\u770b\u6211\u53bb\u5e74\u53d1\u5e03\u7684\u8fd9\u6bb5\u89c6\u9891"}),"\uff1a"]}),"\n",(0,s.jsxs)(t.p,{children:["\u6b64\u5916\uff0c\u5982\u679c\u4f60\u60f3\u4f7f\u7528 StoreKit \u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u5b9e\u9a8c\uff0c\u6211\u4f7f\u7528\u7684 iOS \u5e94\u7528\u7a0b\u5e8f\u7684\u4ee3\u7801 ",(0,s.jsx)(t.a,{href:"https://github.com/joshdholtz/storekit-config-file-demo",children:"\u53ef\u5728 GitHub \u4e0a\u83b7\u5f97"})," \ud83d\udc4c"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u539f\u6587(\u82f1\u6587)\uff1a",(0,s.jsx)(t.a,{href:"https://www.swiftwithvincent.com/blog/how-to-easily-test-in-app-purchases",children:"https://www.swiftwithvincent.com/blog/how-to-easily-test-in-app-purchases"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(7294);const c={},i=s.createContext(c);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);