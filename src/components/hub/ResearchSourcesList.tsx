import React, { useState } from "react";
import { ChevronDown, ExternalLink, FileText, Briefcase, Newspaper, Linkedin, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ConfidenceIndicator from "./ConfidenceIndicator";

interface ResearchSource {
  type: "earnings_call" | "job_posting" | "press_release" | "news" | "linkedin" | "website";
  title: string;
  url?: string;
  date: string;
  excerpt?: string;
}

interface ResearchSourcesListProps {
  sources: ResearchSource[];
  methodology: string;
  confidenceScore: number;
  generatedAt: string;
  onRegenerate?: () => void;
}

const sourceTypeConfig = {
  earnings_call: { icon: FileText, label: "Earnings Call", color: "#4A7AE8" },
  job_posting: { icon: Briefcase, label: "Job Posting", color: "#4AE88A" },
  press_release: { icon: FileText, label: "Press Release", color: "#A44AE8" },
  news: { icon: Newspaper, label: "News", color: "#E8A44A" },
  linkedin: { icon: Linkedin, label: "LinkedIn", color: "#0077B5" },
  website: { icon: Globe, label: "Website", color: "#E84A7A" },
};

const ResearchSourcesList: React.FC<ResearchSourcesListProps> = ({
  sources,
  methodology,
  confidenceScore,
  generatedAt,
  onRegenerate,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const formattedDate = new Date(generatedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="p-6 bg-[#F7F4ED] rounded-3xl">
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <ConfidenceIndicator score={confidenceScore} size="sm" />
              <div className="text-left">
                <h4 className="text-sm font-medium text-foreground">Research Confidence: {confidenceScore}%</h4>
                <p className="text-xs text-muted-foreground">
                  Last updated: {formattedDate} · {sources.length} sources analyzed
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {onRegenerate && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRegenerate();
                  }}
                  className="text-xs px-3 py-1.5 bg-background/50 hover:bg-background rounded-full text-muted-foreground transition-colors"
                >
                  Regenerate
                </button>
              )}
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </div>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="mt-6 pt-6 border-t border-[#ECEAE4] space-y-6">
            {/* Methodology */}
            <div>
              <h5 className="text-sm font-medium text-foreground mb-2">Methodology</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">{methodology}</p>
            </div>

            {/* Sources */}
            <div>
              <h5 className="text-sm font-medium text-foreground mb-3">Sources Analyzed</h5>
              <div className="space-y-3">
                {sources.map((source, index) => {
                  const config = sourceTypeConfig[source.type];
                  const Icon = config.icon;
                  
                  return (
                    <div key={index} className="p-3 bg-background/50 rounded-xl">
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${config.color}20` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: config.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span 
                                className="text-[10px] uppercase tracking-wide"
                                style={{ color: config.color }}
                              >
                                {config.label}
                              </span>
                              <h6 className="text-sm font-medium text-foreground">{source.title}</h6>
                            </div>
                            {source.url && (
                              <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 hover:bg-[#ECEAE4] rounded transition-colors shrink-0"
                              >
                                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                              </a>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">{source.date}</p>
                          {source.excerpt && (
                            <p className="text-xs text-muted-foreground mt-2 italic">"{source.excerpt}"</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default ResearchSourcesList;
