import { 
  useChainId, 
  useConfig, 
  useSignMessage, 
  useSwitchChain,
  useSendTransaction,
} from 'wagmi';
import { waitForTransactionReceipt } from 'wagmi/actions';
import type { Adapter } from '../types';

/**
 * Wagmi adapter for wallet interactions
 * 
 * This adapter integrates with wagmi hooks to provide wallet functionality
 * for the earn widget. It handles transactions, message signing, and network switching.
 * 
 * @example
 * ```tsx
 * import { useWagmiAdapter } from '@turtledev/wallet-adapters/wagmi';
 * import { useConnectModal } from '@rainbow-me/rainbowkit';
 * import { EarnWidget } from '@turtledev/earn-widget';
 * 
 * function App() {
 *   const { openConnectModal } = useConnectModal();
 *   const walletAdapter = useWagmiAdapter();
 *   
 *   return (
 *     <EarnWidget
 *       user={address}
 *       network={chainId}
 *       config={widgetConfig}
 *       openConnectionModal={openConnectModal}
 *       {...walletAdapter}
 *     />
 *   );
 * }
 * ```
 */
export function useWagmiAdapter(): Pick<Adapter, 'sendTransaction' | 'signMessage' | 'changeNetwork'> {
  const chainId = useChainId();
  const config = useConfig();
  const { signMessageAsync } = useSignMessage();
  const { switchChainAsync } = useSwitchChain();
  const { sendTransactionAsync } = useSendTransaction();

  return {
    sendTransaction: async (transaction) => {
      // Send the transaction
      const txHash = await sendTransactionAsync({
        to: transaction.to,
        data: transaction.data,
        value: transaction.value,
        chainId: transaction.chainId,
      });

      // Wait for confirmation
      const receipt = await waitForTransactionReceipt(config, {
        hash: txHash,
        confirmations: 1,
        pollingInterval: 1000,
      });

      return receipt.transactionHash;
    },
    
    signMessage: (message: string) => signMessageAsync({ message }),
    
    changeNetwork: async (networkId: number) => {
      await switchChainAsync({ chainId: networkId });
    },
  };
}