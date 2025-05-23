import type { StoryObj } from '@storybook/vue3'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import SideStory from './SideStory.vue'
import SideSource from './SideStory.vue?raw'

/**
 * Extends the Dialog component to display content that complements the main content
 * of the screen.
 *
 * Adjust the size of the sheet using CSS classes, e.g.
 *
 * ```
 * <SheetContent class="w-[400px] sm:w-[540px]">
 * ```
 *
 * Primitive API Reference: https://www.reka-ui.com/docs/components/dialog
 */
export default {
  title: 'Components/Overlays/Sheet',
  component: DefaultStory,
  subComponents: {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
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

export const Side: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: SideSource,
      },
    },

  },

  render: args => ({
    components: { SideStory },

    setup() {
      return { args }
    },

    template: `
      <SideStory v-bind="args" />
    `,
  }),
}
