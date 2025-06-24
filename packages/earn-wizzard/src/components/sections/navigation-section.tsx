import type { WidgetStyleConfig } from "../../types/style-config";
import { Label, ToggleGroup, ToggleGroupItem } from "@turtledev/ui";

interface NavigationSectionProps {
  config: WidgetStyleConfig;
  updateConfig: (key: keyof WidgetStyleConfig, value: any) => void;
}

export function NavigationSection({ config, updateConfig }: NavigationSectionProps) {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Navigation</Label>
      <ToggleGroup
        type="single"
        value={config.navigation}
        onValueChange={(value: string) => value && updateConfig("navigation", value)}
        className="justify-start"
      >
        <ToggleGroupItem
          value="segments"
          aria-label="Segments navigation"
          className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm"
        >
          Segments
        </ToggleGroupItem>
        <ToggleGroupItem
          value="tabs"
          aria-label="Tabs navigation"
          className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm"
        >
          Tabs
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
