import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
import { ref } from 'vue'
import { Toaster } from '@/components/ui/toast'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'

/**
 * A set of two-state buttons that can be toggled on or off.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/toggle-group
 */
export default {
  title: 'Components/Data Entry/Toggle Group',
  component: ToggleGroup,
  subcomponents: {
    ToggleGroupItem,
  },
  tags: ['autodocs'],

  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'single' },
      },
      description: 'The button variant',
    },

    variant: {
      control: { type: 'select' },
      options: ['default', 'outline'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      description: 'The button variant',
    },

    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
      description: 'The button size',
    },

    disabled: {
      type: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
}

export const Default: StoryObj = {
  args: {
    defaultValue: ['italic'],
    disabled: false,
  },

  parameters: {
    docs: {
      source: {
        code: DefaultSource,
      },
    },
  },

  render: (args: any) => ({
    components: { DefaultStory },

    setup() {
      const value = ref(args.defaultValue)

      return { args, value }
    },

    template: html`
      <DefaultStory
        v-bind="args"
        @update:model-value="value = $event"
      />
      <div class="mt-4">
        value: {{ value }}
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

/**
 * The `type` is inferred from the `defaultValue` as "single" when it is not an array.
 */
export const Single: StoryObj = {
  ...Default,

  args: {
    defaultValue: 'italic',
  },
}
