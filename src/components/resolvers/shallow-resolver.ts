import type { ImportInfo } from 'unplugin-vue-components'
import type { ComponentResolver } from 'unplugin-vue-components/types'
import fs from 'node:fs'
import path from 'node:path'

/**
 * Shallow import components from a directory
 */
export function useShallowResolver(searchDirs: string[]): ComponentResolver {
  return (componentName: string): ImportInfo | undefined => {
    for (const dir of searchDirs) {
      const filePath = path.resolve(`${dir.replace(/\/$/, '')}/${componentName}.vue`)

      if (fs.existsSync(filePath))
        return { name: 'default', from: filePath }
    }
  }
}
