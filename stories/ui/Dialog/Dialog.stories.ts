import type { StoryObj } from '@storybook/vue3'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogScrollContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Toaster } from '@/components/ui/toast'

import CustomCloseButtonComponent from './CustomCloseButton.vue'
import CustomCloseButtonSource from './CustomCloseButton.vue?raw'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import DialogWithContextMenuTriggerComponent from './DialogWithContextMenuTrigger.vue'
import DialogWithContextMenuTriggerSource from './DialogWithContextMenuTrigger.vue?raw'
import FormDialogComponent from './FormDialog.vue'
import FormDialogSource from './FormDialog.vue?raw'
import ScrollBodyComponent from './ScrollBody.vue'
import ScrollBodySource from './ScrollBody.vue?raw'
import ScrollOverlayComponent from './ScrollOverlay.vue'
import ScrollOverlaySource from './ScrollOverlay.vue?raw'

/**
 * A modal dialog that interrupts the user with important content and expects a response.
 *
 * Primitive API Reference: https://www.reka-ui.com/docs/components/dialog
 *
 * See also:
 * - [Feedback/Alert Dialog](?path=/docs/feedback-alert-dialog--docs) component
 */
export default {
  title: 'Feedback/Dialog',
  component: DefaultStory,
  subcomponents: {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogScrollContent,
    DialogTitle,
    DialogTrigger,
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

export const CustomCloseButton: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: CustomCloseButtonSource,
      },
    },
  },

  render: args => ({
    components: { CustomCloseButtonComponent },

    setup() {
      return { args }
    },

    template: `
      <CustomCloseButtonComponent v-bind="args" />
    `,
  }),
}

export const ScrollBody: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: ScrollBodySource,
      },
    },
  },

  render: args => ({
    components: { ScrollBodyComponent },

    setup() {
      return { args }
    },

    template: `
      <ScrollBodyComponent v-bind="args" />
    `,
  }),
}

export const ScrollOverlay: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: ScrollOverlaySource,
      },
    },
  },

  render: args => ({
    components: { ScrollOverlayComponent },

    setup() {
      return { args }
    },

    template: `
      <ScrollOverlayComponent v-bind="args" />
    `,
  }),
}

export const Form: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: FormDialogSource,
      },
    },
  },

  render: args => ({
    components: { FormDialogComponent, Toaster },

    setup() {
      return { args }
    },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <FormDialogComponent v-bind="args" />
    `,
  }),
}

/**
 * To activate the Dialog component from within a Context Menu or Dropdown Menu,
 * you must encase the Context Menu or Dropdown Menu component in the Dialog component.
 * For more information, refer to the linked issue [here](https://github.com/radix-ui/primitives/issues/1836).
 */
export const DialogWithContextMenuTrigger: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DialogWithContextMenuTriggerSource,
      },
    },
  },

  render: args => ({
    components: { DialogWithContextMenuTriggerComponent },

    setup() {
      return { args }
    },

    template: `
      <DialogWithContextMenuTriggerComponent v-bind="args" />
    `,
  }),
}
