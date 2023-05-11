import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_GLOBAL_BASIC_API,
  timeout: 60 * 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

request.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = ''
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  (resp) => {
    return resp.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default request
