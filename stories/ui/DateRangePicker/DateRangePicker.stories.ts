import type { StoryObj } from '@storybook/vue3'
import {
  RangeCalendar,
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHead,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarNextButton,
  RangeCalendarPrevButton,
} from '@/components/ui/range-calendar'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import WithIndependentMonthsStory from './WithIndependentMonths.vue'
import WithIndependentMonthsSource from './WithIndependentMonths.vue?raw'

/**
 * A calendar component that allows users to select a range of dates.
 *
 * Documentation: https://www.shadcn-vue.com/docs/components/date-picker<br>
 * Guide: https://reka-ui.com/docs/guides/dates<br>
 * Primitive API Reference: https://reka-ui.com/docs/components/date-range-picker
 *
 * See also:
 * - [Data Display/Calendar](?path=/docs/data-display-calendar--docs) component
 * - [Data Display/Range Calendar](?path=/docs/data-display-range-calendar--docs) component
 * - [Data Entry/Date Picker](?path=/docs/data-entry-date-picker--docs) component
 * - [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html)
 */
export default {
  title: 'Data Entry/Date Range Picker',
  component: DefaultStory,
  subcomponents: {
    RangeCalendar,
    RangeCalendarCell,
    RangeCalendarCellTrigger,
    RangeCalendarGrid,
    RangeCalendarGridBody,
    RangeCalendarGridHead,
    RangeCalendarGridRow,
    RangeCalendarHeadCell,
    RangeCalendarHeader,
    RangeCalendarHeading,
    RangeCalendarNextButton,
    RangeCalendarPrevButton,
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

    template: html`
      <DefaultStory v-bind="args" />
    `,
  }),
}

export const Form: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: FormSource,
      },
    },
  },

  render: args => ({
    components: { FormStory, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <FormStory v-bind="args" />
    `,
  }),
}

export const WithIndependentMonths: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithIndependentMonthsSource,
      },
    },
  },

  render: args => ({
    components: { WithIndependentMonthsStory },

    setup() {
      return { args }
    },

    template: html`
      <WithIndependentMonthsStory v-bind="args" />
    `,
  }),
}
