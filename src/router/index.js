import { createRouter, createWebHistory } from 'vue-router'

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
                path: "/about",
                component: () =>
                    import ('../views/About.vue')
            },
            {
                name: 'profile',
                path: "/profile",
                component: () =>
                    import ('../components/Profile.vue')
            },
            {
                name: 'adminUsers',
                path: "/admin-users",
                component: () =>
                    import ('../components/admin/AdminUsers.vue')
            }
        ],
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
            if (to.name == 'Logout') {
                UseAuthStore().logout();
            }

            next()
        } else {
            next('/login')
        }

    } else {
        if (to.name == 'Login' && Authenticated) {
            next('/dashboard');
        }
        next()
    };
});

export default router