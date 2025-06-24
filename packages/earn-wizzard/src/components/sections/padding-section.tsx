import type { WidgetStyleConfig } from "../../types/style-config";
import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@turtledev/ui";

interface PaddingSectionProps {
  config: WidgetStyleConfig;
  updateConfig: (key: keyof WidgetStyleConfig, value: any) => void;
}

export function PaddingSection({ config, updateConfig }: PaddingSectionProps) {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Padding</Label>
      <Select value={config.padding} onValueChange={(value) => updateConfig("padding", value)}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">None</SelectItem>
          <SelectItem value="small">Small</SelectItem>
          <SelectItem value="default">Default</SelectItem>
          <SelectItem value="large">Large</SelectItem>
          <SelectItem value="xlarge">X-Large</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
