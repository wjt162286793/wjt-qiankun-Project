// import VueRouter from 'vue-router'

import flow from '@/pages/flow/index.vue'
// const routes = [
//     {
//         name: 'flow',
//         path: '/flow',
//         component: flow
//     }
// ]

// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHashHistory(),
//     routes,
// })

import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
Vue.use(VueRouter);

const routes = [
    { path: "/", component: HelloWorld },
    {
        name: 'flow',
        path: '/flow',
        component: flow
    }
];

export default routes;