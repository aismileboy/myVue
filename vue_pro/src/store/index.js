import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    settoken(state,token){        //第二个参数是外部传进来的
      state.token = token
    }
  },
  actions: {
  },
  modules: {
  }
})
