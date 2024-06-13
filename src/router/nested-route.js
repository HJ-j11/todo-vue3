import NestedView from '@/views/nested/NestedView.vue'
import NestedOneView from '@/views/nested/NestedOneView.vue'
import NestedTwoView from '@/views/nested/NestedTwoView.vue'
import NestedHomeView from '@/views/nested/NestedHomeView.vue'

export default {
  children: [
    {
      path: '/nested',
      name: 'Nested',
      component: NestedView,
      children: [
        {
          path: '',
          name: 'NestedHome',
          component: NestedHomeView
        },
        {
          path: 'one',
          name: 'NestedOne',
          component: NestedOneView
        },
        {
          path: 'two',
          name: 'NestedTwo',
          component: NestedTwoView
        }
      ]
    }
  ]
}
