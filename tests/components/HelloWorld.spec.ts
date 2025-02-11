import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import HelloWorld from '@/components/HelloWorld.vue'

function setupTestComponent() {
  const pinia = createPinia()

  setActivePinia(pinia)

  return { pinia }
}

describe('HelloWorld', () => {
  it('renders properly', () => {
    setupTestComponent()

    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
