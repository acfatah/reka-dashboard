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

import DateRangePickerDefault from '@/playground/components/date-range-picker/DateRangePickerDefault.vue'
import DateRangePickerDefaultSource from '@/playground/components/date-range-picker/DateRangePickerDefault.vue?raw'
import DateRangePickerForm from '@/playground/components/date-range-picker/DateRangePickerForm.vue'
import DateRangePickerFormSource from '@/playground/components/date-range-picker/DateRangePickerForm.vue?raw'
import DateRangePickerWithIndependentMonths from '@/playground/components/date-range-picker/DateRangePickerWithIndependentMonths.vue'
import DateRangePickerWithIndependentMonthsSource from '@/playground/components/date-range-picker/DateRangePickerWithIndependentMonths.vue?raw'

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
  title: 'Components/Data Entry/Date Range Picker',
  component: DateRangePickerDefault,
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
        code: DateRangePickerDefaultSource,
      },
    },
  },

  render: args => ({
    components: { DateRangePickerDefault },

    setup() {
      return { args }
    },

    template: html`
      <DateRangePickerDefault v-bind="args" />
    `,
  }),
}

export const Form: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DateRangePickerFormSource,
      },
    },
  },

  render: args => ({
    components: { DateRangePickerForm, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <DateRangePickerForm v-bind="args" />
    `,
  }),
}

export const WithIndependentMonths: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DateRangePickerWithIndependentMonthsSource,
      },
    },
  },

  render: args => ({
    components: { DateRangePickerWithIndependentMonths },

    setup() {
      return { args }
    },

    template: html`
      <DateRangePickerWithIndependentMonths v-bind="args" />
    `,
  }),
}
