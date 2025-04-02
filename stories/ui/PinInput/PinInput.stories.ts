import type { StoryObj } from '@storybook/vue3'
import {
  PinInput,
  PinInputGroup,
  PinInputInput,
  PinInputSeparator,
} from '@/components/ui/pin-input'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import SeparatorStory from './SeparatorStory.vue'
import SeparatorSource from './SeparatorStory.vue?raw'

/**
 * Allows users to input a sequence of one-character alphanumeric inputs.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/pin-input
 */
export default {
  title: 'Components/Data Entry/PIN Input',
  component: DefaultStory,
  subcomponents: {
    PinInput,
    PinInputGroup,
    PinInputInput,
    PinInputSeparator,
  },
  tags: ['autodocs'],

  args: {
    mask: true,
    placeholder: '○',
    disabled: false,
  },
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
    components: { DefaultStory, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
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

export const Separator: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: SeparatorSource,
      },
    },
  },

  render: args => ({
    components: { SeparatorStory, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <SeparatorStory v-bind="args" />
    `,
  }),
}
