import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'

import AlertDefault from '@/playground/components/alert/AlertDefault.vue'
import AlertDefaultSource from '@/playground/components/alert/AlertDefault.vue?raw'
import DestructiveAlert from '@/playground/components/alert/DestructiveAlert.vue'
import DestructiveAlertSource from '@/playground/components/alert/DestructiveAlert.vue?raw'

/**
 * Displays a callout for user attention.
 */
export default {
  title: 'Components/Feedback/Alert',
  component: AlertDefault,
  subcomponents: {
    Alert,
    AlertDescription,
    AlertTitle,
  },
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: AlertDefaultSource,
      },
    },
  },

  render: args => ({
    components: { AlertDefault },

    setup() {
      return { args }
    },

    template: html`
      <AlertDefault v-bind="args" />
    `,
  }),
}

export const Destructive: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DestructiveAlertSource,
      },
    },
  },

  render: args => ({
    components: { DestructiveAlert },

    setup() {
      return { args }
    },

    template: html`
      <DestructiveAlert v-bind="args" />
    `,
  }),
}
