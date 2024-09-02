"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7643],{6010:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});a(758);var s=a(3526),r=a(4130),n=a(4986),i=a(5967),l=a(2480),o=a(5126),c=a(9610),d=a(859),m=a(724),u=a(3913),g=a(6070);function h(e){const t=(0,u.kJ)(e);return(0,g.jsx)(m.A,{children:(0,g.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function x(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.A)(),{blogDescription:s,blogTitle:i,permalink:l}=t,o="/"===l?a:i;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.be,{title:o,description:s}),(0,g.jsx)(c.A,{tag:"blog_posts_list"})]})}function p(e){const{metadata:t,items:a,sidebar:s}=e;return(0,g.jsxs)(l.A,{sidebar:s,children:[(0,g.jsx)(d.A,{items:a}),(0,g.jsx)(o.A,{metadata:t})]})}function j(e){return(0,g.jsxs)(n.e3,{className:(0,s.A)(i.G.wrapper.blogPages,i.G.page.blogListPage),children:[(0,g.jsx)(x,{...e}),(0,g.jsx)(h,{...e}),(0,g.jsx)(p,{...e})]})}},5126:(e,t,a)=>{a.d(t,{A:()=>i});a(758);var s=a(4264),r=a(2579),n=a(6070);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,n.jsx)(r.A,{permalink:a,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,n.jsx)(r.A,{permalink:i,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},6685:(e,t,a)=>{a.d(t,{A:()=>O});a(758);var s=a(3526),r=a(3913),n=a(6070);function i(e){let{children:t,className:a}=e;return(0,n.jsx)("article",{className:a,children:t})}var l=a(1886);const o={title:"title_ZGuY"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.e7)(),{permalink:c,title:d}=a,m=i?"h1":"h2";return(0,n.jsx)(m,{className:(0,s.A)(o.title,t),children:i?d:(0,n.jsx)(l.A,{to:c,children:d})})}var d=a(4264),m=a(6401),u=a(514);const g={container:"container_R4I8"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,n.jsx)(n.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,n.jsx)("time",{dateTime:t,children:a})}function p(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,r.e7)(),{date:i,readingTime:l}=a,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,s.A)(g.container,"margin-vert--md",t),children:[(0,n.jsx)(x,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{}),(0,n.jsx)(h,{readingTime:l})]})]});var c}var A=a(7766);const b={authorCol:"authorCol_e4Ag",imageOnlyAuthorRow:"imageOnlyAuthorRow_v6Nk",imageOnlyAuthorCol:"imageOnlyAuthorCol_oSA5"};function f(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,n.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",l?b.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,n.jsx)("div",{className:(0,s.A)(!l&&(o?"col col--12":"col col--6"),l?b.imageOnlyAuthorCol:b.authorCol),children:(0,n.jsx)(A.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(c,{}),(0,n.jsx)(j,{}),(0,n.jsx)(f,{})]})}var N=a(2463),T=a(9953);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,r.e7)();return(0,n.jsx)("div",{id:i?N.LU:void 0,className:(0,s.A)("markdown",a),children:(0,n.jsx)(T.A,{children:t})})}var k=a(5967),y=a(7688),P=a(2856);function R(){return(0,n.jsx)("b",{children:(0,n.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function U(e){const{blogPostTitle:t,...a}=e;return(0,n.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,n.jsx)(R,{})})}function C(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:a,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=a.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||d||c);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,n.jsx)("div",{className:(0,s.A)("row","margin-top--sm",k.G.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(P.A,{tags:a})})}),e&&(0,n.jsx)(y.A,{className:(0,s.A)("margin-top--sm",k.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,n.jsx)("div",{className:(0,s.A)("col",{"col--9":m}),children:(0,n.jsx)(P.A,{tags:a})}),m&&(0,n.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":u}),children:(0,n.jsx)(U,{blogPostTitle:i,to:e.permalink})})]})}function O(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(i,{className:(0,s.A)(l,a),children:[(0,n.jsx)(v,{}),(0,n.jsx)(w,{children:t}),(0,n.jsx)(C,{})]})}},859:(e,t,a)=>{a.d(t,{A:()=>i});a(758);var s=a(3913),r=a(6685),n=a(6070);function i(e){let{items:t,component:a=r.A}=e;return(0,n.jsx)(n.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,n.jsx)(s.in,{content:t,children:(0,n.jsx)(a,{children:(0,n.jsx)(t,{})})},t.metadata.permalink)}))})}}}]);