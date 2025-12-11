import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";

interface FeaturedTestimonialProps {
  companyLogo?: React.ReactNode;
  companyName: string;
  quote: string;
  authorName: string;
  authorRole: string;
}

const FeaturedTestimonial: React.FC<FeaturedTestimonialProps> = ({
  companyLogo,
  companyName,
  quote,
  authorName,
  authorRole,
}) => {
  return (
    <section className="py-16 bg-transparent z-10">
      <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
        <BlurFade delay={0.2} inView>
          <div className="bg-[#F7F4ED] border border-[#D8D6CF] rounded-3xl p-6 md:p-8 lg:p-12">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                {companyLogo || (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#5F5F5D]">
                    <path d="M12 8L20 16L28 8M12 24L20 32L28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                <span className="text-2xl font-semibold text-[#5F5F5D]">{companyName}</span>
              </div>
            </div>

            {/* Quote */}
            <div className="max-w-[960px] mx-auto mb-6">
              <p className="text-2xl md:text-3xl lg:text-[32px] leading-[1.25] text-center tracking-[-0.01em] text-[#5F5F5D]">
                "{quote}"
              </p>
            </div>

            {/* Author */}
            <div className="flex flex-col items-center gap-0.5">
              <p className="text-sm leading-4 tracking-[-0.01em] text-center text-[#5F5F5D]">
                {authorName}
              </p>
              <p className="text-sm leading-4 tracking-[-0.01em] text-center text-[#5F5F5D]">
                {authorRole}
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default FeaturedTestimonial;
