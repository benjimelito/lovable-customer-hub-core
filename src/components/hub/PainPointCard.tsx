import React from "react";
import { cn } from "@/lib/utils";
import { Code2, Package, DollarSign, Settings } from "lucide-react";

interface PainPointCardProps {
  category: "engineering" | "product" | "operations" | "cost";
  title: string;
  description: string;
  source: string;
  relevanceScore: number;
}

const categoryConfig = {
  engineering: {
    icon: Code2,
    label: "Engineering",
    bgColor: "#D4E0F9",
    color: "#4A7AE8",
  },
  product: {
    icon: Package,
    label: "Product",
    bgColor: "#F9D4E4",
    color: "#E84A7A",
  },
  operations: {
    icon: Settings,
    label: "Operations",
    bgColor: "#F9E4D4",
    color: "#E8A44A",
  },
  cost: {
    icon: DollarSign,
    label: "Cost",
    bgColor: "#D4F9E4",
    color: "#4AE88A",
  },
};

const PainPointCard: React.FC<PainPointCardProps> = ({
  category,
  title,
  description,
  source,
  relevanceScore,
}) => {
  const config = categoryConfig[category];
  const Icon = config.icon;

  return (
    <div className="p-5 bg-[#F7F4ED] rounded-3xl h-full flex flex-col transition-all duration-300 hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center border shrink-0"
          style={{ backgroundColor: config.bgColor, borderColor: config.color }}
        >
          <Icon className="w-5 h-5" style={{ color: config.color }} />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-right">
            <span className="text-xs text-muted-foreground">Relevance</span>
            <div 
              className="text-sm font-medium"
              style={{ color: relevanceScore >= 80 ? "#4AE88A" : relevanceScore >= 60 ? "#E8A44A" : "#E84A7A" }}
            >
              {relevanceScore}%
            </div>
          </div>
        </div>
      </div>

      {/* Category Badge */}
      <span 
        className="text-xs px-2 py-1 rounded-full w-fit mb-3"
        style={{ backgroundColor: config.bgColor, color: config.color }}
      >
        {config.label}
      </span>

      {/* Content */}
      <h4 className="text-base font-medium text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{description}</p>

      {/* Source */}
      <div className="mt-4 pt-4 border-t border-[#ECEAE4]">
        <p className="text-xs text-muted-foreground">
          Source: <span className="text-foreground">{source}</span>
        </p>
      </div>
    </div>
  );
};

export default PainPointCard;
