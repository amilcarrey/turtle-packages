import {
  arbitrum,
  avalanche,
  base,
  blast,
  boba,
  bsc,
  celo,
  fantom,
  fraxtal,
  gnosis,
  immutableZkEvm,
  linea,
  mainnet,
  metis,
  optimism,
  polygon,
  scroll,
  sepolia,
  zkSync,
} from "viem/chains";

// Supported chains list - centralized here
export const supportedChains = [
  arbitrum,
  avalanche,
  base,
  blast,
  boba,
  bsc,
  celo,
  fantom,
  fraxtal,
  gnosis,
  immutableZkEvm,
  linea,
  mainnet,
  metis,
  optimism,
  polygon,
  scroll,
  sepolia,
  zkSync,
] as const;

// Type derived from supported chains
export type SupportedChain = (typeof supportedChains)[number];
export type SupportedChainId = SupportedChain["id"];

// Helper to get chain by ID with type safety
export function getSupportedChainById(chainId: SupportedChainId): SupportedChain | undefined {
  return supportedChains.find((chain) => chain.id === chainId);
}

// Helper to verify if a chainId is supported
export function isSupportedChain(chainId: number): chainId is SupportedChainId {
  return supportedChains.some((chain) => chain.id === chainId);
}

// Chain ID to chain mapping for easy access
export const supportedChainsMap = Object.fromEntries(
  supportedChains.map((chain) => [chain.id, chain])
) as Record<SupportedChainId, SupportedChain>;

// Export IDs as constants for easy reference
export const SUPPORTED_CHAIN_IDS = supportedChains.map(
  (chain) => chain.id
) as readonly SupportedChainId[];
