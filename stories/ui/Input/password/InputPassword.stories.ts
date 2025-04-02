import type { StoryObj } from '@storybook/vue3'
import { PasswordInput } from '@/components/ui/password-input'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'

export default {
  title: 'Components/Data Entry/Password Input',
  component: PasswordInput,
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: html`
          <PasswordInput placeholder="Enter password" />
        `,
      },
    },
  },

  args: {
    placeholder: 'Enter password',
    disabled: false,
  },

  render: args => ({
    components: { PasswordInput },

    setup() {
      const password = 'mY$eRcR3tP@ssw0rd'

      return { args, password }
    },

    template: html`
      <div class="flex flex-col w-full space-y-6 sm:w-2/3">
        <PasswordInput v-bind="args" />
      </div>
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
      const password = 'mY$eRcR3tP@ssw0rd'

      return { args, password }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <FormStory v-bind="args" />
    `,
  }),
}
