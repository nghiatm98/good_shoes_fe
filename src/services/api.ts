import axios from 'axios'
import { BASE_URL } from 'common'

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  }
})

api.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    if (error.response.status === 401) {
      
    }
    return Promise.reject(error)
  }
)

// api.interceptors.request.use((config) => {
//   config.headers['Access-Control-Allow-Origin'] = '*'
//   // config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
//   // config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
//   return config
// })
