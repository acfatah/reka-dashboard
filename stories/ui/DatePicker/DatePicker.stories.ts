import type { StoryObj } from '@storybook/vue3'
import { Calendar } from '@/components/ui/calendar'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import WithPresetStory from './WithPresetStory.vue'
import WithPresetSource from './WithPresetStory.vue?raw'

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

export const WithPreset: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithPresetSource,
      },
    },
  },

  render: args => ({
    components: { WithPresetStory },

    setup() {
      return { args }
    },

    template: html`
      <WithPresetStory v-bind="args" />
    `,
  }),
}
