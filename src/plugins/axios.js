import router from '@/router'
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

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response.status == 401) {
      alert('로그인이 필요합니다')
      router.push({ name: 'Login' })
    }
    return Promise.reject(error)
  }
)

export default instance
