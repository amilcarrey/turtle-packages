# 🐢 Earn Widget - Example Usage

## Quick Start

### 1. Install the package

```bash
bun add @turtledev/earn-widget
# or
npm install @turtledev/earn-widget
```

### 2. Basic implementation

```tsx
import React, { useState } from 'react';
import { EarnWidget, defaultWidgetStyleConfig } from '@turtledev/earn-widget';
import '@turtledev/earn-widget/styles.css';

function App() {
  const [user, setUser] = useState<string | undefined>();

  return (
    <div style={{ width: '450px', height: '600px', margin: '0 auto' }}>
      <EarnWidget
        user={user}
        network={1}
        config={defaultWidgetStyleConfig}
        openConnectionModal={() => {
          // Simulate wallet connection
          setUser('0x742d35Cc6634C0532925a3b8D430B3747f0C912e');
        }}
        signMessage={async (message) => {
          console.log('Signing:', message);
          return '0x' + 'a'.repeat(128);
        }}
        sendTransaction={async (tx) => {
          console.log('Sending tx:', tx);
          return '0x' + 'b'.repeat(64);
        }}
        changeNetwork={async (networkId) => {
          console.log('Switching to network:', networkId);
        }}
      />
    </div>
  );
}
```

### 3. Custom styling

```tsx
const customConfig = {
  ...defaultWidgetStyleConfig,
  theme: 'light' as const,
  styles: {
    primaryColor: '#ff6b35',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    borderColor: '#e5e5e5',
  }
};

<EarnWidget config={customConfig} {...otherProps} />
```

## Integration with RainbowKit

```tsx
import { useAccount, useSignMessage, useSendTransaction, useSwitchChain } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';

function RainbowKitExample() {
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { signMessageAsync } = useSignMessage();
  const { sendTransactionAsync } = useSendTransaction();
  const { switchChainAsync } = useSwitchChain();

  return (
    <EarnWidget
      user={address}
      network={1}
      config={defaultWidgetStyleConfig}
      openConnectionModal={openConnectModal}
      signMessage={signMessageAsync}
      sendTransaction={sendTransactionAsync}
      changeNetwork={(chainId) => switchChainAsync({ chainId })}
    />
  );
}
```

## Current Features

✅ **Self-contained**: QueryClient and state management included  
✅ **Flexible adapter**: Works with any wallet connection method  
✅ **CSS theming**: Configurable via props and CSS variables  
✅ **TypeScript**: Full type safety  
✅ **Build optimized**: ESM + CommonJS + CSS bundle  

🚧 **Coming Soon**: Deal browsing, token swapping, portfolio view

## Storybook

View interactive examples at: `bun run storybook`

Stories available:
- Default (disconnected state)
- Connected (with mock wallet)
- Light Theme
- Custom Colors
- Full Width