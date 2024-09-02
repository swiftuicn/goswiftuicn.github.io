"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[696],{69:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var i=t(6070),s=t(5296);const a={title:"Swift \u4e2d JSON \u65e5\u671f\u4e0e Swift \u539f\u751f\u65e5\u671f Date \u7c7b\u578b\u4e92\u76f8\u8f6c\u6362",description:"\u4e86\u89e3\u5982\u4f55\u5c06 JSON \u65e5\u671f\u8f6c\u6362\u4e3a Swift \u7684\u539f\u751f\u65e5\u671f\u7c7b\u578b\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002",authors:["swift"],tags:["Swift","JSON","Date"]},c=void 0,d={permalink:"/blog/2022/11/22/swift-json-date-decoding-encoding",source:"@site/blog/2022-11-22-swift-json-date-decoding-encoding/index.md",title:"Swift \u4e2d JSON \u65e5\u671f\u4e0e Swift \u539f\u751f\u65e5\u671f Date \u7c7b\u578b\u4e92\u76f8\u8f6c\u6362",description:"\u4e86\u89e3\u5982\u4f55\u5c06 JSON \u65e5\u671f\u8f6c\u6362\u4e3a Swift \u7684\u539f\u751f\u65e5\u671f\u7c7b\u578b\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002",date:"2022-11-22T00:00:00.000Z",tags:[{inline:!0,label:"Swift",permalink:"/blog/tags/swift"},{inline:!0,label:"JSON",permalink:"/blog/tags/json"},{inline:!0,label:"Date",permalink:"/blog/tags/date"}],readingTime:2.43,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift",page:null}],frontMatter:{title:"Swift \u4e2d JSON \u65e5\u671f\u4e0e Swift \u539f\u751f\u65e5\u671f Date \u7c7b\u578b\u4e92\u76f8\u8f6c\u6362",description:"\u4e86\u89e3\u5982\u4f55\u5c06 JSON \u65e5\u671f\u8f6c\u6362\u4e3a Swift \u7684\u539f\u751f\u65e5\u671f\u7c7b\u578b\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002",authors:["swift"],tags:["Swift","JSON","Date"]},unlisted:!1,prevItem:{title:"Swift \u4e2d `#available` \u548c @available \u6709\u4ec0\u4e48\u533a\u522b",permalink:"/blog/2022/12/19/swift-available-vs-available"},nextItem:{title:"SwiftUI \u81ea\u5b9a\u4e49\u5b57\u4f53\u5b9e\u73b0\u81ea\u9002\u5e94\u5927\u5c0f\uff08Dynamic Type\uff09",permalink:"/blog/2022/10/17/swiftui-scale-custom-font-dynamic-type"}},l={authorsImageUrls:[void 0]},o=[{value:"\u7b56\u7565 .iso8601",id:"\u7b56\u7565-iso8601",level:3},{value:"\u7b56\u7565 .millisecondsSince1970",id:"\u7b56\u7565-millisecondssince1970",level:3},{value:"\u7b56\u7565 .secondsSince1970",id:"\u7b56\u7565-secondssince1970",level:3},{value:"\u7b56\u7565 .formatted(DateFormatter)",id:"\u7b56\u7565-formatteddateformatter",level:3},{value:"\u7b56\u7565 .custom((\u89e3\u7801\u5668) -&gt; \u65e5\u671f)",id:"\u7b56\u7565-custom\u89e3\u7801\u5668---\u65e5\u671f",level:3}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Swift \u4e2d JSON \u65e5\u671f\u4e0e Swift \u539f\u751f\u65e5\u671f Date \u7c7b\u578b\u4e92\u76f8\u8f6c\u6362\uff0cJSON \u89e3\u7801\u5668\u548c\u7f16\u7801\u5668\u63d0\u4f9b\u4e0d\u540c\u7684\u65e5\u671f\u7f16\u7801\u7b56\u7565\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7b56\u7565\u4e2d\u8fdb\u884c\u9009\u62e9\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:".deferredToDate"}),"\n",(0,i.jsx)(n.li,{children:".iso8601"}),"\n",(0,i.jsx)(n.li,{children:".millisecondsSince1970"}),"\n",(0,i.jsx)(n.li,{children:".secondsSince1970"}),"\n",(0,i.jsx)(n.li,{children:".formatted(DateFormatter)"}),"\n",(0,i.jsx)(n.li,{children:".custom((Decoder) -> Date)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u66f4\u8be6\u7ec6\u5730\u7814\u7a76\u6bcf\u79cd\u7b56\u7565\u3002\u8ba9\u6211\u4eec\u5f00\u59cb\u5427\u3002"}),"\n",(0,i.jsx)(n.p,{children:".deferredToDate \u7b56\u7565\u662f\u4f7f\u7528 Apple \u81ea\u5df1\u7684\u65e5\u671f\u683c\u5f0f\u7684\u9ed8\u8ba4\u7b56\u7565\u3002\u5b83\u662f\u76f8\u5bf9\u4e8e 2001 \u5e74 1 \u6708 1 \u65e5\u5348\u591c UTC \u7684\u79d2\u6570\u3002\u6309\u5982\u4e0b\u65b9\u5f0f\u5bf9\u65e5\u671f\u8fdb\u884c\u7f16\u7801\u65f6\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"let jsonEncoder = JSONEncoder()\njsonEncoder.dateEncodingStrategy = .deferredToDate\n\nlet article = Article(date: Date())\nlet encodedArticle = try jsonEncoder.encode(article)\n\nprint(String(data: encodedArticle, encoding: .utf8)!)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u5f97\u5230\u4ee5\u4e0b\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'{ "date" : 695980776.16554499 }\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u7b56\u7565-iso8601",children:"\u7b56\u7565 .iso8601"}),"\n",(0,i.jsx)(n.p,{children:".iso8601 \u7b56\u7565\u6839\u636e ISO 8601 \u6807\u51c6\u683c\u5f0f\u5316\u65e5\u671f\uff0c\u8be5\u6807\u51c6\u662f\u6db5\u76d6\u5168\u7403\u65e5\u671f\u548c\u65f6\u95f4\u76f8\u5173\u6570\u636e\u4ea4\u6362\u7684\u56fd\u9645\u6807\u51c6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5c06\u4e0a\u9762\u7684\u793a\u4f8b\u66f4\u6539\u4e3a\u6b64\u7b56\u7565\u65f6\uff0c\u6211\u4eec\u5f97\u5230\u4ee5\u4e0b\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'{ "date" : "2023-01-21T07:59:36Z" }\n'})}),"\n",(0,i.jsx)(n.p,{children:"T \u5b57\u7b26\u662f\u65f6\u95f4\u503c\u4e4b\u524d\u7684\u65f6\u95f4\u6807\u8bc6\u7b26\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Z \u5b57\u7b26\u662f\u65f6\u533a\u6807\u8bc6\u7b26\uff0c\u6307\u793a\u65f6\u533a\u662f UTC\u3002\u5b83\u53ea\u9700\u8981\u9644\u52a0\u5230\u65f6\u95f4\u503c\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u7b56\u7565-millisecondssince1970",children:"\u7b56\u7565 .millisecondsSince1970"}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u7b56\u7565\u89e3\u7801\u81ea 1970 \u5e74 1 \u6708 1 \u65e5\u5348\u591c UTC \u4ee5\u6765\u7684\u6beb\u79d2\u6570\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'{ "date" : 1674287976165.5449 }\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u7b56\u7565-secondssince1970",children:"\u7b56\u7565 .secondsSince1970"}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u7b56\u7565\u89e3\u7801\u81ea 1970 \u5e74 1 \u6708 1 \u65e5\u5348\u591c UTC \u4ee5\u6765\u7684\u79d2\u6570\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'{ "date" : 1674287976.165545 }\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u7b56\u7565-formatteddateformatter",children:"\u7b56\u7565 .formatted(DateFormatter)"}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u7b56\u7565\u5141\u8bb8\u6211\u4eec\u8bbe\u7f6e\u4efb\u4f55\u81ea\u5b9a\u4e49\u65e5\u671f\u683c\u5f0f\u5316\u7a0b\u5e8f\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'let dateFormatter = DateFormatter()\ndateFormatter.dateFormat = "yyyy-MM-dd"\njsonEncoder.dateEncodingStrategy = .formatted(dateFormatter)\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5b83\u63d0\u4f9b\u4ee5\u4e0b\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'{ "date": "2023-01-21" }\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u7b56\u7565-custom\u89e3\u7801\u5668---\u65e5\u671f",children:"\u7b56\u7565 .custom((\u89e3\u7801\u5668) -> \u65e5\u671f)"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u79cd\u7b56\u7565\u7ed9\u4e86\u6211\u4eec\u6700\u5927\u7684\u7075\u6d3b\u6027\uff0c\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u4e3a\u65e5\u671f\u7f16\u7801\u6dfb\u52a0\u4e00\u4e9b\u6761\u4ef6\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'jsonEncoder.dateEncodingStrategy = .custom({ date, encoder in\n    var container = encoder.singleValueContainer()\n    try container.encode("Some custom date encoding \\(date.description)")\n})\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5b83\u63d0\u4f9b\u4ee5\u4e0b\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'{ "date": "Some custom date encoding 2023-01-21 07:59:36 +0000" }\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u539f\u6587(\u82f1\u6587)\uff1a",(0,i.jsx)(n.a,{href:"https://tanaschita.com/20221114-json-date-decoding-encoding/",children:"https://tanaschita.com/20221114-json-date-decoding-encoding/"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},5296:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var i=t(758);const s={},a=i.createContext(s);function c(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);