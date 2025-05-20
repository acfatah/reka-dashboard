import type { VNode } from 'vue'
import { h } from 'vue'
import { Icon } from '@/components/ui/icon'

export interface Project {
  name: string
  url: string
  icon: VNode
}

export const projects: Project[] = [
  {
    name: 'Design Engineering',
    url: '#',
    icon: h(Icon, { icon: 'lucide:frame' }),
  },
  {
    name: 'Sales & Marketing',
    url: '#',
    icon: h(Icon, { icon: 'lucide:chart-pie' }),
  },
  {
    name: 'Travel',
    url: '#',
    icon: h(Icon, { icon: 'lucide:map' }),
  },
]

export default projects
