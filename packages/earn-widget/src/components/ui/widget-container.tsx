import type { VariantProps } from "class-variance-authority";
import type { JSX } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const containerVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "bg-[var(--color-surface-primary)] border-[var(--color-text-primary)]/10",
      card: "bg-[var(--color-surface-primary)] border-[var(--color-text-primary)]/10",
      primary: "bg-[var(--color-text-accent)] text-[var(--color-text-primary)]",
      secondary: "bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)]",
    },
    shadow: {
      none: "",
      small: "shadow-sm",
      medium: "shadow-md",
      large: "shadow-lg shadow-[var(--color-text-primary)]/10",
    },
    padding: {
      none: "p-0",
      small: "p-3",
      default: "p-4",
      large: "p-6",
    },
    rounded: {
      none: "rounded-none",
      default: "rounded-xl",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    border: {
      none: "",
      default: "border border-[var(--color-text-primary)]/10",
      primary: "border border-[var(--color-text-accent)]",
    },
    width: {
      default: "w-auto",
      full: "w-full",
    },
    hover: {
      none: "",
      subtle: "hover:bg-[var(--color-surface-secondary)]/50 cursor-pointer",
      card: "hover:bg-[var(--color-surface-secondary)]/30 hover:shadow-lg cursor-pointer",
    }
  },
  defaultVariants: {
    variant: "default",
    shadow: "none",
    padding: "default",
    rounded: "default",
    border: "none",
    width: "default",
    hover: "none",
  },
});

export interface WidgetContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof containerVariants> {
  asChild?: boolean;
}

export function WidgetContainer({
  className,
  variant,
  shadow,
  padding,
  rounded,
  border,
  width,
  hover,
  ...props
}: WidgetContainerProps): JSX.Element {
  return (
    <div
      className={cn(containerVariants({
        variant,
        shadow,
        padding,
        rounded,
        border,
        width,
        hover,
      }), className)}
      {...props}
    />
  );
}