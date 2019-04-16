import axios from 'axios'

const auth = axios.create({
  baseURL: 'http://localhost:8000/api/auth/gallery'
});

class GalleryService {
  async getAll() {
    const {data} = await auth.get();
    return data
  }
}

export const galleryService = new GalleryService();