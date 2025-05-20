import type { VNode } from 'vue'
import { h } from 'vue'
import { Icon } from '@/components/ui/icon'

export interface NavItem {
  title: string
  url: string
}

export interface NavGroup {
  title: string
  url: string
  icon: VNode
  isActive?: boolean
  items: NavItem[]
}

export const navMain: NavGroup[] = [
  {
    title: 'Playground',
    url: '#',
    icon: h(Icon, { icon: 'lucide:square-terminal' }),
    isActive: true,
    items: [
      {
        title: 'History',
        url: '#',
      },
      {
        title: 'Starred',
        url: '#',
      },
      {
        title: 'Settings',
        url: '#',
      },
    ],
  },
  {
    title: 'Models',
    url: '#',
    icon: h(Icon, { icon: 'lucide:bot' }),
    items: [
      {
        title: 'Genesis',
        url: '#',
      },
      {
        title: 'Explorer',
        url: '#',
      },
      {
        title: 'Quantum',
        url: '#',
      },
    ],
  },
  {
    title: 'Documentation',
    url: '#',
    icon: h(Icon, { icon: 'lucide:book-open' }),
    items: [
      {
        title: 'Introduction',
        url: '#',
      },
      {
        title: 'Get Started',
        url: '#',
      },
      {
        title: 'Tutorials',
        url: '#',
      },
      {
        title: 'Changelog',
        url: '#',
      },
    ],
  },
  {
    title: 'Settings',
    url: '#',
    icon: h(Icon, { icon: 'lucide:settings-2' }),
    items: [
      {
        title: 'General',
        url: '#',
      },
      {
        title: 'Team',
        url: '#',
      },
      {
        title: 'Billing',
        url: '#',
      },
      {
        title: 'Limits',
        url: '#',
      },
    ],
  },
]
