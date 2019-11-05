import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'

Vue.use(VueRouter) // 注册路由模块

const routes = [
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: '/film/nowplaying',
        component: Nowplaying
      },
      {
        path: '/film/comingsoon',
        component: Comingsoon
      },
      {
        path: '/film',
        redirect: '/film/nowplaying'
      }
    ]
  }, // 嵌套路由 （路径二级关系， 组件嵌套关系）
  // {
  //   path: '/film/nowplaying',
  //   component: Cinema
  // }, //路径二级关系， 组件 之中没有关系
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '*',
    redirect: '/film'
  }
] // 路由配置表

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
