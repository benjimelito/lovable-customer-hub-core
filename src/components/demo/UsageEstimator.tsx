import React from "react";
import { Users, Zap, User, Coffee } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { BlurFade } from "@/components/ui/blur-fade";
import { PRICING, UserBreakdown, formatNumber } from "@/lib/pricing";

interface UsageEstimatorProps {
  mode: "simple" | "advanced";
  onModeChange: (mode: "simple" | "advanced") => void;
  users: number;
  onUsersChange: (users: number) => void;
  breakdown: UserBreakdown;
  onBreakdownChange: (breakdown: UserBreakdown) => void;
  monthlyCredits: number;
  annualCredits: number;
}

const UsageEstimator: React.FC<UsageEstimatorProps> = ({
  mode,
  onModeChange,
  users,
  onUsersChange,
  breakdown,
  onBreakdownChange,
  monthlyCredits,
  annualCredits,
}) => {
  const handleModeToggle = (checked: boolean) => {
    onModeChange(checked ? "advanced" : "simple");
  };

  return (
    <BlurFade delay={0.2}>
      <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-3xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4E0F9] border border-[#9CAEFF] flex items-center justify-center">
              <Users className="w-5 h-5 text-[#4A7AE8]" />
            </div>
            <h3 className="text-xl font-medium text-foreground">Usage Estimator</h3>
          </div>
          
          <div className="flex items-center gap-2">
            <Label htmlFor="mode-toggle" className="text-sm text-muted-foreground">
              Advanced
            </Label>
            <Switch
              id="mode-toggle"
              checked={mode === "advanced"}
              onCheckedChange={handleModeToggle}
            />
          </div>
        </div>

        {mode === "simple" ? (
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-foreground">Total Users</span>
                <span className="text-lg font-semibold text-primary">{formatNumber(users)}</span>
              </div>
              <Slider
                value={[users]}
                onValueChange={([val]) => onUsersChange(val)}
                min={30}
                max={10000}
                step={10}
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>30</span>
                <span>10,000</span>
              </div>
            </div>
            
            <div className="p-4 bg-background/50 rounded-xl border border-border/50">
              <p className="text-sm text-muted-foreground mb-1">Credits per user</p>
              <p className="text-lg font-medium text-foreground">{PRICING.userCredits.standard} credits/month</p>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Power Users */}
            <div className="p-4 bg-background/50 rounded-xl border border-border/50">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium text-foreground">Power Users</span>
                <span className="ml-auto text-sm text-muted-foreground">{PRICING.userCredits.power} credits/mo</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-muted-foreground">Heavy builders</span>
                <span className="text-sm font-semibold text-primary">{breakdown.power}</span>
              </div>
              <Slider
                value={[breakdown.power]}
                onValueChange={([val]) => onBreakdownChange({ ...breakdown, power: val })}
                min={0}
                max={500}
                step={5}
              />
            </div>

            {/* Normal Users */}
            <div className="p-4 bg-background/50 rounded-xl border border-border/50">
              <div className="flex items-center gap-2 mb-3">
                <User className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-foreground">Normal Users</span>
                <span className="ml-auto text-sm text-muted-foreground">{PRICING.userCredits.normal} credits/mo</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-muted-foreground">Regular users</span>
                <span className="text-sm font-semibold text-primary">{breakdown.normal}</span>
              </div>
              <Slider
                value={[breakdown.normal]}
                onValueChange={([val]) => onBreakdownChange({ ...breakdown, normal: val })}
                min={0}
                max={5000}
                step={10}
              />
            </div>

            {/* Casual Users */}
            <div className="p-4 bg-background/50 rounded-xl border border-border/50">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-foreground">Casual Users</span>
                <span className="ml-auto text-sm text-muted-foreground">{PRICING.userCredits.casual} credits/mo</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-muted-foreground">Light users</span>
                <span className="text-sm font-semibold text-primary">{breakdown.casual}</span>
              </div>
              <Slider
                value={[breakdown.casual]}
                onValueChange={([val]) => onBreakdownChange({ ...breakdown, casual: val })}
                min={0}
                max={5000}
                step={10}
              />
            </div>

            <div className="text-sm text-muted-foreground text-center">
              Total users: <span className="font-medium text-foreground">{formatNumber(breakdown.power + breakdown.normal + breakdown.casual)}</span>
            </div>
          </div>
        )}

        {/* Credits Summary */}
        <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Monthly Credits</p>
              <p className="text-xl font-semibold text-foreground">{formatNumber(monthlyCredits)}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Annual Credits</p>
              <p className="text-xl font-semibold text-primary">{formatNumber(annualCredits)}</p>
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

export default UsageEstimator;
