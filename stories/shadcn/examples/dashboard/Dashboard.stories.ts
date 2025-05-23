import type { StoryObj } from '@storybook/vue3'

import TabsComponent from './components/DashboardTabs.vue'
import TabsSource from './components/DashboardTabs.vue?raw'
import DateRangePickerComponent from './components/DateRangePicker.vue'
import DateRangePickerSource from './components/DateRangePicker.vue?raw'
import MainNavComponent from './components/MainNav.vue'
import MainNavSource from './components/MainNav.vue?raw'
import OverviewComponent from './components/Overview.vue'
import OverviewSource from './components/Overview.vue?raw'
import RecentSalesComponent from './components/RecentSales.vue'
import RecentSalesSource from './components/RecentSales.vue?raw'
import SearchComponent from './components/Search.vue'
import SearchSource from './components/Search.vue?raw'
import TeamSwitcherComponent from './components/TeamSwitcher.vue'
import TeamSwitcherSource from './components/TeamSwitcher.vue?raw'
import UserNavComponent from './components/UserNav.vue'
import UserNavSource from './components/UserNav.vue?raw'
import Dashboard from './Dashboard.vue'
import DashboardSource from './Dashboard.vue?raw'

export default {
  title: 'shadcn/Examples/Dashboard',
  component: Dashboard,
  tags: ['autodocs'],
}

export const Default: StoryObj = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: DashboardSource,
      },
    },
  },
}

export const TeamSwitcher: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: TeamSwitcherSource,
      },
    },
  },

  render: () => ({
    components: {
      TeamSwitcherComponent,
    },

    template: `
      <TeamSwitcherComponent />
    `,
  }),
}

export const MainNav: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: MainNavSource,
      },
    },
  },

  render: () => ({
    components: {
      MainNavComponent,
    },

    template: `
      <MainNavComponent />
    `,
  }),
}

export const UserNav: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: UserNavSource,
      },
    },
  },

  render: () => ({
    components: {
      UserNavComponent,
    },

    template: `
      <UserNavComponent />
    `,
  }),
}

export const Search: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: SearchSource,
      },
    },
  },

  render: () => ({
    components: {
      SearchComponent,
    },

    template: `
      <SearchComponent />
    `,
  }),
}

export const DateRangePicker: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: DateRangePickerSource,
      },
    },
  },

  render: () => ({
    components: {
      DateRangePickerComponent,
    },

    template: `
      <DateRangePickerComponent />
    `,
  }),
}

export const Tabs: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: TabsSource,
      },
    },
  },

  render: () => ({
    components: {
      TabsComponent,
    },

    template: `
      <TabsComponent />
    `,
  }),
}

export const Overview: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: OverviewSource,
      },
    },
  },

  render: () => ({
    components: {
      OverviewComponent,
    },

    template: `
      <OverviewComponent />
    `,
  }),
}

export const RecentSales: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: RecentSalesSource,
      },
    },
  },

  render: () => ({
    components: {
      RecentSalesComponent,
    },

    template: `
      <RecentSalesComponent />
    `,
  }),
}
