import React from "react";

interface SecurityCardProps {
  icon: React.ReactNode;
  description: string;
}

const SecurityCard: React.FC<SecurityCardProps> = ({ icon, description }) => {
  return (
    <div className="flex flex-col gap-5 p-6 bg-[#F7F4ED] rounded-3xl min-h-[200px]">
      <div className="w-8 h-8">
        {icon}
      </div>
      <p className="text-base leading-6 tracking-[-0.01em] text-[#404040]">
        {description}
      </p>
    </div>
  );
};

export default SecurityCard;
