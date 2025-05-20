import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
import { Label } from '@/components/ui/label'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Renders an accessible label associated with controls.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/label
 *
 * See also:
 * - [Data Entry/Text Input With Label](?path=/story/data-entry-text-input--with-label) component
 */
export default {
  title: 'Components/Data Entry/Label',
  component: Label,
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
