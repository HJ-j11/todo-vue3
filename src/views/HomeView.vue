<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="goAboutPage">GO ABOUT</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goAboutPage = () => {
  router.push('/about')
}
</script>

<style lang="scss" scoped></style>
