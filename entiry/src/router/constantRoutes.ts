const test = import('../views/test.vue')
const potarl = import('../views/potarl.vue')
const computed = import('../views/testFile/computed.vue')
const watch = import('../views/testFile/watch.vue')
const dashboard = import('../views/dashboard/index.vue')
const refTest = import('../views/testFile/refTest.vue')
const reactviceTest = import('../views/testFile/reactiveTest.vue')
const lifeCycle = import('../views/testFile/lifeCycle.vue')
const hookTest = import('../views/testFile/hookTest.vue')
const toRefs = import('../views/testFile/toRefs.vue')
const ancestor = import('../views/comnutation/ancestor.vue')
const login = import('../views/login/index.vue')
const slotTest = import('../views/slotTest/parent.vue')
const constantRoutes = [
    {
        path: '/entity/login',
        component: login,
        cname: '登录',
        name: 'login'
    },
    {
        path: '/entity/test',
        component: test,
        cname: '测试',
        name: 'test'
    },
    {
        path: '/entity/potarl',
        component: potarl,
        cname: '主页',
        name: 'potarl'
    },
    {
        path: '/entity/computed',
        component: computed,
        cname: '计算属性',
        name: 'computed'
    },
    {
        path: '/entity/watch',
        component: watch,
        cname: '监视',
        name: 'watch'
    },
    {
        path: '/entity/refTest',
        component: refTest,
        cname: 'ref测试',
        name: 'ref'
    },
    {
        path: '/entity/reactviceTest',
        component: reactviceTest,
        cname: 'reactvice测试',
        name: 'reactvice'
    },
    {
        path: '/entity/lifeCycle',
        component: lifeCycle,
        cname: '生命周期测试',
        name: 'lifeCycle'
    },
    {
        path: '/entity/hookTest',
        component: hookTest,
        cname: 'hook测试',
        name: 'hookTest'
    },
    {
        path: '/entity/toRefs',
        component: toRefs,
        cname: 'toRefs测试',
        name: 'toRefs'
    },
    {
        path: '/entity/comnutation',
        component: ancestor,
        cname: '通信测试',
        name: 'comnutation'
    },
    {
        path: '/entity/slotTest',
        component: slotTest,
        cname: '插槽测试',
        name: 'soltTest'
    },
    {
        path: '/entity',
        component: dashboard,
        cname: '菜单页',
        name: 'dashboard'
    },
    {
        path: '/',
        component: dashboard
    }

]
export default constantRoutes