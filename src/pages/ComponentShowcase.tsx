import React from "react";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { BackgroundGrain } from "@/components/BackgroundGrain";
import Navigation from "@/components/Navigation";
import { BlurFade } from "@/components/ui/blur-fade";

// Showcase Components
import HeroSection from "@/components/showcase/HeroSection";
import UseCaseCard from "@/components/showcase/UseCaseCard";
import TestimonialCard from "@/components/showcase/TestimonialCard";
import FeaturedTestimonial from "@/components/showcase/FeaturedTestimonial";
import StatCard from "@/components/showcase/StatCard";
import FeatureListSection from "@/components/showcase/FeatureListSection";
import SecurityCard from "@/components/showcase/SecurityCard";
import FAQSection from "@/components/showcase/FAQSection";
import CTASection from "@/components/showcase/CTASection";
import FeatureShowcaseCard from "@/components/showcase/FeatureShowcaseCard";
import SimpleCTASection from "@/components/showcase/SimpleCTASection";
import EnterpriseSupportSection from "@/components/showcase/EnterpriseSupportSection";
import SectionHeader from "@/components/showcase/SectionHeader";
import Footer from "@/components/showcase/Footer";
import ContentCarousel from "@/components/showcase/ContentCarousel";
import ExpandingCardsSection from "@/components/showcase/ExpandingCardsSection";

