# Reka Dashboard

Build front-end single page application (SPA) in minutes with `TypeScript`, `Vue` and `Bun`.

<p>
  <a href="https://github.com/acfatah/reka-dashboard/commits/main">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/t/acfatah/reka-dashboard?style=flat-square">
  </a>
  <img alt="GitHub last commit (by committer)" src="https://img.shields.io/github/last-commit/acfatah/reka-dashboard?display_timestamp=committer&style=flat-square">
  <img alt="GitHub forks" src="https://img.shields.io/github/forks/acfatah/reka-dashboard?style=flat">
</p>

> [!IMPORTANT]
> WORK IN PROGRESS

- This repository,
  - is NOT a components library.
  - is NOT a design library.
  - is NOT a front-end framework.
  - does NOT tied to a specific design.
  - does NOT tied to any spedific UX design framework or library.

- But instead,
  - a collection of reusable Vue components, implemented using [shadcn-vue][3].
  - uses [Tailwindcss v4][4].
  - leverage [reka-ui][2] headless components library.
  - uses [shadcn-ui][5] as the base design but can be modified to adapt new design.
  - provides a design system adaptable to any UX design framework.

- It,
  - promotes accessibility and adherence to web standards.
  - focuses on component-driven development for consistency and maintainability.
  - supports rapid prototyping with pre-built, ready-made components.
  - includes extensive documentation, examples and visual testing using [Storybook][6].
  - improve collaboration between design and development teams.
  - leverage latest ~~cutting edge~~ **bleeding edge** technology that improve DX
    and development speed.

This repository hosts a [micro-frontend][1] boilerplate architecture, perfect for
creating high-performing Single Page Applications. It offers a foundational front-end
layer, crafted with reusable Vue components and styled with Tailwind CSS, leveraging
a design system and modern development tools.

Adding a REST API would complete the back-end integration, transforming it into
a full web application.

## Requirements

- [Bun ^v1.2.8](https://bun.sh)

## Features

- Opinionated linting and styling, based on [@antfu/eslint-config](https://github.com/antfu/eslint-config).
- Precommit hook to lint staged files using [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks).
- Auto load modules using [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import).
- Auto load Vue components using [unplugin-vue-component](https://github.com/unplugin/unplugin-vue-components).
- Preinstalled with [@vueuse/core](https://vueuse.org/functions.html).
- Preinstalled with [Pinia][13] store for state management.
- Leverage [reka-ui][2] headless component library.
- Implement reusable Vue components from [shadcn-vue][3].
- Uses [Tailwindcss v4][4].
- Uses [Vee Validate][7] for form handling.
- Uses [Zod][8] for schema validation.
- Uses [TanStack Table][9] for tables & datagrids.
- Uses [Unovis][10] to handle charts, graphs or data visualization.
- Uses [Iconify][11] to manage over 200,000 open source vector icons.
- Uses [@internationalized/date][12] to handle date and time manipulation.
- Uses [Storybook.js][6] to document and visually test UI components.

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

## Recommendation

I suggest forking this repository to create your own version, which you can then
customize according to your requirements.

To use your fork, simply replace the github user with your github username and repository
with the forked repository name, followed by

```bash
bunx tiged your-github-user/reka-dashboard newproject
```

To incorporate the latest fixes or updates, you can easily pull the most recent
changes from the original repository into your fork.

[1]: https://micro-frontends.org
[2]: https://reka-ui.com
[3]: https://shadcn-vue.com
[4]: https://tailwindcss.com
[5]: https://ui.shadcn.com
[6]: https://storybook.js.org
[7]: https://vee-validate.logaretm.com/v4/api/form
[8]: https://zod.dev/?id=introduction
[9]: https://tanstack.com/table/latest
[10]: https://unovis.dev
[11]: https://iconify.design/getting-started
[12]: https://react-spectrum.adobe.com/internationalized/date/index.html
[13]: https://pinia.vuejs.org
