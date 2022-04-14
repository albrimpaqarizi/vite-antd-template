import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from 'config/env';
import { jwtGetToken } from './jwtGetToken';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config?.headers) {
    const token = jwtGetToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export { default } from 'axios';
