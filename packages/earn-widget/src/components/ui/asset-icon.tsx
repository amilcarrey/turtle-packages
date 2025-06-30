import type { JSX } from "react";
import { cn } from "../../lib/utils";

interface AssetIconProps {
  url?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-7 h-7", 
  lg: "w-10 h-10"
};

export function AssetIcon({ 
  url, 
  alt = "Asset", 
  size = "md", 
  className 
}: AssetIconProps): JSX.Element {
  const baseClasses = cn(
    "rounded-full",
    sizeClasses[size],
    className
  );

  if (url) {
    return (
      <img 
        src={url} 
        alt={alt} 
        className={baseClasses}
        onError={(e) => {
          // Fallback on image error
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
    );
  }
  
  return (
    <span 
      className={cn(
        baseClasses,
        "bg-turtle-secondary opacity-30"
      )}
    />
  );
}