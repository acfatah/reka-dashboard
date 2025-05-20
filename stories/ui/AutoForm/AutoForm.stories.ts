import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
import {
  AutoForm,
  AutoFormField,
  AutoFormFieldArray,
  AutoFormFieldBoolean,
  AutoFormFieldDate,
  AutoFormFieldEnum,
  AutoFormFieldFile,
  AutoFormFieldInput,
  AutoFormFieldNumber,
  AutoFormFieldObject,
  AutoFormLabel,
} from '@/components/ui/auto-form'
import { Toaster } from '@/components/ui/toast'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Automatically generate a form from Zod schema.
 *
 * Documentation:
 * - https://www.shadcn-vue.com/docs/components/auto-form.html
 * - https://github.com/logaretm/vee-validate/tree/main/packages/zod
 *
 * See also:
 * - https://github.com/vantezzen/autoform
 * - https://zod.dev
 * - https://vee-validate.logaretm.com/v4/api/form
 */
export default {
  title: 'Components/Forms/AutoForm',
  tags: ['autodocs'],
  component: DefaultStory,
  subcomponents: {
    AutoForm,
    AutoFormField,
    AutoFormFieldArray,
    AutoFormFieldBoolean,
    AutoFormFieldDate,
    AutoFormFieldEnum,
    AutoFormFieldFile,
    AutoFormFieldInput,
    AutoFormFieldNumber,
    AutoFormFieldObject,
    AutoFormLabel,
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

  render: () => ({
    components: { DefaultStory, Toaster },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <div class="container m-auto">
        <DefaultStory />
      </div>
    `,
  }),
}
