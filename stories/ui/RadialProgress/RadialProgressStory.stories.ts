import type { StoryObj } from '@storybook/vue3'
import { RadialProgress } from '@/components/ui/progress'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import RadialProgressV1Story from './RadialProgressV1Story.vue'
import RadialProgressV1Source from './RadialProgressV1Story.vue?raw'
import VisDonutStory from './VisDonutStory.vue'
import VisDonutSource from './VisDonutStory.vue?raw'

export default {
  title: 'Components/Feedback/Radial Progress',
  component: RadialProgress,
  tags: ['autodocs'],

  args: {
    size: 128,
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

/**
 * Radial progress implementation using CSS.
 *
 * Inspired by: https://medium.com/@josephwong2004/how-to-do-x-in-css-radial-progress-chart-317f10994c08<br>
 * Codepen: https://codepen.io/josephwong2004/pen/eYpOKNL?editors=1100
 */
export const RadialProgressV1: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: RadialProgressV1Source,
      },
    },
  },

  render: args => ({
    components: { RadialProgressV1Story },

    setup() {
      return { args }
    },

    template: `
      <RadialProgressV1Story v-bind="args" />
    `,
  }),
}

RadialProgressV1.name = 'Radial Progress V1'
/**
 * Radial progress implementation using VisDonut.
 *
 * VisDonut API Reference: https://unovis.dev/docs/misc/Donut
 */
export const VisDonut: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: VisDonutSource,
      },
    },
  },

  args: {
    hideLabel: false,
    hideSubLabel: false,
    progressText: '',
    completeText: 'Complete',
  },

  render: args => ({
    components: { VisDonutStory },

    setup() {
      return { args }
    },

    template: `
      <VisDonutStory v-bind="args" />
    `,
  }),
}
