<template>
  <div>
    <h2>목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :start-date="post.startDate"
          :end-date="post.endDate"
          :location="post.location"
          :image-url="post.imageUrl"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
    <!-- <nav class="mt-5" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav> -->
    <hr class="my-4" />
    <!-- <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination> -->
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue'
import { reactive, ref } from 'vue'
import { getPosts } from '@/api/posts'
import { useRouter } from 'vue-router'

const router = useRouter()
const posts = ref([])
const pages = reactive({
  rows: 1,
  perPage: 10
})


const fetchPosts = async () => {
  try {
    const { data } = await getPosts()
    if (data.message == 'OK') {
      posts.value = data.response.content
    }
  } catch (error) {
    console.error(error)
  }
}

fetchPosts()

const goPage = (id) => {
  router.push({
    // router.push(`/posts/${id}`);
    name: 'PostDetail',
    params: {
      id
    }
  })
}
</script>

<style lang="scss" scoped></style>
