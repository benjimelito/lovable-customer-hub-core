import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
  centered?: boolean;
  maxWidth?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  linkText,
  linkHref = "#",
  centered = false,
  maxWidth = "668px",
}) => {
  return (
    <div className={`mb-10 flex flex-col gap-6 ${centered ? 'items-center' : ''}`} style={{ maxWidth }}>
      <BlurFade delay={0.2} inView>
        <h2 className={`text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground ${centered ? 'text-center' : ''}`}>
          {title}
        </h2>
      </BlurFade>
      {subtitle && (
        <BlurFade delay={0.3} inView>
          <p className={`text-base leading-[22px] tracking-[-0.01em] text-muted-foreground max-w-[600px] ${centered ? 'text-center' : ''}`}>
            {subtitle}
          </p>
        </BlurFade>
      )}
      {linkText && (
        <BlurFade delay={0.4} inView>
          <a href={linkHref} className="flex items-center gap-2 text-base text-foreground hover:opacity-80 transition-opacity w-fit">
            <span>{linkText}</span>
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
              <path d="M1 1L5 5.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </BlurFade>
      )}
    </div>
  );
};

export default SectionHeader;
