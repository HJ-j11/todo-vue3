<template>
  <AppCard>
    <img :src="imgUrl" class="card-img-top" :alt="imgUrl" style="width: 20%" />
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">
      {{ location }}
    </p>
    <p class="card-text">
      {{ $dayjs(startDate).format('YYYY-MM-DD') }} ~ {{ $dayjs(endDate).format('YYYY-MM-DD') }}
    </p>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </AppCard>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  startDate: {
    type: [String, Date, Number]
  },
  endDate: {
    type: [String, Date, Number]
  },
  imgUrl: {
    type: String
  }
})
</script>

<style lang="scss" scoped></style>
