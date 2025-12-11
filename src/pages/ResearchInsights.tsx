import React from "react";
import HubLayout from "@/components/hub/HubLayout";
import StrategyCard from "@/components/hub/StrategyCard";
import PainPointCard from "@/components/hub/PainPointCard";
import QuestionCard from "@/components/hub/QuestionCard";
import ResearchSourcesList from "@/components/hub/ResearchSourcesList";
import { BlurFade } from "@/components/ui/blur-fade";
import { useCustomer } from "@/contexts/CustomerContext";
import { mockResearch } from "@/data/mockData";
import { Brain } from "lucide-react";
import { toast } from "sonner";

const ResearchInsights: React.FC = () => {
  const { profile } = useCustomer();

  const handleRegenerate = () => {
    toast.info("Regenerating research insights...", {
      description: "This would trigger an AI regeneration in production.",
    });
  };

  // Group questions by category
  const technicalQuestions = mockResearch.questions.filter(q => q.category === "technical");
  const businessQuestions = mockResearch.questions.filter(q => q.category === "business");
  const adoptionQuestions = mockResearch.questions.filter(q => q.category === "adoption");

  return (
    <HubLayout sectionId="research" showBackground={false}>
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background rounded-3xl">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16 space-y-12">
          {/* Page Header */}
          <BlurFade delay={0.05}>
            <div className="max-w-2xl">
              <h1 className="text-[36px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                We've Done Our Homework
              </h1>
              <p className="text-lg text-muted-foreground mt-4">
                AI-powered insights tailored to {profile.companyName}'s strategic priorities. 
                Here's what we learned to make our conversation more valuable.
              </p>
            </div>
          </BlurFade>

          {/* AI Transparency Callout */}
          <BlurFade delay={0.1}>
            <div className="p-4 bg-[#D4E0F9]/30 dark:bg-primary/10 rounded-2xl border border-[#4A7AE8]/20 dark:border-primary/20 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#D4E0F9] dark:bg-primary/20 flex items-center justify-center shrink-0">
                <Brain className="w-4 h-4 text-[#4A7AE8] dark:text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground">
                  <strong>AI-Generated Analysis:</strong> This research was compiled by Lovable's AI from public sources. 
                  We're transparent about our methodology and confidence levels.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  This demonstrates the same AI capabilities you'll have access to with Lovable.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Company Strategy Section */}
          <div>
            <BlurFade delay={0.15}>
              <h2 className="text-2xl font-medium text-foreground mb-6 flex items-center gap-3">
                <Brain className="w-6 h-6 text-[#4A7AE8]" />
                Company Strategy Analysis
              </h2>
            </BlurFade>
            <StrategyCard
              summary={mockResearch.strategy.summary}
              aiInitiatives={mockResearch.strategy.aiInitiatives}
              technologyFocus={mockResearch.strategy.technologyFocus}
              marketPosition={mockResearch.strategy.marketPosition}
              competitiveAdvantages={mockResearch.strategy.competitiveAdvantages}
            />
          </div>

          {/* Pain Points Section */}
          <div>
            <BlurFade delay={0.2}>
              <div className="mb-6">
                <h2 className="text-2xl font-medium text-foreground">
                  Challenges We've Identified
                </h2>
                <p className="text-muted-foreground mt-2">
                  Pain points that Lovable can address for {profile.companyName}
                </p>
              </div>
            </BlurFade>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockResearch.painPoints.map((painPoint, index) => (
                <BlurFade key={painPoint.id} delay={0.2 + index * 0.05}>
                  <PainPointCard
                    category={painPoint.category}
                    title={painPoint.title}
                    description={painPoint.description}
                    source={painPoint.source}
                    relevanceScore={painPoint.relevanceScore}
                  />
                </BlurFade>
              ))}
            </div>
          </div>

          {/* Research Questions Section */}
          <div>
            <BlurFade delay={0.3}>
              <div className="mb-6">
                <h2 className="text-2xl font-medium text-foreground">
                  Let's Discuss What Matters
                </h2>
                <p className="text-muted-foreground mt-2">
                  Questions we'd like to explore in our conversation
                </p>
              </div>
            </BlurFade>

            <div className="space-y-6">
              {/* Technical Questions */}
              {technicalQuestions.length > 0 && (
                <div>
                  <BlurFade delay={0.35}>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                      Technical
                    </h3>
                  </BlurFade>
                  <div className="space-y-2">
                    {technicalQuestions.map((q, index) => (
                      <BlurFade key={q.id} delay={0.35 + index * 0.03}>
                        <QuestionCard
                          question={q.question}
                          context={q.context}
                          category={q.category}
                        />
                      </BlurFade>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Questions */}
              {businessQuestions.length > 0 && (
                <div>
                  <BlurFade delay={0.4}>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                      Business
                    </h3>
                  </BlurFade>
                  <div className="space-y-2">
                    {businessQuestions.map((q, index) => (
                      <BlurFade key={q.id} delay={0.4 + index * 0.03}>
                        <QuestionCard
                          question={q.question}
                          context={q.context}
                          category={q.category}
                        />
                      </BlurFade>
                    ))}
                  </div>
                </div>
              )}

              {/* Adoption Questions */}
              {adoptionQuestions.length > 0 && (
                <div>
                  <BlurFade delay={0.45}>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                      Adoption
                    </h3>
                  </BlurFade>
                  <div className="space-y-2">
                    {adoptionQuestions.map((q, index) => (
                      <BlurFade key={q.id} delay={0.45 + index * 0.03}>
                        <QuestionCard
                          question={q.question}
                          context={q.context}
                          category={q.category}
                        />
                      </BlurFade>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Research Transparency */}
          <div>
            <BlurFade delay={0.5}>
              <h2 className="text-2xl font-medium text-foreground mb-6">
                How This Research Was Generated
              </h2>
            </BlurFade>
            <BlurFade delay={0.55}>
              <ResearchSourcesList
                sources={mockResearch.metadata.sources}
                methodology={mockResearch.metadata.methodology}
                confidenceScore={mockResearch.metadata.confidenceScore}
                generatedAt={mockResearch.metadata.generatedAt}
                onRegenerate={handleRegenerate}
              />
            </BlurFade>
          </div>

          {/* CTA Section */}
          <BlurFade delay={0.6}>
            <div className="p-8 bg-primary text-primary-foreground rounded-3xl text-center">
              <h3 className="text-2xl font-medium mb-3">
                Ready to Dive Deeper?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
                Let's discuss these insights and explore how Lovable can address {profile.companyName}'s specific challenges.
              </p>
              <a 
                href="/process" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                View Partnership Journey
              </a>
            </div>
          </BlurFade>
        </div>
      </section>
    </HubLayout>
  );
};

export default ResearchInsights;
