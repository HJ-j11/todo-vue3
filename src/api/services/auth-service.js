import axios from 'axios'

const API_URL = 'http://localhost:8081'

class AuthService {
  async login(user) {
    try {
      const res = await axios.post(API_URL + '/member/sign-in', {
        username: user.username,
        password: user.password
      })

      if (res.data.accessToken) {
        localStorage.setItem('accessToken', JSON.stringify(res.data))
      }

      return res.data
    } catch (error) {
      console.error('Login failed', error)
      throw error
    }
  }

  logout() {
    localStorage.removeItem('accessToken')
  }

  async register(user) {
    try {
      const res = await axios.post(API_URL + '/member/sign-up', {
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

export default new AuthService()
