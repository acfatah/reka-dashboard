import type { StoryObj } from '@storybook/vue3'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * For sighted users to preview content available behind a link.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/hover-card
 */
export default {
  title: 'Overlays/Hover Card',
  component: HoverCard,
  subcomponents: {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  },
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DefaultSource,
      },
    },
  },

  render: args => ({
    components: { DefaultStory },

    setup() {
      return { args }
    },

    template: `
      <DefaultStory v-bind="args" />
    `,
  }),
}
