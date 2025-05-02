import { useNProgress } from '@vueuse/integrations/useNProgress'
import { createRouter, createWebHistory } from 'vue-router'

import MutedLayout from '@/layouts/MutedLayout.vue'
import WelcomeLayout from '@/layouts/WelcomeLayout.vue'
import HomeView from '@/views/Welcome/HomeView.vue'

// playground routes
import { playgroundRoutes } from '../playground/router/playground'

const { start: startLoading, done: doneLoading } = useNProgress()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // playground routes
    ...playgroundRoutes,

    {
      path: '/',
      name: 'welcome',
      component: HomeView,
      meta: {
        layout: WelcomeLayout,
      },
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Welcome/AboutView.vue'),
      meta: {
        layout: MutedLayout,
      },
    },
  ],
})

router.beforeEach((_to, _from, next) => {
  startLoading()
  next()
})

router.afterEach(() => {
  doneLoading()
})

export default router
