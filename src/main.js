import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import VueCookie from 'vue-cookies'
import './plugins/element.js'

Vue.config.productionTip = false
axios.defaults.withCredentials=true
axios.defaults.headers = {
  "Content-Type": "application/json;charset=UTF-8"
}
axios.defaults.baseURL = 'http://58.87.77.5:8080/'
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.prototype.$cookie = VueCookie

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
