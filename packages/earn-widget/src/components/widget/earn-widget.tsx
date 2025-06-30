import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';
import type { EarnWidgetProps } from '../../types';
import { WidgetRoot } from './widget-root';
import { WidgetContent } from './widget-content';

// Create a default QueryClient for the widget
const createQueryClient = () =>
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

export function EarnWidget<TNetwork extends number = number>(
  props: EarnWidgetProps<TNetwork>
): React.ReactElement {
  const [queryClient] = React.useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <WidgetRoot config={props.config}>
          <WidgetContent {...props} />
        </WidgetRoot>
      </JotaiProvider>
    </QueryClientProvider>
  );
}