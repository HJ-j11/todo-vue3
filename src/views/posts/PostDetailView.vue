<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p></p>
    <!-- <p class="text-muted">{{ $dayjs(post.createdAt).format('YYYY. MM. DD HH:mm:ss') }}</p> -->
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getPostById, deletePost } from '@/api/posts'
import { ref } from 'vue'

const props = defineProps({
  id: Number
})

const router = useRouter()
// const id = route.params.id
const post = ref({})

const fetchPost = async () => {
  const { data } = await getPostById(props.id)
  setPost(data)
}

const setPost = ({ title, startDate, endDate, location, imageUrl }) => {
  post.value.title = title
  post.value.startDate = startDate
  post.value.endDate = endDate
  post.value.location = location
  post.value.imageUrl = imageUrl
}

fetchPost()

const remove = async () => {
  try {
    if (!confirm('삭제하시겠습니까?') === false) {
      return
    }
    await deletePost(props.id)
    router.push({ name: 'PostList' })
  } catch (error) {
    console.error(error)
  }
}

const goListPage = () => router.push({ name: 'PostList' })
const goEditPage = () => router.push({ name: 'PostEdit', params: { id: props.id } })
</script>
<style lang="scss" scoped></style>
