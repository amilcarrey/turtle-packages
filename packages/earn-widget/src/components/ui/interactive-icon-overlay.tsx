import type { JSX, ReactNode } from "react";

interface InteractiveIconOverlayProps {
  icon: ReactNode;
  ringClass?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: React.ElementType; // For wrapping with SelectTrigger, Button, etc.
  [key: string]: any; // For additional props like disabled, etc.
}

export function InteractiveIconOverlay({
  icon,
  ringClass = "",
  children,
  className = "",
  onClick,
  as: Component = "div",
  ...props
}: InteractiveIconOverlayProps): JSX.Element {
  return (
    <div className={`relative flex items-center min-w-[180px] h-10 ${className}`}>
      {/* Overlapped Icon */}
      <span className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center h-11 w-11 rounded-full ring-1 ${ringClass} bg-turtle-surface-primary`} style={{ backgroundColor: 'var(--color-surface-primary)' } as any}>
        {icon}
      </span>

      {/* Interactive Content Container */}
      <Component
        className="flex items-center justify-between rounded-full bg-turtle-surface-secondary pl-14 pr-3 gap-3 border border-turtle-text/10 w-full h-10 cursor-pointer transition-colors hover:border-turtle-accent"
        style={{ 
          backgroundColor: 'var(--color-surface-secondary)',
          borderColor: 'var(--color-text-primary, rgba(255,255,255,0.1))',
        } as any}
        onClick={onClick}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
}