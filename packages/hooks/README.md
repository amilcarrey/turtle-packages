# @turtledev/hooks

React hooks and utilities for building applications with the Turtle ecosystem.

## Installation

```bash
npm install @turtledev/hooks
# or
yarn add @turtledev/hooks
# or
bun add @turtledev/hooks
```

## Features

- 🎣 **React Query hooks** for API endpoints
- 🔧 **Utility functions** for chains, formatting, and numbers
- 🔄 **Automatic caching** and persistence
- 📝 **TypeScript** support with full type safety

## Usage

### API Hooks

```typescript
import { useOrganizations, useConfig } from "@turtledev/hooks";

function MyComponent() {
  const { data: organizations, isLoading } = useOrganizations();
  
  if (isLoading) return <div>Loading...</div>;
  
  return <div>{organizations?.name}</div>;
}
```

## Available Hooks

### Endpoints
- `useOrganizations()` - Get organization data
- `useOrganizationDeals()` - Get organization deals
- `useOrganizationsDeals()` - Get all organizations deals
- `useProjectTvl()` - Get project TVL data
- `useExists()` - Check if user exists
- `usePrepareSignup()` - Prepare signup process
- `useSignup()` - Complete signup

### Configuration
- `useConfig()` - Get current API configuration
