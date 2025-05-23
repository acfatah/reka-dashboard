import type { ImportInfo } from 'unplugin-vue-components'

/**
 * unplugin-vue-components/vite resolver for vee-validate Higher-order components (HOC)
 *
 * Read more: https://vee-validate.logaretm.com/v4/guide/overview/
 */
export default function (componentName: string) {
  const components: ImportInfo[] = [
    { name: 'ErrorMessage', from: 'vee-validate' },
    { name: 'Field', as: 'FormField', from: 'vee-validate' },
    { name: 'FieldArray', from: 'vee-validate' },
    { name: 'Form', from: 'vee-validate' },
  ]

  return components.find(
    component => component.as === componentName || component.name === componentName,
  )
}
