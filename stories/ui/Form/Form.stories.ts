import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
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

import FormDemoStory from '@/playground/components/form/FormDemo.vue'
import FormDemoSource from '@/playground/components/form/FormDemo.vue?raw'

/**
 * Form handling using Vee Validate.
 *
 * Documentation: https://vee-validate.logaretm.com/v4/guide/components/handling-forms
 */
export default {
  title: 'Components/Forms/Form',
  component: FormDemoStory,
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
        code: FormDemoSource,
      },
    },
  },

  args: {
    disabled: false,
  },

  render: args => ({
    components: { FormDemoStory, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <FormDemoStory v-bind="args" />
    `,
  }),
}
