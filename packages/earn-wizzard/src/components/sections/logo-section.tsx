import { Input } from "../ui/input";
import { Label } from "../ui/label";
import type { WidgetStyleConfig } from "../../types/style-config";

interface LogoSectionProps {
  config: WidgetStyleConfig;
  updateConfig: (key: keyof WidgetStyleConfig, value: any) => void;
}

export function LogoSection({ config, updateConfig }: LogoSectionProps) {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Logo URLs</Label>
      <div className="space-y-2">
        <Input
          placeholder="Light theme logo URL"
          value={config.logo.light_url}
          onChange={(e) => updateConfig("logo", { ...config.logo, light_url: e.target.value })}
        />
        <Input
          placeholder="Dark theme logo URL"
          value={config.logo.dark_url}
          onChange={(e) => updateConfig("logo", { ...config.logo, dark_url: e.target.value })}
        />
      </div>
    </div>
  );
}
