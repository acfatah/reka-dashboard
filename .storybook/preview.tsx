import type { Preview } from '@storybook/vue3'
import { withThemeByClassName } from '@storybook/addon-themes'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { setup } from '@storybook/vue3'

import { createPinia } from 'pinia'
import theme from './theme'

import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks'
import React from 'react'

import '../src/styles/main.css'

const pinia = createPinia()

setup((app) => {
  app.use(pinia)
})

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },

    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: [
          'Readme',
          'Foundation',
          'Layout',
          'Navigation',
          'Panels',
          'Overlays',
          'Feedback',
          'Media & Icons',
          'Forms',
          'Data Entry',
          'Data Display',
          'Charts',
          ['Unovis'],
        ],
        locales: 'en-US',
      },
    },

    themes: {
      target: 'html',
    },

    docs: {
      theme,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },

      defaultTheme: 'light',
    }),

    // Decorator to apply bg-color to stories in dark mode
    (_story, context) => {
      const body = document.querySelector('body')
      const stories = document.querySelectorAll('.docs-story')
      const THEME_CLASS = 'bg-background'

      if (context.viewMode === 'story') {
        body?.classList.add(THEME_CLASS)
      }
      else {
        body?.classList.remove(THEME_CLASS)
      }

      stories.forEach((element) => {
        element.classList.add(THEME_CLASS)
      })

      return { template: `<story/>` }
    },
  ],
}

export default preview
