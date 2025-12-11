import React from "react";
import { CreditCard, Users } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import { PRICING, formatCurrency } from "@/lib/pricing";

interface PricingModelToggleProps {
  enablePerUser: boolean;
  onToggle: (enablePerUser: boolean) => void;
  totalUsers: number;
}

const PricingModelToggle: React.FC<PricingModelToggleProps> = ({
  enablePerUser,
  onToggle,
  totalUsers,
}) => {
  const effectiveUsers = Math.max(totalUsers, PRICING.perUserPricing.minimumUsers);
  const perUserMonthly = effectiveUsers * PRICING.perUserPricing.monthlyRate;
  
  return (
    <BlurFade delay={0.37}>
      <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-3xl p-6">
        <h3 className="text-lg font-medium text-foreground mb-4">Pricing Model</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onToggle(false)}
            className={cn(
              "p-4 rounded-xl border-2 transition-all text-left",
              !enablePerUser
                ? "bg-primary/10 border-primary"
                : "bg-background/50 border-border/50 hover:border-border"
            )}
          >
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className={cn(
                "w-5 h-5",
                !enablePerUser ? "text-primary" : "text-muted-foreground"
              )} />
              <span className={cn(
                "font-medium",
                !enablePerUser ? "text-foreground" : "text-foreground/80"
              )}>
                Credit-Based
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Pay per credit used. Best for variable usage patterns.
            </p>
          </button>

          <button
            onClick={() => onToggle(true)}
            className={cn(
              "p-4 rounded-xl border-2 transition-all text-left",
              enablePerUser
                ? "bg-primary/10 border-primary"
                : "bg-background/50 border-border/50 hover:border-border"
            )}
          >
            <div className="flex items-center gap-2 mb-2">
              <Users className={cn(
                "w-5 h-5",
                enablePerUser ? "text-primary" : "text-muted-foreground"
              )} />
              <span className={cn(
                "font-medium",
                enablePerUser ? "text-foreground" : "text-foreground/80"
              )}>
                Per-User
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              ${PRICING.perUserPricing.monthlyRate}/user/mo ({PRICING.perUserPricing.minimumUsers} user min)
            </p>
          </button>
        </div>

        {enablePerUser && totalUsers < PRICING.perUserPricing.minimumUsers && (
          <p className="mt-3 text-xs text-amber-600 dark:text-amber-400">
            Minimum {PRICING.perUserPricing.minimumUsers} users required. You'll be billed for {PRICING.perUserPricing.minimumUsers} users ({formatCurrency(perUserMonthly)}/mo).
          </p>
        )}
      </div>
    </BlurFade>
  );
};

export default PricingModelToggle;
