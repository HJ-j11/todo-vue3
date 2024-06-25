import EventListView from '@/views/event/EventListView.vue'

export default {
  children: [
    {
      path: '/events',
      name: 'EventList',
      component: EventListView
    }
  ]
}
