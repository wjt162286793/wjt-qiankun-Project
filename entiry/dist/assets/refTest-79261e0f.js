import{d as u,r as p,b as a,o as c,c as m,g as o,e as _,f as d,h as i,i as f,F as V}from"./index-55ecd9a2.js";const C=u({__name:"refTest",setup(v){const e=p("字段值"),n=()=>{e.value="哈哈哈"};return(g,t)=>{const l=a("el-input"),s=a("el-button");return c(),m(V,null,[o(l,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=r=>e.value=r)},null,8,["modelValue"]),_("p",null,"值是"+d(e.value),1),o(s,{type:"primary",onClick:n},{default:i(()=>[f("修改值")]),_:1})],64)}}});export{C as default};