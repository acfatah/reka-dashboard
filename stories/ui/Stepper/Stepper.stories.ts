import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from '@/components/ui/stepper'
import { Toaster } from '@/components/ui/toast'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'
import HorizontalStory from './HorizontalStory.vue'
import HorizontalSource from './HorizontalStory.vue?raw'
import VerticalStory from './VerticalStory.vue'
import VerticalSource from './VerticalStory.vue?raw'

/**
 * A set of steps that are used to indicate progress through a multi-step process.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/stepper
 */
export default {
  title: 'Components/Navigation/Stepper',
  component: DefaultStory,
  subcomponents: {
    Stepper,
    StepperDescription,
    StepperIndicator,
    StepperItem,
    StepperSeparator,
    StepperTitle,
    StepperTrigger,
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

  render: args => ({
    components: { DefaultStory },

    setup() {
      return { args }
    },

    template: `
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

export const Horizontal: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: HorizontalSource,
      },
    },
  },

  render: args => ({
    components: { HorizontalStory },

    setup() {
      return { args }
    },

    template: `
      <HorizontalStory v-bind="args" />
    `,
  }),
}

export const Vertical: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: VerticalSource,
      },
    },
  },

  render: args => ({
    components: { VerticalStory },

    setup() {
      return { args }
    },

    template: `
      <VerticalStory v-bind="args" />
    `,
  }),
}
