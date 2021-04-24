/**
 路由级代码拆分
 这会为此路由生成一个单独的块（约。[hash] .js）
 在访问路线时会被延迟加载。
 */
export default  {
  path: '/about',
  name: 'About',
  component: () => import('../views/About.vue'),
  children:[]
}