import React from "react";
import { Shield } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { BlurFade } from "@/components/ui/blur-fade";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { PRICING, formatCurrency } from "@/lib/pricing";
import { Info } from "lucide-react";

interface PlatformFeeSliderProps {
  platformFee: number;
  onPlatformFeeChange: (fee: number) => void;
}

const PlatformFeeSlider: React.FC<PlatformFeeSliderProps> = ({
  platformFee,
  onPlatformFeeChange,
}) => {
  const handleSliderChange = ([value]: number[]) => {
    // Snap to nearest notch
    const nearestNotch = PRICING.platformFee.notches.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
    
    // If within 5000 of a notch, snap to it
    if (Math.abs(value - nearestNotch) < 5000) {
      onPlatformFeeChange(nearestNotch);
    } else {
      onPlatformFeeChange(value);
    }
  };

  return (
    <BlurFade delay={0.35}>
      <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-3xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4F9E4] border border-[#4AE88A]/30 flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#2B8A4B]" />
            </div>
            <h3 className="text-xl font-medium text-foreground">Platform Fee</h3>
          </div>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="p-1.5 rounded-lg hover:bg-background/50 transition-colors">
                <Info className="w-4 h-4 text-muted-foreground" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left" className="max-w-[250px]">
              <p className="text-sm">
                Platform fee includes SSO, dedicated support, SLA guarantees, and enterprise features.
              </p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-foreground">Annual Platform Fee</span>
            <span className="text-2xl font-semibold text-primary">{formatCurrency(platformFee)}</span>
          </div>
          
          <Slider
            value={[platformFee]}
            onValueChange={handleSliderChange}
            min={PRICING.platformFee.min}
            max={PRICING.platformFee.max}
            step={1000}
            className="w-full"
          />
          
          <div className="flex justify-between">
            {PRICING.platformFee.notches.map((notch) => (
              <button
                key={notch}
                onClick={() => onPlatformFeeChange(notch)}
                className={`text-xs transition-colors ${
                  platformFee === notch
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {formatCurrency(notch)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 p-3 bg-background/50 rounded-xl border border-border/50">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">Includes:</span> SSO integration, 99.9% SLA, dedicated support, security certifications, custom contracts
          </p>
        </div>
      </div>
    </BlurFade>
  );
};

export default PlatformFeeSlider;
