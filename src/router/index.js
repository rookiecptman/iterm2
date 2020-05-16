import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import Reset from '../views/Reset.vue'
import User from '../views/User.vue'
import Shop from '../views/Shop.vue'
import Store from '../views/Store.vue'
import StoreDetail from '../views/StoreDetail.vue'
import ShoppingCar from '../views/ShoppingCar.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/storedetail',
    name: 'StoreDetail',
    component: StoreDetail
  },
  {
    path: '/shoppincar',
    name: 'ShoppingCar',
    component: ShoppingCar
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
