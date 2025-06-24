# @turtledev/ui

A modern, accessible UI component library built with React, Radix UI primitives, and TailwindCSS. This package provides a comprehensive set of reusable components following the shadcn/ui design system.

## Features

- 🎨 **Modern Design System**: Built with TailwindCSS and CSS variables for easy theming
- ♿ **Accessibility First**: All components built on top of Radix UI primitives
- 🔧 **Developer Experience**: Full TypeScript support with proper type inference
- 🎯 **Tree Shakable**: Import only what you need
- 🔄 **Composable**: Flexible components that work well together

## Installation

```bash
bun add @turtledev/ui
```

## Setup

### 1. Import the CSS

Import the styles in your app's root file:

```tsx
import "@turtledev/ui/styles"
```

### 2. Configure TailwindCSS

Add the package to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ... your existing content
    "./node_modules/@turtledev/ui/**/*.{js,ts,jsx,tsx}",
  ],
  // ... rest of your config
}
```

## Usage

```tsx
import { Button, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@turtledev/ui"

function MyForm() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>
      
      <div>
        <Label htmlFor="role">Role</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button type="submit">Submit</Button>
    </div>
  )
}
```

## Components

- **Button**: Flexible button component with multiple variants
- **Input**: Form input with proper styling and accessibility
- **Label**: Accessible label component
- **Select**: Dropdown select with search and multi-select support
- **Switch**: Toggle switch component
- **Separator**: Visual divider component
- **ScrollArea**: Custom scrollable area
- **ToggleGroup**: Group of toggle buttons

## Utilities

- **cn()**: Utility function for merging TailwindCSS classes safely

## Development

```bash
# Build the package
bun run build

# Type check
bun run type-check
```

## License

MIT 