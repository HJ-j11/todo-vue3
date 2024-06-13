<template>
  <div>
    <h2>Post Edit</h2>
    <hr class="my-4" />
    <PostForm v-model:title="form.title" v-model:content="form.content" @submit.prevent="edit">
      <template #actions>
        <div class="pt-4">
          <button type="button" class="btn btn-outline-danger me-2" @click="goDetailPage">
            Cancel
          </button>
          <button class="btn btn-primary">Edit</button>
        </div>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPostById, updatePost } from '@/api/posts'
import PostForm from '@/components/posts/PostForm.vue'

const route = useRoute()
const router = useRouter()
const id = route.params.id

const form = ref({
  title: null,
  content: null
})

const fetchPost = async () => {
  try {
    const { data } = await getPostById(id)
    setForm(data)
  } catch (error) {
    console.error(error)
  }
}

const setForm = ({ title, content, createdAt }) => {
  form.value.title = title
  form.value.content = content
  form.value.createdAt = createdAt
}

fetchPost()

const edit = async () => {
  try {
    await updatePost(id, { ...form.value })
    router.push({ name: 'PostDetail', params: { id } })
  } catch (error) {
    console.error(error)
  }
}

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } })
</script>

<style lang="scss" scoped></style>
