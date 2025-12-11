import React from "react";
import { ArrowRight, TrendingUp } from "lucide-react";

interface CaseStudyCardProps {
  company: string;
  logo?: string;
  title: string;
  summary: string;
  industry: string;
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  quote?: string;
  author?: string;
  role?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  company,
  logo,
  title,
  summary,
  industry,
  metrics,
  quote,
  author,
  role,
}) => {
  return (
    <div className="p-6 bg-[#F7F4ED] rounded-3xl h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          {logo && (
            <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center p-2 border border-[#ECEAE4]">
              <img src={logo} alt={company} className="w-full h-full object-contain" />
            </div>
          )}
          <div>
            <h4 className="text-sm font-medium text-foreground">{company}</h4>
            <span className="text-xs px-2 py-0.5 bg-[#D4E0F9] text-[#4A7AE8] rounded-full">
              {industry}
            </span>
          </div>
        </div>
      </div>

      {/* Title & Summary */}
      <h3 className="text-xl font-medium text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6 flex-1">{summary}</p>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="p-3 bg-background/50 rounded-xl text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <TrendingUp className="w-3 h-3 text-[#4AE88A]" />
              <span className="text-lg font-semibold text-foreground">{metric.value}</span>
            </div>
            <p className="text-[10px] text-muted-foreground">{metric.label}</p>
            <p className="text-[10px] text-[#4AE88A]">{metric.improvement}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      {quote && (
        <div className="pt-4 border-t border-[#ECEAE4] mb-4">
          <p className="text-sm text-foreground italic mb-2">"{quote}"</p>
          {author && (
            <p className="text-xs text-muted-foreground">
              {author}{role && `, ${role}`}
            </p>
          )}
        </div>
      )}

      {/* CTA */}
      <button className="flex items-center gap-2 text-sm font-medium text-[#4A7AE8] hover:text-[#4A7AE8]/80 transition-colors group">
        <span>Read full case study</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default CaseStudyCard;
