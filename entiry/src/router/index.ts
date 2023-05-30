import { createRouter, createWebHistory } from 'vue-router'
import constantRoutes from './constantRoutes'
const routerHistory = createWebHistory()


let router = createRouter({
    history: routerHistory,
    routes: constantRoutes,
})

export default router;
