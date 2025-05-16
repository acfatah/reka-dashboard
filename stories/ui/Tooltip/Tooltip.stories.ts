import type { StoryObj } from '@storybook/vue3'
import Button from '@/components/ui/button/Button.vue'
import {
  QuickTip,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { html } from 'common-tags'

import PrimitiveStory from './PrimitiveStory.vue'
import PrimitiveSource from './PrimitiveStory.vue?raw'
import QuickTipStory from './QuickTipStory.vue'
import QuickTipSource from './QuickTipStory.vue?raw'
import WithContentSlotStory from './WithContentSlotStory.vue'
import WithContentSlotSource from './WithContentSlotStory.vue?raw'

/**
 * A popup that displays information related to an element when the element receives
 * keyboard focus or the mouse hovers over it.
 *
 *
 * See also:
 * - Primitive API Reference: https://reka-ui.com/docs/components/tooltip
 * - [Overlays/Popover](?path=/docs/overlays-popover--docs) component
 */
export default {
  title: 'Components/Overlays/Tooltip',
  component: QuickTip,
  subcomponents: {
    Tooltip,
    TooltipArrow,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  },
  tags: ['autodocs'],

  args: {
    disabled: false,
  },

  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'top',
        },
      },
    },

    text: {
      control: { type: 'text' },
    },
  },
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: QuickTipSource,
      },
    },
  },

  args: {
    text: 'Add to library',
  },

  render: args => ({
    components: { QuickTipStory, Button },

    setup() {
      return { args }
    },

    template: html`
      <div class="flex h-[140px] flex-col items-center justify-center gap-4">
        <QuickTipStory v-bind="args" />
        <p>Tooltip: {{ args.disabled ? 'disabled' : 'enabled' }}</p>
      </div>
    `,
  }),
}

/**
 * Omit the `text` prop and use a `v-slot:content` slot to display the tooltip content.
 */
export const WithContentSlot: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: WithContentSlotSource,
      },
    },
  },

  render: args => ({
    components: { WithContentSlotStory, Button },

    setup() {
      return { args }
    },

    template: html`
      <div class="flex justify-center items-center h-[140px]">
        <WithContentSlotStory v-bind="args" />
      </div>
    `,
  }),
}

/**
 * When more customization is required, we can use the primitive tooltip components.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/tooltip
 */
export const Primitive: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: PrimitiveSource,
      },
    },
  },

  args: {
    side: 'top',
  },

  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'top' },
      },
    },
  },

  render: args => ({
    components: { PrimitiveStory },

    setup() {
      return { args }
    },

    template: html`
      <div class="flex justify-center items-center h-[140px]">
        <PrimitiveStory v-bind="args" />
      </div>
    `,
  }),
}
