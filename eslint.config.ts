/* eslint-disable antfu/no-top-level-await */

import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import {
  comments,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  sortPackageJson,
  sortTsconfig,
  stylistic,
  toml,
  typescript,
  unicorn,
  vue,
  yaml,
} from '@antfu/eslint-config'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

const antfuComments = await comments()
const antfuIgnores = await ignores()
const antfuImports = await imports()
const antfuJavascript = await javascript()
const antfuJsdoc = await jsdoc()
const antfuJsonc = await jsonc()
const antfuMarkdown = await markdown()
const antfuPackageJson = await sortPackageJson()
const antfuSortTsconfig = sortTsconfig()
const antfuStylistic = await stylistic()
const antfuToml = await toml()
const antfuTypescript = await typescript()
const antfuUnicorn = await unicorn()
const antfuVue = await vue()
const antfuYaml = await yaml()

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  ...antfuComments,
  ...antfuIgnores,
  ...antfuImports,
  ...antfuJavascript,
  ...antfuJsdoc,
  ...antfuJsonc,
  ...antfuMarkdown,
  ...antfuPackageJson,
  ...antfuSortTsconfig,
  ...antfuStylistic,
  ...antfuToml,
  ...antfuTypescript,
  ...antfuUnicorn,
  ...antfuVue,
  ...antfuYaml,
)
