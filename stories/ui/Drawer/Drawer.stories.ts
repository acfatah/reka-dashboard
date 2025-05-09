import type { StoryObj } from '@storybook/vue3'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { html } from 'common-tags'

import BasicStory from '@/playground/components/drawer/DrawerBasic.vue'
import BasicSource from '@/playground/components/drawer/DrawerBasic.vue?raw'
import DrawerDefaultStory from '@/playground/components/drawer/DrawerDefault.vue'
import DrawerDefaultSource from '@/playground/components/drawer/DrawerDefault.vue?raw'

/**
 * Drawer is built on top of [Vaul Vue](https://github.com/unovue/vaul-vue).
 *
 * Documentation: https://www.shadcn-vue.com/docs/components/drawer<br>
 * Primitive API Reference: https://github.com/unovue/vaul-vue
 */
export default {
  title: 'Components/Overlays/Drawer',
  component: DrawerDefaultStory,
  subcomponents: {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerPortal,
    DrawerTitle,
    DrawerTrigger,
  },
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DrawerDefaultSource,
      },
    },
  },

  render: args => ({
    components: { DrawerDefaultStory },

    setup() {
      return { args }
    },

    template: html`
      <DrawerDefaultStory v-bind="args" />
      <p class="mt-4 text-sm text-muted-foreground">Resize the window to see the effect.</p>
    `,
  }),
}

export const Basic: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: BasicSource,
      },
    },
  },

  render: args => ({
    components: { BasicStory },

    setup() {
      return { args }
    },

    template: html`
      <BasicStory v-bind="args" />
    `,
  }),
}
