
export default  {
  path: '/index',
  name: 'index',
  //懒加载的原理: 当我输入url时,根据router文件再引入
  component: ()=> import('../views/Index.vue'),
//  子路由
  childer:[

  ]
}