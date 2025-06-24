import type { WidgetStyleConfig } from "../../types/style-config";
import { Label, ToggleGroup, ToggleGroupItem } from "@turtledev/ui";
import { Moon, Sun } from "lucide-react";

interface ThemeSectionProps {
  config: WidgetStyleConfig;
  updateConfig: (key: keyof WidgetStyleConfig, value: any) => void;
}

export function ThemeSection({ config, updateConfig }: ThemeSectionProps) {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Theme</Label>
      <ToggleGroup
        type="single"
        value={config.theme}
        onValueChange={(value: string) => value && updateConfig("theme", value)}
        className="justify-start"
      >
        <ToggleGroupItem
          value="light"
          aria-label="Light theme"
          className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm"
        >
          <Sun className="w-4 h-4 mr-2" />
          Light
        </ToggleGroupItem>
        <ToggleGroupItem
          value="dark"
          aria-label="Dark theme"
          className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm"
        >
          <Moon className="w-4 h-4 mr-2" />
          Dark
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
