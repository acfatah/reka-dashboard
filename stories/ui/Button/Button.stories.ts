import type { StoryObj } from '@storybook/vue3'
import { Button } from '@/components/ui/button'
import Iconify from '@/components/ui/icon/Iconify.vue'
import { Toaster } from '@/components/ui/toast'
import { html } from 'common-tags'

import FormStory from './FormStory.vue'
import FormSource from './FormStory.vue?raw'

const PrimitiveProps = ['as', 'asChild']

/**
 * Displays a button or a component that looks like a button.
 */
export default {
  title: 'Data Entry/Button',
  component: Button,
  tags: ['autodocs'],

  args: {
    disabled: false,
  },

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },

    size: {
      control: { type: 'select' },
      options: ['default', 'xs', 'sm', 'lg', 'icon'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },

    as: {
      type: 'string',
      table: {
        type: { summary: ['string | Component'] },
        defaultValue: { summary: 'button' },
      },
      description: '[AsTag](https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Primitive/Primitive.ts#L4)',
    },

    asChild: {
      type: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      description: '[Reka\'s Composition](https://www.reka-ui.com/docs/guides/composition.html)',

    },

    class: {
      type: 'string',
      table: {
        type: { summary: 'string | array | object' },
        defaultValue: { summary: 'null' },
      },
      description: 'HTMLAttributes[\'class\']',
    },

    disabled: {
      type: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: html`<Button>Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: html`
      <Button v-bind="args">{{ args.text }}</Button>
    `,
  }),
}

export const Form: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: FormSource,
      },
    },
  },

  render: () => ({
    components: { FormStory, Toaster },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <FormStory />
    `,
  }),
}

export const Secondary: StoryObj = {
  parameters: {
    controls: {
      exclude: [...PrimitiveProps, 'variant'],
    },

    docs: {
      source: {
        code: html`<Button variant="secondary">Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
    variant: 'secondary',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: html`
      <Button v-bind="args">{{ args.text }}</Button>
    `,
  }),
}

export const Destructive: StoryObj = {
  parameters: {
    controls: {
      exclude: [...PrimitiveProps, 'variant'],
    },

    docs: {
      source: {
        code: html`<Button variant="destructive">Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
    variant: 'destructive',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: html`
      <Button v-bind="args">{{ args.text }}</Button>
    `,
  }),
}

export const Outline: StoryObj = {
  parameters: {
    controls: {
      exclude: [...PrimitiveProps, 'variant'],
    },

    docs: {
      source: {
        code: html`<Button variant="outline">Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
    variant: 'outline',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: html`
      <Button v-bind="args">{{ args.text }}</Button>
    `,
  }),
}

export const Ghost: StoryObj = {
  parameters: {
    controls: {
      exclude: [...PrimitiveProps, 'variant'],
    },

    docs: {
      source: {
        code: html`<Button variant="ghost">Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
    variant: 'ghost',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: html`
      <Button v-bind="args">{{ args.text }}</Button>
    `,
  }),
}

export const Icon: StoryObj = {
  parameters: {
    controls: {
      exclude: [...PrimitiveProps, 'size'],
    },

    docs: {
      source: {
        code: html`
          <Button variant="outline" size="icon">
            <Iconify icon="lucide:chevron-right" />
          </Button>
        `,
      },
    },
  },

  render: (args) => {
    return {
      components: { Button, Iconify },

      setup() {
        return { args }
      },

      template: html`
        <Button variant="outline" size="icon" v-bind="args">
          <Iconify icon="lucide:chevron-right" />
        </Button>
      `,
    }
  },
}

export const WithIcon: StoryObj = {
  parameters: {
    controls: {
      exclude: PrimitiveProps,
    },

    docs: {
      source: {
        code: html`
          <Button>
            <Iconify icon="lucide:mail" />
            Login with Email
          </Button>
        `,
      },
    },
  },

  render: (args) => {
    return {
      components: { Button, Iconify },

      setup() {
        return { args }
      },

      template: html`
        <Button v-bind="args">
          <Iconify icon="lucide:mail" />
          Login with Email
        </Button>
      `,
    }
  },
}

export const Loading: StoryObj = {
  parameters: {
    controls: {
      exclude: PrimitiveProps,
    },

    docs: {
      source: {
        code: html`
          <Button disabled">
            <Iconify icon="lucide:rotate-cw" />
            Please wait
          </Button>
        `,
      },
    },
  },

  render: (args) => {
    return {
      components: { Button, Iconify },

      setup() {
        return { args }
      },

      template: html`
        <Button disabled v-bind="args">
          <Iconify icon="lucide:rotate-cw" class="animate-spin" />
          Please wait
        </Button>
      `,
    }
  },
}
