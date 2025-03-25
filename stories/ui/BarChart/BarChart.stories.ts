import { BarChart } from '@/components/ui/bar-chart/index.ts'
import { monthlyData, monthlyPredictions } from './data.ts'
import BarChartSource from './DefaultSnippet.vue?raw'
import WithCategoriesSource from './WithCategorySnippet.vue?raw'

/**
 * https://unovis.dev/docs/xy-charts/GroupedBar
 */
export default {
  title: 'Charts/Bar Chart',
  component: BarChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: BarChartSource,
      },
    },
  },
}

export const Default = {
  args: {
    data: monthlyData,
    index: 'name',
    categories: ['total'],
  },
}

export const WithCategories = {
  args: {
    'data': monthlyPredictions,
    'index': 'name',
    'categories': ['total', 'predicted'],
    'y-formatter': (tick: number | Date, _i: number) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    },
  },

  parameters: {
    docs: {
      source: {
        code: WithCategoriesSource,
      },
    },
  },
}
