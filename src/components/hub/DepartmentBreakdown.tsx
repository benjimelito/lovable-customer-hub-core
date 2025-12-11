import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Users } from "lucide-react";

interface DepartmentData {
  name: string;
  workspaceCount: number;
  userCount: number;
}

interface DepartmentBreakdownProps {
  departments: DepartmentData[];
}

const DepartmentBreakdown: React.FC<DepartmentBreakdownProps> = ({ departments }) => {
  const maxUsers = Math.max(...departments.map(d => d.userCount));

  return (
    <BlurFade delay={0.2}>
      <div className="p-6 bg-[#F7F4ED] rounded-3xl">
        <h4 className="text-lg font-medium text-foreground mb-4">Usage by Department</h4>
        <div className="space-y-4">
          {departments.map((dept, index) => (
            <div key={dept.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{dept.name}</span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-3 h-3" />
                  <span>{dept.userCount} users</span>
                  <span>·</span>
                  <span>{dept.workspaceCount} workspaces</span>
                </div>
              </div>
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${(dept.userCount / maxUsers) * 100}%`,
                    backgroundColor: `hsl(var(--chart-${(index % 5) + 1}))`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BlurFade>
  );
};

export default DepartmentBreakdown;
