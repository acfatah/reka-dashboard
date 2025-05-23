import type { StoryObj } from '@storybook/vue3'

import { Placeholder } from '@/components/ui/placeholder'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Temporary element as a placeholder for content.
 */
export default {
  title: 'Components/Others/Placeholder',
  component: Placeholder,
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
