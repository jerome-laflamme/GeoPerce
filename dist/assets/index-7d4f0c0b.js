import{_ as t}from"./preload-helper-4d3ce095.js";import{c as a,a as _}from"./vue-router-9eb40a9c.js";/* empty css                                                                *//* empty css                                                               *//* empty css                                            */import"./mapStore-070bf7cb.js";/* empty css                                                                 *//* empty css                                                                */import{u as o}from"./campStore-4d950323.js";function r(){if(!o().isAuthenticated)return"/admin"}function n(){if(o().isAuthenticated)return"/crud"}const i=a({history:_("/"),routes:[{path:"/",name:"Home",component:()=>t(()=>import("./Homepage-39afac5a.js"),["assets/Homepage-39afac5a.js","assets/Map.vue_vue_type_script_setup_true_lang-6d40d2f1.js","assets/preload-helper-4d3ce095.js","assets/preload-helper-3625237c.css","assets/vue-leaflet.esm-91f93f2a.js","assets/runtime-dom.esm-bundler-ca6b0058.js","assets/_plugin-vue_export-helper-889530a6.js","assets/vue-router-9eb40a9c.js","assets/mapStore-070bf7cb.js","assets/axios-bff3f665.js","assets/Map-77952c1b.css","assets/Navbar-0610734f.css","assets/Homepage-65937fbe.css"])},{path:"/reservation",name:"Reservation",component:()=>t(()=>import("./Reservation-05aa74f6.js"),["assets/Reservation-05aa74f6.js","assets/runtime-dom.esm-bundler-ca6b0058.js","assets/_plugin-vue_export-helper-889530a6.js","assets/campStore-4d950323.js","assets/mapStore-070bf7cb.js","assets/axios-bff3f665.js","assets/preload-helper-4d3ce095.js","assets/preload-helper-3625237c.css","assets/vue-leaflet.esm-91f93f2a.js","assets/Reservation-0ece9fbc.css"])},{path:"/AboutUs",name:"About",component:()=>t(()=>import("./AboutUs-627c68c1.js"),["assets/AboutUs-627c68c1.js","assets/Navbar-5d4d2b74.js","assets/vue-router-9eb40a9c.js","assets/_plugin-vue_export-helper-889530a6.js","assets/Navbar-0610734f.css","assets/AboutUs-c1e2eb95.css"])},{path:"/contact",name:"Contact",component:()=>t(()=>import("./Contact-8dedd7ec.js"),["assets/Contact-8dedd7ec.js","assets/runtime-dom.esm-bundler-ca6b0058.js","assets/_plugin-vue_export-helper-889530a6.js","assets/axios-bff3f665.js","assets/Contact-10c309d3.css"])},{path:"/aboutus",name:"AboutUs",component:()=>t(()=>import("./AboutUs-627c68c1.js"),["assets/AboutUs-627c68c1.js","assets/Navbar-5d4d2b74.js","assets/vue-router-9eb40a9c.js","assets/_plugin-vue_export-helper-889530a6.js","assets/Navbar-0610734f.css","assets/AboutUs-c1e2eb95.css"])},{path:"/map",name:"Map",component:()=>t(()=>import("./Map-3d86e6ef.js"),["assets/Map-3d86e6ef.js","assets/Map.vue_vue_type_script_setup_true_lang-6d40d2f1.js","assets/preload-helper-4d3ce095.js","assets/preload-helper-3625237c.css","assets/vue-leaflet.esm-91f93f2a.js","assets/runtime-dom.esm-bundler-ca6b0058.js","assets/_plugin-vue_export-helper-889530a6.js","assets/vue-router-9eb40a9c.js","assets/mapStore-070bf7cb.js","assets/axios-bff3f665.js","assets/Map-77952c1b.css"])},{path:"/faq",name:"FAQS",component:()=>t(()=>import("./FAQs-e311c7aa.js"),["assets/FAQs-e311c7aa.js","assets/runtime-dom.esm-bundler-ca6b0058.js","assets/_plugin-vue_export-helper-889530a6.js","assets/FAQs-648d7fda.css"])},{path:"/admin",name:"Admin",beforeEnter:[n],component:()=>t(()=>import("./Admin-0720eedc.js"),["assets/Admin-0720eedc.js","assets/NavBarAdmin-48dfc90c.js","assets/campStore-4d950323.js","assets/mapStore-070bf7cb.js","assets/_plugin-vue_export-helper-889530a6.js","assets/axios-bff3f665.js","assets/NavBarAdmin-f644e1f3.css","assets/runtime-dom.esm-bundler-ca6b0058.js","assets/vue-router-9eb40a9c.js","assets/preload-helper-4d3ce095.js","assets/preload-helper-3625237c.css","assets/Admin-f7dc0bc2.css","assets/AdminPageCRUD-47813f89.css","assets/Contact-10c309d3.css","assets/Navbar-0610734f.css","assets/Map-77952c1b.css","assets/Homepage-65937fbe.css","assets/AboutUs-c1e2eb95.css"]),meta:{hideNavbar:!0}},{path:"/signup",name:"SignUp",beforeEnter:[n],component:()=>t(()=>import("./SignUp-ea15e919.js"),["assets/SignUp-ea15e919.js","assets/runtime-dom.esm-bundler-ca6b0058.js","assets/_plugin-vue_export-helper-889530a6.js","assets/campStore-4d950323.js","assets/mapStore-070bf7cb.js","assets/axios-bff3f665.js","assets/vue-router-9eb40a9c.js","assets/SignUp-60c56f55.css"])},{path:"/crud",name:"AdminPageCRUD",beforeEnter:[r],component:()=>t(()=>import("./AdminPageCRUD-99442bc6.js"),["assets/AdminPageCRUD-99442bc6.js","assets/runtime-dom.esm-bundler-ca6b0058.js","assets/_plugin-vue_export-helper-889530a6.js","assets/NavBarAdmin-48dfc90c.js","assets/campStore-4d950323.js","assets/mapStore-070bf7cb.js","assets/axios-bff3f665.js","assets/NavBarAdmin-f644e1f3.css","assets/preload-helper-4d3ce095.js","assets/preload-helper-3625237c.css","assets/vue-router-9eb40a9c.js","assets/AdminPageCRUD-47813f89.css","assets/Contact-10c309d3.css","assets/Navbar-0610734f.css","assets/Map-77952c1b.css","assets/Homepage-65937fbe.css","assets/AboutUs-c1e2eb95.css"]),meta:{hideNavbar:!0}},{path:"/new",name:"new",beforeEnter:[r],component:()=>t(()=>import("./NewTerrain-a31c8e1b.js"),["assets/NewTerrain-a31c8e1b.js","assets/NavBarAdmin-48dfc90c.js","assets/campStore-4d950323.js","assets/mapStore-070bf7cb.js","assets/_plugin-vue_export-helper-889530a6.js","assets/axios-bff3f665.js","assets/NavBarAdmin-f644e1f3.css","assets/runtime-dom.esm-bundler-ca6b0058.js","assets/preload-helper-4d3ce095.js","assets/preload-helper-3625237c.css","assets/vue-router-9eb40a9c.js","assets/NewTerrain-bd09450d.css","assets/Contact-10c309d3.css","assets/Navbar-0610734f.css","assets/Map-77952c1b.css","assets/Homepage-65937fbe.css","assets/AboutUs-c1e2eb95.css"]),meta:{hideNavbar:!0}},{path:"/:pathMatch(.*)",name:"Error",component:()=>t(()=>import("./Error-43066ff3.js"),["assets/Error-43066ff3.js","assets/Navbar-5d4d2b74.js","assets/vue-router-9eb40a9c.js","assets/_plugin-vue_export-helper-889530a6.js","assets/Navbar-0610734f.css","assets/Error-8d93b5fb.css"])}]});i.beforeEach(async()=>{const e=o();e.currentUser==null&&await e.fetchCurrentUser()});export{i as r};
