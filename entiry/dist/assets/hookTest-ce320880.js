import{r as s,y as a,J as r,_ as u,o as i,c as d,e as l,f as c}from"./index-55ecd9a2.js";function p(){const e=s(-1),n=s(-1),t=o=>{e.value=o.pageX,n.value=o.pageY};return a(()=>{document.addEventListener("click",t)}),r(()=>{document.removeEventListener("click",t)}),{x:e,y:n}}const f={setup(){const{x:e,y:n}=p();return{x:e,y:n}}};function _(e,n,t,o,m,x){return i(),d("div",null,[l("h2",null,"x: "+c(o.x)+", y: "+c(o.y),1)])}const y=u(f,[["render",_]]);export{y as default};