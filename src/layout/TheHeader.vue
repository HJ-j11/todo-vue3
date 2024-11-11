<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CODING</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/events">Events</RouterLink>
            </li>
            <!-- <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/nested">Nested</RouterLink>
            </li> -->
          </ul>
          <div class="d-flex row-g2" role="search">
            <button class="btn btn-outline-light" type="button" @click="handleAuthClick">
              {{ loginButton }}
            </button>
          </div>
          <div class="d-flex" role="search">
            <button class="btn btn-outline-light" type="button" @click="goPage">Write</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth-store'
import { ref, onMounted, watch } from 'vue'

const router = useRouter()
const isLoggedIn = ref(false)
const authStore = useAuthStore()
const loginButton = ref('Login')

watch(isLoggedIn, (newValue) => {
  loginButton.value = newValue ? 'Logout' : 'Login'
})

const checkAuthStatus = () => {
  isLoggedIn.value = localStorage.getItem('user') !== null
}

const goPage = () => {
  router.push({
    name: 'PostCreate'
  })
}

const goLoginPage = () => {
  router.push({
    name: 'Login'
  })
}

const handleAuthClick = () => {
  if (isLoggedIn.value) {
    authStore.logout()
    alert('Logged Out!')
    checkAuthStatus()
  } else {
    goLoginPage()
  }
}

onMounted(() => {
  checkAuthStatus()
})
</script>

<style></style>
