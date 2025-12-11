import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Zap,
  Users,
  Shield,
  Rocket,
  Brain,
  Target,
  Clock,
  Check,
  Sparkles,
  Bot,
  Wrench,
  LineChart,
  Building2,
  ArrowRight,
  Coins,
  Database,
  Key,
  FileText,
  HardDrive,
  AlertCircle,
  Lightbulb,
  GitBranch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterText, ParticleEffect, AnimatedGradientBackground, SlotMachineCounter, TiltCard } from "./effects";
import { useCustomer } from "@/contexts/CustomerContext";
import lovableIcon from "@/assets/lovable-icon.png";
import lovableLogoFull from "@/assets/lovable-logo-full.png";
import acmeLogo from "@/assets/acme-logo.png";
import lovableLight from "@/assets/lovable-light.png";

// Slide Layout Component
const SlideLayout = ({
  children,
  currentSlide,
  totalSlides,
}: {
  children: React.ReactNode;
  currentSlide: number;
  totalSlides: number;
}) => {
  return (
    <motion.div
      className="relative flex flex-col h-full bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <AnimatedGradientBackground />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--muted-foreground) / 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center relative z-10 p-8 md:p-12 pb-20">{children}</div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/30">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary/60"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-8 text-muted-foreground text-sm font-medium">
        {currentSlide + 1} / {totalSlides}
      </div>

      {/* Logo watermark */}
      <div className="absolute bottom-6 left-8">
        <img src={lovableLogoFull} alt="Lovable" className="h-6 w-auto" />
      </div>
    </motion.div>
  );
};

// ============================================================================
// SLIDES
// ============================================================================

const Slide1Title = () => {
  const { profile } = useCustomer();
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto relative">
      <ParticleEffect count={40} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center justify-center gap-6">
          <motion.img
            src={acmeLogo}
            alt={profile.companyName}
            className="h-8 md:h-11 w-auto object-contain"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          />
          <span className="text-3xl md:text-4xl text-muted-foreground font-light">×</span>
          <motion.img
            src={lovableLight}
            alt="Lovable"
            className="h-8 md:h-11 w-auto object-contain"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-4xl md:text-6xl font-semibold mb-6 text-foreground leading-[110%] tracking-[-0.03em]"
      >
        <TypewriterText text="Accelerate Technology Innovation" delay={1200} speed={50} />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl"
      >
        Empowering technology teams to accelerate development, reduce time-to-market, and ship with confidence
      </motion.p>
    </div>
  );
};

const Slide2Constraints = () => {
  const constraints = [
    { icon: AlertCircle, text: '"We have a backlog that never ends."', delay: 1 },
    { icon: Users, text: '"We can\'t hire enough engineering talent."', delay: 1.5 },
    { icon: Clock, text: '"Our internal IT debt keeps compounding."', delay: 2 },
  ];

  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 leading-[110%] tracking-[-0.03em]">
          <TypewriterText text="Every company is constrained by" speed={40} showCursor={false} />
          <br />
          <span className="text-primary">
            <TypewriterText text="its ability to build." delay={1800} speed={50} />
          </span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5 }}
        className="text-lg text-muted-foreground mb-8 max-w-3xl"
      >
        Not by ideas. Not by strategy. Not by ambition.
      </motion.p>

      <div className="grid gap-4 w-full max-w-3xl">
        {constraints.map((constraint, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4 + constraint.delay, duration: 0.5, type: "spring" }}
            className="bg-[#F7F4ED] dark:bg-card rounded-2xl p-5 border border-[#D8D6CF] dark:border-border flex items-center gap-4 text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <constraint.icon className="w-6 h-6 text-primary" />
            </div>
            <p className="text-lg text-foreground font-medium italic">{constraint.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Slide3BigIdea = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="mb-6"
      >
        <span className="inline-block px-6 py-2 rounded-full bg-primary/15 text-primary font-semibold text-sm uppercase tracking-wider">
          The Big Idea
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-6xl font-semibold mb-8 leading-[110%] tracking-[-0.03em]"
      >
        <span className="text-foreground">Unlocking the </span>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          className="text-primary inline-block"
        >
          <SlotMachineCounter value={99} delay={1} suffix="%" />
        </motion.span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="text-xl text-muted-foreground max-w-4xl leading-relaxed"
      >
        Imagine if your <strong className="text-foreground">subject-matter experts</strong>, analysts, ops teams, and
        domain experts could build anything — an app, a workflow, an agent —
        <span className="text-primary font-semibold"> with the same ease they build a spreadsheet.</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5 }}
        className="mt-10"
      >
        <TiltCard className="bg-[#F7F4ED] dark:bg-card rounded-3xl p-8 border border-[#D8D6CF] dark:border-border max-w-3xl shadow-lg">
          <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-semibold">
            <span className="text-foreground">That's</span>
            <img src={lovableLogoFull} alt="Lovable" className="h-8 md:h-10 w-auto" />
            <span className="text-foreground">.</span>
          </div>
        </TiltCard>
      </motion.div>
    </div>
  );
};

