"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7141],{2618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=n(6070),s=n(5296);const o={title:"\u4fee\u590d iOS \u5c0f\u90e8\u4ef6\u4e2d\u6700\u5947\u602a\u7684\u9519\u8bef/\u5d29\u6e83\uff1f",description:"\u795e\u79d8\u7684\u5d29\u6e83\u548c ChatGPT \u6765\u62ef\u6551\u3002",authors:["swift"],tags:["Swift","iOS"]},r=void 0,c={permalink:"/blog/2023/02/20/the-weirdest-bugcrash-in-widgets",source:"@site/blog/2023-02-20-the-weirdest-bugcrash-in-widgets/index.md",title:"\u4fee\u590d iOS \u5c0f\u90e8\u4ef6\u4e2d\u6700\u5947\u602a\u7684\u9519\u8bef/\u5d29\u6e83\uff1f",description:"\u795e\u79d8\u7684\u5d29\u6e83\u548c ChatGPT \u6765\u62ef\u6551\u3002",date:"2023-02-20T00:00:00.000Z",tags:[{inline:!0,label:"Swift",permalink:"/blog/tags/swift"},{inline:!0,label:"iOS",permalink:"/blog/tags/i-os"}],readingTime:4.365,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift",page:null}],frontMatter:{title:"\u4fee\u590d iOS \u5c0f\u90e8\u4ef6\u4e2d\u6700\u5947\u602a\u7684\u9519\u8bef/\u5d29\u6e83\uff1f",description:"\u795e\u79d8\u7684\u5d29\u6e83\u548c ChatGPT \u6765\u62ef\u6551\u3002",authors:["swift"],tags:["Swift","iOS"]},unlisted:!1,prevItem:{title:"\u5982\u4f55\u5728SwiftUI\u4e2d\u79fb\u9664List\u7684\u7b2c\u4e00\u4e2a\u884c\u5206\u9694\u7ebf",permalink:"/blog/2023/03/25/swiftui-list-remove-first-separator"},nextItem:{title:"\u5728 Swift App \u4e2d\u4f7f\u7528 JavaScript",permalink:"/blog/2023/02/10/javascript-in-swift"}},l={authorsImageUrls:[void 0]},a=[];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:'\u4eca\u5929\uff0c\u5f53\u6211\u6ce8\u610f\u5230 SwitchBuddy \u5012\u8ba1\u65f6\u5c0f\u90e8\u4ef6\u4e4b\u4e00\u51fa\u73b0\u95ee\u9898\u65f6\uff0c\u6211\u7684\u4e00\u5929\u53d8\u5f97\u76f8\u5f53\u7cdf\u7cd5\u3002\u6e38\u620f\u662f\u4eca\u5929\u63a8\u51fa\u7684\uff0c\u4f46\u5c0f\u5de5\u5177\u663e\u793a\u7684\u662f "\u660e\u5929"\u3002\u8d77\u521d\uff0c\u6211\u4ee5\u4e3a\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u7684\u5012\u8ba1\u65f6\u903b\u8f91\u53ea\u662f\u7a0d\u6709\u504f\u5dee\uff0c\u800c\u6211\u4e4b\u524d\u5e76\u6ca1\u6709\u6ce8\u610f\u5230\u3002'}),"\n",(0,i.jsx)(t.p,{children:"\u7136\u540e\u5f00\u59cb\u53d1\u751f\u7684\u60c5\u51b5\u662f\uff0c\u5f53\u6211\u5220\u9664\u5c0f\u90e8\u4ef6\u5e76\u518d\u6b21\u6dfb\u52a0\u5b83\u65f6\uff0c\u5b83\u6839\u672c\u4e0d\u4f1a\u52a0\u8f7d\u5373\u5c06\u63a8\u51fa\u7684\u6e38\u620f\u6570\u636e\u3002\u5b83\u663e\u793a\u7684\u662f\u5360\u4f4d\u7b26\u5185\u5bb9\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u6211\u8ba4\u4e3a\u95ee\u9898\u51fa\u5728\u6211\u7684\u4ee3\u7801\u4e2d\uff0c\u4e5f\u8bb8\u662f\u8fc7\u6ee4\u6389\u4e86\u5df2\u7ecf\u53d1\u5e03\u7684\u6e38\u620f\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u6e38\u620f\u5728\u5012\u8ba1\u65f6\u5c0f\u5de5\u5177\u4e2d\u6ca1\u6709\u4ec0\u4e48\u610f\u4e49\u3002\u6211\u8c03\u6574\u4e86\u4e00\u4e9b\u4e1c\u897f\uff0c\u4f46\u6ca1\u6709\u6210\u529f\u3002\u8fdb\u4e00\u6b65\u7684\u6d4b\u8bd5\u8868\u660e\uff0c\u5df2\u7ecf\u53d1\u5e03\u7684\u6e38\u620f\u4e5f\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002\u9664\u4e86\u90a3\u4e9b\u4eca\u5929\u521a\u521a\u53d1\u5e03\u7684\u6e38\u620f\u5916\uff0c\u6bcf\u4e2a\u6e38\u620f\u90fd\u5de5\u4f5c\u6b63\u5e38\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["\u6211\u4e0d\u77e5\u9053\u5e76\u51b3\u5b9a\u5c1d\u8bd5\u4f7f\u7528 Console.app \u8fdb\u884c\u8c03\u8bd5\u3002\u7ecf\u8fc7\u4e00\u756a\u6316\u6398\uff0c\u6211\u7ec8\u4e8e\u6ce8\u610f\u5230",(0,i.jsx)(t.strong,{children:"\u5c0f\u90e8\u4ef6\u5d29\u6e83\u4e86"}),"\u3002\u4e5f\u8bb8\u8fd9\u662f\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u77e5\u9053\u7684\u884c\u4e3a - \u5f53\u5c0f\u90e8\u4ef6\u5d29\u6e83\u65f6\u5b83\u4f1a\u663e\u793a\u5360\u4f4d\u7b26\u5185\u5bb9\u3002\u4f46\u6211\u8ba4\u4e3a\u95ee\u9898\u51fa\u5728\u6211\u7684\u6761\u76ee\u548c\u57fa\u7840\u6570\u636e\u4e2d\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u81f3\u5c11\u5bf9\u4e8e Console.app\uff0c\u6211\u7ec8\u4e8e\u6536\u5230\u4e86\u4e00\u6761\u9519\u8bef\u6d88\u606f\u3002\u8d85\u7ea7\u5947\u602a\uff0c\u4f46\u4ecd\u7136\u6709\u9519\u8bef\u6d88\u606f\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u6211\u4e0d\u77e5\u9053\uff0c\u4e8e\u662f\u51b3\u5b9a\u5c1d\u8bd5\u7528 Console.app \u8fdb\u884c\u8c03\u8bd5\u3002\u7ecf\u8fc7\u4e00\u756a\u8c03\u67e5\uff0c\u6211\u7ec8\u4e8e\u6ce8\u610f\u5230\uff0c\u8fd9\u4e2a\u5c0f\u90e8\u4ef6\u5d29\u6e83\u4e86\u3002\u4e5f\u8bb8\u8fd9\u662f\u5176\u4ed6\u5f00\u53d1\u8005\u90fd\u77e5\u9053\u7684\u884c\u4e3a--\u5f53\u5c0f\u7ec4\u4ef6\u5d29\u6e83\u65f6\uff0c\u5b83\u4f1a\u663e\u793a\u5360\u4f4d\u7b26\u5185\u5bb9\u3002\u4f46\u6211\u8ba4\u4e3a\u95ee\u9898\u51fa\u5728\u6211\u7684\u6761\u76ee\u548c\u57fa\u7840\u6570\u636e\u4e0a\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u81f3\u5c11\u5728 Console.app \u4e2d\u6211\u7ec8\u4e8e\u6709\u4e86\u9519\u8bef\u4fe1\u606f\u3002"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Request ended for countdown:systemMedium - error: SwiftUI.(unknown context at $1d9616ca0).CodableTextAttachment.Error.invalidAttachment - The operation couldn\u2019t be completed. (SwiftUI.(unknown context at $1d9616ca0).CodableTextAttachment.Error error 0.)\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u6211\u6ca1\u80fd\u5728\u8c37\u6b4c\u4e0a\u627e\u5230\u5173\u4e8e\u8fd9\u4e2a\u95ee\u9898\u7684\u4efb\u4f55\u4fe1\u606f\u3002",(0,i.jsx)(t.code,{children:"CodableTextAttachment"})," \u5230\u5e95\u662f\u4ec0\u4e48\uff1f"]}),"\n",(0,i.jsx)(t.p,{children:"\u7531\u4e8e\u8fd9\u4e2a\u5c0f\u90e8\u4ef6\u5728\u5176\u4ed6\u6e38\u620f\u4e2d\u5de5\u4f5c\u6b63\u5e38\uff0c\u6240\u4ee5\u4ee4\u4eba\u8d39\u89e3\u7684\u662f\u4e3a\u4ec0\u4e48\u4f1a\u6709\u4e00\u4e2a SwiftUI \u7684\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u6211\u51b3\u5b9a\u54a8\u8be2 ChatGPT\u3002\u6211\u6ca1\u60f3\u5230\u4f1a\u6709\u4efb\u4f55\u5e2e\u52a9\uff0c\u4f46\u6211\u5f88\u597d\u5947\u3002\u7b2c\u4e00\u4e2a\u56de\u590d\u5f88\u7b3c\u7edf\uff0c\u4f46\u7b2c\u4e8c\u4e2a\u56de\u590d\u8ba9\u6211\u8f6c\u5411\u4e86\u6587\u672c\u89c6\u56fe\u3002"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"CodableTextAttachment"}),"\u662f SwiftUI \u6846\u67b6\u4e2d\u5b9a\u4e49\u7684\u4e00\u79cd\u7c7b\u578b\uff0c\u8868\u793a\u6587\u672c\u89c6\u56fe\u7684\u9644\u4ef6\u3002\u5b83\u7b26\u5408 Codable \u534f\u8bae\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u53ef\u4ee5\u4f7f\u7528 Encoder \u548c Decoder \u534f\u8bae\u8fdb\u884c\u7f16\u7801\u548c\u89e3\u7801\u3002\u8fd9\u5141\u8bb8\u5b83\u7528\u4e8e\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u7f16\u7801\u548c\u89e3\u7801\u7684 SwiftUI \u89c6\u56fe\uff0c\u4f8b\u5982\u5c0f\u90e8\u4ef6\u3002CodableTextAttachment \u7528\u4e8e\u5728 SwiftUI \u5e94\u7528\u7a0b\u5e8f\u7684\u6587\u672c\u89c6\u56fe\u4e2d\u663e\u793a\u56fe\u50cf\u3001\u89c6\u9891\u548c\u5176\u4ed6\u7c7b\u578b\u7684\u5a92\u4f53\u3002"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u679c\u7136\uff0c\u5f53\u6211\u68c0\u67e5\u8d1f\u8d23\u663e\u793a\u6587\u672c\u4fe1\u606f\u7684\u884c\u65f6\uff0c\u6211\u770b\u5230\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:'Text(Image(systemName: "sparkes")) + Text("Today!")\n'})}),"\n",(0,i.jsxs)(t.p,{children:["\u51fa\u4e8e\u67d0\u79cd\u539f\u56e0\uff0c\u5728\u770b\u5230\u8fd9\u884c\u5b57\u7684\u51e0\u79d2\u949f\u540e\uff0c\u6211\u786e\u4fe1\u8fd9\u5c31\u662f\u8ba9\u6211\u7684\u5c0f\u90e8\u4ef6\u5d29\u6e83\u7684\u95ee\u9898\u3002\u5f53\u53d1\u5e03\u65e5\u671f\u4e0d\u662f\u4eca\u5929\u65f6\uff0c\u5c0f\u7ec4\u4ef6\u663e\u793a\u7684\u53ea\u662f\u5e26\u6709\u9002\u5f53\u7684 info.",(0,i.jsx)(t.code,{children:"Text"}),"\u7684\u5355\u4e00\u5185\u5bb9\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u679c\u4e0d\u5176\u7136\uff0c\u6211\u5220\u9664\u4e86\u8fd9",(0,i.jsx)(t.code,{children:"Image"}),"\u90e8\u5206\uff0c\u5c0f\u90e8\u4ef6\u5f00\u59cb\u4e3a\u521a\u521a\u53d1\u5e03\u7684\u6e38\u620f\u5b8c\u7f8e\u5de5\u4f5c\u3002\ud83d\ude35"]}),"\n",(0,i.jsx)(t.p,{children:'\u6211\u5199\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u662f\u4e3a\u4e86\u5982\u679c\u6709\u4eba\u9047\u5230\u4e0a\u9762\u7684\u9519\u8bef\uff0c\u6211\u7684\u535a\u6587\u5e94\u8be5\u53ef\u4ee5\u901a\u8fc7\u641c\u7d22\u5230\u8fbe\u3002\u540c\u65f6\u4e5f\u662f\u4e3a\u4e86\u63d0\u9192\u6211\uff0c\u8981\u68c0\u67e5\u4f60\u7684\u4ee3\u7801\u4e2d\u90a3\u4e9b "\u5b8c\u5168\u6709\u6548\uff0c\u4e0d\u9700\u8981\u68c0\u67e5 "\u7684\u5730\u65b9\u3002'}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\u539f\u6587(\u82f1\u6587)\uff1a",(0,i.jsx)(t.a,{href:"https://nemecek.be/blog/186/the-weirdest-bugcrash-in-widgets",children:"https://nemecek.be/blog/186/the-weirdest-bugcrash-in-widgets/"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5296:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(758);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);