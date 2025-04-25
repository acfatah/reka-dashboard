# Vue Single Page Application Boilerplate

<p>
  <a href="https://bun.sh">
    <img alt="bun.sh" src="https://img.shields.io/badge/Bun-%23000000.svg?style=flat-square&logo=bun&logoColor=white">
  </a>
  <a href="https://github.com/antfu/eslint-config">
    <img alt="Code Style" src="https://antfu.me/badge-code-style.svg">
  </a>
  <a href="https://github.com/acfatah/bun-vue/commits/main">
    <img alt="GitHub last commit (by committer)" src="https://img.shields.io/github/last-commit/acfatah/bun-vue?display_timestamp=committer&style=flat-square">
  </a>
</p>

Opinionated Vue Single Page Application boilerplate.

This template is designed as starting point for developing a Vue 3 single page application, utilizing `Bun`, `TypeScript` and `Vite`.

> [!IMPORTANT]
> This repository is maintained through [acfatah/reka-dashboard#plain](https://github.com/acfatah/reka-dashboard/tree/plain) branch.

## Features

- Preinstalled with [@vueuse/core](https://vueuse.org/functions.html).
- Preinstalled with [Pinia store](https://pinia.vuejs.org).
- Auto load modules using [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import).
- Auto load Vue components using [unplugin-vue-component](https://github.com/unplugin/unplugin-vue-components).
- Opinionated linting and styling, based on [@antfu/eslint-config](https://github.com/antfu/eslint-config).
- Precommit hook to lint staged files using [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks).

## Usage

1. Copy the repository,

```bash
bunx tiged acfatah/bun-vue newproject
```

2. Include the `.vscode` directory in your repository to ensure consistent settings for all developers. Use git add -f `.vscode` to force add it, bypassing any ignore rules.

```bash
git add -f .vscode
```

3. Initialize `simple-git-hooks`,

```bash
rm -rf .git/hooks && bunx simple-git-hooks
```

4. Update and install dependencies

```bash
bun update
```

5. Initialize git repository

```bash
git init && git add -A && git commit -m "Initial commit"
```

6. To start development, run

```bash
bun run dev
```

## Additional steps for Windows user (without WSL).

> [!WARNING]
> This project requires specific configurations for Windows users to ensure correct path resolution!

Please ensure you apply the changes outlined in the `vite.config.ts` snippet below
if you're developing on a Windows platform.

```diff
+ import os from 'node:os'
import process from 'node:process'
// other imports...

+ const isWindows = os.platform() === 'win32'

+ function importPathTransform(path: string) {
+  return /^[a-z]:\\/i.test(path) ? path.replaceAll('\\', '\\\\') : path
+ }

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    AutoImport({
      dts: true,
      vueTemplate: true,
      dirs: [
        'src/components/helpers',
      ],
      imports: [
        'vue',
        'vue-router',
      ],
+      ...(isWindows && { importPathTransform }),
    }),
    Components({
      dts: true,
      resolvers,
      dirs: componentDirs,
+      ...(isWindows && { importPathTransform }),
    }),
    process.env?.VITE_VUE_DEV_TOOLS === 'true' && vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```
