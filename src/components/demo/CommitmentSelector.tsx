import React from "react";
import { CheckCircle2 } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { PRICING, CommitmentTier, formatCurrency } from "@/lib/pricing";
import { cn } from "@/lib/utils";
interface CommitmentSelectorProps {
  commitment: CommitmentTier;
  onCommitmentChange: (commitment: CommitmentTier) => void;
  optimalTier?: CommitmentTier;
}
const CommitmentSelector: React.FC<CommitmentSelectorProps> = ({
  commitment,
  onCommitmentChange,
  optimalTier
}) => {
  return <BlurFade delay={0.3}>
      <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#E4D4F9] border border-[#C9A4FF] flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-[#A44AE8]" />
          </div>
          <h3 className="text-xl font-medium text-foreground">Commitment Tier</h3>
        </div>

        <div className="space-y-2">
          {PRICING.creditTiers.map(tier => {
          const tierCommitment = tier.commitment as CommitmentTier;
          const isSelected = commitment === tierCommitment;
          const isOptimal = optimalTier === tierCommitment;
          return <button key={tier.commitment} onClick={() => onCommitmentChange(tierCommitment)} className={cn("w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200", isSelected ? "bg-primary/10 border-primary" : "bg-background/50 border-border/50 hover:border-border")}>
                <div className="flex items-center gap-3">
                  <div className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all", isSelected ? "border-primary bg-primary" : "border-muted-foreground/30")}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
                  </div>
                  
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className={cn("font-medium", isSelected ? "text-foreground" : "text-foreground/80")}>
                        {tier.label}
                      </span>
                      {isOptimal && <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#D4F9E4] border border-[#4AE88A]/30 rounded-full text-xs font-medium text-[#2B8A4B]">
                          
                          Recommended
                        </span>}
                      {tier.commitment === 1000000 && <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-full text-xs font-medium text-amber-700 dark:text-amber-400">
                          Best Rate
                        </span>}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className={cn("text-lg font-semibold", isSelected ? "text-primary" : "text-foreground")}>
                    ${tier.rate.toFixed(2)}
                  </span>
                  <span className="text-sm text-muted-foreground">/credit</span>
                </div>
              </button>;
        })}
        </div>

        <p className="mt-4 text-xs text-muted-foreground text-center">
          Commitment represents minimum annual spend. You'll always pay at least your commitment amount.
        </p>
      </div>
    </BlurFade>;
};
export default CommitmentSelector;