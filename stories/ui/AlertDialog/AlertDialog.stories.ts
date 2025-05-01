import type { StoryObj } from '@storybook/vue3'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

import AlertDialogDefault from '@/playground/components/alert-dialog/AlertDialogDefault.vue'
import AlertDialogDefaultSource from '@/playground/components/alert-dialog/AlertDialogDefault.vue?raw'

/**
 * A modal dialog that interrupts the user with important content and expects a response.
 *
 * It is modal that blocks the user from interacting with the parent page until it's closed.
 * In other words, it's a persistent dialog.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/alert-dialog
 *
 * See also:
 * - [Feedback/Dialog](?path=/docs/feedback-dialog--docs) component
 */
export default {
  title: 'Components/Feedback/Alert Dialog',
  component: AlertDialogDefault,
  subcomponents: {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  },
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: AlertDialogDefaultSource,
      },
    },
  },

  render: args => ({
    components: { AlertDialogDefault },

    setup() {
      return { args }
    },

    template: `
      <AlertDialogDefault v-bind="args" />
    `,
  }),
}
