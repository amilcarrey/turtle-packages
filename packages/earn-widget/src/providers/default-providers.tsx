import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';

// Default QueryClient configuration for the widget
const createDefaultQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
      },
    },
  });

interface DefaultProvidersProps {
  children: React.ReactNode;
  queryClient?: QueryClient;
}

/**
 * DefaultProviders - Optional wrapper for consumers who want default configuration
 * 
 * This is a convenience wrapper that provides default QueryClient and Jotai providers.
 * Consumers can choose to use this or provide their own providers.
 * 
 * @example
 * ```tsx
 * import { EarnWidget, DefaultProviders } from '@turtledev/earn-widget';
 * 
 * function App() {
 *   return (
 *     <DefaultProviders>
 *       <EarnWidget {...props} />
 *     </DefaultProviders>
 *   );
 * }
 * ```
 */
export function DefaultProviders({ children, queryClient }: DefaultProvidersProps) {
  const [defaultQueryClient] = React.useState(() => queryClient || createDefaultQueryClient());

  return (
    <QueryClientProvider client={defaultQueryClient}>
      <JotaiProvider>
        {children}
      </JotaiProvider>
    </QueryClientProvider>
  );
}