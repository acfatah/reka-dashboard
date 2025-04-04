import type { StoryObj } from '@storybook/vue3'
import { html } from 'common-tags'

import Typography from './Typography.vue'
import TypographySource from './Typography.vue?raw'

export default {
  title: 'Foundation/Typography/Default',
  component: Typography,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: TypographySource,
      },
    },
  },
}

const H1Source = html`
  <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    The Joke Tax Chronicles
  </h1>
`
export const H1: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: H1Source,
      },
    },
  },

  render: () => ({
    template: H1Source,
  }),
}

H1.storyName = 'h1'

const H2Source = html`
  <h2
    class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
  >
    The King's Plan
  </h2>
`

export const H2: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: H2Source,
      },
    },
  },

  render: () => ({
    template: H2Source,
  }),
}

H2.storyName = 'h2'

const H3Source = html`
  <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
    The Joke Tax
  </h3>
`
export const H3: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: H3Source,
      },
    },
  },

  render: () => ({
    template: H3Source,
  }),
}

H3.storyName = 'h3'

const H4Source = html`
  <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
    People stopped telling jokes
  </h4>
`
export const H4: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: H4Source,
      },
    },
  },

  render: () => ({
    template: H4Source,
  }),
}

H4.storyName = 'h4'

const PSource = html`
  <p class="leading-7 [&:not(:first-child)]:mt-6">
    Once upon a time, in a far-off land, there was a very lazy king who
    spent all day lounging on his throne. One day, his advisors came to him
    with a problem: the kingdom was running out of money.
  </p>
`
export const P: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: PSource,
      },
    },
  },

  render: () => ({
    template: PSource,
  }),
}

P.storyName = 'p'

const BlockquoteSource = html`
  <blockquote class="border-l-2 pl-6 italic">
    "After all," he said, "everyone enjoys a good joke, so it's only fair
    that they should pay for the privilege."
  </blockquote>
`
export const Blockquote: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: BlockquoteSource,
      },
    },
  },

  render: () => ({
    template: BlockquoteSource,
  }),
}

const InlineCodeSource = html`
  <code
    class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
  >
    shadcn-ui
  </code>
`
export const InlineCode: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: InlineCodeSource,
      },
    },
  },

  render: () => ({
    template: InlineCodeSource,
  }),
}

const LeadSource = html`
  <p class="text-xl text-muted-foreground">
    A modal dialog that interrupts the user with important content and expects a
    response.
  </p>
`
export const Lead: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: LeadSource,
      },
    },
  },

  render: () => ({
    template: LeadSource,
  }),
}

const LargeSource = html`
  <div class="text-lg font-semibold">
    Are you absolutely sure?
  </div>
`
export const Large: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: LargeSource,
      },
    },
  },

  render: () => ({
    template: LargeSource,
  }),
}

const SmallSource = html`
  <small class="text-sm font-medium leading-none">
    Email address
  </small>
`
export const Small: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: SmallSource,
      },
    },
  },

  render: () => ({
    template: SmallSource,
  }),
}

const MutedSource = html`
  <p class="text-sm text-muted-foreground">
    Enter your email address.
  </p>
`
export const Muted: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: MutedSource,
      },
    },
  },

  render: () => ({
    template: MutedSource,
  }),
}

const UnorderedListSource = html`
  <ul class="ml-6 list-disc [&>li]:mt-2">
    <li>1st level of puns: 5 gold coins</li>
    <li>2nd level of jokes: 10 gold coins</li>
    <li>3rd level of one-liners : 20 gold coins</li>
  </ul>
`
export const UnorderedList: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: UnorderedListSource,
      },
    },
  },

  render: () => ({
    template: UnorderedListSource,
  }),
}

const TableSource = html`
  <div class="w-full overflow-y-auto">
    <table class="w-full">
      <thead>
        <tr class="m-0 border-t p-0 even:bg-muted">
          <th
            class="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
          >
            King's Treasury
          </th>
          <th
            class="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
          >
            People's happiness
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="m-0 border-t p-0 even:bg-muted">
          <td
            class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
          >
            Empty
          </td>
          <td
            class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
          >
            Overflowing
          </td>
        </tr>
        <tr class="m-0 border-t p-0 even:bg-muted">
          <td
            class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
          >
            Modest
          </td>
          <td
            class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
          >
            Satisfied
          </td>
        </tr>
        <tr class="m-0 border-t p-0 even:bg-muted">
          <td
            class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
          >
            Full
          </td>
          <td
            class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
          >
            Ecstatic
          </td>
        </tr>
      </tbody>
    </table>
  </div>
`
export const Table: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: TableSource,
      },
    },
  },

  render: () => ({
    template: TableSource,
  }),
}
