import type { JSX } from "react";
import { AccountDetails } from "./account-details";
import { ChainSelector } from "./chain-selector";

interface WalletSectionProps {
  userAddress?: string;
  selectedChainId?: number;
  onChainChange?: (chainId: number) => void;
}

export function WalletSection({ 
  userAddress, 
  selectedChainId = 1, 
  onChainChange 
}: WalletSectionProps): JSX.Element {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      {/* Wallet Address Display */}
      <AccountDetails userAddress={userAddress} />

      {/* Chain Selector */}
      <ChainSelector 
        selectedChainId={selectedChainId} 
        onChainChange={onChainChange} 
      />
    </div>
  );
}