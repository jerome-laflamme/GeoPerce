import{a as d}from"./runtime-dom.esm-bundler-ca6b0058.js";import{u as U}from"./campStore-4d950323.js";import"./mapStore-070bf7cb.js";import{b as V,u as C}from"./vue-router-9eb40a9c.js";import{d as E,E as w,J as N,S as n,c as g,V as s,a0 as c,a7 as y,u as l,b as R,$ as I,X as b,e as P,W as B,o as k,Y as M,Z as D,_ as F}from"./_plugin-vue_export-helper-889530a6.js";import"./axios-bff3f665.js";const o=r=>(M("data-v-e3d9980d"),r=r(),D(),r),T={class:"form container flex flex-column"},Y={class:"form-user-info row"},z=o(()=>s("h4",{class:"title"},"Register",-1)),A={class:"input icon"},H=o(()=>s("label",{for:"fullname"},"Full Name",-1)),J=o(()=>s("div",{class:"input-icon"},[s("i",{class:"fa fa-user"})],-1)),L={class:"input icon"},W=o(()=>s("label",{for:"email"},"Email",-1)),X=o(()=>s("div",{class:"input-icon"},[s("i",{class:"fa fa-envelope"})],-1)),Z={class:"input icon"},$=o(()=>s("label",{for:"password"},"Password",-1)),j=o(()=>s("div",{class:"input-icon"},[s("i",{class:"fa-solid fa-key"})],-1)),q={class:"input icon"},G=o(()=>s("label",{for:"password"},"Confirm your password",-1)),K=o(()=>s("div",{class:"input-icon"},[s("i",{class:"fa-solid fa-key"})],-1)),O={key:0},Q=o(()=>s("p",{class:"db-error"},"Please complete all fields",-1)),ss=[Q],es={class:"db-error"},os=o(()=>s("br",null,null,-1)),as=o(()=>s("br",null,null,-1)),ts={class:"register-link"},ls=E({__name:"SignUp",setup(r){const x=C(),p=U();let u=w(!1);const i=w(""),e=N({name:"",local:{email:"",password:""}}),_=n(()=>!!(e.local.password.length&&i.value.length)),m=n(()=>e.local.password.length>=3&&i.value.length>=3),f=n(()=>e.local.password===i.value),v=n(()=>_.value&&f.value&&m.value),h=n(()=>_.value&&!f.value&&!m.value),S=async()=>{if(e.name===""||e.local.email===""||e.local.password==="")return u.value=!0;await p.createUser({...e}),p.error||await x.push("/signin"),u.value=!1};return(is,a)=>(k(),g("div",T,[s("div",Y,[z,s("div",A,[H,c(s("input",{id:"fullname",type:"text",placeholder:"Your name","onUpdate:modelValue":a[0]||(a[0]=t=>e.name=t)},null,512),[[d,e.name]]),J]),s("div",L,[W,c(s("input",{id:"email",type:"email",placeholder:"Email","onUpdate:modelValue":a[1]||(a[1]=t=>e.local.email=t)},null,512),[[d,e.local.email]]),X]),s("div",Z,[$,c(s("input",{id:"password",type:"password",placeholder:"Password","onUpdate:modelValue":a[2]||(a[2]=t=>e.local.password=t),class:y({error:l(h),valid:l(v)})},null,2),[[d,e.local.password]]),j]),s("div",q,[G,c(s("input",{id:"password",type:"password",placeholder:"Password","onUpdate:modelValue":a[3]||(a[3]=t=>i.value=t),class:y({error:l(h),valid:l(v)})},null,2),[[d,i.value]]),K]),l(u)?(k(),g("div",O,ss)):R("",!0),s("div",null,[s("p",es,I(l(p).error),1)]),s("div",null,[s("button",{onClick:S},"Register"),os,as,s("p",ts,[b(" Already registered? Click "),P(l(V),{to:"/signin",class:"btn-link"},{default:B(()=>[b("HERE")]),_:1})])])])]))}});const _s=F(ls,[["__scopeId","data-v-e3d9980d"]]);export{_s as default};