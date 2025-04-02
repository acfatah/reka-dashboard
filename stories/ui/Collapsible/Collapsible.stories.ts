import type { StoryObj } from '@storybook/vue3'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * An interactive component which expands/collapses a panel.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/collapsible
 */
export default {
  title: 'Components/Panels/Collapsible',
  component: DefaultStory,
  subcomponents: {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
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
