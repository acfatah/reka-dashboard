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

import DropdownDefault from '@/playground/components/dropdown/DropdownDefault.vue'
import DropdownDefaultSource from '@/playground/components/dropdown/DropdownDefault.vue?raw'

import DropdownWithCheckboxes from '@/playground/components/dropdown/DropdownWithCheckboxes.vue'
import DropdownWithCheckboxesSource from '@/playground/components/dropdown/DropdownWithCheckboxes.vue?raw'

import DropdownWithRadioGroup from '@/playground/components/dropdown/DropdownWithRadioGroup.vue'
import DropdownWithRadioGroupSource from '@/playground/components/dropdown/DropdownWithRadioGroup.vue?raw'

/**
 * Displays a menu to the user — such as a set of actions or functions — triggered by a button.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/dropdown-menu
 */
export default {
  title: 'Components/Overlays/Dropdown Menu',
  component: DropdownDefault,
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
        code: DropdownDefaultSource,
      },
    },
  },

  render: args => ({
    components: { DropdownDefault },

    setup() {
      return { args }
    },

    template: html`
      <DropdownDefault v-bind="args" />
    `,
  }),
}

export const WithCheckboxes: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DropdownWithCheckboxesSource,
      },
    },
  },

  render: args => ({
    components: { DropdownWithCheckboxes },

    setup() {
      return { args }
    },

    template: html`
      <DropdownWithCheckboxes v-bind="args" />
    `,
  }
  ),
}

export const WithRadioGroup: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DropdownWithRadioGroupSource,
      },
    },
  },

  render: args => ({
    components: { DropdownWithRadioGroup },

    setup() {
      return { args }
    },

    template: html`
      <DropdownWithRadioGroup v-bind="args" />
    `,
  }
  ),
}
