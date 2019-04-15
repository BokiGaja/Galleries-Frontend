import Vue from 'vue'
import Vuex from 'vuex'
import {authService} from "./services/AuthService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    loggedUser: null
  },
  getters: {
    loggedIn: state => state.token !== null,
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token;
    },
    setLoggedUser(state, id) {
      state.loggedUser = id;
    }
  },
  actions: {
    async login({commit}, credentials) {
      try {
        const response = await authService.login(credentials);
        if (response.acces_token) {
          commit('setLoggedUser', response.user.id);
          commit('retrieveToken', response.acces_token);
        }
        if (response.error) {
          return response.error;
        }
      } catch (e) {
        return e;
      }
    },
  }
})
