import type { StoryObj } from '@storybook/vue3'
import { Skeleton } from '@/components/ui/skeleton'

import CardStory from './CardStory.vue'
import CardSource from './CardStory.vue?raw'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Use to show a placeholder while content is loading.
 *
 * Typically used with `<Suspense>` component.
 *
 * Read more about `<Suspense>` at https://vuejs.org/guide/built-ins/suspense.html
 */
export default {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
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

    template: `
      <DefaultStory v-bind="args" />
    `,
  }),
}

export const Card: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: CardSource,
      },
    },
  },

  render: args => ({
    components: { CardStory },

    setup() {
      return { args }
    },

    template: `
      <CardStory v-bind="args" />
    `,
  }),
}
