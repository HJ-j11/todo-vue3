<template>
  <div>
    <h2>이벤트 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <!-- <div class="col-4">
        <EventItem></EventItem>
      </div> -->
      <div v-for="event in events" :key="event.id" class="col-4">
        <EventItem
          :title="event.title"
          :location="event.location"
          :startDate="event.startDate"
          :endDate="event.endDate"
          :imgUrl="event.imgUrl"
        ></EventItem>
      </div>
    </div>
    <nav class="mt-5" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <hr class="my-4" />
  </div>
</template>

<script setup>
import EventItem from '@/components/events/EventItem.vue'
import { getEvents } from '@/api/events'
import { ref } from 'vue'

const events = ref([])

const fetchEvents = async () => {
  try {
    const { data } = await getEvents()
    if (data.message == 'OK') {
      events.value = data.response
      console.log(data)
    }
  } catch (error) {
    console.error(error)
  }
}

fetchEvents()
</script>
