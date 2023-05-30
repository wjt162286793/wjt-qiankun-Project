import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/element.css'
import './style/theme.css'
import pubsub from 'pubsub-js'
import './javascript/pubsub.js'
import './javascript/themeImport'
import {
    renderWithQiankun,
    qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper'
// import { createPinia } from "pinia";
// const pinia = createPinia();
// import store from './store/index'
import './store/index.ts'
import './router/guard.ts'
const appName = 'entity'

let instance = null
async function render(props = {}) {
    console.log(props, '子选项')
    const { container } = props

    // router = createRouter({
    //   history: createWebHistory(!qiankunWindow.__POWERED_BY_QIANKUN__ ? '/pedstal/vue3' : '/'),
    //   routes:[]
    // })

    instance = createApp(App)
    // instance.use(router)
    instance.use(router)
    instance.use(ElementPlus)
    instance.mount(container ? container.querySelector('#entity') : '#entity')
    console.log("🚀 ~ file: main.js ~ line 28 ~ render ~ instance", instance)

}
const initQianKun = () => {
    window.qiankunUse = true
    renderWithQiankun({
        bootstrap() {
            console.log(`[${appName}] subApp is bootstrap!`)
        },
        async mount(props) {
            console.log(`[${appName}] subApp is mount!`)
            console.log(`[${appName}] mount.props::`, props)
            await render(props)
        },
        unmount(props) {
            console.log(`[${appName}] subApp is unmount!`)
            // console.log(instance, '什么')
            instance.unmount()
            // instance.$destroy();
            // instance.$el.innerHTML = '';
            // instance = null;
            // router = null;
        },
        update(props) {
            console.log(`[${appName}] subApp is update!`)
        }
    })
}
// 判断是否使用 qiankun， 保证项目可以独立运行
// qiankunWindow.eventBus = pubsub
window.pubsub = pubsub
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
