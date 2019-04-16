import Vue from 'vue'
import Vuex from 'vuex'
import {authModule} from "./modules/AuthModule";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    authModule
  }
});
