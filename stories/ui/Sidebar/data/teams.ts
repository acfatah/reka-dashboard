import type { VNode } from 'vue'
import { h } from 'vue'
import { Icon } from '@/components/ui/icon'

export interface Team {
  name: string
  logo: VNode
  plan: string
}

export const teams: Team[] = [
  {
    name: 'Acme Inc',
    logo: h(Icon, { icon: 'lucide:gallery-vertical-end' }),
    plan: 'Enterprise',
  },
  {
    name: 'Acme Corp.',
    logo: h(Icon, { icon: 'lucide:audio-waveform' }),
    plan: 'Startup',
  },
  {
    name: 'Evil Corp.',
    logo: h(Icon, { icon: 'lucide:command' }),
    plan: 'Free',
  },
]

export default teams
