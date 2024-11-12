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
    <div class="d-flex justify-content-center">
      <VueAwesomePaginate
        :total-items="pageInfo.totalItems"
        v-model="pageInfo.currentPage"
        :items-per-page="pageInfo.size"
        :max-pages-shown="pageInfo.size"
        @click="onClickHandler"
      />
    </div>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue'
import { reactive, ref} from 'vue'
import { getPosts } from '@/api/posts'
import { useRouter } from 'vue-router'
import { VueAwesomePaginate } from 'vue-awesome-paginate';

const router = useRouter()
const posts = ref([])
const pageInfo = reactive({
  currentPage : 1,
  size: 1,
  totalItems: 1,
})

const fetchPosts = async (pageNum) => {
  try {
    const { data } = await getPosts(pageNum)
    if (data.message == 'OK') {
      posts.value = data.response.content
      pageInfo.totalItems = data.response.totalElements
      pageInfo.size = data.response.size
    }

    console.log(`total pages : ${pageInfo.totalPages}`)
    console.log(`current page : ${pageInfo.currentPage}`)

  } catch (error) {
    console.error(error)
  }
}

fetchPosts(pageInfo.currentPage -1)

const onClickHandler = () => {
  fetchPosts(pageInfo.currentPage -1);
}



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
