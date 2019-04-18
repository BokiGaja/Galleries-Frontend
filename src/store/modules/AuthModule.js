import {authService} from "../../services/AuthService";

export const authModule = {
  state: {
    token: localStorage.getItem('token') || null,
    userId: localStorage.getItem('userId') || null,
    userName: localStorage.getItem('userName') || null
  },
  getters: {
    loggedIn: state => state.userId !== null,
    getUserName: state => state.userName,
    getUserId: state => state.userId

  },
  mutations: {
    loginUser(state, data) {
      state.token = data.access_token;
      state.userId = data.user.id;
      state.userName = data.user.first_name;
    },
    logoutUser(state) {
      state.token = null;
      state.userId = null;
      state.userName = null;
    }
  },
  actions: {
    async login({commit}, credentials) {
      try {
        const response = await authService.login(credentials);
        if (response.access_token) {
          commit('loginUser', response);
        }
        if (response) {
          return response;
        }
      } catch (e) {
        return e;
      }
    },
    async logout(context) {
      await authService.logout(context.state.token);
      context.commit('logoutUser');
    }
  }
};