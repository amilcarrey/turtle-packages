# @turtledev/earn-provider

Complete provider setup and wallet adapter for the Turtle Club ecosystem. This package provides a zero-config solution for integrating the earn widget with Web3 functionality.

## Features

- 🎯 **All-in-One**: Single hook provides complete wallet adapter functionality
- 🚀 **Zero Configuration**: Works out of the box with sensible defaults  
- 🔌 **Complete Provider**: Includes Wagmi, RainbowKit, and TanStack Query setup


## Installation

```bash
# Using bun (recommended)
bun add @turtledev/earn-provider

# Using npm/yarn
npm install @turtledev/earn-provider
```

## Quick Start

### Complete Integration (Recommended)

The simplest way to integrate the earn widget:

The `useEarnDefaultAdapter` hook provides everything the widget needs:
- ✅ Network detection (`adapter.network`)
- ✅ Wallet connection (`adapter.openConnectionModal`)
- ✅ Transaction sending (`adapter.sendTransaction`)
- ✅ Message signing (`adapter.signMessage`)
- ✅ Network switching (`adapter.changeNetwork`)

But to use it you need to wrap the widget in a `TurtleDefaultProvider` component.


### TurtleDefaultProvider

**Simple usage:**

```tsx
import { TurtleDefaultProvider } from '@turtledev/earn-provider';

<TurtleDefaultProvider>
  {/* Implement EarnWidget here */}
</TurtleDefaultProvider>
````


**Example with custom configuration:**

```tsx
import { TurtleDefaultProvider } from '@turtledev/earn-provider';
import { useQueryClient } from '@tanstack/react-query';

// Use your own query client or create a new one
const queryClient = useQueryClient();

// Use your own Wagmi options or create a new one
const WAGMI_OPTIONS = {
  appName: "My DeFi App",
  projectId: "your-walletconnect-id",
  appUrl: "https://myapp.com",
}

<TurtleDefaultProvider 
  queryClient={queryClient}
  wagmiOptions={WAGMI_OPTIONS}
>
  {/* Implement EarnWidget here */}
</TurtleDefaultProvider>
```