import type { StoryObj } from '@storybook/vue3'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormFieldArray,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Form handling using Vee Validate.
 *
 * Primitive API Reference: https://vee-validate.logaretm.com/v4/guide/components/handling-forms
 */
export default {
  title: 'Forms/Form',
  component: DefaultStory,
  subcomponents: {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormFieldArray,
    FormItem,
    FormLabel,
    FormMessage,
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
