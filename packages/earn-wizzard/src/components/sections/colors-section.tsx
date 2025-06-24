import type { WidgetStyleConfig } from "../../types/style-config";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface ColorsSectionProps {
  config: WidgetStyleConfig;
  updateStyles: (key: string, value: string) => void;
}

export function ColorsSection({ config, updateStyles }: ColorsSectionProps) {
  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium">Colors</Label>

      <div className="grid grid-cols-1 gap-3">
        {Object.entries(config.styles).map(([key, value]) => (
          <div key={key} className="space-y-1">
            <Label className="text-xs capitalize">{key.replace(/color_|_/g, " ").trim()}</Label>
            <div className="flex items-center gap-2">
              <Input
                type="color"
                value={value}
                onChange={(e) => updateStyles(key, e.target.value)}
                className="w-12 h-8 p-1 border rounded cursor-pointer"
              />
              <Input
                type="text"
                value={value}
                onChange={(e) => updateStyles(key, e.target.value)}
                className="flex-1 text-xs font-mono"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
