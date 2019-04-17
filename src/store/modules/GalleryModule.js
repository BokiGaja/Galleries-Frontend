import {galleryService} from "../../services/GalleryService";

export const galleryModule = {
  state: {
    galleries: [],
    originalList: [],
  },
  getters: {
    getGalleries: state => state.galleries,
  },
  mutations: {
    setGalleries(state, data) {
      state.galleries = [...data];
      state.originalList = [...data];
    },
    filterList(state, searchParams) {
      if (searchParams.length > 0) {
        state.galleries = state.originalList.filter(
          gallery => gallery.title.includes(searchParams) ||
            gallery.description.includes(searchParams) ||
            gallery.user.first_name.includes(searchParams) ||
            gallery.user.first_name.includes(searchParams))
      } else {
        state.galleries = state.originalList
      }
    },
  },
  actions: {
    async fetchAll({commit}) {
      const data = await galleryService.getAll();
      commit('setGalleries', data)
    },
    async setAuthorsGalleries({commit}, id) {
      const {data} = await galleryService.getUsersGalleries(id);
      commit('setGalleries', data);
    },
    searchList({commit}, searchParams) {
      commit('filterList', searchParams)
    },
  }
};