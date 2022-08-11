"use strict";(self.webpackChunknode_git_server=self.webpackChunknode_git_server||[]).push([[941,972,514],{683:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_e});var a=n(7294),l=n(6010),r=n(833),o=n(5281),c=n(3438),i=n(3320),s=n(4477),d=n(1116),m=n(9353),u=n(5999),p=n(2730);const b="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function f(){const{shown:e,scrollToTop:t}=(0,p.a)({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,b,e&&h),type:"button",onClick:t})}var E=n(6775),g=n(7524),v=n(6668),_=n(1327),k=n(7462);function C(e){return a.createElement("svg",(0,k.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const y="collapseSidebarButton_PEFL",I="collapseSidebarButtonIcon_kv0_";function N(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",y),onClick:t},a.createElement(C,{className:I}))}var S=n(9689),Z=n(2466),x=n(4353),T=n(902),A=n(6043),L=n(8596),w=n(9960),M=n(2389);function P(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:p,className:b,href:h}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,v.L)(),E=function(e){const t=(0,M.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),g=(0,c._F)(t,r),_=(0,L.Mg)(h,r),{collapsed:C,setCollapsed:y}=(0,A.u)({initialState:()=>!!p&&(!g&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=(0,x.f)(),S=function(e){void 0===e&&(e=!C),N(e?null:s),y(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const r=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:g,collapsed:C,updateCollapsed:S}),(0,a.useEffect)((()=>{p&&I&&I!==s&&f&&y(!0)}),[p,I,s,y,f]),a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":C},b)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(w.default,(0,k.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!h&&p,"menu__link--active":g}),onClick:p?e=>{null==n||n(t),h?S(!1):(e.preventDefault(),S())}:()=>{null==n||n(t)},"aria-current":_?"page":void 0,"aria-expanded":p?!C:void 0,href:p?null!=E?E:"#":E},d),u),h&&p&&a.createElement(P,{categoryLabel:u,onClick:e=>{e.preventDefault(),S()}})),a.createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(K,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:r,level:i+1})))}var B=n(3919),H=n(9471);const D="menuExternalLink_NmtK";function O(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{href:m,label:u,className:p}=t,b=(0,c._F)(t,r),h=(0,B.Z)(m);return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",p),key:u},a.createElement(w.default,(0,k.Z)({className:(0,l.Z)("menu__link",!h&&D,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:m},h&&{onClick:n?()=>n(t):void 0},d),u,!h&&a.createElement(H.Z,null)))}const W="menuHtmlItem_M9Kj";function j(e){let{item:t,level:n,index:r}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),i&&[W,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:c}})}function R(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(F,(0,k.Z)({item:t},n));case"html":return a.createElement(j,(0,k.Z)({item:t},n));default:return a.createElement(O,(0,k.Z)({item:t},n))}}function z(e){let{items:t,...n}=e;return a.createElement(x.D,null,t.map(((e,t)=>a.createElement(R,(0,k.Z)({key:t,item:e,index:t},n)))))}const K=(0,a.memo)(z),U="menu_SIkG",V="menuWithAnnouncementBar_GW3s";function G(e){let{path:t,sidebar:n,className:r}=e;const c=function(){const{isActive:e}=(0,S.nT)(),[t,n]=(0,a.useState)(e);return(0,Z.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",U,c&&V,r)},a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(K,{items:n,activePath:t,level:1})))}const Y="sidebar_njMd",q="sidebarWithHideableNavbar_wUlq",X="sidebarHidden_VK0M",J="sidebarLogo_isFc";function Q(e){let{path:t,sidebar:n,onCollapse:r,isHidden:o}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,v.L)();return a.createElement("div",{className:(0,l.Z)(Y,c&&q,o&&X)},c&&a.createElement(_.Z,{tabIndex:-1,className:J}),a.createElement(G,{path:t,sidebar:n}),i&&a.createElement(N,{onClick:r}))}const $=a.memo(Q);var ee=n(3102),te=n(3163);const ne=e=>{let{sidebar:t,path:n}=e;const r=(0,te.e)();return a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(K,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function ae(e){return a.createElement(ee.Zo,{component:ne,props:e})}const le=a.memo(ae);function re(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement($,e),l&&a.createElement(le,e))}const oe="expandButton_m80_",ce="expandButtonIcon_BlDH";function ie(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:oe,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:ce}))}const se="docSidebarContainer_b6E3",de="docSidebarContainerHidden_b3ry";function me(e){var t;let{children:n}=e;const l=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},n)}function ue(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:c}=(0,E.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),r((e=>!e))}),[r,i]);return a.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,se,n&&de),onTransitionEnd:e=>{e.currentTarget.classList.contains(se)&&n&&s(!0)}},a.createElement(me,null,a.createElement(re,{sidebar:t,path:c,onCollapse:d,isHidden:i})),i&&a.createElement(ie,{toggleSidebar:d}))}const pe={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function be(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(pe.docMainContainer,(t||!r)&&pe.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced)},n))}const he="docPage__5DB",fe="docsWrapper_BCFX";function Ee(e){let{children:t}=e;const n=(0,d.V)(),[l,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:fe},a.createElement(f,null),a.createElement("div",{className:he},n&&a.createElement(ue,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),a.createElement(be,{hiddenSidebarContainer:l},t)))}var ge=n(4972),ve=n(197);function _e(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(ge.default,null);const{docElement:m,sidebarName:u,sidebarItems:p}=n;return a.createElement(a.Fragment,null,a.createElement(ve.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:u,items:p},a.createElement(Ee,null,m)))))}},4972:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(7294),l=n(5999),r=n(833),o=n(9353);function c(){return a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4353:(e,t,n)=>{n.d(t,{D:()=>c,f:()=>i});var a=n(7294),l=n(902);const r=Symbol("EmptyContext"),o=a.createContext(r);function c(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(o.Provider,{value:r},t)}function i(){const e=(0,a.useContext)(o);if(e===r)throw new l.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,n)=>{n.d(t,{a:()=>o});var a=n(7294),l=n(2466),r=n(5936);function o(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),c=(0,a.useRef)(!1),{startScroll:i,cancelScroll:s}=(0,l.Ct)();return(0,l.RF)(((e,n)=>{let{scrollY:a}=e;const l=null==n?void 0:n.scrollY;l&&(c.current?c.current=!1:a>=l?(s(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,r.S)((e=>{e.location.hash&&(c.current=!0,o(!1))})),{shown:n,scrollToTop:()=>i(0)}}},3660:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const a=n(7294).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=a},6454:(e,t,n)=>{const a=["options","packages"];function l(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n(60),n(8878);const r=n(7294),o=n(683),c=n(3660),i=e=>e&&e.__esModule?e:{default:e},s=i(r),d=i(o);function m(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function u(e,t,n){return Object.entries(e).forEach((a=>{let[l,r]=a;if("id"===l){const a="type"in e;(!a||a&&"reference"!==e.type)&&(t[Number(r)]=e,n&&(e.parentId=n.id))}else Array.isArray(r)?r.forEach((n=>{m(n)&&u(n,t,e)})):m(r)&&u(r,t,e)})),t}function p(e){const t={};return e.forEach((e=>{e.entryPoints.forEach((e=>{u(e.reflection,t)}))})),t}e.exports=function(e){let t=e.options,n=e.packages,o=l(e,a);const i=r.useMemo((()=>({options:t,reflections:p(n)})),[t,n]);return s.default.createElement(c.ApiDataContext.Provider,{value:i},s.default.createElement("div",{className:"apiPage"},s.default.createElement(d.default,o)))}},60:(e,t,n)=>{n.r(t)},8878:(e,t,n)=>{n.r(t)}}]);