import React from 'react';
import type { EarnWidgetProps } from '../../types';
import { WidgetRoot } from './widget-root';
import { WidgetContent } from './widget-content';

/**
 * EarnWidget - Core widget component
 * 
 * This is the main widget component that consumers should use.
 * It requires the consumer to provide:
 * - QueryClient provider (for data fetching)
 * - Wallet adapters (for blockchain interactions)
 * 
 * @example
 * ```tsx
 * import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
 * import { EarnWidget } from '@turtledev/earn-widget';
 * 
 * const queryClient = new QueryClient();
 * 
 * function App() {
 *   return (
 *     <QueryClientProvider client={queryClient}>
 *         <EarnWidget
 *           user={address}
 *           network={chainId}
 *           config={widgetConfig}
 *           openConnectionModal={openConnectModal}
 *           signMessage={signMessage}
 *           sendTransaction={sendTransaction}
 *           changeNetwork={switchChain}
 *         />
 *     </QueryClientProvider>
 *   );
 * }
 * ```
 */
export function EarnWidget<TNetwork extends number = number>(
  props: EarnWidgetProps<TNetwork>
): React.ReactElement {
  return (
    <WidgetRoot config={props.config}>
      <WidgetContent {...props} />
    </WidgetRoot>
  );
}