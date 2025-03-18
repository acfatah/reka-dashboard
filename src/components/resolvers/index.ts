import type { ComponentResolver } from 'unplugin-vue-components/types'
import rekaResolver from './reka-resolver'
import { useShallowResolver } from './shallow-resolver'
import vaulVueResolver from './vaul-vue-resolver'
import veeValidateResolver from './vee-validate-resolver'
import vueUseResolver from './vue-use-resolver'

/** An array of directories to search for components including subdirectories */
export const dirs = [
  'src/components/ui',
  'src/components/layouts',
]

/** An array of directories to shallow import components */
const shallowImportDirs = [
  'src/components',
]

/**
 * Automatic component resolver using unplugin-vue-components.
 *
 * See: https://github.com/unplugin/unplugin-vue-components#importing-from-ui-libraries
 */
export const resolvers: ComponentResolver[] = [
  useShallowResolver(shallowImportDirs),
  vueUseResolver,
  rekaResolver,
  vaulVueResolver,
  veeValidateResolver,
]
