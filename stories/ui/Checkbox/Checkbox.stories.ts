import type { StoryObj } from '@storybook/vue3'
import { Checkbox } from '@/components/ui/checkbox'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import ArrayInputStory from './ArrayInput.vue'
import ArrayInputSource from './ArrayInput.vue?raw'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import WithTextStory from './WithTextStory.vue'
import WithTextSource from './WithTextStory.vue?raw'

/**
 * A control that allows the user to toggle between checked and not checked.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/checkbox
 */
export default {
  title: 'Components/Data Entry/Checkbox',
  component: Checkbox,
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

export const ArrayInput: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: ArrayInputSource,
      },
    },
  },

  render: args => ({
    components: { ArrayInputStory, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <ArrayInputStory v-bind="args" />
    `,
  }),
}

export const WithText: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithTextSource,
      },
    },
  },

  render: args => ({
    components: { WithTextStory },

    setup() {
      return { args }
    },

    template: html`
      <WithTextStory v-bind="args" />
    `,
  }),
}
