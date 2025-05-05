import type { StoryObj } from '@storybook/vue3'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

import CollapsibleDefaultStory from '@/playground/components/collapsible/CollapsibleDefault.vue'
import CollapsibleDefaultSource from '@/playground/components/collapsible/CollapsibleDefault.vue?raw'

/**
 * An interactive component which expands/collapses a panel.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/collapsible
 */
export default {
  title: 'Components/Panels/Collapsible',
  component: CollapsibleDefaultStory,
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
        code: CollapsibleDefaultSource,
      },
    },
  },

  render: args => ({
    components: { CollapsibleDefaultStory },

    setup() {
      return { args }
    },

    template: `
      <CollapsibleDefaultStory v-bind="args" />
    `,
  }),
}
