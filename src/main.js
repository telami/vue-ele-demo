import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'
import 'common/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: 'goods'},
  {path: '/goods', component: goods},
  {path: '/seller', component: seller},
  {path: '/ratings', component: ratings}
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
