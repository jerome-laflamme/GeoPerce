import{c as m}from"./runtime-dom.esm-bundler-ca6b0058.js";import{c as p}from"./mapStore-070bf7cb.js";import{R as u}from"./vue-router-9eb40a9c.js";import{N as l}from"./Navbar-5d4d2b74.js";import"./preload-helper-4d3ce095.js";/* empty css                                            *//* empty css                                                                 */import{d as f,c as d,a as y,b as g,e as h,u as N,F as _,o as a}from"./_plugin-vue_export-helper-889530a6.js";import{r as b}from"./index-7d4f0c0b.js";import"./axios-bff3f665.js";/* empty css                                                               *//* empty css                                                                *//* empty css                                                                */import"./campStore-4d950323.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const L=f({__name:"App",setup(c){return(t,n)=>(a(),d(_,null,[t.$route.meta.hideNavbar?g("",!0):(a(),y(l,{key:0})),h(N(u))],64))}}),i=m(L);i.use(p());i.use(b);i.mount("#app");