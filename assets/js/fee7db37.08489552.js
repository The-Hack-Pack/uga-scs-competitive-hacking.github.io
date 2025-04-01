"use strict";(self.webpackChunkmain_website=self.webpackChunkmain_website||[]).push([["6903"],{3350:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>l,metadata:()=>a,assets:()=>u,toc:()=>h,contentTitle:()=>c});var a=JSON.parse('{"id":"LogAnalysis/Medium/math-rock","title":"Math Rock","description":"Log Analysis | Medium - Math Rock","source":"@site/docs/LogAnalysis/Medium/math-rock.md","sourceDirName":"LogAnalysis/Medium","slug":"/LogAnalysis/Medium/math-rock","permalink":"/practice/LogAnalysis/Medium/math-rock","draft":false,"unlisted":false,"editUrl":"https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/tree/development/docs/LogAnalysis/Medium/math-rock.md","tags":[{"inline":false,"label":"Medium","permalink":"/practice/tags/medium","description":"Medium level challenges."}],"version":"current","lastUpdatedAt":1743483092000,"sidebarPosition":4,"frontMatter":{"description":"Log Analysis | Medium - Math Rock","sidebar_position":4,"tags":["medium"]},"sidebar":"tutorialSidebar","previous":{"title":"Medium - Log","permalink":"/practice/category/medium---log"},"next":{"title":"Password Cracking","permalink":"/practice/category/password-cracking"}}'),r=n("5893"),i=n("65"),o=n("2586");function s(e){let{file:t,children:n}=e;return(0,r.jsx)("a",{href:`/${t}`,download:!0,children:n})}n("8168"),n("7645"),n("7294");let l={description:"Log Analysis | Medium - Math Rock",sidebar_position:4,tags:["medium"]},c="Math Rock",u={},h=[{value:"Challenge",id:"challenge",level:2},{value:"Solution",id:"solution",level:2},{value:"Credits",id:"credits",level:2}];function d(e){let t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"math-rock",children:"Math Rock"})}),"\n",(0,r.jsx)(t.p,{children:"Log Analsysis | Medium - Math Rock"}),"\n",(0,r.jsx)(t.h2,{id:"challenge",children:"Challenge"}),"\n",(0,r.jsx)(t.p,{children:"We recorded a beautiful session with Ichika Nito the other day. Unfortunately, a group of mischievous teens broke into our studio and messed with the frequency log data. We need the piece for our marketing, so it is crucial that you find the frequency that was manipulated so that we don\u2019t make our customers\u2019 ears bleed! (Please wrap your answer like such: scs{answer})"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(s,{file:"assets/ugahacks10/ichika-nito.log",children:"ichika-nito.log"}),"\r\n",(0,r.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(9889).Z+""})]}),"\n",(0,r.jsx)(t.admonition,{title:"hint",type:"tip",children:(0,r.jsxs)("b",{children:[(0,r.jsxs)(t.p,{children:["Here is a Python script to help you extract the column data from the log file:\r\n",(0,r.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(882).Z+"",children:"extract.py"})]}),(0,r.jsx)(t.p,{children:"What tool(s) is commonly used for log analysis?"})]})}),"\n",(0,r.jsx)(t.p,{children:"Q1. Which ticker contains the abnormal frequency data point?"}),"\n",(0,r.jsx)(o.Z,{hash:"456e688ee12388847b3d245d8ae5d10f488dcdf1b5ad1a1aa6dddcb9ccc3e23c824e134b9f69fae368e69e18eba67fa5cc1dec6246bf5f58e1a5a2afcd9bac63",algorithm:"sha512"}),"\n",(0,r.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"Solution Guide"}),(0,r.jsxs)(t.p,{children:["Over 75% of log analysis challenges can be solved with ",(0,r.jsx)(t.a,{href:"https://www.microsoft.com/en-us/microsoft-365/excel",children:(0,r.jsx)(t.strong,{children:"Excel"})}),". Thus, ",(0,r.jsx)(t.strong,{children:"Math Rock"})," attempts to be an introduction to using Excel in order to solve log analysis challenges. After mastering Excel, it is recomended to learn DAAS tools like Splunk, Datadog, or Solarwinds to further refine your log analysis skills to become a master in this hacking form."]}),(0,r.jsx)(t.p,{children:"The .log file is seperated into 4 columns: Time, Ticker, Frequency, and Amplitude. Now, we need to find a way to copy and paste each column as it's own column in excel. However, when I try to copy and paste the log file into excel, it puts all the data in one column, which is not what we want. Thus, we rely on good ol' reliable python to extract each individual column of the dataframe."}),(0,r.jsxs)(t.p,{children:["I have provided the python file to help you with extraction in the ",(0,r.jsx)(t.strong,{children:"HINT"}),". Now if there was a way to copy and paste each individual column from the log file to their own respective column in the excel sheet without python, then be my guest. However, in this case, we are using the help of python to seamlessly copy over the data so that the excel sheet can mirror the log file."]}),(0,r.jsx)(t.p,{children:"Although the python file extracts all the columns, we really only need to copy over 'time', 'amplitude' columns, and maybe the 'Ticker' column as well. Once you copied over the numbers and their headers to excel, select ONLY the \u2018frequency\u2019 and \u2018amplitude\u2019 columns. After selecting the two columns, search for \u2018XY scatter\u2019 and select the first scatter plot option. You should see an outlier in the data among the 'Y' axis. There is only one ticker that goes beyond the [-1.00, 1.00] Hertz frequency bound, and that ticker is the flag!"}),(0,r.jsx)(t.p,{children:"P.S. This is the actual frequency data extracted from a snippit of a ichika-nito solo. You can reconvert the audio back into the actual song using Audacity in order to hear the sound byte."})]}),"\n",(0,r.jsx)(t.h2,{id:"credits",children:"Credits"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Author(s): Swapnil Roy (thespcrewroy)"}),"\n"]})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},882:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/files/extract-c5cfbf4beb7ecc5c5a98fb636963a6f0.py"},9889:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/files/ichika-nito-fb951ef18357a0970b31913b5a8d7b73.log"},7645:function(e,t,n){n.d(t,{Z:()=>i});var a=n("5893");n("7294");var r=n("7026");function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",i),hidden:n,children:t})}},8168:function(e,t,n){n.d(t,{Z:()=>y});var a=n("5893"),r=n("7294"),i=n("7026"),o=n("4718"),s=n("6550"),l=n("8714"),c=n("9207"),u=n("9413"),h=n("4510");function d(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var f=n("6735");function p(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),h=e=>{let t=e.currentTarget,n=l[c.indexOf(t)].value;n!==r&&(u(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:l.map(e=>{let{value:t,label:n,attributes:o}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:d,onClick:h,...o,className:(0,i.Z)("tabs__item","tabItem_LNqP",o?.className,{"tabs__item--active":r===t}),children:n??t},t)})})}function g(e){let{lazy:t,children:n,selectedValue:o}=e,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=s.find(e=>e.props.value===o);return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))})}function b(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:a}=e,i=function(e){let{values:t,children:n}=e;return(0,r.useMemo)(()=>{let e=t??d(n).map(e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}});return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[o,f]=(0,r.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let a=n.find(e=>e.default)??n[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:t,tabValues:i})),[p,g]=function(e){let{queryString:t=!1,groupId:n}=e,a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(i),(0,r.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})},[i,a])]}({queryString:n,groupId:a}),[b,y]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[a,i]=(0,h.Nk)(n);return[a,(0,r.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:a}),x=(()=>{let e=p??b;return m({value:e,tabValues:i})?e:null})();return(0,l.Z)(()=>{x&&f(x)},[x]),{selectedValue:o,selectValue:(0,r.useCallback)(e=>{if(!m({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);f(e),g(e),y(e)},[g,y,i]),tabValues:i}}(e);return(0,a.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(p,{...t,...e}),(0,a.jsx)(g,{...t,...e})]})}function y(e){let t=(0,f.Z)();return(0,a.jsx)(b,{...e,children:d(e.children)},String(t))}},2586:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(5893),r=n(7294),i=n(1354),o=n.n(i);let s=e=>{let{hash:t,algorithm:n}=e,[i,s]=(0,r.useState)(""),[l,c]=(0,r.useState)(""),u=(e,t)=>{let n=e.toLowerCase();switch(t){case"sha1":return o().SHA1(n).toString();case"sha512":return o().SHA512(n).toString();default:return n}},h=()=>{u(i,n)===t?c("Correct!"):c("Incorrect. Try again.")};return(0,a.jsxs)("div",{children:[(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),h()},children:[(0,a.jsx)("input",{type:"text",value:i,onChange:e=>s(e.target.value),placeholder:"Enter answer"}),(0,a.jsx)("button",{type:"submit",children:"Check"})]}),(0,a.jsx)("p",{children:l})]})}},7761:function(){}}]);