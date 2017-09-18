import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleSave: false,
    aa: 'abc'
  },
  getters: {
    toUp (state) {
      return state.aa.toUpperCase()
    }
  },
  mutations: {
    changeSave (state) {
      state.articleSave = !state.articleSave
    }
  },
  actions: {
    changeSave (state) {
      state.articleSave = !state.articleSave
    }
  }
})
