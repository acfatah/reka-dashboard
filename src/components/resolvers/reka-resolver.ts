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
    { name: 'ComboboxContent', from: 'reka-ui' },
    { name: 'ComboboxLabel', from: 'reka-ui' },
    { name: 'ComboboxPortal', from: 'reka-ui' },
    { name: 'DropdownMenuPortal', from: 'reka-ui' },
    { name: 'TagsInputRoot', from: 'reka-ui' },
    { name: 'SplitterGroup', from: 'reka-ui' },
    { name: 'SplitterPanel', from: 'reka-ui' },
    { name: 'SplitterPanel', as: 'ResizablePanel', from: 'reka-ui' },
    { name: 'SplitterResizeHandle', from: 'reka-ui' },
    { name: 'TabsIndicator', from: 'reka-ui' },
  ]

  return components.find(
    component => component.as === componentName || component.name === componentName,
  )
}
