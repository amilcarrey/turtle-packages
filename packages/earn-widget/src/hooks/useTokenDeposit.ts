import { useAtomValue } from "jotai";
import { useEffect, useMemo } from "react";
import { parseUnits } from "viem/utils";
import type { EarnRouteOptions, EarnRouteResponse } from "../types/earn-route";
import { dealSelectedAtom, depositDetailsAtom, distributorIdAtom } from "../store/atoms";
import { useEarnRoute } from "./useEarnRoute";

interface UseTokenDepositResult {
  fetchedRoute: EarnRouteResponse | null;
  routeError: Error | null;
  isLoadingRoute: boolean;
  routeParams: EarnRouteOptions | undefined;
}

export function useTokenDeposit(userAddress?: string): UseTokenDepositResult {
  const dealSelected = useAtomValue(dealSelectedAtom);
  const depositDetails = useAtomValue(depositDetailsAtom);
  const distributorId = useAtomValue(distributorIdAtom);

  const routeParams = useMemo(() => {
    if (!userAddress || !dealSelected || !depositDetails.amount || !depositDetails.tokenAddress) {
      return undefined;
    }

    try {
      // Validar que el amount sea un número válido
      const amountFloat = parseFloat(depositDetails.amount);
      if (amountFloat <= 0) {
        return undefined;
      }

      // Convertir amount a unidades de token
      const amount = parseUnits(depositDetails.amount, depositDetails.tokenDecimals || 18);

      const params: EarnRouteOptions = {
        chain: parseInt(depositDetails.chain) || 1,
        user: userAddress,
        tokenIn: depositDetails.tokenAddress,
        tokenOut: dealSelected.tokenAddress,
        amount: amount.toString(),
        slippage: 0.02, // 2% slippage
        referral: distributorId,
        id: dealSelected.id,
      };

      return params;
    } catch (error) {
      console.error('Error creating route params:', error);
      return undefined;
    }
  }, [
    userAddress,
    dealSelected,
    depositDetails,
    distributorId,
  ]);

  const { 
    data: fetchedRoute, 
    error: routeError, 
    isLoading: isLoadingRoute 
  } = useEarnRoute(routeParams);

  // Debug logging
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('TokenDeposit - routeParams:', routeParams);
    }
  }, [routeParams]);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('TokenDeposit - fetchedRoute:', fetchedRoute);
    }
  }, [fetchedRoute]);

  return { 
    fetchedRoute: fetchedRoute ?? null, 
    routeError: routeError as Error | null,
    isLoadingRoute,
    routeParams
  };
}