"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[443],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1587:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(1163),a=(r(9496),r(9613));const i={title:"SwiftUI \u4e2d APP \u7684\u7ed3\u6784\u548c\u884c\u4e3a",description:"SwiftUI \u4e2d APP \u7684\u7ed3\u6784\u548c\u884c\u4e3a",sidebar_position:8,sidebar_label:"APP \u7684\u7ed3\u6784\u548c\u884c\u4e3a"},o="APP \u7684\u7ed3\u6784\u548c\u884c\u4e3a",p={unversionedId:"app-structure-and-behavior",id:"app-structure-and-behavior",title:"SwiftUI \u4e2d APP \u7684\u7ed3\u6784\u548c\u884c\u4e3a",description:"SwiftUI \u4e2d APP \u7684\u7ed3\u6784\u548c\u884c\u4e3a",source:"@site/docs/app-structure-and-behavior.md",sourceDirName:".",slug:"/app-structure-and-behavior",permalink:"/app-structure-and-behavior",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"SwiftUI \u4e2d APP \u7684\u7ed3\u6784\u548c\u884c\u4e3a",description:"SwiftUI \u4e2d APP \u7684\u7ed3\u6784\u548c\u884c\u4e3a",sidebar_position:8,sidebar_label:"APP \u7684\u7ed3\u6784\u548c\u884c\u4e3a"},sidebar:"tutorialSidebar",previous:{title:"\u6846\u67b6\u96c6\u6210 - UIKit \u4e2d\u7684 SwiftUI",permalink:"/framework-integration-swiftui-in-uikit"},next:{title:"SwiftUI \u8d44\u6e90",permalink:"/resources"}},l={},c=[{value:"App",id:"app",level:2},{value:"Scene",id:"scene",level:2}],u={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"app-\u7684\u7ed3\u6784\u548c\u884c\u4e3a"},"APP \u7684\u7ed3\u6784\u548c\u884c\u4e3a"),(0,a.kt)("h2",{id:"app"},"App"),(0,a.kt)("div",{class:"primary--tag"},"iOS 14"),(0,a.kt)("p",null,"\u8868\u793a APP \u7ed3\u6784\u548c\u884c\u4e3a\u7684\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'import SwiftUI\n\n@main\nstruct MyApp: App {\n    var body: some Scene {\n        WindowGroup {\n            Text("Hello, world!")\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u573a\u666f\u3002 \u8981\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5305\u542b\u591a\u4e2a\u573a\u666f\uff0c\u8bf7\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"@SceneBuilder")," \u5c5e\u6027\u6dfb\u52a0\u5230\u6b63\u6587\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@main\nstruct Mail: App {\n    @SceneBuilder var body: some Scene {\n        WindowGroup {\n            MailViewer()\n        }\n        Settings {\n            SettingsView()\n        }\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swiftui/app"},"\u6587\u6863 - App")),(0,a.kt)("h2",{id:"scene"},"Scene"),(0,a.kt)("div",{class:"primary--tag"},"iOS 14"),(0,a.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u7528\u6237\u754c\u9762\u7684\u4e00\u90e8\u5206\uff0c\u5176\u751f\u547d\u5468\u671f\u7531\u7cfb\u7edf\u7ba1\u7406\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'@main\nstruct MyApp: App {\n    var body: some Scene {\n        WindowGroup {\n            Text("Hello, world!")\n        }\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swiftui/scene"},"\u6587\u6863 - Scene")))}d.isMDXComponent=!0}}]);