import type { JSX } from "react";
import { InteractiveIconOverlay } from "../ui/interactive-icon-overlay";

interface AccountDetailsProps {
  userAddress?: string;
}

function shortenAddress(address?: string): string {
  if (!address) return "Connect Wallet";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function AccountDetails({ userAddress }: AccountDetailsProps): JSX.Element {
  const walletIcon = (
    <div className="w-10 h-10 rounded-full bg-turtle-accent/10 flex items-center justify-center">
      <div className="w-6 h-6 rounded-full bg-turtle-accent flex items-center justify-center">
        <span className="text-xs font-bold text-white">W</span>
      </div>
    </div>
  );

  return (
    <InteractiveIconOverlay
      icon={walletIcon}
      ringClass="ring-green-400/60"
    >
      <span className="text-turtle-text font-medium text-sm">
        {shortenAddress(userAddress)}
      </span>
    </InteractiveIconOverlay>
  );
}

export default AccountDetails;