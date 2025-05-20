import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
import { Toaster } from '@/components/ui/toast'
import { Toggle } from '@/components/ui/toggle'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import WithTextStory from './WithText.vue'
import WithTextSource from './WithText.vue?raw'

/**
 * A two-state button that can be either on or off.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/toggle
 */
export default {
  title: 'Components/Data Entry/Toggle',
  component: Toggle,
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

  argTypes: {
    disabled: {
      type: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
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

export const Outline: StoryObj = {
  ...Default,
  args: {
    variant: 'outline',
  },
}

export const Small: StoryObj = {
  ...Default,
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj = {
  ...Default,
  args: {
    size: 'lg',
  },
}
