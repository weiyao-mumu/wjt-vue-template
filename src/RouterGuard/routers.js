
import routers from "../router";

/**
 * 路由守卫配置端口
 */

routers.beforeEach((to, from, next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
});



export default  routers;