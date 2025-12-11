import React, { useEffect } from "react";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { BackgroundGrain } from "@/components/BackgroundGrain";
import Navigation from "@/components/Navigation";
import HubNavigation from "@/components/hub/HubNavigation";
import { useCustomer } from "@/contexts/CustomerContext";
import { useProgress } from "@/contexts/ProgressContext";

interface HubLayoutProps {
  children: React.ReactNode;
  sectionId?: string;
  showBackground?: boolean;
}

const HubLayout: React.FC<HubLayoutProps> = ({ 
  children, 
  sectionId,
  showBackground = true 
}) => {
  const { profile } = useCustomer();
  const { visitSection } = useProgress();

  useEffect(() => {
    if (sectionId) {
      visitSection(sectionId);
    }
  }, [sectionId, visitSection]);

  return (
    <div className="relative min-h-screen w-full bg-background pb-24">
      <Navigation />
      {showBackground && (
        <>
          <BackgroundGradient />
          <BackgroundGrain />
        </>
      )}
      <div className="container-home">
        <div className="flex flex-col z-10">
          {children}
        </div>
      </div>
      <HubNavigation />
    </div>
  );
};

export default HubLayout;
