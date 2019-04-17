import {galleryService} from "../../services/GalleryService";

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
    filterAuthorsGalleries(state, searchParams) {
      if (searchParams.length > 0) {
        state.authorsGalleries = state.originalAuthorsGalleries.filter(
          gallery => gallery.title.includes(searchParams) ||
            gallery.description.includes(searchParams) ||
            gallery.user.first_name.includes(searchParams) ||
            gallery.user.first_name.includes(searchParams))
      } else {
        state.authorsGalleries = state.originalAuthorsGalleries
      }
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