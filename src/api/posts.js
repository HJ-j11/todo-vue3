// axios
import instance from '@/plugins/axios'

export function getPosts(pageNum) {
  return instance.get(`/events?page=${pageNum}`)
}

export function getPostById(id) {
  return instance.get(`/events/${id}`)
}

export function createPost(data) {
  return instance.post('/events', data)
}

export function updatePost(id, data) {
  return instance.put(`/events/${id}`, data)
}

export function deletePost(id) {
  return instance.delete(`/events/${id}`)
}
