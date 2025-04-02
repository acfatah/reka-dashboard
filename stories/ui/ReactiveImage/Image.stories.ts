import type { StoryObj } from '@storybook/vue3'
import { UseImage } from '@vueuse/components'

import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import WithInvalidLinkStory from './WithInvalidLink.vue'
import WithInvalidLinkSource from './WithInvalidLink.vue?raw'

/**
 * Reactive load an image in the browser, and wait the result to display it or show a fallback.
 *
 * The component is autoloaded.
 *
 * Documentation: https://vueuse.org/core/useImage
 *
 * See also:
 * - [Vueuse renderless components](https://vueuse.org/guide/components)
 */
export default {
  title: 'Components/Media & Icons/Reactive Image',
  component: DefaultStory,
  subcomponents: { UseImage },
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

  args: {
    src: 'https://placehold.co/320x240',
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

export const WithInvalidLink: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithInvalidLinkSource,
      },
    },
  },

  // args: {
  //   src: 'https://placehold.co/320x240',
  // },

  render: args => ({
    components: { WithInvalidLinkStory },

    setup() {
      return { args }
    },

    template: `
      <WithInvalidLinkStory v-bind="args" />
    `,
  }),
}
