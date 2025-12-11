import React from "react";
import { Button } from "@/components/ui/button";

interface SimpleCTASectionProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const SimpleCTASection: React.FC<SimpleCTASectionProps> = ({
  title = "Ready to build?",
  subtitle = "No technical cofounder needed. No months of searching. Just you, your idea, and Lovable.",
  ctaLabel = "Start building",
  ctaHref = "#",
}) => {
  return (
    <section className="py-24 bg-transparent z-10">
      <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground text-center">
            {title}
          </h2>
          <p className="text-base leading-[22px] tracking-[-0.01em] text-foreground text-center max-w-[392px]">
            {subtitle}
          </p>
          <a href={ctaHref} className="inline-block">
            <Button 
              size="lg" 
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-4"
            >
              {ctaLabel}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SimpleCTASection;
