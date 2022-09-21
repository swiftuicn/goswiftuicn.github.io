"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,w=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(w,o(o({ref:t},c),{},{components:n})):r.createElement(w,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={slug:"bridge-async-await-to-combine-future",title:"\u5982\u4f55\u5728 Combine \u6846\u67b6\u4e2d\u4f7f\u7528 Swift \u4e2d async/await \u51fd\u6570",description:"\u5728 Swift \u4e2d\u5904\u7406\u5f02\u6b65\u4ee3\u7801\u65f6\uff0c\u6211\u4eec\u53ef\u80fd\u5fc5\u987b\u627e\u5230\u7ec4\u5408\u5b9e\u73b0\u4e0d\u540c\u5f02\u6b65\u6a21\u5f0f\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982\u5c06 Combine \u6846\u67b6\u4e0e Swift \u7684 async/await API \u4e00\u8d77\u4f7f\u7528\u3002",authors:["swift"],tags:["combine","async/await","swift"]},o=void 0,s={permalink:"/blog/bridge-async-await-to-combine-future",source:"@site/blog/2022-08-28-bridge-async-await-to-combine-future/index.md",title:"\u5982\u4f55\u5728 Combine \u6846\u67b6\u4e2d\u4f7f\u7528 Swift \u4e2d async/await \u51fd\u6570",description:"\u5728 Swift \u4e2d\u5904\u7406\u5f02\u6b65\u4ee3\u7801\u65f6\uff0c\u6211\u4eec\u53ef\u80fd\u5fc5\u987b\u627e\u5230\u7ec4\u5408\u5b9e\u73b0\u4e0d\u540c\u5f02\u6b65\u6a21\u5f0f\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982\u5c06 Combine \u6846\u67b6\u4e0e Swift \u7684 async/await API \u4e00\u8d77\u4f7f\u7528\u3002",date:"2022-08-28T00:00:00.000Z",formattedDate:"2022\u5e748\u670828\u65e5",tags:[{label:"combine",permalink:"/blog/tags/combine"},{label:"async/await",permalink:"/blog/tags/async-await"},{label:"swift",permalink:"/blog/tags/swift"}],readingTime:2.685,hasTruncateMarker:!0,authors:[{name:"GoSwiftUI",title:"goswiftui.com",url:"https://goswiftui.com",imageURL:"https://goswiftui.com/img/logo.png",key:"swift"}],frontMatter:{slug:"bridge-async-await-to-combine-future",title:"\u5982\u4f55\u5728 Combine \u6846\u67b6\u4e2d\u4f7f\u7528 Swift \u4e2d async/await \u51fd\u6570",description:"\u5728 Swift \u4e2d\u5904\u7406\u5f02\u6b65\u4ee3\u7801\u65f6\uff0c\u6211\u4eec\u53ef\u80fd\u5fc5\u987b\u627e\u5230\u7ec4\u5408\u5b9e\u73b0\u4e0d\u540c\u5f02\u6b65\u6a21\u5f0f\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982\u5c06 Combine \u6846\u67b6\u4e0e Swift \u7684 async/await API \u4e00\u8d77\u4f7f\u7528\u3002",authors:["swift"],tags:["combine","async/await","swift"]},prevItem:{title:"SwiftUI \u4e2d\u5b9e\u73b0\u5171\u4eab\u8de8\u5e73\u53f0(iOS/macOS)\u4ee3\u7801",permalink:"/blog/sharing-code-in-swiftui-apps"},nextItem:{title:"SwiftUI \u4e2d\u4f7f\u7528 TextField \u5b9e\u73b0\u591a\u884c\u6587\u672c\u6548\u679c",permalink:"/blog/Finally-Multiline-TextField-in-SwiftUI"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e86\u89e3\u5982\u4f55\u5728\u57fa\u4e8e\u7ec4\u5408\u7684 API \u4e2d\u8c03\u7528 async/await \u4ee3\u7801")),(0,a.kt)("p",null,"\u5728 Swift \u4e2d\u5904\u7406\u5f02\u6b65\u4ee3\u7801\u65f6\uff0c\u6211\u4eec\u53ef\u80fd\u5fc5\u987b\u627e\u5230\u7ec4\u5408\u5b9e\u73b0\u4e0d\u540c\u5f02\u6b65\u6a21\u5f0f\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982\u5c06 Combine \u6846\u67b6\u4e0e Swift \u7684 async/await API \u4e00\u8d77\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4e86\u89e3\u5982\u4f55\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Combine")," API \u4e2d\u8c03\u7528\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," \u6807\u8bb0\u7684\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u770b\u4e0b\u9762\u7684\u5f02\u6b65\u51fd\u6570\uff0c\u5b83\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"async/await")," \u6a21\u5f0f\u4ece\u670d\u52a1\u5668\u52a0\u8f7d\u7528\u6237\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func loadUser() async throws -> User {\n    // Load user from server\n    return user // or throw error\n}\n")),(0,a.kt)("p",null,"\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Combine")," \u5b9e\u73b0\u76f8\u540c\u7684\u884c\u4e3a\uff0c\u5b83\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," \u53d1\u5e03\u8005\u5c31\u6d3e\u4e0a\u7528\u573a\u4e86\u3002\u672a\u6765\u4f7f\u7528\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"Future.Promise")," \u7684\u95ed\u5305\u8fdb\u884c\u521d\u59cb\u5316\u3002\u5728\u5b8c\u6210\u4e00\u4e9b\u5f02\u6b65\u5de5\u4f5c\u4e4b\u540e\uff0c\u6211\u4eec\u7528\u4e00\u4e2a\u6210\u529f\u6216\u5931\u8d25\u7684 Result \u8c03\u7528\u8be5\u95ed\u5305\u3002\u7136\u540e\uff0cCombine \u4f1a\u81ea\u52a8\u5c06\u7ed3\u679c\u6620\u5c04\u5230\u9002\u5f53\u7684\u53d1\u5e03\u8005\u4e8b\u4ef6\u4e2d\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u770b\u5982\u4f55\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," \u53d1\u5e03\u8005\u5b9e\u73b0\u4e0a\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," \u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func loadUser() -> Future<User, Error> {\n    return Future() { promise in\n        // Load user from server.\n        promise(.success(user))  // or promise(.failure(error))\n    }\n}\n")),(0,a.kt)("p",null,"\u4f46\u662f\u7531\u4e8e\u6211\u4eec\u5df2\u7ecf\u6709\u4e00\u4e2a\u52a0\u8f7d\u7528\u6237\u7684\u5b9e\u73b0\uff0c\u6211\u4eec\u5e0c\u671b\u907f\u514d\u91cd\u590d\u7f16\u5199\u76f8\u540c\u7684\u903b\u8f91\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u8ba9\u6211\u4eec\u5c1d\u8bd5\u627e\u5230\u4e00\u4e2a\u66f4\u901a\u7528\u7684\u89e3\u51b3\u65b9\u6cd5\uff0c\u5b83\u5141\u8bb8\u6211\u4eec\u5c06 async func \u8f6c\u6362\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Future"),"\u53d1\u5e03\u8005\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"extension Future where Failure == Error {\n    convenience init(asyncFunc: @escaping () async throws -> Output) {\n        self.init { promise in\n            Task {\n                do {\n                    let result = try await asyncFunc()\n                    promise(.success(result))\n                } catch {\n                    promise(.failure(error))\n                }\n            }\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u5728\u521d\u59cb\u5316\u4e2d\u6269\u5c55\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," \u7c7b\u578b\uff0c\u5b83\u5141\u8bb8\u6211\u4eec\u7528\u4e00\u4e2a\u5f02\u6b65\u95ed\u5305\u6765\u521d\u59cb\u5316\u4e00\u4e2a\u5b9e\u4f8b\u3002\u5e94\u7528\u4e8e\u6211\u4eec\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func loadUser() -> Future<Int, Error> {\n    return Future(asyncFunc: {\n        try await loadUser()\n    })\n}\n")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5f02\u5e38\u7684\u60c5\u51b5\uff0c\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u53e6\u4e00\u4e2a\u6269\u5c55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"extension Future where Failure == Never {\n\n    convenience init(asyncFunc: @escaping () async -> Output) {\n        self.init { promise in\n            Task {\n                let result = await asyncFunc()\n                promise(.success(result))\n            }\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u6709\u4e86\u50cf\u8fd9\u6837\u7684\u901a\u7528\u89e3\u51b3\u65b9\u6848\uff0c\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u5728\u4efb\u4f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," \u51fd\u6570\u4e0a\u4f7f\u7528\u5b83\u6765\u5c06\u5176\u6865\u63a5\u5230 Combine \u7684 Future\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u539f\u6587(\u82f1\u6587)\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://tanaschita.com/20220822-bridge-async-await-to-combine-future"},"https://tanaschita.com/20220822-bridge-async-await-to-combine-future")))))}p.isMDXComponent=!0}}]);