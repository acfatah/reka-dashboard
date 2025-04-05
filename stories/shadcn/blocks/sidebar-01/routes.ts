import BlankLayout from '@/layouts/BlankLayout.vue'
import DefaultStory from './DefaultStory.vue'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: DefaultStory,
    meta: {
      layout: BlankLayout,
    },
  },
]
