import React from "react";
import { Building2, Users, Check } from "lucide-react";
import AIMatchedBadge from "./AIMatchedBadge";
import AnimatedCounter from "./AnimatedCounter";

interface CompanyCardProps {
  name: string;
  logo?: string;
  industry: string;
  companySize: string;
  matchScore: number;
  matchReasons: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  logo,
  industry,
  companySize,
  matchScore,
  matchReasons,
  testimonial,
}) => {
  return (
    <div className="p-6 bg-[#F7F4ED] rounded-3xl h-full flex flex-col transition-all duration-300 hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          {logo ? (
            <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center p-2 border border-[#ECEAE4]">
              <img src={logo} alt={name} className="w-full h-full object-contain" />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-xl bg-[#D4E0F9] flex items-center justify-center border border-[#4A7AE8]/20">
              <Building2 className="w-6 h-6 text-[#4A7AE8]" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-medium text-foreground">{name}</h3>
            <p className="text-xs text-muted-foreground">{industry}</p>
          </div>
        </div>
        
        {/* Match Score */}
        <div className="text-right">
          <div className="text-2xl font-semibold text-[#4AE88A]">
            <AnimatedCounter value={matchScore} />%
          </div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Match</p>
        </div>
      </div>

      {/* AI Matched Badge */}
      <AIMatchedBadge variant="compact" className="mb-4 w-fit" />

      {/* Company Info */}
      <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5" />
          <span>{companySize} employees</span>
        </div>
      </div>

      {/* Match Reasons */}
      <div className="mb-4 flex-1">
        <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-2">Why we matched you</p>
        <ul className="space-y-1.5">
          {matchReasons.slice(0, 3).map((reason, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-3.5 h-3.5 text-[#4AE88A] mt-0.5 shrink-0" />
              {reason}
            </li>
          ))}
        </ul>
      </div>

      {/* Testimonial Quote */}
      {testimonial && (
        <div className="pt-4 border-t border-[#ECEAE4]">
          <p className="text-sm text-foreground italic mb-2">"{testimonial.quote}"</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.author}, {testimonial.role}
          </p>
        </div>
      )}
    </div>
  );
};

export default CompanyCard;
