import type { StoryObj } from '@storybook/vue3'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import WithButtonStory from './WithButton.vue'
import WithButtonSource from './WithButton.vue?raw'
import WithIconStory from './WithIcon.vue'
import WithIconSource from './WithIcon.vue?raw'
import WithLabelStory from './WithLabel.vue'
import WithLabelSource from './WithLabel.vue?raw'

export default {
  title: 'Components/Data Entry/Text Input',
  component: Input,
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: html`
          <div class="flex flex-col w-full space-y-6 sm:w-2/3">
            <Input type="text" placeholder="username" />
          </div>
        `,
      },
    },
  },

  args: {
    placeholder: 'Username',
    disabled: false,
  },

  render: args => ({
    components: { Input },

    setup() {
      return { args }
    },

    template: html`
      <div class="flex flex-col w-full space-y-6 sm:w-2/3">
        <Input v-bind="args" type="text" />
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

export const Disabled: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: `
<Input disabled />
        `,
      },
    },
  },

  render: args => ({
    components: { Input },

    setup() {
      return { args }
    },

    template: html`
      <div class="w-full space-y-6 sm:w-2/3">
        <Input v-bind="args" type="text" disabled placeholder="username" />
      </div>
    `,
  }),
}

export const WithLabel: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithLabelSource,
      },
    },
  },

  render: args => ({
    components: { WithLabelStory },

    setup() {
      return { args }
    },

    template: html`
      <WithLabelStory v-bind="args" />
    `,
  }),
}

export const WithButton: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithButtonSource,
      },
    },
  },

  render: args => ({
    components: { WithButtonStory },

    setup() {
      return { args }
    },

    template: html`
      <WithButtonStory v-bind="args" />
    `,
  }),
}

export const WithIcon: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithIconSource,
      },
    },
  },

  render: args => ({
    components: { WithIconStory },

    setup() {
      return { args }
    },

    template: html`
      <WithIconStory v-bind="args" />
    `,
  }),
}
