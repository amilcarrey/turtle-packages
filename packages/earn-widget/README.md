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