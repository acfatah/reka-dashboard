# Vue Micro-frontend Boilerplate

<p>
  <a href="https://github.com/acfatah/reka-dashboard/commits/plain">
  <img alt="GitHub last commit (by committer)" src="https://img.shields.io/github/last-commit/acfatah/reka-dashboard/plain?display_timestamp=committer&style=flat-square"></a>
</p>

Opinionated Vue [Micro Frontends](https://micro-frontends.org) Boilerplate.

This template is designed to assist you in getting started with the development of a Vue 3 micro-frontend application, utilizing `TypeScript` and `Vite`, and leveraging `Bun`.

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
bunx tiged acfatah/reka-dashboard#plain
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
