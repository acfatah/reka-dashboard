import type { StoryObj } from '@storybook/vue3'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import CardDefaultStory from '@/playground/components/card/CardWithForm.vue'
import CardDefaultStorySource from '@/playground/components/card/CardWithForm.vue?raw'
import NotificationCardComponent from '@/playground/components/card/NotificationCard.vue'
import NotificationCardSource from '@/playground/components/card/NotificationCard.vue?raw'

/**
 * Displays a card with header, content, and footer.
 */
export default {
  title: 'Components/Panels/Card',
  component: Card,
  subcomponents: {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  },
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: CardDefaultStorySource,
      },
    },
  },

  render: args => ({
    components: { CardDefaultStory },

    setup() {
      return { args }
    },

    template: `
      <CardDefaultStory v-bind="args" />
    `,
  }),
}

export const NotificationCard: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: NotificationCardSource,
      },
    },
  },

  render: args => ({
    components: { NotificationCardComponent },

    setup() {
      return { args }
    },

    template: `
      <NotificationCardComponent v-bind="args" />
    `,
  }),
}
