import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import HelloWorld from '@/components/HelloWorld.vue'
import { createPinia, setActivePinia } from 'pinia'

function setupTestComponent() {
  const pinia = createPinia()

  setActivePinia(pinia)

  return { pinia }
}

describe('helloWorld', () => {
  it('renders properly', () => {
    setupTestComponent()

    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
