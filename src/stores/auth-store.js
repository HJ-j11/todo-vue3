import { defineStore } from 'pinia'
import instance from '@/plugins/axios'
import router from '@/router'
import { useCookies } from 'vue3-cookies'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user'))
  }),
  actions: {
    async login(username, password) {
      try {
        const res = await instance.post(
          '/auth/sign-in',
          {
            username: username,
            password: password
          },
          {
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              Accept: 'application/json'
            },
            withCredentials: true
          }
        )

        const data = res.data.response
        console.log(data)

        if (data.accessToken) {
          this.user = data.accessToken
          localStorage.setItem('user', JSON.stringify(data.accessToken))
        }

        return res.data
      } catch (error) {
        console.error('Login failed', error)
        throw error
      }
    },

    logout() {
      this.user = null
      localStorage.removeItem('user')
      router.push('/')
    },

    async register(user) {
      try {
        const res = await instance.post(
          '/auth/sign-up',
          {
            name: user.name,
            username: user.username,
            password: user.password
          },
          {
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            },
            withCredentials: true
          }
        )
        return res.data
      } catch (error) {
        console.error('Registration failed', error)
        throw error
      }
    }
  }
})
