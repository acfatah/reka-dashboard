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

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import CommandDialogStory from './Dialog.vue'
import CommandDialogSource from './Dialog.vue?raw'

/**
 * Fast, composable, unstyled command menu.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/combobox#command-menu
 */
export default {
  title: 'Overlays/Command',
  component: DefaultStory,
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

export const Dialog: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: CommandDialogSource,
      },
    },
  },

  render: args => ({
    components: { CommandDialogStory },

    setup() {
      return { args }
    },

    template: html`
      <CommandDialogStory v-bind="args" />
    `,
  }),
}
