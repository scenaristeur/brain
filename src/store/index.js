import { createStore } from 'vuex'
import core from './modules/core'
import solid from './modules/solid'

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
    core, solid
  }
})
