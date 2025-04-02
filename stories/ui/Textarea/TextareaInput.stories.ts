import type { StoryObj } from '@storybook/vue3'
import { Textarea } from '@/components/ui/textarea'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import WithLabelStory from './WithLabel.vue'
import WithLabelSource from './WithLabel.vue?raw'
import WithTextStory from './WithText.vue'
import WithTextSource from './WithText.vue?raw'

export default {
  title: 'Components/Data Entry/Textarea Input',
  component: Textarea,
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
    placeholder: 'Username',
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

export const Disabled: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: `
<Textarea disabled />
        `,
      },
    },
  },

  render: args => ({
    components: { Textarea },

    setup() {
      return { args }
    },

    template: html`
      <div class="w-full space-y-6 sm:w-2/3">
        <Textarea
          placeholder="Tell us a little bit about yourself"
          class="resize-none"
          v-bind="componentField"
          disabled
        />
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
