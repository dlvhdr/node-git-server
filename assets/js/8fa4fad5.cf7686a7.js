"use strict";(self.webpackChunknode_git_server=self.webpackChunknode_git_server||[]).push([[2460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},328:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={id:"node-git-server.createaction",hide_title:!0,custom_edit_url:null,title:"createAction() function"},o=void 0,c={unversionedId:"api/node-git-server.createaction",id:"api/node-git-server.createaction",title:"createAction() function",description:"Home > node-git-server > createAction",source:"@site/docs/api/node-git-server.createaction.md",sourceDirName:"api",slug:"/api/node-git-server.createaction",permalink:"/node-git-server/docs/api/node-git-server.createaction",editUrl:null,tags:[],version:"current",frontMatter:{id:"node-git-server.createaction",hide_title:!0,custom_edit_url:null,title:"createAction() function"},sidebar:"tutorialSidebar",previous:{title:"basicAuth() function",permalink:"/node-git-server/docs/api/node-git-server.basicauth"},next:{title:"FetchData.commit property",permalink:"/node-git-server/docs/api/node-git-server.fetchdata.commit"}},l=[{value:"createAction() function",id:"createaction-function",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],p={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/node-git-server/docs/"},"Home")," > ",(0,a.kt)("a",{parentName:"p",href:"/node-git-server/docs/api/node-git-server"},"node-git-server")," > ",(0,a.kt)("a",{parentName:"p",href:"/node-git-server/docs/api/node-git-server.createaction"},"createAction")),(0,a.kt)("h2",{id:"createaction-function"},"createAction() function"),(0,a.kt)("p",null,"responds with the correct service depending on the action"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function createAction(opts: ServiceOptions, req: http.IncomingMessage, res: http.ServerResponse): Service;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"opts"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/node-git-server/docs/api/node-git-server.serviceoptions"},"ServiceOptions")),(0,a.kt)("td",{parentName:"tr",align:null},"options to pass Service")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"req"),(0,a.kt)("td",{parentName:"tr",align:null},"http.IncomingMessage"),(0,a.kt)("td",{parentName:"tr",align:null},"http request object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"res"),(0,a.kt)("td",{parentName:"tr",align:null},"http.ServerResponse"),(0,a.kt)("td",{parentName:"tr",align:null},"http response")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/node-git-server/docs/api/node-git-server.service"},"Service")))}s.isMDXComponent=!0}}]);