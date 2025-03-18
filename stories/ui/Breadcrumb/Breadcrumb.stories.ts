import type { StoryObj } from '@storybook/vue3'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import CollapsedStory from './CollapsedStory.vue'
import CollapsedSource from './CollapsedStory.vue?raw'
import CustomSeparatorStory from './CustomSeparatorStory.vue'
import CustomSeparatorSource from './CustomSeparatorStory.vue?raw'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import DropdownStory from './DropdownStory.vue'
import DropdownSource from './DropdownStory.vue?raw'
import LinkStory from './LinkStory.vue'
import LinkSource from './LinkStory.vue?raw'
import ResponsiveStory from './ResponsiveStory.vue'
import ResponsiveSource from './ResponsiveStory.vue?raw'

/**
 * Displays the path to the current resource using a hierarchy of links.
 *
 * Documentation: https://www.shadcn-vue.com/docs/components/breadcrumb
 */
export default {
  title: 'Navigation/Breadcrumb',
  component: DefaultStory,
  subcomponents: {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  },
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

export const CustomSeparator: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: CustomSeparatorSource,
      },
    },
  },

  render: args => ({
    components: { CustomSeparatorStory },

    setup() {
      return { args }
    },

    template: `
      <CustomSeparatorStory v-bind="args" />
    `,
  }),
}

export const Dropdown: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DropdownSource,
      },
    },
  },

  render: args => ({
    components: { DropdownStory },

    setup() {
      return { args }
    },

    template: `
      <DropdownStory v-bind="args" />
    `,
  }),
}

export const Collapsed: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: CollapsedSource,
      },
    },
  },

  render: args => ({
    components: { CollapsedStory },

    setup() {
      return { args }
    },

    template: `
      <CollapsedStory v-bind="args" />
    `,
  }),
}

export const LinkComponent: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: LinkSource,
      },
    },
  },

  render: args => ({
    components: { LinkStory },

    setup() {
      return { args }
    },

    template: `
      <LinkStory v-bind="args" />
    `,
  }),
}

export const Responsive: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: ResponsiveSource,
      },
    },
  },

  render: args => ({
    components: { ResponsiveStory },

    setup() {
      return { args }
    },

    template: `
      <ResponsiveStory v-bind="args" />
    `,
  }),
}
