import {galleryService} from "../../services/GalleryService";
import {searchService} from "../../services/SearchService";

export const galleryModule = {
  state: {
    galleries: [],
    authorsGalleries: [],
    originalList: [],
    originalAuthorsGalleries: []
  },
  getters: {
    getGalleries: state => state.galleries,
    getAuthorsGalleries: state => state.authorsGalleries
  },
  mutations: {
    setGalleries(state, data) {
      state.galleries = [...data];
      state.originalList = [...data];
    },
    setAuthorsGalleries(state, data) {
      state.authorsGalleries = [...data];
      state.originalAuthorsGalleries = [...data];
    },
    filterAllGalleries(state, searchParams) {
      state.galleries = [...searchService.filterArray(searchParams, state.originalList)];
    },
    filterAuthorsGalleries(state, searchParams) {
      state.authorsGalleries = [...searchService.filterArray(searchParams, state.originalAuthorsGalleries)];
    },
  },
  actions: {
    async fetchAll({commit}) {
      const data = await galleryService.getAll();
      commit('setGalleries', data);
      return data
    },
    async setAuthorsGalleries({commit}, id) {
      let data = await galleryService.getAll();
      data = data.filter(gallery => gallery.user_id == id);
      commit('setAuthorsGalleries', data);
    },
    searchAllGalleries({commit}, searchParams) {
      commit('filterAllGalleries', searchParams)
    },
    searchAuthorsGalleries({commit}, searchParams) {
      commit('filterAuthorsGalleries', searchParams);
    }
  }
};