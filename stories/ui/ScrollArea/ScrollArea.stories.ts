import type { StoryObj } from '@storybook/vue3'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { html } from 'common-tags'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import HorizontalScrollingStory from './HorizontalScrolling.vue'
import HorizontalScrollingSource from './HorizontalScrolling.vue?raw'

/**
 * Augments native scroll functionality for custom, cross-browser styling.
 *
 * Primitive API Reference: https://www.reka-ui.com/docs/components/scroll-area
 */
export default {
  title: 'Panels/ScrollArea',
  component: DefaultStory,
  subcomponents: {
    ScrollArea,
    ScrollBar,
  },
  tags: ['autodocs'],
  layout: 'fullscreen',
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
      <div class="h-72">
        <DefaultStory v-bind="args" />
      </div>
    `,
  }),
}

export const HorizontalScrolling: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: HorizontalScrollingSource,
      },
    },
  },

  render: args => ({
    components: { HorizontalScrollingStory },

    setup() {
      return { args }
    },

    template: html`
      <div class="w-72">
        <HorizontalScrollingStory v-bind="args" />
      </div>
    `,
  }),
}
