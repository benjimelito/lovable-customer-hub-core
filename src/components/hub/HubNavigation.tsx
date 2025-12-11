import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

const hubPages = [
  { path: "/demo", title: "Watch Demo" },
  { path: "/demo-ideas", title: "Demo Ideas" },
  { path: "/usage", title: "Dashboard" },
  { path: "/process", title: "Sales Process" },
  { path: "/research", title: "AI Research" },
  { path: "/social", title: "Social Proof" },
  { path: "/actions", title: "Action Items" },
  { path: "/faq", title: "FAQ & Chat" },
  { path: "/swag", title: "Earn Swag" },
];

const HubNavigation: React.FC = () => {
  const location = useLocation();
  const currentIndex = hubPages.findIndex((page) => page.path === location.pathname);
  
  // Don't show on homepage or pages not in the hub
  if (currentIndex === -1) return null;
  
  const prevPage = currentIndex > 0 ? hubPages[currentIndex - 1] : null;
  const nextPage = currentIndex < hubPages.length - 1 ? hubPages[currentIndex + 1] : null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed bottom-6 left-0 right-0 z-50 flex flex-col items-center pointer-events-none"
    >
      <div className="flex items-center gap-2 bg-card/95 backdrop-blur-xl border border-border rounded-full px-2 py-2 shadow-lg shadow-black/10 pointer-events-auto">
        {/* Previous Button */}
        <Link
          to={prevPage?.path || "/"}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
            prevPage 
              ? "hover:bg-muted text-foreground" 
              : "text-muted-foreground/50 pointer-events-none"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-medium hidden sm:inline max-w-[100px] truncate">
            {prevPage?.title || "Previous"}
          </span>
        </Link>

        {/* Home Button */}
        <Link
          to="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-105"
        >
          <Home className="w-5 h-5" />
        </Link>

        {/* Next Button */}
        <Link
          to={nextPage?.path || "/"}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
            nextPage 
              ? "hover:bg-muted text-foreground" 
              : "text-muted-foreground/50 pointer-events-none"
          }`}
        >
          <span className="text-sm font-medium hidden sm:inline max-w-[100px] truncate">
            {nextPage?.title || "Next"}
          </span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 mt-3 pointer-events-auto">
        {hubPages.map((page, index) => (
          <Link
            key={page.path}
            to={page.path}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? "bg-primary w-4" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            title={page.title}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default HubNavigation;