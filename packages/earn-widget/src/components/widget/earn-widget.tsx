import React, { useState } from "react";
import type { EarnWidgetProps } from "../../types";
import { WidgetRoot } from "./widget-root";
import { WidgetContent } from "./widget-content";
import { MenuBar } from "../navigation";
import { useAtomValue } from "jotai";
import { showPanelAtom } from "@/store/atoms";
import { Deals } from "../deals";

/**
 * EarnWidget - Core widget component
 *
 * This is the main widget component that consumers should use.
 * It requires the consumer to provide:
 * - QueryClient provider (for data fetching)
 * - Wallet adapters (for blockchain interactions)
 *
 * @example
 * ```tsx
 * import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
 * import { EarnWidget } from '@turtledev/earn-widget';
 *
 * const queryClient = new QueryClient();
 *
 * function App() {
 *   return (
 *     <QueryClientProvider client={queryClient}>
 *         <EarnWidget
 *           user={address}
 *           network={chainId}
 *           config={widgetConfig}
 *           openConnectionModal={openConnectModal}
 *           signMessage={signMessage}
 *           sendTransaction={sendTransaction}
 *           changeNetwork={switchChain}
 *         />
 *     </QueryClientProvider>
 *   );
 * }
 * ```
 */

const tabButtons = [
  { value: "earn", label: "Earn" },
  { value: "portfolio", label: "Portfolio" },
  { value: "discover", label: "Discover" },
];

export function EarnWidget<TNetwork extends number = number>(
  props: EarnWidgetProps<TNetwork>
): React.ReactElement {
  const [tab, setTab] = useState<"earn" | "portfolio" | "discover">("earn");
  const showPanel = useAtomValue(showPanelAtom);

  return (
    <WidgetRoot config={props.config}>
      <div className="max-w-md w-full">
        {/* MenuBar Navigation */}
        <MenuBar
          selectedValue={tab}
          onValueChange={(value) => setTab(value as "earn" | "portfolio" | "discover")}
          items={tabButtons}
          className="w-full mb-4"
        />

        {/* Logo/Title */}
        <div className="flex justify-center items-center py-4">
          <span className="text-2xl font-bold text-[var(--color-text-accent)]">Turtle Club</span>
        </div>

        {/* Main Content */}
        <div className="w-full">
          {showPanel ? (
            <Deals />
          ) : (
            <div className="text-center space-y-4">
              {/* Tab Content */}
              {tab === "earn" && <WidgetContent {...props} />}
              {tab === "portfolio" && (
                <div className="p-6 bg-[var(--color-surface-primary)] rounded-xl">
                  <p className="text-[var(--color-text-primary)]">Portfolio Coming Soon...</p>
                </div>
              )}
              {tab === "discover" && (
                <div className="p-6 bg-[var(--color-surface-primary)] rounded-xl">
                  <p className="text-[var(--color-text-primary)]">Discover Coming Soon...</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </WidgetRoot>
  );
}
