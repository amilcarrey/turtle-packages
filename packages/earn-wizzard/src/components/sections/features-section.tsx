import type { WidgetStyleConfig } from "../../types/style-config";
import { Label, Switch } from "@turtledev/ui";

interface FeaturesSectionProps {
  config: WidgetStyleConfig;
  updateConfig: (key: keyof WidgetStyleConfig, value: any) => void;
}

export function FeaturesSection({ config, updateConfig }: FeaturesSectionProps) {
  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium">Features</Label>

      <div className="flex items-center justify-between">
        <Label htmlFor="navigation-icons" className="text-sm">
          Navigation Icons
        </Label>
        <Switch
          id="navigation-icons"
          checked={config.show_navigation_icons}
          onCheckedChange={(checked) => updateConfig("show_navigation_icons", checked)}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="wallet" className="text-sm">
          Show Wallet
        </Label>
        <Switch
          id="wallet"
          checked={config.show_wallet}
          onCheckedChange={(checked) => updateConfig("show_wallet", checked)}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="multi-chain" className="text-sm">
          Multi Chain
        </Label>
        <Switch
          id="multi-chain"
          checked={config.multi_chain}
          onCheckedChange={(checked) => updateConfig("multi_chain", checked)}
        />
      </div>
    </div>
  );
}
