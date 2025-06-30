import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useMemo } from "react";
import { dealSelectedAtom } from "../store/atoms";
import { useEarnDeals } from "./useEarnDeals";
import type { DealFormatted } from "../types/deals";

export function useAutoSelectDeal() {
  const setDealSelected = useSetAtom(dealSelectedAtom);
  const dealSelected = useAtomValue(dealSelectedAtom);

  const { data: dealsResponse, isLoading, error } = useEarnDeals();
  
  const dealsFormatted = useMemo<DealFormatted[]>(() => {
    if (!dealsResponse?.deals) {
      return [];
    }
    return dealsResponse.deals;
  }, [dealsResponse]);

  // Auto-select the first deal when deals are loaded
  useEffect(() => {
    if (dealsFormatted.length > 0 && !dealSelected) {
      setDealSelected(dealsFormatted[0]);
    }
  }, [dealsFormatted, dealSelected, setDealSelected]);

  return { 
    dealsFormatted, 
    isLoading, 
    error,
    selectedDeal: dealSelected 
  };
}