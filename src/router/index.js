import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/home/index'),
    meta: { title: '首页', showTab: true }
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@/views/my/my'),
    meta: { title: '我的', showTab: true }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/home/search'),
    meta: { title: '搜索' }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/home/detail'),
    meta: { title: '商品详情' }
  },
  {
    path: '/confirmOrder',
    name: 'confirmOrder',
    component: () => import('@/views/home/confirmOrder'),
    meta: { title: '确认下单' }
  },
  {
    path: '/loginRegister',
    name: 'LoginRegister',
    component: () => import('@/views/other/LoginRegister'),
    meta: { title: '登录注册' }
  }
]

const router = new VueRouter({
  routes
})

export default router
