import React, { useState } from "react";
import HubLayout from "@/components/hub/HubLayout";
import Timeline from "@/components/hub/Timeline";
import StageContent from "@/components/hub/StageContent";
import PreCallAgenda from "@/components/hub/PreCallAgenda";
import { BlurFade } from "@/components/ui/blur-fade";
import { useCustomer } from "@/contexts/CustomerContext";
import { dealStages, mockAgenda } from "@/data/mockData";

const SalesProcess: React.FC = () => {
  const { profile } = useCustomer();
  const currentStage = dealStages.find(s => s.status === "current") || dealStages[0];
  const [selectedStageId, setSelectedStageId] = useState(currentStage.id);

  const selectedStage = dealStages.find(s => s.id === selectedStageId) || currentStage;

  return (
    <HubLayout sectionId="process" showBackground={false}>
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background rounded-3xl">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16 space-y-12">
          {/* Page Header */}
          <BlurFade delay={0.05}>
            <div className="max-w-2xl">
              <h1 className="text-[36px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                Your Partnership Journey
              </h1>
              <p className="text-lg text-muted-foreground mt-4">
                Transparency in process, no surprises. Here's where we are and what comes next for {profile.companyName}.
              </p>
            </div>
          </BlurFade>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Timeline - Left Side */}
            <div className="lg:col-span-5">
              <BlurFade delay={0.1}>
                <Timeline
                  stages={dealStages}
                  currentStageId={currentStage.id}
                  selectedStageId={selectedStageId}
                  onStageClick={setSelectedStageId}
                />
              </BlurFade>
            </div>

            {/* Stage Content - Right Side */}
            <div className="lg:col-span-7">
              <StageContent stage={selectedStage} />
            </div>
          </div>

          {/* Pre-Call Agenda */}
          {currentStage.status === "current" && (
            <PreCallAgenda items={mockAgenda} />
          )}

          {/* What Lovable Delivers */}
          <BlurFade delay={0.2}>
            <div className="p-6 bg-[#F7F4ED] rounded-3xl">
              <h3 className="text-lg font-medium text-foreground mb-4">What Lovable Delivers at Each Stage</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-background/50 rounded-xl">
                  <h4 className="text-sm font-medium text-foreground mb-2">During Evaluation</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Dedicated technical support</li>
                    <li>• POC environment setup</li>
                    <li>• Integration guidance</li>
                  </ul>
                </div>
                <div className="p-4 bg-background/50 rounded-xl">
                  <h4 className="text-sm font-medium text-foreground mb-2">At Close</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Custom onboarding plan</li>
                    <li>• Team training sessions</li>
                    <li>• Success manager assigned</li>
                  </ul>
                </div>
                <div className="p-4 bg-background/50 rounded-xl">
                  <h4 className="text-sm font-medium text-foreground mb-2">Ongoing</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Quarterly business reviews</li>
                    <li>• Priority feature requests</li>
                    <li>• 24/7 enterprise support</li>
                  </ul>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* CTA Section */}
          <BlurFade delay={0.25}>
            <div className="p-8 bg-primary text-primary-foreground rounded-3xl text-center">
              <h3 className="text-2xl font-medium mb-3">
                Questions About the Process?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
                We believe in complete transparency. If anything is unclear, let's discuss it.
              </p>
              <a 
                href="/faq" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                View FAQ
              </a>
            </div>
          </BlurFade>
        </div>
      </section>
    </HubLayout>
  );
};

export default SalesProcess;
