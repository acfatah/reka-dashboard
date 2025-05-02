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

import BreadcrumbCollapsed from '@/playground/components/breadcrumb/BreadcrumbCollapsed.vue'
import BreadcrumbCollapsedSource from '@/playground/components/breadcrumb/BreadcrumbCollapsed.vue?raw'
import BreadcrumbDefault from '@/playground/components/breadcrumb/BreadcrumbDefault.vue'
import BreadcrumbDefaultSource from '@/playground/components/breadcrumb/BreadcrumbDefault.vue?raw'
import BreadcrumbResponsive from '@/playground/components/breadcrumb/BreadcrumbResponsive.vue'
import BreadcrumbResponsiveSource from '@/playground/components/breadcrumb/BreadcrumbResponsive.vue?raw'
import BreadcrumbWithCustomSeparator from '@/playground/components/breadcrumb/BreadcrumbWithCustomSeparator.vue'
import BreadcrumbWithCustomSeparatorSource from '@/playground/components/breadcrumb/BreadcrumbWithCustomSeparator.vue?raw'
import BreadcrumbWithDropdown from '@/playground/components/breadcrumb/BreadcrumbWithDropdown.vue'
import BreakcrumbWithDropdownSource from '@/playground/components/breadcrumb/BreadcrumbWithDropdown.vue?raw'
import BreadcrumbWithRouterLink from '@/playground/components/breadcrumb/BreadcrumbWithRouterLink.vue'
import BreadcrumbWithRouterLinkSource from '@/playground/components/breadcrumb/BreadcrumbWithRouterLink.vue?raw'

/**
 * Displays the path to the current resource using a hierarchy of links.
 *
 * Documentation: https://www.shadcn-vue.com/docs/components/breadcrumb
 */
export default {
  title: 'Components/Navigation/Breadcrumb',
  component: BreadcrumbDefault,
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
        code: BreadcrumbDefaultSource,
      },
    },
  },

  render: args => ({
    components: { BreadcrumbDefault },

    setup() {
      return { args }
    },

    template: `
      <BreadcrumbDefault v-bind="args" />
    `,
  }),
}

export const CustomSeparator: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: BreadcrumbWithCustomSeparatorSource,
      },
    },
  },

  render: args => ({
    components: { BreadcrumbWithCustomSeparator },

    setup() {
      return { args }
    },

    template: `
      <BreadcrumbWithCustomSeparator v-bind="args" />
    `,
  }),
}

export const Dropdown: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: BreakcrumbWithDropdownSource,
      },
    },
  },

  render: args => ({
    components: { BreadcrumbWithDropdown },

    setup() {
      return { args }
    },

    template: `
      <BreadcrumbWithDropdown v-bind="args" />
    `,
  }),
}

export const Collapsed: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: BreadcrumbCollapsedSource,
      },
    },
  },

  render: args => ({
    components: { BreadcrumbCollapsed },

    setup() {
      return { args }
    },

    template: `
      <BreadcrumbCollapsed v-bind="args" />
    `,
  }),
}

export const RouterLink: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: BreadcrumbWithRouterLinkSource,
      },
    },
  },

  render: args => ({
    components: { BreadcrumbWithRouterLink },

    setup() {
      return { args }
    },

    template: `
      <BreadcrumbWithRouterLink v-bind="args" />
    `,
  }),
}

export const Responsive: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: BreadcrumbResponsiveSource,
      },
    },
  },

  render: args => ({
    components: { BreadcrumbResponsive },

    setup() {
      return { args }
    },

    template: `
      <BreadcrumbResponsive v-bind="args" />
    `,
  }),
}
