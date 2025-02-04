(self.webpackChunkmain_website=self.webpackChunkmain_website||[]).push([[5192],{5224:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(4848),s=a(8453),n=a(6557);a(3859),a(9365);const i={description:"Forensics | Medium - Protected",tags:["medium"],sidebar_position:0},o="Protected",l={id:"Forensics/Medium/protected",title:"Protected",description:"Forensics | Medium - Protected",source:"@site/docs/Forensics/Medium/protected.md",sourceDirName:"Forensics/Medium",slug:"/Forensics/Medium/protected",permalink:"/practice/Forensics/Medium/protected",draft:!1,unlisted:!1,editUrl:"https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/tree/development/docs/Forensics/Medium/protected.md",tags:[{inline:!1,label:"Medium",permalink:"/practice/tags/medium",description:"Medium level challenges."}],version:"current",sidebarPosition:0,frontMatter:{description:"Forensics | Medium - Protected",tags:["medium"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Medium - Forensics",permalink:"/practice/category/medium---forensics"},next:{title:"Scanning & Reconnaissance",permalink:"/practice/category/scanning--reconnaissance"}},c={},u=[{value:"Challenge",id:"challenge",level:2},{value:"Solution",id:"solution",level:2},{value:"Credits",id:"credits",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"protected",children:"Protected"})}),"\n",(0,r.jsx)(t.p,{children:"Forensics | Medium - Protected"}),"\n",(0,r.jsx)(t.h2,{id:"challenge",children:"Challenge"}),"\n",(0,r.jsx)(t.p,{children:"We have intercepted a PDF file but it seems to be protected with a password. Can you find a way through?"}),"\n",(0,r.jsxs)(t.p,{children:["Download file: ",(0,r.jsx)("a",{href:a(2042).A,download:!0,children:"protected.pdf"})]}),"\n",(0,r.jsxs)(t.p,{children:["Flag: ",(0,r.jsx)(n.A,{hash:"efca4e4f572283feda8600aefc9a7660d57e50662160eaa92fecedc8db4e3499465cbd4c0fa3305132677b6403ef833c582255d1dc9a50f17236cc12778b4954",algorithm:"sha512"})]}),"\n",(0,r.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Solution Guide"}),(0,r.jsxs)(t.p,{children:["This challenge requires basic understanding of password cracking & Hashcat's dictionary attack so please do ",(0,r.jsx)(t.a,{href:"https://thehackpack.org/practice/PasswordCracking/Easy/rockyou",children:(0,r.jsx)(t.strong,{children:"RockYou"})})," before doing this challenge."]}),(0,r.jsxs)(t.p,{children:["Encrypted PDF files also have a password hash. We can extract it with a tool like John The Ripper (JTR) or an online tool. We will use an online tool: ",(0,r.jsx)(t.a,{href:"https://hashes.com/en/johntheripper/pdf2john",children:"https://hashes.com/en/johntheripper/pdf2john"}),". This online tool uses JTR behind the scenes. Upload the pdf file and you will get the password hash."]}),(0,r.jsxs)(t.p,{children:["Our next step is to figure out the password from the hash. We will be using ",(0,r.jsx)(t.strong,{children:"Kali Linux"})," to demonstrate. The method will be almost identical to the password cracking easy challenge RockYou. However, in that challenge, the hash type was ",(0,r.jsx)(t.code,{children:"MD5"})," but clearly this hash looks nothing like ",(0,r.jsx)(t.code,{children:"MD5"}),". So, let's ask hashcat what type it thinks the hash is. First, place your extracted hash in a text file like ",(0,r.jsx)(t.code,{children:"hash.txt"}),". Then run this command:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"hashcat hash.txt\n"})}),(0,r.jsx)(t.p,{children:"After running this, Hashcat will output the hash type (aka mode)."}),(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Reveal hash mode"}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"10500"})," | PDF 1.4 - 1.6 (Acrobat 5 - 8) | Document"]})]}),(0,r.jsxs)(t.p,{children:["Our next step is to do a dictionary attack. We will use ",(0,r.jsx)(t.code,{children:"rockyou.txt"})," once again as it's the most commonly used one. Recall that hashcat's dictionary attack command is:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"hashcat -a <attack-mode> -m <hash-mode> hash.txt [other_options_like_dictionary]\n"})}),(0,r.jsx)(t.p,{children:"I encourage you to craft the command yourself."}),(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Reveal Command"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"hashcat -a 0 -m 10500 hash.txt /usr/share/wordlists/rockyou.txt.gz\n"})})]}),(0,r.jsx)(t.p,{children:"This may take a few minutes but after a short while, we should see our hash cracked and the password revealed. Now, simply open the PDF file and type the password and you should now see the flag!"})]}),"\n",(0,r.jsx)(t.h2,{id:"credits",children:"Credits"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Author(s): Divesh Gupta (legendile7)"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9365:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});a(6540);var r=a(4164);const s={tabItem:"tabItem_Ymn6"};var n=a(4848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:a,children:t})}},3859:(e,t,a)=>{"use strict";a.d(t,{A:()=>w});var r=a(6540),s=a(4164),n=a(6641),i=a(6347),o=a(205),l=a(8874),c=a(4035),u=a(8776);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:s}}=e;return{value:t,label:a,attributes:r,default:s}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const s=(0,i.W6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,n=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[c,d]=m({queryString:a,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,u.Dv)(a);return[s,(0,r.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:s}),g=(()=>{const e=c??f;return p({value:e,tabValues:n})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,n]),tabValues:n}}var b=a(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(4848);function v(e){let{className:t,block:a,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),s=o[a].value;s!==r&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...n,className:(0,s.A)("tabs__item",g.tabItem,n?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},6557:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var r=a(6540),s=a(1396),n=a.n(s),i=a(4848);const o=e=>{let{hash:t,algorithm:a}=e;const[s,o]=(0,r.useState)(""),[l,c]=(0,r.useState)(""),u=()=>{const e=((e,t)=>{switch(t){case"sha1":return n().SHA1(e).toString();case"sha512":return n().SHA512(e).toString();default:return e}})(s,a);c(e===t?"Correct!":"Incorrect. Try again.")};return(0,i.jsxs)("div",{children:[(0,i.jsxs)("form",{onSubmit:e=>{e.preventDefault(),u()},children:[(0,i.jsx)("input",{type:"text",value:s,onChange:e=>o(e.target.value),placeholder:"Enter answer"}),(0,i.jsx)("button",{type:"submit",children:"Check"})]}),(0,i.jsx)("p",{children:l})]})}},2042:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});const r=a.p+"assets/files/protected-3348a4d5b4c9b7128e9eaccabd3e5993.pdf"},477:()=>{}}]);