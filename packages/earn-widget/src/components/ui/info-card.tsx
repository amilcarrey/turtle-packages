import { cn } from "../../lib/utils";
import { WidgetContainer } from "./widget-container";

interface InfoCardProps {
  title: string;
  value: string;
  color?: "primary" | "secondary" | "accent";
  className?: string;
}

export function InfoCard({ 
  title, 
  value, 
  color = "primary", 
  className 
}: InfoCardProps) {
  const colorClasses = {
    primary: "text-turtle-primary",
    secondary: "text-turtle-secondary", 
    accent: "text-turtle-accent",
  };

  return (
    <WidgetContainer
      variant="card"
      border="default"
      padding="small"
      className={cn("text-center", className)}
    >
      <div className="space-y-1">
        <p className="text-xs text-turtle-text/70 font-medium">{title}</p>
        <p className={cn("text-lg font-bold", colorClasses[color])}>
          {value}
        </p>
      </div>
    </WidgetContainer>
  );
}