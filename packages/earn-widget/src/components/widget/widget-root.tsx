import React, { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import type { WidgetStyleConfig } from '../../types/style-config';
import { cn } from '../../lib/utils';
import { useWidgetStyles } from '../../lib/widget-styles';
import { widgetStyleConfigAtom } from '../../store/atoms';

interface WidgetRootProps {
  config: WidgetStyleConfig;
  children: React.ReactNode;
}

export function WidgetRoot({ config, children }: WidgetRootProps): React.ReactElement {
  const setWidgetConfig = useSetAtom(widgetStyleConfigAtom);
  const { theme, cssDark, cssLight, fontPrimary, fontSecondary, widgetWidth } = useWidgetStyles();

  useEffect(() => {
    setWidgetConfig(config);
  }, [config, setWidgetConfig]);

  return (
    <div
      className={cn(
        `font-${fontPrimary}`,
        "antialiased transition-all duration-700 ease-linear h-full w-full",
        theme === "dark" ? "dark" : ""
      )}
      style={{
        ...cssDark,
        ...cssLight,
        "--font-primary": fontPrimary,
        "--font-secondary": fontSecondary,
      } as React.CSSProperties}
    >
      <div 
        className={cn(
          "flex flex-col items-center gap-2 h-full max-h-[calc(100vh-2rem)]",
          widgetWidth === "full" ? "w-full" : "max-w-[450px]"
        )}
      >
        {children}
      </div>
    </div>
  );
}