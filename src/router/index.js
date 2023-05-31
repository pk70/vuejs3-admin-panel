import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from "@/views/Dashboard.vue";
import About from "../views/About.vue";
import Layout from "../components/Layout/Layout.vue";
import Login from "../components/login.vue";
import { UseAuthStore } from '../stores/auth';

let Authenticated = false;

const routes = [{
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        redirect: "/login",
        props: true,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        //redirect: "/dashboard"
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        meta: {
            requiresAuth: true
        },
        component: Layout,
        children: [{
            name: 'about',
            path: 'about',
            component: () =>
                import ('../views/About.vue')
        }],

    },
    {
        path: "/logout",
        name: "Logout",
        meta: {
            requiresAuth: true
        }
    }

];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});
router.beforeEach((to, from, next) => {
    const Authenticated = UseAuthStore().$state.loggedIn;
    // Check for protected route
    if (to.meta.requiresAuth) {
        if (Authenticated) {
            next()
        } else {
            next('/login')
        }

    } else {
        next()
    };
});
export default router