"use strict";(self.webpackChunknode_git_server=self.webpackChunknode_git_server||[]).push([[920],{6622:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(7294),r=a(2263),s=a(8084),c=a(9353),l=a(5742),u=a(9960),o=a(6775),h=a(412);const m=function(){const e=(0,o.k6)(),t=(0,o.TH)(),{siteConfig:{baseUrl:a}}=(0,r.default)();return{searchValue:h.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>a+"search?q="+encodeURIComponent(e)}};var p=a(9224),i=a(5310),d=a(7063),f=a(4020),_=a(846),g=a(4420);function E(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,((e,a)=>Object.prototype.hasOwnProperty.call(t,a)?String(t[a]):e))}const S="searchQueryInput_eyRo",v="searchResultItem_pv6_",y="searchResultItemPath_scMq",w="searchResultItemSummary_EXzh";function k(e){let{searchResult:{document:t,type:a,page:r,tokens:s,metadata:c}}=e;const l=0===a,o=2===a,h=(l?t.b:r.b).slice(),m=o?t.s:t.t;return l||h.push(r.t),n.createElement("article",{className:v},n.createElement("h2",null,n.createElement(u.default,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,d.C)(m,s):(0,f.o)(m,(0,_.m)(c,"t"),s,100)}})),h.length>0&&n.createElement("p",{className:y},h.join(" \u203a ")),o&&n.createElement("p",{className:w,dangerouslySetInnerHTML:{__html:(0,f.o)(t.t,(0,_.m)(c,"t"),s,100)}}))}const b=function(){const{siteConfig:{baseUrl:e}}=(0,r.default)(),{indexHash:t,removeDefaultStopWordFilter:a,translations:u}=(0,s.eZ)("docusaurus-plugin-search-local"),{searchValue:o,updateSearchPath:h}=m(),[d,f]=(0,n.useState)(o),[_,v]=(0,n.useState)(),[y,w]=(0,n.useState)(),b=(0,n.useMemo)((()=>d?E(u.search_results_for,{keyword:d}):u.search_the_documentation),[d,u.search_results_for,u.search_the_documentation]);(0,n.useEffect)((()=>{h(d),_&&(d?_(d,(e=>{w(e)})):w(void 0))}),[d,_,h]);const q=(0,n.useCallback)((e=>{f(e.target.value)}),[]);return(0,n.useEffect)((()=>{o&&o!==d&&f(o)}),[d,o]),(0,n.useEffect)((()=>{!async function(){const{wrappedIndexes:n}=await(0,p.w)(e,t);v((()=>(0,i.v)({wrappedIndexes:n,removeDefaultStopWordFilter:a,resultsLimit:100,onResults:(e,t)=>{var a;"undefined"!=typeof _paq&&_paq&&null!=(a=_paq)&&a.push&&_paq.push(["trackSiteSearch",e,!1,t.length]),void 0!==typeof gtag&&"function"==typeof gtag&&gtag("event","search",{search_term:e})}})))}()}),[e,t,a]),n.createElement(c.Z,null,n.createElement(l.Z,null,n.createElement("meta",{property:"robots",content:"noindex, follow"})),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("h1",null,b),n.createElement("input",{type:"search",name:"q",className:S,"aria-label":"Search",onChange:q,value:d,autoComplete:"off",autoFocus:!0}),!_&&d&&n.createElement("div",null,n.createElement(g.Z,null)),y&&(y.length>0?n.createElement("p",null,E(1===y.length?u.count_documents_found:u.count_documents_found_plural,{count:y.length})):n.createElement("p",null,u.no_documents_were_found)),n.createElement("section",null,y&&y.map((e=>n.createElement(k,{key:e.document.i,searchResult:e}))))))}}}]);