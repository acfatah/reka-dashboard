import type { StoryObj } from '@storybook/vue3'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import DropdownMenuStory from './DropdownMenuStory.vue'
import DropdownMenuSource from './DropdownMenuStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import PopoverStory from './PopoverStory.vue'
import PopoverSource from './PopoverStory.vue?raw'
import ResponsiveStory from './ResponsiveStory.vue'
import ResponsiveSource from './ResponsiveStory.vue?raw'

/**
 * Autocomplete input and command palette with a list of suggestions.
 *
 * The Combobox is built using a composition of the `Popover` and the `Command` components.
 *
 * See also:
 * - [Overlays/Command](?path=/docs/overlays-command--docs) component
 * - [Overlays/Popover](?path=/docs/overlays-popover--docs) component
 */
export default {
  title: 'Data Entry/Combobox',
  component: DefaultStory,
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

  args: {
    disabled: false,
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
      <Teleport defer to="body">
        <Toaster />
      </Teleport>
      <FormStory v-bind="args" />
    `,
  }),
}

export const Popover: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: PopoverSource,
      },
    },
  },

  render: args => ({
    components: { PopoverStory },

    setup() {
      return { args }
    },

    template: html`
      <PopoverStory v-bind="args" />
    `,
  }),
}

export const DropdownMenu: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DropdownMenuSource,
      },
    },
  },

  render: args => ({
    components: { DropdownMenuStory },

    setup() {
      return { args }
    },

    template: html`
      <DropdownMenuStory v-bind="args" />
    `,
  }),
}

export const Responsive: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: ResponsiveSource,
      },
    },
  },

  render: args => ({
    components: { ResponsiveStory },

    setup() {
      return { args }
    },

    template: html`
      <ResponsiveStory v-bind="args" />
    `,
  }),
}
