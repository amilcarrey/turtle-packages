import React, { useState } from "react";
import { useAtomValue } from "jotai";
import { WidgetRoot } from "./components/widget/widget-root";
import { MenuBar } from "./components/navigation/menu-bar";
import { WidgetContent } from "./components/widget/widget-content";
import { Deals } from "./components/deals";
import { showPanelAtom } from "./store/atoms";
import type { WidgetStyleConfig } from "./types/style-config";
import type { EarnWidgetProps } from "./types";

// Define tab types based on Figma design
export type TabType = "earn" | "portfolio" | "discover";

const tabButtons = [
  { label: "Earn", value: "earn" as TabType },
  { label: "Portfolio", value: "portfolio" as TabType },
  { label: "Discover", value: "discover" as TabType },
];

// Mock adapter props for development
const mockAdapterProps: Pick<EarnWidgetProps, 'openConnectionModal' | 'sendTransaction' | 'signMessage' | 'changeNetwork'> = {
  openConnectionModal: () => {
    console.log("Opening wallet connection modal...");
    alert("Connect Wallet clicked!");
  },
  signMessage: async (message: string): Promise<string> => {
    console.log("Signing message:", message);
    return `0x${"a".repeat(128)}`;
  },
  sendTransaction: async (transaction: any): Promise<string> => {
    console.log("Sending transaction:", transaction);
    return `0x${"b".repeat(64)}`;
  },
  changeNetwork: async (networkId: number): Promise<void> => {
    console.log(`Switching to network ${networkId}`);
  },
};

function App(): React.ReactElement {
  const [tab, setTab] = useState<TabType>("earn");
  const showPanel = useAtomValue(showPanelAtom);

  // Configuration matching Figma design
  const config: WidgetStyleConfig = {
    theme: "dark",
    rounding: "2xl",
    widget_width: "default",
    padding: "default",
    font_primary: "Inter",
    font_secondary: "Inter",
    show_wallet: true,
    styles: {
      color_surface_primary: "#1a1a1a",
      color_surface_primary_dark: "#f5f5f5",
      color_surface_secondary: "#2a2a2a",
      color_surface_secondary_dark: "#e5e5e5",
      color_text_primary: "#ffffff",
      color_text_primary_dark: "#1a1a1a",
      color_text_muted: "#888888",
      color_text_muted_dark: "#666666",
      color_text_accent: "#8DE276",
      color_text_accent_dark: "#5d904f",
    },
  };

  return (
    <div className="flex w-full justify-center items-center p-4 min-h-screen bg-gray-900">
      <WidgetRoot config={config}>
        <div className="max-w-md w-full">
          {/* MenuBar Navigation */}
          <MenuBar
            selectedValue={tab}
            onValueChange={setTab}
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
                {tab === "earn" && (
                  <WidgetContent 
                    user={undefined} 
                    network={1} 
                    config={config}
                    {...mockAdapterProps}
                  />
                )}
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
    </div>
  );
}

export default App;
