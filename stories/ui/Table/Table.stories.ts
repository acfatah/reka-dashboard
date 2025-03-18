import type { StoryObj } from '@storybook/vue3'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * A responsive table component.
 *
 * For more complex data tables, see [Data Table](?path=/docs/data-display-data-table--docs) component.
 */
export default {
  title: 'Data Display/Table',
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
