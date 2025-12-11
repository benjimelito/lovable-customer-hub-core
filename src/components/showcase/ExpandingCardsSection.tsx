import React, { useState, useEffect } from "react";

interface ExpandingCard {
  title: string;
  shortTitle?: string;
  description: string;
  bgColor: string;
  linkText?: string;
  linkHref?: string;
}

interface ExpandingCardsSectionProps {
  cards?: ExpandingCard[];
  autoPlayInterval?: number;
  initialActiveIndex?: number;
}

const defaultCards: ExpandingCard[] = [
  {
    title: "Join the next wave of change makers",
    shortTitle: "Join the next wave of change makers and more",
    description: "Your idea doesn't need a technical cofounder. Lovable is your technical partner - build, iterate, and ship in hours, not months.",
    bgColor: "bg-[#5770FF]",
    linkText: "Learn more",
    linkHref: "#"
  },
  {
    title: "Ship faster than ever",
    description: "Turn your ideas into production-ready applications in hours, not months. No coding required, just describe what you want.",
    bgColor: "bg-[#ECEAE4]",
    linkText: "Learn more",
    linkHref: "#"
  },
  {
    title: "Full code ownership",
    description: "Export your code anytime. Deploy anywhere. You own everything we build together, with complete freedom and flexibility.",
    bgColor: "bg-[#5770FF]",
    linkText: "Learn more",
    linkHref: "#"
  },
  {
    title: "Built for scale",
    description: "From prototype to production. Scale from your first user to millions with confidence using production-ready infrastructure.",
    bgColor: "bg-[#5770FF]",
    linkText: "Learn more",
    linkHref: "#"
  }
];

const ExpandingCardsSection: React.FC<ExpandingCardsSectionProps> = ({
  cards = defaultCards,
  autoPlayInterval = 5000,
  initialActiveIndex = 1
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  useEffect(() => {
    if (autoPlayInterval > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlayInterval, cards.length]);

  return (
    <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-center gap-10">
        {/* Desktop: Horizontal expanding cards */}
        <div className="hidden md:flex items-start gap-1 w-full justify-center">
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <div 
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col bg-[#FCFBF8] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 ${
                  activeIndex === index ? 'md:w-[400px] lg:w-[592px]' : 'md:w-[180px] lg:w-[240px]'
                }`}
              >
                <div className={`w-full h-[240px] ${card.bgColor} rounded-3xl flex-shrink-0`}></div>
                <div className={`transition-all duration-500 ${
                  activeIndex === index ? 'p-8' : 'p-8 px-8'
                }`}>
                  <div className="flex flex-col gap-4">
                    <h3 className={`font-medium leading-[110%] tracking-[-0.01em] text-[#1B1B1B] transition-all duration-500 ${
                      activeIndex === index ? 'text-5xl' : 'text-xl'
                    }`}>
                      {activeIndex === index ? card.title : (card.shortTitle || card.title)}
                    </h3>
                    <p className={`font-normal leading-6 text-[#1B1B1B] transition-all duration-500 ${
                      activeIndex === index ? 'text-base opacity-100 max-h-48' : 'text-base opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      {card.description}
                    </p>
                    {card.linkText && (
                      <a href={card.linkHref || "#"} className="flex items-center gap-2 text-[#1F68DB] text-base hover:opacity-80 transition-opacity">
                        <span>{card.linkText}</span>
                        <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                          <path d="M1 1L5 5.5L1 10" stroke="#1F68DB" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {/* Vertical Separator */}
              {index < cards.length - 1 && (
                <div className="h-[400px] md:h-[500px] lg:h-[600px] w-px bg-border flex-shrink-0"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: Stack cards vertically */}
        <div className="md:hidden flex flex-col gap-6 w-full">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col bg-[#FCFBF8] rounded-3xl overflow-hidden w-full"
            >
              <div className={`w-full h-[200px] ${card.bgColor} rounded-3xl`}></div>
              <div className="p-6">
                <div className="flex flex-col gap-4">
                  <h3 className="font-medium text-2xl leading-[110%] tracking-[-0.01em] text-[#1B1B1B]">
                    {card.title}
                  </h3>
                  <p className="font-normal text-base leading-6 text-[#1B1B1B]">
                    {card.description}
                  </p>
                  {card.linkText && (
                    <a href={card.linkHref || "#"} className="flex items-center gap-2 text-[#1F68DB] font-normal text-base">
                      {card.linkText}
                      <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                        <path d="M1 1L5 5.5L1 10" stroke="#1F68DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Dots - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-1.5">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-[#1F68DB]' : 'bg-[#D9D9D9]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandingCardsSection;
