import Cards from './DefaultStory.vue'
import CardsSource from './DefaultStory.vue?raw'

export default {
  title: 'shadcn/Examples/Cards',
  component: Cards,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: CardsSource,
      },
    },
  },
}
