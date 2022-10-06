"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[401],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),r=t(7294),l=t(6010),o=t(2389),i=t(7392),s=t(7094),u=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t;const{lazy:o,block:d,defaultValue:m,values:h,groupId:f,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),x=(0,i.l)(y,((e,n)=>e.value===n.value));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(n=null!=m?m:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[I,q]=(0,r.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=f){const e=v[f];null!=e&&e!==I&&y.some((n=>n.value===e))&&q(e)}const T=e=>{const n=e.currentTarget,t=N.indexOf(n),a=y[t].value;a!==I&&(O(n),q(a),null!=f&&w(f,String(a)))},P=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=N.indexOf(e.currentTarget)+1;t=null!=(a=N[n])?a:N[0];break}case"ArrowLeft":{var r;const n=N.indexOf(e.currentTarget)-1;t=null!=(r=N[n])?r:N[N.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},y.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:e=>N.push(e),onKeyDown:P,onFocus:T,onClick:T},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(k.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==I})))))}function m(e){const n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},3593:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));t(5488),t(5162);const l={sidebar_label:"Installation"},o="Indexer Installation",i={unversionedId:"indexer/installation",id:"indexer/installation",title:"Indexer Installation",description:"Sequence Indexer is a simple API to query any blockchain token and NFT data. Below are instructions",source:"@site/docs/04-indexer/02-installation.mdx",sourceDirName:"04-indexer",slug:"/indexer/installation",permalink:"/indexer/installation",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/04-indexer/02-installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Installation"},sidebar:"sidebar",previous:{title:"Indexer",permalink:"/indexer"},next:{title:"All tokens in a wallet",permalink:"/indexer/guides/fetch-tokens"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Web / node.js Installation",id:"web--nodejs-installation",level:3},{value:"Go Installation",id:"go-installation",level:3},{value:"Unity or Unreal Installation",id:"unity-or-unreal-installation",level:3}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"indexer-installation"},"Indexer Installation"),(0,r.kt)("p",null,"Sequence Indexer is a simple API to query any blockchain token and NFT data. Below are instructions\non how to integrate the Sequence Indexer API into your Webapps, Games, and backends. In case you missed\nit, please also see the ",(0,r.kt)("a",{parentName:"p",href:"/indexer"},"Indexer Overview"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The Sequence Indexer is built as a HTTP API with RPC endpoints that you may call directly\nfrom your Webapp, Game or server backend. Below you'll find information on the RPC endpoint\nschema with sample curl commands, along with examples in both Javascript/Typescript and Go."),(0,r.kt)("p",null,"We provide SDKs for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js"},"Web / node.js")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/go-sequence"},"Go"),".\nOr if you'd like to integrate the Indexer with another language target, simply follow the API reference below\nto implement the HTTP requests. Additionally, read the Typescript client source code as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/master/packages/indexer/src/indexer.gen.ts"},"reference\nimplementation of the Indexer API client")," as well."),(0,r.kt)("admonition",{title:"Sequence Indexer endpoints",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Sequence Indexer offers the same API across a variety of EVM networks. Make sure to check the Indexer endpoints\nand use the corresponding host for your dapp/game. For example, the Etheruem mainnet the Sequence Indexer endpoint is\n",(0,r.kt)("a",{parentName:"p",href:"https://mainnet-indexer.sequence.app"},"https://mainnet-indexer.sequence.app")," and Polygon is ",(0,r.kt)("a",{parentName:"p",href:"https://polygon-indexer.sequence.app"},"https://polygon-indexer.sequence.app"),"."),(0,r.kt)("p",{parentName:"admonition"},"\ud83c\udf04 ",(0,r.kt)("a",{parentName:"p",href:"/indexer#supported-networks--endpoints"},"View the full list of supported networks and Indexer endpoints here"))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"web--nodejs-installation"},"Web / node.js Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install 0xsequence\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @0xsequence/indexer\n")),(0,r.kt)("p",null,"then in your app,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { SequenceIndexerClient } from '@0xsequence/indexer'\n\n// see https://docs.sequence.xyz/indexer#supported-networks--endpoints for list of\n// indexer hosts for the chain you'd like to query\nconst indexer = new SequenceIndexerClient('https://mainnet-indexer.sequence.app')\n\n// see examples below for the kinds of queries you can make\nconst tokenBalances = await indexer.getTokenBalances(...)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," if you're using ",(0,r.kt)("inlineCode",{parentName:"p"},"@0xsequence/indexer")," from node.js, we recommend using node v18.x or newer."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"go-installation"},"Go Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/0xsequence/go-sequence@latest\n")),(0,r.kt)("p",null,"then in your app,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/0xsequence/go-sequence/indexer"\n)\n\n// see https://docs.sequence.xyz/indexer#supported-networks--endpoints for list of\n// indexer hosts for the chain you\'d like to query\nseqIndexer := indexer.NewIndexerClient("https://mainnet-indexer.sequence.app", http.DefaultClient)\n\n// see examples below for the kinds of queries you can make\ntokenBalances, err := seqIndexer.GetTokenBalances(...)\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"unity-or-unreal-installation"},"Unity or Unreal Installation"),(0,r.kt)("p",null,"The Sequence Indexer is integrated directly inside of the respective ",(0,r.kt)("a",{parentName:"p",href:"/games-sdk"},"Sequence Web3 Unity")," and ",(0,r.kt)("a",{parentName:"p",href:"/games-sdk"},"Sequence Web3 Unreal")," SDKs."),(0,r.kt)("br",null))}p.isMDXComponent=!0}}]);