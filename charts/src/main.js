import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import routes from "./router/index";
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import pubsub from 'pubsub-js'
import 'element-ui/lib/theme-chalk/index.css';
import './style/element.css'
import './style/theme.css'
import './javascript/themeImport'
Vue.config.productionTip = false;

Vue.use(ElementUI);
let router = null;
let instance = null;
window.pubsub = pubsub
console.log(window.pubsub, '那里charts')
function render(props = {}) {
  const { container } = props;

  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/charts/" : "/",
    mode: "history",
    routes,
  });
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  window.qiankunUse = true
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}