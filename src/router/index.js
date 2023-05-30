import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from "@/views/Dashboard.vue";
import About from "../views/About.vue";
import Layout from "../components/Layout/Layout.vue";
import Login from "../components/login.vue";

const routes = [{
        path: "/login",
        name: "/",
        component: Login,
        redirect: "/dashboard"
    },
    {
        path: "/dashboard",
        name: "Dashboard",

        component: Layout,
        children: [{
            name: 'about',
            path: 'about',
            component: () =>
                import ('../views/About.vue')
        }]
    },
    // {
    //     path: "/about",
    //     meta: { layout: 'Dashboard' },

    //     component: () =>
    //         import ('../views/About.vue')
    // },
    // {
    //     path: "/billing",
    //     name: "Billing",
    //     component: Billing,
    // },
    // {
    //     path: "/virtual-reality",
    //     name: "Virtual Reality",
    //     component: VirtualReality,
    // },
    // {
    //     path: "/profile",
    //     name: "Profile",
    //     component: Profile,
    // },
    // {
    //     path: "/rtl-page",
    //     name: "Rtl",
    //     component: Rtl,
    // },
    // {
    //     path: "/sign-in",
    //     name: "Sign In",
    //     component: SignIn,
    // },
    // {
    //     path: "/sign-up",
    //     name: "Sign Up",
    //     component: SignUp,
    // },
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});
export default router