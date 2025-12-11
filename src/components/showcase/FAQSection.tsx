import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  items,
}) => {
  return (
    <section className="py-20 bg-[#F7F4ED] z-10 rounded-3xl">
      <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
        <BlurFade delay={0.2} inView>
          <div className="flex flex-col lg:flex-row gap-10 p-4">
            {/* Left side - Heading */}
            <div className="flex-1 flex items-center lg:pr-20">
              <h2 className="text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                {title}
              </h2>
            </div>

            {/* Right side - Accordion */}
            <div className="flex-1">
              <Accordion type="single" collapsible className="w-full">
                {items.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className={`border-[#D8D6CF] ${index === items.length - 1 ? 'border-b' : ''}`}
                  >
                    <AccordionTrigger className="text-left text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default FAQSection;
