import React from "react";

interface TestimonialCardProps {
  companyName: string;
  quote: string;
  authorName: string;
  authorRole: string;
  avatarUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  companyName,
  quote,
  authorName,
  authorRole,
  avatarUrl,
}) => {
  return (
    <div className="flex flex-col gap-5 p-6 bg-[#FCFBF8] border border-[#D8D6CF] rounded-3xl">
      <h3 className="text-2xl font-medium leading-[100%] tracking-[-0.02em] text-foreground">
        {companyName}
      </h3>
      <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground flex-grow">
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-xl bg-[#D8D6CF] flex-shrink-0 overflow-hidden">
          {avatarUrl && (
            <img src={avatarUrl} alt={authorName} className="w-full h-full object-cover" />
          )}
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-sm leading-[16px] tracking-[-0.01em] text-muted-foreground">
            {authorName}
          </p>
          <p className="text-sm leading-[16px] tracking-[-0.01em] text-muted-foreground">
            {authorRole}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
