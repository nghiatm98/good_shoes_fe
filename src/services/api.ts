import axios, { AxiosRequestConfig } from 'axios'
import { BASE_URL, getToken } from 'common'

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  }
})

const requestInterceptor = (config: AxiosRequestConfig): any => {
  const token = getToken();
  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
};

api.interceptors.request.use(requestInterceptor)

api.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    if (error.response.data.code === 401) {
    }
    return Promise.reject(error)
  }
)
