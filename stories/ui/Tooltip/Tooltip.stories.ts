import type { StoryObj } from '@storybook/vue3'
import Button from '@/components/ui/button/Button.vue'
import {
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Tooltip from '@/components/ui/tooltip/TooltipRoot.vue'
import { html } from 'common-tags'
// import { CircleHelp as CircleHelpIcon } from 'lucide-vue-next'

import PrimitiveStory from './PrimitiveStory.vue'
import PrimitiveSource from './PrimitiveStory.vue?raw'
import TextTooltipStory from './TextTooltipStory.vue'
import WithSlotStory from './WithSlotStory.vue'
import WithSlotSource from './WithSlotStory.vue?raw'

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
  title: 'Overlays/Tooltip',
  component: Tooltip,
  subcomponents: {
    TooltipArrow,
    TooltipContent,
    TooltipProvider,
    TooltipRoot,
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
        code: html`
          <Tooltip text="Tooltip text">
            <!-- tooltip trigger -->
          </Tooltip>
`,
      },
    },
  },

  args: {
    text: 'Add to library',
  },

  render: args => ({
    components: { TextTooltipStory, Button },

    setup() {
      return { args }
    },

    template: html`
      <div class="flex h-[140px] flex-col items-center justify-center gap-4">
        <TextTooltipStory v-bind="args" />
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
        code: WithSlotSource,
      },
    },
  },

  render: args => ({
    components: { WithSlotStory, Button },

    setup() {
      return { args }
    },

    template: html`
      <div class="flex justify-center items-center h-[140px]">
        <WithSlotStory v-bind="args" />
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
