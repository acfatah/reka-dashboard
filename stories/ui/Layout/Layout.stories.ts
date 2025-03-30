import type { StoryObj } from '@storybook/vue3'
import BlankLayout from '@/components/layouts/BlankLayout.vue'
import { html } from 'common-tags'

import App from '@/App.vue'
import AppSource from '@/App.vue?raw'

export default {
  title: 'Layout/Application Layout',
  component: App,
  subcomponents: {
    BlankLayout,
  },
  tags: ['!dev'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: AppSource,
      },
    },
  },

  render: args => ({
    components: { App },

    setup() {
      return { args }
    },

    template: html`
      <App />
    `,
  }),
}
