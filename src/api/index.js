import axios from 'axios'

function create(baseUrl, options) {
  const instance = axios.create(Object.assign({ baseUrl }, options))
  return instance
}

export const posts = create('http://localhost:8080/posts/')
