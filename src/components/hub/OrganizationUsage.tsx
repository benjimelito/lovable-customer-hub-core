import React from "react";
import { Building2, Users, Wallet, AlertTriangle } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import AnimatedCounter from "./AnimatedCounter";

interface OrganizationUsageProps {
  corporateDomain: string;
  workspaces: {
    free: number;
    paid: number;
    total: number;
  };
  totalUsers: number;
  estimatedARR: number;
  companyName: string;
}

const OrganizationUsage: React.FC<OrganizationUsageProps> = ({
  corporateDomain,
  workspaces,
  totalUsers,
  estimatedARR,
  companyName,
}) => {
  return (
    <BlurFade delay={0.1}>
      <div className="p-6 bg-[#F7F4ED] rounded-3xl border border-[#ECEAE4]">
        {/* FOMO Header */}
        <div className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-warning/50 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-warning-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground">
              Your organization is already building with Lovable
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              But without enterprise support, governance, or visibility
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-background/50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Workspaces</span>
            </div>
            <div className="text-2xl font-medium text-foreground">
              <AnimatedCounter value={workspaces.total} />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {workspaces.free} free · {workspaces.paid} paid
            </p>
          </div>

          <div className="p-4 bg-background/50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Users</span>
            </div>
            <div className="text-2xl font-medium text-foreground">
              <AnimatedCounter value={totalUsers} />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              across {companyName}
            </p>
          </div>

          <div className="p-4 bg-background/50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Est. ARR</span>
            </div>
            <div className="text-2xl font-medium text-foreground">
              $<AnimatedCounter value={estimatedARR} />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              potential consolidation
            </p>
          </div>

          <div className="p-4 bg-background/50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-muted-foreground">Domain</span>
            </div>
            <div className="text-lg font-medium text-foreground truncate">
              @{corporateDomain}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              corporate email
            </p>
          </div>
        </div>

        {/* FOMO Message */}
        <div className="p-4 bg-accent/30 rounded-xl border border-accent">
          <p className="text-sm text-accent-foreground">
            <strong>Without enterprise:</strong> siloed usage, no governance, shadow IT risk.{" "}
            <strong>With enterprise:</strong> unified visibility, security compliance, strategic development.
          </p>
        </div>
      </div>
    </BlurFade>
  );
};

export default OrganizationUsage;
