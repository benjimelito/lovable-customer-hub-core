import React, { useState } from "react";
import { ChevronDown, Rocket, BarChart3, Presentation, TrendingUp } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AnimatedCounter from "@/components/hub/AnimatedCounter";
import {
  formatCurrency,
  getCreditRate,
  calculatePrototypeROI,
  calculateDashboardROI,
  calculatePresentationROI,
  CommitmentTier,
  CompanySize,
} from "@/lib/pricing";

interface ROICalculatorProps {
  commitment: CommitmentTier;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ commitment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [companySize, setCompanySize] = useState<CompanySize>("midMarket");
  
  const { rate } = getCreditRate(commitment);
  const prototypeROI = calculatePrototypeROI(rate);
  const dashboardROI = calculateDashboardROI(companySize, rate);
  const presentationROI = calculatePresentationROI(rate);

  return (
    <BlurFade delay={0.5}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-3xl overflow-hidden">
          <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-background/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4E0F9] border border-[#9CAEFF] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#4A7AE8]" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-medium text-foreground">ROI Calculator</h3>
                <p className="text-sm text-muted-foreground">See potential return on investment</p>
              </div>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="px-6 pb-6 space-y-4">
              {/* Prototype Development ROI */}
              <div className="p-5 bg-background/50 rounded-xl border border-border/50">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Prototype Development</h4>
                    <p className="text-sm text-muted-foreground">Building one working prototype per month</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Traditional Cost</p>
                    <p className="text-lg font-semibold text-foreground">
                      {formatCurrency(prototypeROI.traditionalCost)}
                      <span className="text-xs text-muted-foreground font-normal">/yr</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Lovable Cost</p>
                    <p className="text-lg font-semibold text-primary">
                      {formatCurrency(prototypeROI.lovableCost)}
                      <span className="text-xs text-muted-foreground font-normal">/yr</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">ROI Multiple</p>
                    <p className="text-lg font-semibold text-[#2B8A4B]">
                      <AnimatedCounter value={prototypeROI.roiMultiple} suffix="x" duration={500} />
                    </p>
                  </div>
                </div>
              </div>

              {/* Sales Dashboard ROI */}
              <div className="p-5 bg-background/50 rounded-xl border border-border/50">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Sales Productivity Dashboard</h4>
                      <p className="text-sm text-muted-foreground">0.2% close rate improvement</p>
                    </div>
                  </div>
                  
                  <Select value={companySize} onValueChange={(v) => setCompanySize(v as CompanySize)}>
                    <SelectTrigger className="w-[140px] h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small ($2M ARR)</SelectItem>
                      <SelectItem value="midMarket">Mid-Market ($20M)</SelectItem>
                      <SelectItem value="enterprise">Enterprise ($100M)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Revenue Impact</p>
                    <p className="text-lg font-semibold text-foreground">
                      {formatCurrency(dashboardROI.revenueImpact)}
                      <span className="text-xs text-muted-foreground font-normal">/yr</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Lovable Cost</p>
                    <p className="text-lg font-semibold text-primary">
                      {formatCurrency(dashboardROI.lovableCost)}
                      <span className="text-xs text-muted-foreground font-normal">/yr</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">ROI Multiple</p>
                    <p className="text-lg font-semibold text-[#2B8A4B]">
                      <AnimatedCounter value={dashboardROI.roiMultiple} suffix="x" duration={500} />
                    </p>
                  </div>
                </div>
              </div>

              {/* Presentation ROI */}
              <div className="p-5 bg-background/50 rounded-xl border border-border/50">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 flex items-center justify-center flex-shrink-0">
                    <Presentation className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Sales/Marketing Presentations</h4>
                    <p className="text-sm text-muted-foreground">Professional presentations in minutes</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Traditional Cost</p>
                    <p className="text-lg font-semibold text-foreground">
                      {formatCurrency(presentationROI.traditionalCost)}
                      <span className="text-xs text-muted-foreground font-normal">/yr</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Lovable Cost</p>
                    <p className="text-lg font-semibold text-primary">
                      {formatCurrency(presentationROI.lovableCost)}
                      <span className="text-xs text-muted-foreground font-normal">/yr</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">ROI Multiple</p>
                    <p className="text-lg font-semibold text-[#2B8A4B]">
                      <AnimatedCounter value={presentationROI.roiMultiple} suffix="x" duration={500} />
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center pt-2">
                ROI calculations based on your selected commitment tier rate of ${rate.toFixed(2)}/credit
              </p>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </BlurFade>
  );
};

export default ROICalculator;
