import React from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-[#559e2a] hover:bg-[#468821] text-white shadow-lg shadow-[#559e2a]/20",
  secondary: "bg-gray-900 hover:bg-gray-800 text-white",
  outline: "border-2 border-[#559e2a] text-[#559e2a] hover:bg-[#559e2a] hover:text-white",
  white: "bg-white hover:bg-gray-50 text-gray-900 shadow-lg",
  ghost: "hover:bg-[#559e2a]/10 text-[#559e2a]"
};

const sizes = {
  default: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
  sm: "h-9 px-4 text-sm"
};

export default function TerraButton({
  children,
  variant = "primary",
  size = "default",
  fullWidth = false,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#559e2a] focus:ring-offset-2",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}