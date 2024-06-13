import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import accoutRoute from './accout-route'
import postRoute from './post-route'
import { useAuthStore } from '@/stores/auth-store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  },
  { ...accoutRoute },
  { ...postRoute }
]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes
})

// router.beforeEach(async (to) => {
//   const authStore = useAuthStore()

//   if (!authStore.user) {
//     router.push('/login')
//   }
// })

export default router
