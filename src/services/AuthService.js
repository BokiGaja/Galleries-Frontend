import axios from 'axios'

const auth = axios.create({
  baseURL: 'http://localhost:8000/api/auth'
});

class AuthService {
  async register(credentials) {
    try {
      const {data} = await auth.post('/register', credentials);
      return data;
    } catch (e) {
      return e;
    }
  }
}

export const authService = new AuthService();