import{d as p,_ as h,y as u,b as a,e as t,x as s,A as c,F as v,Z as f,o as l,$ as g,l as x,g as b}from"../modules/vue-CVPr9In-.js";import{u as y,h as N,c as m,b as k}from"../index-DvjAsH0T.js";import{N as w}from"./NoteDisplay-Bkqkyifu.js";import"../modules/shiki-DvXQnsHn.js";const L={id:"page-root"},T={class:"m-4"},V={class:"mb-10"},B={class:"text-4xl font-bold mt-2"},D={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},A={class:"opacity-50"},C=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"},M=p({__name:"print",setup($){const{slides:d,total:_}=y();h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const i=u(()=>d.value.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(l(),a("div",L,[t("div",T,[t("div",V,[t("h1",B,s(c(m).title),1),t("div",D,s(new Date().toLocaleString()),1)]),(l(!0),a(v,null,f(i.value,(e,r)=>(l(),a("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",A,s(e==null?void 0:e.no)+"/"+s(c(_)),1),g(" "+s(e==null?void 0:e.title)+" ",1),C])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(l(),a("hr",F)):b("v-if",!0)]))),128))])]))}}),Z=k(M,[["__file","/home/runner/work/slidev-theme-elysia/slidev-theme-elysia/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{Z as default};
