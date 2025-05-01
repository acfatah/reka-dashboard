import type { StoryObj } from '@storybook/vue3'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarShape,
  AvatarSize,
} from '@/components/ui/avatar'

import AvatarDefault from '@/playground/components/avatar/AvatarDefault.vue'
import AvatarDefaultSource from '@/playground/components/avatar/AvatarDefault.vue?raw'

/**
 * An image element with a fallback for representing the user.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/avatar
 */
export default {
  title: 'Components/Data Display/Avatar',
  component: AvatarDefault,
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
        code: AvatarDefaultSource,
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
    components: { AvatarDefault },

    setup() {
      return { args }
    },

    template: `
      <AvatarDefault v-bind="args" />
    `,
  }),
}
