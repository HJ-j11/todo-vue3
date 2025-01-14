import { ref } from 'vue'

const alerts = ref([])
export const useAlert = () => {
  const vAlert = (message, type = 'error') => {
    alerts.value.push({ message, type })
    setTimeout(() => {
      alert.value.shift()
    }, 2000)
  }
  const vSuccess = (message) => vAlert(message, 'success')
  return {
    alerts,
    vAlert,
    vSuccess
  }
}
