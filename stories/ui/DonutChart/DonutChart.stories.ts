import { DonutChart } from '@/components/ui/donut-chart/index.ts'
import data from '../LineChart/data/montly.ts'
import ColorSource from './ColorSnippet.vue?raw'
import DefaultSource from './DefaultSnippet.vue?raw'
import PieChartSource from './PieChartSnippet.vue?raw'

/**
 * https://unovis.dev/docs/misc/Donut
 */
export default {
  title: 'Components/Charts/Donut Chart',
  component: DonutChart,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    data,
    'index': 'name',
    'category': 'total',
    'value-formatter': (tick: number | Date, _i: number) => {
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

export const PieChart = {
  args: {
    data,
    'index': 'name',
    'category': 'total',
    'type': 'pie',
    'value-formatter': (tick: number | Date, _i: number) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    },
  },

  parameters: {
    docs: {
      source: {
        code: PieChartSource,
      },
    },
  },
}

export const Color = {
  args: {
    data,
    'index': 'name',
    'category': 'total',
    'colors': ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'],
    'value-formatter': (tick: number | Date, _i: number) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    },
  },

  parameters: {
    docs: {
      source: {
        code: ColorSource,
      },
    },
  },
}
