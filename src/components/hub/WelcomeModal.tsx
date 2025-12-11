import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  BarChart3, 
  GitBranch, 
  Brain, 
  Users, 
  CheckSquare, 
  MessageCircle, 
  Gift,
  Lightbulb,
  BookOpen,
  Sparkles,
  ArrowRight
} from "lucide-react";

const WELCOME_MODAL_KEY = "lovable_hub_welcome_shown";

const hubFeatures = [
  { icon: Play, title: "Watch Demo", description: "See Lovable in action" },
  { icon: Lightbulb, title: "Demo Ideas", description: "AI-powered suggestions" },
  { icon: BarChart3, title: "Usage Dashboard", description: "Your engagement metrics" },
  { icon: GitBranch, title: "Sales Process", description: "Track deal progress" },
  { icon: Brain, title: "AI Research", description: "Company-specific insights" },
  { icon: Users, title: "Social Proof", description: "Success stories" },
  { icon: CheckSquare, title: "Action Items", description: "Pre-call checklist" },
  { icon: MessageCircle, title: "FAQ & Chat", description: "AI-powered answers" },
  { icon: Gift, title: "Earn Swag", description: "Redeem points for rewards" },
];

interface WelcomeModalProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ forceOpen, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (forceOpen !== undefined) {
      setIsOpen(forceOpen);
      return;
    }
    
    const hasSeenWelcome = localStorage.getItem(WELCOME_MODAL_KEY);
    if (!hasSeenWelcome) {
      setIsOpen(true);
    }
  }, [forceOpen]);

  const handleClose = () => {
    localStorage.setItem(WELCOME_MODAL_KEY, "true");
    setIsOpen(false);
    onClose?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-2xl bg-[#F7F4ED] border-border/40 p-0 overflow-hidden">
        <div className="p-6 md:p-8">
          <DialogHeader className="text-left mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Welcome to Your Hub
              </span>
            </div>
            <DialogTitle className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              Navigate Your Customer Hub
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground mt-2">
              Your personalized space to explore Lovable, track progress, and prepare for our conversation.
            </DialogDescription>
          </DialogHeader>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {hubFeatures.map((feature) => (
              <div 
                key={feature.title}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background/50 border border-border/20"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground text-center leading-tight">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="bg-background/50 rounded-xl p-4 mb-6 border border-border/20">
            <h3 className="font-semibold text-foreground mb-3 text-sm">How It Works</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span>Explore each section from the home page cards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span>Complete actions to earn points toward exclusive swag</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span>Use the FAQ chatbot for instant answers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">4</span>
                <span>Redeem your points in the Swag section</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleClose} className="flex-1 gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Link to="/instructions" onClick={handleClose}>
              <Button variant="outline" className="w-full gap-2 bg-background/50 border-border/40">
                <BookOpen className="w-4 h-4" />
                View Full Guide
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;
