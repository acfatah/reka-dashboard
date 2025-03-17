import type { StoryObj } from '@storybook/vue3'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { html } from 'common-tags'
import { TabsIndicator } from 'reka-ui'

import DefaultStory from './DefaultStory.vue'
import DefaultStorySource from './DefaultStory.vue?raw'

/**
 * A set of layered sections of content—known as tab panels—that are displayed one at a time.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/tabs.html
 */
export default {
  title: 'Panels/Tabs',
  component: Tabs,
  subcomponents: {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    TabsIndicator,
  },
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DefaultStorySource,
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
