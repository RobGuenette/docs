"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[851],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),h=l,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7141:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var n=a(3117),l=a(102),i=(a(7294),a(3905)),r=["components"],o={sidebar_position:4},s="Modules & wallet update",d={unversionedId:"wallet-contracts/modules_and_updates",id:"wallet-contracts/modules_and_updates",title:"Modules & wallet update",description:"Sequence modules are the underlying program implementation of the wallets; wallets can change modules at runtime.",source:"@site/docs/wallet-contracts/4_modules_and_updates.mdx",sourceDirName:"wallet-contracts",slug:"/wallet-contracts/modules_and_updates",permalink:"/wallet-contracts/modules_and_updates",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/wallet-contracts/4_modules_and_updates.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Wallet Factory",permalink:"/wallet-contracts/wallet_factory"},next:{title:"MainModuleUpgradeable & configuration migration",permalink:"/wallet-contracts/main_module_upgradeable"}},u=[{value:"Wallet implementation",id:"wallet-implementation",children:[{value:"_updateConfiguration",id:"_updateconfiguration",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3},{value:"Reading current implementation",id:"reading-current-implementation",children:[],level:3}],level:2},{value:"Wallet configuration validation",id:"wallet-configuration-validation",children:[{value:"_isValidImage",id:"_isvalidimage",children:[{value:"Parameters:",id:"parameters-1",children:[],level:4},{value:"Return Values:",id:"return-values",children:[],level:4}],level:3}],level:2},{value:"MainModuleUpgradeable",id:"mainmoduleupgradeable",children:[{value:"<code>updateImageHash</code>",id:"updateimagehash",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3}],level:2},{value:"First configuration update",id:"first-configuration-update",children:[{value:"delegateCall: false",id:"delegatecall-false",children:[],level:4},{value:"revertOnError: true",id:"revertonerror-true",children:[],level:4},{value:"to: wallet",id:"to-wallet",children:[],level:4},{value:"value: ethers.constants.Zero",id:"value-ethersconstantszero",children:[],level:4},{value:"gasLimit: ethers.constants.Zero",id:"gaslimit-ethersconstantszero",children:[],level:4},{value:"Subsequent configuration updates",id:"subsequent-configuration-updates",children:[],level:3},{value:"Retrieving the current configuration",id:"retrieving-the-current-configuration",children:[{value:"Retrieving the wallet configuration",id:"retrieving-the-wallet-configuration",children:[],level:4}],level:3}],level:2}],p={toc:u};function c(e){var t=e.components,a=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"modules--wallet-update"},"Modules & wallet update"),(0,i.kt)("p",null,"Sequence modules are the underlying program implementation of the wallets; wallets can change modules at runtime."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MainModule")," is the initial module of every Sequence wallet; it differs from the other modules because it doesn't store the set of signers on contract storage; it uses the ",(0,i.kt)("a",{parentName:"p",href:"/wallet-contracts/wallet_factory#deploy"},"salt")," provided to the Factory contract."),(0,i.kt)("h2",{id:"wallet-implementation"},"Wallet implementation"),(0,i.kt)("p",null,"Sequence modules can be assigned to wallets either by the factory or by updating it after the initial deployment. Only one module can be assigned to a wallet at a time."),(0,i.kt)("h3",{id:"_updateconfiguration"},"_updateConfiguration"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"updateImplementation")," allows to update the underlying implementation of the wallet proxy. This implementation contains all the core code that defines the wallet's behaviour."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Dangerous operation")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"updateImplementation")," with an invalid implementation will result in the corruption of the wallet."),(0,i.kt)("p",{parentName:"div"},"Corrupt wallets may lead to the loss of funds."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function updateImplementation(\n  address _implementation\n) external override onlySelf {\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_implementation"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"Address of the new wallet implementation.")))),(0,i.kt)("p",null,"This method has the ",(0,i.kt)("inlineCode",{parentName:"p"},"onlySelf")," modifier, which means that it can only be called by the wallet itself using a self-referencing transaction. Calls to this method coming from other addresses, even if these addresses are signers of the wallet, will be rejected."),(0,i.kt)("h3",{id:"reading-current-implementation"},"Reading current implementation"),(0,i.kt)("p",null,"The wallet implementation is stored on the contract storage slot defined by the address of the wallet itself. Given that every wallet has a unique address, the implementation slot varies from wallet to wallet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import "ethers"\n\nconst wallet = "0x596af90cecdbf9a768886e771178fd5561dd27ab"\nconst provider = new ethers.providers.JsonRpcProvider("http://localhost:8545")\n\n// Read storage slot address(address)\nconst slot = await provider.getStorageAt(address, ethers.utils.defaultAbiCoder.encode([\'address\'], [address]))\n\n// Decode bytes32 as address value\nconst implementation = ethers.utils.defaultAbiCoder.decode([\'address\'], slot)[0]\n\nconsole.log(implementation)\n')),(0,i.kt)("h2",{id:"wallet-configuration-validation"},"Wallet configuration validation"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Fixed configuration")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Signer's configuration on wallets using ",(0,i.kt)("inlineCode",{parentName:"p"},"MainModule")," can't be changed. The only way to change the set of signers or thershold is by updating the module of the wallet."))),(0,i.kt)("p",null,"All sequence modules must implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"ModuleAuth")," interface, this interface allows the rest of the module to validate signatures for the wallet. In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"MainModule")," this interface is implemented as a counter-factual validation of hash passed to the factory during the contract wallet creation."),(0,i.kt)("h3",{id:"_isvalidimage"},"_isValidImage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _isValidImage(\n    bytes32 _imageHash\n  ) internal override view returns (bool _isValid)\n")),(0,i.kt)("p",null,"Validates if the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"imageHash")," corresponds to the one configured in the wallet. This function is called internally to validate transaction and message signatures."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"imageHash")," is a hash of the wallet configuration, which contains the wallet's thershold, signers and weights."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_imageHash"),(0,i.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:null},"Hash of wallet configuration to be validated.")))),(0,i.kt)("h4",{id:"return-values"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_isValid"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"True if the given ",(0,i.kt)("inlineCode",{parentName:"td"},"imageHash")," corresponds to the current wallet configuration.")))),(0,i.kt)("h2",{id:"mainmoduleupgradeable"},"MainModuleUpgradeable"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MainModuleUpgradable")," is a module that mimics the behaviour of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainModule")," but allows the wallet configuration to be updated."),(0,i.kt)("h3",{id:"updateimagehash"},(0,i.kt)("inlineCode",{parentName:"h3"},"updateImageHash")),(0,i.kt)("p",null,"Updates the wallet ",(0,i.kt)("inlineCode",{parentName:"p"},"imageHash"),", this is the hash that defines the wallet configuration (signers, weights, thershold)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function updateImageHash(\n    bytes32 _imageHash\n  ) external override onlySelf {\n")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_imageHash"),(0,i.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:null},"Hash of the new configuration for the wallet.")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Unsanitized input")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"imageHash")," is not validated, it is the responsibility of the caller to ensure that the hash is correct. Reasons for incorrect hashes include:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"The combined weight of the signers is below the thershold."),(0,i.kt)("li",{parentName:"ul"},"The signers are not valid addresses."),(0,i.kt)("li",{parentName:"ul"},"The signers are smart contract wallets without proper support for EIP-1271."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"imageHash")," doesn't correspond to any wallet configuration (may be a random string)."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"imageHash")," corresponds to an unknown wallet configuration.")),(0,i.kt)("p",{parentName:"div"},"In any of this cases the wallet will be ",(0,i.kt)("strong",{parentName:"p"},"rendered unusable"),"."))),(0,i.kt)("p",null,"This method has the ",(0,i.kt)("inlineCode",{parentName:"p"},"onlySelf")," modifier, which means that it can only be called by the wallet itself using a self-referencing transaction. Calls to this method coming from other addresses, even if these addresses are signers of the wallet, will be rejected."),(0,i.kt)("h2",{id:"first-configuration-update"},"First configuration update"),(0,i.kt)("p",null,"When Sequence wallets are created, the factory contract doesn't call an ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," function. The configuration is instead defined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"salt")," provided to the factory, the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainModule")," then checks the counterfactual validity of all signatures against the wallet address."),(0,i.kt)("p",null,"This means there is no direct way to update the configuration of a wallet while still using the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainModule"),". Given that the first configuration update needs to also change the wallet implementation to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainModuleUpgradable"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainModule")," is updated to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainModuleUpgradable")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"updateImageHash")," method is called to update the wallet configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const transactions = [\n  {\n    delegateCall: false,\n    revertOnError: true,\n    to: wallet,\n    data: walletInterface.encodeFunctionData(\n      walletInterface.getFunction('updateImplementation'), [this.context.mainModuleUpgradable]\n    ),\n    value: ethers.constants.Zero,\n    gasLimit: ethers.constants.Zero,\n  },\n  {\n    delegateCall: false,\n    revertOnError: true,\n    to: wallet,\n    data: mainModuleInterface.encodeFunctionData(\n      mainModuleInterface.getFunction('updateImageHash'), [newImageHash]\n    ),\n    value: ethers.constants.Zero,\n    gasLimit: ethers.constants.Zero,\n  }\n]\n")),(0,i.kt)("h4",{id:"delegatecall-false"},"delegateCall: false"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"delegateCall")," is used to extend the wallet functionality beyond what's allowed by the module. In this case the called methods are defined on the modules themselves, so there is no need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"delegateCall"),"."),(0,i.kt)("h4",{id:"revertonerror-true"},"revertOnError: true"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"revertOnError")," is used to revert the whole transaction bundle if a transaction flagged by it fails. In this case the operation should be atomic given that a partial wallet configuration update ",(0,i.kt)("strong",{parentName:"p"},"will")," render the wallet unusable."),(0,i.kt)("h4",{id:"to-wallet"},"to: wallet"),(0,i.kt)("p",null,"The methods being called are defined on the wallet itself, but need to be called externally, so the ",(0,i.kt)("inlineCode",{parentName:"p"},"to")," address is the wallet itself."),(0,i.kt)("h4",{id:"value-ethersconstantszero"},"value: ethers.constants.Zero"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," of the transaction is always zero, since the transaction is a self-referencing transaction and doesn't require transfering funds."),(0,i.kt)("h4",{id:"gaslimit-ethersconstantszero"},"gasLimit: ethers.constants.Zero"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"gasLimit")," of the transaction is always zero, since it represents an unlimited amount of gas."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Dangerous operation")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When the wallet is first updated to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainModuleUpgradable")," it doesn't have a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"imageHash")," yet. It's imperative that the ",(0,i.kt)("inlineCode",{parentName:"p"},"imageHash")," is updated before the transaction bundle finishes executing.\nIf the ",(0,i.kt)("inlineCode",{parentName:"p"},"imageHash")," is not updated before the transaction bundle finishes executing, the wallet will be rendered unusable."),(0,i.kt)("p",{parentName:"div"},"For this reason the following considerations should be taken when updating the wallet for the first time:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"All transactions should be marked ",(0,i.kt)("inlineCode",{parentName:"li"},"revertOnError = true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updateImplementation")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"updateImageHash")," should both be declared on the same transaction bundle."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"gasLimit")," of both transactions should be set to unlimited (",(0,i.kt)("inlineCode",{parentName:"li"},"0"),").")))),(0,i.kt)("h3",{id:"subsequent-configuration-updates"},"Subsequent configuration updates"),(0,i.kt)("p",null,"Once the wallet is updated to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainModuleUpgradable")," it can be updated by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"updateImageHash")," method, without any additional transaction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const transactions = [\n  {\n    delegateCall: false,\n    revertOnError: true,\n    to: wallet,\n    data: mainModuleInterface.encodeFunctionData(\n      mainModuleInterface.getFunction('updateImageHash'), [newImageHash]\n    ),\n    value: ethers.constants.Zero,\n    gasLimit: ethers.constants.Zero,\n  }\n]\n")),(0,i.kt)("h3",{id:"retrieving-the-current-configuration"},"Retrieving the current configuration"),(0,i.kt)("p",null,"If the wallet is updated to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainModuleUpgradable")," it can be queried for the current configuration by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"getImageHash")," method."),(0,i.kt)("p",null,"This method should return the wallet's current configuration hash, which can be compared to a list of known wallet configurations to find the correct one."),(0,i.kt)("h4",{id:"retrieving-the-wallet-configuration"},"Retrieving the wallet configuration"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"imageHash")," method returns ",(0,i.kt)("inlineCode",{parentName:"p"},"bytes32(0)")," if the wallet is not yet updated to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainModuleUpgradable"),".\nIn this case the wallet is in a counter-factual state and the ",(0,i.kt)("inlineCode",{parentName:"p"},"imageHash")," can't be directly queried."),(0,i.kt)("p",null,"This is also the case for non-deployed wallets."),(0,i.kt)("p",null,"To find the ",(0,i.kt)("inlineCode",{parentName:"p"},"imageHash")," of a non-deployed or non-updated wallet, a candidate known ",(0,i.kt)("inlineCode",{parentName:"p"},"imageHash")," needs to be compared against the wallet address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  // The code of the wallet proxy contract\n  const WalletProxyBytecode = \"0x603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3\"\n\n  // These values are defined by the wallet context\n  // they must be known in order to validate the counter-factual wallet imageHash\n  const factory = \"0xf9D09D634Fb818b05149329C1dcCFAeA53639d96\"\n  const mainModule = \"0xd01F11855bCcb95f88D7A48492F66410d4637313\"\n\n  // Append the `mainModule` to the `WalletProxyBytecode`\n  // this completed the creation code of the proxy contract\n  // used for computing the wallet address as defined by the CREATE2 opcode\n  const codeHash = ethers.utils.keccak256(\n    ethers.utils.solidityPack(\n      [\n        'bytes',\n        'bytes32'\n      ],\n      [\n        WalletContractBytecode,\n        ethers.utils.hexZeroPad(mainModule, 32)\n      ]\n    )\n  )\n\n  // Compute the wallet address\n  const hash = ethers.utils.keccak256(\n    ethers.utils.solidityPack(\n      [\n        'bytes1',\n        'address',\n        'bytes32',\n        'bytes32'\n      ], [\n        '0xff',\n        context.factory,\n        salt,\n        codeHash\n      ]\n    )\n  )\n\n  const address = ethers.utils.getAddress(ethers.utils.hexDataSlice(hash, 12))\n")))}c.isMDXComponent=!0}}]);