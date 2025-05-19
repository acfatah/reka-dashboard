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

import DialogDemo1Story from '@/playground/components/dialog/DialogDemo1.vue'
import DialogDemo1Source from '@/playground/components/dialog/DialogDemo1.vue?raw'
import DialogWithFormStory from '@/playground/components/dialog/DialogWithForm.vue'
import DialogWithFormSource from '@/playground/components/dialog/DialogWithForm.vue?raw'
import DialogWithScrollableContentStory from '@/playground/components/dialog/DialogWithScrollableContent.vue'
import DialogWithScrollableContentSource from '@/playground/components/dialog/DialogWithScrollableContent.vue?raw'
import DialogWithScrollableOverlayComponent from '@/playground/components/dialog/DialogWithScrollableOverlay.vue'
import DialogWithScrollableOverlaySource from '@/playground/components/dialog/DialogWithScrollableOverlay.vue?raw'

import DialogWithContextMenuTriggerComponent from '@/playground/components/dialog/DialogWithContextMenuTrigger.vue'
import DialogWithContextMenuTriggerSource from '@/playground/components/dialog/DialogWithContextMenuTrigger.vue?raw'
import DialogWithCustomCloseButtonComponent from '@/playground/components/dialog/DialogWithCustomCloseButton.vue'
import DialogWithCustomCloseButtonSource from '@/playground/components/dialog/DialogWithCustomCloseButton.vue?raw'

/**
 * A modal dialog that interrupts the user with important content and expects a response.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/dialog
 *
 * See also:
 * - [Overlays/Alert Dialog](?path=/docs/feedback-alert-dialog--docs) component
 */
export default {
  title: 'Components/Overlays/Dialog',
  component: Dialog,
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
        code: DialogDemo1Source,
      },
    },
  },

  render: args => ({
    components: { DialogDemo1Story },

    setup() {
      return { args }
    },

    template: `
      <DialogDemo1Story v-bind="args" />
    `,
  }),
}

export const WithForm: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DialogWithFormSource,
      },
    },
  },

  render: args => ({
    components: { DialogWithFormStory, Toaster },

    setup() {
      return { args }
    },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <DialogWithFormStory v-bind="args" />
    `,
  }),
}

export const WithScrollableContent: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DialogWithScrollableContentSource,
      },
    },
  },

  render: args => ({
    components: { DialogWithScrollableContentStory },

    setup() {
      return { args }
    },

    template: `
      <DialogWithScrollableContentStory v-bind="args" />
    `,
  }),
}

/**
 * Replace `<DialogContent />` with `<DialogScrollContent />` to make the dialog overlay scrollable.
 */
export const WithScrollableOverlay: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DialogWithScrollableOverlaySource,
      },
    },
  },

  render: args => ({
    components: { DialogWithScrollableOverlayComponent },

    setup() {
      return { args }
    },

    template: `
      <DialogWithScrollableOverlayComponent v-bind="args" />
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
