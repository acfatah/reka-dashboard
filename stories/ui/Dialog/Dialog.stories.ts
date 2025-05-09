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

import DialogDefault from '@/playground/components/dialog/DialogDefault.vue'
import DialogDefaultSource from '@/playground/components/dialog/DialogDefault.vue?raw'
import DialogWithContextMenuTriggerComponent from '@/playground/components/dialog/DialogWithContextMenuTrigger.vue'
import DialogWithContextMenuTriggerSource from '@/playground/components/dialog/DialogWithContextMenuTrigger.vue?raw'
import DialogWithCustomCloseButtonComponent from '@/playground/components/dialog/DialogWithCustomCloseButton.vue'
import DialogWithCustomCloseButtonSource from '@/playground/components/dialog/DialogWithCustomCloseButton.vue?raw'
import FormDialogComponent from '@/playground/components/dialog/DialogWithFormDialog.vue'
import FormDialogSource from '@/playground/components/dialog/DialogWithFormDialog.vue?raw'
import DialogWithScrollBody from '@/playground/components/dialog/DialogWithScrollBody.vue'
import DialogWithScrollBodySource from '@/playground/components/dialog/DialogWithScrollBody.vue?raw'
import DialogWithScrollOverlayComponent from '@/playground/components/dialog/DialogWithScrollOverlay.vue'
import DialogWithScrollOverlaySource from '@/playground/components/dialog/DialogWithScrollOverlay.vue?raw'

/**
 * A modal dialog that interrupts the user with important content and expects a response.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/dialog
 *
 * See also:
 * - [Feedback/Alert Dialog](?path=/docs/feedback-alert-dialog--docs) component
 */
export default {
  title: 'Components/Feedback/Dialog',
  component: DialogDefault,
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
        code: DialogDefaultSource,
      },
    },
  },

  render: args => ({
    components: { DialogDefault },

    setup() {
      return { args }
    },

    template: `
      <DialogDefault v-bind="args" />
    `,
  }),
}

export const CustomCloseButton: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DialogWithCustomCloseButtonSource,
      },
    },
  },

  render: args => ({
    components: { DialogWithCustomCloseButtonComponent },

    setup() {
      return { args }
    },

    template: `
      <DialogWithCustomCloseButtonComponent v-bind="args" />
    `,
  }),
}

export const ScrollBody: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DialogWithScrollBodySource,
      },
    },
  },

  render: args => ({
    components: { DialogWithScrollBody },

    setup() {
      return { args }
    },

    template: `
      <DialogWithScrollBody v-bind="args" />
    `,
  }),
}

export const ScrollOverlay: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DialogWithScrollOverlaySource,
      },
    },
  },

  render: args => ({
    components: { DialogWithScrollOverlayComponent },

    setup() {
      return { args }
    },

    template: `
      <DialogWithScrollOverlayComponent v-bind="args" />
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
