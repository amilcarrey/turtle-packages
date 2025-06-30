import type { JSX } from "react";
import { useSetAtom } from "jotai";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useAutoSelectDeal } from "../hooks/useAutoSelectDeal";
import { showPanelAtom } from "../store/atoms";
import { Opportunity } from "./ui/opportunity";
import { Button } from "./ui/button";
import { WidgetContainer } from "./ui/widget-container";

export function Deals(): JSX.Element {
  const setShowDeals = useSetAtom(showPanelAtom);
  const { dealsFormatted, isLoading, error } = useAutoSelectDeal();
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = (): void => {
    setIsExiting(true);
    setTimeout(() => {
      setShowDeals(false);
      setIsExiting(false);
    }, 200);
  };

  if (error) {
    return (
      <WidgetContainer variant="card" padding="large" className="text-center">
        <p className="text-turtle-text/70">Error loading deals</p>
        <Button onClick={handleClose} variant="ghost" className="mt-2">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </WidgetContainer>
    );
  }

  if (isLoading) {
    return (
      <WidgetContainer variant="card" padding="large" className="text-center">
        <p className="text-turtle-text/70">Loading deals...</p>
      </WidgetContainer>
    );
  }

  return (
    <div className={`flex flex-col gap-4 flex-1 min-h-0 w-full transition-all duration-200 ${
      isExiting ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}>
      <div className="mb-2">
        <Button
          onClick={handleClose}
          variant="ghost"
          size="icon"
          className="text-turtle-text hover:text-turtle-primary"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-3">
          {dealsFormatted.map(deal => (
            <Opportunity 
              key={deal.id} 
              {...deal} 
              onAnimatedClose={handleClose} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}