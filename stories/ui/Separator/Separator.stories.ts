import type { StoryObj } from '@storybook/vue3'
import { Separator } from '@/components/ui/separator'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Visually or semantically separates content.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/separator
 */
export default {
  title: 'Components/Data Display/Separator',
  component: Separator,
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
