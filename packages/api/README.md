# @turtledev/api

The official TypeScript SDK for interacting with the Turtle API.

## Installation

```bash
npm install @turtledev/api
# or
yarn add @turtledev/api
# or
bun add @turtledev/api
```

## Usage

```typescript
import { config, endpoints } from "@turtledev/api";

// Configure the API
config.set({
  apiKey: "your-api-key",
  baseUrl: "https://api.turtle.club"
});

// Use endpoints
const result = await endpoints.organization.get({ id: "org-id" });
```

## Features

- 🔐 **Secure** - Built-in request signing
- 📝 **TypeScript** - Full type safety
- 🚀 **Modern** - Uses ES modules
- ✅ **Validated** - Schema validation with Zod

## Development

```bash
# Install dependencies
bun install

# Development mode
bun dev

# Build the package
bun build

# Run type checking
bun type-check
``` 