const Slide4Pillars = () => {
  const pillars = [
    {
      icon: Bot,
      title: "AI Transformation",
      desc: "AI agents doing real work, automated workflows",
      color: "bg-blue-100 border-blue-200 dark:bg-blue-900/30 dark:border-blue-700",
    },
    {
      icon: Wrench,
      title: "Internal Tools",
      desc: "Business teams build their own tools with IT control",
      color: "bg-purple-100 border-purple-200 dark:bg-purple-900/30 dark:border-purple-700",
    },
    {
      icon: Rocket,
      title: "Rapid Prototyping",
      desc: "Validate ideas quickly, iterate in real time",
      color: "bg-amber-100 border-amber-200 dark:bg-amber-900/30 dark:border-amber-700",
    },
  ];

  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-semibold mb-10 text-center leading-[110%] tracking-[-0.03em]"
      >
        Three Pillars of <span className="text-primary">Transformation</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 w-full">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
            className="bg-[#F7F4ED] dark:bg-card rounded-3xl p-6 border border-[#D8D6CF] dark:border-border text-center"
          >
            <div className={`w-14 h-14 rounded-2xl ${pillar.color} flex items-center justify-center mx-auto mb-4`}>
              <pillar.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{pillar.title}</h3>
            <p className="text-sm text-muted-foreground">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Slide5CreditsCloud = () => {
  const cloudFeatures = [
    { icon: Database, title: "Database" },
    { icon: Users, title: "Users & Auth" },
    { icon: HardDrive, title: "Storage" },
    { icon: Zap, title: "Edge Functions" },
    { icon: Brain, title: "AI" },
    { icon: Key, title: "Secrets" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-semibold mb-8 text-center leading-[110%] tracking-[-0.03em]"
      >
        <TypewriterText text="Lovable Credits & Cloud" speed={50} />
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#F7F4ED] dark:bg-card rounded-3xl p-6 border border-[#D8D6CF] dark:border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Coins className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Lovable Credits</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Credits power your AI-assisted development. Each prompt consumes credits, enabling your team to build at
            unprecedented speed.
          </p>
          <ul className="space-y-2 text-sm">
            {["Pooled across organization", "Flexible commitment tiers", "Top-up available anytime"].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#F7F4ED] dark:bg-card rounded-3xl p-6 border-2 border-primary/30 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Lovable Cloud</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Full-stack cloud platform from prototype to millions of users. Secure by default with enterprise-grade
            architecture.
          </p>

          <div className="grid grid-cols-3 gap-2">
            {cloudFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.08 }}
                className="bg-background/50 rounded-xl p-2 text-center border border-border/30"
              >
                <feature.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                <span className="text-xs font-medium text-foreground block">{feature.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Slide6WhyDifferent = () => {
  const capabilities = [
    { icon: Wrench, label: "App Building" },
    { icon: Zap, label: "Automation" },
    { icon: Database, label: "Data" },
    { icon: Bot, label: "AI Agents" },
    { icon: Shield, label: "Governance" },
    { icon: GitBranch, label: "Version Control" },
  ];

  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-semibold mb-4 text-center leading-[110%] tracking-[-0.03em]"
      >
        Why <span className="text-primary">Lovable</span> is Different
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-muted-foreground mb-8 text-center"
      >
        Most platforms do one thing. Lovable <span className="font-semibold text-foreground">unifies everything</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="relative w-[280px] h-[280px] mb-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="absolute w-12 h-12 rounded-full bg-background flex items-center justify-center z-10 shadow-lg border border-border/30"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <img src={lovableIcon} alt="Lovable" className="w-8 h-8 object-contain" />
        </motion.div>

        {capabilities.map((cap, index) => {
          const angle = (index * 360) / capabilities.length - 90;
          const radius = 100;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, x, y }}
              transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border shadow-md flex items-center justify-center">
                <cap.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[10px] text-muted-foreground font-medium text-center max-w-14">{cap.label}</span>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }}>
        <TiltCard className="bg-[#F7F4ED] dark:bg-card rounded-2xl p-5 border border-[#D8D6CF] dark:border-border text-center max-w-xl">
          <p className="text-foreground font-medium">Go from idea → demo → internal tool → production</p>
          <p className="text-sm text-muted-foreground mt-1">in a single environment.</p>
        </TiltCard>
      </motion.div>
    </div>
  );
};

const Slide7Speed = () => {
  const comparisons = [
    { before: "Quarters", after: "Days", label: "System development" },
    { before: "Sprints", after: "Minutes", label: "Minor changes" },
    { before: "Weeks", after: "Hours", label: "Prototypes" },
  ];

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-semibold mb-10 leading-[110%] tracking-[-0.03em]"
      >
        The <span className="text-primary">Speed</span> Advantage
      </motion.h2>

      <div className="grid gap-6 w-full max-w-2xl">
        {comparisons.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.2 }}
            className="bg-[#F7F4ED] dark:bg-card rounded-2xl p-6 border border-[#D8D6CF] dark:border-border flex items-center justify-between"
          >
            <div className="text-left">
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <div className="flex items-center gap-3">
                <span className="text-xl font-semibold text-muted-foreground line-through">{item.before}</span>
                <ArrowRight className="w-5 h-5 text-primary" />
                <span className="text-xl font-semibold text-primary">{item.after}</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#D4F9E4] dark:bg-green-900/30 border border-[#4AE88A] dark:border-green-700 flex items-center justify-center">
              <Check className="w-6 h-6 text-[#2B8A4B]" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Slide8Enterprise = () => {
  const features = [
    { icon: Shield, title: "SSO & SAML", desc: "Enterprise identity management" },
    { icon: GitBranch, title: "Version Control", desc: "Full Git integration" },
    { icon: Users, title: "Role-Based Access", desc: "Granular permissions" },
    { icon: FileText, title: "Audit Logs", desc: "Complete activity tracking" },
  ];

  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-semibold mb-10 text-center leading-[110%] tracking-[-0.03em]"
      >
        Enterprise-Grade <span className="text-primary">Security</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-5 w-full max-w-3xl">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            className="bg-[#F7F4ED] dark:bg-card rounded-2xl p-5 border border-[#D8D6CF] dark:border-border flex items-start gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-[#D4E0F9] dark:bg-blue-900/30 border border-[#9CAEFF] dark:border-blue-700 flex items-center justify-center flex-shrink-0">
              <feature.icon className="w-5 h-5 text-[#4A7AE8]" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Slide9NextSteps = () => {
  const { profile } = useCustomer();
  const steps = [
    { icon: Target, title: "Pilot Program", desc: "Start with 20-50 seats" },
    { icon: Lightbulb, title: "Use Case Workshop", desc: "Identify high-impact opportunities" },
    { icon: Rocket, title: "Launch & Scale", desc: "Expand across organization" },
  ];

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-semibold mb-4 leading-[110%] tracking-[-0.03em]"
      >
        Next Steps for <span className="text-primary">{profile.companyName}</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-muted-foreground mb-10"
      >
        Your path to AI-powered development
      </motion.p>

      <div className="flex flex-col md:flex-row gap-6 w-full">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2 }}
            className="flex-1 bg-[#F7F4ED] dark:bg-card rounded-3xl p-6 border border-[#D8D6CF] dark:border-border"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary font-semibold">
              {index + 1}
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Slide10Closing = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto relative">
      <ParticleEffect count={30} />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="mb-8"
      >
        <img src={lovableIcon} alt="Lovable" className="w-24 h-24" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-4xl md:text-6xl font-semibold mb-6 leading-[110%] tracking-[-0.03em]"
      >
        Let's build something <span className="text-primary">Lovable</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-xl text-muted-foreground max-w-2xl"
      >
        Ready to transform how your organization builds software?
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-10 flex gap-4"
      >
        <Button size="lg" className="gap-2">
          <Sparkles className="w-5 h-5" />
          Get Started
        </Button>
      </motion.div>
    </div>
  );
};

// ============================================================================
// MAIN PRESENTATION COMPONENT
// ============================================================================

const slides = [
  { component: Slide1Title },
  { component: Slide2Constraints },
  { component: Slide3BigIdea },
  { component: Slide4Pillars },
  { component: Slide5CreditsCloud },
  { component: Slide6WhyDifferent },
  { component: Slide7Speed },
  { component: Slide8Enterprise },
  { component: Slide9NextSteps },
  { component: Slide10Closing },
];

interface PitchDeckProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchDeck = ({ isOpen, onClose }: PitchDeckProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < slides.length) {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
      }
    },
    [currentSlide],
  );

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  useEffect(() => {
    if (!isOpen) {
      setCurrentSlide(0);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "Backspace") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextSlide, prevSlide, onClose]);

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 1000 : -1000, opacity: 0 }),
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background"
    >
      {/* Close button */}
      <Button variant="ghost" size="icon" onClick={onClose} className="absolute top-4 right-4 z-50">
        <X className="w-6 h-6" />
      </Button>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <SlideLayout currentSlide={currentSlide} totalSlides={slides.length}>
            <CurrentSlideComponent />
          </SlideLayout>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="w-12 h-12 rounded-full bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary/50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </motion.button>

        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-primary w-6" : "bg-border hover:bg-primary/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="w-12 h-12 rounded-full bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary/50 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PitchDeck;
