import {authService} from "../../services/AuthService";

export const authModule = {
  state: {
    token: localStorage.getItem('token') || null,
    userId: localStorage.getItem('userId') || null,
    userName: localStorage.getItem('userName') || null
  },
  getters: {
    loggedIn: state => state.token !== null,
    userName: state => state.userName
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token;
    },
    setUserId(state, id) {
      state.userId = id;
    },
    setUserName(state, id) {
      state.userName = id;
    },
    destroyToken(state) {
      state.token = null;
    }
  },
  actions: {
    async login({commit}, credentials) {
      try {
        const response = await authService.login(credentials);
        if (response.access_token) {
          localStorage.setItem('userId', response.user.id);
          localStorage.setItem('userName', response.user.first_name);
          commit('setUserId', response.user.id);
          commit('setUserName', response.user.first_name);
          commit('retrieveToken', response.access_token);
        }
        if (response.error) {
          return response.error;
        }
      } catch (e) {
        return e;
      }
    },
    async logout(context) {
      await authService.logout(context.state.token);
      localStorage.removeItem('userId');
      localStorage.removeItem('userName');
      context.commit('destroyToken');
    }
  }
};