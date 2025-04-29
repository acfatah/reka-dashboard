import SidebarLayout from '@/playground/layouts/SidebarLayout.vue'

export const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/playground/views/Dashboard.vue'),
    meta: {
      layout: SidebarLayout,
    },
  },
]
