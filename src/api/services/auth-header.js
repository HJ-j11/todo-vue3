export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('accessToken'))

  if (user && user.accessToken) {
    return { Authorizaion: 'Bearer' + user.accessToken }
  } else {
    return {}
  }
}
