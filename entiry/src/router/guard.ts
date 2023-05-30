import router from './index.ts'
import store from "../store/index.ts";
let userInfo = JSON.parse(JSON.stringify(store.state)).user.userInfo;
console.log(userInfo, '信息')
router.beforeEach((to: Object, from: Object, next: Function) => {
    if (userInfo.role) {
        //如果用户信息存在则往下执行。
        if (to.path === '/entity/login') {
            next('/entity/potarl')
        } else {
            next()
        }
    } else {
        //如果用户token不存在则跳转到login页面
        if (to.path === '/entity/login') {
            next()
        } else {
            next('/entity/login')
        }
    }
})