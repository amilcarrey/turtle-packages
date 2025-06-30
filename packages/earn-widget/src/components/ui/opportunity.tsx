import type { JSX } from "react";
import { useSetAtom } from "jotai";
import type { DealFormatted } from "../../types/deals";
import { formatNumber } from "../../lib/format";
import { dealSelectedAtom, showPanelAtom } from "../../store/atoms";
import { AssetIcon } from "./asset-icon";
import { WidgetContainer } from "./widget-container";

interface OpportunityProps extends DealFormatted {
  showPanelOnClick?: boolean;
  onAnimatedClose?: () => void;
  className?: string;
}

export function Opportunity({ 
  tokenName, 
  tvl, 
  iconToken, 
  yieldPercentage, 
  iconDeal, 
  id, 
  tokenAddress, 
  showPanelOnClick = false, 
  onAnimatedClose,
  className 
}: OpportunityProps): JSX.Element {
  const setShowPanel = useSetAtom(showPanelAtom);
  const setDealSelected = useSetAtom(dealSelectedAtom);

  const handleClick = (): void => {
    setDealSelected({ 
      tokenName, 
      tvl, 
      iconToken, 
      yieldPercentage, 
      iconDeal, 
      id, 
      tokenAddress 
    });

    if (showPanelOnClick) {
      setShowPanel(true);
    }
    else if (onAnimatedClose) {
      onAnimatedClose();
    }
    else {
      setShowPanel(false);
    }
  };

  return (
    <WidgetContainer 
      onClick={handleClick} 
      variant="card" 
      shadow="large" 
      hover="card"
      className={className}
      width="full"
    >
      <div className="flex justify-between items-center p-1">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center justify-start">
            <AssetIcon url={iconToken} alt={tokenName} />
            <span className="text-lg font-medium text-turtle-text">
              {tokenName}
            </span>
          </div>
          <span className="text-xs text-turtle-text/70">
            Boosted TVL ${formatNumber(tvl, 2, true, true)}
          </span>
        </div>
        <div className="text-turtle-text">
          <span className="text-3xl font-bold text-turtle-primary">
            {yieldPercentage > 0 ? formatNumber(yieldPercentage, 2, false, true) : 0}%
          </span>
        </div>
      </div>
    </WidgetContainer>
  );
}