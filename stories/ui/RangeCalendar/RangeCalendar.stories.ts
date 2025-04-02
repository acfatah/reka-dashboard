import type { StoryObj } from '@storybook/vue3'
import { Label } from '@/components/ui/label'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * A calendar component that allows users to select a range of dates.
 *
 * The `<RangeCalendar />` component is built on top of the `reka-ui` `Range Calendar`
 * component, which uses the `@internationalized/date` package to handle dates.
 *
 * Documentation: https://www.shadcn-vue.com/docs/components/range-calendar<br>
 * Guide: https://reka-ui.com/docs/guides/dates<br>
 * Primitive API Reference: https://reka-ui.com/docs/components/date-range-picker
 *
 * See also:
 * - [Data Display/Calendar](?path=/docs/data-display-calendar--docs) component
 * - [Data Entry/Date Picker](?path=/docs/data-entry-date-picker--docs) component
 * - [Data Entry/Date Range Picker](?path=/docs/data-entry-date-range-picker--docs) component
 * - [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html)
 */
export default {
  title: 'Components/Data Display/Range Calendar',
  component: Label,
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

    template: html`
      <DefaultStory v-bind="args" />
    `,
  }),
}
