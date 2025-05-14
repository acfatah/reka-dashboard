import type { StoryObj } from '@storybook/vue3'
import { Separator } from '@/components/ui/separator'

import SeparatorDefaultStory from './SeparatorDefault.vue'
import SeparatorDefaultSource from './SeparatorDefault.vue?raw'
import VerticalWithLabelStory from './VerticalWithLabel.vue'
import VerticalWithLabelSource from './VerticalWithLabel.vue?raw'

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
        code: SeparatorDefaultSource,
      },
    },
  },

  render: args => ({
    components: { SeparatorDefaultStory },

    setup() {
      return { args }
    },

    template: `
      <SeparatorDefaultStory v-bind="args" />
    `,
  }),
}

/**
 * Note that the height of the parent element should have a definite value to make the vertical separator visible.
 */
export const VerticalWithLabel: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: VerticalWithLabelSource,
      },
    },
  },

  render: args => ({
    components: { VerticalWithLabelStory },

    setup() {
      return { args }
    },

    template: `
      <VerticalWithLabelStory v-bind="args" />
    `,
  }),
}
