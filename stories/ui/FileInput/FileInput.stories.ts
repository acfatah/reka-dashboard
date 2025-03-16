import type { StoryObj } from '@storybook/vue3'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * File Input
 */
export default {
  title: 'Data Entry/File Input',
  component: Input,
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
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <DefaultStory v-bind="args" />
    `,
  }),
}
