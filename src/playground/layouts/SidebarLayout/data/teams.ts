import type { VNode } from 'vue'
import { Iconify } from '@/components/ui/icon'
import { h } from 'vue'

export interface Team {
  name: string
  logo: VNode
  plan: string
}

export const teams: Team[] = [
  {
    name: 'Acme Inc',
    logo: h(Iconify, { icon: 'lucide:gallery-vertical-end' }),
    plan: 'Enterprise',
  },
  {
    name: 'Acme Corp.',
    logo: h(Iconify, { icon: 'lucide:audio-waveform' }),
    plan: 'Startup',
  },
  {
    name: 'Evil Corp.',
    logo: h(Iconify, { icon: 'lucide:command' }),
    plan: 'Free',
  },
]

export default teams
