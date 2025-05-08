import type { StoryObj } from '@storybook/vue3'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

import ContextMenuDefaultStory from '@/playground/components/context-menu/ContextMenuDefault.vue'
import ContextMenuDefaultSource from '@/playground/components/context-menu/ContextMenuDefault.vue?raw'

/**
 * Displays a menu to the user — such as a set of actions or functions — triggered by a button.
 *
 * Primitive API Reference: https://reka-ui.com/docs/components/context-menu
 */
export default {
  title: 'Components/Overlays/ContextMenu',
  component: ContextMenuDefaultStory,
  subcomponents: {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuGroup,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuPortal,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
  },
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: ContextMenuDefaultSource,
      },
    },
  },

  render: args => ({
    components: { ContextMenuDefaultStory },

    setup() {
      return { args }
    },

    template: `
      <ContextMenuDefaultStory v-bind="args" />
    `,
  }),
}
