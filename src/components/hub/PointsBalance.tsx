import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Gift, Coins } from "lucide-react";
import { useRewards } from "@/contexts/RewardsContext";

interface PointsBalanceProps {
  nextItemCost?: number;
  nextItemName?: string;
}

const PointsBalance: React.FC<PointsBalanceProps> = ({ 
  nextItemCost,
  nextItemName 
}) => {
  const { points, maxPoints } = useRewards();
  const progress = maxPoints > 0 ? (points / maxPoints) * 100 : 0;
  const pointsToNext = nextItemCost ? Math.max(0, nextItemCost - points) : 0;

  return (
    <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-3xl p-6">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        {/* Points Display */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Coins className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Your Balance</p>
            <div className="flex items-baseline gap-2">
              <motion.span 
                key={points}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl font-semibold text-foreground"
              >
                {points}
              </motion.span>
              <span className="text-lg text-muted-foreground">/ {maxPoints} pts</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Progress to max</span>
            <span className="text-sm font-medium text-foreground">{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-[#D8D6CF]/60 dark:bg-muted/50 rounded-full overflow-hidden border border-[#D8D6CF] dark:border-border">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full bg-primary rounded-full"
            />
          </div>
        </div>

        {/* Next Item Hint */}
        {nextItemCost && nextItemName && pointsToNext > 0 && (
          <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl border border-border/50">
            <Gift className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">{nextItemName}</p>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary font-medium">{pointsToNext} more pts</span> to unlock
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Earn More Points Hint */}
      <div className="mt-4 pt-4 border-t border-[#D8D6CF] dark:border-border flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          Complete <a href="/actions" className="text-primary hover:underline">Action Items</a> to earn more points
        </p>
      </div>
    </div>
  );
};

export default PointsBalance;
