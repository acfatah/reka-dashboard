import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'

import SvgIcon from '@/components/SvgIcon.vue'

/**
 * Dynamically load svg icon from `src/assets/icons` using [`vite-svg-loader`][1]
 * to load the svg file.
 *
 * It's recommended to use `size-*` utility class to size the icon. The default
 * size is `size-6` or  `24px`. If `width` and `height` are provided, it will
 * take precedence over `size-*` utility.
 *
 * [1]: https://github.com/jpkleemans/vite-svg-loader
 */
export default {
  title: 'Components/Media & Icons/SVG Icon',
  component: SvgIcon,
  tags: ['autodocs'],

  args: {
    name: 'vue',
  },

  argTypes: {
    name: {
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
      description: 'SVG icon file name in the `src/assets/icons` directory',
    },

    size: {
      control: 'number',
    },
  },
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: html`
          <!-- The icon file is 'src/assets/icons/vue.svg' -->
          <SvgIcon name="vue" />
        `,
      },
    },
  },

  render: args => ({
    components: { SvgIcon },

    setup() {
      return { args }
    },

    template: `<SvgIcon v-bind="args" />`,
  }),
}
