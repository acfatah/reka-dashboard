import type { StoryObj } from '@storybook/vue3'
import { Icon } from '@/components/ui/icon'

/**
 * Icon component using Iconify library.
 *
 * You can use `width` and `height` props OR css `size-*` utility class to set the icon size.<br>
 * The default size is set to `24px`.
 *
 * Browse icons sets at https://icon-sets.iconify.design.<br>
 * Read more about Iconify at https://iconify.design/docs/icon-components/vue.
 */
export default {
  title: 'Components/Media & Icons/Iconify Icon',
  component: Icon,
  tags: ['autodocs'],

  args: {
    icon: 'mdi-light:menu',
  },

  argTypes: {
    icon: {
      control: 'text',
      type: { required: true },
      description: 'Icon name or icon data',
    },

    inline: {
      control: 'boolean',
      type: 'boolean',
      defaultValue: false,
      description: 'Changes vertical alignment',
    },

    width: {
      control: 'text',
      type: 'string|number',
      defaultValue: '',
      description: 'Icon width',
    },

    height: {
      control: 'text',
      type: 'string|number',
      defaultValue: '',
      description: 'Icon height',
    },

    horizontalFlip: {
      control: 'boolean',
      type: 'boolean',
      defaultValue: false,
      description: 'Flips icon horizontally',
    },

    verticalFlip: {
      control: 'boolean',
      type: 'boolean',
      defaultValue: false,
      description: 'Flips icon vertically',
    },

    flip: {
      control: 'text',
      type: 'string',
      defaultValue: '',
      description: 'Alternative to horizontalFlip and verticalFlip',
    },

    rotate: {
      control: 'number',
      type: 'number|string',
      defaultValue: 0,
      description: 'Rotates icon',
    },

    color: {
      control: 'color',
      type: 'string',
      defaultValue: '',
      description: 'Changes icon color',
    },

    onLoad: {
      control: 'function',
      type: 'function',
      defaultValue: () => {},
      description: 'Callback that is called when icon data has been loaded',
    },
  },
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: `<Icon icon="mdi-light:menu" />`,
      },
    },
  },

  render: args => ({
    components: { Icon },

    setup() {
      return { args }
    },

    template: '<Icon v-bind="args" />',
  }),
}
