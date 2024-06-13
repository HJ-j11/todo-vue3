import PostCreateView from '@/views/posts/PostCreateView.vue'
import PostEditView from '@/views/posts/PostEditView.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import PostListView from '@/views/posts/PostListView.vue'

export default {
  children: [
    {
      path: '/posts',
      name: 'PostList',
      component: PostListView
    },
    {
      path: '/posts/create',
      name: 'PostCreate',
      component: PostCreateView
    },
    {
      path: '/posts/:id',
      name: 'PostDetail',
      component: PostDetailView,
      // props: true
      props: (route) => ({
        id: parseInt(route.params.id)
      })
    },
    {
      path: '/posts/:id/edit',
      name: 'PostEdit',
      component: PostEditView
    }
  ]
}
