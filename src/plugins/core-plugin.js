// import ForceGraph3D from '3d-force-graph';
//import { Core /*Neurone, Brain,  Graph*/ } from '@/neurone-factory'
//
// let graph = undefined
const plugin = {
  install(app, opts = {}) {
    let store = opts.store
    // app.config.globalProperties.$coreInit = async function(options = {}){
    //     let core = new Core(options)
    //   store.commit ('core/setCore', core)
    // }
    app.config.globalProperties.$spinnerAdd = function(task){
      store.commit('core/spinnerAdd', task)
    }
    app.config.globalProperties.$spinnerRemove = function(task){
      store.commit('core/spinnerRemove', task)
    }
  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
