import { useQuery } from '@tanstack/react-query';
import type { DealFormatted } from '../types/deals';

// Mock data para desarrollo - reemplazar con @turtledev/hooks cuando esté disponible
const mockDeals: DealFormatted[] = [
  {
    id: "ethereum-usdc-yield",
    tokenAddress: "0xA0b86a33E6417C1e1Db5d8d1a3F8E3E3c7c5C4C3",
    tokenName: "USDC",
    tvl: 2500000,
    iconToken: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    iconDeal: "https://pbs.twimg.com/profile_images/1830925816802451456/OUDzqTkE_400x400.png",
    yieldPercentage: 12.5,
  },
  {
    id: "ethereum-eth-staking",
    tokenAddress: "0x0000000000000000000000000000000000000000",
    tokenName: "ETH",
    tvl: 8750000,
    iconToken: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    iconDeal: "https://pbs.twimg.com/profile_images/1830925816802451456/OUDzqTkE_400x400.png",
    yieldPercentage: 8.2,
  },
  {
    id: "polygon-matic-rewards",
    tokenAddress: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    tokenName: "MATIC",
    tvl: 1250000,
    iconToken: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    iconDeal: "https://pbs.twimg.com/profile_images/1830925816802451456/OUDzqTkE_400x400.png",
    yieldPercentage: 15.8,
  },
];

interface UseEarnDealsResult {
  deals: DealFormatted[];
}

export function useEarnDeals() {
  return useQuery<UseEarnDealsResult>({
    queryKey: ['earn-deals'],
    queryFn: async () => {
      // Simular API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return {
        deals: mockDeals
      };
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}