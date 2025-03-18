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
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

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
  title: 'Feedback/Alert Dialog',
  component: DefaultStory,
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
