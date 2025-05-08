import type { StoryObj } from '@storybook/vue3'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { html } from 'common-tags'

import CommandDefaultStory from './CommandDefault.vue'
import CommandDefaultSource from './CommandDefault.vue?raw'
import CommandWithDialogStory from './WithDialog.vue'
import CommandWithDialogSource from './WithDialog.vue?raw'

/**
 * Fast, composable, unstyled command menu.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/combobox#command-menu
 */
export default {
  title: 'Components/Overlays/Command',
  component: CommandDefaultStory,
  subcomponents: {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  },
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: CommandDefaultSource,
      },
    },
  },

  render: args => ({
    components: { CommandDefaultStory },

    setup() {
      return { args }
    },

    template: html`
      <CommandDefaultStory v-bind="args" />
    `,
  }),
}

export const WithDialog: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: CommandWithDialogSource,
      },
    },
  },

  render: args => ({
    components: { CommandWithDialogStory },

    setup() {
      return { args }
    },

    template: html`
      <CommandWithDialogStory v-bind="args" />
    `,
  }),
}
