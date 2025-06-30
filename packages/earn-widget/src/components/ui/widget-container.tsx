import type { VariantProps } from "class-variance-authority";
import type { JSX } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const containerVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "bg-turtle-background border-turtle-border",
      card: "bg-turtle-background border-turtle-border",
      primary: "bg-turtle-primary text-white",
      secondary: "bg-turtle-secondary text-turtle-text",
    },
    shadow: {
      none: "",
      small: "shadow-sm",
      medium: "shadow-md",
      large: "shadow-lg shadow-turtle-border/10",
    },
    padding: {
      none: "p-0",
      small: "p-3",
      default: "p-4",
      large: "p-6",
    },
    rounded: {
      none: "rounded-none",
      default: "rounded-[var(--turtle-border-radius)]",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    border: {
      none: "",
      default: "border border-turtle-border",
      primary: "border border-turtle-primary",
    },
    width: {
      default: "w-auto",
      full: "w-full",
    },
    hover: {
      none: "",
      subtle: "hover:bg-turtle-secondary/5 cursor-pointer",
      card: "hover:bg-turtle-secondary/10 hover:shadow-lg cursor-pointer",
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