import { describe, expect, it } from 'vitest'

import HelloWorld from '@/components/HelloWorld.vue'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'

function setupTestComponent() {
  const pinia = createPinia()

  setActivePinia(pinia)

  return { pinia }
}

describe('the HelloWorld', () => {
  it('renders properly', () => {
    setupTestComponent()

    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
