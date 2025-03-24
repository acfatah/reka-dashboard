import type { StoryObj } from '@storybook/vue3'
import { LineChart } from '@/components/ui/line-chart'
import data from './data/growth.ts'
import DefaultSource from './DefaultSnippet.vue?raw'
import SparklineSource from './SparklineSnippet.vue?raw'

export default {
  title: 'Charts/Line Chart',
  component: LineChart,
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  args: {
    data,
    'index': 'year',
    'categories': ['Export Growth Rate', 'Import Growth Rate'],
    'y-formatter': (tick: number | Date, _i: number) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    },
  },

  parameters: {
    docs: {
      source: {
        code: DefaultSource,
      },
    },
  },
}

export const Sparkline: StoryObj = {
  args: {
    data,
    'class': 'h-[100px] w-[400px]',
    'index': 'year',
    'categories': ['Export Growth Rate'],
    'y-formatter': (tick: number | Date, _i: number) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    },
    'show-tooltip': false,
    'show-grid-line': false,
    'show-legend': false,
    'show-x-axis': false,
    'show-y-axis': false,
  },

  parameters: {
    docs: {
      source: {
        code: SparklineSource,
      },
    },
  },
}
