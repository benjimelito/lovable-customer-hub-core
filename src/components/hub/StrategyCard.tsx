import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Lightbulb, Target, Zap, Award } from "lucide-react";

interface StrategyCardProps {
  summary: string;
  aiInitiatives: string[];
  technologyFocus: string[];
  marketPosition: string;
  competitiveAdvantages: string[];
}

const StrategyCard: React.FC<StrategyCardProps> = ({
  summary,
  aiInitiatives,
  technologyFocus,
  marketPosition,
  competitiveAdvantages,
}) => {
  return (
    <BlurFade delay={0.1}>
      <div className="p-6 bg-[#F7F4ED] rounded-3xl space-y-6">
        {/* Summary */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center border"
              style={{ backgroundColor: "#D4E0F9", borderColor: "#4A7AE8" }}
            >
              <Lightbulb className="w-5 h-5" style={{ color: "#4A7AE8" }} />
            </div>
            <h3 className="text-lg font-medium text-foreground">Executive Summary</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
        </div>

        {/* Grid of sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* AI Initiatives */}
          <div className="p-4 bg-background/50 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4" style={{ color: "#E84A7A" }} />
              <h4 className="text-sm font-medium text-foreground">AI Initiatives</h4>
            </div>
            <ul className="space-y-2">
              {aiInitiatives.map((initiative, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-muted-foreground/40 mt-1">•</span>
                  {initiative}
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Focus */}
          <div className="p-4 bg-background/50 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4" style={{ color: "#4AE88A" }} />
              <h4 className="text-sm font-medium text-foreground">Technology Focus</h4>
            </div>
            <ul className="space-y-2">
              {technologyFocus.map((focus, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-muted-foreground/40 mt-1">•</span>
                  {focus}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Market Position */}
        <div className="p-4 bg-background/50 rounded-xl">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4" style={{ color: "#A44AE8" }} />
            <h4 className="text-sm font-medium text-foreground">Market Position</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{marketPosition}</p>
          <div className="flex flex-wrap gap-2">
            {competitiveAdvantages.map((advantage, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1.5 bg-[#E4D4F9] text-[#A44AE8] rounded-full"
              >
                {advantage}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

export default StrategyCard;
