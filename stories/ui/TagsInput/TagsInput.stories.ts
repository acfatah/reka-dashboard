import type { StoryObj } from '@storybook/vue3'
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from '@/components/ui/tags-input'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import WithComboboxStory from './WithCombobox.vue'
import WithComboboxSource from './WithCombobox.vue?raw'

/**
 * Tag inputs render tags inside an input, followed by an actual text input.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/tags-input
 */
export default {
  title: 'Data Entry/Tags Input',
  component: DefaultStory,
  subcomponents: {
    TagsInput,
    TagsInputInput,
    TagsInputItem,
    TagsInputItemDelete,
    TagsInputItemText,
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
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <FormStory v-bind="args" />
    `,
  }),
}

export const WithCombobox: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithComboboxSource,
      },
    },
  },

  render: args => ({
    components: { WithComboboxStory, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <WithComboboxStory v-bind="args" />
    `,
  }),
}
