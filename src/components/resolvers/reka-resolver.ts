import type { ImportInfo } from 'unplugin-vue-components'

/**
 * To avoid naming conflicts, we selectively auto import components from reka-ui.
 */
export default function (componentName: string) {
  const components: ImportInfo[] = [
    // Utilities
    { name: 'ConfigProvider', from: 'reka-ui' },
    { name: 'FocusScope', from: 'reka-ui' },
    { name: 'Presence', from: 'reka-ui' },
    { name: 'Primitive', from: 'reka-ui' },
    { name: 'Slot', from: 'reka-ui' },
    { name: 'VisuallyHidden', from: 'reka-ui' },

    // Components
    { name: 'SplitterGroup', from: 'reka-ui' },
    { name: 'SplitterPanel', from: 'reka-ui' },
    { name: 'SplitterResizeHandle', from: 'reka-ui' },
  ]

  return components.find(
    component => component.as === componentName || component.name === componentName,
  )
}
