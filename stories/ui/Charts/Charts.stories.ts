import type { StoryObj } from '@storybook/vue3'
import { AreaChart } from '@/components/ui/area-chart'
import { BarChart } from '@/components/ui/bar-chart'
import {
  ChartCrosshair,
  ChartLegend,
  ChartSingleTooltip,
  ChartTooltip,
} from '@/components/ui/chart'
import { DonutChart } from '@/components/ui/donut-chart'
import { LineChart } from '@/components/ui/line-chart'

import data from '../LineChart/data/growth.ts'
import DefaultSource from '../LineChart/DefaultSnippet.vue?raw'

/**
 * Charts components were built on top of [Unovis](https://unovis.dev) (a modular
 * data visualization framework), and inspired by [tremor](https://www.tremor.so).
 *
 * Documentation: https://unovis.dev
 */
export default {
  title: 'Components/Charts/Unovis',
  component: LineChart,
  subcomponents: {
    ChartCrosshair,
    ChartLegend,
    ChartSingleTooltip,
    ChartTooltip,
    BarChart,
    DonutChart,
    AreaChart,
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
}
