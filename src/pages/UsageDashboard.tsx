import React, { useState, useEffect } from "react";
import { 
  Building2, 
  FolderGit2, 
  Users, 
  Rocket, 
  Code2 
} from "lucide-react";
import HubLayout from "@/components/hub/HubLayout";
import UsageStatCard from "@/components/hub/UsageStatCard";
import TrendChart from "@/components/hub/TrendChart";
import OrganizationUsage from "@/components/hub/OrganizationUsage";
import DepartmentBreakdown from "@/components/hub/DepartmentBreakdown";
import TopProjectsGrid from "@/components/hub/TopProjectsGrid";
import { BlurFade } from "@/components/ui/blur-fade";
import { Skeleton } from "@/components/ui/skeleton";
import { useCustomer } from "@/contexts/CustomerContext";
import { usageStats, usageTrends, mockOrganizationUsage } from "@/data/mockData";

const UsageDashboard: React.FC = () => {
  const { profile } = useCustomer();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const statCards = [
    {
      icon: Building2,
      iconBgColor: "#D4E0F9",
      iconBorderColor: "#4A7AE8",
      value: usageStats.accounts,
      label: "Team Accounts",
      trend: { value: 25, isPositive: true },
    },
    {
      icon: FolderGit2,
      iconBgColor: "#D4F9E4",
      iconBorderColor: "#4AE88A",
      value: usageStats.projectsBuilt,
      label: "Projects Built",
      trend: { value: 68, isPositive: true },
    },
    {
      icon: Users,
      iconBgColor: "#F9E4D4",
      iconBorderColor: "#E8A44A",
      value: usageStats.activeUsers,
      label: "Active Users",
      trend: { value: 15, isPositive: true },
    },
    {
      icon: Rocket,
      iconBgColor: "#E4D4F9",
      iconBorderColor: "#A44AE8",
      value: usageStats.deployments,
      label: "Deployments",
      trend: { value: 120, isPositive: true },
    },
    {
      icon: Code2,
      iconBgColor: "#F9D4E4",
      iconBorderColor: "#E84A7A",
      value: 1200000,
      label: "Lines of Code",
      format: "abbreviated" as const,
    },
  ];

  return (
    <HubLayout sectionId="usage" showBackground={false}>
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background rounded-3xl">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16 space-y-12">
          {/* Page Header */}
          <BlurFade delay={0.05}>
            <div className="max-w-2xl">
              <h1 className="text-[36px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                Usage Dashboard
              </h1>
              <p className="text-lg text-muted-foreground mt-4">
                {profile.companyName} is already building with Lovable. Here's what's happening across your organization.
              </p>
            </div>
          </BlurFade>

          {/* Organization Usage Discovery */}
          <OrganizationUsage
            corporateDomain={mockOrganizationUsage.corporateDomain}
            workspaces={mockOrganizationUsage.workspaces}
            totalUsers={mockOrganizationUsage.totalUsers}
            estimatedARR={mockOrganizationUsage.estimatedARR}
            companyName={profile.companyName}
          />

          {/* Stats Grid */}
          <div>
            <BlurFade delay={0.1}>
              <h2 className="text-2xl font-medium text-foreground mb-6">
                Your Lovable Metrics at a Glance
              </h2>
            </BlurFade>
            
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-[200px] rounded-3xl" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {statCards.map((card, index) => (
                  <BlurFade key={card.label} delay={0.1 + index * 0.05}>
                    <UsageStatCard {...card} />
                  </BlurFade>
                ))}
              </div>
            )}
          </div>

          {/* Department Breakdown */}
          <DepartmentBreakdown departments={mockOrganizationUsage.departments} />

          {/* Trend Charts */}
          <div>
            <BlurFade delay={0.15}>
              <h2 className="text-2xl font-medium text-foreground mb-6">
                Growth Trends
              </h2>
            </BlurFade>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <BlurFade delay={0.2}>
                <TrendChart
                  data={usageTrends}
                  type="line"
                  dataKey="projects"
                  xAxisKey="month"
                  title="Projects Over Time"
                  color="hsl(var(--chart-1))"
                />
              </BlurFade>
              <BlurFade delay={0.25}>
                <TrendChart
                  data={usageTrends}
                  type="bar"
                  dataKey="deployments"
                  xAxisKey="month"
                  title="Deployment Frequency"
                  color="hsl(var(--chart-2))"
                />
              </BlurFade>
              <BlurFade delay={0.3}>
                <TrendChart
                  data={usageTrends}
                  type="area"
                  dataKey="users"
                  xAxisKey="month"
                  title="User Adoption"
                  color="hsl(var(--chart-3))"
                />
              </BlurFade>
            </div>
          </div>

          {/* Top Projects */}
          <TopProjectsGrid projects={mockOrganizationUsage.topProjects} />

          {/* CTA Section */}
          <BlurFade delay={0.35}>
            <div className="p-8 bg-primary text-primary-foreground rounded-3xl text-center">
              <h3 className="text-2xl font-medium mb-3">
                Unify Your Lovable Usage
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
                Consolidate {mockOrganizationUsage.workspaces.total} workspaces under enterprise governance. 
                Get visibility, security compliance, and strategic control.
              </p>
              <a 
                href="/process" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                See How It Works
              </a>
            </div>
          </BlurFade>
        </div>
      </section>
    </HubLayout>
  );
};

export default UsageDashboard;
