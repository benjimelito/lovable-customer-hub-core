import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  selectedCategory?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, selectedCategory }) => {
  const filteredItems =
    selectedCategory && selectedCategory !== "all"
      ? items.filter((item) => item.category === selectedCategory)
      : items;

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  return (
    <div className="space-y-6">
      {Object.entries(groupedItems).map(([category, categoryItems]) => (
        <div key={category}>
          {selectedCategory === "all" && (
            <Badge variant="outline" className="mb-3 bg-[#F7F4ED] border-[#D8D6CF]">
              {category}
            </Badge>
          )}
          <Accordion type="single" collapsible className="space-y-2">
            {categoryItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-[#F7F4ED] border border-[#D8D6CF] rounded-2xl px-4 data-[state=open]:bg-[#FCFBF8]"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
