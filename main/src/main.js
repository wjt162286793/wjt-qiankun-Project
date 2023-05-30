import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { registerMicroApps, start, setDefaultMountApp, prefetchApps } from "qiankun";
import pubsub from 'pubsub-js'
import './style/theme.css'
import './style/element.css'
registerMicroApps([
    {
        name: "charts",
        entry: "//localhost:8031",
        container: "#container",
        activeRule: "/charts",
    },
    {
        name: "entity",
        entry: "//localhost:8032",
        container: "#container",
        activeRule: "/entity",
    }
]);
prefetchApps([
    {
        name: "entity",
        entry: "//localhost:8032",
    },
]);
setDefaultMountApp('entity');
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
window.pubsub = pubsub
console.log(document, window, '那里基座')
app.use(router).use(ElementPlus).mount("#app");
start();

