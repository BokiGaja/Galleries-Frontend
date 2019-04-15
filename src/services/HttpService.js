import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8000'
});


export const ENDPOINTS = {
  AUTH: '/api/auth'
};

class HttpService {
  get(url) {
    return http.get(url)
  }

  post(url, body) {
    return http.post(url, body)
  }

  put(url, body) {
    return http.put(url, body)
  }

  delete(url, id) {
    return http.delete(url, id);
  }
}

export const httpService = new HttpService();