import type { StoryObj } from '@storybook/vue3'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'

/**
 * A set of checkable buttons—known as radio buttons—where no more than one of the
 * buttons can be checked at a time.
 *
 * Primitive API Reference: https://www.reka-ui.com/docs/components/radio-group.html
 */
export default {
  title: 'Data Entry/Radio Group',
  component: DefaultStory,
  subcomponents: {
    RadioGroup,
    RadioGroupItem,
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
