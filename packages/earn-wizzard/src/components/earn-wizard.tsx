import type { WidgetStyleConfig } from "../types/style-config";
import { ChevronRight, Code, Edit, Settings } from "lucide-react";
import { type JSX, useEffect, useState } from "react";
import { Button, ScrollArea, Separator } from "@turtledev/ui";
import { defaultWidgetStyleConfig } from "../store/widget-style-config";
import {
  CodeView,
  ColorsSection,
  FeaturesSection,
  LogoSection,
  NavigationSection,
  PaddingSection,
  RoundingSection,
  ThemeSection,
  TypographySection,
  WidgetStyleSection,
  WidgetWidthSection,
} from "./sections";

export interface EarnWizardProps {
  /**
   * Initial configuration for the widget
   */
  initialConfig?: WidgetStyleConfig;
  /**
   * Callback when configuration changes
   */
  onConfigChange?: (config: WidgetStyleConfig) => void;
  /**
   * Whether the sidebar starts collapsed
   */
  defaultCollapsed?: boolean;
  /**
   * Custom class name for the root container
   */
  className?: string;
}

export function EarnWizard({
  initialConfig = defaultWidgetStyleConfig,
  onConfigChange,
  defaultCollapsed = false,
  className = "",
}: EarnWizardProps): JSX.Element {
  const [config, setConfig] = useState<WidgetStyleConfig>(initialConfig);
  const [jsonOutput, setJsonOutput] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [viewMode, setViewMode] = useState<"preview" | "code">("preview");

  useEffect(() => {
    setJsonOutput(JSON.stringify(config, null, 2));
    onConfigChange?.(config);
  }, [config, onConfigChange]);

  // Update config helper
  const updateConfig = (key: keyof WidgetStyleConfig, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  // Update styles helper
  const updateStyles = (key: string, value: string) => {
    setConfig((prev) => ({
      ...prev,
      styles: {
        ...prev.styles,
        [key]: value,
      },
    }));
  };

  return (
    <div className={`flex h-screen bg-background ${className}`}>
      {/* Fixed Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-background border-r border-border shadow-lg transition-all duration-300 z-50 ${
          isCollapsed ? "w-16" : "w-96"
        }`}
      >
        <div className="relative h-full">
          {/* Collapse Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute top-4 right-4 z-50 hover:bg-muted/50"
          >
            <ChevronRight
              className={`w-4 h-4 transition-transform ${isCollapsed ? "" : "rotate-180"}`}
            />
          </Button>

          {!isCollapsed && (
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-sm">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Widget Config</h1>
                    <p className="text-sm text-muted-foreground">Customize your earn widget</p>
                  </div>
                </div>
              </div>

              {/* Configuration Content */}
              <ScrollArea className="flex-1 h-full">
                <div className="p-4 space-y-6">
                  {/* Basic Settings */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      Basic Settings
                    </h3>

                    {/* Logo URLs */}
                    <LogoSection config={config} updateConfig={updateConfig} />

                    {/* Theme */}
                    <ThemeSection config={config} updateConfig={updateConfig} />

                    <Separator />

                    {/* Widget Style */}
                    <WidgetStyleSection config={config} updateConfig={updateConfig} />

                    {/* Widget Width */}
                    <WidgetWidthSection config={config} updateConfig={updateConfig} />

                    {/* Navigation */}
                    <NavigationSection config={config} updateConfig={updateConfig} />

                    <Separator />

                    {/* Padding */}
                    <PaddingSection config={config} updateConfig={updateConfig} />

                    {/* Rounding */}
                    <RoundingSection config={config} updateConfig={updateConfig} />

                    <Separator />

                    {/* Fonts */}
                    <TypographySection config={config} updateConfig={updateConfig} />

                    <Separator />

                    {/* Feature Toggles */}
                    <FeaturesSection config={config} updateConfig={updateConfig} />

                    <Separator />

                    {/* Color Customization */}
                    <ColorsSection config={config} updateStyles={updateStyles} />
                  </div>
                </div>
              </ScrollArea>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 transition-all duration-300 ${isCollapsed ? "ml-16" : "ml-96"}`}>
        <div className="h-full flex flex-col">
          {/* Content Area */}
          <div className="flex-1">
            {viewMode === "preview" ? (
              <div className="h-full bg-gradient-to-br from-background to-muted/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-2xl font-bold text-muted-foreground">Widget Preview</div>
                  <div className="text-muted-foreground">Preview functionality coming soon...</div>
                  <div className="text-sm text-muted-foreground">
                    Use the code view to see the generated configuration
                  </div>
                </div>
              </div>
            ) : (
              <CodeView jsonOutput={jsonOutput} />
            )}
          </div>

          {/* Toggle Section - Now at the bottom */}
          <div className="p-4 border-t border-border bg-background">
            <div className="flex justify-center">
              <div className="inline-flex items-center rounded-full bg-muted p-1">
                <Button
                  variant={viewMode === "preview" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("preview")}
                  className={`rounded-full px-6 ${
                    viewMode === "preview" ? "bg-background shadow-sm" : ""
                  }`}
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button
                  variant={viewMode === "code" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("code")}
                  className={`rounded-full px-6 ${
                    viewMode === "code" ? "bg-background shadow-sm" : ""
                  }`}
                >
                  <Code className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
