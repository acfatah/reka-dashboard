import type { StoryObj } from '@storybook/vue3'
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  Toaster,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import DestructiveComponent from './Destructive.vue'
import DestructiveSource from './Destructive.vue?raw'
import SimpleComponent from './Simple.vue'
import SimpleSource from './Simple.vue?raw'
import WithActionComponent from './WithAction.vue'
import WithActionSource from './WithAction.vue?raw'
import WithTitleComponent from './WithTitle.vue'
import WithTitleSource from './WithTitle.vue?raw'

/**
 * Toasts are used to display short messages to the user.
 *
 * We are using Radix Toast components.
 * Read more at https://reka-ui.com/docs/components/toast.
 */
export default {
  title: 'Components/Feedback/Toast',
  component: DefaultStory,
  subcomponents: {
    Toast,
    ToastAction,
    ToastClose,
    ToastDescription,
    Toaster,
    ToastProvider,
    ToastTitle,
    ToastViewport,
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
    components: { DefaultStory, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <DefaultStory v-bind="args" />
      <Teleport to="body">
        <Toaster />
      </Teleport>
    `,
  }),
}

export const Simple: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: SimpleSource,
      },
    },
  },

  render: args => ({
    components: { SimpleComponent, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <SimpleComponent v-bind="args" />
      <Teleport to="body">
        <Toaster />
      </Teleport>
    `,
  }),
}

export const WithTitle: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithTitleSource,
      },
    },
  },

  render: args => ({
    components: { WithTitleComponent, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <WithTitleComponent v-bind="args" />
      <Teleport to="body">
        <Toaster />
      </Teleport>
    `,
  }),
}

export const WithAction: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithActionSource,
      },
    },
  },

  render: args => ({
    components: { WithActionComponent, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <WithActionComponent v-bind="args" />
      <Teleport to="body">
        <Toaster />
      </Teleport>
    `,
  }),
}

export const Destructive: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DestructiveSource,
      },
    },
  },

  render: args => ({
    components: { DestructiveComponent, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <DestructiveComponent v-bind="args" />
      <Teleport to="body">
        <Toaster />
      </Teleport>
    `,
  }),
}
