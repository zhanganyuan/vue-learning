import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Start from '../views/Start.vue'

// 路由的配置数组
// path: 路由的路径 必须以斜杠(/)开头
// component: 对应的路由组件
// name: 路由名字
const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // 按需引入
    // 如果没有访问/abount 就不会加载这个组件 节约性能
    component: () => import('../views/About.vue')
  },
  {
    path: '/details',
    name: 'Details',
    // 按需引入
    // 如果没有访问/abount 就不会加载这个组件 节约性能
    component: () => import('../views/Details.vue')
  }
]

// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
