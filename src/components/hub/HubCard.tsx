import React from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { useProgress } from "@/contexts/ProgressContext";

interface HubCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  route?: string;
  onClick?: () => void;
  accentColor?: string;
}

const HubCard: React.FC<HubCardProps> = ({
  title,
  description,
  icon: Icon,
  route,
  onClick,
  accentColor = "bg-primary/10 border-primary/20",
}) => {
  const { sections } = useProgress();
  const isVisited = route ? sections.some((s) => s.path === route && s.visited) : false;
  
  const cardContent = (
    <div className="relative flex flex-col gap-6 p-6 bg-card border border-border rounded-3xl transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 h-full">
      {/* Visited indicator */}
      {isVisited && (
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-500" />
      )}
      
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${accentColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
        <Icon className="w-6 h-6 text-primary" />
      </div>
      
      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-xl font-medium leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      
      {/* Arrow indicator */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
        <span>Explore</span>
        <svg 
          width="6" 
          height="11" 
          viewBox="0 0 6 11" 
          fill="none" 
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path 
            d="M1 1L5 5.5L1 10" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="group block h-full w-full text-left">
        {cardContent}
      </button>
    );
  }

  return (
    <Link to={route || "/"} className="group block h-full">
      {cardContent}
    </Link>
  );
};

export default HubCard;
