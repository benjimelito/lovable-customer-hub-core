import React from "react";
import { ExternalLink, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProjectPreviewCardProps {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  createdBy: string;
  department: string;
  remixable: boolean;
  remixUrl?: string;
}

const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({
  name,
  description,
  thumbnailUrl,
  createdBy,
  department,
  remixable,
  remixUrl,
}) => {
  return (
    <div className="p-4 bg-[#F7F4ED] rounded-2xl border border-[#ECEAE4] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Thumbnail */}
      <div className="aspect-video bg-muted rounded-xl mb-3 overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h5 className="text-sm font-medium text-foreground line-clamp-1">{name}</h5>
          <Badge variant="secondary" className="text-xs shrink-0">
            {department}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
        <p className="text-xs text-muted-foreground">by {createdBy}</p>

        {/* Remix Button or Private Label */}
        {remixable && remixUrl ? (
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-2 gap-2"
            onClick={() => window.open(remixUrl, "_blank")}
          >
            Remix this project
            <ExternalLink className="w-3 h-3" />
          </Button>
        ) : (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2 gap-2 opacity-50 cursor-not-allowed"
                  disabled
                >
                  <Lock className="w-3 h-3" />
                  Private Project
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This project is private and cannot be remixed</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
};

export default ProjectPreviewCard;
