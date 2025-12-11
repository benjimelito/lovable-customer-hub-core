import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { CheckCircle2, Clock, FileText, Users } from "lucide-react";

interface StageContentProps {
  stage: {
    id: string;
    name: string;
    description: string;
    status: "completed" | "current" | "upcoming";
    agendaItems: string[];
    milestones?: string[];
    resources?: { title: string; url: string }[];
  };
}

const StageContent: React.FC<StageContentProps> = ({ stage }) => {
  const getStageIcon = () => {
    switch (stage.id) {
      case "discovery":
        return Users;
      case "demo":
        return FileText;
      case "evaluation":
        return Clock;
      default:
        return CheckCircle2;
    }
  };

  const Icon = getStageIcon();

  return (
    <BlurFade delay={0.1}>
      <div className="p-6 bg-[#F7F4ED] rounded-3xl h-full">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div 
            className="w-12 h-12 rounded-[9.6px] flex items-center justify-center border"
            style={{ backgroundColor: "#D4E0F9", borderColor: "#4A7AE8" }}
          >
            <Icon className="w-6 h-6" style={{ color: "#4A7AE8" }} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-medium text-foreground">{stage.name}</h3>
              {stage.status === "current" && (
                <span className="text-xs px-2 py-0.5 bg-[#D4E0F9] text-[#4A7AE8] rounded-full font-medium">
                  Current Stage
                </span>
              )}
              {stage.status === "completed" && (
                <span className="text-xs px-2 py-0.5 bg-[#D4F9E4] text-[#4AE88A] rounded-full font-medium">
                  Completed
                </span>
              )}
            </div>
            <p className="text-muted-foreground mt-1">{stage.description}</p>
          </div>
        </div>

        {/* What to Expect */}
        <div className="space-y-4">
          <h4 className="text-base font-medium text-foreground">What to Expect</h4>
          <ul className="space-y-3">
            {stage.agendaItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-background/50 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-muted-foreground">{index + 1}</span>
                </div>
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Milestones */}
        {stage.milestones && stage.milestones.length > 0 && (
          <div className="mt-6 pt-6 border-t border-[#ECEAE4]">
            <h4 className="text-base font-medium text-foreground mb-3">Key Milestones</h4>
            <div className="flex flex-wrap gap-2">
              {stage.milestones.map((milestone, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1.5 bg-background/50 rounded-full text-muted-foreground"
                >
                  {milestone}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Resources */}
        {stage.resources && stage.resources.length > 0 && (
          <div className="mt-6 pt-6 border-t border-[#ECEAE4]">
            <h4 className="text-base font-medium text-foreground mb-3">Resources</h4>
            <div className="space-y-2">
              {stage.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#4A7AE8] hover:underline"
                >
                  <FileText className="w-4 h-4" />
                  {resource.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </BlurFade>
  );
};

export default StageContent;
