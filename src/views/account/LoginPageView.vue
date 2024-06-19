<template>
  <div class="card m-3">
    <h4 class="card-header">Login</h4>
    <div class="card-body">
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
        <div class="form-group">
          <label>Username</label>
          <Field
            name="username"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.username }"
          />
          <div class="invalid-feedback">{{ errors.username }}</div>
        </div>
        <div class="form-group">
          <label>Password</label>
          <Field
            name="password"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors.password }"
          />
          <div class="invalid-feedback">{{ errors.password }}</div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" :disabled="isSubmitting">
            <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
            Login
          </button>
          <router-link to="register" class="btn btn-link">Register</router-link>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth-store'
import { useRouter } from 'vue-router'
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'

const router = useRouter()

// Define your validation schema
const schema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})

function onSubmit(values) {
  const authStore = useAuthStore()
  const { username, password } = values
  authStore
    .login(username, password)
    .then(() => {
      router.push({ name: 'Home' })
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<style lang="scss" scoped></style>
