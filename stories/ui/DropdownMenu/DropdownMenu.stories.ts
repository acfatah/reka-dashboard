import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
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

import DropdownDefault from '@/playground/components/dropdown/DropdownDefault.vue'
import DropdownDefaultSource from '@/playground/components/dropdown/DropdownDefault.vue?raw'

import DropdownWithCheckboxes from '@/playground/components/dropdown/DropdownWithCheckboxes.vue'
import DropdownWithCheckboxesSource from '@/playground/components/dropdown/DropdownWithCheckboxes.vue?raw'

import DropdownWithRadioGroup from '@/playground/components/dropdown/DropdownWithRadioGroup.vue'
import DropdownWithRadioGroupSource from '@/playground/components/dropdown/DropdownWithRadioGroup.vue?raw'

import DropdownMenuWithAvatar from '@/playground/components/dropdown/DropdownMenuWithAvatar.vue'
import DropdownMenuWithAvatarSource from '@/playground/components/dropdown/DropdownMenuWithAvatar.vue?raw'

import DropdownMenuWithAvatarOnly from '@/playground/components/dropdown/DropdownMenuAvatarOnly.vue'
import DropdownMenuWithAvatarOnlySource from '@/playground/components/dropdown/DropdownMenuAvatarOnly.vue?raw'

import DropdownMenuIconButton from '@/playground/components/dropdown/DropdownMenuIconButton.vue'
import DropdownMenuIconButtonSource from '@/playground/components/dropdown/DropdownMenuIconButton.vue?raw'

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
  }),
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
  }),
}

export const WithAvatar: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DropdownMenuWithAvatarSource,
      },
    },
  },

  render: args => ({
    components: { DropdownMenuWithAvatar },

    setup() {
      return { args }
    },

    template: html`
      <DropdownMenuWithAvatar v-bind="args" />
    `,
  }),
}

export const AvatarOnly: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DropdownMenuWithAvatarOnlySource,
      },
    },
  },

  render: args => ({
    components: { DropdownMenuWithAvatarOnly },

    setup() {
      return { args }
    },

    template: html`
      <DropdownMenuWithAvatarOnly v-bind="args" />
    `,
  }),
}

export const IconButton: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DropdownMenuIconButtonSource,
      },
    },
  },

  render: args => ({
    components: { DropdownMenuIconButton },

    setup() {
      return { args }
    },

    template: html`
      <DropdownMenuIconButton v-bind="args" />
    `,
  }),
}
