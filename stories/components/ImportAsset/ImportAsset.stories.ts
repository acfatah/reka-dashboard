import type { Meta, StoryObj } from '@storybook/vue3'
import type { ComponentProps } from 'vue-component-type-helpers'
import { html } from 'common-tags'

import ImportAsset from '@/components/ImportAsset.vue'

type ImportAssetArgs = ComponentProps<typeof ImportAsset>

/**
 * Skip import statement and dynamically load asset files from `src/assets/`.
 *
 * E.g. the path `/icons/vue.svg` resolves to `/src/assets/icons/vue.svg`.
 */
const meta: Meta<ImportAssetArgs> = {
  title: 'Components/Media & Icons/Import Asset',
  component: ImportAsset,
  tags: ['autodocs'],

  args: {
    src: '/icons/vue.svg',
    alt: 'Vue logo',
    width: 125,
    height: 125,
  },

  argTypes: {
    src: {
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
      description: 'Relative path to the asset file in the `src/assets` directory.',
    },
  },
}

export default meta

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: html`
          <ImportAsset alt="Vue logo" src="/icons/vue.svg" width="125" height="125" v-bind="$attrs" />
        `,
      },
    },
  },

  render: (args: Partial<ImportAssetArgs>) => ({
    components: { ImportAsset },

    setup() {
      return { args }
    },

    template: html`
      <ImportAsset v-bind="args" />
    `,
  }),
}
