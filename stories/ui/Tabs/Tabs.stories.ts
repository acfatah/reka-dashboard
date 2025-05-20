import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
import { TabsIndicator } from 'reka-ui'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import DefaultStory from './DefaultStory.vue'
import DefaultStorySource from './DefaultStory.vue?raw'
import UnderlinedTabsStory from './UnderlinedTabs.vue'
import UnderlinedTabsSource from './UnderlinedTabs.vue?raw'

/**
 * A set of layered sections of content—known as tab panels—that are displayed one at a time.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/tabs
 */
export default {
  title: 'Components/Panels/Tabs',
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

export const UnderlinedTabs: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: UnderlinedTabsSource,
      },
    },
  },

  render: args => ({
    components: { UnderlinedTabsStory },

    setup() {
      return { args }
    },

    template: html`
      <UnderlinedTabsStory v-bind="args" />
    `,
  }),
}
