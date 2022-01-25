"use strict";(self.webpackChunknode_git_server=self.webpackChunknode_git_server||[]).push([[5934],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,g=s["".concat(d,".").concat(m)]||s[m]||u[m]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2182:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"node-git-server.git.handle",hide_title:!0,custom_edit_url:null,title:"Git.handle() method"},d=void 0,p={unversionedId:"api/node-git-server.git.handle",id:"api/node-git-server.git.handle",title:"Git.handle() method",description:"Home > node-git-server > Git > handle",source:"@site/docs/api/node-git-server.git.handle.md",sourceDirName:"api",slug:"/api/node-git-server.git.handle",permalink:"/node-git-server/docs/api/node-git-server.git.handle",editUrl:null,tags:[],version:"current",frontMatter:{id:"node-git-server.git.handle",hide_title:!0,custom_edit_url:null,title:"Git.handle() method"},sidebar:"tutorialSidebar",previous:{title:"Git.getType() method",permalink:"/node-git-server/docs/api/node-git-server.git.gettype"},next:{title:"Git.list() method",permalink:"/node-git-server/docs/api/node-git-server.git.list"}},c=[{value:"Git.handle() method",id:"githandle-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],u={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/node-git-server/docs/"},"Home")," > ",(0,i.kt)("a",{parentName:"p",href:"/node-git-server/docs/api/node-git-server"},"node-git-server")," > ",(0,i.kt)("a",{parentName:"p",href:"/node-git-server/docs/api/node-git-server.git"},"Git")," > ",(0,i.kt)("a",{parentName:"p",href:"/node-git-server/docs/api/node-git-server.git.handle"},"handle")),(0,i.kt)("h2",{id:"githandle-method"},"Git.handle() method"),(0,i.kt)("p",null,"Handle incoming HTTP requests with a connect-style middleware"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"handle(req: http.IncomingMessage, res: http.ServerResponse): void;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"req"),(0,i.kt)("td",{parentName:"tr",align:null},"http.IncomingMessage"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"res"),(0,i.kt)("td",{parentName:"tr",align:null},"http.ServerResponse"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"void"))}s.isMDXComponent=!0}}]);