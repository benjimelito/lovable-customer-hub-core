import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  features: string[];
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Built by founders, for founders",
  features = [
    "Full code ownership",
    "Production-ready",
    "10M products shipped",
    "1.2 M businesses built on Lovable",
  ],
  primaryCta = { label: "Start building", href: "#" },
  secondaryCta = { label: "Contact sales", href: "#" },
}) => {
  return (
    <section className="flex w-full items-center justify-center bg-transparent py-24">
      <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
        <BlurFade delay={0.2} inView>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-48 bg-foreground rounded-3xl p-8 lg:p-20">
            {/* Left side - Heading and Buttons */}
            <div className="flex flex-col gap-6 lg:max-w-[488px]">
              <h2 className="text-[64px] font-semibold leading-[110%] tracking-[-0.03em] text-background">
                {title}
              </h2>
              <div className="flex gap-2.5 flex-row">
                <a href={primaryCta.href} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90">
                    {primaryCta.label}
                  </Button>
                </a>
                <a href={secondaryCta.href} className="inline-block">
                  <Button variant="outline" size="lg" className="rounded-[20px] border border-background bg-transparent text-background hover:bg-background/10">
                    {secondaryCta.label}
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="ml-0.5">
                      <path d="M1 8L8 1M8 1H1M8 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </a>
              </div>
            </div>

            {/* Right side - Feature List */}
            <div className="flex flex-col gap-4 flex-1">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded border border-[#ECEAE4] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="#FCFBF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-2xl leading-[32px] tracking-[-0.01em] text-background">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default CTASection;
