import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { WagmiProvider } from "wagmi";
import { EthProvider } from "@/utils/rainbowkit/eth-provider";
import App from "./App";
import { defaultWagmiConfig } from "@turtledev/wagmi-config";
import { createIDBPersister } from "./utils/tanstack/persister";
import "@rainbow-me/rainbowkit/styles.css";
import "./styles/index.css";

// Configure QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 5 * 60 * 1000, // 5 minutes
      staleTime: 30000, // 30 seconds
      refetchOnWindowFocus: false,
      retry: 1,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

// Create root element
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

// Create root
const root = createRoot(rootElement);

const persister = createIDBPersister("turtle");

// Render app
root.render(
  <StrictMode>
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <WagmiProvider config={defaultWagmiConfig}>
        <EthProvider>
          <App />
        </EthProvider>
      </WagmiProvider>
    </PersistQueryClientProvider>
  </StrictMode>
);
