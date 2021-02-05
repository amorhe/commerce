import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Search,
  Image,
  Icon,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Sticky,
  Button,
  IndexBar,
  IndexAnchor,
  Popup,
  Stepper
} from 'vant'
import 'vant/lib/index.less'

Vue.config.productionTip = false
Vue.use(Search)
Vue.use(Image)
Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Sticky)
Vue.use(Button)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(Popup)
Vue.use(Stepper)

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
