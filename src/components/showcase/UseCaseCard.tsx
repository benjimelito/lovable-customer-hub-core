import React from "react";

interface UseCaseCardProps {
  icon: React.ReactNode;
  iconBgColor: string;
  iconBorderColor: string;
  title: string;
  description: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  icon,
  iconBgColor,
  iconBorderColor,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-[#F7F4ED] border border-[#D8D6CF] rounded-3xl">
      <div 
        className="w-12 h-12 rounded-[9.6px] flex items-center justify-center"
        style={{ 
          backgroundColor: iconBgColor,
          border: `1px solid ${iconBorderColor}`
        }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-medium leading-[100%] tracking-[-0.02em] text-foreground">
          {title}
        </h3>
        <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default UseCaseCard;
