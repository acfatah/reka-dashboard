import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
import { Toaster } from 'vue-sonner'

import SonnerDefaultStory from './SonnerDefaultStory.vue'
import SonnerDefaultSource from './SonnerDefaultStory.vue?raw'

/**
 * An opinionated toast component for Vue.
 *
 * Documentation: https://vue-sonner.vercel.app
 *
 * See also:
 * - [Components/Feedback/Toast](?path=/docs/components-overlays-toast--docs) component
 */
export default {
  title: 'Components/Others/Sonner',
  component: Toaster,
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: SonnerDefaultSource,
      },
    },
  },

  render: args => ({
    components: { SonnerDefaultStory },

    setup() {
      return { args }
    },

    template: html`
      <SonnerDefaultStory v-bind="args" />
    `,
  }),
}
