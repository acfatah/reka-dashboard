import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'

import SignUpForm from './components/SignUpForm.vue'
import SignUpFormSource from './components/SignUpForm.vue?raw'
import DefaultStory from './DefaultStory.vue'
import DefaultStorySource from './DefaultStory.vue?raw'

export default {
  title: 'shadcn/Examples/Authentication',
  component: DefaultStory,
  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',

    docs: {
      source: {
        code: DefaultStorySource,
      },
    },
  },
}

export const Default: StoryObj = {}

/**
 * The sign up form example.
 */
export const AuthenticationForm: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: SignUpFormSource,
      },
    },
  },

  render: () => ({
    components: {
      SignUpForm,
    },

    template: html`
      <div class="p-6">
        <SignUpForm />
      </div>
    `,
  }),
}
