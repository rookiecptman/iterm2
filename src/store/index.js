import Vue from 'vue'
import Vuex from 'vuex'
import {COM_SHOW_ALERT,COM_ALERT_MSG,COM_LOGIN_INFO,COM_MERCHANT_INFO} from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alertMsg: '', //弹框信息
    showAlert: false, //弹框显隐
    loginInfo:{
        merchant:false,
        state:false,
        token:'',
        user:'',
    },
  },
  mutations: {
    [COM_SHOW_ALERT](state, status) {
      state.showAlert = status
    },
    [COM_ALERT_MSG](state, str) {
      state.alertMsg = str
    },
    [COM_LOGIN_INFO](state, obj) {
      state.loginInfo = obj
    },
    [COM_MERCHANT_INFO](state, status){
      state.loginInfo.merchant = status
    }
  },
  actions: {
    showAlert({ commit }, status) {
      commit(COM_SHOW_ALERT, status)
    },
    alertMsg({ commit }, str) {
      commit(COM_ALERT_MSG, str)
    },
    loginInfo({ commit }, obj){
      commit(COM_LOGIN_INFO, obj)
    },
    merchant({commit}, status){
      commit(COM_MERCHANT_INFO ,status)
    }
  },
  getters: {
    showAlert:state => state.showAlert,
    alertMsg:state => state.alertMsg,
    loginInfo:state => state.loginInfo
  },
})
