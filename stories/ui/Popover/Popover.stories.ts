import type { StoryObj } from '@storybook/vue3'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import ComboboxUsingPopoverStory from './ComboboxUsingPopoverStory.vue'
import ComboboxUsingPopoverSource from './ComboboxUsingPopoverStory.vue?raw'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Displays rich content in a portal, triggered by a button.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/popover
 */
export default {
  title: 'Components/Overlays/Popover',
  component: DefaultStory,
  subcomponents: {
    Popover,
    PopoverContent,
    PopoverTrigger,
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

    template: `
      <DefaultStory v-bind="args" />
    `,
  }),
}

/**
 * Combobox using Popover and Command components.
 */
export const ComboboxUsingPopover: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: ComboboxUsingPopoverSource,
      },
    },
  },

  render: args => ({
    components: { ComboboxUsingPopoverStory },

    setup() {
      return { args }
    },

    template: `
      <ComboboxUsingPopoverStory v-bind="args" />
    `,
  }),
}
