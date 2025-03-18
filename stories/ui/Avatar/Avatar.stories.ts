import type { StoryObj } from '@storybook/vue3'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarShape,
  AvatarSize,
} from '@/components/ui/avatar'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * An image element with a fallback for representing the user.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/avatar
 */
export default {
  title: 'Graphic Elements/Avatar',
  component: DefaultStory,
  subcomponents: {
    Avatar,
    AvatarFallback,
    AvatarImage,
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

  args: {
    size: 'sm',
    shape: 'circle',
  },

  argTypes: {
    size: {
      control: { type: 'select' },
      options: Object.keys(AvatarSize),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'base' },
      },
    },

    shape: {
      control: { type: 'select' },
      options: Object.keys(AvatarShape),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'circle' },
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
