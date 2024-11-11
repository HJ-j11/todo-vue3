<template>
  <AppCard>
    <div class="row">
      <div class="col">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ startDate }} ~ {{ endDate }}
        </p>
      </div>
    </div>
  </AppCard>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  startDate : {
    type: String,
  },
  endDate : {
    type: String,
  },
  createdAt: {
    type: [String, Date, Number]
  }
})
</script>

<style lang="scss" scoped></style>
