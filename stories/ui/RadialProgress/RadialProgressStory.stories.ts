import type { StoryObj } from '@storybook/vue3'
import { RadialProgress } from '@/components/ui/progress'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Radial progress implementation using CSS
 *
 * Inspired by: https://medium.com/@josephwong2004/how-to-do-x-in-css-radial-progress-chart-317f10994c08<br>
 * Codepen: https://codepen.io/josephwong2004/pen/eYpOKNL?editors=1100
 */
export default {
  title: 'Feedback/Radial Progress',
  component: RadialProgress,
  tags: ['autodocs'],

  args: {
    size: 80,
    thickness: 8,
  },

  argTypes: {
    modelValue: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
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
