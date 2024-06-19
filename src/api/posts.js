// axios
import instance from '@/plugins/axios'

export function getPosts() {
  return instance.get('/posts')
}

export function getPostById(id) {
  return instance.get(`/posts/${id}`)
}

export function createPost(data) {
  return instance.post('/posts', data)
}

export function updatePost(id, data) {
  return instance.put(`/posts/${id}`, data)
}

export function deletePost(id) {
  return instance.delete(`/posts/${id}`)
}
