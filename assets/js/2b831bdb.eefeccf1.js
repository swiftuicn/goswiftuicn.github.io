"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[398],{309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>p});var s=n(5893),i=n(1151);const c={title:"Swift \u4e2d\u6b63\u786e\u5224\u65ad\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u7a7a\u7684\u65b9\u6cd5",description:"\u3010Swift\u7f16\u7a0b\u6280\u5de7\u3011\u907f\u514d\u4f7f\u7528\u5b57\u7b26\u4e32\u8ba1\u6570(count)\u6765\u6d4b\u8bd5\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u7a7a\uff0c\u800c\u662f\u4f7f\u7528\u5185\u7f6e\u5c5e\u6027isEmpty\uff0c\u56e0\u4e3a\u8ba1\u6570\u65b9\u6cd5\u8017\u65f6\u4e14\u6548\u7387\u4f4e\u4e0b\u3002",authors:["swift"],tags:["isEmpty","Swift"]},a=void 0,r={permalink:"/blog/2023/07/19/bad-practice-testing-if-a-string-is-empty",source:"@site/blog/2023-07-19-bad-practice-testing-if-a-string-is-empty/index.md",title:"Swift \u4e2d\u6b63\u786e\u5224\u65ad\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u7a7a\u7684\u65b9\u6cd5",description:"\u3010Swift\u7f16\u7a0b\u6280\u5de7\u3011\u907f\u514d\u4f7f\u7528\u5b57\u7b26\u4e32\u8ba1\u6570(count)\u6765\u6d4b\u8bd5\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u7a7a\uff0c\u800c\u662f\u4f7f\u7528\u5185\u7f6e\u5c5e\u6027isEmpty\uff0c\u56e0\u4e3a\u8ba1\u6570\u65b9\u6cd5\u8017\u65f6\u4e14\u6548\u7387\u4f4e\u4e0b\u3002",date:"2023-07-19T00:00:00.000Z",formattedDate:"2023\u5e747\u670819\u65e5",tags:[{label:"isEmpty",permalink:"/blog/tags/is-empty"},{label:"Swift",permalink:"/blog/tags/swift"}],readingTime:2.07,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{title:"Swift \u4e2d\u6b63\u786e\u5224\u65ad\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u7a7a\u7684\u65b9\u6cd5",description:"\u3010Swift\u7f16\u7a0b\u6280\u5de7\u3011\u907f\u514d\u4f7f\u7528\u5b57\u7b26\u4e32\u8ba1\u6570(count)\u6765\u6d4b\u8bd5\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u7a7a\uff0c\u800c\u662f\u4f7f\u7528\u5185\u7f6e\u5c5e\u6027isEmpty\uff0c\u56e0\u4e3a\u8ba1\u6570\u65b9\u6cd5\u8017\u65f6\u4e14\u6548\u7387\u4f4e\u4e0b\u3002",authors:["swift"],tags:["isEmpty","Swift"]},unlisted:!1,prevItem:{title:"Xcode 15\uff1a2023\u5e74\u503c\u5f97\u4f7f\u7528\u7684 OSLog \u65b0\u7279\u6027",permalink:"/blog/2023/07/29/why-you-should-use-oslog-in-2023"},nextItem:{title:"Swift5.9 \u548c Xcode15 \u4e2d\u7684\u65b0\u529f\u80fd",permalink:"/blog/2023/06/8/new-features-in-Swift5.9-and-Xcode15"}},o={authorsImageUrls:[void 0]},p=[];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"\u8fd9\u6bb5\u4ee3\u7801\u770b\u8d77\u6765\u4f3c\u4e4e\u6ca1\u6709\u4ec0\u4e48\u95ee\u9898\uff0c\u5bf9\u5427\uff1f"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/a1591ad2-48f1-4362-9af2-253a7af06865/%E2%80%8EisEmpty+Images.%E2%80%8E001.png",alt:"img"})}),"\n",(0,s.jsx)(t.p,{children:"\u7136\u800c\uff0c\u5b9e\u9645\u4e0a\u5b83\u9690\u85cf\u4e86\u4e00\u4e2a\u76f8\u5f53\u4e25\u91cd\u7684\u95ee\u9898\uff01"}),"\n",(0,s.jsx)(t.p,{children:"\u73b0\u5728\u6211\u4eec\u6765\u7406\u89e3\u4e00\u4e0b\u8fd9\u4e2a\u95ee\u9898\u662f\u4ec0\u4e48\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u8fd9\u6bb5\u4ee3\u7801\u7684\u76ee\u7684\u975e\u5e38\u660e\u786e\uff1a\u6211\u4eec\u6b63\u5728\u68c0\u67e5",(0,s.jsx)(t.code,{children:"myString"}),"\u662f\u5426\u4e3a\u7a7a\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/3218110e-b97a-4674-a7ea-86ecd9fe5bb4/%E2%80%8EisEmpty+Images.%E2%80%8E002.png",alt:"img"})}),"\n",(0,s.jsxs)(t.p,{children:["\u4e8b\u5b9e\u8bc1\u660e\uff0cSwift \u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5185\u7f6e\u5c5e\u6027\u6765\u5b9e\u73b0\u8fd9\u4e2a\u76ee\u7684\uff0c\u53eb\u505a",(0,s.jsx)(t.code,{children:"isEmpty"}),"\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/2d11a02c-c486-49e6-b533-28a1915d60ae/%E2%80%8EisEmpty+Images.%E2%80%8E003.png",alt:"img"})}),"\n",(0,s.jsx)(t.p,{children:"\u800c\u8fd9\u79cd\u7b2c\u4e8c\u79cd\u65b9\u6cd5\u8981\u597d\u5f97\u591a\uff01"}),"\n",(0,s.jsx)(t.p,{children:"\u90a3\u4e48\u8fd9\u4e24\u79cd\u65b9\u6cd5\u6709\u4ec0\u4e48\u533a\u522b\u5462\uff1f"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/41944279-e6c5-4f02-b3d1-3bf5e09a53d8/%E2%80%8EisEmpty+Images.%E2%80%8E004.png",alt:"img"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5f53\u6211\u4eec\u8c03\u7528",(0,s.jsx)(t.code,{children:"isEmpty"}),"\u65f6\uff0c\u5728\u5e95\u5c42 Swift \u53ea\u9700\u8981\u68c0\u67e5\u5b57\u7b26\u4e32\u662f\u5426\u81f3\u5c11\u5305\u542b\u4e00\u4e2a\u5b57\u7b26\uff1a\u8fd9\u662f\u975e\u5e38\u5feb\u901f\u7684\u6267\u884c\u8fc7\u7a0b\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u800c\u4e14\u66f4\u597d\u7684\u662f\uff0c\u8fd9\u4e2a\u6267\u884c\u65f6\u95f4\u4e0d\u53d6\u51b3\u4e8e\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u53e6\u4e00\u65b9\u9762\uff0c\u5c5e\u6027",(0,s.jsx)(t.code,{children:"count"}),"\u7684\u5de5\u4f5c\u65b9\u5f0f\u975e\u5e38\u4e0d\u540c\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/76684b1c-445c-4793-a6b8-dfc4e904983b/%E2%80%8EisEmpty+Images.%E2%80%8E005.png",alt:"img"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"count"}),"\u5c06\u8fd4\u56de\u5b57\u7b26\u4e32\u4e2d\u53ef\u89c1\u5b57\u7b26\u7684\u6570\u91cf\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u7531\u4e8e\u4e00\u4e9b Unicode \u5b57\u7b26\u53ef\u4ee5\u7ec4\u5408\u6210\u4e00\u4e2a\u5355\u72ec\u7684\u53ef\u89c1\u5b57\u7b26\uff0c\u8fd9\u610f\u5473\u7740 count \u5fc5\u987b\u904d\u5386\u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709\u5b57\u7b26\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u56e0\u6b64\uff0c\u5982\u679c\u5b57\u7b26\u4e32\u5f88\u957f\uff0c\u6216\u8005\u6709\u5f88\u591a\u5b57\u7b26\u4e32\uff0c\u8fd9\u6bb5\u4ee3\u7801\u5c06\u9700\u8981\u5f88\u957f\u65f6\u95f4\u6765\u6267\u884c\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u8fd9\u5c31\u662f\u8fd9\u6bb5\u4ee3\u7801\u80cc\u540e\u7684\u5927\u95ee\u9898\uff01"}),"\n",(0,s.jsx)(t.p,{children:"\u6240\u4ee5\u8bb0\u4f4f\uff0c\u6bcf\u5f53\u4f60\u9700\u8981\u6d4b\u8bd5\u4e00\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u7a7a\u65f6\uff0c\u7edd\u5bf9\u4e0d\u8981\u624b\u52a8\u6d4b\u8bd5\u5b83\u7684 count \u662f\u5426\u5927\u4e8e\u96f6\uff0c\u56e0\u4e3a\u8fd9\u6837\u505a\u4f1a\u5f88\u6162\uff01"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://images.squarespace-cdn.com/content/v1/63139bb1e1a1a078e071f30c/21292c6f-0d67-4b4b-8d79-fd412b6c5dc7/isEmpty.gif",alt:"img"})}),"\n",(0,s.jsx)(t.p,{children:"\u8fd9\u7bc7\u6587\u7ae0\u5c31\u5230\u8fd9\u91cc\uff0c\u5e0c\u671b\u4f60\u559c\u6b22\u8fd9\u79cd\u65b0\u7684\u683c\u5f0f\uff01"}),"\n",(0,s.jsx)(t.p,{children:"\u5982\u679c\u4f60\u60f3\u8981\u5c1d\u8bd5\u8fd9\u6bb5\u4ee3\u7801\uff0c\u8fd9\u91cc\u662f\u5b83\u7684\u6837\u4f8b\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"if myString.count > 0 {\n    // `myString`\u4e0d\u4e3a\u7a7a\n}\n\nif myString.isEmpty == false {\n    // `myString`\u4e0d\u4e3a\u7a7a\n}\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u539f\u6587(\u82f1\u6587)\uff1a",(0,s.jsx)(t.a,{href:"https://www.swiftwithvincent.com/blog/bad-practice-testing-if-a-string-is-empty",children:"https://www.swiftwithvincent.com/blog/bad-practice-testing-if-a-string-is-empty"})]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(7294);const i={},c=s.createContext(i);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);