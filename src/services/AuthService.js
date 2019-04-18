import axios from 'axios'

const auth = axios.create({
  baseURL: 'http://localhost:8000/api/auth'
});

class AuthService {
  async register(credentials) {
    try {
      const {data} = await auth.post('/register', credentials);
      if (data) {
        return data;
      }
    } catch (e) {
      return e;
    }
  }
  // todo Add autoLogout
  async login(credentials) {
    try {
      const {data} = await auth.post('/login', credentials);
      if (data.access_token) {
        const token = data.access_token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
      return data;
    } catch (e) {
      return e;
    }
  }

  async logout(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ` + token;
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('userName');
      const {data} = await auth.post('/logout');
      return data;
    } catch (e) {
      return e;
    }
  }
}

export const authService = new AuthService();