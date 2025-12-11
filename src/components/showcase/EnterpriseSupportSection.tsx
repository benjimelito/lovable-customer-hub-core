import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";

interface EnterpriseSupportSectionProps {
  title?: string;
  subtitle?: string;
  features: string[];
  linkText?: string;
  linkHref?: string;
}

const EnterpriseSupportSection: React.FC<EnterpriseSupportSectionProps> = ({
  title = "Dedicated support for enterprise customers",
  subtitle = "Enterprise plan and support",
  features = [
    "Priority response times to keep your team productive",
    "Comprehensive onboarding to configure your workspace and get building",
    "Ongoing training to master Lovable and adopt best practices",
    "Direct product team access for custom integrations and roadmap input",
    "Dedicated guidance to deploy and scale AI professionally",
  ],
  linkText = "Contact sales",
  linkHref = "#",
}) => {
  return (
    <section className="py-24 bg-transparent z-10">
      <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
        <BlurFade delay={0.2} inView>
          <div className="bg-[#272725] rounded-3xl p-4 flex flex-col lg:flex-row gap-5">
            {/* Left - Content */}
            <div className="flex-1 flex flex-col justify-between py-10 px-0">
              <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-wide text-[#C5C1B9]">
                  {subtitle}
                </p>
                <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-[#FCFBF8]">
                  {title}
                </h3>
                <ul className="text-base leading-9 tracking-[-0.01em] text-[#C5C1B9] list-disc list-inside space-y-0">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <a href={linkHref} className="flex items-center gap-2 text-base text-[#FCFBF8] hover:opacity-80 transition-opacity w-fit">
                <span>{linkText}</span>
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                  <path d="M1 1L5 5.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Right - Gradient Mockup */}
            <div className="flex-1 relative bg-[#0E3092] rounded-xl overflow-hidden min-h-[448px]">
              {/* Gradient Background Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[200%] h-[200%] -left-[50%] -top-[100%] bg-gradient-to-br from-blue-500 via-purple-400 to-pink-500 opacity-60 blur-3xl"></div>
              </div>
              
              {/* Blur overlay */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/[0.01] backdrop-blur-[50px] transform rotate-90"></div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default EnterpriseSupportSection;
