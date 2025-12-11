import React from "react";
import { Play, Clock } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import videoThumbnail from "@/assets/video-thumbnail.png";
const DemoIntro: React.FC = () => {
  return <BlurFade delay={0.1}>
      <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-3xl p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Video Thumbnail */}
          <div className="relative flex-shrink-0 lg:w-[320px]">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-background/50 border border-border/50">
              <img src={videoThumbnail} alt="Lovable demo" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all hover:scale-110 shadow-lg">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {/* Built with Lovable Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                
                <span className="text-sm font-medium text-primary">Built with Lovable</span>
              </div>
              
              {/* Time Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-background/50 border border-border/50 rounded-full">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">~2 hours to build</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 tracking-[-0.02em]">
              See what you can build with Lovable
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              This Enterprise Quote Generator was built entirely in Lovable — your team could build tools like this too. 
              Use it to explore pricing options and generate a custom quote for your organization.
            </p>
          </div>
        </div>
      </div>
    </BlurFade>;
};
export default DemoIntro;