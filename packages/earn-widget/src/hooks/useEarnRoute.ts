import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { EarnRouteOptions, EarnRouteResponse } from '../types/earn-route';

// Mock data para desarrollo - reemplazar con @turtledev/api cuando las importaciones estén arregladas
const mockEarnRoute = async (options: EarnRouteOptions): Promise<EarnRouteResponse> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    success: true,
    steps: [
      {
        id: 'approval',
        type: 'approval',
        title: 'Approve Token',
        description: `Approve ${options.amount} tokens for spending`,
        to: options.tokenIn,
        data: '0x095ea7b3000000000000000000000000...',
        gasLimit: '50000',
      },
      {
        id: 'deposit', 
        type: 'deposit',
        title: 'Deposit',
        description: 'Deposit tokens into the vault',
        to: '0x1234567890123456789012345678901234567890',
        data: '0xa9059cbb000000000000000000000000...',
        value: options.amount,
        gasLimit: '150000',
      },
    ],
    estimatedGas: '200000',
    estimatedTime: 30,
    outputAmount: (BigInt(options.amount) * BigInt(98) / BigInt(100)).toString(),
    metadata: {
      tokenIn: {
        address: options.tokenIn,
        symbol: 'USDC',
        decimals: 6,
      },
      tokenOut: {
        address: options.tokenOut,
        symbol: 'stUSDC',
        decimals: 18,
      },
    },
  };
};

export function useEarnRoute(
  options?: EarnRouteOptions
): UseQueryResult<EarnRouteResponse | null> {
  const enabled = options !== undefined && 
                  !!options.user && 
                  !!options.amount && 
                  parseFloat(options.amount) > 0;

  return useQuery<EarnRouteResponse | null>({
    queryKey: [
      "earnRoute",
      options?.user,
      options?.chain,
      options?.slippage,
      options?.tokenIn,
      options?.tokenOut,
      options?.amount,
    ],
    queryFn: async () => {
      if (!enabled || !options) {
        return null;
      }

      return await mockEarnRoute(options);
    },
    enabled,
    staleTime: 30 * 1000,
    refetchInterval: 15 * 1000,
    refetchOnWindowFocus: true,
  });
}