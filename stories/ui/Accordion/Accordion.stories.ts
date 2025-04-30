import type { StoryObj } from '@storybook/vue3'
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from '@/components/ui/accordion'

import AccordionDefault from '@/playground/components/accordion/AccordionDefault.vue'
import AccordionDefaultSource from '@/playground/components/accordion/AccordionDefault.vue?raw'

/**
 * A vertically stacked set of interactive headings that each reveal a section of content.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/accordion
 */
export default {
  title: 'Components/Panels/Accordion',
  component: AccordionDefault,
  subcomponents: {
    AccordionRoot,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  },
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: AccordionDefaultSource,
      },
    },
  },

  render: args => ({
    components: { AccordionDefault },

    setup() {
      return { args }
    },

    template: `
      <AccordionDefault v-bind="args" />
    `,
  }),
}
