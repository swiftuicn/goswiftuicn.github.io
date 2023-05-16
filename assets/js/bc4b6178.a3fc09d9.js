"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7511],{9613:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(9496);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=s(n),m=i,d=c["".concat(p,".").concat(m)]||c[m]||f[m]||o;return n?r.createElement(d,a(a({ref:e},u),{},{components:n})):r.createElement(d,a({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9469:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(1163),i=(n(9496),n(9613));const o={slug:"supporting-password-autofill-for-ios-appilcations",title:"\u4f7f\u7528 SwiftUI/UIKit \u5b9e\u73b0 iOS \u5e94\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145",authors:["swift"],tags:["SwiftUI","\u5bc6\u7801","UIKit","iOS"]},a=void 0,l={permalink:"/blog/supporting-password-autofill-for-ios-appilcations",source:"@site/blog/2022-08-23-supporting-password-autofill-for-ios-appilcations/index.md",title:"\u4f7f\u7528 SwiftUI/UIKit \u5b9e\u73b0 iOS \u5e94\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145",description:"\u4e86\u89e3\u5982\u4f55\u5728 SwiftUI \u548c UIKit \u5b9e\u73b0 Apple \u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u3002",date:"2022-08-23T00:00:00.000Z",formattedDate:"2022\u5e748\u670823\u65e5",tags:[{label:"SwiftUI",permalink:"/blog/tags/swift-ui"},{label:"\u5bc6\u7801",permalink:"/blog/tags/\u5bc6\u7801"},{label:"UIKit",permalink:"/blog/tags/ui-kit"},{label:"iOS",permalink:"/blog/tags/i-os"}],readingTime:3.405,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{slug:"supporting-password-autofill-for-ios-appilcations",title:"\u4f7f\u7528 SwiftUI/UIKit \u5b9e\u73b0 iOS \u5e94\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145",authors:["swift"],tags:["SwiftUI","\u5bc6\u7801","UIKit","iOS"]},prevItem:{title:"\u5982\u4f55\u5728 App Store \u4e0a\u83b7\u5f97\u63a8\u8350",permalink:"/blog/how-to-get-featured-on-the-app-store"},nextItem:{title:"AppStore \u8d2d\u4e70\u6210\u529f\u540e\u9000\u6b3e\uff0c\u82f9\u679c\u662f\u5426\u4f1a\u4fdd\u7559\u4f63\u91d1\uff1f",permalink:"/blog/does-apple-keep-its-commission"}},p={authorsImageUrls:[void 0]},s=[{value:"\u4e86\u89e3\u5982\u4f55\u5728 SwiftUI \u548c UIKit \u5b9e\u73b0 Apple \u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u3002",id:"\u4e86\u89e3\u5982\u4f55\u5728-swiftui-\u548c-uikit-\u5b9e\u73b0-apple-\u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145",level:2},{value:"\u4e3a\u5171\u4eab Web \u51ed\u636e\u8bbe\u7f6e\u5e94\u7528\u7684\u5173\u8054\u57df",id:"\u4e3a\u5171\u4eab-web-\u51ed\u636e\u8bbe\u7f6e\u5e94\u7528\u7684\u5173\u8054\u57df",level:3},{value:"\u4f7f\u7528 textContentType \u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145",id:"\u4f7f\u7528-textcontenttype-\u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145",level:3},{value:"\u4e3a SwiftUI \u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145",id:"\u4e3a-swiftui-\u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145",level:4},{value:"\u4e3a UIKit \u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145",id:"\u4e3a-uikit-\u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145",level:4}],u={toc:s},c="wrapper";function f(t){let{components:e,...n}=t;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4e86\u89e3\u5982\u4f55\u5728-swiftui-\u548c-uikit-\u5b9e\u73b0-apple-\u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145"},"\u4e86\u89e3\u5982\u4f55\u5728 SwiftUI \u548c UIKit \u5b9e\u73b0 Apple \u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u3002"),(0,i.kt)("p",null,"Apple \u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u529f\u80fd\u5141\u8bb8\u7528\u6237\u5728\u4e0d\u540c\u8bbe\u5907\u4e0a\u767b\u5f55\u540c\u4e00\u4e2a\u5e10\u6237\uff0c\u800c\u65e0\u9700\u8bb0\u4f4f\u4ed6\u4eec\u7684\u51ed\u636e\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5728 Web \u5e94\u7528\u7a0b\u5e8f\u4e2d\u6ce8\u518c\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u751f\u6210\u5bc6\u7801\u5e76\u5c06\u51ed\u636e\u4fdd\u5b58\u5728\u4ed6\u4eec\u7684 iCloud \u94a5\u5319\u4e32\u4e2d\u3002\u5f53\u4ed6\u4eec\u5728\u67d0\u4e2a\u65f6\u5019\u8fd0\u884c\u672c\u673a\u5e94\u7528\u7a0b\u5e8f\u4ee5\u8bbf\u95ee\u540c\u4e00\u5e10\u6237\u65f6\uff0c\u8be5\u5e94\u7528\u7a0b\u5e8f\u4f1a\u5728\u5bc6\u7801 QuickType \u680f\u4e2d\u5efa\u8bae\u4e3a\u7f51\u7ad9\u5b58\u50a8\u7684\u51ed\u636e\u3002\u5728\u7528\u6237\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u540e\uff0c\u5047\u8bbe\u4f7f\u7528 Face ID\uff0c\u7cfb\u7edf\u4f1a\u9884\u5148\u586b\u5199\u51ed\u636e - \u56e0\u6b64\u65e0\u9700\u91cd\u65b0\u8f93\u5165\u5b83\u4eec\u3002"),(0,i.kt)("p",null,"\u8981\u5728 iOS \u5e94\u7528\u7a0b\u5e8f\u4e2d\u6fc0\u6d3b\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u529f\u80fd\uff0c\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u5e94\u7528\u7a0b\u5e8f\u7684\u5173\u8054\u57df\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u76f8\u5173\u6587\u672c\u5b57\u6bb5\u4e0a\u8bbe\u7f6e\u6b63\u786e\u7684\u81ea\u52a8\u586b\u5145\u7c7b\u578b\u3002")),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u66f4\u8be6\u7ec6\u5730\u770b\u4e00\u4e0b\u8fd9\u4e9b\u6b65\u9aa4\u3002"),(0,i.kt)("h3",{id:"\u4e3a\u5171\u4eab-web-\u51ed\u636e\u8bbe\u7f6e\u5e94\u7528\u7684\u5173\u8054\u57df"},"\u4e3a\u5171\u4eab Web \u51ed\u636e\u8bbe\u7f6e\u5e94\u7528\u7684\u5173\u8054\u57df"),(0,i.kt)("p",null,"\u5173\u8054\u57df\u5728\u7f51\u7ad9\u548c iOS \u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u5efa\u7acb\u5b89\u5168\u5173\u8054\u3002\u8981\u652f\u6301\u5171\u4eab Web \u51ed\u636e\uff0c\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e3a\u5171\u4eab\u7684 Web \u51ed\u636e\u521b\u5efa\u548c\u914d\u7f6e\u5173\u8054\u7684\u57df\u6587\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5c06\u5173\u8054\u7684\u57df\u6587\u4ef6\u6dfb\u52a0\u5230\u76f8\u5173\u7f51\u7ad9\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5c06\u5173\u8054\u7684\u57df\u6743\u5229\u6dfb\u52a0\u5230 iOS \u5e94\u7528\u7a0b\u5e8f\u3002")),(0,i.kt)("p",null,"\u8fd9\u4e9b\u6b65\u9aa4\u4e2d\u7684\u6bcf\u4e00\u4e2a\u90fd\u5728",(0,i.kt)("a",{parentName:"p",href:"https://tanaschita.com/20220725-quick-guide-on-associated-domains-in-ios"},"\u6709\u5173\u76f8\u5173\u57df\u6587\u4ef6"),"\u7684\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u8fdb\u884c\u4e86\u66f4\u8be6\u7ec6\u7684\u63cf\u8ff0\u3002"),(0,i.kt)("h3",{id:"\u4f7f\u7528-textcontenttype-\u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145"},"\u4f7f\u7528 textContentType \u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u5171\u4eab\u7f51\u7edc\u51ed\u636e\u540e\uff0c\u6211\u4eec\u9700\u8981\u505a\u7684\u5c31\u662f\u5728\u4efb\u4f55\u76f8\u5173\u8f93\u5165\u89c6\u56fe\u4e0a\u8bbe\u7f6e textContentType \u5c5e\u6027\u4ee5\u6fc0\u6d3b\u6b63\u786e\u7684\u81ea\u52a8\u586b\u5145\u5efa\u8bae\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b UITextContentType \u503c\u53ef\u7528\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},".username \u7528\u4e8e\u5e10\u6237\u540d\u79f0"),(0,i.kt)("li",{parentName:"ul"},".password \u5bc6\u7801"),(0,i.kt)("li",{parentName:"ul"},".newPassword \u7528\u4e8e\u65b0\u5bc6\u7801"),(0,i.kt)("li",{parentName:"ul"},".oneTimeCode \u7528\u4e8e\u4e00\u6b21\u6027\u5bc6\u7801\uff0c\u4f8b\u5982\u81ea\u52a8\u5b8c\u6210\u5355\u56e0\u7d20\u77ed\u4fe1\u767b\u5f55\u6d41\u7a0b\u4e2d\u7684\u5b89\u5168\u4ee3\u7801")),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u770b\u5982\u4f55\u4e3a SwiftUI \u548c UIKit \u5e94\u7528\u7a0b\u5e8f\u505a\u5230\u8fd9\u4e00\u70b9\u3002"),(0,i.kt)("h4",{id:"\u4e3a-swiftui-\u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145"},"\u4e3a SwiftUI \u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145"),(0,i.kt)("p",null,"\u5728 SwiftUI \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 textContentType(","_",":)\u65b9\u6cd5\u8bbe\u7f6e UITextContentType \u503c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'TextField("Enter your email", text: $emailAddress)\n    .textContentType(.username)\n    .keyboardType(.emailAddress)\n\n\nTextField("Enter your password", text: $password)\n    .textContentType(.password)\n')),(0,i.kt)("p",null,"\u6839\u636e\u6211\u4eec\u63d0\u4f9b\u7684 textContentType\uff0ciOS \u4f1a\u81ea\u52a8\u9009\u62e9\u4e00\u4e2a\u5339\u914d\u7684\u952e\u76d8\u6765\u663e\u793a\u7ed9\u7528\u6237\u3002"),(0,i.kt)("p",null,"\u8981\u5448\u73b0\u4e0d\u540c\u7684\u952e\u76d8\uff0c\u4f8b\u5982\uff0c\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u7535\u5b50\u90ae\u4ef6\u4f5c\u4e3a\u7528\u6237\u540d\uff0c\u6211\u4eec\u53ef\u4ee5\u53e6\u5916\u5c06.keyboardType \u8bbe\u7f6e\u4e3a\u6240\u9700\u7684\u503c\u3002"),(0,i.kt)("h4",{id:"\u4e3a-uikit-\u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145"},"\u4e3a UIKit \u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145"),(0,i.kt)("p",null,"UIKit \u652f\u6301 UITextField\u3001UITextView \u548c\u4efb\u4f55\u91c7\u7528 UITextInput \u534f\u8bae\u7684\u81ea\u5b9a\u4e49\u89c6\u56fe\u4e0a\u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 textContentType \u5b9e\u4f8b\u5c5e\u6027\u8bbe\u7f6e UITextContentType \u503c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"userTextField.textContentType = .username\nuserTextField.keyboardType = .emailAddress\npasswordTextField.textContentType = .password\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u539f\u6587(\u82f1\u6587)\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://tanaschita.com/20220815-supporting-password-autofill-for-ios-appilcations"},"https://tanaschita.com/20220815-supporting-password-autofill-for-ios-appilcations"))))}f.isMDXComponent=!0}}]);