import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import ProjectPreviewCard from "./ProjectPreviewCard";

interface ProjectPreview {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  createdBy: string;
  department: string;
  remixable: boolean;
  remixUrl?: string;
}

interface TopProjectsGridProps {
  projects: ProjectPreview[];
  title?: string;
}

const TopProjectsGrid: React.FC<TopProjectsGridProps> = ({ 
  projects,
  title = "Top Projects Across Your Organization"
}) => {
  return (
    <BlurFade delay={0.3}>
      <div className="space-y-4">
        <h2 className="text-2xl font-medium text-foreground">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <BlurFade key={project.id} delay={0.1 * (index + 1)}>
              <ProjectPreviewCard {...project} />
            </BlurFade>
          ))}
        </div>
      </div>
    </BlurFade>
  );
};

export default TopProjectsGrid;
