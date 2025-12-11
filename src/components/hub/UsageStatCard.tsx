import React from "react";
import { LucideIcon } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

interface UsageStatCardProps {
  icon: LucideIcon;
  iconBgColor: string;
  iconBorderColor: string;
  value: number;
  label: string;
  format?: "number" | "abbreviated" | "percentage";
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const UsageStatCard: React.FC<UsageStatCardProps> = ({
  icon: Icon,
  iconBgColor,
  iconBorderColor,
  value,
  label,
  format = "number",
  trend,
}) => {
  return (
    <div className="flex flex-col justify-between p-6 bg-[#F7F4ED] rounded-3xl min-h-[200px] transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div
          className="w-12 h-12 rounded-[9.6px] flex items-center justify-center border"
          style={{ backgroundColor: iconBgColor, borderColor: iconBorderColor }}
        >
          <Icon className="w-6 h-6" style={{ color: iconBorderColor }} />
        </div>
        {trend && (
          <span
            className={`text-sm font-medium ${
              trend.isPositive ? "text-success-primary" : "text-destructive-primary"
            }`}
          >
            {trend.isPositive ? "+" : ""}
            {trend.value}%
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h3 className="text-[48px] font-normal leading-[100%] tracking-[-0.01em] text-foreground">
          <AnimatedCounter value={value} format={format} />
        </h3>
        <p className="text-base leading-[24px] tracking-[-0.01em] text-muted-foreground">
          {label}
        </p>
      </div>
    </div>
  );
};

export default UsageStatCard;
