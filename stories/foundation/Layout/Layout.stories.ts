import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'
import BlankLayout from '@/layouts/BlankLayout.vue'

import App from '@/App.vue'
import AppSource from '@/App.vue?raw'

export default {
  title: 'Foundation/Layout',
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
