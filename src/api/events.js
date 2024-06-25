import instance from '@/plugins/axios'

export function getEvents() {
  return instance.get('/events')
}

export function getEventById(id) {
  return instance.get(`/event/${id}`)
}
