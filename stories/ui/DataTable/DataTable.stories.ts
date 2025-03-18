import type { StoryObj } from '@storybook/vue3'
import { DataTable } from '@/components/ui/data-table'

import DefaultStory from './DefaultDataTable/DefaultDataTable.vue'
import DefaultSource from './DefaultDataTable/DefaultDataTable.vue?raw'
import TanStackTableComponent from './TanStackTable/TanStackTable.vue'
import TanStackTableSource from './TanStackTable/TanStackTable.vue?raw'

/**
 * Minimal reusable DataTable component.
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

/**
 * TanStack Table provides more advanced options to build more complex data tables.
 *
 * Documentation: https://www.shadcn-vue.com/docs/components/data-table<br>
 * TanStack Table API: https://tanstack.com/table/v8/docs/introduction
 */
export const TanStackTable: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: TanStackTableSource,
      },
    },
  },

  render: args => ({
    components: { TanStackTableComponent },

    setup() {
      return { args }
    },

    template: `
      <TanStackTableComponent v-bind="args" />
    `,
  }),
}

TanStackTable.name = 'TanStack Table'
