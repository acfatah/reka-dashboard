# Bun Vue

<p>
  <a href="https://github.com/acfatah/bun-vue-ts/commits/main">
  <img alt="GitHub last commit (by committer)" src="https://img.shields.io/github/last-commit/acfatah/bun-vue-ts?display_timestamp=committer&style=flat-square"></a>
</p>

Opinionated Vue Application Boilerplate.

This template should help you get started with developing a Vue 3 application in TypeScript and Vite using Bun.

> [!IMPORTANT]
> WORK IN PROGRESS

## Features

- Opinionated linting and styling, based on [@antfu/eslint-config](https://github.com/antfu/eslint-config).
- Precommit hook to lint staged files using [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks).
- Auto load modules using [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import).
- Auto load Vue components using [unplugin-vue-component](https://github.com/unplugin/unplugin-vue-components).
- Preinstalled with [@vueuse/core](https://vueuse.org/functions.html).

## Usage

1. Copy the repository,

```bash
bunx tiged acfatah/bun-vue-ts newproject
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
bun outdated && bun install
```
