import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";

interface Feature {
  title: string;
  description: string;
}

interface FeatureListSectionProps {
  title: string;
  features: Feature[];
  gradientBgColor?: string;
  mockupContent?: React.ReactNode;
  bgColor?: string;
}

const FeatureListSection: React.FC<FeatureListSectionProps> = ({
  title,
  features,
  gradientBgColor = "#FFBADF",
  mockupContent,
  bgColor = "bg-transparent",
}) => {
  return (
    <section className={`py-[120px] ${bgColor} z-10`}>
      <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
        {/* Header */}
        <BlurFade delay={0.2} inView>
          <div className="mb-10 flex flex-col gap-6">
            <h2 className="text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
              {title}
            </h2>
          </div>
        </BlurFade>

        {/* Content Container */}
        <BlurFade delay={0.3} inView>
          <div className="bg-[#F7F4ED] rounded-3xl p-4 flex flex-col lg:flex-row gap-10">
            {/* Left - Gradient Mockup */}
            <div 
              className="flex-1 relative rounded-xl overflow-hidden min-h-[370px]"
              style={{ backgroundColor: gradientBgColor }}
            >
              {/* Gradient Background Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[150%] h-[150%] -left-[50%] -top-[50%] bg-gradient-to-br from-pink-300 via-purple-300 to-purple-400 opacity-80 blur-3xl"></div>
              </div>
              
              {/* Blur overlays */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-[324px] bg-white/[0.01] backdrop-blur-[50px]"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[245px] bg-white/[0.01] backdrop-blur-[50px]"></div>
              </div>

              {mockupContent}
            </div>

            {/* Right - Feature List */}
            <div className="flex-1 flex flex-col justify-center gap-6">
              {features.map((feature, index) => (
                <div key={index} className="border-t border-[#ECEAE4] pt-5">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground mb-2">
                        {feature.title}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default FeatureListSection;
