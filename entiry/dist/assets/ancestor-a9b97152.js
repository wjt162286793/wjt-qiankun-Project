import{d as y,r as u,w as b,o as r,c as _,F as x,A as w,f as S,i as f,m as h,v as g,e as o,_ as A,y as B,b as $,g as V,C,K as D,h as E}from"./index-55ecd9a2.js";const F={class:"parent list-group"},I=y({__name:"child",props:{list:{type:Array,default:()=>[]},valsend:{type:String,default:()=>"hi嗯哼IE"}},emits:["add"],setup(d,{expose:a,emit:e}){const t=d,l=u("");b(l,n=>{});const v=n=>{l.value=n.srcElement.value,e("add",l.value)};return a({sendVal:n=>{l.value="用ref方法改了",console.log("子组件被处罚",n)}}),(n,p)=>(r(),_("ul",F,[(r(!0),_(x,null,w(t.list,s=>(r(),_("li",{class:"list-group-item",key:s},S(s),1))),128)),f(" 子组件传值:"),h(o("input",{type:"text","onUpdate:modelValue":p[0]||(p[0]=s=>t.valsend=s),onInput:v},null,544),[[g,t.valsend]])]))}}),M={};function N(d,a){return"嗯嗯呵呵呵"}const T=A(M,[["render",N]]),U={class:"child-wrap input-group"},L={class:"input-group-append"},H=y({__name:"parent",setup(d){const a=u(["JavaScript","HTML","CSS"]),e=u("哈哈"),t=u(""),l=()=>{a.value.push(t.value),t.value=""},v=s=>{e.value=s},c=u(),n=()=>{console.log(e.value,"是什么"),console.log(c.value,"子组件")},p=()=>{console.log(c,"组件是什么"),c.value.sendVal("111")};return B(()=>{}),(s,i)=>{const k=$("el-button");return r(),_(x,null,[V(I,{list:a.value,onAdd:v,valsend:e.value,ref_key:"childComs",ref:c},null,8,["list","valsend"]),(r(),C(D(T))),o("div",U,[h(o("input",{"onUpdate:modelValue":i[0]||(i[0]=m=>t.value=m),type:"text",class:"form-control",placeholder:"请输入"},null,512),[[g,t.value]]),o("div",L,[o("button",{onClick:l,class:"btn btn-primary"},"添加"),V(k,{type:"primary",onClick:p},{default:E(()=>[f("调用方法")]),_:1})])]),f(" 子组件同步"),h(o("input",{type:"text","onUpdate:modelValue":i[1]||(i[1]=m=>e.value=m),onInput:n},null,544),[[g,e.value]])],64)}}}),K=y({__name:"ancestor",setup(d){return(a,e)=>(r(),C(H))}});export{K as default};
