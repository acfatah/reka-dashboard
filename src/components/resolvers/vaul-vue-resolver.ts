import type { ImportInfo } from 'unplugin-vue-components'

/**
 * unplugin-vue-components/vite resolver for vaul-vue
 *
 * Read more: https://github.com/unovue/vaul-vue
 */
export default function (componentName: string) {
  const components: ImportInfo[] = [
    { name: 'DrawerClose', from: 'vaul-vue' },
    { name: 'DrawerTrigger', from: 'vaul-vue' },
  ]

  return components.find(
    component => component.as === componentName || component.name === componentName,
  )
}
