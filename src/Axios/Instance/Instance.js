/*
     封装Axios实例
 */

import axios from "axios";
import qs from "querystring";


const instance  = axios.create({timeout:3000});

instance.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded";

// token 在vuex中
// instance.defaults.headers.common['AUTHORIZATION'] = localStorage.getItem("token");

// 请求拦截器
instance.interceptors.request.use(config =>{
  // console.log(config);
//  判断是否为Post请求 需要增加qs转化
  if(config.method === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},error => {
  return Promise.reject(error);
});

//配置一个相应拦截
instance.interceptors.response.use(res =>{
    return   res.status ===200 ? Promise.resolve(res): Promise.reject(res);
},error => {
  const {response} = error;
  if(response){
    errorHandler(response.status.response.data.message);
    return Promise.reject(response);
  }else {
    console.log("请检查您的网络是否存在");
  }
});


// 错误信息处理
const errorHandler = (status,other) => {
  switch (status) {
    case 400:
      console.log("信息校验失败");
      break;
    case 401:
      //    去登陆
      toLogin();
      console.log("认证失败");
      break;
    case 403:
      //清除token储存
      localStorage.removeItem("token");
      console.log("token校验失败");
      break;
    case 404:
      console.log("请求资源不存在");
      break;
    default:
      console.log("服务器错误？");
      break;
  }
}
/**
 * 去登陆
 */
const toLogin = ()=>{
  router.push({
    path:'/login'
  })
}

export default instance;