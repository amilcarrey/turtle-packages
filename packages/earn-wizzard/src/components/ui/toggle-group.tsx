import React, { createContext, useContext } from "react";

interface ToggleGroupContextProps {
  value?: string;
  onValueChange?: (value: string) => void;
  type: "single" | "multiple";
}

const ToggleGroupContext = createContext<ToggleGroupContextProps>({
  type: "single",
});

export interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "single" | "multiple";
  value?: string;
  onValueChange?: (value: string) => void;
}

const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ className, type, value, onValueChange, children, ...props }, ref) => (
    <ToggleGroupContext.Provider value={{ value, onValueChange, type }}>
      <div ref={ref} className={`flex items-center gap-1 ${className || ""}`} {...props}>
        {children}
      </div>
    </ToggleGroupContext.Provider>
  )
);
ToggleGroup.displayName = "ToggleGroup";

export interface ToggleGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = useContext(ToggleGroupContext);
    const isSelected = context.value === value;

    return (
      <button
        ref={ref}
        className={`px-3 py-2 text-sm font-medium rounded-md border transition-colors ${
          isSelected
            ? "bg-accent text-accent-foreground border-accent"
            : "border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
        } ${className || ""}`}
        onClick={() => context.onValueChange?.(value)}
        data-state={isSelected ? "on" : "off"}
        {...props}
      >
        {children}
      </button>
    );
  }
);
ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroup, ToggleGroupItem };
