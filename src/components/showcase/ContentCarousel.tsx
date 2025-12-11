import React, { useState, useEffect } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

interface Slide {
  keyword: string;
  title: string;
  description: string;
  story: string;
  bgColor: string;
}

interface ContentCarouselProps {
  title?: string;
  subtitle?: string;
  slides?: Slide[];
  autoPlayInterval?: number;
}

const defaultSlides: Slide[] = [
  {
    keyword: "CHAT TO BUILD",
    title: "Build by describing what you want",
    description: "Chatting with Lovable is like talking with a developer. Describe your vision, drop in screenshots, or reference designs. Lovable builds it.",
    story: "Thinkify story",
    bgColor: "bg-[#A1C5FF]"
  },
  {
    keyword: "ITERATE FAST",
    title: "See changes in real-time",
    description: "Every change you request appears instantly in your live preview. No waiting, no compilation - just instant feedback as you build.",
    story: "Customer story",
    bgColor: "bg-[#FFBADF]"
  },
  {
    keyword: "SHIP QUICKLY",
    title: "Deploy with one click",
    description: "When you're ready, deploy your app to production instantly. Lovable handles hosting, scaling, and all the technical details.",
    story: "Success story",
    bgColor: "bg-[#FFBB72]"
  },
  {
    keyword: "COLLABORATE",
    title: "Build together with your team",
    description: "Invite your team members, share feedback, and iterate together. Everyone can contribute, technical or not.",
    story: "Team story",
    bgColor: "bg-gradient-to-br from-pink-400 via-purple-400 to-orange-300"
  }
];

const ContentCarousel: React.FC<ContentCarouselProps> = ({
  title = "Your AI cofounder and dev team",
  subtitle = "Your idea doesn't need a technical cofounder. Lovable is your technical partner - build, iterate, and ship in hours, not months.",
  slides = defaultSlides,
  autoPlayInterval = 5000
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    if (autoPlayInterval > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlayInterval, totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
      <div className="mb-10 flex flex-col gap-6">
        <BlurFade delay={0.2} inView>
          <h2 className="text-left text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
            {title}
          </h2>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <p className="text-left text-base leading-[22px] tracking-[-0.01em] text-foreground max-w-[600px]">
            {subtitle}
          </p>
        </BlurFade>
      </div>

      <BlurFade delay={0.4} inView>
        <div className="bg-[#FCFBF8] rounded-3xl p-5 flex flex-col md:flex-row gap-5">
          <div className="flex-1 flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-5 pt-10">
              <p className="text-xs text-muted-foreground uppercase transition-opacity duration-500">
                {slides[currentSlide].keyword}
              </p>
              <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground transition-opacity duration-500">
                {slides[currentSlide].title}
              </h3>
              <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground transition-opacity duration-500">
                {slides[currentSlide].description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base text-foreground">{slides[currentSlide].story}</span>
              <svg width="6" height="11" viewBox="0 0 6 11" fill="none" className="mt-0.5">
                <path d="M1 1L5 5.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex items-center justify-center gap-2">
              <button 
                onClick={prevSlide}
                className="w-5 h-5 rounded-full bg-background/70 flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Previous slide"
              >
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                  <path d="M5 10L1 5.5L5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-5 h-5 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                aria-label="Next slide"
              >
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                  <path d="M1 1L5 5.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div className={`flex-1 relative ${slides[currentSlide].bgColor} rounded-xl overflow-hidden min-h-[440px] transition-colors duration-500`}>
            <div className="absolute top-2 left-3 text-xs text-white/70 uppercase">ANIMATION</div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="bg-background/80 backdrop-blur-sm border border-muted rounded-[34px] p-5 w-full max-w-md shadow-xl">
                <p className="text-2xl text-muted-foreground mb-5">Ask Lovable...</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <button className="w-8 h-8 rounded-full border border-muted flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 17L3 10L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full border border-muted flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 10H15M10 5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button className="w-8 h-8 rounded-full border border-muted flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="4" y="7" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M7 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3v10M3 8h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default ContentCarousel;
