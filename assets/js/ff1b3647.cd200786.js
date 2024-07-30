(self.webpackChunkmain_website=self.webpackChunkmain_website||[]).push([[294],{8616:(e,s,a)=>{"use strict";a.r(s),a.d(s,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var t=a(216),r=a(5303),i=a(6372),o=a(5921),n=a.n(o);const h=e=>{let{hash:s,algorithm:a}=e;const[r,o]=(0,i.useState)(""),[h,c]=(0,i.useState)(""),d=()=>{const e=((e,s)=>"sha1"===s?n().SHA1(e).toString():e)(r,a);c(e===s?"Correct!":"Incorrect. Try again.")};return(0,t.jsxs)("div",{children:[(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),d()},children:[(0,t.jsx)("input",{type:"text",value:r,onChange:e=>o(e.target.value),placeholder:"Enter answer"}),(0,t.jsx)("button",{type:"submit",children:"Check"})]}),(0,t.jsx)("p",{children:h})]})},c={description:"Password Cracking | Easy - RockYou",tags:["easy"],sidebar_position:0},d="Easy - RockYou",l={id:"PasswordCracking/easy-rockyou",title:"Easy - RockYou",description:"Password Cracking | Easy - RockYou",source:"@site/docs/PasswordCracking/easy-rockyou.md",sourceDirName:"PasswordCracking",slug:"/PasswordCracking/easy-rockyou",permalink:"/practice/PasswordCracking/easy-rockyou",draft:!1,unlisted:!1,tags:[{inline:!1,label:"Easy",permalink:"/practice/tags/easy",description:"Easy level challenges."}],version:"current",sidebarPosition:0,frontMatter:{description:"Password Cracking | Easy - RockYou",tags:["easy"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Password Cracking",permalink:"/practice/category/password-cracking"},next:{title:"Network Traffic Analysis",permalink:"/practice/category/network-traffic-analysis"}},u={},p=[{value:"Challenge",id:"challenge",level:2},{value:"Solution",id:"solution",level:2}];function x(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"easy---rockyou",children:"Easy - RockYou"}),"\n",(0,t.jsx)(s.p,{children:"Password Cracking | Easy - RockYou"}),"\n",(0,t.jsx)(s.h2,{id:"challenge",children:"Challenge"}),"\n",(0,t.jsx)(s.p,{children:"A password hash was retrieved that needs to be cracked. We have received intel that the password is from the RockYou breach."}),"\n",(0,t.jsxs)(s.p,{children:["Hash: ",(0,t.jsx)(s.code,{children:"1a3dff6f600d9fd62f8ead361480cc61"})]}),"\n",(0,t.jsx)(h,{hash:"661170a5627f56fee07a489f74c2d7f1a54a80fa",algorithm:"sha1"}),"\n",(0,t.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Solution Guide"}),(0,t.jsxs)(s.p,{children:["This challenge involves a popular list of leaked passwords from the RockYou breach. This list is preinstalled in Kali Linux (",(0,t.jsx)(s.code,{children:"/usr/share/wordlists/rockyou.txt.gz"}),") but can also be downloaded ",(0,t.jsx)(s.a,{href:"https://weakpass.com/wordlist/90",children:(0,t.jsx)(s.strong,{children:"here"})}),"."]}),(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["You don't need to unzip ",(0,t.jsx)(s.code,{children:"rockyou.txt.gz"}),"."]})}),(0,t.jsxs)(s.p,{children:["Our first step is to identify the hash type. This can be done with an online tool such as ",(0,t.jsx)(s.a,{href:"https://hashes.com/en/tools/hash_identifier",children:"https://hashes.com/en/tools/hash_identifier"}),". After submitting the hash here, we can see that it is identified as an ",(0,t.jsx)(s.strong,{children:"MD5"})," hash."]}),(0,t.jsxs)(s.p,{children:["Our next step is to crack the hash. We will use a tool called ",(0,t.jsx)(s.strong,{children:"Hashcat"})," for this which is preinstalled in Kali Linux but can also be downloaded ",(0,t.jsx)(s.a,{href:"https://hashcat.net/hashcat/",children:(0,t.jsx)(s.strong,{children:"here"})}),". For the purpose of this tutorial, we will be using Kali Linux."]}),(0,t.jsxs)(s.p,{children:["Hashcat supports many hash modes, denoted by a numerical ID. We know our hash is MD5 so we just need to find the hash mode ID for it. We can find that ",(0,t.jsx)(s.a,{href:"https://hashcat.net/wiki/doku.php?id=example_hashes",children:(0,t.jsx)(s.strong,{children:"here"})}),". Upon searching for MD5 here (it's the first one), we can see the hash mode is ",(0,t.jsx)(s.code,{children:"0"}),"."]}),(0,t.jsxs)(s.p,{children:["Our next step is to choose an attack type. Since we already have a password list (",(0,t.jsx)(s.code,{children:"rockyou.txt"}),"), we will use a ",(0,t.jsx)(s.strong,{children:"Dictionary Attack"}),". The ID for this is attack type is ",(0,t.jsx)(s.code,{children:"0"}),"."]}),(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["You can learn more about hashcat's attack modes ",(0,t.jsx)(s.a,{href:"https://hashcat.net/wiki/doku.php?id=hashcat",children:(0,t.jsx)(s.strong,{children:"here"})})," (scroll to the bottom)."]})}),(0,t.jsx)(s.p,{children:"Now we can craft our command to crack the password. The format of a hashcat attack is:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"hashcat -a <attack-mode> -m <hash-mode> [hash] [other_options_like_dictionary]\n"})}),(0,t.jsx)(s.p,{children:"I encourage you to craft the command yourself."}),(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Reveal Command"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"hashcat -a 0 -m 0 1a3dff6f600d9fd62f8ead361480cc61 /usr/share/wordlists/rockyou.txt.gz\n"})})]}),(0,t.jsx)(s.p,{children:"After executing this command, hashcat will start cracking the hash by hashing every single password in the dictionary and comparing with our hash. This may take a few minutes but after a while, we should see our hash cracked!"})]})]})}function f(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},3936:()=>{}}]);