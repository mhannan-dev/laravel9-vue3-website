import {
    createRouter,
    createWebHistory
} from "vue-router";
//Admin
import adminIndex from '../components/admin/home/dashboard.vue'
import frontendIndex from '../components/frontend/home/index.vue'
import login from '../components/auth/login.vue'

import notFound from '../components/notFound.vue'

const routes = [
    // Admin
    {
        path: '/dashboard',
        component: adminIndex
    },
    // Frontend
    {
        path: '/',
        component: frontendIndex
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/:path(.*)*',
        component: notFound
    },

]
const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes,
})
export default router
