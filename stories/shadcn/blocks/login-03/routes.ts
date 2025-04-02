import DefaultStory from './DefaultStory.vue'
import Mutedlayout from './MutedLayout.vue'

export default [
  {
    path: '/',
    name: 'login',
    component: DefaultStory,
    meta: {
      layout: Mutedlayout,
    },
  },
]
