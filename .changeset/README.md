# Changesets

This directory contains changeset files that track version bumps and changelogs for packages in the monorepo.

## Workflow

### 1. Create a changeset
When you make changes to a package, create a changeset:

```bash
bun changeset
```

This will:
- Ask which packages were changed
- Ask what type of change (major, minor, patch)
- Ask for a description of the change
- Create a `.md` file in this directory

### 2. Version packages
When ready to release:

```bash
bun changeset:version
```

This will:
- Update package versions based on changesets
- Update CHANGELOG.md files
- Remove consumed changeset files

### 3. Publish packages
```bash
bun changeset:publish
```

This will:
- Build all packages
- Publish changed packages to npm

### Or use the combined release command:
```bash
bun release
```

## Configuration

The changeset configuration is in `config.json`:
- `access: "public"` - Packages will be published as public
- `baseBranch: "main"` - Base branch for changesets
- `updateInternalDependencies: "patch"` - How to update internal deps

## Examples

Example changeset file:
```md
---
"@turtledev/api": patch
---

Fix API configuration bug
``` 