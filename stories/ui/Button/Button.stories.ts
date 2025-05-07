import type { StoryObj } from '@storybook/vue3'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Toaster } from '@/components/ui/toast'
import { cn } from '@/lib/utils'
import { html } from 'common-tags'

import FormButtonsStory from '@/playground/components/button/FormButtons.vue'
import FormButtonsSource from '@/playground/components/button/FormButtons.vue?raw'

const PrimitiveProps = ['as', 'asChild']

/**
 * Displays a button or a component that looks like a button.
 */
export default {
  title: 'Components/Data Entry/Button',
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
      description: '[Reka\'s Composition](https://reka-ui.com/docs/guides/composition)',

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
        code: FormButtonsSource,
      },
    },
  },

  render: () => ({
    components: { FormButtonsStory, Toaster },

    template: html`
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <FormButtonsStory />
    `,
  }),
}

export const SecondaryVariant: StoryObj = {
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

export const DestructiveVariant: StoryObj = {
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

export const OutlineVariant: StoryObj = {
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

export const GhostVariant: StoryObj = {
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

export const IconVariant: StoryObj = {
  parameters: {
    controls: {
      exclude: [...PrimitiveProps, 'size'],
    },

    docs: {
      source: {
        code: html`
          <Button variant="outline" size="icon">
            <Icon icon="lucide:chevron-right" class="size-4" />
          </Button>
        `,
      },
    },
  },

  render: (args) => {
    return {
      components: { Button, Icon },

      setup() {
        return { args }
      },

      template: html`
        <Button variant="outline" size="icon" v-bind="args">
          <Icon icon="lucide:chevron-right" class="size-4" />
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
            <Icon icon="lucide:mail" class="size-4" />
            Login with Email
          </Button>
        `,
      },
    },
  },

  render: (args) => {
    return {
      components: { Button, Icon },

      setup() {
        return { args }
      },

      template: html`
        <Button v-bind="args">
          <Icon icon="lucide:mail" class="size-4" />
          Login with Email
        </Button>
      `,
    }
  },
}

export const Loading: StoryObj = {
  args: {
    disabled: true,
    loading: true,
  },

  parameters: {
    controls: {
      exclude: PrimitiveProps,
    },

    docs: {
      source: {
        code: html`
          <Button disabled">
            <Icon
              icon="lucide:rotate-cw"
              :class="cn(
                'size-4',
                props.loading && 'animate-spin',
              )"
            />
            Please wait
          </Button>
        `,
      },
    },
  },

  render: (args) => {
    return {
      components: { Button, Icon },

      setup() {
        return { args, cn }
      },

      template: html`
        <Button disabled v-bind="args">
          <Icon
            icon="lucide:rotate-cw"
            :class="cn(
              'size-4',
              args.loading && 'animate-spin',
            )"
          />
          Please wait
        </Button>
      `,
    }
  },
}
