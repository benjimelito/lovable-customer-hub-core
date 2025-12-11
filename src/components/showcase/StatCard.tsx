import React from "react";

interface StatCardProps {
  value: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, description }) => {
  return (
    <div className="flex flex-col justify-between p-6 bg-[#F7F4ED] rounded-3xl min-h-[328px]">
      <div className="flex flex-col gap-5">
        <h3 className="text-[64px] font-normal leading-[100%] tracking-[-0.01em] text-foreground">
          {value}
        </h3>
        <p className="text-base leading-[24px] tracking-[-0.01em] text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
