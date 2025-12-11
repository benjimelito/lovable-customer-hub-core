import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Lightbulb, ArrowRight } from "lucide-react";
import HubLayout from "@/components/hub/HubLayout";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  DemoIntro,
  UsageEstimator,
  CommitmentSelector,
  PlatformFeeSlider,
  PricingModelToggle,
  QuoteSummary,
  CostBreakdown,
  ROICalculator,
  QuoteActions,
} from "@/components/demo";
import { useCustomer } from "@/contexts/CustomerContext";
import { useRewards } from "@/contexts/RewardsContext";
import {
  PRICING,
  CommitmentTier,
  UserBreakdown,
  calculateMonthlyCredits,
  calculateAnnualCredits,
  calculateEffectiveCreditCost,
  calculateSavings,
  findOptimalCommitment,
  calculatePerUserPricing,
  decodeQuoteParams,
  encodeQuoteParams,
  QuoteParams,
  getCreditRate,
} from "@/lib/pricing";

const DemoPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { profile } = useCustomer();
  const { addPoints } = useRewards();
  const [hasGeneratedQuote, setHasGeneratedQuote] = useState(false);

  // Initialize from URL params or defaults
  const initialParams = useMemo(() => {
    if (searchParams.toString()) {
      return decodeQuoteParams(searchParams.toString());
    }
    return null;
  }, []);

  // State
  const [mode, setMode] = useState<"simple" | "advanced">(initialParams?.mode || "simple");
  const [users, setUsers] = useState(initialParams?.users || 100);
  const [breakdown, setBreakdown] = useState<UserBreakdown>({
    power: initialParams?.powerUsers || 10,
    normal: initialParams?.normalUsers || 50,
    casual: initialParams?.casualUsers || 40,
  });
  const [commitment, setCommitment] = useState<CommitmentTier>(initialParams?.commitment || 0);
  const [platformFee, setPlatformFee] = useState(initialParams?.platformFee || PRICING.platformFee.default);
  const [enablePerUser, setEnablePerUser] = useState(initialParams?.enablePerUser || false);

  // Calculate credits
  const monthlyCredits = calculateMonthlyCredits(users, mode, breakdown);
  const annualCredits = calculateAnnualCredits(monthlyCredits);

  // Calculate costs
  const { effectiveCost: creditCost, projectedUsage, usesFullCommitment } = 
    calculateEffectiveCreditCost(annualCredits, commitment);
  const savings = calculateSavings(annualCredits, commitment);
  const totalAnnual = platformFee + creditCost;
  const monthlyEquivalent = Math.round(totalAnnual / 12);
  
  const totalUsers = mode === "simple" ? users : breakdown.power + breakdown.normal + breakdown.casual;
  const costPerUser = totalUsers > 0 ? monthlyEquivalent / totalUsers : 0;

  // Find optimal tier
  const optimalResult = findOptimalCommitment(annualCredits, commitment);
  const optimalSavings = optimalResult.currentSavingsIfSwitched;
  const optimalTierLabel = optimalResult.optimalLabel;
  const optimalTier = optimalResult.optimalTier;

  // Per-user pricing
  const perUserPricing = calculatePerUserPricing(totalUsers);

  // Get tier info for PDF
  const tierInfo = getCreditRate(commitment);

  // Build quote params for sharing
  const quoteParams: QuoteParams = useMemo(() => ({
    company: profile.companyName,
    domain: undefined,
    platformFee,
    mode,
    users: mode === "simple" ? users : undefined,
    powerUsers: mode === "advanced" ? breakdown.power : undefined,
    normalUsers: mode === "advanced" ? breakdown.normal : undefined,
    casualUsers: mode === "advanced" ? breakdown.casual : undefined,
    enablePerUser,
    commitment,
  }), [profile.companyName, platformFee, mode, users, breakdown, enablePerUser, commitment]);

  // Update URL when params change (debounced)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const encoded = encodeQuoteParams(quoteParams);
      setSearchParams(encoded, { replace: true });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [quoteParams, setSearchParams]);

  // Award points for generating a quote (once)
  useEffect(() => {
    if (!hasGeneratedQuote && (users !== 100 || commitment !== 0 || platformFee !== PRICING.platformFee.default)) {
      setHasGeneratedQuote(true);
      addPoints(15);
    }
  }, [users, commitment, platformFee, hasGeneratedQuote, addPoints]);

  return (
    <HubLayout sectionId="demo" showBackground={false}>
      <section className="bg-background rounded-3xl pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          {/* Page Header */}
          <BlurFade delay={0}>
            <div className="max-w-2xl mb-12">
              <h1 className="text-[36px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                Enterprise Quote Generator
              </h1>
              <p className="text-lg text-muted-foreground mt-4">
                Explore pricing options and generate a custom quote for {profile.companyName}
              </p>
            </div>
          </BlurFade>

          {/* Demo Intro */}
          <div className="mb-8">
            <DemoIntro />
          </div>

          {/* Main Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Inputs */}
            <div className="lg:col-span-2 space-y-6">
              <UsageEstimator
                mode={mode}
                onModeChange={setMode}
                users={users}
                onUsersChange={setUsers}
                breakdown={breakdown}
                onBreakdownChange={setBreakdown}
                monthlyCredits={monthlyCredits}
                annualCredits={annualCredits}
              />

              <CommitmentSelector
                commitment={commitment}
                onCommitmentChange={setCommitment}
                optimalTier={optimalTier}
              />

              <PlatformFeeSlider
                platformFee={platformFee}
                onPlatformFeeChange={setPlatformFee}
              />

              <PricingModelToggle
                enablePerUser={enablePerUser}
                onToggle={setEnablePerUser}
                totalUsers={totalUsers}
              />
            </div>

            {/* Right Column - Summary */}
            <div className="lg:col-span-1">
              <QuoteSummary
                platformFee={platformFee}
                creditCost={creditCost}
                totalAnnual={totalAnnual}
                monthlyEquivalent={monthlyEquivalent}
                costPerUser={costPerUser}
                savings={savings}
                optimalSavings={optimalSavings}
                optimalTierLabel={optimalTierLabel}
                usesFullCommitment={usesFullCommitment}
                enablePerUser={enablePerUser}
                perUserAnnual={perUserPricing.annual}
              />
            </div>
          </div>

          {/* Additional Sections */}
          <div className="mt-8 space-y-6">
            <CostBreakdown
              mode={mode}
              users={users}
              breakdown={breakdown}
              monthlyCredits={monthlyCredits}
              annualCredits={annualCredits}
              commitment={commitment}
              creditCost={creditCost}
              projectedUsage={projectedUsage}
              usesFullCommitment={usesFullCommitment}
            />

            <ROICalculator commitment={commitment} />

            <QuoteActions
              quoteParams={quoteParams}
              totalAnnual={enablePerUser ? perUserPricing.annual : totalAnnual}
              pdfData={{
                companyName: profile.companyName,
                totalUsers,
                annualCredits,
                monthlyCredits,
                platformFee,
                creditCost,
                totalAnnual: enablePerUser ? perUserPricing.annual : totalAnnual,
                monthlyEquivalent: enablePerUser ? Math.round(perUserPricing.annual / 12) : monthlyEquivalent,
                costPerUser,
                savings,
                tierLabel: tierInfo.tier,
                tierRate: tierInfo.rate,
                enablePerUser,
                mode,
                breakdown: mode === "advanced" ? breakdown : undefined,
              }}
            />

            {/* Demo Ideas CTA */}
            <BlurFade delay={0.6}>
              <Link to="/demo-ideas" className="block">
                <div className="bg-gradient-to-r from-[#F7F4ED] to-[#F0EDE4] dark:from-card dark:to-card/80 border border-[#D8D6CF] dark:border-border rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border border-amber-200 dark:border-amber-700 flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          Have your own demo idea?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Submit custom ideas and get AI-powered suggestions tailored to your industry
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </BlurFade>
          </div>
        </div>
      </section>
    </HubLayout>
  );
};

export default DemoPage;
