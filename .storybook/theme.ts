import { create } from '@storybook/theming/create'
import type { ThemeVarsPartial } from '@storybook/theming'
import { name } from '../package.json'

/**
 * https://storybook.js.org/docs/configure/user-interface/theming
 */
export default create({
  base: 'light',

  // Typography
  fontBase: 'Inter, ui-sans-serif, system-ui, sans-serif, "Open Sans"',
  fontCode: 'monospace',

  brandTitle: name,
  // brandUrl: 'https://github.com/user/repo',

  colorPrimary: '#10bbd2',
  colorSecondary: '#41B883',

  // Toolbar default and active colors
  barHoverColor: '#10bbd2',
} as ThemeVarsPartial)
