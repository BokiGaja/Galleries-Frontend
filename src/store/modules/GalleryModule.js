import {galleryService} from "../../services/GalleryService";

export const galleryModule = {
  state: {
    galleries: []
  },
  getters: {
    getGalleries: state => state.galleries,
  },
  mutations: {
    setGalleries(state, data) {
      state.galleries = [...data];
    }
  },
  actions: {
    async fetchAll({commit}) {
      const data = await galleryService.getAll();
      commit('setGalleries', data)
    }
  }
};