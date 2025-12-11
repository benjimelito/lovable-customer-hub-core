import React from "react";
import { Link } from "react-router-dom";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import HubLayout from "@/components/hub/HubLayout";
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
  ArrowLeft,
  Sparkles,
  Trophy,
  MousePointer,
  BookOpen,
  Home
} from "lucide-react";

const hubSections = [
  {
    icon: Play,
    title: "Watch Demo",
    description: "See Lovable in action with an interactive product walkthrough and enterprise quote generator.",
    route: "/demo",
    features: ["Interactive pricing calculator", "ROI estimator", "Downloadable quotes"]
  },
  {
    icon: Lightbulb,
    title: "Demo Ideas",
    description: "Submit your custom demo ideas and receive AI-powered suggestions tailored to your company.",
    route: "/demo-ideas",
    features: ["AI-generated suggestions", "Custom idea submissions", "Industry-specific examples"]
  },
  {
    icon: BarChart3,
    title: "Usage Dashboard",
    description: "Track your organization's engagement metrics and project activity.",
    route: "/usage",
    features: ["Real-time analytics", "Department breakdowns", "Top projects overview"]
  },
  {
    icon: GitBranch,
    title: "Sales Process",
    description: "Follow your deal timeline, view next steps, and prepare for upcoming calls.",
    route: "/process",
    features: ["Deal stage tracking", "Pre-call agenda", "Timeline visualization"]
  },
  {
    icon: Brain,
    title: "AI Research",
    description: "Access company-specific insights powered by AI analysis.",
    route: "/research",
    features: ["Industry insights", "Pain point analysis", "Strategic recommendations"]
  },
  {
    icon: Users,
    title: "Social Proof",
    description: "Discover how companies like yours are succeeding with Lovable.",
    route: "/social",
    features: ["Case studies", "Testimonials", "Industry comparisons"]
  },
  {
    icon: CheckSquare,
    title: "Action Items",
    description: "Complete your pre-call checklist to earn points and prepare for our conversation.",
    route: "/actions",
    features: ["Trackable tasks", "Points rewards", "Progress indicators"]
  },
  {
    icon: MessageCircle,
    title: "FAQ & Chat",
    description: "Get instant answers to common questions through our AI-powered chatbot.",
    route: "/faq",
    features: ["AI chatbot", "Searchable FAQs", "Instant responses"]
  },
  {
    icon: Gift,
    title: "Earn Swag",
    description: "Redeem your earned points for exclusive Lovable merchandise.",
    route: "/swag",
    features: ["Exclusive merchandise", "Points redemption", "Premium items"]
  },
];

const Instructions: React.FC = () => {
  return (
    <HubLayout sectionId="instructions" showBackground={false}>
      <section className="bg-background rounded-3xl pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          {/* Back Link */}
          <BlurFade delay={0.1} inView>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Hub
            </Link>
          </BlurFade>

          {/* Header */}
          <BlurFade delay={0.2} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Complete Guide
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
              How to Navigate Your Customer Hub
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">
              Everything you need to know to get the most out of your personalized Lovable experience.
            </p>
          </BlurFade>

          {/* Getting Started */}
          <BlurFade delay={0.3} inView>
            <div className="bg-[#F7F4ED] rounded-3xl p-6 md:p-8 mb-8 border border-border/40">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">Getting Started</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background/50 rounded-xl p-4 border border-border/20">
                  <div className="flex items-center gap-3 mb-2">
                    <MousePointer className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">Navigate</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Click on any card from the home page to explore different sections of your hub.
                  </p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 border border-border/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">Earn Points</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Complete actions and tasks throughout the hub to earn points toward exclusive rewards.
                  </p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 border border-border/20">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">Ask Questions</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Use the AI chatbot in FAQ & Chat for instant answers to your questions.
                  </p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 border border-border/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Gift className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">Redeem Rewards</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Visit the Swag section to exchange your earned points for exclusive merchandise.
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* All Sections */}
          <BlurFade delay={0.4} inView>
            <h2 className="text-2xl font-semibold text-foreground mb-6">All Hub Sections</h2>
          </BlurFade>

          <div className="space-y-4">
            {hubSections.map((section, index) => (
              <BlurFade key={section.route} delay={0.5 + index * 0.05} inView>
                <Link to={section.route}>
                  <div className="bg-[#F7F4ED] rounded-2xl p-5 border border-border/40 hover:border-primary/30 transition-all group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <section.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {section.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {section.features.map((feature) => (
                            <span 
                              key={feature}
                              className="text-xs px-2 py-1 rounded-md bg-background/50 text-muted-foreground border border-border/20"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>

          {/* CTA */}
          <BlurFade delay={1} inView>
            <div className="mt-12 text-center">
              <Link to="/">
                <Button size="lg" className="gap-2">
                  <Home className="w-4 h-4" />
                  Return to Hub Home
                </Button>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </HubLayout>
  );
};

export default Instructions;
