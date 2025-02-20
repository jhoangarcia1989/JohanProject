import {RouteRecordRaw, createRouter, createWebHistory} from "vue-router";
import HomeLayout from "@/ui/layouts/HomeLayout.vue";

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'HomeLayout',
        component: HomeLayout
    },
    {
        path: '/',
        name: 'AuthLayout',
        component: () => import("@/ui/layouts/AuthLayout.vue"),
        children: [{
            path: 'login',
            name: 'Login',
            component: () => import('@/ui/components/auth/LoginAuthComponent.vue')
        },{
            path: 'signup',
            name: 'Signup',
            component: () => import('@/ui/components/auth/SignupAuthComponent.vue')
        }]
    },
    {
        path: '/:notFound(.*)*',
        name: 'notFound',
        component: () => import('@/ui/layouts/NotFoundLayout.vue')
    }
]

export default createRouter({
    routes,
    history: createWebHistory()
})