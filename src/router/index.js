import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from 'components/goods/goods.vue'
import Ratings from 'components/ratings/ratings.vue'
import Seller from 'components/seller/seller.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ],
  linkActiveClass: 'active'
})
