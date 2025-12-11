import React from "react";
import HubLayout from "@/components/hub/HubLayout";
import CompanyCard from "@/components/hub/CompanyCard";
import CaseStudyCard from "@/components/hub/CaseStudyCard";
import TestimonialCarousel from "@/components/hub/TestimonialCarousel";
import AIMatchedBadge from "@/components/hub/AIMatchedBadge";
import { BlurFade } from "@/components/ui/blur-fade";
import { useCustomer } from "@/contexts/CustomerContext";
import { mockMatchedCompanies, mockCaseStudies, mockTestimonials } from "@/data/mockData";
import { Brain, TrendingUp, Building2 } from "lucide-react";

const SocialProof: React.FC = () => {
  const { profile } = useCustomer();
  const similarCompaniesCount = 47; // Mock dynamic count

  return (
    <HubLayout sectionId="social" showBackground={false}>
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background rounded-3xl">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16 space-y-12">
          {/* Page Header */}
          <BlurFade delay={0.05}>
            <div className="max-w-2xl">
              <h1 className="text-[36px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                Companies Like Yours
              </h1>
              <p className="text-lg text-muted-foreground mt-4">
                See how organizations similar to {profile.companyName} are succeeding with Lovable. 
                AI-matched based on your profile for maximum relevance.
              </p>
            </div>
          </BlurFade>

          {/* FOMO Banner */}
          <BlurFade delay={0.1}>
            <div className="p-4 bg-[#F7F4ED] rounded-2xl border border-[#ECEAE4] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#D4F9E4] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#4AE88A]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    <span className="text-[#4AE88A] font-semibold">{similarCompaniesCount}</span> similar companies chose Lovable this quarter
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Your industry peers are already building faster
                  </p>
                </div>
              </div>
              <AIMatchedBadge companyName={profile.companyName} />
            </div>
          </BlurFade>

          {/* AI Transparency Callout */}
          <BlurFade delay={0.15}>
            <div className="p-4 bg-[#D4E0F9]/30 rounded-2xl border border-[#4A7AE8]/20 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#D4E0F9] flex items-center justify-center shrink-0">
                <Brain className="w-4 h-4 text-[#4A7AE8]" />
              </div>
              <div>
                <p className="text-sm text-foreground">
                  <strong>AI-Curated Social Proof:</strong> These companies were matched using your company profile, 
                  industry, tech stack, and growth stage to maximize relevance.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Matched Companies Grid */}
          <div>
            <BlurFade delay={0.2}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-medium text-foreground flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-[#4A7AE8]" />
                    Companies Most Similar to You
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Based on {profile.companyName}'s profile, you're most similar to these organizations
                  </p>
                </div>
              </div>
            </BlurFade>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockMatchedCompanies.map((company, index) => (
                <BlurFade key={company.id} delay={0.2 + index * 0.05}>
                  <CompanyCard
                    name={company.name}
                    logo={company.logo}
                    industry={company.industry}
                    companySize={company.companySize}
                    matchScore={company.matchScore}
                    matchReasons={company.matchReasons}
                    testimonial={company.testimonial}
                  />
                </BlurFade>
              ))}
            </div>
          </div>

          {/* Case Studies Section */}
          <div>
            <BlurFade delay={0.35}>
              <div className="mb-6">
                <h2 className="text-2xl font-medium text-foreground">
                  Success Stories
                </h2>
                <p className="text-muted-foreground mt-1">
                  From evaluation to production in weeks, not months
                </p>
              </div>
            </BlurFade>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {mockCaseStudies.map((caseStudy, index) => (
                <BlurFade key={caseStudy.id} delay={0.35 + index * 0.05}>
                  <CaseStudyCard
                    company={caseStudy.company}
                    logo={caseStudy.logo}
                    title={caseStudy.title}
                    summary={caseStudy.summary}
                    industry={caseStudy.industry}
                    metrics={caseStudy.metrics}
                    quote={caseStudy.quote}
                    author={caseStudy.author}
                    role={caseStudy.role}
                  />
                </BlurFade>
              ))}
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div>
            <BlurFade delay={0.45}>
              <div className="mb-6">
                <h2 className="text-2xl font-medium text-foreground">
                  What Leaders Are Saying
                </h2>
                <p className="text-muted-foreground mt-1">
                  Hear directly from teams who've transformed their development workflow
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.5}>
              <TestimonialCarousel testimonials={mockTestimonials} />
            </BlurFade>
          </div>

          {/* CTA Section */}
          <BlurFade delay={0.55}>
            <div className="p-8 bg-primary text-primary-foreground rounded-3xl text-center">
              <h3 className="text-2xl font-medium mb-3">
                Ready to Join Them?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
                {similarCompaniesCount} companies like {profile.companyName} have already made the switch. 
                Let's discuss how you can achieve similar results.
              </p>
              <a 
                href="/process" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Start Your Journey
              </a>
            </div>
          </BlurFade>
        </div>
      </section>
    </HubLayout>
  );
};

export default SocialProof;