const ComponentShowcase: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <Navigation />
      <BackgroundGradient />
      <BackgroundGrain />
      
      <div className="container-home">
        <div className="flex flex-col z-10">
          {/* Page Header */}
          <section className="pt-32 pb-16">
            <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
              <BlurFade delay={0.1} inView>
                <p className="text-xs uppercase tracking-wide text-white/70 mb-4">Design System</p>
                <h1 className="text-5xl font-semibold text-white mb-4">Component Library</h1>
                <p className="text-lg text-white/80 max-w-2xl">
                  Reusable components extracted from the landing page. Use these to build your Customer Hub pages while maintaining visual consistency.
                </p>
              </BlurFade>
            </div>
          </section>

          {/* Hero Section Demo */}
          <div className="border-t border-white/10 pt-8">
            <div className="mx-auto w-full px-4 md:px-8 lg:px-16 mb-8">
              <p className="text-sm uppercase tracking-wide text-white/50">Component: HeroSection</p>
              <p className="text-white/70 text-sm mt-2">Import: <code className="bg-white/10 px-2 py-1 rounded">{"import HeroSection from '@/components/showcase/HeroSection'"}</code></p>
            </div>
            <HeroSection 
              badge="Design System Preview"
              title="Build Amazing Things"
              subtitle="This is a fully customizable hero section with animated elements."
              primaryCta={{ label: "Get Started", href: "#" }}
              secondaryCta={{ label: "Learn More", href: "#" }}
            />
          </div>
        </div>
      </div>

      <div className="container-home">
        <div className="flex flex-col z-10 bg-background rounded-3xl">
          
          {/* Section Header Demo */}
          <section className="py-16 px-4 md:px-8 lg:px-16 border-t border-border">
            <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: SectionHeader</p>
            <p className="text-muted-foreground text-sm mb-8">Import: <code className="bg-muted px-2 py-1 rounded">{"import SectionHeader from '@/components/showcase/SectionHeader'"}</code></p>
            
            <SectionHeader 
              title="Section Header Example"
              subtitle="A flexible header component for sections with optional subtitle and link."
              linkText="Learn more"
              linkHref="#"
            />
          </section>

          {/* Use Case Cards Demo */}
          <section className="py-16 px-4 md:px-8 lg:px-16 border-t border-border">
            <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: UseCaseCard</p>
            <p className="text-muted-foreground text-sm mb-8">Import: <code className="bg-muted px-2 py-1 rounded">{"import UseCaseCard from '@/components/showcase/UseCaseCard'"}</code></p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <UseCaseCard 
                icon={
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M21.5833 12.8333V10.5C21.5833 9.48333 20.7666 8.66667 19.75 8.66667H8.24996C7.23329 8.66667 6.41663 9.48333 6.41663 10.5V12.8333" stroke="#5978FF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
                iconBgColor="rgba(180,205,255,0.2)"
                iconBorderColor="#9CAEFF"
                title="B2B SaaS"
                description="Build subscription platforms, workflow tools, project management apps."
              />
              <UseCaseCard 
                icon={
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 24.5C14 24.5 22.1667 19.8333 22.1667 13.0833V7.33333L14 4.08333L5.83333 7.33333V13.0833C5.83333 19.8333 14 24.5 14 24.5Z" stroke="#FF66F4" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
                iconBgColor="rgba(255,195,254,0.2)"
                iconBorderColor="#FFBDF5"
                title="Consumer Apps"
                description="Launch social platforms, community sites, fitness apps with user profiles."
              />
              <UseCaseCard 
                icon={
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="9" y="6" width="10" height="16" rx="2" stroke="#FF8248" strokeWidth="1.75"/>
                    <path d="M12 9H16" stroke="#FF8248" strokeWidth="1.75" strokeLinecap="round"/>
                  </svg>
                }
                iconBgColor="rgba(255,210,187,0.2)"
                iconBorderColor="#FFBB7C"
                title="Marketplaces"
                description="Create booking platforms, storefronts, rental marketplaces with payments."
              />
            </div>
          </section>

          {/* Testimonial Cards Demo */}
          <section className="py-16 px-4 md:px-8 lg:px-16 border-t border-border">
            <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: TestimonialCard</p>
            <p className="text-muted-foreground text-sm mb-8">Import: <code className="bg-muted px-2 py-1 rounded">{"import TestimonialCard from '@/components/showcase/TestimonialCard'"}</code></p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <TestimonialCard 
                companyName="Acme Corp"
                quote="This platform completely transformed how we build internal tools. What used to take weeks now takes hours."
                authorName="Jane Smith"
                authorRole="CTO, Acme Corp"
              />
              <TestimonialCard 
                companyName="TechFlow"
                quote="The speed of iteration is incredible. We prototype, test, and ship faster than ever before."
                authorName="John Doe"
                authorRole="VP Engineering, TechFlow"
              />
              <TestimonialCard 
                companyName="StartupXYZ"
                quote="As a non-technical founder, this gave me the ability to build my vision without waiting on developers."
                authorName="Alex Johnson"
                authorRole="Founder, StartupXYZ"
              />
            </div>
          </section>

          {/* Featured Testimonial Demo */}
          <section className="py-16 border-t border-border">
            <div className="px-4 md:px-8 lg:px-16 mb-4">
              <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: FeaturedTestimonial</p>
              <p className="text-muted-foreground text-sm">Import: <code className="bg-muted px-2 py-1 rounded">{"import FeaturedTestimonial from '@/components/showcase/FeaturedTestimonial'"}</code></p>
            </div>
            
            <FeaturedTestimonial 
              companyName="AppDirect"
              quote="The time savings alone translate into real dollars. Last year managing breakout sessions in spreadsheets took weeks of staff time. This year, we cut that down to days."
              authorName="Jeffrey Leggo"
              authorRole="Sr. Director, Product Marketing"
            />
          </section>

          {/* Stat Cards Demo */}
          <section className="py-16 px-4 md:px-8 lg:px-16 border-t border-border">
            <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: StatCard</p>
            <p className="text-muted-foreground text-sm mb-8">Import: <code className="bg-muted px-2 py-1 rounded">{"import StatCard from '@/components/showcase/StatCard'"}</code></p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              <StatCard value="64%" description="Faster development time compared to traditional methods" />
              <StatCard value="200M+" description="Lines of code generated by the platform" />
              <StatCard value="10K+" description="Active teams building with our tools" />
              <StatCard value="99.9%" description="Uptime across all production deployments" />
            </div>
          </section>

          {/* Feature Showcase Cards Demo */}
          <section className="py-16 px-4 md:px-8 lg:px-16 border-t border-border">
            <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: FeatureShowcaseCard</p>
            <p className="text-muted-foreground text-sm mb-8">Import: <code className="bg-muted px-2 py-1 rounded">{"import FeatureShowcaseCard from '@/components/showcase/FeatureShowcaseCard'"}</code></p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <FeatureShowcaseCard 
                gradientColors="from-pink-400 via-purple-400 to-orange-300"
                title="Build by describing"
                description="Chat like talking to a developer. Describe your vision, drop in screenshots."
                linkText="Learn more"
              />
              <FeatureShowcaseCard 
                gradientColors="from-blue-300 via-purple-400 to-pink-400"
                title="Iterate in real-time"
                description="See changes instantly as you refine your vision."
                linkText="See demo"
              />
              <FeatureShowcaseCard 
                gradientColors="from-pink-300 via-orange-300 to-pink-500"
                title="Ship with confidence"
                description="Deploy to production with one click."
                linkText="Get started"
              />
            </div>
          </section>

          {/* Security Cards Demo */}
          <section className="py-16 px-4 md:px-8 lg:px-16 border-t border-border">
            <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: SecurityCard</p>
            <p className="text-muted-foreground text-sm mb-8">Import: <code className="bg-muted px-2 py-1 rounded">{"import SecurityCard from '@/components/showcase/SecurityCard'"}</code></p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              <SecurityCard 
                icon={
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="1" y="1" width="30" height="30" rx="3.2" stroke="#5683FF" strokeWidth="1.75"/>
                    <rect x="8" y="15" width="16" height="2" rx="1" fill="#5683FF"/>
                    <rect x="15" y="8" width="16" height="2" rx="1" transform="rotate(90 15 8)" fill="#5683FF"/>
                  </svg>
                }
                description="Control access with role-based permissions and track every action with audit logs"
              />
              <SecurityCard 
                icon={
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="16" y="2" width="19.8" height="19.8" transform="rotate(45 16 2)" stroke="#FF66F4" strokeWidth="1.75"/>
                  </svg>
                }
                description="Enterprise authentication with SSO and SAML integration"
              />
              <SecurityCard 
                icon={
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M6 4L26 4L26 20L6 28L6 4Z" stroke="#FFA41B" strokeWidth="1.75" strokeLinejoin="round"/>
                  </svg>
                }
                description="Your code syncs to your GitHub repository so you always own what you build"
              />
              <SecurityCard 
                icon={
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="3" y="3" width="11" height="11" rx="1.6" stroke="#FF6600" strokeWidth="1.75"/>
                    <rect x="18" y="3" width="11" height="11" rx="1.6" stroke="#FF6600" strokeWidth="1.75"/>
                    <rect x="3" y="18" width="11" height="11" rx="1.6" stroke="#FF6600" strokeWidth="1.75"/>
                    <rect x="18" y="18" width="11" height="11" rx="1.6" stroke="#FF6600" strokeWidth="1.75"/>
                  </svg>
                }
                description="Built on modern technologies: React, Supabase, and Tailwind"
              />
            </div>
          </section>

          {/* Feature List Section Demo */}
          <section className="py-16 border-t border-border">
            <div className="px-4 md:px-8 lg:px-16 mb-4">
              <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: FeatureListSection</p>
              <p className="text-muted-foreground text-sm">Import: <code className="bg-muted px-2 py-1 rounded">{"import FeatureListSection from '@/components/showcase/FeatureListSection'"}</code></p>
            </div>
            
            <FeatureListSection 
              title="For sales & marketing teams"
              gradientBgColor="#FFBADF"
              features={[
                { title: "ROI calculators", description: "Show prospects their potential savings with your product—custom calculations, branded design, instant results." },
                { title: "Campaign dashboards", description: "Track performance across channels. Custom metrics that matter to your team, not vendor defaults." },
                { title: "Partner portals", description: "Share resources, track co-marketing activity, manage joint opportunities." },
              ]}
            />
          </section>

          {/* FAQ Section Demo */}
          <section className="py-16 border-t border-border">
            <div className="px-4 md:px-8 lg:px-16 mb-4">
              <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: FAQSection</p>
              <p className="text-muted-foreground text-sm">Import: <code className="bg-muted px-2 py-1 rounded">{"import FAQSection from '@/components/showcase/FAQSection'"}</code></p>
            </div>
            
            <FAQSection 
              title="Frequently Asked Questions"
              items={[
                { question: "How does it work?", answer: "Chat with us like talking to a developer. Describe your vision, drop in screenshots, or reference designs—we build it." },
                { question: "What can I build?", answer: "Build anything from simple landing pages to complex SaaS applications with databases, authentication, and payments." },
                { question: "Do I own the code?", answer: "Yes, you have full ownership of all code generated. Export anytime, deploy anywhere." },
                { question: "How fast can I ship?", answer: "Most projects go from idea to production in hours or days, not weeks or months." },
              ]}
            />
          </section>

          {/* Enterprise Support Demo */}
          <section className="py-16 border-t border-border">
            <div className="px-4 md:px-8 lg:px-16 mb-4">
              <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: EnterpriseSupportSection</p>
              <p className="text-muted-foreground text-sm">Import: <code className="bg-muted px-2 py-1 rounded">{"import EnterpriseSupportSection from '@/components/showcase/EnterpriseSupportSection'"}</code></p>
            </div>
            
            <EnterpriseSupportSection 
              title="Dedicated support for enterprise customers"
              subtitle="Enterprise plan and support"
              features={[
                "Priority response times to keep your team productive",
                "Comprehensive onboarding to configure your workspace",
                "Ongoing training to master the platform",
                "Direct product team access for custom integrations",
              ]}
            />
          </section>

          {/* Simple CTA Demo */}
          <section className="py-16 border-t border-border">
            <div className="px-4 md:px-8 lg:px-16 mb-4">
              <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: SimpleCTASection</p>
              <p className="text-muted-foreground text-sm">Import: <code className="bg-muted px-2 py-1 rounded">{"import SimpleCTASection from '@/components/showcase/SimpleCTASection'"}</code></p>
            </div>
            
            <SimpleCTASection 
              title="Ready to build?"
              subtitle="No technical cofounder needed. Just you, your idea, and the right tools."
              ctaLabel="Get Started"
            />
          </section>

          {/* Full CTA Demo */}
          <section className="py-16 border-t border-border">
            <div className="px-4 md:px-8 lg:px-16 mb-4">
              <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: CTASection</p>
              <p className="text-muted-foreground text-sm">Import: <code className="bg-muted px-2 py-1 rounded">{"import CTASection from '@/components/showcase/CTASection'"}</code></p>
            </div>
            
            <CTASection 
              title="Built by founders, for founders"
              features={[
                "Full code ownership",
                "Production-ready",
                "Enterprise security",
                "Unlimited scalability",
              ]}
            />
          </section>

          {/* Content Carousel Demo */}
          <section className="py-16 border-t border-border">
            <div className="px-4 md:px-8 lg:px-16 mb-4">
              <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: ContentCarousel</p>
              <p className="text-muted-foreground text-sm">Import: <code className="bg-muted px-2 py-1 rounded">{"import ContentCarousel from '@/components/showcase/ContentCarousel'"}</code></p>
            </div>
            
            <ContentCarousel 
              title="Your AI cofounder and dev team"
              subtitle="Your idea doesn't need a technical cofounder. Lovable is your technical partner."
              autoPlayInterval={5000}
            />
          </section>

          {/* Expanding Cards Demo */}
          <section className="py-16 border-t border-border">
            <div className="px-4 md:px-8 lg:px-16 mb-4">
              <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: ExpandingCardsSection</p>
              <p className="text-muted-foreground text-sm">Import: <code className="bg-muted px-2 py-1 rounded">{"import ExpandingCardsSection from '@/components/showcase/ExpandingCardsSection'"}</code></p>
            </div>
            
            <ExpandingCardsSection 
              autoPlayInterval={5000}
              initialActiveIndex={1}
            />
          </section>

          {/* Footer Demo */}
          <section className="py-16 border-t border-border">
            <div className="px-4 md:px-8 lg:px-16 mb-4">
              <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Component: Footer</p>
              <p className="text-muted-foreground text-sm">Import: <code className="bg-muted px-2 py-1 rounded">{"import Footer from '@/components/showcase/Footer'"}</code></p>
            </div>
            
            <Footer />
          </section>

        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
