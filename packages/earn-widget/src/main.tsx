import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from 'jotai';
import App from "./App";
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

// Render app
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <App />
      </JotaiProvider>
    </QueryClientProvider>
  </StrictMode>
);
