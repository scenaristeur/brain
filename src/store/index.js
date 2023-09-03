import { createStore } from 'vuex'
import core from './modules/core'

export default createStore({
  state: {
    workspaces: []
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    core,
  }
})
