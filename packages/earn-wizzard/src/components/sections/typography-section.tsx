import type { WidgetStyleConfig } from "../../types/style-config";
import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@turtledev/ui";

interface TypographySectionProps {
  config: WidgetStyleConfig;
  updateConfig: (key: keyof WidgetStyleConfig, value: any) => void;
}

export function TypographySection({ config, updateConfig }: TypographySectionProps) {
  const fonts = ["Inter", "Roboto", "DM Sans", "Geist"];

  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium">Typography</Label>

      <div className="space-y-3">
        <div>
          <Label className="text-xs text-muted-foreground">Primary Font</Label>
          <Select
            value={config.font_primary}
            onValueChange={(value) => updateConfig("font_primary", value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fonts.map((font) => (
                <SelectItem key={font} value={font}>
                  {font}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-xs text-muted-foreground">Secondary Font</Label>
          <Select
            value={config.font_secondary}
            onValueChange={(value) => updateConfig("font_secondary", value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fonts.map((font) => (
                <SelectItem key={font} value={font}>
                  {font}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
