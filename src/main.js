import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import dayjs from '@/plugins/dayjs'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'

const app = createApp(App)
app.use(router)
app.use(dayjs)
app.use(createPinia())
app.mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
