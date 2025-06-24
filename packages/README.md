# Packages

This folder contains the shared packages of the Turtle ecosystem.

## Current packages

### @turtledev/api ✅
The official TypeScript SDK for interacting with the Turtle API.
- **Status**: Migrated
- **Version**: 1.4.2
- **Features**: Request signing, TypeScript support, Zod validation

### @turtledev/hooks ✅
React hooks and utilities for the Turtle ecosystem.
- **Status**: Migrated
- **Version**: 1.4.4
- **Features**: React Query hooks, chain utilities, number formatting

## Expected structure

```
packages/
├── api/          # API client ✅ (migrated)
├── hooks/        # React hooks ✅ (migrated)
├── ui/           # Base UI components
└── utils/        # Shared utilities
```

## Conventions

- Each package must have its own `package.json`
- Package names follow the format `@turtledev/[name]`
- All packages must be TypeScript compatible
- Exports should be in `src/index.ts` 