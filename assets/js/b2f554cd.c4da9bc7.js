"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1477],{10:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"Finally-Multiline-TextField-in-SwiftUI","metadata":{"permalink":"/blog/Finally-Multiline-TextField-in-SwiftUI","source":"@site/blog/2022-08-27-Finally-Multiline-TextField-in-SwiftUI/index.md","title":"SwiftUI \u4e2d\u4f7f\u7528 TextField \u5b9e\u73b0\u591a\u884c\u6587\u672c\u6548\u679c","description":"\u6211\u6709\u591a\u5c11\u6b21\u5c1d\u8bd5\u5728 Stackoverflow \u4e0a\u627e\u5230\u7b54\u6848\uff0c\u55ef\uff1f\u4e0d\u518d\u4f7f\u7528\u81ea\u5b9a\u4e49\u591a\u884c\u6587\u672c\u5b57\u6bb5TextEditor\u3002\u4eceiOS 16 \u5f00\u59cb\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528TextField\u6765\u5b9e\u73b0\u5b83\uff0c\u53ea\u9700\u6dfb\u52a0\u4e00\u4e2a\u65b0\u53c2\u6570axis\uff1a","date":"2022-08-27T00:00:00.000Z","formattedDate":"2022\u5e748\u670827\u65e5","tags":[{"label":"SwiftUI","permalink":"/blog/tags/swift-ui"},{"label":"TextField","permalink":"/blog/tags/text-field"},{"label":"iOS","permalink":"/blog/tags/i-os"}],"readingTime":1.825,"hasTruncateMarker":true,"authors":[{"name":"GoSwiftUI","title":"goswiftui.com","url":"https://goswiftui.com","imageURL":"https://goswiftui.com/img/logo.png","key":"swift"}],"frontMatter":{"slug":"Finally-Multiline-TextField-in-SwiftUI","title":"SwiftUI \u4e2d\u4f7f\u7528 TextField \u5b9e\u73b0\u591a\u884c\u6587\u672c\u6548\u679c","authors":["swift"],"tags":["SwiftUI","TextField","iOS"]},"nextItem":{"title":"\u5982\u4f55\u5728 App Store \u4e0a\u83b7\u5f97\u63a8\u8350","permalink":"/blog/how-to-get-featured-on-the-app-store"}},"content":"\u6211\u6709\u591a\u5c11\u6b21\u5c1d\u8bd5\u5728 Stackoverflow \u4e0a\u627e\u5230[\u7b54\u6848](https://stackoverflow.com/search?q=multiline+TextField+SwiftUI)\uff0c\u55ef\uff1f\u4e0d\u518d\u4f7f\u7528\u81ea\u5b9a\u4e49\u591a\u884c\u6587\u672c\u5b57\u6bb5`TextEditor`\u3002\u4ece**iOS 16 \u5f00\u59cb\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528**[TextField](https://developer.apple.com/documentation/swiftui/textfield)\u6765\u5b9e\u73b0\u5b83\uff0c\u53ea\u9700\u6dfb\u52a0\u4e00\u4e2a\u65b0\u53c2\u6570`axis`\uff1a\\n\\n\x3c!--truncate--\x3e\\n\\n```swift\\nTextField(\\"Multiline textfield\\", text: $text, axis: .vertical)\\n```\\n\\n\u5f53\u6587\u672c\u5927\u4e8e\u6587\u672c\u5b57\u6bb5\u8fb9\u754c\u65f6\uff0c\u6b64\u53c2\u6570\u63a7\u5236\u6eda\u52a8\u65b9\u5411\u3002\u4f7f\u7528\u8be5`vertical`\u503c\uff0c\u6211\u4eec\u5f97\u5230\u4e00\u4e2a\u65b0\u7684\u73b0\u4ee3\u591a\u884c\u6587\u672c\u5b57\u6bb5\uff0c\u4f46\u901a\u8fc7\u6307\u5b9a`horizontal`\u4e00\u4e2a\u6211\u4eec\u8fd4\u56de\u5230\u6211\u4eec\u90fd\u5df2\u7ecf\u4e60\u60ef\u7684\u884c\u4e3a\u3002\\n\\n![](https://otbivnoe.ru/assets/img/articles/multiline-textfield/multiline-textfield-1.gif)\\n\\n\u770b\u770b\u5b83\u5de5\u4f5c\u5f97\u6709\u591a\u987a\u7545\u3002\u8fd9\u4e2a\u6587\u672c\u5b57\u6bb5\u73b0\u5728\u4e0d\u4ec5\u662f\u591a\u884c\u7684\uff0c\u800c\u4e14\u5b83\u4f1a\u5728\u5185\u5bb9\u66f4\u6539\u65f6\u81ea\u52a8\u6269\u5c55\u548c\u6536\u7f29\u3002\u5982\u679c\u65e0\u9650\u6269\u5c55\u7684\u5185\u5bb9\u4e0d\u662f\u60a8\u671f\u671b\u770b\u5230\u7684\uff0c\u90a3\u4e48\u65e7`lineLimit`\u7684\u548c\u65b0\u7684\u5f97\u5fc3\u5e94\u624b\u7684\u670b\u53cb\u5c31\u662f\u6551\u547d\u7a3b\u8349\uff01\\n\\n\u4f7f\u7528\u6b64\u4fee\u9970\u7b26\uff0c\u6587\u672c\u5b57\u6bb5\u4f1a\u589e\u957f\uff0c\u76f4\u5230\u8d85\u8fc7\u9650\u5236\u7684\u884c\u6570\u3002\u6709\u51e0\u79cd\u65b9\u6cd5\u53ef\u4ee5\u6307\u5b9a\u60a8\u9700\u8981\u591a\u5c11**\u53ef\u89c1**\u6587\u672c\u884c\u3002\u4f7f\u7528[\u65e7\u7248\u672c\uff0c](<https://developer.apple.com/documentation/swiftui/defaultdateprogresslabel/linelimit(_:)-3c4c9>)\u60a8\u53ea\u9700\u914d\u7f6e\u6587\u672c\u5728\u6b64\u89c6\u56fe\u4e2d\u53ef\u4ee5\u5360\u636e\u7684\u6700\u5927\u884c\u6570\u3002\\n\\n```swift\\n// iOS 13+\\n\\nTextField(\\"Multiline textfield\\", text: $text, axis: .vertical)\\n    .lineLimit(2)\\n```\\n\\n\u4ece**iOS 16**\u5f00\u59cb\uff0c\u8fd8\u6709\u4e00\u4e9b\u914d\u7f6e\u6700\u5c0f\u548c\u6700\u5927\u884c\u6570\u3002\\n\\n```swift\\n// iOS 16+\\n\\nTextField(\\"Multiline textfield\\", text: $text, axis: .vertical)\\n    .lineLimit(...2) // It\'s identical to usual `lineLimit(2)`\\n    .lineLimit(2...) // min=2, max=Int.max\\n\\nTextField(\\"Multiline textfield\\", text: $text, axis: .vertical)\\n    .lineLimit(2...3) // min=2, max=3\\n\\nTextField(\\"Multiline textfield\\", text: $text, axis: .vertical)\\n    .lineLimit(2, reservesSpace: true)  // = `lineLimit(2...2)`\\n    .lineLimit(2, reservesSpace: false) // = `lineLimit(2)`\\n```\\n\\n> - \u539f\u6587(\u82f1\u6587)\uff1a[https://otbivnoe.ru/2022/07/10/Finally-Multiline-TextField-in-SwiftUI.html](https://otbivnoe.ru/2022/07/10/Finally-Multiline-TextField-in-SwiftUI.html)"},{"id":"how-to-get-featured-on-the-app-store","metadata":{"permalink":"/blog/how-to-get-featured-on-the-app-store","source":"@site/blog/2022-08-27-how-to-get-featured-on-the-app-store/index.md","title":"\u5982\u4f55\u5728 App Store \u4e0a\u83b7\u5f97\u63a8\u8350","description":"\u591a\u6b21\u83b7\u5f97\u5728 App Store \u63a8\u8350\u7684\u5f00\u53d1\u4eba\u5458\u7684\u65b9\u6cd5","date":"2022-08-27T00:00:00.000Z","formattedDate":"2022\u5e748\u670827\u65e5","tags":[{"label":"App Store","permalink":"/blog/tags/app-store"},{"label":"\u63a8\u8350","permalink":"/blog/tags/\u63a8\u8350"},{"label":"iOS","permalink":"/blog/tags/i-os"}],"readingTime":5.795,"hasTruncateMarker":true,"authors":[{"name":"GoSwiftUI","title":"goswiftui.com","url":"https://goswiftui.com","imageURL":"https://goswiftui.com/img/logo.png","key":"swift"}],"frontMatter":{"slug":"how-to-get-featured-on-the-app-store","title":"\u5982\u4f55\u5728 App Store \u4e0a\u83b7\u5f97\u63a8\u8350","description":"\u591a\u6b21\u83b7\u5f97\u5728 App Store \u63a8\u8350\u7684\u5f00\u53d1\u4eba\u5458\u7684\u65b9\u6cd5","authors":["swift"],"tags":["App Store","\u63a8\u8350","iOS"]},"prevItem":{"title":"SwiftUI \u4e2d\u4f7f\u7528 TextField \u5b9e\u73b0\u591a\u884c\u6587\u672c\u6548\u679c","permalink":"/blog/Finally-Multiline-TextField-in-SwiftUI"},"nextItem":{"title":"iOS \u5e94\u7528\u5b9e\u73b0\u5bc6\u7801\u81ea\u52a8\u586b\u5145","permalink":"/blog/supporting-password-autofill-for-ios-appilcations"}},"content":"> \u591a\u6b21\u83b7\u5f97\u5728 App Store \u63a8\u8350\u7684\u5f00\u53d1\u4eba\u5458\u7684\u65b9\u6cd5\\n\\n\u5728 App Store \u4e2d\u83b7\u5f97\u63a8\u8350\u662f\u4e00\u7b14\u4e0d\u9519\u7684\u4ea4\u6613\u3002\u4f46\u662f\u60a8\u77e5\u9053**\u60a8\u53ef\u4ee5\u8981\u6c42 Apple \u5c55\u793a\u60a8\u7684\u5e94\u7528\u5417\uff1f**\u6bcf\u4e2a App Store \u5f00\u53d1\u8005\u90fd\u53ef\u4ee5\u7533\u8bf7\u529f\u80fd\u3002\u60a8\u9700\u8981\u505a\u7684\u5c31\u662f\u5728 Apple Developer \u7f51\u7ad9\u4e0a\u586b\u5199[\u4e13\u95e8\u7684\u8868\u683c\u3002](https://developer.apple.com/contact/app-store/promote/)\\n\\n\u7531\u4e8e\u6211\u8fd8\u6ca1\u6709\u4f7f\u7528\u8868\u5355\u7684\u7ecf\u9a8c\uff0c\u6240\u4ee5\u6211\u51b3\u5b9a\u4e0e\u5176\u4ed6\u5f00\u53d1\u8005\u804a\u5929\uff0c\u5e0c\u671b\u80fd\u542f\u53d1\u66f4\u591a\u7684\u72ec\u7acb\u5f00\u53d1\u8005\uff0c\u4e5f\u8bb8\u662f\u4e3a\u4e86\u5173\u6ce8\u8fd9\u79cd\u8868\u5355\u5e76\u5728 App Store \u4e0a\u83b7\u5f97\u826f\u597d\u7684\u66dd\u5149\u7387\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u7ecf\u5e38\u63d0\u4ea4\u4ee5\u83b7\u5f97\u6700\u4f73\u7ed3\u679c\\n\\n\u5982\u679c\u6709\u4e00\u4e2a\u5927\u6536\u83b7\uff0c\u90a3\u5c31\u662f**\u7ecf\u5e38\u63d0\u4ea4\u6b64\u8868\u683c\u662f\u6709\u610f\u4e49\u7684**\u3002\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u91cd\u8981\u7684\u5e94\u7528\u7a0b\u5e8f\u66f4\u65b0\u3002\u6b63\u5982[Emmanuel Crouvisier](https://twitter.com/emcro)\uff08 CardPointers \u7684\u5f00\u53d1\u8005[\uff09](https://cardpointers.com/)\u6240\u5efa\u8bae\u7684\uff1a\\n\\n> \u6211\u6bcf\u5e74\u591a\u6b21\u63d0\u4ea4\u8be5\u8868\u683c\uff0c\u5e76\u4e14\u5f88\u5e78\u8fd0\u80fd\u591f\u8fde\u7eed 3 \u5e74\u5728\u6bcf\u4e2a\u5927\u578b iOS \u7248\u672c\u4e2d\u81f3\u5c11\u51fa\u73b0\u4e00\u4e2a\u529f\u80fd\u5217\u8868\u3002\\n\\n[Wessley Roche](https://twitter.com/wessley) \u2014\u2014Everlog \u80cc\u540e\u7684\u5f00\u53d1\u8005[\u2014\u2014](https://everlog.app/)\u63a8\u8350\u4e86\u540c\u6837\u7684\u65b9\u6cd5\uff1a\\n\\n> \u5728\u51e0\u4e2a\u6b27\u76df\u56fd\u5bb6/\u5730\u533a\u591a\u6b21\u88ab\u8bc4\u4e3a\u201c\u6bcf\u65e5\u5e94\u7528\u201d\u3002\u6211\u4e3a\u6bcf\u6b21\u91cd\u5927\u66f4\u65b0\u63d0\u4ea4\u8be5\u8868\u683c\u3002\\n\\n\u867d\u7136\u60a8\u901a\u5e38\u4e0d\u4f1a\u4ece Apple \u83b7\u5f97\u786e\u8ba4\u60a8\u63d0\u4ea4\u7684\u5185\u5bb9\u662f App Store \u529f\u80fd\u7684\u539f\u56e0\uff0c\u4f46\u8fd9\u4f3c\u4e4e\u5f88\u6709\u53ef\u80fd\u3002\u6211\u4e0d\u8ba4\u4e3a App Store \u7f16\u8f91\u56e2\u961f\u8bd5\u56fe\u72ec\u7acb\u5bfb\u627e\u5e94\u7528\u7a0b\u5e8f\u3002\u4e5f\u8bb8\u4ed6\u4eec\u5728\u5df2\u7ecf\u5f88\u6d41\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u60c5\u51b5\u4e0b\u8fd9\u6837\u505a\u3002\\n\\n\u5982\u679c\u60a8\u9700\u8981\u66f4\u591a\u786e\u8ba4\u624d\u80fd\u7ecf\u5e38\u63d0\u4ea4\uff0c\u8fd9\u91cc\u662f[Structured](https://structured.app/)\u80cc\u540e\u7684\u521b\u5efa\u8005[Leo Mehlig](https://twitter.com/leoMehlig)\uff1a\\n\\n> \u6211\u63d0\u4ea4\u4e86\u5f88\u591a\u6b21\uff0c\u540e\u6765\u88ab\u63a8\u8350\u4e86\u3002\u4f46\u76ee\u524d\u5c1a\u4e0d\u6e05\u695a\u8fd9\u662f\u5426\u4e0e\u8868\u683c\u6709\u5173\u3002\\n\\n\u4f3c\u4e4e\u8fde Apple \u90fd\u5efa\u8bae\u9891\u7e41\u63d0\u4ea4\uff0cLeo \u518d\u6b21\uff1a\\n\\n> \u5b9e\u9a8c\u5ba4\u91cc\u6709\u4eba\u544a\u8bc9\u6211\uff0c\u57fa\u672c\u4e0a\u6bcf\u6b21\u5c0f\u7684\u529f\u80fd\u66f4\u65b0\u90fd\u8981\u63d0\u4ea4\u5b83\u3002\\n\\n\u5982\u679c\u60a8\u60f3\u6700\u5927\u9650\u5ea6\u5730\u63d0\u9ad8\u60a8\u7684\u673a\u4f1a\uff0c\u90a3\u4e48\u9664\u4e86\u7ecf\u5e38\u63d0\u4ea4\u4e4b\u5916\uff0c\u60a8\u8fd8\u5e94\u8be5\u5728\u63a5\u8fd1\u65b0\u7684 iOS \u7248\u672c\u65f6\u63d0\u4ea4 - \u5047\u8bbe\u60a8\u5c06\u4f7f\u7528\u65b0\u7684 iOS \u529f\u80fd\u66f4\u65b0\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u6216\u6b63\u5728\u6784\u5efa\u4e00\u4e2a\u5168\u65b0\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\\n\\n## \u63d0\u4ea4\u8868\u683c\\n\\n\u867d\u7136\u4e0e\u6211\u4ea4\u8c08\u8fc7\u7684\u6240\u6709\u5f00\u53d1\u4eba\u5458\u90fd\u540c\u610f\u7ecf\u5e38\u63d0\u4ea4\uff0c\\\\*\u4f46\\\\*\u4f3c\u4e4e\u6bcf\u4e2a\u4eba\u90fd\u6709\u81ea\u5df1\u586b\u5199\u8868\u683c\u7684\u65b9\u6cd5\u3002\\\\*\\\\* \u4f8b\u5982\uff0cEmmanuel \u786e\u4fdd\u5229\u7528\u53ef\u9009\u7684\u201c\u94fe\u63a5\u201d\u90e8\u5206\u5206\u4eab\u4e00\u4e2a\u4e13\u95e8\u7684\u9875\u9762\uff0c\u5c55\u793a CardPointers \u5c06\u63d0\u4f9b\u7684\u6240\u6709\u65b0\u529f\u80fd\uff0c\u4ee5\u53ca\u4e3a\u6b64\u76ee\u7684\u5728 Instagram \u548c TestFlight \u94fe\u63a5\u4e0a\u6258\u7ba1\u7684\u201c\u75c5\u6bd2\u89c6\u9891\u201d\u3002\\n\\n\u53e6\u4e00\u65b9\u9762\uff0cLeo & Wessley \u4e0d\u4f7f\u7528\u201c\u94fe\u63a5\u201d\u90e8\u5206\uff0c\u800c\u662f\u4e13\u6ce8\u4e8e\u8868\u5355\u7684\u5176\u4ed6\u90e8\u5206\u3002**\u4ed6\u4eec\u4e3b\u8981\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u4ed6\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u5c06\u5728\u5373\u5c06\u5230\u6765\u7684\u66f4\u65b0\u4e2d\u83b7\u5f97\u54ea\u4e9b\u65b0\u529f\u80fd\u4ee5\u53ca\u4ed6\u4eec\u5df2\u7ecf\u63d0\u4f9b\u4e86\u4ec0\u4e48**\u3002\u4e24\u4f4d\u5f00\u53d1\u4eba\u5458\u90fd\u975e\u5e38\u53cb\u5584\uff0c\u5e76\u8be6\u7ec6\u5c55\u793a\u4e86\u4ed6\u4eec\u63d0\u4ea4\u7684\u4f5c\u54c1\u901a\u5e38\u7684\u6837\u5b50\u3002\\n\\nWessley \u503e\u5411\u4e8e\u63d0\u4ea4\u7b80\u660e\u627c\u8981\u7684\u7b54\u6848\uff0c\u91cd\u70b9\u5f3a\u8c03\u8981\u70b9\u5217\u8868\uff0c\u4ee5\u4ecb\u7ecd\u65b0\u529f\u80fd\u5e76\u63cf\u8ff0\u73b0\u6709\u529f\u80fd\u3002\u53e6\u4e00\u65b9\u9762\uff0cLeo \u5199\u7684\u7b54\u6848\u66f4\u957f\uff0c\u51e0\u4e4e\u8fbe\u5230\u4e86\u51e0\u4e2a\u7b54\u6848\u7684 1000 \u4e2a\u5b57\u7b26\u7684\u9650\u5236\u3002\\n\\n\u5bf9\u6211\u6765\u8bf4\uff0c\u8fd9\u91cc\u7684\u8981\u70b9\u662f\u4e0d\u8981\u592a\u5f3a\u8c03\u683c\u5f0f\uff0c**\u800c\u662f\u786e\u4fdd\u63d0\u4f9b\u5fc5\u8981\u7684\u4fe1\u606f\u3002**\\n\\n\u5c3d\u7ba1 Apple \u5efa\u8bae\u5728\u65b0\u5e94\u7528\u53d1\u5e03\u6216\u66f4\u65b0\u524d\u4e09\u5468\u6216\u66f4\u957f\u65f6\u95f4\u63d0\u4ea4\u8868\u5355\uff0c\u4f46\u6309\u66f4\u7d27\u51d1\u7684\u65f6\u95f4\u8868\u63d0\u4ea4\u4f3c\u4e4e\u4e0d\u4f1a\u7834\u574f\u4ea4\u6613\u3002\u5982\u679c\u60a8\u4ecd\u7136\u5c1d\u8bd5\u5c3d\u53ef\u80fd\u63d0\u524d\u63d0\u4ea4\uff0c\u90a3\u5c06\u662f\u6700\u597d\u7684\uff0c\u4f46\u5f53\u60a8\u6ca1\u6709\u65f6\u95f4\u65f6\u4e0d\u8981\u6c14\u9981\u3002\\n\\n## \u51c6\u5907\u5ba3\u4f20\u56fe\u7247\\n\\n\u5982\u679c\u60a8\u6709\u5e78\u88ab\u9009\u4e2d\u53c2\u52a0\u66f4\u7a81\u51fa\u7684\u4fc3\u9500\u6d3b\u52a8\uff0c**Apple \u4f1a\u56de\u590d\u60a8\u5e76\u8981\u6c42\u5c06\u4fc3\u9500\u56fe\u7247**\u5305\u542b\u5728\u8be5\u529f\u80fd\u4e2d\u3002\u8fd9\u4e9b\u9700\u8981\u4ee5 PSD \u683c\u5f0f\u63d0\u4ea4\uff08Photoshop \u4f7f\u7528\uff0c\u4f46\u5176\u4ed6\u7f16\u8f91\u5668\u4e5f\u53ef\u4ee5\u5c06\u5176\u5bfc\u51fa\uff09\u3002\u60a8\u5e94\u8be5\u6709 5 \u5230 7 \u5929\u7684\u65f6\u95f4\u5c06\u56fe\u5f62\u63d0\u4f9b\u7ed9 Apple\u3002\\n\\n\u60a8\u53ef\u4ee5\u81ea\u5df1\u521b\u5efa\u8fd9\u4e9b\uff0c\u8fd9\u53d6\u51b3\u4e8e\u60a8\u4f7f\u7528 Photoshop \u6216\u5176\u4ed6\u56fe\u5f62\u8f6f\u4ef6\u7684\u8212\u9002\u7a0b\u5ea6\u3002\u6d4f\u89c8\u5f53\u524d\u7684 App Store \u529f\u80fd\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u79cd\u7075\u611f\u3002\\n\\n\u4e0e\u6211\u4ea4\u8c08\u7684\u5f00\u53d1\u4eba\u5458\u901a\u5e38\u4f1a\u63d0\u4ea4\u591a\u79cd\u8bbe\u8ba1\u4f9b Apple \u9009\u62e9\u3002Wessley \u81ea\u5df1\u521b\u5efa\u4e86\u56fe\u5f62\uff0c\u800c Leo \u5728\u81ea\u5df1\u521b\u5efa\u4e86\u7b2c\u4e00\u4e2a\u5ba3\u4f20\u6750\u6599\u540e\u8f6c\u6295\u81ea\u7531\u8bbe\u8ba1\u5e08\u3002\\n\\nEmmanuel \u9080\u8bf7\u4e86\u4f60\u53ef\u80fd\u5728 Twitter \u4e0a\u8ba4\u8bc6\u7684\u8bbe\u8ba1\u5e08 Matthew Skiles\uff0c\u4ed6[\u5728 Twitter \u4e0a](https://twitter.com/matthewskiles)\u5206\u4eab\u4e86\u4ed6\u4e3a\u5f00\u53d1\u4eba\u5458\u521b\u5efa\u7684\u5f88\u68d2\u7684\u5e94\u7528\u7a0b\u5e8f\u56fe\u6807\u3002\\n\\n> - \u539f\u6587(\u82f1\u6587)\uff1a[https://nemecek.be/blog/169/how-to-get-featured-on-the-app-store](https://nemecek.be/blog/169/how-to-get-featured-on-the-app-store)"},{"id":"supporting-password-autofill-for-ios-appilcations","metadata":{"permalink":"/blog/supporting-password-autofill-for-ios-appilcations","source":"@site/blog/2022-08-23-supporting-password-autofill-for-ios-appilcations/index.md","title":"iOS \u5e94\u7528\u5b9e\u73b0\u5bc6\u7801\u81ea\u52a8\u586b\u5145","description":"\u4e86\u89e3\u5982\u4f55\u5728 SwiftUI \u548c UIKit \u5b9e\u73b0 Apple \u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u3002","date":"2022-08-23T00:00:00.000Z","formattedDate":"2022\u5e748\u670823\u65e5","tags":[{"label":"SwiftUI","permalink":"/blog/tags/swift-ui"},{"label":"\u5bc6\u7801","permalink":"/blog/tags/\u5bc6\u7801"},{"label":"UIKit","permalink":"/blog/tags/ui-kit"},{"label":"iOS","permalink":"/blog/tags/i-os"}],"readingTime":3.405,"hasTruncateMarker":true,"authors":[{"name":"GoSwiftUI","title":"goswiftui.com","url":"https://goswiftui.com","imageURL":"https://goswiftui.com/img/logo.png","key":"swift"}],"frontMatter":{"slug":"supporting-password-autofill-for-ios-appilcations","title":"iOS \u5e94\u7528\u5b9e\u73b0\u5bc6\u7801\u81ea\u52a8\u586b\u5145","authors":["swift"],"tags":["SwiftUI","\u5bc6\u7801","UIKit","iOS"]},"prevItem":{"title":"\u5982\u4f55\u5728 App Store \u4e0a\u83b7\u5f97\u63a8\u8350","permalink":"/blog/how-to-get-featured-on-the-app-store"},"nextItem":{"title":"AppStore \u8d2d\u4e70\u6210\u529f\u540e\u9000\u6b3e\uff0c\u82f9\u679c\u662f\u5426\u4f1a\u4fdd\u7559\u4f63\u91d1\uff1f","permalink":"/blog/does-apple-keep-its-commission"}},"content":"## \u4e86\u89e3\u5982\u4f55\u5728 SwiftUI \u548c UIKit \u5b9e\u73b0 Apple \u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u3002\\n\\nApple \u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u529f\u80fd\u5141\u8bb8\u7528\u6237\u5728\u4e0d\u540c\u8bbe\u5907\u4e0a\u767b\u5f55\u540c\u4e00\u4e2a\u5e10\u6237\uff0c\u800c\u65e0\u9700\u8bb0\u4f4f\u4ed6\u4eec\u7684\u51ed\u636e\u3002\\n\\n\u4f8b\u5982\uff0c\u5728 Web \u5e94\u7528\u7a0b\u5e8f\u4e2d\u6ce8\u518c\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u751f\u6210\u5bc6\u7801\u5e76\u5c06\u51ed\u636e\u4fdd\u5b58\u5728\u4ed6\u4eec\u7684 iCloud \u94a5\u5319\u4e32\u4e2d\u3002\u5f53\u4ed6\u4eec\u5728\u67d0\u4e2a\u65f6\u5019\u8fd0\u884c\u672c\u673a\u5e94\u7528\u7a0b\u5e8f\u4ee5\u8bbf\u95ee\u540c\u4e00\u5e10\u6237\u65f6\uff0c\u8be5\u5e94\u7528\u7a0b\u5e8f\u4f1a\u5728\u5bc6\u7801 QuickType \u680f\u4e2d\u5efa\u8bae\u4e3a\u7f51\u7ad9\u5b58\u50a8\u7684\u51ed\u636e\u3002\u5728\u7528\u6237\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u540e\uff0c\u5047\u8bbe\u4f7f\u7528 Face ID\uff0c\u7cfb\u7edf\u4f1a\u9884\u5148\u586b\u5199\u51ed\u636e - \u56e0\u6b64\u65e0\u9700\u91cd\u65b0\u8f93\u5165\u5b83\u4eec\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n\u8981\u5728 iOS \u5e94\u7528\u7a0b\u5e8f\u4e2d\u6fc0\u6d3b\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u529f\u80fd\uff0c\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a\\n\\n1. \u8bbe\u7f6e\u5e94\u7528\u7a0b\u5e8f\u7684\u5173\u8054\u57df\u3002\\n2. \u5728\u76f8\u5173\u6587\u672c\u5b57\u6bb5\u4e0a\u8bbe\u7f6e\u6b63\u786e\u7684\u81ea\u52a8\u586b\u5145\u7c7b\u578b\u3002\\n\\n\u8ba9\u6211\u4eec\u66f4\u8be6\u7ec6\u5730\u770b\u4e00\u4e0b\u8fd9\u4e9b\u6b65\u9aa4\u3002\\n\\n### \u4e3a\u5171\u4eab Web \u51ed\u636e\u8bbe\u7f6e\u5e94\u7528\u7684\u5173\u8054\u57df\\n\\n\u5173\u8054\u57df\u5728\u7f51\u7ad9\u548c iOS \u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u5efa\u7acb\u5b89\u5168\u5173\u8054\u3002\u8981\u652f\u6301\u5171\u4eab Web \u51ed\u636e\uff0c\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a\\n\\n1. \u4e3a\u5171\u4eab\u7684 Web \u51ed\u636e\u521b\u5efa\u548c\u914d\u7f6e\u5173\u8054\u7684\u57df\u6587\u4ef6\u3002\\n2. \u5c06\u5173\u8054\u7684\u57df\u6587\u4ef6\u6dfb\u52a0\u5230\u76f8\u5173\u7f51\u7ad9\u3002\\n3. \u5c06\u5173\u8054\u7684\u57df\u6743\u5229\u6dfb\u52a0\u5230 iOS \u5e94\u7528\u7a0b\u5e8f\u3002\\n\\n\u8fd9\u4e9b\u6b65\u9aa4\u4e2d\u7684\u6bcf\u4e00\u4e2a\u90fd\u5728[\u6709\u5173\u76f8\u5173\u57df\u6587\u4ef6](https://tanaschita.com/20220725-quick-guide-on-associated-domains-in-ios)\u7684\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u8fdb\u884c\u4e86\u66f4\u8be6\u7ec6\u7684\u63cf\u8ff0\u3002\\n\\n### \u4f7f\u7528 textContentType \u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145\\n\\n\u8bbe\u7f6e\u5171\u4eab\u7f51\u7edc\u51ed\u636e\u540e\uff0c\u6211\u4eec\u9700\u8981\u505a\u7684\u5c31\u662f\u5728\u4efb\u4f55\u76f8\u5173\u8f93\u5165\u89c6\u56fe\u4e0a\u8bbe\u7f6e textContentType \u5c5e\u6027\u4ee5\u6fc0\u6d3b\u6b63\u786e\u7684\u81ea\u52a8\u586b\u5145\u5efa\u8bae\u3002\\n\\n\u4ee5\u4e0b UITextContentType \u503c\u53ef\u7528\uff1a\\n\\n- .username \u7528\u4e8e\u5e10\u6237\u540d\u79f0\\n- .password \u5bc6\u7801\\n- .newPassword \u7528\u4e8e\u65b0\u5bc6\u7801\\n- .oneTimeCode \u7528\u4e8e\u4e00\u6b21\u6027\u5bc6\u7801\uff0c\u4f8b\u5982\u81ea\u52a8\u5b8c\u6210\u5355\u56e0\u7d20\u77ed\u4fe1\u767b\u5f55\u6d41\u7a0b\u4e2d\u7684\u5b89\u5168\u4ee3\u7801\\n\\n\u8ba9\u6211\u4eec\u770b\u770b\u5982\u4f55\u4e3a SwiftUI \u548c UIKit \u5e94\u7528\u7a0b\u5e8f\u505a\u5230\u8fd9\u4e00\u70b9\u3002\\n\\n#### \u4e3a SwiftUI \u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145\\n\\n\u5728 SwiftUI \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 textContentType(\\\\_:)\u65b9\u6cd5\u8bbe\u7f6e UITextContentType \u503c\uff1a\\n\\n```swift\\nTextField(\\"Enter your email\\", text: $emailAddress)\\n    .textContentType(.username)\\n    .keyboardType(.emailAddress)\\n\\n\\nTextField(\\"Enter your password\\", text: $password)\\n    .textContentType(.password)\\n```\\n\\n\u6839\u636e\u6211\u4eec\u63d0\u4f9b\u7684 textContentType\uff0ciOS \u4f1a\u81ea\u52a8\u9009\u62e9\u4e00\u4e2a\u5339\u914d\u7684\u952e\u76d8\u6765\u663e\u793a\u7ed9\u7528\u6237\u3002\\n\\n\u8981\u5448\u73b0\u4e0d\u540c\u7684\u952e\u76d8\uff0c\u4f8b\u5982\uff0c\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u7535\u5b50\u90ae\u4ef6\u4f5c\u4e3a\u7528\u6237\u540d\uff0c\u6211\u4eec\u53ef\u4ee5\u53e6\u5916\u5c06.keyboardType \u8bbe\u7f6e\u4e3a\u6240\u9700\u7684\u503c\u3002\\n\\n#### \u4e3a UIKit \u542f\u7528\u5bc6\u7801\u81ea\u52a8\u586b\u5145\\n\\nUIKit \u652f\u6301 UITextField\u3001UITextView \u548c\u4efb\u4f55\u91c7\u7528 UITextInput \u534f\u8bae\u7684\u81ea\u5b9a\u4e49\u89c6\u56fe\u4e0a\u7684\u5bc6\u7801\u81ea\u52a8\u586b\u5145\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 textContentType \u5b9e\u4f8b\u5c5e\u6027\u8bbe\u7f6e UITextContentType \u503c\uff1a\\n\\n```swift\\nuserTextField.textContentType = .username\\nuserTextField.keyboardType = .emailAddress\\npasswordTextField.textContentType = .password\\n```\\n\\n> \u539f\u6587(\u82f1\u6587)\uff1a[https://tanaschita.com/20220815-supporting-password-autofill-for-ios-appilcations](https://tanaschita.com/20220815-supporting-password-autofill-for-ios-appilcations)"},{"id":"does-apple-keep-its-commission","metadata":{"permalink":"/blog/does-apple-keep-its-commission","source":"@site/blog/2022-08-22-does-apple-keep-its-commission/index.md","title":"AppStore \u8d2d\u4e70\u6210\u529f\u540e\u9000\u6b3e\uff0c\u82f9\u679c\u662f\u5426\u4f1a\u4fdd\u7559\u4f63\u91d1\uff1f","description":"AppStore \u8d2d\u4e70\u6210\u529f\u540e\u9000\u6b3e\uff0c\u82f9\u679c\u662f\u5426\u4f1a\u4fdd\u7559\u4f63\u91d1\uff1f","date":"2022-08-22T00:00:00.000Z","formattedDate":"2022\u5e748\u670822\u65e5","tags":[{"label":"AppStore","permalink":"/blog/tags/app-store"},{"label":"\u9000\u6b3e","permalink":"/blog/tags/\u9000\u6b3e"},{"label":"\u4f63\u91d1","permalink":"/blog/tags/\u4f63\u91d1"},{"label":"iOS","permalink":"/blog/tags/i-os"}],"readingTime":2.77,"hasTruncateMarker":true,"authors":[{"name":"GoSwiftUI","title":"goswiftui.com","url":"https://goswiftui.com","imageURL":"https://goswiftui.com/img/logo.png","key":"swift"}],"frontMatter":{"slug":"does-apple-keep-its-commission","title":"AppStore \u8d2d\u4e70\u6210\u529f\u540e\u9000\u6b3e\uff0c\u82f9\u679c\u662f\u5426\u4f1a\u4fdd\u7559\u4f63\u91d1\uff1f","authors":["swift"],"tags":["AppStore","\u9000\u6b3e","\u4f63\u91d1","iOS"],"keywords":["AppStore","\u9000\u6b3e","\u4f63\u91d1"],"description":"AppStore \u8d2d\u4e70\u6210\u529f\u540e\u9000\u6b3e\uff0c\u82f9\u679c\u662f\u5426\u4f1a\u4fdd\u7559\u4f63\u91d1\uff1f"},"prevItem":{"title":"iOS \u5e94\u7528\u5b9e\u73b0\u5bc6\u7801\u81ea\u52a8\u586b\u5145","permalink":"/blog/supporting-password-autofill-for-ios-appilcations"}},"content":"\u8fd9\u91cc\u6709\u4e00\u4e2a\u6709\u8da3\u7684\u95ee\u9898\uff0c\u4f3c\u4e4e\u5b9a\u671f\u91cd\u65b0\u51fa\u73b0\uff0c\u4f46\u6ca1\u6709\u660e\u786e\u7684\u7b54\u6848\uff1a\u5728\u7528\u6237\u83b7\u5f97\u5e94\u7528\u7a0b\u5e8f\u5185\u8d2d\u4e70\u9000\u6b3e\u540e\uff0c\u82f9\u679c\u7684\u4f63\u91d1\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f\\n\\n\u6839\u636e[\u4ed8\u8d39\u5e94\u7528\u7a0b\u5e8f\u534f\u8bae](https://developer.apple.com/support/downloads/terms/schedules/Schedule-2-and-3-20220225-English.pdf)\uff0c\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u5185\u8d2d\u4e70\u9000\u6b3e\uff0c\u6240\u6709 iOS \u5f00\u53d1\u4eba\u5458\u5fc5\u987b\u540c\u610f\u4ee5\u4e0b\u653f\u7b56\uff1a\\n\\n**\u201cApple \u5c06\u6709\u6743\u4fdd\u7559\u5176\u9500\u552e\u8be5\u8bb8\u53ef\u5e94\u7528\u7a0b\u5e8f\u7684\u4f63\u91d1\uff0c\u5c3d\u7ba1\u5df2\u5c06\u4ef7\u683c\u9000\u8fd8\u7ed9\u6700\u7ec8\u7528\u6237\u3002\u201d**\\n\\n\x3c!--truncate--\x3e\\n\\n\u591a\u5e74\u6765\uff0c\u7f51\u7edc\u4e0a\u6709\u5f88\u591a\u5173\u4e8e\u8fd9\u4e2a\u95ee\u9898\u7684\u95f2\u804a\uff0c\u4ece Reddit \u548c Hacker News \u5230 Stack Overflow \u548c\u82f9\u679c\u5f00\u53d1\u4eba\u5458\u8bba\u575b\u3002\u8fd9\u662f\u6709\u9053\u7406\u7684\uff0c\u56e0\u4e3a\u4ece\u8868\u9762\u4e0a\u770b\uff0c\u8fd9\u9879\u653f\u7b56\u542c\u8d77\u6765\u5f88\u53ef\u6015\u3002\u5982\u679c Apple \u4fdd\u7559 30% \u7684\u8d2d\u4e70\u9879\u76ee\uff0c\u5e76\u968f\u540e\u9000\u6b3e\uff0c\u5f00\u53d1\u8005\u53ef\u80fd\u4f1a\u635f\u5931\u5f88\u591a\u94b1\u3002\\n\\n\u4f8b\u5982\uff0c\u5047\u8bbe\u60a8\u62e5\u6709\u4e00\u4e2a\u5065\u8eab\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u4e14\u60a8\u7684\u4e00\u4e2a\u7528\u6237\u4e3a\u60a8\u7684 100 \u7f8e\u5143\u5e74\u5ea6\u8ba1\u5212\u8d2d\u4e70\u4e86\u8ba2\u9605\u3002\u4f60\u4ed8\u7ed9\u82f9\u679c 30 \u7f8e\u5143\uff0c\u53ef\u4ee5\u4fdd\u7559 70 \u7f8e\u5143\u3002\u4f46\u662f\uff0c\u5982\u679c\u7528\u6237\u4e3a\u4ed6\u4eec\u7684\u8d2d\u4e70\u9000\u6b3e\uff0c\u4ed6\u4eec\u5c06\u83b7\u5f97 100 \u7f8e\u5143\u7684\u9000\u6b3e\uff0c\u5982\u679c\u82f9\u679c\u6709\u6743\u4fdd\u7559 30%\u7684\u4f63\u91d1\uff0c\u60a8\u5c06\u83b7\u5f97 30 \u7f8e\u5143\u3002\u53ef\u4ee5\u7406\u89e3\uff0c\u8fd9\u8ba9\u8bb8\u591a\u5f00\u53d1\u4eba\u5458\u611f\u5230\u62c5\u5fe7\u3002\\n\\n\u7531\u4e8e\u56f4\u7ed5\u8fd9\u4e2a\u8bdd\u9898\u7684\u4e0d\u786e\u5b9a\u6027\uff0c\u6211\u51b3\u5b9a\u901a\u8fc7\u4ece\u6211\u7684 App Store Connect \u5e10\u6237\u4e2d\u63d0\u53d6\u8be6\u7ec6\u7684\u4ed8\u6b3e\u62a5\u544a\u6765\u6d4b\u8bd5\u5b83\uff1a\\n\\n![img](./Screen-Shot-2022-08-16-at-11.59.49-AM.webp)\\n\\n\u5982\u60a8\u6240\u89c1\uff0c\u82f9\u679c\u5728\u5411\u7528\u6237\u53d1\u653e\u9000\u6b3e\u65f6\u6263\u9664\u4e86\u4f63\u91d1*\u540e*\u4ef7\u683c\uff08\u6807\u6709\u201c\u6269\u5c55\u5408\u4f5c\u4f19\u4f34\u4efd\u989d\u201d\u7684\u5217\uff09\u3002\u56e0\u6b64\uff0c\u82f9\u679c\u6ca1\u6709\u4fdd\u7559\u5176 30%\u7684\u4f63\u91d1\uff0c\u6211\u4e5f\u6ca1\u6709\u635f\u5931\u4efb\u4f55\u94b1\u3002\\n\\n\u5e95\u7ebf\uff1f\u82f9\u679c*\u4fdd\u7559*\u4fdd\u7559\u4f63\u91d1\u91d1\u989d\u7684\u6743\u5229\uff0c\u4f46\u8fd9\u5e76\u4e0d\u610f\u5473\u7740*\u4f1a\u7684*\u3002\u6211\u6000\u7591 Apple \u5728\u6b3a\u8bc8\u6216\u5176\u4ed6\u60c5\u6709\u53ef\u539f\u60c5\u51b5\u7684\u6761\u6b3e\u548c\u6761\u4ef6\u4e2d\u5305\u542b\u6b64\u5185\u5bb9\u3002\\n\\n\u6240\u4ee5\uff0c\u4f60\u62e5\u6709\u5b83\uff01\\n\\n\u867d\u7136\u4ece\u6280\u672f\u4e0a\u8bb2\uff0c\u5373\u4f7f\u5728\u8d2d\u4e70\u9000\u6b3e\u540e\uff0c\u82f9\u679c\u4e5f\u6709\u6743\u4fdd\u7559\u5176\u4f63\u91d1\uff0c\u4f46\u6211\u8fd8\u6ca1\u6709\u542c\u5230\u4efb\u4f55\u786e\u8bca\u6848\u4f8b\u3002\u53ea\u8981\u60a8\u5408\u6cd5\u548c\u4e13\u4e1a\u5730\u8fd0\u8425\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e1a\u52a1\uff0c\u60a8\u5c31\u4e0d\u5e94\u8be5\u6709\u4efb\u4f55\u53ef\u62c5\u5fc3\u7684\u4e8b\u60c5\u3002\\n\\n> \u539f\u6587(\u82f1\u6587)\uff1a[https://www.revenuecat.com/blog/does-apple-keep-its-commission/](https://www.revenuecat.com/blog/does-apple-keep-its-commission/)"}]}')}}]);