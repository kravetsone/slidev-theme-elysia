function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as a,am as O,an as B,ao as E,y as m,ap as L,aq as P,Q as o,S as w,R,ar as q,d as f,a3 as x,o as u,b as _,F as N,g as k,e as C,Y as c,as as S,c as T,h as D,i as h,ag as I,A as $,at as M,v as A}from"../modules/vue-CVPr9In-.js";import{f as V,_ as W,c as d,b as g,v as G,w as K,x as U,y as H,z as Q}from"../index-CFt5Nv8j.js";import{u as z}from"./context-DLT_xirV.js";const pe=a(!1),fe=a(!1),ve=a(!1),X=a(!1),me=a(!0),ge=O({xs:460,...q}),b=B(),_e=E(),he=m(()=>b.height.value-b.width.value/V.value>120),ye=L(w?document.body:null),y=P(),we=m(()=>{var s,e;return["INPUT","TEXTAREA"].includes(((s=y.value)==null?void 0:s.tagName)||"")||((e=y.value)==null?void 0:e.classList.contains("CodeMirror-code"))}),xe=m(()=>{var s;return["BUTTON","A"].includes(((s=y.value)==null?void 0:s.tagName)||"")});o("slidev-camera","default",{listenToStorageChanges:!1});o("slidev-mic","default",{listenToStorageChanges:!1});const Ce=o("slidev-scale",0),Se=o("slidev-presenter-cursor",!0,{listenToStorageChanges:!1}),be=o("slidev-show-editor",!1,{listenToStorageChanges:!1}),ke=o("slidev-editor-vertical",!1,{listenToStorageChanges:!1});o("slidev-editor-width",w?window.innerWidth*.4:318,{listenToStorageChanges:!1});o("slidev-editor-height",w?window.innerHeight*.4:300,{listenToStorageChanges:!1});const v=o("slidev-presenter-font-size",1,{listenToStorageChanges:!1}),p=o("slidev-presenter-layout",1,{listenToStorageChanges:!1});function Te(){p.value=p.value+1,p.value>2&&(p.value=1)}function $e(){v.value=Math.min(2,v.value+.1)}function Ae(){v.value=Math.max(.5,v.value-.1)}const ze=R(X);function je(s,e=""){var t,n;const i=["slidev-page",e],l=(n=(t=s==null?void 0:s.meta)==null?void 0:t.slide)==null?void 0:n.no;return l!=null&&i.push(`slidev-page-${l}`),i.filter(Boolean).join(" ")}async function Fe(){const{saveAs:s}=await W(()=>import("../modules/file-saver-CvNQQnEe.js").then(e=>e.F),__vite__mapDeps([]));s(typeof d.download=="string"?d.download:d.exportFilename?`${d.exportFilename}.pdf`:"/slidev-theme-elysia/slidev-exported.pdf",`${d.title}.pdf`)}const Y={class:"h-full w-full flex items-center justify-center gap-2 slidev-slide-loading"},J=C("div",{class:"i-svg-spinners-90-ring-with-bg text-xl"},null,-1),Z=C("div",null,"Loading slide...",-1),ee=f({__name:"SlideLoading",setup(s){const e=a(!1);return x(()=>{setTimeout(()=>{e.value=!0},200)}),(i,l)=>(u(),_("div",Y,[e.value?(u(),_(N,{key:0},[J,Z],64)):k("v-if",!0)]))}}),se=g(ee,[["__file","/home/runner/work/slidev-theme-elysia/slidev-theme-elysia/node_modules/@slidev/client/internals/SlideLoading.vue"]]),te=f({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},active:{type:Boolean,default:!1},is:{type:Function,required:!0},route:{type:Object,required:!0}},setup(s){const e=s;c(G,e.route),c(K,a(e.route.no)),c(U,a(e.renderContext)),c(H,S(e,"active")),c(Q,S(e,"clicksContext"));const i=m(()=>{var n,r;const t=((r=(n=e.route.meta)==null?void 0:n.slide)==null?void 0:r.frontmatter.zoom)??1;return t===1?void 0:{width:`${100/t}%`,height:`${100/t}%`,transformOrigin:"top left",transform:`scale(${t})`}}),l=M({loader:async()=>{const t=await e.is();return f({setup(n,{attrs:r}){return x(()=>{e.clicksContext.onMounted()}),()=>A(t.default,r)}})},delay:300,loadingComponent:se});return(t,n)=>(u(),T(I($(l)),{style:D(i.value),class:h({"disable-view-transition":!["slide","presenter"].includes(e.renderContext)})},null,8,["style","class"]))}}),Oe=g(te,[["__scopeId","data-v-b7a9a762"],["__file","/home/runner/work/slidev-theme-elysia/slidev-theme-elysia/node_modules/@slidev/client/internals/SlideWrapper.vue"]]),ae=f({__name:"Ray",props:{class:{type:String,required:!1},animate:{type:Boolean,required:!1},static:{type:Boolean,required:!1}},setup(s){z();const e=s,i=a(e.animate),l=a(e.static),t=a(e.class||"h-screen"),n=a(typeof window<"u"?navigator.userAgent.indexOf("Safari")!==-1&&navigator.userAgent.indexOf("Chrome")===-1:!1);return x(()=>{n.value=navigator.userAgent.indexOf("Safari")!==-1&&navigator.userAgent.indexOf("Chrome")===-1}),(r,j)=>(u(),_("div",{class:h(["absolute flex flex-col w-full !max-w-full items-center justify-center bg-transparent transition-bg overflow-hidden",t.value])},[C("div",{class:h(["jumbo absolute -inset-[10px] opacity-50",{"-safari":n.value,"-animate":i.value,"-static":l.value}])},null,2)],2))}}),ne=g(ae,[["__scopeId","data-v-bc788fd0"],["__file","/home/runner/work/slidev-theme-elysia/slidev-theme-elysia/components/Ray.vue"]]),oe={__name:"global-top",setup(s){const{$slidev:e,$nav:i,$clicksContext:l,$clicks:t,$page:n,$renderContext:r,$frontmatter:j}=z();return(le,re)=>{const F=ne;return $(e).nav.currentPage!==2?(u(),T(F,{key:0,class:"h-[150px] top-0 left-0 z-[100] opacity-25 dark:opacity-[.55] pointer-events-none",static:""})):k("v-if",!0)}}},ie=g(oe,[["__file","/home/runner/work/slidev-theme-elysia/slidev-theme-elysia/example/global-top.vue"]]),Be={render(){return[A(ie)]}},Ee={render(){return[]}};export{Ee as G,Oe as S,Be as a,X as b,v as c,Ae as d,pe as e,fe as f,je as g,he as h,$e as i,be as j,Ce as k,ke as l,ve as m,_e as n,Fe as o,p,me as q,xe as r,Se as s,ze as t,we as u,ye as v,b as w,ge as x,Te as y,y as z};
