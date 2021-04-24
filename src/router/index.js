import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const  routerList = [];

/**
 * 动态引入路由
 * @param r
 */
function importALl(r) {
  r.keys().forEach(
    (key)=> routerList.push(r(key).default)
  );
}

importALl(require.context('./',false,/\.routers.js/));

const routes = [
  ...routerList,
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {title:"WJT-Vue-template"}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
