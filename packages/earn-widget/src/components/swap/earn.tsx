import type { JSX } from "react";
import { useAtomValue } from "jotai";
import { ExternalLink } from "lucide-react";
import { dealSelectedAtom } from "../../store/atoms";
import { Opportunity } from "../ui/opportunity";
import { InfoCard } from "../ui/info-card";
import { WidgetContainer } from "../ui/widget-container";

export function Earn(): JSX.Element {
  const dealSelected = useAtomValue(dealSelectedAtom);

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-turtle-text">Earn</h3>
      
      {dealSelected ? (
        <Opportunity {...dealSelected} />
      ) : (
        <OpportunitySkeleton />
      )}
      
      {dealSelected ? <EarnDetails /> : <EarnDetailsSkeleton />}
    </div>
  );
}

function OpportunitySkeleton(): JSX.Element {
  return (
    <WidgetContainer variant="card" shadow="medium" className="w-full animate-pulse">
      <div className="flex justify-between items-center p-1">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center justify-start">
            <div className="w-7 h-7 bg-turtle-border rounded-full"></div>
            <div className="w-24 h-5 bg-turtle-border rounded"></div>
          </div>
          <div className="w-32 h-4 bg-turtle-border rounded"></div>
        </div>
        <div className="w-16 h-8 bg-turtle-border rounded"></div>
      </div>
    </WidgetContainer>
  );
}

function EarnDetailsSkeleton(): JSX.Element {
  return (
    <WidgetContainer variant="card" shadow="medium" className="animate-pulse">
      <div className="flex justify-between mb-5">
        <div className="flex gap-2 items-center">
          <div className="w-5 h-5 bg-turtle-border rounded-full"></div>
          <div className="w-24 h-6 bg-turtle-border rounded"></div>
        </div>
        <div className="w-8 h-8 bg-turtle-border rounded-full"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="flex-1 h-16 bg-turtle-border rounded"></div>
          <div className="flex-1 h-16 bg-turtle-border rounded"></div>
          <div className="flex-1 h-16 bg-turtle-border rounded"></div>
        </div>
      </div>
    </WidgetContainer>
  );
}

function EarnDetails(): JSX.Element {
  const dealSelected = useAtomValue(dealSelectedAtom);
  
  if (!dealSelected) return <EarnDetailsSkeleton />;

  return (
    <WidgetContainer variant="card" shadow="medium" className="max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-2 items-center">
          <span className="rounded-full bg-turtle-primary/20 border-2 border-turtle-primary p-1 w-5 h-5"></span>
          <span className="text-xl font-semibold text-turtle-text">
            {dealSelected.tokenName} Vault
          </span>
        </div>
        
        {/* Partner link */}
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 rounded-full border border-turtle-border bg-turtle-background hover:bg-turtle-secondary/10 transition-colors"
        >
          <ExternalLink className="w-4 h-4 text-turtle-text" />
        </a>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-2">
          <InfoCard 
            title="Native Yield" 
            value={`${dealSelected.yieldPercentage.toFixed(2)}%`}
            color="primary" 
          />
          <InfoCard 
            title="Total Yield" 
            value={`${(dealSelected.yieldPercentage * 1.2).toFixed(2)}%`}
            color="accent" 
          />
          <InfoCard 
            title="Net Fees" 
            value="0.5%" 
            color="secondary" 
          />
        </div>
        
        <div className="text-sm text-turtle-text/70 space-y-2">
          <p>
            <span className="font-medium">Yield Source:</span> Multi-chain risk-adjusted allocation
          </p>
          <p>
            <span className="font-medium">Additional Rewards:</span> Deposit bonus + Continual rewards
          </p>
        </div>
      </div>
    </WidgetContainer>
  );
}