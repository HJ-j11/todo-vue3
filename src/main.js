import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import dayjs from '@/plugins/dayjs'
import { VueAwesomePaginate } from 'vue-awesome-paginate'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'

const app = createApp(App)
app.use(router)
app.use(dayjs)
app.use(VueAwesomePaginate)
app.use(createPinia())
app.mount('#app')

import 'vue-awesome-paginate/dist/style.css'
import '@/assets/pagination.css'
import 'bootstrap/dist/js/bootstrap.js'
