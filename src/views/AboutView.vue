<template>
  <div>
    <h2>About View</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="$router.push('/')">GO HOME</button>
    <h2>Store</h2>
    <p>Counter : {{ counter }}</p>
    <p>DoubleCount : {{ doubleCount }}</p>
    <p>DoubleCountPlusOne: {{ doubleCountPlusOne }}</p>
    <button @click="increment()">click</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useCouterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const route = useRoute()
console.log('route.path: ', route.path)

const store = useCouterStore()
const { counter, doubleCount, doubleCountPlusOne } = storeToRefs(store)
const { increment } = store
counter.value = 100
</script>

<style lang="scss" scoped></style>
