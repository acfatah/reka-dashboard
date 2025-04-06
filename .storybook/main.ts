import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  core: {
    // https://storybook.js.org/docs/configure/telemetry
    disableTelemetry: true,
  },

  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },

  docs: {
    autodocs: true,
  },
}
export default config
