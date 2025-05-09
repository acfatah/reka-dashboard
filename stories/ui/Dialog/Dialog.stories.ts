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

import DialogDefault from './DialogDefault.vue'
import DialogDefaultSource from './DialogDefault.vue?raw'
import DialogWithContextMenuTriggerComponent from './DialogWithContextMenuTrigger.vue'
import DialogWithContextMenuTriggerSource from './DialogWithContextMenuTrigger.vue?raw'
import DialogWithCustomCloseButtonComponent from './DialogWithCustomCloseButton.vue'
import DialogWithCustomCloseButtonSource from './DialogWithCustomCloseButton.vue?raw'
import FormDialogComponent from './DialogWithFormDialog.vue'
import FormDialogSource from './DialogWithFormDialog.vue?raw'
import DialogWithScrollBody from './DialogWithScrollBody.vue'
import DialogWithScrollBodySource from './DialogWithScrollBody.vue?raw'
import DialogWithScrollOverlayComponent from './DialogWithScrollOverlay.vue'
import DialogWithScrollOverlaySource from './DialogWithScrollOverlay.vue?raw'

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
