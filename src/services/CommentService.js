import axios from 'axios'

const comment = axios.create({
  baseURL: 'http://localhost:8000/api/auth/comment'
});


class CommentService {
  async getCommentsForGallery(id) {
    const {data} = await comment.get('/' + id);
    return data;
  }

  async createComment(credentials) {
    try {
      const {data} = await comment.post('', credentials);
      if (data) {
        return data;
      }
    } catch (e) {
      return e;
    }
  }

  async deleteComment(id) {
    return comment.delete('/' + id);
  }
}

export const commentService = new CommentService();