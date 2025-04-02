import type { StoryObj } from '@storybook/vue3'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import WithCheckboxesStory from './WithCheckboxes.vue'
import WithCheckboxesSource from './WithCheckboxes.vue?raw'
import WithRadioGroupStory from './WithRadioGroup.vue'

import WithRadioGroupSource from './WithRadioGroup.vue?raw'

/**
 * Displays a menu to the user — such as a set of actions or functions — triggered by a button.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/dropdown-menu
 */
export default {
  title: 'Components/Overlays/Dropdown Menu',
  component: DefaultStory,
  subcomponents: {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
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

export const WithCheckboxes: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithCheckboxesSource,
      },
    },
  },

  render: args => ({
    components: { WithCheckboxesStory },

    setup() {
      return { args }
    },

    template: html`
      <WithCheckboxesStory v-bind="args" />
    `,
  }
  ),
}

export const WithRadioGroup: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithRadioGroupSource,
      },
    },
  },

  render: args => ({
    components: { WithRadioGroupStory },

    setup() {
      return { args }
    },

    template: html`
      <WithRadioGroupStory v-bind="args" />
    `,
  }
  ),
}
