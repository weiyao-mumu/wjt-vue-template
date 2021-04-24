//导入axios二次封装js文件
import axios from "../Instance/Instance";

const  base = {
  // baseUrl: 'http://localhost:8888',
  baseUrl:"/api", // 利用vue配置代理请求方式
  banner:"/banner"
};

//样例
const banner = {
  getData() {
    return axios.get(base.baseUrl+base.banner,{params:{username:"xxx"}});
  }
}

export  default {
  banner
}