import type { JSX } from "react";
import type { EarnWidgetProps } from "../../types";
import { Deposit } from "./deposit";
import { Earn } from "./earn";
import { ConfirmButton } from "./confirm-button";

interface SwapProps {
  userAddress?: string;
  openConnectionModal: EarnWidgetProps['openConnectionModal'];
  sendTransaction: EarnWidgetProps['sendTransaction'];
  signMessage: EarnWidgetProps['signMessage'];
  changeNetwork: EarnWidgetProps['changeNetwork'];
  onError?: EarnWidgetProps['onError'];
  onSuccess?: EarnWidgetProps['onSuccess'];
}

export function Swap({
  userAddress,
  openConnectionModal,
  sendTransaction,
  signMessage,
  changeNetwork,
  onError,
  onSuccess,
}: SwapProps): JSX.Element {
  return (
    <div className="flex flex-col gap-4 flex-1 min-h-0 h-full">
      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4">
          <Deposit userAddress={userAddress} />
          <Earn />
        </div>
      </div>
      
      {/* Fixed confirm button at bottom */}
      <div className="mt-auto">
        <ConfirmButton
          userAddress={userAddress}
          openConnectionModal={openConnectionModal}
          sendTransaction={sendTransaction}
          signMessage={signMessage}
          changeNetwork={changeNetwork}
          onError={onError}
          onSuccess={onSuccess}
          className="w-full"
        />
      </div>
    </div>
  );
}