//import * as api from "@/api/syncld";

const state = () => ({
  workspaces: [],
  currentWorkspace: null,
  spinner: [],
  brain: undefined,
  brains: undefined,
  //   coreCurrent: null,
  //   // user: null,
  //   history: [],
});

const mutations = {
  addWorkspace(state, w) {
    state.workspaces.push(w);
    console.log(state.workspaces);
  },
  currentWorkspace(state, w) {
    state.currentWorkspace = w;
  },
  spinnerAdd(state,t){
    state.spinner.push(t)
  },
  spinnerRemove(state, t){
    state.spinner = state.spinner.filter(x => x.id!=t.id )
  },
  resetSpinner(state){
    state.spinner = []
  },
  setBrain(state, b){
    console.log(b)
    state.brain = b
  },
  setBrains(state, b){
    state.brains = b
    state.showBrainLoader = true
  },

  // setToast(state, t) {
  //   state.toaster = t;
  // },
  // pushToHistory(state, n) {

  //   let history = state.history.filter((todo) => todo["id"] != n["id"]);
  //    history.unshift({
  //     "id": n["id"],
  //     "name": n["name"],
  //     "group": n["group"],
  //   });
  //   state.history = history;
  // },
  // updateNode(n){
  //   console.log("todo find node byId and update",n)
  // }
};

const actions = {
  //   create(/*{ commit, state },*/ item) {
  //     api.create(item);
  //   },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
