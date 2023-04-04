import { createRouter, createWebHistory } from "vue-router";
// import Home from '../views/Home.vue'
import Contact from "../views/Contact.vue";
import Home from "../views/Homepage.vue";
import AboutUs from "../views/AboutUs.vue";
import { useUser } from "@/shared/stores";
import { isAuthenticatedGuard, isNotAuthenticatedGuard } from "@/shared/guards";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			/* 			component: Home, */
			component: () => import("../views/Homepage.vue"),
		},
		{
			path: "/reservation",
			name: "Reservation",
			component: () => import("../views/Reservation.vue"),
		},
		{
			path: "/AboutUs",
			name: "About",
			component: () => import("../views/AboutUs.vue"),
		},
		{
			path: "/contact",
			name: "Contact",
			component: () => import("../views/Contact.vue"),
		},
		{
			path: "/aboutus",
			name: "AboutUs",
			component: () => import("../views/AboutUs.vue"),
		},
		{
			path: "/map",
			name: "Map",
			component: () => import("../views/Map.vue"),
		},
		{
			path: "/faq",
			name: "FAQS",
			component: () => import("../views/FAQs.vue"),
		},
		{
			path: "/admin",
			name: "Admin",
			beforeEnter: [isNotAuthenticatedGuard],
			component: () => import("../views/Admin.vue"),
			meta: {
				hideNavbar: true,
			},
		},
		{
			path: "/signup",
			name: "SignUp",
			beforeEnter: [isNotAuthenticatedGuard],
			component: () => import("../components/Admin/SignUp.vue"),
		},
		{
			path: "/crud",
			name: "AdminPageCRUD",
			beforeEnter: [isAuthenticatedGuard],
			component: () => import("../views/AdminPageCRUD.vue"),
			meta: {
				hideNavbar: true,
			},
		},
		{
			path: "/new",
			name: "new",
			beforeEnter: [isAuthenticatedGuard],
			component: () => import("../components/Admin/NewTerrain.vue"),
			meta: {
				hideNavbar: true,
			},
		},
		{
			path: "/:pathMatch(.*)",
			name: "Error",
			component: () => import("../views/Error.vue"),
		},
	],
});
router.beforeEach(async () => {
	const userStore = useUser();
	if (userStore.currentUser == undefined) {
		await userStore.fetchCurrentUser();
	}
});
export default router;
