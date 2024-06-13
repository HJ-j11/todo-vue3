// axios
import axios from 'axios'

export function getPosts() {
  return axios.get('http://localhost:8080/posts')
}

export function getPostById(id) {
  return axios.get(`http://localhost:8080/posts/${id}`)
}

export function createPost(data) {
  return axios.post('http://localhost:8080/posts', data)
}

export function updatePost(id, data) {
  return axios.put(`http://localhost:8080/posts/${id}`, data)
}

export function deletePost(id) {
  return axios.delete(`http://localhost:8080/posts/${id}`)
}
