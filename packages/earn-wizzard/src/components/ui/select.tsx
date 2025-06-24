import React, { createContext, useContext, useState } from "react";

interface SelectContextProps {
  value?: string;
  onValueChange?: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SelectContext = createContext<SelectContextProps>({
  open: false,
  setOpen: () => {},
});

export interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ value, onValueChange, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
};

export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen } = useContext(SelectContext);

    return (
      <button
        ref={ref}
        className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
          className || ""
        }`}
        onClick={() => setOpen(!open)}
        {...props}
      >
        {children}
        <span className="ml-2">▼</span>
      </button>
    );
  }
);
SelectTrigger.displayName = "SelectTrigger";

export interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}

const SelectValue: React.FC<SelectValueProps> = ({ placeholder, ...props }) => {
  const { value } = useContext(SelectContext);
  return <span {...props}>{value || placeholder}</span>;
};

export interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const SelectContent: React.FC<SelectContentProps> = ({ className, children, ...props }) => {
  const { open } = useContext(SelectContext);

  if (!open) return null;

  return (
    <div
      className={`absolute top-full z-50 min-w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const SelectItem: React.FC<SelectItemProps> = ({ className, value, children, ...props }) => {
  const { onValueChange, setOpen } = useContext(SelectContext);

  return (
    <div
      className={`relative flex cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
        className || ""
      }`}
      onClick={() => {
        onValueChange?.(value);
        setOpen(false);
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
