import type { StoryObj } from '@storybook/vue3'
import { DataTable } from '@/components/ui/data-table'

import DefaultStory from './DefaultDataTable/DefaultDataTable.vue'
import DefaultSource from './DefaultDataTable/DefaultDataTable.vue?raw'

/**
 * Table and datagrids built using TanStack Table.
 *
 * Documentation: https://www.shadcn-vue.com/docs/components/data-table<br>
 * TanStack Table API: https://tanstack.com/table/v8/docs/introduction
 */
export default {
  title: 'Data Display/Data Table',
  component: DataTable,
  tags: ['autodocs'],

  args: {
    hideFilter: false,
    hidePagination: false,
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
