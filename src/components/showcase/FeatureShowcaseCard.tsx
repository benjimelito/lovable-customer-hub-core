import React from "react";

interface FeatureShowcaseCardProps {
  gradientColors: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  imageContent?: React.ReactNode;
}

const FeatureShowcaseCard: React.FC<FeatureShowcaseCardProps> = ({
  gradientColors = "from-pink-400 via-purple-400 to-orange-300",
  title,
  description,
  linkText = "Contact sales",
  linkHref = "#",
  imageContent,
}) => {
  return (
    <div className="flex flex-col gap-5 p-5 pb-6 bg-[#F7F4ED] border border-[#ECEAE4] rounded-3xl">
      <div className={`relative w-full h-[296px] bg-gradient-to-br ${gradientColors} rounded-xl overflow-hidden flex items-center justify-center`}>
        {imageContent || (
          <span className="text-base uppercase text-white/70">IMAGE/ANIMATION</span>
        )}
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground">
            {title}
          </h3>
          <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
            {description}
          </p>
        </div>
        <a href={linkHref} className="flex items-center gap-2 text-base text-foreground hover:opacity-80 transition-opacity">
          <span>{linkText}</span>
          <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
            <path d="M1 1L5 5.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FeatureShowcaseCard;
