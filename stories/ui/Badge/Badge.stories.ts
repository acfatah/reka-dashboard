import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
import { Badge } from '@/components/ui/badge'

import BadgeDefault from '@/playground/components/badge/BadgeDefault.vue'
import BadgeDefaultSource from '@/playground/components/badge/BadgeDefault.vue?raw'

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
        code: BadgeDefaultSource,
      },
    },
  },

  render: args => ({
    components: { BadgeDefault },

    setup() {
      return { args }
    },

    template: html`
      <BadgeDefault v-bind="args" />
    `,
  }),
}

export const Secondary: StoryObj = {
  args: {
    variant: 'secondary',
  },

  render: args => ({
    components: { BadgeDefault },

    setup() {
      return { args }
    },

    template: html`
      <BadgeDefault v-bind="args" />
    `,
  }),
}

export const Destructive: StoryObj = {
  args: {
    variant: 'destructive',
  },

  render: args => ({
    components: { BadgeDefault },

    setup() {
      return { args }
    },

    template: html`
      <BadgeDefault v-bind="args" />
    `,
  }),
}

export const Outline: StoryObj = {
  args: {
    variant: 'outline',
  },

  render: args => ({
    components: { BadgeDefault },

    setup() {
      return { args }
    },

    template: html`
      <BadgeDefault v-bind="args" />
    `,
  }),
}
