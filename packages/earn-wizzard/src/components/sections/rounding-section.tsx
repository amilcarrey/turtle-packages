import type { WidgetStyleConfig } from "../../types/style-config";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

interface RoundingOptionProps {
  value: string;
  selected: boolean;
  onClick: () => void;
}

function RoundingOption({ value, selected, onClick }: RoundingOptionProps) {
  const getCornerStyle = (value: string): string => {
    const roundingMap = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
    };
    return roundingMap[value as keyof typeof roundingMap] || "rounded-2xl";
  };

  return (
    <Button
      variant={selected ? "default" : "secondary"}
      size="icon"
      onClick={onClick}
      className={`w-10 h-10 p-2 transition-all hover:scale-105 ${
        selected ? "bg-primary shadow-md" : ""
      }`}
    >
      <div
        className={`w-full h-full border-2 ${getCornerStyle(value)} ${
          selected
            ? "border-primary-foreground bg-primary-foreground"
            : "border-muted-foreground bg-muted"
        }`}
      />
    </Button>
  );
}

interface RoundingSectionProps {
  config: WidgetStyleConfig;
  updateConfig: (key: keyof WidgetStyleConfig, value: any) => void;
}

export function RoundingSection({
  config,
  updateConfig,
}: RoundingSectionProps) {
  const roundingOptions = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "full",
  ];

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Rounding</Label>
      <div className="grid grid-cols-4 gap-2">
        {roundingOptions.map((rounding) => (
          <RoundingOption
            key={rounding}
            value={rounding}
            selected={config.rounding === rounding}
            onClick={() => updateConfig("rounding", rounding)}
          />
        ))}
      </div>
    </div>
  );
}
