import LoginView from '@/views/account/LoginPageView.vue'
import RegisterView from '@/views/account/RegisterView.vue'

export default {
  children: [
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    }
  ]
}
