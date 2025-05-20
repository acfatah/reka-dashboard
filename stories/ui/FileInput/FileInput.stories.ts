import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/toast'

import FileInputStory from './FileInputDefaultStory.vue'
import FileInputSource from './FileInputDefaultStory.vue?raw'
import FileInputWithDeleteIconStory from './FileInputWithDeleteIcon.vue'
import FileInputWithDeleteIconSource from './FileInputWithDeleteIcon.vue?raw'

/**
 * File Input
 */
export default {
  title: 'Components/Data Entry/File Input',
  component: Input,
  tags: ['autodocs'],

  argTypes: {
    disabled: {
      type: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: FileInputSource,
      },

    },
  },

  render: args => ({
    components: { FileInputStory, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <FileInputStory v-bind="args" />
    `,
  }),
}

export const WithDeleteIcon: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: FileInputWithDeleteIconSource,
      },
    },
  },

  render: args => ({
    components: { FileInputWithDeleteIconStory, Toaster },

    setup() {
      return { args }
    },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <FileInputWithDeleteIconStory v-bind="args" />
    `,
  }),
}
