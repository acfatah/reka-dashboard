/**
 * unplugin-vue-components
 * https://github.com/unplugin/unplugin-vue-components
 */

import type { ComponentResolver } from 'unplugin-vue-components/types'
import fs from 'node:fs'
import path from 'node:path'
import veeValidateResolver from './vee-validate-resolver'

/** An array of directories to search for components including subdirectories */
export const dirs = [
  'src/components/base',
  'src/components/layouts',
]

/** An array of directories to search for components */
const searchDirs = [
  'src/components',
]

function defaultResolver(componentName: string) {
  for (const dir of searchDirs) {
    const filePath = path.resolve(`${dir.replace(/\/$/, '')}/${componentName}.vue`)

    if (fs.existsSync(filePath))
      return { name: 'default', from: filePath }
  }
}

export const resolvers: ComponentResolver[] = [
  defaultResolver,
  veeValidateResolver,
]
