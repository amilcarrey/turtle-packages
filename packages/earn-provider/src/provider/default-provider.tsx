import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { createTurtleWagmiConfig, defaultWagmiConfig } from "@turtledev/wagmi-config";

// Create default QueryClient
const createDefaultQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });

export interface TurtleDefaultProviderProps {
  /** Custom QueryClient instance */
  queryClient?: QueryClient;
  /** Custom Wagmi configuration */
  wagmiOptions?: {
    /** Application name for wallet connection */
    appName: string;
    /** WalletConnect project ID */
    projectId: string;
    /** Application URL for wallet metadata */
    appUrl: string;
  };
  /** Children components */
  children: React.ReactNode;
}

export function TurtleDefaultProvider({
  queryClient,
  wagmiOptions,
  children,
}: TurtleDefaultProviderProps) {
  // Use custom or create default QueryClient
  const client = React.useMemo(() => queryClient || createDefaultQueryClient(), [queryClient]);

  // Use custom or create default Wagmi config
  const config = React.useMemo(() => {
    if (wagmiOptions) return createTurtleWagmiConfig(wagmiOptions);
    return defaultWagmiConfig;
  }, [wagmiOptions]);

  return (
    <QueryClientProvider client={client}>
      <WagmiProvider config={config}>
        <RainbowKitProvider
          theme={darkTheme({
            ...darkTheme.accentColors.green,
          })}
        >
          {children}
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}
