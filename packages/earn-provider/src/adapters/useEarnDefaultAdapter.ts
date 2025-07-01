import {
  useChainId,
  useConfig,
  useSignMessage,
  useSwitchChain,
  useSendTransaction,
  useAccount,
} from "wagmi";
import { waitForTransactionReceipt } from "wagmi/actions";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import type { Adapter } from "../types";

export function useEarnDefaultAdapter(): Adapter {
  const account = useAccount();
  const chainId = useChainId();
  const config = useConfig();
  const { signMessageAsync } = useSignMessage();
  const { switchChainAsync } = useSwitchChain();
  const { sendTransactionAsync } = useSendTransaction();
  const { openConnectModal } = useConnectModal();

  return {
    user: account.address,
    network: chainId,
    openConnectionModal: () => openConnectModal?.(),
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
