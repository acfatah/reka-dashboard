import type { StoryObj } from '@storybook/vue3'
import {
  Calendar,
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarNextButton,
  CalendarPrevButton,
} from '@/components/ui/calendar'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import WithMonthYearSelectionStory from './WithMonthYearSelection.vue'
import WithMonthYearSelectionSource from './WithMonthYearSelection.vue?raw'

/**
 * A date field component that allows users to enter and edit date.
 *
 * Guide: https://reka-ui.com/docs/guides/dates.html<br>
 * Primitive API Reference: https://reka-ui.com/docs/components/calendar.html
 *
 * See also:
 * - [Data Display/Range Calendar](?path=/docs/data-display-range-calendar--docs) component
 * - [Data Entry/Date Picker](?path=/docs/data-entry-date-picker--docs) component
 * - [Data Entry/Date Range Picker](?path=/docs/data-entry-date-range-picker--docs) component
 * - [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html)
 */
export default {
  title: 'Data Display/Calendar',
  component: DefaultStory,
  subcomponents: {
    Calendar,
    CalendarCell,
    CalendarCellTrigger,
    CalendarGrid,
    CalendarGridBody,
    CalendarGridHead,
    CalendarGridRow,
    CalendarHeadCell,
    CalendarHeader,
    CalendarHeading,
    CalendarNextButton,
    CalendarPrevButton,
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

export const WithMonthYearSelection: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithMonthYearSelectionSource,
      },
    },
  },

  render: args => ({
    components: { WithMonthYearSelectionStory, Toaster },
    setup() {
      return { args }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <WithMonthYearSelectionStory v-bind="args" />
    `,
  }),
}
