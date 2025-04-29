import type { VNode } from 'vue'
import { Iconify } from '@/components/ui/icon'
import { h } from 'vue'

export interface Project {
  name: string
  url: string
  icon: VNode
}

export const projects: Project[] = [
  {
    name: 'Design Engineering',
    url: '#',
    icon: h(Iconify, { icon: 'lucide:frame' }),
  },
  {
    name: 'Sales & Marketing',
    url: '#',
    icon: h(Iconify, { icon: 'lucide:chart-pie' }),
  },
  {
    name: 'Travel',
    url: '#',
    icon: h(Iconify, { icon: 'lucide:map' }),
  },
]

export default projects
