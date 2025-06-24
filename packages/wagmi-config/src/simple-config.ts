import binanceWallet from "@binance/w3w-rainbow-connector-v2";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  frameWallet,
  injectedWallet,
  metaMaskWallet,
  rabbyWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { createConfig, http } from "wagmi";
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

export const projectId = "dcfae733a695b623e67135bca7e13f59";

// Supported chains list
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

// Get the current URL without trailing slash
function getBaseUrl(): string {
  if (typeof window === "undefined") return "";
  const url = window.location.origin;
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

// Wallet configuration
const walletGroups = [
  {
    groupName: "Recommended",
    wallets: [metaMaskWallet, injectedWallet, walletConnectWallet],
  },
  {
    groupName: "More",
    wallets: [rabbyWallet, frameWallet, rainbowWallet, trustWallet, coinbaseWallet, binanceWallet],
  },
];

// Factory to create custom wagmi configuration
export function createTurtleWagmiConfig(
  options: {
    appName?: string;
    projectId?: string;
    appUrl?: string;
  } = {}
) {
  const { appName = "Turtle Platform", projectId: customProjectId = projectId, appUrl } = options;

  const connectors = connectorsForWallets(walletGroups, {
    appName,
    projectId: customProjectId,
    appUrl: appUrl || getBaseUrl(),
  });

  return createConfig({
    connectors,
    chains: supportedChains as any,
    multiInjectedProviderDiscovery: true,
    syncConnectedChain: true,
    batch: { multicall: true },
    transports: {
      [arbitrum.id]: http("https://arbitrum-one-rpc.publicnode.com"),
      [avalanche.id]: http("https://avalanche.public-rpc.com"),
      [base.id]: http("https://base-rpc.publicnode.com"),
      [blast.id]: http("https://blast-rpc.publicnode.com"),
      [boba.id]: http("https://mainnet.boba.network"),
      [bsc.id]: http("https://bsc-dataseed.bnbchain.org"),
      [celo.id]: http("https://forno.celo.org"),
      [fantom.id]: http("https://rpc.ftm.tools"),
      [fraxtal.id]: http("https://rpc.frax.com"),
      [gnosis.id]: http("https://gnosis-rpc.publicnode.com"),
      [immutableZkEvm.id]: http("https://rpc.immutable.com"),
      [linea.id]: http("https://rpc.linea.build"),
      [mainnet.id]: http("https://ethereum-rpc.publicnode.com"),
      [metis.id]: http("https://metis.drpc.org"),
      [optimism.id]: http("https://optimism-rpc.publicnode.com"),
      [polygon.id]: http("https://polygon-bor-rpc.publicnode.com"),
      [scroll.id]: http("https://scroll.public-rpc.com"),
      [sepolia.id]: http("https://ethereum-sepolia-rpc.publicnode.com"),
      [zkSync.id]: http("https://mainnet.era.zksync.io"),
    },
  });
}

// Default configuration
export const defaultWagmiConfig = createTurtleWagmiConfig();
