import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
import { Calendar } from '@/components/ui/calendar'
import { Toaster } from '@/components/ui/toast'

import DatePickerDefault from '@/playground/components/date-picker/DatePickerDefault.vue'
import DatePickerDefaultSource from '@/playground/components/date-picker/DatePickerDefault.vue?raw'
import DatePickerForm from '@/playground/components/date-picker/DatePickerWithForm.vue'
import DatePickerFormSource from '@/playground/components/date-picker/DatePickerWithForm.vue?raw'
import DatePickerWithPreset from '@/playground/components/date-picker/DatePickerWithPreset.vue'
import DatePickerWithPresetSource from '@/playground/components/date-picker/DatePickerWithPreset.vue?raw'

/**
 * A date field component that allows users to enter and edit date.
 *
 * The Date Picker is built using a composition of the `<Popover />` and
 * either the `<Calendar />` or `<RangeCalendar />` components.
 *
 * Documentation: https://www.shadcn-vue.com/docs/components/date-picker<br>
 * Guide: https://reka-ui.com/docs/guides/dates<br>
 * Primitive API Reference: https://reka-ui.com/docs/components/calendar
 *
 * See also:
 * - [Overlays/Popover](?path=/docs/overlays-popover--docs) component
 * - [Data Display/Calendar](?path=/docs/data-display-calendar--docs) component
 * - [Data Display/Range Calendar](?path=/docs/data-display-range-calendar--docs) component
 * - [Data Entry/Date Range Picker](?path=/docs/data-entry-date-range-picker--docs) component
 * - [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html)
 */
export default {
  title: 'Components/Data Entry/Date Picker',
  component: Calendar,
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DatePickerDefaultSource,
      },
    },
  },

  render: args => ({
    components: { DatePickerDefault },

    setup() {
      return { args }
    },

    template: html`
      <DatePickerDefault v-bind="args" />
    `,
  }),
}

export const Form: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DatePickerFormSource,
      },
    },
  },

  render: args => ({
    components: { DatePickerForm, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <DatePickerForm v-bind="args" />
    `,
  }),
}

export const WithPreset: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DatePickerWithPresetSource,
      },
    },
  },

  render: args => ({
    components: { DatePickerWithPreset },

    setup() {
      return { args }
    },

    template: html`
      <DatePickerWithPreset v-bind="args" />
    `,
  }),
}
