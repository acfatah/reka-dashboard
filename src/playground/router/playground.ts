import SidebarLayout from '@/playground/layouts/SidebarLayout.vue'

import type { RouteRecordRaw } from 'vue-router'

export const playgroundRoutes: RouteRecordRaw[] = [
  {
    path: '/playground',
    redirect: '/playground',
    children: [
      {
        path: '',
        name: 'playground',
        component: () => import('@/playground/views/Playground.vue'),
        meta: {
          layout: SidebarLayout,
        },
      },
    ],
  },
]
