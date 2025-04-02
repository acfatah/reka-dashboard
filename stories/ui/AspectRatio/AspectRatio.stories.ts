import type { StoryObj } from '@storybook/vue3'
import { AspectRatio } from '@/components/ui/aspect-ratio'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Displays content within a desired ratio.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/aspect-ratio
 */
export default {
  title: 'Components/Layout/Aspect Ratio',
  component: DefaultStory,
  subcomponents: {
    AspectRatio,
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
