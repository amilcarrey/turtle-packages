# @turtledev/wagmi-config

Reusable Wagmi configuration for all Turtle Platform projects.

## 🚀 Installation

```bash
bun add @turtledev/wagmi-config
```

## 📖 Basic Usage

### Default Configuration

```typescript
import { defaultWagmiConfig } from "@turtledev/wagmi-config";

// Use the default configuration directly
export const config = defaultWagmiConfig;
```

### Custom Configuration

```typescript
import { createTurtleWagmiConfig } from "@turtledev/wagmi-config";

export const config = createTurtleWagmiConfig({
  appName: "My Turtle App",
  projectId: "your-wallet-connect-project-id",
  appUrl: "https://my-app.com"
});
```

## 🔗 Supported Chains

The package includes all chains supported by Turtle Platform:

- **Mainnet**: Ethereum
- **L2s**: Arbitrum, Optimism, Base, Polygon, zkSync, Scroll, Linea, Blast
- **Other EVMs**: BSC, Avalanche, Fantom, Gnosis, Celo, Boba, Metis, Fraxtal, Immutable zkEVM
- **Testnets**: Sepolia

## 🔧 Complete Project Setup

```typescript
// config/wagmi.ts
import { createTurtleWagmiConfig } from "@turtledev/wagmi-config";

export const config = createTurtleWagmiConfig({
  appName: "My DApp",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
```

## 📦 Included Features

- **✅ Wallets**: MetaMask, WalletConnect, Rainbow, Coinbase, Binance, etc.
- **✅ Chains**: All chains supported by Turtle
- **✅ RPC**: Optimized public endpoints
- **✅ Type Safety**: Fully typed TypeScript
- **✅ Configurability**: Customizable per project