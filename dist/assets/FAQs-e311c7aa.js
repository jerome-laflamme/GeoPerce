import{T as f}from"./runtime-dom.esm-bundler-ca6b0058.js";import{d as u,E as v,c as r,V as e,$ as h,e as s,W as o,o as d,a8 as g,b as x,_ as p,X as n,Y as y,Z as b}from"./_plugin-vue_export-helper-889530a6.js";const w="/assets/faq-32b233e9.jpg",j={class:"p-2 rounded container border w-full"},C={key:0,class:"italic border rounded my-2 response"},V=u({__name:"Accordion",props:{title:null},emits:["isOpen"],setup(t,{emit:_}){const c=t;window.addEventListener("load",()=>{document.body.classList.remove("preload")});const a=v(!1);return(m,l)=>(d(),r("div",j,[e("div",{onClick:l[0]||(l[0]=O=>a.value=!a.value),id:"title",class:"rounded cursor-pointer"},h(c.title),1),s(f,{name:"slide-fade"},{default:o(()=>[a.value?(d(),r("div",C,[g(m.$slots,"default",{},void 0,!0)])):x("",!0)]),_:3})]))}});const i=p(V,[["__scopeId","data-v-4a44d605"]]),q=t=>(y("data-v-afff2464"),t=t(),b(),t),A={class:"flex relative"},E=q(()=>e("div",{class:"faq-img w-3/5 absolute"},[e("img",{src:w,alt:""})],-1)),S={class:"faq absolute flex flex-col rounded-lg overflow-x-hidden overflow-y-auto"},$={class:"m-auto"},z={class:"content flex justify-between item-center rounded-lg"},I={class:"content flex justify-between item-center rounded-lg"},N={class:"content flex justify-between item-center rounded-lg"},P={class:"content flex justify-between item-center rounded-lg"},k={class:"content flex justify-between item-center rounded-lg"},L=u({__name:"FAQs",setup(t){return(_,c)=>(d(),r("section",A,[E,e("div",S,[e("div",$,[e("div",z,[s(i,{title:"Comment puis-je réserver un emplacement de camping ?"},{default:o(()=>[n(" Vous devez aller dans sur la page carte interactive et sélectionner vos critères. Ensuite vous pourrez procédez à la sélection du terrain de vôtre choix. ")]),_:1})]),e("div",I,[s(i,{title:"Quels sont les moyens de paiement accepté ?"},{default:o(()=>[n(" Par soucis de sécurité nous ne prenons que les paiements fait par notre partenaire PayPal. ")]),_:1})]),e("div",N,[s(i,{title:"Puis-je amener mon chien?"},{default:o(()=>[n(" Oui. Votre chien pourrait être admis sous certaines conditions. ")]),_:1})]),e("div",P,[s(i,{title:"Est-ce qu’on peut être plus de 6 personnes sur l'emplacement de camping? "},{default:o(()=>[n(" Non. Cependant, il pourrait avoir des exceptions pour les familles ayant plusieurs enfants. Contactez-nous. Les emplacements de camping de groupe peuvent aussi accueillir plus que 6 personnes. ")]),_:1})]),e("div",k,[s(i,{title:"Est-il possible de séjourner une seule nuit le vendredi ou le samedi?"},{default:o(()=>[n(" Oui. Les réservations pour une nuit sont acceptées 72 heures précédant l'entrée sur le site, et ce, à compter de 9 h. Si vous désirez réserver plus longtemps d'avance, le minimum de 2 nuits doit être respecté. Pour le prêt-à-camper, un séjour doit être composé d'un minimum de 2 nuits consécutives en tout temps. ")]),_:1})])])])]))}});const F=p(L,[["__scopeId","data-v-afff2464"]]);export{F as default};