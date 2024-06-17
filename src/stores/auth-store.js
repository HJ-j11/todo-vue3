import { defineStore } from 'pinia'
import instance from '@/plugins/axios'
import router from '@/router'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    username: JSON.parse(localStorage.getItem('user'))
  }),
  getters: {
    isLoggedIn: (state) => {
      return state.username != null
    }
  },
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

        if (res.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(res.data))
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
