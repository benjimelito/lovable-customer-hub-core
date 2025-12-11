import React, { useState } from "react";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { BackgroundGrain } from "@/components/BackgroundGrain";
import { BlurFade } from "@/components/ui/blur-fade";
import Navigation from "@/components/Navigation";
import HeroVideoPlayer from "@/components/HeroVideoPlayer";
import HubCard from "@/components/hub/HubCard";
import ProgressBadge from "@/components/hub/ProgressBadge";
import AEInfoCard from "@/components/hub/AEInfoCard";
import WelcomeModal from "@/components/hub/WelcomeModal";
import { PitchDeck } from "@/components/presentation";
import { useCustomer } from "@/contexts/CustomerContext";
import { mockAccountExecutive } from "@/data/mockData";
import { 
  Play, 
  BarChart3, 
  GitBranch, 
  Brain, 
  Users, 
  CheckSquare, 
  MessageCircle, 
  Gift,
  Lightbulb,
  Presentation
} from "lucide-react";

const hubSections = [
  {
    title: "Watch Demo",
    description: "See Lovable in action with a guided product walkthrough",
    icon: Play,
    route: "/demo",
    accentColor: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Demo Ideas",
    description: "Submit custom ideas and get AI-powered suggestions",
    icon: Lightbulb,
    route: "/demo-ideas",
    accentColor: "bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Usage Dashboard",
    description: "Your project metrics and engagement analytics",
    icon: BarChart3,
    route: "/usage",
    accentColor: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Sales Process",
    description: "Deal timeline, next steps, and pre-call agenda",
    icon: GitBranch,
    route: "/process",
    accentColor: "bg-purple-500/10 border-purple-500/20",
  },
  {
    title: "AI Research",
    description: "Company-specific insights powered by AI",
    icon: Brain,
    route: "/research",
    accentColor: "bg-pink-500/10 border-pink-500/20",
  },
  {
    title: "Social Proof",
    description: "Companies like you succeeding with Lovable",
    icon: Users,
    route: "/social",
    accentColor: "bg-orange-500/10 border-orange-500/20",
  },
  {
    title: "Action Items",
    description: "Pre-call checklist to prepare for our conversation",
    icon: CheckSquare,
    route: "/actions",
    accentColor: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    title: "FAQ & Chat",
    description: "Common questions answered by AI",
    icon: MessageCircle,
    route: "/faq",
    accentColor: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    title: "Earn Swag",
    description: "Redeem points for exclusive Lovable merchandise",
    icon: Gift,
    route: "/swag",
    accentColor: "bg-rose-500/10 border-rose-500/20",
  },
];

const CustomerHubHome: React.FC = () => {
  const { profile } = useCustomer();
  const { companyName, contactName } = profile;
  const [showPitchDeck, setShowPitchDeck] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-background transition-none">
      <Navigation />
      <BackgroundGradient />
      <BackgroundGrain />
      
      {/* Welcome Modal (first-time visitors) */}
      <WelcomeModal />
      
      {/* Pitch Deck Modal */}
      <PitchDeck isOpen={showPitchDeck} onClose={() => setShowPitchDeck(false)} />
      
      <div className="container-home">
        <div className="flex flex-col z-10">
          {/* Hero Section */}
          <section className="relative flex min-h-[780px] items-center justify-center overflow-hidden rounded-lg bg-transparent py-24 text-foreground lg:py-24">
            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 text-center gap-6">
              
              <BlurFade delay={0.1} inView>
                <p className="text-xs font-normal uppercase tracking-wide text-white">
                  Your Personal Customer Hub
                </p>
              </BlurFade>

              <div className="flex flex-col items-center gap-5">
                <BlurFade delay={0.2} inView>
                  <h1 
                    style={{ letterSpacing: "-0.03em" }} 
                    className="max-w-3xl text-center text-5xl md:text-6xl font-semibold leading-[110%] text-white"
                  >
                    Welcome, {contactName} from {companyName}
                  </h1>
                </BlurFade>
                <BlurFade delay={0.3} inView>
                  <p className="max-w-[600px] text-base leading-6 text-white/80">
                    Explore your personalized hub to learn about Lovable, track your progress, 
                    and prepare for our upcoming conversation.
                  </p>
                </BlurFade>
              </div>

              <BlurFade delay={0.4} inView>
                <ProgressBadge />
              </BlurFade>

            </div>
          </section>
          
          {/* Video Player */}
          <HeroVideoPlayer />
        </div>
      </div>

      <div className="container-home">
        <div className="flex flex-col z-10">
          {/* Hub Cards Section */}
          <section className="pt-64 pb-24 z-10 bg-background rounded-3xl">
            <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
              <div className="mb-10 flex flex-col gap-6">
                <BlurFade delay={0.2} inView>
                  <h2 className="text-left text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                    Explore your hub
                  </h2>
                </BlurFade>
                <BlurFade delay={0.3} inView>
                  <p className="text-left text-base leading-[22px] tracking-[-0.01em] text-muted-foreground max-w-[600px]">
                    Discover everything we've prepared for {companyName}. Complete sections to earn points 
                    and unlock exclusive rewards.
                  </p>
                </BlurFade>
              </div>

              {/* Cards Grid */}
              <BlurFade delay={0.4} inView>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Pitch Deck Card - First */}
                  <HubCard
                    title="Pitch Deck"
                    description="View our interactive presentation tailored for your team"
                    icon={Presentation}
                    onClick={() => setShowPitchDeck(true)}
                    accentColor="bg-violet-500/10 border-violet-500/20"
                  />
                  {hubSections.map((section) => (
                    <HubCard
                      key={section.route}
                      title={section.title}
                      description={section.description}
                      icon={section.icon}
                      route={section.route}
                      accentColor={section.accentColor}
                    />
                  ))}
                </div>
              </BlurFade>

              {/* Account Executive Section */}
              <div className="mt-20">
                <div className="mb-8 flex flex-col gap-3">
                  <BlurFade delay={0.2} inView>
                    <h2 className="text-left text-3xl font-semibold leading-[110%] tracking-[-0.02em] text-foreground">
                      Your Dedicated Partner
                    </h2>
                  </BlurFade>
                  <BlurFade delay={0.3} inView>
                    <p className="text-left text-base leading-[22px] tracking-[-0.01em] text-muted-foreground max-w-[500px]">
                      Ready to help you transform how {companyName} builds software.
                    </p>
                  </BlurFade>
                </div>
                <AEInfoCard ae={mockAccountExecutive} />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-5 text-center">
              <div className="flex flex-col items-center gap-8">
                <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <div className="space-y-4">
                    <img src="/images/lovable-logo-text-light.svg" alt="Lovable" className="h-8 w-auto" />
                    <p className="text-muted-foreground text-sm">Made with Lovable</p>
                  </div>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CustomerHubHome;
