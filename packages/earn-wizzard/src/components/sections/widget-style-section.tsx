import type { WidgetStyleConfig } from "../../types/style-config";
import { Label } from "../ui/label";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

interface WidgetStyleSectionProps {
  config: WidgetStyleConfig;
  updateConfig: (key: keyof WidgetStyleConfig, value: any) => void;
}

export function WidgetStyleSection({ config, updateConfig }: WidgetStyleSectionProps) {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Widget Style</Label>
      <ToggleGroup
        type="single"
        value={config.widget_style}
        onValueChange={(value: string) => value && updateConfig("widget_style", value)}
        className="justify-start"
      >
        <ToggleGroupItem
          value="default"
          aria-label="Default style"
          className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm"
        >
          Default
        </ToggleGroupItem>
        <ToggleGroupItem
          value="rounded"
          aria-label="Rounded style"
          className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm"
        >
          Rounded
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
} 