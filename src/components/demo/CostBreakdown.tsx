import React from "react";
import { ChevronDown, Calculator, Info } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { formatCurrency, formatNumber, CommitmentTier, getCreditRate } from "@/lib/pricing";

interface CostBreakdownProps {
  mode: "simple" | "advanced";
  users: number;
  breakdown?: { power: number; normal: number; casual: number };
  monthlyCredits: number;
  annualCredits: number;
  commitment: CommitmentTier;
  creditCost: number;
  projectedUsage: number;
  usesFullCommitment: boolean;
}

const CostBreakdown: React.FC<CostBreakdownProps> = ({
  mode,
  users,
  breakdown,
  monthlyCredits,
  annualCredits,
  commitment,
  creditCost,
  projectedUsage,
  usesFullCommitment,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { rate, tier } = getCreditRate(commitment);
  const payAsYouGoCost = annualCredits * 0.80;

  return (
    <BlurFade delay={0.45}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-3xl overflow-hidden">
          <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-background/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F9D4E4] border border-[#E84A7A]/30 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#E84A7A]" />
              </div>
              <h3 className="text-xl font-medium text-foreground">Cost Breakdown</h3>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="px-6 pb-6 space-y-6">
              {/* Credit Calculation */}
              <div className="p-4 bg-background/50 rounded-xl border border-border/50">
                <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4 text-muted-foreground" />
                  Credit Calculation
                </h4>
                
                {mode === "simple" ? (
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Users × Credits/User × 12</span>
                      <span className="font-mono text-foreground">
                        {formatNumber(users)} × 50 × 12
                      </span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-foreground">Annual Credits</span>
                      <span className="text-primary">{formatNumber(annualCredits)}</span>
                    </div>
                  </div>
                ) : breakdown && (
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Power: {breakdown.power} × 100 × 12</span>
                      <span className="font-mono text-foreground">{formatNumber(breakdown.power * 100 * 12)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Normal: {breakdown.normal} × 50 × 12</span>
                      <span className="font-mono text-foreground">{formatNumber(breakdown.normal * 50 * 12)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Casual: {breakdown.casual} × 10 × 12</span>
                      <span className="font-mono text-foreground">{formatNumber(breakdown.casual * 10 * 12)}</span>
                    </div>
                    <div className="flex justify-between font-medium pt-2 border-t border-border/50">
                      <span className="text-foreground">Annual Credits</span>
                      <span className="text-primary">{formatNumber(annualCredits)}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Cost Calculation */}
              <div className="p-4 bg-background/50 rounded-xl border border-border/50">
                <h4 className="text-sm font-medium text-foreground mb-3">Cost Calculation</h4>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tier</span>
                    <span className="font-medium text-foreground">{tier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Credit Rate</span>
                    <span className="font-medium text-foreground">${rate.toFixed(2)}/credit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projected Usage</span>
                    <span className="font-mono text-foreground">
                      {formatNumber(annualCredits)} × ${rate.toFixed(2)} = {formatCurrency(projectedUsage)}
                    </span>
                  </div>
                  
                  {usesFullCommitment && (
                    <div className="flex justify-between p-2 bg-amber-50 dark:bg-amber-950/30 rounded-lg mt-2">
                      <span className="text-amber-700 dark:text-amber-300">Commitment Floor</span>
                      <span className="font-medium text-amber-700 dark:text-amber-300">
                        {formatCurrency(commitment)} (applies)
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-between font-medium pt-2 border-t border-border/50">
                    <span className="text-foreground">Effective Credit Cost</span>
                    <span className="text-primary">{formatCurrency(creditCost)}</span>
                  </div>
                </div>
              </div>

              {/* Comparison */}
              <div className="p-4 bg-background/50 rounded-xl border border-border/50">
                <h4 className="text-sm font-medium text-foreground mb-3">Pay-as-you-go Comparison</h4>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pay-as-you-go rate</span>
                    <span className="text-foreground">$0.80/credit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pay-as-you-go cost</span>
                    <span className="text-foreground">{formatCurrency(payAsYouGoCost)}</span>
                  </div>
                  <div className="flex justify-between font-medium pt-2 border-t border-border/50">
                    <span className="text-foreground">Your Savings</span>
                    <span className={payAsYouGoCost - creditCost > 0 ? "text-[#2B8A4B]" : "text-muted-foreground"}>
                      {formatCurrency(Math.max(0, payAsYouGoCost - creditCost))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </BlurFade>
  );
};

export default CostBreakdown;
