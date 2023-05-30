// import { storeToRefs } from 'pinia'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import { createApp } from 'vue'
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp()
app.use(pinia)
import { testData } from "../pinia/index";
let getData = testData();
if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    let getVal = window.pubsub.subscribe('test1', (e, val) => {
        console.log(val, '传输的值')
        getData.$patch(val)
    })
}
