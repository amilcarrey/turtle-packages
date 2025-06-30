import { useQuery } from '@tanstack/react-query';

export interface WalletBalance {
  token: {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logos?: string[];
    price?: number;
  };
  amount: string; // Wei amount as string
}

export interface EarnWalletBalancesResponse {
  balances: WalletBalance[];
}

interface UseEarnWalletBalancesOptions {
  chain: number;
  user: string;
}

// Mock data para desarrollo
const mockWalletBalances: EarnWalletBalancesResponse = {
  balances: [
    {
      token: {
        address: "0xA0b86a33E6417C1e1Db5d8d1a3F8E3E3c7c5C4C3",
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        logos: ["https://cryptologos.cc/logos/usd-coin-usdc-logo.png"],
        price: 1.00,
      },
      amount: "1000000000", // 1000 USDC in wei (6 decimals)
    },
    {
      token: {
        address: "0x0000000000000000000000000000000000000000",
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
        logos: ["https://cryptologos.cc/logos/ethereum-eth-logo.png"],
        price: 2400.00,
      },
      amount: "2500000000000000000", // 2.5 ETH in wei
    },
    {
      token: {
        address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        name: "Polygon",
        symbol: "MATIC", 
        decimals: 18,
        logos: ["https://cryptologos.cc/logos/polygon-matic-logo.png"],
        price: 0.85,
      },
      amount: "5000000000000000000000", // 5000 MATIC in wei
    },
  ],
};

export function useEarnWalletBalances(options?: UseEarnWalletBalancesOptions) {
  return useQuery<EarnWalletBalancesResponse>({
    queryKey: ['earn-wallet-balances', options?.chain, options?.user],
    queryFn: async () => {
      // Simular API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (!options?.user) {
        return { balances: [] };
      }
      
      return mockWalletBalances;
    },
    enabled: !!options?.user,
    staleTime: 30 * 1000, // 30 seconds
  });
}