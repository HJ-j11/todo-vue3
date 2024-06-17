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

export default instance
