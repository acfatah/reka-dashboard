import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Welcome/HomeView.vue'
import { useNProgress } from '@vueuse/integrations/useNProgress'

const { start: startLoading, done: doneLoading } = useNProgress()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Welcome/AboutView.vue'),
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
