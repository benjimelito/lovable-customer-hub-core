import React from "react";
import { Check, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { DemoIdeaSubmission } from "./DemoIdeaForm";
import { UseCaseSuggestion } from "./UseCaseCard";
interface IdeasSummaryProps {
  selectedSuggestions: UseCaseSuggestion[];
  customIdeas: DemoIdeaSubmission[];
  onSubmit: () => void;
  isSubmitting: boolean;
  isSubmitted: boolean;
  pointsToEarn: number;
}

const POINTS_PER_CUSTOM_IDEA = 25;
const BONUS_THRESHOLD = 3;
const BONUS_POINTS = 50;
const IdeasSummary: React.FC<IdeasSummaryProps> = ({
  selectedSuggestions,
  customIdeas,
  onSubmit,
  isSubmitting,
  isSubmitted,
  pointsToEarn
}) => {
  const totalIdeas = selectedSuggestions.length + customIdeas.filter(i => i.title.trim()).length;
  const validCustomIdeas = customIdeas.filter(i => i.title.trim() && i.description.trim());
  const hasHighPriority = validCustomIdeas.some(i => i.priority === "high" || i.priority === "medium");
  const canSubmit = totalIdeas >= 1 && (selectedSuggestions.length > 0 || validCustomIdeas.length > 0 && hasHighPriority);
  if (isSubmitted) {
    return <BlurFade delay={0.1}>
        <div className="bg-[#D4F9E4] border border-[#4AE88A]/30 rounded-2xl p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#4AE88A]/20 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-[#2B8A4B]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2B8A4B] mb-2">Ideas Submitted!</h3>
          <p className="text-sm text-[#2B8A4B]/80 mb-4">
            Your AE will review these ideas before your demo call. You can edit them anytime until then.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4AE88A]/20 rounded-full">
            <Gift className="w-4 h-4 text-[#2B8A4B]" />
            <span className="text-sm font-medium text-[#2B8A4B]">+{pointsToEarn} points earned!</span>
          </div>
        </div>
      </BlurFade>;
  }
  return <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-2xl p-6">
      <h3 className="text-lg font-medium text-foreground mb-4">Summary</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Selected Suggestions</span>
          <span className="font-medium text-foreground">{selectedSuggestions.length}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Custom Ideas</span>
          <span className="font-medium text-foreground">{validCustomIdeas.length}</span>
        </div>
        <div className="h-px bg-border" />
        <div className="flex justify-between items-center">
          <span className="font-medium text-foreground">Total Ideas</span>
          <span className="text-lg font-semibold text-primary">{totalIdeas}</span>
        </div>
      </div>

      {/* Points Preview */}
      <div className="p-3 bg-primary/5 rounded-xl border border-primary/20 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">
            {pointsToEarn > 0 ? (
              <>+{pointsToEarn} points on submit</>
            ) : (
              <>Add ideas to earn points</>
            )}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {totalIdeas >= 3 ? (
            <span className="text-green-600 dark:text-green-400">✓ 50-point bonus unlocked!</span>
          ) : (
            <>Submit {3 - totalIdeas} more idea{3 - totalIdeas !== 1 ? 's' : ''} for 50-point bonus</>
          )}
        </p>
      </div>

      {/* Validation Messages */}
      {totalIdeas === 0 && <p className="text-xs text-amber-600 dark:text-amber-400 mb-4">
          Select suggestions or add at least 1 custom idea
        </p>}
      {validCustomIdeas.length > 0 && !hasHighPriority && selectedSuggestions.length === 0 && <p className="text-xs text-amber-600 dark:text-amber-400 mb-4">
          At least one idea must be high or medium priority
        </p>}

      <Button onClick={onSubmit} disabled={!canSubmit || isSubmitting} className="w-full" size="lg">
        {isSubmitting ? "Submitting..." : `Submit ${totalIdeas} Idea${totalIdeas !== 1 ? "s" : ""}`}
      </Button>

      <p className="text-xs text-muted-foreground text-center mt-3">
        You can edit your ideas until your demo call
      </p>
    </div>;
};
export default IdeasSummary;