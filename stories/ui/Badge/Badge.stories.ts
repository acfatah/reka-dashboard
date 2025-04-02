import type { StoryObj } from '@storybook/vue3'
import { Badge } from '@/components/ui/badge'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Displays a badge or a component that looks like a badge
 *
 * Documentation: https://www.shadcn-vue.com/docs/components/badge
 */
export default {
  title: 'Components/Data Display/Badge',
  component: Badge,
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

    template: html`
      <DefaultStory v-bind="args" />
    `,
  }),
}

export const Secondary: StoryObj = {
  args: {
    variant: 'secondary',
  },

  render: args => ({
    components: { DefaultStory },

    setup() {
      return { args }
    },

    template: html`
      <DefaultStory v-bind="args" />
    `,
  }),
}

export const Destructive: StoryObj = {
  args: {
    variant: 'destructive',
  },

  render: args => ({
    components: { DefaultStory },

    setup() {
      return { args }
    },

    template: html`
      <DefaultStory v-bind="args" />
    `,
  }),
}

export const Outline: StoryObj = {
  args: {
    variant: 'outline',
  },

  render: args => ({
    components: { DefaultStory },

    setup() {
      return { args }
    },

    template: html`
      <DefaultStory v-bind="args" />
    `,
  }),
}
