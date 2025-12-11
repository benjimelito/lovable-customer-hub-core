import React from "react";
import { Check, Clock, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export interface UseCaseSuggestion {
  id: string;
  title: string;
  description: string;
  industry: string;
  role: string;
  complexity: "simple" | "medium" | "complex";
  estimatedDemoTime: string;
  tags: string[];
  selected?: boolean;
}

interface UseCaseCardProps {
  suggestion: UseCaseSuggestion;
  onSelect: (id: string, selected: boolean) => void;
  onCustomize: (suggestion: UseCaseSuggestion) => void;
}

const complexityConfig = {
  simple: { label: "Simple", bgColor: "#D4F9E4", borderColor: "#4AE88A", textColor: "#2B8A4B" },
  medium: { label: "Medium", bgColor: "#FEF3C7", borderColor: "#F59E0B", textColor: "#92400E" },
  complex: { label: "Complex", bgColor: "#E4D4F9", borderColor: "#A44AE8", textColor: "#7C3AED" },
};

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  suggestion,
  onSelect,
  onCustomize,
}) => {
  const complexity = complexityConfig[suggestion.complexity];

  return (
    <div
      className={cn(
        "relative bg-white dark:bg-card rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col",
        suggestion.selected
          ? "ring-2 ring-primary shadow-lg"
          : "border border-[#E5E5E5] dark:border-border hover:shadow-md"
      )}
    >
      {/* Top Row: Icon + Checkbox */}
      <div className="flex items-start justify-between mb-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0"
          style={{ 
            backgroundColor: complexity.bgColor, 
            borderColor: complexity.borderColor 
          }}
        >
          <Lightbulb className="w-6 h-6" style={{ color: complexity.borderColor }} />
        </div>
        <Checkbox
          checked={suggestion.selected}
          onCheckedChange={(checked) => onSelect(suggestion.id, !!checked)}
          className="h-5 w-5 flex-shrink-0"
        />
      </div>

      {/* Title & Role - Fixed height */}
      <div className="mb-3 min-h-[52px]">
        <h4 className="text-lg font-medium text-foreground leading-tight mb-1 line-clamp-2">
          {suggestion.title}
        </h4>
        <p className="text-sm text-muted-foreground">{suggestion.role}</p>
      </div>

      {/* Description - Fixed height with line clamp */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">
        {suggestion.description}
      </p>

      {/* Meta Row */}
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="px-2.5 py-1 rounded-lg text-xs font-medium border"
          style={{ 
            backgroundColor: complexity.bgColor, 
            borderColor: complexity.borderColor,
            color: complexity.textColor
          }}
        >
          {complexity.label}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{suggestion.estimatedDemoTime}</span>
        </div>
      </div>

      {/* Tags - Fixed height */}
      <div className="flex flex-wrap gap-2 mb-5 min-h-[28px]">
        {suggestion.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-background/60 dark:bg-muted/30 border border-[#D8D6CF] dark:border-border rounded-lg text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Button - Push to bottom */}
      <div className="mt-auto">
        <button
          onClick={() => onCustomize(suggestion)}
          className="w-full py-2.5 text-center text-sm bg-foreground text-background hover:bg-foreground/90 font-medium transition-all rounded-xl"
        >
          Customize this idea →
        </button>
      </div>

      {/* Selected indicator */}
      {suggestion.selected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
          <Check className="w-4 h-4 text-primary-foreground" />
        </div>
      )}
    </div>
  );
};

export default UseCaseCard;
