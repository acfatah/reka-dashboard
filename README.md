# Reka Dashboard

<p>
  <a href="https://github.com/acfatah/reka-dashboard/commits/main">
  <img alt="GitHub last commit (by committer)" src="https://img.shields.io/github/last-commit/acfatah/reka-dashboard?display_timestamp=committer&style=flat-square"></a>
</p>

> [!IMPORTANT]
> WORK IN PROGRESS

- This repository,
  - is NOT a components library
  - is NOT a design library
  - is NOT a front-end framework
  - does NOT tied to ShadCN/ui design
  - does NOT tied to any spedific UX design framework
- But instead,
  - a collection of reusable Vue components
  - uses [Tailwindcss][4]
  - leverage [reka-ui][2] headless component libraries
  - uses [ShadCN/ui][3] as the base design but can be modified
    to suit any design
  - provides a design system adaptable to any UX design framework
- It,
  - promotes accessibility and adherence to web standards
  - focuses on component-driven development for consistency and maintainability
  - supports rapid prototyping with pre-built, ready-made components
  - includes extensive documentation, examples and visual testing using Storybook
  - improve collaboration between design and development teams
  - leverage ~~cutting edge~~ bleeding edge technology to improve DX and development speed

This repository host a [micro-frontend][1] boilerplate architecture, forming the
foundational front-end layer, crafted with reusable Vue components, styled with
Tailwind CSS that encompasses a design system using modern development tools.

Adding a REST API would complete the back-end integration, transforming it into
a full web application.

## Features

- Opinionated linting and styling, based on [@antfu/eslint-config](https://github.com/antfu/eslint-config).
- Precommit hook to lint staged files using [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks).
- Auto load modules using [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import).
- Auto load Vue components using [unplugin-vue-component](https://github.com/unplugin/unplugin-vue-components).
- Preinstalled with [@vueuse/core](https://vueuse.org/functions.html).
- Leverage [reka-ui][2] headless component library.
- Uses [Tailwindcss v4][4].
- Uses [Storybook.js](https://storybook.js.org) to document and test UI components.

## Requirements

- [Bun v1.2.8](https://bun.sh)

## Usage

1. Copy the repository,

```bash
bunx tiged acfatah/reka-dashboard newproject
```

2. Include the `.vscode` directory in your repository to ensure consistent settings between developers. Use git add -f `.vscode` to force add it, bypassing any ignore rules.

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

[1]: https://micro-frontends.org
[2]: https://reka-ui.com
[3]: https://shadcn-vue.com
[4]: https://tailwindcss.com
