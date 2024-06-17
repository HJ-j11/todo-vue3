import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import accoutRoute from './accout-route'
import postRoute from './post-route'

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
//   const publicPages = ['/login']
//   const authRequired = !publicPages.includes(to.path)
//   const auth = useAuthStore()

//   if (authRequired && !auth.user) {
//     auth.returnUrl = to.fullPath
//     return '/login'
//   }
// })

export default router
