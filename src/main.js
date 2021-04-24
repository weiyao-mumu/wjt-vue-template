import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Custom from './Authority/Custom-Instruction';
import routers from  './RouterGuard/routers';
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

Vue.config.productionTip = false;

new Vue({
  router,
  routers,
  store,
  Custom,
  render: h => h(App)
}).$mount('#app')
