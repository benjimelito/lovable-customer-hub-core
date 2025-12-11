import React from "react";
import { Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIMatchedBadgeProps {
  companyName?: string;
  variant?: "default" | "compact";
  className?: string;
}

const AIMatchedBadge: React.FC<AIMatchedBadgeProps> = ({
  companyName,
  variant = "default",
  className,
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full",
        "bg-gradient-to-r from-[#D4E0F9] via-[#E4D4F9] to-[#F9D4E4]",
        "border border-[#4A7AE8]/20",
        "animate-pulse",
        variant === "compact" && "px-2 py-1",
        className
      )}
    >
      <Brain 
        className={cn(
          "text-[#4A7AE8]",
          variant === "default" ? "w-3.5 h-3.5" : "w-3 h-3"
        )} 
      />
      <span 
        className={cn(
          "font-medium text-[#4A7AE8]",
          variant === "default" ? "text-xs" : "text-[10px]"
        )}
      >
        {companyName ? `AI-matched for ${companyName}` : "AI-matched"}
      </span>
    </div>
  );
};

export default AIMatchedBadge;
