import React, { useState } from "react";
import { ChevronDown, User, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface AgendaItemProps {
  id: string;
  title: string;
  duration: string;
  description: string;
  presenter: "prospect" | "lovable" | "both";
  details?: string[];
}

const AgendaItem: React.FC<AgendaItemProps> = ({
  title,
  duration,
  description,
  presenter,
  details,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getPresenterInfo = () => {
    switch (presenter) {
      case "prospect":
        return { label: "You", icon: User, bgColor: "#E4D4F9", color: "#A44AE8" };
      case "lovable":
        return { label: "Lovable", icon: User, bgColor: "#D4E0F9", color: "#4A7AE8" };
      case "both":
        return { label: "Collaborative", icon: Users, bgColor: "#F9D4E4", color: "#E84A7A" };
    }
  };

  const presenterInfo = getPresenterInfo();
  const PresenterIcon = presenterInfo.icon;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="p-4 bg-background/50 rounded-2xl transition-all duration-300 hover:bg-background/70">
        <CollapsibleTrigger className="w-full">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 flex-1 text-left">
              <div className="flex flex-col items-center">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: presenterInfo.bgColor }}
                >
                  <PresenterIcon className="w-4 h-4" style={{ color: presenterInfo.color }} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-sm font-medium text-foreground">{title}</h4>
                  <span className="text-xs px-2 py-0.5 bg-[#ECEAE4] rounded-full text-muted-foreground">
                    {duration}
                  </span>
                  <span className="text-xs" style={{ color: presenterInfo.color }}>
                    {presenterInfo.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{description}</p>
              </div>
            </div>
            {details && details.length > 0 && (
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform duration-200 shrink-0",
                  isOpen && "rotate-180"
                )}
              />
            )}
          </div>
        </CollapsibleTrigger>

        {details && details.length > 0 && (
          <CollapsibleContent>
            <div className="mt-4 pt-4 border-t border-[#ECEAE4]">
              <ul className="space-y-2 pl-11">
                {details.map((detail, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-muted-foreground/50">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </CollapsibleContent>
        )}
      </div>
    </Collapsible>
  );
};

export default AgendaItem;
