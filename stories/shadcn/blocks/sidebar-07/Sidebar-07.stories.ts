import App from '@/App.vue'
import { vueRouter } from 'storybook-vue3-router'
import DefaultSource from './DefaultStory.vue?raw'
import routes from './routes.ts'

/**
 * A sidebar that collapses to icons.
 */
export default {
  title: 'shadcn/Blocks/DefaultStory',
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
        code: DefaultSource,
      },
    },
  },
}
