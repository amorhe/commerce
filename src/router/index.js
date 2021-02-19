import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/home/index'),
    meta: {
      title: '首页',
      showTab: true
    }
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@/views/my/my'),
    meta: {
      title: '我的',
      showTab: true
    }
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
    name: 'ConfirmOrder',
    component: () => import('@/views/home/confirmOrder'),
    meta: { title: '确认下单' }
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/views/my/order'),
    meta: { title: '订单管理' }
  },
  {
    path: '/orderDetail',
    name: 'OrderDetail',
    component: () => import('@/views/my/orderDetail'),
    meta: { title: '订单详情' }
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
