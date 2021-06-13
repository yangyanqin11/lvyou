import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '首页',
      component: ()=>import('../pages/home/Home')
    },
    {
      path:'/city',
      name:'城市',
      component:()=>import('../pages/city/City')
    },
    {
      path:'/detail',
      name:'详情页面',
      component:()=>import('../pages/detail/Detail')
    },
    ,
    {
      path:'',
      redirect:'/home'
    }
  ]
})
