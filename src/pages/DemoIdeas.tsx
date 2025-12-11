import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus, Loader2, RefreshCw, ArrowLeft, Wand2 } from "lucide-react";
import HubLayout from "@/components/hub/HubLayout";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import UseCaseCard, { UseCaseSuggestion } from "@/components/hub/UseCaseCard";
import DemoIdeaForm, { DemoIdeaSubmission } from "@/components/hub/DemoIdeaForm";
import IdeasSummary from "@/components/hub/IdeasSummary";
import { useCustomer } from "@/contexts/CustomerContext";
import { useRewards } from "@/contexts/RewardsContext";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

// Mock suggestions as fallback
const mockSuggestions: UseCaseSuggestion[] = [{
  id: "1",
  title: "Internal Dashboard Builder",
  description: "Create a real-time dashboard for monitoring key business metrics with live data visualization and alerts.",
  industry: "Technology",
  role: "Engineering",
  complexity: "medium",
  estimatedDemoTime: "15 min",
  tags: ["dashboard", "analytics", "real-time"]
}, {
  id: "2",
  title: "Customer Onboarding Portal",
  description: "Build a self-service portal for new customer onboarding with step-by-step guides and progress tracking.",
  industry: "Technology",
  role: "Product",
  complexity: "complex",
  estimatedDemoTime: "20 min",
  tags: ["portal", "onboarding", "self-service"]
}, {
  id: "3",
  title: "Support Ticket Manager",
  description: "Create a ticket management interface for support workflows with assignment, status tracking, and SLA monitoring.",
  industry: "Technology",
  role: "Operations",
  complexity: "simple",
  estimatedDemoTime: "10 min",
  tags: ["support", "tickets", "workflow"]
}, {
  id: "4",
  title: "Marketing Campaign Builder",
  description: "Visual builder for creating and managing marketing campaigns with A/B testing and performance analytics.",
  industry: "Technology",
  role: "Marketing",
  complexity: "medium",
  estimatedDemoTime: "15 min",
  tags: ["marketing", "campaigns", "visual-builder"]
}, {
  id: "5",
  title: "Sales Pipeline Tracker",
  description: "Track deals through your pipeline with drag-and-drop stages, forecasting, and team performance metrics.",
  industry: "Technology",
  role: "Sales",
  complexity: "medium",
  estimatedDemoTime: "12 min",
  tags: ["sales", "pipeline", "CRM"]
}, {
  id: "6",
  title: "Employee Directory",
  description: "Interactive org chart and employee directory with search, filtering, and team structure visualization.",
  industry: "Technology",
  role: "HR",
  complexity: "simple",
  estimatedDemoTime: "8 min",
  tags: ["directory", "org-chart", "employees"]
}];
const createEmptyIdea = (): DemoIdeaSubmission => ({
  id: crypto.randomUUID(),
  title: "",
  description: "",
  priority: "medium",
  expectedOutcome: "",
  additionalContext: ""
});
const DemoIdeas: React.FC = () => {
  const {
    profile
  } = useCustomer();
  const {
    addPoints
  } = useRewards();
  const [suggestions, setSuggestions] = useState<UseCaseSuggestion[]>([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(true);
  const [customIdeas, setCustomIdeas] = useState<DemoIdeaSubmission[]>([createEmptyIdea()]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasAwardedPagePoints, setHasAwardedPagePoints] = useState(false);
  const loadSuggestions = async () => {
    setIsLoadingSuggestions(true);
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke("generate-use-cases", {
        body: {
          companyName: profile.companyName,
          industry: profile.industry,
          roles: [profile.contactRole]
        }
      });
      if (error) throw error;
      if (data?.suggestions) {
        setSuggestions(data.suggestions);
      } else {
        setSuggestions(mockSuggestions);
      }
    } catch (error) {
      console.error("Failed to load AI suggestions:", error);
      setSuggestions(mockSuggestions);
    } finally {
      setIsLoadingSuggestions(false);
    }
  };

  // Load suggestions on mount
  useEffect(() => {
    loadSuggestions();
  }, [profile]);
  const handleRefreshSuggestions = async () => {
    await loadSuggestions();
    toast.success("Generated new suggestions!");
  };

  // Award points for visiting page
  useEffect(() => {
    if (!hasAwardedPagePoints) {
      addPoints(10);
      setHasAwardedPagePoints(true);
    }
  }, [hasAwardedPagePoints, addPoints]);
  const handleSelectSuggestion = (id: string, selected: boolean) => {
    setSuggestions(prev => prev.map(s => s.id === id ? {
      ...s,
      selected
    } : s));
    if (selected) {
      addPoints(15);
      toast.success("Idea selected! +15 points");
    }
  };
  const handleCustomizeSuggestion = (suggestion: UseCaseSuggestion) => {
    // Pre-fill a new custom idea with the suggestion
    const newIdea: DemoIdeaSubmission = {
      id: crypto.randomUUID(),
      title: suggestion.title,
      description: suggestion.description,
      priority: suggestion.complexity === "complex" ? "high" : "medium",
      expectedOutcome: "",
      additionalContext: `Based on AI suggestion for ${suggestion.role}`
    };
    if (customIdeas.length < 3) {
      setCustomIdeas(prev => [...prev, newIdea]);
    } else {
      toast.error("Maximum 3 custom ideas allowed");
    }
  };
  const handleIdeaChange = (id: string, updates: Partial<DemoIdeaSubmission>) => {
    setCustomIdeas(prev => prev.map(idea => idea.id === id ? {
      ...idea,
      ...updates
    } : idea));
  };
  const handleRemoveIdea = (id: string) => {
    setCustomIdeas(prev => prev.filter(idea => idea.id !== id));
  };
  const handleAddIdea = () => {
    if (customIdeas.length < 3) {
      setCustomIdeas(prev => [...prev, createEmptyIdea()]);
    }
  };
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      const selectedCount = suggestions.filter(s => s.selected).length;
      const customCount = customIdeas.filter(i => i.title.trim()).length;
      const totalIdeas = selectedCount + customCount;

      // Award points
      const basePoints = customCount * 25;
      const bonusPoints = totalIdeas >= 3 ? 50 : 0;
      addPoints(basePoints + bonusPoints);
      setIsSubmitted(true);
      toast.success("Ideas submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit ideas. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const selectedSuggestions = suggestions.filter(s => s.selected);
  const validCustomIdeas = customIdeas.filter(i => i.title.trim() && i.description.trim());
  const totalIdeas = selectedSuggestions.length + validCustomIdeas.length;
  
  // Calculate potential points: 25 per custom idea + 50 bonus for 3+ total ideas
  // Note: Selected suggestions already award 15 points instantly, so we show what's left to earn on submit
  const customIdeaPoints = validCustomIdeas.length * 25;
  const bonusPoints = totalIdeas >= 3 ? 50 : 0;
  const pointsToEarn = customIdeaPoints + bonusPoints;
  return <HubLayout sectionId="demo-ideas" showBackground={false}>
      <section className="bg-background rounded-3xl pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">

          {/* Page Header */}
          <BlurFade delay={0.05}>
            <div className="max-w-2xl mb-12">
              <h1 className="text-[36px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                What should we build for you?
              </h1>
              <p className="text-lg text-muted-foreground mt-4">
                Submit your ideas and watch them come to life in your demo. 
                Your AE will prepare to build these live during your call.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* AI Suggestions Section */}
              <BlurFade delay={0.1}>
                <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-3xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      
                      <h2 className="text-xl font-semibold text-foreground">
                        Suggested for {profile.industry}
                      </h2>
                    </div>
                    <Button variant="outline" size="sm" onClick={handleRefreshSuggestions} disabled={isLoadingSuggestions} className="gap-2">
                      <RefreshCw className={`w-4 h-4 ${isLoadingSuggestions ? 'animate-spin' : ''}`} />
                      Regenerate
                    </Button>
                  </div>

                  {isLoadingSuggestions ? <div className="flex flex-col items-center justify-center py-12 gap-3">
                      <Loader2 className="w-8 h-8 text-primary animate-spin" />
                      <p className="text-sm text-muted-foreground">Generating personalized suggestions...</p>
                    </div> : <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {suggestions.map((suggestion, index) => <BlurFade key={suggestion.id} delay={0.15 + index * 0.05}>
                          <UseCaseCard suggestion={suggestion} onSelect={handleSelectSuggestion} onCustomize={handleCustomizeSuggestion} />
                        </BlurFade>)}
                    </div>}
                </div>
              </BlurFade>

              {/* Custom Ideas Section */}
              <BlurFade delay={0.3}>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    Your Custom Ideas
                  </h2>

                  <div className="space-y-4">
                    {customIdeas.map((idea, index) => <BlurFade key={idea.id} delay={0.35 + index * 0.05}>
                        <DemoIdeaForm idea={idea} index={index} onChange={handleIdeaChange} onRemove={handleRemoveIdea} canRemove={customIdeas.length > 1} />
                      </BlurFade>)}

                    {customIdeas.length < 3 && <Button variant="outline" onClick={handleAddIdea} className="w-full h-14 border-dashed border-2">
                        <Plus className="w-5 h-5 mr-2" />
                        Add Another Idea ({customIdeas.length}/3)
                      </Button>}
                  </div>
                </div>
              </BlurFade>
            </div>

            {/* Sidebar - Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <IdeasSummary selectedSuggestions={selectedSuggestions} customIdeas={customIdeas} onSubmit={handleSubmit} isSubmitting={isSubmitting} isSubmitted={isSubmitted} pointsToEarn={pointsToEarn} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </HubLayout>;
};
export default DemoIdeas;