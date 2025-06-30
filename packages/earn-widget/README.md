# @turtledev/earn-widget

Configurable and self-contained Turtle Earn widget for third-party React applications.

## Installation

```bash
npm install @turtledev/earn-widget
# or
bun add @turtledev/earn-widget
```

## Basic Usage

```tsx
import { EarnWidget, defaultWidgetStyleConfig } from '@turtledev/earn-widget';
import '@turtledev/earn-widget/styles.css';

function App() {
  const [user, setUser] = useState<string | undefined>();
  
  const openConnectionModal = () => {
    // Your wallet connection logic
    console.log('Opening wallet connection modal...');
  };
  
  const signMessage = async (message: string): Promise<string> => {
    // Your message signing logic
    return "0x...signature";
  };
  
  const sendTransaction = async (transaction) => {
    // Your transaction sending logic
    return "0x...txHash";
  };
  
  const changeNetwork = async (networkId: number) => {
    // Your network switching logic
    console.log(`Switching to network ${networkId}`);
  };

  return (
    <div style={{ width: '450px', height: '600px' }}>
      <EarnWidget
        user={user}
        network={1} // Ethereum mainnet
        config={defaultWidgetStyleConfig}
        openConnectionModal={openConnectionModal}
        signMessage={signMessage}
        sendTransaction={sendTransaction}
        changeNetwork={changeNetwork}
      />
    </div>
  );
}
```

## Configuration

### Widget Style Config

```tsx
import type { WidgetStyleConfig } from '@turtledev/earn-widget';

const customConfig: WidgetStyleConfig = {
  theme: "dark",
  widgetWidth: "auto",
  fontFamily: "Inter",
  styles: {
    primaryColor: "#73f36c",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    borderColor: "#e5e5e5",
  }
};

<EarnWidget config={customConfig} {...otherProps} />
```

### Adapter Interface

The widget requires these methods to interact with wallets:

```tsx
interface EarnWidgetProps {
  user: string | undefined;           // Connected wallet address
  network: number;                    // Current network ID
  config: WidgetStyleConfig;          // Widget styling
  
  // Required adapter methods
  openConnectionModal: () => void;
  signMessage: (message: string) => Promise<string>;
  sendTransaction: (transaction: Transaction) => Promise<string>;
  changeNetwork: (network: number) => Promise<void>;
  
  // Optional callbacks
  onError?: (error: Error) => void;
  onSuccess?: () => void;
}
```

## Integration Examples

### With RainbowKit + Wagmi

```tsx
import { useAccount, useSignMessage, useSendTransaction, useSwitchChain } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';

function MyApp() {
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

### With Custom Wallet

```tsx
function MyApp() {
  const [wallet, setWallet] = useState(null);

  return (
    <EarnWidget
      user={wallet?.address}
      network={wallet?.chainId || 1}
      config={customConfig}
      openConnectionModal={() => {
        // Your custom wallet connection
        connectWallet().then(setWallet);
      }}
      signMessage={(message) => wallet.signMessage(message)}
      sendTransaction={(tx) => wallet.sendTransaction(tx)}
      changeNetwork={(chainId) => wallet.switchNetwork(chainId)}
    />
  );
}
```

## Styling

The widget uses CSS variables for theming. You can override them globally:

```css
:root {
  --turtle-primary-color: #your-color;
  --turtle-background-color: #your-bg;
  --turtle-text-color: #your-text;
}
```

## Current Features

✅ **Deal Management**: Browse and select investment opportunities  
✅ **Interactive UI**: Click deals to view details, navigate between views  
✅ **Mock Data**: Displays sample deals (USDC 12.5%, ETH 8.2%, MATIC 15.8%)  
✅ **Auto-selection**: Automatically selects the first available deal  
✅ **Loading States**: Proper loading and error handling  

🚧 **Coming Soon**:
- Token swapping functionality  
- Real API integration
- Portfolio view
- Advanced filtering

## Storybook

Interactive examples available in Storybook:

```bash
# From turtle-packages root
bun run storybook
```

Available stories:
- **Default**: Disconnected state with connect button
- **Connected**: Connected wallet state with featured deal
- **WithDeals**: Dark theme with multiple investment opportunities  
- **Light Theme**: Light theme configuration
- **Custom Colors**: Custom color palette example
- **Full Width**: Full width widget configuration

## Development

```bash
# Build the package
bun run build

# Type checking
bun run type-check

# Watch mode development
bun run dev
```

## Package Structure

```
@turtledev/earn-widget/
├── dist/
│   ├── index.js         # ES Module build
│   ├── index.cjs        # CommonJS build
│   └── styles.css       # Widget styles
├── types/               # TypeScript declarations
└── src/                 # Source code
```

## TypeScript Support

Full TypeScript support included with proper type definitions for all interfaces.