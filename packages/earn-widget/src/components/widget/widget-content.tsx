import React from "react";
import type { EarnWidgetProps } from "../../types";
import { useAtomValue } from "jotai";
import { showPanelAtom } from "../../store/atoms";
import { WalletSection } from "../wallet-section";
import { useAutoSelectDeal } from "../../hooks/useAutoSelectDeal";
import { Deals } from "../deals";
import { Swap } from "../swap/swap";
import { Opportunity, Button, WidgetContainer } from "../ui";

export function WidgetContent<TNetwork extends number = number>(
  props: EarnWidgetProps<TNetwork>
): React.ReactElement {
  const {
    user,
    network,
    openConnectionModal,
    sendTransaction,
    signMessage,
    changeNetwork,
    onError,
    onSuccess,
  } = props;
  const showPanel = useAtomValue(showPanelAtom);
  const { dealsFormatted, selectedDeal, isLoading } = useAutoSelectDeal();

  // Debug: log state
  console.log("showPanel:", showPanel);
  console.log("dealsFormatted:", dealsFormatted);
  console.log("selectedDeal:", selectedDeal);
  console.log("isLoading:", isLoading);

  // Show deals panel
  if (showPanel) {
    return <Deals />;
  }

  return (
    <div className="w-full space-y-4">
      {/* Wallet Section */}
      <WidgetContainer variant="card" padding="default">
        <WalletSection
          userAddress={user}
          selectedChainId={network as number}
          onChainChange={(chainId) => changeNetwork?.(chainId as TNetwork)}
        />
      </WidgetContainer>

      {/* Swap Section */}
      {!user && (
        <WidgetContainer variant="card" padding="default">
          <Swap
            userAddress={user}
            openConnectionModal={openConnectionModal}
            sendTransaction={sendTransaction as any}
            signMessage={signMessage}
            changeNetwork={changeNetwork as any}
            onError={onError}
            onSuccess={onSuccess}
          />
        </WidgetContainer>
      )}

      {/* Connect Wallet Message */}
      {user && (
        <WidgetContainer variant="card" padding="default" className="text-center">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-turtle-text">
              Connect Wallet to Start Earning
            </h3>
            <p className="text-turtle-text/70">
              Connect your wallet to access yield opportunities and start earning on your crypto
              assets.
            </p>
            <Button onClick={openConnectionModal} size="lg" className="w-full">
              Connect Wallet
            </Button>
          </div>
        </WidgetContainer>
      )}

      {/* Selected Deal Preview */}
      {selectedDeal && user && (
        <div>
          <h3 className="text-sm font-medium text-turtle-text mb-2 px-1">Featured Opportunity</h3>
          <Opportunity {...selectedDeal} showPanelOnClick={true} />
        </div>
      )}

      {/* All Deals Preview */}
      {dealsFormatted.length > 1 && user && (
        <WidgetContainer variant="card" padding="small">
          <div className="text-center">
            <p className="text-sm text-turtle-text/70 mb-2">
              {dealsFormatted.length} opportunities available
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                /* TODO: Show all deals */
              }}
              disabled={isLoading}
            >
              View All Deals
            </Button>
          </div>
        </WidgetContainer>
      )}

      {/* Loading State */}
      {isLoading && (
        <WidgetContainer variant="card" padding="default" className="text-center">
          <p className="text-turtle-text/70">Loading opportunities...</p>
        </WidgetContainer>
      )}
    </div>
  );
}
