# Turtle Packages Monorepo

This is Turtle's main monorepo using Turborepo.

## Structure

```
turtle-packages/
├── apps/           # Applications (e.g., Storybook, demos)
└── packages/       # Shared packages
```

## Commands

```bash
# Install dependencies
bun install

# Development
bun dev

# Build all packages
bun build

# Linting
bun lint

# Type checking
bun type-check
```

## Release Management

This monorepo uses [Changesets](https://github.com/changesets/changesets) for version management and publishing:

```bash
# Create a changeset when you make changes
bun changeset

# Version packages (updates versions and changelogs)
bun changeset:version

# Publish packages to npm
bun changeset:publish

# Build and publish in one command
bun release
```

## Technologies

- **Turborepo** - Build system for monorepos
- **TypeScript** - Main language
- **Bun** - Package manager and runtime
- **ESLint** - Linter
- **Prettier** - Code formatter
- **Tailwind CSS v4** - CSS framework (configuration in CSS, no config files)
- **Changesets** - Version management and publishing

## Tailwind CSS v4

This project uses Tailwind CSS v4, where configuration is handled directly in CSS files using `@theme`. No `tailwind.config.js` required. 