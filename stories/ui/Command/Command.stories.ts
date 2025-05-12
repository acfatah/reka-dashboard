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

import CommandWithDialogStory from '@/playground/components/command/CommandWithDialog.vue'
import CommandWithDialogSource from '@/playground/components/command/CommandWithDialog.vue?raw'
import CommandDefaultStory from './CommandDefault.vue'
import CommandDefaultSource from './CommandDefault.vue?raw'
import CommandWithDropdownStory from './CommandWithDropdown.vue'
import CommandWithDropdownSource from './CommandWithDropdown.vue?raw'
import CommandWithPopoverStory from './CommandWithPopover.vue'
import CommandWithPopoverSource from './CommandWithPopover.vue?raw'
import ResponsiveCommandStory from './ResponsiveCommand.vue'
import ResponsiveCommandSource from './ResponsiveCommand.vue?raw'

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

export const WithPopover: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: CommandWithPopoverSource,
      },
    },
  },

  render: args => ({
    components: { CommandWithPopoverStory },

    setup() {
      return { args }
    },

    template: html`
      <CommandWithPopoverStory v-bind="args" />
    `,
  }),
}

export const WithDropdown: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: CommandWithDropdownSource,
      },
    },
  },

  render: args => ({
    components: { CommandWithDropdownStory },

    setup() {
      return { args }
    },

    template: html`
      <CommandWithDropdownStory v-bind="args" />
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

export const Responsive: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: ResponsiveCommandSource,
      },
    },
  },

  render: args => ({
    components: { ResponsiveCommandStory },

    setup() {
      return { args }
    },

    template: html`
      <ResponsiveCommandStory v-bind="args" />
    `,
  }),
}
