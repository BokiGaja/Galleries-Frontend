import Vue from 'vue'
import Vuex from 'vuex'
import {authModule} from "./modules/AuthModule"
import {galleryModule} from "./modules/GalleryModule"

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    authModule,
    galleryModule
  }
});
