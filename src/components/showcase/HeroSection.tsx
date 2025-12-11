import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({
  badge = "For Founders & Builders",
  title = "Build it with Lovable",
  subtitle = "Your AI cofounder and development team. Ship your idea in days, not months— and start building the business you've been dreaming about.",
  primaryCta = { label: "Start building", href: "https://lovable.dev" },
  secondaryCta = { label: "Contact sales", href: "https://lovable.dev/enterprise-landing" },
}) => {
  return (
    <section className="relative flex min-h-[780px] items-center justify-center overflow-hidden rounded-lg bg-transparent py-24 text-foreground lg:py-24">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 text-center gap-6">
        
        <BlurFade delay={0.1} inView>
          <p className="text-xs font-normal uppercase tracking-wide text-white">
            {badge}
          </p>
        </BlurFade>

        <div className="flex flex-col items-center gap-5">
          <BlurFade delay={0.2} inView>
            <h1 style={{ letterSpacing: "-0.03em" }} className="max-w-2xl text-center text-6xl font-semibold leading-[110%] text-white">
              {title}
            </h1>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="max-w-[600px] text-base leading-6 text-white">
              {subtitle}
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.4} inView>
          <div className="mb-16 flex gap-2.5 flex-row">
            <a href={primaryCta.href} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
                {primaryCta.label}
              </Button>
            </a>
            <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="outline" size="lg" className="rounded-[20px] border border-white bg-transparent text-white hover:bg-white/10">
                {secondaryCta.label}
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="ml-0.5">
                  <path d="M1 8L8 1M8 1H1M8 1V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default HeroSection;
