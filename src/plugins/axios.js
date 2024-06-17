import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': `application/json;charset=UTF-8`,
    Accept: 'application/json',

    // 추가
    'Access-Control-Allow-Origin': `http://localhost:5173`,
    'Access-Control-Allow-Credentials': 'true'
  },
  withCredentials: true
})

instance.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem('user')
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ''
  return config
})

export default instance
