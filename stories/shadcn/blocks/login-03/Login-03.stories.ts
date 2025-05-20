import { vueRouter } from 'storybook-vue3-router'
import App from '@/App.vue'
import DefaultStorySource from './DefaultStory.vue?raw'
import routes from './routes.ts'

/**
 * A simple login form.
 */
export default {
  title: 'shadcn/Blocks/login-03',
  component: App,
  tags: ['autodocs'],
  decorators: [vueRouter(routes)],
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: DefaultStorySource,
      },
    },
  },
}
