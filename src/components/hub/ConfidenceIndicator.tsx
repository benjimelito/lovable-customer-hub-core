import React from "react";

interface ConfidenceIndicatorProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

const ConfidenceIndicator: React.FC<ConfidenceIndicatorProps> = ({ 
  score, 
  size = "md" 
}) => {
  const getColor = () => {
    if (score >= 80) return { bg: "#D4F9E4", fill: "#4AE88A", text: "#4AE88A" };
    if (score >= 60) return { bg: "#F9E4D4", fill: "#E8A44A", text: "#E8A44A" };
    return { bg: "#F9D4E4", fill: "#E84A7A", text: "#E84A7A" };
  };

  const color = getColor();
  const sizeClasses = {
    sm: { container: "w-12 h-12", text: "text-sm" },
    md: { container: "w-16 h-16", text: "text-lg" },
    lg: { container: "w-20 h-20", text: "text-xl" },
  };

  const circumference = 2 * Math.PI * 20;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className={`relative ${sizeClasses[size].container} flex items-center justify-center`}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 50 50">
        {/* Background circle */}
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke={color.bg}
          strokeWidth="4"
        />
        {/* Progress circle */}
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke={color.fill}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <span 
        className={`absolute ${sizeClasses[size].text} font-semibold`}
        style={{ color: color.text }}
      >
        {score}
      </span>
    </div>
  );
};

export default ConfidenceIndicator;
