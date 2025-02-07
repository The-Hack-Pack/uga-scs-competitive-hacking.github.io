"use strict";(self.webpackChunkmain_website=self.webpackChunkmain_website||[]).push([["324"],{6308:function(e,t,n){n.r(t),n.d(t,{default:()=>v});var i=n("3010");n("5170");var r=n("3165"),l=n("333"),o=n("3038"),s=n("2049"),a=n("7910"),c=n("6072"),u=n("8563"),d=n("4019");function f(e){let{nextItem:t,prevItem:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,i.jsx)(d.Z,{...n,subLabel:(0,i.jsx)(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,i.jsx)(d.Z,{...t,subLabel:(0,i.jsx)(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function m(){let{assets:e,metadata:t}=(0,s.nO)(),{title:n,description:r,date:o,tags:a,authors:c,frontMatter:u}=t,{keywords:d}=u,f=e.image??u.image;return(0,i.jsxs)(l.d,{title:u.title_meta??n,description:r,keywords:d,image:f,children:[(0,i.jsx)("meta",{property:"og:type",content:"article"}),(0,i.jsx)("meta",{property:"article:published_time",content:o}),c.some(e=>e.url)&&(0,i.jsx)("meta",{property:"article:author",content:c.map(e=>e.url).filter(Boolean).join(",")}),a.length>0&&(0,i.jsx)("meta",{property:"article:tag",content:a.map(e=>e.label).join(",")})]})}var h=n("8869");function p(){let e=(0,s.iZ)();return(0,i.jsx)(h.Z,{children:(0,i.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n("1441"),g=n("1974");function b(e){let{sidebar:t,children:n}=e,{metadata:r,toc:l}=(0,s.nO)(),{nextItem:o,prevItem:u,frontMatter:d}=r,{hide_table_of_contents:m,toc_min_heading_level:h,toc_max_heading_level:p}=d;return(0,i.jsxs)(a.Z,{sidebar:t,toc:!m&&l.length>0?(0,i.jsx)(x.Z,{toc:l,minHeadingLevel:h,maxHeadingLevel:p}):void 0,children:[(0,i.jsx)(g.Z,{metadata:r}),(0,i.jsx)(c.Z,{children:n}),(o||u)&&(0,i.jsx)(f,{nextItem:o,prevItem:u})]})}function v(e){let t=e.content;return(0,i.jsx)(s.n4,{content:e.content,isBlogPostPage:!0,children:(0,i.jsxs)(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage),children:[(0,i.jsx)(m,{}),(0,i.jsx)(p,{}),(0,i.jsx)(b,{sidebar:e.sidebar,children:(0,i.jsx)(t,{})})]})})}},9322:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(3010);n(5170);var r=n(3165),l=n(3962),o=n(3038),s=n(553);function a(e){let{className:t}=e;return(0,i.jsx)(s.Z,{type:"caution",title:(0,i.jsx)(l.cI,{}),className:(0,r.Z)(t,o.k.common.unlistedBanner),children:(0,i.jsx)(l.eU,{})})}function c(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.T$,{}),(0,i.jsx)(a,{...e})]})}},1974:function(e,t,n){n.d(t,{Z:()=>u});var i=n("3010");n("5170");var r=n("3165"),l=n("3962"),o=n("3038"),s=n("553");function a(e){let{className:t}=e;return(0,i.jsx)(s.Z,{type:"caution",title:(0,i.jsx)(l.ht,{}),className:(0,r.Z)(t,o.k.common.draftBanner),children:(0,i.jsx)(l.xo,{})})}var c=n("9322");function u(e){let{metadata:t}=e,{unlisted:n,frontMatter:r}=t;return(0,i.jsxs)(i.Fragment,{children:[(n||r.unlisted)&&(0,i.jsx)(c.Z,{}),r.draft&&(0,i.jsx)(a,{})]})}},4813:function(e,t,n){n.d(t,{Z:()=>c});var i=n("3010"),r=n("5170"),l=n("4062");function o(e){let t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}var s=n("6838");let a=r.memo(function e(t){let{toc:n,className:r,linkClassName:l,isChild:o}=t;return n.length?(0,i.jsx)("ul",{className:o?void 0:r,children:n.map(t=>(0,i.jsxs)("li",{children:[(0,i.jsx)(s.Z,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,i.jsx)(e,{isChild:!0,toc:t.children,className:r,linkClassName:l})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:u,maxHeadingLevel:d,...f}=e,m=(0,l.L)(),h=u??m.tableOfContents.minHeadingLevel,p=d??m.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,r.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:i,maxHeadingLevel:r}=t;return n.flatMap(t=>{let n=e({toc:t.children,minHeadingLevel:i,maxHeadingLevel:r});return t.level>=i&&t.level<=r?[{...t,children:n}]:n})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t});let i=[];return t.forEach(e=>{let{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):i.push(r)}),i}(t),minHeadingLevel:n,maxHeadingLevel:i}),[t,n,i])}({toc:t,minHeadingLevel:h,maxHeadingLevel:p});return!function(e){let t=(0,r.useRef)(void 0),n=function(){let e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,r.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:i,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:s}=e;function a(){let e=Array.from(document.getElementsByClassName(i)),a=function(e,t){let{anchorTopOffset:n}=t,i=e.find(e=>o(e).top>=n);if(i){var r;return(r=o(i)).top>0&&r.bottom<window.innerHeight/2?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,i=[];for(let e=t;e<=n;e+=1)i.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:l,maxHeadingLevel:s}),{anchorTopOffset:n.current}),c=e.find(e=>a&&a.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===c?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)})}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}},[e,n])}((0,r.useMemo)(()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:p}},[s,c,h,p])),(0,i.jsx)(a,{toc:x,className:n,linkClassName:s,...f})}},1441:function(e,t,n){n.d(t,{Z:()=>o});var i=n("3010");n("5170");var r=n("3165"),l=n("4813");function o(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,r.Z)("tableOfContents_nVUI","thin-scrollbar",t),children:(0,i.jsx)(l.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},3962:function(e,t,n){n.d(t,{T$:function(){return a},cI:function(){return o},eU:function(){return s},ht:function(){return c},xo:function(){return u}});var i=n(3010);n(5170);var r=n(8563),l=n(8869);function o(){return(0,i.jsx)(r.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,i.jsx)(r.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function a(){return(0,i.jsx)(l.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(r.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,i.jsx)(r.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);