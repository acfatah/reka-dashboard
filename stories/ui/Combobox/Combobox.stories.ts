import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
import { Toaster } from '@/components/ui/toast'

import ComboboxDefaultStory from '@/playground/components/combobox/ComboboxDemo1.vue'
import ComboboxDefaultSource from '@/playground/components/combobox/ComboboxDemo1.vue?raw'
import DropdownMenuStory from './DropdownMenuStory.vue'
import DropdownMenuSource from './DropdownMenuStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import InputWithComboboxStory from './InputWithCombobox.vue'
import InputWithComboboxSource from './InputWithCombobox.vue?raw'
import PopoverStory from './PopoverStory.vue'
import PopoverSource from './PopoverStory.vue?raw'
import ResponsiveStory from './ResponsiveStory.vue'
import ResponsiveSource from './ResponsiveStory.vue?raw'

/**
 * Autocomplete input and command palette with a list of suggestions.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/combobox
 *
 * See also:
 * - [Overlays/Command](?path=/docs/components-overlays-command--docs) component
 * - [Overlays/Popover](?path=/docs/components-overlays-popover--docs) component
 */
export default {
  title: 'Components/Data Entry/Combobox',
  component: ComboboxDefaultStory,
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: ComboboxDefaultSource,
      },
    },
  },

  args: {
    disabled: false,
  },

  render: args => ({
    components: { ComboboxDefaultStory },

    setup() {
      return { args }
    },

    template: html`
      <ComboboxDefaultStory v-bind="args" />
    `,
  }),
}

export const WithForm: StoryObj = {
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

/**
 * Also known as `AutoComplete` or `AutoSuggest` components.
 */
export const FormInputWithCombobox: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: InputWithComboboxSource,
      },
    },
  },

  render: args => ({
    components: { InputWithComboboxStory, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <InputWithComboboxStory v-bind="args" />
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
