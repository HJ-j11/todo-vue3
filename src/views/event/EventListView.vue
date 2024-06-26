<template>
  <div>
    <div class="input-group mb-3">
      <div class="col">
        <h2>이벤트 목록</h2>
      </div>
      <div class="row g-3">
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            placeholder="Enter keyword"
            aria-describedby="button-addon2"
            v-model="searchText"
          />
        </div>
        <div class="col-auto">
          <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
        </div>
      </div>
    </div>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="event in filterEvent" :key="event.id" class="col-4">
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
import { computed, onMounted, ref } from 'vue'

const events = ref([])
const searchText = ref('')

onMounted(() => {
  fetchEvents()
})

const fetchEvents = async () => {
  try {
    const { data } = await getEvents()
    if (data.message === 'OK') {
      events.value = data.response
      console.log(data)
    }
  } catch (error) {
    console.error(error)
  }
}

const filterEvent = computed(() => {
  if (searchText.value) {
    return events.value.filter((event) => {
      return event.title.includes(searchText.value)
    })
  } else {
    return events.value
  }
})
</script>
