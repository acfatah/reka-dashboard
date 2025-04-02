import type { StoryObj } from '@storybook/vue3'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import VerticalStory from './VerticalStory.vue'
import VerticalSource from './VerticalStory.vue?raw'
import WithHandleStory from './WithHandleStory.vue'
import WithHandleSource from './WithHandleStory.vue?raw'

/**
 * Accessible resizable panel groups and layouts with keyboard support.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/splitter
 */
export default {
  title: 'Components/Layout/Resizable',
  component: DefaultStory,
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

export const Vertical: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: VerticalSource,
      },
    },
  },

  render: args => ({
    components: { VerticalStory },

    setup() {
      return { args }
    },

    template: `
      <VerticalStory v-bind="args" />
    `,
  }),
}

export const WithHandle: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithHandleSource,
      },
    },
  },

  render: args => ({
    components: { WithHandleStory },

    setup() {
      return { args }
    },

    template: `
      <WithHandleStory v-bind="args" />
    `,
  }),
}
