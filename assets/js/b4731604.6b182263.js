"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[984],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),y=a,d=m["".concat(l,".").concat(y)]||m[y]||p[y]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8641:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},l="Key Management",s={unversionedId:"private-keys/key_management",id:"private-keys/key_management",title:"Key Management",description:"Each Sequence wallet can be controlled by multiple private keys, acting like a multisignature wallet. Users can either create a Sequence wallet using one of the supported social login options or create a wallet with a private key stored only on that device.",source:"@site/docs/private-keys/1_key_management.mdx",sourceDirName:"private-keys",slug:"/private-keys/key_management",permalink:"/private-keys/key_management",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/private-keys/1_key_management.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Sending a Batch of Transactions",permalink:"/build-with-sequence/send_batch_transactions"},next:{title:"Skyweaver",permalink:"/live-dapps/skyweaver"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"key-management"},"Key Management"),(0,o.kt)("p",null,"Each Sequence wallet can be controlled by multiple private keys, acting like a multisignature wallet. Users can either create a Sequence wallet using one of the supported social login options or create a wallet with a private key stored only on that device."),(0,o.kt)("p",null,"The improved security compared to traditional blockchain wallet comes from the fact that multiple independent keys need to be compromised for a malicious actor to take control of a user\u2019s wallet, instead of a single key. The philosophy is that the more independent private-keys the user adds to their wallet, the more secure their wallet becomes, even if each individual key is only moderately secure on their own."))}m.isMDXComponent=!0}}]);