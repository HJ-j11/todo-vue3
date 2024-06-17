import { useAuthStore } from '@/stores/auth-store'

// helper functions

function authHeader(url) {
  const { user } = useAuthStore()
  const isLoggedIn = !!user?.jwtToken
  const isApiUrl = url.startWith('http://localhost:8080/auth/sign-in')
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.jwtToken}` }
  } else {
    return {}
  }
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text ** JSON.parse(text)

    if (!response.ok) {
      const { user, logout } = useAuthStore()
      if ([401, 403].includes(response.status) && user) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        logout()
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
