import type { WidgetStyleConfig } from "../../types/style-config";
import { Label, ToggleGroup, ToggleGroupItem } from "@turtledev/ui";

interface WidgetWidthSectionProps {
  config: WidgetStyleConfig;
  updateConfig: (key: keyof WidgetStyleConfig, value: any) => void;
}

export function WidgetWidthSection({ config, updateConfig }: WidgetWidthSectionProps) {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Widget Width</Label>
      <ToggleGroup
        type="single"
        value={config.widget_width}
        onValueChange={(value: string) => value && updateConfig("widget_width", value)}
        className="justify-start"
      >
        <ToggleGroupItem
          value="default"
          aria-label="Default width"
          className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm"
        >
          Default
        </ToggleGroupItem>
        <ToggleGroupItem
          value="full"
          aria-label="Full width"
          className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm"
        >
          Full Width
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
