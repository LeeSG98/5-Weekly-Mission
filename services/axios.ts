import axios from 'axios';

const api = axios.create({
  baseURL: `https://bootcamp-api.codeit.kr/api/linkbrary/v1`
});

api.interceptors.request.use((config) => {
  const [_, accessToken] = document.cookie.split('=');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default api;
