import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const pageRoutes = [
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
    path: '/logistics',
    name: 'Logistics',
    component: () => import('@/views/my/logistics'),
    meta: { title: '查看物流' }
  },
  {
    path: '/dryingSheet',
    name: 'DryingSheet',
    component: () => import('@/views/my/dryingSheet'),
    meta: { title: '晒单' }
  },
  {
    path: '/vip',
    name: 'Vip',
    component: () => import('@/views/my/vip'),
    meta: { title: '会员中心' }
  },
  {
    path: '/vipRecord',
    name: 'VipRecord',
    component: () => import('@/views/my/vipRecord'),
    meta: { title: '使用详情' }
  },
  {
    path: '/sharePoster',
    name: 'SharePoster',
    component: () => import('@/views/my/sharePoster'),
    meta: { title: '生成分享海报' }
  },
  {
    path: '/vipExchange',
    name: 'VipExchange',
    component: () => import('@/views/my/vipExchange'),
    meta: { title: '兑换会员' }
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import('@/views/my/wallet'),
    meta: { title: '钱包' }
  },
  {
    path: '/withdrawal',
    name: 'Withdrawal',
    component: () => import('@/views/my/withdrawal'),
    meta: { title: '立即提现' }
  },
  {
    path: '/bindChat',
    name: 'BindChat',
    component: () => import('@/views/my/bindChat'),
    meta: { title: '绑定微信' }
  },
  {
    path: '/tradeDetails',
    name: 'TradeDetails',
    component: () => import('@/views/my/tradeDetails'),
    meta: { title: '交易明细' }
  },
  {
    path: '/addressList',
    name: 'AddressList',
    component: () => import('@/views/my/addressList'),
    meta: { title: '地址管理' }
  },
  {
    path: '/addressEdit',
    name: 'AddressEdit',
    component: () => import('@/views/my/addressEdit'),
    meta: { title: '编辑地址' }
  },
  {
    path: '/shareFriend',
    name: 'ShareFriend',
    component: () => import('@/views/my/shareFriend'),
    meta: { title: '分享好友' }
  },
  {
    path: '/dryingSheetList',
    name: 'DryingSheetList',
    component: () => import('@/views/home/dryingSheetList'),
    meta: { title: '晒单列表' }
  },
  {
    path: '/dryingSheetDetail',
    name: 'DryingSheetDetail',
    component: () => import('@/views/home/dryingSheetDetail'),
    meta: { title: '晒单详情' }
  }
]

const loginRoutes = [
  {
    path: '/loginRegister',
    name: 'LoginRegister',
    component: () => import('@/views/other/LoginRegister'),
    meta: { title: '登录注册' }
  },
  {
    path: '/tradeFinish',
    name: 'TradeFinish',
    component: () => import('@/views/other/tradeFinish'),
    meta: { title: '交易完成' }
  }
]

const routes = [...pageRoutes, ...loginRoutes]

const router = new VueRouter({
  routes
})

export default router
