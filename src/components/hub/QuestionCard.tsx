import React, { useState } from "react";
import { ChevronDown, Copy, Check, Code2, Briefcase, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { toast } from "sonner";

interface QuestionCardProps {
  question: string;
  context: string;
  category: "technical" | "business" | "adoption";
}

const categoryConfig = {
  technical: {
    icon: Code2,
    label: "Technical",
    bgColor: "#D4E0F9",
    color: "#4A7AE8",
  },
  business: {
    icon: Briefcase,
    label: "Business",
    bgColor: "#D4F9E4",
    color: "#4AE88A",
  },
  adoption: {
    icon: Users,
    label: "Adoption",
    bgColor: "#E4D4F9",
    color: "#A44AE8",
  },
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  context,
  category,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const config = categoryConfig[category];
  const Icon = config.icon;

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(question);
    setCopied(true);
    toast.success("Question copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="p-4 bg-[#F7F4ED] rounded-2xl transition-all duration-300 hover:bg-[#F3F0E9]">
        <CollapsibleTrigger className="w-full">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 flex-1 text-left">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: config.bgColor }}
              >
                <Icon className="w-4 h-4" style={{ color: config.color }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span 
                    className="text-[10px] uppercase tracking-wide font-medium"
                    style={{ color: config.color }}
                  >
                    {config.label}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">{question}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-background/50 rounded-lg transition-colors"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-[#4AE88A]" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </div>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="mt-4 pt-4 border-t border-[#ECEAE4] pl-11">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-xs uppercase tracking-wide text-muted-foreground/60 block mb-1">Why ask this:</span>
              {context}
            </p>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default QuestionCard;
