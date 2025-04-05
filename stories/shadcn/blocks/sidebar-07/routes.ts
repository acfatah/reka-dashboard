import BlankLayout from '@/layouts/BlankLayout.vue'
import Dashboard from './DefaultStory.vue'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      layout: BlankLayout,
    },
  },
]
