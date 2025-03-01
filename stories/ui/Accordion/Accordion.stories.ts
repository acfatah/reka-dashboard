import type { StoryObj } from '@storybook/vue3'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionRoot,
} from '@/components/ui/accordion'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * A vertically stacked set of interactive headings that each reveal a section of content.
 *
 * Primitive API Reference: https://www.radix-vue.com/components/accordion.html
 */
export default {
  title: 'Panels/Accordion',
  component: DefaultStory,
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
