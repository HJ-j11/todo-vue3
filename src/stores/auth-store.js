import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const API_URL = 'http://localhost:8080/auth'

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
        const res = await axios.post(API_URL + '/sign-in', {
          username: username,
          password: password
        })

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
        const res = await axios.post(API_URL + '/sign-up', {
          name: user.name,
          username: user.username,
          password: user.password
        })
        return res.data
      } catch (error) {
        console.error('Registration failed', error)
        throw error
      }
    }
  }
})
