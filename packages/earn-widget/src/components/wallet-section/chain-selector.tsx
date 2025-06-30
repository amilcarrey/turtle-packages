import type { JSX } from "react";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@turtledev/ui";

interface ChainOption {
  value: string;
  symbol: string;
  name: string;
  icon: string;
  chainId: number;
}

const CHAINS: ChainOption[] = [
  {
    value: "ethereum",
    symbol: "ETH",
    name: "Ethereum",
    icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1746019748",
    chainId: 1,
  },
  {
    value: "bitcoin",
    symbol: "BTC", 
    name: "Bitcoin",
    icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1747033579",
    chainId: 0, // Bitcoin doesn't have a traditional chainId
  },
  {
    value: "solana",
    symbol: "SOL",
    name: "Solana", 
    icon: "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
    chainId: 0, // Solana doesn't use EVM chainIds
  },
  {
    value: "polygon",
    symbol: "MATIC",
    name: "Polygon",
    icon: "https://assets.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
    chainId: 137,
  },
  {
    value: "arbitrum",
    symbol: "ARB",
    name: "Arbitrum",
    icon: "https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg?1680097313",
    chainId: 42161,
  },
];

interface ChainSelectorProps {
  selectedChainId?: number;
  onChainChange?: (chainId: number) => void;
}

export function ChainSelector({ selectedChainId = 1, onChainChange }: ChainSelectorProps): JSX.Element {
  const [selectedChain, setSelectedChain] = useState<string>(
    CHAINS.find(chain => chain.chainId === selectedChainId)?.value || CHAINS[0].value
  );
  const currentChain = CHAINS.find(chain => chain.value === selectedChain) || CHAINS[0];

  const handleChainChange = (value: string) => {
    setSelectedChain(value);
    const chain = CHAINS.find(c => c.value === value);
    if (chain) {
      onChainChange?.(chain.chainId);
    }
  };

  return (
    <div className="relative flex items-center h-10">
      {/* Overlapped Chain Icon */}
      <span className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center h-11 w-11 rounded-full ring-1 ring-blue-400/60 bg-[var(--color-surface-primary)]">
        <img
          src={currentChain.icon}
          alt={currentChain.name}
          className="w-8 h-8 rounded-full"
        />
      </span>

      {/* Select Component */}
      <Select value={selectedChain} onValueChange={handleChainChange}>
        <SelectTrigger className="flex items-center justify-between rounded-full bg-[var(--color-surface-secondary)] pl-14 pr-3 gap-3 border border-[var(--color-text-primary)]/10 w-auto h-10 cursor-pointer transition-colors hover:border-[var(--color-text-accent)] focus:border-[var(--color-text-accent)] focus:ring-0">
          <div className="flex items-center justify-end gap-2">
            <span className="text-[var(--color-text-primary)] font-medium text-sm">
              {currentChain.symbol}
            </span>
          </div>
        </SelectTrigger>

        <SelectContent className="bg-[#1a1a1a] border-[var(--color-text-primary)]/20 rounded-lg w-[82%]">
          {CHAINS.map(chain => (
            <SelectItem
              key={chain.value}
              value={chain.value}
              className="flex items-center gap-2 cursor-pointer hover:bg-[var(--color-surface-secondary)] rounded-md transition-colors data-[state=checked]:bg-[var(--color-surface-secondary)] data-[state=checked]:text-[var(--color-text-accent)]"
            >
              <div className="flex items-center gap-2 w-full">
                <img
                  src={chain.icon}
                  alt={chain.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="dark:text-white font-medium text-sm">
                    {chain.symbol}
                  </span>
                  <span className="dark:text-white/60 text-xs">
                    {chain.name}
                  </span>
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}