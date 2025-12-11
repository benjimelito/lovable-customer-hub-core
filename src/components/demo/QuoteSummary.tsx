import React from "react";
import { TrendingDown, Lightbulb, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import AnimatedCounter from "@/components/hub/AnimatedCounter";
import { formatCurrency, CommitmentTier } from "@/lib/pricing";

interface QuoteSummaryProps {
  platformFee: number;
  creditCost: number;
  totalAnnual: number;
  monthlyEquivalent: number;
  costPerUser: number;
  savings: number;
  optimalSavings?: number;
  optimalTierLabel?: string;
  usesFullCommitment: boolean;
  enablePerUser: boolean;
  perUserAnnual?: number;
}

const QuoteSummary: React.FC<QuoteSummaryProps> = ({
  platformFee,
  creditCost,
  totalAnnual,
  monthlyEquivalent,
  costPerUser,
  savings,
  optimalSavings,
  optimalTierLabel,
  usesFullCommitment,
  enablePerUser,
  perUserAnnual,
}) => {
  return (
    <BlurFade delay={0.4}>
      <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-3xl p-6 sticky top-24">
        <h3 className="text-2xl font-semibold text-foreground mb-6">Your Annual Quote</h3>

        {enablePerUser ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-border/50">
              <span className="text-muted-foreground">Per-User Annual</span>
              <span className="text-lg font-semibold text-foreground">
                <AnimatedCounter value={perUserAnnual || 0} prefix="$" duration={500} />
              </span>
            </div>
            
            <div className="flex justify-between items-center py-3">
              <span className="text-muted-foreground">Monthly Equivalent</span>
              <span className="text-lg font-medium text-foreground">
                <AnimatedCounter value={Math.round((perUserAnnual || 0) / 12)} prefix="$" duration={500} />
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="text-muted-foreground">Platform Fee</span>
                <span className="text-lg font-medium text-foreground">
                  <AnimatedCounter value={platformFee} prefix="$" duration={500} />
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <div>
                  <span className="text-muted-foreground">Credit Cost</span>
                  {usesFullCommitment && (
                    <p className="text-xs text-amber-600 dark:text-amber-400">Commitment floor applies</p>
                  )}
                </div>
                <span className="text-lg font-medium text-foreground">
                  <AnimatedCounter value={creditCost} prefix="$" duration={500} />
                </span>
              </div>

              <div className="flex justify-between items-center py-4 bg-primary/5 -mx-6 px-6 border-y border-primary/20">
                <span className="text-lg font-semibold text-foreground">Total Annual</span>
                <span className="text-2xl font-bold text-primary">
                  <AnimatedCounter value={totalAnnual} prefix="$" duration={500} />
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="text-muted-foreground">Monthly Equivalent</span>
                <span className="text-lg font-medium text-foreground">
                  <AnimatedCounter value={monthlyEquivalent} prefix="$" duration={500} />
                </span>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="text-muted-foreground">Cost per User</span>
                <span className="text-lg font-medium text-foreground">
                  $<AnimatedCounter value={Math.round(costPerUser * 100) / 100} duration={500} format="number" />/mo
                </span>
              </div>
            </div>

            {/* Savings Indicators */}
            {(savings > 0 || (optimalSavings !== undefined && optimalSavings > 0)) && (
              <div className="mt-6 space-y-3">
                {savings > 0 && (
                  <div className="flex items-center gap-2 p-3 bg-[#D4F9E4] border border-[#4AE88A]/30 rounded-xl">
                    <TrendingDown className="w-5 h-5 text-[#2B8A4B]" />
                    <span className="text-sm font-medium text-[#2B8A4B]">
                      Saving {formatCurrency(savings)} vs pay-as-you-go
                    </span>
                  </div>
                )}

                {optimalSavings !== undefined && optimalSavings > 0 && optimalTierLabel && (
                  <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
                    <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-amber-700 dark:text-amber-300 block">
                        Switch to {optimalTierLabel} to save {formatCurrency(optimalSavings)}
                      </span>
                      <button className="text-xs text-amber-600 dark:text-amber-400 hover:underline mt-1 inline-flex items-center gap-1">
                        View recommendation <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </BlurFade>
  );
};

export default QuoteSummary;
