import{r as l,E as a,y as r,G as c,H as u,I as d,J as f,_ as g,o as p,c as m,e as t,f as U}from"./index-55ecd9a2.js";const b={beforeCreate(){console.log("beforeCreate()")},created(){console.log("created")},beforeMount(){console.log("beforeMount")},mounted(){console.log("mounted")},beforeUpdate(){console.log("beforeUpdate")},updated(){console.log("updated")},beforeUnmount(){console.log("beforeUnmount")},unmounted(){console.log("unmounted")},setup(){const e=l("abc"),o=()=>{e.value+="--"};return a(()=>{console.log("--onBeforeMount")}),r(()=>{console.log("--onMounted")}),c(()=>{console.log("--onBeforeUpdate")}),u(()=>{console.log("--onUpdated")}),d(()=>{console.log("--onBeforeUnmount")}),f(()=>{console.log("--onUnmounted")}),{msg:e,update:o}}},i={class:"about"},_=t("hr",null,null,-1);function B(e,o,M,n,C,h){return p(),m("div",i,[t("h2",null,"msg: "+U(n.msg),1),_,t("button",{onClick:o[0]||(o[0]=(...s)=>n.update&&n.update(...s))},"更新")])}const x=g(b,[["render",B]]);export{x as default};
