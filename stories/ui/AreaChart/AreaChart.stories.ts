import { AreaChart } from '@/components/ui/area-chart/index.js'
import { CurveType } from '@unovis/ts'
import data from '../LineChart/data/montly.js'
import AreaChartSource from './DefaultSnippet.vue?raw'
import SparklineSource from './SparklineSnippet.vue?raw'

/**
 * https://unovis.dev/docs/xy-charts/Area
 */
export default {
  title: 'Charts/Area Chart',
  component: AreaChart,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    data,
    index: 'name',
    categories: ['total', 'predicted'],
  },

  parameters: {
    docs: {
      source: {
        code: AreaChartSource,
      },
    },
  },
}

export const Sparkline = {
  args: {
    data,
    'class': 'h-[100px] w-[400px]',
    'index': 'name',
    'categories': ['total'],
    'show-grid-line': false,
    'show-legend': false,
    'show-x-axis': false,
    'show-y-axis': false,
    'curve-type': CurveType.Linear,
  },

  parameters: {
    docs: {
      source: {
        code: SparklineSource,
      },
    },
  },
}
