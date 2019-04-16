import axios from 'axios'

const gallery = axios.create({
  baseURL: 'http://localhost:8000/api/auth/gallery'
});

const user = axios.create({
  baseURL: 'http://localhost:8000/api/auth/user'
});

class GalleryService {
  async getAll() {
    const {data} = await gallery.get();
    return data
  }

  async getOne(id) {
    return gallery.get('/' + id);
  }

  async getUsersGalleries(id) {
    return user.get('/' + id)
  }
}

export const galleryService = new GalleryService();