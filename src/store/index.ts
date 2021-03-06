import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAuthorized: false,
  },
  mutations: {
    authorize: (state) => (state.isAuthorized = true),
    resetAuthState: (state) => (state.isAuthorized = false),
  },
  getters: {
    isAutholized(state) {
      return state.isAuthorized;
    },
  },
});

export default store;
