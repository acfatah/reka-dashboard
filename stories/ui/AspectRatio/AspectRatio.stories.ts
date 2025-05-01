import type { StoryObj } from '@storybook/vue3'
import { AspectRatio } from '@/components/ui/aspect-ratio'

import AspectRatioDefault from '@/playground/components/aspect-ratio/AspectRatioDefault.vue'
import AspectRatioDefaultSource from '@/playground/components/aspect-ratio/AspectRatioDefault.vue?raw'

/**
 * Displays content within a desired ratio.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/aspect-ratio
 */
export default {
  title: 'Components/Layout/Aspect Ratio',
  component: AspectRatioDefault,
  subcomponents: {
    AspectRatio,
  },
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: AspectRatioDefaultSource,
      },
    },
  },

  render: args => ({
    components: { AspectRatioDefault },

    setup() {
      return { args }
    },

    template: `
      <AspectRatioDefault v-bind="args" />
    `,
  }),
}
