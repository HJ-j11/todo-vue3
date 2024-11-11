import PostCreateView from '@/views/posts/PostCreateView.vue'
import PostEditView from '@/views/posts/PostEditView.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import PostListView from '@/views/posts/PostListView.vue'

export default {
  children: [
    {
      path: '/events',
      name: 'PostList',
      component: PostListView
    },
    {
      path: '/events/create',
      name: 'PostCreate',
      component: PostCreateView
    },
    {
      path: '/events/:id',
      name: 'PostDetail',
      component: PostDetailView,
      // props: true
      props: (route) => ({
        id: parseInt(route.params.id)
      })
    },
    {
      path: '/events/:id/edit',
      name: 'PostEdit',
      component: PostEditView
    }
  ]
}
