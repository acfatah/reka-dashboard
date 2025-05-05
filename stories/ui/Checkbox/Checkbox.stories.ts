import type { StoryObj } from '@storybook/vue3'
import { Checkbox } from '@/components/ui/checkbox'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import CheckboxArrayInputStory from '@/playground/components/checkbox/CheckboxArrayInput.vue'
import CheckboxArrayInputSource from '@/playground/components/checkbox/CheckboxArrayInput.vue?raw'
import CheckboxDefaultStory from '@/playground/components/checkbox/CheckboxDefault.vue'
import CheckboxDefaultSource from '@/playground/components/checkbox/CheckboxDefault.vue?raw'
import CheckboxWithCustomLabelStory from '@/playground/components/checkbox/CheckboxWithCustomLabel.vue'
import CheckboxWithCustomLabelSource from '@/playground/components/checkbox/CheckboxWithCustomLabel.vue?raw'
import CheckboxWithFormStory from '@/playground/components/checkbox/CheckboxWithForm.vue'
import CheckboxWithFormSource from '@/playground/components/checkbox/CheckboxWithForm.vue?raw'

/**
 * A control that allows the user to toggle between checked and not checked.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/checkbox
 */
export default {
  title: 'Components/Data Entry/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: CheckboxDefaultSource,
      },
    },
  },

  args: {
    disabled: false,
  },

  render: args => ({
    components: { CheckboxDefaultStory },

    setup() {
      return { args }
    },

    template: html`
      <CheckboxDefaultStory v-bind="args" />
    `,
  }),
}

export const Form: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: CheckboxWithFormSource,
      },
    },
  },

  render: args => ({
    components: { CheckboxWithFormStory, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <CheckboxWithFormStory v-bind="args" />
    `,
  }),
}

export const ArrayInput: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: CheckboxArrayInputSource,
      },
    },
  },

  render: args => ({
    components: { CheckboxArrayInputStory, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <CheckboxArrayInputStory v-bind="args" />
    `,
  }),
}

export const WithCustomLabel: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: CheckboxWithCustomLabelSource,
      },
    },
  },

  render: args => ({
    components: { CheckboxWithCustomLabelStory },

    setup() {
      return { args }
    },

    template: html`
      <CheckboxWithCustomLabelStory v-bind="args" />
    `,
  }),
}
